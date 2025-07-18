import { TgdMaterial } from "./material"

export class TgdMaterialNormals extends TgdMaterial {
    constructor() {
        super({
            varyings: { varNormal: "vec3" },
            fragmentShaderCode: [
                `vec3 color = vec3(1.0) + normalize(varNormal);`,
                `color *= 0.5;`,
                `return vec4(color, 1.0);`,
            ],
            vertexShaderCode: ["varNormal = NORMAL;"],
        })
    }
}
