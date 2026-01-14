import {
	TgdCameraPerspective,
	type TgdContext,
	TgdControllerCameraOrbit,
	TgdDataset,
	TgdPainter,
	TgdPainterClear,
	TgdPainterState,
	TgdProgram,
	TgdVertexArray,
	tgdLoadArrayBuffer,
	webglPresetBlend,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"
import dataURL from "../stars.dat"
import { PainterNames } from "./painter-names"
import frag from "./painter-stars.frag"
import vert from "./painter-stars.vert"

// #begin
function init(ctx: TgdContext) {
	new TgdControllerCameraOrbit(ctx, {
		inertiaOrbit: 1000,
	})
	ctx.add(new TgdPainterClear(ctx, { color: [0, 0, 0, 1] }))
	ctx.paint()
	tgdLoadArrayBuffer(dataURL).then((buff) => {
		if (!buff) return

		const data = new Float32Array(buff)
		const painter = new PainterStars(ctx, data)
		ctx.add(
			new TgdPainterState(ctx, {
				blend: webglPresetBlend.alpha,
				children: [new PainterNames(ctx), painter],
			}),
		)
		ctx.paint()
	})
}
// #end

export default function Demo() {
	return <View onReady={init} />
}

// #begin Class PainterStars
export class PainterStars extends TgdPainter {
	// Number of stars
	private readonly count: number
	private readonly prg: TgdProgram
	private readonly vao: TgdVertexArray

	private readonly fixedCamera = new TgdCameraPerspective({
		transfo: { distance: 0 },
		near: 0.1,
		far: 2.0,
		fovy: Math.PI / 3,
	})

	/**
	 *
	 * @param data A sequence of 4 floats: longitude, latitude, brightness and color.
	 */
	constructor(
		private readonly context: TgdContext,
		data: Float32Array,
	) {
		super()
		this.count = data.length >> 2
		this.prg = new TgdProgram(context.gl, {
			vert,
			frag,
		})
		const dataset = new TgdDataset({
			attStar: "vec4",
		})
		dataset.set("attStar", data)
		this.vao = new TgdVertexArray(context.gl, this.prg, [dataset])
	}

	paint() {
		const { context, prg, vao, fixedCamera } = this
		const { camera, gl } = context
		fixedCamera.transfo.orientation = camera.transfo.orientation
		prg.use()
		prg.uniformMatrix4fv("uniModelViewMatrix", fixedCamera.matrixModelView)
		prg.uniformMatrix4fv("uniProjectionMatrix", fixedCamera.matrixProjection)
		prg.uniform1f(
			"uniVegaSizeInPixels",
			Math.max(context.width, context.height) * 0.05,
		)
		vao.bind()
		gl.drawArrays(gl.POINTS, 0, this.count)
	}

	delete() {
		this.prg.delete()
		this.vao.delete()
	}
}
// #end
