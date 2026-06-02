import type { TgdCodeBloc } from "@tgd/shader"

export function fragCodeFlat(): TgdCodeBloc {
	return [
		"vec2 coords = varPointCoord;",
		"float z2 = 1.0 - dot(coords, coords);",
		"if (z2 < 0.0) discard;",
		"return varColor;",
	]
}
