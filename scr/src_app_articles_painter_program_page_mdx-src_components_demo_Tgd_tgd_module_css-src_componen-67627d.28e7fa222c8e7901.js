"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_program_page_mdx-src_components_demo_Tgd_tgd_module_css-src_componen-67627d"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
36975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(92657);





const FOCUS = { "Detail #1": "function init(context: TgdContext) {\n    context.camera.transfo.distance = 10\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObject(context, {\n        uniforms: {\n            uniModelViewMatrix: \"mat4\",\n            uniProjectionMatrix: \"mat4\",\n        },\n    })\n    const uniformPixels = new TgdUniformBufferObject(context, {\n        uniforms: {\n            uniPixels: \"vec2\",\n        },\n    })\n    const uniPixels = new TgdVec2()\n    const painter = new TgdPainterProgram(context, {\n        drawMode: \"TRIANGLE_STRIP\",\n        uniforms: {\n            uniformCamera,\n            uniformPixels,\n        },\n        varying: {\n            varColor: \"vec4\",\n        },\n        dataset: [\n            {\n                attribs: {\n                    attPos: {\n                        type: \"vec2\",\n                        data: new Float32Array([+1, 0, +1, +1, -1, 0, -1, +1]),\n                    },\n                },\n            },\n            {\n                divisor: 1,\n                attribs: {\n                    attVec: {\n                        type: \"vec3\",\n                        data: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),\n                    },\n                    attCol: {\n                        type: \"vec3\",\n                        data: new Float32Array([1, 0.2, 0.2, 0.2, 1, 0.2, 0.2, 0.2, 1]),\n                    },\n                },\n            },\n        ],\n        vert: {\n            mainCode: [\n                \"varColor = vec4(attCol, 1.0);\",\n                \"vec4 point = uniProjectionMatrix * uniModelViewMatrix * vec4(attVec, 1.0);\",\n                \"vec2 radial = normalize(vec2(-point.y, point.x)) * uniPixels * point.w;\",\n                \"point.xy *= attPos.y;\",\n                \"point.xy += radial * attPos.x;\",\n                \"gl_Position = point;\",\n            ],\n        },\n        frag: {\n            mainCode: [\"FragColor = varColor;\"],\n        },\n        state: {\n            depth: \"less\",\n            blend: \"off\",\n            cull: \"off\",\n        },\n        onDelete: () => {\n            uniformCamera.delete()\n            uniformPixels.delete()\n        },\n    })\n    context.add(\n        () => {\n            const { camera } = context\n            uniformCamera.values.uniModelViewMatrix = camera.matrixModelView\n            uniformCamera.values.uniProjectionMatrix = camera.matrixProjection\n            const thickness = 2\n            uniPixels.x = thickness / context.width\n            uniPixels.y = thickness / context.height\n            uniformPixels.values.uniPixels = uniPixels\n        },\n        clear,\n        painter,\n        // new TgdPainterState(context, {\n        //     depth: \"less\",\n        //     children: [new TgdPainterMesh(context)],\n        // }),\n    )\n    context.paint()\n    painter.debug()\n}" };
const FULL = "import {\n    type TgdContext,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterProgram,\n    TgdPainterState,\n    TgdUniformBufferObject,\n    TgdVec2,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    context.camera.transfo.distance = 10\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObject(context, {\n        uniforms: {\n            uniModelViewMatrix: \"mat4\",\n            uniProjectionMatrix: \"mat4\",\n        },\n    })\n    const uniformPixels = new TgdUniformBufferObject(context, {\n        uniforms: {\n            uniPixels: \"vec2\",\n        },\n    })\n    const uniPixels = new TgdVec2()\n    const painter = new TgdPainterProgram(context, {\n        drawMode: \"TRIANGLE_STRIP\",\n        uniforms: {\n            uniformCamera,\n            uniformPixels,\n        },\n        varying: {\n            varColor: \"vec4\",\n        },\n        dataset: [\n            {\n                attribs: {\n                    attPos: {\n                        type: \"vec2\",\n                        data: new Float32Array([+1, 0, +1, +1, -1, 0, -1, +1]),\n                    },\n                },\n            },\n            {\n                divisor: 1,\n                attribs: {\n                    attVec: {\n                        type: \"vec3\",\n                        data: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),\n                    },\n                    attCol: {\n                        type: \"vec3\",\n                        data: new Float32Array([1, 0.2, 0.2, 0.2, 1, 0.2, 0.2, 0.2, 1]),\n                    },\n                },\n            },\n        ],\n        vert: {\n            mainCode: [\n                \"varColor = vec4(attCol, 1.0);\",\n                \"vec4 point = uniProjectionMatrix * uniModelViewMatrix * vec4(attVec, 1.0);\",\n                \"vec2 radial = normalize(vec2(-point.y, point.x)) * uniPixels * point.w;\",\n                \"point.xy *= attPos.y;\",\n                \"point.xy += radial * attPos.x;\",\n                \"gl_Position = point;\",\n            ],\n        },\n        frag: {\n            mainCode: [\"FragColor = varColor;\"],\n        },\n        state: {\n            depth: \"less\",\n            blend: \"off\",\n            cull: \"off\",\n        },\n        onDelete: () => {\n            uniformCamera.delete()\n            uniformPixels.delete()\n        },\n    })\n    context.add(\n        () => {\n            const { camera } = context\n            uniformCamera.values.uniModelViewMatrix = camera.matrixModelView\n            uniformCamera.values.uniProjectionMatrix = camera.matrixProjection\n            const thickness = 2\n            uniPixels.x = thickness / context.width\n            uniPixels.y = thickness / context.height\n            uniformPixels.values.uniPixels = uniPixels\n        },\n        clear,\n        painter,\n        // new TgdPainterState(context, {\n        //     depth: \"less\",\n        //     children: [new TgdPainterMesh(context)],\n        // }),\n    )\n    context.paint()\n    painter.debug()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo\n            width=\"512px\"\n            height=\"512px\"\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_main_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
92657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);



