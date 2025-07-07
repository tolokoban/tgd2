import { tgdDataMarchingCubesConfigurations } from "@tolokoban/tgd"

/**
 * For each configuration, we create triangles.
 */
export const CONFIGURATIONS: Readonly<string[]> =
    tgdDataMarchingCubesConfigurations().map(arr =>
        arr.map(i => "ABCDEFGHIJKL".charAt(i)).join("")
    )
