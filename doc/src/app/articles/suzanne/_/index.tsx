import {
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterClear,
    TgdPainterSkybox,
    TgdPainterState,
    TgdQuat,
    TgdTexture2DOptions,
    TgdVec3,
    tgdActionCreateCameraInterpolation,
    tgdEasingFunctionOutBack,
    webglPresetDepth,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"
import Painter from "./painter"

import PosX from "@/assets/cubemap/test/1.webp"
import PosY from "@/assets/cubemap/test/2.webp"
import PosZ from "@/assets/cubemap/test/3.webp"
import NegX from "@/assets/cubemap/test/4.webp"
import NegY from "@/assets/cubemap/test/5.webp"
import NegZ from "@/assets/cubemap/test/6.webp"

import FaceWEBP from "./face.webp"
import MonkeyOBJ from "./monkey.obj"
// import MonkeyOBJ from "./triangle.obj"

export default function DemoContainer() {
    return <View onReady={init} />
}

function init(context: TgdContext) {
    document.addEventListener("keydown", evt => {
        console.log("🚀 [index] evt.key = ", evt.key) // @FIXME: Remove this line written on 2024-02-16 at 16:02
        switch (evt.key) {
            case "0":
                context.camera.face("+X+Y+Z")
                break
            case ".":
                context.camera.zoom = 1
                break
        }
        context.paint()
    })
    const camera = new TgdCameraPerspective({
        distance: 5,
        far: 100,
        near: 0.1,
        fovy: Math.PI / 4,
        zoom: 0.1,
        orientation: new TgdQuat(
            2 * Math.random() - 1,
            2 * Math.random() - 1,
            2 * Math.random() - 1,
            2 * Math.random() - 1
        ).normalize(),
    })
    context.camera = camera
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 900,
    })
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    })
    context.add(clear)
    // const depth = new TgdPainterDepth(context)
    // context.add(depth)
    const state = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
    })
    const skybox = new TgdPainterSkybox(context, {
        imagePosX: PosX,
        imagePosY: PosY,
        imagePosZ: PosZ,
        imageNegX: NegX,
        imageNegY: NegY,
        imageNegZ: NegZ,
    })
    context.add(skybox)
    const options: Partial<TgdTexture2DOptions> = {
        image: FaceWEBP,
        magFilter: "LINEAR",
        minFilter: "LINEAR",
    }
    const texture = context.textures2D.create(options)
    const painter = new Painter(context, MonkeyOBJ, texture)
    state.add(painter)
    context.add(state)
    context.paint()
    let anim = {
        duration: 1000,
        action: tgdActionCreateCameraInterpolation(context.camera, {
            zoom: 1,
            orientation: new TgdQuat(0, 0, 0, 1),
        }),
        easingFunction: tgdEasingFunctionOutBack,
    }
    context.animSchedule(anim)
    context.inputs.keyboard.eventKeyPress.addListener(evt => {
        if (evt.key !== " ") return

        context.animCancel(anim)
        anim = {
            duration: 1000,
            action: tgdActionCreateCameraInterpolation(context.camera, {
                zoom: 1,
                target: new TgdVec3(0, 0, 0),
                orientation: new TgdQuat(0, 0, 0, 1),
            }),
            easingFunction: tgdEasingFunctionOutBack,
        }
        context.animSchedule(anim)
    })
}
