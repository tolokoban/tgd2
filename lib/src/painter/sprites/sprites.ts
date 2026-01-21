/* eslint-disable unicorn/no-array-callback-reference */
import type { TgdContext } from "@tgd/context"
import { TgdDataset } from "@tgd/dataset"
import { TgdConsole } from "@tgd/debug"
import type { TgdInterfaceTransformable } from "@tgd/interface"
import { TgdTransfo, TgdVec2 } from "@tgd/math"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import type { TgdTexture2D } from "@tgd/texture"
import { TgdVertexArray } from "@tgd/vao"
import { TgdPainter } from "../painter"
import { AccessorProxy } from "./accessor"
import { Sprite } from "./sprite"
import type { Accessor, AtlasItem, TgdSprite } from "./types"

export type { TgdSprite } from "./types"
export type TgdPainterSpritesAtlas = AtlasItem[]

export interface TgdPainterSpritesOptions {
    texture: TgdTexture2D
    atlas: TgdPainterSpritesAtlas
    /**
     * The biggest square contained in the atlas has a size of `atlasUnit`.
     *
     * Default: 1
     */
    atlasUnit?: number
    /**
     * If there is not enough space when adding a sprite,
     * the capacity will be doubled.
     *
     * Default: 1
     */
    initialCapacity?: number
}

const DEBUG_COL_SIZE = 8

