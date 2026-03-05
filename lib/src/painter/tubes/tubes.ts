import type { TgdBuffer, TgdBufferOptionTarget, TgdBufferOptionUsage } from "@tgd/buffer"
import type { TgdCamera } from "@tgd/camera"
import type { WebglParams } from "@tgd/context/webgl-params"
import { TgdDataset } from "@tgd/dataset"
import { type TgdMaterial, TgdMaterialFaceOrientation } from "@tgd/material"
import { TgdTransfo } from "@tgd/math"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import type { ArrayNumber2, ArrayNumber4 } from "@tgd/types"
import { TgdVertexArray } from "@tgd/vao"
import { TgdPainterTubesOptions } from "./types"

export class TgdPainterTubes extends TgdPainter {
    public readonly transfo = new TgdTransfo()
    public minRadius = 1
    public radiusMultiplier = 1
    public readonly material: TgdMaterial

    // private readonly vao: TgdVertexArray
    // private readonly prg: TgdProgram
    // private readonly vertexCount: number

    constructor(
        protected readonly context: {
            gl: WebGL2RenderingContext
            webglParams: WebglParams
            camera: TgdCamera
        },
        options: TgdPainterTubesOptions,
    ) {
        super()
        this.name = `TgdPainterTubes#${this.id}`
        this.radiusMultiplier = options.radiusMultiplier ?? 1
        const { roundness = 3, minRadius = 1 } = options
        const material = options.material ?? new TgdMaterialFaceOrientation()
        this.material = material
        this.minRadius = minRadius
        if (roundness > 127) {
            throw new Error("[TgdPainterSegments] Max roundness is 127!")
        }
        if (roundness < 2) {
            throw new Error("[TgdPainterSegments] Min roundness is 2!")
        }
    }

    getBuffer() {
        // return this.vao.getBuffer(1)
    }

    delete(): void {
        // this.vao.delete()
        // this.prg.delete()
    }

    paint(time: number, delta: number): void {
        // const { context, prg, vao, vertexCount, material } = this
        // const { gl, camera } = context
        // gl.disable(gl.DITHER)
        // prg.use()
        // this.material.setUniforms?.({ program: prg, context, time, delay })
        // prg.uniform1f(
        //     "uniMinRadius",
        //     (this.minRadius * 2) / gl.drawingBufferHeight
        // )
        // prg.uniform1f("uniRadiusMultiplier", this.radiusMultiplier)
        // prg.uniformMatrix4fv("uniTransfoMatrix", this.transfo.matrix)
        // prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        // prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        // material.applyState(this.context, () => {
        //     vao.bind()
        //     gl.drawElementsInstanced(
        //         gl.TRIANGLES,
        //         vertexCount,
        //         gl.UNSIGNED_SHORT,
        //         0,
        //         666
        //     )
        //     vao.unbind()
        // })
    }
}
