import {
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdFilterHueRotation,
    TgdFilterZoom,
    TgdPainterAxis,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterLogic,
    TgdPainterMeshGltf,
    TgdPainterState,
    TgdVec4,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"
import { Material } from "./material"

// import WorldURL from "./world.glb"
import WorldURL from "@/assets/mesh/suzanne.glb"

function init(context: TgdContext, assets: Assets) {
    // #begin

    context.camera = new TgdCameraPerspective({
        distance: 4,
        far: 100,
        near: 0.01,
        fovy: Math.PI * 0.25,
        zoom: 1,
    })
    const orbit = new TgdControllerCameraOrbit(context, {
        speedPanning: 0,
        inertiaOrbit: 1000,
        latlng: {
            lat: Math.PI * 0.1,
            minLat: Math.PI * 0.1,
        },
    })
    const framebufferRender = new TgdPainterFramebuffer(context)
    const framebufferCopy = new TgdPainterFramebuffer(context)
    const material = new Material()
    material.texture = context.textures2D.create({
        image: assets.image.background,
    })
    const painter = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        // cull: webglPresetCull.front,
        children: [
            new TgdPainterClear(context, {
                color: new TgdVec4(0, 0.1, 0.3),
                depth: 1,
            }),
            new TgdPainterMeshGltf(context, {
                asset: assets.glb.world,
            }),
            new TgdPainterAxis(context, { scale: 2 }),
        ],
    })
    context.add(
        painter,
        new TgdPainterLogic((time, delay) => {
            // console.log("logic...")
            // orbit.orbitLatLng(0.75 * Math.PI * Math.sin(time * 0.001), 0)
        })
    )
    // orbit.orbitLatLng(Math.PI, 0)
    context.paint()
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                glb: {
                    world: WorldURL,
                },
                // image: {
                //     background: BackgroundURL,
                // },
            }}
        />
    )
}
