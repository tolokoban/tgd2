import React from "react"
import {
    tgdLoadArrayBuffer,
    TgdParserGLTransfertFormatBinary,
} from "@tolokoban/tgd"

// import DefaultURL from "./danatia.glb"
import DefaultURL from "./apple.glb"

export function useData(): [
    TgdParserGLTransfertFormatBinary | null,
    (urlOrFile: string | File) => void
] {
    const [data, setData] =
        React.useState<TgdParserGLTransfertFormatBinary | null>(null)
    const load = React.useCallback(
        (urlOrFile: string | File) => {
            tgdLoadArrayBuffer(urlOrFile)
                .then(content => {
                    if (!content) return

                    const parser = new TgdParserGLTransfertFormatBinary(content)
                    setData(parser)
                })
                .catch(console.error)
        },
        [setData]
    )
    React.useEffect(() => {
        load(DefaultURL)
    }, [])
    return [data, load]
}
