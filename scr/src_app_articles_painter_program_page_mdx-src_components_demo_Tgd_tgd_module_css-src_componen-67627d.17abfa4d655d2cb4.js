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





const FOCUS = { "Detail #1": "    context.camera.transfo.setPosition(0, 2, 0)\n    context.camera.fitSpaceAtTarget(9, 7)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const imageLetters = assets.image.letters\n    const imageDust = assets.image.dust\n    const cameraSkybox = context.camera.clone()\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.imagePosX,\n        imagePosY: assets.image.imagePosY,\n        imagePosZ: assets.image.imagePosZ,\n        imageNegX: assets.image.imageNegX,\n        imageNegY: assets.image.imageNegY,\n        imageNegZ: assets.image.imageNegZ,\n    })\n    const painterSkybox = new TgdPainterSkybox(context, {\n        tint: [0.4, 0.4, 0.4, 1],\n        camera: cameraSkybox,\n        texture: skybox,\n    })\n    const painterScreen = new PainterScreen(context, {\n        uniformCamera,\n        imageLetters,\n        imageDust,\n        assetScreen: assets.glb.screen,\n        skybox,\n    })\n    const geometry = assets.glb.screen.makeGeometry({\n        meshIndex: \"Mesh\",\n    })\n    const material = new TgdMaterialGlobal({\n        ambientColor: skybox,\n    })\n    const foot = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    context.add(\n        painterSkybox,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            children: [clear, foot, painterScreen],\n        }),\n        (time) => {\n            const angX = Math.abs(10 * Math.sin(time * 0.341))\n            const angY = 30 * Math.sin(time * 0.5)\n            context.camera.transfo.setEulerRotation(angX, angY, 0)\n            cameraSkybox.zoom = 0.3\n            cameraSkybox.transfo.setEulerRotation(angX, angY + 160, 0)\n        },\n    )\n    context.play()" };
const FULL = "import {\n    tgdCanvasCreateWithContext2D,\n    type TgdContext,\n    TgdDataGlb,\n    tgdLoadFont,\n    TgdMaterialGlobal,\n    TgdPainter,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterProgram,\n    TgdPainterSkybox,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdTextureCube,\n    TgdUniformBufferObject,\n    TgdUniformBufferObjectCamera,\n    WebglImage,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport ScreenURL from \"./screen.glb\"\nimport DustURL from \"./dust.webp\"\nimport FuzarFontURL from \"./Fuzar_GX.woff2\"\nimport imagePosX from \"@/assets/cubemap/1024/electric-board/posX.webp\" // +X\nimport imagePosY from \"@/assets/cubemap/1024/electric-board/posY.webp\" // +Y\nimport imagePosZ from \"@/assets/cubemap/1024/electric-board/posZ.webp\" // +Z\nimport imageNegX from \"@/assets/cubemap/1024/electric-board/negX.webp\" // -X\nimport imageNegY from \"@/assets/cubemap/1024/electric-board/negY.webp\" // -Y\nimport imageNegZ from \"@/assets/cubemap/1024/electric-board/negZ.webp\" // -Z\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.setPosition(0, 2, 0)\n    context.camera.fitSpaceAtTarget(9, 7)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const imageLetters = assets.image.letters\n    const imageDust = assets.image.dust\n    const cameraSkybox = context.camera.clone()\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.imagePosX,\n        imagePosY: assets.image.imagePosY,\n        imagePosZ: assets.image.imagePosZ,\n        imageNegX: assets.image.imageNegX,\n        imageNegY: assets.image.imageNegY,\n        imageNegZ: assets.image.imageNegZ,\n    })\n    const painterSkybox = new TgdPainterSkybox(context, {\n        tint: [0.4, 0.4, 0.4, 1],\n        camera: cameraSkybox,\n        texture: skybox,\n    })\n    const painterScreen = new PainterScreen(context, {\n        uniformCamera,\n        imageLetters,\n        imageDust,\n        assetScreen: assets.glb.screen,\n        skybox,\n    })\n    const geometry = assets.glb.screen.makeGeometry({\n        meshIndex: \"Mesh\",\n    })\n    const material = new TgdMaterialGlobal({\n        ambientColor: skybox,\n    })\n    const foot = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    context.add(\n        painterSkybox,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            children: [clear, foot, painterScreen],\n        }),\n        (time) => {\n            const angX = Math.abs(10 * Math.sin(time * 0.341))\n            const angY = 30 * Math.sin(time * 0.5)\n            context.camera.transfo.setEulerRotation(angX, angY, 0)\n            cameraSkybox.zoom = 0.3\n            cameraSkybox.transfo.setEulerRotation(angX, angY + 160, 0)\n        },\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            assets={{\n                glb: { screen: ScreenURL },\n                image: { dust: DustURL, imagePosX, imagePosY, imagePosZ, imageNegX, imageNegY, imageNegZ },\n            }}\n        />\n    )\n}\n\ninterface PainterScreenOptions {\n    imageLetters: WebglImage\n    imageDust: WebglImage\n    uniformCamera: TgdUniformBufferObjectCamera\n    assetScreen: TgdDataGlb\n    skybox: TgdTextureCube\n}\n\nclass PainterScreen extends TgdPainter {\n    private readonly textureLetters: TgdTexture2D\n    private readonly textureDust: TgdTexture2D\n    private readonly program: TgdPainterProgram\n    private readonly uniformBlock: TgdUniformBufferObject<\"uniTime\">\n\n    constructor(\n        public readonly context: TgdContext,\n        { uniformCamera, imageDust, assetScreen, skybox }: PainterScreenOptions,\n    ) {\n        super()\n        const W = 3\n        const H = 2\n        const elements = assetScreen.getMeshPrimitiveIndices(\"Screen\")\n        const dataset = assetScreen.makeDataset({\n            meshIndex: \"Screen\",\n        })\n        dataset.debug()\n        const uniformBlock = new TgdUniformBufferObject(context, {\n            uniforms: {\n                uniTime: \"float\",\n            },\n        })\n        this.uniformBlock = uniformBlock\n        this.textureLetters = new TgdTexture2D(context, {\n            params: {\n                magFilter: \"LINEAR\",\n                minFilter: \"LINEAR\",\n                wrapR: \"REPEAT\",\n                wrapS: \"REPEAT\",\n                wrapT: \"REPEAT\",\n            },\n        })\n        const scale = 512\n        const { ctx, canvas } = tgdCanvasCreateWithContext2D(W * scale, H * scale * 2)\n        this.initCanvas(canvas, ctx)\n        this.loadFont(canvas, ctx)\n        this.textureDust = new TgdTexture2D(context).loadBitmap(imageDust)\n        this.program = new TgdPainterProgram(context, {\n            drawMode: \"TRIANGLES\",\n            state: {\n                blend: \"add\",\n                cull: \"off\",\n            },\n            uniforms: { uniformCamera, uniformBlock },\n            dataset,\n            elements,\n            textures: {\n                uniTextureLetters: this.textureLetters,\n                uniTextureDust: this.textureDust,\n                uniTextureSkybox: skybox,\n            },\n            varying: {\n                varUV: \"vec2\",\n                varNormal: \"vec3\",\n                varPosition: \"vec4\",\n            },\n            vert: {\n                mainCode: [\n                    \"varNormal = NORMAL;\",\n                    \"varUV = TEXCOORD_0;\",\n                    \"varPosition = vec4(POSITION, 1.0);\",\n                    \"gl_Position = uniProjectionMatrix * uniModelViewMatrix * varPosition;\",\n                ],\n            },\n            frag: {\n                mainCode: [\n                    \"vec4 color = texture(uniTextureLetters, vec2(1.0, .5) * varUV + vec2(0, 0.05 * uniTime));\",\n                    \"float dist = fract(uniTime) - fract(varUV.y);\",\n                    \"if (dist < 0.0) dist += 1.0;\",\n                    \"dist = 1.0 / (6.0 * dist);\",\n                    \"color.rgb *= dist * (gl_FrontFacing ? 1.0 : 0.15);\",\n                    \"color.rgb *= texture(uniTextureDust, varUV).r;\",\n                    \"FragColor = color;\",\n                    \"if (!gl_FrontFacing) return;\",\n                    \"vec3 N = normalize(varNormal);\",\n                    \"vec3 V = normalize(uniCameraPosition - varPosition.xyz);\",\n                    \"vec3 R = reflect(-V, N);\",\n                    \"vec3 specular = textureLod(uniTextureSkybox, R, 0.0).rgb;\",\n                    \"specular = pow(specular, vec3(5.0));\",\n                    \"FragColor.rgb += specular * .5;\",\n                ],\n            },\n        })\n    }\n\n    delete() {\n        this.textureLetters.delete()\n        this.program.delete()\n    }\n\n    paint(time: number, delta: number) {\n        this.uniformBlock.values.uniTime = time\n        this.program.paint(time, delta)\n    }\n\n    private initCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {\n        const { width, height } = canvas\n        const text = \"Loading...\"\n        ctx.font = `bold ${width / 7}px monospace`\n        const measure = ctx.measureText(text)\n        ctx.fillStyle = \"#3e3\"\n        const h = height / 5\n        const x = (width - measure.width) / 2\n        for (let y = h; y < height; y += h) {\n            ctx.fillText(text, x, y)\n        }\n        this.textureLetters.loadBitmap(canvas)\n    }\n\n    private loadFont(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {\n        tgdLoadFont(\"Fuzar\", FuzarFontURL).then(() => {\n            const { width, height } = canvas\n            ctx.clearRect(0, 0, width, height)\n            const fontSize = width / 8\n            const margin = fontSize / 3\n            ctx.font = `italic ${fontSize}px Fuzar`\n            ctx.fillStyle = \"#3e3\"\n            let x = margin\n            let y = fontSize * 3\n            let bold = false\n            let italic = false\n            const text = `*Fuzar is the best font ever made in this world of madness. It was engineered by an unknown _genius hidden in a swiss city called Geneva. \"0123456789\"`\n            for (const word of text.split(\" \")) {\n                italic = false\n                bold = false\n                if (word.startsWith(\"_\")) italic = true\n                if (word.startsWith(\"*\")) italic = false\n                const cleanWord = removeStyle(word)\n                ctx.font = `${bold ? \"bold \" : \"\"}${italic ? \"italic \" : \"\"} ${fontSize}px Fuzar`\n                const measure = ctx.measureText(`${cleanWord} `)\n                if (x > width - measure.width - 2 * margin) {\n                    x = margin\n                    y += fontSize\n                }\n                ctx.fillText(cleanWord, x, y)\n                x += measure.width\n            }\n            ctx.lineWidth = 0.5\n            ctx.strokeStyle = \"#5f57\"\n            for (let h = 0; h < height; h += fontSize / 8) {\n                const y = Math.floor(h) + 0.5\n                ctx.beginPath()\n                ctx.moveTo(0, y)\n                ctx.lineTo(width, y)\n                ctx.stroke()\n            }\n            this.textureLetters.loadBitmap(canvas)\n            this.context.paint()\n        })\n    }\n}\n\nfunction removeStyle(word: string) {\n    while (\"*_\".includes(word.charAt(0))) word = word.slice(1)\n    return word\n}\n";
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
    const skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.imagePosX,
        imagePosY: assets.image.imagePosY,
        imagePosZ: assets.image.imagePosZ,
        imageNegX: assets.image.imageNegX,
        imageNegY: assets.image.imageNegY,
        imageNegZ: assets.image.imageNegZ,
    });
    const painterSkybox = new _tolokoban_tgd__rspack_import_1.TgdPainterSkybox(context, {
        tint: [0.4, 0.4, 0.4, 1],
        camera: cameraSkybox,
        texture: skybox,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wcm9ncmFtX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fVGdkX3RnZF9tb2R1bGVfY3NzLXNyY19jb21wb25lbi02NzYyN2QuMTdhYmZhNGQ2NTVkMmNiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3Byb2dyYW0vXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3Byb2dyYW0vXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wcm9ncmFtL18vbWF0cml4LmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3Byb2dyYW0vXy9tYXRyaXguZGVtby9tYXRyaXguZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wcm9ncmFtL3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxMFxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLCAwLCAwLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlNb2RlbFZpZXdNYXRyaXg6IFxcXCJtYXQ0XFxcIixcXG4gICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4OiBcXFwibWF0NFxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlmb3JtUGl4ZWxzID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlQaXhlbHM6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHVuaVBpeGVscyA9IG5ldyBUZ2RWZWMyKClcXG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyUHJvZ3JhbShjb250ZXh0LCB7XFxuICAgICAgICBkcmF3TW9kZTogXFxcIlRSSUFOR0xFX1NUUklQXFxcIixcXG4gICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYSxcXG4gICAgICAgICAgICB1bmlmb3JtUGl4ZWxzLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHZhcnlpbmc6IHtcXG4gICAgICAgICAgICB2YXJDb2xvcjogXFxcInZlYzRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGRhdGFzZXQ6IFtcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgIGF0dHJpYnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGF0dFBvczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsrMSwgMCwgKzEsICsxLCAtMSwgMCwgLTEsICsxXSksXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICBkaXZpc29yOiAxLFxcbiAgICAgICAgICAgICAgICBhdHRyaWJzOiB7XFxuICAgICAgICAgICAgICAgICAgICBhdHRWZWM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwidmVjM1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV0pLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGF0dENvbDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJ2ZWMzXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLjIsIDAuMiwgMC4yLCAxLCAwLjIsIDAuMiwgMC4yLCAxXSksXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICBdLFxcbiAgICAgICAgdmVydDoge1xcbiAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgIFxcXCJ2YXJDb2xvciA9IHZlYzQoYXR0Q29sLCAxLjApO1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJ2ZWM0IHBvaW50ID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIHVuaU1vZGVsVmlld01hdHJpeCAqIHZlYzQoYXR0VmVjLCAxLjApO1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJ2ZWMyIHJhZGlhbCA9IG5vcm1hbGl6ZSh2ZWMyKC1wb2ludC55LCBwb2ludC54KSkgKiB1bmlQaXhlbHMgKiBwb2ludC53O1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJwb2ludC54eSAqPSBhdHRQb3MueTtcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwicG9pbnQueHkgKz0gcmFkaWFsICogYXR0UG9zLng7XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcImdsX1Bvc2l0aW9uID0gcG9pbnQ7XFxcIixcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZyYWc6IHtcXG4gICAgICAgICAgICBtYWluQ29kZTogW1xcXCJGcmFnQ29sb3IgPSB2YXJDb2xvcjtcXFwiXSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzdGF0ZToge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgYmxlbmQ6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG9uRGVsZXRlOiAoKSA9PiB7XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS5kZWxldGUoKVxcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMuZGVsZXRlKClcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgKCkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS52YWx1ZXMudW5pTW9kZWxWaWV3TWF0cml4ID0gY2FtZXJhLm1hdHJpeE1vZGVsVmlld1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudmFsdWVzLnVuaVByb2plY3Rpb25NYXRyaXggPSBjYW1lcmEubWF0cml4UHJvamVjdGlvblxcbiAgICAgICAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IDJcXG4gICAgICAgICAgICB1bmlQaXhlbHMueCA9IHRoaWNrbmVzcyAvIGNvbnRleHQud2lkdGhcXG4gICAgICAgICAgICB1bmlQaXhlbHMueSA9IHRoaWNrbmVzcyAvIGNvbnRleHQuaGVpZ2h0XFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscy52YWx1ZXMudW5pUGl4ZWxzID0gdW5pUGl4ZWxzXFxuICAgICAgICB9LFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBwYWludGVyLFxcbiAgICAgICAgLy8gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAvLyAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgIC8vICAgICBjaGlsZHJlbjogW25ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KV0sXFxuICAgICAgICAvLyB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgcGFpbnRlci5kZWJ1ZygpXFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyUHJvZ3JhbSxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0LFxcbiAgICBUZ2RWZWMyLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTBcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcXG4gICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgdW5pTW9kZWxWaWV3TWF0cml4OiBcXFwibWF0NFxcXCIsXFxuICAgICAgICAgICAgdW5pUHJvamVjdGlvbk1hdHJpeDogXFxcIm1hdDRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgdW5pZm9ybVBpeGVscyA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcXG4gICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgdW5pUGl4ZWxzOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlQaXhlbHMgPSBuZXcgVGdkVmVjMigpXFxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclByb2dyYW0oY29udGV4dCwge1xcbiAgICAgICAgZHJhd01vZGU6IFxcXCJUUklBTkdMRV9TVFJJUFxcXCIsXFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEsXFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscyxcXG4gICAgICAgIH0sXFxuICAgICAgICB2YXJ5aW5nOiB7XFxuICAgICAgICAgICAgdmFyQ29sb3I6IFxcXCJ2ZWM0XFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhc2V0OiBbXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICBhdHRyaWJzOiB7XFxuICAgICAgICAgICAgICAgICAgICBhdHRQb3M6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShbKzEsIDAsICsxLCArMSwgLTEsIDAsIC0xLCArMV0pLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgZGl2aXNvcjogMSxcXG4gICAgICAgICAgICAgICAgYXR0cmliczoge1xcbiAgICAgICAgICAgICAgICAgICAgYXR0VmVjOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcInZlYzNcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDFdKSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBhdHRDb2w6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwidmVjM1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShbMSwgMC4yLCAwLjIsIDAuMiwgMSwgMC4yLCAwLjIsIDAuMiwgMV0pLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgXSxcXG4gICAgICAgIHZlcnQ6IHtcXG4gICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICBcXFwidmFyQ29sb3IgPSB2ZWM0KGF0dENvbCwgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwidmVjNCBwb2ludCA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiB2ZWM0KGF0dFZlYywgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwidmVjMiByYWRpYWwgPSBub3JtYWxpemUodmVjMigtcG9pbnQueSwgcG9pbnQueCkpICogdW5pUGl4ZWxzICogcG9pbnQudztcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwicG9pbnQueHkgKj0gYXR0UG9zLnk7XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcInBvaW50Lnh5ICs9IHJhZGlhbCAqIGF0dFBvcy54O1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJnbF9Qb3NpdGlvbiA9IHBvaW50O1xcXCIsXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmcmFnOiB7XFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcXFwiRnJhZ0NvbG9yID0gdmFyQ29sb3I7XFxcIl0sXFxuICAgICAgICB9LFxcbiAgICAgICAgc3RhdGU6IHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGJsZW5kOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwib2ZmXFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBvbkRlbGV0ZTogKCkgPT4ge1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEuZGVsZXRlKClcXG4gICAgICAgICAgICB1bmlmb3JtUGl4ZWxzLmRlbGV0ZSgpXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgICgpID0+IHtcXG4gICAgICAgICAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudmFsdWVzLnVuaU1vZGVsVmlld01hdHJpeCA9IGNhbWVyYS5tYXRyaXhNb2RlbFZpZXdcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnZhbHVlcy51bmlQcm9qZWN0aW9uTWF0cml4ID0gY2FtZXJhLm1hdHJpeFByb2plY3Rpb25cXG4gICAgICAgICAgICBjb25zdCB0aGlja25lc3MgPSAyXFxuICAgICAgICAgICAgdW5pUGl4ZWxzLnggPSB0aGlja25lc3MgLyBjb250ZXh0LndpZHRoXFxuICAgICAgICAgICAgdW5pUGl4ZWxzLnkgPSB0aGlja25lc3MgLyBjb250ZXh0LmhlaWdodFxcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMudmFsdWVzLnVuaVBpeGVscyA9IHVuaVBpeGVsc1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgcGFpbnRlcixcXG4gICAgICAgIC8vIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgLy8gICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAvLyAgICAgY2hpbGRyZW46IFtuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCldLFxcbiAgICAgICAgLy8gfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIHBhaW50ZXIuZGVidWcoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgd2lkdGg9XFxcIjUxMnB4XFxcIlxcbiAgICAgICAgICAgIGhlaWdodD1cXFwiNTEycHhcXFwiXFxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJQcm9ncmFtLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0LFxuICAgIFRnZFZlYzIsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxMFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcbiAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgIHVuaU1vZGVsVmlld01hdHJpeDogXCJtYXQ0XCIsXG4gICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnN0IHVuaWZvcm1QaXhlbHMgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdChjb250ZXh0LCB7XG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICB1bmlQaXhlbHM6IFwidmVjMlwiLFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29uc3QgdW5pUGl4ZWxzID0gbmV3IFRnZFZlYzIoKVxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclByb2dyYW0oY29udGV4dCwge1xuICAgICAgICBkcmF3TW9kZTogXCJUUklBTkdMRV9TVFJJUFwiLFxuICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYSxcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMsXG4gICAgICAgIH0sXG4gICAgICAgIHZhcnlpbmc6IHtcbiAgICAgICAgICAgIHZhckNvbG9yOiBcInZlYzRcIixcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YXNldDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJpYnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYXR0UG9zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZlYzJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWysxLCAwLCArMSwgKzEsIC0xLCAwLCAtMSwgKzFdKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXZpc29yOiAxLFxuICAgICAgICAgICAgICAgIGF0dHJpYnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYXR0VmVjOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDFdKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0Q29sOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAuMiwgMC4yLCAwLjIsIDEsIDAuMiwgMC4yLCAwLjIsIDFdKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdmVydDoge1xuICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICBcInZhckNvbG9yID0gdmVjNChhdHRDb2wsIDEuMCk7XCIsXG4gICAgICAgICAgICAgICAgXCJ2ZWM0IHBvaW50ID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIHVuaU1vZGVsVmlld01hdHJpeCAqIHZlYzQoYXR0VmVjLCAxLjApO1wiLFxuICAgICAgICAgICAgICAgIFwidmVjMiByYWRpYWwgPSBub3JtYWxpemUodmVjMigtcG9pbnQueSwgcG9pbnQueCkpICogdW5pUGl4ZWxzICogcG9pbnQudztcIixcbiAgICAgICAgICAgICAgICBcInBvaW50Lnh5ICo9IGF0dFBvcy55O1wiLFxuICAgICAgICAgICAgICAgIFwicG9pbnQueHkgKz0gcmFkaWFsICogYXR0UG9zLng7XCIsXG4gICAgICAgICAgICAgICAgXCJnbF9Qb3NpdGlvbiA9IHBvaW50O1wiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZnJhZzoge1xuICAgICAgICAgICAgbWFpbkNvZGU6IFtcIkZyYWdDb2xvciA9IHZhckNvbG9yO1wiXSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgICAgIGJsZW5kOiBcIm9mZlwiLFxuICAgICAgICAgICAgY3VsbDogXCJvZmZcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25EZWxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEuZGVsZXRlKClcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMuZGVsZXRlKClcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS52YWx1ZXMudW5pTW9kZWxWaWV3TWF0cml4ID0gY2FtZXJhLm1hdHJpeE1vZGVsVmlld1xuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS52YWx1ZXMudW5pUHJvamVjdGlvbk1hdHJpeCA9IGNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uXG4gICAgICAgICAgICBjb25zdCB0aGlja25lc3MgPSAyXG4gICAgICAgICAgICB1bmlQaXhlbHMueCA9IHRoaWNrbmVzcyAvIGNvbnRleHQud2lkdGhcbiAgICAgICAgICAgIHVuaVBpeGVscy55ID0gdGhpY2tuZXNzIC8gY29udGV4dC5oZWlnaHRcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMudmFsdWVzLnVuaVBpeGVscyA9IHVuaVBpeGVsc1xuICAgICAgICB9LFxuICAgICAgICBjbGVhcixcbiAgICAgICAgcGFpbnRlcixcbiAgICAgICAgLy8gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIC8vICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgIC8vICAgICBjaGlsZHJlbjogW25ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KV0sXG4gICAgICAgIC8vIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICBwYWludGVyLmRlYnVnKClcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICB3aWR0aD1cIjUxMnB4XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjUxMnB4XCJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21hdHJpeC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDIsIDApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoOSwgNylcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcXG4gICAgY29uc3QgaW1hZ2VMZXR0ZXJzID0gYXNzZXRzLmltYWdlLmxldHRlcnNcXG4gICAgY29uc3QgaW1hZ2VEdXN0ID0gYXNzZXRzLmltYWdlLmR1c3RcXG4gICAgY29uc3QgY2FtZXJhU2t5Ym94ID0gY29udGV4dC5jYW1lcmEuY2xvbmUoKVxcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NYLFxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NaLFxcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdYLFxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdaLFxcbiAgICB9KVxcbiAgICBjb25zdCBwYWludGVyU2t5Ym94ID0gbmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xcbiAgICAgICAgdGludDogWzAuNCwgMC40LCAwLjQsIDFdLFxcbiAgICAgICAgY2FtZXJhOiBjYW1lcmFTa3lib3gsXFxuICAgICAgICB0ZXh0dXJlOiBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhaW50ZXJTY3JlZW4gPSBuZXcgUGFpbnRlclNjcmVlbihjb250ZXh0LCB7XFxuICAgICAgICB1bmlmb3JtQ2FtZXJhLFxcbiAgICAgICAgaW1hZ2VMZXR0ZXJzLFxcbiAgICAgICAgaW1hZ2VEdXN0LFxcbiAgICAgICAgYXNzZXRTY3JlZW46IGFzc2V0cy5nbGIuc2NyZWVuLFxcbiAgICAgICAgc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBnZW9tZXRyeSA9IGFzc2V0cy5nbGIuc2NyZWVuLm1ha2VHZW9tZXRyeSh7XFxuICAgICAgICBtZXNoSW5kZXg6IFxcXCJNZXNoXFxcIixcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xcbiAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IGZvb3QgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgZ2VvbWV0cnksXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBwYWludGVyU2t5Ym94LFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBmb290LCBwYWludGVyU2NyZWVuXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBjb25zdCBhbmdYID0gTWF0aC5hYnMoMTAgKiBNYXRoLnNpbih0aW1lICogMC4zNDEpKVxcbiAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSAzMCAqIE1hdGguc2luKHRpbWUgKiAwLjUpXFxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1ksIDApXFxuICAgICAgICAgICAgY2FtZXJhU2t5Ym94Lnpvb20gPSAwLjNcXG4gICAgICAgICAgICBjYW1lcmFTa3lib3gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1kgKyAxNjAsIDApXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJELFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZERhdGFHbGIsXFxuICAgIHRnZExvYWRGb250LFxcbiAgICBUZ2RNYXRlcmlhbEdsb2JhbCxcXG4gICAgVGdkUGFpbnRlcixcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclByb2dyYW0sXFxuICAgIFRnZFBhaW50ZXJTa3lib3gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdCxcXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcXG4gICAgV2ViZ2xJbWFnZSxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5pbXBvcnQgU2NyZWVuVVJMIGZyb20gXFxcIi4vc2NyZWVuLmdsYlxcXCJcXG5pbXBvcnQgRHVzdFVSTCBmcm9tIFxcXCIuL2R1c3Qud2VicFxcXCJcXG5pbXBvcnQgRnV6YXJGb250VVJMIGZyb20gXFxcIi4vRnV6YXJfR1gud29mZjJcXFwiXFxuaW1wb3J0IGltYWdlUG9zWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvcG9zWC53ZWJwXFxcIiAvLyArWFxcbmltcG9ydCBpbWFnZVBvc1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1kud2VicFxcXCIgLy8gK1lcXG5pbXBvcnQgaW1hZ2VQb3NaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NaLndlYnBcXFwiIC8vICtaXFxuaW1wb3J0IGltYWdlTmVnWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvbmVnWC53ZWJwXFxcIiAvLyAtWFxcbmltcG9ydCBpbWFnZU5lZ1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1kud2VicFxcXCIgLy8gLVlcXG5pbXBvcnQgaW1hZ2VOZWdaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdaLndlYnBcXFwiIC8vIC1aXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDIsIDApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoOSwgNylcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcXG4gICAgY29uc3QgaW1hZ2VMZXR0ZXJzID0gYXNzZXRzLmltYWdlLmxldHRlcnNcXG4gICAgY29uc3QgaW1hZ2VEdXN0ID0gYXNzZXRzLmltYWdlLmR1c3RcXG4gICAgY29uc3QgY2FtZXJhU2t5Ym94ID0gY29udGV4dC5jYW1lcmEuY2xvbmUoKVxcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NYLFxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NaLFxcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdYLFxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdaLFxcbiAgICB9KVxcbiAgICBjb25zdCBwYWludGVyU2t5Ym94ID0gbmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xcbiAgICAgICAgdGludDogWzAuNCwgMC40LCAwLjQsIDFdLFxcbiAgICAgICAgY2FtZXJhOiBjYW1lcmFTa3lib3gsXFxuICAgICAgICB0ZXh0dXJlOiBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhaW50ZXJTY3JlZW4gPSBuZXcgUGFpbnRlclNjcmVlbihjb250ZXh0LCB7XFxuICAgICAgICB1bmlmb3JtQ2FtZXJhLFxcbiAgICAgICAgaW1hZ2VMZXR0ZXJzLFxcbiAgICAgICAgaW1hZ2VEdXN0LFxcbiAgICAgICAgYXNzZXRTY3JlZW46IGFzc2V0cy5nbGIuc2NyZWVuLFxcbiAgICAgICAgc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBnZW9tZXRyeSA9IGFzc2V0cy5nbGIuc2NyZWVuLm1ha2VHZW9tZXRyeSh7XFxuICAgICAgICBtZXNoSW5kZXg6IFxcXCJNZXNoXFxcIixcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xcbiAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IGZvb3QgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgZ2VvbWV0cnksXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBwYWludGVyU2t5Ym94LFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBmb290LCBwYWludGVyU2NyZWVuXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBjb25zdCBhbmdYID0gTWF0aC5hYnMoMTAgKiBNYXRoLnNpbih0aW1lICogMC4zNDEpKVxcbiAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSAzMCAqIE1hdGguc2luKHRpbWUgKiAwLjUpXFxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1ksIDApXFxuICAgICAgICAgICAgY2FtZXJhU2t5Ym94Lnpvb20gPSAwLjNcXG4gICAgICAgICAgICBjYW1lcmFTa3lib3gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1kgKyAxNjAsIDApXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHsgc2NyZWVuOiBTY3JlZW5VUkwgfSxcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgZHVzdDogRHVzdFVSTCwgaW1hZ2VQb3NYLCBpbWFnZVBvc1ksIGltYWdlUG9zWiwgaW1hZ2VOZWdYLCBpbWFnZU5lZ1ksIGltYWdlTmVnWiB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmludGVyZmFjZSBQYWludGVyU2NyZWVuT3B0aW9ucyB7XFxuICAgIGltYWdlTGV0dGVyczogV2ViZ2xJbWFnZVxcbiAgICBpbWFnZUR1c3Q6IFdlYmdsSW1hZ2VcXG4gICAgdW5pZm9ybUNhbWVyYTogVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYVxcbiAgICBhc3NldFNjcmVlbjogVGdkRGF0YUdsYlxcbiAgICBza3lib3g6IFRnZFRleHR1cmVDdWJlXFxufVxcblxcbmNsYXNzIFBhaW50ZXJTY3JlZW4gZXh0ZW5kcyBUZ2RQYWludGVyIHtcXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlTGV0dGVyczogVGdkVGV4dHVyZTJEXFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZUR1c3Q6IFRnZFRleHR1cmUyRFxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb2dyYW06IFRnZFBhaW50ZXJQcm9ncmFtXFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdW5pZm9ybUJsb2NrOiBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0PFxcXCJ1bmlUaW1lXFxcIj5cXG5cXG4gICAgY29uc3RydWN0b3IoXFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcXG4gICAgICAgIHsgdW5pZm9ybUNhbWVyYSwgaW1hZ2VEdXN0LCBhc3NldFNjcmVlbiwgc2t5Ym94IH06IFBhaW50ZXJTY3JlZW5PcHRpb25zLFxcbiAgICApIHtcXG4gICAgICAgIHN1cGVyKClcXG4gICAgICAgIGNvbnN0IFcgPSAzXFxuICAgICAgICBjb25zdCBIID0gMlxcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBhc3NldFNjcmVlbi5nZXRNZXNoUHJpbWl0aXZlSW5kaWNlcyhcXFwiU2NyZWVuXFxcIilcXG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBhc3NldFNjcmVlbi5tYWtlRGF0YXNldCh7XFxuICAgICAgICAgICAgbWVzaEluZGV4OiBcXFwiU2NyZWVuXFxcIixcXG4gICAgICAgIH0pXFxuICAgICAgICBkYXRhc2V0LmRlYnVnKClcXG4gICAgICAgIGNvbnN0IHVuaWZvcm1CbG9jayA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcXG4gICAgICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgICAgICB1bmlUaW1lOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KVxcbiAgICAgICAgdGhpcy51bmlmb3JtQmxvY2sgPSB1bmlmb3JtQmxvY2tcXG4gICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICAgICAgd3JhcFI6IFxcXCJSRVBFQVRcXFwiLFxcbiAgICAgICAgICAgICAgICB3cmFwUzogXFxcIlJFUEVBVFxcXCIsXFxuICAgICAgICAgICAgICAgIHdyYXBUOiBcXFwiUkVQRUFUXFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSlcXG4gICAgICAgIGNvbnN0IHNjYWxlID0gNTEyXFxuICAgICAgICBjb25zdCB7IGN0eCwgY2FudmFzIH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKFcgKiBzY2FsZSwgSCAqIHNjYWxlICogMilcXG4gICAgICAgIHRoaXMuaW5pdENhbnZhcyhjYW52YXMsIGN0eClcXG4gICAgICAgIHRoaXMubG9hZEZvbnQoY2FudmFzLCBjdHgpXFxuICAgICAgICB0aGlzLnRleHR1cmVEdXN0ID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGltYWdlRHVzdClcXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBUZ2RQYWludGVyUHJvZ3JhbShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZHJhd01vZGU6IFxcXCJUUklBTkdMRVNcXFwiLFxcbiAgICAgICAgICAgIHN0YXRlOiB7XFxuICAgICAgICAgICAgICAgIGJsZW5kOiBcXFwiYWRkXFxcIixcXG4gICAgICAgICAgICAgICAgY3VsbDogXFxcIm9mZlxcXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB1bmlmb3JtczogeyB1bmlmb3JtQ2FtZXJhLCB1bmlmb3JtQmxvY2sgfSxcXG4gICAgICAgICAgICBkYXRhc2V0LFxcbiAgICAgICAgICAgIGVsZW1lbnRzLFxcbiAgICAgICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgICAgIHVuaVRleHR1cmVMZXR0ZXJzOiB0aGlzLnRleHR1cmVMZXR0ZXJzLFxcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlRHVzdDogdGhpcy50ZXh0dXJlRHVzdCxcXG4gICAgICAgICAgICAgICAgdW5pVGV4dHVyZVNreWJveDogc2t5Ym94LFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdmFyeWluZzoge1xcbiAgICAgICAgICAgICAgICB2YXJVVjogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgICAgICAgICB2YXJOb3JtYWw6IFxcXCJ2ZWMzXFxcIixcXG4gICAgICAgICAgICAgICAgdmFyUG9zaXRpb246IFxcXCJ2ZWM0XFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHZlcnQ6IHtcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJOb3JtYWwgPSBOT1JNQUw7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJVViA9IFRFWENPT1JEXzA7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiA9IHZlYzQoUE9TSVRJT04sIDEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJnbF9Qb3NpdGlvbiA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiB2YXJQb3NpdGlvbjtcXFwiLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZnJhZzoge1xcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgXFxcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmVMZXR0ZXJzLCB2ZWMyKDEuMCwgLjUpICogdmFyVVYgKyB2ZWMyKDAsIDAuMDUgKiB1bmlUaW1lKSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJmbG9hdCBkaXN0ID0gZnJhY3QodW5pVGltZSkgLSBmcmFjdCh2YXJVVi55KTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImlmIChkaXN0IDwgMC4wKSBkaXN0ICs9IDEuMDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImRpc3QgPSAxLjAgLyAoNi4wICogZGlzdCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJjb2xvci5yZ2IgKj0gZGlzdCAqIChnbF9Gcm9udEZhY2luZyA/IDEuMCA6IDAuMTUpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiY29sb3IucmdiICo9IHRleHR1cmUodW5pVGV4dHVyZUR1c3QsIHZhclVWKS5yO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gY29sb3I7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJpZiAoIWdsX0Zyb250RmFjaW5nKSByZXR1cm47XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMzIE4gPSBub3JtYWxpemUodmFyTm9ybWFsKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZlYzMgViA9IG5vcm1hbGl6ZSh1bmlDYW1lcmFQb3NpdGlvbiAtIHZhclBvc2l0aW9uLnh5eik7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMzIFIgPSByZWZsZWN0KC1WLCBOKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZlYzMgc3BlY3VsYXIgPSB0ZXh0dXJlTG9kKHVuaVRleHR1cmVTa3lib3gsIFIsIDAuMCkucmdiO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwic3BlY3VsYXIgPSBwb3coc3BlY3VsYXIsIHZlYzMoNS4wKSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IucmdiICs9IHNwZWN1bGFyICogLjU7XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSlcXG4gICAgfVxcblxcbiAgICBkZWxldGUoKSB7XFxuICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzLmRlbGV0ZSgpXFxuICAgICAgICB0aGlzLnByb2dyYW0uZGVsZXRlKClcXG4gICAgfVxcblxcbiAgICBwYWludCh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpIHtcXG4gICAgICAgIHRoaXMudW5pZm9ybUJsb2NrLnZhbHVlcy51bmlUaW1lID0gdGltZVxcbiAgICAgICAgdGhpcy5wcm9ncmFtLnBhaW50KHRpbWUsIGRlbHRhKVxcbiAgICB9XFxuXFxuICAgIHByaXZhdGUgaW5pdENhbnZhcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXNcXG4gICAgICAgIGNvbnN0IHRleHQgPSBcXFwiTG9hZGluZy4uLlxcXCJcXG4gICAgICAgIGN0eC5mb250ID0gYGJvbGQgJHt3aWR0aCAvIDd9cHggbW9ub3NwYWNlYFxcbiAgICAgICAgY29uc3QgbWVhc3VyZSA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KVxcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFxcXCIjM2UzXFxcIlxcbiAgICAgICAgY29uc3QgaCA9IGhlaWdodCAvIDVcXG4gICAgICAgIGNvbnN0IHggPSAod2lkdGggLSBtZWFzdXJlLndpZHRoKSAvIDJcXG4gICAgICAgIGZvciAobGV0IHkgPSBoOyB5IDwgaGVpZ2h0OyB5ICs9IGgpIHtcXG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgeCwgeSlcXG4gICAgICAgIH1cXG4gICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMubG9hZEJpdG1hcChjYW52YXMpXFxuICAgIH1cXG5cXG4gICAgcHJpdmF0ZSBsb2FkRm9udChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xcbiAgICAgICAgdGdkTG9hZEZvbnQoXFxcIkZ1emFyXFxcIiwgRnV6YXJGb250VVJMKS50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhc1xcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodClcXG4gICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IHdpZHRoIC8gOFxcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IGZvbnRTaXplIC8gM1xcbiAgICAgICAgICAgIGN0eC5mb250ID0gYGl0YWxpYyAke2ZvbnRTaXplfXB4IEZ1emFyYFxcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcXFwiIzNlM1xcXCJcXG4gICAgICAgICAgICBsZXQgeCA9IG1hcmdpblxcbiAgICAgICAgICAgIGxldCB5ID0gZm9udFNpemUgKiAzXFxuICAgICAgICAgICAgbGV0IGJvbGQgPSBmYWxzZVxcbiAgICAgICAgICAgIGxldCBpdGFsaWMgPSBmYWxzZVxcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBgKkZ1emFyIGlzIHRoZSBiZXN0IGZvbnQgZXZlciBtYWRlIGluIHRoaXMgd29ybGQgb2YgbWFkbmVzcy4gSXQgd2FzIGVuZ2luZWVyZWQgYnkgYW4gdW5rbm93biBfZ2VuaXVzIGhpZGRlbiBpbiBhIHN3aXNzIGNpdHkgY2FsbGVkIEdlbmV2YS4gXFxcIjAxMjM0NTY3ODlcXFwiYFxcbiAgICAgICAgICAgIGZvciAoY29uc3Qgd29yZCBvZiB0ZXh0LnNwbGl0KFxcXCIgXFxcIikpIHtcXG4gICAgICAgICAgICAgICAgaXRhbGljID0gZmFsc2VcXG4gICAgICAgICAgICAgICAgYm9sZCA9IGZhbHNlXFxuICAgICAgICAgICAgICAgIGlmICh3b3JkLnN0YXJ0c1dpdGgoXFxcIl9cXFwiKSkgaXRhbGljID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICBpZiAod29yZC5zdGFydHNXaXRoKFxcXCIqXFxcIikpIGl0YWxpYyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuV29yZCA9IHJlbW92ZVN0eWxlKHdvcmQpXFxuICAgICAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Ym9sZCA/IFxcXCJib2xkIFxcXCIgOiBcXFwiXFxcIn0ke2l0YWxpYyA/IFxcXCJpdGFsaWMgXFxcIiA6IFxcXCJcXFwifSAke2ZvbnRTaXplfXB4IEZ1emFyYFxcbiAgICAgICAgICAgICAgICBjb25zdCBtZWFzdXJlID0gY3R4Lm1lYXN1cmVUZXh0KGAke2NsZWFuV29yZH0gYClcXG4gICAgICAgICAgICAgICAgaWYgKHggPiB3aWR0aCAtIG1lYXN1cmUud2lkdGggLSAyICogbWFyZ2luKSB7XFxuICAgICAgICAgICAgICAgICAgICB4ID0gbWFyZ2luXFxuICAgICAgICAgICAgICAgICAgICB5ICs9IGZvbnRTaXplXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGNsZWFuV29yZCwgeCwgeSlcXG4gICAgICAgICAgICAgICAgeCArPSBtZWFzdXJlLndpZHRoXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAwLjVcXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcXFwiIzVmNTdcXFwiXFxuICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBoZWlnaHQ7IGggKz0gZm9udFNpemUgLyA4KSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGgpICsgMC41XFxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKVxcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKDAsIHkpXFxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGgsIHkpXFxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzLmxvYWRCaXRtYXAoY2FudmFzKVxcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5wYWludCgpXFxuICAgICAgICB9KVxcbiAgICB9XFxufVxcblxcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlKHdvcmQ6IHN0cmluZykge1xcbiAgICB3aGlsZSAoXFxcIipfXFxcIi5pbmNsdWRlcyh3b3JkLmNoYXJBdCgwKSkpIHdvcmQgPSB3b3JkLnNsaWNlKDEpXFxuICAgIHJldHVybiB3b3JkXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZERhdGFHbGIsXG4gICAgdGdkTG9hZEZvbnQsXG4gICAgVGdkTWF0ZXJpYWxHbG9iYWwsXG4gICAgVGdkUGFpbnRlcixcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclByb2dyYW0sXG4gICAgVGdkUGFpbnRlclNreWJveCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFRleHR1cmVDdWJlLFxuICAgIFRnZFVuaWZvcm1CdWZmZXJPYmplY3QsXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcbiAgICBXZWJnbEltYWdlLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IFNjcmVlblVSTCBmcm9tIFwiLi9zY3JlZW4uZ2xiXCJcbmltcG9ydCBEdXN0VVJMIGZyb20gXCIuL2R1c3Qud2VicFwiXG5pbXBvcnQgRnV6YXJGb250VVJMIGZyb20gXCIuL0Z1emFyX0dYLndvZmYyXCJcbmltcG9ydCBpbWFnZVBvc1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NYLndlYnBcIiAvLyArWFxuaW1wb3J0IGltYWdlUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1kud2VicFwiIC8vICtZXG5pbXBvcnQgaW1hZ2VQb3NaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvcG9zWi53ZWJwXCIgLy8gK1pcbmltcG9ydCBpbWFnZU5lZ1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdYLndlYnBcIiAvLyAtWFxuaW1wb3J0IGltYWdlTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1kud2VicFwiIC8vIC1ZXG5pbXBvcnQgaW1hZ2VOZWdaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvbmVnWi53ZWJwXCIgLy8gLVpcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMiwgMClcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDksIDcpXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcbiAgICBjb25zdCBpbWFnZUxldHRlcnMgPSBhc3NldHMuaW1hZ2UubGV0dGVyc1xuICAgIGNvbnN0IGltYWdlRHVzdCA9IGFzc2V0cy5pbWFnZS5kdXN0XG4gICAgY29uc3QgY2FtZXJhU2t5Ym94ID0gY29udGV4dC5jYW1lcmEuY2xvbmUoKVxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLmltYWdlUG9zWCxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NZLFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLmltYWdlTmVnWCxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdZLFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXG4gICAgfSlcbiAgICBjb25zdCBwYWludGVyU2t5Ym94ID0gbmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xuICAgICAgICB0aW50OiBbMC40LCAwLjQsIDAuNCwgMV0sXG4gICAgICAgIGNhbWVyYTogY2FtZXJhU2t5Ym94LFxuICAgICAgICB0ZXh0dXJlOiBza3lib3gsXG4gICAgfSlcbiAgICBjb25zdCBwYWludGVyU2NyZWVuID0gbmV3IFBhaW50ZXJTY3JlZW4oY29udGV4dCwge1xuICAgICAgICB1bmlmb3JtQ2FtZXJhLFxuICAgICAgICBpbWFnZUxldHRlcnMsXG4gICAgICAgIGltYWdlRHVzdCxcbiAgICAgICAgYXNzZXRTY3JlZW46IGFzc2V0cy5nbGIuc2NyZWVuLFxuICAgICAgICBza3lib3gsXG4gICAgfSlcbiAgICBjb25zdCBnZW9tZXRyeSA9IGFzc2V0cy5nbGIuc2NyZWVuLm1ha2VHZW9tZXRyeSh7XG4gICAgICAgIG1lc2hJbmRleDogXCJNZXNoXCIsXG4gICAgfSlcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XG4gICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxuICAgIH0pXG4gICAgY29uc3QgZm9vdCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG4gICAgICAgIGdlb21ldHJ5LFxuICAgICAgICBtYXRlcmlhbCxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBwYWludGVyU2t5Ym94LFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIGZvb3QsIHBhaW50ZXJTY3JlZW5dLFxuICAgICAgICB9KSxcbiAgICAgICAgKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFuZ1ggPSBNYXRoLmFicygxMCAqIE1hdGguc2luKHRpbWUgKiAwLjM0MSkpXG4gICAgICAgICAgICBjb25zdCBhbmdZID0gMzAgKiBNYXRoLnNpbih0aW1lICogMC41KVxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1ksIDApXG4gICAgICAgICAgICBjYW1lcmFTa3lib3guem9vbSA9IDAuM1xuICAgICAgICAgICAgY2FtZXJhU2t5Ym94LnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihhbmdYLCBhbmdZICsgMTYwLCAwKVxuICAgICAgICB9LFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBnbGI6IHsgc2NyZWVuOiBTY3JlZW5VUkwgfSxcbiAgICAgICAgICAgICAgICBpbWFnZTogeyBkdXN0OiBEdXN0VVJMLCBpbWFnZVBvc1gsIGltYWdlUG9zWSwgaW1hZ2VQb3NaLCBpbWFnZU5lZ1gsIGltYWdlTmVnWSwgaW1hZ2VOZWdaIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuaW50ZXJmYWNlIFBhaW50ZXJTY3JlZW5PcHRpb25zIHtcbiAgICBpbWFnZUxldHRlcnM6IFdlYmdsSW1hZ2VcbiAgICBpbWFnZUR1c3Q6IFdlYmdsSW1hZ2VcbiAgICB1bmlmb3JtQ2FtZXJhOiBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhXG4gICAgYXNzZXRTY3JlZW46IFRnZERhdGFHbGJcbiAgICBza3lib3g6IFRnZFRleHR1cmVDdWJlXG59XG5cbmNsYXNzIFBhaW50ZXJTY3JlZW4gZXh0ZW5kcyBUZ2RQYWludGVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmVMZXR0ZXJzOiBUZ2RUZXh0dXJlMkRcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmVEdXN0OiBUZ2RUZXh0dXJlMkRcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb2dyYW06IFRnZFBhaW50ZXJQcm9ncmFtXG4gICAgcHJpdmF0ZSByZWFkb25seSB1bmlmb3JtQmxvY2s6IFRnZFVuaWZvcm1CdWZmZXJPYmplY3Q8XCJ1bmlUaW1lXCI+XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQsXG4gICAgICAgIHsgdW5pZm9ybUNhbWVyYSwgaW1hZ2VEdXN0LCBhc3NldFNjcmVlbiwgc2t5Ym94IH06IFBhaW50ZXJTY3JlZW5PcHRpb25zLFxuICAgICkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIGNvbnN0IFcgPSAzXG4gICAgICAgIGNvbnN0IEggPSAyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gYXNzZXRTY3JlZW4uZ2V0TWVzaFByaW1pdGl2ZUluZGljZXMoXCJTY3JlZW5cIilcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGFzc2V0U2NyZWVuLm1ha2VEYXRhc2V0KHtcbiAgICAgICAgICAgIG1lc2hJbmRleDogXCJTY3JlZW5cIixcbiAgICAgICAgfSlcbiAgICAgICAgZGF0YXNldC5kZWJ1ZygpXG4gICAgICAgIGNvbnN0IHVuaWZvcm1CbG9jayA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgdW5pVGltZTogXCJmbG9hdFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy51bmlmb3JtQmxvY2sgPSB1bmlmb3JtQmxvY2tcbiAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycyA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgICAgIG1pbkZpbHRlcjogXCJMSU5FQVJcIixcbiAgICAgICAgICAgICAgICB3cmFwUjogXCJSRVBFQVRcIixcbiAgICAgICAgICAgICAgICB3cmFwUzogXCJSRVBFQVRcIixcbiAgICAgICAgICAgICAgICB3cmFwVDogXCJSRVBFQVRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHNjYWxlID0gNTEyXG4gICAgICAgIGNvbnN0IHsgY3R4LCBjYW52YXMgfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQoVyAqIHNjYWxlLCBIICogc2NhbGUgKiAyKVxuICAgICAgICB0aGlzLmluaXRDYW52YXMoY2FudmFzLCBjdHgpXG4gICAgICAgIHRoaXMubG9hZEZvbnQoY2FudmFzLCBjdHgpXG4gICAgICAgIHRoaXMudGV4dHVyZUR1c3QgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoaW1hZ2VEdXN0KVxuICAgICAgICB0aGlzLnByb2dyYW0gPSBuZXcgVGdkUGFpbnRlclByb2dyYW0oY29udGV4dCwge1xuICAgICAgICAgICAgZHJhd01vZGU6IFwiVFJJQU5HTEVTXCIsXG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIGJsZW5kOiBcImFkZFwiLFxuICAgICAgICAgICAgICAgIGN1bGw6IFwib2ZmXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5pZm9ybXM6IHsgdW5pZm9ybUNhbWVyYSwgdW5pZm9ybUJsb2NrIH0sXG4gICAgICAgICAgICBkYXRhc2V0LFxuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB0ZXh0dXJlczoge1xuICAgICAgICAgICAgICAgIHVuaVRleHR1cmVMZXR0ZXJzOiB0aGlzLnRleHR1cmVMZXR0ZXJzLFxuICAgICAgICAgICAgICAgIHVuaVRleHR1cmVEdXN0OiB0aGlzLnRleHR1cmVEdXN0LFxuICAgICAgICAgICAgICAgIHVuaVRleHR1cmVTa3lib3g6IHNreWJveCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YXJ5aW5nOiB7XG4gICAgICAgICAgICAgICAgdmFyVVY6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgIHZhck5vcm1hbDogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgdmFyUG9zaXRpb246IFwidmVjNFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZlcnQ6IHtcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgICAgICBcInZhck5vcm1hbCA9IE5PUk1BTDtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJVViA9IFRFWENPT1JEXzA7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFyUG9zaXRpb24gPSB2ZWM0KFBPU0lUSU9OLCAxLjApO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImdsX1Bvc2l0aW9uID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIHVuaU1vZGVsVmlld01hdHJpeCAqIHZhclBvc2l0aW9uO1wiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnJhZzoge1xuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZUxldHRlcnMsIHZlYzIoMS4wLCAuNSkgKiB2YXJVViArIHZlYzIoMCwgMC4wNSAqIHVuaVRpbWUpKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCBkaXN0ID0gZnJhY3QodW5pVGltZSkgLSBmcmFjdCh2YXJVVi55KTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpZiAoZGlzdCA8IDAuMCkgZGlzdCArPSAxLjA7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzdCA9IDEuMCAvICg2LjAgKiBkaXN0KTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvci5yZ2IgKj0gZGlzdCAqIChnbF9Gcm9udEZhY2luZyA/IDEuMCA6IDAuMTUpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yLnJnYiAqPSB0ZXh0dXJlKHVuaVRleHR1cmVEdXN0LCB2YXJVVikucjtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IgPSBjb2xvcjtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpZiAoIWdsX0Zyb250RmFjaW5nKSByZXR1cm47XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMyBOID0gbm9ybWFsaXplKHZhck5vcm1hbCk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMyBWID0gbm9ybWFsaXplKHVuaUNhbWVyYVBvc2l0aW9uIC0gdmFyUG9zaXRpb24ueHl6KTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMzIFIgPSByZWZsZWN0KC1WLCBOKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMzIHNwZWN1bGFyID0gdGV4dHVyZUxvZCh1bmlUZXh0dXJlU2t5Ym94LCBSLCAwLjApLnJnYjtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzcGVjdWxhciA9IHBvdyhzcGVjdWxhciwgdmVjMyg1LjApKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IucmdiICs9IHNwZWN1bGFyICogLjU7XCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMucHJvZ3JhbS5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVuaWZvcm1CbG9jay52YWx1ZXMudW5pVGltZSA9IHRpbWVcbiAgICAgICAgdGhpcy5wcm9ncmFtLnBhaW50KHRpbWUsIGRlbHRhKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdENhbnZhcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhc1xuICAgICAgICBjb25zdCB0ZXh0ID0gXCJMb2FkaW5nLi4uXCJcbiAgICAgICAgY3R4LmZvbnQgPSBgYm9sZCAke3dpZHRoIC8gN31weCBtb25vc3BhY2VgXG4gICAgICAgIGNvbnN0IG1lYXN1cmUgPSBjdHgubWVhc3VyZVRleHQodGV4dClcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzNlM1wiXG4gICAgICAgIGNvbnN0IGggPSBoZWlnaHQgLyA1XG4gICAgICAgIGNvbnN0IHggPSAod2lkdGggLSBtZWFzdXJlLndpZHRoKSAvIDJcbiAgICAgICAgZm9yIChsZXQgeSA9IGg7IHkgPCBoZWlnaHQ7IHkgKz0gaCkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycy5sb2FkQml0bWFwKGNhbnZhcylcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRGb250KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIHRnZExvYWRGb250KFwiRnV6YXJcIiwgRnV6YXJGb250VVJMKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IHdpZHRoIC8gOFxuICAgICAgICAgICAgY29uc3QgbWFyZ2luID0gZm9udFNpemUgLyAzXG4gICAgICAgICAgICBjdHguZm9udCA9IGBpdGFsaWMgJHtmb250U2l6ZX1weCBGdXphcmBcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMzZTNcIlxuICAgICAgICAgICAgbGV0IHggPSBtYXJnaW5cbiAgICAgICAgICAgIGxldCB5ID0gZm9udFNpemUgKiAzXG4gICAgICAgICAgICBsZXQgYm9sZCA9IGZhbHNlXG4gICAgICAgICAgICBsZXQgaXRhbGljID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBgKkZ1emFyIGlzIHRoZSBiZXN0IGZvbnQgZXZlciBtYWRlIGluIHRoaXMgd29ybGQgb2YgbWFkbmVzcy4gSXQgd2FzIGVuZ2luZWVyZWQgYnkgYW4gdW5rbm93biBfZ2VuaXVzIGhpZGRlbiBpbiBhIHN3aXNzIGNpdHkgY2FsbGVkIEdlbmV2YS4gXCIwMTIzNDU2Nzg5XCJgXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHdvcmQgb2YgdGV4dC5zcGxpdChcIiBcIikpIHtcbiAgICAgICAgICAgICAgICBpdGFsaWMgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGJvbGQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGlmICh3b3JkLnN0YXJ0c1dpdGgoXCJfXCIpKSBpdGFsaWMgPSB0cnVlXG4gICAgICAgICAgICAgICAgaWYgKHdvcmQuc3RhcnRzV2l0aChcIipcIikpIGl0YWxpYyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW5Xb3JkID0gcmVtb3ZlU3R5bGUod29yZClcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IGAke2JvbGQgPyBcImJvbGQgXCIgOiBcIlwifSR7aXRhbGljID8gXCJpdGFsaWMgXCIgOiBcIlwifSAke2ZvbnRTaXplfXB4IEZ1emFyYFxuICAgICAgICAgICAgICAgIGNvbnN0IG1lYXN1cmUgPSBjdHgubWVhc3VyZVRleHQoYCR7Y2xlYW5Xb3JkfSBgKVxuICAgICAgICAgICAgICAgIGlmICh4ID4gd2lkdGggLSBtZWFzdXJlLndpZHRoIC0gMiAqIG1hcmdpbikge1xuICAgICAgICAgICAgICAgICAgICB4ID0gbWFyZ2luXG4gICAgICAgICAgICAgICAgICAgIHkgKz0gZm9udFNpemVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGNsZWFuV29yZCwgeCwgeSlcbiAgICAgICAgICAgICAgICB4ICs9IG1lYXN1cmUud2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAwLjVcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzVmNTdcIlxuICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBoZWlnaHQ7IGggKz0gZm9udFNpemUgLyA4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaCkgKyAwLjVcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKDAsIHkpXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCwgeSlcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMubG9hZEJpdG1hcChjYW52YXMpXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucGFpbnQoKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGUod29yZDogc3RyaW5nKSB7XG4gICAgd2hpbGUgKFwiKl9cIi5pbmNsdWRlcyh3b3JkLmNoYXJBdCgwKSkpIHdvcmQgPSB3b3JkLnNsaWNlKDEpXG4gICAgcmV0dXJuIHdvcmRcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuLy8gaW1wb3J0IFwicHJpc21qcy90aGVtZXMvcHJpc20tY295LmNzc1wiXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vQ29kZVZpZXdlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIGlkPzogc3RyaW5nXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVWaWV3ZXJWaWV3KHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHNpbmdsZVByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHsuLi5zaW5nbGVQcm9wc30gLz5cbiAgICB9XG4gICAgY29uc3QgbXVsdGlQcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdmFsdWUsXG4gICAgfVxuICAgIHJldHVybiA8TXVsdGlDb2RlVmlld2VyVmlldyB7Li4ubXVsdGlQcm9wc30gLz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBTaW5nbGVDb2RlVmlld2VyVmlldyhwcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHJlZlRpbWVvdXQgPSBSZWFjdC51c2VSZWYoMClcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHJlZkNvZGUgPSBSZWFjdC51c2VSZWY8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZWZDb2RlLmN1cnJlbnRcbiAgICAgICAgICAgIGlmICghY29kZSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBQcmlzbS5oaWdobGlnaHQocHJvcHMudmFsdWUsIGdldEdyYW1tYXJGb3JMYW5ndWFnZShwcm9wcy5sYW5ndWFnZSksIHByb3BzLmxhbmd1YWdlKVxuICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBodG1sXG4gICAgICAgIH0sIDEwMClcbiAgICB9LCBbcHJvcHMudmFsdWUsIHByb3BzLmxhbmd1YWdlLCByZWZDb2RlLmN1cnJlbnRdKVxuICAgIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcm9wcy52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3B1cCh0cnVlKVxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRQb3B1cChmYWxzZSksIDcwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvcHVwKGZhbHNlKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gMFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9IG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSByZWY9e3JlZkNvZGV9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0gLz5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAge3BvcHVwICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUucG9wdXB9IG9uQ2xpY2s9e2hhbmRsZVBvcHVwQ2xpY2t9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGNvZGUgaGFzIGJlZW4gY29waWVkIHRvIHRoZSBjbGlwYm9hcmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbU3R5bGUuQ29kZVZpZXdlcl1cbiAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjbGFzc05hbWVzLnB1c2gocHJvcHMuY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuZnVuY3Rpb24gTXVsdGlDb2RlVmlld2VyVmlldyhwcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgY2FwdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy52YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhcHRpb25zLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGV0YWlscyBrZXk9e2NhcHRpb259IG9wZW49e2ZhbHNlfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57Y2FwdGlvbn08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDb2RlVmlld2VyVmlldyB2YWx1ZT17cHJvcHMudmFsdWVbY2FwdGlvbl19IGxhbmd1YWdlPXtwcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSBcInRzXCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbiAgICAgICAgY2FzZSBcInRzeFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50c3hcbiAgICAgICAgY2FzZSBcImZyYWdcIjpcbiAgICAgICAgY2FzZSBcInZlcnRcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMuZ2xzbFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIEdMU0xcbiAgICB9XG59XG5cbmNvbnN0IFRZUEVTID0gW1xuICAgIFwiYnZlYzJcIixcbiAgICBcImJ2ZWMzXCIsXG4gICAgXCJidmVjNFwiLFxuICAgIFwiZG1hdDJcIixcbiAgICBcImRtYXQyeDJcIixcbiAgICBcImRtYXQyeDNcIixcbiAgICBcImRtYXQyeDRcIixcbiAgICBcImRtYXQzXCIsXG4gICAgXCJkbWF0M3gyXCIsXG4gICAgXCJkbWF0M3gzXCIsXG4gICAgXCJkbWF0M3g0XCIsXG4gICAgXCJkbWF0NFwiLFxuICAgIFwiZG1hdDR4MlwiLFxuICAgIFwiZG1hdDR4M1wiLFxuICAgIFwiZG1hdDR4NFwiLFxuICAgIFwiZHZlYzJcIixcbiAgICBcImR2ZWMzXCIsXG4gICAgXCJkdmVjNFwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZ2ZWMyXCIsXG4gICAgXCJmdmVjM1wiLFxuICAgIFwiZnZlYzRcIixcbiAgICBcImlzYW1wbGVyMURcIixcbiAgICBcImlzYW1wbGVyMURBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFwiLFxuICAgIFwiaXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJETVNcIixcbiAgICBcImlzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEUmVjdFwiLFxuICAgIFwiaXNhbXBsZXIzRFwiLFxuICAgIFwiaXNhbXBsZXJCdWZmZXJcIixcbiAgICBcImlzYW1wbGVyQ3ViZVwiLFxuICAgIFwiaXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcIml2ZWMyXCIsXG4gICAgXCJpdmVjM1wiLFxuICAgIFwiaXZlYzRcIixcbiAgICBcIm1hdDJcIixcbiAgICBcIm1hdDJ4MlwiLFxuICAgIFwibWF0MngzXCIsXG4gICAgXCJtYXQyeDRcIixcbiAgICBcIm1hdDNcIixcbiAgICBcIm1hdDN4MlwiLFxuICAgIFwibWF0M3gzXCIsXG4gICAgXCJtYXQzeDRcIixcbiAgICBcIm1hdDRcIixcbiAgICBcIm1hdDR4MlwiLFxuICAgIFwibWF0NHgzXCIsXG4gICAgXCJtYXQ0eDRcIixcbiAgICBcInNhbXBsZVwiLFxuICAgIFwic2FtcGxlcjFEXCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIxRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEXCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRE1TXCIsXG4gICAgXCJzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRTaGFkb3dcIixcbiAgICBcInNhbXBsZXIzRFwiLFxuICAgIFwic2FtcGxlckJ1ZmZlclwiLFxuICAgIFwic2FtcGxlckN1YmVcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXJDdWJlU2hhZG93XCIsXG4gICAgXCJ1c2FtcGxlcjFEXCIsXG4gICAgXCJ1c2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRcIixcbiAgICBcInVzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRE1TXCIsXG4gICAgXCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFJlY3RcIixcbiAgICBcInVzYW1wbGVyM0RcIixcbiAgICBcInVzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVcIixcbiAgICBcInVzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJ1dmVjMlwiLFxuICAgIFwidXZlYzNcIixcbiAgICBcInV2ZWM0XCIsXG4gICAgXCJ2ZWMyXCIsXG4gICAgXCJ2ZWMzXCIsXG4gICAgXCJ2ZWM0XCIsXG4gICAgXCJ2b2lkXCIsXG5dXG5cbmNvbnN0IEtFWVdPUkRTID0gW1xuICAgIFwiY2VudHJvaWRcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJkaXNjYXJkXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJoaWdocFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW52YXJpYW50XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxvd3BcIixcbiAgICBcIm1lZGl1bXBcIixcbiAgICBcIm5vcGVyc3BlY3RpdmVcIixcbiAgICBcIm91dFwiLFxuICAgIFwicGF0Y2hcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwic21vb3RoXCIsXG4gICAgXCJzdWJyb3V0aW5lXCIsXG4gICAgXCJ1bmlmb3JtXCIsXG4gICAgLy8gUmVzZXJ2ZWQgZm9yIGZ1dHVyZS5cbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiYXNtXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY29tbW9uXCIsXG4gICAgXCJlbnVtXCIsXG4gICAgXCJleHRlcm5cIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZpeGVkXCIsXG4gICAgXCJnb3RvXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJodmVjMlwiLFxuICAgIFwiaHZlYzNcIixcbiAgICBcImh2ZWM0XCIsXG4gICAgXCJpaW1hZ2UxRFwiLFxuICAgIFwiaWltYWdlMURBcnJheVwiLFxuICAgIFwiaWltYWdlMkRcIixcbiAgICBcImlpbWFnZTJEQXJyYXlcIixcbiAgICBcImlpbWFnZTNEXCIsXG4gICAgXCJpaW1hZ2VCdWZmZXJcIixcbiAgICBcImlpbWFnZUN1YmVcIixcbiAgICBcImltYWdlMURcIixcbiAgICBcImltYWdlMURBcnJheVwiLFxuICAgIFwiaW1hZ2UxREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTFEU2hhZG93XCIsXG4gICAgXCJpbWFnZTJEXCIsXG4gICAgXCJpbWFnZTJEQXJyYXlcIixcbiAgICBcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UzRFwiLFxuICAgIFwiaW1hZ2VCdWZmZXJcIixcbiAgICBcImltYWdlQ3ViZVwiLFxuICAgIFwiaW5saW5lXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW50ZXJmYWNlXCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcIm5vaW5saW5lXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBhY2tlZFwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInJvd19tYWpvclwiLFxuICAgIFwic2FtcGxlcjNEUmVjdFwiLFxuICAgIFwic2hvcnRcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdXBlcnBcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0aGlzXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJ1aW1hZ2UxRFwiLFxuICAgIFwidWltYWdlMURBcnJheVwiLFxuICAgIFwidWltYWdlMkRcIixcbiAgICBcInVpbWFnZTJEQXJyYXlcIixcbiAgICBcInVpbWFnZTNEXCIsXG4gICAgXCJ1aW1hZ2VCdWZmZXJcIixcbiAgICBcInVpbWFnZUN1YmVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bnNpZ25lZFwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZvbGF0aWxlXCIsXG5dXG5cbmNvbnN0IEdMT0JBTFMgPSBbXG4gICAgXCJnbF9EZXB0aFJhbmdlXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmRpZmZcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZmFyXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcbiAgICBcImdsX0ZyYWdDb29yZFwiLFxuICAgIFwiZ2xfRnJhZ0RlcHRoXCIsXG4gICAgXCJnbF9Gcm9udEZhY2luZ1wiLFxuICAgIFwiZ2xfSW5zdGFuY2VJRFwiLFxuICAgIFwiZ2xfUG9pbnRDb29yZFwiLFxuICAgIFwiZ2xfUG9pbnRTaXplXCIsXG4gICAgXCJnbF9Qb3NpdGlvblwiLFxuICAgIFwiZ2xfVmVydGV4SURcIixcbl1cblxuY29uc3QgRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhY29zaFwiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbnlcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzaW5oXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdGFuaFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2xhbXBcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImRlZ3JlZXNcIixcbiAgICBcImRldGVybWluYW50XCIsXG4gICAgXCJkRmR4XCIsXG4gICAgXCJkRmR5XCIsXG4gICAgXCJkaXN0YW5jZVwiLFxuICAgIFwiZG90XCIsXG4gICAgXCJlcXVhbFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHAyXCIsXG4gICAgXCJmYWNlZm9yd2FyZFwiLFxuICAgIFwiZmxvYXRCaXRzVG9JbnRcIixcbiAgICBcImZsb2F0Qml0c1RvVWludFwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImZyYWN0XCIsXG4gICAgXCJmd2lkdGhcIixcbiAgICBcImdyZWF0ZXJUaGFuXCIsXG4gICAgXCJncmVhdGVyVGhhbkVxdWFsXCIsXG4gICAgXCJpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwiaW52ZXJzZVwiLFxuICAgIFwiaW52ZXJzZXNxcnRcIixcbiAgICBcImlzaW5mXCIsXG4gICAgXCJpc25hblwiLFxuICAgIFwibGVuZ3RoXCIsXG4gICAgXCJsZXNzVGhhblwiLFxuICAgIFwibGVzc1RoYW5FcXVhbFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cyXCIsXG4gICAgXCJtYXRyaXhDb21wTXVsdFwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1peFwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2RmXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibm90RXF1YWxcIixcbiAgICBcIm91dGVyUHJvZHVjdFwiLFxuICAgIFwicGFja0hhbGYyeDE2XCIsXG4gICAgXCJwYWNrU25vcm0yeDE2XCIsXG4gICAgXCJwYWNrVW5vcm0yeDE2XCIsXG4gICAgXCJwb3dcIixcbiAgICBcInJhZGlhbnNcIixcbiAgICBcInJlZmxlY3RcIixcbiAgICBcInJlZnJhY3RcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJyb3VuZEV2ZW5cIixcbiAgICBcInNpZ25cIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic21vb3Roc3RlcFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RlcFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0ZXhlbEZldGNoXCIsXG4gICAgXCJ0ZXhlbEZldGNoT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZFwiLFxuICAgIFwidGV4dHVyZUdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVMb2RcIixcbiAgICBcInRleHR1cmVMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RcIixcbiAgICBcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvak9mZnNldFwiLFxuICAgIFwidGV4dHVyZVNpemVcIixcbiAgICBcInRyYW5zcG9zZVwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcInVpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwidW5wYWNrSGFsZjJ4MTZcIixcbiAgICBcInVucGFja1Nub3JtMngxNlwiLFxuICAgIFwidW5wYWNrVW5vcm0yeDE2XCIsXG5dXG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eIy4rJC9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC8oXnxbXlxcdyRdKSg/Ok5hTnxJbmZpbml0eXwwW2JCXVswMV0rKD86X1swMV0rKSpuP3wwW29PXVswLTddKyg/Ol9bMC03XSspKm4/fDBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj98XFxkKyg/Ol9cXGQrKSpufCg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8pKD8hW1xcdyRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG4gICAga2V5d29yZDogbWFrZUlkZW50aWZpZXJzUlgoS0VZV09SRFMpLFxuICAgIGdsb2JhbDogbWFrZUlkZW50aWZpZXJzUlgoR0xPQkFMUyksXG4gICAgZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59XG5cbmZ1bmN0aW9uIG1ha2VJZGVudGlmaWVyc1JYKHdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoYCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYCksXG4gICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0NvZGVWaWV3ZXJcIlxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsMEpBQTBKLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0VqSjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLE1BQU0sS0FBSyxHQUFHLEVBQUMsV0FBVyxFQUFDLDg3RkFBODdGLEVBQUM7QUFDMTlGLE1BQU0sSUFBSSxHQUFHLHNoSEFBc2hIO0FBRXBoSCxTQUFTLGFBQWE7SUFDakMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyx5Q0FBYyxDQUFDLEtBQUssQ0FBQztJQUM3QyxPQUFPLHNHQUNILG9EQUFLLFNBQVMsRUFBQyxXQUFXLFlBQUMsMkNBQUMsc0NBQUksS0FBRyxHQUFNLEVBQ3pDLHFEQUFLLFNBQVMsRUFBQyxZQUFZLGFBQ3ZCLDhEQUNJLDJDQUFDLHlDQUFVLElBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUNyQyxHQUNYLEVBQ04sMkNBQUMsdURBQVUsSUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxD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