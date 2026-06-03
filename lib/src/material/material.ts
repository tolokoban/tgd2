import { log } from "node:console"
import type { WebglParams } from "@tgd/context/webgl-params"
import type { TgdProgram } from "@tgd/program"
import { tgdCodeStringify } from "@tgd/shader"
import type { TgdCodeBloc, TgdCodeFunctions } from "@tgd/shader/code"
import {
	type TgdContext,
	TgdPainterState,
	type TgdPainterStateOptions,
	type TgdTexture2D,
	type TgdTextureCube,
	tgdTextureRecordToUniforms,
	type WebglAttributeType,
	type WebglUniformType,
} from ".."

export interface TgdMaterialContext {
	context: TgdContext
	program: TgdProgram
	time: number
	delta: number
}

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
	/** Name of the vec3 atribute holding the tangent.
	 * Default to `CUSTOM_ATTRIBUTE_3`
	 */
	attTangent: string
	/**
	 * Name of the vec2 attribute holding the texture coordinates (UV).
	 * Default to `TEXCOORD_0`
	 */
	attUV: string
	varyings: { [name: string]: WebglAttributeType }
	uniforms: { [name: string]: WebglUniformType }
	textures: Record<string, TgdTexture2D | TgdTextureCube>
	/**
	 * Example: `layout(origin_upper_left) in vec4 gl_FragCoord;`
	 */
	fragmentShaderHeader?: TgdCodeBloc | (() => TgdCodeBloc)
	/**
	 * This is the body of the function `void applyMaterial()` and
	 * it must return the color of the current fragment as a `vec4`.
	 */
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
	setUniforms(materialContext: TgdMaterialContext): void
	/**
	 * You may need specific CULL, BLEND, DEPTH, ...
	 */
	state: Partial<TgdPainterStateOptions>
	/**
	 * Cleanup function.
	 */
	delete: () => void
	/**
	 * If `true`, then the mesh will output the resulting shaders codes
	 * in the console.
	 */
	debug: boolean
}

export class TgdMaterial {
	public debug = false
	public attPosition: string
	public attNormal: string
	public attTangent: string
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

	public readonly textures: Record<string, TgdTexture2D | TgdTextureCube>

	private readonly _fragmentShaderCode: TgdCodeBloc | (() => TgdCodeBloc)

	private readonly _fragmentShaderHeader: TgdCodeBloc | (() => TgdCodeBloc)

	public static mix(
		materialAt0: TgdMaterial,
		materialAt1: TgdMaterial,
		varying: string,
	): TgdMaterial {
		return new TgdMaterial({
			attPosition: checkCompatibility("attPosition", materialAt0, materialAt1),
			attNormal: checkCompatibility("attNormal", materialAt0, materialAt1),
			attTangent: checkCompatibility("attTangent", materialAt0, materialAt1),
			attUV: checkCompatibility("attUV", materialAt0, materialAt1),
			textures: {
				...materialAt0.textures,
				...materialAt1.textures,
			},
			uniforms: {
				...materialAt0.uniforms,
				...materialAt1.uniforms,
			},
			varyings: {
				[varying]: "float",
				...materialAt0.varyings,
				...materialAt1.varyings,
			},
			extraVertexShaderFunctions: {
				...materialAt0.extraVertexShaderFunctions,
				...materialAt1.extraVertexShaderFunctions,
			},
			extraFragmentShaderFunctions: {
				...materialAt0.extraFragmentShaderFunctions,
				...materialAt1.extraFragmentShaderFunctions,
				computeMaterialColorAt0: [
					"vec4 computeMaterialColorAt0() {",
					materialAt0.fragmentShaderHeader,
					materialAt0.fragmentShaderCode,
					"}",
				],
				computeMaterialColorAt1: [
					"vec4 computeMaterialColorAt1() {",
					materialAt1.fragmentShaderHeader,
					materialAt1.fragmentShaderCode,
					"}",
				],
			},
			vertexShaderCode: [
				tgdCodeStringify(materialAt0.vertexShaderCode),
				tgdCodeStringify(materialAt1.vertexShaderCode),
			],
			vertexShaderCodeForGetPosition: [
				tgdCodeStringify(materialAt0.vertexShaderCodeForGetPosition),
				tgdCodeStringify(materialAt1.vertexShaderCodeForGetPosition),
			],
			fragmentShaderCode: [
				`return ${varying} < .5 ? computeMaterialColorAt0() : computeMaterialColorAt1();`,
				"vec4 colorAt0 = computeMaterialColorAt0();",
				"vec4 colorAt1 = computeMaterialColorAt1();",
				`return mix(colorAt0, colorAt1, ${varying});`,
			],
			fragmentShaderHeader: [
				tgdCodeStringify(materialAt0.fragmentShaderHeader),
				tgdCodeStringify(materialAt1.fragmentShaderHeader),
			],
			setUniforms: (materialContext: TgdMaterialContext) => {
				materialAt0.setUniforms?.(materialContext)
				materialAt1.setUniforms?.(materialContext)
			},
		})
	}

