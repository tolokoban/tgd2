"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_points-cloud_variant_default_page_mdx-src_components_demo_CodeViewer-2f4b44"], {
8755(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/high-res-monkey.9d3a83c717063744.glb";

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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/index.tsx",
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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/many.demo/points-cloud.demo.tsx",
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
    "Detail #1": "\tcontext.camera = new TgdCameraOrthographic();\n\tcontext.execBeforeNextPaint(() => {\n\t\tconst radius = 3;\n\t\tcontext.camera.fitBoundingBox(\n\t\t\tnew TgdBoundingBox().addSphere(0, 0, 0, radius),\n\t\t);\n\t\tcontext.camera.debug();\n\t});\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.25,\n\t\tspeedZoom: 1,\n\t});\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t});\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t});\n\tconst coords: number[] = [];\n\tconst uvs: number[] = [];\n\tconst colors: TgdColor[] = [];\n\tconst values = [-1, +1];\n\tconst radius = 1;\n\tlet index = 0;\n\tfor (const x of values) {\n\t\tfor (const y of values) {\n\t\t\tfor (const z of values) {\n\t\t\t\tcoords.push(x, y, z, radius);\n\t\t\t\tconst u = index / 8;\n\t\t\t\tuvs.push(u, u);\n\t\t\t\tcolors.push(TgdColor.fromHSL(u, 1, 0.5));\n\t\t\t\tconst dist = 1.666;\n\t\t\t\tcoords.push(dist * x, dist * y, dist * z, radius / 2);\n\t\t\t\tuvs.push(u, u);\n\t\t\t\tcolors.push(TgdColor.fromHSL(u, 1, 0.5));\n\t\t\t\tindex++;\n\t\t\t}\n\t\t}\n\t}\n\tdataset.set(\"POSITION\", new Float32Array(coords));\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"NEAREST\",\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t}).loadBitmap(tgdCanvasCreatePalette(colors));\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\tdataUV: new Float32Array(uvs),\n\t\ttexture,\n\t\tminSizeInPixels: 32,\n\t});\n\tconst cube = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n\t\tmaterial: new TgdMaterialFaceOrientation(),\n\t});\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cube, cloud],\n\t\t// children: [cloud],\n\t});\n\tcontext.add(clear, state);\n\tcontext.paint();"
};
var FULL = "import {\n\tTgdBoundingBox,\n\tTgdCameraOrthographic,\n\tTgdColor,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdDataset,\n\tTgdGeometryBox,\n\tTgdMaterialFaceOrientation,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterPointsCloud,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdCanvasCreatePalette,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport View from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext) {\n\tcontext.camera = new TgdCameraOrthographic();\n\tcontext.execBeforeNextPaint(() => {\n\t\tconst radius = 3;\n\t\tcontext.camera.fitBoundingBox(\n\t\t\tnew TgdBoundingBox().addSphere(0, 0, 0, radius),\n\t\t);\n\t\tcontext.camera.debug();\n\t});\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.25,\n\t\tspeedZoom: 1,\n\t});\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t});\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t});\n\tconst coords: number[] = [];\n\tconst uvs: number[] = [];\n\tconst colors: TgdColor[] = [];\n\tconst values = [-1, +1];\n\tconst radius = 1;\n\tlet index = 0;\n\tfor (const x of values) {\n\t\tfor (const y of values) {\n\t\t\tfor (const z of values) {\n\t\t\t\tcoords.push(x, y, z, radius);\n\t\t\t\tconst u = index / 8;\n\t\t\t\tuvs.push(u, u);\n\t\t\t\tcolors.push(TgdColor.fromHSL(u, 1, 0.5));\n\t\t\t\tconst dist = 1.666;\n\t\t\t\tcoords.push(dist * x, dist * y, dist * z, radius / 2);\n\t\t\t\tuvs.push(u, u);\n\t\t\t\tcolors.push(TgdColor.fromHSL(u, 1, 0.5));\n\t\t\t\tindex++;\n\t\t\t}\n\t\t}\n\t}\n\tdataset.set(\"POSITION\", new Float32Array(coords));\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"NEAREST\",\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t}).loadBitmap(tgdCanvasCreatePalette(colors));\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\tdataUV: new Float32Array(uvs),\n\t\ttexture,\n\t\tminSizeInPixels: 32,\n\t});\n\tconst cube = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n\t\tmaterial: new TgdMaterialFaceOrientation(),\n\t});\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cube, cloud],\n\t\t// children: [cloud],\n\t});\n\tcontext.add(clear, state);\n\tcontext.paint();\n\treturn (settings: Record<string, number>) => {\n\t\tcloud.radiusMultiplier = settings.radiusMultiplier;\n\t\tcloud.shadowIntensity = settings.shadowIntensity;\n\t\tcloud.shadowThickness = settings.shadowThickness;\n\t\tcloud.specularExponent = settings.specularExponent;\n\t\tcloud.specularIntensity = settings.specularIntensity;\n\t\tcloud.light = settings.light;\n\t\tcontext.paint();\n\t};\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tradiusMultiplier: {\n\t\t\t\t\tlabel: \"radiusMultiplier\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: 0.5,\n\t\t\t\t\tmax: 2,\n\t\t\t\t},\n\t\t\t\tshadowIntensity: {\n\t\t\t\t\tlabel: \"shadowIntensity\",\n\t\t\t\t\tvalue: 0.75,\n\t\t\t\t},\n\t\t\t\tshadowThickness: {\n\t\t\t\t\tlabel: \"shadowThickness\",\n\t\t\t\t\tvalue: 1.2,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 2,\n\t\t\t\t},\n\t\t\t\tspecularExponent: {\n\t\t\t\t\tlabel: \"specularExponent\",\n\t\t\t\t\tvalue: 14,\n\t\t\t\t\tmin: -10,\n\t\t\t\t\tmax: 30,\n\t\t\t\t},\n\t\t\t\tspecularIntensity: {\n\t\t\t\t\tlabel: \"specularIntensity\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t},\n\t\t\t\tlight: {\n\t\t\t\t\tlabel: \"light\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: -1,\n\t\t\t\t\tmax: +3,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/index.tsx",
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
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);



