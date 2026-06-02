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
    "Detail #1": "\tcontext.camera.transfo.distance = 75;\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 10,\n\t\tminZoom: 0.01,\n\t\tspeedZoom: 1,\n\t});\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.1, 0.1, 1],\n\t\tdepth: 1,\n\t});\n\tconst radius = 10;\n\tconst width = 50;\n\tconst data1 = new TgdPainterSegmentsData();\n\tconst nodes1: ArrayNumber4[] = [[0, -1000, 0, 0]];\n\tfor (let step = -width; step < width; step++) {\n\t\tconst ang = step * 0.5;\n\t\tconst r = radius * Math.cos((step * Math.PI * 0.5) / width);\n\t\tconst x = r * Math.cos(ang);\n\t\tconst y = step * 0.2;\n\t\tconst z = r * Math.sin(ang);\n\t\tconst thickness = Math.max(0, 1.0 - Math.abs(step) / width);\n\t\tnodes1.push([x, y, z, thickness]);\n\t}\n\tnodes1.push([0, 1000, 0, 0]);\n\tfor (let i = 1; i < nodes1.length; i++) {\n\t\tconst uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0];\n\t\tconst uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0];\n\t\tdata1.add(nodes1[i - 1], nodes1[i], uv0, uv1);\n\t}\n\tconst palette = new TgdTexture2D(context).loadBitmap(\n\t\ttgdCanvasCreatePalette([\"#f44\", \"#ff4\", \"#4f4\", \"#4ff\", \"#44f\"]),\n\t);\n\tconst segments = new TgdPainterSegments(context, {\n\t\tdataset: data1.makeDataset,\n\t\troundness: 16,\n\t\tminRadius: 2,\n\t\tmaterial: new TgdMaterialFlatTexture({\n\t\t\ttexture: palette,\n\t\t}),\n\t});\n\tsegments.debug();\n\tsegments.transfo.orbitAroundZ(tgdCalcDegToRad(90));\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tchildren: [segments],\n\t});\n\tcontext.add(clear, state);\n\tcontext.paint();"
};
var FULL = "import {\n\ttype ArrayNumber2,\n\ttype ArrayNumber4,\n\ttgdCalcDegToRad,\n\ttgdCalcRadToDeg,\n\ttgdCanvasCreatePalette,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdMaterialDiffuse,\n\tTgdMaterialFlatTexture,\n\tTgdPainterClear,\n\tTgdPainterSegments,\n\tTgdPainterSegmentsData,\n\tTgdPainterState,\n\tTgdTexture2D,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport View from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext) {\n\tcontext.camera.transfo.distance = 75;\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 10,\n\t\tminZoom: 0.01,\n\t\tspeedZoom: 1,\n\t});\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.1, 0.1, 1],\n\t\tdepth: 1,\n\t});\n\tconst radius = 10;\n\tconst width = 50;\n\tconst data1 = new TgdPainterSegmentsData();\n\tconst nodes1: ArrayNumber4[] = [[0, -1000, 0, 0]];\n\tfor (let step = -width; step < width; step++) {\n\t\tconst ang = step * 0.5;\n\t\tconst r = radius * Math.cos((step * Math.PI * 0.5) / width);\n\t\tconst x = r * Math.cos(ang);\n\t\tconst y = step * 0.2;\n\t\tconst z = r * Math.sin(ang);\n\t\tconst thickness = Math.max(0, 1.0 - Math.abs(step) / width);\n\t\tnodes1.push([x, y, z, thickness]);\n\t}\n\tnodes1.push([0, 1000, 0, 0]);\n\tfor (let i = 1; i < nodes1.length; i++) {\n\t\tconst uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0];\n\t\tconst uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0];\n\t\tdata1.add(nodes1[i - 1], nodes1[i], uv0, uv1);\n\t}\n\tconst palette = new TgdTexture2D(context).loadBitmap(\n\t\ttgdCanvasCreatePalette([\"#f44\", \"#ff4\", \"#4f4\", \"#4ff\", \"#44f\"]),\n\t);\n\tconst segments = new TgdPainterSegments(context, {\n\t\tdataset: data1.makeDataset,\n\t\troundness: 16,\n\t\tminRadius: 2,\n\t\tmaterial: new TgdMaterialFlatTexture({\n\t\t\ttexture: palette,\n\t\t}),\n\t});\n\tsegments.debug();\n\tsegments.transfo.orbitAroundZ(tgdCalcDegToRad(90));\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tchildren: [segments],\n\t});\n\tcontext.add(clear, state);\n\tcontext.paint();\n\tcontext.inputs.pointer.eventHover.addListener((event) => {\n\t\tconst { x, y } = event.current;\n\t\tconst [R, G, B] = context.readPixel(x, y);\n\t\tconsole.log(\n\t\t\t`%c(${R}, ${G}, ${B})]`,\n\t\t\t`color:#777;background:rgb(${R},${G},${B})`,\n\t\t);\n\t});\n\treturn ({ minRadius }: { minRadius: number }) => {\n\t\tsegments.minRadius = minRadius;\n\t\tcontext.paint();\n\t};\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tminRadius: {\n\t\t\t\t\tlabel: \"minRadius\",\n\t\t\t\t\tvalue: 2,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 16,\n\t\t\t\t\tstep: 1,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n";
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
        lineNumber: 88,
        columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zZWdtZW50c19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfYy1iNmFjZTkuOWEwMmE1MTI2ZDcxYTg0Zi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zZWdtZW50cy9fL3NlZ21lbnRzLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zZWdtZW50cy9fL3NlZ21lbnRzLmRlbW8vc2VnbWVudHMuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vc2VnbWVudHMuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJcXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNzU7XFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdG1heFpvb206IDEwLFxcblxcdFxcdG1pblpvb206IDAuMDEsXFxuXFx0XFx0c3BlZWRab29tOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCByYWRpdXMgPSAxMDtcXG5cXHRjb25zdCB3aWR0aCA9IDUwO1xcblxcdGNvbnN0IGRhdGExID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKTtcXG5cXHRjb25zdCBub2RlczE6IEFycmF5TnVtYmVyNFtdID0gW1swLCAtMTAwMCwgMCwgMF1dO1xcblxcdGZvciAobGV0IHN0ZXAgPSAtd2lkdGg7IHN0ZXAgPCB3aWR0aDsgc3RlcCsrKSB7XFxuXFx0XFx0Y29uc3QgYW5nID0gc3RlcCAqIDAuNTtcXG5cXHRcXHRjb25zdCByID0gcmFkaXVzICogTWF0aC5jb3MoKHN0ZXAgKiBNYXRoLlBJICogMC41KSAvIHdpZHRoKTtcXG5cXHRcXHRjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZyk7XFxuXFx0XFx0Y29uc3QgeSA9IHN0ZXAgKiAwLjI7XFxuXFx0XFx0Y29uc3QgeiA9IHIgKiBNYXRoLnNpbihhbmcpO1xcblxcdFxcdGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gd2lkdGgpO1xcblxcdFxcdG5vZGVzMS5wdXNoKFt4LCB5LCB6LCB0aGlja25lc3NdKTtcXG5cXHR9XFxuXFx0bm9kZXMxLnB1c2goWzAsIDEwMDAsIDAsIDBdKTtcXG5cXHRmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMS5sZW5ndGg7IGkrKykge1xcblxcdFxcdGNvbnN0IHV2MDogQXJyYXlOdW1iZXIyID0gWyhpIC0gMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdO1xcblxcdFxcdGNvbnN0IHV2MTogQXJyYXlOdW1iZXIyID0gWyhpICsgMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdO1xcblxcdFxcdGRhdGExLmFkZChub2RlczFbaSAtIDFdLCBub2RlczFbaV0sIHV2MCwgdXYxKTtcXG5cXHR9XFxuXFx0Y29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChcXG5cXHRcXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcXFwiI2Y0NFxcXCIsIFxcXCIjZmY0XFxcIiwgXFxcIiM0ZjRcXFwiLCBcXFwiIzRmZlxcXCIsIFxcXCIjNDRmXFxcIl0pLFxcblxcdCk7XFxuXFx0Y29uc3Qgc2VnbWVudHMgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzKGNvbnRleHQsIHtcXG5cXHRcXHRkYXRhc2V0OiBkYXRhMS5tYWtlRGF0YXNldCxcXG5cXHRcXHRyb3VuZG5lc3M6IDE2LFxcblxcdFxcdG1pblJhZGl1czogMixcXG5cXHRcXHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoe1xcblxcdFxcdFxcdHRleHR1cmU6IHBhbGV0dGUsXFxuXFx0XFx0fSksXFxuXFx0fSk7XFxuXFx0c2VnbWVudHMuZGVidWcoKTtcXG5cXHRzZWdtZW50cy50cmFuc2ZvLm9yYml0QXJvdW5kWih0Z2RDYWxjRGVnVG9SYWQoOTApKTtcXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuXFx0XFx0Y2hpbGRyZW46IFtzZWdtZW50c10sXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdHR5cGUgQXJyYXlOdW1iZXIyLFxcblxcdHR5cGUgQXJyYXlOdW1iZXI0LFxcblxcdHRnZENhbGNEZWdUb1JhZCxcXG5cXHR0Z2RDYWxjUmFkVG9EZWcsXFxuXFx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcblxcdFRnZE1hdGVyaWFsRGlmZnVzZSxcXG5cXHRUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyU2VnbWVudHMsXFxuXFx0VGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0VGdkVGV4dHVyZTJELFxcblxcdHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG5cXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNzU7XFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdG1heFpvb206IDEwLFxcblxcdFxcdG1pblpvb206IDAuMDEsXFxuXFx0XFx0c3BlZWRab29tOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCByYWRpdXMgPSAxMDtcXG5cXHRjb25zdCB3aWR0aCA9IDUwO1xcblxcdGNvbnN0IGRhdGExID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKTtcXG5cXHRjb25zdCBub2RlczE6IEFycmF5TnVtYmVyNFtdID0gW1swLCAtMTAwMCwgMCwgMF1dO1xcblxcdGZvciAobGV0IHN0ZXAgPSAtd2lkdGg7IHN0ZXAgPCB3aWR0aDsgc3RlcCsrKSB7XFxuXFx0XFx0Y29uc3QgYW5nID0gc3RlcCAqIDAuNTtcXG5cXHRcXHRjb25zdCByID0gcmFkaXVzICogTWF0aC5jb3MoKHN0ZXAgKiBNYXRoLlBJICogMC41KSAvIHdpZHRoKTtcXG5cXHRcXHRjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZyk7XFxuXFx0XFx0Y29uc3QgeSA9IHN0ZXAgKiAwLjI7XFxuXFx0XFx0Y29uc3QgeiA9IHIgKiBNYXRoLnNpbihhbmcpO1xcblxcdFxcdGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gd2lkdGgpO1xcblxcdFxcdG5vZGVzMS5wdXNoKFt4LCB5LCB6LCB0aGlja25lc3NdKTtcXG5cXHR9XFxuXFx0bm9kZXMxLnB1c2goWzAsIDEwMDAsIDAsIDBdKTtcXG5cXHRmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMS5sZW5ndGg7IGkrKykge1xcblxcdFxcdGNvbnN0IHV2MDogQXJyYXlOdW1iZXIyID0gWyhpIC0gMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdO1xcblxcdFxcdGNvbnN0IHV2MTogQXJyYXlOdW1iZXIyID0gWyhpICsgMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdO1xcblxcdFxcdGRhdGExLmFkZChub2RlczFbaSAtIDFdLCBub2RlczFbaV0sIHV2MCwgdXYxKTtcXG5cXHR9XFxuXFx0Y29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChcXG5cXHRcXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcXFwiI2Y0NFxcXCIsIFxcXCIjZmY0XFxcIiwgXFxcIiM0ZjRcXFwiLCBcXFwiIzRmZlxcXCIsIFxcXCIjNDRmXFxcIl0pLFxcblxcdCk7XFxuXFx0Y29uc3Qgc2VnbWVudHMgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzKGNvbnRleHQsIHtcXG5cXHRcXHRkYXRhc2V0OiBkYXRhMS5tYWtlRGF0YXNldCxcXG5cXHRcXHRyb3VuZG5lc3M6IDE2LFxcblxcdFxcdG1pblJhZGl1czogMixcXG5cXHRcXHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoe1xcblxcdFxcdFxcdHRleHR1cmU6IHBhbGV0dGUsXFxuXFx0XFx0fSksXFxuXFx0fSk7XFxuXFx0c2VnbWVudHMuZGVidWcoKTtcXG5cXHRzZWdtZW50cy50cmFuc2ZvLm9yYml0QXJvdW5kWih0Z2RDYWxjRGVnVG9SYWQoOTApKTtcXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuXFx0XFx0Y2hpbGRyZW46IFtzZWdtZW50c10sXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0Y29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudEhvdmVyLmFkZExpc3RlbmVyKChldmVudCkgPT4ge1xcblxcdFxcdGNvbnN0IHsgeCwgeSB9ID0gZXZlbnQuY3VycmVudDtcXG5cXHRcXHRjb25zdCBbUiwgRywgQl0gPSBjb250ZXh0LnJlYWRQaXhlbCh4LCB5KTtcXG5cXHRcXHRjb25zb2xlLmxvZyhcXG5cXHRcXHRcXHRgJWMoJHtSfSwgJHtHfSwgJHtCfSldYCxcXG5cXHRcXHRcXHRgY29sb3I6Izc3NztiYWNrZ3JvdW5kOnJnYigke1J9LCR7R30sJHtCfSlgLFxcblxcdFxcdCk7XFxuXFx0fSk7XFxuXFx0cmV0dXJuICh7IG1pblJhZGl1cyB9OiB7IG1pblJhZGl1czogbnVtYmVyIH0pID0+IHtcXG5cXHRcXHRzZWdtZW50cy5taW5SYWRpdXMgPSBtaW5SYWRpdXM7XFxuXFx0XFx0Y29udGV4dC5wYWludCgpO1xcblxcdH07XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0Z2l6bW9cXG5cXHRcXHRcXHRvcHRpb25zPXt7XFxuXFx0XFx0XFx0XFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcblxcdFxcdFxcdH19XFxuXFx0XFx0XFx0c2V0dGluZ3M9e3tcXG5cXHRcXHRcXHRcXHRtaW5SYWRpdXM6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcIm1pblJhZGl1c1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDIsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAwLFxcblxcdFxcdFxcdFxcdFxcdG1heDogMTYsXFxuXFx0XFx0XFx0XFx0XFx0c3RlcDogMSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpO1xcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0dHlwZSBBcnJheU51bWJlcjIsXG5cdHR5cGUgQXJyYXlOdW1iZXI0LFxuXHR0Z2RDYWxjRGVnVG9SYWQsXG5cdHRnZENhbGNSYWRUb0RlZyxcblx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcblx0VGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyU2VnbWVudHMsXG5cdFRnZFBhaW50ZXJTZWdtZW50c0RhdGEsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG5cdC8vICNiZWdpblxuXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNzU7XG5cdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRtYXhab29tOiAxMCxcblx0XHRtaW5ab29tOiAwLjAxLFxuXHRcdHNwZWVkWm9vbTogMSxcblx0fSk7XG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSk7XG5cdGNvbnN0IHJhZGl1cyA9IDEwO1xuXHRjb25zdCB3aWR0aCA9IDUwO1xuXHRjb25zdCBkYXRhMSA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKCk7XG5cdGNvbnN0IG5vZGVzMTogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV07XG5cdGZvciAobGV0IHN0ZXAgPSAtd2lkdGg7IHN0ZXAgPCB3aWR0aDsgc3RlcCsrKSB7XG5cdFx0Y29uc3QgYW5nID0gc3RlcCAqIDAuNTtcblx0XHRjb25zdCByID0gcmFkaXVzICogTWF0aC5jb3MoKHN0ZXAgKiBNYXRoLlBJICogMC41KSAvIHdpZHRoKTtcblx0XHRjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZyk7XG5cdFx0Y29uc3QgeSA9IHN0ZXAgKiAwLjI7XG5cdFx0Y29uc3QgeiA9IHIgKiBNYXRoLnNpbihhbmcpO1xuXHRcdGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gd2lkdGgpO1xuXHRcdG5vZGVzMS5wdXNoKFt4LCB5LCB6LCB0aGlja25lc3NdKTtcblx0fVxuXHRub2RlczEucHVzaChbMCwgMTAwMCwgMCwgMF0pO1xuXHRmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMS5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHV2MDogQXJyYXlOdW1iZXIyID0gWyhpIC0gMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdO1xuXHRcdGNvbnN0IHV2MTogQXJyYXlOdW1iZXIyID0gWyhpICsgMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdO1xuXHRcdGRhdGExLmFkZChub2RlczFbaSAtIDFdLCBub2RlczFbaV0sIHV2MCwgdXYxKTtcblx0fVxuXHRjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKFxuXHRcdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiI2Y0NFwiLCBcIiNmZjRcIiwgXCIjNGY0XCIsIFwiIzRmZlwiLCBcIiM0NGZcIl0pLFxuXHQpO1xuXHRjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xuXHRcdGRhdGFzZXQ6IGRhdGExLm1ha2VEYXRhc2V0LFxuXHRcdHJvdW5kbmVzczogMTYsXG5cdFx0bWluUmFkaXVzOiAyLFxuXHRcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XG5cdFx0XHR0ZXh0dXJlOiBwYWxldHRlLFxuXHRcdH0pLFxuXHR9KTtcblx0c2VnbWVudHMuZGVidWcoKTtcblx0c2VnbWVudHMudHJhbnNmby5vcmJpdEFyb3VuZFoodGdkQ2FsY0RlZ1RvUmFkKDkwKSk7XG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IFwibGVzc1wiLFxuXHRcdGNoaWxkcmVuOiBbc2VnbWVudHNdLFxuXHR9KTtcblx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKTtcblx0Y29udGV4dC5wYWludCgpO1xuXHQvLyAjZW5kXG5cdGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRIb3Zlci5hZGRMaXN0ZW5lcigoZXZlbnQpID0+IHtcblx0XHRjb25zdCB7IHgsIHkgfSA9IGV2ZW50LmN1cnJlbnQ7XG5cdFx0Y29uc3QgW1IsIEcsIEJdID0gY29udGV4dC5yZWFkUGl4ZWwoeCwgeSk7XG5cdFx0Y29uc29sZS5sb2coXG5cdFx0XHRgJWMoJHtSfSwgJHtHfSwgJHtCfSldYCxcblx0XHRcdGBjb2xvcjojNzc3O2JhY2tncm91bmQ6cmdiKCR7Un0sJHtHfSwke0J9KWAsXG5cdFx0KTtcblx0fSk7XG5cdHJldHVybiAoeyBtaW5SYWRpdXMgfTogeyBtaW5SYWRpdXM6IG51bWJlciB9KSA9PiB7XG5cdFx0c2VnbWVudHMubWluUmFkaXVzID0gbWluUmFkaXVzO1xuXHRcdGNvbnRleHQucGFpbnQoKTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGdpem1vXG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdH19XG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHRtaW5SYWRpdXM6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJtaW5SYWRpdXNcIixcblx0XHRcdFx0XHR2YWx1ZTogMixcblx0XHRcdFx0XHRtaW46IDAsXG5cdFx0XHRcdFx0bWF4OiAxNixcblx0XHRcdFx0XHRzdGVwOiAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDYWxjRGVnVG9SYWQiLCJ0Z2RDYW52YXNDcmVhdGVQYWxldHRlIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJTZWdtZW50cyIsIlRnZFBhaW50ZXJTZWdtZW50c0RhdGEiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJjbGVhciIsInJhZGl1cyIsIndpZHRoIiwiZGF0YTEiLCJub2RlczEiLCJzdGVwIiwiYW5nIiwiciIsIk1hdGgiLCJ4IiwieSIsInoiLCJ0aGlja25lc3MiLCJpIiwidXYwIiwidXYxIiwicGFsZXR0ZSIsInNlZ21lbnRzIiwic3RhdGUiLCJldmVudCIsIl9ldmVudF9jdXJyZW50IiwiX2NvbnRleHRfcmVhZFBpeGVsIiwiUiIsIkciLCJCIiwiY29uc29sZSIsIm1pblJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUNuQjtBQUVsQyxJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUE2bEQ7QUFDeG5ELElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLDBDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9B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