import { TgdDataset } from "@tgd/dataset/dataset"
import { type TgdFilter, TgdFilterVerbatim } from "@tgd/filter"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment } from "@tgd/shader/fragment"
import { TgdShaderVertex } from "@tgd/shader/vertex"
import { TgdTexture2D } from "@tgd/texture"
import { TgdVertexArray } from "@tgd/vao"
import { TgdContext } from "@tgd/context"
import { Framebuffers } from "./framebuffers"
import { TgdConsole } from "@tgd/debug"
export interface TgdPainterFilterOptions {
    filters?: TgdFilter[]
    texture?: TgdTexture2D
    z?: number
    name?: string
    flipY?: boolean
}

export class TgdPainterFilter extends TgdPainter {
    public z = 0
    public flipY: boolean

    private readonly programs: TgdProgram[]
    private readonly filters: TgdFilter[]
    private readonly vaos: TgdVertexArray[]
    private readonly framebuffers: Framebuffers

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterFilterOptions,
    ) {
        super()
        const { texture } = options
        if (!texture) {
            throw new Error(`[TgdPainterFilter] A texture must be given for "${this.name}"!`)
        }
        this.framebuffers = new Framebuffers(context, texture)
        this.z = options.z ?? 0.999999
        this.flipY = options.flipY ?? false
        const filters = [...(options.filters ?? [])]
        if (filters.length === 0) {
            filters.push(new TgdFilterVerbatim())
        }

        const programs = filters.map((filter) => {
            const vert = new TgdShaderVertex({
                attributes: {
                    attPoint: "vec2",
                    attUV: "vec2",
                },
                varying: {
                    varUV: "vec2",
                    varPixel: "vec2",
                },
                uniforms: {
                    uniZ: "float",
                    uniFlipY: "float",
                    uniTexture: "sampler2D",
                },
                mainCode: [
                    "varUV = attUV;",
                    "ivec2 size = textureSize(uniTexture, 0);",
                    "varPixel = vec2(1.0 / float(size.x), 1.0 / float(size.y));",
                    "gl_Position = vec4(",
                    ["attPoint * vec2(1.0, uniFlipY),", "uniZ,", "1.0"],
                    ");",
                ],
            }).code
            const frag = new TgdShaderFragment({
                uniforms: {
                    uniTexture: "sampler2D",
                    ...filter.uniforms,
                },
                varying: {
                    varUV: "vec2",
                    varPixel: "vec2",
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
        this.name = options.name ?? `Filter/${this.name}`
    }

    delete(): void {
        const { programs, vaos, framebuffers } = this
        framebuffers.delete()
        for (const prg of programs) prg.delete()
        for (const vao of vaos) vao.delete()
    }

    paint(time: number, delta: number): void {
        const out = new TgdConsole()
        const { framebuffers, filters } = this
        for (let index = 0; index < filters.length - 1; index++) {
            out.add(framebuffers.texture.name).add(" -> ").add(filters[index].name).nl()
            framebuffers.paint(() => this.paintOneFilter(index, time, delta))
        }
        out.add(framebuffers.texture.name)
            .add(" -> ")
            .add(filters[filters.length - 1].name)
            .nl()
        this.paintOneFilter(filters.length - 1, time, delta, (filters.length & 1) === (this.flipY ? 0 : 1) ? +1 : -1)
        out.debug()
        if (filters.length % 2 === 0) framebuffers.swap()
    }

    private readonly paintOneFilter = (filterIndex: number, time: number, delta: number, flip = +1) => {
        const { framebuffers } = this
        const textureInput = framebuffers.texture

        const filter = this.filters[filterIndex]
        const program = this.programs[filterIndex]
        const vao = this.vaos[filterIndex]
        const { context } = this
        const { gl } = context
        program.use()
        program.uniform1f("uniZ", this.z)
        program.uniform1f("uniFlipY", flip)
        filter.setUniforms({ context, program, time, delta })
        textureInput.activate(0, program, "uniTexture")
        vao.bind()
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
        vao.unbind()
    }
}

function createVAO(context: { gl: WebGL2RenderingContext }, program: TgdProgram) {
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
