"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_points-cloud_variant_morphing_page_mdx-src_components_demo_CodeViewe-f4df9c"], {
41678(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/high-res-monkey-deformed.5fe00ccadb29b03a.glb";

},
8755(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/high-res-monkey.9d3a83c717063744.glb";

},
53753(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _points_cloud_demo__rspack_import_4 = __webpack_require__(16217);
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
    "Detail #1": '    context.camera.transfo.distance = 5\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 5,\n        minZoom: 0.5,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        params: {\n            minFilter: "LINEAR",\n            magFilter: "LINEAR",\n            wrapS: "CLAMP_TO_EDGE",\n            wrapT: "CLAMP_TO_EDGE",\n        },\n    }).loadBitmap(tgdCanvasCreatePalette(["#f74", "#ff0", "#59f"]))\n    const dataset1 = makeDataset(assets.glb.monkey1)\n    const dataset2 = makeDataset(assets.glb.monkey2)\n    const cloud = new TgdPainterPointsCloudMorphing(context, {\n        mix: 1,\n        data: [\n            [\n                {\n                    point: new Float32Array(dataset1.data),\n                    uv: makeUV(dataset1.count, 1),\n                },\n                {\n                    point: new Float32Array(dataset2.data),\n                    uv: makeUV(dataset2.count, 0),\n                },\n            ],\n        ],\n        texture,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [cloud],\n    })\n    context.add(clear, state)\n    context.paint()'
};
var FULL = 'import {\n    tgdCanvasCreatePalette,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    type TgdDataGlb,\n    TgdDataset,\n    TgdPainterClear,\n    TgdPainterPointsCloud,\n    TgdPainterPointsCloudMorphing,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\nimport Monkey1URL from "@/assets/mesh/high-res-monkey.glb"\nimport Monkey2URL from "@/assets/mesh/high-res-monkey-deformed.glb"\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nfunction makeDataset(glb: TgdDataGlb) {\n    const dataset = new TgdDataset({\n        POSITION: "vec4",\n    })\n    glb.setAttrib(dataset, "POSITION")\n    const { set } = dataset.getAttribAccessor("POSITION")\n    const count = dataset.count\n    const radius = 0.01\n    for (let i = 0; i < count; i++) {\n        set(radius, i, 3)\n    }\n    return dataset\n}\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.distance = 5\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 5,\n        minZoom: 0.5,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        params: {\n            minFilter: "LINEAR",\n            magFilter: "LINEAR",\n            wrapS: "CLAMP_TO_EDGE",\n            wrapT: "CLAMP_TO_EDGE",\n        },\n    }).loadBitmap(tgdCanvasCreatePalette(["#f74", "#ff0", "#59f"]))\n    const dataset1 = makeDataset(assets.glb.monkey1)\n    const dataset2 = makeDataset(assets.glb.monkey2)\n    const cloud = new TgdPainterPointsCloudMorphing(context, {\n        mix: 1,\n        data: [\n            [\n                {\n                    point: new Float32Array(dataset1.data),\n                    uv: makeUV(dataset1.count, 1),\n                },\n                {\n                    point: new Float32Array(dataset2.data),\n                    uv: makeUV(dataset2.count, 0),\n                },\n            ],\n        ],\n        texture,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [cloud],\n    })\n    context.add(clear, state)\n    context.paint()\n    return (settings: Record<string, number>) => {\n        cloud.mix = settings.mix\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            assets={{\n                glb: { monkey1: Monkey1URL, monkey2: Monkey2URL },\n            }}\n            settings={{\n                mix: {\n                    label: "mix",\n                    value: 0,\n                },\n            }}\n        />\n    )\n}\n\nfunction makeUV(count: number, value: number) {\n    const data = new Float32Array(count * 2)\n    for (let i = 0; i < data.length; i++) {\n        data[i] = value\n    }\n    return data\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud-morphing.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud-morphing.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 4
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud-morphing.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud-morphing.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud-morphing.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud-morphing.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
16217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _assets_mesh_high_res_monkey_glb__rspack_import_2 = __webpack_require__(8755);
/* import */ var _assets_mesh_high_res_monkey_deformed_glb__rspack_import_3 = __webpack_require__(41678);
/* import */ var _components_demo_Tgd__rspack_import_4 = __webpack_require__(43475);





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
    var dataset1 = makeDataset(assets.glb.monkey1);
    var dataset2 = makeDataset(assets.glb.monkey2);
    var cloud = new _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloudMorphing(context, {
        mix: 1,
        data: [
            [
                {
                    point: new Float32Array(dataset1.data),
                    uv: makeUV(dataset1.count, 1)
                },
                {
                    point: new Float32Array(dataset2.data),
                    uv: makeUV(dataset2.count, 0)
                }
            ]
        ],
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
    return function(settings) {
        cloud.mix = settings.mix;
        context.paint();
    };
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_4["default"], {
        onReady: init,
        gizmo: true,
        options: {
            preserveDrawingBuffer: true
        },
        assets: {
            glb: {
                monkey1: _assets_mesh_high_res_monkey_glb__rspack_import_2,
                monkey2: _assets_mesh_high_res_monkey_deformed_glb__rspack_import_3
            }
        },
        settings: {
            mix: {
                label: "mix",
                value: 0
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud-morphing.demo/points-cloud.demo.tsx",
        lineNumber: 86,
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
72622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _points_cloud_demo__rspack_import_4 = __webpack_require__(92542);
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
    "Detail #1": "\tcontext.camera = new TgdCameraOrthographic()\n\tcontext.execBeforeNextPaint(() => {\n\t\tconst radius = 2.5\n\t\tcontext.camera.fitBoundingBox(\n\t\t\tnew TgdBoundingBox().addSphere(0, 0, 0, radius),\n\t\t)\n\t\tcontext.camera.debug()\n\t})\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.25,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t})\n\tconst coords: number[] = []\n\tconst uvs: number[] = []\n\tconst colors: TgdColor[] = []\n\tconst values = [-1, +1]\n\tconst radius = 1\n\tlet index = 0\n\tfor (const x of values) {\n\t\tfor (const y of values) {\n\t\t\tfor (const z of values) {\n\t\t\t\tcoords.push(x, y, z, radius)\n\t\t\t\tconst u = index / 8\n\t\t\t\tuvs.push(u, u)\n\t\t\t\tcolors.push(TgdColor.fromHSL(u, 1, 0.5))\n\t\t\t\tindex++\n\t\t\t}\n\t\t}\n\t}\n\tdataset.set(\"POSITION\", new Float32Array(coords))\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"NEAREST\",\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t}).loadBitmap(tgdCanvasCreatePalette(colors))\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\tdataUV: new Float32Array(uvs),\n\t\ttexture,\n\t\tminSizeInPixels: 32,\n\t})\n\tconst cube = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n\t\tmaterial: new TgdMaterialFaceOrientation(),\n\t})\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cube, cloud],\n\t\t// children: [cloud],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()"
};
var FULL = "import {\n\tTgdBoundingBox,\n\tTgdCameraOrthographic,\n\tTgdColor,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdDataset,\n\tTgdGeometryBox,\n\tTgdMaterialFaceOrientation,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterPointsCloud,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdCanvasCreatePalette,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n\tcontext.camera = new TgdCameraOrthographic()\n\tcontext.execBeforeNextPaint(() => {\n\t\tconst radius = 2.5\n\t\tcontext.camera.fitBoundingBox(\n\t\t\tnew TgdBoundingBox().addSphere(0, 0, 0, radius),\n\t\t)\n\t\tcontext.camera.debug()\n\t})\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.25,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t})\n\tconst coords: number[] = []\n\tconst uvs: number[] = []\n\tconst colors: TgdColor[] = []\n\tconst values = [-1, +1]\n\tconst radius = 1\n\tlet index = 0\n\tfor (const x of values) {\n\t\tfor (const y of values) {\n\t\t\tfor (const z of values) {\n\t\t\t\tcoords.push(x, y, z, radius)\n\t\t\t\tconst u = index / 8\n\t\t\t\tuvs.push(u, u)\n\t\t\t\tcolors.push(TgdColor.fromHSL(u, 1, 0.5))\n\t\t\t\tindex++\n\t\t\t}\n\t\t}\n\t}\n\tdataset.set(\"POSITION\", new Float32Array(coords))\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"NEAREST\",\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t}).loadBitmap(tgdCanvasCreatePalette(colors))\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\tdataUV: new Float32Array(uvs),\n\t\ttexture,\n\t\tminSizeInPixels: 32,\n\t})\n\tconst cube = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n\t\tmaterial: new TgdMaterialFaceOrientation(),\n\t})\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cube, cloud],\n\t\t// children: [cloud],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()\n\treturn (settings: Record<string, number>) => {\n\t\tcloud.radiusMultiplier = settings.radiusMultiplier\n\t\tcloud.shadowIntensity = settings.shadowIntensity\n\t\tcloud.shadowThickness = settings.shadowThickness\n\t\tcloud.specularExponent = settings.specularExponent\n\t\tcloud.specularIntensity = settings.specularIntensity\n\t\tcloud.light = settings.light\n\t\tcontext.paint()\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tradiusMultiplier: {\n\t\t\t\t\tlabel: \"radiusMultiplier\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: 0.5,\n\t\t\t\t\tmax: 2,\n\t\t\t\t},\n\t\t\t\tshadowIntensity: {\n\t\t\t\t\tlabel: \"shadowIntensity\",\n\t\t\t\t\tvalue: 0.75,\n\t\t\t\t},\n\t\t\t\tshadowThickness: {\n\t\t\t\t\tlabel: \"shadowThickness\",\n\t\t\t\t\tvalue: 1.2,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 2,\n\t\t\t\t},\n\t\t\t\tspecularExponent: {\n\t\t\t\t\tlabel: \"specularExponent\",\n\t\t\t\t\tvalue: 14,\n\t\t\t\t\tmin: -10,\n\t\t\t\t\tmax: 30,\n\t\t\t\t},\n\t\t\t\tspecularIntensity: {\n\t\t\t\t\tlabel: \"specularIntensity\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t},\n\t\t\t\tlight: {\n\t\t\t\t\tlabel: \"light\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: -1,\n\t\t\t\t\tmax: +3,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t)\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
92542(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
        var radius = 2.5;
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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/points-cloud.demo/points-cloud.demo.tsx",
        lineNumber: 98,
        columnNumber: 3
    }, this);
}


},
7091(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _points_cloud_demo__rspack_import_1 = __webpack_require__(72622);
/* import */ var _points_cloud_morphing_demo__rspack_import_2 = __webpack_require__(53753);
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
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterPointsCloud.html",
                    children: "TgdPainterPointsCloud"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                    lineNumber: 6,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterPointsCloudMorphing.html",
                    children: "TgdPainterPointsCloudMorphing"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                    lineNumber: 10,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "It is also possible to use morphing between two positions."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_morphing_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wb2ludHMtY2xvdWRfdmFyaWFudF9tb3JwaGluZ19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZS1mNGRmOWMuZjM5NzhiYWZjNmJhMDRiYS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvdmFyaWFudC9tb3JwaGluZy9fL3BvaW50cy1jbG91ZC1tb3JwaGluZy5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL3ZhcmlhbnQvbW9ycGhpbmcvXy9wb2ludHMtY2xvdWQtbW9ycGhpbmcuZGVtby9wb2ludHMtY2xvdWQuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L21vcnBoaW5nL18vcG9pbnRzLWNsb3VkLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvdmFyaWFudC9tb3JwaGluZy9fL3BvaW50cy1jbG91ZC5kZW1vL3BvaW50cy1jbG91ZC5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL3ZhcmlhbnQvbW9ycGhpbmcvcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9wb2ludHMtY2xvdWQuZGVtb1wiO1xuXG5jb25zdCBGT0NVUyA9IHtcblx0XCJEZXRhaWwgIzFcIjpcblx0XHQnICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1XFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgbWF4Wm9vbTogNSxcXG4gICAgICAgIG1pblpvb206IDAuNSxcXG4gICAgICAgIHNwZWVkWm9vbTogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgICAgICB3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgd3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgfSxcXG4gICAgfSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiNmNzRcIiwgXCIjZmYwXCIsIFwiIzU5ZlwiXSkpXFxuICAgIGNvbnN0IGRhdGFzZXQxID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkxKVxcbiAgICBjb25zdCBkYXRhc2V0MiA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5MilcXG4gICAgY29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkTW9ycGhpbmcoY29udGV4dCwge1xcbiAgICAgICAgbWl4OiAxLFxcbiAgICAgICAgZGF0YTogW1xcbiAgICAgICAgICAgIFtcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldDEuZGF0YSksXFxuICAgICAgICAgICAgICAgICAgICB1djogbWFrZVVWKGRhdGFzZXQxLmNvdW50LCAxKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldDIuZGF0YSksXFxuICAgICAgICAgICAgICAgICAgICB1djogbWFrZVVWKGRhdGFzZXQyLmNvdW50LCAwKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgXSxcXG4gICAgICAgIHRleHR1cmUsXFxuICAgIH0pXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY2hpbGRyZW46IFtjbG91ZF0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcXG4gICAgY29udGV4dC5wYWludCgpJyxcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7XFxuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICB0eXBlIFRnZERhdGFHbGIsXFxuICAgIFRnZERhdGFzZXQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlclBvaW50c0Nsb3VkLFxcbiAgICBUZ2RQYWludGVyUG9pbnRzQ2xvdWRNb3JwaGluZyxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxcbmltcG9ydCBNb25rZXkxVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL2hpZ2gtcmVzLW1vbmtleS5nbGJcIlxcbmltcG9ydCBNb25rZXkyVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL2hpZ2gtcmVzLW1vbmtleS1kZWZvcm1lZC5nbGJcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXFxuXFxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XFxuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuICAgICAgICBQT1NJVElPTjogXCJ2ZWM0XCIsXFxuICAgIH0pXFxuICAgIGdsYi5zZXRBdHRyaWIoZGF0YXNldCwgXCJQT1NJVElPTlwiKVxcbiAgICBjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcIlBPU0lUSU9OXCIpXFxuICAgIGNvbnN0IGNvdW50ID0gZGF0YXNldC5jb3VudFxcbiAgICBjb25zdCByYWRpdXMgPSAwLjAxXFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcbiAgICAgICAgc2V0KHJhZGl1cywgaSwgMylcXG4gICAgfVxcbiAgICByZXR1cm4gZGF0YXNldFxcbn1cXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1XFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgbWF4Wm9vbTogNSxcXG4gICAgICAgIG1pblpvb206IDAuNSxcXG4gICAgICAgIHNwZWVkWm9vbTogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgICAgICB3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgd3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgfSxcXG4gICAgfSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiNmNzRcIiwgXCIjZmYwXCIsIFwiIzU5ZlwiXSkpXFxuICAgIGNvbnN0IGRhdGFzZXQxID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkxKVxcbiAgICBjb25zdCBkYXRhc2V0MiA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5MilcXG4gICAgY29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkTW9ycGhpbmcoY29udGV4dCwge1xcbiAgICAgICAgbWl4OiAxLFxcbiAgICAgICAgZGF0YTogW1xcbiAgICAgICAgICAgIFtcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldDEuZGF0YSksXFxuICAgICAgICAgICAgICAgICAgICB1djogbWFrZVVWKGRhdGFzZXQxLmNvdW50LCAxKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldDIuZGF0YSksXFxuICAgICAgICAgICAgICAgICAgICB1djogbWFrZVVWKGRhdGFzZXQyLmNvdW50LCAwKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgXSxcXG4gICAgICAgIHRleHR1cmUsXFxuICAgIH0pXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY2hpbGRyZW46IFtjbG91ZF0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcXG4gICAgICAgIGNsb3VkLm1peCA9IHNldHRpbmdzLm1peFxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBnaXptb1xcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcXG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGdsYjogeyBtb25rZXkxOiBNb25rZXkxVVJMLCBtb25rZXkyOiBNb25rZXkyVVJMIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBzZXR0aW5ncz17e1xcbiAgICAgICAgICAgICAgICBtaXg6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1peFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXFxuZnVuY3Rpb24gbWFrZVVWKGNvdW50OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoY291bnQgKiAyKVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIGRhdGFbaV0gPSB2YWx1ZVxcbiAgICB9XFxuICAgIHJldHVybiBkYXRhXFxufVxcbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG5cdGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cblx0XHRcdFx0PERlbW8gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuXHRcdFx0XHRcdFx0e2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiaW1wb3J0IHtcblx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdHR5cGUgVGdkRGF0YUdsYixcblx0VGdkRGF0YXNldCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXG5cdFRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgTW9ua2V5MVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXCI7XG5pbXBvcnQgTW9ua2V5MlVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXktZGVmb3JtZWQuZ2xiXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0UE9TSVRJT046IFwidmVjNFwiLFxuXHR9KTtcblx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcIlBPU0lUSU9OXCIpO1xuXHRjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcIlBPU0lUSU9OXCIpO1xuXHRjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnQ7XG5cdGNvbnN0IHJhZGl1cyA9IDAuMDE7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdHNldChyYWRpdXMsIGksIDMpO1xuXHR9XG5cdHJldHVybiBkYXRhc2V0O1xufVxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdC8vICNiZWdpblxuXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNTtcblx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG5cdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdG1heFpvb206IDUsXG5cdFx0bWluWm9vbTogMC41LFxuXHRcdHNwZWVkWm9vbTogMSxcblx0fSk7XG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSk7XG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRwYXJhbXM6IHtcblx0XHRcdG1pbkZpbHRlcjogXCJMSU5FQVJcIixcblx0XHRcdG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcblx0XHRcdHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcblx0XHRcdHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcblx0XHR9LFxuXHR9KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiI2Y3NFwiLCBcIiNmZjBcIiwgXCIjNTlmXCJdKSk7XG5cdGNvbnN0IGRhdGFzZXQxID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkxKTtcblx0Y29uc3QgZGF0YXNldDIgPSBtYWtlRGF0YXNldChhc3NldHMuZ2xiLm1vbmtleTIpO1xuXHRjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWRNb3JwaGluZyhjb250ZXh0LCB7XG5cdFx0bWl4OiAxLFxuXHRcdGRhdGE6IFtcblx0XHRcdFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQxLmRhdGEpLFxuXHRcdFx0XHRcdHV2OiBtYWtlVVYoZGF0YXNldDEuY291bnQsIDEpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldDIuZGF0YSksXG5cdFx0XHRcdFx0dXY6IG1ha2VVVihkYXRhc2V0Mi5jb3VudCwgMCksXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdF0sXG5cdFx0dGV4dHVyZSxcblx0fSk7XG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRjaGlsZHJlbjogW2Nsb3VkXSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XG5cdGNvbnRleHQucGFpbnQoKTtcblx0Ly8gI2VuZFxuXHRyZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG5cdFx0Y2xvdWQubWl4ID0gc2V0dGluZ3MubWl4O1xuXHRcdGNvbnRleHQucGFpbnQoKTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGdpem1vXG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdH19XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0Z2xiOiB7IG1vbmtleTE6IE1vbmtleTFVUkwsIG1vbmtleTI6IE1vbmtleTJVUkwgfSxcblx0XHRcdH19XG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHRtaXg6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJtaXhcIixcblx0XHRcdFx0XHR2YWx1ZTogMCxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gbWFrZVVWKGNvdW50OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcblx0Y29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoY291bnQgKiAyKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0ZGF0YVtpXSA9IHZhbHVlO1xuXHR9XG5cdHJldHVybiBkYXRhO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3BvaW50cy1jbG91ZC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIlxcdGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYygpXFxuXFx0Y29udGV4dC5leGVjQmVmb3JlTmV4dFBhaW50KCgpID0+IHtcXG5cXHRcXHRjb25zdCByYWRpdXMgPSAyLjVcXG5cXHRcXHRjb250ZXh0LmNhbWVyYS5maXRCb3VuZGluZ0JveChcXG5cXHRcXHRcXHRuZXcgVGdkQm91bmRpbmdCb3goKS5hZGRTcGhlcmUoMCwgMCwgMCwgcmFkaXVzKSxcXG5cXHRcXHQpXFxuXFx0XFx0Y29udGV4dC5jYW1lcmEuZGVidWcoKVxcblxcdH0pXFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdG1heFpvb206IDUsXFxuXFx0XFx0bWluWm9vbTogMC4yNSxcXG5cXHRcXHRzcGVlZFpvb206IDEsXFxuXFx0fSlcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuXFx0XFx0ZGVwdGg6IDEsXFxuXFx0fSlcXG5cXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcblxcdFxcdFBPU0lUSU9OOiBcXFwidmVjNFxcXCIsXFxuXFx0fSlcXG5cXHRjb25zdCBjb29yZHM6IG51bWJlcltdID0gW11cXG5cXHRjb25zdCB1dnM6IG51bWJlcltdID0gW11cXG5cXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXVxcblxcdGNvbnN0IHZhbHVlcyA9IFstMSwgKzFdXFxuXFx0Y29uc3QgcmFkaXVzID0gMVxcblxcdGxldCBpbmRleCA9IDBcXG5cXHRmb3IgKGNvbnN0IHggb2YgdmFsdWVzKSB7XFxuXFx0XFx0Zm9yIChjb25zdCB5IG9mIHZhbHVlcykge1xcblxcdFxcdFxcdGZvciAoY29uc3QgeiBvZiB2YWx1ZXMpIHtcXG5cXHRcXHRcXHRcXHRjb29yZHMucHVzaCh4LCB5LCB6LCByYWRpdXMpXFxuXFx0XFx0XFx0XFx0Y29uc3QgdSA9IGluZGV4IC8gOFxcblxcdFxcdFxcdFxcdHV2cy5wdXNoKHUsIHUpXFxuXFx0XFx0XFx0XFx0Y29sb3JzLnB1c2goVGdkQ29sb3IuZnJvbUhTTCh1LCAxLCAwLjUpKVxcblxcdFxcdFxcdFxcdGluZGV4KytcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRkYXRhc2V0LnNldChcXFwiUE9TSVRJT05cXFwiLCBuZXcgRmxvYXQzMkFycmF5KGNvb3JkcykpXFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdH0sXFxuXFx0fSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKGNvbG9ycykpXFxuXFx0Y29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcXG5cXHRcXHRkYXRhUG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKSxcXG5cXHRcXHRkYXRhVVY6IG5ldyBGbG9hdDMyQXJyYXkodXZzKSxcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdFxcdG1pblNpemVJblBpeGVsczogMzIsXFxuXFx0fSlcXG5cXHRjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHsgc2l6ZVg6IDIsIHNpemVZOiAyLCBzaXplWjogMiB9KSxcXG5cXHRcXHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXFxuXFx0fSlcXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0Y2hpbGRyZW46IFtjdWJlLCBjbG91ZF0sXFxuXFx0XFx0Ly8gY2hpbGRyZW46IFtjbG91ZF0sXFxuXFx0fSlcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXFxuXFx0Y29udGV4dC5wYWludCgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdFRnZEJvdW5kaW5nQm94LFxcblxcdFRnZENhbWVyYU9ydGhvZ3JhcGhpYyxcXG5cXHRUZ2RDb2xvcixcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcblxcdFRnZERhdGFzZXQsXFxuXFx0VGdkR2VvbWV0cnlCb3gsXFxuXFx0VGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJNZXNoLFxcblxcdFRnZFBhaW50ZXJQb2ludHNDbG91ZCxcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0VGdkVGV4dHVyZTJELFxcblxcdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXFxuXFx0d2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG5cXHRjb250ZXh0LmNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoKVxcblxcdGNvbnRleHQuZXhlY0JlZm9yZU5leHRQYWludCgoKSA9PiB7XFxuXFx0XFx0Y29uc3QgcmFkaXVzID0gMi41XFxuXFx0XFx0Y29udGV4dC5jYW1lcmEuZml0Qm91bmRpbmdCb3goXFxuXFx0XFx0XFx0bmV3IFRnZEJvdW5kaW5nQm94KCkuYWRkU3BoZXJlKDAsIDAsIDAsIHJhZGl1cyksXFxuXFx0XFx0KVxcblxcdFxcdGNvbnRleHQuY2FtZXJhLmRlYnVnKClcXG5cXHR9KVxcblxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcblxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRtYXhab29tOiA1LFxcblxcdFxcdG1pblpvb206IDAuMjUsXFxuXFx0XFx0c3BlZWRab29tOiAxLFxcblxcdH0pXFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pXFxuXFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG5cXHRcXHRQT1NJVElPTjogXFxcInZlYzRcXFwiLFxcblxcdH0pXFxuXFx0Y29uc3QgY29vcmRzOiBudW1iZXJbXSA9IFtdXFxuXFx0Y29uc3QgdXZzOiBudW1iZXJbXSA9IFtdXFxuXFx0Y29uc3QgY29sb3JzOiBUZ2RDb2xvcltdID0gW11cXG5cXHRjb25zdCB2YWx1ZXMgPSBbLTEsICsxXVxcblxcdGNvbnN0IHJhZGl1cyA9IDFcXG5cXHRsZXQgaW5kZXggPSAwXFxuXFx0Zm9yIChjb25zdCB4IG9mIHZhbHVlcykge1xcblxcdFxcdGZvciAoY29uc3QgeSBvZiB2YWx1ZXMpIHtcXG5cXHRcXHRcXHRmb3IgKGNvbnN0IHogb2YgdmFsdWVzKSB7XFxuXFx0XFx0XFx0XFx0Y29vcmRzLnB1c2goeCwgeSwgeiwgcmFkaXVzKVxcblxcdFxcdFxcdFxcdGNvbnN0IHUgPSBpbmRleCAvIDhcXG5cXHRcXHRcXHRcXHR1dnMucHVzaCh1LCB1KVxcblxcdFxcdFxcdFxcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0wodSwgMSwgMC41KSlcXG5cXHRcXHRcXHRcXHRpbmRleCsrXFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFx0ZGF0YXNldC5zZXQoXFxcIlBPU0lUSU9OXFxcIiwgbmV3IEZsb2F0MzJBcnJheShjb29yZHMpKVxcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRwYXJhbXM6IHtcXG5cXHRcXHRcXHRtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG5cXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG5cXHRcXHR9LFxcblxcdH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMpKVxcblxcdGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XFxuXFx0XFx0ZGF0YVBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSksXFxuXFx0XFx0ZGF0YVVWOiBuZXcgRmxvYXQzMkFycmF5KHV2cyksXFxuXFx0XFx0dGV4dHVyZSxcXG5cXHRcXHRtaW5TaXplSW5QaXhlbHM6IDMyLFxcblxcdH0pXFxuXFx0Y29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuXFx0XFx0Z2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7IHNpemVYOiAyLCBzaXplWTogMiwgc2l6ZVo6IDIgfSksXFxuXFx0XFx0bWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxcblxcdH0pXFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbY3ViZSwgY2xvdWRdLFxcblxcdFxcdC8vIGNoaWxkcmVuOiBbY2xvdWRdLFxcblxcdH0pXFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcblxcdGNvbnRleHQucGFpbnQoKVxcblxcdHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcXG5cXHRcXHRjbG91ZC5yYWRpdXNNdWx0aXBsaWVyID0gc2V0dGluZ3MucmFkaXVzTXVsdGlwbGllclxcblxcdFxcdGNsb3VkLnNoYWRvd0ludGVuc2l0eSA9IHNldHRpbmdzLnNoYWRvd0ludGVuc2l0eVxcblxcdFxcdGNsb3VkLnNoYWRvd1RoaWNrbmVzcyA9IHNldHRpbmdzLnNoYWRvd1RoaWNrbmVzc1xcblxcdFxcdGNsb3VkLnNwZWN1bGFyRXhwb25lbnQgPSBzZXR0aW5ncy5zcGVjdWxhckV4cG9uZW50XFxuXFx0XFx0Y2xvdWQuc3BlY3VsYXJJbnRlbnNpdHkgPSBzZXR0aW5ncy5zcGVjdWxhckludGVuc2l0eVxcblxcdFxcdGNsb3VkLmxpZ2h0ID0gc2V0dGluZ3MubGlnaHRcXG5cXHRcXHRjb250ZXh0LnBhaW50KClcXG5cXHR9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0Z2l6bW9cXG5cXHRcXHRcXHRvcHRpb25zPXt7XFxuXFx0XFx0XFx0XFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcblxcdFxcdFxcdH19XFxuXFx0XFx0XFx0c2V0dGluZ3M9e3tcXG5cXHRcXHRcXHRcXHRyYWRpdXNNdWx0aXBsaWVyOiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJyYWRpdXNNdWx0aXBsaWVyXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMSxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IDAuNSxcXG5cXHRcXHRcXHRcXHRcXHRtYXg6IDIsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRzaGFkb3dJbnRlbnNpdHk6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcInNoYWRvd0ludGVuc2l0eVxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDAuNzUsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRzaGFkb3dUaGlja25lc3M6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcInNoYWRvd1RoaWNrbmVzc1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDEuMixcXG5cXHRcXHRcXHRcXHRcXHRtaW46IDAsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiAyLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0c3BlY3VsYXJFeHBvbmVudDoge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwic3BlY3VsYXJFeHBvbmVudFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDE0LFxcblxcdFxcdFxcdFxcdFxcdG1pbjogLTEwLFxcblxcdFxcdFxcdFxcdFxcdG1heDogMzAsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRzcGVjdWxhckludGVuc2l0eToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwic3BlY3VsYXJJbnRlbnNpdHlcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0bGlnaHQ6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcImxpZ2h0XFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMSxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IC0xLFxcblxcdFxcdFxcdFxcdFxcdG1heDogKzMsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0VGdkQm91bmRpbmdCb3gsXG5cdFRnZENhbWVyYU9ydGhvZ3JhcGhpYyxcblx0VGdkQ29sb3IsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuXHRUZ2REYXRhc2V0LFxuXHRUZ2RHZW9tZXRyeUJveCxcblx0VGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJQb2ludHNDbG91ZCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG5cdC8vICNiZWdpblxuXHRjb250ZXh0LmNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoKVxuXHRjb250ZXh0LmV4ZWNCZWZvcmVOZXh0UGFpbnQoKCkgPT4ge1xuXHRcdGNvbnN0IHJhZGl1cyA9IDIuNVxuXHRcdGNvbnRleHQuY2FtZXJhLmZpdEJvdW5kaW5nQm94KFxuXHRcdFx0bmV3IFRnZEJvdW5kaW5nQm94KCkuYWRkU3BoZXJlKDAsIDAsIDAsIHJhZGl1cyksXG5cdFx0KVxuXHRcdGNvbnRleHQuY2FtZXJhLmRlYnVnKClcblx0fSlcblx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG5cdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdG1heFpvb206IDUsXG5cdFx0bWluWm9vbTogMC4yNSxcblx0XHRzcGVlZFpvb206IDEsXG5cdH0pXG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSlcblx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHRQT1NJVElPTjogXCJ2ZWM0XCIsXG5cdH0pXG5cdGNvbnN0IGNvb3JkczogbnVtYmVyW10gPSBbXVxuXHRjb25zdCB1dnM6IG51bWJlcltdID0gW11cblx0Y29uc3QgY29sb3JzOiBUZ2RDb2xvcltdID0gW11cblx0Y29uc3QgdmFsdWVzID0gWy0xLCArMV1cblx0Y29uc3QgcmFkaXVzID0gMVxuXHRsZXQgaW5kZXggPSAwXG5cdGZvciAoY29uc3QgeCBvZiB2YWx1ZXMpIHtcblx0XHRmb3IgKGNvbnN0IHkgb2YgdmFsdWVzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHogb2YgdmFsdWVzKSB7XG5cdFx0XHRcdGNvb3Jkcy5wdXNoKHgsIHksIHosIHJhZGl1cylcblx0XHRcdFx0Y29uc3QgdSA9IGluZGV4IC8gOFxuXHRcdFx0XHR1dnMucHVzaCh1LCB1KVxuXHRcdFx0XHRjb2xvcnMucHVzaChUZ2RDb2xvci5mcm9tSFNMKHUsIDEsIDAuNSkpXG5cdFx0XHRcdGluZGV4Kytcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZGF0YXNldC5zZXQoXCJQT1NJVElPTlwiLCBuZXcgRmxvYXQzMkFycmF5KGNvb3JkcykpXG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRwYXJhbXM6IHtcblx0XHRcdG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG5cdFx0XHRtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdH0sXG5cdH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMpKVxuXHRjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xuXHRcdGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxuXHRcdGRhdGFVVjogbmV3IEZsb2F0MzJBcnJheSh1dnMpLFxuXHRcdHRleHR1cmUsXG5cdFx0bWluU2l6ZUluUGl4ZWxzOiAzMixcblx0fSlcblx0Y29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG5cdFx0Z2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7IHNpemVYOiAyLCBzaXplWTogMiwgc2l6ZVo6IDIgfSksXG5cdFx0bWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxuXHR9KVxuXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0Y2hpbGRyZW46IFtjdWJlLCBjbG91ZF0sXG5cdFx0Ly8gY2hpbGRyZW46IFtjbG91ZF0sXG5cdH0pXG5cdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcblx0Y29udGV4dC5wYWludCgpXG5cdC8vICNlbmRcblx0cmV0dXJuIChzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xuXHRcdGNsb3VkLnJhZGl1c011bHRpcGxpZXIgPSBzZXR0aW5ncy5yYWRpdXNNdWx0aXBsaWVyXG5cdFx0Y2xvdWQuc2hhZG93SW50ZW5zaXR5ID0gc2V0dGluZ3Muc2hhZG93SW50ZW5zaXR5XG5cdFx0Y2xvdWQuc2hhZG93VGhpY2tuZXNzID0gc2V0dGluZ3Muc2hhZG93VGhpY2tuZXNzXG5cdFx0Y2xvdWQuc3BlY3VsYXJFeHBvbmVudCA9IHNldHRpbmdzLnNwZWN1bGFyRXhwb25lbnRcblx0XHRjbG91ZC5zcGVjdWxhckludGVuc2l0eSA9IHNldHRpbmdzLnNwZWN1bGFySW50ZW5zaXR5XG5cdFx0Y2xvdWQubGlnaHQgPSBzZXR0aW5ncy5saWdodFxuXHRcdGNvbnRleHQucGFpbnQoKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRnaXptb1xuXHRcdFx0b3B0aW9ucz17e1xuXHRcdFx0XHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG5cdFx0XHR9fVxuXHRcdFx0c2V0dGluZ3M9e3tcblx0XHRcdFx0cmFkaXVzTXVsdGlwbGllcjoge1xuXHRcdFx0XHRcdGxhYmVsOiBcInJhZGl1c011bHRpcGxpZXJcIixcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRtaW46IDAuNSxcblx0XHRcdFx0XHRtYXg6IDIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNoYWRvd0ludGVuc2l0eToge1xuXHRcdFx0XHRcdGxhYmVsOiBcInNoYWRvd0ludGVuc2l0eVwiLFxuXHRcdFx0XHRcdHZhbHVlOiAwLjc1LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzaGFkb3dUaGlja25lc3M6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJzaGFkb3dUaGlja25lc3NcIixcblx0XHRcdFx0XHR2YWx1ZTogMS4yLFxuXHRcdFx0XHRcdG1pbjogMCxcblx0XHRcdFx0XHRtYXg6IDIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNwZWN1bGFyRXhwb25lbnQ6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJzcGVjdWxhckV4cG9uZW50XCIsXG5cdFx0XHRcdFx0dmFsdWU6IDE0LFxuXHRcdFx0XHRcdG1pbjogLTEwLFxuXHRcdFx0XHRcdG1heDogMzAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNwZWN1bGFySW50ZW5zaXR5OiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwic3BlY3VsYXJJbnRlbnNpdHlcIixcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0bGlnaHQ6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJsaWdodFwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHRcdG1pbjogLTEsXG5cdFx0XHRcdFx0bWF4OiArMyxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDYW52YXNDcmVhdGVQYWxldHRlIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwid2ViZ2xQcmVzZXREZXB0aCIsIk1vbmtleTFVUkwiLCJNb25rZXkyVVJMIiwiVmlldyIsIm1ha2VEYXRhc2V0IiwiZ2xiIiwiZGF0YXNldCIsInNldCIsImNvdW50IiwicmFkaXVzIiwiaSIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2xlYXIiLCJ0ZXh0dXJlIiwiZGF0YXNldDEiLCJkYXRhc2V0MiIsImNsb3VkIiwiRmxvYXQzMkFycmF5IiwibWFrZVVWIiwic3RhdGUiLCJzZXR0aW5ncyIsInZhbHVlIiwiZGF0YSIsIlRnZEJvdW5kaW5nQm94IiwiVGdkQ2FtZXJhT3J0aG9ncmFwaGljIiwiVGdkQ29sb3IiLCJUZ2RHZW9tZXRyeUJveCIsIlRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyUG9pbnRzQ2xvdWQiLCJjb29yZHMiLCJ1dnMiLCJjb2xvcnMiLCJ2YWx1ZXMiLCJpbmRleCIsIl9pdGVyYXRvckVycm9yIiwieCIsIl9pdGVyYXRvckVycm9yMSIsInkiLCJfaXRlcmF0b3JFcnJvcjIiLCJ6IiwidSIsImN1YmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDeUI7QUFDaUI7QUFDVztBQUNmO0FBRXZDLElBQU1JLFFBQVE7SUFDYixhQUNDO0FBQ0Y7QUFDQSxJQUFNQyxPQUNMO0FBRWMsU0FBU0M7SUFDdkIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUNDOzswQkFDQyxrREFBQztnQkFBSSxXQUFVOzBCQUNkLGdFQUFDSiw4Q0FBSUE7Ozs7Ozs7Ozs7MEJBRU4sa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ2Qsa0RBQUM7a0NBQ0EsZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDckRBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHaEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUlwRDs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ3QjtBQUNtQztBQUNTO0FBQ1Y7QUFFMUQsU0FBU2tCLFlBQVlDLEdBQWU7SUFDbkMsSUFBTUMsVUFBVSxJQUFJWCwwQ0FBVUEsQ0FBQztRQUM5QixVQUFVO0lBQ1g7SUFDQVUsSUFBSSxTQUFTLENBQUNDLFNBQVM7SUFDdkIsSUFBUUMsTUFBUUQsUUFBUSxpQkFBaUIsQ0FBQyxZQUFsQ0M7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