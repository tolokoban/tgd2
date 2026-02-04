export interface TgdSprite {
    readonly id: number
    x: number
    y: number
    z: number
    angle: number
    scaleX: number
    scaleY: number
    /**
     * Index of the sprite in the atlas.
     */
    index: number
}

export interface TgdSpriteHue extends TgdSprite {
    hue: number
}

export interface AtlasItem {
    x: number
    y: number
    z?: number
    width: number
    height: number
    /**
     * Point which is considered the center
     * Usually between -1 (left) and +1 (right).
     *
     * Default: 0
     */
    originX?: number
    /**
     * Point which is considered the center
     * Usually between -1 (bottom) and +1 (top).
     *
     * Default: 0
     */
    originY?: number
}

export interface Accessor {
    get: (index: number, dimension?: number | undefined) => number
    set: (value: number, index: number, dimension?: number | undefined) => void
}
