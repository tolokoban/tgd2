/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./camera.demo"

const FOCUS = {
    "Initializing WebGL":
        "    const { camera } = context;\n    camera.fitSpaceAtTarget(2, 2);\n    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1];\n    const material = new TgdMaterialDiffuse({\n        color,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n        lockLightsToCamera: true,\n    });\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material,\n    });\n    const { near, far } = camera;\n    const camOrtho = new TgdCameraOrthographic({ near, far });\n    const camPersp = new TgdCameraPerspective({ near, far });",
}
const FULL =
    'import {\n    ArrayNumber4,\n    tgdCalcClamp,\n    tgdCalcRandom3,\n    TgdCameraOrthographic,\n    TgdCameraPerspective,\n    TgdContext,\n    TgdLight,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterGroupCamera,\n    TgdPainterLogic,\n    TgdPainterMeshGltf,\n    TgdPainterScissor,\n    TgdPainterState,\n    webglPresetDepth,\n} from "@tolokoban/tgd";\nimport View, { Assets } from "@/components/demo/Tgd";\nimport SuzaneURL from "@/assets/mesh/suzanne.glb";\nimport React from "react";\nimport { useFloat } from "@/utils/hooks/float";\nimport { ViewPanel, ViewSlider } from "@tolokoban/ui";\n\nfunction init(context: TgdContext, assets: Assets) {\n    const { camera } = context;\n    camera.fitSpaceAtTarget(2, 2);\n    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1];\n    const material = new TgdMaterialDiffuse({\n        color,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n        lockLightsToCamera: true,\n    });\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material,\n    });\n    const { near, far } = camera;\n    const camOrtho = new TgdCameraOrthographic({ near, far });\n    const camPersp = new TgdCameraPerspective({ near, far });\n    const scissor1 = new TgdPainterScissor(context, {\n        children: [\n            new TgdPainterGroupCamera(context, {\n                camera: camOrtho,\n                children: [mesh],\n            }),\n        ],\n        x: 0,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    });\n    const scissor2 = new TgdPainterScissor(context, {\n        children: [\n            new TgdPainterGroupCamera(context, {\n                camera: camPersp,\n                children: [mesh],\n            }),\n        ],\n        x: 0.5,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    });\n    context.add(\n        new TgdPainterLogic(() => {\n            camPersp.fitSpaceAtTarget(2, 2);\n            camPersp.fromTransfo(camera.transfo);\n            camPersp.zoom = camera.zoom;\n            camOrtho.fitSpaceAtTarget(2, 2);\n            camOrtho.fromTransfo(camera.transfo);\n            camOrtho.zoom = camera.zoom;\n            console.log("🐞 [camera.demo@80] camera.zoom =", camera.zoom); // @FIXME: Remove this line written on 2026-02-12 at 14:29\n        }),\n        new TgdPainterClear(context, {\n            color: [0.3, 0.3, 0.3, 1],\n            depth: 1,\n        }),\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [scissor1, scissor2],\n        }),\n    );\n    context.paint();\n    return {\n        split(value: number) {\n            const a = tgdCalcClamp(value, 0, 1);\n            scissor1.x = 0;\n            scissor1.width = a;\n            scissor2.x = a;\n            scissor2.width = 1 - a;\n            context.paint();\n        },\n    };\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null);\n    const srv = ref.current;\n    const [split, setSplit] = useFloat(0.5, srv?.split);\n    return (\n        <div>\n            <View\n                onReady={(scene: TgdContext, assets: Assets) => {\n                    ref.current = init(scene, assets);\n                }}\n                assets={{\n                    glb: {\n                        suzane: SuzaneURL,\n                    },\n                }}\n                gizmo\n                controller={{\n                    inertiaOrbit: 1000,\n                }}\n            >\n                <ViewSlider\n                    value={split}\n                    onChange={setSplit}\n                    min={0}\n                    max={1}\n                    step={1e-2}\n                />\n                <ViewPanel\n                    fullwidth\n                    display="flex"\n                    justifyContent="space-between"\n                    alignItems="center"\n                >\n                    <div>Orthographic</div>\n                    <div>Perspective</div>\n                </ViewPanel>\n            </View>\n        </div>\n    );\n}\n'

export default function DemoContainer() {
    const [full, setFull] = React.useState(false)
    return (
        <>
            <div className="half-left">
                <Demo />
            </div>
            <div className="half-right">
                <div>
                    <ViewButton variant="elevated" onClick={() => setFull(!full)}>
                        {full ? "Show code details" : "Show full code"}
                    </ViewButton>
                </div>
                <CodeViewer language="tsx" value={full ? FULL : FOCUS} />
            </div>
        </>
    )
}
