import type { TgdProgram } from "@tgd/program"
import type { TgdCodeBloc } from "@tgd/shader"
import type { TgdTexture2D } from "@tgd/texture"
import type { WebglAttributeType, WebglUniformType } from "@tgd/types"
import { TgdMaterial } from "./material"

export type TgdMaterialFlatTextureOptions = {
	texture: TgdTexture2D
}

export class TgdMaterialFlatTexture extends TgdMaterial {
	private _texture: TgdTexture2D | null = null

	constructor(options: TgdMaterialFlatTextureOptions) {
		const fragmentShaderCode: TgdCodeBloc = [
			"return texture(uniTextureColor, varUV);",
		]
		const varyings: { [name: string]: WebglAttributeType } = {
			varUV: "vec2",
		}
		const vertexShaderCode = () => {
			const code: TgdCodeBloc = [`varUV = ${this.attUV};`]
			return code
		}

		super({
			varyings,
			textures: {
				uniTextureColor: options.texture,
			},
			vertexShaderCode,
			fragmentShaderCode,
		})
		this._texture = options.texture
	}

	get texture() {
		return this._texture
	}

	set texture(texture: TgdTexture2D | null) {
		if (this._texture === texture) return

		this._texture = texture
	}
}
