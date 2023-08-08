export class TgdLoadImage {
    /**
     * Try to load an image and return `null` in case of failure.
     * @param url URL of the image to load.
     */
    static async load(url: string): Promise<HTMLImageElement | null> {
        return new Promise(resolve => {
            const img = new Image()
            img.onload = () => resolve(img)
            img.onerror = () => resolve(null)
            img.src = url
        })
    }
}
