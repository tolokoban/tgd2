import { TgdContext } from "@tgd/context"
import { TgdProgram } from "@tgd/program"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdDataset } from "@tgd/dataset"
import { TgdVertexArray } from "@tgd/vao"
import { TgdVec3, TgdVec4 } from "@tgd/math"

import VERT from "./axes.vert"
import FRAG from "./axes.frag"
import { ArrayNumber3 } from "@tgd/types"

export type TgdPainterAxesOptions = {
    x: number
    y: number
    z: number
    scale: number
}

export class TgdPainterAxes extends TgdPainter {
    private readonly vao: TgdVertexArray
    private readonly prg: TgdProgram
    private readonly dataset: TgdDataset
    private readonly translateAndScale: TgdVec4

    constructor(
        public readonly context: TgdContext,
        { x = 0, y = 0, z = 0, scale = 1 }: Partial<TgdPainterAxesOptions> = {}
    ) {
        super()
        const prg = new TgdProgram(context.gl, {
            vert: VERT,
            frag: FRAG,
        })
        this.prg = prg
        const dataset = new TgdDataset({
            attPos: "vec3",
            attColor: "vec4",
        })
        this.dataset = dataset
        // prettier-ignore
        dataset.set("attPos", new Float32Array([
            0, 0, 0, +1, +0, +0,
            0, 0, 0, +0, +1, +0,
            0, 0, 0, +0, +0, +1,
            0, 0, 0, -1, -0, -0,
            0, 0, 0, -0, -1, -0,
            0, 0, 0, -0, -0, -1,
        ]))
        const a = 1
        const b = 0.25
        // prettier-ignore
        dataset.set("attColor", new Float32Array([
            a, 0, 0, 1, a, 0, 0, 1,
            0, a, 0, 1, 0, a, 0, 1,
            0, 0, a, 1, 0, 0, a, 1,
            b, 0, 0, 1, b, 0, 0, 1,
            0, b, 0, 1, 0, b, 0, 1,
            0, 0, b, 1, 0, 0, b, 1,
        ]))
        this.vao = new TgdVertexArray(context.gl, prg, [dataset])
        this.translateAndScale = new TgdVec4(x, y, z, scale)
    }

    updateAxes(
        [Xx, Xy, Xz]: TgdVec3 | ArrayNumber3,
        [Yx, Yy, Yz]: TgdVec3 | ArrayNumber3,
        [Zx, Zy, Zz]: TgdVec3 | ArrayNumber3
    ) {
        // prettier-ignore
        this.dataset.set("attPos", new Float32Array([
            0, 0, 0, +Xx, +Xy, +Xz,
            0, 0, 0, +Yx, +Yy, +Yz,
            0, 0, 0, +Zx, +Zy, +Zz,
            0, 0, 0, -Xx, -Xy, -Xz,
            0, 0, 0, -Yx, -Yy, -Yz,
            0, 0, 0, -Zx, -Zy, -Zz,
        ]))
        this.vao.updateDataset(this.dataset)
    }

    get x(): number {
        return this.translateAndScale.x
    }
    set x(v: number) {
        this.translateAndScale.x = v
    }

    get y(): number {
        return this.translateAndScale.y
    }
    set y(v: number) {
        this.translateAndScale.y = v
    }

    get z(): number {
        return this.translateAndScale.z
    }
    set z(v: number) {
        this.translateAndScale.z = v
    }

    get scale(): number {
        return this.translateAndScale.w
    }
    set scale(v: number) {
        this.translateAndScale.w = v
    }

    delete(): void {
        this.vao.delete()
    }

    paint(): void {
        const { context, prg, vao, translateAndScale } = this
        const { gl, camera } = context
        prg.use()
        prg.uniform4fv("uniTS", translateAndScale)
        prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        vao.bind()
        gl.drawArrays(gl.LINES, 0, 12)
    }
}
