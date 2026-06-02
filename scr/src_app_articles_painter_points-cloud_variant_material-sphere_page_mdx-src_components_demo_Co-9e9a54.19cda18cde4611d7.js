"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_points-cloud_variant_material-sphere_page_mdx-src_components_demo_Co-9e9a54"], {
8755(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/high-res-monkey.9d3a83c717063744.glb";

},
87865(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _points_cloud_demo__rspack_import_4 = __webpack_require__(26681);
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
    "Detail #1": "\tcontext.camera.transfo.distance = 5;\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.5,\n\t\tspeedZoom: 1,\n\t});\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t});\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(tgdCanvasCreatePalette([\"#f74\", \"#ff0\", \"#59f\"]));\n\tconst dataset = makeDataset(assets.glb.monkey);\n\tconsole.log(\"🐞 [points-cloud.demo@52] dataset.count =\", dataset.count); // @FIXME: Remove this line written on 2026-06-02 at 15:07\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\ttexture,\n\t});\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cloud],\n\t});\n\tcontext.add(clear, state);\n\tcontext.paint();"
};
var FULL = "import {\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\ttype TgdDataGlb,\n\tTgdDataset,\n\tTgdPainterClear,\n\tTgdPainterPointsCloud,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdCanvasCreatePalette,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport MonkeyURL from \"@/assets/mesh/high-res-monkey.glb\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nfunction makeDataset(glb: TgdDataGlb) {\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t});\n\tglb.setAttrib(dataset, \"POSITION\");\n\tconst { set } = dataset.getAttribAccessor(\"POSITION\");\n\tconst count = dataset.count;\n\tconst radius = 0.01;\n\tfor (let i = 0; i < count; i++) {\n\t\tset(radius, i, 3);\n\t}\n\treturn dataset;\n}\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera.transfo.distance = 5;\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.5,\n\t\tspeedZoom: 1,\n\t});\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t});\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(tgdCanvasCreatePalette([\"#f74\", \"#ff0\", \"#59f\"]));\n\tconst dataset = makeDataset(assets.glb.monkey);\n\tconsole.log(\"🐞 [points-cloud.demo@52] dataset.count =\", dataset.count); // @FIXME: Remove this line written on 2026-06-02 at 15:07\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\ttexture,\n\t});\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cloud],\n\t});\n\tcontext.add(clear, state);\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tassets={{\n\t\t\t\tglb: { monkey: MonkeyURL },\n\t\t\t}}\n\t\t/>\n\t);\n}\n\nfunction makeUV(count: number, value: number) {\n\tconst data = new Float32Array(count * 2);\n\tfor (let i = 0; i < data.length; i++) {\n\t\tdata[i] = value;\n\t}\n\treturn data;\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
26681(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _assets_mesh_high_res_monkey_glb__rspack_import_2 = __webpack_require__(8755);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(43475);




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
    }).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)([
        "#f74",
        "#ff0",
        "#59f"
    ]));
    var dataset = makeDataset(assets.glb.monkey);
    console.log("🐞 [points-cloud.demo@52] dataset.count =", dataset.count); // @FIXME: Remove this line written on 2026-06-02 at 15:07
    var cloud = new _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloud(context, {
        dataPoint: new Float32Array(dataset.data),
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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/points-cloud.demo.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, this);
}
function makeUV(count, value) {
    var data = new Float32Array(count * 2);
    for(var i = 0; i < data.length; i++){
        data[i] = value;
    }
    return data;
}


},
29529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _points_cloud_demo__rspack_import_4 = __webpack_require__(12505);
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
12505(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/points-cloud.demo.tsx",
        lineNumber: 102,
        columnNumber: 3
    }, this);
}


},
33168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _points_cloud_demo__rspack_import_1 = __webpack_require__(29529);
/* import */ var _many_demo__rspack_import_2 = __webpack_require__(87865);
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
        h2: "h2",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Points Clouds"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterPointsCloud.html",
                    children: "TgdPainterPointsCloud"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                    lineNumber: 6,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterPointsCloudMorphing.html",
                    children: "TgdPainterPointsCloudMorphing"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                    lineNumber: 10,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "It is also possible to use morphing between two positions."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_many_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wb2ludHMtY2xvdWRfdmFyaWFudF9tYXRlcmlhbC1zcGhlcmVfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Dby05ZTlhNTQuMTljZGExOGNkZTQ2MTFkNy5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvdmFyaWFudC9tYXRlcmlhbC1zcGhlcmUvXy9tYW55LmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvdmFyaWFudC9tYXRlcmlhbC1zcGhlcmUvXy9tYW55LmRlbW8vcG9pbnRzLWNsb3VkLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvdmFyaWFudC9tYXRlcmlhbC1zcGhlcmUvXy9wb2ludHMtY2xvdWQuZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L21hdGVyaWFsLXNwaGVyZS9fL3BvaW50cy1jbG91ZC5kZW1vL3BvaW50cy1jbG91ZC5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL3ZhcmlhbnQvbWF0ZXJpYWwtc3BoZXJlL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vcG9pbnRzLWNsb3VkLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiXFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDU7XFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdG1heFpvb206IDUsXFxuXFx0XFx0bWluWm9vbTogMC41LFxcblxcdFxcdHNwZWVkWm9vbTogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuXFx0XFx0ZGVwdGg6IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0bWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHR3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0fSxcXG5cXHR9KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjZjc0XFxcIiwgXFxcIiNmZjBcXFwiLCBcXFwiIzU5ZlxcXCJdKSk7XFxuXFx0Y29uc3QgZGF0YXNldCA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5KTtcXG5cXHRjb25zb2xlLmxvZyhcXFwi8J+QniBbcG9pbnRzLWNsb3VkLmRlbW9ANTJdIGRhdGFzZXQuY291bnQgPVxcXCIsIGRhdGFzZXQuY291bnQpOyAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA2LTAyIGF0IDE1OjA3XFxuXFx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcXG5cXHRcXHRkYXRhUG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKSxcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdH0pO1xcblxcdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRjaGlsZHJlbjogW2Nsb3VkXSxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHR0eXBlIFRnZERhdGFHbGIsXFxuXFx0VGdkRGF0YXNldCxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlclBvaW50c0Nsb3VkLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxuXFx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcbmltcG9ydCBNb25rZXlVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXFxcIjtcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XFxuXFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG5cXHRcXHRQT1NJVElPTjogXFxcInZlYzRcXFwiLFxcblxcdH0pO1xcblxcdGdsYi5zZXRBdHRyaWIoZGF0YXNldCwgXFxcIlBPU0lUSU9OXFxcIik7XFxuXFx0Y29uc3QgeyBzZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXFxcIlBPU0lUSU9OXFxcIik7XFxuXFx0Y29uc3QgY291bnQgPSBkYXRhc2V0LmNvdW50O1xcblxcdGNvbnN0IHJhZGl1cyA9IDAuMDE7XFxuXFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XFxuXFx0XFx0c2V0KHJhZGl1cywgaSwgMyk7XFxuXFx0fVxcblxcdHJldHVybiBkYXRhc2V0O1xcbn1cXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDU7XFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdG1heFpvb206IDUsXFxuXFx0XFx0bWluWm9vbTogMC41LFxcblxcdFxcdHNwZWVkWm9vbTogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuXFx0XFx0ZGVwdGg6IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0bWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHR3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0fSxcXG5cXHR9KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjZjc0XFxcIiwgXFxcIiNmZjBcXFwiLCBcXFwiIzU5ZlxcXCJdKSk7XFxuXFx0Y29uc3QgZGF0YXNldCA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5KTtcXG5cXHRjb25zb2xlLmxvZyhcXFwi8J+QniBbcG9pbnRzLWNsb3VkLmRlbW9ANTJdIGRhdGFzZXQuY291bnQgPVxcXCIsIGRhdGFzZXQuY291bnQpOyAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA2LTAyIGF0IDE1OjA3XFxuXFx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcXG5cXHRcXHRkYXRhUG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKSxcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdH0pO1xcblxcdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRjaGlsZHJlbjogW2Nsb3VkXSxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRnaXptb1xcblxcdFxcdFxcdG9wdGlvbnM9e3tcXG5cXHRcXHRcXHRcXHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRnbGI6IHsgbW9ua2V5OiBNb25rZXlVUkwgfSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KTtcXG59XFxuXFxuZnVuY3Rpb24gbWFrZVVWKGNvdW50OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcXG5cXHRjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheShjb3VudCAqIDIpO1xcblxcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xcblxcdFxcdGRhdGFbaV0gPSB2YWx1ZTtcXG5cXHR9XFxuXFx0cmV0dXJuIGRhdGE7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcblx0dHlwZSBUZ2REYXRhR2xiLFxuXHRUZ2REYXRhc2V0LFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJQb2ludHNDbG91ZCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IE1vbmtleVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0UE9TSVRJT046IFwidmVjNFwiLFxuXHR9KTtcblx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcIlBPU0lUSU9OXCIpO1xuXHRjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcIlBPU0lUSU9OXCIpO1xuXHRjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnQ7XG5cdGNvbnN0IHJhZGl1cyA9IDAuMDE7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdHNldChyYWRpdXMsIGksIDMpO1xuXHR9XG5cdHJldHVybiBkYXRhc2V0O1xufVxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdC8vICNiZWdpblxuXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNTtcblx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG5cdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdG1heFpvb206IDUsXG5cdFx0bWluWm9vbTogMC41LFxuXHRcdHNwZWVkWm9vbTogMSxcblx0fSk7XG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSk7XG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRwYXJhbXM6IHtcblx0XHRcdG1pbkZpbHRlcjogXCJMSU5FQVJcIixcblx0XHRcdG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcblx0XHRcdHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcblx0XHRcdHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcblx0XHR9LFxuXHR9KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiI2Y3NFwiLCBcIiNmZjBcIiwgXCIjNTlmXCJdKSk7XG5cdGNvbnN0IGRhdGFzZXQgPSBtYWtlRGF0YXNldChhc3NldHMuZ2xiLm1vbmtleSk7XG5cdGNvbnNvbGUubG9nKFwi8J+QniBbcG9pbnRzLWNsb3VkLmRlbW9ANTJdIGRhdGFzZXQuY291bnQgPVwiLCBkYXRhc2V0LmNvdW50KTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNi0wMiBhdCAxNTowN1xuXHRjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xuXHRcdGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxuXHRcdHRleHR1cmUsXG5cdH0pO1xuXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0Y2hpbGRyZW46IFtjbG91ZF0sXG5cdH0pO1xuXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xuXHRjb250ZXh0LnBhaW50KCk7XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGdpem1vXG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdH19XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0Z2xiOiB7IG1vbmtleTogTW9ua2V5VVJMIH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VVVihjb3VudDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKSB7XG5cdGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGNvdW50ICogMik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGRhdGFbaV0gPSB2YWx1ZTtcblx0fVxuXHRyZXR1cm4gZGF0YTtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9wb2ludHMtY2xvdWQuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJcXHRjb250ZXh0LmNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoKTtcXG5cXHRjb250ZXh0LmV4ZWNCZWZvcmVOZXh0UGFpbnQoKCkgPT4ge1xcblxcdFxcdGNvbnN0IHJhZGl1cyA9IDM7XFxuXFx0XFx0Y29udGV4dC5jYW1lcmEuZml0Qm91bmRpbmdCb3goXFxuXFx0XFx0XFx0bmV3IFRnZEJvdW5kaW5nQm94KCkuYWRkU3BoZXJlKDAsIDAsIDAsIHJhZGl1cyksXFxuXFx0XFx0KTtcXG5cXHRcXHRjb250ZXh0LmNhbWVyYS5kZWJ1ZygpO1xcblxcdH0pO1xcblxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcblxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRtYXhab29tOiA1LFxcblxcdFxcdG1pblpvb206IDAuMjUsXFxuXFx0XFx0c3BlZWRab29tOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcblxcdFxcdFBPU0lUSU9OOiBcXFwidmVjNFxcXCIsXFxuXFx0fSk7XFxuXFx0Y29uc3QgY29vcmRzOiBudW1iZXJbXSA9IFtdO1xcblxcdGNvbnN0IHV2czogbnVtYmVyW10gPSBbXTtcXG5cXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXTtcXG5cXHRjb25zdCB2YWx1ZXMgPSBbLTEsICsxXTtcXG5cXHRjb25zdCByYWRpdXMgPSAxO1xcblxcdGxldCBpbmRleCA9IDA7XFxuXFx0Zm9yIChjb25zdCB4IG9mIHZhbHVlcykge1xcblxcdFxcdGZvciAoY29uc3QgeSBvZiB2YWx1ZXMpIHtcXG5cXHRcXHRcXHRmb3IgKGNvbnN0IHogb2YgdmFsdWVzKSB7XFxuXFx0XFx0XFx0XFx0Y29vcmRzLnB1c2goeCwgeSwgeiwgcmFkaXVzKTtcXG5cXHRcXHRcXHRcXHRjb25zdCB1ID0gaW5kZXggLyA4O1xcblxcdFxcdFxcdFxcdHV2cy5wdXNoKHUsIHUpO1xcblxcdFxcdFxcdFxcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0wodSwgMSwgMC41KSk7XFxuXFx0XFx0XFx0XFx0Y29uc3QgZGlzdCA9IDEuNjY2O1xcblxcdFxcdFxcdFxcdGNvb3Jkcy5wdXNoKGRpc3QgKiB4LCBkaXN0ICogeSwgZGlzdCAqIHosIHJhZGl1cyAvIDIpO1xcblxcdFxcdFxcdFxcdHV2cy5wdXNoKHUsIHUpO1xcblxcdFxcdFxcdFxcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0wodSwgMSwgMC41KSk7XFxuXFx0XFx0XFx0XFx0aW5kZXgrKztcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRkYXRhc2V0LnNldChcXFwiUE9TSVRJT05cXFwiLCBuZXcgRmxvYXQzMkFycmF5KGNvb3JkcykpO1xcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRwYXJhbXM6IHtcXG5cXHRcXHRcXHRtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG5cXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG5cXHRcXHR9LFxcblxcdH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMpKTtcXG5cXHRjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xcblxcdFxcdGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxcblxcdFxcdGRhdGFVVjogbmV3IEZsb2F0MzJBcnJheSh1dnMpLFxcblxcdFxcdHRleHR1cmUsXFxuXFx0XFx0bWluU2l6ZUluUGl4ZWxzOiAzMixcXG5cXHR9KTtcXG5cXHRjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHsgc2l6ZVg6IDIsIHNpemVZOiAyLCBzaXplWjogMiB9KSxcXG5cXHRcXHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXFxuXFx0fSk7XFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbY3ViZSwgY2xvdWRdLFxcblxcdFxcdC8vIGNoaWxkcmVuOiBbY2xvdWRdLFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XFxuXFx0Y29udGV4dC5wYWludCgpO1wifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHRUZ2RCb3VuZGluZ0JveCxcXG5cXHRUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXFxuXFx0VGdkQ29sb3IsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHRUZ2REYXRhc2V0LFxcblxcdFRnZEdlb21ldHJ5Qm94LFxcblxcdFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyTWVzaCxcXG5cXHRUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFRleHR1cmUyRCxcXG5cXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcblxcdHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG5cXHRjb250ZXh0LmNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoKTtcXG5cXHRjb250ZXh0LmV4ZWNCZWZvcmVOZXh0UGFpbnQoKCkgPT4ge1xcblxcdFxcdGNvbnN0IHJhZGl1cyA9IDM7XFxuXFx0XFx0Y29udGV4dC5jYW1lcmEuZml0Qm91bmRpbmdCb3goXFxuXFx0XFx0XFx0bmV3IFRnZEJvdW5kaW5nQm94KCkuYWRkU3BoZXJlKDAsIDAsIDAsIHJhZGl1cyksXFxuXFx0XFx0KTtcXG5cXHRcXHRjb250ZXh0LmNhbWVyYS5kZWJ1ZygpO1xcblxcdH0pO1xcblxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcblxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRtYXhab29tOiA1LFxcblxcdFxcdG1pblpvb206IDAuMjUsXFxuXFx0XFx0c3BlZWRab29tOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcblxcdFxcdFBPU0lUSU9OOiBcXFwidmVjNFxcXCIsXFxuXFx0fSk7XFxuXFx0Y29uc3QgY29vcmRzOiBudW1iZXJbXSA9IFtdO1xcblxcdGNvbnN0IHV2czogbnVtYmVyW10gPSBbXTtcXG5cXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXTtcXG5cXHRjb25zdCB2YWx1ZXMgPSBbLTEsICsxXTtcXG5cXHRjb25zdCByYWRpdXMgPSAxO1xcblxcdGxldCBpbmRleCA9IDA7XFxuXFx0Zm9yIChjb25zdCB4IG9mIHZhbHVlcykge1xcblxcdFxcdGZvciAoY29uc3QgeSBvZiB2YWx1ZXMpIHtcXG5cXHRcXHRcXHRmb3IgKGNvbnN0IHogb2YgdmFsdWVzKSB7XFxuXFx0XFx0XFx0XFx0Y29vcmRzLnB1c2goeCwgeSwgeiwgcmFkaXVzKTtcXG5cXHRcXHRcXHRcXHRjb25zdCB1ID0gaW5kZXggLyA4O1xcblxcdFxcdFxcdFxcdHV2cy5wdXNoKHUsIHUpO1xcblxcdFxcdFxcdFxcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0wodSwgMSwgMC41KSk7XFxuXFx0XFx0XFx0XFx0Y29uc3QgZGlzdCA9IDEuNjY2O1xcblxcdFxcdFxcdFxcdGNvb3Jkcy5wdXNoKGRpc3QgKiB4LCBkaXN0ICogeSwgZGlzdCAqIHosIHJhZGl1cyAvIDIpO1xcblxcdFxcdFxcdFxcdHV2cy5wdXNoKHUsIHUpO1xcblxcdFxcdFxcdFxcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0wodSwgMSwgMC41KSk7XFxuXFx0XFx0XFx0XFx0aW5kZXgrKztcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRkYXRhc2V0LnNldChcXFwiUE9TSVRJT05cXFwiLCBuZXcgRmxvYXQzMkFycmF5KGNvb3JkcykpO1xcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRwYXJhbXM6IHtcXG5cXHRcXHRcXHRtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG5cXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG5cXHRcXHR9LFxcblxcdH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMpKTtcXG5cXHRjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xcblxcdFxcdGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxcblxcdFxcdGRhdGFVVjogbmV3IEZsb2F0MzJBcnJheSh1dnMpLFxcblxcdFxcdHRleHR1cmUsXFxuXFx0XFx0bWluU2l6ZUluUGl4ZWxzOiAzMixcXG5cXHR9KTtcXG5cXHRjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHsgc2l6ZVg6IDIsIHNpemVZOiAyLCBzaXplWjogMiB9KSxcXG5cXHRcXHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXFxuXFx0fSk7XFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbY3ViZSwgY2xvdWRdLFxcblxcdFxcdC8vIGNoaWxkcmVuOiBbY2xvdWRdLFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XFxuXFx0Y29udGV4dC5wYWludCgpO1xcblxcdHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcXG5cXHRcXHRjbG91ZC5yYWRpdXNNdWx0aXBsaWVyID0gc2V0dGluZ3MucmFkaXVzTXVsdGlwbGllcjtcXG5cXHRcXHRjbG91ZC5zaGFkb3dJbnRlbnNpdHkgPSBzZXR0aW5ncy5zaGFkb3dJbnRlbnNpdHk7XFxuXFx0XFx0Y2xvdWQuc2hhZG93VGhpY2tuZXNzID0gc2V0dGluZ3Muc2hhZG93VGhpY2tuZXNzO1xcblxcdFxcdGNsb3VkLnNwZWN1bGFyRXhwb25lbnQgPSBzZXR0aW5ncy5zcGVjdWxhckV4cG9uZW50O1xcblxcdFxcdGNsb3VkLnNwZWN1bGFySW50ZW5zaXR5ID0gc2V0dGluZ3Muc3BlY3VsYXJJbnRlbnNpdHk7XFxuXFx0XFx0Y2xvdWQubGlnaHQgPSBzZXR0aW5ncy5saWdodDtcXG5cXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0fTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRnaXptb1xcblxcdFxcdFxcdG9wdGlvbnM9e3tcXG5cXHRcXHRcXHRcXHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRzZXR0aW5ncz17e1xcblxcdFxcdFxcdFxcdHJhZGl1c011bHRpcGxpZXI6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcInJhZGl1c011bHRpcGxpZXJcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogMC41LFxcblxcdFxcdFxcdFxcdFxcdG1heDogMixcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHNoYWRvd0ludGVuc2l0eToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwic2hhZG93SW50ZW5zaXR5XFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMC43NSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHNoYWRvd1RoaWNrbmVzczoge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwic2hhZG93VGhpY2tuZXNzXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMS4yLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogMCxcXG5cXHRcXHRcXHRcXHRcXHRtYXg6IDIsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRzcGVjdWxhckV4cG9uZW50OiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJzcGVjdWxhckV4cG9uZW50XFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMTQsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAtMTAsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiAzMCxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHNwZWN1bGFySW50ZW5zaXR5OiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJzcGVjdWxhckludGVuc2l0eVxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDEsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRsaWdodDoge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwibGlnaHRcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogLTEsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiArMyxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpO1xcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0VGdkQm91bmRpbmdCb3gsXG5cdFRnZENhbWVyYU9ydGhvZ3JhcGhpYyxcblx0VGdkQ29sb3IsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuXHRUZ2REYXRhc2V0LFxuXHRUZ2RHZW9tZXRyeUJveCxcblx0VGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJQb2ludHNDbG91ZCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcblx0Ly8gI2JlZ2luXG5cdGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYygpO1xuXHRjb250ZXh0LmV4ZWNCZWZvcmVOZXh0UGFpbnQoKCkgPT4ge1xuXHRcdGNvbnN0IHJhZGl1cyA9IDM7XG5cdFx0Y29udGV4dC5jYW1lcmEuZml0Qm91bmRpbmdCb3goXG5cdFx0XHRuZXcgVGdkQm91bmRpbmdCb3goKS5hZGRTcGhlcmUoMCwgMCwgMCwgcmFkaXVzKSxcblx0XHQpO1xuXHRcdGNvbnRleHQuY2FtZXJhLmRlYnVnKCk7XG5cdH0pO1xuXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcblx0XHRpbmVydGlhT3JiaXQ6IDEwMDAsXG5cdFx0bWF4Wm9vbTogNSxcblx0XHRtaW5ab29tOiAwLjI1LFxuXHRcdHNwZWVkWm9vbTogMSxcblx0fSk7XG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSk7XG5cdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0UE9TSVRJT046IFwidmVjNFwiLFxuXHR9KTtcblx0Y29uc3QgY29vcmRzOiBudW1iZXJbXSA9IFtdO1xuXHRjb25zdCB1dnM6IG51bWJlcltdID0gW107XG5cdGNvbnN0IGNvbG9yczogVGdkQ29sb3JbXSA9IFtdO1xuXHRjb25zdCB2YWx1ZXMgPSBbLTEsICsxXTtcblx0Y29uc3QgcmFkaXVzID0gMTtcblx0bGV0IGluZGV4ID0gMDtcblx0Zm9yIChjb25zdCB4IG9mIHZhbHVlcykge1xuXHRcdGZvciAoY29uc3QgeSBvZiB2YWx1ZXMpIHtcblx0XHRcdGZvciAoY29uc3QgeiBvZiB2YWx1ZXMpIHtcblx0XHRcdFx0Y29vcmRzLnB1c2goeCwgeSwgeiwgcmFkaXVzKTtcblx0XHRcdFx0Y29uc3QgdSA9IGluZGV4IC8gODtcblx0XHRcdFx0dXZzLnB1c2godSwgdSk7XG5cdFx0XHRcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0wodSwgMSwgMC41KSk7XG5cdFx0XHRcdGNvbnN0IGRpc3QgPSAxLjY2Njtcblx0XHRcdFx0Y29vcmRzLnB1c2goZGlzdCAqIHgsIGRpc3QgKiB5LCBkaXN0ICogeiwgcmFkaXVzIC8gMik7XG5cdFx0XHRcdHV2cy5wdXNoKHUsIHUpO1xuXHRcdFx0XHRjb2xvcnMucHVzaChUZ2RDb2xvci5mcm9tSFNMKHUsIDEsIDAuNSkpO1xuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRkYXRhc2V0LnNldChcIlBPU0lUSU9OXCIsIG5ldyBGbG9hdDMyQXJyYXkoY29vcmRzKSk7XG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRwYXJhbXM6IHtcblx0XHRcdG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG5cdFx0XHRtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdH0sXG5cdH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMpKTtcblx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcblx0XHRkYXRhUG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKSxcblx0XHRkYXRhVVY6IG5ldyBGbG9hdDMyQXJyYXkodXZzKSxcblx0XHR0ZXh0dXJlLFxuXHRcdG1pblNpemVJblBpeGVsczogMzIsXG5cdH0pO1xuXHRjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcblx0XHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHsgc2l6ZVg6IDIsIHNpemVZOiAyLCBzaXplWjogMiB9KSxcblx0XHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXG5cdH0pO1xuXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0Y2hpbGRyZW46IFtjdWJlLCBjbG91ZF0sXG5cdFx0Ly8gY2hpbGRyZW46IFtjbG91ZF0sXG5cdH0pO1xuXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xuXHRjb250ZXh0LnBhaW50KCk7XG5cdC8vICNlbmRcblx0cmV0dXJuIChzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xuXHRcdGNsb3VkLnJhZGl1c011bHRpcGxpZXIgPSBzZXR0aW5ncy5yYWRpdXNNdWx0aXBsaWVyO1xuXHRcdGNsb3VkLnNoYWRvd0ludGVuc2l0eSA9IHNldHRpbmdzLnNoYWRvd0ludGVuc2l0eTtcblx0XHRjbG91ZC5zaGFkb3dUaGlja25lc3MgPSBzZXR0aW5ncy5zaGFkb3dUaGlja25lc3M7XG5cdFx0Y2xvdWQuc3BlY3VsYXJFeHBvbmVudCA9IHNldHRpbmdzLnNwZWN1bGFyRXhwb25lbnQ7XG5cdFx0Y2xvdWQuc3BlY3VsYXJJbnRlbnNpdHkgPSBzZXR0aW5ncy5zcGVjdWxhckludGVuc2l0eTtcblx0XHRjbG91ZC5saWdodCA9IHNldHRpbmdzLmxpZ2h0O1xuXHRcdGNvbnRleHQucGFpbnQoKTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGdpem1vXG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdH19XG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHRyYWRpdXNNdWx0aXBsaWVyOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwicmFkaXVzTXVsdGlwbGllclwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHRcdG1pbjogMC41LFxuXHRcdFx0XHRcdG1heDogMixcblx0XHRcdFx0fSxcblx0XHRcdFx0c2hhZG93SW50ZW5zaXR5OiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwic2hhZG93SW50ZW5zaXR5XCIsXG5cdFx0XHRcdFx0dmFsdWU6IDAuNzUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNoYWRvd1RoaWNrbmVzczoge1xuXHRcdFx0XHRcdGxhYmVsOiBcInNoYWRvd1RoaWNrbmVzc1wiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLjIsXG5cdFx0XHRcdFx0bWluOiAwLFxuXHRcdFx0XHRcdG1heDogMixcblx0XHRcdFx0fSxcblx0XHRcdFx0c3BlY3VsYXJFeHBvbmVudDoge1xuXHRcdFx0XHRcdGxhYmVsOiBcInNwZWN1bGFyRXhwb25lbnRcIixcblx0XHRcdFx0XHR2YWx1ZTogMTQsXG5cdFx0XHRcdFx0bWluOiAtMTAsXG5cdFx0XHRcdFx0bWF4OiAzMCxcblx0XHRcdFx0fSxcblx0XHRcdFx0c3BlY3VsYXJJbnRlbnNpdHk6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJzcGVjdWxhckludGVuc2l0eVwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsaWdodDoge1xuXHRcdFx0XHRcdGxhYmVsOiBcImxpZ2h0XCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0bWluOiAtMSxcblx0XHRcdFx0XHRtYXg6ICszLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2REYXRhc2V0IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlclBvaW50c0Nsb3VkIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwidGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJNb25rZXlVUkwiLCJWaWV3IiwibWFrZURhdGFzZXQiLCJnbGIiLCJkYXRhc2V0Iiwic2V0IiwiY291bnQiLCJyYWRpdXMiLCJpIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjbGVhciIsInRleHR1cmUiLCJjb25zb2xlIiwiY2xvdWQiLCJGbG9hdDMyQXJyYXkiLCJzdGF0ZSIsIm1ha2VVViIsInZhbHVlIiwiZGF0YSIsIlRnZEJvdW5kaW5nQm94IiwiVGdkQ2FtZXJhT3J0aG9ncmFwaGljIiwiVGdkQ29sb3IiLCJUZ2RHZW9tZXRyeUJveCIsIlRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uIiwiVGdkUGFpbnRlck1lc2giLCJjb29yZHMiLCJ1dnMiLCJjb2xvcnMiLCJ2YWx1ZXMiLCJpbmRleCIsIl9pdGVyYXRvckVycm9yIiwieCIsIl9pdGVyYXRvckVycm9yMSIsInkiLCJfaXRlcmF0b3JFcnJvcjIiLCJ6IiwidSIsImRpc3QiLCJjdWJlIiwic2V0dGluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ2Y7QUFFdEMsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBeS9CO0FBQ3BoQyxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSiw4Q0FBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ2xEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR3RDLGtEQUFDTix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPTSxPQUFPSCxPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFHNUQ7Ozs7Ozs7Ozs7Ozs7O0FDYndCO0FBQ2tDO0FBQ0E7QUFFMUQsU0FBU2lCLFlBQVlDLEdBQWU7SUFDbkMsSUFBTUMsVUFBVSxJQUFJWCwwQ0FBVUEsQ0FBQztRQUM5QixVQUFVO0lBQ1g7SUFDQVUsSUFBSSxTQUFTLENBQUNDLFNBQVM7SUFDdkIsSUFBUUMsTUFBUUQsUUFBUSxpQkFBaUIsQ0FBQyxZQUFsQ0M7SUFDUixJQUFNQyxRQUFR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