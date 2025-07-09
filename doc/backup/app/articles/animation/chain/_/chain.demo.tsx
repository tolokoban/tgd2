import {
    TgdAnimation,
    tgdAnimChain,
    TgdContext,
    tgdEasingFunctionInOutCubic,
    TgdMaterialSolid,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(ctx: TgdContext) {
    // #begin
    ctx.camera.transfo.distance = 10
    const cube = new TgdPainterMesh(ctx, { transfo: { position: [-1, -1, 0] } })
    ctx.add(
        new TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),
        new TgdPainterState(ctx, {
            depth: webglPresetDepth.lessOrEqual,
            children: [
                cube,
                new TgdPainterMesh(ctx, {
                    material: new TgdMaterialSolid({
                        color: [0.5, 0.5, 0.5, 1],
                    }),
                    transfo: { position: [0, 0, -0.1] },
                }),
            ],
        })
    )
    const anim1: TgdAnimation = {
        duration: 1,
        easingFunction: tgdEasingFunctionInOutCubic,
        action(t) {
            cube.transfo.setPosition(-1, t * 2 - 1, 0)
        },
    }
    const anim2: TgdAnimation = {
        duration: 1,
        easingFunction: tgdEasingFunctionInOutCubic,
        action(t) {
            cube.transfo.setPosition(t * 2 - 1, 1, 0)
        },
    }
    const anim3: TgdAnimation = {
        duration: 1,
        easingFunction: tgdEasingFunctionInOutCubic,
        action(t) {
            cube.transfo.setPosition(+1, 1 - t * 2, 0)
        },
    }
    const anim4: TgdAnimation = {
        duration: 1,
        easingFunction: tgdEasingFunctionInOutCubic,
        action(t) {
            cube.transfo.setPosition(1 - t * 2, -1, 0)
        },
    }
    ctx.animSchedule(
        tgdAnimChain([anim1, anim2, anim3, anim4], {
            repeat: Infinity,
        })
    )
    ctx.animSchedule(
        tgdAnimChain(
            [
                {
                    duration: 0.5,
                    action(t) {
                        cube.transfo.setScale(1 - t * 0.5)
                    },
                },
                {
                    duration: 0.5,
                    action(t) {
                        cube.transfo.setScale(1 - (1 - t) * 0.5)
                    },
                },
            ],
            { repeat: Infinity }
        )
    )
    ctx.paint()
    // #end
}

export default function Demo() {
    return <View onReady={init} />
}
