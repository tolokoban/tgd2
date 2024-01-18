export interface TgdTypeMeshFacePoint {
    x: number
    y: number
    z: number
    nx: number
    ny: number
    nz: number
    u?: number
    v?: number
}

export type TgdTypeMeshFace = [
    TgdTypeMeshFacePoint,
    TgdTypeMeshFacePoint,
    TgdTypeMeshFacePoint
]

export interface TgdTypeMeshData {
    attributes: {
        point: Float32Array
        normal: Float32Array
        uv?: Float32Array
    }
    elements: Uint8Array | Uint16Array | Uint32Array
}
