import { TgdVec3 } from "@tgd/index"
import { TgdMaterial } from "@tgd/material"
import { TgdVec2 } from "@tgd/math"
import { ArrayNumber3 } from "@tgd/types"

export interface Section {
    roundness: number
    points: SectionPoint[]
}

export interface SectionPoint {
    pos: ArrayNumber3 | TgdVec3
    radius: number
    uv?: ArrayNumber3 | TgdVec2
}

export type TgdPainterTubesBranch = {
    roundness?: number
    children?: TgdPainterTubesBranch[]
} & SectionPoint

export type TgdPainterTubesOptions = {
    /**
     * Number of faces around the cylinder.
     * Min is 3.
     *
     * Default to **3**.
     */
    roundness?: number
    /**
     * With orthographic camera, this is a value in pixels.
     */
    minRadius?: number
    /**
     * Multiply all the radii by this value.
     *
     * Default to `1`.
     */
    radiusMultiplier?: number
    /**
     * Material to apply to the resulting mesh.
     */
    material?: TgdMaterial
    /**
     * Hierarchical data that makes the tubes.
     */
    branches: TgdPainterTubesBranch[]
}
