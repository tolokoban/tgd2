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
                    lineNumber: 141,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                    children: "Left view uses normal shading, right view uses Mask technique."
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
                    lineNumber: 148,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
            lineNumber: 131,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/_material.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mask/_material/index.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9tYXNrX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZS00MzUzN2IuNzI0MTMwMGU2M2YyYmY4Zi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL21hc2svX21hdGVyaWFsL19tYXRlcmlhbC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9tYXNrL19tYXRlcmlhbC9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvdXRpbHMvaG9va3MvZmxvYXQudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvbWFzay9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHR0Z2RDYWxjQ2xhbXAsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkRmlsdGVyQmx1cixcblx0VGdkTWF0ZXJpYWxNYXNrLFxuXHRUZ2RNYXRlcmlhbE5vcm1hbE1hcCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyRmlsdGVyLFxuXHRUZ2RQYWludGVyRnJhbWVidWZmZXIsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJTY2lzc29yLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgeyBWaWV3U2xpZGVyIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYWNrZ3JvdW5nVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLndlYnBcIjtcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFwiQC91dGlscy9ob29rcy9mbG9hdFwiO1xuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcblx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLCAxLjUpO1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXG5cdFx0ZGVwdGg6IDEsXG5cdH0pO1xuXHRjb25zdCBtYXRlcmlhbDEgPSBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxNYXAoKTtcblx0Y29uc3QgbWVzaDEgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuXHRcdG1hdGVyaWFsOiBtYXRlcmlhbDEsXG5cdH0pO1xuXHRtZXNoMS5kZWJ1ZygpO1xuXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG5cdFx0bG9hZDogYXNzZXRzLmltYWdlLmJhY2tncm91bmQsXG5cdFx0cGFyYW1zOiB7XG5cdFx0XHRtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG5cdFx0XHRtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG5cdFx0fSxcblx0fSk7XG5cdGNvbnN0IGZibzEgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcblx0XHRjaGlsZHJlbjogW1xuXHRcdFx0Y2xlYXIsXG5cdFx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRcdFx0Y2hpbGRyZW46IFttZXNoMV0sXG5cdFx0XHR9KSxcblx0XHRdLFxuXHRcdHRleHR1cmVDb2xvcjA6IHRleHR1cmUsXG5cdFx0dmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxIC8gNCxcblx0XHRkZXB0aEJ1ZmZlcjogdHJ1ZSxcblx0fSk7XG5cdGNvbnN0IHNpemUgPSAyO1xuXHRjb25zdCBmYm8yID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcblx0XHRcdFx0dGV4dHVyZTogZmJvMS50ZXh0dXJlQ29sb3IwLFxuXHRcdFx0XHRmaWx0ZXJzOiBbXG5cdFx0XHRcdFx0bmV3IFRnZEZpbHRlckJsdXIoe1xuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uOiAwLFxuXHRcdFx0XHRcdFx0c2l6ZSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRuZXcgVGdkRmlsdGVyQmx1cih7XG5cdFx0XHRcdFx0XHRkaXJlY3Rpb246IDkwLFxuXHRcdFx0XHRcdFx0c2l6ZSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSxcblx0XHRcdFx0ZmxpcFk6IHRydWUsXG5cdFx0XHR9KSxcblx0XHRdLFxuXHRcdHRleHR1cmVDb2xvcjA6IHRleHR1cmUsXG5cdFx0dmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxIC8gNCxcblx0fSk7XG5cdGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcblx0XHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsTWFzayh7XG5cdFx0XHR0ZXh0dXJlOiBmYm8yLnRleHR1cmVDb2xvcjAgPz8gdGV4dHVyZSxcblx0XHR9KSxcblx0fSk7XG5cdC8vICNlbmRcblx0Y29uc3Qgc2Npc3NvcjEgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xuXHRcdGNoaWxkcmVuOiBbbWVzaDFdLFxuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0XHR3aWR0aDogMC41LFxuXHRcdGhlaWdodDogMSxcblx0fSk7XG5cdGNvbnN0IHNjaXNzb3IyID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcblx0XHRjaGlsZHJlbjogW21lc2gyXSxcblx0XHR4OiAwLjUsXG5cdFx0eTogMCxcblx0XHR3aWR0aDogMC41LFxuXHRcdGhlaWdodDogMSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKFxuXHRcdGNsZWFyLFxuXHRcdGZibzEsXG5cdFx0ZmJvMixcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0XHRjaGlsZHJlbjogW3NjaXNzb3IxLCBzY2lzc29yMl0sXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJMb2dpYygoX3RpbWUsIGRlbHRhKSA9PiB7XG5cdFx0XHRjb25zdCBhbmdYID0gZGVsdGEgKiAwLjEyOTg1O1xuXHRcdFx0Y29uc3QgYW5nWSA9IGRlbHRhICogMC4yNDcyMTtcblx0XHRcdG1lc2gxLnRyYW5zZm8ub3JiaXRBcm91bmRYKGFuZ1gpO1xuXHRcdFx0bWVzaDEudHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nWSk7XG5cdFx0XHRtZXNoMi50cmFuc2ZvLm9yYml0QXJvdW5kWChhbmdYKTtcblx0XHRcdG1lc2gyLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpO1xuXHRcdH0pLFxuXHQpO1xuXHRjb250ZXh0LnBsYXkoKTtcblx0cmV0dXJuIHtcblx0XHRzcGxpdCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0XHRjb25zdCBhID0gdGdkQ2FsY0NsYW1wKHZhbHVlLCAwLCAxKTtcblx0XHRcdHNjaXNzb3IxLnggPSAwO1xuXHRcdFx0c2Npc3NvcjEud2lkdGggPSBhO1xuXHRcdFx0c2Npc3NvcjIueCA9IGE7XG5cdFx0XHRzY2lzc29yMi53aWR0aCA9IDEgLSBhO1xuXHRcdFx0Y29udGV4dC5wYWludCgpO1xuXHRcdH0sXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBzcnYgPSByZWYuY3VycmVudDtcblx0Y29uc3QgW3NwbGl0LCBzZXRTcGxpdF0gPSB1c2VGbG9hdCgwLjUsIHNydj8uc3BsaXQpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8Vmlld1xuXHRcdFx0XHRvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XG5cdFx0XHRcdFx0cmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpO1xuXHRcdFx0XHR9fVxuXHRcdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0XHRpbWFnZToge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogQmFja2dyb3VuZ1VSTCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8Vmlld1NsaWRlclxuXHRcdFx0XHRcdHZhbHVlPXtzcGxpdH1cblx0XHRcdFx0XHRvbkNoYW5nZT17c2V0U3BsaXR9XG5cdFx0XHRcdFx0bWluPXswfVxuXHRcdFx0XHRcdG1heD17MX1cblx0XHRcdFx0XHRzdGVwPXsxZS0yfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8cD5MZWZ0IHZpZXcgdXNlcyBub3JtYWwgc2hhZGluZywgcmlnaHQgdmlldyB1c2VzIE1hc2sgdGVjaG5pcXVlLjwvcD5cblx0XHRcdDwvVmlldz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9fbWF0ZXJpYWwuZGVtb1wiO1xuXG5jb25zdCBGT0NVUyA9IHtcblx0XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcblx0XHQnICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMiwgMS41KTtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IG1hdGVyaWFsMSA9IG5ldyBUZ2RNYXRlcmlhbE5vcm1hbE1hcCgpO1xcbiAgICBjb25zdCBtZXNoMSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWwxLFxcbiAgICB9KTtcXG4gICAgbWVzaDEuZGVidWcoKTtcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgbG9hZDogYXNzZXRzLmltYWdlLmJhY2tncm91bmQsXFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTElORUFSXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxcbiAgICAgICAgfSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IGZibzEgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgY2xlYXIsXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbWVzaDFdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IHRleHR1cmUsXFxuICAgICAgICB2aWV3cG9ydE1hdGNoaW5nU2NhbGU6IDEgLyA0LFxcbiAgICAgICAgZGVwdGhCdWZmZXI6IHRydWUsXFxuICAgIH0pO1xcbiAgICBjb25zdCBzaXplID0gMjtcXG4gICAgY29uc3QgZmJvMiA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIHRleHR1cmU6IGZibzEudGV4dHVyZUNvbG9yMCxcXG4gICAgICAgICAgICAgICAgZmlsdGVyczogW1xcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRnZEZpbHRlckJsdXIoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplLFxcbiAgICAgICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgICAgICBuZXcgVGdkRmlsdGVyQmx1cih7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiA5MCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplLFxcbiAgICAgICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IHRleHR1cmUsXFxuICAgICAgICB2aWV3cG9ydE1hdGNoaW5nU2NhbGU6IDEgLyA0LFxcbiAgICB9KTtcXG4gICAgY29uc3QgbWVzaDIgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbE1hc2soe1xcbiAgICAgICAgICAgIHRleHR1cmU6IGZibzIudGV4dHVyZUNvbG9yMCA/PyB0ZXh0dXJlLFxcbiAgICAgICAgfSksXFxuICAgIH0pOycsXG59O1xuY29uc3QgRlVMTCA9XG5cdCdpbXBvcnQge1xcbiAgICB0Z2RDYWxjQ2xhbXAsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkRmlsdGVyQmx1cixcXG4gICAgVGdkTWF0ZXJpYWxNYXNrLFxcbiAgICBUZ2RNYXRlcmlhbE5vcm1hbE1hcCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTY2lzc29yLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xcbmltcG9ydCB7IFZpZXdTbGlkZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcXG5pbXBvcnQgQmFja2dyb3VuZ1VSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvdXYtZ3JpZC53ZWJwXCI7XFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XFxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFwiQC91dGlscy9ob29rcy9mbG9hdFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLCAxLjUpO1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KTtcXG4gICAgY29uc3QgbWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsTm9ybWFsTWFwKCk7XFxuICAgIGNvbnN0IG1lc2gxID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDEsXFxuICAgIH0pO1xcbiAgICBtZXNoMS5kZWJ1ZygpO1xcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXFxuICAgICAgICB9LFxcbiAgICB9KTtcXG4gICAgY29uc3QgZmJvMSA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBjbGVhcixcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoMV0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZSxcXG4gICAgICAgIHZpZXdwb3J0TWF0Y2hpbmdTY2FsZTogMSAvIDQsXFxuICAgICAgICBkZXB0aEJ1ZmZlcjogdHJ1ZSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHNpemUgPSAyO1xcbiAgICBjb25zdCBmYm8yID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgdGV4dHVyZTogZmJvMS50ZXh0dXJlQ29sb3IwLFxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbXFxuICAgICAgICAgICAgICAgICAgICBuZXcgVGdkRmlsdGVyQmx1cih7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUsXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJCbHVyKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDkwLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUsXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZSxcXG4gICAgICAgIHZpZXdwb3J0TWF0Y2hpbmdTY2FsZTogMSAvIDQsXFxuICAgIH0pO1xcbiAgICBjb25zdCBtZXNoMiA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsTWFzayh7XFxuICAgICAgICAgICAgdGV4dHVyZTogZmJvMi50ZXh0dXJlQ29sb3IwID8/IHRleHR1cmUsXFxuICAgICAgICB9KSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHNjaXNzb3IxID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaDFdLFxcbiAgICAgICAgeDogMCxcXG4gICAgICAgIHk6IDAsXFxuICAgICAgICB3aWR0aDogMC41LFxcbiAgICAgICAgaGVpZ2h0OiAxLFxcbiAgICB9KTtcXG4gICAgY29uc3Qgc2Npc3NvcjIgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMl0sXFxuICAgICAgICB4OiAwLjUsXFxuICAgICAgICB5OiAwLFxcbiAgICAgICAgd2lkdGg6IDAuNSxcXG4gICAgICAgIGhlaWdodDogMSxcXG4gICAgfSk7XFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBmYm8xLFxcbiAgICAgICAgZmJvMixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzY2lzc29yMSwgc2Npc3NvcjJdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKChfdGltZSwgZGVsdGEpID0+IHtcXG4gICAgICAgICAgICBjb25zdCBhbmdYID0gZGVsdGEgKiAwLjEyOTg1O1xcbiAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSBkZWx0YSAqIDAuMjQ3MjE7XFxuICAgICAgICAgICAgbWVzaDEudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWCk7XFxuICAgICAgICAgICAgbWVzaDEudHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nWSk7XFxuICAgICAgICAgICAgbWVzaDIudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWCk7XFxuICAgICAgICAgICAgbWVzaDIudHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nWSk7XFxuICAgICAgICB9KSxcXG4gICAgKTtcXG4gICAgY29udGV4dC5wbGF5KCk7XFxuICAgIHJldHVybiB7XFxuICAgICAgICBzcGxpdCh2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgY29uc3QgYSA9IHRnZENhbGNDbGFtcCh2YWx1ZSwgMCwgMSk7XFxuICAgICAgICAgICAgc2Npc3NvcjEueCA9IDA7XFxuICAgICAgICAgICAgc2Npc3NvcjEud2lkdGggPSBhO1xcbiAgICAgICAgICAgIHNjaXNzb3IyLnggPSBhO1xcbiAgICAgICAgICAgIHNjaXNzb3IyLndpZHRoID0gMSAtIGE7XFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpO1xcbiAgICAgICAgfSxcXG4gICAgfTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbCk7XFxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50O1xcbiAgICBjb25zdCBbc3BsaXQsIHNldFNwbGl0XSA9IHVzZUZsb2F0KDAuNSwgc3J2Py5zcGxpdCk7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgICAgIG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gaW5pdChzY2VuZSwgYXNzZXRzKTtcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEJhY2tncm91bmdVUkwsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgPFZpZXdTbGlkZXJcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcGxpdH1cXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTcGxpdH1cXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MH1cXG4gICAgICAgICAgICAgICAgICAgIG1heD17MX1cXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9ezFlLTJ9XFxuICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgICAgICAgTGVmdCB2aWV3IHVzZXMgbm9ybWFsIHNoYWRpbmcsIHJpZ2h0IHZpZXcgdXNlcyBNYXNrXFxuICAgICAgICAgICAgICAgICAgICB0ZWNobmlxdWUuXFxuICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8L1ZpZXc+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgKTtcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGbG9hdChcblx0aW5pdGlhbFZhbHVlOiBudW1iZXIsXG5cdG9uQ2hhbmdlPzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQsXG4pOiBbdmFsdWU6IG51bWJlciwgc2V0VmFsdWU6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkXSB7XG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IG9uQ2hhbmdlPy4odmFsdWUpLCBbdmFsdWVdKTtcblx0cmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ0Z2RDYWxjQ2xhbXAiLCJUZ2RGaWx0ZXJCbHVyIiwiVGdkTWF0ZXJpYWxNYXNrIiwiVGdkTWF0ZXJpYWxOb3JtYWxNYXAiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyRmlsdGVyIiwiVGdkUGFpbnRlckZyYW1lYnVmZmVyIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU2Npc3NvciIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3U2xpZGVyIiwiUmVhY3QiLCJCYWNrZ3JvdW5nVVJMIiwiVmlldyIsInVzZUZsb2F0IiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJfZmJvMl90ZXh0dXJlQ29sb3IwIiwiY2xlYXIiLCJtYXRlcmlhbDEiLCJtZXNoMSIsInRleHR1cmUiLCJmYm8xIiwic2l6ZSIsImZibzIiLCJtZXNoMiIsInNjaXNzb3IxIiwic2Npc3NvcjIiLCJfdGltZSIsImRlbHRhIiwiYW5nWCIsImFuZ1kiLCJzcGxpdCIsInZhbHVlIiwiYSIsIkRlbW8iLCJyZWYiLCJzcnYiLCJfdXNlRmxvYXQiLCJzZXRTcGxpdCIsIm9uUmVhZHkiLCJzY2VuZSIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsImluaXRpYWxWYWx1ZSIsIm9uQ2hhbmdlIiwic2V0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWV3QjtBQUNtQjtBQUNqQjtBQUM4QjtBQUNFO0FBQ1g7QUFFL0MsU0FBU2tCLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7UUFzRHJDQztJQXJEWCw0QkFBNEI7SUFDNUJGLFFBQVEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUc7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