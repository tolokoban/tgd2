import { TgdContext } from "@tgd/context"
import { TgdPainterFramebuffer, TgdPainterFramebufferOptions } from "./framebuffer"

export type TgdPainterFramebufferWithAntiAliasingOptions = Omit<TgdPainterFramebufferOptions, "antiAliasing">

export class TgdPainterFramebufferWithAntiAliasing extends TgdPainterFramebuffer {
    constructor(
        public readonly context: TgdContext,
        options: Partial<TgdPainterFramebufferWithAntiAliasingOptions>,
    ) {
        super(context, {
            ...options,
            antiAliasing: true,
        })
    }
}
