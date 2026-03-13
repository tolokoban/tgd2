import { TgdFilter } from "./filter"

export interface TgdFilterChromaticAberrationOptions {
    mode: "horizontal" | "circular"
    /**
     * Percentage of displacement of the color or the border of the image.
     * The blue is push await from the center, and the red is pulled to
     * the center. But if you use a negative `strength`, the process is
     * reversed.
     *
     * Default to 1.0 (means 1% of displacement).
     */
    strength: number
}

export class TgdFilterChromaticAberration extends TgdFilter {
    /**
     * Percentage of displacement of the color or the border of the image.
     * The blue is push await from the center, and the red is pulled to
     * the center. But if you use a negative `strength`, the process is
     * reversed.
     *
     * Default to 1.0 (means 1% of displacement).
     */
    public strength = 1

    constructor(options: Partial<TgdFilterChromaticAberrationOptions> = {}) {
        const { strength = 1 } = options
        super({
            name: `TgdFilterChromaticAberration/${TgdFilter.id++}`,
            fragmentShaderCode: [
                options.mode === "circular"
                    ? "vec2 dir = (varUV - vec2(0.5)) * varPixel * 2.0 * uniStrength;"
                    : "vec2 dir = vec2(varPixel.x, 0.0) * uniStrength;",
                "float r = texture(uniTexture, varUV + dir).r;",
                "float g = texture(uniTexture, varUV).g;",
                "float b = texture(uniTexture, varUV - dir).b;",
                `FragColor = vec4(r, g, b, 1);`,
            ],
            uniforms: {
                uniStrength: "float",
            },
            setUniforms: ({ program }) => {
                program.uniform1f("uniStrength", this.strength)
            },
        })
        this.strength = strength
    }
}
