import { TgdMat4 } from "@tgd/math"

export interface TgdInterfaceTransformable {
    transfo: Readonly<{ matrix: TgdMat4 }>
}

export interface TgdInterfaceTransformablePainter extends TgdInterfaceTransformable {
    name?: string
    delete?(): void
    paint?(time: number, delta: number): void
}
