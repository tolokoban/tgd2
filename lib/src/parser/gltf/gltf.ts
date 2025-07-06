/* eslint-disable unicorn/prefer-type-error */
/**
 * GLTF specs can be found here:
 * https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html
 */
import { load } from "@loaders.gl/core";
import { GLTFLoader, type GLTFWithBuffers } from "@loaders.gl/gltf";
import { DracoLoader } from "@loaders.gl/draco";

import type { TgdDatasetTypeRecord } from "@tgd/dataset";
import { TgdDataset } from "@tgd/dataset";
import type {
	TgdFormatGltf,
	TgdFormatGltfAccessor,
	TgdFormatGltfBufferView,
	TgdFormatGltfCamera,
	TgdFormatGltfImage,
	TgdFormatGltfMaterial,
	TgdFormatGltfMesh,
	TgdFormatGltfMeshPrimitive,
	TgdFormatGltfMeshPrimitiveAttribute,
	TgdFormatGltfNode,
	TgdFormatGltfScene,
} from "@tgd/types/gltf";
import {
	assertTgdFormatGltf,
	assertTgdTypeArrayForElements,
	expectArrayNumber,
	expectArrayNumber16,
	expectArrayNumber3,
	expectArrayNumber4,
	isTgdFormatGltfCameraOrthographic,
	isTgdFormatGltfCameraPerspective,
	type TgdTypeArrayForElements,
} from "@tgd/types";
import { TgdGeometry } from "@tgd/geometry";
import { TgdTexture2D } from "@tgd/texture";
import { type TgdCamera, TgdCameraPerspective } from "@tgd/camera";
import {
	TgdQuat,
	TgdTransfo,
	type TgdTransfoOptions,
	TgdVec3,
} from "@tgd/math";
import { ensureNumber, isNumber } from "@tgd/types/guards";
import { tgdLoadArrayBuffer, tgdLoadImage } from "@tgd/loader";
import { tgdCanvasCreateWithContext2D } from "@tgd/utils/canvas";
import { parseGLB } from "./parser";

export class TgdDataGlb {
	static async load(url: string): Promise<TgdDataGlb> {
		const data = await tgdLoadArrayBuffer(url);
		if (!data) throw new Error(`[TgdDataGlb] Unable to load "${url}"!`);

		return TgdDataGlb.parse(data);
	}

	static async parse(data: ArrayBuffer): Promise<TgdDataGlb> {
		const blob = new Blob([data]);
		const url = URL.createObjectURL(blob);
		const gltf: GLTFWithBuffers = await load(url, GLTFLoader, {
			DracoLoader,
			decompress: true,
			decompressMeshes: true,
			loadBuffers: true,
			loadImages: true,
		});
		URL.revokeObjectURL(url);
		const chunks: ArrayBuffer[] = [];
		for (const buffer of gltf.buffers) {
			chunks.push(
				buffer.arrayBuffer.slice(
					buffer.byteOffset,
					buffer.byteOffset + buffer.byteLength,
				),
			);
		}
		const images: (HTMLImageElement | undefined)[] = [];
		for (const imageData of gltf.images ?? []) {
			images.push(await loadImageData(imageData));
		}
		const { json } = gltf;
		assertTgdFormatGltf(json);
		return new TgdDataGlb(json, chunks, images, data.byteLength);
	}

	static async parseOld(data: ArrayBuffer): Promise<TgdDataGlb> {
		const { gltf, chunks } = parseGLB(data);
		const images: (HTMLImageElement | undefined)[] = [];
		for (const imageDef of gltf.images ?? []) {
			console.log("🚀 [gltf] imageDef =", imageDef); // @FIXME: Remove this line written on 2025-07-06 at 11:40
			images.push(new Image());
		}
		return new TgdDataGlb(gltf, chunks, images, data.byteLength);
	}

	/**
	 * @param content The binary content of a GLB file.
	 */
	private constructor(
		private readonly json: TgdFormatGltf,
		private readonly chunks: ArrayBuffer[],
		private readonly images: (HTMLImageElement | undefined)[],
		public readonly fileSize: number,
	) {}

	getJson(): Readonly<TgdFormatGltf> {
		return this.json as unknown as TgdFormatGltf;
	}

