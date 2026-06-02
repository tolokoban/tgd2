"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_global_page_mdx-src_components_demo_CodeViewer_CodeViewer_modu-9c311d"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

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
    // #begin Initializing WebGL
    var color = _tolokoban_tgd__rspack_import_1.TgdColor.fromHSL(Math.random(), 1, 0.8).toArayNumber4();
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 129,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "specularIntensity",
                            value: specularIntensity,
                            onChange: setSpecularIntensity
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 134,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                    lineNumber: 124,
                    columnNumber: 5
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 145,
                            columnNumber: 6
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 155,
                            columnNumber: 6
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 165,
                            columnNumber: 6
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 175,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                    lineNumber: 140,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
            lineNumber: 102,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
        lineNumber: 101,
        columnNumber: 3
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
    "Initializing WebGL": "\tconst color: ArrayNumber4 = TgdColor.fromHSL(\n\t\tMath.random(),\n\t\t1,\n\t\t0.8,\n\t).toArayNumber4();\n\tconst skybox = new TgdTextureCube(context, {\n\t\timagePosX: assets.image.posX,\n\t\timagePosY: assets.image.posY,\n\t\timagePosZ: assets.image.posZ,\n\t\timageNegX: assets.image.negX,\n\t\timageNegY: assets.image.negY,\n\t\timageNegZ: assets.image.negZ,\n\t});\n\tconst material = new TgdMaterialGlobal({\n\t\tcolor,\n\t\tambientColor: skybox,\n\t});\n\tconst mesh = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzane,\n\t\tmaterial,\n\t});"
};
var FULL = "import {\n\ttype ArrayNumber4,\n\ttype TgdContext,\n\tTgdPainterClear,\n\tTgdPainterMeshGltf,\n\tTgdPainterState,\n\ttgdCalcRandom3,\n\twebglPresetDepth,\n\tTgdTextureCube,\n\tTgdPainterLogic,\n\tTgdPainterSkybox,\n\tTgdMaterialGlobal,\n\tTgdColor,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\nimport React from \"react\";\nimport { useFloat } from \"@/utils/hooks/float\";\nimport { ViewButton, ViewInputNumber, ViewPanel } from \"@tolokoban/ui\";\n\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\";\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\";\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\";\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\";\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\";\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\";\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst color: ArrayNumber4 = TgdColor.fromHSL(\n\t\tMath.random(),\n\t\t1,\n\t\t0.8,\n\t).toArayNumber4();\n\tconst skybox = new TgdTextureCube(context, {\n\t\timagePosX: assets.image.posX,\n\t\timagePosY: assets.image.posY,\n\t\timagePosZ: assets.image.posZ,\n\t\timageNegX: assets.image.negX,\n\t\timageNegY: assets.image.negY,\n\t\timageNegZ: assets.image.negZ,\n\t});\n\tconst material = new TgdMaterialGlobal({\n\t\tcolor,\n\t\tambientColor: skybox,\n\t});\n\tconst mesh = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzane,\n\t\tmaterial,\n\t});\n\tcontext.add(\n\t\tnew TgdPainterClear(context, {\n\t\t\tcolor: [0.3, 0.3, 0.3, 1],\n\t\t\tdepth: 1,\n\t\t}),\n\t\tnew TgdPainterSkybox(context, {\n\t\t\tcamera: context.camera,\n\t\t\ttexture: {\n\t\t\t\timagePosX: assets.image.posX,\n\t\t\t\timagePosY: assets.image.posY,\n\t\t\t\timagePosZ: assets.image.posZ,\n\t\t\t\timageNegX: assets.image.negX,\n\t\t\t\timageNegY: assets.image.negY,\n\t\t\t\timageNegZ: assets.image.negZ,\n\t\t\t},\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tchildren: [mesh],\n\t\t}),\n\t\tnew TgdPainterLogic((time) => {\n\t\t\tmesh.transfo.setEulerRotation(0, -time * 20, 0);\n\t\t}),\n\t);\n\tcontext.play();\n\treturn {\n\t\tspecularExponent(value: number) {\n\t\t\tmaterial.specularExponent = value;\n\t\t\tcontext.paint();\n\t\t},\n\t\tspecularIntensity(value: number) {\n\t\t\tmaterial.specularIntensity = value;\n\t\t\tcontext.paint();\n\t\t},\n\t};\n}\n\nexport default function Demo() {\n\tconst ref = React.useRef<ReturnType<typeof init> | null>(null);\n\tconst srv = ref.current;\n\tconst [specularExponent, setSpecularExponent] = useFloat(\n\t\t2.2,\n\t\tsrv?.specularExponent,\n\t);\n\tconst [specularIntensity, setSpecularIntensity] = useFloat(\n\t\t2,\n\t\tsrv?.specularIntensity,\n\t);\n\treturn (\n\t\t<div>\n\t\t\t<View\n\t\t\t\tonReady={(scene: TgdContext, assets: Assets) => {\n\t\t\t\t\tref.current = init(scene, assets);\n\t\t\t\t}}\n\t\t\t\tassets={{\n\t\t\t\t\tglb: {\n\t\t\t\t\t\tsuzane: SuzaneURL,\n\t\t\t\t\t},\n\t\t\t\t\timage: {\n\t\t\t\t\t\tposX: PosX,\n\t\t\t\t\t\tposY: PosY,\n\t\t\t\t\t\tposZ: PosZ,\n\t\t\t\t\t\tnegX: NegX,\n\t\t\t\t\t\tnegY: NegY,\n\t\t\t\t\t\tnegZ: NegZ,\n\t\t\t\t\t},\n\t\t\t\t}}\n\t\t\t\tgizmo\n\t\t\t\tcontroller={{\n\t\t\t\t\tinertiaOrbit: 1000,\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\t<ViewPanel\n\t\t\t\t\tdisplay=\"flex\"\n\t\t\t\t\tjustifyContent=\"space-around\"\n\t\t\t\t\talignItems=\"center\"\n\t\t\t\t>\n\t\t\t\t\t<ViewInputNumber\n\t\t\t\t\t\tlabel=\"specularExponent\"\n\t\t\t\t\t\tvalue={specularExponent}\n\t\t\t\t\t\tonChange={setSpecularExponent}\n\t\t\t\t\t/>\n\t\t\t\t\t<ViewInputNumber\n\t\t\t\t\t\tlabel=\"specularIntensity\"\n\t\t\t\t\t\tvalue={specularIntensity}\n\t\t\t\t\t\tonChange={setSpecularIntensity}\n\t\t\t\t\t/>\n\t\t\t\t</ViewPanel>\n\t\t\t\t<ViewPanel\n\t\t\t\t\tdisplay=\"flex\"\n\t\t\t\t\tjustifyContent=\"space-around\"\n\t\t\t\t\talignItems=\"center\"\n\t\t\t\t>\n\t\t\t\t\t<ViewButton\n\t\t\t\t\t\tvariant=\"text\"\n\t\t\t\t\t\tcolor=\"primary-5\"\n\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\tsetSpecularExponent(1);\n\t\t\t\t\t\t\tsetSpecularIntensity(1);\n\t\t\t\t\t\t}}\n\t\t\t\t\t>\n\t\t\t\t\t\tBrushed Metal\n\t\t\t\t\t</ViewButton>\n\t\t\t\t\t<ViewButton\n\t\t\t\t\t\tvariant=\"text\"\n\t\t\t\t\t\tcolor=\"primary-5\"\n\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\tsetSpecularExponent(0.25);\n\t\t\t\t\t\t\tsetSpecularIntensity(1.5);\n\t\t\t\t\t\t}}\n\t\t\t\t\t>\n\t\t\t\t\t\tSoft Light\n\t\t\t\t\t</ViewButton>\n\t\t\t\t\t<ViewButton\n\t\t\t\t\t\tvariant=\"text\"\n\t\t\t\t\t\tcolor=\"primary-5\"\n\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\tsetSpecularExponent(2.2);\n\t\t\t\t\t\t\tsetSpecularIntensity(2);\n\t\t\t\t\t\t}}\n\t\t\t\t\t>\n\t\t\t\t\t\tCar Paint\n\t\t\t\t\t</ViewButton>\n\t\t\t\t\t<ViewButton\n\t\t\t\t\t\tvariant=\"text\"\n\t\t\t\t\t\tcolor=\"primary-5\"\n\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\tsetSpecularExponent(0);\n\t\t\t\t\t\t\tsetSpecularIntensity(1);\n\t\t\t\t\t\t}}\n\t\t\t\t\t>\n\t\t\t\t\t\tPlastic\n\t\t\t\t\t</ViewButton>\n\t\t\t\t</ViewPanel>\n\t\t\t</View>\n\t\t</div>\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/index.tsx",
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
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                        lineNumber: 9,
                        columnNumber: 5
                    }, this),
                    " is a versatile one, but one of the slowest because it relies on several textures."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                    lineNumber: 13,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9nbG9iYWxfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdS05YzMxMWQuYTAyYmUzNTY2MDI1ZmNhZi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9nbG9iYWwvX21hdGVyaWFsL19tYXRlcmlhbC5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvZ2xvYmFsL19tYXRlcmlhbC9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3V0aWxzL2hvb2tzL2Zsb2F0LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9nbG9iYWwvcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdHR5cGUgQXJyYXlOdW1iZXI0LFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlck1lc2hHbHRmLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdHRnZENhbGNSYW5kb20zLFxuXHR3ZWJnbFByZXNldERlcHRoLFxuXHRUZ2RUZXh0dXJlQ3ViZSxcblx0VGdkUGFpbnRlckxvZ2ljLFxuXHRUZ2RQYWludGVyU2t5Ym94LFxuXHRUZ2RNYXRlcmlhbEdsb2JhbCxcblx0VGdkQ29sb3IsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uLCBWaWV3SW5wdXROdW1iZXIsIFZpZXdQYW5lbCB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5cbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcbmltcG9ydCBQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NYLndlYnBcIjtcbmltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcIjtcbmltcG9ydCBQb3NaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NaLndlYnBcIjtcbmltcG9ydCBOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdYLndlYnBcIjtcbmltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcIjtcbmltcG9ydCBOZWdaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdaLndlYnBcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG5cdGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBUZ2RDb2xvci5mcm9tSFNMKFxuXHRcdE1hdGgucmFuZG9tKCksXG5cdFx0MSxcblx0XHQwLjgsXG5cdCkudG9BcmF5TnVtYmVyNCgpO1xuXHRjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xuXHRcdGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXG5cdFx0aW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcblx0XHRpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxuXHRcdGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXG5cdFx0aW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcblx0XHRpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxuXHR9KTtcblx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xuXHRcdGNvbG9yLFxuXHRcdGFtYmllbnRDb2xvcjogc2t5Ym94LFxuXHR9KTtcblx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcblx0XHRtYXRlcmlhbCxcblx0fSk7XG5cdC8vICNlbmRcblx0Y29udGV4dC5hZGQoXG5cdFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0XHRjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxuXHRcdFx0ZGVwdGg6IDEsXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xuXHRcdFx0Y2FtZXJhOiBjb250ZXh0LmNhbWVyYSxcblx0XHRcdHRleHR1cmU6IHtcblx0XHRcdFx0aW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcblx0XHRcdFx0aW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcblx0XHRcdFx0aW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcblx0XHRcdFx0aW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcblx0XHRcdFx0aW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcblx0XHRcdFx0aW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcblx0XHRcdH0sXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHRcdFx0Y2hpbGRyZW46IFttZXNoXSxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG5cdFx0XHRtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCAtdGltZSAqIDIwLCAwKTtcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wbGF5KCk7XG5cdHJldHVybiB7XG5cdFx0c3BlY3VsYXJFeHBvbmVudCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0XHRtYXRlcmlhbC5zcGVjdWxhckV4cG9uZW50ID0gdmFsdWU7XG5cdFx0XHRjb250ZXh0LnBhaW50KCk7XG5cdFx0fSxcblx0XHRzcGVjdWxhckludGVuc2l0eSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0XHRtYXRlcmlhbC5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlO1xuXHRcdFx0Y29udGV4dC5wYWludCgpO1xuXHRcdH0sXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBzcnYgPSByZWYuY3VycmVudDtcblx0Y29uc3QgW3NwZWN1bGFyRXhwb25lbnQsIHNldFNwZWN1bGFyRXhwb25lbnRdID0gdXNlRmxvYXQoXG5cdFx0Mi4yLFxuXHRcdHNydj8uc3BlY3VsYXJFeHBvbmVudCxcblx0KTtcblx0Y29uc3QgW3NwZWN1bGFySW50ZW5zaXR5LCBzZXRTcGVjdWxhckludGVuc2l0eV0gPSB1c2VGbG9hdChcblx0XHQyLFxuXHRcdHNydj8uc3BlY3VsYXJJbnRlbnNpdHksXG5cdCk7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxWaWV3XG5cdFx0XHRcdG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcblx0XHRcdFx0XHRyZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cyk7XG5cdFx0XHRcdH19XG5cdFx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRcdGdsYjoge1xuXHRcdFx0XHRcdFx0c3V6YW5lOiBTdXphbmVVUkwsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRpbWFnZToge1xuXHRcdFx0XHRcdFx0cG9zWDogUG9zWCxcblx0XHRcdFx0XHRcdHBvc1k6IFBvc1ksXG5cdFx0XHRcdFx0XHRwb3NaOiBQb3NaLFxuXHRcdFx0XHRcdFx0bmVnWDogTmVnWCxcblx0XHRcdFx0XHRcdG5lZ1k6IE5lZ1ksXG5cdFx0XHRcdFx0XHRuZWdaOiBOZWdaLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH19XG5cdFx0XHRcdGdpem1vXG5cdFx0XHRcdGNvbnRyb2xsZXI9e3tcblx0XHRcdFx0XHRpbmVydGlhT3JiaXQ6IDEwMDAsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxWaWV3UGFuZWxcblx0XHRcdFx0XHRkaXNwbGF5PVwiZmxleFwiXG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIlxuXHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFZpZXdJbnB1dE51bWJlclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJzcGVjdWxhckV4cG9uZW50XCJcblx0XHRcdFx0XHRcdHZhbHVlPXtzcGVjdWxhckV4cG9uZW50fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3NldFNwZWN1bGFyRXhwb25lbnR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Vmlld0lucHV0TnVtYmVyXG5cdFx0XHRcdFx0XHRsYWJlbD1cInNwZWN1bGFySW50ZW5zaXR5XCJcblx0XHRcdFx0XHRcdHZhbHVlPXtzcGVjdWxhckludGVuc2l0eX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXRTcGVjdWxhckludGVuc2l0eX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1ZpZXdQYW5lbD5cblx0XHRcdFx0PFZpZXdQYW5lbFxuXHRcdFx0XHRcdGRpc3BsYXk9XCJmbGV4XCJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiXG5cdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvblxuXHRcdFx0XHRcdFx0dmFyaWFudD1cInRleHRcIlxuXHRcdFx0XHRcdFx0Y29sb3I9XCJwcmltYXJ5LTVcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRTcGVjdWxhckV4cG9uZW50KDEpO1xuXHRcdFx0XHRcdFx0XHRzZXRTcGVjdWxhckludGVuc2l0eSgxKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0QnJ1c2hlZCBNZXRhbFxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvblxuXHRcdFx0XHRcdFx0dmFyaWFudD1cInRleHRcIlxuXHRcdFx0XHRcdFx0Y29sb3I9XCJwcmltYXJ5LTVcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRTcGVjdWxhckV4cG9uZW50KDAuMjUpO1xuXHRcdFx0XHRcdFx0XHRzZXRTcGVjdWxhckludGVuc2l0eSgxLjUpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRTb2Z0IExpZ2h0XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjb2xvcj1cInByaW1hcnktNVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldFNwZWN1bGFyRXhwb25lbnQoMi4yKTtcblx0XHRcdFx0XHRcdFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMik7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdENhciBQYWludFxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvblxuXHRcdFx0XHRcdFx0dmFyaWFudD1cInRleHRcIlxuXHRcdFx0XHRcdFx0Y29sb3I9XCJwcmltYXJ5LTVcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRTcGVjdWxhckV4cG9uZW50KDApO1xuXHRcdFx0XHRcdFx0XHRzZXRTcGVjdWxhckludGVuc2l0eSgxKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0UGxhc3RpY1xuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9WaWV3UGFuZWw+XG5cdFx0XHQ8L1ZpZXc+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vX21hdGVyaWFsLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiXFx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFRnZENvbG9yLmZyb21IU0woXFxuXFx0XFx0TWF0aC5yYW5kb20oKSxcXG5cXHRcXHQxLFxcblxcdFxcdDAuOCxcXG5cXHQpLnRvQXJheU51bWJlcjQoKTtcXG5cXHRjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcblxcdFxcdGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuXFx0XFx0aW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG5cXHRcXHRpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcblxcdFxcdGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuXFx0XFx0aW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG5cXHRcXHRpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcblxcdH0pO1xcblxcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcXG5cXHRcXHRjb2xvcixcXG5cXHRcXHRhbWJpZW50Q29sb3I6IHNreWJveCxcXG5cXHR9KTtcXG5cXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuXFx0XFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcblxcdFxcdG1hdGVyaWFsLFxcblxcdH0pO1wifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHR0eXBlIEFycmF5TnVtYmVyNCxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJNZXNoR2x0ZixcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0dGdkQ2FsY1JhbmRvbTMsXFxuXFx0d2ViZ2xQcmVzZXREZXB0aCxcXG5cXHRUZ2RUZXh0dXJlQ3ViZSxcXG5cXHRUZ2RQYWludGVyTG9naWMsXFxuXFx0VGdkUGFpbnRlclNreWJveCxcXG5cXHRUZ2RNYXRlcmlhbEdsb2JhbCxcXG5cXHRUZ2RDb2xvcixcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIjtcXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXFxcIkAvdXRpbHMvaG9va3MvZmxvYXRcXFwiO1xcbmltcG9ydCB7IFZpZXdCdXR0b24sIFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi91aVxcXCI7XFxuXFxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIjtcXG5pbXBvcnQgUG9zWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NYLndlYnBcXFwiO1xcbmltcG9ydCBQb3NZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFxcXCI7XFxuaW1wb3J0IFBvc1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXFxcIjtcXG5pbXBvcnQgTmVnWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdYLndlYnBcXFwiO1xcbmltcG9ydCBOZWdZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFxcXCI7XFxuaW1wb3J0IE5lZ1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFRnZENvbG9yLmZyb21IU0woXFxuXFx0XFx0TWF0aC5yYW5kb20oKSxcXG5cXHRcXHQxLFxcblxcdFxcdDAuOCxcXG5cXHQpLnRvQXJheU51bWJlcjQoKTtcXG5cXHRjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcblxcdFxcdGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuXFx0XFx0aW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG5cXHRcXHRpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcblxcdFxcdGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuXFx0XFx0aW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG5cXHRcXHRpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcblxcdH0pO1xcblxcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcXG5cXHRcXHRjb2xvcixcXG5cXHRcXHRhbWJpZW50Q29sb3I6IHNreWJveCxcXG5cXHR9KTtcXG5cXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuXFx0XFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcblxcdFxcdG1hdGVyaWFsLFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdFxcdGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuXFx0XFx0XFx0ZGVwdGg6IDEsXFxuXFx0XFx0fSksXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xcblxcdFxcdFxcdGNhbWVyYTogY29udGV4dC5jYW1lcmEsXFxuXFx0XFx0XFx0dGV4dHVyZToge1xcblxcdFxcdFxcdFxcdGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuXFx0XFx0XFx0XFx0aW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG5cXHRcXHRcXHRcXHRpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcblxcdFxcdFxcdFxcdGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuXFx0XFx0XFx0XFx0aW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG5cXHRcXHRcXHRcXHRpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcblxcdFxcdFxcdH0sXFxuXFx0XFx0fSksXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRcXHRjaGlsZHJlbjogW21lc2hdLFxcblxcdFxcdH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcXG5cXHRcXHRcXHRtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCAtdGltZSAqIDIwLCAwKTtcXG5cXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnRleHQucGxheSgpO1xcblxcdHJldHVybiB7XFxuXFx0XFx0c3BlY3VsYXJFeHBvbmVudCh2YWx1ZTogbnVtYmVyKSB7XFxuXFx0XFx0XFx0bWF0ZXJpYWwuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlO1xcblxcdFxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHRcXHR9LFxcblxcdFxcdHNwZWN1bGFySW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcXG5cXHRcXHRcXHRtYXRlcmlhbC5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlO1xcblxcdFxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHRcXHR9LFxcblxcdH07XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0Y29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbCk7XFxuXFx0Y29uc3Qgc3J2ID0gcmVmLmN1cnJlbnQ7XFxuXFx0Y29uc3QgW3NwZWN1bGFyRXhwb25lbnQsIHNldFNwZWN1bGFyRXhwb25lbnRdID0gdXNlRmxvYXQoXFxuXFx0XFx0Mi4yLFxcblxcdFxcdHNydj8uc3BlY3VsYXJFeHBvbmVudCxcXG5cXHQpO1xcblxcdGNvbnN0IFtzcGVjdWxhckludGVuc2l0eSwgc2V0U3BlY3VsYXJJbnRlbnNpdHldID0gdXNlRmxvYXQoXFxuXFx0XFx0MixcXG5cXHRcXHRzcnY/LnNwZWN1bGFySW50ZW5zaXR5LFxcblxcdCk7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8ZGl2PlxcblxcdFxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0XFx0b25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcblxcdFxcdFxcdFxcdFxcdHJlZi5jdXJyZW50ID0gaW5pdChzY2VuZSwgYXNzZXRzKTtcXG5cXHRcXHRcXHRcXHR9fVxcblxcdFxcdFxcdFxcdGFzc2V0cz17e1xcblxcdFxcdFxcdFxcdFxcdGdsYjoge1xcblxcdFxcdFxcdFxcdFxcdFxcdHN1emFuZTogU3V6YW5lVVJMLFxcblxcdFxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0XFx0aW1hZ2U6IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRwb3NYOiBQb3NYLFxcblxcdFxcdFxcdFxcdFxcdFxcdHBvc1k6IFBvc1ksXFxuXFx0XFx0XFx0XFx0XFx0XFx0cG9zWjogUG9zWixcXG5cXHRcXHRcXHRcXHRcXHRcXHRuZWdYOiBOZWdYLFxcblxcdFxcdFxcdFxcdFxcdFxcdG5lZ1k6IE5lZ1ksXFxuXFx0XFx0XFx0XFx0XFx0XFx0bmVnWjogTmVnWixcXG5cXHRcXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0XFx0Z2l6bW9cXG5cXHRcXHRcXHRcXHRjb250cm9sbGVyPXt7XFxuXFx0XFx0XFx0XFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdDxWaWV3UGFuZWxcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5PVxcXCJmbGV4XFxcIlxcblxcdFxcdFxcdFxcdFxcdGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0YWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIlxcblxcdFxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHRcXHQ8Vmlld0lucHV0TnVtYmVyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bGFiZWw9XFxcInNwZWN1bGFyRXhwb25lbnRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFsdWU9e3NwZWN1bGFyRXhwb25lbnR9XFxuXFx0XFx0XFx0XFx0XFx0XFx0b25DaGFuZ2U9e3NldFNwZWN1bGFyRXhwb25lbnR9XFxuXFx0XFx0XFx0XFx0XFx0Lz5cXG5cXHRcXHRcXHRcXHRcXHQ8Vmlld0lucHV0TnVtYmVyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bGFiZWw9XFxcInNwZWN1bGFySW50ZW5zaXR5XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdHZhbHVlPXtzcGVjdWxhckludGVuc2l0eX1cXG5cXHRcXHRcXHRcXHRcXHRcXHRvbkNoYW5nZT17c2V0U3BlY3VsYXJJbnRlbnNpdHl9XFxuXFx0XFx0XFx0XFx0XFx0Lz5cXG5cXHRcXHRcXHRcXHQ8L1ZpZXdQYW5lbD5cXG5cXHRcXHRcXHRcXHQ8Vmlld1BhbmVsXFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheT1cXFwiZmxleFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIlxcblxcdFxcdFxcdFxcdFxcdGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCJcXG5cXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0PFZpZXdCdXR0b25cXG5cXHRcXHRcXHRcXHRcXHRcXHR2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0b25DbGljaz17KCkgPT4ge1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHNldFNwZWN1bGFyRXhwb25lbnQoMSk7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMSk7XFxuXFx0XFx0XFx0XFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0QnJ1c2hlZCBNZXRhbFxcblxcdFxcdFxcdFxcdFxcdDwvVmlld0J1dHRvbj5cXG5cXHRcXHRcXHRcXHRcXHQ8Vmlld0J1dHRvblxcblxcdFxcdFxcdFxcdFxcdFxcdHZhcmlhbnQ9XFxcInRleHRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I9XFxcInByaW1hcnktNVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRvbkNsaWNrPXsoKSA9PiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0c2V0U3BlY3VsYXJFeHBvbmVudCgwLjI1KTtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRzZXRTcGVjdWxhckludGVuc2l0eSgxLjUpO1xcblxcdFxcdFxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdFxcdFNvZnQgTGlnaHRcXG5cXHRcXHRcXHRcXHRcXHQ8L1ZpZXdCdXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0PFZpZXdCdXR0b25cXG5cXHRcXHRcXHRcXHRcXHRcXHR2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0b25DbGljaz17KCkgPT4ge1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHNldFNwZWN1bGFyRXhwb25lbnQoMi4yKTtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRzZXRTcGVjdWxhckludGVuc2l0eSgyKTtcXG5cXHRcXHRcXHRcXHRcXHRcXHR9fVxcblxcdFxcdFxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHRcXHRcXHRDYXIgUGFpbnRcXG5cXHRcXHRcXHRcXHRcXHQ8L1ZpZXdCdXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0PFZpZXdCdXR0b25cXG5cXHRcXHRcXHRcXHRcXHRcXHR2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0b25DbGljaz17KCkgPT4ge1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHNldFNwZWN1bGFyRXhwb25lbnQoMCk7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMSk7XFxuXFx0XFx0XFx0XFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0UGxhc3RpY1xcblxcdFxcdFxcdFxcdFxcdDwvVmlld0J1dHRvbj5cXG5cXHRcXHRcXHRcXHQ8L1ZpZXdQYW5lbD5cXG5cXHRcXHRcXHQ8L1ZpZXc+XFxuXFx0XFx0PC9kaXY+XFxuXFx0KTtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZsb2F0KFxuXHRpbml0aWFsVmFsdWU6IG51bWJlcixcblx0b25DaGFuZ2U/OiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCxcbik6IFt2YWx1ZTogbnVtYmVyLCBzZXRWYWx1ZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWRdIHtcblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4gb25DaGFuZ2U/Lih2YWx1ZSksIFt2YWx1ZV0pO1xuXHRyZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV07XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTdGF0ZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJUZ2RUZXh0dXJlQ3ViZSIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZFBhaW50ZXJTa3lib3giLCJUZ2RNYXRlcmlhbEdsb2JhbCIsIlRnZENvbG9yIiwiVmlldyIsIlJlYWN0IiwidXNlRmxvYXQiLCJWaWV3QnV0dG9uIiwiVmlld0lucHV0TnVtYmVyIiwiVmlld1BhbmVsIiwiU3V6YW5lVVJMIiwiUG9zWCIsIlBvc1kiLCJQb3NaIiwiTmVnWCIsIk5lZ1kiLCJOZWdaIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjb2xvciIsIk1hdGgiLCJza3lib3giLCJtYXRlcmlhbCIsIm1lc2giLCJ0aW1lIiwic3BlY3VsYXJFeHBvbmVudCIsInZhbHVlIiwic3BlY3VsYXJJbnRlbnNpdHkiLCJEZW1vIiwicmVmIiwic3J2IiwiX3VzZUZsb2F0Iiwic2V0U3BlY3VsYXJFeHBvbmVudCIsIl91c2VGbG9hdDEiLCJzZXRTcGVjdWxhckludGVuc2l0eSIsIm9uUmVhZHkiLCJzY2VuZSIsIm9uQ2xpY2siLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwiaW5pdGlhbFZhbHVlIiwib25DaGFuZ2UiLCJzZXRWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXdCO0FBQ2tDO0FBQ2hDO0FBQ3FCO0FBQ3dCO0FBRXJCO0FBQ1M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRTNELFNBQVNzQixLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQ2hELDRCQUE0QjtJQUM1QixJQUFNQyxRQUFzQmpCLGdEQUFnQixDQUMzQ2tCLEtBQUssTUFBTSxJQUNYLEdBQ0EsS0FDQyxhQUFhO0lBQ2YsSUFBTUMsU0FBUyxJQUFJdkIsOENBQWNBLENBQUNtQixTQUFTO1FBQzFDLFdBQVdDLE9BQU8sS0FBSyxDQUFDLElBQUk7UUFDNUIsV0FBV0EsT0FBTyxLQUFLLENBQUMsSUFBSTtRQUM1QixXQUFXQSxPQUFPLEtBQUssQ0FBQyxJQUFJO1FBQzVCLFdB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