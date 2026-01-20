import type { TgdContext } from "@tgd/context"
import { TgdDataset } from "@tgd/dataset"
import type { TgdInterfaceTransformable } from "@tgd/interface"
import { TgdTransfo } from "@tgd/math"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import type { TgdTexture2D } from "@tgd/texture"
import { TgdVertexArray } from "@tgd/vao"
import { TgdPainter } from "../painter"
import { Sprite } from "./sprite"
import type { Accessor, AtlasItem, TgdSprite } from "./types"

export interface TgdPainterSpritesOptions {
    texture: TgdTexture2D
    atlas: AtlasItem[]
    /**
     * If there is not enough space when adding a sprite,
     * the capacity will be doubled.
     *
     * Default: 1
     */
    initialCapacity?: number
}

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
    private readonly attPosition: Accessor
    private readonly attCos: Accessor
    private readonly attSin: Accessor
    private readonly attScale: Accessor
    private readonly attUV: Accessor
    private readonly attSize: Accessor
    private readonly attOrigin: Accessor
    private dirty = true

    constructor(
        private readonly context: TgdContext,
        private readonly options: TgdPainterSpritesOptions
    ) {
        super()
        this.texture = options.texture
        const prg = new TgdProgram(context.gl, {
            vert: new TgdShaderVertex({
                uniforms: {
                    uniTransfoMatrix: "mat4",
                    uniModelViewMatrix: "mat4",
                    uniProjectionMatrix: "mat4",
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
                    "varUV = attUV + attSize * attCorners.zw;",
                    "vec4 position = vec4((attCorners.xy - attOrigin) * attScale, 0.0, 1.0);",
                    "// Rotation... TODO",
                    "position += vec4(attPosition, 0.0);",
                    "gl_Position = uniProjectionMatrix * uniModelViewMatrix * uniTransfoMatrix * position;",
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
                ],
            }).code,
        })
        this.prg = prg
        const datasetFrame = new TgdDataset({
            /**
             * (x, y, u, v)
             */
            attCorner: "vec4",
        })
        // prettier-ignore
        datasetFrame.set(
			"arrCorner",
			new Float32Array([
				-1, -1, 0, 1, +1, -1, 1, 1, -1, +1, 0, 0, +1, +1, 1, 0,
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
        this.attPosition = datasetInstances.getAttribAccessor("attPosition")
        this.attCos = datasetInstances.getAttribAccessor("attCos")
        this.attSin = datasetInstances.getAttribAccessor("attSin")
        this.attScale = datasetInstances.getAttribAccessor("attScale")
        this.attUV = datasetInstances.getAttribAccessor("attUV")
        this.attSize = datasetInstances.getAttribAccessor("attSize")
        this.attOrigin = datasetInstances.getAttribAccessor("attOrigin")
    }

    get count() {
        return this._count
    }
    private set count(value: number) {
        this._count = value
        while (value > this.datasetInstances.count) {
            this.datasetInstances.count =
                2 * Math.max(1, this.datasetInstances.count)
        }
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
        prg.uniformMatrix4fv("uniTransfoMatrix", transfo.matrix)
        prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        vao.bind()
        gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, datasetInstances.count)
        vao.unbind()
    }
}
