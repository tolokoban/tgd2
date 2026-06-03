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
    "Detail #1": 'function init(context: TgdContext) {\n    context.camera.transfo.distance = 10\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObject(context, {\n        uniforms: {\n            uniModelViewMatrix: "mat4",\n            uniProjectionMatrix: "mat4",\n        },\n    })\n    const uniformPixels = new TgdUniformBufferObject(context, {\n        uniforms: {\n            uniPixels: "vec2",\n        },\n    })\n    const uniPixels = new TgdVec2()\n    const painter = new TgdPainterProgram(context, {\n        drawMode: "TRIANGLE_STRIP",\n        uniforms: {\n            uniformCamera,\n            uniformPixels,\n        },\n        varying: {\n            varColor: "vec4",\n        },\n        dataset: [\n            {\n                attribs: {\n                    attPos: {\n                        type: "vec2",\n                        data: new Float32Array([+1, 0, +1, +1, -1, 0, -1, +1]),\n                    },\n                },\n            },\n            {\n                divisor: 1,\n                attribs: {\n                    attVec: {\n                        type: "vec3",\n                        data: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),\n                    },\n                    attCol: {\n                        type: "vec3",\n                        data: new Float32Array([1, 0.2, 0.2, 0.2, 1, 0.2, 0.2, 0.2, 1]),\n                    },\n                },\n            },\n        ],\n        vert: {\n            mainCode: [\n                "varColor = vec4(attCol, 1.0);",\n                "vec4 point = uniProjectionMatrix * uniModelViewMatrix * vec4(attVec, 1.0);",\n                "vec2 radial = normalize(vec2(-point.y, point.x)) * uniPixels * point.w;",\n                "point.xy *= attPos.y;",\n                "point.xy += radial * attPos.x;",\n                "gl_Position = point;",\n            ],\n        },\n        frag: {\n            mainCode: ["FragColor = varColor;"],\n        },\n        state: {\n            depth: "less",\n            blend: "off",\n            cull: "off",\n        },\n        onDelete: () => {\n            uniformCamera.delete()\n            uniformPixels.delete()\n        },\n    })\n    context.add(\n        () => {\n            const { camera } = context\n            uniformCamera.values.uniModelViewMatrix = camera.matrixModelView\n            uniformCamera.values.uniProjectionMatrix = camera.matrixProjection\n            const thickness = 2\n            uniPixels.x = thickness / context.width\n            uniPixels.y = thickness / context.height\n            uniformPixels.values.uniPixels = uniPixels\n        },\n        clear,\n        painter,\n        // new TgdPainterState(context, {\n        //     depth: "less",\n        //     children: [new TgdPainterMesh(context)],\n        // }),\n    )\n    context.paint()\n    painter.debug()\n}'
};
var FULL = 'import {\n    type TgdContext,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterProgram,\n    TgdPainterState,\n    TgdUniformBufferObject,\n    TgdVec2,\n} from "@tolokoban/tgd"\n\nimport View from "@/components/demo/Tgd"\n\nfunction init(context: TgdContext) {\n    context.camera.transfo.distance = 10\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObject(context, {\n        uniforms: {\n            uniModelViewMatrix: "mat4",\n            uniProjectionMatrix: "mat4",\n        },\n    })\n    const uniformPixels = new TgdUniformBufferObject(context, {\n        uniforms: {\n            uniPixels: "vec2",\n        },\n    })\n    const uniPixels = new TgdVec2()\n    const painter = new TgdPainterProgram(context, {\n        drawMode: "TRIANGLE_STRIP",\n        uniforms: {\n            uniformCamera,\n            uniformPixels,\n        },\n        varying: {\n            varColor: "vec4",\n        },\n        dataset: [\n            {\n                attribs: {\n                    attPos: {\n                        type: "vec2",\n                        data: new Float32Array([+1, 0, +1, +1, -1, 0, -1, +1]),\n                    },\n                },\n            },\n            {\n                divisor: 1,\n                attribs: {\n                    attVec: {\n                        type: "vec3",\n                        data: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),\n                    },\n                    attCol: {\n                        type: "vec3",\n                        data: new Float32Array([1, 0.2, 0.2, 0.2, 1, 0.2, 0.2, 0.2, 1]),\n                    },\n                },\n            },\n        ],\n        vert: {\n            mainCode: [\n                "varColor = vec4(attCol, 1.0);",\n                "vec4 point = uniProjectionMatrix * uniModelViewMatrix * vec4(attVec, 1.0);",\n                "vec2 radial = normalize(vec2(-point.y, point.x)) * uniPixels * point.w;",\n                "point.xy *= attPos.y;",\n                "point.xy += radial * attPos.x;",\n                "gl_Position = point;",\n            ],\n        },\n        frag: {\n            mainCode: ["FragColor = varColor;"],\n        },\n        state: {\n            depth: "less",\n            blend: "off",\n            cull: "off",\n        },\n        onDelete: () => {\n            uniformCamera.delete()\n            uniformPixels.delete()\n        },\n    })\n    context.add(\n        () => {\n            const { camera } = context\n            uniformCamera.values.uniModelViewMatrix = camera.matrixModelView\n            uniformCamera.values.uniProjectionMatrix = camera.matrixProjection\n            const thickness = 2\n            uniPixels.x = thickness / context.width\n            uniPixels.y = thickness / context.height\n            uniformPixels.values.uniPixels = uniPixels\n        },\n        clear,\n        painter,\n        // new TgdPainterState(context, {\n        //     depth: "less",\n        //     children: [new TgdPainterMesh(context)],\n        // }),\n    )\n    context.paint()\n    painter.debug()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo\n            width="512px"\n            height="512px"\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n        />\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 4
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/main.demo/main.demo.tsx",
        lineNumber: 111,
        columnNumber: 3
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
    "Detail #1": '    context.camera.transfo.setPosition(0, 2, 0)\n    context.camera.fitSpaceAtTarget(9, 7)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const imageLetters = assets.image.letters\n    const imageDust = assets.image.dust\n    const cameraSkybox = context.camera.clone()\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.imagePosX,\n        imagePosY: assets.image.imagePosY,\n        imagePosZ: assets.image.imagePosZ,\n        imageNegX: assets.image.imageNegX,\n        imageNegY: assets.image.imageNegY,\n        imageNegZ: assets.image.imageNegZ,\n    })\n    const painterSkybox = new TgdPainterSkybox(context, {\n        tint: [0.4, 0.4, 0.4, 1],\n        camera: cameraSkybox,\n        texture: skybox,\n    })\n    const painterScreen = new PainterScreen(context, {\n        uniformCamera,\n        imageLetters,\n        imageDust,\n        assetScreen: assets.glb.screen,\n        skybox,\n    })\n    const geometry = assets.glb.screen.makeGeometry({\n        meshIndex: "Mesh",\n    })\n    const material = new TgdMaterialGlobal({\n        ambientColor: skybox,\n    })\n    const foot = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    context.add(\n        painterSkybox,\n        new TgdPainterState(context, {\n            depth: "less",\n            children: [clear, foot, painterScreen],\n        }),\n        (time) => {\n            const angX = Math.abs(10 * Math.sin(time * 0.341))\n            const angY = 30 * Math.sin(time * 0.5)\n            context.camera.transfo.setEulerRotation(angX, angY, 0)\n            cameraSkybox.zoom = 0.3\n            cameraSkybox.transfo.setEulerRotation(angX, angY + 160, 0)\n        },\n    )\n    context.play()'
};
var FULL = 'import {\n    tgdCanvasCreateWithContext2D,\n    type TgdContext,\n    type TgdDataGlb,\n    tgdLoadFont,\n    TgdMaterialGlobal,\n    TgdPainter,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterProgram,\n    TgdPainterSkybox,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdTextureCube,\n    TgdUniformBufferObject,\n    TgdUniformBufferObjectCamera,\n    type WebglImage,\n} from "@tolokoban/tgd"\n\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport ScreenURL from "./screen.glb"\nimport DustURL from "./dust.webp"\nimport FuzarFontURL from "./Fuzar_GX.woff2"\nimport imagePosX from "@/assets/cubemap/1024/electric-board/posX.webp" // +X\nimport imagePosY from "@/assets/cubemap/1024/electric-board/posY.webp" // +Y\nimport imagePosZ from "@/assets/cubemap/1024/electric-board/posZ.webp" // +Z\nimport imageNegX from "@/assets/cubemap/1024/electric-board/negX.webp" // -X\nimport imageNegY from "@/assets/cubemap/1024/electric-board/negY.webp" // -Y\nimport imageNegZ from "@/assets/cubemap/1024/electric-board/negZ.webp" // -Z\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.setPosition(0, 2, 0)\n    context.camera.fitSpaceAtTarget(9, 7)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const imageLetters = assets.image.letters\n    const imageDust = assets.image.dust\n    const cameraSkybox = context.camera.clone()\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.imagePosX,\n        imagePosY: assets.image.imagePosY,\n        imagePosZ: assets.image.imagePosZ,\n        imageNegX: assets.image.imageNegX,\n        imageNegY: assets.image.imageNegY,\n        imageNegZ: assets.image.imageNegZ,\n    })\n    const painterSkybox = new TgdPainterSkybox(context, {\n        tint: [0.4, 0.4, 0.4, 1],\n        camera: cameraSkybox,\n        texture: skybox,\n    })\n    const painterScreen = new PainterScreen(context, {\n        uniformCamera,\n        imageLetters,\n        imageDust,\n        assetScreen: assets.glb.screen,\n        skybox,\n    })\n    const geometry = assets.glb.screen.makeGeometry({\n        meshIndex: "Mesh",\n    })\n    const material = new TgdMaterialGlobal({\n        ambientColor: skybox,\n    })\n    const foot = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    context.add(\n        painterSkybox,\n        new TgdPainterState(context, {\n            depth: "less",\n            children: [clear, foot, painterScreen],\n        }),\n        (time) => {\n            const angX = Math.abs(10 * Math.sin(time * 0.341))\n            const angY = 30 * Math.sin(time * 0.5)\n            context.camera.transfo.setEulerRotation(angX, angY, 0)\n            cameraSkybox.zoom = 0.3\n            cameraSkybox.transfo.setEulerRotation(angX, angY + 160, 0)\n        },\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            assets={{\n                glb: { screen: ScreenURL },\n                image: { dust: DustURL, imagePosX, imagePosY, imagePosZ, imageNegX, imageNegY, imageNegZ },\n            }}\n        />\n    )\n}\n\ninterface PainterScreenOptions {\n    imageLetters: WebglImage\n    imageDust: WebglImage\n    uniformCamera: TgdUniformBufferObjectCamera\n    assetScreen: TgdDataGlb\n    skybox: TgdTextureCube\n}\n\nclass PainterScreen extends TgdPainter {\n    private readonly textureLetters: TgdTexture2D\n    private readonly textureDust: TgdTexture2D\n    private readonly program: TgdPainterProgram\n    private readonly uniformBlock: TgdUniformBufferObject<"uniTime">\n\n    constructor(\n        public readonly context: TgdContext,\n        { uniformCamera, imageDust, assetScreen, skybox }: PainterScreenOptions,\n    ) {\n        super()\n        const W = 3\n        const H = 2\n        const elements = assetScreen.getMeshPrimitiveIndices("Screen")\n        const dataset = assetScreen.makeDataset({\n            meshIndex: "Screen",\n        })\n        dataset.debug()\n        const uniformBlock = new TgdUniformBufferObject(context, {\n            uniforms: {\n                uniTime: "float",\n            },\n        })\n        this.uniformBlock = uniformBlock\n        this.textureLetters = new TgdTexture2D(context, {\n            params: {\n                magFilter: "LINEAR",\n                minFilter: "LINEAR",\n                wrapR: "REPEAT",\n                wrapS: "REPEAT",\n                wrapT: "REPEAT",\n            },\n        })\n        const scale = 512\n        const { ctx, canvas } = tgdCanvasCreateWithContext2D(W * scale, H * scale * 2)\n        this.initCanvas(canvas, ctx)\n        this.loadFont(canvas, ctx)\n        this.textureDust = new TgdTexture2D(context).loadBitmap(imageDust)\n        this.program = new TgdPainterProgram(context, {\n            drawMode: "TRIANGLES",\n            state: {\n                blend: "add",\n                cull: "off",\n            },\n            uniforms: { uniformCamera, uniformBlock },\n            dataset,\n            elements,\n            textures: {\n                uniTextureLetters: this.textureLetters,\n                uniTextureDust: this.textureDust,\n                uniTextureSkybox: skybox,\n            },\n            varying: {\n                varUV: "vec2",\n                varNormal: "vec3",\n                varPosition: "vec4",\n            },\n            vert: {\n                mainCode: [\n                    "varNormal = NORMAL;",\n                    "varUV = TEXCOORD_0;",\n                    "varPosition = vec4(POSITION, 1.0);",\n                    "gl_Position = uniProjectionMatrix * uniModelViewMatrix * varPosition;",\n                ],\n            },\n            frag: {\n                mainCode: [\n                    "vec4 color = texture(uniTextureLetters, vec2(1.0, .5) * varUV + vec2(0, 0.05 * uniTime));",\n                    "float dist = fract(uniTime) - fract(varUV.y);",\n                    "if (dist < 0.0) dist += 1.0;",\n                    "dist = 1.0 / (6.0 * dist);",\n                    "color.rgb *= dist * (gl_FrontFacing ? 1.0 : 0.15);",\n                    "color.rgb *= texture(uniTextureDust, varUV).r;",\n                    "FragColor = color;",\n                    "if (!gl_FrontFacing) return;",\n                    "vec3 N = normalize(varNormal);",\n                    "vec3 V = normalize(uniCameraPosition - varPosition.xyz);",\n                    "vec3 R = reflect(-V, N);",\n                    "vec3 specular = textureLod(uniTextureSkybox, R, 0.0).rgb;",\n                    "specular = pow(specular, vec3(5.0));",\n                    "FragColor.rgb += specular * .5;",\n                ],\n            },\n        })\n    }\n\n    delete() {\n        this.textureLetters.delete()\n        this.program.delete()\n    }\n\n    paint(time: number, delta: number) {\n        this.uniformBlock.values.uniTime = time\n        this.program.paint(time, delta)\n    }\n\n    private initCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {\n        const { width, height } = canvas\n        const text = "Loading..."\n        ctx.font = `bold ${width / 7}px monospace`\n        const measure = ctx.measureText(text)\n        ctx.fillStyle = "#3e3"\n        const h = height / 5\n        const x = (width - measure.width) / 2\n        for (let y = h; y < height; y += h) {\n            ctx.fillText(text, x, y)\n        }\n        this.textureLetters.loadBitmap(canvas)\n    }\n\n    private loadFont(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {\n        tgdLoadFont("Fuzar", FuzarFontURL).then(() => {\n            const { width, height } = canvas\n            ctx.clearRect(0, 0, width, height)\n            const fontSize = width / 8\n            const margin = fontSize / 3\n            ctx.font = `italic ${fontSize}px Fuzar`\n            ctx.fillStyle = "#3e3"\n            let x = margin\n            let y = fontSize * 3\n            let bold = false\n            let italic = false\n            const text = `*Fuzar is the best font ever made in this world of madness. It was engineered by an unknown _genius hidden in a swiss city called Geneva. "0123456789"`\n            for (const word of text.split(" ")) {\n                italic = false\n                bold = false\n                if (word.startsWith("_")) italic = true\n                if (word.startsWith("*")) italic = false\n                const cleanWord = removeStyle(word)\n                ctx.font = `${bold ? "bold " : ""}${italic ? "italic " : ""} ${fontSize}px Fuzar`\n                const measure = ctx.measureText(`${cleanWord} `)\n                if (x > width - measure.width - 2 * margin) {\n                    x = margin\n                    y += fontSize\n                }\n                ctx.fillText(cleanWord, x, y)\n                x += measure.width\n            }\n            ctx.lineWidth = 0.5\n            ctx.strokeStyle = "#5f57"\n            for (let h = 0; h < height; h += fontSize / 8) {\n                const y = Math.floor(h) + 0.5\n                ctx.beginPath()\n                ctx.moveTo(0, y)\n                ctx.lineTo(width, y)\n                ctx.stroke()\n            }\n            this.textureLetters.loadBitmap(canvas)\n            this.context.paint()\n        })\n    }\n}\n\nfunction removeStyle(word: string) {\n    while ("*_".includes(word.charAt(0))) word = word.slice(1)\n    return word\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_matrix_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 4
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/program/_/matrix.demo/matrix.demo.tsx",
        lineNumber: 93,
        columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wcm9ncmFtX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jcy04Yzg1YWIuM2Y2YmExYzQ3N2E1MDAyMC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3Byb2dyYW0vXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3Byb2dyYW0vXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wcm9ncmFtL18vbWF0cml4LmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3Byb2dyYW0vXy9tYXRyaXguZGVtby9tYXRyaXguZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcHJvZ3JhbS9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkRldGFpbCAjMVwiOlxuXHRcdCdmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDEwXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdChjb250ZXh0LCB7XFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaU1vZGVsVmlld01hdHJpeDogXCJtYXQ0XCIsXFxuICAgICAgICAgICAgdW5pUHJvamVjdGlvbk1hdHJpeDogXCJtYXQ0XCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlmb3JtUGl4ZWxzID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlQaXhlbHM6IFwidmVjMlwiLFxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgdW5pUGl4ZWxzID0gbmV3IFRnZFZlYzIoKVxcbiAgICBjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJQcm9ncmFtKGNvbnRleHQsIHtcXG4gICAgICAgIGRyYXdNb2RlOiBcIlRSSUFOR0xFX1NUUklQXCIsXFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEsXFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscyxcXG4gICAgICAgIH0sXFxuICAgICAgICB2YXJ5aW5nOiB7XFxuICAgICAgICAgICAgdmFyQ29sb3I6IFwidmVjNFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGRhdGFzZXQ6IFtcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgIGF0dHJpYnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGF0dFBvczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidmVjMlwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWysxLCAwLCArMSwgKzEsIC0xLCAwLCAtMSwgKzFdKSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgIGRpdmlzb3I6IDEsXFxuICAgICAgICAgICAgICAgIGF0dHJpYnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGF0dFZlYzoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidmVjM1wiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDFdKSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBhdHRDb2w6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZlYzNcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLjIsIDAuMiwgMC4yLCAxLCAwLjIsIDAuMiwgMC4yLCAxXSksXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICBdLFxcbiAgICAgICAgdmVydDoge1xcbiAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgIFwidmFyQ29sb3IgPSB2ZWM0KGF0dENvbCwgMS4wKTtcIixcXG4gICAgICAgICAgICAgICAgXCJ2ZWM0IHBvaW50ID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIHVuaU1vZGVsVmlld01hdHJpeCAqIHZlYzQoYXR0VmVjLCAxLjApO1wiLFxcbiAgICAgICAgICAgICAgICBcInZlYzIgcmFkaWFsID0gbm9ybWFsaXplKHZlYzIoLXBvaW50LnksIHBvaW50LngpKSAqIHVuaVBpeGVscyAqIHBvaW50Lnc7XCIsXFxuICAgICAgICAgICAgICAgIFwicG9pbnQueHkgKj0gYXR0UG9zLnk7XCIsXFxuICAgICAgICAgICAgICAgIFwicG9pbnQueHkgKz0gcmFkaWFsICogYXR0UG9zLng7XCIsXFxuICAgICAgICAgICAgICAgIFwiZ2xfUG9zaXRpb24gPSBwb2ludDtcIixcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZyYWc6IHtcXG4gICAgICAgICAgICBtYWluQ29kZTogW1wiRnJhZ0NvbG9yID0gdmFyQ29sb3I7XCJdLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHN0YXRlOiB7XFxuICAgICAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxcbiAgICAgICAgICAgIGJsZW5kOiBcIm9mZlwiLFxcbiAgICAgICAgICAgIGN1bGw6IFwib2ZmXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgb25EZWxldGU6ICgpID0+IHtcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLmRlbGV0ZSgpXFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscy5kZWxldGUoKVxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICAoKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnZhbHVlcy51bmlNb2RlbFZpZXdNYXRyaXggPSBjYW1lcmEubWF0cml4TW9kZWxWaWV3XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS52YWx1ZXMudW5pUHJvamVjdGlvbk1hdHJpeCA9IGNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uXFxuICAgICAgICAgICAgY29uc3QgdGhpY2tuZXNzID0gMlxcbiAgICAgICAgICAgIHVuaVBpeGVscy54ID0gdGhpY2tuZXNzIC8gY29udGV4dC53aWR0aFxcbiAgICAgICAgICAgIHVuaVBpeGVscy55ID0gdGhpY2tuZXNzIC8gY29udGV4dC5oZWlnaHRcXG4gICAgICAgICAgICB1bmlmb3JtUGl4ZWxzLnZhbHVlcy51bmlQaXhlbHMgPSB1bmlQaXhlbHNcXG4gICAgICAgIH0sXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIHBhaW50ZXIsXFxuICAgICAgICAvLyBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIC8vICAgICBkZXB0aDogXCJsZXNzXCIsXFxuICAgICAgICAvLyAgICAgY2hpbGRyZW46IFtuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCldLFxcbiAgICAgICAgLy8gfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIHBhaW50ZXIuZGVidWcoKVxcbn0nLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IHtcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyUHJvZ3JhbSxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0LFxcbiAgICBUZ2RWZWMyLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5cXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDEwXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdChjb250ZXh0LCB7XFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaU1vZGVsVmlld01hdHJpeDogXCJtYXQ0XCIsXFxuICAgICAgICAgICAgdW5pUHJvamVjdGlvbk1hdHJpeDogXCJtYXQ0XCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlmb3JtUGl4ZWxzID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlQaXhlbHM6IFwidmVjMlwiLFxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgdW5pUGl4ZWxzID0gbmV3IFRnZFZlYzIoKVxcbiAgICBjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJQcm9ncmFtKGNvbnRleHQsIHtcXG4gICAgICAgIGRyYXdNb2RlOiBcIlRSSUFOR0xFX1NUUklQXCIsXFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEsXFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscyxcXG4gICAgICAgIH0sXFxuICAgICAgICB2YXJ5aW5nOiB7XFxuICAgICAgICAgICAgdmFyQ29sb3I6IFwidmVjNFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGRhdGFzZXQ6IFtcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgIGF0dHJpYnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGF0dFBvczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidmVjMlwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWysxLCAwLCArMSwgKzEsIC0xLCAwLCAtMSwgKzFdKSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgIGRpdmlzb3I6IDEsXFxuICAgICAgICAgICAgICAgIGF0dHJpYnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIGF0dFZlYzoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidmVjM1wiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDFdKSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBhdHRDb2w6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInZlYzNcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLjIsIDAuMiwgMC4yLCAxLCAwLjIsIDAuMiwgMC4yLCAxXSksXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICBdLFxcbiAgICAgICAgdmVydDoge1xcbiAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgIFwidmFyQ29sb3IgPSB2ZWM0KGF0dENvbCwgMS4wKTtcIixcXG4gICAgICAgICAgICAgICAgXCJ2ZWM0IHBvaW50ID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIHVuaU1vZGVsVmlld01hdHJpeCAqIHZlYzQoYXR0VmVjLCAxLjApO1wiLFxcbiAgICAgICAgICAgICAgICBcInZlYzIgcmFkaWFsID0gbm9ybWFsaXplKHZlYzIoLXBvaW50LnksIHBvaW50LngpKSAqIHVuaVBpeGVscyAqIHBvaW50Lnc7XCIsXFxuICAgICAgICAgICAgICAgIFwicG9pbnQueHkgKj0gYXR0UG9zLnk7XCIsXFxuICAgICAgICAgICAgICAgIFwicG9pbnQueHkgKz0gcmFkaWFsICogYXR0UG9zLng7XCIsXFxuICAgICAgICAgICAgICAgIFwiZ2xfUG9zaXRpb24gPSBwb2ludDtcIixcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZyYWc6IHtcXG4gICAgICAgICAgICBtYWluQ29kZTogW1wiRnJhZ0NvbG9yID0gdmFyQ29sb3I7XCJdLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHN0YXRlOiB7XFxuICAgICAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxcbiAgICAgICAgICAgIGJsZW5kOiBcIm9mZlwiLFxcbiAgICAgICAgICAgIGN1bGw6IFwib2ZmXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgb25EZWxldGU6ICgpID0+IHtcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLmRlbGV0ZSgpXFxuICAgICAgICAgICAgdW5pZm9ybVBpeGVscy5kZWxldGUoKVxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICAoKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnZhbHVlcy51bmlNb2RlbFZpZXdNYXRyaXggPSBjYW1lcmEubWF0cml4TW9kZWxWaWV3XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS52YWx1ZXMudW5pUHJvamVjdGlvbk1hdHJpeCA9IGNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uXFxuICAgICAgICAgICAgY29uc3QgdGhpY2tuZXNzID0gMlxcbiAgICAgICAgICAgIHVuaVBpeGVscy54ID0gdGhpY2tuZXNzIC8gY29udGV4dC53aWR0aFxcbiAgICAgICAgICAgIHVuaVBpeGVscy55ID0gdGhpY2tuZXNzIC8gY29udGV4dC5oZWlnaHRcXG4gICAgICAgICAgICB1bmlmb3JtUGl4ZWxzLnZhbHVlcy51bmlQaXhlbHMgPSB1bmlQaXhlbHNcXG4gICAgICAgIH0sXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIHBhaW50ZXIsXFxuICAgICAgICAvLyBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIC8vICAgICBkZXB0aDogXCJsZXNzXCIsXFxuICAgICAgICAvLyAgICAgY2hpbGRyZW46IFtuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCldLFxcbiAgICAgICAgLy8gfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIHBhaW50ZXIuZGVidWcoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgd2lkdGg9XCI1MTJweFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVwiNTEycHhcIlxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgb3B0aW9ucz17e1xcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJQcm9ncmFtLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFVuaWZvcm1CdWZmZXJPYmplY3QsXG5cdFRnZFZlYzIsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG5cdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxMDtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRjb2xvcjogWzAsIDAsIDAsIDFdLFxuXHRcdGRlcHRoOiAxLFxuXHR9KTtcblx0Y29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcblx0XHR1bmlmb3Jtczoge1xuXHRcdFx0dW5pTW9kZWxWaWV3TWF0cml4OiBcIm1hdDRcIixcblx0XHRcdHVuaVByb2plY3Rpb25NYXRyaXg6IFwibWF0NFwiLFxuXHRcdH0sXG5cdH0pO1xuXHRjb25zdCB1bmlmb3JtUGl4ZWxzID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xuXHRcdHVuaWZvcm1zOiB7XG5cdFx0XHR1bmlQaXhlbHM6IFwidmVjMlwiLFxuXHRcdH0sXG5cdH0pO1xuXHRjb25zdCB1bmlQaXhlbHMgPSBuZXcgVGdkVmVjMigpO1xuXHRjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJQcm9ncmFtKGNvbnRleHQsIHtcblx0XHRkcmF3TW9kZTogXCJUUklBTkdMRV9TVFJJUFwiLFxuXHRcdHVuaWZvcm1zOiB7XG5cdFx0XHR1bmlmb3JtQ2FtZXJhLFxuXHRcdFx0dW5pZm9ybVBpeGVscyxcblx0XHR9LFxuXHRcdHZhcnlpbmc6IHtcblx0XHRcdHZhckNvbG9yOiBcInZlYzRcIixcblx0XHR9LFxuXHRcdGRhdGFzZXQ6IFtcblx0XHRcdHtcblx0XHRcdFx0YXR0cmliczoge1xuXHRcdFx0XHRcdGF0dFBvczoge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJ2ZWMyXCIsXG5cdFx0XHRcdFx0XHRkYXRhOiBuZXcgRmxvYXQzMkFycmF5KFsrMSwgMCwgKzEsICsxLCAtMSwgMCwgLTEsICsxXSksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGRpdmlzb3I6IDEsXG5cdFx0XHRcdGF0dHJpYnM6IHtcblx0XHRcdFx0XHRhdHRWZWM6IHtcblx0XHRcdFx0XHRcdHR5cGU6IFwidmVjM1wiLFxuXHRcdFx0XHRcdFx0ZGF0YTogbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV0pLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YXR0Q29sOiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcInZlYzNcIixcblx0XHRcdFx0XHRcdGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAuMiwgMC4yLCAwLjIsIDEsIDAuMiwgMC4yLCAwLjIsIDFdKSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdHZlcnQ6IHtcblx0XHRcdG1haW5Db2RlOiBbXG5cdFx0XHRcdFwidmFyQ29sb3IgPSB2ZWM0KGF0dENvbCwgMS4wKTtcIixcblx0XHRcdFx0XCJ2ZWM0IHBvaW50ID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIHVuaU1vZGVsVmlld01hdHJpeCAqIHZlYzQoYXR0VmVjLCAxLjApO1wiLFxuXHRcdFx0XHRcInZlYzIgcmFkaWFsID0gbm9ybWFsaXplKHZlYzIoLXBvaW50LnksIHBvaW50LngpKSAqIHVuaVBpeGVscyAqIHBvaW50Lnc7XCIsXG5cdFx0XHRcdFwicG9pbnQueHkgKj0gYXR0UG9zLnk7XCIsXG5cdFx0XHRcdFwicG9pbnQueHkgKz0gcmFkaWFsICogYXR0UG9zLng7XCIsXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSBwb2ludDtcIixcblx0XHRcdF0sXG5cdFx0fSxcblx0XHRmcmFnOiB7XG5cdFx0XHRtYWluQ29kZTogW1wiRnJhZ0NvbG9yID0gdmFyQ29sb3I7XCJdLFxuXHRcdH0sXG5cdFx0c3RhdGU6IHtcblx0XHRcdGRlcHRoOiBcImxlc3NcIixcblx0XHRcdGJsZW5kOiBcIm9mZlwiLFxuXHRcdFx0Y3VsbDogXCJvZmZcIixcblx0XHR9LFxuXHRcdG9uRGVsZXRlOiAoKSA9PiB7XG5cdFx0XHR1bmlmb3JtQ2FtZXJhLmRlbGV0ZSgpO1xuXHRcdFx0dW5pZm9ybVBpeGVscy5kZWxldGUoKTtcblx0XHR9LFxuXHR9KTtcblx0Y29udGV4dC5hZGQoXG5cdFx0KCkgPT4ge1xuXHRcdFx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHQ7XG5cdFx0XHR1bmlmb3JtQ2FtZXJhLnZhbHVlcy51bmlNb2RlbFZpZXdNYXRyaXggPSBjYW1lcmEubWF0cml4TW9kZWxWaWV3O1xuXHRcdFx0dW5pZm9ybUNhbWVyYS52YWx1ZXMudW5pUHJvamVjdGlvbk1hdHJpeCA9IGNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uO1xuXHRcdFx0Y29uc3QgdGhpY2tuZXNzID0gMjtcblx0XHRcdHVuaVBpeGVscy54ID0gdGhpY2tuZXNzIC8gY29udGV4dC53aWR0aDtcblx0XHRcdHVuaVBpeGVscy55ID0gdGhpY2tuZXNzIC8gY29udGV4dC5oZWlnaHQ7XG5cdFx0XHR1bmlmb3JtUGl4ZWxzLnZhbHVlcy51bmlQaXhlbHMgPSB1bmlQaXhlbHM7XG5cdFx0fSxcblx0XHRjbGVhcixcblx0XHRwYWludGVyLFxuXHRcdC8vIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdC8vICAgICBkZXB0aDogXCJsZXNzXCIsXG5cdFx0Ly8gICAgIGNoaWxkcmVuOiBbbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXSxcblx0XHQvLyB9KSxcblx0KTtcblx0Y29udGV4dC5wYWludCgpO1xuXHRwYWludGVyLmRlYnVnKCk7XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRnaXptb1xuXHRcdFx0d2lkdGg9XCI1MTJweFwiXG5cdFx0XHRoZWlnaHQ9XCI1MTJweFwiXG5cdFx0XHRjb250cm9sbGVyPXt7XG5cdFx0XHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRcdH19XG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYXRyaXguZGVtb1wiO1xuXG5jb25zdCBGT0NVUyA9IHtcblx0XCJEZXRhaWwgIzFcIjpcblx0XHQnICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMiwgMClcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg5LCA3KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KVxcbiAgICBjb25zdCBpbWFnZUxldHRlcnMgPSBhc3NldHMuaW1hZ2UubGV0dGVyc1xcbiAgICBjb25zdCBpbWFnZUR1c3QgPSBhc3NldHMuaW1hZ2UuZHVzdFxcbiAgICBjb25zdCBjYW1lcmFTa3lib3ggPSBjb250ZXh0LmNhbWVyYS5jbG9uZSgpXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhaW50ZXJTa3lib3ggPSBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XFxuICAgICAgICB0aW50OiBbMC40LCAwLjQsIDAuNCwgMV0sXFxuICAgICAgICBjYW1lcmE6IGNhbWVyYVNreWJveCxcXG4gICAgICAgIHRleHR1cmU6IHNreWJveCxcXG4gICAgfSlcXG4gICAgY29uc3QgcGFpbnRlclNjcmVlbiA9IG5ldyBQYWludGVyU2NyZWVuKGNvbnRleHQsIHtcXG4gICAgICAgIHVuaWZvcm1DYW1lcmEsXFxuICAgICAgICBpbWFnZUxldHRlcnMsXFxuICAgICAgICBpbWFnZUR1c3QsXFxuICAgICAgICBhc3NldFNjcmVlbjogYXNzZXRzLmdsYi5zY3JlZW4sXFxuICAgICAgICBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IGdlb21ldHJ5ID0gYXNzZXRzLmdsYi5zY3JlZW4ubWFrZUdlb21ldHJ5KHtcXG4gICAgICAgIG1lc2hJbmRleDogXCJNZXNoXCIsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcXG4gICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBmb290ID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIGdlb21ldHJ5LFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgcGFpbnRlclNreWJveCxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBmb290LCBwYWludGVyU2NyZWVuXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBjb25zdCBhbmdYID0gTWF0aC5hYnMoMTAgKiBNYXRoLnNpbih0aW1lICogMC4zNDEpKVxcbiAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSAzMCAqIE1hdGguc2luKHRpbWUgKiAwLjUpXFxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1ksIDApXFxuICAgICAgICAgICAgY2FtZXJhU2t5Ym94Lnpvb20gPSAwLjNcXG4gICAgICAgICAgICBjYW1lcmFTa3lib3gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1kgKyAxNjAsIDApXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpJyxcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7XFxuICAgIHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgdHlwZSBUZ2REYXRhR2xiLFxcbiAgICB0Z2RMb2FkRm9udCxcXG4gICAgVGdkTWF0ZXJpYWxHbG9iYWwsXFxuICAgIFRnZFBhaW50ZXIsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJQcm9ncmFtLFxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgVGdkVGV4dHVyZUN1YmUsXFxuICAgIFRnZFVuaWZvcm1CdWZmZXJPYmplY3QsXFxuICAgIFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEsXFxuICAgIHR5cGUgV2ViZ2xJbWFnZSxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5cXG5pbXBvcnQgU2NyZWVuVVJMIGZyb20gXCIuL3NjcmVlbi5nbGJcIlxcbmltcG9ydCBEdXN0VVJMIGZyb20gXCIuL2R1c3Qud2VicFwiXFxuaW1wb3J0IEZ1emFyRm9udFVSTCBmcm9tIFwiLi9GdXphcl9HWC53b2ZmMlwiXFxuaW1wb3J0IGltYWdlUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1gud2VicFwiIC8vICtYXFxuaW1wb3J0IGltYWdlUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1kud2VicFwiIC8vICtZXFxuaW1wb3J0IGltYWdlUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1oud2VicFwiIC8vICtaXFxuaW1wb3J0IGltYWdlTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1gud2VicFwiIC8vIC1YXFxuaW1wb3J0IGltYWdlTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1kud2VicFwiIC8vIC1ZXFxuaW1wb3J0IGltYWdlTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1oud2VicFwiIC8vIC1aXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDIsIDApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoOSwgNylcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcXG4gICAgY29uc3QgaW1hZ2VMZXR0ZXJzID0gYXNzZXRzLmltYWdlLmxldHRlcnNcXG4gICAgY29uc3QgaW1hZ2VEdXN0ID0gYXNzZXRzLmltYWdlLmR1c3RcXG4gICAgY29uc3QgY2FtZXJhU2t5Ym94ID0gY29udGV4dC5jYW1lcmEuY2xvbmUoKVxcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NYLFxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NaLFxcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdYLFxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdaLFxcbiAgICB9KVxcbiAgICBjb25zdCBwYWludGVyU2t5Ym94ID0gbmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xcbiAgICAgICAgdGludDogWzAuNCwgMC40LCAwLjQsIDFdLFxcbiAgICAgICAgY2FtZXJhOiBjYW1lcmFTa3lib3gsXFxuICAgICAgICB0ZXh0dXJlOiBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhaW50ZXJTY3JlZW4gPSBuZXcgUGFpbnRlclNjcmVlbihjb250ZXh0LCB7XFxuICAgICAgICB1bmlmb3JtQ2FtZXJhLFxcbiAgICAgICAgaW1hZ2VMZXR0ZXJzLFxcbiAgICAgICAgaW1hZ2VEdXN0LFxcbiAgICAgICAgYXNzZXRTY3JlZW46IGFzc2V0cy5nbGIuc2NyZWVuLFxcbiAgICAgICAgc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBnZW9tZXRyeSA9IGFzc2V0cy5nbGIuc2NyZWVuLm1ha2VHZW9tZXRyeSh7XFxuICAgICAgICBtZXNoSW5kZXg6IFwiTWVzaFwiLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XFxuICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcXG4gICAgfSlcXG4gICAgY29uc3QgZm9vdCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICBnZW9tZXRyeSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIHBhaW50ZXJTa3lib3gsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgZm9vdCwgcGFpbnRlclNjcmVlbl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgICh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgYW5nWCA9IE1hdGguYWJzKDEwICogTWF0aC5zaW4odGltZSAqIDAuMzQxKSlcXG4gICAgICAgICAgICBjb25zdCBhbmdZID0gMzAgKiBNYXRoLnNpbih0aW1lICogMC41KVxcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihhbmdYLCBhbmdZLCAwKVxcbiAgICAgICAgICAgIGNhbWVyYVNreWJveC56b29tID0gMC4zXFxuICAgICAgICAgICAgY2FtZXJhU2t5Ym94LnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihhbmdYLCBhbmdZICsgMTYwLCAwKVxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgb3B0aW9ucz17e1xcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7IHNjcmVlbjogU2NyZWVuVVJMIH0sXFxuICAgICAgICAgICAgICAgIGltYWdlOiB7IGR1c3Q6IER1c3RVUkwsIGltYWdlUG9zWCwgaW1hZ2VQb3NZLCBpbWFnZVBvc1osIGltYWdlTmVnWCwgaW1hZ2VOZWdZLCBpbWFnZU5lZ1ogfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cXG5pbnRlcmZhY2UgUGFpbnRlclNjcmVlbk9wdGlvbnMge1xcbiAgICBpbWFnZUxldHRlcnM6IFdlYmdsSW1hZ2VcXG4gICAgaW1hZ2VEdXN0OiBXZWJnbEltYWdlXFxuICAgIHVuaWZvcm1DYW1lcmE6IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmFcXG4gICAgYXNzZXRTY3JlZW46IFRnZERhdGFHbGJcXG4gICAgc2t5Ym94OiBUZ2RUZXh0dXJlQ3ViZVxcbn1cXG5cXG5jbGFzcyBQYWludGVyU2NyZWVuIGV4dGVuZHMgVGdkUGFpbnRlciB7XFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZUxldHRlcnM6IFRnZFRleHR1cmUyRFxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmVEdXN0OiBUZ2RUZXh0dXJlMkRcXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9ncmFtOiBUZ2RQYWludGVyUHJvZ3JhbVxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVuaWZvcm1CbG9jazogVGdkVW5pZm9ybUJ1ZmZlck9iamVjdDxcInVuaVRpbWVcIj5cXG5cXG4gICAgY29uc3RydWN0b3IoXFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcXG4gICAgICAgIHsgdW5pZm9ybUNhbWVyYSwgaW1hZ2VEdXN0LCBhc3NldFNjcmVlbiwgc2t5Ym94IH06IFBhaW50ZXJTY3JlZW5PcHRpb25zLFxcbiAgICApIHtcXG4gICAgICAgIHN1cGVyKClcXG4gICAgICAgIGNvbnN0IFcgPSAzXFxuICAgICAgICBjb25zdCBIID0gMlxcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBhc3NldFNjcmVlbi5nZXRNZXNoUHJpbWl0aXZlSW5kaWNlcyhcIlNjcmVlblwiKVxcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGFzc2V0U2NyZWVuLm1ha2VEYXRhc2V0KHtcXG4gICAgICAgICAgICBtZXNoSW5kZXg6IFwiU2NyZWVuXCIsXFxuICAgICAgICB9KVxcbiAgICAgICAgZGF0YXNldC5kZWJ1ZygpXFxuICAgICAgICBjb25zdCB1bmlmb3JtQmxvY2sgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdChjb250ZXh0LCB7XFxuICAgICAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICAgICAgdW5pVGltZTogXCJmbG9hdFwiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KVxcbiAgICAgICAgdGhpcy51bmlmb3JtQmxvY2sgPSB1bmlmb3JtQmxvY2tcXG4gICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTElORUFSXCIsXFxuICAgICAgICAgICAgICAgIHdyYXBSOiBcIlJFUEVBVFwiLFxcbiAgICAgICAgICAgICAgICB3cmFwUzogXCJSRVBFQVRcIixcXG4gICAgICAgICAgICAgICAgd3JhcFQ6IFwiUkVQRUFUXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pXFxuICAgICAgICBjb25zdCBzY2FsZSA9IDUxMlxcbiAgICAgICAgY29uc3QgeyBjdHgsIGNhbnZhcyB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRChXICogc2NhbGUsIEggKiBzY2FsZSAqIDIpXFxuICAgICAgICB0aGlzLmluaXRDYW52YXMoY2FudmFzLCBjdHgpXFxuICAgICAgICB0aGlzLmxvYWRGb250KGNhbnZhcywgY3R4KVxcbiAgICAgICAgdGhpcy50ZXh0dXJlRHVzdCA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChpbWFnZUR1c3QpXFxuICAgICAgICB0aGlzLnByb2dyYW0gPSBuZXcgVGdkUGFpbnRlclByb2dyYW0oY29udGV4dCwge1xcbiAgICAgICAgICAgIGRyYXdNb2RlOiBcIlRSSUFOR0xFU1wiLFxcbiAgICAgICAgICAgIHN0YXRlOiB7XFxuICAgICAgICAgICAgICAgIGJsZW5kOiBcImFkZFwiLFxcbiAgICAgICAgICAgICAgICBjdWxsOiBcIm9mZlwiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdW5pZm9ybXM6IHsgdW5pZm9ybUNhbWVyYSwgdW5pZm9ybUJsb2NrIH0sXFxuICAgICAgICAgICAgZGF0YXNldCxcXG4gICAgICAgICAgICBlbGVtZW50cyxcXG4gICAgICAgICAgICB0ZXh0dXJlczoge1xcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlTGV0dGVyczogdGhpcy50ZXh0dXJlTGV0dGVycyxcXG4gICAgICAgICAgICAgICAgdW5pVGV4dHVyZUR1c3Q6IHRoaXMudGV4dHVyZUR1c3QsXFxuICAgICAgICAgICAgICAgIHVuaVRleHR1cmVTa3lib3g6IHNreWJveCxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHZhcnlpbmc6IHtcXG4gICAgICAgICAgICAgICAgdmFyVVY6IFwidmVjMlwiLFxcbiAgICAgICAgICAgICAgICB2YXJOb3JtYWw6IFwidmVjM1wiLFxcbiAgICAgICAgICAgICAgICB2YXJQb3NpdGlvbjogXCJ2ZWM0XCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB2ZXJ0OiB7XFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBcInZhck5vcm1hbCA9IE5PUk1BTDtcIixcXG4gICAgICAgICAgICAgICAgICAgIFwidmFyVVYgPSBURVhDT09SRF8wO1wiLFxcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJQb3NpdGlvbiA9IHZlYzQoUE9TSVRJT04sIDEuMCk7XCIsXFxuICAgICAgICAgICAgICAgICAgICBcImdsX1Bvc2l0aW9uID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIHVuaU1vZGVsVmlld01hdHJpeCAqIHZhclBvc2l0aW9uO1wiLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZnJhZzoge1xcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlTGV0dGVycywgdmVjMigxLjAsIC41KSAqIHZhclVWICsgdmVjMigwLCAwLjA1ICogdW5pVGltZSkpO1wiLFxcbiAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCBkaXN0ID0gZnJhY3QodW5pVGltZSkgLSBmcmFjdCh2YXJVVi55KTtcIixcXG4gICAgICAgICAgICAgICAgICAgIFwiaWYgKGRpc3QgPCAwLjApIGRpc3QgKz0gMS4wO1wiLFxcbiAgICAgICAgICAgICAgICAgICAgXCJkaXN0ID0gMS4wIC8gKDYuMCAqIGRpc3QpO1wiLFxcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvci5yZ2IgKj0gZGlzdCAqIChnbF9Gcm9udEZhY2luZyA/IDEuMCA6IDAuMTUpO1wiLFxcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvci5yZ2IgKj0gdGV4dHVyZSh1bmlUZXh0dXJlRHVzdCwgdmFyVVYpLnI7XCIsXFxuICAgICAgICAgICAgICAgICAgICBcIkZyYWdDb2xvciA9IGNvbG9yO1wiLFxcbiAgICAgICAgICAgICAgICAgICAgXCJpZiAoIWdsX0Zyb250RmFjaW5nKSByZXR1cm47XCIsXFxuICAgICAgICAgICAgICAgICAgICBcInZlYzMgTiA9IG5vcm1hbGl6ZSh2YXJOb3JtYWwpO1wiLFxcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMzIFYgPSBub3JtYWxpemUodW5pQ2FtZXJhUG9zaXRpb24gLSB2YXJQb3NpdGlvbi54eXopO1wiLFxcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMzIFIgPSByZWZsZWN0KC1WLCBOKTtcIixcXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMyBzcGVjdWxhciA9IHRleHR1cmVMb2QodW5pVGV4dHVyZVNreWJveCwgUiwgMC4wKS5yZ2I7XCIsXFxuICAgICAgICAgICAgICAgICAgICBcInNwZWN1bGFyID0gcG93KHNwZWN1bGFyLCB2ZWMzKDUuMCkpO1wiLFxcbiAgICAgICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IucmdiICs9IHNwZWN1bGFyICogLjU7XCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pXFxuICAgIH1cXG5cXG4gICAgZGVsZXRlKCkge1xcbiAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycy5kZWxldGUoKVxcbiAgICAgICAgdGhpcy5wcm9ncmFtLmRlbGV0ZSgpXFxuICAgIH1cXG5cXG4gICAgcGFpbnQodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XFxuICAgICAgICB0aGlzLnVuaWZvcm1CbG9jay52YWx1ZXMudW5pVGltZSA9IHRpbWVcXG4gICAgICAgIHRoaXMucHJvZ3JhbS5wYWludCh0aW1lLCBkZWx0YSlcXG4gICAgfVxcblxcbiAgICBwcml2YXRlIGluaXRDYW52YXMoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcXG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzXFxuICAgICAgICBjb25zdCB0ZXh0ID0gXCJMb2FkaW5nLi4uXCJcXG4gICAgICAgIGN0eC5mb250ID0gYGJvbGQgJHt3aWR0aCAvIDd9cHggbW9ub3NwYWNlYFxcbiAgICAgICAgY29uc3QgbWVhc3VyZSA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KVxcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzNlM1wiXFxuICAgICAgICBjb25zdCBoID0gaGVpZ2h0IC8gNVxcbiAgICAgICAgY29uc3QgeCA9ICh3aWR0aCAtIG1lYXN1cmUud2lkdGgpIC8gMlxcbiAgICAgICAgZm9yIChsZXQgeSA9IGg7IHkgPCBoZWlnaHQ7IHkgKz0gaCkge1xcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KVxcbiAgICAgICAgfVxcbiAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycy5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgfVxcblxcbiAgICBwcml2YXRlIGxvYWRGb250KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XFxuICAgICAgICB0Z2RMb2FkRm9udChcIkZ1emFyXCIsIEZ1emFyRm9udFVSTCkudGhlbigoKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXNcXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpXFxuICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSB3aWR0aCAvIDhcXG4gICAgICAgICAgICBjb25zdCBtYXJnaW4gPSBmb250U2l6ZSAvIDNcXG4gICAgICAgICAgICBjdHguZm9udCA9IGBpdGFsaWMgJHtmb250U2l6ZX1weCBGdXphcmBcXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjM2UzXCJcXG4gICAgICAgICAgICBsZXQgeCA9IG1hcmdpblxcbiAgICAgICAgICAgIGxldCB5ID0gZm9udFNpemUgKiAzXFxuICAgICAgICAgICAgbGV0IGJvbGQgPSBmYWxzZVxcbiAgICAgICAgICAgIGxldCBpdGFsaWMgPSBmYWxzZVxcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBgKkZ1emFyIGlzIHRoZSBiZXN0IGZvbnQgZXZlciBtYWRlIGluIHRoaXMgd29ybGQgb2YgbWFkbmVzcy4gSXQgd2FzIGVuZ2luZWVyZWQgYnkgYW4gdW5rbm93biBfZ2VuaXVzIGhpZGRlbiBpbiBhIHN3aXNzIGNpdHkgY2FsbGVkIEdlbmV2YS4gXCIwMTIzNDU2Nzg5XCJgXFxuICAgICAgICAgICAgZm9yIChjb25zdCB3b3JkIG9mIHRleHQuc3BsaXQoXCIgXCIpKSB7XFxuICAgICAgICAgICAgICAgIGl0YWxpYyA9IGZhbHNlXFxuICAgICAgICAgICAgICAgIGJvbGQgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICBpZiAod29yZC5zdGFydHNXaXRoKFwiX1wiKSkgaXRhbGljID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICBpZiAod29yZC5zdGFydHNXaXRoKFwiKlwiKSkgaXRhbGljID0gZmFsc2VcXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW5Xb3JkID0gcmVtb3ZlU3R5bGUod29yZClcXG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtib2xkID8gXCJib2xkIFwiIDogXCJcIn0ke2l0YWxpYyA/IFwiaXRhbGljIFwiIDogXCJcIn0gJHtmb250U2l6ZX1weCBGdXphcmBcXG4gICAgICAgICAgICAgICAgY29uc3QgbWVhc3VyZSA9IGN0eC5tZWFzdXJlVGV4dChgJHtjbGVhbldvcmR9IGApXFxuICAgICAgICAgICAgICAgIGlmICh4ID4gd2lkdGggLSBtZWFzdXJlLndpZHRoIC0gMiAqIG1hcmdpbikge1xcbiAgICAgICAgICAgICAgICAgICAgeCA9IG1hcmdpblxcbiAgICAgICAgICAgICAgICAgICAgeSArPSBmb250U2l6ZVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChjbGVhbldvcmQsIHgsIHkpXFxuICAgICAgICAgICAgICAgIHggKz0gbWVhc3VyZS53aWR0aFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC41XFxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjNWY1N1wiXFxuICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBoZWlnaHQ7IGggKz0gZm9udFNpemUgLyA4KSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGgpICsgMC41XFxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKVxcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKDAsIHkpXFxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGgsIHkpXFxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzLmxvYWRCaXRtYXAoY2FudmFzKVxcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5wYWludCgpXFxuICAgICAgICB9KVxcbiAgICB9XFxufVxcblxcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlKHdvcmQ6IHN0cmluZykge1xcbiAgICB3aGlsZSAoXCIqX1wiLmluY2x1ZGVzKHdvcmQuY2hhckF0KDApKSkgd29yZCA9IHdvcmQuc2xpY2UoMSlcXG4gICAgcmV0dXJuIHdvcmRcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQge1xuXHR0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJELFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdHR5cGUgVGdkRGF0YUdsYixcblx0dGdkTG9hZEZvbnQsXG5cdFRnZE1hdGVyaWFsR2xvYmFsLFxuXHRUZ2RQYWludGVyLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyUHJvZ3JhbSxcblx0VGdkUGFpbnRlclNreWJveCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdFRnZFRleHR1cmVDdWJlLFxuXHRUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0LFxuXHRUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhLFxuXHR0eXBlIFdlYmdsSW1hZ2UsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IFNjcmVlblVSTCBmcm9tIFwiLi9zY3JlZW4uZ2xiXCI7XG5pbXBvcnQgRHVzdFVSTCBmcm9tIFwiLi9kdXN0LndlYnBcIjtcbmltcG9ydCBGdXphckZvbnRVUkwgZnJvbSBcIi4vRnV6YXJfR1gud29mZjJcIjtcbmltcG9ydCBpbWFnZVBvc1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NYLndlYnBcIjsgLy8gK1hcbmltcG9ydCBpbWFnZVBvc1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NZLndlYnBcIjsgLy8gK1lcbmltcG9ydCBpbWFnZVBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NaLndlYnBcIjsgLy8gK1pcbmltcG9ydCBpbWFnZU5lZ1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdYLndlYnBcIjsgLy8gLVhcbmltcG9ydCBpbWFnZU5lZ1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdZLndlYnBcIjsgLy8gLVlcbmltcG9ydCBpbWFnZU5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdaLndlYnBcIjsgLy8gLVpcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW5cblx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAyLCAwKTtcblx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg5LCA3KTtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRkZXB0aDogMSxcblx0fSk7XG5cdGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KTtcblx0Y29uc3QgaW1hZ2VMZXR0ZXJzID0gYXNzZXRzLmltYWdlLmxldHRlcnM7XG5cdGNvbnN0IGltYWdlRHVzdCA9IGFzc2V0cy5pbWFnZS5kdXN0O1xuXHRjb25zdCBjYW1lcmFTa3lib3ggPSBjb250ZXh0LmNhbWVyYS5jbG9uZSgpO1xuXHRjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xuXHRcdGltYWdlUG9zWDogYXNzZXRzLmltYWdlLmltYWdlUG9zWCxcblx0XHRpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1ksXG5cdFx0aW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NaLFxuXHRcdGltYWdlTmVnWDogYXNzZXRzLmltYWdlLmltYWdlTmVnWCxcblx0XHRpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1ksXG5cdFx0aW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdaLFxuXHR9KTtcblx0Y29uc3QgcGFpbnRlclNreWJveCA9IG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcblx0XHR0aW50OiBbMC40LCAwLjQsIDAuNCwgMV0sXG5cdFx0Y2FtZXJhOiBjYW1lcmFTa3lib3gsXG5cdFx0dGV4dHVyZTogc2t5Ym94LFxuXHR9KTtcblx0Y29uc3QgcGFpbnRlclNjcmVlbiA9IG5ldyBQYWludGVyU2NyZWVuKGNvbnRleHQsIHtcblx0XHR1bmlmb3JtQ2FtZXJhLFxuXHRcdGltYWdlTGV0dGVycyxcblx0XHRpbWFnZUR1c3QsXG5cdFx0YXNzZXRTY3JlZW46IGFzc2V0cy5nbGIuc2NyZWVuLFxuXHRcdHNreWJveCxcblx0fSk7XG5cdGNvbnN0IGdlb21ldHJ5ID0gYXNzZXRzLmdsYi5zY3JlZW4ubWFrZUdlb21ldHJ5KHtcblx0XHRtZXNoSW5kZXg6IFwiTWVzaFwiLFxuXHR9KTtcblx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xuXHRcdGFtYmllbnRDb2xvcjogc2t5Ym94LFxuXHR9KTtcblx0Y29uc3QgZm9vdCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG5cdFx0Z2VvbWV0cnksXG5cdFx0bWF0ZXJpYWwsXG5cdH0pO1xuXHRjb250ZXh0LmFkZChcblx0XHRwYWludGVyU2t5Ym94LFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IFwibGVzc1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtjbGVhciwgZm9vdCwgcGFpbnRlclNjcmVlbl0sXG5cdFx0fSksXG5cdFx0KHRpbWUpID0+IHtcblx0XHRcdGNvbnN0IGFuZ1ggPSBNYXRoLmFicygxMCAqIE1hdGguc2luKHRpbWUgKiAwLjM0MSkpO1xuXHRcdFx0Y29uc3QgYW5nWSA9IDMwICogTWF0aC5zaW4odGltZSAqIDAuNSk7XG5cdFx0XHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oYW5nWCwgYW5nWSwgMCk7XG5cdFx0XHRjYW1lcmFTa3lib3guem9vbSA9IDAuMztcblx0XHRcdGNhbWVyYVNreWJveC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oYW5nWCwgYW5nWSArIDE2MCwgMCk7XG5cdFx0fSxcblx0KTtcblx0Y29udGV4dC5wbGF5KCk7XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGNvbnRyb2xsZXI9e3tcblx0XHRcdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdFx0fX1cblx0XHRcdG9wdGlvbnM9e3tcblx0XHRcdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdFx0fX1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHsgc2NyZWVuOiBTY3JlZW5VUkwgfSxcblx0XHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0XHRkdXN0OiBEdXN0VVJMLFxuXHRcdFx0XHRcdGltYWdlUG9zWCxcblx0XHRcdFx0XHRpbWFnZVBvc1ksXG5cdFx0XHRcdFx0aW1hZ2VQb3NaLFxuXHRcdFx0XHRcdGltYWdlTmVnWCxcblx0XHRcdFx0XHRpbWFnZU5lZ1ksXG5cdFx0XHRcdFx0aW1hZ2VOZWdaLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuXG5pbnRlcmZhY2UgUGFpbnRlclNjcmVlbk9wdGlvbnMge1xuXHRpbWFnZUxldHRlcnM6IFdlYmdsSW1hZ2U7XG5cdGltYWdlRHVzdDogV2ViZ2xJbWFnZTtcblx0dW5pZm9ybUNhbWVyYTogVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYTtcblx0YXNzZXRTY3JlZW46IFRnZERhdGFHbGI7XG5cdHNreWJveDogVGdkVGV4dHVyZUN1YmU7XG59XG5cbmNsYXNzIFBhaW50ZXJTY3JlZW4gZXh0ZW5kcyBUZ2RQYWludGVyIHtcblx0cHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlTGV0dGVyczogVGdkVGV4dHVyZTJEO1xuXHRwcml2YXRlIHJlYWRvbmx5IHRleHR1cmVEdXN0OiBUZ2RUZXh0dXJlMkQ7XG5cdHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogVGdkUGFpbnRlclByb2dyYW07XG5cdHByaXZhdGUgcmVhZG9ubHkgdW5pZm9ybUJsb2NrOiBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0PFwidW5pVGltZVwiPjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcblx0XHR7IHVuaWZvcm1DYW1lcmEsIGltYWdlRHVzdCwgYXNzZXRTY3JlZW4sIHNreWJveCB9OiBQYWludGVyU2NyZWVuT3B0aW9ucyxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0XHRjb25zdCBXID0gMztcblx0XHRjb25zdCBIID0gMjtcblx0XHRjb25zdCBlbGVtZW50cyA9IGFzc2V0U2NyZWVuLmdldE1lc2hQcmltaXRpdmVJbmRpY2VzKFwiU2NyZWVuXCIpO1xuXHRcdGNvbnN0IGRhdGFzZXQgPSBhc3NldFNjcmVlbi5tYWtlRGF0YXNldCh7XG5cdFx0XHRtZXNoSW5kZXg6IFwiU2NyZWVuXCIsXG5cdFx0fSk7XG5cdFx0ZGF0YXNldC5kZWJ1ZygpO1xuXHRcdGNvbnN0IHVuaWZvcm1CbG9jayA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVuaVRpbWU6IFwiZmxvYXRcIixcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0dGhpcy51bmlmb3JtQmxvY2sgPSB1bmlmb3JtQmxvY2s7XG5cdFx0dGhpcy50ZXh0dXJlTGV0dGVycyA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuXHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcblx0XHRcdFx0bWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0XHR3cmFwUjogXCJSRVBFQVRcIixcblx0XHRcdFx0d3JhcFM6IFwiUkVQRUFUXCIsXG5cdFx0XHRcdHdyYXBUOiBcIlJFUEVBVFwiLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRjb25zdCBzY2FsZSA9IDUxMjtcblx0XHRjb25zdCB7IGN0eCwgY2FudmFzIH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKFxuXHRcdFx0VyAqIHNjYWxlLFxuXHRcdFx0SCAqIHNjYWxlICogMixcblx0XHQpO1xuXHRcdHRoaXMuaW5pdENhbnZhcyhjYW52YXMsIGN0eCk7XG5cdFx0dGhpcy5sb2FkRm9udChjYW52YXMsIGN0eCk7XG5cdFx0dGhpcy50ZXh0dXJlRHVzdCA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChpbWFnZUR1c3QpO1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBUZ2RQYWludGVyUHJvZ3JhbShjb250ZXh0LCB7XG5cdFx0XHRkcmF3TW9kZTogXCJUUklBTkdMRVNcIixcblx0XHRcdHN0YXRlOiB7XG5cdFx0XHRcdGJsZW5kOiBcImFkZFwiLFxuXHRcdFx0XHRjdWxsOiBcIm9mZlwiLFxuXHRcdFx0fSxcblx0XHRcdHVuaWZvcm1zOiB7IHVuaWZvcm1DYW1lcmEsIHVuaWZvcm1CbG9jayB9LFxuXHRcdFx0ZGF0YXNldCxcblx0XHRcdGVsZW1lbnRzLFxuXHRcdFx0dGV4dHVyZXM6IHtcblx0XHRcdFx0dW5pVGV4dHVyZUxldHRlcnM6IHRoaXMudGV4dHVyZUxldHRlcnMsXG5cdFx0XHRcdHVuaVRleHR1cmVEdXN0OiB0aGlzLnRleHR1cmVEdXN0LFxuXHRcdFx0XHR1bmlUZXh0dXJlU2t5Ym94OiBza3lib3gsXG5cdFx0XHR9LFxuXHRcdFx0dmFyeWluZzoge1xuXHRcdFx0XHR2YXJVVjogXCJ2ZWMyXCIsXG5cdFx0XHRcdHZhck5vcm1hbDogXCJ2ZWMzXCIsXG5cdFx0XHRcdHZhclBvc2l0aW9uOiBcInZlYzRcIixcblx0XHRcdH0sXG5cdFx0XHR2ZXJ0OiB7XG5cdFx0XHRcdG1haW5Db2RlOiBbXG5cdFx0XHRcdFx0XCJ2YXJOb3JtYWwgPSBOT1JNQUw7XCIsXG5cdFx0XHRcdFx0XCJ2YXJVViA9IFRFWENPT1JEXzA7XCIsXG5cdFx0XHRcdFx0XCJ2YXJQb3NpdGlvbiA9IHZlYzQoUE9TSVRJT04sIDEuMCk7XCIsXG5cdFx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiB2YXJQb3NpdGlvbjtcIixcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHRmcmFnOiB7XG5cdFx0XHRcdG1haW5Db2RlOiBbXG5cdFx0XHRcdFx0XCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlTGV0dGVycywgdmVjMigxLjAsIC41KSAqIHZhclVWICsgdmVjMigwLCAwLjA1ICogdW5pVGltZSkpO1wiLFxuXHRcdFx0XHRcdFwiZmxvYXQgZGlzdCA9IGZyYWN0KHVuaVRpbWUpIC0gZnJhY3QodmFyVVYueSk7XCIsXG5cdFx0XHRcdFx0XCJpZiAoZGlzdCA8IDAuMCkgZGlzdCArPSAxLjA7XCIsXG5cdFx0XHRcdFx0XCJkaXN0ID0gMS4wIC8gKDYuMCAqIGRpc3QpO1wiLFxuXHRcdFx0XHRcdFwiY29sb3IucmdiICo9IGRpc3QgKiAoZ2xfRnJvbnRGYWNpbmcgPyAxLjAgOiAwLjE1KTtcIixcblx0XHRcdFx0XHRcImNvbG9yLnJnYiAqPSB0ZXh0dXJlKHVuaVRleHR1cmVEdXN0LCB2YXJVVikucjtcIixcblx0XHRcdFx0XHRcIkZyYWdDb2xvciA9IGNvbG9yO1wiLFxuXHRcdFx0XHRcdFwiaWYgKCFnbF9Gcm9udEZhY2luZykgcmV0dXJuO1wiLFxuXHRcdFx0XHRcdFwidmVjMyBOID0gbm9ybWFsaXplKHZhck5vcm1hbCk7XCIsXG5cdFx0XHRcdFx0XCJ2ZWMzIFYgPSBub3JtYWxpemUodW5pQ2FtZXJhUG9zaXRpb24gLSB2YXJQb3NpdGlvbi54eXopO1wiLFxuXHRcdFx0XHRcdFwidmVjMyBSID0gcmVmbGVjdCgtViwgTik7XCIsXG5cdFx0XHRcdFx0XCJ2ZWMzIHNwZWN1bGFyID0gdGV4dHVyZUxvZCh1bmlUZXh0dXJlU2t5Ym94LCBSLCAwLjApLnJnYjtcIixcblx0XHRcdFx0XHRcInNwZWN1bGFyID0gcG93KHNwZWN1bGFyLCB2ZWMzKDUuMCkpO1wiLFxuXHRcdFx0XHRcdFwiRnJhZ0NvbG9yLnJnYiArPSBzcGVjdWxhciAqIC41O1wiLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxuXG5cdGRlbGV0ZSgpIHtcblx0XHR0aGlzLnRleHR1cmVMZXR0ZXJzLmRlbGV0ZSgpO1xuXHRcdHRoaXMucHJvZ3JhbS5kZWxldGUoKTtcblx0fVxuXG5cdHBhaW50KHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xuXHRcdHRoaXMudW5pZm9ybUJsb2NrLnZhbHVlcy51bmlUaW1lID0gdGltZTtcblx0XHR0aGlzLnByb2dyYW0ucGFpbnQodGltZSwgZGVsdGEpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0Q2FudmFzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXM7XG5cdFx0Y29uc3QgdGV4dCA9IFwiTG9hZGluZy4uLlwiO1xuXHRcdGN0eC5mb250ID0gYGJvbGQgJHt3aWR0aCAvIDd9cHggbW9ub3NwYWNlYDtcblx0XHRjb25zdCBtZWFzdXJlID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuXHRcdGN0eC5maWxsU3R5bGUgPSBcIiMzZTNcIjtcblx0XHRjb25zdCBoID0gaGVpZ2h0IC8gNTtcblx0XHRjb25zdCB4ID0gKHdpZHRoIC0gbWVhc3VyZS53aWR0aCkgLyAyO1xuXHRcdGZvciAobGV0IHkgPSBoOyB5IDwgaGVpZ2h0OyB5ICs9IGgpIHtcblx0XHRcdGN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcblx0XHR9XG5cdFx0dGhpcy50ZXh0dXJlTGV0dGVycy5sb2FkQml0bWFwKGNhbnZhcyk7XG5cdH1cblxuXHRwcml2YXRlIGxvYWRGb250KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG5cdFx0dGdkTG9hZEZvbnQoXCJGdXphclwiLCBGdXphckZvbnRVUkwpLnRoZW4oKCkgPT4ge1xuXHRcdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXM7XG5cdFx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXHRcdFx0Y29uc3QgZm9udFNpemUgPSB3aWR0aCAvIDg7XG5cdFx0XHRjb25zdCBtYXJnaW4gPSBmb250U2l6ZSAvIDM7XG5cdFx0XHRjdHguZm9udCA9IGBpdGFsaWMgJHtmb250U2l6ZX1weCBGdXphcmA7XG5cdFx0XHRjdHguZmlsbFN0eWxlID0gXCIjM2UzXCI7XG5cdFx0XHRsZXQgeCA9IG1hcmdpbjtcblx0XHRcdGxldCB5ID0gZm9udFNpemUgKiAzO1xuXHRcdFx0bGV0IGJvbGQgPSBmYWxzZTtcblx0XHRcdGxldCBpdGFsaWMgPSBmYWxzZTtcblx0XHRcdGNvbnN0IHRleHQgPSBgKkZ1emFyIGlzIHRoZSBiZXN0IGZvbnQgZXZlciBtYWRlIGluIHRoaXMgd29ybGQgb2YgbWFkbmVzcy4gSXQgd2FzIGVuZ2luZWVyZWQgYnkgYW4gdW5rbm93biBfZ2VuaXVzIGhpZGRlbiBpbiBhIHN3aXNzIGNpdHkgY2FsbGVkIEdlbmV2YS4gXCIwMTIzNDU2Nzg5XCJgO1xuXHRcdFx0Zm9yIChjb25zdCB3b3JkIG9mIHRleHQuc3BsaXQoXCIgXCIpKSB7XG5cdFx0XHRcdGl0YWxpYyA9IGZhbHNlO1xuXHRcdFx0XHRib2xkID0gZmFsc2U7XG5cdFx0XHRcdGlmICh3b3JkLnN0YXJ0c1dpdGgoXCJfXCIpKSBpdGFsaWMgPSB0cnVlO1xuXHRcdFx0XHRpZiAod29yZC5zdGFydHNXaXRoKFwiKlwiKSkgaXRhbGljID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IGNsZWFuV29yZCA9IHJlbW92ZVN0eWxlKHdvcmQpO1xuXHRcdFx0XHRjdHguZm9udCA9IGAke2JvbGQgPyBcImJvbGQgXCIgOiBcIlwifSR7aXRhbGljID8gXCJpdGFsaWMgXCIgOiBcIlwifSAke2ZvbnRTaXplfXB4IEZ1emFyYDtcblx0XHRcdFx0Y29uc3QgbWVhc3VyZSA9IGN0eC5tZWFzdXJlVGV4dChgJHtjbGVhbldvcmR9IGApO1xuXHRcdFx0XHRpZiAoeCA+IHdpZHRoIC0gbWVhc3VyZS53aWR0aCAtIDIgKiBtYXJnaW4pIHtcblx0XHRcdFx0XHR4ID0gbWFyZ2luO1xuXHRcdFx0XHRcdHkgKz0gZm9udFNpemU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LmZpbGxUZXh0KGNsZWFuV29yZCwgeCwgeSk7XG5cdFx0XHRcdHggKz0gbWVhc3VyZS53aWR0aDtcblx0XHRcdH1cblx0XHRcdGN0eC5saW5lV2lkdGggPSAwLjU7XG5cdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSBcIiM1ZjU3XCI7XG5cdFx0XHRmb3IgKGxldCBoID0gMDsgaCA8IGhlaWdodDsgaCArPSBmb250U2l6ZSAvIDgpIHtcblx0XHRcdFx0Y29uc3QgeSA9IE1hdGguZmxvb3IoaCkgKyAwLjU7XG5cdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRcdFx0Y3R4Lm1vdmVUbygwLCB5KTtcblx0XHRcdFx0Y3R4LmxpbmVUbyh3aWR0aCwgeSk7XG5cdFx0XHRcdGN0eC5zdHJva2UoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMudGV4dHVyZUxldHRlcnMubG9hZEJpdG1hcChjYW52YXMpO1xuXHRcdFx0dGhpcy5jb250ZXh0LnBhaW50KCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGUod29yZDogc3RyaW5nKSB7XG5cdHdoaWxlIChcIipfXCIuaW5jbHVkZXMod29yZC5jaGFyQXQoMCkpKSB3b3JkID0gd29yZC5zbGljZSgxKTtcblx0cmV0dXJuIHdvcmQ7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJQcm9ncmFtIiwiVGdkVW5pZm9ybUJ1ZmZlck9iamVjdCIsIlRnZFZlYzIiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJjbGVhciIsInVuaWZvcm1DYW1lcmEiLCJ1bmlmb3JtUGl4ZWxzIiwidW5pUGl4ZWxzIiwicGFpbnRlciIsIkZsb2F0MzJBcnJheSIsIm9uRGVsZXRlIiwiY2FtZXJhIiwidGhpY2tuZXNzIiwidGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCIsInRnZExvYWRGb250IiwiVGdkTWF0ZXJpYWxHbG9iYWwiLCJUZ2RQYWludGVyIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU2t5Ym94IiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVGdkVGV4dHVyZUN1YmUiLCJUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhIiwiU2NyZWVuVVJMIiwiRHVzdFVSTCIsIkZ1emFyRm9udFVSTCIsImltYWdlUG9zWCIsImltYWdlUG9zWSIsImltYWdlUG9zWiIsImltYWdlTmVnWCIsImltYWdlTmVnWSIsImltYWdlTmVnWiIsImFzc2V0cyIsImltYWdlTGV0dGVycyIsImltYWdlRHVzdCIsImNhbWVyYVNreWJveCIsInNreWJveCIsInBhaW50ZXJTa3lib3giLCJwYWludGVyU2NyZWVuIiwiUGFpbnRlclNjcmVlbiIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJmb290IiwidGltZSIsImFuZ1giLCJNYXRoIiwiYW5nWSIsInBhcmFtIiwiYXNzZXRTY3JlZW4iLCJXIiwiSCIsImVsZW1lbnRzIiwiZGF0YXNldCIsInVuaWZvcm1CbG9jayIsInNjYWxlIiwiX3RnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQiLCJjdHgiLCJjYW52YXMiLCJfZGVsZXRlIiwicGFpbnQiLCJkZWx0YSIsImluaXRDYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInRleHQiLCJtZWFzdXJlIiwiaCIsIngiLCJ5IiwibG9hZEZvbnQiLCJmb250U2l6ZSIsIm1hcmdpbiIsImJvbGQiLCJpdGFsaWMiLCJfaXRlcmF0b3JFcnJvciIsIndvcmQiLCJjbGVhbldvcmQiLCJyZW1vdmVTdHlsZSIsInkxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN5QjtBQUNp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