function init(context) {
    context.camera.transfo.distance = 10;
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    });
    const uniformCamera = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObject(context, {
        uniforms: {
            uniModelViewMatrix: "mat4",
            uniProjectionMatrix: "mat4",
        },
    });
    const uniformPixels = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObject(context, {
        uniforms: {
            uniPixels: "vec2",
        },
    });
    const uniPixels = new _tolokoban_tgd__rspack_import_1.TgdVec2();
    const painter = new _tolokoban_tgd__rspack_import_1.TgdPainterProgram(context, {
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
            uniformCamera.delete();
            uniformPixels.delete();
        },
    });
    context.add(() => {
        const { camera } = context;
        uniformCamera.values.uniModelViewMatrix = camera.matrixModelView;
        uniformCamera.values.uniProjectionMatrix = camera.matrixProjection;
        const thickness = 2;
        uniPixels.x = thickness / context.width;
        uniPixels.y = thickness / context.height;
        uniformPixels.values.uniPixels = uniPixels;
    }, clear, painter);
    context.paint();
    painter.debug();
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, gizmo: true, width: "512px", height: "512px", controller: {
            inertiaOrbit: 1000,
        }, options: {
            preserveDrawingBuffer: true,
        } }));
}


},
53387(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _matrix_demo__rspack_import_4 = __webpack_require__(55297);





const FOCUS = { "Detail #1": "    context.camera.transfo.setPosition(0, 2, 0)\n    context.camera.fitSpaceAtTarget(9, 7)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const imageLetters = assets.image.letters\n    const imageDust = assets.image.dust\n    const cameraSkybox = context.camera.clone()\n    const painterSkybox = new TgdPainterSkybox(context, {\n        tint: [0.4, 0.4, 0.4, 1],\n        camera: cameraSkybox,\n        imagePosX: assets.image.imagePosX,\n        imagePosY: assets.image.imagePosY,\n        imagePosZ: assets.image.imagePosZ,\n        imageNegX: assets.image.imageNegX,\n        imageNegY: assets.image.imageNegY,\n        imageNegZ: assets.image.imageNegZ,\n    })\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.imagePosX,\n        imagePosY: assets.image.imagePosY,\n        imagePosZ: assets.image.imagePosZ,\n        imageNegX: assets.image.imageNegX,\n        imageNegY: assets.image.imageNegY,\n        imageNegZ: assets.image.imageNegZ,\n    })\n    const painterScreen = new PainterScreen(context, {\n        uniformCamera,\n        imageLetters,\n        imageDust,\n        assetScreen: assets.glb.screen,\n        skybox,\n    })\n    const geometry = assets.glb.screen.makeGeometry({\n        meshIndex: \"Mesh\",\n    })\n    const material = new TgdMaterialGlobal({\n        ambientColor: skybox,\n    })\n    const foot = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    context.add(\n        painterSkybox,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            children: [clear, foot, painterScreen],\n        }),\n        (time) => {\n            const angX = Math.abs(10 * Math.sin(time * 0.341))\n            const angY = 30 * Math.sin(time * 0.5)\n            context.camera.transfo.setEulerRotation(angX, angY, 0)\n            cameraSkybox.zoom = 0.3\n            cameraSkybox.transfo.setEulerRotation(angX, angY + 160, 0)\n        },\n    )\n    context.play()" };
const FULL = "import {\n    tgdCanvasCreateWithContext2D,\n    type TgdContext,\n    TgdDataGlb,\n    tgdLoadFont,\n    TgdMaterialGlobal,\n    TgdPainter,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterProgram,\n    TgdPainterSkybox,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdTextureCube,\n    TgdUniformBufferObject,\n    TgdUniformBufferObjectCamera,\n    WebglImage,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport ScreenURL from \"./screen.glb\"\nimport DustURL from \"./dust.webp\"\nimport FuzarFontURL from \"./Fuzar_GX.woff2\"\nimport imagePosX from \"@/assets/cubemap/1024/electric-board/posX.webp\" // +X\nimport imagePosY from \"@/assets/cubemap/1024/electric-board/posY.webp\" // +Y\nimport imagePosZ from \"@/assets/cubemap/1024/electric-board/posZ.webp\" // +Z\nimport imageNegX from \"@/assets/cubemap/1024/electric-board/negX.webp\" // -X\nimport imageNegY from \"@/assets/cubemap/1024/electric-board/negY.webp\" // -Y\nimport imageNegZ from \"@/assets/cubemap/1024/electric-board/negZ.webp\" // -Z\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.setPosition(0, 2, 0)\n    context.camera.fitSpaceAtTarget(9, 7)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const imageLetters = assets.image.letters\n    const imageDust = assets.image.dust\n    const cameraSkybox = context.camera.clone()\n    const painterSkybox = new TgdPainterSkybox(context, {\n        tint: [0.4, 0.4, 0.4, 1],\n        camera: cameraSkybox,\n        imagePosX: assets.image.imagePosX,\n        imagePosY: assets.image.imagePosY,\n        imagePosZ: assets.image.imagePosZ,\n        imageNegX: assets.image.imageNegX,\n        imageNegY: assets.image.imageNegY,\n        imageNegZ: assets.image.imageNegZ,\n    })\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.imagePosX,\n        imagePosY: assets.image.imagePosY,\n        imagePosZ: assets.image.imagePosZ,\n        imageNegX: assets.image.imageNegX,\n        imageNegY: assets.image.imageNegY,\n        imageNegZ: assets.image.imageNegZ,\n    })\n    const painterScreen = new PainterScreen(context, {\n        uniformCamera,\n        imageLetters,\n        imageDust,\n        assetScreen: assets.glb.screen,\n        skybox,\n    })\n    const geometry = assets.glb.screen.makeGeometry({\n        meshIndex: \"Mesh\",\n    })\n    const material = new TgdMaterialGlobal({\n        ambientColor: skybox,\n    })\n    const foot = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    context.add(\n        painterSkybox,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            children: [clear, foot, painterScreen],\n        }),\n        (time) => {\n            const angX = Math.abs(10 * Math.sin(time * 0.341))\n            const angY = 30 * Math.sin(time * 0.5)\n            context.camera.transfo.setEulerRotation(angX, angY, 0)\n            cameraSkybox.zoom = 0.3\n            cameraSkybox.transfo.setEulerRotation(angX, angY + 160, 0)\n        },\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            assets={{\n                glb: { screen: ScreenURL },\n                image: { dust: DustURL, imagePosX, imagePosY, imagePosZ, imageNegX, imageNegY, imageNegZ },\n            }}\n        />\n    )\n}\n\ninterface PainterScreenOptions {\n    imageLetters: WebglImage\n    imageDust: WebglImage\n    uniformCamera: TgdUniformBufferObjectCamera\n    assetScreen: TgdDataGlb\n    skybox: TgdTextureCube\n}\n\nclass PainterScreen extends TgdPainter {\n    private readonly textureLetters: TgdTexture2D\n    private readonly textureDust: TgdTexture2D\n    private readonly program: TgdPainterProgram\n    private readonly uniformBlock: TgdUniformBufferObject<\"uniTime\">\n\n    constructor(\n        public readonly context: TgdContext,\n        { uniformCamera, imageDust, assetScreen, skybox }: PainterScreenOptions,\n    ) {\n        super()\n        const W = 3\n        const H = 2\n        const elements = assetScreen.getMeshPrimitiveIndices(\"Screen\")\n        const dataset = assetScreen.makeDataset({\n            meshIndex: \"Screen\",\n        })\n        dataset.debug()\n        const uniformBlock = new TgdUniformBufferObject(context, {\n            uniforms: {\n                uniTime: \"float\",\n            },\n        })\n        this.uniformBlock = uniformBlock\n        this.textureLetters = new TgdTexture2D(context, {\n            params: {\n                magFilter: \"LINEAR\",\n                minFilter: \"LINEAR\",\n                wrapR: \"REPEAT\",\n                wrapS: \"REPEAT\",\n                wrapT: \"REPEAT\",\n            },\n        })\n        const scale = 512\n        const { ctx, canvas } = tgdCanvasCreateWithContext2D(W * scale, H * scale * 2)\n        this.initCanvas(canvas, ctx)\n        this.loadFont(canvas, ctx)\n        this.textureDust = new TgdTexture2D(context).loadBitmap(imageDust)\n        this.program = new TgdPainterProgram(context, {\n            drawMode: \"TRIANGLES\",\n            state: {\n                blend: \"add\",\n                cull: \"off\",\n            },\n            uniforms: { uniformCamera, uniformBlock },\n            dataset,\n            elements,\n            textures: {\n                uniTextureLetters: this.textureLetters,\n                uniTextureDust: this.textureDust,\n                uniTextureSkybox: skybox,\n            },\n            varying: {\n                varUV: \"vec2\",\n                varNormal: \"vec3\",\n                varPosition: \"vec4\",\n            },\n            vert: {\n                mainCode: [\n                    \"varNormal = NORMAL;\",\n                    \"varUV = TEXCOORD_0;\",\n                    \"varPosition = vec4(POSITION, 1.0);\",\n                    \"gl_Position = uniProjectionMatrix * uniModelViewMatrix * varPosition;\",\n                ],\n            },\n            frag: {\n                mainCode: [\n                    \"vec4 color = texture(uniTextureLetters, vec2(1.0, .5) * varUV + vec2(0, 0.05 * uniTime));\",\n                    \"float dist = fract(uniTime) - fract(varUV.y);\",\n                    \"if (dist < 0.0) dist += 1.0;\",\n                    \"dist = 1.0 / (6.0 * dist);\",\n                    \"color.rgb *= dist * (gl_FrontFacing ? 1.0 : 0.15);\",\n                    \"color.rgb *= texture(uniTextureDust, varUV).r;\",\n                    \"FragColor = color;\",\n                    \"if (!gl_FrontFacing) return;\",\n                    \"vec3 N = normalize(varNormal);\",\n                    \"vec3 V = normalize(uniCameraPosition - varPosition.xyz);\",\n                    \"vec3 R = reflect(-V, N);\",\n                    \"vec3 specular = textureLod(uniTextureSkybox, R, 0.0).rgb;\",\n                    \"specular = pow(specular, vec3(5.0));\",\n                    \"FragColor.rgb += specular * .5;\",\n                ],\n            },\n        })\n    }\n\n    delete() {\n        this.textureLetters.delete()\n        this.program.delete()\n    }\n\n    paint(time: number, delta: number) {\n        this.uniformBlock.values.uniTime = time\n        this.program.paint(time, delta)\n    }\n\n    private initCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {\n        const { width, height } = canvas\n        const text = \"Loading...\"\n        ctx.font = `bold ${width / 7}px monospace`\n        const measure = ctx.measureText(text)\n        ctx.fillStyle = \"#3e3\"\n        const h = height / 5\n        const x = (width - measure.width) / 2\n        for (let y = h; y < height; y += h) {\n            ctx.fillText(text, x, y)\n        }\n        this.textureLetters.loadBitmap(canvas)\n    }\n\n    private loadFont(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {\n        tgdLoadFont(\"Fuzar\", FuzarFontURL).then(() => {\n            const { width, height } = canvas\n            ctx.clearRect(0, 0, width, height)\n            const fontSize = width / 8\n            const margin = fontSize / 3\n            ctx.font = `italic ${fontSize}px Fuzar`\n            ctx.fillStyle = \"#3e3\"\n            let x = margin\n            let y = fontSize * 3\n            let bold = false\n            let italic = false\n            const text = `*Fuzar is the best font ever made in this world of madness. It was engineered by an unknown _genius hidden in a swiss city called Geneva. \"0123456789\"`\n            for (const word of text.split(\" \")) {\n                italic = false\n                bold = false\n                if (word.startsWith(\"_\")) italic = true\n                if (word.startsWith(\"*\")) italic = false\n                const cleanWord = removeStyle(word)\n                ctx.font = `${bold ? \"bold \" : \"\"}${italic ? \"italic \" : \"\"} ${fontSize}px Fuzar`\n                const measure = ctx.measureText(`${cleanWord} `)\n                if (x > width - measure.width - 2 * margin) {\n                    x = margin\n                    y += fontSize\n                }\n                ctx.fillText(cleanWord, x, y)\n                x += measure.width\n            }\n            ctx.lineWidth = 0.5\n            ctx.strokeStyle = \"#5f57\"\n            for (let h = 0; h < height; h += fontSize / 8) {\n                const y = Math.floor(h) + 0.5\n                ctx.beginPath()\n                ctx.moveTo(0, y)\n                ctx.lineTo(width, y)\n                ctx.stroke()\n            }\n            this.textureLetters.loadBitmap(canvas)\n            this.context.paint()\n        })\n    }\n}\n\nfunction removeStyle(word: string) {\n    while (\"*_\".includes(word.charAt(0))) word = word.slice(1)\n    return word\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_matrix_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
55297(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _screen_glb__rspack_import_3 = __webpack_require__(92086);
/* import */ var _dust_webp__rspack_import_4 = __webpack_require__(92615);
/* import */ var _Fuzar_GX_woff2__rspack_import_5 = __webpack_require__(6894);
/* import */ var _assets_cubemap_1024_electric_board_posX_webp__rspack_import_6 = __webpack_require__(43210);
/* import */ var _assets_cubemap_1024_electric_board_posY_webp__rspack_import_7 = __webpack_require__(10741);
/* import */ var _assets_cubemap_1024_electric_board_posZ_webp__rspack_import_8 = __webpack_require__(71336);
/* import */ var _assets_cubemap_1024_electric_board_negX_webp__rspack_import_9 = __webpack_require__(46046);
/* import */ var _assets_cubemap_1024_electric_board_negY_webp__rspack_import_10 = __webpack_require__(87481);
/* import */ var _assets_cubemap_1024_electric_board_negZ_webp__rspack_import_11 = __webpack_require__(28092);












function init(context, assets) {
    context.camera.transfo.setPosition(0, 2, 0);
    context.camera.fitSpaceAtTarget(9, 7);
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1,
    });
    const uniformCamera = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObjectCamera(context);
    const imageLetters = assets.image.letters;
    const imageDust = assets.image.dust;
    const cameraSkybox = context.camera.clone();
    const painterSkybox = new _tolokoban_tgd__rspack_import_1.TgdPainterSkybox(context, {
        tint: [0.4, 0.4, 0.4, 1],
        camera: cameraSkybox,
        imagePosX: assets.image.imagePosX,
        imagePosY: assets.image.imagePosY,
        imagePosZ: assets.image.imagePosZ,
        imageNegX: assets.image.imageNegX,
        imageNegY: assets.image.imageNegY,
        imageNegZ: assets.image.imageNegZ,
    });
    const skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.imagePosX,
        imagePosY: assets.image.imagePosY,
        imagePosZ: assets.image.imagePosZ,
        imageNegX: assets.image.imageNegX,
        imageNegY: assets.image.imageNegY,
        imageNegZ: assets.image.imageNegZ,
    });
    const painterScreen = new PainterScreen(context, {
        uniformCamera,
        imageLetters,
        imageDust,
        assetScreen: assets.glb.screen,
        skybox,
    });
    const geometry = assets.glb.screen.makeGeometry({
        meshIndex: "Mesh",
    });
    const material = new _tolokoban_tgd__rspack_import_1.TgdMaterialGlobal({
        ambientColor: skybox,
    });
    const foot = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry,
        material,
    });
    context.add(painterSkybox, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        children: [clear, foot, painterScreen],
    }), (time) => {
        const angX = Math.abs(10 * Math.sin(time * 0.341));
        const angY = 30 * Math.sin(time * 0.5);
        context.camera.transfo.setEulerRotation(angX, angY, 0);
        cameraSkybox.zoom = 0.3;
        cameraSkybox.transfo.setEulerRotation(angX, angY + 160, 0);
    });
    context.play();
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, controller: {
            inertiaOrbit: 1000,
        }, options: {
            preserveDrawingBuffer: true,
        }, assets: {
            glb: { screen: _screen_glb__rspack_import_3 },
            image: { dust: _dust_webp__rspack_import_4, imagePosX: _assets_cubemap_1024_electric_board_posX_webp__rspack_import_6, imagePosY: _assets_cubemap_1024_electric_board_posY_webp__rspack_import_7, imagePosZ: _assets_cubemap_1024_electric_board_posZ_webp__rspack_import_8, imageNegX: _assets_cubemap_1024_electric_board_negX_webp__rspack_import_9, imageNegY: _assets_cubemap_1024_electric_board_negY_webp__rspack_import_10, imageNegZ: _assets_cubemap_1024_electric_board_negZ_webp__rspack_import_11 },
        } }));
}
class PainterScreen extends _tolokoban_tgd__rspack_import_1.TgdPainter {
    constructor(context, { uniformCamera, imageDust, assetScreen, skybox }) {
        super();
        this.context = context;
        const W = 3;
        const H = 2;
        const elements = assetScreen.getMeshPrimitiveIndices("Screen");
        const dataset = assetScreen.makeDataset({
            meshIndex: "Screen",
        });
        dataset.debug();
        const uniformBlock = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObject(context, {
            uniforms: {
                uniTime: "float",
            },
        });
        this.uniformBlock = uniformBlock;
        this.textureLetters = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
            params: {
                magFilter: "LINEAR",
                minFilter: "LINEAR",
                wrapR: "REPEAT",
                wrapS: "REPEAT",
                wrapT: "REPEAT",
            },
        });
        const scale = 512;
        const { ctx, canvas } = (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateWithContext2D)(W * scale, H * scale * 2);
        this.initCanvas(canvas, ctx);
        this.loadFont(canvas, ctx);
        this.textureDust = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(imageDust);
        this.program = new _tolokoban_tgd__rspack_import_1.TgdPainterProgram(context, {
            drawMode: "TRIANGLES",
            state: {
                blend: "add",
                cull: "off",
            },
            uniforms: { uniformCamera, uniformBlock },
            dataset,
            elements,
            textures: {
                uniTextureLetters: this.textureLetters,
                uniTextureDust: this.textureDust,
                uniTextureSkybox: skybox,
            },
            varying: {
                varUV: "vec2",
                varNormal: "vec3",
                varPosition: "vec4",
            },
            vert: {
                mainCode: [
                    "varNormal = NORMAL;",
                    "varUV = TEXCOORD_0;",
                    "varPosition = vec4(POSITION, 1.0);",
                    "gl_Position = uniProjectionMatrix * uniModelViewMatrix * varPosition;",
                ],
            },
            frag: {
                mainCode: [
                    "vec4 color = texture(uniTextureLetters, vec2(1.0, .5) * varUV + vec2(0, 0.05 * uniTime));",
                    "float dist = fract(uniTime) - fract(varUV.y);",
                    "if (dist < 0.0) dist += 1.0;",
                    "dist = 1.0 / (6.0 * dist);",
                    "color.rgb *= dist * (gl_FrontFacing ? 1.0 : 0.15);",
                    "color.rgb *= texture(uniTextureDust, varUV).r;",
                    "FragColor = color;",
                    "if (!gl_FrontFacing) return;",
                    "vec3 N = normalize(varNormal);",
                    "vec3 V = normalize(uniCameraPosition - varPosition.xyz);",
                    "vec3 R = reflect(-V, N);",
                    "vec3 specular = textureLod(uniTextureSkybox, R, 0.0).rgb;",
                    "specular = pow(specular, vec3(5.0));",
                    "FragColor.rgb += specular * .5;",
                ],
            },
        });
    }
    delete() {
        this.textureLetters.delete();
        this.program.delete();
    }
    paint(time, delta) {
        this.uniformBlock.values.uniTime = time;
        this.program.paint(time, delta);
    }
    initCanvas(canvas, ctx) {
        const { width, height } = canvas;
        const text = "Loading...";
        ctx.font = `bold ${width / 7}px monospace`;
        const measure = ctx.measureText(text);
        ctx.fillStyle = "#3e3";
        const h = height / 5;
        const x = (width - measure.width) / 2;
        for (let y = h; y < height; y += h) {
            ctx.fillText(text, x, y);
        }
        this.textureLetters.loadBitmap(canvas);
    }
    loadFont(canvas, ctx) {
        (0,_tolokoban_tgd__rspack_import_1.tgdLoadFont)("Fuzar", _Fuzar_GX_woff2__rspack_import_5).then(() => {
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);
            const fontSize = width / 8;
            const margin = fontSize / 3;
            ctx.font = `italic ${fontSize}px Fuzar`;
            ctx.fillStyle = "#3e3";
            let x = margin;
            let y = fontSize * 3;
            let bold = false;
            let italic = false;
            const text = `*Fuzar is the best font ever made in this world of madness. It was engineered by an unknown _genius hidden in a swiss city called Geneva. "0123456789"`;
            for (const word of text.split(" ")) {
                italic = false;
                bold = false;
                if (word.startsWith("_"))
                    italic = true;
                if (word.startsWith("*"))
                    italic = false;
                const cleanWord = removeStyle(word);
                ctx.font = `${bold ? "bold " : ""}${italic ? "italic " : ""} ${fontSize}px Fuzar`;
                const measure = ctx.measureText(`${cleanWord} `);
                if (x > width - measure.width - 2 * margin) {
                    x = margin;
                    y += fontSize;
                }
                ctx.fillText(cleanWord, x, y);
                x += measure.width;
            }
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = "#5f57";
            for (let h = 0; h < height; h += fontSize / 8) {
                const y = Math.floor(h) + 0.5;
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }
            this.textureLetters.loadBitmap(canvas);
            this.context.paint();
        });
    }
}
function removeStyle(word) {
    while ("*_".includes(word.charAt(0)))
        word = word.slice(1);
    return word;
}


},
5253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (CodeViewerView)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var prismjs__rspack_import_1 = __webpack_require__(28848);
/* import */ var prismjs__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(prismjs__rspack_import_1);
/* import */ var react__rspack_import_2 = __webpack_require__(96540);
/* import */ var react__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_2);
/* import */ var _CodeViewer_module_css__rspack_import_3 = __webpack_require__(62169);
/* import */ var _grammar__rspack_import_4 = __webpack_require__(7439);





