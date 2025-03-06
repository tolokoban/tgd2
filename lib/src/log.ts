export class TgdLogger {
    private level = 0
    private readonly lookupTable = new Map<number, string>()

    lookup(gl: WebGL2RenderingContext, value: unknown): string {
        if (typeof value !== "number") return JSON.stringify(value)

        const { lookupTable } = this
        if (lookupTable.size === 0) {
            // initialize lookup table.
            for (const key in gl) {
                const value_: unknown = gl[key as keyof WebGL2RenderingContext]
                if (typeof value_ === "number") {
                    lookupTable.set(value_, `gl.${key}`)
                }
            }
        }
        return lookupTable.get(value) ?? `gl[${value}]`
    }

    call<T>(name: string, function_: () => T): T {
        const indent = "  ".repeat(this.level)
        console.log(`${indent}>>>`, name)
        this.level++
        const time = Date.now()
        try {
            return function_()
        } catch (error) {
            console.error(error)
            throw error
        } finally {
            this.level--
            console.log(`${indent}<<<`, name, `(${Date.now() - time} ms)`)
        }
    }

    stateDepth(gl: WebGL2RenderingContext) {
        console.log("// [State] Depth")
        const enabled = gl.getParameter(gl.DEPTH_TEST) as boolean
        if (enabled) {
            console.log("gl.enable( gl.DEPTH_TEST )")
            console.log(
                "gl.depthFunc(",
                this.lookup(gl, gl.getParameter(gl.DEPTH_FUNC)),
                ")"
            )
            console.log(
                "gl.depthMask(",
                this.lookup(gl, gl.getParameter(gl.DEPTH_WRITEMASK)),
                ")"
            )
            const [rangeMin, rangeMax] = gl.getParameter(
                gl.DEPTH_RANGE
            ) as Float32Array
            console.log("gl.depthRange(", rangeMin, ",", rangeMax, ")")
        } else {
            console.log("gl.disable( gl.DEPTH_TEST )")
        }
    }
}
