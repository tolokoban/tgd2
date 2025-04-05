import { WebglAttributeType, WebglUniformType } from ".."
import {
    TgdCodeBloc,
    TgdCodeFunctions,
    TgdCodeVariables,
    expandFunctions,
    tgdCodeStringify,
    expandVariables,
} from "./code"

/**
 * Helper to wirte the code of a fragment Shader.
 * @see https://registry.khronos.org/OpenGL/specs/es/3.0/GLSL_ES_Specification_3.00.pdf
 */
export class TgdShaderFragment {
    public precision: "lowp" | "mediump" | "highp" = "mediump"
    public uniforms: TgdCodeVariables<WebglUniformType>
    public varying: TgdCodeVariables<WebglAttributeType>
    public outputs: TgdCodeVariables<WebglAttributeType>
    /**
     * The key should be the signatureof a function
     * (like `vec2 scale(vec2 v, float s)`)
     * and the value to code of this function (like `return v * s;`).
     *
     * But if the key starts with a `_`, then the content of the value is uses verbatim.
     */
    public functions: TgdCodeFunctions | TgdCodeBloc
    public mainCode: TgdCodeBloc

    constructor({
        precision = "highp",
        uniforms = {},
        outputs = {
            FragColor: "vec4",
        },
        varying = {},
        functions = {},
        mainCode = ["FragColor = vec4(1, 0.667, 0, 1);"],
    }: Partial<{
        precision: "lowp" | "mediump" | "highp"
        uniforms: TgdCodeVariables<WebglUniformType>
        outputs: TgdCodeVariables<WebglAttributeType>
        varying: TgdCodeVariables<WebglAttributeType>
        functions: TgdCodeFunctions | TgdCodeBloc
        mainCode: TgdCodeBloc
    }> = {}) {
        this.precision = precision
        this.uniforms = uniforms
        this.outputs = outputs
        this.varying = varying
        this.functions = functions
        this.mainCode = mainCode
    }

    get code() {
        return tgdCodeStringify([
            `#version 300 es`,
            `precision ${this.precision} float;`,
            ...expandVariables(this.uniforms, "uniform"),
            ...expandVariables(this.varying, "in"),
            ...expandVariables(this.outputs, "out"),
            ...expandFunctions(this.functions),
            "",
            `void main() {`,
            this.mainCode,
            "}",
        ])
    }
}
