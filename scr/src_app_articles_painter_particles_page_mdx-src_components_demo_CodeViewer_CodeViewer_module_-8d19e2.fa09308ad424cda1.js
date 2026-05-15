"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_particles_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_-8d19e2"], {
28497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(33315);
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
    "Detail #1": "function init(context: TgdContext) {\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const dataset: TgdDataset = makeDataset(250000)\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: \"POINTS\",\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                },\n                uniforms: {\n                    uniTime: \"float\",\n                    uniDelta: \"float\",\n                    uniCenter: \"vec2\",\n                    uniSize: \"float\",\n                },\n                attributes: dataset.getTypeRecord(),\n                mainCode: [\n                    \"gl_Position = vec4(attPosition, 0, 1);\",\n                    \"gl_PointSize = uniSize;\",\n                    \"varPosition += attSpeed * uniDelta;\",\n                    \"if (abs(varPosition.x) > 1.0) varSpeed.x = -varSpeed.x;\",\n                    \"if (abs(varPosition.y) > 1.0) varSpeed.y = -varSpeed.y;\",\n                    \"varPosition.x = clamp(varPosition.x, -1.0, +1.0);\",\n                    \"varPosition.y = clamp(varPosition.y, -1.0, +1.0);\",\n                    \"vec2 v = attPosition - uniCenter;\",\n                    \"float s = dot(v, v);\",\n                    \"float c = 0.9;\",\n                    \"float e = max(0.0, c - s) / c;\",\n                    \"float p = 0.5 + 0.5 * abs(perlinNoise(vec3(attPosition, uniTime)));\",\n                    \"varPosition += uniDelta * p * e * normalize(v);\",\n                    \"varSpeed += 0.3 * uniDelta * e * normalize(v);\",\n                ],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: [\n                    \"vec2 p = 2.0 * (gl_PointCoord - vec2(0.5));\",\n                    \"float s = dot(p, p);\",\n                    \"if (s > 1.0) discard;\",\n                    \"float e = (1.0 - s);\",\n                    \"e *= e;\",\n                    \"FragColor = vec4(varColor * e, 1.0);\",\n                ],\n            }),\n        },\n        setUniforms: ({ time, delta, prg }) => {\n            prg.uniform1f(\"uniSize\", Math.sqrt(context.width * context.height) / 32)\n            prg.uniform1f(\"uniDelta\", delta)\n            prg.uniform1f(\"uniTime\", time)\n            prg.uniform2f(\"uniCenter\", context.inputs.pointer.x, context.inputs.pointer.y)\n        },\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            blend: \"off\",\n            children: [particles],\n        }),\n    )\n    context.play()\n}"
};
var FULL = "import {\n    tgdCalcRandom,\n    tgdCodeFunction_perlinNoise,\n    TgdContext,\n    TgdDataset,\n    TgdPainterClear,\n    TgdPainterParticles,\n    TgdPainterState,\n    TgdShaderFragment,\n    TgdShaderVertex,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const dataset: TgdDataset = makeDataset(250000)\n    const particles = new TgdPainterParticles(context, {\n        dataset,\n        drawMode: \"POINTS\",\n        shader: {\n            vert: new TgdShaderVertex({\n                functions: {\n                    ...tgdCodeFunction_perlinNoise(),\n                },\n                uniforms: {\n                    uniTime: \"float\",\n                    uniDelta: \"float\",\n                    uniCenter: \"vec2\",\n                    uniSize: \"float\",\n                },\n                attributes: dataset.getTypeRecord(),\n                mainCode: [\n                    \"gl_Position = vec4(attPosition, 0, 1);\",\n                    \"gl_PointSize = uniSize;\",\n                    \"varPosition += attSpeed * uniDelta;\",\n                    \"if (abs(varPosition.x) > 1.0) varSpeed.x = -varSpeed.x;\",\n                    \"if (abs(varPosition.y) > 1.0) varSpeed.y = -varSpeed.y;\",\n                    \"varPosition.x = clamp(varPosition.x, -1.0, +1.0);\",\n                    \"varPosition.y = clamp(varPosition.y, -1.0, +1.0);\",\n                    \"vec2 v = attPosition - uniCenter;\",\n                    \"float s = dot(v, v);\",\n                    \"float c = 0.9;\",\n                    \"float e = max(0.0, c - s) / c;\",\n                    \"float p = 0.5 + 0.5 * abs(perlinNoise(vec3(attPosition, uniTime)));\",\n                    \"varPosition += uniDelta * p * e * normalize(v);\",\n                    \"varSpeed += 0.3 * uniDelta * e * normalize(v);\",\n                ],\n            }),\n            frag: new TgdShaderFragment({\n                mainCode: [\n                    \"vec2 p = 2.0 * (gl_PointCoord - vec2(0.5));\",\n                    \"float s = dot(p, p);\",\n                    \"if (s > 1.0) discard;\",\n                    \"float e = (1.0 - s);\",\n                    \"e *= e;\",\n                    \"FragColor = vec4(varColor * e, 1.0);\",\n                ],\n            }),\n        },\n        setUniforms: ({ time, delta, prg }) => {\n            prg.uniform1f(\"uniSize\", Math.sqrt(context.width * context.height) / 32)\n            prg.uniform1f(\"uniDelta\", delta)\n            prg.uniform1f(\"uniTime\", time)\n            prg.uniform2f(\"uniCenter\", context.inputs.pointer.x, context.inputs.pointer.y)\n        },\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            blend: \"off\",\n            children: [particles],\n        }),\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n        />\n    )\n}\n\nfunction makeDataset(count: number): TgdDataset {\n    const dataset = new TgdDataset({\n        attPosition: \"vec2\",\n        attSpeed: \"vec2\",\n        attColor: \"vec3\",\n    })\n    const attPosition: number[] = []\n    const attSpeed: number[] = []\n    const attColor: number[] = []\n    const rnd = (min = -1, max = +1) => tgdCalcRandom(min, max)\n    for (let i = 0; i < count; i++) {\n        attPosition.push(rnd(), rnd())\n        attSpeed.push(rnd(-0.25, +0.25), rnd(-0.25, +0.25))\n        const R = rnd(0.1, 0.2)\n        const G = R * Math.random()\n        const B = 0.01\n        attColor.push(R * 5, G * 5, B * 5)\n    }\n    dataset.set(\"attPosition\", new Float32Array(attPosition))\n    dataset.set(\"attSpeed\", new Float32Array(attSpeed))\n    dataset.set(\"attColor\", new Float32Array(attColor))\n    return dataset\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
33315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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



