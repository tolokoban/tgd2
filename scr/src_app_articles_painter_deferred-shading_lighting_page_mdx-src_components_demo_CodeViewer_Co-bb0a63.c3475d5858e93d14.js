"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_deferred-shading_lighting_page_mdx-src_components_demo_CodeViewer_Co-bb0a63"], {
74167(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/helmet.d635f1c712b5efea.glb";

},
39232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _lighting_demo__rspack_import_4 = __webpack_require__(53511);
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
    "Initializing WebGL": "    // Metallic grows from left to right, and roughness from top to bottom.\n    const box: TgdMeshWithTextures = {\n        geometry: new TgdGeometryBox(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [1, 0.7, 0.2, 1] }),\n        textures: {\n            metallic: new TgdTexture2D(context, {\n                load: tgdCanvasCreateGradientHorizontal(64, [\"#000\", \"#fff\"]),\n            }),\n            roughness: new TgdTexture2D(context, {\n                load: tgdCanvasCreateCreateGradientvertical(64, [\"#000\", \"#fff\"]),\n            }),\n        },\n    }\n    // glTF stores metallic in BLUE and roughness in GREEN.\n    const { helmet: asset } = assets.glb\n    const gltfMaterial = asset.getMaterial(0)\n    const indexBaseColor = gltfMaterial.pbrMetallicRoughness?.baseColorTexture?.index ?? 0\n    const indexMetallicRoughness = gltfMaterial.pbrMetallicRoughness?.metallicRoughnessTexture?.index ?? 0\n    const indexOcclusion = gltfMaterial.occlusionTexture?.index ?? 0\n    const indexNormals = gltfMaterial.normalTexture?.index ?? 0\n    const textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness)\n    const helmet: TgdMeshWithTextures = {\n        geometry: asset.makeGeometry(),\n        transfo: asset.createTransfoFromNode(asset.getNode(0)),\n        visible: true,\n        material: new TgdMaterialFlatTexture({\n            texture: asset.createTexture2D(context, indexBaseColor),\n        }),\n        textures: {\n            normals: asset.createTexture2D(context, indexNormals),\n            metallic: textureMetallicRoughness,\n            metallicChannel: \"b\",\n            roughness: textureMetallicRoughness,\n            roughnessChannel: \"g\",\n            bakedAO: asset.createTexture2D(context, indexOcclusion),\n            bakedAOChannel: \"r\",\n        },\n    }\n    const deferred = new TgdPainterDeferredShadingTextures(context, { meshes: [box, helmet] })\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const light = new TgdLight({ color: [1, 0.9, 0.8, 1], direction: [-1, -1, -1] })\n    const filters: Record<Mode, TgdFilterDeferredShading> = {\n        skybox: new TgdFilterDeferredShading(context, {\n            deferredShading: deferred,\n            skyboxTexture: skybox,\n            light,\n        }),\n        // A 1×1 cube texture is created from this color.\n        color: new TgdFilterDeferredShading(context, {\n            deferredShading: deferred,\n            skyboxTexture: \"#7af\",\n            light,\n        }),\n    }\n    const painters: Record<Mode, TgdPainterFilter> = {\n        skybox: makePainterFilter(context, deferred, filters.skybox),\n        color: makePainterFilter(context, deferred, filters.color),\n    }\n    refScene.current = { filters, painters }\n    applyMode(painters, \"skybox\")\n    context.add(\n        deferred,\n        new TgdPainterSkybox(context, { texture: skybox }),\n        // Nothing is painted (alpha = 0) where there is no mesh.\n        new TgdPainterState(context, {\n            depth: \"off\",\n            cull: \"off\",\n            blend: \"alpha\",\n            children: [painters.skybox, painters.color],\n        }),\n        (_time, delta) => {\n            box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94)\n        },\n    )\n    context.camera.fitSpaceAtTarget(4, 4)\n    context.play()",
    "makePainterFilter()": "/**\n * The albedo is the input texture of the filter.\n */\nfunction makePainterFilter(\n    context: TgdContext,\n    deferred: TgdPainterDeferredShadingTextures,\n    filter: TgdFilterDeferredShading,\n) {\n    return new TgdPainterFilter(context, {\n        texture: deferred.textureAlbedo,\n        filters: [filter],\n        flipY: true,\n    })\n}",
    "applyMode()": "function applyMode(painters: Record<Mode, TgdPainterFilter>, mode: Mode) {\n    for (const key of Object.keys(painters) as Mode[]) {\n        painters[key].active = key === mode\n    }\n}",
    "applyStrength()": "function applyStrength(filters: Record<Mode, TgdFilterDeferredShading>, strength: number) {\n    for (const filter of Object.values(filters)) {\n        filter.skyboxStrength = strength\n    }\n}"
};
var FULL = "import {\n    type TgdContext,\n    TgdFilterDeferredShading,\n    TgdGeometryBox,\n    TgdLight,\n    TgdMaterialFlat,\n    TgdMaterialFlatTexture,\n    type TgdMeshWithTextures,\n    TgdPainterDeferredShadingTextures,\n    TgdPainterFilter,\n    TgdPainterSkybox,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdTextureCube,\n    TgdTransfo,\n    tgdCanvasCreateCreateGradientvertical,\n    tgdCanvasCreateGradientHorizontal,\n} from \"@tolokoban/tgd\"\nimport { ViewInputNumber, ViewOptions, ViewPanel } from \"@tolokoban/ui\"\nimport React from \"react\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport HelmetURL from \"@/assets/mesh/helmet.glb\"\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\"\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\"\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\"\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\"\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\"\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\"\n\ntype Mode = \"skybox\" | \"color\"\n\ninterface Scene {\n    filters: Record<Mode, TgdFilterDeferredShading>\n    painters: Record<Mode, TgdPainterFilter>\n}\n\nfunction init(context: TgdContext, assets: Assets, refScene: { current: Scene | null }) {\n    // Metallic grows from left to right, and roughness from top to bottom.\n    const box: TgdMeshWithTextures = {\n        geometry: new TgdGeometryBox(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [1, 0.7, 0.2, 1] }),\n        textures: {\n            metallic: new TgdTexture2D(context, {\n                load: tgdCanvasCreateGradientHorizontal(64, [\"#000\", \"#fff\"]),\n            }),\n            roughness: new TgdTexture2D(context, {\n                load: tgdCanvasCreateCreateGradientvertical(64, [\"#000\", \"#fff\"]),\n            }),\n        },\n    }\n    // glTF stores metallic in BLUE and roughness in GREEN.\n    const { helmet: asset } = assets.glb\n    const gltfMaterial = asset.getMaterial(0)\n    const indexBaseColor = gltfMaterial.pbrMetallicRoughness?.baseColorTexture?.index ?? 0\n    const indexMetallicRoughness = gltfMaterial.pbrMetallicRoughness?.metallicRoughnessTexture?.index ?? 0\n    const indexOcclusion = gltfMaterial.occlusionTexture?.index ?? 0\n    const indexNormals = gltfMaterial.normalTexture?.index ?? 0\n    const textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness)\n    const helmet: TgdMeshWithTextures = {\n        geometry: asset.makeGeometry(),\n        transfo: asset.createTransfoFromNode(asset.getNode(0)),\n        visible: true,\n        material: new TgdMaterialFlatTexture({\n            texture: asset.createTexture2D(context, indexBaseColor),\n        }),\n        textures: {\n            normals: asset.createTexture2D(context, indexNormals),\n            metallic: textureMetallicRoughness,\n            metallicChannel: \"b\",\n            roughness: textureMetallicRoughness,\n            roughnessChannel: \"g\",\n            bakedAO: asset.createTexture2D(context, indexOcclusion),\n            bakedAOChannel: \"r\",\n        },\n    }\n    const deferred = new TgdPainterDeferredShadingTextures(context, { meshes: [box, helmet] })\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const light = new TgdLight({ color: [1, 0.9, 0.8, 1], direction: [-1, -1, -1] })\n    const filters: Record<Mode, TgdFilterDeferredShading> = {\n        skybox: new TgdFilterDeferredShading(context, {\n            deferredShading: deferred,\n            skyboxTexture: skybox,\n            light,\n        }),\n        // A 1×1 cube texture is created from this color.\n        color: new TgdFilterDeferredShading(context, {\n            deferredShading: deferred,\n            skyboxTexture: \"#7af\",\n            light,\n        }),\n    }\n    const painters: Record<Mode, TgdPainterFilter> = {\n        skybox: makePainterFilter(context, deferred, filters.skybox),\n        color: makePainterFilter(context, deferred, filters.color),\n    }\n    refScene.current = { filters, painters }\n    applyMode(painters, \"skybox\")\n    context.add(\n        deferred,\n        new TgdPainterSkybox(context, { texture: skybox }),\n        // Nothing is painted (alpha = 0) where there is no mesh.\n        new TgdPainterState(context, {\n            depth: \"off\",\n            cull: \"off\",\n            blend: \"alpha\",\n            children: [painters.skybox, painters.color],\n        }),\n        (_time, delta) => {\n            box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94)\n        },\n    )\n    context.camera.fitSpaceAtTarget(4, 4)\n    context.play()\n}\n\nexport default function Demo() {\n    const refContext = React.useRef<TgdContext | null>(null)\n    const refScene = React.useRef<Scene | null>(null)\n    const [mode, setMode] = React.useState<Mode>(\"skybox\")\n    const [strength, setStrength] = React.useState(1)\n    const handleModeChange = (value: Mode) => {\n        setMode(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyMode(scene.painters, value)\n        context.paint()\n    }\n    const handleStrengthChange = (value: number) => {\n        setStrength(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyStrength(scene.filters, value)\n        context.paint()\n    }\n    return (\n        <View\n            onReady={(context: TgdContext, assets: Assets) => {\n                refContext.current = context\n                init(context, assets, refScene)\n            }}\n            assets={{\n                glb: { helmet: HelmetURL },\n                image: {\n                    posX: PosX,\n                    posY: PosY,\n                    posZ: PosZ,\n                    negX: NegX,\n                    negY: NegY,\n                    negZ: NegZ,\n                },\n            }}\n            controller={{ inertiaOrbit: 1000 }}\n            gizmo>\n            <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" flexWrap=\"wrap\" gap=\"S\">\n                <ViewOptions value={mode} onChange={handleModeChange}>\n                    <div key=\"skybox\">skybox texture</div>\n                    <div key=\"color\">skybox color</div>\n                </ViewOptions>\n                <ViewInputNumber label=\"skyboxStrength\" value={strength} onChange={handleStrengthChange} />\n            </ViewPanel>\n        </View>\n    )\n}\n\n/**\n * The albedo is the input texture of the filter.\n */\nfunction makePainterFilter(\n    context: TgdContext,\n    deferred: TgdPainterDeferredShadingTextures,\n    filter: TgdFilterDeferredShading,\n) {\n    return new TgdPainterFilter(context, {\n        texture: deferred.textureAlbedo,\n        filters: [filter],\n        flipY: true,\n    })\n}\n\nfunction applyMode(painters: Record<Mode, TgdPainterFilter>, mode: Mode) {\n    for (const key of Object.keys(painters) as Mode[]) {\n        painters[key].active = key === mode\n    }\n}\n\nfunction applyStrength(filters: Record<Mode, TgdFilterDeferredShading>, strength: number) {\n    for (const filter of Object.values(filters)) {\n        filter.skyboxStrength = strength\n    }\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_lighting_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
53511(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _components_demo_Tgd__rspack_import_4 = __webpack_require__(43475);
/* import */ var _assets_mesh_helmet_glb__rspack_import_5 = __webpack_require__(74167);
/* import */ var _assets_cubemap_sky_contrast_posX_webp__rspack_import_6 = __webpack_require__(10618);
/* import */ var _assets_cubemap_sky_contrast_posY_webp__rspack_import_7 = __webpack_require__(24645);
/* import */ var _assets_cubemap_sky_contrast_posZ_webp__rspack_import_8 = __webpack_require__(85720);
/* import */ var _assets_cubemap_sky_contrast_negX_webp__rspack_import_9 = __webpack_require__(28814);
/* import */ var _assets_cubemap_sky_contrast_negY_webp__rspack_import_10 = __webpack_require__(51561);
/* import */ var _assets_cubemap_sky_contrast_negZ_webp__rspack_import_11 = __webpack_require__(30892);
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












function init(context, assets, refScene) {
    var _ref, _ref1, _ref2, _ref3;
    var _gltfMaterial_pbrMetallicRoughness_baseColorTexture, _gltfMaterial_pbrMetallicRoughness, _gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture, _gltfMaterial_pbrMetallicRoughness1, _gltfMaterial_occlusionTexture, _gltfMaterial_normalTexture;
    // #begin Initializing WebGL
    // Metallic grows from left to right, and roughness from top to bottom.
    var box = {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox(),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: [
                0,
                0,
                0
            ],
            distance: 2
        }),
        visible: true,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: [
                1,
                0.7,
                0.2,
                1
            ]
        }),
        textures: {
            metallic: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
                load: (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateGradientHorizontal)(64, [
                    "#000",
                    "#fff"
                ])
            }),
            roughness: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
                load: (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateCreateGradientvertical)(64, [
                    "#000",
                    "#fff"
                ])
            })
        }
    };
    // glTF stores metallic in BLUE and roughness in GREEN.
    var _assets_glb = assets.glb, asset = _assets_glb.helmet;
    var gltfMaterial = asset.getMaterial(0);
    var indexBaseColor = (_ref = (_gltfMaterial_pbrMetallicRoughness = gltfMaterial.pbrMetallicRoughness) === null || _gltfMaterial_pbrMetallicRoughness === void 0 ? void 0 : (_gltfMaterial_pbrMetallicRoughness_baseColorTexture = _gltfMaterial_pbrMetallicRoughness.baseColorTexture) === null || _gltfMaterial_pbrMetallicRoughness_baseColorTexture === void 0 ? void 0 : _gltfMaterial_pbrMetallicRoughness_baseColorTexture.index) !== null && _ref !== void 0 ? _ref : 0;
    var indexMetallicRoughness = (_ref1 = (_gltfMaterial_pbrMetallicRoughness1 = gltfMaterial.pbrMetallicRoughness) === null || _gltfMaterial_pbrMetallicRoughness1 === void 0 ? void 0 : (_gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture = _gltfMaterial_pbrMetallicRoughness1.metallicRoughnessTexture) === null || _gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture === void 0 ? void 0 : _gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture.index) !== null && _ref1 !== void 0 ? _ref1 : 0;
    var indexOcclusion = (_ref2 = (_gltfMaterial_occlusionTexture = gltfMaterial.occlusionTexture) === null || _gltfMaterial_occlusionTexture === void 0 ? void 0 : _gltfMaterial_occlusionTexture.index) !== null && _ref2 !== void 0 ? _ref2 : 0;
    var indexNormals = (_ref3 = (_gltfMaterial_normalTexture = gltfMaterial.normalTexture) === null || _gltfMaterial_normalTexture === void 0 ? void 0 : _gltfMaterial_normalTexture.index) !== null && _ref3 !== void 0 ? _ref3 : 0;
    var textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness);
    var helmet = {
        geometry: asset.makeGeometry(),
        transfo: asset.createTransfoFromNode(asset.getNode(0)),
        visible: true,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlatTexture({
            texture: asset.createTexture2D(context, indexBaseColor)
        }),
        textures: {
            normals: asset.createTexture2D(context, indexNormals),
            metallic: textureMetallicRoughness,
            metallicChannel: "b",
            roughness: textureMetallicRoughness,
            roughnessChannel: "g",
            bakedAO: asset.createTexture2D(context, indexOcclusion),
            bakedAOChannel: "r"
        }
    };
    var deferred = new _tolokoban_tgd__rspack_import_1.TgdPainterDeferredShadingTextures(context, {
        meshes: [
            box,
            helmet
        ]
    });
    var skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ
    });
    var light = new _tolokoban_tgd__rspack_import_1.TgdLight({
        color: [
            1,
            0.9,
            0.8,
            1
        ],
        direction: [
            -1,
            -1,
            -1
        ]
    });
    var filters = {
        skybox: new _tolokoban_tgd__rspack_import_1.TgdFilterDeferredShading(context, {
            deferredShading: deferred,
            skyboxTexture: skybox,
            light: light
        }),
        // A 1×1 cube texture is created from this color.
        color: new _tolokoban_tgd__rspack_import_1.TgdFilterDeferredShading(context, {
            deferredShading: deferred,
            skyboxTexture: "#7af",
            light: light
        })
    };
    var painters = {
        skybox: makePainterFilter(context, deferred, filters.skybox),
        color: makePainterFilter(context, deferred, filters.color)
    };
    refScene.current = {
        filters: filters,
        painters: painters
    };
    applyMode(painters, "skybox");
    context.add(deferred, new _tolokoban_tgd__rspack_import_1.TgdPainterSkybox(context, {
        texture: skybox
    }), // Nothing is painted (alpha = 0) where there is no mesh.
    new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "off",
        cull: "off",
        blend: "alpha",
        children: [
            painters.skybox,
            painters.color
        ]
    }), function(_time, delta) {
        box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94);
    });
    context.camera.fitSpaceAtTarget(4, 4);
    context.play();
