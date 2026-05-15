import { TgdDataset } from "@tgd/dataset"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import { TgdPainter } from "../painter"
import { TgdContext } from "@tgd/context"

export interface TgdPainterParticlesOptions {
    name?: string
    dataset: TgdDataset
    shaderTransform: TgdShaderVertex
    shaderVertex: TgdShaderVertex
    shaderFragment: TgdShaderFragment
}

export class TgdPainterParticles extends TgdPainter {
    protected static counter = 0

    public readonly counter = TgdPainterParticles.counter++

    constructor(
        public readonly content: TgdContext,
        options: TgdPainterParticlesOptions,
    ) {
        super()
        this.name = options.name ?? `TgdPainterParticles#${this.id}`
    }

    paint(time: number, delta: number): void {
        throw new Error("Method not implemented.")
    }

    delete(): void {
        throw new Error("Method not implemented.")
    }
}
