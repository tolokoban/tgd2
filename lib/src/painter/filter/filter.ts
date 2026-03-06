import type { WebglParams } from "@tgd/context/webgl-params"
import { TgdDataset } from "@tgd/dataset/dataset"
import { type TgdFilter, TgdFilterVerbatim } from "@tgd/filter"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment } from "@tgd/shader/fragment"
import { TgdShaderVertex } from "@tgd/shader/vertex"
import { TgdTexture2D } from "@tgd/texture"
import { TgdVertexArray } from "@tgd/vao"
import { TgdPainterFramebuffer } from "../framebuffer"
import { TgdPainterLogic } from "../logic"
import { TgdContext } from "@tgd/context"

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
    private readonly framebuffer: TgdPainterFramebuffer
    private textureInput: TgdTexture2D | undefined = undefined
    private textureOutput: TgdTexture2D | undefined = undefined
    private textureToDelete: TgdTexture2D | undefined = undefined
    private filterIndex = 0

    constructor(
        private readonly context: TgdContext,
        options: TgdPainterFilterOptions,
    ) {
        super()
        this.z = options.z ?? 0.999999
        this.texture = options.texture
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
                    uniSize: "vec2",
                    uniPixel: "vec2",
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

        this.textureInput = options.texture
        const textureOutput = new TgdTexture2D(context, {
            params: {
                minFilter: "LINEAR",
                magFilter: "LINEAR",
            },
        })
        this.textureToDelete = textureOutput
        this.framebuffer = new TgdPainterFramebuffer(context, {
            textureColor0: textureOutput,
            viewportMatchingScale: 1,
            children: [new TgdPainterLogic(this.paintOneFilter)],
        })
        this.name = options.name ?? `Filter/${this.name}`
    }

    delete(): void {
        const { programs, vaos, framebuffer, textureToDelete } = this
        textureToDelete?.delete()
        framebuffer.delete()
        for (const prg of programs) prg.delete()
        for (const vao of vaos) vao.delete()
    }

    paint(time: number, delta: number): void {
        const { texture } = this
        if (!texture) {
            console.warn("[TgdPainterFilter] Input texture is undefined!")
            return
        }
        console.log("=".repeat(40))
        const { filters, framebuffer } = this
        this.textureInput = texture
        this.textureOutput = this.textureToDelete
        for (let index = 0; index < filters.length - 1; index++) {
            this.filterIndex = index
            framebuffer.textureColor0 = this.textureOutput
            framebuffer.paint(time, delta)
            // Swap textures.
            const temp = this.textureInput
            this.textureInput = this.textureOutput
            this.textureOutput = temp
        }
        this.filterIndex = filters.length - 1
        this.paintOneFilter(time, delta, (filters.length & 1) === (this.flipY ? 0 : 1) ? +1 : -1)
        console.log("-".repeat(40))
    }

    private readonly paintOneFilter = (time: number, delta: number, flip = +1) => {
        const index = this.filterIndex
        const { textureInput } = this
        if (!textureInput) return

        const filter = this.filters[index]
        console.log("paintOnFilter:", filter.name, flip)
        const program = this.programs[index]
        const vao = this.vaos[index]
        const { context } = this
        const { gl } = context
        const { width, height } = textureInput
        program.use()
        program.uniform1f("uniZ", this.z)
        program.uniform1f("uniFlipY", flip)
        program.uniform2f("uniSize", width, height)
        program.uniform2f("uniPixel", 1 / width, 1 / height)
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
