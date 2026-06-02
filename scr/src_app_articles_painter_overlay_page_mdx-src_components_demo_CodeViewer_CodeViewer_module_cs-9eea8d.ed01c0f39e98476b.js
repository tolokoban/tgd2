"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_overlay_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_cs-9eea8d"], {
44859(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/dino.5737266deb4973e5.webp";

},
58252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(8354);
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
    "Detail #1": "function init(context: TgdContext) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0, 0.3, 0.5, 1],\n\t\tdepth: 1,\n\t});\n\tconst canvas = tgdCanvasCreatePalette(\n\t\t[\"#f44b\", \"#4f4b\", \"#44fb\", \"#0000\"],\n\t\t2,\n\t\t2,\n\t);\n\tconst overlay = new TgdPainterOverlay(context, {\n\t\tmargin: 16,\n\t\twidth: 160,\n\t\theight: 120,\n\t\talignX: +1,\n\t\talignY: +1,\n\t\ttexture: new TgdTexture2D(context, {\n\t\t\tload: canvas,\n\t\t\tparams: {\n\t\t\t\tminFilter: \"NEAREST\",\n\t\t\t\tmagFilter: \"NEAREST\",\n\t\t\t},\n\t\t\tstorage: { flipY: false },\n\t\t}),\n\t});\n\tconst cube = new TgdPainterMesh(context);\n\tcube.transfo.orbitAroundX(Math.random());\n\tcube.transfo.orbitAroundY(Math.random());\n\tcube.transfo.orbitAroundZ(Math.random());\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: [cube],\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [overlay],\n\t\t}),\n\t);\n\tcontext.camera.fitSpaceAtTarget(1.2, 1.2);\n\tcontext.paint();\n\toverlay.eventTap.addListener((evt) => {\n\t\tconst ctx = canvas.getContext(\"2d\");\n\t\tif (!ctx) return;\n\n\t\tconst x = ((1 + evt.x) * ctx.canvas.width) / 2;\n\t\tconst y = ((1 + evt.y) * ctx.canvas.height) / 2;\n\t\tctx.fillStyle = \"#ff0\";\n\t\tctx.beginPath();\n\t\tctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2);\n\t\tctx.fill();\n\t});\n\treturn ({ alignX, alignY }: { alignX: number; alignY: number }) => {\n\t\toverlay.alignX = alignX;\n\t\toverlay.alignY = alignY;\n\t\tcontext.paint();\n\t};\n}"
};
var FULL = "import {\n\ttgdCanvasCreatePalette,\n\ttype TgdContext,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterOverlay,\n\tTgdPainterState,\n\tTgdTexture2D,\n} from \"@tolokoban/tgd\";\n\nimport View from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0, 0.3, 0.5, 1],\n\t\tdepth: 1,\n\t});\n\tconst canvas = tgdCanvasCreatePalette(\n\t\t[\"#f44b\", \"#4f4b\", \"#44fb\", \"#0000\"],\n\t\t2,\n\t\t2,\n\t);\n\tconst overlay = new TgdPainterOverlay(context, {\n\t\tmargin: 16,\n\t\twidth: 160,\n\t\theight: 120,\n\t\talignX: +1,\n\t\talignY: +1,\n\t\ttexture: new TgdTexture2D(context, {\n\t\t\tload: canvas,\n\t\t\tparams: {\n\t\t\t\tminFilter: \"NEAREST\",\n\t\t\t\tmagFilter: \"NEAREST\",\n\t\t\t},\n\t\t\tstorage: { flipY: false },\n\t\t}),\n\t});\n\tconst cube = new TgdPainterMesh(context);\n\tcube.transfo.orbitAroundX(Math.random());\n\tcube.transfo.orbitAroundY(Math.random());\n\tcube.transfo.orbitAroundZ(Math.random());\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: [cube],\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [overlay],\n\t\t}),\n\t);\n\tcontext.camera.fitSpaceAtTarget(1.2, 1.2);\n\tcontext.paint();\n\toverlay.eventTap.addListener((evt) => {\n\t\tconst ctx = canvas.getContext(\"2d\");\n\t\tif (!ctx) return;\n\n\t\tconst x = ((1 + evt.x) * ctx.canvas.width) / 2;\n\t\tconst y = ((1 + evt.y) * ctx.canvas.height) / 2;\n\t\tctx.fillStyle = \"#ff0\";\n\t\tctx.beginPath();\n\t\tctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2);\n\t\tctx.fill();\n\t});\n\treturn ({ alignX, alignY }: { alignX: number; alignY: number }) => {\n\t\toverlay.alignX = alignX;\n\t\toverlay.alignY = alignY;\n\t\tcontext.paint();\n\t};\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 1000,\n\t\t\t}}\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\talignX: {\n\t\t\t\t\tlabel: \"alignX\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: -1,\n\t\t\t\t\tmax: +1,\n\t\t\t\t},\n\t\t\t\talignY: {\n\t\t\t\t\tlabel: \"alignY\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: -1,\n\t\t\t\t\tmax: +1,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
8354(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);



