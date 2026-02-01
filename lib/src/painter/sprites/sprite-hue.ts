import { Sprite } from "./sprite"
import type { Accessor, AtlasItem } from "./types"

export class SpriteHue extends Sprite {
    constructor(
        atlas: AtlasItem[],
        raiseDirtyFlag: () => void,
        attPosition: Accessor,
        attCos: Accessor,
        attSin: Accessor,
        attScale: Accessor,
        attUV: Accessor,
        attSize: Accessor,
        attOrigin: Accessor,
        protected readonly attHue: Accessor
    ) {
        super(
            atlas,
            raiseDirtyFlag,
            attPosition,
            attCos,
            attSin,
            attScale,
            attUV,
            attSize,
            attOrigin
        )
    }

    get hue() {
        return this.attHue.get(this.offset, 0)
    }
    set hue(value: number) {
        this.attHue.set(value, this.offset, 0)
        this.raiseDirtyFlag()
    }
}
