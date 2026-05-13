"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_segments_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_c-b6ace9"], {
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/_/segments.demo/segments.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "With the default way of drawing lines in WebGL, you can just have a thickness of\n1px on most hardwares. This painter allow you to paint with any thickness and\ncolor."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Simple segments"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_segments_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Showing a neuron"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                            lineNumber: 15,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                                lineNumber: 16,
                                columnNumber: 3
                            }, this),
                            "."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zZWdtZW50c19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfYy1iNmFjZTkuNTAxNzg5MzJkZjM2NDE1Ny5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzL18vc2VnbWVudHMuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc2VnbWVudHMvXy9zZWdtZW50cy5kZW1vL3NlZ21lbnRzLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9zZWdtZW50cy5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNzVcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICBtYXhab29tOiAxMCxcXG4gICAgICAgIG1pblpvb206IDAuMDEsXFxuICAgICAgICBzcGVlZFpvb206IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHJhZGl1cyA9IDEwXFxuICAgIGNvbnN0IHdpZHRoID0gNTBcXG4gICAgY29uc3QgZGF0YTEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXFxuICAgIGNvbnN0IG5vZGVzMTogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV1cXG4gICAgZm9yIChsZXQgc3RlcCA9IC13aWR0aDsgc3RlcCA8IHdpZHRoOyBzdGVwKyspIHtcXG4gICAgICAgIGNvbnN0IGFuZyA9IHN0ZXAgKiAwLjVcXG4gICAgICAgIGNvbnN0IHIgPSByYWRpdXMgKiBNYXRoLmNvcygoc3RlcCAqIE1hdGguUEkgKiAwLjUpIC8gd2lkdGgpXFxuICAgICAgICBjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZylcXG4gICAgICAgIGNvbnN0IHkgPSBzdGVwICogMC4yXFxuICAgICAgICBjb25zdCB6ID0gciAqIE1hdGguc2luKGFuZylcXG4gICAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gd2lkdGgpXFxuICAgICAgICBub2RlczEucHVzaChbeCwgeSwgeiwgdGhpY2tuZXNzXSlcXG4gICAgfVxcbiAgICBub2RlczEucHVzaChbMCwgMTAwMCwgMCwgMF0pXFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZXMxLmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBjb25zdCB1djA6IEFycmF5TnVtYmVyMiA9IFsoaSAtIDAuNSkgLyAobm9kZXMxLmxlbmd0aCArIDEpLCAwXVxcbiAgICAgICAgY29uc3QgdXYxOiBBcnJheU51bWJlcjIgPSBbKGkgKyAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF1cXG4gICAgICAgIGRhdGExLmFkZChub2RlczFbaSAtIDFdLCBub2RlczFbaV0sIHV2MCwgdXYxKVxcbiAgICB9XFxuICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoXFxuICAgICAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcXFwiI2Y0NFxcXCIsIFxcXCIjZmY0XFxcIiwgXFxcIiM0ZjRcXFwiLCBcXFwiIzRmZlxcXCIsIFxcXCIjNDRmXFxcIl0pLFxcbiAgICApXFxuICAgIGNvbnN0IHNlZ21lbnRzID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50cyhjb250ZXh0LCB7XFxuICAgICAgICBkYXRhc2V0OiBkYXRhMS5tYWtlRGF0YXNldCxcXG4gICAgICAgIHJvdW5kbmVzczogMTYsXFxuICAgICAgICBtaW5SYWRpdXM6IDIsXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoe1xcbiAgICAgICAgICAgIHRleHR1cmU6IHBhbGV0dGUsXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgc2VnbWVudHMuZGVidWcoKVxcbiAgICBzZWdtZW50cy50cmFuc2ZvLm9yYml0QXJvdW5kWih0Z2RDYWxjRGVnVG9SYWQoOTApKVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgIGNoaWxkcmVuOiBbc2VnbWVudHNdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXFxuICAgIGNvbnRleHQucGFpbnQoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdHlwZSBBcnJheU51bWJlcjIsXFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxcbiAgICB0Z2RDYWxjRGVnVG9SYWQsXFxuICAgIHRnZENhbGNSYWRUb0RlZyxcXG4gICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyU2VnbWVudHMsXFxuICAgIFRnZFBhaW50ZXJTZWdtZW50c0RhdGEsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNzVcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICBtYXhab29tOiAxMCxcXG4gICAgICAgIG1pblpvb206IDAuMDEsXFxuICAgICAgICBzcGVlZFpvb206IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHJhZGl1cyA9IDEwXFxuICAgIGNvbnN0IHdpZHRoID0gNTBcXG4gICAgY29uc3QgZGF0YTEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXFxuICAgIGNvbnN0IG5vZGVzMTogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV1cXG4gICAgZm9yIChsZXQgc3RlcCA9IC13aWR0aDsgc3RlcCA8IHdpZHRoOyBzdGVwKyspIHtcXG4gICAgICAgIGNvbnN0IGFuZyA9IHN0ZXAgKiAwLjVcXG4gICAgICAgIGNvbnN0IHIgPSByYWRpdXMgKiBNYXRoLmNvcygoc3RlcCAqIE1hdGguUEkgKiAwLjUpIC8gd2lkdGgpXFxuICAgICAgICBjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZylcXG4gICAgICAgIGNvbnN0IHkgPSBzdGVwICogMC4yXFxuICAgICAgICBjb25zdCB6ID0gciAqIE1hdGguc2luKGFuZylcXG4gICAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gd2lkdGgpXFxuICAgICAgICBub2RlczEucHVzaChbeCwgeSwgeiwgdGhpY2tuZXNzXSlcXG4gICAgfVxcbiAgICBub2RlczEucHVzaChbMCwgMTAwMCwgMCwgMF0pXFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZXMxLmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBjb25zdCB1djA6IEFycmF5TnVtYmVyMiA9IFsoaSAtIDAuNSkgLyAobm9kZXMxLmxlbmd0aCArIDEpLCAwXVxcbiAgICAgICAgY29uc3QgdXYxOiBBcnJheU51bWJlcjIgPSBbKGkgKyAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF1cXG4gICAgICAgIGRhdGExLmFkZChub2RlczFbaSAtIDFdLCBub2RlczFbaV0sIHV2MCwgdXYxKVxcbiAgICB9XFxuICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoXFxuICAgICAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcXFwiI2Y0NFxcXCIsIFxcXCIjZmY0XFxcIiwgXFxcIiM0ZjRcXFwiLCBcXFwiIzRmZlxcXCIsIFxcXCIjNDRmXFxcIl0pLFxcbiAgICApXFxuICAgIGNvbnN0IHNlZ21lbnRzID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50cyhjb250ZXh0LCB7XFxuICAgICAgICBkYXRhc2V0OiBkYXRhMS5tYWtlRGF0YXNldCxcXG4gICAgICAgIHJvdW5kbmVzczogMTYsXFxuICAgICAgICBtaW5SYWRpdXM6IDIsXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoe1xcbiAgICAgICAgICAgIHRleHR1cmU6IHBhbGV0dGUsXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgc2VnbWVudHMuZGVidWcoKVxcbiAgICBzZWdtZW50cy50cmFuc2ZvLm9yYml0QXJvdW5kWih0Z2RDYWxjRGVnVG9SYWQoOTApKVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgIGNoaWxkcmVuOiBbc2VnbWVudHNdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICBjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50SG92ZXIuYWRkTGlzdGVuZXIoKGV2ZW50KSA9PiB7XFxuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGV2ZW50LmN1cnJlbnRcXG4gICAgICAgIGNvbnN0IFtSLCBHLCBCXSA9IGNvbnRleHQucmVhZFBpeGVsKHgsIHkpXFxuICAgICAgICBjb25zb2xlLmxvZyhgJWMoJHtSfSwgJHtHfSwgJHtCfSldYCwgYGNvbG9yOiM3Nzc7YmFja2dyb3VuZDpyZ2IoJHtSfSwke0d9LCR7Qn0pYClcXG4gICAgfSlcXG4gICAgcmV0dXJuICh7IG1pblJhZGl1cyB9OiB7IG1pblJhZGl1czogbnVtYmVyIH0pID0+IHtcXG4gICAgICAgIHNlZ21lbnRzLm1pblJhZGl1cyA9IG1pblJhZGl1c1xcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBnaXptb1xcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcXG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcXG4gICAgICAgICAgICAgICAgbWluUmFkaXVzOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcIm1pblJhZGl1c1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMixcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogMTYsXFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiAxLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHR5cGUgQXJyYXlOdW1iZXIyLFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxuICAgIHRnZENhbGNEZWdUb1JhZCxcbiAgICB0Z2RDYWxjUmFkVG9EZWcsXG4gICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyU2VnbWVudHMsXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDc1XG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgbWF4Wm9vbTogMTAsXG4gICAgICAgIG1pblpvb206IDAuMDEsXG4gICAgICAgIHNwZWVkWm9vbTogMSxcbiAgICB9KVxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjEsIDAuMSwgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgcmFkaXVzID0gMTBcbiAgICBjb25zdCB3aWR0aCA9IDUwXG4gICAgY29uc3QgZGF0YTEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXG4gICAgY29uc3Qgbm9kZXMxOiBBcnJheU51bWJlcjRbXSA9IFtbMCwgLTEwMDAsIDAsIDBdXVxuICAgIGZvciAobGV0IHN0ZXAgPSAtd2lkdGg7IHN0ZXAgPCB3aWR0aDsgc3RlcCsrKSB7XG4gICAgICAgIGNvbnN0IGFuZyA9IHN0ZXAgKiAwLjVcbiAgICAgICAgY29uc3QgciA9IHJhZGl1cyAqIE1hdGguY29zKChzdGVwICogTWF0aC5QSSAqIDAuNSkgLyB3aWR0aClcbiAgICAgICAgY29uc3QgeCA9IHIgKiBNYXRoLmNvcyhhbmcpXG4gICAgICAgIGNvbnN0IHkgPSBzdGVwICogMC4yXG4gICAgICAgIGNvbnN0IHogPSByICogTWF0aC5zaW4oYW5nKVxuICAgICAgICBjb25zdCB0aGlja25lc3MgPSBNYXRoLm1heCgwLCAxLjAgLSBNYXRoLmFicyhzdGVwKSAvIHdpZHRoKVxuICAgICAgICBub2RlczEucHVzaChbeCwgeSwgeiwgdGhpY2tuZXNzXSlcbiAgICB9XG4gICAgbm9kZXMxLnB1c2goWzAsIDEwMDAsIDAsIDBdKVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZXMxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHV2MDogQXJyYXlOdW1iZXIyID0gWyhpIC0gMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdXG4gICAgICAgIGNvbnN0IHV2MTogQXJyYXlOdW1iZXIyID0gWyhpICsgMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdXG4gICAgICAgIGRhdGExLmFkZChub2RlczFbaSAtIDFdLCBub2RlczFbaV0sIHV2MCwgdXYxKVxuICAgIH1cbiAgICBjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKFxuICAgICAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiNmNDRcIiwgXCIjZmY0XCIsIFwiIzRmNFwiLCBcIiM0ZmZcIiwgXCIjNDRmXCJdKSxcbiAgICApXG4gICAgY29uc3Qgc2VnbWVudHMgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzKGNvbnRleHQsIHtcbiAgICAgICAgZGF0YXNldDogZGF0YTEubWFrZURhdGFzZXQsXG4gICAgICAgIHJvdW5kbmVzczogMTYsXG4gICAgICAgIG1pblJhZGl1czogMixcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHtcbiAgICAgICAgICAgIHRleHR1cmU6IHBhbGV0dGUsXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgc2VnbWVudHMuZGVidWcoKVxuICAgIHNlZ21lbnRzLnRyYW5zZm8ub3JiaXRBcm91bmRaKHRnZENhbGNEZWdUb1JhZCg5MCkpXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxuICAgICAgICBjaGlsZHJlbjogW3NlZ21lbnRzXSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICAvLyAjZW5kXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudEhvdmVyLmFkZExpc3RlbmVyKChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGV2ZW50LmN1cnJlbnRcbiAgICAgICAgY29uc3QgW1IsIEcsIEJdID0gY29udGV4dC5yZWFkUGl4ZWwoeCwgeSlcbiAgICAgICAgY29uc29sZS5sb2coYCVjKCR7Un0sICR7R30sICR7Qn0pXWAsIGBjb2xvcjojNzc3O2JhY2tncm91bmQ6cmdiKCR7Un0sJHtHfSwke0J9KWApXG4gICAgfSlcbiAgICByZXR1cm4gKHsgbWluUmFkaXVzIH06IHsgbWluUmFkaXVzOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBzZWdtZW50cy5taW5SYWRpdXMgPSBtaW5SYWRpdXNcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgZ2l6bW9cbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcbiAgICAgICAgICAgICAgICBtaW5SYWRpdXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibWluUmFkaXVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAyLFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogMTYsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDYWxjRGVnVG9SYWQiLCJ0Z2RDYW52YXNDcmVhdGVQYWxldHRlIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJTZWdtZW50cyIsIlRnZFBhaW50ZXJTZWdtZW50c0RhdGEiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJjbGVhciIsInJhZGl1cyIsIndpZHRoIiwiZGF0YTEiLCJub2RlczEiLCJzdGVwIiwiYW5nIiwiciIsIk1hdGgiLCJ4IiwieSIsInoiLCJ0aGlja25lc3MiLCJpIiwidXYwIiwidXYxIiwicGFsZXR0ZSIsInNlZ21lbnRzIiwic3RhdGUiLCJldmVudCIsIl9ldmVudF9jdXJyZW50IiwiX2NvbnRleHRfcmVhZFBpeGVsIiwiUiIsIkciLCJCIiwiY29uc29sZSIsIm1pblJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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