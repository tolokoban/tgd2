import {
    TgdContext,
    TgdFilter,
    TgdPainterFilter,
    TgdTexture2D,
} from "@tolokoban/tgd"

import BackgroundURL from "./background.avif"

export class FilterManager {
    public readonly destroy: () => void

    private readonly context: TgdContext
    private readonly texture: TgdTexture2D
    private filter: TgdPainterFilter | null = null

    constructor(canvas: HTMLCanvasElement) {
        const context = new TgdContext(canvas)
        this.context = context
        const texture = context.textures2D.create({
            image: BackgroundURL,
            width: 1920,
            height: 1080,
        })
        this.texture = texture
        this.destroy = () => {
            context.textures2D.delete(texture)
            context.destroy()
        }
    }

    set code(code: string) {
        try {
            const { context, texture } = this
            const filter = new TgdPainterFilter(context, {
                texture,
                filters: [
                    new TgdFilter({
                        fragmentShaderCode: code,
                        uniforms: {
                            uniTime: "float",
                        },
                        setUniforms(program, time) {
                            program.uniform1f("uniTime", time)
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
        } catch (ex) {
            console.log("🚀 [manager] ex = ", ex) // @FIXME: Remove this line written on 2024-11-12 at 15:15
        }
    }
}
