import {
    TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterAxis,
    TgdPainterClear,
    TgdPainterSkybox,
    TgdPainterDepth,
    TgdCameraOrthographic,
    TgdPainterSegments,
    TgdPainterSegmentsData,
    TgdVec3,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

import PosX from "@/gfx/cubemap/test/1.webp"
import PosY from "@/gfx/cubemap/test/2.webp"
import PosZ from "@/gfx/cubemap/test/3.webp"
import NegX from "@/gfx/cubemap/test/4.webp"
import NegY from "@/gfx/cubemap/test/5.webp"
import NegZ from "@/gfx/cubemap/test/6.webp"

import PaletteURL from "./palette.jpg"

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
    const camera = new TgdCameraOrthographic()
    context.camera = camera
    camera.distance = 100
    camera.spaceHeight = 100
    camera.face("+X+Y+Z")
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 900,
    })
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    })
    context.add(clear)
    const depth = new TgdPainterDepth(context)
    context.add(depth)
    const skybox = new TgdPainterSkybox(context, {
        imagePosX: PosX,
        imagePosY: PosY,
        imagePosZ: PosZ,
        imageNegX: NegX,
        imageNegY: NegY,
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
    addSegments(context)
    context.paint()

    // fetch("mesh/axis.obj")
    //     .then(resp => {
    //         if (!resp.ok) {
    //             throw Error(`Error #${resp.status}: ${resp.statusText}!`)
    //         }
    //         return resp.text()
    //     })
    //     .then(content => {
    // const options: Partial<TgdTexture2DOptions> = {
    //     image: PaletteURL,
    //     magFilter: "NEAREST",
    //     minFilter: "NEAREST",
    // }
    // const texture = context.textures2D.create(options)
    //         const painter = new Painter(context, content, texture)
    //         context.add(painter)
    //         context.paint()
    //     })
}

function addSegments(context: TgdContext) {
    const data = new TgdPainterSegmentsData()
    for (let i = 0; i < 10; i++) {
        data.add([0, 0, 0, 1], vec4(rndVec3(rnd(40, 60)), 0.75), [0, 0], [0, 0])
    }
    const segments = new TgdPainterSegments(context, data, {
        roundness: 3,
        minRadius: 1,
    })
    context.add(segments)
}

function rnd(min: number, max: number) {
    return min + (max - min) * Math.random()
}

function rndVec3(scale: number): TgdVec3 {
    const vec = new TgdVec3()
    return vec.random().normalize().scale(scale)
}

function vec4(v: TgdVec3, w: number): [number, number, number, number] {
    return [...v, w] as [number, number, number, number]
}
