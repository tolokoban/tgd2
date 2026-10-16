import {
    type ArrayNumber3,
    TgdCameraOrthographic,
    type TgdContext,
    TgdGeometryPlane,
    TgdLight,
    TgdMaterialDiffuse,
    TgdMaterialShadow,
    type TgdMesh,
    TgdPainterClear,
    TgdPainterMeshes,
    TgdPainterShadow,
    TgdPainterState,
    TgdTexture2D,
    TgdTransfo,
} from "@tolokoban/tgd"
import { ViewOptions, ViewPanel } from "@tolokoban/ui"
import React from "react"
import View, { type Assets } from "@/components/demo/Tgd"

import SuzanneURL from "@/assets/mesh/suzanne.glb"
import UVGridURL from "@/assets/image/whale-1024.webp"

type Shader = "multiply" | "color" | "add" | "halftone"

/** Everything that does not depend on `shader`. */
interface Scene {
    light: TgdCameraOrthographic
    diffuseLight: TgdLight
    suzanne: TgdMesh
    texture: TgdTexture2D
}

function init(context: TgdContext, assets: Assets, refScene: { current: Scene | null }) {
    // #begin Initializing WebGL
    // The light looks at (0,0,0) from the opposite side of the corner,
    // so the shadow of Suzanne falls on the three planes.
    const light = new TgdCameraOrthographic({
        transfo: new TgdTransfo({ distance: 0, position: [-4.5, 6, -6] }),
        // Half of the height of the visible area.
        spaceHeight: 5,
        near: 0.1,
        far: 30,
    })
    light.transfo.lookAt([0, 0, 0])
    // Square shadow texture.
    light.screenWidth = 1
    light.screenHeight = 1
    // The diffuse materials are lit from the same direction.
    // The light camera looks toward its -Z axis.
    const [lx, ly, lz] = light.transfo.axisZ
    const diffuseLight = new TgdLight({ direction: [-lx, -ly, -lz] })
    const suzanne: TgdMesh = {
        geometry: assets.glb.suzanne.makeGeometry(),
        material: new TgdMaterialDiffuse({
            color: "#e99",
            light: diffuseLight,
        }),
        // Slightly moved toward the camera.
        transfo: new TgdTransfo({ position: [-0.31, 0.25, -0.31], scale: [1.5, 1.5, 1.5] }),
        visible: true,
    }
    // Shared between all the shaders, so we load it only once.
    const texture = new TgdTexture2D(context).loadBitmap(assets.image.grid)
    const scene: Scene = { light, diffuseLight, suzanne, texture }
    refScene.current = scene
    addPainters(context, "halftone", scene)
    // Look into the corner formed by the three planes,
    // a bit from the right to see the shadow behind Suzanne.
    const [cx, cy, cz] = [-1.4, 0.8, -0.5]
    context.camera.transfo.orientation = new TgdTransfo({ position: [cx, cy, cz] }).lookAt([0, 0, 0]).orientation
    context.camera.fitSpaceAtTarget(7, 7)
    // Suzanne faces +Z, and `lookAt()` makes -Z point to the target,
    // so we look away from the camera to make her face it.
    const [sx, sy, sz] = suzanne.transfo.position
    suzanne.transfo.lookAt([sx - cx, sy - cy, sz - cz])
    context.paint()
    // #end
}

export default function Demo() {
    const refContext = React.useRef<TgdContext | null>(null)
    const refScene = React.useRef<Scene | null>(null)
    const [shader, setShader] = React.useState<Shader>("halftone")
    const handleShaderChange = (value: Shader) => {
        setShader(value)
        const context = refContext.current
        const scene = refScene.current
        if (!context || !scene) return

        addPainters(context, value, scene)
        context.paint()
    }
    return (
        <View
            onReady={(context: TgdContext, assets: Assets) => {
                refContext.current = context
                init(context, assets, refScene)
            }}
            assets={{
                glb: { suzanne: SuzanneURL },
                image: { grid: UVGridURL },
            }}
            controller={{ inertiaOrbit: 1000 }}
            gizmo>
            <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap">
                <ViewOptions label="Shader" value={shader} onChange={handleShaderChange}>
                    <div key="multiply">multiply</div>
                    <div key="color">color</div>
                    <div key="add">add</div>
                    <div key="halftone">halftone</div>
                </ViewOptions>
            </ViewPanel>
        </View>
    )
}

// #begin addPainters()
/**
 * Clear the context and recreate the painters that depend on `shader`.
 */
function addPainters(context: TgdContext, shader: Shader, { light, diffuseLight, suzanne, texture }: Scene) {
    context.removeAll()
    // Only Suzanne casts a shadow.
    const shadow = new TgdPainterShadow(context, {
        camera: light,
        meshes: [suzanne],
        resolution: 1024,
    })
    // Only the planes catch the shadow.
    const material = new TgdMaterialShadow({
        camera: light,
        texture: shadow.texture,
        material: new TgdMaterialDiffuse({
            color: texture,
            light: diffuseLight,
        }),
        shader,
    })
    const planes = [
        // Facing +Y
        makePlane(material, [0, -3, 0], [1, 0, 0], [0, 0, -1]),
        // Facing -X
        makePlane(material, [3, 0, 0], [0, 0, 1], [0, 1, 0]),
        // Facing -Z
        makePlane(material, [0, 0, 3], [-1, 0, 0], [0, 1, 0]),
    ]
    context.add(
        shadow,
        new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1], depth: 1 }),
        new TgdPainterState(context, {
            depth: "less",
            cull: "back",
            children: [
                new TgdPainterMeshes(context, {
                    meshes: [suzanne, ...planes],
                }),
            ],
        }),
    )
}
// #end

// #begin makePlane()
const SIZE = 6

/**
 * The normal of a plane is `vecX ^ vecY`.
 */
function makePlane(
    material: TgdMaterialShadow,
    position: ArrayNumber3,
    vecX: ArrayNumber3,
    vecY: ArrayNumber3,
): TgdMesh {
    return {
        geometry: new TgdGeometryPlane({ sizeX: SIZE, sizeY: SIZE, vecX, vecY }),
        material,
        transfo: new TgdTransfo({ position }),
        visible: true,
    }
}
// #end
