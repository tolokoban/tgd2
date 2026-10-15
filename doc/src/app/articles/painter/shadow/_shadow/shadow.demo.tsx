import {
    type TgdContext,
    TgdGeometryBox,
    TgdGeometrySphereIco,
    TgdPainterClear,
    TgdPainterShadow,
    TgdTransfo,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(context: TgdContext) {
    // #begin Initializing WebGL
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    })
    const shadow = new TgdPainterShadow(context, {
        light: {
            transfo: new TgdTransfo({
                position: [-3, 1, 2],
            }).lookAt([0, 0, 0]),
            width: 8,
            height: 4,
        },
        meshes: [
            {
                geometry: new TgdGeometryBox(),
                transfo: new TgdTransfo({ position: [-2, 0, 0] }),
                visible: true,
            },
            {
                geometry: new TgdGeometrySphereIco(),
                transfo: new TgdTransfo({ position: [+2, 0, 0] }),
                visible: true,
            },
        ],
    })
    context.add(clear, shadow)
    context.camera.spaceWidthAtTarget = 6
    context.paint()
    // #end
}

export default function Demo() {
    return <View onReady={init} controller={{ inertiaOrbit: 1000 }} gizmo />
}
