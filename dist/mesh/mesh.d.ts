interface TgdMeshOptions {
    vertices: number[];
    normals?: number[];
    faces?: number[];
    faceNormals?: number[];
    elements?: number[];
}
export declare class TgdMesh {
    private dirty;
    private readonly vertices;
    private readonly normals;
    private readonly faces;
    private readonly faceNormals;
    private readonly elements;
    constructor(options?: TgdMeshOptions);
    private update;
}
export {};
