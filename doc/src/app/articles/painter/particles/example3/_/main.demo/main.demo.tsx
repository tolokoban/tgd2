import {
    tgdCalcRandom,
    tgdCanvasCreatePalette,
    tgdCodeFunction_perlinNoise,
    TgdContext,
    TgdDataset,
    TgdFilter,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterParticles,
    TgdPainterState,
    TgdShaderFragment,
    TgdShaderVertex,
    TgdTexture2D,
    TgdTime,
} from "@tolokoban/tgd"

import View, { Assets } from "@/components/demo/Tgd"

const COUNT = 200000
const DURATION = 3

// #begin
function init(context: TgdContext, assets: Assets) {
    const extensions = ["EXT_color_buffer_float", "EXT_float_blend"]
    for (const name of extensions) {
        const ext = context.gl.getExtension(name)
        if (!ext) throw new Error(`Extension ${name} not supported`)
    }

    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })
    const dataset: TgdDataset = makeDataset(COUNT, DURATION)
    const virtualTime = new TgdTime({ context, speed: 0 })
    const particles = new TgdPainterParticles(context, {
        dataset,
        drawMode: "POINTS",
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
                    "gl_PointSize = uniSize * (0.2 + .8 * life * life);",
                    "varPosition -= attSpeed * uniDelta * varAlpha;",
                    "if (life >= 1.0) {",
                    [
                        `varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,
                        "varPosition = uniCenter;",
                        "varSpeed = normalize(uniSpeed) * 1e-1;",
                        "vec2 shift = 0.3 * vec2(",
                        ["perlinNoise(vec3(attRandom.xy, uniTime)),", "perlinNoise(vec3(attRandom.yx, uniTime))"],
                        ");",
                        "varSpeed += shift;",
                    ],
                    "}",
                ],
            }),
            frag: new TgdShaderFragment({
                mainCode: [
                    "vec2 p = 2.0 * (gl_PointCoord.xy - vec2(.5));",
                    "float dist = dot(p, p);",
                    "if (dist >= 1.0) discard;",
                    "float value = 1e-3;",
                    "value *= 1.0 - dist;",
                    "value *= varAlpha;",
                    "FragColor = vec4(value, 0.0, 0.0, 1.0);",
                ],
            }),
        },
        setUniforms: ({ _time, delta, prg }) => {
            if (virtualTime.speed === 0) {
                virtualTime.reset()
                virtualTime.speed = 1
            }
            prg.uniform1f("uniSize", Math.min(context.width, context.height) / 5)
            prg.uniform1f("uniDelta", delta)
            prg.uniform1f("uniTime", virtualTime.seconds)
            prg.uniform2f("uniCenter", context.inputs.pointer.x, context.inputs.pointer.y)
            prg.uniform2f("uniSpeed", context.inputs.pointer.speedX, context.inputs.pointer.speedY)
        },
    })
    const textureFB = new TgdTexture2D(context, {
        params: {
            minFilter: "NEAREST",
            magFilter: "NEAREST",
            wrapR: "CLAMP_TO_EDGE",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE",
        },
        storage: {
            format: "R32F / RED / FLOAT",
        },
    })
    const framebuffer = new TgdPainterFramebuffer(context, {
        antiAliasing: false,
        textureColor0: textureFB,
        children: [
            new TgdPainterState(context, {
                blend: "add",
                children: [clear, particles],
            }),
        ],
    })
    const palette = new TgdTexture2D(context, {
        params: {
            minFilter: "LINEAR",
            magFilter: "LINEAR",
        },
    }).loadBitmap(tgdCanvasCreatePalette(["#000", "#f00", "#f92", "#ee3", "#ff4", "#fff"]))
    const filters = new TgdPainterFilter(context, {
        flipY: true,
        texture: framebuffer.textureColor0,
        filters: [
            new TgdFilter({
                textures: {
                    texPalette: palette,
                },
                fragmentShaderCode: [
                    "float u = texture(uniTexture, varUV).r;",
                    "FragColor = texture(texPalette, vec2(u, .5));",
                ],
            }),
        ],
    })
    context.add(clear, framebuffer, filters)
    context.play()
}
// #end

export default function Demo() {
    return <View onReady={init} options={{ alpha: false }} />
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
    const rnd = (min = 0, max = 1) => tgdCalcRandom(min, max)
    for (let i = 0; i < count; i++) {
        attPosition.push(rnd(-0.1, +0.1), rnd(-0.1, +0.1))
        attSpeed.push(rnd(-0.1, +0.1), rnd(-0.1, +0.1))
        attBirth.push((-i / count) * duration)
        attRandom.push(rnd(), rnd())
    }
    dataset.set("attPosition", new Float32Array(attPosition))
    dataset.set("attSpeed", new Float32Array(attSpeed))
    dataset.set("attBirth", new Float32Array(attBirth))
    dataset.set("attRandom", new Float32Array(attRandom))
    return dataset
}
