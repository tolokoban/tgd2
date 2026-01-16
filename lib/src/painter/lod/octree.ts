import type { TgdCamera } from "@tgd/camera"
import type { TgdVec3 } from "@tgd/math"
import type { ArrayNumber3, ArrayNumber4 } from "@tgd/types"

export function listBBoxes(
    camera: TgdCamera,
    bbox: Readonly<{
        min: Readonly<ArrayNumber3 | TgdVec3>
        max: Readonly<ArrayNumber3 | TgdVec3>
    }>,
    levels: number,
    surfaceThreshold: number
): ArrayNumber4[] {
    const result: ArrayNumber4[] = []
    recursiveListBBoxes(
        result,
        camera,
        bbox,
        levels,
        0,
        0,
        0,
        0,
        surfaceThreshold
    )
    return result
}

function recursiveListBBoxes(
    result: ArrayNumber4[],
    camera: TgdCamera,
    bbox: Readonly<{
        min: Readonly<ArrayNumber3 | TgdVec3>
        max: Readonly<ArrayNumber3 | TgdVec3>
    }>,
    levels: number,
    x: number,
    y: number,
    z: number,
    level: number,
    surfaceThreshold: number
) {
    const visibility = camera.computeBoundingBoxVisibleSurface(bbox)
    if (visibility < 1e-8) return

    if (visibility < surfaceThreshold * 4 || level >= levels) {
        result.push([x, y, z, level])
        return
    }

    // We split the BBox in 8 sub boxes.
    const [x0, y0, z0] = bbox.min
    const [x2, y2, z2] = bbox.max
    const x1 = (x0 + x2) / 2
    const y1 = (y0 + y2) / 2
    const z1 = (z0 + z2) / 2
    const nextLevel = level + 1
    const nextX = x * 2
    const nextY = y * 2
    const nextZ = z * 2
    const xMin = [x0, x1]
    const xMax = [x1, x2]
    const yMin = [y0, y1]
    const yMax = [y1, y2]
    const zMin = [z0, z1]
    const zMax = [z1, z2]
    for (let Z = 0; Z < 2; Z++) {
        for (let Y = 0; Y < 2; Y++) {
            for (let X = 0; X < 2; X++) {
                recursiveListBBoxes(
                    result,
                    camera,
                    {
                        min: [xMin[X], yMin[Y], zMin[Z]],
                        max: [xMax[X], yMax[Y], zMax[Z]],
                    },
                    levels,
                    nextX + X,
                    nextY + Y,
                    nextZ + Z,
                    nextLevel,
                    surfaceThreshold
                )
            }
        }
    }
}
