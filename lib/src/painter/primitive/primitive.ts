import {
    TgdScene,
    TgdPainter,
    TgdAttributes,
    TgdTypeAttributesDefinitions,
    TgdTypeWebGlDrawMode,
} from "@"
import Resources from "../../scene/resources"
import VERT from "./primitive.vert"
import FRAG from "./primitive.frag"

export interface TgdPainterPrimitiveOptions<
    T extends TgdTypeAttributesDefinitions
> {
    compute: string
    attributes: TgdAttributes<T>
    mode?: TgdTypeWebGlDrawMode
    red?: number
    green?: number
    blue?: number
    alpha?: number
}

export class TgdPainterPrimitive<T extends TgdTypeAttributesDefinitions>
    implements TgdPainter
{
    private readonly program: WebGLProgram
    private readonly buffer: WebGLBuffer
    private readonly res: Resources
    private readonly vao: WebGLVertexArrayObject
    private readonly uniColor: WebGLUniformLocation
    private readonly attributes: TgdAttributes<T>
    private verticesCount = 0

    public red = 0.5
    public green = 0.5
    public blue = 0.5
    public alpha = 1
    public mode: TgdTypeWebGlDrawMode = "TRIANGLES"

    constructor(
        private readonly scene: TgdScene,
        options: TgdPainterPrimitiveOptions<T>
    ) {
        const { attributes, compute, mode, red, green, blue, alpha } = options
        this.red = red ?? 0.5
        this.green = green ?? 0.5
        this.blue = blue ?? 0.5
        this.alpha = alpha ?? 1
        this.attributes = attributes
        this.mode = mode ?? "TRIANGLES"
        attributes.getNames()
        this.res = scene.getResources("TgdPainterPrimitive")
        this.buffer = this.res.createBuffer()
        this.program = this.res.createProgram({
            vert: createVertexShaderCode(VERT, attributes, options.compute),
            frag: FRAG,
        })
        this.uniColor = scene.getUniformLocation(this.program, "uniColor")
        this.vao = createVAO(scene.gl, this.program, this.buffer, attributes)
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
    gl.bindVertexArray(null)
    return vao
}

function createVertexShaderCode<T extends TgdTypeAttributesDefinitions>(
    template: string,
    attributes: TgdAttributes<T>,
    vertexShaderFunction: string
): string {
    const codeIn = attributes
        .getNames()
        .map(name => {
            return `in ${attributes.getGlslType(name)} ${name as string};`
        })
        .join("\n")

    return template
        .split("\n")
        .map(rawLine => {
            const line = rawLine.trim()
            if (line !== "{{COMPUTE}}") return line

            return `${codeIn}\n${vertexShaderFunction}\n`
        })
        .join("\n")
}
