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

const COUNT = 512
const DURATION = 3

// #begin
function init(context: TgdContext, assets: Assets) {
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
                attributes: dataset.getTypeRecord(),
                mainCode: ["gl_Position = vec4(-1, -1, 0, 1);", "gl_PointSize = attSize;"],
            }),
            frag: new TgdShaderFragment({
                mainCode: ["float value = .5 / 255.0;", "FragColor = vec4(value, 0.0, 0.0, 1.0);"],
            }),
        },
        setUniforms: ({ _time, delta, prg }) => {
            if (virtualTime.speed === 0) {
                virtualTime.reset()
                virtualTime.speed = 1
            }
        },
    })
    const textureFB = new TgdTexture2D(context, {
        params: {
            minFilter: "NEAREST",
            magFilter: "NEAREST",
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
            wrapR: "CLAMP_TO_EDGE",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE",
        },
    }).loadBitmap(tgdCanvasCreatePalette(["#000", "#f00", "#f92", "#ee3", "#ff4", "#fff"]))
    const filter = new TgdFilter({
        textures: {
            texPalette: palette,
        },
        fragmentShaderCode: [
            "float u = clamp(texture(uniTexture, varUV).r, 0.0, 1.0);",
            "vec4 color = texture(texPalette, vec2(u, .5));",
            "if (u < 0.0) color = vec4(1, 0, 0, 1);",
            "if (u > 1.0) color = vec4(1, 0, 1, 1);",
            "color.a = 1.0;",
            "FragColor = color;",
        ],
    })
    const filters = new TgdPainterFilter(context, {
        flipY: true,
        texture: framebuffer.textureColor0,
        filters: [filter],
    })
    context.add(clear, framebuffer, filters)
    context.play()
    context.extensions.debug()
}
// #end

export default function Demo() {
    return <View onReady={init} options={{ alpha: false }} />
}

function makeDataset(count: number, duration: number): TgdDataset {
    const dataset = new TgdDataset({
        attSize: "float",
    })
    const attSize: number[] = []
    for (let i = 0; i < count; i++) {
        attSize.push(8 + i * 2)
    }
    dataset.set("attSize", new Float32Array(attSize))
    return dataset
}
