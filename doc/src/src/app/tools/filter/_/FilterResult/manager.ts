import {
    TgdContext,
    TgdFilter,
    TgdPainterFilter,
    TgdTexture2D,
} from "@tolokoban/tgd"

import BackgroundURL from "./background.avif"

export class FilterManager {
    public readonly destroy: () => void
    public uniEffectStrength = 0

    private readonly context: TgdContext
    private readonly texture: TgdTexture2D
    private filter: TgdPainterFilter | null = null

    constructor(
        canvas: HTMLCanvasElement,
        private readonly onError: (error: string | null) => void
    ) {
        const context = new TgdContext(canvas)
        this.context = context
        const texture = new TgdTexture2D(context)
            .loadBitmap(BackgroundURL)
            .setParams({
                wrapR: "MIRRORED_REPEAT",
                wrapS: "MIRRORED_REPEAT",
                wrapT: "MIRRORED_REPEAT",
            })
        this.texture = texture
        this.destroy = () => {
            texture.delete()
            context.delete()
        }
    }

    setCode(code: string, functions = "") {
        try {
            const { context, texture } = this
            const filter = new TgdPainterFilter(context, {
                texture,
                filters: [
                    new TgdFilter({
                        fragmentShaderCode: code,
                        extraFunctions: functions,
                        uniforms: {
                            uniTime: "float",
                            uniEffectStrength: "float",
                            uniAspectRatio: "float",
                            uniAspectRatioInverse: "float",
                        },
                        setUniforms: ({ program, time }) => {
                            program.uniform1f("uniTime", time)
                            program.uniform1f(
                                "uniEffectStrength",
                                this.uniEffectStrength
                            )
                            program.uniform1f(
                                "uniAspectRatio",
                                context.width / context.height
                            )
                            program.uniform1f(
                                "uniAspectRatioInverse",
                                context.height / context.width
                            )
                        },
                    }),
                ],
            })
            if (this.filter) {
                this.context.remove(this.filter)
            }
            this.filter = filter
            context.add(filter)
            context.play()
            this.onError(null)
        } catch (ex) {
            console.log("🚀 [manager] ex = ", ex) // @FIXME: Remove this line written on 2024-11-12 at 15:15
            this.onError(ex instanceof Error ? ex.message : JSON.stringify(ex))
        }
    }
}
