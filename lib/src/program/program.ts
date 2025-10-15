import { TgdMat2, TgdMat3, TgdMat4, TgdVec3, TgdVec4 } from "@tgd/math"
import { tgdCodeStringify } from "@tgd/shader/code"
import { TgdProgramOptions } from "@tgd/types"

/**
 * This class helps to manage a WebGLProgram.
 * It will report meaninfull errors and help you with
 * the uniforms.
 */
export class TgdProgram {
    /** Access to the real WebGLProgram object. */
    public readonly program: WebGLProgram

    private readonly shaders: WebGLShader[]
    private readonly uniformsLocations: { [name: string]: WebGLUniformLocation }

    constructor(
        public readonly gl: WebGL2RenderingContext,
        private readonly options: TgdProgramOptions
    ) {
        const prg = gl.createProgram()
        if (!prg) throw new Error("Unable to create WebGLProgram!")

        const vert = tgdCodeStringify(options.vert)
        const vertShader = this.createShader("VERTEX_SHADER", vert)
        gl.attachShader(prg, vertShader)
        const frag = tgdCodeStringify(options.frag)
        const fragShader = this.createShader("FRAGMENT_SHADER", frag)
        gl.attachShader(prg, fragShader)
        const { transformFeedback } = options
        if (transformFeedback) {
            const bufferMode = Array.isArray(transformFeedback)
                ? gl.INTERLEAVED_ATTRIBS
                : gl[transformFeedback.bufferMode]
            const varyings = Array.isArray(transformFeedback)
                ? transformFeedback
                : transformFeedback.varyings
            gl.transformFeedbackVaryings(prg, varyings, bufferMode)
        }
        gl.linkProgram(prg)
        if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
            const info = gl.getProgramInfoLog(prg) ?? ""
            console.error(info)
            const errorLines = getErrorLines(info)
            const cause = [
                logCode("Vertex Shader", vert, errorLines),
                logCode("Fragment Shader", frag, errorLines),
            ].join("\n")
            throw new Error(cause)
        }
        this.program = prg
        this.shaders = [vertShader, fragShader]
        this.uniformsLocations = this.getUniformsLocations()
        gl.detachShader(prg, vertShader)
        gl.deleteShader(vertShader)
        gl.detachShader(prg, fragShader)
        gl.deleteShader(fragShader)
    }

    toCode({ indent = "" }: Partial<{ indent: string }> = {}) {
        const lines: string[] = [
            `function createProgram(gl: WebGL2RenderingContext) {`,
            `  const prg = gl.createProgram()`,
            `  const vertexShader = gl.createShader(gl.VERTEX_SHADER)`,
            `  gl.shaderSource(vertexShader, \`${tgdCodeStringify(
                this.options.vert
            )}\`)`,
            `  gl.compileShader(vertexShader)`,
            `  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)`,
            `  gl.shaderSource(fragmentShader, \`${tgdCodeStringify(
                this.options.frag
            )}\`)`,
            `  gl.compileShader(fragmentShader)`,
            `  gl.attachShader(prg, vertexShader)`,
            `  gl.attachShader(prg, fragmentShader)`,
            `  gl.linkProgram(prg)`,
            `  return prg`,
            `}`,
        ]
        return lines.map((line) => `${indent}${line}`).join("\n")
    }

    hasAttribute(name: string): boolean {
        const { gl, program } = this
        const loc = gl.getAttribLocation(program, name)
        return loc >= 0
    }

    getAttribLocation(name: string): number {
        const { gl, program } = this
        const loc = gl.getAttribLocation(program, name)
        if (loc < 0) {
            throw new Error(`Attribute "${name}" not found!`)
        }
        return loc
    }

    getUniformLocation(name: string): WebGLUniformLocation {
        const { uniformsLocations } = this
        const names = Object.keys(uniformsLocations)
        if (name.length === 0) {
            console.warn(
                `Uniform "${name}" has not been found: there is no active uniform in this program!`
            )
            return 0
        }
        const location = uniformsLocations[name]
        if (!location) {
            console.warn(
                `No active uniform found with name "${name}"!\nAvailable names are: ${names.join(
                    ", "
                )}.`
            )
        }
        return location
    }

    uniform1f(name: string, value: number) {
        const { gl } = this
        gl.uniform1f(this.getUniformLocation(name), value)
    }

    uniform2f(name: string, x: number, y: number) {
        const { gl } = this
        gl.uniform2f(this.getUniformLocation(name), x, y)
    }

    uniform3f(name: string, x: number, y: number, z: number) {
        const { gl } = this
        gl.uniform3f(this.getUniformLocation(name), x, y, z)
    }

    uniform3fv(name: string, vec3: TgdVec3) {
        const { gl } = this
        gl.uniform3fv(this.getUniformLocation(name), vec3)
    }

    uniform4f(name: string, x: number, y: number, z: number, w: number) {
        const { gl } = this
        gl.uniform4f(this.getUniformLocation(name), x, y, z, w)
    }

    uniform4fv(name: string, vec4: TgdVec4) {
        const { gl } = this
        gl.uniform4fv(this.getUniformLocation(name), vec4)
    }

    uniform1i(name: string, value: number) {
        const { gl } = this
        gl.uniform1i(this.getUniformLocation(name), value)
    }

    uniform2i(name: string, x: number, y: number) {
        const { gl } = this
        gl.uniform2i(this.getUniformLocation(name), x, y)
    }

    uniform3i(name: string, x: number, y: number, z: number) {
        const { gl } = this
        gl.uniform3i(this.getUniformLocation(name), x, y, z)
    }

    uniform4i(name: string, x: number, y: number, z: number, w: number) {
        const { gl } = this
        gl.uniform4i(this.getUniformLocation(name), x, y, z, w)
    }

    uniform1ui(name: string, value: number) {
        const { gl } = this
        gl.uniform1ui(this.getUniformLocation(name), value)
    }

    uniform2ui(name: string, x: number, y: number) {
        const { gl } = this
        gl.uniform2ui(this.getUniformLocation(name), x, y)
    }

    uniform3ui(name: string, x: number, y: number, z: number) {
        const { gl } = this
        gl.uniform3ui(this.getUniformLocation(name), x, y, z)
    }

    uniform4ui(name: string, x: number, y: number, z: number, w: number) {
        const { gl } = this
        gl.uniform4ui(this.getUniformLocation(name), x, y, z, w)
    }

    uniformMatrix2fv(name: string, mat2: TgdMat2) {
        const { gl } = this
        gl.uniformMatrix2fv(this.getUniformLocation(name), false, mat2)
    }

    uniformMatrix3fv(name: string, mat3: TgdMat3) {
        const { gl } = this
        gl.uniformMatrix3fv(this.getUniformLocation(name), false, mat3)
    }

    uniformMatrix4fv(name: string, mat4: TgdMat4) {
        const { gl } = this
        gl.uniformMatrix4fv(this.getUniformLocation(name), false, mat4)
    }

    /**
     * Use the current program.
     * This is equivalent to `gl.useProgram(program)`.
     */
    use() {
        const { gl, program } = this
        gl.useProgram(program)
    }

    delete() {
        const { gl } = this
        for (const shader of this.shaders) gl.deleteShader(shader)
        gl.deleteProgram(this.program)
    }

    debug(caption = "TgdProgram") {
        console.log(caption)
        const { options: code } = this
        logCode("Vertex Shader", tgdCodeStringify(code.vert))
        logCode("Fragment Shader", tgdCodeStringify(code.frag))
    }

    private createShader(type: ShaderType, code: string): WebGLShader {
        const { gl } = this
        const shader = gl.createShader(gl[type])
        if (!shader)
            throw new Error(`Unable to create a WebGLShader of type "${type}"!`)

        gl.shaderSource(shader, code)
        gl.compileShader(shader)
        const info = gl.getShaderInfoLog(shader)
        if (info) {
            console.error(`Error in ${type} code:`, info)
            const errorLines = getErrorLines(info)
            throw new Error(logCode(type, code, errorLines))
        }
        return shader
    }

    private getUniformsLocations() {
        const { gl, program } = this
        const count: unknown = gl.getProgramParameter(
            program,
            gl.ACTIVE_UNIFORMS
        )
        if (typeof count !== "number")
            throw new Error(
                "Unable to get the number of uniforms in a WebGLProgram!"
            )

        const uniforms: { [name: string]: WebGLUniformLocation } = {}
        for (let index = 0; index < count; index++) {
            const uniform = gl.getActiveUniform(program, index)
            if (!uniform) continue

            const location = gl.getUniformLocation(program, uniform.name)
            if (location === null)
                throw new Error(
                    `Unable to get location for uniform "${uniform.name}"!`
                )

            uniforms[uniform.name] = location
        }
        return uniforms
    }
}

