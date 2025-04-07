import React from "react"
import { tgdLoadArrayBuffer, TgdDataGlb } from "@tolokoban/tgd"

import DefaultURL from "./danatia.glb"
// import DefaultURL from "./apple.glb"

export function useData(): [
    TgdDataGlb | null,
    (urlOrFile: string | File) => void
] {
    const [data, setData] = React.useState<TgdDataGlb | null>(null)
    const load = React.useCallback(
        (urlOrFile: string | File) => {
            tgdLoadArrayBuffer(urlOrFile)
                .then(content => {
                    if (!content) return

                    const parser = new TgdDataGlb(content)
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
