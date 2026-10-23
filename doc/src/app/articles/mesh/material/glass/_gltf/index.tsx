/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./gltf.demo"

const FOCUS = {"Initializing WebGL":"\tconst skybox = new TgdTextureCube(context, {\n\t\timagePosX: assets.image.posX,\n\t\timagePosY: assets.image.posY,\n\t\timagePosZ: assets.image.posZ,\n\t\timageNegX: assets.image.negX,\n\t\timageNegY: assets.image.negY,\n\t\timageNegZ: assets.image.negZ,\n\t});\n\t// The glTF material uses KHR_materials_transmission,\n\t// so the default material is a TgdMaterialGlass.\n\tconst suzanne = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzanne,\n\t\tskybox,\n\t});"}
const FULL = "import {\n\ttype TgdContext,\n\tTgdPainterClear,\n\tTgdPainterMeshGltf,\n\tTgdPainterSkybox,\n\tTgdPainterState,\n\tTgdTextureCube,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport SuzanneGlassURL from \"@/assets/mesh/suzanne-glass.glb\";\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\";\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\";\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\";\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\";\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\";\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera.fitSpaceAtTarget(2.5, 2.5);\n\tconst skybox = new TgdTextureCube(context, {\n\t\timagePosX: assets.image.posX,\n\t\timagePosY: assets.image.posY,\n\t\timagePosZ: assets.image.posZ,\n\t\timageNegX: assets.image.negX,\n\t\timageNegY: assets.image.negY,\n\t\timageNegZ: assets.image.negZ,\n\t});\n\t// The glTF material uses KHR_materials_transmission,\n\t// so the default material is a TgdMaterialGlass.\n\tconst suzanne = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzanne,\n\t\tskybox,\n\t});\n\tcontext.add(\n\t\tnew TgdPainterClear(context, { depth: 1 }),\n\t\tnew TgdPainterSkybox(context, {\n\t\t\tcamera: context.camera,\n\t\t\ttexture: skybox,\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tchildren: [suzanne],\n\t\t}),\n\t);\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{\n\t\t\t\tglb: { suzanne: SuzanneGlassURL },\n\t\t\t\timage: {\n\t\t\t\t\tposX: PosX,\n\t\t\t\t\tposY: PosY,\n\t\t\t\t\tposZ: PosZ,\n\t\t\t\t\tnegX: NegX,\n\t\t\t\t\tnegY: NegY,\n\t\t\t\t\tnegZ: NegZ,\n\t\t\t\t},\n\t\t\t}}\n\t\t\toptions={{ alpha: false }}\n\t\t\tcontroller={{ inertiaOrbit: 1000 }}\n\t\t\tgizmo\n\t\t/>\n\t);\n}\n"

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