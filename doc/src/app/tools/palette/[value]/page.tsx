import React from "react"
import { ArrayNumber3 } from "@tolokoban/tgd"

import { useRouteParamAsString } from "@/app/routes"
import { ViewPaletteEditor } from "./_PaletteEditor"

export default function Page() {
    const { a, b, d, c } = useParams()

    return <ViewPaletteEditor a={a} b={b} c={c} d={d} />
}

function useParams(): {
    a: ArrayNumber3
    b: ArrayNumber3
    c: ArrayNumber3
    d: ArrayNumber3
} {
    const value = useRouteParamAsString("value")
    return React.useMemo(() => {
        switch (value.length) {
            case 24:
                return parse24(value)
            default:
                return DEFAULT_PALETTE
        }
    }, [value]) as {
        a: ArrayNumber3
        b: ArrayNumber3
        c: ArrayNumber3
        d: ArrayNumber3
    }
}

function parse24(value: string) {
    if (value.length !== 24) return DEFAULT_PALETTE

    return {
        a: parse(value, 0),
        b: parse(value, 1),
        c: parse(value, 2),
        d: parse(value, 3),
    }
}

function parse(value: string, arrIdx: number): ArrayNumber3 {
    const stride = Math.floor(value.length / 4)
    const word = Math.floor(stride / 3)
    const max = Math.pow(16, word) - 1
    return [0, 1, 2].map((item) => {
        const index = arrIdx * stride + word * item
        const hex = `0x${value.slice(index, index + word)}`
        return parseInt(hex) / max
    }) as ArrayNumber3
}

const DEFAULT_PALETTE = {
    a: [0.5, 0.5, 0.5],
    b: [0.5, 0.5, 0.5],
    c: [1, 1, 1],
    d: [0, 0.33, 0.67],
}
