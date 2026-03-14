import { TgdCameraPerspective } from "@tgd/camera"
import { TgdContext } from "@tgd/context"
import { TgdMat3, TgdQuat, TgdVec3 } from "@tgd/math"
import { TgdTexture2D } from "@tgd/texture"
import { TgdAnimation, TgdInputPointerEventMove, TgdInputPointerEventTap } from "@tgd/types"
import { tgdActionCreateCameraInterpolation, tgdCanvasCreate } from "@tgd/utils"
import { TgdPainterClear } from "../clear"
import { TgdPainterFramebufferWithAntiAliasing } from "../framebuffer-msaa"
import { TgdPainterGroup } from "../group"
import { TgdPainterGroupCamera } from "../group-camera"
import { TgdPainterOverlay } from "../overlay"
import { TgdDebugPainterHierarchy, TgdPainter } from "../painter"
import { TgdPainterState } from "../state"
import { PainterTipsMask } from "./painters/mask"
import { PainterTipsNormal } from "./painters/normal"
import { TgdUniformBufferObject } from "@tgd/uniform"
import { PainterAxes } from "./painters/axes"
import { TgdEvent } from "@tgd/event"
import { TgdPainterFramebuffer } from "../framebuffer"

export interface TgdPainterGizmoOptions {
    alignX: number
    alignY: number
    size: number
    margin: number
}

export class TgdPainterGizmo extends TgdPainter {
    public readonly eventTap = new TgdEvent<Readonly<TgdVec3>>()
    public camera = new TgdCameraPerspective({
        name: "Gizmo/Camera",
        near: 0.1,
        far: 10,
    })
    public alignX
    public alignY
    public size
    public margin

    private group: TgdPainterGroup | null = null
    private readonly textureFramebuffer: TgdTexture2D
    private overlay: TgdPainterOverlay | null = null
    private contextOffscreen: TgdContext | null = null
    private readonly uniformCamera: TgdUniformBufferObject

    constructor(
        public readonly context: TgdContext,
        { alignX = +1, alignY = +1, size = 128, margin = 0 }: Partial<TgdPainterGizmoOptions> = {},
    ) {
        super()
        const uniformCamera = new TgdUniformBufferObject(context, {
            uniforms: {
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
            },
        })
        this.uniformCamera = uniformCamera
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
        PainterTipsNormal.create(context, { size, uniformCamera }).then(this.init)
    }

    private readonly init = (tipsNormal: PainterTipsNormal) => {
        const { context, size, alignX, alignY, camera, uniformCamera } = this
        console.log(camera.near, camera.far)
        const group = new TgdPainterState(context, {
            depth: "off",
            blend: "alpha",
        })
        this.group = group
        group.removeAll()
        const clear = new TgdPainterClear(context, {
            color: [0, 0, 0, 0],
            depth: 1,
        })
        const axes = new PainterAxes(context, { uniformCamera, size })
        const state = new TgdPainterState(context, {
            depth: "less",
            blend: "off",
            cull: "off",
            children: [
                new TgdPainterGroupCamera(context, {
                    camera,
                    children: [clear, axes, tipsNormal],
                }),
            ],
        })
        const framebuffer = new TgdPainterFramebuffer(context, {
            name: "Framebuffer",
            antiAliasing: true,
            depthBuffer: true,
            textureColor0: this.textureFramebuffer,
            children: [state],
            fixedSize: true,
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
            camera,
        })
        contextOffscreen.add(
            new TgdPainterState(contextOffscreen, {
                depth: "less",
                blend: "off",
                cull: "off",
                children: [
                    new TgdPainterClear(contextOffscreen, {
                        color: [0, 0, 0, 1],
                        depth: 1,
                    }),
                    new PainterTipsMask(contextOffscreen, { size }),
                ],
            }),
        )
        contextOffscreen.camera = camera
        this.contextOffscreen = contextOffscreen
        overlay.eventPointerHover.addListener((evt: TgdInputPointerEventMove) => {
            const [red] = contextOffscreen.readPixel(evt.current.x, evt.current.y)
            const index = Math.floor((4 + red * 8) / 0xff) - 1
            if (tipsNormal.index !== index) {
                tipsNormal.index = index
                context.paint()
            }
        })
        let animations: TgdAnimation[] = []
        overlay.eventPointerTap.addListener((evt: TgdInputPointerEventTap) => {
            const [red] = contextOffscreen.readPixel(evt.x, evt.y)
            const index = Math.floor((4 + red * 8) / 0xff) - 1
            if (index < 0 || index > 5) return

            const { matrix } = context.camera.transfo
            const facing = new TgdVec3(matrix.m02, matrix.m12, matrix.m22)
            const axisZ = AXES[index]
            this.eventTap.dispatch(axisZ)
            if (axisZ.isClose(facing)) {
                // Clicking the facing vector is like cliking the opposite vector.
                axisZ.scale(-1)
            }
            if (Math.abs(axisZ.y) > 0.999) axisZ.scale(-1)
            const axisY = Math.abs(axisZ.y) > 0.999 ? new TgdVec3(0, 0, 1) : new TgdVec3(0, 1, 0)
            const axisX = TgdVec3.newFrom(axisY).cross(axisZ)
            const orientation = TgdQuat.fromMatrix(new TgdMat3(axisX, axisY, axisZ))
            context.animCancelArray(animations)
            animations = context.animSchedule({
                duration: 0.2,
                action: tgdActionCreateCameraInterpolation(context.camera, {
                    orientation,
                }),
            })
        })
    }

    delete(): void {
        this.group?.delete()
        this.uniformCamera.delete()
    }

    paint(time: number, delta: number): void {
        const { context, contextOffscreen, camera, group, size, uniformCamera } = this
        camera.screenWidth = size
        camera.screenHeight = size
        camera.fitSpaceAtTarget(3, 3)
        camera.transfo.orientation = context.camera.transfo.orientation
        uniformCamera.values.uniModelViewMatrix = camera.matrixModelView
        uniformCamera.values.uniProjectionMatrix = camera.matrixProjection
        group?.paint(time, delta)
        // Offscreen
        contextOffscreen?.paint()
    }

    get hierarchy(): TgdDebugPainterHierarchy {
        const { group } = this
        if (!group) return {}

        return {
            [this.name]: [group.hierarchy],
        }
    }
}

const AXES = [
    new TgdVec3(+1, 0, 0),
    new TgdVec3(0, +1, 0),
    new TgdVec3(0, 0, +1),
    new TgdVec3(-1, 0, 0),
    new TgdVec3(0, -1, 0),
    new TgdVec3(0, 0, -1),
]