	/**
	 * The code of a `vec4 applyMaterial()` function.
	 */
	get fragmentShaderCode(): TgdCodeBloc {
		if (typeof this._fragmentShaderCode === "function")
			return this._fragmentShaderCode()
		return this._fragmentShaderCode
	}

	get fragmentShaderHeader(): TgdCodeBloc {
		if (typeof this._fragmentShaderHeader === "function")
			return this._fragmentShaderHeader()
		return this._fragmentShaderHeader
	}

	private readonly _extraFragmentShaderFunctions:
		| TgdCodeFunctions
		| (() => TgdCodeFunctions)

	get extraFragmentShaderFunctions() {
		if (typeof this._extraFragmentShaderFunctions === "function")
			return this._extraFragmentShaderFunctions()
		return this._extraFragmentShaderFunctions
	}

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
		| ((materialContext: TgdMaterialContext) => void)

	protected readonly state: Partial<TgdPainterStateOptions>

	public applyState(
		context: { gl: WebGL2RenderingContext; webglParams: WebglParams },
		action: () => void,
	) {
		TgdPainterState.do(context, {
			...this.state,
			action,
		})
	}

	public readonly delete: () => void

	constructor({
		attPosition = "POSITION",
		attNormal = "NORMAL",
		attTangent = "CUSTOM_ATTRIBUTE_3",
		attUV = "TEXCOORD_0",
		varyings = {},
		uniforms = {},
		textures = {},
		fragmentShaderCode = ["return vec4(1, .666, .1, 1);"],
		fragmentShaderHeader = [],
		extraFragmentShaderFunctions = {},
		vertexShaderCode = [],
		extraVertexShaderFunctions = {},
		vertexShaderCodeForGetPosition = "return pos;",
		setUniforms,
		state = {},
		debug = false,
		delete: deleteFunction = () => {},
	}: Partial<TgdMaterialOptions>) {
		this.delete = deleteFunction
		this.debug = debug
		this.attPosition = attPosition
		this.attNormal = attNormal
		this.attTangent = attTangent
		this.attUV = attUV
		this.varyings = varyings
		this.textures = textures
		const uniformsForTextures = tgdTextureRecordToUniforms(textures)
		this.uniforms = {
			...uniforms,
			...uniformsForTextures,
		}
		this._fragmentShaderCode = fragmentShaderCode
		this._fragmentShaderHeader = fragmentShaderHeader
		this._extraFragmentShaderFunctions = extraFragmentShaderFunctions
		this._vertexShaderCode = vertexShaderCode
		this._extraVertexShaderFunctions = extraVertexShaderFunctions
		this._vertexShaderCodeForGetPosition = vertexShaderCodeForGetPosition
		this.setUniforms = setUniforms
		this.state = state
	}
}

function checkCompatibility(
	attribute: "attPosition" | "attNormal" | "attTangent" | "attUV",
	materialAt0: TgdMaterial,
	materialAt1: TgdMaterial,
): string | undefined {
	const att0 = materialAt0[attribute]
	const att1 = materialAt1[attribute]
	if (att0 && att1) {
		if (att0 !== att1) {
			throw new Error(`"attPosition" is incompatible: "${att0}" vs "${att1}"!`)
		}
	}
	return att0 ?? att1
}