// #begin
function init(context) {
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0.3,
            0.5,
            1
        ],
        depth: 1
    });
    var canvas = (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)([
        "#f44b",
        "#4f4b",
        "#44fb",
        "#0000"
    ], 2, 2);
    var overlay = new _tolokoban_tgd__rspack_import_1.TgdPainterOverlay(context, {
        margin: 16,
        width: 160,
        height: 120,
        alignX: +1,
        alignY: +1,
        texture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
            load: canvas,
            params: {
                minFilter: "NEAREST",
                magFilter: "NEAREST"
            },
            storage: {
                flipY: false
            }
        })
    });
    var cube = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context);
    cube.transfo.orbitAroundX(Math.random());
    cube.transfo.orbitAroundY(Math.random());
    cube.transfo.orbitAroundZ(Math.random());
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: [
            cube
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        blend: "alpha",
        children: [
            overlay
        ]
    }));
    context.camera.fitSpaceAtTarget(1.2, 1.2);
    context.paint();
    overlay.eventTap.addListener(function(evt) {
        var ctx = canvas.getContext("2d");
        if (!ctx) return;
        var x = (1 + evt.x) * ctx.canvas.width / 2;
        var y = (1 + evt.y) * ctx.canvas.height / 2;
        ctx.fillStyle = "#ff0";
        ctx.beginPath();
        ctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2);
        ctx.fill();
    });
    return function(param) {
        var alignX = param.alignX, alignY = param.alignY;
        overlay.alignX = alignX;
        overlay.alignY = alignY;
        context.paint();
    };
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        controller: {
            inertiaOrbit: 1000
        },
        options: {
            preserveDrawingBuffer: true
        },
        settings: {
            alignX: {
                label: "alignX",
                value: 1,
                min: -1,
                max: +1
            },
            alignY: {
                label: "alignY",
                value: 1,
                min: -1,
                max: +1
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/main.demo.tsx",
        lineNumber: 78,
        columnNumber: 3
    }, this);
}


},
65623(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _margin_demo__rspack_import_4 = __webpack_require__(49802);
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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0, 0.3, 0.5, 1],\n\t\tdepth: 1,\n\t});\n\tconst canvas = tgdCanvasCreateFill(320, 180, \"#f90\");\n\tconst texture = new TgdTexture2D(context, {\n\t\tload: canvas,\n\t\tparams: {\n\t\t\tminFilter: \"NEAREST\",\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t\tstorage: { flipY: false },\n\t});\n\tconst overlay = new TgdPainterOverlay(context, {\n\t\tmargin: [8, 64],\n\t\t// width: canvas.width,\n\t\theight: canvas.height,\n\t\talignX: -1,\n\t\talignY: +1,\n\t\ttexture,\n\t});\n\toverlay.eventResize.addListener(({ width, height }) => {\n\t\tcanvas.width = width;\n\t\tcanvas.height = height;\n\t\tconst ctx = canvas.getContext(\"2d\");\n\t\tif (!ctx) return;\n\n\t\tconst img = assets.image.image;\n\t\tconst scaleX = width / img.width;\n\t\tconst scaleY = height / img.height;\n\t\tconst scale = Math.max(scaleX, scaleY);\n\t\tconst w = scale * img.width;\n\t\tconst h = scale * img.height;\n\t\tconst x = (width - w) / 2;\n\t\tconst y = (height - h) / 2;\n\t\tctx.drawImage(img, x, y, w, h);\n\t\ttexture.loadBitmap(canvas);\n\t\tcontext.paint();\n\t});\n\tconst cube = new TgdPainterMesh(context);\n\tcube.transfo.orbitAroundX(Math.random());\n\tcube.transfo.orbitAroundY(Math.random());\n\tcube.transfo.orbitAroundZ(Math.random());\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: [cube],\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [overlay],\n\t\t}),\n\t);\n\tcontext.camera.fitSpaceAtTarget(1.2, 1.2);\n\tcontext.paint();\n\toverlay.eventTap.addListener((evt) => {\n\t\tconst ctx = canvas.getContext(\"2d\");\n\t\tif (!ctx) return;\n\n\t\tconst x = ((1 + evt.x) * ctx.canvas.width) / 2;\n\t\tconst y = ((1 - evt.y) * ctx.canvas.height) / 2;\n\t\tctx.fillStyle = \"#ff0\";\n\t\tctx.beginPath();\n\t\tctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2);\n\t\tctx.fill();\n\t\ttexture.loadBitmap(canvas);\n\t\tcontext.paint();\n\t});\n\treturn ({\n\t\talignX,\n\t\talignY,\n\t\tmarginTop,\n\t\tmarginRight,\n\t\tmarginBottom,\n\t\tmarginLeft,\n\t}: {\n\t\talignX: number;\n\t\talignY: number;\n\t\tmarginTop: number;\n\t\tmarginRight: number;\n\t\tmarginBottom: number;\n\t\tmarginLeft: number;\n\t}) => {\n\t\toverlay.alignX = alignX;\n\t\toverlay.alignY = alignY;\n\t\toverlay.marginTop = marginTop;\n\t\toverlay.marginRight = marginRight;\n\t\toverlay.marginBottom = marginBottom;\n\t\toverlay.marginLeft = marginLeft;\n\t\tcontext.paint();\n\t};\n}"
};
var FULL = "import {\n\ttgdCanvasCreateFill,\n\ttype TgdContext,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterOverlay,\n\tTgdPainterState,\n\tTgdTexture2D,\n} from \"@tolokoban/tgd\";\n\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport ImageURL from \"@/assets/image/dino.webp\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0, 0.3, 0.5, 1],\n\t\tdepth: 1,\n\t});\n\tconst canvas = tgdCanvasCreateFill(320, 180, \"#f90\");\n\tconst texture = new TgdTexture2D(context, {\n\t\tload: canvas,\n\t\tparams: {\n\t\t\tminFilter: \"NEAREST\",\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t\tstorage: { flipY: false },\n\t});\n\tconst overlay = new TgdPainterOverlay(context, {\n\t\tmargin: [8, 64],\n\t\t// width: canvas.width,\n\t\theight: canvas.height,\n\t\talignX: -1,\n\t\talignY: +1,\n\t\ttexture,\n\t});\n\toverlay.eventResize.addListener(({ width, height }) => {\n\t\tcanvas.width = width;\n\t\tcanvas.height = height;\n\t\tconst ctx = canvas.getContext(\"2d\");\n\t\tif (!ctx) return;\n\n\t\tconst img = assets.image.image;\n\t\tconst scaleX = width / img.width;\n\t\tconst scaleY = height / img.height;\n\t\tconst scale = Math.max(scaleX, scaleY);\n\t\tconst w = scale * img.width;\n\t\tconst h = scale * img.height;\n\t\tconst x = (width - w) / 2;\n\t\tconst y = (height - h) / 2;\n\t\tctx.drawImage(img, x, y, w, h);\n\t\ttexture.loadBitmap(canvas);\n\t\tcontext.paint();\n\t});\n\tconst cube = new TgdPainterMesh(context);\n\tcube.transfo.orbitAroundX(Math.random());\n\tcube.transfo.orbitAroundY(Math.random());\n\tcube.transfo.orbitAroundZ(Math.random());\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: [cube],\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [overlay],\n\t\t}),\n\t);\n\tcontext.camera.fitSpaceAtTarget(1.2, 1.2);\n\tcontext.paint();\n\toverlay.eventTap.addListener((evt) => {\n\t\tconst ctx = canvas.getContext(\"2d\");\n\t\tif (!ctx) return;\n\n\t\tconst x = ((1 + evt.x) * ctx.canvas.width) / 2;\n\t\tconst y = ((1 - evt.y) * ctx.canvas.height) / 2;\n\t\tctx.fillStyle = \"#ff0\";\n\t\tctx.beginPath();\n\t\tctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2);\n\t\tctx.fill();\n\t\ttexture.loadBitmap(canvas);\n\t\tcontext.paint();\n\t});\n\treturn ({\n\t\talignX,\n\t\talignY,\n\t\tmarginTop,\n\t\tmarginRight,\n\t\tmarginBottom,\n\t\tmarginLeft,\n\t}: {\n\t\talignX: number;\n\t\talignY: number;\n\t\tmarginTop: number;\n\t\tmarginRight: number;\n\t\tmarginBottom: number;\n\t\tmarginLeft: number;\n\t}) => {\n\t\toverlay.alignX = alignX;\n\t\toverlay.alignY = alignY;\n\t\toverlay.marginTop = marginTop;\n\t\toverlay.marginRight = marginRight;\n\t\toverlay.marginBottom = marginBottom;\n\t\toverlay.marginLeft = marginLeft;\n\t\tcontext.paint();\n\t};\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 1000,\n\t\t\t}}\n\t\t\toptions={{\n\t\t\t\talpha: false,\n\t\t\t}}\n\t\t\tassets={{\n\t\t\t\timage: {\n\t\t\t\t\timage: ImageURL,\n\t\t\t\t},\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\talignX: {\n\t\t\t\t\tlabel: \"alignX\",\n\t\t\t\t\tvalue: -1,\n\t\t\t\t\tmin: -1,\n\t\t\t\t\tmax: +1,\n\t\t\t\t},\n\t\t\t\talignY: {\n\t\t\t\t\tlabel: \"alignY\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: -1,\n\t\t\t\t\tmax: +1,\n\t\t\t\t},\n\t\t\t\tmarginTop: {\n\t\t\t\t\tlabel: \"marginTop\",\n\t\t\t\t\tvalue: 8,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 64,\n\t\t\t\t},\n\t\t\t\tmarginRight: {\n\t\t\t\t\tlabel: \"marginRight\",\n\t\t\t\t\tvalue: 64,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 64,\n\t\t\t\t},\n\t\t\t\tmarginBottom: {\n\t\t\t\t\tlabel: \"marginBottom\",\n\t\t\t\t\tvalue: 8,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 64,\n\t\t\t\t},\n\t\t\t\tmarginLeft: {\n\t\t\t\t\tlabel: \"marginLeft\",\n\t\t\t\t\tvalue: 64,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 64,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_margin_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
49802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_image_dino_webp__rspack_import_3 = __webpack_require__(44859);




