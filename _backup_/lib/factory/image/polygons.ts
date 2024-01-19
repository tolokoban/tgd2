import { Vector2 } from "../../calc"
import { dom } from "../../utils"

interface Options {
    /**
     * Size (in pixels) of the larger side of the canvas.
     */
    size: number
    /**
     * Distance between the canvas border and any polygon.
     * Expressed in polygons coordinates.
     */
    margin?: number
    fill?: string
    stroke?: string
    thickness: number
}

export class TgdFactoryImagePolygons {
    static make(
        polygons: Vector2[][],
        {
            size,
            margin = 0,
            fill = "#F90",
            stroke = "#027",
            thickness = 4,
        }: Options
    ): HTMLCanvasElement {
        const canvas = dom("canvas")
        const ctx = canvas.getContext("2d")
        if (!ctx) throw Error("Unable to create a 2D context!")

        let minX = Number.MAX_VALUE
        let maxX = -Number.MAX_VALUE
        let minY = Number.MAX_VALUE
        let maxY = -Number.MAX_VALUE
        for (const points of polygons) {
            for (const [x, y] of points) {
                minX = Math.min(minX, x)
                minY = Math.min(minY, y)
                maxX = Math.max(maxX, x)
                maxY = Math.max(maxY, y)
            }
        }
        minX -= margin
        maxX += margin
        minY -= margin
        maxY += margin
        const polyW = maxX - minX
        const polyH = maxY - minY
        const W = polyW > polyH ? size : Math.ceil((size * polyW) / polyH)
        const H = polyH > polyW ? size : Math.ceil((size * polyH) / polyW)
        const fx = W / polyW
        const fy = H / polyH
        canvas.width = W
        canvas.height = H
        ctx.clearRect(0, 0, W, H)
        ctx.lineJoin = "round"
        ctx.fillStyle = fill
        ctx.strokeStyle = fill
        ctx.lineWidth = thickness
        for (const poly of polygons) {
            ctx.beginPath()
            const [x0, y0] = poly.shift() ?? [0, 0]
            ctx.moveTo(fx * (x0 - minX), H - fy * (y0 - minY))
            for (const [x, y] of poly) {
                ctx.lineTo(fx * (x - minX), H - fy * (y - minY))
            }
            ctx.closePath()
            ctx.fill()
            ctx.stroke()
        }
        return canvas
    }
}
