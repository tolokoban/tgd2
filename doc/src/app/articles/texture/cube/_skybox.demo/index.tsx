/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./skybox.demo"

const FOCUS = {"Detail #1":"    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        geo: {\n            minLat: tgdCalcDegToRad(-60),\n            maxLat: tgdCalcDegToRad(+60),\n        },\n    })\n    const skybox = new TgdPainterSkybox(context, {\n        transfo: { orientation: TgdQuat.fromFace(\"+Y+Z+X\") },\n        imagePosX: assets.image.imagePosX,\n        imagePosY: assets.image.imagePosY,\n        imagePosZ: assets.image.imagePosZ,\n        imageNegX: assets.image.imageNegX,\n        imageNegY: assets.image.imageNegY,\n        imageNegZ: assets.image.imageNegZ,\n    })\n    context.add(skybox, new TgdPainterAxes(context, { scale: 1 }))"}
const FULL = "import {\n    tgdCalcDegToRad,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdPainterAxes,\n    TgdPainterLogic,\n    TgdPainterSkybox,\n    TgdQuat,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport imagePosX from \"./1.webp\" // +X\nimport imagePosY from \"./2.webp\" // +Y\nimport imagePosZ from \"./3.webp\" // +Z\nimport imageNegX from \"./4.webp\" // -X\nimport imageNegY from \"./5.webp\" // -Y\nimport imageNegZ from \"./6.webp\" // -Z\n\nfunction init(context: TgdContext, assets: Assets) {\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        geo: {\n            minLat: tgdCalcDegToRad(-60),\n            maxLat: tgdCalcDegToRad(+60),\n        },\n    })\n    const skybox = new TgdPainterSkybox(context, {\n        transfo: { orientation: TgdQuat.fromFace(\"+Y+Z+X\") },\n        imagePosX: assets.image.imagePosX,\n        imagePosY: assets.image.imagePosY,\n        imagePosZ: assets.image.imagePosZ,\n        imageNegX: assets.image.imageNegX,\n        imageNegY: assets.image.imageNegY,\n        imageNegZ: assets.image.imageNegZ,\n    })\n    context.add(skybox, new TgdPainterAxes(context, { scale: 1 }))\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: {\n                    imagePosX,\n                    imagePosY,\n                    imagePosZ,\n                    imageNegX,\n                    imageNegY,\n                    imageNegZ,\n                },\n            }}\n        />\n    )\n}\n"

export default function DemoContainer() {
    const [full, setFull] = React.useState(false)
    return <>
        <div className="half-left"><Demo /></div>
        <div className="half-right">
            <div>
                <ViewButton variant="elevated" onClick={() => setFull(!full)}>
                    {full ? "Show code details" : "Show full code"}
                </ViewButton>
            </div>
            <CodeViewer language="tsx" value={full ? FULL : FOCUS} />
        </div>
    </>
}