// #begin
function init(context, assets) {
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0.3,
            0.5,
            1
        ],
        depth: 1
    });
    var canvas = (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateFill)(320, 180, "#f90");
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        load: canvas,
        params: {
            minFilter: "NEAREST",
            magFilter: "NEAREST"
        },
        storage: {
            flipY: false
        }
    });
    var overlay = new _tolokoban_tgd__rspack_import_1.TgdPainterOverlay(context, {
        margin: [
            8,
            64
        ],
        // width: canvas.width,
        height: canvas.height,
        alignX: -1,
        alignY: +1,
        texture: texture
    });
    overlay.eventResize.addListener(function(param) {
        var width = param.width, height = param.height;
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        if (!ctx) return;
        var img = assets.image.image;
        var scaleX = width / img.width;
        var scaleY = height / img.height;
        var scale = Math.max(scaleX, scaleY);
        var w = scale * img.width;
        var h = scale * img.height;
        var x = (width - w) / 2;
        var y = (height - h) / 2;
        ctx.drawImage(img, x, y, w, h);
        texture.loadBitmap(canvas);
        context.paint();
    });
    var cube = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context);
    cube.transfo.orbitAroundX(Math.random());
    cube.transfo.orbitAroundY(Math.random());
    cube.transfo.orbitAroundZ(Math.random());
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: [
            cube
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        blend: "alpha",
        children: [
            overlay
        ]
    }));
    context.camera.fitSpaceAtTarget(1.2, 1.2);
    context.paint();
    overlay.eventTap.addListener(function(evt) {
        var ctx = canvas.getContext("2d");
        if (!ctx) return;
        var x = (1 + evt.x) * ctx.canvas.width / 2;
        var y = (1 - evt.y) * ctx.canvas.height / 2;
        ctx.fillStyle = "#ff0";
        ctx.beginPath();
        ctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        texture.loadBitmap(canvas);
        context.paint();
    });
    return function(param) {
        var alignX = param.alignX, alignY = param.alignY, marginTop = param.marginTop, marginRight = param.marginRight, marginBottom = param.marginBottom, marginLeft = param.marginLeft;
        overlay.alignX = alignX;
        overlay.alignY = alignY;
        overlay.marginTop = marginTop;
        overlay.marginRight = marginRight;
        overlay.marginBottom = marginBottom;
        overlay.marginLeft = marginLeft;
        context.paint();
    };
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        controller: {
            inertiaOrbit: 1000
        },
        options: {
            alpha: false
        },
        assets: {
            image: {
                image: _assets_image_dino_webp__rspack_import_3
            }
        },
        settings: {
            alignX: {
                label: "alignX",
                value: -1,
                min: -1,
                max: +1
            },
            alignY: {
                label: "alignY",
                value: 1,
                min: -1,
                max: +1
            },
            marginTop: {
                label: "marginTop",
                value: 8,
                min: 0,
                max: 64
            },
            marginRight: {
                label: "marginRight",
                value: 64,
                min: 0,
                max: 64
            },
            marginBottom: {
                label: "marginBottom",
                value: 8,
                min: 0,
                max: 64
            },
            marginLeft: {
                label: "marginLeft",
                value: 64,
                min: 0,
                max: 64
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/margin.demo.tsx",
        lineNumber: 115,
        columnNumber: 3
    }, this);
}


},
92055(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(58252);
/* import */ var _margin_demo__rspack_import_2 = __webpack_require__(65623);
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
        p: "p",
        strong: "strong"
    }, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterOverlay.html",
                    children: "TgdPainterOverlay"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                    lineNumber: 4,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Alignement"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Use ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "alignX"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                        lineNumber: 8,
                        columnNumber: 5
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "alignY"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                        lineNumber: 8,
                        columnNumber: 18
                    }, this),
                    " to move the overlay around."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Margins and fullsize"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "If you don't define the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "width"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                        lineNumber: 14,
                        columnNumber: 25
                    }, this),
                    ", the overlay will take the maximum width, respecting the margins.\nThis is the same behaviour with the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "height"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                        lineNumber: 15,
                        columnNumber: 37
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Check ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "eventResize"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                        lineNumber: 17,
                        columnNumber: 7
                    }, this),
                    " for overlay size changes."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_margin_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                lineNumber: 19,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9vdmVybGF5X3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jcy05ZWVhOGQuZWQwMWMwZjM5ZTk4NDc2Yi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9vdmVybGF5L18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvb3ZlcmxheS9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9vdmVybGF5L18vbWFyZ2luLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9vdmVybGF5L18vbWFyZ2luLmRlbW8vbWFyZ2luLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9vdmVybGF5L3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLCAwLjMsIDAuNSwgMV0sXFxuXFx0XFx0ZGVwdGg6IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgY2FudmFzID0gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShcXG5cXHRcXHRbXFxcIiNmNDRiXFxcIiwgXFxcIiM0ZjRiXFxcIiwgXFxcIiM0NGZiXFxcIiwgXFxcIiMwMDAwXFxcIl0sXFxuXFx0XFx0MixcXG5cXHRcXHQyLFxcblxcdCk7XFxuXFx0Y29uc3Qgb3ZlcmxheSA9IG5ldyBUZ2RQYWludGVyT3ZlcmxheShjb250ZXh0LCB7XFxuXFx0XFx0bWFyZ2luOiAxNixcXG5cXHRcXHR3aWR0aDogMTYwLFxcblxcdFxcdGhlaWdodDogMTIwLFxcblxcdFxcdGFsaWduWDogKzEsXFxuXFx0XFx0YWxpZ25ZOiArMSxcXG5cXHRcXHR0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRsb2FkOiBjYW52YXMsXFxuXFx0XFx0XFx0cGFyYW1zOiB7XFxuXFx0XFx0XFx0XFx0bWluRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuXFx0XFx0XFx0XFx0bWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRzdG9yYWdlOiB7IGZsaXBZOiBmYWxzZSB9LFxcblxcdFxcdH0pLFxcblxcdH0pO1xcblxcdGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCk7XFxuXFx0Y3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWChNYXRoLnJhbmRvbSgpKTtcXG5cXHRjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRZKE1hdGgucmFuZG9tKCkpO1xcblxcdGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFooTWF0aC5yYW5kb20oKSk7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0Y2xlYXIsXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0ZGVwdGg6IFxcXCJsZXNzXFxcIixcXG5cXHRcXHRcXHRjdWxsOiBcXFwiYmFja1xcXCIsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtjdWJlXSxcXG5cXHRcXHR9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRibGVuZDogXFxcImFscGhhXFxcIixcXG5cXHRcXHRcXHRjaGlsZHJlbjogW292ZXJsYXldLFxcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxLjIsIDEuMik7XFxuXFx0Y29udGV4dC5wYWludCgpO1xcblxcdG92ZXJsYXkuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xcblxcdFxcdGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFxcXCIyZFxcXCIpO1xcblxcdFxcdGlmICghY3R4KSByZXR1cm47XFxuXFxuXFx0XFx0Y29uc3QgeCA9ICgoMSArIGV2dC54KSAqIGN0eC5jYW52YXMud2lkdGgpIC8gMjtcXG5cXHRcXHRjb25zdCB5ID0gKCgxICsgZXZ0LnkpICogY3R4LmNhbnZhcy5oZWlnaHQpIC8gMjtcXG5cXHRcXHRjdHguZmlsbFN0eWxlID0gXFxcIiNmZjBcXFwiO1xcblxcdFxcdGN0eC5iZWdpblBhdGgoKTtcXG5cXHRcXHRjdHguZWxsaXBzZSh4LCB5LCA4LCA4LCAwLCAwLCBNYXRoLlBJICogMik7XFxuXFx0XFx0Y3R4LmZpbGwoKTtcXG5cXHR9KTtcXG5cXHRyZXR1cm4gKHsgYWxpZ25YLCBhbGlnblkgfTogeyBhbGlnblg6IG51bWJlcjsgYWxpZ25ZOiBudW1iZXIgfSkgPT4ge1xcblxcdFxcdG92ZXJsYXkuYWxpZ25YID0gYWxpZ25YO1xcblxcdFxcdG92ZXJsYXkuYWxpZ25ZID0gYWxpZ25ZO1xcblxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHR9O1xcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJNZXNoLFxcblxcdFRnZFBhaW50ZXJPdmVybGF5LFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGNvbG9yOiBbMCwgMC4zLCAwLjUsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGNhbnZhcyA9IHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoXFxuXFx0XFx0W1xcXCIjZjQ0YlxcXCIsIFxcXCIjNGY0YlxcXCIsIFxcXCIjNDRmYlxcXCIsIFxcXCIjMDAwMFxcXCJdLFxcblxcdFxcdDIsXFxuXFx0XFx0MixcXG5cXHQpO1xcblxcdGNvbnN0IG92ZXJsYXkgPSBuZXcgVGdkUGFpbnRlck92ZXJsYXkoY29udGV4dCwge1xcblxcdFxcdG1hcmdpbjogMTYsXFxuXFx0XFx0d2lkdGg6IDE2MCxcXG5cXHRcXHRoZWlnaHQ6IDEyMCxcXG5cXHRcXHRhbGlnblg6ICsxLFxcblxcdFxcdGFsaWduWTogKzEsXFxuXFx0XFx0dGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuXFx0XFx0XFx0bG9hZDogY2FudmFzLFxcblxcdFxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0c3RvcmFnZTogeyBmbGlwWTogZmFsc2UgfSxcXG5cXHRcXHR9KSxcXG5cXHR9KTtcXG5cXHRjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpO1xcblxcdGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFgoTWF0aC5yYW5kb20oKSk7XFxuXFx0Y3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnJhbmRvbSgpKTtcXG5cXHRjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRaKE1hdGgucmFuZG9tKCkpO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGNsZWFyLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuXFx0XFx0XFx0Y3VsbDogXFxcImJhY2tcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbY3ViZV0sXFxuXFx0XFx0fSksXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0YmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtvdmVybGF5XSxcXG5cXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS4yLCAxLjIpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHRvdmVybGF5LmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG5cXHRcXHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcXFwiMmRcXFwiKTtcXG5cXHRcXHRpZiAoIWN0eCkgcmV0dXJuO1xcblxcblxcdFxcdGNvbnN0IHggPSAoKDEgKyBldnQueCkgKiBjdHguY2FudmFzLndpZHRoKSAvIDI7XFxuXFx0XFx0Y29uc3QgeSA9ICgoMSArIGV2dC55KSAqIGN0eC5jYW52YXMuaGVpZ2h0KSAvIDI7XFxuXFx0XFx0Y3R4LmZpbGxTdHlsZSA9IFxcXCIjZmYwXFxcIjtcXG5cXHRcXHRjdHguYmVnaW5QYXRoKCk7XFxuXFx0XFx0Y3R4LmVsbGlwc2UoeCwgeSwgOCwgOCwgMCwgMCwgTWF0aC5QSSAqIDIpO1xcblxcdFxcdGN0eC5maWxsKCk7XFxuXFx0fSk7XFxuXFx0cmV0dXJuICh7IGFsaWduWCwgYWxpZ25ZIH06IHsgYWxpZ25YOiBudW1iZXI7IGFsaWduWTogbnVtYmVyIH0pID0+IHtcXG5cXHRcXHRvdmVybGF5LmFsaWduWCA9IGFsaWduWDtcXG5cXHRcXHRvdmVybGF5LmFsaWduWSA9IGFsaWduWTtcXG5cXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0fTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRjb250cm9sbGVyPXt7XFxuXFx0XFx0XFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdFxcdH19XFxuXFx0XFx0XFx0b3B0aW9ucz17e1xcblxcdFxcdFxcdFxcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdHNldHRpbmdzPXt7XFxuXFx0XFx0XFx0XFx0YWxpZ25YOiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJhbGlnblhcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogLTEsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiArMSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdGFsaWduWToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwiYWxpZ25ZXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMSxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IC0xLFxcblxcdFxcdFxcdFxcdFxcdG1heDogKzEsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KTtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlck92ZXJsYXksXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMCwgMC4zLCAwLjUsIDFdLFxuXHRcdGRlcHRoOiAxLFxuXHR9KTtcblx0Y29uc3QgY2FudmFzID0gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShcblx0XHRbXCIjZjQ0YlwiLCBcIiM0ZjRiXCIsIFwiIzQ0ZmJcIiwgXCIjMDAwMFwiXSxcblx0XHQyLFxuXHRcdDIsXG5cdCk7XG5cdGNvbnN0IG92ZXJsYXkgPSBuZXcgVGdkUGFpbnRlck92ZXJsYXkoY29udGV4dCwge1xuXHRcdG1hcmdpbjogMTYsXG5cdFx0d2lkdGg6IDE2MCxcblx0XHRoZWlnaHQ6IDEyMCxcblx0XHRhbGlnblg6ICsxLFxuXHRcdGFsaWduWTogKzEsXG5cdFx0dGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG5cdFx0XHRsb2FkOiBjYW52YXMsXG5cdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0bWluRmlsdGVyOiBcIk5FQVJFU1RcIixcblx0XHRcdFx0bWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcblx0XHRcdH0sXG5cdFx0XHRzdG9yYWdlOiB7IGZsaXBZOiBmYWxzZSB9LFxuXHRcdH0pLFxuXHR9KTtcblx0Y29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KTtcblx0Y3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWChNYXRoLnJhbmRvbSgpKTtcblx0Y3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnJhbmRvbSgpKTtcblx0Y3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWihNYXRoLnJhbmRvbSgpKTtcblx0Y29udGV4dC5hZGQoXG5cdFx0Y2xlYXIsXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogXCJsZXNzXCIsXG5cdFx0XHRjdWxsOiBcImJhY2tcIixcblx0XHRcdGNoaWxkcmVuOiBbY3ViZV0sXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRibGVuZDogXCJhbHBoYVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtvdmVybGF5XSxcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxLjIsIDEuMik7XG5cdGNvbnRleHQucGFpbnQoKTtcblx0b3ZlcmxheS5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRpZiAoIWN0eCkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgeCA9ICgoMSArIGV2dC54KSAqIGN0eC5jYW52YXMud2lkdGgpIC8gMjtcblx0XHRjb25zdCB5ID0gKCgxICsgZXZ0LnkpICogY3R4LmNhbnZhcy5oZWlnaHQpIC8gMjtcblx0XHRjdHguZmlsbFN0eWxlID0gXCIjZmYwXCI7XG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdGN0eC5lbGxpcHNlKHgsIHksIDgsIDgsIDAsIDAsIE1hdGguUEkgKiAyKTtcblx0XHRjdHguZmlsbCgpO1xuXHR9KTtcblx0cmV0dXJuICh7IGFsaWduWCwgYWxpZ25ZIH06IHsgYWxpZ25YOiBudW1iZXI7IGFsaWduWTogbnVtYmVyIH0pID0+IHtcblx0XHRvdmVybGF5LmFsaWduWCA9IGFsaWduWDtcblx0XHRvdmVybGF5LmFsaWduWSA9IGFsaWduWTtcblx0XHRjb250ZXh0LnBhaW50KCk7XG5cdH07XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRjb250cm9sbGVyPXt7XG5cdFx0XHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRcdH19XG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdH19XG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHRhbGlnblg6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJhbGlnblhcIixcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRtaW46IC0xLFxuXHRcdFx0XHRcdG1heDogKzEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsaWduWToge1xuXHRcdFx0XHRcdGxhYmVsOiBcImFsaWduWVwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHRcdG1pbjogLTEsXG5cdFx0XHRcdFx0bWF4OiArMSxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYXJnaW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAsIDAuMywgMC41LCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCBjYW52YXMgPSB0Z2RDYW52YXNDcmVhdGVGaWxsKDMyMCwgMTgwLCBcXFwiI2Y5MFxcXCIpO1xcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRsb2FkOiBjYW52YXMsXFxuXFx0XFx0cGFyYW1zOiB7XFxuXFx0XFx0XFx0bWluRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuXFx0XFx0XFx0bWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuXFx0XFx0fSxcXG5cXHRcXHRzdG9yYWdlOiB7IGZsaXBZOiBmYWxzZSB9LFxcblxcdH0pO1xcblxcdGNvbnN0IG92ZXJsYXkgPSBuZXcgVGdkUGFpbnRlck92ZXJsYXkoY29udGV4dCwge1xcblxcdFxcdG1hcmdpbjogWzgsIDY0XSxcXG5cXHRcXHQvLyB3aWR0aDogY2FudmFzLndpZHRoLFxcblxcdFxcdGhlaWdodDogY2FudmFzLmhlaWdodCxcXG5cXHRcXHRhbGlnblg6IC0xLFxcblxcdFxcdGFsaWduWTogKzEsXFxuXFx0XFx0dGV4dHVyZSxcXG5cXHR9KTtcXG5cXHRvdmVybGF5LmV2ZW50UmVzaXplLmFkZExpc3RlbmVyKCh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xcblxcdFxcdGNhbnZhcy53aWR0aCA9IHdpZHRoO1xcblxcdFxcdGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XFxuXFx0XFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXFxcIjJkXFxcIik7XFxuXFx0XFx0aWYgKCFjdHgpIHJldHVybjtcXG5cXG5cXHRcXHRjb25zdCBpbWcgPSBhc3NldHMuaW1hZ2UuaW1hZ2U7XFxuXFx0XFx0Y29uc3Qgc2NhbGVYID0gd2lkdGggLyBpbWcud2lkdGg7XFxuXFx0XFx0Y29uc3Qgc2NhbGVZID0gaGVpZ2h0IC8gaW1nLmhlaWdodDtcXG5cXHRcXHRjb25zdCBzY2FsZSA9IE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKTtcXG5cXHRcXHRjb25zdCB3ID0gc2NhbGUgKiBpbWcud2lkdGg7XFxuXFx0XFx0Y29uc3QgaCA9IHNjYWxlICogaW1nLmhlaWdodDtcXG5cXHRcXHRjb25zdCB4ID0gKHdpZHRoIC0gdykgLyAyO1xcblxcdFxcdGNvbnN0IHkgPSAoaGVpZ2h0IC0gaCkgLyAyO1xcblxcdFxcdGN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCB3LCBoKTtcXG5cXHRcXHR0ZXh0dXJlLmxvYWRCaXRtYXAoY2FudmFzKTtcXG5cXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0fSk7XFxuXFx0Y29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KTtcXG5cXHRjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRYKE1hdGgucmFuZG9tKCkpO1xcblxcdGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFkoTWF0aC5yYW5kb20oKSk7XFxuXFx0Y3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWihNYXRoLnJhbmRvbSgpKTtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRkZXB0aDogXFxcImxlc3NcXFwiLFxcblxcdFxcdFxcdGN1bGw6IFxcXCJiYWNrXFxcIixcXG5cXHRcXHRcXHRjaGlsZHJlbjogW2N1YmVdLFxcblxcdFxcdH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbb3ZlcmxheV0sXFxuXFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEuMiwgMS4yKTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0b3ZlcmxheS5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XFxuXFx0XFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXFxcIjJkXFxcIik7XFxuXFx0XFx0aWYgKCFjdHgpIHJldHVybjtcXG5cXG5cXHRcXHRjb25zdCB4ID0gKCgxICsgZXZ0LngpICogY3R4LmNhbnZhcy53aWR0aCkgLyAyO1xcblxcdFxcdGNvbnN0IHkgPSAoKDEgLSBldnQueSkgKiBjdHguY2FudmFzLmhlaWdodCkgLyAyO1xcblxcdFxcdGN0eC5maWxsU3R5bGUgPSBcXFwiI2ZmMFxcXCI7XFxuXFx0XFx0Y3R4LmJlZ2luUGF0aCgpO1xcblxcdFxcdGN0eC5lbGxpcHNlKHgsIHksIDgsIDgsIDAsIDAsIE1hdGguUEkgKiAyKTtcXG5cXHRcXHRjdHguZmlsbCgpO1xcblxcdFxcdHRleHR1cmUubG9hZEJpdG1hcChjYW52YXMpO1xcblxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHR9KTtcXG5cXHRyZXR1cm4gKHtcXG5cXHRcXHRhbGlnblgsXFxuXFx0XFx0YWxpZ25ZLFxcblxcdFxcdG1hcmdpblRvcCxcXG5cXHRcXHRtYXJnaW5SaWdodCxcXG5cXHRcXHRtYXJnaW5Cb3R0b20sXFxuXFx0XFx0bWFyZ2luTGVmdCxcXG5cXHR9OiB7XFxuXFx0XFx0YWxpZ25YOiBudW1iZXI7XFxuXFx0XFx0YWxpZ25ZOiBudW1iZXI7XFxuXFx0XFx0bWFyZ2luVG9wOiBudW1iZXI7XFxuXFx0XFx0bWFyZ2luUmlnaHQ6IG51bWJlcjtcXG5cXHRcXHRtYXJnaW5Cb3R0b206IG51bWJlcjtcXG5cXHRcXHRtYXJnaW5MZWZ0OiBudW1iZXI7XFxuXFx0fSkgPT4ge1xcblxcdFxcdG92ZXJsYXkuYWxpZ25YID0gYWxpZ25YO1xcblxcdFxcdG92ZXJsYXkuYWxpZ25ZID0gYWxpZ25ZO1xcblxcdFxcdG92ZXJsYXkubWFyZ2luVG9wID0gbWFyZ2luVG9wO1xcblxcdFxcdG92ZXJsYXkubWFyZ2luUmlnaHQgPSBtYXJnaW5SaWdodDtcXG5cXHRcXHRvdmVybGF5Lm1hcmdpbkJvdHRvbSA9IG1hcmdpbkJvdHRvbTtcXG5cXHRcXHRvdmVybGF5Lm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0O1xcblxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHR9O1xcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dGdkQ2FudmFzQ3JlYXRlRmlsbCxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJNZXNoLFxcblxcdFRnZFBhaW50ZXJPdmVybGF5LFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcblxcbmltcG9ydCBJbWFnZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9pbWFnZS9kaW5vLndlYnBcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGNvbG9yOiBbMCwgMC4zLCAwLjUsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGNhbnZhcyA9IHRnZENhbnZhc0NyZWF0ZUZpbGwoMzIwLCAxODAsIFxcXCIjZjkwXFxcIik7XFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdGxvYWQ6IGNhbnZhcyxcXG5cXHRcXHRwYXJhbXM6IHtcXG5cXHRcXHRcXHRtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG5cXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG5cXHRcXHR9LFxcblxcdFxcdHN0b3JhZ2U6IHsgZmxpcFk6IGZhbHNlIH0sXFxuXFx0fSk7XFxuXFx0Y29uc3Qgb3ZlcmxheSA9IG5ldyBUZ2RQYWludGVyT3ZlcmxheShjb250ZXh0LCB7XFxuXFx0XFx0bWFyZ2luOiBbOCwgNjRdLFxcblxcdFxcdC8vIHdpZHRoOiBjYW52YXMud2lkdGgsXFxuXFx0XFx0aGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxcblxcdFxcdGFsaWduWDogLTEsXFxuXFx0XFx0YWxpZ25ZOiArMSxcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdH0pO1xcblxcdG92ZXJsYXkuZXZlbnRSZXNpemUuYWRkTGlzdGVuZXIoKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XFxuXFx0XFx0Y2FudmFzLndpZHRoID0gd2lkdGg7XFxuXFx0XFx0Y2FudmFzLmhlaWdodCA9IGhlaWdodDtcXG5cXHRcXHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcXFwiMmRcXFwiKTtcXG5cXHRcXHRpZiAoIWN0eCkgcmV0dXJuO1xcblxcblxcdFxcdGNvbnN0IGltZyA9IGFzc2V0cy5pbWFnZS5pbWFnZTtcXG5cXHRcXHRjb25zdCBzY2FsZVggPSB3aWR0aCAvIGltZy53aWR0aDtcXG5cXHRcXHRjb25zdCBzY2FsZVkgPSBoZWlnaHQgLyBpbWcuaGVpZ2h0O1xcblxcdFxcdGNvbnN0IHNjYWxlID0gTWF0aC5tYXgoc2NhbGVYLCBzY2FsZVkpO1xcblxcdFxcdGNvbnN0IHcgPSBzY2FsZSAqIGltZy53aWR0aDtcXG5cXHRcXHRjb25zdCBoID0gc2NhbGUgKiBpbWcuaGVpZ2h0O1xcblxcdFxcdGNvbnN0IHggPSAod2lkdGggLSB3KSAvIDI7XFxuXFx0XFx0Y29uc3QgeSA9IChoZWlnaHQgLSBoKSAvIDI7XFxuXFx0XFx0Y3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHcsIGgpO1xcblxcdFxcdHRleHR1cmUubG9hZEJpdG1hcChjYW52YXMpO1xcblxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHR9KTtcXG5cXHRjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpO1xcblxcdGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFgoTWF0aC5yYW5kb20oKSk7XFxuXFx0Y3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnJhbmRvbSgpKTtcXG5cXHRjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRaKE1hdGgucmFuZG9tKCkpO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGNsZWFyLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuXFx0XFx0XFx0Y3VsbDogXFxcImJhY2tcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbY3ViZV0sXFxuXFx0XFx0fSksXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0YmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtvdmVybGF5XSxcXG5cXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS4yLCAxLjIpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHRvdmVybGF5LmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG5cXHRcXHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcXFwiMmRcXFwiKTtcXG5cXHRcXHRpZiAoIWN0eCkgcmV0dXJuO1xcblxcblxcdFxcdGNvbnN0IHggPSAoKDEgKyBldnQueCkgKiBjdHguY2FudmFzLndpZHRoKSAvIDI7XFxuXFx0XFx0Y29uc3QgeSA9ICgoMSAtIGV2dC55KSAqIGN0eC5jYW52YXMuaGVpZ2h0KSAvIDI7XFxuXFx0XFx0Y3R4LmZpbGxTdHlsZSA9IFxcXCIjZmYwXFxcIjtcXG5cXHRcXHRjdHguYmVnaW5QYXRoKCk7XFxuXFx0XFx0Y3R4LmVsbGlwc2UoeCwgeSwgOCwgOCwgMCwgMCwgTWF0aC5QSSAqIDIpO1xcblxcdFxcdGN0eC5maWxsKCk7XFxuXFx0XFx0dGV4dHVyZS5sb2FkQml0bWFwKGNhbnZhcyk7XFxuXFx0XFx0Y29udGV4dC5wYWludCgpO1xcblxcdH0pO1xcblxcdHJldHVybiAoe1xcblxcdFxcdGFsaWduWCxcXG5cXHRcXHRhbGlnblksXFxuXFx0XFx0bWFyZ2luVG9wLFxcblxcdFxcdG1hcmdpblJpZ2h0LFxcblxcdFxcdG1hcmdpbkJvdHRvbSxcXG5cXHRcXHRtYXJnaW5MZWZ0LFxcblxcdH06IHtcXG5cXHRcXHRhbGlnblg6IG51bWJlcjtcXG5cXHRcXHRhbGlnblk6IG51bWJlcjtcXG5cXHRcXHRtYXJnaW5Ub3A6IG51bWJlcjtcXG5cXHRcXHRtYXJnaW5SaWdodDogbnVtYmVyO1xcblxcdFxcdG1hcmdpbkJvdHRvbTogbnVtYmVyO1xcblxcdFxcdG1hcmdpbkxlZnQ6IG51bWJlcjtcXG5cXHR9KSA9PiB7XFxuXFx0XFx0b3ZlcmxheS5hbGlnblggPSBhbGlnblg7XFxuXFx0XFx0b3ZlcmxheS5hbGlnblkgPSBhbGlnblk7XFxuXFx0XFx0b3ZlcmxheS5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XFxuXFx0XFx0b3ZlcmxheS5tYXJnaW5SaWdodCA9IG1hcmdpblJpZ2h0O1xcblxcdFxcdG92ZXJsYXkubWFyZ2luQm90dG9tID0gbWFyZ2luQm90dG9tO1xcblxcdFxcdG92ZXJsYXkubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnQ7XFxuXFx0XFx0Y29udGV4dC5wYWludCgpO1xcblxcdH07XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0Y29udHJvbGxlcj17e1xcblxcdFxcdFxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdG9wdGlvbnM9e3tcXG5cXHRcXHRcXHRcXHRhbHBoYTogZmFsc2UsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRpbWFnZToge1xcblxcdFxcdFxcdFxcdFxcdGltYWdlOiBJbWFnZVVSTCxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0XFx0c2V0dGluZ3M9e3tcXG5cXHRcXHRcXHRcXHRhbGlnblg6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcImFsaWduWFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IC0xLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogLTEsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiArMSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdGFsaWduWToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwiYWxpZ25ZXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMSxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IC0xLFxcblxcdFxcdFxcdFxcdFxcdG1heDogKzEsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRtYXJnaW5Ub3A6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcIm1hcmdpblRvcFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDgsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAwLFxcblxcdFxcdFxcdFxcdFxcdG1heDogNjQsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRtYXJnaW5SaWdodDoge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwibWFyZ2luUmlnaHRcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiA2NCxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IDAsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiA2NCxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdG1hcmdpbkJvdHRvbToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwibWFyZ2luQm90dG9tXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogOCxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IDAsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiA2NCxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdG1hcmdpbkxlZnQ6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcIm1hcmdpbkxlZnRcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiA2NCxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IDAsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiA2NCxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpO1xcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0dGdkQ2FudmFzQ3JlYXRlRmlsbCxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyT3ZlcmxheSxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IEltYWdlVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS9kaW5vLndlYnBcIjtcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLCAwLjMsIDAuNSwgMV0sXG5cdFx0ZGVwdGg6IDEsXG5cdH0pO1xuXHRjb25zdCBjYW52YXMgPSB0Z2RDYW52YXNDcmVhdGVGaWxsKDMyMCwgMTgwLCBcIiNmOTBcIik7XG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRsb2FkOiBjYW52YXMsXG5cdFx0cGFyYW1zOiB7XG5cdFx0XHRtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdFx0bWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcblx0XHR9LFxuXHRcdHN0b3JhZ2U6IHsgZmxpcFk6IGZhbHNlIH0sXG5cdH0pO1xuXHRjb25zdCBvdmVybGF5ID0gbmV3IFRnZFBhaW50ZXJPdmVybGF5KGNvbnRleHQsIHtcblx0XHRtYXJnaW46IFs4LCA2NF0sXG5cdFx0Ly8gd2lkdGg6IGNhbnZhcy53aWR0aCxcblx0XHRoZWlnaHQ6IGNhbnZhcy5oZWlnaHQsXG5cdFx0YWxpZ25YOiAtMSxcblx0XHRhbGlnblk6ICsxLFxuXHRcdHRleHR1cmUsXG5cdH0pO1xuXHRvdmVybGF5LmV2ZW50UmVzaXplLmFkZExpc3RlbmVyKCh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuXHRcdGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuXHRcdGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRpZiAoIWN0eCkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgaW1nID0gYXNzZXRzLmltYWdlLmltYWdlO1xuXHRcdGNvbnN0IHNjYWxlWCA9IHdpZHRoIC8gaW1nLndpZHRoO1xuXHRcdGNvbnN0IHNjYWxlWSA9IGhlaWdodCAvIGltZy5oZWlnaHQ7XG5cdFx0Y29uc3Qgc2NhbGUgPSBNYXRoLm1heChzY2FsZVgsIHNjYWxlWSk7XG5cdFx0Y29uc3QgdyA9IHNjYWxlICogaW1nLndpZHRoO1xuXHRcdGNvbnN0IGggPSBzY2FsZSAqIGltZy5oZWlnaHQ7XG5cdFx0Y29uc3QgeCA9ICh3aWR0aCAtIHcpIC8gMjtcblx0XHRjb25zdCB5ID0gKGhlaWdodCAtIGgpIC8gMjtcblx0XHRjdHguZHJhd0ltYWdlKGltZywgeCwgeSwgdywgaCk7XG5cdFx0dGV4dHVyZS5sb2FkQml0bWFwKGNhbnZhcyk7XG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9KTtcblx0Y29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KTtcblx0Y3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWChNYXRoLnJhbmRvbSgpKTtcblx0Y3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnJhbmRvbSgpKTtcblx0Y3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWihNYXRoLnJhbmRvbSgpKTtcblx0Y29udGV4dC5hZGQoXG5cdFx0Y2xlYXIsXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogXCJsZXNzXCIsXG5cdFx0XHRjdWxsOiBcImJhY2tcIixcblx0XHRcdGNoaWxkcmVuOiBbY3ViZV0sXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRibGVuZDogXCJhbHBoYVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtvdmVybGF5XSxcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxLjIsIDEuMik7XG5cdGNvbnRleHQucGFpbnQoKTtcblx0b3ZlcmxheS5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRpZiAoIWN0eCkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgeCA9ICgoMSArIGV2dC54KSAqIGN0eC5jYW52YXMud2lkdGgpIC8gMjtcblx0XHRjb25zdCB5ID0gKCgxIC0gZXZ0LnkpICogY3R4LmNhbnZhcy5oZWlnaHQpIC8gMjtcblx0XHRjdHguZmlsbFN0eWxlID0gXCIjZmYwXCI7XG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdGN0eC5lbGxpcHNlKHgsIHksIDgsIDgsIDAsIDAsIE1hdGguUEkgKiAyKTtcblx0XHRjdHguZmlsbCgpO1xuXHRcdHRleHR1cmUubG9hZEJpdG1hcChjYW52YXMpO1xuXHRcdGNvbnRleHQucGFpbnQoKTtcblx0fSk7XG5cdHJldHVybiAoe1xuXHRcdGFsaWduWCxcblx0XHRhbGlnblksXG5cdFx0bWFyZ2luVG9wLFxuXHRcdG1hcmdpblJpZ2h0LFxuXHRcdG1hcmdpbkJvdHRvbSxcblx0XHRtYXJnaW5MZWZ0LFxuXHR9OiB7XG5cdFx0YWxpZ25YOiBudW1iZXI7XG5cdFx0YWxpZ25ZOiBudW1iZXI7XG5cdFx0bWFyZ2luVG9wOiBudW1iZXI7XG5cdFx0bWFyZ2luUmlnaHQ6IG51bWJlcjtcblx0XHRtYXJnaW5Cb3R0b206IG51bWJlcjtcblx0XHRtYXJnaW5MZWZ0OiBudW1iZXI7XG5cdH0pID0+IHtcblx0XHRvdmVybGF5LmFsaWduWCA9IGFsaWduWDtcblx0XHRvdmVybGF5LmFsaWduWSA9IGFsaWduWTtcblx0XHRvdmVybGF5Lm1hcmdpblRvcCA9IG1hcmdpblRvcDtcblx0XHRvdmVybGF5Lm1hcmdpblJpZ2h0ID0gbWFyZ2luUmlnaHQ7XG5cdFx0b3ZlcmxheS5tYXJnaW5Cb3R0b20gPSBtYXJnaW5Cb3R0b207XG5cdFx0b3ZlcmxheS5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdDtcblx0XHRjb250ZXh0LnBhaW50KCk7XG5cdH07XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRjb250cm9sbGVyPXt7XG5cdFx0XHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRcdH19XG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdGFscGhhOiBmYWxzZSxcblx0XHRcdH19XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0XHRpbWFnZTogSW1hZ2VVUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdFx0c2V0dGluZ3M9e3tcblx0XHRcdFx0YWxpZ25YOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwiYWxpZ25YXCIsXG5cdFx0XHRcdFx0dmFsdWU6IC0xLFxuXHRcdFx0XHRcdG1pbjogLTEsXG5cdFx0XHRcdFx0bWF4OiArMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxpZ25ZOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwiYWxpZ25ZXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0bWluOiAtMSxcblx0XHRcdFx0XHRtYXg6ICsxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtYXJnaW5Ub3A6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJtYXJnaW5Ub3BcIixcblx0XHRcdFx0XHR2YWx1ZTogOCxcblx0XHRcdFx0XHRtaW46IDAsXG5cdFx0XHRcdFx0bWF4OiA2NCxcblx0XHRcdFx0fSxcblx0XHRcdFx0bWFyZ2luUmlnaHQ6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJtYXJnaW5SaWdodFwiLFxuXHRcdFx0XHRcdHZhbHVlOiA2NCxcblx0XHRcdFx0XHRtaW46IDAsXG5cdFx0XHRcdFx0bWF4OiA2NCxcblx0XHRcdFx0fSxcblx0XHRcdFx0bWFyZ2luQm90dG9tOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwibWFyZ2luQm90dG9tXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDgsXG5cdFx0XHRcdFx0bWluOiAwLFxuXHRcdFx0XHRcdG1heDogNjQsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1hcmdpbkxlZnQ6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJtYXJnaW5MZWZ0XCIsXG5cdFx0XHRcdFx0dmFsdWU6IDY0LFxuXHRcdFx0XHRcdG1pbjogMCxcblx0XHRcdFx0XHRtYXg6IDY0LFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDYW52YXNDcmVhdGVQYWxldHRlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyT3ZlcmxheSIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlZpZXciLCJpbml0IiwiY29udGV4dCIsImNsZWFyIiwiY2FudmFzIiwib3ZlcmxheSIsImN1YmUiLCJNYXRoIiwiZXZ0IiwiY3R4IiwieCIsInkiLCJhbGlnblgiLCJhbGlnblkiLCJ0Z2RDYW52YXNDcmVhdGVGaWxsIiwiSW1hZ2VVUkwiLCJhc3NldHMiLCJ0ZXh0dXJlIiwid2lkdGgiLCJoZWlnaHQiLCJpbWciLCJzY2FsZVgiLCJzY2FsZVkiLCJzY2FsZSIsInciLCJoIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUFna0Q7QUFDM2xELElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7Ozs7Ozs7Ozs7OztBQ2hCd0I7QUFFaUI7QUFFekMsU0FBUztBQUNULFNBQVNjLEtBQUtDLE9BQW1CO0lBQ2hDLElBQU1DLFFBQVEsSUFBSVIsK0NBQWVBLENBQUNPLFNBQVM7UUFDMUMsT0FBTztZQUFDO1lBQUc7WUFBSztZQUFLO1NBQUU7UUFD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