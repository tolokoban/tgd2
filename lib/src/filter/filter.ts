import { TgdContext } from "@tgd/context"
import { TgdProgram } from "@tgd/program"
import { TgdCodeBloc, TgdCodeFunctions } from "@tgd/shader/code"
import { WebglUniformType } from "@tgd/types"

/**
 * Define the shader to be used in a filter.
 *
 * A filter is mostly a fragment shader working on a texture.
 *
 * Always available varyings:
 *  * `vec2 varUV`
 *
 * Always available uniforms:
 *  * `sampler2D texSource`: input texture.
 *  * `float uniWidth`: width of the texture in pixels.
 *  * `float uniHeight`: height of the texture in pixels.
 */
export class TgdFilter {
    /**
     * If you need more uniforms, define them here.
     * And set the values in the `setUniforms()` method.
     */
    public readonly uniforms: { [name: string]: WebglUniformType } = {}

    /**
     * The code of a `vec4 applyColor()` function.
     * Must return a `vec4` color.
     */
    public readonly fragmentShaderCode: TgdCodeBloc = [
        "vec4 color = texture(uniTexture, varUV);",
        "return color;",
    ]

    public readonly extraFunctions: TgdCodeFunctions | TgdCodeBloc = {}

    public readonly setUniforms = (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        program: TgdProgram,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        time: number,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        context: TgdContext
    ): void => {}

    constructor(options: Partial<TgdFilterOptions> = {}) {
        const { uniforms, fragmentShaderCode, extraFunctions, setUniforms } =
            options
        if (uniforms) this.uniforms = uniforms
        if (fragmentShaderCode) this.fragmentShaderCode = fragmentShaderCode
        if (extraFunctions) this.extraFunctions = extraFunctions
        if (setUniforms) this.setUniforms = setUniforms
    }
}

export interface TgdFilterOptions {
    uniforms: { [name: string]: WebglUniformType }
    fragmentShaderCode: TgdCodeBloc
    extraFunctions: TgdCodeFunctions | TgdCodeBloc
    setUniforms(program: TgdProgram, time: number, context: TgdContext): void
}
