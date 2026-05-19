import {
    tgdCalcClamp,
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

const DURATION = 1

// #begin
function init(context: TgdContext, assets: Assets) {
    const extensions = ["EXT_color_buffer_float", "EXT_float_blend"]
    for (const name of extensions) {
        const ext = context.gl.getExtension(name)
        if (!ext) throw new Error(`Extension ${name} not supported`)
    }

    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })
    // const is32bits = context.extensions.EXT_color_buffer_float
    const is32bits = false
    const dataset: TgdDataset = makeDataset(is32bits ? 50000 : 80000, DURATION)
    const virtualTime = new TgdTime({ context, speed: 0 })
    const particles = new TgdPainterParticles(context, {
        dataset,
        drawMode: "POINTS",
        shader: {
            vert: new TgdShaderVertex({
                functions: {
                    ...tgdCodeFunction_perlinNoise(),
                    computeSize: [
                        "float computeSize(float x) {",
                        [
                            "// 1 - 4*((x-1)^2-0.5)^2",
                            "float t = x - 1.0;",
                            "float a = t * t - 0.5;",
                            "return 1.0 - 4.0 * a * a;",
                        ],
                        "}",
                    ],
                },
                uniforms: {
                    uniTime: "float",
                    uniDelta: "float",
                    uniCenter: "vec2",
                    uniSpeed: "vec2",
                    uniSize: "float",
                },
                attributes: dataset.getTypeRecord(),
                varying: { varAlpha: "float" },
                mainCode: [
                    `float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,
                    "varAlpha = 1.0 - life;",
                    "gl_Position = vec4(attPosition, 0, 1);",
                    "gl_PointSize = uniSize * (0.2 + .8 * computeSize(life));",
                    "varPosition -= attSpeed * uniDelta * 2.0 * (.75 + life);",
                    "if (life >= 1.0) {",
                    [
                        `varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,
                        "varPosition = uniCenter;",
                        "varSpeed = uniSpeed * 1e2;",
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
                    `float value = (1.0 / ${is32bits ? "20.0" : "8.0"}) / 255.0;`,
                    "value *= 1.0 - dist;",
                    "value *= varAlpha;",
                    // "float y = 0.5 * (1.0 + varPosition.y);",
                    // "float h = 0.1;",
                    // "y = h + (1.0 - h) * y;",
                    // "value *= 1.0 - y;",
                    "FragColor = vec4(value, 0.0, 0.0, 1.0);",
                ],
            }),
        },
        setUniforms: ({ _time, delta, prg }) => {
            if (virtualTime.speed === 0) {
                virtualTime.reset()
                virtualTime.speed = 1
            }
            prg.uniform1f("uniSize", Math.min(context.width, context.height) / 4)
            prg.uniform1f("uniDelta", delta)
            prg.uniform1f("uniTime", virtualTime.seconds)
            let { speedX, speedY } = context.inputs.pointer
            const factor = -1e5
            speedX *= factor
            speedY = factor * Math.abs(speedY)
            const thresholdY = 0.1
            const thresholdX = thresholdY / 32
            speedX = -tgdCalcClamp(speedX, -thresholdX, +thresholdX)
            speedY = tgdCalcClamp(speedY, 0, +thresholdY) + 0.01
            prg.uniform2f("uniSpeed", -speedX, -speedY)
            if (speedX === 0 && speedY === 0) {
                prg.uniform2f("uniCenter", 9, 9)
            } else {
                let x = context.inputs.pointer.x
                if (x < 0) x = -x * x
                else x *= x
                x *= 0.125
                prg.uniform2f("uniCenter", x, -1.1)
            }
        },
    })
    const textureFB = new TgdTexture2D(context, {
        params: {
            minFilter: "NEAREST",
            magFilter: "NEAREST",
        },
        storage: {
            format: is32bits ? "R32F / RED / FLOAT" : "R16F / RED / FLOAT",
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
            wrapR: "CLAMP_TO_EDGE",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE",
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
                    "float u = clamp(texture(uniTexture, varUV).r, 0.0, 1.0);",
                    // "float u2 = u * u;",
                    // "u = mix(u, u2, varUV.y * 1.0);",
                    "FragColor = texture(texPalette, vec2(u, u));",
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
        attPosition.push(9, 9)
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
