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
    const handleClick = () => {
        const data = makeData({
            xy: 2,
            z: 1,
        })
        data.set("xy", new Float32Array([11, 12, 21, 22]))
        data.set("z", new Float32Array([1, 2]))
        const got = new Float32Array(data.get(2))
        console.log("🚀 [index] got = ", got) // @FIXME: Remove this line written on 2022-11-18 at 15:00
    }
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
            <button onClick={handleClick}>Click to Test</button>
        </div>
    )
}

function makePainters(scene: Scene): PainterInterface[] {
    const jump = makeMoveJump({ duration: 1500 })
    const clear = new PainterClear({
        color: [0.3, 0.6, 0.9, 1],
    })

    return [
        clear,
        new PainterLogic((time, delay) => {
            const green = jump(time)
            clear.setClearColor(0, green, 0, 1)
        }),
    ]
}
