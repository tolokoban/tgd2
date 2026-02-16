import { TgdDataset } from "@tgd/dataset/dataset"
import type { TgdFilter } from "@tgd/filter"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment } from "@tgd/shader/fragment"
import { TgdShaderVertex } from "@tgd/shader/vertex"
import { TgdTexture2D } from "@tgd/texture"
import { TgdVertexArray } from "@tgd/vao"
import { TgdPainterFramebuffer } from "../framebuffer"
import { TgdPainterLogic } from "../logic"

export interface TgdPainterFilterOptions {
	filters: TgdFilter[]
	texture?: TgdTexture2D
	z?: number
	name?: string
	flipY?: boolean
}

export class TgdPainterFilter extends TgdPainter {
	public texture?: TgdTexture2D
	public z = 0
	public flipY: boolean

	private readonly programs: TgdProgram[]
	private readonly filters: TgdFilter[]
	private readonly vaos: TgdVertexArray[]
	private readonly framebuffers: [TgdPainterFramebuffer, TgdPainterFramebuffer]
	private readonly textures: [TgdTexture2D, TgdTexture2D]
	private inputTexture: TgdTexture2D | undefined = undefined
	private texturesWith = -1
	private texturesHeight = -1
	private filterIndex = 0

	constructor(
		private readonly context: { gl: WebGL2RenderingContext },
		options: TgdPainterFilterOptions,
	) {
		super()
		this.z = options.z ?? 0.999999
		this.texture = options.texture
		this.flipY = options.flipY ?? false
		const filters = options.filters ?? []
		if (filters.length === 0) {
			throw new Error(
				"[TgdPainterFilter] filters is expected to have at least one element!",
			)
		}

		const programs = filters.map((filter) => {
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
					uniFlipY: "float",
				},
				mainCode: [
					"varUV = attUV;",
					"gl_Position = vec4(",
					["attPoint * vec2(1.0, uniFlipY),", "uniZ,", "1.0"],
					");",
				],
			}).code
			const frag = new TgdShaderFragment({
				uniforms: {
					uniWidth: "float",
					uniHeight: "float",
					uniTexture: "sampler2D",
					...filter.uniforms,
				},
				varying: {
					varUV: "vec2",
				},
				mainCode: filter.fragmentShaderCode,
				functions: filter.extraFunctions,
			}).code
			return new TgdProgram(context.gl, { vert, frag })
		})
		const vaos = programs.map((program) => createVAO(context, program))
		this.programs = programs
		this.filters = filters
		this.vaos = vaos
		const framebuffer = context.gl.createFramebuffer()
		if (!framebuffer) throw new Error("Unable to create a WebGL Framebuffer!")

		this.textures = [0, 1].map(
			() =>
				new TgdTexture2D(context, {
					params: {
						minFilter: "LINEAR",
						magFilter: "LINEAR",
					},
				}),
		) as [TgdTexture2D, TgdTexture2D]
		this.framebuffers = this.textures.map((textureColor0) => {
			const fb = new TgdPainterFramebuffer(context, {
				textureColor0,
				viewportMatchingScale: 1,
				children: [new TgdPainterLogic(this.paintOneFilter)],
			})
			return fb
		}) as [TgdPainterFramebuffer, TgdPainterFramebuffer]
		this.name = options.name ?? `Filter/${this.name}`
	}

	delete(): void {
		const { textures, programs, vaos, framebuffers } = this
		for (const vao of vaos) vao.delete()
		for (const fb of framebuffers) fb.delete()
		if (textures) {
			for (const tex of textures) tex.delete()
		}
		for (const prg of programs) prg.delete()
	}

	paint(time: number, delay: number): void {
		let inputTexture = this.texture
		if (!inputTexture) {
			console.warn("[TgdPainterFilter] Input texture is undefined!")
			return
		}

		const { filters, framebuffers } = this
		let [curFB, nxtFB] = framebuffers
		if (filters.length > 0) {
			for (let index = 0; index < filters.length - 1; index++) {
				this.filterIndex = index
				this.inputTexture = inputTexture
				curFB.size = inputTexture
				curFB.paint(time, delay)
				inputTexture = curFB.textureColor0
				const tmpFB = curFB
				curFB = nxtFB
				nxtFB = tmpFB
			}
		}
		this.filterIndex = filters.length - 1
		this.inputTexture = inputTexture
		this.paintOneFilter(
			time,
			delay,
			(filters.length & 1) === (this.flipY ? 0 : 1) ? +1 : -1,
		)
	}

	private readonly paintOneFilter = (
		time: number,
		delay: number,
		flip = +1,
	) => {
		const index = this.filterIndex
		const inputTexture = this.inputTexture
		if (!inputTexture) return

		const filter = this.filters[index]
		const program = this.programs[index]
		const vao = this.vaos[index]
		const { context } = this
		const { gl } = context
		program.use()
		program.uniform1f("uniZ", this.z)
		program.uniform1f("uniFlipY", flip)
		filter.setUniforms({ context, program, time, delay })
		inputTexture.activate(0, program, "uniTexture")
		vao.bind()
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
		vao.unbind()
	}
}

function createVAO(
	context: { gl: WebGL2RenderingContext },
	program: TgdProgram,
) {
	const dataset = new TgdDataset({
		attPoint: "vec2",
		attUV: "vec2",
	})
	// prettier-ignore
	dataset.set("attPoint", new Float32Array([-1, +1, +1, +1, -1, -1, +1, -1]))
	dataset.set("attUV", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]))
	const vao = new TgdVertexArray(context.gl, program, [dataset])
	if (!vao) throw new Error("Unable to create WebGL VAO!")
	return vao
}
