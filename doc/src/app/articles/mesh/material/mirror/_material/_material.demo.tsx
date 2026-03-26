import {
    TgdContext,
    TgdPainterClear,
    TgdPainterState,
    TgdTextureCube,
    TgdPainterSkybox,
    TgdMaterialMirror,
    TgdPainterMesh,
    TgdPainterNode,
    TgdGeometryBox,
    tgdCalcRandom3,
    ArrayNumber4,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import PosX from "@/assets/cubemap/4096/graffiti/posX.webp"
import PosY from "@/assets/cubemap/4096/graffiti/posY.webp"
import PosZ from "@/assets/cubemap/4096/graffiti/posZ.webp"
import NegX from "@/assets/cubemap/4096/graffiti/negX.webp"
import NegY from "@/assets/cubemap/4096/graffiti/negY.webp"
import NegZ from "@/assets/cubemap/4096/graffiti/negZ.webp"

function init(context: TgdContext) {
    // #begin Initializing WebGL
    context.camera.fitSpaceAtTarget(3, 3)
    const skybox = TgdTextureCube.lazyLoad(context, {
        size: 4096,
        posX: PosX,
        posY: PosY,
        posZ: PosZ,
        negX: NegX,
        negY: NegY,
        negZ: NegZ,
    })
    const node = new TgdPainterNode()
    for (const x of [-0.5, +0.5]) {
        for (const y of [-0.5, +0.5]) {
            for (const z of [-0.5, +0.5]) {
                const material = new TgdMaterialMirror({
                    roughness: (x + y + z + 1.5) % 2 === 0 ? 0 : 0.7,
                    skybox,
                    tint: z > 0 ? "#fff" : ([...tgdCalcRandom3(), 1] as ArrayNumber4),
                })
                const mesh = new TgdPainterMesh(context, {
                    material,
                    geometry: new TgdGeometryBox({
                        center: [x, y, z],
                    }),
                })
                node.add(mesh)
            }
        }
    }
    // #end
    context.add(
        new TgdPainterSkybox(context, {
            camera: context.camera,
            texture: skybox,
        }),
        new TgdPainterClear(context, {
            depth: 1,
        }),
        new TgdPainterState(context, {
            depth: "less",
            cull: "back",
            children: [node],
        }),
        (time) => {
            context.camera.transfo.setEulerRotation(0, time * 5, 0)
            node.transfo.setEulerRotation(time * 3, 0, 0)
        },
    )
    context.play()
}

export default function Demo() {
    return (
        <div>
            <View
                onReady={init}
                options={{ alpha: false }}
                gizmo
                controller={{
                    inertiaOrbit: 1000,
                }}></View>
        </div>
    )
}
