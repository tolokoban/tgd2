"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_mask_page_mdx-src_components_demo_CodeViewer_CodeViewer_module-43537b"], {
57503(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid.0665e1a40d7dcc63.webp";

},
95255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _assets_image_uv_grid_webp__rspack_import_4 = __webpack_require__(57503);
/* import */ var _components_demo_Tgd__rspack_import_5 = __webpack_require__(43475);
/* import */ var _utils_hooks_float__rspack_import_6 = __webpack_require__(24429);
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







function init(context, assets) {
    var _fbo2_textureColor0;
    // #begin Initializing WebGL
    context.camera.fitSpaceAtTarget(2, 1.5);
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.3,
            0.3,
            0.3,
            1
        ],
        depth: 1
    });
    var material1 = new _tolokoban_tgd__rspack_import_1.TgdMaterialNormalMap();
    var mesh1 = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        material: material1
    });
    mesh1.debug();
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        load: assets.image.background,
        params: {
            minFilter: "LINEAR",
            magFilter: "LINEAR"
        }
    });
    var fbo1 = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        children: [
            clear,
            new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
                depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
                children: [
                    mesh1
                ]
            })
        ],
        textureColor0: texture,
        viewportMatchingScale: 1 / 4,
        depthBuffer: true
    });
    var size = 2;
    var fbo2 = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
                texture: fbo1.textureColor0,
                filters: [
                    new _tolokoban_tgd__rspack_import_1.TgdFilterBlur({
                        direction: 0,
                        size: size
                    }),
                    new _tolokoban_tgd__rspack_import_1.TgdFilterBlur({
                        direction: 90,
                        size: size
                    })
                ],
                flipY: true
            })
        ],
        textureColor0: texture,
        viewportMatchingScale: 1 / 4
    });
    var mesh2 = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialMask({
            texture: (_fbo2_textureColor0 = fbo2.textureColor0) !== null && _fbo2_textureColor0 !== void 0 ? _fbo2_textureColor0 : texture
        })
    });
    // #end
    var scissor1 = new _tolokoban_tgd__rspack_import_1.TgdPainterScissor(context, {
        children: [
            mesh1
        ],
        x: 0,
        y: 0,
        width: 0.5,
        height: 1
    });
    var scissor2 = new _tolokoban_tgd__rspack_import_1.TgdPainterScissor(context, {
        children: [
            mesh2
        ],
        x: 0.5,
        y: 0,
        width: 0.5,
        height: 1
    });
    context.add(clear, fbo1, fbo2, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            scissor1,
            scissor2
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(_time, delta) {
        var angX = delta * 0.12985;
        var angY = delta * 0.24721;
        mesh1.transfo.orbitAroundX(angX);
        mesh1.transfo.orbitAroundY(angY);
        mesh2.transfo.orbitAroundX(angX);
        mesh2.transfo.orbitAroundY(angY);
    }));
    context.play();
    return {
        split: function split(value) {
            var a = (0,_tolokoban_tgd__rspack_import_1.tgdCalcClamp)(value, 0, 1);
            scissor1.x = 0;
            scissor1.width = a;
            scissor2.x = a;
            scissor2.width = 1 - a;
            context.paint();
        }
    };
}
function Demo() {
    var ref = react__rspack_import_3_default().useRef(null);
    var srv = ref.current;
    var _useFloat = _sliced_to_array((0,_utils_hooks_float__rspack_import_6.useFloat)(0.5, srv === null || srv === void 0 ? void 0 : srv.split), 2), split = _useFloat[0], setSplit = _useFloat[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_5["default"], {
            onReady: function onReady(scene, assets) {
                ref.current = init(scene, assets);
            },
            assets: {
                image: {
                    background: _assets_image_uv_grid_webp__rspack_import_4
                }
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSlider, {
                    value: split,
                    onChange: setSplit,
                    min: 0,
                    max: 1,
                    step: 1e-2
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
                    lineNumber: 140,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                    children: "Left view uses normal shading, right view uses Mask technique."
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
            lineNumber: 131,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
        lineNumber: 130,
        columnNumber: 9
    }, this);
}


},
31334(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _material_demo__rspack_import_4 = __webpack_require__(95255);
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
    "Initializing WebGL": '    context.camera.fitSpaceAtTarget(2, 1.5);\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    });\n    const material1 = new TgdMaterialNormalMap();\n    const mesh1 = new TgdPainterMesh(context, {\n        material: material1,\n    });\n    mesh1.debug();\n    const texture = new TgdTexture2D(context, {\n        load: assets.image.background,\n        params: {\n            minFilter: "LINEAR",\n            magFilter: "LINEAR",\n        },\n    });\n    const fbo1 = new TgdPainterFramebuffer(context, {\n        children: [\n            clear,\n            new TgdPainterState(context, {\n                depth: webglPresetDepth.less,\n                children: [mesh1],\n            }),\n        ],\n        textureColor0: texture,\n        viewportMatchingScale: 1 / 4,\n        depthBuffer: true,\n    });\n    const size = 2;\n    const fbo2 = new TgdPainterFramebuffer(context, {\n        children: [\n            new TgdPainterFilter(context, {\n                texture: fbo1.textureColor0,\n                filters: [\n                    new TgdFilterBlur({\n                        direction: 0,\n                        size,\n                    }),\n                    new TgdFilterBlur({\n                        direction: 90,\n                        size,\n                    }),\n                ],\n                flipY: true,\n            }),\n        ],\n        textureColor0: texture,\n        viewportMatchingScale: 1 / 4,\n    });\n    const mesh2 = new TgdPainterMesh(context, {\n        material: new TgdMaterialMask({\n            texture: fbo2.textureColor0 ?? texture,\n        }),\n    });'
};
var FULL = 'import {\n    tgdCalcClamp,\n    type TgdContext,\n    TgdFilterBlur,\n    TgdMaterialMask,\n    TgdMaterialNormalMap,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterScissor,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from "@tolokoban/tgd";\nimport { ViewSlider } from "@tolokoban/ui";\nimport React from "react";\nimport BackgroungURL from "@/assets/image/uv-grid.webp";\nimport View, { type Assets } from "@/components/demo/Tgd";\nimport { useFloat } from "@/utils/hooks/float";\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.fitSpaceAtTarget(2, 1.5);\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    });\n    const material1 = new TgdMaterialNormalMap();\n    const mesh1 = new TgdPainterMesh(context, {\n        material: material1,\n    });\n    mesh1.debug();\n    const texture = new TgdTexture2D(context, {\n        load: assets.image.background,\n        params: {\n            minFilter: "LINEAR",\n            magFilter: "LINEAR",\n        },\n    });\n    const fbo1 = new TgdPainterFramebuffer(context, {\n        children: [\n            clear,\n            new TgdPainterState(context, {\n                depth: webglPresetDepth.less,\n                children: [mesh1],\n            }),\n        ],\n        textureColor0: texture,\n        viewportMatchingScale: 1 / 4,\n        depthBuffer: true,\n    });\n    const size = 2;\n    const fbo2 = new TgdPainterFramebuffer(context, {\n        children: [\n            new TgdPainterFilter(context, {\n                texture: fbo1.textureColor0,\n                filters: [\n                    new TgdFilterBlur({\n                        direction: 0,\n                        size,\n                    }),\n                    new TgdFilterBlur({\n                        direction: 90,\n                        size,\n                    }),\n                ],\n                flipY: true,\n            }),\n        ],\n        textureColor0: texture,\n        viewportMatchingScale: 1 / 4,\n    });\n    const mesh2 = new TgdPainterMesh(context, {\n        material: new TgdMaterialMask({\n            texture: fbo2.textureColor0 ?? texture,\n        }),\n    });\n    const scissor1 = new TgdPainterScissor(context, {\n        children: [mesh1],\n        x: 0,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    });\n    const scissor2 = new TgdPainterScissor(context, {\n        children: [mesh2],\n        x: 0.5,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    });\n    context.add(\n        clear,\n        fbo1,\n        fbo2,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [scissor1, scissor2],\n        }),\n        new TgdPainterLogic((_time, delta) => {\n            const angX = delta * 0.12985;\n            const angY = delta * 0.24721;\n            mesh1.transfo.orbitAroundX(angX);\n            mesh1.transfo.orbitAroundY(angY);\n            mesh2.transfo.orbitAroundX(angX);\n            mesh2.transfo.orbitAroundY(angY);\n        }),\n    );\n    context.play();\n    return {\n        split(value: number) {\n            const a = tgdCalcClamp(value, 0, 1);\n            scissor1.x = 0;\n            scissor1.width = a;\n            scissor2.x = a;\n            scissor2.width = 1 - a;\n            context.paint();\n        },\n    };\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null);\n    const srv = ref.current;\n    const [split, setSplit] = useFloat(0.5, srv?.split);\n    return (\n        <div>\n            <View\n                onReady={(scene: TgdContext, assets: Assets) => {\n                    ref.current = init(scene, assets);\n                }}\n                assets={{\n                    image: {\n                        background: BackgroungURL,\n                    },\n                }}\n            >\n                <ViewSlider\n                    value={split}\n                    onChange={setSplit}\n                    min={0}\n                    max={1}\n                    step={1e-2}\n                />\n                <p>\n                    Left view uses normal shading, right view uses Mask\n                    technique.\n                </p>\n            </View>\n        </div>\n    );\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                lineNumber: 20,
                columnNumber: 13
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}


},
24429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useFloat: () => (useFloat)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/* import */ var react__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_0);
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

