import { TgdPainter } from "../painter";
import { TgdDataset } from "@tgd/dataset/dataset";
import { TgdVertexArray } from "@tgd/vao";

import { TgdTexture2D } from "@tgd/texture";
import { TgdProgram } from "@tgd/program";
import {
	webglPresetBlend,
	webglPresetCull,
	webglPresetDepth,
} from "@tgd/utils";
import { TgdContext } from "@tgd/context";

import { TgdPainterState } from "../state";
import { TgdPainterFramebuffer } from "../framebuffer";

import VERT from "./background.vert";
import FRAG from "./background.frag";
import { TgdPainterClear } from "../clear";

export interface TgdPainterBackgroundWithDepthOptions {
	background: TgdTexture2D;
	children: TgdPainter[];
}

/**
 * Complex backgrounds can be long to render. If we use a fixed camera,
 * we just need to render it once, store the image and the depth buffer and re-use them.
 *
 * Assuming you already have an image of the complex background (maybe you rendered it
 * in Ray tracing in Blender), this painter will help you cache the depth buffer.
 *
 * The children must output a special color that will encode a 24 bits depth for each fragment.
 * Here is the formula you can use (GLSL code):
 *
 * ```glsl
 * int z = int(float(0xFFFFFF) * gl_FragCoord.z);
 * float r = float(z & 0xFF) / 255.0;
 * z >>= 8;
 * float g = float(z & 0xFF) / 255.0;
 * z >>= 8;
 * float b = float(z & 0xFF) / 255.0;
 * return vec4(r, g, b, 1);
 * ```
 *
 * The material [TgdMaterialDepth](./TgdMaterialDepth.html) does just that.
 *
 * @see TgdMaterialDepth
 */
export class TgdPainterBackgroundWithDepth extends TgdPainter {
	private readonly textureDepth: TgdTexture2D;
	private readonly textureColor: TgdTexture2D;
	private readonly program: TgdProgram;
	private readonly vao: TgdVertexArray;
	private readonly framebuffer: TgdPainterFramebuffer;
	private lastWidth = -1;
	private lastHeight = -1;

	constructor(
		private readonly context: TgdContext,
		{ background, children }: TgdPainterBackgroundWithDepthOptions,
	) {
		super();
		const { gl } = context;
		const fb = gl.createFramebuffer();
		if (!fb) throw new Error("Unable to create a WebGL2 Frame buffer!");

		this.textureDepth = new TgdTexture2D(context).setParams({
			wrapS: "MIRRORED_REPEAT",
			wrapT: "MIRRORED_REPEAT",
			magFilter: "NEAREST",
			minFilter: "NEAREST",
		});
		this.framebuffer = new TgdPainterFramebuffer(context, {
			textureColor0: this.textureDepth,
			depthBuffer: true,
			children: [
				new TgdPainterState(context, {
					children: [
						new TgdPainterClear(context, { color: [1, 1, 1, 1], depth: 1 }),
						...children,
					],
					depth: webglPresetDepth.less,
				}),
			],
		});
		this.textureColor = background.setParams({
			wrapS: "MIRRORED_REPEAT",
			wrapT: "MIRRORED_REPEAT",
			magFilter: "LINEAR",
			minFilter: "LINEAR",
		});
		this.program = new TgdProgram(context.gl, {
			vert: VERT,
			frag: FRAG,
		});
		const dataset = new TgdDataset({
			attPoint: "vec2",
			attUV: "vec2",
		});
		dataset.set("attPoint", new Float32Array([-1, +1, +1, +1, -1, -1, +1, -1]));
		dataset.set("attUV", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]));
		this.vao = new TgdVertexArray(context.gl, this.program, [dataset]);
	}

	delete(): void {
		const { vao, framebuffer, textureDepth: texture } = this;
		framebuffer.delete();
		texture.delete();
		vao.delete();
	}

	paint(time: number, delay: number): void {
		const { context, vao, program, textureDepth, textureColor, framebuffer } =
			this;
		const { gl, width, height } = context;

		if (width !== this.lastWidth || height !== this.lastHeight) {
			framebuffer.paint(time, delay);
			this.lastWidth = width;
			this.lastHeight = height;
		}

		program.use();
		const scale = this.getScale();
		program.uniform1f("uniScale", scale);
		textureColor.activate(0, program, "uniTexture");
		textureDepth.activate(1, program, "uniTextureDepth");
		vao.bind();
		TgdPainterState.do(
			{
				gl,
				cull: webglPresetCull.off,
				depth: webglPresetDepth.always,
				blend: webglPresetBlend.off,
			},
			() => gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4),
		);
		vao.unbind();
	}

	private getScale() {
		const { textureColor, context } = this;
		const { drawingBufferWidth: width, drawingBufferHeight: height } =
			context.gl;
		const ratioTexture = textureColor.width / textureColor.height;
		const ratioScreen = width / height;
		return ratioScreen / ratioTexture;
	}
}
