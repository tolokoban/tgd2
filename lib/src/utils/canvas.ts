/**
 * Helper to get a canvas with the given size.
 */
export function tgdCanvasCreate(
    width: number,
    height: number
): HTMLCanvasElement {
    const canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    return canvas
}

/**
 * Helper to get a canvas of the given size and a 2D context on it.
 * If this is not possible, the method will throw an exception.
 */
export function tgdCanvasCreateWithContext2D(
    width: number,
    height: number,
    settings?: CanvasRenderingContext2DSettings
): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
    const canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext("2d", settings)
    if (!ctx) throw Error("Unable to create 2D context!")

    return { canvas, ctx }
}

/**
 * A palette is an image with a different (or not) color for each pixel.
 * It can be used in a texture with NEAREST filter, for instance.
 * @param colors CSS colors of each pixel
 * @param colums If not defined, the canvas will have a size of (colors.length, 1).
 * But if `colums` is defined, it will be the width of the vanva and the height will
 * be computed to hold all the colors.
 * If there are more pixels in the canvas that colors, we just wrap around the colors
 * array.
 * @param rows If defined, it will be the height of the canvas.
 * @example
 * ```
 * // Create a 5x5 checkboard.
 * const canvas = tgdCanvasCreatePalette(["#000", "#fff"], 5, 5)
 * ```
 */
export function tgdCanvasCreatePalette(colors: string[], colums = 0, rows = 0) {
    const width = colums > 0 ? colums : colors.length
    const height = rows > 0 ? rows : Math.ceil(colors.length / width)
    const { canvas, ctx } = tgdCanvasCreateWithContext2D(width, height)
    let i = 0
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            ctx.fillStyle = colors[i % colors.length]
            ctx.fillRect(x, y, 1, 1)
            i++
        }
    }
    return canvas
}

export function tgdCanvasCreateGradientHorizontal(
    size: number,
    colors: string[]
) {
    return tgdCanvasCreateGradient(size, 1, 1, 0, colors)
}

export function tgdCanvasCreateCreateGradientvertical(
    size: number,
    colors: string[]
) {
    return tgdCanvasCreateGradient(1, size, 0, 1, colors)
}

/**
 * Create a canvas with a linear gradient.
 * @param width Width of the resulting canvas.
 * @param height Height of the resulting canvas.
 * @param dirX X coord of the direction vector.
 * @param dirY Y coord of the direction vector.
 * @param colors CSS colors of each step
 */
export function tgdCanvasCreateGradient(
    width: number,
    height: number,
    dirX: number,
    dirY: number,
    colors: string[]
) {
    const { canvas, ctx } = tgdCanvasCreateWithContext2D(width, height)
    const gradient = ctx.createLinearGradient(0, 0, width * dirX, height * dirY)
    for (let i = 0; i < colors.length; i++) {
        gradient.addColorStop(i / (colors.length - 1), colors[i])
    }
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
    return canvas
}
