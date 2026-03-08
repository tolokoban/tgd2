import { tgdCanvasCreate } from "@tgd/utils"
import { TgdContext } from "@tgd/context"
import { TgdPainterGroup } from "../group"
import { createTipsPainter } from "./tips"
import { TgdTexture2D } from "@tgd/texture"
import { TgdDebugPainterHierarchy, TgdPainter } from "../painter"
import { TgdCameraPerspective } from "@tgd/camera"
import { TgdPainterState } from "../state"
import { TgdPainterClear } from "../clear"
import { TgdPainterFramebufferWithAntiAliasing } from "../framebuffer-msaa"
import { TgdPainterOverlay } from "../overlay"
import { TgdPainterGroupCamera } from "../group-camera"
import { TgdInputPointerEventMove } from "@tgd/types"
import { PainterTipsNormal } from "./painters/normal"

export interface TgdPainterGizmoOptions {
    alignX: number
    alignY: number
    size: number
    margin: number
}

export class TgdPainterGizmo extends TgdPainter {
    public camera = new TgdCameraPerspective({
        name: "Gizmo/Camera",
        near: 0.1,
        far: 10,
    })
    public alignX
    public alignY
    public size
    public margin

    private readonly group = new TgdPainterGroup({ name: "Gizmo/Group" })
    private readonly textureFramebuffer: TgdTexture2D
    private overlay: TgdPainterOverlay | null = null
    private contextOffscreen: TgdContext | null = null

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
        createTipsPainter(context).then(this.init)
    }

    private readonly init = ({ tipsNormal, tipsMask }: { tipsNormal: PainterTipsNormal; tipsMask: TgdPainter }) => {
        const { context, group, size, alignX, alignY, camera } = this
        console.log(camera.near, camera.far)
        group.removeAll()
        const clear = new TgdPainterClear(context, {
            color: [0.3, 0.2, 0.1, 0],
            depth: 1,
        })
        const state = new TgdPainterState(context, {
            depth: "less",
            blend: "off",
            cull: "off",
            children: [
                new TgdPainterGroupCamera(context, {
                    camera,
                    children: [clear, tipsNormal],
                }),
            ],
        })
        const framebuffer = new TgdPainterFramebufferWithAntiAliasing(context, {
            name: "Framebuffer",
            depthBuffer: true,
            textureColor0: this.textureFramebuffer,
            children: [state],
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
        group.add(framebuffer, overlay)
        context.paint()
        // Offscreen
        const contextOffscreen = new TgdContext(new OffscreenCanvas(size, size), {
            preserveDrawingBuffer: true,
            antialias: false,
            alpha: false,
        })
        contextOffscreen.add(
            new TgdPainterState(contextOffscreen, {
                depth: "less",
                blend: "off",
                cull: "off",
                children: [
                    new TgdPainterGroupCamera(context, {
                        camera,
                        children: [new TgdPainterClear(contextOffscreen, { color: [0, 0, 0, 1], depth: 1 }), tipsMask],
                    }),
                ],
            }),
        )
        contextOffscreen.camera = camera
        this.contextOffscreen = contextOffscreen
        overlay.eventPointerHover.addListener((evt: TgdInputPointerEventMove) => {
            const [red] = contextOffscreen.readPixel(evt.current.x, evt.current.y)
            const index = Math.floor((red * 8) / 0xff) - 1
            console.log("🐞 [gizmo@120] index =", index) // @FIXME: Remove this line written on 2026-03-08 at 18:56
            if (tipsNormal.index !== index) {
                tipsNormal.index = index
                context.paint()
            }
        })
    }

    delete(): void {
        this.group.delete()
    }

    paint(time: number, delta: number): void {
        const { context, contextOffscreen, camera, group, size } = this
        camera.screenWidth = size
        camera.screenHeight = size
        camera.fitSpaceAtTarget(3, 3)
        camera.transfo.orientation = context.camera.transfo.orientation
        group.paint(time, delta)
        // Offscreen
        contextOffscreen?.paint()
    }

    get hierarchy(): TgdDebugPainterHierarchy {
        return {
            [this.name]: [this.group.hierarchy],
        }
    }
}
