import { WebglAttributeType, WebglUniformType } from ".."
import {
    TgdCodeBloc,
    TgdCodeFunctions,
    TgdCodeVariables,
    expandFunctions,
    tgdCodeStringify as tgdCodeToString,
    expandVariables,
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
    public precision: "lowp" | "mediump" | "highp" = "mediump"
    public uniforms: TgdCodeVariables<WebglUniformType>
    public attributes: TgdCodeVariables<WebglAttributeType>
    public varying: TgdCodeVariables<WebglAttributeType>
    public functions: TgdCodeFunctions
    public mainCode: TgdCodeBloc

    constructor({
        precision = "mediump",
        uniforms = {},
        attributes = {},
        varying = {},
        functions = {},
        mainCode = [],
    }: Partial<{
        precision: "lowp" | "mediump" | "highp"
        uniforms: TgdCodeVariables<WebglUniformType>
        attributes: TgdCodeVariables<WebglAttributeType>
        varying: TgdCodeVariables<WebglAttributeType>
        functions: TgdCodeFunctions
        mainCode: TgdCodeBloc
    }> = {}) {
        this.precision = precision
        this.uniforms = uniforms
        this.attributes = attributes
        this.varying = varying
        this.functions = functions
        this.mainCode = mainCode
    }

    get code() {
        return tgdCodeToString([
            `#version 300 es`,
            `precision ${this.precision} float;`,
            ...expandVariables(this.uniforms, "uniform"),
            ...expandVariables(this.attributes, "in"),
            ...expandVariables(this.varying, "out"),
            ...expandFunctions(this.functions),
            "",
            `void main() {`,
            this.mainCode,
            "}",
        ])
    }
}
