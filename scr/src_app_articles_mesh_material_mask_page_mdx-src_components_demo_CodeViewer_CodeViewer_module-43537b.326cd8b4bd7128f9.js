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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
                    lineNumber: 140,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                    children: "Left view uses normal shading, right view uses Mask technique."
                }, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
            lineNumber: 131,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
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
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx",
                    lineNumber: 9,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9tYXNrX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZS00MzUzN2IuMzI2Y2Q4YjRiZDcxMjhmOS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9tYXNrL19tYXRlcmlhbC9fbWF0ZXJpYWwuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL21hc2svX21hdGVyaWFsL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvdXRpbHMvaG9va3MvZmxvYXQudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL21hc2svcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgdGdkQ2FsY0NsYW1wLFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RGaWx0ZXJCbHVyLFxuICAgIFRnZE1hdGVyaWFsTWFzayxcbiAgICBUZ2RNYXRlcmlhbE5vcm1hbE1hcCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckZpbHRlcixcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTY2lzc29yLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IFZpZXdTbGlkZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBCYWNrZ3JvdW5nVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLndlYnBcIlxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcIkAvdXRpbHMvaG9va3MvZmxvYXRcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMiwgMS41KVxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgbWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsTm9ybWFsTWFwKClcbiAgICBjb25zdCBtZXNoMSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDEsXG4gICAgfSlcbiAgICBtZXNoMS5kZWJ1ZygpXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBjb25zdCBmYm8xID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBjbGVhcixcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoMV0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZSxcbiAgICAgICAgdmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxIC8gNCxcbiAgICAgICAgZGVwdGhCdWZmZXI6IHRydWUsXG4gICAgfSlcbiAgICBjb25zdCBzaXplID0gMlxuICAgIGNvbnN0IGZibzIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlOiBmYm8xLnRleHR1cmVDb2xvcjAsXG4gICAgICAgICAgICAgICAgZmlsdGVyczogW1xuICAgICAgICAgICAgICAgICAgICBuZXcgVGdkRmlsdGVyQmx1cih7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRnZEZpbHRlckJsdXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZmxpcFk6IHRydWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZSxcbiAgICAgICAgdmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxIC8gNCxcbiAgICB9KVxuICAgIGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbE1hc2soe1xuICAgICAgICAgICAgdGV4dHVyZTogZmJvMi50ZXh0dXJlQ29sb3IwID8/IHRleHR1cmUsXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgLy8gI2VuZFxuICAgIGNvbnN0IHNjaXNzb3IxID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMV0sXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiAwLjUsXG4gICAgICAgIGhlaWdodDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHNjaXNzb3IyID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMl0sXG4gICAgICAgIHg6IDAuNSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IDAuNSxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBmYm8xLFxuICAgICAgICBmYm8yLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3NjaXNzb3IxLCBzY2lzc29yMl0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKChfdGltZSwgZGVsdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFuZ1ggPSBkZWx0YSAqIDAuMTI5ODVcbiAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSBkZWx0YSAqIDAuMjQ3MjFcbiAgICAgICAgICAgIG1lc2gxLnRyYW5zZm8ub3JiaXRBcm91bmRYKGFuZ1gpXG4gICAgICAgICAgICBtZXNoMS50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKVxuICAgICAgICAgICAgbWVzaDIudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWClcbiAgICAgICAgICAgIG1lc2gyLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNwbGl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0Z2RDYWxjQ2xhbXAodmFsdWUsIDAsIDEpXG4gICAgICAgICAgICBzY2lzc29yMS54ID0gMFxuICAgICAgICAgICAgc2Npc3NvcjEud2lkdGggPSBhXG4gICAgICAgICAgICBzY2lzc29yMi54ID0gYVxuICAgICAgICAgICAgc2Npc3NvcjIud2lkdGggPSAxIC0gYVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpXG4gICAgY29uc3Qgc3J2ID0gcmVmLmN1cnJlbnRcbiAgICBjb25zdCBbc3BsaXQsIHNldFNwbGl0XSA9IHVzZUZsb2F0KDAuNSwgc3J2Py5zcGxpdClcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICBvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gaW5pdChzY2VuZSwgYXNzZXRzKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5nVVJMLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxWaWV3U2xpZGVyIHZhbHVlPXtzcGxpdH0gb25DaGFuZ2U9e3NldFNwbGl0fSBtaW49ezB9IG1heD17MX0gc3RlcD17MWUtMn0gLz5cbiAgICAgICAgICAgICAgICA8cD5MZWZ0IHZpZXcgdXNlcyBub3JtYWwgc2hhZGluZywgcmlnaHQgdmlldyB1c2VzIE1hc2sgdGVjaG5pcXVlLjwvcD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL19tYXRlcmlhbC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJJbml0aWFsaXppbmcgV2ViR0xcIjpcbiAgICAgICAgJyAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIsIDEuNSk7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pO1xcbiAgICBjb25zdCBtYXRlcmlhbDEgPSBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxNYXAoKTtcXG4gICAgY29uc3QgbWVzaDEgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMSxcXG4gICAgfSk7XFxuICAgIG1lc2gxLmRlYnVnKCk7XFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIGxvYWQ6IGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kLFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgIH0sXFxuICAgIH0pO1xcbiAgICBjb25zdCBmYm8xID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIGNsZWFyLFxcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW21lc2gxXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlLFxcbiAgICAgICAgdmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxIC8gNCxcXG4gICAgICAgIGRlcHRoQnVmZmVyOiB0cnVlLFxcbiAgICB9KTtcXG4gICAgY29uc3Qgc2l6ZSA9IDI7XFxuICAgIGNvbnN0IGZibzIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICB0ZXh0dXJlOiBmYm8xLnRleHR1cmVDb2xvcjAsXFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IFtcXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJCbHVyKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSxcXG4gICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRnZEZpbHRlckJsdXIoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogOTAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSxcXG4gICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlLFxcbiAgICAgICAgdmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxIC8gNCxcXG4gICAgfSk7XFxuICAgIGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxNYXNrKHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBmYm8yLnRleHR1cmVDb2xvcjAgPz8gdGV4dHVyZSxcXG4gICAgICAgIH0pLFxcbiAgICB9KTsnLFxufVxuY29uc3QgRlVMTCA9XG4gICAgJ2ltcG9ydCB7XFxuICAgIHRnZENhbGNDbGFtcCxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RGaWx0ZXJCbHVyLFxcbiAgICBUZ2RNYXRlcmlhbE1hc2ssXFxuICAgIFRnZE1hdGVyaWFsTm9ybWFsTWFwLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclNjaXNzb3IsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XFxuaW1wb3J0IHsgVmlld1NsaWRlciB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XFxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xcbmltcG9ydCBCYWNrZ3JvdW5nVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLndlYnBcIjtcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIsIDEuNSk7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pO1xcbiAgICBjb25zdCBtYXRlcmlhbDEgPSBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxNYXAoKTtcXG4gICAgY29uc3QgbWVzaDEgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMSxcXG4gICAgfSk7XFxuICAgIG1lc2gxLmRlYnVnKCk7XFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIGxvYWQ6IGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kLFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgIH0sXFxuICAgIH0pO1xcbiAgICBjb25zdCBmYm8xID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIGNsZWFyLFxcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW21lc2gxXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlLFxcbiAgICAgICAgdmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxIC8gNCxcXG4gICAgICAgIGRlcHRoQnVmZmVyOiB0cnVlLFxcbiAgICB9KTtcXG4gICAgY29uc3Qgc2l6ZSA9IDI7XFxuICAgIGNvbnN0IGZibzIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICB0ZXh0dXJlOiBmYm8xLnRleHR1cmVDb2xvcjAsXFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IFtcXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJCbHVyKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSxcXG4gICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRnZEZpbHRlckJsdXIoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogOTAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSxcXG4gICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlLFxcbiAgICAgICAgdmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxIC8gNCxcXG4gICAgfSk7XFxuICAgIGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxNYXNrKHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBmYm8yLnRleHR1cmVDb2xvcjAgPz8gdGV4dHVyZSxcXG4gICAgICAgIH0pLFxcbiAgICB9KTtcXG4gICAgY29uc3Qgc2Npc3NvcjEgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMV0sXFxuICAgICAgICB4OiAwLFxcbiAgICAgICAgeTogMCxcXG4gICAgICAgIHdpZHRoOiAwLjUsXFxuICAgICAgICBoZWlnaHQ6IDEsXFxuICAgIH0pO1xcbiAgICBjb25zdCBzY2lzc29yMiA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW21lc2gyXSxcXG4gICAgICAgIHg6IDAuNSxcXG4gICAgICAgIHk6IDAsXFxuICAgICAgICB3aWR0aDogMC41LFxcbiAgICAgICAgaGVpZ2h0OiAxLFxcbiAgICB9KTtcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIGZibzEsXFxuICAgICAgICBmYm8yLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3NjaXNzb3IxLCBzY2lzc29yMl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKF90aW1lLCBkZWx0YSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IGFuZ1ggPSBkZWx0YSAqIDAuMTI5ODU7XFxuICAgICAgICAgICAgY29uc3QgYW5nWSA9IGRlbHRhICogMC4yNDcyMTtcXG4gICAgICAgICAgICBtZXNoMS50cmFuc2ZvLm9yYml0QXJvdW5kWChhbmdYKTtcXG4gICAgICAgICAgICBtZXNoMS50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKTtcXG4gICAgICAgICAgICBtZXNoMi50cmFuc2ZvLm9yYml0QXJvdW5kWChhbmdYKTtcXG4gICAgICAgICAgICBtZXNoMi50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKTtcXG4gICAgICAgIH0pLFxcbiAgICApO1xcbiAgICBjb250ZXh0LnBsYXkoKTtcXG4gICAgcmV0dXJuIHtcXG4gICAgICAgIHNwbGl0KHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBjb25zdCBhID0gdGdkQ2FsY0NsYW1wKHZhbHVlLCAwLCAxKTtcXG4gICAgICAgICAgICBzY2lzc29yMS54ID0gMDtcXG4gICAgICAgICAgICBzY2lzc29yMS53aWR0aCA9IGE7XFxuICAgICAgICAgICAgc2Npc3NvcjIueCA9IGE7XFxuICAgICAgICAgICAgc2Npc3NvcjIud2lkdGggPSAxIC0gYTtcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KCk7XFxuICAgICAgICB9LFxcbiAgICB9O1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKTtcXG4gICAgY29uc3Qgc3J2ID0gcmVmLmN1cnJlbnQ7XFxuICAgIGNvbnN0IFtzcGxpdCwgc2V0U3BsaXRdID0gdXNlRmxvYXQoMC41LCBzcnY/LnNwbGl0KTtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICAgICAgb25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpO1xcbiAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQmFja2dyb3VuZ1VSTCxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8Vmlld1NsaWRlclxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NwbGl0fVxcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNwbGl0fVxcbiAgICAgICAgICAgICAgICAgICAgbWluPXswfVxcbiAgICAgICAgICAgICAgICAgICAgbWF4PXsxfVxcbiAgICAgICAgICAgICAgICAgICAgc3RlcD17MWUtMn1cXG4gICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgICAgICBMZWZ0IHZpZXcgdXNlcyBub3JtYWwgc2hhZGluZywgcmlnaHQgdmlldyB1c2VzIE1hc2tcXG4gICAgICAgICAgICAgICAgICAgIHRlY2huaXF1ZS5cXG4gICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDwvVmlldz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICApO1xcbn1cXG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPERlbW8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmxvYXQoXG4gICAgaW5pdGlhbFZhbHVlOiBudW1iZXIsXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCxcbik6IFt2YWx1ZTogbnVtYmVyLCBzZXRWYWx1ZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWRdIHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZSlcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gb25DaGFuZ2U/Lih2YWx1ZSksIFt2YWx1ZV0pXG4gICAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInRnZENhbGNDbGFtcCIsIlRnZEZpbHRlckJsdXIiLCJUZ2RNYXRlcmlhbE1hc2siLCJUZ2RNYXRlcmlhbE5vcm1hbE1hcCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyRnJhbWVidWZmZXIiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTY2lzc29yIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXdTbGlkZXIiLCJSZWFjdCIsIkJhY2tncm91bmdVUkwiLCJWaWV3IiwidXNlRmxvYXQiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsIl9mYm8yX3RleHR1cmVDb2xvcjAiLCJjbGVhciIsIm1hdGVyaWFsMSIsIm1lc2gxIiwidGV4dHVyZSIsImZibzEiLCJzaXplIiwiZmJvMiIsIm1lc2gyIiwic2Npc3NvcjEiLCJzY2lzc29yMiIsIl90aW1lIiwiZGVsdGEiLCJhbmdYIiwiYW5nWSIsInNwbGl0IiwidmFsdWUiLCJhIiwiRGVtbyIsInJlZiIsInNydiIsIl91c2VGbG9hdCIsInNldFNwbGl0Iiwib25SZWFkeSIsInNjZW5lIiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiaW5pdGlhbFZhbHVlIiwib25DaGFuZ2UiLCJzZXRWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXVCO0FBQ21CO0FBQ2pCO0FBQzhCO0FBQ0U7QUFDWDtBQUU5QyxTQUFTa0IsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztRQXNENUJDO0lBckRqQiw0QkFBNEI7SUFDNUJGLFFBQVEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUc7SUFDbkMsSUFBTUcsUUFBUSxJQUFJbEIsK0NBQWVBLENBQUNlLFNBQVM7UUFDdkMsT0FBTztZQUFDO1lBQUs7WUFBSztZQUFLO1NBQUU7UUFDekIsT0FBTztJQUNYO0lBQ0EsSUFBTUksWUFBWSxJQUFJcEIsb0RBQW9CQTtJQUMxQyxJQUFNcUIsUUFBUSxJQUFJaEIsOENBQWNBLENBQUNXLFNBQVM7UUFDdEMsVUFBVUk7SUFDZDtJQUNBQyxNQUFNLEtBQUs7SUFDWCxJQUFNQyxVQUFVLElBQUlkLDRDQUFZQSxDQUFDUSxTQUFTO1FBQ3RDLE1BQU1DLE9BQU8sS0FBSyxDQUFDLFVBQVU7UUFDN0IsUUFB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