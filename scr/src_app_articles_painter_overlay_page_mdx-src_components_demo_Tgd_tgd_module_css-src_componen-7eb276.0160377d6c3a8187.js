"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_overlay_page_mdx-src_components_demo_Tgd_tgd_module_css-src_componen-7eb276"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
11451(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(76413);





const FOCUS = { "Detail #1": "function init(context: TgdContext) {\n    const clear = new TgdPainterClear(context, { color: [0, 0.3, 0.5, 1], depth: 1 })\n    const canvas = tgdCanvasCreatePalette([\"#f44b\", \"#4f4b\", \"#44fb\", \"#0000\"], 2, 2)\n    const overlay = new TgdPainterOverlay(context, {\n        margin: 16,\n        width: 160,\n        height: 120,\n        alignX: +1,\n        alignY: +1,\n        texture: new TgdTexture2D(context, {\n            load: canvas,\n            params: {\n                minFilter: \"NEAREST\",\n                magFilter: \"NEAREST\",\n            },\n            storage: { flipY: false },\n        }),\n    })\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.orbitAroundX(Math.random())\n    cube.transfo.orbitAroundY(Math.random())\n    cube.transfo.orbitAroundZ(Math.random())\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [cube],\n        }),\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [overlay],\n        }),\n    )\n    context.camera.fitSpaceAtTarget(1.2, 1.2)\n    context.paint()\n    overlay.eventTap.addListener((evt) => {\n        const ctx = canvas.getContext(\"2d\")\n        if (!ctx) return\n\n        const x = ((1 + evt.x) * ctx.canvas.width) / 2\n        const y = ((1 + evt.y) * ctx.canvas.height) / 2\n        ctx.fillStyle = \"#ff0\"\n        ctx.beginPath()\n        ctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2)\n        ctx.fill()\n    })\n    return ({ alignX, alignY }: { alignX: number; alignY: number }) => {\n        overlay.alignX = alignX\n        overlay.alignY = alignY\n        context.paint()\n    }\n}" };
const FULL = "import {\n    tgdCanvasCreatePalette,\n    TgdContext,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterOverlay,\n    TgdPainterState,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    const clear = new TgdPainterClear(context, { color: [0, 0.3, 0.5, 1], depth: 1 })\n    const canvas = tgdCanvasCreatePalette([\"#f44b\", \"#4f4b\", \"#44fb\", \"#0000\"], 2, 2)\n    const overlay = new TgdPainterOverlay(context, {\n        margin: 16,\n        width: 160,\n        height: 120,\n        alignX: +1,\n        alignY: +1,\n        texture: new TgdTexture2D(context, {\n            load: canvas,\n            params: {\n                minFilter: \"NEAREST\",\n                magFilter: \"NEAREST\",\n            },\n            storage: { flipY: false },\n        }),\n    })\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.orbitAroundX(Math.random())\n    cube.transfo.orbitAroundY(Math.random())\n    cube.transfo.orbitAroundZ(Math.random())\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [cube],\n        }),\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [overlay],\n        }),\n    )\n    context.camera.fitSpaceAtTarget(1.2, 1.2)\n    context.paint()\n    overlay.eventTap.addListener((evt) => {\n        const ctx = canvas.getContext(\"2d\")\n        if (!ctx) return\n\n        const x = ((1 + evt.x) * ctx.canvas.width) / 2\n        const y = ((1 + evt.y) * ctx.canvas.height) / 2\n        ctx.fillStyle = \"#ff0\"\n        ctx.beginPath()\n        ctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2)\n        ctx.fill()\n    })\n    return ({ alignX, alignY }: { alignX: number; alignY: number }) => {\n        overlay.alignX = alignX\n        overlay.alignY = alignY\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            settings={{\n                alignX: {\n                    label: \"alignX\",\n                    value: 1,\n                    min: -1,\n                    max: +1,\n                },\n                alignY: {\n                    label: \"alignY\",\n                    value: 1,\n                    min: -1,\n                    max: +1,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_main_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
76413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);



function init(context) {
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, { color: [0, 0.3, 0.5, 1], depth: 1 });
    const canvas = (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)(["#f44b", "#4f4b", "#44fb", "#0000"], 2, 2);
    const overlay = new _tolokoban_tgd__rspack_import_1.TgdPainterOverlay(context, {
        margin: 16,
        width: 160,
        height: 120,
        alignX: +1,
        alignY: +1,
        texture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
            load: canvas,
            params: {
                minFilter: "NEAREST",
                magFilter: "NEAREST",
            },
            storage: { flipY: false },
        }),
    });
    const cube = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context);
    cube.transfo.orbitAroundX(Math.random());
    cube.transfo.orbitAroundY(Math.random());
    cube.transfo.orbitAroundZ(Math.random());
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: [cube],
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        blend: "alpha",
        children: [overlay],
    }));
    context.camera.fitSpaceAtTarget(1.2, 1.2);
    context.paint();
    overlay.eventTap.addListener((evt) => {
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        const x = ((1 + evt.x) * ctx.canvas.width) / 2;
        const y = ((1 + evt.y) * ctx.canvas.height) / 2;
        ctx.fillStyle = "#ff0";
        ctx.beginPath();
        ctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2);
        ctx.fill();
    });
    return ({ alignX, alignY }) => {
        overlay.alignX = alignX;
        overlay.alignY = alignY;
        context.paint();
    };
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, controller: {
            inertiaOrbit: 1000,
        }, options: {
            preserveDrawingBuffer: true,
        }, settings: {
            alignX: {
                label: "alignX",
                value: 1,
                min: -1,
                max: +1,
            },
            alignY: {
                label: "alignY",
                value: 1,
                min: -1,
                max: +1,
            },
        } }));
}


},
11532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _margin_demo__rspack_import_4 = __webpack_require__(84693);





