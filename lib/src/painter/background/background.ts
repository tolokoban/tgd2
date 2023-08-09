import { TgdPainter } from "../painter"
import Resources from "../../scene/resources"
import { TgdScene } from "../../scene"
import { TgdAttributes } from "../../attributes"
import VERT from "./background.vert"
import FRAG from "./background.frag"

export interface TgdPainterBackgroundOptions {
    image: HTMLImageElement | HTMLCanvasElement
    placeholder: [red: number, green: number, blue: number, alpha: number]
}

export class TgdPainterBackground implements TgdPainter {
    private readonly options: TgdPainterBackgroundOptions
    private readonly texture: WebGLTexture
    private readonly program: WebGLProgram
    private readonly buffer: WebGLBuffer
    private readonly res: Resources
    private readonly vao: WebGLVertexArrayObject
    private readonly uniTexture: WebGLUniformLocation
    private readonly uniScale: WebGLUniformLocation
    private readonly uniScroll: WebGLUniformLocation
    private readonly uniZ: WebGLUniformLocation
    private readonly imageWidth: number
    private readonly imageHeight: number

    /**
     * With a zoom of **1**, the image will have the smaller size to cover
     * the whole scene.
     */
    public zoom = 1
    public x = 0
    public y = 0
    public z = 1

    constructor(
        private readonly scene: TgdScene,
        options: Partial<TgdPainterBackgroundOptions> & {
            image: HTMLImageElement | HTMLCanvasElement
        }
    ) {
        this.res = scene.getResources("TgdPainterBackground")
        this.options = {
            placeholder: [0, 0, 0, 1],
            ...options,
        }
        const { image, placeholder } = this.options
        this.imageWidth = image.width
        this.imageHeight = image.height
        this.buffer = this.res.createBuffer()
        this.texture = this.res.createTexture()
        scene.texture.bindTexture2D(scene.gl, this.texture, {
            image,
            placeholder,
        })
        this.program = this.res.createProgram({
            vert: VERT,
            frag: FRAG,
        })
        this.uniScale = scene.getUniformLocation(this.program, "uniScale")
        this.uniScroll = scene.getUniformLocation(this.program, "uniScroll")
        this.uniZ = scene.getUniformLocation(this.program, "uniZ")
        this.uniTexture = scene.getUniformLocation(this.program, "uniTexture")
        const attributes = new TgdAttributes({
            attPoint: 2,
            attUV: 2,
        })
        attributes.set(
            "attPoint",
            new Float32Array([-1, +1, +1, +1, -1, -1, +1, -1])
        )
        attributes.set("attUV", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]))
        attributes.update(scene.gl, this.buffer, 4, false)
        this.vao = createVAO(scene.gl, this.program, this.buffer, attributes)
    }

    destroy(): void {
        const { res } = this
        res.deleteProgram()
        res.deteleTexture()
        res.deleteBuffer()
    }

    paint(time: number, delay: number): void {
        const { gl } = this.scene
        const {
            vao,
            program,
            texture,
            imageWidth,
            imageHeight,
            zoom,
            x,
            y,
            z,
        } = this
        gl.useProgram(program)
        const { width, height } = this.scene
        const horizontal = imageWidth * height > imageHeight * width
        const scaleX = horizontal
            ? (imageWidth * height) / (width * imageHeight)
            : 1
        const scaleY = horizontal
            ? 1
            : (imageHeight * width) / (height * imageWidth)
        gl.uniform2f(this.uniScale, scaleX * zoom, scaleY * zoom)
        gl.uniform2f(this.uniScroll, x, y)
        gl.uniform1f(this.uniZ, z)
        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.uniform1i(this.uniTexture, 0)
        gl.bindVertexArray(vao)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }

    update(time: number, delay: number): void {}
}

function createVAO(
    gl: WebGL2RenderingContext,
    prg: WebGLProgram,
    buffVert: WebGLBuffer,
    attributes: TgdAttributes<any>
): WebGLVertexArrayObject {
    const vao = gl.createVertexArray()
    if (!vao) throw Error("Unable to create a WebGLVertexArrayObject!")
    gl.bindVertexArray(vao)
    gl.bindBuffer(gl.ARRAY_BUFFER, buffVert)
    attributes.define(gl, prg)
    // const $attPoint = gl.getAttribLocation(prg, "attPoint") // float attPoint[2]
    // gl.enableVertexAttribArray($attPoint)
    // gl.vertexAttribPointer($attPoint, 2, gl.FLOAT, false, 16, 0)
    // gl.vertexAttribDivisor($attPoint, 0)
    // const $attUV = gl.getAttribLocation(prg, "attUV") // float attUV[2]
    // gl.enableVertexAttribArray($attUV)
    // gl.vertexAttribPointer($attUV, 2, gl.FLOAT, false, 16, 8)
    // gl.vertexAttribDivisor($attUV, 0)
    gl.bindVertexArray(null)
    return vao
}

const _VERT = `#version 300 es

uniform vec2 uniScale;
uniform vec2 uniScroll;
uniform float uniZ;
in vec2 attPoint;
in vec2 attUV;
out vec2 varUV;

void main() {
    varUV = attUV + uniScroll;
    float x = uniScale.x * attPoint.x;
    float y = uniScale.y * attPoint.y;
    gl_Position = vec4(x, y, uniZ, 1.0);
}`

const _FRAG = `#version 300 es

precision mediump float;

uniform sampler2D uniTexture;
in vec2 varUV;
out vec4 FragColor;

void main() {
    FragColor = texture(uniTexture, varUV);
}`
