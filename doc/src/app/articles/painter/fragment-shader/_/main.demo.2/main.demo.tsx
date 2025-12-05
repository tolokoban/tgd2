import {
    tgdCodeFunction_fbm,
    tgdCodeFunction_palette,
    tgdCodeFunction_uv2polar,
    TgdContext,
    TgdPainterFragmentShader,
    TgdShaderFragment,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

// #begin
function init(context: TgdContext): TgdContext {
    const shader = new TgdShaderFragment({
        functions: {
            ...tgdCodeFunction_uv2polar(),
            ...tgdCodeFunction_palette(),
            ...tgdCodeFunction_fbm({ G: 0.5 }),
        },
        mainCode: [
            "vec2 p = uv2polar(varUV);",
            "float color = fbm(vec3(p.xx, uniTime));",
            "FragColor = palette(color);",
        ],
    })
    shader.debug()
    context.add(new TgdPainterFragmentShader(context, { shader }))
    context.play()
    return context
}
// #end

export default function Demo() {
    return <View onReady={init} />
}
