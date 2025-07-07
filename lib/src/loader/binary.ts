import { TgdDataGlb } from "@tgd/parser"

export async function tgdLoadGlb(
    urlOrFile: string | File
): Promise<TgdDataGlb | null> {
    try {
        if (urlOrFile instanceof File) {
            const data = await urlOrFile.arrayBuffer()
            return TgdDataGlb.parse(data)
        }

        const resp = await fetch(urlOrFile)
        if (!resp.ok) {
            throw new Error(
                `Unable to load GLB from url "${urlOrFile}"!\nError #${resp.status}: ${resp.statusText}`
            )
        }
        const data = await resp.arrayBuffer()
        return TgdDataGlb.parse(data)
    } catch (error) {
        console.error("Unable to load GLB:", urlOrFile)
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
        console.error("Unable to fetch ArrayBuffer:", urlOrFile)
        console.error(error)
        return null
    }
}

export async function tgdLoadText(
    urlOrFile: string | File
): Promise<string | null> {
    if (urlOrFile instanceof File) {
        return await urlOrFile.text()
    }
    try {
        const resp = await fetch(urlOrFile)
        const data = await resp.text()
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}
