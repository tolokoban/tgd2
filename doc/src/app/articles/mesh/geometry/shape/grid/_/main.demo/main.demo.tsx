import {
    type TgdContext,
    TgdControllerCameraOrbit,
    TgdGeometryGrid,
    TgdMaterial,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterState,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

// #begin
function init(context: TgdContext) {
    const clear = new TgdPainterClear(context, {
        color: [0.1, 0.1, 0.1, 1],
        depth: 1,
    })
    const material = new TgdMaterial({
        varyings: { varPosition: "vec3" },
        vertexShaderCodeForGetPosition: [
            "float h = 0.2 * sin(6.0 * pos.x) * cos(6.0 * pos.y);",
            "return vec4(pos.xy, pos.z + h, pos.w);",
        ],
        vertexShaderCode: ["varPosition = position;"],
        fragmentShaderCode: [
            "vec3 normal = normalize(cross(dFdx(varPosition), dFdy(varPosition)));",
            "float light = 0.3 + 0.7 * abs(dot(normal, normalize(vec3(1, 2, 3))));",
            "vec3 color = mix(vec3(0, .3, 1), vec3(1, .8, .2), varPosition.z * 2.5 + 0.5);",
            "return vec4(color * light, 1);",
        ],
    })
    const meshes = [2, 8, 32].map((subdivisions, index) => {
        const mesh = new TgdPainterMesh(context, {
            geometry: new TgdGeometryGrid({
                sizeX: 1.5,
                sizeY: 1.5,
                subdivisions,
            }),
            material,
        })
        mesh.transfo.setPosition(index - 1, 0, (index - 1) * 2)
        return mesh
    })
    context.add(
        clear,
        new TgdPainterState(context, {
            children: meshes,
            depth: "less",
        }),
    )
    context.camera.fitSpaceAtTarget(5.5, 2)
    context.paint()
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        inertiaZoom: 1000,
    })
}
// #end

export default function Demo() {
    return <View onReady={init} gizmo />
}
