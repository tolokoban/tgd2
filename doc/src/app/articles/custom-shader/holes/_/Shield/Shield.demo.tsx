import * as React from "react"
import {
    tgdCanvasCreateWithContext2D,
    TgdCodeBloc,
    TgdContext,
    TgdControllerCameraOrbit,
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

import View, { Assets } from "@/components/demo/Tgd"
import AssetGlb from "../assets/shield.glb"
import AssetBackground from "../assets/background.png"

export default function ViewShield(): JSX.Element {
    return (
        <View
            onReady={init}
            assets={{
                image: {
                    background: AssetBackground,
                },
                glb: {
                    shield: AssetGlb,
                },
            }}
        />
    )
}

// #region Initialising WebGL
function init(context: TgdContext, assets: Assets) {
    const asset = assets.glb.shield
    const background = assets.image.background

    const w = 4096
    const h = w
    const { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h)
    const holes = new TgdTexture2D(context).loadBitmap(canvas)
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
        holes.loadBitmap(canvas)
        context.paint()
    }, 500)
    context.camera.transfo.distance = 2.5
    const painter = new TgdPainterMeshGltf(context, {
        asset,
        material: ({ color }) => {
            if (!(color instanceof TgdTexture2D))
                throw Error("No abedo provided!")

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
                new TgdPainterBackground(context, {
                    texture: new TgdTexture2D(context).loadBitmap(background),
                }),
                painter,
            ],
        })
    )
    context.paint()
    context.canvas.addEventListener("dblclick", () => {
        orbiter.reset(300)
    })
}
// #endregion

// #region Class MaterialHole
interface MaterialHoleOptions {
    abedo: TgdTexture2D
    holes: TgdTexture2D
}

class MaterialHole extends TgdMaterial {
    private readonly lightDirection = new TgdVec3(0.1, 0.2, 1)

    constructor(private readonly options: MaterialHoleOptions) {
        super({
            uniforms: {
                texAbedo: "sampler2D",
                texHoles: "sampler2D",
                uniLightDir: "vec3",
            },
            varyings: {
                varNormal: "vec3",
                varUV: "vec2",
            },
            fragmentShaderCode: [
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
            ],
            vertexShaderCode: [
                "varNormal = mat3(uniModelViewMatrix) * NORMAL;",
                "varUV = TEXCOORD_0;",
            ],
            setUniforms: (program: TgdProgram): void => {
                program.uniform3fv("uniLightDir", this.lightDirection)

                this.options.abedo.activate(0, program, "texAbedo")
                this.options.holes.activate(1, program, "texHoles")
            },
        })
    }
}
//#endregion
