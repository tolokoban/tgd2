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
    context;
    textureLetters;
    textureDust;
    program;
    uniformBlock;
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                    lineNumber: 4,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 6,
                        columnNumber: 46
                    }, this),
                    "),\nuniforms (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "/docs/classes/TgdUniformBufferObject.html",
                        children: "TgdUniformBufferObject"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 7,
                        columnNumber: 11
                    }, this),
                    "),\ntwo shaders (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "/docs/classes/TgdShaderVertex.html",
                        children: "TgdShaderVertex"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 8,
                        columnNumber: 14
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "/docs/classes/TgdShaderFragment.html",
                        children: "TgdShaderFragment"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 8,
                        columnNumber: 72
                    }, this),
                    "),\na program (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "/docs/classes/TgdProgram.html",
                        children: "TgdProgram"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 9,
                        columnNumber: 12
                    }, this),
                    ") and a vertex array object (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "/docs/classes/TgdVertexArray.html",
                        children: "TgdVertexArray"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 9,
                        columnNumber: 84
                    }, this),
                    ").\nYou will also need to select the drawing mode (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "gl.TRIANGLES"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 10,
                        columnNumber: 48
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "gl.POINTS"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                        lineNumber: 10,
                        columnNumber: 64
                    }, this),
                    ", ...), choose to use elements and/or instance, ..."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "This can be a lot of boilerplate."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "This class will help you do all this without the need to instanciate yourself all the needed objects.\nYou will avoid a lot of common error by using this class."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Blablabla"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                lineNumber: 19,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_matrix_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
                lineNumber: 21,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wcm9ncmFtX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fVGdkX3RnZF9tb2R1bGVfY3NzLXNyY19jb21wb25lbi02NzYyN2QuN2RiMmM3M2EwZWQxOThiYy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wcm9ncmFtL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcHJvZ3JhbS9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wcm9ncmFtL18vbWF0cml4LmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wcm9ncmFtL18vbWF0cml4LmRlbW8vbWF0cml4LmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9Db2RlVmlld2VyLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvaW5kZXgudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3Byb2dyYW0vcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNvZGVWaWV3ZXJcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9Db2RlVmlld2VyX1B0TDdNNVwiLFwicG9wdXBcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9wb3B1cF9uU0RaQ1JcIn07IiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDEwXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdChjb250ZXh0LCB7XFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaU1vZGVsVmlld01hdHJpeDogXFxcIm1hdDRcXFwiLFxcbiAgICAgICAgICAgIHVuaVByb2plY3Rpb25NYXRyaXg6IFxcXCJtYXQ0XFxcIixcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHVuaWZvcm1QaXhlbHMgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdChjb250ZXh0LCB7XFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaVBpeGVsczogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgdW5pUGl4ZWxzID0gbmV3IFRnZFZlYzIoKVxcbiAgICBjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJQcm9ncmFtKGNvbnRleHQsIHtcXG4gICAgICAgIGRyYXdNb2RlOiBcXFwiVFJJQU5HTEVfU1RSSVBcXFwiLFxcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLFxcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMsXFxuICAgICAgICB9LFxcbiAgICAgICAgdmFyeWluZzoge1xcbiAgICAgICAgICAgIHZhckNvbG9yOiBcXFwidmVjNFxcXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YXNldDogW1xcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgYXR0cmliczoge1xcbiAgICAgICAgICAgICAgICAgICAgYXR0UG9zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWysxLCAwLCArMSwgKzEsIC0xLCAwLCAtMSwgKzFdKSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgIGRpdmlzb3I6IDEsXFxuICAgICAgICAgICAgICAgIGF0dHJpYnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGF0dFZlYzoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJ2ZWMzXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxXSksXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgYXR0Q29sOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcInZlYzNcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAuMiwgMC4yLCAwLjIsIDEsIDAuMiwgMC4yLCAwLjIsIDFdKSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIF0sXFxuICAgICAgICB2ZXJ0OiB7XFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICAgICAgXFxcInZhckNvbG9yID0gdmVjNChhdHRDb2wsIDEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcInZlYzQgcG9pbnQgPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogdmVjNChhdHRWZWMsIDEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcInZlYzIgcmFkaWFsID0gbm9ybWFsaXplKHZlYzIoLXBvaW50LnksIHBvaW50LngpKSAqIHVuaVBpeGVscyAqIHBvaW50Lnc7XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcInBvaW50Lnh5ICo9IGF0dFBvcy55O1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJwb2ludC54eSArPSByYWRpYWwgKiBhdHRQb3MueDtcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiZ2xfUG9zaXRpb24gPSBwb2ludDtcXFwiLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9LFxcbiAgICAgICAgZnJhZzoge1xcbiAgICAgICAgICAgIG1haW5Db2RlOiBbXFxcIkZyYWdDb2xvciA9IHZhckNvbG9yO1xcXCJdLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHN0YXRlOiB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBibGVuZDogXFxcIm9mZlxcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcIm9mZlxcXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgb25EZWxldGU6ICgpID0+IHtcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLmRlbGV0ZSgpXFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscy5kZWxldGUoKVxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICAoKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnZhbHVlcy51bmlNb2RlbFZpZXdNYXRyaXggPSBjYW1lcmEubWF0cml4TW9kZWxWaWV3XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS52YWx1ZXMudW5pUHJvamVjdGlvbk1hdHJpeCA9IGNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uXFxuICAgICAgICAgICAgY29uc3QgdGhpY2tuZXNzID0gMlxcbiAgICAgICAgICAgIHVuaVBpeGVscy54ID0gdGhpY2tuZXNzIC8gY29udGV4dC53aWR0aFxcbiAgICAgICAgICAgIHVuaVBpeGVscy55ID0gdGhpY2tuZXNzIC8gY29udGV4dC5oZWlnaHRcXG4gICAgICAgICAgICB1bmlmb3JtUGl4ZWxzLnZhbHVlcy51bmlQaXhlbHMgPSB1bmlQaXhlbHNcXG4gICAgICAgIH0sXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIHBhaW50ZXIsXFxuICAgICAgICAvLyBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIC8vICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgLy8gICAgIGNoaWxkcmVuOiBbbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXSxcXG4gICAgICAgIC8vIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICBwYWludGVyLmRlYnVnKClcXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJQcm9ncmFtLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFVuaWZvcm1CdWZmZXJPYmplY3QsXFxuICAgIFRnZFZlYzIsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5cXG5pbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxMFxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLCAwLCAwLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlNb2RlbFZpZXdNYXRyaXg6IFxcXCJtYXQ0XFxcIixcXG4gICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4OiBcXFwibWF0NFxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlmb3JtUGl4ZWxzID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlQaXhlbHM6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHVuaVBpeGVscyA9IG5ldyBUZ2RWZWMyKClcXG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyUHJvZ3JhbShjb250ZXh0LCB7XFxuICAgICAgICBkcmF3TW9kZTogXFxcIlRSSUFOR0xFX1NUUklQXFxcIixcXG4gICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYSxcXG4gICAgICAgICAgICB1bmlmb3JtUGl4ZWxzLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHZhcnlpbmc6IHtcXG4gICAgICAgICAgICB2YXJDb2xvcjogXFxcInZlYzRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGRhdGFzZXQ6IFtcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgIGF0dHJpYnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGF0dFBvczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsrMSwgMCwgKzEsICsxLCAtMSwgMCwgLTEsICsxXSksXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICBkaXZpc29yOiAxLFxcbiAgICAgICAgICAgICAgICBhdHRyaWJzOiB7XFxuICAgICAgICAgICAgICAgICAgICBhdHRWZWM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwidmVjM1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV0pLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGF0dENvbDoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJ2ZWMzXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLjIsIDAuMiwgMC4yLCAxLCAwLjIsIDAuMiwgMC4yLCAxXSksXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICBdLFxcbiAgICAgICAgdmVydDoge1xcbiAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgIFxcXCJ2YXJDb2xvciA9IHZlYzQoYXR0Q29sLCAxLjApO1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJ2ZWM0IHBvaW50ID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIHVuaU1vZGVsVmlld01hdHJpeCAqIHZlYzQoYXR0VmVjLCAxLjApO1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJ2ZWMyIHJhZGlhbCA9IG5vcm1hbGl6ZSh2ZWMyKC1wb2ludC55LCBwb2ludC54KSkgKiB1bmlQaXhlbHMgKiBwb2ludC53O1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJwb2ludC54eSAqPSBhdHRQb3MueTtcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwicG9pbnQueHkgKz0gcmFkaWFsICogYXR0UG9zLng7XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcImdsX1Bvc2l0aW9uID0gcG9pbnQ7XFxcIixcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZyYWc6IHtcXG4gICAgICAgICAgICBtYWluQ29kZTogW1xcXCJGcmFnQ29sb3IgPSB2YXJDb2xvcjtcXFwiXSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzdGF0ZToge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgYmxlbmQ6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG9uRGVsZXRlOiAoKSA9PiB7XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS5kZWxldGUoKVxcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMuZGVsZXRlKClcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgKCkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS52YWx1ZXMudW5pTW9kZWxWaWV3TWF0cml4ID0gY2FtZXJhLm1hdHJpeE1vZGVsVmlld1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudmFsdWVzLnVuaVByb2plY3Rpb25NYXRyaXggPSBjYW1lcmEubWF0cml4UHJvamVjdGlvblxcbiAgICAgICAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IDJcXG4gICAgICAgICAgICB1bmlQaXhlbHMueCA9IHRoaWNrbmVzcyAvIGNvbnRleHQud2lkdGhcXG4gICAgICAgICAgICB1bmlQaXhlbHMueSA9IHRoaWNrbmVzcyAvIGNvbnRleHQuaGVpZ2h0XFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscy52YWx1ZXMudW5pUGl4ZWxzID0gdW5pUGl4ZWxzXFxuICAgICAgICB9LFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBwYWludGVyLFxcbiAgICAgICAgLy8gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAvLyAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgIC8vICAgICBjaGlsZHJlbjogW25ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KV0sXFxuICAgICAgICAvLyB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgcGFpbnRlci5kZWJ1ZygpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICB3aWR0aD1cXFwiNTEycHhcXFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCI1MTJweFxcXCJcXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcXG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclByb2dyYW0sXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFVuaWZvcm1CdWZmZXJPYmplY3QsXG4gICAgVGdkVmVjMixcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDEwXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLCAwLCAwLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xuICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgdW5pTW9kZWxWaWV3TWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgICAgIHVuaVByb2plY3Rpb25NYXRyaXg6IFwibWF0NFwiLFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29uc3QgdW5pZm9ybVBpeGVscyA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcbiAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgIHVuaVBpeGVsczogXCJ2ZWMyXCIsXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBjb25zdCB1bmlQaXhlbHMgPSBuZXcgVGdkVmVjMigpXG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyUHJvZ3JhbShjb250ZXh0LCB7XG4gICAgICAgIGRyYXdNb2RlOiBcIlRSSUFOR0xFX1NUUklQXCIsXG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscyxcbiAgICAgICAgfSxcbiAgICAgICAgdmFyeWluZzoge1xuICAgICAgICAgICAgdmFyQ29sb3I6IFwidmVjNFwiLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhc2V0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cmliczoge1xuICAgICAgICAgICAgICAgICAgICBhdHRQb3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShbKzEsIDAsICsxLCArMSwgLTEsIDAsIC0xLCArMV0pLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpdmlzb3I6IDEsXG4gICAgICAgICAgICAgICAgYXR0cmliczoge1xuICAgICAgICAgICAgICAgICAgICBhdHRWZWM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidmVjM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV0pLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRDb2w6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidmVjM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShbMSwgMC4yLCAwLjIsIDAuMiwgMSwgMC4yLCAwLjIsIDAuMiwgMV0pLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB2ZXJ0OiB7XG4gICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgIFwidmFyQ29sb3IgPSB2ZWM0KGF0dENvbCwgMS4wKTtcIixcbiAgICAgICAgICAgICAgICBcInZlYzQgcG9pbnQgPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogdmVjNChhdHRWZWMsIDEuMCk7XCIsXG4gICAgICAgICAgICAgICAgXCJ2ZWMyIHJhZGlhbCA9IG5vcm1hbGl6ZSh2ZWMyKC1wb2ludC55LCBwb2ludC54KSkgKiB1bmlQaXhlbHMgKiBwb2ludC53O1wiLFxuICAgICAgICAgICAgICAgIFwicG9pbnQueHkgKj0gYXR0UG9zLnk7XCIsXG4gICAgICAgICAgICAgICAgXCJwb2ludC54eSArPSByYWRpYWwgKiBhdHRQb3MueDtcIixcbiAgICAgICAgICAgICAgICBcImdsX1Bvc2l0aW9uID0gcG9pbnQ7XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBmcmFnOiB7XG4gICAgICAgICAgICBtYWluQ29kZTogW1wiRnJhZ0NvbG9yID0gdmFyQ29sb3I7XCJdLFxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxuICAgICAgICAgICAgYmxlbmQ6IFwib2ZmXCIsXG4gICAgICAgICAgICBjdWxsOiBcIm9mZlwiLFxuICAgICAgICB9LFxuICAgICAgICBvbkRlbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS5kZWxldGUoKVxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscy5kZWxldGUoKVxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnZhbHVlcy51bmlNb2RlbFZpZXdNYXRyaXggPSBjYW1lcmEubWF0cml4TW9kZWxWaWV3XG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnZhbHVlcy51bmlQcm9qZWN0aW9uTWF0cml4ID0gY2FtZXJhLm1hdHJpeFByb2plY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IDJcbiAgICAgICAgICAgIHVuaVBpeGVscy54ID0gdGhpY2tuZXNzIC8gY29udGV4dC53aWR0aFxuICAgICAgICAgICAgdW5pUGl4ZWxzLnkgPSB0aGlja25lc3MgLyBjb250ZXh0LmhlaWdodFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscy52YWx1ZXMudW5pUGl4ZWxzID0gdW5pUGl4ZWxzXG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBwYWludGVyLFxuICAgICAgICAvLyBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgLy8gICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgLy8gICAgIGNoaWxkcmVuOiBbbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXSxcbiAgICAgICAgLy8gfSksXG4gICAgKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIHBhaW50ZXIuZGVidWcoKVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgZ2l6bW9cbiAgICAgICAgICAgIHdpZHRoPVwiNTEycHhcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNTEycHhcIlxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWF0cml4LmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMiwgMClcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg5LCA3KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KVxcbiAgICBjb25zdCBpbWFnZUxldHRlcnMgPSBhc3NldHMuaW1hZ2UubGV0dGVyc1xcbiAgICBjb25zdCBpbWFnZUR1c3QgPSBhc3NldHMuaW1hZ2UuZHVzdFxcbiAgICBjb25zdCBjYW1lcmFTa3lib3ggPSBjb250ZXh0LmNhbWVyYS5jbG9uZSgpXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhaW50ZXJTa3lib3ggPSBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XFxuICAgICAgICB0aW50OiBbMC40LCAwLjQsIDAuNCwgMV0sXFxuICAgICAgICBjYW1lcmE6IGNhbWVyYVNreWJveCxcXG4gICAgICAgIHRleHR1cmU6IHNreWJveCxcXG4gICAgfSlcXG4gICAgY29uc3QgcGFpbnRlclNjcmVlbiA9IG5ldyBQYWludGVyU2NyZWVuKGNvbnRleHQsIHtcXG4gICAgICAgIHVuaWZvcm1DYW1lcmEsXFxuICAgICAgICBpbWFnZUxldHRlcnMsXFxuICAgICAgICBpbWFnZUR1c3QsXFxuICAgICAgICBhc3NldFNjcmVlbjogYXNzZXRzLmdsYi5zY3JlZW4sXFxuICAgICAgICBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IGdlb21ldHJ5ID0gYXNzZXRzLmdsYi5zY3JlZW4ubWFrZUdlb21ldHJ5KHtcXG4gICAgICAgIG1lc2hJbmRleDogXFxcIk1lc2hcXFwiLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XFxuICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcXG4gICAgfSlcXG4gICAgY29uc3QgZm9vdCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICBnZW9tZXRyeSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIHBhaW50ZXJTa3lib3gsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIGZvb3QsIHBhaW50ZXJTY3JlZW5dLFxcbiAgICAgICAgfSksXFxuICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IGFuZ1ggPSBNYXRoLmFicygxMCAqIE1hdGguc2luKHRpbWUgKiAwLjM0MSkpXFxuICAgICAgICAgICAgY29uc3QgYW5nWSA9IDMwICogTWF0aC5zaW4odGltZSAqIDAuNSlcXG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oYW5nWCwgYW5nWSwgMClcXG4gICAgICAgICAgICBjYW1lcmFTa3lib3guem9vbSA9IDAuM1xcbiAgICAgICAgICAgIGNhbWVyYVNreWJveC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oYW5nWCwgYW5nWSArIDE2MCwgMClcXG4gICAgICAgIH0sXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkRGF0YUdsYixcXG4gICAgdGdkTG9hZEZvbnQsXFxuICAgIFRnZE1hdGVyaWFsR2xvYmFsLFxcbiAgICBUZ2RQYWludGVyLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyUHJvZ3JhbSxcXG4gICAgVGdkUGFpbnRlclNreWJveCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIFRnZFRleHR1cmVDdWJlLFxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0LFxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhLFxcbiAgICBXZWJnbEltYWdlLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBTY3JlZW5VUkwgZnJvbSBcXFwiLi9zY3JlZW4uZ2xiXFxcIlxcbmltcG9ydCBEdXN0VVJMIGZyb20gXFxcIi4vZHVzdC53ZWJwXFxcIlxcbmltcG9ydCBGdXphckZvbnRVUkwgZnJvbSBcXFwiLi9GdXphcl9HWC53b2ZmMlxcXCJcXG5pbXBvcnQgaW1hZ2VQb3NYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NYLndlYnBcXFwiIC8vICtYXFxuaW1wb3J0IGltYWdlUG9zWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvcG9zWS53ZWJwXFxcIiAvLyArWVxcbmltcG9ydCBpbWFnZVBvc1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1oud2VicFxcXCIgLy8gK1pcXG5pbXBvcnQgaW1hZ2VOZWdYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdYLndlYnBcXFwiIC8vIC1YXFxuaW1wb3J0IGltYWdlTmVnWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvbmVnWS53ZWJwXFxcIiAvLyAtWVxcbmltcG9ydCBpbWFnZU5lZ1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1oud2VicFxcXCIgLy8gLVpcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMiwgMClcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg5LCA3KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KVxcbiAgICBjb25zdCBpbWFnZUxldHRlcnMgPSBhc3NldHMuaW1hZ2UubGV0dGVyc1xcbiAgICBjb25zdCBpbWFnZUR1c3QgPSBhc3NldHMuaW1hZ2UuZHVzdFxcbiAgICBjb25zdCBjYW1lcmFTa3lib3ggPSBjb250ZXh0LmNhbWVyYS5jbG9uZSgpXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhaW50ZXJTa3lib3ggPSBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XFxuICAgICAgICB0aW50OiBbMC40LCAwLjQsIDAuNCwgMV0sXFxuICAgICAgICBjYW1lcmE6IGNhbWVyYVNreWJveCxcXG4gICAgICAgIHRleHR1cmU6IHNreWJveCxcXG4gICAgfSlcXG4gICAgY29uc3QgcGFpbnRlclNjcmVlbiA9IG5ldyBQYWludGVyU2NyZWVuKGNvbnRleHQsIHtcXG4gICAgICAgIHVuaWZvcm1DYW1lcmEsXFxuICAgICAgICBpbWFnZUxldHRlcnMsXFxuICAgICAgICBpbWFnZUR1c3QsXFxuICAgICAgICBhc3NldFNjcmVlbjogYXNzZXRzLmdsYi5zY3JlZW4sXFxuICAgICAgICBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IGdlb21ldHJ5ID0gYXNzZXRzLmdsYi5zY3JlZW4ubWFrZUdlb21ldHJ5KHtcXG4gICAgICAgIG1lc2hJbmRleDogXFxcIk1lc2hcXFwiLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XFxuICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcXG4gICAgfSlcXG4gICAgY29uc3QgZm9vdCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICBnZW9tZXRyeSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIHBhaW50ZXJTa3lib3gsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIGZvb3QsIHBhaW50ZXJTY3JlZW5dLFxcbiAgICAgICAgfSksXFxuICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IGFuZ1ggPSBNYXRoLmFicygxMCAqIE1hdGguc2luKHRpbWUgKiAwLjM0MSkpXFxuICAgICAgICAgICAgY29uc3QgYW5nWSA9IDMwICogTWF0aC5zaW4odGltZSAqIDAuNSlcXG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oYW5nWCwgYW5nWSwgMClcXG4gICAgICAgICAgICBjYW1lcmFTa3lib3guem9vbSA9IDAuM1xcbiAgICAgICAgICAgIGNhbWVyYVNreWJveC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oYW5nWCwgYW5nWSArIDE2MCwgMClcXG4gICAgICAgIH0sXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcXG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGdsYjogeyBzY3JlZW46IFNjcmVlblVSTCB9LFxcbiAgICAgICAgICAgICAgICBpbWFnZTogeyBkdXN0OiBEdXN0VVJMLCBpbWFnZVBvc1gsIGltYWdlUG9zWSwgaW1hZ2VQb3NaLCBpbWFnZU5lZ1gsIGltYWdlTmVnWSwgaW1hZ2VOZWdaIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXFxuaW50ZXJmYWNlIFBhaW50ZXJTY3JlZW5PcHRpb25zIHtcXG4gICAgaW1hZ2VMZXR0ZXJzOiBXZWJnbEltYWdlXFxuICAgIGltYWdlRHVzdDogV2ViZ2xJbWFnZVxcbiAgICB1bmlmb3JtQ2FtZXJhOiBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhXFxuICAgIGFzc2V0U2NyZWVuOiBUZ2REYXRhR2xiXFxuICAgIHNreWJveDogVGdkVGV4dHVyZUN1YmVcXG59XFxuXFxuY2xhc3MgUGFpbnRlclNjcmVlbiBleHRlbmRzIFRnZFBhaW50ZXIge1xcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmVMZXR0ZXJzOiBUZ2RUZXh0dXJlMkRcXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlRHVzdDogVGdkVGV4dHVyZTJEXFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogVGdkUGFpbnRlclByb2dyYW1cXG4gICAgcHJpdmF0ZSByZWFkb25seSB1bmlmb3JtQmxvY2s6IFRnZFVuaWZvcm1CdWZmZXJPYmplY3Q8XFxcInVuaVRpbWVcXFwiPlxcblxcbiAgICBjb25zdHJ1Y3RvcihcXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0LFxcbiAgICAgICAgeyB1bmlmb3JtQ2FtZXJhLCBpbWFnZUR1c3QsIGFzc2V0U2NyZWVuLCBza3lib3ggfTogUGFpbnRlclNjcmVlbk9wdGlvbnMsXFxuICAgICkge1xcbiAgICAgICAgc3VwZXIoKVxcbiAgICAgICAgY29uc3QgVyA9IDNcXG4gICAgICAgIGNvbnN0IEggPSAyXFxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGFzc2V0U2NyZWVuLmdldE1lc2hQcmltaXRpdmVJbmRpY2VzKFxcXCJTY3JlZW5cXFwiKVxcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGFzc2V0U2NyZWVuLm1ha2VEYXRhc2V0KHtcXG4gICAgICAgICAgICBtZXNoSW5kZXg6IFxcXCJTY3JlZW5cXFwiLFxcbiAgICAgICAgfSlcXG4gICAgICAgIGRhdGFzZXQuZGVidWcoKVxcbiAgICAgICAgY29uc3QgdW5pZm9ybUJsb2NrID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgICAgIHVuaVRpbWU6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pXFxuICAgICAgICB0aGlzLnVuaWZvcm1CbG9jayA9IHVuaWZvcm1CbG9ja1xcbiAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycyA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcbiAgICAgICAgICAgICAgICB3cmFwUjogXFxcIlJFUEVBVFxcXCIsXFxuICAgICAgICAgICAgICAgIHdyYXBTOiBcXFwiUkVQRUFUXFxcIixcXG4gICAgICAgICAgICAgICAgd3JhcFQ6IFxcXCJSRVBFQVRcXFwiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KVxcbiAgICAgICAgY29uc3Qgc2NhbGUgPSA1MTJcXG4gICAgICAgIGNvbnN0IHsgY3R4LCBjYW52YXMgfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQoVyAqIHNjYWxlLCBIICogc2NhbGUgKiAyKVxcbiAgICAgICAgdGhpcy5pbml0Q2FudmFzKGNhbnZhcywgY3R4KVxcbiAgICAgICAgdGhpcy5sb2FkRm9udChjYW52YXMsIGN0eClcXG4gICAgICAgIHRoaXMudGV4dHVyZUR1c3QgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoaW1hZ2VEdXN0KVxcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbmV3IFRnZFBhaW50ZXJQcm9ncmFtKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkcmF3TW9kZTogXFxcIlRSSUFOR0xFU1xcXCIsXFxuICAgICAgICAgICAgc3RhdGU6IHtcXG4gICAgICAgICAgICAgICAgYmxlbmQ6IFxcXCJhZGRcXFwiLFxcbiAgICAgICAgICAgICAgICBjdWxsOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7IHVuaWZvcm1DYW1lcmEsIHVuaWZvcm1CbG9jayB9LFxcbiAgICAgICAgICAgIGRhdGFzZXQsXFxuICAgICAgICAgICAgZWxlbWVudHMsXFxuICAgICAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICAgICAgdW5pVGV4dHVyZUxldHRlcnM6IHRoaXMudGV4dHVyZUxldHRlcnMsXFxuICAgICAgICAgICAgICAgIHVuaVRleHR1cmVEdXN0OiB0aGlzLnRleHR1cmVEdXN0LFxcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlU2t5Ym94OiBza3lib3gsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB2YXJ5aW5nOiB7XFxuICAgICAgICAgICAgICAgIHZhclVWOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICAgICAgICAgIHZhck5vcm1hbDogXFxcInZlYzNcXFwiLFxcbiAgICAgICAgICAgICAgICB2YXJQb3NpdGlvbjogXFxcInZlYzRcXFwiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdmVydDoge1xcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgXFxcInZhck5vcm1hbCA9IE5PUk1BTDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZhclVWID0gVEVYQ09PUkRfMDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZhclBvc2l0aW9uID0gdmVjNChQT1NJVElPTiwgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImdsX1Bvc2l0aW9uID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIHVuaU1vZGVsVmlld01hdHJpeCAqIHZhclBvc2l0aW9uO1xcXCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBmcmFnOiB7XFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZUxldHRlcnMsIHZlYzIoMS4wLCAuNSkgKiB2YXJVViArIHZlYzIoMCwgMC4wNSAqIHVuaVRpbWUpKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImZsb2F0IGRpc3QgPSBmcmFjdCh1bmlUaW1lKSAtIGZyYWN0KHZhclVWLnkpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiaWYgKGRpc3QgPCAwLjApIGRpc3QgKz0gMS4wO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZGlzdCA9IDEuMCAvICg2LjAgKiBkaXN0KTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImNvbG9yLnJnYiAqPSBkaXN0ICogKGdsX0Zyb250RmFjaW5nID8gMS4wIDogMC4xNSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJjb2xvci5yZ2IgKj0gdGV4dHVyZSh1bmlUZXh0dXJlRHVzdCwgdmFyVVYpLnI7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSBjb2xvcjtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImlmICghZ2xfRnJvbnRGYWNpbmcpIHJldHVybjtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZlYzMgTiA9IG5vcm1hbGl6ZSh2YXJOb3JtYWwpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmVjMyBWID0gbm9ybWFsaXplKHVuaUNhbWVyYVBvc2l0aW9uIC0gdmFyUG9zaXRpb24ueHl6KTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZlYzMgUiA9IHJlZmxlY3QoLVYsIE4pO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmVjMyBzcGVjdWxhciA9IHRleHR1cmVMb2QodW5pVGV4dHVyZVNreWJveCwgUiwgMC4wKS5yZ2I7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJzcGVjdWxhciA9IHBvdyhzcGVjdWxhciwgdmVjMyg1LjApKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcIkZyYWdDb2xvci5yZ2IgKz0gc3BlY3VsYXIgKiAuNTtcXFwiLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KVxcbiAgICB9XFxuXFxuICAgIGRlbGV0ZSgpIHtcXG4gICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMuZGVsZXRlKClcXG4gICAgICAgIHRoaXMucHJvZ3JhbS5kZWxldGUoKVxcbiAgICB9XFxuXFxuICAgIHBhaW50KHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xcbiAgICAgICAgdGhpcy51bmlmb3JtQmxvY2sudmFsdWVzLnVuaVRpbWUgPSB0aW1lXFxuICAgICAgICB0aGlzLnByb2dyYW0ucGFpbnQodGltZSwgZGVsdGEpXFxuICAgIH1cXG5cXG4gICAgcHJpdmF0ZSBpbml0Q2FudmFzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XFxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhc1xcbiAgICAgICAgY29uc3QgdGV4dCA9IFxcXCJMb2FkaW5nLi4uXFxcIlxcbiAgICAgICAgY3R4LmZvbnQgPSBgYm9sZCAke3dpZHRoIC8gN31weCBtb25vc3BhY2VgXFxuICAgICAgICBjb25zdCBtZWFzdXJlID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpXFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXFxcIiMzZTNcXFwiXFxuICAgICAgICBjb25zdCBoID0gaGVpZ2h0IC8gNVxcbiAgICAgICAgY29uc3QgeCA9ICh3aWR0aCAtIG1lYXN1cmUud2lkdGgpIC8gMlxcbiAgICAgICAgZm9yIChsZXQgeSA9IGg7IHkgPCBoZWlnaHQ7IHkgKz0gaCkge1xcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KVxcbiAgICAgICAgfVxcbiAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycy5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgfVxcblxcbiAgICBwcml2YXRlIGxvYWRGb250KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XFxuICAgICAgICB0Z2RMb2FkRm9udChcXFwiRnV6YXJcXFwiLCBGdXphckZvbnRVUkwpLnRoZW4oKCkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzXFxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KVxcbiAgICAgICAgICAgIGNvbnN0IGZvbnRTaXplID0gd2lkdGggLyA4XFxuICAgICAgICAgICAgY29uc3QgbWFyZ2luID0gZm9udFNpemUgLyAzXFxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgaXRhbGljICR7Zm9udFNpemV9cHggRnV6YXJgXFxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFxcXCIjM2UzXFxcIlxcbiAgICAgICAgICAgIGxldCB4ID0gbWFyZ2luXFxuICAgICAgICAgICAgbGV0IHkgPSBmb250U2l6ZSAqIDNcXG4gICAgICAgICAgICBsZXQgYm9sZCA9IGZhbHNlXFxuICAgICAgICAgICAgbGV0IGl0YWxpYyA9IGZhbHNlXFxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGAqRnV6YXIgaXMgdGhlIGJlc3QgZm9udCBldmVyIG1hZGUgaW4gdGhpcyB3b3JsZCBvZiBtYWRuZXNzLiBJdCB3YXMgZW5naW5lZXJlZCBieSBhbiB1bmtub3duIF9nZW5pdXMgaGlkZGVuIGluIGEgc3dpc3MgY2l0eSBjYWxsZWQgR2VuZXZhLiBcXFwiMDEyMzQ1Njc4OVxcXCJgXFxuICAgICAgICAgICAgZm9yIChjb25zdCB3b3JkIG9mIHRleHQuc3BsaXQoXFxcIiBcXFwiKSkge1xcbiAgICAgICAgICAgICAgICBpdGFsaWMgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICBib2xkID0gZmFsc2VcXG4gICAgICAgICAgICAgICAgaWYgKHdvcmQuc3RhcnRzV2l0aChcXFwiX1xcXCIpKSBpdGFsaWMgPSB0cnVlXFxuICAgICAgICAgICAgICAgIGlmICh3b3JkLnN0YXJ0c1dpdGgoXFxcIipcXFwiKSkgaXRhbGljID0gZmFsc2VcXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW5Xb3JkID0gcmVtb3ZlU3R5bGUod29yZClcXG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtib2xkID8gXFxcImJvbGQgXFxcIiA6IFxcXCJcXFwifSR7aXRhbGljID8gXFxcIml0YWxpYyBcXFwiIDogXFxcIlxcXCJ9ICR7Zm9udFNpemV9cHggRnV6YXJgXFxuICAgICAgICAgICAgICAgIGNvbnN0IG1lYXN1cmUgPSBjdHgubWVhc3VyZVRleHQoYCR7Y2xlYW5Xb3JkfSBgKVxcbiAgICAgICAgICAgICAgICBpZiAoeCA+IHdpZHRoIC0gbWVhc3VyZS53aWR0aCAtIDIgKiBtYXJnaW4pIHtcXG4gICAgICAgICAgICAgICAgICAgIHggPSBtYXJnaW5cXG4gICAgICAgICAgICAgICAgICAgIHkgKz0gZm9udFNpemVcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoY2xlYW5Xb3JkLCB4LCB5KVxcbiAgICAgICAgICAgICAgICB4ICs9IG1lYXN1cmUud2lkdGhcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNVxcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFxcXCIjNWY1N1xcXCJcXG4gICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IGhlaWdodDsgaCArPSBmb250U2l6ZSAvIDgpIHtcXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaCkgKyAwLjVcXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpXFxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgeSlcXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCwgeSlcXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMubG9hZEJpdG1hcChjYW52YXMpXFxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0pXFxuICAgIH1cXG59XFxuXFxuZnVuY3Rpb24gcmVtb3ZlU3R5bGUod29yZDogc3RyaW5nKSB7XFxuICAgIHdoaWxlIChcXFwiKl9cXFwiLmluY2x1ZGVzKHdvcmQuY2hhckF0KDApKSkgd29yZCA9IHdvcmQuc2xpY2UoMSlcXG4gICAgcmV0dXJuIHdvcmRcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCxcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkRGF0YUdsYixcbiAgICB0Z2RMb2FkRm9udCxcbiAgICBUZ2RNYXRlcmlhbEdsb2JhbCxcbiAgICBUZ2RQYWludGVyLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyUHJvZ3JhbSxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgVGdkVGV4dHVyZUN1YmUsXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdCxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhLFxuICAgIFdlYmdsSW1hZ2UsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgU2NyZWVuVVJMIGZyb20gXCIuL3NjcmVlbi5nbGJcIlxuaW1wb3J0IER1c3RVUkwgZnJvbSBcIi4vZHVzdC53ZWJwXCJcbmltcG9ydCBGdXphckZvbnRVUkwgZnJvbSBcIi4vRnV6YXJfR1gud29mZjJcIlxuaW1wb3J0IGltYWdlUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1gud2VicFwiIC8vICtYXG5pbXBvcnQgaW1hZ2VQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvcG9zWS53ZWJwXCIgLy8gK1lcbmltcG9ydCBpbWFnZVBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NaLndlYnBcIiAvLyArWlxuaW1wb3J0IGltYWdlTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1gud2VicFwiIC8vIC1YXG5pbXBvcnQgaW1hZ2VOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvbmVnWS53ZWJwXCIgLy8gLVlcbmltcG9ydCBpbWFnZU5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdaLndlYnBcIiAvLyAtWlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAyLCAwKVxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoOSwgNylcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KVxuICAgIGNvbnN0IGltYWdlTGV0dGVycyA9IGFzc2V0cy5pbWFnZS5sZXR0ZXJzXG4gICAgY29uc3QgaW1hZ2VEdXN0ID0gYXNzZXRzLmltYWdlLmR1c3RcbiAgICBjb25zdCBjYW1lcmFTa3lib3ggPSBjb250ZXh0LmNhbWVyYS5jbG9uZSgpXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NYLFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1ksXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLmltYWdlUG9zWixcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdYLFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1ksXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLmltYWdlTmVnWixcbiAgICB9KVxuICAgIGNvbnN0IHBhaW50ZXJTa3lib3ggPSBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XG4gICAgICAgIHRpbnQ6IFswLjQsIDAuNCwgMC40LCAxXSxcbiAgICAgICAgY2FtZXJhOiBjYW1lcmFTa3lib3gsXG4gICAgICAgIHRleHR1cmU6IHNreWJveCxcbiAgICB9KVxuICAgIGNvbnN0IHBhaW50ZXJTY3JlZW4gPSBuZXcgUGFpbnRlclNjcmVlbihjb250ZXh0LCB7XG4gICAgICAgIHVuaWZvcm1DYW1lcmEsXG4gICAgICAgIGltYWdlTGV0dGVycyxcbiAgICAgICAgaW1hZ2VEdXN0LFxuICAgICAgICBhc3NldFNjcmVlbjogYXNzZXRzLmdsYi5zY3JlZW4sXG4gICAgICAgIHNreWJveCxcbiAgICB9KVxuICAgIGNvbnN0IGdlb21ldHJ5ID0gYXNzZXRzLmdsYi5zY3JlZW4ubWFrZUdlb21ldHJ5KHtcbiAgICAgICAgbWVzaEluZGV4OiBcIk1lc2hcIixcbiAgICB9KVxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcbiAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXG4gICAgfSlcbiAgICBjb25zdCBmb290ID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgZ2VvbWV0cnksXG4gICAgICAgIG1hdGVyaWFsLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIHBhaW50ZXJTa3lib3gsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgZm9vdCwgcGFpbnRlclNjcmVlbl0sXG4gICAgICAgIH0pLFxuICAgICAgICAodGltZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW5nWCA9IE1hdGguYWJzKDEwICogTWF0aC5zaW4odGltZSAqIDAuMzQxKSlcbiAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSAzMCAqIE1hdGguc2luKHRpbWUgKiAwLjUpXG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oYW5nWCwgYW5nWSwgMClcbiAgICAgICAgICAgIGNhbWVyYVNreWJveC56b29tID0gMC4zXG4gICAgICAgICAgICBjYW1lcmFTa3lib3gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1kgKyAxNjAsIDApXG4gICAgICAgIH0sXG4gICAgKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjogeyBzY3JlZW46IFNjcmVlblVSTCB9LFxuICAgICAgICAgICAgICAgIGltYWdlOiB7IGR1c3Q6IER1c3RVUkwsIGltYWdlUG9zWCwgaW1hZ2VQb3NZLCBpbWFnZVBvc1osIGltYWdlTmVnWCwgaW1hZ2VOZWdZLCBpbWFnZU5lZ1ogfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5pbnRlcmZhY2UgUGFpbnRlclNjcmVlbk9wdGlvbnMge1xuICAgIGltYWdlTGV0dGVyczogV2ViZ2xJbWFnZVxuICAgIGltYWdlRHVzdDogV2ViZ2xJbWFnZVxuICAgIHVuaWZvcm1DYW1lcmE6IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmFcbiAgICBhc3NldFNjcmVlbjogVGdkRGF0YUdsYlxuICAgIHNreWJveDogVGdkVGV4dHVyZUN1YmVcbn1cblxuY2xhc3MgUGFpbnRlclNjcmVlbiBleHRlbmRzIFRnZFBhaW50ZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZUxldHRlcnM6IFRnZFRleHR1cmUyRFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZUR1c3Q6IFRnZFRleHR1cmUyRFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogVGdkUGFpbnRlclByb2dyYW1cbiAgICBwcml2YXRlIHJlYWRvbmx5IHVuaWZvcm1CbG9jazogVGdkVW5pZm9ybUJ1ZmZlck9iamVjdDxcInVuaVRpbWVcIj5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcbiAgICAgICAgeyB1bmlmb3JtQ2FtZXJhLCBpbWFnZUR1c3QsIGFzc2V0U2NyZWVuLCBza3lib3ggfTogUGFpbnRlclNjcmVlbk9wdGlvbnMsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgY29uc3QgVyA9IDNcbiAgICAgICAgY29uc3QgSCA9IDJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBhc3NldFNjcmVlbi5nZXRNZXNoUHJpbWl0aXZlSW5kaWNlcyhcIlNjcmVlblwiKVxuICAgICAgICBjb25zdCBkYXRhc2V0ID0gYXNzZXRTY3JlZW4ubWFrZURhdGFzZXQoe1xuICAgICAgICAgICAgbWVzaEluZGV4OiBcIlNjcmVlblwiLFxuICAgICAgICB9KVxuICAgICAgICBkYXRhc2V0LmRlYnVnKClcbiAgICAgICAgY29uc3QgdW5pZm9ybUJsb2NrID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1bmlUaW1lOiBcImZsb2F0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnVuaWZvcm1CbG9jayA9IHVuaWZvcm1CbG9ja1xuICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgICAgIHdyYXBSOiBcIlJFUEVBVFwiLFxuICAgICAgICAgICAgICAgIHdyYXBTOiBcIlJFUEVBVFwiLFxuICAgICAgICAgICAgICAgIHdyYXBUOiBcIlJFUEVBVFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgc2NhbGUgPSA1MTJcbiAgICAgICAgY29uc3QgeyBjdHgsIGNhbnZhcyB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRChXICogc2NhbGUsIEggKiBzY2FsZSAqIDIpXG4gICAgICAgIHRoaXMuaW5pdENhbnZhcyhjYW52YXMsIGN0eClcbiAgICAgICAgdGhpcy5sb2FkRm9udChjYW52YXMsIGN0eClcbiAgICAgICAgdGhpcy50ZXh0dXJlRHVzdCA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChpbWFnZUR1c3QpXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBUZ2RQYWludGVyUHJvZ3JhbShjb250ZXh0LCB7XG4gICAgICAgICAgICBkcmF3TW9kZTogXCJUUklBTkdMRVNcIixcbiAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgYmxlbmQ6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgY3VsbDogXCJvZmZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmlmb3JtczogeyB1bmlmb3JtQ2FtZXJhLCB1bmlmb3JtQmxvY2sgfSxcbiAgICAgICAgICAgIGRhdGFzZXQsXG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHRleHR1cmVzOiB7XG4gICAgICAgICAgICAgICAgdW5pVGV4dHVyZUxldHRlcnM6IHRoaXMudGV4dHVyZUxldHRlcnMsXG4gICAgICAgICAgICAgICAgdW5pVGV4dHVyZUR1c3Q6IHRoaXMudGV4dHVyZUR1c3QsXG4gICAgICAgICAgICAgICAgdW5pVGV4dHVyZVNreWJveDogc2t5Ym94LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcnlpbmc6IHtcbiAgICAgICAgICAgICAgICB2YXJVVjogXCJ2ZWMyXCIsXG4gICAgICAgICAgICAgICAgdmFyTm9ybWFsOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICB2YXJQb3NpdGlvbjogXCJ2ZWM0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmVydDoge1xuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidmFyTm9ybWFsID0gTk9STUFMO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZhclVWID0gVEVYQ09PUkRfMDtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJQb3NpdGlvbiA9IHZlYzQoUE9TSVRJT04sIDEuMCk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ2xfUG9zaXRpb24gPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogdmFyUG9zaXRpb247XCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcmFnOiB7XG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlTGV0dGVycywgdmVjMigxLjAsIC41KSAqIHZhclVWICsgdmVjMigwLCAwLjA1ICogdW5pVGltZSkpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImZsb2F0IGRpc3QgPSBmcmFjdCh1bmlUaW1lKSAtIGZyYWN0KHZhclVWLnkpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImlmIChkaXN0IDwgMC4wKSBkaXN0ICs9IDEuMDtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXN0ID0gMS4wIC8gKDYuMCAqIGRpc3QpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yLnJnYiAqPSBkaXN0ICogKGdsX0Zyb250RmFjaW5nID8gMS4wIDogMC4xNSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3IucmdiICo9IHRleHR1cmUodW5pVGV4dHVyZUR1c3QsIHZhclVWKS5yO1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkZyYWdDb2xvciA9IGNvbG9yO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImlmICghZ2xfRnJvbnRGYWNpbmcpIHJldHVybjtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMzIE4gPSBub3JtYWxpemUodmFyTm9ybWFsKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMzIFYgPSBub3JtYWxpemUodW5pQ2FtZXJhUG9zaXRpb24gLSB2YXJQb3NpdGlvbi54eXopO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZlYzMgUiA9IHJlZmxlY3QoLVYsIE4pO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZlYzMgc3BlY3VsYXIgPSB0ZXh0dXJlTG9kKHVuaVRleHR1cmVTa3lib3gsIFIsIDAuMCkucmdiO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInNwZWN1bGFyID0gcG93KHNwZWN1bGFyLCB2ZWMzKDUuMCkpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkZyYWdDb2xvci5yZ2IgKz0gc3BlY3VsYXIgKiAuNTtcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMuZGVsZXRlKClcbiAgICAgICAgdGhpcy5wcm9ncmFtLmRlbGV0ZSgpXG4gICAgfVxuXG4gICAgcGFpbnQodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybUJsb2NrLnZhbHVlcy51bmlUaW1lID0gdGltZVxuICAgICAgICB0aGlzLnByb2dyYW0ucGFpbnQodGltZSwgZGVsdGEpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0Q2FudmFzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzXG4gICAgICAgIGNvbnN0IHRleHQgPSBcIkxvYWRpbmcuLi5cIlxuICAgICAgICBjdHguZm9udCA9IGBib2xkICR7d2lkdGggLyA3fXB4IG1vbm9zcGFjZWBcbiAgICAgICAgY29uc3QgbWVhc3VyZSA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjM2UzXCJcbiAgICAgICAgY29uc3QgaCA9IGhlaWdodCAvIDVcbiAgICAgICAgY29uc3QgeCA9ICh3aWR0aCAtIG1lYXN1cmUud2lkdGgpIC8gMlxuICAgICAgICBmb3IgKGxldCB5ID0gaDsgeSA8IGhlaWdodDsgeSArPSBoKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgeCwgeSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzLmxvYWRCaXRtYXAoY2FudmFzKVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEZvbnQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgdGdkTG9hZEZvbnQoXCJGdXphclwiLCBGdXphckZvbnRVUkwpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXNcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgICAgIGNvbnN0IGZvbnRTaXplID0gd2lkdGggLyA4XG4gICAgICAgICAgICBjb25zdCBtYXJnaW4gPSBmb250U2l6ZSAvIDNcbiAgICAgICAgICAgIGN0eC5mb250ID0gYGl0YWxpYyAke2ZvbnRTaXplfXB4IEZ1emFyYFxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzNlM1wiXG4gICAgICAgICAgICBsZXQgeCA9IG1hcmdpblxuICAgICAgICAgICAgbGV0IHkgPSBmb250U2l6ZSAqIDNcbiAgICAgICAgICAgIGxldCBib2xkID0gZmFsc2VcbiAgICAgICAgICAgIGxldCBpdGFsaWMgPSBmYWxzZVxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGAqRnV6YXIgaXMgdGhlIGJlc3QgZm9udCBldmVyIG1hZGUgaW4gdGhpcyB3b3JsZCBvZiBtYWRuZXNzLiBJdCB3YXMgZW5naW5lZXJlZCBieSBhbiB1bmtub3duIF9nZW5pdXMgaGlkZGVuIGluIGEgc3dpc3MgY2l0eSBjYWxsZWQgR2VuZXZhLiBcIjAxMjM0NTY3ODlcImBcbiAgICAgICAgICAgIGZvciAoY29uc3Qgd29yZCBvZiB0ZXh0LnNwbGl0KFwiIFwiKSkge1xuICAgICAgICAgICAgICAgIGl0YWxpYyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgYm9sZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgaWYgKHdvcmQuc3RhcnRzV2l0aChcIl9cIikpIGl0YWxpYyA9IHRydWVcbiAgICAgICAgICAgICAgICBpZiAod29yZC5zdGFydHNXaXRoKFwiKlwiKSkgaXRhbGljID0gZmFsc2VcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbldvcmQgPSByZW1vdmVTdHlsZSh3b3JkKVxuICAgICAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Ym9sZCA/IFwiYm9sZCBcIiA6IFwiXCJ9JHtpdGFsaWMgPyBcIml0YWxpYyBcIiA6IFwiXCJ9ICR7Zm9udFNpemV9cHggRnV6YXJgXG4gICAgICAgICAgICAgICAgY29uc3QgbWVhc3VyZSA9IGN0eC5tZWFzdXJlVGV4dChgJHtjbGVhbldvcmR9IGApXG4gICAgICAgICAgICAgICAgaWYgKHggPiB3aWR0aCAtIG1lYXN1cmUud2lkdGggLSAyICogbWFyZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBtYXJnaW5cbiAgICAgICAgICAgICAgICAgICAgeSArPSBmb250U2l6ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoY2xlYW5Xb3JkLCB4LCB5KVxuICAgICAgICAgICAgICAgIHggKz0gbWVhc3VyZS53aWR0aFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNVxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjNWY1N1wiXG4gICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IGhlaWdodDsgaCArPSBmb250U2l6ZSAvIDgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihoKSArIDAuNVxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgeSlcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoLCB5KVxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycy5sb2FkQml0bWFwKGNhbnZhcylcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5wYWludCgpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZSh3b3JkOiBzdHJpbmcpIHtcbiAgICB3aGlsZSAoXCIqX1wiLmluY2x1ZGVzKHdvcmQuY2hhckF0KDApKSkgd29yZCA9IHdvcmQuc2xpY2UoMSlcbiAgICByZXR1cm4gd29yZFxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29kZVZpZXdlclwiXG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7Ozs7Ozs7O0FDRWpKO0FBQ2lCO0FBQ1c7QUFDdkI7QUFFOUIsTUFBTSxLQUFLLEdBQUcsRUFBQyxXQUFXLEVBQUMsODdGQUE4N0YsRUFBQztBQUMxOUYsTUFBTSxJQUFJLEdBQUcsc2hIQUFzaEg7QUFFcGhILFNBQVMsYUFBYTtJQUNqQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLHlDQUFjLENBQUMsS0FBSyxDQUFDO0lBQzdDLE9BQU8sc0dBQ0gsb0RBQUssU0FBUyxFQUFDLFdBQVcsWUFBQywyQ0FBQyxzQ0FBSSxLQUFHLEdBQU0sRUFDekMscURBQUssU0FBUyxFQUFDLFlBQVksYUFDdkIsOERBQ0ksMkNBQUMseUNBQVUsSUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFDdkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEdBQ3JDLEdBQ1gsRUFDTiwyQ0FBQyx1REFBVSxJQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUksSUFDdkQsSUFDUDtBQUNQLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNoQnNCO0FBRWlCO0FBR3hDLFNBQVMsSUFBSSxDQUFDLE9BQW1CO0lBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxFQUFFO0lBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksK0NBQWUsQ0FBQyxPQUFPLEVBQUU7UUFDdkMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25CLEtBQUssRUFBRSxDQUFDO0tBQ1gsQ0FBQztJQUNGLE1BQU0sYUFBYSxHQUFHLElBQUksc0RBQXNCLENBQUMsT0FBTyxFQUFFO1FBQ3RELFFBQVEsRUFBRTtZQUNOLGtCQUFrQixFQUFFLE1BQU07WUFDMUIsbUJBQW1CLEVBQUUsTUFBTTtTQUM5QjtLQUNKLENBQUM7SUFDRixNQUFNLGFBQWEsR0FBRyxJQUFJLHNEQUFzQixDQUFDLE9BQU8sRUFBRTtRQUN0RCxRQUFRLEVBQUU7WUFDTixTQUFTLEVBQUUsTUFBTTtTQUNwQjtLQUNKLENBQUM7SUFDRixNQUFNLFNBQVMsR0FBRyxJQUFJLHVDQUFPLEVBQUU7SUFDL0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxpREFBaUIsQ0FBQyxPQUFPLEVBQUU7UUFDM0MsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUU7WUFDTixhQUFhO1lBQ2IsYUFBYTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNMLFFBQVEsRUFBRSxNQUFNO1NBQ25CO1FBQ0QsT0FBTyxFQUFFO1lBQ0w7Z0JBQ0ksT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRTt3QkFDSixJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUUsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3pEO2lCQUNKO2FBQ0o7WUFDRDtnQkFDSSxPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPLEVBQUU7b0JBQ0wsTUFBTSxFQUFFO3dCQUNKLElBQUksRUFBRSxNQUFNO3dCQUNaLElBQUksRUFBRSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3REO29CQUNELE1BQU0sRUFBRTt3QkFDSixJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUUsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNsRTtpQkFDSjthQUNKO1NBQ0o7UUFDRCxJQUFJLEVBQUU7WUFDRixRQUFRLEVBQUU7Z0JBQ04sK0JBQStCO2dCQUMvQiw0RUFBNEU7Z0JBQzVFLHlFQUF5RTtnQkFDekUsdUJBQXVCO2dCQUN2QixnQ0FBZ0M7Z0JBQ2hDLHNCQUFzQjthQUN6QjtTQUNKO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsUUFBUSxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdEM7UUFDRCxLQUFLLEVBQUU7WUFDSCxLQUFLLEVBQUUsTUFBTTtZQUNiLEtBQUssRUFBRSxLQUFLO1lBQ1osSUFBSSxFQUFFLEtBQUs7U0FDZDtRQUNELFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDWCxhQUFhLENBQUMsTUFBTSxFQUFFO1lBQ3RCLGFBQWEsQ0FBQyxNQUFNLEVBQUU7UUFDMUIsQ0FBQztLQUNKLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUNQLEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPO1FBQzFCLGFBQWEsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGVBQWU7UUFDaEUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCO1FBQ2xFLE1BQU0sU0FBUyxHQUFHLENBQUM7UUFDbkIsU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUs7UUFDdkMsU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU07UUFDeEMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUztJQUM5QyxDQUFDLEVBQ0QsS0FBSyxFQUNMLE9BQU8sQ0FLVjtJQUNELE9BQU8sQ0FBQyxLQUFLLEVBQUU7SUFDZixPQUFPLENBQUMsS0FBSyxFQUFFO0FBQ25CLENBQUM7QUFHYyxTQUFTLElBQUk7SUFDeEIsT0FBTyxDQUNILDJDQUFDLGdEQUFJLElBQ0QsT0FBTyxFQUFFLElBQUksRUFDYixLQUFLLFFBQ0wsS0FBSyxFQUFDLE9BQU8sRUFDYixNQUFNLEVBQUMsT0FBTyxFQUNkLFVBQVUsRUFBRTtZQUNSLFlBQVksRUFBRSxJQUFJO1NBQ3JCLEVBQ0QsT0FBTyxFQUFFO1lBQ0wscUJBQXFCLEVBQUUsSUFBSTtTQUM5QixHQUNILENBQ0w7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEh3QjtBQUNpQjtBQUNXO0FBQ3JCO0FBRWhDLE1BQU0sS0FBSyxHQUFHLEVBQUMsV0FBVyxFQUFDLHd6REFBd3pELEVBQUM7QUFDcDFELE1BQU0sSUFBSSxHQUFHLDJvVEFBMm9UO0FBRXpvVCxTQUFTLGFBQWE7SUFDakMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyx5Q0FBYyxDQUFDLEtBQUssQ0FBQztJQUM3QyxPQUFPLHNHQUNILG9EQUFLLFNBQVMsRUFBQyxXQUFXLFlBQUMsMkNBQUMsd0NBQUksS0FBRyxHQUFNLEVBQ3pDLHFEQUFLLFNBQVMsRUFBQyxZQUFZLGFBQ3ZCLDhEQUNJLDJDQUFDLHlDQUFVLElBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUNyQyxHQUNYLEVBQ04sMkNBQUMsdURBQVUsSUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFJLElBQ3ZELElBQ1A7QUFDUCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHNCO0FBRTZCO0FBRWhCO0FBQ0g7QUFDVTtBQUMyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFdEUsU0FBUyxJQUFJLENBQUMsT0FBbUIsRUFBRSxNQUFjO0lBRTdDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSwrQ0FBZSxDQUFDLE9BQU8sRUFBRTtRQUN2QyxLQUFLLEVBQUUsQ0FBQztLQUNYLENBQUM7SUFDRixNQUFNLGFBQWEsR0FBRyxJQUFJLDREQUE0QixDQUFDLE9BQU8sQ0FBQztJQUMvRCxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU87SUFDekMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQ25DLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQzNDLE1BQU0sTUFBTSxHQUFHLElBQUksOENBQWMsQ0FBQyxPQUFPLEVBQUU7UUFDdkMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUztRQUNqQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTO1FBQ2pDLFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVM7UUFDakMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUztRQUNqQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTO1FBQ2pDLFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVM7S0FDcEMsQ0FBQztJQUNGLE1BQU0sYUFBYSxHQUFHLElBQUksZ0RBQWdCLENBQUMsT0FBTyxFQUFFO1FBQ2hELElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN4QixNQUFNLEVBQUUsWUFBWTtRQUNwQixPQUFPLEVBQUUsTUFBTTtLQUNsQixDQUFDO0lBQ0YsTUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFO1FBQzdDLGFBQWE7UUFDYixZQUFZO1FBQ1osU0FBUztRQUNULFdBQVcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU07UUFDOUIsTUFBTTtLQUNULENBQUM7SUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDNUMsU0FBUyxFQUFFLE1BQU07S0FDcEIsQ0FBQztJQUNGLE1BQU0sUUFBUSxHQUFHLElBQUksaURBQWlCLENBQUM7UUFDbkMsWUFBWSxFQUFFLE1BQU07S0FDdkIsQ0FBQztJQUNGLE1BQU0sSUFBSSxHQUFHLElBQUksOENBQWMsQ0FBQyxPQUFPLEVBQUU7UUFDckMsUUFBUTtRQUNSLFFBQVE7S0FDWCxDQUFDO0lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FDUCxhQUFhLEVBQ2IsSUFBSSwrQ0FBZSxDQUFDLE9BQU8sRUFBRTtRQUN6QixLQUFLLEVBQUUsTUFBTTtRQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDO0tBQ3pDLENBQUMsRUFDRixDQUFDLElBQUksRUFBRSxFQUFFO1FBQ0wsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEQsTUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN0QyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RCxZQUFZLENBQUMsSUFBSSxHQUFHLEdBQUc7UUFDdkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQyxDQUNKO0lBQ0QsT0FBTyxDQUFDLElBQUksRUFBRTtBQUVsQixDQUFDO0FBRWMsU0FBUyxJQUFJO0lBQ3hCLE9BQU8sQ0FDSCwyQ0FBQyxnREFBSSxJQUNELE9BQU8sRUFBRSxJQUFJLEVBQ2IsVUFBVSxFQUFFO1lBQ1IsWUFBWSxFQUFFLElBQUk7U0FDckIsRUFDRCxPQUFPLEVBQUU7WUFDTCxxQkFBcUIsRUFBRSxJQUFJO1NBQzlCLEVBQ0QsTUFBTSxFQUFFO1lBQ0osR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLDRCQUFTLEVBQUU7WUFDMUIsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLDJCQUFPLEVBQUUsU0FBUyxrRUFBRSxTQUFTLGtFQUFFLFNBQVMsa0VBQUUsU0FBUyxrRUFBRSxTQUFTLG1FQUFFLFNBQVMsbUVBQUU7U0FDN0YsR0FDSCxDQUNMO0FBQ0wsQ0FBQztBQVVELE1BQU0sYUFBYyxTQUFRLDBDQUFVO0lBT2Q7SUFOSCxjQUFjLENBQWM7SUFDNUIsV0FBVyxDQUFjO0lBQ3pCLE9BQU8sQ0FBbUI7SUFDMUIsWUFBWSxDQUFtQztJQUVoRSxZQUNvQixPQUFtQixFQUNuQyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBd0I7UUFFdkUsS0FBSyxFQUFFO1FBSFMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUluQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ1gsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNYLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7UUFDOUQsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUNwQyxTQUFTLEVBQUUsUUFBUTtTQUN0QixDQUFDO1FBQ0YsT0FBTyxDQUFDLEtBQUssRUFBRTtRQUNmLE1BQU0sWUFBWSxHQUFHLElBQUksc0RBQXNCLENBQUMsT0FBTyxFQUFFO1lBQ3JELFFBQVEsRUFBRTtnQkFDTixPQUFPLEVBQUUsT0FBTzthQUNuQjtTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVk7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLDRDQUFZLENBQUMsT0FBTyxFQUFFO1lBQzVDLE1BQU0sRUFBRTtnQkFDSixTQUFTLEVBQUUsUUFBUTtnQkFDbkIsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FBQztRQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUc7UUFDakIsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxnRUFBNEIsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLDRDQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNsRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaURBQWlCLENBQUMsT0FBTyxFQUFFO1lBQzFDLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLEtBQUssRUFBRTtnQkFDSCxLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsS0FBSzthQUNkO1lBQ0QsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRTtZQUN6QyxPQUFPO1lBQ1AsUUFBUTtZQUNSLFFBQVEsRUFBRTtnQkFDTixpQkFBaUIsRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDdEMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUNoQyxnQkFBZ0IsRUFBRSxNQUFNO2FBQzNCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLEtBQUssRUFBRSxNQUFNO2dCQUNiLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixXQUFXLEVBQUUsTUFBTTthQUN0QjtZQUNELElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUU7b0JBQ04scUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLG9DQUFvQztvQkFDcEMsdUVBQXVFO2lCQUMxRTthQUNKO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRTtvQkFDTiwyRkFBMkY7b0JBQzNGLCtDQUErQztvQkFDL0MsOEJBQThCO29CQUM5Qiw0QkFBNEI7b0JBQzVCLG9EQUFvRDtvQkFDcEQsZ0RBQWdEO29CQUNoRCxvQkFBb0I7b0JBQ3BCLDhCQUE4QjtvQkFDOUIsZ0NBQWdDO29CQUNoQywwREFBMEQ7b0JBQzFELDBCQUEwQjtvQkFDMUIsMkRBQTJEO29CQUMzRCxzQ0FBc0M7b0JBQ3RDLGlDQUFpQztpQkFDcEM7YUFDSjtTQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO0lBQ3pCLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUk7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBRU8sVUFBVSxDQUFDLE1BQXlCLEVBQUUsR0FBNkI7UUFDdkUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLFlBQVk7UUFDekIsR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLEtBQUssR0FBRyxDQUFDLGNBQWM7UUFDMUMsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDckMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNO1FBQ3RCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMxQyxDQUFDO0lBRU8sUUFBUSxDQUFDLE1BQXlCLEVBQUUsR0FBNkI7UUFDckUsK0NBQVcsQ0FBQyxPQUFPLEVBQUUsZ0NBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDekMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNO1lBQ2hDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO1lBQ2xDLE1BQU0sUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDO1lBQzFCLE1BQU0sTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDO1lBQzNCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxRQUFRLFVBQVU7WUFDdkMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNO1lBQ3RCLElBQUksQ0FBQyxHQUFHLE1BQU07WUFDZCxJQUFJLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQztZQUNwQixJQUFJLElBQUksR0FBRyxLQUFLO1lBQ2hCLElBQUksTUFBTSxHQUFHLEtBQUs7WUFDbEIsTUFBTSxJQUFJLEdBQUcsd0pBQXdKO1lBQ3JLLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxNQUFNLEdBQUcsS0FBSztnQkFDZCxJQUFJLEdBQUcsS0FBSztnQkFDWixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO29CQUFFLE1BQU0sR0FBRyxJQUFJO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO29CQUFFLE1BQU0sR0FBRyxLQUFLO2dCQUN4QyxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNuQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLFFBQVEsVUFBVTtnQkFDakYsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUM7b0JBQ3pDLENBQUMsR0FBRyxNQUFNO29CQUNWLENBQUMsSUFBSSxRQUFRO2dCQUNqQixDQUFDO2dCQUNELEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSztZQUN0QixDQUFDO1lBQ0QsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHO1lBQ25CLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTztZQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzVDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztnQkFDN0IsR0FBRyxDQUFDLFNBQVMsRUFBRTtnQkFDZixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNoQixDQUFDO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQ3hCLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQUVELFNBQVMsV0FBVyxDQUFDLElBQVk7SUFDN0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUQsT0FBTyxJQUFJO0FBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoUjBCO0FBQ0c7QUFFYTtBQUNNO0FBU2xDLFNBQVMsY0FBYyxDQUFDLEtBQTBCO0lBQzdELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLO0lBQ3ZCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDNUIsTUFBTSxXQUFXLEdBQThCO1lBQzNDLEdBQUcsS0FBSztZQUNSLEtBQUs7U0FDUjtRQUNELE9BQU8sMkNBQUMsb0JBQW9CLE9BQUssV0FBVyxHQUFJO0lBQ3BELENBQUM7SUFDRCxNQUFNLFVBQVUsR0FBNkI7UUFDekMsR0FBRyxLQUFLO1FBQ1IsS0FBSztLQUNSO0lBQ0QsT0FBTywyQ0FBQyxtQkFBbUIsT0FBSyxVQUFVLEdBQUk7QUFDbEQsQ0FBQztBQU1ELFNBQVMsb0JBQW9CLENBQUMsS0FBZ0M7SUFDMUQsTUFBTSxVQUFVLEdBQUcsNkJBQVksQ0FBQyxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQkFBYyxDQUFDLEtBQUssQ0FBQztJQUMvQyxNQUFNLE9BQU8sR0FBRyw2QkFBWSxDQUFxQixJQUFJLENBQUM7SUFDdEQsZ0NBQWUsQ0FBQyxHQUFHLEVBQUU7UUFDakIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU87WUFDNUIsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTTtZQUVqQixNQUFNLElBQUksR0FBRyw0Q0FBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsbURBQXFCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDaEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJO1FBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWCxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO1FBQzNCLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDZCxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDdkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDdkUsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO1FBQzFCLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDZixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFDRCxPQUFPLENBQ0gscURBQUssU0FBUyxFQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLGFBQ2hGLDhEQUNJLHFEQUFNLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFJLEdBQzdELEVBQ0wsS0FBSyxJQUFJLENBQ04sdURBQVEsU0FBUyxFQUFFLHdEQUFXLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBQyxRQUFRLFlBQ3BFLDhHQUFzRCxHQUNqRCxDQUNaLElBQ0MsQ0FDVDtBQUNMLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxLQUEwQjtJQUM3QyxNQUFNLFVBQVUsR0FBRyxDQUFDLDZEQUFnQixDQUFDO0lBQ3JDLElBQUksT0FBTyxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUMvQixDQUFDO0FBTUQsU0FBUyxtQkFBbUIsQ0FBQyxLQUErQjtJQUN4RCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDekMsT0FBTyxDQUNILG9HQUNLLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUM5Qix5REFBdUIsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsYUFDNUMsa0VBQVUsT0FBTyxHQUFXLEVBQzVCLDJDQUFDLG9CQUFvQixJQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxHQUFJLEtBRnJFLE9BQU8sQ0FHWCxDQUNiLENBQUMsR0FDSCxDQUNOO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRzBCO0FBQ2lCO0FBQ1A7QUFDTztBQUNQO0FBQ0Y7QUFDRztBQUUvQixTQUFTLHFCQUFxQixDQUFDLFFBQWdCO0lBQ2xELFFBQVEsUUFBUSxFQUFFLENBQUM7UUFDZixLQUFLLElBQUk7WUFDTCxPQUFPLHlEQUEwQjtRQUNyQyxLQUFLLEtBQUs7WUFDTixPQUFPLGtEQUFtQjtRQUM5QixLQUFLLE1BQU0sQ0FBQztRQUNaLEtBQUssTUFBTTtZQUNQLE9BQU8sbURBQW9CO1FBQy9CO1lBQ0ksT0FBTyxJQUFJO0lBQ25CLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxLQUFLLEdBQUc7SUFDVixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsT0FBTztJQUNQLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULE9BQU87SUFDUCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxNQUFNO0lBQ04sUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsTUFBTTtJQUNOLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLE1BQU07SUFDTixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0NBQ1Q7QUFFRCxNQUFNLFFBQVEsR0FBRztJQUNiLFVBQVU7SUFDVixPQUFPO0lBQ1AsU0FBUztJQUNULE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLElBQUk7SUFDSixJQUFJO0lBQ0osT0FBTztJQUNQLFdBQVc7SUFDWCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCxlQUFlO0lBQ2YsS0FBSztJQUNMLE9BQU87SUFDUCxXQUFXO0lBQ1gsUUFBUTtJQUNSLFlBQVk7SUFDWixTQUFTO0lBRVQsUUFBUTtJQUNSLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixTQUFTO0lBQ1QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsU0FBUztJQUNULGFBQWE7SUFDYixXQUFXO0lBQ1gsUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0lBQ1gsTUFBTTtJQUNOLFdBQVc7SUFDWCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFFBQVE7SUFDUixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCxlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7SUFDVixNQUFNO0lBQ04sU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVTtJQUNWLE9BQU87SUFDUCxVQUFVO0NBQ2I7QUFFRCxNQUFNLE9BQU8sR0FBRztJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUVELE1BQU0sU0FBUyxHQUFHO0lBQ2QsS0FBSztJQUNMLE1BQU07SUFDTixPQUFPO0lBQ1AsS0FBSztJQUNMLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLE1BQU07SUFDTixPQUFPO0lBQ1AsTUFBTTtJQUNOLE9BQU87SUFDUCxLQUFLO0lBQ0wsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsYUFBYTtJQUNiLE1BQU07SUFDTixNQUFNO0lBQ04sVUFBVTtJQUNWLEtBQUs7SUFDTCxPQUFPO0lBQ1AsS0FBSztJQUNMLE1BQU07SUFDTixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsYUFBYTtJQUNiLE9BQU87SUFDUCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsS0FBSztJQUNMLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLE1BQU07SUFDTixXQUFXO0lBQ1gsS0FBSztJQUNMLFVBQVU7SUFDVixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsS0FBSztJQUNMLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsTUFBTTtJQUNOLEtBQUs7SUFDTCxNQUFNO0lBQ04sWUFBWTtJQUNaLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNMLE1BQU07SUFDTixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsT0FBTztJQUNQLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjtBQUVELE1BQU0sSUFBSSxHQUFrQjtJQUN4QixPQUFPLEVBQUU7UUFDTDtZQUNJLE9BQU8sRUFBRSxrQ0FBa0M7WUFDM0MsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDZjtRQUNEO1lBQ0ksT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixVQUFVLEVBQUUsSUFBSTtZQUNoQixNQUFNLEVBQUUsSUFBSTtTQUNmO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsUUFBUTtZQUNqQixVQUFVLEVBQUUsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSTtTQUNmO0tBQ0o7SUFDRCxNQUFNLEVBQUU7UUFDSixPQUFPLEVBQ0gsMk5BQTJOO1FBQy9OLFVBQVUsRUFBRSxJQUFJO0tBQ25CO0lBQ0QsSUFBSSxFQUFFLGlCQUFpQixDQUFDLEtBQUssQ0FBQztJQUM5QixPQUFPLEVBQUUsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0lBQ3BDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDbEMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztDQUN6QztBQUVELFNBQVMsaUJBQWlCLENBQUMsS0FBZTtJQUN0QyxPQUFPO1FBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLHFCQUFxQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSxVQUFVLEVBQUUsS0FBSztRQUNqQixNQUFNLEVBQUUsSUFBSTtLQUNmO0FBQ0wsQ0FBQzs7Ozs7Ozs7OztBQ25WcUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBckI7QUFDTTs7Ozs7Ozs7Ozs7Ozs4QkFFcEI7Ozs7Ozs7Ozs7Ozs7O29CQUVIO29CQUFBOztrQ0FBOEM7Ozs7OztvQkFBMEM7b0JBQUE7O2tDQUM3RTs7Ozs7O29CQUFrRTtvQkFBQTs7a0NBQy9EOzs7Ozs7b0JBQW9EO29CQUFBOztrQ0FBTTs7Ozs7O29CQUF3RDtvQkFBQTs7a0NBQ3BIOzs7Ozs7b0JBQTBDO29CQUFBOztrQ0FBOEI7Ozs7OztvQkFBa0Q7b0JBQUE7a0NBQ3ZGOzs7Ozs7b0JBQWM7b0JBQUE7a0NBQUU7Ozs7OztvQkFBVztpQkFBQTs7Ozs7Ozs7MEJBRTFFOzs7Ozs7OzswQkFFQTs7Ozs7Ozs7Ozs7Ozs7MEJBS0EifQ==