	getImages(): TgdFormatGltfImage[] {
		return this.json.images ?? [];
	}

	getImage(imageIndex: number): TgdFormatGltfImage | undefined {
		return this.json.images?.[imageIndex];
	}

	getImageAsHTMLElement(imageIndex: number): HTMLImageElement | undefined {
		return this.images[imageIndex];
	}

	createTransfoFromNode(node: TgdFormatGltfNode): TgdTransfo {
		const transfo: Partial<TgdTransfoOptions> = {};
		if (node.rotation) {
			transfo.orientation = new TgdQuat(node.rotation);
		}
		if (node.translation) transfo.position = new TgdVec3(node.translation);
		if (node.scale) transfo.scale = new TgdVec3(node.scale);
		return new TgdTransfo(transfo);
	}

	createCameraByName(name: string): TgdCamera {
		const node = this.getNodeByNameOrThrow(name);
		if (typeof node.camera === "number") {
			const camera = this.getCameraOrThrow(node.camera);
			if (camera.type === "perspective") {
				const perspective = new TgdCameraPerspective({
					name,
					near: camera.perspective.znear,
					far: camera.perspective.zfar,
					fovy: camera.perspective.yfov,
					transfo: this.createTransfoFromNode(node),
				});
				return perspective;
			} else {
				throw new Error(
					"Sorry, but for now, we do not support Orthographic cameras...",
				);
			}
		} else {
			console.error(node);
			throw new Error(`Node "${name}" is not of type Camera!`);
		}
	}

	getCamera(cameraIndex: number): TgdFormatGltfCamera | undefined {
		const camera = this.json.cameras?.[cameraIndex];
		if (!camera) return;

		if (isTgdFormatGltfCameraPerspective(camera)) {
			return {
				type: "perspective",
				name: camera.name,
				perspective: camera.perspective,
			};
		}
		if (isTgdFormatGltfCameraOrthographic(camera)) {
			return {
				type: "orthographic",
				name: camera.name,
				orthographic: camera.orthographic,
			};
		}
		throw new Error(
			`[TgdDataGlb] Camera #${cameraIndex} is neither perspective, nor orthographic!`,
		);
	}

	getCameraOrThrow(cameraIndex: number): TgdFormatGltfCamera {
		const camera = this.getCamera(cameraIndex);
		if (!camera) {
			throw new Error(`Asset has no camera with index #${cameraIndex}!`);
		}

		return camera;
	}

	getScenes(): TgdFormatGltfScene[] {
		return this.json.scenes ?? [];
	}

	getScene(sceneIndex: number): TgdFormatGltfScene | undefined {
		return this.json.scenes?.[sceneIndex];
	}

	getSceneOrThrow(sceneIndex: number): TgdFormatGltfScene {
		const scene = this.getScene(sceneIndex);
		if (!scene) {
			throw new Error(`Asset has no scene with index #${sceneIndex}!`);
		}

		return scene;
	}

	getNodes(): TgdFormatGltfNode[] {
		const { nodes } = this.json;
		if (!nodes) return [];

		return nodes.map((node) => ({
			...node,
			matrix: node.matrix && expectArrayNumber16(node.matrix),
			rotation: node.rotation && expectArrayNumber4(node.rotation),
			scale: node.scale && expectArrayNumber3(node.scale),
			translation: node.translation && expectArrayNumber3(node.translation),
		}));
	}

	getNode(nodeIndex: number): TgdFormatGltfNode | undefined {
		const node = this.json.nodes?.[nodeIndex];
		if (!node) return;

		return {
			...node,
			matrix: node.matrix && expectArrayNumber16(node.matrix),
			rotation: node.rotation && expectArrayNumber4(node.rotation),
			scale: node.scale && expectArrayNumber3(node.scale),
			translation: node.translation && expectArrayNumber3(node.translation),
		};
	}

	getNodeOrThrow(nodeIndex: number): TgdFormatGltfNode {
		const node = this.getNode(nodeIndex);
		if (!node) {
			throw new Error(`Asset has no node with index #${nodeIndex}!`);
		}

		return node;
	}

