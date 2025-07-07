import React from "react"
import {
    tgdActionCreateTransfoInterpolation,
    TgdCamera,
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    tgdEasingFunctionInOutBounce,
    tgdEasingFunctionInOutCubic,
    TgdGeometryBox,
    TgdMat3,
    TgdPainterAxes,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterSkybox,
    TgdPainterState,
    TgdQuat,
    TgdQuatFace,
    TgdTransfo,
    TgdVec3,
    webglPresetDepth,
} from "@tolokoban/tgd"

import View, { Assets } from "@/components/demo/Tgd"
import { ViewButton } from "@tolokoban/ui"

import imagePosX from "./posX.webp" // +X
import imagePosY from "./posY.webp" // +Y
import imagePosZ from "./posZ.webp" // +Z
import imageNegX from "./negX.webp" // -X
import imageNegY from "./negY.webp" // -Y
import imageNegZ from "./negZ.webp" // -Z

import styles from "./skybox.demo.module.css"

function init(
    context: TgdContext,
    assets: Assets
): {
    camera: TgdCamera
} {
    // #begin
    const camera = new TgdCameraPerspective({
        transfo: {
            distance: 6,
        },
    })
    context.camera = camera
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
    })
    context.camera.debug()
    const skybox = new TgdPainterSkybox(context, {
        camera: context.camera,
        imagePosX: assets.image.imagePosX,
        imagePosY: assets.image.imagePosY,
        imagePosZ: assets.image.imagePosZ,
        imageNegX: assets.image.imageNegX,
        imageNegY: assets.image.imageNegY,
        imageNegZ: assets.image.imageNegZ,
    })
    const clear = new TgdPainterClear(context, {
        depth: 1,
    })
    const cube = new TgdPainterMesh(context)
    const axes = new TgdPainterAxes(context, { scale: 3 })
    const state = new TgdPainterState(context, {
        depth: webglPresetDepth.lessOrEqual,
        children: [axes, cube, skybox],
    })
    context.add(clear, state)
    context.paint()
    return { camera }
    // #end
}

export default function Demo() {
    const [camera, setCamera] = React.useState<TgdCamera | null>(null)
    const refContext = React.useRef<TgdContext | null>(null)
    const handleReady = (context: TgdContext, assets: Assets) => {
        const resources = init(context, assets)
        setCamera(resources.camera)
        refContext.current = context
    }
    const face = (value: TgdQuatFace) => {
        const context = refContext.current
        if (!camera || !context) return

        const orientation = TgdQuat.fromFace(value)
        context.animSchedule({
            action: tgdActionCreateTransfoInterpolation(
                camera.transfo,
                {},
                {
                    orientation,
                }
            ),
            duration: 0.3,
            easingFunction: tgdEasingFunctionInOutCubic,
        })
    }
    return (
        <View
            className={styles.skybox}
            gizmo
            onReady={handleReady}
            assets={{
                image: {
                    imagePosX,
                    imagePosY,
                    imagePosZ,
                    imageNegX,
                    imageNegY,
                    imageNegZ,
                },
            }}
        >
            <footer className={styles.footer}>
                <ViewButton onClick={() => face("+X+Y+Z")}>Reset</ViewButton>
                <ViewButton onClick={() => face("-Z-Y-X")}>+X</ViewButton>
                <ViewButton onClick={() => face("+X+Z-Y")}>+Y</ViewButton>
                <ViewButton onClick={() => face("+X-Y-Z")}>+Z</ViewButton>
                <ViewButton onClick={() => face("+Z-Y+X")}>-X</ViewButton>
                <ViewButton onClick={() => face("+X-Z+Y")}>-Y</ViewButton>
                <ViewButton onClick={() => face("-X-Y+Z")}>-Z</ViewButton>
            </footer>
        </View>
    )
}
