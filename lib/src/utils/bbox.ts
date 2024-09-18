import { TgdDataset } from "@tgd/dataset"
import { TgdVec3 } from "@tgd/math"

/**
 * Compute the bounding box of a Dataset.
 * @param dataset
 * @param attPositionName Name of an atttribute of type `vec3` holding the vertices positions.
 * @param minVector If specified, it will hold the min bounding box value.
 * @param maxVector If specified, it will hold the max bounding box value.
 * @returns
 */
export function tgdComputeBoundingBox3D(
    dataset: Readonly<TgdDataset>,
    attPositionName = "POSITION",
    minVector?: TgdVec3,
    maxVector?: TgdVec3
): {
    min: Readonly<TgdVec3>
    max: Readonly<TgdVec3>
} {
    const { get } = dataset
        .assertAttribType(attPositionName, "vec3", "vec4")
        .getAttribAccessor(attPositionName)
    const min = minVector ?? new TgdVec3()
    min.reset(get(0, 0), get(0, 1), get(0, 2))
    const max = maxVector ?? new TgdVec3()
    max.from(min)
    for (let index = 1; index < dataset.count; index++) {
        const x = get(index, 0)
        const y = get(index, 1)
        const z = get(index, 2)
        min.x = Math.min(min.x, x)
        max.x = Math.max(max.x, x)
        min.y = Math.min(min.y, y)
        max.y = Math.max(max.y, y)
        min.z = Math.min(min.z, z)
        max.z = Math.max(max.z, z)
    }
    return { min, max }
}
