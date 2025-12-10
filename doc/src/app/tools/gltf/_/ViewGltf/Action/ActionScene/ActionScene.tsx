import * as React from "react"

import { Theme } from "@tolokoban/ui"
import {
    ArrayNumber3,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdDataGlb,
    TgdFormatGltfNode,
    TgdFormatGltfScene,
    TgdGeometryBox,
    tgdMakeMeshGlbPainter,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterNode,
    TgdPainterState,
    TgdTransfo,
    TgdTransfoOptions,
    TgdVec3,
    TgdVec4,
    webglPresetDepth,
} from "@tolokoban/tgd"

import Styles from "./ActionScene.module.css"
import Tgd from "@/components/demo/Tgd"
import { isNumber, isType } from "@tolokoban/type-guards"

const $ = Theme.classNames

export type ViewActionSceneProps = { data: TgdDataGlb; index: number }

export function ViewActionScene({ data, index }: ViewActionSceneProps) {
    const scene = data.json.scenes?.[index]
    const handleReady = useReadyHandler(data, scene)

    if (!scene) return <p>No scene...</p>
    return (
        <div className={$.join(Styles.actionScene)}>
            <Tgd
                key={JSON.stringify(scene)}
                onReady={handleReady}
                width="100%"
                height="100%"
                gizmo
                noBorder
            ></Tgd>
        </div>
    )
}

function useReadyHandler(data: TgdDataGlb, scene?: TgdFormatGltfScene) {
    return React.useCallback(
        (context: TgdContext) => {
            if (!scene) {
                console.error("No Scene!")
                return
            }

            const scenePainter = new TgdPainterNode({
                children: (scene.nodes ?? [])
                    .filter((nodeIndex) => {
                        const node = data.getNode(nodeIndex)
                        return (
                            isNumber(node.mesh) ||
                            (Array.isArray(node.children) &&
                                node.children.length > 0)
                        )
                    })
                    .map(
                        (node) =>
                            tgdMakeMeshGlbPainter({
                                data,
                                node,
                                context,
                            }).painter
                    ),
                name: scene.name ?? "Scene",
            })
            scenePainter.debug()
            const bboxes = (scene.nodes ?? []).map((nodeIndex) =>
                computeBBox(data, data.getNode(nodeIndex))
            )
            const bbox = averageBBoxes(bboxes)
            context.camera.transfo.position = bbox.center
            context.camera.transfo.distance = bbox.radius * 2
            context.camera.far = bbox.radius * 5
            context.camera.far = context.camera.near * 1e-5
            new TgdControllerCameraOrbit(context, {
                inertiaOrbit: 1000,
                speedZoom: bbox.radius * 0.25,
            })
            const clear = new TgdPainterClear(context, {
                color: [0.2, 0.2, 0.2, 1],
                depth: 1,
            })
            const state = new TgdPainterState(context, {
                depth: webglPresetDepth.lessOrEqual,
                children: [scenePainter],
            })
            context.add(clear, state)
            context.paint()
        },
        [data, scene]
    )
}

interface BBox {
    center: TgdVec3
    radius: number
}

function computeBBox(data: TgdDataGlb, node: TgdFormatGltfNode): BBox {
    const bboxes: BBox[] = []
    if (isNumber(node.mesh))
        bboxes.push(averageBBoxes(computeMeshBBox(data, node.mesh)))
    for (const nodeIndex of node.children ?? []) {
        const childNode = data.getNode(nodeIndex)
        bboxes.push(computeBBox(data, childNode))
    }
    return applyTransfo(averageBBoxes(bboxes), node)
}

function computeMeshBBox(data: TgdDataGlb, meshIndex: number): BBox[] {
    const mesh = data.getMesh(meshIndex)
    if (!mesh) {
        return [
            {
                center: new TgdVec3(),
                radius: 1,
            },
        ]
    }

    const bboxes: BBox[] = []
    for (const primitive of mesh.primitives) {
        const accessor = data.getAccessorByAttributeName(primitive, "POSITION")
        if (isVec3(accessor.min) && isVec3(accessor.max)) {
            const [minX, minY, minZ] = accessor.min
            const [maxX, maxY, maxZ] = accessor.max
            bboxes.push({
                center: TgdVec3.newFromMix(accessor.min, accessor.max),
                radius: Math.max(
                    Math.abs(maxX - minX),
                    Math.abs(maxY - minY),
                    Math.abs(maxZ - minZ)
                ),
            })
        }
    }

    return bboxes
}

function isVec3(data: unknown): data is ArrayNumber3 {
    return isType(data, ["array", "number", { min: 3, max: 3 }])
}

function averageBBoxes(bboxes: BBox[]): BBox {
    if (bboxes.length === 0)
        return {
            center: new TgdVec3(),
            radius: 1,
        }
    let x: number = 0
    let y: number = 0
    let z: number = 0
    for (const { center } of bboxes) {
        const [xx, yy, zz] = center
        x += xx
        y += yy
        z += zz
    }
    const count = bboxes.length
    x /= count
    y /= count
    z /= count
    const newCenter = new TgdVec3(x, y, z)
    let newRadius = 0
    for (const { center, radius } of bboxes) {
        newRadius = Math.max(
            newRadius,
            radius + TgdVec3.distance(newCenter, new TgdVec3(center))
        )
    }
    return {
        center: newCenter,
        radius: newRadius,
    }
}

function applyTransfo(bbox: BBox, node: TgdFormatGltfNode): BBox {
    const [x, y, z] = bbox.center
    const center = new TgdVec4(x, y, z, 1)
    const transfoOptions: Partial<TgdTransfoOptions> = {}
    if (node.translation) transfoOptions.position = node.translation
    if (node.rotation) transfoOptions.orientation = node.rotation
    if (node.scale) transfoOptions.scale = node.scale
    const transfo = new TgdTransfo(transfoOptions)
    center.applyMatrix(transfo.matrix)
    const [sx, sy, sz] = transfo.scale
    const s = Math.max(sx, sy, sz)
    return {
        center: new TgdVec3(center.x, center.y, center.z),
        radius: bbox.radius * s,
    }
}