function useFloat(initialValue, onChange) {
    var _React_useState = _sliced_to_array(react__rspack_import_0_default().useState(initialValue), 2), value = _React_useState[0], setValue = _React_useState[1];
    react__rspack_import_0_default().useEffect(function() {
        return onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [
        value
    ]);
    return [
        value,
        setValue
    ];
}


},
12419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _material__rspack_import_1 = __webpack_require__(31334);
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
        h1: "h1",
        hr: "hr",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Mask material"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx",
                    lineNumber: 9,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9tYXNrX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZS00MzUzN2IuODIyNjc0N2UwOWExNDE5OS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL21hc2svX21hdGVyaWFsL19tYXRlcmlhbC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9tYXNrL19tYXRlcmlhbC9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvdXRpbHMvaG9va3MvZmxvYXQudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvbWFzay9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIHRnZENhbGNDbGFtcCxcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkRmlsdGVyQmx1cixcbiAgICBUZ2RNYXRlcmlhbE1hc2ssXG4gICAgVGdkTWF0ZXJpYWxOb3JtYWxNYXAsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyU2Npc3NvcixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBWaWV3U2xpZGVyIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgQmFja2dyb3VuZ1VSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvdXYtZ3JpZC53ZWJwXCJcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIsIDEuNSlcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IG1hdGVyaWFsMSA9IG5ldyBUZ2RNYXRlcmlhbE5vcm1hbE1hcCgpXG4gICAgY29uc3QgbWVzaDEgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWwxLFxuICAgIH0pXG4gICAgbWVzaDEuZGVidWcoKVxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgbG9hZDogYXNzZXRzLmltYWdlLmJhY2tncm91bmQsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29uc3QgZmJvMSA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgY2xlYXIsXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbWVzaDFdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IHRleHR1cmUsXG4gICAgICAgIHZpZXdwb3J0TWF0Y2hpbmdTY2FsZTogMSAvIDQsXG4gICAgICAgIGRlcHRoQnVmZmVyOiB0cnVlLFxuICAgIH0pXG4gICAgY29uc3Qgc2l6ZSA9IDJcbiAgICBjb25zdCBmYm8yID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgdGV4dHVyZTogZmJvMS50ZXh0dXJlQ29sb3IwLFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRnZEZpbHRlckJsdXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJCbHVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogOTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGZsaXBZOiB0cnVlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IHRleHR1cmUsXG4gICAgICAgIHZpZXdwb3J0TWF0Y2hpbmdTY2FsZTogMSAvIDQsXG4gICAgfSlcbiAgICBjb25zdCBtZXNoMiA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxNYXNrKHtcbiAgICAgICAgICAgIHRleHR1cmU6IGZibzIudGV4dHVyZUNvbG9yMCA/PyB0ZXh0dXJlLFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgIC8vICNlbmRcbiAgICBjb25zdCBzY2lzc29yMSA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaDFdLFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogMC41LFxuICAgICAgICBoZWlnaHQ6IDEsXG4gICAgfSlcbiAgICBjb25zdCBzY2lzc29yMiA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaDJdLFxuICAgICAgICB4OiAwLjUsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiAwLjUsXG4gICAgICAgIGhlaWdodDogMSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBjbGVhcixcbiAgICAgICAgZmJvMSxcbiAgICAgICAgZmJvMixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzY2lzc29yMSwgc2Npc3NvcjJdLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygoX3RpbWUsIGRlbHRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbmdYID0gZGVsdGEgKiAwLjEyOTg1XG4gICAgICAgICAgICBjb25zdCBhbmdZID0gZGVsdGEgKiAwLjI0NzIxXG4gICAgICAgICAgICBtZXNoMS50cmFuc2ZvLm9yYml0QXJvdW5kWChhbmdYKVxuICAgICAgICAgICAgbWVzaDEudHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nWSlcbiAgICAgICAgICAgIG1lc2gyLnRyYW5zZm8ub3JiaXRBcm91bmRYKGFuZ1gpXG4gICAgICAgICAgICBtZXNoMi50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKVxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICByZXR1cm4ge1xuICAgICAgICBzcGxpdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBhID0gdGdkQ2FsY0NsYW1wKHZhbHVlLCAwLCAxKVxuICAgICAgICAgICAgc2Npc3NvcjEueCA9IDBcbiAgICAgICAgICAgIHNjaXNzb3IxLndpZHRoID0gYVxuICAgICAgICAgICAgc2Npc3NvcjIueCA9IGFcbiAgICAgICAgICAgIHNjaXNzb3IyLndpZHRoID0gMSAtIGFcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICB9LFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XG4gICAgY29uc3QgW3NwbGl0LCBzZXRTcGxpdF0gPSB1c2VGbG9hdCgwLjUsIHNydj8uc3BsaXQpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgb25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQmFja2dyb3VuZ1VSTCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8Vmlld1NsaWRlciB2YWx1ZT17c3BsaXR9IG9uQ2hhbmdlPXtzZXRTcGxpdH0gbWluPXswfSBtYXg9ezF9IHN0ZXA9ezFlLTJ9IC8+XG4gICAgICAgICAgICAgICAgPHA+TGVmdCB2aWV3IHVzZXMgbm9ybWFsIHNoYWRpbmcsIHJpZ2h0IHZpZXcgdXNlcyBNYXNrIHRlY2huaXF1ZS48L3A+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9fbWF0ZXJpYWwuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1xuICAgIFwiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XG4gICAgICAgICcgICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLCAxLjUpO1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KTtcXG4gICAgY29uc3QgbWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsTm9ybWFsTWFwKCk7XFxuICAgIGNvbnN0IG1lc2gxID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDEsXFxuICAgIH0pO1xcbiAgICBtZXNoMS5kZWJ1ZygpO1xcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXFxuICAgICAgICB9LFxcbiAgICB9KTtcXG4gICAgY29uc3QgZmJvMSA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBjbGVhcixcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoMV0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZSxcXG4gICAgICAgIHZpZXdwb3J0TWF0Y2hpbmdTY2FsZTogMSAvIDQsXFxuICAgICAgICBkZXB0aEJ1ZmZlcjogdHJ1ZSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHNpemUgPSAyO1xcbiAgICBjb25zdCBmYm8yID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgdGV4dHVyZTogZmJvMS50ZXh0dXJlQ29sb3IwLFxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbXFxuICAgICAgICAgICAgICAgICAgICBuZXcgVGdkRmlsdGVyQmx1cih7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUsXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJCbHVyKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDkwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUsXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZSxcXG4gICAgICAgIHZpZXdwb3J0TWF0Y2hpbmdTY2FsZTogMSAvIDQsXFxuICAgIH0pO1xcbiAgICBjb25zdCBtZXNoMiA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsTWFzayh7XFxuICAgICAgICAgICAgdGV4dHVyZTogZmJvMi50ZXh0dXJlQ29sb3IwID8/IHRleHR1cmUsXFxuICAgICAgICB9KSxcXG4gICAgfSk7Jyxcbn1cbmNvbnN0IEZVTEwgPVxuICAgICdpbXBvcnQge1xcbiAgICB0Z2RDYWxjQ2xhbXAsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkRmlsdGVyQmx1cixcXG4gICAgVGdkTWF0ZXJpYWxNYXNrLFxcbiAgICBUZ2RNYXRlcmlhbE5vcm1hbE1hcCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTY2lzc29yLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xcbmltcG9ydCB7IFZpZXdTbGlkZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcXG5pbXBvcnQgQmFja2dyb3VuZ1VSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvdXYtZ3JpZC53ZWJwXCI7XFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XFxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFwiQC91dGlscy9ob29rcy9mbG9hdFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLCAxLjUpO1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KTtcXG4gICAgY29uc3QgbWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsTm9ybWFsTWFwKCk7XFxuICAgIGNvbnN0IG1lc2gxID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDEsXFxuICAgIH0pO1xcbiAgICBtZXNoMS5kZWJ1ZygpO1xcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXFxuICAgICAgICB9LFxcbiAgICB9KTtcXG4gICAgY29uc3QgZmJvMSA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBjbGVhcixcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoMV0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZSxcXG4gICAgICAgIHZpZXdwb3J0TWF0Y2hpbmdTY2FsZTogMSAvIDQsXFxuICAgICAgICBkZXB0aEJ1ZmZlcjogdHJ1ZSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHNpemUgPSAyO1xcbiAgICBjb25zdCBmYm8yID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgdGV4dHVyZTogZmJvMS50ZXh0dXJlQ29sb3IwLFxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbXFxuICAgICAgICAgICAgICAgICAgICBuZXcgVGdkRmlsdGVyQmx1cih7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUsXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJCbHVyKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDkwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUsXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZSxcXG4gICAgICAgIHZpZXdwb3J0TWF0Y2hpbmdTY2FsZTogMSAvIDQsXFxuICAgIH0pO1xcbiAgICBjb25zdCBtZXNoMiA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsTWFzayh7XFxuICAgICAgICAgICAgdGV4dHVyZTogZmJvMi50ZXh0dXJlQ29sb3IwID8/IHRleHR1cmUsXFxuICAgICAgICB9KSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHNjaXNzb3IxID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaDFdLFxcbiAgICAgICAgeDogMCxcXG4gICAgICAgIHk6IDAsXFxuICAgICAgICB3aWR0aDogMC41LFxcbiAgICAgICAgaGVpZ2h0OiAxLFxcbiAgICB9KTtcXG4gICAgY29uc3Qgc2Npc3NvcjIgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMl0sXFxuICAgICAgICB4OiAwLjUsXFxuICAgICAgICB5OiAwLFxcbiAgICAgICAgd2lkdGg6IDAuNSxcXG4gICAgICAgIGhlaWdodDogMSxcXG4gICAgfSk7XFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBmYm8xLFxcbiAgICAgICAgZmJvMixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzY2lzc29yMSwgc2Npc3NvcjJdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKChfdGltZSwgZGVsdGEpID0+IHtcXG4gICAgICAgICAgICBjb25zdCBhbmdYID0gZGVsdGEgKiAwLjEyOTg1O1xcbiAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSBkZWx0YSAqIDAuMjQ3MjE7XFxuICAgICAgICAgICAgbWVzaDEudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWCk7XFxuICAgICAgICAgICAgbWVzaDEudHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nWSk7XFxuICAgICAgICAgICAgbWVzaDIudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWCk7XFxuICAgICAgICAgICAgbWVzaDIudHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nWSk7XFxuICAgICAgICB9KSxcXG4gICAgKTtcXG4gICAgY29udGV4dC5wbGF5KCk7XFxuICAgIHJldHVybiB7XFxuICAgICAgICBzcGxpdCh2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgY29uc3QgYSA9IHRnZENhbGNDbGFtcCh2YWx1ZSwgMCwgMSk7XFxuICAgICAgICAgICAgc2Npc3NvcjEueCA9IDA7XFxuICAgICAgICAgICAgc2Npc3NvcjEud2lkdGggPSBhO1xcbiAgICAgICAgICAgIHNjaXNzb3IyLnggPSBhO1xcbiAgICAgICAgICAgIHNjaXNzb3IyLndpZHRoID0gMSAtIGE7XFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpO1xcbiAgICAgICAgfSxcXG4gICAgfTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbCk7XFxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50O1xcbiAgICBjb25zdCBbc3BsaXQsIHNldFNwbGl0XSA9IHVzZUZsb2F0KDAuNSwgc3J2Py5zcGxpdCk7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgICAgIG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gaW5pdChzY2VuZSwgYXNzZXRzKTtcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEJhY2tncm91bmdVUkwsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgPFZpZXdTbGlkZXJcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcGxpdH1cXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTcGxpdH1cXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MH1cXG4gICAgICAgICAgICAgICAgICAgIG1heD17MX1cXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9ezFlLTJ9XFxuICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgICAgICAgTGVmdCB2aWV3IHVzZXMgbm9ybWFsIHNoYWRpbmcsIHJpZ2h0IHZpZXcgdXNlcyBNYXNrXFxuICAgICAgICAgICAgICAgICAgICB0ZWNobmlxdWUuXFxuICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8L1ZpZXc+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgKTtcXG59XFxuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxEZW1vIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZsb2F0KFxuICAgIGluaXRpYWxWYWx1ZTogbnVtYmVyLFxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQsXG4pOiBbdmFsdWU6IG51bWJlciwgc2V0VmFsdWU6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkXSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IG9uQ2hhbmdlPy4odmFsdWUpLCBbdmFsdWVdKVxuICAgIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ0Z2RDYWxjQ2xhbXAiLCJUZ2RGaWx0ZXJCbHVyIiwiVGdkTWF0ZXJpYWxNYXNrIiwiVGdkTWF0ZXJpYWxOb3JtYWxNYXAiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyRmlsdGVyIiwiVGdkUGFpbnRlckZyYW1lYnVmZmVyIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU2Npc3NvciIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3U2xpZGVyIiwiUmVhY3QiLCJCYWNrZ3JvdW5nVVJMIiwiVmlldyIsInVzZUZsb2F0IiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJfZmJvMl90ZXh0dXJlQ29sb3IwIiwiY2xlYXIiLCJtYXRlcmlhbDEiLCJtZXNoMSIsInRleHR1cmUiLCJmYm8xIiwic2l6ZSIsImZibzIiLCJtZXNoMiIsInNjaXNzb3IxIiwic2Npc3NvcjIiLCJfdGltZSIsImRlbHRhIiwiYW5nWCIsImFuZ1kiLCJzcGxpdCIsInZhbHVlIiwiYSIsIkRlbW8iLCJyZWYiLCJzcnYiLCJfdXNlRmxvYXQiLCJzZXRTcGxpdCIsIm9uUmVhZHkiLCJzY2VuZSIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsImluaXRpYWxWYWx1ZSIsIm9uQ2hhbmdlIiwic2V0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWV1QjtBQUNtQjtBQUNqQjtBQUM4QjtBQUNFO0FBQ1g7QUFFOUMsU0FBU2tCLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7UUFzRDVCQztJQXJEakIsNEJBQTRCO0lBQzVCRixRQUFRLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHO0lBQ25DLElBQU1HLFFBQVEsSUFBSWxCLCtDQUFlQSxDQUFDZSxTQUFTO1FBQ3ZDLE9BQU87WUFBQztZQUFLO1lBQUs7WUFBSztTQUFFO1FBQ3pCLE9BQU87SUFDWDtJQUNBLElBQU1JLFlBQVksSUFBSXBCLG9EQUFvQkE7SUFDMUMsSUFBTXFCLFFBQVEsSUFBSWhCLDhDQUFjQSxDQUFDVyxTQUFTO1FBQ3RDLFVBQVVJO0lBQ2Q7SUFDQUMsTUFBTSxLQUFLO0lBQ1gsSUFBTUMsVUFBVSxJQUFJZCw0Q0FBWUEsQ0FBQ1EsU0FBUztRQUN0QyxNQUFNQyxPQUFPLEtBQUssQ0FBQyxVQUFVO1FBQzdCLFFBQVE7WUFD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