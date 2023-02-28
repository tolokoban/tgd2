import React from "react"
import { Link } from "react-router-dom"
import SceneView from "@/components/scene/scene"
import PainterClear from "tgd2/painter/clear"
import PainterLogic from "tgd2/painter/logic"
import PainterBackground from "tgd2/painter/background"
import { PainterInterface } from "tgd2/painter/painter-interface"
import { makeMoveJump } from "tgd2/move"
import { Scene } from "tgd2"

export default function Home() {
    return (
        <div>
            <Link to="theme">Theme</Link>
            <SceneView
                onReady={scene => {
                    console.log("onReady...")
                    scene.addPainter(...makePainters(scene))
                    scene.animate = true
                }}
            />
        </div>
    )
}

function makePainters(scene: Scene): PainterInterface[] {
    const image = new Image()
    image.src = "./manga.jpg"
    image.addEventListener("load", () => {
        const background = new PainterBackground(scene, {
            image,
            placeholder: [1, 0.666, 0, 1],
        })
        console.log("Add Painter!")
        scene.addPainter(background)
    })
    // const jump = makeMoveJump({ duration: 1500 })
    // const clear = new PainterClear(scene, {
    //     color: [0.3, 0.6, 0.9, 1],
    // })

    return []
    // clear,
    // new PainterLogic(time => {
    //     const green = jump(time)
    //     clear.setClearColor(0, green, 0, 1)
    // }),
}