export class TgdPainterSprites
    extends TgdPainter
    implements TgdInterfaceTransformable
{
    public readonly transfo = new TgdTransfo()
    public readonly texture: TgdTexture2D

    private readonly datasetInstances: TgdDataset
    private readonly prg: TgdProgram
    private readonly vao: TgdVertexArray
    /**
     * Number of actual sprites.
     *
     * The capacity can be get with `this.dataset.count`.
     */
    private _count = 0
    private readonly attPosition = new AccessorProxy("attPosition")
    private readonly attCos = new AccessorProxy("attCos")
    private readonly attSin = new AccessorProxy("attSin")
    private readonly attScale = new AccessorProxy("attScale")
    private readonly attUV = new AccessorProxy("attUV")
    private readonly attSize = new AccessorProxy("attSize")
    private readonly attOrigin = new AccessorProxy("attOrigin")
    private readonly uniAtlasRatio = new TgdVec2(1, 1)
    private dirty = true

    constructor(
        private readonly context: TgdContext,
        private readonly options: TgdPainterSpritesOptions
    ) {
        super()
        const { texture } = options
        this.texture = texture
        if (texture.width > texture.height) {
            this.uniAtlasRatio.x = texture.width / texture.height
            this.uniAtlasRatio.y = 1
        } else {
            this.uniAtlasRatio.x = 1
            this.uniAtlasRatio.y = texture.height / texture.width
        }
        this.uniAtlasRatio.scale(options.atlasUnit ?? 1)
        const prg = new TgdProgram(context.gl, {
            vert: new TgdShaderVertex({
                uniforms: {
                    uniTransfoMatrix: "mat4",
                    uniModelViewMatrix: "mat4",
                    uniProjectionMatrix: "mat4",
                    uniAtlasRatio: "vec2",
                },
                attributes: {
                    attPosition: "vec3",
                    attCos: "float",
                    attSin: "float",
                    attScale: "vec2",
                    attUV: "vec3",
                    attSize: "vec2",
                    attOrigin: "vec2",
                    attCorners: "vec4",
                },
                varying: {
                    varUV: "vec2",
                },
                mainCode: [
                    "varUV = attUV.xy + attSize * attCorners.zw;",
                    "vec4 position = vec4((attCorners.xy - attOrigin) * attScale * attSize * uniAtlasRatio, 0.0, 1.0);",
                    "mat4 rotation = mat4(",
                    [
                        "attCos, attSin, 0, 0,",
                        "-attSin, attCos, 0, 0,",
                        "0, 0, 1, 0,",
                        "0, 0, 0, 1",
                    ],
                    ");",
                    "position = rotation * position;",
                    "position += vec4(attPosition, 0.0);",
                    "gl_Position = uniProjectionMatrix * uniModelViewMatrix * uniTransfoMatrix * position;",
                    "gl_PointSize = 32.0;",
                ],
            }).code,
            frag: new TgdShaderFragment({
                uniforms: {
                    uniTexture: "sampler2D",
                },
                varying: { varUV: "vec2" },
                outputs: {
                    FragColor: "vec4",
                },
                mainCode: [
                    "vec4 color = texture(uniTexture, varUV);",
                    `if (color.a < ${1 / 0xff}) discard;`,
                    "FragColor = color;",
                    // "vec4 GREEN = vec4(0, 1, 0, 1);",
                    // "vec4 RED = vec4(1, 0, 0, 1);",
                    // "if (varCorners.x == 0.0) FragColor = GREEN;",
                    // "else FragColor = RED;",
                    // "FragColor.a = 1.0;",
                ],
            }).code,
        })
        this.prg = prg
        prg.debug()
        const datasetFrame = new TgdDataset({
            /**
             * (x, y, u, v)
             */
            attCorners: "vec4",
        })
        // prettier-ignore
        datasetFrame.set(
			"attCorners",
			new Float32Array([
				-1, -1, 0, 1, 
                +1, -1, 1, 1, 
                -1, +1, 0, 0, 
                +1, +1, 1, 0,
			]),
		)
        const datasetInstances = new TgdDataset(
            {
                attPosition: "vec3",
                attCos: "float",
                attSin: "float",
                attScale: "vec2",
                attUV: "vec3",
                attSize: "vec2",
                attOrigin: "vec2",
            },
            {
                divisor: 1,
                usage: "DYNAMIC_DRAW",
            }
        )
        datasetInstances.count = options.initialCapacity ?? 1
        this.datasetInstances = datasetInstances
        const vao = new TgdVertexArray(context.gl, prg, [
            datasetInstances,
            datasetFrame,
        ])
        this.vao = vao
        this.updateAccessors()
    }

    get count() {
        return this._count
    }
    private set count(value: number) {
        this._count = value
        while (value > this.capacity) {
            this.capacity = 2 * Math.max(1, this.capacity)
            this.updateAccessors()
        }
    }

    get capacity() {
        return this.datasetInstances.count
    }
    private set capacity(value: number) {
        if (this.datasetInstances.count === value) return

        this.datasetInstances.count = value
    }

    spriteCreate(data: Partial<TgdSprite> = {}): TgdSprite {
        const offset = this.count
        this.count++
        const sprite = new Sprite(
            this.options.atlas,
            () => {
                this.dirty = true
            },
            this.attPosition,
            this.attCos,
            this.attSin,
            this.attScale,
            this.attUV,
            this.attSize,
            this.attOrigin
        )
        sprite.offset = offset
        sprite.angle = data.angle ?? 0
        sprite.index = data.index ?? 0
        sprite.scaleX = data.scaleX ?? 1
        sprite.scaleY = data.scaleY ?? 1
        sprite.x = data.x ?? 0
        sprite.y = data.y ?? 0
        sprite.z = data.z ?? 0
        return sprite
    }

    spriteDelete(sprite: TgdSprite) {
        throw new Error("Not implemented yet!")
    }

    delete(): void {
        this.prg.delete()
        this.vao.delete()
    }

    paint(): void {
        const { context, datasetInstances, vao, prg, transfo, texture } = this
        if (this.dirty) {
            this.dirty = false
            vao.updateDataset(datasetInstances)
        }
        const { gl, camera } = context
        prg.use()
        texture.activate(0, prg, "uniTexture")
        prg.uniform2fv("uniAtlasRatio", this.uniAtlasRatio)
        prg.uniformMatrix4fv("uniTransfoMatrix", transfo.matrix)
        prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        vao.bind()
        gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, datasetInstances.count)
        // gl.drawArraysInstanced(gl.POINTS, 0, 4, datasetInstances.count)
        vao.unbind()
    }

    debug(caption?: string) {
        const out = new TgdConsole({ text: caption ?? this.name, bold: true })
        out.nl()
        out.add("count: ").add(`${this.count}`, { color: "yellow" }).nl()
        out.add("capacity: ").add(`${this.capacity}`, { color: "yellow" }).nl()
        const spc = " ".repeat(DEBUG_COL_SIZE)
        const head = (value: string) =>
            value.slice(0, DEBUG_COL_SIZE).padStart(DEBUG_COL_SIZE, " ")
        const fields: Record<string, [Accessor, number]> = {
            position: [this.attPosition, 3],
            scale: [this.attScale, 2],
            uv: [this.attUV, 3],
            size: [this.attSize, 2],
            origin: [this.attOrigin, 2],
            cos: [this.attCos, 1],
            sin: [this.attSin, 1],
        }
        const columns = Object.keys(fields)
        const hr = `${columns.map(() => "-".repeat(DEBUG_COL_SIZE)).join("|")}|\n`
        if (this.count > 0) {
            out.add(hr)
                .add(columns.map(head).join("|"), {
                    bold: true,
                })
                .add("|")
                .nl()
                .add(hr)
            for (let index = 0; index < this.count; index++) {
                for (let dim = 0; dim < 3; dim++) {
                    for (const [accessor, maxDim] of Object.values(fields)) {
                        if (dim < maxDim) {
                            out.add(pad(accessor, index, dim))
                        } else {
                            out.add(spc)
                        }
                        out.add("|")
                    }
                    out.nl()
                }
                out.add(hr)
            }
        }
        out.debug()
        this.transfo.debug("Transfo")
    }

    private updateAccessors() {
        const { datasetInstances } = this
        this.attPosition.dataset = datasetInstances
        this.attCos.dataset = datasetInstances
        this.attSin.dataset = datasetInstances
        this.attScale.dataset = datasetInstances
        this.attUV.dataset = datasetInstances
        this.attSize.dataset = datasetInstances
        this.attOrigin.dataset = datasetInstances
    }
}

function pad(accessor: Accessor, index: number, dimension = 0): string {
    return `${accessor.get(index, dimension)}`
        .slice(0, DEBUG_COL_SIZE)
        .padStart(DEBUG_COL_SIZE, " ")
}