	getNodeByName(nodeName: string): TgdFormatGltfNode | undefined {
		const nodes = this.json.nodes;
		if (!nodes) return;

		const index = nodes.findIndex((node) => node.name === nodeName);
		if (index === -1) return;

		return this.getNode(index);
	}

	getNodeByNameOrThrow(nodeName: string): TgdFormatGltfNode {
		const node = this.getNodeByName(nodeName);
		if (node) return node;

		throw new Error(
			`Unknown node "${nodeName}"!\nAvailable names:${(this.json.nodes ?? [])
				.map(
					(node, index) =>
						`\n  - ${
							typeof node.name === "string"
								? JSON.stringify(node.name)
								: `#${index}`
						}`,
				)
				.join("")}`,
		);
	}

	getAccessor(accessorIndex = 0): TgdFormatGltfAccessor | undefined {
		const accessor = this.json.accessors?.[accessorIndex];
		if (!accessor) return;

		return accessor;
	}

	getAccessorOrThrow(accessorIndex = 0): TgdFormatGltfAccessor {
		const accessor = this.getAccessor(accessorIndex);
		if (!accessor) {
			throw new Error(`Asset has no accessor with index #${accessorIndex}!`);
		}

		return accessor;
	}

	getMaterial(materialIndex: number): TgdFormatGltfMaterial {
		const material = this.json.materials?.[materialIndex];
		if (!material) {
			throw new Error(`Asset has no material with index #${materialIndex}!`);
		}

		return {
			...material,
			pbrMetallicRoughness: {
				...material.pbrMetallicRoughness,
				baseColorFactor:
					material.pbrMetallicRoughness?.baseColorFactor &&
					expectArrayNumber4(material.pbrMetallicRoughness.baseColorFactor),
			},
		};
	}

	getMesh(
		meshIndexOrName: TgdFormatGltfMesh | number | string = 0,
	): TgdFormatGltfMesh {
		if (
			typeof meshIndexOrName !== "number" &&
			typeof meshIndexOrName !== "string"
		)
			return meshIndexOrName;

		const mesh =
			typeof meshIndexOrName === "number"
				? this.json.meshes?.[meshIndexOrName]
				: (this.json.meshes ?? []).find(
						(item) => item.name === meshIndexOrName,
					);
		if (!mesh) {
			throw new Error(
				`Asset has no mesh with index/name ${JSON.stringify(meshIndexOrName)}!`,
			);
		}

		return {
			...mesh,
			name: mesh.name ?? `Mesh#${meshIndexOrName}`,
		};
	}

	getMeshPrimitive(
		meshIndexOrName: TgdFormatGltfMesh | number | string = 0,
		primitiveIndex = 0,
	): TgdFormatGltfMeshPrimitive {
		const mesh =
			typeof meshIndexOrName === "number" || typeof meshIndexOrName === "string"
				? this.getMesh(meshIndexOrName)
				: meshIndexOrName;
		if (!mesh) {
			throw new Error(
				`Asset has no mesh with index/name ${JSON.stringify(meshIndexOrName)}!`,
			);
		}
		const primitive = mesh.primitives[primitiveIndex];
		if (!primitive) {
			throw new Error(
				`Asset has no primitive #${primitiveIndex} in mesh ${JSON.stringify(
					meshIndexOrName,
				)}!`,
			);
		}

		return primitive;
	}

	getMeshPrimitiveIndices(
		meshIndexOrName: TgdFormatGltfMesh | number | string = 0,
		primitiveIndex = 0,
	): TgdTypeArrayForElements {
		const primitive = this.getMeshPrimitive(meshIndexOrName, primitiveIndex);
		const { indices } = primitive;
		if (isNumber(indices)) {
			const accessor = this.getAccessorOrThrow(indices);
			const elements = this.getBufferViewData(
				accessor.bufferView ?? 0,
				accessor.componentType,
			);
			assertTgdTypeArrayForElements(elements);
			return elements;
		} else if (indices) {
			const elements = indices.value;
			assertTgdTypeArrayForElements(elements);
			return elements;
		} else {
			return new Uint8Array();
		}
	}

