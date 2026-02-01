/* eslint-disable unicorn/no-array-callback-reference */
import type { TgdContext } from "@tgd/context"
import type { TgdInterfaceTransformable } from "@tgd/interface"
import { AccessorProxy } from "./accessor"
import type { TgdSpriteHue } from "./types"
import { TgdPainterSprites, TgdPainterSpritesOptions } from "./sprites"
import { tgdCodeFunction_shiftHue } from "@tgd/code"
import { SpriteHue } from "./sprite-hue"

export type { TgdSpriteHue } from "./types"

export class TgdPainterSpritesHue
    extends TgdPainterSprites
    implements TgdInterfaceTransformable
{
    constructor(context: TgdContext, options: TgdPainterSpritesOptions) {
        super(context, {
            ...options,
            attributes: {
                attHue: "float",
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

    spriteCreate(data: Partial<TgdSpriteHue> = {}): TgdSpriteHue {
        const offset = this.count
        this.count++
        const sprite = new SpriteHue(
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
            this.attOrigin,
            this.attributes.attHue
        )
        sprite.offset = offset
        sprite.angle = data.angle ?? 0
        sprite.index = data.index ?? 0
        sprite.scaleX = data.scaleX ?? 1
        sprite.scaleY = data.scaleY ?? 1
        sprite.x = data.x ?? 0
        sprite.y = data.y ?? 0
        sprite.z = data.z ?? 0
        sprite.hue = data.hue ?? 0
        this.sprites[offset] = sprite
        this.spriteIndexes.set(sprite, offset)
        this.context.paint()
        return sprite
    }

    protected updateAccessors() {
        super.updateAccessors()
        this.attributes.attHue.dataset = this.datasetInstances
    }
}
