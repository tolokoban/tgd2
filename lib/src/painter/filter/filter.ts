import { TgdProgram, TgdTexture2D } from "@tgd/types"
import { TgdContext } from "@tgd/context"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdDataset } from "@tgd/dataset/dataset"
import { TgdVertexArray } from "@tgd/vao"

import { TgdFilter } from "@tgd/filter"
import { TgdShaderVertex } from "@tgd/shader/vertex"
import { TgdShaderFragment } from "@tgd/shader/fragment"

export interface TgdPainterFilterOptions {
    filters: TgdFilter[]
    texture: TgdTexture2D
    z?: number
    name?: string
    flipY?: boolean
}

export class TgdPainterFilter extends TgdPainter {
    public texture: TgdTexture2D
    public z = 0

    private readonly program: TgdProgram
    private readonly filter: TgdFilter
    private readonly vao: TgdVertexArray
    private readonly programs: TgdProgram[]
    private readonly filters: TgdFilter[]
    private readonly vaos: TgdVertexArray[]
    private readonly framebuffer: WebGLFramebuffer
    private textures: [WebGLTexture, WebGLTexture] | null = null
    private texturesWith = -1
    private texturesHeight = -1

    constructor(
        private readonly context: TgdContext,
        options: TgdPainterFilterOptions
    ) {
        super()
        this.z = options.z ?? 0.999999
        this.texture = options.texture
        const filters = options.filters
        if (filters.length < 1) {
            throw Error(
                `[TgdPainterFilter] filters is expected to have at least one element!`
            )
        }

        const programs = options.filters.map(filter => {
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
            return context.programs.create({ vert, frag })
        })
        const vaos = programs.map(program =>
            createVAO(context, program, options.flipY ? -1 : +1)
        )
        this.program = programs.pop() as TgdProgram
        this.programs = programs
        this.filter = filters.pop() as TgdFilter
        this.filters = filters
        const vao = vaos.pop() as TgdVertexArray
        this.vaos = vaos
        this.vao =
            vaos.length % 2 === 0
                ? vao
                : createVAO(context, this.program, options.flipY ? +1 : -1)
        const framebuffer = context.gl.createFramebuffer()
        if (!framebuffer) throw Error("Unable to create a WebGL Framebuffer!")

        this.framebuffer = framebuffer
        this.name = options.name ?? `Filter/${this.name}`
    }

    delete(): void {
        const { context, textures, vaos, vao, framebuffer } = this
        const { gl } = context
        vaos.forEach(vao => vao.delete())
        vao.delete()
        gl.deleteFramebuffer(framebuffer)
        if (textures) {
            textures.forEach(tex => gl.deleteTexture(tex))
        }
    }

    paint(time: number): void {
        const { vaos, texture, z } = this
        const { gl } = this.program
        let input = texture.glTexture
        if (vaos.length > 0) {
            const { programs, filters, framebuffer } = this
            const currentFramebuffer = gl.getParameter(
                gl.FRAMEBUFFER_BINDING
            ) as null | WebGLFramebuffer
            const textures = this.getTextures(gl)
            let texIndex = 0
            let output = textures[texIndex]
            for (let i = 0; i < vaos.length; i++) {
                gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
                gl.framebufferTexture2D(
                    gl.FRAMEBUFFER,
                    gl.COLOR_ATTACHMENT0,
                    gl.TEXTURE_2D,
                    output,
                    0
                )
                paintOneFilter(time, vaos[i], programs[i], filters[i], input, z)
                texIndex = 1 - texIndex
                input = output
                output = textures[texIndex]
            }
            gl.bindFramebuffer(gl.FRAMEBUFFER, currentFramebuffer)
        }
        paintOneFilter(time, this.vao, this.program, this.filter, input, z)
        gl.bindVertexArray(null)
    }

    private getTextures(
        gl: WebGL2RenderingContext
    ): [WebGLTexture, WebGLTexture] {
        const tex = this.texture
        if (
            this.textures &&
            this.texturesWith === tex.width &&
            this.texturesHeight === tex.height
        ) {
            return [...this.textures]
        }

        if (this.textures) this.textures.forEach(tex => gl.deleteTexture(tex))
        this.texturesWith = tex.width
        this.texturesHeight = tex.height
        this.textures = [0, 1].map(() => {
            const texture = gl.createTexture()
            gl.bindTexture(gl.TEXTURE_2D, texture)

            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

            gl.texImage2D(
                gl.TEXTURE_2D,
                0,
                gl.RGBA,
                tex.width,
                tex.height,
                0,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                null
            )
            return texture
        }) as [WebGLTexture, WebGLTexture]
        return this.textures
    }
}

function paintOneFilter(
    time: number,
    vao: TgdVertexArray,
    program: TgdProgram,
    filter: TgdFilter,
    texture: WebGLTexture,
    z: number
) {
    const { gl } = program
    program.use()
    program.uniform1f("uniZ", z)
    filter.setUniforms(program, time)
    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, texture)
    program.uniform1i("uniTexture", 0)
    vao.bind()
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
}

function createVAO(context: TgdContext, program: TgdProgram, flipY = +1) {
    const dataset = new TgdDataset({
        attPoint: "vec2",
        attUV: "vec2",
    })
    // prettier-ignore
    dataset.set(
        "attPoint",
        new Float32Array([
            -1, +1 * flipY, 
            +1, +1 * flipY, 
            -1, -1 * flipY, 
            +1, -1 * flipY,
        ])
    )
    dataset.set("attUV", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]))
    const vao = context.createVAO(program, [dataset])
    if (!vao) throw Error("Unable to create WebGL VAO!")
    return vao
}