function CodeViewerView(props) {
    const { value } = props;
    if (typeof value === "string") {
        const singleProps = {
            ...props,
            value,
        };
        return (0,react_jsx_runtime__rspack_import_0.jsx)(SingleCodeViewerView, { ...singleProps });
    }
    const multiProps = {
        ...props,
        value,
    };
    return (0,react_jsx_runtime__rspack_import_0.jsx)(MultiCodeViewerView, { ...multiProps });
}
function SingleCodeViewerView(props) {
    const refTimeout = react__rspack_import_2.useRef(0);
    const [popup, setPopup] = react__rspack_import_2.useState(false);
    const refCode = react__rspack_import_2.useRef(null);
    react__rspack_import_2.useEffect(() => {
        window.setTimeout(() => {
            const code = refCode.current;
            if (!code)
                return;
            const html = prismjs__rspack_import_1_default().highlight(props.value, (0,_grammar__rspack_import_4.getGrammarForLanguage)(props.language), props.language);
            code.innerHTML = html;
        }, 100);
    }, [props.value, props.language, refCode.current]);
    const handleDoubleClick = () => {
        navigator.clipboard.writeText(props.value).then(() => {
            setPopup(true);
            window.clearTimeout(refTimeout.current);
            refTimeout.current = window.setTimeout(() => setPopup(false), 7000);
        });
    };
    const handlePopupClick = () => {
        setPopup(false);
        window.clearTimeout(refTimeout.current);
        refTimeout.current = 0;
    };
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: getClassNames(props), onDoubleClick: handleDoubleClick, id: props.id, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("pre", { children: (0,react_jsx_runtime__rspack_import_0.jsx)("code", { ref: refCode, className: `language-${props.language}` }) }), popup && ((0,react_jsx_runtime__rspack_import_0.jsx)("button", { className: _CodeViewer_module_css__rspack_import_3["default"].popup, onClick: handlePopupClick, type: "button", children: (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "This code has been copied to the clipboard!" }) }))] }));
}
function getClassNames(props) {
    const classNames = [_CodeViewer_module_css__rspack_import_3["default"].CodeViewer];
    if (typeof props.className === "string") {
        classNames.push(props.className);
    }
    return classNames.join(" ");
}
function MultiCodeViewerView(props) {
    const captions = Object.keys(props.value);
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, { children: captions.map((caption, index) => ((0,react_jsx_runtime__rspack_import_0.jsxs)("details", { open: false, id: props.id, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("summary", { children: caption }), (0,react_jsx_runtime__rspack_import_0.jsx)(SingleCodeViewerView, { value: props.value[caption], language: props.language })] }, caption))) }));
}


},
7439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getGrammarForLanguage: () => (getGrammarForLanguage)
});
/* import */ var prismjs__rspack_import_0 = __webpack_require__(28848);
/* import */ var prismjs__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(prismjs__rspack_import_0);
/* import */ var prismjs_components_prism_javascript__rspack_import_1 = __webpack_require__(25723);
/* import */ var prismjs_components_prism_javascript__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__rspack_import_1);
/* import */ var prismjs_components_prism_jsx__rspack_import_2 = __webpack_require__(65903);
/* import */ var prismjs_components_prism_jsx__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx__rspack_import_2);
/* import */ var prismjs_components_prism_typescript__rspack_import_3 = __webpack_require__(59587);
/* import */ var prismjs_components_prism_typescript__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__rspack_import_3);
/* import */ var prismjs_components_prism_tsx__rspack_import_4 = __webpack_require__(82769);
/* import */ var prismjs_components_prism_tsx__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_tsx__rspack_import_4);
/* import */ var prismjs_components_prism_c__rspack_import_5 = __webpack_require__(50271);
/* import */ var prismjs_components_prism_c__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_c__rspack_import_5);
/* import */ var prismjs_components_prism_glsl__rspack_import_6 = __webpack_require__(73980);
/* import */ var prismjs_components_prism_glsl__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_glsl__rspack_import_6);







function getGrammarForLanguage(language) {
    switch (language) {
        case "ts":
            return (prismjs__rspack_import_0_default().languages.typescript);
        case "tsx":
            return (prismjs__rspack_import_0_default().languages.tsx);
        case "frag":
        case "vert":
            return (prismjs__rspack_import_0_default().languages.glsl);
        default:
            return GLSL;
    }
}
const TYPES = [
    "bvec2",
    "bvec3",
    "bvec4",
    "dmat2",
    "dmat2x2",
    "dmat2x3",
    "dmat2x4",
    "dmat3",
    "dmat3x2",
    "dmat3x3",
    "dmat3x4",
    "dmat4",
    "dmat4x2",
    "dmat4x3",
    "dmat4x4",
    "dvec2",
    "dvec3",
    "dvec4",
    "float",
    "fvec2",
    "fvec3",
    "fvec4",
    "isampler1D",
    "isampler1DArray",
    "isampler2D",
    "isampler2DArray",
    "isampler2DMS",
    "isampler2DMSArray",
    "isampler2DRect",
    "isampler3D",
    "isamplerBuffer",
    "isamplerCube",
    "isamplerCubeArray",
    "ivec2",
    "ivec3",
    "ivec4",
    "mat2",
    "mat2x2",
    "mat2x3",
    "mat2x4",
    "mat3",
    "mat3x2",
    "mat3x3",
    "mat3x4",
    "mat4",
    "mat4x2",
    "mat4x3",
    "mat4x4",
    "sample",
    "sampler1D",
    "sampler1DArray",
    "sampler1DArrayShadow",
    "sampler1DShadow",
    "sampler2D",
    "sampler2DArray",
    "sampler2DArrayShadow",
    "sampler2DMS",
    "sampler2DMSArray",
    "sampler2DRect",
    "sampler2DRectShadow",
    "sampler2DShadow",
    "sampler3D",
    "samplerBuffer",
    "samplerCube",
    "samplerCubeArray",
    "samplerCubeArrayShadow",
    "samplerCubeShadow",
    "usampler1D",
    "usampler1DArray",
    "usampler2D",
    "usampler2DArray",
    "usampler2DMS",
    "usampler2DMSArray",
    "usampler2DRect",
    "usampler3D",
    "usamplerBuffer",
    "usamplerCube",
    "usamplerCubeArray",
    "uvec2",
    "uvec3",
    "uvec4",
    "vec2",
    "vec3",
    "vec4",
    "void",
];
const KEYWORDS = [
    "centroid",
    "const",
    "discard",
    "else",
    "flat",
    "highp",
    "if",
    "in",
    "inout",
    "invariant",
    "layout",
    "lowp",
    "mediump",
    "noperspective",
    "out",
    "patch",
    "precision",
    "smooth",
    "subroutine",
    "uniform",
    "active",
    "asm",
    "cast",
    "class",
    "common",
    "enum",
    "extern",
    "external",
    "filter",
    "fixed",
    "goto",
    "half",
    "hvec2",
    "hvec3",
    "hvec4",
    "iimage1D",
    "iimage1DArray",
    "iimage2D",
    "iimage2DArray",
    "iimage3D",
    "iimageBuffer",
    "iimageCube",
    "image1D",
    "image1DArray",
    "image1DArrayShadow",
    "image1DShadow",
    "image2D",
    "image2DArray",
    "image2DArrayShadow",
    "image2DShadow",
    "image3D",
    "imageBuffer",
    "imageCube",
    "inline",
    "input",
    "interface",
    "long",
    "namespace",
    "noinline",
    "output",
    "packed",
    "partition",
    "public",
    "row_major",
    "sampler3DRect",
    "short",
    "sizeof",
    "static",
    "superp",
    "template",
    "this",
    "typedef",
    "uimage1D",
    "uimage1DArray",
    "uimage2D",
    "uimage2DArray",
    "uimage3D",
    "uimageBuffer",
    "uimageCube",
    "union",
    "unsigned",
    "using",
    "volatile",
];
const GLOBALS = [
    "gl_DepthRange",
    "gl_DepthRange.diff",
    "gl_DepthRange.far",
    "gl_DepthRange.near",
    "gl_FragCoord",
    "gl_FragDepth",
    "gl_FrontFacing",
    "gl_InstanceID",
    "gl_PointCoord",
    "gl_PointSize",
    "gl_Position",
    "gl_VertexID",
];
const FUNCTIONS = [
    "abs",
    "acos",
    "acosh",
    "all",
    "any",
    "asin",
    "asinh",
    "atan",
    "atanh",
    "ceil",
    "clamp",
    "cos",
    "cosh",
    "cross",
    "degrees",
    "determinant",
    "dFdx",
    "dFdy",
    "distance",
    "dot",
    "equal",
    "exp",
    "exp2",
    "faceforward",
    "floatBitsToInt",
    "floatBitsToUint",
    "floor",
    "fract",
    "fwidth",
    "greaterThan",
    "greaterThanEqual",
    "intBitsToFloat",
    "inverse",
    "inversesqrt",
    "isinf",
    "isnan",
    "length",
    "lessThan",
    "lessThanEqual",
    "log",
    "log2",
    "matrixCompMult",
    "max",
    "min",
    "mix",
    "mod",
    "modf",
    "normalize",
    "not",
    "notEqual",
    "outerProduct",
    "packHalf2x16",
    "packSnorm2x16",
    "packUnorm2x16",
    "pow",
    "radians",
    "reflect",
    "refract",
    "round",
    "roundEven",
    "sign",
    "sin",
    "sinh",
    "smoothstep",
    "sqrt",
    "step",
    "tan",
    "tanh",
    "texelFetch",
    "texelFetchOffset",
    "texture",
    "textureGrad",
    "textureGradOffset",
    "textureLod",
    "textureLodOffset",
    "textureOffset",
    "textureProj",
    "textureProjGrad",
    "textureProjGradOffset",
    "textureProjLod",
    "textureProjLodOffset",
    "textureProjOffset",
    "textureSize",
    "transpose",
    "trunc",
    "uintBitsToFloat",
    "unpackHalf2x16",
    "unpackSnorm2x16",
    "unpackUnorm2x16",
];
const GLSL = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/g,
            lookbehind: true,
            greedy: true,
        },
        {
            pattern: /(^|[^\\:])\/\/.*/g,
            lookbehind: true,
            greedy: true,
        },
        {
            pattern: /^#.+$/g,
            lookbehind: false,
            greedy: true,
        },
    ],
    number: {
        pattern: /(^|[^\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?|\d+(?:_\d+)*n|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?)(?![\w$])/,
        lookbehind: true,
    },
    type: makeIdentifiersRX(TYPES),
    keyword: makeIdentifiersRX(KEYWORDS),
    global: makeIdentifiersRX(GLOBALS),
    function: makeIdentifiersRX(FUNCTIONS),
};
function makeIdentifiersRX(words) {
    return {
        pattern: new RegExp(`(?:[^a-zA-Z0-9_])(${words.join("|")})(?=[^a-zA-Z0-9_])`),
        lookbehind: false,
        greedy: true,
    };
}


},
99002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _CodeViewer__rspack_import_0["default"])
});
/* import */ var _CodeViewer__rspack_import_0 = __webpack_require__(5253);



},
6894(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "fnt/Fuzar_GX.5512f2ffa5ec804b.woff2";

},
92615(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/dust.ed99f4c072b755ed.webp";

},
92086(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/screen.e72f494bd8231b3a.glb";

},
46046(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negX.06700db9529bcdaa.webp";

},
87481(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negY.0ad6cb962161f9c0.webp";

},
28092(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negZ.c885d7942bfe9275.webp";

},
43210(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posX.0e7bfde54d53d335.webp";

},
10741(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posY.055e2c3215eea55e.webp";

},
71336(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posZ.cf4d6e1fd96419ea.webp";

},
23047(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(36975);
/* import */ var _matrix_demo__rspack_import_2 = __webpack_require__(53387);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}




