import { TgdVec2, TgdVec3, TgdVec4 } from "@tgd/math"

export function ensureArray<T>(items: T | T[] | undefined): T[] {
    if (items === undefined) return []
    return Array.isArray(items) ? items : [items]
}

export function ensureTgdVec3(vec?: TgdVec2 | TgdVec3 | TgdVec4 | number[] | number | null): TgdVec3 {
    if (typeof vec === "number") return new TgdVec3(vec, vec, vec)
    if (!vec) return new TgdVec3(0, 0, 0)
    if (vec instanceof TgdVec2) return new TgdVec3(vec.x, vec.y, 0)
    if (vec instanceof TgdVec3) return vec
    if (vec instanceof TgdVec4) return new TgdVec3(vec.x, vec.y, vec.z)
    const [x, y, z] = vec
    return new TgdVec3(x ?? 0, y ?? 0, z ?? 0)
}
