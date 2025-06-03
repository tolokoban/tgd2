import { TgdPainter } from "../painter"
import { TgdDataset } from "@tgd/dataset/dataset"
import { TgdVertexArray } from "@tgd/vao"

import { TgdTexture2D } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"
import {
    webglLookup,
    webglPresetBlend,
    webglPresetCull,
    webglPresetDepth,
} from "@tgd/utils"

import VERT from "./background.vert"
import FRAG from "./background.frag"
import { TgdPainterState } from "../state"
import { TgdPainterClear } from "../clear"

export interface TgdPainterBackgroundWithDepthOptions {
    background: TgdTexture2D
    children: TgdPainter[]
}

export class TgdPainterBackgroundWithDepth extends TgdPainter {
    private readonly texture: TgdTexture2D
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray
    private readonly clear: TgdPainterClear
    private readonly renderer: TgdPainterState
    private readonly framebuffer: WebGLFramebuffer
    private depthTexture: WebGLTexture | null = null

    constructor(
        private readonly context: { gl: WebGL2RenderingContext },
        { background, children }: TgdPainterBackgroundWithDepthOptions
    ) {
        super()
        const { gl } = context
        const fb = gl.createFramebuffer()
        if (!fb) throw new Error("Unable to create a WebGL2 Frame buffer!")

        this.framebuffer = fb

        this.clear = new TgdPainterClear(context, {
            depth: 1,
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
        this.renderer = new TgdPainterState(context, {
            children,
            depth: webglPresetDepth.less,
            cull: webglPresetCull.back,
            blend: webglPresetBlend.off,
            color: false,
        })
    }

    delete(): void {
        const { context, vao, framebuffer, depthTexture } = this
        const { gl } = context
        gl.deleteFramebuffer(framebuffer)
        if (depthTexture) gl.deleteTexture(depthTexture)
        vao.delete()
    }

    paint(time: number, delay: number): void {
        const { context, vao, program, texture, depthTexture } = this
        const { gl } = context
        this.paintDepthBuffer(time, delay)
        program.use()
        const scale = this.getScale()
        program.uniform1f("uniScale", scale)
        texture.activate(0, program, "uniTexture")
        if (depthTexture) {
            gl.activeTexture(gl.TEXTURE1)
            gl.bindTexture(gl.TEXTURE_2D, depthTexture)
            program.uniform1i("uniDepth", 1)
        }
        vao.bind()
        TgdPainterState.do(
            {
                gl,
                cull: webglPresetCull.off,
                depth: webglPresetDepth.writeOnly,
            },
            () => gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
        )
        vao.unbind()
    }

    private paintDepthBuffer(time: number, delay: number) {
        const { context, framebuffer, clear, renderer, texture } = this
        const { gl } = context
        const { drawingBufferWidth: width, drawingBufferHeight: height } = gl
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
        gl.viewport(0, 0, width, height)
        if (this.depthTexture) gl.deleteTexture(this.depthTexture)
        const depthTexture = gl.createTexture()
        if (!depthTexture) throw new Error("Unable to create a WebGL2 Texture!")

        this.depthTexture = depthTexture
        gl.bindTexture(gl.TEXTURE_2D, depthTexture)
        const level = 0
        const internalFormat = gl.DEPTH_COMPONENT24
        const border = 0
        const format = gl.DEPTH_COMPONENT
        const type = gl.UNSIGNED_INT
        const data = null
        gl.texImage2D(
            gl.TEXTURE_2D,
            level,
            internalFormat,
            width,
            height,
            border,
            format,
            type,
            data
        )
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
        const wrapS = ensureNumber(
            texture.getParameter("TEXTURE_WRAP_S"),
            gl.CLAMP_TO_EDGE
        )
        const wrapT = ensureNumber(
            texture.getParameter("TEXTURE_WRAP_T"),
            gl.CLAMP_TO_EDGE
        )
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT)
        gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            gl.DEPTH_ATTACHMENT,
            gl.TEXTURE_2D,
            depthTexture,
            level
        )
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            console.error(
                `Your Framebuffer is incomplete: ${webglLookup(status)}!`
            )
        }
        clear.paint()
        renderer.paint(time, delay)
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
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

function ensureNumber(data: unknown, defaultValue: number): number {
    if (typeof data === "number") return data
    return defaultValue
}
