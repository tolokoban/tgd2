import { TgdProgram } from ".."
import { TgdFilter } from "./filter"

export class TgdFilterZoom extends TgdFilter {
    public zoom = 1

    constructor({ zoom = 1 }: Partial<{ zoom: number }> = {}) {
        super({
            fragmentShaderCode: [
                "vec2 uv = (varUV - vec2(0.5)) * uniZoom + vec2(0.5);",
                "vec4 color = texture(uniTexture, uv);",
                "FragColor = color;",
            ],
            uniforms: {
                uniZoom: "float",
            },
        })
        this.zoom = zoom
    }

    public readonly setUniforms = (
        program: TgdProgram,
        _time: number
    ): void => {
        program.uniform1f("uniZoom", 1 / this.zoom)
    }
}
