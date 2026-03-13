import { TgdVec2 } from "../math"
import { TgdFilter, TgdFilterSerUniformsParameters as TgdFilterSetUniformsParameters } from "./filter"

export class TgdFilterZoom extends TgdFilter {
    public zoom = 1
    public readonly translation: TgdVec2

    constructor({ zoom = 1 }: Partial<{ zoom: number }> = {}) {
        super({
            name: `TgdFilterZoom/${TgdFilter.id++}`,
            fragmentShaderCode: [
                "vec2 uv = (varUV - vec2(0.5)) * uniZoom + uniTranslation + vec2(0.5);",
                "vec4 color = texture(uniTexture, uv);",
                "FragColor = color;",
            ],
            uniforms: {
                uniZoom: "float",
                uniTranslation: "vec2",
            },
        })
        this.zoom = zoom
        this.translation = new TgdVec2()
    }

    public readonly setUniforms = ({ program }: TgdFilterSetUniformsParameters): void => {
        program.uniform1f("uniZoom", 1 / this.zoom)
        program.uniform2fv("uniTranslation", this.translation)
    }
}
