/* eslint-disable unicorn/no-array-callback-reference */
import type { TgdContext } from "@tgd/context"
import type { TgdSprite, TgdSpriteHue } from "./types"
import { TgdPainterSprites, TgdPainterSpritesOptions } from "./sprites"
import { tgdCodeFunction_shiftHue } from "@tgd/code"
import { TgdPainterSpritesAbstract } from "./sprites-abstract"

export type { TgdSpriteHue } from "./types"

export class TgdPainterSpritesHue<
    T extends TgdSpriteHue = TgdSpriteHue,
> extends TgdPainterSpritesAbstract<TgdSpriteHue, T> {
    private readonly parent: TgdPainterSprites<T>

    constructor(context: TgdContext, options: TgdPainterSpritesOptions) {
        super()
        this.parent = new TgdPainterSprites<T>(context, {
            ...options,
            attributes: {
                attHue: "float",
            },
            attributesSetter(attributes, key, value, offset) {
                if (key !== "hue" || typeof value !== "number") return

                attributes.attHue.set(value, offset)
            },
            varyings: {
                varHue: "float",
            },
            vert: {
                code: ["varHue = attHue;"],
            },
            frag: {
                functions: tgdCodeFunction_shiftHue(),
                code: ["color.rgb = shiftHue(color.rgb, varHue);"],
            },
        })
    }

    get count() {
        return this.parent.count
    }

    get capacity() {
        return this.parent.capacity
    }

    list(): ReadonlyArray<T> {
        return this.parent.list()
    }

    forEach(callback: (sprite: T) => void) {
        this.parent.forEach(callback)
    }

    filter(test: (sprite: T) => boolean): ReadonlyArray<T> {
        return this.parent.filter(test)
    }

    /**
     * Delete all sprites.
     */
    clear() {
        this.parent.clear()
    }

    add(data: Omit<T, keyof TgdSpriteHue> & Partial<Omit<T, "id">>): T {
        const info = {
            hue: 0,
            ...data,
        } as Omit<T, keyof TgdSprite> & Partial<Omit<T, "id">>
        const sprite = this.parent.add(info)
        sprite.hue = info.hue
        return sprite
    }

    remove(sprite: { id: number }) {
        this.parent.remove(sprite)
    }

    // protected updateAccessors() {
    //     super.updateAccessors()
    //     this.attributes.attHue.dataset = this.datasetInstances
    // }

    delete(): void {
        this.parent.delete()
    }

    paint(): void {
        this.parent.paint()
    }

    debug(caption?: string) {
        this.parent.debug(caption)
    }
}
