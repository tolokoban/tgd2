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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTJfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS1kZGRiOWIuZDQ2N2UwYzQyYjNmNTM2Zi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BhcnRpY2xlcy9leGFtcGxlMi9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUyL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUyL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYWluLmRlbW9AMjJdIGFzc2V0cyA9XFxcIiwgYXNzZXRzKTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNS0xNyBhdCAyMTo0MlxcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pO1xcblxcdGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChDT1VOVCwgRFVSQVRJT04pO1xcblxcdGNvbnN0IHZpcnR1YWxUaW1lID0gbmV3IFRnZFRpbWUoeyBjb250ZXh0LCBzcGVlZDogMCB9KTtcXG5cXHRjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XFxuXFx0XFx0ZGF0YXNldCxcXG5cXHRcXHRkcmF3TW9kZTogXFxcIlBPSU5UU1xcXCIsXFxuXFx0XFx0dGV4dHVyZXM6IHtcXG5cXHRcXHRcXHR1bmlUZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJ1YmJsZSksXFxuXFx0XFx0fSxcXG5cXHRcXHRzaGFkZXI6IHtcXG5cXHRcXHRcXHR2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcXG5cXHRcXHRcXHRcXHRmdW5jdGlvbnM6IHtcXG5cXHRcXHRcXHRcXHRcXHQuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHVuaWZvcm1zOiB7XFxuXFx0XFx0XFx0XFx0XFx0dW5pVGltZTogXFxcImZsb2F0XFxcIixcXG5cXHRcXHRcXHRcXHRcXHR1bmlEZWx0YTogXFxcImZsb2F0XFxcIixcXG5cXHRcXHRcXHRcXHRcXHR1bmlDZW50ZXI6IFxcXCJ2ZWMyXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR1bmlTcGVlZDogXFxcInZlYzJcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHVuaVNpemU6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR2YXJ5aW5nOiB7XFxuXFx0XFx0XFx0XFx0XFx0dmFyQWxwaGE6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcXG5cXHRcXHRcXHRcXHRtYWluQ29kZTogW1xcblxcdFxcdFxcdFxcdFxcdGBmbG9hdCBsaWZlID0gY2xhbXAoKHVuaVRpbWUgLSBhdHRCaXJ0aCkgKiAkeygxIC8gRFVSQVRJT04pLnRvRml4ZWQoNil9LCAwLjAsIDEuMCk7YCxcXG5cXHRcXHRcXHRcXHRcXHRcXFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb3NpdGlvbiwgMCwgMSk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiZ2xfUG9pbnRTaXplID0gdW5pU2l6ZSAqICgwLjEgKyAuOSAqIGxpZmUgKiBsaWZlKTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogdmFyQWxwaGE7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiaWYgKGxpZmUgPj0gMS4wKSB7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRbXFxuXFx0XFx0XFx0XFx0XFx0XFx0YHZhckJpcnRoID0gdW5pVGltZSArIGF0dFJhbmRvbS54ICogJHtEVVJBVElPTi50b0ZpeGVkKDMpfTtgLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJQb3NpdGlvbiA9IHVuaUNlbnRlcjtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJTcGVlZCA9IG5vcm1hbGl6ZSh1bmlTcGVlZCkgKiAxZS0xO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcInZlYzIgc2hpZnQgPSAwLjMgKiB2ZWMyKFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0W1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS54eSwgdW5pVGltZSkpLFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcIik7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwidmFyU3BlZWQgKz0gc2hpZnQ7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ9XFxcIixcXG5cXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuXFx0XFx0XFx0XFx0bWFpbkNvZGU6IFtcXG5cXHRcXHRcXHRcXHRcXHRcXFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgZ2xfUG9pbnRDb29yZCk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiY29sb3IuYSAqPSB2YXJBbHBoYTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJGcmFnQ29sb3IgPSBjb2xvcjtcXFwiLFxcblxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0fSxcXG5cXHRcXHRzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xcblxcdFxcdFxcdHZpcnR1YWxUaW1lLnNwZWVkID0gMTtcXG5cXHRcXHRcXHRwcmcudW5pZm9ybTFmKFxcXCJ1bmlTaXplXFxcIiwgTWF0aC5taW4oY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpIC8gNSk7XFxuXFx0XFx0XFx0cHJnLnVuaWZvcm0xZihcXFwidW5pRGVsdGFcXFwiLCBkZWx0YSk7XFxuXFx0XFx0XFx0cHJnLnVuaWZvcm0xZihcXFwidW5pVGltZVxcXCIsIHZpcnR1YWxUaW1lLnNlY29uZHMpO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMmYoXFxuXFx0XFx0XFx0XFx0XFxcInVuaUNlbnRlclxcXCIsXFxuXFx0XFx0XFx0XFx0Y29udGV4dC5pbnB1dHMucG9pbnRlci54LFxcblxcdFxcdFxcdFxcdGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueSxcXG5cXHRcXHRcXHQpO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMmYoXFxuXFx0XFx0XFx0XFx0XFxcInVuaVNwZWVkXFxcIixcXG5cXHRcXHRcXHRcXHRjb250ZXh0LmlucHV0cy5wb2ludGVyLnNwZWVkWCxcXG5cXHRcXHRcXHRcXHRjb250ZXh0LmlucHV0cy5wb2ludGVyLnNwZWVkWSxcXG5cXHRcXHRcXHQpO1xcblxcdFxcdH0sXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0Y2xlYXIsXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0YmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtwYXJ0aWNsZXNdLFxcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29udGV4dC5wbGF5KCk7XFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHR0Z2RDYWxjUmFuZG9tLFxcblxcdHRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkRGF0YXNldCxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlclBhcnRpY2xlcyxcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0VGdkU2hhZGVyRnJhZ21lbnQsXFxuXFx0VGdkU2hhZGVyVmVydGV4LFxcblxcdFRnZFRleHR1cmUyRCxcXG5cXHRUZ2RUaW1lLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcblxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5cXG5pbXBvcnQgQnViYmxlVVJMIGZyb20gXFxcIi4vc29hcC1idWJibGUud2VicFxcXCI7XFxuXFxuY29uc3QgQ09VTlQgPSA1MDAwMDtcXG5jb25zdCBEVVJBVElPTiA9IDU7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYWluLmRlbW9AMjJdIGFzc2V0cyA9XFxcIiwgYXNzZXRzKTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wNS0xNyBhdCAyMTo0MlxcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pO1xcblxcdGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChDT1VOVCwgRFVSQVRJT04pO1xcblxcdGNvbnN0IHZpcnR1YWxUaW1lID0gbmV3IFRnZFRpbWUoeyBjb250ZXh0LCBzcGVlZDogMCB9KTtcXG5cXHRjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XFxuXFx0XFx0ZGF0YXNldCxcXG5cXHRcXHRkcmF3TW9kZTogXFxcIlBPSU5UU1xcXCIsXFxuXFx0XFx0dGV4dHVyZXM6IHtcXG5cXHRcXHRcXHR1bmlUZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJ1YmJsZSksXFxuXFx0XFx0fSxcXG5cXHRcXHRzaGFkZXI6IHtcXG5cXHRcXHRcXHR2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcXG5cXHRcXHRcXHRcXHRmdW5jdGlvbnM6IHtcXG5cXHRcXHRcXHRcXHRcXHQuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHVuaWZvcm1zOiB7XFxuXFx0XFx0XFx0XFx0XFx0dW5pVGltZTogXFxcImZsb2F0XFxcIixcXG5cXHRcXHRcXHRcXHRcXHR1bmlEZWx0YTogXFxcImZsb2F0XFxcIixcXG5cXHRcXHRcXHRcXHRcXHR1bmlDZW50ZXI6IFxcXCJ2ZWMyXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR1bmlTcGVlZDogXFxcInZlYzJcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHVuaVNpemU6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR2YXJ5aW5nOiB7XFxuXFx0XFx0XFx0XFx0XFx0dmFyQWxwaGE6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcXG5cXHRcXHRcXHRcXHRtYWluQ29kZTogW1xcblxcdFxcdFxcdFxcdFxcdGBmbG9hdCBsaWZlID0gY2xhbXAoKHVuaVRpbWUgLSBhdHRCaXJ0aCkgKiAkeygxIC8gRFVSQVRJT04pLnRvRml4ZWQoNil9LCAwLjAsIDEuMCk7YCxcXG5cXHRcXHRcXHRcXHRcXHRcXFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb3NpdGlvbiwgMCwgMSk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiZ2xfUG9pbnRTaXplID0gdW5pU2l6ZSAqICgwLjEgKyAuOSAqIGxpZmUgKiBsaWZlKTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogdmFyQWxwaGE7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiaWYgKGxpZmUgPj0gMS4wKSB7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRbXFxuXFx0XFx0XFx0XFx0XFx0XFx0YHZhckJpcnRoID0gdW5pVGltZSArIGF0dFJhbmRvbS54ICogJHtEVVJBVElPTi50b0ZpeGVkKDMpfTtgLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJQb3NpdGlvbiA9IHVuaUNlbnRlcjtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJTcGVlZCA9IG5vcm1hbGl6ZSh1bmlTcGVlZCkgKiAxZS0xO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcInZlYzIgc2hpZnQgPSAwLjMgKiB2ZWMyKFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0W1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS54eSwgdW5pVGltZSkpLFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcIik7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwidmFyU3BlZWQgKz0gc2hpZnQ7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ9XFxcIixcXG5cXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuXFx0XFx0XFx0XFx0bWFpbkNvZGU6IFtcXG5cXHRcXHRcXHRcXHRcXHRcXFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgZ2xfUG9pbnRDb29yZCk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiY29sb3IuYSAqPSB2YXJBbHBoYTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJGcmFnQ29sb3IgPSBjb2xvcjtcXFwiLFxcblxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0fSxcXG5cXHRcXHRzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xcblxcdFxcdFxcdHZpcnR1YWxUaW1lLnNwZWVkID0gMTtcXG5cXHRcXHRcXHRwcmcudW5pZm9ybTFmKFxcXCJ1bmlTaXplXFxcIiwgTWF0aC5taW4oY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpIC8gNSk7XFxuXFx0XFx0XFx0cHJnLnVuaWZvcm0xZihcXFwidW5pRGVsdGFcXFwiLCBkZWx0YSk7XFxuXFx0XFx0XFx0cHJnLnVuaWZvcm0xZihcXFwidW5pVGltZVxcXCIsIHZpcnR1YWxUaW1lLnNlY29uZHMpO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMmYoXFxuXFx0XFx0XFx0XFx0XFxcInVuaUNlbnRlclxcXCIsXFxuXFx0XFx0XFx0XFx0Y29udGV4dC5pbnB1dHMucG9pbnRlci54LFxcblxcdFxcdFxcdFxcdGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueSxcXG5cXHRcXHRcXHQpO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMmYoXFxuXFx0XFx0XFx0XFx0XFxcInVuaVNwZWVkXFxcIixcXG5cXHRcXHRcXHRcXHRjb250ZXh0LmlucHV0cy5wb2ludGVyLnNwZWVkWCxcXG5cXHRcXHRcXHRcXHRjb250ZXh0LmlucHV0cy5wb2ludGVyLnNwZWVkWSxcXG5cXHRcXHRcXHQpO1xcblxcdFxcdH0sXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0Y2xlYXIsXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0YmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtwYXJ0aWNsZXNdLFxcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29udGV4dC5wbGF5KCk7XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0YXNzZXRzPXt7XFxuXFx0XFx0XFx0XFx0aW1hZ2U6IHtcXG5cXHRcXHRcXHRcXHRcXHRidWJibGU6IEJ1YmJsZVVSTCxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpO1xcbn1cXG5cXG5mdW5jdGlvbiBtYWtlRGF0YXNldChjb3VudDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogVGdkRGF0YXNldCB7XFxuXFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG5cXHRcXHRhdHRQb3NpdGlvbjogXFxcInZlYzJcXFwiLFxcblxcdFxcdGF0dFNwZWVkOiBcXFwidmVjMlxcXCIsXFxuXFx0XFx0YXR0QmlydGg6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0YXR0UmFuZG9tOiBcXFwidmVjMlxcXCIsXFxuXFx0fSk7XFxuXFx0Y29uc3QgYXR0UG9zaXRpb246IG51bWJlcltdID0gW107XFxuXFx0Y29uc3QgYXR0U3BlZWQ6IG51bWJlcltdID0gW107XFxuXFx0Y29uc3QgYXR0QmlydGg6IG51bWJlcltdID0gW107XFxuXFx0Y29uc3QgYXR0UmFuZG9tOiBudW1iZXJbXSA9IFtdO1xcblxcdGNvbnN0IHJuZCA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiB0Z2RDYWxjUmFuZG9tKG1pbiwgbWF4KTtcXG5cXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG5cXHRcXHRhdHRQb3NpdGlvbi5wdXNoKHJuZCgtMSwgKzEpLCBybmQoLTEsICsxKSk7XFxuXFx0XFx0YXR0U3BlZWQucHVzaChybmQoLTAuMSwgKzAuMSksIHJuZCgtMC4xLCArMC4xKSk7XFxuXFx0XFx0YXR0QmlydGgucHVzaCgoaSAvIGNvdW50KSAqIGR1cmF0aW9uKTtcXG5cXHRcXHRhdHRSYW5kb20ucHVzaChybmQoKSwgcm5kKCkpO1xcblxcdH1cXG5cXHRkYXRhc2V0LnNldChcXFwiYXR0UG9zaXRpb25cXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFBvc2l0aW9uKSk7XFxuXFx0ZGF0YXNldC5zZXQoXFxcImF0dFNwZWVkXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRTcGVlZCkpO1xcblxcdGRhdGFzZXQuc2V0KFxcXCJhdHRCaXJ0aFxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0QmlydGgpKTtcXG5cXHRkYXRhc2V0LnNldChcXFwiYXR0UmFuZG9tXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRSYW5kb20pKTtcXG5cXHRyZXR1cm4gZGF0YXNldDtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdHRnZENhbGNSYW5kb20sXG5cdHRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2REYXRhc2V0LFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJQYXJ0aWNsZXMsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkU2hhZGVyRnJhZ21lbnQsXG5cdFRnZFNoYWRlclZlcnRleCxcblx0VGdkVGV4dHVyZTJELFxuXHRUZ2RUaW1lLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmltcG9ydCBCdWJibGVVUkwgZnJvbSBcIi4vc29hcC1idWJibGUud2VicFwiO1xuXG5jb25zdCBDT1VOVCA9IDUwMDAwO1xuY29uc3QgRFVSQVRJT04gPSA1O1xuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Y29uc29sZS5sb2coXCLwn5CeIFttYWluLmRlbW9AMjJdIGFzc2V0cyA9XCIsIGFzc2V0cyk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDUtMTcgYXQgMjE6NDJcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSk7XG5cdGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChDT1VOVCwgRFVSQVRJT04pO1xuXHRjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSk7XG5cdGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcblx0XHRkYXRhc2V0LFxuXHRcdGRyYXdNb2RlOiBcIlBPSU5UU1wiLFxuXHRcdHRleHR1cmVzOiB7XG5cdFx0XHR1bmlUZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJ1YmJsZSksXG5cdFx0fSxcblx0XHRzaGFkZXI6IHtcblx0XHRcdHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xuXHRcdFx0XHRmdW5jdGlvbnM6IHtcblx0XHRcdFx0XHQuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0XHR1bmlUaW1lOiBcImZsb2F0XCIsXG5cdFx0XHRcdFx0dW5pRGVsdGE6IFwiZmxvYXRcIixcblx0XHRcdFx0XHR1bmlDZW50ZXI6IFwidmVjMlwiLFxuXHRcdFx0XHRcdHVuaVNwZWVkOiBcInZlYzJcIixcblx0XHRcdFx0XHR1bmlTaXplOiBcImZsb2F0XCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhcnlpbmc6IHtcblx0XHRcdFx0XHR2YXJBbHBoYTogXCJmbG9hdFwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcblx0XHRcdFx0bWFpbkNvZGU6IFtcblx0XHRcdFx0XHRgZmxvYXQgbGlmZSA9IGNsYW1wKCh1bmlUaW1lIC0gYXR0QmlydGgpICogJHsoMSAvIERVUkFUSU9OKS50b0ZpeGVkKDYpfSwgMC4wLCAxLjApO2AsXG5cdFx0XHRcdFx0XCJ2YXJBbHBoYSA9IDEuMCAtIGxpZmU7XCIsXG5cdFx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHZlYzQoYXR0UG9zaXRpb24sIDAsIDEpO1wiLFxuXHRcdFx0XHRcdFwiZ2xfUG9pbnRTaXplID0gdW5pU2l6ZSAqICgwLjEgKyAuOSAqIGxpZmUgKiBsaWZlKTtcIixcblx0XHRcdFx0XHRcInZhclBvc2l0aW9uIC09IGF0dFNwZWVkICogdW5pRGVsdGEgKiB2YXJBbHBoYTtcIixcblx0XHRcdFx0XHRcImlmIChsaWZlID49IDEuMCkge1wiLFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdGB2YXJCaXJ0aCA9IHVuaVRpbWUgKyBhdHRSYW5kb20ueCAqICR7RFVSQVRJT04udG9GaXhlZCgzKX07YCxcblx0XHRcdFx0XHRcdFwidmFyUG9zaXRpb24gPSB1bmlDZW50ZXI7XCIsXG5cdFx0XHRcdFx0XHRcInZhclNwZWVkID0gbm9ybWFsaXplKHVuaVNwZWVkKSAqIDFlLTE7XCIsXG5cdFx0XHRcdFx0XHRcInZlYzIgc2hpZnQgPSAwLjMgKiB2ZWMyKFwiLFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnh5LCB1bmlUaW1lKSksXCIsXG5cdFx0XHRcdFx0XHRcdFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueXgsIHVuaVRpbWUpKVwiLFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFwiKTtcIixcblx0XHRcdFx0XHRcdFwidmFyU3BlZWQgKz0gc2hpZnQ7XCIsXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcIn1cIixcblx0XHRcdFx0XSxcblx0XHRcdH0pLFxuXHRcdFx0ZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcblx0XHRcdFx0bWFpbkNvZGU6IFtcblx0XHRcdFx0XHRcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1wiLFxuXHRcdFx0XHRcdFwiY29sb3IuYSAqPSB2YXJBbHBoYTtcIixcblx0XHRcdFx0XHRcIkZyYWdDb2xvciA9IGNvbG9yO1wiLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSksXG5cdFx0fSxcblx0XHRzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xuXHRcdFx0dmlydHVhbFRpbWUuc3BlZWQgPSAxO1xuXHRcdFx0cHJnLnVuaWZvcm0xZihcInVuaVNpemVcIiwgTWF0aC5taW4oY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpIC8gNSk7XG5cdFx0XHRwcmcudW5pZm9ybTFmKFwidW5pRGVsdGFcIiwgZGVsdGEpO1xuXHRcdFx0cHJnLnVuaWZvcm0xZihcInVuaVRpbWVcIiwgdmlydHVhbFRpbWUuc2Vjb25kcyk7XG5cdFx0XHRwcmcudW5pZm9ybTJmKFxuXHRcdFx0XHRcInVuaUNlbnRlclwiLFxuXHRcdFx0XHRjb250ZXh0LmlucHV0cy5wb2ludGVyLngsXG5cdFx0XHRcdGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueSxcblx0XHRcdCk7XG5cdFx0XHRwcmcudW5pZm9ybTJmKFxuXHRcdFx0XHRcInVuaVNwZWVkXCIsXG5cdFx0XHRcdGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuc3BlZWRYLFxuXHRcdFx0XHRjb250ZXh0LmlucHV0cy5wb2ludGVyLnNwZWVkWSxcblx0XHRcdCk7XG5cdFx0fSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKFxuXHRcdGNsZWFyLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0YmxlbmQ6IFwiYWxwaGFcIixcblx0XHRcdGNoaWxkcmVuOiBbcGFydGljbGVzXSxcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wbGF5KCk7XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0XHRidWJibGU6IEJ1YmJsZVVSTCxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoY291bnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IFRnZERhdGFzZXQge1xuXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuXHRcdGF0dFBvc2l0aW9uOiBcInZlYzJcIixcblx0XHRhdHRTcGVlZDogXCJ2ZWMyXCIsXG5cdFx0YXR0QmlydGg6IFwiZmxvYXRcIixcblx0XHRhdHRSYW5kb206IFwidmVjMlwiLFxuXHR9KTtcblx0Y29uc3QgYXR0UG9zaXRpb246IG51bWJlcltdID0gW107XG5cdGNvbnN0IGF0dFNwZWVkOiBudW1iZXJbXSA9IFtdO1xuXHRjb25zdCBhdHRCaXJ0aDogbnVtYmVyW10gPSBbXTtcblx0Y29uc3QgYXR0UmFuZG9tOiBudW1iZXJbXSA9IFtdO1xuXHRjb25zdCBybmQgPSAobWluID0gMCwgbWF4ID0gMSkgPT4gdGdkQ2FsY1JhbmRvbShtaW4sIG1heCk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdGF0dFBvc2l0aW9uLnB1c2gocm5kKC0xLCArMSksIHJuZCgtMSwgKzEpKTtcblx0XHRhdHRTcGVlZC5wdXNoKHJuZCgtMC4xLCArMC4xKSwgcm5kKC0wLjEsICswLjEpKTtcblx0XHRhdHRCaXJ0aC5wdXNoKChpIC8gY291bnQpICogZHVyYXRpb24pO1xuXHRcdGF0dFJhbmRvbS5wdXNoKHJuZCgpLCBybmQoKSk7XG5cdH1cblx0ZGF0YXNldC5zZXQoXCJhdHRQb3NpdGlvblwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFBvc2l0aW9uKSk7XG5cdGRhdGFzZXQuc2V0KFwiYXR0U3BlZWRcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRTcGVlZCkpO1xuXHRkYXRhc2V0LnNldChcImF0dEJpcnRoXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0QmlydGgpKTtcblx0ZGF0YXNldC5zZXQoXCJhdHRSYW5kb21cIiwgbmV3IEZsb2F0MzJBcnJheShhdHRSYW5kb20pKTtcblx0cmV0dXJuIGRhdGFzZXQ7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENhbGNSYW5kb20iLCJ0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UiLCJUZ2REYXRhc2V0IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlclBhcnRpY2xlcyIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFNoYWRlckZyYWdtZW50IiwiVGdkU2hhZGVyVmVydGV4IiwiVGdkVGV4dHVyZTJEIiwiVGdkVGltZSIsIlZpZXciLCJCdWJibGVVUkwiLCJDT1VOVCIsIkRVUkFUSU9OIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjb25zb2xlIiwiY2xlYXIiLCJkYXRhc2V0IiwibWFrZURhdGFzZXQiLCJ2aXJ0dWFsVGltZSIsInBhcnRpY2xlcyIsInNldFVuaWZvcm1zIiwiX3RpbWUiLCJkZWx0YSIsInByZyIsIk1hdGgiLCJjb3VudCIsImR1cmF0aW9uIiwiYXR0UG9zaXRpb24iLCJhdHRTcGVlZCIsImF0dEJpcnRoIiwiYXR0UmFuZG9tIiwicm5kIiwibWluIiwibWF4IiwiaSIsIkZsb2F0MzJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDdkI7QUFF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