import { TgdFilter } from "./filter"

export interface TgdFilterChromaticAberrationOptions {
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
            fragmentShaderCode: [
                "vec2 dir = (varUV - vec2(0.5)) * 0.01 * uniStrength;",
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
                program.uniform1f(
                    "uniInverseHeight",
                    1 / program.gl.drawingBufferHeight
                )
            },
        })
        this.strength = strength
    }
}
