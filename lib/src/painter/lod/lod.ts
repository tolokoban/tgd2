import type { TgdContext } from "@tgd/context"
import type { TgdInterfaceTransformable } from "@tgd/interface"
import type { TgdMaterial } from "@tgd/material"
import { type TgdMat4, TgdTransfo } from "@tgd/math"
import type { ArrayNumber3 } from "@tgd/types"
import { TgdPainterGroup } from "../group"
import { TgdPainter } from "../painter"
import { OctreeCache } from "./cache"
import { listBBoxes } from "./octree"

export interface TgdPainterLODOptions {
    material?: TgdMaterial
    bbox: Readonly<{
        min: Readonly<ArrayNumber3>
        max: Readonly<ArrayNumber3>
    }>
    /**
     * If `true`, we will cache the result of `factory()` and never
     * call it twice with the same `x, y, z, level` arguments.
     *
     * Default to `false`
     */
    cacheMeshes?: boolean
    /**
     * Maximum number of octree subdivisions.
     *
     * - 0: there is only one mesh for the whole bbox.
     * - 1: there is one mesh for the whole bbox in low res,
     * and 8 meshes of parts of the bbox in high res.
     * - 2: all the meshes as 1 but the high res one are splitter in 8
     * with even higher res.
     * - 3: etc...
     *
     * There is no upper limit for this number, but it must be positive.
     */
    subdivisions: number
    /**
     * `x`, `y` and `z` are integers between 0 and 2**`level` - `.
     *
     * @returns `null` if this bbox is empty
     */
    factory(
        x: number,
        y: number,
        z: number,
        level: number
    ): Promise<Readonly<TgdPainter> | null>
}

export class TgdPainterLOD
    extends TgdPainter
    implements TgdInterfaceTransformable
{
    public readonly transfo: Readonly<{ matrix: TgdMat4 }> = new TgdTransfo()

    private readonly group = new TgdPainterGroup()

    private readonly cache = new OctreeCache<
        Promise<Readonly<TgdPainter> | null>
    >()

    constructor(
        public readonly context: TgdContext,
        private readonly options: TgdPainterLODOptions
    ) {
        super()
    }

    delete(): void {
        this.group.delete()
    }

    paint(time: number, delay: number): void {
        const { group, context, options } = this
        group.paint(time, delay)
        group.removeAll(false)
        const candidates = listBBoxes(
            context.camera,
            options.bbox,
            options.subdivisions
        )
        for (const [x, y, z, level] of candidates) {
            const promise = this.getMeshPromise(x, y, z, level)
            promise.then((mesh) => {
                if (mesh) {
                    group.add(mesh)
                    this.context.paint()
                }
            })
        }
    }

    private getMeshPromise(
        x: number,
        y: number,
        z: number,
        level: number
    ): Promise<Readonly<TgdPainter> | null> {
        const fromCache = this.cache.get(x, y, z, level)
        if (fromCache) return fromCache

        const promise = this.options.factory(x, y, z, level)
        this.cache.set(x, y, z, level, promise)
        return promise
    }
}
