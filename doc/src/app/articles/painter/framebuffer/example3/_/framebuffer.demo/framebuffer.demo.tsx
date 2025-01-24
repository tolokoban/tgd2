import {
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdFilterVerbatim,
    TgdGeometryPlane,
    TgdMaterialSolid,
    TgdMath,
    TgdPainterClear,
    TgdPainterDebugStencil,
    TgdPainterFilter,
    TgdPainterFramebuffer,
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
    const orbit = new TgdControllerCameraOrbit(context, {
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
    // const framebufferRender = new TgdPainterFramebuffer(context, {
    //     depthBuffer: true,
    // })
    // framebufferRender.add(clear, mesh, sea)
    // const filter = new TgdPainterFilter(context, {
    //     flipY: true,
    //     filters: [new TgdFilterVerbatim()],
    //     texture: framebufferRender.textureColor0,
    // })
    // framebufferRender.onExit = () =>
    //     (filter.texture = framebufferRender.textureColor0)
    context.add(
        new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            cull: webglPresetCull.off,
            children: [
                clear,
                new TgdPainterState(context, {
                    stencil: webglPresetStencil.write(1),
                    children: [mesh],
                }),
                new TgdPainterState(context, {
                    stencil: webglPresetStencil.paintIfEqual(1),
                    // stencil: webglPresetStencil.write(2),
                    children: [sea],
                }),
                // new TgdPainterDebugStencil(context),
            ],
        })
        // new TgdPainterState(context, {
        //     stencil: webglPresetStencil.paintIf0,
        //     children: [filter],
        // })
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
