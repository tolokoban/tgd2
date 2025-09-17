import { TgdMaterial } from "./material"

export class TgdMaterialNormalMap extends TgdMaterial {
    constructor() {
        super({
            varyings: { varNormal: "vec3" },
            fragmentShaderCode: [
                `vec3 n = normalize(varNormal);`,
                `vec3 color = vec3(`,
                [`0.5 * (1.0 + n.x),`, `0.5 * (1.0 + n.y),`, `max(0.0, n.z)`],
                `);`,
                `color *= 0.5;`,
                `return vec4(color, 1.0);`,
            ],
            vertexShaderCode: [
                "varNormal = mat3(uniModelViewMatrix) * normal;",
            ],
        })
    }
}
