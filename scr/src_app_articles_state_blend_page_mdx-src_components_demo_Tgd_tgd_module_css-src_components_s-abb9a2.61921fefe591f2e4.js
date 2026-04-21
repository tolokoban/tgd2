"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_state_blend_page_mdx-src_components_demo_Tgd_tgd_module_css-src_components_s-abb9a2"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
6060(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _assets_image_dino_webp__rspack_import_3 = __webpack_require__(44859);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_4 = __webpack_require__(21278);





function init(context, assets) {
    const camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective();
    camera.spaceHeightAtTarget = 2;
    context.camera = camera;
    const planes = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
    ].map(([R, G, B], index) => makePlane(context, R, G, B, index));
    const state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        blend: "add",
        children: planes,
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }), new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(context, {
        texture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.background),
    }), state);
    context.paint();
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, options: {
            depth: true,
            alpha: false,
            antialias: true,
        }, assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_4,
            },
            image: {
                background: _assets_image_dino_webp__rspack_import_3,
            },
        } }));
}
function makePlane(context, R, G, B, index) {
    const angle = index * 0.5 * Math.PI;
    const radius = 0.6;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    console.log("🐞 [blend.demo@68] x, y =", x, y);
    return new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        transfo: {
            position: [x, y, 0],
        },
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPlane(),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: [R, G, B, 0.6],
        }),
    });
}


},
17458(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _add_demo__rspack_import_4 = __webpack_require__(6060);





const FOCUS = { "Detail #1": "    const camera = new TgdCameraPerspective()\n    camera.spaceHeightAtTarget = 2\n    context.camera = camera\n    const planes = [\n        [1, 0, 0],\n        [0, 1, 0],\n        [0, 0, 1],\n        [1, 1, 1],\n    ].map(([R, G, B], index) => makePlane(context, R, G, B, index))\n    const state = new TgdPainterState(context, {\n        blend: \"add\",\n        children: planes,\n    })\n    context.add(\n        new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n        new TgdPainterBackground(context, {\n            texture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        }),\n        state,\n    )\n    context.paint()" };
const FULL = "import {\n    TgdCameraPerspective,\n    TgdContext,\n    TgdGeometryPlane,\n    TgdMaterialFlat,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"@/assets/image/dino.webp\"\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const camera = new TgdCameraPerspective()\n    camera.spaceHeightAtTarget = 2\n    context.camera = camera\n    const planes = [\n        [1, 0, 0],\n        [0, 1, 0],\n        [0, 0, 1],\n        [1, 1, 1],\n    ].map(([R, G, B], index) => makePlane(context, R, G, B, index))\n    const state = new TgdPainterState(context, {\n        blend: \"add\",\n        children: planes,\n    })\n    context.add(\n        new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n        new TgdPainterBackground(context, {\n            texture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        }),\n        state,\n    )\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            options={{\n                depth: true,\n                alpha: false,\n                antialias: true,\n            }}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                },\n                image: {\n                    background: BackgroundURL,\n                },\n            }}\n        />\n    )\n}\n\nfunction makePlane(context: TgdContext, R: number, G: number, B: number, index: number) {\n    const angle = index * 0.5 * Math.PI\n    const radius = 0.6\n    const x = radius * Math.cos(angle)\n    const y = radius * Math.sin(angle)\n    console.log(\"🐞 [blend.demo@68] x, y =\", x, y) // @FIXME: Remove this line written on 2026-03-20 at 18:38\n    return new TgdPainterMesh(context, {\n        transfo: {\n            position: [x, y, 0],\n        },\n        geometry: new TgdGeometryPlane(),\n        material: new TgdMaterialFlat({\n            color: [R, G, B, 0.6],\n        }),\n    })\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_add_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
69942(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _assets_image_dino_webp__rspack_import_3 = __webpack_require__(44859);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_4 = __webpack_require__(21278);





function init(context, assets) {
    const camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective();
    camera.spaceHeightAtTarget = 2;
    context.camera = camera;
    const planes = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
    ].map(([R, G, B], index) => makePlane(context, R, G, B, index));
    const state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        blend: "alpha",
        children: planes,
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }), new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(context, {
        texture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.background),
    }), state);
    context.paint();
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, options: {
            depth: true,
            alpha: false,
            antialias: true,
        }, assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_4,
            },
            image: {
                background: _assets_image_dino_webp__rspack_import_3,
            },
        } }));
}
function makePlane(context, R, G, B, index) {
    const angle = index * 0.5 * Math.PI;
    const radius = 0.6;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    console.log("🐞 [blend.demo@68] x, y =", x, y);
    return new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        transfo: {
            position: [x, y, 0],
        },
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPlane(),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: [R, G, B, 0.6],
        }),
    });
}


},
58453(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _alpha_demo__rspack_import_4 = __webpack_require__(69942);





const FOCUS = {
    "Detail #1": '    const camera = new TgdCameraPerspective()\n    camera.spaceHeightAtTarget = 2\n    context.camera = camera\n    const planes = [\n        [1, 0, 0],\n        [0, 1, 0],\n        [0, 0, 1],\n        [1, 1, 1],\n    ].map(([R, G, B], index) => makePlane(context, R, G, B, index))\n    const state = new TgdPainterState(context, {\n        blend: "alpha",\n        children: planes,\n    })\n    context.add(\n        new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n        new TgdPainterBackground(context, {\n            texture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        }),\n        state,\n    )\n    context.paint()',
};
const FULL = 'import {\n    TgdCameraPerspective,\n    TgdContext,\n    TgdGeometryPlane,\n    TgdMaterialFlat,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n} from "@tolokoban/tgd"\nimport View, { Assets } from "@/components/demo/Tgd"\n\nimport BackgroundURL from "@/assets/image/dino.webp"\nimport SuzanneURL from "@/assets/mesh/suzanne.glb"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const camera = new TgdCameraPerspective()\n    camera.spaceHeightAtTarget = 2\n    context.camera = camera\n    const planes = [\n        [1, 0, 0],\n        [0, 1, 0],\n        [0, 0, 1],\n        [1, 1, 1],\n    ].map(([R, G, B], index) => makePlane(context, R, G, B, index))\n    const state = new TgdPainterState(context, {\n        blend: "alpha",\n        children: planes,\n    })\n    context.add(\n        new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n        new TgdPainterBackground(context, {\n            texture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        }),\n        state,\n    )\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            options={{\n                depth: true,\n                alpha: false,\n                antialias: true,\n            }}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                },\n                image: {\n                    background: BackgroundURL,\n                },\n            }}\n        />\n    )\n}\n\nfunction makePlane(context: TgdContext, R: number, G: number, B: number, index: number) {\n    const angle = index * 0.5 * Math.PI\n    const radius = 0.6\n    const x = radius * Math.cos(angle)\n    const y = radius * Math.sin(angle)\n    console.log("🐞 [blend.demo@68] x, y =", x, y) // @FIXME: Remove this line written on 2026-03-20 at 18:38\n    return new TgdPainterMesh(context, {\n        transfo: {\n            position: [x, y, 0],\n        },\n        geometry: new TgdGeometryPlane(),\n        material: new TgdMaterialFlat({\n            color: [R, G, B, 0.6],\n        }),\n    })\n}\n';
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_alpha_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] }));
}


},
58969(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _multiply_demo__rspack_import_4 = __webpack_require__(46762);





const FOCUS = { "Detail #1": "    const camera = new TgdCameraPerspective()\n    camera.spaceHeightAtTarget = 2\n    context.camera = camera\n    const planes = [\n        [1, 0.5, 0.5],\n        [0.5, 1, 0.5],\n        [0.5, 0.5, 1],\n        [0.5, 0.5, 0.5],\n    ].map(([R, G, B], index) => makePlane(context, R, G, B, index))\n    const state = new TgdPainterState(context, {\n        blend: \"multiply\",\n        children: planes,\n    })\n    context.add(\n        new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n        new TgdPainterBackground(context, {\n            texture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        }),\n        state,\n    )\n    context.paint()" };
const FULL = "import {\n    TgdCameraPerspective,\n    TgdContext,\n    TgdGeometryPlane,\n    TgdMaterialFlat,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"@/assets/image/dino.webp\"\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const camera = new TgdCameraPerspective()\n    camera.spaceHeightAtTarget = 2\n    context.camera = camera\n    const planes = [\n        [1, 0.5, 0.5],\n        [0.5, 1, 0.5],\n        [0.5, 0.5, 1],\n        [0.5, 0.5, 0.5],\n    ].map(([R, G, B], index) => makePlane(context, R, G, B, index))\n    const state = new TgdPainterState(context, {\n        blend: \"multiply\",\n        children: planes,\n    })\n    context.add(\n        new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n        new TgdPainterBackground(context, {\n            texture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        }),\n        state,\n    )\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            options={{\n                depth: true,\n                alpha: false,\n                antialias: true,\n            }}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                },\n                image: {\n                    background: BackgroundURL,\n                },\n            }}\n        />\n    )\n}\n\nfunction makePlane(context: TgdContext, R: number, G: number, B: number, index: number) {\n    const angle = index * 0.5 * Math.PI\n    const radius = 0.6\n    const x = radius * Math.cos(angle)\n    const y = radius * Math.sin(angle)\n    console.log(\"🐞 [blend.demo@68] x, y =\", x, y) // @FIXME: Remove this line written on 2026-03-20 at 18:38\n    return new TgdPainterMesh(context, {\n        transfo: {\n            position: [x, y, 0],\n        },\n        geometry: new TgdGeometryPlane(),\n        material: new TgdMaterialFlat({\n            color: [R, G, B, 0.6],\n        }),\n    })\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_multiply_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
46762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _assets_image_dino_webp__rspack_import_3 = __webpack_require__(44859);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_4 = __webpack_require__(21278);





function init(context, assets) {
    const camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective();
    camera.spaceHeightAtTarget = 2;
    context.camera = camera;
    const planes = [
        [1, 0.5, 0.5],
        [0.5, 1, 0.5],
        [0.5, 0.5, 1],
        [0.5, 0.5, 0.5],
    ].map(([R, G, B], index) => makePlane(context, R, G, B, index));
    const state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        blend: "multiply",
        children: planes,
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }), new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(context, {
        texture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.background),
    }), state);
    context.paint();
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, options: {
            depth: true,
            alpha: false,
            antialias: true,
        }, assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_4,
            },
            image: {
                background: _assets_image_dino_webp__rspack_import_3,
            },
        } }));
}
function makePlane(context, R, G, B, index) {
    const angle = index * 0.5 * Math.PI;
    const radius = 0.6;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    console.log("🐞 [blend.demo@68] x, y =", x, y);
    return new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        transfo: {
            position: [x, y, 0],
        },
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPlane(),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: [R, G, B, 0.6],
        }),
    });
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
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

},
27466(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_4 = __webpack_require__(28453);
/* import */ var _alpha_demo__rspack_import_1 = __webpack_require__(58453);
/* import */ var _add_demo__rspack_import_2 = __webpack_require__(17458);
/* import */ var _multiply_demo__rspack_import_3 = __webpack_require__(58969);
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
        hr: "hr",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_4.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Blend"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "alpha"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_alpha_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "add"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_add_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "multiply"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_multiply_demo__rspack_import_3["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 19,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/state",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                    lineNumber: 21,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 21,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_4.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfc3RhdGVfYmxlbmRfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jc3Mtc3JjX2NvbXBvbmVudHNfcy1hYmI5YTIuNjE5MjFmZWZlNTkxZjJlNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvc3RhdGUvYmxlbmQvXy9hZGQuZGVtby9hZGQuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9zdGF0ZS9ibGVuZC9fL2FkZC5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3N0YXRlL2JsZW5kL18vYWxwaGEuZGVtby9hbHBoYS5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3N0YXRlL2JsZW5kL18vYWxwaGEuZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9zdGF0ZS9ibGVuZC9fL211bHRpcGx5LmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvc3RhdGUvYmxlbmQvXy9tdWx0aXBseS5kZW1vL211bHRpcGx5LmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9Db2RlVmlld2VyLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvaW5kZXgudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9zdGF0ZS9ibGVuZC9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiQ29kZVZpZXdlclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX0NvZGVWaWV3ZXJfUHRMN001XCIsXCJwb3B1cFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX3BvcHVwX25TRFpDUlwifTsiLCJpbXBvcnQge1xuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkR2VvbWV0cnlQbGFuZSxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFwiXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoKVxuICAgIGNhbWVyYS5zcGFjZUhlaWdodEF0VGFyZ2V0ID0gMlxuICAgIGNvbnRleHQuY2FtZXJhID0gY2FtZXJhXG4gICAgY29uc3QgcGxhbmVzID0gW1xuICAgICAgICBbMSwgMCwgMF0sXG4gICAgICAgIFswLCAxLCAwXSxcbiAgICAgICAgWzAsIDAsIDFdLFxuICAgICAgICBbMSwgMSwgMV0sXG4gICAgXS5tYXAoKFtSLCBHLCBCXSwgaW5kZXgpID0+IG1ha2VQbGFuZShjb250ZXh0LCBSLCBHLCBCLCBpbmRleCkpXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgYmxlbmQ6IFwiYWRkXCIsXG4gICAgICAgIGNoaWxkcmVuOiBwbGFuZXMsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xuICAgICAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kKSxcbiAgICAgICAgfSksXG4gICAgICAgIHN0YXRlLFxuICAgIClcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgZGVwdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgYWxwaGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5uZTogU3V6YW5uZVVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEJhY2tncm91bmRVUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBtYWtlUGxhbmUoY29udGV4dDogVGdkQ29udGV4dCwgUjogbnVtYmVyLCBHOiBudW1iZXIsIEI6IG51bWJlciwgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGFuZ2xlID0gaW5kZXggKiAwLjUgKiBNYXRoLlBJXG4gICAgY29uc3QgcmFkaXVzID0gMC42XG4gICAgY29uc3QgeCA9IHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKVxuICAgIGNvbnN0IHkgPSByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSlcbiAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW2JsZW5kLmRlbW9ANjhdIHgsIHkgPVwiLCB4LCB5KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAzLTIwIGF0IDE4OjM4XG4gICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG4gICAgICAgIHRyYW5zZm86IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbeCwgeSwgMF0sXG4gICAgICAgIH0sXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlQbGFuZSgpLFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7XG4gICAgICAgICAgICBjb2xvcjogW1IsIEcsIEIsIDAuNl0sXG4gICAgICAgIH0pLFxuICAgIH0pXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vYWRkLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSgpXFxuICAgIGNhbWVyYS5zcGFjZUhlaWdodEF0VGFyZ2V0ID0gMlxcbiAgICBjb250ZXh0LmNhbWVyYSA9IGNhbWVyYVxcbiAgICBjb25zdCBwbGFuZXMgPSBbXFxuICAgICAgICBbMSwgMCwgMF0sXFxuICAgICAgICBbMCwgMSwgMF0sXFxuICAgICAgICBbMCwgMCwgMV0sXFxuICAgICAgICBbMSwgMSwgMV0sXFxuICAgIF0ubWFwKChbUiwgRywgQl0sIGluZGV4KSA9PiBtYWtlUGxhbmUoY29udGV4dCwgUiwgRywgQiwgaW5kZXgpKVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgYmxlbmQ6IFxcXCJhZGRcXFwiLFxcbiAgICAgICAgY2hpbGRyZW46IHBsYW5lcyxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcbiAgICAgICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCksXFxuICAgICAgICB9KSxcXG4gICAgICAgIHN0YXRlLFxcbiAgICApXFxuICAgIGNvbnRleHQucGFpbnQoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZEdlb21ldHJ5UGxhbmUsXFxuICAgIFRnZE1hdGVyaWFsRmxhdCxcXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXFxcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFxcXCJcXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKClcXG4gICAgY2FtZXJhLnNwYWNlSGVpZ2h0QXRUYXJnZXQgPSAyXFxuICAgIGNvbnRleHQuY2FtZXJhID0gY2FtZXJhXFxuICAgIGNvbnN0IHBsYW5lcyA9IFtcXG4gICAgICAgIFsxLCAwLCAwXSxcXG4gICAgICAgIFswLCAxLCAwXSxcXG4gICAgICAgIFswLCAwLCAxXSxcXG4gICAgICAgIFsxLCAxLCAxXSxcXG4gICAgXS5tYXAoKFtSLCBHLCBCXSwgaW5kZXgpID0+IG1ha2VQbGFuZShjb250ZXh0LCBSLCBHLCBCLCBpbmRleCkpXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBibGVuZDogXFxcImFkZFxcXCIsXFxuICAgICAgICBjaGlsZHJlbjogcGxhbmVzLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XFxuICAgICAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kKSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgc3RhdGUsXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgb3B0aW9ucz17e1xcbiAgICAgICAgICAgICAgICBkZXB0aDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgYWxwaGE6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICBzdXphbm5lOiBTdXphbm5lVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQmFja2dyb3VuZFVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlUGxhbmUoY29udGV4dDogVGdkQ29udGV4dCwgUjogbnVtYmVyLCBHOiBudW1iZXIsIEI6IG51bWJlciwgaW5kZXg6IG51bWJlcikge1xcbiAgICBjb25zdCBhbmdsZSA9IGluZGV4ICogMC41ICogTWF0aC5QSVxcbiAgICBjb25zdCByYWRpdXMgPSAwLjZcXG4gICAgY29uc3QgeCA9IHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKVxcbiAgICBjb25zdCB5ID0gcmFkaXVzICogTWF0aC5zaW4oYW5nbGUpXFxuICAgIGNvbnNvbGUubG9nKFxcXCLwn5CeIFtibGVuZC5kZW1vQDY4XSB4LCB5ID1cXFwiLCB4LCB5KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAzLTIwIGF0IDE4OjM4XFxuICAgIHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgdHJhbnNmbzoge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbeCwgeSwgMF0sXFxuICAgICAgICB9LFxcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVBsYW5lKCksXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7XFxuICAgICAgICAgICAgY29sb3I6IFtSLCBHLCBCLCAwLjZdLFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkR2VvbWV0cnlQbGFuZSxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFwiXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoKVxuICAgIGNhbWVyYS5zcGFjZUhlaWdodEF0VGFyZ2V0ID0gMlxuICAgIGNvbnRleHQuY2FtZXJhID0gY2FtZXJhXG4gICAgY29uc3QgcGxhbmVzID0gW1xuICAgICAgICBbMSwgMCwgMF0sXG4gICAgICAgIFswLCAxLCAwXSxcbiAgICAgICAgWzAsIDAsIDFdLFxuICAgICAgICBbMSwgMSwgMV0sXG4gICAgXS5tYXAoKFtSLCBHLCBCXSwgaW5kZXgpID0+IG1ha2VQbGFuZShjb250ZXh0LCBSLCBHLCBCLCBpbmRleCkpXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgYmxlbmQ6IFwiYWxwaGFcIixcbiAgICAgICAgY2hpbGRyZW46IHBsYW5lcyxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XG4gICAgICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJhY2tncm91bmQpLFxuICAgICAgICB9KSxcbiAgICAgICAgc3RhdGUsXG4gICAgKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBkZXB0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHBoYTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjoge1xuICAgICAgICAgICAgICAgICAgICBzdXphbm5lOiBTdXphbm5lVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQmFja2dyb3VuZFVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIG1ha2VQbGFuZShjb250ZXh0OiBUZ2RDb250ZXh0LCBSOiBudW1iZXIsIEc6IG51bWJlciwgQjogbnVtYmVyLCBpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgYW5nbGUgPSBpbmRleCAqIDAuNSAqIE1hdGguUElcbiAgICBjb25zdCByYWRpdXMgPSAwLjZcbiAgICBjb25zdCB4ID0gcmFkaXVzICogTWF0aC5jb3MoYW5nbGUpXG4gICAgY29uc3QgeSA9IHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKVxuICAgIGNvbnNvbGUubG9nKFwi8J+QniBbYmxlbmQuZGVtb0A2OF0geCwgeSA9XCIsIHgsIHkpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDMtMjAgYXQgMTg6MzhcbiAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgdHJhbnNmbzoge1xuICAgICAgICAgICAgcG9zaXRpb246IFt4LCB5LCAwXSxcbiAgICAgICAgfSxcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVBsYW5lKCksXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHtcbiAgICAgICAgICAgIGNvbG9yOiBbUiwgRywgQiwgMC42XSxcbiAgICAgICAgfSksXG4gICAgfSlcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9hbHBoYS5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJEZXRhaWwgIzFcIjpcbiAgICAgICAgJyAgICBjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoKVxcbiAgICBjYW1lcmEuc3BhY2VIZWlnaHRBdFRhcmdldCA9IDJcXG4gICAgY29udGV4dC5jYW1lcmEgPSBjYW1lcmFcXG4gICAgY29uc3QgcGxhbmVzID0gW1xcbiAgICAgICAgWzEsIDAsIDBdLFxcbiAgICAgICAgWzAsIDEsIDBdLFxcbiAgICAgICAgWzAsIDAsIDFdLFxcbiAgICAgICAgWzEsIDEsIDFdLFxcbiAgICBdLm1hcCgoW1IsIEcsIEJdLCBpbmRleCkgPT4gbWFrZVBsYW5lKGNvbnRleHQsIFIsIEcsIEIsIGluZGV4KSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGJsZW5kOiBcImFscGhhXCIsXFxuICAgICAgICBjaGlsZHJlbjogcGxhbmVzLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XFxuICAgICAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kKSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgc3RhdGUsXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpJyxcbn1cbmNvbnN0IEZVTEwgPVxuICAgICdpbXBvcnQge1xcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkR2VvbWV0cnlQbGFuZSxcXG4gICAgVGdkTWF0ZXJpYWxGbGF0LFxcbiAgICBUZ2RQYWludGVyQmFja2dyb3VuZCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcblxcbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS9kaW5vLndlYnBcIlxcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSgpXFxuICAgIGNhbWVyYS5zcGFjZUhlaWdodEF0VGFyZ2V0ID0gMlxcbiAgICBjb250ZXh0LmNhbWVyYSA9IGNhbWVyYVxcbiAgICBjb25zdCBwbGFuZXMgPSBbXFxuICAgICAgICBbMSwgMCwgMF0sXFxuICAgICAgICBbMCwgMSwgMF0sXFxuICAgICAgICBbMCwgMCwgMV0sXFxuICAgICAgICBbMSwgMSwgMV0sXFxuICAgIF0ubWFwKChbUiwgRywgQl0sIGluZGV4KSA9PiBtYWtlUGxhbmUoY29udGV4dCwgUiwgRywgQiwgaW5kZXgpKVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgYmxlbmQ6IFwiYWxwaGFcIixcXG4gICAgICAgIGNoaWxkcmVuOiBwbGFuZXMsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJhY2tncm91bmQpLFxcbiAgICAgICAgfSksXFxuICAgICAgICBzdGF0ZSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIGRlcHRoOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBhbHBoYTogZmFsc2UsXFxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgIHN1emFubmU6IFN1emFubmVVUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmZ1bmN0aW9uIG1ha2VQbGFuZShjb250ZXh0OiBUZ2RDb250ZXh0LCBSOiBudW1iZXIsIEc6IG51bWJlciwgQjogbnVtYmVyLCBpbmRleDogbnVtYmVyKSB7XFxuICAgIGNvbnN0IGFuZ2xlID0gaW5kZXggKiAwLjUgKiBNYXRoLlBJXFxuICAgIGNvbnN0IHJhZGl1cyA9IDAuNlxcbiAgICBjb25zdCB4ID0gcmFkaXVzICogTWF0aC5jb3MoYW5nbGUpXFxuICAgIGNvbnN0IHkgPSByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSlcXG4gICAgY29uc29sZS5sb2coXCLwn5CeIFtibGVuZC5kZW1vQDY4XSB4LCB5ID1cIiwgeCwgeSkgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMy0yMCBhdCAxODozOFxcbiAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogW3gsIHksIDBdLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlQbGFuZSgpLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoe1xcbiAgICAgICAgICAgIGNvbG9yOiBbUiwgRywgQiwgMC42XSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbn1cXG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPERlbW8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tdWx0aXBseS5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoKVxcbiAgICBjYW1lcmEuc3BhY2VIZWlnaHRBdFRhcmdldCA9IDJcXG4gICAgY29udGV4dC5jYW1lcmEgPSBjYW1lcmFcXG4gICAgY29uc3QgcGxhbmVzID0gW1xcbiAgICAgICAgWzEsIDAuNSwgMC41XSxcXG4gICAgICAgIFswLjUsIDEsIDAuNV0sXFxuICAgICAgICBbMC41LCAwLjUsIDFdLFxcbiAgICAgICAgWzAuNSwgMC41LCAwLjVdLFxcbiAgICBdLm1hcCgoW1IsIEcsIEJdLCBpbmRleCkgPT4gbWFrZVBsYW5lKGNvbnRleHQsIFIsIEcsIEIsIGluZGV4KSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGJsZW5kOiBcXFwibXVsdGlwbHlcXFwiLFxcbiAgICAgICAgY2hpbGRyZW46IHBsYW5lcyxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcbiAgICAgICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCksXFxuICAgICAgICB9KSxcXG4gICAgICAgIHN0YXRlLFxcbiAgICApXFxuICAgIGNvbnRleHQucGFpbnQoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZEdlb21ldHJ5UGxhbmUsXFxuICAgIFRnZE1hdGVyaWFsRmxhdCxcXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXFxcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFxcXCJcXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKClcXG4gICAgY2FtZXJhLnNwYWNlSGVpZ2h0QXRUYXJnZXQgPSAyXFxuICAgIGNvbnRleHQuY2FtZXJhID0gY2FtZXJhXFxuICAgIGNvbnN0IHBsYW5lcyA9IFtcXG4gICAgICAgIFsxLCAwLjUsIDAuNV0sXFxuICAgICAgICBbMC41LCAxLCAwLjVdLFxcbiAgICAgICAgWzAuNSwgMC41LCAxXSxcXG4gICAgICAgIFswLjUsIDAuNSwgMC41XSxcXG4gICAgXS5tYXAoKFtSLCBHLCBCXSwgaW5kZXgpID0+IG1ha2VQbGFuZShjb250ZXh0LCBSLCBHLCBCLCBpbmRleCkpXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBibGVuZDogXFxcIm11bHRpcGx5XFxcIixcXG4gICAgICAgIGNoaWxkcmVuOiBwbGFuZXMsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJhY2tncm91bmQpLFxcbiAgICAgICAgfSksXFxuICAgICAgICBzdGF0ZSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIGRlcHRoOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBhbHBoYTogZmFsc2UsXFxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgIHN1emFubmU6IFN1emFubmVVUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmZ1bmN0aW9uIG1ha2VQbGFuZShjb250ZXh0OiBUZ2RDb250ZXh0LCBSOiBudW1iZXIsIEc6IG51bWJlciwgQjogbnVtYmVyLCBpbmRleDogbnVtYmVyKSB7XFxuICAgIGNvbnN0IGFuZ2xlID0gaW5kZXggKiAwLjUgKiBNYXRoLlBJXFxuICAgIGNvbnN0IHJhZGl1cyA9IDAuNlxcbiAgICBjb25zdCB4ID0gcmFkaXVzICogTWF0aC5jb3MoYW5nbGUpXFxuICAgIGNvbnN0IHkgPSByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSlcXG4gICAgY29uc29sZS5sb2coXFxcIvCfkJ4gW2JsZW5kLmRlbW9ANjhdIHgsIHkgPVxcXCIsIHgsIHkpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDMtMjAgYXQgMTg6MzhcXG4gICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICB0cmFuc2ZvOiB7XFxuICAgICAgICAgICAgcG9zaXRpb246IFt4LCB5LCAwXSxcXG4gICAgICAgIH0sXFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoKSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHtcXG4gICAgICAgICAgICBjb2xvcjogW1IsIEcsIEIsIDAuNl0sXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RHZW9tZXRyeVBsYW5lLFxuICAgIFRnZE1hdGVyaWFsRmxhdCxcbiAgICBUZ2RQYWludGVyQmFja2dyb3VuZCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvZGluby53ZWJwXCJcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSgpXG4gICAgY2FtZXJhLnNwYWNlSGVpZ2h0QXRUYXJnZXQgPSAyXG4gICAgY29udGV4dC5jYW1lcmEgPSBjYW1lcmFcbiAgICBjb25zdCBwbGFuZXMgPSBbXG4gICAgICAgIFsxLCAwLjUsIDAuNV0sXG4gICAgICAgIFswLjUsIDEsIDAuNV0sXG4gICAgICAgIFswLjUsIDAuNSwgMV0sXG4gICAgICAgIFswLjUsIDAuNSwgMC41XSxcbiAgICBdLm1hcCgoW1IsIEcsIEJdLCBpbmRleCkgPT4gbWFrZVBsYW5lKGNvbnRleHQsIFIsIEcsIEIsIGluZGV4KSlcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBibGVuZDogXCJtdWx0aXBseVwiLFxuICAgICAgICBjaGlsZHJlbjogcGxhbmVzLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcbiAgICAgICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCksXG4gICAgICAgIH0pLFxuICAgICAgICBzdGF0ZSxcbiAgICApXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIGRlcHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFscGhhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgZ2xiOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1emFubmU6IFN1emFubmVVUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gbWFrZVBsYW5lKGNvbnRleHQ6IFRnZENvbnRleHQsIFI6IG51bWJlciwgRzogbnVtYmVyLCBCOiBudW1iZXIsIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBhbmdsZSA9IGluZGV4ICogMC41ICogTWF0aC5QSVxuICAgIGNvbnN0IHJhZGl1cyA9IDAuNlxuICAgIGNvbnN0IHggPSByYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSlcbiAgICBjb25zdCB5ID0gcmFkaXVzICogTWF0aC5zaW4oYW5nbGUpXG4gICAgY29uc29sZS5sb2coXCLwn5CeIFtibGVuZC5kZW1vQDY4XSB4LCB5ID1cIiwgeCwgeSkgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMy0yMCBhdCAxODozOFxuICAgIHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuICAgICAgICB0cmFuc2ZvOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogW3gsIHksIDBdLFxuICAgICAgICB9LFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoKSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoe1xuICAgICAgICAgICAgY29sb3I6IFtSLCBHLCBCLCAwLjZdLFxuICAgICAgICB9KSxcbiAgICB9KVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29kZVZpZXdlclwiXG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7Ozs7Ozs7QUNTbko7QUFDNkI7QUFFQTtBQUNGO0FBRWxELFNBQVMsSUFBSSxDQUFDLE9BQW1CLEVBQUUsTUFBYztJQUU3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLG9EQUFvQixFQUFFO0lBQ3pDLE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyxDQUFDO0lBQzlCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTTtJQUN2QixNQUFNLE1BQU0sR0FBRztRQUNYLENBQUMsQ0FB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