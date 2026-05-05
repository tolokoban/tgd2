"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_fragment-shader_pattern_page_mdx-src_components_demo_CodeViewer_Code-bd192f"], {
99498(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(69800);
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
    "Detail #1": "function init(context: TgdContext) {\n    const uniforms = {\n        uniExponent: 0.5,\n    }\n    const shader = new TgdShaderFragment({\n        functions: {\n            ...tgdCodeFunction_palette({\n                a: [0.502, 0.502, 0.502, 1],\n                b: [0.502, 0.502, 0.502, 1],\n                c: [1.0, 1.0, 1.0, 1],\n                d: [0.0, 0.329, 0.671, 1],\n            }),\n            ...tgdCodeFunction_fbm({ octaves: 4, G: 0.5 }),\n        },\n        uniforms: {\n            uniExponent: \"float\",\n        },\n        mainCode: [\n            \"float scale = 2.0 + 1.5 * sin(uniTime * .23);\",\n            \"float index = fbm(vec3(scale * varUV + vec2(uniTime * .2, 0.0), uniTime * .1));\",\n            \"vec4 color = palette(index);\",\n            \"float light = pow(dot(color, color), uniExponent);\",\n            \"FragColor = color * vec4(vec3(light), 1.0);\",\n        ],\n    })\n    shader.debug()\n    context.add(\n        new TgdPainterFragmentShader(context, {\n            shader,\n            setUniforms: ({ program }) => {\n                program.uniform1f(\"uniExponent\", uniforms.uniExponent)\n            },\n        }),\n    )\n    context.play()\n    return (settings: Record<string, number>) => {\n        uniforms.uniExponent = settings.uniExponent\n    }\n}"
};
var FULL = "import {\n    tgdCodeFunction_fbm,\n    tgdCodeFunction_palette,\n    TgdContext,\n    TgdPainterFragmentShader,\n    TgdShaderFragment,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    const uniforms = {\n        uniExponent: 0.5,\n    }\n    const shader = new TgdShaderFragment({\n        functions: {\n            ...tgdCodeFunction_palette({\n                a: [0.502, 0.502, 0.502, 1],\n                b: [0.502, 0.502, 0.502, 1],\n                c: [1.0, 1.0, 1.0, 1],\n                d: [0.0, 0.329, 0.671, 1],\n            }),\n            ...tgdCodeFunction_fbm({ octaves: 4, G: 0.5 }),\n        },\n        uniforms: {\n            uniExponent: \"float\",\n        },\n        mainCode: [\n            \"float scale = 2.0 + 1.5 * sin(uniTime * .23);\",\n            \"float index = fbm(vec3(scale * varUV + vec2(uniTime * .2, 0.0), uniTime * .1));\",\n            \"vec4 color = palette(index);\",\n            \"float light = pow(dot(color, color), uniExponent);\",\n            \"FragColor = color * vec4(vec3(light), 1.0);\",\n        ],\n    })\n    shader.debug()\n    context.add(\n        new TgdPainterFragmentShader(context, {\n            shader,\n            setUniforms: ({ program }) => {\n                program.uniform1f(\"uniExponent\", uniforms.uniExponent)\n            },\n        }),\n    )\n    context.play()\n    return (settings: Record<string, number>) => {\n        uniforms.uniExponent = settings.uniExponent\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            settings={{\n                uniExponent: {\n                    label: \"uniExponent\",\n                    min: -10,\n                    max: 10,\n                    step: 0.02,\n                    value: 0.5,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
69800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
    var uniforms = {
        uniExponent: 0.5
    };
    var shader = new _tolokoban_tgd__rspack_import_1.TgdShaderFragment({
        functions: _object_spread({}, (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_palette)({
            a: [
                0.502,
                0.502,
                0.502,
                1
            ],
            b: [
                0.502,
                0.502,
                0.502,
                1
            ],
            c: [
                1.0,
                1.0,
                1.0,
                1
            ],
            d: [
                0.0,
                0.329,
                0.671,
                1
            ]
        }), (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_fbm)({
            octaves: 4,
            G: 0.5
        })),
        uniforms: {
            uniExponent: "float"
        },
        mainCode: [
            "float scale = 2.0 + 1.5 * sin(uniTime * .23);",
            "float index = fbm(vec3(scale * varUV + vec2(uniTime * .2, 0.0), uniTime * .1));",
            "vec4 color = palette(index);",
            "float light = pow(dot(color, color), uniExponent);",
            "FragColor = color * vec4(vec3(light), 1.0);"
        ]
    });
    shader.debug();
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterFragmentShader(context, {
        shader: shader,
        setUniforms: function setUniforms(param) {
            var program = param.program;
            program.uniform1f("uniExponent", uniforms.uniExponent);
        }
    }));
    context.play();
    return function(settings) {
        uniforms.uniExponent = settings.uniExponent;
    };
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        settings: {
            uniExponent: {
                label: "uniExponent",
                min: -10,
                max: 10,
                step: 0.02,
                value: 0.5
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/main.demo.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
}


},
30732(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(99498);
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
        h1: "h1"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Pattern"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/pattern/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/pattern/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/pattern/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/pattern/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/pattern/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFnbWVudC1zaGFkZXJfcGF0dGVybl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZS1iZDE5MmYuMjc2NjFlZTM0ZjY1OGM4Mi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFnbWVudC1zaGFkZXIvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFnbWVudC1zaGFkZXIvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZnJhZ21lbnQtc2hhZGVyL3BhdHRlcm4vcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnN0IHVuaWZvcm1zID0ge1xcbiAgICAgICAgdW5pRXhwb25lbnQ6IDAuNSxcXG4gICAgfVxcbiAgICBjb25zdCBzaGFkZXIgPSBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcbiAgICAgICAgZnVuY3Rpb25zOiB7XFxuICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX3BhbGV0dGUoe1xcbiAgICAgICAgICAgICAgICBhOiBbMC41MDIsIDAuNTAyLCAwLjUwMiwgMV0sXFxuICAgICAgICAgICAgICAgIGI6IFswLjUwMiwgMC41MDIsIDAuNTAyLCAxXSxcXG4gICAgICAgICAgICAgICAgYzogWzEuMCwgMS4wLCAxLjAsIDFdLFxcbiAgICAgICAgICAgICAgICBkOiBbMC4wLCAwLjMyOSwgMC42NzEsIDFdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9mYm0oeyBvY3RhdmVzOiA0LCBHOiAwLjUgfSksXFxuICAgICAgICB9LFxcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlFeHBvbmVudDogXFxcImZsb2F0XFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgIFxcXCJmbG9hdCBzY2FsZSA9IDIuMCArIDEuNSAqIHNpbih1bmlUaW1lICogLjIzKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJmbG9hdCBpbmRleCA9IGZibSh2ZWMzKHNjYWxlICogdmFyVVYgKyB2ZWMyKHVuaVRpbWUgKiAuMiwgMC4wKSwgdW5pVGltZSAqIC4xKSk7XFxcIixcXG4gICAgICAgICAgICBcXFwidmVjNCBjb2xvciA9IHBhbGV0dGUoaW5kZXgpO1xcXCIsXFxuICAgICAgICAgICAgXFxcImZsb2F0IGxpZ2h0ID0gcG93KGRvdChjb2xvciwgY29sb3IpLCB1bmlFeHBvbmVudCk7XFxcIixcXG4gICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gY29sb3IgKiB2ZWM0KHZlYzMobGlnaHQpLCAxLjApO1xcXCIsXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBzaGFkZXIuZGVidWcoKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIHNoYWRlcixcXG4gICAgICAgICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFxcXCJ1bmlFeHBvbmVudFxcXCIsIHVuaWZvcm1zLnVuaUV4cG9uZW50KVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICByZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XFxuICAgICAgICB1bmlmb3Jtcy51bmlFeHBvbmVudCA9IHNldHRpbmdzLnVuaUV4cG9uZW50XFxuICAgIH1cXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0Z2RDb2RlRnVuY3Rpb25fZmJtLFxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fcGFsZXR0ZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyLFxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgdW5pZm9ybXMgPSB7XFxuICAgICAgICB1bmlFeHBvbmVudDogMC41LFxcbiAgICB9XFxuICAgIGNvbnN0IHNoYWRlciA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuICAgICAgICBmdW5jdGlvbnM6IHtcXG4gICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGFsZXR0ZSh7XFxuICAgICAgICAgICAgICAgIGE6IFswLjUwMiwgMC41MDIsIDAuNTAyLCAxXSxcXG4gICAgICAgICAgICAgICAgYjogWzAuNTAyLCAwLjUwMiwgMC41MDIsIDFdLFxcbiAgICAgICAgICAgICAgICBjOiBbMS4wLCAxLjAsIDEuMCwgMV0sXFxuICAgICAgICAgICAgICAgIGQ6IFswLjAsIDAuMzI5LCAwLjY3MSwgMV0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX2ZibSh7IG9jdGF2ZXM6IDQsIEc6IDAuNSB9KSxcXG4gICAgICAgIH0sXFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaUV4cG9uZW50OiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgXFxcImZsb2F0IHNjYWxlID0gMi4wICsgMS41ICogc2luKHVuaVRpbWUgKiAuMjMpO1xcXCIsXFxuICAgICAgICAgICAgXFxcImZsb2F0IGluZGV4ID0gZmJtKHZlYzMoc2NhbGUgKiB2YXJVViArIHZlYzIodW5pVGltZSAqIC4yLCAwLjApLCB1bmlUaW1lICogLjEpKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJ2ZWM0IGNvbG9yID0gcGFsZXR0ZShpbmRleCk7XFxcIixcXG4gICAgICAgICAgICBcXFwiZmxvYXQgbGlnaHQgPSBwb3coZG90KGNvbG9yLCBjb2xvciksIHVuaUV4cG9uZW50KTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSBjb2xvciAqIHZlYzQodmVjMyhsaWdodCksIDEuMCk7XFxcIixcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIHNoYWRlci5kZWJ1ZygpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgc2hhZGVyLFxcbiAgICAgICAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH0pID0+IHtcXG4gICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtMWYoXFxcInVuaUV4cG9uZW50XFxcIiwgdW5pZm9ybXMudW5pRXhwb25lbnQpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcXG4gICAgICAgIHVuaWZvcm1zLnVuaUV4cG9uZW50ID0gc2V0dGluZ3MudW5pRXhwb25lbnRcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIHNldHRpbmdzPXt7XFxuICAgICAgICAgICAgICAgIHVuaUV4cG9uZW50OiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcInVuaUV4cG9uZW50XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTEwLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAxMCxcXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuMDIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMC41LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHRnZENvZGVGdW5jdGlvbl9mYm0sXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3BhbGV0dGUsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIsXG4gICAgVGdkU2hhZGVyRnJhZ21lbnQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgIGNvbnN0IHVuaWZvcm1zID0ge1xuICAgICAgICB1bmlFeHBvbmVudDogMC41LFxuICAgIH1cbiAgICBjb25zdCBzaGFkZXIgPSBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICBmdW5jdGlvbnM6IHtcbiAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wYWxldHRlKHtcbiAgICAgICAgICAgICAgICBhOiBbMC41MDIsIDAuNTAyLCAwLjUwMiwgMV0sXG4gICAgICAgICAgICAgICAgYjogWzAuNTAyLCAwLjUwMiwgMC41MDIsIDFdLFxuICAgICAgICAgICAgICAgIGM6IFsxLjAsIDEuMCwgMS4wLCAxXSxcbiAgICAgICAgICAgICAgICBkOiBbMC4wLCAwLjMyOSwgMC42NzEsIDFdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fZmJtKHsgb2N0YXZlczogNCwgRzogMC41IH0pLFxuICAgICAgICB9LFxuICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgdW5pRXhwb25lbnQ6IFwiZmxvYXRcIixcbiAgICAgICAgfSxcbiAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgIFwiZmxvYXQgc2NhbGUgPSAyLjAgKyAxLjUgKiBzaW4odW5pVGltZSAqIC4yMyk7XCIsXG4gICAgICAgICAgICBcImZsb2F0IGluZGV4ID0gZmJtKHZlYzMoc2NhbGUgKiB2YXJVViArIHZlYzIodW5pVGltZSAqIC4yLCAwLjApLCB1bmlUaW1lICogLjEpKTtcIixcbiAgICAgICAgICAgIFwidmVjNCBjb2xvciA9IHBhbGV0dGUoaW5kZXgpO1wiLFxuICAgICAgICAgICAgXCJmbG9hdCBsaWdodCA9IHBvdyhkb3QoY29sb3IsIGNvbG9yKSwgdW5pRXhwb25lbnQpO1wiLFxuICAgICAgICAgICAgXCJGcmFnQ29sb3IgPSBjb2xvciAqIHZlYzQodmVjMyhsaWdodCksIDEuMCk7XCIsXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBzaGFkZXIuZGVidWcoKVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBuZXcgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyKGNvbnRleHQsIHtcbiAgICAgICAgICAgIHNoYWRlcixcbiAgICAgICAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH0pID0+IHtcbiAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaUV4cG9uZW50XCIsIHVuaWZvcm1zLnVuaUV4cG9uZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgcmV0dXJuIChzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xuICAgICAgICB1bmlmb3Jtcy51bmlFeHBvbmVudCA9IHNldHRpbmdzLnVuaUV4cG9uZW50XG4gICAgfVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcbiAgICAgICAgICAgICAgICB1bmlFeHBvbmVudDoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJ1bmlFeHBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBtaW46IC0xMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogMC4wMixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAuNSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENvZGVGdW5jdGlvbl9mYm0iLCJ0Z2RDb2RlRnVuY3Rpb25fcGFsZXR0ZSIsIlRnZFBhaW50ZXJGcmFnbWVudFNoYWRlciIsIlRnZFNoYWRlckZyYWdtZW50IiwiVmlldyIsImluaXQiLCJjb250ZXh0IiwidW5pZm9ybXMiLCJzaGFkZXIiLCJzZXRVbmlmb3JtcyIsInByb2dyYW0iLCJzZXR0aW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUF1eUM7QUFDbDBDLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFB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