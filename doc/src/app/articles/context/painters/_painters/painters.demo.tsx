import {
    TgdContext,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(ctx: TgdContext) {
    // #begin Initializing WebGL
    const clear = new TgdPainterClear(ctx, {
        color: [0.6, 0.6, 0.7, 1],
        depth: 1,
    })
    const cube = new TgdPainterMesh(ctx)
    const logic = new TgdPainterLogic((_time, delay) => {
        cube.transfo.orbitAroundY(delay)
        cube.transfo.orbitAroundX(delay * 0.39409)
    })
    const state = new TgdPainterState(ctx, {
        depth: webglPresetDepth.less,
        children: [cube],
    })
    ctx.add(clear, state, logic)
    ctx.play()
    // #end
}

export default function Demo() {
    return <View onReady={init} />
}
