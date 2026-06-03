"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_points-cloud_variant_material-sphere_page_mdx-src_components_demo_Co-9e9a54"], {
81006(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid-2x2.eb55dec2a09ac483.webp";

},
8755(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/high-res-monkey.5d18cfe478366fe5.glb";

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
    "Detail #1": "\tcontext.camera.transfo.distance = 5\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.5,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(createPalette())\n\tconst dataset = makeDataset(assets.glb.monkey)\n\tconsole.log(\"🐞 [points-cloud.demo@52] dataset.count =\", dataset.count) // @FIXME: Remove this line written on 2026-06-02 at 15:07\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\tdataUV: new Float32Array(makeUV(assets.glb.monkey)),\n\t\ttexture,\n\t\tfragCode: TgdPainterPointsCloud.fragCodeSphere({ depthPrecision: \"low\" }),\n\t})\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cloud],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()"
};
var FULL = "import {\n\tTgdColor,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\ttype TgdDataGlb,\n\tTgdDataset,\n\tTgdPainterClear,\n\tTgdPainterPointsCloud,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdCanvasCreatePalette,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport MonkeyURL from \"@/assets/mesh/high-res-monkey.glb\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera.transfo.distance = 5\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.5,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(createPalette())\n\tconst dataset = makeDataset(assets.glb.monkey)\n\tconsole.log(\"🐞 [points-cloud.demo@52] dataset.count =\", dataset.count) // @FIXME: Remove this line written on 2026-06-02 at 15:07\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\tdataUV: new Float32Array(makeUV(assets.glb.monkey)),\n\t\ttexture,\n\t\tfragCode: TgdPainterPointsCloud.fragCodeSphere({ depthPrecision: \"low\" }),\n\t})\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cloud],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tassets={{\n\t\t\t\tglb: { monkey: MonkeyURL },\n\t\t\t}}\n\t\t/>\n\t)\n}\n\nfunction makeDataset(glb: TgdDataGlb) {\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t})\n\tglb.setAttrib(dataset, \"POSITION\")\n\tconst { set } = dataset.getAttribAccessor(\"POSITION\")\n\tconst count = dataset.count\n\tconst radius = 0.01\n\tfor (let i = 0; i < count; i++) {\n\t\tset(radius, i, 3)\n\t}\n\treturn dataset\n}\n\nfunction makeUV(glb: TgdDataGlb) {\n\tconst uvs: number[] = []\n\tconst dataset = new TgdDataset({\n\t\tNORMAL: \"vec4\",\n\t})\n\tglb.setAttrib(dataset, \"NORMAL\")\n\tconst { get } = dataset.getAttribAccessor(\"NORMAL\")\n\tconst count = dataset.count\n\tfor (let i = 0; i < count; i++) {\n\t\tconst nx = get(i, 0)\n\t\tconst ny = get(i, 1)\n\t\t// const nz = get(i, 2);\n\t\tconst u = 0.5 * (1 + nx)\n\t\tconst v = 0.5 * (1 + ny)\n\t\tuvs.push(u, v)\n\t}\n\treturn uvs\n}\n\nfunction createPalette() {\n\tconst colors: TgdColor[] = []\n\tconst S = 1\n\tfor (const L of [0.1, 0.5, 0.9]) {\n\t\tfor (const H of [0, 0.2, 0.4, 0.6, 0.8, 1]) {\n\t\t\tcolors.push(TgdColor.fromHSL(H, S, L))\n\t\t}\n\t}\n\treturn tgdCanvasCreatePalette(colors, 6)\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/index.tsx",
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
        fragCode: _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloud.fragCodeSphere({
            depthPrecision: "low"
        })
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/many.demo/points-cloud.demo.tsx",
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
    "Detail #1": "\tcontext.camera = new TgdCameraOrthographic()\n\tcontext.execBeforeNextPaint(() => {\n\t\tconst radius = 3\n\t\tcontext.camera.fitBoundingBox(\n\t\t\tnew TgdBoundingBox().addSphere(0, 0, 0, radius),\n\t\t)\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst { texture, dataPoint, dataUV } = createData(context)\n\tconst groups: Record<string, TgdPainterGroup> = {}\n\tconst clouds: TgdPainterPointsCloud[] = []\n\tfor (const depthPrecision of DEPTH_PRECISION_ARRAY) {\n\t\tif (!depthPrecision) continue\n\n\t\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\t\tdataPoint,\n\t\t\tdataUV,\n\t\t\ttexture,\n\t\t\tradiusMultiplier: 1.5,\n\t\t\tminSizeInPixels: 32,\n\t\t\tfragCode: TgdPainterPointsCloud.fragCodeSphere({ depthPrecision }),\n\t\t})\n\t\tclouds.push(cloud)\n\t\tgroups[depthPrecision] = new TgdPainterGroup([cloud], {\n\t\t\tactive: depthPrecision === \"low\",\n\t\t})\n\t}\n\tconst cube = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n\t\tmaterial: new TgdMaterialDiffuse({\n\t\t\tcolor: new TgdTexture2D(context).loadBitmap(assets.image.grid),\n\t\t\tambient: new TgdLight({\n\t\t\t\tcolor: [0.5, 0.5, 0.5, 1],\n\t\t\t}),\n\t\t}),\n\t})\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cube, ...Object.values(groups)],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()"
};
var FULL = "import {\n\tTgdBoundingBox,\n\tTgdCameraOrthographic,\n\tTgdColor,\n\ttype TgdContext,\n\tTgdDataset,\n\tTgdGeometryBox,\n\tTgdLight,\n\tTgdMaterialDiffuse,\n\tTgdMaterialFaceOrientation,\n\tTgdPainterClear,\n\tTgdPainterGroup,\n\tTgdPainterMesh,\n\tTgdPainterPointsCloud,\n\tTgdPainterState,\n\ttype TgdPointsCloudFragCodeSphereOptions,\n\tTgdTexture2D,\n\ttgdCanvasCreatePalette,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport GridURL from \"@/assets/image/uv-grid-2x2.webp\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nconst DEPTH_PRECISION_ARRAY: TgdPointsCloudFragCodeSphereOptions[\"depthPrecision\"][] =\n\t[\"none\", \"low\", \"high\"]\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera = new TgdCameraOrthographic()\n\tcontext.execBeforeNextPaint(() => {\n\t\tconst radius = 3\n\t\tcontext.camera.fitBoundingBox(\n\t\t\tnew TgdBoundingBox().addSphere(0, 0, 0, radius),\n\t\t)\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst { texture, dataPoint, dataUV } = createData(context)\n\tconst groups: Record<string, TgdPainterGroup> = {}\n\tconst clouds: TgdPainterPointsCloud[] = []\n\tfor (const depthPrecision of DEPTH_PRECISION_ARRAY) {\n\t\tif (!depthPrecision) continue\n\n\t\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\t\tdataPoint,\n\t\t\tdataUV,\n\t\t\ttexture,\n\t\t\tradiusMultiplier: 1.5,\n\t\t\tminSizeInPixels: 32,\n\t\t\tfragCode: TgdPainterPointsCloud.fragCodeSphere({ depthPrecision }),\n\t\t})\n\t\tclouds.push(cloud)\n\t\tgroups[depthPrecision] = new TgdPainterGroup([cloud], {\n\t\t\tactive: depthPrecision === \"low\",\n\t\t})\n\t}\n\tconst cube = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n\t\tmaterial: new TgdMaterialDiffuse({\n\t\t\tcolor: new TgdTexture2D(context).loadBitmap(assets.image.grid),\n\t\t\tambient: new TgdLight({\n\t\t\t\tcolor: [0.5, 0.5, 0.5, 1],\n\t\t\t}),\n\t\t}),\n\t})\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cube, ...Object.values(groups)],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()\n\treturn (settings: Record<string, number>) => {\n\t\tfor (const cloud of clouds) {\n\t\t\tcloud.radiusMultiplier = settings.radiusMultiplier\n\t\t}\n\t\tfor (const depthPrecision of DEPTH_PRECISION_ARRAY) {\n\t\t\tif (!depthPrecision) continue\n\n\t\t\tconst group = groups[depthPrecision]\n\t\t\tgroup.active =\n\t\t\t\tdepthPrecision === DEPTH_PRECISION_ARRAY[settings.depthPrecision]\n\t\t}\n\t\tcontext.paint()\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\tassets={{\n\t\t\t\timage: {\n\t\t\t\t\tgrid: GridURL,\n\t\t\t\t},\n\t\t\t}}\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 2000,\n\t\t\t\tmaxZoom: 5,\n\t\t\t\tminZoom: 0.25,\n\t\t\t\tspeedZoom: 1,\n\t\t\t}}\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tdepthPrecision: {\n\t\t\t\t\tlabel: \"depthPrecision\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tstep: [\"none\", \"low\", \"high\"],\n\t\t\t\t},\n\t\t\t\tradiusMultiplier: {\n\t\t\t\t\tlabel: \"radiusMultiplier\",\n\t\t\t\t\tvalue: 1.5,\n\t\t\t\t\tmin: 0.5,\n\t\t\t\t\tmax: 2,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t)\n}\n\nfunction createData(context: TgdContext) {\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t})\n\tconst coords: number[] = []\n\tconst uvs: number[] = []\n\tconst colors: TgdColor[] = []\n\tconst values = [-1, +1]\n\tconst radius = 1\n\tlet index = 0\n\tfor (const x of values) {\n\t\tfor (const y of values) {\n\t\t\tfor (const z of values) {\n\t\t\t\tcoords.push(x, y, z, radius)\n\t\t\t\tconst u = index / 8\n\t\t\t\tuvs.push(u, u)\n\t\t\t\tcolors.push(TgdColor.fromHSL(u, 1, 0.5))\n\t\t\t\tconst dist = 1.666\n\t\t\t\tcoords.push(dist * x, dist * y, dist * z, radius / 2)\n\t\t\t\tuvs.push(u + 0.5, u + 0.5)\n\t\t\t\tindex++\n\t\t\t}\n\t\t}\n\t}\n\tdataset.set(\"POSITION\", new Float32Array(coords))\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"NEAREST\",\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t}).loadBitmap(tgdCanvasCreatePalette(colors))\n\treturn {\n\t\ttexture,\n\t\tdataUV: new Float32Array(uvs),\n\t\tdataPoint: new Float32Array(dataset.data),\n\t}\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/index.tsx",
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
/* import */ var _assets_image_uv_grid_2x2_webp__rspack_import_2 = __webpack_require__(81006);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(43475);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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




