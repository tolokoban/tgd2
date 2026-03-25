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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                    lineNumber: 4,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Fast way to paint a lot of sprites from an Atlas."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example 1"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example 2"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Click on the screen to add/remove bricks."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_bricks_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
                lineNumber: 16,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zcHJpdGVzX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fVGdkX3RnZF9tb2R1bGVfY3NzLXNyY19jb21wb25lbi02NzEyM2YuYjUzMTU2ZDBkMGY3ODhiYi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3Nwcml0ZXMvXy9icmlja3MuZGVtby9icmlja3MuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc3ByaXRlcy9fL2JyaWNrcy5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zcHJpdGVzL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zcHJpdGVzL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zcHJpdGVzL3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsImltcG9ydCB7XG4gICAgdGdkQ2FsY1JhbmRvbSxcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyU3ByaXRlcyxcbiAgICBUZ2RQYWludGVyU3ByaXRlc0F0bGFzLFxuICAgIFRnZFBhaW50ZXJTcHJpdGVzSHVlLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RTcHJpdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIHdlYmdsUHJlc2V0QmxlbmQsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEJyaWNrc1VSTCBmcm9tIFwiLi9icmlja3Mud2VicFwiXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2Uuc3ByaXRlcyxcbiAgICB9KVxuICAgIGNvbnN0IGNlbGwgPSAoY29sOiBudW1iZXIsIHJvdzogbnVtYmVyKSA9PiAoe1xuICAgICAgICB4OiBjb2wgLyAyLFxuICAgICAgICB5OiByb3cgLyA0LFxuICAgICAgICB3aWR0aDogMSAvIDIsXG4gICAgICAgIGhlaWdodDogMSAvIDQsXG4gICAgfSlcbiAgICBjb25zdCBhdGxhczogVGdkUGFpbnRlclNwcml0ZXNBdGxhcyA9IFtdXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMjsgY29sKyspIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMzsgcm93KyspIHtcbiAgICAgICAgICAgIGF0bGFzLnB1c2goY2VsbChjb2wsIHJvdykpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3ByaXRlc1BhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclNwcml0ZXNIdWUoY29udGV4dCwge1xuICAgICAgICB0ZXh0dXJlLFxuICAgICAgICBhdGxhcyxcbiAgICAgICAgYXRsYXNVbml0OiAyLFxuICAgIH0pXG4gICAgY29uc3QgYnJpY2tzID0gbmV3IE1hcDxzdHJpbmcsIFRnZFNwcml0ZT4oKVxuICAgIGNvbnN0IGNsaWNrID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYXNwZWN0UmF0aW8gfSA9IGNvbnRleHRcbiAgICAgICAgeCAqPSBhc3BlY3RSYXRpbyA+IDEgPyBhc3BlY3RSYXRpbyA6IDFcbiAgICAgICAgaWYgKHggPCAtMSB8fCB4ID4gMSkgcmV0dXJuXG5cbiAgICAgICAgeSAqPSBhc3BlY3RSYXRpbyA+IDEgPyAxIDogYXNwZWN0UmF0aW9cbiAgICAgICAgaWYgKHkgPCAtMSB8fCB5ID4gMSkgcmV0dXJuXG5cbiAgICAgICAgeCA9IE1hdGguZmxvb3IoeCAqIDIpICogMiArIDFcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoeSAqIDQpICsgMC41XG4gICAgICAgIGNvbnN0IGtleSA9IGAke3h9LyR7eX1gXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCcmljayA9IGJyaWNrcy5nZXQoa2V5KVxuICAgICAgICBpZiAoY3VycmVudEJyaWNrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEJyaWNrLmluZGV4IDwgNCkgY3VycmVudEJyaWNrLmluZGV4KytcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlOlwiLCBjdXJyZW50QnJpY2spXG4gICAgICAgICAgICAgICAgc3ByaXRlc1BhaW50ZXIucmVtb3ZlKGN1cnJlbnRCcmljaylcbiAgICAgICAgICAgICAgICBicmlja3MuZGVsZXRlKGtleSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGJyaWNrID0gc3ByaXRlc1BhaW50ZXIuYWRkKHtcbiAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgaHVlOiBNYXRoLnJhbmRvbSgpICogMC44LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJyaWNrcy5zZXQoa2V5LCBicmljaylcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG4gICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCAxMDsgbG9vcCsrKSB7XG4gICAgICAgIGNsaWNrKHRnZENhbGNSYW5kb20oLTEsICsxKSwgdGdkQ2FsY1JhbmRvbSgtMSwgKzEpKVxuICAgIH1cbiAgICBjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IGNsaWNrKGV2dC54LCBldnQueSkpXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBibGVuZDogd2ViZ2xQcmVzZXRCbGVuZC5hbHBoYSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbc3ByaXRlc1BhaW50ZXJdLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygoKSA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDgsIDgpXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBhaW50KClcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGltYWdlOiB7IHNwcml0ZXM6IEJyaWNrc1VSTCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vYnJpY2tzLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2Uuc3ByaXRlcyxcXG4gICAgfSlcXG4gICAgY29uc3QgY2VsbCA9IChjb2w6IG51bWJlciwgcm93OiBudW1iZXIpID0+ICh7XFxuICAgICAgICB4OiBjb2wgLyAyLFxcbiAgICAgICAgeTogcm93IC8gNCxcXG4gICAgICAgIHdpZHRoOiAxIC8gMixcXG4gICAgICAgIGhlaWdodDogMSAvIDQsXFxuICAgIH0pXFxuICAgIGNvbnN0IGF0bGFzOiBUZ2RQYWludGVyU3ByaXRlc0F0bGFzID0gW11cXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMjsgY29sKyspIHtcXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDM7IHJvdysrKSB7XFxuICAgICAgICAgICAgYXRsYXMucHVzaChjZWxsKGNvbCwgcm93KSlcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBjb25zdCBzcHJpdGVzUGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3ByaXRlc0h1ZShjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICAgICAgYXRsYXMsXFxuICAgICAgICBhdGxhc1VuaXQ6IDIsXFxuICAgIH0pXFxuICAgIGNvbnN0IGJyaWNrcyA9IG5ldyBNYXA8c3RyaW5nLCBUZ2RTcHJpdGU+KClcXG4gICAgY29uc3QgY2xpY2sgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcXG4gICAgICAgIGNvbnN0IHsgYXNwZWN0UmF0aW8gfSA9IGNvbnRleHRcXG4gICAgICAgIHggKj0gYXNwZWN0UmF0aW8gPiAxID8gYXNwZWN0UmF0aW8gOiAxXFxuICAgICAgICBpZiAoeCA8IC0xIHx8IHggPiAxKSByZXR1cm5cXG5cXG4gICAgICAgIHkgKj0gYXNwZWN0UmF0aW8gPiAxID8gMSA6IGFzcGVjdFJhdGlvXFxuICAgICAgICBpZiAoeSA8IC0xIHx8IHkgPiAxKSByZXR1cm5cXG5cXG4gICAgICAgIHggPSBNYXRoLmZsb29yKHggKiAyKSAqIDIgKyAxXFxuICAgICAgICB5ID0gTWF0aC5mbG9vcih5ICogNCkgKyAwLjVcXG4gICAgICAgIGNvbnN0IGtleSA9IGAke3h9LyR7eX1gXFxuICAgICAgICBjb25zdCBjdXJyZW50QnJpY2sgPSBicmlja3MuZ2V0KGtleSlcXG4gICAgICAgIGlmIChjdXJyZW50QnJpY2spIHtcXG4gICAgICAgICAgICBpZiAoY3VycmVudEJyaWNrLmluZGV4IDwgNCkgY3VycmVudEJyaWNrLmluZGV4KytcXG4gICAgICAgICAgICBlbHNlIHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcIkRlbGV0ZTpcXFwiLCBjdXJyZW50QnJpY2spXFxuICAgICAgICAgICAgICAgIHNwcml0ZXNQYWludGVyLnJlbW92ZShjdXJyZW50QnJpY2spXFxuICAgICAgICAgICAgICAgIGJyaWNrcy5kZWxldGUoa2V5KVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgY29uc3QgYnJpY2sgPSBzcHJpdGVzUGFpbnRlci5hZGQoe1xcbiAgICAgICAgICAgICAgICB4LFxcbiAgICAgICAgICAgICAgICB5LFxcbiAgICAgICAgICAgICAgICBodWU6IE1hdGgucmFuZG9tKCkgKiAwLjgsXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICBicmlja3Muc2V0KGtleSwgYnJpY2spXFxuICAgICAgICB9XFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICBmb3IgKGxldCBsb29wID0gMDsgbG9vcCA8IDEwOyBsb29wKyspIHtcXG4gICAgICAgIGNsaWNrKHRnZENhbGNSYW5kb20oLTEsICsxKSwgdGdkQ2FsY1JhbmRvbSgtMSwgKzEpKVxcbiAgICB9XFxuICAgIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT4gY2xpY2soZXZ0LngsIGV2dC55KSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgYmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQuYWxwaGEsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzcHJpdGVzUGFpbnRlcl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKCkgPT4ge1xcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoOCwgOClcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHRnZENhbGNSYW5kb20sXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJTcHJpdGVzLFxcbiAgICBUZ2RQYWludGVyU3ByaXRlc0F0bGFzLFxcbiAgICBUZ2RQYWludGVyU3ByaXRlc0h1ZSxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RTcHJpdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgd2ViZ2xQcmVzZXRCbGVuZCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBCcmlja3NVUkwgZnJvbSBcXFwiLi9icmlja3Mud2VicFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIGxvYWQ6IGFzc2V0cy5pbWFnZS5zcHJpdGVzLFxcbiAgICB9KVxcbiAgICBjb25zdCBjZWxsID0gKGNvbDogbnVtYmVyLCByb3c6IG51bWJlcikgPT4gKHtcXG4gICAgICAgIHg6IGNvbCAvIDIsXFxuICAgICAgICB5OiByb3cgLyA0LFxcbiAgICAgICAgd2lkdGg6IDEgLyAyLFxcbiAgICAgICAgaGVpZ2h0OiAxIC8gNCxcXG4gICAgfSlcXG4gICAgY29uc3QgYXRsYXM6IFRnZFBhaW50ZXJTcHJpdGVzQXRsYXMgPSBbXVxcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAyOyBjb2wrKykge1xcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMzsgcm93KyspIHtcXG4gICAgICAgICAgICBhdGxhcy5wdXNoKGNlbGwoY29sLCByb3cpKVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IHNwcml0ZXNQYWludGVyID0gbmV3IFRnZFBhaW50ZXJTcHJpdGVzSHVlKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmUsXFxuICAgICAgICBhdGxhcyxcXG4gICAgICAgIGF0bGFzVW5pdDogMixcXG4gICAgfSlcXG4gICAgY29uc3QgYnJpY2tzID0gbmV3IE1hcDxzdHJpbmcsIFRnZFNwcml0ZT4oKVxcbiAgICBjb25zdCBjbGljayA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xcbiAgICAgICAgY29uc3QgeyBhc3BlY3RSYXRpbyB9ID0gY29udGV4dFxcbiAgICAgICAgeCAqPSBhc3BlY3RSYXRpbyA+IDEgPyBhc3BlY3RSYXRpbyA6IDFcXG4gICAgICAgIGlmICh4IDwgLTEgfHwgeCA+IDEpIHJldHVyblxcblxcbiAgICAgICAgeSAqPSBhc3BlY3RSYXRpbyA+IDEgPyAxIDogYXNwZWN0UmF0aW9cXG4gICAgICAgIGlmICh5IDwgLTEgfHwgeSA+IDEpIHJldHVyblxcblxcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoeCAqIDIpICogMiArIDFcXG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHkgKiA0KSArIDAuNVxcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7eH0vJHt5fWBcXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCcmljayA9IGJyaWNrcy5nZXQoa2V5KVxcbiAgICAgICAgaWYgKGN1cnJlbnRCcmljaykge1xcbiAgICAgICAgICAgIGlmIChjdXJyZW50QnJpY2suaW5kZXggPCA0KSBjdXJyZW50QnJpY2suaW5kZXgrK1xcbiAgICAgICAgICAgIGVsc2Uge1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiRGVsZXRlOlxcXCIsIGN1cnJlbnRCcmljaylcXG4gICAgICAgICAgICAgICAgc3ByaXRlc1BhaW50ZXIucmVtb3ZlKGN1cnJlbnRCcmljaylcXG4gICAgICAgICAgICAgICAgYnJpY2tzLmRlbGV0ZShrZXkpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBjb25zdCBicmljayA9IHNwcml0ZXNQYWludGVyLmFkZCh7XFxuICAgICAgICAgICAgICAgIHgsXFxuICAgICAgICAgICAgICAgIHksXFxuICAgICAgICAgICAgICAgIGh1ZTogTWF0aC5yYW5kb20oKSAqIDAuOCxcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIGJyaWNrcy5zZXQoa2V5LCBicmljaylcXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxuICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgMTA7IGxvb3ArKykge1xcbiAgICAgICAgY2xpY2sodGdkQ2FsY1JhbmRvbSgtMSwgKzEpLCB0Z2RDYWxjUmFuZG9tKC0xLCArMSkpXFxuICAgIH1cXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiBjbGljayhldnQueCwgZXZ0LnkpKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBibGVuZDogd2ViZ2xQcmVzZXRCbGVuZC5hbHBoYSxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3Nwcml0ZXNQYWludGVyXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygoKSA9PiB7XFxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg4LCA4KVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGltYWdlOiB7IHNwcml0ZXM6IEJyaWNrc1VSTCB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJEZXRhaWwgIzFcIjpcbiAgICAgICAgJ2Z1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcIk5FQVJFU1RcIixcXG4gICAgICAgICAgICB3cmFwUjogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgd3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgICAgIHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2Uuc3ByaXRlcyxcXG4gICAgfSk7XFxuICAgIGNvbnN0IGNlbGwgPSAoY29sOiBudW1iZXIsIHJvdzogbnVtYmVyKSA9PiAoe1xcbiAgICAgICAgeDogY29sIC8gOCxcXG4gICAgICAgIHk6IHJvdyAvIDEwLFxcbiAgICAgICAgd2lkdGg6IDEgLyA4LFxcbiAgICAgICAgaGVpZ2h0OiAxIC8gMTAsXFxuICAgIH0pO1xcbiAgICBjb25zdCBhdGxhczogVGdkUGFpbnRlclNwcml0ZXNBdGxhcyA9IFtdO1xcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDg7IGNvbCsrKSB7XFxuICAgICAgICAgICAgYXRsYXMucHVzaChjZWxsKGNvbCwgcm93KSk7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29uc3Qgc3ByaXRlc1BhaW50ZXIxID0gbmV3IFRnZFBhaW50ZXJTcHJpdGVzKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmUsXFxuICAgICAgICBhdGxhcyxcXG4gICAgICAgIGF0bGFzVW5pdDogNSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHNwcml0ZXNQYWludGVyMiA9IG5ldyBUZ2RQYWludGVyU3ByaXRlcyhjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICAgICAgYXRsYXMsXFxuICAgICAgICBhdGxhc1VuaXQ6IDUsXFxuICAgIH0pO1xcbiAgICBjb25zdCBzcHJpdGVzOiBUZ2RTcHJpdGVbXSA9IFtdO1xcbiAgICBmb3IgKGxldCB4ID0gLTc7IHggPCA4OyB4KyspIHtcXG4gICAgICAgIGZvciAobGV0IHkgPSAtMzsgeSA8IDQ7IHkgKz0gMikge1xcbiAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgMTsgeiArPSAwLjEpIHtcXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlMSA9IHNwcml0ZXNQYWludGVyMS5hZGQoe30pO1xcbiAgICAgICAgICAgICAgICBzcHJpdGUxLnggPSB4O1xcbiAgICAgICAgICAgICAgICBzcHJpdGUxLnkgPSB5O1xcbiAgICAgICAgICAgICAgICBzcHJpdGUxLnogPSAteiAqIDEwMDtcXG4gICAgICAgICAgICAgICAgaWYgKHRnZENhbGNSYW5kb20oKSA8IDAuNSkgc3ByaXRlMS5zY2FsZVggPSAtMTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMS5pbmRleCA9IE1hdGguZmxvb3IodGdkQ2FsY1JhbmRvbSgwLCA0MCkpO1xcbiAgICAgICAgICAgICAgICBzcHJpdGVzLnB1c2goc3ByaXRlMSk7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZTIgPSBzcHJpdGVzUGFpbnRlcjIuYWRkKHt9KTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMi54ID0geDtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMi55ID0geTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMi56ID0gLXogKiAxMDAgLSAxMDA7XFxuICAgICAgICAgICAgICAgIGlmICh0Z2RDYWxjUmFuZG9tKCkgPCAwLjUpIHNwcml0ZTIuc2NhbGVYID0gLTE7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTIuaW5kZXggPSBNYXRoLmZsb29yKHRnZENhbGNSYW5kb20oMCwgNzIpKTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlcy5wdXNoKHNwcml0ZTIpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBjb25zdCBTVEVQUzogbnVtYmVyW10gPSBbXFxuICAgICAgICAzLFxcbiAgICAgICAgMixcXG4gICAgICAgIDEsXFxuICAgICAgICAwLFxcbiAgICAgICAgNyxcXG4gICAgICAgIDYsXFxuICAgICAgICA1LFxcbiAgICAgICAgNCxcXG4gICAgICAgIDksXFxuICAgICAgICAxMCxcXG4gICAgICAgIDExLFxcbiAgICAgICAgOCxcXG4gICAgICAgIDExLFxcbiAgICAgICAgMTIsXFxuICAgICAgICAxMCxcXG4gICAgICAgIDE1LFxcbiAgICBdO1xcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcXG4gICAgICAgIFNURVBTLnB1c2goU1RFUFNbaV0gKyAxNik7XFxuICAgIH1cXG4gICAgU1RFUFMucHVzaCgzMiwgMzQsIDM1LCAzNiwgMzMsIDM3LCAzOSwgMzgpO1xcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcXG4gICAgICAgIFNURVBTLnB1c2goU1RFUFNbaV0gKyA0MCk7XFxuICAgIH1cXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBuZXcgVGdkVGltZUludGVydmFsKHtcXG4gICAgICAgIGludGVydmFsSW5TZWNvbmRzOiAwLjIsXFxuICAgICAgICBhY3Rpb24odGltZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgZm9yIChjb25zdCBzcHJpdGUgb2Ygc3ByaXRlcykge1xcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0U3RlcCA9IFNURVBTW3Nwcml0ZS5pbmRleF07XFxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV4dFN0ZXAgPT09IFwibnVtYmVyXCIpIHtcXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5pbmRleCA9IG5leHRTdGVwO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgfSk7XFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbc3ByaXRlc1BhaW50ZXIxLCBzcHJpdGVzUGFpbnRlcjJdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWxheSkgPT4ge1xcbiAgICAgICAgICAgIGludGVydmFsLnVwZGF0ZSh0aW1lLCBkZWxheSk7XFxuICAgICAgICAgICAgZm9yIChjb25zdCBzcHJpdGUgb2Ygc3ByaXRlcykge1xcbiAgICAgICAgICAgICAgICBzcHJpdGUuYW5nbGUgPSB0Z2RDYWxjRGVnVG9SYWQoMzAgKiBNYXRoLnNpbih0aW1lKSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0Z2RDYWxjTW9kdWxvKHRpbWUgKiAwLjA1LCAwLCAxKTtcXG4gICAgICAgICAgICBjb25zdCB6ID0gdGdkQ2FsY01peCgwLCAtMTAwLCB0KTtcXG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDAsIHopO1xcbiAgICAgICAgfSksXFxuICAgICk7XFxuICAgIGNvbnRleHQucGxheSgpO1xcbn0nLFxufVxuY29uc3QgRlVMTCA9XG4gICAgJ2ltcG9ydCB7XFxuICAgIHRnZENhbGNEZWdUb1JhZCxcXG4gICAgdGdkQ2FsY01peCxcXG4gICAgdGdkQ2FsY01vZHVsbyxcXG4gICAgdGdkQ2FsY1JhbmRvbSxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyU3ByaXRlcyxcXG4gICAgVGdkUGFpbnRlclNwcml0ZXNBdGxhcyxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RTcHJpdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgVGdkVGltZUludGVydmFsLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XFxuXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XFxuXFxuaW1wb3J0IFNwcml0ZXNVUkwgZnJvbSBcIi4vc3ByaXRlcy53ZWJwXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KTtcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxcbiAgICAgICAgICAgIHdyYXBSOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgICAgICB3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgd3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGxvYWQ6IGFzc2V0cy5pbWFnZS5zcHJpdGVzLFxcbiAgICB9KTtcXG4gICAgY29uc3QgY2VsbCA9IChjb2w6IG51bWJlciwgcm93OiBudW1iZXIpID0+ICh7XFxuICAgICAgICB4OiBjb2wgLyA4LFxcbiAgICAgICAgeTogcm93IC8gMTAsXFxuICAgICAgICB3aWR0aDogMSAvIDgsXFxuICAgICAgICBoZWlnaHQ6IDEgLyAxMCxcXG4gICAgfSk7XFxuICAgIGNvbnN0IGF0bGFzOiBUZ2RQYWludGVyU3ByaXRlc0F0bGFzID0gW107XFxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcXG4gICAgICAgICAgICBhdGxhcy5wdXNoKGNlbGwoY29sLCByb3cpKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBjb25zdCBzcHJpdGVzUGFpbnRlcjEgPSBuZXcgVGdkUGFpbnRlclNwcml0ZXMoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgICAgIGF0bGFzLFxcbiAgICAgICAgYXRsYXNVbml0OiA1LFxcbiAgICB9KTtcXG4gICAgY29uc3Qgc3ByaXRlc1BhaW50ZXIyID0gbmV3IFRnZFBhaW50ZXJTcHJpdGVzKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmUsXFxuICAgICAgICBhdGxhcyxcXG4gICAgICAgIGF0bGFzVW5pdDogNSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHNwcml0ZXM6IFRnZFNwcml0ZVtdID0gW107XFxuICAgIGZvciAobGV0IHggPSAtNzsgeCA8IDg7IHgrKykge1xcbiAgICAgICAgZm9yIChsZXQgeSA9IC0zOyB5IDwgNDsgeSArPSAyKSB7XFxuICAgICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCAxOyB6ICs9IDAuMSkge1xcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUxID0gc3ByaXRlc1BhaW50ZXIxLmFkZCh7fSk7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTEueCA9IHg7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTEueSA9IHk7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTEueiA9IC16ICogMTAwO1xcbiAgICAgICAgICAgICAgICBpZiAodGdkQ2FsY1JhbmRvbSgpIDwgMC41KSBzcHJpdGUxLnNjYWxlWCA9IC0xO1xcbiAgICAgICAgICAgICAgICBzcHJpdGUxLmluZGV4ID0gTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDQwKSk7XFxuICAgICAgICAgICAgICAgIHNwcml0ZXMucHVzaChzcHJpdGUxKTtcXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlMiA9IHNwcml0ZXNQYWludGVyMi5hZGQoe30pO1xcbiAgICAgICAgICAgICAgICBzcHJpdGUyLnggPSB4O1xcbiAgICAgICAgICAgICAgICBzcHJpdGUyLnkgPSB5O1xcbiAgICAgICAgICAgICAgICBzcHJpdGUyLnogPSAteiAqIDEwMCAtIDEwMDtcXG4gICAgICAgICAgICAgICAgaWYgKHRnZENhbGNSYW5kb20oKSA8IDAuNSkgc3ByaXRlMi5zY2FsZVggPSAtMTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMi5pbmRleCA9IE1hdGguZmxvb3IodGdkQ2FsY1JhbmRvbSgwLCA3MikpO1xcbiAgICAgICAgICAgICAgICBzcHJpdGVzLnB1c2goc3ByaXRlMik7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IFNURVBTOiBudW1iZXJbXSA9IFtcXG4gICAgICAgIDMsXFxuICAgICAgICAyLFxcbiAgICAgICAgMSxcXG4gICAgICAgIDAsXFxuICAgICAgICA3LFxcbiAgICAgICAgNixcXG4gICAgICAgIDUsXFxuICAgICAgICA0LFxcbiAgICAgICAgOSxcXG4gICAgICAgIDEwLFxcbiAgICAgICAgMTEsXFxuICAgICAgICA4LFxcbiAgICAgICAgMTEsXFxuICAgICAgICAxMixcXG4gICAgICAgIDEwLFxcbiAgICAgICAgMTUsXFxuICAgIF07XFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xcbiAgICAgICAgU1RFUFMucHVzaChTVEVQU1tpXSArIDE2KTtcXG4gICAgfVxcbiAgICBTVEVQUy5wdXNoKDMyLCAzNCwgMzUsIDM2LCAzMywgMzcsIDM5LCAzOCk7XFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzI7IGkrKykge1xcbiAgICAgICAgU1RFUFMucHVzaChTVEVQU1tpXSArIDQwKTtcXG4gICAgfVxcbiAgICBjb25zdCBpbnRlcnZhbCA9IG5ldyBUZ2RUaW1lSW50ZXJ2YWwoe1xcbiAgICAgICAgaW50ZXJ2YWxJblNlY29uZHM6IDAuMixcXG4gICAgICAgIGFjdGlvbih0aW1lOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiBzcHJpdGVzKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTdGVwID0gU1RFUFNbc3ByaXRlLmluZGV4XTtcXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXh0U3RlcCA9PT0gXCJudW1iZXJcIikge1xcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLmluZGV4ID0gbmV4dFN0ZXA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICB9KTtcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzcHJpdGVzUGFpbnRlcjEsIHNwcml0ZXNQYWludGVyMl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbGF5KSA9PiB7XFxuICAgICAgICAgICAgaW50ZXJ2YWwudXBkYXRlKHRpbWUsIGRlbGF5KTtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiBzcHJpdGVzKSB7XFxuICAgICAgICAgICAgICAgIHNwcml0ZS5hbmdsZSA9IHRnZENhbGNEZWdUb1JhZCgzMCAqIE1hdGguc2luKHRpbWUpKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgY29uc3QgdCA9IHRnZENhbGNNb2R1bG8odGltZSAqIDAuMDUsIDAsIDEpO1xcbiAgICAgICAgICAgIGNvbnN0IHogPSB0Z2RDYWxjTWl4KDAsIC0xMDAsIHQpO1xcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMCwgeik7XFxuICAgICAgICB9KSxcXG4gICAgKTtcXG4gICAgY29udGV4dC5wbGF5KCk7XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGltYWdlOiB7IHNwcml0ZXM6IFNwcml0ZXNVUkwgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgICAgICBpbmVydGlhWm9vbTogMTAwMCxcXG4gICAgICAgICAgICAgICAgZ2VvOiB7XFxuICAgICAgICAgICAgICAgICAgICBtaW5MYXQ6IHRnZENhbGNEZWdUb1JhZCgtMzApLFxcbiAgICAgICAgICAgICAgICAgICAgbWluTG5nOiB0Z2RDYWxjRGVnVG9SYWQoLTMwKSxcXG4gICAgICAgICAgICAgICAgICAgIG1heExhdDogdGdkQ2FsY0RlZ1RvUmFkKDMwKSxcXG4gICAgICAgICAgICAgICAgICAgIG1heExuZzogdGdkQ2FsY0RlZ1RvUmFkKDMwKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKTtcXG59XFxuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxEZW1vIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQge1xuICAgIHRnZENhbGNEZWdUb1JhZCxcbiAgICB0Z2RDYWxjTWl4LFxuICAgIHRnZENhbGNNb2R1bG8sXG4gICAgdGdkQ2FsY1JhbmRvbSxcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTG9naWMsXG4gICAgVGdkUGFpbnRlclNwcml0ZXMsXG4gICAgVGdkUGFpbnRlclNwcml0ZXNBdGxhcyxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkU3ByaXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICBUZ2RUaW1lSW50ZXJ2YWwsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IFNwcml0ZXNVUkwgZnJvbSBcIi4vc3ByaXRlcy53ZWJwXCJcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgICAgICB3cmFwUjogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgICAgICB3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgICAgICB3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWQ6IGFzc2V0cy5pbWFnZS5zcHJpdGVzLFxuICAgIH0pXG4gICAgY29uc3QgY2VsbCA9IChjb2w6IG51bWJlciwgcm93OiBudW1iZXIpID0+ICh7XG4gICAgICAgIHg6IGNvbCAvIDgsXG4gICAgICAgIHk6IHJvdyAvIDEwLFxuICAgICAgICB3aWR0aDogMSAvIDgsXG4gICAgICAgIGhlaWdodDogMSAvIDEwLFxuICAgIH0pXG4gICAgY29uc3QgYXRsYXM6IFRnZFBhaW50ZXJTcHJpdGVzQXRsYXMgPSBbXVxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA4OyBjb2wrKykge1xuICAgICAgICAgICAgYXRsYXMucHVzaChjZWxsKGNvbCwgcm93KSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzcHJpdGVzUGFpbnRlcjEgPSBuZXcgVGdkUGFpbnRlclNwcml0ZXMoY29udGV4dCwge1xuICAgICAgICB0ZXh0dXJlLFxuICAgICAgICBhdGxhcyxcbiAgICAgICAgYXRsYXNVbml0OiA1LFxuICAgIH0pXG4gICAgY29uc3Qgc3ByaXRlc1BhaW50ZXIyID0gbmV3IFRnZFBhaW50ZXJTcHJpdGVzKGNvbnRleHQsIHtcbiAgICAgICAgdGV4dHVyZSxcbiAgICAgICAgYXRsYXMsXG4gICAgICAgIGF0bGFzVW5pdDogNSxcbiAgICB9KVxuICAgIGNvbnN0IHNwcml0ZXM6IFRnZFNwcml0ZVtdID0gW11cbiAgICBmb3IgKGxldCB4ID0gLTc7IHggPCA4OyB4KyspIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IC0zOyB5IDwgNDsgeSArPSAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IDE7IHogKz0gMC4xKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlMSA9IHNwcml0ZXNQYWludGVyMS5hZGQoe30pXG4gICAgICAgICAgICAgICAgc3ByaXRlMS54ID0geFxuICAgICAgICAgICAgICAgIHNwcml0ZTEueSA9IHlcbiAgICAgICAgICAgICAgICBzcHJpdGUxLnogPSAteiAqIDEwMFxuICAgICAgICAgICAgICAgIGlmICh0Z2RDYWxjUmFuZG9tKCkgPCAwLjUpIHNwcml0ZTEuc2NhbGVYID0gLTFcbiAgICAgICAgICAgICAgICBzcHJpdGUxLmluZGV4ID0gTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDQwKSlcbiAgICAgICAgICAgICAgICBzcHJpdGVzLnB1c2goc3ByaXRlMSlcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUyID0gc3ByaXRlc1BhaW50ZXIyLmFkZCh7fSlcbiAgICAgICAgICAgICAgICBzcHJpdGUyLnggPSB4XG4gICAgICAgICAgICAgICAgc3ByaXRlMi55ID0geVxuICAgICAgICAgICAgICAgIHNwcml0ZTIueiA9IC16ICogMTAwIC0gMTAwXG4gICAgICAgICAgICAgICAgaWYgKHRnZENhbGNSYW5kb20oKSA8IDAuNSkgc3ByaXRlMi5zY2FsZVggPSAtMVxuICAgICAgICAgICAgICAgIHNwcml0ZTIuaW5kZXggPSBNYXRoLmZsb29yKHRnZENhbGNSYW5kb20oMCwgNzIpKVxuICAgICAgICAgICAgICAgIHNwcml0ZXMucHVzaChzcHJpdGUyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFNURVBTOiBudW1iZXJbXSA9IFszLCAyLCAxLCAwLCA3LCA2LCA1LCA0LCA5LCAxMCwgMTEsIDgsIDExLCAxMiwgMTAsIDE1XVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICBTVEVQUy5wdXNoKFNURVBTW2ldICsgMTYpXG4gICAgfVxuICAgIFNURVBTLnB1c2goMzIsIDM0LCAzNSwgMzYsIDMzLCAzNywgMzksIDM4KVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzI7IGkrKykge1xuICAgICAgICBTVEVQUy5wdXNoKFNURVBTW2ldICsgNDApXG4gICAgfVxuICAgIGNvbnN0IGludGVydmFsID0gbmV3IFRnZFRpbWVJbnRlcnZhbCh7XG4gICAgICAgIGludGVydmFsSW5TZWNvbmRzOiAwLjIsXG4gICAgICAgIGFjdGlvbih0aW1lOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIHNwcml0ZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0U3RlcCA9IFNURVBTW3Nwcml0ZS5pbmRleF1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5leHRTdGVwID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5pbmRleCA9IG5leHRTdGVwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3Nwcml0ZXNQYWludGVyMSwgc3ByaXRlc1BhaW50ZXIyXSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbGF5KSA9PiB7XG4gICAgICAgICAgICBpbnRlcnZhbC51cGRhdGUodGltZSwgZGVsYXkpXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiBzcHJpdGVzKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLmFuZ2xlID0gdGdkQ2FsY0RlZ1RvUmFkKDMwICogTWF0aC5zaW4odGltZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0ID0gdGdkQ2FsY01vZHVsbyh0aW1lICogMC4wNSwgMCwgMSlcbiAgICAgICAgICAgIGNvbnN0IHogPSB0Z2RDYWxjTWl4KDAsIC0xMDAsIHQpXG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDAsIHopXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgc3ByaXRlczogU3ByaXRlc1VSTCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgaW5lcnRpYVpvb206IDEwMDAsXG4gICAgICAgICAgICAgICAgZ2VvOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkxhdDogdGdkQ2FsY0RlZ1RvUmFkKC0zMCksXG4gICAgICAgICAgICAgICAgICAgIG1pbkxuZzogdGdkQ2FsY0RlZ1RvUmFkKC0zMCksXG4gICAgICAgICAgICAgICAgICAgIG1heExhdDogdGdkQ2FsY0RlZ1RvUmFkKDMwKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4TG5nOiB0Z2RDYWxjRGVnVG9SYWQoMzApLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuLy8gaW1wb3J0IFwicHJpc21qcy90aGVtZXMvcHJpc20tY295LmNzc1wiXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vQ29kZVZpZXdlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIGlkPzogc3RyaW5nXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVWaWV3ZXJWaWV3KHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHNpbmdsZVByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHsuLi5zaW5nbGVQcm9wc30gLz5cbiAgICB9XG4gICAgY29uc3QgbXVsdGlQcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdmFsdWUsXG4gICAgfVxuICAgIHJldHVybiA8TXVsdGlDb2RlVmlld2VyVmlldyB7Li4ubXVsdGlQcm9wc30gLz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBTaW5nbGVDb2RlVmlld2VyVmlldyhwcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHJlZlRpbWVvdXQgPSBSZWFjdC51c2VSZWYoMClcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHJlZkNvZGUgPSBSZWFjdC51c2VSZWY8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZWZDb2RlLmN1cnJlbnRcbiAgICAgICAgICAgIGlmICghY29kZSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBQcmlzbS5oaWdobGlnaHQocHJvcHMudmFsdWUsIGdldEdyYW1tYXJGb3JMYW5ndWFnZShwcm9wcy5sYW5ndWFnZSksIHByb3BzLmxhbmd1YWdlKVxuICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBodG1sXG4gICAgICAgIH0sIDEwMClcbiAgICB9LCBbcHJvcHMudmFsdWUsIHByb3BzLmxhbmd1YWdlLCByZWZDb2RlLmN1cnJlbnRdKVxuICAgIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcm9wcy52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3B1cCh0cnVlKVxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRQb3B1cChmYWxzZSksIDcwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvcHVwKGZhbHNlKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gMFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9IG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSByZWY9e3JlZkNvZGV9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0gLz5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAge3BvcHVwICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUucG9wdXB9IG9uQ2xpY2s9e2hhbmRsZVBvcHVwQ2xpY2t9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGNvZGUgaGFzIGJlZW4gY29waWVkIHRvIHRoZSBjbGlwYm9hcmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbU3R5bGUuQ29kZVZpZXdlcl1cbiAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjbGFzc05hbWVzLnB1c2gocHJvcHMuY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuZnVuY3Rpb24gTXVsdGlDb2RlVmlld2VyVmlldyhwcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgY2FwdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy52YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhcHRpb25zLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGV0YWlscyBrZXk9e2NhcHRpb259IG9wZW49e2ZhbHNlfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57Y2FwdGlvbn08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDb2RlVmlld2VyVmlldyB2YWx1ZT17cHJvcHMudmFsdWVbY2FwdGlvbl19IGxhbmd1YWdlPXtwcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSBcInRzXCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbiAgICAgICAgY2FzZSBcInRzeFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50c3hcbiAgICAgICAgY2FzZSBcImZyYWdcIjpcbiAgICAgICAgY2FzZSBcInZlcnRcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMuZ2xzbFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIEdMU0xcbiAgICB9XG59XG5cbmNvbnN0IFRZUEVTID0gW1xuICAgIFwiYnZlYzJcIixcbiAgICBcImJ2ZWMzXCIsXG4gICAgXCJidmVjNFwiLFxuICAgIFwiZG1hdDJcIixcbiAgICBcImRtYXQyeDJcIixcbiAgICBcImRtYXQyeDNcIixcbiAgICBcImRtYXQyeDRcIixcbiAgICBcImRtYXQzXCIsXG4gICAgXCJkbWF0M3gyXCIsXG4gICAgXCJkbWF0M3gzXCIsXG4gICAgXCJkbWF0M3g0XCIsXG4gICAgXCJkbWF0NFwiLFxuICAgIFwiZG1hdDR4MlwiLFxuICAgIFwiZG1hdDR4M1wiLFxuICAgIFwiZG1hdDR4NFwiLFxuICAgIFwiZHZlYzJcIixcbiAgICBcImR2ZWMzXCIsXG4gICAgXCJkdmVjNFwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZ2ZWMyXCIsXG4gICAgXCJmdmVjM1wiLFxuICAgIFwiZnZlYzRcIixcbiAgICBcImlzYW1wbGVyMURcIixcbiAgICBcImlzYW1wbGVyMURBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFwiLFxuICAgIFwiaXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJETVNcIixcbiAgICBcImlzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEUmVjdFwiLFxuICAgIFwiaXNhbXBsZXIzRFwiLFxuICAgIFwiaXNhbXBsZXJCdWZmZXJcIixcbiAgICBcImlzYW1wbGVyQ3ViZVwiLFxuICAgIFwiaXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcIml2ZWMyXCIsXG4gICAgXCJpdmVjM1wiLFxuICAgIFwiaXZlYzRcIixcbiAgICBcIm1hdDJcIixcbiAgICBcIm1hdDJ4MlwiLFxuICAgIFwibWF0MngzXCIsXG4gICAgXCJtYXQyeDRcIixcbiAgICBcIm1hdDNcIixcbiAgICBcIm1hdDN4MlwiLFxuICAgIFwibWF0M3gzXCIsXG4gICAgXCJtYXQzeDRcIixcbiAgICBcIm1hdDRcIixcbiAgICBcIm1hdDR4MlwiLFxuICAgIFwibWF0NHgzXCIsXG4gICAgXCJtYXQ0eDRcIixcbiAgICBcInNhbXBsZVwiLFxuICAgIFwic2FtcGxlcjFEXCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIxRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEXCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRE1TXCIsXG4gICAgXCJzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRTaGFkb3dcIixcbiAgICBcInNhbXBsZXIzRFwiLFxuICAgIFwic2FtcGxlckJ1ZmZlclwiLFxuICAgIFwic2FtcGxlckN1YmVcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXJDdWJlU2hhZG93XCIsXG4gICAgXCJ1c2FtcGxlcjFEXCIsXG4gICAgXCJ1c2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRcIixcbiAgICBcInVzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRE1TXCIsXG4gICAgXCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFJlY3RcIixcbiAgICBcInVzYW1wbGVyM0RcIixcbiAgICBcInVzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVcIixcbiAgICBcInVzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJ1dmVjMlwiLFxuICAgIFwidXZlYzNcIixcbiAgICBcInV2ZWM0XCIsXG4gICAgXCJ2ZWMyXCIsXG4gICAgXCJ2ZWMzXCIsXG4gICAgXCJ2ZWM0XCIsXG4gICAgXCJ2b2lkXCIsXG5dXG5cbmNvbnN0IEtFWVdPUkRTID0gW1xuICAgIFwiY2VudHJvaWRcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJkaXNjYXJkXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJoaWdocFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW52YXJpYW50XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxvd3BcIixcbiAgICBcIm1lZGl1bXBcIixcbiAgICBcIm5vcGVyc3BlY3RpdmVcIixcbiAgICBcIm91dFwiLFxuICAgIFwicGF0Y2hcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwic21vb3RoXCIsXG4gICAgXCJzdWJyb3V0aW5lXCIsXG4gICAgXCJ1bmlmb3JtXCIsXG4gICAgLy8gUmVzZXJ2ZWQgZm9yIGZ1dHVyZS5cbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiYXNtXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY29tbW9uXCIsXG4gICAgXCJlbnVtXCIsXG4gICAgXCJleHRlcm5cIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZpeGVkXCIsXG4gICAgXCJnb3RvXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJodmVjMlwiLFxuICAgIFwiaHZlYzNcIixcbiAgICBcImh2ZWM0XCIsXG4gICAgXCJpaW1hZ2UxRFwiLFxuICAgIFwiaWltYWdlMURBcnJheVwiLFxuICAgIFwiaWltYWdlMkRcIixcbiAgICBcImlpbWFnZTJEQXJyYXlcIixcbiAgICBcImlpbWFnZTNEXCIsXG4gICAgXCJpaW1hZ2VCdWZmZXJcIixcbiAgICBcImlpbWFnZUN1YmVcIixcbiAgICBcImltYWdlMURcIixcbiAgICBcImltYWdlMURBcnJheVwiLFxuICAgIFwiaW1hZ2UxREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTFEU2hhZG93XCIsXG4gICAgXCJpbWFnZTJEXCIsXG4gICAgXCJpbWFnZTJEQXJyYXlcIixcbiAgICBcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UzRFwiLFxuICAgIFwiaW1hZ2VCdWZmZXJcIixcbiAgICBcImltYWdlQ3ViZVwiLFxuICAgIFwiaW5saW5lXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW50ZXJmYWNlXCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcIm5vaW5saW5lXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBhY2tlZFwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInJvd19tYWpvclwiLFxuICAgIFwic2FtcGxlcjNEUmVjdFwiLFxuICAgIFwic2hvcnRcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdXBlcnBcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0aGlzXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJ1aW1hZ2UxRFwiLFxuICAgIFwidWltYWdlMURBcnJheVwiLFxuICAgIFwidWltYWdlMkRcIixcbiAgICBcInVpbWFnZTJEQXJyYXlcIixcbiAgICBcInVpbWFnZTNEXCIsXG4gICAgXCJ1aW1hZ2VCdWZmZXJcIixcbiAgICBcInVpbWFnZUN1YmVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bnNpZ25lZFwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZvbGF0aWxlXCIsXG5dXG5cbmNvbnN0IEdMT0JBTFMgPSBbXG4gICAgXCJnbF9EZXB0aFJhbmdlXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmRpZmZcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZmFyXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcbiAgICBcImdsX0ZyYWdDb29yZFwiLFxuICAgIFwiZ2xfRnJhZ0RlcHRoXCIsXG4gICAgXCJnbF9Gcm9udEZhY2luZ1wiLFxuICAgIFwiZ2xfSW5zdGFuY2VJRFwiLFxuICAgIFwiZ2xfUG9pbnRDb29yZFwiLFxuICAgIFwiZ2xfUG9pbnRTaXplXCIsXG4gICAgXCJnbF9Qb3NpdGlvblwiLFxuICAgIFwiZ2xfVmVydGV4SURcIixcbl1cblxuY29uc3QgRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhY29zaFwiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbnlcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzaW5oXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdGFuaFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2xhbXBcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImRlZ3JlZXNcIixcbiAgICBcImRldGVybWluYW50XCIsXG4gICAgXCJkRmR4XCIsXG4gICAgXCJkRmR5XCIsXG4gICAgXCJkaXN0YW5jZVwiLFxuICAgIFwiZG90XCIsXG4gICAgXCJlcXVhbFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHAyXCIsXG4gICAgXCJmYWNlZm9yd2FyZFwiLFxuICAgIFwiZmxvYXRCaXRzVG9JbnRcIixcbiAgICBcImZsb2F0Qml0c1RvVWludFwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImZyYWN0XCIsXG4gICAgXCJmd2lkdGhcIixcbiAgICBcImdyZWF0ZXJUaGFuXCIsXG4gICAgXCJncmVhdGVyVGhhbkVxdWFsXCIsXG4gICAgXCJpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwiaW52ZXJzZVwiLFxuICAgIFwiaW52ZXJzZXNxcnRcIixcbiAgICBcImlzaW5mXCIsXG4gICAgXCJpc25hblwiLFxuICAgIFwibGVuZ3RoXCIsXG4gICAgXCJsZXNzVGhhblwiLFxuICAgIFwibGVzc1RoYW5FcXVhbFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cyXCIsXG4gICAgXCJtYXRyaXhDb21wTXVsdFwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1peFwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2RmXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibm90RXF1YWxcIixcbiAgICBcIm91dGVyUHJvZHVjdFwiLFxuICAgIFwicGFja0hhbGYyeDE2XCIsXG4gICAgXCJwYWNrU25vcm0yeDE2XCIsXG4gICAgXCJwYWNrVW5vcm0yeDE2XCIsXG4gICAgXCJwb3dcIixcbiAgICBcInJhZGlhbnNcIixcbiAgICBcInJlZmxlY3RcIixcbiAgICBcInJlZnJhY3RcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJyb3VuZEV2ZW5cIixcbiAgICBcInNpZ25cIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic21vb3Roc3RlcFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RlcFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0ZXhlbEZldGNoXCIsXG4gICAgXCJ0ZXhlbEZldGNoT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZFwiLFxuICAgIFwidGV4dHVyZUdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVMb2RcIixcbiAgICBcInRleHR1cmVMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RcIixcbiAgICBcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvak9mZnNldFwiLFxuICAgIFwidGV4dHVyZVNpemVcIixcbiAgICBcInRyYW5zcG9zZVwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcInVpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwidW5wYWNrSGFsZjJ4MTZcIixcbiAgICBcInVucGFja1Nub3JtMngxNlwiLFxuICAgIFwidW5wYWNrVW5vcm0yeDE2XCIsXG5dXG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eIy4rJC9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC8oXnxbXlxcdyRdKSg/Ok5hTnxJbmZpbml0eXwwW2JCXVswMV0rKD86X1swMV0rKSpuP3wwW29PXVswLTddKyg/Ol9bMC03XSspKm4/fDBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj98XFxkKyg/Ol9cXGQrKSpufCg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8pKD8hW1xcdyRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG4gICAga2V5d29yZDogbWFrZUlkZW50aWZpZXJzUlgoS0VZV09SRFMpLFxuICAgIGdsb2JhbDogbWFrZUlkZW50aWZpZXJzUlgoR0xPQkFMUyksXG4gICAgZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59XG5cbmZ1bmN0aW9uIG1ha2VJZGVudGlmaWVyc1JYKHdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoYCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYCksXG4gICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0NvZGVWaWV3ZXJcIlxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsMEpBQTBKLEU7Ozs7Ozs7Ozs7Ozs7QUNZbko7QUFFa0M7QUFFcEI7QUFHckMsU0FBUyxJQUFJLENBQUMsT0FBbUIsRUFBRSxNQUFjO0lBQzdDLE1BQU0sS0FBSyxH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