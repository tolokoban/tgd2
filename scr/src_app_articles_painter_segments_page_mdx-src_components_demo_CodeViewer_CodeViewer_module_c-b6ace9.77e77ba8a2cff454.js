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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zZWdtZW50c19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfYy1iNmFjZTkuNzdlNzdiYThhMmNmZjQ1NC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzL18vc2VnbWVudHMuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc2VnbWVudHMvXy9zZWdtZW50cy5kZW1vL3NlZ21lbnRzLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9zZWdtZW50cy5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIlxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA3NTtcXG5cXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0bWF4Wm9vbTogMTAsXFxuXFx0XFx0bWluWm9vbTogMC4wMSxcXG5cXHRcXHRzcGVlZFpvb206IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IHJhZGl1cyA9IDEwO1xcblxcdGNvbnN0IHdpZHRoID0gNTA7XFxuXFx0Y29uc3QgZGF0YTEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpO1xcblxcdGNvbnN0IG5vZGVzMTogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV07XFxuXFx0Zm9yIChsZXQgc3RlcCA9IC13aWR0aDsgc3RlcCA8IHdpZHRoOyBzdGVwKyspIHtcXG5cXHRcXHRjb25zdCBhbmcgPSBzdGVwICogMC41O1xcblxcdFxcdGNvbnN0IHIgPSByYWRpdXMgKiBNYXRoLmNvcygoc3RlcCAqIE1hdGguUEkgKiAwLjUpIC8gd2lkdGgpO1xcblxcdFxcdGNvbnN0IHggPSByICogTWF0aC5jb3MoYW5nKTtcXG5cXHRcXHRjb25zdCB5ID0gc3RlcCAqIDAuMjtcXG5cXHRcXHRjb25zdCB6ID0gciAqIE1hdGguc2luKGFuZyk7XFxuXFx0XFx0Y29uc3QgdGhpY2tuZXNzID0gTWF0aC5tYXgoMCwgMS4wIC0gTWF0aC5hYnMoc3RlcCkgLyB3aWR0aCk7XFxuXFx0XFx0bm9kZXMxLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pO1xcblxcdH1cXG5cXHRub2RlczEucHVzaChbMCwgMTAwMCwgMCwgMF0pO1xcblxcdGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZXMxLmxlbmd0aDsgaSsrKSB7XFxuXFx0XFx0Y29uc3QgdXYwOiBBcnJheU51bWJlcjIgPSBbKGkgLSAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF07XFxuXFx0XFx0Y29uc3QgdXYxOiBBcnJheU51bWJlcjIgPSBbKGkgKyAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF07XFxuXFx0XFx0ZGF0YTEuYWRkKG5vZGVzMVtpIC0gMV0sIG5vZGVzMVtpXSwgdXYwLCB1djEpO1xcblxcdH1cXG5cXHRjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKFxcblxcdFxcdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjZjQ0XFxcIiwgXFxcIiNmZjRcXFwiLCBcXFwiIzRmNFxcXCIsIFxcXCIjNGZmXFxcIiwgXFxcIiM0NGZcXFwiXSksXFxuXFx0KTtcXG5cXHRjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xcblxcdFxcdGRhdGFzZXQ6IGRhdGExLm1ha2VEYXRhc2V0LFxcblxcdFxcdHJvdW5kbmVzczogMTYsXFxuXFx0XFx0bWluUmFkaXVzOiAyLFxcblxcdFxcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XFxuXFx0XFx0XFx0dGV4dHVyZTogcGFsZXR0ZSxcXG5cXHRcXHR9KSxcXG5cXHR9KTtcXG5cXHRzZWdtZW50cy5kZWJ1ZygpO1xcblxcdHNlZ21lbnRzLnRyYW5zZm8ub3JiaXRBcm91bmRaKHRnZENhbGNEZWdUb1JhZCg5MCkpO1xcblxcdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IFxcXCJsZXNzXFxcIixcXG5cXHRcXHRjaGlsZHJlbjogW3NlZ21lbnRzXSxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dHlwZSBBcnJheU51bWJlcjIsXFxuXFx0dHlwZSBBcnJheU51bWJlcjQsXFxuXFx0dGdkQ2FsY0RlZ1RvUmFkLFxcblxcdHRnZENhbGNSYWRUb0RlZyxcXG5cXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcblxcdHR5cGUgVGdkQ29udGV4dCxcXG5cXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuXFx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxcblxcdFRnZE1hdGVyaWFsRmxhdFRleHR1cmUsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJTZWdtZW50cyxcXG5cXHRUZ2RQYWludGVyU2VnbWVudHNEYXRhLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxuXFx0d2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5pbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcblxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA3NTtcXG5cXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0bWF4Wm9vbTogMTAsXFxuXFx0XFx0bWluWm9vbTogMC4wMSxcXG5cXHRcXHRzcGVlZFpvb206IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IHJhZGl1cyA9IDEwO1xcblxcdGNvbnN0IHdpZHRoID0gNTA7XFxuXFx0Y29uc3QgZGF0YTEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpO1xcblxcdGNvbnN0IG5vZGVzMTogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV07XFxuXFx0Zm9yIChsZXQgc3RlcCA9IC13aWR0aDsgc3RlcCA8IHdpZHRoOyBzdGVwKyspIHtcXG5cXHRcXHRjb25zdCBhbmcgPSBzdGVwICogMC41O1xcblxcdFxcdGNvbnN0IHIgPSByYWRpdXMgKiBNYXRoLmNvcygoc3RlcCAqIE1hdGguUEkgKiAwLjUpIC8gd2lkdGgpO1xcblxcdFxcdGNvbnN0IHggPSByICogTWF0aC5jb3MoYW5nKTtcXG5cXHRcXHRjb25zdCB5ID0gc3RlcCAqIDAuMjtcXG5cXHRcXHRjb25zdCB6ID0gciAqIE1hdGguc2luKGFuZyk7XFxuXFx0XFx0Y29uc3QgdGhpY2tuZXNzID0gTWF0aC5tYXgoMCwgMS4wIC0gTWF0aC5hYnMoc3RlcCkgLyB3aWR0aCk7XFxuXFx0XFx0bm9kZXMxLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pO1xcblxcdH1cXG5cXHRub2RlczEucHVzaChbMCwgMTAwMCwgMCwgMF0pO1xcblxcdGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZXMxLmxlbmd0aDsgaSsrKSB7XFxuXFx0XFx0Y29uc3QgdXYwOiBBcnJheU51bWJlcjIgPSBbKGkgLSAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF07XFxuXFx0XFx0Y29uc3QgdXYxOiBBcnJheU51bWJlcjIgPSBbKGkgKyAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF07XFxuXFx0XFx0ZGF0YTEuYWRkKG5vZGVzMVtpIC0gMV0sIG5vZGVzMVtpXSwgdXYwLCB1djEpO1xcblxcdH1cXG5cXHRjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKFxcblxcdFxcdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjZjQ0XFxcIiwgXFxcIiNmZjRcXFwiLCBcXFwiIzRmNFxcXCIsIFxcXCIjNGZmXFxcIiwgXFxcIiM0NGZcXFwiXSksXFxuXFx0KTtcXG5cXHRjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xcblxcdFxcdGRhdGFzZXQ6IGRhdGExLm1ha2VEYXRhc2V0LFxcblxcdFxcdHJvdW5kbmVzczogMTYsXFxuXFx0XFx0bWluUmFkaXVzOiAyLFxcblxcdFxcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XFxuXFx0XFx0XFx0dGV4dHVyZTogcGFsZXR0ZSxcXG5cXHRcXHR9KSxcXG5cXHR9KTtcXG5cXHRzZWdtZW50cy5kZWJ1ZygpO1xcblxcdHNlZ21lbnRzLnRyYW5zZm8ub3JiaXRBcm91bmRaKHRnZENhbGNEZWdUb1JhZCg5MCkpO1xcblxcdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IFxcXCJsZXNzXFxcIixcXG5cXHRcXHRjaGlsZHJlbjogW3NlZ21lbnRzXSxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHRjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50SG92ZXIuYWRkTGlzdGVuZXIoKGV2ZW50KSA9PiB7XFxuXFx0XFx0Y29uc3QgeyB4LCB5IH0gPSBldmVudC5jdXJyZW50O1xcblxcdFxcdGNvbnN0IFtSLCBHLCBCXSA9IGNvbnRleHQucmVhZFBpeGVsKHgsIHkpO1xcblxcdFxcdGNvbnNvbGUubG9nKFxcblxcdFxcdFxcdGAlYygke1J9LCAke0d9LCAke0J9KV1gLFxcblxcdFxcdFxcdGBjb2xvcjojNzc3O2JhY2tncm91bmQ6cmdiKCR7Un0sJHtHfSwke0J9KWAsXFxuXFx0XFx0KTtcXG5cXHR9KTtcXG5cXHRyZXR1cm4gKHsgbWluUmFkaXVzIH06IHsgbWluUmFkaXVzOiBudW1iZXIgfSkgPT4ge1xcblxcdFxcdHNlZ21lbnRzLm1pblJhZGl1cyA9IG1pblJhZGl1cztcXG5cXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0fTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRnaXptb1xcblxcdFxcdFxcdG9wdGlvbnM9e3tcXG5cXHRcXHRcXHRcXHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRzZXR0aW5ncz17e1xcblxcdFxcdFxcdFxcdG1pblJhZGl1czoge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwibWluUmFkaXVzXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMixcXG5cXHRcXHRcXHRcXHRcXHRtaW46IDAsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiAxNixcXG5cXHRcXHRcXHRcXHRcXHRzdGVwOiAxLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHQvPlxcblxcdCk7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHR0eXBlIEFycmF5TnVtYmVyMixcblx0dHlwZSBBcnJheU51bWJlcjQsXG5cdHRnZENhbGNEZWdUb1JhZCxcblx0dGdkQ2FsY1JhZFRvRGVnLFxuXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHRUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJTZWdtZW50cyxcblx0VGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcblx0Ly8gI2JlZ2luXG5cdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA3NTtcblx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG5cdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdG1heFpvb206IDEwLFxuXHRcdG1pblpvb206IDAuMDEsXG5cdFx0c3BlZWRab29tOiAxLFxuXHR9KTtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLFxuXHRcdGRlcHRoOiAxLFxuXHR9KTtcblx0Y29uc3QgcmFkaXVzID0gMTA7XG5cdGNvbnN0IHdpZHRoID0gNTA7XG5cdGNvbnN0IGRhdGExID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKTtcblx0Y29uc3Qgbm9kZXMxOiBBcnJheU51bWJlcjRbXSA9IFtbMCwgLTEwMDAsIDAsIDBdXTtcblx0Zm9yIChsZXQgc3RlcCA9IC13aWR0aDsgc3RlcCA8IHdpZHRoOyBzdGVwKyspIHtcblx0XHRjb25zdCBhbmcgPSBzdGVwICogMC41O1xuXHRcdGNvbnN0IHIgPSByYWRpdXMgKiBNYXRoLmNvcygoc3RlcCAqIE1hdGguUEkgKiAwLjUpIC8gd2lkdGgpO1xuXHRcdGNvbnN0IHggPSByICogTWF0aC5jb3MoYW5nKTtcblx0XHRjb25zdCB5ID0gc3RlcCAqIDAuMjtcblx0XHRjb25zdCB6ID0gciAqIE1hdGguc2luKGFuZyk7XG5cdFx0Y29uc3QgdGhpY2tuZXNzID0gTWF0aC5tYXgoMCwgMS4wIC0gTWF0aC5hYnMoc3RlcCkgLyB3aWR0aCk7XG5cdFx0bm9kZXMxLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pO1xuXHR9XG5cdG5vZGVzMS5wdXNoKFswLCAxMDAwLCAwLCAwXSk7XG5cdGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZXMxLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdXYwOiBBcnJheU51bWJlcjIgPSBbKGkgLSAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF07XG5cdFx0Y29uc3QgdXYxOiBBcnJheU51bWJlcjIgPSBbKGkgKyAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF07XG5cdFx0ZGF0YTEuYWRkKG5vZGVzMVtpIC0gMV0sIG5vZGVzMVtpXSwgdXYwLCB1djEpO1xuXHR9XG5cdGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoXG5cdFx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjZjQ0XCIsIFwiI2ZmNFwiLCBcIiM0ZjRcIiwgXCIjNGZmXCIsIFwiIzQ0ZlwiXSksXG5cdCk7XG5cdGNvbnN0IHNlZ21lbnRzID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50cyhjb250ZXh0LCB7XG5cdFx0ZGF0YXNldDogZGF0YTEubWFrZURhdGFzZXQsXG5cdFx0cm91bmRuZXNzOiAxNixcblx0XHRtaW5SYWRpdXM6IDIsXG5cdFx0bWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHtcblx0XHRcdHRleHR1cmU6IHBhbGV0dGUsXG5cdFx0fSksXG5cdH0pO1xuXHRzZWdtZW50cy5kZWJ1ZygpO1xuXHRzZWdtZW50cy50cmFuc2ZvLm9yYml0QXJvdW5kWih0Z2RDYWxjRGVnVG9SYWQoOTApKTtcblx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRkZXB0aDogXCJsZXNzXCIsXG5cdFx0Y2hpbGRyZW46IFtzZWdtZW50c10sXG5cdH0pO1xuXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xuXHRjb250ZXh0LnBhaW50KCk7XG5cdC8vICNlbmRcblx0Y29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudEhvdmVyLmFkZExpc3RlbmVyKChldmVudCkgPT4ge1xuXHRcdGNvbnN0IHsgeCwgeSB9ID0gZXZlbnQuY3VycmVudDtcblx0XHRjb25zdCBbUiwgRywgQl0gPSBjb250ZXh0LnJlYWRQaXhlbCh4LCB5KTtcblx0XHRjb25zb2xlLmxvZyhcblx0XHRcdGAlYygke1J9LCAke0d9LCAke0J9KV1gLFxuXHRcdFx0YGNvbG9yOiM3Nzc7YmFja2dyb3VuZDpyZ2IoJHtSfSwke0d9LCR7Qn0pYCxcblx0XHQpO1xuXHR9KTtcblx0cmV0dXJuICh7IG1pblJhZGl1cyB9OiB7IG1pblJhZGl1czogbnVtYmVyIH0pID0+IHtcblx0XHRzZWdtZW50cy5taW5SYWRpdXMgPSBtaW5SYWRpdXM7XG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0Z2l6bW9cblx0XHRcdG9wdGlvbnM9e3tcblx0XHRcdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdFx0fX1cblx0XHRcdHNldHRpbmdzPXt7XG5cdFx0XHRcdG1pblJhZGl1czoge1xuXHRcdFx0XHRcdGxhYmVsOiBcIm1pblJhZGl1c1wiLFxuXHRcdFx0XHRcdHZhbHVlOiAyLFxuXHRcdFx0XHRcdG1pbjogMCxcblx0XHRcdFx0XHRtYXg6IDE2LFxuXHRcdFx0XHRcdHN0ZXA6IDEsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENhbGNEZWdUb1JhZCIsInRnZENhbnZhc0NyZWF0ZVBhbGV0dGUiLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlclNlZ21lbnRzIiwiVGdkUGFpbnRlclNlZ21lbnRzRGF0YSIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlZpZXciLCJpbml0IiwiY29udGV4dCIsImNsZWFyIiwicmFkaXVzIiwid2lkdGgiLCJkYXRhMSIsIm5vZGVzMSIsInN0ZXAiLCJhbmciLCJyIiwiTWF0aCIsIngiLCJ5IiwieiIsInRoaWNrbmVzcyIsImkiLCJ1djAiLCJ1djEiLCJwYWxldHRlIiwic2VnbWVudHMiLCJzdGF0ZSIsImV2ZW50IiwiX2V2ZW50X2N1cnJlbnQiLCJfY29udGV4dF9yZWFkUGl4ZWwiLCJSIiwiRyIsIkIiLCJjb25zb2xlIiwibWluUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ25CO0FBRWxDLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQTZsRDtBQUN4bkQsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osMENBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUd0QyxrREFBQ04sdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FBT00sT0FBT0gs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