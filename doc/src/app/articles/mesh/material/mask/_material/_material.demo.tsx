import {
    tgdCalcClamp,
    type TgdContext,
    TgdFilterBlur,
    TgdMaterialMask,
    TgdMaterialNormalMap,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterScissor,
    TgdPainterState,
    TgdTexture2D,
    webglPresetDepth,
} from "@tolokoban/tgd"
import { ViewSlider } from "@tolokoban/ui"
import React from "react"
import BackgroungURL from "@/assets/image/uv-grid.webp"
import View, { type Assets } from "@/components/demo/Tgd"
import { useFloat } from "@/utils/hooks/float"

function init(context: TgdContext, assets: Assets) {
    // #begin Initializing WebGL
    context.camera.fitSpaceAtTarget(2, 1.5)
    const clear = new TgdPainterClear(context, {
        color: [0.3, 0.3, 0.3, 1],
        depth: 1,
    })
    const material1 = new TgdMaterialNormalMap()
    const mesh1 = new TgdPainterMesh(context, {
        material: material1,
    })
    mesh1.debug()
    const texture = new TgdTexture2D(context, {
        load: assets.image.background,
        params: {
            minFilter: "LINEAR",
            magFilter: "LINEAR",
        },
    })
    const fbo1 = new TgdPainterFramebuffer(context, {
        children: [
            clear,
            new TgdPainterState(context, {
                depth: webglPresetDepth.less,
                children: [mesh1],
            }),
        ],
        textureColor0: texture,
        viewportMatchingScale: 1 / 4,
        depthBuffer: true,
    })
    const size = 2
    const fbo2 = new TgdPainterFramebuffer(context, {
        children: [
            new TgdPainterFilter(context, {
                texture: fbo1.textureColor0,
                filters: [
                    new TgdFilterBlur({
                        direction: 0,
                        size,
                    }),
                    new TgdFilterBlur({
                        direction: 90,
                        size,
                    }),
                ],
                flipY: true,
            }),
        ],
        textureColor0: texture,
        viewportMatchingScale: 1 / 4,
    })
    const mesh2 = new TgdPainterMesh(context, {
        material: new TgdMaterialMask({
            texture: fbo2.textureColor0 ?? texture,
        }),
    })
    // #end
    const scissor1 = new TgdPainterScissor(context, {
        children: [mesh1],
        x: 0,
        y: 0,
        width: 0.5,
        height: 1,
    })
    const scissor2 = new TgdPainterScissor(context, {
        children: [mesh2],
        x: 0.5,
        y: 0,
        width: 0.5,
        height: 1,
    })
    context.add(
        clear,
        fbo1,
        fbo2,
        new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            children: [scissor1, scissor2],
        }),
        new TgdPainterLogic((_time, delta) => {
            const angX = delta * 0.12985
            const angY = delta * 0.24721
            mesh1.transfo.orbitAroundX(angX)
            mesh1.transfo.orbitAroundY(angY)
            mesh2.transfo.orbitAroundX(angX)
            mesh2.transfo.orbitAroundY(angY)
        }),
    )
    context.play()
    return {
        split(value: number) {
            const a = tgdCalcClamp(value, 0, 1)
            scissor1.x = 0
            scissor1.width = a
            scissor2.x = a
            scissor2.width = 1 - a
            context.paint()
        },
    }
}

export default function Demo() {
    const ref = React.useRef<ReturnType<typeof init> | null>(null)
    const srv = ref.current
    const [split, setSplit] = useFloat(0.5, srv?.split)
    return (
        <div>
            <View
                onReady={(scene: TgdContext, assets: Assets) => {
                    ref.current = init(scene, assets)
                }}
                assets={{
                    image: {
                        background: BackgroungURL,
                    },
                }}>
                <ViewSlider value={split} onChange={setSplit} min={0} max={1} step={1e-2} />
                <p>Left view uses normal shading, right view uses Mask technique.</p>
            </View>
        </div>
    )
}
