import { TgdTypeMeshData, TgdTypeMeshFace } from "./type";
export declare class TgdMesh {
    private readonly faces;
    private data;
    constructor(faces?: TgdTypeMeshFace[]);
    addFace(...faces: TgdTypeMeshFace[]): void;
    get facesCount(): number;
    getData(): TgdTypeMeshData;
}
