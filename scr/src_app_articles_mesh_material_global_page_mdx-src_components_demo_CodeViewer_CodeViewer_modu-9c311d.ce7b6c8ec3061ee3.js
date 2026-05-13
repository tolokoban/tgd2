"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_global_page_mdx-src_components_demo_CodeViewer_CodeViewer_modu-9c311d"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

},
83976(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var _assets_mesh_suzanne_glb__rspack_import_6 = __webpack_require__(21278);
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
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
    // #begin Initializing WebGL
    var color = _to_consumable_array((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom3)()).concat([
        1
    ]);
    var skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ
    });
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialGlobal({
        color: color,
        ambientColor: skybox
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: material
    });
    // #end
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.3,
            0.3,
            0.3,
            1
        ],
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterSkybox(context, {
        camera: context.camera,
        texture: {
            imagePosX: assets.image.posX,
            imagePosY: assets.image.posY,
            imagePosZ: assets.image.posZ,
            imageNegX: assets.image.negX,
            imageNegY: assets.image.negY,
            imageNegZ: assets.image.negZ
        }
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            mesh
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time) {
        mesh.transfo.setEulerRotation(0, -time * 20, 0);
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
        }
    };
}
function Demo() {
    var ref = react__rspack_import_3_default().useRef(null);
    var srv = ref.current;
    var _useFloat = _sliced_to_array((0,_utils_hooks_float__rspack_import_4.useFloat)(2.2, srv === null || srv === void 0 ? void 0 : srv.specularExponent), 2), specularExponent = _useFloat[0], setSpecularExponent = _useFloat[1];
    var _useFloat1 = _sliced_to_array((0,_utils_hooks_float__rspack_import_4.useFloat)(2, srv === null || srv === void 0 ? void 0 : srv.specularIntensity), 2), specularIntensity = _useFloat1[0], setSpecularIntensity = _useFloat1[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
            onReady: function onReady(scene, assets) {
                ref.current = init(scene, assets);
            },
            assets: {
                glb: {
                    suzane: _assets_mesh_suzanne_glb__rspack_import_6
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
            gizmo: true,
            controller: {
                inertiaOrbit: 1000
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewPanel, {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "specularExponent",
                            value: specularExponent,
                            onChange: setSpecularExponent
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 113,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "specularIntensity",
                            value: specularIntensity,
                            onChange: setSpecularIntensity
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 114,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                    lineNumber: 112,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewPanel, {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewButton, {
                            variant: "text",
                            color: "primary-5",
                            onClick: function onClick() {
                                setSpecularExponent(1);
                                setSpecularIntensity(1);
                            },
                            children: "Brushed Metal"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewButton, {
                            variant: "text",
                            color: "primary-5",
                            onClick: function onClick() {
                                setSpecularExponent(0.25);
                                setSpecularIntensity(1.5);
                            },
                            children: "Soft Light"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 130,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewButton, {
                            variant: "text",
                            color: "primary-5",
                            onClick: function onClick() {
                                setSpecularExponent(2.2);
                                setSpecularIntensity(2);
                            },
                            children: "Car Paint"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewButton, {
                            variant: "text",
                            color: "primary-5",
                            onClick: function onClick() {
                                setSpecularExponent(0);
                                setSpecularIntensity(1);
                            },
                            children: "Plastic"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 148,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                    lineNumber: 120,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
            lineNumber: 91,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
        lineNumber: 90,
        columnNumber: 9
    }, this);
}


},
48139(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _material_demo__rspack_import_4 = __webpack_require__(83976);
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
    "Initializing WebGL": "    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const material = new TgdMaterialGlobal({\n        color,\n        ambientColor: skybox,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material,\n    })"
};
var FULL = "import {\n    ArrayNumber4,\n    TgdContext,\n    TgdPainterClear,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    tgdCalcRandom3,\n    webglPresetDepth,\n    TgdTextureCube,\n    TgdPainterLogic,\n    TgdPainterSkybox,\n    TgdMaterialGlobal,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport React from \"react\"\nimport { useFloat } from \"@/utils/hooks/float\"\nimport { ViewButton, ViewInputNumber, ViewPanel } from \"@tolokoban/ui\"\n\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\"\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\"\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\"\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\"\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\"\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const material = new TgdMaterialGlobal({\n        color,\n        ambientColor: skybox,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material,\n    })\n    context.add(\n        new TgdPainterClear(context, {\n            color: [0.3, 0.3, 0.3, 1],\n            depth: 1,\n        }),\n        new TgdPainterSkybox(context, {\n            camera: context.camera,\n            texture: {\n                imagePosX: assets.image.posX,\n                imagePosY: assets.image.posY,\n                imagePosZ: assets.image.posZ,\n                imageNegX: assets.image.negX,\n                imageNegY: assets.image.negY,\n                imageNegZ: assets.image.negZ,\n            },\n        }),\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [mesh],\n        }),\n        new TgdPainterLogic((time) => {\n            mesh.transfo.setEulerRotation(0, -time * 20, 0)\n        }),\n    )\n    context.play()\n    return {\n        specularExponent(value: number) {\n            material.specularExponent = value\n            context.paint()\n        },\n        specularIntensity(value: number) {\n            material.specularIntensity = value\n            context.paint()\n        },\n    }\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null)\n    const srv = ref.current\n    const [specularExponent, setSpecularExponent] = useFloat(2.2, srv?.specularExponent)\n    const [specularIntensity, setSpecularIntensity] = useFloat(2, srv?.specularIntensity)\n    return (\n        <div>\n            <View\n                onReady={(scene: TgdContext, assets: Assets) => {\n                    ref.current = init(scene, assets)\n                }}\n                assets={{\n                    glb: {\n                        suzane: SuzaneURL,\n                    },\n                    image: {\n                        posX: PosX,\n                        posY: PosY,\n                        posZ: PosZ,\n                        negX: NegX,\n                        negY: NegY,\n                        negZ: NegZ,\n                    },\n                }}\n                gizmo\n                controller={{\n                    inertiaOrbit: 1000,\n                }}>\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\">\n                    <ViewInputNumber label=\"specularExponent\" value={specularExponent} onChange={setSpecularExponent} />\n                    <ViewInputNumber\n                        label=\"specularIntensity\"\n                        value={specularIntensity}\n                        onChange={setSpecularIntensity}\n                    />\n                </ViewPanel>\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\">\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(1)\n                            setSpecularIntensity(1)\n                        }}>\n                        Brushed Metal\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(0.25)\n                            setSpecularIntensity(1.5)\n                        }}>\n                        Soft Light\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(2.2)\n                            setSpecularIntensity(2)\n                        }}>\n                        Car Paint\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(0)\n                            setSpecularIntensity(1)\n                        }}>\n                        Plastic\n                    </ViewButton>\n                </ViewPanel>\n            </View>\n        </div>\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/index.tsx",
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
19524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _material__rspack_import_1 = __webpack_require__(48139);
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
                children: "Global material"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "",
                        children: "Global material"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                        lineNumber: 9,
                        columnNumber: 5
                    }, this),
                    " is a versatile one, but one of the slowest because it relies on several textures."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                    lineNumber: 13,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9nbG9iYWxfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdS05YzMxMWQuY2U3YjZjOGVjMzA2MWVlMy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsb2JhbC9fbWF0ZXJpYWwvX21hdGVyaWFsLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsb2JhbC9fbWF0ZXJpYWwvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3V0aWxzL2hvb2tzL2Zsb2F0LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsb2JhbC9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFycmF5TnVtYmVyNCxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIHRnZENhbGNSYW5kb20zLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG4gICAgVGdkVGV4dHVyZUN1YmUsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJTa3lib3gsXG4gICAgVGdkTWF0ZXJpYWxHbG9iYWwsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFwiQC91dGlscy9ob29rcy9mbG9hdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uLCBWaWV3SW5wdXROdW1iZXIsIFZpZXdQYW5lbCB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5pbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXCJcbmltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcIlxuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1oud2VicFwiXG5pbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXCJcbmltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcIlxuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1oud2VicFwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXVxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXG4gICAgfSlcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XG4gICAgICAgIGNvbG9yLFxuICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcbiAgICB9KVxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxuICAgICAgICBtYXRlcmlhbCxcbiAgICB9KVxuICAgIC8vICNlbmRcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxuICAgICAgICAgICAgZGVwdGg6IDEsXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XG4gICAgICAgICAgICBjYW1lcmE6IGNvbnRleHQuY2FtZXJhLFxuICAgICAgICAgICAgdGV4dHVyZToge1xuICAgICAgICAgICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXG4gICAgICAgICAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcbiAgICAgICAgICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxuICAgICAgICAgICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXG4gICAgICAgICAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcbiAgICAgICAgICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG4gICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCAtdGltZSAqIDIwLCAwKVxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICByZXR1cm4ge1xuICAgICAgICBzcGVjdWxhckV4cG9uZW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgICAgIHNwZWN1bGFySW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNwZWN1bGFySW50ZW5zaXR5ID0gdmFsdWVcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICB9LFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XG4gICAgY29uc3QgW3NwZWN1bGFyRXhwb25lbnQsIHNldFNwZWN1bGFyRXhwb25lbnRdID0gdXNlRmxvYXQoMi4yLCBzcnY/LnNwZWN1bGFyRXhwb25lbnQpXG4gICAgY29uc3QgW3NwZWN1bGFySW50ZW5zaXR5LCBzZXRTcGVjdWxhckludGVuc2l0eV0gPSB1c2VGbG9hdCgyLCBzcnY/LnNwZWN1bGFySW50ZW5zaXR5KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICAgICAgZ2xiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdXphbmU6IFN1emFuZVVSTCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1g6IFBvc1gsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NZOiBQb3NZLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWjogUG9zWixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ1g6IE5lZ1gsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdZOiBOZWdZLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnWjogTmVnWixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwic3BlY3VsYXJFeHBvbmVudFwiIHZhbHVlPXtzcGVjdWxhckV4cG9uZW50fSBvbkNoYW5nZT17c2V0U3BlY3VsYXJFeHBvbmVudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzcGVjdWxhckludGVuc2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3BlY3VsYXJJbnRlbnNpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U3BlY3VsYXJJbnRlbnNpdHl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBCcnVzaGVkIE1ldGFsXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDAuMjUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMS41KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBTb2Z0IExpZ2h0XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDIuMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYXIgUGFpbnRcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFzdGljXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL19tYXRlcmlhbC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcIiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWy4uLnRnZENhbGNSYW5kb20zKCksIDFdXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcXG4gICAgICAgIGNvbG9yLFxcbiAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICB9KVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgQXJyYXlOdW1iZXI0LFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICB0Z2RDYWxjUmFuZG9tMyxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG4gICAgVGdkVGV4dHVyZUN1YmUsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlclNreWJveCxcXG4gICAgVGdkTWF0ZXJpYWxHbG9iYWwsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcXFwiQC91dGlscy9ob29rcy9mbG9hdFxcXCJcXG5pbXBvcnQgeyBWaWV3QnV0dG9uLCBWaWV3SW5wdXROdW1iZXIsIFZpZXdQYW5lbCB9IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiXFxuXFxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIlxcbmltcG9ydCBQb3NYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1gud2VicFxcXCJcXG5pbXBvcnQgUG9zWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcXFwiXFxuaW1wb3J0IFBvc1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXFxcIlxcbmltcG9ydCBOZWdYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1gud2VicFxcXCJcXG5pbXBvcnQgTmVnWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXVxcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XFxuICAgICAgICAgICAgY2FtZXJhOiBjb250ZXh0LmNhbWVyYSxcXG4gICAgICAgICAgICB0ZXh0dXJlOiB7XFxuICAgICAgICAgICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICAgICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuICAgICAgICAgICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXFxuICAgICAgICAgICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICAgICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuICAgICAgICAgICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgLXRpbWUgKiAyMCwgMClcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIHJldHVybiB7XFxuICAgICAgICBzcGVjdWxhckV4cG9uZW50KHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBtYXRlcmlhbC5zcGVjdWxhckV4cG9uZW50ID0gdmFsdWVcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0sXFxuICAgICAgICBzcGVjdWxhckludGVuc2l0eSh2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBzcnYgPSByZWYuY3VycmVudFxcbiAgICBjb25zdCBbc3BlY3VsYXJFeHBvbmVudCwgc2V0U3BlY3VsYXJFeHBvbmVudF0gPSB1c2VGbG9hdCgyLjIsIHNydj8uc3BlY3VsYXJFeHBvbmVudClcXG4gICAgY29uc3QgW3NwZWN1bGFySW50ZW5zaXR5LCBzZXRTcGVjdWxhckludGVuc2l0eV0gPSB1c2VGbG9hdCgyLCBzcnY/LnNwZWN1bGFySW50ZW5zaXR5KVxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgICAgICBvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXphbmU6IFN1emFuZVVSTCxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1g6IFBvc1gsXFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWTogUG9zWSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NaOiBQb3NaLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ1g6IE5lZ1gsXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnWTogTmVnWSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdaOiBOZWdaLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVxcXCJmbGV4XFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cXFwic3BlY3VsYXJFeHBvbmVudFxcXCIgdmFsdWU9e3NwZWN1bGFyRXhwb25lbnR9IG9uQ2hhbmdlPXtzZXRTcGVjdWxhckV4cG9uZW50fSAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJzcGVjdWxhckludGVuc2l0eVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3BlY3VsYXJJbnRlbnNpdHl9XFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNwZWN1bGFySW50ZW5zaXR5fVxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cXFwiZmxleFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCgxKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgxKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEJydXNoZWQgTWV0YWxcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCgwLjI1KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgxLjUpXFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgU29mdCBMaWdodFxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDIuMilcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMilcXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXIgUGFpbnRcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCgwKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgxKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXN0aWNcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICAgICAgPC9WaWV3PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmxvYXQoXG4gICAgaW5pdGlhbFZhbHVlOiBudW1iZXIsXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCxcbik6IFt2YWx1ZTogbnVtYmVyLCBzZXRWYWx1ZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWRdIHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZSlcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gb25DaGFuZ2U/Lih2YWx1ZSksIFt2YWx1ZV0pXG4gICAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTdGF0ZSIsInRnZENhbGNSYW5kb20zIiwid2ViZ2xQcmVzZXREZXB0aCIsIlRnZFRleHR1cmVDdWJlIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlclNreWJveCIsIlRnZE1hdGVyaWFsR2xvYmFsIiwiVmlldyIsIlJlYWN0IiwidXNlRmxvYXQiLCJWaWV3QnV0dG9uIiwiVmlld0lucHV0TnVtYmVyIiwiVmlld1BhbmVsIiwiU3V6YW5lVVJMIiwiUG9zWCIsIlBvc1kiLCJQb3NaIiwiTmVnWCIsIk5lZ1kiLCJOZWdaIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjb2xvciIsInNreWJveCIsIm1hdGVyaWFsIiwibWVzaCIsInRpbWUiLCJzcGVjdWxhckV4cG9uZW50IiwidmFsdWUiLCJzcGVjdWxhckludGVuc2l0eSIsIkRlbW8iLCJyZWYiLCJzcnYiLCJfdXNlRmxvYXQiLCJzZXRTcGVjdWxhckV4cG9uZW50IiwiX3VzZUZsb2F0MSIsInNldFNwZWN1bGFySW50ZW5zaXR5Iiwib25SZWFkeSIsInNjZW5lIiwib25DbGljayIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJpbml0aWFsVmFsdWUiLCJvbkNoYW5nZSIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZdUI7QUFDNkI7QUFDM0I7QUFDcUI7QUFDd0I7QUFFckI7QUFDUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFMUQsU0FBU3NCLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDN0MsNEJBQTRCO0lBQzVCLElBQU1DLFFBQXVCLHFCQUFHdEIsa0RBQWNBLFdBQWxCO1FBQXNCO0tBQUU7SUFDcEQsSUFBTXVCLFNBQVMsSUFBSXJCLDhDQUFjQSxDQUFDa0IsU0FBUztRQUN2QyxXQUFXQyxPQUFPLEtBQUssQ0FBQyxJQUFJO1FBQzVCLFdBQVdBLE9BQU8sS0FBSyxDQUFDLElBQUk7UUFDNUIsV0FBV0EsT0FBTyxLQUFLLENBQUMsSUFBSTtRQUM1QixXQUFXQSxPQUFPLEtBQUssQ0FBQyxJQUFJO1FBQzVCLFdBQVdBLE9BQU8sS0FBSyxDQUFDLElBQUk7UUFDNUIsV0FBV0EsT0FBTyxLQUFLLENBQUMsSUFBSTtJQUNoQztJQUNBLElBQU1HLFdBQVcsSUFBSW5CLGlEQUFpQkEsQ0FBQztRQUNuQ2lCLE9BQUFBO1FBQ0EsY0FBY0M7SUFDbEI7SUFDQSxJQUFNRSxPQUFPLElBQUkzQixrREFBa0JBLENBQUNzQixTQUFTO1FBQ3pDLE9BQU9DLE9BQU8sR0FBRyxD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