import { tgdCanvasCreate } from "@tgd/utils"
import { TgdContext } from "@tgd/context"
import { TgdPainterGroup } from "../group"
import { createSprites } from "./tips"
import { TgdTexture2D } from "@tgd/texture"
import { TgdPainterSprites } from "../sprites"
import { TgdDebugPainterHierarchy, TgdPainter } from "../painter"
import { TgdCameraPerspective } from "@tgd/camera"
import { TgdPainterState } from "../state"
import { TgdPainterClear } from "../clear"
import { TgdPainterFramebufferWithAntiAliasing } from "../framebuffer-msaa"
import { TgdPainterOverlay } from "../overlay"
import { TgdPainterGroupCamera } from "../group-camera"

export interface TgdPainterGizmoOptions {
    alignX: number
    alignY: number
    size: number
    margin: number
}

export class TgdPainterGizmo extends TgdPainter {
    public camera = new TgdCameraPerspective({
        name: "Gizmo/Camera",
    })
    public alignX
    public alignY
    public size
    public margin

    private readonly group = new TgdPainterGroup({ name: "Gizmo/Group" })
    private textureTips: TgdTexture2D | null = null
    private readonly textureFramebuffer: TgdTexture2D
    private overlay: TgdPainterOverlay | null = null

    constructor(
        private readonly context: TgdContext,
        { alignX = +1, alignY = +1, size = 128, margin = 0 }: Partial<TgdPainterGizmoOptions> = {},
    ) {
        super()
        this.alignX = alignX
        this.alignY = alignY
        this.size = size
        this.margin = margin
        this.name = "Gizmo"
        this.textureFramebuffer = new TgdTexture2D(context, {
            load: tgdCanvasCreate(size, size),
            params: {
                minFilter: "NEAREST",
                magFilter: "NEAREST",
            },
        })
        createSprites(context).then(this.init)
    }

    private readonly init = ({ tips }: { tips: TgdPainterSprites }) => {
        const { context, group, size, alignX, alignY, camera } = this
        this.textureTips = tips.texture
        group.removeAll()
        const clear = new TgdPainterClear(context, {
            color: [0, 0, 0, 0],
            depth: 1,
        })
        const state = new TgdPainterState(context, {
            depth: "less",
            children: [tips],
        })
        const framebuffer = new TgdPainterFramebufferWithAntiAliasing(context, {
            name: "Framebuffer",
            depthBuffer: true,
            textureColor0: this.textureFramebuffer,
            children: [clear, state],
            fixedSize: [size, size],
        })
        const overlay = new TgdPainterOverlay(context, {
            alignX,
            alignY,
            scaleY: -1,
            width: size,
            height: size,
            margin: 0,
            texture: framebuffer.textureColor0,
        })
        this.overlay = overlay
        const groupCamera = new TgdPainterGroupCamera(context, {
            camera,
            children: [framebuffer],
        })
        group.add(groupCamera, overlay)
        context.paint()
        context.debugHierarchy()
    }

    delete(): void {
        this.textureTips?.delete()
        this.textureTips = null
        this.group.delete()
    }

    paint(time: number, delta: number): void {
        const { context, camera, group, size } = this
        camera.screenWidth = size
        camera.screenHeight = size
        camera.fitSpaceAtTarget(3, 3)
        camera.transfo.orientation = context.camera.transfo.orientation
        group.paint(time, delta)
    }

    get hierarchy(): TgdDebugPainterHierarchy {
        return {
            [this.name]: [this.group.hierarchy],
        }
    }
}
