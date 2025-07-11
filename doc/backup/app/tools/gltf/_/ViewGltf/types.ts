import { isType } from "@tolokoban/type-guards";

export type Action =
	| ActionVerbatim
	| ActionScene
	| ActionNode
	| ActionImage
	| ActionBufferView;

export interface ActionVerbatim {
	type: "verbatim";
}

export interface ActionNode {
	type: "node";
	index: number;
}

export interface ActionScene {
	type: "scene";
	index: number;
}

export interface ActionImage {
	type: "image";
	index: number;
}

export interface ActionBufferView {
	type: "bufferView";
	index: number;
}

export interface TypeCamera {
	camera: number;
}

export function isTypeCamera(data: unknown): data is TypeCamera {
	return isType(data, { camera: "number" });
}

export interface TypeMesh {
	camera: number;
}

export function isTypeMesh(data: unknown): data is TypeMesh {
	return isType(data, { mesh: "number" });
}

export interface TypeLight {
	extensions: {
		KHR_lights_punctual: {
			light: number;
		};
	};
}

export function isTypeLight(data: unknown): data is TypeLight {
	return isType(data, {
		extensions: {
			KHR_lights_punctual: {
				light: "number",
			},
		},
	});
}
