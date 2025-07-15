import { TgdContext } from "@tgd/context"
import { TgdGeometry } from "@tgd/geometry"
import { TgdTexture2D } from "@tgd/texture"
import { webglPresetBlend, webglPresetCull, webglPresetDepth } from "@tgd/utils"
import { TgdMaterialGhost, TgdMaterialGhostOptions } from "@tgd/material"
import { TgdPainterMesh } from "../mesh"
import { TgdPainter } from "../painter"
import { TgdPainterState } from "../state"
import { TgdPainterClear } from "../clear"
import { TgdPainterBackground } from "./background"
import { TgdPainterFramebufferWithAntiAliasing } from "../framebuffer-msaa"
import { TgdCamera } from "@tgd/camera"
// import { TgdPainterFramebuffer } from "../framebuffer"

export interface TgdPainterXRayOptions extends TgdMaterialGhostOptions {
    geometry: TgdGeometry
}

export class TgdPainterXRay extends TgdPainter {
    private readonly texture: TgdTexture2D
    private readonly painterMesh: TgdPainter
    private readonly painterFB: TgdPainterFramebufferWithAntiAliasing
    private readonly painterClear: TgdPainterClear
    private readonly painterState: TgdPainterState
    private readonly painterBackground: TgdPainterBackground

    constructor(
        private readonly context: {
            gl: WebGL2RenderingContext
            width: Readonly<number>
            height: Readonly<number>
            camera: TgdCamera
            paint?: () => void
        },
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
        this.painterFB = new TgdPainterFramebufferWithAntiAliasing(context, {
            depthBuffer: true,
            children: [this.painterClear, this.painterState],
            textureColor0: this.texture,
        })
        this.painterBackground = new TgdPainterBackground(context, {
            texture: this.texture,
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
        TgdPainterState.do(
            {
                gl: context.gl,
                blend: webglPresetBlend.add,
                depth: webglPresetDepth.off,
                cull: webglPresetCull.off,
            },
            () => {
                painterBackground.paint()
            }
        )
    }
}
