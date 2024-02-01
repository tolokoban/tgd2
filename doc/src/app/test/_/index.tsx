import { TgdContext, TgdPainterClear } from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"
import Painter from "./painter"

export default function DemoContainer() {
    return <View onReady={init} />
}

function init(ctx: TgdContext) {
    const clear = new TgdPainterClear(ctx, {
        color: [0.2, 0.2, 0.2, 1],
    })
    ctx.add(clear)
    ctx.paint()

    // fetch("mesh/icosphere.obj")
    fetch("mesh/test.obj")
        .then(resp => {
            if (!resp.ok) {
                throw Error(`Error #${resp.status}: ${resp.statusText}!`)
            }
            return resp.text()
        })
        .then(content => {
            const painter = new Painter(ctx, content)
            ctx.add(painter)
            ctx.paint()
            ctx.play()
        })
}
