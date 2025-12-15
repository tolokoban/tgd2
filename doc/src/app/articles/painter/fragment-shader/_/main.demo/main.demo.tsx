import {
    tgdCodeFunction_fbm,
    tgdCodeFunction_palette,
    TgdContext,
    TgdPainterFragmentShader,
    TgdShaderFragment,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

// #begin
function init(context: TgdContext) {
    const uniforms = {
        uniExponent: 0.5,
    }
    const shader = new TgdShaderFragment({
        functions: {
            ...tgdCodeFunction_palette({
                a: [0.502, 0.502, 0.502, 1],
                b: [0.502, 0.502, 0.502, 1],
                c: [1.0, 1.0, 1.0, 1],
                d: [0.0, 0.329, 0.671, 1],
            }),
            ...tgdCodeFunction_fbm({ octaves: 4, G: 0.5 }),
        },
        uniforms: {
            uniExponent: "float",
        },
        mainCode: [
            "float scale = 2.0 + 1.5 * sin(uniTime * .23);",
            "float index = fbm(vec3(scale * varUV + vec2(uniTime * .2, 0.0), uniTime * .1));",
            "vec4 color = palette(index);",
            "float light = pow(dot(color, color), uniExponent);",
            "FragColor = color * vec4(vec3(light), 1.0);",
        ],
    })
    shader.debug()
    context.add(
        new TgdPainterFragmentShader(context, {
            shader,
            setUniforms: ({ program }) => {
                program.uniform1f("uniExponent", uniforms.uniExponent)
            },
        })
    )
    context.play()
    return (settings: Record<string, number>) => {
        uniforms.uniExponent = settings.uniExponent
    }
}
// #end

export default function Demo() {
    return (
        <View
            onReady={init}
            settings={{
                uniExponent: {
                    label: "uniExponent",
                    min: -10,
                    max: 10,
                    step: 0.02,
                    value: 0.5,
                },
            }}
        />
    )
}
