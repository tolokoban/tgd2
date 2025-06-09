import {
    tgdCalcDegToRad,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(ctx: TgdContext) {
    const clear = new TgdPainterClear(ctx, {
        color: [0.6, 0.6, 0.7, 1],
        depth: 1,
    })
    const cube = new TgdPainterMesh(ctx)
    const logic = new TgdPainterLogic((time, delay) => {
        cube.transfo.orbitAroundY(delay)
        cube.transfo.orbitAroundX(delay * 0.39409)
        cube.transfo.setPosition(Math.sin(time) * 2, 0, Math.cos(time) * 3)
    })
    const state = new TgdPainterState(ctx, {
        depth: webglPresetDepth.less,
        children: [cube],
    })
    ctx.add(clear, state, logic)
    // #begin Initializing WebGL
    ctx.play()
    ctx.inputs.pointer.eventTap.addListener(() => {
        if (ctx.playing) ctx.pause()
        else ctx.play()
    })
    // #end
    new TgdControllerCameraOrbit(ctx, {
        geo: {
            maxLng: 0,
            minLng: 0,
            minLat: tgdCalcDegToRad(-60),
            maxLat: tgdCalcDegToRad(+60),
        },
        inertiaOrbit: 1000,
    })
}

export default function Demo() {
    return <View onReady={init} />
}
