import {
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdFilterVerbatim,
    TgdFilterZoom,
    TgdGeometryPlane,
    TgdMaterialSolid,
    TgdMath,
    TgdPainterClear,
    TgdPainterDebugStencil,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterMeshGltf,
    TgdPainterState,
    TgdVec4,
    webglPresetCull,
    webglPresetDepth,
    webglPresetStencil,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

// import WorldURL from "./world.glb"
import WorldURL from "@/assets/mesh/chinese-chandelier.glb"
import GridURL from "@/assets/mesh/grid-10x10.glb"

function init(context: TgdContext, assets: Assets) {
    // #begin

    context.camera = new TgdCameraPerspective({
        distance: 2,
        far: 100,
        near: 0.01,
        fovy: TgdMath.degreesToRadians(35),
        zoom: 1,
    })
    new TgdControllerCameraOrbit(context, {
        speedPanning: 0,
        inertiaOrbit: 1000,
        geo: {
            lat: TgdMath.degreesToRadians(50),
            minLat: TgdMath.degreesToRadians(20),
            maxLat: TgdMath.degreesToRadians(80),
        },
    })
    const clear = new TgdPainterClear(context, {
        color: new TgdVec4(0.4, 0.7, 0.9),
        depth: 1,
        stencil: 0,
    })
    const mesh = new TgdPainterMeshGltf(context, {
        asset: assets.glb.world,
    })
    const sea = new TgdPainterMesh(context, {
        geometry: new TgdGeometryPlane({ sizeX: 1, sizeY: 1 }),
        material: new TgdMaterialSolid({ color: [0, 0, 0.8, 1] }),
    })
    const scene = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        children: [
            new TgdPainterState(context, {
                cull: webglPresetCull.back,
                children: [mesh],
            }),
            new TgdPainterState(context, {
                color: false,
                stencil: webglPresetStencil.write(1),
                children: [sea],
            }),
        ],
    })

    const framebuffer = new TgdPainterFramebuffer(context, {
        children: [clear, scene],
    })
    const filter = new TgdPainterFilter(context, {
        flipY: true,
        filters: [new TgdFilterVerbatim()],
        texture: framebuffer.textureColor0,
    })
    framebuffer.onExit = () => (filter.texture = framebuffer.textureColor0)
    // context.add(clear, scene)
    context.add(
        framebuffer,
        new TgdPainterClear(context, { color: [0, 1, 0, 1] }),
        new TgdPainterLogic(() => {
            framebuffer.blitStencilBuffer()
        }),
        new TgdPainterState(context, {
            stencil: webglPresetStencil.paintIfEqual(0),
            children: [filter],
        }),
        new TgdPainterDebugStencil(context)
    )
    context.paint()
    // #end
}

export default function Demo() {
    return (
        <View
            options={{ antialias: true, stencil: true, depth: true }}
            onReady={init}
            assets={{
                glb: {
                    world: WorldURL,
                    see: GridURL,
                },
            }}
        />
    )
}
