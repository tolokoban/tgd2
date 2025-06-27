import { TgdPainter } from "../painter"
import { TgdDataset } from "@tgd/dataset/dataset"
import { TgdVertexArray } from "@tgd/vao"

import { TgdTexture2D } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"
import { webglPresetBlend, webglPresetCull, webglPresetDepth } from "@tgd/utils"

import VERT from "./background.vert"
import FRAG from "./background.frag"
import { TgdPainterState } from "../state"
import { TgdPainterClear } from "../clear"
import { TgdPainterFramebuffer } from "../framebuffer"
import { TgdContext } from "@tgd/context"

export interface TgdPainterBackgroundWithDepthOptions {
    background: TgdTexture2D
    children: TgdPainter[]
}

export class TgdPainterBackgroundWithDepth extends TgdPainter {
    private readonly texture: TgdTexture2D
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray
    private readonly framebuffer: TgdPainterFramebuffer

    constructor(
        private readonly context: TgdContext,
        { background, children }: TgdPainterBackgroundWithDepthOptions
    ) {
        super()
        const { gl } = context
        const fb = gl.createFramebuffer()
        if (!fb) throw new Error("Unable to create a WebGL2 Frame buffer!")

        this.framebuffer = new TgdPainterFramebuffer(context, {
            depthBuffer: true,
            children: [
                new TgdPainterClear(context, {
                    depth: 0.5,
                }),
                new TgdPainterState(context, {
                    color: false,
                    children,
                }),
            ],
        })
        this.texture = background
        this.program = new TgdProgram(context.gl, {
            vert: VERT,
            frag: FRAG,
        })
        const dataset = new TgdDataset({
            attPoint: "vec2",
            attUV: "vec2",
        })
        dataset.set(
            "attPoint",
            new Float32Array([-1, +1, +1, +1, -1, -1, +1, -1])
        )
        dataset.set("attUV", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]))
        this.vao = new TgdVertexArray(context.gl, this.program, [dataset])
    }

    delete(): void {
        const { vao, framebuffer } = this
        framebuffer.delete()
        vao.delete()
    }

    paint(time: number, delay: number): void {
        const { context, vao, program, texture, framebuffer } = this
        const { gl } = context

        framebuffer.paint(time, delay)

        program.use()
        const scale = this.getScale()
        program.uniform1f("uniScale", scale)
        texture.activate(0, program, "uniTexture")
        framebuffer.textureDepth?.activate(1, program, "uniTextureDepth")
        vao.bind()
        TgdPainterState.do(
            {
                gl,
                cull: webglPresetCull.off,
                depth: webglPresetDepth.always,
                blend: webglPresetBlend.off,
            },
            () => gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
        )
        vao.unbind()
    }

    private getScale() {
        const { texture, context } = this
        const { drawingBufferWidth: width, drawingBufferHeight: height } =
            context.gl
        const ratioTexture = texture.width / texture.height
        const ratioScreen = width / height
        return ratioScreen / ratioTexture
    }
}
