/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./framebuffer.demo"

const FOCUS = {"Detail #1":"    context.camera = new TgdCameraPerspective({\n        distance: 6,\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI / 4,\n        zoom: 1,\n    })\n    const framebuffer1 = new TgdPainterFramebuffer(context)\n    const framebuffer2 = new TgdPainterFramebuffer(context)\n    const background = new TgdPainterFilter(context, {\n        texture: framebuffer2.textureColor0,\n        filters: [new TgdFilterZoom()],\n        flipY: true,\n    })\n    const painter = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        cull: webglPresetCull.back,\n        children: [\n            background,\n            new TgdPainterClear(context, {\n                depth: 1,\n            }),\n            new TgdPainterMeshGltf(context, {\n                asset: assets.glb.mesh,\n                materialFactory: () =>\n                    new TgdMaterialDiffuse({\n                        color: new TgdVec4(1, 0.666, 0),\n                        specularExponent: 5,\n                        specularIntensity: 2.5,\n                        light: new TgdLight({\n                            color: new TgdVec4(1, 1, 1, 1),\n                            direction: new TgdVec3(1, 0, 0),\n                        }),\n                        ambient: new TgdLight({\n                            color: new TgdVec4(0.111, 0.333, 0.999, 4),\n                        }),\n                    }),\n                // new TgdMaterialNormals(),\n            }),\n        ],\n    })\n    framebuffer1.add(painter)\n    const filterHue = new TgdFilterHueRotation({ hueShiftInDegrees: 2 })\n    const filterZoom = new TgdFilterZoom({ zoom: 1.007 })\n    const filters = new TgdPainterFilter(context, {\n        texture: framebuffer1.textureColor0,\n        filters: [filterHue, filterZoom],\n        flipY: true,\n    })\n    framebuffer2.add(filters)\n    const screen = new TgdPainterFilter(context, {\n        texture: framebuffer1.textureColor0,\n        filters: [new TgdFilterZoom()],\n        flipY: true,\n    })\n    /**\n     * This is important because the texture of a framebuffer is recreated\n     * any time the screen size changes.\n     */\n    framebuffer1.onExit = () => {\n        filters.texture = framebuffer1.textureColor0\n    }\n    framebuffer2.onExit = () => {\n        background.texture = framebuffer2.textureColor0\n        screen.texture = framebuffer2.textureColor0\n    }\n    context.add(\n        framebuffer1,\n        framebuffer2,\n        screen,\n        new TgdPainterLogic(time => {\n            const { camera } = context\n            camera.orbitAroundX(Math.sin(time * 0.005045) * 0.03)\n            camera.orbitAroundY(Math.sin(time * 0.001751) * 0.02)\n            camera.setShift(\n                Math.sin(time * 0.001414),\n                Math.sin(time * 0.003414) * 0.1,\n                Math.sin(time * 0.002049) * 1.2\n            )\n            filterZoom.translation.x = 0.005 * Math.sin(time * 0.0024581)\n            filterZoom.translation.y = 0.005 * Math.sin(time * 0.0037151)\n        })\n    )\n    context.play()"}
const FULL = "import {\n    TgdCameraPerspective,\n    TgdContext,\n    TgdFilterHueRotation,\n    TgdFilterZoom,\n    TgdLight,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterLogic,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdVec3,\n    TgdVec4,\n    webglPresetCull,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport SuzanneURL from \"@/assets/mesh/logo.glb\"\nimport BackgroundURL from \"@/assets/image/dino.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera = new TgdCameraPerspective({\n        distance: 6,\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI / 4,\n        zoom: 1,\n    })\n    const framebuffer1 = new TgdPainterFramebuffer(context)\n    const framebuffer2 = new TgdPainterFramebuffer(context)\n    const background = new TgdPainterFilter(context, {\n        texture: framebuffer2.textureColor0,\n        filters: [new TgdFilterZoom()],\n        flipY: true,\n    })\n    const painter = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        cull: webglPresetCull.back,\n        children: [\n            background,\n            new TgdPainterClear(context, {\n                depth: 1,\n            }),\n            new TgdPainterMeshGltf(context, {\n                asset: assets.glb.mesh,\n                materialFactory: () =>\n                    new TgdMaterialDiffuse({\n                        color: new TgdVec4(1, 0.666, 0),\n                        specularExponent: 5,\n                        specularIntensity: 2.5,\n                        light: new TgdLight({\n                            color: new TgdVec4(1, 1, 1, 1),\n                            direction: new TgdVec3(1, 0, 0),\n                        }),\n                        ambient: new TgdLight({\n                            color: new TgdVec4(0.111, 0.333, 0.999, 4),\n                        }),\n                    }),\n                // new TgdMaterialNormals(),\n            }),\n        ],\n    })\n    framebuffer1.add(painter)\n    const filterHue = new TgdFilterHueRotation({ hueShiftInDegrees: 2 })\n    const filterZoom = new TgdFilterZoom({ zoom: 1.007 })\n    const filters = new TgdPainterFilter(context, {\n        texture: framebuffer1.textureColor0,\n        filters: [filterHue, filterZoom],\n        flipY: true,\n    })\n    framebuffer2.add(filters)\n    const screen = new TgdPainterFilter(context, {\n        texture: framebuffer1.textureColor0,\n        filters: [new TgdFilterZoom()],\n        flipY: true,\n    })\n    /**\n     * This is important because the texture of a framebuffer is recreated\n     * any time the screen size changes.\n     */\n    framebuffer1.onExit = () => {\n        filters.texture = framebuffer1.textureColor0\n    }\n    framebuffer2.onExit = () => {\n        background.texture = framebuffer2.textureColor0\n        screen.texture = framebuffer2.textureColor0\n    }\n    context.add(\n        framebuffer1,\n        framebuffer2,\n        screen,\n        new TgdPainterLogic(time => {\n            const { camera } = context\n            camera.orbitAroundX(Math.sin(time * 0.005045) * 0.03)\n            camera.orbitAroundY(Math.sin(time * 0.001751) * 0.02)\n            camera.setShift(\n                Math.sin(time * 0.001414),\n                Math.sin(time * 0.003414) * 0.1,\n                Math.sin(time * 0.002049) * 1.2\n            )\n            filterZoom.translation.x = 0.005 * Math.sin(time * 0.0024581)\n            filterZoom.translation.y = 0.005 * Math.sin(time * 0.0037151)\n        })\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    mesh: SuzanneURL,\n                },\n                image: {\n                    background: BackgroundURL,\n                },\n            }}\n        />\n    )\n}\n"

export default function DemoContainer() {
    const [full, setFull] = React.useState(false)
    return <>
        <div className="half-left"><Demo /></div>
        <div className="half-right">
            <div>
                <ViewButton variant="elevated" onClick={() => setFull(!full)}>
                    {full ? "Show code details" : "Show full code"}
                </ViewButton>
            </div>
            <CodeViewer language="tsx" value={full ? FULL : FOCUS} />
        </div>
    </>
}