	createTexture2D(
		context: { gl: WebGL2RenderingContext },
		textureIndex: number,
	): TgdTexture2D {
		const gltfTex = this.json.textures?.[textureIndex];
		if (!gltfTex) {
			throw new Error(`Asset has no texture with index #${textureIndex}!`);
		}

		const texture = new TgdTexture2D(context);
		const source = ensureNumber(
			gltfTex.source ?? gltfTex.extensions?.EXT_texture_webp?.source,
			0,
		);
		const image = this.getImageAsHTMLElement(source);
		if (image) texture.loadBitmap(image);
		return texture;
	}

	getBufferViews(): TgdFormatGltfBufferView[] {
		return this.json.bufferViews ?? [];
	}

	getBufferView(bufferViewIndex: number): TgdFormatGltfBufferView | undefined {
		return this.json.bufferViews?.[bufferViewIndex];
	}

	getBufferViewOrThrow(bufferViewIndex: number): TgdFormatGltfBufferView {
		const bufferView = this.json.bufferViews?.[bufferViewIndex];
		if (!bufferView) {
			throw new Error(
				`[TgdDataGlb] BufferView #${bufferViewIndex} does not exist!`,
			);
		}

		return bufferView;
	}

	getBufferViewData(
		accessor: TgdFormatGltfAccessor,
	):
		| Int8Array
		| Uint8Array
		| Int16Array
		| Uint16Array
		| Uint32Array
		| Float32Array;
	getBufferViewData(
		bufferViewIndex: number,
		type?:
			| number
			| "Int8"
			| "Uint8"
			| "Int16"
			| "Uint16"
			| "Uint32"
			| "Float32",
	):
		| Int8Array
		| Uint8Array
		| Int16Array
		| Uint16Array
		| Uint32Array
		| Float32Array;
	getBufferViewData(
		accessor: TgdFormatGltfAccessor | number,
		type:
			| number
			| "Int8"
			| "Uint8"
			| "Int16"
			| "Uint16"
			| "Uint32"
			| "Float32" = "Float32",
	):
		| Int8Array
		| Uint8Array
		| Int16Array
		| Uint16Array
		| Uint32Array
		| Float32Array {
		if (typeof accessor !== "number") {
			return this.getBufferViewData(
				accessor.bufferView ?? 0,
				accessor.componentType,
			);
		}
		const gltf = this.json;
		const bufferViewIndex = accessor;
		const bufferView = gltf.bufferViews?.[bufferViewIndex];
		if (!bufferView)
			throw new Error(`No bufferView with index #${bufferViewIndex}!`);

		const buffer = this.chunks[bufferView.buffer];
		const byteOffset = bufferView.byteOffset ?? 0;
		const data = buffer.slice(byteOffset, byteOffset + bufferView.byteLength);
		const view = figureOutView(
			data,
			convertTypeToNumber(
				type ??
					this.findAccessorForBufferView(bufferViewIndex)?.componentType ??
					"Float32",
			),
		);
		return view;
	}

	findAccessorForBufferView(
		bufferViewIndex: number,
	): TgdFormatGltfAccessor | undefined {
		const accessor = (this.json.accessors ?? []).find(
			(accessor) => accessor.bufferView === bufferViewIndex,
		);
		if (!accessor) return accessor;

		return {
			...accessor,
			min: accessor.min && expectArrayNumber3(accessor.min),
			max: accessor.max && expectArrayNumber3(accessor.max),
		};
	}

	getAttribute(
		attribName: string,
		meshIndexOrName: TgdFormatGltfMesh | number | string = 0,
		primitiveIndex = 0,
	): TgdFormatGltfMeshPrimitiveAttribute | undefined {
		const primitive = this.getMeshPrimitive(meshIndexOrName, primitiveIndex);
		const attribute = primitive.attributes[attribName];

		return attribute;
	}

	getAttributeOrThrow(
		attribName: string,
		meshIndexOrName: TgdFormatGltfMesh | number | string = 0,
		primitiveIndex = 0,
	): TgdFormatGltfMeshPrimitiveAttribute {
		const attribute = this.getAttribute(
			attribName,
			meshIndexOrName,
			primitiveIndex,
		);
		if (!attribute) {
			throw new Error(
				`[TgdDataGlb] No attribute "${attribName}" in mesh "${meshIndexOrName}" and primitive #${primitiveIndex}!`,
			);
		}

		return attribute;
	}

