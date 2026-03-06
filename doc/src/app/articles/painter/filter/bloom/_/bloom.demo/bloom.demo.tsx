import {
    type ArrayNumber4,
    tgdCalcMapRange,
    tgdCalcModulo,
    type TgdContext,
    TgdFilterBlur,
    TgdFilterHueRotation,
    TgdFilterVerbatim,
    TgdLight,
    TgdMaterialDiffuse,
    TgdMaterialFlat,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterFramebufferWithAntiAliasing,
    TgdPainterGroup,
    TgdPainterLogic,
    TgdPainterMeshGltf,
    TgdPainterMix,
    TgdPainterState,
    TgdTexture2D,
    webglPresetBlend,
    webglPresetDepth,
} from "@tolokoban/tgd"
import SuzaneURL from "@/assets/mesh/suzanne.glb"
import View, { type Assets } from "@/components/demo/Tgd"

function init(context: TgdContext, assets: Assets) {
    // #begin
    const { camera } = context
    camera.fitSpaceAtTarget(3, 3)
    const color: ArrayNumber4 = [0.9, 0.3, 0.7, 1]
    const mesh = new TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: new TgdMaterialDiffuse({
            color,
            ambient: new TgdLight({
                color: [0.8, 0.8, 0.8, 0],
            }),
            lockLightsToCamera: true,
        }),
    })
    const framebuffer1 = new TgdPainterFramebufferWithAntiAliasing(context, {
        children: [
            new TgdPainterClear(context, {
                color: [0, 0, 0, 1],
                depth: 1,
            }),
            new TgdPainterState(context, {
                depth: webglPresetDepth.less,
                blend: webglPresetBlend.off,
                children: [mesh],
            }),
        ],
        depthBuffer: true,
        textureColor0: new TgdTexture2D(context, {
            params: {
                minFilter: "LINEAR",
                magFilter: "LINEAR",
                wrapR: "CLAMP_TO_EDGE",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
            },
        }),
    })
    const meshFlat = new TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: new TgdMaterialFlat({
            color,
        }),
    })
    const framebuffer2 = new TgdPainterFramebufferWithAntiAliasing(context, {
        children: [
            new TgdPainterClear(context, {
                color: [0, 0, 0, 1],
                depth: 1,
            }),
            new TgdPainterState(context, {
                depth: webglPresetDepth.less,
                blend: webglPresetBlend.off,
                children: [meshFlat],
            }),
        ],
        depthBuffer: true,
        textureColor0: new TgdTexture2D(context, {
            params: {
                minFilter: "LINEAR",
                magFilter: "LINEAR",
                wrapR: "CLAMP_TO_EDGE",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
            },
        }),
    })
    const hue = new TgdFilterHueRotation()
    const size = 32
    const strength = 1
    const filters = new TgdPainterFilter(context, {
        texture: framebuffer2.textureColor0,
        filters: [
            new TgdFilterBlur({ direction: 0, size, strength }),
            new TgdFilterBlur({ direction: 90, size, strength }),
            // hue,
        ],
        flipY: true,
    })
    const framebuffer3 = new TgdPainterFramebuffer(context, {
        children: [
            new TgdPainterState(context, {
                depth: "off",
                blend: "off",
                children: [filters],
            }),
        ],
        depthBuffer: false,
        textureColor0: new TgdTexture2D(context, {
            params: {
                minFilter: "LINEAR",
                magFilter: "LINEAR",
                wrapR: "CLAMP_TO_EDGE",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
            },
        }),
        viewportMatchingScale: 0.25,
    })
    const mixer = new TgdPainterMix(context, {
        texture1: framebuffer1.textureColor0,
        texture2: framebuffer3.textureColor0,
        strength: 0,
    })
    context.add(
        framebuffer1,
        framebuffer2,
        framebuffer3,
        show(context, framebuffer3),
        // mixer,
        new TgdPainterLogic((time) => {
            const t = tgdCalcModulo(time, 0, 2)
            const d = Math.abs(t - 1)
            mixer.strength = tgdCalcMapRange(d, 0.3, 0, 0, 1, true) ** 2
            hue.hueShiftInDegrees = time * 30
        }),
    )
    context.paint()
    // #end
}

function show(context: TgdContext, { textureColor0 }: { textureColor0: TgdTexture2D | undefined }) {
    if (textureColor0) {
        return new TgdPainterBackground(context, {
            texture: textureColor0,
            scaleY: -1,
        })
    }
    return new TgdPainterClear(context, { color: [1, 0.1, 0.1, 1] })
}

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                glb: {
                    suzane: SuzaneURL,
                },
            }}
            controller={{
                inertiaOrbit: 1000,
            }}
        />
    )
}
