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
    "Detail #1": "\tcontext.camera.transfo.distance = 75\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 10,\n\t\tminZoom: 0.01,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.1, 0.1, 1],\n\t\tdepth: 1,\n\t})\n\tconst radius = 10\n\tconst width = 50\n\tconst data1 = new TgdPainterSegmentsData()\n\tconst nodes1: ArrayNumber4[] = [[0, -1000, 0, 0]]\n\tfor (let step = -width; step < width; step++) {\n\t\tconst ang = step * 0.5\n\t\tconst r = radius * Math.cos((step * Math.PI * 0.5) / width)\n\t\tconst x = r * Math.cos(ang)\n\t\tconst y = step * 0.2\n\t\tconst z = r * Math.sin(ang)\n\t\tconst thickness = Math.max(0, 1.0 - Math.abs(step) / width)\n\t\tnodes1.push([x, y, z, thickness])\n\t}\n\tnodes1.push([0, 1000, 0, 0])\n\tfor (let i = 1; i < nodes1.length; i++) {\n\t\tconst uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0]\n\t\tconst uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0]\n\t\tdata1.add(nodes1[i - 1], nodes1[i], uv0, uv1)\n\t}\n\tconst palette = new TgdTexture2D(context).loadBitmap(\n\t\ttgdCanvasCreatePalette([\"#f44\", \"#ff4\", \"#4f4\", \"#4ff\", \"#44f\"]),\n\t)\n\tconst material2 = new TgdMaterialFlatTexture({\n\t\ttexture: palette,\n\t})\n\tconst material = TgdMaterial.extends(material2, {\n\t\tvertexShaderCode: [\"varUV = uv;\"],\n\t\tfragmentShaderCode: [\"return texture(uniTextureColor, varUV);\"],\n\t})\n\tconsole.log(\"🐞 [segments.demo@62] material =\", material) // @FIXME: Remove this line written on 2026-06-05 at 14:33\n\tconst segments = new TgdPainterSegments(context, {\n\t\tdataset: data1.makeDataset,\n\t\troundness: 16,\n\t\tminRadius: 2,\n\t\tmaterial,\n\t})\n\tsegments.debug()\n\tsegments.transfo.orbitAroundZ(tgdCalcDegToRad(90))\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tchildren: [segments],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()"
};
var FULL = "import {\n\ttype ArrayNumber2,\n\ttype ArrayNumber4,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdMaterial,\n\tTgdMaterialDiffuse,\n\tTgdMaterialFlatTexture,\n\tTgdPainterClear,\n\tTgdPainterSegments,\n\tTgdPainterSegmentsData,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdCalcDegToRad,\n\ttgdCalcRadToDeg,\n\ttgdCanvasCreatePalette,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n\tcontext.camera.transfo.distance = 75\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 10,\n\t\tminZoom: 0.01,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.1, 0.1, 1],\n\t\tdepth: 1,\n\t})\n\tconst radius = 10\n\tconst width = 50\n\tconst data1 = new TgdPainterSegmentsData()\n\tconst nodes1: ArrayNumber4[] = [[0, -1000, 0, 0]]\n\tfor (let step = -width; step < width; step++) {\n\t\tconst ang = step * 0.5\n\t\tconst r = radius * Math.cos((step * Math.PI * 0.5) / width)\n\t\tconst x = r * Math.cos(ang)\n\t\tconst y = step * 0.2\n\t\tconst z = r * Math.sin(ang)\n\t\tconst thickness = Math.max(0, 1.0 - Math.abs(step) / width)\n\t\tnodes1.push([x, y, z, thickness])\n\t}\n\tnodes1.push([0, 1000, 0, 0])\n\tfor (let i = 1; i < nodes1.length; i++) {\n\t\tconst uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0]\n\t\tconst uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0]\n\t\tdata1.add(nodes1[i - 1], nodes1[i], uv0, uv1)\n\t}\n\tconst palette = new TgdTexture2D(context).loadBitmap(\n\t\ttgdCanvasCreatePalette([\"#f44\", \"#ff4\", \"#4f4\", \"#4ff\", \"#44f\"]),\n\t)\n\tconst material2 = new TgdMaterialFlatTexture({\n\t\ttexture: palette,\n\t})\n\tconst material = TgdMaterial.extends(material2, {\n\t\tvertexShaderCode: [\"varUV = uv;\"],\n\t\tfragmentShaderCode: [\"return texture(uniTextureColor, varUV);\"],\n\t})\n\tconsole.log(\"🐞 [segments.demo@62] material =\", material) // @FIXME: Remove this line written on 2026-06-05 at 14:33\n\tconst segments = new TgdPainterSegments(context, {\n\t\tdataset: data1.makeDataset,\n\t\troundness: 16,\n\t\tminRadius: 2,\n\t\tmaterial,\n\t})\n\tsegments.debug()\n\tsegments.transfo.orbitAroundZ(tgdCalcDegToRad(90))\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tchildren: [segments],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()\n\tcontext.inputs.pointer.eventHover.addListener((event) => {\n\t\tconst { x, y } = event.current\n\t\tconst [R, G, B] = context.readPixel(x, y)\n\t\tconsole.log(\n\t\t\t`%c(${R}, ${G}, ${B})]`,\n\t\t\t`color:#777;background:rgb(${R},${G},${B})`,\n\t\t)\n\t})\n\treturn ({ minRadius }: { minRadius: number }) => {\n\t\tsegments.minRadius = minRadius\n\t\tcontext.paint()\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tminRadius: {\n\t\t\t\t\tlabel: \"minRadius\",\n\t\t\t\t\tvalue: 2,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 16,\n\t\t\t\t\tstep: 1,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t)\n}\n";
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
    var material2 = new _tolokoban_tgd__rspack_import_1.TgdMaterialFlatTexture({
        texture: palette
    });
    var material = _tolokoban_tgd__rspack_import_1.TgdMaterial["extends"](material2, {
        vertexShaderCode: [
            "varUV = uv;"
        ],
        fragmentShaderCode: [
            "return texture(uniTextureColor, varUV);"
        ]
    });
    console.log("🐞 [segments.demo@62] material =", material); // @FIXME: Remove this line written on 2026-06-05 at 14:33
    var segments = new _tolokoban_tgd__rspack_import_1.TgdPainterSegments(context, {
        dataset: data1.makeDataset,
        roundness: 16,
        minRadius: 2,
        material: material
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
        lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zZWdtZW50c19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfYy1iNmFjZTkuMDk4MGYyMTc5MmQwMjVlYS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzL18vc2VnbWVudHMuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc2VnbWVudHMvXy9zZWdtZW50cy5kZW1vL3NlZ21lbnRzLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9zZWdtZW50cy5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIlxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA3NVxcblxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcblxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRtYXhab29tOiAxMCxcXG5cXHRcXHRtaW5ab29tOiAwLjAxLFxcblxcdFxcdHNwZWVkWm9vbTogMSxcXG5cXHR9KVxcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KVxcblxcdGNvbnN0IHJhZGl1cyA9IDEwXFxuXFx0Y29uc3Qgd2lkdGggPSA1MFxcblxcdGNvbnN0IGRhdGExID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKVxcblxcdGNvbnN0IG5vZGVzMTogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV1cXG5cXHRmb3IgKGxldCBzdGVwID0gLXdpZHRoOyBzdGVwIDwgd2lkdGg7IHN0ZXArKykge1xcblxcdFxcdGNvbnN0IGFuZyA9IHN0ZXAgKiAwLjVcXG5cXHRcXHRjb25zdCByID0gcmFkaXVzICogTWF0aC5jb3MoKHN0ZXAgKiBNYXRoLlBJICogMC41KSAvIHdpZHRoKVxcblxcdFxcdGNvbnN0IHggPSByICogTWF0aC5jb3MoYW5nKVxcblxcdFxcdGNvbnN0IHkgPSBzdGVwICogMC4yXFxuXFx0XFx0Y29uc3QgeiA9IHIgKiBNYXRoLnNpbihhbmcpXFxuXFx0XFx0Y29uc3QgdGhpY2tuZXNzID0gTWF0aC5tYXgoMCwgMS4wIC0gTWF0aC5hYnMoc3RlcCkgLyB3aWR0aClcXG5cXHRcXHRub2RlczEucHVzaChbeCwgeSwgeiwgdGhpY2tuZXNzXSlcXG5cXHR9XFxuXFx0bm9kZXMxLnB1c2goWzAsIDEwMDAsIDAsIDBdKVxcblxcdGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZXMxLmxlbmd0aDsgaSsrKSB7XFxuXFx0XFx0Y29uc3QgdXYwOiBBcnJheU51bWJlcjIgPSBbKGkgLSAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF1cXG5cXHRcXHRjb25zdCB1djE6IEFycmF5TnVtYmVyMiA9IFsoaSArIDAuNSkgLyAobm9kZXMxLmxlbmd0aCArIDEpLCAwXVxcblxcdFxcdGRhdGExLmFkZChub2RlczFbaSAtIDFdLCBub2RlczFbaV0sIHV2MCwgdXYxKVxcblxcdH1cXG5cXHRjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKFxcblxcdFxcdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjZjQ0XFxcIiwgXFxcIiNmZjRcXFwiLCBcXFwiIzRmNFxcXCIsIFxcXCIjNGZmXFxcIiwgXFxcIiM0NGZcXFwiXSksXFxuXFx0KVxcblxcdGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHtcXG5cXHRcXHR0ZXh0dXJlOiBwYWxldHRlLFxcblxcdH0pXFxuXFx0Y29uc3QgbWF0ZXJpYWwgPSBUZ2RNYXRlcmlhbC5leHRlbmRzKG1hdGVyaWFsMiwge1xcblxcdFxcdHZlcnRleFNoYWRlckNvZGU6IFtcXFwidmFyVVYgPSB1djtcXFwiXSxcXG5cXHRcXHRmcmFnbWVudFNoYWRlckNvZGU6IFtcXFwicmV0dXJuIHRleHR1cmUodW5pVGV4dHVyZUNvbG9yLCB2YXJVVik7XFxcIl0sXFxuXFx0fSlcXG5cXHRjb25zb2xlLmxvZyhcXFwi8J+QniBbc2VnbWVudHMuZGVtb0A2Ml0gbWF0ZXJpYWwgPVxcXCIsIG1hdGVyaWFsKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA2LTA1IGF0IDE0OjMzXFxuXFx0Y29uc3Qgc2VnbWVudHMgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzKGNvbnRleHQsIHtcXG5cXHRcXHRkYXRhc2V0OiBkYXRhMS5tYWtlRGF0YXNldCxcXG5cXHRcXHRyb3VuZG5lc3M6IDE2LFxcblxcdFxcdG1pblJhZGl1czogMixcXG5cXHRcXHRtYXRlcmlhbCxcXG5cXHR9KVxcblxcdHNlZ21lbnRzLmRlYnVnKClcXG5cXHRzZWdtZW50cy50cmFuc2ZvLm9yYml0QXJvdW5kWih0Z2RDYWxjRGVnVG9SYWQoOTApKVxcblxcdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IFxcXCJsZXNzXFxcIixcXG5cXHRcXHRjaGlsZHJlbjogW3NlZ21lbnRzXSxcXG5cXHR9KVxcblxcdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcXG5cXHRjb250ZXh0LnBhaW50KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dHlwZSBBcnJheU51bWJlcjIsXFxuXFx0dHlwZSBBcnJheU51bWJlcjQsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHRUZ2RNYXRlcmlhbCxcXG5cXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuXFx0VGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlclNlZ21lbnRzLFxcblxcdFRnZFBhaW50ZXJTZWdtZW50c0RhdGEsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFRleHR1cmUyRCxcXG5cXHR0Z2RDYWxjRGVnVG9SYWQsXFxuXFx0dGdkQ2FsY1JhZFRvRGVnLFxcblxcdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXFxuXFx0d2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG5cXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNzVcXG5cXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0bWF4Wm9vbTogMTAsXFxuXFx0XFx0bWluWm9vbTogMC4wMSxcXG5cXHRcXHRzcGVlZFpvb206IDEsXFxuXFx0fSlcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGNvbG9yOiBbMC4xLCAwLjEsIDAuMSwgMV0sXFxuXFx0XFx0ZGVwdGg6IDEsXFxuXFx0fSlcXG5cXHRjb25zdCByYWRpdXMgPSAxMFxcblxcdGNvbnN0IHdpZHRoID0gNTBcXG5cXHRjb25zdCBkYXRhMSA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKClcXG5cXHRjb25zdCBub2RlczE6IEFycmF5TnVtYmVyNFtdID0gW1swLCAtMTAwMCwgMCwgMF1dXFxuXFx0Zm9yIChsZXQgc3RlcCA9IC13aWR0aDsgc3RlcCA8IHdpZHRoOyBzdGVwKyspIHtcXG5cXHRcXHRjb25zdCBhbmcgPSBzdGVwICogMC41XFxuXFx0XFx0Y29uc3QgciA9IHJhZGl1cyAqIE1hdGguY29zKChzdGVwICogTWF0aC5QSSAqIDAuNSkgLyB3aWR0aClcXG5cXHRcXHRjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZylcXG5cXHRcXHRjb25zdCB5ID0gc3RlcCAqIDAuMlxcblxcdFxcdGNvbnN0IHogPSByICogTWF0aC5zaW4oYW5nKVxcblxcdFxcdGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gd2lkdGgpXFxuXFx0XFx0bm9kZXMxLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pXFxuXFx0fVxcblxcdG5vZGVzMS5wdXNoKFswLCAxMDAwLCAwLCAwXSlcXG5cXHRmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMS5sZW5ndGg7IGkrKykge1xcblxcdFxcdGNvbnN0IHV2MDogQXJyYXlOdW1iZXIyID0gWyhpIC0gMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdXFxuXFx0XFx0Y29uc3QgdXYxOiBBcnJheU51bWJlcjIgPSBbKGkgKyAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF1cXG5cXHRcXHRkYXRhMS5hZGQobm9kZXMxW2kgLSAxXSwgbm9kZXMxW2ldLCB1djAsIHV2MSlcXG5cXHR9XFxuXFx0Y29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChcXG5cXHRcXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcXFwiI2Y0NFxcXCIsIFxcXCIjZmY0XFxcIiwgXFxcIiM0ZjRcXFwiLCBcXFwiIzRmZlxcXCIsIFxcXCIjNDRmXFxcIl0pLFxcblxcdClcXG5cXHRjb25zdCBtYXRlcmlhbDIgPSBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XFxuXFx0XFx0dGV4dHVyZTogcGFsZXR0ZSxcXG5cXHR9KVxcblxcdGNvbnN0IG1hdGVyaWFsID0gVGdkTWF0ZXJpYWwuZXh0ZW5kcyhtYXRlcmlhbDIsIHtcXG5cXHRcXHR2ZXJ0ZXhTaGFkZXJDb2RlOiBbXFxcInZhclVWID0gdXY7XFxcIl0sXFxuXFx0XFx0ZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxcInJldHVybiB0ZXh0dXJlKHVuaVRleHR1cmVDb2xvciwgdmFyVVYpO1xcXCJdLFxcblxcdH0pXFxuXFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW3NlZ21lbnRzLmRlbW9ANjJdIG1hdGVyaWFsID1cXFwiLCBtYXRlcmlhbCkgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNi0wNSBhdCAxNDozM1xcblxcdGNvbnN0IHNlZ21lbnRzID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50cyhjb250ZXh0LCB7XFxuXFx0XFx0ZGF0YXNldDogZGF0YTEubWFrZURhdGFzZXQsXFxuXFx0XFx0cm91bmRuZXNzOiAxNixcXG5cXHRcXHRtaW5SYWRpdXM6IDIsXFxuXFx0XFx0bWF0ZXJpYWwsXFxuXFx0fSlcXG5cXHRzZWdtZW50cy5kZWJ1ZygpXFxuXFx0c2VnbWVudHMudHJhbnNmby5vcmJpdEFyb3VuZFoodGdkQ2FsY0RlZ1RvUmFkKDkwKSlcXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuXFx0XFx0Y2hpbGRyZW46IFtzZWdtZW50c10sXFxuXFx0fSlcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXFxuXFx0Y29udGV4dC5wYWludCgpXFxuXFx0Y29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudEhvdmVyLmFkZExpc3RlbmVyKChldmVudCkgPT4ge1xcblxcdFxcdGNvbnN0IHsgeCwgeSB9ID0gZXZlbnQuY3VycmVudFxcblxcdFxcdGNvbnN0IFtSLCBHLCBCXSA9IGNvbnRleHQucmVhZFBpeGVsKHgsIHkpXFxuXFx0XFx0Y29uc29sZS5sb2coXFxuXFx0XFx0XFx0YCVjKCR7Un0sICR7R30sICR7Qn0pXWAsXFxuXFx0XFx0XFx0YGNvbG9yOiM3Nzc7YmFja2dyb3VuZDpyZ2IoJHtSfSwke0d9LCR7Qn0pYCxcXG5cXHRcXHQpXFxuXFx0fSlcXG5cXHRyZXR1cm4gKHsgbWluUmFkaXVzIH06IHsgbWluUmFkaXVzOiBudW1iZXIgfSkgPT4ge1xcblxcdFxcdHNlZ21lbnRzLm1pblJhZGl1cyA9IG1pblJhZGl1c1xcblxcdFxcdGNvbnRleHQucGFpbnQoKVxcblxcdH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRnaXptb1xcblxcdFxcdFxcdG9wdGlvbnM9e3tcXG5cXHRcXHRcXHRcXHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRzZXR0aW5ncz17e1xcblxcdFxcdFxcdFxcdG1pblJhZGl1czoge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwibWluUmFkaXVzXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMixcXG5cXHRcXHRcXHRcXHRcXHRtaW46IDAsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiAxNixcXG5cXHRcXHRcXHRcXHRcXHRzdGVwOiAxLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHQvPlxcblxcdClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdHR5cGUgQXJyYXlOdW1iZXIyLFxuXHR0eXBlIEFycmF5TnVtYmVyNCxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdFRnZE1hdGVyaWFsLFxuXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXG5cdFRnZE1hdGVyaWFsRmxhdFRleHR1cmUsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlclNlZ21lbnRzLFxuXHRUZ2RQYWludGVyU2VnbWVudHNEYXRhLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcblx0dGdkQ2FsY0RlZ1RvUmFkLFxuXHR0Z2RDYWxjUmFkVG9EZWcsXG5cdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG5cdC8vICNiZWdpblxuXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNzVcblx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG5cdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdG1heFpvb206IDEwLFxuXHRcdG1pblpvb206IDAuMDEsXG5cdFx0c3BlZWRab29tOiAxLFxuXHR9KVxuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMC4xLCAwLjEsIDAuMSwgMV0sXG5cdFx0ZGVwdGg6IDEsXG5cdH0pXG5cdGNvbnN0IHJhZGl1cyA9IDEwXG5cdGNvbnN0IHdpZHRoID0gNTBcblx0Y29uc3QgZGF0YTEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXG5cdGNvbnN0IG5vZGVzMTogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV1cblx0Zm9yIChsZXQgc3RlcCA9IC13aWR0aDsgc3RlcCA8IHdpZHRoOyBzdGVwKyspIHtcblx0XHRjb25zdCBhbmcgPSBzdGVwICogMC41XG5cdFx0Y29uc3QgciA9IHJhZGl1cyAqIE1hdGguY29zKChzdGVwICogTWF0aC5QSSAqIDAuNSkgLyB3aWR0aClcblx0XHRjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZylcblx0XHRjb25zdCB5ID0gc3RlcCAqIDAuMlxuXHRcdGNvbnN0IHogPSByICogTWF0aC5zaW4oYW5nKVxuXHRcdGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gd2lkdGgpXG5cdFx0bm9kZXMxLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pXG5cdH1cblx0bm9kZXMxLnB1c2goWzAsIDEwMDAsIDAsIDBdKVxuXHRmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMS5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHV2MDogQXJyYXlOdW1iZXIyID0gWyhpIC0gMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdXG5cdFx0Y29uc3QgdXYxOiBBcnJheU51bWJlcjIgPSBbKGkgKyAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF1cblx0XHRkYXRhMS5hZGQobm9kZXMxW2kgLSAxXSwgbm9kZXMxW2ldLCB1djAsIHV2MSlcblx0fVxuXHRjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKFxuXHRcdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiI2Y0NFwiLCBcIiNmZjRcIiwgXCIjNGY0XCIsIFwiIzRmZlwiLCBcIiM0NGZcIl0pLFxuXHQpXG5cdGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHtcblx0XHR0ZXh0dXJlOiBwYWxldHRlLFxuXHR9KVxuXHRjb25zdCBtYXRlcmlhbCA9IFRnZE1hdGVyaWFsLmV4dGVuZHMobWF0ZXJpYWwyLCB7XG5cdFx0dmVydGV4U2hhZGVyQ29kZTogW1widmFyVVYgPSB1djtcIl0sXG5cdFx0ZnJhZ21lbnRTaGFkZXJDb2RlOiBbXCJyZXR1cm4gdGV4dHVyZSh1bmlUZXh0dXJlQ29sb3IsIHZhclVWKTtcIl0sXG5cdH0pXG5cdGNvbnNvbGUubG9nKFwi8J+QniBbc2VnbWVudHMuZGVtb0A2Ml0gbWF0ZXJpYWwgPVwiLCBtYXRlcmlhbCkgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNi0wNSBhdCAxNDozM1xuXHRjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xuXHRcdGRhdGFzZXQ6IGRhdGExLm1ha2VEYXRhc2V0LFxuXHRcdHJvdW5kbmVzczogMTYsXG5cdFx0bWluUmFkaXVzOiAyLFxuXHRcdG1hdGVyaWFsLFxuXHR9KVxuXHRzZWdtZW50cy5kZWJ1ZygpXG5cdHNlZ21lbnRzLnRyYW5zZm8ub3JiaXRBcm91bmRaKHRnZENhbGNEZWdUb1JhZCg5MCkpXG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IFwibGVzc1wiLFxuXHRcdGNoaWxkcmVuOiBbc2VnbWVudHNdLFxuXHR9KVxuXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXG5cdGNvbnRleHQucGFpbnQoKVxuXHQvLyAjZW5kXG5cdGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRIb3Zlci5hZGRMaXN0ZW5lcigoZXZlbnQpID0+IHtcblx0XHRjb25zdCB7IHgsIHkgfSA9IGV2ZW50LmN1cnJlbnRcblx0XHRjb25zdCBbUiwgRywgQl0gPSBjb250ZXh0LnJlYWRQaXhlbCh4LCB5KVxuXHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0YCVjKCR7Un0sICR7R30sICR7Qn0pXWAsXG5cdFx0XHRgY29sb3I6Izc3NztiYWNrZ3JvdW5kOnJnYigke1J9LCR7R30sJHtCfSlgLFxuXHRcdClcblx0fSlcblx0cmV0dXJuICh7IG1pblJhZGl1cyB9OiB7IG1pblJhZGl1czogbnVtYmVyIH0pID0+IHtcblx0XHRzZWdtZW50cy5taW5SYWRpdXMgPSBtaW5SYWRpdXNcblx0XHRjb250ZXh0LnBhaW50KClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0Z2l6bW9cblx0XHRcdG9wdGlvbnM9e3tcblx0XHRcdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdFx0fX1cblx0XHRcdHNldHRpbmdzPXt7XG5cdFx0XHRcdG1pblJhZGl1czoge1xuXHRcdFx0XHRcdGxhYmVsOiBcIm1pblJhZGl1c1wiLFxuXHRcdFx0XHRcdHZhbHVlOiAyLFxuXHRcdFx0XHRcdG1pbjogMCxcblx0XHRcdFx0XHRtYXg6IDE2LFxuXHRcdFx0XHRcdHN0ZXA6IDEsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdClcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkTWF0ZXJpYWwiLCJUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlclNlZ21lbnRzIiwiVGdkUGFpbnRlclNlZ21lbnRzRGF0YSIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsInRnZENhbGNEZWdUb1JhZCIsInRnZENhbnZhc0NyZWF0ZVBhbGV0dGUiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJjbGVhciIsInJhZGl1cyIsIndpZHRoIiwiZGF0YTEiLCJub2RlczEiLCJzdGVwIiwiYW5nIiwiciIsIk1hdGgiLCJ4IiwieSIsInoiLCJ0aGlja25lc3MiLCJpIiwidXYwIiwidXYxIiwicGFsZXR0ZSIsIm1hdGVyaWFsMiIsIm1hdGVyaWFsIiwiY29uc29sZSIsInNlZ21lbnRzIiwic3RhdGUiLCJldmVudCIsIl9ldmVudF9jdXJyZW50IiwiX2NvbnRleHRfcmVhZFBpeGVsIiwiUiIsIkciLCJCIiwibWluUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ25CO0FBRWxDLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQTIzRDtBQUN0NUQsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osMENBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFB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