	getAttributeData(
		attribute: TgdFormatGltfMeshPrimitiveAttribute,
	): Float32Array {
		if (isNumber(attribute)) {
			const accessor = this.getAccessorOrThrow(attribute);
			const data = this.getBufferViewData(
				accessor.bufferView ?? 0,
				accessor.componentType,
			);
			assertFloat32Array(data);
			return data;
		} else if (attribute) {
			const data = attribute.value;
			assertFloat32Array(data);
			return data;
		} else {
			return new Float32Array();
		}
	}

	setAttrib(
		dataset: TgdDataset,
		attribName: string,
		meshIndexOrName: TgdFormatGltfMesh | number | string = 0,
		primitiveIndex = 0,
		primitiveAttribName?: string,
	) {
		const gltf = this.json;
		const attribute = this.getAttribute(primitiveAttribName ?? attribName);
		if (attribute === undefined) {
			throw new Error(
				`[TgdDataGlb] No attribute "${primitiveAttribName ?? attribName}" in mesh "${meshIndexOrName}" and primitive #${primitiveIndex}!`,
			);
		}

		if (isNumber(attribute)) {
			const accessorIndex = attribute;
			const accessor = gltf.accessors?.[accessorIndex];
			if (!accessor) {
				throw new Error(
					`No attribute "${
						primitiveAttribName ?? attribName
					}" for primitive #${primitiveIndex} of mesh #${meshIndexOrName}!`,
				);
			}

			const bufferViewIndex = accessor.bufferView ?? 0;
			const bufferView = gltf.bufferViews?.[bufferViewIndex];
			if (!bufferView) {
				throw new Error(`No bufferView with index #${bufferViewIndex}!`);
			}
			const view = this.getBufferViewData(
				bufferViewIndex,
				accessor.componentType,
			);
			dataset.set(attribName, view, {
				byteStride: bufferView.byteStride,
				byteOffset: accessor.byteOffset,
				count: accessor.count,
			});
		} else {
			dataset.set(attribName, attribute.value, {
				byteStride: resolveStride(attribute.type),
				byteOffset: attribute.byteOffset,
				count: attribute.count,
			});
		}
	}

	makeGeometry({
		computeNormals,
		meshIndex = 0,
		primitiveIndex = 0,
		attPositionName = "POSITION",
		attNormalName = "NORMAL",
		attTextureCoordsName = "TEXCOORD_0",
	}: {
		computeNormals?: boolean;
		meshIndex?: number;
		primitiveIndex?: number;
		attPositionName?: string;
		attNormalName?: string;
		attTextureCoordsName?: string;
	} = {}): TgdGeometry {
		const primitive = this.getMeshPrimitive(meshIndex, primitiveIndex);
		try {
			const { attributes } = primitive;
			if (!attributes) throw new Error("No attributes found!");
			const elements = this.getMeshPrimitiveIndices(meshIndex, primitiveIndex);
			const definition: TgdDatasetTypeRecord = {};
			const attPosition = this.getAttribute(
				attPositionName,
				meshIndex,
				primitiveIndex,
			);
			if (attPosition) {
				definition[attPositionName] = "vec3";
			}
			const attNormal = this.getAttribute(
				attNormalName,
				meshIndex,
				primitiveIndex,
			);
			if (attNormal) {
				definition[attNormalName] = "vec3";
			}
			const attTextureCoords = this.getAttribute(
				attTextureCoordsName,
				meshIndex,
				primitiveIndex,
			);
			if (attTextureCoords) {
				definition[attTextureCoordsName] = "vec2";
			}
			const dataset = new TgdDataset(definition);
			if (attPosition) {
				console.log("POSITION:", this.getAttributeData(attPosition));
				dataset.set(attPositionName, this.getAttributeData(attPosition));
			}
			if (attNormal) {
				dataset.set(attPositionName, this.getAttributeData(attNormal));
			}
			if (attTextureCoords) {
				dataset.set(attPositionName, this.getAttributeData(attTextureCoords));
			}
			return new TgdGeometry({
				computeNormalsIfMissing: computeNormals,
				dataset,
				elements,
				attPosition: attPositionName,
				attNormal: attNormalName,
				attUV: attTextureCoordsName,
			});
		} catch (error) {
			const message =
				error instanceof Error ? error.message : JSON.stringify(error);
			throw new Error(
				`Error in primitive #${primitiveIndex} of mesh #${meshIndex}:\n${message}`,
			);
		}
	}
}

