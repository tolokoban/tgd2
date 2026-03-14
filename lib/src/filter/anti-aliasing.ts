import { TgdFilter } from "./filter"

export interface TgdFilterAntiAliasingOptions {
    strength: number
}

export class TgdFilterAntiAliasing extends TgdFilter {
    /**
     * Percentage of displacement of the color or the border of the image.
     * The blue is push await from the center, and the red is pulled to
     * the center. But if you use a negative `strength`, the process is
     * reversed.
     *
     * Default to 1.0 (means 1% of displacement).
     */
    public strength = 1

    constructor(options: Partial<TgdFilterAntiAliasingOptions> = {}) {
        const { strength = 1 } = options
        const ang = Math.atan(1 / 2)
        const radius = Math.sqrt(5) / 4
        const A = Math.cos(ang) * radius
        const B = Math.sin(ang) * radius
        super({
            name: `TgdFilterAntiAliasing/${TgdFilter.id++}`,
            fragmentShaderCode: [
                `float a = ${A.toFixed(9)} * uniStrength;`,
                `float b = ${B.toFixed(9)} * uniStrength;`,
                "vec4 col1 = texture(uniTexture, varUV + vec2(a, b) * varPixel);",
                "vec4 col2 = texture(uniTexture, varUV + vec2(-b, a) * varPixel);",
                "vec4 col3 = texture(uniTexture, varUV + vec2(-a, -b) * varPixel);",
                "vec4 col4 = texture(uniTexture, varUV + vec2(b, -a) * varPixel);",
                `FragColor = 0.25 * (col1 + col2 + col3 + col4);`,
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
