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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    console.log(\"🐞 [main.demo@22] assets =\", assets) // @FIXME: Remove this line written on 2026-05-17 at 21:42\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const dataset: TgdDataset = makeDataset(COUNT, DURATION)\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: \"POINTS\",\n        textures: {\n            uniTexture: new TgdTexture2D(context).loadBitmap(assets.image.bubble),\n        },\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                },\n                uniforms: {\n                    uniTime: \"float\",\n                    uniDelta: \"float\",\n                    uniCenter: \"vec2\",\n                    uniSpeed: \"vec2\",\n                    uniSize: \"float\",\n                },\n                varying: {\n                    varAlpha: \"float\",\n                },\n                attributes: dataset.getTypeRecord(),\n                mainCode: [\n                    `float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,\n                    \"varAlpha = 1.0 - life;\",\n                    \"gl_Position = vec4(attPosition, 0, 1);\",\n                    \"gl_PointSize = uniSize * (0.1 + .9 * life * life);\",\n                    \"varPosition -= attSpeed * uniDelta * varAlpha;\",\n                    \"if (life >= 1.0) {\",\n                    [\n                        `varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,\n                        \"varPosition = uniCenter;\",\n                        \"varSpeed = normalize(uniSpeed) * 1e-1;\",\n                        \"vec2 shift = 0.3 * vec2(\",\n                        [\"perlinNoise(vec3(attRandom.xy, uniTime)),\", \"perlinNoise(vec3(attRandom.yx, uniTime))\"],\n                        \");\",\n                        \"varSpeed += shift;\",\n                    ],\n                    \"}\",\n                ],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: [\n                    \"vec4 color = texture(uniTexture, gl_PointCoord);\",\n                    \"color.a *= varAlpha;\",\n                    \"FragColor = color;\",\n                ],\n            }),\n        },\n        setUniforms: ({ time, delta, prg }) => {\n            prg.uniform1f(\"uniSize\", Math.min(context.width, context.height) / 5)\n            prg.uniform1f(\"uniDelta\", delta)\n            prg.uniform1f(\"uniTime\", time)\n            prg.uniform2f(\"uniCenter\", context.inputs.pointer.x, context.inputs.pointer.y)\n            prg.uniform2f(\"uniSpeed\", context.inputs.pointer.speedX, context.inputs.pointer.speedY)\n        },\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [particles],\n        }),\n    )\n    context.play()\n}"
};
var FULL = "import {\n    tgdCalcRandom,\n    tgdCodeFunction_perlinNoise,\n    TgdContext,\n    TgdDataset,\n    TgdPainterClear,\n    TgdPainterParticles,\n    TgdPainterState,\n    TgdShaderFragment,\n    TgdShaderVertex,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport BubbleURL from \"./soap-bubble.webp\"\n\nconst COUNT = 50000\nconst DURATION = 5\n\nfunction init(context: TgdContext, assets: Assets) {\n    console.log(\"🐞 [main.demo@22] assets =\", assets) // @FIXME: Remove this line written on 2026-05-17 at 21:42\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const dataset: TgdDataset = makeDataset(COUNT, DURATION)\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: \"POINTS\",\n        textures: {\n            uniTexture: new TgdTexture2D(context).loadBitmap(assets.image.bubble),\n        },\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                },\n                uniforms: {\n                    uniTime: \"float\",\n                    uniDelta: \"float\",\n                    uniCenter: \"vec2\",\n                    uniSpeed: \"vec2\",\n                    uniSize: \"float\",\n                },\n                varying: {\n                    varAlpha: \"float\",\n                },\n                attributes: dataset.getTypeRecord(),\n                mainCode: [\n                    `float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,\n                    \"varAlpha = 1.0 - life;\",\n                    \"gl_Position = vec4(attPosition, 0, 1);\",\n                    \"gl_PointSize = uniSize * (0.1 + .9 * life * life);\",\n                    \"varPosition -= attSpeed * uniDelta * varAlpha;\",\n                    \"if (life >= 1.0) {\",\n                    [\n                        `varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,\n                        \"varPosition = uniCenter;\",\n                        \"varSpeed = normalize(uniSpeed) * 1e-1;\",\n                        \"vec2 shift = 0.3 * vec2(\",\n                        [\"perlinNoise(vec3(attRandom.xy, uniTime)),\", \"perlinNoise(vec3(attRandom.yx, uniTime))\"],\n                        \");\",\n                        \"varSpeed += shift;\",\n                    ],\n                    \"}\",\n                ],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: [\n                    \"vec4 color = texture(uniTexture, gl_PointCoord);\",\n                    \"color.a *= varAlpha;\",\n                    \"FragColor = color;\",\n                ],\n            }),\n        },\n        setUniforms: ({ time, delta, prg }) => {\n            prg.uniform1f(\"uniSize\", Math.min(context.width, context.height) / 5)\n            prg.uniform1f(\"uniDelta\", delta)\n            prg.uniform1f(\"uniTime\", time)\n            prg.uniform2f(\"uniCenter\", context.inputs.pointer.x, context.inputs.pointer.y)\n            prg.uniform2f(\"uniSpeed\", context.inputs.pointer.speedX, context.inputs.pointer.speedY)\n        },\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [particles],\n        }),\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: {\n                    bubble: BubbleURL,\n                },\n            }}\n        />\n    )\n}\n\nfunction makeDataset(count: number, duration: number): TgdDataset {\n    const dataset = new TgdDataset({\n        attPosition: \"vec2\",\n        attSpeed: \"vec2\",\n        attBirth: \"float\",\n        attRandom: \"vec2\",\n    })\n    const attPosition: number[] = []\n    const attSpeed: number[] = []\n    const attBirth: number[] = []\n    const attRandom: number[] = []\n    const rnd = (min = 0, max = 1) => tgdCalcRandom(min, max)\n    for (let i = 0; i < count; i++) {\n        attPosition.push(rnd(-1, +1), rnd(-1, +1))\n        attSpeed.push(rnd(-0.1, +0.1), rnd(-0.1, +0.1))\n        attBirth.push((-i / count) * duration)\n        attRandom.push(rnd(), rnd())\n    }\n    dataset.set(\"attPosition\", new Float32Array(attPosition))\n    dataset.set(\"attSpeed\", new Float32Array(attSpeed))\n    dataset.set(\"attBirth\", new Float32Array(attBirth))\n    dataset.set(\"attRandom\", new Float32Array(attRandom))\n    return dataset\n}\n";
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
            var time = param.time, delta = param.delta, prg = param.prg;
            prg.uniform1f("uniSize", Math.min(context.width, context.height) / 5);
            prg.uniform1f("uniDelta", delta);
            prg.uniform1f("uniTime", time);
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
        lineNumber: 96,
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
        attBirth.push(-i / count * duration);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTJfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS1kZGRiOWIuOTZlYzZhM2NlNjliYzU1ZC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BhcnRpY2xlcy9leGFtcGxlMi9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUyL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUyL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFpbi5kZW1vQDIyXSBhc3NldHMgPVxcXCIsIGFzc2V0cykgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNS0xNyBhdCAyMTo0MlxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKVxcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XFxuICAgICAgICBkYXRhc2V0LFxcbiAgICAgICAgZHJhd01vZGU6IFxcXCJQT0lOVFNcXFwiLFxcbiAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICB1bmlUZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJ1YmJsZSksXFxuICAgICAgICB9LFxcbiAgICAgICAgc2hhZGVyOiB7XFxuICAgICAgICAgICAgdmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlKCksXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgICAgICAgICB1bmlUaW1lOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pRGVsdGE6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlDZW50ZXI6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaVNwZWVkOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlTaXplOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB2YXJ5aW5nOiB7XFxuICAgICAgICAgICAgICAgICAgICB2YXJBbHBoYTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBgZmxvYXQgbGlmZSA9IGNsYW1wKCh1bmlUaW1lIC0gYXR0QmlydGgpICogJHsoMSAvIERVUkFUSU9OKS50b0ZpeGVkKDYpfSwgMC4wLCAxLjApO2AsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvc2l0aW9uLCAwLCAxKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImdsX1BvaW50U2l6ZSA9IHVuaVNpemUgKiAoMC4xICsgLjkgKiBsaWZlICogbGlmZSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogdmFyQWxwaGE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJpZiAobGlmZSA+PSAxLjApIHtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgW1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGB2YXJCaXJ0aCA9IHVuaVRpbWUgKyBhdHRSYW5kb20ueCAqICR7RFVSQVRJT04udG9GaXhlZCgzKX07YCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmFyUG9zaXRpb24gPSB1bmlDZW50ZXI7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmFyU3BlZWQgPSBub3JtYWxpemUodW5pU3BlZWQpICogMWUtMTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMyIHNoaWZ0ID0gMC4zICogdmVjMihcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcXFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueHksIHVuaVRpbWUpKSxcXFwiLCBcXFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueXgsIHVuaVRpbWUpKVxcXCJdLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCIpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZhclNwZWVkICs9IHNoaWZ0O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcIn1cXFwiLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgZ2xfUG9pbnRDb29yZCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJjb2xvci5hICo9IHZhckFscGhhO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gY29sb3I7XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pU2l6ZVxcXCIsIE1hdGgubWluKGNvbnRleHQud2lkdGgsIGNvbnRleHQuaGVpZ2h0KSAvIDUpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pRGVsdGFcXFwiLCBkZWx0YSlcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlUaW1lXFxcIiwgdGltZSlcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTJmKFxcXCJ1bmlDZW50ZXJcXFwiLCBjb250ZXh0LmlucHV0cy5wb2ludGVyLngsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueSlcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTJmKFxcXCJ1bmlTcGVlZFxcXCIsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuc3BlZWRYLCBjb250ZXh0LmlucHV0cy5wb2ludGVyLnNwZWVkWSlcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBibGVuZDogXFxcImFscGhhXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3BhcnRpY2xlc10sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHRnZENhbGNSYW5kb20sXFxuICAgIHRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkRGF0YXNldCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyUGFydGljbGVzLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFNoYWRlckZyYWdtZW50LFxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXFxuICAgIFRnZFRleHR1cmUyRCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5pbXBvcnQgQnViYmxlVVJMIGZyb20gXFxcIi4vc29hcC1idWJibGUud2VicFxcXCJcXG5cXG5jb25zdCBDT1VOVCA9IDUwMDAwXFxuY29uc3QgRFVSQVRJT04gPSA1XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFpbi5kZW1vQDIyXSBhc3NldHMgPVxcXCIsIGFzc2V0cykgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNS0xNyBhdCAyMTo0MlxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKVxcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XFxuICAgICAgICBkYXRhc2V0LFxcbiAgICAgICAgZHJhd01vZGU6IFxcXCJQT0lOVFNcXFwiLFxcbiAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICB1bmlUZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJ1YmJsZSksXFxuICAgICAgICB9LFxcbiAgICAgICAgc2hhZGVyOiB7XFxuICAgICAgICAgICAgdmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlKCksXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgICAgICAgICB1bmlUaW1lOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pRGVsdGE6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlDZW50ZXI6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaVNwZWVkOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlTaXplOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB2YXJ5aW5nOiB7XFxuICAgICAgICAgICAgICAgICAgICB2YXJBbHBoYTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBgZmxvYXQgbGlmZSA9IGNsYW1wKCh1bmlUaW1lIC0gYXR0QmlydGgpICogJHsoMSAvIERVUkFUSU9OKS50b0ZpeGVkKDYpfSwgMC4wLCAxLjApO2AsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvc2l0aW9uLCAwLCAxKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImdsX1BvaW50U2l6ZSA9IHVuaVNpemUgKiAoMC4xICsgLjkgKiBsaWZlICogbGlmZSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogdmFyQWxwaGE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJpZiAobGlmZSA+PSAxLjApIHtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgW1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGB2YXJCaXJ0aCA9IHVuaVRpbWUgKyBhdHRSYW5kb20ueCAqICR7RFVSQVRJT04udG9GaXhlZCgzKX07YCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmFyUG9zaXRpb24gPSB1bmlDZW50ZXI7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmFyU3BlZWQgPSBub3JtYWxpemUodW5pU3BlZWQpICogMWUtMTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMyIHNoaWZ0ID0gMC4zICogdmVjMihcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcXFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueHksIHVuaVRpbWUpKSxcXFwiLCBcXFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueXgsIHVuaVRpbWUpKVxcXCJdLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCIpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZhclNwZWVkICs9IHNoaWZ0O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcIn1cXFwiLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgZ2xfUG9pbnRDb29yZCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJjb2xvci5hICo9IHZhckFscGhhO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gY29sb3I7XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pU2l6ZVxcXCIsIE1hdGgubWluKGNvbnRleHQud2lkdGgsIGNvbnRleHQuaGVpZ2h0KSAvIDUpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pRGVsdGFcXFwiLCBkZWx0YSlcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlUaW1lXFxcIiwgdGltZSlcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTJmKFxcXCJ1bmlDZW50ZXJcXFwiLCBjb250ZXh0LmlucHV0cy5wb2ludGVyLngsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueSlcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTJmKFxcXCJ1bmlTcGVlZFxcXCIsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuc3BlZWRYLCBjb250ZXh0LmlucHV0cy5wb2ludGVyLnNwZWVkWSlcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBibGVuZDogXFxcImFscGhhXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3BhcnRpY2xlc10sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlOiBCdWJibGVVUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXFxuZnVuY3Rpb24gbWFrZURhdGFzZXQoY291bnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IFRnZERhdGFzZXQge1xcbiAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcbiAgICAgICAgYXR0UG9zaXRpb246IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgIGF0dFNwZWVkOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICBhdHRCaXJ0aDogXFxcImZsb2F0XFxcIixcXG4gICAgICAgIGF0dFJhbmRvbTogXFxcInZlYzJcXFwiLFxcbiAgICB9KVxcbiAgICBjb25zdCBhdHRQb3NpdGlvbjogbnVtYmVyW10gPSBbXVxcbiAgICBjb25zdCBhdHRTcGVlZDogbnVtYmVyW10gPSBbXVxcbiAgICBjb25zdCBhdHRCaXJ0aDogbnVtYmVyW10gPSBbXVxcbiAgICBjb25zdCBhdHRSYW5kb206IG51bWJlcltdID0gW11cXG4gICAgY29uc3Qgcm5kID0gKG1pbiA9IDAsIG1heCA9IDEpID0+IHRnZENhbGNSYW5kb20obWluLCBtYXgpXFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcbiAgICAgICAgYXR0UG9zaXRpb24ucHVzaChybmQoLTEsICsxKSwgcm5kKC0xLCArMSkpXFxuICAgICAgICBhdHRTcGVlZC5wdXNoKHJuZCgtMC4xLCArMC4xKSwgcm5kKC0wLjEsICswLjEpKVxcbiAgICAgICAgYXR0QmlydGgucHVzaCgoLWkgLyBjb3VudCkgKiBkdXJhdGlvbilcXG4gICAgICAgIGF0dFJhbmRvbS5wdXNoKHJuZCgpLCBybmQoKSlcXG4gICAgfVxcbiAgICBkYXRhc2V0LnNldChcXFwiYXR0UG9zaXRpb25cXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFBvc2l0aW9uKSlcXG4gICAgZGF0YXNldC5zZXQoXFxcImF0dFNwZWVkXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRTcGVlZCkpXFxuICAgIGRhdGFzZXQuc2V0KFxcXCJhdHRCaXJ0aFxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0QmlydGgpKVxcbiAgICBkYXRhc2V0LnNldChcXFwiYXR0UmFuZG9tXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRSYW5kb20pKVxcbiAgICByZXR1cm4gZGF0YXNldFxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0Z2RDYWxjUmFuZG9tLFxuICAgIHRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZERhdGFzZXQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJQYXJ0aWNsZXMsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFNoYWRlckZyYWdtZW50LFxuICAgIFRnZFNoYWRlclZlcnRleCxcbiAgICBUZ2RUZXh0dXJlMkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgQnViYmxlVVJMIGZyb20gXCIuL3NvYXAtYnViYmxlLndlYnBcIlxuXG5jb25zdCBDT1VOVCA9IDUwMDAwXG5jb25zdCBEVVJBVElPTiA9IDVcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgY29uc29sZS5sb2coXCLwn5CeIFttYWluLmRlbW9AMjJdIGFzc2V0cyA9XCIsIGFzc2V0cykgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNS0xNyBhdCAyMTo0MlxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pXG4gICAgY29uc3QgZGF0YXNldDogVGdkRGF0YXNldCA9IG1ha2VEYXRhc2V0KENPVU5ULCBEVVJBVElPTilcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XG4gICAgICAgIGRhdGFzZXQsXG4gICAgICAgIGRyYXdNb2RlOiBcIlBPSU5UU1wiLFxuICAgICAgICB0ZXh0dXJlczoge1xuICAgICAgICAgICAgdW5pVGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5idWJibGUpLFxuICAgICAgICB9LFxuICAgICAgICBzaGFkZXI6IHtcbiAgICAgICAgICAgIHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHVuaVRpbWU6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgdW5pRGVsdGE6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgdW5pQ2VudGVyOiBcInZlYzJcIixcbiAgICAgICAgICAgICAgICAgICAgdW5pU3BlZWQ6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgICAgICB1bmlTaXplOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2YXJ5aW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhckFscGhhOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgICAgICBgZmxvYXQgbGlmZSA9IGNsYW1wKCh1bmlUaW1lIC0gYXR0QmlydGgpICogJHsoMSAvIERVUkFUSU9OKS50b0ZpeGVkKDYpfSwgMC4wLCAxLjApO2AsXG4gICAgICAgICAgICAgICAgICAgIFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb3NpdGlvbiwgMCwgMSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ2xfUG9pbnRTaXplID0gdW5pU2l6ZSAqICgwLjEgKyAuOSAqIGxpZmUgKiBsaWZlKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogdmFyQWxwaGE7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWYgKGxpZmUgPj0gMS4wKSB7XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGB2YXJCaXJ0aCA9IHVuaVRpbWUgKyBhdHRSYW5kb20ueCAqICR7RFVSQVRJT04udG9GaXhlZCgzKX07YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFyUG9zaXRpb24gPSB1bmlDZW50ZXI7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhclNwZWVkID0gbm9ybWFsaXplKHVuaVNwZWVkKSAqIDFlLTE7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlYzIgc2hpZnQgPSAwLjMgKiB2ZWMyKFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1wicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueHksIHVuaVRpbWUpKSxcIiwgXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS55eCwgdW5pVGltZSkpXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YXJTcGVlZCArPSBzaGlmdDtcIixcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJ9XCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgICAgICBcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yLmEgKj0gdmFyQWxwaGE7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gY29sb3I7XCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFwidW5pU2l6ZVwiLCBNYXRoLm1pbihjb250ZXh0LndpZHRoLCBjb250ZXh0LmhlaWdodCkgLyA1KVxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcInVuaURlbHRhXCIsIGRlbHRhKVxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcInVuaVRpbWVcIiwgdGltZSlcbiAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXCJ1bmlDZW50ZXJcIiwgY29udGV4dC5pbnB1dHMucG9pbnRlci54LCBjb250ZXh0LmlucHV0cy5wb2ludGVyLnkpXG4gICAgICAgICAgICBwcmcudW5pZm9ybTJmKFwidW5pU3BlZWRcIiwgY29udGV4dC5pbnB1dHMucG9pbnRlci5zcGVlZFgsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuc3BlZWRZKVxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGJsZW5kOiBcImFscGhhXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3BhcnRpY2xlc10sXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlOiBCdWJibGVVUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBtYWtlRGF0YXNldChjb3VudDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogVGdkRGF0YXNldCB7XG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgYXR0UG9zaXRpb246IFwidmVjMlwiLFxuICAgICAgICBhdHRTcGVlZDogXCJ2ZWMyXCIsXG4gICAgICAgIGF0dEJpcnRoOiBcImZsb2F0XCIsXG4gICAgICAgIGF0dFJhbmRvbTogXCJ2ZWMyXCIsXG4gICAgfSlcbiAgICBjb25zdCBhdHRQb3NpdGlvbjogbnVtYmVyW10gPSBbXVxuICAgIGNvbnN0IGF0dFNwZWVkOiBudW1iZXJbXSA9IFtdXG4gICAgY29uc3QgYXR0QmlydGg6IG51bWJlcltdID0gW11cbiAgICBjb25zdCBhdHRSYW5kb206IG51bWJlcltdID0gW11cbiAgICBjb25zdCBybmQgPSAobWluID0gMCwgbWF4ID0gMSkgPT4gdGdkQ2FsY1JhbmRvbShtaW4sIG1heClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgYXR0UG9zaXRpb24ucHVzaChybmQoLTEsICsxKSwgcm5kKC0xLCArMSkpXG4gICAgICAgIGF0dFNwZWVkLnB1c2gocm5kKC0wLjEsICswLjEpLCBybmQoLTAuMSwgKzAuMSkpXG4gICAgICAgIGF0dEJpcnRoLnB1c2goKC1pIC8gY291bnQpICogZHVyYXRpb24pXG4gICAgICAgIGF0dFJhbmRvbS5wdXNoKHJuZCgpLCBybmQoKSlcbiAgICB9XG4gICAgZGF0YXNldC5zZXQoXCJhdHRQb3NpdGlvblwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFBvc2l0aW9uKSlcbiAgICBkYXRhc2V0LnNldChcImF0dFNwZWVkXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0U3BlZWQpKVxuICAgIGRhdGFzZXQuc2V0KFwiYXR0QmlydGhcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRCaXJ0aCkpXG4gICAgZGF0YXNldC5zZXQoXCJhdHRSYW5kb21cIiwgbmV3IEZsb2F0MzJBcnJheShhdHRSYW5kb20pKVxuICAgIHJldHVybiBkYXRhc2V0XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENhbGNSYW5kb20iLCJ0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UiLCJUZ2REYXRhc2V0IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlclBhcnRpY2xlcyIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFNoYWRlckZyYWdtZW50IiwiVGdkU2hhZGVyVmVydGV4IiwiVGdkVGV4dHVyZTJEIiwiVmlldyIsIkJ1YmJsZVVSTCIsIkNPVU5UIiwiRFVSQVRJT04iLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNvbnNvbGUiLCJjbGVhciIsImRhdGFzZXQiLCJtYWtlRGF0YXNldCIsInBhcnRpY2xlcyIsInNldFVuaWZvcm1zIiwidGltZSIsImRlbHRhIiwicHJnIiwiTWF0aCIsImNvdW50IiwiZHVyYXRpb24iLCJhdHRQb3NpdGlvbiIsImF0dFNwZWVkIiwiYXR0QmlydGgiLCJhdHRSYW5kb20iLCJybmQiLCJtaW4iLCJtYXgiLCJpIiwiRmxvYXQzMkFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUF1K0Y7QUFDbGdHLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnVCO0FBRTZCO0FBRVY7QUFFMUMsSUFBTWtCLFFBQVE7QUFDZCxJQUFNQyxXQUFXO0FBRWpCLFNBQVM7QUFDVCxTQUFTQyxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQzdDQyxRQUFRLEdBQUcsQ0FBQyw4QkFBOEJELFNBQVEsMERBQTBEO0lBQzVHLElBQU1FLFFBQVEsSUFBSWQsK0NBQWVBLENBQUNXLFNBQVM7UUFBRSxPQUFPO1lBQUM7WUFBRztZQUFHO1lBQUc7U0FBRTtRQUFFLE9BQU87SUFB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