import { isString } from "@tgd/types/guards"

const cache = new Map<string, Promise<FontFace>>()

/**
 * Load a font and register it, so it can be used in a canvas
 * (`CanvasRenderingContext2D` or `OffscreenCanvasRenderingContext2D`).
 * It also works in a Web Worker.
 *
 * As soon as the promise resolves, the font is ready to be used.
 * Set `ctx.font` after that, because text drawn before will use a fallback font.
 *
 * ```ts
 * await tgdLoadFont("MyFont", "https://example.com/myFont.woff2")
 * const ctx = canvas.getContext("2d")
 * ctx.font = "24px MyFont"
 * ctx.fillText("Hello world!", 100, 100)
 * ```
 *
 * Several files can share the same family name if they have different descriptors:
 *
 * ```ts
 * await Promise.all([
 *     tgdLoadFont("MyFont", "https://example.com/myFont-Regular.woff2"),
 *     tgdLoadFont("MyFont", "https://example.com/myFont-Bold.woff2", { weight: "bold" }),
 * ])
 * ctx.font = "bold 24px MyFont"
 * ```
 *
 * Loading from a URL is cached: calling this function again with the same arguments
 * returns the same promise. A failed load is not cached, so you can try again.
 * Loading from an `ArrayBuffer` is never cached.
 *
 * @param name The family name to use in `ctx.font`.
 * Quote it there if it contains spaces: `ctx.font = '24px "My Font"'`.
 * @param urlOrData URL of the font file, or its content.
 * @param descriptors Optional descriptors (`weight`, `style`, `unicodeRange`, ...).
 * They tell the browser which variant of the family this file is.
 */
export function tgdLoadFont(
    name: string,
    urlOrData: string | ArrayBuffer,
    descriptors?: FontFaceDescriptors,
): Promise<FontFace> {
    if (!isString(urlOrData)) return loadFont(name, urlOrData, descriptors)

    const key = `${name}\n${urlOrData}\n${JSON.stringify(descriptors ?? {})}`
    const fromCache = cache.get(key)
    if (fromCache) return fromCache

    const font = loadFont(name, urlOrData, descriptors)
    cache.set(key, font)
    font.catch(() => cache.delete(key))
    return font
}

async function loadFont(name: string, urlOrData: string | ArrayBuffer, descriptors?: FontFaceDescriptors) {
    const face = new FontFace(name, isString(urlOrData) ? `url("${urlOrData}")` : urlOrData, descriptors)
    const font = await face.load()
    const fonts = (globalThis as any).document?.fonts ?? (globalThis as any).fonts
    fonts.add(font)
    return font
}
