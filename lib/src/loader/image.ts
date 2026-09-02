import { tgdCanvasCreate, tgdCanvasFromImage } from "@tgd/utils"

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

export function tgdLoadImageFromArrayBuffer(buffer: ArrayBuffer): Promise<HTMLImageElement | null> {
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

export function tgdLoadImages(urls: string[]): Promise<Array<HTMLImageElement | null>> {
    return Promise.all<HTMLImageElement | null>(urls.map((url) => tgdLoadImage(url)))
}

/**
 * The image will have the size specified in the SVG tag.
 * @param svg XML content of a SVG image.
 */
export function tgdLoadCanvasFromSvg(svg: string): Promise<HTMLCanvasElement> {
    return new Promise((resolve) => {
        const img = new Image()
        const encoder = new TextEncoder()
        const bytes = encoder.encode(svg)
        const binString = Array.from(bytes, (byte) => String.fromCodePoint(byte)).join("")
        const base64 = btoa(binString)
        const url = `data:image/svg+xml;base64,${base64}`
        img.addEventListener("load", () => {
            resolve(tgdCanvasFromImage(img))
        })
        img.addEventListener("error", () => {
            console.error("Unable to load image from svg:", url)
            console.debug("SVG:", svg)
            resolve(tgdCanvasCreate(1, 1))
        })
        img.src = url
    })
}

export function tgdLoadCanvasFromElement(element: Element): Promise<HTMLCanvasElement> {
    const width = element.scrollWidth
    const height = element.scrollHeight
    const html = element.innerHTML
    return tgdLoadCanvasFromSvg(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <foreignObject width="100%" height="100%">${html}</foreignObject>
</svg>`)
}

export async function tgdLoadCanvas(url: string): Promise<HTMLCanvasElement | null> {
    const img = await tgdLoadImage(url)
    if (!img) return null

    const canvas = globalThis.document.createElement("canvas")
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight
    const context = canvas.getContext("2d")
    if (!context) throw new Error("Unable to get a 2D context!")

    context.drawImage(img, 0, 0)
    return canvas
}

/** 
 * As soon as this function is called, the webcam stream is attached to `video`
 * (if the user accepts it) and we return two functions: `takeSnapshot` to get a canvas with the current frame of the video,
 * and `cancel` to stop the stream from the camera and clean all up.
 * 
 * @param video The video element that will display the stream from the webcam.
 * @returns An object with two functions: `takeSnaphot(): HTMLCanvasElement` and `cancel(): void`.
 */
export function tgdLoadCanvasFromCamera(video: HTMLVideoElement) {
    return new Promise<null | {
        takeSnapshot(): HTMLCanvasElement
        cancel(): void
    }>((resolve) => {
        video.autoplay = true
        video.playsInline = true
        let stream: MediaStream | null = null
        const cancel = () => stream?.getTracks().forEach((t) => t.stop())
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((source) => {
                stream = source
                video.srcObject = source
                resolve({
                    takeSnapshot: () => {
                        const canvas = document.createElement("canvas")
                        canvas.width = video.videoWidth
                        canvas.height = video.videoHeight
                        const ctx = canvas.getContext("2d")
                        if (!ctx) throw new Error(`Unable to create a 2D context of size ${video.videoWidth}×${video.videoHeight}!`)

                        ctx.drawImage(video, 0, 0)
                        cancel()
                        return canvas
                    },
                    cancel
                })
            })
            .catch(() => {
                cancel()
                resolve(null)
            })
    })
}