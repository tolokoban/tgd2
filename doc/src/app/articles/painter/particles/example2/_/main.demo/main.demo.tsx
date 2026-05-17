import {
    tgdCodeFunction_perlinNoise,
    TgdContext,
    TgdDataset,
    TgdPainterClear,
    TgdPainterParticles,
    TgdPainterState,
    TgdShaderFragment,
    TgdShaderVertex,
    TgdTexture2D,
} from "@tolokoban/tgd"

import View, { Assets } from "@/components/demo/Tgd"

import BubbleURL from "./soap-bubble.webp"

const COUNT = 50000
const DURATION = 5

// #begin
function init(context: TgdContext, assets: Assets) {
    console.log("🐞 [main.demo@22] assets =", assets) // @FIXME: Remove this line written on 2026-05-17 at 21:42
    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })
    const dataset: TgdDataset = makeDataset(COUNT, DURATION)
    const particles = new TgdPainterParticles(context, {
        dataset,
        drawMode: "POINTS",
        textures: {
            uniTexture: new TgdTexture2D(context).loadBitmap(assets.image.bubble),
        },
        shader: {
            vert: new TgdShaderVertex({
                functions: {
                    ...tgdCodeFunction_perlinNoise(),
                },
                uniforms: {
                    uniTime: "float",
                    uniDelta: "float",
                    uniCenter: "vec2",
                    uniSpeed: "vec2",
                    uniSize: "float",
                },
                varying: {
                    varAlpha: "float",
                },
                attributes: dataset.getTypeRecord(),
                mainCode: [
                    `float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,
                    "varAlpha = 1.0 - life;",
                    "gl_Position = vec4(attPosition, 0, 1);",
                    "gl_PointSize = uniSize * (0.1 + .9 * life * life);",
                    "varPosition -= attSpeed * uniDelta * varAlpha;",
                    "if (life >= 1.0) {",
                    [
                        `varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,
                        "varPosition = uniCenter;",
                        "vec2 shift = 0.1 * vec2(",
                        ["perlinNoise(vec3(attRandom.xy, uniTime)),", "perlinNoise(vec3(attRandom.yx, uniTime))"],
                        ");",
                        "varPosition += shift;",
                        "varSpeed = 1e5 * uniSpeed / uniDelta;",
                    ],
                    "}",
                ],
            }),
            frag: new TgdShaderFragment({
                mainCode: [
                    "vec4 color = texture(uniTexture, gl_PointCoord);",
                    "color.a *= varAlpha;",
                    "FragColor = color;",
                ],
            }),
        },
        setUniforms: ({ time, delta, prg }) => {
            prg.uniform1f("uniSize", Math.min(context.width, context.height) / 5)
            prg.uniform1f("uniDelta", delta)
            prg.uniform1f("uniTime", time)
            prg.uniform2f("uniCenter", context.inputs.pointer.x, context.inputs.pointer.y)
            prg.uniform2f("uniSpeed", context.inputs.pointer.speedX, context.inputs.pointer.speedY)
        },
    })
    context.add(
        clear,
        new TgdPainterState(context, {
            blend: "alpha",
            children: [particles],
        }),
    )
    context.play()
}
// #end

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                image: {
                    bubble: BubbleURL,
                },
            }}
        />
    )
}

function makeDataset(count: number, duration: number): TgdDataset {
    const dataset = new TgdDataset({
        attPosition: "vec2",
        attSpeed: "vec2",
        attBirth: "float",
        attRandom: "vec2",
    })
    const attPosition: number[] = []
    const attSpeed: number[] = []
    const attBirth: number[] = []
    const attRandom: number[] = []
    const rnd = () => Math.random()
    for (let i = 0; i < count; i++) {
        attPosition.push(10, 10)
        attSpeed.push(0, 0)
        attBirth.push((-i / count) * duration)
        attRandom.push(rnd(), rnd())
    }
    dataset.set("attPosition", new Float32Array(attPosition))
    dataset.set("attSpeed", new Float32Array(attSpeed))
    dataset.set("attBirth", new Float32Array(attBirth))
    dataset.set("attRandom", new Float32Array(attRandom))
    return dataset
}
