import {
    TgdCamera,
    TgdCameraNode,
    TgdCameraPerspective,
    TgdContext,
    TgdPainterAxis,
    TgdPainterBackground,
    TgdPainterLogic,
    TgdPainterNode,
    TgdPainterSkybox,
    TgdQuat,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

import imagePosX from "./1.webp"
import imagePosY from "./2.webp"
import imagePosZ from "./3.webp"
import imageNegX from "./4.webp"
import imageNegY from "./5.webp"
import imageNegZ from "./6.webp"

function init(context: TgdContext) {
    // #begin
    const { camera } = context
    camera.face("+X+Z-Y")
    const skybox = new TgdPainterSkybox(context, {
        imagePosX,
        imagePosY,
        imagePosZ,
        imageNegX,
        imageNegY,
        imageNegZ,
    })
    const node2 = new TgdPainterNode({
        children: [new TgdCameraNode(camera)],
    })
    const node1 = new TgdPainterNode({ children: [node2] })
    const turn = new TgdQuat()
    context.add(
        skybox,
        node1,
        new TgdPainterLogic((time: number, delay: number) => {
            turn.rotateAroundZ(delay * 0.0002704)
            node1.transfo.orientation = turn
            const quat = new TgdQuat().face("+X+Z-Y")
            quat.rotateAroundX(0.5 * Math.sin(time * 0.0003721) + 0.25)
            node2.transfo.orientation = quat
        })
    )
    context.play()
    // #end
}

export default function Demo() {
    return <View onReady={init} />
}
