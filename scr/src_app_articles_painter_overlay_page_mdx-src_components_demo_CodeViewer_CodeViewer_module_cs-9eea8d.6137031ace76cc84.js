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
    "Detail #1": "function init(context: TgdContext) {\n    const clear = new TgdPainterClear(context, { color: [0, 0.3, 0.5, 1], depth: 1 })\n    const canvas = tgdCanvasCreatePalette([\"#f44b\", \"#4f4b\", \"#44fb\", \"#0000\"], 2, 2)\n    const overlay = new TgdPainterOverlay(context, {\n        margin: 16,\n        width: 160,\n        height: 120,\n        alignX: +1,\n        alignY: +1,\n        texture: new TgdTexture2D(context, {\n            load: canvas,\n            params: {\n                minFilter: \"NEAREST\",\n                magFilter: \"NEAREST\",\n            },\n            storage: { flipY: false },\n        }),\n    })\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.orbitAroundX(Math.random())\n    cube.transfo.orbitAroundY(Math.random())\n    cube.transfo.orbitAroundZ(Math.random())\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [cube],\n        }),\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [overlay],\n        }),\n    )\n    context.camera.fitSpaceAtTarget(1.2, 1.2)\n    context.paint()\n    overlay.eventTap.addListener((evt) => {\n        const ctx = canvas.getContext(\"2d\")\n        if (!ctx) return\n\n        const x = ((1 + evt.x) * ctx.canvas.width) / 2\n        const y = ((1 + evt.y) * ctx.canvas.height) / 2\n        ctx.fillStyle = \"#ff0\"\n        ctx.beginPath()\n        ctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2)\n        ctx.fill()\n    })\n    return ({ alignX, alignY }: { alignX: number; alignY: number }) => {\n        overlay.alignX = alignX\n        overlay.alignY = alignY\n        context.paint()\n    }\n}"
};
var FULL = "import {\n    tgdCanvasCreatePalette,\n    TgdContext,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterOverlay,\n    TgdPainterState,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    const clear = new TgdPainterClear(context, { color: [0, 0.3, 0.5, 1], depth: 1 })\n    const canvas = tgdCanvasCreatePalette([\"#f44b\", \"#4f4b\", \"#44fb\", \"#0000\"], 2, 2)\n    const overlay = new TgdPainterOverlay(context, {\n        margin: 16,\n        width: 160,\n        height: 120,\n        alignX: +1,\n        alignY: +1,\n        texture: new TgdTexture2D(context, {\n            load: canvas,\n            params: {\n                minFilter: \"NEAREST\",\n                magFilter: \"NEAREST\",\n            },\n            storage: { flipY: false },\n        }),\n    })\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.orbitAroundX(Math.random())\n    cube.transfo.orbitAroundY(Math.random())\n    cube.transfo.orbitAroundZ(Math.random())\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [cube],\n        }),\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [overlay],\n        }),\n    )\n    context.camera.fitSpaceAtTarget(1.2, 1.2)\n    context.paint()\n    overlay.eventTap.addListener((evt) => {\n        const ctx = canvas.getContext(\"2d\")\n        if (!ctx) return\n\n        const x = ((1 + evt.x) * ctx.canvas.width) / 2\n        const y = ((1 + evt.y) * ctx.canvas.height) / 2\n        ctx.fillStyle = \"#ff0\"\n        ctx.beginPath()\n        ctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2)\n        ctx.fill()\n    })\n    return ({ alignX, alignY }: { alignX: number; alignY: number }) => {\n        overlay.alignX = alignX\n        overlay.alignY = alignY\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            settings={{\n                alignX: {\n                    label: \"alignX\",\n                    value: 1,\n                    min: -1,\n                    max: +1,\n                },\n                alignY: {\n                    label: \"alignY\",\n                    value: 1,\n                    min: -1,\n                    max: +1,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/main.demo/main.demo.tsx",
        lineNumber: 71,
        columnNumber: 9
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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, { color: [0, 0.3, 0.5, 1], depth: 1 })\n    const canvas = tgdCanvasCreateFill(320, 180, \"#f90\")\n    const texture = new TgdTexture2D(context, {\n        load: canvas,\n        params: {\n            minFilter: \"NEAREST\",\n            magFilter: \"NEAREST\",\n        },\n        storage: { flipY: false },\n    })\n    const overlay = new TgdPainterOverlay(context, {\n        margin: [8, 64],\n        // width: canvas.width,\n        height: canvas.height,\n        alignX: -1,\n        alignY: +1,\n        texture,\n    })\n    overlay.eventResize.addListener(({ width, height }) => {\n        canvas.width = width\n        canvas.height = height\n        const ctx = canvas.getContext(\"2d\")\n        if (!ctx) return\n\n        const img = assets.image.image\n        const scaleX = width / img.width\n        const scaleY = height / img.height\n        const scale = Math.max(scaleX, scaleY)\n        const w = scale * img.width\n        const h = scale * img.height\n        const x = (width - w) / 2\n        const y = (height - h) / 2\n        ctx.drawImage(img, x, y, w, h)\n        texture.loadBitmap(canvas)\n        context.paint()\n    })\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.orbitAroundX(Math.random())\n    cube.transfo.orbitAroundY(Math.random())\n    cube.transfo.orbitAroundZ(Math.random())\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [cube],\n        }),\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [overlay],\n        }),\n    )\n    context.camera.fitSpaceAtTarget(1.2, 1.2)\n    context.paint()\n    overlay.eventTap.addListener((evt) => {\n        const ctx = canvas.getContext(\"2d\")\n        if (!ctx) return\n\n        const x = ((1 + evt.x) * ctx.canvas.width) / 2\n        const y = ((1 - evt.y) * ctx.canvas.height) / 2\n        ctx.fillStyle = \"#ff0\"\n        ctx.beginPath()\n        ctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2)\n        ctx.fill()\n        texture.loadBitmap(canvas)\n        context.paint()\n    })\n    return ({\n        alignX,\n        alignY,\n        marginTop,\n        marginRight,\n        marginBottom,\n        marginLeft,\n    }: {\n        alignX: number\n        alignY: number\n        marginTop: number\n        marginRight: number\n        marginBottom: number\n        marginLeft: number\n    }) => {\n        overlay.alignX = alignX\n        overlay.alignY = alignY\n        overlay.marginTop = marginTop\n        overlay.marginRight = marginRight\n        overlay.marginBottom = marginBottom\n        overlay.marginLeft = marginLeft\n        context.paint()\n    }\n}"
};
var FULL = "import {\n    tgdCanvasCreateFill,\n    TgdContext,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterOverlay,\n    TgdPainterState,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport ImageURL from \"@/assets/image/dino.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, { color: [0, 0.3, 0.5, 1], depth: 1 })\n    const canvas = tgdCanvasCreateFill(320, 180, \"#f90\")\n    const texture = new TgdTexture2D(context, {\n        load: canvas,\n        params: {\n            minFilter: \"NEAREST\",\n            magFilter: \"NEAREST\",\n        },\n        storage: { flipY: false },\n    })\n    const overlay = new TgdPainterOverlay(context, {\n        margin: [8, 64],\n        // width: canvas.width,\n        height: canvas.height,\n        alignX: -1,\n        alignY: +1,\n        texture,\n    })\n    overlay.eventResize.addListener(({ width, height }) => {\n        canvas.width = width\n        canvas.height = height\n        const ctx = canvas.getContext(\"2d\")\n        if (!ctx) return\n\n        const img = assets.image.image\n        const scaleX = width / img.width\n        const scaleY = height / img.height\n        const scale = Math.max(scaleX, scaleY)\n        const w = scale * img.width\n        const h = scale * img.height\n        const x = (width - w) / 2\n        const y = (height - h) / 2\n        ctx.drawImage(img, x, y, w, h)\n        texture.loadBitmap(canvas)\n        context.paint()\n    })\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.orbitAroundX(Math.random())\n    cube.transfo.orbitAroundY(Math.random())\n    cube.transfo.orbitAroundZ(Math.random())\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [cube],\n        }),\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [overlay],\n        }),\n    )\n    context.camera.fitSpaceAtTarget(1.2, 1.2)\n    context.paint()\n    overlay.eventTap.addListener((evt) => {\n        const ctx = canvas.getContext(\"2d\")\n        if (!ctx) return\n\n        const x = ((1 + evt.x) * ctx.canvas.width) / 2\n        const y = ((1 - evt.y) * ctx.canvas.height) / 2\n        ctx.fillStyle = \"#ff0\"\n        ctx.beginPath()\n        ctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2)\n        ctx.fill()\n        texture.loadBitmap(canvas)\n        context.paint()\n    })\n    return ({\n        alignX,\n        alignY,\n        marginTop,\n        marginRight,\n        marginBottom,\n        marginLeft,\n    }: {\n        alignX: number\n        alignY: number\n        marginTop: number\n        marginRight: number\n        marginBottom: number\n        marginLeft: number\n    }) => {\n        overlay.alignX = alignX\n        overlay.alignY = alignY\n        overlay.marginTop = marginTop\n        overlay.marginRight = marginRight\n        overlay.marginBottom = marginBottom\n        overlay.marginLeft = marginLeft\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            options={{\n                alpha: false,\n            }}\n            assets={{\n                image: {\n                    image: ImageURL,\n                },\n            }}\n            settings={{\n                alignX: {\n                    label: \"alignX\",\n                    value: -1,\n                    min: -1,\n                    max: +1,\n                },\n                alignY: {\n                    label: \"alignY\",\n                    value: 1,\n                    min: -1,\n                    max: +1,\n                },\n                marginTop: {\n                    label: \"marginTop\",\n                    value: 8,\n                    min: 0,\n                    max: 64,\n                },\n                marginRight: {\n                    label: \"marginRight\",\n                    value: 64,\n                    min: 0,\n                    max: 64,\n                },\n                marginBottom: {\n                    label: \"marginBottom\",\n                    value: 8,\n                    min: 0,\n                    max: 64,\n                },\n                marginLeft: {\n                    label: \"marginLeft\",\n                    value: 64,\n                    min: 0,\n                    max: 64,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_margin_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/_/margin.demo/margin.demo.tsx",
        lineNumber: 112,
        columnNumber: 9
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                    lineNumber: 4,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Alignement"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                        lineNumber: 8,
                        columnNumber: 5
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "alignY"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                        lineNumber: 8,
                        columnNumber: 18
                    }, this),
                    " to move the overlay around."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Margins and fullsize"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                        lineNumber: 14,
                        columnNumber: 25
                    }, this),
                    ", the overlay will take the maximum width, respecting the margins.\nThis is the same behaviour with the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "height"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                        lineNumber: 15,
                        columnNumber: 37
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                        lineNumber: 17,
                        columnNumber: 7
                    }, this),
                    " for overlay size changes."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_margin_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
                lineNumber: 19,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/overlay/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9vdmVybGF5X3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jcy05ZWVhOGQuNjEzNzAzMWFjZTc2Y2M4NC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL292ZXJsYXkvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL292ZXJsYXkvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9vdmVybGF5L18vbWFyZ2luLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL292ZXJsYXkvXy9tYXJnaW4uZGVtby9tYXJnaW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvb3ZlcmxheS9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAuMywgMC41LCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgY29uc3QgY2FudmFzID0gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXFxcIiNmNDRiXFxcIiwgXFxcIiM0ZjRiXFxcIiwgXFxcIiM0NGZiXFxcIiwgXFxcIiMwMDAwXFxcIl0sIDIsIDIpXFxuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgVGdkUGFpbnRlck92ZXJsYXkoY29udGV4dCwge1xcbiAgICAgICAgbWFyZ2luOiAxNixcXG4gICAgICAgIHdpZHRoOiAxNjAsXFxuICAgICAgICBoZWlnaHQ6IDEyMCxcXG4gICAgICAgIGFsaWduWDogKzEsXFxuICAgICAgICBhbGlnblk6ICsxLFxcbiAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICAgICAgbG9hZDogY2FudmFzLFxcbiAgICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiBmYWxzZSB9LFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWChNYXRoLnJhbmRvbSgpKVxcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRZKE1hdGgucmFuZG9tKCkpXFxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFooTWF0aC5yYW5kb20oKSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY3ViZV0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbb3ZlcmxheV0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEuMiwgMS4yKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgb3ZlcmxheS5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XFxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcXFwiMmRcXFwiKVxcbiAgICAgICAgaWYgKCFjdHgpIHJldHVyblxcblxcbiAgICAgICAgY29uc3QgeCA9ICgoMSArIGV2dC54KSAqIGN0eC5jYW52YXMud2lkdGgpIC8gMlxcbiAgICAgICAgY29uc3QgeSA9ICgoMSArIGV2dC55KSAqIGN0eC5jYW52YXMuaGVpZ2h0KSAvIDJcXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcXFwiI2ZmMFxcXCJcXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxcbiAgICAgICAgY3R4LmVsbGlwc2UoeCwgeSwgOCwgOCwgMCwgMCwgTWF0aC5QSSAqIDIpXFxuICAgICAgICBjdHguZmlsbCgpXFxuICAgIH0pXFxuICAgIHJldHVybiAoeyBhbGlnblgsIGFsaWduWSB9OiB7IGFsaWduWDogbnVtYmVyOyBhbGlnblk6IG51bWJlciB9KSA9PiB7XFxuICAgICAgICBvdmVybGF5LmFsaWduWCA9IGFsaWduWFxcbiAgICAgICAgb3ZlcmxheS5hbGlnblkgPSBhbGlnbllcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlck92ZXJsYXksXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAuMywgMC41LCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgY29uc3QgY2FudmFzID0gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXFxcIiNmNDRiXFxcIiwgXFxcIiM0ZjRiXFxcIiwgXFxcIiM0NGZiXFxcIiwgXFxcIiMwMDAwXFxcIl0sIDIsIDIpXFxuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgVGdkUGFpbnRlck92ZXJsYXkoY29udGV4dCwge1xcbiAgICAgICAgbWFyZ2luOiAxNixcXG4gICAgICAgIHdpZHRoOiAxNjAsXFxuICAgICAgICBoZWlnaHQ6IDEyMCxcXG4gICAgICAgIGFsaWduWDogKzEsXFxuICAgICAgICBhbGlnblk6ICsxLFxcbiAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICAgICAgbG9hZDogY2FudmFzLFxcbiAgICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiBmYWxzZSB9LFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWChNYXRoLnJhbmRvbSgpKVxcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRZKE1hdGgucmFuZG9tKCkpXFxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFooTWF0aC5yYW5kb20oKSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY3ViZV0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbb3ZlcmxheV0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEuMiwgMS4yKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgb3ZlcmxheS5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XFxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcXFwiMmRcXFwiKVxcbiAgICAgICAgaWYgKCFjdHgpIHJldHVyblxcblxcbiAgICAgICAgY29uc3QgeCA9ICgoMSArIGV2dC54KSAqIGN0eC5jYW52YXMud2lkdGgpIC8gMlxcbiAgICAgICAgY29uc3QgeSA9ICgoMSArIGV2dC55KSAqIGN0eC5jYW52YXMuaGVpZ2h0KSAvIDJcXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcXFwiI2ZmMFxcXCJcXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxcbiAgICAgICAgY3R4LmVsbGlwc2UoeCwgeSwgOCwgOCwgMCwgMCwgTWF0aC5QSSAqIDIpXFxuICAgICAgICBjdHguZmlsbCgpXFxuICAgIH0pXFxuICAgIHJldHVybiAoeyBhbGlnblgsIGFsaWduWSB9OiB7IGFsaWduWDogbnVtYmVyOyBhbGlnblk6IG51bWJlciB9KSA9PiB7XFxuICAgICAgICBvdmVybGF5LmFsaWduWCA9IGFsaWduWFxcbiAgICAgICAgb3ZlcmxheS5hbGlnblkgPSBhbGlnbllcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIHNldHRpbmdzPXt7XFxuICAgICAgICAgICAgICAgIGFsaWduWDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJhbGlnblhcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IC0xLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiArMSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgYWxpZ25ZOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcImFsaWduWVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTEsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6ICsxLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlck92ZXJsYXksXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLjMsIDAuNSwgMV0sIGRlcHRoOiAxIH0pXG4gICAgY29uc3QgY2FudmFzID0gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjZjQ0YlwiLCBcIiM0ZjRiXCIsIFwiIzQ0ZmJcIiwgXCIjMDAwMFwiXSwgMiwgMilcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFRnZFBhaW50ZXJPdmVybGF5KGNvbnRleHQsIHtcbiAgICAgICAgbWFyZ2luOiAxNixcbiAgICAgICAgd2lkdGg6IDE2MCxcbiAgICAgICAgaGVpZ2h0OiAxMjAsXG4gICAgICAgIGFsaWduWDogKzEsXG4gICAgICAgIGFsaWduWTogKzEsXG4gICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICAgICAgbG9hZDogY2FudmFzLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0b3JhZ2U6IHsgZmxpcFk6IGZhbHNlIH0sXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFgoTWF0aC5yYW5kb20oKSlcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRZKE1hdGgucmFuZG9tKCkpXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWihNYXRoLnJhbmRvbSgpKVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBjbGVhcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgICAgICBjdWxsOiBcImJhY2tcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY3ViZV0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGJsZW5kOiBcImFscGhhXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW292ZXJsYXldLFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxLjIsIDEuMilcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICBvdmVybGF5LmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IHtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuICAgICAgICBpZiAoIWN0eCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgeCA9ICgoMSArIGV2dC54KSAqIGN0eC5jYW52YXMud2lkdGgpIC8gMlxuICAgICAgICBjb25zdCB5ID0gKCgxICsgZXZ0LnkpICogY3R4LmNhbnZhcy5oZWlnaHQpIC8gMlxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjZmYwXCJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5lbGxpcHNlKHgsIHksIDgsIDgsIDAsIDAsIE1hdGguUEkgKiAyKVxuICAgICAgICBjdHguZmlsbCgpXG4gICAgfSlcbiAgICByZXR1cm4gKHsgYWxpZ25YLCBhbGlnblkgfTogeyBhbGlnblg6IG51bWJlcjsgYWxpZ25ZOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBvdmVybGF5LmFsaWduWCA9IGFsaWduWFxuICAgICAgICBvdmVybGF5LmFsaWduWSA9IGFsaWduWVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcbiAgICAgICAgICAgICAgICBhbGlnblg6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiYWxpZ25YXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgICAgICBtaW46IC0xLFxuICAgICAgICAgICAgICAgICAgICBtYXg6ICsxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWxpZ25ZOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImFsaWduWVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiArMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFyZ2luLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAuMywgMC41LCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgY29uc3QgY2FudmFzID0gdGdkQ2FudmFzQ3JlYXRlRmlsbCgzMjAsIDE4MCwgXFxcIiNmOTBcXFwiKVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBsb2FkOiBjYW52YXMsXFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiBmYWxzZSB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFRnZFBhaW50ZXJPdmVybGF5KGNvbnRleHQsIHtcXG4gICAgICAgIG1hcmdpbjogWzgsIDY0XSxcXG4gICAgICAgIC8vIHdpZHRoOiBjYW52YXMud2lkdGgsXFxuICAgICAgICBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQsXFxuICAgICAgICBhbGlnblg6IC0xLFxcbiAgICAgICAgYWxpZ25ZOiArMSxcXG4gICAgICAgIHRleHR1cmUsXFxuICAgIH0pXFxuICAgIG92ZXJsYXkuZXZlbnRSZXNpemUuYWRkTGlzdGVuZXIoKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XFxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aFxcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodFxcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXFxcIjJkXFxcIilcXG4gICAgICAgIGlmICghY3R4KSByZXR1cm5cXG5cXG4gICAgICAgIGNvbnN0IGltZyA9IGFzc2V0cy5pbWFnZS5pbWFnZVxcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gd2lkdGggLyBpbWcud2lkdGhcXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IGhlaWdodCAvIGltZy5oZWlnaHRcXG4gICAgICAgIGNvbnN0IHNjYWxlID0gTWF0aC5tYXgoc2NhbGVYLCBzY2FsZVkpXFxuICAgICAgICBjb25zdCB3ID0gc2NhbGUgKiBpbWcud2lkdGhcXG4gICAgICAgIGNvbnN0IGggPSBzY2FsZSAqIGltZy5oZWlnaHRcXG4gICAgICAgIGNvbnN0IHggPSAod2lkdGggLSB3KSAvIDJcXG4gICAgICAgIGNvbnN0IHkgPSAoaGVpZ2h0IC0gaCkgLyAyXFxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgeCwgeSwgdywgaClcXG4gICAgICAgIHRleHR1cmUubG9hZEJpdG1hcChjYW52YXMpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfSlcXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRYKE1hdGgucmFuZG9tKCkpXFxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFkoTWF0aC5yYW5kb20oKSlcXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWihNYXRoLnJhbmRvbSgpKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwiYmFja1xcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjdWJlXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgYmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtvdmVybGF5XSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS4yLCAxLjIpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICBvdmVybGF5LmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFxcXCIyZFxcXCIpXFxuICAgICAgICBpZiAoIWN0eCkgcmV0dXJuXFxuXFxuICAgICAgICBjb25zdCB4ID0gKCgxICsgZXZ0LngpICogY3R4LmNhbnZhcy53aWR0aCkgLyAyXFxuICAgICAgICBjb25zdCB5ID0gKCgxIC0gZXZ0LnkpICogY3R4LmNhbnZhcy5oZWlnaHQpIC8gMlxcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFxcXCIjZmYwXFxcIlxcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXFxuICAgICAgICBjdHguZWxsaXBzZSh4LCB5LCA4LCA4LCAwLCAwLCBNYXRoLlBJICogMilcXG4gICAgICAgIGN0eC5maWxsKClcXG4gICAgICAgIHRleHR1cmUubG9hZEJpdG1hcChjYW52YXMpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfSlcXG4gICAgcmV0dXJuICh7XFxuICAgICAgICBhbGlnblgsXFxuICAgICAgICBhbGlnblksXFxuICAgICAgICBtYXJnaW5Ub3AsXFxuICAgICAgICBtYXJnaW5SaWdodCxcXG4gICAgICAgIG1hcmdpbkJvdHRvbSxcXG4gICAgICAgIG1hcmdpbkxlZnQsXFxuICAgIH06IHtcXG4gICAgICAgIGFsaWduWDogbnVtYmVyXFxuICAgICAgICBhbGlnblk6IG51bWJlclxcbiAgICAgICAgbWFyZ2luVG9wOiBudW1iZXJcXG4gICAgICAgIG1hcmdpblJpZ2h0OiBudW1iZXJcXG4gICAgICAgIG1hcmdpbkJvdHRvbTogbnVtYmVyXFxuICAgICAgICBtYXJnaW5MZWZ0OiBudW1iZXJcXG4gICAgfSkgPT4ge1xcbiAgICAgICAgb3ZlcmxheS5hbGlnblggPSBhbGlnblhcXG4gICAgICAgIG92ZXJsYXkuYWxpZ25ZID0gYWxpZ25ZXFxuICAgICAgICBvdmVybGF5Lm1hcmdpblRvcCA9IG1hcmdpblRvcFxcbiAgICAgICAgb3ZlcmxheS5tYXJnaW5SaWdodCA9IG1hcmdpblJpZ2h0XFxuICAgICAgICBvdmVybGF5Lm1hcmdpbkJvdHRvbSA9IG1hcmdpbkJvdHRvbVxcbiAgICAgICAgb3ZlcmxheS5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdFxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0Z2RDYW52YXNDcmVhdGVGaWxsLFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyT3ZlcmxheSxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5cXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuaW1wb3J0IEltYWdlVVJMIGZyb20gXFxcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMC4zLCAwLjUsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBjYW52YXMgPSB0Z2RDYW52YXNDcmVhdGVGaWxsKDMyMCwgMTgwLCBcXFwiI2Y5MFxcXCIpXFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIGxvYWQ6IGNhbnZhcyxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHN0b3JhZ2U6IHsgZmxpcFk6IGZhbHNlIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgVGdkUGFpbnRlck92ZXJsYXkoY29udGV4dCwge1xcbiAgICAgICAgbWFyZ2luOiBbOCwgNjRdLFxcbiAgICAgICAgLy8gd2lkdGg6IGNhbnZhcy53aWR0aCxcXG4gICAgICAgIGhlaWdodDogY2FudmFzLmhlaWdodCxcXG4gICAgICAgIGFsaWduWDogLTEsXFxuICAgICAgICBhbGlnblk6ICsxLFxcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgfSlcXG4gICAgb3ZlcmxheS5ldmVudFJlc2l6ZS5hZGRMaXN0ZW5lcigoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoXFxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XFxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcXFwiMmRcXFwiKVxcbiAgICAgICAgaWYgKCFjdHgpIHJldHVyblxcblxcbiAgICAgICAgY29uc3QgaW1nID0gYXNzZXRzLmltYWdlLmltYWdlXFxuICAgICAgICBjb25zdCBzY2FsZVggPSB3aWR0aCAvIGltZy53aWR0aFxcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gaGVpZ2h0IC8gaW1nLmhlaWdodFxcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1heChzY2FsZVgsIHNjYWxlWSlcXG4gICAgICAgIGNvbnN0IHcgPSBzY2FsZSAqIGltZy53aWR0aFxcbiAgICAgICAgY29uc3QgaCA9IHNjYWxlICogaW1nLmhlaWdodFxcbiAgICAgICAgY29uc3QgeCA9ICh3aWR0aCAtIHcpIC8gMlxcbiAgICAgICAgY29uc3QgeSA9IChoZWlnaHQgLSBoKSAvIDJcXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCB3LCBoKVxcbiAgICAgICAgdGV4dHVyZS5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9KVxcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXFxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFgoTWF0aC5yYW5kb20oKSlcXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnJhbmRvbSgpKVxcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRaKE1hdGgucmFuZG9tKCkpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJiYWNrXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2N1YmVdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBibGVuZDogXFxcImFscGhhXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW292ZXJsYXldLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxLjIsIDEuMilcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIG92ZXJsYXkuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXFxcIjJkXFxcIilcXG4gICAgICAgIGlmICghY3R4KSByZXR1cm5cXG5cXG4gICAgICAgIGNvbnN0IHggPSAoKDEgKyBldnQueCkgKiBjdHguY2FudmFzLndpZHRoKSAvIDJcXG4gICAgICAgIGNvbnN0IHkgPSAoKDEgLSBldnQueSkgKiBjdHguY2FudmFzLmhlaWdodCkgLyAyXFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXFxcIiNmZjBcXFwiXFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcXG4gICAgICAgIGN0eC5lbGxpcHNlKHgsIHksIDgsIDgsIDAsIDAsIE1hdGguUEkgKiAyKVxcbiAgICAgICAgY3R4LmZpbGwoKVxcbiAgICAgICAgdGV4dHVyZS5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9KVxcbiAgICByZXR1cm4gKHtcXG4gICAgICAgIGFsaWduWCxcXG4gICAgICAgIGFsaWduWSxcXG4gICAgICAgIG1hcmdpblRvcCxcXG4gICAgICAgIG1hcmdpblJpZ2h0LFxcbiAgICAgICAgbWFyZ2luQm90dG9tLFxcbiAgICAgICAgbWFyZ2luTGVmdCxcXG4gICAgfToge1xcbiAgICAgICAgYWxpZ25YOiBudW1iZXJcXG4gICAgICAgIGFsaWduWTogbnVtYmVyXFxuICAgICAgICBtYXJnaW5Ub3A6IG51bWJlclxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IG51bWJlclxcbiAgICAgICAgbWFyZ2luQm90dG9tOiBudW1iZXJcXG4gICAgICAgIG1hcmdpbkxlZnQ6IG51bWJlclxcbiAgICB9KSA9PiB7XFxuICAgICAgICBvdmVybGF5LmFsaWduWCA9IGFsaWduWFxcbiAgICAgICAgb3ZlcmxheS5hbGlnblkgPSBhbGlnbllcXG4gICAgICAgIG92ZXJsYXkubWFyZ2luVG9wID0gbWFyZ2luVG9wXFxuICAgICAgICBvdmVybGF5Lm1hcmdpblJpZ2h0ID0gbWFyZ2luUmlnaHRcXG4gICAgICAgIG92ZXJsYXkubWFyZ2luQm90dG9tID0gbWFyZ2luQm90dG9tXFxuICAgICAgICBvdmVybGF5Lm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0XFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgb3B0aW9ucz17e1xcbiAgICAgICAgICAgICAgICBhbHBoYTogZmFsc2UsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBJbWFnZVVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIHNldHRpbmdzPXt7XFxuICAgICAgICAgICAgICAgIGFsaWduWDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJhbGlnblhcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IC0xLFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMSxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogKzEsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGFsaWduWToge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJhbGlnbllcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IC0xLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiArMSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcIm1hcmdpblRvcFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogOCxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogNjQsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcIm1hcmdpblJpZ2h0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA2NCxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogNjQsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbToge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJtYXJnaW5Cb3R0b21cXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDgsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDY0LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcIm1hcmdpbkxlZnRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDY0LFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA2NCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0Z2RDYW52YXNDcmVhdGVGaWxsLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJPdmVybGF5LFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgSW1hZ2VVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFwiXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMC4zLCAwLjUsIDFdLCBkZXB0aDogMSB9KVxuICAgIGNvbnN0IGNhbnZhcyA9IHRnZENhbnZhc0NyZWF0ZUZpbGwoMzIwLCAxODAsIFwiI2Y5MFwiKVxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgbG9hZDogY2FudmFzLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICB9LFxuICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiBmYWxzZSB9LFxuICAgIH0pXG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBUZ2RQYWludGVyT3ZlcmxheShjb250ZXh0LCB7XG4gICAgICAgIG1hcmdpbjogWzgsIDY0XSxcbiAgICAgICAgLy8gd2lkdGg6IGNhbnZhcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgICBhbGlnblg6IC0xLFxuICAgICAgICBhbGlnblk6ICsxLFxuICAgICAgICB0ZXh0dXJlLFxuICAgIH0pXG4gICAgb3ZlcmxheS5ldmVudFJlc2l6ZS5hZGRMaXN0ZW5lcigoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGhcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAgIGlmICghY3R4KSByZXR1cm5cblxuICAgICAgICBjb25zdCBpbWcgPSBhc3NldHMuaW1hZ2UuaW1hZ2VcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gd2lkdGggLyBpbWcud2lkdGhcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gaGVpZ2h0IC8gaW1nLmhlaWdodFxuICAgICAgICBjb25zdCBzY2FsZSA9IE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKVxuICAgICAgICBjb25zdCB3ID0gc2NhbGUgKiBpbWcud2lkdGhcbiAgICAgICAgY29uc3QgaCA9IHNjYWxlICogaW1nLmhlaWdodFxuICAgICAgICBjb25zdCB4ID0gKHdpZHRoIC0gdykgLyAyXG4gICAgICAgIGNvbnN0IHkgPSAoaGVpZ2h0IC0gaCkgLyAyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCB3LCBoKVxuICAgICAgICB0ZXh0dXJlLmxvYWRCaXRtYXAoY2FudmFzKVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9KVxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRYKE1hdGgucmFuZG9tKCkpXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnJhbmRvbSgpKVxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFooTWF0aC5yYW5kb20oKSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxuICAgICAgICAgICAgY3VsbDogXCJiYWNrXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2N1YmVdLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBibGVuZDogXCJhbHBoYVwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtvdmVybGF5XSxcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS4yLCAxLjIpXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgb3ZlcmxheS5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcbiAgICAgICAgaWYgKCFjdHgpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IHggPSAoKDEgKyBldnQueCkgKiBjdHguY2FudmFzLndpZHRoKSAvIDJcbiAgICAgICAgY29uc3QgeSA9ICgoMSAtIGV2dC55KSAqIGN0eC5jYW52YXMuaGVpZ2h0KSAvIDJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmMFwiXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHguZWxsaXBzZSh4LCB5LCA4LCA4LCAwLCAwLCBNYXRoLlBJICogMilcbiAgICAgICAgY3R4LmZpbGwoKVxuICAgICAgICB0ZXh0dXJlLmxvYWRCaXRtYXAoY2FudmFzKVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9KVxuICAgIHJldHVybiAoe1xuICAgICAgICBhbGlnblgsXG4gICAgICAgIGFsaWduWSxcbiAgICAgICAgbWFyZ2luVG9wLFxuICAgICAgICBtYXJnaW5SaWdodCxcbiAgICAgICAgbWFyZ2luQm90dG9tLFxuICAgICAgICBtYXJnaW5MZWZ0LFxuICAgIH06IHtcbiAgICAgICAgYWxpZ25YOiBudW1iZXJcbiAgICAgICAgYWxpZ25ZOiBudW1iZXJcbiAgICAgICAgbWFyZ2luVG9wOiBudW1iZXJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IG51bWJlclxuICAgICAgICBtYXJnaW5Cb3R0b206IG51bWJlclxuICAgICAgICBtYXJnaW5MZWZ0OiBudW1iZXJcbiAgICB9KSA9PiB7XG4gICAgICAgIG92ZXJsYXkuYWxpZ25YID0gYWxpZ25YXG4gICAgICAgIG92ZXJsYXkuYWxpZ25ZID0gYWxpZ25ZXG4gICAgICAgIG92ZXJsYXkubWFyZ2luVG9wID0gbWFyZ2luVG9wXG4gICAgICAgIG92ZXJsYXkubWFyZ2luUmlnaHQgPSBtYXJnaW5SaWdodFxuICAgICAgICBvdmVybGF5Lm1hcmdpbkJvdHRvbSA9IG1hcmdpbkJvdHRvbVxuICAgICAgICBvdmVybGF5Lm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0XG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIGFscGhhOiBmYWxzZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZTogSW1hZ2VVUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZXR0aW5ncz17e1xuICAgICAgICAgICAgICAgIGFsaWduWDoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJhbGlnblhcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICAgICAgICAgICAgICBtaW46IC0xLFxuICAgICAgICAgICAgICAgICAgICBtYXg6ICsxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWxpZ25ZOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImFsaWduWVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiArMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJtYXJnaW5Ub3BcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDgsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA2NCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1hcmdpblJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA2NCxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDY0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1hcmdpbkJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogOCxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDY0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJtYXJnaW5MZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA2NCxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDY0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlck92ZXJsYXkiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJjbGVhciIsImNhbnZhcyIsIm92ZXJsYXkiLCJjdWJlIiwiTWF0aCIsImV2dCIsImN0eCIsIngiLCJ5IiwiYWxpZ25YIiwiYWxpZ25ZIiwidGdkQ2FudmFzQ3JlYXRlRmlsbCIsIkltYWdlVVJMIiwiYXNzZXRzIiwidGV4dHVyZSIsIndpZHRoIiwiaGVpZ2h0IiwiaW1nIiwic2NhbGVYIiwic2NhbGVZIiwic2NhbGUiLCJ3IiwiaCIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5n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