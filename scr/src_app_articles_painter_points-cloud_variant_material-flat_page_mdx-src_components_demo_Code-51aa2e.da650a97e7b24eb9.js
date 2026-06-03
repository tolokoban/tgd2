"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_points-cloud_variant_material-flat_page_mdx-src_components_demo_Code-51aa2e"], {
8755(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/high-res-monkey.5d18cfe478366fe5.glb";

},
29607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _points_cloud_demo__rspack_import_4 = __webpack_require__(34903);
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
    "Detail #1": "\tcontext.camera.transfo.distance = 5;\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.5,\n\t\tspeedZoom: 1,\n\t});\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t});\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(createPalette());\n\tconst dataset = makeDataset(assets.glb.monkey);\n\tconsole.log(\"🐞 [points-cloud.demo@52] dataset.count =\", dataset.count); // @FIXME: Remove this line written on 2026-06-02 at 15:07\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\tdataUV: new Float32Array(makeUV(assets.glb.monkey)),\n\t\ttexture,\n\t\tfragCode: TgdPainterPointsCloud.fragCodeFlat(),\n\t});\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cloud],\n\t});\n\tcontext.add(clear, state);\n\tcontext.paint();"
};
var FULL = "import {\n\tTgdColor,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\ttype TgdDataGlb,\n\tTgdDataset,\n\tTgdPainterClear,\n\tTgdPainterPointsCloud,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdCanvasCreatePalette,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport MonkeyURL from \"@/assets/mesh/high-res-monkey.glb\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera.transfo.distance = 5;\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.5,\n\t\tspeedZoom: 1,\n\t});\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t});\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(createPalette());\n\tconst dataset = makeDataset(assets.glb.monkey);\n\tconsole.log(\"🐞 [points-cloud.demo@52] dataset.count =\", dataset.count); // @FIXME: Remove this line written on 2026-06-02 at 15:07\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\tdataUV: new Float32Array(makeUV(assets.glb.monkey)),\n\t\ttexture,\n\t\tfragCode: TgdPainterPointsCloud.fragCodeFlat(),\n\t});\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cloud],\n\t});\n\tcontext.add(clear, state);\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tassets={{\n\t\t\t\tglb: { monkey: MonkeyURL },\n\t\t\t}}\n\t\t/>\n\t);\n}\n\nfunction makeDataset(glb: TgdDataGlb) {\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t});\n\tglb.setAttrib(dataset, \"POSITION\");\n\tconst { set } = dataset.getAttribAccessor(\"POSITION\");\n\tconst count = dataset.count;\n\tconst radius = 0.02;\n\tfor (let i = 0; i < count; i++) {\n\t\tset(radius, i, 3);\n\t}\n\treturn dataset;\n}\n\nfunction makeUV(glb: TgdDataGlb) {\n\tconst uvs: number[] = [];\n\tconst dataset = new TgdDataset({\n\t\tNORMAL: \"vec4\",\n\t});\n\tglb.setAttrib(dataset, \"NORMAL\");\n\tconst { get } = dataset.getAttribAccessor(\"NORMAL\");\n\tconst count = dataset.count;\n\tfor (let i = 0; i < count; i++) {\n\t\tconst nx = get(i, 0);\n\t\tconst ny = get(i, 1);\n\t\t// const nz = get(i, 2);\n\t\tconst u = 0.5 * (1 + nx);\n\t\tconst v = 0.5 * (1 + ny);\n\t\tuvs.push(u, v);\n\t}\n\treturn uvs;\n}\n\nfunction createPalette() {\n\tconst colors: TgdColor[] = [];\n\tconst S = 1;\n\tfor (const L of [0.1, 0.5, 0.9]) {\n\t\tfor (const H of [0, 0.2, 0.4, 0.6, 0.8, 1]) {\n\t\t\tcolors.push(TgdColor.fromHSL(H, S, L));\n\t\t}\n\t}\n\treturn tgdCanvasCreatePalette(colors, 6);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/many.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/many.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/many.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/many.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/many.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/many.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
34903(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
        texture: texture,
        fragCode: _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloud.fragCodeFlat()
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/many.demo/points-cloud.demo.tsx",
        lineNumber: 57,
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
    var radius = 0.02;
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
39799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _points_cloud_demo__rspack_import_4 = __webpack_require__(4871);
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
    "Detail #1": "\tcontext.camera = new TgdCameraOrthographic()\n\tcontext.execBeforeNextPaint(() => {\n\t\tconst radius = 3\n\t\tcontext.camera.fitBoundingBox(\n\t\t\tnew TgdBoundingBox().addSphere(0, 0, 0, radius),\n\t\t)\n\t})\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.25,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst { texture, dataPoint, dataUV } = createData(context)\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint,\n\t\tdataUV,\n\t\ttexture,\n\t\tminSizeInPixels: 32,\n\t\tfragCode: TgdPainterPointsCloud.fragCodeFlat(),\n\t})\n\tconst cube = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n\t\tmaterial: new TgdMaterialFaceOrientation(),\n\t})\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cube, cloud],\n\t\t// children: [cloud],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()"
};
var FULL = "import {\n\tTgdBoundingBox,\n\tTgdCameraOrthographic,\n\tTgdColor,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdDataset,\n\tTgdGeometryBox,\n\tTgdMaterialFaceOrientation,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterPointsCloud,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdCanvasCreatePalette,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n\tcontext.camera = new TgdCameraOrthographic()\n\tcontext.execBeforeNextPaint(() => {\n\t\tconst radius = 3\n\t\tcontext.camera.fitBoundingBox(\n\t\t\tnew TgdBoundingBox().addSphere(0, 0, 0, radius),\n\t\t)\n\t})\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.25,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst { texture, dataPoint, dataUV } = createData(context)\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint,\n\t\tdataUV,\n\t\ttexture,\n\t\tminSizeInPixels: 32,\n\t\tfragCode: TgdPainterPointsCloud.fragCodeFlat(),\n\t})\n\tconst cube = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n\t\tmaterial: new TgdMaterialFaceOrientation(),\n\t})\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cube, cloud],\n\t\t// children: [cloud],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()\n\treturn (settings: Record<string, number>) => {\n\t\tcloud.radiusMultiplier = settings.radiusMultiplier\n\t\tcloud.shadowIntensity = settings.shadowIntensity\n\t\tcloud.shadowThickness = settings.shadowThickness\n\t\tcloud.specularExponent = settings.specularExponent\n\t\tcloud.specularIntensity = settings.specularIntensity\n\t\tcloud.light = settings.light\n\t\tcontext.paint()\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tradiusMultiplier: {\n\t\t\t\t\tlabel: \"radiusMultiplier\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: 0.5,\n\t\t\t\t\tmax: 2,\n\t\t\t\t},\n\t\t\t\tshadowIntensity: {\n\t\t\t\t\tlabel: \"shadowIntensity\",\n\t\t\t\t\tvalue: 0.75,\n\t\t\t\t},\n\t\t\t\tshadowThickness: {\n\t\t\t\t\tlabel: \"shadowThickness\",\n\t\t\t\t\tvalue: 1.2,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 2,\n\t\t\t\t},\n\t\t\t\tspecularExponent: {\n\t\t\t\t\tlabel: \"specularExponent\",\n\t\t\t\t\tvalue: 14,\n\t\t\t\t\tmin: -10,\n\t\t\t\t\tmax: 30,\n\t\t\t\t},\n\t\t\t\tspecularIntensity: {\n\t\t\t\t\tlabel: \"specularIntensity\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t},\n\t\t\t\tlight: {\n\t\t\t\t\tlabel: \"light\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: -1,\n\t\t\t\t\tmax: +3,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t)\n}\n\nfunction createData(context: TgdContext) {\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t})\n\tconst coords: number[] = []\n\tconst uvs: number[] = []\n\tconst colors: TgdColor[] = []\n\tconst values = [-1, +1]\n\tconst radius = 1\n\tlet index = 0\n\tfor (const x of values) {\n\t\tfor (const y of values) {\n\t\t\tfor (const z of values) {\n\t\t\t\tcoords.push(x, y, z, radius)\n\t\t\t\tconst u = index / 8\n\t\t\t\tuvs.push(u, u)\n\t\t\t\tcolors.push(TgdColor.fromHSL(u, 1, 0.5))\n\t\t\t\tconst dist = 1.666\n\t\t\t\tcoords.push(dist * x, dist * y, dist * z, radius / 2)\n\t\t\t\tuvs.push(u + 0.5, u + 0.5)\n\t\t\t\tindex++\n\t\t\t}\n\t\t}\n\t}\n\tdataset.set(\"POSITION\", new Float32Array(coords))\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"NEAREST\",\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t}).loadBitmap(tgdCanvasCreatePalette(colors))\n\treturn {\n\t\ttexture,\n\t\tdataUV: new Float32Array(uvs),\n\t\tdataPoint: new Float32Array(dataset.data),\n\t}\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/points-cloud.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/points-cloud.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/points-cloud.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/points-cloud.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/points-cloud.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/points-cloud.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
4871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
    var _createData = createData(context), texture = _createData.texture, dataPoint = _createData.dataPoint, dataUV = _createData.dataUV;
    var cloud = new _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloud(context, {
        dataPoint: dataPoint,
        dataUV: dataUV,
        texture: texture,
        minSizeInPixels: 32,
        fragCode: _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloud.fragCodeFlat()
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/_/points-cloud.demo/points-cloud.demo.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, this);
}
function createData(context) {
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
                            uvs.push(u + 0.5, u + 0.5);
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
    return {
        texture: texture,
        dataUV: new Float32Array(uvs),
        dataPoint: new Float32Array(dataset.data)
    };
}


},
46566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _points_cloud_demo__rspack_import_1 = __webpack_require__(39799);
/* import */ var _many_demo__rspack_import_2 = __webpack_require__(29607);
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Flat shading"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "With flat shading, we paint disks instead of spheres.\nThat will speed up the rendering a lot and can be used in offscreen canvases to implement object picking technique."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h3, {
                children: "Few spheres"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h3, {
                children: "Many spheres"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Here, we display 503'808 spheres.\nIt's way smoother than with the full material."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_many_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-flat/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wb2ludHMtY2xvdWRfdmFyaWFudF9tYXRlcmlhbC1mbGF0X3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZS01MWFhMmUuZGE2NTBhOTdlN2IyNGViOS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L21hdGVyaWFsLWZsYXQvXy9tYW55LmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L21hdGVyaWFsLWZsYXQvXy9tYW55LmRlbW8vcG9pbnRzLWNsb3VkLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L21hdGVyaWFsLWZsYXQvXy9wb2ludHMtY2xvdWQuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL3ZhcmlhbnQvbWF0ZXJpYWwtZmxhdC9fL3BvaW50cy1jbG91ZC5kZW1vL3BvaW50cy1jbG91ZC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvdmFyaWFudC9tYXRlcmlhbC1mbGF0L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9wb2ludHMtY2xvdWQuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJcXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNTtcXG5cXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0bWF4Wm9vbTogNSxcXG5cXHRcXHRtaW5ab29tOiAwLjUsXFxuXFx0XFx0c3BlZWRab29tOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuXFx0XFx0cGFyYW1zOiB7XFxuXFx0XFx0XFx0bWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcblxcdFxcdFxcdHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0XFx0d3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHR9LFxcblxcdH0pLmxvYWRCaXRtYXAoY3JlYXRlUGFsZXR0ZSgpKTtcXG5cXHRjb25zdCBkYXRhc2V0ID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkpO1xcblxcdGNvbnNvbGUubG9nKFxcXCLwn5CeIFtwb2ludHMtY2xvdWQuZGVtb0A1Ml0gZGF0YXNldC5jb3VudCA9XFxcIiwgZGF0YXNldC5jb3VudCk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDYtMDIgYXQgMTU6MDdcXG5cXHRjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xcblxcdFxcdGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxcblxcdFxcdGRhdGFVVjogbmV3IEZsb2F0MzJBcnJheShtYWtlVVYoYXNzZXRzLmdsYi5tb25rZXkpKSxcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdFxcdGZyYWdDb2RlOiBUZ2RQYWludGVyUG9pbnRzQ2xvdWQuZnJhZ0NvZGVGbGF0KCksXFxuXFx0fSk7XFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbY2xvdWRdLFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XFxuXFx0Y29udGV4dC5wYWludCgpO1wifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHRUZ2RDb2xvcixcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcblxcdHR5cGUgVGdkRGF0YUdsYixcXG5cXHRUZ2REYXRhc2V0LFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFRleHR1cmUyRCxcXG5cXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcblxcdHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuaW1wb3J0IE1vbmtleVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL2hpZ2gtcmVzLW1vbmtleS5nbGJcXFwiO1xcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDU7XFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdG1heFpvb206IDUsXFxuXFx0XFx0bWluWm9vbTogMC41LFxcblxcdFxcdHNwZWVkWm9vbTogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuXFx0XFx0ZGVwdGg6IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0bWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHR3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0fSxcXG5cXHR9KS5sb2FkQml0bWFwKGNyZWF0ZVBhbGV0dGUoKSk7XFxuXFx0Y29uc3QgZGF0YXNldCA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5KTtcXG5cXHRjb25zb2xlLmxvZyhcXFwi8J+QniBbcG9pbnRzLWNsb3VkLmRlbW9ANTJdIGRhdGFzZXQuY291bnQgPVxcXCIsIGRhdGFzZXQuY291bnQpOyAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA2LTAyIGF0IDE1OjA3XFxuXFx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcXG5cXHRcXHRkYXRhUG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKSxcXG5cXHRcXHRkYXRhVVY6IG5ldyBGbG9hdDMyQXJyYXkobWFrZVVWKGFzc2V0cy5nbGIubW9ua2V5KSksXFxuXFx0XFx0dGV4dHVyZSxcXG5cXHRcXHRmcmFnQ29kZTogVGdkUGFpbnRlclBvaW50c0Nsb3VkLmZyYWdDb2RlRmxhdCgpLFxcblxcdH0pO1xcblxcdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRjaGlsZHJlbjogW2Nsb3VkXSxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRnaXptb1xcblxcdFxcdFxcdG9wdGlvbnM9e3tcXG5cXHRcXHRcXHRcXHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRnbGI6IHsgbW9ua2V5OiBNb25rZXlVUkwgfSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KTtcXG59XFxuXFxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XFxuXFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG5cXHRcXHRQT1NJVElPTjogXFxcInZlYzRcXFwiLFxcblxcdH0pO1xcblxcdGdsYi5zZXRBdHRyaWIoZGF0YXNldCwgXFxcIlBPU0lUSU9OXFxcIik7XFxuXFx0Y29uc3QgeyBzZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXFxcIlBPU0lUSU9OXFxcIik7XFxuXFx0Y29uc3QgY291bnQgPSBkYXRhc2V0LmNvdW50O1xcblxcdGNvbnN0IHJhZGl1cyA9IDAuMDI7XFxuXFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XFxuXFx0XFx0c2V0KHJhZGl1cywgaSwgMyk7XFxuXFx0fVxcblxcdHJldHVybiBkYXRhc2V0O1xcbn1cXG5cXG5mdW5jdGlvbiBtYWtlVVYoZ2xiOiBUZ2REYXRhR2xiKSB7XFxuXFx0Y29uc3QgdXZzOiBudW1iZXJbXSA9IFtdO1xcblxcdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuXFx0XFx0Tk9STUFMOiBcXFwidmVjNFxcXCIsXFxuXFx0fSk7XFxuXFx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcXFwiTk9STUFMXFxcIik7XFxuXFx0Y29uc3QgeyBnZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXFxcIk5PUk1BTFxcXCIpO1xcblxcdGNvbnN0IGNvdW50ID0gZGF0YXNldC5jb3VudDtcXG5cXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG5cXHRcXHRjb25zdCBueCA9IGdldChpLCAwKTtcXG5cXHRcXHRjb25zdCBueSA9IGdldChpLCAxKTtcXG5cXHRcXHQvLyBjb25zdCBueiA9IGdldChpLCAyKTtcXG5cXHRcXHRjb25zdCB1ID0gMC41ICogKDEgKyBueCk7XFxuXFx0XFx0Y29uc3QgdiA9IDAuNSAqICgxICsgbnkpO1xcblxcdFxcdHV2cy5wdXNoKHUsIHYpO1xcblxcdH1cXG5cXHRyZXR1cm4gdXZzO1xcbn1cXG5cXG5mdW5jdGlvbiBjcmVhdGVQYWxldHRlKCkge1xcblxcdGNvbnN0IGNvbG9yczogVGdkQ29sb3JbXSA9IFtdO1xcblxcdGNvbnN0IFMgPSAxO1xcblxcdGZvciAoY29uc3QgTCBvZiBbMC4xLCAwLjUsIDAuOV0pIHtcXG5cXHRcXHRmb3IgKGNvbnN0IEggb2YgWzAsIDAuMiwgMC40LCAwLjYsIDAuOCwgMV0pIHtcXG5cXHRcXHRcXHRjb2xvcnMucHVzaChUZ2RDb2xvci5mcm9tSFNMKEgsIFMsIEwpKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdHJldHVybiB0Z2RDYW52YXNDcmVhdGVQYWxldHRlKGNvbG9ycywgNik7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHRUZ2RDb2xvcixcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdHR5cGUgVGdkRGF0YUdsYixcblx0VGdkRGF0YXNldCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxuXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCBNb25rZXlVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvaGlnaC1yZXMtbW9ua2V5LmdsYlwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luXG5cdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1O1xuXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcblx0XHRpbmVydGlhT3JiaXQ6IDEwMDAsXG5cdFx0bWF4Wm9vbTogNSxcblx0XHRtaW5ab29tOiAwLjUsXG5cdFx0c3BlZWRab29tOiAxLFxuXHR9KTtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxuXHRcdGRlcHRoOiAxLFxuXHR9KTtcblx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuXHRcdHBhcmFtczoge1xuXHRcdFx0bWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0bWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0d3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdFx0d3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdH0sXG5cdH0pLmxvYWRCaXRtYXAoY3JlYXRlUGFsZXR0ZSgpKTtcblx0Y29uc3QgZGF0YXNldCA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5KTtcblx0Y29uc29sZS5sb2coXCLwn5CeIFtwb2ludHMtY2xvdWQuZGVtb0A1Ml0gZGF0YXNldC5jb3VudCA9XCIsIGRhdGFzZXQuY291bnQpOyAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA2LTAyIGF0IDE1OjA3XG5cdGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XG5cdFx0ZGF0YVBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSksXG5cdFx0ZGF0YVVWOiBuZXcgRmxvYXQzMkFycmF5KG1ha2VVVihhc3NldHMuZ2xiLm1vbmtleSkpLFxuXHRcdHRleHR1cmUsXG5cdFx0ZnJhZ0NvZGU6IFRnZFBhaW50ZXJQb2ludHNDbG91ZC5mcmFnQ29kZUZsYXQoKSxcblx0fSk7XG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRjaGlsZHJlbjogW2Nsb3VkXSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XG5cdGNvbnRleHQucGFpbnQoKTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0Z2l6bW9cblx0XHRcdG9wdGlvbnM9e3tcblx0XHRcdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdFx0fX1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHsgbW9ua2V5OiBNb25rZXlVUkwgfSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0UE9TSVRJT046IFwidmVjNFwiLFxuXHR9KTtcblx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcIlBPU0lUSU9OXCIpO1xuXHRjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcIlBPU0lUSU9OXCIpO1xuXHRjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnQ7XG5cdGNvbnN0IHJhZGl1cyA9IDAuMDI7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdHNldChyYWRpdXMsIGksIDMpO1xuXHR9XG5cdHJldHVybiBkYXRhc2V0O1xufVxuXG5mdW5jdGlvbiBtYWtlVVYoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IHV2czogbnVtYmVyW10gPSBbXTtcblx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHROT1JNQUw6IFwidmVjNFwiLFxuXHR9KTtcblx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcIk5PUk1BTFwiKTtcblx0Y29uc3QgeyBnZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXCJOT1JNQUxcIik7XG5cdGNvbnN0IGNvdW50ID0gZGF0YXNldC5jb3VudDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0Y29uc3QgbnggPSBnZXQoaSwgMCk7XG5cdFx0Y29uc3QgbnkgPSBnZXQoaSwgMSk7XG5cdFx0Ly8gY29uc3QgbnogPSBnZXQoaSwgMik7XG5cdFx0Y29uc3QgdSA9IDAuNSAqICgxICsgbngpO1xuXHRcdGNvbnN0IHYgPSAwLjUgKiAoMSArIG55KTtcblx0XHR1dnMucHVzaCh1LCB2KTtcblx0fVxuXHRyZXR1cm4gdXZzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWxldHRlKCkge1xuXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXTtcblx0Y29uc3QgUyA9IDE7XG5cdGZvciAoY29uc3QgTCBvZiBbMC4xLCAwLjUsIDAuOV0pIHtcblx0XHRmb3IgKGNvbnN0IEggb2YgWzAsIDAuMiwgMC40LCAwLjYsIDAuOCwgMV0pIHtcblx0XHRcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0woSCwgUywgTCkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMsIDYpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3BvaW50cy1jbG91ZC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIlxcdGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYygpXFxuXFx0Y29udGV4dC5leGVjQmVmb3JlTmV4dFBhaW50KCgpID0+IHtcXG5cXHRcXHRjb25zdCByYWRpdXMgPSAzXFxuXFx0XFx0Y29udGV4dC5jYW1lcmEuZml0Qm91bmRpbmdCb3goXFxuXFx0XFx0XFx0bmV3IFRnZEJvdW5kaW5nQm94KCkuYWRkU3BoZXJlKDAsIDAsIDAsIHJhZGl1cyksXFxuXFx0XFx0KVxcblxcdH0pXFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdG1heFpvb206IDUsXFxuXFx0XFx0bWluWm9vbTogMC4yNSxcXG5cXHRcXHRzcGVlZFpvb206IDEsXFxuXFx0fSlcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuXFx0XFx0ZGVwdGg6IDEsXFxuXFx0fSlcXG5cXHRjb25zdCB7IHRleHR1cmUsIGRhdGFQb2ludCwgZGF0YVVWIH0gPSBjcmVhdGVEYXRhKGNvbnRleHQpXFxuXFx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcXG5cXHRcXHRkYXRhUG9pbnQsXFxuXFx0XFx0ZGF0YVVWLFxcblxcdFxcdHRleHR1cmUsXFxuXFx0XFx0bWluU2l6ZUluUGl4ZWxzOiAzMixcXG5cXHRcXHRmcmFnQ29kZTogVGdkUGFpbnRlclBvaW50c0Nsb3VkLmZyYWdDb2RlRmxhdCgpLFxcblxcdH0pXFxuXFx0Y29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuXFx0XFx0Z2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7IHNpemVYOiAyLCBzaXplWTogMiwgc2l6ZVo6IDIgfSksXFxuXFx0XFx0bWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxcblxcdH0pXFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbY3ViZSwgY2xvdWRdLFxcblxcdFxcdC8vIGNoaWxkcmVuOiBbY2xvdWRdLFxcblxcdH0pXFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcblxcdGNvbnRleHQucGFpbnQoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHRUZ2RCb3VuZGluZ0JveCxcXG5cXHRUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXFxuXFx0VGdkQ29sb3IsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHRUZ2REYXRhc2V0LFxcblxcdFRnZEdlb21ldHJ5Qm94LFxcblxcdFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyTWVzaCxcXG5cXHRUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFRleHR1cmUyRCxcXG5cXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcblxcdHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuXFx0Y29udGV4dC5jYW1lcmEgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKClcXG5cXHRjb250ZXh0LmV4ZWNCZWZvcmVOZXh0UGFpbnQoKCkgPT4ge1xcblxcdFxcdGNvbnN0IHJhZGl1cyA9IDNcXG5cXHRcXHRjb250ZXh0LmNhbWVyYS5maXRCb3VuZGluZ0JveChcXG5cXHRcXHRcXHRuZXcgVGdkQm91bmRpbmdCb3goKS5hZGRTcGhlcmUoMCwgMCwgMCwgcmFkaXVzKSxcXG5cXHRcXHQpXFxuXFx0fSlcXG5cXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0bWF4Wm9vbTogNSxcXG5cXHRcXHRtaW5ab29tOiAwLjI1LFxcblxcdFxcdHNwZWVkWm9vbTogMSxcXG5cXHR9KVxcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KVxcblxcdGNvbnN0IHsgdGV4dHVyZSwgZGF0YVBvaW50LCBkYXRhVVYgfSA9IGNyZWF0ZURhdGEoY29udGV4dClcXG5cXHRjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xcblxcdFxcdGRhdGFQb2ludCxcXG5cXHRcXHRkYXRhVVYsXFxuXFx0XFx0dGV4dHVyZSxcXG5cXHRcXHRtaW5TaXplSW5QaXhlbHM6IDMyLFxcblxcdFxcdGZyYWdDb2RlOiBUZ2RQYWludGVyUG9pbnRzQ2xvdWQuZnJhZ0NvZGVGbGF0KCksXFxuXFx0fSlcXG5cXHRjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHsgc2l6ZVg6IDIsIHNpemVZOiAyLCBzaXplWjogMiB9KSxcXG5cXHRcXHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXFxuXFx0fSlcXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0Y2hpbGRyZW46IFtjdWJlLCBjbG91ZF0sXFxuXFx0XFx0Ly8gY2hpbGRyZW46IFtjbG91ZF0sXFxuXFx0fSlcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXFxuXFx0Y29udGV4dC5wYWludCgpXFxuXFx0cmV0dXJuIChzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xcblxcdFxcdGNsb3VkLnJhZGl1c011bHRpcGxpZXIgPSBzZXR0aW5ncy5yYWRpdXNNdWx0aXBsaWVyXFxuXFx0XFx0Y2xvdWQuc2hhZG93SW50ZW5zaXR5ID0gc2V0dGluZ3Muc2hhZG93SW50ZW5zaXR5XFxuXFx0XFx0Y2xvdWQuc2hhZG93VGhpY2tuZXNzID0gc2V0dGluZ3Muc2hhZG93VGhpY2tuZXNzXFxuXFx0XFx0Y2xvdWQuc3BlY3VsYXJFeHBvbmVudCA9IHNldHRpbmdzLnNwZWN1bGFyRXhwb25lbnRcXG5cXHRcXHRjbG91ZC5zcGVjdWxhckludGVuc2l0eSA9IHNldHRpbmdzLnNwZWN1bGFySW50ZW5zaXR5XFxuXFx0XFx0Y2xvdWQubGlnaHQgPSBzZXR0aW5ncy5saWdodFxcblxcdFxcdGNvbnRleHQucGFpbnQoKVxcblxcdH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRnaXptb1xcblxcdFxcdFxcdG9wdGlvbnM9e3tcXG5cXHRcXHRcXHRcXHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRzZXR0aW5ncz17e1xcblxcdFxcdFxcdFxcdHJhZGl1c011bHRpcGxpZXI6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcInJhZGl1c011bHRpcGxpZXJcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogMC41LFxcblxcdFxcdFxcdFxcdFxcdG1heDogMixcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHNoYWRvd0ludGVuc2l0eToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwic2hhZG93SW50ZW5zaXR5XFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMC43NSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHNoYWRvd1RoaWNrbmVzczoge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwic2hhZG93VGhpY2tuZXNzXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMS4yLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogMCxcXG5cXHRcXHRcXHRcXHRcXHRtYXg6IDIsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRzcGVjdWxhckV4cG9uZW50OiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJzcGVjdWxhckV4cG9uZW50XFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMTQsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAtMTAsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiAzMCxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHNwZWN1bGFySW50ZW5zaXR5OiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJzcGVjdWxhckludGVuc2l0eVxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDEsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRsaWdodDoge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwibGlnaHRcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogLTEsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiArMyxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpXFxufVxcblxcbmZ1bmN0aW9uIGNyZWF0ZURhdGEoY29udGV4dDogVGdkQ29udGV4dCkge1xcblxcdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuXFx0XFx0UE9TSVRJT046IFxcXCJ2ZWM0XFxcIixcXG5cXHR9KVxcblxcdGNvbnN0IGNvb3JkczogbnVtYmVyW10gPSBbXVxcblxcdGNvbnN0IHV2czogbnVtYmVyW10gPSBbXVxcblxcdGNvbnN0IGNvbG9yczogVGdkQ29sb3JbXSA9IFtdXFxuXFx0Y29uc3QgdmFsdWVzID0gWy0xLCArMV1cXG5cXHRjb25zdCByYWRpdXMgPSAxXFxuXFx0bGV0IGluZGV4ID0gMFxcblxcdGZvciAoY29uc3QgeCBvZiB2YWx1ZXMpIHtcXG5cXHRcXHRmb3IgKGNvbnN0IHkgb2YgdmFsdWVzKSB7XFxuXFx0XFx0XFx0Zm9yIChjb25zdCB6IG9mIHZhbHVlcykge1xcblxcdFxcdFxcdFxcdGNvb3Jkcy5wdXNoKHgsIHksIHosIHJhZGl1cylcXG5cXHRcXHRcXHRcXHRjb25zdCB1ID0gaW5kZXggLyA4XFxuXFx0XFx0XFx0XFx0dXZzLnB1c2godSwgdSlcXG5cXHRcXHRcXHRcXHRjb2xvcnMucHVzaChUZ2RDb2xvci5mcm9tSFNMKHUsIDEsIDAuNSkpXFxuXFx0XFx0XFx0XFx0Y29uc3QgZGlzdCA9IDEuNjY2XFxuXFx0XFx0XFx0XFx0Y29vcmRzLnB1c2goZGlzdCAqIHgsIGRpc3QgKiB5LCBkaXN0ICogeiwgcmFkaXVzIC8gMilcXG5cXHRcXHRcXHRcXHR1dnMucHVzaCh1ICsgMC41LCB1ICsgMC41KVxcblxcdFxcdFxcdFxcdGluZGV4KytcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRkYXRhc2V0LnNldChcXFwiUE9TSVRJT05cXFwiLCBuZXcgRmxvYXQzMkFycmF5KGNvb3JkcykpXFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdH0sXFxuXFx0fSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKGNvbG9ycykpXFxuXFx0cmV0dXJuIHtcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdFxcdGRhdGFVVjogbmV3IEZsb2F0MzJBcnJheSh1dnMpLFxcblxcdFxcdGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxcblxcdH1cXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdFRnZEJvdW5kaW5nQm94LFxuXHRUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXG5cdFRnZENvbG9yLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcblx0VGdkRGF0YXNldCxcblx0VGdkR2VvbWV0cnlCb3gsXG5cdFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxuXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuXHQvLyAjYmVnaW5cblx0Y29udGV4dC5jYW1lcmEgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKClcblx0Y29udGV4dC5leGVjQmVmb3JlTmV4dFBhaW50KCgpID0+IHtcblx0XHRjb25zdCByYWRpdXMgPSAzXG5cdFx0Y29udGV4dC5jYW1lcmEuZml0Qm91bmRpbmdCb3goXG5cdFx0XHRuZXcgVGdkQm91bmRpbmdCb3goKS5hZGRTcGhlcmUoMCwgMCwgMCwgcmFkaXVzKSxcblx0XHQpXG5cdH0pXG5cdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRtYXhab29tOiA1LFxuXHRcdG1pblpvb206IDAuMjUsXG5cdFx0c3BlZWRab29tOiAxLFxuXHR9KVxuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXG5cdFx0ZGVwdGg6IDEsXG5cdH0pXG5cdGNvbnN0IHsgdGV4dHVyZSwgZGF0YVBvaW50LCBkYXRhVVYgfSA9IGNyZWF0ZURhdGEoY29udGV4dClcblx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcblx0XHRkYXRhUG9pbnQsXG5cdFx0ZGF0YVVWLFxuXHRcdHRleHR1cmUsXG5cdFx0bWluU2l6ZUluUGl4ZWxzOiAzMixcblx0XHRmcmFnQ29kZTogVGdkUGFpbnRlclBvaW50c0Nsb3VkLmZyYWdDb2RlRmxhdCgpLFxuXHR9KVxuXHRjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcblx0XHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHsgc2l6ZVg6IDIsIHNpemVZOiAyLCBzaXplWjogMiB9KSxcblx0XHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXG5cdH0pXG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRjaGlsZHJlbjogW2N1YmUsIGNsb3VkXSxcblx0XHQvLyBjaGlsZHJlbjogW2Nsb3VkXSxcblx0fSlcblx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxuXHRjb250ZXh0LnBhaW50KClcblx0Ly8gI2VuZFxuXHRyZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG5cdFx0Y2xvdWQucmFkaXVzTXVsdGlwbGllciA9IHNldHRpbmdzLnJhZGl1c011bHRpcGxpZXJcblx0XHRjbG91ZC5zaGFkb3dJbnRlbnNpdHkgPSBzZXR0aW5ncy5zaGFkb3dJbnRlbnNpdHlcblx0XHRjbG91ZC5zaGFkb3dUaGlja25lc3MgPSBzZXR0aW5ncy5zaGFkb3dUaGlja25lc3Ncblx0XHRjbG91ZC5zcGVjdWxhckV4cG9uZW50ID0gc2V0dGluZ3Muc3BlY3VsYXJFeHBvbmVudFxuXHRcdGNsb3VkLnNwZWN1bGFySW50ZW5zaXR5ID0gc2V0dGluZ3Muc3BlY3VsYXJJbnRlbnNpdHlcblx0XHRjbG91ZC5saWdodCA9IHNldHRpbmdzLmxpZ2h0XG5cdFx0Y29udGV4dC5wYWludCgpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGdpem1vXG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdH19XG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHRyYWRpdXNNdWx0aXBsaWVyOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwicmFkaXVzTXVsdGlwbGllclwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHRcdG1pbjogMC41LFxuXHRcdFx0XHRcdG1heDogMixcblx0XHRcdFx0fSxcblx0XHRcdFx0c2hhZG93SW50ZW5zaXR5OiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwic2hhZG93SW50ZW5zaXR5XCIsXG5cdFx0XHRcdFx0dmFsdWU6IDAuNzUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNoYWRvd1RoaWNrbmVzczoge1xuXHRcdFx0XHRcdGxhYmVsOiBcInNoYWRvd1RoaWNrbmVzc1wiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLjIsXG5cdFx0XHRcdFx0bWluOiAwLFxuXHRcdFx0XHRcdG1heDogMixcblx0XHRcdFx0fSxcblx0XHRcdFx0c3BlY3VsYXJFeHBvbmVudDoge1xuXHRcdFx0XHRcdGxhYmVsOiBcInNwZWN1bGFyRXhwb25lbnRcIixcblx0XHRcdFx0XHR2YWx1ZTogMTQsXG5cdFx0XHRcdFx0bWluOiAtMTAsXG5cdFx0XHRcdFx0bWF4OiAzMCxcblx0XHRcdFx0fSxcblx0XHRcdFx0c3BlY3VsYXJJbnRlbnNpdHk6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJzcGVjdWxhckludGVuc2l0eVwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsaWdodDoge1xuXHRcdFx0XHRcdGxhYmVsOiBcImxpZ2h0XCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0bWluOiAtMSxcblx0XHRcdFx0XHRtYXg6ICszLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGEoY29udGV4dDogVGdkQ29udGV4dCkge1xuXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuXHRcdFBPU0lUSU9OOiBcInZlYzRcIixcblx0fSlcblx0Y29uc3QgY29vcmRzOiBudW1iZXJbXSA9IFtdXG5cdGNvbnN0IHV2czogbnVtYmVyW10gPSBbXVxuXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXVxuXHRjb25zdCB2YWx1ZXMgPSBbLTEsICsxXVxuXHRjb25zdCByYWRpdXMgPSAxXG5cdGxldCBpbmRleCA9IDBcblx0Zm9yIChjb25zdCB4IG9mIHZhbHVlcykge1xuXHRcdGZvciAoY29uc3QgeSBvZiB2YWx1ZXMpIHtcblx0XHRcdGZvciAoY29uc3QgeiBvZiB2YWx1ZXMpIHtcblx0XHRcdFx0Y29vcmRzLnB1c2goeCwgeSwgeiwgcmFkaXVzKVxuXHRcdFx0XHRjb25zdCB1ID0gaW5kZXggLyA4XG5cdFx0XHRcdHV2cy5wdXNoKHUsIHUpXG5cdFx0XHRcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0wodSwgMSwgMC41KSlcblx0XHRcdFx0Y29uc3QgZGlzdCA9IDEuNjY2XG5cdFx0XHRcdGNvb3Jkcy5wdXNoKGRpc3QgKiB4LCBkaXN0ICogeSwgZGlzdCAqIHosIHJhZGl1cyAvIDIpXG5cdFx0XHRcdHV2cy5wdXNoKHUgKyAwLjUsIHUgKyAwLjUpXG5cdFx0XHRcdGluZGV4Kytcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZGF0YXNldC5zZXQoXCJQT1NJVElPTlwiLCBuZXcgRmxvYXQzMkFycmF5KGNvb3JkcykpXG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRwYXJhbXM6IHtcblx0XHRcdG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG5cdFx0XHRtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdH0sXG5cdH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMpKVxuXHRyZXR1cm4ge1xuXHRcdHRleHR1cmUsXG5cdFx0ZGF0YVVWOiBuZXcgRmxvYXQzMkFycmF5KHV2cyksXG5cdFx0ZGF0YVBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSksXG5cdH1cbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ29sb3IiLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2REYXRhc2V0IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlclBvaW50c0Nsb3VkIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwidGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJNb25rZXlVUkwiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjbGVhciIsInRleHR1cmUiLCJjcmVhdGVQYWxldHRlIiwiZGF0YXNldCIsIm1ha2VEYXRhc2V0IiwiY29uc29sZSIsImNsb3VkIiwiRmxvYXQzMkFycmF5IiwibWFrZVVWIiwic3RhdGUiLCJnbGIiLCJzZXQiLCJjb3VudCIsInJhZGl1cyIsImkiLCJ1dnMiLCJnZXQiLCJueCIsIm55IiwidSIsInYiLCJjb2xvcnMiLCJTIiwiX2l0ZXIiLCJMIiwiX2l0ZXIxIiwiSCIsIlRnZEJvdW5kaW5nQm94IiwiVGdkQ2FtZXJhT3J0aG9ncmFwaGljIiwiVGdkR2VvbWV0cnlCb3giLCJUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbiIsIlRnZFBhaW50ZXJNZXNoIiwiX2NyZWF0ZURhdGEiLCJkYXRhUG9pbnQiLCJkYXRhVVYiLCJjdWJlIiwic2V0dGluZ3MiLCJjcmVhdGVEYXRhIiwiY29vcmRzIiwidmFsdWVzIiwiaW5kZXgiLCJfaXRlcmF0b3JFcnJvciIsIngiLCJfaXRlcmF0b3JFcnJvcjEiLCJ5IiwiX2l0ZXJhdG9yRXJyb3IyIiwieiIsImRpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ2Y7QUFFdEMsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBaWtDO0FBQzVsQyxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSiw4Q0FBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ2xEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR3RDLGtEQUFDTix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPTSxPQUFPSCxPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFHNUQ7Ozs7Ozs7Ozs7Ozs7O0FDWndCO0FBQ2tDO0FBQ0E7QUFFMUQsU0FBU2tCLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDaEQsU0FBUztJQUNURCxRQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHO0lBQ2xDLElBQUlYLHdEQUF3QkEsQ0FBQ1csU0FBUztRQUNyQyxjQUFjO1FBQ2QsU0FBUztRQUNULFNBQVM7UUFDVCxXQUFXO0lBQ1o7SUFDQSxJQUFNRSxRQUFRLElBQUlYLCtDQUFlQSxDQUFDUyxTQUFTO1FBQzFDLE9BQU87WUFBQztZQUFLO1lBQUs7WUFBSztTQUFFO1FBQ3pCLE9BQU87SUFDUjtJQUNBLElBQU1HLFVBQVUsSUFBSVQsNENBQVlB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