const FOCUS = { "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, { color: [0, 0.3, 0.5, 1], depth: 1 })\n    const canvas = tgdCanvasCreateFill(320, 180, \"#f90\")\n    const texture = new TgdTexture2D(context, {\n        load: canvas,\n        params: {\n            minFilter: \"NEAREST\",\n            magFilter: \"NEAREST\",\n        },\n        storage: { flipY: false },\n    })\n    const overlay = new TgdPainterOverlay(context, {\n        margin: [8, 64],\n        // width: canvas.width,\n        height: canvas.height,\n        alignX: -1,\n        alignY: +1,\n        texture,\n    })\n    overlay.eventResize.addListener(({ width, height }) => {\n        canvas.width = width\n        canvas.height = height\n        const ctx = canvas.getContext(\"2d\")\n        if (!ctx) return\n\n        const img = assets.image.image\n        const scaleX = width / img.width\n        const scaleY = height / img.height\n        const scale = Math.max(scaleX, scaleY)\n        const w = scale * img.width\n        const h = scale * img.height\n        const x = (width - w) / 2\n        const y = (height - h) / 2\n        ctx.drawImage(img, x, y, w, h)\n        texture.loadBitmap(canvas)\n        context.paint()\n    })\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.orbitAroundX(Math.random())\n    cube.transfo.orbitAroundY(Math.random())\n    cube.transfo.orbitAroundZ(Math.random())\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [cube],\n        }),\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [overlay],\n        }),\n    )\n    context.camera.fitSpaceAtTarget(1.2, 1.2)\n    context.paint()\n    overlay.eventTap.addListener((evt) => {\n        const ctx = canvas.getContext(\"2d\")\n        if (!ctx) return\n\n        const x = ((1 + evt.x) * ctx.canvas.width) / 2\n        const y = ((1 - evt.y) * ctx.canvas.height) / 2\n        ctx.fillStyle = \"#ff0\"\n        ctx.beginPath()\n        ctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2)\n        ctx.fill()\n        texture.loadBitmap(canvas)\n        context.paint()\n    })\n    return ({\n        alignX,\n        alignY,\n        marginTop,\n        marginRight,\n        marginBottom,\n        marginLeft,\n    }: {\n        alignX: number\n        alignY: number\n        marginTop: number\n        marginRight: number\n        marginBottom: number\n        marginLeft: number\n    }) => {\n        overlay.alignX = alignX\n        overlay.alignY = alignY\n        overlay.marginTop = marginTop\n        overlay.marginRight = marginRight\n        overlay.marginBottom = marginBottom\n        overlay.marginLeft = marginLeft\n        context.paint()\n    }\n}" };
const FULL = "import {\n    tgdCanvasCreateFill,\n    TgdContext,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterOverlay,\n    TgdPainterState,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport ImageURL from \"@/assets/image/dino.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, { color: [0, 0.3, 0.5, 1], depth: 1 })\n    const canvas = tgdCanvasCreateFill(320, 180, \"#f90\")\n    const texture = new TgdTexture2D(context, {\n        load: canvas,\n        params: {\n            minFilter: \"NEAREST\",\n            magFilter: \"NEAREST\",\n        },\n        storage: { flipY: false },\n    })\n    const overlay = new TgdPainterOverlay(context, {\n        margin: [8, 64],\n        // width: canvas.width,\n        height: canvas.height,\n        alignX: -1,\n        alignY: +1,\n        texture,\n    })\n    overlay.eventResize.addListener(({ width, height }) => {\n        canvas.width = width\n        canvas.height = height\n        const ctx = canvas.getContext(\"2d\")\n        if (!ctx) return\n\n        const img = assets.image.image\n        const scaleX = width / img.width\n        const scaleY = height / img.height\n        const scale = Math.max(scaleX, scaleY)\n        const w = scale * img.width\n        const h = scale * img.height\n        const x = (width - w) / 2\n        const y = (height - h) / 2\n        ctx.drawImage(img, x, y, w, h)\n        texture.loadBitmap(canvas)\n        context.paint()\n    })\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.orbitAroundX(Math.random())\n    cube.transfo.orbitAroundY(Math.random())\n    cube.transfo.orbitAroundZ(Math.random())\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [cube],\n        }),\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [overlay],\n        }),\n    )\n    context.camera.fitSpaceAtTarget(1.2, 1.2)\n    context.paint()\n    overlay.eventTap.addListener((evt) => {\n        const ctx = canvas.getContext(\"2d\")\n        if (!ctx) return\n\n        const x = ((1 + evt.x) * ctx.canvas.width) / 2\n        const y = ((1 - evt.y) * ctx.canvas.height) / 2\n        ctx.fillStyle = \"#ff0\"\n        ctx.beginPath()\n        ctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2)\n        ctx.fill()\n        texture.loadBitmap(canvas)\n        context.paint()\n    })\n    return ({\n        alignX,\n        alignY,\n        marginTop,\n        marginRight,\n        marginBottom,\n        marginLeft,\n    }: {\n        alignX: number\n        alignY: number\n        marginTop: number\n        marginRight: number\n        marginBottom: number\n        marginLeft: number\n    }) => {\n        overlay.alignX = alignX\n        overlay.alignY = alignY\n        overlay.marginTop = marginTop\n        overlay.marginRight = marginRight\n        overlay.marginBottom = marginBottom\n        overlay.marginLeft = marginLeft\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            options={{\n                alpha: false,\n            }}\n            assets={{\n                image: {\n                    image: ImageURL,\n                },\n            }}\n            settings={{\n                alignX: {\n                    label: \"alignX\",\n                    value: -1,\n                    min: -1,\n                    max: +1,\n                },\n                alignY: {\n                    label: \"alignY\",\n                    value: 1,\n                    min: -1,\n                    max: +1,\n                },\n                marginTop: {\n                    label: \"marginTop\",\n                    value: 8,\n                    min: 0,\n                    max: 64,\n                },\n                marginRight: {\n                    label: \"marginRight\",\n                    value: 64,\n                    min: 0,\n                    max: 64,\n                },\n                marginBottom: {\n                    label: \"marginBottom\",\n                    value: 8,\n                    min: 0,\n                    max: 64,\n                },\n                marginLeft: {\n                    label: \"marginLeft\",\n                    value: 64,\n                    min: 0,\n                    max: 64,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_margin_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
84693(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _assets_image_dino_webp__rspack_import_3 = __webpack_require__(44859);




function init(context, assets) {
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, { color: [0, 0.3, 0.5, 1], depth: 1 });
    const canvas = (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateFill)(320, 180, "#f90");
    const texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        load: canvas,
        params: {
            minFilter: "NEAREST",
            magFilter: "NEAREST",
        },
        storage: { flipY: false },
    });
    const overlay = new _tolokoban_tgd__rspack_import_1.TgdPainterOverlay(context, {
        margin: [8, 64],
        height: canvas.height,
        alignX: -1,
        alignY: +1,
        texture,
    });
    overlay.eventResize.addListener(({ width, height }) => {
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        const img = assets.image.image;
        const scaleX = width / img.width;
        const scaleY = height / img.height;
        const scale = Math.max(scaleX, scaleY);
        const w = scale * img.width;
        const h = scale * img.height;
        const x = (width - w) / 2;
        const y = (height - h) / 2;
        ctx.drawImage(img, x, y, w, h);
        texture.loadBitmap(canvas);
        context.paint();
    });
    const cube = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context);
    cube.transfo.orbitAroundX(Math.random());
    cube.transfo.orbitAroundY(Math.random());
    cube.transfo.orbitAroundZ(Math.random());
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: [cube],
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        blend: "alpha",
        children: [overlay],
    }));
    context.camera.fitSpaceAtTarget(1.2, 1.2);
    context.paint();
    overlay.eventTap.addListener((evt) => {
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        const x = ((1 + evt.x) * ctx.canvas.width) / 2;
        const y = ((1 - evt.y) * ctx.canvas.height) / 2;
        ctx.fillStyle = "#ff0";
        ctx.beginPath();
        ctx.ellipse(x, y, 8, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        texture.loadBitmap(canvas);
        context.paint();
    });
    return ({ alignX, alignY, marginTop, marginRight, marginBottom, marginLeft, }) => {
        overlay.alignX = alignX;
        overlay.alignY = alignY;
        overlay.marginTop = marginTop;
        overlay.marginRight = marginRight;
        overlay.marginBottom = marginBottom;
        overlay.marginLeft = marginLeft;
        context.paint();
    };
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, controller: {
            inertiaOrbit: 1000,
        }, options: {
            alpha: false,
        }, assets: {
            image: {
                image: _assets_image_dino_webp__rspack_import_3,
            },
        }, settings: {
            alignX: {
                label: "alignX",
                value: -1,
                min: -1,
                max: +1,
            },
            alignY: {
                label: "alignY",
                value: 1,
                min: -1,
                max: +1,
            },
            marginTop: {
                label: "marginTop",
                value: 8,
                min: 0,
                max: 64,
            },
            marginRight: {
                label: "marginRight",
                value: 64,
                min: 0,
                max: 64,
            },
            marginBottom: {
                label: "marginBottom",
                value: 8,
                min: 0,
                max: 64,
            },
            marginLeft: {
                label: "marginLeft",
                value: 64,
                min: 0,
                max: 64,
            },
        } }));
}


},
5253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (CodeViewerView)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var prismjs__rspack_import_1 = __webpack_require__(28848);
/* import */ var prismjs__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(prismjs__rspack_import_1);
/* import */ var react__rspack_import_2 = __webpack_require__(96540);
/* import */ var react__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_2);
/* import */ var _CodeViewer_module_css__rspack_import_3 = __webpack_require__(62169);
/* import */ var _grammar__rspack_import_4 = __webpack_require__(7439);





