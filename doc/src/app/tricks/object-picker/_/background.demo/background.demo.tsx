import {
    tgdCalcIndexToRGB,
    tgdCalcRandom,
    tgdCalcRandom3,
    tgdCalcRandom4,
    TgdColor,
    TgdContext,
    TgdGeometrySphereIco,
    TgdMaterialDiffuse,
    TgdMaterialFlat,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterState,
    TgdQuat,
    TgdTransfo,
    TgdVec3,
    TgdContextOffscreen,
    tgdCalcPixelToIndex,
    tgdEasingFunctionTriangle,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(context: TgdContext) {
    // #begin
    const animations = new Set<number>()
    const offscreen = new TgdContextOffscreen(context)
    context.camera.fitSpaceAtTarget(6, 6)
    const indexes = Array.from({ length: 64 }).map((_, i) => i)
    const materials = indexes.map(
        () =>
            new TgdMaterialDiffuse({
                lockLightsToCamera: true,
                color: TgdColor.fromHSL(Math.random(), tgdCalcRandom(0.5, 1), 0.5).toVec4(),
            }),
    )
    const geometry = new TgdGeometrySphereIco({ radius: 0.5 })
    const meshes = indexes.map(
        (index) =>
            new TgdPainterMesh(context, {
                geometry,
                material: materials[index],
                transfo: new TgdTransfo({
                    position: new TgdVec3(tgdCalcRandom3(-3, +3)).normalize().scale(2),
                    scale: [1, 0.5, 0.5],
                    orientation: new TgdQuat(tgdCalcRandom4(-2, +2)).normalize(),
                }),
            }),
    )
    const meshes2 = indexes.map((index) => {
        const mesh = meshes[index]
        return new TgdPainterMesh(offscreen, {
            geometry,
            material: new TgdMaterialFlat({
                color: [...tgdCalcIndexToRGB(index + 1), 1],
            }),
            transfo: mesh.transfo,
        })
    })
    offscreen.add(
        new TgdPainterClear(offscreen, {
            color: [0, 0, 0, 1],
            depth: 1,
        }),
        new TgdPainterState(offscreen, {
            depth: "lessOrEqual",
            children: meshes2,
        }),
    )
    const state = new TgdPainterState(context, {
        depth: "lessOrEqual",
        children: meshes,
    })
    context.add(
        new TgdPainterClear(context, {
            color: [0.3, 0.2, 0.1, 1],
            depth: 1,
        }),
        state,
        offscreen.paint,
    )
    context.inputs.pointer.eventTap.addListener((event) => {
        const { x, y } = event
        const pixel = offscreen.readPixel(x, y)
        const index = tgdCalcPixelToIndex(pixel)
        console.log("🐞 [background.demo@85] index =", index, x, y) // @FIXME: Remove this line written on 2026-09-03 at 11:41
        if (index < 1) return

        const k = index - 1
        if (animations.has(k)) return

        animations.add(k)
        const mesh = meshes[k]
        if (!mesh) return

        console.log("🐞 [background.demo@87] mesh =", mesh) // @FIXME: Remove this line written on 2026-09-02 at 17:03
        context.animSchedule({
            duration: 1,
            action: (alpha: number) => {
                const s = 1 + alpha
                mesh.transfo.setScale(s, s * 0.5, s * 0.5)
            },
            onEnd: () => {
                animations.delete(k)
            },
            easingFunction: tgdEasingFunctionTriangle,
        })
    })
    context.paint()
    // #end
}

export default function Demo() {
    return (
        <div>
            <View
                onReady={init}
                controller={{
                    inertiaOrbit: 2000,
                }}
            />
        </div>
    )
}
