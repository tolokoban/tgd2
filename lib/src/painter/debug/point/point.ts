import type { TgdContext } from "@tgd/context"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import { TgdVec4 } from "@tolokoban/tgd"

export class TgdPainterDebugPoint extends TgdPainter {
    public readonly color = new TgdVec4(1, 1, 1, 1)
    public size = 16
    public x = 0
    public y = 0
    public z = 0.5
    public w = 1

    private readonly prg: TgdProgram

    constructor(private readonly context: TgdContext) {
        super()
        this.prg = new TgdProgram(context.gl, {
            vert: new TgdShaderVertex({
                uniforms: {
                    x: "float",
                    y: "float",
                    z: "float",
                    w: "float",
                    size: "float",
                },
                mainCode: [
                    "gl_Position = vec4(x, y, z, w);",
                    "gl_PointSize = size;",
                ],
            }).code,
            frag: new TgdShaderFragment({
                uniforms: {
                    color: "vec4",
                },
                outputs: {
                    FragColor: "vec4",
                },
                mainCode: ["FragColor = color;"],
            }).code,
        })
    }

    delete(): void {
        this.prg.delete()
    }

    paint(): void {
        const { prg, context } = this
        prg.use()
        prg.uniform1f("x", this.x)
        prg.uniform1f("y", this.y)
        prg.uniform1f("z", this.z)
        prg.uniform1f("w", this.w)
        prg.uniform1f("size", this.size)
        prg.uniform4fv("color", this.color)
        context.gl.drawArrays(context.gl.POINTS, 0, 1)
    }
}
