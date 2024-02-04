import {
    TdgTexture2DOptions,
    TgdContext,
    TgdPainterClear,
    TgdPainterSkybox,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"
import Painter from "./painter"

import PosX from "@/gfx/cubemap/test/px.webp"
import NegX from "@/gfx/cubemap/test/nx.webp"
import PosY from "@/gfx/cubemap/test/py.webp"
import NegY from "@/gfx/cubemap/test/ny.webp"
import PosZ from "@/gfx/cubemap/test/pz.webp"
import NegZ from "@/gfx/cubemap/test/nz.webp"

import PaletteURL from "./palette.jpg"

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
            const options: Partial<TdgTexture2DOptions> = {
                image: PaletteURL,
                magFilter: "NEAREST",
                minFilter: "NEAREST",
            }
            const texture = ctx.textures2D.create(options)
            const painter = new Painter(ctx, content, texture)
            const skybox = new TgdPainterSkybox(ctx, {
                imagePosX: PosX,
                imageNegX: NegX,
                imagePosY: PosY,
                imageNegY: NegY,
                imagePosZ: PosZ,
                imageNegZ: NegZ,
            })
            skybox.camera = painter.camera
            ctx.add(skybox, painter)
            ctx.play()
        })
}
