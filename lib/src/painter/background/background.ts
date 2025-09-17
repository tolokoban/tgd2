import { TgdPainter } from "../painter"
import { TgdDataset } from "@tgd/dataset/dataset"
import { TgdVertexArray } from "@tgd/vao"

import { TgdTexture2D } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"

import VERT from "./background.vert"
import FRAG from "./background.frag"
import { TgdPainterState } from "../state"
import { webglPresetCull, webglPresetDepth } from "@tgd/utils"

export interface TgdPainterBackgroundOptions {
    texture: TgdTexture2D
    zoom: number
    x: number
    y: number
    z: number
    /**
     * By default, we preserve the aspect ratio.
     * But you can change `scaleX` and `scaleY` if you need
     * another behavior.
     */
    scaleX: number
    /**
     * By default, we preserve the aspect ratio.
     * But you can change `scaleX` and `scaleY` if you need
     * another behavior.
     */
    scaleY: number
    /**
     * Defaults to `cover`.
     * If you choose `contain`, the image will be totally visible
     * and taking the maximum space.
     */
    mode: "cover" | "contain"
}

export class TgdPainterBackground extends TgdPainter {
    public texture: TgdTexture2D | undefined

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
    public mode: "cover" | "contain" = "cover"

    constructor(
        private readonly context: { gl: WebGL2RenderingContext },
        {
            texture,
            x = 0,
            y = 0,
            z = 0.999999,
            zoom = 1,
            scaleX = 1,
            scaleY = 1,
            mode = "cover",
        }: Partial<TgdPainterBackgroundOptions> = {}
    ) {
        super()
        this.texture = texture
        this.mode = mode
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
        const { program, vao } = this
        program.delete()
        vao.delete()
    }

    paint(): void {
        const { gl } = this.context
        const { vao, program, texture, zoom, x, y, z, mode } = this
        program.use()
        const { scaleX, scaleY } =
            mode === "cover"
                ? this.getScaleForCover()
                : this.getScaleForContain()
        program.uniform2f("uniScale", scaleX, scaleY)
        program.uniform2f("uniScroll", x, y)
        program.uniform1f("uniZoom", 1 / zoom)
        program.uniform1f("uniZ", z)
        texture?.activate(0, program, "uniTexture")
        TgdPainterState.do(
            {
                gl,
                cull: webglPresetCull.off,
                depth: webglPresetDepth.off,
            },
            () => {
                vao.bind()
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
                vao.unbind()
            }
        )
        gl.disable(gl.CULL_FACE)
    }

    getScaleForCover() {
        const { texture, context } = this
        if (!texture) return { scaleX: 1, scaleY: 1 }

        const { drawingBufferWidth: width, drawingBufferHeight: height } =
            context.gl
        const horizontal = texture.width * height > texture.height * width
        const scaleX = horizontal
            ? (texture.width * height) / (width * texture.height)
            : 1
        const scaleY = horizontal
            ? 1
            : (texture.height * width) / (height * texture.width)
        return { scaleX, scaleY }
    }

    getScaleForContain() {
        const { texture, context } = this
        if (!texture) return { scaleX: 1, scaleY: 1 }

        const { drawingBufferWidth: width, drawingBufferHeight: height } =
            context.gl
        const aspectRatio = width / height
        const aspectRatioTexture = texture.width / texture.height
        const sx = width / texture.width
        const sy = height / texture.height
        if (sx > sy) {
            // We took all vertical space and have void on right an left.
            return {
                scaleX: aspectRatioTexture / aspectRatio,
                scaleY: 1,
            }
        }
        return {
            scaleX: 1,
            scaleY: aspectRatio / aspectRatioTexture,
        }
    }
}
