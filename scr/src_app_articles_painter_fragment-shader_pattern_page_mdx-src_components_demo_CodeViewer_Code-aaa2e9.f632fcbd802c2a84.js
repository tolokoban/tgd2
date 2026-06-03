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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/_/main.demo/main.demo.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/pattern/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/pattern/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/pattern/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/pattern/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/pattern/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFnbWVudC1zaGFkZXJfcGF0dGVybl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZS1hYWEyZTkuZjYzMmZjYmQ4MDJjMmE4NC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYWdtZW50LXNoYWRlci9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZnJhZ21lbnQtc2hhZGVyL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZnJhZ21lbnQtc2hhZGVyL3BhdHRlcm4vcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG5cXHRjb25zdCB1bmlmb3JtcyA9IHtcXG5cXHRcXHR1bmlFeHBvbmVudDogMC41LFxcblxcdH07XFxuXFx0Y29uc3Qgc2hhZGVyID0gbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcXG5cXHRcXHRmdW5jdGlvbnM6IHtcXG5cXHRcXHRcXHQuLi50Z2RDb2RlRnVuY3Rpb25fcGFsZXR0ZSh7XFxuXFx0XFx0XFx0XFx0YTogWzAuNTAyLCAwLjUwMiwgMC41MDIsIDFdLFxcblxcdFxcdFxcdFxcdGI6IFswLjUwMiwgMC41MDIsIDAuNTAyLCAxXSxcXG5cXHRcXHRcXHRcXHRjOiBbMS4wLCAxLjAsIDEuMCwgMV0sXFxuXFx0XFx0XFx0XFx0ZDogWzAuMCwgMC4zMjksIDAuNjcxLCAxXSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHQuLi50Z2RDb2RlRnVuY3Rpb25fZmJtKHsgb2N0YXZlczogNCwgRzogMC41IH0pLFxcblxcdFxcdH0sXFxuXFx0XFx0dW5pZm9ybXM6IHtcXG5cXHRcXHRcXHR1bmlFeHBvbmVudDogXFxcImZsb2F0XFxcIixcXG5cXHRcXHR9LFxcblxcdFxcdG1haW5Db2RlOiBbXFxuXFx0XFx0XFx0XFxcImZsb2F0IHNjYWxlID0gMi4wICsgMS41ICogc2luKHVuaVRpbWUgKiAuMjMpO1xcXCIsXFxuXFx0XFx0XFx0XFxcImZsb2F0IGluZGV4ID0gZmJtKHZlYzMoc2NhbGUgKiB2YXJVViArIHZlYzIodW5pVGltZSAqIC4yLCAwLjApLCB1bmlUaW1lICogLjEpKTtcXFwiLFxcblxcdFxcdFxcdFxcXCJ2ZWM0IGNvbG9yID0gcGFsZXR0ZShpbmRleCk7XFxcIixcXG5cXHRcXHRcXHRcXFwiZmxvYXQgbGlnaHQgPSBwb3coZG90KGNvbG9yLCBjb2xvciksIHVuaUV4cG9uZW50KTtcXFwiLFxcblxcdFxcdFxcdFxcXCJGcmFnQ29sb3IgPSBjb2xvciAqIHZlYzQodmVjMyhsaWdodCksIDEuMCk7XFxcIixcXG5cXHRcXHRdLFxcblxcdH0pO1xcblxcdHNoYWRlci5kZWJ1ZygpO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdG5ldyBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIoY29udGV4dCwge1xcblxcdFxcdFxcdHNoYWRlcixcXG5cXHRcXHRcXHRzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9KSA9PiB7XFxuXFx0XFx0XFx0XFx0cHJvZ3JhbS51bmlmb3JtMWYoXFxcInVuaUV4cG9uZW50XFxcIiwgdW5pZm9ybXMudW5pRXhwb25lbnQpO1xcblxcdFxcdFxcdH0sXFxuXFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjb250ZXh0LnBsYXkoKTtcXG5cXHRyZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XFxuXFx0XFx0dW5pZm9ybXMudW5pRXhwb25lbnQgPSBzZXR0aW5ncy51bmlFeHBvbmVudDtcXG5cXHR9O1xcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dGdkQ29kZUZ1bmN0aW9uX2ZibSxcXG5cXHR0Z2RDb2RlRnVuY3Rpb25fcGFsZXR0ZSxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkUGFpbnRlckZyYWdtZW50U2hhZGVyLFxcblxcdFRnZFNoYWRlckZyYWdtZW50LFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcblxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuXFx0Y29uc3QgdW5pZm9ybXMgPSB7XFxuXFx0XFx0dW5pRXhwb25lbnQ6IDAuNSxcXG5cXHR9O1xcblxcdGNvbnN0IHNoYWRlciA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuXFx0XFx0ZnVuY3Rpb25zOiB7XFxuXFx0XFx0XFx0Li4udGdkQ29kZUZ1bmN0aW9uX3BhbGV0dGUoe1xcblxcdFxcdFxcdFxcdGE6IFswLjUwMiwgMC41MDIsIDAuNTAyLCAxXSxcXG5cXHRcXHRcXHRcXHRiOiBbMC41MDIsIDAuNTAyLCAwLjUwMiwgMV0sXFxuXFx0XFx0XFx0XFx0YzogWzEuMCwgMS4wLCAxLjAsIDFdLFxcblxcdFxcdFxcdFxcdGQ6IFswLjAsIDAuMzI5LCAwLjY3MSwgMV0sXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0Li4udGdkQ29kZUZ1bmN0aW9uX2ZibSh7IG9jdGF2ZXM6IDQsIEc6IDAuNSB9KSxcXG5cXHRcXHR9LFxcblxcdFxcdHVuaWZvcm1zOiB7XFxuXFx0XFx0XFx0dW5pRXhwb25lbnQ6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0fSxcXG5cXHRcXHRtYWluQ29kZTogW1xcblxcdFxcdFxcdFxcXCJmbG9hdCBzY2FsZSA9IDIuMCArIDEuNSAqIHNpbih1bmlUaW1lICogLjIzKTtcXFwiLFxcblxcdFxcdFxcdFxcXCJmbG9hdCBpbmRleCA9IGZibSh2ZWMzKHNjYWxlICogdmFyVVYgKyB2ZWMyKHVuaVRpbWUgKiAuMiwgMC4wKSwgdW5pVGltZSAqIC4xKSk7XFxcIixcXG5cXHRcXHRcXHRcXFwidmVjNCBjb2xvciA9IHBhbGV0dGUoaW5kZXgpO1xcXCIsXFxuXFx0XFx0XFx0XFxcImZsb2F0IGxpZ2h0ID0gcG93KGRvdChjb2xvciwgY29sb3IpLCB1bmlFeHBvbmVudCk7XFxcIixcXG5cXHRcXHRcXHRcXFwiRnJhZ0NvbG9yID0gY29sb3IgKiB2ZWM0KHZlYzMobGlnaHQpLCAxLjApO1xcXCIsXFxuXFx0XFx0XSxcXG5cXHR9KTtcXG5cXHRzaGFkZXIuZGVidWcoKTtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRzaGFkZXIsXFxuXFx0XFx0XFx0c2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfSkgPT4ge1xcblxcdFxcdFxcdFxcdHByb2dyYW0udW5pZm9ybTFmKFxcXCJ1bmlFeHBvbmVudFxcXCIsIHVuaWZvcm1zLnVuaUV4cG9uZW50KTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29udGV4dC5wbGF5KCk7XFxuXFx0cmV0dXJuIChzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xcblxcdFxcdHVuaWZvcm1zLnVuaUV4cG9uZW50ID0gc2V0dGluZ3MudW5pRXhwb25lbnQ7XFxuXFx0fTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRzZXR0aW5ncz17e1xcblxcdFxcdFxcdFxcdHVuaUV4cG9uZW50OiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJ1bmlFeHBvbmVudFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAtMTAsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiAxMCxcXG5cXHRcXHRcXHRcXHRcXHRzdGVwOiAwLjAyLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAwLjUsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KTtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdHRnZENvZGVGdW5jdGlvbl9mYm0sXG5cdHRnZENvZGVGdW5jdGlvbl9wYWxldHRlLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcixcblx0VGdkU2hhZGVyRnJhZ21lbnQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG5cdGNvbnN0IHVuaWZvcm1zID0ge1xuXHRcdHVuaUV4cG9uZW50OiAwLjUsXG5cdH07XG5cdGNvbnN0IHNoYWRlciA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG5cdFx0ZnVuY3Rpb25zOiB7XG5cdFx0XHQuLi50Z2RDb2RlRnVuY3Rpb25fcGFsZXR0ZSh7XG5cdFx0XHRcdGE6IFswLjUwMiwgMC41MDIsIDAuNTAyLCAxXSxcblx0XHRcdFx0YjogWzAuNTAyLCAwLjUwMiwgMC41MDIsIDFdLFxuXHRcdFx0XHRjOiBbMS4wLCAxLjAsIDEuMCwgMV0sXG5cdFx0XHRcdGQ6IFswLjAsIDAuMzI5LCAwLjY3MSwgMV0sXG5cdFx0XHR9KSxcblx0XHRcdC4uLnRnZENvZGVGdW5jdGlvbl9mYm0oeyBvY3RhdmVzOiA0LCBHOiAwLjUgfSksXG5cdFx0fSxcblx0XHR1bmlmb3Jtczoge1xuXHRcdFx0dW5pRXhwb25lbnQ6IFwiZmxvYXRcIixcblx0XHR9LFxuXHRcdG1haW5Db2RlOiBbXG5cdFx0XHRcImZsb2F0IHNjYWxlID0gMi4wICsgMS41ICogc2luKHVuaVRpbWUgKiAuMjMpO1wiLFxuXHRcdFx0XCJmbG9hdCBpbmRleCA9IGZibSh2ZWMzKHNjYWxlICogdmFyVVYgKyB2ZWMyKHVuaVRpbWUgKiAuMiwgMC4wKSwgdW5pVGltZSAqIC4xKSk7XCIsXG5cdFx0XHRcInZlYzQgY29sb3IgPSBwYWxldHRlKGluZGV4KTtcIixcblx0XHRcdFwiZmxvYXQgbGlnaHQgPSBwb3coZG90KGNvbG9yLCBjb2xvciksIHVuaUV4cG9uZW50KTtcIixcblx0XHRcdFwiRnJhZ0NvbG9yID0gY29sb3IgKiB2ZWM0KHZlYzMobGlnaHQpLCAxLjApO1wiLFxuXHRcdF0sXG5cdH0pO1xuXHRzaGFkZXIuZGVidWcoKTtcblx0Y29udGV4dC5hZGQoXG5cdFx0bmV3IFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcihjb250ZXh0LCB7XG5cdFx0XHRzaGFkZXIsXG5cdFx0XHRzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9KSA9PiB7XG5cdFx0XHRcdHByb2dyYW0udW5pZm9ybTFmKFwidW5pRXhwb25lbnRcIiwgdW5pZm9ybXMudW5pRXhwb25lbnQpO1xuXHRcdFx0fSxcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wbGF5KCk7XG5cdHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcblx0XHR1bmlmb3Jtcy51bmlFeHBvbmVudCA9IHNldHRpbmdzLnVuaUV4cG9uZW50O1xuXHR9O1xufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0c2V0dGluZ3M9e3tcblx0XHRcdFx0dW5pRXhwb25lbnQ6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJ1bmlFeHBvbmVudFwiLFxuXHRcdFx0XHRcdG1pbjogLTEwLFxuXHRcdFx0XHRcdG1heDogMTAsXG5cdFx0XHRcdFx0c3RlcDogMC4wMixcblx0XHRcdFx0XHR2YWx1ZTogMC41LFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDb2RlRnVuY3Rpb25fZmJtIiwidGdkQ29kZUZ1bmN0aW9uX3BhbGV0dGUiLCJUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIiLCJUZ2RTaGFkZXJGcmFnbWVudCIsIlZpZXciLCJpbml0IiwiY29udGV4dCIsInVuaWZvcm1zIiwic2hhZGVyIiwic2V0VW5pZm9ybXMiLCJwcm9ncmFtIiwic2V0dGluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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