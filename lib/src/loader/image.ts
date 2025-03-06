/**
 * Try to load an image and return `null` in case of failure.
 * @param url URL of the image to load.
 */
export async function tgdLoadImage(
    url: string
): Promise<HTMLImageElement | null> {
    return new Promise(resolve => {
        const img = new Image()
        img.addEventListener("load", () => resolve(img))
        img.addEventListener("error", () => {
            console.error("Unable to load image:", url)
            resolve(null)
        })
        img.src = url
    })
}

export async function tgdLoadImages(
    urls: string[]
): Promise<Array<HTMLImageElement | null>> {
    return Promise.all<HTMLImageElement | null>(
        urls.map(url => tgdLoadImage(url))
    )
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
