import { TgdAtlasGrid, TgdScene, TgdPainter, TgdAttributes } from "../../../src"
import VERT from "./isometric.vert"
import FRAG from "./isometric.frag"
import Resources from "../../scene/resources"

export interface TgdTypePainterBackgroundOptions {
    image: HTMLImageElement | HTMLCanvasElement
    atlas: TgdAtlasGrid
    cells?: [name: string, x: number, y: number, z?: number][]
}

type IsometricCell = [
    x: number,
    y: number,
    z: number,
    u: number,
    v: number,
    width: number,
    height: number
]

let globalId = 0

export class TgdPainterIsometric implements TgdPainter {
    private readonly id = `${globalId++}`
    private readonly atlas: TgdAtlasGrid
    private readonly cells = new Map<string, IsometricCell>()
    private readonly texture: WebGLTexture
    private readonly program: WebGLProgram
    private readonly bufferVert: WebGLBuffer
    private readonly bufferInst: WebGLBuffer
    private readonly res: Resources
    private readonly vao: WebGLVertexArrayObject
    private readonly uniTexture: WebGLUniformLocation
    private readonly uniCenter: WebGLUniformLocation
    private readonly uniScale: WebGLUniformLocation
    private cellsCount = 0
    private dirty = true

    public zoom = 1
    public centerX = 0
    public centerY = 0
    public centerZ = 0

    constructor(
        private readonly scene: TgdScene,
        options: TgdTypePainterBackgroundOptions
    ) {
        const { gl } = scene
        this.atlas = options.atlas
        for (const [name, x, y, z] of options.cells ?? []) {
            this.addCell(name, x, y, z)
        }
        const res = scene.getResources("TgdPainterIsometric")
        this.res = res
        const tex = res.createTexture(this.id)
        this.texture = tex
        scene.texture.bindTexture2D(tex, {
            image: options.image,
            placeholder: [1, 0.7, 0, 1],
        })
        this.program = res.createProgram({
            vert: VERT,
            frag: FRAG,
        })
        this.uniTexture = scene.getUniformLocation(this.program, "uniTexture")
        this.uniCenter = scene.getUniformLocation(this.program, "uniCenter")
        this.uniScale = scene.getUniformLocation(this.program, "uniScale")
        this.bufferVert = res.createBuffer("vert")
        const attribsVert = new TgdAttributes({
            attCorner: 2,
            attUV: 2,
        })
        attribsVert.set(
            "attCorner",
            new Float32Array([-0.5, -0.5, +0.5, -0.5, -0.5, +0.5, +0.5, +0.5])
        )
        attribsVert.set("attUV", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]))
        attribsVert.update(gl, this.bufferVert, 4, false)
        this.bufferInst = res.createBuffer("inst")
        const attribsInst = new TgdAttributes(
            {
                attPos: 3,
                attCell: 4,
            },
            1
        )
        this.vao = res.createVertexArray()
        gl.bindVertexArray(this.vao)
        attribsVert.define(gl, this.program, this.bufferVert)
        attribsInst.define(gl, this.program, this.bufferInst)
        gl.bindVertexArray(null)
    }

    addCell(name: string, x: number, y: number, z = 0) {
        const { atlas } = this
        const uv = atlas.getUV(name)
        if (!uv) throw Error(`Unknown cell in TgdPainterIsometric: "${name}"!`)

        const key = makeKey(x, y, z)
        this.cells.set(key, [x, y, z, uv.u, uv.v, uv.w, uv.h])
        this.dirty = true
    }

    removeCell(x: number, y: number, z = 0) {
        const key = makeKey(x, y, z)
        if (!this.cells.has(key)) return

        this.cells.delete(key)
        this.dirty = true
    }

    hasCell(x: number, y: number, z = 0) {
        const key = makeKey(x, y, z)
        return this.cells.has(key)
    }

    destroy(): void {
        const { res } = this
        res.deleteBuffer("vert")
        res.deleteBuffer("frag")
        res.deteleTexture(this.id)
        res.deleteProgram()
        res.deleteVertexArray()
    }

    paint(time: number, delay: number): void {
        const { gl } = this.scene
        const { vao, program, texture, zoom } = this
        gl.useProgram(program)
        const { width, height } = this.scene
        const scaleX = width > height ? height / width : 1
        const scaleY = height > width ? width / height : 1
        gl.uniform3f(this.uniScale, scaleX * zoom, scaleY * zoom, 1)
        gl.uniform3f(this.uniCenter, this.centerX, this.centerY, this.centerZ)
        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.uniform1i(this.uniTexture, 0)
        gl.bindVertexArray(vao)
        gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, this.cellsCount)
    }

    update(time: number, delay: number): void {
        if (!this.dirty) return

        const { scene } = this
        const { gl } = scene
        this.dirty = false
        this.cellsCount = this.cells.size
        const data = new Float32Array(this.cellsCount * 7)
        let cursor = 0
        this.cells.forEach(([x, y, z, u, v, w, h]) => {
            data[cursor++] = x
            data[cursor++] = y
            data[cursor++] = z
            data[cursor++] = u
            data[cursor++] = v
            data[cursor++] = w
            data[cursor++] = h
        })
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferInst)
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
        console.log("🚀 [isometric] data = ", data) // @FIXME: Remove this line written on 2023-08-14 at 15:35
    }
}

function makeKey(x: number, y: number, z: number) {
    return `${x}/${y}/${z}`
}
