import { TgdContext } from "@tgd/context"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdDataset } from "@tgd/dataset/dataset"
import { TgdVertexArray } from "@tgd/vao"

import { TgdFilter } from "@tgd/filter"
import { TgdShaderVertex } from "@tgd/shader/vertex"
import { TgdShaderFragment } from "@tgd/shader/fragment"
import { TgdTexture2D } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"

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
        if (filters.length === 0) {
            throw new Error(
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
            return new TgdProgram(context.gl, { vert, frag })
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
        const count = vaos.length + (options.flipY ? 1 : 0)
        this.vao = count % 2 === 0 ? vao : createVAO(context, this.program, -1)
        const framebuffer = context.gl.createFramebuffer()
        if (!framebuffer)
            throw new Error("Unable to create a WebGL Framebuffer!")

        this.framebuffer = framebuffer
        this.name = options.name ?? `Filter/${this.name}`
    }

    delete(): void {
        const { context, textures, vaos, vao, framebuffer } = this
        const { gl } = context
        for (const vao of vaos) vao.delete()
        vao.delete()
        gl.deleteFramebuffer(framebuffer)
        if (textures) {
            for (const tex of textures) gl.deleteTexture(tex)
        }
    }

    paint(time: number): void {
        const { vaos, texture, z, context } = this
        const { gl } = this.program
        let inputTexture = texture?.glTexture
        if (!inputTexture) {
            console.warn("[TgdPainterFilter] Input texture is undefined!")
            return
        }

        if (vaos.length > 0) {
            const { programs, filters, framebuffer } = this
            const currentFramebuffer = gl.getParameter(
                gl.FRAMEBUFFER_BINDING
            ) as null | WebGLFramebuffer
            const textures = this.getTextures(gl)
            let texIndex = 0
            let outputTexture = textures[texIndex]
            for (const [index, vao] of vaos.entries()) {
                gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
                gl.framebufferTexture2D(
                    gl.FRAMEBUFFER,
                    gl.COLOR_ATTACHMENT0,
                    gl.TEXTURE_2D,
                    outputTexture,
                    0
                )
                paintOneFilter(
                    time,
                    vao,
                    programs[index],
                    filters[index],
                    inputTexture,
                    z,
                    context
                )
                texIndex = 1 - texIndex
                inputTexture = outputTexture
                outputTexture = textures[texIndex]
            }
            gl.bindFramebuffer(gl.FRAMEBUFFER, currentFramebuffer)
        }
        paintOneFilter(
            time,
            this.vao,
            this.program,
            this.filter,
            inputTexture,
            z,
            context
        )
        gl.bindVertexArray(null)
    }

    private getTextures(
        gl: WebGL2RenderingContext
    ): [WebGLTexture, WebGLTexture] {
        const { width, height } = this.texture ?? { width: 64, height: 64 }
        if (
            this.textures &&
            this.texturesWith === width &&
            this.texturesHeight === height
        ) {
            return [...this.textures]
        }

        if (this.textures) {
            for (const tex of this.textures) gl.deleteTexture(tex)
        }
        this.texturesWith = width
        this.texturesHeight = height
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
                width,
                height,
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
    z: number,
    context: TgdContext
) {
    const { gl } = program
    program.use()
    program.uniform1f("uniZ", z)
    filter.setUniforms(program, time, context)
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
    const vao = new TgdVertexArray(context.gl, program, [dataset])
    if (!vao) throw new Error("Unable to create WebGL VAO!")
    return vao
}
