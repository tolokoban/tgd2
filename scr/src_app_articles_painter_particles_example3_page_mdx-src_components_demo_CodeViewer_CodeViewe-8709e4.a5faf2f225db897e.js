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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/main.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move your mouse around to start a fire."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTNfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS04NzA5ZTQuYTVmYWYyZjIyNWRiODk3ZS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BhcnRpY2xlcy9leGFtcGxlMy9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUzL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUzL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBleHRlbnNpb25zID0gW1xcXCJFWFRfY29sb3JfYnVmZmVyX2Zsb2F0XFxcIiwgXFxcIkVYVF9mbG9hdF9ibGVuZFxcXCJdXFxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBleHRlbnNpb25zKSB7XFxuICAgICAgICBjb25zdCBleHQgPSBjb250ZXh0LmdsLmdldEV4dGVuc2lvbihuYW1lKVxcbiAgICAgICAgaWYgKCFleHQpIHRocm93IG5ldyBFcnJvcihgRXh0ZW5zaW9uICR7bmFtZX0gbm90IHN1cHBvcnRlZGApXFxuICAgIH1cXG5cXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgLy8gY29uc3QgaXMzMmJpdHMgPSBjb250ZXh0LmV4dGVuc2lvbnMuRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdFxcbiAgICBjb25zdCBpczMyYml0cyA9IGZhbHNlXFxuICAgIGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChpczMyYml0cyA/IDUwMDAwIDogODAwMDAsIERVUkFUSU9OKVxcbiAgICBjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSlcXG4gICAgY29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xcbiAgICAgICAgZGF0YXNldCxcXG4gICAgICAgIGRyYXdNb2RlOiBcXFwiUE9JTlRTXFxcIixcXG4gICAgICAgIHNoYWRlcjoge1xcbiAgICAgICAgICAgIHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZVNpemU6IFtcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgY29tcHV0ZVNpemUoZmxvYXQgeCkge1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiLy8gMSAtIDQqKCh4LTEpXjItMC41KV4yXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcImZsb2F0IHQgPSB4IC0gMS4wO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJmbG9hdCBhID0gdCAqIHQgLSAwLjU7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcInJldHVybiAxLjAgLSA0LjAgKiBhICogYTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIn1cXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHVuaVRpbWU6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlEZWx0YTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaUNlbnRlcjogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pU3BlZWQ6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaVNpemU6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGRhdGFzZXQuZ2V0VHlwZVJlY29yZCgpLFxcbiAgICAgICAgICAgICAgICB2YXJ5aW5nOiB7IHZhckFscGhhOiBcXFwiZmxvYXRcXFwiIH0sXFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBgZmxvYXQgbGlmZSA9IGNsYW1wKCh1bmlUaW1lIC0gYXR0QmlydGgpICogJHsoMSAvIERVUkFUSU9OKS50b0ZpeGVkKDYpfSwgMC4wLCAxLjApO2AsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvc2l0aW9uLCAwLCAxKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImdsX1BvaW50U2l6ZSA9IHVuaVNpemUgKiAoMC4yICsgLjggKiBjb21wdXRlU2l6ZShsaWZlKSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogMi4wICogKC43NSArIGxpZmUpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiaWYgKGxpZmUgPj0gMS4wKSB7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFtcXG4gICAgICAgICAgICAgICAgICAgICAgICBgdmFyQmlydGggPSB1bmlUaW1lICsgYXR0UmFuZG9tLnggKiAke0RVUkFUSU9OLnRvRml4ZWQoMyl9O2AsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZhclBvc2l0aW9uID0gdW5pQ2VudGVyO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZhclNwZWVkID0gdW5pU3BlZWQgKiAxZTI7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmVjMiBzaGlmdCA9IDAuMyAqIHZlYzIoXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBbXFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnh5LCB1bmlUaW1lKSksXFxcIiwgXFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcXFwiXSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJTcGVlZCArPSBzaGlmdDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ9XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgXFxcInZlYzIgcCA9IDIuMCAqIChnbF9Qb2ludENvb3JkLnh5IC0gdmVjMiguNSkpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgZGlzdCA9IGRvdChwLCBwKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImlmIChkaXN0ID49IDEuMCkgZGlzY2FyZDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgYGZsb2F0IHZhbHVlID0gKDEuMCAvICR7aXMzMmJpdHMgPyBcXFwiMjAuMFxcXCIgOiBcXFwiOC4wXFxcIn0pIC8gMjU1LjA7YCxcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YWx1ZSAqPSAxLjAgLSBkaXN0O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFsdWUgKj0gdmFyQWxwaGE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIC8vIFxcXCJmbG9hdCB5ID0gMC41ICogKDEuMCArIHZhclBvc2l0aW9uLnkpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAvLyBcXFwiZmxvYXQgaCA9IDAuMTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgLy8gXFxcInkgPSBoICsgKDEuMCAtIGgpICogeTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgLy8gXFxcInZhbHVlICo9IDEuMCAtIHk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSB2ZWM0KHZhbHVlLCAwLjAsIDAuMCwgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHNldFVuaWZvcm1zOiAoeyBfdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XFxuICAgICAgICAgICAgaWYgKHZpcnR1YWxUaW1lLnNwZWVkID09PSAwKSB7XFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lLnJlc2V0KClcXG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWUuc3BlZWQgPSAxXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaVNpemVcXFwiLCBNYXRoLm1pbihjb250ZXh0LndpZHRoLCBjb250ZXh0LmhlaWdodCkgLyA0KVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaURlbHRhXFxcIiwgZGVsdGEpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pVGltZVxcXCIsIHZpcnR1YWxUaW1lLnNlY29uZHMpXFxuICAgICAgICAgICAgbGV0IHsgc3BlZWRYLCBzcGVlZFkgfSA9IGNvbnRleHQuaW5wdXRzLnBvaW50ZXJcXG4gICAgICAgICAgICBjb25zdCBmYWN0b3IgPSAtMWU1XFxuICAgICAgICAgICAgc3BlZWRYICo9IGZhY3RvclxcbiAgICAgICAgICAgIHNwZWVkWSA9IGZhY3RvciAqIE1hdGguYWJzKHNwZWVkWSlcXG4gICAgICAgICAgICBjb25zdCB0aHJlc2hvbGRZID0gMC4xXFxuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkWCA9IHRocmVzaG9sZFkgLyAzMlxcbiAgICAgICAgICAgIHNwZWVkWCA9IC10Z2RDYWxjQ2xhbXAoc3BlZWRYLCAtdGhyZXNob2xkWCwgK3RocmVzaG9sZFgpXFxuICAgICAgICAgICAgc3BlZWRZID0gdGdkQ2FsY0NsYW1wKHNwZWVkWSwgMCwgK3RocmVzaG9sZFkpICsgMC4wMVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXFxcInVuaVNwZWVkXFxcIiwgLXNwZWVkWCwgLXNwZWVkWSlcXG4gICAgICAgICAgICBpZiAoc3BlZWRYID09PSAwICYmIHNwZWVkWSA9PT0gMCkge1xcbiAgICAgICAgICAgICAgICBwcmcudW5pZm9ybTJmKFxcXCJ1bmlDZW50ZXJcXFwiLCA5LCA5KVxcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgIGxldCB4ID0gY29udGV4dC5pbnB1dHMucG9pbnRlci54XFxuICAgICAgICAgICAgICAgIGlmICh4IDwgMCkgeCA9IC14ICogeFxcbiAgICAgICAgICAgICAgICBlbHNlIHggKj0geFxcbiAgICAgICAgICAgICAgICB4ICo9IDAuMTI1XFxuICAgICAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXFxcInVuaUNlbnRlclxcXCIsIHgsIC0xLjEpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgdGV4dHVyZUZCID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBzdG9yYWdlOiB7XFxuICAgICAgICAgICAgZm9ybWF0OiBpczMyYml0cyA/IFxcXCJSMzJGIC8gUkVEIC8gRkxPQVRcXFwiIDogXFxcIlIxNkYgLyBSRUQgLyBGTE9BVFxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgYW50aUFsaWFzaW5nOiBmYWxzZSxcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IHRleHR1cmVGQixcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGJsZW5kOiBcXFwiYWRkXFxcIixcXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgcGFydGljbGVzXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICB3cmFwUjogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgICAgIHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICAgICAgd3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgIH0sXFxuICAgIH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXFxcIiMwMDBcXFwiLCBcXFwiI2YwMFxcXCIsIFxcXCIjZjkyXFxcIiwgXFxcIiNlZTNcXFwiLCBcXFwiI2ZmNFxcXCIsIFxcXCIjZmZmXFxcIl0pKVxcbiAgICBjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxcbiAgICAgICAgZmlsdGVyczogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXIoe1xcbiAgICAgICAgICAgICAgICB0ZXh0dXJlczoge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4UGFsZXR0ZTogcGFsZXR0ZSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgdSA9IGNsYW1wKHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpLnIsIDAuMCwgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgLy8gXFxcImZsb2F0IHUyID0gdSAqIHU7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIC8vIFxcXCJ1ID0gbWl4KHUsIHUyLCB2YXJVVi55ICogMS4wKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcIkZyYWdDb2xvciA9IHRleHR1cmUodGV4UGFsZXR0ZSwgdmVjMih1LCB1KSk7XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBmcmFtZWJ1ZmZlciwgZmlsdGVycylcXG4gICAgY29udGV4dC5wbGF5KClcXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0Z2RDYWxjQ2xhbXAsXFxuICAgIHRnZENhbGNSYW5kb20sXFxuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXFxuICAgIHRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkRGF0YXNldCxcXG4gICAgVGdkRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcXG4gICAgVGdkUGFpbnRlclBhcnRpY2xlcyxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcXG4gICAgVGdkU2hhZGVyVmVydGV4LFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIFRnZFRpbWUsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5cXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuY29uc3QgRFVSQVRJT04gPSAxXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBleHRlbnNpb25zID0gW1xcXCJFWFRfY29sb3JfYnVmZmVyX2Zsb2F0XFxcIiwgXFxcIkVYVF9mbG9hdF9ibGVuZFxcXCJdXFxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBleHRlbnNpb25zKSB7XFxuICAgICAgICBjb25zdCBleHQgPSBjb250ZXh0LmdsLmdldEV4dGVuc2lvbihuYW1lKVxcbiAgICAgICAgaWYgKCFleHQpIHRocm93IG5ldyBFcnJvcihgRXh0ZW5zaW9uICR7bmFtZX0gbm90IHN1cHBvcnRlZGApXFxuICAgIH1cXG5cXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgLy8gY29uc3QgaXMzMmJpdHMgPSBjb250ZXh0LmV4dGVuc2lvbnMuRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdFxcbiAgICBjb25zdCBpczMyYml0cyA9IGZhbHNlXFxuICAgIGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChpczMyYml0cyA/IDUwMDAwIDogODAwMDAsIERVUkFUSU9OKVxcbiAgICBjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSlcXG4gICAgY29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xcbiAgICAgICAgZGF0YXNldCxcXG4gICAgICAgIGRyYXdNb2RlOiBcXFwiUE9JTlRTXFxcIixcXG4gICAgICAgIHNoYWRlcjoge1xcbiAgICAgICAgICAgIHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZVNpemU6IFtcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgY29tcHV0ZVNpemUoZmxvYXQgeCkge1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiLy8gMSAtIDQqKCh4LTEpXjItMC41KV4yXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcImZsb2F0IHQgPSB4IC0gMS4wO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJmbG9hdCBhID0gdCAqIHQgLSAwLjU7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcInJldHVybiAxLjAgLSA0LjAgKiBhICogYTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIn1cXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHVuaVRpbWU6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlEZWx0YTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaUNlbnRlcjogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pU3BlZWQ6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaVNpemU6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGRhdGFzZXQuZ2V0VHlwZVJlY29yZCgpLFxcbiAgICAgICAgICAgICAgICB2YXJ5aW5nOiB7IHZhckFscGhhOiBcXFwiZmxvYXRcXFwiIH0sXFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBgZmxvYXQgbGlmZSA9IGNsYW1wKCh1bmlUaW1lIC0gYXR0QmlydGgpICogJHsoMSAvIERVUkFUSU9OKS50b0ZpeGVkKDYpfSwgMC4wLCAxLjApO2AsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvc2l0aW9uLCAwLCAxKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImdsX1BvaW50U2l6ZSA9IHVuaVNpemUgKiAoMC4yICsgLjggKiBjb21wdXRlU2l6ZShsaWZlKSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogMi4wICogKC43NSArIGxpZmUpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiaWYgKGxpZmUgPj0gMS4wKSB7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFtcXG4gICAgICAgICAgICAgICAgICAgICAgICBgdmFyQmlydGggPSB1bmlUaW1lICsgYXR0UmFuZG9tLnggKiAke0RVUkFUSU9OLnRvRml4ZWQoMyl9O2AsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZhclBvc2l0aW9uID0gdW5pQ2VudGVyO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcInZhclNwZWVkID0gdW5pU3BlZWQgKiAxZTI7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwidmVjMiBzaGlmdCA9IDAuMyAqIHZlYzIoXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBbXFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnh5LCB1bmlUaW1lKSksXFxcIiwgXFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcXFwiXSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJTcGVlZCArPSBzaGlmdDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ9XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgICAgICAgICAgXFxcInZlYzIgcCA9IDIuMCAqIChnbF9Qb2ludENvb3JkLnh5IC0gdmVjMiguNSkpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgZGlzdCA9IGRvdChwLCBwKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImlmIChkaXN0ID49IDEuMCkgZGlzY2FyZDtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgYGZsb2F0IHZhbHVlID0gKDEuMCAvICR7aXMzMmJpdHMgPyBcXFwiMjAuMFxcXCIgOiBcXFwiOC4wXFxcIn0pIC8gMjU1LjA7YCxcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YWx1ZSAqPSAxLjAgLSBkaXN0O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFsdWUgKj0gdmFyQWxwaGE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIC8vIFxcXCJmbG9hdCB5ID0gMC41ICogKDEuMCArIHZhclBvc2l0aW9uLnkpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAvLyBcXFwiZmxvYXQgaCA9IDAuMTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgLy8gXFxcInkgPSBoICsgKDEuMCAtIGgpICogeTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgLy8gXFxcInZhbHVlICo9IDEuMCAtIHk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSB2ZWM0KHZhbHVlLCAwLjAsIDAuMCwgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHNldFVuaWZvcm1zOiAoeyBfdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XFxuICAgICAgICAgICAgaWYgKHZpcnR1YWxUaW1lLnNwZWVkID09PSAwKSB7XFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lLnJlc2V0KClcXG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWUuc3BlZWQgPSAxXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaVNpemVcXFwiLCBNYXRoLm1pbihjb250ZXh0LndpZHRoLCBjb250ZXh0LmhlaWdodCkgLyA0KVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaURlbHRhXFxcIiwgZGVsdGEpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pVGltZVxcXCIsIHZpcnR1YWxUaW1lLnNlY29uZHMpXFxuICAgICAgICAgICAgbGV0IHsgc3BlZWRYLCBzcGVlZFkgfSA9IGNvbnRleHQuaW5wdXRzLnBvaW50ZXJcXG4gICAgICAgICAgICBjb25zdCBmYWN0b3IgPSAtMWU1XFxuICAgICAgICAgICAgc3BlZWRYICo9IGZhY3RvclxcbiAgICAgICAgICAgIHNwZWVkWSA9IGZhY3RvciAqIE1hdGguYWJzKHNwZWVkWSlcXG4gICAgICAgICAgICBjb25zdCB0aHJlc2hvbGRZID0gMC4xXFxuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkWCA9IHRocmVzaG9sZFkgLyAzMlxcbiAgICAgICAgICAgIHNwZWVkWCA9IC10Z2RDYWxjQ2xhbXAoc3BlZWRYLCAtdGhyZXNob2xkWCwgK3RocmVzaG9sZFgpXFxuICAgICAgICAgICAgc3BlZWRZID0gdGdkQ2FsY0NsYW1wKHNwZWVkWSwgMCwgK3RocmVzaG9sZFkpICsgMC4wMVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXFxcInVuaVNwZWVkXFxcIiwgLXNwZWVkWCwgLXNwZWVkWSlcXG4gICAgICAgICAgICBpZiAoc3BlZWRYID09PSAwICYmIHNwZWVkWSA9PT0gMCkge1xcbiAgICAgICAgICAgICAgICBwcmcudW5pZm9ybTJmKFxcXCJ1bmlDZW50ZXJcXFwiLCA5LCA5KVxcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgIGxldCB4ID0gY29udGV4dC5pbnB1dHMucG9pbnRlci54XFxuICAgICAgICAgICAgICAgIGlmICh4IDwgMCkgeCA9IC14ICogeFxcbiAgICAgICAgICAgICAgICBlbHNlIHggKj0geFxcbiAgICAgICAgICAgICAgICB4ICo9IDAuMTI1XFxuICAgICAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXFxcInVuaUNlbnRlclxcXCIsIHgsIC0xLjEpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgdGV4dHVyZUZCID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBzdG9yYWdlOiB7XFxuICAgICAgICAgICAgZm9ybWF0OiBpczMyYml0cyA/IFxcXCJSMzJGIC8gUkVEIC8gRkxPQVRcXFwiIDogXFxcIlIxNkYgLyBSRUQgLyBGTE9BVFxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgYW50aUFsaWFzaW5nOiBmYWxzZSxcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IHRleHR1cmVGQixcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGJsZW5kOiBcXFwiYWRkXFxcIixcXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgcGFydGljbGVzXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICB3cmFwUjogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgICAgIHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICAgICAgd3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgIH0sXFxuICAgIH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXFxcIiMwMDBcXFwiLCBcXFwiI2YwMFxcXCIsIFxcXCIjZjkyXFxcIiwgXFxcIiNlZTNcXFwiLCBcXFwiI2ZmNFxcXCIsIFxcXCIjZmZmXFxcIl0pKVxcbiAgICBjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxcbiAgICAgICAgZmlsdGVyczogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXIoe1xcbiAgICAgICAgICAgICAgICB0ZXh0dXJlczoge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4UGFsZXR0ZTogcGFsZXR0ZSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgdSA9IGNsYW1wKHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpLnIsIDAuMCwgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgLy8gXFxcImZsb2F0IHUyID0gdSAqIHU7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIC8vIFxcXCJ1ID0gbWl4KHUsIHUyLCB2YXJVVi55ICogMS4wKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcIkZyYWdDb2xvciA9IHRleHR1cmUodGV4UGFsZXR0ZSwgdmVjMih1LCB1KSk7XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBmcmFtZWJ1ZmZlciwgZmlsdGVycylcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IG9wdGlvbnM9e3sgYWxwaGE6IGZhbHNlIH19IC8+XFxufVxcblxcbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGNvdW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBUZ2REYXRhc2V0IHtcXG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG4gICAgICAgIGF0dFBvc2l0aW9uOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICBhdHRTcGVlZDogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgYXR0QmlydGg6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICBhdHRSYW5kb206IFxcXCJ2ZWMyXFxcIixcXG4gICAgfSlcXG4gICAgY29uc3QgYXR0UG9zaXRpb246IG51bWJlcltdID0gW11cXG4gICAgY29uc3QgYXR0U3BlZWQ6IG51bWJlcltdID0gW11cXG4gICAgY29uc3QgYXR0QmlydGg6IG51bWJlcltdID0gW11cXG4gICAgY29uc3QgYXR0UmFuZG9tOiBudW1iZXJbXSA9IFtdXFxuICAgIGNvbnN0IHJuZCA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiB0Z2RDYWxjUmFuZG9tKG1pbiwgbWF4KVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG4gICAgICAgIGF0dFBvc2l0aW9uLnB1c2goOSwgOSlcXG4gICAgICAgIGF0dFNwZWVkLnB1c2gocm5kKC0wLjEsICswLjEpLCBybmQoLTAuMSwgKzAuMSkpXFxuICAgICAgICBhdHRCaXJ0aC5wdXNoKCgtaSAvIGNvdW50KSAqIGR1cmF0aW9uKVxcbiAgICAgICAgYXR0UmFuZG9tLnB1c2gocm5kKCksIHJuZCgpKVxcbiAgICB9XFxuICAgIGRhdGFzZXQuc2V0KFxcXCJhdHRQb3NpdGlvblxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0UG9zaXRpb24pKVxcbiAgICBkYXRhc2V0LnNldChcXFwiYXR0U3BlZWRcXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFNwZWVkKSlcXG4gICAgZGF0YXNldC5zZXQoXFxcImF0dEJpcnRoXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRCaXJ0aCkpXFxuICAgIGRhdGFzZXQuc2V0KFxcXCJhdHRSYW5kb21cXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFJhbmRvbSkpXFxuICAgIHJldHVybiBkYXRhc2V0XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHRnZENhbGNDbGFtcCxcbiAgICB0Z2RDYWxjUmFuZG9tLFxuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkRGF0YXNldCxcbiAgICBUZ2RGaWx0ZXIsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyLFxuICAgIFRnZFBhaW50ZXJQYXJ0aWNsZXMsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFNoYWRlckZyYWdtZW50LFxuICAgIFRnZFNoYWRlclZlcnRleCxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgVGdkVGltZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmNvbnN0IERVUkFUSU9OID0gMVxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb25zdCBleHRlbnNpb25zID0gW1wiRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdFwiLCBcIkVYVF9mbG9hdF9ibGVuZFwiXVxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBleHRlbnNpb25zKSB7XG4gICAgICAgIGNvbnN0IGV4dCA9IGNvbnRleHQuZ2wuZ2V0RXh0ZW5zaW9uKG5hbWUpXG4gICAgICAgIGlmICghZXh0KSB0aHJvdyBuZXcgRXJyb3IoYEV4dGVuc2lvbiAke25hbWV9IG5vdCBzdXBwb3J0ZWRgKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pXG4gICAgLy8gY29uc3QgaXMzMmJpdHMgPSBjb250ZXh0LmV4dGVuc2lvbnMuRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdFxuICAgIGNvbnN0IGlzMzJiaXRzID0gZmFsc2VcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoaXMzMmJpdHMgPyA1MDAwMCA6IDgwMDAwLCBEVVJBVElPTilcbiAgICBjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSlcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XG4gICAgICAgIGRhdGFzZXQsXG4gICAgICAgIGRyYXdNb2RlOiBcIlBPSU5UU1wiLFxuICAgICAgICBzaGFkZXI6IHtcbiAgICAgICAgICAgIHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZVNpemU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXQgY29tcHV0ZVNpemUoZmxvYXQgeCkge1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLy8gMSAtIDQqKCh4LTEpXjItMC41KV4yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCB0ID0geCAtIDEuMDtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsb2F0IGEgPSB0ICogdCAtIDAuNTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJldHVybiAxLjAgLSA0LjAgKiBhICogYTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIn1cIixcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHVuaVRpbWU6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgdW5pRGVsdGE6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgdW5pQ2VudGVyOiBcInZlYzJcIixcbiAgICAgICAgICAgICAgICAgICAgdW5pU3BlZWQ6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgICAgICB1bmlTaXplOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcbiAgICAgICAgICAgICAgICB2YXJ5aW5nOiB7IHZhckFscGhhOiBcImZsb2F0XCIgfSxcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgICAgICBgZmxvYXQgbGlmZSA9IGNsYW1wKCh1bmlUaW1lIC0gYXR0QmlydGgpICogJHsoMSAvIERVUkFUSU9OKS50b0ZpeGVkKDYpfSwgMC4wLCAxLjApO2AsXG4gICAgICAgICAgICAgICAgICAgIFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb3NpdGlvbiwgMCwgMSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ2xfUG9pbnRTaXplID0gdW5pU2l6ZSAqICgwLjIgKyAuOCAqIGNvbXB1dGVTaXplKGxpZmUpKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogMi4wICogKC43NSArIGxpZmUpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImlmIChsaWZlID49IDEuMCkge1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBgdmFyQmlydGggPSB1bmlUaW1lICsgYXR0UmFuZG9tLnggKiAke0RVUkFUSU9OLnRvRml4ZWQoMyl9O2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhclBvc2l0aW9uID0gdW5pQ2VudGVyO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YXJTcGVlZCA9IHVuaVNwZWVkICogMWUyO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZWMyIHNoaWZ0ID0gMC4zICogdmVjMihcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnh5LCB1bmlUaW1lKSksXCIsIFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueXgsIHVuaVRpbWUpKVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFyU3BlZWQgKz0gc2hpZnQ7XCIsXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwifVwiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMyIHAgPSAyLjAgKiAoZ2xfUG9pbnRDb29yZC54eSAtIHZlYzIoLjUpKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCBkaXN0ID0gZG90KHAsIHApO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImlmIChkaXN0ID49IDEuMCkgZGlzY2FyZDtcIixcbiAgICAgICAgICAgICAgICAgICAgYGZsb2F0IHZhbHVlID0gKDEuMCAvICR7aXMzMmJpdHMgPyBcIjIwLjBcIiA6IFwiOC4wXCJ9KSAvIDI1NS4wO2AsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWUgKj0gMS4wIC0gZGlzdDtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZSAqPSB2YXJBbHBoYTtcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gXCJmbG9hdCB5ID0gMC41ICogKDEuMCArIHZhclBvc2l0aW9uLnkpO1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyBcImZsb2F0IGggPSAwLjE7XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vIFwieSA9IGggKyAoMS4wIC0gaCkgKiB5O1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyBcInZhbHVlICo9IDEuMCAtIHk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gdmVjNCh2YWx1ZSwgMC4wLCAwLjAsIDEuMCk7XCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZpcnR1YWxUaW1lLnNwZWVkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWUucmVzZXQoKVxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lLnNwZWVkID0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcInVuaVNpemVcIiwgTWF0aC5taW4oY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpIC8gNClcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXCJ1bmlEZWx0YVwiLCBkZWx0YSlcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXCJ1bmlUaW1lXCIsIHZpcnR1YWxUaW1lLnNlY29uZHMpXG4gICAgICAgICAgICBsZXQgeyBzcGVlZFgsIHNwZWVkWSB9ID0gY29udGV4dC5pbnB1dHMucG9pbnRlclxuICAgICAgICAgICAgY29uc3QgZmFjdG9yID0gLTFlNVxuICAgICAgICAgICAgc3BlZWRYICo9IGZhY3RvclxuICAgICAgICAgICAgc3BlZWRZID0gZmFjdG9yICogTWF0aC5hYnMoc3BlZWRZKVxuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkWSA9IDAuMVxuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkWCA9IHRocmVzaG9sZFkgLyAzMlxuICAgICAgICAgICAgc3BlZWRYID0gLXRnZENhbGNDbGFtcChzcGVlZFgsIC10aHJlc2hvbGRYLCArdGhyZXNob2xkWClcbiAgICAgICAgICAgIHNwZWVkWSA9IHRnZENhbGNDbGFtcChzcGVlZFksIDAsICt0aHJlc2hvbGRZKSArIDAuMDFcbiAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXCJ1bmlTcGVlZFwiLCAtc3BlZWRYLCAtc3BlZWRZKVxuICAgICAgICAgICAgaWYgKHNwZWVkWCA9PT0gMCAmJiBzcGVlZFkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBwcmcudW5pZm9ybTJmKFwidW5pQ2VudGVyXCIsIDksIDkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gY29udGV4dC5pbnB1dHMucG9pbnRlci54XG4gICAgICAgICAgICAgICAgaWYgKHggPCAwKSB4ID0gLXggKiB4XG4gICAgICAgICAgICAgICAgZWxzZSB4ICo9IHhcbiAgICAgICAgICAgICAgICB4ICo9IDAuMTI1XG4gICAgICAgICAgICAgICAgcHJnLnVuaWZvcm0yZihcInVuaUNlbnRlclwiLCB4LCAtMS4xKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29uc3QgdGV4dHVyZUZCID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgbWluRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHN0b3JhZ2U6IHtcbiAgICAgICAgICAgIGZvcm1hdDogaXMzMmJpdHMgPyBcIlIzMkYgLyBSRUQgLyBGTE9BVFwiIDogXCJSMTZGIC8gUkVEIC8gRkxPQVRcIixcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XG4gICAgICAgIGFudGlBbGlhc2luZzogZmFsc2UsXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IHRleHR1cmVGQixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGJsZW5kOiBcImFkZFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIHBhcnRpY2xlc10sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KVxuICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICB3cmFwUjogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgICAgICB3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgICAgICB3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgIH0sXG4gICAgfSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiMwMDBcIiwgXCIjZjAwXCIsIFwiI2Y5MlwiLCBcIiNlZTNcIiwgXCIjZmY0XCIsIFwiI2ZmZlwiXSkpXG4gICAgY29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcbiAgICAgICAgZmxpcFk6IHRydWUsXG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXG4gICAgICAgIGZpbHRlcnM6IFtcbiAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXIoe1xuICAgICAgICAgICAgICAgIHRleHR1cmVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleFBhbGV0dGU6IHBhbGV0dGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCB1ID0gY2xhbXAodGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVikuciwgMC4wLCAxLjApO1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyBcImZsb2F0IHUyID0gdSAqIHU7XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vIFwidSA9IG1peCh1LCB1MiwgdmFyVVYueSAqIDEuMCk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gdGV4dHVyZSh0ZXhQYWxldHRlLCB2ZWMyKHUsIHUpKTtcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChjbGVhciwgZnJhbWVidWZmZXIsIGZpbHRlcnMpXG4gICAgY29udGV4dC5wbGF5KClcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gb3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX0gLz5cbn1cblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoY291bnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IFRnZERhdGFzZXQge1xuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgIGF0dFBvc2l0aW9uOiBcInZlYzJcIixcbiAgICAgICAgYXR0U3BlZWQ6IFwidmVjMlwiLFxuICAgICAgICBhdHRCaXJ0aDogXCJmbG9hdFwiLFxuICAgICAgICBhdHRSYW5kb206IFwidmVjMlwiLFxuICAgIH0pXG4gICAgY29uc3QgYXR0UG9zaXRpb246IG51bWJlcltdID0gW11cbiAgICBjb25zdCBhdHRTcGVlZDogbnVtYmVyW10gPSBbXVxuICAgIGNvbnN0IGF0dEJpcnRoOiBudW1iZXJbXSA9IFtdXG4gICAgY29uc3QgYXR0UmFuZG9tOiBudW1iZXJbXSA9IFtdXG4gICAgY29uc3Qgcm5kID0gKG1pbiA9IDAsIG1heCA9IDEpID0+IHRnZENhbGNSYW5kb20obWluLCBtYXgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIGF0dFBvc2l0aW9uLnB1c2goOSwgOSlcbiAgICAgICAgYXR0U3BlZWQucHVzaChybmQoLTAuMSwgKzAuMSksIHJuZCgtMC4xLCArMC4xKSlcbiAgICAgICAgYXR0QmlydGgucHVzaCgoLWkgLyBjb3VudCkgKiBkdXJhdGlvbilcbiAgICAgICAgYXR0UmFuZG9tLnB1c2gocm5kKCksIHJuZCgpKVxuICAgIH1cbiAgICBkYXRhc2V0LnNldChcImF0dFBvc2l0aW9uXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0UG9zaXRpb24pKVxuICAgIGRhdGFzZXQuc2V0KFwiYXR0U3BlZWRcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRTcGVlZCkpXG4gICAgZGF0YXNldC5zZXQoXCJhdHRCaXJ0aFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dEJpcnRoKSlcbiAgICBkYXRhc2V0LnNldChcImF0dFJhbmRvbVwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFJhbmRvbSkpXG4gICAgcmV0dXJuIGRhdGFzZXRcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQ2FsY0NsYW1wIiwidGdkQ2FsY1JhbmRvbSIsInRnZENhbnZhc0NyZWF0ZVBhbGV0dGUiLCJ0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UiLCJUZ2REYXRhc2V0IiwiVGdkRmlsdGVyIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckZpbHRlciIsIlRnZFBhaW50ZXJGcmFtZWJ1ZmZlciIsIlRnZFBhaW50ZXJQYXJ0aWNsZXMiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RTaGFkZXJGcmFnbWVudCIsIlRnZFNoYWRlclZlcnRleCIsIlRnZFRleHR1cmUyRCIsIlRnZFRpbWUiLCJWaWV3IiwiRFVSQVRJT04iLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImV4dGVuc2lvbnMiLCJfaXRlcmF0b3JFcnJvciIsIm5hbWUiLCJleHQiLCJFcnJvciIsImNsZWFyIiwiaXMzMmJpdHMiLCJkYXRhc2V0IiwibWFrZURhdGFzZXQiLCJ2aXJ0dWFsVGltZSIsInBhcnRpY2xlcyIsInNldFVuaWZvcm1zIiwiX3RpbWUiLCJkZWx0YSIsInByZyIsIk1hdGgiLCJfY29udGV4dF9pbnB1dHNfcG9pbnRlciIsInNwZWVkWCIsInNwZWVkWSIsImZhY3RvciIsInRocmVzaG9sZFkiLCJ0aHJlc2hvbGRYIiwieCIsInRleHR1cmVGQiIsImZyYW1lYnVmZmVyIiwicGFsZXR0ZSIsImZpbHRlcnMiLCJjb3VudCIsImR1cmF0aW9uIiwiYXR0UG9zaXRpb24iLCJhdHRTcGVlZCIsImF0dEJpcnRoIiwiYXR0UmFuZG9tIiwicm5kIiwibWluIiwibWF4IiwiaSIsIkZsb2F0MzJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUE0cE07QUFDdnJNLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztz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