function init(context) {
    // #begin
    context.camera = new _tolokoban_tgd__rspack_import_1.TgdCameraOrthographic();
    context.execBeforeNextPaint(function() {
        var radius = 3;
        context.camera.fitBoundingBox(new _tolokoban_tgd__rspack_import_1.TgdBoundingBox().addSphere(0, 0, 0, radius));
        context.camera.debug();
    });
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        maxZoom: 5,
        minZoom: 0.25,
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
    var dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        POSITION: "vec4"
    });
    var coords = [];
    var uvs = [];
    var colors = [];
    var values = [
        -1,
        +1
    ];
    var radius = 1;
    var index = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var x = _step.value;
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = values[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var y = _step1.value;
                    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        for(var _iterator2 = values[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                            var z = _step2.value;
                            coords.push(x, y, z, radius);
                            var u = index / 8;
                            uvs.push(u, u);
                            colors.push(_tolokoban_tgd__rspack_import_1.TgdColor.fromHSL(u, 1, 0.5));
                            var dist = 1.666;
                            coords.push(dist * x, dist * y, dist * z, radius / 2);
                            uvs.push(u, u);
                            colors.push(_tolokoban_tgd__rspack_import_1.TgdColor.fromHSL(u, 1, 0.5));
                            index++;
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                _iterator2.return();
                            }
                        } finally{
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
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
    dataset.set("POSITION", new Float32Array(coords));
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        params: {
            minFilter: "NEAREST",
            magFilter: "NEAREST"
        }
    }).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)(colors));
    var cloud = new _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloud(context, {
        dataPoint: new Float32Array(dataset.data),
        dataUV: new Float32Array(uvs),
        texture: texture,
        minSizeInPixels: 32
    });
    var cube = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox({
            sizeX: 2,
            sizeY: 2,
            sizeZ: 2
        }),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFaceOrientation()
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            cube,
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
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        gizmo: true,
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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/_/points-cloud.demo/points-cloud.demo.tsx",
        lineNumber: 102,
        columnNumber: 3
    }, this);
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
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Default options"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h3, {
                children: "Few spheres"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h3, {
                children: "Many spheres"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Here, we display 503'808 spheres."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_many_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
                lineNumber: 16,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/default/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wb2ludHMtY2xvdWRfdmFyaWFudF9kZWZhdWx0X3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlci0yZjRiNDQuZDJkMjUxMDU2NTI0OGZjYi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvdmFyaWFudC9kZWZhdWx0L18vbWFueS5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL3ZhcmlhbnQvZGVmYXVsdC9fL21hbnkuZGVtby9wb2ludHMtY2xvdWQuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L2RlZmF1bHQvXy9wb2ludHMtY2xvdWQuZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L2RlZmF1bHQvXy9wb2ludHMtY2xvdWQuZGVtby9wb2ludHMtY2xvdWQuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L2RlZmF1bHQvcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9wb2ludHMtY2xvdWQuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJcXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNTtcXG5cXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0bWF4Wm9vbTogNSxcXG5cXHRcXHRtaW5ab29tOiAwLjUsXFxuXFx0XFx0c3BlZWRab29tOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuXFx0XFx0cGFyYW1zOiB7XFxuXFx0XFx0XFx0bWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcblxcdFxcdFxcdHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0XFx0d3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHR9LFxcblxcdH0pLmxvYWRCaXRtYXAoY3JlYXRlUGFsZXR0ZSgpKTtcXG5cXHRjb25zdCBkYXRhc2V0ID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkpO1xcblxcdGNvbnNvbGUubG9nKFxcXCLwn5CeIFtwb2ludHMtY2xvdWQuZGVtb0A1Ml0gZGF0YXNldC5jb3VudCA9XFxcIiwgZGF0YXNldC5jb3VudCk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDYtMDIgYXQgMTU6MDdcXG5cXHRjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xcblxcdFxcdGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxcblxcdFxcdGRhdGFVVjogbmV3IEZsb2F0MzJBcnJheShtYWtlVVYoYXNzZXRzLmdsYi5tb25rZXkpKSxcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdH0pO1xcblxcdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRjaGlsZHJlbjogW2Nsb3VkXSxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0VGdkQ29sb3IsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHR0eXBlIFRnZERhdGFHbGIsXFxuXFx0VGdkRGF0YXNldCxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlclBvaW50c0Nsb3VkLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxuXFx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcbmltcG9ydCBNb25rZXlVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXFxcIjtcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1O1xcblxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcblxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRtYXhab29tOiA1LFxcblxcdFxcdG1pblpvb206IDAuNSxcXG5cXHRcXHRzcGVlZFpvb206IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRwYXJhbXM6IHtcXG5cXHRcXHRcXHRtaW5GaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0d3JhcFM6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHRcXHR3cmFwVDogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdH0sXFxuXFx0fSkubG9hZEJpdG1hcChjcmVhdGVQYWxldHRlKCkpO1xcblxcdGNvbnN0IGRhdGFzZXQgPSBtYWtlRGF0YXNldChhc3NldHMuZ2xiLm1vbmtleSk7XFxuXFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW3BvaW50cy1jbG91ZC5kZW1vQDUyXSBkYXRhc2V0LmNvdW50ID1cXFwiLCBkYXRhc2V0LmNvdW50KTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNi0wMiBhdCAxNTowN1xcblxcdGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XFxuXFx0XFx0ZGF0YVBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSksXFxuXFx0XFx0ZGF0YVVWOiBuZXcgRmxvYXQzMkFycmF5KG1ha2VVVihhc3NldHMuZ2xiLm1vbmtleSkpLFxcblxcdFxcdHRleHR1cmUsXFxuXFx0fSk7XFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbY2xvdWRdLFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XFxuXFx0Y29udGV4dC5wYWludCgpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdHJldHVybiAoXFxuXFx0XFx0PFZpZXdcXG5cXHRcXHRcXHRvblJlYWR5PXtpbml0fVxcblxcdFxcdFxcdGdpem1vXFxuXFx0XFx0XFx0b3B0aW9ucz17e1xcblxcdFxcdFxcdFxcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdGFzc2V0cz17e1xcblxcdFxcdFxcdFxcdGdsYjogeyBtb25rZXk6IE1vbmtleVVSTCB9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpO1xcbn1cXG5cXG5mdW5jdGlvbiBtYWtlRGF0YXNldChnbGI6IFRnZERhdGFHbGIpIHtcXG5cXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcblxcdFxcdFBPU0lUSU9OOiBcXFwidmVjNFxcXCIsXFxuXFx0fSk7XFxuXFx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcXFwiUE9TSVRJT05cXFwiKTtcXG5cXHRjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcXFwiUE9TSVRJT05cXFwiKTtcXG5cXHRjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnQ7XFxuXFx0Y29uc3QgcmFkaXVzID0gMC4wMTtcXG5cXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG5cXHRcXHRzZXQocmFkaXVzLCBpLCAzKTtcXG5cXHR9XFxuXFx0cmV0dXJuIGRhdGFzZXQ7XFxufVxcblxcbmZ1bmN0aW9uIG1ha2VVVihnbGI6IFRnZERhdGFHbGIpIHtcXG5cXHRjb25zdCB1dnM6IG51bWJlcltdID0gW107XFxuXFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG5cXHRcXHROT1JNQUw6IFxcXCJ2ZWM0XFxcIixcXG5cXHR9KTtcXG5cXHRnbGIuc2V0QXR0cmliKGRhdGFzZXQsIFxcXCJOT1JNQUxcXFwiKTtcXG5cXHRjb25zdCB7IGdldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcXFwiTk9STUFMXFxcIik7XFxuXFx0Y29uc3QgY291bnQgPSBkYXRhc2V0LmNvdW50O1xcblxcdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcblxcdFxcdGNvbnN0IG54ID0gZ2V0KGksIDApO1xcblxcdFxcdGNvbnN0IG55ID0gZ2V0KGksIDEpO1xcblxcdFxcdC8vIGNvbnN0IG56ID0gZ2V0KGksIDIpO1xcblxcdFxcdGNvbnN0IHUgPSAwLjUgKiAoMSArIG54KTtcXG5cXHRcXHRjb25zdCB2ID0gMC41ICogKDEgKyBueSk7XFxuXFx0XFx0dXZzLnB1c2godSwgdik7XFxuXFx0fVxcblxcdHJldHVybiB1dnM7XFxufVxcblxcbmZ1bmN0aW9uIGNyZWF0ZVBhbGV0dGUoKSB7XFxuXFx0Y29uc3QgY29sb3JzOiBUZ2RDb2xvcltdID0gW107XFxuXFx0Y29uc3QgUyA9IDE7XFxuXFx0Zm9yIChjb25zdCBMIG9mIFswLjEsIDAuNSwgMC45XSkge1xcblxcdFxcdGZvciAoY29uc3QgSCBvZiBbMCwgMC4yLCAwLjQsIDAuNiwgMC44LCAxXSkge1xcblxcdFxcdFxcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0woSCwgUywgTCkpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0cmV0dXJuIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoY29sb3JzLCA2KTtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdFRnZENvbG9yLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcblx0dHlwZSBUZ2REYXRhR2xiLFxuXHRUZ2REYXRhc2V0LFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJQb2ludHNDbG91ZCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IE1vbmtleVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW5cblx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDU7XG5cdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRtYXhab29tOiA1LFxuXHRcdG1pblpvb206IDAuNSxcblx0XHRzcGVlZFpvb206IDEsXG5cdH0pO1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXG5cdFx0ZGVwdGg6IDEsXG5cdH0pO1xuXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG5cdFx0cGFyYW1zOiB7XG5cdFx0XHRtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG5cdFx0XHRtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG5cdFx0XHR3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXG5cdFx0XHR3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXG5cdFx0fSxcblx0fSkubG9hZEJpdG1hcChjcmVhdGVQYWxldHRlKCkpO1xuXHRjb25zdCBkYXRhc2V0ID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkpO1xuXHRjb25zb2xlLmxvZyhcIvCfkJ4gW3BvaW50cy1jbG91ZC5kZW1vQDUyXSBkYXRhc2V0LmNvdW50ID1cIiwgZGF0YXNldC5jb3VudCk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDYtMDIgYXQgMTU6MDdcblx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcblx0XHRkYXRhUG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKSxcblx0XHRkYXRhVVY6IG5ldyBGbG9hdDMyQXJyYXkobWFrZVVWKGFzc2V0cy5nbGIubW9ua2V5KSksXG5cdFx0dGV4dHVyZSxcblx0fSk7XG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRjaGlsZHJlbjogW2Nsb3VkXSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XG5cdGNvbnRleHQucGFpbnQoKTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0Z2l6bW9cblx0XHRcdG9wdGlvbnM9e3tcblx0XHRcdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdFx0fX1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHsgbW9ua2V5OiBNb25rZXlVUkwgfSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0UE9TSVRJT046IFwidmVjNFwiLFxuXHR9KTtcblx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcIlBPU0lUSU9OXCIpO1xuXHRjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcIlBPU0lUSU9OXCIpO1xuXHRjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnQ7XG5cdGNvbnN0IHJhZGl1cyA9IDAuMDE7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdHNldChyYWRpdXMsIGksIDMpO1xuXHR9XG5cdHJldHVybiBkYXRhc2V0O1xufVxuXG5mdW5jdGlvbiBtYWtlVVYoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IHV2czogbnVtYmVyW10gPSBbXTtcblx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHROT1JNQUw6IFwidmVjNFwiLFxuXHR9KTtcblx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcIk5PUk1BTFwiKTtcblx0Y29uc3QgeyBnZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXCJOT1JNQUxcIik7XG5cdGNvbnN0IGNvdW50ID0gZGF0YXNldC5jb3VudDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0Y29uc3QgbnggPSBnZXQoaSwgMCk7XG5cdFx0Y29uc3QgbnkgPSBnZXQoaSwgMSk7XG5cdFx0Ly8gY29uc3QgbnogPSBnZXQoaSwgMik7XG5cdFx0Y29uc3QgdSA9IDAuNSAqICgxICsgbngpO1xuXHRcdGNvbnN0IHYgPSAwLjUgKiAoMSArIG55KTtcblx0XHR1dnMucHVzaCh1LCB2KTtcblx0fVxuXHRyZXR1cm4gdXZzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWxldHRlKCkge1xuXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXTtcblx0Y29uc3QgUyA9IDE7XG5cdGZvciAoY29uc3QgTCBvZiBbMC4xLCAwLjUsIDAuOV0pIHtcblx0XHRmb3IgKGNvbnN0IEggb2YgWzAsIDAuMiwgMC40LCAwLjYsIDAuOCwgMV0pIHtcblx0XHRcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0woSCwgUywgTCkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMsIDYpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3BvaW50cy1jbG91ZC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIlxcdGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYygpO1xcblxcdGNvbnRleHQuZXhlY0JlZm9yZU5leHRQYWludCgoKSA9PiB7XFxuXFx0XFx0Y29uc3QgcmFkaXVzID0gMztcXG5cXHRcXHRjb250ZXh0LmNhbWVyYS5maXRCb3VuZGluZ0JveChcXG5cXHRcXHRcXHRuZXcgVGdkQm91bmRpbmdCb3goKS5hZGRTcGhlcmUoMCwgMCwgMCwgcmFkaXVzKSxcXG5cXHRcXHQpO1xcblxcdFxcdGNvbnRleHQuY2FtZXJhLmRlYnVnKCk7XFxuXFx0fSk7XFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdG1heFpvb206IDUsXFxuXFx0XFx0bWluWm9vbTogMC4yNSxcXG5cXHRcXHRzcGVlZFpvb206IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuXFx0XFx0UE9TSVRJT046IFxcXCJ2ZWM0XFxcIixcXG5cXHR9KTtcXG5cXHRjb25zdCBjb29yZHM6IG51bWJlcltdID0gW107XFxuXFx0Y29uc3QgdXZzOiBudW1iZXJbXSA9IFtdO1xcblxcdGNvbnN0IGNvbG9yczogVGdkQ29sb3JbXSA9IFtdO1xcblxcdGNvbnN0IHZhbHVlcyA9IFstMSwgKzFdO1xcblxcdGNvbnN0IHJhZGl1cyA9IDE7XFxuXFx0bGV0IGluZGV4ID0gMDtcXG5cXHRmb3IgKGNvbnN0IHggb2YgdmFsdWVzKSB7XFxuXFx0XFx0Zm9yIChjb25zdCB5IG9mIHZhbHVlcykge1xcblxcdFxcdFxcdGZvciAoY29uc3QgeiBvZiB2YWx1ZXMpIHtcXG5cXHRcXHRcXHRcXHRjb29yZHMucHVzaCh4LCB5LCB6LCByYWRpdXMpO1xcblxcdFxcdFxcdFxcdGNvbnN0IHUgPSBpbmRleCAvIDg7XFxuXFx0XFx0XFx0XFx0dXZzLnB1c2godSwgdSk7XFxuXFx0XFx0XFx0XFx0Y29sb3JzLnB1c2goVGdkQ29sb3IuZnJvbUhTTCh1LCAxLCAwLjUpKTtcXG5cXHRcXHRcXHRcXHRjb25zdCBkaXN0ID0gMS42NjY7XFxuXFx0XFx0XFx0XFx0Y29vcmRzLnB1c2goZGlzdCAqIHgsIGRpc3QgKiB5LCBkaXN0ICogeiwgcmFkaXVzIC8gMik7XFxuXFx0XFx0XFx0XFx0dXZzLnB1c2godSwgdSk7XFxuXFx0XFx0XFx0XFx0Y29sb3JzLnB1c2goVGdkQ29sb3IuZnJvbUhTTCh1LCAxLCAwLjUpKTtcXG5cXHRcXHRcXHRcXHRpbmRleCsrO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcdGRhdGFzZXQuc2V0KFxcXCJQT1NJVElPTlxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoY29vcmRzKSk7XFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdH0sXFxuXFx0fSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKGNvbG9ycykpO1xcblxcdGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XFxuXFx0XFx0ZGF0YVBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSksXFxuXFx0XFx0ZGF0YVVWOiBuZXcgRmxvYXQzMkFycmF5KHV2cyksXFxuXFx0XFx0dGV4dHVyZSxcXG5cXHRcXHRtaW5TaXplSW5QaXhlbHM6IDMyLFxcblxcdH0pO1xcblxcdGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcblxcdFxcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goeyBzaXplWDogMiwgc2l6ZVk6IDIsIHNpemVaOiAyIH0pLFxcblxcdFxcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKSxcXG5cXHR9KTtcXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0Y2hpbGRyZW46IFtjdWJlLCBjbG91ZF0sXFxuXFx0XFx0Ly8gY2hpbGRyZW46IFtjbG91ZF0sXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdFRnZEJvdW5kaW5nQm94LFxcblxcdFRnZENhbWVyYU9ydGhvZ3JhcGhpYyxcXG5cXHRUZ2RDb2xvcixcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcblxcdFRnZERhdGFzZXQsXFxuXFx0VGdkR2VvbWV0cnlCb3gsXFxuXFx0VGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJNZXNoLFxcblxcdFRnZFBhaW50ZXJQb2ludHNDbG91ZCxcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0VGdkVGV4dHVyZTJELFxcblxcdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXFxuXFx0d2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5pbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcblxcdGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYygpO1xcblxcdGNvbnRleHQuZXhlY0JlZm9yZU5leHRQYWludCgoKSA9PiB7XFxuXFx0XFx0Y29uc3QgcmFkaXVzID0gMztcXG5cXHRcXHRjb250ZXh0LmNhbWVyYS5maXRCb3VuZGluZ0JveChcXG5cXHRcXHRcXHRuZXcgVGdkQm91bmRpbmdCb3goKS5hZGRTcGhlcmUoMCwgMCwgMCwgcmFkaXVzKSxcXG5cXHRcXHQpO1xcblxcdFxcdGNvbnRleHQuY2FtZXJhLmRlYnVnKCk7XFxuXFx0fSk7XFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdG1heFpvb206IDUsXFxuXFx0XFx0bWluWm9vbTogMC4yNSxcXG5cXHRcXHRzcGVlZFpvb206IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuXFx0XFx0UE9TSVRJT046IFxcXCJ2ZWM0XFxcIixcXG5cXHR9KTtcXG5cXHRjb25zdCBjb29yZHM6IG51bWJlcltdID0gW107XFxuXFx0Y29uc3QgdXZzOiBudW1iZXJbXSA9IFtdO1xcblxcdGNvbnN0IGNvbG9yczogVGdkQ29sb3JbXSA9IFtdO1xcblxcdGNvbnN0IHZhbHVlcyA9IFstMSwgKzFdO1xcblxcdGNvbnN0IHJhZGl1cyA9IDE7XFxuXFx0bGV0IGluZGV4ID0gMDtcXG5cXHRmb3IgKGNvbnN0IHggb2YgdmFsdWVzKSB7XFxuXFx0XFx0Zm9yIChjb25zdCB5IG9mIHZhbHVlcykge1xcblxcdFxcdFxcdGZvciAoY29uc3QgeiBvZiB2YWx1ZXMpIHtcXG5cXHRcXHRcXHRcXHRjb29yZHMucHVzaCh4LCB5LCB6LCByYWRpdXMpO1xcblxcdFxcdFxcdFxcdGNvbnN0IHUgPSBpbmRleCAvIDg7XFxuXFx0XFx0XFx0XFx0dXZzLnB1c2godSwgdSk7XFxuXFx0XFx0XFx0XFx0Y29sb3JzLnB1c2goVGdkQ29sb3IuZnJvbUhTTCh1LCAxLCAwLjUpKTtcXG5cXHRcXHRcXHRcXHRjb25zdCBkaXN0ID0gMS42NjY7XFxuXFx0XFx0XFx0XFx0Y29vcmRzLnB1c2goZGlzdCAqIHgsIGRpc3QgKiB5LCBkaXN0ICogeiwgcmFkaXVzIC8gMik7XFxuXFx0XFx0XFx0XFx0dXZzLnB1c2godSwgdSk7XFxuXFx0XFx0XFx0XFx0Y29sb3JzLnB1c2goVGdkQ29sb3IuZnJvbUhTTCh1LCAxLCAwLjUpKTtcXG5cXHRcXHRcXHRcXHRpbmRleCsrO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcdGRhdGFzZXQuc2V0KFxcXCJQT1NJVElPTlxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoY29vcmRzKSk7XFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdH0sXFxuXFx0fSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKGNvbG9ycykpO1xcblxcdGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XFxuXFx0XFx0ZGF0YVBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSksXFxuXFx0XFx0ZGF0YVVWOiBuZXcgRmxvYXQzMkFycmF5KHV2cyksXFxuXFx0XFx0dGV4dHVyZSxcXG5cXHRcXHRtaW5TaXplSW5QaXhlbHM6IDMyLFxcblxcdH0pO1xcblxcdGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcblxcdFxcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goeyBzaXplWDogMiwgc2l6ZVk6IDIsIHNpemVaOiAyIH0pLFxcblxcdFxcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKSxcXG5cXHR9KTtcXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0Y2hpbGRyZW46IFtjdWJlLCBjbG91ZF0sXFxuXFx0XFx0Ly8gY2hpbGRyZW46IFtjbG91ZF0sXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0cmV0dXJuIChzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xcblxcdFxcdGNsb3VkLnJhZGl1c011bHRpcGxpZXIgPSBzZXR0aW5ncy5yYWRpdXNNdWx0aXBsaWVyO1xcblxcdFxcdGNsb3VkLnNoYWRvd0ludGVuc2l0eSA9IHNldHRpbmdzLnNoYWRvd0ludGVuc2l0eTtcXG5cXHRcXHRjbG91ZC5zaGFkb3dUaGlja25lc3MgPSBzZXR0aW5ncy5zaGFkb3dUaGlja25lc3M7XFxuXFx0XFx0Y2xvdWQuc3BlY3VsYXJFeHBvbmVudCA9IHNldHRpbmdzLnNwZWN1bGFyRXhwb25lbnQ7XFxuXFx0XFx0Y2xvdWQuc3BlY3VsYXJJbnRlbnNpdHkgPSBzZXR0aW5ncy5zcGVjdWxhckludGVuc2l0eTtcXG5cXHRcXHRjbG91ZC5saWdodCA9IHNldHRpbmdzLmxpZ2h0O1xcblxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHR9O1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdHJldHVybiAoXFxuXFx0XFx0PFZpZXdcXG5cXHRcXHRcXHRvblJlYWR5PXtpbml0fVxcblxcdFxcdFxcdGdpem1vXFxuXFx0XFx0XFx0b3B0aW9ucz17e1xcblxcdFxcdFxcdFxcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdHNldHRpbmdzPXt7XFxuXFx0XFx0XFx0XFx0cmFkaXVzTXVsdGlwbGllcjoge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwicmFkaXVzTXVsdGlwbGllclxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDEsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAwLjUsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiAyLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0c2hhZG93SW50ZW5zaXR5OiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJzaGFkb3dJbnRlbnNpdHlcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAwLjc1LFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0c2hhZG93VGhpY2tuZXNzOiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJzaGFkb3dUaGlja25lc3NcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLjIsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAwLFxcblxcdFxcdFxcdFxcdFxcdG1heDogMixcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHNwZWN1bGFyRXhwb25lbnQ6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcInNwZWN1bGFyRXhwb25lbnRcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxNCxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IC0xMCxcXG5cXHRcXHRcXHRcXHRcXHRtYXg6IDMwLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0c3BlY3VsYXJJbnRlbnNpdHk6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcInNwZWN1bGFySW50ZW5zaXR5XFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdGxpZ2h0OiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJsaWdodFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDEsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAtMSxcXG5cXHRcXHRcXHRcXHRcXHRtYXg6ICszLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHQvPlxcblxcdCk7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHRUZ2RCb3VuZGluZ0JveCxcblx0VGdkQ2FtZXJhT3J0aG9ncmFwaGljLFxuXHRUZ2RDb2xvcixcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdFRnZERhdGFzZXQsXG5cdFRnZEdlb21ldHJ5Qm94LFxuXHRUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlclBvaW50c0Nsb3VkLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcblx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuXHQvLyAjYmVnaW5cblx0Y29udGV4dC5jYW1lcmEgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKCk7XG5cdGNvbnRleHQuZXhlY0JlZm9yZU5leHRQYWludCgoKSA9PiB7XG5cdFx0Y29uc3QgcmFkaXVzID0gMztcblx0XHRjb250ZXh0LmNhbWVyYS5maXRCb3VuZGluZ0JveChcblx0XHRcdG5ldyBUZ2RCb3VuZGluZ0JveCgpLmFkZFNwaGVyZSgwLCAwLCAwLCByYWRpdXMpLFxuXHRcdCk7XG5cdFx0Y29udGV4dC5jYW1lcmEuZGVidWcoKTtcblx0fSk7XG5cdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRtYXhab29tOiA1LFxuXHRcdG1pblpvb206IDAuMjUsXG5cdFx0c3BlZWRab29tOiAxLFxuXHR9KTtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxuXHRcdGRlcHRoOiAxLFxuXHR9KTtcblx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHRQT1NJVElPTjogXCJ2ZWM0XCIsXG5cdH0pO1xuXHRjb25zdCBjb29yZHM6IG51bWJlcltdID0gW107XG5cdGNvbnN0IHV2czogbnVtYmVyW10gPSBbXTtcblx0Y29uc3QgY29sb3JzOiBUZ2RDb2xvcltdID0gW107XG5cdGNvbnN0IHZhbHVlcyA9IFstMSwgKzFdO1xuXHRjb25zdCByYWRpdXMgPSAxO1xuXHRsZXQgaW5kZXggPSAwO1xuXHRmb3IgKGNvbnN0IHggb2YgdmFsdWVzKSB7XG5cdFx0Zm9yIChjb25zdCB5IG9mIHZhbHVlcykge1xuXHRcdFx0Zm9yIChjb25zdCB6IG9mIHZhbHVlcykge1xuXHRcdFx0XHRjb29yZHMucHVzaCh4LCB5LCB6LCByYWRpdXMpO1xuXHRcdFx0XHRjb25zdCB1ID0gaW5kZXggLyA4O1xuXHRcdFx0XHR1dnMucHVzaCh1LCB1KTtcblx0XHRcdFx0Y29sb3JzLnB1c2goVGdkQ29sb3IuZnJvbUhTTCh1LCAxLCAwLjUpKTtcblx0XHRcdFx0Y29uc3QgZGlzdCA9IDEuNjY2O1xuXHRcdFx0XHRjb29yZHMucHVzaChkaXN0ICogeCwgZGlzdCAqIHksIGRpc3QgKiB6LCByYWRpdXMgLyAyKTtcblx0XHRcdFx0dXZzLnB1c2godSwgdSk7XG5cdFx0XHRcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0wodSwgMSwgMC41KSk7XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGRhdGFzZXQuc2V0KFwiUE9TSVRJT05cIiwgbmV3IEZsb2F0MzJBcnJheShjb29yZHMpKTtcblx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuXHRcdHBhcmFtczoge1xuXHRcdFx0bWluRmlsdGVyOiBcIk5FQVJFU1RcIixcblx0XHRcdG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXG5cdFx0fSxcblx0fSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKGNvbG9ycykpO1xuXHRjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xuXHRcdGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxuXHRcdGRhdGFVVjogbmV3IEZsb2F0MzJBcnJheSh1dnMpLFxuXHRcdHRleHR1cmUsXG5cdFx0bWluU2l6ZUluUGl4ZWxzOiAzMixcblx0fSk7XG5cdGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuXHRcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goeyBzaXplWDogMiwgc2l6ZVk6IDIsIHNpemVaOiAyIH0pLFxuXHRcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKSxcblx0fSk7XG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRjaGlsZHJlbjogW2N1YmUsIGNsb3VkXSxcblx0XHQvLyBjaGlsZHJlbjogW2Nsb3VkXSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XG5cdGNvbnRleHQucGFpbnQoKTtcblx0Ly8gI2VuZFxuXHRyZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG5cdFx0Y2xvdWQucmFkaXVzTXVsdGlwbGllciA9IHNldHRpbmdzLnJhZGl1c011bHRpcGxpZXI7XG5cdFx0Y2xvdWQuc2hhZG93SW50ZW5zaXR5ID0gc2V0dGluZ3Muc2hhZG93SW50ZW5zaXR5O1xuXHRcdGNsb3VkLnNoYWRvd1RoaWNrbmVzcyA9IHNldHRpbmdzLnNoYWRvd1RoaWNrbmVzcztcblx0XHRjbG91ZC5zcGVjdWxhckV4cG9uZW50ID0gc2V0dGluZ3Muc3BlY3VsYXJFeHBvbmVudDtcblx0XHRjbG91ZC5zcGVjdWxhckludGVuc2l0eSA9IHNldHRpbmdzLnNwZWN1bGFySW50ZW5zaXR5O1xuXHRcdGNsb3VkLmxpZ2h0ID0gc2V0dGluZ3MubGlnaHQ7XG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0Z2l6bW9cblx0XHRcdG9wdGlvbnM9e3tcblx0XHRcdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdFx0fX1cblx0XHRcdHNldHRpbmdzPXt7XG5cdFx0XHRcdHJhZGl1c011bHRpcGxpZXI6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJyYWRpdXNNdWx0aXBsaWVyXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0bWluOiAwLjUsXG5cdFx0XHRcdFx0bWF4OiAyLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzaGFkb3dJbnRlbnNpdHk6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJzaGFkb3dJbnRlbnNpdHlcIixcblx0XHRcdFx0XHR2YWx1ZTogMC43NSxcblx0XHRcdFx0fSxcblx0XHRcdFx0c2hhZG93VGhpY2tuZXNzOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwic2hhZG93VGhpY2tuZXNzXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEuMixcblx0XHRcdFx0XHRtaW46IDAsXG5cdFx0XHRcdFx0bWF4OiAyLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzcGVjdWxhckV4cG9uZW50OiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwic3BlY3VsYXJFeHBvbmVudFwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxNCxcblx0XHRcdFx0XHRtaW46IC0xMCxcblx0XHRcdFx0XHRtYXg6IDMwLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzcGVjdWxhckludGVuc2l0eToge1xuXHRcdFx0XHRcdGxhYmVsOiBcInNwZWN1bGFySW50ZW5zaXR5XCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxpZ2h0OiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwibGlnaHRcIixcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRtaW46IC0xLFxuXHRcdFx0XHRcdG1heDogKzMsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZENvbG9yIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJQb2ludHNDbG91ZCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsInRnZENhbnZhc0NyZWF0ZVBhbGV0dGUiLCJ3ZWJnbFByZXNldERlcHRoIiwiTW9ua2V5VVJMIiwiVmlldyIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2xlYXIiLCJ0ZXh0dXJlIiwiY3JlYXRlUGFsZXR0ZSIsImRhdGFzZXQiLCJtYWtlRGF0YXNldCIsImNvbnNvbGUiLCJjbG91ZCIsIkZsb2F0MzJBcnJheSIsIm1ha2VVViIsInN0YXRlIiwiZ2xiIiwic2V0IiwiY291bnQiLCJyYWRpdXMiLCJpIiwidXZzIiwiZ2V0IiwibngiLCJueSIsInUiLCJ2IiwiY29sb3JzIiwiUyIsIl9pdGVyIiwiTCIsIl9pdGVyMSIsIkgiLCJUZ2RCb3VuZGluZ0JveCIsIlRnZENhbWVyYU9ydGhvZ3JhcGhpYyIsIlRnZEdlb21ldHJ5Qm94IiwiVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24iLCJUZ2RQYWludGVyTWVzaCIsImNvb3JkcyIsInZhbHVlcyIsImluZGV4IiwiX2l0ZXJhdG9yRXJyb3IiLCJ4IiwiX2l0ZXJhdG9yRXJyb3IxIiwieSIsIl9pdGVyYXRvckVycm9yMiIsInoiLCJkaXN0IiwiY3ViZSIsInNldHRpbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUNmO0FBRXRDLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQTRnQztBQUN2aUMsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osOENBQUlBOzs7Ozs7Ozs7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