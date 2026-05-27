"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_particles_example4_page_mdx-src_components_demo_CodeViewer_CodeViewe-9d3f66"], {
70036(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(91930);
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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const dataset: TgdDataset = makeDataset(COUNT, DURATION)\n    const virtualTime = new TgdTime({ context, speed: 0 })\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: \"POINTS\",\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                },\n                attributes: dataset.getTypeRecord(),\n                mainCode: [\"gl_Position = vec4(-1, -1, 0, 1);\", \"gl_PointSize = attSize;\"],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: [\"float value = .5 / 255.0;\", \"FragColor = vec4(value, 0.0, 0.0, 1.0);\"],\n            }),\n        },\n        setUniforms: ({ _time, delta, prg }) => {\n            if (virtualTime.speed === 0) {\n                virtualTime.reset()\n                virtualTime.speed = 1\n            }\n        },\n    })\n    const textureFB = new TgdTexture2D(context, {\n        params: {\n            minFilter: \"NEAREST\",\n            magFilter: \"NEAREST\",\n        },\n        storage: {\n            format: \"R32F / RED / FLOAT\",\n        },\n    })\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        antiAliasing: false,\n        textureColor0: textureFB,\n        children: [\n            new TgdPainterState(context, {\n                blend: \"add\",\n                children: [clear, particles],\n            }),\n        ],\n    })\n    const palette = new TgdTexture2D(context, {\n        params: {\n            minFilter: \"LINEAR\",\n            magFilter: \"LINEAR\",\n            wrapR: \"CLAMP_TO_EDGE\",\n            wrapS: \"CLAMP_TO_EDGE\",\n            wrapT: \"CLAMP_TO_EDGE\",\n        },\n    }).loadBitmap(tgdCanvasCreatePalette([\"#000\", \"#f00\", \"#f92\", \"#ee3\", \"#ff4\", \"#fff\"]))\n    const filter = new TgdFilter({\n        textures: {\n            texPalette: palette,\n        },\n        fragmentShaderCode: [\n            \"float u = clamp(texture(uniTexture, varUV).r, 0.0, 1.0);\",\n            \"vec4 color = texture(texPalette, vec2(u, .5));\",\n            \"if (u < 0.0) color = vec4(1, 0, 0, 1);\",\n            \"if (u > 1.0) color = vec4(1, 0, 1, 1);\",\n            \"color.a = 1.0;\",\n            \"FragColor = color;\",\n        ],\n    })\n    const filters = new TgdPainterFilter(context, {\n        flipY: true,\n        texture: framebuffer.textureColor0,\n        filters: [filter],\n    })\n    context.add(clear, framebuffer, filters)\n    context.play()\n    context.extensions.debug()\n}"
};
var FULL = "import {\n    tgdCalcRandom,\n    tgdCanvasCreatePalette,\n    tgdCodeFunction_perlinNoise,\n    TgdContext,\n    TgdDataset,\n    TgdFilter,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterParticles,\n    TgdPainterState,\n    TgdShaderFragment,\n    TgdShaderVertex,\n    TgdTexture2D,\n    TgdTime,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nconst COUNT = 512\nconst DURATION = 3\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const dataset: TgdDataset = makeDataset(COUNT, DURATION)\n    const virtualTime = new TgdTime({ context, speed: 0 })\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: \"POINTS\",\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                },\n                attributes: dataset.getTypeRecord(),\n                mainCode: [\"gl_Position = vec4(-1, -1, 0, 1);\", \"gl_PointSize = attSize;\"],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: [\"float value = .5 / 255.0;\", \"FragColor = vec4(value, 0.0, 0.0, 1.0);\"],\n            }),\n        },\n        setUniforms: ({ _time, delta, prg }) => {\n            if (virtualTime.speed === 0) {\n                virtualTime.reset()\n                virtualTime.speed = 1\n            }\n        },\n    })\n    const textureFB = new TgdTexture2D(context, {\n        params: {\n            minFilter: \"NEAREST\",\n            magFilter: \"NEAREST\",\n        },\n        storage: {\n            format: \"R32F / RED / FLOAT\",\n        },\n    })\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        antiAliasing: false,\n        textureColor0: textureFB,\n        children: [\n            new TgdPainterState(context, {\n                blend: \"add\",\n                children: [clear, particles],\n            }),\n        ],\n    })\n    const palette = new TgdTexture2D(context, {\n        params: {\n            minFilter: \"LINEAR\",\n            magFilter: \"LINEAR\",\n            wrapR: \"CLAMP_TO_EDGE\",\n            wrapS: \"CLAMP_TO_EDGE\",\n            wrapT: \"CLAMP_TO_EDGE\",\n        },\n    }).loadBitmap(tgdCanvasCreatePalette([\"#000\", \"#f00\", \"#f92\", \"#ee3\", \"#ff4\", \"#fff\"]))\n    const filter = new TgdFilter({\n        textures: {\n            texPalette: palette,\n        },\n        fragmentShaderCode: [\n            \"float u = clamp(texture(uniTexture, varUV).r, 0.0, 1.0);\",\n            \"vec4 color = texture(texPalette, vec2(u, .5));\",\n            \"if (u < 0.0) color = vec4(1, 0, 0, 1);\",\n            \"if (u > 1.0) color = vec4(1, 0, 1, 1);\",\n            \"color.a = 1.0;\",\n            \"FragColor = color;\",\n        ],\n    })\n    const filters = new TgdPainterFilter(context, {\n        flipY: true,\n        texture: framebuffer.textureColor0,\n        filters: [filter],\n    })\n    context.add(clear, framebuffer, filters)\n    context.play()\n    context.extensions.debug()\n}\n\nexport default function Demo() {\n    return <View onReady={init} options={{ alpha: false }} />\n}\n\nfunction makeDataset(count: number, duration: number): TgdDataset {\n    const dataset = new TgdDataset({\n        attSize: \"float\",\n    })\n    const attSize: number[] = []\n    for (let i = 0; i < count; i++) {\n        attSize.push(8 + i * 2)\n    }\n    dataset.set(\"attSize\", new Float32Array(attSize))\n    return dataset\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
91930(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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



var COUNT = 512;
var DURATION = 3;
// #begin
function init(context, assets) {
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
        shader: {
            vert: new _tolokoban_tgd__rspack_import_1.TgdShaderVertex({
                functions: _object_spread({}, (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_perlinNoise)()),
                attributes: dataset.getTypeRecord(),
                mainCode: [
                    "gl_Position = vec4(-1, -1, 0, 1);",
                    "gl_PointSize = attSize;"
                ]
            }),
            frag: new _tolokoban_tgd__rspack_import_1.TgdShaderFragment({
                mainCode: [
                    "float value = .5 / 255.0;",
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
        }
    });
    var textureFB = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        params: {
            minFilter: "NEAREST",
            magFilter: "NEAREST"
        },
        storage: {
            format: "R32F / RED / FLOAT"
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
    var filter = new _tolokoban_tgd__rspack_import_1.TgdFilter({
        textures: {
            texPalette: palette
        },
        fragmentShaderCode: [
            "float u = clamp(texture(uniTexture, varUV).r, 0.0, 1.0);",
            "vec4 color = texture(texPalette, vec2(u, .5));",
            "if (u < 0.0) color = vec4(1, 0, 0, 1);",
            "if (u > 1.0) color = vec4(1, 0, 1, 1);",
            "color.a = 1.0;",
            "FragColor = color;"
        ]
    });
    var filters = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        flipY: true,
        texture: framebuffer.textureColor0,
        filters: [
            filter
        ]
    });
    context.add(clear, framebuffer, filters);
    context.play();
    context.extensions.debug();
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        options: {
            alpha: false
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/main.demo.tsx",
        lineNumber: 104,
        columnNumber: 12
    }, this);
}
function makeDataset(count, duration) {
    var dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        attSize: "float"
    });
    var attSize = [];
    for(var i = 0; i < count; i++){
        attSize.push(8 + i * 2);
    }
    dataset.set("attSize", new Float32Array(attSize));
    return dataset;
}


},
40789(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(70036);
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Testing the issue with float textures."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTRfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS05ZDNmNjYuZTQ4ZmM1MDRkNzI1YjdmYi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wYXJ0aWNsZXMvZXhhbXBsZTQvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wYXJ0aWNsZXMvZXhhbXBsZTQvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGU0L3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgY29uc3QgZGF0YXNldDogVGdkRGF0YXNldCA9IG1ha2VEYXRhc2V0KENPVU5ULCBEVVJBVElPTilcXG4gICAgY29uc3QgdmlydHVhbFRpbWUgPSBuZXcgVGdkVGltZSh7IGNvbnRleHQsIHNwZWVkOiAwIH0pXFxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcXG4gICAgICAgIGRhdGFzZXQsXFxuICAgICAgICBkcmF3TW9kZTogXFxcIlBPSU5UU1xcXCIsXFxuICAgICAgICBzaGFkZXI6IHtcXG4gICAgICAgICAgICB2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxcImdsX1Bvc2l0aW9uID0gdmVjNCgtMSwgLTEsIDAsIDEpO1xcXCIsIFxcXCJnbF9Qb2ludFNpemUgPSBhdHRTaXplO1xcXCJdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxcImZsb2F0IHZhbHVlID0gLjUgLyAyNTUuMDtcXFwiLCBcXFwiRnJhZ0NvbG9yID0gdmVjNCh2YWx1ZSwgMC4wLCAwLjAsIDEuMCk7XFxcIl0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0VW5pZm9ybXM6ICh7IF90aW1lLCBkZWx0YSwgcHJnIH0pID0+IHtcXG4gICAgICAgICAgICBpZiAodmlydHVhbFRpbWUuc3BlZWQgPT09IDApIHtcXG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWUucmVzZXQoKVxcbiAgICAgICAgICAgICAgICB2aXJ0dWFsVGltZS5zcGVlZCA9IDFcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCB0ZXh0dXJlRkIgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHN0b3JhZ2U6IHtcXG4gICAgICAgICAgICBmb3JtYXQ6IFxcXCJSMzJGIC8gUkVEIC8gRkxPQVRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIGFudGlBbGlhc2luZzogZmFsc2UsXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlRkIsXFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBibGVuZDogXFxcImFkZFxcXCIsXFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIHBhcnRpY2xlc10sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgd3JhcFI6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgICAgICB3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgICAgIHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjMDAwXFxcIiwgXFxcIiNmMDBcXFwiLCBcXFwiI2Y5MlxcXCIsIFxcXCIjZWUzXFxcIiwgXFxcIiNmZjRcXFwiLCBcXFwiI2ZmZlxcXCJdKSlcXG4gICAgY29uc3QgZmlsdGVyID0gbmV3IFRnZEZpbHRlcih7XFxuICAgICAgICB0ZXh0dXJlczoge1xcbiAgICAgICAgICAgIHRleFBhbGV0dGU6IHBhbGV0dGUsXFxuICAgICAgICB9LFxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxuICAgICAgICAgICAgXFxcImZsb2F0IHUgPSBjbGFtcCh0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKS5yLCAwLjAsIDEuMCk7XFxcIixcXG4gICAgICAgICAgICBcXFwidmVjNCBjb2xvciA9IHRleHR1cmUodGV4UGFsZXR0ZSwgdmVjMih1LCAuNSkpO1xcXCIsXFxuICAgICAgICAgICAgXFxcImlmICh1IDwgMC4wKSBjb2xvciA9IHZlYzQoMSwgMCwgMCwgMSk7XFxcIixcXG4gICAgICAgICAgICBcXFwiaWYgKHUgPiAxLjApIGNvbG9yID0gdmVjNCgxLCAwLCAxLCAxKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJjb2xvci5hID0gMS4wO1xcXCIsXFxuICAgICAgICAgICAgXFxcIkZyYWdDb2xvciA9IGNvbG9yO1xcXCIsXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxcbiAgICAgICAgZmlsdGVyczogW2ZpbHRlcl0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBmcmFtZWJ1ZmZlciwgZmlsdGVycylcXG4gICAgY29udGV4dC5wbGF5KClcXG4gICAgY29udGV4dC5leHRlbnNpb25zLmRlYnVnKClcXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0Z2RDYWxjUmFuZG9tLFxcbiAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZERhdGFzZXQsXFxuICAgIFRnZEZpbHRlcixcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXFxuICAgIFRnZFBhaW50ZXJQYXJ0aWNsZXMsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkU2hhZGVyRnJhZ21lbnQsXFxuICAgIFRnZFNoYWRlclZlcnRleCxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICBUZ2RUaW1lLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmNvbnN0IENPVU5UID0gNTEyXFxuY29uc3QgRFVSQVRJT04gPSAzXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKVxcbiAgICBjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSlcXG4gICAgY29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xcbiAgICAgICAgZGF0YXNldCxcXG4gICAgICAgIGRyYXdNb2RlOiBcXFwiUE9JTlRTXFxcIixcXG4gICAgICAgIHNoYWRlcjoge1xcbiAgICAgICAgICAgIHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXFwiZ2xfUG9zaXRpb24gPSB2ZWM0KC0xLCAtMSwgMCwgMSk7XFxcIiwgXFxcImdsX1BvaW50U2l6ZSA9IGF0dFNpemU7XFxcIl0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXFwiZmxvYXQgdmFsdWUgPSAuNSAvIDI1NS4wO1xcXCIsIFxcXCJGcmFnQ29sb3IgPSB2ZWM0KHZhbHVlLCAwLjAsIDAuMCwgMS4wKTtcXFwiXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZS5zcGVlZCA9PT0gMCkge1xcbiAgICAgICAgICAgICAgICB2aXJ0dWFsVGltZS5yZXNldCgpXFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lLnNwZWVkID0gMVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHRleHR1cmVGQiA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgc3RvcmFnZToge1xcbiAgICAgICAgICAgIGZvcm1hdDogXFxcIlIzMkYgLyBSRUQgLyBGTE9BVFxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgYW50aUFsaWFzaW5nOiBmYWxzZSxcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IHRleHR1cmVGQixcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGJsZW5kOiBcXFwiYWRkXFxcIixcXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgcGFydGljbGVzXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICB3cmFwUjogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgICAgIHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICAgICAgd3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgIH0sXFxuICAgIH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXFxcIiMwMDBcXFwiLCBcXFwiI2YwMFxcXCIsIFxcXCIjZjkyXFxcIiwgXFxcIiNlZTNcXFwiLCBcXFwiI2ZmNFxcXCIsIFxcXCIjZmZmXFxcIl0pKVxcbiAgICBjb25zdCBmaWx0ZXIgPSBuZXcgVGdkRmlsdGVyKHtcXG4gICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgdGV4UGFsZXR0ZTogcGFsZXR0ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcXG4gICAgICAgICAgICBcXFwiZmxvYXQgdSA9IGNsYW1wKHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpLnIsIDAuMCwgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh0ZXhQYWxldHRlLCB2ZWMyKHUsIC41KSk7XFxcIixcXG4gICAgICAgICAgICBcXFwiaWYgKHUgPCAwLjApIGNvbG9yID0gdmVjNCgxLCAwLCAwLCAxKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJpZiAodSA+IDEuMCkgY29sb3IgPSB2ZWM0KDEsIDAsIDEsIDEpO1xcXCIsXFxuICAgICAgICAgICAgXFxcImNvbG9yLmEgPSAxLjA7XFxcIixcXG4gICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gY29sb3I7XFxcIixcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXFxuICAgICAgICBmaWx0ZXJzOiBbZmlsdGVyXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIGZyYW1lYnVmZmVyLCBmaWx0ZXJzKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICBjb250ZXh0LmV4dGVuc2lvbnMuZGVidWcoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gb3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX0gLz5cXG59XFxuXFxuZnVuY3Rpb24gbWFrZURhdGFzZXQoY291bnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IFRnZERhdGFzZXQge1xcbiAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcbiAgICAgICAgYXR0U2l6ZTogXFxcImZsb2F0XFxcIixcXG4gICAgfSlcXG4gICAgY29uc3QgYXR0U2l6ZTogbnVtYmVyW10gPSBbXVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG4gICAgICAgIGF0dFNpemUucHVzaCg4ICsgaSAqIDIpXFxuICAgIH1cXG4gICAgZGF0YXNldC5zZXQoXFxcImF0dFNpemVcXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFNpemUpKVxcbiAgICByZXR1cm4gZGF0YXNldFxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0Z2RDYWxjUmFuZG9tLFxuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkRGF0YXNldCxcbiAgICBUZ2RGaWx0ZXIsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyLFxuICAgIFRnZFBhaW50ZXJQYXJ0aWNsZXMsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFNoYWRlckZyYWdtZW50LFxuICAgIFRnZFNoYWRlclZlcnRleCxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgVGdkVGltZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmNvbnN0IENPVU5UID0gNTEyXG5jb25zdCBEVVJBVElPTiA9IDNcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKVxuICAgIGNvbnN0IHZpcnR1YWxUaW1lID0gbmV3IFRnZFRpbWUoeyBjb250ZXh0LCBzcGVlZDogMCB9KVxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcbiAgICAgICAgZGF0YXNldCxcbiAgICAgICAgZHJhd01vZGU6IFwiUE9JTlRTXCIsXG4gICAgICAgIHNoYWRlcjoge1xuICAgICAgICAgICAgdmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcImdsX1Bvc2l0aW9uID0gdmVjNCgtMSwgLTEsIDAsIDEpO1wiLCBcImdsX1BvaW50U2l6ZSA9IGF0dFNpemU7XCJdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXCJmbG9hdCB2YWx1ZSA9IC41IC8gMjU1LjA7XCIsIFwiRnJhZ0NvbG9yID0gdmVjNCh2YWx1ZSwgMC4wLCAwLjAsIDEuMCk7XCJdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICAgIHNldFVuaWZvcm1zOiAoeyBfdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodmlydHVhbFRpbWUuc3BlZWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICB2aXJ0dWFsVGltZS5yZXNldCgpXG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWUuc3BlZWQgPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBjb25zdCB0ZXh0dXJlRkIgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcmFnZToge1xuICAgICAgICAgICAgZm9ybWF0OiBcIlIzMkYgLyBSRUQgLyBGTE9BVFwiLFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcbiAgICAgICAgYW50aUFsaWFzaW5nOiBmYWxzZSxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZUZCLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgYmxlbmQ6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgcGFydGljbGVzXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pXG4gICAgY29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJMSU5FQVJcIixcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcbiAgICAgICAgICAgIHdyYXBSOiBcIkNMQU1QX1RPX0VER0VcIixcbiAgICAgICAgICAgIHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcbiAgICAgICAgICAgIHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcbiAgICAgICAgfSxcbiAgICB9KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiIzAwMFwiLCBcIiNmMDBcIiwgXCIjZjkyXCIsIFwiI2VlM1wiLCBcIiNmZjRcIiwgXCIjZmZmXCJdKSlcbiAgICBjb25zdCBmaWx0ZXIgPSBuZXcgVGdkRmlsdGVyKHtcbiAgICAgICAgdGV4dHVyZXM6IHtcbiAgICAgICAgICAgIHRleFBhbGV0dGU6IHBhbGV0dGUsXG4gICAgICAgIH0sXG4gICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xuICAgICAgICAgICAgXCJmbG9hdCB1ID0gY2xhbXAodGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVikuciwgMC4wLCAxLjApO1wiLFxuICAgICAgICAgICAgXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh0ZXhQYWxldHRlLCB2ZWMyKHUsIC41KSk7XCIsXG4gICAgICAgICAgICBcImlmICh1IDwgMC4wKSBjb2xvciA9IHZlYzQoMSwgMCwgMCwgMSk7XCIsXG4gICAgICAgICAgICBcImlmICh1ID4gMS4wKSBjb2xvciA9IHZlYzQoMSwgMCwgMSwgMSk7XCIsXG4gICAgICAgICAgICBcImNvbG9yLmEgPSAxLjA7XCIsXG4gICAgICAgICAgICBcIkZyYWdDb2xvciA9IGNvbG9yO1wiLFxuICAgICAgICBdLFxuICAgIH0pXG4gICAgY29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcbiAgICAgICAgZmxpcFk6IHRydWUsXG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXG4gICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJdLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIGZyYW1lYnVmZmVyLCBmaWx0ZXJzKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgY29udGV4dC5leHRlbnNpb25zLmRlYnVnKClcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gb3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX0gLz5cbn1cblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoY291bnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IFRnZERhdGFzZXQge1xuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgIGF0dFNpemU6IFwiZmxvYXRcIixcbiAgICB9KVxuICAgIGNvbnN0IGF0dFNpemU6IG51bWJlcltdID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgYXR0U2l6ZS5wdXNoKDggKyBpICogMilcbiAgICB9XG4gICAgZGF0YXNldC5zZXQoXCJhdHRTaXplXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0U2l6ZSkpXG4gICAgcmV0dXJuIGRhdGFzZXRcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSIsInRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSIsIlRnZERhdGFzZXQiLCJUZ2RGaWx0ZXIiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyRmlsdGVyIiwiVGdkUGFpbnRlckZyYW1lYnVmZmVyIiwiVGdkUGFpbnRlclBhcnRpY2xlcyIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFNoYWRlckZyYWdtZW50IiwiVGdkU2hhZGVyVmVydGV4IiwiVGdkVGV4dHVyZTJEIiwiVGdkVGltZSIsIlZpZXciLCJDT1VOVCIsIkRVUkFUSU9OIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjbGVhciIsImRhdGFzZXQiLCJtYWtlRGF0YXNldCIsInZpcnR1YWxUaW1lIiwicGFydGljbGVzIiwic2V0VW5pZm9ybXMiLCJfdGltZSIsImRlbHRhIiwicHJnIiwidGV4dHVyZUZCIiwiZnJhbWVidWZmZXIiLCJwYWxldHRlIiwiZmlsdGVyIiwiZmlsdGVycyIsImNvdW50IiwiZHVyYXRpb24iLCJhdHRTaXplIiwiaSIsIkZsb2F0MzJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUFxckY7QUFDaHRGLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSdUI7QUFFNkI7QUFFcEQsSUFBTXFCLFFBQVE7QUFDZCxJQUFNQyxXQUFXO0FBRWpCLFNBQVM7QUFDVCxTQUFTQyxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQzdDLElBQU1DLFFBQVEsSUFBSWYsK0NBQWVBLENBQUNhLFNBQVM7UUFBRSxPQUFPO1lBQUM7WUFBRztZQUFHO1lBQUc7U0FBRTtRQUFFLE9BQU87SUFBRTtJQUMzRSxJQUFNRyxVQUFzQkMsWUFBWVAsT0FBT0M7SUFDL0MsSUFBTU8sY0FBYyxJQUFJVix1Q0FBT0EsQ0FBQztRQUFFSyxTQUFBQTtRQUFTLE9BQU87SUFBRTtJQUNwRCxJQUFNTSxZQUFZLElBQUloQixtREFBbUJBLENBQUNVLFNBQVM7UUFDL0NHLFNBQUFBO1FBQ0EsVUFBVTtRQUNWLFFBQVE7WUFDSixNQUFNLElBQUlWLCtDQUFlQSxDQUFDO2dCQUN0QixXQUFXLG1CQUNKVCwrREFBMkJBO2dCQUVsQyxZQUFZbUIsUUFBUSxhQUFhO2dCQUNqQyxVQUFVO29CQUFDO29CQUFxQztpQkFBMEI7WUFDOUU7WUFDQSxNQUFNLElBQUlYLGlEQUFpQkEsQ0FBQztnQkFDeEIsVUFBVTtvQkFBQztvQkFBNkI7aUJBQTBDO1lBQ3RGO1FBQ0o7UUFDQWUsYUFBYSxTQUFiQTtnQkFBZ0JDLGNBQUFBLE9BQU9DLGNBQUFBLE9BQU9DLFlBQUFBO1lBQzFCLElBQUlMLFlBQVksS0FBSyxLQUFLLEdBQUc7Z0JBQ3pCQSxZQUFZLEtBQUs7Z0JBQ2pCQSxZQUFZLEtBQUssR0FBRztZQUN4QjtRQUNKO0lBQ0o7SUFDQSxJQUFNTSxZQUFZLElBQUlqQiw0Q0FBWUEsQ0FBQ00sU0FBUztRQUN4QyxRQUFRO1lBQ0osV0FBVztZQUNYLFdBQVc7UUFDZjtRQUNBLFNBQVM7WUFDTCxRQUFRO1FBQ1o7SUFDSjtJQUNBLElBQU1ZLGNBQWMsSUFBSXZCLHFEQUFxQkEsQ0FBQ1csU0FBUztRQUNuRCxjQUFjO1FBQ2QsZUFBZVc7UUFDZixVQUFVO1lBQ04sSUFBSXBCLCtDQUFlQSxDQUFDUyxTQUFTO2dCQUN6QixPQUFPO2dCQUNQLFVBQVU7b0JBQUNFO29CQUFPSTtpQkFBVTtZQUNoQztTQUNIO0lBQ0w7SUFDQSxJQUFNTyxVQUFVLElBQUluQiw0Q0FBWUEsQ0FBQ00sU0FBUztRQUN0QyxRQUFRO1lBQ0osV0FBVztZQUNYLFdBQVc7WUFDWCxPQUFPO1lBQ1AsT0FBTztZQUNQLE9BQU87UUFDWDtJQUNKLEdBQUcsVUFBVSxDQUFDakIsMERBQXNCQSxDQUFDO1FBQUM7UUFBUTtRQUFRO1FBQVE7UUFBUTtRQUFRO0tBQU87SUFDckYsSUFBTStCLFNBQVMsSUFBSTVCLHlDQUFTQSxDQUFDO1FBQ3pCLFVBQVU7WUFDTixZQUFZMkI7UUFDaEI7UUFDQSxvQkFBb0I7WUFDaEI7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0g7SUFDTDtJQUNBLElBQU1FLFVBQVUsSUFBSTNCLGdEQUFnQkEsQ0FBQ1ksU0FBUztRQUMxQyxPQUFPO1FBQ1AsU0FBU1ksWUFBWSxhQUFhO1FBQ2xDLFNBQVM7WUFBQ0U7U0FBTztJQUNyQjtJQUNBZCxRQUFRLEdBQUcsQ0FBQ0UsT0FBT1UsYUFBYUc7SUFDaENmLFFBQVEsSUFBSTtJQUNaQSxRQUFRLFVBQVUsQ0FBQyxLQUFLO0FBQzVCO0FBQ0EsT0FBTztBQUVRLFNBQVN6QjtJQUNwQixxQkFBTyxrREFBQ3FCLGdEQUFJQTtRQUFDLFNBQVNHO1FBQU0sU0FBUztZQUFFLE9BQU87UUFBTTs7Ozs7O0FBQ3hEO0FBRUEsU0FBU0ssWUFBWVksS0FBYSxFQUFFQyxRQUFnQjtJQUNoRCxJQUFNZCxVQUFVLElBQUlsQiwwQ0FBVUEsQ0FBQztRQUMzQixTQUFTO0lBQ2I7SUFDQSxJQUFNaUMsVUFBb0IsRUFBRTtJQUM1QixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUgsT0FBT0csSUFBSztRQUM1QkQsUUFBUSxJQUFJLENBQUMsSUFBSUMsSUFBSTtJQUN6QjtJQUNBaEIsUUFBUSxHQUFHLENBQUMsV0FBVyxJQUFJaUIsYUFBYUY7SUFDeEMsT0FBT2Y7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhxQjs7Ozs7Ozs7Ozs7OzhCQUVsQjs7Ozs7Ozs7Ozs7OzswQkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFlBQVksb0NBQW9DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseUJBQXlCO0FBQ3BDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4QkFBOEI7QUFDNUM7QUFDQSxjQUFjLDhEQUE4RDtBQUM1RTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7O0FBRXlCOztBQUV6QixXQUFXLHlCQUF5QjtBQUNwQzs7QUFFQSxtQkFBbUIsb0NBQW1COztBQUV0QztBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUE4RDtBQUN6RTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCw0QkFBNEIsaUNBQWdCOztBQUU1QztBQUNBLFNBQVMsOEJBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLGFBQWE7QUFDYjtBQUNBLGVBQWU7QUFDZjtBQUNPO0FBQ1AsYUFBYSx5QkFBeUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFNBQVMsb0NBQW1CO0FBQzVCO0FBQ0EsS0FBSyxxQkFBcUI7QUFDMUI7QUFDQTtBQUNBIn0=