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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/_/main.demo/main.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move your mouse around to disturb the foam."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example2/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTJfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS1kZGRiOWIuYjUzMWMzNjMxNDQyOWU2YS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BhcnRpY2xlcy9leGFtcGxlMi9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUyL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUyL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFpbi5kZW1vQDIyXSBhc3NldHMgPVxcXCIsIGFzc2V0cykgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNS0xNyBhdCAyMTo0MlxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKVxcbiAgICBjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSlcXG4gICAgY29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xcbiAgICAgICAgZGF0YXNldCxcXG4gICAgICAgIGRyYXdNb2RlOiBcXFwiUE9JTlRTXFxcIixcXG4gICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgdW5pVGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5idWJibGUpLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHNoYWRlcjoge1xcbiAgICAgICAgICAgIHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgICAgICAgICAgdW5pVGltZTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaURlbHRhOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pQ2VudGVyOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlTcGVlZDogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pU2l6ZTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgdmFyeWluZzoge1xcbiAgICAgICAgICAgICAgICAgICAgdmFyQWxwaGE6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGRhdGFzZXQuZ2V0VHlwZVJlY29yZCgpLFxcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgYGZsb2F0IGxpZmUgPSBjbGFtcCgodW5pVGltZSAtIGF0dEJpcnRoKSAqICR7KDEgLyBEVVJBVElPTikudG9GaXhlZCg2KX0sIDAuMCwgMS4wKTtgLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZhckFscGhhID0gMS4wIC0gbGlmZTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb3NpdGlvbiwgMCwgMSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJnbF9Qb2ludFNpemUgPSB1bmlTaXplICogKDAuMSArIC45ICogbGlmZSAqIGxpZmUpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyUG9zaXRpb24gLT0gYXR0U3BlZWQgKiB1bmlEZWx0YSAqIHZhckFscGhhO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiaWYgKGxpZmUgPj0gMS4wKSB7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFtcXG4gICAgICAgICAgICAgICAgICAgICAgICBgdmFyQmlydGggPSB1bmlUaW1lICsgYXR0UmFuZG9tLnggKiAke0RVUkFUSU9OLnRvRml4ZWQoMyl9O2AsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZhclBvc2l0aW9uID0gdW5pQ2VudGVyO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZhclNwZWVkID0gbm9ybWFsaXplKHVuaVNwZWVkKSAqIDFlLTE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmVjMiBzaGlmdCA9IDAuMyAqIHZlYzIoXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBbXFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnh5LCB1bmlUaW1lKSksXFxcIiwgXFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcXFwiXSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJTcGVlZCArPSBzaGlmdDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ9XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgXFxcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiY29sb3IuYSAqPSB2YXJBbHBoYTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcIkZyYWdDb2xvciA9IGNvbG9yO1xcXCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0VW5pZm9ybXM6ICh7IF90aW1lLCBkZWx0YSwgcHJnIH0pID0+IHtcXG4gICAgICAgICAgICB2aXJ0dWFsVGltZS5zcGVlZCA9IDFcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlTaXplXFxcIiwgTWF0aC5taW4oY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpIC8gNSlcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlEZWx0YVxcXCIsIGRlbHRhKVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaVRpbWVcXFwiLCB2aXJ0dWFsVGltZS5zZWNvbmRzKVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXFxcInVuaUNlbnRlclxcXCIsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueCwgY29udGV4dC5pbnB1dHMucG9pbnRlci55KVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXFxcInVuaVNwZWVkXFxcIiwgY29udGV4dC5pbnB1dHMucG9pbnRlci5zcGVlZFgsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuc3BlZWRZKVxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbcGFydGljbGVzXSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdGdkQ2FsY1JhbmRvbSxcXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlLFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2REYXRhc2V0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJQYXJ0aWNsZXMsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkU2hhZGVyRnJhZ21lbnQsXFxuICAgIFRnZFNoYWRlclZlcnRleCxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICBUZ2RUaW1lLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBCdWJibGVVUkwgZnJvbSBcXFwiLi9zb2FwLWJ1YmJsZS53ZWJwXFxcIlxcblxcbmNvbnN0IENPVU5UID0gNTAwMDBcXG5jb25zdCBEVVJBVElPTiA9IDVcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYWluLmRlbW9AMjJdIGFzc2V0cyA9XFxcIiwgYXNzZXRzKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA1LTE3IGF0IDIxOjQyXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChDT1VOVCwgRFVSQVRJT04pXFxuICAgIGNvbnN0IHZpcnR1YWxUaW1lID0gbmV3IFRnZFRpbWUoeyBjb250ZXh0LCBzcGVlZDogMCB9KVxcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XFxuICAgICAgICBkYXRhc2V0LFxcbiAgICAgICAgZHJhd01vZGU6IFxcXCJQT0lOVFNcXFwiLFxcbiAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICB1bmlUZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJ1YmJsZSksXFxuICAgICAgICB9LFxcbiAgICAgICAgc2hhZGVyOiB7XFxuICAgICAgICAgICAgdmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlKCksXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgICAgICAgICB1bmlUaW1lOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pRGVsdGE6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlDZW50ZXI6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaVNwZWVkOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlTaXplOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB2YXJ5aW5nOiB7XFxuICAgICAgICAgICAgICAgICAgICB2YXJBbHBoYTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBgZmxvYXQgbGlmZSA9IGNsYW1wKCh1bmlUaW1lIC0gYXR0QmlydGgpICogJHsoMSAvIERVUkFUSU9OKS50b0ZpeGVkKDYpfSwgMC4wLCAxLjApO2AsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvc2l0aW9uLCAwLCAxKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImdsX1BvaW50U2l6ZSA9IHVuaVNpemUgKiAoMC4xICsgLjkgKiBsaWZlICogbGlmZSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogdmFyQWxwaGE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJpZiAobGlmZSA+PSAxLjApIHtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgW1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGB2YXJCaXJ0aCA9IHVuaVRpbWUgKyBhdHRSYW5kb20ueCAqICR7RFVSQVRJT04udG9GaXhlZCgzKX07YCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmFyUG9zaXRpb24gPSB1bmlDZW50ZXI7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmFyU3BlZWQgPSBub3JtYWxpemUodW5pU3BlZWQpICogMWUtMTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMyIHNoaWZ0ID0gMC4zICogdmVjMihcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcXFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueHksIHVuaVRpbWUpKSxcXFwiLCBcXFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueXgsIHVuaVRpbWUpKVxcXCJdLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCIpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZhclNwZWVkICs9IHNoaWZ0O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcIn1cXFwiLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgZ2xfUG9pbnRDb29yZCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJjb2xvci5hICo9IHZhckFscGhhO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gY29sb3I7XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xcbiAgICAgICAgICAgIHZpcnR1YWxUaW1lLnNwZWVkID0gMVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaVNpemVcXFwiLCBNYXRoLm1pbihjb250ZXh0LndpZHRoLCBjb250ZXh0LmhlaWdodCkgLyA1KVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaURlbHRhXFxcIiwgZGVsdGEpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pVGltZVxcXCIsIHZpcnR1YWxUaW1lLnNlY29uZHMpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0yZihcXFwidW5pQ2VudGVyXFxcIiwgY29udGV4dC5pbnB1dHMucG9pbnRlci54LCBjb250ZXh0LmlucHV0cy5wb2ludGVyLnkpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0yZihcXFwidW5pU3BlZWRcXFwiLCBjb250ZXh0LmlucHV0cy5wb2ludGVyLnNwZWVkWCwgY29udGV4dC5pbnB1dHMucG9pbnRlci5zcGVlZFkpXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgYmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtwYXJ0aWNsZXNdLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZTogQnViYmxlVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGNvdW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBUZ2REYXRhc2V0IHtcXG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG4gICAgICAgIGF0dFBvc2l0aW9uOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICBhdHRTcGVlZDogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgYXR0QmlydGg6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICBhdHRSYW5kb206IFxcXCJ2ZWMyXFxcIixcXG4gICAgfSlcXG4gICAgY29uc3QgYXR0UG9zaXRpb246IG51bWJlcltdID0gW11cXG4gICAgY29uc3QgYXR0U3BlZWQ6IG51bWJlcltdID0gW11cXG4gICAgY29uc3QgYXR0QmlydGg6IG51bWJlcltdID0gW11cXG4gICAgY29uc3QgYXR0UmFuZG9tOiBudW1iZXJbXSA9IFtdXFxuICAgIGNvbnN0IHJuZCA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiB0Z2RDYWxjUmFuZG9tKG1pbiwgbWF4KVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG4gICAgICAgIGF0dFBvc2l0aW9uLnB1c2gocm5kKC0xLCArMSksIHJuZCgtMSwgKzEpKVxcbiAgICAgICAgYXR0U3BlZWQucHVzaChybmQoLTAuMSwgKzAuMSksIHJuZCgtMC4xLCArMC4xKSlcXG4gICAgICAgIGF0dEJpcnRoLnB1c2goKGkgLyBjb3VudCkgKiBkdXJhdGlvbilcXG4gICAgICAgIGF0dFJhbmRvbS5wdXNoKHJuZCgpLCBybmQoKSlcXG4gICAgfVxcbiAgICBkYXRhc2V0LnNldChcXFwiYXR0UG9zaXRpb25cXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFBvc2l0aW9uKSlcXG4gICAgZGF0YXNldC5zZXQoXFxcImF0dFNwZWVkXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRTcGVlZCkpXFxuICAgIGRhdGFzZXQuc2V0KFxcXCJhdHRCaXJ0aFxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0QmlydGgpKVxcbiAgICBkYXRhc2V0LnNldChcXFwiYXR0UmFuZG9tXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRSYW5kb20pKVxcbiAgICByZXR1cm4gZGF0YXNldFxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0Z2RDYWxjUmFuZG9tLFxuICAgIHRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZERhdGFzZXQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJQYXJ0aWNsZXMsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFNoYWRlckZyYWdtZW50LFxuICAgIFRnZFNoYWRlclZlcnRleCxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgVGdkVGltZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmltcG9ydCBCdWJibGVVUkwgZnJvbSBcIi4vc29hcC1idWJibGUud2VicFwiXG5cbmNvbnN0IENPVU5UID0gNTAwMDBcbmNvbnN0IERVUkFUSU9OID0gNVxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0AyMl0gYXNzZXRzID1cIiwgYXNzZXRzKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA1LTE3IGF0IDIxOjQyXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKVxuICAgIGNvbnN0IHZpcnR1YWxUaW1lID0gbmV3IFRnZFRpbWUoeyBjb250ZXh0LCBzcGVlZDogMCB9KVxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcbiAgICAgICAgZGF0YXNldCxcbiAgICAgICAgZHJhd01vZGU6IFwiUE9JTlRTXCIsXG4gICAgICAgIHRleHR1cmVzOiB7XG4gICAgICAgICAgICB1bmlUZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJ1YmJsZSksXG4gICAgICAgIH0sXG4gICAgICAgIHNoYWRlcjoge1xuICAgICAgICAgICAgdmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdW5pVGltZTogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICB1bmlEZWx0YTogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICB1bmlDZW50ZXI6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgICAgICB1bmlTcGVlZDogXCJ2ZWMyXCIsXG4gICAgICAgICAgICAgICAgICAgIHVuaVNpemU6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhcnlpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyQWxwaGE6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGRhdGFzZXQuZ2V0VHlwZVJlY29yZCgpLFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgIGBmbG9hdCBsaWZlID0gY2xhbXAoKHVuaVRpbWUgLSBhdHRCaXJ0aCkgKiAkeygxIC8gRFVSQVRJT04pLnRvRml4ZWQoNil9LCAwLjAsIDEuMCk7YCxcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJBbHBoYSA9IDEuMCAtIGxpZmU7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvc2l0aW9uLCAwLCAxKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJnbF9Qb2ludFNpemUgPSB1bmlTaXplICogKDAuMSArIC45ICogbGlmZSAqIGxpZmUpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZhclBvc2l0aW9uIC09IGF0dFNwZWVkICogdW5pRGVsdGEgKiB2YXJBbHBoYTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpZiAobGlmZSA+PSAxLjApIHtcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgYHZhckJpcnRoID0gdW5pVGltZSArIGF0dFJhbmRvbS54ICogJHtEVVJBVElPTi50b0ZpeGVkKDMpfTtgLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YXJQb3NpdGlvbiA9IHVuaUNlbnRlcjtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFyU3BlZWQgPSBub3JtYWxpemUodW5pU3BlZWQpICogMWUtMTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVjMiBzaGlmdCA9IDAuMyAqIHZlYzIoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS54eSwgdW5pVGltZSkpLFwiLCBcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhclNwZWVkICs9IHNoaWZ0O1wiLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBcIn1cIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgZ2xfUG9pbnRDb29yZCk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3IuYSAqPSB2YXJBbHBoYTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IgPSBjb2xvcjtcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICAgIHNldFVuaWZvcm1zOiAoeyBfdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XG4gICAgICAgICAgICB2aXJ0dWFsVGltZS5zcGVlZCA9IDFcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXCJ1bmlTaXplXCIsIE1hdGgubWluKGNvbnRleHQud2lkdGgsIGNvbnRleHQuaGVpZ2h0KSAvIDUpXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFwidW5pRGVsdGFcIiwgZGVsdGEpXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFwidW5pVGltZVwiLCB2aXJ0dWFsVGltZS5zZWNvbmRzKVxuICAgICAgICAgICAgcHJnLnVuaWZvcm0yZihcInVuaUNlbnRlclwiLCBjb250ZXh0LmlucHV0cy5wb2ludGVyLngsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueSlcbiAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXCJ1bmlTcGVlZFwiLCBjb250ZXh0LmlucHV0cy5wb2ludGVyLnNwZWVkWCwgY29udGV4dC5pbnB1dHMucG9pbnRlci5zcGVlZFkpXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgYmxlbmQ6IFwiYWxwaGFcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbcGFydGljbGVzXSxcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQucGxheSgpXG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgICAgICBidWJibGU6IEJ1YmJsZVVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGNvdW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBUZ2REYXRhc2V0IHtcbiAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuICAgICAgICBhdHRQb3NpdGlvbjogXCJ2ZWMyXCIsXG4gICAgICAgIGF0dFNwZWVkOiBcInZlYzJcIixcbiAgICAgICAgYXR0QmlydGg6IFwiZmxvYXRcIixcbiAgICAgICAgYXR0UmFuZG9tOiBcInZlYzJcIixcbiAgICB9KVxuICAgIGNvbnN0IGF0dFBvc2l0aW9uOiBudW1iZXJbXSA9IFtdXG4gICAgY29uc3QgYXR0U3BlZWQ6IG51bWJlcltdID0gW11cbiAgICBjb25zdCBhdHRCaXJ0aDogbnVtYmVyW10gPSBbXVxuICAgIGNvbnN0IGF0dFJhbmRvbTogbnVtYmVyW10gPSBbXVxuICAgIGNvbnN0IHJuZCA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiB0Z2RDYWxjUmFuZG9tKG1pbiwgbWF4KVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBhdHRQb3NpdGlvbi5wdXNoKHJuZCgtMSwgKzEpLCBybmQoLTEsICsxKSlcbiAgICAgICAgYXR0U3BlZWQucHVzaChybmQoLTAuMSwgKzAuMSksIHJuZCgtMC4xLCArMC4xKSlcbiAgICAgICAgYXR0QmlydGgucHVzaCgoaSAvIGNvdW50KSAqIGR1cmF0aW9uKVxuICAgICAgICBhdHRSYW5kb20ucHVzaChybmQoKSwgcm5kKCkpXG4gICAgfVxuICAgIGRhdGFzZXQuc2V0KFwiYXR0UG9zaXRpb25cIiwgbmV3IEZsb2F0MzJBcnJheShhdHRQb3NpdGlvbikpXG4gICAgZGF0YXNldC5zZXQoXCJhdHRTcGVlZFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFNwZWVkKSlcbiAgICBkYXRhc2V0LnNldChcImF0dEJpcnRoXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0QmlydGgpKVxuICAgIGRhdGFzZXQuc2V0KFwiYXR0UmFuZG9tXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0UmFuZG9tKSlcbiAgICByZXR1cm4gZGF0YXNldFxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDYWxjUmFuZG9tIiwidGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlIiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJQYXJ0aWNsZXMiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RTaGFkZXJGcmFnbWVudCIsIlRnZFNoYWRlclZlcnRleCIsIlRnZFRleHR1cmUyRCIsIlRnZFRpbWUiLCJWaWV3IiwiQnViYmxlVVJMIiwiQ09VTlQiLCJEVVJBVElPTiIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY29uc29sZSIsImNsZWFyIiwiZGF0YXNldCIsIm1ha2VEYXRhc2V0IiwidmlydHVhbFRpbWUiLCJwYXJ0aWNsZXMiLCJzZXRVbmlmb3JtcyIsIl90aW1lIiwiZGVsdGEiLCJwcmciLCJNYXRoIiwiY291bnQiLCJkdXJhdGlvbiIsImF0dFBvc2l0aW9uIiwiYXR0U3BlZWQiLCJhdHRCaXJ0aCIsImF0dFJhbmRvbSIsInJuZCIsIm1pbiIsIm1heCIsImkiLCJGbG9hdDMyQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQXNsRztBQUNqbkcsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osc0NBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNB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