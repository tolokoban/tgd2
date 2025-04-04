import {
    tgdCalcMix,
    TgdContext,
    TgdPainterClear,
    TgdVec4,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(ctx: TgdContext) {
    // #begin
    const clear = new TgdPainterClear(ctx, { color: [0.5, 0.5, 0.5, 1] })
    ctx.add(clear)
    ctx.paint()
    ctx.inputs.pointer.eventTap.addListener(() => {
        const { red, green, blue } = clear
        const R = Math.random()
        const G = Math.random()
        const B = Math.random()
        ctx.animSchedule({
            duration: 1,
            action(t) {
                clear.red = tgdCalcMix(red, R, t)
                clear.green = tgdCalcMix(green, G, t)
                clear.blue = tgdCalcMix(blue, B, t)
            },
        })
    })
    // #end
}

export default function Demo() {
    return <View onReady={init} />
}
