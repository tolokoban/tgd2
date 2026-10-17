import {
    type TgdContext,
    TgdGeometryBox,
    TgdMaterialFaceOrientation,
    TgdMaterialToon,
    type TgdMesh,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterDeferredShading,
    TgdPainterGroup,
    TgdPainterMeshes,
    TgdPainterState,
    TgdTexture2D,
    TgdTransfo,
} from "@tolokoban/tgd"
import { ViewOptions, ViewPanel } from "@tolokoban/ui"
import React from "react"
import View, { type Assets } from "@/components/demo/Tgd"
import SuzanneURL from "@/assets/mesh/suzanne.glb"

type Mode = "scene" | "normals" | "depth"

interface Groups {
    normals: TgdPainterGroup
    depth: TgdPainterGroup
}

function init(context: TgdContext, assets: Assets, refGroups: { current: Groups | null }) {
    // #begin Initializing WebGL
    const material = new TgdMaterialFaceOrientation()
    const box: TgdMesh = {
        geometry: new TgdGeometryBox(),
        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),
        visible: true,
        material,
    }
    const suzanne: TgdMesh = {
        geometry: assets.glb.suzanne.makeGeometry(),
        transfo: new TgdTransfo(),
        visible: true,
        material,
    }
    const meshes = [box, suzanne]
    const deferred = new TgdPainterDeferredShading(context, { meshes })
    const painterMeshes = new TgdPainterState(context, {
        depth: "lessOrEqual",
        cull: "back",
        blend: "off",
        children: [new TgdPainterMeshes(context, { meshes })],
    })
    const makeBackground = (texture: TgdTexture2D) =>
        new TgdPainterGroup([new TgdPainterBackground(context, { texture, scaleY: -1 })])
    const groups: Groups = {
        normals: makeBackground(deferred.textureNormals),
        depth: makeBackground(deferred.textureDepth),
    }
    refGroups.current = groups
    applyMode(groups, "scene")
    context.add(
        deferred,
        new TgdPainterClear(context, { color: [0.3, 0.22, 0, 1], depth: 1 }),
        painterMeshes,
        new TgdPainterState(context, {
            depth: "off",
            cull: "off",
            blend: "off",
            children: [groups.depth, groups.normals],
        }),
        (_time, delta) => {
            box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94)
        },
    )
    // A short depth range makes the depth texture easier to see.
    context.camera.near = 1
    context.camera.far = 20
    context.camera.fitSpaceAtTarget(5, 5)
    context.play()
    // #end
}

export default function Demo() {
    const refContext = React.useRef<TgdContext | null>(null)
    const refGroups = React.useRef<Groups | null>(null)
    const [mode, setMode] = React.useState<Mode>("scene")
    const handleModeChange = (value: Mode) => {
        setMode(value)
        const context = refContext.current
        const groups = refGroups.current
        if (!context || !groups) return

        applyMode(groups, value)
        context.paint()
    }
    return (
        <View
            onReady={(context: TgdContext, assets: Assets) => {
                refContext.current = context
                init(context, assets, refGroups)
            }}
            assets={{ glb: { suzanne: SuzanneURL } }}
            controller={{ inertiaOrbit: 1000 }}
            gizmo>
            <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap">
                <ViewOptions value={mode} onChange={handleModeChange}>
                    <div key="scene">scene</div>
                    <div key="normals">normals</div>
                    <div key="depth">depth</div>
                </ViewOptions>
            </ViewPanel>
        </View>
    )
}

// #begin applyMode()
/**
 * Show the scene, the normals texture or the depth texture.
 */
function applyMode(groups: Groups, mode: Mode) {
    groups.normals.active = mode === "normals"
    groups.depth.active = mode === "depth"
}
// #end
