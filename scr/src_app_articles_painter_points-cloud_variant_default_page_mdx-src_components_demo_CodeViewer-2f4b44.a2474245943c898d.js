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
    "Detail #1": "\tcontext.camera = new TgdCameraOrthographic()\n\tcontext.execBeforeNextPaint(() => {\n\t\tconst radius = 1.6\n\t\tcontext.camera.fitBoundingBox(\n\t\t\tnew TgdBoundingBox().addSphere(0, 0, 0, radius),\n\t\t)\n\t})\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 10,\n\t\tminZoom: 0.2,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n\tconst dataset = makeDataset(assets.glb.monkeyLow)\n\tconst dataPoint = new Float32Array(dataset.data)\n\tconst dataUV = new Float32Array(makeUV(assets.glb.monkeyLow).data)\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint,\n\t\tdataUV,\n\t\ttexture,\n\t})\n\tconst material = new TgdMaterialFlatTexture({\n\t\ttexture,\n\t})\n\tconst mesh = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.monkeyHigh,\n\t\tmaterial,\n\t})\n\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [mesh, cloud],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()"
};
var FULL = "import {\n\tTgdBoundingBox,\n\tTgdCameraOrthographic,\n\tTgdColor,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdDataGlb,\n\tTgdDataset,\n\tTgdGeometryBox,\n\tTgdMaterialFaceOrientation,\n\tTgdMaterialFlatTexture,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterMeshGltf,\n\tTgdPainterPointsCloud,\n\tTgdPainterPointsCloudMorphing,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdCanvasCreatePalette,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport TextureURL from \"@/assets/image/suzanne-baked.webp\"\n\nimport MonkeyHighURL from \"@/assets/mesh/suzanne.glb\"\nimport MonkeyLowURL from \"@/assets/mesh/suzanne-low.glb\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconsole.log(\"🐞 [points-cloud.demo@27] assets =\", assets) // @FIXME: Remove this line written on 2026-06-16 at 16:50\n\tcontext.camera = new TgdCameraOrthographic()\n\tcontext.execBeforeNextPaint(() => {\n\t\tconst radius = 1.6\n\t\tcontext.camera.fitBoundingBox(\n\t\t\tnew TgdBoundingBox().addSphere(0, 0, 0, radius),\n\t\t)\n\t})\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 10,\n\t\tminZoom: 0.2,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n\tconst dataset = makeDataset(assets.glb.monkeyLow)\n\tconst dataPoint = new Float32Array(dataset.data)\n\tconst dataUV = new Float32Array(makeUV(assets.glb.monkeyLow).data)\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint,\n\t\tdataUV,\n\t\ttexture,\n\t})\n\tconst material = new TgdMaterialFlatTexture({\n\t\ttexture,\n\t})\n\tconst mesh = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.monkeyHigh,\n\t\tmaterial,\n\t})\n\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [mesh, cloud],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()\n\treturn (settings: Record<string, number>) => {\n\t\tcloud.radiusMultiplier = settings.radiusMultiplier\n\t\tcloud.shadowIntensity = settings.shadowIntensity\n\t\tcloud.shadowThickness = settings.shadowThickness\n\t\tcloud.specularExponent = settings.specularExponent\n\t\tcloud.specularIntensity = settings.specularIntensity\n\t\tcloud.light = settings.light\n\t\tcontext.paint()\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\tassets={{\n\t\t\t\tglb: {\n\t\t\t\t\tmonkeyHigh: MonkeyHighURL,\n\t\t\t\t\tmonkeyLow: MonkeyLowURL,\n\t\t\t\t},\n\t\t\t\timage: {\n\t\t\t\t\ttexture: TextureURL,\n\t\t\t\t},\n\t\t\t}}\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tradiusMultiplier: {\n\t\t\t\t\tlabel: \"radiusMultiplier\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: 0.5,\n\t\t\t\t\tmax: 2,\n\t\t\t\t},\n\t\t\t\tshadowIntensity: {\n\t\t\t\t\tlabel: \"shadowIntensity\",\n\t\t\t\t\tvalue: 0.75,\n\t\t\t\t},\n\t\t\t\tshadowThickness: {\n\t\t\t\t\tlabel: \"shadowThickness\",\n\t\t\t\t\tvalue: 1.2,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 2,\n\t\t\t\t},\n\t\t\t\tspecularExponent: {\n\t\t\t\t\tlabel: \"specularExponent\",\n\t\t\t\t\tvalue: 14,\n\t\t\t\t\tmin: -10,\n\t\t\t\t\tmax: 30,\n\t\t\t\t},\n\t\t\t\tspecularIntensity: {\n\t\t\t\t\tlabel: \"specularIntensity\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t},\n\t\t\t\tlight: {\n\t\t\t\t\tlabel: \"light\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: -1,\n\t\t\t\t\tmax: +3,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t)\n}\n\nfunction createPalette() {\n\tconst colors: TgdColor[] = []\n\tconst S = 0.5\n\tconst L = 0.4\n\tfor (const H of [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]) {\n\t\tcolors.push(TgdColor.fromHSL(H, S, L))\n\t}\n\treturn tgdCanvasCreatePalette(colors)\n}\n\nfunction makeDataset(glb: TgdDataGlb) {\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t})\n\tglb.setAttrib(dataset, \"POSITION\")\n\tconst { set } = dataset.getAttribAccessor(\"POSITION\")\n\tconst count = dataset.count\n\tconst radius = 0.05\n\tfor (let i = 0; i < count; i++) {\n\t\tset(radius, i, 3)\n\t}\n\treturn dataset\n}\n\nfunction makeUV(glb: TgdDataGlb) {\n\tconst dataset = new TgdDataset({\n\t\tTEXCOORD_0: \"vec2\",\n\t})\n\tglb.setAttrib(dataset, \"TEXCOORD_0\")\n\tdataset.debug()\n\treturn dataset\n}\n";
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
        texture: texture
    });
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
        lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wb2ludHMtY2xvdWRfdmFyaWFudF9kZWZhdWx0X3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlci0yZjRiNDQuYTI0NzQyNDU5NDNjODk4ZC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L2RlZmF1bHQvXy9tYW55LmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L2RlZmF1bHQvXy9tYW55LmRlbW8vcG9pbnRzLWNsb3VkLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L2RlZmF1bHQvXy9wb2ludHMtY2xvdWQuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL3ZhcmlhbnQvZGVmYXVsdC9fL3BvaW50cy1jbG91ZC5kZW1vL3BvaW50cy1jbG91ZC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvdmFyaWFudC9kZWZhdWx0L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9wb2ludHMtY2xvdWQuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJcXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNTtcXG5cXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0bWF4Wm9vbTogNSxcXG5cXHRcXHRtaW5ab29tOiAwLjUsXFxuXFx0XFx0c3BlZWRab29tOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuXFx0XFx0cGFyYW1zOiB7XFxuXFx0XFx0XFx0bWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcblxcdFxcdFxcdHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0XFx0d3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHR9LFxcblxcdH0pLmxvYWRCaXRtYXAoY3JlYXRlUGFsZXR0ZSgpKTtcXG5cXHRjb25zdCBkYXRhc2V0ID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkpO1xcblxcdGNvbnNvbGUubG9nKFxcXCLwn5CeIFtwb2ludHMtY2xvdWQuZGVtb0A1Ml0gZGF0YXNldC5jb3VudCA9XFxcIiwgZGF0YXNldC5jb3VudCk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDYtMDIgYXQgMTU6MDdcXG5cXHRjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xcblxcdFxcdGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxcblxcdFxcdGRhdGFVVjogbmV3IEZsb2F0MzJBcnJheShtYWtlVVYoYXNzZXRzLmdsYi5tb25rZXkpKSxcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdH0pO1xcblxcdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRjaGlsZHJlbjogW2Nsb3VkXSxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0VGdkQ29sb3IsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHR0eXBlIFRnZERhdGFHbGIsXFxuXFx0VGdkRGF0YXNldCxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlclBvaW50c0Nsb3VkLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxuXFx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcbmltcG9ydCBNb25rZXlVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXFxcIjtcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1O1xcblxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcblxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRtYXhab29tOiA1LFxcblxcdFxcdG1pblpvb206IDAuNSxcXG5cXHRcXHRzcGVlZFpvb206IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRwYXJhbXM6IHtcXG5cXHRcXHRcXHRtaW5GaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0d3JhcFM6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHRcXHR3cmFwVDogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdH0sXFxuXFx0fSkubG9hZEJpdG1hcChjcmVhdGVQYWxldHRlKCkpO1xcblxcdGNvbnN0IGRhdGFzZXQgPSBtYWtlRGF0YXNldChhc3NldHMuZ2xiLm1vbmtleSk7XFxuXFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW3BvaW50cy1jbG91ZC5kZW1vQDUyXSBkYXRhc2V0LmNvdW50ID1cXFwiLCBkYXRhc2V0LmNvdW50KTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNi0wMiBhdCAxNTowN1xcblxcdGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XFxuXFx0XFx0ZGF0YVBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSksXFxuXFx0XFx0ZGF0YVVWOiBuZXcgRmxvYXQzMkFycmF5KG1ha2VVVihhc3NldHMuZ2xiLm1vbmtleSkpLFxcblxcdFxcdHRleHR1cmUsXFxuXFx0fSk7XFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbY2xvdWRdLFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XFxuXFx0Y29udGV4dC5wYWludCgpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdHJldHVybiAoXFxuXFx0XFx0PFZpZXdcXG5cXHRcXHRcXHRvblJlYWR5PXtpbml0fVxcblxcdFxcdFxcdGdpem1vXFxuXFx0XFx0XFx0b3B0aW9ucz17e1xcblxcdFxcdFxcdFxcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdGFzc2V0cz17e1xcblxcdFxcdFxcdFxcdGdsYjogeyBtb25rZXk6IE1vbmtleVVSTCB9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpO1xcbn1cXG5cXG5mdW5jdGlvbiBtYWtlRGF0YXNldChnbGI6IFRnZERhdGFHbGIpIHtcXG5cXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcblxcdFxcdFBPU0lUSU9OOiBcXFwidmVjNFxcXCIsXFxuXFx0fSk7XFxuXFx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcXFwiUE9TSVRJT05cXFwiKTtcXG5cXHRjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcXFwiUE9TSVRJT05cXFwiKTtcXG5cXHRjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnQ7XFxuXFx0Y29uc3QgcmFkaXVzID0gMC4wMTtcXG5cXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG5cXHRcXHRzZXQocmFkaXVzLCBpLCAzKTtcXG5cXHR9XFxuXFx0cmV0dXJuIGRhdGFzZXQ7XFxufVxcblxcbmZ1bmN0aW9uIG1ha2VVVihnbGI6IFRnZERhdGFHbGIpIHtcXG5cXHRjb25zdCB1dnM6IG51bWJlcltdID0gW107XFxuXFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG5cXHRcXHROT1JNQUw6IFxcXCJ2ZWM0XFxcIixcXG5cXHR9KTtcXG5cXHRnbGIuc2V0QXR0cmliKGRhdGFzZXQsIFxcXCJOT1JNQUxcXFwiKTtcXG5cXHRjb25zdCB7IGdldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcXFwiTk9STUFMXFxcIik7XFxuXFx0Y29uc3QgY291bnQgPSBkYXRhc2V0LmNvdW50O1xcblxcdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcblxcdFxcdGNvbnN0IG54ID0gZ2V0KGksIDApO1xcblxcdFxcdGNvbnN0IG55ID0gZ2V0KGksIDEpO1xcblxcdFxcdC8vIGNvbnN0IG56ID0gZ2V0KGksIDIpO1xcblxcdFxcdGNvbnN0IHUgPSAwLjUgKiAoMSArIG54KTtcXG5cXHRcXHRjb25zdCB2ID0gMC41ICogKDEgKyBueSk7XFxuXFx0XFx0dXZzLnB1c2godSwgdik7XFxuXFx0fVxcblxcdHJldHVybiB1dnM7XFxufVxcblxcbmZ1bmN0aW9uIGNyZWF0ZVBhbGV0dGUoKSB7XFxuXFx0Y29uc3QgY29sb3JzOiBUZ2RDb2xvcltdID0gW107XFxuXFx0Y29uc3QgUyA9IDE7XFxuXFx0Zm9yIChjb25zdCBMIG9mIFswLjEsIDAuNSwgMC45XSkge1xcblxcdFxcdGZvciAoY29uc3QgSCBvZiBbMCwgMC4yLCAwLjQsIDAuNiwgMC44LCAxXSkge1xcblxcdFxcdFxcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0woSCwgUywgTCkpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0cmV0dXJuIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoY29sb3JzLCA2KTtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdFRnZENvbG9yLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcblx0dHlwZSBUZ2REYXRhR2xiLFxuXHRUZ2REYXRhc2V0LFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJQb2ludHNDbG91ZCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IE1vbmtleVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW5cblx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDU7XG5cdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRtYXhab29tOiA1LFxuXHRcdG1pblpvb206IDAuNSxcblx0XHRzcGVlZFpvb206IDEsXG5cdH0pO1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXG5cdFx0ZGVwdGg6IDEsXG5cdH0pO1xuXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG5cdFx0cGFyYW1zOiB7XG5cdFx0XHRtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG5cdFx0XHRtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG5cdFx0XHR3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXG5cdFx0XHR3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXG5cdFx0fSxcblx0fSkubG9hZEJpdG1hcChjcmVhdGVQYWxldHRlKCkpO1xuXHRjb25zdCBkYXRhc2V0ID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkpO1xuXHRjb25zb2xlLmxvZyhcIvCfkJ4gW3BvaW50cy1jbG91ZC5kZW1vQDUyXSBkYXRhc2V0LmNvdW50ID1cIiwgZGF0YXNldC5jb3VudCk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDYtMDIgYXQgMTU6MDdcblx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcblx0XHRkYXRhUG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKSxcblx0XHRkYXRhVVY6IG5ldyBGbG9hdDMyQXJyYXkobWFrZVVWKGFzc2V0cy5nbGIubW9ua2V5KSksXG5cdFx0dGV4dHVyZSxcblx0fSk7XG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRjaGlsZHJlbjogW2Nsb3VkXSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XG5cdGNvbnRleHQucGFpbnQoKTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0Z2l6bW9cblx0XHRcdG9wdGlvbnM9e3tcblx0XHRcdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdFx0fX1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHsgbW9ua2V5OiBNb25rZXlVUkwgfSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0UE9TSVRJT046IFwidmVjNFwiLFxuXHR9KTtcblx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcIlBPU0lUSU9OXCIpO1xuXHRjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcIlBPU0lUSU9OXCIpO1xuXHRjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnQ7XG5cdGNvbnN0IHJhZGl1cyA9IDAuMDE7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdHNldChyYWRpdXMsIGksIDMpO1xuXHR9XG5cdHJldHVybiBkYXRhc2V0O1xufVxuXG5mdW5jdGlvbiBtYWtlVVYoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IHV2czogbnVtYmVyW10gPSBbXTtcblx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHROT1JNQUw6IFwidmVjNFwiLFxuXHR9KTtcblx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcIk5PUk1BTFwiKTtcblx0Y29uc3QgeyBnZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXCJOT1JNQUxcIik7XG5cdGNvbnN0IGNvdW50ID0gZGF0YXNldC5jb3VudDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0Y29uc3QgbnggPSBnZXQoaSwgMCk7XG5cdFx0Y29uc3QgbnkgPSBnZXQoaSwgMSk7XG5cdFx0Ly8gY29uc3QgbnogPSBnZXQoaSwgMik7XG5cdFx0Y29uc3QgdSA9IDAuNSAqICgxICsgbngpO1xuXHRcdGNvbnN0IHYgPSAwLjUgKiAoMSArIG55KTtcblx0XHR1dnMucHVzaCh1LCB2KTtcblx0fVxuXHRyZXR1cm4gdXZzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWxldHRlKCkge1xuXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXTtcblx0Y29uc3QgUyA9IDE7XG5cdGZvciAoY29uc3QgTCBvZiBbMC4xLCAwLjUsIDAuOV0pIHtcblx0XHRmb3IgKGNvbnN0IEggb2YgWzAsIDAuMiwgMC40LCAwLjYsIDAuOCwgMV0pIHtcblx0XHRcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0woSCwgUywgTCkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMsIDYpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3BvaW50cy1jbG91ZC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIlxcdGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYygpXFxuXFx0Y29udGV4dC5leGVjQmVmb3JlTmV4dFBhaW50KCgpID0+IHtcXG5cXHRcXHRjb25zdCByYWRpdXMgPSAxLjZcXG5cXHRcXHRjb250ZXh0LmNhbWVyYS5maXRCb3VuZGluZ0JveChcXG5cXHRcXHRcXHRuZXcgVGdkQm91bmRpbmdCb3goKS5hZGRTcGhlcmUoMCwgMCwgMCwgcmFkaXVzKSxcXG5cXHRcXHQpXFxuXFx0fSlcXG5cXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0bWF4Wm9vbTogMTAsXFxuXFx0XFx0bWluWm9vbTogMC4yLFxcblxcdFxcdHNwZWVkWm9vbTogMSxcXG5cXHR9KVxcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KVxcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLnRleHR1cmUpXFxuXFx0Y29uc3QgZGF0YXNldCA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5TG93KVxcblxcdGNvbnN0IGRhdGFQb2ludCA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKVxcblxcdGNvbnN0IGRhdGFVViA9IG5ldyBGbG9hdDMyQXJyYXkobWFrZVVWKGFzc2V0cy5nbGIubW9ua2V5TG93KS5kYXRhKVxcblxcdGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XFxuXFx0XFx0ZGF0YVBvaW50LFxcblxcdFxcdGRhdGFVVixcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdH0pXFxuXFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XFxuXFx0XFx0dGV4dHVyZSxcXG5cXHR9KVxcblxcdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG5cXHRcXHRhc3NldDogYXNzZXRzLmdsYi5tb25rZXlIaWdoLFxcblxcdFxcdG1hdGVyaWFsLFxcblxcdH0pXFxuXFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbbWVzaCwgY2xvdWRdLFxcblxcdH0pXFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcblxcdGNvbnRleHQucGFpbnQoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHRUZ2RCb3VuZGluZ0JveCxcXG5cXHRUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXFxuXFx0VGdkQ29sb3IsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHRUZ2REYXRhR2xiLFxcblxcdFRnZERhdGFzZXQsXFxuXFx0VGdkR2VvbWV0cnlCb3gsXFxuXFx0VGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXFxuXFx0VGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlck1lc2gsXFxuXFx0VGdkUGFpbnRlck1lc2hHbHRmLFxcblxcdFRnZFBhaW50ZXJQb2ludHNDbG91ZCxcXG5cXHRUZ2RQYWludGVyUG9pbnRzQ2xvdWRNb3JwaGluZyxcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0VGdkVGV4dHVyZTJELFxcblxcdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXFxuXFx0d2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBUZXh0dXJlVVJMIGZyb20gXFxcIkAvYXNzZXRzL2ltYWdlL3N1emFubmUtYmFrZWQud2VicFxcXCJcXG5cXG5pbXBvcnQgTW9ua2V5SGlnaFVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIlxcbmltcG9ydCBNb25rZXlMb3dVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLWxvdy5nbGJcXFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb25zb2xlLmxvZyhcXFwi8J+QniBbcG9pbnRzLWNsb3VkLmRlbW9AMjddIGFzc2V0cyA9XFxcIiwgYXNzZXRzKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA2LTE2IGF0IDE2OjUwXFxuXFx0Y29udGV4dC5jYW1lcmEgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKClcXG5cXHRjb250ZXh0LmV4ZWNCZWZvcmVOZXh0UGFpbnQoKCkgPT4ge1xcblxcdFxcdGNvbnN0IHJhZGl1cyA9IDEuNlxcblxcdFxcdGNvbnRleHQuY2FtZXJhLmZpdEJvdW5kaW5nQm94KFxcblxcdFxcdFxcdG5ldyBUZ2RCb3VuZGluZ0JveCgpLmFkZFNwaGVyZSgwLCAwLCAwLCByYWRpdXMpLFxcblxcdFxcdClcXG5cXHR9KVxcblxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcblxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRtYXhab29tOiAxMCxcXG5cXHRcXHRtaW5ab29tOiAwLjIsXFxuXFx0XFx0c3BlZWRab29tOiAxLFxcblxcdH0pXFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pXFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UudGV4dHVyZSlcXG5cXHRjb25zdCBkYXRhc2V0ID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXlMb3cpXFxuXFx0Y29uc3QgZGF0YVBvaW50ID0gbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpXFxuXFx0Y29uc3QgZGF0YVVWID0gbmV3IEZsb2F0MzJBcnJheShtYWtlVVYoYXNzZXRzLmdsYi5tb25rZXlMb3cpLmRhdGEpXFxuXFx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcXG5cXHRcXHRkYXRhUG9pbnQsXFxuXFx0XFx0ZGF0YVVWLFxcblxcdFxcdHRleHR1cmUsXFxuXFx0fSlcXG5cXHRjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHtcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdH0pXFxuXFx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLm1vbmtleUhpZ2gsXFxuXFx0XFx0bWF0ZXJpYWwsXFxuXFx0fSlcXG5cXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0Y2hpbGRyZW46IFttZXNoLCBjbG91ZF0sXFxuXFx0fSlcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXFxuXFx0Y29udGV4dC5wYWludCgpXFxuXFx0cmV0dXJuIChzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xcblxcdFxcdGNsb3VkLnJhZGl1c011bHRpcGxpZXIgPSBzZXR0aW5ncy5yYWRpdXNNdWx0aXBsaWVyXFxuXFx0XFx0Y2xvdWQuc2hhZG93SW50ZW5zaXR5ID0gc2V0dGluZ3Muc2hhZG93SW50ZW5zaXR5XFxuXFx0XFx0Y2xvdWQuc2hhZG93VGhpY2tuZXNzID0gc2V0dGluZ3Muc2hhZG93VGhpY2tuZXNzXFxuXFx0XFx0Y2xvdWQuc3BlY3VsYXJFeHBvbmVudCA9IHNldHRpbmdzLnNwZWN1bGFyRXhwb25lbnRcXG5cXHRcXHRjbG91ZC5zcGVjdWxhckludGVuc2l0eSA9IHNldHRpbmdzLnNwZWN1bGFySW50ZW5zaXR5XFxuXFx0XFx0Y2xvdWQubGlnaHQgPSBzZXR0aW5ncy5saWdodFxcblxcdFxcdGNvbnRleHQucGFpbnQoKVxcblxcdH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRnaXptb1xcblxcdFxcdFxcdGFzc2V0cz17e1xcblxcdFxcdFxcdFxcdGdsYjoge1xcblxcdFxcdFxcdFxcdFxcdG1vbmtleUhpZ2g6IE1vbmtleUhpZ2hVUkwsXFxuXFx0XFx0XFx0XFx0XFx0bW9ua2V5TG93OiBNb25rZXlMb3dVUkwsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRpbWFnZToge1xcblxcdFxcdFxcdFxcdFxcdHRleHR1cmU6IFRleHR1cmVVUkwsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdG9wdGlvbnM9e3tcXG5cXHRcXHRcXHRcXHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRzZXR0aW5ncz17e1xcblxcdFxcdFxcdFxcdHJhZGl1c011bHRpcGxpZXI6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcInJhZGl1c011bHRpcGxpZXJcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogMC41LFxcblxcdFxcdFxcdFxcdFxcdG1heDogMixcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHNoYWRvd0ludGVuc2l0eToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwic2hhZG93SW50ZW5zaXR5XFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMC43NSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHNoYWRvd1RoaWNrbmVzczoge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwic2hhZG93VGhpY2tuZXNzXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMS4yLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogMCxcXG5cXHRcXHRcXHRcXHRcXHRtYXg6IDIsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRzcGVjdWxhckV4cG9uZW50OiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJzcGVjdWxhckV4cG9uZW50XFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMTQsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAtMTAsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiAzMCxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHNwZWN1bGFySW50ZW5zaXR5OiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJzcGVjdWxhckludGVuc2l0eVxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDEsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRsaWdodDoge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwibGlnaHRcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogLTEsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiArMyxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpXFxufVxcblxcbmZ1bmN0aW9uIGNyZWF0ZVBhbGV0dGUoKSB7XFxuXFx0Y29uc3QgY29sb3JzOiBUZ2RDb2xvcltdID0gW11cXG5cXHRjb25zdCBTID0gMC41XFxuXFx0Y29uc3QgTCA9IDAuNFxcblxcdGZvciAoY29uc3QgSCBvZiBbMCwgMC4xLCAwLjIsIDAuMywgMC40LCAwLjUsIDAuNiwgMC43LCAwLjgsIDAuOV0pIHtcXG5cXHRcXHRjb2xvcnMucHVzaChUZ2RDb2xvci5mcm9tSFNMKEgsIFMsIEwpKVxcblxcdH1cXG5cXHRyZXR1cm4gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMpXFxufVxcblxcbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGdsYjogVGdkRGF0YUdsYikge1xcblxcdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuXFx0XFx0UE9TSVRJT046IFxcXCJ2ZWM0XFxcIixcXG5cXHR9KVxcblxcdGdsYi5zZXRBdHRyaWIoZGF0YXNldCwgXFxcIlBPU0lUSU9OXFxcIilcXG5cXHRjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcXFwiUE9TSVRJT05cXFwiKVxcblxcdGNvbnN0IGNvdW50ID0gZGF0YXNldC5jb3VudFxcblxcdGNvbnN0IHJhZGl1cyA9IDAuMDVcXG5cXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG5cXHRcXHRzZXQocmFkaXVzLCBpLCAzKVxcblxcdH1cXG5cXHRyZXR1cm4gZGF0YXNldFxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlVVYoZ2xiOiBUZ2REYXRhR2xiKSB7XFxuXFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG5cXHRcXHRURVhDT09SRF8wOiBcXFwidmVjMlxcXCIsXFxuXFx0fSlcXG5cXHRnbGIuc2V0QXR0cmliKGRhdGFzZXQsIFxcXCJURVhDT09SRF8wXFxcIilcXG5cXHRkYXRhc2V0LmRlYnVnKClcXG5cXHRyZXR1cm4gZGF0YXNldFxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0VGdkQm91bmRpbmdCb3gsXG5cdFRnZENhbWVyYU9ydGhvZ3JhcGhpYyxcblx0VGdkQ29sb3IsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuXHRUZ2REYXRhR2xiLFxuXHRUZ2REYXRhc2V0LFxuXHRUZ2RHZW9tZXRyeUJveCxcblx0VGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXG5cdFRnZE1hdGVyaWFsRmxhdFRleHR1cmUsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJNZXNoR2x0Zixcblx0VGdkUGFpbnRlclBvaW50c0Nsb3VkLFxuXHRUZ2RQYWludGVyUG9pbnRzQ2xvdWRNb3JwaGluZyxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVGV4dHVyZVVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2Uvc3V6YW5uZS1iYWtlZC53ZWJwXCJcblxuaW1wb3J0IE1vbmtleUhpZ2hVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuaW1wb3J0IE1vbmtleUxvd1VSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLWxvdy5nbGJcIlxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Y29uc29sZS5sb2coXCLwn5CeIFtwb2ludHMtY2xvdWQuZGVtb0AyN10gYXNzZXRzID1cIiwgYXNzZXRzKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA2LTE2IGF0IDE2OjUwXG5cdC8vICNiZWdpblxuXHRjb250ZXh0LmNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoKVxuXHRjb250ZXh0LmV4ZWNCZWZvcmVOZXh0UGFpbnQoKCkgPT4ge1xuXHRcdGNvbnN0IHJhZGl1cyA9IDEuNlxuXHRcdGNvbnRleHQuY2FtZXJhLmZpdEJvdW5kaW5nQm94KFxuXHRcdFx0bmV3IFRnZEJvdW5kaW5nQm94KCkuYWRkU3BoZXJlKDAsIDAsIDAsIHJhZGl1cyksXG5cdFx0KVxuXHR9KVxuXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcblx0XHRpbmVydGlhT3JiaXQ6IDEwMDAsXG5cdFx0bWF4Wm9vbTogMTAsXG5cdFx0bWluWm9vbTogMC4yLFxuXHRcdHNwZWVkWm9vbTogMSxcblx0fSlcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxuXHRcdGRlcHRoOiAxLFxuXHR9KVxuXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS50ZXh0dXJlKVxuXHRjb25zdCBkYXRhc2V0ID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXlMb3cpXG5cdGNvbnN0IGRhdGFQb2ludCA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKVxuXHRjb25zdCBkYXRhVVYgPSBuZXcgRmxvYXQzMkFycmF5KG1ha2VVVihhc3NldHMuZ2xiLm1vbmtleUxvdykuZGF0YSlcblx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcblx0XHRkYXRhUG9pbnQsXG5cdFx0ZGF0YVVWLFxuXHRcdHRleHR1cmUsXG5cdH0pXG5cdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoe1xuXHRcdHRleHR1cmUsXG5cdH0pXG5cdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcblx0XHRhc3NldDogYXNzZXRzLmdsYi5tb25rZXlIaWdoLFxuXHRcdG1hdGVyaWFsLFxuXHR9KVxuXG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRjaGlsZHJlbjogW21lc2gsIGNsb3VkXSxcblx0fSlcblx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxuXHRjb250ZXh0LnBhaW50KClcblx0Ly8gI2VuZFxuXHRyZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG5cdFx0Y2xvdWQucmFkaXVzTXVsdGlwbGllciA9IHNldHRpbmdzLnJhZGl1c011bHRpcGxpZXJcblx0XHRjbG91ZC5zaGFkb3dJbnRlbnNpdHkgPSBzZXR0aW5ncy5zaGFkb3dJbnRlbnNpdHlcblx0XHRjbG91ZC5zaGFkb3dUaGlja25lc3MgPSBzZXR0aW5ncy5zaGFkb3dUaGlja25lc3Ncblx0XHRjbG91ZC5zcGVjdWxhckV4cG9uZW50ID0gc2V0dGluZ3Muc3BlY3VsYXJFeHBvbmVudFxuXHRcdGNsb3VkLnNwZWN1bGFySW50ZW5zaXR5ID0gc2V0dGluZ3Muc3BlY3VsYXJJbnRlbnNpdHlcblx0XHRjbG91ZC5saWdodCA9IHNldHRpbmdzLmxpZ2h0XG5cdFx0Y29udGV4dC5wYWludCgpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGdpem1vXG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0Z2xiOiB7XG5cdFx0XHRcdFx0bW9ua2V5SGlnaDogTW9ua2V5SGlnaFVSTCxcblx0XHRcdFx0XHRtb25rZXlMb3c6IE1vbmtleUxvd1VSTCxcblx0XHRcdFx0fSxcblx0XHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0XHR0ZXh0dXJlOiBUZXh0dXJlVVJMLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHRcdG9wdGlvbnM9e3tcblx0XHRcdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdFx0fX1cblx0XHRcdHNldHRpbmdzPXt7XG5cdFx0XHRcdHJhZGl1c011bHRpcGxpZXI6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJyYWRpdXNNdWx0aXBsaWVyXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0bWluOiAwLjUsXG5cdFx0XHRcdFx0bWF4OiAyLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzaGFkb3dJbnRlbnNpdHk6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJzaGFkb3dJbnRlbnNpdHlcIixcblx0XHRcdFx0XHR2YWx1ZTogMC43NSxcblx0XHRcdFx0fSxcblx0XHRcdFx0c2hhZG93VGhpY2tuZXNzOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwic2hhZG93VGhpY2tuZXNzXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEuMixcblx0XHRcdFx0XHRtaW46IDAsXG5cdFx0XHRcdFx0bWF4OiAyLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzcGVjdWxhckV4cG9uZW50OiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwic3BlY3VsYXJFeHBvbmVudFwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxNCxcblx0XHRcdFx0XHRtaW46IC0xMCxcblx0XHRcdFx0XHRtYXg6IDMwLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzcGVjdWxhckludGVuc2l0eToge1xuXHRcdFx0XHRcdGxhYmVsOiBcInNwZWN1bGFySW50ZW5zaXR5XCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxpZ2h0OiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwibGlnaHRcIixcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRtaW46IC0xLFxuXHRcdFx0XHRcdG1heDogKzMsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdClcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFsZXR0ZSgpIHtcblx0Y29uc3QgY29sb3JzOiBUZ2RDb2xvcltdID0gW11cblx0Y29uc3QgUyA9IDAuNVxuXHRjb25zdCBMID0gMC40XG5cdGZvciAoY29uc3QgSCBvZiBbMCwgMC4xLCAwLjIsIDAuMywgMC40LCAwLjUsIDAuNiwgMC43LCAwLjgsIDAuOV0pIHtcblx0XHRjb2xvcnMucHVzaChUZ2RDb2xvci5mcm9tSFNMKEgsIFMsIEwpKVxuXHR9XG5cdHJldHVybiB0Z2RDYW52YXNDcmVhdGVQYWxldHRlKGNvbG9ycylcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0UE9TSVRJT046IFwidmVjNFwiLFxuXHR9KVxuXHRnbGIuc2V0QXR0cmliKGRhdGFzZXQsIFwiUE9TSVRJT05cIilcblx0Y29uc3QgeyBzZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXCJQT1NJVElPTlwiKVxuXHRjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnRcblx0Y29uc3QgcmFkaXVzID0gMC4wNVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblx0XHRzZXQocmFkaXVzLCBpLCAzKVxuXHR9XG5cdHJldHVybiBkYXRhc2V0XG59XG5cbmZ1bmN0aW9uIG1ha2VVVihnbGI6IFRnZERhdGFHbGIpIHtcblx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHRURVhDT09SRF8wOiBcInZlYzJcIixcblx0fSlcblx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcIlRFWENPT1JEXzBcIilcblx0ZGF0YXNldC5kZWJ1ZygpXG5cdHJldHVybiBkYXRhc2V0XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZENvbG9yIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJQb2ludHNDbG91ZCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsInRnZENhbnZhc0NyZWF0ZVBhbGV0dGUiLCJ3ZWJnbFByZXNldERlcHRoIiwiTW9ua2V5VVJMIiwiVmlldyIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2xlYXIiLCJ0ZXh0dXJlIiwiY3JlYXRlUGFsZXR0ZSIsImRhdGFzZXQiLCJtYWtlRGF0YXNldCIsImNvbnNvbGUiLCJjbG91ZCIsIkZsb2F0MzJBcnJheSIsIm1ha2VVViIsInN0YXRlIiwiZ2xiIiwic2V0IiwiY291bnQiLCJyYWRpdXMiLCJpIiwidXZzIiwiZ2V0IiwibngiLCJueSIsInUiLCJ2IiwiY29sb3JzIiwiUyIsIl9pdGVyIiwiTCIsIl9pdGVyMSIsIkgiLCJUZ2RCb3VuZGluZ0JveCIsIlRnZENhbWVyYU9ydGhvZ3JhcGhpYyIsIlRnZE1hdGVyaWFsRmxhdFRleHR1cmUiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZXh0dXJlVVJMIiwiTW9ua2V5SGlnaFVSTCIsIk1vbmtleUxvd1VSTCIsImRhdGFQb2ludCIsImRhdGFVViIsIm1hdGVyaWFsIiwi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