import {
    TgdCameraPerspective,
    TgdContext,
    TgdDataset,
    TgdPainter,
    TgdProgram,
    TgdTexture2D,
    TgdVertexArray,
} from "@tolokoban/tgd"
import { assertType } from "@tolokoban/type-guards"

import names from "../names.json"
import vert from "./painter-names.vert"
import frag from "./painter-names.frag"

export class PainterNames extends TgdPainter {
    private readonly prg: TgdProgram
    private readonly vao: TgdVertexArray
    private readonly texture: TgdTexture2D
    private readonly count: number

    private readonly fixedCamera = new TgdCameraPerspective({
        distance: 0,
        near: 0.1,
        far: 2.0,
        target: [0, 0, 0],
        fovy: Math.PI / 2.5,
    })

    constructor(private readonly context: TgdContext) {
        super()
        const { canvas, attLatLng, attUV } = makeCanvasForNames()
        this.count = attLatLng.length >> 1
        this.texture = context.textures2D.create({
            image: canvas,
            generateMipMap: true,
            magFilter: "LINEAR",
            minFilter: "LINEAR_MIPMAP_LINEAR",
        })
        const dsObject = new TgdDataset({
            attCorner: "vec2",
        })
        dsObject.set("attCorner", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]))
        const dsInstance = new TgdDataset(
            {
                attLatLng: "vec2",
                attUV: "vec3",
            },
            { divisor: 1 }
        )
        dsInstance.set("attLatLng", new Float32Array(attLatLng))
        dsInstance.set("attUV", new Float32Array(attUV))
        const prg = context.programs.create({ vert, frag })
        const vao = context.createVAO(prg, [dsObject, dsInstance])
        this.prg = prg
        this.vao = vao
    }

    delete(): void {
        this.vao.delete()
        this.context.programs.delete(this.prg)
        this.context.textures2D.delete(this.texture)
    }

    paint(): void {
        const { context, prg, vao, texture, fixedCamera } = this
        const { camera, gl } = context
        fixedCamera.orientation = camera.orientation
        prg.use()
        prg.uniform1f("uniAspect", context.width / context.height)
        prg.uniform1f("uniAspectInverse", context.height / context.width)
        prg.uniformMatrix4fv("uniModelViewMatrix", fixedCamera.matrixModelView)
        prg.uniformMatrix4fv(
            "uniProjectionMatrix",
            fixedCamera.matrixProjection
        )
        texture.activate(prg, "uniTexture")
        vao.bind()
        gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, this.count)
    }
}

function makeCanvasForNames(): {
    canvas: HTMLCanvasElement
    attLatLng: number[]
    attUV: number[]
} {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) throw Error("Unable to get Context 2D!")

    assertType<Record<string, [number, number]>>(names, [
        "map",
        ["array(2)", "number"],
    ])
    const attLatLng: number[] = []
    const attUV: number[] = []
    const w = 2048
    const h = 1024
    const space = 8
    canvas.width = w
    canvas.height = h
    ctx.clearRect(0, 0, w, h)
    ctx.font = "30px sans-serif"
    ctx.textBaseline = "middle"
    ctx.fillStyle = "#0f0"
    let x = 1
    let y = 16
    for (const name of Object.keys(names)) {
        const measure = ctx.measureText(name)
        if (x + measure.width > w - space) {
            x = 1
            y += 32
        }
        const coords = names[name]
        if (!coords) continue

        attLatLng.push(...coords)
        attUV.push(x / w, (y - 16) / h, (measure.width + space / 2) / w)
        ctx.fillText(name, x, y)
        x += measure.width + space
    }
    return { canvas, attLatLng, attUV }
}
