import {
    TgdContext,
    TgdFilter,
    tgdLoadImage,
    TgdPainterFilter,
    TgdTexture2D,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

import BackgroundURL from "../../../marylin.webp"

function init(context: TgdContext) {
    // #begin
    const texture = new TgdTexture2D(context).loadBitmap(
        tgdLoadImage(BackgroundURL)
    )
    const filter = new TgdFilter({
        uniforms: {
            uniThreshold: "float",
        },
        setUniforms(program, time) {
            const threshold = 2 * Math.abs(Math.sin(time * 1e-4))
            program.uniform1f("uniThreshold", threshold)
        },
        fragmentShaderCode: [
            "float threshold = uniThreshold;",
            "vec4 pixel = texture(uniTexture, varUV);",
            "float value = pixel.r + pixel.g + pixel.b;",
            "if (value > threshold) {",
            ["FragColor = vec4(0, 0.2, 0.4, 1.0);"],
            "} else {",
            [
                "float strength = (threshold - value) / threshold;",
                "FragColor = vec4(threshold, threshold * .667, threshold * 0.1, 1);",
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
    context.play()
    // #end
}

export default function Demo() {
    return <View onReady={init} width="512px" height="512px" />
}
