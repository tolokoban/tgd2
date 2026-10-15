import {
    type TgdContext,
    TgdGeometryBox,
    TgdGeometrySphereIco,
    TgdFilter,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterShadow,
    TgdTransfo,
} from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(context: TgdContext) {
    // #begin Initializing WebGL
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    })
    const shadow = new TgdPainterShadow(context, {
        light: {
            transfo: new TgdTransfo({
                position: [-3, 1, 2],
            }).lookAt([0, 0, 0]),
            width: 8,
            height: 4,
        },
        meshes: [
            {
                geometry: new TgdGeometryBox(),
                transfo: new TgdTransfo({ position: [-2, 0, 0] }),
                visible: true,
            },
            {
                geometry: new TgdGeometrySphereIco(),
                transfo: new TgdTransfo({ position: [+2, 0, 0] }),
                visible: true,
            },
        ],
    })
    shadow.camera.near = 0.1
    shadow.camera.far = 10
    // The texture holds distances from the light.
    // Near fragments are white, far ones are black.
    const filter = new TgdFilter({
        uniforms: {
            uniNear: "float",
            uniFar: "float",
        },
        setUniforms({ program }) {
            program.uniform1f("uniNear", shadow.camera.near)
            program.uniform1f("uniFar", shadow.camera.far)
        },
        fragmentShaderCode: [
            "float distance = texture(uniTexture, varUV).r;",
            "float light = 1.0 - clamp((distance - uniNear) / (uniFar - uniNear), 0.0, 1.0);",
            "FragColor = vec4(vec3(light), 1.0);",
        ],
    })
    context.add(
        clear,
        shadow,
        new TgdPainterFilter(context, {
            texture: shadow.texture,
            filters: [filter],
        }),
    )
    context.paint()
    // #end
}

export default function Demo() {
    return <View onReady={init} />
}
