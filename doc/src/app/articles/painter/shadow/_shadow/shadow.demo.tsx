import {
    TgdCameraOrthographic,
    TgdColor,
    type TgdContext,
    TgdGeometryPlane,
    TgdGeometrySphereIco,
    TgdMaterialDiffuse,
    TgdMaterialFlatTexture,
    TgdMaterialShadow,
    type TgdMesh,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterMeshes,
    TgdPainterShadow,
    TgdPainterState,
    TgdTransfo,
} from "@tolokoban/tgd"
import { ViewInputColor, ViewSlider } from "@tolokoban/ui"
import React from "react"
import View, { type Assets } from "@/components/demo/Tgd"
import { useFloat } from "@/utils/hooks/float"
import SuzanneURL from "@/assets/mesh/suzanne.glb"

const INITIAL_BIAS = 0.1
const BIAS_MIN = -0.3
const BIAS_MAX = 1
const INITIAL_LIGHT_Y = 2
const INITIAL_COLOR1 = "#ffaa1a"
const INITIAL_COLOR2 = "#1aaaff"
const STORAGE_KEY_BIAS = "tgd/demo/painter/shadow/bias"

function loadBias(): number {
    try {
        const item = window.localStorage.getItem(STORAGE_KEY_BIAS)
        if (item === null) return INITIAL_BIAS

        const bias = Number(item)
        if (!Number.isFinite(bias)) return INITIAL_BIAS

        return Math.max(BIAS_MIN, Math.min(BIAS_MAX, bias))
    } catch {
        return INITIAL_BIAS
    }
}

function saveBias(bias: number) {
    try {
        window.localStorage.setItem(STORAGE_KEY_BIAS, `${bias}`)
    } catch {
        // Storage can be unavailable (private mode, blocked site data, ...).
    }
}

function init(context: TgdContext, assets: Assets) {
    // #begin Initializing WebGL
    // The lights orbit around (0,0,0) at a distance of 8.
    // Their Y coordinates can be changed with the sliders.
    let light1Y = INITIAL_LIGHT_Y
    let light2Y = INITIAL_LIGHT_Y
    const makeLight = () => {
        const light = new TgdCameraOrthographic({
            transfo: new TgdTransfo({ distance: 0 }),
            // Half of the height of the visible area.
            spaceHeight: 4,
            near: 0.1,
            far: 30,
        })
        // Square shadow texture.
        light.screenWidth = 1
        light.screenHeight = 1
        return light
    }
    const light1 = makeLight()
    const light2 = makeLight()
    const texture = assets.glb.suzanne.createTexture2D(context, 0)
    const bouncingMonkey: TgdMesh = {
        geometry: assets.glb.suzanne.makeGeometry(),
        material: new TgdMaterialFlatTexture({ texture }),
        transfo: new TgdTransfo({ position: [+2, +1, +1] }),
        visible: true,
    }
    const spinningMonkey: TgdMesh = {
        geometry: assets.glb.suzanne.makeGeometry(),
        material: new TgdMaterialFlatTexture({ texture }),
        transfo: new TgdTransfo({ position: [-2, +1, +1] }),
        visible: true,
    }
    const ball: TgdMesh = {
        geometry: new TgdGeometrySphereIco({ radius: 2 }),
        // The material is set once the shadow textures are available.
        transfo: new TgdTransfo({ position: [0, 0, -3] }),
        visible: true,
    }
    const shadow1 = new TgdPainterShadow(context, {
        camera: light1,
        meshes: [bouncingMonkey, spinningMonkey, ball],
    })
    const shadow2 = new TgdPainterShadow(context, {
        camera: light2,
        meshes: [bouncingMonkey, spinningMonkey, ball],
    })
    // The ground and the ball share the same material to catch the shadows.
    // A TgdMaterialShadow can wrap another one to catch the shadows of several lights.
    const material2 = new TgdMaterialShadow({
        camera: light2,
        texture: shadow2.texture,
        material: new TgdMaterialDiffuse({
            color: new TgdColor("#ddd").toArrayNumber4(),
        }),
        tint: INITIAL_COLOR2,
    })
    const material1 = new TgdMaterialShadow({
        camera: light1,
        texture: shadow1.texture,
        material: material2,
        tint: INITIAL_COLOR1,
    })
    // The ball casts a shadow, but it also catches the shadows.
    ball.material = material1
    const ground: TgdMesh = {
        // Normal is +Y = X ^ -Z
        geometry: new TgdGeometryPlane({
            sizeX: 100,
            sizeY: 100,
            vecX: [1, 0, 0],
            vecY: [0, 0, -1],
        }),
        material: material1,
        transfo: new TgdTransfo(),
        visible: true,
    }
    // Show where the lights are. They do not cast any shadow.
    const sunMaterial1 = new TgdMaterialDiffuse({ color: new TgdColor(INITIAL_COLOR1).toArrayNumber4() })
    const sunMaterial2 = new TgdMaterialDiffuse({ color: new TgdColor(INITIAL_COLOR2).toArrayNumber4() })
    const sun1: TgdMesh = {
        geometry: new TgdGeometrySphereIco({ radius: 0.5 }),
        material: sunMaterial1,
        transfo: new TgdTransfo({ position: light1.transfo.actualPosition }),
        visible: true,
    }
    const sun2: TgdMesh = {
        geometry: new TgdGeometrySphereIco({ radius: 0.5 }),
        material: sunMaterial2,
        transfo: new TgdTransfo({ position: light2.transfo.actualPosition }),
        visible: true,
    }
    context.add(
        shadow1,
        shadow2,
        new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1], depth: 1 }),
        new TgdPainterState(context, {
            depth: "less",
            cull: "back",
            children: [
                new TgdPainterMeshes(context, {
                    meshes: [ground, bouncingMonkey, spinningMonkey, ball, sun1, sun2],
                }),
            ],
        }),
        new TgdPainterLogic((time, delta) => {
            const a1 = time * 0.207
            const a2 = time * 0.371
            const r = 8
            light1.transfo.setPosition(r * Math.cos(a1), light1Y, r * Math.sin(a1)).lookAt([0, 0, 0])
            sun1.transfo.setPosition(light1.transfo.actualPosition)
            // The second light is on the opposite side.
            light2.transfo.setPosition(-r * Math.cos(a2), light2Y, -r * Math.sin(a2)).lookAt([0, 0, 0])
            sun2.transfo.setPosition(light2.transfo.actualPosition)
            // One bounce per second, between Y = +1 and Y = +2.
            bouncingMonkey.transfo.setPosition(+2, 1 + Math.abs(Math.sin(time * Math.PI)), 0)
            // One turn every 2 seconds.
            spinningMonkey.transfo.orbitAroundY((-delta * 2 * Math.PI) / 2)
        }),
    )
    context.camera.transfo.setEulerRotation(-30, 0, 0)
    context.camera.fitSpaceAtTarget(12, 12)
    context.play()
    // #end
    return {
        setBias(bias: number) {
            material1.bias = bias
            material2.bias = bias
            context.paint()
        },
        setLight1Y(y: number) {
            light1Y = y
            context.paint()
        },
        setLight2Y(y: number) {
            light2Y = y
            context.paint()
        },
        setColor1(color: string) {
            material1.tint = color
            sunMaterial1.color = color
            context.paint()
        },
        setColor2(color: string) {
            material2.tint = color
            sunMaterial2.color = color
            context.paint()
        },
    }
}

