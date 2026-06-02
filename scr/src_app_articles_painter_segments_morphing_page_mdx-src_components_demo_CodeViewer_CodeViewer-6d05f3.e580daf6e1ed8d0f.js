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
    "Detail #1": '    context.camera.transfo.distance = 75\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 10,\n        minZoom: 0.01,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const radius = 10\n    const width = 50\n    const data1 = new TgdPainterSegmentsData()\n    const nodes1: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.5\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width)\n        const x = r * Math.cos(ang)\n        const y = step * 0.2\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / width)\n        nodes1.push([x, y, z, thickness])\n    }\n    nodes1.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes1.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0]\n        data1.add(nodes1[i - 1], nodes1[i], uv0, uv1)\n    }\n    const data2 = new TgdPainterSegmentsData()\n    const nodes2: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.25\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width) * 0.5\n        const x = r * Math.cos(ang)\n        const y = step * 0.3\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / (width - 1))\n        nodes2.push([x, y, z, thickness])\n    }\n    nodes2.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes2.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes2.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes2.length + 1), 0]\n        data2.add(nodes2[i - 1], nodes2[i], uv0, uv1)\n    }\n    const palette = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette(["#f44", "#ff4", "#4f4", "#4ff", "#44f"]),\n    )\n    const segments = new TgdPainterSegmentsMorphing(context, {\n        datasetsPairs: [[data1.makeDataset, data2.makeDataset]],\n        roundness: 64,\n        minRadius: 2,\n        radiusMultiplier: 1,\n        material: new TgdMaterialDiffuse({\n            color: palette,\n            lockLightsToCamera: true,\n        }),\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [segments],\n    })\n    context.add(\n        clear,\n        state,\n        new TgdPainterLogic((time, delta) => {\n            segments.mix = Math.abs(Math.sin(time))\n            segments.transfo.orbitAroundX(delta * 0.315481)\n            segments.transfo.orbitAroundZ(delta * 0.2)\n        }),\n    )\n    context.play()\n    return ({ radiusMultiplier }: { radiusMultiplier: number }) => {\n        segments.radiusMultiplier = radiusMultiplier\n        context.paint()\n    }'
};
var FULL = 'import {\n    type ArrayNumber2,\n    type ArrayNumber4,\n    tgdCanvasCreatePalette,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterSegmentsData,\n    TgdPainterSegmentsMorphing,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\nimport View from "@/components/demo/Tgd"\n\nfunction init(context: TgdContext) {\n    context.camera.transfo.distance = 75\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 10,\n        minZoom: 0.01,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const radius = 10\n    const width = 50\n    const data1 = new TgdPainterSegmentsData()\n    const nodes1: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.5\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width)\n        const x = r * Math.cos(ang)\n        const y = step * 0.2\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / width)\n        nodes1.push([x, y, z, thickness])\n    }\n    nodes1.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes1.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0]\n        data1.add(nodes1[i - 1], nodes1[i], uv0, uv1)\n    }\n    const data2 = new TgdPainterSegmentsData()\n    const nodes2: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.25\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width) * 0.5\n        const x = r * Math.cos(ang)\n        const y = step * 0.3\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / (width - 1))\n        nodes2.push([x, y, z, thickness])\n    }\n    nodes2.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes2.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes2.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes2.length + 1), 0]\n        data2.add(nodes2[i - 1], nodes2[i], uv0, uv1)\n    }\n    const palette = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette(["#f44", "#ff4", "#4f4", "#4ff", "#44f"]),\n    )\n    const segments = new TgdPainterSegmentsMorphing(context, {\n        datasetsPairs: [[data1.makeDataset, data2.makeDataset]],\n        roundness: 64,\n        minRadius: 2,\n        radiusMultiplier: 1,\n        material: new TgdMaterialDiffuse({\n            color: palette,\n            lockLightsToCamera: true,\n        }),\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [segments],\n    })\n    context.add(\n        clear,\n        state,\n        new TgdPainterLogic((time, delta) => {\n            segments.mix = Math.abs(Math.sin(time))\n            segments.transfo.orbitAroundX(delta * 0.315481)\n            segments.transfo.orbitAroundZ(delta * 0.2)\n        }),\n    )\n    context.play()\n    return ({ radiusMultiplier }: { radiusMultiplier: number }) => {\n        segments.radiusMultiplier = radiusMultiplier\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            settings={{\n                radiusMultiplier: {\n                    label: "radiusMultiplier",\n                    value: 1,\n                    min: 0.1,\n                    max: 3,\n                    step: 0.1,\n                },\n            }}\n        />\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_segments_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/_/segments.demo/segments.demo.tsx",
        lineNumber: 103,
        columnNumber: 3
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Morphing between two shapes"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_segments_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                        lineNumber: 9,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zZWdtZW50c19tb3JwaGluZ19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlci02ZDA1ZjMuZTU4MGRhZjZlMWVkOGQwZi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zZWdtZW50cy9tb3JwaGluZy9fL3NlZ21lbnRzLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zZWdtZW50cy9tb3JwaGluZy9fL3NlZ21lbnRzLmRlbW8vc2VnbWVudHMuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzL21vcnBoaW5nL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vc2VnbWVudHMuZGVtb1wiO1xuXG5jb25zdCBGT0NVUyA9IHtcblx0XCJEZXRhaWwgIzFcIjpcblx0XHQnICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA3NVxcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgIG1heFpvb206IDEwLFxcbiAgICAgICAgbWluWm9vbTogMC4wMSxcXG4gICAgICAgIHNwZWVkWm9vbTogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgcmFkaXVzID0gMTBcXG4gICAgY29uc3Qgd2lkdGggPSA1MFxcbiAgICBjb25zdCBkYXRhMSA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKClcXG4gICAgY29uc3Qgbm9kZXMxOiBBcnJheU51bWJlcjRbXSA9IFtbMCwgLTEwMDAsIDAsIDBdXVxcbiAgICBmb3IgKGxldCBzdGVwID0gLXdpZHRoOyBzdGVwIDwgd2lkdGg7IHN0ZXArKykge1xcbiAgICAgICAgY29uc3QgYW5nID0gc3RlcCAqIDAuNVxcbiAgICAgICAgY29uc3QgciA9IHJhZGl1cyAqIE1hdGguY29zKChzdGVwICogTWF0aC5QSSAqIDAuNSkgLyB3aWR0aClcXG4gICAgICAgIGNvbnN0IHggPSByICogTWF0aC5jb3MoYW5nKVxcbiAgICAgICAgY29uc3QgeSA9IHN0ZXAgKiAwLjJcXG4gICAgICAgIGNvbnN0IHogPSByICogTWF0aC5zaW4oYW5nKVxcbiAgICAgICAgY29uc3QgdGhpY2tuZXNzID0gTWF0aC5tYXgoMCwgMS4wIC0gTWF0aC5hYnMoc3RlcCkgLyB3aWR0aClcXG4gICAgICAgIG5vZGVzMS5wdXNoKFt4LCB5LCB6LCB0aGlja25lc3NdKVxcbiAgICB9XFxuICAgIG5vZGVzMS5wdXNoKFswLCAxMDAwLCAwLCAwXSlcXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBub2RlczEubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIGNvbnN0IHV2MDogQXJyYXlOdW1iZXIyID0gWyhpIC0gMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdXFxuICAgICAgICBjb25zdCB1djE6IEFycmF5TnVtYmVyMiA9IFsoaSArIDAuNSkgLyAobm9kZXMxLmxlbmd0aCArIDEpLCAwXVxcbiAgICAgICAgZGF0YTEuYWRkKG5vZGVzMVtpIC0gMV0sIG5vZGVzMVtpXSwgdXYwLCB1djEpXFxuICAgIH1cXG4gICAgY29uc3QgZGF0YTIgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXFxuICAgIGNvbnN0IG5vZGVzMjogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV1cXG4gICAgZm9yIChsZXQgc3RlcCA9IC13aWR0aDsgc3RlcCA8IHdpZHRoOyBzdGVwKyspIHtcXG4gICAgICAgIGNvbnN0IGFuZyA9IHN0ZXAgKiAwLjI1XFxuICAgICAgICBjb25zdCByID0gcmFkaXVzICogTWF0aC5jb3MoKHN0ZXAgKiBNYXRoLlBJICogMC41KSAvIHdpZHRoKSAqIDAuNVxcbiAgICAgICAgY29uc3QgeCA9IHIgKiBNYXRoLmNvcyhhbmcpXFxuICAgICAgICBjb25zdCB5ID0gc3RlcCAqIDAuM1xcbiAgICAgICAgY29uc3QgeiA9IHIgKiBNYXRoLnNpbihhbmcpXFxuICAgICAgICBjb25zdCB0aGlja25lc3MgPSBNYXRoLm1heCgwLCAxLjAgLSBNYXRoLmFicyhzdGVwKSAvICh3aWR0aCAtIDEpKVxcbiAgICAgICAgbm9kZXMyLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pXFxuICAgIH1cXG4gICAgbm9kZXMyLnB1c2goWzAsIDEwMDAsIDAsIDBdKVxcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMi5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgY29uc3QgdXYwOiBBcnJheU51bWJlcjIgPSBbKGkgLSAwLjUpIC8gKG5vZGVzMi5sZW5ndGggKyAxKSwgMF1cXG4gICAgICAgIGNvbnN0IHV2MTogQXJyYXlOdW1iZXIyID0gWyhpICsgMC41KSAvIChub2RlczIubGVuZ3RoICsgMSksIDBdXFxuICAgICAgICBkYXRhMi5hZGQobm9kZXMyW2kgLSAxXSwgbm9kZXMyW2ldLCB1djAsIHV2MSlcXG4gICAgfVxcbiAgICBjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKFxcbiAgICAgICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjZjQ0XCIsIFwiI2ZmNFwiLCBcIiM0ZjRcIiwgXCIjNGZmXCIsIFwiIzQ0ZlwiXSksXFxuICAgIClcXG4gICAgY29uc3Qgc2VnbWVudHMgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcoY29udGV4dCwge1xcbiAgICAgICAgZGF0YXNldHNQYWlyczogW1tkYXRhMS5tYWtlRGF0YXNldCwgZGF0YTIubWFrZURhdGFzZXRdXSxcXG4gICAgICAgIHJvdW5kbmVzczogNjQsXFxuICAgICAgICBtaW5SYWRpdXM6IDIsXFxuICAgICAgICByYWRpdXNNdWx0aXBsaWVyOiAxLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLFxcbiAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgIGNoaWxkcmVuOiBbc2VnbWVudHNdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgc3RhdGUsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWx0YSkgPT4ge1xcbiAgICAgICAgICAgIHNlZ21lbnRzLm1peCA9IE1hdGguYWJzKE1hdGguc2luKHRpbWUpKVxcbiAgICAgICAgICAgIHNlZ21lbnRzLnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbHRhICogMC4zMTU0ODEpXFxuICAgICAgICAgICAgc2VnbWVudHMudHJhbnNmby5vcmJpdEFyb3VuZFooZGVsdGEgKiAwLjIpXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICByZXR1cm4gKHsgcmFkaXVzTXVsdGlwbGllciB9OiB7IHJhZGl1c011bHRpcGxpZXI6IG51bWJlciB9KSA9PiB7XFxuICAgICAgICBzZWdtZW50cy5yYWRpdXNNdWx0aXBsaWVyID0gcmFkaXVzTXVsdGlwbGllclxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH0nLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IHtcXG4gICAgdHlwZSBBcnJheU51bWJlcjIsXFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxcbiAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDc1XFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgbWF4Wm9vbTogMTAsXFxuICAgICAgICBtaW5ab29tOiAwLjAxLFxcbiAgICAgICAgc3BlZWRab29tOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCByYWRpdXMgPSAxMFxcbiAgICBjb25zdCB3aWR0aCA9IDUwXFxuICAgIGNvbnN0IGRhdGExID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKVxcbiAgICBjb25zdCBub2RlczE6IEFycmF5TnVtYmVyNFtdID0gW1swLCAtMTAwMCwgMCwgMF1dXFxuICAgIGZvciAobGV0IHN0ZXAgPSAtd2lkdGg7IHN0ZXAgPCB3aWR0aDsgc3RlcCsrKSB7XFxuICAgICAgICBjb25zdCBhbmcgPSBzdGVwICogMC41XFxuICAgICAgICBjb25zdCByID0gcmFkaXVzICogTWF0aC5jb3MoKHN0ZXAgKiBNYXRoLlBJICogMC41KSAvIHdpZHRoKVxcbiAgICAgICAgY29uc3QgeCA9IHIgKiBNYXRoLmNvcyhhbmcpXFxuICAgICAgICBjb25zdCB5ID0gc3RlcCAqIDAuMlxcbiAgICAgICAgY29uc3QgeiA9IHIgKiBNYXRoLnNpbihhbmcpXFxuICAgICAgICBjb25zdCB0aGlja25lc3MgPSBNYXRoLm1heCgwLCAxLjAgLSBNYXRoLmFicyhzdGVwKSAvIHdpZHRoKVxcbiAgICAgICAgbm9kZXMxLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pXFxuICAgIH1cXG4gICAgbm9kZXMxLnB1c2goWzAsIDEwMDAsIDAsIDBdKVxcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMS5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgY29uc3QgdXYwOiBBcnJheU51bWJlcjIgPSBbKGkgLSAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF1cXG4gICAgICAgIGNvbnN0IHV2MTogQXJyYXlOdW1iZXIyID0gWyhpICsgMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdXFxuICAgICAgICBkYXRhMS5hZGQobm9kZXMxW2kgLSAxXSwgbm9kZXMxW2ldLCB1djAsIHV2MSlcXG4gICAgfVxcbiAgICBjb25zdCBkYXRhMiA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKClcXG4gICAgY29uc3Qgbm9kZXMyOiBBcnJheU51bWJlcjRbXSA9IFtbMCwgLTEwMDAsIDAsIDBdXVxcbiAgICBmb3IgKGxldCBzdGVwID0gLXdpZHRoOyBzdGVwIDwgd2lkdGg7IHN0ZXArKykge1xcbiAgICAgICAgY29uc3QgYW5nID0gc3RlcCAqIDAuMjVcXG4gICAgICAgIGNvbnN0IHIgPSByYWRpdXMgKiBNYXRoLmNvcygoc3RlcCAqIE1hdGguUEkgKiAwLjUpIC8gd2lkdGgpICogMC41XFxuICAgICAgICBjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZylcXG4gICAgICAgIGNvbnN0IHkgPSBzdGVwICogMC4zXFxuICAgICAgICBjb25zdCB6ID0gciAqIE1hdGguc2luKGFuZylcXG4gICAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gKHdpZHRoIC0gMSkpXFxuICAgICAgICBub2RlczIucHVzaChbeCwgeSwgeiwgdGhpY2tuZXNzXSlcXG4gICAgfVxcbiAgICBub2RlczIucHVzaChbMCwgMTAwMCwgMCwgMF0pXFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZXMyLmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBjb25zdCB1djA6IEFycmF5TnVtYmVyMiA9IFsoaSAtIDAuNSkgLyAobm9kZXMyLmxlbmd0aCArIDEpLCAwXVxcbiAgICAgICAgY29uc3QgdXYxOiBBcnJheU51bWJlcjIgPSBbKGkgKyAwLjUpIC8gKG5vZGVzMi5sZW5ndGggKyAxKSwgMF1cXG4gICAgICAgIGRhdGEyLmFkZChub2RlczJbaSAtIDFdLCBub2RlczJbaV0sIHV2MCwgdXYxKVxcbiAgICB9XFxuICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoXFxuICAgICAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiNmNDRcIiwgXCIjZmY0XCIsIFwiIzRmNFwiLCBcIiM0ZmZcIiwgXCIjNDRmXCJdKSxcXG4gICAgKVxcbiAgICBjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNNb3JwaGluZyhjb250ZXh0LCB7XFxuICAgICAgICBkYXRhc2V0c1BhaXJzOiBbW2RhdGExLm1ha2VEYXRhc2V0LCBkYXRhMi5tYWtlRGF0YXNldF1dLFxcbiAgICAgICAgcm91bmRuZXNzOiA2NCxcXG4gICAgICAgIG1pblJhZGl1czogMixcXG4gICAgICAgIHJhZGl1c011bHRpcGxpZXI6IDEsXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUsXFxuICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY2hpbGRyZW46IFtzZWdtZW50c10sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBzdGF0ZSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XFxuICAgICAgICAgICAgc2VnbWVudHMubWl4ID0gTWF0aC5hYnMoTWF0aC5zaW4odGltZSkpXFxuICAgICAgICAgICAgc2VnbWVudHMudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsdGEgKiAwLjMxNTQ4MSlcXG4gICAgICAgICAgICBzZWdtZW50cy50cmFuc2ZvLm9yYml0QXJvdW5kWihkZWx0YSAqIDAuMilcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIHJldHVybiAoeyByYWRpdXNNdWx0aXBsaWVyIH06IHsgcmFkaXVzTXVsdGlwbGllcjogbnVtYmVyIH0pID0+IHtcXG4gICAgICAgIHNlZ21lbnRzLnJhZGl1c011bHRpcGxpZXIgPSByYWRpdXNNdWx0aXBsaWVyXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgb3B0aW9ucz17e1xcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBzZXR0aW5ncz17e1xcbiAgICAgICAgICAgICAgICByYWRpdXNNdWx0aXBsaWVyOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJyYWRpdXNNdWx0aXBsaWVyXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMC4xLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAzLFxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogMC4xLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG5cdGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cblx0XHRcdFx0PERlbW8gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuXHRcdFx0XHRcdFx0e2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiaW1wb3J0IHtcblx0dHlwZSBBcnJheU51bWJlcjIsXG5cdHR5cGUgQXJyYXlOdW1iZXI0LFxuXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcblx0VGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG5cdC8vICNiZWdpblxuXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNzU7XG5cdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRtYXhab29tOiAxMCxcblx0XHRtaW5ab29tOiAwLjAxLFxuXHRcdHNwZWVkWm9vbTogMSxcblx0fSk7XG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSk7XG5cdGNvbnN0IHJhZGl1cyA9IDEwO1xuXHRjb25zdCB3aWR0aCA9IDUwO1xuXHRjb25zdCBkYXRhMSA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKCk7XG5cdGNvbnN0IG5vZGVzMTogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV07XG5cdGZvciAobGV0IHN0ZXAgPSAtd2lkdGg7IHN0ZXAgPCB3aWR0aDsgc3RlcCsrKSB7XG5cdFx0Y29uc3QgYW5nID0gc3RlcCAqIDAuNTtcblx0XHRjb25zdCByID0gcmFkaXVzICogTWF0aC5jb3MoKHN0ZXAgKiBNYXRoLlBJICogMC41KSAvIHdpZHRoKTtcblx0XHRjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZyk7XG5cdFx0Y29uc3QgeSA9IHN0ZXAgKiAwLjI7XG5cdFx0Y29uc3QgeiA9IHIgKiBNYXRoLnNpbihhbmcpO1xuXHRcdGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gd2lkdGgpO1xuXHRcdG5vZGVzMS5wdXNoKFt4LCB5LCB6LCB0aGlja25lc3NdKTtcblx0fVxuXHRub2RlczEucHVzaChbMCwgMTAwMCwgMCwgMF0pO1xuXHRmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMS5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHV2MDogQXJyYXlOdW1iZXIyID0gWyhpIC0gMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdO1xuXHRcdGNvbnN0IHV2MTogQXJyYXlOdW1iZXIyID0gWyhpICsgMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdO1xuXHRcdGRhdGExLmFkZChub2RlczFbaSAtIDFdLCBub2RlczFbaV0sIHV2MCwgdXYxKTtcblx0fVxuXHRjb25zdCBkYXRhMiA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKCk7XG5cdGNvbnN0IG5vZGVzMjogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV07XG5cdGZvciAobGV0IHN0ZXAgPSAtd2lkdGg7IHN0ZXAgPCB3aWR0aDsgc3RlcCsrKSB7XG5cdFx0Y29uc3QgYW5nID0gc3RlcCAqIDAuMjU7XG5cdFx0Y29uc3QgciA9IHJhZGl1cyAqIE1hdGguY29zKChzdGVwICogTWF0aC5QSSAqIDAuNSkgLyB3aWR0aCkgKiAwLjU7XG5cdFx0Y29uc3QgeCA9IHIgKiBNYXRoLmNvcyhhbmcpO1xuXHRcdGNvbnN0IHkgPSBzdGVwICogMC4zO1xuXHRcdGNvbnN0IHogPSByICogTWF0aC5zaW4oYW5nKTtcblx0XHRjb25zdCB0aGlja25lc3MgPSBNYXRoLm1heCgwLCAxLjAgLSBNYXRoLmFicyhzdGVwKSAvICh3aWR0aCAtIDEpKTtcblx0XHRub2RlczIucHVzaChbeCwgeSwgeiwgdGhpY2tuZXNzXSk7XG5cdH1cblx0bm9kZXMyLnB1c2goWzAsIDEwMDAsIDAsIDBdKTtcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBub2RlczIubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB1djA6IEFycmF5TnVtYmVyMiA9IFsoaSAtIDAuNSkgLyAobm9kZXMyLmxlbmd0aCArIDEpLCAwXTtcblx0XHRjb25zdCB1djE6IEFycmF5TnVtYmVyMiA9IFsoaSArIDAuNSkgLyAobm9kZXMyLmxlbmd0aCArIDEpLCAwXTtcblx0XHRkYXRhMi5hZGQobm9kZXMyW2kgLSAxXSwgbm9kZXMyW2ldLCB1djAsIHV2MSk7XG5cdH1cblx0Y29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChcblx0XHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiNmNDRcIiwgXCIjZmY0XCIsIFwiIzRmNFwiLCBcIiM0ZmZcIiwgXCIjNDRmXCJdKSxcblx0KTtcblx0Y29uc3Qgc2VnbWVudHMgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcoY29udGV4dCwge1xuXHRcdGRhdGFzZXRzUGFpcnM6IFtbZGF0YTEubWFrZURhdGFzZXQsIGRhdGEyLm1ha2VEYXRhc2V0XV0sXG5cdFx0cm91bmRuZXNzOiA2NCxcblx0XHRtaW5SYWRpdXM6IDIsXG5cdFx0cmFkaXVzTXVsdGlwbGllcjogMSxcblx0XHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG5cdFx0XHRjb2xvcjogcGFsZXR0ZSxcblx0XHRcdGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcblx0XHR9KSxcblx0fSk7XG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRjaGlsZHJlbjogW3NlZ21lbnRzXSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKFxuXHRcdGNsZWFyLFxuXHRcdHN0YXRlLFxuXHRcdG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XG5cdFx0XHRzZWdtZW50cy5taXggPSBNYXRoLmFicyhNYXRoLnNpbih0aW1lKSk7XG5cdFx0XHRzZWdtZW50cy50cmFuc2ZvLm9yYml0QXJvdW5kWChkZWx0YSAqIDAuMzE1NDgxKTtcblx0XHRcdHNlZ21lbnRzLnRyYW5zZm8ub3JiaXRBcm91bmRaKGRlbHRhICogMC4yKTtcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wbGF5KCk7XG5cdHJldHVybiAoeyByYWRpdXNNdWx0aXBsaWVyIH06IHsgcmFkaXVzTXVsdGlwbGllcjogbnVtYmVyIH0pID0+IHtcblx0XHRzZWdtZW50cy5yYWRpdXNNdWx0aXBsaWVyID0gcmFkaXVzTXVsdGlwbGllcjtcblx0XHRjb250ZXh0LnBhaW50KCk7XG5cdH07XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGdpem1vXG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdH19XG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHRyYWRpdXNNdWx0aXBsaWVyOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwicmFkaXVzTXVsdGlwbGllclwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHRcdG1pbjogMC4xLFxuXHRcdFx0XHRcdG1heDogMyxcblx0XHRcdFx0XHRzdGVwOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENhbnZhc0NyZWF0ZVBhbGV0dGUiLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyU2VnbWVudHNEYXRhIiwiVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmciLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsImluaXQiLCJjb250ZXh0IiwiY2xlYXIiLCJyYWRpdXMiLCJ3aWR0aCIsImRhdGExIiwibm9kZXMxIiwic3RlcCIsImFuZyIsInIiLCJNYXRoIiwieCIsInkiLCJ6IiwidGhpY2tuZXNzIiwiaSIsInV2MCIsInV2MSIsImRhdGEyIiwibm9kZXMyIiwic3RlcDEiLCJhbmcxIiwicjEiLCJ4MSIsInkxIiwiejEiLCJ0aGlja25lc3MxIiwiaTEiLCJ1djAxIiwidXYxMSIsInBhbGV0dGUiLCJzZWdtZW50cyIsInN0YXRlIiwidGltZSIsImRlbHRhIiwicmFkaXVzTXVsdGlwbGllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDeUI7QUFDaUI7QUFDVztBQUNuQjtBQUVuQyxJQUFNSSxRQUFRO0lBQ2IsYUFDQztBQUNGO0FBQ0EsSUFBTUMsT0FDTDtBQUVjLFNBQVND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