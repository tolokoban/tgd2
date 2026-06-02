import { TgdVec3 } from "@tgd/math"
import type { TgdCodeBloc } from "@tgd/shader"
import type { ArrayNumber3 } from "@tgd/types"

export type TgdPointsCloudFragCodeSphereOptions = Partial<{
	/**
	 * Enable specularity.
	 * Default to `false`
	 */
	enableSpecular: boolean
	/**
	 * If defined, it will be hardcoded in the shader and won't use uniform to update.
	 */
	specularExponent: number
	/**
	 * If defined, it will be hardcoded in the shader and won't use uniform to update.
	 */
	specularIntensity: number
	/**
	 * If defined, it will be hardcoded in the shader and won't use uniform to update.
	 */
	shadowThickness: number
	/**
	 * If defined, it will be hardcoded in the shader and won't use uniform to update.
	 */
	shadowIntensity: number
	/**
	 * If defined, it will be hardcoded in the shader and won't use uniform to update.
	 */
	light: number
	/**
	 * This will always be hardcoded in the shader.
	 * Default to a light coming from the top left of the screen.
	 */
	lightDirection: TgdVec3 | ArrayNumber3
}>

const DEFAULT_LIGHT_DIRECTION = new TgdVec3(-0.4, 0.5, 0.666).normalize()

export function fragCodeSphere(
	options: TgdPointsCloudFragCodeSphereOptions = {},
): TgdCodeBloc {
	const {
		enableSpecular = false,
		specularExponent,
		specularIntensity,
		shadowThickness,
		shadowIntensity,
		light,
		lightDirection = DEFAULT_LIGHT_DIRECTION,
	} = options
	const SpE =
		typeof specularExponent === "number"
			? specularExponent.toFixed(6)
			: "uniSpecularExponent"
	const SpI =
		typeof specularIntensity === "number"
			? specularIntensity.toFixed(6)
			: "uniSpecularIntensity"
	const ShT =
		typeof shadowThickness === "number"
			? shadowThickness.toFixed(6)
			: "uniShadowThickness"
	const ShI =
		typeof shadowIntensity === "number"
			? shadowIntensity.toFixed(6)
			: "uniShadowIntensity"
	const L = typeof light === "number" ? light.toFixed(6) : "uniLight"
	const [x, y, z] = lightDirection
	return [
		"vec2 coords = varPointCoord;",
		"float z2 = 1.0 - dot(coords, coords);",
		"if (z2 < 0.0) discard;",
		"z2 = sqrt(z2);",
		"gl_FragDepth = gl_FragCoord.z - z2 * varDepth;",
		`float len = 0.5 * (1.0 + dot(vec3(coords, z2), vec3(${x.toFixed(
			6,
		)}, ${y.toFixed(6)}, ${z.toFixed(6)})));`,
		`float light = smoothstep(0.0, ${ShT}, len) * ${ShI} + (1.0 - ${ShI});`,
		enableSpecular
			? `float spec = pow(len, ${SpE}) * ${SpI};`
			: "// No specular.",
		`return color * vec4(vec3(light * ${L}), 1.0) ${
			enableSpecular ? "+ vec4(vec3(spec), 0)" : ""
		};`,
	]
}
