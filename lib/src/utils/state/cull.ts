import type { WebglParams } from "@tgd/context/webgl-params"
import { debug, highlightEnum } from "@tgd/debug/debug"
import { WebglEnumCullFace } from "@tgd/types"

export interface WebglCullOptions {
	enabled: boolean
	cullFace: WebglEnumCullFace
}

export const webglPresetCull: Record<
	"off" | "back" | "front",
	WebglCullOptions
> = {
	off: {
		enabled: false,
		cullFace: WebglEnumCullFace.BACK,
	},
	back: {
		enabled: true,
		cullFace: WebglEnumCullFace.BACK,
	},
	front: {
		enabled: true,
		cullFace: WebglEnumCullFace.FRONT,
	},
}

export function webglCullSet(
	context: { webglParams: WebglParams },
	cull: WebglCullOptions,
) {
	const p = context.webglParams
	p.cullFace = cull.enabled
	p.cullFaceMode = cull.cullFace
}

export function webglCullGet(context: {
	webglParams: WebglParams
}): WebglCullOptions {
	const p = context.webglParams
	return {
		enabled: p.cullFace,
		cullFace: p.cullFaceMode,
	}
}

export function webglCullExec(
	context: { webglParams: WebglParams },
	cull: WebglCullOptions,
	action: () => void,
) {
	const currentState = webglCullGet(context)
	webglCullSet(context, cull)
	try {
		action()
	} finally {
		webglCullSet(context, currentState)
	}
}

export function webglDebugCull(
	context: { webglParams: WebglParams },
	caption = "Cull test:",
) {
	console.log(caption)
	const cull = webglCullGet(context)
	debug([
		[caption, cull.enabled, "\n"],
		[
			{ cls: "code" },
			[
				"gl.",
				cull.enabled ? "enable" : "disable",
				"(",
				highlightEnum("CULL_FACE"),
				")\n",
			],
			["gl.cullFace(", highlightEnum(cull.cullFace), ")\n"],
		],
	])
}
