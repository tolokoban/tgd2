import { tgdCanvasCreateFill, tgdCanvasFromImage } from "@tgd/utils"

/**
 * Try to load an image and return `null` in case of failure.
 * @param url URL of the image to load.
 */
export function tgdLoadImage(url: string): Promise<HTMLImageElement | null> {
    return new Promise((resolve) => {
        const img = new Image()
        img.addEventListener("load", () => resolve(img))
        img.addEventListener("error", () => {
            console.error("Unable to load image:", url)
            resolve(null)
        })
        img.src = url
    })
}

export function tgdLoadImageFromArrayBuffer(
    buffer: ArrayBuffer
): Promise<HTMLImageElement | null> {
    return new Promise((resolve) => {
        const blob = new Blob([buffer])
        const url = URL.createObjectURL(blob)
        const img = new Image()
        img.addEventListener("load", () => {
            URL.revokeObjectURL(url)
            resolve(img)
        })
        img.addEventListener("error", () => {
            URL.revokeObjectURL(url)
            console.error("Unable to load image:", url)
            resolve(null)
        })
        img.src = url
    })
}

export function tgdLoadImages(
    urls: string[]
): Promise<Array<HTMLImageElement | null>> {
    return Promise.all<HTMLImageElement | null>(
        urls.map((url) => tgdLoadImage(url))
    )
}

/**
 * The image will have the size specified in the SVG tag.
 * @param svg Content of a SVG image.
 */
export function tgdLoadImageFromSvg(svg: string): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
        const img = new Image()
        console.log("🚀 [image] svg =", svg) // @FIXME: Remove this line written on 2025-09-17 at 10:20
        const encoder = new TextEncoder()
        const bytes = encoder.encode(svg)
        const binString = Array.from(bytes, (byte) =>
            String.fromCodePoint(byte)
        ).join("")
        console.log("🚀 [image] binString =", binString) // @FIXME: Remove this line written on 2025-09-17 at 14:03
        const base64 = btoa(binString)
        console.log("🚀 [image] base64 =", base64) // @FIXME: Remove this line written on 2025-09-17 at 10:20
        const url = `data:image/svg+xml;base64,${base64}`
        console.log("🚀 [image] url =", url) // @FIXME: Remove this line written on 2025-09-17 at 10:16
        img.addEventListener("load", function () {
            const canvas = tgdCanvasFromImage(img)
            canvas.style.background = "#888"
            canvas.style.position = "fixed"
            canvas.style.zIndex = "9999"
            document.body.appendChild(canvas)
            console.log("🚀 [image] canvas =", canvas) // @FIXME: Remove this line written on 2025-09-17 at 10:01
            resolve(img)
            // DOMURL.revokeObjectURL(url)
        })
        img.addEventListener("error", () => {
            console.error("Unable to load image from svg:", url)
            console.debug("SVG:", svg)
            resolve(img)
        })
        img.src = url
    })
}

export function tgdLoadImageFromElement(
    element: Element
): Promise<HTMLImageElement> {
    const width = element.scrollWidth
    const height = element.scrollHeight
    // const html = element.innerHTML
    const html = "<h1>Hello world!</h1>"
    return tgdLoadImageFromSvg(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <foreignObject width="100%" height="100%">${html}</foreignObject>
</svg>`)
}

export async function tgdLoadCanvas(
    url: string
): Promise<HTMLCanvasElement | null> {
    const img = await tgdLoadImage(url)
    if (!img) return null

    const canvas = document.createElement("canvas")
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight
    const context = canvas.getContext("2d")
    if (!context) throw new Error("Unable to get a 2D context!")

    context.drawImage(img, 0, 0)
    return canvas
}
