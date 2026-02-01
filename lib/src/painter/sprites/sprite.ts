import type { Accessor, AtlasItem, TgdSprite } from "./types"

export class Sprite implements TgdSprite {
    public offset = 0

    protected _index = 0
    protected _angle = Number.MAX_SAFE_INTEGER

    constructor(
        protected readonly atlas: AtlasItem[],
        protected readonly raiseDirtyFlag: () => void,
        protected readonly attPosition: Accessor,
        protected readonly attCos: Accessor,
        protected readonly attSin: Accessor,
        protected readonly attScale: Accessor,
        protected readonly attUV: Accessor,
        protected readonly attSize: Accessor,
        protected readonly attOrigin: Accessor
    ) {}

    get index() {
        return this._index
    }
    set index(value: number) {
        this._index = value
        const item = this.atlas[value]
        const { offset } = this
        this.attUV.set(item.x, offset, 0)
        this.attUV.set(item.y, offset, 1)
        this.attUV.set(item.z ?? 0, offset, 2)
        this.attSize.set(item.width, offset, 0)
        this.attSize.set(item.height, offset, 1)
        this.attOrigin.set(item.originX ?? 0, offset, 0)
        this.attOrigin.set(item.originY ?? 0, offset, 1)
        this.raiseDirtyFlag()
    }

    get x() {
        return this.attPosition.get(this.offset, 0)
    }
    set x(value: number) {
        this.attPosition.set(value, this.offset, 0)
        this.raiseDirtyFlag()
    }

    get y() {
        return this.attPosition.get(this.offset, 1)
    }
    set y(value: number) {
        this.attPosition.set(value, this.offset, 1)
        this.raiseDirtyFlag()
    }

    get z() {
        return this.attPosition.get(this.offset, 2)
    }
    set z(value: number) {
        this.attPosition.set(value, this.offset, 2)
        this.raiseDirtyFlag()
    }

    get angle() {
        return this._angle
    }
    set angle(value: number) {
        if (this._angle === value) return

        this._angle = value
        this.attCos.set(Math.cos(value), this.offset)
        this.attSin.set(Math.sin(value), this.offset)
        this.raiseDirtyFlag()
    }

    get scaleX() {
        return this.attScale.get(this.offset, 0)
    }
    set scaleX(value: number) {
        this.attScale.set(value, this.offset, 0)
        this.raiseDirtyFlag()
    }

    get scaleY() {
        return this.attScale.get(this.offset, 1)
    }
    set scaleY(value: number) {
        this.attScale.set(value, this.offset, 1)
        this.raiseDirtyFlag()
    }
}
