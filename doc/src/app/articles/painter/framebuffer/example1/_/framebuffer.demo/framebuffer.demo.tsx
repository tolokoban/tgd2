import {
    TgdCameraPerspective,
    TgdContext,
    TgdFilterHueRotation,
    TgdFilterZoom,
    TgdLight,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterLogic,
    TgdPainterMeshGltf,
    TgdPainterState,
    TgdTexture2D,
    TgdVec3,
    TgdVec4,
    webglPresetCull,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import SuzanneURL from "@/assets/mesh/logo.glb"
import BackgroundURL from "@/assets/image/dino.webp"

function init(context: TgdContext, assets: Assets) {
    // #begin
    const defaultTexture = new TgdTexture2D(context)
    context.camera = new TgdCameraPerspective({
        distance: 6,
        far: 100,
        near: 0.01,
        fovy: Math.PI / 4,
        zoom: 1,
    })
    const framebuffer1 = new TgdPainterFramebuffer(context)
    const framebuffer2 = new TgdPainterFramebuffer(context)
    const background = new TgdPainterFilter(context, {
        texture: framebuffer2.textureColor0 ?? defaultTexture,
        filters: [new TgdFilterZoom()],
        flipY: true,
    })
    const painter = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        cull: webglPresetCull.back,
        children: [
            background,
            new TgdPainterClear(context, {
                depth: 1,
            }),
            new TgdPainterMeshGltf(context, {
                asset: assets.glb.mesh,
                materialFactory: () =>
                    new TgdMaterialDiffuse({
                        color: new TgdVec4(1, 0.666, 0),
                        specularExponent: 5,
                        specularIntensity: 2.5,
                        light: new TgdLight({
                            color: new TgdVec4(1, 1, 1, 1),
                            direction: new TgdVec3(1, 0, 0),
                        }),
                        ambient: new TgdLight({
                            color: new TgdVec4(0.111, 0.333, 0.999, 4),
                        }),
                    }),
                // new TgdMaterialNormals(),
            }),
        ],
    })
    framebuffer1.add(painter)
    const filterHue = new TgdFilterHueRotation({ hueShiftInDegrees: 2 })
    const filterZoom = new TgdFilterZoom({ zoom: 1.007 })
    const filters = new TgdPainterFilter(context, {
        texture: framebuffer1.textureColor0 ?? defaultTexture,
        filters: [filterHue, filterZoom],
        flipY: true,
    })
    framebuffer2.add(filters)
    const screen = new TgdPainterFilter(context, {
        texture: framebuffer1.textureColor0 ?? defaultTexture,
        filters: [new TgdFilterZoom()],
        flipY: true,
    })
    /**
     * This is important because the texture of a framebuffer is recreated
     * any time the screen size changes.
     */
    framebuffer1.onExit = () => {
        filters.texture = framebuffer1.textureColor0 ?? defaultTexture
    }
    framebuffer2.onExit = () => {
        background.texture = framebuffer2.textureColor0 ?? defaultTexture
        screen.texture = framebuffer2.textureColor0 ?? defaultTexture
    }
    context.add(
        framebuffer1,
        framebuffer2,
        screen,
        new TgdPainterLogic(time => {
            const { camera } = context
            camera.orbitAroundX(Math.sin(time * 0.005045) * 0.03)
            camera.orbitAroundY(Math.sin(time * 0.001751) * 0.02)
            camera.setShift(
                Math.sin(time * 0.001414),
                Math.sin(time * 0.003414) * 0.1,
                Math.sin(time * 0.002049) * 1.2
            )
            filterZoom.translation.x = 0.005 * Math.sin(time * 0.0024581)
            filterZoom.translation.y = 0.005 * Math.sin(time * 0.0037151)
        })
    )
    context.play()
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                glb: {
                    mesh: SuzanneURL,
                },
                image: {
                    background: BackgroundURL,
                },
            }}
        />
    )
}
