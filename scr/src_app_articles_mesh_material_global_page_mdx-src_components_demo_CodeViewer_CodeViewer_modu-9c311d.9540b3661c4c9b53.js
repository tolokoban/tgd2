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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 129,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "specularIntensity",
                            value: specularIntensity,
                            onChange: setSpecularIntensity
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 134,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                            lineNumber: 175,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
                    lineNumber: 140,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
            lineNumber: 102,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/_material/_material.demo.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9nbG9iYWxfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdS05YzMxMWQuOTU0MGIzNjYxYzRjOWI1My5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsb2JhbC9fbWF0ZXJpYWwvX21hdGVyaWFsLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsb2JhbC9fbWF0ZXJpYWwvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3V0aWxzL2hvb2tzL2Zsb2F0LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsb2JhbC9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHR0eXBlIEFycmF5TnVtYmVyNCxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJNZXNoR2x0Zixcblx0VGdkUGFpbnRlclN0YXRlLFxuXHR0Z2RDYWxjUmFuZG9tMyxcblx0d2ViZ2xQcmVzZXREZXB0aCxcblx0VGdkVGV4dHVyZUN1YmUsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlclNreWJveCxcblx0VGdkTWF0ZXJpYWxHbG9iYWwsXG5cdFRnZENvbG9yLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFwiQC91dGlscy9ob29rcy9mbG9hdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiwgVmlld0lucHV0TnVtYmVyLCBWaWV3UGFuZWwgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuXG5pbXBvcnQgU3V6YW5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCI7XG5pbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXCI7XG5pbXBvcnQgUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWS53ZWJwXCI7XG5pbXBvcnQgUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXCI7XG5pbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXCI7XG5pbXBvcnQgTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWS53ZWJwXCI7XG5pbXBvcnQgTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuXHRjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gVGdkQ29sb3IuZnJvbUhTTChcblx0XHRNYXRoLnJhbmRvbSgpLFxuXHRcdDEsXG5cdFx0MC44LFxuXHQpLnRvQXJheU51bWJlcjQoKTtcblx0Y29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcblx0XHRpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxuXHRcdGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXG5cdFx0aW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcblx0XHRpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxuXHRcdGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXG5cdFx0aW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcblx0fSk7XG5cdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcblx0XHRjb2xvcixcblx0XHRhbWJpZW50Q29sb3I6IHNreWJveCxcblx0fSk7XG5cdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcblx0XHRhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXG5cdFx0bWF0ZXJpYWwsXG5cdH0pO1xuXHQvLyAjZW5kXG5cdGNvbnRleHQuYWRkKFxuXHRcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdFx0Y29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcblx0XHRcdGRlcHRoOiAxLFxuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcblx0XHRcdGNhbWVyYTogY29udGV4dC5jYW1lcmEsXG5cdFx0XHR0ZXh0dXJlOiB7XG5cdFx0XHRcdGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXG5cdFx0XHRcdGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXG5cdFx0XHRcdGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXG5cdFx0XHRcdGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXG5cdFx0XHRcdGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXG5cdFx0XHRcdGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXG5cdFx0XHR9LFxuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRcdGNoaWxkcmVuOiBbbWVzaF0sXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xuXHRcdFx0bWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgLXRpbWUgKiAyMCwgMCk7XG5cdFx0fSksXG5cdCk7XG5cdGNvbnRleHQucGxheSgpO1xuXHRyZXR1cm4ge1xuXHRcdHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xuXHRcdFx0bWF0ZXJpYWwuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlO1xuXHRcdFx0Y29udGV4dC5wYWludCgpO1xuXHRcdH0sXG5cdFx0c3BlY3VsYXJJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuXHRcdFx0bWF0ZXJpYWwuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZTtcblx0XHRcdGNvbnRleHQucGFpbnQoKTtcblx0XHR9LFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKTtcblx0Y29uc3Qgc3J2ID0gcmVmLmN1cnJlbnQ7XG5cdGNvbnN0IFtzcGVjdWxhckV4cG9uZW50LCBzZXRTcGVjdWxhckV4cG9uZW50XSA9IHVzZUZsb2F0KFxuXHRcdDIuMixcblx0XHRzcnY/LnNwZWN1bGFyRXhwb25lbnQsXG5cdCk7XG5cdGNvbnN0IFtzcGVjdWxhckludGVuc2l0eSwgc2V0U3BlY3VsYXJJbnRlbnNpdHldID0gdXNlRmxvYXQoXG5cdFx0Mixcblx0XHRzcnY/LnNwZWN1bGFySW50ZW5zaXR5LFxuXHQpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8Vmlld1xuXHRcdFx0XHRvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XG5cdFx0XHRcdFx0cmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpO1xuXHRcdFx0XHR9fVxuXHRcdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0XHRnbGI6IHtcblx0XHRcdFx0XHRcdHN1emFuZTogU3V6YW5lVVJMLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0XHRcdHBvc1g6IFBvc1gsXG5cdFx0XHRcdFx0XHRwb3NZOiBQb3NZLFxuXHRcdFx0XHRcdFx0cG9zWjogUG9zWixcblx0XHRcdFx0XHRcdG5lZ1g6IE5lZ1gsXG5cdFx0XHRcdFx0XHRuZWdZOiBOZWdZLFxuXHRcdFx0XHRcdFx0bmVnWjogTmVnWixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRnaXptb1xuXHRcdFx0XHRjb250cm9sbGVyPXt7XG5cdFx0XHRcdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8Vmlld1BhbmVsXG5cdFx0XHRcdFx0ZGlzcGxheT1cImZsZXhcIlxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxWaWV3SW5wdXROdW1iZXJcblx0XHRcdFx0XHRcdGxhYmVsPVwic3BlY3VsYXJFeHBvbmVudFwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17c3BlY3VsYXJFeHBvbmVudH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXRTcGVjdWxhckV4cG9uZW50fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFZpZXdJbnB1dE51bWJlclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJzcGVjdWxhckludGVuc2l0eVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17c3BlY3VsYXJJbnRlbnNpdHl9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17c2V0U3BlY3VsYXJJbnRlbnNpdHl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9WaWV3UGFuZWw+XG5cdFx0XHRcdDxWaWV3UGFuZWxcblx0XHRcdFx0XHRkaXNwbGF5PVwiZmxleFwiXG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIlxuXHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b25cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNvbG9yPVwicHJpbWFyeS01XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0U3BlY3VsYXJFeHBvbmVudCgxKTtcblx0XHRcdFx0XHRcdFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdEJydXNoZWQgTWV0YWxcblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b25cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNvbG9yPVwicHJpbWFyeS01XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0U3BlY3VsYXJFeHBvbmVudCgwLjI1KTtcblx0XHRcdFx0XHRcdFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMS41KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0U29mdCBMaWdodFxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvblxuXHRcdFx0XHRcdFx0dmFyaWFudD1cInRleHRcIlxuXHRcdFx0XHRcdFx0Y29sb3I9XCJwcmltYXJ5LTVcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRTcGVjdWxhckV4cG9uZW50KDIuMik7XG5cdFx0XHRcdFx0XHRcdHNldFNwZWN1bGFySW50ZW5zaXR5KDIpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRDYXIgUGFpbnRcblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b25cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNvbG9yPVwicHJpbWFyeS01XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0U3BlY3VsYXJFeHBvbmVudCgwKTtcblx0XHRcdFx0XHRcdFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFBsYXN0aWNcblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvVmlld1BhbmVsPlxuXHRcdFx0PC9WaWV3PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL19tYXRlcmlhbC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcIlxcdGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBUZ2RDb2xvci5mcm9tSFNMKFxcblxcdFxcdE1hdGgucmFuZG9tKCksXFxuXFx0XFx0MSxcXG5cXHRcXHQwLjgsXFxuXFx0KS50b0FyYXlOdW1iZXI0KCk7XFxuXFx0Y29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG5cXHRcXHRpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcblxcdFxcdGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuXFx0XFx0aW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG5cXHRcXHRpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcblxcdFxcdGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuXFx0XFx0aW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG5cXHR9KTtcXG5cXHRjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XFxuXFx0XFx0Y29sb3IsXFxuXFx0XFx0YW1iaWVudENvbG9yOiBza3lib3gsXFxuXFx0fSk7XFxuXFx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG5cXHRcXHRtYXRlcmlhbCxcXG5cXHR9KTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dHlwZSBBcnJheU51bWJlcjQsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyTWVzaEdsdGYsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdHRnZENhbGNSYW5kb20zLFxcblxcdHdlYmdsUHJlc2V0RGVwdGgsXFxuXFx0VGdkVGV4dHVyZUN1YmUsXFxuXFx0VGdkUGFpbnRlckxvZ2ljLFxcblxcdFRnZFBhaW50ZXJTa3lib3gsXFxuXFx0VGdkTWF0ZXJpYWxHbG9iYWwsXFxuXFx0VGdkQ29sb3IsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcbmltcG9ydCBSZWFjdCBmcm9tIFxcXCJyZWFjdFxcXCI7XFxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFxcXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XFxcIjtcXG5pbXBvcnQgeyBWaWV3QnV0dG9uLCBWaWV3SW5wdXROdW1iZXIsIFZpZXdQYW5lbCB9IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiO1xcblxcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlxcXCI7XFxuaW1wb3J0IFBvc1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXFxcIjtcXG5pbXBvcnQgUG9zWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcXFwiO1xcbmltcG9ydCBQb3NaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1oud2VicFxcXCI7XFxuaW1wb3J0IE5lZ1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXFxcIjtcXG5pbXBvcnQgTmVnWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcXFwiO1xcbmltcG9ydCBOZWdaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1oud2VicFxcXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBUZ2RDb2xvci5mcm9tSFNMKFxcblxcdFxcdE1hdGgucmFuZG9tKCksXFxuXFx0XFx0MSxcXG5cXHRcXHQwLjgsXFxuXFx0KS50b0FyYXlOdW1iZXI0KCk7XFxuXFx0Y29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG5cXHRcXHRpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcblxcdFxcdGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuXFx0XFx0aW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG5cXHRcXHRpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcblxcdFxcdGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuXFx0XFx0aW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG5cXHR9KTtcXG5cXHRjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XFxuXFx0XFx0Y29sb3IsXFxuXFx0XFx0YW1iaWVudENvbG9yOiBza3lib3gsXFxuXFx0fSk7XFxuXFx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG5cXHRcXHRtYXRlcmlhbCxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcblxcdFxcdFxcdGRlcHRoOiAxLFxcblxcdFxcdH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcXG5cXHRcXHRcXHRjYW1lcmE6IGNvbnRleHQuY2FtZXJhLFxcblxcdFxcdFxcdHRleHR1cmU6IHtcXG5cXHRcXHRcXHRcXHRpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcblxcdFxcdFxcdFxcdGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuXFx0XFx0XFx0XFx0aW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG5cXHRcXHRcXHRcXHRpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcblxcdFxcdFxcdFxcdGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuXFx0XFx0XFx0XFx0aW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG5cXHRcXHRcXHR9LFxcblxcdFxcdH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFttZXNoXSxcXG5cXHRcXHR9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuXFx0XFx0XFx0bWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgLXRpbWUgKiAyMCwgMCk7XFxuXFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjb250ZXh0LnBsYXkoKTtcXG5cXHRyZXR1cm4ge1xcblxcdFxcdHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xcblxcdFxcdFxcdG1hdGVyaWFsLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZTtcXG5cXHRcXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0XFx0fSxcXG5cXHRcXHRzcGVjdWxhckludGVuc2l0eSh2YWx1ZTogbnVtYmVyKSB7XFxuXFx0XFx0XFx0bWF0ZXJpYWwuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZTtcXG5cXHRcXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0XFx0fSxcXG5cXHR9O1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpO1xcblxcdGNvbnN0IHNydiA9IHJlZi5jdXJyZW50O1xcblxcdGNvbnN0IFtzcGVjdWxhckV4cG9uZW50LCBzZXRTcGVjdWxhckV4cG9uZW50XSA9IHVzZUZsb2F0KFxcblxcdFxcdDIuMixcXG5cXHRcXHRzcnY/LnNwZWN1bGFyRXhwb25lbnQsXFxuXFx0KTtcXG5cXHRjb25zdCBbc3BlY3VsYXJJbnRlbnNpdHksIHNldFNwZWN1bGFySW50ZW5zaXR5XSA9IHVzZUZsb2F0KFxcblxcdFxcdDIsXFxuXFx0XFx0c3J2Py5zcGVjdWxhckludGVuc2l0eSxcXG5cXHQpO1xcblxcdHJldHVybiAoXFxuXFx0XFx0PGRpdj5cXG5cXHRcXHRcXHQ8Vmlld1xcblxcdFxcdFxcdFxcdG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG5cXHRcXHRcXHRcXHRcXHRyZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cyk7XFxuXFx0XFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRcXHRnbGI6IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRzdXphbmU6IFN1emFuZVVSTCxcXG5cXHRcXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdFxcdGltYWdlOiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0cG9zWDogUG9zWCxcXG5cXHRcXHRcXHRcXHRcXHRcXHRwb3NZOiBQb3NZLFxcblxcdFxcdFxcdFxcdFxcdFxcdHBvc1o6IFBvc1osXFxuXFx0XFx0XFx0XFx0XFx0XFx0bmVnWDogTmVnWCxcXG5cXHRcXHRcXHRcXHRcXHRcXHRuZWdZOiBOZWdZLFxcblxcdFxcdFxcdFxcdFxcdFxcdG5lZ1o6IE5lZ1osXFxuXFx0XFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR9fVxcblxcdFxcdFxcdFxcdGdpem1vXFxuXFx0XFx0XFx0XFx0Y29udHJvbGxlcj17e1xcblxcdFxcdFxcdFxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRcXHRcXHR9fVxcblxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHQ8Vmlld1BhbmVsXFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheT1cXFwiZmxleFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIlxcblxcdFxcdFxcdFxcdFxcdGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCJcXG5cXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0PFZpZXdJbnB1dE51bWJlclxcblxcdFxcdFxcdFxcdFxcdFxcdGxhYmVsPVxcXCJzcGVjdWxhckV4cG9uZW50XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdHZhbHVlPXtzcGVjdWxhckV4cG9uZW50fVxcblxcdFxcdFxcdFxcdFxcdFxcdG9uQ2hhbmdlPXtzZXRTcGVjdWxhckV4cG9uZW50fVxcblxcdFxcdFxcdFxcdFxcdC8+XFxuXFx0XFx0XFx0XFx0XFx0PFZpZXdJbnB1dE51bWJlclxcblxcdFxcdFxcdFxcdFxcdFxcdGxhYmVsPVxcXCJzcGVjdWxhckludGVuc2l0eVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHR2YWx1ZT17c3BlY3VsYXJJbnRlbnNpdHl9XFxuXFx0XFx0XFx0XFx0XFx0XFx0b25DaGFuZ2U9e3NldFNwZWN1bGFySW50ZW5zaXR5fVxcblxcdFxcdFxcdFxcdFxcdC8+XFxuXFx0XFx0XFx0XFx0PC9WaWV3UGFuZWw+XFxuXFx0XFx0XFx0XFx0PFZpZXdQYW5lbFxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk9XFxcImZsZXhcXFwiXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiXFxuXFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdDxWaWV3QnV0dG9uXFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFyaWFudD1cXFwidGV4dFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdG9uQ2xpY2s9eygpID0+IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRzZXRTcGVjdWxhckV4cG9uZW50KDEpO1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHNldFNwZWN1bGFySW50ZW5zaXR5KDEpO1xcblxcdFxcdFxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdFxcdEJydXNoZWQgTWV0YWxcXG5cXHRcXHRcXHRcXHRcXHQ8L1ZpZXdCdXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0PFZpZXdCdXR0b25cXG5cXHRcXHRcXHRcXHRcXHRcXHR2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0b25DbGljaz17KCkgPT4ge1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHNldFNwZWN1bGFyRXhwb25lbnQoMC4yNSk7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMS41KTtcXG5cXHRcXHRcXHRcXHRcXHRcXHR9fVxcblxcdFxcdFxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHRcXHRcXHRTb2Z0IExpZ2h0XFxuXFx0XFx0XFx0XFx0XFx0PC9WaWV3QnV0dG9uPlxcblxcdFxcdFxcdFxcdFxcdDxWaWV3QnV0dG9uXFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFyaWFudD1cXFwidGV4dFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdG9uQ2xpY2s9eygpID0+IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRzZXRTcGVjdWxhckV4cG9uZW50KDIuMik7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMik7XFxuXFx0XFx0XFx0XFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0Q2FyIFBhaW50XFxuXFx0XFx0XFx0XFx0XFx0PC9WaWV3QnV0dG9uPlxcblxcdFxcdFxcdFxcdFxcdDxWaWV3QnV0dG9uXFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFyaWFudD1cXFwidGV4dFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdG9uQ2xpY2s9eygpID0+IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRzZXRTcGVjdWxhckV4cG9uZW50KDApO1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHNldFNwZWN1bGFySW50ZW5zaXR5KDEpO1xcblxcdFxcdFxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdFxcdFBsYXN0aWNcXG5cXHRcXHRcXHRcXHRcXHQ8L1ZpZXdCdXR0b24+XFxuXFx0XFx0XFx0XFx0PC9WaWV3UGFuZWw+XFxuXFx0XFx0XFx0PC9WaWV3PlxcblxcdFxcdDwvZGl2PlxcblxcdCk7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGbG9hdChcblx0aW5pdGlhbFZhbHVlOiBudW1iZXIsXG5cdG9uQ2hhbmdlPzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQsXG4pOiBbdmFsdWU6IG51bWJlciwgc2V0VmFsdWU6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkXSB7XG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IG9uQ2hhbmdlPy4odmFsdWUpLCBbdmFsdWVdKTtcblx0cmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU3RhdGUiLCJ3ZWJnbFByZXNldERlcHRoIiwiVGdkVGV4dHVyZUN1YmUiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyU2t5Ym94IiwiVGdkTWF0ZXJpYWxHbG9iYWwiLCJUZ2RDb2xvciIsIlZpZXciLCJSZWFjdCIsInVzZUZsb2F0IiwiVmlld0J1dHRvbiIsIlZpZXdJbnB1dE51bWJlciIsIlZpZXdQYW5lbCIsIlN1emFuZVVSTCIsIlBvc1giLCJQb3NZIiwiUG9zWiIsIk5lZ1giLCJOZWdZIiwiTmVnWiIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY29sb3IiLCJNYXRoIiwic2t5Ym94IiwibWF0ZXJpYWwiLCJtZXNoIiwidGltZSIsInNwZWN1bGFyRXhwb25lbnQiLCJ2YWx1ZSIsInNwZWN1bGFySW50ZW5zaXR5IiwiRGVtbyIsInJlZiIsInNydiIsIl91c2VGbG9hdCIsInNldFNwZWN1bGFyRXhwb25lbnQiLCJfdXNlRmxvYXQxIiwic2V0U3BlY3VsYXJJbnRlbnNpdHkiLCJvblJlYWR5Iiwic2NlbmUiLCJvbkNsaWNrIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsImluaXRpYWxWYWx1ZSIsIm9uQ2hhbmdlIiwic2V0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF3QjtBQUNrQztBQUNoQztBQUNxQjtBQUN3QjtBQUVyQjtBQUNTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUUzRCxTQUFTc0IsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUNoRCw0QkFBNEI7SUFDNUIsSUFBTUMsUUFBc0JqQixnREFBZ0IsQ0FDM0NrQixLQUFLLE1BQU0sSUFDWCxHQUNBLEtBQ0MsYUFBYTtJQUNmLElBQU1DLFNBQVMsSUFBSXZCLDhDQUFjQSxDQUFDbUIsU0FBUztRQUMxQyxXQUFXQyxPQUFPLEtBQUssQ0FBQyxJQUFJO1FBQzVCLFdBQVdBLE9BQU8sS0FBSyxDQUFDLElBQUk7UUFDNUIsV0FBV0EsT0FBTyxLQUFLLENBQUMsSUFBSTtRQUM1QixXQUFXQSxP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