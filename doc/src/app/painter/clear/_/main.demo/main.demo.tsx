import { TgdContext, TgdPainterClear } from "@tolokoban/tgd"

// #begin
function init(canvas: HTMLCanvasElement): TgdContext {
    const ctx = new TgdContext(canvas)
    const clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] })
    ctx.add(clear)
    canvas.addEventListener("click", () => {
        clear.red = Math.random()
        clear.green = Math.random()
        clear.blue = Math.random()
        ctx.paint()
    })
    ctx.paint()
    return ctx
}
// #end

export default function Demo() {
    const handleMount = (canvas: HTMLCanvasElement | null) => {
        if (canvas) init(canvas)
    }
    return (
        <canvas
            ref={handleMount}
            style={{
                width: "100%",
                height: "128px",
                background: "#000",
            }}
        ></canvas>
    )
}
