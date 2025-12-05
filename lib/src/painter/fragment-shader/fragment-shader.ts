import { TgdContext } from "@tgd/context"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdDataset } from "@tgd/dataset/dataset"
import { TgdVertexArray } from "@tgd/vao"

import { TgdShaderVertex } from "@tgd/shader/vertex"
import { TgdShaderFragment } from "@tgd/shader/fragment"
import { TgdProgram } from "@tgd/program"

export interface TgdPainterFragmentShaderOptions {
    /**
     * The fragment shader have access to these uniforms and varyings:
     *
     * ```glsl
     * uniform float uniAspectRatio;        // Screen W/H
     * uniform float uniAspectRatioInverse; // Screen H/W
     * uniform float uniTime;               // Time in seconds.
     * in vec2 varUV;
     * in vec2 varPoint;
     * ```
     */
    shader: TgdShaderFragment
    flipY?: boolean
    name?: string
    /**
     * If this function is defined, it will be called at each frame.
     * Most of the time, it is used tu update the uniforms.
     */
    setUniforms?(options: {
        context: TgdContext
        program: TgdProgram
        time: number
        delay: number
    }): void
}

export class TgdPainterFragmentShader extends TgdPainter {
    private readonly program: TgdProgram
    private readonly vao: TgdVertexArray

    constructor(
        private readonly context: TgdContext,
        private readonly options: TgdPainterFragmentShaderOptions
    ) {
        super()
        this.name = options.name ?? `TgdPainterFragmentShader/${this.name}`
        const vert = new TgdShaderVertex({
            attributes: {
                attPoint: "vec2",
                attUV: "vec2",
                uniZ: "float",
            },
            varying: {
                varPoint: "vec2",
                varUV: "vec2",
            },
            mainCode: [
                "varUV = attUV;",
                "gl_Position = vec4(",
                ["attPoint,", "uniZ,", "1.0"],
                ");",
            ],
        }).code
        const { shader } = options
        shader.varying.varUV = "vec2"
        shader.varying.varPoint = "vec2"
        shader.uniforms.uniTime = "float"
        shader.uniforms.uniAspectRatio = "float"
        shader.uniforms.uniAspectRatioInverse = "float"
        const frag = shader.code
        const prg = new TgdProgram(context.gl, { vert, frag })
        const vao = createVAO(context, prg, options.flipY ? -1 : +1)
        this.program = prg
        this.vao = vao
    }

    delete(): void {
        const { vao, program } = this
        vao.delete()
        program.delete()
    }

    paint(time: number, delay: number): void {
        const { vao, program, context, options } = this
        const { gl } = context
        program.use()
        program.uniform1f("uniTime", time)
        program.uniform1f("uniAspectRatio", context.aspectRatio)
        program.uniform1f("uniAspectRatioInverse", context.aspectRatioInverse)
        options.setUniforms?.({ context, program, time, delay })
        vao.bind()
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
        vao.unbind()
    }
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
