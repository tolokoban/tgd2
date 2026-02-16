import { TgdDataset } from "@tgd/dataset/dataset"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment } from "@tgd/shader/fragment"
import { TgdShaderVertex } from "@tgd/shader/vertex"
import type { TgdTexture2D } from "@tgd/texture"
import { TgdVertexArray } from "@tgd/vao"

export interface TgdPainterMixOptions {
	texture1: TgdTexture2D
	texture2: TgdTexture2D
	strength: number
	z: number
	flipY: boolean
	name: string
}

export class TgdPainterMix extends TgdPainter {
	public texture1: TgdTexture2D | undefined
	public texture2: TgdTexture2D | undefined
	public strength: number
	public z: number

	private readonly program: TgdProgram
	private readonly vao: TgdVertexArray

	constructor(
		private readonly context: { gl: WebGL2RenderingContext },
		options: Partial<TgdPainterMixOptions> = {},
	) {
		super()
		this.texture1 = options.texture1
		this.texture2 = options.texture2
		this.strength = options.strength ?? 0.5
		this.z = options.z ?? 0.999999

		const vert = new TgdShaderVertex({
			attributes: {
				attPoint: "vec2",
				attUV: "vec2",
			},
			varying: {
				varUV: "vec2",
			},
			uniforms: {
				uniZ: "float",
			},
			mainCode: [
				"varUV = attUV;",
				"gl_Position = vec4(",
				["attPoint,", "uniZ,", "1.0"],
				");",
			],
		}).code
		const frag = new TgdShaderFragment({
			uniforms: {
				uniStrength: "float",
				uniTexture1: "sampler2D",
				uniTexture2: "sampler2D",
			},
			varying: {
				varUV: "vec2",
			},
			mainCode: [
				"vec4 color1 = texture(uniTexture1, varUV);",
				"vec4 color2 = texture(uniTexture2, varUV);",
				"vec4 color = vec4(color1.rgb + color2.rgb * uniStrength, color1.a + color2.a);",
				"FragColor = color;",
			],
		}).code
		const program = new TgdProgram(context.gl, { vert, frag })
		const vao = createVAO(context, program, options.flipY ? -1 : +1)
		this.program = program
		this.vao = vao
		this.name = options.name ?? `Mix/${this.name}`
	}

	delete(): void {
		this.program.delete()
		this.vao.delete()
	}

	paint(_time: number, _delay: number): void {
		const { program, vao, context, texture1, texture2, strength } = this
		const { gl } = context
		program.use()
		program.uniform1f("uniZ", this.z)
		program.uniform1f("uniStrength", strength)
		texture1?.activate(0, program, "uniTexture1")
		texture2?.activate(1, program, "uniTexture2")
		vao.bind()
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
		vao.unbind()
	}
}

function createVAO(
	context: { gl: WebGL2RenderingContext },
	program: TgdProgram,
	flipY = +1,
) {
	const dataset = new TgdDataset({
		attPoint: "vec2",
		attUV: "vec2",
	})
	dataset.set(
		"attPoint",
		new Float32Array([-1, -flipY, +1, -flipY, -1, +flipY, +1, +flipY]),
	)
	dataset.set("attUV", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]))
	const vao = new TgdVertexArray(context.gl, program, [dataset])
	if (!vao) throw new Error("Unable to create WebGL VAO!")
	return vao
}
