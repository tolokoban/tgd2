import { tgdCalcClamp, tgdCalcModulo } from "@tgd/utils"

export class TgdColor {
    static fromHSL(H: number, S: number, L: number): TgdColor {
        const color = new TgdColor()
        color.H = H
        color.S = S
        color.L = L
        color.hsl2rgb()
        return color
    }

    /** Red [0..1] */
    private _R: number = 1

    /** Green [0..1] */
    private _G: number = 1

    /** Blue [0..1] */
    private _B: number = 1

    /** Alpha [0..1] */
    private _A: number = 1

    /** Hue [0..1] */
    private _H: number = 1

    /** Saturation [0..1] */
    private _S: number = 1

    /** Lumimance [0..1] */
    private _L: number = 1

    constructor(r: number | string = 0, g = 0, b = 0, a = 1) {
        if (typeof r === "string") {
            this.parse(r)
        } else {
            this.R = r
            this.G = g
            this.B = b
            this.A = a
        }
    }

    get R() {
        return this._R
    }
    set R(v: number) {
        this._R = tgdCalcClamp(v, 0, 1)
    }

    get G() {
        return this._G
    }
    set G(v: number) {
        this._G = tgdCalcClamp(v, 0, 1)
    }

    get B() {
        return this._B
    }
    set B(v: number) {
        this._B = tgdCalcClamp(v, 0, 1)
    }

    get A() {
        return this._A
    }
    set A(v: number) {
        this._A = tgdCalcClamp(v, 0, 1)
    }

    get H() {
        return this._H
    }
    set H(v: number) {
        this._H = tgdCalcModulo(v, 0, 1)
    }

    get S() {
        return this._S
    }
    set S(v: number) {
        this._S = tgdCalcClamp(v, 0, 1)
    }

    get L() {
        return this._L
    }
    set L(v: number) {
        this._L = tgdCalcClamp(v, 0, 1)
    }

    parse(color: string) {
        const context = getContext()
        context.clearRect(0, 0, 1, 1)
        context.fillStyle = color
        context.fillRect(0, 0, 1, 1)
        const bitmap = context.getImageData(0, 0, 1, 1)
        const [R, G, B, A] = bitmap.data
        const w = 1 / 255
        this.R = R * w
        this.G = G * w
        this.B = B * w
        this.A = A * w
    }

    toString() {
        const { R, G, B, A } = this
        return `#${hex(R)}${hex(G)}${hex(B)}${hex(A)}`
    }

    public rgb2hsl(): this {
        const R = this.R
        const G = this.G
        const B = this.B

        const min = Math.min(R, G, B)
        const max = Math.max(R, G, B)
        const delta = max - min

        this.L = HALF * (max + min)

        if (delta < EPSILON) {
            this.H = 0
            this.S = 0
        } else {
            this.S = delta / (1 - Math.abs(this.L + this.L - 1))
            if (max === R) {
                this.H =
                    G >= B
                        ? INV_6 * ((G - B) / delta)
                        : INV_6 * ((B - G) / delta)
            } else if (max === G) {
                this.H = INV_6 * (VAL_2 + (B - R) / delta)
            } else {
                this.H = INV_6 * (VAL_4 + (R - G) / delta)
            }
        }
        return this
    }

    public hsl2rgb(): this {
        const H = VAL_6 * this.H
        const S = this.S
        const L = this.L
        const chroma = (1 - Math.abs(L + L - 1)) * S
        const { R, G, B } = convertToRGB(H, chroma)
        const shift = L - chroma * HALF
        this.R = R + shift
        this.G = G + shift
        this.B = B + shift
        return this
    }
}

const EPSILON = 1e-6
const HALF = 0.5
const VAL_1 = 1
const VAL_2 = 2
const VAL_3 = 3
const VAL_4 = 4
const VAL_5 = 5
const VAL_6 = 6
const INV_6 = 1 / VAL_6

/**
 * This is an helper function for the method `hsl2rgb()`.
 * @param H Hue [0..6]
 * @param chroma Chrominance
 * @param x
 */
function convertToRGB(H: number, chroma: number) {
    let R = 0
    let G = 0
    let B = 0
    const x = chroma * (1 - Math.abs((H % VAL_2) - 1))
    if (H < VAL_3) {
        if (H < VAL_1) {
            R = chroma
            G = x
            B = 0
        } else if (H < VAL_2) {
            R = x
            G = chroma
            B = 0
        } else {
            // H == 2.
            R = 0
            G = chroma
            B = x
        }
    } else if (H < VAL_4) {
        R = 0
        G = x
        B = chroma
    } else if (H < VAL_5) {
        R = x
        G = 0
        B = chroma
    } else {
        R = chroma
        G = 0
        B = x
    }
    return { R, G, B }
}

function hex(value: number): string {
    return Math.floor(value * 255)
        .toString(16)
        .padStart(2, "0")
}

let globalContext: CanvasRenderingContext2D | null = null

function getContext(): CanvasRenderingContext2D {
    if (!globalContext) {
        const canvas: HTMLCanvasElement = document.createElement("canvas")
        canvas.width = 1
        canvas.height = 1
        const context = canvas.getContext("2d", {
            alpha: true,
            willReadFrequently: true,
        })
        if (!context) throw new Error("Unable to create a 2D context!")

        globalContext = context
    }
    return globalContext
}
