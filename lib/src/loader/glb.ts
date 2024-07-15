import { TgdParserGLTransfertFormatBinary } from "@tgd/parser"

export class TgdLoaderGlb {
    static async glb(
        url: string
    ): Promise<TgdParserGLTransfertFormatBinary | null> {
        try {
            const resp = await fetch(url)
            const data = await resp.arrayBuffer()
            const parser = new TgdParserGLTransfertFormatBinary(data)
            return parser
        } catch (ex) {
            console.error(ex)
            return null
        }
    }
}
