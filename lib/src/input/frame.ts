import { TgdEvent } from "@tolokoban/tgd"

export type TgdFrameCoord = number | [number, "%"]

/**
 * A frame is a rectangle inside the actual screen.
 *
 * It has its own coordinate system between -1 and +1.
 */
export class TgdFrame {
    public readonly eventResize = new TgdEvent<{ width: number; height: number }>()

    private _parentWidthPx = 0
    private _parentHeightPx = 0
    private _top: TgdFrameCoord | undefined
    private _right: TgdFrameCoord | undefined
    private _bottom: TgdFrameCoord | undefined
    private _left: TgdFrameCoord | undefined
    private _width: TgdFrameCoord | undefined
    private _height: TgdFrameCoord | undefined
    private _topPx = 0
    private _rightPx = 0
    private _bottomPx = 0
    private _leftPx = 0
    private _widthPx = 0
    private _heightPx = 0

    constructor(
        private readonly parent: {
            width: number
            height: number
            eventResize: TgdEvent<{ width: number; height: number }>
        },
    ) {
        this.updateScreenSize(parent)
        parent.eventResize.addListener(this.updateScreenSize)
    }

    get width() {
        return this._widthPx
    }

    get height() {
        return this._heightPx
    }

    get parentWidth(): number {
        return this._parentWidthPx
    }

    get parentHeight(): number {
        return this._parentHeightPx
    }

    xParentToFrame(x: number) {
        const xParPx = (x + 1) * 0.5 * this._parentWidthPx
        const xFrmPx = xParPx - this._leftPx
        return 2 * (xFrmPx / this._widthPx) - 1
    }

    yParentToFrame(y: number) {
        const yParPx = (y + 1) * 0.5 * this._parentHeightPx
        const yFrmPx = yParPx - this._bottomPx
        return 2 * (yFrmPx / this._heightPx) - 1
    }

    xFrameToParent(x: number) {
        const xFrmPx = (x + 1) * 0.5 * this._widthPx
        const xParPx = xFrmPx + this._leftPx
        return 2 * (xParPx / this._parentWidthPx) - 1
    }

    yFrameToParent(y: number) {
        const yFrmPx = (y + 1) * 0.5 * this._heightPx
        const yParPx = yFrmPx + this._bottomPx
        return 2 * (yParPx / this._parentHeightPx) - 1
    }

    delete() {
        this.parent.eventResize.removeListener(this.updateScreenSize)
    }

    /**
     * The size of the screen in pixels.
     */
    private readonly updateScreenSize = ({ width, height }: { width: number; height: number }) => {
        const w = Math.round(width)
        const h = Math.round(height)
        if (w === this._parentWidthPx && h === this._parentHeightPx) return

        this._parentWidthPx = w
        this._parentHeightPx = h
        if (this._width) {
            this._widthPx = resolveCoord(this._width, w)
            const { _left, _right } = this
            if (_left === undefined && _right === undefined) {
                // No left nor right, so we center the frame horizontally.
                this._leftPx = (w - this._widthPx) / 2
                this._rightPx = w - this._leftPx
            } else if (_left !== undefined) {
                this._leftPx = resolveCoord(_left, w)
                this._rightPx = this._leftPx + this._widthPx
            } else {
                this._rightPx = w - resolveCoord(this._right, w)
                this._leftPx = this._rightPx - this._widthPx
            }
        } else {
            this._leftPx = resolveCoord(this._left, w)
            this._rightPx = w - resolveCoord(this._right, w)
            this._widthPx = this._rightPx - this._leftPx
        }
        if (this._height) {
            this._heightPx = resolveCoord(this._height, w)
            const { _bottom, _top } = this
            if (_bottom === undefined && _top === undefined) {
                // No bottom nor top, so we center the frame horizontally.
                this._bottomPx = (w - this._heightPx) / 2
                this._topPx = w - this._bottomPx
            } else if (_bottom !== undefined) {
                this._bottomPx = resolveCoord(_bottom, w)
                this._topPx = this._bottomPx + this._heightPx
            } else {
                this._topPx = w - resolveCoord(this._top, w)
                this._bottomPx = this._topPx - this._heightPx
            }
        } else {
            this._bottomPx = resolveCoord(this._bottom, w)
            this._topPx = w - resolveCoord(this._top, w)
            this._heightPx = this._topPx - this._bottomPx
        }
        this.eventResize.dispatch({
            width: this._widthPx,
            height: this._heightPx,
        })
    }
}

function resolveCoord(coord: TgdFrameCoord | undefined, size: number) {
    if (coord === undefined) return 0
    if (typeof coord === "number") return coord

    return size * 1e-2 * coord[0]
}
