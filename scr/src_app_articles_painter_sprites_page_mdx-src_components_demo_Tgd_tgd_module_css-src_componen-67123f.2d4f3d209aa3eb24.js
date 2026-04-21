"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_sprites_page_mdx-src_components_demo_Tgd_tgd_module_css-src_componen-67123f"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
99167(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _bricks_webp__rspack_import_3 = __webpack_require__(4264);




function init(context, assets) {
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0.3, 0.3, 0.3, 1],
        depth: 1,
    });
    const texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        load: assets.image.sprites,
    });
    const cell = (col, row) => ({
        x: col / 2,
        y: row / 4,
        width: 1 / 2,
        height: 1 / 4,
    });
    const atlas = [];
    for (let col = 0; col < 2; col++) {
        for (let row = 0; row < 3; row++) {
            atlas.push(cell(col, row));
        }
    }
    const spritesPainter = new _tolokoban_tgd__rspack_import_1.TgdPainterSpritesHue(context, {
        texture,
        atlas,
        atlasUnit: 2,
    });
    const bricks = new Map();
    const click = (x, y) => {
        const { aspectRatio } = context;
        x *= aspectRatio > 1 ? aspectRatio : 1;
        if (x < -1 || x > 1)
            return;
        y *= aspectRatio > 1 ? 1 : aspectRatio;
        if (y < -1 || y > 1)
            return;
        x = Math.floor(x * 2) * 2 + 1;
        y = Math.floor(y * 4) + 0.5;
        const key = `${x}/${y}`;
        const currentBrick = bricks.get(key);
        if (currentBrick) {
            if (currentBrick.index < 4)
                currentBrick.index++;
            else {
                console.log("Delete:", currentBrick);
                spritesPainter.remove(currentBrick);
                bricks.delete(key);
            }
        }
        else {
            const brick = spritesPainter.add({
                x,
                y,
                hue: Math.random() * 0.8,
            });
            bricks.set(key, brick);
        }
        context.paint();
    };
    for (let loop = 0; loop < 10; loop++) {
        click((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(-1, +1), (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(-1, +1));
    }
    context.inputs.pointer.eventTap.addListener((evt) => click(evt.x, evt.y));
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        blend: _tolokoban_tgd__rspack_import_1.webglPresetBlend.alpha,
        children: [spritesPainter],
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(() => {
        context.camera.fitSpaceAtTarget(8, 8);
    }));
    context.paint();
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, assets: {
            image: { sprites: _bricks_webp__rspack_import_3 },
        } }));
}


},
96982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _bricks_demo__rspack_import_4 = __webpack_require__(99167);





