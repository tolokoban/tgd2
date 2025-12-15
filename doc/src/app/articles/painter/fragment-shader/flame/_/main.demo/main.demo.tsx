import {
    tgdCodeFunction_fbm,
    TgdContext,
    TgdPainterFragmentShader,
    TgdShaderFragment,
    TgdTexture2D,
} from "@tolokoban/tgd"

import View, { Assets } from "@/components/demo/Tgd"

import FlameURL from "./flame.webp"

// #begin
function init(context: TgdContext, assets: Assets) {
    const texture = new TgdTexture2D(context).loadBitmap(assets.image.flame)
    const shader = new TgdShaderFragment({
        functions: {
            ...tgdCodeFunction_fbm({ octaves: 3, G: 0.5 }),
        },
        uniforms: {
            uniTexture: "sampler2D",
        },
        mainCode: [
            "float shift = fbm(vec3(varUV.x, varUV.y + uniTime, uniTime * .01));",
            "shift -= .0;",
            "shift *= .25 * (1.0 - varUV.y);",
            "vec4 color = texture(uniTexture, varUV + vec2(shift, 0.0));",
            "FragColor = vec4(color.rgb * color.a, 1.0);",
        ],
    })
    shader.debug()
    context.add(
        new TgdPainterFragmentShader(context, {
            shader,
            setUniforms: ({ program }) => {
                texture.activate(0, program, "uniTexture")
            },
        })
    )
    context.play()
    return (settings: Record<string, number>) => {
        console.log("🐞 [main.demo@34] settings =", settings) // @FIXME: Remove this line written on 2025-12-15 at 17:20
    }
}
// #end

export default function Demo() {
    return (
        <View
            options={{ alpha: false }}
            assets={{
                image: {
                    flame: FlameURL,
                },
            }}
            onReady={init}
            settings={{
                exponent: {
                    label: "uniExponent",
                    min: 0,
                    max: 1,
                    value: 0.5,
                },
            }}
        />
    )
}
