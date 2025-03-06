import {
    tgdCodeFunction_polar2uv,
    tgdCodeFunction_uv2polar,
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
            uniTime: "float",
            uniAspectRatio: "float",
            uniAspectRatioInverse: "float",
        },
        setUniforms(program, time) {
            program.uniform1f("uniTime", time)
            program.uniform1f("uniAspectRatio", context.aspectRatio)
            program.uniform1f(
                "uniAspectRatioInverse",
                context.aspectRatioInverse
            )
        },
        extraFunctions: {
            ...tgdCodeFunction_uv2polar(),
            ...tgdCodeFunction_polar2uv(),
        },
        fragmentShaderCode: [
            "vec2 polar = uv2polar(varUV);",
            "float strength = sin(uniTime);",
            "polar.y += strength * polar.x;",
            "vec2 uv = polar2uv(polar);",
            "FragColor = texture(uniTexture, uv);",
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
