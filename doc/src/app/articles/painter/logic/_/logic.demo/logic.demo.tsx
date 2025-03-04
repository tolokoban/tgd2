import { TgdContext, TgdPainterClear, TgdPainterLogic } from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(ctx: TgdContext) {
    // #begin
    const clear = new TgdPainterClear(ctx, { color: [0, 0, 0, 1] })
    const logic = new TgdPainterLogic(time => {
        const a = Math.abs(Math.sin(time))
        clear.red = a
        clear.green = a * 0.677
    })
    ctx.add(clear, logic)
    ctx.play()
    // #end
}

export default function Demo() {
    return <View onReady={init} />
}
