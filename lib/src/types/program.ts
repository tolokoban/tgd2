import { TgdCodeBloc } from "@tgd/shader/code"
import { ArrayNumber4, TgdMat3, TgdMat4, TgdVec3, TgdVec4 } from ".."

export interface TgdProgramOptions {
    /** Code of the vertex shader */
    vert: TgdCodeBloc
    /** Code of the fragment shader */
    frag: TgdCodeBloc
}

export interface TgdProgram {
    readonly gl: WebGL2RenderingContext

    toCode(options?: Partial<{ indent: string }>): void

    debug(caption?: string): void

    /**
     * Check if an attribute exist and is active.
     */
    hasAttribute(name: string): boolean

    /**
     * @param name Vertex attribute name.
     */
    getAttribLocation(name: string): number

    /**
     * @param name Uniform name.
     */
    getUniformLocation(name: string): WebGLUniformLocation

    uniform1f(name: string, value: number): void

    uniform2f(name: string, x: number, y: number): void

    uniform3f(name: string, x: number, y: number, z: number): void

    uniform3fv(name: string, vec3: TgdVec3 | TgdVec4): void

    uniform4f(name: string, x: number, y: number, z: number, w: number): void

    uniform4fv(name: string, vec4: TgdVec4): void

    uniform1i(name: string, value: number): void

    uniform2i(name: string, x: number, y: number): void

    uniform3i(name: string, x: number, y: number, z: number): void

    uniform4i(name: string, x: number, y: number, z: number, w: number): void

    uniform1ui(name: string, value: number): void

    uniform2ui(name: string, x: number, y: number): void

    uniform3ui(name: string, x: number, y: number, z: number): void

    uniform4ui(name: string, x: number, y: number, z: number, w: number): void

    uniformMatrix3fv(name: string, mat3: TgdMat3): void

    uniformMatrix4fv(name: string, mat4: TgdMat4): void

    use(): void
}
