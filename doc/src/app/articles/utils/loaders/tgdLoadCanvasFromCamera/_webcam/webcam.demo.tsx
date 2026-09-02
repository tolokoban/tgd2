import {
    type TgdContext,
    TgdGeometryBox,
    tgdLoadCanvasFromCamera,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterState,
    TgdTexture2D,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"
import React from "react"
import { IconCamera, IconImage, IconSnapshot, ViewButton } from "@tolokoban/ui"

function init(context: TgdContext, canvas: HTMLCanvasElement) {
    context.camera.fitSpaceAtTarget(2, 2)
    const state = new TgdPainterState(context, {
        depth: webglPresetDepth.lessOrEqual,
        children: [
            new TgdPainterClear(context, {
                color: [0.3, 0.2, 0.1, 1],
                depth: 1,
            }),
            new TgdPainterLogic((time, delta) => {
                mesh.transfo.orbitAroundX(delta * 0.573)
                mesh.transfo.orbitAroundY(delta * 0.741)
            }),
        ],
    })
    context.add(state)
    const texture = new TgdTexture2D(context).loadBitmap(canvas)
    const geometry = new TgdGeometryBox()
    const material = new TgdMaterialDiffuse({
        color: texture,
    })
    const mesh = new TgdPainterMesh(context, {
        geometry,
        material,
    })
    state.add(mesh)
    context.play()
    // #end
}

export default function Demo() {
    const [mode, setMode] = React.useState("init")
    const [canvas, setCanvas] = React.useState<HTMLCanvasElement | null>(null)
    const [controller, setController] = React.useState<{
        takeSnapshot(): HTMLCanvasElement | null
        cancel(): void
    } | null>(null)
    const handleVideoMount = (video: HTMLVideoElement | null) => {
        if (!video || controller) return

        tgdLoadCanvasFromCamera(video).then(setController)
    }
    const takeSnapshot = () => {
        if (!controller) return

        setCanvas(controller.takeSnapshot())
        setController(null)
        setMode("3d")
    }
    const back = () => {
        setMode("webcam")
        setCanvas(null)
    }

    if (mode === "init") {
        return (
            <div>
                <p>In this demo, we will take a picture from the webcam and use it as texture for a cube.</p>
                <ViewButton icon={IconCamera} onClick={() => setMode("webcam")}>
                    Start WebCam
                </ViewButton>
            </div>
        )
    }

    if (mode === "webcam") {
        return (
            <div>
                <main>
                    <video ref={handleVideoMount}></video>
                    {canvas && <View onReady={(context: TgdContext) => init(context, canvas)} />}
                </main>
                <footer>
                    {controller && (
                        <ViewButton onClick={takeSnapshot} icon={IconSnapshot}>
                            Take a Picture
                        </ViewButton>
                    )}
                </footer>
            </div>
        )
    }

    return (
        <div>
            <main>{canvas && <View onReady={(context: TgdContext) => init(context, canvas)} />}</main>
            <footer>
                <ViewButton onClick={back} icon={IconImage}>
                    Back to WebCam
                </ViewButton>
            </footer>
        </div>
    )
}
