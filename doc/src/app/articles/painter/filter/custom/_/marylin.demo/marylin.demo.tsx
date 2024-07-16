import {
    TgdContext,
    TgdFilter,
    TgdFilterBlur,
    TgdPainterFilter,
    TgdVec2,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

import BackgroundURL from "../../../marylin.webp"

function init(context: TgdContext) {
    // #begin
    const texture = context.textures2D.create({
        image: BackgroundURL,
        width: 512,
        height: 512,
    })
    const filter = new TgdFilter({
        fragmentShaderCode: [
            "float threshold = 0.9;",
            "vec4 pixel = texture(uniTexture, varUV);",
            "float value = pixel.r + pixel.g + pixel.b;",
            "if (value > threshold) {",
            ["FragColor = vec4(0, 0.1, 0.2, 1.0);"],
            "} else {",
            [
                "float strength = (threshold - value) / threshold;",
                "FragColor = vec4(threshold, threshold * .667, 0, 1);",
            ],
            "}",
        ],
    })
    context.add(
        new TgdPainterFilter(context, {
            texture,
            filters: [filter],
        })
    )
    context.paint()
    // #end
}

export default function Demo() {
    return <View onReady={init} width="512px" height="512px" />
}