function figureOutView(data: ArrayBuffer, componentType: number) {
	switch (componentType) {
		case 5120:
			return new Int8Array(data);
		case 5121:
			return new Uint8Array(data);
		case 5122:
			return new Int16Array(data);
		case 5123:
			return new Uint16Array(data);
		case 5125:
			return new Uint32Array(data);
		default:
			return new Float32Array(data);
	}
}

function convertTypeToNumber(type: string | number): number {
	if (typeof type === "number") return type;

	switch (type) {
		case "Int8":
			return 5120;
		case "Uint8":
			return 5121;
		case "Int16":
			return 5122;
		case "Uint16":
			return 5123;
		case "Int32":
			return 5124;
		case "Uint32":
			return 5125;
		default:
			return WebGL2RenderingContext.FLOAT;
	}
}

function assertFloat32Array(data: unknown): asserts data is Float32Array {
	if (!(data instanceof Float32Array)) {
		throw new Error(`Data was expected to ba a Float32Array!`);
	}
}

function resolveStride(type: string): number {
	switch (type.toLowerCase()) {
		case "float":
		case "scalar":
			return 1 * Float32Array.BYTES_PER_ELEMENT;
		case "vec2":
			return 2 * Float32Array.BYTES_PER_ELEMENT;
		case "vec3":
			return 3 * Float32Array.BYTES_PER_ELEMENT;
		case "vec4":
			return 4 * Float32Array.BYTES_PER_ELEMENT;
		default:
			return 0;
	}
}

// async function loadImage(
// 	json: TgdFormatGltf,
// 	imageIndex: number,
// ): Promise<HTMLImageElement | undefined> {
// 	const def = json.images?.[imageIndex];
// 	if (!def) return;

// 	const type = def?.mimeType ?? "image/jpeg";
// 	const promise = new Promise<HTMLImageElement | undefined>(
// 		(resolve, reject) => {
// 			const blob = new Blob([imageData.data], { type });
// 			const url = URL.createObjectURL(blob);
// 			const img = new Image();
// 			img.src = url;
// 			img.addEventListener("load", () => {
// 				URL.revokeObjectURL(url);
// 				resolve(img);
// 			});
// 			img.addEventListener("error", () => {
// 				console.error(
// 					`Unable to load image #${imageIndex}!`,
// 					this.json.images?.[imageIndex],
// 				);
// 				URL.revokeObjectURL(url);
// 				reject();
// 			});
// 		},
// 	);
// 	this.cacheImages.set(imageIndex, promise);
// 	return promise;
// }

async function loadImageData(
	imageData?:
		| ImageBitmap
		| HTMLImageElement
		| {
				data: Uint8Array;
				width: number;
				height: number;
				compressed?: boolean;
		  }
		| {
				compressed: true;
				mipmaps: false;
				width: number;
				height: number;
				data: Uint8Array;
		  },
): Promise<HTMLImageElement | undefined> {
	if (!imageData) return;

	if (imageData instanceof HTMLImageElement) return imageData;

	if (imageData instanceof ImageBitmap) {
		const promise = new Promise<HTMLImageElement | undefined>((resolve) => {
			const { width, height } = imageData;
			const { canvas, ctx } = tgdCanvasCreateWithContext2D(width, height);
			ctx.drawImage(imageData, 0, 0);
			canvas.toBlob((blob) => {
				if (!blob) {
					resolve(new Image());
					return;
				}

				const action = async () => {
					const url = URL.createObjectURL(blob);
					const image = await tgdLoadImage(url);
					URL.revokeObjectURL(url);
					resolve(image ?? undefined);
				};
				action();
			}, "image/png");
		});
		return promise;
	}

	return undefined;
}
