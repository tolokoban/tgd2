import {
    tgdCalcIndexToRGB,
    tgdCalcRandom,
    tgdCalcRandom3,
    tgdCalcRandom4,
    TgdColor,
    type TgdContext,
    TgdGeometrySphereIco,
    TgdMaterialDiffuse,
    TgdMaterialFlat,
    TgdPainterObjectPicker,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterState,
    TgdQuat,
    TgdTransfo,
    TgdVec3,
    TgdAnimation,
    tgdEasingFunctionInBounce,
    tgdEasingFunctionInOutBack,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(context: TgdContext) {
    // #begin
    let animation: TgdAnimation | null = null
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
    const picker = new TgdPainterObjectPicker(context)
    const offscreem = picker.contextOffscreen
    const meshes2 = indexes.map((index) => {
        const mesh = meshes[index]
        return new TgdPainterMesh(offscreem, {
            geometry,
            material: new TgdMaterialFlat({
                color: [...tgdCalcIndexToRGB(index + 1), 1],
            }),
            transfo: mesh.transfo,
        })
    })
    picker.add(
        new TgdPainterClear(offscreem, {
            color: [0, 0, 0, 1],
            depth: 1,
        }),
        new TgdPainterState(offscreem, {
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
        picker,
    )
    picker.onTap = (index: number, x: number, y: number) => {
        if (index < 1) return

        const k = index - 1
        const mesh = meshes[k]
        if (!mesh) return

        console.log("🐞 [background.demo@87] mesh =", mesh) // @FIXME: Remove this line written on 2026-09-02 at 17:03
        if (animation) context.animCancel(animation)
        animation = context.animSchedule({
            duration: 0.6,
            action: (alpha) => {
                const beta = Math.sin(alpha * Math.PI)
                const s = beta + 1
                mesh.transfo.setScale(s, s * 0.5, s * 0.5)
            },
            onEnd: () => {
                console.log("🐞 [background.demo@98] mesh.transfo =", mesh.transfo) // @FIXME: Remove this line written on 2026-09-02 at 17:10
                state.debugHierarchy()
            },
            easingFunction: tgdEasingFunctionInOutBack,
        })[0]
    }
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