const FOCUS = { "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        load: assets.image.sprites,\n    })\n    const cell = (col: number, row: number) => ({\n        x: col / 2,\n        y: row / 4,\n        width: 1 / 2,\n        height: 1 / 4,\n    })\n    const atlas: TgdPainterSpritesAtlas = []\n    for (let col = 0; col < 2; col++) {\n        for (let row = 0; row < 3; row++) {\n            atlas.push(cell(col, row))\n        }\n    }\n    const spritesPainter = new TgdPainterSpritesHue(context, {\n        texture,\n        atlas,\n        atlasUnit: 2,\n    })\n    const bricks = new Map<string, TgdSprite>()\n    const click = (x: number, y: number) => {\n        const { aspectRatio } = context\n        x *= aspectRatio > 1 ? aspectRatio : 1\n        if (x < -1 || x > 1) return\n\n        y *= aspectRatio > 1 ? 1 : aspectRatio\n        if (y < -1 || y > 1) return\n\n        x = Math.floor(x * 2) * 2 + 1\n        y = Math.floor(y * 4) + 0.5\n        const key = `${x}/${y}`\n        const currentBrick = bricks.get(key)\n        if (currentBrick) {\n            if (currentBrick.index < 4) currentBrick.index++\n            else {\n                console.log(\"Delete:\", currentBrick)\n                spritesPainter.remove(currentBrick)\n                bricks.delete(key)\n            }\n        } else {\n            const brick = spritesPainter.add({\n                x,\n                y,\n                hue: Math.random() * 0.8,\n            })\n            bricks.set(key, brick)\n        }\n        context.paint()\n    }\n    for (let loop = 0; loop < 10; loop++) {\n        click(tgdCalcRandom(-1, +1), tgdCalcRandom(-1, +1))\n    }\n    context.inputs.pointer.eventTap.addListener((evt) => click(evt.x, evt.y))\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            blend: webglPresetBlend.alpha,\n            children: [spritesPainter],\n        }),\n        new TgdPainterLogic(() => {\n            context.camera.fitSpaceAtTarget(8, 8)\n        }),\n    )\n    context.paint()\n}" };
const FULL = "import {\n    tgdCalcRandom,\n    type TgdContext,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterSprites,\n    TgdPainterSpritesAtlas,\n    TgdPainterSpritesHue,\n    TgdPainterState,\n    TgdSprite,\n    TgdTexture2D,\n    webglPresetBlend,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\n\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nimport BricksURL from \"./bricks.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        load: assets.image.sprites,\n    })\n    const cell = (col: number, row: number) => ({\n        x: col / 2,\n        y: row / 4,\n        width: 1 / 2,\n        height: 1 / 4,\n    })\n    const atlas: TgdPainterSpritesAtlas = []\n    for (let col = 0; col < 2; col++) {\n        for (let row = 0; row < 3; row++) {\n            atlas.push(cell(col, row))\n        }\n    }\n    const spritesPainter = new TgdPainterSpritesHue(context, {\n        texture,\n        atlas,\n        atlasUnit: 2,\n    })\n    const bricks = new Map<string, TgdSprite>()\n    const click = (x: number, y: number) => {\n        const { aspectRatio } = context\n        x *= aspectRatio > 1 ? aspectRatio : 1\n        if (x < -1 || x > 1) return\n\n        y *= aspectRatio > 1 ? 1 : aspectRatio\n        if (y < -1 || y > 1) return\n\n        x = Math.floor(x * 2) * 2 + 1\n        y = Math.floor(y * 4) + 0.5\n        const key = `${x}/${y}`\n        const currentBrick = bricks.get(key)\n        if (currentBrick) {\n            if (currentBrick.index < 4) currentBrick.index++\n            else {\n                console.log(\"Delete:\", currentBrick)\n                spritesPainter.remove(currentBrick)\n                bricks.delete(key)\n            }\n        } else {\n            const brick = spritesPainter.add({\n                x,\n                y,\n                hue: Math.random() * 0.8,\n            })\n            bricks.set(key, brick)\n        }\n        context.paint()\n    }\n    for (let loop = 0; loop < 10; loop++) {\n        click(tgdCalcRandom(-1, +1), tgdCalcRandom(-1, +1))\n    }\n    context.inputs.pointer.eventTap.addListener((evt) => click(evt.x, evt.y))\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            blend: webglPresetBlend.alpha,\n            children: [spritesPainter],\n        }),\n        new TgdPainterLogic(() => {\n            context.camera.fitSpaceAtTarget(8, 8)\n        }),\n    )\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: { sprites: BricksURL },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_bricks_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
18221(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(9711);





const FOCUS = {
    "Detail #1": 'function init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    });\n    const texture = new TgdTexture2D(context, {\n        params: {\n            magFilter: "NEAREST",\n            minFilter: "NEAREST",\n            wrapR: "CLAMP_TO_EDGE",\n            wrapS: "CLAMP_TO_EDGE",\n            wrapT: "CLAMP_TO_EDGE",\n        },\n        load: assets.image.sprites,\n    });\n    const cell = (col: number, row: number) => ({\n        x: col / 8,\n        y: row / 10,\n        width: 1 / 8,\n        height: 1 / 10,\n    });\n    const atlas: TgdPainterSpritesAtlas = [];\n    for (let row = 0; row < 10; row++) {\n        for (let col = 0; col < 8; col++) {\n            atlas.push(cell(col, row));\n        }\n    }\n    const spritesPainter1 = new TgdPainterSprites(context, {\n        texture,\n        atlas,\n        atlasUnit: 5,\n    });\n    const spritesPainter2 = new TgdPainterSprites(context, {\n        texture,\n        atlas,\n        atlasUnit: 5,\n    });\n    const sprites: TgdSprite[] = [];\n    for (let x = -7; x < 8; x++) {\n        for (let y = -3; y < 4; y += 2) {\n            for (let z = 0; z < 1; z += 0.1) {\n                const sprite1 = spritesPainter1.add({});\n                sprite1.x = x;\n                sprite1.y = y;\n                sprite1.z = -z * 100;\n                if (tgdCalcRandom() < 0.5) sprite1.scaleX = -1;\n                sprite1.index = Math.floor(tgdCalcRandom(0, 40));\n                sprites.push(sprite1);\n                const sprite2 = spritesPainter2.add({});\n                sprite2.x = x;\n                sprite2.y = y;\n                sprite2.z = -z * 100 - 100;\n                if (tgdCalcRandom() < 0.5) sprite2.scaleX = -1;\n                sprite2.index = Math.floor(tgdCalcRandom(0, 72));\n                sprites.push(sprite2);\n            }\n        }\n    }\n    const STEPS: number[] = [\n        3,\n        2,\n        1,\n        0,\n        7,\n        6,\n        5,\n        4,\n        9,\n        10,\n        11,\n        8,\n        11,\n        12,\n        10,\n        15,\n    ];\n    for (let i = 0; i < 16; i++) {\n        STEPS.push(STEPS[i] + 16);\n    }\n    STEPS.push(32, 34, 35, 36, 33, 37, 39, 38);\n    for (let i = 0; i < 32; i++) {\n        STEPS.push(STEPS[i] + 40);\n    }\n    const interval = new TgdTimeInterval({\n        intervalInSeconds: 0.2,\n        action(time: number) {\n            for (const sprite of sprites) {\n                const nextStep = STEPS[sprite.index];\n                if (typeof nextStep === "number") {\n                    sprite.index = nextStep;\n                }\n            }\n        },\n    });\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [spritesPainter1, spritesPainter2],\n        }),\n        new TgdPainterLogic((time, delay) => {\n            interval.update(time, delay);\n            for (const sprite of sprites) {\n                sprite.angle = tgdCalcDegToRad(30 * Math.sin(time));\n            }\n            const t = tgdCalcModulo(time * 0.05, 0, 1);\n            const z = tgdCalcMix(0, -100, t);\n            context.camera.transfo.setPosition(0, 0, z);\n        }),\n    );\n    context.play();\n}',
};
const FULL = 'import {\n    tgdCalcDegToRad,\n    tgdCalcMix,\n    tgdCalcModulo,\n    tgdCalcRandom,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterSprites,\n    TgdPainterSpritesAtlas,\n    TgdPainterState,\n    TgdSprite,\n    TgdTexture2D,\n    TgdTimeInterval,\n    webglPresetDepth,\n} from "@tolokoban/tgd";\n\nimport View, { type Assets } from "@/components/demo/Tgd";\n\nimport SpritesURL from "./sprites.webp";\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    });\n    const texture = new TgdTexture2D(context, {\n        params: {\n            magFilter: "NEAREST",\n            minFilter: "NEAREST",\n            wrapR: "CLAMP_TO_EDGE",\n            wrapS: "CLAMP_TO_EDGE",\n            wrapT: "CLAMP_TO_EDGE",\n        },\n        load: assets.image.sprites,\n    });\n    const cell = (col: number, row: number) => ({\n        x: col / 8,\n        y: row / 10,\n        width: 1 / 8,\n        height: 1 / 10,\n    });\n    const atlas: TgdPainterSpritesAtlas = [];\n    for (let row = 0; row < 10; row++) {\n        for (let col = 0; col < 8; col++) {\n            atlas.push(cell(col, row));\n        }\n    }\n    const spritesPainter1 = new TgdPainterSprites(context, {\n        texture,\n        atlas,\n        atlasUnit: 5,\n    });\n    const spritesPainter2 = new TgdPainterSprites(context, {\n        texture,\n        atlas,\n        atlasUnit: 5,\n    });\n    const sprites: TgdSprite[] = [];\n    for (let x = -7; x < 8; x++) {\n        for (let y = -3; y < 4; y += 2) {\n            for (let z = 0; z < 1; z += 0.1) {\n                const sprite1 = spritesPainter1.add({});\n                sprite1.x = x;\n                sprite1.y = y;\n                sprite1.z = -z * 100;\n                if (tgdCalcRandom() < 0.5) sprite1.scaleX = -1;\n                sprite1.index = Math.floor(tgdCalcRandom(0, 40));\n                sprites.push(sprite1);\n                const sprite2 = spritesPainter2.add({});\n                sprite2.x = x;\n                sprite2.y = y;\n                sprite2.z = -z * 100 - 100;\n                if (tgdCalcRandom() < 0.5) sprite2.scaleX = -1;\n                sprite2.index = Math.floor(tgdCalcRandom(0, 72));\n                sprites.push(sprite2);\n            }\n        }\n    }\n    const STEPS: number[] = [\n        3,\n        2,\n        1,\n        0,\n        7,\n        6,\n        5,\n        4,\n        9,\n        10,\n        11,\n        8,\n        11,\n        12,\n        10,\n        15,\n    ];\n    for (let i = 0; i < 16; i++) {\n        STEPS.push(STEPS[i] + 16);\n    }\n    STEPS.push(32, 34, 35, 36, 33, 37, 39, 38);\n    for (let i = 0; i < 32; i++) {\n        STEPS.push(STEPS[i] + 40);\n    }\n    const interval = new TgdTimeInterval({\n        intervalInSeconds: 0.2,\n        action(time: number) {\n            for (const sprite of sprites) {\n                const nextStep = STEPS[sprite.index];\n                if (typeof nextStep === "number") {\n                    sprite.index = nextStep;\n                }\n            }\n        },\n    });\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [spritesPainter1, spritesPainter2],\n        }),\n        new TgdPainterLogic((time, delay) => {\n            interval.update(time, delay);\n            for (const sprite of sprites) {\n                sprite.angle = tgdCalcDegToRad(30 * Math.sin(time));\n            }\n            const t = tgdCalcModulo(time * 0.05, 0, 1);\n            const z = tgdCalcMix(0, -100, t);\n            context.camera.transfo.setPosition(0, 0, z);\n        }),\n    );\n    context.play();\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: { sprites: SpritesURL },\n            }}\n            controller={{\n                inertiaOrbit: 1000,\n                inertiaZoom: 1000,\n                geo: {\n                    minLat: tgdCalcDegToRad(-30),\n                    minLng: tgdCalcDegToRad(-30),\n                    maxLat: tgdCalcDegToRad(30),\n                    maxLng: tgdCalcDegToRad(30),\n                },\n            }}\n        />\n    );\n}\n';
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_main_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] }));
}


},
9711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _sprites_webp__rspack_import_3 = __webpack_require__(46033);




