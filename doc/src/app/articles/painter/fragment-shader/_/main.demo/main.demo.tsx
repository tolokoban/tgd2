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
        mainCode: [
            "float scale = 2.0 + 1.5 * sin(uniTime * .23);",
            "float index = fbm(vec3(scale * varUV + vec2(uniTime * .2, 0.0), uniTime * .1));",
            "float light = pow(dot(index, index), 0.15);",
            "FragColor = palette(index) * vec4(vec3(light), 1.0);",
        ],
    })
    shader.debug()
    context.add(new TgdPainterFragmentShader(context, { shader }))
    context.play()
}
// #end

export default function Demo() {
    return <View onReady={init} />
}
