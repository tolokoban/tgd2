"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_fragment-shader_pattern_page_mdx-src_components_demo_CodeViewer_Code-aaa2e9"], {
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
    "Detail #1": "function init(context: TgdContext) {\n\tconst uniforms = {\n\t\tuniExponent: 0.5,\n\t};\n\tconst shader = new TgdShaderFragment({\n\t\tfunctions: {\n\t\t\t...tgdCodeFunction_palette({\n\t\t\t\ta: [0.502, 0.502, 0.502, 1],\n\t\t\t\tb: [0.502, 0.502, 0.502, 1],\n\t\t\t\tc: [1.0, 1.0, 1.0, 1],\n\t\t\t\td: [0.0, 0.329, 0.671, 1],\n\t\t\t}),\n\t\t\t...tgdCodeFunction_fbm({ octaves: 4, G: 0.5 }),\n\t\t},\n\t\tuniforms: {\n\t\t\tuniExponent: \"float\",\n\t\t},\n\t\tmainCode: [\n\t\t\t\"float scale = 2.0 + 1.5 * sin(uniTime * .23);\",\n\t\t\t\"float index = fbm(vec3(scale * varUV + vec2(uniTime * .2, 0.0), uniTime * .1));\",\n\t\t\t\"vec4 color = palette(index);\",\n\t\t\t\"float light = pow(dot(color, color), uniExponent);\",\n\t\t\t\"FragColor = color * vec4(vec3(light), 1.0);\",\n\t\t],\n\t});\n\tshader.debug();\n\tcontext.add(\n\t\tnew TgdPainterFragmentShader(context, {\n\t\t\tshader,\n\t\t\tsetUniforms: ({ program }) => {\n\t\t\t\tprogram.uniform1f(\"uniExponent\", uniforms.uniExponent);\n\t\t\t},\n\t\t}),\n\t);\n\tcontext.play();\n\treturn (settings: Record<string, number>) => {\n\t\tuniforms.uniExponent = settings.uniExponent;\n\t};\n}"
};
var FULL = "import {\n\ttgdCodeFunction_fbm,\n\ttgdCodeFunction_palette,\n\ttype TgdContext,\n\tTgdPainterFragmentShader,\n\tTgdShaderFragment,\n} from \"@tolokoban/tgd\";\n\nimport View from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext) {\n\tconst uniforms = {\n\t\tuniExponent: 0.5,\n\t};\n\tconst shader = new TgdShaderFragment({\n\t\tfunctions: {\n\t\t\t...tgdCodeFunction_palette({\n\t\t\t\ta: [0.502, 0.502, 0.502, 1],\n\t\t\t\tb: [0.502, 0.502, 0.502, 1],\n\t\t\t\tc: [1.0, 1.0, 1.0, 1],\n\t\t\t\td: [0.0, 0.329, 0.671, 1],\n\t\t\t}),\n\t\t\t...tgdCodeFunction_fbm({ octaves: 4, G: 0.5 }),\n\t\t},\n\t\tuniforms: {\n\t\t\tuniExponent: \"float\",\n\t\t},\n\t\tmainCode: [\n\t\t\t\"float scale = 2.0 + 1.5 * sin(uniTime * .23);\",\n\t\t\t\"float index = fbm(vec3(scale * varUV + vec2(uniTime * .2, 0.0), uniTime * .1));\",\n\t\t\t\"vec4 color = palette(index);\",\n\t\t\t\"float light = pow(dot(color, color), uniExponent);\",\n\t\t\t\"FragColor = color * vec4(vec3(light), 1.0);\",\n\t\t],\n\t});\n\tshader.debug();\n\tcontext.add(\n\t\tnew TgdPainterFragmentShader(context, {\n\t\t\tshader,\n\t\t\tsetUniforms: ({ program }) => {\n\t\t\t\tprogram.uniform1f(\"uniExponent\", uniforms.uniExponent);\n\t\t\t},\n\t\t}),\n\t);\n\tcontext.play();\n\treturn (settings: Record<string, number>) => {\n\t\tuniforms.uniExponent = settings.uniExponent;\n\t};\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tsettings={{\n\t\t\t\tuniExponent: {\n\t\t\t\t\tlabel: \"uniExponent\",\n\t\t\t\t\tmin: -10,\n\t\t\t\t\tmax: 10,\n\t\t\t\t\tstep: 0.02,\n\t\t\t\t\tvalue: 0.5,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n";
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
        columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFnbWVudC1zaGFkZXJfcGF0dGVybl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZS1hYWEyZTkuY2IxYjY0NTY0NDk5ZjdhNS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFnbWVudC1zaGFkZXIvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFnbWVudC1zaGFkZXIvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZnJhZ21lbnQtc2hhZGVyL3BhdHRlcm4vcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuXFx0Y29uc3QgdW5pZm9ybXMgPSB7XFxuXFx0XFx0dW5pRXhwb25lbnQ6IDAuNSxcXG5cXHR9O1xcblxcdGNvbnN0IHNoYWRlciA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuXFx0XFx0ZnVuY3Rpb25zOiB7XFxuXFx0XFx0XFx0Li4udGdkQ29kZUZ1bmN0aW9uX3BhbGV0dGUoe1xcblxcdFxcdFxcdFxcdGE6IFswLjUwMiwgMC41MDIsIDAuNTAyLCAxXSxcXG5cXHRcXHRcXHRcXHRiOiBbMC41MDIsIDAuNTAyLCAwLjUwMiwgMV0sXFxuXFx0XFx0XFx0XFx0YzogWzEuMCwgMS4wLCAxLjAsIDFdLFxcblxcdFxcdFxcdFxcdGQ6IFswLjAsIDAuMzI5LCAwLjY3MSwgMV0sXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0Li4udGdkQ29kZUZ1bmN0aW9uX2ZibSh7IG9jdGF2ZXM6IDQsIEc6IDAuNSB9KSxcXG5cXHRcXHR9LFxcblxcdFxcdHVuaWZvcm1zOiB7XFxuXFx0XFx0XFx0dW5pRXhwb25lbnQ6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0fSxcXG5cXHRcXHRtYWluQ29kZTogW1xcblxcdFxcdFxcdFxcXCJmbG9hdCBzY2FsZSA9IDIuMCArIDEuNSAqIHNpbih1bmlUaW1lICogLjIzKTtcXFwiLFxcblxcdFxcdFxcdFxcXCJmbG9hdCBpbmRleCA9IGZibSh2ZWMzKHNjYWxlICogdmFyVVYgKyB2ZWMyKHVuaVRpbWUgKiAuMiwgMC4wKSwgdW5pVGltZSAqIC4xKSk7XFxcIixcXG5cXHRcXHRcXHRcXFwidmVjNCBjb2xvciA9IHBhbGV0dGUoaW5kZXgpO1xcXCIsXFxuXFx0XFx0XFx0XFxcImZsb2F0IGxpZ2h0ID0gcG93KGRvdChjb2xvciwgY29sb3IpLCB1bmlFeHBvbmVudCk7XFxcIixcXG5cXHRcXHRcXHRcXFwiRnJhZ0NvbG9yID0gY29sb3IgKiB2ZWM0KHZlYzMobGlnaHQpLCAxLjApO1xcXCIsXFxuXFx0XFx0XSxcXG5cXHR9KTtcXG5cXHRzaGFkZXIuZGVidWcoKTtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRzaGFkZXIsXFxuXFx0XFx0XFx0c2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfSkgPT4ge1xcblxcdFxcdFxcdFxcdHByb2dyYW0udW5pZm9ybTFmKFxcXCJ1bmlFeHBvbmVudFxcXCIsIHVuaWZvcm1zLnVuaUV4cG9uZW50KTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29udGV4dC5wbGF5KCk7XFxuXFx0cmV0dXJuIChzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xcblxcdFxcdHVuaWZvcm1zLnVuaUV4cG9uZW50ID0gc2V0dGluZ3MudW5pRXhwb25lbnQ7XFxuXFx0fTtcXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdHRnZENvZGVGdW5jdGlvbl9mYm0sXFxuXFx0dGdkQ29kZUZ1bmN0aW9uX3BhbGV0dGUsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcixcXG5cXHRUZ2RTaGFkZXJGcmFnbWVudCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5cXG5pbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcblxcdGNvbnN0IHVuaWZvcm1zID0ge1xcblxcdFxcdHVuaUV4cG9uZW50OiAwLjUsXFxuXFx0fTtcXG5cXHRjb25zdCBzaGFkZXIgPSBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcblxcdFxcdGZ1bmN0aW9uczoge1xcblxcdFxcdFxcdC4uLnRnZENvZGVGdW5jdGlvbl9wYWxldHRlKHtcXG5cXHRcXHRcXHRcXHRhOiBbMC41MDIsIDAuNTAyLCAwLjUwMiwgMV0sXFxuXFx0XFx0XFx0XFx0YjogWzAuNTAyLCAwLjUwMiwgMC41MDIsIDFdLFxcblxcdFxcdFxcdFxcdGM6IFsxLjAsIDEuMCwgMS4wLCAxXSxcXG5cXHRcXHRcXHRcXHRkOiBbMC4wLCAwLjMyOSwgMC42NzEsIDFdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdC4uLnRnZENvZGVGdW5jdGlvbl9mYm0oeyBvY3RhdmVzOiA0LCBHOiAwLjUgfSksXFxuXFx0XFx0fSxcXG5cXHRcXHR1bmlmb3Jtczoge1xcblxcdFxcdFxcdHVuaUV4cG9uZW50OiBcXFwiZmxvYXRcXFwiLFxcblxcdFxcdH0sXFxuXFx0XFx0bWFpbkNvZGU6IFtcXG5cXHRcXHRcXHRcXFwiZmxvYXQgc2NhbGUgPSAyLjAgKyAxLjUgKiBzaW4odW5pVGltZSAqIC4yMyk7XFxcIixcXG5cXHRcXHRcXHRcXFwiZmxvYXQgaW5kZXggPSBmYm0odmVjMyhzY2FsZSAqIHZhclVWICsgdmVjMih1bmlUaW1lICogLjIsIDAuMCksIHVuaVRpbWUgKiAuMSkpO1xcXCIsXFxuXFx0XFx0XFx0XFxcInZlYzQgY29sb3IgPSBwYWxldHRlKGluZGV4KTtcXFwiLFxcblxcdFxcdFxcdFxcXCJmbG9hdCBsaWdodCA9IHBvdyhkb3QoY29sb3IsIGNvbG9yKSwgdW5pRXhwb25lbnQpO1xcXCIsXFxuXFx0XFx0XFx0XFxcIkZyYWdDb2xvciA9IGNvbG9yICogdmVjNCh2ZWMzKGxpZ2h0KSwgMS4wKTtcXFwiLFxcblxcdFxcdF0sXFxuXFx0fSk7XFxuXFx0c2hhZGVyLmRlYnVnKCk7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcihjb250ZXh0LCB7XFxuXFx0XFx0XFx0c2hhZGVyLFxcblxcdFxcdFxcdHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH0pID0+IHtcXG5cXHRcXHRcXHRcXHRwcm9ncmFtLnVuaWZvcm0xZihcXFwidW5pRXhwb25lbnRcXFwiLCB1bmlmb3Jtcy51bmlFeHBvbmVudCk7XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnRleHQucGxheSgpO1xcblxcdHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcXG5cXHRcXHR1bmlmb3Jtcy51bmlFeHBvbmVudCA9IHNldHRpbmdzLnVuaUV4cG9uZW50O1xcblxcdH07XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0c2V0dGluZ3M9e3tcXG5cXHRcXHRcXHRcXHR1bmlFeHBvbmVudDoge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwidW5pRXhwb25lbnRcXFwiLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogLTEwLFxcblxcdFxcdFxcdFxcdFxcdG1heDogMTAsXFxuXFx0XFx0XFx0XFx0XFx0c3RlcDogMC4wMixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMC41LFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHQvPlxcblxcdCk7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHR0Z2RDb2RlRnVuY3Rpb25fZmJtLFxuXHR0Z2RDb2RlRnVuY3Rpb25fcGFsZXR0ZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIsXG5cdFRnZFNoYWRlckZyYWdtZW50LFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuXHRjb25zdCB1bmlmb3JtcyA9IHtcblx0XHR1bmlFeHBvbmVudDogMC41LFxuXHR9O1xuXHRjb25zdCBzaGFkZXIgPSBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuXHRcdGZ1bmN0aW9uczoge1xuXHRcdFx0Li4udGdkQ29kZUZ1bmN0aW9uX3BhbGV0dGUoe1xuXHRcdFx0XHRhOiBbMC41MDIsIDAuNTAyLCAwLjUwMiwgMV0sXG5cdFx0XHRcdGI6IFswLjUwMiwgMC41MDIsIDAuNTAyLCAxXSxcblx0XHRcdFx0YzogWzEuMCwgMS4wLCAxLjAsIDFdLFxuXHRcdFx0XHRkOiBbMC4wLCAwLjMyOSwgMC42NzEsIDFdLFxuXHRcdFx0fSksXG5cdFx0XHQuLi50Z2RDb2RlRnVuY3Rpb25fZmJtKHsgb2N0YXZlczogNCwgRzogMC41IH0pLFxuXHRcdH0sXG5cdFx0dW5pZm9ybXM6IHtcblx0XHRcdHVuaUV4cG9uZW50OiBcImZsb2F0XCIsXG5cdFx0fSxcblx0XHRtYWluQ29kZTogW1xuXHRcdFx0XCJmbG9hdCBzY2FsZSA9IDIuMCArIDEuNSAqIHNpbih1bmlUaW1lICogLjIzKTtcIixcblx0XHRcdFwiZmxvYXQgaW5kZXggPSBmYm0odmVjMyhzY2FsZSAqIHZhclVWICsgdmVjMih1bmlUaW1lICogLjIsIDAuMCksIHVuaVRpbWUgKiAuMSkpO1wiLFxuXHRcdFx0XCJ2ZWM0IGNvbG9yID0gcGFsZXR0ZShpbmRleCk7XCIsXG5cdFx0XHRcImZsb2F0IGxpZ2h0ID0gcG93KGRvdChjb2xvciwgY29sb3IpLCB1bmlFeHBvbmVudCk7XCIsXG5cdFx0XHRcIkZyYWdDb2xvciA9IGNvbG9yICogdmVjNCh2ZWMzKGxpZ2h0KSwgMS4wKTtcIixcblx0XHRdLFxuXHR9KTtcblx0c2hhZGVyLmRlYnVnKCk7XG5cdGNvbnRleHQuYWRkKFxuXHRcdG5ldyBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIoY29udGV4dCwge1xuXHRcdFx0c2hhZGVyLFxuXHRcdFx0c2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfSkgPT4ge1xuXHRcdFx0XHRwcm9ncmFtLnVuaWZvcm0xZihcInVuaUV4cG9uZW50XCIsIHVuaWZvcm1zLnVuaUV4cG9uZW50KTtcblx0XHRcdH0sXG5cdFx0fSksXG5cdCk7XG5cdGNvbnRleHQucGxheSgpO1xuXHRyZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG5cdFx0dW5pZm9ybXMudW5pRXhwb25lbnQgPSBzZXR0aW5ncy51bmlFeHBvbmVudDtcblx0fTtcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdHNldHRpbmdzPXt7XG5cdFx0XHRcdHVuaUV4cG9uZW50OiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwidW5pRXhwb25lbnRcIixcblx0XHRcdFx0XHRtaW46IC0xMCxcblx0XHRcdFx0XHRtYXg6IDEwLFxuXHRcdFx0XHRcdHN0ZXA6IDAuMDIsXG5cdFx0XHRcdFx0dmFsdWU6IDAuNSxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQ29kZUZ1bmN0aW9uX2ZibSIsInRnZENvZGVGdW5jdGlvbl9wYWxldHRlIiwiVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyIiwiVGdkU2hhZGVyRnJhZ21lbnQiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJ1bmlmb3JtcyIsInNoYWRlciIsInNldFVuaWZvcm1zIiwicHJvZ3JhbSIsInNldHRpbmdzIl0sIm1hcHBpbmdzIjoiOzs7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