function init(context, assets) {
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0.3, 0.3, 0.3, 1],
        depth: 1,
    });
    const texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        params: {
            magFilter: "NEAREST",
            minFilter: "NEAREST",
            wrapR: "CLAMP_TO_EDGE",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE",
        },
        load: assets.image.sprites,
    });
    const cell = (col, row) => ({
        x: col / 8,
        y: row / 10,
        width: 1 / 8,
        height: 1 / 10,
    });
    const atlas = [];
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 8; col++) {
            atlas.push(cell(col, row));
        }
    }
    const spritesPainter1 = new _tolokoban_tgd__rspack_import_1.TgdPainterSprites(context, {
        texture,
        atlas,
        atlasUnit: 5,
    });
    const spritesPainter2 = new _tolokoban_tgd__rspack_import_1.TgdPainterSprites(context, {
        texture,
        atlas,
        atlasUnit: 5,
    });
    const sprites = [];
    for (let x = -7; x < 8; x++) {
        for (let y = -3; y < 4; y += 2) {
            for (let z = 0; z < 1; z += 0.1) {
                const sprite1 = spritesPainter1.add({});
                sprite1.x = x;
                sprite1.y = y;
                sprite1.z = -z * 100;
                if ((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)() < 0.5)
                    sprite1.scaleX = -1;
                sprite1.index = Math.floor((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(0, 40));
                sprites.push(sprite1);
                const sprite2 = spritesPainter2.add({});
                sprite2.x = x;
                sprite2.y = y;
                sprite2.z = -z * 100 - 100;
                if ((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)() < 0.5)
                    sprite2.scaleX = -1;
                sprite2.index = Math.floor((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(0, 72));
                sprites.push(sprite2);
            }
        }
    }
    const STEPS = [3, 2, 1, 0, 7, 6, 5, 4, 9, 10, 11, 8, 11, 12, 10, 15];
    for (let i = 0; i < 16; i++) {
        STEPS.push(STEPS[i] + 16);
    }
    STEPS.push(32, 34, 35, 36, 33, 37, 39, 38);
    for (let i = 0; i < 32; i++) {
        STEPS.push(STEPS[i] + 40);
    }
    const interval = new _tolokoban_tgd__rspack_import_1.TgdTimeInterval({
        intervalInSeconds: 0.2,
        action(time) {
            for (const sprite of sprites) {
                const nextStep = STEPS[sprite.index];
                if (typeof nextStep === "number") {
                    sprite.index = nextStep;
                }
            }
        },
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [spritesPainter1, spritesPainter2],
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic((time, delay) => {
        interval.update(time, delay);
        for (const sprite of sprites) {
            sprite.angle = (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(30 * Math.sin(time));
        }
        const t = (0,_tolokoban_tgd__rspack_import_1.tgdCalcModulo)(time * 0.05, 0, 1);
        const z = (0,_tolokoban_tgd__rspack_import_1.tgdCalcMix)(0, -100, t);
        context.camera.transfo.setPosition(0, 0, z);
    }));
    context.play();
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, assets: {
            image: { sprites: _sprites_webp__rspack_import_3 },
        }, controller: {
            inertiaOrbit: 1000,
            inertiaZoom: 1000,
            geo: {
                minLat: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(-30),
                minLng: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(-30),
                maxLat: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(30),
                maxLng: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(30),
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
4264(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/bricks.85389c95a9d5a39e.webp";

},
46033(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/sprites.aa4ec453b3cda8b6.webp";

},
97553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(18221);
/* import */ var _bricks_demo__rspack_import_2 = __webpack_require__(96982);
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
        p: "p"
    }, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterSprites.html",
                    children: "TgdPainterSprites"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                    lineNumber: 4,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Fast way to paint a lot of sprites from an Atlas."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example 1"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example 2"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Click on the screen to add/remove bricks."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_bricks_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 16,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zcHJpdGVzX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fVGdkX3RnZF9tb2R1bGVfY3NzLXNyY19jb21wb25lbi02NzEyM2YuMmQ0ZjNkMjA5YWEzZWIyNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zcHJpdGVzL18vYnJpY2tzLmRlbW8vYnJpY2tzLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zcHJpdGVzL18vYnJpY2tzLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zcHJpdGVzL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc3ByaXRlcy9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9Db2RlVmlld2VyLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvaW5kZXgudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3Nwcml0ZXMvcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNvZGVWaWV3ZXJcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9Db2RlVmlld2VyX1B0TDdNNVwiLFwicG9wdXBcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9wb3B1cF9uU0RaQ1JcIn07IiwiaW1wb3J0IHtcbiAgICB0Z2RDYWxjUmFuZG9tLFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJTcHJpdGVzLFxuICAgIFRnZFBhaW50ZXJTcHJpdGVzQXRsYXMsXG4gICAgVGdkUGFpbnRlclNwcml0ZXNIdWUsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFNwcml0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgd2ViZ2xQcmVzZXRCbGVuZCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgQnJpY2tzVVJMIGZyb20gXCIuL2JyaWNrcy53ZWJwXCJcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgIGxvYWQ6IGFzc2V0cy5pbWFnZS5zcHJpdGVzLFxuICAgIH0pXG4gICAgY29uc3QgY2VsbCA9IChjb2w6IG51bWJlciwgcm93OiBudW1iZXIpID0+ICh7XG4gICAgICAgIHg6IGNvbCAvIDIsXG4gICAgICAgIHk6IHJvdyAvIDQsXG4gICAgICAgIHdpZHRoOiAxIC8gMixcbiAgICAgICAgaGVpZ2h0OiAxIC8gNCxcbiAgICB9KVxuICAgIGNvbnN0IGF0bGFzOiBUZ2RQYWludGVyU3ByaXRlc0F0bGFzID0gW11cbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAyOyBjb2wrKykge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAzOyByb3crKykge1xuICAgICAgICAgICAgYXRsYXMucHVzaChjZWxsKGNvbCwgcm93KSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzcHJpdGVzUGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3ByaXRlc0h1ZShjb250ZXh0LCB7XG4gICAgICAgIHRleHR1cmUsXG4gICAgICAgIGF0bGFzLFxuICAgICAgICBhdGxhc1VuaXQ6IDIsXG4gICAgfSlcbiAgICBjb25zdCBicmlja3MgPSBuZXcgTWFwPHN0cmluZywgVGdkU3ByaXRlPigpXG4gICAgY29uc3QgY2xpY2sgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgeyBhc3BlY3RSYXRpbyB9ID0gY29udGV4dFxuICAgICAgICB4ICo9IGFzcGVjdFJhdGlvID4gMSA/IGFzcGVjdFJhdGlvIDogMVxuICAgICAgICBpZiAoeCA8IC0xIHx8IHggPiAxKSByZXR1cm5cblxuICAgICAgICB5ICo9IGFzcGVjdFJhdGlvID4gMSA/IDEgOiBhc3BlY3RSYXRpb1xuICAgICAgICBpZiAoeSA8IC0xIHx8IHkgPiAxKSByZXR1cm5cblxuICAgICAgICB4ID0gTWF0aC5mbG9vcih4ICogMikgKiAyICsgMVxuICAgICAgICB5ID0gTWF0aC5mbG9vcih5ICogNCkgKyAwLjVcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7eH0vJHt5fWBcbiAgICAgICAgY29uc3QgY3VycmVudEJyaWNrID0gYnJpY2tzLmdldChrZXkpXG4gICAgICAgIGlmIChjdXJyZW50QnJpY2spIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QnJpY2suaW5kZXggPCA0KSBjdXJyZW50QnJpY2suaW5kZXgrK1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGU6XCIsIGN1cnJlbnRCcmljaylcbiAgICAgICAgICAgICAgICBzcHJpdGVzUGFpbnRlci5yZW1vdmUoY3VycmVudEJyaWNrKVxuICAgICAgICAgICAgICAgIGJyaWNrcy5kZWxldGUoa2V5KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYnJpY2sgPSBzcHJpdGVzUGFpbnRlci5hZGQoe1xuICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICBodWU6IE1hdGgucmFuZG9tKCkgKiAwLjgsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnJpY2tzLnNldChrZXksIGJyaWNrKVxuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbiAgICBmb3IgKGxldCBsb29wID0gMDsgbG9vcCA8IDEwOyBsb29wKyspIHtcbiAgICAgICAgY2xpY2sodGdkQ2FsY1JhbmRvbSgtMSwgKzEpLCB0Z2RDYWxjUmFuZG9tKC0xLCArMSkpXG4gICAgfVxuICAgIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT4gY2xpY2soZXZ0LngsIGV2dC55KSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLmFscGhhLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzcHJpdGVzUGFpbnRlcl0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoOCwgOClcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQucGFpbnQoKVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgc3ByaXRlczogQnJpY2tzVVJMIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9icmlja3MuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIGxvYWQ6IGFzc2V0cy5pbWFnZS5zcHJpdGVzLFxcbiAgICB9KVxcbiAgICBjb25zdCBjZWxsID0gKGNvbDogbnVtYmVyLCByb3c6IG51bWJlcikgPT4gKHtcXG4gICAgICAgIHg6IGNvbCAvIDIsXFxuICAgICAgICB5OiByb3cgLyA0LFxcbiAgICAgICAgd2lkdGg6IDEgLyAyLFxcbiAgICAgICAgaGVpZ2h0OiAxIC8gNCxcXG4gICAgfSlcXG4gICAgY29uc3QgYXRsYXM6IFRnZFBhaW50ZXJTcHJpdGVzQXRsYXMgPSBbXVxcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAyOyBjb2wrKykge1xcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMzsgcm93KyspIHtcXG4gICAgICAgICAgICBhdGxhcy5wdXNoKGNlbGwoY29sLCByb3cpKVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IHNwcml0ZXNQYWludGVyID0gbmV3IFRnZFBhaW50ZXJTcHJpdGVzSHVlKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmUsXFxuICAgICAgICBhdGxhcyxcXG4gICAgICAgIGF0bGFzVW5pdDogMixcXG4gICAgfSlcXG4gICAgY29uc3QgYnJpY2tzID0gbmV3IE1hcDxzdHJpbmcsIFRnZFNwcml0ZT4oKVxcbiAgICBjb25zdCBjbGljayA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xcbiAgICAgICAgY29uc3QgeyBhc3BlY3RSYXRpbyB9ID0gY29udGV4dFxcbiAgICAgICAgeCAqPSBhc3BlY3RSYXRpbyA+IDEgPyBhc3BlY3RSYXRpbyA6IDFcXG4gICAgICAgIGlmICh4IDwgLTEgfHwgeCA+IDEpIHJldHVyblxcblxcbiAgICAgICAgeSAqPSBhc3BlY3RSYXRpbyA+IDEgPyAxIDogYXNwZWN0UmF0aW9cXG4gICAgICAgIGlmICh5IDwgLTEgfHwgeSA+IDEpIHJldHVyblxcblxcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoeCAqIDIpICogMiArIDFcXG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHkgKiA0KSArIDAuNVxcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7eH0vJHt5fWBcXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCcmljayA9IGJyaWNrcy5nZXQoa2V5KVxcbiAgICAgICAgaWYgKGN1cnJlbnRCcmljaykge1xcbiAgICAgICAgICAgIGlmIChjdXJyZW50QnJpY2suaW5kZXggPCA0KSBjdXJyZW50QnJpY2suaW5kZXgrK1xcbiAgICAgICAgICAgIGVsc2Uge1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiRGVsZXRlOlxcXCIsIGN1cnJlbnRCcmljaylcXG4gICAgICAgICAgICAgICAgc3ByaXRlc1BhaW50ZXIucmVtb3ZlKGN1cnJlbnRCcmljaylcXG4gICAgICAgICAgICAgICAgYnJpY2tzLmRlbGV0ZShrZXkpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBjb25zdCBicmljayA9IHNwcml0ZXNQYWludGVyLmFkZCh7XFxuICAgICAgICAgICAgICAgIHgsXFxuICAgICAgICAgICAgICAgIHksXFxuICAgICAgICAgICAgICAgIGh1ZTogTWF0aC5yYW5kb20oKSAqIDAuOCxcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIGJyaWNrcy5zZXQoa2V5LCBicmljaylcXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxuICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgMTA7IGxvb3ArKykge1xcbiAgICAgICAgY2xpY2sodGdkQ2FsY1JhbmRvbSgtMSwgKzEpLCB0Z2RDYWxjUmFuZG9tKC0xLCArMSkpXFxuICAgIH1cXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiBjbGljayhldnQueCwgZXZ0LnkpKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBibGVuZDogd2ViZ2xQcmVzZXRCbGVuZC5hbHBoYSxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3Nwcml0ZXNQYWludGVyXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygoKSA9PiB7XFxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg4LCA4KVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdGdkQ2FsY1JhbmRvbSxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlclNwcml0ZXMsXFxuICAgIFRnZFBhaW50ZXJTcHJpdGVzQXRsYXMsXFxuICAgIFRnZFBhaW50ZXJTcHJpdGVzSHVlLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFNwcml0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICB3ZWJnbFByZXNldEJsZW5kLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuaW1wb3J0IEJyaWNrc1VSTCBmcm9tIFxcXCIuL2JyaWNrcy53ZWJwXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgbG9hZDogYXNzZXRzLmltYWdlLnNwcml0ZXMsXFxuICAgIH0pXFxuICAgIGNvbnN0IGNlbGwgPSAoY29sOiBudW1iZXIsIHJvdzogbnVtYmVyKSA9PiAoe1xcbiAgICAgICAgeDogY29sIC8gMixcXG4gICAgICAgIHk6IHJvdyAvIDQsXFxuICAgICAgICB3aWR0aDogMSAvIDIsXFxuICAgICAgICBoZWlnaHQ6IDEgLyA0LFxcbiAgICB9KVxcbiAgICBjb25zdCBhdGxhczogVGdkUGFpbnRlclNwcml0ZXNBdGxhcyA9IFtdXFxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDI7IGNvbCsrKSB7XFxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAzOyByb3crKykge1xcbiAgICAgICAgICAgIGF0bGFzLnB1c2goY2VsbChjb2wsIHJvdykpXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29uc3Qgc3ByaXRlc1BhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclNwcml0ZXNIdWUoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgICAgIGF0bGFzLFxcbiAgICAgICAgYXRsYXNVbml0OiAyLFxcbiAgICB9KVxcbiAgICBjb25zdCBicmlja3MgPSBuZXcgTWFwPHN0cmluZywgVGdkU3ByaXRlPigpXFxuICAgIGNvbnN0IGNsaWNrID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XFxuICAgICAgICBjb25zdCB7IGFzcGVjdFJhdGlvIH0gPSBjb250ZXh0XFxuICAgICAgICB4ICo9IGFzcGVjdFJhdGlvID4gMSA/IGFzcGVjdFJhdGlvIDogMVxcbiAgICAgICAgaWYgKHggPCAtMSB8fCB4ID4gMSkgcmV0dXJuXFxuXFxuICAgICAgICB5ICo9IGFzcGVjdFJhdGlvID4gMSA/IDEgOiBhc3BlY3RSYXRpb1xcbiAgICAgICAgaWYgKHkgPCAtMSB8fCB5ID4gMSkgcmV0dXJuXFxuXFxuICAgICAgICB4ID0gTWF0aC5mbG9vcih4ICogMikgKiAyICsgMVxcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoeSAqIDQpICsgMC41XFxuICAgICAgICBjb25zdCBrZXkgPSBgJHt4fS8ke3l9YFxcbiAgICAgICAgY29uc3QgY3VycmVudEJyaWNrID0gYnJpY2tzLmdldChrZXkpXFxuICAgICAgICBpZiAoY3VycmVudEJyaWNrKSB7XFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRCcmljay5pbmRleCA8IDQpIGN1cnJlbnRCcmljay5pbmRleCsrXFxuICAgICAgICAgICAgZWxzZSB7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJEZWxldGU6XFxcIiwgY3VycmVudEJyaWNrKVxcbiAgICAgICAgICAgICAgICBzcHJpdGVzUGFpbnRlci5yZW1vdmUoY3VycmVudEJyaWNrKVxcbiAgICAgICAgICAgICAgICBicmlja3MuZGVsZXRlKGtleSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIGNvbnN0IGJyaWNrID0gc3ByaXRlc1BhaW50ZXIuYWRkKHtcXG4gICAgICAgICAgICAgICAgeCxcXG4gICAgICAgICAgICAgICAgeSxcXG4gICAgICAgICAgICAgICAgaHVlOiBNYXRoLnJhbmRvbSgpICogMC44LFxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgYnJpY2tzLnNldChrZXksIGJyaWNrKVxcbiAgICAgICAgfVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG4gICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCAxMDsgbG9vcCsrKSB7XFxuICAgICAgICBjbGljayh0Z2RDYWxjUmFuZG9tKC0xLCArMSksIHRnZENhbGNSYW5kb20oLTEsICsxKSlcXG4gICAgfVxcbiAgICBjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IGNsaWNrKGV2dC54LCBldnQueSkpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLmFscGhhLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbc3ByaXRlc1BhaW50ZXJdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCgpID0+IHtcXG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDgsIDgpXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgc3ByaXRlczogQnJpY2tzVVJMIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcbiAgICBcIkRldGFpbCAjMVwiOlxuICAgICAgICAnZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KTtcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxcbiAgICAgICAgICAgIHdyYXBSOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgICAgICB3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgd3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGxvYWQ6IGFzc2V0cy5pbWFnZS5zcHJpdGVzLFxcbiAgICB9KTtcXG4gICAgY29uc3QgY2VsbCA9IChjb2w6IG51bWJlciwgcm93OiBudW1iZXIpID0+ICh7XFxuICAgICAgICB4OiBjb2wgLyA4LFxcbiAgICAgICAgeTogcm93IC8gMTAsXFxuICAgICAgICB3aWR0aDogMSAvIDgsXFxuICAgICAgICBoZWlnaHQ6IDEgLyAxMCxcXG4gICAgfSk7XFxuICAgIGNvbnN0IGF0bGFzOiBUZ2RQYWludGVyU3ByaXRlc0F0bGFzID0gW107XFxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcXG4gICAgICAgICAgICBhdGxhcy5wdXNoKGNlbGwoY29sLCByb3cpKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBjb25zdCBzcHJpdGVzUGFpbnRlcjEgPSBuZXcgVGdkUGFpbnRlclNwcml0ZXMoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgICAgIGF0bGFzLFxcbiAgICAgICAgYXRsYXNVbml0OiA1LFxcbiAgICB9KTtcXG4gICAgY29uc3Qgc3ByaXRlc1BhaW50ZXIyID0gbmV3IFRnZFBhaW50ZXJTcHJpdGVzKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmUsXFxuICAgICAgICBhdGxhcyxcXG4gICAgICAgIGF0bGFzVW5pdDogNSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHNwcml0ZXM6IFRnZFNwcml0ZVtdID0gW107XFxuICAgIGZvciAobGV0IHggPSAtNzsgeCA8IDg7IHgrKykge1xcbiAgICAgICAgZm9yIChsZXQgeSA9IC0zOyB5IDwgNDsgeSArPSAyKSB7XFxuICAgICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCAxOyB6ICs9IDAuMSkge1xcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUxID0gc3ByaXRlc1BhaW50ZXIxLmFkZCh7fSk7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTEueCA9IHg7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTEueSA9IHk7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTEueiA9IC16ICogMTAwO1xcbiAgICAgICAgICAgICAgICBpZiAodGdkQ2FsY1JhbmRvbSgpIDwgMC41KSBzcHJpdGUxLnNjYWxlWCA9IC0xO1xcbiAgICAgICAgICAgICAgICBzcHJpdGUxLmluZGV4ID0gTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDQwKSk7XFxuICAgICAgICAgICAgICAgIHNwcml0ZXMucHVzaChzcHJpdGUxKTtcXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlMiA9IHNwcml0ZXNQYWludGVyMi5hZGQoe30pO1xcbiAgICAgICAgICAgICAgICBzcHJpdGUyLnggPSB4O1xcbiAgICAgICAgICAgICAgICBzcHJpdGUyLnkgPSB5O1xcbiAgICAgICAgICAgICAgICBzcHJpdGUyLnogPSAteiAqIDEwMCAtIDEwMDtcXG4gICAgICAgICAgICAgICAgaWYgKHRnZENhbGNSYW5kb20oKSA8IDAuNSkgc3ByaXRlMi5zY2FsZVggPSAtMTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMi5pbmRleCA9IE1hdGguZmxvb3IodGdkQ2FsY1JhbmRvbSgwLCA3MikpO1xcbiAgICAgICAgICAgICAgICBzcHJpdGVzLnB1c2goc3ByaXRlMik7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IFNURVBTOiBudW1iZXJbXSA9IFtcXG4gICAgICAgIDMsXFxuICAgICAgICAyLFxcbiAgICAgICAgMSxcXG4gICAgICAgIDAsXFxuICAgICAgICA3LFxcbiAgICAgICAgNixcXG4gICAgICAgIDUsXFxuICAgICAgICA0LFxcbiAgICAgICAgOSxcXG4gICAgICAgIDEwLFxcbiAgICAgICAgMTEsXFxuICAgICAgICA4LFxcbiAgICAgICAgMTEsXFxuICAgICAgICAxMixcXG4gICAgICAgIDEwLFxcbiAgICAgICAgMTUsXFxuICAgIF07XFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xcbiAgICAgICAgU1RFUFMucHVzaChTVEVQU1tpXSArIDE2KTtcXG4gICAgfVxcbiAgICBTVEVQUy5wdXNoKDMyLCAzNCwgMzUsIDM2LCAzMywgMzcsIDM5LCAzOCk7XFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzI7IGkrKykge1xcbiAgICAgICAgU1RFUFMucHVzaChTVEVQU1tpXSArIDQwKTtcXG4gICAgfVxcbiAgICBjb25zdCBpbnRlcnZhbCA9IG5ldyBUZ2RUaW1lSW50ZXJ2YWwoe1xcbiAgICAgICAgaW50ZXJ2YWxJblNlY29uZHM6IDAuMixcXG4gICAgICAgIGFjdGlvbih0aW1lOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiBzcHJpdGVzKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTdGVwID0gU1RFUFNbc3ByaXRlLmluZGV4XTtcXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXh0U3RlcCA9PT0gXCJudW1iZXJcIikge1xcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLmluZGV4ID0gbmV4dFN0ZXA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICB9KTtcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzcHJpdGVzUGFpbnRlcjEsIHNwcml0ZXNQYWludGVyMl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbGF5KSA9PiB7XFxuICAgICAgICAgICAgaW50ZXJ2YWwudXBkYXRlKHRpbWUsIGRlbGF5KTtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiBzcHJpdGVzKSB7XFxuICAgICAgICAgICAgICAgIHNwcml0ZS5hbmdsZSA9IHRnZENhbGNEZWdUb1JhZCgzMCAqIE1hdGguc2luKHRpbWUpKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgY29uc3QgdCA9IHRnZENhbGNNb2R1bG8odGltZSAqIDAuMDUsIDAsIDEpO1xcbiAgICAgICAgICAgIGNvbnN0IHogPSB0Z2RDYWxjTWl4KDAsIC0xMDAsIHQpO1xcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMCwgeik7XFxuICAgICAgICB9KSxcXG4gICAgKTtcXG4gICAgY29udGV4dC5wbGF5KCk7XFxufScsXG59XG5jb25zdCBGVUxMID1cbiAgICAnaW1wb3J0IHtcXG4gICAgdGdkQ2FsY0RlZ1RvUmFkLFxcbiAgICB0Z2RDYWxjTWl4LFxcbiAgICB0Z2RDYWxjTW9kdWxvLFxcbiAgICB0Z2RDYWxjUmFuZG9tLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJTcHJpdGVzLFxcbiAgICBUZ2RQYWludGVyU3ByaXRlc0F0bGFzLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFNwcml0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICBUZ2RUaW1lSW50ZXJ2YWwsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcXG5cXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcXG5cXG5pbXBvcnQgU3ByaXRlc1VSTCBmcm9tIFwiLi9zcHJpdGVzLndlYnBcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pO1xcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXFxuICAgICAgICAgICAgd3JhcFI6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgICAgIHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgICAgICB3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgbG9hZDogYXNzZXRzLmltYWdlLnNwcml0ZXMsXFxuICAgIH0pO1xcbiAgICBjb25zdCBjZWxsID0gKGNvbDogbnVtYmVyLCByb3c6IG51bWJlcikgPT4gKHtcXG4gICAgICAgIHg6IGNvbCAvIDgsXFxuICAgICAgICB5OiByb3cgLyAxMCxcXG4gICAgICAgIHdpZHRoOiAxIC8gOCxcXG4gICAgICAgIGhlaWdodDogMSAvIDEwLFxcbiAgICB9KTtcXG4gICAgY29uc3QgYXRsYXM6IFRnZFBhaW50ZXJTcHJpdGVzQXRsYXMgPSBbXTtcXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XFxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA4OyBjb2wrKykge1xcbiAgICAgICAgICAgIGF0bGFzLnB1c2goY2VsbChjb2wsIHJvdykpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IHNwcml0ZXNQYWludGVyMSA9IG5ldyBUZ2RQYWludGVyU3ByaXRlcyhjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICAgICAgYXRsYXMsXFxuICAgICAgICBhdGxhc1VuaXQ6IDUsXFxuICAgIH0pO1xcbiAgICBjb25zdCBzcHJpdGVzUGFpbnRlcjIgPSBuZXcgVGdkUGFpbnRlclNwcml0ZXMoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgICAgIGF0bGFzLFxcbiAgICAgICAgYXRsYXNVbml0OiA1LFxcbiAgICB9KTtcXG4gICAgY29uc3Qgc3ByaXRlczogVGdkU3ByaXRlW10gPSBbXTtcXG4gICAgZm9yIChsZXQgeCA9IC03OyB4IDwgODsgeCsrKSB7XFxuICAgICAgICBmb3IgKGxldCB5ID0gLTM7IHkgPCA0OyB5ICs9IDIpIHtcXG4gICAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IDE7IHogKz0gMC4xKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZTEgPSBzcHJpdGVzUGFpbnRlcjEuYWRkKHt9KTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMS54ID0geDtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMS55ID0geTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMS56ID0gLXogKiAxMDA7XFxuICAgICAgICAgICAgICAgIGlmICh0Z2RDYWxjUmFuZG9tKCkgPCAwLjUpIHNwcml0ZTEuc2NhbGVYID0gLTE7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTEuaW5kZXggPSBNYXRoLmZsb29yKHRnZENhbGNSYW5kb20oMCwgNDApKTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlcy5wdXNoKHNwcml0ZTEpO1xcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUyID0gc3ByaXRlc1BhaW50ZXIyLmFkZCh7fSk7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTIueCA9IHg7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTIueSA9IHk7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTIueiA9IC16ICogMTAwIC0gMTAwO1xcbiAgICAgICAgICAgICAgICBpZiAodGdkQ2FsY1JhbmRvbSgpIDwgMC41KSBzcHJpdGUyLnNjYWxlWCA9IC0xO1xcbiAgICAgICAgICAgICAgICBzcHJpdGUyLmluZGV4ID0gTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDcyKSk7XFxuICAgICAgICAgICAgICAgIHNwcml0ZXMucHVzaChzcHJpdGUyKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29uc3QgU1RFUFM6IG51bWJlcltdID0gW1xcbiAgICAgICAgMyxcXG4gICAgICAgIDIsXFxuICAgICAgICAxLFxcbiAgICAgICAgMCxcXG4gICAgICAgIDcsXFxuICAgICAgICA2LFxcbiAgICAgICAgNSxcXG4gICAgICAgIDQsXFxuICAgICAgICA5LFxcbiAgICAgICAgMTAsXFxuICAgICAgICAxMSxcXG4gICAgICAgIDgsXFxuICAgICAgICAxMSxcXG4gICAgICAgIDEyLFxcbiAgICAgICAgMTAsXFxuICAgICAgICAxNSxcXG4gICAgXTtcXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XFxuICAgICAgICBTVEVQUy5wdXNoKFNURVBTW2ldICsgMTYpO1xcbiAgICB9XFxuICAgIFNURVBTLnB1c2goMzIsIDM0LCAzNSwgMzYsIDMzLCAzNywgMzksIDM4KTtcXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKSB7XFxuICAgICAgICBTVEVQUy5wdXNoKFNURVBTW2ldICsgNDApO1xcbiAgICB9XFxuICAgIGNvbnN0IGludGVydmFsID0gbmV3IFRnZFRpbWVJbnRlcnZhbCh7XFxuICAgICAgICBpbnRlcnZhbEluU2Vjb25kczogMC4yLFxcbiAgICAgICAgYWN0aW9uKHRpbWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIHNwcml0ZXMpIHtcXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFN0ZXAgPSBTVEVQU1tzcHJpdGUuaW5kZXhdO1xcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5leHRTdGVwID09PSBcIm51bWJlclwiKSB7XFxuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuaW5kZXggPSBuZXh0U3RlcDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgIH0pO1xcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3Nwcml0ZXNQYWludGVyMSwgc3ByaXRlc1BhaW50ZXIyXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsYXkpID0+IHtcXG4gICAgICAgICAgICBpbnRlcnZhbC51cGRhdGUodGltZSwgZGVsYXkpO1xcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIHNwcml0ZXMpIHtcXG4gICAgICAgICAgICAgICAgc3ByaXRlLmFuZ2xlID0gdGdkQ2FsY0RlZ1RvUmFkKDMwICogTWF0aC5zaW4odGltZSkpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBjb25zdCB0ID0gdGdkQ2FsY01vZHVsbyh0aW1lICogMC4wNSwgMCwgMSk7XFxuICAgICAgICAgICAgY29uc3QgeiA9IHRnZENhbGNNaXgoMCwgLTEwMCwgdCk7XFxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAwLCB6KTtcXG4gICAgICAgIH0pLFxcbiAgICApO1xcbiAgICBjb250ZXh0LnBsYXkoKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgc3ByaXRlczogU3ByaXRlc1VSTCB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxcbiAgICAgICAgICAgICAgICBnZW86IHtcXG4gICAgICAgICAgICAgICAgICAgIG1pbkxhdDogdGdkQ2FsY0RlZ1RvUmFkKC0zMCksXFxuICAgICAgICAgICAgICAgICAgICBtaW5Mbmc6IHRnZENhbGNEZWdUb1JhZCgtMzApLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGF0OiB0Z2RDYWxjRGVnVG9SYWQoMzApLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4TG5nOiB0Z2RDYWxjRGVnVG9SYWQoMzApLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApO1xcbn1cXG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPERlbW8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCB7XG4gICAgdGdkQ2FsY0RlZ1RvUmFkLFxuICAgIHRnZENhbGNNaXgsXG4gICAgdGdkQ2FsY01vZHVsbyxcbiAgICB0Z2RDYWxjUmFuZG9tLFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyU3ByaXRlcyxcbiAgICBUZ2RQYWludGVyU3ByaXRlc0F0bGFzLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RTcHJpdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFRpbWVJbnRlcnZhbCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgU3ByaXRlc1VSTCBmcm9tIFwiLi9zcHJpdGVzLndlYnBcIlxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgICAgIHdyYXBSOiBcIkNMQU1QX1RPX0VER0VcIixcbiAgICAgICAgICAgIHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcbiAgICAgICAgICAgIHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZDogYXNzZXRzLmltYWdlLnNwcml0ZXMsXG4gICAgfSlcbiAgICBjb25zdCBjZWxsID0gKGNvbDogbnVtYmVyLCByb3c6IG51bWJlcikgPT4gKHtcbiAgICAgICAgeDogY29sIC8gOCxcbiAgICAgICAgeTogcm93IC8gMTAsXG4gICAgICAgIHdpZHRoOiAxIC8gOCxcbiAgICAgICAgaGVpZ2h0OiAxIC8gMTAsXG4gICAgfSlcbiAgICBjb25zdCBhdGxhczogVGdkUGFpbnRlclNwcml0ZXNBdGxhcyA9IFtdXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDg7IGNvbCsrKSB7XG4gICAgICAgICAgICBhdGxhcy5wdXNoKGNlbGwoY29sLCByb3cpKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNwcml0ZXNQYWludGVyMSA9IG5ldyBUZ2RQYWludGVyU3ByaXRlcyhjb250ZXh0LCB7XG4gICAgICAgIHRleHR1cmUsXG4gICAgICAgIGF0bGFzLFxuICAgICAgICBhdGxhc1VuaXQ6IDUsXG4gICAgfSlcbiAgICBjb25zdCBzcHJpdGVzUGFpbnRlcjIgPSBuZXcgVGdkUGFpbnRlclNwcml0ZXMoY29udGV4dCwge1xuICAgICAgICB0ZXh0dXJlLFxuICAgICAgICBhdGxhcyxcbiAgICAgICAgYXRsYXNVbml0OiA1LFxuICAgIH0pXG4gICAgY29uc3Qgc3ByaXRlczogVGdkU3ByaXRlW10gPSBbXVxuICAgIGZvciAobGV0IHggPSAtNzsgeCA8IDg7IHgrKykge1xuICAgICAgICBmb3IgKGxldCB5ID0gLTM7IHkgPCA0OyB5ICs9IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgMTsgeiArPSAwLjEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUxID0gc3ByaXRlc1BhaW50ZXIxLmFkZCh7fSlcbiAgICAgICAgICAgICAgICBzcHJpdGUxLnggPSB4XG4gICAgICAgICAgICAgICAgc3ByaXRlMS55ID0geVxuICAgICAgICAgICAgICAgIHNwcml0ZTEueiA9IC16ICogMTAwXG4gICAgICAgICAgICAgICAgaWYgKHRnZENhbGNSYW5kb20oKSA8IDAuNSkgc3ByaXRlMS5zY2FsZVggPSAtMVxuICAgICAgICAgICAgICAgIHNwcml0ZTEuaW5kZXggPSBNYXRoLmZsb29yKHRnZENhbGNSYW5kb20oMCwgNDApKVxuICAgICAgICAgICAgICAgIHNwcml0ZXMucHVzaChzcHJpdGUxKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZTIgPSBzcHJpdGVzUGFpbnRlcjIuYWRkKHt9KVxuICAgICAgICAgICAgICAgIHNwcml0ZTIueCA9IHhcbiAgICAgICAgICAgICAgICBzcHJpdGUyLnkgPSB5XG4gICAgICAgICAgICAgICAgc3ByaXRlMi56ID0gLXogKiAxMDAgLSAxMDBcbiAgICAgICAgICAgICAgICBpZiAodGdkQ2FsY1JhbmRvbSgpIDwgMC41KSBzcHJpdGUyLnNjYWxlWCA9IC0xXG4gICAgICAgICAgICAgICAgc3ByaXRlMi5pbmRleCA9IE1hdGguZmxvb3IodGdkQ2FsY1JhbmRvbSgwLCA3MikpXG4gICAgICAgICAgICAgICAgc3ByaXRlcy5wdXNoKHNwcml0ZTIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgU1RFUFM6IG51bWJlcltdID0gWzMsIDIsIDEsIDAsIDcsIDYsIDUsIDQsIDksIDEwLCAxMSwgOCwgMTEsIDEyLCAxMCwgMTVdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIFNURVBTLnB1c2goU1RFUFNbaV0gKyAxNilcbiAgICB9XG4gICAgU1RFUFMucHVzaCgzMiwgMzQsIDM1LCAzNiwgMzMsIDM3LCAzOSwgMzgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKSB7XG4gICAgICAgIFNURVBTLnB1c2goU1RFUFNbaV0gKyA0MClcbiAgICB9XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBuZXcgVGdkVGltZUludGVydmFsKHtcbiAgICAgICAgaW50ZXJ2YWxJblNlY29uZHM6IDAuMixcbiAgICAgICAgYWN0aW9uKHRpbWU6IG51bWJlcikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzcHJpdGUgb2Ygc3ByaXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTdGVwID0gU1RFUFNbc3ByaXRlLmluZGV4XVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV4dFN0ZXAgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLmluZGV4ID0gbmV4dFN0ZXBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbc3ByaXRlc1BhaW50ZXIxLCBzcHJpdGVzUGFpbnRlcjJdLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsYXkpID0+IHtcbiAgICAgICAgICAgIGludGVydmFsLnVwZGF0ZSh0aW1lLCBkZWxheSlcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIHNwcml0ZXMpIHtcbiAgICAgICAgICAgICAgICBzcHJpdGUuYW5nbGUgPSB0Z2RDYWxjRGVnVG9SYWQoMzAgKiBNYXRoLnNpbih0aW1lKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHQgPSB0Z2RDYWxjTW9kdWxvKHRpbWUgKiAwLjA1LCAwLCAxKVxuICAgICAgICAgICAgY29uc3QgeiA9IHRnZENhbGNNaXgoMCwgLTEwMCwgdClcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMCwgeilcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQucGxheSgpXG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBpbWFnZTogeyBzcHJpdGVzOiBTcHJpdGVzVVJMIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgICAgICBpbmVydGlhWm9vbTogMTAwMCxcbiAgICAgICAgICAgICAgICBnZW86IHtcbiAgICAgICAgICAgICAgICAgICAgbWluTGF0OiB0Z2RDYWxjRGVnVG9SYWQoLTMwKSxcbiAgICAgICAgICAgICAgICAgICAgbWluTG5nOiB0Z2RDYWxjRGVnVG9SYWQoLTMwKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGF0OiB0Z2RDYWxjRGVnVG9SYWQoMzApLFxuICAgICAgICAgICAgICAgICAgICBtYXhMbmc6IHRnZENhbGNEZWdUb1JhZCgzMCksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29kZVZpZXdlclwiXG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7Ozs7OztBQ1luSjtBQUVrQztBQUVwQjtBQUdyQyxTQUFTLElBQUksQ0FBQyxPQUFtQixFQUFFLE1BQWM7SUFDN0MsTUFB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