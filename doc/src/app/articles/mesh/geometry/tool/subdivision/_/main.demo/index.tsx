/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"createMesh()":"function createMesh(\n\tcontext: TgdContext,\n\tmaterial: TgdMaterial,\n\tmode: TgdGeometrySubdivisionOptions[\"mode\"],\n\tlevels: number,\n): TgdPainterMesh {\n\tconst box = new TgdGeometryBox({\n\t\tcenter: [(levels - 1) * 1.5, 0, 0],\n\t}).computeTangents();\n\tconst geometry =\n\t\tlevels > 0 ? tgdGeometrySubdivision(box, { mode, levels }) : box;\n\treturn new TgdPainterMesh(context, { geometry, material });\n}","createMaterialTangents()":"/**\n * Show the tangents (attribute CUSTOM_ATTRIBUTE_3) as colors.\n */\nfunction createMaterialTangents(): TgdMaterial {\n\treturn new TgdMaterial({\n\t\tvaryings: { varTangent: \"vec3\" },\n\t\tvertexShaderCode: [\"varTangent = CUSTOM_ATTRIBUTE_3.xyz;\"],\n\t\tfragmentShaderCode: [\n\t\t\t\"return vec4(0.5 * (vec3(1.0) + normalize(varTangent)), 1.0);\",\n\t\t],\n\t});\n}"}
const FULL = "import {\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdGeometryBox,\n\ttype TgdGeometrySubdivisionOptions,\n\tTgdMaterial,\n\tTgdMaterialDiffuse,\n\tTgdMaterialNormals,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdGeometrySubdivision,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\n\nimport View, { type Assets } from \"@/components/demo/Tgd\";\nimport UVGridURL from \"@/assets/image/uv-grid.webp\";\n\nconst MODES: Array<TgdGeometrySubdivisionOptions[\"mode\"]> = [\n\t\"catmull-clark\",\n\t\"simple\",\n];\n\ntype Settings = Record<\"mode\" | \"material\", number>;\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.1, 0.1, 1],\n\t\tdepth: 1,\n\t});\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.uvGrid);\n\tconst materials: TgdMaterial[] = [\n\t\tnew TgdMaterialDiffuse({ color: texture, lockLightsToCamera: true }),\n\t\tnew TgdMaterialNormals(),\n\t\tcreateMaterialTangents(),\n\t];\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t});\n\tcontext.add(clear, state);\n\tcontext.camera.fitSpaceAtTarget(4, 2);\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t});\n\treturn (settings: Settings) => {\n\t\tstate.removeAll();\n\t\tconst material = materials[settings.material];\n\t\tfor (const levels of [0, 1, 2]) {\n\t\t\tstate.add(\n\t\t\t\tcreateMesh(context, material, MODES[settings.mode], levels),\n\t\t\t);\n\t\t}\n\t\tcontext.paint();\n\t};\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\tassets={{ image: { uvGrid: UVGridURL } }}\n\t\t\tsettings={{\n\t\t\t\tmode: {\n\t\t\t\t\tlabel: \"mode\",\n\t\t\t\t\tvalue: 0,\n\t\t\t\t\tstep: [\"catmull-clark\", \"simple\"],\n\t\t\t\t},\n\t\t\t\tmaterial: {\n\t\t\t\t\tlabel: \"material\",\n\t\t\t\t\tvalue: 0,\n\t\t\t\t\tstep: [\"Diffuse\", \"Normals\", \"Tangents\"],\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n\nfunction createMesh(\n\tcontext: TgdContext,\n\tmaterial: TgdMaterial,\n\tmode: TgdGeometrySubdivisionOptions[\"mode\"],\n\tlevels: number,\n): TgdPainterMesh {\n\tconst box = new TgdGeometryBox({\n\t\tcenter: [(levels - 1) * 1.5, 0, 0],\n\t}).computeTangents();\n\tconst geometry =\n\t\tlevels > 0 ? tgdGeometrySubdivision(box, { mode, levels }) : box;\n\treturn new TgdPainterMesh(context, { geometry, material });\n}\n\n/**\n * Show the tangents (attribute CUSTOM_ATTRIBUTE_3) as colors.\n */\nfunction createMaterialTangents(): TgdMaterial {\n\treturn new TgdMaterial({\n\t\tvaryings: { varTangent: \"vec3\" },\n\t\tvertexShaderCode: [\"varTangent = CUSTOM_ATTRIBUTE_3.xyz;\"],\n\t\tfragmentShaderCode: [\n\t\t\t\"return vec4(0.5 * (vec3(1.0) + normalize(varTangent)), 1.0);\",\n\t\t],\n\t});\n}\n"

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