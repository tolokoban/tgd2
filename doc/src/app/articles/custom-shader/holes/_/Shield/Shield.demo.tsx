import * as React from "react"
import { Theme, CommonProps, styleCommon } from "@tolokoban/ui"
import {
    tgdCanvasCreateWithContext2D,
    TgdContext,
    TgdControllerCameraOrbit,
    tgdLoadGlb,
    tgdLoadImage,
    TgdMaterial,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterMeshGltf,
    TgdPainterState,
    TgdProgram,
    TgdTexture2D,
    TgdVec3,
    TgdVec4,
    WebglAttributeType,
    webglPresetBlend,
    webglPresetDepth,
    WebglUniformType,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"
import AssetGlb from "../assets/shield.glb"
import AssetBackground from "../assets/background.png"

export default function ViewShield(): JSX.Element {
    return <View onReady={init} />
}

// #region Initialising WebGL
async function init(context: TgdContext) {
    const asset = await tgdLoadGlb(AssetGlb)
    if (!asset) throw Error(`Unable to load GLB file: ${AssetGlb}`)

    const background = await tgdLoadImage(AssetBackground)
    if (!background)
        throw Error(`Unable to load image file: ${AssetBackground}`)

    const w = 4096
    const h = w
    const { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h)
    const holes = context.textures2D.create({
        image: canvas,
    })
    ctx.clearRect(0, 0, w, h)
    let count = 0
    window.setInterval(() => {
        if (count > 59) {
            ctx.clearRect(0, 0, w, h)
            count = 0
            return
        }

        count++
        ctx.fillStyle = "#fff"
        const x = Math.random() * w
        const y = Math.random() * h
        const r = 50 + 400 * Math.random()
        ctx.beginPath()
        ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2)
        ctx.fill()
        holes.loadImage(canvas)
        context.paint()
    }, 500)
    context.camera.distance = 2.5
    const painter = new TgdPainterMeshGltf(context, {
        asset,
        materialFactory: ({ color }: { color?: TgdTexture2D }) => {
            if (!color) throw Error("No abedo provided!")

            return new MaterialHole({ abedo: color, holes })
        },
    })
    const orbiter = new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 500,
    })
    context.add(
        new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            blend: webglPresetBlend.alpha,
            children: [
                new TgdPainterClear(context, {
                    color: new TgdVec4(0.5, 0.5, 0.5, 1),
                    depth: 1,
                }),
                new TgdPainterBackground(
                    context,
                    context.textures2D.create({
                        image: background,
                    })
                ),
                painter,
            ],
        })
    )
    painter.paint()
    context.canvas.addEventListener("dblclick", () => {
        orbiter.reset(300)
    })
}
// #endregion

// //#region MaterialHole
interface MaterialHoleOptions {
    abedo: TgdTexture2D
    holes: TgdTexture2D
}

class MaterialHole implements TgdMaterial {
    private readonly lightDirection = new TgdVec3(0.1, 0.2, 1)

    public readonly varyings: { [name: string]: WebglAttributeType } = {
        varNormal: "vec3",
        varUV: "vec2",
    }
    public readonly uniforms: { [name: string]: WebglUniformType } = {
        texAbedo: "sampler2D",
        texHoles: "sampler2D",
        uniLightDir: "vec3",
    }
    public readonly fragmentShaderCode = [
        "vec3 normal = normalize(varNormal);",
        `float light = abs(dot(normal, uniLightDir));`,
        `light = pow(light, 9.0) * 0.9;`,
        `light += 0.2;`,
        `vec3 color = texture(texAbedo, varUV).rgb;`,
        `float spec = max(0.0, reflect(uniLightDir, normal).z);`,
        `spec = pow(spec, 20.0);`,
        `vec3 holes = texture(texHoles, varUV).rgb;`,
        `if (holes.r > 0.99) discard;`,
        `return vec4(color * light + spec + holes * 0.25, 1.0 - holes.r);`,
    ]
    public readonly vertexShaderCode = [
        "varNormal = mat3(uniModelViewMatrix) * NORMAL;",
        "varUV = TEXCOORD_0;",
    ]

    constructor(private readonly options: MaterialHoleOptions) {}

    setUniforms(program: TgdProgram): void {
        program.uniform3fv("uniLightDir", this.lightDirection)

        this.options.abedo.activate(program, "texAbedo", 0)
        this.options.holes.activate(program, "texHoles", 1)
    }
}
//#endregion