type ShaderType = "VERTEX_SHADER" | "FRAGMENT_SHADER"

const RX_ERROR_LINE = /^ERROR:[ \t]+([0-9]+):([0-9]+):/g

function getErrorLines(message: string): {
    lines: number[]
    messages: string[]
} {
    const lines: number[] = []
    const messages: string[] = []
    for (const line of message.split("\n")) {
        RX_ERROR_LINE.lastIndex = -1
        const match = RX_ERROR_LINE.exec(line)
        if (match) {
            lines.push(Number.parseInt(match[2], 10))
            messages.push(line.slice(match[0].length).trim())
        }
    }
    return { lines, messages }
}

function style(background: string, bold = false) {
    return `color:#fff;background:${background};font-family:monospace;font-size:80%;font-weight:${
        bold ? "bolder" : "100"
    };margin:0;color:${bold ? "#777" : "#fff"}`
}

function logCode(
    title: string,
    code: string,
    options?: { lines: number[]; messages: string[] }
) {
    const { lines = [], messages = [] } = options ?? {}
    const output: string[] = [title]
    const codeLines: string[] = [`%c${title}`]
    const styles: string[] = ["font-weight:bolder;font-size:120%"]
    let hasError = false
    for (const [index, line] of code.split("\n").entries()) {
        const lineNumber = index + 1
        const prefix = `${lineNumber}`.padStart(5, " ")
        const background = lines.includes(lineNumber) ? "#f00" : "#000"
        codeLines.push(`%c${prefix}  %c${line}`)
        output.push(`${prefix}  ${line}`)
        styles.push(style(background, true), style(background, false))
        if (lines.includes(lineNumber)) {
            hasError = true
            codeLines.push(`%c${messages[lines.indexOf(lineNumber)]}`)
            output.push(`##### ${messages[lines.indexOf(lineNumber)]}`)
            styles.push("color:#f33;background:#333;font-weight:bold")
            console.error()
        }
    }
    console.log(codeLines.join("\n"), ...styles)
    return hasError ? output.join("\n") : "No error."
}
