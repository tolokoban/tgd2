import type { WebglParams } from "@tgd/context/webgl-params"
import type { TgdPainterFunction } from "@tgd/types/painter"
import { webglLookup } from "@tgd/utils"
import {
	type WebglBlendOptions,
	type WebglCullOptions,
	type WebglDepthOptions,
	type WebglStencilOptions,
	webglBlendGet,
	webglBlendSet,
	webglCullGet,
	webglCullSet,
	webglDepthGet,
	webglDepthSet,
	webglStencilGet,
	webglStencilSet,
} from "@tgd/utils/state"
import { TgdPainterGroup } from "../group"
import type { TgdPainter } from "../painter"

export interface TgdPainterStateOptions {
	children: TgdPainter[]
	color: boolean | [boolean, boolean, boolean, boolean]
	blend: WebglBlendOptions
	depth: WebglDepthOptions
	cull: WebglCullOptions
	stencil: WebglStencilOptions
	name: string
	/**
	 * Function to execute before painting.
	 */
	onEnter?: TgdPainterFunction
	/**
	 * Function to execute after painting.
	 */
	onExit?: TgdPainterFunction
}

export class TgdPainterState extends TgdPainterGroup {
	public static do(
		context: { gl: WebGL2RenderingContext; webglParams: WebglParams },
		options: Omit<
			Partial<TgdPainterStateOptions>,
			"children" | "onEnter" | "onExit"
		> & {
			action: () => void
		},
	) {
		const self = {
			color: {
				red: true,
				green: true,
				blue: true,
				alpha: true,
			},
		}
		const { onEnterActions, onExitActions } = prepareActions(
			self,
			context,
			options,
		)
		for (const actionEnter of onEnterActions) actionEnter()
		options.action()
		for (const actionExit of onExitActions) actionExit()
	}

	public static debug(context: { webglParams: WebglParams }) {
		const depth = webglDepthGet(context)
		console.log("Depth:", {
			enabled: depth.enabled,
			func: webglLookup(depth.func),
			mask: depth.mask,
			range: [depth.rangeMin, depth.rangeMax],
		})
		// console.log("Cull:", webglCullGet(context))
		// console.log("Blend:", webglBlendGet(context))
	}

	readonly color = {
		red: true,
		green: true,
		blue: true,
		alpha: true,
	}

	constructor(
		context: { gl: WebGL2RenderingContext; webglParams: WebglParams },
		options: Partial<TgdPainterStateOptions> = {},
	) {
		super(options.children)
		const { onEnterActions, onExitActions } = prepareActions(
			this,
			context,
			options,
		)
		this.onEnter = (time, delay) => {
			options.onEnter?.(time, delay)
			for (const f of onEnterActions) f()
		}
		this.onExit = (time, delay) => {
			for (const f of onExitActions) f()
			options.onExit?.(time, delay)
		}
		this.name = options.name ?? `State/${this.name}`
	}
}

function figureOutColorMask(
	color: boolean | [boolean, boolean, boolean, boolean] | undefined,
): [boolean, boolean, boolean, boolean] | undefined {
	if (color === true) return [true, true, true, true]
	if (color === false) return [false, false, false, false]
	return color
}

function prepareActions(
	self: {
		color: { red: boolean; green: boolean; blue: boolean; alpha: boolean }
	},
	context: { gl: WebGL2RenderingContext; webglParams: WebglParams },
	options: Partial<TgdPainterStateOptions>,
) {
	const { gl } = context
	const { color, blend, depth, cull, stencil } = options
	const onEnterActions: Array<() => void> = []
	const onExitActions: Array<() => void> = []
	const colorMask: undefined | [boolean, boolean, boolean, boolean] =
		figureOutColorMask(color)
	const [red, green, blue, alpha] = colorMask ?? [true, true, true, true]
	self.color.red = red
	self.color.green = green
	self.color.blue = blue
	self.color.alpha = alpha
	if (Array.isArray(colorMask)) {
		let savedColorMask: [boolean, boolean, boolean, boolean] | null | undefined
		onEnterActions.push(() => {
			savedColorMask = gl.getParameter(gl.COLOR_WRITEMASK) as [
				boolean,
				boolean,
				boolean,
				boolean,
			]
			gl.colorMask(
				self.color.red,
				self.color.green,
				self.color.blue,
				self.color.alpha,
			)
		})
		onExitActions.push(() => {
			gl.colorMask(...(savedColorMask ?? [true, true, true, true]))
		})
	}
	if (blend) {
		let savedBlend: WebglBlendOptions
		onEnterActions.push(() => {
			savedBlend = webglBlendGet(context)
			webglBlendSet(context, blend)
		})
		onExitActions.push(() => {
			if (savedBlend) webglBlendSet(context, savedBlend)
		})
	}
	if (depth) {
		let savedDepth: WebglDepthOptions
		onEnterActions.push(() => {
			savedDepth = webglDepthGet(context)
			webglDepthSet(context, depth)
		})
		onExitActions.push(() => {
			if (savedDepth) webglDepthSet(context, savedDepth)
		})
	}
	if (cull) {
		let savedCull: WebglCullOptions
		onEnterActions.push(() => {
			savedCull = webglCullGet(gl)
			webglCullSet(gl, cull)
		})
		onExitActions.push(() => {
			if (savedCull) webglCullSet(gl, savedCull)
		})
	}
	if (stencil) {
		let savedStencil: WebglStencilOptions
		onEnterActions.push(() => {
			savedStencil = webglStencilGet(gl)
			webglStencilSet(gl, stencil)
		})
		onExitActions.push(() => {
			if (savedStencil) webglStencilSet(gl, savedStencil)
		})
	}
	return { onEnterActions, onExitActions }
}