function _createMdxContent(props) {
    var _components = _object_spread({
        a: "a",
        code: "code",
        h1: "h1",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterProgram.html",
                    children: "TgdPainterProgram"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                    lineNumber: 4,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "To write a painter, you often need datasets (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "/docs/classes/TgdDataset.html",
                        children: "TgdDataset"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 6,
                        columnNumber: 46
                    }, this),
                    "),\nuniforms (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "/docs/classes/TgdUniformBufferObject.html",
                        children: "TgdUniformBufferObject"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 7,
                        columnNumber: 11
                    }, this),
                    "),\ntwo shaders (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "/docs/classes/TgdShaderVertex.html",
                        children: "TgdShaderVertex"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 8,
                        columnNumber: 14
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "/docs/classes/TgdShaderFragment.html",
                        children: "TgdShaderFragment"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 8,
                        columnNumber: 72
                    }, this),
                    "),\na program (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "/docs/classes/TgdProgram.html",
                        children: "TgdProgram"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 9,
                        columnNumber: 12
                    }, this),
                    ") and a vertex array object (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "/docs/classes/TgdVertexArray.html",
                        children: "TgdVertexArray"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 9,
                        columnNumber: 84
                    }, this),
                    ").\nYou will also need to select the drawing mode (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "gl.TRIANGLES"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 10,
                        columnNumber: 48
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "gl.POINTS"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 10,
                        columnNumber: 64
                    }, this),
                    ", ...), choose to use elements and/or instance, ..."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "This can be a lot of boilerplate."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "This class will help you do all this without the need to instanciate yourself all the needed objects.\nYou will avoid a lot of common error by using this class."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Blablabla"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                lineNumber: 19,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_matrix_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                lineNumber: 21,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wcm9ncmFtX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fVGdkX3RnZF9tb2R1bGVfY3NzLXNyY19jb21wb25lbi02NzYyN2QuMjhlN2ZhMjIyYzhlNzkwMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3Byb2dyYW0vXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3Byb2dyYW0vXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wcm9ncmFtL18vbWF0cml4LmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3Byb2dyYW0vXy9tYXRyaXguZGVtby9tYXRyaXguZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wcm9ncmFtL3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxMFxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLCAwLCAwLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlNb2RlbFZpZXdNYXRyaXg6IFxcXCJtYXQ0XFxcIixcXG4gICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4OiBcXFwibWF0NFxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlmb3JtUGl4ZWxzID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlQaXhlbHM6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHVuaVBpeGVscyA9IG5ldyBUZ2RWZWMyKClcXG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyUHJvZ3JhbShjb250ZXh0LCB7XFxuICAgICAgICBkcmF3TW9kZTogXFxcIlRSSUFOR0xFX1NUUklQXFxcIixcXG4gICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYSxcXG4gICAgICAgICAgICB1bmlmb3JtUGl4ZWxzLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHZhcnlpbmc6IHtcXG4gICAgICAgICAgICB2YXJDb2xvcjogXFxcInZlYzRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGRhdGFzZXQ6IFtcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgIGF0dHJpYnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGF0dFBvczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsrMSwgMCwgKzEsICsxLCAtMSwgMCwgLTEsICsxXSksXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICBkaXZpc29yOiAxLFxcbiAgICAgICAgICAgICAgICBhdHRyaWJzOiB7XFxuICAgICAgICAgICAgICAgICAgICBhdHRWZWM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwidmVjM1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV0pLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGF0dENvbDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJ2ZWMzXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLjIsIDAuMiwgMC4yLCAxLCAwLjIsIDAuMiwgMC4yLCAxXSksXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICBdLFxcbiAgICAgICAgdmVydDoge1xcbiAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgIFxcXCJ2YXJDb2xvciA9IHZlYzQoYXR0Q29sLCAxLjApO1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJ2ZWM0IHBvaW50ID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIHVuaU1vZGVsVmlld01hdHJpeCAqIHZlYzQoYXR0VmVjLCAxLjApO1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJ2ZWMyIHJhZGlhbCA9IG5vcm1hbGl6ZSh2ZWMyKC1wb2ludC55LCBwb2ludC54KSkgKiB1bmlQaXhlbHMgKiBwb2ludC53O1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJwb2ludC54eSAqPSBhdHRQb3MueTtcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwicG9pbnQueHkgKz0gcmFkaWFsICogYXR0UG9zLng7XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcImdsX1Bvc2l0aW9uID0gcG9pbnQ7XFxcIixcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZyYWc6IHtcXG4gICAgICAgICAgICBtYWluQ29kZTogW1xcXCJGcmFnQ29sb3IgPSB2YXJDb2xvcjtcXFwiXSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzdGF0ZToge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgYmxlbmQ6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG9uRGVsZXRlOiAoKSA9PiB7XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS5kZWxldGUoKVxcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMuZGVsZXRlKClcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgKCkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS52YWx1ZXMudW5pTW9kZWxWaWV3TWF0cml4ID0gY2FtZXJhLm1hdHJpeE1vZGVsVmlld1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudmFsdWVzLnVuaVByb2plY3Rpb25NYXRyaXggPSBjYW1lcmEubWF0cml4UHJvamVjdGlvblxcbiAgICAgICAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IDJcXG4gICAgICAgICAgICB1bmlQaXhlbHMueCA9IHRoaWNrbmVzcyAvIGNvbnRleHQud2lkdGhcXG4gICAgICAgICAgICB1bmlQaXhlbHMueSA9IHRoaWNrbmVzcyAvIGNvbnRleHQuaGVpZ2h0XFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscy52YWx1ZXMudW5pUGl4ZWxzID0gdW5pUGl4ZWxzXFxuICAgICAgICB9LFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBwYWludGVyLFxcbiAgICAgICAgLy8gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAvLyAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgIC8vICAgICBjaGlsZHJlbjogW25ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KV0sXFxuICAgICAgICAvLyB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgcGFpbnRlci5kZWJ1ZygpXFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyUHJvZ3JhbSxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0LFxcbiAgICBUZ2RWZWMyLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTBcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcXG4gICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgdW5pTW9kZWxWaWV3TWF0cml4OiBcXFwibWF0NFxcXCIsXFxuICAgICAgICAgICAgdW5pUHJvamVjdGlvbk1hdHJpeDogXFxcIm1hdDRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgdW5pZm9ybVBpeGVscyA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcXG4gICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgdW5pUGl4ZWxzOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlQaXhlbHMgPSBuZXcgVGdkVmVjMigpXFxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclByb2dyYW0oY29udGV4dCwge1xcbiAgICAgICAgZHJhd01vZGU6IFxcXCJUUklBTkdMRV9TVFJJUFxcXCIsXFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEsXFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscyxcXG4gICAgICAgIH0sXFxuICAgICAgICB2YXJ5aW5nOiB7XFxuICAgICAgICAgICAgdmFyQ29sb3I6IFxcXCJ2ZWM0XFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhc2V0OiBbXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICBhdHRyaWJzOiB7XFxuICAgICAgICAgICAgICAgICAgICBhdHRQb3M6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShbKzEsIDAsICsxLCArMSwgLTEsIDAsIC0xLCArMV0pLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgZGl2aXNvcjogMSxcXG4gICAgICAgICAgICAgICAgYXR0cmliczoge1xcbiAgICAgICAgICAgICAgICAgICAgYXR0VmVjOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcInZlYzNcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDFdKSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBhdHRDb2w6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwidmVjM1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShbMSwgMC4yLCAwLjIsIDAuMiwgMSwgMC4yLCAwLjIsIDAuMiwgMV0pLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgXSxcXG4gICAgICAgIHZlcnQ6IHtcXG4gICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICBcXFwidmFyQ29sb3IgPSB2ZWM0KGF0dENvbCwgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwidmVjNCBwb2ludCA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiB2ZWM0KGF0dFZlYywgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwidmVjMiByYWRpYWwgPSBub3JtYWxpemUodmVjMigtcG9pbnQueSwgcG9pbnQueCkpICogdW5pUGl4ZWxzICogcG9pbnQudztcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwicG9pbnQueHkgKj0gYXR0UG9zLnk7XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcInBvaW50Lnh5ICs9IHJhZGlhbCAqIGF0dFBvcy54O1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJnbF9Qb3NpdGlvbiA9IHBvaW50O1xcXCIsXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmcmFnOiB7XFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcXFwiRnJhZ0NvbG9yID0gdmFyQ29sb3I7XFxcIl0sXFxuICAgICAgICB9LFxcbiAgICAgICAgc3RhdGU6IHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGJsZW5kOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwib2ZmXFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBvbkRlbGV0ZTogKCkgPT4ge1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEuZGVsZXRlKClcXG4gICAgICAgICAgICB1bmlmb3JtUGl4ZWxzLmRlbGV0ZSgpXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgICgpID0+IHtcXG4gICAgICAgICAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudmFsdWVzLnVuaU1vZGVsVmlld01hdHJpeCA9IGNhbWVyYS5tYXRyaXhNb2RlbFZpZXdcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnZhbHVlcy51bmlQcm9qZWN0aW9uTWF0cml4ID0gY2FtZXJhLm1hdHJpeFByb2plY3Rpb25cXG4gICAgICAgICAgICBjb25zdCB0aGlja25lc3MgPSAyXFxuICAgICAgICAgICAgdW5pUGl4ZWxzLnggPSB0aGlja25lc3MgLyBjb250ZXh0LndpZHRoXFxuICAgICAgICAgICAgdW5pUGl4ZWxzLnkgPSB0aGlja25lc3MgLyBjb250ZXh0LmhlaWdodFxcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMudmFsdWVzLnVuaVBpeGVscyA9IHVuaVBpeGVsc1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgcGFpbnRlcixcXG4gICAgICAgIC8vIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgLy8gICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAvLyAgICAgY2hpbGRyZW46IFtuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCldLFxcbiAgICAgICAgLy8gfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIHBhaW50ZXIuZGVidWcoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgd2lkdGg9XFxcIjUxMnB4XFxcIlxcbiAgICAgICAgICAgIGhlaWdodD1cXFwiNTEycHhcXFwiXFxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJQcm9ncmFtLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0LFxuICAgIFRnZFZlYzIsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxMFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcbiAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgIHVuaU1vZGVsVmlld01hdHJpeDogXCJtYXQ0XCIsXG4gICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnN0IHVuaWZvcm1QaXhlbHMgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdChjb250ZXh0LCB7XG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICB1bmlQaXhlbHM6IFwidmVjMlwiLFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29uc3QgdW5pUGl4ZWxzID0gbmV3IFRnZFZlYzIoKVxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclByb2dyYW0oY29udGV4dCwge1xuICAgICAgICBkcmF3TW9kZTogXCJUUklBTkdMRV9TVFJJUFwiLFxuICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYSxcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMsXG4gICAgICAgIH0sXG4gICAgICAgIHZhcnlpbmc6IHtcbiAgICAgICAgICAgIHZhckNvbG9yOiBcInZlYzRcIixcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YXNldDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJpYnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYXR0UG9zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZlYzJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWysxLCAwLCArMSwgKzEsIC0xLCAwLCAtMSwgKzFdKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXZpc29yOiAxLFxuICAgICAgICAgICAgICAgIGF0dHJpYnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYXR0VmVjOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDFdKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0Q29sOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAuMiwgMC4yLCAwLjIsIDEsIDAuMiwgMC4yLCAwLjIsIDFdKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdmVydDoge1xuICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICBcInZhckNvbG9yID0gdmVjNChhdHRDb2wsIDEuMCk7XCIsXG4gICAgICAgICAgICAgICAgXCJ2ZWM0IHBvaW50ID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIHVuaU1vZGVsVmlld01hdHJpeCAqIHZlYzQoYXR0VmVjLCAxLjApO1wiLFxuICAgICAgICAgICAgICAgIFwidmVjMiByYWRpYWwgPSBub3JtYWxpemUodmVjMigtcG9pbnQueSwgcG9pbnQueCkpICogdW5pUGl4ZWxzICogcG9pbnQudztcIixcbiAgICAgICAgICAgICAgICBcInBvaW50Lnh5ICo9IGF0dFBvcy55O1wiLFxuICAgICAgICAgICAgICAgIFwicG9pbnQueHkgKz0gcmFkaWFsICogYXR0UG9zLng7XCIsXG4gICAgICAgICAgICAgICAgXCJnbF9Qb3NpdGlvbiA9IHBvaW50O1wiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZnJhZzoge1xuICAgICAgICAgICAgbWFpbkNvZGU6IFtcIkZyYWdDb2xvciA9IHZhckNvbG9yO1wiXSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgICAgIGJsZW5kOiBcIm9mZlwiLFxuICAgICAgICAgICAgY3VsbDogXCJvZmZcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25EZWxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEuZGVsZXRlKClcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMuZGVsZXRlKClcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS52YWx1ZXMudW5pTW9kZWxWaWV3TWF0cml4ID0gY2FtZXJhLm1hdHJpeE1vZGVsVmlld1xuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS52YWx1ZXMudW5pUHJvamVjdGlvbk1hdHJpeCA9IGNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uXG4gICAgICAgICAgICBjb25zdCB0aGlja25lc3MgPSAyXG4gICAgICAgICAgICB1bmlQaXhlbHMueCA9IHRoaWNrbmVzcyAvIGNvbnRleHQud2lkdGhcbiAgICAgICAgICAgIHVuaVBpeGVscy55ID0gdGhpY2tuZXNzIC8gY29udGV4dC5oZWlnaHRcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMudmFsdWVzLnVuaVBpeGVscyA9IHVuaVBpeGVsc1xuICAgICAgICB9LFxuICAgICAgICBjbGVhcixcbiAgICAgICAgcGFpbnRlcixcbiAgICAgICAgLy8gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIC8vICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgIC8vICAgICBjaGlsZHJlbjogW25ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KV0sXG4gICAgICAgIC8vIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICBwYWludGVyLmRlYnVnKClcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICB3aWR0aD1cIjUxMnB4XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjUxMnB4XCJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21hdHJpeC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDIsIDApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoOSwgNylcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcXG4gICAgY29uc3QgaW1hZ2VMZXR0ZXJzID0gYXNzZXRzLmltYWdlLmxldHRlcnNcXG4gICAgY29uc3QgaW1hZ2VEdXN0ID0gYXNzZXRzLmltYWdlLmR1c3RcXG4gICAgY29uc3QgY2FtZXJhU2t5Ym94ID0gY29udGV4dC5jYW1lcmEuY2xvbmUoKVxcbiAgICBjb25zdCBwYWludGVyU2t5Ym94ID0gbmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xcbiAgICAgICAgdGludDogWzAuNCwgMC40LCAwLjQsIDFdLFxcbiAgICAgICAgY2FtZXJhOiBjYW1lcmFTa3lib3gsXFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhaW50ZXJTY3JlZW4gPSBuZXcgUGFpbnRlclNjcmVlbihjb250ZXh0LCB7XFxuICAgICAgICB1bmlmb3JtQ2FtZXJhLFxcbiAgICAgICAgaW1hZ2VMZXR0ZXJzLFxcbiAgICAgICAgaW1hZ2VEdXN0LFxcbiAgICAgICAgYXNzZXRTY3JlZW46IGFzc2V0cy5nbGIuc2NyZWVuLFxcbiAgICAgICAgc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBnZW9tZXRyeSA9IGFzc2V0cy5nbGIuc2NyZWVuLm1ha2VHZW9tZXRyeSh7XFxuICAgICAgICBtZXNoSW5kZXg6IFxcXCJNZXNoXFxcIixcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xcbiAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IGZvb3QgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgZ2VvbWV0cnksXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBwYWludGVyU2t5Ym94LFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBmb290LCBwYWludGVyU2NyZWVuXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBjb25zdCBhbmdYID0gTWF0aC5hYnMoMTAgKiBNYXRoLnNpbih0aW1lICogMC4zNDEpKVxcbiAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSAzMCAqIE1hdGguc2luKHRpbWUgKiAwLjUpXFxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1ksIDApXFxuICAgICAgICAgICAgY2FtZXJhU2t5Ym94Lnpvb20gPSAwLjNcXG4gICAgICAgICAgICBjYW1lcmFTa3lib3gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1kgKyAxNjAsIDApXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJELFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZERhdGFHbGIsXFxuICAgIHRnZExvYWRGb250LFxcbiAgICBUZ2RNYXRlcmlhbEdsb2JhbCxcXG4gICAgVGdkUGFpbnRlcixcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclByb2dyYW0sXFxuICAgIFRnZFBhaW50ZXJTa3lib3gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdCxcXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcXG4gICAgV2ViZ2xJbWFnZSxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5pbXBvcnQgU2NyZWVuVVJMIGZyb20gXFxcIi4vc2NyZWVuLmdsYlxcXCJcXG5pbXBvcnQgRHVzdFVSTCBmcm9tIFxcXCIuL2R1c3Qud2VicFxcXCJcXG5pbXBvcnQgRnV6YXJGb250VVJMIGZyb20gXFxcIi4vRnV6YXJfR1gud29mZjJcXFwiXFxuaW1wb3J0IGltYWdlUG9zWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvcG9zWC53ZWJwXFxcIiAvLyArWFxcbmltcG9ydCBpbWFnZVBvc1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1kud2VicFxcXCIgLy8gK1lcXG5pbXBvcnQgaW1hZ2VQb3NaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NaLndlYnBcXFwiIC8vICtaXFxuaW1wb3J0IGltYWdlTmVnWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvbmVnWC53ZWJwXFxcIiAvLyAtWFxcbmltcG9ydCBpbWFnZU5lZ1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1kud2VicFxcXCIgLy8gLVlcXG5pbXBvcnQgaW1hZ2VOZWdaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdaLndlYnBcXFwiIC8vIC1aXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDIsIDApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoOSwgNylcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcXG4gICAgY29uc3QgaW1hZ2VMZXR0ZXJzID0gYXNzZXRzLmltYWdlLmxldHRlcnNcXG4gICAgY29uc3QgaW1hZ2VEdXN0ID0gYXNzZXRzLmltYWdlLmR1c3RcXG4gICAgY29uc3QgY2FtZXJhU2t5Ym94ID0gY29udGV4dC5jYW1lcmEuY2xvbmUoKVxcbiAgICBjb25zdCBwYWludGVyU2t5Ym94ID0gbmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xcbiAgICAgICAgdGludDogWzAuNCwgMC40LCAwLjQsIDFdLFxcbiAgICAgICAgY2FtZXJhOiBjYW1lcmFTa3lib3gsXFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhaW50ZXJTY3JlZW4gPSBuZXcgUGFpbnRlclNjcmVlbihjb250ZXh0LCB7XFxuICAgICAgICB1bmlmb3JtQ2FtZXJhLFxcbiAgICAgICAgaW1hZ2VMZXR0ZXJzLFxcbiAgICAgICAgaW1hZ2VEdXN0LFxcbiAgICAgICAgYXNzZXRTY3JlZW46IGFzc2V0cy5nbGIuc2NyZWVuLFxcbiAgICAgICAgc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBnZW9tZXRyeSA9IGFzc2V0cy5nbGIuc2NyZWVuLm1ha2VHZW9tZXRyeSh7XFxuICAgICAgICBtZXNoSW5kZXg6IFxcXCJNZXNoXFxcIixcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xcbiAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IGZvb3QgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgZ2VvbWV0cnksXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBwYWludGVyU2t5Ym94LFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBmb290LCBwYWludGVyU2NyZWVuXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBjb25zdCBhbmdYID0gTWF0aC5hYnMoMTAgKiBNYXRoLnNpbih0aW1lICogMC4zNDEpKVxcbiAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSAzMCAqIE1hdGguc2luKHRpbWUgKiAwLjUpXFxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1ksIDApXFxuICAgICAgICAgICAgY2FtZXJhU2t5Ym94Lnpvb20gPSAwLjNcXG4gICAgICAgICAgICBjYW1lcmFTa3lib3gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1kgKyAxNjAsIDApXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHsgc2NyZWVuOiBTY3JlZW5VUkwgfSxcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgZHVzdDogRHVzdFVSTCwgaW1hZ2VQb3NYLCBpbWFnZVBvc1ksIGltYWdlUG9zWiwgaW1hZ2VOZWdYLCBpbWFnZU5lZ1ksIGltYWdlTmVnWiB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmludGVyZmFjZSBQYWludGVyU2NyZWVuT3B0aW9ucyB7XFxuICAgIGltYWdlTGV0dGVyczogV2ViZ2xJbWFnZVxcbiAgICBpbWFnZUR1c3Q6IFdlYmdsSW1hZ2VcXG4gICAgdW5pZm9ybUNhbWVyYTogVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYVxcbiAgICBhc3NldFNjcmVlbjogVGdkRGF0YUdsYlxcbiAgICBza3lib3g6IFRnZFRleHR1cmVDdWJlXFxufVxcblxcbmNsYXNzIFBhaW50ZXJTY3JlZW4gZXh0ZW5kcyBUZ2RQYWludGVyIHtcXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlTGV0dGVyczogVGdkVGV4dHVyZTJEXFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZUR1c3Q6IFRnZFRleHR1cmUyRFxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb2dyYW06IFRnZFBhaW50ZXJQcm9ncmFtXFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdW5pZm9ybUJsb2NrOiBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0PFxcXCJ1bmlUaW1lXFxcIj5cXG5cXG4gICAgY29uc3RydWN0b3IoXFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcXG4gICAgICAgIHsgdW5pZm9ybUNhbWVyYSwgaW1hZ2VEdXN0LCBhc3NldFNjcmVlbiwgc2t5Ym94IH06IFBhaW50ZXJTY3JlZW5PcHRpb25zLFxcbiAgICApIHtcXG4gICAgICAgIHN1cGVyKClcXG4gICAgICAgIGNvbnN0IFcgPSAzXFxuICAgICAgICBjb25zdCBIID0gMlxcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBhc3NldFNjcmVlbi5nZXRNZXNoUHJpbWl0aXZlSW5kaWNlcyhcXFwiU2NyZWVuXFxcIilcXG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBhc3NldFNjcmVlbi5tYWtlRGF0YXNldCh7XFxuICAgICAgICAgICAgbWVzaEluZGV4OiBcXFwiU2NyZWVuXFxcIixcXG4gICAgICAgIH0pXFxuICAgICAgICBkYXRhc2V0LmRlYnVnKClcXG4gICAgICAgIGNvbnN0IHVuaWZvcm1CbG9jayA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcXG4gICAgICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgICAgICB1bmlUaW1lOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KVxcbiAgICAgICAgdGhpcy51bmlmb3JtQmxvY2sgPSB1bmlmb3JtQmxvY2tcXG4gICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICAgICAgd3JhcFI6IFxcXCJSRVBFQVRcXFwiLFxcbiAgICAgICAgICAgICAgICB3cmFwUzogXFxcIlJFUEVBVFxcXCIsXFxuICAgICAgICAgICAgICAgIHdyYXBUOiBcXFwiUkVQRUFUXFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSlcXG4gICAgICAgIGNvbnN0IHNjYWxlID0gNTEyXFxuICAgICAgICBjb25zdCB7IGN0eCwgY2FudmFzIH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKFcgKiBzY2FsZSwgSCAqIHNjYWxlICogMilcXG4gICAgICAgIHRoaXMuaW5pdENhbnZhcyhjYW52YXMsIGN0eClcXG4gICAgICAgIHRoaXMubG9hZEZvbnQoY2FudmFzLCBjdHgpXFxuICAgICAgICB0aGlzLnRleHR1cmVEdXN0ID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGltYWdlRHVzdClcXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBUZ2RQYWludGVyUHJvZ3JhbShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZHJhd01vZGU6IFxcXCJUUklBTkdMRVNcXFwiLFxcbiAgICAgICAgICAgIHN0YXRlOiB7XFxuICAgICAgICAgICAgICAgIGJsZW5kOiBcXFwiYWRkXFxcIixcXG4gICAgICAgICAgICAgICAgY3VsbDogXFxcIm9mZlxcXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB1bmlmb3JtczogeyB1bmlmb3JtQ2FtZXJhLCB1bmlmb3JtQmxvY2sgfSxcXG4gICAgICAgICAgICBkYXRhc2V0LFxcbiAgICAgICAgICAgIGVsZW1lbnRzLFxcbiAgICAgICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgICAgIHVuaVRleHR1cmVMZXR0ZXJzOiB0aGlzLnRleHR1cmVMZXR0ZXJzLFxcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlRHVzdDogdGhpcy50ZXh0dXJlRHVzdCxcXG4gICAgICAgICAgICAgICAgdW5pVGV4dHVyZVNreWJveDogc2t5Ym94LFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdmFyeWluZzoge1xcbiAgICAgICAgICAgICAgICB2YXJVVjogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgICAgICAgICB2YXJOb3JtYWw6IFxcXCJ2ZWMzXFxcIixcXG4gICAgICAgICAgICAgICAgdmFyUG9zaXRpb246IFxcXCJ2ZWM0XFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHZlcnQ6IHtcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJOb3JtYWwgPSBOT1JNQUw7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJVViA9IFRFWENPT1JEXzA7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiA9IHZlYzQoUE9TSVRJT04sIDEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJnbF9Qb3NpdGlvbiA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiB2YXJQb3NpdGlvbjtcXFwiLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZnJhZzoge1xcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgXFxcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmVMZXR0ZXJzLCB2ZWMyKDEuMCwgLjUpICogdmFyVVYgKyB2ZWMyKDAsIDAuMDUgKiB1bmlUaW1lKSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJmbG9hdCBkaXN0ID0gZnJhY3QodW5pVGltZSkgLSBmcmFjdCh2YXJVVi55KTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImlmIChkaXN0IDwgMC4wKSBkaXN0ICs9IDEuMDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImRpc3QgPSAxLjAgLyAoNi4wICogZGlzdCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJjb2xvci5yZ2IgKj0gZGlzdCAqIChnbF9Gcm9udEZhY2luZyA/IDEuMCA6IDAuMTUpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiY29sb3IucmdiICo9IHRleHR1cmUodW5pVGV4dHVyZUR1c3QsIHZhclVWKS5yO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gY29sb3I7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJpZiAoIWdsX0Zyb250RmFjaW5nKSByZXR1cm47XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMzIE4gPSBub3JtYWxpemUodmFyTm9ybWFsKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZlYzMgViA9IG5vcm1hbGl6ZSh1bmlDYW1lcmFQb3NpdGlvbiAtIHZhclBvc2l0aW9uLnh5eik7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMzIFIgPSByZWZsZWN0KC1WLCBOKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZlYzMgc3BlY3VsYXIgPSB0ZXh0dXJlTG9kKHVuaVRleHR1cmVTa3lib3gsIFIsIDAuMCkucmdiO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwic3BlY3VsYXIgPSBwb3coc3BlY3VsYXIsIHZlYzMoNS4wKSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IucmdiICs9IHNwZWN1bGFyICogLjU7XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSlcXG4gICAgfVxcblxcbiAgICBkZWxldGUoKSB7XFxuICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzLmRlbGV0ZSgpXFxuICAgICAgICB0aGlzLnByb2dyYW0uZGVsZXRlKClcXG4gICAgfVxcblxcbiAgICBwYWludCh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpIHtcXG4gICAgICAgIHRoaXMudW5pZm9ybUJsb2NrLnZhbHVlcy51bmlUaW1lID0gdGltZVxcbiAgICAgICAgdGhpcy5wcm9ncmFtLnBhaW50KHRpbWUsIGRlbHRhKVxcbiAgICB9XFxuXFxuICAgIHByaXZhdGUgaW5pdENhbnZhcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXNcXG4gICAgICAgIGNvbnN0IHRleHQgPSBcXFwiTG9hZGluZy4uLlxcXCJcXG4gICAgICAgIGN0eC5mb250ID0gYGJvbGQgJHt3aWR0aCAvIDd9cHggbW9ub3NwYWNlYFxcbiAgICAgICAgY29uc3QgbWVhc3VyZSA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KVxcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFxcXCIjM2UzXFxcIlxcbiAgICAgICAgY29uc3QgaCA9IGhlaWdodCAvIDVcXG4gICAgICAgIGNvbnN0IHggPSAod2lkdGggLSBtZWFzdXJlLndpZHRoKSAvIDJcXG4gICAgICAgIGZvciAobGV0IHkgPSBoOyB5IDwgaGVpZ2h0OyB5ICs9IGgpIHtcXG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgeCwgeSlcXG4gICAgICAgIH1cXG4gICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMubG9hZEJpdG1hcChjYW52YXMpXFxuICAgIH1cXG5cXG4gICAgcHJpdmF0ZSBsb2FkRm9udChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xcbiAgICAgICAgdGdkTG9hZEZvbnQoXFxcIkZ1emFyXFxcIiwgRnV6YXJGb250VVJMKS50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhc1xcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodClcXG4gICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IHdpZHRoIC8gOFxcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IGZvbnRTaXplIC8gM1xcbiAgICAgICAgICAgIGN0eC5mb250ID0gYGl0YWxpYyAke2ZvbnRTaXplfXB4IEZ1emFyYFxcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcXFwiIzNlM1xcXCJcXG4gICAgICAgICAgICBsZXQgeCA9IG1hcmdpblxcbiAgICAgICAgICAgIGxldCB5ID0gZm9udFNpemUgKiAzXFxuICAgICAgICAgICAgbGV0IGJvbGQgPSBmYWxzZVxcbiAgICAgICAgICAgIGxldCBpdGFsaWMgPSBmYWxzZVxcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBgKkZ1emFyIGlzIHRoZSBiZXN0IGZvbnQgZXZlciBtYWRlIGluIHRoaXMgd29ybGQgb2YgbWFkbmVzcy4gSXQgd2FzIGVuZ2luZWVyZWQgYnkgYW4gdW5rbm93biBfZ2VuaXVzIGhpZGRlbiBpbiBhIHN3aXNzIGNpdHkgY2FsbGVkIEdlbmV2YS4gXFxcIjAxMjM0NTY3ODlcXFwiYFxcbiAgICAgICAgICAgIGZvciAoY29uc3Qgd29yZCBvZiB0ZXh0LnNwbGl0KFxcXCIgXFxcIikpIHtcXG4gICAgICAgICAgICAgICAgaXRhbGljID0gZmFsc2VcXG4gICAgICAgICAgICAgICAgYm9sZCA9IGZhbHNlXFxuICAgICAgICAgICAgICAgIGlmICh3b3JkLnN0YXJ0c1dpdGgoXFxcIl9cXFwiKSkgaXRhbGljID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICBpZiAod29yZC5zdGFydHNXaXRoKFxcXCIqXFxcIikpIGl0YWxpYyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuV29yZCA9IHJlbW92ZVN0eWxlKHdvcmQpXFxuICAgICAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Ym9sZCA/IFxcXCJib2xkIFxcXCIgOiBcXFwiXFxcIn0ke2l0YWxpYyA/IFxcXCJpdGFsaWMgXFxcIiA6IFxcXCJcXFwifSAke2ZvbnRTaXplfXB4IEZ1emFyYFxcbiAgICAgICAgICAgICAgICBjb25zdCBtZWFzdXJlID0gY3R4Lm1lYXN1cmVUZXh0KGAke2NsZWFuV29yZH0gYClcXG4gICAgICAgICAgICAgICAgaWYgKHggPiB3aWR0aCAtIG1lYXN1cmUud2lkdGggLSAyICogbWFyZ2luKSB7XFxuICAgICAgICAgICAgICAgICAgICB4ID0gbWFyZ2luXFxuICAgICAgICAgICAgICAgICAgICB5ICs9IGZvbnRTaXplXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGNsZWFuV29yZCwgeCwgeSlcXG4gICAgICAgICAgICAgICAgeCArPSBtZWFzdXJlLndpZHRoXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAwLjVcXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcXFwiIzVmNTdcXFwiXFxuICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBoZWlnaHQ7IGggKz0gZm9udFNpemUgLyA4KSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGgpICsgMC41XFxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKVxcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKDAsIHkpXFxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGgsIHkpXFxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzLmxvYWRCaXRtYXAoY2FudmFzKVxcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5wYWludCgpXFxuICAgICAgICB9KVxcbiAgICB9XFxufVxcblxcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlKHdvcmQ6IHN0cmluZykge1xcbiAgICB3aGlsZSAoXFxcIipfXFxcIi5pbmNsdWRlcyh3b3JkLmNoYXJBdCgwKSkpIHdvcmQgPSB3b3JkLnNsaWNlKDEpXFxuICAgIHJldHVybiB3b3JkXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZERhdGFHbGIsXG4gICAgdGdkTG9hZEZvbnQsXG4gICAgVGdkTWF0ZXJpYWxHbG9iYWwsXG4gICAgVGdkUGFpbnRlcixcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclByb2dyYW0sXG4gICAgVGdkUGFpbnRlclNreWJveCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFRleHR1cmVDdWJlLFxuICAgIFRnZFVuaWZvcm1CdWZmZXJPYmplY3QsXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcbiAgICBXZWJnbEltYWdlLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IFNjcmVlblVSTCBmcm9tIFwiLi9zY3JlZW4uZ2xiXCJcbmltcG9ydCBEdXN0VVJMIGZyb20gXCIuL2R1c3Qud2VicFwiXG5pbXBvcnQgRnV6YXJGb250VVJMIGZyb20gXCIuL0Z1emFyX0dYLndvZmYyXCJcbmltcG9ydCBpbWFnZVBvc1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NYLndlYnBcIiAvLyArWFxuaW1wb3J0IGltYWdlUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1kud2VicFwiIC8vICtZXG5pbXBvcnQgaW1hZ2VQb3NaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvcG9zWi53ZWJwXCIgLy8gK1pcbmltcG9ydCBpbWFnZU5lZ1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdYLndlYnBcIiAvLyAtWFxuaW1wb3J0IGltYWdlTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1kud2VicFwiIC8vIC1ZXG5pbXBvcnQgaW1hZ2VOZWdaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvbmVnWi53ZWJwXCIgLy8gLVpcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMiwgMClcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDksIDcpXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcbiAgICBjb25zdCBpbWFnZUxldHRlcnMgPSBhc3NldHMuaW1hZ2UubGV0dGVyc1xuICAgIGNvbnN0IGltYWdlRHVzdCA9IGFzc2V0cy5pbWFnZS5kdXN0XG4gICAgY29uc3QgY2FtZXJhU2t5Ym94ID0gY29udGV4dC5jYW1lcmEuY2xvbmUoKVxuICAgIGNvbnN0IHBhaW50ZXJTa3lib3ggPSBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XG4gICAgICAgIHRpbnQ6IFswLjQsIDAuNCwgMC40LCAxXSxcbiAgICAgICAgY2FtZXJhOiBjYW1lcmFTa3lib3gsXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLmltYWdlUG9zWCxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NZLFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLmltYWdlTmVnWCxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdZLFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXG4gICAgfSlcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1gsXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLmltYWdlUG9zWSxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NaLFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1gsXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLmltYWdlTmVnWSxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdaLFxuICAgIH0pXG4gICAgY29uc3QgcGFpbnRlclNjcmVlbiA9IG5ldyBQYWludGVyU2NyZWVuKGNvbnRleHQsIHtcbiAgICAgICAgdW5pZm9ybUNhbWVyYSxcbiAgICAgICAgaW1hZ2VMZXR0ZXJzLFxuICAgICAgICBpbWFnZUR1c3QsXG4gICAgICAgIGFzc2V0U2NyZWVuOiBhc3NldHMuZ2xiLnNjcmVlbixcbiAgICAgICAgc2t5Ym94LFxuICAgIH0pXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBhc3NldHMuZ2xiLnNjcmVlbi5tYWtlR2VvbWV0cnkoe1xuICAgICAgICBtZXNoSW5kZXg6IFwiTWVzaFwiLFxuICAgIH0pXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xuICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcbiAgICB9KVxuICAgIGNvbnN0IGZvb3QgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuICAgICAgICBnZW9tZXRyeSxcbiAgICAgICAgbWF0ZXJpYWwsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgcGFpbnRlclNreWJveCxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBmb290LCBwYWludGVyU2NyZWVuXSxcbiAgICAgICAgfSksXG4gICAgICAgICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbmdYID0gTWF0aC5hYnMoMTAgKiBNYXRoLnNpbih0aW1lICogMC4zNDEpKVxuICAgICAgICAgICAgY29uc3QgYW5nWSA9IDMwICogTWF0aC5zaW4odGltZSAqIDAuNSlcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihhbmdYLCBhbmdZLCAwKVxuICAgICAgICAgICAgY2FtZXJhU2t5Ym94Lnpvb20gPSAwLjNcbiAgICAgICAgICAgIGNhbWVyYVNreWJveC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oYW5nWCwgYW5nWSArIDE2MCwgMClcbiAgICAgICAgfSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgZ2xiOiB7IHNjcmVlbjogU2NyZWVuVVJMIH0sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgZHVzdDogRHVzdFVSTCwgaW1hZ2VQb3NYLCBpbWFnZVBvc1ksIGltYWdlUG9zWiwgaW1hZ2VOZWdYLCBpbWFnZU5lZ1ksIGltYWdlTmVnWiB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmludGVyZmFjZSBQYWludGVyU2NyZWVuT3B0aW9ucyB7XG4gICAgaW1hZ2VMZXR0ZXJzOiBXZWJnbEltYWdlXG4gICAgaW1hZ2VEdXN0OiBXZWJnbEltYWdlXG4gICAgdW5pZm9ybUNhbWVyYTogVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYVxuICAgIGFzc2V0U2NyZWVuOiBUZ2REYXRhR2xiXG4gICAgc2t5Ym94OiBUZ2RUZXh0dXJlQ3ViZVxufVxuXG5jbGFzcyBQYWludGVyU2NyZWVuIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlTGV0dGVyczogVGdkVGV4dHVyZTJEXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlRHVzdDogVGdkVGV4dHVyZTJEXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9ncmFtOiBUZ2RQYWludGVyUHJvZ3JhbVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdW5pZm9ybUJsb2NrOiBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0PFwidW5pVGltZVwiPlxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0LFxuICAgICAgICB7IHVuaWZvcm1DYW1lcmEsIGltYWdlRHVzdCwgYXNzZXRTY3JlZW4sIHNreWJveCB9OiBQYWludGVyU2NyZWVuT3B0aW9ucyxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBjb25zdCBXID0gM1xuICAgICAgICBjb25zdCBIID0gMlxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGFzc2V0U2NyZWVuLmdldE1lc2hQcmltaXRpdmVJbmRpY2VzKFwiU2NyZWVuXCIpXG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBhc3NldFNjcmVlbi5tYWtlRGF0YXNldCh7XG4gICAgICAgICAgICBtZXNoSW5kZXg6IFwiU2NyZWVuXCIsXG4gICAgICAgIH0pXG4gICAgICAgIGRhdGFzZXQuZGVidWcoKVxuICAgICAgICBjb25zdCB1bmlmb3JtQmxvY2sgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdChjb250ZXh0LCB7XG4gICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgIHVuaVRpbWU6IFwiZmxvYXRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudW5pZm9ybUJsb2NrID0gdW5pZm9ybUJsb2NrXG4gICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICAgICAgd3JhcFI6IFwiUkVQRUFUXCIsXG4gICAgICAgICAgICAgICAgd3JhcFM6IFwiUkVQRUFUXCIsXG4gICAgICAgICAgICAgICAgd3JhcFQ6IFwiUkVQRUFUXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBzY2FsZSA9IDUxMlxuICAgICAgICBjb25zdCB7IGN0eCwgY2FudmFzIH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKFcgKiBzY2FsZSwgSCAqIHNjYWxlICogMilcbiAgICAgICAgdGhpcy5pbml0Q2FudmFzKGNhbnZhcywgY3R4KVxuICAgICAgICB0aGlzLmxvYWRGb250KGNhbnZhcywgY3R4KVxuICAgICAgICB0aGlzLnRleHR1cmVEdXN0ID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGltYWdlRHVzdClcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbmV3IFRnZFBhaW50ZXJQcm9ncmFtKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRyYXdNb2RlOiBcIlRSSUFOR0xFU1wiLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBibGVuZDogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBjdWxsOiBcIm9mZlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7IHVuaWZvcm1DYW1lcmEsIHVuaWZvcm1CbG9jayB9LFxuICAgICAgICAgICAgZGF0YXNldCxcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdGV4dHVyZXM6IHtcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlTGV0dGVyczogdGhpcy50ZXh0dXJlTGV0dGVycyxcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlRHVzdDogdGhpcy50ZXh0dXJlRHVzdCxcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlU2t5Ym94OiBza3lib3gsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFyeWluZzoge1xuICAgICAgICAgICAgICAgIHZhclVWOiBcInZlYzJcIixcbiAgICAgICAgICAgICAgICB2YXJOb3JtYWw6IFwidmVjM1wiLFxuICAgICAgICAgICAgICAgIHZhclBvc2l0aW9uOiBcInZlYzRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2ZXJ0OiB7XG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJOb3JtYWwgPSBOT1JNQUw7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFyVVYgPSBURVhDT09SRF8wO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZhclBvc2l0aW9uID0gdmVjNChQT1NJVElPTiwgMS4wKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJnbF9Qb3NpdGlvbiA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiB2YXJQb3NpdGlvbjtcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZyYWc6IHtcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgICAgICBcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmVMZXR0ZXJzLCB2ZWMyKDEuMCwgLjUpICogdmFyVVYgKyB2ZWMyKDAsIDAuMDUgKiB1bmlUaW1lKSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZmxvYXQgZGlzdCA9IGZyYWN0KHVuaVRpbWUpIC0gZnJhY3QodmFyVVYueSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWYgKGRpc3QgPCAwLjApIGRpc3QgKz0gMS4wO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRpc3QgPSAxLjAgLyAoNi4wICogZGlzdCk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3IucmdiICo9IGRpc3QgKiAoZ2xfRnJvbnRGYWNpbmcgPyAxLjAgOiAwLjE1KTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvci5yZ2IgKj0gdGV4dHVyZSh1bmlUZXh0dXJlRHVzdCwgdmFyVVYpLnI7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gY29sb3I7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWYgKCFnbF9Gcm9udEZhY2luZykgcmV0dXJuO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZlYzMgTiA9IG5vcm1hbGl6ZSh2YXJOb3JtYWwpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZlYzMgViA9IG5vcm1hbGl6ZSh1bmlDYW1lcmFQb3NpdGlvbiAtIHZhclBvc2l0aW9uLnh5eik7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMyBSID0gcmVmbGVjdCgtViwgTik7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMyBzcGVjdWxhciA9IHRleHR1cmVMb2QodW5pVGV4dHVyZVNreWJveCwgUiwgMC4wKS5yZ2I7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3BlY3VsYXIgPSBwb3coc3BlY3VsYXIsIHZlYzMoNS4wKSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yLnJnYiArPSBzcGVjdWxhciAqIC41O1wiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycy5kZWxldGUoKVxuICAgICAgICB0aGlzLnByb2dyYW0uZGVsZXRlKClcbiAgICB9XG5cbiAgICBwYWludCh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51bmlmb3JtQmxvY2sudmFsdWVzLnVuaVRpbWUgPSB0aW1lXG4gICAgICAgIHRoaXMucHJvZ3JhbS5wYWludCh0aW1lLCBkZWx0YSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRDYW52YXMoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXNcbiAgICAgICAgY29uc3QgdGV4dCA9IFwiTG9hZGluZy4uLlwiXG4gICAgICAgIGN0eC5mb250ID0gYGJvbGQgJHt3aWR0aCAvIDd9cHggbW9ub3NwYWNlYFxuICAgICAgICBjb25zdCBtZWFzdXJlID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMzZTNcIlxuICAgICAgICBjb25zdCBoID0gaGVpZ2h0IC8gNVxuICAgICAgICBjb25zdCB4ID0gKHdpZHRoIC0gbWVhc3VyZS53aWR0aCkgLyAyXG4gICAgICAgIGZvciAobGV0IHkgPSBoOyB5IDwgaGVpZ2h0OyB5ICs9IGgpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMubG9hZEJpdG1hcChjYW52YXMpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRm9udChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICB0Z2RMb2FkRm9udChcIkZ1emFyXCIsIEZ1emFyRm9udFVSTCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhc1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSB3aWR0aCAvIDhcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IGZvbnRTaXplIC8gM1xuICAgICAgICAgICAgY3R4LmZvbnQgPSBgaXRhbGljICR7Zm9udFNpemV9cHggRnV6YXJgXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjM2UzXCJcbiAgICAgICAgICAgIGxldCB4ID0gbWFyZ2luXG4gICAgICAgICAgICBsZXQgeSA9IGZvbnRTaXplICogM1xuICAgICAgICAgICAgbGV0IGJvbGQgPSBmYWxzZVxuICAgICAgICAgICAgbGV0IGl0YWxpYyA9IGZhbHNlXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gYCpGdXphciBpcyB0aGUgYmVzdCBmb250IGV2ZXIgbWFkZSBpbiB0aGlzIHdvcmxkIG9mIG1hZG5lc3MuIEl0IHdhcyBlbmdpbmVlcmVkIGJ5IGFuIHVua25vd24gX2dlbml1cyBoaWRkZW4gaW4gYSBzd2lzcyBjaXR5IGNhbGxlZCBHZW5ldmEuIFwiMDEyMzQ1Njc4OVwiYFxuICAgICAgICAgICAgZm9yIChjb25zdCB3b3JkIG9mIHRleHQuc3BsaXQoXCIgXCIpKSB7XG4gICAgICAgICAgICAgICAgaXRhbGljID0gZmFsc2VcbiAgICAgICAgICAgICAgICBib2xkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBpZiAod29yZC5zdGFydHNXaXRoKFwiX1wiKSkgaXRhbGljID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmICh3b3JkLnN0YXJ0c1dpdGgoXCIqXCIpKSBpdGFsaWMgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuV29yZCA9IHJlbW92ZVN0eWxlKHdvcmQpXG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtib2xkID8gXCJib2xkIFwiIDogXCJcIn0ke2l0YWxpYyA/IFwiaXRhbGljIFwiIDogXCJcIn0gJHtmb250U2l6ZX1weCBGdXphcmBcbiAgICAgICAgICAgICAgICBjb25zdCBtZWFzdXJlID0gY3R4Lm1lYXN1cmVUZXh0KGAke2NsZWFuV29yZH0gYClcbiAgICAgICAgICAgICAgICBpZiAoeCA+IHdpZHRoIC0gbWVhc3VyZS53aWR0aCAtIDIgKiBtYXJnaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IG1hcmdpblxuICAgICAgICAgICAgICAgICAgICB5ICs9IGZvbnRTaXplXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChjbGVhbldvcmQsIHgsIHkpXG4gICAgICAgICAgICAgICAgeCArPSBtZWFzdXJlLndpZHRoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC41XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiM1ZjU3XCJcbiAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgaGVpZ2h0OyBoICs9IGZvbnRTaXplIC8gOCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGgpICsgMC41XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCB5KVxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGgsIHkpXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzLmxvYWRCaXRtYXAoY2FudmFzKVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnBhaW50KClcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlKHdvcmQ6IHN0cmluZykge1xuICAgIHdoaWxlIChcIipfXCIuaW5jbHVkZXMod29yZC5jaGFyQXQoMCkpKSB3b3JkID0gd29yZC5zbGljZSgxKVxuICAgIHJldHVybiB3b3JkXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbi8vIGltcG9ydCBcInByaXNtanMvdGhlbWVzL3ByaXNtLWNveS5jc3NcIlxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL0NvZGVWaWV3ZXIubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UgfSBmcm9tIFwiLi9ncmFtbWFyXCJcblxuZXhwb3J0IGludGVyZmFjZSBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICBpZD86IHN0cmluZ1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgbGFuZ3VhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlVmlld2VyVmlldyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBzaW5nbGVQcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxTaW5nbGVDb2RlVmlld2VyVmlldyB7Li4uc2luZ2xlUHJvcHN9IC8+XG4gICAgfVxuICAgIGNvbnN0IG11bHRpUHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIHZhbHVlLFxuICAgIH1cbiAgICByZXR1cm4gPE11bHRpQ29kZVZpZXdlclZpZXcgey4uLm11bHRpUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gU2luZ2xlQ29kZVZpZXdlclZpZXcocHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCByZWZUaW1lb3V0ID0gUmVhY3QudXNlUmVmKDApXG4gICAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByZWZDb2RlID0gUmVhY3QudXNlUmVmPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbClcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcmVmQ29kZS5jdXJyZW50XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBodG1sID0gUHJpc20uaGlnaGxpZ2h0KHByb3BzLnZhbHVlLCBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UocHJvcHMubGFuZ3VhZ2UpLCBwcm9wcy5sYW5ndWFnZSlcbiAgICAgICAgICAgIGNvZGUuaW5uZXJIVE1MID0gaHRtbFxuICAgICAgICB9LCAxMDApXG4gICAgfSwgW3Byb3BzLnZhbHVlLCBwcm9wcy5sYW5ndWFnZSwgcmVmQ29kZS5jdXJyZW50XSlcbiAgICBjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocHJvcHMudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0UG9wdXAodHJ1ZSlcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0UG9wdXAoZmFsc2UpLCA3MDAwKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVQb3B1cENsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRQb3B1cChmYWxzZSlcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IDBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzTmFtZXMocHJvcHMpfSBvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja30gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgcmVmPXtyZWZDb2RlfSBjbGFzc05hbWU9e2BsYW5ndWFnZS0ke3Byb3BzLmxhbmd1YWdlfWB9IC8+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIHtwb3B1cCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlLnBvcHVwfSBvbkNsaWNrPXtoYW5kbGVQb3B1cENsaWNrfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBjb2RlIGhhcyBiZWVuIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWVzKHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW1N0eWxlLkNvZGVWaWV3ZXJdXG4gICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHByb3BzLmNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmZ1bmN0aW9uIE11bHRpQ29kZVZpZXdlclZpZXcocHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IGNhcHRpb25zID0gT2JqZWN0LmtleXMocHJvcHMudmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtjYXB0aW9ucy5tYXAoKGNhcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRldGFpbHMga2V5PXtjYXB0aW9ufSBvcGVuPXtmYWxzZX0gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+e2NhcHRpb259PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQ29kZVZpZXdlclZpZXcgdmFsdWU9e3Byb3BzLnZhbHVlW2NhcHRpb25dfSBsYW5ndWFnZT17cHJvcHMubGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdsc2xcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhbW1hckZvckxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiBQcmlzbS5HcmFtbWFyIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgXCJ0c1wiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0XG4gICAgICAgIGNhc2UgXCJ0c3hcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHN4XG4gICAgICAgIGNhc2UgXCJmcmFnXCI6XG4gICAgICAgIGNhc2UgXCJ2ZXJ0XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLmdsc2xcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBHTFNMXG4gICAgfVxufVxuXG5jb25zdCBUWVBFUyA9IFtcbiAgICBcImJ2ZWMyXCIsXG4gICAgXCJidmVjM1wiLFxuICAgIFwiYnZlYzRcIixcbiAgICBcImRtYXQyXCIsXG4gICAgXCJkbWF0MngyXCIsXG4gICAgXCJkbWF0MngzXCIsXG4gICAgXCJkbWF0Mng0XCIsXG4gICAgXCJkbWF0M1wiLFxuICAgIFwiZG1hdDN4MlwiLFxuICAgIFwiZG1hdDN4M1wiLFxuICAgIFwiZG1hdDN4NFwiLFxuICAgIFwiZG1hdDRcIixcbiAgICBcImRtYXQ0eDJcIixcbiAgICBcImRtYXQ0eDNcIixcbiAgICBcImRtYXQ0eDRcIixcbiAgICBcImR2ZWMyXCIsXG4gICAgXCJkdmVjM1wiLFxuICAgIFwiZHZlYzRcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJmdmVjMlwiLFxuICAgIFwiZnZlYzNcIixcbiAgICBcImZ2ZWM0XCIsXG4gICAgXCJpc2FtcGxlcjFEXCIsXG4gICAgXCJpc2FtcGxlcjFEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRcIixcbiAgICBcImlzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRE1TXCIsXG4gICAgXCJpc2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFJlY3RcIixcbiAgICBcImlzYW1wbGVyM0RcIixcbiAgICBcImlzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJpc2FtcGxlckN1YmVcIixcbiAgICBcImlzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJpdmVjMlwiLFxuICAgIFwiaXZlYzNcIixcbiAgICBcIml2ZWM0XCIsXG4gICAgXCJtYXQyXCIsXG4gICAgXCJtYXQyeDJcIixcbiAgICBcIm1hdDJ4M1wiLFxuICAgIFwibWF0Mng0XCIsXG4gICAgXCJtYXQzXCIsXG4gICAgXCJtYXQzeDJcIixcbiAgICBcIm1hdDN4M1wiLFxuICAgIFwibWF0M3g0XCIsXG4gICAgXCJtYXQ0XCIsXG4gICAgXCJtYXQ0eDJcIixcbiAgICBcIm1hdDR4M1wiLFxuICAgIFwibWF0NHg0XCIsXG4gICAgXCJzYW1wbGVcIixcbiAgICBcInNhbXBsZXIxRFwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInNhbXBsZXIxREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMURTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInNhbXBsZXIyREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRNU1wiLFxuICAgIFwic2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyM0RcIixcbiAgICBcInNhbXBsZXJCdWZmZXJcIixcbiAgICBcInNhbXBsZXJDdWJlXCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyQ3ViZVNoYWRvd1wiLFxuICAgIFwidXNhbXBsZXIxRFwiLFxuICAgIFwidXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEXCIsXG4gICAgXCJ1c2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRNU1wiLFxuICAgIFwidXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJ1c2FtcGxlcjNEXCIsXG4gICAgXCJ1c2FtcGxlckJ1ZmZlclwiLFxuICAgIFwidXNhbXBsZXJDdWJlXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwidXZlYzJcIixcbiAgICBcInV2ZWMzXCIsXG4gICAgXCJ1dmVjNFwiLFxuICAgIFwidmVjMlwiLFxuICAgIFwidmVjM1wiLFxuICAgIFwidmVjNFwiLFxuICAgIFwidm9pZFwiLFxuXVxuXG5jb25zdCBLRVlXT1JEUyA9IFtcbiAgICBcImNlbnRyb2lkXCIsXG4gICAgXCJjb25zdFwiLFxuICAgIFwiZGlzY2FyZFwiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwiZmxhdFwiLFxuICAgIFwiaGlnaHBcIixcbiAgICBcImlmXCIsXG4gICAgXCJpblwiLFxuICAgIFwiaW5vdXRcIixcbiAgICBcImludmFyaWFudFwiLFxuICAgIFwibGF5b3V0XCIsXG4gICAgXCJsb3dwXCIsXG4gICAgXCJtZWRpdW1wXCIsXG4gICAgXCJub3BlcnNwZWN0aXZlXCIsXG4gICAgXCJvdXRcIixcbiAgICBcInBhdGNoXCIsXG4gICAgXCJwcmVjaXNpb25cIixcbiAgICBcInNtb290aFwiLFxuICAgIFwic3Vicm91dGluZVwiLFxuICAgIFwidW5pZm9ybVwiLFxuICAgIC8vIFJlc2VydmVkIGZvciBmdXR1cmUuXG4gICAgXCJhY3RpdmVcIixcbiAgICBcImFzbVwiLFxuICAgIFwiY2FzdFwiLFxuICAgIFwiY2xhc3NcIixcbiAgICBcImNvbW1vblwiLFxuICAgIFwiZW51bVwiLFxuICAgIFwiZXh0ZXJuXCIsXG4gICAgXCJleHRlcm5hbFwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJmaXhlZFwiLFxuICAgIFwiZ290b1wiLFxuICAgIFwiaGFsZlwiLFxuICAgIFwiaHZlYzJcIixcbiAgICBcImh2ZWMzXCIsXG4gICAgXCJodmVjNFwiLFxuICAgIFwiaWltYWdlMURcIixcbiAgICBcImlpbWFnZTFEQXJyYXlcIixcbiAgICBcImlpbWFnZTJEXCIsXG4gICAgXCJpaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpaW1hZ2UzRFwiLFxuICAgIFwiaWltYWdlQnVmZmVyXCIsXG4gICAgXCJpaW1hZ2VDdWJlXCIsXG4gICAgXCJpbWFnZTFEXCIsXG4gICAgXCJpbWFnZTFEQXJyYXlcIixcbiAgICBcImltYWdlMURBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UxRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFwiLFxuICAgIFwiaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpbWFnZTJEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMkRTaGFkb3dcIixcbiAgICBcImltYWdlM0RcIixcbiAgICBcImltYWdlQnVmZmVyXCIsXG4gICAgXCJpbWFnZUN1YmVcIixcbiAgICBcImlubGluZVwiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwibG9uZ1wiLFxuICAgIFwibmFtZXNwYWNlXCIsXG4gICAgXCJub2lubGluZVwiLFxuICAgIFwib3V0cHV0XCIsXG4gICAgXCJwYWNrZWRcIixcbiAgICBcInBhcnRpdGlvblwiLFxuICAgIFwicHVibGljXCIsXG4gICAgXCJyb3dfbWFqb3JcIixcbiAgICBcInNhbXBsZXIzRFJlY3RcIixcbiAgICBcInNob3J0XCIsXG4gICAgXCJzaXplb2ZcIixcbiAgICBcInN0YXRpY1wiLFxuICAgIFwic3VwZXJwXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGhpc1wiLFxuICAgIFwidHlwZWRlZlwiLFxuICAgIFwidWltYWdlMURcIixcbiAgICBcInVpbWFnZTFEQXJyYXlcIixcbiAgICBcInVpbWFnZTJEXCIsXG4gICAgXCJ1aW1hZ2UyREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UzRFwiLFxuICAgIFwidWltYWdlQnVmZmVyXCIsXG4gICAgXCJ1aW1hZ2VDdWJlXCIsXG4gICAgXCJ1bmlvblwiLFxuICAgIFwidW5zaWduZWRcIixcbiAgICBcInVzaW5nXCIsXG4gICAgXCJ2b2xhdGlsZVwiLFxuXVxuXG5jb25zdCBHTE9CQUxTID0gW1xuICAgIFwiZ2xfRGVwdGhSYW5nZVwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5kaWZmXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmZhclwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5uZWFyXCIsXG4gICAgXCJnbF9GcmFnQ29vcmRcIixcbiAgICBcImdsX0ZyYWdEZXB0aFwiLFxuICAgIFwiZ2xfRnJvbnRGYWNpbmdcIixcbiAgICBcImdsX0luc3RhbmNlSURcIixcbiAgICBcImdsX1BvaW50Q29vcmRcIixcbiAgICBcImdsX1BvaW50U2l6ZVwiLFxuICAgIFwiZ2xfUG9zaXRpb25cIixcbiAgICBcImdsX1ZlcnRleElEXCIsXG5dXG5cbmNvbnN0IEZVTkNUSU9OUyA9IFtcbiAgICBcImFic1wiLFxuICAgIFwiYWNvc1wiLFxuICAgIFwiYWNvc2hcIixcbiAgICBcImFsbFwiLFxuICAgIFwiYW55XCIsXG4gICAgXCJhc2luXCIsXG4gICAgXCJhc2luaFwiLFxuICAgIFwiYXRhblwiLFxuICAgIFwiYXRhbmhcIixcbiAgICBcImNlaWxcIixcbiAgICBcImNsYW1wXCIsXG4gICAgXCJjb3NcIixcbiAgICBcImNvc2hcIixcbiAgICBcImNyb3NzXCIsXG4gICAgXCJkZWdyZWVzXCIsXG4gICAgXCJkZXRlcm1pbmFudFwiLFxuICAgIFwiZEZkeFwiLFxuICAgIFwiZEZkeVwiLFxuICAgIFwiZGlzdGFuY2VcIixcbiAgICBcImRvdFwiLFxuICAgIFwiZXF1YWxcIixcbiAgICBcImV4cFwiLFxuICAgIFwiZXhwMlwiLFxuICAgIFwiZmFjZWZvcndhcmRcIixcbiAgICBcImZsb2F0Qml0c1RvSW50XCIsXG4gICAgXCJmbG9hdEJpdHNUb1VpbnRcIixcbiAgICBcImZsb29yXCIsXG4gICAgXCJmcmFjdFwiLFxuICAgIFwiZndpZHRoXCIsXG4gICAgXCJncmVhdGVyVGhhblwiLFxuICAgIFwiZ3JlYXRlclRoYW5FcXVhbFwiLFxuICAgIFwiaW50Qml0c1RvRmxvYXRcIixcbiAgICBcImludmVyc2VcIixcbiAgICBcImludmVyc2VzcXJ0XCIsXG4gICAgXCJpc2luZlwiLFxuICAgIFwiaXNuYW5cIixcbiAgICBcImxlbmd0aFwiLFxuICAgIFwibGVzc1RoYW5cIixcbiAgICBcImxlc3NUaGFuRXF1YWxcIixcbiAgICBcImxvZ1wiLFxuICAgIFwibG9nMlwiLFxuICAgIFwibWF0cml4Q29tcE11bHRcIixcbiAgICBcIm1heFwiLFxuICAgIFwibWluXCIsXG4gICAgXCJtaXhcIixcbiAgICBcIm1vZFwiLFxuICAgIFwibW9kZlwiLFxuICAgIFwibm9ybWFsaXplXCIsXG4gICAgXCJub3RcIixcbiAgICBcIm5vdEVxdWFsXCIsXG4gICAgXCJvdXRlclByb2R1Y3RcIixcbiAgICBcInBhY2tIYWxmMngxNlwiLFxuICAgIFwicGFja1Nub3JtMngxNlwiLFxuICAgIFwicGFja1Vub3JtMngxNlwiLFxuICAgIFwicG93XCIsXG4gICAgXCJyYWRpYW5zXCIsXG4gICAgXCJyZWZsZWN0XCIsXG4gICAgXCJyZWZyYWN0XCIsXG4gICAgXCJyb3VuZFwiLFxuICAgIFwicm91bmRFdmVuXCIsXG4gICAgXCJzaWduXCIsXG4gICAgXCJzaW5cIixcbiAgICBcInNpbmhcIixcbiAgICBcInNtb290aHN0ZXBcIixcbiAgICBcInNxcnRcIixcbiAgICBcInN0ZXBcIixcbiAgICBcInRhblwiLFxuICAgIFwidGFuaFwiLFxuICAgIFwidGV4ZWxGZXRjaFwiLFxuICAgIFwidGV4ZWxGZXRjaE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVwiLFxuICAgIFwidGV4dHVyZUdyYWRcIixcbiAgICBcInRleHR1cmVHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlTG9kXCIsXG4gICAgXCJ0ZXh0dXJlTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvalwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qTG9kXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pPZmZzZXRcIixcbiAgICBcInRleHR1cmVTaXplXCIsXG4gICAgXCJ0cmFuc3Bvc2VcIixcbiAgICBcInRydW5jXCIsXG4gICAgXCJ1aW50Qml0c1RvRmxvYXRcIixcbiAgICBcInVucGFja0hhbGYyeDE2XCIsXG4gICAgXCJ1bnBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInVucGFja1Vub3JtMngxNlwiLFxuXVxuXG5jb25zdCBHTFNMOiBQcmlzbS5HcmFtbWFyID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXiMuKyQvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAvKF58W15cXHckXSkoPzpOYU58SW5maW5pdHl8MFtiQl1bMDFdKyg/Ol9bMDFdKykqbj98MFtvT11bMC03XSsoPzpfWzAtN10rKSpuP3wwW3hYXVtcXGRBLUZhLWZdKyg/Ol9bXFxkQS1GYS1mXSspKm4/fFxcZCsoPzpfXFxkKykqbnwoPzpcXGQrKD86X1xcZCspKig/OlxcLig/OlxcZCsoPzpfXFxkKykqKT8pP3xcXC5cXGQrKD86X1xcZCspKikoPzpbRWVdWystXT9cXGQrKD86X1xcZCspKik/KSg/IVtcXHckXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIH0sXG4gICAgdHlwZTogbWFrZUlkZW50aWZpZXJzUlgoVFlQRVMpLFxuICAgIGtleXdvcmQ6IG1ha2VJZGVudGlmaWVyc1JYKEtFWVdPUkRTKSxcbiAgICBnbG9iYWw6IG1ha2VJZGVudGlmaWVyc1JYKEdMT0JBTFMpLFxuICAgIGZ1bmN0aW9uOiBtYWtlSWRlbnRpZmllcnNSWChGVU5DVElPTlMpLFxufVxuXG5mdW5jdGlvbiBtYWtlSWRlbnRpZmllcnNSWCh3b3Jkczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAoPzpbXmEtekEtWjAtOV9dKSgke3dvcmRzLmpvaW4oXCJ8XCIpfSkoPz1bXmEtekEtWjAtOV9dKWApLFxuICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Db2RlVmlld2VyXCJcbiIsIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLDBKQUEwSixFOzs7Ozs7Ozs7Ozs7Ozs7QUNFako7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixNQUFNLEtBQUssR0FBRyxFQUFDLFdBQVcsRUFBQyw4N0ZBQTg3RixFQUFDO0FBQzE5RixNQUFNLElBQUksR0FBRyxzaEhBQXNoSDtBQUVwaEgsU0FBUyxhQUFhO0lBQ2pDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcseUNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDN0MsT0FBTyxzR0FDSCxvREFBSyxTQUFTLEVBQUMsV0FBVyxZQUFDLDJDQUFDLHNDQUFJLEtBQUcsR0FBTSxFQUN6QyxxREFBSyxTQUFTLEVBQUMsWUFBWSxhQUN2Qiw4REFDSSwyQ0FBQyx5Q0FBVSxJQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUN2RCxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FDckMsR0FDWCxFQUNOLDJDQUFDLHVEQUFVLElBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBSSxJQUN2RCxJQUNQO0FBQ1AsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2hCc0I7QUFFaUI7QUFHeEMsU0FBUyxJQUFJLENBQUMsT0FBbUI7SUFDN0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUU7SUFDcEMsTUFBTSxLQUFLLEdB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