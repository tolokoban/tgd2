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
                    lineNumber: 141,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                    children: "Left view uses normal shading, right view uses Mask technique."
                }, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
                    lineNumber: 148,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
            lineNumber: 131,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
        lineNumber: 130,
        columnNumber: 3
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
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9tYXNrX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZS00MzUzN2IuNGU2ZjkwMzUyYWRhYTEwMC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9tYXNrL19tYXRlcmlhbC9fbWF0ZXJpYWwuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL21hc2svX21hdGVyaWFsL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvdXRpbHMvaG9va3MvZmxvYXQudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL21hc2svcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdHRnZENhbGNDbGFtcCxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RGaWx0ZXJCbHVyLFxuXHRUZ2RNYXRlcmlhbE1hc2ssXG5cdFRnZE1hdGVyaWFsTm9ybWFsTWFwLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJGaWx0ZXIsXG5cdFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcblx0VGdkUGFpbnRlckxvZ2ljLFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlclNjaXNzb3IsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCB7IFZpZXdTbGlkZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJhY2tncm91bmdVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL3V2LWdyaWQud2VicFwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuXHRjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIsIDEuNSk7XG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSk7XG5cdGNvbnN0IG1hdGVyaWFsMSA9IG5ldyBUZ2RNYXRlcmlhbE5vcm1hbE1hcCgpO1xuXHRjb25zdCBtZXNoMSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG5cdFx0bWF0ZXJpYWw6IG1hdGVyaWFsMSxcblx0fSk7XG5cdG1lc2gxLmRlYnVnKCk7XG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRsb2FkOiBhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCxcblx0XHRwYXJhbXM6IHtcblx0XHRcdG1pbkZpbHRlcjogXCJMSU5FQVJcIixcblx0XHRcdG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcblx0XHR9LFxuXHR9KTtcblx0Y29uc3QgZmJvMSA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRjbGVhcixcblx0XHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHRcdFx0XHRjaGlsZHJlbjogW21lc2gxXSxcblx0XHRcdH0pLFxuXHRcdF0sXG5cdFx0dGV4dHVyZUNvbG9yMDogdGV4dHVyZSxcblx0XHR2aWV3cG9ydE1hdGNoaW5nU2NhbGU6IDEgLyA0LFxuXHRcdGRlcHRoQnVmZmVyOiB0cnVlLFxuXHR9KTtcblx0Y29uc3Qgc2l6ZSA9IDI7XG5cdGNvbnN0IGZibzIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcblx0XHRjaGlsZHJlbjogW1xuXHRcdFx0bmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuXHRcdFx0XHR0ZXh0dXJlOiBmYm8xLnRleHR1cmVDb2xvcjAsXG5cdFx0XHRcdGZpbHRlcnM6IFtcblx0XHRcdFx0XHRuZXcgVGdkRmlsdGVyQmx1cih7XG5cdFx0XHRcdFx0XHRkaXJlY3Rpb246IDAsXG5cdFx0XHRcdFx0XHRzaXplLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdG5ldyBUZ2RGaWx0ZXJCbHVyKHtcblx0XHRcdFx0XHRcdGRpcmVjdGlvbjogOTAsXG5cdFx0XHRcdFx0XHRzaXplLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRmbGlwWTogdHJ1ZSxcblx0XHRcdH0pLFxuXHRcdF0sXG5cdFx0dGV4dHVyZUNvbG9yMDogdGV4dHVyZSxcblx0XHR2aWV3cG9ydE1hdGNoaW5nU2NhbGU6IDEgLyA0LFxuXHR9KTtcblx0Y29uc3QgbWVzaDIgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuXHRcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxNYXNrKHtcblx0XHRcdHRleHR1cmU6IGZibzIudGV4dHVyZUNvbG9yMCA/PyB0ZXh0dXJlLFxuXHRcdH0pLFxuXHR9KTtcblx0Ly8gI2VuZFxuXHRjb25zdCBzY2lzc29yMSA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XG5cdFx0Y2hpbGRyZW46IFttZXNoMV0sXG5cdFx0eDogMCxcblx0XHR5OiAwLFxuXHRcdHdpZHRoOiAwLjUsXG5cdFx0aGVpZ2h0OiAxLFxuXHR9KTtcblx0Y29uc3Qgc2Npc3NvcjIgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xuXHRcdGNoaWxkcmVuOiBbbWVzaDJdLFxuXHRcdHg6IDAuNSxcblx0XHR5OiAwLFxuXHRcdHdpZHRoOiAwLjUsXG5cdFx0aGVpZ2h0OiAxLFxuXHR9KTtcblx0Y29udGV4dC5hZGQoXG5cdFx0Y2xlYXIsXG5cdFx0ZmJvMSxcblx0XHRmYm8yLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRcdGNoaWxkcmVuOiBbc2Npc3NvcjEsIHNjaXNzb3IyXSxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlckxvZ2ljKChfdGltZSwgZGVsdGEpID0+IHtcblx0XHRcdGNvbnN0IGFuZ1ggPSBkZWx0YSAqIDAuMTI5ODU7XG5cdFx0XHRjb25zdCBhbmdZID0gZGVsdGEgKiAwLjI0NzIxO1xuXHRcdFx0bWVzaDEudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWCk7XG5cdFx0XHRtZXNoMS50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKTtcblx0XHRcdG1lc2gyLnRyYW5zZm8ub3JiaXRBcm91bmRYKGFuZ1gpO1xuXHRcdFx0bWVzaDIudHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nWSk7XG5cdFx0fSksXG5cdCk7XG5cdGNvbnRleHQucGxheSgpO1xuXHRyZXR1cm4ge1xuXHRcdHNwbGl0KHZhbHVlOiBudW1iZXIpIHtcblx0XHRcdGNvbnN0IGEgPSB0Z2RDYWxjQ2xhbXAodmFsdWUsIDAsIDEpO1xuXHRcdFx0c2Npc3NvcjEueCA9IDA7XG5cdFx0XHRzY2lzc29yMS53aWR0aCA9IGE7XG5cdFx0XHRzY2lzc29yMi54ID0gYTtcblx0XHRcdHNjaXNzb3IyLndpZHRoID0gMSAtIGE7XG5cdFx0XHRjb250ZXh0LnBhaW50KCk7XG5cdFx0fSxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0Y29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbCk7XG5cdGNvbnN0IHNydiA9IHJlZi5jdXJyZW50O1xuXHRjb25zdCBbc3BsaXQsIHNldFNwbGl0XSA9IHVzZUZsb2F0KDAuNSwgc3J2Py5zcGxpdCk7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxWaWV3XG5cdFx0XHRcdG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcblx0XHRcdFx0XHRyZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cyk7XG5cdFx0XHRcdH19XG5cdFx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5nVVJMLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxWaWV3U2xpZGVyXG5cdFx0XHRcdFx0dmFsdWU9e3NwbGl0fVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXRTcGxpdH1cblx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0bWF4PXsxfVxuXHRcdFx0XHRcdHN0ZXA9ezFlLTJ9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxwPkxlZnQgdmlldyB1c2VzIG5vcm1hbCBzaGFkaW5nLCByaWdodCB2aWV3IHVzZXMgTWFzayB0ZWNobmlxdWUuPC9wPlxuXHRcdFx0PC9WaWV3PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIjtcbmltcG9ydCBEZW1vIGZyb20gXCIuL19tYXRlcmlhbC5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkluaXRpYWxpemluZyBXZWJHTFwiOlxuXHRcdCcgICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLCAxLjUpO1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KTtcXG4gICAgY29uc3QgbWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsTm9ybWFsTWFwKCk7XFxuICAgIGNvbnN0IG1lc2gxID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDEsXFxuICAgIH0pO1xcbiAgICBtZXNoMS5kZWJ1ZygpO1xcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXFxuICAgICAgICB9LFxcbiAgICB9KTtcXG4gICAgY29uc3QgZmJvMSA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBjbGVhcixcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoMV0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZSxcXG4gICAgICAgIHZpZXdwb3J0TWF0Y2hpbmdTY2FsZTogMSAvIDQsXFxuICAgICAgICBkZXB0aEJ1ZmZlcjogdHJ1ZSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHNpemUgPSAyO1xcbiAgICBjb25zdCBmYm8yID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgdGV4dHVyZTogZmJvMS50ZXh0dXJlQ29sb3IwLFxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbXFxuICAgICAgICAgICAgICAgICAgICBuZXcgVGdkRmlsdGVyQmx1cih7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUsXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJCbHVyKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDkwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUsXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZSxcXG4gICAgICAgIHZpZXdwb3J0TWF0Y2hpbmdTY2FsZTogMSAvIDQsXFxuICAgIH0pO1xcbiAgICBjb25zdCBtZXNoMiA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsTWFzayh7XFxuICAgICAgICAgICAgdGV4dHVyZTogZmJvMi50ZXh0dXJlQ29sb3IwID8/IHRleHR1cmUsXFxuICAgICAgICB9KSxcXG4gICAgfSk7Jyxcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7XFxuICAgIHRnZENhbGNDbGFtcCxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RGaWx0ZXJCbHVyLFxcbiAgICBUZ2RNYXRlcmlhbE1hc2ssXFxuICAgIFRnZE1hdGVyaWFsTm9ybWFsTWFwLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclNjaXNzb3IsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XFxuaW1wb3J0IHsgVmlld1NsaWRlciB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XFxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xcbmltcG9ydCBCYWNrZ3JvdW5nVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLndlYnBcIjtcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIsIDEuNSk7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pO1xcbiAgICBjb25zdCBtYXRlcmlhbDEgPSBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxNYXAoKTtcXG4gICAgY29uc3QgbWVzaDEgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMSxcXG4gICAgfSk7XFxuICAgIG1lc2gxLmRlYnVnKCk7XFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIGxvYWQ6IGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kLFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgIH0sXFxuICAgIH0pO1xcbiAgICBjb25zdCBmYm8xID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIGNsZWFyLFxcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW21lc2gxXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlLFxcbiAgICAgICAgdmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxIC8gNCxcXG4gICAgICAgIGRlcHRoQnVmZmVyOiB0cnVlLFxcbiAgICB9KTtcXG4gICAgY29uc3Qgc2l6ZSA9IDI7XFxuICAgIGNvbnN0IGZibzIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICB0ZXh0dXJlOiBmYm8xLnRleHR1cmVDb2xvcjAsXFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IFtcXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJCbHVyKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSxcXG4gICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRnZEZpbHRlckJsdXIoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogOTAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSxcXG4gICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlLFxcbiAgICAgICAgdmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxIC8gNCxcXG4gICAgfSk7XFxuICAgIGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxNYXNrKHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBmYm8yLnRleHR1cmVDb2xvcjAgPz8gdGV4dHVyZSxcXG4gICAgICAgIH0pLFxcbiAgICB9KTtcXG4gICAgY29uc3Qgc2Npc3NvcjEgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMV0sXFxuICAgICAgICB4OiAwLFxcbiAgICAgICAgeTogMCxcXG4gICAgICAgIHdpZHRoOiAwLjUsXFxuICAgICAgICBoZWlnaHQ6IDEsXFxuICAgIH0pO1xcbiAgICBjb25zdCBzY2lzc29yMiA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW21lc2gyXSxcXG4gICAgICAgIHg6IDAuNSxcXG4gICAgICAgIHk6IDAsXFxuICAgICAgICB3aWR0aDogMC41LFxcbiAgICAgICAgaGVpZ2h0OiAxLFxcbiAgICB9KTtcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIGZibzEsXFxuICAgICAgICBmYm8yLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3NjaXNzb3IxLCBzY2lzc29yMl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKF90aW1lLCBkZWx0YSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IGFuZ1ggPSBkZWx0YSAqIDAuMTI5ODU7XFxuICAgICAgICAgICAgY29uc3QgYW5nWSA9IGRlbHRhICogMC4yNDcyMTtcXG4gICAgICAgICAgICBtZXNoMS50cmFuc2ZvLm9yYml0QXJvdW5kWChhbmdYKTtcXG4gICAgICAgICAgICBtZXNoMS50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKTtcXG4gICAgICAgICAgICBtZXNoMi50cmFuc2ZvLm9yYml0QXJvdW5kWChhbmdYKTtcXG4gICAgICAgICAgICBtZXNoMi50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKTtcXG4gICAgICAgIH0pLFxcbiAgICApO1xcbiAgICBjb250ZXh0LnBsYXkoKTtcXG4gICAgcmV0dXJuIHtcXG4gICAgICAgIHNwbGl0KHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBjb25zdCBhID0gdGdkQ2FsY0NsYW1wKHZhbHVlLCAwLCAxKTtcXG4gICAgICAgICAgICBzY2lzc29yMS54ID0gMDtcXG4gICAgICAgICAgICBzY2lzc29yMS53aWR0aCA9IGE7XFxuICAgICAgICAgICAgc2Npc3NvcjIueCA9IGE7XFxuICAgICAgICAgICAgc2Npc3NvcjIud2lkdGggPSAxIC0gYTtcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KCk7XFxuICAgICAgICB9LFxcbiAgICB9O1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKTtcXG4gICAgY29uc3Qgc3J2ID0gcmVmLmN1cnJlbnQ7XFxuICAgIGNvbnN0IFtzcGxpdCwgc2V0U3BsaXRdID0gdXNlRmxvYXQoMC41LCBzcnY/LnNwbGl0KTtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICAgICAgb25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpO1xcbiAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQmFja2dyb3VuZ1VSTCxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8Vmlld1NsaWRlclxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NwbGl0fVxcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNwbGl0fVxcbiAgICAgICAgICAgICAgICAgICAgbWluPXswfVxcbiAgICAgICAgICAgICAgICAgICAgbWF4PXsxfVxcbiAgICAgICAgICAgICAgICAgICAgc3RlcD17MWUtMn1cXG4gICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgICAgICBMZWZ0IHZpZXcgdXNlcyBub3JtYWwgc2hhZGluZywgcmlnaHQgdmlldyB1c2VzIE1hc2tcXG4gICAgICAgICAgICAgICAgICAgIHRlY2huaXF1ZS5cXG4gICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDwvVmlldz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICApO1xcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZsb2F0KFxuXHRpbml0aWFsVmFsdWU6IG51bWJlcixcblx0b25DaGFuZ2U/OiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCxcbik6IFt2YWx1ZTogbnVtYmVyLCBzZXRWYWx1ZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWRdIHtcblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4gb25DaGFuZ2U/Lih2YWx1ZSksIFt2YWx1ZV0pO1xuXHRyZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV07XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInRnZENhbGNDbGFtcCIsIlRnZEZpbHRlckJsdXIiLCJUZ2RNYXRlcmlhbE1hc2siLCJUZ2RNYXRlcmlhbE5vcm1hbE1hcCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyRnJhbWVidWZmZXIiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTY2lzc29yIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXdTbGlkZXIiLCJSZWFjdCIsIkJhY2tncm91bmdVUkwiLCJWaWV3IiwidXNlRmxvYXQiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsIl9mYm8yX3RleHR1cmVDb2xvcjAiLCJjbGVhciIsIm1hdGVyaWFsMSIsIm1lc2gxIiwidGV4dHVyZSIsImZibzEiLCJzaXplIiwiZmJvMiIsIm1lc2gyIiwic2Npc3NvcjEiLCJzY2lzc29yMiIsIl90aW1lIiwiZGVsdGEiLCJhbmdYIiwiYW5nWSIsInNwbGl0IiwidmFsdWUiLCJhIiwiRGVtbyIsInJlZiIsInNydiIsIl91c2VGbG9hdCIsInNldFNwbGl0Iiwib25SZWFkeSIsInNjZW5lIiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiaW5pdGlhbFZhbHVlIiwib25DaGFuZ2UiLCJzZXRWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXdCO0FBQ21CO0FBQ2pCO0FBQzhCO0FBQ0U7QUFDWDtBQUUvQyxTQUFTa0IsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztRQXNEckNDO0lBckRYLDRCQUE0QjtJQUM1QkYsUUFBUSxNQUFNLENBQUMsZ0JBQWdCLENBQUMs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