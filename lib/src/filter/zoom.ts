import { TgdProgram } from "@tgd/program"
import { TgdVec2 } from "../math"
import {
    TgdFilter,
    TgdFilterSerUniformsParameters as TgdFilterSetUniformsParameters,
} from "./filter"

export class TgdFilterZoom extends TgdFilter {
    public zoom = 1
    public readonly translation: TgdVec2

    constructor({ zoom = 1 }: Partial<{ zoom: number }> = {}) {
        super({
            fragmentShaderCode: [
                "vec2 uv = (varUV - vec2(0.5) - uniTranslation) * uniZoom + vec2(0.5);",
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

    public readonly setUniforms = ({
        program,
    }: TgdFilterSetUniformsParameters): void => {
        program.uniform1f("uniZoom", 1 / this.zoom)
        program.uniform2f(
            "uniTranslation",
            this.translation.x,
            this.translation.y
        )
    }
}
