"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_sprites_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_cs-6e564c"], {
4264(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/bricks.85389c95a9d5a39e.webp";

},
46033(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/sprites.aa4ec453b3cda8b6.webp";

},
17328(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _bricks_webp__rspack_import_3 = __webpack_require__(4264);




// #begin
function init(context, assets) {
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.3,
            0.3,
            0.3,
            1
        ],
        depth: 1
    });
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        load: assets.image.sprites
    });
    var cell = function cell(col, row) {
        return {
            x: col / 2,
            y: row / 4,
            width: 1 / 2,
            height: 1 / 4
        };
    };
    var atlas = [];
    for(var col = 0; col < 2; col++){
        for(var row = 0; row < 3; row++){
            atlas.push(cell(col, row));
        }
    }
    var spritesPainter = new _tolokoban_tgd__rspack_import_1.TgdPainterSpritesHue(context, {
        texture: texture,
        atlas: atlas,
        atlasUnit: 2
    });
    var bricks = new Map();
    var click = function click(x, y) {
        var aspectRatio = context.aspectRatio;
        x *= aspectRatio > 1 ? aspectRatio : 1;
        if (x < -1 || x > 1) return;
        y *= aspectRatio > 1 ? 1 : aspectRatio;
        if (y < -1 || y > 1) return;
        x = Math.floor(x * 2) * 2 + 1;
        y = Math.floor(y * 4) + 0.5;
        var key = "".concat(x, "/").concat(y);
        var currentBrick = bricks.get(key);
        if (currentBrick) {
            if (currentBrick.index < 4) currentBrick.index++;
            else {
                console.log("Delete:", currentBrick);
                spritesPainter.remove(currentBrick);
                bricks.delete(key);
            }
        } else {
            var brick = spritesPainter.add({
                x: x,
                y: y,
                hue: Math.random() * 0.8
            });
            bricks.set(key, brick);
        }
        context.paint();
    };
    for(var loop = 0; loop < 10; loop++){
        click((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(-1, +1), (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(-1, +1));
    }
    context.inputs.pointer.eventTap.addListener(function(evt) {
        return click(evt.x, evt.y);
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        blend: _tolokoban_tgd__rspack_import_1.webglPresetBlend.alpha,
        children: [
            spritesPainter
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function() {
        context.camera.fitSpaceAtTarget(8, 8);
    }));
    context.paint();
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        assets: {
            image: {
                sprites: _bricks_webp__rspack_import_3
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/bricks.demo.tsx",
        lineNumber: 97,
        columnNumber: 3
    }, this);
}


},
32913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _bricks_demo__rspack_import_4 = __webpack_require__(17328);
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
    "Detail #1": 'function init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        load: assets.image.sprites,\n    })\n    const cell = (col: number, row: number) => ({\n        x: col / 2,\n        y: row / 4,\n        width: 1 / 2,\n        height: 1 / 4,\n    })\n    const atlas: TgdPainterSpritesAtlas = []\n    for (let col = 0; col < 2; col++) {\n        for (let row = 0; row < 3; row++) {\n            atlas.push(cell(col, row))\n        }\n    }\n    const spritesPainter = new TgdPainterSpritesHue(context, {\n        texture,\n        atlas,\n        atlasUnit: 2,\n    })\n    const bricks = new Map<string, TgdSprite>()\n    const click = (x: number, y: number) => {\n        const { aspectRatio } = context\n        x *= aspectRatio > 1 ? aspectRatio : 1\n        if (x < -1 || x > 1) return\n\n        y *= aspectRatio > 1 ? 1 : aspectRatio\n        if (y < -1 || y > 1) return\n\n        x = Math.floor(x * 2) * 2 + 1\n        y = Math.floor(y * 4) + 0.5\n        const key = `${x}/${y}`\n        const currentBrick = bricks.get(key)\n        if (currentBrick) {\n            if (currentBrick.index < 4) currentBrick.index++\n            else {\n                console.log("Delete:", currentBrick)\n                spritesPainter.remove(currentBrick)\n                bricks.delete(key)\n            }\n        } else {\n            const brick = spritesPainter.add({\n                x,\n                y,\n                hue: Math.random() * 0.8,\n            })\n            bricks.set(key, brick)\n        }\n        context.paint()\n    }\n    for (let loop = 0; loop < 10; loop++) {\n        click(tgdCalcRandom(-1, +1), tgdCalcRandom(-1, +1))\n    }\n    context.inputs.pointer.eventTap.addListener((evt) => click(evt.x, evt.y))\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            blend: webglPresetBlend.alpha,\n            children: [spritesPainter],\n        }),\n        new TgdPainterLogic(() => {\n            context.camera.fitSpaceAtTarget(8, 8)\n        }),\n    )\n    context.paint()\n}'
};
var FULL = 'import {\n    tgdCalcRandom,\n    type TgdContext,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterSprites,\n    type TgdPainterSpritesAtlas,\n    TgdPainterSpritesHue,\n    TgdPainterState,\n    type TgdSprite,\n    TgdTexture2D,\n    webglPresetBlend,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\n\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport BricksURL from "./bricks.webp"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        load: assets.image.sprites,\n    })\n    const cell = (col: number, row: number) => ({\n        x: col / 2,\n        y: row / 4,\n        width: 1 / 2,\n        height: 1 / 4,\n    })\n    const atlas: TgdPainterSpritesAtlas = []\n    for (let col = 0; col < 2; col++) {\n        for (let row = 0; row < 3; row++) {\n            atlas.push(cell(col, row))\n        }\n    }\n    const spritesPainter = new TgdPainterSpritesHue(context, {\n        texture,\n        atlas,\n        atlasUnit: 2,\n    })\n    const bricks = new Map<string, TgdSprite>()\n    const click = (x: number, y: number) => {\n        const { aspectRatio } = context\n        x *= aspectRatio > 1 ? aspectRatio : 1\n        if (x < -1 || x > 1) return\n\n        y *= aspectRatio > 1 ? 1 : aspectRatio\n        if (y < -1 || y > 1) return\n\n        x = Math.floor(x * 2) * 2 + 1\n        y = Math.floor(y * 4) + 0.5\n        const key = `${x}/${y}`\n        const currentBrick = bricks.get(key)\n        if (currentBrick) {\n            if (currentBrick.index < 4) currentBrick.index++\n            else {\n                console.log("Delete:", currentBrick)\n                spritesPainter.remove(currentBrick)\n                bricks.delete(key)\n            }\n        } else {\n            const brick = spritesPainter.add({\n                x,\n                y,\n                hue: Math.random() * 0.8,\n            })\n            bricks.set(key, brick)\n        }\n        context.paint()\n    }\n    for (let loop = 0; loop < 10; loop++) {\n        click(tgdCalcRandom(-1, +1), tgdCalcRandom(-1, +1))\n    }\n    context.inputs.pointer.eventTap.addListener((evt) => click(evt.x, evt.y))\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            blend: webglPresetBlend.alpha,\n            children: [spritesPainter],\n        }),\n        new TgdPainterLogic(() => {\n            context.camera.fitSpaceAtTarget(8, 8)\n        }),\n    )\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: { sprites: BricksURL },\n            }}\n        />\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_bricks_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 4
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
2866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(97171);
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
    "Detail #1": 'function init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        params: {\n            magFilter: "NEAREST",\n            minFilter: "NEAREST",\n            wrapR: "CLAMP_TO_EDGE",\n            wrapS: "CLAMP_TO_EDGE",\n            wrapT: "CLAMP_TO_EDGE",\n        },\n        load: assets.image.sprites,\n    })\n    const cell = (col: number, row: number) => ({\n        x: col / 8,\n        y: row / 10,\n        width: 1 / 8,\n        height: 1 / 10,\n    })\n    const atlas: TgdPainterSpritesAtlas = []\n    for (let row = 0; row < 10; row++) {\n        for (let col = 0; col < 8; col++) {\n            atlas.push(cell(col, row))\n        }\n    }\n    const spritesPainter1 = new TgdPainterSprites(context, {\n        texture,\n        atlas,\n        atlasUnit: 5,\n    })\n    const spritesPainter2 = new TgdPainterSprites(context, {\n        texture,\n        atlas,\n        atlasUnit: 5,\n    })\n    const sprites: TgdSprite[] = []\n    for (let x = -7; x < 8; x++) {\n        for (let y = -3; y < 4; y += 2) {\n            for (let z = 0; z < 1; z += 0.1) {\n                const sprite1 = spritesPainter1.add({})\n                sprite1.x = x\n                sprite1.y = y\n                sprite1.z = -z * 100\n                if (tgdCalcRandom() < 0.5) sprite1.scaleX = -1\n                sprite1.index = Math.floor(tgdCalcRandom(0, 40))\n                sprites.push(sprite1)\n                const sprite2 = spritesPainter2.add({})\n                sprite2.x = x\n                sprite2.y = y\n                sprite2.z = -z * 100 - 100\n                if (tgdCalcRandom() < 0.5) sprite2.scaleX = -1\n                sprite2.index = Math.floor(tgdCalcRandom(0, 72))\n                sprites.push(sprite2)\n            }\n        }\n    }\n    const STEPS: number[] = [3, 2, 1, 0, 7, 6, 5, 4, 9, 10, 11, 8, 11, 12, 10, 15]\n    for (let i = 0; i < 16; i++) {\n        STEPS.push(STEPS[i] + 16)\n    }\n    STEPS.push(32, 34, 35, 36, 33, 37, 39, 38)\n    for (let i = 0; i < 32; i++) {\n        STEPS.push(STEPS[i] + 40)\n    }\n    const interval = new TgdTimeInterval({\n        intervalInSeconds: 0.2,\n        action(time: number) {\n            for (const sprite of sprites) {\n                const nextStep = STEPS[sprite.index]\n                if (typeof nextStep === "number") {\n                    sprite.index = nextStep\n                }\n            }\n        },\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [spritesPainter1, spritesPainter2],\n        }),\n        new TgdPainterLogic((time, delay) => {\n            interval.update(time, delay)\n            for (const sprite of sprites) {\n                sprite.angle = tgdCalcDegToRad(30 * Math.sin(time))\n            }\n            const t = tgdCalcModulo(time * 0.05, 0, 1)\n            const z = tgdCalcMix(0, -100, t)\n            context.camera.transfo.setPosition(0, 0, z)\n        }),\n    )\n    context.play()\n}'
};
var FULL = 'import {\n    tgdCalcDegToRad,\n    tgdCalcMix,\n    tgdCalcModulo,\n    tgdCalcRandom,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterSprites,\n    type TgdPainterSpritesAtlas,\n    TgdPainterState,\n    type TgdSprite,\n    TgdTexture2D,\n    TgdTimeInterval,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\n\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport SpritesURL from "./sprites.webp"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        params: {\n            magFilter: "NEAREST",\n            minFilter: "NEAREST",\n            wrapR: "CLAMP_TO_EDGE",\n            wrapS: "CLAMP_TO_EDGE",\n            wrapT: "CLAMP_TO_EDGE",\n        },\n        load: assets.image.sprites,\n    })\n    const cell = (col: number, row: number) => ({\n        x: col / 8,\n        y: row / 10,\n        width: 1 / 8,\n        height: 1 / 10,\n    })\n    const atlas: TgdPainterSpritesAtlas = []\n    for (let row = 0; row < 10; row++) {\n        for (let col = 0; col < 8; col++) {\n            atlas.push(cell(col, row))\n        }\n    }\n    const spritesPainter1 = new TgdPainterSprites(context, {\n        texture,\n        atlas,\n        atlasUnit: 5,\n    })\n    const spritesPainter2 = new TgdPainterSprites(context, {\n        texture,\n        atlas,\n        atlasUnit: 5,\n    })\n    const sprites: TgdSprite[] = []\n    for (let x = -7; x < 8; x++) {\n        for (let y = -3; y < 4; y += 2) {\n            for (let z = 0; z < 1; z += 0.1) {\n                const sprite1 = spritesPainter1.add({})\n                sprite1.x = x\n                sprite1.y = y\n                sprite1.z = -z * 100\n                if (tgdCalcRandom() < 0.5) sprite1.scaleX = -1\n                sprite1.index = Math.floor(tgdCalcRandom(0, 40))\n                sprites.push(sprite1)\n                const sprite2 = spritesPainter2.add({})\n                sprite2.x = x\n                sprite2.y = y\n                sprite2.z = -z * 100 - 100\n                if (tgdCalcRandom() < 0.5) sprite2.scaleX = -1\n                sprite2.index = Math.floor(tgdCalcRandom(0, 72))\n                sprites.push(sprite2)\n            }\n        }\n    }\n    const STEPS: number[] = [3, 2, 1, 0, 7, 6, 5, 4, 9, 10, 11, 8, 11, 12, 10, 15]\n    for (let i = 0; i < 16; i++) {\n        STEPS.push(STEPS[i] + 16)\n    }\n    STEPS.push(32, 34, 35, 36, 33, 37, 39, 38)\n    for (let i = 0; i < 32; i++) {\n        STEPS.push(STEPS[i] + 40)\n    }\n    const interval = new TgdTimeInterval({\n        intervalInSeconds: 0.2,\n        action(time: number) {\n            for (const sprite of sprites) {\n                const nextStep = STEPS[sprite.index]\n                if (typeof nextStep === "number") {\n                    sprite.index = nextStep\n                }\n            }\n        },\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [spritesPainter1, spritesPainter2],\n        }),\n        new TgdPainterLogic((time, delay) => {\n            interval.update(time, delay)\n            for (const sprite of sprites) {\n                sprite.angle = tgdCalcDegToRad(30 * Math.sin(time))\n            }\n            const t = tgdCalcModulo(time * 0.05, 0, 1)\n            const z = tgdCalcMix(0, -100, t)\n            context.camera.transfo.setPosition(0, 0, z)\n        }),\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: { sprites: SpritesURL },\n            }}\n            controller={{\n                inertiaOrbit: 1000,\n                inertiaZoom: 1000,\n                geo: {\n                    minLat: tgdCalcDegToRad(-30),\n                    minLng: tgdCalcDegToRad(-30),\n                    maxLat: tgdCalcDegToRad(30),\n                    maxLng: tgdCalcDegToRad(30),\n                },\n            }}\n        />\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 4
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
97171(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _sprites_webp__rspack_import_3 = __webpack_require__(46033);




// #begin
function init(context, assets) {
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.3,
            0.3,
            0.3,
            1
        ],
        depth: 1
    });
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        params: {
            magFilter: "NEAREST",
            minFilter: "NEAREST",
            wrapR: "CLAMP_TO_EDGE",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE"
        },
        load: assets.image.sprites
    });
    var cell = function cell(col, row) {
        return {
            x: col / 8,
            y: row / 10,
            width: 1 / 8,
            height: 1 / 10
        };
    };
    var atlas = [];
    for(var row = 0; row < 10; row++){
        for(var col = 0; col < 8; col++){
            atlas.push(cell(col, row));
        }
    }
    var spritesPainter1 = new _tolokoban_tgd__rspack_import_1.TgdPainterSprites(context, {
        texture: texture,
        atlas: atlas,
        atlasUnit: 5
    });
    var spritesPainter2 = new _tolokoban_tgd__rspack_import_1.TgdPainterSprites(context, {
        texture: texture,
        atlas: atlas,
        atlasUnit: 5
    });
    var sprites = [];
    for(var x = -7; x < 8; x++){
        for(var y = -3; y < 4; y += 2){
            for(var z = 0; z < 1; z += 0.1){
                var sprite1 = spritesPainter1.add({});
                sprite1.x = x;
                sprite1.y = y;
                sprite1.z = -z * 100;
                if ((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)() < 0.5) sprite1.scaleX = -1;
                sprite1.index = Math.floor((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(0, 40));
                sprites.push(sprite1);
                var sprite2 = spritesPainter2.add({});
                sprite2.x = x;
                sprite2.y = y;
                sprite2.z = -z * 100 - 100;
                if ((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)() < 0.5) sprite2.scaleX = -1;
                sprite2.index = Math.floor((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(0, 72));
                sprites.push(sprite2);
            }
        }
    }
    var STEPS = [
        3,
        2,
        1,
        0,
        7,
        6,
        5,
        4,
        9,
        10,
        11,
        8,
        11,
        12,
        10,
        15
    ];
    for(var i = 0; i < 16; i++){
        STEPS.push(STEPS[i] + 16);
    }
    STEPS.push(32, 34, 35, 36, 33, 37, 39, 38);
    for(var i1 = 0; i1 < 32; i1++){
        STEPS.push(STEPS[i1] + 40);
    }
    var interval = new _tolokoban_tgd__rspack_import_1.TgdTimeInterval({
        intervalInSeconds: 0.2,
        action: function action(time) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = sprites[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var sprite = _step.value;
                    var nextStep = STEPS[sprite.index];
                    if (typeof nextStep === "number") {
                        sprite.index = nextStep;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            spritesPainter1,
            spritesPainter2
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time, delay) {
        interval.update(time, delay);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = sprites[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var sprite = _step.value;
                sprite.angle = (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(30 * Math.sin(time));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        var t = (0,_tolokoban_tgd__rspack_import_1.tgdCalcModulo)(time * 0.05, 0, 1);
        var z = (0,_tolokoban_tgd__rspack_import_1.tgdCalcMix)(0, -100, t);
        context.camera.transfo.setPosition(0, 0, z);
    }));
    context.play();
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        assets: {
            image: {
                sprites: _sprites_webp__rspack_import_3
            }
        },
        controller: {
            inertiaOrbit: 1000,
            inertiaZoom: 1000,
            geo: {
                minLat: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(-30),
                minLng: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(-30),
                maxLat: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(30),
                maxLng: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(30)
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/main.demo.tsx",
        lineNumber: 125,
        columnNumber: 3
    }, this);
}


},
97553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(2866);
/* import */ var _bricks_demo__rspack_import_2 = __webpack_require__(32913);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zcHJpdGVzX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jcy02ZTU2NGMuOTgwY2E1NDQ1NDY4N2JkZC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3Nwcml0ZXMvXy9icmlja3MuZGVtby9icmlja3MuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc3ByaXRlcy9fL2JyaWNrcy5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zcHJpdGVzL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zcHJpdGVzL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc3ByaXRlcy9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHR0Z2RDYWxjUmFuZG9tLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlckxvZ2ljLFxuXHRUZ2RQYWludGVyU3ByaXRlcyxcblx0dHlwZSBUZ2RQYWludGVyU3ByaXRlc0F0bGFzLFxuXHRUZ2RQYWludGVyU3ByaXRlc0h1ZSxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHR0eXBlIFRnZFNwcml0ZSxcblx0VGdkVGV4dHVyZTJELFxuXHR3ZWJnbFByZXNldEJsZW5kLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmltcG9ydCBCcmlja3NVUkwgZnJvbSBcIi4vYnJpY2tzLndlYnBcIjtcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSk7XG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRsb2FkOiBhc3NldHMuaW1hZ2Uuc3ByaXRlcyxcblx0fSk7XG5cdGNvbnN0IGNlbGwgPSAoY29sOiBudW1iZXIsIHJvdzogbnVtYmVyKSA9PiAoe1xuXHRcdHg6IGNvbCAvIDIsXG5cdFx0eTogcm93IC8gNCxcblx0XHR3aWR0aDogMSAvIDIsXG5cdFx0aGVpZ2h0OiAxIC8gNCxcblx0fSk7XG5cdGNvbnN0IGF0bGFzOiBUZ2RQYWludGVyU3ByaXRlc0F0bGFzID0gW107XG5cdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDI7IGNvbCsrKSB7XG5cdFx0Zm9yIChsZXQgcm93ID0gMDsgcm93IDwgMzsgcm93KyspIHtcblx0XHRcdGF0bGFzLnB1c2goY2VsbChjb2wsIHJvdykpO1xuXHRcdH1cblx0fVxuXHRjb25zdCBzcHJpdGVzUGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3ByaXRlc0h1ZShjb250ZXh0LCB7XG5cdFx0dGV4dHVyZSxcblx0XHRhdGxhcyxcblx0XHRhdGxhc1VuaXQ6IDIsXG5cdH0pO1xuXHRjb25zdCBicmlja3MgPSBuZXcgTWFwPHN0cmluZywgVGdkU3ByaXRlPigpO1xuXHRjb25zdCBjbGljayA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xuXHRcdGNvbnN0IHsgYXNwZWN0UmF0aW8gfSA9IGNvbnRleHQ7XG5cdFx0eCAqPSBhc3BlY3RSYXRpbyA+IDEgPyBhc3BlY3RSYXRpbyA6IDE7XG5cdFx0aWYgKHggPCAtMSB8fCB4ID4gMSkgcmV0dXJuO1xuXG5cdFx0eSAqPSBhc3BlY3RSYXRpbyA+IDEgPyAxIDogYXNwZWN0UmF0aW87XG5cdFx0aWYgKHkgPCAtMSB8fCB5ID4gMSkgcmV0dXJuO1xuXG5cdFx0eCA9IE1hdGguZmxvb3IoeCAqIDIpICogMiArIDE7XG5cdFx0eSA9IE1hdGguZmxvb3IoeSAqIDQpICsgMC41O1xuXHRcdGNvbnN0IGtleSA9IGAke3h9LyR7eX1gO1xuXHRcdGNvbnN0IGN1cnJlbnRCcmljayA9IGJyaWNrcy5nZXQoa2V5KTtcblx0XHRpZiAoY3VycmVudEJyaWNrKSB7XG5cdFx0XHRpZiAoY3VycmVudEJyaWNrLmluZGV4IDwgNCkgY3VycmVudEJyaWNrLmluZGV4Kys7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJEZWxldGU6XCIsIGN1cnJlbnRCcmljayk7XG5cdFx0XHRcdHNwcml0ZXNQYWludGVyLnJlbW92ZShjdXJyZW50QnJpY2spO1xuXHRcdFx0XHRicmlja3MuZGVsZXRlKGtleSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGJyaWNrID0gc3ByaXRlc1BhaW50ZXIuYWRkKHtcblx0XHRcdFx0eCxcblx0XHRcdFx0eSxcblx0XHRcdFx0aHVlOiBNYXRoLnJhbmRvbSgpICogMC44LFxuXHRcdFx0fSk7XG5cdFx0XHRicmlja3Muc2V0KGtleSwgYnJpY2spO1xuXHRcdH1cblx0XHRjb250ZXh0LnBhaW50KCk7XG5cdH07XG5cdGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgMTA7IGxvb3ArKykge1xuXHRcdGNsaWNrKHRnZENhbGNSYW5kb20oLTEsICsxKSwgdGdkQ2FsY1JhbmRvbSgtMSwgKzEpKTtcblx0fVxuXHRjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IGNsaWNrKGV2dC54LCBldnQueSkpO1xuXHRjb250ZXh0LmFkZChcblx0XHRjbGVhcixcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0XHRibGVuZDogd2ViZ2xQcmVzZXRCbGVuZC5hbHBoYSxcblx0XHRcdGNoaWxkcmVuOiBbc3ByaXRlc1BhaW50ZXJdLFxuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyTG9naWMoKCkgPT4ge1xuXHRcdFx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg4LCA4KTtcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wYWludCgpO1xufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdGltYWdlOiB7IHNwcml0ZXM6IEJyaWNrc1VSTCB9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIjtcbmltcG9ydCBEZW1vIGZyb20gXCIuL2JyaWNrcy5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkRldGFpbCAjMVwiOlxuXHRcdCdmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIGxvYWQ6IGFzc2V0cy5pbWFnZS5zcHJpdGVzLFxcbiAgICB9KVxcbiAgICBjb25zdCBjZWxsID0gKGNvbDogbnVtYmVyLCByb3c6IG51bWJlcikgPT4gKHtcXG4gICAgICAgIHg6IGNvbCAvIDIsXFxuICAgICAgICB5OiByb3cgLyA0LFxcbiAgICAgICAgd2lkdGg6IDEgLyAyLFxcbiAgICAgICAgaGVpZ2h0OiAxIC8gNCxcXG4gICAgfSlcXG4gICAgY29uc3QgYXRsYXM6IFRnZFBhaW50ZXJTcHJpdGVzQXRsYXMgPSBbXVxcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAyOyBjb2wrKykge1xcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMzsgcm93KyspIHtcXG4gICAgICAgICAgICBhdGxhcy5wdXNoKGNlbGwoY29sLCByb3cpKVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IHNwcml0ZXNQYWludGVyID0gbmV3IFRnZFBhaW50ZXJTcHJpdGVzSHVlKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmUsXFxuICAgICAgICBhdGxhcyxcXG4gICAgICAgIGF0bGFzVW5pdDogMixcXG4gICAgfSlcXG4gICAgY29uc3QgYnJpY2tzID0gbmV3IE1hcDxzdHJpbmcsIFRnZFNwcml0ZT4oKVxcbiAgICBjb25zdCBjbGljayA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xcbiAgICAgICAgY29uc3QgeyBhc3BlY3RSYXRpbyB9ID0gY29udGV4dFxcbiAgICAgICAgeCAqPSBhc3BlY3RSYXRpbyA+IDEgPyBhc3BlY3RSYXRpbyA6IDFcXG4gICAgICAgIGlmICh4IDwgLTEgfHwgeCA+IDEpIHJldHVyblxcblxcbiAgICAgICAgeSAqPSBhc3BlY3RSYXRpbyA+IDEgPyAxIDogYXNwZWN0UmF0aW9cXG4gICAgICAgIGlmICh5IDwgLTEgfHwgeSA+IDEpIHJldHVyblxcblxcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoeCAqIDIpICogMiArIDFcXG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHkgKiA0KSArIDAuNVxcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7eH0vJHt5fWBcXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCcmljayA9IGJyaWNrcy5nZXQoa2V5KVxcbiAgICAgICAgaWYgKGN1cnJlbnRCcmljaykge1xcbiAgICAgICAgICAgIGlmIChjdXJyZW50QnJpY2suaW5kZXggPCA0KSBjdXJyZW50QnJpY2suaW5kZXgrK1xcbiAgICAgICAgICAgIGVsc2Uge1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGV0ZTpcIiwgY3VycmVudEJyaWNrKVxcbiAgICAgICAgICAgICAgICBzcHJpdGVzUGFpbnRlci5yZW1vdmUoY3VycmVudEJyaWNrKVxcbiAgICAgICAgICAgICAgICBicmlja3MuZGVsZXRlKGtleSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIGNvbnN0IGJyaWNrID0gc3ByaXRlc1BhaW50ZXIuYWRkKHtcXG4gICAgICAgICAgICAgICAgeCxcXG4gICAgICAgICAgICAgICAgeSxcXG4gICAgICAgICAgICAgICAgaHVlOiBNYXRoLnJhbmRvbSgpICogMC44LFxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgYnJpY2tzLnNldChrZXksIGJyaWNrKVxcbiAgICAgICAgfVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG4gICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCAxMDsgbG9vcCsrKSB7XFxuICAgICAgICBjbGljayh0Z2RDYWxjUmFuZG9tKC0xLCArMSksIHRnZENhbGNSYW5kb20oLTEsICsxKSlcXG4gICAgfVxcbiAgICBjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IGNsaWNrKGV2dC54LCBldnQueSkpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLmFscGhhLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbc3ByaXRlc1BhaW50ZXJdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCgpID0+IHtcXG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDgsIDgpXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG59Jyxcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7XFxuICAgIHRnZENhbGNSYW5kb20sXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJTcHJpdGVzLFxcbiAgICB0eXBlIFRnZFBhaW50ZXJTcHJpdGVzQXRsYXMsXFxuICAgIFRnZFBhaW50ZXJTcHJpdGVzSHVlLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIHR5cGUgVGdkU3ByaXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIHdlYmdsUHJlc2V0QmxlbmQsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxcblxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXFxuXFxuaW1wb3J0IEJyaWNrc1VSTCBmcm9tIFwiLi9icmlja3Mud2VicFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2Uuc3ByaXRlcyxcXG4gICAgfSlcXG4gICAgY29uc3QgY2VsbCA9IChjb2w6IG51bWJlciwgcm93OiBudW1iZXIpID0+ICh7XFxuICAgICAgICB4OiBjb2wgLyAyLFxcbiAgICAgICAgeTogcm93IC8gNCxcXG4gICAgICAgIHdpZHRoOiAxIC8gMixcXG4gICAgICAgIGhlaWdodDogMSAvIDQsXFxuICAgIH0pXFxuICAgIGNvbnN0IGF0bGFzOiBUZ2RQYWludGVyU3ByaXRlc0F0bGFzID0gW11cXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMjsgY29sKyspIHtcXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDM7IHJvdysrKSB7XFxuICAgICAgICAgICAgYXRsYXMucHVzaChjZWxsKGNvbCwgcm93KSlcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBjb25zdCBzcHJpdGVzUGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3ByaXRlc0h1ZShjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICAgICAgYXRsYXMsXFxuICAgICAgICBhdGxhc1VuaXQ6IDIsXFxuICAgIH0pXFxuICAgIGNvbnN0IGJyaWNrcyA9IG5ldyBNYXA8c3RyaW5nLCBUZ2RTcHJpdGU+KClcXG4gICAgY29uc3QgY2xpY2sgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcXG4gICAgICAgIGNvbnN0IHsgYXNwZWN0UmF0aW8gfSA9IGNvbnRleHRcXG4gICAgICAgIHggKj0gYXNwZWN0UmF0aW8gPiAxID8gYXNwZWN0UmF0aW8gOiAxXFxuICAgICAgICBpZiAoeCA8IC0xIHx8IHggPiAxKSByZXR1cm5cXG5cXG4gICAgICAgIHkgKj0gYXNwZWN0UmF0aW8gPiAxID8gMSA6IGFzcGVjdFJhdGlvXFxuICAgICAgICBpZiAoeSA8IC0xIHx8IHkgPiAxKSByZXR1cm5cXG5cXG4gICAgICAgIHggPSBNYXRoLmZsb29yKHggKiAyKSAqIDIgKyAxXFxuICAgICAgICB5ID0gTWF0aC5mbG9vcih5ICogNCkgKyAwLjVcXG4gICAgICAgIGNvbnN0IGtleSA9IGAke3h9LyR7eX1gXFxuICAgICAgICBjb25zdCBjdXJyZW50QnJpY2sgPSBicmlja3MuZ2V0KGtleSlcXG4gICAgICAgIGlmIChjdXJyZW50QnJpY2spIHtcXG4gICAgICAgICAgICBpZiAoY3VycmVudEJyaWNrLmluZGV4IDwgNCkgY3VycmVudEJyaWNrLmluZGV4KytcXG4gICAgICAgICAgICBlbHNlIHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGU6XCIsIGN1cnJlbnRCcmljaylcXG4gICAgICAgICAgICAgICAgc3ByaXRlc1BhaW50ZXIucmVtb3ZlKGN1cnJlbnRCcmljaylcXG4gICAgICAgICAgICAgICAgYnJpY2tzLmRlbGV0ZShrZXkpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBjb25zdCBicmljayA9IHNwcml0ZXNQYWludGVyLmFkZCh7XFxuICAgICAgICAgICAgICAgIHgsXFxuICAgICAgICAgICAgICAgIHksXFxuICAgICAgICAgICAgICAgIGh1ZTogTWF0aC5yYW5kb20oKSAqIDAuOCxcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIGJyaWNrcy5zZXQoa2V5LCBicmljaylcXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxuICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgMTA7IGxvb3ArKykge1xcbiAgICAgICAgY2xpY2sodGdkQ2FsY1JhbmRvbSgtMSwgKzEpLCB0Z2RDYWxjUmFuZG9tKC0xLCArMSkpXFxuICAgIH1cXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiBjbGljayhldnQueCwgZXZ0LnkpKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBibGVuZDogd2ViZ2xQcmVzZXRCbGVuZC5hbHBoYSxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3Nwcml0ZXNQYWludGVyXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygoKSA9PiB7XFxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg4LCA4KVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGltYWdlOiB7IHNwcml0ZXM6IEJyaWNrc1VSTCB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG5cdGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cblx0XHRcdFx0PERlbW8gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuXHRcdFx0XHRcdFx0e2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIjtcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiO1xuXG5jb25zdCBGT0NVUyA9IHtcblx0XCJEZXRhaWwgIzFcIjpcblx0XHQnZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXFxuICAgICAgICAgICAgd3JhcFI6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgICAgIHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgICAgICB3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgbG9hZDogYXNzZXRzLmltYWdlLnNwcml0ZXMsXFxuICAgIH0pXFxuICAgIGNvbnN0IGNlbGwgPSAoY29sOiBudW1iZXIsIHJvdzogbnVtYmVyKSA9PiAoe1xcbiAgICAgICAgeDogY29sIC8gOCxcXG4gICAgICAgIHk6IHJvdyAvIDEwLFxcbiAgICAgICAgd2lkdGg6IDEgLyA4LFxcbiAgICAgICAgaGVpZ2h0OiAxIC8gMTAsXFxuICAgIH0pXFxuICAgIGNvbnN0IGF0bGFzOiBUZ2RQYWludGVyU3ByaXRlc0F0bGFzID0gW11cXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XFxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA4OyBjb2wrKykge1xcbiAgICAgICAgICAgIGF0bGFzLnB1c2goY2VsbChjb2wsIHJvdykpXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29uc3Qgc3ByaXRlc1BhaW50ZXIxID0gbmV3IFRnZFBhaW50ZXJTcHJpdGVzKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmUsXFxuICAgICAgICBhdGxhcyxcXG4gICAgICAgIGF0bGFzVW5pdDogNSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3ByaXRlc1BhaW50ZXIyID0gbmV3IFRnZFBhaW50ZXJTcHJpdGVzKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmUsXFxuICAgICAgICBhdGxhcyxcXG4gICAgICAgIGF0bGFzVW5pdDogNSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3ByaXRlczogVGdkU3ByaXRlW10gPSBbXVxcbiAgICBmb3IgKGxldCB4ID0gLTc7IHggPCA4OyB4KyspIHtcXG4gICAgICAgIGZvciAobGV0IHkgPSAtMzsgeSA8IDQ7IHkgKz0gMikge1xcbiAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgMTsgeiArPSAwLjEpIHtcXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlMSA9IHNwcml0ZXNQYWludGVyMS5hZGQoe30pXFxuICAgICAgICAgICAgICAgIHNwcml0ZTEueCA9IHhcXG4gICAgICAgICAgICAgICAgc3ByaXRlMS55ID0geVxcbiAgICAgICAgICAgICAgICBzcHJpdGUxLnogPSAteiAqIDEwMFxcbiAgICAgICAgICAgICAgICBpZiAodGdkQ2FsY1JhbmRvbSgpIDwgMC41KSBzcHJpdGUxLnNjYWxlWCA9IC0xXFxuICAgICAgICAgICAgICAgIHNwcml0ZTEuaW5kZXggPSBNYXRoLmZsb29yKHRnZENhbGNSYW5kb20oMCwgNDApKVxcbiAgICAgICAgICAgICAgICBzcHJpdGVzLnB1c2goc3ByaXRlMSlcXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlMiA9IHNwcml0ZXNQYWludGVyMi5hZGQoe30pXFxuICAgICAgICAgICAgICAgIHNwcml0ZTIueCA9IHhcXG4gICAgICAgICAgICAgICAgc3ByaXRlMi55ID0geVxcbiAgICAgICAgICAgICAgICBzcHJpdGUyLnogPSAteiAqIDEwMCAtIDEwMFxcbiAgICAgICAgICAgICAgICBpZiAodGdkQ2FsY1JhbmRvbSgpIDwgMC41KSBzcHJpdGUyLnNjYWxlWCA9IC0xXFxuICAgICAgICAgICAgICAgIHNwcml0ZTIuaW5kZXggPSBNYXRoLmZsb29yKHRnZENhbGNSYW5kb20oMCwgNzIpKVxcbiAgICAgICAgICAgICAgICBzcHJpdGVzLnB1c2goc3ByaXRlMilcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29uc3QgU1RFUFM6IG51bWJlcltdID0gWzMsIDIsIDEsIDAsIDcsIDYsIDUsIDQsIDksIDEwLCAxMSwgOCwgMTEsIDEyLCAxMCwgMTVdXFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xcbiAgICAgICAgU1RFUFMucHVzaChTVEVQU1tpXSArIDE2KVxcbiAgICB9XFxuICAgIFNURVBTLnB1c2goMzIsIDM0LCAzNSwgMzYsIDMzLCAzNywgMzksIDM4KVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcXG4gICAgICAgIFNURVBTLnB1c2goU1RFUFNbaV0gKyA0MClcXG4gICAgfVxcbiAgICBjb25zdCBpbnRlcnZhbCA9IG5ldyBUZ2RUaW1lSW50ZXJ2YWwoe1xcbiAgICAgICAgaW50ZXJ2YWxJblNlY29uZHM6IDAuMixcXG4gICAgICAgIGFjdGlvbih0aW1lOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiBzcHJpdGVzKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTdGVwID0gU1RFUFNbc3ByaXRlLmluZGV4XVxcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5leHRTdGVwID09PSBcIm51bWJlclwiKSB7XFxuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuaW5kZXggPSBuZXh0U3RlcFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzcHJpdGVzUGFpbnRlcjEsIHNwcml0ZXNQYWludGVyMl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbGF5KSA9PiB7XFxuICAgICAgICAgICAgaW50ZXJ2YWwudXBkYXRlKHRpbWUsIGRlbGF5KVxcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIHNwcml0ZXMpIHtcXG4gICAgICAgICAgICAgICAgc3ByaXRlLmFuZ2xlID0gdGdkQ2FsY0RlZ1RvUmFkKDMwICogTWF0aC5zaW4odGltZSkpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0Z2RDYWxjTW9kdWxvKHRpbWUgKiAwLjA1LCAwLCAxKVxcbiAgICAgICAgICAgIGNvbnN0IHogPSB0Z2RDYWxjTWl4KDAsIC0xMDAsIHQpXFxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAwLCB6KVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG59Jyxcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7XFxuICAgIHRnZENhbGNEZWdUb1JhZCxcXG4gICAgdGdkQ2FsY01peCxcXG4gICAgdGdkQ2FsY01vZHVsbyxcXG4gICAgdGdkQ2FsY1JhbmRvbSxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyU3ByaXRlcyxcXG4gICAgdHlwZSBUZ2RQYWludGVyU3ByaXRlc0F0bGFzLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIHR5cGUgVGdkU3ByaXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIFRnZFRpbWVJbnRlcnZhbCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5cXG5pbXBvcnQgU3ByaXRlc1VSTCBmcm9tIFwiLi9zcHJpdGVzLndlYnBcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxcbiAgICAgICAgICAgIHdyYXBSOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgICAgICB3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgd3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGxvYWQ6IGFzc2V0cy5pbWFnZS5zcHJpdGVzLFxcbiAgICB9KVxcbiAgICBjb25zdCBjZWxsID0gKGNvbDogbnVtYmVyLCByb3c6IG51bWJlcikgPT4gKHtcXG4gICAgICAgIHg6IGNvbCAvIDgsXFxuICAgICAgICB5OiByb3cgLyAxMCxcXG4gICAgICAgIHdpZHRoOiAxIC8gOCxcXG4gICAgICAgIGhlaWdodDogMSAvIDEwLFxcbiAgICB9KVxcbiAgICBjb25zdCBhdGxhczogVGdkUGFpbnRlclNwcml0ZXNBdGxhcyA9IFtdXFxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcXG4gICAgICAgICAgICBhdGxhcy5wdXNoKGNlbGwoY29sLCByb3cpKVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IHNwcml0ZXNQYWludGVyMSA9IG5ldyBUZ2RQYWludGVyU3ByaXRlcyhjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICAgICAgYXRsYXMsXFxuICAgICAgICBhdGxhc1VuaXQ6IDUsXFxuICAgIH0pXFxuICAgIGNvbnN0IHNwcml0ZXNQYWludGVyMiA9IG5ldyBUZ2RQYWludGVyU3ByaXRlcyhjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICAgICAgYXRsYXMsXFxuICAgICAgICBhdGxhc1VuaXQ6IDUsXFxuICAgIH0pXFxuICAgIGNvbnN0IHNwcml0ZXM6IFRnZFNwcml0ZVtdID0gW11cXG4gICAgZm9yIChsZXQgeCA9IC03OyB4IDwgODsgeCsrKSB7XFxuICAgICAgICBmb3IgKGxldCB5ID0gLTM7IHkgPCA0OyB5ICs9IDIpIHtcXG4gICAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IDE7IHogKz0gMC4xKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZTEgPSBzcHJpdGVzUGFpbnRlcjEuYWRkKHt9KVxcbiAgICAgICAgICAgICAgICBzcHJpdGUxLnggPSB4XFxuICAgICAgICAgICAgICAgIHNwcml0ZTEueSA9IHlcXG4gICAgICAgICAgICAgICAgc3ByaXRlMS56ID0gLXogKiAxMDBcXG4gICAgICAgICAgICAgICAgaWYgKHRnZENhbGNSYW5kb20oKSA8IDAuNSkgc3ByaXRlMS5zY2FsZVggPSAtMVxcbiAgICAgICAgICAgICAgICBzcHJpdGUxLmluZGV4ID0gTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDQwKSlcXG4gICAgICAgICAgICAgICAgc3ByaXRlcy5wdXNoKHNwcml0ZTEpXFxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZTIgPSBzcHJpdGVzUGFpbnRlcjIuYWRkKHt9KVxcbiAgICAgICAgICAgICAgICBzcHJpdGUyLnggPSB4XFxuICAgICAgICAgICAgICAgIHNwcml0ZTIueSA9IHlcXG4gICAgICAgICAgICAgICAgc3ByaXRlMi56ID0gLXogKiAxMDAgLSAxMDBcXG4gICAgICAgICAgICAgICAgaWYgKHRnZENhbGNSYW5kb20oKSA8IDAuNSkgc3ByaXRlMi5zY2FsZVggPSAtMVxcbiAgICAgICAgICAgICAgICBzcHJpdGUyLmluZGV4ID0gTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDcyKSlcXG4gICAgICAgICAgICAgICAgc3ByaXRlcy5wdXNoKHNwcml0ZTIpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IFNURVBTOiBudW1iZXJbXSA9IFszLCAyLCAxLCAwLCA3LCA2LCA1LCA0LCA5LCAxMCwgMTEsIDgsIDExLCAxMiwgMTAsIDE1XVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcXG4gICAgICAgIFNURVBTLnB1c2goU1RFUFNbaV0gKyAxNilcXG4gICAgfVxcbiAgICBTVEVQUy5wdXNoKDMyLCAzNCwgMzUsIDM2LCAzMywgMzcsIDM5LCAzOClcXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKSB7XFxuICAgICAgICBTVEVQUy5wdXNoKFNURVBTW2ldICsgNDApXFxuICAgIH1cXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBuZXcgVGdkVGltZUludGVydmFsKHtcXG4gICAgICAgIGludGVydmFsSW5TZWNvbmRzOiAwLjIsXFxuICAgICAgICBhY3Rpb24odGltZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgZm9yIChjb25zdCBzcHJpdGUgb2Ygc3ByaXRlcykge1xcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0U3RlcCA9IFNURVBTW3Nwcml0ZS5pbmRleF1cXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXh0U3RlcCA9PT0gXCJudW1iZXJcIikge1xcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLmluZGV4ID0gbmV4dFN0ZXBcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbc3ByaXRlc1BhaW50ZXIxLCBzcHJpdGVzUGFpbnRlcjJdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWxheSkgPT4ge1xcbiAgICAgICAgICAgIGludGVydmFsLnVwZGF0ZSh0aW1lLCBkZWxheSlcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiBzcHJpdGVzKSB7XFxuICAgICAgICAgICAgICAgIHNwcml0ZS5hbmdsZSA9IHRnZENhbGNEZWdUb1JhZCgzMCAqIE1hdGguc2luKHRpbWUpKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBjb25zdCB0ID0gdGdkQ2FsY01vZHVsbyh0aW1lICogMC4wNSwgMCwgMSlcXG4gICAgICAgICAgICBjb25zdCB6ID0gdGdkQ2FsY01peCgwLCAtMTAwLCB0KVxcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMCwgeilcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGltYWdlOiB7IHNwcml0ZXM6IFNwcml0ZXNVUkwgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgICAgICBpbmVydGlhWm9vbTogMTAwMCxcXG4gICAgICAgICAgICAgICAgZ2VvOiB7XFxuICAgICAgICAgICAgICAgICAgICBtaW5MYXQ6IHRnZENhbGNEZWdUb1JhZCgtMzApLFxcbiAgICAgICAgICAgICAgICAgICAgbWluTG5nOiB0Z2RDYWxjRGVnVG9SYWQoLTMwKSxcXG4gICAgICAgICAgICAgICAgICAgIG1heExhdDogdGdkQ2FsY0RlZ1RvUmFkKDMwKSxcXG4gICAgICAgICAgICAgICAgICAgIG1heExuZzogdGdkQ2FsY0RlZ1RvUmFkKDMwKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImltcG9ydCB7XG5cdHRnZENhbGNEZWdUb1JhZCxcblx0dGdkQ2FsY01peCxcblx0dGdkQ2FsY01vZHVsbyxcblx0dGdkQ2FsY1JhbmRvbSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlckxvZ2ljLFxuXHRUZ2RQYWludGVyU3ByaXRlcyxcblx0dHlwZSBUZ2RQYWludGVyU3ByaXRlc0F0bGFzLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdHR5cGUgVGdkU3ByaXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdFRnZFRpbWVJbnRlcnZhbCxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG5pbXBvcnQgU3ByaXRlc1VSTCBmcm9tIFwiLi9zcHJpdGVzLndlYnBcIjtcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSk7XG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRwYXJhbXM6IHtcblx0XHRcdG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXG5cdFx0XHRtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdFx0d3JhcFI6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdFx0d3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdFx0d3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdH0sXG5cdFx0bG9hZDogYXNzZXRzLmltYWdlLnNwcml0ZXMsXG5cdH0pO1xuXHRjb25zdCBjZWxsID0gKGNvbDogbnVtYmVyLCByb3c6IG51bWJlcikgPT4gKHtcblx0XHR4OiBjb2wgLyA4LFxuXHRcdHk6IHJvdyAvIDEwLFxuXHRcdHdpZHRoOiAxIC8gOCxcblx0XHRoZWlnaHQ6IDEgLyAxMCxcblx0fSk7XG5cdGNvbnN0IGF0bGFzOiBUZ2RQYWludGVyU3ByaXRlc0F0bGFzID0gW107XG5cdGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuXHRcdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDg7IGNvbCsrKSB7XG5cdFx0XHRhdGxhcy5wdXNoKGNlbGwoY29sLCByb3cpKTtcblx0XHR9XG5cdH1cblx0Y29uc3Qgc3ByaXRlc1BhaW50ZXIxID0gbmV3IFRnZFBhaW50ZXJTcHJpdGVzKGNvbnRleHQsIHtcblx0XHR0ZXh0dXJlLFxuXHRcdGF0bGFzLFxuXHRcdGF0bGFzVW5pdDogNSxcblx0fSk7XG5cdGNvbnN0IHNwcml0ZXNQYWludGVyMiA9IG5ldyBUZ2RQYWludGVyU3ByaXRlcyhjb250ZXh0LCB7XG5cdFx0dGV4dHVyZSxcblx0XHRhdGxhcyxcblx0XHRhdGxhc1VuaXQ6IDUsXG5cdH0pO1xuXHRjb25zdCBzcHJpdGVzOiBUZ2RTcHJpdGVbXSA9IFtdO1xuXHRmb3IgKGxldCB4ID0gLTc7IHggPCA4OyB4KyspIHtcblx0XHRmb3IgKGxldCB5ID0gLTM7IHkgPCA0OyB5ICs9IDIpIHtcblx0XHRcdGZvciAobGV0IHogPSAwOyB6IDwgMTsgeiArPSAwLjEpIHtcblx0XHRcdFx0Y29uc3Qgc3ByaXRlMSA9IHNwcml0ZXNQYWludGVyMS5hZGQoe30pO1xuXHRcdFx0XHRzcHJpdGUxLnggPSB4O1xuXHRcdFx0XHRzcHJpdGUxLnkgPSB5O1xuXHRcdFx0XHRzcHJpdGUxLnogPSAteiAqIDEwMDtcblx0XHRcdFx0aWYgKHRnZENhbGNSYW5kb20oKSA8IDAuNSkgc3ByaXRlMS5zY2FsZVggPSAtMTtcblx0XHRcdFx0c3ByaXRlMS5pbmRleCA9IE1hdGguZmxvb3IodGdkQ2FsY1JhbmRvbSgwLCA0MCkpO1xuXHRcdFx0XHRzcHJpdGVzLnB1c2goc3ByaXRlMSk7XG5cdFx0XHRcdGNvbnN0IHNwcml0ZTIgPSBzcHJpdGVzUGFpbnRlcjIuYWRkKHt9KTtcblx0XHRcdFx0c3ByaXRlMi54ID0geDtcblx0XHRcdFx0c3ByaXRlMi55ID0geTtcblx0XHRcdFx0c3ByaXRlMi56ID0gLXogKiAxMDAgLSAxMDA7XG5cdFx0XHRcdGlmICh0Z2RDYWxjUmFuZG9tKCkgPCAwLjUpIHNwcml0ZTIuc2NhbGVYID0gLTE7XG5cdFx0XHRcdHNwcml0ZTIuaW5kZXggPSBNYXRoLmZsb29yKHRnZENhbGNSYW5kb20oMCwgNzIpKTtcblx0XHRcdFx0c3ByaXRlcy5wdXNoKHNwcml0ZTIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjb25zdCBTVEVQUzogbnVtYmVyW10gPSBbXG5cdFx0MywgMiwgMSwgMCwgNywgNiwgNSwgNCwgOSwgMTAsIDExLCA4LCAxMSwgMTIsIDEwLCAxNSxcblx0XTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG5cdFx0U1RFUFMucHVzaChTVEVQU1tpXSArIDE2KTtcblx0fVxuXHRTVEVQUy5wdXNoKDMyLCAzNCwgMzUsIDM2LCAzMywgMzcsIDM5LCAzOCk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMzI7IGkrKykge1xuXHRcdFNURVBTLnB1c2goU1RFUFNbaV0gKyA0MCk7XG5cdH1cblx0Y29uc3QgaW50ZXJ2YWwgPSBuZXcgVGdkVGltZUludGVydmFsKHtcblx0XHRpbnRlcnZhbEluU2Vjb25kczogMC4yLFxuXHRcdGFjdGlvbih0aW1lOiBudW1iZXIpIHtcblx0XHRcdGZvciAoY29uc3Qgc3ByaXRlIG9mIHNwcml0ZXMpIHtcblx0XHRcdFx0Y29uc3QgbmV4dFN0ZXAgPSBTVEVQU1tzcHJpdGUuaW5kZXhdO1xuXHRcdFx0XHRpZiAodHlwZW9mIG5leHRTdGVwID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdFx0c3ByaXRlLmluZGV4ID0gbmV4dFN0ZXA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHR9KTtcblx0Y29udGV4dC5hZGQoXG5cdFx0Y2xlYXIsXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHRcdFx0Y2hpbGRyZW46IFtzcHJpdGVzUGFpbnRlcjEsIHNwcml0ZXNQYWludGVyMl0sXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsYXkpID0+IHtcblx0XHRcdGludGVydmFsLnVwZGF0ZSh0aW1lLCBkZWxheSk7XG5cdFx0XHRmb3IgKGNvbnN0IHNwcml0ZSBvZiBzcHJpdGVzKSB7XG5cdFx0XHRcdHNwcml0ZS5hbmdsZSA9IHRnZENhbGNEZWdUb1JhZCgzMCAqIE1hdGguc2luKHRpbWUpKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHQgPSB0Z2RDYWxjTW9kdWxvKHRpbWUgKiAwLjA1LCAwLCAxKTtcblx0XHRcdGNvbnN0IHogPSB0Z2RDYWxjTWl4KDAsIC0xMDAsIHQpO1xuXHRcdFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAwLCB6KTtcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wbGF5KCk7XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0aW1hZ2U6IHsgc3ByaXRlczogU3ByaXRlc1VSTCB9LFxuXHRcdFx0fX1cblx0XHRcdGNvbnRyb2xsZXI9e3tcblx0XHRcdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdFx0XHRpbmVydGlhWm9vbTogMTAwMCxcblx0XHRcdFx0Z2VvOiB7XG5cdFx0XHRcdFx0bWluTGF0OiB0Z2RDYWxjRGVnVG9SYWQoLTMwKSxcblx0XHRcdFx0XHRtaW5Mbmc6IHRnZENhbGNEZWdUb1JhZCgtMzApLFxuXHRcdFx0XHRcdG1heExhdDogdGdkQ2FsY0RlZ1RvUmFkKDMwKSxcblx0XHRcdFx0XHRtYXhMbmc6IHRnZENhbGNEZWdUb1JhZCgzMCksXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInRnZENhbGNSYW5kb20iLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyU3ByaXRlc0h1ZSIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIndlYmdsUHJlc2V0QmxlbmQiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIkJyaWNrc1VSTCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2xlYXIiLCJ0ZXh0dXJlIiwiY2VsbCIsImNvbCIsInJvdyIsImF0bGFzIiwic3ByaXRlc1BhaW50ZXIiLCJicmlja3MiLCJNYXAiLCJjbGljayIsIngiLCJ5IiwiYXNwZWN0UmF0aW8iLCJNYXRoIiwia2V5IiwiY3VycmVudEJyaWNrIiwiY29uc29sZSIsImJyaWNrIiwibG9vcCIsImV2dCIsIkRlbW8iLCJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENhbGNEZWdUb1JhZCIsInRnZENhbGNNaXgiLCJ0Z2RDYWxjTW9kdWxvIiwiVGdkUGFpbnRlclNwcml0ZXMiLCJUZ2RUaW1lSW50ZXJ2YWwiLCJTcHJpdGVzVVJMIiwic3ByaXRlc1BhaW50ZXIxIiwic3ByaXRlc1BhaW50ZXIyIiwic3ByaXRlcyIsInoiLCJzcHJpdGUxIiwic3ByaXRlMiIsIlNURVBTIiwiaSIsImkxIiwiaW50ZXJ2YWwiLCJhY3Rpb24iLCJ0aW1lIiwiX2l0ZXJhdG9yRXJyb3IiLCJzcHJpdGUiLCJuZXh0U3RlcCIsImRlbGF5IiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhd0I7QUFFa0M7QUFFcEI7QUFFdEMsU0FBUztBQUNULFNBQVNVLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDaEQsSUFBTUMsUUFBUSxJQUFJWiwrQ0FBZUEsQ0FBQ1UsU0FBUztRQUMxQyxPQUFPO1lBQUM7WUFBSztZQUFLO1lBQUs7U0FBRTtRQUN6QixPQUFPO0lBQ1I7SUFDQSxJQUFNRyxVQUFVLElBQUlULDRDQUFZQSxDQUFDTSxTQUFTO1FBQ3pDLE1BQU1DLE9BQU8sS0FBSyxDQUFDLE9BQU87SUFDM0I7SUFDQSxJQUFNRyxPQUFPLGNBQUNDLEtBQWFDO2VBQWlCO1lBQzNDLEdBQUdELE1BQU07WUFDVCxHQUFHQyxNQUFNO1lBQ1QsT0FB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