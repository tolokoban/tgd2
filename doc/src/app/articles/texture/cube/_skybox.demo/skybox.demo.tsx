import {
    tgdCalcDegToRad,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterAxes,
    TgdPainterLogic,
    TgdPainterSkybox,
    TgdQuat,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import imagePosX from "./1.webp" // +X
import imagePosY from "./2.webp" // +Y
import imagePosZ from "./3.webp" // +Z
import imageNegX from "./4.webp" // -X
import imageNegY from "./5.webp" // -Y
import imageNegZ from "./6.webp" // -Z

function init(context: TgdContext, assets: Assets) {
    // #begin
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        geo: {
            minLat: tgdCalcDegToRad(-60),
            maxLat: tgdCalcDegToRad(+60),
        },
    })
    const skybox = new TgdPainterSkybox(context, {
        transfo: { orientation: TgdQuat.fromFace("+Y+Z+X") },
        imagePosX: assets.image.imagePosX,
        imagePosY: assets.image.imagePosY,
        imagePosZ: assets.image.imagePosZ,
        imageNegX: assets.image.imageNegX,
        imageNegY: assets.image.imageNegY,
        imageNegZ: assets.image.imageNegZ,
    })
    context.add(skybox, new TgdPainterAxes(context, { scale: 1 }))
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
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
        />
    )
}
