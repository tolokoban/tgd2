import { TgdMat4 } from "@tgd/math"

export interface TgdInterfaceTransformable {
    transfo: Readonly<{ matrix: TgdMat4 }>
}
