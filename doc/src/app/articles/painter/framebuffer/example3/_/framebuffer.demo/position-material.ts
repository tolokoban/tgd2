import { TgdMaterial, TgdTexture2D } from "@tolokoban/tgd"

export class PositionMaterial extends TgdMaterial {
    public texture: TgdTexture2D | undefined = undefined

    constructor() {
        super({
            varyings: { varPosition: "vec4" },
            vertexShaderCode: [
                `varPosition = uniModelViewMatrix * uniTransfoMatrix * vec4(position, 1);`,
            ],
            fragmentShaderCode: [
                "vec4 G = vec4(0,1,0,1);",
                "vec4 R = vec4(1, 0, 0, 1);",
                "float z = -varPosition.z * .2;",
                `return vec4(z, z, z, 1);`,
            ],
        })
    }
}
