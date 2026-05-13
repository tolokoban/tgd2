"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_points-cloud_page_mdx-src_components_demo_CodeViewer_CodeViewer_modu-f72880"], {
41678(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/high-res-monkey-deformed.5fe00ccadb29b03a.glb";

},
8755(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/high-res-monkey.d9df67d70a25deea.glb";

},
30436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _points_cloud_demo__rspack_import_4 = __webpack_require__(2260);
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
    "Detail #1": "    context.camera.transfo.distance = 5\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 5,\n        minZoom: 0.5,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        params: {\n            minFilter: \"LINEAR\",\n            magFilter: \"LINEAR\",\n            wrapS: \"CLAMP_TO_EDGE\",\n            wrapT: \"CLAMP_TO_EDGE\",\n        },\n    }).loadBitmap(tgdCanvasCreatePalette([\"#f74\", \"#ff0\", \"#59f\"]))\n    const dataset1 = makeDataset(assets.glb.monkey1)\n    const dataset2 = makeDataset(assets.glb.monkey2)\n    const cloud = new TgdPainterPointsCloudMorphing(context, {\n        mix: 1,\n        data: [\n            [\n                {\n                    point: new Float32Array(dataset1.data),\n                    uv: makeUV(dataset1.count, 1),\n                },\n                {\n                    point: new Float32Array(dataset2.data),\n                    uv: makeUV(dataset2.count, 0),\n                },\n            ],\n        ],\n        texture,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [cloud],\n    })\n    context.add(clear, state)\n    context.paint()"
};
var FULL = "import {\n    tgdCanvasCreatePalette,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    type TgdDataGlb,\n    TgdDataset,\n    TgdPainterClear,\n    TgdPainterPointsCloud,\n    TgdPainterPointsCloudMorphing,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport Monkey1URL from \"@/assets/mesh/high-res-monkey.glb\"\nimport Monkey2URL from \"@/assets/mesh/high-res-monkey-deformed.glb\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nfunction makeDataset(glb: TgdDataGlb) {\n    const dataset = new TgdDataset({\n        POSITION: \"vec4\",\n    })\n    glb.setAttrib(dataset, \"POSITION\")\n    const { set } = dataset.getAttribAccessor(\"POSITION\")\n    const count = dataset.count\n    const radius = 0.01\n    for (let i = 0; i < count; i++) {\n        set(radius, i, 3)\n    }\n    return dataset\n}\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.distance = 5\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 5,\n        minZoom: 0.5,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        params: {\n            minFilter: \"LINEAR\",\n            magFilter: \"LINEAR\",\n            wrapS: \"CLAMP_TO_EDGE\",\n            wrapT: \"CLAMP_TO_EDGE\",\n        },\n    }).loadBitmap(tgdCanvasCreatePalette([\"#f74\", \"#ff0\", \"#59f\"]))\n    const dataset1 = makeDataset(assets.glb.monkey1)\n    const dataset2 = makeDataset(assets.glb.monkey2)\n    const cloud = new TgdPainterPointsCloudMorphing(context, {\n        mix: 1,\n        data: [\n            [\n                {\n                    point: new Float32Array(dataset1.data),\n                    uv: makeUV(dataset1.count, 1),\n                },\n                {\n                    point: new Float32Array(dataset2.data),\n                    uv: makeUV(dataset2.count, 0),\n                },\n            ],\n        ],\n        texture,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [cloud],\n    })\n    context.add(clear, state)\n    context.paint()\n    return (settings: Record<string, number>) => {\n        cloud.mix = settings.mix\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            assets={{\n                glb: { monkey1: Monkey1URL, monkey2: Monkey2URL },\n            }}\n            settings={{\n                mix: {\n                    label: \"mix\",\n                    value: 0,\n                },\n            }}\n        />\n    )\n}\n\nfunction makeUV(count: number, value: number) {\n    const data = new Float32Array(count * 2)\n    for (let i = 0; i < data.length; i++) {\n        data[i] = value\n    }\n    return data\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud-morphing.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud-morphing.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud-morphing.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud-morphing.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud-morphing.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud-morphing.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
2260(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud-morphing.demo/points-cloud.demo.tsx",
        lineNumber: 86,
        columnNumber: 9
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
69377(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _points_cloud_demo__rspack_import_4 = __webpack_require__(59969);
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
    "Detail #1": '    context.camera.fitSpaceAtTarget(5, 5);\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 5,\n        minZoom: 0.5,\n        speedZoom: 1,\n    });\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    });\n    const dataset = new TgdDataset({\n        POSITION: "vec4",\n    });\n    const coords: number[] = [];\n    const values = [-1, +1];\n    for (let x of values) {\n        for (let y of values) {\n            for (let z of values) {\n                coords.push(x, y, z, 1);\n            }\n        }\n    }\n    dataset.set("POSITION", new Float32Array(coords));\n    const texture = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette(["#f74"]),\n    );\n    const cloud = new TgdPainterPointsCloud(context, {\n        dataPoint: new Float32Array(dataset.data),\n        texture,\n    });\n    const cube = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n        material: new TgdMaterialFaceOrientation(),\n    });\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [cube, cloud],\n    });\n    context.add(clear, state);\n    context.paint();'
};
var FULL = 'import {\n    tgdCanvasCreatePalette,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdDataset,\n    TgdGeometryBox,\n    TgdMaterialFaceOrientation,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterPointsCloud,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from "@tolokoban/tgd";\nimport View, { Assets } from "@/components/demo/Tgd";\n\nimport MonkeyURL from "@/assets/mesh/high-res-monkey.glb";\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.fitSpaceAtTarget(5, 5);\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 5,\n        minZoom: 0.5,\n        speedZoom: 1,\n    });\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    });\n    const dataset = new TgdDataset({\n        POSITION: "vec4",\n    });\n    const coords: number[] = [];\n    const values = [-1, +1];\n    for (let x of values) {\n        for (let y of values) {\n            for (let z of values) {\n                coords.push(x, y, z, 1);\n            }\n        }\n    }\n    dataset.set("POSITION", new Float32Array(coords));\n    const texture = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette(["#f74"]),\n    );\n    const cloud = new TgdPainterPointsCloud(context, {\n        dataPoint: new Float32Array(dataset.data),\n        texture,\n    });\n    const cube = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n        material: new TgdMaterialFaceOrientation(),\n    });\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [cube, cloud],\n    });\n    context.add(clear, state);\n    context.paint();\n    return (settings: Record<string, number>) => {\n        cloud.shadowIntensity = settings.shadowIntensity;\n        cloud.shadowThickness = settings.shadowThickness;\n        cloud.specularExponent = settings.specularExponent;\n        cloud.specularIntensity = settings.specularIntensity;\n        cloud.light = settings.light;\n        context.paint();\n    };\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            settings={{\n                shadowIntensity: {\n                    label: "shadowIntensity",\n                    value: 0.5,\n                },\n                shadowThickness: {\n                    label: "shadowThickness",\n                    value: 1,\n                    min: 0,\n                    max: 2,\n                },\n                specularExponent: {\n                    label: "specularExponent",\n                    value: 10,\n                    min: -20,\n                    max: 20,\n                },\n                specularIntensity: {\n                    label: "specularIntensity",\n                    value: 0.33,\n                },\n                light: {\n                    label: "light",\n                    value: 1,\n                },\n            }}\n        />\n    );\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 13
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}


},
59969(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);



