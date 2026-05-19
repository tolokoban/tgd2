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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/main.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Testing the issue with float textures."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTRfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS05ZDNmNjYuZDUzZjYxMDkyYzg1MzFjNS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BhcnRpY2xlcy9leGFtcGxlNC9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGU0L18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGU0L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKVxcbiAgICBjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSlcXG4gICAgY29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xcbiAgICAgICAgZGF0YXNldCxcXG4gICAgICAgIGRyYXdNb2RlOiBcXFwiUE9JTlRTXFxcIixcXG4gICAgICAgIHNoYWRlcjoge1xcbiAgICAgICAgICAgIHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXFwiZ2xfUG9zaXRpb24gPSB2ZWM0KC0xLCAtMSwgMCwgMSk7XFxcIiwgXFxcImdsX1BvaW50U2l6ZSA9IGF0dFNpemU7XFxcIl0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXFwiZmxvYXQgdmFsdWUgPSAuNSAvIDI1NS4wO1xcXCIsIFxcXCJGcmFnQ29sb3IgPSB2ZWM0KHZhbHVlLCAwLjAsIDAuMCwgMS4wKTtcXFwiXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZS5zcGVlZCA9PT0gMCkge1xcbiAgICAgICAgICAgICAgICB2aXJ0dWFsVGltZS5yZXNldCgpXFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lLnNwZWVkID0gMVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHRleHR1cmVGQiA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgc3RvcmFnZToge1xcbiAgICAgICAgICAgIGZvcm1hdDogXFxcIlIzMkYgLyBSRUQgLyBGTE9BVFxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgYW50aUFsaWFzaW5nOiBmYWxzZSxcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IHRleHR1cmVGQixcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGJsZW5kOiBcXFwiYWRkXFxcIixcXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgcGFydGljbGVzXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICB3cmFwUjogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgICAgIHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICAgICAgd3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgIH0sXFxuICAgIH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXFxcIiMwMDBcXFwiLCBcXFwiI2YwMFxcXCIsIFxcXCIjZjkyXFxcIiwgXFxcIiNlZTNcXFwiLCBcXFwiI2ZmNFxcXCIsIFxcXCIjZmZmXFxcIl0pKVxcbiAgICBjb25zdCBmaWx0ZXIgPSBuZXcgVGdkRmlsdGVyKHtcXG4gICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgdGV4UGFsZXR0ZTogcGFsZXR0ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcXG4gICAgICAgICAgICBcXFwiZmxvYXQgdSA9IGNsYW1wKHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpLnIsIDAuMCwgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh0ZXhQYWxldHRlLCB2ZWMyKHUsIC41KSk7XFxcIixcXG4gICAgICAgICAgICBcXFwiaWYgKHUgPCAwLjApIGNvbG9yID0gdmVjNCgxLCAwLCAwLCAxKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJpZiAodSA+IDEuMCkgY29sb3IgPSB2ZWM0KDEsIDAsIDEsIDEpO1xcXCIsXFxuICAgICAgICAgICAgXFxcImNvbG9yLmEgPSAxLjA7XFxcIixcXG4gICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gY29sb3I7XFxcIixcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXFxuICAgICAgICBmaWx0ZXJzOiBbZmlsdGVyXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIGZyYW1lYnVmZmVyLCBmaWx0ZXJzKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICBjb250ZXh0LmV4dGVuc2lvbnMuZGVidWcoKVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHRnZENhbGNSYW5kb20sXFxuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXFxuICAgIHRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkRGF0YXNldCxcXG4gICAgVGdkRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcXG4gICAgVGdkUGFpbnRlclBhcnRpY2xlcyxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcXG4gICAgVGdkU2hhZGVyVmVydGV4LFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIFRnZFRpbWUsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5cXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuY29uc3QgQ09VTlQgPSA1MTJcXG5jb25zdCBEVVJBVElPTiA9IDNcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChDT1VOVCwgRFVSQVRJT04pXFxuICAgIGNvbnN0IHZpcnR1YWxUaW1lID0gbmV3IFRnZFRpbWUoeyBjb250ZXh0LCBzcGVlZDogMCB9KVxcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XFxuICAgICAgICBkYXRhc2V0LFxcbiAgICAgICAgZHJhd01vZGU6IFxcXCJQT0lOVFNcXFwiLFxcbiAgICAgICAgc2hhZGVyOiB7XFxuICAgICAgICAgICAgdmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlKCksXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGRhdGFzZXQuZ2V0VHlwZVJlY29yZCgpLFxcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcXCJnbF9Qb3NpdGlvbiA9IHZlYzQoLTEsIC0xLCAwLCAxKTtcXFwiLCBcXFwiZ2xfUG9pbnRTaXplID0gYXR0U2l6ZTtcXFwiXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xcXCJmbG9hdCB2YWx1ZSA9IC41IC8gMjU1LjA7XFxcIiwgXFxcIkZyYWdDb2xvciA9IHZlYzQodmFsdWUsIDAuMCwgMC4wLCAxLjApO1xcXCJdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHNldFVuaWZvcm1zOiAoeyBfdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XFxuICAgICAgICAgICAgaWYgKHZpcnR1YWxUaW1lLnNwZWVkID09PSAwKSB7XFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lLnJlc2V0KClcXG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWUuc3BlZWQgPSAxXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgdGV4dHVyZUZCID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBzdG9yYWdlOiB7XFxuICAgICAgICAgICAgZm9ybWF0OiBcXFwiUjMyRiAvIFJFRCAvIEZMT0FUXFxcIixcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBhbnRpQWxpYXNpbmc6IGZhbHNlLFxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZUZCLFxcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgYmxlbmQ6IFxcXCJhZGRcXFwiLFxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBwYXJ0aWNsZXNdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgY29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcbiAgICAgICAgICAgIHdyYXBSOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICAgICAgd3JhcFM6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgICAgICB3cmFwVDogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcXFwiIzAwMFxcXCIsIFxcXCIjZjAwXFxcIiwgXFxcIiNmOTJcXFwiLCBcXFwiI2VlM1xcXCIsIFxcXCIjZmY0XFxcIiwgXFxcIiNmZmZcXFwiXSkpXFxuICAgIGNvbnN0IGZpbHRlciA9IG5ldyBUZ2RGaWx0ZXIoe1xcbiAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICB0ZXhQYWxldHRlOiBwYWxldHRlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xcbiAgICAgICAgICAgIFxcXCJmbG9hdCB1ID0gY2xhbXAodGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVikuciwgMC4wLCAxLjApO1xcXCIsXFxuICAgICAgICAgICAgXFxcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHRleFBhbGV0dGUsIHZlYzIodSwgLjUpKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJpZiAodSA8IDAuMCkgY29sb3IgPSB2ZWM0KDEsIDAsIDAsIDEpO1xcXCIsXFxuICAgICAgICAgICAgXFxcImlmICh1ID4gMS4wKSBjb2xvciA9IHZlYzQoMSwgMCwgMSwgMSk7XFxcIixcXG4gICAgICAgICAgICBcXFwiY29sb3IuYSA9IDEuMDtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSBjb2xvcjtcXFwiLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgY29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcXG4gICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChjbGVhciwgZnJhbWVidWZmZXIsIGZpbHRlcnMpXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIGNvbnRleHQuZXh0ZW5zaW9ucy5kZWJ1ZygpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSBvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fSAvPlxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlRGF0YXNldChjb3VudDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogVGdkRGF0YXNldCB7XFxuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuICAgICAgICBhdHRTaXplOiBcXFwiZmxvYXRcXFwiLFxcbiAgICB9KVxcbiAgICBjb25zdCBhdHRTaXplOiBudW1iZXJbXSA9IFtdXFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcbiAgICAgICAgYXR0U2l6ZS5wdXNoKDggKyBpICogMilcXG4gICAgfVxcbiAgICBkYXRhc2V0LnNldChcXFwiYXR0U2l6ZVxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0U2l6ZSkpXFxuICAgIHJldHVybiBkYXRhc2V0XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHRnZENhbGNSYW5kb20sXG4gICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZEZpbHRlcixcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckZpbHRlcixcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXG4gICAgVGdkUGFpbnRlclBhcnRpY2xlcyxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkU2hhZGVyRnJhZ21lbnQsXG4gICAgVGdkU2hhZGVyVmVydGV4LFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICBUZ2RUaW1lLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuY29uc3QgQ09VTlQgPSA1MTJcbmNvbnN0IERVUkFUSU9OID0gM1xuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KVxuICAgIGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChDT1VOVCwgRFVSQVRJT04pXG4gICAgY29uc3QgdmlydHVhbFRpbWUgPSBuZXcgVGdkVGltZSh7IGNvbnRleHQsIHNwZWVkOiAwIH0pXG4gICAgY29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xuICAgICAgICBkYXRhc2V0LFxuICAgICAgICBkcmF3TW9kZTogXCJQT0lOVFNcIixcbiAgICAgICAgc2hhZGVyOiB7XG4gICAgICAgICAgICB2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlKCksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1wiZ2xfUG9zaXRpb24gPSB2ZWM0KC0xLCAtMSwgMCwgMSk7XCIsIFwiZ2xfUG9pbnRTaXplID0gYXR0U2l6ZTtcIl0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcImZsb2F0IHZhbHVlID0gLjUgLyAyNTUuMDtcIiwgXCJGcmFnQ29sb3IgPSB2ZWM0KHZhbHVlLCAwLjAsIDAuMCwgMS4wKTtcIl0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VW5pZm9ybXM6ICh7IF90aW1lLCBkZWx0YSwgcHJnIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZS5zcGVlZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lLnJlc2V0KClcbiAgICAgICAgICAgICAgICB2aXJ0dWFsVGltZS5zcGVlZCA9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnN0IHRleHR1cmVGQiA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICB9LFxuICAgICAgICBzdG9yYWdlOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IFwiUjMyRiAvIFJFRCAvIEZMT0FUXCIsXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xuICAgICAgICBhbnRpQWxpYXNpbmc6IGZhbHNlLFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlRkIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBibGVuZDogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBwYXJ0aWNsZXNdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgd3JhcFI6IFwiQ0xBTVBfVE9fRURHRVwiLFxuICAgICAgICAgICAgd3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxuICAgICAgICAgICAgd3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxuICAgICAgICB9LFxuICAgIH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjMDAwXCIsIFwiI2YwMFwiLCBcIiNmOTJcIiwgXCIjZWUzXCIsIFwiI2ZmNFwiLCBcIiNmZmZcIl0pKVxuICAgIGNvbnN0IGZpbHRlciA9IG5ldyBUZ2RGaWx0ZXIoe1xuICAgICAgICB0ZXh0dXJlczoge1xuICAgICAgICAgICAgdGV4UGFsZXR0ZTogcGFsZXR0ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXG4gICAgICAgICAgICBcImZsb2F0IHUgPSBjbGFtcCh0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKS5yLCAwLjAsIDEuMCk7XCIsXG4gICAgICAgICAgICBcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHRleFBhbGV0dGUsIHZlYzIodSwgLjUpKTtcIixcbiAgICAgICAgICAgIFwiaWYgKHUgPCAwLjApIGNvbG9yID0gdmVjNCgxLCAwLCAwLCAxKTtcIixcbiAgICAgICAgICAgIFwiaWYgKHUgPiAxLjApIGNvbG9yID0gdmVjNCgxLCAwLCAxLCAxKTtcIixcbiAgICAgICAgICAgIFwiY29sb3IuYSA9IDEuMDtcIixcbiAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gY29sb3I7XCIsXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuICAgICAgICBmbGlwWTogdHJ1ZSxcbiAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcbiAgICAgICAgZmlsdGVyczogW2ZpbHRlcl0sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChjbGVhciwgZnJhbWVidWZmZXIsIGZpbHRlcnMpXG4gICAgY29udGV4dC5wbGF5KClcbiAgICBjb250ZXh0LmV4dGVuc2lvbnMuZGVidWcoKVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSBvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fSAvPlxufVxuXG5mdW5jdGlvbiBtYWtlRGF0YXNldChjb3VudDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogVGdkRGF0YXNldCB7XG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgYXR0U2l6ZTogXCJmbG9hdFwiLFxuICAgIH0pXG4gICAgY29uc3QgYXR0U2l6ZTogbnVtYmVyW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBhdHRTaXplLnB1c2goOCArIGkgKiAyKVxuICAgIH1cbiAgICBkYXRhc2V0LnNldChcImF0dFNpemVcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRTaXplKSlcbiAgICByZXR1cm4gZGF0YXNldFxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDYW52YXNDcmVhdGVQYWxldHRlIiwidGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlIiwiVGdkRGF0YXNldCIsIlRnZEZpbHRlciIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyRnJhbWVidWZmZXIiLCJUZ2RQYWludGVyUGFydGljbGVzIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkU2hhZGVyRnJhZ21lbnQiLCJUZ2RTaGFkZXJWZXJ0ZXgiLCJUZ2RUZXh0dXJlMkQiLCJUZ2RUaW1lIiwiVmlldyIsIkNPVU5UIiwiRFVSQVRJT04iLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNsZWFyIiwiZGF0YXNldCIsIm1ha2VEYXRhc2V0IiwidmlydHVhbFRpbWUiLCJwYXJ0aWNsZXMiLCJzZXRVbmlmb3JtcyIsIl90aW1lIiwiZGVsdGEiLCJwcmciLCJ0ZXh0dXJlRkIiLCJmcmFtZWJ1ZmZlciIsInBhbGV0dGUiLCJmaWx0ZXIiLCJmaWx0ZXJzIiwiY291bnQiLCJkdXJhdGlvbiIsImF0dFNpemUiLCJpIiwiRmxvYXQzMkFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQXFyRjtBQUNodEYsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osc0NBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEs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