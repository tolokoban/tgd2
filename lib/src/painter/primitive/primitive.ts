import { TgdPainter } from "../painter"
import Resources from "../../scene/resources"
import { TgdScene } from "../../scene"
import { TgdAttribute, TgdAttributes } from "../../attributes"

export interface TgdPainterPrimitive<
    T extends { [key: string]: Partial<TgdAttribute> | number }
> {
    vertexShader: string
    attributes: TgdAttributes<T>
}

export class TgdPainterPrimitive<
    T extends { [key: string]: Partial<TgdAttribute> | number }
> implements TgdPainter
{
    private readonly program: WebGLProgram
    private readonly buffer: WebGLBuffer
    private readonly res: Resources
    private readonly vao: WebGLVertexArrayObject
    private readonly uniColor: WebGLUniformLocation
    private verticesCount = 0

    public red = 0.5
    public green = 0.5
    public blue = 0.5
    public alpha = 1
    public mode: "TRIANGLES" | "TRIANGLE_STRIP" | "TRIANGLE_FAN" = "TRIANGLES"

    constructor(
        private readonly scene: TgdScene,
        private readonly options: TgdPainterPrimitive<T>
    ) {
        this.res = scene.getResources("TgdPainterBackground")
        this.buffer = this.res.createBuffer()
        this.program = this.res.createProgram({
            vert: VERT,
            frag: FRAG,
        })
        this.uniColor = scene.getUniformLocation(this.program, "uniColor")

        this.vao = createVAO(
            scene.gl,
            this.program,
            this.buffer,
            options.attributes
        )
    }

    updateAttributes(verticesCount: number, dynamic = false) {
        const { attributes, scene, buffer } = this
        attributes.update(scene.gl, buffer, verticesCount, dynamic)
        this.verticesCount = verticesCount
    }

    destroy(): void {
        const { res } = this
        res.deleteProgram()
        res.deleteBuffer()
    }

    paint(time: number, delay: number): void {
        const { gl } = this.scene
        const { vao, program } = this
        gl.useProgram(program)
        gl.uniform4f(this.uniColor, this.red, this.green, this.blue, this.alpha)
        gl.bindVertexArray(vao)
        gl.drawArrays(gl[this.mode], 0, this.verticesCount)
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

const VERT = `#version 300 es

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

const FRAG = `#version 300 es

precision mediump float;

uniform sampler2D uniTexture;
in vec2 varUV;
out vec4 FragColor;

void main() {
    FragColor = texture(uniTexture, varUV);
}`
