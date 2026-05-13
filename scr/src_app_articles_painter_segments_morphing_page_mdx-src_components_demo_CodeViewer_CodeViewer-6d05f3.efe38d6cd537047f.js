"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_segments_morphing_page_mdx-src_components_demo_CodeViewer_CodeViewer-6d05f3"], {
90380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _segments_demo__rspack_import_4 = __webpack_require__(97301);
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
    "Detail #1": "    context.camera.transfo.distance = 75\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 10,\n        minZoom: 0.01,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const radius = 10\n    const width = 50\n    const data1 = new TgdPainterSegmentsData()\n    const nodes1: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.5\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width)\n        const x = r * Math.cos(ang)\n        const y = step * 0.2\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / width)\n        nodes1.push([x, y, z, thickness])\n    }\n    nodes1.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes1.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0]\n        data1.add(nodes1[i - 1], nodes1[i], uv0, uv1)\n    }\n    const data2 = new TgdPainterSegmentsData()\n    const nodes2: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.25\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width) * 0.5\n        const x = r * Math.cos(ang)\n        const y = step * 0.3\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / (width - 1))\n        nodes2.push([x, y, z, thickness])\n    }\n    nodes2.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes2.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes2.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes2.length + 1), 0]\n        data2.add(nodes2[i - 1], nodes2[i], uv0, uv1)\n    }\n    const palette = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette([\"#f44\", \"#ff4\", \"#4f4\", \"#4ff\", \"#44f\"]),\n    )\n    const segments = new TgdPainterSegmentsMorphing(context, {\n        datasetsPairs: [[data1.makeDataset, data2.makeDataset]],\n        roundness: 64,\n        minRadius: 2,\n        radiusMultiplier: 1,\n        material: new TgdMaterialDiffuse({\n            color: palette,\n            lockLightsToCamera: true,\n        }),\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [segments],\n    })\n    context.add(\n        clear,\n        state,\n        new TgdPainterLogic((time, delta) => {\n            segments.mix = Math.abs(Math.sin(time))\n            segments.transfo.orbitAroundX(delta * 0.315481)\n            segments.transfo.orbitAroundZ(delta * 0.2)\n        }),\n    )\n    context.play()\n    return ({ radiusMultiplier }: { radiusMultiplier: number }) => {\n        segments.radiusMultiplier = radiusMultiplier\n        context.paint()\n    }"
};
var FULL = "import {\n    type ArrayNumber2,\n    type ArrayNumber4,\n    tgdCanvasCreatePalette,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterSegmentsData,\n    TgdPainterSegmentsMorphing,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    context.camera.transfo.distance = 75\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 10,\n        minZoom: 0.01,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const radius = 10\n    const width = 50\n    const data1 = new TgdPainterSegmentsData()\n    const nodes1: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.5\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width)\n        const x = r * Math.cos(ang)\n        const y = step * 0.2\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / width)\n        nodes1.push([x, y, z, thickness])\n    }\n    nodes1.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes1.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0]\n        data1.add(nodes1[i - 1], nodes1[i], uv0, uv1)\n    }\n    const data2 = new TgdPainterSegmentsData()\n    const nodes2: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.25\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width) * 0.5\n        const x = r * Math.cos(ang)\n        const y = step * 0.3\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / (width - 1))\n        nodes2.push([x, y, z, thickness])\n    }\n    nodes2.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes2.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes2.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes2.length + 1), 0]\n        data2.add(nodes2[i - 1], nodes2[i], uv0, uv1)\n    }\n    const palette = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette([\"#f44\", \"#ff4\", \"#4f4\", \"#4ff\", \"#44f\"]),\n    )\n    const segments = new TgdPainterSegmentsMorphing(context, {\n        datasetsPairs: [[data1.makeDataset, data2.makeDataset]],\n        roundness: 64,\n        minRadius: 2,\n        radiusMultiplier: 1,\n        material: new TgdMaterialDiffuse({\n            color: palette,\n            lockLightsToCamera: true,\n        }),\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [segments],\n    })\n    context.add(\n        clear,\n        state,\n        new TgdPainterLogic((time, delta) => {\n            segments.mix = Math.abs(Math.sin(time))\n            segments.transfo.orbitAroundX(delta * 0.315481)\n            segments.transfo.orbitAroundZ(delta * 0.2)\n        }),\n    )\n    context.play()\n    return ({ radiusMultiplier }: { radiusMultiplier: number }) => {\n        segments.radiusMultiplier = radiusMultiplier\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            settings={{\n                radiusMultiplier: {\n                    label: \"radiusMultiplier\",\n                    value: 1,\n                    min: 0.1,\n                    max: 3,\n                    step: 0.1,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_segments_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
97301(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);



