import { TgdMatrix4 } from "../matrix/mat4"

export class TgdCamera2D {
    private readonly mat = new TgdMatrix4()
    private width = 1
    private height = 1

    public x = 0
    public y = 0
    public z = 1
    public zoom = 1
    public angle = 0

    setUniform(gl: WebGL2RenderingContext, location: WebGLUniformLocation) {
        this.width = gl.drawingBufferWidth
        this.height = gl.drawingBufferHeight
        this.update()
        gl.uniformMatrix4fv(location, true, this.mat.data)
    }

    private update() {
        const { x, y, z, zoom, angle, width, height } = this
        const C = Math.cos(angle)
        const S = Math.sin(angle)
        const sx = zoom * (width > height ? height / width : 1)
        const sy = zoom * (width > height ? 1 : width / height)
    }
}
