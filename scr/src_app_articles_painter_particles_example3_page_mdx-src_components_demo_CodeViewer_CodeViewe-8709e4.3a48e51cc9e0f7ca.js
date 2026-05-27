"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_particles_example3_page_mdx-src_components_demo_CodeViewer_CodeViewe-8709e4"], {
4975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(33329);
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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    const extensions = [\"EXT_color_buffer_float\", \"EXT_float_blend\"]\n    for (const name of extensions) {\n        const ext = context.gl.getExtension(name)\n        if (!ext) throw new Error(`Extension ${name} not supported`)\n    }\n\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    // const is32bits = context.extensions.EXT_color_buffer_float\n    const is32bits = false\n    const dataset: TgdDataset = makeDataset(is32bits ? 50000 : 80000, DURATION)\n    const virtualTime = new TgdTime({ context, speed: 0 })\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: \"POINTS\",\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                    computeSize: [\n                        \"float computeSize(float x) {\",\n                        [\n                            \"// 1 - 4*((x-1)^2-0.5)^2\",\n                            \"float t = x - 1.0;\",\n                            \"float a = t * t - 0.5;\",\n                            \"return 1.0 - 4.0 * a * a;\",\n                        ],\n                        \"}\",\n                    ],\n                },\n                uniforms: {\n                    uniTime: \"float\",\n                    uniDelta: \"float\",\n                    uniCenter: \"vec2\",\n                    uniSpeed: \"vec2\",\n                    uniSize: \"float\",\n                },\n                attributes: dataset.getTypeRecord(),\n                varying: { varAlpha: \"float\" },\n                mainCode: [\n                    `float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,\n                    \"varAlpha = 1.0 - life;\",\n                    \"gl_Position = vec4(attPosition, 0, 1);\",\n                    \"gl_PointSize = uniSize * (0.2 + .8 * computeSize(life));\",\n                    \"varPosition -= attSpeed * uniDelta * 2.0 * (.75 + life);\",\n                    \"if (life >= 1.0) {\",\n                    [\n                        `varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,\n                        \"varPosition = uniCenter;\",\n                        \"varSpeed = uniSpeed * 1e2;\",\n                        \"vec2 shift = 0.3 * vec2(\",\n                        [\"perlinNoise(vec3(attRandom.xy, uniTime)),\", \"perlinNoise(vec3(attRandom.yx, uniTime))\"],\n                        \");\",\n                        \"varSpeed += shift;\",\n                    ],\n                    \"}\",\n                ],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: [\n                    \"vec2 p = 2.0 * (gl_PointCoord.xy - vec2(.5));\",\n                    \"float dist = dot(p, p);\",\n                    \"if (dist >= 1.0) discard;\",\n                    `float value = (1.0 / ${is32bits ? \"20.0\" : \"8.0\"}) / 255.0;`,\n                    \"value *= 1.0 - dist;\",\n                    \"value *= varAlpha;\",\n                    // \"float y = 0.5 * (1.0 + varPosition.y);\",\n                    // \"float h = 0.1;\",\n                    // \"y = h + (1.0 - h) * y;\",\n                    // \"value *= 1.0 - y;\",\n                    \"FragColor = vec4(value, 0.0, 0.0, 1.0);\",\n                ],\n            }),\n        },\n        setUniforms: ({ _time, delta, prg }) => {\n            if (virtualTime.speed === 0) {\n                virtualTime.reset()\n                virtualTime.speed = 1\n            }\n            prg.uniform1f(\"uniSize\", Math.min(context.width, context.height) / 4)\n            prg.uniform1f(\"uniDelta\", delta)\n            prg.uniform1f(\"uniTime\", virtualTime.seconds)\n            let { speedX, speedY } = context.inputs.pointer\n            const factor = -1e5\n            speedX *= factor\n            speedY = factor * Math.abs(speedY)\n            const thresholdY = 0.1\n            const thresholdX = thresholdY / 32\n            speedX = -tgdCalcClamp(speedX, -thresholdX, +thresholdX)\n            speedY = tgdCalcClamp(speedY, 0, +thresholdY) + 0.01\n            prg.uniform2f(\"uniSpeed\", -speedX, -speedY)\n            if (speedX === 0 && speedY === 0) {\n                prg.uniform2f(\"uniCenter\", 9, 9)\n            } else {\n                let x = context.inputs.pointer.x\n                if (x < 0) x = -x * x\n                else x *= x\n                x *= 0.125\n                prg.uniform2f(\"uniCenter\", x, -1.1)\n            }\n        },\n    })\n    const textureFB = new TgdTexture2D(context, {\n        params: {\n            minFilter: \"NEAREST\",\n            magFilter: \"NEAREST\",\n        },\n        storage: {\n            format: is32bits ? \"R32F / RED / FLOAT\" : \"R16F / RED / FLOAT\",\n        },\n    })\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        antiAliasing: false,\n        textureColor0: textureFB,\n        children: [\n            new TgdPainterState(context, {\n                blend: \"add\",\n                children: [clear, particles],\n            }),\n        ],\n    })\n    const palette = new TgdTexture2D(context, {\n        params: {\n            minFilter: \"LINEAR\",\n            magFilter: \"LINEAR\",\n            wrapR: \"CLAMP_TO_EDGE\",\n            wrapS: \"CLAMP_TO_EDGE\",\n            wrapT: \"CLAMP_TO_EDGE\",\n        },\n    }).loadBitmap(tgdCanvasCreatePalette([\"#000\", \"#f00\", \"#f92\", \"#ee3\", \"#ff4\", \"#fff\"]))\n    const filters = new TgdPainterFilter(context, {\n        flipY: true,\n        texture: framebuffer.textureColor0,\n        filters: [\n            new TgdFilter({\n                textures: {\n                    texPalette: palette,\n                },\n                fragmentShaderCode: [\n                    \"float u = clamp(texture(uniTexture, varUV).r, 0.0, 1.0);\",\n                    // \"float u2 = u * u;\",\n                    // \"u = mix(u, u2, varUV.y * 1.0);\",\n                    \"FragColor = texture(texPalette, vec2(u, u));\",\n                ],\n            }),\n        ],\n    })\n    context.add(clear, framebuffer, filters)\n    context.play()\n}"
};
var FULL = "import {\n    tgdCalcClamp,\n    tgdCalcRandom,\n    tgdCanvasCreatePalette,\n    tgdCodeFunction_perlinNoise,\n    TgdContext,\n    TgdDataset,\n    TgdFilter,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterParticles,\n    TgdPainterState,\n    TgdShaderFragment,\n    TgdShaderVertex,\n    TgdTexture2D,\n    TgdTime,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nconst DURATION = 1\n\nfunction init(context: TgdContext, assets: Assets) {\n    const extensions = [\"EXT_color_buffer_float\", \"EXT_float_blend\"]\n    for (const name of extensions) {\n        const ext = context.gl.getExtension(name)\n        if (!ext) throw new Error(`Extension ${name} not supported`)\n    }\n\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    // const is32bits = context.extensions.EXT_color_buffer_float\n    const is32bits = false\n    const dataset: TgdDataset = makeDataset(is32bits ? 50000 : 80000, DURATION)\n    const virtualTime = new TgdTime({ context, speed: 0 })\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: \"POINTS\",\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                    computeSize: [\n                        \"float computeSize(float x) {\",\n                        [\n                            \"// 1 - 4*((x-1)^2-0.5)^2\",\n                            \"float t = x - 1.0;\",\n                            \"float a = t * t - 0.5;\",\n                            \"return 1.0 - 4.0 * a * a;\",\n                        ],\n                        \"}\",\n                    ],\n                },\n                uniforms: {\n                    uniTime: \"float\",\n                    uniDelta: \"float\",\n                    uniCenter: \"vec2\",\n                    uniSpeed: \"vec2\",\n                    uniSize: \"float\",\n                },\n                attributes: dataset.getTypeRecord(),\n                varying: { varAlpha: \"float\" },\n                mainCode: [\n                    `float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,\n                    \"varAlpha = 1.0 - life;\",\n                    \"gl_Position = vec4(attPosition, 0, 1);\",\n                    \"gl_PointSize = uniSize * (0.2 + .8 * computeSize(life));\",\n                    \"varPosition -= attSpeed * uniDelta * 2.0 * (.75 + life);\",\n                    \"if (life >= 1.0) {\",\n                    [\n                        `varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,\n                        \"varPosition = uniCenter;\",\n                        \"varSpeed = uniSpeed * 1e2;\",\n                        \"vec2 shift = 0.3 * vec2(\",\n                        [\"perlinNoise(vec3(attRandom.xy, uniTime)),\", \"perlinNoise(vec3(attRandom.yx, uniTime))\"],\n                        \");\",\n                        \"varSpeed += shift;\",\n                    ],\n                    \"}\",\n                ],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: [\n                    \"vec2 p = 2.0 * (gl_PointCoord.xy - vec2(.5));\",\n                    \"float dist = dot(p, p);\",\n                    \"if (dist >= 1.0) discard;\",\n                    `float value = (1.0 / ${is32bits ? \"20.0\" : \"8.0\"}) / 255.0;`,\n                    \"value *= 1.0 - dist;\",\n                    \"value *= varAlpha;\",\n                    // \"float y = 0.5 * (1.0 + varPosition.y);\",\n                    // \"float h = 0.1;\",\n                    // \"y = h + (1.0 - h) * y;\",\n                    // \"value *= 1.0 - y;\",\n                    \"FragColor = vec4(value, 0.0, 0.0, 1.0);\",\n                ],\n            }),\n        },\n        setUniforms: ({ _time, delta, prg }) => {\n            if (virtualTime.speed === 0) {\n                virtualTime.reset()\n                virtualTime.speed = 1\n            }\n            prg.uniform1f(\"uniSize\", Math.min(context.width, context.height) / 4)\n            prg.uniform1f(\"uniDelta\", delta)\n            prg.uniform1f(\"uniTime\", virtualTime.seconds)\n            let { speedX, speedY } = context.inputs.pointer\n            const factor = -1e5\n            speedX *= factor\n            speedY = factor * Math.abs(speedY)\n            const thresholdY = 0.1\n            const thresholdX = thresholdY / 32\n            speedX = -tgdCalcClamp(speedX, -thresholdX, +thresholdX)\n            speedY = tgdCalcClamp(speedY, 0, +thresholdY) + 0.01\n            prg.uniform2f(\"uniSpeed\", -speedX, -speedY)\n            if (speedX === 0 && speedY === 0) {\n                prg.uniform2f(\"uniCenter\", 9, 9)\n            } else {\n                let x = context.inputs.pointer.x\n                if (x < 0) x = -x * x\n                else x *= x\n                x *= 0.125\n                prg.uniform2f(\"uniCenter\", x, -1.1)\n            }\n        },\n    })\n    const textureFB = new TgdTexture2D(context, {\n        params: {\n            minFilter: \"NEAREST\",\n            magFilter: \"NEAREST\",\n        },\n        storage: {\n            format: is32bits ? \"R32F / RED / FLOAT\" : \"R16F / RED / FLOAT\",\n        },\n    })\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        antiAliasing: false,\n        textureColor0: textureFB,\n        children: [\n            new TgdPainterState(context, {\n                blend: \"add\",\n                children: [clear, particles],\n            }),\n        ],\n    })\n    const palette = new TgdTexture2D(context, {\n        params: {\n            minFilter: \"LINEAR\",\n            magFilter: \"LINEAR\",\n            wrapR: \"CLAMP_TO_EDGE\",\n            wrapS: \"CLAMP_TO_EDGE\",\n            wrapT: \"CLAMP_TO_EDGE\",\n        },\n    }).loadBitmap(tgdCanvasCreatePalette([\"#000\", \"#f00\", \"#f92\", \"#ee3\", \"#ff4\", \"#fff\"]))\n    const filters = new TgdPainterFilter(context, {\n        flipY: true,\n        texture: framebuffer.textureColor0,\n        filters: [\n            new TgdFilter({\n                textures: {\n                    texPalette: palette,\n                },\n                fragmentShaderCode: [\n                    \"float u = clamp(texture(uniTexture, varUV).r, 0.0, 1.0);\",\n                    // \"float u2 = u * u;\",\n                    // \"u = mix(u, u2, varUV.y * 1.0);\",\n                    \"FragColor = texture(texPalette, vec2(u, u));\",\n                ],\n            }),\n        ],\n    })\n    context.add(clear, framebuffer, filters)\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} options={{ alpha: false }} />\n}\n\nfunction makeDataset(count: number, duration: number): TgdDataset {\n    const dataset = new TgdDataset({\n        attPosition: \"vec2\",\n        attSpeed: \"vec2\",\n        attBirth: \"float\",\n        attRandom: \"vec2\",\n    })\n    const attPosition: number[] = []\n    const attSpeed: number[] = []\n    const attBirth: number[] = []\n    const attRandom: number[] = []\n    const rnd = (min = 0, max = 1) => tgdCalcRandom(min, max)\n    for (let i = 0; i < count; i++) {\n        attPosition.push(9, 9)\n        attSpeed.push(rnd(-0.1, +0.1), rnd(-0.1, +0.1))\n        attBirth.push((-i / count) * duration)\n        attRandom.push(rnd(), rnd())\n    }\n    dataset.set(\"attPosition\", new Float32Array(attPosition))\n    dataset.set(\"attSpeed\", new Float32Array(attSpeed))\n    dataset.set(\"attBirth\", new Float32Array(attBirth))\n    dataset.set(\"attRandom\", new Float32Array(attRandom))\n    return dataset\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
33329(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
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



var DURATION = 1;
// #begin
function init(context, assets) {
    var extensions = [
        "EXT_color_buffer_float",
        "EXT_float_blend"
    ];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = extensions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var name = _step.value;
            var ext = context.gl.getExtension(name);
            if (!ext) throw new Error("Extension ".concat(name, " not supported"));
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
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0,
            0,
            1
        ],
        depth: 1
    });
    // const is32bits = context.extensions.EXT_color_buffer_float
    var is32bits = false;
    var dataset = makeDataset(is32bits ? 50000 : 80000, DURATION);
    var virtualTime = new _tolokoban_tgd__rspack_import_1.TgdTime({
        context: context,
        speed: 0
    });
    var particles = new _tolokoban_tgd__rspack_import_1.TgdPainterParticles(context, {
        dataset: dataset,
        drawMode: "POINTS",
        shader: {
            vert: new _tolokoban_tgd__rspack_import_1.TgdShaderVertex({
                functions: _object_spread_props(_object_spread({}, (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_perlinNoise)()), {
                    computeSize: [
                        "float computeSize(float x) {",
                        [
                            "// 1 - 4*((x-1)^2-0.5)^2",
                            "float t = x - 1.0;",
                            "float a = t * t - 0.5;",
                            "return 1.0 - 4.0 * a * a;"
                        ],
                        "}"
                    ]
                }),
                uniforms: {
                    uniTime: "float",
                    uniDelta: "float",
                    uniCenter: "vec2",
                    uniSpeed: "vec2",
                    uniSize: "float"
                },
                attributes: dataset.getTypeRecord(),
                varying: {
                    varAlpha: "float"
                },
                mainCode: [
                    "float life = clamp((uniTime - attBirth) * ".concat((1 / DURATION).toFixed(6), ", 0.0, 1.0);"),
                    "varAlpha = 1.0 - life;",
                    "gl_Position = vec4(attPosition, 0, 1);",
                    "gl_PointSize = uniSize * (0.2 + .8 * computeSize(life));",
                    "varPosition -= attSpeed * uniDelta * 2.0 * (.75 + life);",
                    "if (life >= 1.0) {",
                    [
                        "varBirth = uniTime + attRandom.x * ".concat(DURATION.toFixed(3), ";"),
                        "varPosition = uniCenter;",
                        "varSpeed = uniSpeed * 1e2;",
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
                    "vec2 p = 2.0 * (gl_PointCoord.xy - vec2(.5));",
                    "float dist = dot(p, p);",
                    "if (dist >= 1.0) discard;",
                    "float value = (1.0 / ".concat(is32bits ? "20.0" : "8.0", ") / 255.0;"),
                    "value *= 1.0 - dist;",
                    "value *= varAlpha;",
                    // "float y = 0.5 * (1.0 + varPosition.y);",
                    // "float h = 0.1;",
                    // "y = h + (1.0 - h) * y;",
                    // "value *= 1.0 - y;",
                    "FragColor = vec4(value, 0.0, 0.0, 1.0);"
                ]
            })
        },
        setUniforms: function setUniforms(param) {
            var _time = param._time, delta = param.delta, prg = param.prg;
            if (virtualTime.speed === 0) {
                virtualTime.reset();
                virtualTime.speed = 1;
            }
            prg.uniform1f("uniSize", Math.min(context.width, context.height) / 4);
            prg.uniform1f("uniDelta", delta);
            prg.uniform1f("uniTime", virtualTime.seconds);
            var _context_inputs_pointer = context.inputs.pointer, speedX = _context_inputs_pointer.speedX, speedY = _context_inputs_pointer.speedY;
            var factor = -1e5;
            speedX *= factor;
            speedY = factor * Math.abs(speedY);
            var thresholdY = 0.1;
            var thresholdX = thresholdY / 32;
            speedX = -(0,_tolokoban_tgd__rspack_import_1.tgdCalcClamp)(speedX, -thresholdX, +thresholdX);
            speedY = (0,_tolokoban_tgd__rspack_import_1.tgdCalcClamp)(speedY, 0, +thresholdY) + 0.01;
            prg.uniform2f("uniSpeed", -speedX, -speedY);
            if (speedX === 0 && speedY === 0) {
                prg.uniform2f("uniCenter", 9, 9);
            } else {
                var x = context.inputs.pointer.x;
                if (x < 0) x = -x * x;
                else x *= x;
                x *= 0.125;
                prg.uniform2f("uniCenter", x, -1.1);
            }
        }
    });
    var textureFB = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        params: {
            minFilter: "NEAREST",
            magFilter: "NEAREST"
        },
        storage: {
            format: is32bits ? "R32F / RED / FLOAT" : "R16F / RED / FLOAT"
        }
    });
    var framebuffer = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        antiAliasing: false,
        textureColor0: textureFB,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
                blend: "add",
                children: [
                    clear,
                    particles
                ]
            })
        ]
    });
    var palette = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        params: {
            minFilter: "LINEAR",
            magFilter: "LINEAR",
            wrapR: "CLAMP_TO_EDGE",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE"
        }
    }).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)([
        "#000",
        "#f00",
        "#f92",
        "#ee3",
        "#ff4",
        "#fff"
    ]));
    var filters = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        flipY: true,
        texture: framebuffer.textureColor0,
        filters: [
            new _tolokoban_tgd__rspack_import_1.TgdFilter({
                textures: {
                    texPalette: palette
                },
                fragmentShaderCode: [
                    "float u = clamp(texture(uniTexture, varUV).r, 0.0, 1.0);",
                    // "float u2 = u * u;",
                    // "u = mix(u, u2, varUV.y * 1.0);",
                    "FragColor = texture(texPalette, vec2(u, u));"
                ]
            })
        ]
    });
    context.add(clear, framebuffer, filters);
    context.play();
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        options: {
            alpha: false
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/main.demo.tsx",
        lineNumber: 178,
        columnNumber: 12
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
        attPosition.push(9, 9);
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
85020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(4975);
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move your mouse around to start a fire."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTNfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS04NzA5ZTQuM2E0OGU1MWNjOWUwZjdjYS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wYXJ0aWNsZXMvZXhhbXBsZTMvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wYXJ0aWNsZXMvZXhhbXBsZTMvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUzL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgZXh0ZW5zaW9ucyA9IFtcXFwiRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdFxcXCIsIFxcXCJFWFRfZmxvYXRfYmxlbmRcXFwiXVxcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgZXh0ZW5zaW9ucykge1xcbiAgICAgICAgY29uc3QgZXh0ID0gY29udGV4dC5nbC5nZXRFeHRlbnNpb24obmFtZSlcXG4gICAgICAgIGlmICghZXh0KSB0aHJvdyBuZXcgRXJyb3IoYEV4dGVuc2lvbiAke25hbWV9IG5vdCBzdXBwb3J0ZWRgKVxcbiAgICB9XFxuXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIC8vIGNvbnN0IGlzMzJiaXRzID0gY29udGV4dC5leHRlbnNpb25zLkVYVF9jb2xvcl9idWZmZXJfZmxvYXRcXG4gICAgY29uc3QgaXMzMmJpdHMgPSBmYWxzZVxcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoaXMzMmJpdHMgPyA1MDAwMCA6IDgwMDAwLCBEVVJBVElPTilcXG4gICAgY29uc3QgdmlydHVhbFRpbWUgPSBuZXcgVGdkVGltZSh7IGNvbnRleHQsIHNwZWVkOiAwIH0pXFxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcXG4gICAgICAgIGRhdGFzZXQsXFxuICAgICAgICBkcmF3TW9kZTogXFxcIlBPSU5UU1xcXCIsXFxuICAgICAgICBzaGFkZXI6IHtcXG4gICAgICAgICAgICB2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVTaXplOiBbXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImZsb2F0IGNvbXB1dGVTaXplKGZsb2F0IHgpIHtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIi8vIDEgLSA0KigoeC0xKV4yLTAuNSleMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJmbG9hdCB0ID0geCAtIDEuMDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgYSA9IHQgKiB0IC0gMC41O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJyZXR1cm4gMS4wIC0gNC4wICogYSAqIGE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ9XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgICAgICAgICB1bmlUaW1lOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pRGVsdGE6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlDZW50ZXI6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaVNwZWVkOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlTaXplOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcXG4gICAgICAgICAgICAgICAgdmFyeWluZzogeyB2YXJBbHBoYTogXFxcImZsb2F0XFxcIiB9LFxcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgYGZsb2F0IGxpZmUgPSBjbGFtcCgodW5pVGltZSAtIGF0dEJpcnRoKSAqICR7KDEgLyBEVVJBVElPTikudG9GaXhlZCg2KX0sIDAuMCwgMS4wKTtgLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZhckFscGhhID0gMS4wIC0gbGlmZTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb3NpdGlvbiwgMCwgMSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJnbF9Qb2ludFNpemUgPSB1bmlTaXplICogKDAuMiArIC44ICogY29tcHV0ZVNpemUobGlmZSkpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyUG9zaXRpb24gLT0gYXR0U3BlZWQgKiB1bmlEZWx0YSAqIDIuMCAqICguNzUgKyBsaWZlKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImlmIChsaWZlID49IDEuMCkge1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBbXFxuICAgICAgICAgICAgICAgICAgICAgICAgYHZhckJpcnRoID0gdW5pVGltZSArIGF0dFJhbmRvbS54ICogJHtEVVJBVElPTi50b0ZpeGVkKDMpfTtgLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiA9IHVuaUNlbnRlcjtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJTcGVlZCA9IHVuaVNwZWVkICogMWUyO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZlYzIgc2hpZnQgPSAwLjMgKiB2ZWMyKFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS54eSwgdW5pVGltZSkpLFxcXCIsIFxcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS55eCwgdW5pVGltZSkpXFxcIl0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIik7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmFyU3BlZWQgKz0gc2hpZnQ7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgICAgICBcXFwifVxcXCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMyIHAgPSAyLjAgKiAoZ2xfUG9pbnRDb29yZC54eSAtIHZlYzIoLjUpKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImZsb2F0IGRpc3QgPSBkb3QocCwgcCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJpZiAoZGlzdCA+PSAxLjApIGRpc2NhcmQ7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGBmbG9hdCB2YWx1ZSA9ICgxLjAgLyAke2lzMzJiaXRzID8gXFxcIjIwLjBcXFwiIDogXFxcIjguMFxcXCJ9KSAvIDI1NS4wO2AsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFsdWUgKj0gMS4wIC0gZGlzdDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZhbHVlICo9IHZhckFscGhhO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAvLyBcXFwiZmxvYXQgeSA9IDAuNSAqICgxLjAgKyB2YXJQb3NpdGlvbi55KTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgLy8gXFxcImZsb2F0IGggPSAwLjE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIC8vIFxcXCJ5ID0gaCArICgxLjAgLSBoKSAqIHk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIC8vIFxcXCJ2YWx1ZSAqPSAxLjAgLSB5O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gdmVjNCh2YWx1ZSwgMC4wLCAwLjAsIDEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZS5zcGVlZCA9PT0gMCkge1xcbiAgICAgICAgICAgICAgICB2aXJ0dWFsVGltZS5yZXNldCgpXFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lLnNwZWVkID0gMVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlTaXplXFxcIiwgTWF0aC5taW4oY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpIC8gNClcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlEZWx0YVxcXCIsIGRlbHRhKVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaVRpbWVcXFwiLCB2aXJ0dWFsVGltZS5zZWNvbmRzKVxcbiAgICAgICAgICAgIGxldCB7IHNwZWVkWCwgc3BlZWRZIH0gPSBjb250ZXh0LmlucHV0cy5wb2ludGVyXFxuICAgICAgICAgICAgY29uc3QgZmFjdG9yID0gLTFlNVxcbiAgICAgICAgICAgIHNwZWVkWCAqPSBmYWN0b3JcXG4gICAgICAgICAgICBzcGVlZFkgPSBmYWN0b3IgKiBNYXRoLmFicyhzcGVlZFkpXFxuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkWSA9IDAuMVxcbiAgICAgICAgICAgIGNvbnN0IHRocmVzaG9sZFggPSB0aHJlc2hvbGRZIC8gMzJcXG4gICAgICAgICAgICBzcGVlZFggPSAtdGdkQ2FsY0NsYW1wKHNwZWVkWCwgLXRocmVzaG9sZFgsICt0aHJlc2hvbGRYKVxcbiAgICAgICAgICAgIHNwZWVkWSA9IHRnZENhbGNDbGFtcChzcGVlZFksIDAsICt0aHJlc2hvbGRZKSArIDAuMDFcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTJmKFxcXCJ1bmlTcGVlZFxcXCIsIC1zcGVlZFgsIC1zcGVlZFkpXFxuICAgICAgICAgICAgaWYgKHNwZWVkWCA9PT0gMCAmJiBzcGVlZFkgPT09IDApIHtcXG4gICAgICAgICAgICAgICAgcHJnLnVuaWZvcm0yZihcXFwidW5pQ2VudGVyXFxcIiwgOSwgOSlcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueFxcbiAgICAgICAgICAgICAgICBpZiAoeCA8IDApIHggPSAteCAqIHhcXG4gICAgICAgICAgICAgICAgZWxzZSB4ICo9IHhcXG4gICAgICAgICAgICAgICAgeCAqPSAwLjEyNVxcbiAgICAgICAgICAgICAgICBwcmcudW5pZm9ybTJmKFxcXCJ1bmlDZW50ZXJcXFwiLCB4LCAtMS4xKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHRleHR1cmVGQiA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgc3RvcmFnZToge1xcbiAgICAgICAgICAgIGZvcm1hdDogaXMzMmJpdHMgPyBcXFwiUjMyRiAvIFJFRCAvIEZMT0FUXFxcIiA6IFxcXCJSMTZGIC8gUkVEIC8gRkxPQVRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIGFudGlBbGlhc2luZzogZmFsc2UsXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlRkIsXFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBibGVuZDogXFxcImFkZFxcXCIsXFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIHBhcnRpY2xlc10sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgd3JhcFI6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgICAgICB3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgICAgIHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjMDAwXFxcIiwgXFxcIiNmMDBcXFwiLCBcXFwiI2Y5MlxcXCIsIFxcXCIjZWUzXFxcIiwgXFxcIiNmZjRcXFwiLCBcXFwiI2ZmZlxcXCJdKSlcXG4gICAgY29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcXG4gICAgICAgIGZpbHRlcnM6IFtcXG4gICAgICAgICAgICBuZXcgVGdkRmlsdGVyKHtcXG4gICAgICAgICAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRleFBhbGV0dGU6IHBhbGV0dGUsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgXFxcImZsb2F0IHUgPSBjbGFtcCh0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKS5yLCAwLjAsIDEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIC8vIFxcXCJmbG9hdCB1MiA9IHUgKiB1O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAvLyBcXFwidSA9IG1peCh1LCB1MiwgdmFyVVYueSAqIDEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSB0ZXh0dXJlKHRleFBhbGV0dGUsIHZlYzIodSwgdSkpO1xcXCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChjbGVhciwgZnJhbWVidWZmZXIsIGZpbHRlcnMpXFxuICAgIGNvbnRleHQucGxheSgpXFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdGdkQ2FsY0NsYW1wLFxcbiAgICB0Z2RDYWxjUmFuZG9tLFxcbiAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZERhdGFzZXQsXFxuICAgIFRnZEZpbHRlcixcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXFxuICAgIFRnZFBhaW50ZXJQYXJ0aWNsZXMsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkU2hhZGVyRnJhZ21lbnQsXFxuICAgIFRnZFNoYWRlclZlcnRleCxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICBUZ2RUaW1lLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmNvbnN0IERVUkFUSU9OID0gMVxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgZXh0ZW5zaW9ucyA9IFtcXFwiRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdFxcXCIsIFxcXCJFWFRfZmxvYXRfYmxlbmRcXFwiXVxcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgZXh0ZW5zaW9ucykge1xcbiAgICAgICAgY29uc3QgZXh0ID0gY29udGV4dC5nbC5nZXRFeHRlbnNpb24obmFtZSlcXG4gICAgICAgIGlmICghZXh0KSB0aHJvdyBuZXcgRXJyb3IoYEV4dGVuc2lvbiAke25hbWV9IG5vdCBzdXBwb3J0ZWRgKVxcbiAgICB9XFxuXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIC8vIGNvbnN0IGlzMzJiaXRzID0gY29udGV4dC5leHRlbnNpb25zLkVYVF9jb2xvcl9idWZmZXJfZmxvYXRcXG4gICAgY29uc3QgaXMzMmJpdHMgPSBmYWxzZVxcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoaXMzMmJpdHMgPyA1MDAwMCA6IDgwMDAwLCBEVVJBVElPTilcXG4gICAgY29uc3QgdmlydHVhbFRpbWUgPSBuZXcgVGdkVGltZSh7IGNvbnRleHQsIHNwZWVkOiAwIH0pXFxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcXG4gICAgICAgIGRhdGFzZXQsXFxuICAgICAgICBkcmF3TW9kZTogXFxcIlBPSU5UU1xcXCIsXFxuICAgICAgICBzaGFkZXI6IHtcXG4gICAgICAgICAgICB2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVTaXplOiBbXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcImZsb2F0IGNvbXB1dGVTaXplKGZsb2F0IHgpIHtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIi8vIDEgLSA0KigoeC0xKV4yLTAuNSleMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJmbG9hdCB0ID0geCAtIDEuMDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgYSA9IHQgKiB0IC0gMC41O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJyZXR1cm4gMS4wIC0gNC4wICogYSAqIGE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ9XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgICAgICAgICB1bmlUaW1lOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pRGVsdGE6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlDZW50ZXI6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaVNwZWVkOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlTaXplOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcXG4gICAgICAgICAgICAgICAgdmFyeWluZzogeyB2YXJBbHBoYTogXFxcImZsb2F0XFxcIiB9LFxcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgYGZsb2F0IGxpZmUgPSBjbGFtcCgodW5pVGltZSAtIGF0dEJpcnRoKSAqICR7KDEgLyBEVVJBVElPTikudG9GaXhlZCg2KX0sIDAuMCwgMS4wKTtgLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZhckFscGhhID0gMS4wIC0gbGlmZTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb3NpdGlvbiwgMCwgMSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJnbF9Qb2ludFNpemUgPSB1bmlTaXplICogKDAuMiArIC44ICogY29tcHV0ZVNpemUobGlmZSkpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyUG9zaXRpb24gLT0gYXR0U3BlZWQgKiB1bmlEZWx0YSAqIDIuMCAqICguNzUgKyBsaWZlKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImlmIChsaWZlID49IDEuMCkge1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBbXFxuICAgICAgICAgICAgICAgICAgICAgICAgYHZhckJpcnRoID0gdW5pVGltZSArIGF0dFJhbmRvbS54ICogJHtEVVJBVElPTi50b0ZpeGVkKDMpfTtgLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiA9IHVuaUNlbnRlcjtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJTcGVlZCA9IHVuaVNwZWVkICogMWUyO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZlYzIgc2hpZnQgPSAwLjMgKiB2ZWMyKFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS54eSwgdW5pVGltZSkpLFxcXCIsIFxcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS55eCwgdW5pVGltZSkpXFxcIl0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIik7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmFyU3BlZWQgKz0gc2hpZnQ7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgICAgICBcXFwifVxcXCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMyIHAgPSAyLjAgKiAoZ2xfUG9pbnRDb29yZC54eSAtIHZlYzIoLjUpKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImZsb2F0IGRpc3QgPSBkb3QocCwgcCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJpZiAoZGlzdCA+PSAxLjApIGRpc2NhcmQ7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGBmbG9hdCB2YWx1ZSA9ICgxLjAgLyAke2lzMzJiaXRzID8gXFxcIjIwLjBcXFwiIDogXFxcIjguMFxcXCJ9KSAvIDI1NS4wO2AsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFsdWUgKj0gMS4wIC0gZGlzdDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZhbHVlICo9IHZhckFscGhhO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAvLyBcXFwiZmxvYXQgeSA9IDAuNSAqICgxLjAgKyB2YXJQb3NpdGlvbi55KTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgLy8gXFxcImZsb2F0IGggPSAwLjE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIC8vIFxcXCJ5ID0gaCArICgxLjAgLSBoKSAqIHk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIC8vIFxcXCJ2YWx1ZSAqPSAxLjAgLSB5O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gdmVjNCh2YWx1ZSwgMC4wLCAwLjAsIDEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZS5zcGVlZCA9PT0gMCkge1xcbiAgICAgICAgICAgICAgICB2aXJ0dWFsVGltZS5yZXNldCgpXFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lLnNwZWVkID0gMVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlTaXplXFxcIiwgTWF0aC5taW4oY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpIC8gNClcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlEZWx0YVxcXCIsIGRlbHRhKVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaVRpbWVcXFwiLCB2aXJ0dWFsVGltZS5zZWNvbmRzKVxcbiAgICAgICAgICAgIGxldCB7IHNwZWVkWCwgc3BlZWRZIH0gPSBjb250ZXh0LmlucHV0cy5wb2ludGVyXFxuICAgICAgICAgICAgY29uc3QgZmFjdG9yID0gLTFlNVxcbiAgICAgICAgICAgIHNwZWVkWCAqPSBmYWN0b3JcXG4gICAgICAgICAgICBzcGVlZFkgPSBmYWN0b3IgKiBNYXRoLmFicyhzcGVlZFkpXFxuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkWSA9IDAuMVxcbiAgICAgICAgICAgIGNvbnN0IHRocmVzaG9sZFggPSB0aHJlc2hvbGRZIC8gMzJcXG4gICAgICAgICAgICBzcGVlZFggPSAtdGdkQ2FsY0NsYW1wKHNwZWVkWCwgLXRocmVzaG9sZFgsICt0aHJlc2hvbGRYKVxcbiAgICAgICAgICAgIHNwZWVkWSA9IHRnZENhbGNDbGFtcChzcGVlZFksIDAsICt0aHJlc2hvbGRZKSArIDAuMDFcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTJmKFxcXCJ1bmlTcGVlZFxcXCIsIC1zcGVlZFgsIC1zcGVlZFkpXFxuICAgICAgICAgICAgaWYgKHNwZWVkWCA9PT0gMCAmJiBzcGVlZFkgPT09IDApIHtcXG4gICAgICAgICAgICAgICAgcHJnLnVuaWZvcm0yZihcXFwidW5pQ2VudGVyXFxcIiwgOSwgOSlcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueFxcbiAgICAgICAgICAgICAgICBpZiAoeCA8IDApIHggPSAteCAqIHhcXG4gICAgICAgICAgICAgICAgZWxzZSB4ICo9IHhcXG4gICAgICAgICAgICAgICAgeCAqPSAwLjEyNVxcbiAgICAgICAgICAgICAgICBwcmcudW5pZm9ybTJmKFxcXCJ1bmlDZW50ZXJcXFwiLCB4LCAtMS4xKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHRleHR1cmVGQiA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgc3RvcmFnZToge1xcbiAgICAgICAgICAgIGZvcm1hdDogaXMzMmJpdHMgPyBcXFwiUjMyRiAvIFJFRCAvIEZMT0FUXFxcIiA6IFxcXCJSMTZGIC8gUkVEIC8gRkxPQVRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIGFudGlBbGlhc2luZzogZmFsc2UsXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlRkIsXFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBibGVuZDogXFxcImFkZFxcXCIsXFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIHBhcnRpY2xlc10sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgd3JhcFI6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgICAgICB3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgICAgIHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjMDAwXFxcIiwgXFxcIiNmMDBcXFwiLCBcXFwiI2Y5MlxcXCIsIFxcXCIjZWUzXFxcIiwgXFxcIiNmZjRcXFwiLCBcXFwiI2ZmZlxcXCJdKSlcXG4gICAgY29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcXG4gICAgICAgIGZpbHRlcnM6IFtcXG4gICAgICAgICAgICBuZXcgVGdkRmlsdGVyKHtcXG4gICAgICAgICAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRleFBhbGV0dGU6IHBhbGV0dGUsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgXFxcImZsb2F0IHUgPSBjbGFtcCh0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKS5yLCAwLjAsIDEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIC8vIFxcXCJmbG9hdCB1MiA9IHUgKiB1O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAvLyBcXFwidSA9IG1peCh1LCB1MiwgdmFyVVYueSAqIDEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSB0ZXh0dXJlKHRleFBhbGV0dGUsIHZlYzIodSwgdSkpO1xcXCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChjbGVhciwgZnJhbWVidWZmZXIsIGZpbHRlcnMpXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSBvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fSAvPlxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlRGF0YXNldChjb3VudDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogVGdkRGF0YXNldCB7XFxuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuICAgICAgICBhdHRQb3NpdGlvbjogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgYXR0U3BlZWQ6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgIGF0dEJpcnRoOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgYXR0UmFuZG9tOiBcXFwidmVjMlxcXCIsXFxuICAgIH0pXFxuICAgIGNvbnN0IGF0dFBvc2l0aW9uOiBudW1iZXJbXSA9IFtdXFxuICAgIGNvbnN0IGF0dFNwZWVkOiBudW1iZXJbXSA9IFtdXFxuICAgIGNvbnN0IGF0dEJpcnRoOiBudW1iZXJbXSA9IFtdXFxuICAgIGNvbnN0IGF0dFJhbmRvbTogbnVtYmVyW10gPSBbXVxcbiAgICBjb25zdCBybmQgPSAobWluID0gMCwgbWF4ID0gMSkgPT4gdGdkQ2FsY1JhbmRvbShtaW4sIG1heClcXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XFxuICAgICAgICBhdHRQb3NpdGlvbi5wdXNoKDksIDkpXFxuICAgICAgICBhdHRTcGVlZC5wdXNoKHJuZCgtMC4xLCArMC4xKSwgcm5kKC0wLjEsICswLjEpKVxcbiAgICAgICAgYXR0QmlydGgucHVzaCgoLWkgLyBjb3VudCkgKiBkdXJhdGlvbilcXG4gICAgICAgIGF0dFJhbmRvbS5wdXNoKHJuZCgpLCBybmQoKSlcXG4gICAgfVxcbiAgICBkYXRhc2V0LnNldChcXFwiYXR0UG9zaXRpb25cXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFBvc2l0aW9uKSlcXG4gICAgZGF0YXNldC5zZXQoXFxcImF0dFNwZWVkXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRTcGVlZCkpXFxuICAgIGRhdGFzZXQuc2V0KFxcXCJhdHRCaXJ0aFxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0QmlydGgpKVxcbiAgICBkYXRhc2V0LnNldChcXFwiYXR0UmFuZG9tXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRSYW5kb20pKVxcbiAgICByZXR1cm4gZGF0YXNldFxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0Z2RDYWxjQ2xhbXAsXG4gICAgdGdkQ2FsY1JhbmRvbSxcbiAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxuICAgIHRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZERhdGFzZXQsXG4gICAgVGdkRmlsdGVyLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcbiAgICBUZ2RQYWludGVyUGFydGljbGVzLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFRpbWUsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5jb25zdCBEVVJBVElPTiA9IDFcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgY29uc3QgZXh0ZW5zaW9ucyA9IFtcIkVYVF9jb2xvcl9idWZmZXJfZmxvYXRcIiwgXCJFWFRfZmxvYXRfYmxlbmRcIl1cbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgZXh0ZW5zaW9ucykge1xuICAgICAgICBjb25zdCBleHQgPSBjb250ZXh0LmdsLmdldEV4dGVuc2lvbihuYW1lKVxuICAgICAgICBpZiAoIWV4dCkgdGhyb3cgbmV3IEVycm9yKGBFeHRlbnNpb24gJHtuYW1lfSBub3Qgc3VwcG9ydGVkYClcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KVxuICAgIC8vIGNvbnN0IGlzMzJiaXRzID0gY29udGV4dC5leHRlbnNpb25zLkVYVF9jb2xvcl9idWZmZXJfZmxvYXRcbiAgICBjb25zdCBpczMyYml0cyA9IGZhbHNlXG4gICAgY29uc3QgZGF0YXNldDogVGdkRGF0YXNldCA9IG1ha2VEYXRhc2V0KGlzMzJiaXRzID8gNTAwMDAgOiA4MDAwMCwgRFVSQVRJT04pXG4gICAgY29uc3QgdmlydHVhbFRpbWUgPSBuZXcgVGdkVGltZSh7IGNvbnRleHQsIHNwZWVkOiAwIH0pXG4gICAgY29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xuICAgICAgICBkYXRhc2V0LFxuICAgICAgICBkcmF3TW9kZTogXCJQT0lOVFNcIixcbiAgICAgICAgc2hhZGVyOiB7XG4gICAgICAgICAgICB2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlKCksXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVTaXplOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZsb2F0IGNvbXB1dGVTaXplKGZsb2F0IHgpIHtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi8vIDEgLSA0KigoeC0xKV4yLTAuNSleMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXQgdCA9IHggLSAxLjA7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCBhID0gdCAqIHQgLSAwLjU7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4gMS4wIC0gNC4wICogYSAqIGE7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ9XCIsXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgICAgICB1bmlUaW1lOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgICAgIHVuaURlbHRhOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgICAgIHVuaUNlbnRlcjogXCJ2ZWMyXCIsXG4gICAgICAgICAgICAgICAgICAgIHVuaVNwZWVkOiBcInZlYzJcIixcbiAgICAgICAgICAgICAgICAgICAgdW5pU2l6ZTogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXG4gICAgICAgICAgICAgICAgdmFyeWluZzogeyB2YXJBbHBoYTogXCJmbG9hdFwiIH0sXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgYGZsb2F0IGxpZmUgPSBjbGFtcCgodW5pVGltZSAtIGF0dEJpcnRoKSAqICR7KDEgLyBEVVJBVElPTikudG9GaXhlZCg2KX0sIDAuMCwgMS4wKTtgLFxuICAgICAgICAgICAgICAgICAgICBcInZhckFscGhhID0gMS4wIC0gbGlmZTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJnbF9Qb3NpdGlvbiA9IHZlYzQoYXR0UG9zaXRpb24sIDAsIDEpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImdsX1BvaW50U2l6ZSA9IHVuaVNpemUgKiAoMC4yICsgLjggKiBjb21wdXRlU2l6ZShsaWZlKSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFyUG9zaXRpb24gLT0gYXR0U3BlZWQgKiB1bmlEZWx0YSAqIDIuMCAqICguNzUgKyBsaWZlKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpZiAobGlmZSA+PSAxLjApIHtcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgYHZhckJpcnRoID0gdW5pVGltZSArIGF0dFJhbmRvbS54ICogJHtEVVJBVElPTi50b0ZpeGVkKDMpfTtgLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YXJQb3NpdGlvbiA9IHVuaUNlbnRlcjtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFyU3BlZWQgPSB1bmlTcGVlZCAqIDFlMjtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVjMiBzaGlmdCA9IDAuMyAqIHZlYzIoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS54eSwgdW5pVGltZSkpLFwiLCBcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhclNwZWVkICs9IHNoaWZ0O1wiLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBcIn1cIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMiBwID0gMi4wICogKGdsX1BvaW50Q29vcmQueHkgLSB2ZWMyKC41KSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZmxvYXQgZGlzdCA9IGRvdChwLCBwKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpZiAoZGlzdCA+PSAxLjApIGRpc2NhcmQ7XCIsXG4gICAgICAgICAgICAgICAgICAgIGBmbG9hdCB2YWx1ZSA9ICgxLjAgLyAke2lzMzJiaXRzID8gXCIyMC4wXCIgOiBcIjguMFwifSkgLyAyNTUuMDtgLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlICo9IDEuMCAtIGRpc3Q7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWUgKj0gdmFyQWxwaGE7XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vIFwiZmxvYXQgeSA9IDAuNSAqICgxLjAgKyB2YXJQb3NpdGlvbi55KTtcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gXCJmbG9hdCBoID0gMC4xO1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyBcInkgPSBoICsgKDEuMCAtIGgpICogeTtcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gXCJ2YWx1ZSAqPSAxLjAgLSB5O1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkZyYWdDb2xvciA9IHZlYzQodmFsdWUsIDAuMCwgMC4wLCAxLjApO1wiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VW5pZm9ybXM6ICh7IF90aW1lLCBkZWx0YSwgcHJnIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZS5zcGVlZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lLnJlc2V0KClcbiAgICAgICAgICAgICAgICB2aXJ0dWFsVGltZS5zcGVlZCA9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXCJ1bmlTaXplXCIsIE1hdGgubWluKGNvbnRleHQud2lkdGgsIGNvbnRleHQuaGVpZ2h0KSAvIDQpXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFwidW5pRGVsdGFcIiwgZGVsdGEpXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFwidW5pVGltZVwiLCB2aXJ0dWFsVGltZS5zZWNvbmRzKVxuICAgICAgICAgICAgbGV0IHsgc3BlZWRYLCBzcGVlZFkgfSA9IGNvbnRleHQuaW5wdXRzLnBvaW50ZXJcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvciA9IC0xZTVcbiAgICAgICAgICAgIHNwZWVkWCAqPSBmYWN0b3JcbiAgICAgICAgICAgIHNwZWVkWSA9IGZhY3RvciAqIE1hdGguYWJzKHNwZWVkWSlcbiAgICAgICAgICAgIGNvbnN0IHRocmVzaG9sZFkgPSAwLjFcbiAgICAgICAgICAgIGNvbnN0IHRocmVzaG9sZFggPSB0aHJlc2hvbGRZIC8gMzJcbiAgICAgICAgICAgIHNwZWVkWCA9IC10Z2RDYWxjQ2xhbXAoc3BlZWRYLCAtdGhyZXNob2xkWCwgK3RocmVzaG9sZFgpXG4gICAgICAgICAgICBzcGVlZFkgPSB0Z2RDYWxjQ2xhbXAoc3BlZWRZLCAwLCArdGhyZXNob2xkWSkgKyAwLjAxXG4gICAgICAgICAgICBwcmcudW5pZm9ybTJmKFwidW5pU3BlZWRcIiwgLXNwZWVkWCwgLXNwZWVkWSlcbiAgICAgICAgICAgIGlmIChzcGVlZFggPT09IDAgJiYgc3BlZWRZID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcHJnLnVuaWZvcm0yZihcInVuaUNlbnRlclwiLCA5LCA5KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueFxuICAgICAgICAgICAgICAgIGlmICh4IDwgMCkgeCA9IC14ICogeFxuICAgICAgICAgICAgICAgIGVsc2UgeCAqPSB4XG4gICAgICAgICAgICAgICAgeCAqPSAwLjEyNVxuICAgICAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXCJ1bmlDZW50ZXJcIiwgeCwgLTEuMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnN0IHRleHR1cmVGQiA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICB9LFxuICAgICAgICBzdG9yYWdlOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IGlzMzJiaXRzID8gXCJSMzJGIC8gUkVEIC8gRkxPQVRcIiA6IFwiUjE2RiAvIFJFRCAvIEZMT0FUXCIsXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xuICAgICAgICBhbnRpQWxpYXNpbmc6IGZhbHNlLFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlRkIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBibGVuZDogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBwYXJ0aWNsZXNdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgd3JhcFI6IFwiQ0xBTVBfVE9fRURHRVwiLFxuICAgICAgICAgICAgd3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxuICAgICAgICAgICAgd3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxuICAgICAgICB9LFxuICAgIH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjMDAwXCIsIFwiI2YwMFwiLCBcIiNmOTJcIiwgXCIjZWUzXCIsIFwiI2ZmNFwiLCBcIiNmZmZcIl0pKVxuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG4gICAgICAgIGZsaXBZOiB0cnVlLFxuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxuICAgICAgICBmaWx0ZXJzOiBbXG4gICAgICAgICAgICBuZXcgVGdkRmlsdGVyKHtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlczoge1xuICAgICAgICAgICAgICAgICAgICB0ZXhQYWxldHRlOiBwYWxldHRlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZmxvYXQgdSA9IGNsYW1wKHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpLnIsIDAuMCwgMS4wKTtcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gXCJmbG9hdCB1MiA9IHUgKiB1O1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyBcInUgPSBtaXgodSwgdTIsIHZhclVWLnkgKiAxLjApO1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkZyYWdDb2xvciA9IHRleHR1cmUodGV4UGFsZXR0ZSwgdmVjMih1LCB1KSk7XCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIGZyYW1lYnVmZmVyLCBmaWx0ZXJzKVxuICAgIGNvbnRleHQucGxheSgpXG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IG9wdGlvbnM9e3sgYWxwaGE6IGZhbHNlIH19IC8+XG59XG5cbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGNvdW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBUZ2REYXRhc2V0IHtcbiAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuICAgICAgICBhdHRQb3NpdGlvbjogXCJ2ZWMyXCIsXG4gICAgICAgIGF0dFNwZWVkOiBcInZlYzJcIixcbiAgICAgICAgYXR0QmlydGg6IFwiZmxvYXRcIixcbiAgICAgICAgYXR0UmFuZG9tOiBcInZlYzJcIixcbiAgICB9KVxuICAgIGNvbnN0IGF0dFBvc2l0aW9uOiBudW1iZXJbXSA9IFtdXG4gICAgY29uc3QgYXR0U3BlZWQ6IG51bWJlcltdID0gW11cbiAgICBjb25zdCBhdHRCaXJ0aDogbnVtYmVyW10gPSBbXVxuICAgIGNvbnN0IGF0dFJhbmRvbTogbnVtYmVyW10gPSBbXVxuICAgIGNvbnN0IHJuZCA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiB0Z2RDYWxjUmFuZG9tKG1pbiwgbWF4KVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBhdHRQb3NpdGlvbi5wdXNoKDksIDkpXG4gICAgICAgIGF0dFNwZWVkLnB1c2gocm5kKC0wLjEsICswLjEpLCBybmQoLTAuMSwgKzAuMSkpXG4gICAgICAgIGF0dEJpcnRoLnB1c2goKC1pIC8gY291bnQpICogZHVyYXRpb24pXG4gICAgICAgIGF0dFJhbmRvbS5wdXNoKHJuZCgpLCBybmQoKSlcbiAgICB9XG4gICAgZGF0YXNldC5zZXQoXCJhdHRQb3NpdGlvblwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFBvc2l0aW9uKSlcbiAgICBkYXRhc2V0LnNldChcImF0dFNwZWVkXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0U3BlZWQpKVxuICAgIGRhdGFzZXQuc2V0KFwiYXR0QmlydGhcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRCaXJ0aCkpXG4gICAgZGF0YXNldC5zZXQoXCJhdHRSYW5kb21cIiwgbmV3IEZsb2F0MzJBcnJheShhdHRSYW5kb20pKVxuICAgIHJldHVybiBkYXRhc2V0XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENhbGNDbGFtcCIsInRnZENhbGNSYW5kb20iLCJ0Z2RDYW52YXNDcmVhdGVQYWxldHRlIiwidGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlIiwiVGdkRGF0YXNldCIsIlRnZEZpbHRlciIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyRnJhbWVidWZmZXIiLCJUZ2RQYWludGVyUGFydGljbGVzIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkU2hhZGVyRnJhZ21lbnQiLCJUZ2RTaGFkZXJWZXJ0ZXgiLCJUZ2RUZXh0dXJlMkQiLCJUZ2RUaW1lIiwiVmlldyIsIkRVUkFUSU9OIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJleHRlbnNpb25zIiwiX2l0ZXJhdG9yRXJyb3IiLCJuYW1lIiwiZXh0IiwiRXJyb3IiLCJjbGVhciIsImlzMzJiaXRzIiwiZGF0YXNldCIsIm1ha2VEYXRhc2V0IiwidmlydHVhbFRpbWUiLCJwYXJ0aWNsZXMiLCJzZXRVbmlmb3JtcyIsIl90aW1lIiwiZGVsdGEiLCJwcmciLCJNYXRoIiwiX2NvbnRleHRfaW5wdXRzX3BvaW50ZXIiLCJzcGVlZFgiLCJzcGVlZFkiLCJmYWN0b3IiLCJ0aHJlc2hvbGRZIiwidGhyZXNob2xkWCIsIngiLCJ0ZXh0dXJlRkIiLCJmcmFtZWJ1ZmZlciIsInBhbGV0dGUiLCJmaWx0ZXJzIiwiY291bnQiLCJkdXJhdGlvbiIsImF0dFBvc2l0aW9uIiwiYXR0U3BlZWQiLCJhdHRCaXJ0aCIsImF0dFJhbmRvbSIsInJuZCIsIm1pbiIsIm1heCIsImkiLCJGbG9hdDMyQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDdkI7QUFFOUIsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBNHBNO0FBQ3ZyTSxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSixzQ0FBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFD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