function CodeViewerView(props) {
    const { value } = props;
    if (typeof value === "string") {
        const singleProps = {
            ...props,
            value,
        };
        return (0,react_jsx_runtime__rspack_import_0.jsx)(SingleCodeViewerView, { ...singleProps });
    }
    const multiProps = {
        ...props,
        value,
    };
    return (0,react_jsx_runtime__rspack_import_0.jsx)(MultiCodeViewerView, { ...multiProps });
}
function SingleCodeViewerView(props) {
    const refTimeout = react__rspack_import_2.useRef(0);
    const [popup, setPopup] = react__rspack_import_2.useState(false);
    const refCode = react__rspack_import_2.useRef(null);
    react__rspack_import_2.useEffect(() => {
        window.setTimeout(() => {
            const code = refCode.current;
            if (!code)
                return;
            const html = prismjs__rspack_import_1_default().highlight(props.value, (0,_grammar__rspack_import_4.getGrammarForLanguage)(props.language), props.language);
            code.innerHTML = html;
        }, 100);
    }, [props.value, props.language, refCode.current]);
    const handleDoubleClick = () => {
        navigator.clipboard.writeText(props.value).then(() => {
            setPopup(true);
            window.clearTimeout(refTimeout.current);
            refTimeout.current = window.setTimeout(() => setPopup(false), 7000);
        });
    };
    const handlePopupClick = () => {
        setPopup(false);
        window.clearTimeout(refTimeout.current);
        refTimeout.current = 0;
    };
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: getClassNames(props), onDoubleClick: handleDoubleClick, id: props.id, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("pre", { children: (0,react_jsx_runtime__rspack_import_0.jsx)("code", { ref: refCode, className: `language-${props.language}` }) }), popup && ((0,react_jsx_runtime__rspack_import_0.jsx)("button", { className: _CodeViewer_module_css__rspack_import_3["default"].popup, onClick: handlePopupClick, type: "button", children: (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "This code has been copied to the clipboard!" }) }))] }));
}
function getClassNames(props) {
    const classNames = [_CodeViewer_module_css__rspack_import_3["default"].CodeViewer];
    if (typeof props.className === "string") {
        classNames.push(props.className);
    }
    return classNames.join(" ");
}
function MultiCodeViewerView(props) {
    const captions = Object.keys(props.value);
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, { children: captions.map((caption, index) => ((0,react_jsx_runtime__rspack_import_0.jsxs)("details", { open: false, id: props.id, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("summary", { children: caption }), (0,react_jsx_runtime__rspack_import_0.jsx)(SingleCodeViewerView, { value: props.value[caption], language: props.language })] }, caption))) }));
}


},
7439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getGrammarForLanguage: () => (getGrammarForLanguage)
});
/* import */ var prismjs__rspack_import_0 = __webpack_require__(28848);
/* import */ var prismjs__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(prismjs__rspack_import_0);
/* import */ var prismjs_components_prism_javascript__rspack_import_1 = __webpack_require__(25723);
/* import */ var prismjs_components_prism_javascript__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__rspack_import_1);
/* import */ var prismjs_components_prism_jsx__rspack_import_2 = __webpack_require__(65903);
/* import */ var prismjs_components_prism_jsx__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx__rspack_import_2);
/* import */ var prismjs_components_prism_typescript__rspack_import_3 = __webpack_require__(59587);
/* import */ var prismjs_components_prism_typescript__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__rspack_import_3);
/* import */ var prismjs_components_prism_tsx__rspack_import_4 = __webpack_require__(82769);
/* import */ var prismjs_components_prism_tsx__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_tsx__rspack_import_4);
/* import */ var prismjs_components_prism_c__rspack_import_5 = __webpack_require__(50271);
/* import */ var prismjs_components_prism_c__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_c__rspack_import_5);
/* import */ var prismjs_components_prism_glsl__rspack_import_6 = __webpack_require__(73980);
/* import */ var prismjs_components_prism_glsl__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_glsl__rspack_import_6);







