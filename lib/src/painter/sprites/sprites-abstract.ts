import type { TgdInterfaceTransformable } from "@tgd/interface"
import { TgdTransfo } from "@tgd/math"
import { TgdPainter } from "../painter"
import type { TgdSprite } from "./types"

export type { TgdSprite } from "./types"

export abstract class TgdPainterSpritesAbstract<
        Base extends TgdSprite,
        Type extends Base,
    >
    extends TgdPainter
    implements TgdInterfaceTransformable
{
    public readonly transfo = new TgdTransfo()

    abstract list(): ReadonlyArray<Type>

    abstract forEach(callback: (sprite: Type) => void): void

    abstract filter(test: (sprite: Type) => boolean): ReadonlyArray<Type>

    abstract get count(): number

    abstract get capacity(): number

    /**
     * Delete all sprites.
     */
    abstract clear(): void

    abstract add(data: Omit<Type, keyof Base> & Partial<Omit<Type, "id">>): Type

    abstract remove(sprite: { id: number }): void

    abstract delete(): void
    abstract paint(): void

    abstract debug(caption?: string): void
}
