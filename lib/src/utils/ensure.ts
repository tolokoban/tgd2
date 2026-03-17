import { TgdColor } from "@tgd/color"
import { TgdVec2, TgdVec3, TgdVec4 } from "@tgd/math"

export function ensureArray<T>(items: T | T[] | undefined): T[] {
    if (items === undefined) return []
    return Array.isArray(items) ? items : [items]
}

export function ensureTgdVec3(
    vec?: TgdColor | TgdVec2 | TgdVec3 | TgdVec4 | number[] | number | null,
    defaultValue?: TgdVec3,
): TgdVec3 {
    if (typeof vec === "number") return new TgdVec3(vec, vec, vec)
    if (!vec) return defaultValue ?? new TgdVec3(0, 0, 0)
    if (vec instanceof TgdColor) return new TgdVec3(vec.R, vec.G, vec.B)
    if (vec instanceof TgdVec2) return new TgdVec3(vec.x, vec.y, 0)
    if (vec instanceof TgdVec3) return vec
    if (vec instanceof TgdVec4) return new TgdVec3(vec.x, vec.y, vec.z)
    const [x, y, z] = vec
    return new TgdVec3(x ?? 0, y ?? 0, z ?? 0)
}

export function ensureTgdVec4(
    vec?: TgdColor | TgdVec2 | TgdVec3 | TgdVec4 | number[] | number | null,
    defaultValue?: TgdVec4,
): TgdVec4 {
    if (typeof vec === "number") return new TgdVec4(vec, vec, vec, vec)
    if (!vec) return defaultValue ?? new TgdVec4()
    if (vec instanceof TgdColor) return new TgdVec4(vec.R, vec.G, vec.B, vec.A)
    if (vec instanceof TgdVec2) return new TgdVec4(vec.x, vec.y, 0, 1)
    if (vec instanceof TgdVec3) return new TgdVec4(vec.x, vec.y, vec.z, 1)
    if (vec instanceof TgdVec4) return vec
    const [x, y, z, w] = vec
    return new TgdVec4(x ?? 0, y ?? 0, z ?? 0, w ?? 1)
}
