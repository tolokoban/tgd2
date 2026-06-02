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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n\tconsole.log(\"🐞 [main.demo@22] assets =\", assets); // @FIXME: Remove this line written on 2026-05-17 at 21:42\n\tconst clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 });\n\tconst dataset: TgdDataset = makeDataset(COUNT, DURATION);\n\tconst virtualTime = new TgdTime({ context, speed: 0 });\n\tconst particles = new TgdPainterParticles(context, {\n\t\tdataset,\n\t\tdrawMode: \"POINTS\",\n\t\ttextures: {\n\t\t\tuniTexture: new TgdTexture2D(context).loadBitmap(assets.image.bubble),\n\t\t},\n\t\tshader: {\n\t\t\tvert: new TgdShaderVertex({\n\t\t\t\tfunctions: {\n\t\t\t\t\t...tgdCodeFunction_perlinNoise(),\n\t\t\t\t},\n\t\t\t\tuniforms: {\n\t\t\t\t\tuniTime: \"float\",\n\t\t\t\t\tuniDelta: \"float\",\n\t\t\t\t\tuniCenter: \"vec2\",\n\t\t\t\t\tuniSpeed: \"vec2\",\n\t\t\t\t\tuniSize: \"float\",\n\t\t\t\t},\n\t\t\t\tvarying: {\n\t\t\t\t\tvarAlpha: \"float\",\n\t\t\t\t},\n\t\t\t\tattributes: dataset.getTypeRecord(),\n\t\t\t\tmainCode: [\n\t\t\t\t\t`float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,\n\t\t\t\t\t\"varAlpha = 1.0 - life;\",\n\t\t\t\t\t\"gl_Position = vec4(attPosition, 0, 1);\",\n\t\t\t\t\t\"gl_PointSize = uniSize * (0.1 + .9 * life * life);\",\n\t\t\t\t\t\"varPosition -= attSpeed * uniDelta * varAlpha;\",\n\t\t\t\t\t\"if (life >= 1.0) {\",\n\t\t\t\t\t[\n\t\t\t\t\t\t`varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,\n\t\t\t\t\t\t\"varPosition = uniCenter;\",\n\t\t\t\t\t\t\"varSpeed = normalize(uniSpeed) * 1e-1;\",\n\t\t\t\t\t\t\"vec2 shift = 0.3 * vec2(\",\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\"perlinNoise(vec3(attRandom.xy, uniTime)),\",\n\t\t\t\t\t\t\t\"perlinNoise(vec3(attRandom.yx, uniTime))\",\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\");\",\n\t\t\t\t\t\t\"varSpeed += shift;\",\n\t\t\t\t\t],\n\t\t\t\t\t\"}\",\n\t\t\t\t],\n\t\t\t}),\n\t\t\tfrag: new TgdShaderFragment({\n\t\t\t\tmainCode: [\n\t\t\t\t\t\"vec4 color = texture(uniTexture, gl_PointCoord);\",\n\t\t\t\t\t\"color.a *= varAlpha;\",\n\t\t\t\t\t\"FragColor = color;\",\n\t\t\t\t],\n\t\t\t}),\n\t\t},\n\t\tsetUniforms: ({ _time, delta, prg }) => {\n\t\t\tvirtualTime.speed = 1;\n\t\t\tprg.uniform1f(\"uniSize\", Math.min(context.width, context.height) / 5);\n\t\t\tprg.uniform1f(\"uniDelta\", delta);\n\t\t\tprg.uniform1f(\"uniTime\", virtualTime.seconds);\n\t\t\tprg.uniform2f(\n\t\t\t\t\"uniCenter\",\n\t\t\t\tcontext.inputs.pointer.x,\n\t\t\t\tcontext.inputs.pointer.y,\n\t\t\t);\n\t\t\tprg.uniform2f(\n\t\t\t\t\"uniSpeed\",\n\t\t\t\tcontext.inputs.pointer.speedX,\n\t\t\t\tcontext.inputs.pointer.speedY,\n\t\t\t);\n\t\t},\n\t});\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [particles],\n\t\t}),\n\t);\n\tcontext.play();\n}"
};
var FULL = "import {\n\ttgdCalcRandom,\n\ttgdCodeFunction_perlinNoise,\n\ttype TgdContext,\n\tTgdDataset,\n\tTgdPainterClear,\n\tTgdPainterParticles,\n\tTgdPainterState,\n\tTgdShaderFragment,\n\tTgdShaderVertex,\n\tTgdTexture2D,\n\tTgdTime,\n} from \"@tolokoban/tgd\";\n\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport BubbleURL from \"./soap-bubble.webp\";\n\nconst COUNT = 50000;\nconst DURATION = 5;\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconsole.log(\"🐞 [main.demo@22] assets =\", assets); // @FIXME: Remove this line written on 2026-05-17 at 21:42\n\tconst clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 });\n\tconst dataset: TgdDataset = makeDataset(COUNT, DURATION);\n\tconst virtualTime = new TgdTime({ context, speed: 0 });\n\tconst particles = new TgdPainterParticles(context, {\n\t\tdataset,\n\t\tdrawMode: \"POINTS\",\n\t\ttextures: {\n\t\t\tuniTexture: new TgdTexture2D(context).loadBitmap(assets.image.bubble),\n\t\t},\n\t\tshader: {\n\t\t\tvert: new TgdShaderVertex({\n\t\t\t\tfunctions: {\n\t\t\t\t\t...tgdCodeFunction_perlinNoise(),\n\t\t\t\t},\n\t\t\t\tuniforms: {\n\t\t\t\t\tuniTime: \"float\",\n\t\t\t\t\tuniDelta: \"float\",\n\t\t\t\t\tuniCenter: \"vec2\",\n\t\t\t\t\tuniSpeed: \"vec2\",\n\t\t\t\t\tuniSize: \"float\",\n\t\t\t\t},\n\t\t\t\tvarying: {\n\t\t\t\t\tvarAlpha: \"float\",\n\t\t\t\t},\n\t\t\t\tattributes: dataset.getTypeRecord(),\n\t\t\t\tmainCode: [\n\t\t\t\t\t`float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,\n\t\t\t\t\t\"varAlpha = 1.0 - life;\",\n\t\t\t\t\t\"gl_Position = vec4(attPosition, 0, 1);\",\n\t\t\t\t\t\"gl_PointSize = uniSize * (0.1 + .9 * life * life);\",\n\t\t\t\t\t\"varPosition -= attSpeed * uniDelta * varAlpha;\",\n\t\t\t\t\t\"if (life >= 1.0) {\",\n\t\t\t\t\t[\n\t\t\t\t\t\t`varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,\n\t\t\t\t\t\t\"varPosition = uniCenter;\",\n\t\t\t\t\t\t\"varSpeed = normalize(uniSpeed) * 1e-1;\",\n\t\t\t\t\t\t\"vec2 shift = 0.3 * vec2(\",\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\"perlinNoise(vec3(attRandom.xy, uniTime)),\",\n\t\t\t\t\t\t\t\"perlinNoise(vec3(attRandom.yx, uniTime))\",\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\");\",\n\t\t\t\t\t\t\"varSpeed += shift;\",\n\t\t\t\t\t],\n\t\t\t\t\t\"}\",\n\t\t\t\t],\n\t\t\t}),\n\t\t\tfrag: new TgdShaderFragment({\n\t\t\t\tmainCode: [\n\t\t\t\t\t\"vec4 color = texture(uniTexture, gl_PointCoord);\",\n\t\t\t\t\t\"color.a *= varAlpha;\",\n\t\t\t\t\t\"FragColor = color;\",\n\t\t\t\t],\n\t\t\t}),\n\t\t},\n\t\tsetUniforms: ({ _time, delta, prg }) => {\n\t\t\tvirtualTime.speed = 1;\n\t\t\tprg.uniform1f(\"uniSize\", Math.min(context.width, context.height) / 5);\n\t\t\tprg.uniform1f(\"uniDelta\", delta);\n\t\t\tprg.uniform1f(\"uniTime\", virtualTime.seconds);\n\t\t\tprg.uniform2f(\n\t\t\t\t\"uniCenter\",\n\t\t\t\tcontext.inputs.pointer.x,\n\t\t\t\tcontext.inputs.pointer.y,\n\t\t\t);\n\t\t\tprg.uniform2f(\n\t\t\t\t\"uniSpeed\",\n\t\t\t\tcontext.inputs.pointer.speedX,\n\t\t\t\tcontext.inputs.pointer.speedY,\n\t\t\t);\n\t\t},\n\t});\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [particles],\n\t\t}),\n\t);\n\tcontext.play();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{\n\t\t\t\timage: {\n\t\t\t\t\tbubble: BubbleURL,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n\nfunction makeDataset(count: number, duration: number): TgdDataset {\n\tconst dataset = new TgdDataset({\n\t\tattPosition: \"vec2\",\n\t\tattSpeed: \"vec2\",\n\t\tattBirth: \"float\",\n\t\tattRandom: \"vec2\",\n\t});\n\tconst attPosition: number[] = [];\n\tconst attSpeed: number[] = [];\n\tconst attBirth: number[] = [];\n\tconst attRandom: number[] = [];\n\tconst rnd = (min = 0, max = 1) => tgdCalcRandom(min, max);\n\tfor (let i = 0; i < count; i++) {\n\t\tattPosition.push(rnd(-1, +1), rnd(-1, +1));\n\t\tattSpeed.push(rnd(-0.1, +0.1), rnd(-0.1, +0.1));\n\t\tattBirth.push((i / count) * duration);\n\t\tattRandom.push(rnd(), rnd());\n\t}\n\tdataset.set(\"attPosition\", new Float32Array(attPosition));\n\tdataset.set(\"attSpeed\", new Float32Array(attSpeed));\n\tdataset.set(\"attBirth\", new Float32Array(attBirth));\n\tdataset.set(\"attRandom\", new Float32Array(attRandom));\n\treturn dataset;\n}\n";
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
        lineNumber: 110,
        columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTJfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS1kZGRiOWIuMWJlMjc0NTFkOGVjY2I2OS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wYXJ0aWNsZXMvZXhhbXBsZTIvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wYXJ0aWNsZXMvZXhhbXBsZTIvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUyL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFpbi5kZW1vQDIyXSBhc3NldHMgPVxcXCIsIGFzc2V0cyk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDUtMTcgYXQgMjE6NDJcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KTtcXG5cXHRjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKTtcXG5cXHRjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSk7XFxuXFx0Y29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xcblxcdFxcdGRhdGFzZXQsXFxuXFx0XFx0ZHJhd01vZGU6IFxcXCJQT0lOVFNcXFwiLFxcblxcdFxcdHRleHR1cmVzOiB7XFxuXFx0XFx0XFx0dW5pVGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5idWJibGUpLFxcblxcdFxcdH0sXFxuXFx0XFx0c2hhZGVyOiB7XFxuXFx0XFx0XFx0dmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XFxuXFx0XFx0XFx0XFx0ZnVuY3Rpb25zOiB7XFxuXFx0XFx0XFx0XFx0XFx0Li4udGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlKCksXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR1bmlmb3Jtczoge1xcblxcdFxcdFxcdFxcdFxcdHVuaVRpbWU6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pRGVsdGE6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pQ2VudGVyOiBcXFwidmVjMlxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pU3BlZWQ6IFxcXCJ2ZWMyXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR1bmlTaXplOiBcXFwiZmxvYXRcXFwiLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0dmFyeWluZzoge1xcblxcdFxcdFxcdFxcdFxcdHZhckFscGhhOiBcXFwiZmxvYXRcXFwiLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0YXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXFxuXFx0XFx0XFx0XFx0bWFpbkNvZGU6IFtcXG5cXHRcXHRcXHRcXHRcXHRgZmxvYXQgbGlmZSA9IGNsYW1wKCh1bmlUaW1lIC0gYXR0QmlydGgpICogJHsoMSAvIERVUkFUSU9OKS50b0ZpeGVkKDYpfSwgMC4wLCAxLjApO2AsXFxuXFx0XFx0XFx0XFx0XFx0XFxcInZhckFscGhhID0gMS4wIC0gbGlmZTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJnbF9Qb3NpdGlvbiA9IHZlYzQoYXR0UG9zaXRpb24sIDAsIDEpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImdsX1BvaW50U2l6ZSA9IHVuaVNpemUgKiAoMC4xICsgLjkgKiBsaWZlICogbGlmZSk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwidmFyUG9zaXRpb24gLT0gYXR0U3BlZWQgKiB1bmlEZWx0YSAqIHZhckFscGhhO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImlmIChsaWZlID49IDEuMCkge1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0W1xcblxcdFxcdFxcdFxcdFxcdFxcdGB2YXJCaXJ0aCA9IHVuaVRpbWUgKyBhdHRSYW5kb20ueCAqICR7RFVSQVRJT04udG9GaXhlZCgzKX07YCxcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwidmFyUG9zaXRpb24gPSB1bmlDZW50ZXI7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwidmFyU3BlZWQgPSBub3JtYWxpemUodW5pU3BlZWQpICogMWUtMTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ2ZWMyIHNoaWZ0ID0gMC4zICogdmVjMihcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueHksIHVuaVRpbWUpKSxcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS55eCwgdW5pVGltZSkpXFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCIpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcInZhclNwZWVkICs9IHNoaWZ0O1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHRcXHRcXHRcXFwifVxcXCIsXFxuXFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcblxcdFxcdFxcdFxcdG1haW5Db2RlOiBbXFxuXFx0XFx0XFx0XFx0XFx0XFxcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImNvbG9yLmEgKj0gdmFyQWxwaGE7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiRnJhZ0NvbG9yID0gY29sb3I7XFxcIixcXG5cXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdH0sXFxuXFx0XFx0c2V0VW5pZm9ybXM6ICh7IF90aW1lLCBkZWx0YSwgcHJnIH0pID0+IHtcXG5cXHRcXHRcXHR2aXJ0dWFsVGltZS5zcGVlZCA9IDE7XFxuXFx0XFx0XFx0cHJnLnVuaWZvcm0xZihcXFwidW5pU2l6ZVxcXCIsIE1hdGgubWluKGNvbnRleHQud2lkdGgsIGNvbnRleHQuaGVpZ2h0KSAvIDUpO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMWYoXFxcInVuaURlbHRhXFxcIiwgZGVsdGEpO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMWYoXFxcInVuaVRpbWVcXFwiLCB2aXJ0dWFsVGltZS5zZWNvbmRzKTtcXG5cXHRcXHRcXHRwcmcudW5pZm9ybTJmKFxcblxcdFxcdFxcdFxcdFxcXCJ1bmlDZW50ZXJcXFwiLFxcblxcdFxcdFxcdFxcdGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueCxcXG5cXHRcXHRcXHRcXHRjb250ZXh0LmlucHV0cy5wb2ludGVyLnksXFxuXFx0XFx0XFx0KTtcXG5cXHRcXHRcXHRwcmcudW5pZm9ybTJmKFxcblxcdFxcdFxcdFxcdFxcXCJ1bmlTcGVlZFxcXCIsXFxuXFx0XFx0XFx0XFx0Y29udGV4dC5pbnB1dHMucG9pbnRlci5zcGVlZFgsXFxuXFx0XFx0XFx0XFx0Y29udGV4dC5pbnB1dHMucG9pbnRlci5zcGVlZFksXFxuXFx0XFx0XFx0KTtcXG5cXHRcXHR9LFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGNsZWFyLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbcGFydGljbGVzXSxcXG5cXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnRleHQucGxheSgpO1xcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dGdkQ2FsY1JhbmRvbSxcXG5cXHR0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZERhdGFzZXQsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJQYXJ0aWNsZXMsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFNoYWRlckZyYWdtZW50LFxcblxcdFRnZFNoYWRlclZlcnRleCxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxuXFx0VGdkVGltZSxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5cXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxuaW1wb3J0IEJ1YmJsZVVSTCBmcm9tIFxcXCIuL3NvYXAtYnViYmxlLndlYnBcXFwiO1xcblxcbmNvbnN0IENPVU5UID0gNTAwMDA7XFxuY29uc3QgRFVSQVRJT04gPSA1O1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFpbi5kZW1vQDIyXSBhc3NldHMgPVxcXCIsIGFzc2V0cyk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDUtMTcgYXQgMjE6NDJcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KTtcXG5cXHRjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKTtcXG5cXHRjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSk7XFxuXFx0Y29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xcblxcdFxcdGRhdGFzZXQsXFxuXFx0XFx0ZHJhd01vZGU6IFxcXCJQT0lOVFNcXFwiLFxcblxcdFxcdHRleHR1cmVzOiB7XFxuXFx0XFx0XFx0dW5pVGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5idWJibGUpLFxcblxcdFxcdH0sXFxuXFx0XFx0c2hhZGVyOiB7XFxuXFx0XFx0XFx0dmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XFxuXFx0XFx0XFx0XFx0ZnVuY3Rpb25zOiB7XFxuXFx0XFx0XFx0XFx0XFx0Li4udGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlKCksXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR1bmlmb3Jtczoge1xcblxcdFxcdFxcdFxcdFxcdHVuaVRpbWU6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pRGVsdGE6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pQ2VudGVyOiBcXFwidmVjMlxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pU3BlZWQ6IFxcXCJ2ZWMyXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR1bmlTaXplOiBcXFwiZmxvYXRcXFwiLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0dmFyeWluZzoge1xcblxcdFxcdFxcdFxcdFxcdHZhckFscGhhOiBcXFwiZmxvYXRcXFwiLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0YXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXFxuXFx0XFx0XFx0XFx0bWFpbkNvZGU6IFtcXG5cXHRcXHRcXHRcXHRcXHRgZmxvYXQgbGlmZSA9IGNsYW1wKCh1bmlUaW1lIC0gYXR0QmlydGgpICogJHsoMSAvIERVUkFUSU9OKS50b0ZpeGVkKDYpfSwgMC4wLCAxLjApO2AsXFxuXFx0XFx0XFx0XFx0XFx0XFxcInZhckFscGhhID0gMS4wIC0gbGlmZTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJnbF9Qb3NpdGlvbiA9IHZlYzQoYXR0UG9zaXRpb24sIDAsIDEpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImdsX1BvaW50U2l6ZSA9IHVuaVNpemUgKiAoMC4xICsgLjkgKiBsaWZlICogbGlmZSk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwidmFyUG9zaXRpb24gLT0gYXR0U3BlZWQgKiB1bmlEZWx0YSAqIHZhckFscGhhO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImlmIChsaWZlID49IDEuMCkge1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0W1xcblxcdFxcdFxcdFxcdFxcdFxcdGB2YXJCaXJ0aCA9IHVuaVRpbWUgKyBhdHRSYW5kb20ueCAqICR7RFVSQVRJT04udG9GaXhlZCgzKX07YCxcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwidmFyUG9zaXRpb24gPSB1bmlDZW50ZXI7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwidmFyU3BlZWQgPSBub3JtYWxpemUodW5pU3BlZWQpICogMWUtMTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ2ZWMyIHNoaWZ0ID0gMC4zICogdmVjMihcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueHksIHVuaVRpbWUpKSxcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS55eCwgdW5pVGltZSkpXFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCIpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcInZhclNwZWVkICs9IHNoaWZ0O1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHRcXHRcXHRcXFwifVxcXCIsXFxuXFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcblxcdFxcdFxcdFxcdG1haW5Db2RlOiBbXFxuXFx0XFx0XFx0XFx0XFx0XFxcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImNvbG9yLmEgKj0gdmFyQWxwaGE7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiRnJhZ0NvbG9yID0gY29sb3I7XFxcIixcXG5cXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdH0sXFxuXFx0XFx0c2V0VW5pZm9ybXM6ICh7IF90aW1lLCBkZWx0YSwgcHJnIH0pID0+IHtcXG5cXHRcXHRcXHR2aXJ0dWFsVGltZS5zcGVlZCA9IDE7XFxuXFx0XFx0XFx0cHJnLnVuaWZvcm0xZihcXFwidW5pU2l6ZVxcXCIsIE1hdGgubWluKGNvbnRleHQud2lkdGgsIGNvbnRleHQuaGVpZ2h0KSAvIDUpO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMWYoXFxcInVuaURlbHRhXFxcIiwgZGVsdGEpO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMWYoXFxcInVuaVRpbWVcXFwiLCB2aXJ0dWFsVGltZS5zZWNvbmRzKTtcXG5cXHRcXHRcXHRwcmcudW5pZm9ybTJmKFxcblxcdFxcdFxcdFxcdFxcXCJ1bmlDZW50ZXJcXFwiLFxcblxcdFxcdFxcdFxcdGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueCxcXG5cXHRcXHRcXHRcXHRjb250ZXh0LmlucHV0cy5wb2ludGVyLnksXFxuXFx0XFx0XFx0KTtcXG5cXHRcXHRcXHRwcmcudW5pZm9ybTJmKFxcblxcdFxcdFxcdFxcdFxcXCJ1bmlTcGVlZFxcXCIsXFxuXFx0XFx0XFx0XFx0Y29udGV4dC5pbnB1dHMucG9pbnRlci5zcGVlZFgsXFxuXFx0XFx0XFx0XFx0Y29udGV4dC5pbnB1dHMucG9pbnRlci5zcGVlZFksXFxuXFx0XFx0XFx0KTtcXG5cXHRcXHR9LFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGNsZWFyLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbcGFydGljbGVzXSxcXG5cXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnRleHQucGxheSgpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdHJldHVybiAoXFxuXFx0XFx0PFZpZXdcXG5cXHRcXHRcXHRvblJlYWR5PXtpbml0fVxcblxcdFxcdFxcdGFzc2V0cz17e1xcblxcdFxcdFxcdFxcdGltYWdlOiB7XFxuXFx0XFx0XFx0XFx0XFx0YnViYmxlOiBCdWJibGVVUkwsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KTtcXG59XFxuXFxuZnVuY3Rpb24gbWFrZURhdGFzZXQoY291bnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IFRnZERhdGFzZXQge1xcblxcdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuXFx0XFx0YXR0UG9zaXRpb246IFxcXCJ2ZWMyXFxcIixcXG5cXHRcXHRhdHRTcGVlZDogXFxcInZlYzJcXFwiLFxcblxcdFxcdGF0dEJpcnRoOiBcXFwiZmxvYXRcXFwiLFxcblxcdFxcdGF0dFJhbmRvbTogXFxcInZlYzJcXFwiLFxcblxcdH0pO1xcblxcdGNvbnN0IGF0dFBvc2l0aW9uOiBudW1iZXJbXSA9IFtdO1xcblxcdGNvbnN0IGF0dFNwZWVkOiBudW1iZXJbXSA9IFtdO1xcblxcdGNvbnN0IGF0dEJpcnRoOiBudW1iZXJbXSA9IFtdO1xcblxcdGNvbnN0IGF0dFJhbmRvbTogbnVtYmVyW10gPSBbXTtcXG5cXHRjb25zdCBybmQgPSAobWluID0gMCwgbWF4ID0gMSkgPT4gdGdkQ2FsY1JhbmRvbShtaW4sIG1heCk7XFxuXFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XFxuXFx0XFx0YXR0UG9zaXRpb24ucHVzaChybmQoLTEsICsxKSwgcm5kKC0xLCArMSkpO1xcblxcdFxcdGF0dFNwZWVkLnB1c2gocm5kKC0wLjEsICswLjEpLCBybmQoLTAuMSwgKzAuMSkpO1xcblxcdFxcdGF0dEJpcnRoLnB1c2goKGkgLyBjb3VudCkgKiBkdXJhdGlvbik7XFxuXFx0XFx0YXR0UmFuZG9tLnB1c2gocm5kKCksIHJuZCgpKTtcXG5cXHR9XFxuXFx0ZGF0YXNldC5zZXQoXFxcImF0dFBvc2l0aW9uXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRQb3NpdGlvbikpO1xcblxcdGRhdGFzZXQuc2V0KFxcXCJhdHRTcGVlZFxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0U3BlZWQpKTtcXG5cXHRkYXRhc2V0LnNldChcXFwiYXR0QmlydGhcXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dEJpcnRoKSk7XFxuXFx0ZGF0YXNldC5zZXQoXFxcImF0dFJhbmRvbVxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0UmFuZG9tKSk7XFxuXFx0cmV0dXJuIGRhdGFzZXQ7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHR0Z2RDYWxjUmFuZG9tLFxuXHR0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkRGF0YXNldCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyUGFydGljbGVzLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFNoYWRlckZyYWdtZW50LFxuXHRUZ2RTaGFkZXJWZXJ0ZXgsXG5cdFRnZFRleHR1cmUyRCxcblx0VGdkVGltZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG5pbXBvcnQgQnViYmxlVVJMIGZyb20gXCIuL3NvYXAtYnViYmxlLndlYnBcIjtcblxuY29uc3QgQ09VTlQgPSA1MDAwMDtcbmNvbnN0IERVUkFUSU9OID0gNTtcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdGNvbnNvbGUubG9nKFwi8J+QniBbbWFpbi5kZW1vQDIyXSBhc3NldHMgPVwiLCBhc3NldHMpOyAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA1LTE3IGF0IDIxOjQyXG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pO1xuXHRjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKTtcblx0Y29uc3QgdmlydHVhbFRpbWUgPSBuZXcgVGdkVGltZSh7IGNvbnRleHQsIHNwZWVkOiAwIH0pO1xuXHRjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XG5cdFx0ZGF0YXNldCxcblx0XHRkcmF3TW9kZTogXCJQT0lOVFNcIixcblx0XHR0ZXh0dXJlczoge1xuXHRcdFx0dW5pVGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5idWJibGUpLFxuXHRcdH0sXG5cdFx0c2hhZGVyOiB7XG5cdFx0XHR2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcblx0XHRcdFx0ZnVuY3Rpb25zOiB7XG5cdFx0XHRcdFx0Li4udGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlKCksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdFx0dW5pVGltZTogXCJmbG9hdFwiLFxuXHRcdFx0XHRcdHVuaURlbHRhOiBcImZsb2F0XCIsXG5cdFx0XHRcdFx0dW5pQ2VudGVyOiBcInZlYzJcIixcblx0XHRcdFx0XHR1bmlTcGVlZDogXCJ2ZWMyXCIsXG5cdFx0XHRcdFx0dW5pU2l6ZTogXCJmbG9hdFwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YXJ5aW5nOiB7XG5cdFx0XHRcdFx0dmFyQWxwaGE6IFwiZmxvYXRcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0YXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXG5cdFx0XHRcdG1haW5Db2RlOiBbXG5cdFx0XHRcdFx0YGZsb2F0IGxpZmUgPSBjbGFtcCgodW5pVGltZSAtIGF0dEJpcnRoKSAqICR7KDEgLyBEVVJBVElPTikudG9GaXhlZCg2KX0sIDAuMCwgMS4wKTtgLFxuXHRcdFx0XHRcdFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1wiLFxuXHRcdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvc2l0aW9uLCAwLCAxKTtcIixcblx0XHRcdFx0XHRcImdsX1BvaW50U2l6ZSA9IHVuaVNpemUgKiAoMC4xICsgLjkgKiBsaWZlICogbGlmZSk7XCIsXG5cdFx0XHRcdFx0XCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogdmFyQWxwaGE7XCIsXG5cdFx0XHRcdFx0XCJpZiAobGlmZSA+PSAxLjApIHtcIixcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRgdmFyQmlydGggPSB1bmlUaW1lICsgYXR0UmFuZG9tLnggKiAke0RVUkFUSU9OLnRvRml4ZWQoMyl9O2AsXG5cdFx0XHRcdFx0XHRcInZhclBvc2l0aW9uID0gdW5pQ2VudGVyO1wiLFxuXHRcdFx0XHRcdFx0XCJ2YXJTcGVlZCA9IG5vcm1hbGl6ZSh1bmlTcGVlZCkgKiAxZS0xO1wiLFxuXHRcdFx0XHRcdFx0XCJ2ZWMyIHNoaWZ0ID0gMC4zICogdmVjMihcIixcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS54eSwgdW5pVGltZSkpLFwiLFxuXHRcdFx0XHRcdFx0XHRcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcIixcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcIik7XCIsXG5cdFx0XHRcdFx0XHRcInZhclNwZWVkICs9IHNoaWZ0O1wiLFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJ9XCIsXG5cdFx0XHRcdF0sXG5cdFx0XHR9KSxcblx0XHRcdGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG5cdFx0XHRcdG1haW5Db2RlOiBbXG5cdFx0XHRcdFx0XCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCBnbF9Qb2ludENvb3JkKTtcIixcblx0XHRcdFx0XHRcImNvbG9yLmEgKj0gdmFyQWxwaGE7XCIsXG5cdFx0XHRcdFx0XCJGcmFnQ29sb3IgPSBjb2xvcjtcIixcblx0XHRcdFx0XSxcblx0XHRcdH0pLFxuXHRcdH0sXG5cdFx0c2V0VW5pZm9ybXM6ICh7IF90aW1lLCBkZWx0YSwgcHJnIH0pID0+IHtcblx0XHRcdHZpcnR1YWxUaW1lLnNwZWVkID0gMTtcblx0XHRcdHByZy51bmlmb3JtMWYoXCJ1bmlTaXplXCIsIE1hdGgubWluKGNvbnRleHQud2lkdGgsIGNvbnRleHQuaGVpZ2h0KSAvIDUpO1xuXHRcdFx0cHJnLnVuaWZvcm0xZihcInVuaURlbHRhXCIsIGRlbHRhKTtcblx0XHRcdHByZy51bmlmb3JtMWYoXCJ1bmlUaW1lXCIsIHZpcnR1YWxUaW1lLnNlY29uZHMpO1xuXHRcdFx0cHJnLnVuaWZvcm0yZihcblx0XHRcdFx0XCJ1bmlDZW50ZXJcIixcblx0XHRcdFx0Y29udGV4dC5pbnB1dHMucG9pbnRlci54LFxuXHRcdFx0XHRjb250ZXh0LmlucHV0cy5wb2ludGVyLnksXG5cdFx0XHQpO1xuXHRcdFx0cHJnLnVuaWZvcm0yZihcblx0XHRcdFx0XCJ1bmlTcGVlZFwiLFxuXHRcdFx0XHRjb250ZXh0LmlucHV0cy5wb2ludGVyLnNwZWVkWCxcblx0XHRcdFx0Y29udGV4dC5pbnB1dHMucG9pbnRlci5zcGVlZFksXG5cdFx0XHQpO1xuXHRcdH0sXG5cdH0pO1xuXHRjb250ZXh0LmFkZChcblx0XHRjbGVhcixcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGJsZW5kOiBcImFscGhhXCIsXG5cdFx0XHRjaGlsZHJlbjogW3BhcnRpY2xlc10sXG5cdFx0fSksXG5cdCk7XG5cdGNvbnRleHQucGxheSgpO1xufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0YnViYmxlOiBCdWJibGVVUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGNvdW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBUZ2REYXRhc2V0IHtcblx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHRhdHRQb3NpdGlvbjogXCJ2ZWMyXCIsXG5cdFx0YXR0U3BlZWQ6IFwidmVjMlwiLFxuXHRcdGF0dEJpcnRoOiBcImZsb2F0XCIsXG5cdFx0YXR0UmFuZG9tOiBcInZlYzJcIixcblx0fSk7XG5cdGNvbnN0IGF0dFBvc2l0aW9uOiBudW1iZXJbXSA9IFtdO1xuXHRjb25zdCBhdHRTcGVlZDogbnVtYmVyW10gPSBbXTtcblx0Y29uc3QgYXR0QmlydGg6IG51bWJlcltdID0gW107XG5cdGNvbnN0IGF0dFJhbmRvbTogbnVtYmVyW10gPSBbXTtcblx0Y29uc3Qgcm5kID0gKG1pbiA9IDAsIG1heCA9IDEpID0+IHRnZENhbGNSYW5kb20obWluLCBtYXgpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblx0XHRhdHRQb3NpdGlvbi5wdXNoKHJuZCgtMSwgKzEpLCBybmQoLTEsICsxKSk7XG5cdFx0YXR0U3BlZWQucHVzaChybmQoLTAuMSwgKzAuMSksIHJuZCgtMC4xLCArMC4xKSk7XG5cdFx0YXR0QmlydGgucHVzaCgoaSAvIGNvdW50KSAqIGR1cmF0aW9uKTtcblx0XHRhdHRSYW5kb20ucHVzaChybmQoKSwgcm5kKCkpO1xuXHR9XG5cdGRhdGFzZXQuc2V0KFwiYXR0UG9zaXRpb25cIiwgbmV3IEZsb2F0MzJBcnJheShhdHRQb3NpdGlvbikpO1xuXHRkYXRhc2V0LnNldChcImF0dFNwZWVkXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0U3BlZWQpKTtcblx0ZGF0YXNldC5zZXQoXCJhdHRCaXJ0aFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dEJpcnRoKSk7XG5cdGRhdGFzZXQuc2V0KFwiYXR0UmFuZG9tXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0UmFuZG9tKSk7XG5cdHJldHVybiBkYXRhc2V0O1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDYWxjUmFuZG9tIiwidGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlIiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJQYXJ0aWNsZXMiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RTaGFkZXJGcmFnbWVudCIsIlRnZFNoYWRlclZlcnRleCIsIlRnZFRleHR1cmUyRCIsIlRnZFRpbWUiLCJWaWV3IiwiQnViYmxlVVJMIiwiQ09VTlQiLCJEVVJBVElPTiIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY29uc29sZSIsImNsZWFyIiwiZGF0YXNldCIsIm1ha2VEYXRhc2V0IiwidmlydHVhbFRpbWUiLCJwYXJ0aWNsZXMiLCJzZXRVbmlmb3JtcyIsIl90aW1lIiwiZGVsdGEiLCJwcmciLCJNYXRoIiwiY291bnQiLCJkdXJhdGlvbiIsImF0dFBvc2l0aW9uIiwiYXR0U3BlZWQiLCJhdHRCaXJ0aCIsImF0dFJhbmRvbSIsInJuZCIsIm1pbiIsIm1heCIsImkiLCJGbG9hdDMyQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZC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