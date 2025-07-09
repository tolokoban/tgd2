import {
    tgdActionCreateVec3Interpolation,
    TgdContext,
    TgdPainterClear,
    TgdVec3,
} from "@tolokoban/tgd"

// #begin
function init(canvas: HTMLCanvasElement): TgdContext {
    const ctx = new TgdContext(canvas)
    const clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] })
    ctx.add(clear)
    /**
     * While transitioning to another color, we don't want the user
     * to be able to click.
     */
    let enabled = false
    canvas.addEventListener("click", () => {
        /**
         * On click, we want to interpolate to another random color.
         */
        const colorInterpolator = tgdActionCreateVec3Interpolation({
            from: new TgdVec3([clear.red, clear.green, clear.blue]),
            to: new TgdVec3([Math.random(), Math.random(), Math.random()]),
            action: ([red, green, blue]) => {
                clear.red = red
                clear.green = green
                clear.blue = blue
            },
        })
        ctx.animSchedule({
            duration: 500,
            action: colorInterpolator,
            onEnd: () => (enabled = true),
        })
        clear.red = Math.random() + 1
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
                width: "320px",
                height: "240px",
                background: "#000",
            }}
        ></canvas>
    )
}
