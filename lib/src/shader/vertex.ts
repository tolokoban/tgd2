import { WebglAttributeType, WebglUniformType } from ".."
import {
    CodeBloc,
    Functions,
    Variables,
    funcs,
    stringifyCode as tgdCodeToString,
    vars,
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
    public uniforms: Variables<WebglUniformType>
    public attributes: Variables<WebglAttributeType>
    public varying: Variables<WebglAttributeType>
    public functions: Functions
    public mainCode: CodeBloc

    constructor({
        precision = "mediump",
        uniforms = {},
        attributes = {},
        varying = {},
        functions = {},
        mainCode = [],
    }: Partial<{
        precision: "lowp" | "mediump" | "highp"
        uniforms: Variables<WebglUniformType>
        attributes: Variables<WebglAttributeType>
        varying: Variables<WebglAttributeType>
        functions: Functions
        mainCode: CodeBloc
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
            ...vars(this.uniforms, "uniform"),
            ...vars(this.attributes, "in"),
            ...vars(this.varying, "out"),
            ...funcs(this.functions),
            "",
            `void main() {`,
            this.mainCode,
            "}",
        ])
    }
}
