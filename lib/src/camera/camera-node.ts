import { TgdMat4 } from "@tgd/math"
import { TgdPainterNodeChild } from "@tgd/painter"
import { TgdCamera } from "./camera"

/**
 * This node holds a camera and move it according to its parent.
 *
 * Once in such a node, a camera cannot be moved directly.
 */
export class TgdCameraNode implements TgdPainterNodeChild {
    public readonly matrixTransfo = new TgdMat4()

    constructor(public camera: TgdCamera) {}

    paint(_time: number, _delay: number): void {
        this.camera.fromTransfo(this.matrixTransfo)
    }

    delete(): void {}
}
