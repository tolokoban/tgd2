import { TgdAttributes, TgdPainter, TgdScene } from "@"
import { TgdAtlasGrid } from "@/atlas/atlas-grid"
import VERT from "./isometric.vert"
import FRAG from "./isometric.frag"
import Resources from "@/scene/resources"

export interface TgdTypePainterBackgroundOptions {
    image: HTMLImageElement | HTMLCanvasElement
    altas: TgdAtlasGrid
    cells?: [name: string, x: number, y: number, z: number][]
}

type IsometricCell = [x: number, y: number, z: number]

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

    constructor(
        private readonly scene: TgdScene,
        options: TgdTypePainterBackgroundOptions
    ) {
        const { gl } = scene
        this.atlas = options.altas
        for (const [name, x, y, z] of options.cells ?? []) {
            this.addCell(name, x, y, z)
        }
        const res = scene.getResources("TgdPainterIsometric")
        this.res = res
        const tex = res.createTexture(this.id)
        scene.texture.bindTexture2D(tex, {
            image: options.image,
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
        const attribsInst = new TgdAttributes({
            attPos: 3,
            attCell: 4,
        })
        this.vao = res.createVertexArray()
        gl.bindVertexArray(this.vao)
        attribsVert.define(gl, this.program, this.bufferVert)
        attribsInst.define(gl, this.program, this.bufferInst)
        gl.bindVertexArray(null)
    }

    addCell(name: string, x: number, y: number, z = 0) {
        const key = makeKey(x, y, z)
        this.cells.set(name, [x, y, z])
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
        res.deteleTexture()
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
        gl.uniform2f(this.uniScale, scaleX * zoom, scaleY * zoom)
        gl.uniform2f(this.uniCenter, this.centerX, this.centerY)
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
        const data = new Float32Array(this.cellsCount * 4)
        let cursor = 0
        this.cells.forEach(([x, y, z], name) => {
            const cell = this.atlas.getUV(name)
            if (!cell) return

            const { u, v, w, h } = cell
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
    }
}

function makeKey(x: number, y: number, z: number) {
    return `${x}/${y}/${z}`
}
