import {
    tgdCalcDegToRad,
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdGeometryBox,
    tgdLoadImage,
    TgdMaterialDiffuse,
    TgdMaterialNormals,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterNode,
    TgdPainterState,
    TgdTexture2D,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(ctx: TgdContext) {
    // #begin
    ctx.camera.transfo.setPosition(0, -5, 0).distance = 30
    new TgdControllerCameraOrbit(ctx)
    const createBox = () =>
        new TgdPainterNode({
            transfo: {
                position: [0, -1, 0],
            },
            children: [
                new TgdPainterNode({
                    transfo: {
                        position: [0, -0.5, -0.5],
                    },
                    target: new TgdPainterMesh(ctx, {
                        geometry: new TgdGeometryBox(),
                        material: new TgdMaterialNormals(),
                        // material: new TgdMaterialDiffuse({
                        //     color: [0.9, 0.6, 0.3, 1],
                        // }),
                    }),
                }),
            ],
        })
    let root = createBox()
    const boxes: TgdPainterNode[] = [root]
    for (let i = 0; i < 31; i++) {
        const box = createBox()
        boxes.push(box)
        box.add(root)
        root = box
    }
    ctx.add(
        new TgdPainterClear(ctx, { color: [0.2, 0.1, 0, 1], depth: 1 }),
        new TgdPainterState(ctx, {
            depth: webglPresetDepth.less,
            children: [root],
        }),
        new TgdPainterLogic((time, delay) => {
            for (const box of boxes) {
                box.transfo.orientation.reset()
                const s = 0.95
                box.transfo.setScale(s, s, s)
                box.transfo.orbitAroundX(
                    (Math.abs(Math.sin(time)) * Math.PI * 2) / boxes.length
                )
                box.transfo.orbitAroundY(
                    (Math.sin(time * 1.1287) *
                        Math.PI *
                        3 *
                        (1 + Math.cos(time * 0.37243))) /
                        boxes.length
                )
            }
            root.transfo.orbitAroundY(time * 0.5)
        })
    )
    ctx.play()
    // #end
}

export default function Demo() {
    return <View onReady={init} />
}
