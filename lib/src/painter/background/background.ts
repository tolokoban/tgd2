import { TgdProgram } from "./../../types"
import { TgdTexture } from "../../types"
import Scene from "../../scene"
import { TgdAssetImage } from "../../types"
import { PainterInterface } from "../painter-interface"
import vertexShaderCode from "./background.vert"
import fragmentShaderCode from "./background.frag"
import { makeData } from "../../data"
import Resources from "../../scene/resources"
import { bindTexture2D } from "../../texture-helper/texture-helper"

export interface PainterBackgroundOptions {
    image: HTMLImageElement | HTMLCanvasElement
    placeholder: [red: number, green: number, blue: number, alpha: number]
}

export default class PainterBackground implements PainterInterface {
    private readonly options: PainterBackgroundOptions
    private readonly texture: WebGLTexture
    private readonly program: WebGLProgram
    private readonly buffer: WebGLBuffer
    private readonly res: Resources

    constructor(
        private readonly scene: Scene,
        options: Partial<PainterBackground> & {
            image: HTMLImageElement | HTMLCanvasElement
        }
    ) {
        this.res = scene.getResources("PainterBackground")
        this.options = {
            placeholder: [0, 0, 0, 1],
            ...options,
        }
        const { image, placeholder } = this.options
        this.buffer = this.res.createBuffer()
        this.texture = this.res.createTexture()
        bindTexture2D(scene.gl, this.texture, { image, placeholder })
        this.program = this.res.createProgram({
            vert: vertexShaderCode,
            frag: fragmentShaderCode,
        })
        const data = makeData({
            attPoint: 2,
            attUV: 2,
        })
        data.set("attPoint", new Float32Array([-1, +1, +1, +1, -1, -1, +1, -1]))
        data.set("attUV", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]))
    }

    destroy(): void {
        const { res } = this
        res.deleteProgram()
        res.deteleTexture()
        res.deleteBuffer()
    }

    paint(time: number, delay: number): void {
        const { gl } = this.scene
        const { program, texture } = this
        gl.useProgram(program)
    }

    update(time: number, delay: number): void {
        throw new Error("Method not implemented.")
    }
}

function createVAO(
    gl: WebGL2RenderingContext,
    prg: WebGLProgram,
    buffVert: WebGLBuffer
): WebGLVertexArrayObject {
    const vao = gl.createVertexArray()
    if (!vao) throw Error("Unable to create a WebGLVertexArrayObject!")
    gl.bindVertexArray(vao)
    gl.bindBuffer(gl.ARRAY_BUFFER, buffVert)
    const $attPoint = gl.getAttribLocation(prg, "attPoint") // float attPoint[2]
    gl.enableVertexAttribArray($attPoint)
    gl.vertexAttribPointer($attPoint, 2, gl.FLOAT, false, 20, 0)
    gl.vertexAttribDivisor($attPoint, 0)
    const $attColor = gl.getAttribLocation(prg, "attColor") // float attColor[3]
    gl.enableVertexAttribArray($attColor)
    gl.vertexAttribPointer($attColor, 3, gl.FLOAT, false, 20, 8)
    gl.vertexAttribDivisor($attColor, 0)
    gl.bindVertexArray(null)
    return vao
}
