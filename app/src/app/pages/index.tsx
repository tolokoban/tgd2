import React from "react"
import { Link } from "react-router-dom"
import SceneView from "@/components/scene/scene"
import PainterClear from "tgd2/painter/clear"
import PainterLogic from "tgd2/painter/logic"
import { PainterInterface } from "tgd2/painter/painter-interface"
import { makeMoveJump } from "tgd2/move"
import { makeData } from "tgd2/data"
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
    const jump = makeMoveJump({ duration: 1500 })
    const clear = new PainterClear(scene, {
        color: [0.3, 0.6, 0.9, 1],
    })

    return [
        clear,
        new PainterLogic(time => {
            const green = jump(time)
            clear.setClearColor(0, green, 0, 1)
        }),
    ]
}
