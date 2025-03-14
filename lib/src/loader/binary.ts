import { TgdParserGLTransfertFormatBinary } from "@tgd/parser"

export async function tgdLoadGlb(
    url: string
): Promise<TgdParserGLTransfertFormatBinary | null> {
    try {
        const resp = await fetch(url)
        if (!resp.ok) {
            throw new Error(
                `Unable to load GLB from url "${url}"!\nError #${resp.status}: ${resp.statusText}`
            )
        }
        const data = await resp.arrayBuffer()
        const parser = new TgdParserGLTransfertFormatBinary(data)
        return parser
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function tgdLoadArrayBuffer(
    url: string
): Promise<ArrayBuffer | null> {
    try {
        const resp = await fetch(url)
        const data = await resp.arrayBuffer()
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}
