import { TgdContext, TgdPainterClear, TgdPainterLogic, TgdPainterMesh, TgdPainterState } from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(context: TgdContext) {
    // #begin
    context.camera.transfo.distance = 5
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
    })
    const mesh = new TgdPainterMesh(context)
    const meshPainter = new TgdPainterState(context, {
        depth: "less",
        children: [clear, mesh],
    })
    context.add(
        meshPainter,
        new TgdPainterLogic((time, delta) => {
            mesh.transfo.orbitAroundX(delta * Math.sin(time))
            mesh.transfo.orbitAroundZ(delta * 1.341)
        }),
    )
    context.play()
    // #end
}

export default function Demo() {
    return <View onReady={init} />
}