// #end
}
function Demo() {
    var refContext = react__rspack_import_3_default().useRef(null);
    var refScene = react__rspack_import_3_default().useRef(null);
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState("skybox"), 2), mode = _React_useState[0], setMode = _React_useState[1];
    var _React_useState1 = _sliced_to_array(react__rspack_import_3_default().useState(1), 2), strength = _React_useState1[0], setStrength = _React_useState1[1];
    var handleModeChange = function handleModeChange(value) {
        setMode(value);
        var context = refContext.current;
        var scene = refScene.current;
        if (!context || !scene) return;
        applyMode(scene.painters, value);
        context.paint();
    };
    var handleStrengthChange = function handleStrengthChange(value) {
        setStrength(value);
        var context = refContext.current;
        var scene = refScene.current;
        if (!context || !scene) return;
        applyStrength(scene.filters, value);
        context.paint();
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_4["default"], {
        onReady: function onReady(context, assets) {
            refContext.current = context;
            init(context, assets, refScene);
        },
        assets: {
            glb: {
                helmet: _assets_mesh_helmet_glb__rspack_import_5
            },
            image: {
                posX: _assets_cubemap_sky_contrast_posX_webp__rspack_import_6,
                posY: _assets_cubemap_sky_contrast_posY_webp__rspack_import_7,
                posZ: _assets_cubemap_sky_contrast_posZ_webp__rspack_import_8,
                negX: _assets_cubemap_sky_contrast_negX_webp__rspack_import_9,
                negY: _assets_cubemap_sky_contrast_negY_webp__rspack_import_10,
                negZ: _assets_cubemap_sky_contrast_negZ_webp__rspack_import_11
            }
        },
        controller: {
            inertiaOrbit: 1000
        },
        gizmo: true,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "S",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewOptions, {
                    value: mode,
                    onChange: handleModeChange,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "skybox texture"
                        }, "skybox", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 171,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "skybox color"
                        }, "color", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 172,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                    lineNumber: 170,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                    label: "skyboxStrength",
                    value: strength,
                    onChange: handleStrengthChange
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                    lineNumber: 174,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
            lineNumber: 169,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
        lineNumber: 151,
        columnNumber: 9
    }, this);
}
// #begin makePainterFilter()
/**
 * The albedo is the input texture of the filter.
 */ function makePainterFilter(context, deferred, filter) {
    return new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        texture: deferred.textureAlbedo,
        filters: [
            filter
        ],
        flipY: true
    });
}
// #end
// #begin applyMode()
function applyMode(painters, mode) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.keys(painters)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            painters[key].active = key === mode;
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
}
// #end
// #begin applyStrength()
function applyStrength(filters, strength) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.values(filters)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var filter = _step.value;
            filter.skyboxStrength = strength;
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
} // #end


},
2186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _lighting__rspack_import_1 = __webpack_require__(39232);
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
        hr: "hr",
        li: "li",
        p: "p",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdFilterDeferredShading.html",
                    children: "TgdFilterDeferredShading"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Physically based lighting computed in screen space from the textures of a\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/painter/deferred-shading",
                        children: "TgdPainterDeferredShadingTextures"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 6,
                        columnNumber: 1
                    }, this),
                    ".\nThe main texture of the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterFilter"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 7,
                        columnNumber: 25
                    }, this),
                    " is ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "textureAlbedo"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 7,
                        columnNumber: 47
                    }, this),
                    ", and the filter reads the normals, the depth,\nthe metallic, the roughness, the specular and the baked ambient occlusion from the other textures."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_lighting__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "The light comes from two sources:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "light"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 14,
                                columnNumber: 3
                            }, this),
                            ": a directional ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "TgdLight"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 14,
                                columnNumber: 26
                            }, this),
                            ". Its ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "direction"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 14,
                                columnNumber: 42
                            }, this),
                            " is in world space, and the alpha of its ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "color"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 14,
                                columnNumber: 94
                            }, this),
                            " is the intensity."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 14,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "skyboxTexture"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 15,
                                columnNumber: 3
                            }, this),
                            ": a ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "TgdTextureCube"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 15,
                                columnNumber: 22
                            }, this),
                            " used for the reflections on metallic surfaces (blurrier with a higher roughness)\nand for the global illumination. If you give a color instead, a cube texture of 1×1 pixels is created with this color.\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "skyboxTransfo"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 17,
                                columnNumber: 3
                            }, this),
                            " orients the skybox.\nThe light coming from the skybox is ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "skyboxStrength * pow(skyboxTexture.rgb, skyboxExponent)"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 18,
                                columnNumber: 39
                            }, this),
                            "\n(defaults: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "skyboxStrength = 1"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 19,
                                columnNumber: 14
                            }, this),
                            " and ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "skyboxExponent = 2.2"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 19,
                                columnNumber: 39
                            }, this),
                            ")."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "The specular parameter sets the reflectance of non metallic surfaces: 0.5 gives the usual 4%."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 21,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Where nothing has been painted, the filter outputs a transparent black. The demo uses an alpha blending\nto see the skybox behind the meshes."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 23,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "On the box, metallic grows from left to right, and roughness from top to bottom."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 26,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 28,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter/deferred-shading",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                    lineNumber: 30,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 30,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9kZWZlcnJlZC1zaGFkaW5nX2xpZ2h0aW5nX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Dby1iYjBhNjMuYzM0NzVkNTg1OGU5M2QxNC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2RlZmVycmVkLXNoYWRpbmcvbGlnaHRpbmcvX2xpZ2h0aW5nL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9kZWZlcnJlZC1zaGFkaW5nL2xpZ2h0aW5nL19saWdodGluZy9saWdodGluZy5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9kZWZlcnJlZC1zaGFkaW5nL2xpZ2h0aW5nL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9saWdodGluZy5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcIiAgICAvLyBNZXRhbGxpYyBncm93cyBmcm9tIGxlZnQgdG8gcmlnaHQsIGFuZCByb3VnaG5lc3MgZnJvbSB0b3AgdG8gYm90dG9tLlxcbiAgICBjb25zdCBib3g6IFRnZE1lc2hXaXRoVGV4dHVyZXMgPSB7XFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KCksXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMCwgMCwgMF0sIGRpc3RhbmNlOiAyIH0pLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3I6IFsxLCAwLjcsIDAuMiwgMV0gfSksXFxuICAgICAgICB0ZXh0dXJlczoge1xcbiAgICAgICAgICAgIG1ldGFsbGljOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgbG9hZDogdGdkQ2FudmFzQ3JlYXRlR3JhZGllbnRIb3Jpem9udGFsKDY0LCBbXFxcIiMwMDBcXFwiLCBcXFwiI2ZmZlxcXCJdKSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICByb3VnaG5lc3M6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBsb2FkOiB0Z2RDYW52YXNDcmVhdGVDcmVhdGVHcmFkaWVudHZlcnRpY2FsKDY0LCBbXFxcIiMwMDBcXFwiLCBcXFwiI2ZmZlxcXCJdKSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgIH1cXG4gICAgLy8gZ2xURiBzdG9yZXMgbWV0YWxsaWMgaW4gQkxVRSBhbmQgcm91Z2huZXNzIGluIEdSRUVOLlxcbiAgICBjb25zdCB7IGhlbG1ldDogYXNzZXQgfSA9IGFzc2V0cy5nbGJcXG4gICAgY29uc3QgZ2x0Zk1hdGVyaWFsID0gYXNzZXQuZ2V0TWF0ZXJpYWwoMClcXG4gICAgY29uc3QgaW5kZXhCYXNlQ29sb3IgPSBnbHRmTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3M/LmJhc2VDb2xvclRleHR1cmU/LmluZGV4ID8/IDBcXG4gICAgY29uc3QgaW5kZXhNZXRhbGxpY1JvdWdobmVzcyA9IGdsdGZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcz8ubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIGNvbnN0IGluZGV4T2NjbHVzaW9uID0gZ2x0Zk1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmU/LmluZGV4ID8/IDBcXG4gICAgY29uc3QgaW5kZXhOb3JtYWxzID0gZ2x0Zk1hdGVyaWFsLm5vcm1hbFRleHR1cmU/LmluZGV4ID8/IDBcXG4gICAgY29uc3QgdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzID0gYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4TWV0YWxsaWNSb3VnaG5lc3MpXFxuICAgIGNvbnN0IGhlbG1ldDogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBhc3NldC5tYWtlR2VvbWV0cnkoKSxcXG4gICAgICAgIHRyYW5zZm86IGFzc2V0LmNyZWF0ZVRyYW5zZm9Gcm9tTm9kZShhc3NldC5nZXROb2RlKDApKSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoe1xcbiAgICAgICAgICAgIHRleHR1cmU6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleEJhc2VDb2xvciksXFxuICAgICAgICB9KSxcXG4gICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgbm9ybWFsczogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4Tm9ybWFscyksXFxuICAgICAgICAgICAgbWV0YWxsaWM6IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyxcXG4gICAgICAgICAgICBtZXRhbGxpY0NoYW5uZWw6IFxcXCJiXFxcIixcXG4gICAgICAgICAgICByb3VnaG5lc3M6IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyxcXG4gICAgICAgICAgICByb3VnaG5lc3NDaGFubmVsOiBcXFwiZ1xcXCIsXFxuICAgICAgICAgICAgYmFrZWRBTzogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4T2NjbHVzaW9uKSxcXG4gICAgICAgICAgICBiYWtlZEFPQ2hhbm5lbDogXFxcInJcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfVxcbiAgICBjb25zdCBkZWZlcnJlZCA9IG5ldyBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nVGV4dHVyZXMoY29udGV4dCwgeyBtZXNoZXM6IFtib3gsIGhlbG1ldF0gfSlcXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG4gICAgfSlcXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVGdkTGlnaHQoeyBjb2xvcjogWzEsIDAuOSwgMC44LCAxXSwgZGlyZWN0aW9uOiBbLTEsIC0xLCAtMV0gfSlcXG4gICAgY29uc3QgZmlsdGVyczogUmVjb3JkPE1vZGUsIFRnZEZpbHRlckRlZmVycmVkU2hhZGluZz4gPSB7XFxuICAgICAgICBza3lib3g6IG5ldyBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlZmVycmVkU2hhZGluZzogZGVmZXJyZWQsXFxuICAgICAgICAgICAgc2t5Ym94VGV4dHVyZTogc2t5Ym94LFxcbiAgICAgICAgICAgIGxpZ2h0LFxcbiAgICAgICAgfSksXFxuICAgICAgICAvLyBBIDHDlzEgY3ViZSB0ZXh0dXJlIGlzIGNyZWF0ZWQgZnJvbSB0aGlzIGNvbG9yLlxcbiAgICAgICAgY29sb3I6IG5ldyBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlZmVycmVkU2hhZGluZzogZGVmZXJyZWQsXFxuICAgICAgICAgICAgc2t5Ym94VGV4dHVyZTogXFxcIiM3YWZcXFwiLFxcbiAgICAgICAgICAgIGxpZ2h0LFxcbiAgICAgICAgfSksXFxuICAgIH1cXG4gICAgY29uc3QgcGFpbnRlcnM6IFJlY29yZDxNb2RlLCBUZ2RQYWludGVyRmlsdGVyPiA9IHtcXG4gICAgICAgIHNreWJveDogbWFrZVBhaW50ZXJGaWx0ZXIoY29udGV4dCwgZGVmZXJyZWQsIGZpbHRlcnMuc2t5Ym94KSxcXG4gICAgICAgIGNvbG9yOiBtYWtlUGFpbnRlckZpbHRlcihjb250ZXh0LCBkZWZlcnJlZCwgZmlsdGVycy5jb2xvciksXFxuICAgIH1cXG4gICAgcmVmU2NlbmUuY3VycmVudCA9IHsgZmlsdGVycywgcGFpbnRlcnMgfVxcbiAgICBhcHBseU1vZGUocGFpbnRlcnMsIFxcXCJza3lib3hcXFwiKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGRlZmVycmVkLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwgeyB0ZXh0dXJlOiBza3lib3ggfSksXFxuICAgICAgICAvLyBOb3RoaW5nIGlzIHBhaW50ZWQgKGFscGhhID0gMCkgd2hlcmUgdGhlcmUgaXMgbm8gbWVzaC5cXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBibGVuZDogXFxcImFscGhhXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3BhaW50ZXJzLnNreWJveCwgcGFpbnRlcnMuY29sb3JdLFxcbiAgICAgICAgfSksXFxuICAgICAgICAoX3RpbWUsIGRlbHRhKSA9PiB7XFxuICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbHRhICogMC43MSkub3JiaXRBcm91bmRZKGRlbHRhICogMC45NClcXG4gICAgICAgIH0sXFxuICAgIClcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg0LCA0KVxcbiAgICBjb250ZXh0LnBsYXkoKVwiLFwibWFrZVBhaW50ZXJGaWx0ZXIoKVwiOlwiLyoqXFxuICogVGhlIGFsYmVkbyBpcyB0aGUgaW5wdXQgdGV4dHVyZSBvZiB0aGUgZmlsdGVyLlxcbiAqL1xcbmZ1bmN0aW9uIG1ha2VQYWludGVyRmlsdGVyKFxcbiAgICBjb250ZXh0OiBUZ2RDb250ZXh0LFxcbiAgICBkZWZlcnJlZDogVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZ1RleHR1cmVzLFxcbiAgICBmaWx0ZXI6IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyxcXG4pIHtcXG4gICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmU6IGRlZmVycmVkLnRleHR1cmVBbGJlZG8sXFxuICAgICAgICBmaWx0ZXJzOiBbZmlsdGVyXSxcXG4gICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICB9KVxcbn1cIixcImFwcGx5TW9kZSgpXCI6XCJmdW5jdGlvbiBhcHBseU1vZGUocGFpbnRlcnM6IFJlY29yZDxNb2RlLCBUZ2RQYWludGVyRmlsdGVyPiwgbW9kZTogTW9kZSkge1xcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYWludGVycykgYXMgTW9kZVtdKSB7XFxuICAgICAgICBwYWludGVyc1trZXldLmFjdGl2ZSA9IGtleSA9PT0gbW9kZVxcbiAgICB9XFxufVwiLFwiYXBwbHlTdHJlbmd0aCgpXCI6XCJmdW5jdGlvbiBhcHBseVN0cmVuZ3RoKGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+LCBzdHJlbmd0aDogbnVtYmVyKSB7XFxuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIE9iamVjdC52YWx1ZXMoZmlsdGVycykpIHtcXG4gICAgICAgIGZpbHRlci5za3lib3hTdHJlbmd0aCA9IHN0cmVuZ3RoXFxuICAgIH1cXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyxcXG4gICAgVGdkR2VvbWV0cnlCb3gsXFxuICAgIFRnZExpZ2h0LFxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXFxuICAgIFRnZE1hdGVyaWFsRmxhdFRleHR1cmUsXFxuICAgIHR5cGUgVGdkTWVzaFdpdGhUZXh0dXJlcyxcXG4gICAgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZ1RleHR1cmVzLFxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgVGdkVGV4dHVyZUN1YmUsXFxuICAgIFRnZFRyYW5zZm8sXFxuICAgIHRnZENhbnZhc0NyZWF0ZUNyZWF0ZUdyYWRpZW50dmVydGljYWwsXFxuICAgIHRnZENhbnZhc0NyZWF0ZUdyYWRpZW50SG9yaXpvbnRhbCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCB7IFZpZXdJbnB1dE51bWJlciwgVmlld09wdGlvbnMsIFZpZXdQYW5lbCB9IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCBIZWxtZXRVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9oZWxtZXQuZ2xiXFxcIlxcbmltcG9ydCBQb3NYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1gud2VicFxcXCJcXG5pbXBvcnQgUG9zWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcXFwiXFxuaW1wb3J0IFBvc1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXFxcIlxcbmltcG9ydCBOZWdYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1gud2VicFxcXCJcXG5pbXBvcnQgTmVnWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXFxcIlxcblxcbnR5cGUgTW9kZSA9IFxcXCJza3lib3hcXFwiIHwgXFxcImNvbG9yXFxcIlxcblxcbmludGVyZmFjZSBTY2VuZSB7XFxuICAgIGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+XFxuICAgIHBhaW50ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckZpbHRlcj5cXG59XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cywgcmVmU2NlbmU6IHsgY3VycmVudDogU2NlbmUgfCBudWxsIH0pIHtcXG4gICAgLy8gTWV0YWxsaWMgZ3Jvd3MgZnJvbSBsZWZ0IHRvIHJpZ2h0LCBhbmQgcm91Z2huZXNzIGZyb20gdG9wIHRvIGJvdHRvbS5cXG4gICAgY29uc3QgYm94OiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCgpLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIDBdLCBkaXN0YW5jZTogMiB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMSwgMC43LCAwLjIsIDFdIH0pLFxcbiAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICBtZXRhbGxpYzogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGxvYWQ6IHRnZENhbnZhc0NyZWF0ZUdyYWRpZW50SG9yaXpvbnRhbCg2NCwgW1xcXCIjMDAwXFxcIiwgXFxcIiNmZmZcXFwiXSksXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgcm91Z2huZXNzOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgbG9hZDogdGdkQ2FudmFzQ3JlYXRlQ3JlYXRlR3JhZGllbnR2ZXJ0aWNhbCg2NCwgW1xcXCIjMDAwXFxcIiwgXFxcIiNmZmZcXFwiXSksXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICB9LFxcbiAgICB9XFxuICAgIC8vIGdsVEYgc3RvcmVzIG1ldGFsbGljIGluIEJMVUUgYW5kIHJvdWdobmVzcyBpbiBHUkVFTi5cXG4gICAgY29uc3QgeyBoZWxtZXQ6IGFzc2V0IH0gPSBhc3NldHMuZ2xiXFxuICAgIGNvbnN0IGdsdGZNYXRlcmlhbCA9IGFzc2V0LmdldE1hdGVyaWFsKDApXFxuICAgIGNvbnN0IGluZGV4QmFzZUNvbG9yID0gZ2x0Zk1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzPy5iYXNlQ29sb3JUZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIGNvbnN0IGluZGV4TWV0YWxsaWNSb3VnaG5lc3MgPSBnbHRmTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3M/Lm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleE9jY2x1c2lvbiA9IGdsdGZNYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIGNvbnN0IGluZGV4Tm9ybWFscyA9IGdsdGZNYXRlcmlhbC5ub3JtYWxUZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIGNvbnN0IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyA9IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleE1ldGFsbGljUm91Z2huZXNzKVxcbiAgICBjb25zdCBoZWxtZXQ6IFRnZE1lc2hXaXRoVGV4dHVyZXMgPSB7XFxuICAgICAgICBnZW9tZXRyeTogYXNzZXQubWFrZUdlb21ldHJ5KCksXFxuICAgICAgICB0cmFuc2ZvOiBhc3NldC5jcmVhdGVUcmFuc2ZvRnJvbU5vZGUoYXNzZXQuZ2V0Tm9kZSgwKSksXFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhCYXNlQ29sb3IpLFxcbiAgICAgICAgfSksXFxuICAgICAgICB0ZXh0dXJlczoge1xcbiAgICAgICAgICAgIG5vcm1hbHM6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleE5vcm1hbHMpLFxcbiAgICAgICAgICAgIG1ldGFsbGljOiB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3MsXFxuICAgICAgICAgICAgbWV0YWxsaWNDaGFubmVsOiBcXFwiYlxcXCIsXFxuICAgICAgICAgICAgcm91Z2huZXNzOiB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3MsXFxuICAgICAgICAgICAgcm91Z2huZXNzQ2hhbm5lbDogXFxcImdcXFwiLFxcbiAgICAgICAgICAgIGJha2VkQU86IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleE9jY2x1c2lvbiksXFxuICAgICAgICAgICAgYmFrZWRBT0NoYW5uZWw6IFxcXCJyXFxcIixcXG4gICAgICAgIH0sXFxuICAgIH1cXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZ1RleHR1cmVzKGNvbnRleHQsIHsgbWVzaGVzOiBbYm94LCBoZWxtZXRdIH0pXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRnZExpZ2h0KHsgY29sb3I6IFsxLCAwLjksIDAuOCwgMV0sIGRpcmVjdGlvbjogWy0xLCAtMSwgLTFdIH0pXFxuICAgIGNvbnN0IGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+ID0ge1xcbiAgICAgICAgc2t5Ym94OiBuZXcgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZWZlcnJlZFNoYWRpbmc6IGRlZmVycmVkLFxcbiAgICAgICAgICAgIHNreWJveFRleHR1cmU6IHNreWJveCxcXG4gICAgICAgICAgICBsaWdodCxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgLy8gQSAxw5cxIGN1YmUgdGV4dHVyZSBpcyBjcmVhdGVkIGZyb20gdGhpcyBjb2xvci5cXG4gICAgICAgIGNvbG9yOiBuZXcgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZWZlcnJlZFNoYWRpbmc6IGRlZmVycmVkLFxcbiAgICAgICAgICAgIHNreWJveFRleHR1cmU6IFxcXCIjN2FmXFxcIixcXG4gICAgICAgICAgICBsaWdodCxcXG4gICAgICAgIH0pLFxcbiAgICB9XFxuICAgIGNvbnN0IHBhaW50ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckZpbHRlcj4gPSB7XFxuICAgICAgICBza3lib3g6IG1ha2VQYWludGVyRmlsdGVyKGNvbnRleHQsIGRlZmVycmVkLCBmaWx0ZXJzLnNreWJveCksXFxuICAgICAgICBjb2xvcjogbWFrZVBhaW50ZXJGaWx0ZXIoY29udGV4dCwgZGVmZXJyZWQsIGZpbHRlcnMuY29sb3IpLFxcbiAgICB9XFxuICAgIHJlZlNjZW5lLmN1cnJlbnQgPSB7IGZpbHRlcnMsIHBhaW50ZXJzIH1cXG4gICAgYXBwbHlNb2RlKHBhaW50ZXJzLCBcXFwic2t5Ym94XFxcIilcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBkZWZlcnJlZCxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHsgdGV4dHVyZTogc2t5Ym94IH0pLFxcbiAgICAgICAgLy8gTm90aGluZyBpcyBwYWludGVkIChhbHBoYSA9IDApIHdoZXJlIHRoZXJlIGlzIG5vIG1lc2guXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcIm9mZlxcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcIm9mZlxcXCIsXFxuICAgICAgICAgICAgYmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtwYWludGVycy5za3lib3gsIHBhaW50ZXJzLmNvbG9yXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgKF90aW1lLCBkZWx0YSkgPT4ge1xcbiAgICAgICAgICAgIGJveC50cmFuc2ZvLm9yYml0QXJvdW5kWChkZWx0YSAqIDAuNzEpLm9yYml0QXJvdW5kWShkZWx0YSAqIDAuOTQpXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNCwgNClcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgcmVmQ29udGV4dCA9IFJlYWN0LnVzZVJlZjxUZ2RDb250ZXh0IHwgbnVsbD4obnVsbClcXG4gICAgY29uc3QgcmVmU2NlbmUgPSBSZWFjdC51c2VSZWY8U2NlbmUgfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSBSZWFjdC51c2VTdGF0ZTxNb2RlPihcXFwic2t5Ym94XFxcIilcXG4gICAgY29uc3QgW3N0cmVuZ3RoLCBzZXRTdHJlbmd0aF0gPSBSZWFjdC51c2VTdGF0ZSgxKVxcbiAgICBjb25zdCBoYW5kbGVNb2RlQ2hhbmdlID0gKHZhbHVlOiBNb2RlKSA9PiB7XFxuICAgICAgICBzZXRNb2RlKHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cXG5cXG4gICAgICAgIGFwcGx5TW9kZShzY2VuZS5wYWludGVycywgdmFsdWUpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICBjb25zdCBoYW5kbGVTdHJlbmd0aENoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XFxuICAgICAgICBzZXRTdHJlbmd0aCh2YWx1ZSlcXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcXG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmU2NlbmUuY3VycmVudFxcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFzY2VuZSkgcmV0dXJuXFxuXFxuICAgICAgICBhcHBseVN0cmVuZ3RoKHNjZW5lLmZpbHRlcnMsIHZhbHVlKVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICAgICAgICAgIHJlZkNvbnRleHQuY3VycmVudCA9IGNvbnRleHRcXG4gICAgICAgICAgICAgICAgaW5pdChjb250ZXh0LCBhc3NldHMsIHJlZlNjZW5lKVxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGdsYjogeyBoZWxtZXQ6IEhlbG1ldFVSTCB9LFxcbiAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zWDogUG9zWCxcXG4gICAgICAgICAgICAgICAgICAgIHBvc1k6IFBvc1ksXFxuICAgICAgICAgICAgICAgICAgICBwb3NaOiBQb3NaLFxcbiAgICAgICAgICAgICAgICAgICAgbmVnWDogTmVnWCxcXG4gICAgICAgICAgICAgICAgICAgIG5lZ1k6IE5lZ1ksXFxuICAgICAgICAgICAgICAgICAgICBuZWdaOiBOZWdaLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgY29udHJvbGxlcj17eyBpbmVydGlhT3JiaXQ6IDEwMDAgfX1cXG4gICAgICAgICAgICBnaXptbz5cXG4gICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XFxcImZsZXhcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgZmxleFdyYXA9XFxcIndyYXBcXFwiIGdhcD1cXFwiU1xcXCI+XFxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyB2YWx1ZT17bW9kZX0gb25DaGFuZ2U9e2hhbmRsZU1vZGVDaGFuZ2V9PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcInNreWJveFxcXCI+c2t5Ym94IHRleHR1cmU8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJjb2xvclxcXCI+c2t5Ym94IGNvbG9yPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XFxuICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgbGFiZWw9XFxcInNreWJveFN0cmVuZ3RoXFxcIiB2YWx1ZT17c3RyZW5ndGh9IG9uQ2hhbmdlPXtoYW5kbGVTdHJlbmd0aENoYW5nZX0gLz5cXG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgIDwvVmlldz5cXG4gICAgKVxcbn1cXG5cXG4vKipcXG4gKiBUaGUgYWxiZWRvIGlzIHRoZSBpbnB1dCB0ZXh0dXJlIG9mIHRoZSBmaWx0ZXIuXFxuICovXFxuZnVuY3Rpb24gbWFrZVBhaW50ZXJGaWx0ZXIoXFxuICAgIGNvbnRleHQ6IFRnZENvbnRleHQsXFxuICAgIGRlZmVycmVkOiBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nVGV4dHVyZXMsXFxuICAgIGZpbHRlcjogVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nLFxcbikge1xcbiAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZTogZGVmZXJyZWQudGV4dHVyZUFsYmVkbyxcXG4gICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJdLFxcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgIH0pXFxufVxcblxcbmZ1bmN0aW9uIGFwcGx5TW9kZShwYWludGVyczogUmVjb3JkPE1vZGUsIFRnZFBhaW50ZXJGaWx0ZXI+LCBtb2RlOiBNb2RlKSB7XFxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhaW50ZXJzKSBhcyBNb2RlW10pIHtcXG4gICAgICAgIHBhaW50ZXJzW2tleV0uYWN0aXZlID0ga2V5ID09PSBtb2RlXFxuICAgIH1cXG59XFxuXFxuZnVuY3Rpb24gYXBwbHlTdHJlbmd0aChmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiwgc3RyZW5ndGg6IG51bWJlcikge1xcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBPYmplY3QudmFsdWVzKGZpbHRlcnMpKSB7XFxuICAgICAgICBmaWx0ZXIuc2t5Ym94U3RyZW5ndGggPSBzdHJlbmd0aFxcbiAgICB9XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcsXG4gICAgVGdkR2VvbWV0cnlCb3gsXG4gICAgVGdkTGlnaHQsXG4gICAgVGdkTWF0ZXJpYWxGbGF0LFxuICAgIFRnZE1hdGVyaWFsRmxhdFRleHR1cmUsXG4gICAgdHlwZSBUZ2RNZXNoV2l0aFRleHR1cmVzLFxuICAgIFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmdUZXh0dXJlcyxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxuICAgIFRnZFBhaW50ZXJTa3lib3gsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcbiAgICBUZ2RUcmFuc2ZvLFxuICAgIHRnZENhbnZhc0NyZWF0ZUNyZWF0ZUdyYWRpZW50dmVydGljYWwsXG4gICAgdGdkQ2FudmFzQ3JlYXRlR3JhZGllbnRIb3Jpem9udGFsLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IHsgVmlld0lucHV0TnVtYmVyLCBWaWV3T3B0aW9ucywgVmlld1BhbmVsIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IEhlbG1ldFVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oZWxtZXQuZ2xiXCJcbmltcG9ydCBQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NYLndlYnBcIlxuaW1wb3J0IFBvc1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFwiXG5pbXBvcnQgUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXCJcbmltcG9ydCBOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdYLndlYnBcIlxuaW1wb3J0IE5lZ1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFwiXG5pbXBvcnQgTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXCJcblxudHlwZSBNb2RlID0gXCJza3lib3hcIiB8IFwiY29sb3JcIlxuXG5pbnRlcmZhY2UgU2NlbmUge1xuICAgIGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+XG4gICAgcGFpbnRlcnM6IFJlY29yZDxNb2RlLCBUZ2RQYWludGVyRmlsdGVyPlxufVxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzLCByZWZTY2VuZTogeyBjdXJyZW50OiBTY2VuZSB8IG51bGwgfSkge1xuICAgIC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcbiAgICAvLyBNZXRhbGxpYyBncm93cyBmcm9tIGxlZnQgdG8gcmlnaHQsIGFuZCByb3VnaG5lc3MgZnJvbSB0b3AgdG8gYm90dG9tLlxuICAgIGNvbnN0IGJveDogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCgpLFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMCwgMCwgMF0sIGRpc3RhbmNlOiAyIH0pLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMSwgMC43LCAwLjIsIDFdIH0pLFxuICAgICAgICB0ZXh0dXJlczoge1xuICAgICAgICAgICAgbWV0YWxsaWM6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGxvYWQ6IHRnZENhbnZhc0NyZWF0ZUdyYWRpZW50SG9yaXpvbnRhbCg2NCwgW1wiIzAwMFwiLCBcIiNmZmZcIl0pLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByb3VnaG5lc3M6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGxvYWQ6IHRnZENhbnZhc0NyZWF0ZUNyZWF0ZUdyYWRpZW50dmVydGljYWwoNjQsIFtcIiMwMDBcIiwgXCIjZmZmXCJdKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgIH1cbiAgICAvLyBnbFRGIHN0b3JlcyBtZXRhbGxpYyBpbiBCTFVFIGFuZCByb3VnaG5lc3MgaW4gR1JFRU4uXG4gICAgY29uc3QgeyBoZWxtZXQ6IGFzc2V0IH0gPSBhc3NldHMuZ2xiXG4gICAgY29uc3QgZ2x0Zk1hdGVyaWFsID0gYXNzZXQuZ2V0TWF0ZXJpYWwoMClcbiAgICBjb25zdCBpbmRleEJhc2VDb2xvciA9IGdsdGZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcz8uYmFzZUNvbG9yVGV4dHVyZT8uaW5kZXggPz8gMFxuICAgIGNvbnN0IGluZGV4TWV0YWxsaWNSb3VnaG5lc3MgPSBnbHRmTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3M/Lm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZT8uaW5kZXggPz8gMFxuICAgIGNvbnN0IGluZGV4T2NjbHVzaW9uID0gZ2x0Zk1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmU/LmluZGV4ID8/IDBcbiAgICBjb25zdCBpbmRleE5vcm1hbHMgPSBnbHRmTWF0ZXJpYWwubm9ybWFsVGV4dHVyZT8uaW5kZXggPz8gMFxuICAgIGNvbnN0IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyA9IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleE1ldGFsbGljUm91Z2huZXNzKVxuICAgIGNvbnN0IGhlbG1ldDogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcbiAgICAgICAgZ2VvbWV0cnk6IGFzc2V0Lm1ha2VHZW9tZXRyeSgpLFxuICAgICAgICB0cmFuc2ZvOiBhc3NldC5jcmVhdGVUcmFuc2ZvRnJvbU5vZGUoYXNzZXQuZ2V0Tm9kZSgwKSksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XG4gICAgICAgICAgICB0ZXh0dXJlOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhCYXNlQ29sb3IpLFxuICAgICAgICB9KSxcbiAgICAgICAgdGV4dHVyZXM6IHtcbiAgICAgICAgICAgIG5vcm1hbHM6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleE5vcm1hbHMpLFxuICAgICAgICAgICAgbWV0YWxsaWM6IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyxcbiAgICAgICAgICAgIG1ldGFsbGljQ2hhbm5lbDogXCJiXCIsXG4gICAgICAgICAgICByb3VnaG5lc3M6IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyxcbiAgICAgICAgICAgIHJvdWdobmVzc0NoYW5uZWw6IFwiZ1wiLFxuICAgICAgICAgICAgYmFrZWRBTzogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4T2NjbHVzaW9uKSxcbiAgICAgICAgICAgIGJha2VkQU9DaGFubmVsOiBcInJcIixcbiAgICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZ1RleHR1cmVzKGNvbnRleHQsIHsgbWVzaGVzOiBbYm94LCBoZWxtZXRdIH0pXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcbiAgICB9KVxuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRnZExpZ2h0KHsgY29sb3I6IFsxLCAwLjksIDAuOCwgMV0sIGRpcmVjdGlvbjogWy0xLCAtMSwgLTFdIH0pXG4gICAgY29uc3QgZmlsdGVyczogUmVjb3JkPE1vZGUsIFRnZEZpbHRlckRlZmVycmVkU2hhZGluZz4gPSB7XG4gICAgICAgIHNreWJveDogbmV3IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XG4gICAgICAgICAgICBkZWZlcnJlZFNoYWRpbmc6IGRlZmVycmVkLFxuICAgICAgICAgICAgc2t5Ym94VGV4dHVyZTogc2t5Ym94LFxuICAgICAgICAgICAgbGlnaHQsXG4gICAgICAgIH0pLFxuICAgICAgICAvLyBBIDHDlzEgY3ViZSB0ZXh0dXJlIGlzIGNyZWF0ZWQgZnJvbSB0aGlzIGNvbG9yLlxuICAgICAgICBjb2xvcjogbmV3IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XG4gICAgICAgICAgICBkZWZlcnJlZFNoYWRpbmc6IGRlZmVycmVkLFxuICAgICAgICAgICAgc2t5Ym94VGV4dHVyZTogXCIjN2FmXCIsXG4gICAgICAgICAgICBsaWdodCxcbiAgICAgICAgfSksXG4gICAgfVxuICAgIGNvbnN0IHBhaW50ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckZpbHRlcj4gPSB7XG4gICAgICAgIHNreWJveDogbWFrZVBhaW50ZXJGaWx0ZXIoY29udGV4dCwgZGVmZXJyZWQsIGZpbHRlcnMuc2t5Ym94KSxcbiAgICAgICAgY29sb3I6IG1ha2VQYWludGVyRmlsdGVyKGNvbnRleHQsIGRlZmVycmVkLCBmaWx0ZXJzLmNvbG9yKSxcbiAgICB9XG4gICAgcmVmU2NlbmUuY3VycmVudCA9IHsgZmlsdGVycywgcGFpbnRlcnMgfVxuICAgIGFwcGx5TW9kZShwYWludGVycywgXCJza3lib3hcIilcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgZGVmZXJyZWQsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHsgdGV4dHVyZTogc2t5Ym94IH0pLFxuICAgICAgICAvLyBOb3RoaW5nIGlzIHBhaW50ZWQgKGFscGhhID0gMCkgd2hlcmUgdGhlcmUgaXMgbm8gbWVzaC5cbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogXCJvZmZcIixcbiAgICAgICAgICAgIGN1bGw6IFwib2ZmXCIsXG4gICAgICAgICAgICBibGVuZDogXCJhbHBoYVwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtwYWludGVycy5za3lib3gsIHBhaW50ZXJzLmNvbG9yXSxcbiAgICAgICAgfSksXG4gICAgICAgIChfdGltZSwgZGVsdGEpID0+IHtcbiAgICAgICAgICAgIGJveC50cmFuc2ZvLm9yYml0QXJvdW5kWChkZWx0YSAqIDAuNzEpLm9yYml0QXJvdW5kWShkZWx0YSAqIDAuOTQpXG4gICAgICAgIH0sXG4gICAgKVxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNCwgNClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCByZWZDb250ZXh0ID0gUmVhY3QudXNlUmVmPFRnZENvbnRleHQgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHJlZlNjZW5lID0gUmVhY3QudXNlUmVmPFNjZW5lIHwgbnVsbD4obnVsbClcbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSBSZWFjdC51c2VTdGF0ZTxNb2RlPihcInNreWJveFwiKVxuICAgIGNvbnN0IFtzdHJlbmd0aCwgc2V0U3RyZW5ndGhdID0gUmVhY3QudXNlU3RhdGUoMSlcbiAgICBjb25zdCBoYW5kbGVNb2RlQ2hhbmdlID0gKHZhbHVlOiBNb2RlKSA9PiB7XG4gICAgICAgIHNldE1vZGUodmFsdWUpXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XG4gICAgICAgIGlmICghY29udGV4dCB8fCAhc2NlbmUpIHJldHVyblxuXG4gICAgICAgIGFwcGx5TW9kZShzY2VuZS5wYWludGVycywgdmFsdWUpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVTdHJlbmd0aENoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNldFN0cmVuZ3RoKHZhbHVlKVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmU2NlbmUuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cblxuICAgICAgICBhcHBseVN0cmVuZ3RoKHNjZW5lLmZpbHRlcnMsIHZhbHVlKVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9eyhjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgIHJlZkNvbnRleHQuY3VycmVudCA9IGNvbnRleHRcbiAgICAgICAgICAgICAgICBpbml0KGNvbnRleHQsIGFzc2V0cywgcmVmU2NlbmUpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgZ2xiOiB7IGhlbG1ldDogSGVsbWV0VVJMIH0sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zWDogUG9zWCxcbiAgICAgICAgICAgICAgICAgICAgcG9zWTogUG9zWSxcbiAgICAgICAgICAgICAgICAgICAgcG9zWjogUG9zWixcbiAgICAgICAgICAgICAgICAgICAgbmVnWDogTmVnWCxcbiAgICAgICAgICAgICAgICAgICAgbmVnWTogTmVnWSxcbiAgICAgICAgICAgICAgICAgICAgbmVnWjogTmVnWixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3sgaW5lcnRpYU9yYml0OiAxMDAwIH19XG4gICAgICAgICAgICBnaXptbz5cbiAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4V3JhcD1cIndyYXBcIiBnYXA9XCJTXCI+XG4gICAgICAgICAgICAgICAgPFZpZXdPcHRpb25zIHZhbHVlPXttb2RlfSBvbkNoYW5nZT17aGFuZGxlTW9kZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwic2t5Ym94XCI+c2t5Ym94IHRleHR1cmU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJjb2xvclwiPnNreWJveCBjb2xvcjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XG4gICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cInNreWJveFN0cmVuZ3RoXCIgdmFsdWU9e3N0cmVuZ3RofSBvbkNoYW5nZT17aGFuZGxlU3RyZW5ndGhDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgPC9WaWV3PlxuICAgIClcbn1cblxuLy8gI2JlZ2luIG1ha2VQYWludGVyRmlsdGVyKClcbi8qKlxuICogVGhlIGFsYmVkbyBpcyB0aGUgaW5wdXQgdGV4dHVyZSBvZiB0aGUgZmlsdGVyLlxuICovXG5mdW5jdGlvbiBtYWtlUGFpbnRlckZpbHRlcihcbiAgICBjb250ZXh0OiBUZ2RDb250ZXh0LFxuICAgIGRlZmVycmVkOiBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nVGV4dHVyZXMsXG4gICAgZmlsdGVyOiBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcsXG4pIHtcbiAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuICAgICAgICB0ZXh0dXJlOiBkZWZlcnJlZC50ZXh0dXJlQWxiZWRvLFxuICAgICAgICBmaWx0ZXJzOiBbZmlsdGVyXSxcbiAgICAgICAgZmxpcFk6IHRydWUsXG4gICAgfSlcbn1cbi8vICNlbmRcblxuLy8gI2JlZ2luIGFwcGx5TW9kZSgpXG5mdW5jdGlvbiBhcHBseU1vZGUocGFpbnRlcnM6IFJlY29yZDxNb2RlLCBUZ2RQYWludGVyRmlsdGVyPiwgbW9kZTogTW9kZSkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhaW50ZXJzKSBhcyBNb2RlW10pIHtcbiAgICAgICAgcGFpbnRlcnNba2V5XS5hY3RpdmUgPSBrZXkgPT09IG1vZGVcbiAgICB9XG59XG4vLyAjZW5kXG5cbi8vICNiZWdpbiBhcHBseVN0cmVuZ3RoKClcbmZ1bmN0aW9uIGFwcGx5U3RyZW5ndGgoZmlsdGVyczogUmVjb3JkPE1vZGUsIFRnZEZpbHRlckRlZmVycmVkU2hhZGluZz4sIHN0cmVuZ3RoOiBudW1iZXIpIHtcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBPYmplY3QudmFsdWVzKGZpbHRlcnMpKSB7XG4gICAgICAgIGZpbHRlci5za3lib3hTdHJlbmd0aCA9IHN0cmVuZ3RoXG4gICAgfVxufVxuLy8gI2VuZFxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmciLCJUZ2RHZW9tZXRyeUJveCIsIlRnZExpZ2h0IiwiVGdkTWF0ZXJpYWxGbGF0IiwiVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSIsIlRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmdUZXh0dXJlcyIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyU2t5Ym94IiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVGdkVGV4dHVyZUN1YmUiLCJUZ2RUcmFuc2ZvIiwidGdkQ2FudmFzQ3JlYXRlQ3JlYXRlR3JhZGllbnR2ZXJ0aWNhbCIsInRnZENhbnZhc0NyZWF0ZUdyYWRpZW50SG9yaXpvbnRhbCIsIlZpZXdJbnB1dE51bWJlciIsIlZpZXdPcHRpb25zIiwiVmlld1BhbmVsIiwiVmlldyIsIkhlbG1ldFVSTCIsIlBvc1giLCJQb3NZIiwiUG9zWiIsIk5lZ1giLCJOZWdZIiwiTmVnWiIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwicmVmU2NlbmUiLCJfZ2x0Zk1hdGVyaWFsX3Bick1ldGFsbGljUm91Z2huZXNzX2Jhc2VDb2xvclRleHR1cmUiLCJfZ2x0Zk1hdGVyaWFsX3Bick1ldGFsbGljUm91Z2huZXNzX21ldGFsbGljUm91Z2huZXNzVGV4dHVyZSIsIl9nbHRmTWF0ZXJpYWxfb2NjbHVzaW9uVGV4dHVyZSIsIl9nbHRmTWF0ZXJpYWxfbm9ybWFsVGV4dHVyZSIsImJveCIsIl9hc3NldHNfZ2xiIiwiYXNzZXQiLCJnbHRmTWF0ZXJpYWwiLCJpbmRleEJhc2VDb2xvciIsImluZGV4TWV0YWxsaWNSb3VnaG5lc3MiLCJpbmRleE9jY2x1c2lvbiIsImluZGV4Tm9ybWFscyIsInRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyIsImhlbG1ldCIsImRlZmVycmVkIiwic2t5Ym94IiwibGlnaHQiLCJmaWx0ZXJzIiwicGFpbnRlcnMiLCJtYWtlUGFpbnRlckZpbHRlciIsImFwcGx5TW9kZSIsIl90aW1lIiwiZGVsdGEiLCJyZWZDb250ZXh0IiwibW9kZSIsInNldE1vZGUiLCJfUmVhY3RfdXNlU3RhdGUxIiwic3RyZW5ndGgiLCJzZXRTdHJlbmd0aCIsImhhbmRsZU1vZGVDaGFuZ2UiLCJ2YWx1ZSIsInNjZW5lIiwiaGFuZGxlU3RyZW5ndGhDaGFuZ2UiLCJhcHBseVN0cmVuZ3RoIiwib25SZWFkeSIsImZpbHRlciIsIl9pdGVyYXRvckVycm9yIiwiT2JqZWN0Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUNuQjtBQUVsQyxJQUFNSSxRQUFRO0lBQUMsc0JBQXFCO0lBQXVvSCx1QkFBc0I7SUFBc1csZUFBYztJQUE4TCxtQkFBa0I7QUFBcU07QUFDMThJLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLDBDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztz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