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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/bricks.demo.tsx",
        lineNumber: 97,
        columnNumber: 9
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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        load: assets.image.sprites,\n    })\n    const cell = (col: number, row: number) => ({\n        x: col / 2,\n        y: row / 4,\n        width: 1 / 2,\n        height: 1 / 4,\n    })\n    const atlas: TgdPainterSpritesAtlas = []\n    for (let col = 0; col < 2; col++) {\n        for (let row = 0; row < 3; row++) {\n            atlas.push(cell(col, row))\n        }\n    }\n    const spritesPainter = new TgdPainterSpritesHue(context, {\n        texture,\n        atlas,\n        atlasUnit: 2,\n    })\n    const bricks = new Map<string, TgdSprite>()\n    const click = (x: number, y: number) => {\n        const { aspectRatio } = context\n        x *= aspectRatio > 1 ? aspectRatio : 1\n        if (x < -1 || x > 1) return\n\n        y *= aspectRatio > 1 ? 1 : aspectRatio\n        if (y < -1 || y > 1) return\n\n        x = Math.floor(x * 2) * 2 + 1\n        y = Math.floor(y * 4) + 0.5\n        const key = `${x}/${y}`\n        const currentBrick = bricks.get(key)\n        if (currentBrick) {\n            if (currentBrick.index < 4) currentBrick.index++\n            else {\n                console.log(\"Delete:\", currentBrick)\n                spritesPainter.remove(currentBrick)\n                bricks.delete(key)\n            }\n        } else {\n            const brick = spritesPainter.add({\n                x,\n                y,\n                hue: Math.random() * 0.8,\n            })\n            bricks.set(key, brick)\n        }\n        context.paint()\n    }\n    for (let loop = 0; loop < 10; loop++) {\n        click(tgdCalcRandom(-1, +1), tgdCalcRandom(-1, +1))\n    }\n    context.inputs.pointer.eventTap.addListener((evt) => click(evt.x, evt.y))\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            blend: webglPresetBlend.alpha,\n            children: [spritesPainter],\n        }),\n        new TgdPainterLogic(() => {\n            context.camera.fitSpaceAtTarget(8, 8)\n        }),\n    )\n    context.paint()\n}"
};
var FULL = "import {\n    tgdCalcRandom,\n    type TgdContext,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterSprites,\n    TgdPainterSpritesAtlas,\n    TgdPainterSpritesHue,\n    TgdPainterState,\n    TgdSprite,\n    TgdTexture2D,\n    webglPresetBlend,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\n\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nimport BricksURL from \"./bricks.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        load: assets.image.sprites,\n    })\n    const cell = (col: number, row: number) => ({\n        x: col / 2,\n        y: row / 4,\n        width: 1 / 2,\n        height: 1 / 4,\n    })\n    const atlas: TgdPainterSpritesAtlas = []\n    for (let col = 0; col < 2; col++) {\n        for (let row = 0; row < 3; row++) {\n            atlas.push(cell(col, row))\n        }\n    }\n    const spritesPainter = new TgdPainterSpritesHue(context, {\n        texture,\n        atlas,\n        atlasUnit: 2,\n    })\n    const bricks = new Map<string, TgdSprite>()\n    const click = (x: number, y: number) => {\n        const { aspectRatio } = context\n        x *= aspectRatio > 1 ? aspectRatio : 1\n        if (x < -1 || x > 1) return\n\n        y *= aspectRatio > 1 ? 1 : aspectRatio\n        if (y < -1 || y > 1) return\n\n        x = Math.floor(x * 2) * 2 + 1\n        y = Math.floor(y * 4) + 0.5\n        const key = `${x}/${y}`\n        const currentBrick = bricks.get(key)\n        if (currentBrick) {\n            if (currentBrick.index < 4) currentBrick.index++\n            else {\n                console.log(\"Delete:\", currentBrick)\n                spritesPainter.remove(currentBrick)\n                bricks.delete(key)\n            }\n        } else {\n            const brick = spritesPainter.add({\n                x,\n                y,\n                hue: Math.random() * 0.8,\n            })\n            bricks.set(key, brick)\n        }\n        context.paint()\n    }\n    for (let loop = 0; loop < 10; loop++) {\n        click(tgdCalcRandom(-1, +1), tgdCalcRandom(-1, +1))\n    }\n    context.inputs.pointer.eventTap.addListener((evt) => click(evt.x, evt.y))\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            blend: webglPresetBlend.alpha,\n            children: [spritesPainter],\n        }),\n        new TgdPainterLogic(() => {\n            context.camera.fitSpaceAtTarget(8, 8)\n        }),\n    )\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: { sprites: BricksURL },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_bricks_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/bricks.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
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
    "Detail #1": 'function init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    });\n    const texture = new TgdTexture2D(context, {\n        params: {\n            magFilter: "NEAREST",\n            minFilter: "NEAREST",\n            wrapR: "CLAMP_TO_EDGE",\n            wrapS: "CLAMP_TO_EDGE",\n            wrapT: "CLAMP_TO_EDGE",\n        },\n        load: assets.image.sprites,\n    });\n    const cell = (col: number, row: number) => ({\n        x: col / 8,\n        y: row / 10,\n        width: 1 / 8,\n        height: 1 / 10,\n    });\n    const atlas: TgdPainterSpritesAtlas = [];\n    for (let row = 0; row < 10; row++) {\n        for (let col = 0; col < 8; col++) {\n            atlas.push(cell(col, row));\n        }\n    }\n    const spritesPainter1 = new TgdPainterSprites(context, {\n        texture,\n        atlas,\n        atlasUnit: 5,\n    });\n    const spritesPainter2 = new TgdPainterSprites(context, {\n        texture,\n        atlas,\n        atlasUnit: 5,\n    });\n    const sprites: TgdSprite[] = [];\n    for (let x = -7; x < 8; x++) {\n        for (let y = -3; y < 4; y += 2) {\n            for (let z = 0; z < 1; z += 0.1) {\n                const sprite1 = spritesPainter1.add({});\n                sprite1.x = x;\n                sprite1.y = y;\n                sprite1.z = -z * 100;\n                if (tgdCalcRandom() < 0.5) sprite1.scaleX = -1;\n                sprite1.index = Math.floor(tgdCalcRandom(0, 40));\n                sprites.push(sprite1);\n                const sprite2 = spritesPainter2.add({});\n                sprite2.x = x;\n                sprite2.y = y;\n                sprite2.z = -z * 100 - 100;\n                if (tgdCalcRandom() < 0.5) sprite2.scaleX = -1;\n                sprite2.index = Math.floor(tgdCalcRandom(0, 72));\n                sprites.push(sprite2);\n            }\n        }\n    }\n    const STEPS: number[] = [\n        3,\n        2,\n        1,\n        0,\n        7,\n        6,\n        5,\n        4,\n        9,\n        10,\n        11,\n        8,\n        11,\n        12,\n        10,\n        15,\n    ];\n    for (let i = 0; i < 16; i++) {\n        STEPS.push(STEPS[i] + 16);\n    }\n    STEPS.push(32, 34, 35, 36, 33, 37, 39, 38);\n    for (let i = 0; i < 32; i++) {\n        STEPS.push(STEPS[i] + 40);\n    }\n    const interval = new TgdTimeInterval({\n        intervalInSeconds: 0.2,\n        action(time: number) {\n            for (const sprite of sprites) {\n                const nextStep = STEPS[sprite.index];\n                if (typeof nextStep === "number") {\n                    sprite.index = nextStep;\n                }\n            }\n        },\n    });\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [spritesPainter1, spritesPainter2],\n        }),\n        new TgdPainterLogic((time, delay) => {\n            interval.update(time, delay);\n            for (const sprite of sprites) {\n                sprite.angle = tgdCalcDegToRad(30 * Math.sin(time));\n            }\n            const t = tgdCalcModulo(time * 0.05, 0, 1);\n            const z = tgdCalcMix(0, -100, t);\n            context.camera.transfo.setPosition(0, 0, z);\n        }),\n    );\n    context.play();\n}'
};
var FULL = 'import {\n    tgdCalcDegToRad,\n    tgdCalcMix,\n    tgdCalcModulo,\n    tgdCalcRandom,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterSprites,\n    TgdPainterSpritesAtlas,\n    TgdPainterState,\n    TgdSprite,\n    TgdTexture2D,\n    TgdTimeInterval,\n    webglPresetDepth,\n} from "@tolokoban/tgd";\n\nimport View, { type Assets } from "@/components/demo/Tgd";\n\nimport SpritesURL from "./sprites.webp";\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    });\n    const texture = new TgdTexture2D(context, {\n        params: {\n            magFilter: "NEAREST",\n            minFilter: "NEAREST",\n            wrapR: "CLAMP_TO_EDGE",\n            wrapS: "CLAMP_TO_EDGE",\n            wrapT: "CLAMP_TO_EDGE",\n        },\n        load: assets.image.sprites,\n    });\n    const cell = (col: number, row: number) => ({\n        x: col / 8,\n        y: row / 10,\n        width: 1 / 8,\n        height: 1 / 10,\n    });\n    const atlas: TgdPainterSpritesAtlas = [];\n    for (let row = 0; row < 10; row++) {\n        for (let col = 0; col < 8; col++) {\n            atlas.push(cell(col, row));\n        }\n    }\n    const spritesPainter1 = new TgdPainterSprites(context, {\n        texture,\n        atlas,\n        atlasUnit: 5,\n    });\n    const spritesPainter2 = new TgdPainterSprites(context, {\n        texture,\n        atlas,\n        atlasUnit: 5,\n    });\n    const sprites: TgdSprite[] = [];\n    for (let x = -7; x < 8; x++) {\n        for (let y = -3; y < 4; y += 2) {\n            for (let z = 0; z < 1; z += 0.1) {\n                const sprite1 = spritesPainter1.add({});\n                sprite1.x = x;\n                sprite1.y = y;\n                sprite1.z = -z * 100;\n                if (tgdCalcRandom() < 0.5) sprite1.scaleX = -1;\n                sprite1.index = Math.floor(tgdCalcRandom(0, 40));\n                sprites.push(sprite1);\n                const sprite2 = spritesPainter2.add({});\n                sprite2.x = x;\n                sprite2.y = y;\n                sprite2.z = -z * 100 - 100;\n                if (tgdCalcRandom() < 0.5) sprite2.scaleX = -1;\n                sprite2.index = Math.floor(tgdCalcRandom(0, 72));\n                sprites.push(sprite2);\n            }\n        }\n    }\n    const STEPS: number[] = [\n        3,\n        2,\n        1,\n        0,\n        7,\n        6,\n        5,\n        4,\n        9,\n        10,\n        11,\n        8,\n        11,\n        12,\n        10,\n        15,\n    ];\n    for (let i = 0; i < 16; i++) {\n        STEPS.push(STEPS[i] + 16);\n    }\n    STEPS.push(32, 34, 35, 36, 33, 37, 39, 38);\n    for (let i = 0; i < 32; i++) {\n        STEPS.push(STEPS[i] + 40);\n    }\n    const interval = new TgdTimeInterval({\n        intervalInSeconds: 0.2,\n        action(time: number) {\n            for (const sprite of sprites) {\n                const nextStep = STEPS[sprite.index];\n                if (typeof nextStep === "number") {\n                    sprite.index = nextStep;\n                }\n            }\n        },\n    });\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [spritesPainter1, spritesPainter2],\n        }),\n        new TgdPainterLogic((time, delay) => {\n            interval.update(time, delay);\n            for (const sprite of sprites) {\n                sprite.angle = tgdCalcDegToRad(30 * Math.sin(time));\n            }\n            const t = tgdCalcModulo(time * 0.05, 0, 1);\n            const z = tgdCalcMix(0, -100, t);\n            context.camera.transfo.setPosition(0, 0, z);\n        }),\n    );\n    context.play();\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: { sprites: SpritesURL },\n            }}\n            controller={{\n                inertiaOrbit: 1000,\n                inertiaZoom: 1000,\n                geo: {\n                    minLat: tgdCalcDegToRad(-30),\n                    minLng: tgdCalcDegToRad(-30),\n                    maxLat: tgdCalcDegToRad(30),\n                    maxLng: tgdCalcDegToRad(30),\n                },\n            }}\n        />\n    );\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 13
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 13
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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/sprites/_/main.demo/main.demo.tsx",
        lineNumber: 123,
        columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zcHJpdGVzX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jcy02ZTU2NGMuYjhlY2Q3MDU1OWE5YTBjMy5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zcHJpdGVzL18vYnJpY2tzLmRlbW8vYnJpY2tzLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zcHJpdGVzL18vYnJpY2tzLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zcHJpdGVzL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc3ByaXRlcy9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zcHJpdGVzL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIHRnZENhbGNSYW5kb20sXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTG9naWMsXG4gICAgVGdkUGFpbnRlclNwcml0ZXMsXG4gICAgVGdkUGFpbnRlclNwcml0ZXNBdGxhcyxcbiAgICBUZ2RQYWludGVyU3ByaXRlc0h1ZSxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkU3ByaXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICB3ZWJnbFByZXNldEJsZW5kLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmltcG9ydCBCcmlja3NVUkwgZnJvbSBcIi4vYnJpY2tzLndlYnBcIlxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgbG9hZDogYXNzZXRzLmltYWdlLnNwcml0ZXMsXG4gICAgfSlcbiAgICBjb25zdCBjZWxsID0gKGNvbDogbnVtYmVyLCByb3c6IG51bWJlcikgPT4gKHtcbiAgICAgICAgeDogY29sIC8gMixcbiAgICAgICAgeTogcm93IC8gNCxcbiAgICAgICAgd2lkdGg6IDEgLyAyLFxuICAgICAgICBoZWlnaHQ6IDEgLyA0LFxuICAgIH0pXG4gICAgY29uc3QgYXRsYXM6IFRnZFBhaW50ZXJTcHJpdGVzQXRsYXMgPSBbXVxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDI7IGNvbCsrKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDM7IHJvdysrKSB7XG4gICAgICAgICAgICBhdGxhcy5wdXNoKGNlbGwoY29sLCByb3cpKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNwcml0ZXNQYWludGVyID0gbmV3IFRnZFBhaW50ZXJTcHJpdGVzSHVlKGNvbnRleHQsIHtcbiAgICAgICAgdGV4dHVyZSxcbiAgICAgICAgYXRsYXMsXG4gICAgICAgIGF0bGFzVW5pdDogMixcbiAgICB9KVxuICAgIGNvbnN0IGJyaWNrcyA9IG5ldyBNYXA8c3RyaW5nLCBUZ2RTcHJpdGU+KClcbiAgICBjb25zdCBjbGljayA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCB7IGFzcGVjdFJhdGlvIH0gPSBjb250ZXh0XG4gICAgICAgIHggKj0gYXNwZWN0UmF0aW8gPiAxID8gYXNwZWN0UmF0aW8gOiAxXG4gICAgICAgIGlmICh4IDwgLTEgfHwgeCA+IDEpIHJldHVyblxuXG4gICAgICAgIHkgKj0gYXNwZWN0UmF0aW8gPiAxID8gMSA6IGFzcGVjdFJhdGlvXG4gICAgICAgIGlmICh5IDwgLTEgfHwgeSA+IDEpIHJldHVyblxuXG4gICAgICAgIHggPSBNYXRoLmZsb29yKHggKiAyKSAqIDIgKyAxXG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHkgKiA0KSArIDAuNVxuICAgICAgICBjb25zdCBrZXkgPSBgJHt4fS8ke3l9YFxuICAgICAgICBjb25zdCBjdXJyZW50QnJpY2sgPSBicmlja3MuZ2V0KGtleSlcbiAgICAgICAgaWYgKGN1cnJlbnRCcmljaykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRCcmljay5pbmRleCA8IDQpIGN1cnJlbnRCcmljay5pbmRleCsrXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGV0ZTpcIiwgY3VycmVudEJyaWNrKVxuICAgICAgICAgICAgICAgIHNwcml0ZXNQYWludGVyLnJlbW92ZShjdXJyZW50QnJpY2spXG4gICAgICAgICAgICAgICAgYnJpY2tzLmRlbGV0ZShrZXkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBicmljayA9IHNwcml0ZXNQYWludGVyLmFkZCh7XG4gICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgIGh1ZTogTWF0aC5yYW5kb20oKSAqIDAuOCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBicmlja3Muc2V0KGtleSwgYnJpY2spXG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgMTA7IGxvb3ArKykge1xuICAgICAgICBjbGljayh0Z2RDYWxjUmFuZG9tKC0xLCArMSksIHRnZENhbGNSYW5kb20oLTEsICsxKSlcbiAgICB9XG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiBjbGljayhldnQueCwgZXZ0LnkpKVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBjbGVhcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgYmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQuYWxwaGEsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3Nwcml0ZXNQYWludGVyXSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKCkgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg4LCA4KVxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wYWludCgpXG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBpbWFnZTogeyBzcHJpdGVzOiBCcmlja3NVUkwgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2JyaWNrcy5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgbG9hZDogYXNzZXRzLmltYWdlLnNwcml0ZXMsXFxuICAgIH0pXFxuICAgIGNvbnN0IGNlbGwgPSAoY29sOiBudW1iZXIsIHJvdzogbnVtYmVyKSA9PiAoe1xcbiAgICAgICAgeDogY29sIC8gMixcXG4gICAgICAgIHk6IHJvdyAvIDQsXFxuICAgICAgICB3aWR0aDogMSAvIDIsXFxuICAgICAgICBoZWlnaHQ6IDEgLyA0LFxcbiAgICB9KVxcbiAgICBjb25zdCBhdGxhczogVGdkUGFpbnRlclNwcml0ZXNBdGxhcyA9IFtdXFxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDI7IGNvbCsrKSB7XFxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAzOyByb3crKykge1xcbiAgICAgICAgICAgIGF0bGFzLnB1c2goY2VsbChjb2wsIHJvdykpXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29uc3Qgc3ByaXRlc1BhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclNwcml0ZXNIdWUoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgICAgIGF0bGFzLFxcbiAgICAgICAgYXRsYXNVbml0OiAyLFxcbiAgICB9KVxcbiAgICBjb25zdCBicmlja3MgPSBuZXcgTWFwPHN0cmluZywgVGdkU3ByaXRlPigpXFxuICAgIGNvbnN0IGNsaWNrID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XFxuICAgICAgICBjb25zdCB7IGFzcGVjdFJhdGlvIH0gPSBjb250ZXh0XFxuICAgICAgICB4ICo9IGFzcGVjdFJhdGlvID4gMSA/IGFzcGVjdFJhdGlvIDogMVxcbiAgICAgICAgaWYgKHggPCAtMSB8fCB4ID4gMSkgcmV0dXJuXFxuXFxuICAgICAgICB5ICo9IGFzcGVjdFJhdGlvID4gMSA/IDEgOiBhc3BlY3RSYXRpb1xcbiAgICAgICAgaWYgKHkgPCAtMSB8fCB5ID4gMSkgcmV0dXJuXFxuXFxuICAgICAgICB4ID0gTWF0aC5mbG9vcih4ICogMikgKiAyICsgMVxcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoeSAqIDQpICsgMC41XFxuICAgICAgICBjb25zdCBrZXkgPSBgJHt4fS8ke3l9YFxcbiAgICAgICAgY29uc3QgY3VycmVudEJyaWNrID0gYnJpY2tzLmdldChrZXkpXFxuICAgICAgICBpZiAoY3VycmVudEJyaWNrKSB7XFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRCcmljay5pbmRleCA8IDQpIGN1cnJlbnRCcmljay5pbmRleCsrXFxuICAgICAgICAgICAgZWxzZSB7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJEZWxldGU6XFxcIiwgY3VycmVudEJyaWNrKVxcbiAgICAgICAgICAgICAgICBzcHJpdGVzUGFpbnRlci5yZW1vdmUoY3VycmVudEJyaWNrKVxcbiAgICAgICAgICAgICAgICBicmlja3MuZGVsZXRlKGtleSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIGNvbnN0IGJyaWNrID0gc3ByaXRlc1BhaW50ZXIuYWRkKHtcXG4gICAgICAgICAgICAgICAgeCxcXG4gICAgICAgICAgICAgICAgeSxcXG4gICAgICAgICAgICAgICAgaHVlOiBNYXRoLnJhbmRvbSgpICogMC44LFxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgYnJpY2tzLnNldChrZXksIGJyaWNrKVxcbiAgICAgICAgfVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG4gICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCAxMDsgbG9vcCsrKSB7XFxuICAgICAgICBjbGljayh0Z2RDYWxjUmFuZG9tKC0xLCArMSksIHRnZENhbGNSYW5kb20oLTEsICsxKSlcXG4gICAgfVxcbiAgICBjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IGNsaWNrKGV2dC54LCBldnQueSkpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLmFscGhhLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbc3ByaXRlc1BhaW50ZXJdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCgpID0+IHtcXG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDgsIDgpXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0Z2RDYWxjUmFuZG9tLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyU3ByaXRlcyxcXG4gICAgVGdkUGFpbnRlclNwcml0ZXNBdGxhcyxcXG4gICAgVGdkUGFpbnRlclNwcml0ZXNIdWUsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkU3ByaXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIHdlYmdsUHJlc2V0QmxlbmQsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5cXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5pbXBvcnQgQnJpY2tzVVJMIGZyb20gXFxcIi4vYnJpY2tzLndlYnBcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2Uuc3ByaXRlcyxcXG4gICAgfSlcXG4gICAgY29uc3QgY2VsbCA9IChjb2w6IG51bWJlciwgcm93OiBudW1iZXIpID0+ICh7XFxuICAgICAgICB4OiBjb2wgLyAyLFxcbiAgICAgICAgeTogcm93IC8gNCxcXG4gICAgICAgIHdpZHRoOiAxIC8gMixcXG4gICAgICAgIGhlaWdodDogMSAvIDQsXFxuICAgIH0pXFxuICAgIGNvbnN0IGF0bGFzOiBUZ2RQYWludGVyU3ByaXRlc0F0bGFzID0gW11cXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMjsgY29sKyspIHtcXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDM7IHJvdysrKSB7XFxuICAgICAgICAgICAgYXRsYXMucHVzaChjZWxsKGNvbCwgcm93KSlcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBjb25zdCBzcHJpdGVzUGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3ByaXRlc0h1ZShjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICAgICAgYXRsYXMsXFxuICAgICAgICBhdGxhc1VuaXQ6IDIsXFxuICAgIH0pXFxuICAgIGNvbnN0IGJyaWNrcyA9IG5ldyBNYXA8c3RyaW5nLCBUZ2RTcHJpdGU+KClcXG4gICAgY29uc3QgY2xpY2sgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcXG4gICAgICAgIGNvbnN0IHsgYXNwZWN0UmF0aW8gfSA9IGNvbnRleHRcXG4gICAgICAgIHggKj0gYXNwZWN0UmF0aW8gPiAxID8gYXNwZWN0UmF0aW8gOiAxXFxuICAgICAgICBpZiAoeCA8IC0xIHx8IHggPiAxKSByZXR1cm5cXG5cXG4gICAgICAgIHkgKj0gYXNwZWN0UmF0aW8gPiAxID8gMSA6IGFzcGVjdFJhdGlvXFxuICAgICAgICBpZiAoeSA8IC0xIHx8IHkgPiAxKSByZXR1cm5cXG5cXG4gICAgICAgIHggPSBNYXRoLmZsb29yKHggKiAyKSAqIDIgKyAxXFxuICAgICAgICB5ID0gTWF0aC5mbG9vcih5ICogNCkgKyAwLjVcXG4gICAgICAgIGNvbnN0IGtleSA9IGAke3h9LyR7eX1gXFxuICAgICAgICBjb25zdCBjdXJyZW50QnJpY2sgPSBicmlja3MuZ2V0KGtleSlcXG4gICAgICAgIGlmIChjdXJyZW50QnJpY2spIHtcXG4gICAgICAgICAgICBpZiAoY3VycmVudEJyaWNrLmluZGV4IDwgNCkgY3VycmVudEJyaWNrLmluZGV4KytcXG4gICAgICAgICAgICBlbHNlIHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXFxcIkRlbGV0ZTpcXFwiLCBjdXJyZW50QnJpY2spXFxuICAgICAgICAgICAgICAgIHNwcml0ZXNQYWludGVyLnJlbW92ZShjdXJyZW50QnJpY2spXFxuICAgICAgICAgICAgICAgIGJyaWNrcy5kZWxldGUoa2V5KVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgY29uc3QgYnJpY2sgPSBzcHJpdGVzUGFpbnRlci5hZGQoe1xcbiAgICAgICAgICAgICAgICB4LFxcbiAgICAgICAgICAgICAgICB5LFxcbiAgICAgICAgICAgICAgICBodWU6IE1hdGgucmFuZG9tKCkgKiAwLjgsXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICBicmlja3Muc2V0KGtleSwgYnJpY2spXFxuICAgICAgICB9XFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICBmb3IgKGxldCBsb29wID0gMDsgbG9vcCA8IDEwOyBsb29wKyspIHtcXG4gICAgICAgIGNsaWNrKHRnZENhbGNSYW5kb20oLTEsICsxKSwgdGdkQ2FsY1JhbmRvbSgtMSwgKzEpKVxcbiAgICB9XFxuICAgIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT4gY2xpY2soZXZ0LngsIGV2dC55KSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgYmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQuYWxwaGEsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzcHJpdGVzUGFpbnRlcl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKCkgPT4ge1xcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoOCwgOClcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBpbWFnZTogeyBzcHJpdGVzOiBCcmlja3NVUkwgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1xuICAgIFwiRGV0YWlsICMxXCI6XG4gICAgICAgICdmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pO1xcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXFxuICAgICAgICAgICAgd3JhcFI6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgICAgIHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgICAgICB3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgbG9hZDogYXNzZXRzLmltYWdlLnNwcml0ZXMsXFxuICAgIH0pO1xcbiAgICBjb25zdCBjZWxsID0gKGNvbDogbnVtYmVyLCByb3c6IG51bWJlcikgPT4gKHtcXG4gICAgICAgIHg6IGNvbCAvIDgsXFxuICAgICAgICB5OiByb3cgLyAxMCxcXG4gICAgICAgIHdpZHRoOiAxIC8gOCxcXG4gICAgICAgIGhlaWdodDogMSAvIDEwLFxcbiAgICB9KTtcXG4gICAgY29uc3QgYXRsYXM6IFRnZFBhaW50ZXJTcHJpdGVzQXRsYXMgPSBbXTtcXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XFxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA4OyBjb2wrKykge1xcbiAgICAgICAgICAgIGF0bGFzLnB1c2goY2VsbChjb2wsIHJvdykpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IHNwcml0ZXNQYWludGVyMSA9IG5ldyBUZ2RQYWludGVyU3ByaXRlcyhjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICAgICAgYXRsYXMsXFxuICAgICAgICBhdGxhc1VuaXQ6IDUsXFxuICAgIH0pO1xcbiAgICBjb25zdCBzcHJpdGVzUGFpbnRlcjIgPSBuZXcgVGdkUGFpbnRlclNwcml0ZXMoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgICAgIGF0bGFzLFxcbiAgICAgICAgYXRsYXNVbml0OiA1LFxcbiAgICB9KTtcXG4gICAgY29uc3Qgc3ByaXRlczogVGdkU3ByaXRlW10gPSBbXTtcXG4gICAgZm9yIChsZXQgeCA9IC03OyB4IDwgODsgeCsrKSB7XFxuICAgICAgICBmb3IgKGxldCB5ID0gLTM7IHkgPCA0OyB5ICs9IDIpIHtcXG4gICAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IDE7IHogKz0gMC4xKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZTEgPSBzcHJpdGVzUGFpbnRlcjEuYWRkKHt9KTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMS54ID0geDtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMS55ID0geTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMS56ID0gLXogKiAxMDA7XFxuICAgICAgICAgICAgICAgIGlmICh0Z2RDYWxjUmFuZG9tKCkgPCAwLjUpIHNwcml0ZTEuc2NhbGVYID0gLTE7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTEuaW5kZXggPSBNYXRoLmZsb29yKHRnZENhbGNSYW5kb20oMCwgNDApKTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlcy5wdXNoKHNwcml0ZTEpO1xcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUyID0gc3ByaXRlc1BhaW50ZXIyLmFkZCh7fSk7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTIueCA9IHg7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTIueSA9IHk7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTIueiA9IC16ICogMTAwIC0gMTAwO1xcbiAgICAgICAgICAgICAgICBpZiAodGdkQ2FsY1JhbmRvbSgpIDwgMC41KSBzcHJpdGUyLnNjYWxlWCA9IC0xO1xcbiAgICAgICAgICAgICAgICBzcHJpdGUyLmluZGV4ID0gTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDcyKSk7XFxuICAgICAgICAgICAgICAgIHNwcml0ZXMucHVzaChzcHJpdGUyKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29uc3QgU1RFUFM6IG51bWJlcltdID0gW1xcbiAgICAgICAgMyxcXG4gICAgICAgIDIsXFxuICAgICAgICAxLFxcbiAgICAgICAgMCxcXG4gICAgICAgIDcsXFxuICAgICAgICA2LFxcbiAgICAgICAgNSxcXG4gICAgICAgIDQsXFxuICAgICAgICA5LFxcbiAgICAgICAgMTAsXFxuICAgICAgICAxMSxcXG4gICAgICAgIDgsXFxuICAgICAgICAxMSxcXG4gICAgICAgIDEyLFxcbiAgICAgICAgMTAsXFxuICAgICAgICAxNSxcXG4gICAgXTtcXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XFxuICAgICAgICBTVEVQUy5wdXNoKFNURVBTW2ldICsgMTYpO1xcbiAgICB9XFxuICAgIFNURVBTLnB1c2goMzIsIDM0LCAzNSwgMzYsIDMzLCAzNywgMzksIDM4KTtcXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKSB7XFxuICAgICAgICBTVEVQUy5wdXNoKFNURVBTW2ldICsgNDApO1xcbiAgICB9XFxuICAgIGNvbnN0IGludGVydmFsID0gbmV3IFRnZFRpbWVJbnRlcnZhbCh7XFxuICAgICAgICBpbnRlcnZhbEluU2Vjb25kczogMC4yLFxcbiAgICAgICAgYWN0aW9uKHRpbWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIHNwcml0ZXMpIHtcXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFN0ZXAgPSBTVEVQU1tzcHJpdGUuaW5kZXhdO1xcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5leHRTdGVwID09PSBcIm51bWJlclwiKSB7XFxuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuaW5kZXggPSBuZXh0U3RlcDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgIH0pO1xcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3Nwcml0ZXNQYWludGVyMSwgc3ByaXRlc1BhaW50ZXIyXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsYXkpID0+IHtcXG4gICAgICAgICAgICBpbnRlcnZhbC51cGRhdGUodGltZSwgZGVsYXkpO1xcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIHNwcml0ZXMpIHtcXG4gICAgICAgICAgICAgICAgc3ByaXRlLmFuZ2xlID0gdGdkQ2FsY0RlZ1RvUmFkKDMwICogTWF0aC5zaW4odGltZSkpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBjb25zdCB0ID0gdGdkQ2FsY01vZHVsbyh0aW1lICogMC4wNSwgMCwgMSk7XFxuICAgICAgICAgICAgY29uc3QgeiA9IHRnZENhbGNNaXgoMCwgLTEwMCwgdCk7XFxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAwLCB6KTtcXG4gICAgICAgIH0pLFxcbiAgICApO1xcbiAgICBjb250ZXh0LnBsYXkoKTtcXG59Jyxcbn1cbmNvbnN0IEZVTEwgPVxuICAgICdpbXBvcnQge1xcbiAgICB0Z2RDYWxjRGVnVG9SYWQsXFxuICAgIHRnZENhbGNNaXgsXFxuICAgIHRnZENhbGNNb2R1bG8sXFxuICAgIHRnZENhbGNSYW5kb20sXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlclNwcml0ZXMsXFxuICAgIFRnZFBhaW50ZXJTcHJpdGVzQXRsYXMsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkU3ByaXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIFRnZFRpbWVJbnRlcnZhbCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xcblxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xcblxcbmltcG9ydCBTcHJpdGVzVVJMIGZyb20gXCIuL3Nwcml0ZXMud2VicFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcIk5FQVJFU1RcIixcXG4gICAgICAgICAgICB3cmFwUjogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgd3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgICAgIHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2Uuc3ByaXRlcyxcXG4gICAgfSk7XFxuICAgIGNvbnN0IGNlbGwgPSAoY29sOiBudW1iZXIsIHJvdzogbnVtYmVyKSA9PiAoe1xcbiAgICAgICAgeDogY29sIC8gOCxcXG4gICAgICAgIHk6IHJvdyAvIDEwLFxcbiAgICAgICAgd2lkdGg6IDEgLyA4LFxcbiAgICAgICAgaGVpZ2h0OiAxIC8gMTAsXFxuICAgIH0pO1xcbiAgICBjb25zdCBhdGxhczogVGdkUGFpbnRlclNwcml0ZXNBdGxhcyA9IFtdO1xcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDg7IGNvbCsrKSB7XFxuICAgICAgICAgICAgYXRsYXMucHVzaChjZWxsKGNvbCwgcm93KSk7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29uc3Qgc3ByaXRlc1BhaW50ZXIxID0gbmV3IFRnZFBhaW50ZXJTcHJpdGVzKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmUsXFxuICAgICAgICBhdGxhcyxcXG4gICAgICAgIGF0bGFzVW5pdDogNSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHNwcml0ZXNQYWludGVyMiA9IG5ldyBUZ2RQYWludGVyU3ByaXRlcyhjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICAgICAgYXRsYXMsXFxuICAgICAgICBhdGxhc1VuaXQ6IDUsXFxuICAgIH0pO1xcbiAgICBjb25zdCBzcHJpdGVzOiBUZ2RTcHJpdGVbXSA9IFtdO1xcbiAgICBmb3IgKGxldCB4ID0gLTc7IHggPCA4OyB4KyspIHtcXG4gICAgICAgIGZvciAobGV0IHkgPSAtMzsgeSA8IDQ7IHkgKz0gMikge1xcbiAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgMTsgeiArPSAwLjEpIHtcXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlMSA9IHNwcml0ZXNQYWludGVyMS5hZGQoe30pO1xcbiAgICAgICAgICAgICAgICBzcHJpdGUxLnggPSB4O1xcbiAgICAgICAgICAgICAgICBzcHJpdGUxLnkgPSB5O1xcbiAgICAgICAgICAgICAgICBzcHJpdGUxLnogPSAteiAqIDEwMDtcXG4gICAgICAgICAgICAgICAgaWYgKHRnZENhbGNSYW5kb20oKSA8IDAuNSkgc3ByaXRlMS5zY2FsZVggPSAtMTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMS5pbmRleCA9IE1hdGguZmxvb3IodGdkQ2FsY1JhbmRvbSgwLCA0MCkpO1xcbiAgICAgICAgICAgICAgICBzcHJpdGVzLnB1c2goc3ByaXRlMSk7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZTIgPSBzcHJpdGVzUGFpbnRlcjIuYWRkKHt9KTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMi54ID0geDtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMi55ID0geTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlMi56ID0gLXogKiAxMDAgLSAxMDA7XFxuICAgICAgICAgICAgICAgIGlmICh0Z2RDYWxjUmFuZG9tKCkgPCAwLjUpIHNwcml0ZTIuc2NhbGVYID0gLTE7XFxuICAgICAgICAgICAgICAgIHNwcml0ZTIuaW5kZXggPSBNYXRoLmZsb29yKHRnZENhbGNSYW5kb20oMCwgNzIpKTtcXG4gICAgICAgICAgICAgICAgc3ByaXRlcy5wdXNoKHNwcml0ZTIpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBjb25zdCBTVEVQUzogbnVtYmVyW10gPSBbXFxuICAgICAgICAzLFxcbiAgICAgICAgMixcXG4gICAgICAgIDEsXFxuICAgICAgICAwLFxcbiAgICAgICAgNyxcXG4gICAgICAgIDYsXFxuICAgICAgICA1LFxcbiAgICAgICAgNCxcXG4gICAgICAgIDksXFxuICAgICAgICAxMCxcXG4gICAgICAgIDExLFxcbiAgICAgICAgOCxcXG4gICAgICAgIDExLFxcbiAgICAgICAgMTIsXFxuICAgICAgICAxMCxcXG4gICAgICAgIDE1LFxcbiAgICBdO1xcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcXG4gICAgICAgIFNURVBTLnB1c2goU1RFUFNbaV0gKyAxNik7XFxuICAgIH1cXG4gICAgU1RFUFMucHVzaCgzMiwgMzQsIDM1LCAzNiwgMzMsIDM3LCAzOSwgMzgpO1xcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcXG4gICAgICAgIFNURVBTLnB1c2goU1RFUFNbaV0gKyA0MCk7XFxuICAgIH1cXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBuZXcgVGdkVGltZUludGVydmFsKHtcXG4gICAgICAgIGludGVydmFsSW5TZWNvbmRzOiAwLjIsXFxuICAgICAgICBhY3Rpb24odGltZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgZm9yIChjb25zdCBzcHJpdGUgb2Ygc3ByaXRlcykge1xcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0U3RlcCA9IFNURVBTW3Nwcml0ZS5pbmRleF07XFxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV4dFN0ZXAgPT09IFwibnVtYmVyXCIpIHtcXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5pbmRleCA9IG5leHRTdGVwO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgfSk7XFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbc3ByaXRlc1BhaW50ZXIxLCBzcHJpdGVzUGFpbnRlcjJdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWxheSkgPT4ge1xcbiAgICAgICAgICAgIGludGVydmFsLnVwZGF0ZSh0aW1lLCBkZWxheSk7XFxuICAgICAgICAgICAgZm9yIChjb25zdCBzcHJpdGUgb2Ygc3ByaXRlcykge1xcbiAgICAgICAgICAgICAgICBzcHJpdGUuYW5nbGUgPSB0Z2RDYWxjRGVnVG9SYWQoMzAgKiBNYXRoLnNpbih0aW1lKSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0Z2RDYWxjTW9kdWxvKHRpbWUgKiAwLjA1LCAwLCAxKTtcXG4gICAgICAgICAgICBjb25zdCB6ID0gdGdkQ2FsY01peCgwLCAtMTAwLCB0KTtcXG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDAsIHopO1xcbiAgICAgICAgfSksXFxuICAgICk7XFxuICAgIGNvbnRleHQucGxheSgpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBpbWFnZTogeyBzcHJpdGVzOiBTcHJpdGVzVVJMIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICAgICAgaW5lcnRpYVpvb206IDEwMDAsXFxuICAgICAgICAgICAgICAgIGdlbzoge1xcbiAgICAgICAgICAgICAgICAgICAgbWluTGF0OiB0Z2RDYWxjRGVnVG9SYWQoLTMwKSxcXG4gICAgICAgICAgICAgICAgICAgIG1pbkxuZzogdGdkQ2FsY0RlZ1RvUmFkKC0zMCksXFxuICAgICAgICAgICAgICAgICAgICBtYXhMYXQ6IHRnZENhbGNEZWdUb1JhZCgzMCksXFxuICAgICAgICAgICAgICAgICAgICBtYXhMbmc6IHRnZENhbGNEZWdUb1JhZCgzMCksXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgICk7XFxufVxcbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8RGVtbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IHtcbiAgICB0Z2RDYWxjRGVnVG9SYWQsXG4gICAgdGdkQ2FsY01peCxcbiAgICB0Z2RDYWxjTW9kdWxvLFxuICAgIHRnZENhbGNSYW5kb20sXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJTcHJpdGVzLFxuICAgIFRnZFBhaW50ZXJTcHJpdGVzQXRsYXMsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFNwcml0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgVGdkVGltZUludGVydmFsLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmltcG9ydCBTcHJpdGVzVVJMIGZyb20gXCIuL3Nwcml0ZXMud2VicFwiXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICAgICAgd3JhcFI6IFwiQ0xBTVBfVE9fRURHRVwiLFxuICAgICAgICAgICAgd3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxuICAgICAgICAgICAgd3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxuICAgICAgICB9LFxuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2Uuc3ByaXRlcyxcbiAgICB9KVxuICAgIGNvbnN0IGNlbGwgPSAoY29sOiBudW1iZXIsIHJvdzogbnVtYmVyKSA9PiAoe1xuICAgICAgICB4OiBjb2wgLyA4LFxuICAgICAgICB5OiByb3cgLyAxMCxcbiAgICAgICAgd2lkdGg6IDEgLyA4LFxuICAgICAgICBoZWlnaHQ6IDEgLyAxMCxcbiAgICB9KVxuICAgIGNvbnN0IGF0bGFzOiBUZ2RQYWludGVyU3ByaXRlc0F0bGFzID0gW11cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcbiAgICAgICAgICAgIGF0bGFzLnB1c2goY2VsbChjb2wsIHJvdykpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3ByaXRlc1BhaW50ZXIxID0gbmV3IFRnZFBhaW50ZXJTcHJpdGVzKGNvbnRleHQsIHtcbiAgICAgICAgdGV4dHVyZSxcbiAgICAgICAgYXRsYXMsXG4gICAgICAgIGF0bGFzVW5pdDogNSxcbiAgICB9KVxuICAgIGNvbnN0IHNwcml0ZXNQYWludGVyMiA9IG5ldyBUZ2RQYWludGVyU3ByaXRlcyhjb250ZXh0LCB7XG4gICAgICAgIHRleHR1cmUsXG4gICAgICAgIGF0bGFzLFxuICAgICAgICBhdGxhc1VuaXQ6IDUsXG4gICAgfSlcbiAgICBjb25zdCBzcHJpdGVzOiBUZ2RTcHJpdGVbXSA9IFtdXG4gICAgZm9yIChsZXQgeCA9IC03OyB4IDwgODsgeCsrKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAtMzsgeSA8IDQ7IHkgKz0gMikge1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCAxOyB6ICs9IDAuMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZTEgPSBzcHJpdGVzUGFpbnRlcjEuYWRkKHt9KVxuICAgICAgICAgICAgICAgIHNwcml0ZTEueCA9IHhcbiAgICAgICAgICAgICAgICBzcHJpdGUxLnkgPSB5XG4gICAgICAgICAgICAgICAgc3ByaXRlMS56ID0gLXogKiAxMDBcbiAgICAgICAgICAgICAgICBpZiAodGdkQ2FsY1JhbmRvbSgpIDwgMC41KSBzcHJpdGUxLnNjYWxlWCA9IC0xXG4gICAgICAgICAgICAgICAgc3ByaXRlMS5pbmRleCA9IE1hdGguZmxvb3IodGdkQ2FsY1JhbmRvbSgwLCA0MCkpXG4gICAgICAgICAgICAgICAgc3ByaXRlcy5wdXNoKHNwcml0ZTEpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlMiA9IHNwcml0ZXNQYWludGVyMi5hZGQoe30pXG4gICAgICAgICAgICAgICAgc3ByaXRlMi54ID0geFxuICAgICAgICAgICAgICAgIHNwcml0ZTIueSA9IHlcbiAgICAgICAgICAgICAgICBzcHJpdGUyLnogPSAteiAqIDEwMCAtIDEwMFxuICAgICAgICAgICAgICAgIGlmICh0Z2RDYWxjUmFuZG9tKCkgPCAwLjUpIHNwcml0ZTIuc2NhbGVYID0gLTFcbiAgICAgICAgICAgICAgICBzcHJpdGUyLmluZGV4ID0gTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDcyKSlcbiAgICAgICAgICAgICAgICBzcHJpdGVzLnB1c2goc3ByaXRlMilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBTVEVQUzogbnVtYmVyW10gPSBbMywgMiwgMSwgMCwgNywgNiwgNSwgNCwgOSwgMTAsIDExLCA4LCAxMSwgMTIsIDEwLCAxNV1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgU1RFUFMucHVzaChTVEVQU1tpXSArIDE2KVxuICAgIH1cbiAgICBTVEVQUy5wdXNoKDMyLCAzNCwgMzUsIDM2LCAzMywgMzcsIDM5LCAzOClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcbiAgICAgICAgU1RFUFMucHVzaChTVEVQU1tpXSArIDQwKVxuICAgIH1cbiAgICBjb25zdCBpbnRlcnZhbCA9IG5ldyBUZ2RUaW1lSW50ZXJ2YWwoe1xuICAgICAgICBpbnRlcnZhbEluU2Vjb25kczogMC4yLFxuICAgICAgICBhY3Rpb24odGltZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiBzcHJpdGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFN0ZXAgPSBTVEVQU1tzcHJpdGUuaW5kZXhdXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXh0U3RlcCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuaW5kZXggPSBuZXh0U3RlcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBjbGVhcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzcHJpdGVzUGFpbnRlcjEsIHNwcml0ZXNQYWludGVyMl0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWxheSkgPT4ge1xuICAgICAgICAgICAgaW50ZXJ2YWwudXBkYXRlKHRpbWUsIGRlbGF5KVxuICAgICAgICAgICAgZm9yIChjb25zdCBzcHJpdGUgb2Ygc3ByaXRlcykge1xuICAgICAgICAgICAgICAgIHNwcml0ZS5hbmdsZSA9IHRnZENhbGNEZWdUb1JhZCgzMCAqIE1hdGguc2luKHRpbWUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdCA9IHRnZENhbGNNb2R1bG8odGltZSAqIDAuMDUsIDAsIDEpXG4gICAgICAgICAgICBjb25zdCB6ID0gdGdkQ2FsY01peCgwLCAtMTAwLCB0KVxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAwLCB6KVxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGltYWdlOiB7IHNwcml0ZXM6IFNwcml0ZXNVUkwgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxuICAgICAgICAgICAgICAgIGdlbzoge1xuICAgICAgICAgICAgICAgICAgICBtaW5MYXQ6IHRnZENhbGNEZWdUb1JhZCgtMzApLFxuICAgICAgICAgICAgICAgICAgICBtaW5Mbmc6IHRnZENhbGNEZWdUb1JhZCgtMzApLFxuICAgICAgICAgICAgICAgICAgICBtYXhMYXQ6IHRnZENhbGNEZWdUb1JhZCgzMCksXG4gICAgICAgICAgICAgICAgICAgIG1heExuZzogdGdkQ2FsY0RlZ1RvUmFkKDMwKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInRnZENhbGNSYW5kb20iLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyU3ByaXRlc0h1ZSIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIndlYmdsUHJlc2V0QmxlbmQiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIkJyaWNrc1VSTCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2xlYXIiLCJ0ZXh0dXJlIiwiY2VsbCIsImNvbCIsInJvdyIsImF0bGFzIiwic3ByaXRlc1BhaW50ZXIiLCJicmlja3MiLCJNYXAiLCJjbGljayIsIngiLCJ5IiwiYXNwZWN0UmF0aW8iLCJNYXRoIiwia2V5IiwiY3VycmVudEJyaWNrIiwiY29uc29sZSIsImJyaWNrIiwibG9vcCIsImV2dCIsIkRlbW8iLCJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENhbGNEZWdUb1JhZCIsInRnZENhbGNNaXgiLCJ0Z2RDYWxjTW9kdWxvIiwiVGdkUGFpbnRlclNwcml0ZXMiLCJUZ2RUaW1lSW50ZXJ2YWwiLCJTcHJpdGVzVVJMIiwic3ByaXRlc1BhaW50ZXIxIiwic3ByaXRlc1BhaW50ZXIyIiwic3ByaXRlcyIsInoiLCJzcHJpdGUxIiwic3ByaXRlMiIsIlNURVBTIiwiaSIsImkxIiwiaW50ZXJ2YWwiLCJhY3Rpb24iLCJ0aW1lIiwiX2l0ZXJhdG9yRXJyb3IiLCJzcHJpdGUiLCJuZXh0U3RlcCIsImRlbGF5IiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhdUI7QUFFa0M7QUFFcEI7QUFFckMsU0FBUztBQUNULFNBQVNVLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDN0MsSUFBTUMsUUFBUSxJQUFJWiwrQ0FBZUEsQ0FBQ1UsU0FBUztRQUN2QyxPQUFPO1lBQUM7WUFBSztZQUFLO1lBQUs7U0FBRTtRQUN6QixPQUFPO0lBQ1g7SUFDQSxJQUFNRyxVQUFVLElBQUlULDRDQUFZQSxDQUFDTSxTQUFTO1FBQ3RDLE1BQU1DLE9BQU8sS0FBSyxDQUFDLE9BQU87SUFDOUI7SUFDQSxJQUFNRyxPQUFPLGNBQUNDLEtBQWFDO2VBQWlCO1lBQ3hDLEdBQUdELE1BQU07WUFDVCxHQUFHQyxNQUFNO1lBQ1QsT0FBTyxJQUFJO1lBQ1gsUUFBUSxJQUFJO1FBQ2hCOztJQUNBLElBQU1DLFFBQWdDLEVBQUU7SUFDeEMsSUFBSyxJQUFJRixNQUFNLEdBQUdBLE1BQU0sR0FBR0EsTUFBTztRQUM5QixJQUFLLElBQUlDLE1BQU0sR0FBR0EsTUFBTSxHQUFHQSxNQUFPO1lBQzlCQyxNQUFNLElBQUksQ0FBQ0gsS0FBS0MsS0FBS0M7UUFDekI7SUFDSjtJQUNBLElBQU1FLGlCQUFpQixJQUFJaEIsb0RBQW9CQSxDQUFDUSxTQUFTO1FBQ3JERyxTQUFBQTtRQUNBSSxPQUFBQTtRQUNBLFdBQVc7SUFDZjtJQUNBLElBQU1FLFNBQVMsSUFBSUM7SUFDbkIsSUFBTUMsUUFBUSxlQUFDQyxHQUFXQztRQUN0QixJQUFRQyxjQUFnQmQsUUFBaEJjO1FBQ1JGLEtBQUtFLGNBQWMsSUFBSUEsY0FBYztRQUNyQyxJQUFJRixJQUFJLENBQUMsS0FBS0EsSUFBSSxHQUFHO1FBRXJCQyxLQUFLQyxjQUFjLElBQUksSUFBSUE7UUFDM0IsSUFBSUQsSUFBSSxDQUFDLEtBQUtB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