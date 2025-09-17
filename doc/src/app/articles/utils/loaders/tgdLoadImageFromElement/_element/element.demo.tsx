import {
    TgdCameraPerspective,
    TgdContext,
    TgdGeometryBox,
    tgdLoadImageFromElement,
    TgdMaterialDiffuse,
    TgdMaterialNormals,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterState,
    TgdTexture2D,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(context: TgdContext) {
    context.camera = new TgdCameraPerspective({
        transfo: {
            distance: 1.2,
            position: [0, 0, 0],
        },
        far: 100,
        near: 0.1,
        fovy: Math.PI / 4,
    })
    const state = new TgdPainterState(context, {
        depth: webglPresetDepth.lessOrEqual,
        children: [
            new TgdPainterClear(context, {
                color: [0.3, 0.2, 0.1, 1],
                depth: 1,
            }),
            new TgdPainterLogic((time, delta) => {
                mesh.transfo.orbitAroundX(delta * 0.573)
                mesh.transfo.orbitAroundY(delta * 0.741)
            }),
        ],
    })
    context.add(state)
    const texture = new TgdTexture2D(context)
    const geometry = new TgdGeometryBox()
    const material = new TgdMaterialDiffuse({
        color: texture,
    })
    const mesh = new TgdPainterMesh(context, {
        geometry,
        material,
    })
    state.add(mesh)
    context.play()

    // #begin Loading element into texture
    const loadImage = () => {
        const elem = document.body.querySelector("details > div > pre")
        if (!elem || elem.scrollWidth < 1) {
            setTimeout(loadImage, 500)
            return
        }
        console.log("🚀 [element.demo] elem =", elem) // @FIXME: Remove this line written on 2025-09-17 at 09:13
        console.log(elem.innerHTML)
        tgdLoadImageFromElement(elem).then((img) => {
            document.body.appendChild(img)
            texture.loadBitmap(img)
        })
    }
    loadImage()
    // #end
}

export default function Demo() {
    return <View onReady={init} />
}
