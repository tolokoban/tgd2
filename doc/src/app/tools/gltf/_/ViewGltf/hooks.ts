import { TgdDataGlb, tgdLoadArrayBuffer } from "@tolokoban/tgd"
import React from "react"

// import DefaultURL from "./danatia.glb"
// import DefaultURL from "./apple.glb"
import DefaultURL from "@/assets/mesh/helmet.glb"

export function useData(): [TgdDataGlb | null, (urlOrFile: string | File) => void] {
    const [data, setData] = React.useState<TgdDataGlb | null>(null)
    const load = React.useCallback((urlOrFile: string | File) => {
        setData(null)
        tgdLoadArrayBuffer(urlOrFile)
            .then((content) => {
                if (!content) return

                TgdDataGlb.parse(content).then(setData)
            })
            .catch(console.error)
    }, [])
    React.useEffect(() => load(DefaultURL), [load])
    return [data, load]
}
