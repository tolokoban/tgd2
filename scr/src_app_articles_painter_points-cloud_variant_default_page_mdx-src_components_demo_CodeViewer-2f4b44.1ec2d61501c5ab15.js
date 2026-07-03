"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_points-cloud_variant_default_page_mdx-src_components_demo_CodeViewer-2f4b44"], {
10103(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/suzanne-baked.0ac8cd2985eef129.webp";

},
8755(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/high-res-monkey.5d18cfe478366fe5.glb";

},
98771(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne-low.9e07f8932ceaa6ca.glb";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
34645(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _points_cloud_demo__rspack_import_4 = __webpack_require__(53989);
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
    "Detail #1": "\tcontext.camera.transfo.distance = 5;\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.5,\n\t\tspeedZoom: 1,\n\t});\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t});\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(createPalette());\n\tconst dataset = makeDataset(assets.glb.monkey);\n\tconsole.log(\"🐞 [points-cloud.demo@52] dataset.count =\", dataset.count); // @FIXME: Remove this line written on 2026-06-02 at 15:07\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\tdataUV: new Float32Array(makeUV(assets.glb.monkey)),\n\t\ttexture,\n\t});\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cloud],\n\t});\n\tcontext.add(clear, state);\n\tcontext.paint();"
};
var FULL = "import {\n\tTgdColor,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\ttype TgdDataGlb,\n\tTgdDataset,\n\tTgdPainterClear,\n\tTgdPainterPointsCloud,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdCanvasCreatePalette,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport MonkeyURL from \"@/assets/mesh/high-res-monkey.glb\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera.transfo.distance = 5;\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.5,\n\t\tspeedZoom: 1,\n\t});\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t});\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(createPalette());\n\tconst dataset = makeDataset(assets.glb.monkey);\n\tconsole.log(\"🐞 [points-cloud.demo@52] dataset.count =\", dataset.count); // @FIXME: Remove this line written on 2026-06-02 at 15:07\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\tdataUV: new Float32Array(makeUV(assets.glb.monkey)),\n\t\ttexture,\n\t});\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cloud],\n\t});\n\tcontext.add(clear, state);\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tassets={{\n\t\t\t\tglb: { monkey: MonkeyURL },\n\t\t\t}}\n\t\t/>\n\t);\n}\n\nfunction makeDataset(glb: TgdDataGlb) {\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t});\n\tglb.setAttrib(dataset, \"POSITION\");\n\tconst { set } = dataset.getAttribAccessor(\"POSITION\");\n\tconst count = dataset.count;\n\tconst radius = 0.01;\n\tfor (let i = 0; i < count; i++) {\n\t\tset(radius, i, 3);\n\t}\n\treturn dataset;\n}\n\nfunction makeUV(glb: TgdDataGlb) {\n\tconst uvs: number[] = [];\n\tconst dataset = new TgdDataset({\n\t\tNORMAL: \"vec4\",\n\t});\n\tglb.setAttrib(dataset, \"NORMAL\");\n\tconst { get } = dataset.getAttribAccessor(\"NORMAL\");\n\tconst count = dataset.count;\n\tfor (let i = 0; i < count; i++) {\n\t\tconst nx = get(i, 0);\n\t\tconst ny = get(i, 1);\n\t\t// const nz = get(i, 2);\n\t\tconst u = 0.5 * (1 + nx);\n\t\tconst v = 0.5 * (1 + ny);\n\t\tuvs.push(u, v);\n\t}\n\treturn uvs;\n}\n\nfunction createPalette() {\n\tconst colors: TgdColor[] = [];\n\tconst S = 1;\n\tfor (const L of [0.1, 0.5, 0.9]) {\n\t\tfor (const H of [0, 0.2, 0.4, 0.6, 0.8, 1]) {\n\t\t\tcolors.push(TgdColor.fromHSL(H, S, L));\n\t\t}\n\t}\n\treturn tgdCanvasCreatePalette(colors, 6);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
53989(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _assets_mesh_high_res_monkey_glb__rspack_import_2 = __webpack_require__(8755);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(43475);




function init(context, assets) {
    // #begin
    context.camera.transfo.distance = 5;
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        maxZoom: 5,
        minZoom: 0.5,
        speedZoom: 1
    });
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.1,
            0.2,
            0.3,
            1
        ],
        depth: 1
    });
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        params: {
            minFilter: "LINEAR",
            magFilter: "LINEAR",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE"
        }
    }).loadBitmap(createPalette());
    var dataset = makeDataset(assets.glb.monkey);
    console.log("🐞 [points-cloud.demo@52] dataset.count =", dataset.count); // @FIXME: Remove this line written on 2026-06-02 at 15:07
    var cloud = new _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloud(context, {
        dataPoint: new Float32Array(dataset.data),
        dataUV: new Float32Array(makeUV(assets.glb.monkey)),
        texture: texture
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            cloud
        ]
    });
    context.add(clear, state);
    context.paint();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_3["default"], {
        onReady: init,
        gizmo: true,
        options: {
            preserveDrawingBuffer: true
        },
        assets: {
            glb: {
                monkey: _assets_mesh_high_res_monkey_glb__rspack_import_2
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/points-cloud.demo.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, this);
}
function makeDataset(glb) {
    var dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        POSITION: "vec4"
    });
    glb.setAttrib(dataset, "POSITION");
    var set = dataset.getAttribAccessor("POSITION").set;
    var count = dataset.count;
    var radius = 0.01;
    for(var i = 0; i < count; i++){
        set(radius, i, 3);
    }
    return dataset;
}
function makeUV(glb) {
    var uvs = [];
    var dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        NORMAL: "vec4"
    });
    glb.setAttrib(dataset, "NORMAL");
    var get = dataset.getAttribAccessor("NORMAL").get;
    var count = dataset.count;
    for(var i = 0; i < count; i++){
        var nx = get(i, 0);
        var ny = get(i, 1);
        // const nz = get(i, 2);
        var u = 0.5 * (1 + nx);
        var v = 0.5 * (1 + ny);
        uvs.push(u, v);
    }
    return uvs;
}
function createPalette() {
    var colors = [];
    var S = 1;
    for(var _i = 0, _iter = [
        0.1,
        0.5,
        0.9
    ]; _i < _iter.length; _i++){
        var L = _iter[_i];
        for(var _i1 = 0, _iter1 = [
            0,
            0.2,
            0.4,
            0.6,
            0.8,
            1
        ]; _i1 < _iter1.length; _i1++){
            var H = _iter1[_i1];
            colors.push(_tolokoban_tgd__rspack_import_1.TgdColor.fromHSL(H, S, L));
        }
    }
    return (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)(colors, 6);
}


},
77237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _points_cloud_demo__rspack_import_4 = __webpack_require__(67557);
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
    "Detail #1": "\tcontext.camera = new TgdCameraOrthographic()\n\tcontext.execBeforeNextPaint(() => {\n\t\tconst radius = 1.6\n\t\tcontext.camera.fitBoundingBox(\n\t\t\tnew TgdBoundingBox().addSphere(0, 0, 0, radius),\n\t\t)\n\t})\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 10,\n\t\tminZoom: 0.2,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n\tconst dataset = makeDataset(assets.glb.monkeyLow)\n\tconst dataPoint = new Float32Array(dataset.data)\n\tconst dataUV = new Float32Array(makeUV(assets.glb.monkeyLow).data)\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint,\n\t\tdataUV,\n\t\ttexture,\n        minSizeInPixels: 16\n\t})\n    cloud.debug()\n\tconst material = new TgdMaterialFlatTexture({\n\t\ttexture,\n\t})\n\tconst mesh = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.monkeyHigh,\n\t\tmaterial,\n\t})\n\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [mesh, cloud],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()"
};
var FULL = "import {\n\tTgdBoundingBox,\n\tTgdCameraOrthographic,\n\tTgdColor,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdDataGlb,\n\tTgdDataset,\n\tTgdGeometryBox,\n\tTgdMaterialFaceOrientation,\n\tTgdMaterialFlatTexture,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterMeshGltf,\n\tTgdPainterPointsCloud,\n\tTgdPainterPointsCloudMorphing,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdCanvasCreatePalette,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport TextureURL from \"@/assets/image/suzanne-baked.webp\"\n\nimport MonkeyHighURL from \"@/assets/mesh/suzanne.glb\"\nimport MonkeyLowURL from \"@/assets/mesh/suzanne-low.glb\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconsole.log(\"🐞 [points-cloud.demo@27] assets =\", assets) // @FIXME: Remove this line written on 2026-06-16 at 16:50\n\tcontext.camera = new TgdCameraOrthographic()\n\tcontext.execBeforeNextPaint(() => {\n\t\tconst radius = 1.6\n\t\tcontext.camera.fitBoundingBox(\n\t\t\tnew TgdBoundingBox().addSphere(0, 0, 0, radius),\n\t\t)\n\t})\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 10,\n\t\tminZoom: 0.2,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n\tconst dataset = makeDataset(assets.glb.monkeyLow)\n\tconst dataPoint = new Float32Array(dataset.data)\n\tconst dataUV = new Float32Array(makeUV(assets.glb.monkeyLow).data)\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint,\n\t\tdataUV,\n\t\ttexture,\n        minSizeInPixels: 16\n\t})\n    cloud.debug()\n\tconst material = new TgdMaterialFlatTexture({\n\t\ttexture,\n\t})\n\tconst mesh = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.monkeyHigh,\n\t\tmaterial,\n\t})\n\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [mesh, cloud],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()\n\treturn (settings: Record<string, number>) => {\n\t\tcloud.radiusMultiplier = settings.radiusMultiplier\n\t\tcloud.minSizeInPixels = settings.minSizeInPixels\n\t\tcloud.shadowIntensity = settings.shadowIntensity\n\t\tcloud.shadowThickness = settings.shadowThickness\n\t\tcloud.specularExponent = settings.specularExponent\n\t\tcloud.specularIntensity = settings.specularIntensity\n\t\tcloud.light = settings.light\n\t\tcontext.paint()\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\tassets={{\n\t\t\t\tglb: {\n\t\t\t\t\tmonkeyHigh: MonkeyHighURL,\n\t\t\t\t\tmonkeyLow: MonkeyLowURL,\n\t\t\t\t},\n\t\t\t\timage: {\n\t\t\t\t\ttexture: TextureURL,\n\t\t\t\t},\n\t\t\t}}\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tradiusMultiplier: {\n\t\t\t\t\tlabel: \"radiusMultiplier\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: 0.5,\n\t\t\t\t\tmax: 2,\n\t\t\t\t},\n                minSizeInPixels: {\n                    label: \"minSizeInPixels\",\n                    value: 16,\n                    min: 1,\n                    max: 64\n                },\n\t\t\t\tshadowIntensity: {\n\t\t\t\t\tlabel: \"shadowIntensity\",\n\t\t\t\t\tvalue: 0.75,\n\t\t\t\t},\n\t\t\t\tshadowThickness: {\n\t\t\t\t\tlabel: \"shadowThickness\",\n\t\t\t\t\tvalue: 1.2,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 2,\n\t\t\t\t},\n\t\t\t\tspecularExponent: {\n\t\t\t\t\tlabel: \"specularExponent\",\n\t\t\t\t\tvalue: 14,\n\t\t\t\t\tmin: -10,\n\t\t\t\t\tmax: 30,\n\t\t\t\t},\n\t\t\t\tspecularIntensity: {\n\t\t\t\t\tlabel: \"specularIntensity\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t},\n\t\t\t\tlight: {\n\t\t\t\t\tlabel: \"light\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: -1,\n\t\t\t\t\tmax: +3,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t)\n}\n\nfunction createPalette() {\n\tconst colors: TgdColor[] = []\n\tconst S = 0.5\n\tconst L = 0.4\n\tfor (const H of [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]) {\n\t\tcolors.push(TgdColor.fromHSL(H, S, L))\n\t}\n\treturn tgdCanvasCreatePalette(colors)\n}\n\nfunction makeDataset(glb: TgdDataGlb) {\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t})\n\tglb.setAttrib(dataset, \"POSITION\")\n\tconst { set } = dataset.getAttribAccessor(\"POSITION\")\n\tconst count = dataset.count\n\tconst radius = 0.05\n\tfor (let i = 0; i < count; i++) {\n\t\tset(radius, i, 3)\n\t}\n\treturn dataset\n}\n\nfunction makeUV(glb: TgdDataGlb) {\n\tconst dataset = new TgdDataset({\n\t\tTEXCOORD_0: \"vec2\",\n\t})\n\tglb.setAttrib(dataset, \"TEXCOORD_0\")\n\tdataset.debug()\n\treturn dataset\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
67557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _assets_image_suzanne_baked_webp__rspack_import_2 = __webpack_require__(10103);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_3 = __webpack_require__(21278);
/* import */ var _assets_mesh_suzanne_low_glb__rspack_import_4 = __webpack_require__(98771);
/* import */ var _components_demo_Tgd__rspack_import_5 = __webpack_require__(43475);






