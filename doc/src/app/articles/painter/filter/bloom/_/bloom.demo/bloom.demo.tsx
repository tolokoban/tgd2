import {
    type ArrayNumber4,
    type TgdContext,
    TgdFilterBlur,
    TgdFilterMultiply,
    TgdLight,
    TgdMaterialDiffuse,
    TgdMaterialFlat,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterMeshGltf,
    TgdPainterState,
    TgdTexture2D,
} from "@tolokoban/tgd"
import SuzaneURL from "@/assets/mesh/suzanne.glb"
import View, { type Assets } from "@/components/demo/Tgd"

function init(context: TgdContext, assets: Assets) {
    // #begin
    const { camera } = context
    camera.fitSpaceAtTarget(3, 3)
    const mesh = createMesh(context, assets, false)
    const meshFlat = createMesh(context, assets, true)
    const framebuffer = new TgdPainterFramebuffer(context, {
        viewportMatchingScale: 0.25,
        children: [meshFlat],
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
    const filterMultiply = new TgdFilterMultiply({
        color: [0.5, 0.5, 0.5, 1],
    })
    const blurSize = 16
    context.add(
        mesh,
        framebuffer,
        new TgdPainterState(context, {
            depth: "off",
            cull: "off",
            blend: "add",
            children: [
                new TgdPainterFilter(context, {
                    texture: framebuffer.textureColor0,
                    flipY: true,
                    filters: [...TgdFilterBlur.createPair({ size: blurSize }), filterMultiply],
                }),
            ],
        }),
        (time) => {
            const s = Math.pow(Math.abs(Math.sin(time)), 13) * 2
            filterMultiply.color.x = s
            filterMultiply.color.y = s
            filterMultiply.color.z = s
        },
    )
    context.play()
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            options={{
                alpha: false,
                preserveDrawingBuffer: false,
            }}
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

function createMesh(context: TgdContext, assets: Assets, flat: boolean) {
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    })
    const color: ArrayNumber4 = [0.9, 0.6, 0.1, 1]
    const mesh = new TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: flat
            ? new TgdMaterialFlat({ color: [0.3, 0.6, 0.9, 1] })
            : new TgdMaterialDiffuse({
                  color,
                  lockLightsToCamera: true,
              }),
    })
    return new TgdPainterState(context, {
        depth: "less",
        blend: "off",
        cull: "back",
        children: [
            clear,
            mesh,
            (time) => {
                mesh.transfo.setEulerRotation(time * 5, time * 7.124, time * -3.085)
            },
        ],
    })
}