function getGrammarForLanguage(language) {
    switch (language) {
        case "ts":
            return (prismjs__rspack_import_0_default().languages.typescript);
        case "tsx":
            return (prismjs__rspack_import_0_default().languages.tsx);
        case "frag":
        case "vert":
            return (prismjs__rspack_import_0_default().languages.glsl);
        default:
            return GLSL;
    }
}
const TYPES = [
    "bvec2",
    "bvec3",
    "bvec4",
    "dmat2",
    "dmat2x2",
    "dmat2x3",
    "dmat2x4",
    "dmat3",
    "dmat3x2",
    "dmat3x3",
    "dmat3x4",
    "dmat4",
    "dmat4x2",
    "dmat4x3",
    "dmat4x4",
    "dvec2",
    "dvec3",
    "dvec4",
    "float",
    "fvec2",
    "fvec3",
    "fvec4",
    "isampler1D",
    "isampler1DArray",
    "isampler2D",
    "isampler2DArray",
    "isampler2DMS",
    "isampler2DMSArray",
    "isampler2DRect",
    "isampler3D",
    "isamplerBuffer",
    "isamplerCube",
    "isamplerCubeArray",
    "ivec2",
    "ivec3",
    "ivec4",
    "mat2",
    "mat2x2",
    "mat2x3",
    "mat2x4",
    "mat3",
    "mat3x2",
    "mat3x3",
    "mat3x4",
    "mat4",
    "mat4x2",
    "mat4x3",
    "mat4x4",
    "sample",
    "sampler1D",
    "sampler1DArray",
    "sampler1DArrayShadow",
    "sampler1DShadow",
    "sampler2D",
    "sampler2DArray",
    "sampler2DArrayShadow",
    "sampler2DMS",
    "sampler2DMSArray",
    "sampler2DRect",
    "sampler2DRectShadow",
    "sampler2DShadow",
    "sampler3D",
    "samplerBuffer",
    "samplerCube",
    "samplerCubeArray",
    "samplerCubeArrayShadow",
    "samplerCubeShadow",
    "usampler1D",
    "usampler1DArray",
    "usampler2D",
    "usampler2DArray",
    "usampler2DMS",
    "usampler2DMSArray",
    "usampler2DRect",
    "usampler3D",
    "usamplerBuffer",
    "usamplerCube",
    "usamplerCubeArray",
    "uvec2",
    "uvec3",
    "uvec4",
    "vec2",
    "vec3",
    "vec4",
    "void",
];
const KEYWORDS = [
    "centroid",
    "const",
    "discard",
    "else",
    "flat",
    "highp",
    "if",
    "in",
    "inout",
    "invariant",
    "layout",
    "lowp",
    "mediump",
    "noperspective",
    "out",
    "patch",
    "precision",
    "smooth",
    "subroutine",
    "uniform",
    "active",
    "asm",
    "cast",
    "class",
    "common",
    "enum",
    "extern",
    "external",
    "filter",
    "fixed",
    "goto",
    "half",
    "hvec2",
    "hvec3",
    "hvec4",
    "iimage1D",
    "iimage1DArray",
    "iimage2D",
    "iimage2DArray",
    "iimage3D",
    "iimageBuffer",
    "iimageCube",
    "image1D",
    "image1DArray",
    "image1DArrayShadow",
    "image1DShadow",
    "image2D",
    "image2DArray",
    "image2DArrayShadow",
    "image2DShadow",
    "image3D",
    "imageBuffer",
    "imageCube",
    "inline",
    "input",
    "interface",
    "long",
    "namespace",
    "noinline",
    "output",
    "packed",
    "partition",
    "public",
    "row_major",
    "sampler3DRect",
    "short",
    "sizeof",
    "static",
    "superp",
    "template",
    "this",
    "typedef",
    "uimage1D",
    "uimage1DArray",
    "uimage2D",
    "uimage2DArray",
    "uimage3D",
    "uimageBuffer",
    "uimageCube",
    "union",
    "unsigned",
    "using",
    "volatile",
];
const GLOBALS = [
    "gl_DepthRange",
    "gl_DepthRange.diff",
    "gl_DepthRange.far",
    "gl_DepthRange.near",
    "gl_FragCoord",
    "gl_FragDepth",
    "gl_FrontFacing",
    "gl_InstanceID",
    "gl_PointCoord",
    "gl_PointSize",
    "gl_Position",
    "gl_VertexID",
];
const FUNCTIONS = [
    "abs",
    "acos",
    "acosh",
    "all",
    "any",
    "asin",
    "asinh",
    "atan",
    "atanh",
    "ceil",
    "clamp",
    "cos",
    "cosh",
    "cross",
    "degrees",
    "determinant",
    "dFdx",
    "dFdy",
    "distance",
    "dot",
    "equal",
    "exp",
    "exp2",
    "faceforward",
    "floatBitsToInt",
    "floatBitsToUint",
    "floor",
    "fract",
    "fwidth",
    "greaterThan",
    "greaterThanEqual",
    "intBitsToFloat",
    "inverse",
    "inversesqrt",
    "isinf",
    "isnan",
    "length",
    "lessThan",
    "lessThanEqual",
    "log",
    "log2",
    "matrixCompMult",
    "max",
    "min",
    "mix",
    "mod",
    "modf",
    "normalize",
    "not",
    "notEqual",
    "outerProduct",
    "packHalf2x16",
    "packSnorm2x16",
    "packUnorm2x16",
    "pow",
    "radians",
    "reflect",
    "refract",
    "round",
    "roundEven",
    "sign",
    "sin",
    "sinh",
    "smoothstep",
    "sqrt",
    "step",
    "tan",
    "tanh",
    "texelFetch",
    "texelFetchOffset",
    "texture",
    "textureGrad",
    "textureGradOffset",
    "textureLod",
    "textureLodOffset",
    "textureOffset",
    "textureProj",
    "textureProjGrad",
    "textureProjGradOffset",
    "textureProjLod",
    "textureProjLodOffset",
    "textureProjOffset",
    "textureSize",
    "transpose",
    "trunc",
    "uintBitsToFloat",
    "unpackHalf2x16",
    "unpackSnorm2x16",
    "unpackUnorm2x16",
];
const GLSL = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/g,
            lookbehind: true,
            greedy: true,
        },
        {
            pattern: /(^|[^\\:])\/\/.*/g,
            lookbehind: true,
            greedy: true,
        },
        {
            pattern: /^#.+$/g,
            lookbehind: false,
            greedy: true,
        },
    ],
    number: {
        pattern: /(^|[^\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?|\d+(?:_\d+)*n|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?)(?![\w$])/,
        lookbehind: true,
    },
    type: makeIdentifiersRX(TYPES),
    keyword: makeIdentifiersRX(KEYWORDS),
    global: makeIdentifiersRX(GLOBALS),
    function: makeIdentifiersRX(FUNCTIONS),
};
function makeIdentifiersRX(words) {
    return {
        pattern: new RegExp(`(?:[^a-zA-Z0-9_])(${words.join("|")})(?=[^a-zA-Z0-9_])`),
        lookbehind: false,
        greedy: true,
    };
}


},
99002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _CodeViewer__rspack_import_0["default"])
});
/* import */ var _CodeViewer__rspack_import_0 = __webpack_require__(5253);



},
44859(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/dino.5737266deb4973e5.webp";

},
92055(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(11451);
/* import */ var _margin_demo__rspack_import_2 = __webpack_require__(11532);
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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9vdmVybGF5X3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fVGdkX3RnZF9tb2R1bGVfY3NzLXNyY19jb21wb25lbi03ZWIyNzYuMDE2MDM3N2Q2YzNhODE4Ny5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL292ZXJsYXkvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL292ZXJsYXkvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9vdmVybGF5L18vbWFyZ2luLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL292ZXJsYXkvXy9tYXJnaW4uZGVtby9tYXJnaW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9vdmVybGF5L3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMC4zLCAwLjUsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBjYW52YXMgPSB0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcXFwiI2Y0NGJcXFwiLCBcXFwiIzRmNGJcXFwiLCBcXFwiIzQ0ZmJcXFwiLCBcXFwiIzAwMDBcXFwiXSwgMiwgMilcXG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBUZ2RQYWludGVyT3ZlcmxheShjb250ZXh0LCB7XFxuICAgICAgICBtYXJnaW46IDE2LFxcbiAgICAgICAgd2lkdGg6IDE2MCxcXG4gICAgICAgIGhlaWdodDogMTIwLFxcbiAgICAgICAgYWxpZ25YOiArMSxcXG4gICAgICAgIGFsaWduWTogKzEsXFxuICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBsb2FkOiBjYW52YXMsXFxuICAgICAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgIG1pbkZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHN0b3JhZ2U6IHsgZmxpcFk6IGZhbHNlIH0sXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRYKE1hdGgucmFuZG9tKCkpXFxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFkoTWF0aC5yYW5kb20oKSlcXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWihNYXRoLnJhbmRvbSgpKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwiYmFja1xcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjdWJlXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgYmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtvdmVybGF5XSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS4yLCAxLjIpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICBvdmVybGF5LmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFxcXCIyZFxcXCIpXFxuICAgICAgICBpZiAoIWN0eCkgcmV0dXJuXFxuXFxuICAgICAgICBjb25zdCB4ID0gKCgxICsgZXZ0LngpICogY3R4LmNhbnZhcy53aWR0aCkgLyAyXFxuICAgICAgICBjb25zdCB5ID0gKCgxICsgZXZ0LnkpICogY3R4LmNhbnZhcy5oZWlnaHQpIC8gMlxcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFxcXCIjZmYwXFxcIlxcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXFxuICAgICAgICBjdHguZWxsaXBzZSh4LCB5LCA4LCA4LCAwLCAwLCBNYXRoLlBJICogMilcXG4gICAgICAgIGN0eC5maWxsKClcXG4gICAgfSlcXG4gICAgcmV0dXJuICh7IGFsaWduWCwgYWxpZ25ZIH06IHsgYWxpZ25YOiBudW1iZXI7IGFsaWduWTogbnVtYmVyIH0pID0+IHtcXG4gICAgICAgIG92ZXJsYXkuYWxpZ25YID0gYWxpZ25YXFxuICAgICAgICBvdmVybGF5LmFsaWduWSA9IGFsaWduWVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyT3ZlcmxheSxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5cXG5pbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMC4zLCAwLjUsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBjYW52YXMgPSB0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcXFwiI2Y0NGJcXFwiLCBcXFwiIzRmNGJcXFwiLCBcXFwiIzQ0ZmJcXFwiLCBcXFwiIzAwMDBcXFwiXSwgMiwgMilcXG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBUZ2RQYWludGVyT3ZlcmxheShjb250ZXh0LCB7XFxuICAgICAgICBtYXJnaW46IDE2LFxcbiAgICAgICAgd2lkdGg6IDE2MCxcXG4gICAgICAgIGhlaWdodDogMTIwLFxcbiAgICAgICAgYWxpZ25YOiArMSxcXG4gICAgICAgIGFsaWduWTogKzEsXFxuICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBsb2FkOiBjYW52YXMsXFxuICAgICAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgIG1pbkZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHN0b3JhZ2U6IHsgZmxpcFk6IGZhbHNlIH0sXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRYKE1hdGgucmFuZG9tKCkpXFxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFkoTWF0aC5yYW5kb20oKSlcXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWihNYXRoLnJhbmRvbSgpKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwiYmFja1xcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjdWJlXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgYmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtvdmVybGF5XSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS4yLCAxLjIpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICBvdmVybGF5LmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFxcXCIyZFxcXCIpXFxuICAgICAgICBpZiAoIWN0eCkgcmV0dXJuXFxuXFxuICAgICAgICBjb25zdCB4ID0gKCgxICsgZXZ0LngpICogY3R4LmNhbnZhcy53aWR0aCkgLyAyXFxuICAgICAgICBjb25zdCB5ID0gKCgxICsgZXZ0LnkpICogY3R4LmNhbnZhcy5oZWlnaHQpIC8gMlxcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFxcXCIjZmYwXFxcIlxcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXFxuICAgICAgICBjdHguZWxsaXBzZSh4LCB5LCA4LCA4LCAwLCAwLCBNYXRoLlBJICogMilcXG4gICAgICAgIGN0eC5maWxsKClcXG4gICAgfSlcXG4gICAgcmV0dXJuICh7IGFsaWduWCwgYWxpZ25ZIH06IHsgYWxpZ25YOiBudW1iZXI7IGFsaWduWTogbnVtYmVyIH0pID0+IHtcXG4gICAgICAgIG92ZXJsYXkuYWxpZ25YID0gYWxpZ25YXFxuICAgICAgICBvdmVybGF5LmFsaWduWSA9IGFsaWduWVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcXG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcXG4gICAgICAgICAgICAgICAgYWxpZ25YOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcImFsaWduWFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTEsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6ICsxLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBhbGlnblk6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcXFwiYWxpZ25ZXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMSxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogKzEsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyT3ZlcmxheSxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAuMywgMC41LCAxXSwgZGVwdGg6IDEgfSlcbiAgICBjb25zdCBjYW52YXMgPSB0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiNmNDRiXCIsIFwiIzRmNGJcIiwgXCIjNDRmYlwiLCBcIiMwMDAwXCJdLCAyLCAyKVxuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgVGdkUGFpbnRlck92ZXJsYXkoY29udGV4dCwge1xuICAgICAgICBtYXJnaW46IDE2LFxuICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICBoZWlnaHQ6IDEyMCxcbiAgICAgICAgYWxpZ25YOiArMSxcbiAgICAgICAgYWxpZ25ZOiArMSxcbiAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgICAgICBsb2FkOiBjYW52YXMsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RvcmFnZTogeyBmbGlwWTogZmFsc2UgfSxcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWChNYXRoLnJhbmRvbSgpKVxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFkoTWF0aC5yYW5kb20oKSlcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRaKE1hdGgucmFuZG9tKCkpXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgICAgIGN1bGw6IFwiYmFja1wiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjdWJlXSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgYmxlbmQ6IFwiYWxwaGFcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbb3ZlcmxheV0sXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEuMiwgMS4yKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIG92ZXJsYXkuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAgIGlmICghY3R4KSByZXR1cm5cblxuICAgICAgICBjb25zdCB4ID0gKCgxICsgZXZ0LngpICogY3R4LmNhbnZhcy53aWR0aCkgLyAyXG4gICAgICAgIGNvbnN0IHkgPSAoKDEgKyBldnQueSkgKiBjdHguY2FudmFzLmhlaWdodCkgLyAyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZjBcIlxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmVsbGlwc2UoeCwgeSwgOCwgOCwgMCwgMCwgTWF0aC5QSSAqIDIpXG4gICAgICAgIGN0eC5maWxsKClcbiAgICB9KVxuICAgIHJldHVybiAoeyBhbGlnblgsIGFsaWduWSB9OiB7IGFsaWduWDogbnVtYmVyOyBhbGlnblk6IG51bWJlciB9KSA9PiB7XG4gICAgICAgIG92ZXJsYXkuYWxpZ25YID0gYWxpZ25YXG4gICAgICAgIG92ZXJsYXkuYWxpZ25ZID0gYWxpZ25ZXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZXR0aW5ncz17e1xuICAgICAgICAgICAgICAgIGFsaWduWDoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJhbGlnblhcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICAgICAgICAgIG1heDogKzEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhbGlnblk6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiYWxpZ25ZXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgICAgICBtaW46IC0xLFxuICAgICAgICAgICAgICAgICAgICBtYXg6ICsxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYXJnaW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMC4zLCAwLjUsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBjYW52YXMgPSB0Z2RDYW52YXNDcmVhdGVGaWxsKDMyMCwgMTgwLCBcXFwiI2Y5MFxcXCIpXFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIGxvYWQ6IGNhbnZhcyxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHN0b3JhZ2U6IHsgZmxpcFk6IGZhbHNlIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgVGdkUGFpbnRlck92ZXJsYXkoY29udGV4dCwge1xcbiAgICAgICAgbWFyZ2luOiBbOCwgNjRdLFxcbiAgICAgICAgLy8gd2lkdGg6IGNhbnZhcy53aWR0aCxcXG4gICAgICAgIGhlaWdodDogY2FudmFzLmhlaWdodCxcXG4gICAgICAgIGFsaWduWDogLTEsXFxuICAgICAgICBhbGlnblk6ICsxLFxcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgfSlcXG4gICAgb3ZlcmxheS5ldmVudFJlc2l6ZS5hZGRMaXN0ZW5lcigoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoXFxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XFxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcXFwiMmRcXFwiKVxcbiAgICAgICAgaWYgKCFjdHgpIHJldHVyblxcblxcbiAgICAgICAgY29uc3QgaW1nID0gYXNzZXRzLmltYWdlLmltYWdlXFxuICAgICAgICBjb25zdCBzY2FsZVggPSB3aWR0aCAvIGltZy53aWR0aFxcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gaGVpZ2h0IC8gaW1nLmhlaWdodFxcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1heChzY2FsZVgsIHNjYWxlWSlcXG4gICAgICAgIGNvbnN0IHcgPSBzY2FsZSAqIGltZy53aWR0aFxcbiAgICAgICAgY29uc3QgaCA9IHNjYWxlICogaW1nLmhlaWdodFxcbiAgICAgICAgY29uc3QgeCA9ICh3aWR0aCAtIHcpIC8gMlxcbiAgICAgICAgY29uc3QgeSA9IChoZWlnaHQgLSBoKSAvIDJcXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCB3LCBoKVxcbiAgICAgICAgdGV4dHVyZS5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9KVxcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXFxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFgoTWF0aC5yYW5kb20oKSlcXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnJhbmRvbSgpKVxcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRaKE1hdGgucmFuZG9tKCkpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJiYWNrXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2N1YmVdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBibGVuZDogXFxcImFscGhhXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW292ZXJsYXldLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxLjIsIDEuMilcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIG92ZXJsYXkuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXFxcIjJkXFxcIilcXG4gICAgICAgIGlmICghY3R4KSByZXR1cm5cXG5cXG4gICAgICAgIGNvbnN0IHggPSAoKDEgKyBldnQueCkgKiBjdHguY2FudmFzLndpZHRoKSAvIDJcXG4gICAgICAgIGNvbnN0IHkgPSAoKDEgLSBldnQueSkgKiBjdHguY2FudmFzLmhlaWdodCkgLyAyXFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXFxcIiNmZjBcXFwiXFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcXG4gICAgICAgIGN0eC5lbGxpcHNlKHgsIHksIDgsIDgsIDAsIDAsIE1hdGguUEkgKiAyKVxcbiAgICAgICAgY3R4LmZpbGwoKVxcbiAgICAgICAgdGV4dHVyZS5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9KVxcbiAgICByZXR1cm4gKHtcXG4gICAgICAgIGFsaWduWCxcXG4gICAgICAgIGFsaWduWSxcXG4gICAgICAgIG1hcmdpblRvcCxcXG4gICAgICAgIG1hcmdpblJpZ2h0LFxcbiAgICAgICAgbWFyZ2luQm90dG9tLFxcbiAgICAgICAgbWFyZ2luTGVmdCxcXG4gICAgfToge1xcbiAgICAgICAgYWxpZ25YOiBudW1iZXJcXG4gICAgICAgIGFsaWduWTogbnVtYmVyXFxuICAgICAgICBtYXJnaW5Ub3A6IG51bWJlclxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IG51bWJlclxcbiAgICAgICAgbWFyZ2luQm90dG9tOiBudW1iZXJcXG4gICAgICAgIG1hcmdpbkxlZnQ6IG51bWJlclxcbiAgICB9KSA9PiB7XFxuICAgICAgICBvdmVybGF5LmFsaWduWCA9IGFsaWduWFxcbiAgICAgICAgb3ZlcmxheS5hbGlnblkgPSBhbGlnbllcXG4gICAgICAgIG92ZXJsYXkubWFyZ2luVG9wID0gbWFyZ2luVG9wXFxuICAgICAgICBvdmVybGF5Lm1hcmdpblJpZ2h0ID0gbWFyZ2luUmlnaHRcXG4gICAgICAgIG92ZXJsYXkubWFyZ2luQm90dG9tID0gbWFyZ2luQm90dG9tXFxuICAgICAgICBvdmVybGF5Lm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0XFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHRnZENhbnZhc0NyZWF0ZUZpbGwsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJPdmVybGF5LFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5pbXBvcnQgSW1hZ2VVUkwgZnJvbSBcXFwiQC9hc3NldHMvaW1hZ2UvZGluby53ZWJwXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLjMsIDAuNSwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIGNvbnN0IGNhbnZhcyA9IHRnZENhbnZhc0NyZWF0ZUZpbGwoMzIwLCAxODAsIFxcXCIjZjkwXFxcIilcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgbG9hZDogY2FudmFzLFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgc3RvcmFnZTogeyBmbGlwWTogZmFsc2UgfSxcXG4gICAgfSlcXG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBUZ2RQYWludGVyT3ZlcmxheShjb250ZXh0LCB7XFxuICAgICAgICBtYXJnaW46IFs4LCA2NF0sXFxuICAgICAgICAvLyB3aWR0aDogY2FudmFzLndpZHRoLFxcbiAgICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxcbiAgICAgICAgYWxpZ25YOiAtMSxcXG4gICAgICAgIGFsaWduWTogKzEsXFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICB9KVxcbiAgICBvdmVybGF5LmV2ZW50UmVzaXplLmFkZExpc3RlbmVyKCh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGhcXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFxcXCIyZFxcXCIpXFxuICAgICAgICBpZiAoIWN0eCkgcmV0dXJuXFxuXFxuICAgICAgICBjb25zdCBpbWcgPSBhc3NldHMuaW1hZ2UuaW1hZ2VcXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHdpZHRoIC8gaW1nLndpZHRoXFxuICAgICAgICBjb25zdCBzY2FsZVkgPSBoZWlnaHQgLyBpbWcuaGVpZ2h0XFxuICAgICAgICBjb25zdCBzY2FsZSA9IE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKVxcbiAgICAgICAgY29uc3QgdyA9IHNjYWxlICogaW1nLndpZHRoXFxuICAgICAgICBjb25zdCBoID0gc2NhbGUgKiBpbWcuaGVpZ2h0XFxuICAgICAgICBjb25zdCB4ID0gKHdpZHRoIC0gdykgLyAyXFxuICAgICAgICBjb25zdCB5ID0gKGhlaWdodCAtIGgpIC8gMlxcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHcsIGgpXFxuICAgICAgICB0ZXh0dXJlLmxvYWRCaXRtYXAoY2FudmFzKVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH0pXFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWChNYXRoLnJhbmRvbSgpKVxcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRZKE1hdGgucmFuZG9tKCkpXFxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFooTWF0aC5yYW5kb20oKSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY3ViZV0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbb3ZlcmxheV0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEuMiwgMS4yKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgb3ZlcmxheS5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XFxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcXFwiMmRcXFwiKVxcbiAgICAgICAgaWYgKCFjdHgpIHJldHVyblxcblxcbiAgICAgICAgY29uc3QgeCA9ICgoMSArIGV2dC54KSAqIGN0eC5jYW52YXMud2lkdGgpIC8gMlxcbiAgICAgICAgY29uc3QgeSA9ICgoMSAtIGV2dC55KSAqIGN0eC5jYW52YXMuaGVpZ2h0KSAvIDJcXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcXFwiI2ZmMFxcXCJcXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxcbiAgICAgICAgY3R4LmVsbGlwc2UoeCwgeSwgOCwgOCwgMCwgMCwgTWF0aC5QSSAqIDIpXFxuICAgICAgICBjdHguZmlsbCgpXFxuICAgICAgICB0ZXh0dXJlLmxvYWRCaXRtYXAoY2FudmFzKVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH0pXFxuICAgIHJldHVybiAoe1xcbiAgICAgICAgYWxpZ25YLFxcbiAgICAgICAgYWxpZ25ZLFxcbiAgICAgICAgbWFyZ2luVG9wLFxcbiAgICAgICAgbWFyZ2luUmlnaHQsXFxuICAgICAgICBtYXJnaW5Cb3R0b20sXFxuICAgICAgICBtYXJnaW5MZWZ0LFxcbiAgICB9OiB7XFxuICAgICAgICBhbGlnblg6IG51bWJlclxcbiAgICAgICAgYWxpZ25ZOiBudW1iZXJcXG4gICAgICAgIG1hcmdpblRvcDogbnVtYmVyXFxuICAgICAgICBtYXJnaW5SaWdodDogbnVtYmVyXFxuICAgICAgICBtYXJnaW5Cb3R0b206IG51bWJlclxcbiAgICAgICAgbWFyZ2luTGVmdDogbnVtYmVyXFxuICAgIH0pID0+IHtcXG4gICAgICAgIG92ZXJsYXkuYWxpZ25YID0gYWxpZ25YXFxuICAgICAgICBvdmVybGF5LmFsaWduWSA9IGFsaWduWVxcbiAgICAgICAgb3ZlcmxheS5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3BcXG4gICAgICAgIG92ZXJsYXkubWFyZ2luUmlnaHQgPSBtYXJnaW5SaWdodFxcbiAgICAgICAgb3ZlcmxheS5tYXJnaW5Cb3R0b20gPSBtYXJnaW5Cb3R0b21cXG4gICAgICAgIG92ZXJsYXkubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnRcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIGFscGhhOiBmYWxzZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IEltYWdlVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcXG4gICAgICAgICAgICAgICAgYWxpZ25YOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcImFsaWduWFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogLTEsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IC0xLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiArMSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgYWxpZ25ZOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcImFsaWduWVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTEsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6ICsxLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcXFwibWFyZ2luVG9wXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA4LFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA2NCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcXFwibWFyZ2luUmlnaHRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDY0LFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA2NCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcIm1hcmdpbkJvdHRvbVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogOCxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogNjQsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcXFwibWFyZ2luTGVmdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNjQsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDY0LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHRnZENhbnZhc0NyZWF0ZUZpbGwsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlck92ZXJsYXksXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmltcG9ydCBJbWFnZVVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvZGluby53ZWJwXCJcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLjMsIDAuNSwgMV0sIGRlcHRoOiAxIH0pXG4gICAgY29uc3QgY2FudmFzID0gdGdkQ2FudmFzQ3JlYXRlRmlsbCgzMjAsIDE4MCwgXCIjZjkwXCIpXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICBsb2FkOiBjYW52YXMsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgbWluRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHN0b3JhZ2U6IHsgZmxpcFk6IGZhbHNlIH0sXG4gICAgfSlcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFRnZFBhaW50ZXJPdmVybGF5KGNvbnRleHQsIHtcbiAgICAgICAgbWFyZ2luOiBbOCwgNjRdLFxuICAgICAgICAvLyB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQsXG4gICAgICAgIGFsaWduWDogLTEsXG4gICAgICAgIGFsaWduWTogKzEsXG4gICAgICAgIHRleHR1cmUsXG4gICAgfSlcbiAgICBvdmVybGF5LmV2ZW50UmVzaXplLmFkZExpc3RlbmVyKCh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aFxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcbiAgICAgICAgaWYgKCFjdHgpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IGltZyA9IGFzc2V0cy5pbWFnZS5pbWFnZVxuICAgICAgICBjb25zdCBzY2FsZVggPSB3aWR0aCAvIGltZy53aWR0aFxuICAgICAgICBjb25zdCBzY2FsZVkgPSBoZWlnaHQgLyBpbWcuaGVpZ2h0XG4gICAgICAgIGNvbnN0IHNjYWxlID0gTWF0aC5tYXgoc2NhbGVYLCBzY2FsZVkpXG4gICAgICAgIGNvbnN0IHcgPSBzY2FsZSAqIGltZy53aWR0aFxuICAgICAgICBjb25zdCBoID0gc2NhbGUgKiBpbWcuaGVpZ2h0XG4gICAgICAgIGNvbnN0IHggPSAod2lkdGggLSB3KSAvIDJcbiAgICAgICAgY29uc3QgeSA9IChoZWlnaHQgLSBoKSAvIDJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHcsIGgpXG4gICAgICAgIHRleHR1cmUubG9hZEJpdG1hcChjYW52YXMpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH0pXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFgoTWF0aC5yYW5kb20oKSlcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRZKE1hdGgucmFuZG9tKCkpXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWihNYXRoLnJhbmRvbSgpKVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBjbGVhcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgICAgICBjdWxsOiBcImJhY2tcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY3ViZV0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGJsZW5kOiBcImFscGhhXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW292ZXJsYXldLFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxLjIsIDEuMilcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICBvdmVybGF5LmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IHtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuICAgICAgICBpZiAoIWN0eCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgeCA9ICgoMSArIGV2dC54KSAqIGN0eC5jYW52YXMud2lkdGgpIC8gMlxuICAgICAgICBjb25zdCB5ID0gKCgxIC0gZXZ0LnkpICogY3R4LmNhbnZhcy5oZWlnaHQpIC8gMlxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjZmYwXCJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5lbGxpcHNlKHgsIHksIDgsIDgsIDAsIDAsIE1hdGguUEkgKiAyKVxuICAgICAgICBjdHguZmlsbCgpXG4gICAgICAgIHRleHR1cmUubG9hZEJpdG1hcChjYW52YXMpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH0pXG4gICAgcmV0dXJuICh7XG4gICAgICAgIGFsaWduWCxcbiAgICAgICAgYWxpZ25ZLFxuICAgICAgICBtYXJnaW5Ub3AsXG4gICAgICAgIG1hcmdpblJpZ2h0LFxuICAgICAgICBtYXJnaW5Cb3R0b20sXG4gICAgICAgIG1hcmdpbkxlZnQsXG4gICAgfToge1xuICAgICAgICBhbGlnblg6IG51bWJlclxuICAgICAgICBhbGlnblk6IG51bWJlclxuICAgICAgICBtYXJnaW5Ub3A6IG51bWJlclxuICAgICAgICBtYXJnaW5SaWdodDogbnVtYmVyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogbnVtYmVyXG4gICAgICAgIG1hcmdpbkxlZnQ6IG51bWJlclxuICAgIH0pID0+IHtcbiAgICAgICAgb3ZlcmxheS5hbGlnblggPSBhbGlnblhcbiAgICAgICAgb3ZlcmxheS5hbGlnblkgPSBhbGlnbllcbiAgICAgICAgb3ZlcmxheS5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3BcbiAgICAgICAgb3ZlcmxheS5tYXJnaW5SaWdodCA9IG1hcmdpblJpZ2h0XG4gICAgICAgIG92ZXJsYXkubWFyZ2luQm90dG9tID0gbWFyZ2luQm90dG9tXG4gICAgICAgIG92ZXJsYXkubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnRcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgYWxwaGE6IGZhbHNlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBJbWFnZVVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNldHRpbmdzPXt7XG4gICAgICAgICAgICAgICAgYWxpZ25YOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImFsaWduWFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICAgICAgICAgIG1heDogKzEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhbGlnblk6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiYWxpZ25ZXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgICAgICBtaW46IC0xLFxuICAgICAgICAgICAgICAgICAgICBtYXg6ICsxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1hcmdpblRvcFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogOCxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDY0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibWFyZ2luUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDY0LFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibWFyZ2luQm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA4LFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1hcmdpbkxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDY0LFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29kZVZpZXdlclwiXG4iLCIi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