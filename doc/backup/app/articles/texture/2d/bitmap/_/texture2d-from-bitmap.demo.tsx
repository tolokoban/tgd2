import {
    TgdContext,
    TgdTexture2D,
    WebglTextureParameters,
    tgdCanvasCreateWithContext2D,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"
import { Painter } from "./painter"
import React from "react"
import { ViewButton, ViewOptions, ViewPanel } from "@tolokoban/ui"

function init(
    context: TgdContext,
    refUpdate: { current: ((params: WebglTextureParameters) => void) | null }
) {
    // #begin
    const { gl } = context
    const canvas = makeCanvas()
    const texture = new TgdTexture2D(context, { flipY: true }).loadBitmap(
        canvas
    )
    refUpdate.current = (params: WebglTextureParameters) => {
        texture.setParams(params)
        context.paint()
    }
    const painter = new Painter(context, texture)
    context.add(painter)
    context.paint()
    // #end
}

export default function Demo() {
    const refUpdate = React.useRef<
        ((params: WebglTextureParameters) => void) | null
    >(null)
    const update = (params: WebglTextureParameters) => {
        const f = refUpdate.current
        if (!f) return

        f(params)
    }
    const [wrapS, setWrapS] =
        React.useState<WebglTextureParameters["wrapS"]>("REPEAT")
    const [wrapT, setWrapT] =
        React.useState<WebglTextureParameters["wrapS"]>("REPEAT")
    return (
        <View onReady={(context: TgdContext) => init(context, refUpdate)}>
            <ViewPanel
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                flexWrap="wrap"
            >
                <ViewOptions
                    label="Wrap S"
                    value={wrapS}
                    onChange={wrapS => {
                        setWrapS(wrapS)
                        update({ wrapS })
                    }}
                >
                    <div key="REPEAT">REPEAT</div>
                    <div key="CLAMP_TO_EDGE">CLAMP_TO_EDGE</div>
                    <div key="MIRRORED_REPEAT">MIRRORED_REPEAT</div>
                </ViewOptions>
                <ViewOptions
                    label="Wrap T"
                    value={wrapT}
                    onChange={wrapT => {
                        setWrapT(wrapT)
                        update({ wrapT })
                    }}
                >
                    <div key="REPEAT">REPEAT</div>
                    <div key="CLAMP_TO_EDGE">CLAMP_TO_EDGE</div>
                    <div key="MIRRORED_REPEAT">MIRRORED_REPEAT</div>
                </ViewOptions>
            </ViewPanel>
        </View>
    )
}

function makeCanvas() {
    const w = 256
    const h = 256
    const { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h)
    ctx.fillStyle = "#09f"
    ctx.fillRect(0, 0, w, h)
    ctx.fillStyle = "#f90"
    ctx.font = `${h / 2}px serif`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("TGD", w / 2, h / 2)
    return canvas
}
