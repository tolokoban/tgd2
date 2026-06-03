import type { TgdCodeBloc } from "@tgd/shader"

export function vertCode(): TgdCodeBloc[] {
	return [
		"varUV = attUV;",
		"float radius = attPoint.w;",
		"vec4 point = uniModelViewMatrix * vec4(attPoint.xyz, 1.0);",
		"vec4 shift = point + vec4(0, uniRadiusMultiplier * radius, 0, 0);",
		"gl_Position = uniProjectionMatrix * point;",
		"vec4 screenShift = uniProjectionMatrix * shift;",
		"gl_PointSize = max(",
		"  uniMinSizeInPixels,",
		"  abs(screenShift.y - gl_Position.y) * uniScreenHeightInPixels / gl_Position.w",
		");",
	]
}

export function vertInstancesCode(): TgdCodeBloc[] {
	return [
		"varColor = texture(uniTexture, attUV);",
		"float radius = attPoint.w * uniRadiusMultiplier;",
		"vec4 point = uniModelViewMatrix * vec4(attPoint.xyz, 1.0);",
		"gl_Position = uniProjectionMatrix * point;",
		"vec4 depth = point + vec4(0, 0, radius, 0);",
		"vec4 screenDepth = uniProjectionMatrix * depth;",
		"varDepth = (gl_Position.z - screenDepth.z) * .5;",
		"vec4 shift = point + vec4(radius, radius, 0, 0);",
		"vec4 screenShift = uniProjectionMatrix * shift;",
		"float pointSize = max(",
		"  uniMinSizeInPixels * gl_Position.w,",
		"  abs(screenShift.y - gl_Position.y)",
		");",
		"gl_Position.xy += attPointCoord * pointSize * uniAspectRatio;",
		"varPointCoord = attPointCoord;",
	]
}
