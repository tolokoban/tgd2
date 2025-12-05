import {
    TgdContext,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd"

function init(context: TgdContext) {
    const clear = new TgdPainterClear(context, {
        color: [0.1, 0.2, 0.3, 1],
        depth: 1,
    })
    const mesh = new TgdPainterMesh(context)
    mesh.logic.add((time) => {
        mesh.transfo.setEulerRotation(100 * time, -37 * time, 0)
    })
    const state = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
    })
    state.add(mesh)
    context.add(clear, state)
    context.play()
}

function createContext(canvas: HTMLCanvasElement | null) {
    if (!canvas) return

    const context = new TgdContext(canvas)
    init(context)

    // Return a cleanup function
    return () => context.delete()
}

export default function () {
    return <canvas ref={createContext} width={300} height={300}></canvas>
}
