/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./webcam.demo"

const FOCUS = {"Detail #1":"\tcontext.camera.fitSpaceAtTarget(1.5, 1.5);\n\tconst clear = new TgdPainterClear(context, {\n\t\tdepth: 1,\n\t\tcolor: [0.2, 0.1, 0, 1],\n\t});\n\tconst color = new TgdTexture2D(context);\n\trefTexture.current = color;\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tmaterial: new TgdMaterialDiffuse({\n\t\t\tcolor,\n\t\t\tlockLightsToCamera: true,\n\t\t}),\n\t});\n\tconst meshPainter = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tchildren: [clear, mesh],\n\t});\n\tcontext.add(meshPainter, (time) => {\n\t\tmesh.transfo.setEulerRotation(time * 4.4885, time * 6.1403, 0);\n\t});\n\tcontext.play();\n\treturn ({ camera }: { camera: number }) => {\n\t\tcolor.loadWebcam({\n\t\t\tfacingMode: camera === 0 ? \"user\" : \"environment\",\n\t\t});\n\t};"}
const FULL = "import {\n\ttype TgdContext,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n\tTgdMaterialDiffuse,\n} from \"@tolokoban/tgd\";\nimport React from \"react\";\nimport View from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext, refTexture: React.RefObject<TgdTexture2D | null>) {\n\tcontext.camera.fitSpaceAtTarget(1.5, 1.5);\n\tconst clear = new TgdPainterClear(context, {\n\t\tdepth: 1,\n\t\tcolor: [0.2, 0.1, 0, 1],\n\t});\n\tconst color = new TgdTexture2D(context);\n\trefTexture.current = color;\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tmaterial: new TgdMaterialDiffuse({\n\t\t\tcolor,\n\t\t\tlockLightsToCamera: true,\n\t\t}),\n\t});\n\tconst meshPainter = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tchildren: [clear, mesh],\n\t});\n\tcontext.add(meshPainter, (time) => {\n\t\tmesh.transfo.setEulerRotation(time * 4.4885, time * 6.1403, 0);\n\t});\n\tcontext.play();\n\treturn ({ camera }: { camera: number }) => {\n\t\tcolor.loadWebcam({\n\t\t\tfacingMode: camera === 0 ? \"user\" : \"environment\",\n\t\t});\n\t};\n}\n\nexport default function Demo() {\n\tconst refTexture = React.useRef<TgdTexture2D | null>(null);\n\t// Release the webcam when we leave the page.\n\tReact.useEffect(() => () => refTexture.current?.delete(), []);\n\treturn (\n\t\t<View\n\t\t\tonReady={(context) => init(context, refTexture)}\n\t\t\tcontroller={{ inertiaOrbit: 1000 }}\n\t\t\tsettings={{\n\t\t\t\tcamera: {\n\t\t\t\t\tlabel: \"camera\",\n\t\t\t\t\tvalue: 0,\n\t\t\t\t\tstep: [\"Front\", \"Back\"],\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n"

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