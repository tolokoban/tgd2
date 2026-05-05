"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_segments_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_c-ee5b4c"], {
48467(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _segments_demo__rspack_import_4 = __webpack_require__(47006);
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
    "Detail #1": "    context.camera.transfo.distance = 75\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 10,\n        minZoom: 0.01,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.1, 0.1, 1],\n        depth: 1,\n    })\n    const radius = 10\n    const width = 50\n    const data1 = new TgdPainterSegmentsData()\n    const nodes1: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.5\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width)\n        const x = r * Math.cos(ang)\n        const y = step * 0.2\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / width)\n        nodes1.push([x, y, z, thickness])\n    }\n    nodes1.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes1.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0]\n        data1.add(nodes1[i - 1], nodes1[i], uv0, uv1)\n    }\n    const palette = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette([\"#f44\", \"#ff4\", \"#4f4\", \"#4ff\", \"#44f\"]),\n    )\n    const segments = new TgdPainterSegments(context, {\n        dataset: data1.makeDataset,\n        roundness: 16,\n        minRadius: 2,\n        material: new TgdMaterialFlatTexture({\n            texture: palette,\n        }),\n    })\n    segments.debug()\n    segments.transfo.orbitAroundZ(tgdCalcDegToRad(90))\n    const state = new TgdPainterState(context, {\n        depth: \"less\",\n        children: [segments],\n    })\n    context.add(clear, state)\n    context.paint()"
};
var FULL = "import {\n    type ArrayNumber2,\n    type ArrayNumber4,\n    tgdCalcDegToRad,\n    tgdCalcRadToDeg,\n    tgdCanvasCreatePalette,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialDiffuse,\n    TgdMaterialFlatTexture,\n    TgdPainterClear,\n    TgdPainterSegments,\n    TgdPainterSegmentsData,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    context.camera.transfo.distance = 75\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 10,\n        minZoom: 0.01,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.1, 0.1, 1],\n        depth: 1,\n    })\n    const radius = 10\n    const width = 50\n    const data1 = new TgdPainterSegmentsData()\n    const nodes1: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.5\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width)\n        const x = r * Math.cos(ang)\n        const y = step * 0.2\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / width)\n        nodes1.push([x, y, z, thickness])\n    }\n    nodes1.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes1.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0]\n        data1.add(nodes1[i - 1], nodes1[i], uv0, uv1)\n    }\n    const palette = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette([\"#f44\", \"#ff4\", \"#4f4\", \"#4ff\", \"#44f\"]),\n    )\n    const segments = new TgdPainterSegments(context, {\n        dataset: data1.makeDataset,\n        roundness: 16,\n        minRadius: 2,\n        material: new TgdMaterialFlatTexture({\n            texture: palette,\n        }),\n    })\n    segments.debug()\n    segments.transfo.orbitAroundZ(tgdCalcDegToRad(90))\n    const state = new TgdPainterState(context, {\n        depth: \"less\",\n        children: [segments],\n    })\n    context.add(clear, state)\n    context.paint()\n    context.inputs.pointer.eventHover.addListener((event) => {\n        const { x, y } = event.current\n        const [R, G, B] = context.readPixel(x, y)\n        console.log(`%c(${R}, ${G}, ${B})]`, `color:#777;background:rgb(${R},${G},${B})`)\n    })\n    return ({ minRadius }: { minRadius: number }) => {\n        segments.minRadius = minRadius\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            settings={{\n                minRadius: {\n                    label: \"minRadius\",\n                    value: 2,\n                    min: 0,\n                    max: 16,\n                    step: 1,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_segments_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
47006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
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
            0.1,
            0.1,
            0.1,
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
    var palette = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)([
        "#f44",
        "#ff4",
        "#4f4",
        "#4ff",
        "#44f"
    ]));
    var segments = new _tolokoban_tgd__rspack_import_1.TgdPainterSegments(context, {
        dataset: data1.makeDataset,
        roundness: 16,
        minRadius: 2,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlatTexture({
            texture: palette
        })
    });
    segments.debug();
    segments.transfo.orbitAroundZ((0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(90));
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        children: [
            segments
        ]
    });
    context.add(clear, state);
    context.paint();
    // #end
    context.inputs.pointer.eventHover.addListener(function(event) {
        var _event_current = event.current, x = _event_current.x, y = _event_current.y;
        var _context_readPixel = _sliced_to_array(context.readPixel(x, y), 3), R = _context_readPixel[0], G = _context_readPixel[1], B = _context_readPixel[2];
        console.log("%c(".concat(R, ", ").concat(G, ", ").concat(B, ")]"), "color:#777;background:rgb(".concat(R, ",").concat(G, ",").concat(B, ")"));
    });
    return function(param) {
        var minRadius = param.minRadius;
        segments.minRadius = minRadius;
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
            minRadius: {
                label: "minRadius",
                value: 2,
                min: 0,
                max: 16,
                step: 1
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/segments.demo.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}


},
19537(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _segments_demo__rspack_import_1 = __webpack_require__(48467);
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
        li: "li",
        p: "p",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterSegments.html",
                    children: "TgdPainterSegments"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "With the default way of drawing lines in WebGL, you can just have a thickness of\n1px on most hardwares. This painter allow you to paint with any thickness and\ncolor."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Simple segments"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_segments_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Showing a neuron"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "#/articles/painter/segments/morphing",
                            children: "Morphing between two shapes"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                            lineNumber: 15,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/segments/02",
                                children: "A neuron with several branches"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                                lineNumber: 16,
                                columnNumber: 3
                            }, this),
                            "."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zZWdtZW50c19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfYy1lZTViNGMuN2IxMmVkNjk1MzMyZWY4MS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zZWdtZW50cy9fL3NlZ21lbnRzLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zZWdtZW50cy9fL3NlZ21lbnRzLmRlbW8vc2VnbWVudHMuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vc2VnbWVudHMuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCIgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDc1XFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgbWF4Wm9vbTogMTAsXFxuICAgICAgICBtaW5ab29tOiAwLjAxLFxcbiAgICAgICAgc3BlZWRab29tOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCByYWRpdXMgPSAxMFxcbiAgICBjb25zdCB3aWR0aCA9IDUwXFxuICAgIGNvbnN0IGRhdGExID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKVxcbiAgICBjb25zdCBub2RlczE6IEFycmF5TnVtYmVyNFtdID0gW1swLCAtMTAwMCwgMCwgMF1dXFxuICAgIGZvciAobGV0IHN0ZXAgPSAtd2lkdGg7IHN0ZXAgPCB3aWR0aDsgc3RlcCsrKSB7XFxuICAgICAgICBjb25zdCBhbmcgPSBzdGVwICogMC41XFxuICAgICAgICBjb25zdCByID0gcmFkaXVzICogTWF0aC5jb3MoKHN0ZXAgKiBNYXRoLlBJICogMC41KSAvIHdpZHRoKVxcbiAgICAgICAgY29uc3QgeCA9IHIgKiBNYXRoLmNvcyhhbmcpXFxuICAgICAgICBjb25zdCB5ID0gc3RlcCAqIDAuMlxcbiAgICAgICAgY29uc3QgeiA9IHIgKiBNYXRoLnNpbihhbmcpXFxuICAgICAgICBjb25zdCB0aGlja25lc3MgPSBNYXRoLm1heCgwLCAxLjAgLSBNYXRoLmFicyhzdGVwKSAvIHdpZHRoKVxcbiAgICAgICAgbm9kZXMxLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pXFxuICAgIH1cXG4gICAgbm9kZXMxLnB1c2goWzAsIDEwMDAsIDAsIDBdKVxcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMS5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgY29uc3QgdXYwOiBBcnJheU51bWJlcjIgPSBbKGkgLSAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF1cXG4gICAgICAgIGNvbnN0IHV2MTogQXJyYXlOdW1iZXIyID0gWyhpICsgMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdXFxuICAgICAgICBkYXRhMS5hZGQobm9kZXMxW2kgLSAxXSwgbm9kZXMxW2ldLCB1djAsIHV2MSlcXG4gICAgfVxcbiAgICBjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKFxcbiAgICAgICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXFxcIiNmNDRcXFwiLCBcXFwiI2ZmNFxcXCIsIFxcXCIjNGY0XFxcIiwgXFxcIiM0ZmZcXFwiLCBcXFwiIzQ0ZlxcXCJdKSxcXG4gICAgKVxcbiAgICBjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xcbiAgICAgICAgZGF0YXNldDogZGF0YTEubWFrZURhdGFzZXQsXFxuICAgICAgICByb3VuZG5lc3M6IDE2LFxcbiAgICAgICAgbWluUmFkaXVzOiAyLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBwYWxldHRlLFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIHNlZ21lbnRzLmRlYnVnKClcXG4gICAgc2VnbWVudHMudHJhbnNmby5vcmJpdEFyb3VuZFoodGdkQ2FsY0RlZ1RvUmFkKDkwKSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICBjaGlsZHJlbjogW3NlZ21lbnRzXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcbiAgICBjb250ZXh0LnBhaW50KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHR5cGUgQXJyYXlOdW1iZXIyLFxcbiAgICB0eXBlIEFycmF5TnVtYmVyNCxcXG4gICAgdGdkQ2FsY0RlZ1RvUmFkLFxcbiAgICB0Z2RDYWxjUmFkVG9EZWcsXFxuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZE1hdGVyaWFsRmxhdFRleHR1cmUsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzLFxcbiAgICBUZ2RQYWludGVyU2VnbWVudHNEYXRhLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDc1XFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgbWF4Wm9vbTogMTAsXFxuICAgICAgICBtaW5ab29tOiAwLjAxLFxcbiAgICAgICAgc3BlZWRab29tOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCByYWRpdXMgPSAxMFxcbiAgICBjb25zdCB3aWR0aCA9IDUwXFxuICAgIGNvbnN0IGRhdGExID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKVxcbiAgICBjb25zdCBub2RlczE6IEFycmF5TnVtYmVyNFtdID0gW1swLCAtMTAwMCwgMCwgMF1dXFxuICAgIGZvciAobGV0IHN0ZXAgPSAtd2lkdGg7IHN0ZXAgPCB3aWR0aDsgc3RlcCsrKSB7XFxuICAgICAgICBjb25zdCBhbmcgPSBzdGVwICogMC41XFxuICAgICAgICBjb25zdCByID0gcmFkaXVzICogTWF0aC5jb3MoKHN0ZXAgKiBNYXRoLlBJICogMC41KSAvIHdpZHRoKVxcbiAgICAgICAgY29uc3QgeCA9IHIgKiBNYXRoLmNvcyhhbmcpXFxuICAgICAgICBjb25zdCB5ID0gc3RlcCAqIDAuMlxcbiAgICAgICAgY29uc3QgeiA9IHIgKiBNYXRoLnNpbihhbmcpXFxuICAgICAgICBjb25zdCB0aGlja25lc3MgPSBNYXRoLm1heCgwLCAxLjAgLSBNYXRoLmFicyhzdGVwKSAvIHdpZHRoKVxcbiAgICAgICAgbm9kZXMxLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pXFxuICAgIH1cXG4gICAgbm9kZXMxLnB1c2goWzAsIDEwMDAsIDAsIDBdKVxcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMS5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgY29uc3QgdXYwOiBBcnJheU51bWJlcjIgPSBbKGkgLSAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF1cXG4gICAgICAgIGNvbnN0IHV2MTogQXJyYXlOdW1iZXIyID0gWyhpICsgMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdXFxuICAgICAgICBkYXRhMS5hZGQobm9kZXMxW2kgLSAxXSwgbm9kZXMxW2ldLCB1djAsIHV2MSlcXG4gICAgfVxcbiAgICBjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKFxcbiAgICAgICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXFxcIiNmNDRcXFwiLCBcXFwiI2ZmNFxcXCIsIFxcXCIjNGY0XFxcIiwgXFxcIiM0ZmZcXFwiLCBcXFwiIzQ0ZlxcXCJdKSxcXG4gICAgKVxcbiAgICBjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xcbiAgICAgICAgZGF0YXNldDogZGF0YTEubWFrZURhdGFzZXQsXFxuICAgICAgICByb3VuZG5lc3M6IDE2LFxcbiAgICAgICAgbWluUmFkaXVzOiAyLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBwYWxldHRlLFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIHNlZ21lbnRzLmRlYnVnKClcXG4gICAgc2VnbWVudHMudHJhbnNmby5vcmJpdEFyb3VuZFoodGdkQ2FsY0RlZ1RvUmFkKDkwKSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICBjaGlsZHJlbjogW3NlZ21lbnRzXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudEhvdmVyLmFkZExpc3RlbmVyKChldmVudCkgPT4ge1xcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBldmVudC5jdXJyZW50XFxuICAgICAgICBjb25zdCBbUiwgRywgQl0gPSBjb250ZXh0LnJlYWRQaXhlbCh4LCB5KVxcbiAgICAgICAgY29uc29sZS5sb2coYCVjKCR7Un0sICR7R30sICR7Qn0pXWAsIGBjb2xvcjojNzc3O2JhY2tncm91bmQ6cmdiKCR7Un0sJHtHfSwke0J9KWApXFxuICAgIH0pXFxuICAgIHJldHVybiAoeyBtaW5SYWRpdXMgfTogeyBtaW5SYWRpdXM6IG51bWJlciB9KSA9PiB7XFxuICAgICAgICBzZWdtZW50cy5taW5SYWRpdXMgPSBtaW5SYWRpdXNcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIHNldHRpbmdzPXt7XFxuICAgICAgICAgICAgICAgIG1pblJhZGl1czoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJtaW5SYWRpdXNcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDIsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDE2LFxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogMSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0eXBlIEFycmF5TnVtYmVyMixcbiAgICB0eXBlIEFycmF5TnVtYmVyNCxcbiAgICB0Z2RDYWxjRGVnVG9SYWQsXG4gICAgdGdkQ2FsY1JhZFRvRGVnLFxuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzLFxuICAgIFRnZFBhaW50ZXJTZWdtZW50c0RhdGEsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA3NVxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgIG1heFpvb206IDEwLFxuICAgICAgICBtaW5ab29tOiAwLjAxLFxuICAgICAgICBzcGVlZFpvb206IDEsXG4gICAgfSlcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLFxuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHJhZGl1cyA9IDEwXG4gICAgY29uc3Qgd2lkdGggPSA1MFxuICAgIGNvbnN0IGRhdGExID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKVxuICAgIGNvbnN0IG5vZGVzMTogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV1cbiAgICBmb3IgKGxldCBzdGVwID0gLXdpZHRoOyBzdGVwIDwgd2lkdGg7IHN0ZXArKykge1xuICAgICAgICBjb25zdCBhbmcgPSBzdGVwICogMC41XG4gICAgICAgIGNvbnN0IHIgPSByYWRpdXMgKiBNYXRoLmNvcygoc3RlcCAqIE1hdGguUEkgKiAwLjUpIC8gd2lkdGgpXG4gICAgICAgIGNvbnN0IHggPSByICogTWF0aC5jb3MoYW5nKVxuICAgICAgICBjb25zdCB5ID0gc3RlcCAqIDAuMlxuICAgICAgICBjb25zdCB6ID0gciAqIE1hdGguc2luKGFuZylcbiAgICAgICAgY29uc3QgdGhpY2tuZXNzID0gTWF0aC5tYXgoMCwgMS4wIC0gTWF0aC5hYnMoc3RlcCkgLyB3aWR0aClcbiAgICAgICAgbm9kZXMxLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pXG4gICAgfVxuICAgIG5vZGVzMS5wdXNoKFswLCAxMDAwLCAwLCAwXSlcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB1djA6IEFycmF5TnVtYmVyMiA9IFsoaSAtIDAuNSkgLyAobm9kZXMxLmxlbmd0aCArIDEpLCAwXVxuICAgICAgICBjb25zdCB1djE6IEFycmF5TnVtYmVyMiA9IFsoaSArIDAuNSkgLyAobm9kZXMxLmxlbmd0aCArIDEpLCAwXVxuICAgICAgICBkYXRhMS5hZGQobm9kZXMxW2kgLSAxXSwgbm9kZXMxW2ldLCB1djAsIHV2MSlcbiAgICB9XG4gICAgY29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChcbiAgICAgICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjZjQ0XCIsIFwiI2ZmNFwiLCBcIiM0ZjRcIiwgXCIjNGZmXCIsIFwiIzQ0ZlwiXSksXG4gICAgKVxuICAgIGNvbnN0IHNlZ21lbnRzID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50cyhjb250ZXh0LCB7XG4gICAgICAgIGRhdGFzZXQ6IGRhdGExLm1ha2VEYXRhc2V0LFxuICAgICAgICByb3VuZG5lc3M6IDE2LFxuICAgICAgICBtaW5SYWRpdXM6IDIsXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XG4gICAgICAgICAgICB0ZXh0dXJlOiBwYWxldHRlLFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgIHNlZ21lbnRzLmRlYnVnKClcbiAgICBzZWdtZW50cy50cmFuc2ZvLm9yYml0QXJvdW5kWih0Z2RDYWxjRGVnVG9SYWQoOTApKVxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgY2hpbGRyZW46IFtzZWdtZW50c10sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgLy8gI2VuZFxuICAgIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRIb3Zlci5hZGRMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBldmVudC5jdXJyZW50XG4gICAgICAgIGNvbnN0IFtSLCBHLCBCXSA9IGNvbnRleHQucmVhZFBpeGVsKHgsIHkpXG4gICAgICAgIGNvbnNvbGUubG9nKGAlYygke1J9LCAke0d9LCAke0J9KV1gLCBgY29sb3I6Izc3NztiYWNrZ3JvdW5kOnJnYigke1J9LCR7R30sJHtCfSlgKVxuICAgIH0pXG4gICAgcmV0dXJuICh7IG1pblJhZGl1cyB9OiB7IG1pblJhZGl1czogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgc2VnbWVudHMubWluUmFkaXVzID0gbWluUmFkaXVzXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNldHRpbmdzPXt7XG4gICAgICAgICAgICAgICAgbWluUmFkaXVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1pblJhZGl1c1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMixcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDE2LFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQ2FsY0RlZ1RvUmFkIiwidGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsIlRnZE1hdGVyaWFsRmxhdFRleHR1cmUiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyU2VnbWVudHMiLCJUZ2RQYWludGVyU2VnbWVudHNEYXRhIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVmlldyIsImluaXQiLCJjb250ZXh0IiwiY2xlYXIiLCJyYWRpdXMiLCJ3aWR0aCIsImRhdGExIiwibm9kZXMxIiwic3RlcCIsImFuZyIsInIiLCJNYXRoIiwieCIsInkiLCJ6IiwidGhpY2tuZXNzIiwiaSIsInV2MCIsInV2MSIsInBhbGV0dGUiLCJzZWdtZW50cyIsInN0YXRlIiwiZXZlbnQiLCJfZXZlbnRfY3VycmVudCIsIl9jb250ZXh0X3JlYWRQaXhlbCIsIlIiLCJHIiwiQiIsImNvbnNvbGUiLCJtaW5SYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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