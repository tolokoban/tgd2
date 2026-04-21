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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9vdmVybGF5X3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fVGdkX3RnZF9tb2R1bGVfY3NzLXNyY19jb21wb25lbi03ZWIyNzYuY2I3Yzc5MmUxZTdkY2I4OS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9vdmVybGF5L18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvb3ZlcmxheS9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9vdmVybGF5L18vbWFyZ2luLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9vdmVybGF5L18vbWFyZ2luLmRlbW8vbWFyZ2luLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9Db2RlVmlld2VyLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvaW5kZXgudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL292ZXJsYXkvcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNvZGVWaWV3ZXJcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9Db2RlVmlld2VyX1B0TDdNNVwiLFwicG9wdXBcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9wb3B1cF9uU0RaQ1JcIn07IiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLjMsIDAuNSwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIGNvbnN0IGNhbnZhcyA9IHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjZjQ0YlxcXCIsIFxcXCIjNGY0YlxcXCIsIFxcXCIjNDRmYlxcXCIsIFxcXCIjMDAwMFxcXCJdLCAyLCAyKVxcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFRnZFBhaW50ZXJPdmVybGF5KGNvbnRleHQsIHtcXG4gICAgICAgIG1hcmdpbjogMTYsXFxuICAgICAgICB3aWR0aDogMTYwLFxcbiAgICAgICAgaGVpZ2h0OiAxMjAsXFxuICAgICAgICBhbGlnblg6ICsxLFxcbiAgICAgICAgYWxpZ25ZOiArMSxcXG4gICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgICAgIGxvYWQ6IGNhbnZhcyxcXG4gICAgICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgc3RvcmFnZTogeyBmbGlwWTogZmFsc2UgfSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXFxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFgoTWF0aC5yYW5kb20oKSlcXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnJhbmRvbSgpKVxcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRaKE1hdGgucmFuZG9tKCkpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJiYWNrXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2N1YmVdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBibGVuZDogXFxcImFscGhhXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW292ZXJsYXldLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxLjIsIDEuMilcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIG92ZXJsYXkuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXFxcIjJkXFxcIilcXG4gICAgICAgIGlmICghY3R4KSByZXR1cm5cXG5cXG4gICAgICAgIGNvbnN0IHggPSAoKDEgKyBldnQueCkgKiBjdHguY2FudmFzLndpZHRoKSAvIDJcXG4gICAgICAgIGNvbnN0IHkgPSAoKDEgKyBldnQueSkgKiBjdHguY2FudmFzLmhlaWdodCkgLyAyXFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXFxcIiNmZjBcXFwiXFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcXG4gICAgICAgIGN0eC5lbGxpcHNlKHgsIHksIDgsIDgsIDAsIDAsIE1hdGguUEkgKiAyKVxcbiAgICAgICAgY3R4LmZpbGwoKVxcbiAgICB9KVxcbiAgICByZXR1cm4gKHsgYWxpZ25YLCBhbGlnblkgfTogeyBhbGlnblg6IG51bWJlcjsgYWxpZ25ZOiBudW1iZXIgfSkgPT4ge1xcbiAgICAgICAgb3ZlcmxheS5hbGlnblggPSBhbGlnblhcXG4gICAgICAgIG92ZXJsYXkuYWxpZ25ZID0gYWxpZ25ZXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJPdmVybGF5LFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLjMsIDAuNSwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIGNvbnN0IGNhbnZhcyA9IHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjZjQ0YlxcXCIsIFxcXCIjNGY0YlxcXCIsIFxcXCIjNDRmYlxcXCIsIFxcXCIjMDAwMFxcXCJdLCAyLCAyKVxcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFRnZFBhaW50ZXJPdmVybGF5KGNvbnRleHQsIHtcXG4gICAgICAgIG1hcmdpbjogMTYsXFxuICAgICAgICB3aWR0aDogMTYwLFxcbiAgICAgICAgaGVpZ2h0OiAxMjAsXFxuICAgICAgICBhbGlnblg6ICsxLFxcbiAgICAgICAgYWxpZ25ZOiArMSxcXG4gICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgICAgIGxvYWQ6IGNhbnZhcyxcXG4gICAgICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgc3RvcmFnZTogeyBmbGlwWTogZmFsc2UgfSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXFxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFgoTWF0aC5yYW5kb20oKSlcXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnJhbmRvbSgpKVxcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRaKE1hdGgucmFuZG9tKCkpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJiYWNrXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2N1YmVdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBibGVuZDogXFxcImFscGhhXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW292ZXJsYXldLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxLjIsIDEuMilcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIG92ZXJsYXkuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXFxcIjJkXFxcIilcXG4gICAgICAgIGlmICghY3R4KSByZXR1cm5cXG5cXG4gICAgICAgIGNvbnN0IHggPSAoKDEgKyBldnQueCkgKiBjdHguY2FudmFzLndpZHRoKSAvIDJcXG4gICAgICAgIGNvbnN0IHkgPSAoKDEgKyBldnQueSkgKiBjdHguY2FudmFzLmhlaWdodCkgLyAyXFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXFxcIiNmZjBcXFwiXFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcXG4gICAgICAgIGN0eC5lbGxpcHNlKHgsIHksIDgsIDgsIDAsIDAsIE1hdGguUEkgKiAyKVxcbiAgICAgICAgY3R4LmZpbGwoKVxcbiAgICB9KVxcbiAgICByZXR1cm4gKHsgYWxpZ25YLCBhbGlnblkgfTogeyBhbGlnblg6IG51bWJlcjsgYWxpZ25ZOiBudW1iZXIgfSkgPT4ge1xcbiAgICAgICAgb3ZlcmxheS5hbGlnblggPSBhbGlnblhcXG4gICAgICAgIG92ZXJsYXkuYWxpZ25ZID0gYWxpZ25ZXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgb3B0aW9ucz17e1xcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBzZXR0aW5ncz17e1xcbiAgICAgICAgICAgICAgICBhbGlnblg6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcXFwiYWxpZ25YXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMSxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogKzEsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGFsaWduWToge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJhbGlnbllcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IC0xLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiArMSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJPdmVybGF5LFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMC4zLCAwLjUsIDFdLCBkZXB0aDogMSB9KVxuICAgIGNvbnN0IGNhbnZhcyA9IHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiI2Y0NGJcIiwgXCIjNGY0YlwiLCBcIiM0NGZiXCIsIFwiIzAwMDBcIl0sIDIsIDIpXG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBUZ2RQYWludGVyT3ZlcmxheShjb250ZXh0LCB7XG4gICAgICAgIG1hcmdpbjogMTYsXG4gICAgICAgIHdpZHRoOiAxNjAsXG4gICAgICAgIGhlaWdodDogMTIwLFxuICAgICAgICBhbGlnblg6ICsxLFxuICAgICAgICBhbGlnblk6ICsxLFxuICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGxvYWQ6IGNhbnZhcyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiBmYWxzZSB9LFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRYKE1hdGgucmFuZG9tKCkpXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnJhbmRvbSgpKVxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFooTWF0aC5yYW5kb20oKSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxuICAgICAgICAgICAgY3VsbDogXCJiYWNrXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2N1YmVdLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBibGVuZDogXCJhbHBoYVwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtvdmVybGF5XSxcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS4yLCAxLjIpXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgb3ZlcmxheS5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcbiAgICAgICAgaWYgKCFjdHgpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IHggPSAoKDEgKyBldnQueCkgKiBjdHguY2FudmFzLndpZHRoKSAvIDJcbiAgICAgICAgY29uc3QgeSA9ICgoMSArIGV2dC55KSAqIGN0eC5jYW52YXMuaGVpZ2h0KSAvIDJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmMFwiXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHguZWxsaXBzZSh4LCB5LCA4LCA4LCAwLCAwLCBNYXRoLlBJICogMilcbiAgICAgICAgY3R4LmZpbGwoKVxuICAgIH0pXG4gICAgcmV0dXJuICh7IGFsaWduWCwgYWxpZ25ZIH06IHsgYWxpZ25YOiBudW1iZXI7IGFsaWduWTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgb3ZlcmxheS5hbGlnblggPSBhbGlnblhcbiAgICAgICAgb3ZlcmxheS5hbGlnblkgPSBhbGlnbllcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNldHRpbmdzPXt7XG4gICAgICAgICAgICAgICAgYWxpZ25YOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImFsaWduWFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiArMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFsaWduWToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJhbGlnbllcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICAgICAgICAgIG1heDogKzEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21hcmdpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLjMsIDAuNSwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIGNvbnN0IGNhbnZhcyA9IHRnZENhbnZhc0NyZWF0ZUZpbGwoMzIwLCAxODAsIFxcXCIjZjkwXFxcIilcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgbG9hZDogY2FudmFzLFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgc3RvcmFnZTogeyBmbGlwWTogZmFsc2UgfSxcXG4gICAgfSlcXG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBUZ2RQYWludGVyT3ZlcmxheShjb250ZXh0LCB7XFxuICAgICAgICBtYXJnaW46IFs4LCA2NF0sXFxuICAgICAgICAvLyB3aWR0aDogY2FudmFzLndpZHRoLFxcbiAgICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxcbiAgICAgICAgYWxpZ25YOiAtMSxcXG4gICAgICAgIGFsaWduWTogKzEsXFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICB9KVxcbiAgICBvdmVybGF5LmV2ZW50UmVzaXplLmFkZExpc3RlbmVyKCh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGhcXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFxcXCIyZFxcXCIpXFxuICAgICAgICBpZiAoIWN0eCkgcmV0dXJuXFxuXFxuICAgICAgICBjb25zdCBpbWcgPSBhc3NldHMuaW1hZ2UuaW1hZ2VcXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHdpZHRoIC8gaW1nLndpZHRoXFxuICAgICAgICBjb25zdCBzY2FsZVkgPSBoZWlnaHQgLyBpbWcuaGVpZ2h0XFxuICAgICAgICBjb25zdCBzY2FsZSA9IE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKVxcbiAgICAgICAgY29uc3QgdyA9IHNjYWxlICogaW1nLndpZHRoXFxuICAgICAgICBjb25zdCBoID0gc2NhbGUgKiBpbWcuaGVpZ2h0XFxuICAgICAgICBjb25zdCB4ID0gKHdpZHRoIC0gdykgLyAyXFxuICAgICAgICBjb25zdCB5ID0gKGhlaWdodCAtIGgpIC8gMlxcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHcsIGgpXFxuICAgICAgICB0ZXh0dXJlLmxvYWRCaXRtYXAoY2FudmFzKVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH0pXFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWChNYXRoLnJhbmRvbSgpKVxcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRZKE1hdGgucmFuZG9tKCkpXFxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFooTWF0aC5yYW5kb20oKSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY3ViZV0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbb3ZlcmxheV0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEuMiwgMS4yKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgb3ZlcmxheS5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XFxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcXFwiMmRcXFwiKVxcbiAgICAgICAgaWYgKCFjdHgpIHJldHVyblxcblxcbiAgICAgICAgY29uc3QgeCA9ICgoMSArIGV2dC54KSAqIGN0eC5jYW52YXMud2lkdGgpIC8gMlxcbiAgICAgICAgY29uc3QgeSA9ICgoMSAtIGV2dC55KSAqIGN0eC5jYW52YXMuaGVpZ2h0KSAvIDJcXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcXFwiI2ZmMFxcXCJcXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxcbiAgICAgICAgY3R4LmVsbGlwc2UoeCwgeSwgOCwgOCwgMCwgMCwgTWF0aC5QSSAqIDIpXFxuICAgICAgICBjdHguZmlsbCgpXFxuICAgICAgICB0ZXh0dXJlLmxvYWRCaXRtYXAoY2FudmFzKVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH0pXFxuICAgIHJldHVybiAoe1xcbiAgICAgICAgYWxpZ25YLFxcbiAgICAgICAgYWxpZ25ZLFxcbiAgICAgICAgbWFyZ2luVG9wLFxcbiAgICAgICAgbWFyZ2luUmlnaHQsXFxuICAgICAgICBtYXJnaW5Cb3R0b20sXFxuICAgICAgICBtYXJnaW5MZWZ0LFxcbiAgICB9OiB7XFxuICAgICAgICBhbGlnblg6IG51bWJlclxcbiAgICAgICAgYWxpZ25ZOiBudW1iZXJcXG4gICAgICAgIG1hcmdpblRvcDogbnVtYmVyXFxuICAgICAgICBtYXJnaW5SaWdodDogbnVtYmVyXFxuICAgICAgICBtYXJnaW5Cb3R0b206IG51bWJlclxcbiAgICAgICAgbWFyZ2luTGVmdDogbnVtYmVyXFxuICAgIH0pID0+IHtcXG4gICAgICAgIG92ZXJsYXkuYWxpZ25YID0gYWxpZ25YXFxuICAgICAgICBvdmVybGF5LmFsaWduWSA9IGFsaWduWVxcbiAgICAgICAgb3ZlcmxheS5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3BcXG4gICAgICAgIG92ZXJsYXkubWFyZ2luUmlnaHQgPSBtYXJnaW5SaWdodFxcbiAgICAgICAgb3ZlcmxheS5tYXJnaW5Cb3R0b20gPSBtYXJnaW5Cb3R0b21cXG4gICAgICAgIG92ZXJsYXkubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnRcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdGdkQ2FudmFzQ3JlYXRlRmlsbCxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlck92ZXJsYXksXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBJbWFnZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9pbWFnZS9kaW5vLndlYnBcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAuMywgMC41LCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgY29uc3QgY2FudmFzID0gdGdkQ2FudmFzQ3JlYXRlRmlsbCgzMjAsIDE4MCwgXFxcIiNmOTBcXFwiKVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBsb2FkOiBjYW52YXMsXFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiBmYWxzZSB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFRnZFBhaW50ZXJPdmVybGF5KGNvbnRleHQsIHtcXG4gICAgICAgIG1hcmdpbjogWzgsIDY0XSxcXG4gICAgICAgIC8vIHdpZHRoOiBjYW52YXMud2lkdGgsXFxuICAgICAgICBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQsXFxuICAgICAgICBhbGlnblg6IC0xLFxcbiAgICAgICAgYWxpZ25ZOiArMSxcXG4gICAgICAgIHRleHR1cmUsXFxuICAgIH0pXFxuICAgIG92ZXJsYXkuZXZlbnRSZXNpemUuYWRkTGlzdGVuZXIoKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XFxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aFxcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodFxcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXFxcIjJkXFxcIilcXG4gICAgICAgIGlmICghY3R4KSByZXR1cm5cXG5cXG4gICAgICAgIGNvbnN0IGltZyA9IGFzc2V0cy5pbWFnZS5pbWFnZVxcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gd2lkdGggLyBpbWcud2lkdGhcXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IGhlaWdodCAvIGltZy5oZWlnaHRcXG4gICAgICAgIGNvbnN0IHNjYWxlID0gTWF0aC5tYXgoc2NhbGVYLCBzY2FsZVkpXFxuICAgICAgICBjb25zdCB3ID0gc2NhbGUgKiBpbWcud2lkdGhcXG4gICAgICAgIGNvbnN0IGggPSBzY2FsZSAqIGltZy5oZWlnaHRcXG4gICAgICAgIGNvbnN0IHggPSAod2lkdGggLSB3KSAvIDJcXG4gICAgICAgIGNvbnN0IHkgPSAoaGVpZ2h0IC0gaCkgLyAyXFxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgeCwgeSwgdywgaClcXG4gICAgICAgIHRleHR1cmUubG9hZEJpdG1hcChjYW52YXMpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfSlcXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRYKE1hdGgucmFuZG9tKCkpXFxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFkoTWF0aC5yYW5kb20oKSlcXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWihNYXRoLnJhbmRvbSgpKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwiYmFja1xcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjdWJlXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgYmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtvdmVybGF5XSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS4yLCAxLjIpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICBvdmVybGF5LmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFxcXCIyZFxcXCIpXFxuICAgICAgICBpZiAoIWN0eCkgcmV0dXJuXFxuXFxuICAgICAgICBjb25zdCB4ID0gKCgxICsgZXZ0LngpICogY3R4LmNhbnZhcy53aWR0aCkgLyAyXFxuICAgICAgICBjb25zdCB5ID0gKCgxIC0gZXZ0LnkpICogY3R4LmNhbnZhcy5oZWlnaHQpIC8gMlxcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFxcXCIjZmYwXFxcIlxcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXFxuICAgICAgICBjdHguZWxsaXBzZSh4LCB5LCA4LCA4LCAwLCAwLCBNYXRoLlBJICogMilcXG4gICAgICAgIGN0eC5maWxsKClcXG4gICAgICAgIHRleHR1cmUubG9hZEJpdG1hcChjYW52YXMpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfSlcXG4gICAgcmV0dXJuICh7XFxuICAgICAgICBhbGlnblgsXFxuICAgICAgICBhbGlnblksXFxuICAgICAgICBtYXJnaW5Ub3AsXFxuICAgICAgICBtYXJnaW5SaWdodCxcXG4gICAgICAgIG1hcmdpbkJvdHRvbSxcXG4gICAgICAgIG1hcmdpbkxlZnQsXFxuICAgIH06IHtcXG4gICAgICAgIGFsaWduWDogbnVtYmVyXFxuICAgICAgICBhbGlnblk6IG51bWJlclxcbiAgICAgICAgbWFyZ2luVG9wOiBudW1iZXJcXG4gICAgICAgIG1hcmdpblJpZ2h0OiBudW1iZXJcXG4gICAgICAgIG1hcmdpbkJvdHRvbTogbnVtYmVyXFxuICAgICAgICBtYXJnaW5MZWZ0OiBudW1iZXJcXG4gICAgfSkgPT4ge1xcbiAgICAgICAgb3ZlcmxheS5hbGlnblggPSBhbGlnblhcXG4gICAgICAgIG92ZXJsYXkuYWxpZ25ZID0gYWxpZ25ZXFxuICAgICAgICBvdmVybGF5Lm1hcmdpblRvcCA9IG1hcmdpblRvcFxcbiAgICAgICAgb3ZlcmxheS5tYXJnaW5SaWdodCA9IG1hcmdpblJpZ2h0XFxuICAgICAgICBvdmVybGF5Lm1hcmdpbkJvdHRvbSA9IG1hcmdpbkJvdHRvbVxcbiAgICAgICAgb3ZlcmxheS5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdFxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcXG4gICAgICAgICAgICAgICAgYWxwaGE6IGZhbHNlLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogSW1hZ2VVUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBzZXR0aW5ncz17e1xcbiAgICAgICAgICAgICAgICBhbGlnblg6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcXFwiYWxpZ25YXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAtMSxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTEsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6ICsxLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBhbGlnblk6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcXFwiYWxpZ25ZXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMSxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogKzEsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJtYXJnaW5Ub3BcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDgsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDY0LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJtYXJnaW5SaWdodFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNjQsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDY0LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcXFwibWFyZ2luQm90dG9tXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA4LFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA2NCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJtYXJnaW5MZWZ0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA2NCxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogNjQsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdGdkQ2FudmFzQ3JlYXRlRmlsbCxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyT3ZlcmxheSxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEltYWdlVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS9kaW5vLndlYnBcIlxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAuMywgMC41LCAxXSwgZGVwdGg6IDEgfSlcbiAgICBjb25zdCBjYW52YXMgPSB0Z2RDYW52YXNDcmVhdGVGaWxsKDMyMCwgMTgwLCBcIiNmOTBcIilcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgIGxvYWQ6IGNhbnZhcyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcmFnZTogeyBmbGlwWTogZmFsc2UgfSxcbiAgICB9KVxuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgVGdkUGFpbnRlck92ZXJsYXkoY29udGV4dCwge1xuICAgICAgICBtYXJnaW46IFs4LCA2NF0sXG4gICAgICAgIC8vIHdpZHRoOiBjYW52YXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogY2FudmFzLmhlaWdodCxcbiAgICAgICAgYWxpZ25YOiAtMSxcbiAgICAgICAgYWxpZ25ZOiArMSxcbiAgICAgICAgdGV4dHVyZSxcbiAgICB9KVxuICAgIG92ZXJsYXkuZXZlbnRSZXNpemUuYWRkTGlzdGVuZXIoKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuICAgICAgICBpZiAoIWN0eCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgaW1nID0gYXNzZXRzLmltYWdlLmltYWdlXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHdpZHRoIC8gaW1nLndpZHRoXG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IGhlaWdodCAvIGltZy5oZWlnaHRcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1heChzY2FsZVgsIHNjYWxlWSlcbiAgICAgICAgY29uc3QgdyA9IHNjYWxlICogaW1nLndpZHRoXG4gICAgICAgIGNvbnN0IGggPSBzY2FsZSAqIGltZy5oZWlnaHRcbiAgICAgICAgY29uc3QgeCA9ICh3aWR0aCAtIHcpIC8gMlxuICAgICAgICBjb25zdCB5ID0gKGhlaWdodCAtIGgpIC8gMlxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgeCwgeSwgdywgaClcbiAgICAgICAgdGV4dHVyZS5sb2FkQml0bWFwKGNhbnZhcylcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfSlcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXG4gICAgY3ViZS50cmFuc2ZvLm9yYml0QXJvdW5kWChNYXRoLnJhbmRvbSgpKVxuICAgIGN1YmUudHJhbnNmby5vcmJpdEFyb3VuZFkoTWF0aC5yYW5kb20oKSlcbiAgICBjdWJlLnRyYW5zZm8ub3JiaXRBcm91bmRaKE1hdGgucmFuZG9tKCkpXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgICAgIGN1bGw6IFwiYmFja1wiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjdWJlXSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgYmxlbmQ6IFwiYWxwaGFcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbb3ZlcmxheV0sXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEuMiwgMS4yKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIG92ZXJsYXkuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAgIGlmICghY3R4KSByZXR1cm5cblxuICAgICAgICBjb25zdCB4ID0gKCgxICsgZXZ0LngpICogY3R4LmNhbnZhcy53aWR0aCkgLyAyXG4gICAgICAgIGNvbnN0IHkgPSAoKDEgLSBldnQueSkgKiBjdHguY2FudmFzLmhlaWdodCkgLyAyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZjBcIlxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmVsbGlwc2UoeCwgeSwgOCwgOCwgMCwgMCwgTWF0aC5QSSAqIDIpXG4gICAgICAgIGN0eC5maWxsKClcbiAgICAgICAgdGV4dHVyZS5sb2FkQml0bWFwKGNhbnZhcylcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfSlcbiAgICByZXR1cm4gKHtcbiAgICAgICAgYWxpZ25YLFxuICAgICAgICBhbGlnblksXG4gICAgICAgIG1hcmdpblRvcCxcbiAgICAgICAgbWFyZ2luUmlnaHQsXG4gICAgICAgIG1hcmdpbkJvdHRvbSxcbiAgICAgICAgbWFyZ2luTGVmdCxcbiAgICB9OiB7XG4gICAgICAgIGFsaWduWDogbnVtYmVyXG4gICAgICAgIGFsaWduWTogbnVtYmVyXG4gICAgICAgIG1hcmdpblRvcDogbnVtYmVyXG4gICAgICAgIG1hcmdpblJpZ2h0OiBudW1iZXJcbiAgICAgICAgbWFyZ2luQm90dG9tOiBudW1iZXJcbiAgICAgICAgbWFyZ2luTGVmdDogbnVtYmVyXG4gICAgfSkgPT4ge1xuICAgICAgICBvdmVybGF5LmFsaWduWCA9IGFsaWduWFxuICAgICAgICBvdmVybGF5LmFsaWduWSA9IGFsaWduWVxuICAgICAgICBvdmVybGF5Lm1hcmdpblRvcCA9IG1hcmdpblRvcFxuICAgICAgICBvdmVybGF5Lm1hcmdpblJpZ2h0ID0gbWFyZ2luUmlnaHRcbiAgICAgICAgb3ZlcmxheS5tYXJnaW5Cb3R0b20gPSBtYXJnaW5Cb3R0b21cbiAgICAgICAgb3ZlcmxheS5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdFxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBhbHBoYTogZmFsc2UsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IEltYWdlVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcbiAgICAgICAgICAgICAgICBhbGlnblg6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiYWxpZ25YXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiArMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFsaWduWToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJhbGlnbllcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICAgICAgICAgIG1heDogKzEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibWFyZ2luVG9wXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA4LFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJtYXJnaW5SaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNjQsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA2NCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJtYXJnaW5Cb3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDgsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA2NCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibWFyZ2luTGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNjQsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA2NCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbi8vIGltcG9ydCBcInByaXNtanMvdGhlbWVzL3ByaXNtLWNveS5jc3NcIlxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL0NvZGVWaWV3ZXIubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UgfSBmcm9tIFwiLi9ncmFtbWFyXCJcblxuZXhwb3J0IGludGVyZmFjZSBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICBpZD86IHN0cmluZ1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgbGFuZ3VhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlVmlld2VyVmlldyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBzaW5nbGVQcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxTaW5nbGVDb2RlVmlld2VyVmlldyB7Li4uc2luZ2xlUHJvcHN9IC8+XG4gICAgfVxuICAgIGNvbnN0IG11bHRpUHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIHZhbHVlLFxuICAgIH1cbiAgICByZXR1cm4gPE11bHRpQ29kZVZpZXdlclZpZXcgey4uLm11bHRpUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gU2luZ2xlQ29kZVZpZXdlclZpZXcocHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCByZWZUaW1lb3V0ID0gUmVhY3QudXNlUmVmKDApXG4gICAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByZWZDb2RlID0gUmVhY3QudXNlUmVmPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbClcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcmVmQ29kZS5jdXJyZW50XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBodG1sID0gUHJpc20uaGlnaGxpZ2h0KHByb3BzLnZhbHVlLCBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UocHJvcHMubGFuZ3VhZ2UpLCBwcm9wcy5sYW5ndWFnZSlcbiAgICAgICAgICAgIGNvZGUuaW5uZXJIVE1MID0gaHRtbFxuICAgICAgICB9LCAxMDApXG4gICAgfSwgW3Byb3BzLnZhbHVlLCBwcm9wcy5sYW5ndWFnZSwgcmVmQ29kZS5jdXJyZW50XSlcbiAgICBjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocHJvcHMudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0UG9wdXAodHJ1ZSlcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0UG9wdXAoZmFsc2UpLCA3MDAwKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVQb3B1cENsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRQb3B1cChmYWxzZSlcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IDBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzTmFtZXMocHJvcHMpfSBvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja30gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgcmVmPXtyZWZDb2RlfSBjbGFzc05hbWU9e2BsYW5ndWFnZS0ke3Byb3BzLmxhbmd1YWdlfWB9IC8+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIHtwb3B1cCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlLnBvcHVwfSBvbkNsaWNrPXtoYW5kbGVQb3B1cENsaWNrfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBjb2RlIGhhcyBiZWVuIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWVzKHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW1N0eWxlLkNvZGVWaWV3ZXJdXG4gICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHByb3BzLmNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmZ1bmN0aW9uIE11bHRpQ29kZVZpZXdlclZpZXcocHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IGNhcHRpb25zID0gT2JqZWN0LmtleXMocHJvcHMudmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtjYXB0aW9ucy5tYXAoKGNhcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRldGFpbHMga2V5PXtjYXB0aW9ufSBvcGVuPXtmYWxzZX0gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+e2NhcHRpb259PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQ29kZVZpZXdlclZpZXcgdmFsdWU9e3Byb3BzLnZhbHVlW2NhcHRpb25dfSBsYW5ndWFnZT17cHJvcHMubGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdsc2xcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhbW1hckZvckxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiBQcmlzbS5HcmFtbWFyIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgXCJ0c1wiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0XG4gICAgICAgIGNhc2UgXCJ0c3hcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHN4XG4gICAgICAgIGNhc2UgXCJmcmFnXCI6XG4gICAgICAgIGNhc2UgXCJ2ZXJ0XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLmdsc2xcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBHTFNMXG4gICAgfVxufVxuXG5jb25zdCBUWVBFUyA9IFtcbiAgICBcImJ2ZWMyXCIsXG4gICAgXCJidmVjM1wiLFxuICAgIFwiYnZlYzRcIixcbiAgICBcImRtYXQyXCIsXG4gICAgXCJkbWF0MngyXCIsXG4gICAgXCJkbWF0MngzXCIsXG4gICAgXCJkbWF0Mng0XCIsXG4gICAgXCJkbWF0M1wiLFxuICAgIFwiZG1hdDN4MlwiLFxuICAgIFwiZG1hdDN4M1wiLFxuICAgIFwiZG1hdDN4NFwiLFxuICAgIFwiZG1hdDRcIixcbiAgICBcImRtYXQ0eDJcIixcbiAgICBcImRtYXQ0eDNcIixcbiAgICBcImRtYXQ0eDRcIixcbiAgICBcImR2ZWMyXCIsXG4gICAgXCJkdmVjM1wiLFxuICAgIFwiZHZlYzRcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJmdmVjMlwiLFxuICAgIFwiZnZlYzNcIixcbiAgICBcImZ2ZWM0XCIsXG4gICAgXCJpc2FtcGxlcjFEXCIsXG4gICAgXCJpc2FtcGxlcjFEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRcIixcbiAgICBcImlzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRE1TXCIsXG4gICAgXCJpc2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFJlY3RcIixcbiAgICBcImlzYW1wbGVyM0RcIixcbiAgICBcImlzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJpc2FtcGxlckN1YmVcIixcbiAgICBcImlzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJpdmVjMlwiLFxuICAgIFwiaXZlYzNcIixcbiAgICBcIml2ZWM0XCIsXG4gICAgXCJtYXQyXCIsXG4gICAgXCJtYXQyeDJcIixcbiAgICBcIm1hdDJ4M1wiLFxuICAgIFwibWF0Mng0XCIsXG4gICAgXCJtYXQzXCIsXG4gICAgXCJtYXQzeDJcIixcbiAgICBcIm1hdDN4M1wiLFxuICAgIFwibWF0M3g0XCIsXG4gICAgXCJtYXQ0XCIsXG4gICAgXCJtYXQ0eDJcIixcbiAgICBcIm1hdDR4M1wiLFxuICAgIFwibWF0NHg0XCIsXG4gICAgXCJzYW1wbGVcIixcbiAgICBcInNhbXBsZXIxRFwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInNhbXBsZXIxREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMURTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInNhbXBsZXIyREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRNU1wiLFxuICAgIFwic2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyM0RcIixcbiAgICBcInNhbXBsZXJCdWZmZXJcIixcbiAgICBcInNhbXBsZXJDdWJlXCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyQ3ViZVNoYWRvd1wiLFxuICAgIFwidXNhbXBsZXIxRFwiLFxuICAgIFwidXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEXCIsXG4gICAgXCJ1c2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRNU1wiLFxuICAgIFwidXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJ1c2FtcGxlcjNEXCIsXG4gICAgXCJ1c2FtcGxlckJ1ZmZlclwiLFxuICAgIFwidXNhbXBsZXJDdWJlXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwidXZlYzJcIixcbiAgICBcInV2ZWMzXCIsXG4gICAgXCJ1dmVjNFwiLFxuICAgIFwidmVjMlwiLFxuICAgIFwidmVjM1wiLFxuICAgIFwidmVjNFwiLFxuICAgIFwidm9pZFwiLFxuXVxuXG5jb25zdCBLRVlXT1JEUyA9IFtcbiAgICBcImNlbnRyb2lkXCIsXG4gICAgXCJjb25zdFwiLFxuICAgIFwiZGlzY2FyZFwiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwiZmxhdFwiLFxuICAgIFwiaGlnaHBcIixcbiAgICBcImlmXCIsXG4gICAgXCJpblwiLFxuICAgIFwiaW5vdXRcIixcbiAgICBcImludmFyaWFudFwiLFxuICAgIFwibGF5b3V0XCIsXG4gICAgXCJsb3dwXCIsXG4gICAgXCJtZWRpdW1wXCIsXG4gICAgXCJub3BlcnNwZWN0aXZlXCIsXG4gICAgXCJvdXRcIixcbiAgICBcInBhdGNoXCIsXG4gICAgXCJwcmVjaXNpb25cIixcbiAgICBcInNtb290aFwiLFxuICAgIFwic3Vicm91dGluZVwiLFxuICAgIFwidW5pZm9ybVwiLFxuICAgIC8vIFJlc2VydmVkIGZvciBmdXR1cmUuXG4gICAgXCJhY3RpdmVcIixcbiAgICBcImFzbVwiLFxuICAgIFwiY2FzdFwiLFxuICAgIFwiY2xhc3NcIixcbiAgICBcImNvbW1vblwiLFxuICAgIFwiZW51bVwiLFxuICAgIFwiZXh0ZXJuXCIsXG4gICAgXCJleHRlcm5hbFwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJmaXhlZFwiLFxuICAgIFwiZ290b1wiLFxuICAgIFwiaGFsZlwiLFxuICAgIFwiaHZlYzJcIixcbiAgICBcImh2ZWMzXCIsXG4gICAgXCJodmVjNFwiLFxuICAgIFwiaWltYWdlMURcIixcbiAgICBcImlpbWFnZTFEQXJyYXlcIixcbiAgICBcImlpbWFnZTJEXCIsXG4gICAgXCJpaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpaW1hZ2UzRFwiLFxuICAgIFwiaWltYWdlQnVmZmVyXCIsXG4gICAgXCJpaW1hZ2VDdWJlXCIsXG4gICAgXCJpbWFnZTFEXCIsXG4gICAgXCJpbWFnZTFEQXJyYXlcIixcbiAgICBcImltYWdlMURBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UxRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFwiLFxuICAgIFwiaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpbWFnZTJEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMkRTaGFkb3dcIixcbiAgICBcImltYWdlM0RcIixcbiAgICBcImltYWdlQnVmZmVyXCIsXG4gICAgXCJpbWFnZUN1YmVcIixcbiAgICBcImlubGluZVwiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwibG9uZ1wiLFxuICAgIFwibmFtZXNwYWNlXCIsXG4gICAgXCJub2lubGluZVwiLFxuICAgIFwib3V0cHV0XCIsXG4gICAgXCJwYWNrZWRcIixcbiAgICBcInBhcnRpdGlvblwiLFxuICAgIFwicHVibGljXCIsXG4gICAgXCJyb3dfbWFqb3JcIixcbiAgICBcInNhbXBsZXIzRFJlY3RcIixcbiAgICBcInNob3J0XCIsXG4gICAgXCJzaXplb2ZcIixcbiAgICBcInN0YXRpY1wiLFxuICAgIFwic3VwZXJwXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGhpc1wiLFxuICAgIFwidHlwZWRlZlwiLFxuICAgIFwidWltYWdlMURcIixcbiAgICBcInVpbWFnZTFEQXJyYXlcIixcbiAgICBcInVpbWFnZTJEXCIsXG4gICAgXCJ1aW1hZ2UyREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UzRFwiLFxuICAgIFwidWltYWdlQnVmZmVyXCIsXG4gICAgXCJ1aW1hZ2VDdWJlXCIsXG4gICAgXCJ1bmlvblwiLFxuICAgIFwidW5zaWduZWRcIixcbiAgICBcInVzaW5nXCIsXG4gICAgXCJ2b2xhdGlsZVwiLFxuXVxuXG5jb25zdCBHTE9CQUxTID0gW1xuICAgIFwiZ2xfRGVwdGhSYW5nZVwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5kaWZmXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmZhclwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5uZWFyXCIsXG4gICAgXCJnbF9GcmFnQ29vcmRcIixcbiAgICBcImdsX0ZyYWdEZXB0aFwiLFxuICAgIFwiZ2xfRnJvbnRGYWNpbmdcIixcbiAgICBcImdsX0luc3RhbmNlSURcIixcbiAgICBcImdsX1BvaW50Q29vcmRcIixcbiAgICBcImdsX1BvaW50U2l6ZVwiLFxuICAgIFwiZ2xfUG9zaXRpb25cIixcbiAgICBcImdsX1ZlcnRleElEXCIsXG5dXG5cbmNvbnN0IEZVTkNUSU9OUyA9IFtcbiAgICBcImFic1wiLFxuICAgIFwiYWNvc1wiLFxuICAgIFwiYWNvc2hcIixcbiAgICBcImFsbFwiLFxuICAgIFwiYW55XCIsXG4gICAgXCJhc2luXCIsXG4gICAgXCJhc2luaFwiLFxuICAgIFwiYXRhblwiLFxuICAgIFwiYXRhbmhcIixcbiAgICBcImNlaWxcIixcbiAgICBcImNsYW1wXCIsXG4gICAgXCJjb3NcIixcbiAgICBcImNvc2hcIixcbiAgICBcImNyb3NzXCIsXG4gICAgXCJkZWdyZWVzXCIsXG4gICAgXCJkZXRlcm1pbmFudFwiLFxuICAgIFwiZEZkeFwiLFxuICAgIFwiZEZkeVwiLFxuICAgIFwiZGlzdGFuY2VcIixcbiAgICBcImRvdFwiLFxuICAgIFwiZXF1YWxcIixcbiAgICBcImV4cFwiLFxuICAgIFwiZXhwMlwiLFxuICAgIFwiZmFjZWZvcndhcmRcIixcbiAgICBcImZsb2F0Qml0c1RvSW50XCIsXG4gICAgXCJmbG9hdEJpdHNUb1VpbnRcIixcbiAgICBcImZsb29yXCIsXG4gICAgXCJmcmFjdFwiLFxuICAgIFwiZndpZHRoXCIsXG4gICAgXCJncmVhdGVyVGhhblwiLFxuICAgIFwiZ3JlYXRlclRoYW5FcXVhbFwiLFxuICAgIFwiaW50Qml0c1RvRmxvYXRcIixcbiAgICBcImludmVyc2VcIixcbiAgICBcImludmVyc2VzcXJ0XCIsXG4gICAgXCJpc2luZlwiLFxuICAgIFwiaXNuYW5cIixcbiAgICBcImxlbmd0aFwiLFxuICAgIFwibGVzc1RoYW5cIixcbiAgICBcImxlc3NUaGFuRXF1YWxcIixcbiAgICBcImxvZ1wiLFxuICAgIFwibG9nMlwiLFxuICAgIFwibWF0cml4Q29tcE11bHRcIixcbiAgICBcIm1heFwiLFxuICAgIFwibWluXCIsXG4gICAgXCJtaXhcIixcbiAgICBcIm1vZFwiLFxuICAgIFwibW9kZlwiLFxuICAgIFwibm9ybWFsaXplXCIsXG4gICAgXCJub3RcIixcbiAgICBcIm5vdEVxdWFsXCIsXG4gICAgXCJvdXRlclByb2R1Y3RcIixcbiAgICBcInBhY2tIYWxmMngxNlwiLFxuICAgIFwicGFja1Nub3JtMngxNlwiLFxuICAgIFwicGFja1Vub3JtMngxNlwiLFxuICAgIFwicG93XCIsXG4gICAgXCJyYWRpYW5zXCIsXG4gICAgXCJyZWZsZWN0XCIsXG4gICAgXCJyZWZyYWN0XCIsXG4gICAgXCJyb3VuZFwiLFxuICAgIFwicm91bmRFdmVuXCIsXG4gICAgXCJzaWduXCIsXG4gICAgXCJzaW5cIixcbiAgICBcInNpbmhcIixcbiAgICBcInNtb290aHN0ZXBcIixcbiAgICBcInNxcnRcIixcbiAgICBcInN0ZXBcIixcbiAgICBcInRhblwiLFxuICAgIFwidGFuaFwiLFxuICAgIFwidGV4ZWxGZXRjaFwiLFxuICAgIFwidGV4ZWxGZXRjaE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVwiLFxuICAgIFwidGV4dHVyZUdyYWRcIixcbiAgICBcInRleHR1cmVHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlTG9kXCIsXG4gICAgXCJ0ZXh0dXJlTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvalwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qTG9kXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pPZmZzZXRcIixcbiAgICBcInRleHR1cmVTaXplXCIsXG4gICAgXCJ0cmFuc3Bvc2VcIixcbiAgICBcInRydW5jXCIsXG4gICAgXCJ1aW50Qml0c1RvRmxvYXRcIixcbiAgICBcInVucGFja0hhbGYyeDE2XCIsXG4gICAgXCJ1bnBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInVucGFja1Vub3JtMngxNlwiLFxuXVxuXG5jb25zdCBHTFNMOiBQcmlzbS5HcmFtbWFyID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXiMuKyQvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAvKF58W15cXHckXSkoPzpOYU58SW5maW5pdHl8MFtiQl1bMDFdKyg/Ol9bMDFdKykqbj98MFtvT11bMC03XSsoPzpfWzAtN10rKSpuP3wwW3hYXVtcXGRBLUZhLWZdKyg/Ol9bXFxkQS1GYS1mXSspKm4/fFxcZCsoPzpfXFxkKykqbnwoPzpcXGQrKD86X1xcZCspKig/OlxcLig/OlxcZCsoPzpfXFxkKykqKT8pP3xcXC5cXGQrKD86X1xcZCspKikoPzpbRWVdWystXT9cXGQrKD86X1xcZCspKik/KSg/IVtcXHckXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIH0sXG4gICAgdHlwZTogbWFrZUlkZW50aWZpZXJzUlgoVFlQRVMpLFxuICAgIGtleXdvcmQ6IG1ha2VJZGVudGlmaWVyc1JYKEtFWVdPUkRTKSxcbiAgICBnbG9iYWw6IG1ha2VJZGVudGlmaWVyc1JYKEdMT0JBTFMpLFxuICAgIGZ1bmN0aW9uOiBtYWtlSWRlbnRpZmllcnNSWChGVU5DVElPTlMpLFxufVxuXG5mdW5jdGlvbiBtYWtlSWRlbnRpZmllcnNSWCh3b3Jkczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAoPzpbXmEtekEtWjAtOV9dKSgke3dvcmRzLmpvaW4oXCJ8XCIpfSkoPz1bXmEtekEtWjAtOV9dKWApLFxuICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Db2RlVmlld2Vy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