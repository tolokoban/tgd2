"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_glass_page_mdx-src_components_demo_CodeViewer_CodeViewer_modul-27c9e5"], {
51746(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/specimen.65584ec4a9a7b42d.glb";

},
77681(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _utils_hooks_float__rspack_import_4 = __webpack_require__(24429);
/* import */ var _tolokoban_ui__rspack_import_5 = __webpack_require__(62430);
/* import */ var _assets_mesh_specimen_glb__rspack_import_6 = __webpack_require__(51746);
/* import */ var _assets_cubemap_sky_contrast_posX_webp__rspack_import_7 = __webpack_require__(10618);
/* import */ var _assets_cubemap_sky_contrast_posY_webp__rspack_import_8 = __webpack_require__(24645);
/* import */ var _assets_cubemap_sky_contrast_posZ_webp__rspack_import_9 = __webpack_require__(85720);
/* import */ var _assets_cubemap_sky_contrast_negX_webp__rspack_import_10 = __webpack_require__(28814);
/* import */ var _assets_cubemap_sky_contrast_negY_webp__rspack_import_11 = __webpack_require__(51561);
/* import */ var _assets_cubemap_sky_contrast_negZ_webp__rspack_import_12 = __webpack_require__(30892);
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
    context.camera.fitSpaceAtTarget(14, 1.1);
    // #begin Initializing WebGL
    var color = [
        1,
        1,
        1,
        1
    ];
    var skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ
    });
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialGlass({
        color: color,
        ambientColor: skybox
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.specimen,
        material: material
    });
    // #end
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.1,
            0.2,
            0.3,
            1
        ],
        depth: 1
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            mesh
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time) {
        mesh.transfo.setEulerRotation(0, Math.sin(time) * 20, 0);
        var color = new _tolokoban_tgd__rspack_import_1.TgdColor(0.1, 0.2, 0.3, 1);
        color.rgb2hsl().H = time * 0.1;
        color.hsl2rgb();
        clear.red = color.R;
        clear.green = color.G;
        clear.blue = color.B;
    }));
    context.play();
    return {
        specularExponent: function specularExponent(value) {
            material.specularExponent = value;
            context.paint();
        },
        specularIntensity: function specularIntensity(value) {
            material.specularIntensity = value;
            context.paint();
        },
        opacityMin: function opacityMin(value) {
            material.opacityMin = value;
            context.paint();
        },
        opacityMax: function opacityMax(value) {
            material.opacityMax = value;
            context.paint();
        }
    };
}
function Demo() {
    var ref = react__rspack_import_3_default().useRef(null);
    var srv = ref.current;
    var _useFloat = _sliced_to_array((0,_utils_hooks_float__rspack_import_4.useFloat)(2.2, srv === null || srv === void 0 ? void 0 : srv.specularExponent), 2), specularExponent = _useFloat[0], setSpecularExponent = _useFloat[1];
    var _useFloat1 = _sliced_to_array((0,_utils_hooks_float__rspack_import_4.useFloat)(2, srv === null || srv === void 0 ? void 0 : srv.specularIntensity), 2), specularIntensity = _useFloat1[0], setSpecularIntensity = _useFloat1[1];
    var _useFloat2 = _sliced_to_array((0,_utils_hooks_float__rspack_import_4.useFloat)(0, srv === null || srv === void 0 ? void 0 : srv.opacityMin), 2), opacityMin = _useFloat2[0], setOpacityMin = _useFloat2[1];
    var _useFloat3 = _sliced_to_array((0,_utils_hooks_float__rspack_import_4.useFloat)(0.05, srv === null || srv === void 0 ? void 0 : srv.opacityMax), 2), opacityMax = _useFloat3[0], setOpacityMax = _useFloat3[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
            onReady: function onReady(scene, assets) {
                ref.current = init(scene, assets);
            },
            assets: {
                glb: {
                    specimen: _assets_mesh_specimen_glb__rspack_import_6
                },
                image: {
                    posX: _assets_cubemap_sky_contrast_posX_webp__rspack_import_7,
                    posY: _assets_cubemap_sky_contrast_posY_webp__rspack_import_8,
                    posZ: _assets_cubemap_sky_contrast_posZ_webp__rspack_import_9,
                    negX: _assets_cubemap_sky_contrast_negX_webp__rspack_import_10,
                    negY: _assets_cubemap_sky_contrast_negY_webp__rspack_import_11,
                    negZ: _assets_cubemap_sky_contrast_negZ_webp__rspack_import_12
                }
            },
            controller: {
                inertiaOrbit: 1000
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewPanel, {
                    display: "flex",
                    "flex-wrap": "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: "S",
                    width: "600px",
                    maxWidth: "600px",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "specularExponent",
                            value: specularExponent,
                            onChange: setSpecularExponent
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 127,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "specularIntensity",
                            value: specularIntensity,
                            onChange: setSpecularIntensity
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 128,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                    lineNumber: 119,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewPanel, {
                    display: "flex",
                    "flex-wrap": "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: "S",
                    width: "600px",
                    maxWidth: "600px",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "opacityMin",
                            value: opacityMin,
                            onChange: setOpacityMin
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "opacityMax",
                            value: opacityMax,
                            onChange: setOpacityMax
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                    lineNumber: 134,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
            lineNumber: 99,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
        lineNumber: 98,
        columnNumber: 9
    }, this);
}


},
67080(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _material_demo__rspack_import_4 = __webpack_require__(77681);
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
    "Initializing WebGL": "    const color: ArrayNumber4 = [1, 1, 1, 1]\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const material = new TgdMaterialGlass({\n        color,\n        ambientColor: skybox,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.specimen,\n        material,\n    })"
};
var FULL = "import {\n    ArrayNumber4,\n    TgdContext,\n    TgdPainterClear,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    tgdCalcRandom3,\n    webglPresetDepth,\n    TgdTextureCube,\n    TgdPainterLogic,\n    TgdPainterSkybox,\n    TgdMaterialGlass,\n    TgdColor,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport React from \"react\"\nimport { useFloat } from \"@/utils/hooks/float\"\nimport { ViewButton, ViewInputNumber, ViewPanel } from \"@tolokoban/ui\"\n\nimport SpecimenURL from \"@/assets/mesh/specimen.glb\"\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\"\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\"\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\"\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\"\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\"\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.fitSpaceAtTarget(14, 1.1)\n    const color: ArrayNumber4 = [1, 1, 1, 1]\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const material = new TgdMaterialGlass({\n        color,\n        ambientColor: skybox,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.specimen,\n        material,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [mesh],\n        }),\n        new TgdPainterLogic((time) => {\n            mesh.transfo.setEulerRotation(0, Math.sin(time) * 20, 0)\n            const color = new TgdColor(0.1, 0.2, 0.3, 1)\n            color.rgb2hsl().H = time * 0.1\n            color.hsl2rgb()\n            clear.red = color.R\n            clear.green = color.G\n            clear.blue = color.B\n        }),\n    )\n    context.play()\n    return {\n        specularExponent(value: number) {\n            material.specularExponent = value\n            context.paint()\n        },\n        specularIntensity(value: number) {\n            material.specularIntensity = value\n            context.paint()\n        },\n        opacityMin(value: number) {\n            material.opacityMin = value\n            context.paint()\n        },\n        opacityMax(value: number) {\n            material.opacityMax = value\n            context.paint()\n        },\n    }\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null)\n    const srv = ref.current\n    const [specularExponent, setSpecularExponent] = useFloat(2.2, srv?.specularExponent)\n    const [specularIntensity, setSpecularIntensity] = useFloat(2, srv?.specularIntensity)\n    const [opacityMin, setOpacityMin] = useFloat(0, srv?.opacityMin)\n    const [opacityMax, setOpacityMax] = useFloat(0.05, srv?.opacityMax)\n    return (\n        <div>\n            <View\n                onReady={(scene: TgdContext, assets: Assets) => {\n                    ref.current = init(scene, assets)\n                }}\n                assets={{\n                    glb: {\n                        specimen: SpecimenURL,\n                    },\n                    image: {\n                        posX: PosX,\n                        posY: PosY,\n                        posZ: PosZ,\n                        negX: NegX,\n                        negY: NegY,\n                        negZ: NegZ,\n                    },\n                }}\n                controller={{\n                    inertiaOrbit: 1000,\n                }}>\n                <ViewPanel\n                    display=\"flex\"\n                    flex-wrap=\"wrap\"\n                    justifyContent=\"space-around\"\n                    alignItems=\"center\"\n                    gap=\"S\"\n                    width=\"600px\"\n                    maxWidth=\"600px\">\n                    <ViewInputNumber label=\"specularExponent\" value={specularExponent} onChange={setSpecularExponent} />\n                    <ViewInputNumber\n                        label=\"specularIntensity\"\n                        value={specularIntensity}\n                        onChange={setSpecularIntensity}\n                    />\n                </ViewPanel>\n                <ViewPanel\n                    display=\"flex\"\n                    flex-wrap=\"wrap\"\n                    justifyContent=\"space-around\"\n                    alignItems=\"center\"\n                    gap=\"S\"\n                    width=\"600px\"\n                    maxWidth=\"600px\">\n                    <ViewInputNumber label=\"opacityMin\" value={opacityMin} onChange={setOpacityMin} />\n                    <ViewInputNumber label=\"opacityMax\" value={opacityMax} onChange={setOpacityMax} />\n                </ViewPanel>\n            </View>\n        </div>\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/index.tsx",
                lineNumber: 16,
                columnNumber: 9
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
56287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _material__rspack_import_1 = __webpack_require__(67080);
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
                children: "Glass material"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "",
                        children: "Glass material"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 5,
                        columnNumber: 1
                    }, this),
                    " will turn off the depth test and use an alpha blending."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                    lineNumber: 13,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9nbGFzc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC0yN2M5ZTUuNzg3NDNjNDZkZmUyNjRmOC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsYXNzL19tYXRlcmlhbC9fbWF0ZXJpYWwuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvZ2xhc3MvX21hdGVyaWFsL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy91dGlscy9ob29rcy9mbG9hdC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9nbGFzcy9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFycmF5TnVtYmVyNCxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIHRnZENhbGNSYW5kb20zLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG4gICAgVGdkVGV4dHVyZUN1YmUsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJTa3lib3gsXG4gICAgVGdkTWF0ZXJpYWxHbGFzcyxcbiAgICBUZ2RDb2xvcixcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24sIFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5pbXBvcnQgU3BlY2ltZW5VUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3BlY2ltZW4uZ2xiXCJcbmltcG9ydCBQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NYLndlYnBcIlxuaW1wb3J0IFBvc1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFwiXG5pbXBvcnQgUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXCJcbmltcG9ydCBOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdYLndlYnBcIlxuaW1wb3J0IE5lZ1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFwiXG5pbXBvcnQgTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMTQsIDEuMSlcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsxLCAxLCAxLCAxXVxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXG4gICAgfSlcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsYXNzKHtcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxuICAgIH0pXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zcGVjaW1lbixcbiAgICAgICAgbWF0ZXJpYWwsXG4gICAgfSlcbiAgICAvLyAjZW5kXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG4gICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCBNYXRoLnNpbih0aW1lKSAqIDIwLCAwKVxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBuZXcgVGdkQ29sb3IoMC4xLCAwLjIsIDAuMywgMSlcbiAgICAgICAgICAgIGNvbG9yLnJnYjJoc2woKS5IID0gdGltZSAqIDAuMVxuICAgICAgICAgICAgY29sb3IuaHNsMnJnYigpXG4gICAgICAgICAgICBjbGVhci5yZWQgPSBjb2xvci5SXG4gICAgICAgICAgICBjbGVhci5ncmVlbiA9IGNvbG9yLkdcbiAgICAgICAgICAgIGNsZWFyLmJsdWUgPSBjb2xvci5CXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICAgICAgc3BlY3VsYXJJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgICAgIG9wYWNpdHlNaW4odmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgbWF0ZXJpYWwub3BhY2l0eU1pbiA9IHZhbHVlXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICAgICAgb3BhY2l0eU1heCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBtYXRlcmlhbC5vcGFjaXR5TWF4ID0gdmFsdWVcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICB9LFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XG4gICAgY29uc3QgW3NwZWN1bGFyRXhwb25lbnQsIHNldFNwZWN1bGFyRXhwb25lbnRdID0gdXNlRmxvYXQoMi4yLCBzcnY/LnNwZWN1bGFyRXhwb25lbnQpXG4gICAgY29uc3QgW3NwZWN1bGFySW50ZW5zaXR5LCBzZXRTcGVjdWxhckludGVuc2l0eV0gPSB1c2VGbG9hdCgyLCBzcnY/LnNwZWN1bGFySW50ZW5zaXR5KVxuICAgIGNvbnN0IFtvcGFjaXR5TWluLCBzZXRPcGFjaXR5TWluXSA9IHVzZUZsb2F0KDAsIHNydj8ub3BhY2l0eU1pbilcbiAgICBjb25zdCBbb3BhY2l0eU1heCwgc2V0T3BhY2l0eU1heF0gPSB1c2VGbG9hdCgwLjA1LCBzcnY/Lm9wYWNpdHlNYXgpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgb25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpbWVuOiBTcGVjaW1lblVSTCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1g6IFBvc1gsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NZOiBQb3NZLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWjogUG9zWixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ1g6IE5lZ1gsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdZOiBOZWdZLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnWjogTmVnWixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgZ2FwPVwiU1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjAwcHhcIlxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjYwMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgbGFiZWw9XCJzcGVjdWxhckV4cG9uZW50XCIgdmFsdWU9e3NwZWN1bGFyRXhwb25lbnR9IG9uQ2hhbmdlPXtzZXRTcGVjdWxhckV4cG9uZW50fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNwZWN1bGFySW50ZW5zaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcGVjdWxhckludGVuc2l0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTcGVjdWxhckludGVuc2l0eX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGdhcD1cIlNcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI2MDBweFwiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwib3BhY2l0eU1pblwiIHZhbHVlPXtvcGFjaXR5TWlufSBvbkNoYW5nZT17c2V0T3BhY2l0eU1pbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cIm9wYWNpdHlNYXhcIiB2YWx1ZT17b3BhY2l0eU1heH0gb25DaGFuZ2U9e3NldE9wYWNpdHlNYXh9IC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9fbWF0ZXJpYWwuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XCIgICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsxLCAxLCAxLCAxXVxcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsYXNzKHtcXG4gICAgICAgIGNvbG9yLFxcbiAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnNwZWNpbWVuLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH0pXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBBcnJheU51bWJlcjQsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIHRnZENhbGNSYW5kb20zLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxcbiAgICBUZ2RNYXRlcmlhbEdsYXNzLFxcbiAgICBUZ2RDb2xvcixcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiXFxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFxcXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XFxcIlxcbmltcG9ydCB7IFZpZXdCdXR0b24sIFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi91aVxcXCJcXG5cXG5pbXBvcnQgU3BlY2ltZW5VUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zcGVjaW1lbi5nbGJcXFwiXFxuaW1wb3J0IFBvc1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXFxcIlxcbmltcG9ydCBQb3NZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFxcXCJcXG5pbXBvcnQgUG9zWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NaLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXFxcIlxcbmltcG9ydCBOZWdZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFxcXCJcXG5pbXBvcnQgTmVnWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdaLndlYnBcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDE0LCAxLjEpXFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMSwgMSwgMSwgMV1cXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbGFzcyh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zcGVjaW1lbixcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgTWF0aC5zaW4odGltZSkgKiAyMCwgMClcXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG5ldyBUZ2RDb2xvcigwLjEsIDAuMiwgMC4zLCAxKVxcbiAgICAgICAgICAgIGNvbG9yLnJnYjJoc2woKS5IID0gdGltZSAqIDAuMVxcbiAgICAgICAgICAgIGNvbG9yLmhzbDJyZ2IoKVxcbiAgICAgICAgICAgIGNsZWFyLnJlZCA9IGNvbG9yLlJcXG4gICAgICAgICAgICBjbGVhci5ncmVlbiA9IGNvbG9yLkdcXG4gICAgICAgICAgICBjbGVhci5ibHVlID0gY29sb3IuQlxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG4gICAgcmV0dXJuIHtcXG4gICAgICAgIHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIG1hdGVyaWFsLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgICAgIHNwZWN1bGFySW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBtYXRlcmlhbC5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICAgICAgb3BhY2l0eU1pbih2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgbWF0ZXJpYWwub3BhY2l0eU1pbiA9IHZhbHVlXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICAgICAgb3BhY2l0eU1heCh2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgbWF0ZXJpYWwub3BhY2l0eU1heCA9IHZhbHVlXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XFxuICAgIGNvbnN0IFtzcGVjdWxhckV4cG9uZW50LCBzZXRTcGVjdWxhckV4cG9uZW50XSA9IHVzZUZsb2F0KDIuMiwgc3J2Py5zcGVjdWxhckV4cG9uZW50KVxcbiAgICBjb25zdCBbc3BlY3VsYXJJbnRlbnNpdHksIHNldFNwZWN1bGFySW50ZW5zaXR5XSA9IHVzZUZsb2F0KDIsIHNydj8uc3BlY3VsYXJJbnRlbnNpdHkpXFxuICAgIGNvbnN0IFtvcGFjaXR5TWluLCBzZXRPcGFjaXR5TWluXSA9IHVzZUZsb2F0KDAsIHNydj8ub3BhY2l0eU1pbilcXG4gICAgY29uc3QgW29wYWNpdHlNYXgsIHNldE9wYWNpdHlNYXhdID0gdXNlRmxvYXQoMC4wNSwgc3J2Py5vcGFjaXR5TWF4KVxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgICAgICBvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaW1lbjogU3BlY2ltZW5VUkwsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NYOiBQb3NYLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1k6IFBvc1ksXFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWjogUG9zWixcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdYOiBOZWdYLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ1k6IE5lZ1ksXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnWjogTmVnWixcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWxcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XFxcImZsZXhcXFwiXFxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA9XFxcIndyYXBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZ2FwPVxcXCJTXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XFxcIjYwMHB4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XFxcIjYwMHB4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgbGFiZWw9XFxcInNwZWN1bGFyRXhwb25lbnRcXFwiIHZhbHVlPXtzcGVjdWxhckV4cG9uZW50fSBvbkNoYW5nZT17c2V0U3BlY3VsYXJFeHBvbmVudH0gLz5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwic3BlY3VsYXJJbnRlbnNpdHlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NwZWN1bGFySW50ZW5zaXR5fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTcGVjdWxhckludGVuc2l0eX1cXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVxcXCJmbGV4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwPVxcXCJ3cmFwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGdhcD1cXFwiU1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVxcXCI2MDBweFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVxcXCI2MDBweFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJvcGFjaXR5TWluXFxcIiB2YWx1ZT17b3BhY2l0eU1pbn0gb25DaGFuZ2U9e3NldE9wYWNpdHlNaW59IC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJvcGFjaXR5TWF4XFxcIiB2YWx1ZT17b3BhY2l0eU1heH0gb25DaGFuZ2U9e3NldE9wYWNpdHlNYXh9IC8+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgIDwvVmlldz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZsb2F0KFxuICAgIGluaXRpYWxWYWx1ZTogbnVtYmVyLFxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQsXG4pOiBbdmFsdWU6IG51bWJlciwgc2V0VmFsdWU6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkXSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IG9uQ2hhbmdlPy4odmFsdWUpLCBbdmFsdWVdKVxuICAgIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU3RhdGUiLCJ3ZWJnbFByZXNldERlcHRoIiwiVGdkVGV4dHVyZUN1YmUiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RNYXRlcmlhbEdsYXNzIiwiVGdkQ29sb3IiLCJWaWV3IiwiUmVhY3QiLCJ1c2VGbG9hdCIsIlZpZXdJbnB1dE51bWJlciIsIlZpZXdQYW5lbCIsIlNwZWNpbWVuVVJMIiwiUG9zWCIsIlBvc1kiLCJQb3NaIiwiTmVnWCIsIk5lZ1kiLCJOZWdaIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjb2xvciIsInNreWJveCIsIm1hdGVyaWFsIiwibWVzaCIsImNsZWFyIiwidGltZSIsIk1hdGgiLCJzcGVjdWxhckV4cG9uZW50IiwidmFsdWUiLCJzcGVjdWxhckludGVuc2l0eSIsIm9wYWNpdHlNaW4iLCJvcGFjaXR5TWF4IiwiRGVtbyIsInJlZiIsInNydiIsIl91c2VGbG9hdCIsInNldFNwZWN1bGFyRXhwb25lbnQiLCJfdXNlRmxvYXQxIiwic2V0U3BlY3VsYXJJbnRlbnNpdHkiLCJfdXNlRmxvYXQyIiwic2V0T3BhY2l0eU1pbiIsIl91c2VGbG9hdDMiLCJzZXRPcGFjaXR5TWF4Iiwib25SZWFkeSIsInNjZW5lIiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1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