export default function Demo() {
    const ref = React.useRef<ReturnType<typeof init> | null>(null)
    const initialBias = React.useMemo(loadBias, [])
    const [bias, setBias] = useFloat(initialBias, ref.current?.setBias)
    const [light1Y, setLight1Y] = useFloat(INITIAL_LIGHT_Y, ref.current?.setLight1Y)
    const [light2Y, setLight2Y] = useFloat(INITIAL_LIGHT_Y, ref.current?.setLight2Y)
    const [color1, setColor1] = React.useState(INITIAL_COLOR1)
    const [color2, setColor2] = React.useState(INITIAL_COLOR2)
    const handleColor1Change = (value: string) => {
        setColor1(value)
        ref.current?.setColor1(value)
    }
    const handleColor2Change = (value: string) => {
        setColor2(value)
        ref.current?.setColor2(value)
    }
    const handleBiasChange = (value: number) => {
        setBias(value)
        saveBias(value)
    }
    return (
        <View
            onReady={(context: TgdContext, assets: Assets) => {
                const demo = init(context, assets)
                ref.current = demo
                // The sliders may have changed before WebGL was ready.
                demo.setBias(bias)
                demo.setLight1Y(light1Y)
                demo.setLight2Y(light2Y)
                demo.setColor1(color1)
                demo.setColor2(color2)
            }}
            assets={{ glb: { suzanne: SuzanneURL } }}
            controller={{ inertiaOrbit: 1000 }}
            gizmo>
            <ViewSlider
                value={bias}
                onChange={handleBiasChange}
                min={BIAS_MIN}
                max={BIAS_MAX}
                step={0.05}
                text={(value) => `bias: ${value.toFixed(2)}`}
                wide
            />
            <ViewSlider
                value={light1Y}
                onChange={setLight1Y}
                min={0}
                max={20}
                step={0.1}
                text={(value) => `light1.y: ${value.toFixed(1)}`}
                wide
            />
            <ViewSlider
                value={light2Y}
                onChange={setLight2Y}
                min={0}
                max={20}
                step={0.1}
                text={(value) => `light2.y: ${value.toFixed(1)}`}
                wide
            />
            <ViewInputColor label="light1 color" value={color1} onChange={handleColor1Change} />
            <ViewInputColor label="light2 color" value={color2} onChange={handleColor2Change} />
        </View>
    )
}
