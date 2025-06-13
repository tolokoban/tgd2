import { TgdCodeBloc } from "@tgd/shader/code"
import {
    TgdPainterState,
    TgdPainterStateOptions,
    WebglAttributeType,
    WebglUniformType,
} from ".."
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
     * The code of a `void applyMaterial(position, normal, uv)` function.
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

    protected readonly state: Partial<TgdPainterStateOptions> = {}

    public applyState(gl: WebGL2RenderingContext, action: () => void) {
        TgdPainterState.do(
            {
                gl,
                ...this.state,
            },
            action
        )
    }
}
