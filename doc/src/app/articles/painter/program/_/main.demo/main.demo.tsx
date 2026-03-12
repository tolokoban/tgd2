import {
    type TgdContext,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterProgram,
    TgdPainterState,
    TgdUniformBufferObject,
    TgdVec2,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

// #begin
function init(context: TgdContext) {
    context.camera.transfo.distance = 10
    const clear = new TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    })
    const uniformCamera = new TgdUniformBufferObject(context, {
        uniforms: {
            uniModelViewMatrix: "mat4",
            uniProjectionMatrix: "mat4",
        },
    })
    const uniformPixels = new TgdUniformBufferObject(context, {
        uniforms: {
            uniPixels: "vec2",
        },
    })
    const uniPixels = new TgdVec2()
    const painter = new TgdPainterProgram(context, {
        drawMode: "TRIANGLE_STRIP",
        uniforms: {
            uniformCamera,
            uniformPixels,
        },
        varying: {
            varColor: "vec4",
        },
        dataset: [
            {
                attribs: {
                    attPos: {
                        type: "vec2",
                        data: new Float32Array([+1, 0, +1, +1, -1, 0, -1, +1]),
                    },
                },
            },
            {
                divisor: 1,
                attribs: {
                    attVec: {
                        type: "vec3",
                        data: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
                    },
                    attCol: {
                        type: "vec3",
                        data: new Float32Array([1, 0.2, 0.2, 0.2, 1, 0.2, 0.2, 0.2, 1]),
                    },
                },
            },
        ],
        vert: {
            mainCode: [
                "varColor = vec4(attCol, 1.0);",
                "vec4 point = uniProjectionMatrix * uniModelViewMatrix * vec4(attVec, 1.0);",
                "vec2 radial = normalize(vec2(-point.y, point.x)) * uniPixels * point.w;",
                "point.xy *= attPos.y;",
                "point.xy += radial * attPos.x;",
                "gl_Position = point;",
            ],
        },
        frag: {
            mainCode: ["FragColor = varColor;"],
        },
        state: {
            depth: "less",
            blend: "off",
            cull: "off",
        },
        onDelete: () => {
            uniformCamera.delete()
            uniformPixels.delete()
        },
    })
    context.add(
        () => {
            const { camera } = context
            uniformCamera.values.uniModelViewMatrix = camera.matrixModelView
            uniformCamera.values.uniProjectionMatrix = camera.matrixProjection
            const thickness = 2
            uniPixels.x = thickness / context.width
            uniPixels.y = thickness / context.height
            uniformPixels.values.uniPixels = uniPixels
        },
        clear,
        painter,
        // new TgdPainterState(context, {
        //     depth: "less",
        //     children: [new TgdPainterMesh(context)],
        // }),
    )
    context.paint()
    painter.debug()
}
// #end

export default function Demo() {
    return (
        <View
            onReady={init}
            gizmo
            width="512px"
            height="512px"
            controller={{
                inertiaOrbit: 1000,
            }}
            options={{
                preserveDrawingBuffer: true,
            }}
        />
    )
}
