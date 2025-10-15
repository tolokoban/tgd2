import { TgdCodeBloc, TgdCodeFunctions } from "@tgd/shader/code"
import {
    TgdPainterState,
    TgdPainterStateOptions,
    WebglAttributeType,
    WebglUniformType,
} from ".."
import { TgdProgram } from "@tgd/program"

export interface TgdMaterialOptions {
    /**
     * Name of the vec4 attribute holding the vertex position.
     * Default to `POSITION`.
     */
    attPosition: string
    /**
     * Name of the vec3 attribute holding the normal.
     * Default to `NORMAL`.
     */
    attNormal: string
    /**
     * Name of the vec2 attribute holding the texture coordinates (UV).
     * Default to `TEXCOORD_0`
     */
    attUV: string
    varyings: { [name: string]: WebglAttributeType }
    uniforms: { [name: string]: WebglUniformType }
    fragmentShaderCode: TgdCodeBloc | (() => TgdCodeBloc)
    extraFragmentShaderFunctions: TgdCodeFunctions | (() => TgdCodeFunctions)
    vertexShaderCode: TgdCodeBloc | (() => TgdCodeBloc)
    extraVertexShaderFunctions: TgdCodeFunctions | (() => TgdCodeFunctions)
    /**
     * Body of the function `vec4 getPosition(vec4 pos)` of the vertex shader.
     *
     * By default, this body is `return pos;`.
     * Yo can use this code to apply any transformation on the vertex position
     * before convertion to screen space.
     */
    vertexShaderCodeForGetPosition: TgdCodeBloc | (() => TgdCodeBloc)
    /**
     * If this function is defined, it will be called at each frame.
     * Most of the time, it is used tu update the uniforms.
     */
    setUniforms(program: TgdProgram, time: number, delay: number): void
    /**
     * You may need specific CULL, BLEND, DEPTH, ...
     */
    state: Partial<TgdPainterStateOptions>
}

export class TgdMaterial {
    public attPosition: string
    public attNormal: string
    public attUV: string

    /**
     * Example:
     * ```
     * {
     *   varNormal: "vec3",
     *   varUV: "vec2"
     * }
     * ```
     */
    public readonly varyings: { [name: string]: WebglAttributeType }

    public readonly uniforms: { [name: string]: WebglUniformType }

    private readonly _fragmentShaderCode: TgdCodeBloc | (() => TgdCodeBloc)

    /**
     * The code of a `vec4 applyMaterial()` function.
     */
    get fragmentShaderCode(): TgdCodeBloc {
        if (typeof this._fragmentShaderCode === "function")
            return this._fragmentShaderCode()
        return this._fragmentShaderCode
    }

    readonly extraFragmentShaderFunctions:
        | TgdCodeFunctions
        | (() => TgdCodeFunctions)

    private readonly _vertexShaderCode: TgdCodeBloc | (() => TgdCodeBloc)

    /**
     * The code of a `void applyMaterial(position, normal, uv)` function.
     */
    get vertexShaderCode() {
        if (typeof this._vertexShaderCode === "function")
            return this._vertexShaderCode()
        return this._vertexShaderCode
    }

    private readonly _extraVertexShaderFunctions:
        | TgdCodeFunctions
        | (() => TgdCodeFunctions)

    get extraVertexShaderFunctions() {
        if (typeof this._extraVertexShaderFunctions === "function")
            return this._extraVertexShaderFunctions()
        return this._extraVertexShaderFunctions
    }

    private readonly _vertexShaderCodeForGetPosition?:
        | TgdCodeBloc
        | (() => TgdCodeBloc)

    /**
     * Body of the function `vec4 getPosition(vec4 pos)` of the vertex shader.
     *
     * By default, this body is `return pos;`.
     * Yo can use this code to apply any transformation on the vertex position
     * before convertion to screen space.
     */
    get vertexShaderCodeForGetPosition() {
        if (typeof this._vertexShaderCodeForGetPosition === "function")
            return this._vertexShaderCodeForGetPosition()
        return this._vertexShaderCodeForGetPosition
    }

    readonly setUniforms:
        | undefined
        | ((program: TgdProgram, time: number, delay: number) => void)

    protected readonly state: Partial<TgdPainterStateOptions>

    public applyState(gl: WebGL2RenderingContext, action: () => void) {
        TgdPainterState.do(
            {
                gl,
                ...this.state,
            },
            action
        )
    }

    constructor({
        attPosition = "POSITION",
        attNormal = "NORMAL",
        attUV = "TEXCOORD_0",
        varyings = {},
        uniforms = {},
        fragmentShaderCode = ["return vec4(1, .666, .1, 1);"],
        extraFragmentShaderFunctions = {},
        vertexShaderCode = [],
        extraVertexShaderFunctions = {},
        vertexShaderCodeForGetPosition = "return pos;",
        setUniforms,
        state = {},
    }: Partial<TgdMaterialOptions>) {
        this.attPosition = attPosition
        this.attNormal = attNormal
        this.attUV = attUV
        this.varyings = varyings
        this.uniforms = uniforms
        this._fragmentShaderCode = fragmentShaderCode
        this.extraFragmentShaderFunctions = extraFragmentShaderFunctions
        this._vertexShaderCode = vertexShaderCode
        this._extraVertexShaderFunctions = extraVertexShaderFunctions
        this._vertexShaderCodeForGetPosition = vertexShaderCodeForGetPosition
        this.setUniforms = setUniforms
        this.state = state
    }
}
