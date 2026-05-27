"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_program_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_cs-8c85ab"], {
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
32360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(93566);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

/**
 * Warning! This code has been generated automatically.
 */ 



var FOCUS = {
    "Detail #1": "function init(context: TgdContext) {\n    context.camera.transfo.distance = 10\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObject(context, {\n        uniforms: {\n            uniModelViewMatrix: \"mat4\",\n            uniProjectionMatrix: \"mat4\",\n        },\n    })\n    const uniformPixels = new TgdUniformBufferObject(context, {\n        uniforms: {\n            uniPixels: \"vec2\",\n        },\n    })\n    const uniPixels = new TgdVec2()\n    const painter = new TgdPainterProgram(context, {\n        drawMode: \"TRIANGLE_STRIP\",\n        uniforms: {\n            uniformCamera,\n            uniformPixels,\n        },\n        varying: {\n            varColor: \"vec4\",\n        },\n        dataset: [\n            {\n                attribs: {\n                    attPos: {\n                        type: \"vec2\",\n                        data: new Float32Array([+1, 0, +1, +1, -1, 0, -1, +1]),\n                    },\n                },\n            },\n            {\n                divisor: 1,\n                attribs: {\n                    attVec: {\n                        type: \"vec3\",\n                        data: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),\n                    },\n                    attCol: {\n                        type: \"vec3\",\n                        data: new Float32Array([1, 0.2, 0.2, 0.2, 1, 0.2, 0.2, 0.2, 1]),\n                    },\n                },\n            },\n        ],\n        vert: {\n            mainCode: [\n                \"varColor = vec4(attCol, 1.0);\",\n                \"vec4 point = uniProjectionMatrix * uniModelViewMatrix * vec4(attVec, 1.0);\",\n                \"vec2 radial = normalize(vec2(-point.y, point.x)) * uniPixels * point.w;\",\n                \"point.xy *= attPos.y;\",\n                \"point.xy += radial * attPos.x;\",\n                \"gl_Position = point;\",\n            ],\n        },\n        frag: {\n            mainCode: [\"FragColor = varColor;\"],\n        },\n        state: {\n            depth: \"less\",\n            blend: \"off\",\n            cull: \"off\",\n        },\n        onDelete: () => {\n            uniformCamera.delete()\n            uniformPixels.delete()\n        },\n    })\n    context.add(\n        () => {\n            const { camera } = context\n            uniformCamera.values.uniModelViewMatrix = camera.matrixModelView\n            uniformCamera.values.uniProjectionMatrix = camera.matrixProjection\n            const thickness = 2\n            uniPixels.x = thickness / context.width\n            uniPixels.y = thickness / context.height\n            uniformPixels.values.uniPixels = uniPixels\n        },\n        clear,\n        painter,\n        // new TgdPainterState(context, {\n        //     depth: \"less\",\n        //     children: [new TgdPainterMesh(context)],\n        // }),\n    )\n    context.paint()\n    painter.debug()\n}"
};
var FULL = "import {\n    type TgdContext,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterProgram,\n    TgdPainterState,\n    TgdUniformBufferObject,\n    TgdVec2,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    context.camera.transfo.distance = 10\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObject(context, {\n        uniforms: {\n            uniModelViewMatrix: \"mat4\",\n            uniProjectionMatrix: \"mat4\",\n        },\n    })\n    const uniformPixels = new TgdUniformBufferObject(context, {\n        uniforms: {\n            uniPixels: \"vec2\",\n        },\n    })\n    const uniPixels = new TgdVec2()\n    const painter = new TgdPainterProgram(context, {\n        drawMode: \"TRIANGLE_STRIP\",\n        uniforms: {\n            uniformCamera,\n            uniformPixels,\n        },\n        varying: {\n            varColor: \"vec4\",\n        },\n        dataset: [\n            {\n                attribs: {\n                    attPos: {\n                        type: \"vec2\",\n                        data: new Float32Array([+1, 0, +1, +1, -1, 0, -1, +1]),\n                    },\n                },\n            },\n            {\n                divisor: 1,\n                attribs: {\n                    attVec: {\n                        type: \"vec3\",\n                        data: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),\n                    },\n                    attCol: {\n                        type: \"vec3\",\n                        data: new Float32Array([1, 0.2, 0.2, 0.2, 1, 0.2, 0.2, 0.2, 1]),\n                    },\n                },\n            },\n        ],\n        vert: {\n            mainCode: [\n                \"varColor = vec4(attCol, 1.0);\",\n                \"vec4 point = uniProjectionMatrix * uniModelViewMatrix * vec4(attVec, 1.0);\",\n                \"vec2 radial = normalize(vec2(-point.y, point.x)) * uniPixels * point.w;\",\n                \"point.xy *= attPos.y;\",\n                \"point.xy += radial * attPos.x;\",\n                \"gl_Position = point;\",\n            ],\n        },\n        frag: {\n            mainCode: [\"FragColor = varColor;\"],\n        },\n        state: {\n            depth: \"less\",\n            blend: \"off\",\n            cull: \"off\",\n        },\n        onDelete: () => {\n            uniformCamera.delete()\n            uniformPixels.delete()\n        },\n    })\n    context.add(\n        () => {\n            const { camera } = context\n            uniformCamera.values.uniModelViewMatrix = camera.matrixModelView\n            uniformCamera.values.uniProjectionMatrix = camera.matrixProjection\n            const thickness = 2\n            uniPixels.x = thickness / context.width\n            uniPixels.y = thickness / context.height\n            uniformPixels.values.uniPixels = uniPixels\n        },\n        clear,\n        painter,\n        // new TgdPainterState(context, {\n        //     depth: \"less\",\n        //     children: [new TgdPainterMesh(context)],\n        // }),\n    )\n    context.paint()\n    painter.debug()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo\n            width=\"512px\"\n            height=\"512px\"\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/index.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-right",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewButton, {
                            variant: "elevated",
                            onClick: function onClick() {
                                return setFull(!full);
                            },
                            children: full ? "Show code details" : "Show full code"
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
93566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);



// #begin
function init(context) {
    context.camera.transfo.distance = 10;
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0,
            0,
            1
        ],
        depth: 1
    });
    var uniformCamera = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObject(context, {
        uniforms: {
            uniModelViewMatrix: "mat4",
            uniProjectionMatrix: "mat4"
        }
    });
    var uniformPixels = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObject(context, {
        uniforms: {
            uniPixels: "vec2"
        }
    });
    var uniPixels = new _tolokoban_tgd__rspack_import_1.TgdVec2();
    var painter = new _tolokoban_tgd__rspack_import_1.TgdPainterProgram(context, {
        drawMode: "TRIANGLE_STRIP",
        uniforms: {
            uniformCamera: uniformCamera,
            uniformPixels: uniformPixels
        },
        varying: {
            varColor: "vec4"
        },
        dataset: [
            {
                attribs: {
                    attPos: {
                        type: "vec2",
                        data: new Float32Array([
                            +1,
                            0,
                            +1,
                            +1,
                            -1,
                            0,
                            -1,
                            +1
                        ])
                    }
                }
            },
            {
                divisor: 1,
                attribs: {
                    attVec: {
                        type: "vec3",
                        data: new Float32Array([
                            1,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            1
                        ])
                    },
                    attCol: {
                        type: "vec3",
                        data: new Float32Array([
                            1,
                            0.2,
                            0.2,
                            0.2,
                            1,
                            0.2,
                            0.2,
                            0.2,
                            1
                        ])
                    }
                }
            }
        ],
        vert: {
            mainCode: [
                "varColor = vec4(attCol, 1.0);",
                "vec4 point = uniProjectionMatrix * uniModelViewMatrix * vec4(attVec, 1.0);",
                "vec2 radial = normalize(vec2(-point.y, point.x)) * uniPixels * point.w;",
                "point.xy *= attPos.y;",
                "point.xy += radial * attPos.x;",
                "gl_Position = point;"
            ]
        },
        frag: {
            mainCode: [
                "FragColor = varColor;"
            ]
        },
        state: {
            depth: "less",
            blend: "off",
            cull: "off"
        },
        onDelete: function onDelete() {
            uniformCamera.delete();
            uniformPixels.delete();
        }
    });
    context.add(function() {
        var camera = context.camera;
        uniformCamera.values.uniModelViewMatrix = camera.matrixModelView;
        uniformCamera.values.uniProjectionMatrix = camera.matrixProjection;
        var thickness = 2;
        uniPixels.x = thickness / context.width;
        uniPixels.y = thickness / context.height;
        uniformPixels.values.uniPixels = uniPixels;
    }, clear, painter);
    context.paint();
    painter.debug();
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        gizmo: true,
        width: "512px",
        height: "512px",
        controller: {
            inertiaOrbit: 1000
        },
        options: {
            preserveDrawingBuffer: true
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/main.demo.tsx",
        lineNumber: 111,
        columnNumber: 9
    }, this);
}


},
35740(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _matrix_demo__rspack_import_4 = __webpack_require__(80830);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

/**
 * Warning! This code has been generated automatically.
 */ 



var FOCUS = {
    "Detail #1": "    context.camera.transfo.setPosition(0, 2, 0)\n    context.camera.fitSpaceAtTarget(9, 7)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const imageLetters = assets.image.letters\n    const imageDust = assets.image.dust\n    const cameraSkybox = context.camera.clone()\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.imagePosX,\n        imagePosY: assets.image.imagePosY,\n        imagePosZ: assets.image.imagePosZ,\n        imageNegX: assets.image.imageNegX,\n        imageNegY: assets.image.imageNegY,\n        imageNegZ: assets.image.imageNegZ,\n    })\n    const painterSkybox = new TgdPainterSkybox(context, {\n        tint: [0.4, 0.4, 0.4, 1],\n        camera: cameraSkybox,\n        texture: skybox,\n    })\n    const painterScreen = new PainterScreen(context, {\n        uniformCamera,\n        imageLetters,\n        imageDust,\n        assetScreen: assets.glb.screen,\n        skybox,\n    })\n    const geometry = assets.glb.screen.makeGeometry({\n        meshIndex: \"Mesh\",\n    })\n    const material = new TgdMaterialGlobal({\n        ambientColor: skybox,\n    })\n    const foot = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    context.add(\n        painterSkybox,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            children: [clear, foot, painterScreen],\n        }),\n        (time) => {\n            const angX = Math.abs(10 * Math.sin(time * 0.341))\n            const angY = 30 * Math.sin(time * 0.5)\n            context.camera.transfo.setEulerRotation(angX, angY, 0)\n            cameraSkybox.zoom = 0.3\n            cameraSkybox.transfo.setEulerRotation(angX, angY + 160, 0)\n        },\n    )\n    context.play()"
};
var FULL = "import {\n    tgdCanvasCreateWithContext2D,\n    type TgdContext,\n    TgdDataGlb,\n    tgdLoadFont,\n    TgdMaterialGlobal,\n    TgdPainter,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterProgram,\n    TgdPainterSkybox,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdTextureCube,\n    TgdUniformBufferObject,\n    TgdUniformBufferObjectCamera,\n    WebglImage,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport ScreenURL from \"./screen.glb\"\nimport DustURL from \"./dust.webp\"\nimport FuzarFontURL from \"./Fuzar_GX.woff2\"\nimport imagePosX from \"@/assets/cubemap/1024/electric-board/posX.webp\" // +X\nimport imagePosY from \"@/assets/cubemap/1024/electric-board/posY.webp\" // +Y\nimport imagePosZ from \"@/assets/cubemap/1024/electric-board/posZ.webp\" // +Z\nimport imageNegX from \"@/assets/cubemap/1024/electric-board/negX.webp\" // -X\nimport imageNegY from \"@/assets/cubemap/1024/electric-board/negY.webp\" // -Y\nimport imageNegZ from \"@/assets/cubemap/1024/electric-board/negZ.webp\" // -Z\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.setPosition(0, 2, 0)\n    context.camera.fitSpaceAtTarget(9, 7)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const imageLetters = assets.image.letters\n    const imageDust = assets.image.dust\n    const cameraSkybox = context.camera.clone()\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.imagePosX,\n        imagePosY: assets.image.imagePosY,\n        imagePosZ: assets.image.imagePosZ,\n        imageNegX: assets.image.imageNegX,\n        imageNegY: assets.image.imageNegY,\n        imageNegZ: assets.image.imageNegZ,\n    })\n    const painterSkybox = new TgdPainterSkybox(context, {\n        tint: [0.4, 0.4, 0.4, 1],\n        camera: cameraSkybox,\n        texture: skybox,\n    })\n    const painterScreen = new PainterScreen(context, {\n        uniformCamera,\n        imageLetters,\n        imageDust,\n        assetScreen: assets.glb.screen,\n        skybox,\n    })\n    const geometry = assets.glb.screen.makeGeometry({\n        meshIndex: \"Mesh\",\n    })\n    const material = new TgdMaterialGlobal({\n        ambientColor: skybox,\n    })\n    const foot = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    context.add(\n        painterSkybox,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            children: [clear, foot, painterScreen],\n        }),\n        (time) => {\n            const angX = Math.abs(10 * Math.sin(time * 0.341))\n            const angY = 30 * Math.sin(time * 0.5)\n            context.camera.transfo.setEulerRotation(angX, angY, 0)\n            cameraSkybox.zoom = 0.3\n            cameraSkybox.transfo.setEulerRotation(angX, angY + 160, 0)\n        },\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            assets={{\n                glb: { screen: ScreenURL },\n                image: { dust: DustURL, imagePosX, imagePosY, imagePosZ, imageNegX, imageNegY, imageNegZ },\n            }}\n        />\n    )\n}\n\ninterface PainterScreenOptions {\n    imageLetters: WebglImage\n    imageDust: WebglImage\n    uniformCamera: TgdUniformBufferObjectCamera\n    assetScreen: TgdDataGlb\n    skybox: TgdTextureCube\n}\n\nclass PainterScreen extends TgdPainter {\n    private readonly textureLetters: TgdTexture2D\n    private readonly textureDust: TgdTexture2D\n    private readonly program: TgdPainterProgram\n    private readonly uniformBlock: TgdUniformBufferObject<\"uniTime\">\n\n    constructor(\n        public readonly context: TgdContext,\n        { uniformCamera, imageDust, assetScreen, skybox }: PainterScreenOptions,\n    ) {\n        super()\n        const W = 3\n        const H = 2\n        const elements = assetScreen.getMeshPrimitiveIndices(\"Screen\")\n        const dataset = assetScreen.makeDataset({\n            meshIndex: \"Screen\",\n        })\n        dataset.debug()\n        const uniformBlock = new TgdUniformBufferObject(context, {\n            uniforms: {\n                uniTime: \"float\",\n            },\n        })\n        this.uniformBlock = uniformBlock\n        this.textureLetters = new TgdTexture2D(context, {\n            params: {\n                magFilter: \"LINEAR\",\n                minFilter: \"LINEAR\",\n                wrapR: \"REPEAT\",\n                wrapS: \"REPEAT\",\n                wrapT: \"REPEAT\",\n            },\n        })\n        const scale = 512\n        const { ctx, canvas } = tgdCanvasCreateWithContext2D(W * scale, H * scale * 2)\n        this.initCanvas(canvas, ctx)\n        this.loadFont(canvas, ctx)\n        this.textureDust = new TgdTexture2D(context).loadBitmap(imageDust)\n        this.program = new TgdPainterProgram(context, {\n            drawMode: \"TRIANGLES\",\n            state: {\n                blend: \"add\",\n                cull: \"off\",\n            },\n            uniforms: { uniformCamera, uniformBlock },\n            dataset,\n            elements,\n            textures: {\n                uniTextureLetters: this.textureLetters,\n                uniTextureDust: this.textureDust,\n                uniTextureSkybox: skybox,\n            },\n            varying: {\n                varUV: \"vec2\",\n                varNormal: \"vec3\",\n                varPosition: \"vec4\",\n            },\n            vert: {\n                mainCode: [\n                    \"varNormal = NORMAL;\",\n                    \"varUV = TEXCOORD_0;\",\n                    \"varPosition = vec4(POSITION, 1.0);\",\n                    \"gl_Position = uniProjectionMatrix * uniModelViewMatrix * varPosition;\",\n                ],\n            },\n            frag: {\n                mainCode: [\n                    \"vec4 color = texture(uniTextureLetters, vec2(1.0, .5) * varUV + vec2(0, 0.05 * uniTime));\",\n                    \"float dist = fract(uniTime) - fract(varUV.y);\",\n                    \"if (dist < 0.0) dist += 1.0;\",\n                    \"dist = 1.0 / (6.0 * dist);\",\n                    \"color.rgb *= dist * (gl_FrontFacing ? 1.0 : 0.15);\",\n                    \"color.rgb *= texture(uniTextureDust, varUV).r;\",\n                    \"FragColor = color;\",\n                    \"if (!gl_FrontFacing) return;\",\n                    \"vec3 N = normalize(varNormal);\",\n                    \"vec3 V = normalize(uniCameraPosition - varPosition.xyz);\",\n                    \"vec3 R = reflect(-V, N);\",\n                    \"vec3 specular = textureLod(uniTextureSkybox, R, 0.0).rgb;\",\n                    \"specular = pow(specular, vec3(5.0));\",\n                    \"FragColor.rgb += specular * .5;\",\n                ],\n            },\n        })\n    }\n\n    delete() {\n        this.textureLetters.delete()\n        this.program.delete()\n    }\n\n    paint(time: number, delta: number) {\n        this.uniformBlock.values.uniTime = time\n        this.program.paint(time, delta)\n    }\n\n    private initCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {\n        const { width, height } = canvas\n        const text = \"Loading...\"\n        ctx.font = `bold ${width / 7}px monospace`\n        const measure = ctx.measureText(text)\n        ctx.fillStyle = \"#3e3\"\n        const h = height / 5\n        const x = (width - measure.width) / 2\n        for (let y = h; y < height; y += h) {\n            ctx.fillText(text, x, y)\n        }\n        this.textureLetters.loadBitmap(canvas)\n    }\n\n    private loadFont(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {\n        tgdLoadFont(\"Fuzar\", FuzarFontURL).then(() => {\n            const { width, height } = canvas\n            ctx.clearRect(0, 0, width, height)\n            const fontSize = width / 8\n            const margin = fontSize / 3\n            ctx.font = `italic ${fontSize}px Fuzar`\n            ctx.fillStyle = \"#3e3\"\n            let x = margin\n            let y = fontSize * 3\n            let bold = false\n            let italic = false\n            const text = `*Fuzar is the best font ever made in this world of madness. It was engineered by an unknown _genius hidden in a swiss city called Geneva. \"0123456789\"`\n            for (const word of text.split(\" \")) {\n                italic = false\n                bold = false\n                if (word.startsWith(\"_\")) italic = true\n                if (word.startsWith(\"*\")) italic = false\n                const cleanWord = removeStyle(word)\n                ctx.font = `${bold ? \"bold \" : \"\"}${italic ? \"italic \" : \"\"} ${fontSize}px Fuzar`\n                const measure = ctx.measureText(`${cleanWord} `)\n                if (x > width - measure.width - 2 * margin) {\n                    x = margin\n                    y += fontSize\n                }\n                ctx.fillText(cleanWord, x, y)\n                x += measure.width\n            }\n            ctx.lineWidth = 0.5\n            ctx.strokeStyle = \"#5f57\"\n            for (let h = 0; h < height; h += fontSize / 8) {\n                const y = Math.floor(h) + 0.5\n                ctx.beginPath()\n                ctx.moveTo(0, y)\n                ctx.lineTo(width, y)\n                ctx.stroke()\n            }\n            this.textureLetters.loadBitmap(canvas)\n            this.context.paint()\n        })\n    }\n}\n\nfunction removeStyle(word: string) {\n    while (\"*_\".includes(word.charAt(0))) word = word.slice(1)\n    return word\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_matrix_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/index.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-right",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewButton, {
                            variant: "elevated",
                            onClick: function onClick() {
                                return setFull(!full);
                            },
                            children: full ? "Show code details" : "Show full code"
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
80830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _screen_glb__rspack_import_3 = __webpack_require__(92086);
/* import */ var _dust_webp__rspack_import_4 = __webpack_require__(92615);
/* import */ var _Fuzar_GX_woff2__rspack_import_5 = __webpack_require__(6894);
/* import */ var _assets_cubemap_1024_electric_board_posX_webp__rspack_import_6 = __webpack_require__(43210);
/* import */ var _assets_cubemap_1024_electric_board_posY_webp__rspack_import_7 = __webpack_require__(10741);
/* import */ var _assets_cubemap_1024_electric_board_posZ_webp__rspack_import_8 = __webpack_require__(71336);
/* import */ var _assets_cubemap_1024_electric_board_negX_webp__rspack_import_9 = __webpack_require__(46046);
/* import */ var _assets_cubemap_1024_electric_board_negY_webp__rspack_import_10 = __webpack_require__(87481);
/* import */ var _assets_cubemap_1024_electric_board_negZ_webp__rspack_import_11 = __webpack_require__(28092);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}






 // +X
 // +Y
 // +Z
 // -X
 // -Y
 // -Z
function init(context, assets) {
    // #begin
    context.camera.transfo.setPosition(0, 2, 0);
    context.camera.fitSpaceAtTarget(9, 7);
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1
    });
    var uniformCamera = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObjectCamera(context);
    var imageLetters = assets.image.letters;
    var imageDust = assets.image.dust;
    var cameraSkybox = context.camera.clone();
    var skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.imagePosX,
        imagePosY: assets.image.imagePosY,
        imagePosZ: assets.image.imagePosZ,
        imageNegX: assets.image.imageNegX,
        imageNegY: assets.image.imageNegY,
        imageNegZ: assets.image.imageNegZ
    });
    var painterSkybox = new _tolokoban_tgd__rspack_import_1.TgdPainterSkybox(context, {
        tint: [
            0.4,
            0.4,
            0.4,
            1
        ],
        camera: cameraSkybox,
        texture: skybox
    });
    var painterScreen = new PainterScreen(context, {
        uniformCamera: uniformCamera,
        imageLetters: imageLetters,
        imageDust: imageDust,
        assetScreen: assets.glb.screen,
        skybox: skybox
    });
    var geometry = assets.glb.screen.makeGeometry({
        meshIndex: "Mesh"
    });
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialGlobal({
        ambientColor: skybox
    });
    var foot = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: geometry,
        material: material
    });
    context.add(painterSkybox, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        children: [
            clear,
            foot,
            painterScreen
        ]
    }), function(time) {
        var angX = Math.abs(10 * Math.sin(time * 0.341));
        var angY = 30 * Math.sin(time * 0.5);
        context.camera.transfo.setEulerRotation(angX, angY, 0);
        cameraSkybox.zoom = 0.3;
        cameraSkybox.transfo.setEulerRotation(angX, angY + 160, 0);
    });
    context.play();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        controller: {
            inertiaOrbit: 1000
        },
        options: {
            preserveDrawingBuffer: true
        },
        assets: {
            glb: {
                screen: _screen_glb__rspack_import_3
            },
            image: {
                dust: _dust_webp__rspack_import_4,
                imagePosX: _assets_cubemap_1024_electric_board_posX_webp__rspack_import_6,
                imagePosY: _assets_cubemap_1024_electric_board_posY_webp__rspack_import_7,
                imagePosZ: _assets_cubemap_1024_electric_board_posZ_webp__rspack_import_8,
                imageNegX: _assets_cubemap_1024_electric_board_negX_webp__rspack_import_9,
                imageNegY: _assets_cubemap_1024_electric_board_negY_webp__rspack_import_10,
                imageNegZ: _assets_cubemap_1024_electric_board_negZ_webp__rspack_import_11
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/matrix.demo.tsx",
        lineNumber: 93,
        columnNumber: 9
    }, this);
}
var PainterScreen = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(PainterScreen, TgdPainter);
    function PainterScreen(context, param) {
        var uniformCamera = param.uniformCamera, imageDust = param.imageDust, assetScreen = param.assetScreen, skybox = param.skybox;
        _class_call_check(this, PainterScreen);
        var _this;
        _this = _call_super(this, PainterScreen), _define_property(_this, "context", void 0), _define_property(_this, "textureLetters", void 0), _define_property(_this, "textureDust", void 0), _define_property(_this, "program", void 0), _define_property(_this, "uniformBlock", void 0), _this.context = context;
        var W = 3;
        var H = 2;
        var elements = assetScreen.getMeshPrimitiveIndices("Screen");
        var dataset = assetScreen.makeDataset({
            meshIndex: "Screen"
        });
        dataset.debug();
        var uniformBlock = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObject(context, {
            uniforms: {
                uniTime: "float"
            }
        });
        _this.uniformBlock = uniformBlock;
        _this.textureLetters = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
            params: {
                magFilter: "LINEAR",
                minFilter: "LINEAR",
                wrapR: "REPEAT",
                wrapS: "REPEAT",
                wrapT: "REPEAT"
            }
        });
        var scale = 512;
        var _tgdCanvasCreateWithContext2D = (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateWithContext2D)(W * scale, H * scale * 2), ctx = _tgdCanvasCreateWithContext2D.ctx, canvas = _tgdCanvasCreateWithContext2D.canvas;
        _this.initCanvas(canvas, ctx);
        _this.loadFont(canvas, ctx);
        _this.textureDust = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(imageDust);
        _this.program = new _tolokoban_tgd__rspack_import_1.TgdPainterProgram(context, {
            drawMode: "TRIANGLES",
            state: {
                blend: "add",
                cull: "off"
            },
            uniforms: {
                uniformCamera: uniformCamera,
                uniformBlock: uniformBlock
            },
            dataset: dataset,
            elements: elements,
            textures: {
                uniTextureLetters: _this.textureLetters,
                uniTextureDust: _this.textureDust,
                uniTextureSkybox: skybox
            },
            varying: {
                varUV: "vec2",
                varNormal: "vec3",
                varPosition: "vec4"
            },
            vert: {
                mainCode: [
                    "varNormal = NORMAL;",
                    "varUV = TEXCOORD_0;",
                    "varPosition = vec4(POSITION, 1.0);",
                    "gl_Position = uniProjectionMatrix * uniModelViewMatrix * varPosition;"
                ]
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
                    "FragColor.rgb += specular * .5;"
                ]
            }
        });
        return _this;
    }
    _create_class(PainterScreen, [
        {
            key: "delete",
            value: function _delete() {
                this.textureLetters.delete();
                this.program.delete();
            }
        },
        {
            key: "paint",
            value: function paint(time, delta) {
                this.uniformBlock.values.uniTime = time;
                this.program.paint(time, delta);
            }
        },
        {
            key: "initCanvas",
            value: function initCanvas(canvas, ctx) {
                var width = canvas.width, height = canvas.height;
                var text = "Loading...";
                ctx.font = "bold ".concat(width / 7, "px monospace");
                var measure = ctx.measureText(text);
                ctx.fillStyle = "#3e3";
                var h = height / 5;
                var x = (width - measure.width) / 2;
                for(var y = h; y < height; y += h){
                    ctx.fillText(text, x, y);
                }
                this.textureLetters.loadBitmap(canvas);
            }
        },
        {
            key: "loadFont",
            value: function loadFont(canvas, ctx) {
                var _this = this;
                (0,_tolokoban_tgd__rspack_import_1.tgdLoadFont)("Fuzar", _Fuzar_GX_woff2__rspack_import_5).then(function() {
                    var width = canvas.width, height = canvas.height;
                    ctx.clearRect(0, 0, width, height);
                    var fontSize = width / 8;
                    var margin = fontSize / 3;
                    ctx.font = "italic ".concat(fontSize, "px Fuzar");
                    ctx.fillStyle = "#3e3";
                    var x = margin;
                    var y = fontSize * 3;
                    var bold = false;
                    var italic = false;
                    var text = '*Fuzar is the best font ever made in this world of madness. It was engineered by an unknown _genius hidden in a swiss city called Geneva. "0123456789"';
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = text.split(" ")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var word = _step.value;
                            italic = false;
                            bold = false;
                            if (word.startsWith("_")) italic = true;
                            if (word.startsWith("*")) italic = false;
                            var cleanWord = removeStyle(word);
                            ctx.font = "".concat(bold ? "bold " : "").concat(italic ? "italic " : "", " ").concat(fontSize, "px Fuzar");
                            var measure = ctx.measureText("".concat(cleanWord, " "));
                            if (x > width - measure.width - 2 * margin) {
                                x = margin;
                                y += fontSize;
                            }
                            ctx.fillText(cleanWord, x, y);
                            x += measure.width;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    ctx.lineWidth = 0.5;
                    ctx.strokeStyle = "#5f57";
                    for(var h = 0; h < height; h += fontSize / 8){
                        var y1 = Math.floor(h) + 0.5;
                        ctx.beginPath();
                        ctx.moveTo(0, y1);
                        ctx.lineTo(width, y1);
                        ctx.stroke();
                    }
                    _this.textureLetters.loadBitmap(canvas);
                    _this.context.paint();
                });
            }
        }
    ]);
    return PainterScreen;
}(_tolokoban_tgd__rspack_import_1.TgdPainter);
function removeStyle(word) {
    while("*_".includes(word.charAt(0)))word = word.slice(1);
    return word;
}


},
23047(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(32360);
/* import */ var _matrix_demo__rspack_import_2 = __webpack_require__(35740);
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
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MDXProvider: () => (MDXProvider),
  useMDXComponents: () => (useMDXComponents)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wcm9ncmFtX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jcy04Yzg1YWIuYzZmNDliOTJlNTJkYWFjOC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wcm9ncmFtL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcHJvZ3JhbS9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wcm9ncmFtL18vbWF0cml4LmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wcm9ncmFtL18vbWF0cml4LmRlbW8vbWF0cml4LmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wcm9ncmFtL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTBcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcXG4gICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgdW5pTW9kZWxWaWV3TWF0cml4OiBcXFwibWF0NFxcXCIsXFxuICAgICAgICAgICAgdW5pUHJvamVjdGlvbk1hdHJpeDogXFxcIm1hdDRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgdW5pZm9ybVBpeGVscyA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcXG4gICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgdW5pUGl4ZWxzOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlQaXhlbHMgPSBuZXcgVGdkVmVjMigpXFxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclByb2dyYW0oY29udGV4dCwge1xcbiAgICAgICAgZHJhd01vZGU6IFxcXCJUUklBTkdMRV9TVFJJUFxcXCIsXFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEsXFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscyxcXG4gICAgICAgIH0sXFxuICAgICAgICB2YXJ5aW5nOiB7XFxuICAgICAgICAgICAgdmFyQ29sb3I6IFxcXCJ2ZWM0XFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhc2V0OiBbXFxuICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICBhdHRyaWJzOiB7XFxuICAgICAgICAgICAgICAgICAgICBhdHRQb3M6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShbKzEsIDAsICsxLCArMSwgLTEsIDAsIC0xLCArMV0pLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgZGl2aXNvcjogMSxcXG4gICAgICAgICAgICAgICAgYXR0cmliczoge1xcbiAgICAgICAgICAgICAgICAgICAgYXR0VmVjOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcInZlYzNcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDFdKSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBhdHRDb2w6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwidmVjM1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShbMSwgMC4yLCAwLjIsIDAuMiwgMSwgMC4yLCAwLjIsIDAuMiwgMV0pLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgXSxcXG4gICAgICAgIHZlcnQ6IHtcXG4gICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICBcXFwidmFyQ29sb3IgPSB2ZWM0KGF0dENvbCwgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwidmVjNCBwb2ludCA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiB2ZWM0KGF0dFZlYywgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwidmVjMiByYWRpYWwgPSBub3JtYWxpemUodmVjMigtcG9pbnQueSwgcG9pbnQueCkpICogdW5pUGl4ZWxzICogcG9pbnQudztcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwicG9pbnQueHkgKj0gYXR0UG9zLnk7XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcInBvaW50Lnh5ICs9IHJhZGlhbCAqIGF0dFBvcy54O1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJnbF9Qb3NpdGlvbiA9IHBvaW50O1xcXCIsXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmcmFnOiB7XFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcXFwiRnJhZ0NvbG9yID0gdmFyQ29sb3I7XFxcIl0sXFxuICAgICAgICB9LFxcbiAgICAgICAgc3RhdGU6IHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGJsZW5kOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwib2ZmXFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBvbkRlbGV0ZTogKCkgPT4ge1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEuZGVsZXRlKClcXG4gICAgICAgICAgICB1bmlmb3JtUGl4ZWxzLmRlbGV0ZSgpXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgICgpID0+IHtcXG4gICAgICAgICAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudmFsdWVzLnVuaU1vZGVsVmlld01hdHJpeCA9IGNhbWVyYS5tYXRyaXhNb2RlbFZpZXdcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnZhbHVlcy51bmlQcm9qZWN0aW9uTWF0cml4ID0gY2FtZXJhLm1hdHJpeFByb2plY3Rpb25cXG4gICAgICAgICAgICBjb25zdCB0aGlja25lc3MgPSAyXFxuICAgICAgICAgICAgdW5pUGl4ZWxzLnggPSB0aGlja25lc3MgLyBjb250ZXh0LndpZHRoXFxuICAgICAgICAgICAgdW5pUGl4ZWxzLnkgPSB0aGlja25lc3MgLyBjb250ZXh0LmhlaWdodFxcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMudmFsdWVzLnVuaVBpeGVscyA9IHVuaVBpeGVsc1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgcGFpbnRlcixcXG4gICAgICAgIC8vIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgLy8gICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAvLyAgICAgY2hpbGRyZW46IFtuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCldLFxcbiAgICAgICAgLy8gfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIHBhaW50ZXIuZGVidWcoKVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclByb2dyYW0sXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdCxcXG4gICAgVGdkVmVjMixcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDEwXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdChjb250ZXh0LCB7XFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaU1vZGVsVmlld01hdHJpeDogXFxcIm1hdDRcXFwiLFxcbiAgICAgICAgICAgIHVuaVByb2plY3Rpb25NYXRyaXg6IFxcXCJtYXQ0XFxcIixcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHVuaWZvcm1QaXhlbHMgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdChjb250ZXh0LCB7XFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaVBpeGVsczogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgdW5pUGl4ZWxzID0gbmV3IFRnZFZlYzIoKVxcbiAgICBjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJQcm9ncmFtKGNvbnRleHQsIHtcXG4gICAgICAgIGRyYXdNb2RlOiBcXFwiVFJJQU5HTEVfU1RSSVBcXFwiLFxcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLFxcbiAgICAgICAgICAgIHVuaWZvcm1QaXhlbHMsXFxuICAgICAgICB9LFxcbiAgICAgICAgdmFyeWluZzoge1xcbiAgICAgICAgICAgIHZhckNvbG9yOiBcXFwidmVjNFxcXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YXNldDogW1xcbiAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgYXR0cmliczoge1xcbiAgICAgICAgICAgICAgICAgICAgYXR0UG9zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWysxLCAwLCArMSwgKzEsIC0xLCAwLCAtMSwgKzFdKSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgIGRpdmlzb3I6IDEsXFxuICAgICAgICAgICAgICAgIGF0dHJpYnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGF0dFZlYzoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFxcXCJ2ZWMzXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxXSksXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgYXR0Q29sOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXFxcInZlYzNcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAuMiwgMC4yLCAwLjIsIDEsIDAuMiwgMC4yLCAwLjIsIDFdKSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIF0sXFxuICAgICAgICB2ZXJ0OiB7XFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICAgICAgXFxcInZhckNvbG9yID0gdmVjNChhdHRDb2wsIDEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcInZlYzQgcG9pbnQgPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogdmVjNChhdHRWZWMsIDEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcInZlYzIgcmFkaWFsID0gbm9ybWFsaXplKHZlYzIoLXBvaW50LnksIHBvaW50LngpKSAqIHVuaVBpeGVscyAqIHBvaW50Lnc7XFxcIixcXG4gICAgICAgICAgICAgICAgXFxcInBvaW50Lnh5ICo9IGF0dFBvcy55O1xcXCIsXFxuICAgICAgICAgICAgICAgIFxcXCJwb2ludC54eSArPSByYWRpYWwgKiBhdHRQb3MueDtcXFwiLFxcbiAgICAgICAgICAgICAgICBcXFwiZ2xfUG9zaXRpb24gPSBwb2ludDtcXFwiLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9LFxcbiAgICAgICAgZnJhZzoge1xcbiAgICAgICAgICAgIG1haW5Db2RlOiBbXFxcIkZyYWdDb2xvciA9IHZhckNvbG9yO1xcXCJdLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHN0YXRlOiB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBibGVuZDogXFxcIm9mZlxcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcIm9mZlxcXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgb25EZWxldGU6ICgpID0+IHtcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLmRlbGV0ZSgpXFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscy5kZWxldGUoKVxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICAoKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnZhbHVlcy51bmlNb2RlbFZpZXdNYXRyaXggPSBjYW1lcmEubWF0cml4TW9kZWxWaWV3XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS52YWx1ZXMudW5pUHJvamVjdGlvbk1hdHJpeCA9IGNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uXFxuICAgICAgICAgICAgY29uc3QgdGhpY2tuZXNzID0gMlxcbiAgICAgICAgICAgIHVuaVBpeGVscy54ID0gdGhpY2tuZXNzIC8gY29udGV4dC53aWR0aFxcbiAgICAgICAgICAgIHVuaVBpeGVscy55ID0gdGhpY2tuZXNzIC8gY29udGV4dC5oZWlnaHRcXG4gICAgICAgICAgICB1bmlmb3JtUGl4ZWxzLnZhbHVlcy51bmlQaXhlbHMgPSB1bmlQaXhlbHNcXG4gICAgICAgIH0sXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIHBhaW50ZXIsXFxuICAgICAgICAvLyBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIC8vICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgLy8gICAgIGNoaWxkcmVuOiBbbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXSxcXG4gICAgICAgIC8vIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICBwYWludGVyLmRlYnVnKClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBnaXptb1xcbiAgICAgICAgICAgIHdpZHRoPVxcXCI1MTJweFxcXCJcXG4gICAgICAgICAgICBoZWlnaHQ9XFxcIjUxMnB4XFxcIlxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgb3B0aW9ucz17e1xcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyUHJvZ3JhbSxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdCxcbiAgICBUZ2RWZWMyLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTBcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdChjb250ZXh0LCB7XG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICB1bmlNb2RlbFZpZXdNYXRyaXg6IFwibWF0NFwiLFxuICAgICAgICAgICAgdW5pUHJvamVjdGlvbk1hdHJpeDogXCJtYXQ0XCIsXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBjb25zdCB1bmlmb3JtUGl4ZWxzID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xuICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgdW5pUGl4ZWxzOiBcInZlYzJcIixcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnN0IHVuaVBpeGVscyA9IG5ldyBUZ2RWZWMyKClcbiAgICBjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJQcm9ncmFtKGNvbnRleHQsIHtcbiAgICAgICAgZHJhd01vZGU6IFwiVFJJQU5HTEVfU1RSSVBcIixcbiAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEsXG4gICAgICAgICAgICB1bmlmb3JtUGl4ZWxzLFxuICAgICAgICB9LFxuICAgICAgICB2YXJ5aW5nOiB7XG4gICAgICAgICAgICB2YXJDb2xvcjogXCJ2ZWM0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFzZXQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGF0dFBvczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ2ZWMyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsrMSwgMCwgKzEsICsxLCAtMSwgMCwgLTEsICsxXSksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGl2aXNvcjogMSxcbiAgICAgICAgICAgICAgICBhdHRyaWJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGF0dFZlYzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxXSksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dENvbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLjIsIDAuMiwgMC4yLCAxLCAwLjIsIDAuMiwgMC4yLCAxXSksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHZlcnQ6IHtcbiAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgXCJ2YXJDb2xvciA9IHZlYzQoYXR0Q29sLCAxLjApO1wiLFxuICAgICAgICAgICAgICAgIFwidmVjNCBwb2ludCA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiB2ZWM0KGF0dFZlYywgMS4wKTtcIixcbiAgICAgICAgICAgICAgICBcInZlYzIgcmFkaWFsID0gbm9ybWFsaXplKHZlYzIoLXBvaW50LnksIHBvaW50LngpKSAqIHVuaVBpeGVscyAqIHBvaW50Lnc7XCIsXG4gICAgICAgICAgICAgICAgXCJwb2ludC54eSAqPSBhdHRQb3MueTtcIixcbiAgICAgICAgICAgICAgICBcInBvaW50Lnh5ICs9IHJhZGlhbCAqIGF0dFBvcy54O1wiLFxuICAgICAgICAgICAgICAgIFwiZ2xfUG9zaXRpb24gPSBwb2ludDtcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGZyYWc6IHtcbiAgICAgICAgICAgIG1haW5Db2RlOiBbXCJGcmFnQ29sb3IgPSB2YXJDb2xvcjtcIl0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgICAgICBibGVuZDogXCJvZmZcIixcbiAgICAgICAgICAgIGN1bGw6IFwib2ZmXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uRGVsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLmRlbGV0ZSgpXG4gICAgICAgICAgICB1bmlmb3JtUGl4ZWxzLmRlbGV0ZSgpXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudmFsdWVzLnVuaU1vZGVsVmlld01hdHJpeCA9IGNhbWVyYS5tYXRyaXhNb2RlbFZpZXdcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudmFsdWVzLnVuaVByb2plY3Rpb25NYXRyaXggPSBjYW1lcmEubWF0cml4UHJvamVjdGlvblxuICAgICAgICAgICAgY29uc3QgdGhpY2tuZXNzID0gMlxuICAgICAgICAgICAgdW5pUGl4ZWxzLnggPSB0aGlja25lc3MgLyBjb250ZXh0LndpZHRoXG4gICAgICAgICAgICB1bmlQaXhlbHMueSA9IHRoaWNrbmVzcyAvIGNvbnRleHQuaGVpZ2h0XG4gICAgICAgICAgICB1bmlmb3JtUGl4ZWxzLnZhbHVlcy51bmlQaXhlbHMgPSB1bmlQaXhlbHNcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIHBhaW50ZXIsXG4gICAgICAgIC8vIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAvLyAgICAgZGVwdGg6IFwibGVzc1wiLFxuICAgICAgICAvLyAgICAgY2hpbGRyZW46IFtuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCldLFxuICAgICAgICAvLyB9KSxcbiAgICApXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgcGFpbnRlci5kZWJ1ZygpXG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBnaXptb1xuICAgICAgICAgICAgd2lkdGg9XCI1MTJweFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MTJweFwiXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYXRyaXguZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCIgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAyLCAwKVxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDksIDcpXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXFxuICAgIGNvbnN0IGltYWdlTGV0dGVycyA9IGFzc2V0cy5pbWFnZS5sZXR0ZXJzXFxuICAgIGNvbnN0IGltYWdlRHVzdCA9IGFzc2V0cy5pbWFnZS5kdXN0XFxuICAgIGNvbnN0IGNhbWVyYVNreWJveCA9IGNvbnRleHQuY2FtZXJhLmNsb25lKClcXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLmltYWdlUG9zWCxcXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLmltYWdlUG9zWSxcXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLmltYWdlUG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLmltYWdlTmVnWCxcXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLmltYWdlTmVnWSxcXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLmltYWdlTmVnWixcXG4gICAgfSlcXG4gICAgY29uc3QgcGFpbnRlclNreWJveCA9IG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcXG4gICAgICAgIHRpbnQ6IFswLjQsIDAuNCwgMC40LCAxXSxcXG4gICAgICAgIGNhbWVyYTogY2FtZXJhU2t5Ym94LFxcbiAgICAgICAgdGV4dHVyZTogc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBwYWludGVyU2NyZWVuID0gbmV3IFBhaW50ZXJTY3JlZW4oY29udGV4dCwge1xcbiAgICAgICAgdW5pZm9ybUNhbWVyYSxcXG4gICAgICAgIGltYWdlTGV0dGVycyxcXG4gICAgICAgIGltYWdlRHVzdCxcXG4gICAgICAgIGFzc2V0U2NyZWVuOiBhc3NldHMuZ2xiLnNjcmVlbixcXG4gICAgICAgIHNreWJveCxcXG4gICAgfSlcXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBhc3NldHMuZ2xiLnNjcmVlbi5tYWtlR2VvbWV0cnkoe1xcbiAgICAgICAgbWVzaEluZGV4OiBcXFwiTWVzaFxcXCIsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcXG4gICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBmb290ID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIGdlb21ldHJ5LFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgcGFpbnRlclNreWJveCxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgZm9vdCwgcGFpbnRlclNjcmVlbl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgICh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgYW5nWCA9IE1hdGguYWJzKDEwICogTWF0aC5zaW4odGltZSAqIDAuMzQxKSlcXG4gICAgICAgICAgICBjb25zdCBhbmdZID0gMzAgKiBNYXRoLnNpbih0aW1lICogMC41KVxcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihhbmdYLCBhbmdZLCAwKVxcbiAgICAgICAgICAgIGNhbWVyYVNreWJveC56b29tID0gMC4zXFxuICAgICAgICAgICAgY2FtZXJhU2t5Ym94LnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihhbmdYLCBhbmdZICsgMTYwLCAwKVxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2REYXRhR2xiLFxcbiAgICB0Z2RMb2FkRm9udCxcXG4gICAgVGdkTWF0ZXJpYWxHbG9iYWwsXFxuICAgIFRnZFBhaW50ZXIsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJQcm9ncmFtLFxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgVGdkVGV4dHVyZUN1YmUsXFxuICAgIFRnZFVuaWZvcm1CdWZmZXJPYmplY3QsXFxuICAgIFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEsXFxuICAgIFdlYmdsSW1hZ2UsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5cXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuaW1wb3J0IFNjcmVlblVSTCBmcm9tIFxcXCIuL3NjcmVlbi5nbGJcXFwiXFxuaW1wb3J0IER1c3RVUkwgZnJvbSBcXFwiLi9kdXN0LndlYnBcXFwiXFxuaW1wb3J0IEZ1emFyRm9udFVSTCBmcm9tIFxcXCIuL0Z1emFyX0dYLndvZmYyXFxcIlxcbmltcG9ydCBpbWFnZVBvc1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1gud2VicFxcXCIgLy8gK1hcXG5pbXBvcnQgaW1hZ2VQb3NZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NZLndlYnBcXFwiIC8vICtZXFxuaW1wb3J0IGltYWdlUG9zWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvcG9zWi53ZWJwXFxcIiAvLyArWlxcbmltcG9ydCBpbWFnZU5lZ1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1gud2VicFxcXCIgLy8gLVhcXG5pbXBvcnQgaW1hZ2VOZWdZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdZLndlYnBcXFwiIC8vIC1ZXFxuaW1wb3J0IGltYWdlTmVnWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvbmVnWi53ZWJwXFxcIiAvLyAtWlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAyLCAwKVxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDksIDcpXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXFxuICAgIGNvbnN0IGltYWdlTGV0dGVycyA9IGFzc2V0cy5pbWFnZS5sZXR0ZXJzXFxuICAgIGNvbnN0IGltYWdlRHVzdCA9IGFzc2V0cy5pbWFnZS5kdXN0XFxuICAgIGNvbnN0IGNhbWVyYVNreWJveCA9IGNvbnRleHQuY2FtZXJhLmNsb25lKClcXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLmltYWdlUG9zWCxcXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLmltYWdlUG9zWSxcXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLmltYWdlUG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLmltYWdlTmVnWCxcXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLmltYWdlTmVnWSxcXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLmltYWdlTmVnWixcXG4gICAgfSlcXG4gICAgY29uc3QgcGFpbnRlclNreWJveCA9IG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcXG4gICAgICAgIHRpbnQ6IFswLjQsIDAuNCwgMC40LCAxXSxcXG4gICAgICAgIGNhbWVyYTogY2FtZXJhU2t5Ym94LFxcbiAgICAgICAgdGV4dHVyZTogc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBwYWludGVyU2NyZWVuID0gbmV3IFBhaW50ZXJTY3JlZW4oY29udGV4dCwge1xcbiAgICAgICAgdW5pZm9ybUNhbWVyYSxcXG4gICAgICAgIGltYWdlTGV0dGVycyxcXG4gICAgICAgIGltYWdlRHVzdCxcXG4gICAgICAgIGFzc2V0U2NyZWVuOiBhc3NldHMuZ2xiLnNjcmVlbixcXG4gICAgICAgIHNreWJveCxcXG4gICAgfSlcXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBhc3NldHMuZ2xiLnNjcmVlbi5tYWtlR2VvbWV0cnkoe1xcbiAgICAgICAgbWVzaEluZGV4OiBcXFwiTWVzaFxcXCIsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcXG4gICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBmb290ID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIGdlb21ldHJ5LFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgcGFpbnRlclNreWJveCxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgZm9vdCwgcGFpbnRlclNjcmVlbl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgICh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgYW5nWCA9IE1hdGguYWJzKDEwICogTWF0aC5zaW4odGltZSAqIDAuMzQxKSlcXG4gICAgICAgICAgICBjb25zdCBhbmdZID0gMzAgKiBNYXRoLnNpbih0aW1lICogMC41KVxcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihhbmdYLCBhbmdZLCAwKVxcbiAgICAgICAgICAgIGNhbWVyYVNreWJveC56b29tID0gMC4zXFxuICAgICAgICAgICAgY2FtZXJhU2t5Ym94LnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihhbmdYLCBhbmdZICsgMTYwLCAwKVxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgb3B0aW9ucz17e1xcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7IHNjcmVlbjogU2NyZWVuVVJMIH0sXFxuICAgICAgICAgICAgICAgIGltYWdlOiB7IGR1c3Q6IER1c3RVUkwsIGltYWdlUG9zWCwgaW1hZ2VQb3NZLCBpbWFnZVBvc1osIGltYWdlTmVnWCwgaW1hZ2VOZWdZLCBpbWFnZU5lZ1ogfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cXG5pbnRlcmZhY2UgUGFpbnRlclNjcmVlbk9wdGlvbnMge1xcbiAgICBpbWFnZUxldHRlcnM6IFdlYmdsSW1hZ2VcXG4gICAgaW1hZ2VEdXN0OiBXZWJnbEltYWdlXFxuICAgIHVuaWZvcm1DYW1lcmE6IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmFcXG4gICAgYXNzZXRTY3JlZW46IFRnZERhdGFHbGJcXG4gICAgc2t5Ym94OiBUZ2RUZXh0dXJlQ3ViZVxcbn1cXG5cXG5jbGFzcyBQYWludGVyU2NyZWVuIGV4dGVuZHMgVGdkUGFpbnRlciB7XFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZUxldHRlcnM6IFRnZFRleHR1cmUyRFxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmVEdXN0OiBUZ2RUZXh0dXJlMkRcXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9ncmFtOiBUZ2RQYWludGVyUHJvZ3JhbVxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVuaWZvcm1CbG9jazogVGdkVW5pZm9ybUJ1ZmZlck9iamVjdDxcXFwidW5pVGltZVxcXCI+XFxuXFxuICAgIGNvbnN0cnVjdG9yKFxcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQsXFxuICAgICAgICB7IHVuaWZvcm1DYW1lcmEsIGltYWdlRHVzdCwgYXNzZXRTY3JlZW4sIHNreWJveCB9OiBQYWludGVyU2NyZWVuT3B0aW9ucyxcXG4gICAgKSB7XFxuICAgICAgICBzdXBlcigpXFxuICAgICAgICBjb25zdCBXID0gM1xcbiAgICAgICAgY29uc3QgSCA9IDJcXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gYXNzZXRTY3JlZW4uZ2V0TWVzaFByaW1pdGl2ZUluZGljZXMoXFxcIlNjcmVlblxcXCIpXFxuICAgICAgICBjb25zdCBkYXRhc2V0ID0gYXNzZXRTY3JlZW4ubWFrZURhdGFzZXQoe1xcbiAgICAgICAgICAgIG1lc2hJbmRleDogXFxcIlNjcmVlblxcXCIsXFxuICAgICAgICB9KVxcbiAgICAgICAgZGF0YXNldC5kZWJ1ZygpXFxuICAgICAgICBjb25zdCB1bmlmb3JtQmxvY2sgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdChjb250ZXh0LCB7XFxuICAgICAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICAgICAgdW5pVGltZTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSlcXG4gICAgICAgIHRoaXMudW5pZm9ybUJsb2NrID0gdW5pZm9ybUJsb2NrXFxuICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgICAgIG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgICAgIHdyYXBSOiBcXFwiUkVQRUFUXFxcIixcXG4gICAgICAgICAgICAgICAgd3JhcFM6IFxcXCJSRVBFQVRcXFwiLFxcbiAgICAgICAgICAgICAgICB3cmFwVDogXFxcIlJFUEVBVFxcXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pXFxuICAgICAgICBjb25zdCBzY2FsZSA9IDUxMlxcbiAgICAgICAgY29uc3QgeyBjdHgsIGNhbnZhcyB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRChXICogc2NhbGUsIEggKiBzY2FsZSAqIDIpXFxuICAgICAgICB0aGlzLmluaXRDYW52YXMoY2FudmFzLCBjdHgpXFxuICAgICAgICB0aGlzLmxvYWRGb250KGNhbnZhcywgY3R4KVxcbiAgICAgICAgdGhpcy50ZXh0dXJlRHVzdCA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChpbWFnZUR1c3QpXFxuICAgICAgICB0aGlzLnByb2dyYW0gPSBuZXcgVGdkUGFpbnRlclByb2dyYW0oY29udGV4dCwge1xcbiAgICAgICAgICAgIGRyYXdNb2RlOiBcXFwiVFJJQU5HTEVTXFxcIixcXG4gICAgICAgICAgICBzdGF0ZToge1xcbiAgICAgICAgICAgICAgICBibGVuZDogXFxcImFkZFxcXCIsXFxuICAgICAgICAgICAgICAgIGN1bGw6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdW5pZm9ybXM6IHsgdW5pZm9ybUNhbWVyYSwgdW5pZm9ybUJsb2NrIH0sXFxuICAgICAgICAgICAgZGF0YXNldCxcXG4gICAgICAgICAgICBlbGVtZW50cyxcXG4gICAgICAgICAgICB0ZXh0dXJlczoge1xcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlTGV0dGVyczogdGhpcy50ZXh0dXJlTGV0dGVycyxcXG4gICAgICAgICAgICAgICAgdW5pVGV4dHVyZUR1c3Q6IHRoaXMudGV4dHVyZUR1c3QsXFxuICAgICAgICAgICAgICAgIHVuaVRleHR1cmVTa3lib3g6IHNreWJveCxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHZhcnlpbmc6IHtcXG4gICAgICAgICAgICAgICAgdmFyVVY6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgdmFyTm9ybWFsOiBcXFwidmVjM1xcXCIsXFxuICAgICAgICAgICAgICAgIHZhclBvc2l0aW9uOiBcXFwidmVjNFxcXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB2ZXJ0OiB7XFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyTm9ybWFsID0gTk9STUFMO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyVVYgPSBURVhDT09SRF8wO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyUG9zaXRpb24gPSB2ZWM0KFBPU0lUSU9OLCAxLjApO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZ2xfUG9zaXRpb24gPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogdmFyUG9zaXRpb247XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGZyYWc6IHtcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlTGV0dGVycywgdmVjMigxLjAsIC41KSAqIHZhclVWICsgdmVjMigwLCAwLjA1ICogdW5pVGltZSkpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgZGlzdCA9IGZyYWN0KHVuaVRpbWUpIC0gZnJhY3QodmFyVVYueSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJpZiAoZGlzdCA8IDAuMCkgZGlzdCArPSAxLjA7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJkaXN0ID0gMS4wIC8gKDYuMCAqIGRpc3QpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiY29sb3IucmdiICo9IGRpc3QgKiAoZ2xfRnJvbnRGYWNpbmcgPyAxLjAgOiAwLjE1KTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImNvbG9yLnJnYiAqPSB0ZXh0dXJlKHVuaVRleHR1cmVEdXN0LCB2YXJVVikucjtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcIkZyYWdDb2xvciA9IGNvbG9yO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiaWYgKCFnbF9Gcm9udEZhY2luZykgcmV0dXJuO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmVjMyBOID0gbm9ybWFsaXplKHZhck5vcm1hbCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMzIFYgPSBub3JtYWxpemUodW5pQ2FtZXJhUG9zaXRpb24gLSB2YXJQb3NpdGlvbi54eXopO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmVjMyBSID0gcmVmbGVjdCgtViwgTik7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMzIHNwZWN1bGFyID0gdGV4dHVyZUxvZCh1bmlUZXh0dXJlU2t5Ym94LCBSLCAwLjApLnJnYjtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInNwZWN1bGFyID0gcG93KHNwZWN1bGFyLCB2ZWMzKDUuMCkpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiRnJhZ0NvbG9yLnJnYiArPSBzcGVjdWxhciAqIC41O1xcXCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pXFxuICAgIH1cXG5cXG4gICAgZGVsZXRlKCkge1xcbiAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycy5kZWxldGUoKVxcbiAgICAgICAgdGhpcy5wcm9ncmFtLmRlbGV0ZSgpXFxuICAgIH1cXG5cXG4gICAgcGFpbnQodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XFxuICAgICAgICB0aGlzLnVuaWZvcm1CbG9jay52YWx1ZXMudW5pVGltZSA9IHRpbWVcXG4gICAgICAgIHRoaXMucHJvZ3JhbS5wYWludCh0aW1lLCBkZWx0YSlcXG4gICAgfVxcblxcbiAgICBwcml2YXRlIGluaXRDYW52YXMoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcXG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzXFxuICAgICAgICBjb25zdCB0ZXh0ID0gXFxcIkxvYWRpbmcuLi5cXFwiXFxuICAgICAgICBjdHguZm9udCA9IGBib2xkICR7d2lkdGggLyA3fXB4IG1vbm9zcGFjZWBcXG4gICAgICAgIGNvbnN0IG1lYXN1cmUgPSBjdHgubWVhc3VyZVRleHQodGV4dClcXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcXFwiIzNlM1xcXCJcXG4gICAgICAgIGNvbnN0IGggPSBoZWlnaHQgLyA1XFxuICAgICAgICBjb25zdCB4ID0gKHdpZHRoIC0gbWVhc3VyZS53aWR0aCkgLyAyXFxuICAgICAgICBmb3IgKGxldCB5ID0gaDsgeSA8IGhlaWdodDsgeSArPSBoKSB7XFxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpXFxuICAgICAgICB9XFxuICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzLmxvYWRCaXRtYXAoY2FudmFzKVxcbiAgICB9XFxuXFxuICAgIHByaXZhdGUgbG9hZEZvbnQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcXG4gICAgICAgIHRnZExvYWRGb250KFxcXCJGdXphclxcXCIsIEZ1emFyRm9udFVSTCkudGhlbigoKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXNcXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpXFxuICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSB3aWR0aCAvIDhcXG4gICAgICAgICAgICBjb25zdCBtYXJnaW4gPSBmb250U2l6ZSAvIDNcXG4gICAgICAgICAgICBjdHguZm9udCA9IGBpdGFsaWMgJHtmb250U2l6ZX1weCBGdXphcmBcXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXFxcIiMzZTNcXFwiXFxuICAgICAgICAgICAgbGV0IHggPSBtYXJnaW5cXG4gICAgICAgICAgICBsZXQgeSA9IGZvbnRTaXplICogM1xcbiAgICAgICAgICAgIGxldCBib2xkID0gZmFsc2VcXG4gICAgICAgICAgICBsZXQgaXRhbGljID0gZmFsc2VcXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gYCpGdXphciBpcyB0aGUgYmVzdCBmb250IGV2ZXIgbWFkZSBpbiB0aGlzIHdvcmxkIG9mIG1hZG5lc3MuIEl0IHdhcyBlbmdpbmVlcmVkIGJ5IGFuIHVua25vd24gX2dlbml1cyBoaWRkZW4gaW4gYSBzd2lzcyBjaXR5IGNhbGxlZCBHZW5ldmEuIFxcXCIwMTIzNDU2Nzg5XFxcImBcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHdvcmQgb2YgdGV4dC5zcGxpdChcXFwiIFxcXCIpKSB7XFxuICAgICAgICAgICAgICAgIGl0YWxpYyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgIGJvbGQgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICBpZiAod29yZC5zdGFydHNXaXRoKFxcXCJfXFxcIikpIGl0YWxpYyA9IHRydWVcXG4gICAgICAgICAgICAgICAgaWYgKHdvcmQuc3RhcnRzV2l0aChcXFwiKlxcXCIpKSBpdGFsaWMgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbldvcmQgPSByZW1vdmVTdHlsZSh3b3JkKVxcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IGAke2JvbGQgPyBcXFwiYm9sZCBcXFwiIDogXFxcIlxcXCJ9JHtpdGFsaWMgPyBcXFwiaXRhbGljIFxcXCIgOiBcXFwiXFxcIn0gJHtmb250U2l6ZX1weCBGdXphcmBcXG4gICAgICAgICAgICAgICAgY29uc3QgbWVhc3VyZSA9IGN0eC5tZWFzdXJlVGV4dChgJHtjbGVhbldvcmR9IGApXFxuICAgICAgICAgICAgICAgIGlmICh4ID4gd2lkdGggLSBtZWFzdXJlLndpZHRoIC0gMiAqIG1hcmdpbikge1xcbiAgICAgICAgICAgICAgICAgICAgeCA9IG1hcmdpblxcbiAgICAgICAgICAgICAgICAgICAgeSArPSBmb250U2l6ZVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChjbGVhbldvcmQsIHgsIHkpXFxuICAgICAgICAgICAgICAgIHggKz0gbWVhc3VyZS53aWR0aFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC41XFxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXFxcIiM1ZjU3XFxcIlxcbiAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgaGVpZ2h0OyBoICs9IGZvbnRTaXplIC8gOCkge1xcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihoKSArIDAuNVxcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKClcXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCB5KVxcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoLCB5KVxcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKClcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycy5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSlcXG4gICAgfVxcbn1cXG5cXG5mdW5jdGlvbiByZW1vdmVTdHlsZSh3b3JkOiBzdHJpbmcpIHtcXG4gICAgd2hpbGUgKFxcXCIqX1xcXCIuaW5jbHVkZXMod29yZC5jaGFyQXQoMCkpKSB3b3JkID0gd29yZC5zbGljZSgxKVxcbiAgICByZXR1cm4gd29yZFxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJELFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2REYXRhR2xiLFxuICAgIHRnZExvYWRGb250LFxuICAgIFRnZE1hdGVyaWFsR2xvYmFsLFxuICAgIFRnZFBhaW50ZXIsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJQcm9ncmFtLFxuICAgIFRnZFBhaW50ZXJTa3lib3gsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0LFxuICAgIFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEsXG4gICAgV2ViZ2xJbWFnZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmltcG9ydCBTY3JlZW5VUkwgZnJvbSBcIi4vc2NyZWVuLmdsYlwiXG5pbXBvcnQgRHVzdFVSTCBmcm9tIFwiLi9kdXN0LndlYnBcIlxuaW1wb3J0IEZ1emFyRm9udFVSTCBmcm9tIFwiLi9GdXphcl9HWC53b2ZmMlwiXG5pbXBvcnQgaW1hZ2VQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvcG9zWC53ZWJwXCIgLy8gK1hcbmltcG9ydCBpbWFnZVBvc1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NZLndlYnBcIiAvLyArWVxuaW1wb3J0IGltYWdlUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1oud2VicFwiIC8vICtaXG5pbXBvcnQgaW1hZ2VOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvbmVnWC53ZWJwXCIgLy8gLVhcbmltcG9ydCBpbWFnZU5lZ1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdZLndlYnBcIiAvLyAtWVxuaW1wb3J0IGltYWdlTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1oud2VicFwiIC8vIC1aXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDIsIDApXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg5LCA3KVxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXG4gICAgY29uc3QgaW1hZ2VMZXR0ZXJzID0gYXNzZXRzLmltYWdlLmxldHRlcnNcbiAgICBjb25zdCBpbWFnZUR1c3QgPSBhc3NldHMuaW1hZ2UuZHVzdFxuICAgIGNvbnN0IGNhbWVyYVNreWJveCA9IGNvbnRleHQuY2FtZXJhLmNsb25lKClcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1gsXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLmltYWdlUG9zWSxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NaLFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1gsXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLmltYWdlTmVnWSxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdaLFxuICAgIH0pXG4gICAgY29uc3QgcGFpbnRlclNreWJveCA9IG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcbiAgICAgICAgdGludDogWzAuNCwgMC40LCAwLjQsIDFdLFxuICAgICAgICBjYW1lcmE6IGNhbWVyYVNreWJveCxcbiAgICAgICAgdGV4dHVyZTogc2t5Ym94LFxuICAgIH0pXG4gICAgY29uc3QgcGFpbnRlclNjcmVlbiA9IG5ldyBQYWludGVyU2NyZWVuKGNvbnRleHQsIHtcbiAgICAgICAgdW5pZm9ybUNhbWVyYSxcbiAgICAgICAgaW1hZ2VMZXR0ZXJzLFxuICAgICAgICBpbWFnZUR1c3QsXG4gICAgICAgIGFzc2V0U2NyZWVuOiBhc3NldHMuZ2xiLnNjcmVlbixcbiAgICAgICAgc2t5Ym94LFxuICAgIH0pXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBhc3NldHMuZ2xiLnNjcmVlbi5tYWtlR2VvbWV0cnkoe1xuICAgICAgICBtZXNoSW5kZXg6IFwiTWVzaFwiLFxuICAgIH0pXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xuICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcbiAgICB9KVxuICAgIGNvbnN0IGZvb3QgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuICAgICAgICBnZW9tZXRyeSxcbiAgICAgICAgbWF0ZXJpYWwsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgcGFpbnRlclNreWJveCxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBmb290LCBwYWludGVyU2NyZWVuXSxcbiAgICAgICAgfSksXG4gICAgICAgICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbmdYID0gTWF0aC5hYnMoMTAgKiBNYXRoLnNpbih0aW1lICogMC4zNDEpKVxuICAgICAgICAgICAgY29uc3QgYW5nWSA9IDMwICogTWF0aC5zaW4odGltZSAqIDAuNSlcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihhbmdYLCBhbmdZLCAwKVxuICAgICAgICAgICAgY2FtZXJhU2t5Ym94Lnpvb20gPSAwLjNcbiAgICAgICAgICAgIGNhbWVyYVNreWJveC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oYW5nWCwgYW5nWSArIDE2MCwgMClcbiAgICAgICAgfSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgZ2xiOiB7IHNjcmVlbjogU2NyZWVuVVJMIH0sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgZHVzdDogRHVzdFVSTCwgaW1hZ2VQb3NYLCBpbWFnZVBvc1ksIGltYWdlUG9zWiwgaW1hZ2VOZWdYLCBpbWFnZU5lZ1ksIGltYWdlTmVnWiB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmludGVyZmFjZSBQYWludGVyU2NyZWVuT3B0aW9ucyB7XG4gICAgaW1hZ2VMZXR0ZXJzOiBXZWJnbEltYWdlXG4gICAgaW1hZ2VEdXN0OiBXZWJnbEltYWdlXG4gICAgdW5pZm9ybUNhbWVyYTogVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYVxuICAgIGFzc2V0U2NyZWVuOiBUZ2REYXRhR2xiXG4gICAgc2t5Ym94OiBUZ2RUZXh0dXJlQ3ViZVxufVxuXG5jbGFzcyBQYWludGVyU2NyZWVuIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlTGV0dGVyczogVGdkVGV4dHVyZTJEXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlRHVzdDogVGdkVGV4dHVyZTJEXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9ncmFtOiBUZ2RQYWludGVyUHJvZ3JhbVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdW5pZm9ybUJsb2NrOiBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0PFwidW5pVGltZVwiPlxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0LFxuICAgICAgICB7IHVuaWZvcm1DYW1lcmEsIGltYWdlRHVzdCwgYXNzZXRTY3JlZW4sIHNreWJveCB9OiBQYWludGVyU2NyZWVuT3B0aW9ucyxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBjb25zdCBXID0gM1xuICAgICAgICBjb25zdCBIID0gMlxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGFzc2V0U2NyZWVuLmdldE1lc2hQcmltaXRpdmVJbmRpY2VzKFwiU2NyZWVuXCIpXG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBhc3NldFNjcmVlbi5tYWtlRGF0YXNldCh7XG4gICAgICAgICAgICBtZXNoSW5kZXg6IFwiU2NyZWVuXCIsXG4gICAgICAgIH0pXG4gICAgICAgIGRhdGFzZXQuZGVidWcoKVxuICAgICAgICBjb25zdCB1bmlmb3JtQmxvY2sgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdChjb250ZXh0LCB7XG4gICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgIHVuaVRpbWU6IFwiZmxvYXRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudW5pZm9ybUJsb2NrID0gdW5pZm9ybUJsb2NrXG4gICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICAgICAgd3JhcFI6IFwiUkVQRUFUXCIsXG4gICAgICAgICAgICAgICAgd3JhcFM6IFwiUkVQRUFUXCIsXG4gICAgICAgICAgICAgICAgd3JhcFQ6IFwiUkVQRUFUXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBzY2FsZSA9IDUxMlxuICAgICAgICBjb25zdCB7IGN0eCwgY2FudmFzIH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKFcgKiBzY2FsZSwgSCAqIHNjYWxlICogMilcbiAgICAgICAgdGhpcy5pbml0Q2FudmFzKGNhbnZhcywgY3R4KVxuICAgICAgICB0aGlzLmxvYWRGb250KGNhbnZhcywgY3R4KVxuICAgICAgICB0aGlzLnRleHR1cmVEdXN0ID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGltYWdlRHVzdClcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbmV3IFRnZFBhaW50ZXJQcm9ncmFtKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRyYXdNb2RlOiBcIlRSSUFOR0xFU1wiLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBibGVuZDogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBjdWxsOiBcIm9mZlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7IHVuaWZvcm1DYW1lcmEsIHVuaWZvcm1CbG9jayB9LFxuICAgICAgICAgICAgZGF0YXNldCxcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgdGV4dHVyZXM6IHtcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlTGV0dGVyczogdGhpcy50ZXh0dXJlTGV0dGVycyxcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlRHVzdDogdGhpcy50ZXh0dXJlRHVzdCxcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlU2t5Ym94OiBza3lib3gsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFyeWluZzoge1xuICAgICAgICAgICAgICAgIHZhclVWOiBcInZlYzJcIixcbiAgICAgICAgICAgICAgICB2YXJOb3JtYWw6IFwidmVjM1wiLFxuICAgICAgICAgICAgICAgIHZhclBvc2l0aW9uOiBcInZlYzRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2ZXJ0OiB7XG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJOb3JtYWwgPSBOT1JNQUw7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFyVVYgPSBURVhDT09SRF8wO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZhclBvc2l0aW9uID0gdmVjNChQT1NJVElPTiwgMS4wKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJnbF9Qb3NpdGlvbiA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiB2YXJQb3NpdGlvbjtcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZyYWc6IHtcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgICAgICBcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmVMZXR0ZXJzLCB2ZWMyKDEuMCwgLjUpICogdmFyVVYgKyB2ZWMyKDAsIDAuMDUgKiB1bmlUaW1lKSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZmxvYXQgZGlzdCA9IGZyYWN0KHVuaVRpbWUpIC0gZnJhY3QodmFyVVYueSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWYgKGRpc3QgPCAwLjApIGRpc3QgKz0gMS4wO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRpc3QgPSAxLjAgLyAoNi4wICogZGlzdCk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3IucmdiICo9IGRpc3QgKiAoZ2xfRnJvbnRGYWNpbmcgPyAxLjAgOiAwLjE1KTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvci5yZ2IgKj0gdGV4dHVyZSh1bmlUZXh0dXJlRHVzdCwgdmFyVVYpLnI7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gY29sb3I7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWYgKCFnbF9Gcm9udEZhY2luZykgcmV0dXJuO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZlYzMgTiA9IG5vcm1hbGl6ZSh2YXJOb3JtYWwpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZlYzMgViA9IG5vcm1hbGl6ZSh1bmlDYW1lcmFQb3NpdGlvbiAtIHZhclBvc2l0aW9uLnh5eik7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMyBSID0gcmVmbGVjdCgtViwgTik7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMyBzcGVjdWxhciA9IHRleHR1cmVMb2QodW5pVGV4dHVyZVNreWJveCwgUiwgMC4wKS5yZ2I7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3BlY3VsYXIgPSBwb3coc3BlY3VsYXIsIHZlYzMoNS4wKSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yLnJnYiArPSBzcGVjdWxhciAqIC41O1wiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycy5kZWxldGUoKVxuICAgICAgICB0aGlzLnByb2dyYW0uZGVsZXRlKClcbiAgICB9XG5cbiAgICBwYWludCh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51bmlmb3JtQmxvY2sudmFsdWVzLnVuaVRpbWUgPSB0aW1lXG4gICAgICAgIHRoaXMucHJvZ3JhbS5wYWludCh0aW1lLCBkZWx0YSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRDYW52YXMoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXNcbiAgICAgICAgY29uc3QgdGV4dCA9IFwiTG9hZGluZy4uLlwiXG4gICAgICAgIGN0eC5mb250ID0gYGJvbGQgJHt3aWR0aCAvIDd9cHggbW9ub3NwYWNlYFxuICAgICAgICBjb25zdCBtZWFzdXJlID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMzZTNcIlxuICAgICAgICBjb25zdCBoID0gaGVpZ2h0IC8gNVxuICAgICAgICBjb25zdCB4ID0gKHdpZHRoIC0gbWVhc3VyZS53aWR0aCkgLyAyXG4gICAgICAgIGZvciAobGV0IHkgPSBoOyB5IDwgaGVpZ2h0OyB5ICs9IGgpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMubG9hZEJpdG1hcChjYW52YXMpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRm9udChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICB0Z2RMb2FkRm9udChcIkZ1emFyXCIsIEZ1emFyRm9udFVSTCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhc1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSB3aWR0aCAvIDhcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IGZvbnRTaXplIC8gM1xuICAgICAgICAgICAgY3R4LmZvbnQgPSBgaXRhbGljICR7Zm9udFNpemV9cHggRnV6YXJgXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjM2UzXCJcbiAgICAgICAgICAgIGxldCB4ID0gbWFyZ2luXG4gICAgICAgICAgICBsZXQgeSA9IGZvbnRTaXplICogM1xuICAgICAgICAgICAgbGV0IGJvbGQgPSBmYWxzZVxuICAgICAgICAgICAgbGV0IGl0YWxpYyA9IGZhbHNlXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gYCpGdXphciBpcyB0aGUgYmVzdCBmb250IGV2ZXIgbWFkZSBpbiB0aGlzIHdvcmxkIG9mIG1hZG5lc3MuIEl0IHdhcyBlbmdpbmVlcmVkIGJ5IGFuIHVua25vd24gX2dlbml1cyBoaWRkZW4gaW4gYSBzd2lzcyBjaXR5IGNhbGxlZCBHZW5ldmEuIFwiMDEyMzQ1Njc4OVwiYFxuICAgICAgICAgICAgZm9yIChjb25zdCB3b3JkIG9mIHRleHQuc3BsaXQoXCIgXCIpKSB7XG4gICAgICAgICAgICAgICAgaXRhbGljID0gZmFsc2VcbiAgICAgICAgICAgICAgICBib2xkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBpZiAod29yZC5zdGFydHNXaXRoKFwiX1wiKSkgaXRhbGljID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmICh3b3JkLnN0YXJ0c1dpdGgoXCIqXCIpKSBpdGFsaWMgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuV29yZCA9IHJlbW92ZVN0eWxlKHdvcmQpXG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtib2xkID8gXCJib2xkIFwiIDogXCJcIn0ke2l0YWxpYyA/IFwiaXRhbGljIFwiIDogXCJcIn0gJHtmb250U2l6ZX1weCBGdXphcmBcbiAgICAgICAgICAgICAgICBjb25zdCBtZWFzdXJlID0gY3R4Lm1lYXN1cmVUZXh0KGAke2NsZWFuV29yZH0gYClcbiAgICAgICAgICAgICAgICBpZiAoeCA+IHdpZHRoIC0gbWVhc3VyZS53aWR0aCAtIDIgKiBtYXJnaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IG1hcmdpblxuICAgICAgICAgICAgICAgICAgICB5ICs9IGZvbnRTaXplXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChjbGVhbldvcmQsIHgsIHkpXG4gICAgICAgICAgICAgICAgeCArPSBtZWFzdXJlLndpZHRoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC41XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiM1ZjU3XCJcbiAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgaGVpZ2h0OyBoICs9IGZvbnRTaXplIC8gOCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGgpICsgMC41XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCB5KVxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGgsIHkpXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzLmxvYWRCaXRtYXAoY2FudmFzKVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnBhaW50KClcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlKHdvcmQ6IHN0cmluZykge1xuICAgIHdoaWxlIChcIipfXCIuaW5jbHVkZXMod29yZC5jaGFyQXQoMCkpKSB3b3JkID0gd29yZC5zbGljZSgxKVxuICAgIHJldHVybiB3b3JkXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJQcm9ncmFtIiwiVGdkVW5pZm9ybUJ1ZmZlck9iamVjdCIsIlRnZFZlYzIiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJjbGVhciIsInVuaWZvcm1DYW1lcmEiLCJ1bmlmb3JtUGl4ZWxzIiwidW5pUGl4ZWxzIiwicGFpbnRlciIsIkZsb2F0MzJBcnJheSIsIm9uRGVsZXRlIiwiY2FtZXJhIiwidGhpY2tuZXNzIiwidGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCIsInRnZExvYWRGb250IiwiVGdkTWF0ZXJpYWxHbG9iYWwiLCJUZ2RQYWludGVyIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU2t5Ym94IiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVGdkVGV4dHVyZUN1YmUiLCJUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhIiwiU2NyZWVuVVJMIiwiRHVzdFVSTCIsIkZ1emFyRm9udFVSTCIsImltYWdlUG9zWCIsImltYWdlUG9zWSIsImltYWdlUG9zWiIsImltYWdlTmVnWCIsImltYWdlTmVnWSIsImltYWdlTmVnWiIsImFzc2V0cyIsImltYWdlTGV0dGVycyIsImltYWdlRHVzdCIsImNhbWVyYVNreWJveCIsInNreWJveCIsInBhaW50ZXJTa3lib3giLCJwYWludGVyU2NyZWVuIiwiUGFpbnRlclNjcmVlbiIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJmb290IiwidGltZSIsImFuZ1giLCJNYXRoIiwiYW5nWSIsInBhcmFtIiwiYXNzZXRTY3JlZW4iLCJXIiwiSCIsImVsZW1lbnRzIiwiZGF0YXNldCIsInVuaWZvcm1CbG9jayIsInNjYWxlIiwiX3RnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQiLCJjdHgiLCJjYW52YXMiLCJfZGVsZXRlIiwicGFpbnQiLCJkZWx0YSIsImluaXRDYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInRleHQiLCJtZWFzdXJlIiwiaCIsIngiLCJ5IiwibG9hZEZvbnQiLCJmb250U2l6ZSIsIm1hcmdpbiIsImJvbGQiLCJpdGFsaWMiLCJfaXRlcmF0b3JFcnJvciIsIndvcmQiLCJjbGVhbldvcmQiLCJy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