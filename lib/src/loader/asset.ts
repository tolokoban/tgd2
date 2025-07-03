import type { TgdDataGlb } from "@tgd/parser"
import { tgdLoadGlb } from "./binary"
import { tgdLoadImage } from "./image"

export async function tgdLoadAssets<GLB extends string, IMG extends string>(
    urls: Partial<{
        glb: Record<GLB, string>
        img: Record<IMG, string>
    }>
): Promise<{
    glb: Record<GLB, TgdDataGlb>
    img: Record<IMG, HTMLImageElement>
}> {
    const glb = {} as Record<GLB, TgdDataGlb>
    const img = {} as Record<IMG, HTMLImageElement>
    const tasks: Promise<void>[] = [
        ...getPromisedLoaders(tgdLoadGlb, urls.glb, glb),
        ...getPromisedLoaders(tgdLoadImage, urls.img, img),
    ]
    await Promise.all(tasks)
    return { glb, img }
}

function getPromisedLoaders<N extends string, V>(
    loader: (url: string) => Promise<V | null>,
    urls: Record<N, string> | undefined,
    target: Record<N, V>
) {
    return Object.keys(urls ?? {}).map(
        name =>
            new Promise<void>(resolve => {
                if (!urls) {
                    resolve()
                    return
                }
                const url = urls[name as N]
                if (!url) {
                    resolve()
                    return
                }

                loader(url)
                    .then(value => {
                        if (value) target[name as N] = value
                        resolve()
                    })
                    .catch(() => {
                        console.error("Unable to load URL", url)
                        resolve()
                    })
            })
    )
}