function init(context, assets) {
    console.log("🐞 [points-cloud.demo@27] assets =", assets); // @FIXME: Remove this line written on 2026-06-16 at 16:50
    // #begin
    context.camera = new _tolokoban_tgd__rspack_import_1.TgdCameraOrthographic();
    context.execBeforeNextPaint(function() {
        var radius = 1.6;
        context.camera.fitBoundingBox(new _tolokoban_tgd__rspack_import_1.TgdBoundingBox().addSphere(0, 0, 0, radius));
    });
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        maxZoom: 10,
        minZoom: 0.2,
        speedZoom: 1
    });
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.1,
            0.2,
            0.3,
            1
        ],
        depth: 1
    });
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.texture);
    var dataset = makeDataset(assets.glb.monkeyLow);
    var dataPoint = new Float32Array(dataset.data);
    var dataUV = new Float32Array(makeUV(assets.glb.monkeyLow).data);
    var cloud = new _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloud(context, {
        dataPoint: dataPoint,
        dataUV: dataUV,
        texture: texture,
        minSizeInPixels: 16
    });
    cloud.debug();
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialFlatTexture({
        texture: texture
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.monkeyHigh,
        material: material
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            mesh,
            cloud
        ]
    });
    context.add(clear, state);
    context.paint();
    // #end
    return function(settings) {
        cloud.radiusMultiplier = settings.radiusMultiplier;
        cloud.minSizeInPixels = settings.minSizeInPixels;
        cloud.shadowIntensity = settings.shadowIntensity;
        cloud.shadowThickness = settings.shadowThickness;
        cloud.specularExponent = settings.specularExponent;
        cloud.specularIntensity = settings.specularIntensity;
        cloud.light = settings.light;
        context.paint();
    };
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_5["default"], {
        onReady: init,
        gizmo: true,
        assets: {
            glb: {
                monkeyHigh: _assets_mesh_suzanne_glb__rspack_import_3,
                monkeyLow: _assets_mesh_suzanne_low_glb__rspack_import_4
            },
            image: {
                texture: _assets_image_suzanne_baked_webp__rspack_import_2
            }
        },
        options: {
            preserveDrawingBuffer: true
        },
        settings: {
            radiusMultiplier: {
                label: "radiusMultiplier",
                value: 1,
                min: 0.5,
                max: 2
            },
            minSizeInPixels: {
                label: "minSizeInPixels",
                value: 16,
                min: 1,
                max: 64
            },
            shadowIntensity: {
                label: "shadowIntensity",
                value: 0.75
            },
            shadowThickness: {
                label: "shadowThickness",
                value: 1.2,
                min: 0,
                max: 2
            },
            specularExponent: {
                label: "specularExponent",
                value: 14,
                min: -10,
                max: 30
            },
            specularIntensity: {
                label: "specularIntensity",
                value: 1
            },
            light: {
                label: "light",
                value: 1,
                min: -1,
                max: +3
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/points-cloud.demo.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this);
}
function createPalette() {
    var colors = [];
    var S = 0.5;
    var L = 0.4;
    for(var _i = 0, _iter = [
        0,
        0.1,
        0.2,
        0.3,
        0.4,
        0.5,
        0.6,
        0.7,
        0.8,
        0.9
    ]; _i < _iter.length; _i++){
        var H = _iter[_i];
        colors.push(_tolokoban_tgd__rspack_import_1.TgdColor.fromHSL(H, S, L));
    }
    return (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)(colors);
}
function makeDataset(glb) {
    var dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        POSITION: "vec4"
    });
    glb.setAttrib(dataset, "POSITION");
    var set = dataset.getAttribAccessor("POSITION").set;
    var count = dataset.count;
    var radius = 0.05;
    for(var i = 0; i < count; i++){
        set(radius, i, 3);
    }
    return dataset;
}
function makeUV(glb) {
    var dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        TEXCOORD_0: "vec2"
    });
    glb.setAttrib(dataset, "TEXCOORD_0");
    dataset.debug();
    return dataset;
}


},
66100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _points_cloud_demo__rspack_import_1 = __webpack_require__(77237);
/* import */ var _many_demo__rspack_import_2 = __webpack_require__(34645);
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
        h1: "h1",
        h2: "h2",
        h3: "h3",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Points Clouds"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Default options"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h3, {
                children: "Few spheres"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h3, {
                children: "Many spheres"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Here, we display 503'808 spheres."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_many_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 16,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wb2ludHMtY2xvdWRfdmFyaWFudF9kZWZhdWx0X3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlci0yZjRiNDQuMWVjMmQ2MTUwMWM1YWIxNS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L2RlZmF1bHQvXy9tYW55LmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L2RlZmF1bHQvXy9tYW55LmRlbW8vcG9pbnRzLWNsb3VkLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L2RlZmF1bHQvXy9wb2ludHMtY2xvdWQuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL3ZhcmlhbnQvZGVmYXVsdC9fL3BvaW50cy1jbG91ZC5kZW1vL3BvaW50cy1jbG91ZC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvdmFyaWFudC9kZWZhdWx0L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9wb2ludHMtY2xvdWQuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJcXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNTtcXG5cXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0bWF4Wm9vbTogNSxcXG5cXHRcXHRtaW5ab29tOiAwLjUsXFxuXFx0XFx0c3BlZWRab29tOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuXFx0XFx0cGFyYW1zOiB7XFxuXFx0XFx0XFx0bWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcblxcdFxcdFxcdHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0XFx0d3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHR9LFxcblxcdH0pLmxvYWRCaXRtYXAoY3JlYXRlUGFsZXR0ZSgpKTtcXG5cXHRjb25zdCBkYXRhc2V0ID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkpO1xcblxcdGNvbnNvbGUubG9nKFxcXCLwn5CeIFtwb2ludHMtY2xvdWQuZGVtb0A1Ml0gZGF0YXNldC5jb3VudCA9XFxcIiwgZGF0YXNldC5jb3VudCk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDYtMDIgYXQgMTU6MDdcXG5cXHRjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xcblxcdFxcdGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxcblxcdFxcdGRhdGFVVjogbmV3IEZsb2F0MzJBcnJheShtYWtlVVYoYXNzZXRzLmdsYi5tb25rZXkpKSxcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdH0pO1xcblxcdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRjaGlsZHJlbjogW2Nsb3VkXSxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0VGdkQ29sb3IsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHR0eXBlIFRnZERhdGFHbGIsXFxuXFx0VGdkRGF0YXNldCxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlclBvaW50c0Nsb3VkLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxuXFx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcbmltcG9ydCBNb25rZXlVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXFxcIjtcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1O1xcblxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcblxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRtYXhab29tOiA1LFxcblxcdFxcdG1pblpvb206IDAuNSxcXG5cXHRcXHRzcGVlZFpvb206IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRwYXJhbXM6IHtcXG5cXHRcXHRcXHRtaW5GaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0d3JhcFM6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHRcXHR3cmFwVDogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdH0sXFxuXFx0fSkubG9hZEJpdG1hcChjcmVhdGVQYWxldHRlKCkpO1xcblxcdGNvbnN0IGRhdGFzZXQgPSBtYWtlRGF0YXNldChhc3NldHMuZ2xiLm1vbmtleSk7XFxuXFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW3BvaW50cy1jbG91ZC5kZW1vQDUyXSBkYXRhc2V0LmNvdW50ID1cXFwiLCBkYXRhc2V0LmNvdW50KTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNi0wMiBhdCAxNTowN1xcblxcdGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XFxuXFx0XFx0ZGF0YVBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSksXFxuXFx0XFx0ZGF0YVVWOiBuZXcgRmxvYXQzMkFycmF5KG1ha2VVVihhc3NldHMuZ2xiLm1vbmtleSkpLFxcblxcdFxcdHRleHR1cmUsXFxuXFx0fSk7XFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbY2xvdWRdLFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XFxuXFx0Y29udGV4dC5wYWludCgpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdHJldHVybiAoXFxuXFx0XFx0PFZpZXdcXG5cXHRcXHRcXHRvblJlYWR5PXtpbml0fVxcblxcdFxcdFxcdGdpem1vXFxuXFx0XFx0XFx0b3B0aW9ucz17e1xcblxcdFxcdFxcdFxcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdGFzc2V0cz17e1xcblxcdFxcdFxcdFxcdGdsYjogeyBtb25rZXk6IE1vbmtleVVSTCB9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpO1xcbn1cXG5cXG5mdW5jdGlvbiBtYWtlRGF0YXNldChnbGI6IFRnZERhdGFHbGIpIHtcXG5cXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcblxcdFxcdFBPU0lUSU9OOiBcXFwidmVjNFxcXCIsXFxuXFx0fSk7XFxuXFx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcXFwiUE9TSVRJT05cXFwiKTtcXG5cXHRjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcXFwiUE9TSVRJT05cXFwiKTtcXG5cXHRjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnQ7XFxuXFx0Y29uc3QgcmFkaXVzID0gMC4wMTtcXG5cXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG5cXHRcXHRzZXQocmFkaXVzLCBpLCAzKTtcXG5cXHR9XFxuXFx0cmV0dXJuIGRhdGFzZXQ7XFxufVxcblxcbmZ1bmN0aW9uIG1ha2VVVihnbGI6IFRnZERhdGFHbGIpIHtcXG5cXHRjb25zdCB1dnM6IG51bWJlcltdID0gW107XFxuXFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG5cXHRcXHROT1JNQUw6IFxcXCJ2ZWM0XFxcIixcXG5cXHR9KTtcXG5cXHRnbGIuc2V0QXR0cmliKGRhdGFzZXQsIFxcXCJOT1JNQUxcXFwiKTtcXG5cXHRjb25zdCB7IGdldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcXFwiTk9STUFMXFxcIik7XFxuXFx0Y29uc3QgY291bnQgPSBkYXRhc2V0LmNvdW50O1xcblxcdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcblxcdFxcdGNvbnN0IG54ID0gZ2V0KGksIDApO1xcblxcdFxcdGNvbnN0IG55ID0gZ2V0KGksIDEpO1xcblxcdFxcdC8vIGNvbnN0IG56ID0gZ2V0KGksIDIpO1xcblxcdFxcdGNvbnN0IHUgPSAwLjUgKiAoMSArIG54KTtcXG5cXHRcXHRjb25zdCB2ID0gMC41ICogKDEgKyBueSk7XFxuXFx0XFx0dXZzLnB1c2godSwgdik7XFxuXFx0fVxcblxcdHJldHVybiB1dnM7XFxufVxcblxcbmZ1bmN0aW9uIGNyZWF0ZVBhbGV0dGUoKSB7XFxuXFx0Y29uc3QgY29sb3JzOiBUZ2RDb2xvcltdID0gW107XFxuXFx0Y29uc3QgUyA9IDE7XFxuXFx0Zm9yIChjb25zdCBMIG9mIFswLjEsIDAuNSwgMC45XSkge1xcblxcdFxcdGZvciAoY29uc3QgSCBvZiBbMCwgMC4yLCAwLjQsIDAuNiwgMC44LCAxXSkge1xcblxcdFxcdFxcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0woSCwgUywgTCkpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0cmV0dXJuIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoY29sb3JzLCA2KTtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdFRnZENvbG9yLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcblx0dHlwZSBUZ2REYXRhR2xiLFxuXHRUZ2REYXRhc2V0LFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJQb2ludHNDbG91ZCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IE1vbmtleVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW5cblx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDU7XG5cdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRtYXhab29tOiA1LFxuXHRcdG1pblpvb206IDAuNSxcblx0XHRzcGVlZFpvb206IDEsXG5cdH0pO1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXG5cdFx0ZGVwdGg6IDEsXG5cdH0pO1xuXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG5cdFx0cGFyYW1zOiB7XG5cdFx0XHRtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG5cdFx0XHRtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG5cdFx0XHR3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXG5cdFx0XHR3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXG5cdFx0fSxcblx0fSkubG9hZEJpdG1hcChjcmVhdGVQYWxldHRlKCkpO1xuXHRjb25zdCBkYXRhc2V0ID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkpO1xuXHRjb25zb2xlLmxvZyhcIvCfkJ4gW3BvaW50cy1jbG91ZC5kZW1vQDUyXSBkYXRhc2V0LmNvdW50ID1cIiwgZGF0YXNldC5jb3VudCk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDYtMDIgYXQgMTU6MDdcblx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcblx0XHRkYXRhUG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKSxcblx0XHRkYXRhVVY6IG5ldyBGbG9hdDMyQXJyYXkobWFrZVVWKGFzc2V0cy5nbGIubW9ua2V5KSksXG5cdFx0dGV4dHVyZSxcblx0fSk7XG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRjaGlsZHJlbjogW2Nsb3VkXSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XG5cdGNvbnRleHQucGFpbnQoKTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0Z2l6bW9cblx0XHRcdG9wdGlvbnM9e3tcblx0XHRcdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdFx0fX1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHsgbW9ua2V5OiBNb25rZXlVUkwgfSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0UE9TSVRJT046IFwidmVjNFwiLFxuXHR9KTtcblx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcIlBPU0lUSU9OXCIpO1xuXHRjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcIlBPU0lUSU9OXCIpO1xuXHRjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnQ7XG5cdGNvbnN0IHJhZGl1cyA9IDAuMDE7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdHNldChyYWRpdXMsIGksIDMpO1xuXHR9XG5cdHJldHVybiBkYXRhc2V0O1xufVxuXG5mdW5jdGlvbiBtYWtlVVYoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IHV2czogbnVtYmVyW10gPSBbXTtcblx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHROT1JNQUw6IFwidmVjNFwiLFxuXHR9KTtcblx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcIk5PUk1BTFwiKTtcblx0Y29uc3QgeyBnZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXCJOT1JNQUxcIik7XG5cdGNvbnN0IGNvdW50ID0gZGF0YXNldC5jb3VudDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0Y29uc3QgbnggPSBnZXQoaSwgMCk7XG5cdFx0Y29uc3QgbnkgPSBnZXQoaSwgMSk7XG5cdFx0Ly8gY29uc3QgbnogPSBnZXQoaSwgMik7XG5cdFx0Y29uc3QgdSA9IDAuNSAqICgxICsgbngpO1xuXHRcdGNvbnN0IHYgPSAwLjUgKiAoMSArIG55KTtcblx0XHR1dnMucHVzaCh1LCB2KTtcblx0fVxuXHRyZXR1cm4gdXZzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWxldHRlKCkge1xuXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXTtcblx0Y29uc3QgUyA9IDE7XG5cdGZvciAoY29uc3QgTCBvZiBbMC4xLCAwLjUsIDAuOV0pIHtcblx0XHRmb3IgKGNvbnN0IEggb2YgWzAsIDAuMiwgMC40LCAwLjYsIDAuOCwgMV0pIHtcblx0XHRcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0woSCwgUywgTCkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMsIDYpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3BvaW50cy1jbG91ZC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIlxcdGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYygpXFxuXFx0Y29udGV4dC5leGVjQmVmb3JlTmV4dFBhaW50KCgpID0+IHtcXG5cXHRcXHRjb25zdCByYWRpdXMgPSAxLjZcXG5cXHRcXHRjb250ZXh0LmNhbWVyYS5maXRCb3VuZGluZ0JveChcXG5cXHRcXHRcXHRuZXcgVGdkQm91bmRpbmdCb3goKS5hZGRTcGhlcmUoMCwgMCwgMCwgcmFkaXVzKSxcXG5cXHRcXHQpXFxuXFx0fSlcXG5cXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0bWF4Wm9vbTogMTAsXFxuXFx0XFx0bWluWm9vbTogMC4yLFxcblxcdFxcdHNwZWVkWm9vbTogMSxcXG5cXHR9KVxcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KVxcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLnRleHR1cmUpXFxuXFx0Y29uc3QgZGF0YXNldCA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5TG93KVxcblxcdGNvbnN0IGRhdGFQb2ludCA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKVxcblxcdGNvbnN0IGRhdGFVViA9IG5ldyBGbG9hdDMyQXJyYXkobWFrZVVWKGFzc2V0cy5nbGIubW9ua2V5TG93KS5kYXRhKVxcblxcdGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XFxuXFx0XFx0ZGF0YVBvaW50LFxcblxcdFxcdGRhdGFVVixcXG5cXHRcXHR0ZXh0dXJlLFxcbiAgICAgICAgbWluU2l6ZUluUGl4ZWxzOiAxNlxcblxcdH0pXFxuICAgIGNsb3VkLmRlYnVnKClcXG5cXHRjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHtcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdH0pXFxuXFx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLm1vbmtleUhpZ2gsXFxuXFx0XFx0bWF0ZXJpYWwsXFxuXFx0fSlcXG5cXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0Y2hpbGRyZW46IFttZXNoLCBjbG91ZF0sXFxuXFx0fSlcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXFxuXFx0Y29udGV4dC5wYWludCgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdFRnZEJvdW5kaW5nQm94LFxcblxcdFRnZENhbWVyYU9ydGhvZ3JhcGhpYyxcXG5cXHRUZ2RDb2xvcixcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcblxcdFRnZERhdGFHbGIsXFxuXFx0VGdkRGF0YXNldCxcXG5cXHRUZ2RHZW9tZXRyeUJveCxcXG5cXHRUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcXG5cXHRUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyTWVzaCxcXG5cXHRUZ2RQYWludGVyTWVzaEdsdGYsXFxuXFx0VGdkUGFpbnRlclBvaW50c0Nsb3VkLFxcblxcdFRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxuXFx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFRleHR1cmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvaW1hZ2Uvc3V6YW5uZS1iYWtlZC53ZWJwXFxcIlxcblxcbmltcG9ydCBNb25rZXlIaWdoVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcXFwiXFxuaW1wb3J0IE1vbmtleUxvd1VSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUtbG93LmdsYlxcXCJcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnNvbGUubG9nKFxcXCLwn5CeIFtwb2ludHMtY2xvdWQuZGVtb0AyN10gYXNzZXRzID1cXFwiLCBhc3NldHMpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDYtMTYgYXQgMTY6NTBcXG5cXHRjb250ZXh0LmNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoKVxcblxcdGNvbnRleHQuZXhlY0JlZm9yZU5leHRQYWludCgoKSA9PiB7XFxuXFx0XFx0Y29uc3QgcmFkaXVzID0gMS42XFxuXFx0XFx0Y29udGV4dC5jYW1lcmEuZml0Qm91bmRpbmdCb3goXFxuXFx0XFx0XFx0bmV3IFRnZEJvdW5kaW5nQm94KCkuYWRkU3BoZXJlKDAsIDAsIDAsIHJhZGl1cyksXFxuXFx0XFx0KVxcblxcdH0pXFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdG1heFpvb206IDEwLFxcblxcdFxcdG1pblpvb206IDAuMixcXG5cXHRcXHRzcGVlZFpvb206IDEsXFxuXFx0fSlcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuXFx0XFx0ZGVwdGg6IDEsXFxuXFx0fSlcXG5cXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS50ZXh0dXJlKVxcblxcdGNvbnN0IGRhdGFzZXQgPSBtYWtlRGF0YXNldChhc3NldHMuZ2xiLm1vbmtleUxvdylcXG5cXHRjb25zdCBkYXRhUG9pbnQgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSlcXG5cXHRjb25zdCBkYXRhVVYgPSBuZXcgRmxvYXQzMkFycmF5KG1ha2VVVihhc3NldHMuZ2xiLm1vbmtleUxvdykuZGF0YSlcXG5cXHRjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xcblxcdFxcdGRhdGFQb2ludCxcXG5cXHRcXHRkYXRhVVYsXFxuXFx0XFx0dGV4dHVyZSxcXG4gICAgICAgIG1pblNpemVJblBpeGVsczogMTZcXG5cXHR9KVxcbiAgICBjbG91ZC5kZWJ1ZygpXFxuXFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XFxuXFx0XFx0dGV4dHVyZSxcXG5cXHR9KVxcblxcdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG5cXHRcXHRhc3NldDogYXNzZXRzLmdsYi5tb25rZXlIaWdoLFxcblxcdFxcdG1hdGVyaWFsLFxcblxcdH0pXFxuXFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbbWVzaCwgY2xvdWRdLFxcblxcdH0pXFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcblxcdGNvbnRleHQucGFpbnQoKVxcblxcdHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcXG5cXHRcXHRjbG91ZC5yYWRpdXNNdWx0aXBsaWVyID0gc2V0dGluZ3MucmFkaXVzTXVsdGlwbGllclxcblxcdFxcdGNsb3VkLm1pblNpemVJblBpeGVscyA9IHNldHRpbmdzLm1pblNpemVJblBpeGVsc1xcblxcdFxcdGNsb3VkLnNoYWRvd0ludGVuc2l0eSA9IHNldHRpbmdzLnNoYWRvd0ludGVuc2l0eVxcblxcdFxcdGNsb3VkLnNoYWRvd1RoaWNrbmVzcyA9IHNldHRpbmdzLnNoYWRvd1RoaWNrbmVzc1xcblxcdFxcdGNsb3VkLnNwZWN1bGFyRXhwb25lbnQgPSBzZXR0aW5ncy5zcGVjdWxhckV4cG9uZW50XFxuXFx0XFx0Y2xvdWQuc3BlY3VsYXJJbnRlbnNpdHkgPSBzZXR0aW5ncy5zcGVjdWxhckludGVuc2l0eVxcblxcdFxcdGNsb3VkLmxpZ2h0ID0gc2V0dGluZ3MubGlnaHRcXG5cXHRcXHRjb250ZXh0LnBhaW50KClcXG5cXHR9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0Z2l6bW9cXG5cXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRnbGI6IHtcXG5cXHRcXHRcXHRcXHRcXHRtb25rZXlIaWdoOiBNb25rZXlIaWdoVVJMLFxcblxcdFxcdFxcdFxcdFxcdG1vbmtleUxvdzogTW9ua2V5TG93VVJMLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0aW1hZ2U6IHtcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0dXJlOiBUZXh0dXJlVVJMLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRvcHRpb25zPXt7XFxuXFx0XFx0XFx0XFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcblxcdFxcdFxcdH19XFxuXFx0XFx0XFx0c2V0dGluZ3M9e3tcXG5cXHRcXHRcXHRcXHRyYWRpdXNNdWx0aXBsaWVyOiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJyYWRpdXNNdWx0aXBsaWVyXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMSxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IDAuNSxcXG5cXHRcXHRcXHRcXHRcXHRtYXg6IDIsXFxuXFx0XFx0XFx0XFx0fSxcXG4gICAgICAgICAgICAgICAgbWluU2l6ZUluUGl4ZWxzOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcIm1pblNpemVJblBpeGVsc1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTYsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDEsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDY0XFxuICAgICAgICAgICAgICAgIH0sXFxuXFx0XFx0XFx0XFx0c2hhZG93SW50ZW5zaXR5OiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJzaGFkb3dJbnRlbnNpdHlcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAwLjc1LFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0c2hhZG93VGhpY2tuZXNzOiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJzaGFkb3dUaGlja25lc3NcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLjIsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAwLFxcblxcdFxcdFxcdFxcdFxcdG1heDogMixcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHNwZWN1bGFyRXhwb25lbnQ6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcInNwZWN1bGFyRXhwb25lbnRcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxNCxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IC0xMCxcXG5cXHRcXHRcXHRcXHRcXHRtYXg6IDMwLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0c3BlY3VsYXJJbnRlbnNpdHk6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcInNwZWN1bGFySW50ZW5zaXR5XFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdGxpZ2h0OiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJsaWdodFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDEsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAtMSxcXG5cXHRcXHRcXHRcXHRcXHRtYXg6ICszLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHQvPlxcblxcdClcXG59XFxuXFxuZnVuY3Rpb24gY3JlYXRlUGFsZXR0ZSgpIHtcXG5cXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXVxcblxcdGNvbnN0IFMgPSAwLjVcXG5cXHRjb25zdCBMID0gMC40XFxuXFx0Zm9yIChjb25zdCBIIG9mIFswLCAwLjEsIDAuMiwgMC4zLCAwLjQsIDAuNSwgMC42LCAwLjcsIDAuOCwgMC45XSkge1xcblxcdFxcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0woSCwgUywgTCkpXFxuXFx0fVxcblxcdHJldHVybiB0Z2RDYW52YXNDcmVhdGVQYWxldHRlKGNvbG9ycylcXG59XFxuXFxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XFxuXFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG5cXHRcXHRQT1NJVElPTjogXFxcInZlYzRcXFwiLFxcblxcdH0pXFxuXFx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcXFwiUE9TSVRJT05cXFwiKVxcblxcdGNvbnN0IHsgc2V0IH0gPSBkYXRhc2V0LmdldEF0dHJpYkFjY2Vzc29yKFxcXCJQT1NJVElPTlxcXCIpXFxuXFx0Y29uc3QgY291bnQgPSBkYXRhc2V0LmNvdW50XFxuXFx0Y29uc3QgcmFkaXVzID0gMC4wNVxcblxcdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcblxcdFxcdHNldChyYWRpdXMsIGksIDMpXFxuXFx0fVxcblxcdHJldHVybiBkYXRhc2V0XFxufVxcblxcbmZ1bmN0aW9uIG1ha2VVVihnbGI6IFRnZERhdGFHbGIpIHtcXG5cXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcblxcdFxcdFRFWENPT1JEXzA6IFxcXCJ2ZWMyXFxcIixcXG5cXHR9KVxcblxcdGdsYi5zZXRBdHRyaWIoZGF0YXNldCwgXFxcIlRFWENPT1JEXzBcXFwiKVxcblxcdGRhdGFzZXQuZGVidWcoKVxcblxcdHJldHVybiBkYXRhc2V0XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHRUZ2RCb3VuZGluZ0JveCxcblx0VGdkQ2FtZXJhT3J0aG9ncmFwaGljLFxuXHRUZ2RDb2xvcixcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdFRnZERhdGFHbGIsXG5cdFRnZERhdGFzZXQsXG5cdFRnZEdlb21ldHJ5Qm94LFxuXHRUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcblx0VGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlck1lc2hHbHRmLFxuXHRUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXG5cdFRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcblx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBUZXh0dXJlVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS9zdXphbm5lLWJha2VkLndlYnBcIlxuXG5pbXBvcnQgTW9ua2V5SGlnaFVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5pbXBvcnQgTW9ua2V5TG93VVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUtbG93LmdsYlwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHRjb25zb2xlLmxvZyhcIvCfkJ4gW3BvaW50cy1jbG91ZC5kZW1vQDI3XSBhc3NldHMgPVwiLCBhc3NldHMpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDYtMTYgYXQgMTY6NTBcblx0Ly8gI2JlZ2luXG5cdGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYygpXG5cdGNvbnRleHQuZXhlY0JlZm9yZU5leHRQYWludCgoKSA9PiB7XG5cdFx0Y29uc3QgcmFkaXVzID0gMS42XG5cdFx0Y29udGV4dC5jYW1lcmEuZml0Qm91bmRpbmdCb3goXG5cdFx0XHRuZXcgVGdkQm91bmRpbmdCb3goKS5hZGRTcGhlcmUoMCwgMCwgMCwgcmFkaXVzKSxcblx0XHQpXG5cdH0pXG5cdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRtYXhab29tOiAxMCxcblx0XHRtaW5ab29tOiAwLjIsXG5cdFx0c3BlZWRab29tOiAxLFxuXHR9KVxuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXG5cdFx0ZGVwdGg6IDEsXG5cdH0pXG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLnRleHR1cmUpXG5cdGNvbnN0IGRhdGFzZXQgPSBtYWtlRGF0YXNldChhc3NldHMuZ2xiLm1vbmtleUxvdylcblx0Y29uc3QgZGF0YVBvaW50ID0gbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpXG5cdGNvbnN0IGRhdGFVViA9IG5ldyBGbG9hdDMyQXJyYXkobWFrZVVWKGFzc2V0cy5nbGIubW9ua2V5TG93KS5kYXRhKVxuXHRjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xuXHRcdGRhdGFQb2ludCxcblx0XHRkYXRhVVYsXG5cdFx0dGV4dHVyZSxcbiAgICAgICAgbWluU2l6ZUluUGl4ZWxzOiAxNlxuXHR9KVxuICAgIGNsb3VkLmRlYnVnKClcblx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XG5cdFx0dGV4dHVyZSxcblx0fSlcblx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLm1vbmtleUhpZ2gsXG5cdFx0bWF0ZXJpYWwsXG5cdH0pXG5cblx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHRcdGNoaWxkcmVuOiBbbWVzaCwgY2xvdWRdLFxuXHR9KVxuXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXG5cdGNvbnRleHQucGFpbnQoKVxuXHQvLyAjZW5kXG5cdHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcblx0XHRjbG91ZC5yYWRpdXNNdWx0aXBsaWVyID0gc2V0dGluZ3MucmFkaXVzTXVsdGlwbGllclxuXHRcdGNsb3VkLm1pblNpemVJblBpeGVscyA9IHNldHRpbmdzLm1pblNpemVJblBpeGVsc1xuXHRcdGNsb3VkLnNoYWRvd0ludGVuc2l0eSA9IHNldHRpbmdzLnNoYWRvd0ludGVuc2l0eVxuXHRcdGNsb3VkLnNoYWRvd1RoaWNrbmVzcyA9IHNldHRpbmdzLnNoYWRvd1RoaWNrbmVzc1xuXHRcdGNsb3VkLnNwZWN1bGFyRXhwb25lbnQgPSBzZXR0aW5ncy5zcGVjdWxhckV4cG9uZW50XG5cdFx0Y2xvdWQuc3BlY3VsYXJJbnRlbnNpdHkgPSBzZXR0aW5ncy5zcGVjdWxhckludGVuc2l0eVxuXHRcdGNsb3VkLmxpZ2h0ID0gc2V0dGluZ3MubGlnaHRcblx0XHRjb250ZXh0LnBhaW50KClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0Z2l6bW9cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHtcblx0XHRcdFx0XHRtb25rZXlIaWdoOiBNb25rZXlIaWdoVVJMLFxuXHRcdFx0XHRcdG1vbmtleUxvdzogTW9ua2V5TG93VVJMLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbWFnZToge1xuXHRcdFx0XHRcdHRleHR1cmU6IFRleHR1cmVVUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdFx0b3B0aW9ucz17e1xuXHRcdFx0XHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG5cdFx0XHR9fVxuXHRcdFx0c2V0dGluZ3M9e3tcblx0XHRcdFx0cmFkaXVzTXVsdGlwbGllcjoge1xuXHRcdFx0XHRcdGxhYmVsOiBcInJhZGl1c011bHRpcGxpZXJcIixcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRtaW46IDAuNSxcblx0XHRcdFx0XHRtYXg6IDIsXG5cdFx0XHRcdH0sXG4gICAgICAgICAgICAgICAgbWluU2l6ZUluUGl4ZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1pblNpemVJblBpeGVsc1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTYsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA2NFxuICAgICAgICAgICAgICAgIH0sXG5cdFx0XHRcdHNoYWRvd0ludGVuc2l0eToge1xuXHRcdFx0XHRcdGxhYmVsOiBcInNoYWRvd0ludGVuc2l0eVwiLFxuXHRcdFx0XHRcdHZhbHVlOiAwLjc1LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzaGFkb3dUaGlja25lc3M6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJzaGFkb3dUaGlja25lc3NcIixcblx0XHRcdFx0XHR2YWx1ZTogMS4yLFxuXHRcdFx0XHRcdG1pbjogMCxcblx0XHRcdFx0XHRtYXg6IDIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNwZWN1bGFyRXhwb25lbnQ6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJzcGVjdWxhckV4cG9uZW50XCIsXG5cdFx0XHRcdFx0dmFsdWU6IDE0LFxuXHRcdFx0XHRcdG1pbjogLTEwLFxuXHRcdFx0XHRcdG1heDogMzAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNwZWN1bGFySW50ZW5zaXR5OiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwic3BlY3VsYXJJbnRlbnNpdHlcIixcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0bGlnaHQ6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJsaWdodFwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHRcdG1pbjogLTEsXG5cdFx0XHRcdFx0bWF4OiArMyxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWxldHRlKCkge1xuXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXVxuXHRjb25zdCBTID0gMC41XG5cdGNvbnN0IEwgPSAwLjRcblx0Zm9yIChjb25zdCBIIG9mIFswLCAwLjEsIDAuMiwgMC4zLCAwLjQsIDAuNSwgMC42LCAwLjcsIDAuOCwgMC45XSkge1xuXHRcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0woSCwgUywgTCkpXG5cdH1cblx0cmV0dXJuIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoY29sb3JzKVxufVxuXG5mdW5jdGlvbiBtYWtlRGF0YXNldChnbGI6IFRnZERhdGFHbGIpIHtcblx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHRQT1NJVElPTjogXCJ2ZWM0XCIsXG5cdH0pXG5cdGdsYi5zZXRBdHRyaWIoZGF0YXNldCwgXCJQT1NJVElPTlwiKVxuXHRjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcIlBPU0lUSU9OXCIpXG5cdGNvbnN0IGNvdW50ID0gZGF0YXNldC5jb3VudFxuXHRjb25zdCByYWRpdXMgPSAwLjA1XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdHNldChyYWRpdXMsIGksIDMpXG5cdH1cblx0cmV0dXJuIGRhdGFzZXRcbn1cblxuZnVuY3Rpb24gbWFrZVVWKGdsYjogVGdkRGF0YUdsYikge1xuXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuXHRcdFRFWENPT1JEXzA6IFwidmVjMlwiLFxuXHR9KVxuXHRnbGIuc2V0QXR0cmliKGRhdGFzZXQsIFwiVEVYQ09PUkRfMFwiKVxuXHRkYXRhc2V0LmRlYnVnKClcblx0cmV0dXJuIGRhdGFzZXRcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ29sb3IiLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2REYXRhc2V0IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlclBvaW50c0Nsb3VkIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwidGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJNb25rZXlVUkwiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjbGVhciIsInRleHR1cmUiLCJjcmVhdGVQYWxldHRlIiwiZGF0YXNldCIsIm1ha2VEYXRhc2V0IiwiY29uc29sZSIsImNsb3VkIiwiRmxvYXQzMkFycmF5IiwibWFrZVVWIiwic3RhdGUiLCJnbGIiLCJzZXQiLCJjb3VudCIsInJhZGl1cyIsImkiLCJ1dnMiLCJnZXQiLCJueCIsIm55IiwidSIsInYiLCJjb2xvcnMiLCJTIiwiX2l0ZXIiLCJMIiwiX2l0ZXIxIiwiSCIsIlRnZEJvdW5kaW5nQm94IiwiVGdkQ2FtZXJhT3J0aG9ncmFwaGljIiwiVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRleHR1cmVVUkwiLCJNb25rZXlIaWdoVVJMIiwiTW9ua2V5TG93VVJMIiwiZGF0YVBvaW50IiwiZGF0YVVWIiwibWF0ZXJpYWwiLCJtZXNoIiwic2V0dGluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ2Y7QUFFdEMsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBNGdDO0FBQ3ZpQyxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxP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