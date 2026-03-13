import { TgdFilter } from "./filter"

/**
 * Paint the texture as it is, without any modification.
 */
export class TgdFilterVerbatim extends TgdFilter {
    constructor() {
        super({
            name: `TgdFilterVerbatim/${TgdFilter.id++}`,
            fragmentShaderCode: ["vec2 uv = varUV;", "vec4 color = texture(uniTexture, uv);", "FragColor = color;"],
        })
    }
}
