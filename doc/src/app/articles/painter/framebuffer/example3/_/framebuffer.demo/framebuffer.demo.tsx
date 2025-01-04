import {
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdFilterHueRotation,
    TgdFilterZoom,
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

import VideoURL from "./fabien.mp4"
import BackgroundURL from "@/assets/image/dino.webp"

function init(context: TgdContext, assets: Assets) {
    // #begin

    context.camera = new TgdCameraPerspective({
        distance: 0,
        far: 100,
        near: 0.01,
        fovy: Math.PI * 0.25,
        zoom: 0.333,
    })
    new TgdControllerCameraOrbit(context, {
        speedPanning: 0,
        inertiaOrbit: 1000,
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
                color: new TgdVec4(),
                depth: 1,
            }),
            new TgdPainterMeshGltf(context, {
                asset: assets.glb.mesh,
                materialFactory: () => material,
            }),
        ],
    })
    framebufferRender.add(painter)
    const copy = new TgdPainterFilter(context, {
        filters: [
            new TgdFilterHueRotation({
                hueShiftInDegrees: 90,
            }),
        ],
        texture: framebufferRender.texture,
    })
    framebufferCopy.add(copy)
    const screen = new TgdPainterFilter(context, {
        texture: framebufferRender.texture,
        filters: [new TgdFilterZoom({ zoom: 1.1 })],
        flipY: true,
    })
    framebufferRender.onExit = () => {
        copy.texture = framebufferRender.texture
    }
    framebufferCopy.onExit = () => {
        material.texture = framebufferCopy.texture
        screen.texture = framebufferCopy.texture
    }
    context.add(
        framebufferRender,
        framebufferCopy,
        screen,
        new TgdPainterLogic((time, delay) => {
            const { camera } = context
            camera.orbitAroundY(delay * 0.0001047)
            // camera.orbitAroundX(delay * 0.00007154)
            // camera.orbitAroundZ(delay * 0.0003051)
            // camera.zoom = 0.333 + 0.3 * Math.abs(Math.sin(time * 0.001457))
        })
    )
    context.paint()
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                glb: {
                    mesh: CubeURL,
                },
                image: {
                    background: BackgroundURL,
                },
            }}
        />
    )
}