function init(context) {
    // #begin
    context.camera.transfo.distance = 75;
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        maxZoom: 10,
        minZoom: 0.01,
        speedZoom: 1
    });
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.3,
            0.3,
            0.3,
            1
        ],
        depth: 1
    });
    var radius = 10;
    var width = 50;
    var data1 = new _tolokoban_tgd__rspack_import_1.TgdPainterSegmentsData();
    var nodes1 = [
        [
            0,
            -1000,
            0,
            0
        ]
    ];
    for(var step = -width; step < width; step++){
        var ang = step * 0.5;
        var r = radius * Math.cos(step * Math.PI * 0.5 / width);
        var x = r * Math.cos(ang);
        var y = step * 0.2;
        var z = r * Math.sin(ang);
        var thickness = Math.max(0, 1.0 - Math.abs(step) / width);
        nodes1.push([
            x,
            y,
            z,
            thickness
        ]);
    }
    nodes1.push([
        0,
        1000,
        0,
        0
    ]);
    for(var i = 1; i < nodes1.length; i++){
        var uv0 = [
            (i - 0.5) / (nodes1.length + 1),
            0
        ];
        var uv1 = [
            (i + 0.5) / (nodes1.length + 1),
            0
        ];
        data1.add(nodes1[i - 1], nodes1[i], uv0, uv1);
    }
    var data2 = new _tolokoban_tgd__rspack_import_1.TgdPainterSegmentsData();
    var nodes2 = [
        [
            0,
            -1000,
            0,
            0
        ]
    ];
    for(var step1 = -width; step1 < width; step1++){
        var ang1 = step1 * 0.25;
        var r1 = radius * Math.cos(step1 * Math.PI * 0.5 / width) * 0.5;
        var x1 = r1 * Math.cos(ang1);
        var y1 = step1 * 0.3;
        var z1 = r1 * Math.sin(ang1);
        var thickness1 = Math.max(0, 1.0 - Math.abs(step1) / (width - 1));
        nodes2.push([
            x1,
            y1,
            z1,
            thickness1
        ]);
    }
    nodes2.push([
        0,
        1000,
        0,
        0
    ]);
    for(var i1 = 1; i1 < nodes2.length; i1++){
        var uv01 = [
            (i1 - 0.5) / (nodes2.length + 1),
            0
        ];
        var uv11 = [
            (i1 + 0.5) / (nodes2.length + 1),
            0
        ];
        data2.add(nodes2[i1 - 1], nodes2[i1], uv01, uv11);
    }
    var palette = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)([
        "#f44",
        "#ff4",
        "#4f4",
        "#4ff",
        "#44f"
    ]));
    var segments = new _tolokoban_tgd__rspack_import_1.TgdPainterSegmentsMorphing(context, {
        datasetsPairs: [
            [
                data1.makeDataset,
                data2.makeDataset
            ]
        ],
        roundness: 64,
        minRadius: 2,
        radiusMultiplier: 1,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: palette,
            lockLightsToCamera: true
        })
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            segments
        ]
    });
    context.add(clear, state, new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time, delta) {
        segments.mix = Math.abs(Math.sin(time));
        segments.transfo.orbitAroundX(delta * 0.315481);
        segments.transfo.orbitAroundZ(delta * 0.2);
    }));
    context.play();
    return function(param) {
        var radiusMultiplier = param.radiusMultiplier;
        segments.radiusMultiplier = radiusMultiplier;
        context.paint();
    };
