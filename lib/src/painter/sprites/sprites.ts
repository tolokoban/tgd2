/* eslint-disable unicorn/no-array-callback-reference */
import type { TgdContext } from "@tgd/context"
import { TgdDataset, TgdDatasetTypeRecord } from "@tgd/dataset"
import { TgdConsole } from "@tgd/debug"
import type { TgdInterfaceTransformable } from "@tgd/interface"
import { TgdTransfo, TgdVec2 } from "@tgd/math"
import { TgdProgram } from "@tgd/program"
import {
    TgdCodeBloc,
    TgdCodeFunctions,
    TgdShaderFragment,
    TgdShaderVertex,
} from "@tgd/shader"
import type { TgdTexture2D } from "@tgd/texture"
import { TgdVertexArray } from "@tgd/vao"
import { TgdPainter } from "../painter"
import { AccessorProxy } from "./accessor"
import type { Accessor, AtlasItem, TgdSprite } from "./types"
import { isNumber } from "@tgd/types/guards"
import { WebglAttributeType } from "@tgd/types"
import { TgdPainterSpritesAbstract } from "./sprites-abstract"

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
    attributes?: TgdDatasetTypeRecord
    attributesSetter?(
        attributes: Record<keyof TgdDatasetTypeRecord, AccessorProxy>,
        key: string | symbol,
        value: unknown,
        offset: number
    ): void
    varyings?: { [name: string]: WebglAttributeType }
    vert?: {
        functions?: TgdCodeFunctions | (() => TgdCodeFunctions)
        code?: TgdCodeBloc | (() => TgdCodeBloc)
    }
    frag?: {
        functions?: TgdCodeFunctions | (() => TgdCodeFunctions)
        code?: TgdCodeBloc | (() => TgdCodeBloc)
    }
}

const DEBUG_COL_SIZE = 8

type Sprite<T extends TgdSprite> = T & { _offset: number }

export class TgdPainterSprites<
    T extends TgdSprite = TgdSprite,
