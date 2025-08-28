import { ArrayNumber3 } from "@tolokoban/tgd"

export interface Palette {
    name: string
    a: ArrayNumber3
    b: ArrayNumber3
    c: ArrayNumber3
    d: ArrayNumber3
}

export const PALETTES: Readonly<Palette[]> = [
    {
        name: "Hue Wheel",
        a: [0.5, 0.5, 0.5],
        b: [0.5, 0.5, 0.5],
        c: [1, 1, 1],
        d: [0, 0.33, 0.67],
    },
    {
        name: "Brown to Blue",
        a: [0.5, 0.5, 0.5],
        b: [0.5, 0.5, 0.5],
        c: [1, 1, 1],
        d: [0, 0.1, 0.2],
    },
    {
        name: "Greenish Pink",
        a: [0.5, 0.5, 0.5],
        b: [0.5, 0.5, 0.5],
        c: [1, 1, 1],
        d: [0.3, 0.2, 0.2],
    },
    {
        name: "Yellow Power",
        a: [0.5, 0.5, 0.5],
        b: [0.5, 0.5, 0.5],
        c: [1, 1, 0.5],
        d: [0.8, 0.9, 0.3],
    },
    {
        name: "Purple and Orange",
        a: [0.5, 0.5, 0.5],
        b: [0.5, 0.5, 0.5],
        c: [1, 0.7, 0.4],
        d: [0, 0.15, 0.2],
    },
    {
        name: "Fushia Column",
        a: [0.5, 0.5, 0.5],
        b: [0.5, 0.5, 0.5],
        c: [2, 1, 0],
        d: [0.5, 0.2, 0.25],
    },
    {
        name: "Flesh & Bones",
        a: [0.8, 0.5, 0.4],
        b: [0.2, 0.4, 0.2],
        c: [2, 1, 1],
        d: [0, 0.25, 0.25],
    },
    {
        name: "Gold & Copper",
        a: [0.62, 0.62, 0.62],
        b: [0.74, 0.502, 0.502],
        c: [1, 0.702, 0.35],
        d: [0, 0.149, 0.35],
    },
]
