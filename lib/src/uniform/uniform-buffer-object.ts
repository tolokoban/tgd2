import {
	type TgdMat2,
	type TgdMat3,
	type TgdMat4,
	TgdVec2,
	TgdVec3,
	TgdVec4,
} from "@tgd/math"
import { TgdProgram } from "@tgd/program"
import type { TgdCodeBloc } from "@tgd/shader"
import type { WebglUniformType } from "@tgd/types"
import type { TgdContext } from "./../context/context"

export interface TgdUniformBufferObjectOptions<
	T extends Record<string, WebglUniformType> = Record<string, WebglUniformType>,
> {
	bindingPoint: number
	uniforms: T
	values?: {
		[key in keyof T]: Values[T[key]]
	}
}

export class TgdUniformBufferObject<
	T extends Record<string, WebglUniformType> = Record<string, WebglUniformType>,
> {
	public readonly bindingPoint: number
	public readonly values = {} as {
		[key in keyof T]: Values[T[key]]
	}

	private readonly data: ArrayBuffer
	private readonly view: DataView
	private readonly uniforms: T
	private readonly buffer: WebGLBuffer
	private dirty = true

	constructor(
		private readonly context: TgdContext,
		{ bindingPoint, uniforms, values }: TgdUniformBufferObjectOptions<T>,
	) {
		this.bindingPoint = bindingPoint
		this.uniforms = uniforms
		// Offset in floats (not bytes).
		let offsetInFloats = 0
		for (const name of Object.keys(uniforms)) {
			const type = uniforms[name]
			const { modulo, length } = LAYOUTS[type]
			// Word alignment.
			while (offsetInFloats % modulo !== 0) offsetInFloats++
			this.makeAccessor(name, type, offsetInFloats)
			offsetInFloats += length
		}
		this.data = new ArrayBuffer(
			4 *
				Float32Array.BYTES_PER_ELEMENT *
				Math.ceil(offsetInFloats / (4 * Float32Array.BYTES_PER_ELEMENT)),
		)
		this.view = new DataView(this.data)
		if (values) {
			const keys: Array<keyof T> = Object.keys(values)
			for (const key of keys) {
				this.values[key] = values[key]
			}
		}
		const { gl } = context
		this.buffer = gl.createBuffer()
		gl.bindBufferBase(gl.UNIFORM_BUFFER, bindingPoint, this.buffer)
		gl.bufferData(gl.UNIFORM_BUFFER, this.data.byteLength, gl.DYNAMIC_DRAW)
		context.checkError("TgdUniformBufferObject")
	}

	get names() {
		return Object.keys(this.uniforms)
	}

	delete() {
		const { gl } = this.context
		gl.deleteBuffer(this.buffer)
	}

	bindToProgram(program: TgdProgram | WebGLProgram, blockName: string) {
		const { gl } = this.context
		const glPrg = program instanceof TgdProgram ? program.program : program
		gl.uniformBlockBinding(
			glPrg,
			gl.getUniformBlockIndex(glPrg, blockName),
			this.bindingPoint,
		)
		this.context.checkError("bindToProgram")
	}

	updateData() {
		if (!this.dirty) return

		const { data } = this
		const { gl } = this.context
		gl.bindBuffer(gl.UNIFORM_BUFFER, this.buffer)
		gl.bufferSubData(gl.UNIFORM_BUFFER, 0, data)
		this.context.checkError("updateData")
		this.dirty = false
	}

	toShaderCode(blockName: string, instanceName?: string): TgdCodeBloc {
		const { uniforms } = this
		return [
			`/* Binding point: ${this.bindingPoint} */`,
			`layout(std140) uniform ${blockName} {`,
			Object.keys(uniforms).map((key) => `${uniforms[key]} ${key};`),
			instanceName ? `} ${instanceName};` : "};",
		]
	}

	private makeAccessor(name: string, type: string, offsetInFloats: number) {
		const { values } = this
		const byteOffset = offsetInFloats * 4
		switch (type) {
			case "sampler2D":
			case "sampler2DArray":
			case "sampler3D":
			case "samplerCube":
				Object.defineProperty(values, name, {
					set: (value: number) => {
						this.view.setUint8(byteOffset, value)
						this.dirty = true
					},
					get: () => this.view.getUint8(byteOffset),
				})
				break
			case "bool":
				Object.defineProperty(values, name, {
					set: (value: boolean) => {
						this.view.setUint8(byteOffset, value ? 1 : 0)
						this.dirty = true
					},
					get: () => this.view.getUint8(byteOffset) !== 0,
				})
				break
			case "int":
				Object.defineProperty(values, name, {
					set: (value: number) => {
						this.view.setInt32(byteOffset, value, true)
						this.dirty = true
					},
					get: () => this.view.getInt32(byteOffset, true),
				})
				break
			case "uint":
				Object.defineProperty(values, name, {
					set: (value: number) => {
						this.view.setUint32(byteOffset, value, true)
						this.dirty = true
					},
					get: () => this.view.getUint32(byteOffset, true),
				})
				break
			case "float":
				Object.defineProperty(values, name, {
					set: (value: number) => {
						this.view.setFloat32(byteOffset, value, true)
						this.dirty = true
					},
					get: () => this.view.getFloat32(byteOffset, true),
				})
				break
			case "double":
				Object.defineProperty(values, name, {
					set: (value: number) => {
						this.view.setFloat64(byteOffset, value, true)
						this.dirty = true
					},
					get: () => this.view.getFloat64(byteOffset, true),
				})
				break
			case "vec2":
				Object.defineProperty(values, name, {
					set: ([x, y]: TgdVec2) => {
						this.view.setFloat32(byteOffset, x, true)
						this.view.setFloat32(byteOffset + 4, y, true)
						this.dirty = true
					},
					get: () =>
						new TgdVec2(
							this.view.getFloat32(byteOffset, true),
							this.view.getFloat32(byteOffset + 4, true),
						),
				})
				break
			case "vec3":
				Object.defineProperty(values, name, {
					set: ([x, y, z]: TgdVec3) => {
						this.view.setFloat32(byteOffset, x, true)
						this.view.setFloat32(byteOffset + 4, y, true)
						this.view.setFloat32(byteOffset + 8, z, true)
						this.dirty = true
					},
					get: () =>
						new TgdVec3(
							this.view.getFloat32(byteOffset, true),
							this.view.getFloat32(byteOffset + 4, true),
							this.view.getFloat32(byteOffset + 8, true),
						),
				})
				break
			case "vec4":
				Object.defineProperty(values, name, {
					set: ([x, y, z, w]: TgdVec3) => {
						this.view.setFloat32(byteOffset, x, true)
						this.view.setFloat32(byteOffset + 4, y, true)
						this.view.setFloat32(byteOffset + 8, z, true)
						this.view.setFloat32(byteOffset + 12, z, true)
						this.dirty = true
					},
					get: () =>
						new TgdVec4(
							this.view.getFloat32(byteOffset, true),
							this.view.getFloat32(byteOffset + 4, true),
							this.view.getFloat32(byteOffset + 8, true),
							this.view.getFloat32(byteOffset + 12, true),
						),
				})
				break
			case "dvec2":
				Object.defineProperty(values, name, {
					set: ([x, y]: TgdVec2) => {
						this.view.setFloat64(byteOffset, x, true)
						this.view.setFloat64(byteOffset + 4, y, true)
						this.dirty = true
					},
					get: () =>
						new TgdVec2(
							this.view.getFloat64(byteOffset, true),
							this.view.getFloat64(byteOffset + 4, true),
						),
				})
				break
			case "dvec3":
				Object.defineProperty(values, name, {
					set: ([x, y, z]: TgdVec3) => {
						this.view.setFloat64(byteOffset, x, true)
						this.view.setFloat64(byteOffset + 4, y, true)
						this.view.setFloat64(byteOffset + 8, z, true)
						this.dirty = true
					},
					get: () =>
						new TgdVec3(
							this.view.getFloat64(byteOffset, true),
							this.view.getFloat64(byteOffset + 4, true),
							this.view.getFloat64(byteOffset + 8, true),
						),
				})
				break
			case "dvec4":
				Object.defineProperty(values, name, {
					set: ([x, y, z, w]: TgdVec3) => {
						this.view.setFloat64(byteOffset, x, true)
						this.view.setFloat64(byteOffset + 4, y, true)
						this.view.setFloat64(byteOffset + 8, z, true)
						this.view.setFloat64(byteOffset + 12, w, true)
						this.dirty = true
					},
					get: () =>
						new TgdVec4(
							this.view.getFloat64(byteOffset, true),
							this.view.getFloat64(byteOffset + 4, true),
							this.view.getFloat64(byteOffset + 8, true),
							this.view.getFloat64(byteOffset + 12, true),
						),
				})
				break
			case "ivec2":
				Object.defineProperty(values, name, {
					set: ([x, y]: TgdVec2) => {
						this.view.setInt32(byteOffset, x, true)
						this.view.setInt32(byteOffset + 4, y, true)
						this.dirty = true
					},
					get: () =>
						new TgdVec2(
							this.view.getInt32(byteOffset, true),
							this.view.getInt32(byteOffset + 4, true),
						),
				})
				break
			case "ivec3":
				Object.defineProperty(values, name, {
					set: ([x, y, z]: TgdVec3) => {
						this.view.setInt32(byteOffset, x, true)
						this.view.setInt32(byteOffset + 4, y, true)
						this.view.setInt32(byteOffset + 8, z, true)
						this.dirty = true
					},
					get: () =>
						new TgdVec3(
							this.view.getInt32(byteOffset, true),
							this.view.getInt32(byteOffset + 4, true),
							this.view.getInt32(byteOffset + 8, true),
						),
				})
				break
			case "ivec4":
				Object.defineProperty(values, name, {
					set: ([x, y, z, w]: TgdVec3) => {
						this.view.setInt32(byteOffset, x, true)
						this.view.setInt32(byteOffset + 4, y, true)
						this.view.setInt32(byteOffset + 8, z, true)
						this.view.setInt32(byteOffset + 12, z, true)
						this.dirty = true
					},
					get: () =>
						new TgdVec4(
							this.view.getInt32(byteOffset, true),
							this.view.getInt32(byteOffset + 4, true),
							this.view.getInt32(byteOffset + 8, true),
							this.view.getInt32(byteOffset + 12, true),
						),
				})
				break
			case "uvec2":
				Object.defineProperty(values, name, {
					set: ([x, y]: TgdVec2) => {
						this.view.setUint32(byteOffset, x, true)
						this.view.setUint32(byteOffset + 4, y, true)
						this.dirty = true
					},
					get: () =>
						new TgdVec2(
							this.view.getUint32(byteOffset, true),
							this.view.getUint32(byteOffset + 4, true),
						),
				})
				break
			case "uvec3":
				Object.defineProperty(values, name, {
					set: ([x, y, z]: TgdVec3) => {
						this.view.setUint32(byteOffset, x, true)
						this.view.setUint32(byteOffset + 4, y, true)
						this.view.setUint32(byteOffset + 8, z, true)
						this.dirty = true
					},
					get: () =>
						new TgdVec3(
							this.view.getUint32(byteOffset, true),
							this.view.getUint32(byteOffset + 4, true),
							this.view.getUint32(byteOffset + 8, true),
						),
				})
				break
			case "uvec4":
				Object.defineProperty(values, name, {
					set: ([x, y, z, w]: TgdVec3) => {
						this.view.setUint32(byteOffset, x, true)
						this.view.setUint32(byteOffset + 4, y, true)
						this.view.setUint32(byteOffset + 8, z, true)
						this.view.setUint32(byteOffset + 12, w, true)
						this.dirty = true
					},
					get: () =>
						new TgdVec4(
							this.view.getUint32(byteOffset, true),
							this.view.getUint32(byteOffset + 4, true),
							this.view.getUint32(byteOffset + 8, true),
							this.view.getUint32(byteOffset + 12, true),
						),
				})
				break
			case "mat2":
				Object.defineProperty(values, name, {
					set: ([m00, m10, m01, m11]: TgdMat2) => {
						this.view.setFloat32(byteOffset, m00, true)
						this.view.setFloat32(byteOffset + 4, m10, true)
						this.view.setFloat32(byteOffset + 16, m01, true)
						this.view.setFloat32(byteOffset + 20, m11, true)
						this.dirty = true
					},
				})
				break
			case "mat4":
				Object.defineProperty(values, name, {
					set: (mat4: TgdMat4) => {
						for (let i = 0; i < 16; i++) {
							this.view.setFloat32(byteOffset + 4 * i, mat4[i])
						}
					},
				})
				break
			default:
				throw new Error(
					`[TgdUniformBufferObject] Type "${type}" has been implemented yet!`,
				)
		}
	}
}

