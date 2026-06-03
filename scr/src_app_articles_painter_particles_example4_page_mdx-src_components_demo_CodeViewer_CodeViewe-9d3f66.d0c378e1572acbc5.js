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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example4/_/main.demo/main.demo.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTRfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS05ZDNmNjYuZDBjMzc4ZTE1NzJhY2JjNS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BhcnRpY2xlcy9leGFtcGxlNC9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGU0L18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGU0L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIjtcblxuY29uc3QgRk9DVVMgPSB7XG5cdFwiRGV0YWlsICMxXCI6XG5cdFx0J2Z1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgY29uc3QgZGF0YXNldDogVGdkRGF0YXNldCA9IG1ha2VEYXRhc2V0KENPVU5ULCBEVVJBVElPTilcXG4gICAgY29uc3QgdmlydHVhbFRpbWUgPSBuZXcgVGdkVGltZSh7IGNvbnRleHQsIHNwZWVkOiAwIH0pXFxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcXG4gICAgICAgIGRhdGFzZXQsXFxuICAgICAgICBkcmF3TW9kZTogXCJQT0lOVFNcIixcXG4gICAgICAgIHNoYWRlcjoge1xcbiAgICAgICAgICAgIHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcImdsX1Bvc2l0aW9uID0gdmVjNCgtMSwgLTEsIDAsIDEpO1wiLCBcImdsX1BvaW50U2l6ZSA9IGF0dFNpemU7XCJdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXCJmbG9hdCB2YWx1ZSA9IC41IC8gMjU1LjA7XCIsIFwiRnJhZ0NvbG9yID0gdmVjNCh2YWx1ZSwgMC4wLCAwLjAsIDEuMCk7XCJdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHNldFVuaWZvcm1zOiAoeyBfdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XFxuICAgICAgICAgICAgaWYgKHZpcnR1YWxUaW1lLnNwZWVkID09PSAwKSB7XFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lLnJlc2V0KClcXG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWUuc3BlZWQgPSAxXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgfSlcXG4gICAgY29uc3QgdGV4dHVyZUZCID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgc3RvcmFnZToge1xcbiAgICAgICAgICAgIGZvcm1hdDogXCJSMzJGIC8gUkVEIC8gRkxPQVRcIixcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBhbnRpQWxpYXNpbmc6IGZhbHNlLFxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZUZCLFxcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgYmxlbmQ6IFwiYWRkXCIsXFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIHBhcnRpY2xlc10sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTElORUFSXCIsXFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxcbiAgICAgICAgICAgIHdyYXBSOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgICAgICB3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgd3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgfSxcXG4gICAgfSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiMwMDBcIiwgXCIjZjAwXCIsIFwiI2Y5MlwiLCBcIiNlZTNcIiwgXCIjZmY0XCIsIFwiI2ZmZlwiXSkpXFxuICAgIGNvbnN0IGZpbHRlciA9IG5ldyBUZ2RGaWx0ZXIoe1xcbiAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICB0ZXhQYWxldHRlOiBwYWxldHRlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xcbiAgICAgICAgICAgIFwiZmxvYXQgdSA9IGNsYW1wKHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpLnIsIDAuMCwgMS4wKTtcIixcXG4gICAgICAgICAgICBcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHRleFBhbGV0dGUsIHZlYzIodSwgLjUpKTtcIixcXG4gICAgICAgICAgICBcImlmICh1IDwgMC4wKSBjb2xvciA9IHZlYzQoMSwgMCwgMCwgMSk7XCIsXFxuICAgICAgICAgICAgXCJpZiAodSA+IDEuMCkgY29sb3IgPSB2ZWM0KDEsIDAsIDEsIDEpO1wiLFxcbiAgICAgICAgICAgIFwiY29sb3IuYSA9IDEuMDtcIixcXG4gICAgICAgICAgICBcIkZyYWdDb2xvciA9IGNvbG9yO1wiLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgY29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcXG4gICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChjbGVhciwgZnJhbWVidWZmZXIsIGZpbHRlcnMpXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIGNvbnRleHQuZXh0ZW5zaW9ucy5kZWJ1ZygpXFxufScsXG59O1xuY29uc3QgRlVMTCA9XG5cdCdpbXBvcnQge1xcbiAgICB0Z2RDYWxjUmFuZG9tLFxcbiAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkRGF0YXNldCxcXG4gICAgVGdkRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcXG4gICAgVGdkUGFpbnRlclBhcnRpY2xlcyxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcXG4gICAgVGdkU2hhZGVyVmVydGV4LFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIFRnZFRpbWUsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxcblxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXFxuXFxuY29uc3QgQ09VTlQgPSA1MTJcXG5jb25zdCBEVVJBVElPTiA9IDNcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChDT1VOVCwgRFVSQVRJT04pXFxuICAgIGNvbnN0IHZpcnR1YWxUaW1lID0gbmV3IFRnZFRpbWUoeyBjb250ZXh0LCBzcGVlZDogMCB9KVxcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XFxuICAgICAgICBkYXRhc2V0LFxcbiAgICAgICAgZHJhd01vZGU6IFwiUE9JTlRTXCIsXFxuICAgICAgICBzaGFkZXI6IHtcXG4gICAgICAgICAgICB2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXCJnbF9Qb3NpdGlvbiA9IHZlYzQoLTEsIC0xLCAwLCAxKTtcIiwgXCJnbF9Qb2ludFNpemUgPSBhdHRTaXplO1wiXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1wiZmxvYXQgdmFsdWUgPSAuNSAvIDI1NS4wO1wiLCBcIkZyYWdDb2xvciA9IHZlYzQodmFsdWUsIDAuMCwgMC4wLCAxLjApO1wiXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZS5zcGVlZCA9PT0gMCkge1xcbiAgICAgICAgICAgICAgICB2aXJ0dWFsVGltZS5yZXNldCgpXFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lLnNwZWVkID0gMVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHRleHR1cmVGQiA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcIk5FQVJFU1RcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHN0b3JhZ2U6IHtcXG4gICAgICAgICAgICBmb3JtYXQ6IFwiUjMyRiAvIFJFRCAvIEZMT0FUXCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgYW50aUFsaWFzaW5nOiBmYWxzZSxcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IHRleHR1cmVGQixcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGJsZW5kOiBcImFkZFwiLFxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBwYXJ0aWNsZXNdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgY29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgICAgICB3cmFwUjogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgd3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgICAgIHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgIH0sXFxuICAgIH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjMDAwXCIsIFwiI2YwMFwiLCBcIiNmOTJcIiwgXCIjZWUzXCIsIFwiI2ZmNFwiLCBcIiNmZmZcIl0pKVxcbiAgICBjb25zdCBmaWx0ZXIgPSBuZXcgVGdkRmlsdGVyKHtcXG4gICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgdGV4UGFsZXR0ZTogcGFsZXR0ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcXG4gICAgICAgICAgICBcImZsb2F0IHUgPSBjbGFtcCh0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKS5yLCAwLjAsIDEuMCk7XCIsXFxuICAgICAgICAgICAgXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh0ZXhQYWxldHRlLCB2ZWMyKHUsIC41KSk7XCIsXFxuICAgICAgICAgICAgXCJpZiAodSA8IDAuMCkgY29sb3IgPSB2ZWM0KDEsIDAsIDAsIDEpO1wiLFxcbiAgICAgICAgICAgIFwiaWYgKHUgPiAxLjApIGNvbG9yID0gdmVjNCgxLCAwLCAxLCAxKTtcIixcXG4gICAgICAgICAgICBcImNvbG9yLmEgPSAxLjA7XCIsXFxuICAgICAgICAgICAgXCJGcmFnQ29sb3IgPSBjb2xvcjtcIixcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXFxuICAgICAgICBmaWx0ZXJzOiBbZmlsdGVyXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIGZyYW1lYnVmZmVyLCBmaWx0ZXJzKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICBjb250ZXh0LmV4dGVuc2lvbnMuZGVidWcoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gb3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX0gLz5cXG59XFxuXFxuZnVuY3Rpb24gbWFrZURhdGFzZXQoY291bnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IFRnZERhdGFzZXQge1xcbiAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcbiAgICAgICAgYXR0U2l6ZTogXCJmbG9hdFwiLFxcbiAgICB9KVxcbiAgICBjb25zdCBhdHRTaXplOiBudW1iZXJbXSA9IFtdXFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcbiAgICAgICAgYXR0U2l6ZS5wdXNoKDggKyBpICogMilcXG4gICAgfVxcbiAgICBkYXRhc2V0LnNldChcImF0dFNpemVcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRTaXplKSlcXG4gICAgcmV0dXJuIGRhdGFzZXRcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQge1xuXHR0Z2RDYWxjUmFuZG9tLFxuXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxuXHR0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkRGF0YXNldCxcblx0VGdkRmlsdGVyLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJGaWx0ZXIsXG5cdFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcblx0VGdkUGFpbnRlclBhcnRpY2xlcyxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RTaGFkZXJGcmFnbWVudCxcblx0VGdkU2hhZGVyVmVydGV4LFxuXHRUZ2RUZXh0dXJlMkQsXG5cdFRnZFRpbWUsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuY29uc3QgQ09VTlQgPSA1MTI7XG5jb25zdCBEVVJBVElPTiA9IDM7XG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KTtcblx0Y29uc3QgZGF0YXNldDogVGdkRGF0YXNldCA9IG1ha2VEYXRhc2V0KENPVU5ULCBEVVJBVElPTik7XG5cdGNvbnN0IHZpcnR1YWxUaW1lID0gbmV3IFRnZFRpbWUoeyBjb250ZXh0LCBzcGVlZDogMCB9KTtcblx0Y29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xuXHRcdGRhdGFzZXQsXG5cdFx0ZHJhd01vZGU6IFwiUE9JTlRTXCIsXG5cdFx0c2hhZGVyOiB7XG5cdFx0XHR2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcblx0XHRcdFx0ZnVuY3Rpb25zOiB7XG5cdFx0XHRcdFx0Li4udGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlKCksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IGRhdGFzZXQuZ2V0VHlwZVJlY29yZCgpLFxuXHRcdFx0XHRtYWluQ29kZTogW1xuXHRcdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSB2ZWM0KC0xLCAtMSwgMCwgMSk7XCIsXG5cdFx0XHRcdFx0XCJnbF9Qb2ludFNpemUgPSBhdHRTaXplO1wiLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSksXG5cdFx0XHRmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuXHRcdFx0XHRtYWluQ29kZTogW1xuXHRcdFx0XHRcdFwiZmxvYXQgdmFsdWUgPSAuNSAvIDI1NS4wO1wiLFxuXHRcdFx0XHRcdFwiRnJhZ0NvbG9yID0gdmVjNCh2YWx1ZSwgMC4wLCAwLjAsIDEuMCk7XCIsXG5cdFx0XHRcdF0sXG5cdFx0XHR9KSxcblx0XHR9LFxuXHRcdHNldFVuaWZvcm1zOiAoeyBfdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XG5cdFx0XHRpZiAodmlydHVhbFRpbWUuc3BlZWQgPT09IDApIHtcblx0XHRcdFx0dmlydHVhbFRpbWUucmVzZXQoKTtcblx0XHRcdFx0dmlydHVhbFRpbWUuc3BlZWQgPSAxO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH0pO1xuXHRjb25zdCB0ZXh0dXJlRkIgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRwYXJhbXM6IHtcblx0XHRcdG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG5cdFx0XHRtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdH0sXG5cdFx0c3RvcmFnZToge1xuXHRcdFx0Zm9ybWF0OiBcIlIzMkYgLyBSRUQgLyBGTE9BVFwiLFxuXHRcdH0sXG5cdH0pO1xuXHRjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xuXHRcdGFudGlBbGlhc2luZzogZmFsc2UsXG5cdFx0dGV4dHVyZUNvbG9yMDogdGV4dHVyZUZCLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdFx0YmxlbmQ6IFwiYWRkXCIsXG5cdFx0XHRcdGNoaWxkcmVuOiBbY2xlYXIsIHBhcnRpY2xlc10sXG5cdFx0XHR9KSxcblx0XHRdLFxuXHR9KTtcblx0Y29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuXHRcdHBhcmFtczoge1xuXHRcdFx0bWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0bWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0d3JhcFI6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdFx0d3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdFx0d3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdH0sXG5cdH0pLmxvYWRCaXRtYXAoXG5cdFx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjMDAwXCIsIFwiI2YwMFwiLCBcIiNmOTJcIiwgXCIjZWUzXCIsIFwiI2ZmNFwiLCBcIiNmZmZcIl0pLFxuXHQpO1xuXHRjb25zdCBmaWx0ZXIgPSBuZXcgVGdkRmlsdGVyKHtcblx0XHR0ZXh0dXJlczoge1xuXHRcdFx0dGV4UGFsZXR0ZTogcGFsZXR0ZSxcblx0XHR9LFxuXHRcdGZyYWdtZW50U2hhZGVyQ29kZTogW1xuXHRcdFx0XCJmbG9hdCB1ID0gY2xhbXAodGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVikuciwgMC4wLCAxLjApO1wiLFxuXHRcdFx0XCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh0ZXhQYWxldHRlLCB2ZWMyKHUsIC41KSk7XCIsXG5cdFx0XHRcImlmICh1IDwgMC4wKSBjb2xvciA9IHZlYzQoMSwgMCwgMCwgMSk7XCIsXG5cdFx0XHRcImlmICh1ID4gMS4wKSBjb2xvciA9IHZlYzQoMSwgMCwgMSwgMSk7XCIsXG5cdFx0XHRcImNvbG9yLmEgPSAxLjA7XCIsXG5cdFx0XHRcIkZyYWdDb2xvciA9IGNvbG9yO1wiLFxuXHRcdF0sXG5cdH0pO1xuXHRjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuXHRcdGZsaXBZOiB0cnVlLFxuXHRcdHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXG5cdFx0ZmlsdGVyczogW2ZpbHRlcl0sXG5cdH0pO1xuXHRjb250ZXh0LmFkZChjbGVhciwgZnJhbWVidWZmZXIsIGZpbHRlcnMpO1xuXHRjb250ZXh0LnBsYXkoKTtcblx0Y29udGV4dC5leHRlbnNpb25zLmRlYnVnKCk7XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSBvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fSAvPjtcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoY291bnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IFRnZERhdGFzZXQge1xuXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuXHRcdGF0dFNpemU6IFwiZmxvYXRcIixcblx0fSk7XG5cdGNvbnN0IGF0dFNpemU6IG51bWJlcltdID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdGF0dFNpemUucHVzaCg4ICsgaSAqIDIpO1xuXHR9XG5cdGRhdGFzZXQuc2V0KFwiYXR0U2l6ZVwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFNpemUpKTtcblx0cmV0dXJuIGRhdGFzZXQ7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENhbnZhc0NyZWF0ZVBhbGV0dGUiLCJ0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UiLCJUZ2REYXRhc2V0IiwiVGdkRmlsdGVyIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckZpbHRlciIsIlRnZFBhaW50ZXJGcmFtZWJ1ZmZlciIsIlRnZFBhaW50ZXJQYXJ0aWNsZXMiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RTaGFkZXJGcmFnbWVudCIsIlRnZFNoYWRlclZlcnRleCIsIlRnZFRleHR1cmUyRCIsIlRnZFRpbWUiLCJWaWV3IiwiQ09VTlQiLCJEVVJBVElPTiIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2xlYXIiLCJkYXRhc2V0IiwibWFrZURhdGFzZXQiLCJ2aXJ0dWFsVGltZSIsInBhcnRpY2xlcyIsInNldFVuaWZvcm1zIiwiX3RpbWUiLCJkZWx0YSIsInByZyIsInRleHR1cmVGQiIsImZyYW1lYnVmZmVyIiwicGFsZXR0ZSIsImZpbHRlciIsImZpbHRlcnMiLCJjb3VudCIsImR1cmF0aW9uIiwiYXR0U2l6ZSIsImki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