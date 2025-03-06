/**
 * Try to load a video and return `null` in case of failure.
 * @param url URL of the image to load.
 */
export async function tgdLoadVideo(
    url: string
): Promise<HTMLVideoElement | null> {
    return new Promise(resolve => {
        const video = document.createElement("video")
        video.addEventListener("canplay", () => resolve(video))
        video.addEventListener("error", () => {
            console.error("Unable to load video:", url)
            resolve(null)
        })
        video.src = url
        video.setAttribute("loop", "")
        video.setAttribute("muted", "")
        video.setAttribute("autoplay", "")
        video.setAttribute("disablepictureinpicture", "")
    })
}