function init(context, assets) {
    // #begin
    context.camera.fitSpaceAtTarget(5, 5);
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
    var dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        POSITION: "vec4"
    });
    var coords = [];
    var values = [
        -1,
        +1
    ];
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
                            coords.push(x, y, z, 1);
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
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)([
        "#f74"
    ]));
    var cloud = new _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloud(context, {
        dataPoint: new Float32Array(dataset.data),
        texture: texture
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
            shadowIntensity: {
                label: "shadowIntensity",
                value: 0.5
            },
            shadowThickness: {
                label: "shadowThickness",
                value: 1,
                min: 0,
                max: 2
            },
            specularExponent: {
                label: "specularExponent",
                value: 10,
                min: -20,
                max: 20
            },
            specularIntensity: {
                label: "specularIntensity",
                value: 0.33
            },
            light: {
                label: "light",
                value: 1
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/_/points-cloud.demo/points-cloud.demo.tsx",
        lineNumber: 73,
        columnNumber: 9
    }, this);
}


},
41028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _points_cloud_demo__rspack_import_1 = __webpack_require__(69377);
/* import */ var _points_cloud_morphing_demo__rspack_import_2 = __webpack_require__(30436);
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterPointsCloud.html",
                    children: "TgdPainterPointsCloud"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                    lineNumber: 6,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterPointsCloudMorphing.html",
                    children: "TgdPainterPointsCloudMorphing"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                    lineNumber: 10,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "It is also possible to use morphing between two positions."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_morphing_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wb2ludHMtY2xvdWRfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdS1mNzI4ODAuZjk4Nzg3M2IyZmZkMTIxNC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC9fL3BvaW50cy1jbG91ZC1tb3JwaGluZy5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvXy9wb2ludHMtY2xvdWQtbW9ycGhpbmcuZGVtby9wb2ludHMtY2xvdWQuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL18vcG9pbnRzLWNsb3VkLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC9fL3BvaW50cy1jbG91ZC5kZW1vL3BvaW50cy1jbG91ZC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3BvaW50cy1jbG91ZC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNVxcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgIG1heFpvb206IDUsXFxuICAgICAgICBtaW5ab29tOiAwLjUsXFxuICAgICAgICBzcGVlZFpvb206IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICB3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgICAgIHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjZjc0XFxcIiwgXFxcIiNmZjBcXFwiLCBcXFwiIzU5ZlxcXCJdKSlcXG4gICAgY29uc3QgZGF0YXNldDEgPSBtYWtlRGF0YXNldChhc3NldHMuZ2xiLm1vbmtleTEpXFxuICAgIGNvbnN0IGRhdGFzZXQyID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkyKVxcbiAgICBjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWRNb3JwaGluZyhjb250ZXh0LCB7XFxuICAgICAgICBtaXg6IDEsXFxuICAgICAgICBkYXRhOiBbXFxuICAgICAgICAgICAgW1xcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBwb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0MS5kYXRhKSxcXG4gICAgICAgICAgICAgICAgICAgIHV2OiBtYWtlVVYoZGF0YXNldDEuY291bnQsIDEpLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBwb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0Mi5kYXRhKSxcXG4gICAgICAgICAgICAgICAgICAgIHV2OiBtYWtlVVYoZGF0YXNldDIuY291bnQsIDApLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICBdLFxcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICBjaGlsZHJlbjogW2Nsb3VkXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcbiAgICBjb250ZXh0LnBhaW50KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICB0eXBlIFRnZERhdGFHbGIsXFxuICAgIFRnZERhdGFzZXQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlclBvaW50c0Nsb3VkLFxcbiAgICBUZ2RQYWludGVyUG9pbnRzQ2xvdWRNb3JwaGluZyxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgTW9ua2V5MVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL2hpZ2gtcmVzLW1vbmtleS5nbGJcXFwiXFxuaW1wb3J0IE1vbmtleTJVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXktZGVmb3JtZWQuZ2xiXFxcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGdsYjogVGdkRGF0YUdsYikge1xcbiAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcbiAgICAgICAgUE9TSVRJT046IFxcXCJ2ZWM0XFxcIixcXG4gICAgfSlcXG4gICAgZ2xiLnNldEF0dHJpYihkYXRhc2V0LCBcXFwiUE9TSVRJT05cXFwiKVxcbiAgICBjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcXFwiUE9TSVRJT05cXFwiKVxcbiAgICBjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnRcXG4gICAgY29uc3QgcmFkaXVzID0gMC4wMVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG4gICAgICAgIHNldChyYWRpdXMsIGksIDMpXFxuICAgIH1cXG4gICAgcmV0dXJuIGRhdGFzZXRcXG59XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNVxcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgIG1heFpvb206IDUsXFxuICAgICAgICBtaW5ab29tOiAwLjUsXFxuICAgICAgICBzcGVlZFpvb206IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICB3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgICAgIHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjZjc0XFxcIiwgXFxcIiNmZjBcXFwiLCBcXFwiIzU5ZlxcXCJdKSlcXG4gICAgY29uc3QgZGF0YXNldDEgPSBtYWtlRGF0YXNldChhc3NldHMuZ2xiLm1vbmtleTEpXFxuICAgIGNvbnN0IGRhdGFzZXQyID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkyKVxcbiAgICBjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWRNb3JwaGluZyhjb250ZXh0LCB7XFxuICAgICAgICBtaXg6IDEsXFxuICAgICAgICBkYXRhOiBbXFxuICAgICAgICAgICAgW1xcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBwb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0MS5kYXRhKSxcXG4gICAgICAgICAgICAgICAgICAgIHV2OiBtYWtlVVYoZGF0YXNldDEuY291bnQsIDEpLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBwb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0Mi5kYXRhKSxcXG4gICAgICAgICAgICAgICAgICAgIHV2OiBtYWtlVVYoZGF0YXNldDIuY291bnQsIDApLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICBdLFxcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICBjaGlsZHJlbjogW2Nsb3VkXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgcmV0dXJuIChzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xcbiAgICAgICAgY2xvdWQubWl4ID0gc2V0dGluZ3MubWl4XFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgb3B0aW9ucz17e1xcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7IG1vbmtleTE6IE1vbmtleTFVUkwsIG1vbmtleTI6IE1vbmtleTJVUkwgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIHNldHRpbmdzPXt7XFxuICAgICAgICAgICAgICAgIG1peDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJtaXhcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXFxuZnVuY3Rpb24gbWFrZVVWKGNvdW50OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoY291bnQgKiAyKVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIGRhdGFbaV0gPSB2YWx1ZVxcbiAgICB9XFxuICAgIHJldHVybiBkYXRhXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICB0eXBlIFRnZERhdGFHbGIsXG4gICAgVGdkRGF0YXNldCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlclBvaW50c0Nsb3VkLFxuICAgIFRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBNb25rZXkxVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL2hpZ2gtcmVzLW1vbmtleS5nbGJcIlxuaW1wb3J0IE1vbmtleTJVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvaGlnaC1yZXMtbW9ua2V5LWRlZm9ybWVkLmdsYlwiXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5mdW5jdGlvbiBtYWtlRGF0YXNldChnbGI6IFRnZERhdGFHbGIpIHtcbiAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuICAgICAgICBQT1NJVElPTjogXCJ2ZWM0XCIsXG4gICAgfSlcbiAgICBnbGIuc2V0QXR0cmliKGRhdGFzZXQsIFwiUE9TSVRJT05cIilcbiAgICBjb25zdCB7IHNldCB9ID0gZGF0YXNldC5nZXRBdHRyaWJBY2Nlc3NvcihcIlBPU0lUSU9OXCIpXG4gICAgY29uc3QgY291bnQgPSBkYXRhc2V0LmNvdW50XG4gICAgY29uc3QgcmFkaXVzID0gMC4wMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBzZXQocmFkaXVzLCBpLCAzKVxuICAgIH1cbiAgICByZXR1cm4gZGF0YXNldFxufVxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDVcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICBtYXhab29tOiA1LFxuICAgICAgICBtaW5ab29tOiAwLjUsXG4gICAgICAgIHNwZWVkWm9vbTogMSxcbiAgICB9KVxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJMSU5FQVJcIixcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcbiAgICAgICAgICAgIHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcbiAgICAgICAgICAgIHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcbiAgICAgICAgfSxcbiAgICB9KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiI2Y3NFwiLCBcIiNmZjBcIiwgXCIjNTlmXCJdKSlcbiAgICBjb25zdCBkYXRhc2V0MSA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5MSlcbiAgICBjb25zdCBkYXRhc2V0MiA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5MilcbiAgICBjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWRNb3JwaGluZyhjb250ZXh0LCB7XG4gICAgICAgIG1peDogMSxcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldDEuZGF0YSksXG4gICAgICAgICAgICAgICAgICAgIHV2OiBtYWtlVVYoZGF0YXNldDEuY291bnQsIDEpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0Mi5kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgdXY6IG1ha2VVVihkYXRhc2V0Mi5jb3VudCwgMCksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIF0sXG4gICAgICAgIHRleHR1cmUsXG4gICAgfSlcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICBjaGlsZHJlbjogW2Nsb3VkXSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICAvLyAjZW5kXG4gICAgcmV0dXJuIChzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xuICAgICAgICBjbG91ZC5taXggPSBzZXR0aW5ncy5taXhcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgZ2l6bW9cbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgZ2xiOiB7IG1vbmtleTE6IE1vbmtleTFVUkwsIG1vbmtleTI6IE1vbmtleTJVUkwgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZXR0aW5ncz17e1xuICAgICAgICAgICAgICAgIG1peDoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJtaXhcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBtYWtlVVYoY291bnQ6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGNvdW50ICogMilcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YVtpXSA9IHZhbHVlXG4gICAgfVxuICAgIHJldHVybiBkYXRhXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vcG9pbnRzLWNsb3VkLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcbiAgICBcIkRldGFpbCAjMVwiOlxuICAgICAgICAnICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNSwgNSk7XFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgbWF4Wm9vbTogNSxcXG4gICAgICAgIG1pblpvb206IDAuNSxcXG4gICAgICAgIHNwZWVkWm9vbTogMSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pO1xcbiAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcbiAgICAgICAgUE9TSVRJT046IFwidmVjNFwiLFxcbiAgICB9KTtcXG4gICAgY29uc3QgY29vcmRzOiBudW1iZXJbXSA9IFtdO1xcbiAgICBjb25zdCB2YWx1ZXMgPSBbLTEsICsxXTtcXG4gICAgZm9yIChsZXQgeCBvZiB2YWx1ZXMpIHtcXG4gICAgICAgIGZvciAobGV0IHkgb2YgdmFsdWVzKSB7XFxuICAgICAgICAgICAgZm9yIChsZXQgeiBvZiB2YWx1ZXMpIHtcXG4gICAgICAgICAgICAgICAgY29vcmRzLnB1c2goeCwgeSwgeiwgMSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGRhdGFzZXQuc2V0KFwiUE9TSVRJT05cIiwgbmV3IEZsb2F0MzJBcnJheShjb29yZHMpKTtcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChcXG4gICAgICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiI2Y3NFwiXSksXFxuICAgICk7XFxuICAgIGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XFxuICAgICAgICBkYXRhUG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKSxcXG4gICAgICAgIHRleHR1cmUsXFxuICAgIH0pO1xcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goeyBzaXplWDogMiwgc2l6ZVk6IDIsIHNpemVaOiAyIH0pLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxcbiAgICB9KTtcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICBjaGlsZHJlbjogW2N1YmUsIGNsb3VkXSxcXG4gICAgfSk7XFxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XFxuICAgIGNvbnRleHQucGFpbnQoKTsnLFxufVxuY29uc3QgRlVMTCA9XG4gICAgJ2ltcG9ydCB7XFxuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gICAgVGdkRGF0YXNldCxcXG4gICAgVGdkR2VvbWV0cnlCb3gsXFxuICAgIFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xcblxcbmltcG9ydCBNb25rZXlVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvaGlnaC1yZXMtbW9ua2V5LmdsYlwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg1LCA1KTtcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICBtYXhab29tOiA1LFxcbiAgICAgICAgbWluWm9vbTogMC41LFxcbiAgICAgICAgc3BlZWRab29tOiAxLFxcbiAgICB9KTtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuICAgICAgICBQT1NJVElPTjogXCJ2ZWM0XCIsXFxuICAgIH0pO1xcbiAgICBjb25zdCBjb29yZHM6IG51bWJlcltdID0gW107XFxuICAgIGNvbnN0IHZhbHVlcyA9IFstMSwgKzFdO1xcbiAgICBmb3IgKGxldCB4IG9mIHZhbHVlcykge1xcbiAgICAgICAgZm9yIChsZXQgeSBvZiB2YWx1ZXMpIHtcXG4gICAgICAgICAgICBmb3IgKGxldCB6IG9mIHZhbHVlcykge1xcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaCh4LCB5LCB6LCAxKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgZGF0YXNldC5zZXQoXCJQT1NJVElPTlwiLCBuZXcgRmxvYXQzMkFycmF5KGNvb3JkcykpO1xcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKFxcbiAgICAgICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjZjc0XCJdKSxcXG4gICAgKTtcXG4gICAgY29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcXG4gICAgICAgIGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7IHNpemVYOiAyLCBzaXplWTogMiwgc2l6ZVo6IDIgfSksXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXFxuICAgIH0pO1xcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgIGNoaWxkcmVuOiBbY3ViZSwgY2xvdWRdLFxcbiAgICB9KTtcXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKTtcXG4gICAgY29udGV4dC5wYWludCgpO1xcbiAgICByZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XFxuICAgICAgICBjbG91ZC5zaGFkb3dJbnRlbnNpdHkgPSBzZXR0aW5ncy5zaGFkb3dJbnRlbnNpdHk7XFxuICAgICAgICBjbG91ZC5zaGFkb3dUaGlja25lc3MgPSBzZXR0aW5ncy5zaGFkb3dUaGlja25lc3M7XFxuICAgICAgICBjbG91ZC5zcGVjdWxhckV4cG9uZW50ID0gc2V0dGluZ3Muc3BlY3VsYXJFeHBvbmVudDtcXG4gICAgICAgIGNsb3VkLnNwZWN1bGFySW50ZW5zaXR5ID0gc2V0dGluZ3Muc3BlY3VsYXJJbnRlbnNpdHk7XFxuICAgICAgICBjbG91ZC5saWdodCA9IHNldHRpbmdzLmxpZ2h0O1xcbiAgICAgICAgY29udGV4dC5wYWludCgpO1xcbiAgICB9O1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgb3B0aW9ucz17e1xcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBzZXR0aW5ncz17e1xcbiAgICAgICAgICAgICAgICBzaGFkb3dJbnRlbnNpdHk6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNoYWRvd0ludGVuc2l0eVwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAuNSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc2hhZG93VGhpY2tuZXNzOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaGFkb3dUaGlja25lc3NcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAyLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBzcGVjdWxhckV4cG9uZW50OiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzcGVjdWxhckV4cG9uZW50XCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTAsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IC0yMCxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogMjAsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHNwZWN1bGFySW50ZW5zaXR5OiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzcGVjdWxhckludGVuc2l0eVwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAuMzMsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGxpZ2h0OiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJsaWdodFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgICk7XFxufVxcbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8RGVtbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IHtcbiAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIFRnZERhdGFzZXQsXG4gICAgVGdkR2VvbWV0cnlCb3gsXG4gICAgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJQb2ludHNDbG91ZCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IE1vbmtleVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNSwgNSlcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICBtYXhab29tOiA1LFxuICAgICAgICBtaW5ab29tOiAwLjUsXG4gICAgICAgIHNwZWVkWm9vbTogMSxcbiAgICB9KVxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgUE9TSVRJT046IFwidmVjNFwiLFxuICAgIH0pXG4gICAgY29uc3QgY29vcmRzOiBudW1iZXJbXSA9IFtdXG4gICAgY29uc3QgdmFsdWVzID0gWy0xLCArMV1cbiAgICBmb3IgKGxldCB4IG9mIHZhbHVlcykge1xuICAgICAgICBmb3IgKGxldCB5IG9mIHZhbHVlcykge1xuICAgICAgICAgICAgZm9yIChsZXQgeiBvZiB2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaCh4LCB5LCB6LCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRhdGFzZXQuc2V0KFwiUE9TSVRJT05cIiwgbmV3IEZsb2F0MzJBcnJheShjb29yZHMpKVxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjZjc0XCJdKSlcbiAgICBjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xuICAgICAgICBkYXRhUG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKSxcbiAgICAgICAgdGV4dHVyZSxcbiAgICB9KVxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHsgc2l6ZVg6IDIsIHNpemVZOiAyLCBzaXplWjogMiB9KSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxuICAgIH0pXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgY2hpbGRyZW46IFtjdWJlLCBjbG91ZF0sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgLy8gI2VuZFxuICAgIHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcbiAgICAgICAgY2xvdWQuc2hhZG93SW50ZW5zaXR5ID0gc2V0dGluZ3Muc2hhZG93SW50ZW5zaXR5XG4gICAgICAgIGNsb3VkLnNoYWRvd1RoaWNrbmVzcyA9IHNldHRpbmdzLnNoYWRvd1RoaWNrbmVzc1xuICAgICAgICBjbG91ZC5zcGVjdWxhckV4cG9uZW50ID0gc2V0dGluZ3Muc3BlY3VsYXJFeHBvbmVudFxuICAgICAgICBjbG91ZC5zcGVjdWxhckludGVuc2l0eSA9IHNldHRpbmdzLnNwZWN1bGFySW50ZW5zaXR5XG4gICAgICAgIGNsb3VkLmxpZ2h0ID0gc2V0dGluZ3MubGlnaHRcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgZ2l6bW9cbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcbiAgICAgICAgICAgICAgICBzaGFkb3dJbnRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2hhZG93SW50ZW5zaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwLjUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaGFkb3dUaGlja25lc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2hhZG93VGhpY2tuZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogMixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNwZWN1bGFyRXhwb25lbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic3BlY3VsYXJFeHBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTAsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTIwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3BlY3VsYXJJbnRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic3BlY3VsYXJJbnRlbnNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAuMzMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsaWdodDoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJsaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENhbnZhc0NyZWF0ZVBhbGV0dGUiLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2REYXRhc2V0IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlclBvaW50c0Nsb3VkTW9ycGhpbmciLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJ3ZWJnbFByZXNldERlcHRoIiwiTW9ua2V5MVVSTCIsIk1vbmtleTJVUkwiLCJWaWV3IiwibWFrZURhdGFzZXQiLCJnbGIiLCJkYXRhc2V0Iiwic2V0IiwiY291bnQiLCJyYWRpdXMiLCJpIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjbGVhciIsInRleHR1cmUiLCJkYXRhc2V0MSIsImRhdGFzZXQyIiwiY2xvdWQiLCJGbG9hdDMyQXJyYXkiLCJtYWtlVVYiLCJzdGF0ZSIsInNldHRpbmdzIiwidmFsdWUiLCJkYXRhIiwiVGdkR2VvbWV0cnlCb3giLCJUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbiIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclBvaW50c0Nsb3VkIiwiY29vcmRzIiwidmFsdWVzIiwiX2l0ZXJhdG9yRXJyb3IiLCJ4IiwiX2l0ZXJhdG9yRXJyb3IxIiwieSIsIl9pdGVyYXRvckVycm9yMiIsInoiLCJjdWJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDZjtBQUV0QyxJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUFvMUM7QUFDLzJDLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFB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