export interface DataAttribute {
    dimension: number;
    type: "float";
}
declare class Data<T extends {
    [key: string]: DataAttribute | number;
}> {
    readonly stride: any;
    private buffer;
    private readonly data;
    private readonly definitions;
    constructor(def: T);
    get(verticesCount: number): ArrayBuffer;
    sendToArrayBuffer(gl: WebGL2RenderingContext, buffer: WebGLBuffer, verticesCount: number, dynamic: boolean): ArrayBuffer;
    set(attribName: keyof T, value: ArrayBuffer): void;
    private checkIfWeHaveEnoughData;
}
export declare function makeData<T extends {
    [key: string]: DataAttribute | number;
}>(def: T): Data<typeof def>;
export {};
