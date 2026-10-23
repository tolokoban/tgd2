/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./gltf.demo"

const FOCUS = {"Initializing WebGL":"\tconst skybox = TgdTextureCube.lazyLoad(context, {\n\t\tsize: 1024,\n\t\tposX: PosX,\n\t\tposY: PosY,\n\t\tposZ: PosZ,\n\t\tnegX: NegX,\n\t\tnegY: NegY,\n\t\tnegZ: NegZ,\n\t});\n\tconst { helmet: asset } = assets.glb;\n\tconst gltfMaterial = asset.getMaterial(0);\n\tconst pbr = gltfMaterial.pbrMetallicRoughness;\n\tconst material = new TgdMaterialGltf({\n\t\ttextures: {\n\t\t\talbedo: asset.createTexture2D(context, pbr?.baseColorTexture?.index ?? 0),\n\t\t\t// glTF stores roughness in GREEN and metallic in BLUE.\n\t\t\tmetallicRoughness: asset.createTexture2D(\n\t\t\t\tcontext,\n\t\t\t\tpbr?.metallicRoughnessTexture?.index ?? 0,\n\t\t\t),\n\t\t\tnormal: asset.createTexture2D(context, gltfMaterial.normalTexture?.index ?? 0),\n\t\t\tocclusion: asset.createTexture2D(context, gltfMaterial.occlusionTexture?.index ?? 0),\n\t\t\temission: asset.createTexture2D(context, gltfMaterial.emissiveTexture?.index ?? 0),\n\t\t\tskybox,\n\t\t},\n\t});\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: asset.makeGeometry(),\n\t\ttransfo: asset.createTransfoFromNode(asset.getNode(0)),\n\t\tmaterial,\n\t});"}
const FULL = "import {\n\ttype TgdContext,\n\tTgdMaterialGltf,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterSkybox,\n\tTgdPainterState,\n\tTgdTextureCube,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport HelmetURL from \"@/assets/mesh/helmet.glb\";\nimport PosX from \"@/assets/cubemap/1024/warehouse/posX.webp\";\nimport PosY from \"@/assets/cubemap/1024/warehouse/posY.webp\";\nimport PosZ from \"@/assets/cubemap/1024/warehouse/posZ.webp\";\nimport NegX from \"@/assets/cubemap/1024/warehouse/negX.webp\";\nimport NegY from \"@/assets/cubemap/1024/warehouse/negY.webp\";\nimport NegZ from \"@/assets/cubemap/1024/warehouse/negZ.webp\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst skybox = TgdTextureCube.lazyLoad(context, {\n\t\tsize: 1024,\n\t\tposX: PosX,\n\t\tposY: PosY,\n\t\tposZ: PosZ,\n\t\tnegX: NegX,\n\t\tnegY: NegY,\n\t\tnegZ: NegZ,\n\t});\n\tconst { helmet: asset } = assets.glb;\n\tconst gltfMaterial = asset.getMaterial(0);\n\tconst pbr = gltfMaterial.pbrMetallicRoughness;\n\tconst material = new TgdMaterialGltf({\n\t\ttextures: {\n\t\t\talbedo: asset.createTexture2D(context, pbr?.baseColorTexture?.index ?? 0),\n\t\t\t// glTF stores roughness in GREEN and metallic in BLUE.\n\t\t\tmetallicRoughness: asset.createTexture2D(\n\t\t\t\tcontext,\n\t\t\t\tpbr?.metallicRoughnessTexture?.index ?? 0,\n\t\t\t),\n\t\t\tnormal: asset.createTexture2D(context, gltfMaterial.normalTexture?.index ?? 0),\n\t\t\tocclusion: asset.createTexture2D(context, gltfMaterial.occlusionTexture?.index ?? 0),\n\t\t\temission: asset.createTexture2D(context, gltfMaterial.emissiveTexture?.index ?? 0),\n\t\t\tskybox,\n\t\t},\n\t});\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: asset.makeGeometry(),\n\t\ttransfo: asset.createTransfoFromNode(asset.getNode(0)),\n\t\tmaterial,\n\t});\n\tcontext.camera.fitSpaceAtTarget(2.2, 2.2);\n\tcontext.add(\n\t\tnew TgdPainterClear(context, { depth: 1 }),\n\t\tnew TgdPainterSkybox(context, {\n\t\t\tcamera: context.camera,\n\t\t\ttexture: skybox,\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: [mesh],\n\t\t}),\n\t);\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{ glb: { helmet: HelmetURL } }}\n\t\t\toptions={{ alpha: false }}\n\t\t\tcontroller={{ inertiaOrbit: 1000 }}\n\t\t\tgizmo\n\t\t/>\n\t);\n}\n"

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