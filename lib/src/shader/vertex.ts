import { ensureArray, resolveErrorMessage, TgdConsole, WebglAttributeType, WebglUniformType } from ".."
import {
    expandFunctions,
    expandVariables,
    TgdCodeBloc,
    TgdCodeFunctions,
    TgdCodeVariables,
    tgdCodeStringify as tgdCodeToString,
} from "./code"

/**
 * Helper to create a Vertex Shader.
 *
 * Sometime you need to add some code to a shader depending on
 * what you want to display. This can be the case when you use
 * different materials. All the 3D transformations are common,
 * but you may need more or less varyings and uniforms.
 * @see https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf
 */
export class TgdShaderVertex {
    protected static counter = 0

    public readonly name: string
    public precision: "lowp" | "mediump" | "highp"
    public uniforms: TgdCodeVariables<WebglUniformType>
    public attributes: TgdCodeVariables<WebglAttributeType>
    public varying: TgdCodeVariables<WebglAttributeType>
    public functions: TgdCodeFunctions
    public mainCode: TgdCodeBloc
    public mainCodeHeaders: TgdCodeBloc[]
    private readonly header: TgdCodeBloc

    constructor({
        name,
        precision = "highp",
        uniforms = {},
        attributes = {},
        varying = {},
        functions = {},
        mainCode = [],
        mainCodeHeaders = [],
        header = [],
    }: Partial<{
        name: string
        precision: "lowp" | "mediump" | "highp"
        uniforms: TgdCodeVariables<WebglUniformType>
        attributes: TgdCodeVariables<WebglAttributeType>
        varying: TgdCodeVariables<WebglAttributeType>
        functions: TgdCodeFunctions
        mainCode: TgdCodeBloc
        mainCodeHeaders: TgdCodeBloc[]
        header: TgdCodeBloc
    }> = {}) {
        this.name = name ?? `TgdShaderVertex#${TgdShaderVertex.counter++}`
        this.precision = precision
        this.uniforms = uniforms
        this.attributes = attributes
        this.varying = varying
        this.functions = functions
        this.mainCode = mainCode
        this.mainCodeHeaders = mainCodeHeaders
        this.header = header
    }

    clone(): TgdShaderVertex {
        return new TgdShaderVertex({
            name: `${this.name}/copy`,
            precision: this.precision,
            uniforms: { ...this.uniforms },
            attributes: { ...this.attributes },
            varying: { ...this.varying },
            functions: { ...this.functions },
            mainCode: structuredClone(this.mainCode),
            header: structuredClone(this.header),
        })
    }

    get code() {
        return tgdCodeToString([
            "#version 300 es",
            `precision ${this.precision} float;`,
            ...ensureArray(this.header),
            ...expandVariables(this.uniforms, "uniform"),
            ...expandVariables(this.attributes, "in"),
            ...expandVariables(this.varying, "out"),
            ...expandFunctions(this.functions),
            "",
            "void main() {",
            ...this.mainCodeHeaders,
            ensureArray(this.mainCode),
            "}",
        ])
    }

    createShader(gl: WebGL2RenderingContext): WebGLShader {
        try {
            const shader = gl.createShader(gl.VERTEX_SHADER)
            if (!shader) {
                throw new Error("Unable to create a WebGL2 vertex shader!")
            }

            gl.shaderSource(shader, this.code)
            gl.compileShader(shader)
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                throw new Error(gl.getShaderInfoLog(shader) ?? "Unable to compile vertex shader!")
            }
            return shader
        } catch (error) {
            throw new Error(`[${this.name}] ${resolveErrorMessage(error)}`)
        }
    }

    debug(caption = "Vertex shader") {
        console.debug(caption)
        const { code } = this
        const out = new TgdConsole(
            {
                text: caption,
                bold: true,
                color: "#6bf",
            },
            code,
        )
        out.debug()
    }
}
