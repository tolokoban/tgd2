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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    console.log(\"🐞 [main.demo@22] assets =\", assets) // @FIXME: Remove this line written on 2026-05-17 at 21:42\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const dataset: TgdDataset = makeDataset(COUNT, DURATION)\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: \"POINTS\",\n        textures: {\n            uniTexture: new TgdTexture2D(context).loadBitmap(assets.image.bubble),\n        },\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                },\n                uniforms: {\n                    uniTime: \"float\",\n                    uniDelta: \"float\",\n                    uniCenter: \"vec2\",\n                    uniSpeed: \"vec2\",\n                    uniSize: \"float\",\n                },\n                varying: {\n                    varAlpha: \"float\",\n                },\n                attributes: dataset.getTypeRecord(),\n                mainCode: [\n                    `float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,\n                    \"varAlpha = 1.0 - life;\",\n                    \"gl_Position = vec4(attPosition, 0, 1);\",\n                    \"gl_PointSize = uniSize * (0.1 + .9 * life * life);\",\n                    \"varPosition -= attSpeed * uniDelta * varAlpha;\",\n                    \"if (life >= 1.0) {\",\n                    [\n                        `varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,\n                        \"varPosition = uniCenter;\",\n                        \"vec2 shift = 0.1 * vec2(\",\n                        [\"perlinNoise(vec3(attRandom.xy, uniTime)),\", \"perlinNoise(vec3(attRandom.yx, uniTime))\"],\n                        \");\",\n                        \"varPosition += shift;\",\n                        \"varSpeed = 1e5 * uniSpeed / uniDelta;\",\n                    ],\n                    \"}\",\n                ],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: [\n                    \"vec4 color = texture(uniTexture, gl_PointCoord);\",\n                    \"color.a *= varAlpha;\",\n                    \"FragColor = color;\",\n                ],\n            }),\n        },\n        setUniforms: ({ time, delta, prg }) => {\n            prg.uniform1f(\"uniSize\", Math.min(context.width, context.height) / 5)\n            prg.uniform1f(\"uniDelta\", delta)\n            prg.uniform1f(\"uniTime\", time)\n            prg.uniform2f(\"uniCenter\", context.inputs.pointer.x, context.inputs.pointer.y)\n            prg.uniform2f(\"uniSpeed\", context.inputs.pointer.speedX, context.inputs.pointer.speedY)\n        },\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [particles],\n        }),\n    )\n    context.play()\n}"
};
var FULL = "import {\n    tgdCodeFunction_perlinNoise,\n    TgdContext,\n    TgdDataset,\n    TgdPainterClear,\n    TgdPainterParticles,\n    TgdPainterState,\n    TgdShaderFragment,\n    TgdShaderVertex,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport BubbleURL from \"./soap-bubble.webp\"\n\nconst COUNT = 50000\nconst DURATION = 5\n\nfunction init(context: TgdContext, assets: Assets) {\n    console.log(\"🐞 [main.demo@22] assets =\", assets) // @FIXME: Remove this line written on 2026-05-17 at 21:42\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const dataset: TgdDataset = makeDataset(COUNT, DURATION)\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: \"POINTS\",\n        textures: {\n            uniTexture: new TgdTexture2D(context).loadBitmap(assets.image.bubble),\n        },\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                },\n                uniforms: {\n                    uniTime: \"float\",\n                    uniDelta: \"float\",\n                    uniCenter: \"vec2\",\n                    uniSpeed: \"vec2\",\n                    uniSize: \"float\",\n                },\n                varying: {\n                    varAlpha: \"float\",\n                },\n                attributes: dataset.getTypeRecord(),\n                mainCode: [\n                    `float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,\n                    \"varAlpha = 1.0 - life;\",\n                    \"gl_Position = vec4(attPosition, 0, 1);\",\n                    \"gl_PointSize = uniSize * (0.1 + .9 * life * life);\",\n                    \"varPosition -= attSpeed * uniDelta * varAlpha;\",\n                    \"if (life >= 1.0) {\",\n                    [\n                        `varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,\n                        \"varPosition = uniCenter;\",\n                        \"vec2 shift = 0.1 * vec2(\",\n                        [\"perlinNoise(vec3(attRandom.xy, uniTime)),\", \"perlinNoise(vec3(attRandom.yx, uniTime))\"],\n                        \");\",\n                        \"varPosition += shift;\",\n                        \"varSpeed = 1e5 * uniSpeed / uniDelta;\",\n                    ],\n                    \"}\",\n                ],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: [\n                    \"vec4 color = texture(uniTexture, gl_PointCoord);\",\n                    \"color.a *= varAlpha;\",\n                    \"FragColor = color;\",\n                ],\n            }),\n        },\n        setUniforms: ({ time, delta, prg }) => {\n            prg.uniform1f(\"uniSize\", Math.min(context.width, context.height) / 5)\n            prg.uniform1f(\"uniDelta\", delta)\n            prg.uniform1f(\"uniTime\", time)\n            prg.uniform2f(\"uniCenter\", context.inputs.pointer.x, context.inputs.pointer.y)\n            prg.uniform2f(\"uniSpeed\", context.inputs.pointer.speedX, context.inputs.pointer.speedY)\n        },\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            blend: \"alpha\",\n            children: [particles],\n        }),\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: {\n                    bubble: BubbleURL,\n                },\n            }}\n        />\n    )\n}\n\nfunction makeDataset(count: number, duration: number): TgdDataset {\n    const dataset = new TgdDataset({\n        attPosition: \"vec2\",\n        attSpeed: \"vec2\",\n        attBirth: \"float\",\n        attRandom: \"vec2\",\n    })\n    const attPosition: number[] = []\n    const attSpeed: number[] = []\n    const attBirth: number[] = []\n    const attRandom: number[] = []\n    const rnd = () => Math.random()\n    for (let i = 0; i < count; i++) {\n        attPosition.push(10, 10)\n        attSpeed.push(0, 0)\n        attBirth.push((-i / count) * duration)\n        attRandom.push(rnd(), rnd())\n    }\n    dataset.set(\"attPosition\", new Float32Array(attPosition))\n    dataset.set(\"attSpeed\", new Float32Array(attSpeed))\n    dataset.set(\"attBirth\", new Float32Array(attBirth))\n    dataset.set(\"attRandom\", new Float32Array(attRandom))\n    return dataset\n}\n";
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
                        "vec2 shift = 0.1 * vec2(",
                        [
                            "perlinNoise(vec3(attRandom.xy, uniTime)),",
                            "perlinNoise(vec3(attRandom.yx, uniTime))"
                        ],
                        ");",
                        "varPosition += shift;",
                        "varSpeed = 1e5 * uniSpeed / uniDelta;"
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
        lineNumber: 95,
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
        return Math.random();
    };
    for(var i = 0; i < count; i++){
        attPosition.push(10, 10);
        attSpeed.push(0, 0);
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
                children: "Move your mouse around to make a trail of smoke."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTJfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS1kZGRiOWIuZDgyYTUwMjQ3ZDQ2ZDRhNS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BhcnRpY2xlcy9leGFtcGxlMi9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUyL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUyL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFpbi5kZW1vQDIyXSBhc3NldHMgPVxcXCIsIGFzc2V0cykgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNS0xNyBhdCAyMTo0MlxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKVxcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XFxuICAgICAgICBkYXRhc2V0LFxcbiAgICAgICAgZHJhd01vZGU6IFxcXCJQT0lOVFNcXFwiLFxcbiAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICB1bmlUZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJ1YmJsZSksXFxuICAgICAgICB9LFxcbiAgICAgICAgc2hhZGVyOiB7XFxuICAgICAgICAgICAgdmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlKCksXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgICAgICAgICB1bmlUaW1lOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pRGVsdGE6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlDZW50ZXI6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaVNwZWVkOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlTaXplOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB2YXJ5aW5nOiB7XFxuICAgICAgICAgICAgICAgICAgICB2YXJBbHBoYTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBgZmxvYXQgbGlmZSA9IGNsYW1wKCh1bmlUaW1lIC0gYXR0QmlydGgpICogJHsoMSAvIERVUkFUSU9OKS50b0ZpeGVkKDYpfSwgMC4wLCAxLjApO2AsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvc2l0aW9uLCAwLCAxKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImdsX1BvaW50U2l6ZSA9IHVuaVNpemUgKiAoMC4xICsgLjkgKiBsaWZlICogbGlmZSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogdmFyQWxwaGE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJpZiAobGlmZSA+PSAxLjApIHtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgW1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGB2YXJCaXJ0aCA9IHVuaVRpbWUgKyBhdHRSYW5kb20ueCAqICR7RFVSQVRJT04udG9GaXhlZCgzKX07YCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmFyUG9zaXRpb24gPSB1bmlDZW50ZXI7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmVjMiBzaGlmdCA9IDAuMSAqIHZlYzIoXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBbXFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnh5LCB1bmlUaW1lKSksXFxcIiwgXFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcXFwiXSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiArPSBzaGlmdDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJTcGVlZCA9IDFlNSAqIHVuaVNwZWVkIC8gdW5pRGVsdGE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgICAgICBcXFwifVxcXCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCBnbF9Qb2ludENvb3JkKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImNvbG9yLmEgKj0gdmFyQWxwaGE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSBjb2xvcjtcXFwiLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHNldFVuaWZvcm1zOiAoeyB0aW1lLCBkZWx0YSwgcHJnIH0pID0+IHtcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlTaXplXFxcIiwgTWF0aC5taW4oY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpIC8gNSlcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlEZWx0YVxcXCIsIGRlbHRhKVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaVRpbWVcXFwiLCB0aW1lKVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXFxcInVuaUNlbnRlclxcXCIsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueCwgY29udGV4dC5pbnB1dHMucG9pbnRlci55KVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXFxcInVuaVNwZWVkXFxcIiwgY29udGV4dC5pbnB1dHMucG9pbnRlci5zcGVlZFgsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuc3BlZWRZKVxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbcGFydGljbGVzXSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlLFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2REYXRhc2V0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJQYXJ0aWNsZXMsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkU2hhZGVyRnJhZ21lbnQsXFxuICAgIFRnZFNoYWRlclZlcnRleCxcXG4gICAgVGdkVGV4dHVyZTJELFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBCdWJibGVVUkwgZnJvbSBcXFwiLi9zb2FwLWJ1YmJsZS53ZWJwXFxcIlxcblxcbmNvbnN0IENPVU5UID0gNTAwMDBcXG5jb25zdCBEVVJBVElPTiA9IDVcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYWluLmRlbW9AMjJdIGFzc2V0cyA9XFxcIiwgYXNzZXRzKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA1LTE3IGF0IDIxOjQyXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChDT1VOVCwgRFVSQVRJT04pXFxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcXG4gICAgICAgIGRhdGFzZXQsXFxuICAgICAgICBkcmF3TW9kZTogXFxcIlBPSU5UU1xcXCIsXFxuICAgICAgICB0ZXh0dXJlczoge1xcbiAgICAgICAgICAgIHVuaVRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuYnViYmxlKSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzaGFkZXI6IHtcXG4gICAgICAgICAgICB2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHVuaVRpbWU6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlEZWx0YTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaUNlbnRlcjogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pU3BlZWQ6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaVNpemU6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHZhcnlpbmc6IHtcXG4gICAgICAgICAgICAgICAgICAgIHZhckFscGhhOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICAgICAgICAgIGBmbG9hdCBsaWZlID0gY2xhbXAoKHVuaVRpbWUgLSBhdHRCaXJ0aCkgKiAkeygxIC8gRFVSQVRJT04pLnRvRml4ZWQoNil9LCAwLjAsIDEuMCk7YCxcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJBbHBoYSA9IDEuMCAtIGxpZmU7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJnbF9Qb3NpdGlvbiA9IHZlYzQoYXR0UG9zaXRpb24sIDAsIDEpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZ2xfUG9pbnRTaXplID0gdW5pU2l6ZSAqICgwLjEgKyAuOSAqIGxpZmUgKiBsaWZlKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZhclBvc2l0aW9uIC09IGF0dFNwZWVkICogdW5pRGVsdGEgKiB2YXJBbHBoYTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImlmIChsaWZlID49IDEuMCkge1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBbXFxuICAgICAgICAgICAgICAgICAgICAgICAgYHZhckJpcnRoID0gdW5pVGltZSArIGF0dFJhbmRvbS54ICogJHtEVVJBVElPTi50b0ZpeGVkKDMpfTtgLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiA9IHVuaUNlbnRlcjtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMyIHNoaWZ0ID0gMC4xICogdmVjMihcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcXFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueHksIHVuaVRpbWUpKSxcXFwiLCBcXFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueXgsIHVuaVRpbWUpKVxcXCJdLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCIpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZhclBvc2l0aW9uICs9IHNoaWZ0O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZhclNwZWVkID0gMWU1ICogdW5pU3BlZWQgLyB1bmlEZWx0YTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ9XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgXFxcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiY29sb3IuYSAqPSB2YXJBbHBoYTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcIkZyYWdDb2xvciA9IGNvbG9yO1xcXCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0VW5pZm9ybXM6ICh7IHRpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaVNpemVcXFwiLCBNYXRoLm1pbihjb250ZXh0LndpZHRoLCBjb250ZXh0LmhlaWdodCkgLyA1KVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaURlbHRhXFxcIiwgZGVsdGEpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pVGltZVxcXCIsIHRpbWUpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0yZihcXFwidW5pQ2VudGVyXFxcIiwgY29udGV4dC5pbnB1dHMucG9pbnRlci54LCBjb250ZXh0LmlucHV0cy5wb2ludGVyLnkpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0yZihcXFwidW5pU3BlZWRcXFwiLCBjb250ZXh0LmlucHV0cy5wb2ludGVyLnNwZWVkWCwgY29udGV4dC5pbnB1dHMucG9pbnRlci5zcGVlZFkpXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgYmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtwYXJ0aWNsZXNdLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZTogQnViYmxlVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGNvdW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBUZ2REYXRhc2V0IHtcXG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG4gICAgICAgIGF0dFBvc2l0aW9uOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICBhdHRTcGVlZDogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgYXR0QmlydGg6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICBhdHRSYW5kb206IFxcXCJ2ZWMyXFxcIixcXG4gICAgfSlcXG4gICAgY29uc3QgYXR0UG9zaXRpb246IG51bWJlcltdID0gW11cXG4gICAgY29uc3QgYXR0U3BlZWQ6IG51bWJlcltdID0gW11cXG4gICAgY29uc3QgYXR0QmlydGg6IG51bWJlcltdID0gW11cXG4gICAgY29uc3QgYXR0UmFuZG9tOiBudW1iZXJbXSA9IFtdXFxuICAgIGNvbnN0IHJuZCA9ICgpID0+IE1hdGgucmFuZG9tKClcXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XFxuICAgICAgICBhdHRQb3NpdGlvbi5wdXNoKDEwLCAxMClcXG4gICAgICAgIGF0dFNwZWVkLnB1c2goMCwgMClcXG4gICAgICAgIGF0dEJpcnRoLnB1c2goKC1pIC8gY291bnQpICogZHVyYXRpb24pXFxuICAgICAgICBhdHRSYW5kb20ucHVzaChybmQoKSwgcm5kKCkpXFxuICAgIH1cXG4gICAgZGF0YXNldC5zZXQoXFxcImF0dFBvc2l0aW9uXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRQb3NpdGlvbikpXFxuICAgIGRhdGFzZXQuc2V0KFxcXCJhdHRTcGVlZFxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0U3BlZWQpKVxcbiAgICBkYXRhc2V0LnNldChcXFwiYXR0QmlydGhcXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dEJpcnRoKSlcXG4gICAgZGF0YXNldC5zZXQoXFxcImF0dFJhbmRvbVxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0UmFuZG9tKSlcXG4gICAgcmV0dXJuIGRhdGFzZXRcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkRGF0YXNldCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlclBhcnRpY2xlcyxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkU2hhZGVyRnJhZ21lbnQsXG4gICAgVGdkU2hhZGVyVmVydGV4LFxuICAgIFRnZFRleHR1cmUyRCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmltcG9ydCBCdWJibGVVUkwgZnJvbSBcIi4vc29hcC1idWJibGUud2VicFwiXG5cbmNvbnN0IENPVU5UID0gNTAwMDBcbmNvbnN0IERVUkFUSU9OID0gNVxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0AyMl0gYXNzZXRzID1cIiwgYXNzZXRzKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA1LTE3IGF0IDIxOjQyXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKVxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcbiAgICAgICAgZGF0YXNldCxcbiAgICAgICAgZHJhd01vZGU6IFwiUE9JTlRTXCIsXG4gICAgICAgIHRleHR1cmVzOiB7XG4gICAgICAgICAgICB1bmlUZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJ1YmJsZSksXG4gICAgICAgIH0sXG4gICAgICAgIHNoYWRlcjoge1xuICAgICAgICAgICAgdmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdW5pVGltZTogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICB1bmlEZWx0YTogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICB1bmlDZW50ZXI6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgICAgICB1bmlTcGVlZDogXCJ2ZWMyXCIsXG4gICAgICAgICAgICAgICAgICAgIHVuaVNpemU6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhcnlpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyQWxwaGE6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGRhdGFzZXQuZ2V0VHlwZVJlY29yZCgpLFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgIGBmbG9hdCBsaWZlID0gY2xhbXAoKHVuaVRpbWUgLSBhdHRCaXJ0aCkgKiAkeygxIC8gRFVSQVRJT04pLnRvRml4ZWQoNil9LCAwLjAsIDEuMCk7YCxcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJBbHBoYSA9IDEuMCAtIGxpZmU7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvc2l0aW9uLCAwLCAxKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJnbF9Qb2ludFNpemUgPSB1bmlTaXplICogKDAuMSArIC45ICogbGlmZSAqIGxpZmUpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZhclBvc2l0aW9uIC09IGF0dFNwZWVkICogdW5pRGVsdGEgKiB2YXJBbHBoYTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpZiAobGlmZSA+PSAxLjApIHtcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgYHZhckJpcnRoID0gdW5pVGltZSArIGF0dFJhbmRvbS54ICogJHtEVVJBVElPTi50b0ZpeGVkKDMpfTtgLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YXJQb3NpdGlvbiA9IHVuaUNlbnRlcjtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVjMiBzaGlmdCA9IDAuMSAqIHZlYzIoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS54eSwgdW5pVGltZSkpLFwiLCBcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhclBvc2l0aW9uICs9IHNoaWZ0O1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YXJTcGVlZCA9IDFlNSAqIHVuaVNwZWVkIC8gdW5pRGVsdGE7XCIsXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwifVwiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCBnbF9Qb2ludENvb3JkKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvci5hICo9IHZhckFscGhhO1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkZyYWdDb2xvciA9IGNvbG9yO1wiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VW5pZm9ybXM6ICh7IHRpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcInVuaVNpemVcIiwgTWF0aC5taW4oY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpIC8gNSlcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXCJ1bmlEZWx0YVwiLCBkZWx0YSlcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXCJ1bmlUaW1lXCIsIHRpbWUpXG4gICAgICAgICAgICBwcmcudW5pZm9ybTJmKFwidW5pQ2VudGVyXCIsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueCwgY29udGV4dC5pbnB1dHMucG9pbnRlci55KVxuICAgICAgICAgICAgcHJnLnVuaWZvcm0yZihcInVuaVNwZWVkXCIsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuc3BlZWRYLCBjb250ZXh0LmlucHV0cy5wb2ludGVyLnNwZWVkWSlcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBjbGVhcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBibGVuZDogXCJhbHBoYVwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtwYXJ0aWNsZXNdLFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZTogQnViYmxlVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoY291bnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IFRnZERhdGFzZXQge1xuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgIGF0dFBvc2l0aW9uOiBcInZlYzJcIixcbiAgICAgICAgYXR0U3BlZWQ6IFwidmVjMlwiLFxuICAgICAgICBhdHRCaXJ0aDogXCJmbG9hdFwiLFxuICAgICAgICBhdHRSYW5kb206IFwidmVjMlwiLFxuICAgIH0pXG4gICAgY29uc3QgYXR0UG9zaXRpb246IG51bWJlcltdID0gW11cbiAgICBjb25zdCBhdHRTcGVlZDogbnVtYmVyW10gPSBbXVxuICAgIGNvbnN0IGF0dEJpcnRoOiBudW1iZXJbXSA9IFtdXG4gICAgY29uc3QgYXR0UmFuZG9tOiBudW1iZXJbXSA9IFtdXG4gICAgY29uc3Qgcm5kID0gKCkgPT4gTWF0aC5yYW5kb20oKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBhdHRQb3NpdGlvbi5wdXNoKDEwLCAxMClcbiAgICAgICAgYXR0U3BlZWQucHVzaCgwLCAwKVxuICAgICAgICBhdHRCaXJ0aC5wdXNoKCgtaSAvIGNvdW50KSAqIGR1cmF0aW9uKVxuICAgICAgICBhdHRSYW5kb20ucHVzaChybmQoKSwgcm5kKCkpXG4gICAgfVxuICAgIGRhdGFzZXQuc2V0KFwiYXR0UG9zaXRpb25cIiwgbmV3IEZsb2F0MzJBcnJheShhdHRQb3NpdGlvbikpXG4gICAgZGF0YXNldC5zZXQoXCJhdHRTcGVlZFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFNwZWVkKSlcbiAgICBkYXRhc2V0LnNldChcImF0dEJpcnRoXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0QmlydGgpKVxuICAgIGRhdGFzZXQuc2V0KFwiYXR0UmFuZG9tXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0UmFuZG9tKSlcbiAgICByZXR1cm4gZGF0YXNldFxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UiLCJUZ2REYXRhc2V0IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlclBhcnRpY2xlcyIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFNoYWRlckZyYWdtZW50IiwiVGdkU2hhZGVyVmVydGV4IiwiVGdkVGV4dHVyZTJEIiwiVmlldyIsIkJ1YmJsZVVSTCIsIkNPVU5UIiwiRFVSQVRJT04iLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNvbnNvbGUiLCJjbGVhciIsImRhdGFzZXQiLCJtYWtlRGF0YXNldCIsInBhcnRpY2xlcyIsInNldFVuaWZvcm1zIiwidGltZSIsImRlbHRhIiwicHJnIiwiTWF0aCIsImNvdW50IiwiZHVyYXRpb24iLCJhdHRQb3NpdGlvbiIsImF0dFNwZWVkIiwiYXR0QmlydGgiLCJhdHRSYW5kb20iLCJybmQiLCJpIiwiRmxvYXQzMkFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUF5K0Y7QUFDcGdHLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHVCO0FBRTZCO0FBRVY7QUFFMUMsSUFBTWlCLFFBQVE7QUFDZCxJQUFNQyxXQUFXO0FBRWpCLFNBQVM7QUFDVCxTQUFTQyxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQzdDQyxRQUFRLEdBQUcsQ0FBQyw4QkFBOEJELFNBQVEsMERBQTBEO0lBQzVHLElBQU1FLFFBQVEsSUFBSWQsK0NBQWVBLENBQUNXLFNBQVM7UUFBRSxPQUFPO1lBQUM7WUFBRztZQUFHO1lBQUc7U0FBRTtRQUFFLE9BQU87SUFBRTtJQUMzRSxJQUFNSSxVQUFzQkMsWUFBWVIsT0FBT0M7SUFDL0MsSUFBTVEsWUFBWSxJQUFJaEIsbURBQW1CQSxDQUFDVSxTQUFTO1FBQy9DSSxTQUFBQTtRQUNBLFVBQVU7UUFDVixVQUFVO1lBQ04sWUFBWSxJQUFJViw0Q0FBWUEsQ0FBQ00sU0FBUyxVQUFVLENBQUNDLE9BQU8sS0FBSyxDQUFDLE1BQU07UUFDeEU7UUFDQSxRQUFRO1lBQ0osTUFBTSxJQUFJUiwrQ0FBZUEsQ0FBQztnQkFDdEIsV0FBVyxtQkFDSk4sK0RBQTJCQTtnQkFFbEMsVUFBVTtvQkFDTixTQUFTO29CQUNULFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxVQUFVO29CQUNWLFNBQVM7Z0JBQ2I7Z0JBQ0EsU0FBUztvQkFDTCxVQUFVO2dCQUNkO2dCQUNBLFlBQVlpQixRQUFRLGFBQWE7Z0JBQ2pDLFVBQVU7b0JBQ0wsNkNBQXNFLE9BQXpCLEtBQUlOLFFBQU8sRUFBRyxPQUFPLENBQUMsSUFBRztvQkFDdkU7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7d0JBQ0ssc0NBQXlELE9BQXBCQSxTQUFTLE9BQU8sQ0FBQyxJQUFHO3dCQUMxRDt3QkFDQTt3QkFDQTs0QkFBQzs0QkFBNkM7eUJBQTJDO3dCQUN6Rjt3QkFDQTt3QkFDQTtxQkFDSDtvQkFDRDtpQkFDSDtZQUNMO1lBQ0EsTUFBTSxJQUFJTixpREFBaUJBLENBQUM7Z0JBQ3hCLFVBQVU7b0JBQ047b0JBQ0E7b0JBQ0E7aUJBQ0g7WUFDTDtRQUNKO1FBQ0FlLGFBQWEsU0FBYkE7Z0JBQWdCQyxhQUFBQSxNQUFNQyxjQUFBQSxPQUFPQyxZQUFBQTtZQUN6QkEsSUFBSSxTQUFTLENBQUMsV0FBV0MsS0FBSyxHQUFHLENBQUNYLFFBQVEsS0FBSyxFQUFFQSxRQUFRLE1BQU0sSUFBSTtZQUNuRVUsSUFBSSxTQUFTLENBQUMsWUFBWUQ7WUFDMUJDLElBQUksU0FBUyxDQUFDLFdBQVdGO1lBQ3pCRSxJQUFJLFNBQVMsQ0FBQyxhQUFhVixRQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFQSxRQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3RVUsSUFBSSxTQUFTLENBQUMsWUFBWVYsUUFBUSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRUEsUUFBUSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07UUFDMUY7SUFDSjtJQUNBQSxRQUFRLEdBQUcsQ0FDUEcsT0FDQSxJQUFJWiwrQ0FBZUEsQ0FBQ1MsU0FBUztRQUN6QixPQUFPO1FBQ1AsVUFBVTtZQUFDTTtTQUFVO0lBQ3pCO0lBRUpOLFFBQVEsSUFBSTtBQUNoQjtBQUNBLE9BQU87QUFFUSxTQUFTckI7SUFDcEIscUJBQ0ksa0RBQUNnQixnREFBSUE7UUFDRCxTQUFTSTtRQUNULFFBQVE7WUFDSixPQUFPO2dCQUNILFFBQVFILGtDQUFTQTtZQUNyQjtRQUNKOzs7Ozs7QUFHWjtBQUVBLFNBQVNTLFlBQVlPLEtBQWEsRUFBRUMsUUFBZ0I7SUFDaEQsSUFBTVQsVUFBVSxJQUFJaEIsMENBQVVBLENBQUM7UUFDM0IsYUFBYTtRQUNiLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0EsSUFBTTBCLGNBQXdCLEVBQUU7SUFDaEMsSUFBTUMsV0FBcUIsRUFBRTtJQUM3QixJQUFNQyxXQUFxQixFQUFFO0lBQzdCLElBQU1DLFlBQXNCLEVBQUU7SUFDOUIsSUFBTUMsTUFBTTtlQUFNUCxLQUFLLE1BQU07O0lBQzdCLElBQUssSUFBSVEsSUFBSSxHQUFHQSxJQUFJUCxPQUFPTyxJQUFLO1FBQzVCTCxZQUFZLElBQUksQ0FBQyxJQUFJO1FBQ3JCQyxTQUFTLElBQUksQ0FBQyxHQUFHO1FBQ2pCQyxTQUFTLElBQUksQ0FBRSxDQUFDRyxJQUFJUCxRQUFTQztRQUM3QkksVUFBVSxJQUFJLENBQUNDLE9BQU9BO0lBQzFCO0lBQ0FkLFFBQVEsR0FBRyxDQUFDLGVBQWUsSUFBSWdCLGFBQWFOO0lBQzVDVixRQUFRLEdBQUcsQ0FBQyxZQUFZLElBQUlnQixhQUFhTDtJQUN6Q1gsUUFBUSxHQUFHLENBQUMsWUFBWSxJQUFJZ0IsYUFBYUo7SUFDekNaLFFBQVEsR0FBRyxDQUFDLGFBQWEsSUFBSWdCLGFBQWFIO0lBQzFDLE9BQU9iO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hJcUI7Ozs7Ozs7Ozs7Ozs4QkFFbEI7Ozs7Ozs7Ozs7Ozs7MEJBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLFlBQVksZUFBZTtBQUMzQixZQUFZLG9DQUFvQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlCQUF5QjtBQUNwQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOEJBQThCO0FBQzVDO0FBQ0EsY0FBYyw4REFBOEQ7QUFDNUU7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBOztBQUV5Qjs7QUFFekIsV0FBVyx5QkFBeUI7QUFDcEM7O0FBRUEsbUJBQW1CLG9DQUFtQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBOEQ7QUFDekU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1AsNEJBQTRCLGlDQUFnQjs7QUFFNUM7QUFDQSxTQUFTLDhCQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxlQUFlO0FBQ2Y7QUFDTztBQUNQLGFBQWEseUJBQXlCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxTQUFTLG9DQUFtQjtBQUM1QjtBQUNBLEtBQUsscUJBQXFCO0FBQzFCO0FBQ0E7QUFDQSJ9