/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0, 0, 0, 1],\n\t\tdepth: 1,\n\t});\n\tconst uniformCamera = new TgdUniformBufferObject(context, {\n\t\tbindingPoint: 0,\n\t\tuniforms: {\n\t\t\tuniModelViewMatrix: \"mat4\",\n\t\t\tuniProjectionMatrix: \"mat4\",\n\t\t},\n\t});\n\tconst painter = new TgdPainterProgram(context, {\n\t\tdrawMode: \"LINES\",\n\t\tuniforms: {\n\t\t\tuniformCamera,\n\t\t\tuniformColors: {\n\t\t\t\tbindingPoint: 31,\n\t\t\t\tuniforms: {\n\t\t\t\t\tuniHue: \"float\",\n\t\t\t\t},\n\t\t\t\tvalues: {\n\t\t\t\t\tuniHue: 0.5,\n\t\t\t\t},\n\t\t\t},\n\t\t},\n\t\tvarying: {\n\t\t\tvarColor: \"vec4\",\n\t\t},\n\t\tdataset: [\n\t\t\t{\n\t\t\t\tattribs: {\n\t\t\t\t\tattPos: {\n\t\t\t\t\t\ttype: \"vec3\",\n\t\t\t\t\t\tdata: new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]),\n\t\t\t\t\t},\n\t\t\t\t\tattColor: {\n\t\t\t\t\t\ttype: \"vec4\",\n\t\t\t\t\t\tdata: new Float32Array([\n\t\t\t\t\t\t\t0.8, 0.8, 0.8, 1, 1, 0.2, 0.2, 1, 0.2, 1, 0.2, 1, 0.2, 0.2, 1, 1,\n\t\t\t\t\t\t]),\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\telements: new Uint8Array([0, 1, 0, 2, 0, 3]),\n\t\tvert: {\n\t\t\tfunctions: {\n\t\t\t\t...tgdCodeFunction_shiftHue(),\n\t\t\t},\n\t\t\tmainCode: [\n\t\t\t\t\"varColor = vec4(shiftHue(attColor.rgb, uniHue), attColor.a);\",\n\t\t\t\t\"gl_Position = vec4(attPos, 1.0);\",\n\t\t\t],\n\t\t},\n\t\tfrag: {\n\t\t\tmainCode: [\"FragColor = varColor;\"],\n\t\t},\n\t});\n\tcontext.add(clear, painter);\n\tcontext.paint();\n\tpainter.debug();\n}"}
const FULL = "import {\n\ttype TgdContext,\n\tTgdPainterClear,\n\tTgdPainterProgram,\n\tTgdUniformBufferObject,\n\ttgdCodeFunction_shiftHue,\n} from \"@tolokoban/tgd\";\n\nimport View from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0, 0, 0, 1],\n\t\tdepth: 1,\n\t});\n\tconst uniformCamera = new TgdUniformBufferObject(context, {\n\t\tbindingPoint: 0,\n\t\tuniforms: {\n\t\t\tuniModelViewMatrix: \"mat4\",\n\t\t\tuniProjectionMatrix: \"mat4\",\n\t\t},\n\t});\n\tconst painter = new TgdPainterProgram(context, {\n\t\tdrawMode: \"LINES\",\n\t\tuniforms: {\n\t\t\tuniformCamera,\n\t\t\tuniformColors: {\n\t\t\t\tbindingPoint: 31,\n\t\t\t\tuniforms: {\n\t\t\t\t\tuniHue: \"float\",\n\t\t\t\t},\n\t\t\t\tvalues: {\n\t\t\t\t\tuniHue: 0.5,\n\t\t\t\t},\n\t\t\t},\n\t\t},\n\t\tvarying: {\n\t\t\tvarColor: \"vec4\",\n\t\t},\n\t\tdataset: [\n\t\t\t{\n\t\t\t\tattribs: {\n\t\t\t\t\tattPos: {\n\t\t\t\t\t\ttype: \"vec3\",\n\t\t\t\t\t\tdata: new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]),\n\t\t\t\t\t},\n\t\t\t\t\tattColor: {\n\t\t\t\t\t\ttype: \"vec4\",\n\t\t\t\t\t\tdata: new Float32Array([\n\t\t\t\t\t\t\t0.8, 0.8, 0.8, 1, 1, 0.2, 0.2, 1, 0.2, 1, 0.2, 1, 0.2, 0.2, 1, 1,\n\t\t\t\t\t\t]),\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\telements: new Uint8Array([0, 1, 0, 2, 0, 3]),\n\t\tvert: {\n\t\t\tfunctions: {\n\t\t\t\t...tgdCodeFunction_shiftHue(),\n\t\t\t},\n\t\t\tmainCode: [\n\t\t\t\t\"varColor = vec4(shiftHue(attColor.rgb, uniHue), attColor.a);\",\n\t\t\t\t\"gl_Position = vec4(attPos, 1.0);\",\n\t\t\t],\n\t\t},\n\t\tfrag: {\n\t\t\tmainCode: [\"FragColor = varColor;\"],\n\t\t},\n\t});\n\tcontext.add(clear, painter);\n\tcontext.paint();\n\tpainter.debug();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 1000,\n\t\t\t}}\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t/>\n\t);\n}\n"

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