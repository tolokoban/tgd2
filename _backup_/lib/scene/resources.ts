import RefMap from "@/ref-map"

class ResourceBag {
    readonly buffers = new RefMap<string, WebGLBuffer>()
    readonly shaders = new RefMap<string, WebGLShader>()
    readonly programs = new RefMap<string, WebGLProgram>()
    readonly textures = new RefMap<string, WebGLTexture>()
    readonly vertexArrays = new RefMap<string, WebGLVertexArrayObject>()
}

export default class Resources {
    private static resources = new Map<
        WebGL2RenderingContext,
        Map<string, ResourceBag>
    >()

    static make(gl: WebGL2RenderingContext, id: string): Resources {
        const mapId: Map<string, ResourceBag> = getOrMakeMapId(
            Resources.resources,
            gl
        )
        const resFromCache = mapId.get(id)
        if (resFromCache) return new Resources(gl, resFromCache)

        const res = new ResourceBag()
        mapId.set(id, res)
        return new Resources(gl, res)
    }

    private constructor(
        private readonly gl: WebGL2RenderingContext,
        private readonly bag: ResourceBag
    ) {}

    createBuffer(key = "default"): WebGLBuffer {
        const { bag, gl } = this
        return bag.buffers.add(key, () => {
            const buff = gl.createBuffer()
            if (!buff) throw Error(`Unable to create WebGL2 buffer "${key}"!`)

            return buff
        })
    }

    deleteBuffer(key = "default") {
        const { bag, gl } = this
        const buff = bag.buffers.delete(key)
        if (buff) gl.deleteBuffer(buff)
    }

    createShader(
        type: "vertex" | "fragment",
        code: string,
        key = "default"
    ): WebGLShader {
        const { bag, gl } = this
        const shader = bag.shaders.add(`${type}\n${key}`, () => {
            const newShader = gl.createShader(
                type === "vertex" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER
            )
            if (!newShader)
                throw Error("Unable to create a Vertex Shader handle!")

            gl.shaderSource(newShader, code)
            gl.compileShader(newShader)
            return newShader
        })
        return shader
    }

    deleteShader(key: string, type: "vertex" | "fragment") {
        const { bag, gl } = this
        const shader = bag.shaders.delete(`${type}\n${key}`)
        if (shader) gl.deleteShader(shader)
    }

    createProgram(
        code: { vert: string; frag: string },
        key = "default"
    ): WebGLProgram {
        const { bag, gl } = this
        const prg = bag.programs.add(key, () => {
            const newPrg = gl.createProgram()
            if (!newPrg) {
                throw Error(`Unable to create a WebGL program "${key}"!`)
            }

            return newPrg
        })
        const vertShader = this.createShader("vertex", code.vert, key)
        gl.attachShader(prg, vertShader)
        const fragShader = this.createShader("fragment", code.frag, key)
        gl.attachShader(prg, fragShader)
        gl.linkProgram(prg)
        if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
            var info = gl.getProgramInfoLog(prg) ?? ""
            console.warn(info)
            const errorLines = getErrorLines(info)
            logCode("Vertex Shader", code.vert, ...errorLines)
            logCode("Fragment Shader", code.frag, ...errorLines)
            throw new Error("Could NOT link WebGL2 program!\n" + info)
        }
        return prg
    }

    deleteProgram(key = "default") {
        const { bag, gl } = this
        const prg = bag.programs.delete(key)
        if (prg) gl.deleteProgram(prg)
    }

    createTexture(key = "default") {
        const { bag, gl } = this
        const texture = bag.textures.add(key, () => {
            const tex = gl.createTexture()
            if (!tex) throw Error(`Unable to create WebGL texture "${key}"!`)

            return tex
        })
        return texture
    }

    deteleTexture(key = "default") {
        const { bag, gl } = this
        const texture = bag.textures.delete(key)
        if (texture) gl.deleteTexture(texture)
    }

    createVertexArray(key = "default") {
        const { bag, gl } = this
        return bag.vertexArrays.add(key, () => {
            const vao = gl.createVertexArray()
            if (!vao)
                throw Error(`Unable to create WebGL VertexArray "${key}"!`)

            return vao
        })
    }

    deleteVertexArray(key = "default") {
        const { bag, gl } = this
        const vao = bag.vertexArrays.delete(key)
        if (vao) gl.deleteVertexArray(vao)
    }
}

function getOrMakeMapId(
    resources: Map<WebGL2RenderingContext, Map<string, ResourceBag>>,
    gl: WebGL2RenderingContext
): Map<string, ResourceBag> {
    const item = resources.get(gl)
    if (item) return item

    const newItem = new Map<string, ResourceBag>()
    resources.set(gl, newItem)
    return newItem
}

const RX_ERROR_LINE = /^ERROR:[ \t]+([0-9]+):([0-9]+):/g

function getErrorLines(message: string): number[] {
    const errorLines: number[] = []
    for (const line of message.split("\n")) {
        RX_ERROR_LINE.lastIndex = -1
        const match = RX_ERROR_LINE.exec(line)
        if (match) errorLines.push(parseInt(match[2], 10))
    }
    return errorLines
}

function style(background: string, bold = false) {
    return `color:#fff;background:${background};font-family:monospace;font-size:80%;font-weight:${
        bold ? "bolder" : "100"
    }`
}

function logCode(title: string, code: string, ...errorLines: number[]) {
    console.log(`%c${title}`, "font-weight:bolder;font-size:120%")
    code.split("\n").forEach((line, index) => {
        const num = index + 1
        const prefix = (num * 1e-4).toFixed(4).substring(2)
        const background = errorLines.includes(num) ? "#f00" : "#000"
        console.log(
            `%c${prefix}  %c${line}`,
            style(background),
            style(background, true)
        )
    })
}
