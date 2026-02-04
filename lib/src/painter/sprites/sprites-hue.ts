/* eslint-disable unicorn/no-array-callback-reference */
import type { TgdContext } from "@tgd/context"
import type { TgdInterfaceTransformable } from "@tgd/interface"
import type { TgdSprite, TgdSpriteHue } from "./types"
import { TgdPainterSprites, TgdPainterSpritesOptions } from "./sprites"
import { tgdCodeFunction_shiftHue } from "@tgd/code"
import { TgdPainter } from "../painter"

export type { TgdSpriteHue } from "./types"

export class TgdPainterSpritesHue<T extends TgdSpriteHue = TgdSpriteHue>
    extends TgdPainter
    implements TgdInterfaceTransformable
{
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

    list(): ReadonlyArray<T> {
        return this.parent.list()
    }

    forEach(callback: (sprite: T) => void) {
        this.parent.forEach(callback)
    }

    filter(test: (sprite: T) => boolean): ReadonlyArray<T> {
        return this.parent.filter(test)
    }

    get transfo() {
        return this.parent.transfo
    }

    spriteCreate(
        data: Omit<T, keyof TgdSpriteHue> & Partial<Omit<T, "id">>
    ): T {
        const info = {
            hue: 0,
            ...data,
        } as Omit<T, keyof TgdSprite> & Partial<Omit<T, "id">>
        const sprite = this.parent.spriteCreate(info)
        sprite.hue = info.hue
        return sprite
    }

    spriteDelete(sprite: { id: number }) {
        this.parent.spriteDelete(sprite)
    }

    // protected updateAccessors() {
    //     super.updateAccessors()
    //     this.attributes.attHue.dataset = this.datasetInstances
    // }

    delete(): void {
        this.parent.delete()
    }

    paint(_time: number, _delta: number): void {
        this.parent.paint()
    }
}
