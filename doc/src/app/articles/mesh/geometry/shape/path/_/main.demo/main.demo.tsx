import {
    type TgdContext,
    TgdControllerCameraOrbit,
    TgdGeometryPath,
    type TgdGeometryPathFillRule,
    type TgdGeometryPathOptions,
    type TgdMaterial,
    TgdMaterialGlobal,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterState,
    TgdTexture2D,
    TgdTextureCube,
} from "@tolokoban/tgd"
import { ViewOptions, ViewPanel } from "@tolokoban/ui"
import React from "react"

import View, { type Assets } from "@/components/demo/Tgd"
import UVGridURL from "@/assets/image/uv-grid.webp"
import PosX from "@/assets/cubemap/sky/contrast/posX.webp"
import PosY from "@/assets/cubemap/sky/contrast/posY.webp"
import PosZ from "@/assets/cubemap/sky/contrast/posZ.webp"
import NegX from "@/assets/cubemap/sky/contrast/negX.webp"
import NegY from "@/assets/cubemap/sky/contrast/negY.webp"
import NegZ from "@/assets/cubemap/sky/contrast/negZ.webp"

const GHOST =
    "M12,2A9,9 0 0,0 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11A9,9 0 0,0 12,2M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12A2,2 0 0,1 7,10A2,2 0 0,1 9,8M15,8A2,2 0 0,1 17,10A2,2 0 0,1 15,12A2,2 0 0,1 13,10A2,2 0 0,1 15,8Z"
/**
 * Three concentric circles, all turning in the same direction.
 * With "evenodd", the middle one is a hole. With "nonzero", it is a full disc.
 */
const TARGET =
    "M2,12A10,10 0 1,1 22,12A10,10 0 1,1 2,12ZM6,12A6,6 0 1,1 18,12A6,6 0 1,1 6,12ZM10,12A2,2 0 1,1 14,12A2,2 0 1,1 10,12Z"
const SHAPES = { ghost: GHOST, target: TARGET }

type Shape = keyof typeof SHAPES

// #begin
function init(context: TgdContext, assets: Assets) {
    const clear = new TgdPainterClear(context, {
        color: [0.1, 0.1, 0.1, 1],
        depth: 1,
    })
    const texture = new TgdTexture2D(context, {
        load: assets.image.uvGrid,
    })
    // The skybox is not painted: it is only used for the reflections.
    const skybox = new TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ,
    })
    const material = new TgdMaterialGlobal({
        color: texture,
        ambientColor: skybox,
    })
    // Brushed metal.
    material.specularExponent = 1
    material.specularIntensity = 1.5
    const group = new TgdPainterState(context, {
        depth: "less",
        cull: "back",
    })
    fillGroup(context, group, material, SHAPES.ghost, "evenodd")
    context.add(clear, group)
    context.camera.fitSpaceAtTarget(6.5, 6.5)
    context.paint()
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        inertiaZoom: 1000,
    })
    return { context, group, material }
}
// #end

export default function Demo() {
    const ref = React.useRef<ReturnType<typeof init> | null>(null)
    const [shape, setShape] = React.useState<Shape>("ghost")
    const [fillRule, setFillRule] = React.useState<TgdGeometryPathFillRule>("evenodd")
    const update = (shape: Shape, fillRule: TgdGeometryPathFillRule) => {
        setShape(shape)
        setFillRule(fillRule)
        const scene = ref.current
        if (!scene) return

        fillGroup(scene.context, scene.group, scene.material, SHAPES[shape], fillRule)
        scene.context.paint()
    }
    return (
        <View
            onReady={(context: TgdContext, assets: Assets) => {
                ref.current = init(context, assets)
            }}
            assets={{
                image: {
                    uvGrid: UVGridURL,
                    posX: PosX,
                    posY: PosY,
                    posZ: PosZ,
                    negX: NegX,
                    negY: NegY,
                    negZ: NegZ,
                },
            }}
            gizmo>
            <ViewPanel display="flex" justifyContent="space-around" alignItems="center" gap="S">
                <ViewOptions label="Shape" value={shape} onChange={(value: Shape) => update(value, fillRule)}>
                    <div key="ghost">ghost</div>
                    <div key="target">target</div>
                </ViewOptions>
                <ViewOptions
                    label="fillRule"
                    value={fillRule}
                    onChange={(value: TgdGeometryPathFillRule) => update(shape, value)}>
                    <div key="evenodd">evenodd</div>
                    <div key="nonzero">nonzero</div>
                </ViewOptions>
            </ViewPanel>
        </View>
    )
}

// #begin fillGroup()
/**
 * Replace the content of `group` with the same path in four versions:
 * flat, with a thickness, with a round bevel and with a concave bevel.
 */
function fillGroup(
    context: TgdContext,
    group: TgdPainterState,
    material: TgdMaterial,
    path: string,
    fillRule: TgdGeometryPathFillRule,
) {
    // The previous meshes are deleted, but not the material they share.
    group.removeAll()
    group.add(
        // Flat.
        createShape(context, material, path, -1.5, +1.5, { flipY: true, fillRule }),
        // With a thickness.
        createShape(context, material, path, +1.5, +1.5, {
            flipY: true,
            fillRule,
            thickness: 4,
        }),
        // With a round bevel.
        createShape(context, material, path, -1.5, -1.5, {
            flipY: true,
            fillRule,
            thickness: 4,
            bevel: { width: 0.8, segments: 8 },
        }),
        // With a concave bevel.
        createShape(context, material, path, +1.5, -1.5, {
            flipY: true,
            fillRule,
            thickness: 4,
            bevel: { width: 0.8, segments: 32, profileShape: 0.125 },
        }),
    )
}
// #end

// #begin createShape()
/**
 * The icons are 24x24. Once flipped, it goes from (0, -24) to (24, 0),
 * so we center it on (x, y).
 */
function createShape(
    context: TgdContext,
    material: TgdMaterial,
    path: string,
    x: number,
    y: number,
    options: TgdGeometryPathOptions,
) {
    const scale = 0.1
    const mesh = new TgdPainterMesh(context, {
        geometry: new TgdGeometryPath(path, options),
        material,
    })
    mesh.transfo.setScale(scale)
    mesh.transfo.setPosition(x - 12 * scale, y + 12 * scale, 0)
    return mesh
}
// #end
