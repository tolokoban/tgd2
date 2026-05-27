"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_particles_example2_page_mdx-src_components_demo_CodeViewer_CodeViewe-dddb9b"], {
63615(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/soap-bubble.252aa9de8fb3c9ab.webp";

},
45950(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(79836);
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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    console.log(\"🐞 [main.demo@22] assets =\", assets) // @FIXME: Remove this line written on 2026-05-17 at 21:42\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const dataset: TgdDataset = makeDataset(COUNT, DURATION)\n    const virtualTime = new TgdTime({ context, speed: 0 })\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: \"POINTS\",\n        textures: {\n            uniTexture: new TgdTexture2D(context).loadBitmap(assets.image.bubble),\n        },\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                },\n                uniforms: {\n                    uniTime: \"float\",\n                    uniDelta: \"float\",\n                    uniCenter: \"vec2\",\n                    uniSpeed: \"vec2\",\n                    uniSize: \"float\",\n                },\n                varying: {\n                    varAlpha: \"float\",\n                },\n                attributes: dataset.getTypeRecord(),\n                mainCode: [\n                    `float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,\n                    \"varAlpha = 1.0 - life;\",\n                    \"gl_Position = vec4(attPosition, 0, 1);\",\n                    \"gl_PointSize = uniSize * (0.1 + .9 * life * life);\",\n                    \"varPosition -= attSpeed * uniDelta * varAlpha;\",\n                    \"if (life >= 1.0) {\",\n                    [\n                        `varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,\n                        \"varPosition = uniCenter;\",\n                        \"varSpeed = normalize(uniSpeed) * 1e-1;\",\n                        \"vec2 shift = 0.3 * vec2(\",\n                        [\"perlinNoise(vec3(attRandom.xy, uniTime)),\", \"perlinNoise(vec3(attRandom.yx, uniTime))\"],\n                        \");\",\n                        \"varSpeed += shift;\",\n                    ],\n                    \"}\",\n                ],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: [\n                    \"vec4 color = texture(uniTexture, gl_PointCoord);\",\n                    \"color.a *= varAlpha;\",\n                    \"FragColor = color;\",\n                ],\n            }),\n        },\n        setUniforms: ({ _time, delta, prg }) => {\n            virtualTime.speed = 1\n            prg.uniform1f(\"uniSize\", Math.min(context.width, context.height) / 5)\n            prg.uniform1f(\"uniDelta\", delta)\n            prg.uniform1f(\"uniTime\", virtualTime.seconds)\n            prg.uniform2f(\"uniCenter\", context.inputs.pointer.x, context.inputs.pointer.y)\n            prg.uniform2f(\"uniSpeed\", context.inputs.pointer.speedX, context.inputs.pointer.speedY)\n        },\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [particles],\n        }),\n    )\n    context.play()\n}"
};
var FULL = "import {\n    tgdCalcRandom,\n    tgdCodeFunction_perlinNoise,\n    TgdContext,\n    TgdDataset,\n    TgdPainterClear,\n    TgdPainterParticles,\n    TgdPainterState,\n    TgdShaderFragment,\n    TgdShaderVertex,\n    TgdTexture2D,\n    TgdTime,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport BubbleURL from \"./soap-bubble.webp\"\n\nconst COUNT = 50000\nconst DURATION = 5\n\nfunction init(context: TgdContext, assets: Assets) {\n    console.log(\"🐞 [main.demo@22] assets =\", assets) // @FIXME: Remove this line written on 2026-05-17 at 21:42\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const dataset: TgdDataset = makeDataset(COUNT, DURATION)\n    const virtualTime = new TgdTime({ context, speed: 0 })\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: \"POINTS\",\n        textures: {\n            uniTexture: new TgdTexture2D(context).loadBitmap(assets.image.bubble),\n        },\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                },\n                uniforms: {\n                    uniTime: \"float\",\n                    uniDelta: \"float\",\n                    uniCenter: \"vec2\",\n                    uniSpeed: \"vec2\",\n                    uniSize: \"float\",\n                },\n                varying: {\n                    varAlpha: \"float\",\n                },\n                attributes: dataset.getTypeRecord(),\n                mainCode: [\n                    `float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,\n                    \"varAlpha = 1.0 - life;\",\n                    \"gl_Position = vec4(attPosition, 0, 1);\",\n                    \"gl_PointSize = uniSize * (0.1 + .9 * life * life);\",\n                    \"varPosition -= attSpeed * uniDelta * varAlpha;\",\n                    \"if (life >= 1.0) {\",\n                    [\n                        `varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,\n                        \"varPosition = uniCenter;\",\n                        \"varSpeed = normalize(uniSpeed) * 1e-1;\",\n                        \"vec2 shift = 0.3 * vec2(\",\n                        [\"perlinNoise(vec3(attRandom.xy, uniTime)),\", \"perlinNoise(vec3(attRandom.yx, uniTime))\"],\n                        \");\",\n                        \"varSpeed += shift;\",\n                    ],\n                    \"}\",\n                ],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: [\n                    \"vec4 color = texture(uniTexture, gl_PointCoord);\",\n                    \"color.a *= varAlpha;\",\n                    \"FragColor = color;\",\n                ],\n            }),\n        },\n        setUniforms: ({ _time, delta, prg }) => {\n            virtualTime.speed = 1\n            prg.uniform1f(\"uniSize\", Math.min(context.width, context.height) / 5)\n            prg.uniform1f(\"uniDelta\", delta)\n            prg.uniform1f(\"uniTime\", virtualTime.seconds)\n            prg.uniform2f(\"uniCenter\", context.inputs.pointer.x, context.inputs.pointer.y)\n            prg.uniform2f(\"uniSpeed\", context.inputs.pointer.speedX, context.inputs.pointer.speedY)\n        },\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [particles],\n        }),\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: {\n                    bubble: BubbleURL,\n                },\n            }}\n        />\n    )\n}\n\nfunction makeDataset(count: number, duration: number): TgdDataset {\n    const dataset = new TgdDataset({\n        attPosition: \"vec2\",\n        attSpeed: \"vec2\",\n        attBirth: \"float\",\n        attRandom: \"vec2\",\n    })\n    const attPosition: number[] = []\n    const attSpeed: number[] = []\n    const attBirth: number[] = []\n    const attRandom: number[] = []\n    const rnd = (min = 0, max = 1) => tgdCalcRandom(min, max)\n    for (let i = 0; i < count; i++) {\n        attPosition.push(rnd(-1, +1), rnd(-1, +1))\n        attSpeed.push(rnd(-0.1, +0.1), rnd(-0.1, +0.1))\n        attBirth.push((i / count) * duration)\n        attRandom.push(rnd(), rnd())\n    }\n    dataset.set(\"attPosition\", new Float32Array(attPosition))\n    dataset.set(\"attSpeed\", new Float32Array(attSpeed))\n    dataset.set(\"attBirth\", new Float32Array(attBirth))\n    dataset.set(\"attRandom\", new Float32Array(attRandom))\n    return dataset\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
79836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _soap_bubble_webp__rspack_import_3 = __webpack_require__(63615);
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




var COUNT = 50000;
var DURATION = 5;
// #begin
function init(context, assets) {
    console.log("🐞 [main.demo@22] assets =", assets); // @FIXME: Remove this line written on 2026-05-17 at 21:42
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0,
            0,
            1
        ],
        depth: 1
    });
    var dataset = makeDataset(COUNT, DURATION);
    var virtualTime = new _tolokoban_tgd__rspack_import_1.TgdTime({
        context: context,
        speed: 0
    });
    var particles = new _tolokoban_tgd__rspack_import_1.TgdPainterParticles(context, {
        dataset: dataset,
        drawMode: "POINTS",
        textures: {
            uniTexture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.bubble)
        },
        shader: {
            vert: new _tolokoban_tgd__rspack_import_1.TgdShaderVertex({
                functions: _object_spread({}, (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_perlinNoise)()),
                uniforms: {
                    uniTime: "float",
                    uniDelta: "float",
                    uniCenter: "vec2",
                    uniSpeed: "vec2",
                    uniSize: "float"
                },
                varying: {
                    varAlpha: "float"
                },
                attributes: dataset.getTypeRecord(),
                mainCode: [
                    "float life = clamp((uniTime - attBirth) * ".concat((1 / DURATION).toFixed(6), ", 0.0, 1.0);"),
                    "varAlpha = 1.0 - life;",
                    "gl_Position = vec4(attPosition, 0, 1);",
                    "gl_PointSize = uniSize * (0.1 + .9 * life * life);",
                    "varPosition -= attSpeed * uniDelta * varAlpha;",
                    "if (life >= 1.0) {",
                    [
                        "varBirth = uniTime + attRandom.x * ".concat(DURATION.toFixed(3), ";"),
                        "varPosition = uniCenter;",
                        "varSpeed = normalize(uniSpeed) * 1e-1;",
                        "vec2 shift = 0.3 * vec2(",
                        [
                            "perlinNoise(vec3(attRandom.xy, uniTime)),",
                            "perlinNoise(vec3(attRandom.yx, uniTime))"
                        ],
                        ");",
                        "varSpeed += shift;"
                    ],
                    "}"
                ]
            }),
            frag: new _tolokoban_tgd__rspack_import_1.TgdShaderFragment({
                mainCode: [
                    "vec4 color = texture(uniTexture, gl_PointCoord);",
                    "color.a *= varAlpha;",
                    "FragColor = color;"
                ]
            })
        },
        setUniforms: function setUniforms(param) {
            var _time = param._time, delta = param.delta, prg = param.prg;
            virtualTime.speed = 1;
            prg.uniform1f("uniSize", Math.min(context.width, context.height) / 5);
            prg.uniform1f("uniDelta", delta);
            prg.uniform1f("uniTime", virtualTime.seconds);
            prg.uniform2f("uniCenter", context.inputs.pointer.x, context.inputs.pointer.y);
            prg.uniform2f("uniSpeed", context.inputs.pointer.speedX, context.inputs.pointer.speedY);
        }
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        blend: "alpha",
        children: [
            particles
        ]
    }));
    context.play();
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        assets: {
            image: {
                bubble: _soap_bubble_webp__rspack_import_3
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/main.demo.tsx",
        lineNumber: 99,
        columnNumber: 9
    }, this);
}
function makeDataset(count, duration) {
    var dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        attPosition: "vec2",
        attSpeed: "vec2",
        attBirth: "float",
        attRandom: "vec2"
    });
    var attPosition = [];
    var attSpeed = [];
    var attBirth = [];
    var attRandom = [];
    var rnd = function rnd() {
        var min = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, max = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(min, max);
    };
    for(var i = 0; i < count; i++){
        attPosition.push(rnd(-1, +1), rnd(-1, +1));
        attSpeed.push(rnd(-0.1, +0.1), rnd(-0.1, +0.1));
        attBirth.push(i / count * duration);
        attRandom.push(rnd(), rnd());
    }
    dataset.set("attPosition", new Float32Array(attPosition));
    dataset.set("attSpeed", new Float32Array(attSpeed));
    dataset.set("attBirth", new Float32Array(attBirth));
    dataset.set("attRandom", new Float32Array(attRandom));
    return dataset;
}


},
68403(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(45950);
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
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterParticles.html",
                    children: "TgdPainterParticles"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move your mouse around to disturb the foam."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTJfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS1kZGRiOWIuZDVmMGZkOThmNTkyYWE2Zi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wYXJ0aWNsZXMvZXhhbXBsZTIvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wYXJ0aWNsZXMvZXhhbXBsZTIvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUyL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc29sZS5sb2coXFxcIvCfkJ4gW21haW4uZGVtb0AyMl0gYXNzZXRzID1cXFwiLCBhc3NldHMpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDUtMTcgYXQgMjE6NDJcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgY29uc3QgZGF0YXNldDogVGdkRGF0YXNldCA9IG1ha2VEYXRhc2V0KENPVU5ULCBEVVJBVElPTilcXG4gICAgY29uc3QgdmlydHVhbFRpbWUgPSBuZXcgVGdkVGltZSh7IGNvbnRleHQsIHNwZWVkOiAwIH0pXFxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcXG4gICAgICAgIGRhdGFzZXQsXFxuICAgICAgICBkcmF3TW9kZTogXFxcIlBPSU5UU1xcXCIsXFxuICAgICAgICB0ZXh0dXJlczoge1xcbiAgICAgICAgICAgIHVuaVRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuYnViYmxlKSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzaGFkZXI6IHtcXG4gICAgICAgICAgICB2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHVuaVRpbWU6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlEZWx0YTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaUNlbnRlcjogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pU3BlZWQ6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaVNpemU6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHZhcnlpbmc6IHtcXG4gICAgICAgICAgICAgICAgICAgIHZhckFscGhhOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICAgICAgICAgIGBmbG9hdCBsaWZlID0gY2xhbXAoKHVuaVRpbWUgLSBhdHRCaXJ0aCkgKiAkeygxIC8gRFVSQVRJT04pLnRvRml4ZWQoNil9LCAwLjAsIDEuMCk7YCxcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJBbHBoYSA9IDEuMCAtIGxpZmU7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJnbF9Qb3NpdGlvbiA9IHZlYzQoYXR0UG9zaXRpb24sIDAsIDEpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZ2xfUG9pbnRTaXplID0gdW5pU2l6ZSAqICgwLjEgKyAuOSAqIGxpZmUgKiBsaWZlKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZhclBvc2l0aW9uIC09IGF0dFNwZWVkICogdW5pRGVsdGEgKiB2YXJBbHBoYTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImlmIChsaWZlID49IDEuMCkge1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBbXFxuICAgICAgICAgICAgICAgICAgICAgICAgYHZhckJpcnRoID0gdW5pVGltZSArIGF0dFJhbmRvbS54ICogJHtEVVJBVElPTi50b0ZpeGVkKDMpfTtgLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiA9IHVuaUNlbnRlcjtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJTcGVlZCA9IG5vcm1hbGl6ZSh1bmlTcGVlZCkgKiAxZS0xO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZlYzIgc2hpZnQgPSAwLjMgKiB2ZWMyKFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS54eSwgdW5pVGltZSkpLFxcXCIsIFxcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS55eCwgdW5pVGltZSkpXFxcIl0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIik7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmFyU3BlZWQgKz0gc2hpZnQ7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgICAgICBcXFwifVxcXCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCBnbF9Qb2ludENvb3JkKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImNvbG9yLmEgKj0gdmFyQWxwaGE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSBjb2xvcjtcXFwiLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHNldFVuaWZvcm1zOiAoeyBfdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XFxuICAgICAgICAgICAgdmlydHVhbFRpbWUuc3BlZWQgPSAxXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pU2l6ZVxcXCIsIE1hdGgubWluKGNvbnRleHQud2lkdGgsIGNvbnRleHQuaGVpZ2h0KSAvIDUpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pRGVsdGFcXFwiLCBkZWx0YSlcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlUaW1lXFxcIiwgdmlydHVhbFRpbWUuc2Vjb25kcylcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTJmKFxcXCJ1bmlDZW50ZXJcXFwiLCBjb250ZXh0LmlucHV0cy5wb2ludGVyLngsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueSlcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTJmKFxcXCJ1bmlTcGVlZFxcXCIsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuc3BlZWRYLCBjb250ZXh0LmlucHV0cy5wb2ludGVyLnNwZWVkWSlcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBibGVuZDogXFxcImFscGhhXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3BhcnRpY2xlc10sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHRnZENhbGNSYW5kb20sXFxuICAgIHRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkRGF0YXNldCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyUGFydGljbGVzLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFNoYWRlckZyYWdtZW50LFxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgVGdkVGltZSxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5pbXBvcnQgQnViYmxlVVJMIGZyb20gXFxcIi4vc29hcC1idWJibGUud2VicFxcXCJcXG5cXG5jb25zdCBDT1VOVCA9IDUwMDAwXFxuY29uc3QgRFVSQVRJT04gPSA1XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFpbi5kZW1vQDIyXSBhc3NldHMgPVxcXCIsIGFzc2V0cykgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNS0xNyBhdCAyMTo0MlxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKVxcbiAgICBjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSlcXG4gICAgY29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xcbiAgICAgICAgZGF0YXNldCxcXG4gICAgICAgIGRyYXdNb2RlOiBcXFwiUE9JTlRTXFxcIixcXG4gICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgdW5pVGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5idWJibGUpLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHNoYWRlcjoge1xcbiAgICAgICAgICAgIHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgICAgICAgICAgdW5pVGltZTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaURlbHRhOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pQ2VudGVyOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlTcGVlZDogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pU2l6ZTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgdmFyeWluZzoge1xcbiAgICAgICAgICAgICAgICAgICAgdmFyQWxwaGE6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGRhdGFzZXQuZ2V0VHlwZVJlY29yZCgpLFxcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgYGZsb2F0IGxpZmUgPSBjbGFtcCgodW5pVGltZSAtIGF0dEJpcnRoKSAqICR7KDEgLyBEVVJBVElPTikudG9GaXhlZCg2KX0sIDAuMCwgMS4wKTtgLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZhckFscGhhID0gMS4wIC0gbGlmZTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb3NpdGlvbiwgMCwgMSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJnbF9Qb2ludFNpemUgPSB1bmlTaXplICogKDAuMSArIC45ICogbGlmZSAqIGxpZmUpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyUG9zaXRpb24gLT0gYXR0U3BlZWQgKiB1bmlEZWx0YSAqIHZhckFscGhhO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiaWYgKGxpZmUgPj0gMS4wKSB7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFtcXG4gICAgICAgICAgICAgICAgICAgICAgICBgdmFyQmlydGggPSB1bmlUaW1lICsgYXR0UmFuZG9tLnggKiAke0RVUkFUSU9OLnRvRml4ZWQoMyl9O2AsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZhclBvc2l0aW9uID0gdW5pQ2VudGVyO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZhclNwZWVkID0gbm9ybWFsaXplKHVuaVNwZWVkKSAqIDFlLTE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmVjMiBzaGlmdCA9IDAuMyAqIHZlYzIoXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBbXFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnh5LCB1bmlUaW1lKSksXFxcIiwgXFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcXFwiXSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJTcGVlZCArPSBzaGlmdDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ9XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgXFxcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiY29sb3IuYSAqPSB2YXJBbHBoYTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcIkZyYWdDb2xvciA9IGNvbG9yO1xcXCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0VW5pZm9ybXM6ICh7IF90aW1lLCBkZWx0YSwgcHJnIH0pID0+IHtcXG4gICAgICAgICAgICB2aXJ0dWFsVGltZS5zcGVlZCA9IDFcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlTaXplXFxcIiwgTWF0aC5taW4oY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpIC8gNSlcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlEZWx0YVxcXCIsIGRlbHRhKVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaVRpbWVcXFwiLCB2aXJ0dWFsVGltZS5zZWNvbmRzKVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXFxcInVuaUNlbnRlclxcXCIsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueCwgY29udGV4dC5pbnB1dHMucG9pbnRlci55KVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXFxcInVuaVNwZWVkXFxcIiwgY29udGV4dC5pbnB1dHMucG9pbnRlci5zcGVlZFgsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuc3BlZWRZKVxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbcGFydGljbGVzXSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICBidWJibGU6IEJ1YmJsZVVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlRGF0YXNldChjb3VudDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogVGdkRGF0YXNldCB7XFxuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuICAgICAgICBhdHRQb3NpdGlvbjogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgYXR0U3BlZWQ6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgIGF0dEJpcnRoOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgYXR0UmFuZG9tOiBcXFwidmVjMlxcXCIsXFxuICAgIH0pXFxuICAgIGNvbnN0IGF0dFBvc2l0aW9uOiBudW1iZXJbXSA9IFtdXFxuICAgIGNvbnN0IGF0dFNwZWVkOiBudW1iZXJbXSA9IFtdXFxuICAgIGNvbnN0IGF0dEJpcnRoOiBudW1iZXJbXSA9IFtdXFxuICAgIGNvbnN0IGF0dFJhbmRvbTogbnVtYmVyW10gPSBbXVxcbiAgICBjb25zdCBybmQgPSAobWluID0gMCwgbWF4ID0gMSkgPT4gdGdkQ2FsY1JhbmRvbShtaW4sIG1heClcXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XFxuICAgICAgICBhdHRQb3NpdGlvbi5wdXNoKHJuZCgtMSwgKzEpLCBybmQoLTEsICsxKSlcXG4gICAgICAgIGF0dFNwZWVkLnB1c2gocm5kKC0wLjEsICswLjEpLCBybmQoLTAuMSwgKzAuMSkpXFxuICAgICAgICBhdHRCaXJ0aC5wdXNoKChpIC8gY291bnQpICogZHVyYXRpb24pXFxuICAgICAgICBhdHRSYW5kb20ucHVzaChybmQoKSwgcm5kKCkpXFxuICAgIH1cXG4gICAgZGF0YXNldC5zZXQoXFxcImF0dFBvc2l0aW9uXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRQb3NpdGlvbikpXFxuICAgIGRhdGFzZXQuc2V0KFxcXCJhdHRTcGVlZFxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0U3BlZWQpKVxcbiAgICBkYXRhc2V0LnNldChcXFwiYXR0QmlydGhcXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dEJpcnRoKSlcXG4gICAgZGF0YXNldC5zZXQoXFxcImF0dFJhbmRvbVxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0UmFuZG9tKSlcXG4gICAgcmV0dXJuIGRhdGFzZXRcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdGdkQ2FsY1JhbmRvbSxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyUGFydGljbGVzLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFRpbWUsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgQnViYmxlVVJMIGZyb20gXCIuL3NvYXAtYnViYmxlLndlYnBcIlxuXG5jb25zdCBDT1VOVCA9IDUwMDAwXG5jb25zdCBEVVJBVElPTiA9IDVcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgY29uc29sZS5sb2coXCLwn5CeIFttYWluLmRlbW9AMjJdIGFzc2V0cyA9XCIsIGFzc2V0cykgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNS0xNyBhdCAyMTo0MlxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pXG4gICAgY29uc3QgZGF0YXNldDogVGdkRGF0YXNldCA9IG1ha2VEYXRhc2V0KENPVU5ULCBEVVJBVElPTilcbiAgICBjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSlcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XG4gICAgICAgIGRhdGFzZXQsXG4gICAgICAgIGRyYXdNb2RlOiBcIlBPSU5UU1wiLFxuICAgICAgICB0ZXh0dXJlczoge1xuICAgICAgICAgICAgdW5pVGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5idWJibGUpLFxuICAgICAgICB9LFxuICAgICAgICBzaGFkZXI6IHtcbiAgICAgICAgICAgIHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHVuaVRpbWU6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgdW5pRGVsdGE6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgdW5pQ2VudGVyOiBcInZlYzJcIixcbiAgICAgICAgICAgICAgICAgICAgdW5pU3BlZWQ6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgICAgICB1bmlTaXplOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2YXJ5aW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhckFscGhhOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgICAgICBgZmxvYXQgbGlmZSA9IGNsYW1wKCh1bmlUaW1lIC0gYXR0QmlydGgpICogJHsoMSAvIERVUkFUSU9OKS50b0ZpeGVkKDYpfSwgMC4wLCAxLjApO2AsXG4gICAgICAgICAgICAgICAgICAgIFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb3NpdGlvbiwgMCwgMSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ2xfUG9pbnRTaXplID0gdW5pU2l6ZSAqICgwLjEgKyAuOSAqIGxpZmUgKiBsaWZlKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogdmFyQWxwaGE7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWYgKGxpZmUgPj0gMS4wKSB7XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGB2YXJCaXJ0aCA9IHVuaVRpbWUgKyBhdHRSYW5kb20ueCAqICR7RFVSQVRJT04udG9GaXhlZCgzKX07YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFyUG9zaXRpb24gPSB1bmlDZW50ZXI7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhclNwZWVkID0gbm9ybWFsaXplKHVuaVNwZWVkKSAqIDFlLTE7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlYzIgc2hpZnQgPSAwLjMgKiB2ZWMyKFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1wicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueHksIHVuaVRpbWUpKSxcIiwgXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS55eCwgdW5pVGltZSkpXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YXJTcGVlZCArPSBzaGlmdDtcIixcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJ9XCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgICAgICBcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yLmEgKj0gdmFyQWxwaGE7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gY29sb3I7XCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xuICAgICAgICAgICAgdmlydHVhbFRpbWUuc3BlZWQgPSAxXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFwidW5pU2l6ZVwiLCBNYXRoLm1pbihjb250ZXh0LndpZHRoLCBjb250ZXh0LmhlaWdodCkgLyA1KVxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcInVuaURlbHRhXCIsIGRlbHRhKVxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcInVuaVRpbWVcIiwgdmlydHVhbFRpbWUuc2Vjb25kcylcbiAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXCJ1bmlDZW50ZXJcIiwgY29udGV4dC5pbnB1dHMucG9pbnRlci54LCBjb250ZXh0LmlucHV0cy5wb2ludGVyLnkpXG4gICAgICAgICAgICBwcmcudW5pZm9ybTJmKFwidW5pU3BlZWRcIiwgY29udGV4dC5pbnB1dHMucG9pbnRlci5zcGVlZFgsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuc3BlZWRZKVxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGJsZW5kOiBcImFscGhhXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3BhcnRpY2xlc10sXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlOiBCdWJibGVVUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBtYWtlRGF0YXNldChjb3VudDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogVGdkRGF0YXNldCB7XG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgYXR0UG9zaXRpb246IFwidmVjMlwiLFxuICAgICAgICBhdHRTcGVlZDogXCJ2ZWMyXCIsXG4gICAgICAgIGF0dEJpcnRoOiBcImZsb2F0XCIsXG4gICAgICAgIGF0dFJhbmRvbTogXCJ2ZWMyXCIsXG4gICAgfSlcbiAgICBjb25zdCBhdHRQb3NpdGlvbjogbnVtYmVyW10gPSBbXVxuICAgIGNvbnN0IGF0dFNwZWVkOiBudW1iZXJbXSA9IFtdXG4gICAgY29uc3QgYXR0QmlydGg6IG51bWJlcltdID0gW11cbiAgICBjb25zdCBhdHRSYW5kb206IG51bWJlcltdID0gW11cbiAgICBjb25zdCBybmQgPSAobWluID0gMCwgbWF4ID0gMSkgPT4gdGdkQ2FsY1JhbmRvbShtaW4sIG1heClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgYXR0UG9zaXRpb24ucHVzaChybmQoLTEsICsxKSwgcm5kKC0xLCArMSkpXG4gICAgICAgIGF0dFNwZWVkLnB1c2gocm5kKC0wLjEsICswLjEpLCBybmQoLTAuMSwgKzAuMSkpXG4gICAgICAgIGF0dEJpcnRoLnB1c2goKGkgLyBjb3VudCkgKiBkdXJhdGlvbilcbiAgICAgICAgYXR0UmFuZG9tLnB1c2gocm5kKCksIHJuZCgpKVxuICAgIH1cbiAgICBkYXRhc2V0LnNldChcImF0dFBvc2l0aW9uXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0UG9zaXRpb24pKVxuICAgIGRhdGFzZXQuc2V0KFwiYXR0U3BlZWRcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRTcGVlZCkpXG4gICAgZGF0YXNldC5zZXQoXCJhdHRCaXJ0aFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dEJpcnRoKSlcbiAgICBkYXRhc2V0LnNldChcImF0dFJhbmRvbVwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFJhbmRvbSkpXG4gICAgcmV0dXJuIGRhdGFzZXRcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQ2FsY1JhbmRvbSIsInRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSIsIlRnZERhdGFzZXQiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyUGFydGljbGVzIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkU2hhZGVyRnJhZ21lbnQiLCJUZ2RTaGFkZXJWZXJ0ZXgiLCJUZ2RUZXh0dXJlMkQiLCJUZ2RUaW1lIiwiVmlldyIsIkJ1YmJsZVVSTCIsIkNPVU5UIiwiRFVSQVRJT04iLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNvbnNvbGUiLCJjbGVhciIsImRhdGFzZXQiLCJtYWtlRGF0YXNldCIsInZpcnR1YWxUaW1lIiwicGFydGljbGVzIiwic2V0VW5pZm9ybXMiLCJfdGltZSIsImRlbHRhIiwicHJnIiwiTWF0aCIsImNvdW50IiwiZHVyYXRpb24iLCJhdHRQb3NpdGlvbiIsImF0dFNwZWVkIiwiYXR0QmlydGgiLCJhdHRSYW5kb20iLCJybmQiLCJtaW4iLCJtYXgiLCJpIiwiRmxvYXQzMkFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUFzbEc7QUFDam5HLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRB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