type Values = {
	sampler2D: number
	sampler2DArray: number
	sampler3D: number
	samplerCube: number
	bool: number
	int: number
	uint: number
	float: number
	double: number
	vec2: Readonly<TgdVec2>
	bvec2: Readonly<TgdVec2>
	ivec2: Readonly<TgdVec2>
	uvec2: Readonly<TgdVec2>
	dvec2: Readonly<TgdVec2>
	vec3: Readonly<TgdVec3>
	bvec3: Readonly<TgdVec3>
	ivec3: Readonly<TgdVec3>
	uvec3: Readonly<TgdVec3>
	dvec3: Readonly<TgdVec3>
	vec4: Readonly<TgdVec4>
	bvec4: Readonly<TgdVec4>
	ivec4: Readonly<TgdVec4>
	uvec4: Readonly<TgdVec4>
	dvec4: Readonly<TgdVec4>
	mat2: Readonly<TgdMat2>
	mat3: Readonly<TgdMat3>
	mat4: Readonly<TgdMat4>
}

/**
 * Modulo is used for the padding necessary with Layout std140.
 */
const LAYOUTS: Record<
	string,
	{ modulo: number; length: number; dimension: number }
> = {
	sampler2D: { modulo: 1, length: 1, dimension: 1 },
	sampler2DArray: { modulo: 1, length: 1, dimension: 1 },
	sampler3D: { modulo: 1, length: 1, dimension: 1 },
	samplerCube: { modulo: 1, length: 1, dimension: 1 },
	bool: { modulo: 1, length: 1, dimension: 1 },
	int: { modulo: 1, length: 1, dimension: 1 },
	uint: { modulo: 1, length: 1, dimension: 1 },
	float: { modulo: 1, length: 1, dimension: 1 },
	double: { modulo: 2, length: 2, dimension: 1 },
	vec2: { modulo: 2, length: 2, dimension: 2 },
	bvec2: { modulo: 2, length: 2, dimension: 2 },
	ivec2: { modulo: 2, length: 2, dimension: 2 },
	uvec2: { modulo: 2, length: 2, dimension: 2 },
	dvec2: { modulo: 2, length: 2, dimension: 2 },
	vec3: { modulo: 4, length: 3, dimension: 3 },
	bvec3: { modulo: 4, length: 3, dimension: 3 },
	ivec3: { modulo: 4, length: 3, dimension: 3 },
	uvec3: { modulo: 4, length: 3, dimension: 3 },
	dvec3: { modulo: 4, length: 3, dimension: 3 },
	vec4: { modulo: 4, length: 4, dimension: 4 },
	bvec4: { modulo: 4, length: 4, dimension: 4 },
	ivec4: { modulo: 4, length: 4, dimension: 4 },
	uvec4: { modulo: 4, length: 4, dimension: 4 },
	dvec4: { modulo: 4, length: 4, dimension: 4 },
	mat2: { modulo: 4, length: 8, dimension: 4 },
	mat3: { modulo: 4, length: 12, dimension: 9 },
	mat4: { modulo: 4, length: 16, dimension: 16 },
}

// function test() {
// 	const context = new TgdContext(new OffscreenCanvas(1, 1))
// 	const ubo = new TgdUniformBufferObject(context, {
// 		uniColor: "vec4",
// 		uniLight: "float",
// 	})
//     ubo.values.
// }
