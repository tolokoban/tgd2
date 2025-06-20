import { TgdContext } from "@tgd/context"
import { TgdGeometry } from "@tgd/geometry"
import { TgdPainterMesh } from "../mesh"
import { TgdMaterialGhost, TgdMaterialGhostOptions } from "@tgd/material"
import { TgdPainter } from "../painter"
import { TgdPainterState } from "../state"
import { webglPresetBlend, webglPresetCull, webglPresetDepth } from "@tgd/utils"
import { TgdPainterFramebuffer } from "../framebuffer"
import { TgdPainterClear } from "../clear"
import { TgdPainterBackground } from "../background"
import { TgdTexture2D } from "@tgd/texture"

export interface TgdPainterXRayOptions extends TgdMaterialGhostOptions {
    geometry: TgdGeometry
}

export class TgdPainterXRay extends TgdPainter {
    private readonly texture: TgdTexture2D
    private readonly painterMesh: TgdPainter
    private readonly painterFB: TgdPainterFramebuffer
    private readonly painterClear: TgdPainterClear
    private readonly painterState: TgdPainterState
    private readonly painterBackground: TgdPainterBackground

    constructor(
        private readonly context: TgdContext,
        options: TgdPainterXRayOptions
    ) {
        super()
        this.texture = new TgdTexture2D(context)
        const material = new TgdMaterialGhost(options)
        this.painterMesh = new TgdPainterMesh(context, {
            geometry: options.geometry,
            material,
        })
        this.painterState = new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            cull: webglPresetCull.back,
            children: [this.painterMesh],
        })
        this.painterClear = new TgdPainterClear(context, {
            color: [0, 0, 0, 1],
            depth: 1,
        })
        this.painterFB = new TgdPainterFramebuffer(context, {
            depthBuffer: true,
            children: [this.painterClear, this.painterState],
            textureColor0: this.texture,
        })
        this.painterBackground = new TgdPainterBackground(context, {
            texture: this.texture,
            scaleY: -1,
        })
    }

    delete(): void {
        this.painterMesh.delete()
        this.painterFB.delete()
        this.painterClear.delete()
        this.painterState.delete()
        this.painterBackground.delete()
        this.texture.delete()
    }

    paint(time: number, delay: number): void {
        const { context, painterFB, painterBackground } = this
        painterFB.paint(time, delay)
        painterBackground.texture = painterFB.textureColor0
        TgdPainterState.do(
            {
                gl: context.gl,
                blend: webglPresetBlend.add,
                depth: webglPresetDepth.off,
            },
            () => {
                painterBackground.paint()
            }
        )
    }
}
