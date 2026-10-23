import type { ArrayNumber2 } from "@tgd/types"
import type { TgdVec2 } from "@tgd/math"
import { TgdFilter, type TgdFilterSerUniformsParameters } from "./filter"

export interface TgdFilterScaleOptions {
    /**
     * How the texture fits the output, keeping its aspect ratio:
     * * `cover`: the texture fills the whole output, and the overflowing parts are cropped.
     * * `contain`: the whole texture is visible, and the empty parts are transparent.
     *
     * Default to `cover`.
     */
    mode: "cover" | "contain"
    /**
     * Scale applied after the fit. Values greater than 1 enlarge the texture.
     * A single number applies the same scale on X and Y.
     *
     * Default to `1`.
     */
    scale: number | TgdVec2 | ArrayNumber2
}

/**
 * Fit the texture into the output (`cover` or `contain`) while keeping its aspect ratio,
 * then scale it around the center.
 *
 * The output size is the current viewport.
 */
export class TgdFilterScale extends TgdFilter {
    public mode: TgdFilterScaleOptions["mode"]
    public scale: TgdFilterScaleOptions["scale"]

    constructor({ mode = "cover", scale = 1 }: Partial<TgdFilterScaleOptions> = {}) {
        super({
            name: `TgdFilterScale/${TgdFilter.id++}`,
            uniforms: {
                uniViewport: "vec2",
                uniScale: "vec2",
                uniCover: "float",
            },
            fragmentShaderCode: [
                "vec2 size = vec2(textureSize(uniTexture, 0));",
                "float ratio = (size.x / size.y) * (uniViewport.y / uniViewport.x);",
                "vec2 fit = ratio > 1.0 ? vec2(1.0, ratio) : vec2(1.0 / ratio, 1.0);",
                "if (uniCover > 0.5) fit = vec2(1.0) / fit.yx;",
                "vec2 uv = (varUV - vec2(0.5)) * fit / uniScale + vec2(0.5);",
                "if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {",
                ["FragColor = vec4(0.0);", "return;"],
                "}",
                "FragColor = texture(uniTexture, uv);",
            ],
        })
        this.mode = mode
        this.scale = scale
    }

    public readonly setUniforms = ({ context, program }: TgdFilterSerUniformsParameters): void => {
        const { scale } = this
        if (typeof scale === "number") program.uniform2f("uniScale", scale, scale)
        else program.uniform2f("uniScale", scale[0], scale[1])
        program.uniform1f("uniCover", this.mode === "cover" ? 1 : 0)
    }
}
