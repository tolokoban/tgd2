import { TgdPainter } from "../painter"
import { TgdDataset } from "@tgd/dataset/dataset"
import { TgdVertexArray } from "@tgd/vao"

import { TgdTexture2D } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"

import VERT from "./background.vert"
import FRAG from "./background.frag"

export interface TgdPainterBackgroundOptions {
    zoom: number
    x: number
    y: number
    z: number
    scaleX: number
    scaleY: number
}

export class TgdPainterBackground extends TgdPainter {
    public texture: TgdTexture2D

    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray

    /**
     * With a zoom of **1**, the image will have the smaller size to cover
     * the whole scene.
     */
    public zoom = 1
    public x = 0
    public y = 0
    public z = 1

    constructor(
        private readonly context: { gl: WebGL2RenderingContext },
        texture: TgdTexture2D,
        {
            x = 0,
            y = 0,
            z = 0.999999,
            zoom = 1,
            scaleX = 1,
            scaleY = 1,
        }: Partial<TgdPainterBackgroundOptions> = {}
    ) {
        super()
        this.x = x
        this.y = y
        this.z = z
        this.zoom = zoom
        this.texture = texture
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
            new Float32Array([
                -1 * scaleX,
                +1 * scaleY,
                +1 * scaleX,
                +1 * scaleY,
                -1 * scaleX,
                -1 * scaleY,
                +1 * scaleX,
                -1 * scaleY,
            ])
        )
        dataset.set("attUV", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]))
        this.vao = new TgdVertexArray(context.gl, this.program, [dataset])
    }

    delete(): void {
        const { vao } = this
        vao.delete()
    }

    paint(): void {
        const { gl } = this.context
        const { vao, program, texture, zoom, x, y, z } = this
        program.use()
        const { drawingBufferWidth: width, drawingBufferHeight: height } = gl
        const horizontal = texture.width * height > texture.height * width
        const scaleX = horizontal
            ? (texture.width * height) / (width * texture.height)
            : 1
        const scaleY = horizontal
            ? 1
            : (texture.height * width) / (height * texture.width)
        program.uniform2f("uniScale", scaleX, scaleY)
        program.uniform2f("uniScroll", x, y)
        program.uniform1f("uniZoom", 1 / zoom)
        program.uniform1f("uniZ", z)
        texture.activate(0, program, "uniTexture")
        gl.disable(gl.CULL_FACE)
        vao.bind()
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }
}
