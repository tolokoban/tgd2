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

import imagePosX from "./posX.webp" // +X
import imagePosY from "./posY.webp" // +Y
import imagePosZ from "./posZ.webp" // +Z
import imageNegX from "./negX.webp" // -X
import imageNegY from "./negY.webp" // -Y
import imageNegZ from "./negZ.webp" // -Z

function init(context: TgdContext, assets: Assets) {
    // #begin
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        geo: {},
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