// #begin
function init(context) {
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0,
            0,
            1
        ],
        depth: 1
    });
    var dataset = makeDataset(250000);
    var particles = new _tolokoban_tgd__rspack_import_1.TgdPainterParticles(context, {
        dataset: dataset,
        drawMode: "POINTS",
        shader: {
            vert: new _tolokoban_tgd__rspack_import_1.TgdShaderVertex({
                functions: _object_spread({}, (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_perlinNoise)()),
                uniforms: {
                    uniTime: "float",
                    uniDelta: "float",
                    uniCenter: "vec2",
                    uniSize: "float"
                },
                attributes: dataset.getTypeRecord(),
                mainCode: [
                    "gl_Position = vec4(attPosition, 0, 1);",
                    "gl_PointSize = uniSize;",
                    "varPosition += attSpeed * uniDelta;",
                    "if (abs(varPosition.x) > 1.0) varSpeed.x = -varSpeed.x;",
                    "if (abs(varPosition.y) > 1.0) varSpeed.y = -varSpeed.y;",
                    "varPosition.x = clamp(varPosition.x, -1.0, +1.0);",
                    "varPosition.y = clamp(varPosition.y, -1.0, +1.0);",
                    "vec2 v = attPosition - uniCenter;",
                    "float s = dot(v, v);",
                    "float c = 0.9;",
                    "float e = max(0.0, c - s) / c;",
                    "float p = 0.5 + 0.5 * abs(perlinNoise(vec3(attPosition, uniTime)));",
                    "varPosition += uniDelta * p * e * normalize(v);",
                    "varSpeed += 0.3 * uniDelta * e * normalize(v);"
                ]
            }),
            frag: new _tolokoban_tgd__rspack_import_1.TgdShaderFragment({
                mainCode: [
                    "vec2 p = 2.0 * (gl_PointCoord - vec2(0.5));",
                    "float s = dot(p, p);",
                    "if (s > 1.0) discard;",
                    "float e = (1.0 - s);",
                    "e *= e;",
                    "FragColor = vec4(varColor * e, 1.0);"
                ]
            })
        },
        setUniforms: function setUniforms(param) {
            var time = param.time, delta = param.delta, prg = param.prg;
            prg.uniform1f("uniSize", Math.sqrt(context.width * context.height) / 32);
            prg.uniform1f("uniDelta", delta);
            prg.uniform1f("uniTime", time);
            prg.uniform2f("uniCenter", context.inputs.pointer.x, context.inputs.pointer.y);
        }
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        blend: "off",
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
        controller: {
            inertiaOrbit: 1000
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/_/main.demo/main.demo.tsx",
        lineNumber: 82,
        columnNumber: 9
    }, this);
}
function makeDataset(count) {
    var dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        attPosition: "vec2",
        attSpeed: "vec2",
        attColor: "vec3"
    });
    var attPosition = [];
    var attSpeed = [];
    var attColor = [];
    var rnd = function rnd() {
        var min = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, max = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : +1;
        return (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(min, max);
    };
    for(var i = 0; i < count; i++){
        attPosition.push(rnd(), rnd());
        attSpeed.push(rnd(-0.25, +0.25), rnd(-0.25, +0.25));
        var R = rnd(0.1, 0.2);
        var G = R * Math.random();
        var B = 0.01;
        attColor.push(R * 5, G * 5, B * 5);
    }
    dataset.set("attPosition", new Float32Array(attPosition));
    dataset.set("attSpeed", new Float32Array(attSpeed));
    dataset.set("attColor", new Float32Array(attColor));
    return dataset;
}


},
78280(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(28497);
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move your mouse around to interact with the 250'000 particules."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlXy04ZDE5ZTIuZmEwOTMwOGFkNDI0Y2RhMS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BhcnRpY2xlcy9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldCgyNTAwMDApXFxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcXG4gICAgICAgIGRhdGFzZXQsXFxuICAgICAgICBkcmF3TW9kZTogXFxcIlBPSU5UU1xcXCIsXFxuICAgICAgICBzaGFkZXI6IHtcXG4gICAgICAgICAgICB2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XFxuICAgICAgICAgICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIHVuaVRpbWU6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlEZWx0YTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaUNlbnRlcjogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pU2l6ZTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvc2l0aW9uLCAwLCAxKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImdsX1BvaW50U2l6ZSA9IHVuaVNpemU7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiArPSBhdHRTcGVlZCAqIHVuaURlbHRhO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiaWYgKGFicyh2YXJQb3NpdGlvbi54KSA+IDEuMCkgdmFyU3BlZWQueCA9IC12YXJTcGVlZC54O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiaWYgKGFicyh2YXJQb3NpdGlvbi55KSA+IDEuMCkgdmFyU3BlZWQueSA9IC12YXJTcGVlZC55O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyUG9zaXRpb24ueCA9IGNsYW1wKHZhclBvc2l0aW9uLngsIC0xLjAsICsxLjApO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyUG9zaXRpb24ueSA9IGNsYW1wKHZhclBvc2l0aW9uLnksIC0xLjAsICsxLjApO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmVjMiB2ID0gYXR0UG9zaXRpb24gLSB1bmlDZW50ZXI7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJmbG9hdCBzID0gZG90KHYsIHYpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgYyA9IDAuOTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImZsb2F0IGUgPSBtYXgoMC4wLCBjIC0gcykgLyBjO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgcCA9IDAuNSArIDAuNSAqIGFicyhwZXJsaW5Ob2lzZSh2ZWMzKGF0dFBvc2l0aW9uLCB1bmlUaW1lKSkpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyUG9zaXRpb24gKz0gdW5pRGVsdGEgKiBwICogZSAqIG5vcm1hbGl6ZSh2KTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZhclNwZWVkICs9IDAuMyAqIHVuaURlbHRhICogZSAqIG5vcm1hbGl6ZSh2KTtcXFwiLFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmVjMiBwID0gMi4wICogKGdsX1BvaW50Q29vcmQgLSB2ZWMyKDAuNSkpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgcyA9IGRvdChwLCBwKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImlmIChzID4gMS4wKSBkaXNjYXJkO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgZSA9ICgxLjAgLSBzKTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImUgKj0gZTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcIkZyYWdDb2xvciA9IHZlYzQodmFyQ29sb3IgKiBlLCAxLjApO1xcXCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0VW5pZm9ybXM6ICh7IHRpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaVNpemVcXFwiLCBNYXRoLnNxcnQoY29udGV4dC53aWR0aCAqIGNvbnRleHQuaGVpZ2h0KSAvIDMyKVxcbiAgICAgICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaURlbHRhXFxcIiwgZGVsdGEpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pVGltZVxcXCIsIHRpbWUpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0yZihcXFwidW5pQ2VudGVyXFxcIiwgY29udGV4dC5pbnB1dHMucG9pbnRlci54LCBjb250ZXh0LmlucHV0cy5wb2ludGVyLnkpXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgYmxlbmQ6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbcGFydGljbGVzXSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdGdkQ2FsY1JhbmRvbSxcXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlLFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2REYXRhc2V0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJQYXJ0aWNsZXMsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkU2hhZGVyRnJhZ21lbnQsXFxuICAgIFRnZFNoYWRlclZlcnRleCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgY29uc3QgZGF0YXNldDogVGdkRGF0YXNldCA9IG1ha2VEYXRhc2V0KDI1MDAwMClcXG4gICAgY29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xcbiAgICAgICAgZGF0YXNldCxcXG4gICAgICAgIGRyYXdNb2RlOiBcXFwiUE9JTlRTXFxcIixcXG4gICAgICAgIHNoYWRlcjoge1xcbiAgICAgICAgICAgIHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgICAgICAgICAgdW5pVGltZTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHVuaURlbHRhOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pQ2VudGVyOiBcXFwidmVjMlxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB1bmlTaXplOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJnbF9Qb3NpdGlvbiA9IHZlYzQoYXR0UG9zaXRpb24sIDAsIDEpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZ2xfUG9pbnRTaXplID0gdW5pU2l6ZTtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInZhclBvc2l0aW9uICs9IGF0dFNwZWVkICogdW5pRGVsdGE7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJpZiAoYWJzKHZhclBvc2l0aW9uLngpID4gMS4wKSB2YXJTcGVlZC54ID0gLXZhclNwZWVkLng7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJpZiAoYWJzKHZhclBvc2l0aW9uLnkpID4gMS4wKSB2YXJTcGVlZC55ID0gLXZhclNwZWVkLnk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbi54ID0gY2xhbXAodmFyUG9zaXRpb24ueCwgLTEuMCwgKzEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbi55ID0gY2xhbXAodmFyUG9zaXRpb24ueSwgLTEuMCwgKzEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMyIHYgPSBhdHRQb3NpdGlvbiAtIHVuaUNlbnRlcjtcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImZsb2F0IHMgPSBkb3Qodiwgdik7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJmbG9hdCBjID0gMC45O1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZmxvYXQgZSA9IG1heCgwLjAsIGMgLSBzKSAvIGM7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJmbG9hdCBwID0gMC41ICsgMC41ICogYWJzKHBlcmxpbk5vaXNlKHZlYzMoYXR0UG9zaXRpb24sIHVuaVRpbWUpKSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2YXJQb3NpdGlvbiArPSB1bmlEZWx0YSAqIHAgKiBlICogbm9ybWFsaXplKHYpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidmFyU3BlZWQgKz0gMC4zICogdW5pRGVsdGEgKiBlICogbm9ybWFsaXplKHYpO1xcXCIsXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJ2ZWMyIHAgPSAyLjAgKiAoZ2xfUG9pbnRDb29yZCAtIHZlYzIoMC41KSk7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJmbG9hdCBzID0gZG90KHAsIHApO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiaWYgKHMgPiAxLjApIGRpc2NhcmQ7XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJmbG9hdCBlID0gKDEuMCAtIHMpO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiZSAqPSBlO1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gdmVjNCh2YXJDb2xvciAqIGUsIDEuMCk7XFxcIixcXG4gICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pU2l6ZVxcXCIsIE1hdGguc3FydChjb250ZXh0LndpZHRoICogY29udGV4dC5oZWlnaHQpIC8gMzIpXFxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pRGVsdGFcXFwiLCBkZWx0YSlcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlUaW1lXFxcIiwgdGltZSlcXG4gICAgICAgICAgICBwcmcudW5pZm9ybTJmKFxcXCJ1bmlDZW50ZXJcXFwiLCBjb250ZXh0LmlucHV0cy5wb2ludGVyLngsIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueSlcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBibGVuZDogXFxcIm9mZlxcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtwYXJ0aWNsZXNdLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlRGF0YXNldChjb3VudDogbnVtYmVyKTogVGdkRGF0YXNldCB7XFxuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuICAgICAgICBhdHRQb3NpdGlvbjogXFxcInZlYzJcXFwiLFxcbiAgICAgICAgYXR0U3BlZWQ6IFxcXCJ2ZWMyXFxcIixcXG4gICAgICAgIGF0dENvbG9yOiBcXFwidmVjM1xcXCIsXFxuICAgIH0pXFxuICAgIGNvbnN0IGF0dFBvc2l0aW9uOiBudW1iZXJbXSA9IFtdXFxuICAgIGNvbnN0IGF0dFNwZWVkOiBudW1iZXJbXSA9IFtdXFxuICAgIGNvbnN0IGF0dENvbG9yOiBudW1iZXJbXSA9IFtdXFxuICAgIGNvbnN0IHJuZCA9IChtaW4gPSAtMSwgbWF4ID0gKzEpID0+IHRnZENhbGNSYW5kb20obWluLCBtYXgpXFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcbiAgICAgICAgYXR0UG9zaXRpb24ucHVzaChybmQoKSwgcm5kKCkpXFxuICAgICAgICBhdHRTcGVlZC5wdXNoKHJuZCgtMC4yNSwgKzAuMjUpLCBybmQoLTAuMjUsICswLjI1KSlcXG4gICAgICAgIGNvbnN0IFIgPSBybmQoMC4xLCAwLjIpXFxuICAgICAgICBjb25zdCBHID0gUiAqIE1hdGgucmFuZG9tKClcXG4gICAgICAgIGNvbnN0IEIgPSAwLjAxXFxuICAgICAgICBhdHRDb2xvci5wdXNoKFIgKiA1LCBHICogNSwgQiAqIDUpXFxuICAgIH1cXG4gICAgZGF0YXNldC5zZXQoXFxcImF0dFBvc2l0aW9uXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRQb3NpdGlvbikpXFxuICAgIGRhdGFzZXQuc2V0KFxcXCJhdHRTcGVlZFxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0U3BlZWQpKVxcbiAgICBkYXRhc2V0LnNldChcXFwiYXR0Q29sb3JcXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dENvbG9yKSlcXG4gICAgcmV0dXJuIGRhdGFzZXRcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdGdkQ2FsY1JhbmRvbSxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyUGFydGljbGVzLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pXG4gICAgY29uc3QgZGF0YXNldDogVGdkRGF0YXNldCA9IG1ha2VEYXRhc2V0KDI1MDAwMClcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVGdkUGFpbnRlclBhcnRpY2xlcyhjb250ZXh0LCB7XG4gICAgICAgIGRhdGFzZXQsXG4gICAgICAgIGRyYXdNb2RlOiBcIlBPSU5UU1wiLFxuICAgICAgICBzaGFkZXI6IHtcbiAgICAgICAgICAgIHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHVuaVRpbWU6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgdW5pRGVsdGE6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgdW5pQ2VudGVyOiBcInZlYzJcIixcbiAgICAgICAgICAgICAgICAgICAgdW5pU2l6ZTogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJnbF9Qb3NpdGlvbiA9IHZlYzQoYXR0UG9zaXRpb24sIDAsIDEpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImdsX1BvaW50U2l6ZSA9IHVuaVNpemU7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFyUG9zaXRpb24gKz0gYXR0U3BlZWQgKiB1bmlEZWx0YTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpZiAoYWJzKHZhclBvc2l0aW9uLngpID4gMS4wKSB2YXJTcGVlZC54ID0gLXZhclNwZWVkLng7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWYgKGFicyh2YXJQb3NpdGlvbi55KSA+IDEuMCkgdmFyU3BlZWQueSA9IC12YXJTcGVlZC55O1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZhclBvc2l0aW9uLnggPSBjbGFtcCh2YXJQb3NpdGlvbi54LCAtMS4wLCArMS4wKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJQb3NpdGlvbi55ID0gY2xhbXAodmFyUG9zaXRpb24ueSwgLTEuMCwgKzEuMCk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMiB2ID0gYXR0UG9zaXRpb24gLSB1bmlDZW50ZXI7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZmxvYXQgcyA9IGRvdCh2LCB2KTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCBjID0gMC45O1wiLFxuICAgICAgICAgICAgICAgICAgICBcImZsb2F0IGUgPSBtYXgoMC4wLCBjIC0gcykgLyBjO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImZsb2F0IHAgPSAwLjUgKyAwLjUgKiBhYnMocGVybGluTm9pc2UodmVjMyhhdHRQb3NpdGlvbiwgdW5pVGltZSkpKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJQb3NpdGlvbiArPSB1bmlEZWx0YSAqIHAgKiBlICogbm9ybWFsaXplKHYpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZhclNwZWVkICs9IDAuMyAqIHVuaURlbHRhICogZSAqIG5vcm1hbGl6ZSh2KTtcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMiBwID0gMi4wICogKGdsX1BvaW50Q29vcmQgLSB2ZWMyKDAuNSkpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImZsb2F0IHMgPSBkb3QocCwgcCk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWYgKHMgPiAxLjApIGRpc2NhcmQ7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZmxvYXQgZSA9ICgxLjAgLSBzKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlICo9IGU7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gdmVjNCh2YXJDb2xvciAqIGUsIDEuMCk7XCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XG4gICAgICAgICAgICBwcmcudW5pZm9ybTFmKFwidW5pU2l6ZVwiLCBNYXRoLnNxcnQoY29udGV4dC53aWR0aCAqIGNvbnRleHQuaGVpZ2h0KSAvIDMyKVxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcInVuaURlbHRhXCIsIGRlbHRhKVxuICAgICAgICAgICAgcHJnLnVuaWZvcm0xZihcInVuaVRpbWVcIiwgdGltZSlcbiAgICAgICAgICAgIHByZy51bmlmb3JtMmYoXCJ1bmlDZW50ZXJcIiwgY29udGV4dC5pbnB1dHMucG9pbnRlci54LCBjb250ZXh0LmlucHV0cy5wb2ludGVyLnkpXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgYmxlbmQ6IFwib2ZmXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3BhcnRpY2xlc10sXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBtYWtlRGF0YXNldChjb3VudDogbnVtYmVyKTogVGdkRGF0YXNldCB7XG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgYXR0UG9zaXRpb246IFwidmVjMlwiLFxuICAgICAgICBhdHRTcGVlZDogXCJ2ZWMyXCIsXG4gICAgICAgIGF0dENvbG9yOiBcInZlYzNcIixcbiAgICB9KVxuICAgIGNvbnN0IGF0dFBvc2l0aW9uOiBudW1iZXJbXSA9IFtdXG4gICAgY29uc3QgYXR0U3BlZWQ6IG51bWJlcltdID0gW11cbiAgICBjb25zdCBhdHRDb2xvcjogbnVtYmVyW10gPSBbXVxuICAgIGNvbnN0IHJuZCA9IChtaW4gPSAtMSwgbWF4ID0gKzEpID0+IHRnZENhbGNSYW5kb20obWluLCBtYXgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIGF0dFBvc2l0aW9uLnB1c2gocm5kKCksIHJuZCgpKVxuICAgICAgICBhdHRTcGVlZC5wdXNoKHJuZCgtMC4yNSwgKzAuMjUpLCBybmQoLTAuMjUsICswLjI1KSlcbiAgICAgICAgY29uc3QgUiA9IHJuZCgwLjEsIDAuMilcbiAgICAgICAgY29uc3QgRyA9IFIgKiBNYXRoLnJhbmRvbSgpXG4gICAgICAgIGNvbnN0IEIgPSAwLjAxXG4gICAgICAgIGF0dENvbG9yLnB1c2goUiAqIDUsIEcgKiA1LCBCICogNSlcbiAgICB9XG4gICAgZGF0YXNldC5zZXQoXCJhdHRQb3NpdGlvblwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFBvc2l0aW9uKSlcbiAgICBkYXRhc2V0LnNldChcImF0dFNwZWVkXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0U3BlZWQpKVxuICAgIGRhdGFzZXQuc2V0KFwiYXR0Q29sb3JcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRDb2xvcikpXG4gICAgcmV0dXJuIGRhdGFzZXRcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQ2FsY1JhbmRvbSIsInRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSIsIlRnZERhdGFzZXQiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyUGFydGljbGVzIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkU2hhZGVyRnJhZ21lbnQiLCJUZ2RTaGFkZXJWZXJ0ZXgiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJjbGVhciIsImRhdGFzZXQiLCJtYWtlRGF0YXNldCIsInBhcnRpY2xlcyIsInNldFVuaWZvcm1zIiwidGltZSIsImRlbHRhIiwicHJnIiwiTWF0aCIsImNvdW50IiwiYXR0UG9zaXRpb24iLCJhdHRTcGVlZCIsImF0dENvbG9yIiwicm5kIiwibWluIiwibWF4IiwiaSIsIlIiLCJHIiwiQiIsIkZsb2F0MzJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUFzbkY7QUFDanBGLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkdUI7QUFFaUI7QUFFeEMsU0FBUztBQUNULFNBQVNnQixLQUFLQyxPQUFtQjtJQUM3QixJQUFNQyxRQUFRLElBQUlSLCtDQUFlQSxDQUFDTyxTQUFTO1FBQUUsT0FBTztZQUFDO1lBQUc7WUFBRztZQUFHO1NBQUU7UUFBRSxPQUFPO0lBQUU7SUFDM0UsSUFBTUUsVUFBc0JDLFlBQVk7SUFDeEMsSUFBTUMsWUFBWSxJQUFJVixtREFBbUJBLENBQUNNLFNBQVM7UUFDL0NFLFNBQUFBO1FB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