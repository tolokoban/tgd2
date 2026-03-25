const cache = new Map<string, Promise<FontFace>>()

/**
 * If you want to use an external font in a canvas,
 * you will have tio load it first.
 *
 * ```ts
 * await tgdLoadFont("MyFont", "https://example.com/myFont.woff2")
 * const ctx = canvas.getContext("2d")
 * ctx.font = "24px MyFont"
 * ctx.fillText("Hello world!", 100, 100)
 * ```
 */
export function tgdLoadFont(name: string, url: string): Promise<FontFace> {
    const key = `${name}\n${url}`
    const fromCache = cache.get(key)
    if (fromCache) return fromCache

    const font = loadFont(name, url)
    cache.set(key, font)
    return font
}

async function loadFont(name: string, url: string) {
    const face = new FontFace(name, `url(${url})`)
    const font = await face.load()
    globalThis.document.fonts.add(font)
    return font
}
