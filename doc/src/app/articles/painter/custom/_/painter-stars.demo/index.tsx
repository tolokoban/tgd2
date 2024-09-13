/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./painter-stars.demo"

const FOCUS = "function init(ctx: TgdContext): TgdContext {\n    new TgdControllerCameraOrbit(ctx, {\n        inertiaOrbit: 1000,\n    })\n    ctx.add(new TgdPainterClear(ctx, { color: [0, 0, 0, 1] }))\n    ctx.paint()\n    tgdLoadArrayBuffer(dataURL).then(buff => {\n        if (!buff) return\n\n        const data = new Float32Array(buff)\n        const painter = new PainterStars(ctx, data)\n        ctx.add(\n            new TgdPainterState(ctx, {\n                blend: \"sprite\",\n                children: [new PainterNames(ctx), painter],\n            })\n        )\n        ctx.paint()\n    })\n    return ctx\n}"
const FULL = "import {\n    TgdPainter,\n    TgdContext,\n    TgdProgram,\n    TgdDataset,\n    TgdVertexArray,\n    TgdPainterClear,\n    tgdLoadArrayBuffer,\n    TgdControllerCameraOrbit,\n    TgdCameraPerspective,\n    TgdPainterState,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\nimport { PainterNames } from \"./painter-names\"\n\nimport dataURL from \"../stars.dat\"\nimport vert from \"./painter-stars.vert\"\nimport frag from \"./painter-stars.frag\"\n\nfunction init(ctx: TgdContext): TgdContext {\n    new TgdControllerCameraOrbit(ctx, {\n        inertiaOrbit: 1000,\n    })\n    ctx.add(new TgdPainterClear(ctx, { color: [0, 0, 0, 1] }))\n    ctx.paint()\n    tgdLoadArrayBuffer(dataURL).then(buff => {\n        if (!buff) return\n\n        const data = new Float32Array(buff)\n        const painter = new PainterStars(ctx, data)\n        ctx.add(\n            new TgdPainterState(ctx, {\n                blend: \"sprite\",\n                children: [new PainterNames(ctx), painter],\n            })\n        )\n        ctx.paint()\n    })\n    return ctx\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n\nexport class PainterStars extends TgdPainter {\n    // Number of stars\n    private readonly count: number\n    private readonly prg: TgdProgram\n    private readonly vao: TgdVertexArray\n\n    private readonly fixedCamera = new TgdCameraPerspective({\n        distance: 0,\n        near: 0.1,\n        far: 2.0,\n        target: [0, 0, 0],\n        fovy: Math.PI / 3,\n    })\n\n    /**\n     *\n     * @param data A sequence of 4 floats: longitude, latitude, brightness and color.\n     */\n    constructor(private readonly context: TgdContext, data: Float32Array) {\n        super()\n        this.count = data.length >> 2\n        this.prg = context.programs.create(\n            {\n                vert,\n                frag,\n            },\n            \"PainterStars\"\n        )\n        const dataset = new TgdDataset({\n            attStar: \"vec4\",\n        })\n        dataset.set(\"attStar\", data)\n        this.vao = context.createVAO(this.prg, [dataset])\n    }\n\n    paint() {\n        const { context, prg, vao, fixedCamera } = this\n        const { camera, gl } = context\n        fixedCamera.orientation = camera.orientation\n        prg.use()\n        prg.uniformMatrix4fv(\"uniModelViewMatrix\", fixedCamera.matrixModelView)\n        prg.uniformMatrix4fv(\n            \"uniProjectionMatrix\",\n            fixedCamera.matrixProjection\n        )\n        prg.uniform1f(\n            \"uniVegaSizeInPixels\",\n            Math.max(context.width, context.height) * 0.05\n        )\n        vao.bind()\n        gl.drawArrays(gl.POINTS, 0, this.count)\n    }\n\n    delete() {\n        this.context.programs.delete(this.prg)\n        this.vao.delete()\n    }\n}\n"

export default function DemoContainer() {
    const [full, setFull] = React.useState(false)
    return <>
        <div className="half-left"><Demo /></div>
        <div className="half-right">
            <button
                style={{ all: "inherit", display: "contents" }}
                onClick={() => setFull(!full)}
            >
                <ViewPanel display="flex" gap={".5em"}>
                    <input type="checkbox" checked={full} onChange={() => setFull(!full)}/>
                    <label style={{ cursor: "pointer" }}>
                        Afficher le code complet
                    </label>
                </ViewPanel>
            </button>
            <CodeViewer language="tsx" value={full ? FULL : FOCUS} />
        </div>
    </>
}