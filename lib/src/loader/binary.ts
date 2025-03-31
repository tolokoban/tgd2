import { TgdParserGLTransfertFormatBinary } from "@tgd/parser"

export async function tgdLoadGlb(
    urlOrFile: string | File
): Promise<TgdParserGLTransfertFormatBinary | null> {
    try {
        if (urlOrFile instanceof File) {
            const data = await urlOrFile.arrayBuffer()
            return new TgdParserGLTransfertFormatBinary(data)
        }

        const resp = await fetch(urlOrFile)
        if (!resp.ok) {
            throw new Error(
                `Unable to load GLB from url "${urlOrFile}"!\nError #${resp.status}: ${resp.statusText}`
            )
        }
        const data = await resp.arrayBuffer()
        return new TgdParserGLTransfertFormatBinary(data)
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function tgdLoadArrayBuffer(
    urlOrFile: string | File
): Promise<ArrayBuffer | null> {
    if (urlOrFile instanceof File) {
        return await urlOrFile.arrayBuffer()
    }
    try {
        const resp = await fetch(urlOrFile)
        const data = await resp.arrayBuffer()
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}