> extends TgdPainterSpritesAbstract<TgdSprite, T> {
    public readonly transfo = new TgdTransfo()
    public readonly texture: TgdTexture2D

    protected readonly datasetInstances: TgdDataset
    protected readonly prg: TgdProgram
    protected readonly vao: TgdVertexArray
    /**
     * Number of actual sprites.
     *
     * The capacity can be get with `this.dataset.count`.
     */
    protected _count = 0
    protected readonly sprites: Sprite<T>[] = []
    /**
     * Map[id] = index in array `sprites`
     */
    protected readonly spriteIndexes = new Map<number, number>()
    protected readonly attPosition = new AccessorProxy("attPosition")
    protected readonly attCos = new AccessorProxy("attCos")
    protected readonly attSin = new AccessorProxy("attSin")
    protected readonly attScale = new AccessorProxy("attScale")
    protected readonly attUV = new AccessorProxy("attUV")
    protected readonly attSize = new AccessorProxy("attSize")
    protected readonly attOrigin = new AccessorProxy("attOrigin")
    protected readonly attributes: Record<string, AccessorProxy> = {}
    protected readonly uniAtlasRatio = new TgdVec2(1, 1)
    protected dirty = true

    private static id = 1

    constructor(
        protected readonly context: TgdContext,
        protected readonly options: TgdPainterSpritesOptions
    ) {
        super()
        for (const attribName of Object.keys(options.attributes ?? {})) {
            this.attributes[attribName] = new AccessorProxy(attribName)
        }
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
                    ...options.attributes,
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
                    ...options.varyings,
                    varUV: "vec2",
                },
                functions: extract(options.vert?.functions),
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
                    extract(options.vert?.code) ?? "",
                ],
            }).code,
            frag: new TgdShaderFragment({
                uniforms: {
                    uniTexture: "sampler2D",
                },
                functions: extract(options.frag?.functions),
                varying: {
                    ...options.varyings,
                    varUV: "vec2",
                },
                outputs: {
                    FragColor: "vec4",
                },
                mainCode: [
                    "vec4 color = texture(uniTexture, varUV);",
                    `if (color.a < ${1 / 0xff}) discard;`,
                    extract(options.frag?.code) ?? "",
                    "FragColor = color;",
                ],
            }).code,
        })
        this.prg = prg
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
                ...options.attributes,
                attPosition: "vec3",
                attScale: "vec2",
                attUV: "vec3",
                attSize: "vec2",
                attOrigin: "vec2",
                attCos: "float",
                attSin: "float",
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

    list(): ReadonlyArray<T> {
        return [...this.sprites]
    }

    forEach(callback: (sprite: T) => void) {
        for (const sprite of this.sprites) callback(sprite)
    }

    filter(test: (sprite: T) => boolean): ReadonlyArray<T> {
        return this.sprites.filter(test)
    }

    get count() {
        return this._count
    }
    protected set count(value: number) {
        this._count = value
        while (value > this.capacity) {
            this.capacity = 2 * Math.max(1, this.capacity)
            this.updateAccessors()
        }
    }

    get capacity() {
        return this.datasetInstances.count
    }
    protected set capacity(value: number) {
        if (this.datasetInstances.count === value) return

        this.datasetInstances.count = value
    }

    /**
     * Delete all sprites.
     */
    clear() {
        this.count = 0
        this.sprites.splice(0)
        this.spriteIndexes.clear()
    }

    add(data: Omit<T, keyof TgdSprite> & Partial<Omit<T, "id">>): T {
        const offset = this.count
        this.count++
        const info: T = {
            id: TgdPainterSprites.id++,
            index: 0,
            x: 0,
            y: 0,
            z: 0,
            angle: 0,
            scaleX: 1,
            scaleY: 1,
            ...data,
        } as T
        const props = {
            id: info.id,
            offset,
            atlas: this.options.atlas,
        }
        const sprite = new Proxy(info, {
            set: (obj: T, key: string | symbol, value) => {
                if (key === "_offset") {
                    props.offset = value
                    this.dirty = true
                    return true
                }
                this.interceptSetter(key, value, props)
                obj[key as keyof T] = value
                this.dirty = true
                return true
            },
            get: (obj: T, prop: string | symbol) => {
                if (prop === "_offset") return props.offset
                return obj[prop as keyof T]
            },
        }) as Sprite<T>
        this.initialize(sprite, info)
        this.sprites[offset] = sprite
        this.spriteIndexes.set(sprite.id, offset)
        this.context.paint()
        return sprite
    }

    protected initialize(sprite: T, info: T) {
        sprite.angle = info.angle
        sprite.index = info.index
        sprite.scaleX = info.scaleX
        sprite.scaleY = info.scaleY
        sprite.x = info.x
        sprite.y = info.y
        sprite.z = info.z
    }

    protected interceptSetter(
        key: string | symbol,
        value: unknown,
        {
            offset,
            atlas,
        }: { id: number; offset: number; atlas: TgdPainterSpritesAtlas }
    ): boolean {
        switch (key) {
            case "index": {
                const item = atlas[value as number]
                this.attUV.set(item.x, offset, 0)
                this.attUV.set(item.y, offset, 1)
                this.attUV.set(item.z ?? 0, offset, 2)
                this.attSize.set(item.width, offset, 0)
                this.attSize.set(item.height, offset, 1)
                this.attOrigin.set(item.originX ?? 0, offset, 0)
                this.attOrigin.set(item.originY ?? 0, offset, 1)
                return true
            }
            case "x":
                this.attPosition.set(value as number, offset, 0)
                return true
            case "y":
                this.attPosition.set(value as number, offset, 1)
                return true
            case "z":
                this.attPosition.set(value as number, offset, 2)
                return true
            case "angle": {
                const angle = value as number
                this.attCos.set(Math.cos(angle), offset)
                this.attSin.set(Math.sin(angle), offset)
                return true
            }
            case "scaleX":
                this.attScale.set(value as number, offset, 0)
                return true
            case "scaleY":
                this.attScale.set(value as number, offset, 1)
                return true
        }
        return (
            this.options.attributesSetter?.(
                this.attributes,
                key,
                value,
                offset
            ) ?? false
        )
    }

    remove(sprite: { id: number }) {
        const index = this.spriteIndexes.get(sprite.id)
        if (!isNumber(index)) return false

        const lastIndex = this.sprites.length - 1
        if (lastIndex !== index) {
            // We need to fill the hole of this deleted sprite
            // with the last sprite of the list.
            const lastSprite = this.sprites[lastIndex]
            if (!lastSprite) {
                throw new Error(
                    "[TgdPainterSprites.spriteDelete] There is no last sprite!"
                )
            }
            this.datasetInstances.copyAttributes({
                fromIndex: lastIndex,
                toIndex: index,
            })
            this.spriteIndexes.set(lastSprite.id, index)
            this.sprites[index] = lastSprite
            lastSprite._offset = index
        }
        this.sprites.pop()
        this.count--
        this.spriteIndexes.delete(sprite.id)
        this.dirty = true
        this.context.paint()
        return true
    }

    delete(): void {
        this.prg.delete()
        this.vao.delete()
    }

    paint(): void {
        const { context, datasetInstances, vao, prg, transfo, texture, count } =
            this
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
        gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, count)
        vao.unbind()
    }

    debug(caption?: string) {
        this.transfo.debug("Transfo")
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
        console.log("Sprites list:", this.sprites)
    }

    protected updateAccessors() {
        const { datasetInstances } = this
        this.attPosition.dataset = datasetInstances
        this.attCos.dataset = datasetInstances
        this.attSin.dataset = datasetInstances
        this.attScale.dataset = datasetInstances
        this.attUV.dataset = datasetInstances
        this.attSize.dataset = datasetInstances
        this.attOrigin.dataset = datasetInstances
        for (const attribute of Object.values(this.attributes)) {
            attribute.dataset = datasetInstances
        }
    }
}

function pad(accessor: Accessor, index: number, dimension = 0): string {
    return `${accessor.get(index, dimension)}`
        .slice(0, DEBUG_COL_SIZE)
        .padStart(DEBUG_COL_SIZE, " ")
}

function extract<T>(arg: T | (() => T) | null | undefined): T | undefined {
    if (arg === null || arg === undefined) return undefined
    if (typeof arg !== "function") return arg
    return (arg as () => T)()
}
