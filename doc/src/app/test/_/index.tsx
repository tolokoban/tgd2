import {
    TdgTexture2DOptions,
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterAxis,
    TgdPainterClear,
    TgdPainterSkybox,
    TgdPainterDepth,
    TgdCameraOrthographic,
    TgdPainterSegments,
    TgdPainterSegmentsData,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"
import Painter from "./painter"

import PosX from "@/gfx/cubemap/train-station/px.webp"
import NegX from "@/gfx/cubemap/train-station/nx.webp"
import PosY from "@/gfx/cubemap/train-station/py.webp"
import NegY from "@/gfx/cubemap/train-station/ny.webp"
import PosZ from "@/gfx/cubemap/train-station/pz.webp"
import NegZ from "@/gfx/cubemap/train-station/nz.webp"

import PaletteURL from "./palette.jpg"

export default function DemoContainer() {
    return <View onReady={init} />
}

function init(context: TgdContext) {
    context.inputs.pointer.inertia = 1000
    context.camera = new TgdCameraOrthographic()
    const { camera } = context
    camera.distance = 10
    camera.spaceHeight = 2
    camera.face("+X+Y+Z")
    new TgdControllerCameraOrbit(context)
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    })
    context.add(clear)
    const depth = new TgdPainterDepth(context)
    context.add(depth)
    const options: Partial<TdgTexture2DOptions> = {
        image: PaletteURL,
        magFilter: "NEAREST",
        minFilter: "NEAREST",
    }
    const texture = context.textures2D.create(options)
    const skybox = new TgdPainterSkybox(context, {
        imagePosX: PosX,
        imageNegX: NegX,
        imagePosY: PosY,
        imageNegY: NegY,
        imagePosZ: PosZ,
        imageNegZ: NegZ,
    })
    context.add(skybox)
    const axis = new TgdPainterAxis(context, {
        x: camera.x,
        y: camera.y,
        z: camera.z,
        scale: 1,
    })
    context.add(axis)
    const data = new TgdPainterSegmentsData()
    data.add([0, 0, 0, 0.2], [1, 0, 0, 0.1])
    data.add([0, 0, 0, 0.2], [0, 1, 0, 0.1])
    data.add([0, 0, 0, 0.2], [0, 0, 1, 0.1])
    const segments = new TgdPainterSegments(context, data, {
        roundness: 3,
    })
    context.add(segments)
    context.paint()

    fetch("mesh/axis.obj")
        .then(resp => {
            if (!resp.ok) {
                throw Error(`Error #${resp.status}: ${resp.statusText}!`)
            }
            return resp.text()
        })
        .then(content => {
            const painter = new Painter(context, content, texture)
            // context.add(painter)
            context.paint()
        })
}
