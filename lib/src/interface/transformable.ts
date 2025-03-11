import { TgdMat4 } from "@tgd/math"

export interface TgdInterfaceTransformable {
    transfo: Readonly<{ matrix: TgdMat4 }>
}

export interface TgdInterfaceTransformablePainter {
    transfo: Readonly<{ matrix: TgdMat4 }>
    delete(): void
    paint(time: number, delay: number): void
}