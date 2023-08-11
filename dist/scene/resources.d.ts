export default class Resources {
    private readonly gl;
    private readonly bag;
    private static resources;
    static make(gl: WebGL2RenderingContext, id: string): Resources;
    private constructor();
    createBuffer(key?: string): WebGLBuffer;
    deleteBuffer(key?: string): void;
    createShader(type: "vertex" | "fragment", code: string, key?: string): WebGLShader;
    deleteShader(key: string, type: "vertex" | "fragment"): void;
    createProgram(code: {
        vert: string;
        frag: string;
    }, key?: string): WebGLProgram;
    deleteProgram(key?: string): void;
    createTexture(key?: string): WebGLTexture;
    deteleTexture(key?: string): void;
    createVertexArray(key?: string): WebGLVertexArrayObject;
    deleteVertexArray(key?: string): void;
}
