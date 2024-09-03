import { TgdTypeArrayForElements } from "./elements"

export interface TgdMeshData {
    name: string
    elements: TgdTypeArrayForElements
    attPosition: Float32Array
    attNormal?: Float32Array
    attUV?: Float32Array
}