// #end
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
                min: 0.1,
                max: 3,
                step: 0.1
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/segments.demo.tsx",
        lineNumber: 103,
        columnNumber: 9
    }, this);
}


},
53066(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _segments_demo__rspack_import_1 = __webpack_require__(90380);
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
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterSegments.html",
                    children: "TgdPainterSegments"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Morphing between two shapes"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_segments_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/painter/segments",
                        children: "Back"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                        lineNumber: 9,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zZWdtZW50c19tb3JwaGluZ19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlci02ZDA1ZjMuZWZlMzhkNmNkNTM3MDQ3Zi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzL21vcnBoaW5nL18vc2VnbWVudHMuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc2VnbWVudHMvbW9ycGhpbmcvXy9zZWdtZW50cy5kZW1vL3NlZ21lbnRzLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzL21vcnBoaW5nL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9zZWdtZW50cy5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNzVcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICBtYXhab29tOiAxMCxcXG4gICAgICAgIG1pblpvb206IDAuMDEsXFxuICAgICAgICBzcGVlZFpvb206IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHJhZGl1cyA9IDEwXFxuICAgIGNvbnN0IHdpZHRoID0gNTBcXG4gICAgY29uc3QgZGF0YTEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXFxuICAgIGNvbnN0IG5vZGVzMTogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV1cXG4gICAgZm9yIChsZXQgc3RlcCA9IC13aWR0aDsgc3RlcCA8IHdpZHRoOyBzdGVwKyspIHtcXG4gICAgICAgIGNvbnN0IGFuZyA9IHN0ZXAgKiAwLjVcXG4gICAgICAgIGNvbnN0IHIgPSByYWRpdXMgKiBNYXRoLmNvcygoc3RlcCAqIE1hdGguUEkgKiAwLjUpIC8gd2lkdGgpXFxuICAgICAgICBjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZylcXG4gICAgICAgIGNvbnN0IHkgPSBzdGVwICogMC4yXFxuICAgICAgICBjb25zdCB6ID0gciAqIE1hdGguc2luKGFuZylcXG4gICAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gd2lkdGgpXFxuICAgICAgICBub2RlczEucHVzaChbeCwgeSwgeiwgdGhpY2tuZXNzXSlcXG4gICAgfVxcbiAgICBub2RlczEucHVzaChbMCwgMTAwMCwgMCwgMF0pXFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZXMxLmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBjb25zdCB1djA6IEFycmF5TnVtYmVyMiA9IFsoaSAtIDAuNSkgLyAobm9kZXMxLmxlbmd0aCArIDEpLCAwXVxcbiAgICAgICAgY29uc3QgdXYxOiBBcnJheU51bWJlcjIgPSBbKGkgKyAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF1cXG4gICAgICAgIGRhdGExLmFkZChub2RlczFbaSAtIDFdLCBub2RlczFbaV0sIHV2MCwgdXYxKVxcbiAgICB9XFxuICAgIGNvbnN0IGRhdGEyID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKVxcbiAgICBjb25zdCBub2RlczI6IEFycmF5TnVtYmVyNFtdID0gW1swLCAtMTAwMCwgMCwgMF1dXFxuICAgIGZvciAobGV0IHN0ZXAgPSAtd2lkdGg7IHN0ZXAgPCB3aWR0aDsgc3RlcCsrKSB7XFxuICAgICAgICBjb25zdCBhbmcgPSBzdGVwICogMC4yNVxcbiAgICAgICAgY29uc3QgciA9IHJhZGl1cyAqIE1hdGguY29zKChzdGVwICogTWF0aC5QSSAqIDAuNSkgLyB3aWR0aCkgKiAwLjVcXG4gICAgICAgIGNvbnN0IHggPSByICogTWF0aC5jb3MoYW5nKVxcbiAgICAgICAgY29uc3QgeSA9IHN0ZXAgKiAwLjNcXG4gICAgICAgIGNvbnN0IHogPSByICogTWF0aC5zaW4oYW5nKVxcbiAgICAgICAgY29uc3QgdGhpY2tuZXNzID0gTWF0aC5tYXgoMCwgMS4wIC0gTWF0aC5hYnMoc3RlcCkgLyAod2lkdGggLSAxKSlcXG4gICAgICAgIG5vZGVzMi5wdXNoKFt4LCB5LCB6LCB0aGlja25lc3NdKVxcbiAgICB9XFxuICAgIG5vZGVzMi5wdXNoKFswLCAxMDAwLCAwLCAwXSlcXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBub2RlczIubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIGNvbnN0IHV2MDogQXJyYXlOdW1iZXIyID0gWyhpIC0gMC41KSAvIChub2RlczIubGVuZ3RoICsgMSksIDBdXFxuICAgICAgICBjb25zdCB1djE6IEFycmF5TnVtYmVyMiA9IFsoaSArIDAuNSkgLyAobm9kZXMyLmxlbmd0aCArIDEpLCAwXVxcbiAgICAgICAgZGF0YTIuYWRkKG5vZGVzMltpIC0gMV0sIG5vZGVzMltpXSwgdXYwLCB1djEpXFxuICAgIH1cXG4gICAgY29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChcXG4gICAgICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjZjQ0XFxcIiwgXFxcIiNmZjRcXFwiLCBcXFwiIzRmNFxcXCIsIFxcXCIjNGZmXFxcIiwgXFxcIiM0NGZcXFwiXSksXFxuICAgIClcXG4gICAgY29uc3Qgc2VnbWVudHMgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcoY29udGV4dCwge1xcbiAgICAgICAgZGF0YXNldHNQYWlyczogW1tkYXRhMS5tYWtlRGF0YXNldCwgZGF0YTIubWFrZURhdGFzZXRdXSxcXG4gICAgICAgIHJvdW5kbmVzczogNjQsXFxuICAgICAgICBtaW5SYWRpdXM6IDIsXFxuICAgICAgICByYWRpdXNNdWx0aXBsaWVyOiAxLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLFxcbiAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgIGNoaWxkcmVuOiBbc2VnbWVudHNdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgc3RhdGUsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWx0YSkgPT4ge1xcbiAgICAgICAgICAgIHNlZ21lbnRzLm1peCA9IE1hdGguYWJzKE1hdGguc2luKHRpbWUpKVxcbiAgICAgICAgICAgIHNlZ21lbnRzLnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbHRhICogMC4zMTU0ODEpXFxuICAgICAgICAgICAgc2VnbWVudHMudHJhbnNmby5vcmJpdEFyb3VuZFooZGVsdGEgKiAwLjIpXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICByZXR1cm4gKHsgcmFkaXVzTXVsdGlwbGllciB9OiB7IHJhZGl1c011bHRpcGxpZXI6IG51bWJlciB9KSA9PiB7XFxuICAgICAgICBzZWdtZW50cy5yYWRpdXNNdWx0aXBsaWVyID0gcmFkaXVzTXVsdGlwbGllclxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHR5cGUgQXJyYXlOdW1iZXIyLFxcbiAgICB0eXBlIEFycmF5TnVtYmVyNCxcXG4gICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJTZWdtZW50c0RhdGEsXFxuICAgIFRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDc1XFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgbWF4Wm9vbTogMTAsXFxuICAgICAgICBtaW5ab29tOiAwLjAxLFxcbiAgICAgICAgc3BlZWRab29tOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCByYWRpdXMgPSAxMFxcbiAgICBjb25zdCB3aWR0aCA9IDUwXFxuICAgIGNvbnN0IGRhdGExID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKVxcbiAgICBjb25zdCBub2RlczE6IEFycmF5TnVtYmVyNFtdID0gW1swLCAtMTAwMCwgMCwgMF1dXFxuICAgIGZvciAobGV0IHN0ZXAgPSAtd2lkdGg7IHN0ZXAgPCB3aWR0aDsgc3RlcCsrKSB7XFxuICAgICAgICBjb25zdCBhbmcgPSBzdGVwICogMC41XFxuICAgICAgICBjb25zdCByID0gcmFkaXVzICogTWF0aC5jb3MoKHN0ZXAgKiBNYXRoLlBJICogMC41KSAvIHdpZHRoKVxcbiAgICAgICAgY29uc3QgeCA9IHIgKiBNYXRoLmNvcyhhbmcpXFxuICAgICAgICBjb25zdCB5ID0gc3RlcCAqIDAuMlxcbiAgICAgICAgY29uc3QgeiA9IHIgKiBNYXRoLnNpbihhbmcpXFxuICAgICAgICBjb25zdCB0aGlja25lc3MgPSBNYXRoLm1heCgwLCAxLjAgLSBNYXRoLmFicyhzdGVwKSAvIHdpZHRoKVxcbiAgICAgICAgbm9kZXMxLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pXFxuICAgIH1cXG4gICAgbm9kZXMxLnB1c2goWzAsIDEwMDAsIDAsIDBdKVxcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMS5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgY29uc3QgdXYwOiBBcnJheU51bWJlcjIgPSBbKGkgLSAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF1cXG4gICAgICAgIGNvbnN0IHV2MTogQXJyYXlOdW1iZXIyID0gWyhpICsgMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdXFxuICAgICAgICBkYXRhMS5hZGQobm9kZXMxW2kgLSAxXSwgbm9kZXMxW2ldLCB1djAsIHV2MSlcXG4gICAgfVxcbiAgICBjb25zdCBkYXRhMiA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKClcXG4gICAgY29uc3Qgbm9kZXMyOiBBcnJheU51bWJlcjRbXSA9IFtbMCwgLTEwMDAsIDAsIDBdXVxcbiAgICBmb3IgKGxldCBzdGVwID0gLXdpZHRoOyBzdGVwIDwgd2lkdGg7IHN0ZXArKykge1xcbiAgICAgICAgY29uc3QgYW5nID0gc3RlcCAqIDAuMjVcXG4gICAgICAgIGNvbnN0IHIgPSByYWRpdXMgKiBNYXRoLmNvcygoc3RlcCAqIE1hdGguUEkgKiAwLjUpIC8gd2lkdGgpICogMC41XFxuICAgICAgICBjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZylcXG4gICAgICAgIGNvbnN0IHkgPSBzdGVwICogMC4zXFxuICAgICAgICBjb25zdCB6ID0gciAqIE1hdGguc2luKGFuZylcXG4gICAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gKHdpZHRoIC0gMSkpXFxuICAgICAgICBub2RlczIucHVzaChbeCwgeSwgeiwgdGhpY2tuZXNzXSlcXG4gICAgfVxcbiAgICBub2RlczIucHVzaChbMCwgMTAwMCwgMCwgMF0pXFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZXMyLmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBjb25zdCB1djA6IEFycmF5TnVtYmVyMiA9IFsoaSAtIDAuNSkgLyAobm9kZXMyLmxlbmd0aCArIDEpLCAwXVxcbiAgICAgICAgY29uc3QgdXYxOiBBcnJheU51bWJlcjIgPSBbKGkgKyAwLjUpIC8gKG5vZGVzMi5sZW5ndGggKyAxKSwgMF1cXG4gICAgICAgIGRhdGEyLmFkZChub2RlczJbaSAtIDFdLCBub2RlczJbaV0sIHV2MCwgdXYxKVxcbiAgICB9XFxuICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoXFxuICAgICAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcXFwiI2Y0NFxcXCIsIFxcXCIjZmY0XFxcIiwgXFxcIiM0ZjRcXFwiLCBcXFwiIzRmZlxcXCIsIFxcXCIjNDRmXFxcIl0pLFxcbiAgICApXFxuICAgIGNvbnN0IHNlZ21lbnRzID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nKGNvbnRleHQsIHtcXG4gICAgICAgIGRhdGFzZXRzUGFpcnM6IFtbZGF0YTEubWFrZURhdGFzZXQsIGRhdGEyLm1ha2VEYXRhc2V0XV0sXFxuICAgICAgICByb3VuZG5lc3M6IDY0LFxcbiAgICAgICAgbWluUmFkaXVzOiAyLFxcbiAgICAgICAgcmFkaXVzTXVsdGlwbGllcjogMSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICBjb2xvcjogcGFsZXR0ZSxcXG4gICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICBjaGlsZHJlbjogW3NlZ21lbnRzXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIHN0YXRlLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsdGEpID0+IHtcXG4gICAgICAgICAgICBzZWdtZW50cy5taXggPSBNYXRoLmFicyhNYXRoLnNpbih0aW1lKSlcXG4gICAgICAgICAgICBzZWdtZW50cy50cmFuc2ZvLm9yYml0QXJvdW5kWChkZWx0YSAqIDAuMzE1NDgxKVxcbiAgICAgICAgICAgIHNlZ21lbnRzLnRyYW5zZm8ub3JiaXRBcm91bmRaKGRlbHRhICogMC4yKVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG4gICAgcmV0dXJuICh7IHJhZGl1c011bHRpcGxpZXIgfTogeyByYWRpdXNNdWx0aXBsaWVyOiBudW1iZXIgfSkgPT4ge1xcbiAgICAgICAgc2VnbWVudHMucmFkaXVzTXVsdGlwbGllciA9IHJhZGl1c011bHRpcGxpZXJcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIHNldHRpbmdzPXt7XFxuICAgICAgICAgICAgICAgIHJhZGl1c011bHRpcGxpZXI6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcXFwicmFkaXVzTXVsdGlwbGllclxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMC4xLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAzLFxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogMC4xLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHR5cGUgQXJyYXlOdW1iZXIyLFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyU2VnbWVudHNEYXRhLFxuICAgIFRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNzVcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICBtYXhab29tOiAxMCxcbiAgICAgICAgbWluWm9vbTogMC4wMSxcbiAgICAgICAgc3BlZWRab29tOiAxLFxuICAgIH0pXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCByYWRpdXMgPSAxMFxuICAgIGNvbnN0IHdpZHRoID0gNTBcbiAgICBjb25zdCBkYXRhMSA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKClcbiAgICBjb25zdCBub2RlczE6IEFycmF5TnVtYmVyNFtdID0gW1swLCAtMTAwMCwgMCwgMF1dXG4gICAgZm9yIChsZXQgc3RlcCA9IC13aWR0aDsgc3RlcCA8IHdpZHRoOyBzdGVwKyspIHtcbiAgICAgICAgY29uc3QgYW5nID0gc3RlcCAqIDAuNVxuICAgICAgICBjb25zdCByID0gcmFkaXVzICogTWF0aC5jb3MoKHN0ZXAgKiBNYXRoLlBJICogMC41KSAvIHdpZHRoKVxuICAgICAgICBjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZylcbiAgICAgICAgY29uc3QgeSA9IHN0ZXAgKiAwLjJcbiAgICAgICAgY29uc3QgeiA9IHIgKiBNYXRoLnNpbihhbmcpXG4gICAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gd2lkdGgpXG4gICAgICAgIG5vZGVzMS5wdXNoKFt4LCB5LCB6LCB0aGlja25lc3NdKVxuICAgIH1cbiAgICBub2RlczEucHVzaChbMCwgMTAwMCwgMCwgMF0pXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBub2RlczEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdXYwOiBBcnJheU51bWJlcjIgPSBbKGkgLSAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF1cbiAgICAgICAgY29uc3QgdXYxOiBBcnJheU51bWJlcjIgPSBbKGkgKyAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF1cbiAgICAgICAgZGF0YTEuYWRkKG5vZGVzMVtpIC0gMV0sIG5vZGVzMVtpXSwgdXYwLCB1djEpXG4gICAgfVxuICAgIGNvbnN0IGRhdGEyID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKVxuICAgIGNvbnN0IG5vZGVzMjogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV1cbiAgICBmb3IgKGxldCBzdGVwID0gLXdpZHRoOyBzdGVwIDwgd2lkdGg7IHN0ZXArKykge1xuICAgICAgICBjb25zdCBhbmcgPSBzdGVwICogMC4yNVxuICAgICAgICBjb25zdCByID0gcmFkaXVzICogTWF0aC5jb3MoKHN0ZXAgKiBNYXRoLlBJICogMC41KSAvIHdpZHRoKSAqIDAuNVxuICAgICAgICBjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZylcbiAgICAgICAgY29uc3QgeSA9IHN0ZXAgKiAwLjNcbiAgICAgICAgY29uc3QgeiA9IHIgKiBNYXRoLnNpbihhbmcpXG4gICAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gKHdpZHRoIC0gMSkpXG4gICAgICAgIG5vZGVzMi5wdXNoKFt4LCB5LCB6LCB0aGlja25lc3NdKVxuICAgIH1cbiAgICBub2RlczIucHVzaChbMCwgMTAwMCwgMCwgMF0pXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBub2RlczIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdXYwOiBBcnJheU51bWJlcjIgPSBbKGkgLSAwLjUpIC8gKG5vZGVzMi5sZW5ndGggKyAxKSwgMF1cbiAgICAgICAgY29uc3QgdXYxOiBBcnJheU51bWJlcjIgPSBbKGkgKyAwLjUpIC8gKG5vZGVzMi5sZW5ndGggKyAxKSwgMF1cbiAgICAgICAgZGF0YTIuYWRkKG5vZGVzMltpIC0gMV0sIG5vZGVzMltpXSwgdXYwLCB1djEpXG4gICAgfVxuICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoXG4gICAgICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiI2Y0NFwiLCBcIiNmZjRcIiwgXCIjNGY0XCIsIFwiIzRmZlwiLCBcIiM0NGZcIl0pLFxuICAgIClcbiAgICBjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNNb3JwaGluZyhjb250ZXh0LCB7XG4gICAgICAgIGRhdGFzZXRzUGFpcnM6IFtbZGF0YTEubWFrZURhdGFzZXQsIGRhdGEyLm1ha2VEYXRhc2V0XV0sXG4gICAgICAgIHJvdW5kbmVzczogNjQsXG4gICAgICAgIG1pblJhZGl1czogMixcbiAgICAgICAgcmFkaXVzTXVsdGlwbGllcjogMSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUsXG4gICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgY2hpbGRyZW46IFtzZWdtZW50c10sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWx0YSkgPT4ge1xuICAgICAgICAgICAgc2VnbWVudHMubWl4ID0gTWF0aC5hYnMoTWF0aC5zaW4odGltZSkpXG4gICAgICAgICAgICBzZWdtZW50cy50cmFuc2ZvLm9yYml0QXJvdW5kWChkZWx0YSAqIDAuMzE1NDgxKVxuICAgICAgICAgICAgc2VnbWVudHMudHJhbnNmby5vcmJpdEFyb3VuZFooZGVsdGEgKiAwLjIpXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIHJldHVybiAoeyByYWRpdXNNdWx0aXBsaWVyIH06IHsgcmFkaXVzTXVsdGlwbGllcjogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgc2VnbWVudHMucmFkaXVzTXVsdGlwbGllciA9IHJhZGl1c011bHRpcGxpZXJcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNldHRpbmdzPXt7XG4gICAgICAgICAgICAgICAgcmFkaXVzTXVsdGlwbGllcjoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJyYWRpdXNNdWx0aXBsaWVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAzLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiAwLjEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDYW52YXNDcmVhdGVQYWxldHRlIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlclNlZ21lbnRzRGF0YSIsIlRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJpbml0IiwiY29udGV4dCIsImNsZWFyIiwicmFkaXVzIiwid2lkdGgiLCJkYXRhMSIsIm5vZGVzMSIsInN0ZXAiLCJhbmciLCJyIiwiTWF0aCIsIngiLCJ5IiwieiIsInRoaWNrbmVzcyIsImkiLCJ1djAiLCJ1djEiLCJkYXRhMiIsIm5vZGVzMiIsInN0ZXAxIiwiYW5nMSIsInIxIiwieDEiLCJ5MSIsInoxIiwidGhpY2tuZXNzMSIsImkxIiwidXYwMSIsInV2MTEiLCJwYWxldHRlIiwic2VnbWVudHMiLCJzdGF0ZSIsInRpbWUiLCJkZWx0YSIsInJhZGl1c011bHRpcGxpZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDbkI7QUFFbEMsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBcTZGO0FBQ2g4RixJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSiwwQ0FBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ2xEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR3RDLGtEQUFDTix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPTSxPQUFPSCxPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFHNUQ7Ozs7Ozs7Ozs7Ozs7QUNWdUI7QUFDaUI7QUFFeEMsU0FBU2tCLEtBQUtDLE9BQW1CO0lBQzdCLFNBQVM7SUFDVEEsUUFBUSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRztJQUNsQyxJQUFJWCx3REFBd0JBLENBQUNXLFNBQVM7UUFDbEMsY0FBYztRQUNkLFNBQVM7UUFDVCxT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