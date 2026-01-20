import type { TgdContext } from "@tgd/context"
import type { TgdInterfaceTransformable } from "@tgd/interface"
import { type TgdMat4, TgdTransfo } from "@tgd/math"
import type { ArrayNumber3 } from "@tgd/types"
import { TgdPainterGroup } from "../group"
import { TgdPainter } from "../painter"
import { OctreeCache } from "./cache"
import { listBBoxes } from "./octree"

export interface TgdPainterLODOptions {
    bbox: Readonly<{
        min: Readonly<ArrayNumber3>
        max: Readonly<ArrayNumber3>
    }>
    /**
     * This is a precentage of the size of the screen.
     * If the containing square of a LOD block has a surface
     * greater than `surfaceThreshold`, it will be splited in
     * 8 sub blocks.
     *
     * Default to .25
     */
    surfaceThreshold?: number
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
     * This method will be called by TgdPainterLOD to create painters,
     * so it's TgdPainterLOD responsability to delete them.
     * This is done by calling `TgdPainterLOD.delete()` method.
     *
     * @returns `null` if this block is empty
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
    private readonly paintersToDelete = new Set<TgdPainter>()
    private isComputingOctree = false

    constructor(
        public readonly context: TgdContext,
        private readonly options: TgdPainterLODOptions
    ) {
        super()
    }

    delete(): void {
        for (const painter of this.paintersToDelete.values()) {
            painter.delete()
        }
        this.paintersToDelete.clear()
        this.group.delete()
    }

    paint(time: number, delay: number): void {
        this.group.paint(time, delay)
        this.computeOctree()
    }

    private async computeOctree() {
        if (this.isComputingOctree) return

        this.isComputingOctree = true
        try {
            const { group, context, options } = this
            const candidates = listBBoxes(
                context.camera,
                options.bbox,
                options.subdivisions,
                options.surfaceThreshold ?? 0.25
            )
            const promises: Promise<Readonly<TgdPainter> | null>[] = []
            for (const [x, y, z, level] of candidates) {
                promises.push(this.getMeshPromise(x, y, z, level))
            }
            const results = await Promise.allSettled(promises)
            group.removeAll(false)
            for (const result of results) {
                if (result.status === "fulfilled") {
                    const painter = result.value
                    if (painter) {
                        group.add(painter)
                        this.paintersToDelete.add(painter)
                    }
                }
            }
            this.context.paint()
        } finally {
            this.isComputingOctree = false
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

    debug(caption?: string) {
        console.debug(
            caption ?? `${this.name}  (id: ${this.id}, active: ${this.active})`
        )
    }
}
