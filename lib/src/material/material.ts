import { TgdCodeBloc } from "@tgd/shader/code"
import { WebglAttributeType, WebglUniformType } from ".."
import { TgdProgram } from "@tgd/program"

export abstract class TgdMaterial {
    public attPosition = "POSITION"
    public attNormal = "NORMAL"
    public attUV = "TEXCOORD_0"

    /**
     * Example:
     * ```
     * {
     *   varNormal: "vec3",
     *   varUV: "vec2"
     * }
     * ```
     */
    public readonly varyings: { [name: string]: WebglAttributeType } = {}

    public readonly uniforms: { [name: string]: WebglUniformType } = {}

    /**
     * The code of a `vec4 applyMaterial()` function.
     */
    abstract readonly fragmentShaderCode: TgdCodeBloc

    /**
     * The code of a `void applyMaterial()` function.
     */
    abstract readonly vertexShaderCode: TgdCodeBloc

    /**
     * Body of the function `vec4 getPosition(vec4 pos)` of the vertex shader.
     *
     * By default, this body is `return pos;`.
     * Yo can use this code to apply any transformation on the vertex position
     * before convertion to screen space.
     */
    vertexShaderCodeForGetPosition?: TgdCodeBloc

    abstract setUniforms(program: TgdProgram, time: number, delay: number): void
}