var DEPTH_PRECISION_ARRAY = [
    "none",
    "low",
    "high"
];
function init(context, assets) {
    // #begin
    context.camera = new _tolokoban_tgd__rspack_import_1.TgdCameraOrthographic();
    context.execBeforeNextPaint(function() {
        var radius = 3;
        context.camera.fitBoundingBox(new _tolokoban_tgd__rspack_import_1.TgdBoundingBox().addSphere(0, 0, 0, radius));
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
    var groups = {};
    var clouds = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = DEPTH_PRECISION_ARRAY[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var depthPrecision = _step.value;
            if (!depthPrecision) continue;
            var cloud = new _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloud(context, {
                dataPoint: dataPoint,
                dataUV: dataUV,
                texture: texture,
                radiusMultiplier: 1.5,
                minSizeInPixels: 32,
                fragCode: _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloud.fragCodeSphere({
                    depthPrecision: depthPrecision
                })
            });
            clouds.push(cloud);
            groups[depthPrecision] = new _tolokoban_tgd__rspack_import_1.TgdPainterGroup([
                cloud
            ], {
                active: depthPrecision === "low"
            });
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
    var cube = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox({
            sizeX: 2,
            sizeY: 2,
            sizeZ: 2
        }),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.grid),
            ambient: new _tolokoban_tgd__rspack_import_1.TgdLight({
                color: [
                    0.5,
                    0.5,
                    0.5,
                    1
                ]
            })
        })
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            cube
        ].concat(_to_consumable_array(Object.values(groups)))
    });
    context.add(clear, state);
    context.paint();
    // #end
    return function(settings) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = clouds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var cloud = _step.value;
                cloud.radiusMultiplier = settings.radiusMultiplier;
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
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = DEPTH_PRECISION_ARRAY[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var depthPrecision = _step1.value;
                if (!depthPrecision) continue;
                var group = groups[depthPrecision];
                group.active = depthPrecision === DEPTH_PRECISION_ARRAY[settings.depthPrecision];
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
        context.paint();
    };
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_3["default"], {
        onReady: init,
        gizmo: true,
        assets: {
            image: {
                grid: _assets_image_uv_grid_2x2_webp__rspack_import_2
            }
        },
        controller: {
            inertiaOrbit: 2000,
            maxZoom: 5,
            minZoom: 0.25,
            speedZoom: 1
        },
        options: {
            preserveDrawingBuffer: true
        },
        settings: {
            depthPrecision: {
                label: "depthPrecision",
                value: 1,
                step: [
                    "none",
                    "low",
                    "high"
                ]
            },
            radiusMultiplier: {
                label: "radiusMultiplier",
                value: 1.5,
                min: 0.5,
                max: 2
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/_/points-cloud.demo/points-cloud.demo.tsx",
        lineNumber: 92,
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
        code: "code",
        h1: "h1",
        h2: "h2",
        hr: "hr",
        p: "p",
        strong: "strong"
    }, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Points Clouds"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/types/TgdPointsCloudFragCodeSphereOptions.html",
                    children: "TgdPainterPointsCloud.fragCodeSphere()"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                    lineNumber: 6,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Use the cog to change the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "depthPrecision"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                        lineNumber: 8,
                        columnNumber: 27
                    }, this),
                    " and see what's the difference.\nRotate the scene and pay attention at the intersections between the spheres and the cube."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "You can speed up the render of these 500'000+ points by using ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "low"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                        lineNumber: 15,
                        columnNumber: 63
                    }, this),
                    " depth precision and no specular.\nWith so many spheres, you will not often do a close up and won't notice the difference, but you will spare one square root per fragment."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_many_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
                lineNumber: 18,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/material-sphere/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wb2ludHMtY2xvdWRfdmFyaWFudF9tYXRlcmlhbC1zcGhlcmVfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Dby05ZTlhNTQuODc1NzFiZjBmMzJlNDFiMy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L21hdGVyaWFsLXNwaGVyZS9fL21hbnkuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL3ZhcmlhbnQvbWF0ZXJpYWwtc3BoZXJlL18vbWFueS5kZW1vL3BvaW50cy1jbG91ZC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvdmFyaWFudC9tYXRlcmlhbC1zcGhlcmUvXy9wb2ludHMtY2xvdWQuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL3ZhcmlhbnQvbWF0ZXJpYWwtc3BoZXJlL18vcG9pbnRzLWNsb3VkLmRlbW8vcG9pbnRzLWNsb3VkLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L21hdGVyaWFsLXNwaGVyZS9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vcG9pbnRzLWNsb3VkLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiXFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDVcXG5cXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0bWF4Wm9vbTogNSxcXG5cXHRcXHRtaW5ab29tOiAwLjUsXFxuXFx0XFx0c3BlZWRab29tOiAxLFxcblxcdH0pXFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pXFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0bWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHR3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0fSxcXG5cXHR9KS5sb2FkQml0bWFwKGNyZWF0ZVBhbGV0dGUoKSlcXG5cXHRjb25zdCBkYXRhc2V0ID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkpXFxuXFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW3BvaW50cy1jbG91ZC5kZW1vQDUyXSBkYXRhc2V0LmNvdW50ID1cXFwiLCBkYXRhc2V0LmNvdW50KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA2LTAyIGF0IDE1OjA3XFxuXFx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcXG5cXHRcXHRkYXRhUG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKSxcXG5cXHRcXHRkYXRhVVY6IG5ldyBGbG9hdDMyQXJyYXkobWFrZVVWKGFzc2V0cy5nbGIubW9ua2V5KSksXFxuXFx0XFx0dGV4dHVyZSxcXG5cXHRcXHRmcmFnQ29kZTogVGdkUGFpbnRlclBvaW50c0Nsb3VkLmZyYWdDb2RlU3BoZXJlKHsgZGVwdGhQcmVjaXNpb246IFxcXCJsb3dcXFwiIH0pLFxcblxcdH0pXFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbY2xvdWRdLFxcblxcdH0pXFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcblxcdGNvbnRleHQucGFpbnQoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHRUZ2RDb2xvcixcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcblxcdHR5cGUgVGdkRGF0YUdsYixcXG5cXHRUZ2REYXRhc2V0LFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFRleHR1cmUyRCxcXG5cXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcblxcdHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgTW9ua2V5VVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvaGlnaC1yZXMtbW9ua2V5LmdsYlxcXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDVcXG5cXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0bWF4Wm9vbTogNSxcXG5cXHRcXHRtaW5ab29tOiAwLjUsXFxuXFx0XFx0c3BlZWRab29tOiAxLFxcblxcdH0pXFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pXFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0bWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHR3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0fSxcXG5cXHR9KS5sb2FkQml0bWFwKGNyZWF0ZVBhbGV0dGUoKSlcXG5cXHRjb25zdCBkYXRhc2V0ID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkpXFxuXFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW3BvaW50cy1jbG91ZC5kZW1vQDUyXSBkYXRhc2V0LmNvdW50ID1cXFwiLCBkYXRhc2V0LmNvdW50KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA2LTAyIGF0IDE1OjA3XFxuXFx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcXG5cXHRcXHRkYXRhUG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKSxcXG5cXHRcXHRkYXRhVVY6IG5ldyBGbG9hdDMyQXJyYXkobWFrZVVWKGFzc2V0cy5nbGIubW9ua2V5KSksXFxuXFx0XFx0dGV4dHVyZSxcXG5cXHRcXHRmcmFnQ29kZTogVGdkUGFpbnRlclBvaW50c0Nsb3VkLmZyYWdDb2RlU3BoZXJlKHsgZGVwdGhQcmVjaXNpb246IFxcXCJsb3dcXFwiIH0pLFxcblxcdH0pXFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbY2xvdWRdLFxcblxcdH0pXFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcblxcdGNvbnRleHQucGFpbnQoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdHJldHVybiAoXFxuXFx0XFx0PFZpZXdcXG5cXHRcXHRcXHRvblJlYWR5PXtpbml0fVxcblxcdFxcdFxcdGdpem1vXFxuXFx0XFx0XFx0b3B0aW9ucz17e1xcblxcdFxcdFxcdFxcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdGFzc2V0cz17e1xcblxcdFxcdFxcdFxcdGdsYjogeyBtb25rZXk6IE1vbmtleVVSTCB9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpXFxufVxcblxcbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGdsYjogVGdkRGF0YUdsYikge1xcblxcdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuXFx0XFx0UE9TSVRJT046IFxcXCJ2ZWM0XFxcIixcXG5cXHR9KVxcblxcdGdsYi5zZXRBdHRyaWIoZGF0YXNldCwgXFxcIlBPU0lUSU9OXFxcIilcXG5cXHRjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcXFwiUE9TSVRJT05cXFwiKVxcblxcdGNvbnN0IGNvdW50ID0gZGF0YXNldC5jb3VudFxcblxcdGNvbnN0IHJhZGl1cyA9IDAuMDFcXG5cXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG5cXHRcXHRzZXQocmFkaXVzLCBpLCAzKVxcblxcdH1cXG5cXHRyZXR1cm4gZGF0YXNldFxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlVVYoZ2xiOiBUZ2REYXRhR2xiKSB7XFxuXFx0Y29uc3QgdXZzOiBudW1iZXJbXSA9IFtdXFxuXFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG5cXHRcXHROT1JNQUw6IFxcXCJ2ZWM0XFxcIixcXG5cXHR9KVxcblxcdGdsYi5zZXRBdHRyaWIoZGF0YXNldCwgXFxcIk5PUk1BTFxcXCIpXFxuXFx0Y29uc3QgeyBnZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXFxcIk5PUk1BTFxcXCIpXFxuXFx0Y29uc3QgY291bnQgPSBkYXRhc2V0LmNvdW50XFxuXFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XFxuXFx0XFx0Y29uc3QgbnggPSBnZXQoaSwgMClcXG5cXHRcXHRjb25zdCBueSA9IGdldChpLCAxKVxcblxcdFxcdC8vIGNvbnN0IG56ID0gZ2V0KGksIDIpO1xcblxcdFxcdGNvbnN0IHUgPSAwLjUgKiAoMSArIG54KVxcblxcdFxcdGNvbnN0IHYgPSAwLjUgKiAoMSArIG55KVxcblxcdFxcdHV2cy5wdXNoKHUsIHYpXFxuXFx0fVxcblxcdHJldHVybiB1dnNcXG59XFxuXFxuZnVuY3Rpb24gY3JlYXRlUGFsZXR0ZSgpIHtcXG5cXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXVxcblxcdGNvbnN0IFMgPSAxXFxuXFx0Zm9yIChjb25zdCBMIG9mIFswLjEsIDAuNSwgMC45XSkge1xcblxcdFxcdGZvciAoY29uc3QgSCBvZiBbMCwgMC4yLCAwLjQsIDAuNiwgMC44LCAxXSkge1xcblxcdFxcdFxcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0woSCwgUywgTCkpXFxuXFx0XFx0fVxcblxcdH1cXG5cXHRyZXR1cm4gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMsIDYpXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHRUZ2RDb2xvcixcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdHR5cGUgVGdkRGF0YUdsYixcblx0VGdkRGF0YXNldCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxuXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IE1vbmtleVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXCJcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luXG5cdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1XG5cdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRtYXhab29tOiA1LFxuXHRcdG1pblpvb206IDAuNSxcblx0XHRzcGVlZFpvb206IDEsXG5cdH0pXG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSlcblx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuXHRcdHBhcmFtczoge1xuXHRcdFx0bWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0bWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0d3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdFx0d3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdH0sXG5cdH0pLmxvYWRCaXRtYXAoY3JlYXRlUGFsZXR0ZSgpKVxuXHRjb25zdCBkYXRhc2V0ID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkpXG5cdGNvbnNvbGUubG9nKFwi8J+QniBbcG9pbnRzLWNsb3VkLmRlbW9ANTJdIGRhdGFzZXQuY291bnQgPVwiLCBkYXRhc2V0LmNvdW50KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA2LTAyIGF0IDE1OjA3XG5cdGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XG5cdFx0ZGF0YVBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSksXG5cdFx0ZGF0YVVWOiBuZXcgRmxvYXQzMkFycmF5KG1ha2VVVihhc3NldHMuZ2xiLm1vbmtleSkpLFxuXHRcdHRleHR1cmUsXG5cdFx0ZnJhZ0NvZGU6IFRnZFBhaW50ZXJQb2ludHNDbG91ZC5mcmFnQ29kZVNwaGVyZSh7IGRlcHRoUHJlY2lzaW9uOiBcImxvd1wiIH0pLFxuXHR9KVxuXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0Y2hpbGRyZW46IFtjbG91ZF0sXG5cdH0pXG5cdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcblx0Y29udGV4dC5wYWludCgpXG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGdpem1vXG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdH19XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0Z2xiOiB7IG1vbmtleTogTW9ua2V5VVJMIH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdClcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0UE9TSVRJT046IFwidmVjNFwiLFxuXHR9KVxuXHRnbGIuc2V0QXR0cmliKGRhdGFzZXQsIFwiUE9TSVRJT05cIilcblx0Y29uc3QgeyBzZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXCJQT1NJVElPTlwiKVxuXHRjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnRcblx0Y29uc3QgcmFkaXVzID0gMC4wMVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblx0XHRzZXQocmFkaXVzLCBpLCAzKVxuXHR9XG5cdHJldHVybiBkYXRhc2V0XG59XG5cbmZ1bmN0aW9uIG1ha2VVVihnbGI6IFRnZERhdGFHbGIpIHtcblx0Y29uc3QgdXZzOiBudW1iZXJbXSA9IFtdXG5cdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0Tk9STUFMOiBcInZlYzRcIixcblx0fSlcblx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcIk5PUk1BTFwiKVxuXHRjb25zdCB7IGdldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcIk5PUk1BTFwiKVxuXHRjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnRcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0Y29uc3QgbnggPSBnZXQoaSwgMClcblx0XHRjb25zdCBueSA9IGdldChpLCAxKVxuXHRcdC8vIGNvbnN0IG56ID0gZ2V0KGksIDIpO1xuXHRcdGNvbnN0IHUgPSAwLjUgKiAoMSArIG54KVxuXHRcdGNvbnN0IHYgPSAwLjUgKiAoMSArIG55KVxuXHRcdHV2cy5wdXNoKHUsIHYpXG5cdH1cblx0cmV0dXJuIHV2c1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWxldHRlKCkge1xuXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXVxuXHRjb25zdCBTID0gMVxuXHRmb3IgKGNvbnN0IEwgb2YgWzAuMSwgMC41LCAwLjldKSB7XG5cdFx0Zm9yIChjb25zdCBIIG9mIFswLCAwLjIsIDAuNCwgMC42LCAwLjgsIDFdKSB7XG5cdFx0XHRjb2xvcnMucHVzaChUZ2RDb2xvci5mcm9tSFNMKEgsIFMsIEwpKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMsIDYpXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vcG9pbnRzLWNsb3VkLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiXFx0Y29udGV4dC5jYW1lcmEgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKClcXG5cXHRjb250ZXh0LmV4ZWNCZWZvcmVOZXh0UGFpbnQoKCkgPT4ge1xcblxcdFxcdGNvbnN0IHJhZGl1cyA9IDNcXG5cXHRcXHRjb250ZXh0LmNhbWVyYS5maXRCb3VuZGluZ0JveChcXG5cXHRcXHRcXHRuZXcgVGdkQm91bmRpbmdCb3goKS5hZGRTcGhlcmUoMCwgMCwgMCwgcmFkaXVzKSxcXG5cXHRcXHQpXFxuXFx0fSlcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuXFx0XFx0ZGVwdGg6IDEsXFxuXFx0fSlcXG5cXHRjb25zdCB7IHRleHR1cmUsIGRhdGFQb2ludCwgZGF0YVVWIH0gPSBjcmVhdGVEYXRhKGNvbnRleHQpXFxuXFx0Y29uc3QgZ3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUZ2RQYWludGVyR3JvdXA+ID0ge31cXG5cXHRjb25zdCBjbG91ZHM6IFRnZFBhaW50ZXJQb2ludHNDbG91ZFtdID0gW11cXG5cXHRmb3IgKGNvbnN0IGRlcHRoUHJlY2lzaW9uIG9mIERFUFRIX1BSRUNJU0lPTl9BUlJBWSkge1xcblxcdFxcdGlmICghZGVwdGhQcmVjaXNpb24pIGNvbnRpbnVlXFxuXFxuXFx0XFx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRkYXRhUG9pbnQsXFxuXFx0XFx0XFx0ZGF0YVVWLFxcblxcdFxcdFxcdHRleHR1cmUsXFxuXFx0XFx0XFx0cmFkaXVzTXVsdGlwbGllcjogMS41LFxcblxcdFxcdFxcdG1pblNpemVJblBpeGVsczogMzIsXFxuXFx0XFx0XFx0ZnJhZ0NvZGU6IFRnZFBhaW50ZXJQb2ludHNDbG91ZC5mcmFnQ29kZVNwaGVyZSh7IGRlcHRoUHJlY2lzaW9uIH0pLFxcblxcdFxcdH0pXFxuXFx0XFx0Y2xvdWRzLnB1c2goY2xvdWQpXFxuXFx0XFx0Z3JvdXBzW2RlcHRoUHJlY2lzaW9uXSA9IG5ldyBUZ2RQYWludGVyR3JvdXAoW2Nsb3VkXSwge1xcblxcdFxcdFxcdGFjdGl2ZTogZGVwdGhQcmVjaXNpb24gPT09IFxcXCJsb3dcXFwiLFxcblxcdFxcdH0pXFxuXFx0fVxcblxcdGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcblxcdFxcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goeyBzaXplWDogMiwgc2l6ZVk6IDIsIHNpemVaOiAyIH0pLFxcblxcdFxcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRcXHRjb2xvcjogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5ncmlkKSxcXG5cXHRcXHRcXHRhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcblxcdFxcdFxcdFxcdGNvbG9yOiBbMC41LCAwLjUsIDAuNSwgMV0sXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0fSksXFxuXFx0fSlcXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0Y2hpbGRyZW46IFtjdWJlLCAuLi5PYmplY3QudmFsdWVzKGdyb3VwcyldLFxcblxcdH0pXFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcblxcdGNvbnRleHQucGFpbnQoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHRUZ2RCb3VuZGluZ0JveCxcXG5cXHRUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXFxuXFx0VGdkQ29sb3IsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZERhdGFzZXQsXFxuXFx0VGdkR2VvbWV0cnlCb3gsXFxuXFx0VGdkTGlnaHQsXFxuXFx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxcblxcdFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyR3JvdXAsXFxuXFx0VGdkUGFpbnRlck1lc2gsXFxuXFx0VGdkUGFpbnRlclBvaW50c0Nsb3VkLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHR0eXBlIFRnZFBvaW50c0Nsb3VkRnJhZ0NvZGVTcGhlcmVPcHRpb25zLFxcblxcdFRnZFRleHR1cmUyRCxcXG5cXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcblxcdHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgR3JpZFVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLTJ4Mi53ZWJwXFxcIlxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5jb25zdCBERVBUSF9QUkVDSVNJT05fQVJSQVk6IFRnZFBvaW50c0Nsb3VkRnJhZ0NvZGVTcGhlcmVPcHRpb25zW1xcXCJkZXB0aFByZWNpc2lvblxcXCJdW10gPVxcblxcdFtcXFwibm9uZVxcXCIsIFxcXCJsb3dcXFwiLCBcXFwiaGlnaFxcXCJdXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYygpXFxuXFx0Y29udGV4dC5leGVjQmVmb3JlTmV4dFBhaW50KCgpID0+IHtcXG5cXHRcXHRjb25zdCByYWRpdXMgPSAzXFxuXFx0XFx0Y29udGV4dC5jYW1lcmEuZml0Qm91bmRpbmdCb3goXFxuXFx0XFx0XFx0bmV3IFRnZEJvdW5kaW5nQm94KCkuYWRkU3BoZXJlKDAsIDAsIDAsIHJhZGl1cyksXFxuXFx0XFx0KVxcblxcdH0pXFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pXFxuXFx0Y29uc3QgeyB0ZXh0dXJlLCBkYXRhUG9pbnQsIGRhdGFVViB9ID0gY3JlYXRlRGF0YShjb250ZXh0KVxcblxcdGNvbnN0IGdyb3VwczogUmVjb3JkPHN0cmluZywgVGdkUGFpbnRlckdyb3VwPiA9IHt9XFxuXFx0Y29uc3QgY2xvdWRzOiBUZ2RQYWludGVyUG9pbnRzQ2xvdWRbXSA9IFtdXFxuXFx0Zm9yIChjb25zdCBkZXB0aFByZWNpc2lvbiBvZiBERVBUSF9QUkVDSVNJT05fQVJSQVkpIHtcXG5cXHRcXHRpZiAoIWRlcHRoUHJlY2lzaW9uKSBjb250aW51ZVxcblxcblxcdFxcdGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XFxuXFx0XFx0XFx0ZGF0YVBvaW50LFxcblxcdFxcdFxcdGRhdGFVVixcXG5cXHRcXHRcXHR0ZXh0dXJlLFxcblxcdFxcdFxcdHJhZGl1c011bHRpcGxpZXI6IDEuNSxcXG5cXHRcXHRcXHRtaW5TaXplSW5QaXhlbHM6IDMyLFxcblxcdFxcdFxcdGZyYWdDb2RlOiBUZ2RQYWludGVyUG9pbnRzQ2xvdWQuZnJhZ0NvZGVTcGhlcmUoeyBkZXB0aFByZWNpc2lvbiB9KSxcXG5cXHRcXHR9KVxcblxcdFxcdGNsb3Vkcy5wdXNoKGNsb3VkKVxcblxcdFxcdGdyb3Vwc1tkZXB0aFByZWNpc2lvbl0gPSBuZXcgVGdkUGFpbnRlckdyb3VwKFtjbG91ZF0sIHtcXG5cXHRcXHRcXHRhY3RpdmU6IGRlcHRoUHJlY2lzaW9uID09PSBcXFwibG93XFxcIixcXG5cXHRcXHR9KVxcblxcdH1cXG5cXHRjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHsgc2l6ZVg6IDIsIHNpemVZOiAyLCBzaXplWjogMiB9KSxcXG5cXHRcXHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuXFx0XFx0XFx0Y29sb3I6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuZ3JpZCksXFxuXFx0XFx0XFx0YW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG5cXHRcXHRcXHRcXHRjb2xvcjogWzAuNSwgMC41LCAwLjUsIDFdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdH0pLFxcblxcdH0pXFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbY3ViZSwgLi4uT2JqZWN0LnZhbHVlcyhncm91cHMpXSxcXG5cXHR9KVxcblxcdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcXG5cXHRjb250ZXh0LnBhaW50KClcXG5cXHRyZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XFxuXFx0XFx0Zm9yIChjb25zdCBjbG91ZCBvZiBjbG91ZHMpIHtcXG5cXHRcXHRcXHRjbG91ZC5yYWRpdXNNdWx0aXBsaWVyID0gc2V0dGluZ3MucmFkaXVzTXVsdGlwbGllclxcblxcdFxcdH1cXG5cXHRcXHRmb3IgKGNvbnN0IGRlcHRoUHJlY2lzaW9uIG9mIERFUFRIX1BSRUNJU0lPTl9BUlJBWSkge1xcblxcdFxcdFxcdGlmICghZGVwdGhQcmVjaXNpb24pIGNvbnRpbnVlXFxuXFxuXFx0XFx0XFx0Y29uc3QgZ3JvdXAgPSBncm91cHNbZGVwdGhQcmVjaXNpb25dXFxuXFx0XFx0XFx0Z3JvdXAuYWN0aXZlID1cXG5cXHRcXHRcXHRcXHRkZXB0aFByZWNpc2lvbiA9PT0gREVQVEhfUFJFQ0lTSU9OX0FSUkFZW3NldHRpbmdzLmRlcHRoUHJlY2lzaW9uXVxcblxcdFxcdH1cXG5cXHRcXHRjb250ZXh0LnBhaW50KClcXG5cXHR9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0Z2l6bW9cXG5cXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRpbWFnZToge1xcblxcdFxcdFxcdFxcdFxcdGdyaWQ6IEdyaWRVUkwsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdGNvbnRyb2xsZXI9e3tcXG5cXHRcXHRcXHRcXHRpbmVydGlhT3JiaXQ6IDIwMDAsXFxuXFx0XFx0XFx0XFx0bWF4Wm9vbTogNSxcXG5cXHRcXHRcXHRcXHRtaW5ab29tOiAwLjI1LFxcblxcdFxcdFxcdFxcdHNwZWVkWm9vbTogMSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdG9wdGlvbnM9e3tcXG5cXHRcXHRcXHRcXHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRzZXR0aW5ncz17e1xcblxcdFxcdFxcdFxcdGRlcHRoUHJlY2lzaW9uOiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJkZXB0aFByZWNpc2lvblxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDEsXFxuXFx0XFx0XFx0XFx0XFx0c3RlcDogW1xcXCJub25lXFxcIiwgXFxcImxvd1xcXCIsIFxcXCJoaWdoXFxcIl0sXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRyYWRpdXNNdWx0aXBsaWVyOiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJyYWRpdXNNdWx0aXBsaWVyXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMS41LFxcblxcdFxcdFxcdFxcdFxcdG1pbjogMC41LFxcblxcdFxcdFxcdFxcdFxcdG1heDogMixcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpXFxufVxcblxcbmZ1bmN0aW9uIGNyZWF0ZURhdGEoY29udGV4dDogVGdkQ29udGV4dCkge1xcblxcdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuXFx0XFx0UE9TSVRJT046IFxcXCJ2ZWM0XFxcIixcXG5cXHR9KVxcblxcdGNvbnN0IGNvb3JkczogbnVtYmVyW10gPSBbXVxcblxcdGNvbnN0IHV2czogbnVtYmVyW10gPSBbXVxcblxcdGNvbnN0IGNvbG9yczogVGdkQ29sb3JbXSA9IFtdXFxuXFx0Y29uc3QgdmFsdWVzID0gWy0xLCArMV1cXG5cXHRjb25zdCByYWRpdXMgPSAxXFxuXFx0bGV0IGluZGV4ID0gMFxcblxcdGZvciAoY29uc3QgeCBvZiB2YWx1ZXMpIHtcXG5cXHRcXHRmb3IgKGNvbnN0IHkgb2YgdmFsdWVzKSB7XFxuXFx0XFx0XFx0Zm9yIChjb25zdCB6IG9mIHZhbHVlcykge1xcblxcdFxcdFxcdFxcdGNvb3Jkcy5wdXNoKHgsIHksIHosIHJhZGl1cylcXG5cXHRcXHRcXHRcXHRjb25zdCB1ID0gaW5kZXggLyA4XFxuXFx0XFx0XFx0XFx0dXZzLnB1c2godSwgdSlcXG5cXHRcXHRcXHRcXHRjb2xvcnMucHVzaChUZ2RDb2xvci5mcm9tSFNMKHUsIDEsIDAuNSkpXFxuXFx0XFx0XFx0XFx0Y29uc3QgZGlzdCA9IDEuNjY2XFxuXFx0XFx0XFx0XFx0Y29vcmRzLnB1c2goZGlzdCAqIHgsIGRpc3QgKiB5LCBkaXN0ICogeiwgcmFkaXVzIC8gMilcXG5cXHRcXHRcXHRcXHR1dnMucHVzaCh1ICsgMC41LCB1ICsgMC41KVxcblxcdFxcdFxcdFxcdGluZGV4KytcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRkYXRhc2V0LnNldChcXFwiUE9TSVRJT05cXFwiLCBuZXcgRmxvYXQzMkFycmF5KGNvb3JkcykpXFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdH0sXFxuXFx0fSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKGNvbG9ycykpXFxuXFx0cmV0dXJuIHtcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdFxcdGRhdGFVVjogbmV3IEZsb2F0MzJBcnJheSh1dnMpLFxcblxcdFxcdGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxcblxcdH1cXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdFRnZEJvdW5kaW5nQm94LFxuXHRUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXG5cdFRnZENvbG9yLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZERhdGFzZXQsXG5cdFRnZEdlb21ldHJ5Qm94LFxuXHRUZ2RMaWdodCxcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHRUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyR3JvdXAsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0dHlwZSBUZ2RQb2ludHNDbG91ZEZyYWdDb2RlU3BoZXJlT3B0aW9ucyxcblx0VGdkVGV4dHVyZTJELFxuXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IEdyaWRVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL3V2LWdyaWQtMngyLndlYnBcIlxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmNvbnN0IERFUFRIX1BSRUNJU0lPTl9BUlJBWTogVGdkUG9pbnRzQ2xvdWRGcmFnQ29kZVNwaGVyZU9wdGlvbnNbXCJkZXB0aFByZWNpc2lvblwiXVtdID1cblx0W1wibm9uZVwiLCBcImxvd1wiLCBcImhpZ2hcIl1cblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW5cblx0Y29udGV4dC5jYW1lcmEgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKClcblx0Y29udGV4dC5leGVjQmVmb3JlTmV4dFBhaW50KCgpID0+IHtcblx0XHRjb25zdCByYWRpdXMgPSAzXG5cdFx0Y29udGV4dC5jYW1lcmEuZml0Qm91bmRpbmdCb3goXG5cdFx0XHRuZXcgVGdkQm91bmRpbmdCb3goKS5hZGRTcGhlcmUoMCwgMCwgMCwgcmFkaXVzKSxcblx0XHQpXG5cdH0pXG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSlcblx0Y29uc3QgeyB0ZXh0dXJlLCBkYXRhUG9pbnQsIGRhdGFVViB9ID0gY3JlYXRlRGF0YShjb250ZXh0KVxuXHRjb25zdCBncm91cHM6IFJlY29yZDxzdHJpbmcsIFRnZFBhaW50ZXJHcm91cD4gPSB7fVxuXHRjb25zdCBjbG91ZHM6IFRnZFBhaW50ZXJQb2ludHNDbG91ZFtdID0gW11cblx0Zm9yIChjb25zdCBkZXB0aFByZWNpc2lvbiBvZiBERVBUSF9QUkVDSVNJT05fQVJSQVkpIHtcblx0XHRpZiAoIWRlcHRoUHJlY2lzaW9uKSBjb250aW51ZVxuXG5cdFx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcblx0XHRcdGRhdGFQb2ludCxcblx0XHRcdGRhdGFVVixcblx0XHRcdHRleHR1cmUsXG5cdFx0XHRyYWRpdXNNdWx0aXBsaWVyOiAxLjUsXG5cdFx0XHRtaW5TaXplSW5QaXhlbHM6IDMyLFxuXHRcdFx0ZnJhZ0NvZGU6IFRnZFBhaW50ZXJQb2ludHNDbG91ZC5mcmFnQ29kZVNwaGVyZSh7IGRlcHRoUHJlY2lzaW9uIH0pLFxuXHRcdH0pXG5cdFx0Y2xvdWRzLnB1c2goY2xvdWQpXG5cdFx0Z3JvdXBzW2RlcHRoUHJlY2lzaW9uXSA9IG5ldyBUZ2RQYWludGVyR3JvdXAoW2Nsb3VkXSwge1xuXHRcdFx0YWN0aXZlOiBkZXB0aFByZWNpc2lvbiA9PT0gXCJsb3dcIixcblx0XHR9KVxuXHR9XG5cdGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuXHRcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goeyBzaXplWDogMiwgc2l6ZVk6IDIsIHNpemVaOiAyIH0pLFxuXHRcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcblx0XHRcdGNvbG9yOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmdyaWQpLFxuXHRcdFx0YW1iaWVudDogbmV3IFRnZExpZ2h0KHtcblx0XHRcdFx0Y29sb3I6IFswLjUsIDAuNSwgMC41LCAxXSxcblx0XHRcdH0pLFxuXHRcdH0pLFxuXHR9KVxuXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0Y2hpbGRyZW46IFtjdWJlLCAuLi5PYmplY3QudmFsdWVzKGdyb3VwcyldLFxuXHR9KVxuXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXG5cdGNvbnRleHQucGFpbnQoKVxuXHQvLyAjZW5kXG5cdHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcblx0XHRmb3IgKGNvbnN0IGNsb3VkIG9mIGNsb3Vkcykge1xuXHRcdFx0Y2xvdWQucmFkaXVzTXVsdGlwbGllciA9IHNldHRpbmdzLnJhZGl1c011bHRpcGxpZXJcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBkZXB0aFByZWNpc2lvbiBvZiBERVBUSF9QUkVDSVNJT05fQVJSQVkpIHtcblx0XHRcdGlmICghZGVwdGhQcmVjaXNpb24pIGNvbnRpbnVlXG5cblx0XHRcdGNvbnN0IGdyb3VwID0gZ3JvdXBzW2RlcHRoUHJlY2lzaW9uXVxuXHRcdFx0Z3JvdXAuYWN0aXZlID1cblx0XHRcdFx0ZGVwdGhQcmVjaXNpb24gPT09IERFUFRIX1BSRUNJU0lPTl9BUlJBWVtzZXR0aW5ncy5kZXB0aFByZWNpc2lvbl1cblx0XHR9XG5cdFx0Y29udGV4dC5wYWludCgpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGdpem1vXG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0XHRncmlkOiBHcmlkVVJMLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHRcdGNvbnRyb2xsZXI9e3tcblx0XHRcdFx0aW5lcnRpYU9yYml0OiAyMDAwLFxuXHRcdFx0XHRtYXhab29tOiA1LFxuXHRcdFx0XHRtaW5ab29tOiAwLjI1LFxuXHRcdFx0XHRzcGVlZFpvb206IDEsXG5cdFx0XHR9fVxuXHRcdFx0b3B0aW9ucz17e1xuXHRcdFx0XHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG5cdFx0XHR9fVxuXHRcdFx0c2V0dGluZ3M9e3tcblx0XHRcdFx0ZGVwdGhQcmVjaXNpb246IHtcblx0XHRcdFx0XHRsYWJlbDogXCJkZXB0aFByZWNpc2lvblwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHRcdHN0ZXA6IFtcIm5vbmVcIiwgXCJsb3dcIiwgXCJoaWdoXCJdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRyYWRpdXNNdWx0aXBsaWVyOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwicmFkaXVzTXVsdGlwbGllclwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLjUsXG5cdFx0XHRcdFx0bWluOiAwLjUsXG5cdFx0XHRcdFx0bWF4OiAyLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGEoY29udGV4dDogVGdkQ29udGV4dCkge1xuXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuXHRcdFBPU0lUSU9OOiBcInZlYzRcIixcblx0fSlcblx0Y29uc3QgY29vcmRzOiBudW1iZXJbXSA9IFtdXG5cdGNvbnN0IHV2czogbnVtYmVyW10gPSBbXVxuXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXVxuXHRjb25zdCB2YWx1ZXMgPSBbLTEsICsxXVxuXHRjb25zdCByYWRpdXMgPSAxXG5cdGxldCBpbmRleCA9IDBcblx0Zm9yIChjb25zdCB4IG9mIHZhbHVlcykge1xuXHRcdGZvciAoY29uc3QgeSBvZiB2YWx1ZXMpIHtcblx0XHRcdGZvciAoY29uc3QgeiBvZiB2YWx1ZXMpIHtcblx0XHRcdFx0Y29vcmRzLnB1c2goeCwgeSwgeiwgcmFkaXVzKVxuXHRcdFx0XHRjb25zdCB1ID0gaW5kZXggLyA4XG5cdFx0XHRcdHV2cy5wdXNoKHUsIHUpXG5cdFx0XHRcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0wodSwgMSwgMC41KSlcblx0XHRcdFx0Y29uc3QgZGlzdCA9IDEuNjY2XG5cdFx0XHRcdGNvb3Jkcy5wdXNoKGRpc3QgKiB4LCBkaXN0ICogeSwgZGlzdCAqIHosIHJhZGl1cyAvIDIpXG5cdFx0XHRcdHV2cy5wdXNoKHUgKyAwLjUsIHUgKyAwLjUpXG5cdFx0XHRcdGluZGV4Kytcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZGF0YXNldC5zZXQoXCJQT1NJVElPTlwiLCBuZXcgRmxvYXQzMkFycmF5KGNvb3JkcykpXG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRwYXJhbXM6IHtcblx0XHRcdG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG5cdFx0XHRtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdH0sXG5cdH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMpKVxuXHRyZXR1cm4ge1xuXHRcdHRleHR1cmUsXG5cdFx0ZGF0YVVWOiBuZXcgRmxvYXQzMkFycmF5KHV2cyksXG5cdFx0ZGF0YVBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSksXG5cdH1cbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ29sb3IiLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2REYXRhc2V0IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlclBvaW50c0Nsb3VkIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwidGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJNb25rZXlVUkwiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjbGVhciIsInRleHR1cmUiLCJjcmVhdGVQYWxldHRlIiwiZGF0YXNldCIsIm1ha2VEYXRhc2V0IiwiY29uc29sZSIsImNsb3VkIiwiRmxvYXQzMkFycmF5IiwibWFrZVVWIiwic3RhdGUiLCJnbGIiLCJzZXQiLCJjb3VudCIsInJhZGl1cyIsImkiLCJ1dnMiLCJnZXQiLCJueCIsIm55IiwidSIsInYiLCJjb2xvcnMiLCJTIiwiX2l0ZXIiLCJMIiwiX2l0ZXIxIiwiSCIsIlRnZEJvdW5kaW5nQm94IiwiVGdkQ2FtZXJhT3J0aG9ncmFwaGljIiwiVGdkR2VvbWV0cnlCb3giLCJUZ2RMaWdodCIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJHcm91cCIsIlRnZFBhaW50ZXJNZXNoIiwiR3JpZFVSTCIsIkRFUFRIX1BSRUNJU0lPTl9BUlJBWSIsIl9jcmVhdGVEYXRhIiwiZGF0YVBvaW50IiwiZGF0YVVWIiwiZ3JvdXBzIiwiY2xvdWRzIiwiX2l0ZXJhdG9yRXJyb3IiLCJkZXB0aFByZWNpc2lvbiIsImN1YmUiLCJPYmplY3QiLCJzZXR0aW5ncyIsIl9pdGVyYXRvckVycm9yMSIsImdyb3VwIiwiY3JlYXRlRGF0YSIsImNvb3JkcyIsInZhbHVlcyIsImluZGV4IiwieCIsInkiLCJfaXRlcmF0b3JFcnJvcjIiLCJ6IiwiZGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ2Y7QUFFdEMsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBb2xDO0FBQy9tQyxJQUFNQyxPQUFPO0FBRUUsU0FB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