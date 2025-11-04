import { TgdContext } from "@tgd/context"
import { TgdMaterial } from "@tgd/material"
import { TgdTransfoOptions, TgdVec4 } from "@tgd/math"
import {
    TgdPainterMeshGltf,
    TgdPainterNode,
    TgdPainterNodeChild,
} from "@tgd/painter"
import { TgdDataGlb } from "@tgd/parser"
import { TgdTexture2D } from "@tgd/texture"
import {
    TgdFormatGltfMesh,
    TgdFormatGltfMeshPrimitive,
    TgdFormatGltfNode,
    TgdInterfaceTransformable,
} from "@tgd/types"
import { isNumber, isString } from "@tgd/types/guards"

interface OverrideMaterialOptions {
    data: TgdDataGlb
    mesh: TgdFormatGltfMesh
    primitive: TgdFormatGltfMeshPrimitive
}

type MaterialOverrider = (
    options: OverrideMaterialOptions
) => (this: void, options: { color?: TgdVec4 | TgdTexture2D }) => TgdMaterial

interface MakeMeshGlbPainterOptions {
    data: TgdDataGlb
    context: TgdContext
    node: number | string | TgdFormatGltfNode
    overrideMaterial?: MaterialOverrider
    /**
     * If defined, we skip all primitive with a material's name in the list.
     */
    excludeByMaterialName?: string[]
    /**
     * If defined, we skip all primitives with a material's name NOT in the list.
     */
    includeOnlyMaterialNames?: string[]
}

/**
 * Create a `TgdPainterNode` from a node hierarchy from a GLTF structure.
 * @param options
 * * `data`: a GLTF parser
 * * `context`: we will create painters, so we need a TgdContext
 * * `node`: the root node you want to paint.
 * @returns
 */
export function tgdMakeMeshGlbPainter(options: MakeMeshGlbPainterOptions): {
    painter: TgdPainterNode
} {
    const { data, node = 0 } = options
    const actualNode = getActualNode(data, node)
    const painter = makeNodePainter(actualNode, options)
    return { painter }
}

/**
 * Retrieve node by index or by name
 */
function getActualNode(
    data: TgdDataGlb,
    node: number | string | TgdFormatGltfNode
): TgdFormatGltfNode {
    if (isNumber(node)) return data.getNode(node)
    if (isString(node)) return data.getNodeByNameOrThrow(node)
    return node
}

function makeNodePainter(
    node: TgdFormatGltfNode,
    options: MakeMeshGlbPainterOptions
): TgdPainterNode {
    const transfo: Partial<TgdTransfoOptions> = {}
    if (node.translation) {
        transfo.position = node.translation
    }
    if (node.rotation) {
        transfo.orientation = node.rotation
    }
    if (node.scale) {
        transfo.scale = node.scale
    }
    const { data } = options
    const children: TgdPainterNodeChild[] = makeMeshPainters(node.mesh, options)
    if (node.children) {
        for (const nodeIndex of node.children) {
            children.push(makeNodePainter(data.getNode(nodeIndex), options))
        }
    }
    const painter = new TgdPainterNode({
        name: `TgdPainterNode::${node.name}`,
        transfo,
        children,
    })
    return painter
}

function makeMeshPainters(
    meshIndexOrName: number | string | undefined,
    options: MakeMeshGlbPainterOptions
): TgdInterfaceTransformable[] {
    if (!isNumber(meshIndexOrName)) return []

    const {
        data,
        context,
        overrideMaterial,
        excludeByMaterialName,
        includeOnlyMaterialNames,
    } = options
    const mesh = data.getMesh(meshIndexOrName)
    const targets: TgdPainterMeshGltf[] = []
    for (
        let primitiveIndex = 0;
        primitiveIndex < mesh.primitives.length;
        primitiveIndex++
    ) {
        const primitive = data.getMeshPrimitive(meshIndexOrName, primitiveIndex)
        const material = isNumber(primitive.material)
            ? data.getMaterial(primitive.material)
            : null
        const materialName = material?.name ?? `#${primitive.material}`
        if (
            excludeByMaterialName &&
            excludeByMaterialName.includes(materialName)
        ) {
            // Skipping this primitive because the material has been excluded.
            continue
        }

        if (
            includeOnlyMaterialNames &&
            !includeOnlyMaterialNames.includes(materialName)
        ) {
            // If we have an include only list, we skip everything else.
            continue
        }

        const materialFactory = overrideMaterial?.({
            data,
            mesh,
            primitive,
        })
        const target = new TgdPainterMeshGltf(context, {
            name: `${mesh.name}/${material?.name ?? ""}`,
            asset: data,
            meshIndexOrName: meshIndexOrName,
            primitiveIndex,
            material: materialFactory,
        })
        targets.push(target)
    }
    return targets
}
