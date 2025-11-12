import { TgdMaterialOptions } from "@tgd/material"

export class TgdTextureProcedural {
    /**
     * Name of the vec4 attribute holding the vertex position.
     * Default to `POSITION`.
     */
    readonly attPosition: string
    /**
     * Name of the vec3 attribute holding the normal.
     * Default to `NORMAL`.
     */
    readonly attNormal: string
    /**
     * Name of the vec2 attribute holding the texture coordinates (UV).
     * Default to `TEXCOORD_0`
     */
    readonly attUV: string

    constructor({
        attPosition = "POSITION",
        attNormal = "NORMAL",
        attUV = "TEXCOORD_0",
    }: TgdMaterialOptions) {
        this.attPosition = attPosition
        this.attNormal = attNormal
        this.attUV = attUV
    }
}
