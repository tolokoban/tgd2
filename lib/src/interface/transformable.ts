import { TgdMat4 } from "@tgd/math"
import { isType } from "@tgd/types/guards"

export interface TgdInterfaceTransformable {
    transfo: Readonly<{ matrix: TgdMat4 }>
}

export interface TgdInterfaceTransformablePainter extends TgdInterfaceTransformable {
    name?: string
    delete?(): void
    paint?(time: number, delta: number): void
}

export function isTgdInterfaceTransformablePainter(data: unknown): data is TgdInterfaceTransformablePainter {
    if (
        !isType(data, {
            transfo: {
                matrix: "unknown",
            },
            name: ["?", "string"],
            delete: ["?", "function"],
            paint: ["?", "function"],
        })
    )
        return false

    return data.transfo.matrix instanceof TgdMat4
}
