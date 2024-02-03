import { TdgTexture2D, TgdContext, TgdPainterClear } from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"
import Painter from "./painter"

import PaletteURL from "./palette.jpg"
import ChestURL from "./chest.jpg"

export default function DemoContainer() {
    return <View onReady={init} />
}

function init(ctx: TgdContext) {
    const clear = new TgdPainterClear(ctx, {
        color: [0, 0, 0, 1],
    })
    ctx.add(clear)
    ctx.paint()

    // fetch("mesh/test.obj")
    fetch("mesh/axis.obj")
        .then(resp => {
            if (!resp.ok) {
                throw Error(`Error #${resp.status}: ${resp.statusText}!`)
            }
            return resp.text()
        })
        .then(content => {
            const texture = new TdgTexture2D(ctx, {
                image: PaletteURL,
            })
            const painter = new Painter(ctx, content, texture)
            ctx.add(painter)
            ctx.paint()
            ctx.play()
        })
}
