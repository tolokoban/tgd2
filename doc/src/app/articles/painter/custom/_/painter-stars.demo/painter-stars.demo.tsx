import {
    TgdPainter,
    TgdContext,
    TgdProgram,
    TgdDataset,
    TgdVertexArray,
    TgdPainterClear,
    tgdLoadArrayBuffer,
    TgdControllerCameraOrbit,
    TgdCameraPerspective,
    TgdPainterState,
    webglPresetBlend,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"
import { PainterNames } from "./painter-names"

import dataURL from "../stars.dat"
import vert from "./painter-stars.vert"
import frag from "./painter-stars.frag"

// #begin
function init(ctx: TgdContext): TgdContext {
    new TgdControllerCameraOrbit(ctx, {
        inertiaOrbit: 1000,
    })
    ctx.add(new TgdPainterClear(ctx, { color: [0, 0, 0, 1] }))
    ctx.paint()
    tgdLoadArrayBuffer(dataURL).then(buff => {
        if (!buff) return

        const data = new Float32Array(buff)
        const painter = new PainterStars(ctx, data)
        ctx.add(
            new TgdPainterState(ctx, {
                blend: webglPresetBlend.alpha,
                children: [new PainterNames(ctx), painter],
            })
        )
        ctx.paint()
    })
    return ctx
}
// #end

export default function Demo() {
    return <View onReady={init} />
}

export class PainterStars extends TgdPainter {
    // Number of stars
    private readonly count: number
    private readonly prg: TgdProgram
    private readonly vao: TgdVertexArray

    private readonly fixedCamera = new TgdCameraPerspective({
        distance: 0,
        near: 0.1,
        far: 2.0,
        target: [0, 0, 0],
        fovy: Math.PI / 3,
    })

    /**
     *
     * @param data A sequence of 4 floats: longitude, latitude, brightness and color.
     */
    constructor(private readonly context: TgdContext, data: Float32Array) {
        super()
        this.count = data.length >> 2
        this.prg = context.programs.create(
            {
                vert,
                frag,
            },
            "PainterStars"
        )
        const dataset = new TgdDataset({
            attStar: "vec4",
        })
        dataset.set("attStar", data)
        this.vao = context.createVAO(this.prg, [dataset])
    }

    paint() {
        const { context, prg, vao, fixedCamera } = this
        const { camera, gl } = context
        fixedCamera.orientation = camera.orientation
        prg.use()
        prg.uniformMatrix4fv("uniModelViewMatrix", fixedCamera.matrixModelView)
        prg.uniformMatrix4fv(
            "uniProjectionMatrix",
            fixedCamera.matrixProjection
        )
        prg.uniform1f(
            "uniVegaSizeInPixels",
            Math.max(context.width, context.height) * 0.05
        )
        vao.bind()
        gl.drawArrays(gl.POINTS, 0, this.count)
    }

    delete() {
        this.context.programs.delete(this.prg)
        this.vao.delete()
    }
}
