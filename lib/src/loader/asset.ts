import { TgdParserGLTransfertFormatBinary } from "@tgd/parser"
import { tgdLoadGlb } from "./binary"

export async function tgdLoadAssets<GLB extends string>(urls: {
    glb?: Record<GLB, string>
}): Promise<{
    glb: Record<GLB, TgdParserGLTransfertFormatBinary>
}> {
    const result = {
        glb: {},
    } as {
        glb: Record<GLB, TgdParserGLTransfertFormatBinary>
    }
    const glbNames = (urls.glb ? Object.keys(urls.glb) : []) as GLB[]
    const tasks: Promise<void>[] = [
        ...glbNames.map(
            name =>
                new Promise<void>(resolve => {
                    const url = urls.glb?.[name]
                    if (!url) {
                        resolve()
                        return
                    }

                    tgdLoadGlb(url)
                        .then(glb => {
                            if (glb) result.glb[name] = glb
                            resolve()
                        })
                        .catch(resolve)
                })
        ),
    ]
    await Promise.all(tasks)
    return result
}
