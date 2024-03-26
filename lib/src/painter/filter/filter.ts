import { TgdContext } from "@tgd/context"
import { TgdDataset } from "@tgd/dataset/dataset"
import { TgdFilter } from "@tgd/filter"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdShaderFragment } from "@tgd/shader/fragment"
import { TgdShaderVertex } from "@tgd/shader/vertex"
import { TgdProgram, TgdTexture2D } from "@tgd/types"
import { TgdVertexArray } from "@tgd/vao"

export interface TgdPainterFilterOptions {
    filters: TgdFilter[]
    texture: TgdTexture2D
    z?: number
}

export class TgdPainterFilter extends TgdPainter {
    public readonly texture: TgdTexture2D
    public z = 0

    private readonly programs: TgdProgram[]
    private readonly filters: TgdFilter[]
    private readonly program: TgdProgram
    private readonly filter: TgdFilter
    private readonly vao: TgdVertexArray
    private readonly framebuffer: WebGLFramebuffer | null
    private texture2: TgdTexture2D | null = null

    constructor(
        private readonly context: TgdContext,
        options: TgdPainterFilterOptions
    ) {
        super()
        this.z = options.z ?? 0.9999
        this.texture = options.texture
        this.filters = options.filters
        if (this.filters.length < 1) {
            throw Error(
                `[TgdPainterFilter] filters is expected to have at least one element!`
            )
        }

        this.programs = options.filters.map(filter => {
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
                varying: {
                    varUV: "vec2",
                },
                uniforms: {
                    uniWidth: "float",
                    uniHeight: "float",
                    uniInverseWidth: "float",
                    uniInverseHeight: "float",
                    texSource: "sampler2D",
                    ...filter.uniforms,
                },
                mainCode: filter.fragmentShaderCode,
            }).code
            return context.programs.create({ vert, frag })
        })
        this.filter = this.filters.pop() as TgdFilter
        this.program = this.programs.pop() as TgdProgram
        const dataset = new TgdDataset({
            attPoint: "vec2",
            attUV: "vec2",
        })
        dataset.set(
            "attPoint",
            new Float32Array([-1, +1, +1, +1, -1, -1, +1, -1])
        )
        dataset.set("attUV", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]))
        this.vao = context.createVAO(this.program, [dataset])
        // Creating Framebuffer if needed.
        if (this.filters.length > 0) {
            this.framebuffer = context.createFramebuffer()
        } else {
            this.framebuffer = null
        }
    }

    delete(): void {
        const { vao, framebuffer, context } = this
        vao.delete()
        if (framebuffer) {
            context.gl.deleteFramebuffer(framebuffer)
        }
    }

    paint(time: number): void {
        const { context, vao, program, filter, z } = this
        const { gl } = context
        const texture = this.paintFirstFilters(time)
        const w = context.width
        const h = context.height
        program.use()
        program.uniform1f("uniZ", z)
        program.uniform1f("uniWidth", w)
        program.uniform1f("uniInverseWidth", 1 / w)
        program.uniform1f("uniHeight", h)
        program.uniform1f("uniInverseHeight", 1 / h)
        filter.setUniforms(program, time)
        texture.activate(program, "uniTexture")
        vao.bind()
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }

    private paintFirstFilters(time: number): TgdTexture2D {
        const { framebuffer, texture } = this
        if (!framebuffer) return texture

        let output = this.getSecondTexture()
        if (!output) return texture

        const { context, programs, filters, z, vao } = this
        const { gl } = context
        const w = context.width
        const h = context.height
        let input = texture

        for (let i = 0; i < programs.length; i++) {
            const program = programs[i]
            const filter = filters[i]
            gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
            gl.framebufferTexture2D(
                gl.FRAMEBUFFER,
                gl.COLOR_ATTACHMENT0,
                gl.TEXTURE_2D,
                output.glTexture,
                0
            )
            program.use()
            program.uniform1f("uniZ", z)
            program.uniform1f("uniWidth", w)
            program.uniform1f("uniInverseWidth", 1 / w)
            program.uniform1f("uniHeight", h)
            program.uniform1f("uniInverseHeight", 1 / h)
            filter.setUniforms(program, time)
            input.activate(program, "uniTexture")
            vao.bind()
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
            // Swap textures.
            const tmp = input
            input = output
            output = tmp
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
        return input
    }

    private getSecondTexture() {
        const { context, texture, texture2 } = this

        const width = texture.width
        const height = texture.height
        if (height <= 0 || width <= 0) return null

        if (
            texture2 &&
            texture2.width === width &&
            texture2.height === height
        ) {
            return texture2
        }

        if (texture2) {
            context.textures2D.delete(texture2)
        }
        this.texture2 = this.context.textures2D.create({
            width,
            height,
            internalFormat: "RGB",
            generateMipMap: true,
        })
        return this.texture2
    }
}
