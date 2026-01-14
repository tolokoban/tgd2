import {
    type TgdContext,
    TgdGeometryBox,
    TgdPainter,
    TgdPainterMesh,
    TgdPainterNode,
    TgdPainterState,
    type TgdTexture2D,
    webglPresetDepth,
} from "@tolokoban/tgd"
import { SeaMaterial } from "./sea-material"

export class PainterSea extends TgdPainter {
    private readonly material: SeaMaterial
    private readonly sea: TgdPainterNode

    constructor(private readonly context: TgdContext) {
        super()
        this.material = new SeaMaterial(context)
        this.sea = new TgdPainterNode({
            children: [
                new TgdPainterMesh(context, {
                    geometry: new TgdGeometryBox({
                        sizeX: 1,
                        sizeY: 0.5,
                        sizeZ: 1,
                    }),
                    material: this.material,
                }),
            ],
        })
    }

    set texture(texture: TgdTexture2D) {
        this.material.texture = texture
    }

    set y(y: number) {
        this.sea.transfo.setPosition(0, y, 0)
    }

    delete(): void {
        throw new Error("Method not implemented.")
    }

    paint(time: number, delay: number): void {
        const { context, sea } = this
        TgdPainterState.do(
            {
                gl: context.gl,
                depth: webglPresetDepth.less,
            },
            () => {
                sea.transfo
                    .orbitAroundZ(delay * 0.8521)
                    .orbitAroundX(delay * 0.3764)
                sea.paint(time, delay)
            }
        )
    }
}
