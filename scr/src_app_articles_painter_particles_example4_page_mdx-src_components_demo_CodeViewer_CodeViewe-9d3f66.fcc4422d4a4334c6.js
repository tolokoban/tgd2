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
    "Detail #1": 'function init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const dataset: TgdDataset = makeDataset(COUNT, DURATION)\n    const virtualTime = new TgdTime({ context, speed: 0 })\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: "POINTS",\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                },\n                attributes: dataset.getTypeRecord(),\n                mainCode: ["gl_Position = vec4(-1, -1, 0, 1);", "gl_PointSize = attSize;"],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: ["float value = .5 / 255.0;", "FragColor = vec4(value, 0.0, 0.0, 1.0);"],\n            }),\n        },\n        setUniforms: ({ _time, delta, prg }) => {\n            if (virtualTime.speed === 0) {\n                virtualTime.reset()\n                virtualTime.speed = 1\n            }\n        },\n    })\n    const textureFB = new TgdTexture2D(context, {\n        params: {\n            minFilter: "NEAREST",\n            magFilter: "NEAREST",\n        },\n        storage: {\n            format: "R32F / RED / FLOAT",\n        },\n    })\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        antiAliasing: false,\n        textureColor0: textureFB,\n        children: [\n            new TgdPainterState(context, {\n                blend: "add",\n                children: [clear, particles],\n            }),\n        ],\n    })\n    const palette = new TgdTexture2D(context, {\n        params: {\n            minFilter: "LINEAR",\n            magFilter: "LINEAR",\n            wrapR: "CLAMP_TO_EDGE",\n            wrapS: "CLAMP_TO_EDGE",\n            wrapT: "CLAMP_TO_EDGE",\n        },\n    }).loadBitmap(tgdCanvasCreatePalette(["#000", "#f00", "#f92", "#ee3", "#ff4", "#fff"]))\n    const filter = new TgdFilter({\n        textures: {\n            texPalette: palette,\n        },\n        fragmentShaderCode: [\n            "float u = clamp(texture(uniTexture, varUV).r, 0.0, 1.0);",\n            "vec4 color = texture(texPalette, vec2(u, .5));",\n            "if (u < 0.0) color = vec4(1, 0, 0, 1);",\n            "if (u > 1.0) color = vec4(1, 0, 1, 1);",\n            "color.a = 1.0;",\n            "FragColor = color;",\n        ],\n    })\n    const filters = new TgdPainterFilter(context, {\n        flipY: true,\n        texture: framebuffer.textureColor0,\n        filters: [filter],\n    })\n    context.add(clear, framebuffer, filters)\n    context.play()\n    context.extensions.debug()\n}'
};
var FULL = 'import {\n    tgdCalcRandom,\n    tgdCanvasCreatePalette,\n    tgdCodeFunction_perlinNoise,\n    type TgdContext,\n    TgdDataset,\n    TgdFilter,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterParticles,\n    TgdPainterState,\n    TgdShaderFragment,\n    TgdShaderVertex,\n    TgdTexture2D,\n    TgdTime,\n} from "@tolokoban/tgd"\n\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nconst COUNT = 512\nconst DURATION = 3\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const dataset: TgdDataset = makeDataset(COUNT, DURATION)\n    const virtualTime = new TgdTime({ context, speed: 0 })\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: "POINTS",\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                },\n                attributes: dataset.getTypeRecord(),\n                mainCode: ["gl_Position = vec4(-1, -1, 0, 1);", "gl_PointSize = attSize;"],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: ["float value = .5 / 255.0;", "FragColor = vec4(value, 0.0, 0.0, 1.0);"],\n            }),\n        },\n        setUniforms: ({ _time, delta, prg }) => {\n            if (virtualTime.speed === 0) {\n                virtualTime.reset()\n                virtualTime.speed = 1\n            }\n        },\n    })\n    const textureFB = new TgdTexture2D(context, {\n        params: {\n            minFilter: "NEAREST",\n            magFilter: "NEAREST",\n        },\n        storage: {\n            format: "R32F / RED / FLOAT",\n        },\n    })\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        antiAliasing: false,\n        textureColor0: textureFB,\n        children: [\n            new TgdPainterState(context, {\n                blend: "add",\n                children: [clear, particles],\n            }),\n        ],\n    })\n    const palette = new TgdTexture2D(context, {\n        params: {\n            minFilter: "LINEAR",\n            magFilter: "LINEAR",\n            wrapR: "CLAMP_TO_EDGE",\n            wrapS: "CLAMP_TO_EDGE",\n            wrapT: "CLAMP_TO_EDGE",\n        },\n    }).loadBitmap(tgdCanvasCreatePalette(["#000", "#f00", "#f92", "#ee3", "#ff4", "#fff"]))\n    const filter = new TgdFilter({\n        textures: {\n            texPalette: palette,\n        },\n        fragmentShaderCode: [\n            "float u = clamp(texture(uniTexture, varUV).r, 0.0, 1.0);",\n            "vec4 color = texture(texPalette, vec2(u, .5));",\n            "if (u < 0.0) color = vec4(1, 0, 0, 1);",\n            "if (u > 1.0) color = vec4(1, 0, 1, 1);",\n            "color.a = 1.0;",\n            "FragColor = color;",\n        ],\n    })\n    const filters = new TgdPainterFilter(context, {\n        flipY: true,\n        texture: framebuffer.textureColor0,\n        filters: [filter],\n    })\n    context.add(clear, framebuffer, filters)\n    context.play()\n    context.extensions.debug()\n}\n\nexport default function Demo() {\n    return <View onReady={init} options={{ alpha: false }} />\n}\n\nfunction makeDataset(count: number, duration: number): TgdDataset {\n    const dataset = new TgdDataset({\n        attSize: "float",\n    })\n    const attSize: number[] = []\n    for (let i = 0; i < count; i++) {\n        attSize.push(8 + i * 2)\n    }\n    dataset.set("attSize", new Float32Array(attSize))\n    return dataset\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 4
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
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
        lineNumber: 112,
        columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTRfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS05ZDNmNjYuZmNjNDQyMmQ0YTQzMzRjNi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wYXJ0aWNsZXMvZXhhbXBsZTQvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wYXJ0aWNsZXMvZXhhbXBsZTQvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGU0L3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkRldGFpbCAjMVwiOlxuXHRcdCdmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChDT1VOVCwgRFVSQVRJT04pXFxuICAgIGNvbnN0IHZpcnR1YWxUaW1lID0gbmV3IFRnZFRpbWUoeyBjb250ZXh0LCBzcGVlZDogMCB9KVxcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XFxuICAgICAgICBkYXRhc2V0LFxcbiAgICAgICAgZHJhd01vZGU6IFwiUE9JTlRTXCIsXFxuICAgICAgICBzaGFkZXI6IHtcXG4gICAgICAgICAgICB2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXCJnbF9Qb3NpdGlvbiA9IHZlYzQoLTEsIC0xLCAwLCAxKTtcIiwgXCJnbF9Qb2ludFNpemUgPSBhdHRTaXplO1wiXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1wiZmxvYXQgdmFsdWUgPSAuNSAvIDI1NS4wO1wiLCBcIkZyYWdDb2xvciA9IHZlYzQodmFsdWUsIDAuMCwgMC4wLCAxLjApO1wiXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZS5zcGVlZCA9PT0gMCkge1xcbiAgICAgICAgICAgICAgICB2aXJ0dWFsVGltZS5yZXNldCgpXFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lLnNwZWVkID0gMVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHRleHR1cmVGQiA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcIk5FQVJFU1RcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHN0b3JhZ2U6IHtcXG4gICAgICAgICAgICBmb3JtYXQ6IFwiUjMyRiAvIFJFRCAvIEZMT0FUXCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgYW50aUFsaWFzaW5nOiBmYWxzZSxcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IHRleHR1cmVGQixcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGJsZW5kOiBcImFkZFwiLFxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBwYXJ0aWNsZXNdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgY29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgICAgICB3cmFwUjogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgd3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgICAgIHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgIH0sXFxuICAgIH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjMDAwXCIsIFwiI2YwMFwiLCBcIiNmOTJcIiwgXCIjZWUzXCIsIFwiI2ZmNFwiLCBcIiNmZmZcIl0pKVxcbiAgICBjb25zdCBmaWx0ZXIgPSBuZXcgVGdkRmlsdGVyKHtcXG4gICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgdGV4UGFsZXR0ZTogcGFsZXR0ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcXG4gICAgICAgICAgICBcImZsb2F0IHUgPSBjbGFtcCh0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKS5yLCAwLjAsIDEuMCk7XCIsXFxuICAgICAgICAgICAgXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh0ZXhQYWxldHRlLCB2ZWMyKHUsIC41KSk7XCIsXFxuICAgICAgICAgICAgXCJpZiAodSA8IDAuMCkgY29sb3IgPSB2ZWM0KDEsIDAsIDAsIDEpO1wiLFxcbiAgICAgICAgICAgIFwiaWYgKHUgPiAxLjApIGNvbG9yID0gdmVjNCgxLCAwLCAxLCAxKTtcIixcXG4gICAgICAgICAgICBcImNvbG9yLmEgPSAxLjA7XCIsXFxuICAgICAgICAgICAgXCJGcmFnQ29sb3IgPSBjb2xvcjtcIixcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXFxuICAgICAgICBmaWx0ZXJzOiBbZmlsdGVyXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIGZyYW1lYnVmZmVyLCBmaWx0ZXJzKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICBjb250ZXh0LmV4dGVuc2lvbnMuZGVidWcoKVxcbn0nLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IHtcXG4gICAgdGdkQ2FsY1JhbmRvbSxcXG4gICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZERhdGFzZXQsXFxuICAgIFRnZEZpbHRlcixcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXFxuICAgIFRnZFBhaW50ZXJQYXJ0aWNsZXMsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkU2hhZGVyRnJhZ21lbnQsXFxuICAgIFRnZFNoYWRlclZlcnRleCxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICBUZ2RUaW1lLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5cXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcblxcbmNvbnN0IENPVU5UID0gNTEyXFxuY29uc3QgRFVSQVRJT04gPSAzXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoQ09VTlQsIERVUkFUSU9OKVxcbiAgICBjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSlcXG4gICAgY29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xcbiAgICAgICAgZGF0YXNldCxcXG4gICAgICAgIGRyYXdNb2RlOiBcIlBPSU5UU1wiLFxcbiAgICAgICAgc2hhZGVyOiB7XFxuICAgICAgICAgICAgdmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uczoge1xcbiAgICAgICAgICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlKCksXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGRhdGFzZXQuZ2V0VHlwZVJlY29yZCgpLFxcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1wiZ2xfUG9zaXRpb24gPSB2ZWM0KC0xLCAtMSwgMCwgMSk7XCIsIFwiZ2xfUG9pbnRTaXplID0gYXR0U2l6ZTtcIl0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcImZsb2F0IHZhbHVlID0gLjUgLyAyNTUuMDtcIiwgXCJGcmFnQ29sb3IgPSB2ZWM0KHZhbHVlLCAwLjAsIDAuMCwgMS4wKTtcIl0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0VW5pZm9ybXM6ICh7IF90aW1lLCBkZWx0YSwgcHJnIH0pID0+IHtcXG4gICAgICAgICAgICBpZiAodmlydHVhbFRpbWUuc3BlZWQgPT09IDApIHtcXG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWUucmVzZXQoKVxcbiAgICAgICAgICAgICAgICB2aXJ0dWFsVGltZS5zcGVlZCA9IDFcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCB0ZXh0dXJlRkIgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBzdG9yYWdlOiB7XFxuICAgICAgICAgICAgZm9ybWF0OiBcIlIzMkYgLyBSRUQgLyBGTE9BVFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIGFudGlBbGlhc2luZzogZmFsc2UsXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlRkIsXFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBibGVuZDogXCJhZGRcIixcXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgcGFydGljbGVzXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXFxuICAgICAgICAgICAgd3JhcFI6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgICAgIHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgICAgICB3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICB9LFxcbiAgICB9KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiIzAwMFwiLCBcIiNmMDBcIiwgXCIjZjkyXCIsIFwiI2VlM1wiLCBcIiNmZjRcIiwgXCIjZmZmXCJdKSlcXG4gICAgY29uc3QgZmlsdGVyID0gbmV3IFRnZEZpbHRlcih7XFxuICAgICAgICB0ZXh0dXJlczoge1xcbiAgICAgICAgICAgIHRleFBhbGV0dGU6IHBhbGV0dGUsXFxuICAgICAgICB9LFxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxuICAgICAgICAgICAgXCJmbG9hdCB1ID0gY2xhbXAodGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVikuciwgMC4wLCAxLjApO1wiLFxcbiAgICAgICAgICAgIFwidmVjNCBjb2xvciA9IHRleHR1cmUodGV4UGFsZXR0ZSwgdmVjMih1LCAuNSkpO1wiLFxcbiAgICAgICAgICAgIFwiaWYgKHUgPCAwLjApIGNvbG9yID0gdmVjNCgxLCAwLCAwLCAxKTtcIixcXG4gICAgICAgICAgICBcImlmICh1ID4gMS4wKSBjb2xvciA9IHZlYzQoMSwgMCwgMSwgMSk7XCIsXFxuICAgICAgICAgICAgXCJjb2xvci5hID0gMS4wO1wiLFxcbiAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gY29sb3I7XCIsXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxcbiAgICAgICAgZmlsdGVyczogW2ZpbHRlcl0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBmcmFtZWJ1ZmZlciwgZmlsdGVycylcXG4gICAgY29udGV4dC5wbGF5KClcXG4gICAgY29udGV4dC5leHRlbnNpb25zLmRlYnVnKClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IG9wdGlvbnM9e3sgYWxwaGE6IGZhbHNlIH19IC8+XFxufVxcblxcbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGNvdW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBUZ2REYXRhc2V0IHtcXG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG4gICAgICAgIGF0dFNpemU6IFwiZmxvYXRcIixcXG4gICAgfSlcXG4gICAgY29uc3QgYXR0U2l6ZTogbnVtYmVyW10gPSBbXVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG4gICAgICAgIGF0dFNpemUucHVzaCg4ICsgaSAqIDIpXFxuICAgIH1cXG4gICAgZGF0YXNldC5zZXQoXCJhdHRTaXplXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0U2l6ZSkpXFxuICAgIHJldHVybiBkYXRhc2V0XFxufVxcbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG5cdGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cblx0XHRcdFx0PERlbW8gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuXHRcdFx0XHRcdFx0e2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiaW1wb3J0IHtcblx0dGdkQ2FsY1JhbmRvbSxcblx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcblx0dGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZERhdGFzZXQsXG5cdFRnZEZpbHRlcixcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyRmlsdGVyLFxuXHRUZ2RQYWludGVyRnJhbWVidWZmZXIsXG5cdFRnZFBhaW50ZXJQYXJ0aWNsZXMsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkU2hhZGVyRnJhZ21lbnQsXG5cdFRnZFNoYWRlclZlcnRleCxcblx0VGdkVGV4dHVyZTJELFxuXHRUZ2RUaW1lLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmNvbnN0IENPVU5UID0gNTEyO1xuY29uc3QgRFVSQVRJT04gPSAzO1xuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSk7XG5cdGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChDT1VOVCwgRFVSQVRJT04pO1xuXHRjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSk7XG5cdGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcblx0XHRkYXRhc2V0LFxuXHRcdGRyYXdNb2RlOiBcIlBPSU5UU1wiLFxuXHRcdHNoYWRlcjoge1xuXHRcdFx0dmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XG5cdFx0XHRcdGZ1bmN0aW9uczoge1xuXHRcdFx0XHRcdC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcblx0XHRcdFx0bWFpbkNvZGU6IFtcblx0XHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gdmVjNCgtMSwgLTEsIDAsIDEpO1wiLFxuXHRcdFx0XHRcdFwiZ2xfUG9pbnRTaXplID0gYXR0U2l6ZTtcIixcblx0XHRcdFx0XSxcblx0XHRcdH0pLFxuXHRcdFx0ZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcblx0XHRcdFx0bWFpbkNvZGU6IFtcblx0XHRcdFx0XHRcImZsb2F0IHZhbHVlID0gLjUgLyAyNTUuMDtcIixcblx0XHRcdFx0XHRcIkZyYWdDb2xvciA9IHZlYzQodmFsdWUsIDAuMCwgMC4wLCAxLjApO1wiLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSksXG5cdFx0fSxcblx0XHRzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xuXHRcdFx0aWYgKHZpcnR1YWxUaW1lLnNwZWVkID09PSAwKSB7XG5cdFx0XHRcdHZpcnR1YWxUaW1lLnJlc2V0KCk7XG5cdFx0XHRcdHZpcnR1YWxUaW1lLnNwZWVkID0gMTtcblx0XHRcdH1cblx0XHR9LFxuXHR9KTtcblx0Y29uc3QgdGV4dHVyZUZCID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG5cdFx0cGFyYW1zOiB7XG5cdFx0XHRtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdFx0bWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcblx0XHR9LFxuXHRcdHN0b3JhZ2U6IHtcblx0XHRcdGZvcm1hdDogXCJSMzJGIC8gUkVEIC8gRkxPQVRcIixcblx0XHR9LFxuXHR9KTtcblx0Y29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcblx0XHRhbnRpQWxpYXNpbmc6IGZhbHNlLFxuXHRcdHRleHR1cmVDb2xvcjA6IHRleHR1cmVGQixcblx0XHRjaGlsZHJlbjogW1xuXHRcdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRcdGJsZW5kOiBcImFkZFwiLFxuXHRcdFx0XHRjaGlsZHJlbjogW2NsZWFyLCBwYXJ0aWNsZXNdLFxuXHRcdFx0fSksXG5cdFx0XSxcblx0fSk7XG5cdGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRwYXJhbXM6IHtcblx0XHRcdG1pbkZpbHRlcjogXCJMSU5FQVJcIixcblx0XHRcdG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcblx0XHRcdHdyYXBSOiBcIkNMQU1QX1RPX0VER0VcIixcblx0XHRcdHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcblx0XHRcdHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcblx0XHR9LFxuXHR9KS5sb2FkQml0bWFwKFxuXHRcdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiIzAwMFwiLCBcIiNmMDBcIiwgXCIjZjkyXCIsIFwiI2VlM1wiLCBcIiNmZjRcIiwgXCIjZmZmXCJdKSxcblx0KTtcblx0Y29uc3QgZmlsdGVyID0gbmV3IFRnZEZpbHRlcih7XG5cdFx0dGV4dHVyZXM6IHtcblx0XHRcdHRleFBhbGV0dGU6IHBhbGV0dGUsXG5cdFx0fSxcblx0XHRmcmFnbWVudFNoYWRlckNvZGU6IFtcblx0XHRcdFwiZmxvYXQgdSA9IGNsYW1wKHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpLnIsIDAuMCwgMS4wKTtcIixcblx0XHRcdFwidmVjNCBjb2xvciA9IHRleHR1cmUodGV4UGFsZXR0ZSwgdmVjMih1LCAuNSkpO1wiLFxuXHRcdFx0XCJpZiAodSA8IDAuMCkgY29sb3IgPSB2ZWM0KDEsIDAsIDAsIDEpO1wiLFxuXHRcdFx0XCJpZiAodSA+IDEuMCkgY29sb3IgPSB2ZWM0KDEsIDAsIDEsIDEpO1wiLFxuXHRcdFx0XCJjb2xvci5hID0gMS4wO1wiLFxuXHRcdFx0XCJGcmFnQ29sb3IgPSBjb2xvcjtcIixcblx0XHRdLFxuXHR9KTtcblx0Y29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcblx0XHRmbGlwWTogdHJ1ZSxcblx0XHR0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxuXHRcdGZpbHRlcnM6IFtmaWx0ZXJdLFxuXHR9KTtcblx0Y29udGV4dC5hZGQoY2xlYXIsIGZyYW1lYnVmZmVyLCBmaWx0ZXJzKTtcblx0Y29udGV4dC5wbGF5KCk7XG5cdGNvbnRleHQuZXh0ZW5zaW9ucy5kZWJ1ZygpO1xufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gb3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX0gLz47XG59XG5cbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGNvdW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBUZ2REYXRhc2V0IHtcblx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHRhdHRTaXplOiBcImZsb2F0XCIsXG5cdH0pO1xuXHRjb25zdCBhdHRTaXplOiBudW1iZXJbXSA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblx0XHRhdHRTaXplLnB1c2goOCArIGkgKiAyKTtcblx0fVxuXHRkYXRhc2V0LnNldChcImF0dFNpemVcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRTaXplKSk7XG5cdHJldHVybiBkYXRhc2V0O1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDYW52YXNDcmVhdGVQYWxldHRlIiwidGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlIiwiVGdkRGF0YXNldCIsIlRnZEZpbHRlciIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyRnJhbWVidWZmZXIiLCJUZ2RQYWludGVyUGFydGljbGVzIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkU2hhZGVyRnJhZ21lbnQiLCJUZ2RTaGFkZXJWZXJ0ZXgiLCJUZ2RUZXh0dXJlMkQiLCJUZ2RUaW1lIiwiVmlldyIsIkNPVU5UIiwiRFVSQVRJT04iLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNsZWFyIiwiZGF0YXNldCIsIm1ha2VEYXRhc2V0IiwidmlydHVhbFRpbWUiLCJwYXJ0aWNsZXMiLCJzZXRVbmlmb3JtcyIsIl90aW1lIiwiZGVsdGEiLCJwcmciLCJ0ZXh0dXJlRkIiLCJmcmFtZWJ1ZmZlciIsInBhbGV0dGUiLCJmaWx0ZXIiLCJmaWx0ZXJzIiwiY291bnQiLCJkdXJhdGlvbiIsImF0dFNpemUi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