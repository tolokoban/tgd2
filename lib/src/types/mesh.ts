export interface TgdMeshData {
    name: string
    count: number
    elements: Uint8Array | Uint16Array | Uint32Array
    attPosition: Float32Array
    attNormal?: Float32Array
    attUV?: Float32Array
}
