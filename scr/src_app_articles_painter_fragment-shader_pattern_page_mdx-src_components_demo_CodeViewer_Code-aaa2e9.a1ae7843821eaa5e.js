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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFnbWVudC1zaGFkZXJfcGF0dGVybl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZS1hYWEyZTkuYTFhZTc4NDM4MjFlYWE1ZS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYWdtZW50LXNoYWRlci9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZnJhZ21lbnQtc2hhZGVyL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZnJhZ21lbnQtc2hhZGVyL3BhdHRlcm4vcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgdW5pZm9ybXMgPSB7XFxuICAgICAgICB1bmlFeHBvbmVudDogMC41LFxcbiAgICB9XFxuICAgIGNvbnN0IHNoYWRlciA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuICAgICAgICBmdW5jdGlvbnM6IHtcXG4gICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGFsZXR0ZSh7XFxuICAgICAgICAgICAgICAgIGE6IFswLjUwMiwgMC41MDIsIDAuNTAyLCAxXSxcXG4gICAgICAgICAgICAgICAgYjogWzAuNTAyLCAwLjUwMiwgMC41MDIsIDFdLFxcbiAgICAgICAgICAgICAgICBjOiBbMS4wLCAxLjAsIDEuMCwgMV0sXFxuICAgICAgICAgICAgICAgIGQ6IFswLjAsIDAuMzI5LCAwLjY3MSwgMV0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX2ZibSh7IG9jdGF2ZXM6IDQsIEc6IDAuNSB9KSxcXG4gICAgICAgIH0sXFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaUV4cG9uZW50OiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgXFxcImZsb2F0IHNjYWxlID0gMi4wICsgMS41ICogc2luKHVuaVRpbWUgKiAuMjMpO1xcXCIsXFxuICAgICAgICAgICAgXFxcImZsb2F0IGluZGV4ID0gZmJtKHZlYzMoc2NhbGUgKiB2YXJVViArIHZlYzIodW5pVGltZSAqIC4yLCAwLjApLCB1bmlUaW1lICogLjEpKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJ2ZWM0IGNvbG9yID0gcGFsZXR0ZShpbmRleCk7XFxcIixcXG4gICAgICAgICAgICBcXFwiZmxvYXQgbGlnaHQgPSBwb3coZG90KGNvbG9yLCBjb2xvciksIHVuaUV4cG9uZW50KTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSBjb2xvciAqIHZlYzQodmVjMyhsaWdodCksIDEuMCk7XFxcIixcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIHNoYWRlci5kZWJ1ZygpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgc2hhZGVyLFxcbiAgICAgICAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH0pID0+IHtcXG4gICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtMWYoXFxcInVuaUV4cG9uZW50XFxcIiwgdW5pZm9ybXMudW5pRXhwb25lbnQpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcXG4gICAgICAgIHVuaWZvcm1zLnVuaUV4cG9uZW50ID0gc2V0dGluZ3MudW5pRXhwb25lbnRcXG4gICAgfVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHRnZENvZGVGdW5jdGlvbl9mYm0sXFxuICAgIHRnZENvZGVGdW5jdGlvbl9wYWxldHRlLFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIsXFxuICAgIFRnZFNoYWRlckZyYWdtZW50LFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcbiAgICBjb25zdCB1bmlmb3JtcyA9IHtcXG4gICAgICAgIHVuaUV4cG9uZW50OiAwLjUsXFxuICAgIH1cXG4gICAgY29uc3Qgc2hhZGVyID0gbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcXG4gICAgICAgIGZ1bmN0aW9uczoge1xcbiAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wYWxldHRlKHtcXG4gICAgICAgICAgICAgICAgYTogWzAuNTAyLCAwLjUwMiwgMC41MDIsIDFdLFxcbiAgICAgICAgICAgICAgICBiOiBbMC41MDIsIDAuNTAyLCAwLjUwMiwgMV0sXFxuICAgICAgICAgICAgICAgIGM6IFsxLjAsIDEuMCwgMS4wLCAxXSxcXG4gICAgICAgICAgICAgICAgZDogWzAuMCwgMC4zMjksIDAuNjcxLCAxXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fZmJtKHsgb2N0YXZlczogNCwgRzogMC41IH0pLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgdW5pRXhwb25lbnQ6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgbWFpbkNvZGU6IFtcXG4gICAgICAgICAgICBcXFwiZmxvYXQgc2NhbGUgPSAyLjAgKyAxLjUgKiBzaW4odW5pVGltZSAqIC4yMyk7XFxcIixcXG4gICAgICAgICAgICBcXFwiZmxvYXQgaW5kZXggPSBmYm0odmVjMyhzY2FsZSAqIHZhclVWICsgdmVjMih1bmlUaW1lICogLjIsIDAuMCksIHVuaVRpbWUgKiAuMSkpO1xcXCIsXFxuICAgICAgICAgICAgXFxcInZlYzQgY29sb3IgPSBwYWxldHRlKGluZGV4KTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJmbG9hdCBsaWdodCA9IHBvdyhkb3QoY29sb3IsIGNvbG9yKSwgdW5pRXhwb25lbnQpO1xcXCIsXFxuICAgICAgICAgICAgXFxcIkZyYWdDb2xvciA9IGNvbG9yICogdmVjNCh2ZWMzKGxpZ2h0KSwgMS4wKTtcXFwiLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgc2hhZGVyLmRlYnVnKClcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBzaGFkZXIsXFxuICAgICAgICAgICAgc2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfSkgPT4ge1xcbiAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcXFwidW5pRXhwb25lbnRcXFwiLCB1bmlmb3Jtcy51bmlFeHBvbmVudClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG4gICAgcmV0dXJuIChzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xcbiAgICAgICAgdW5pZm9ybXMudW5pRXhwb25lbnQgPSBzZXR0aW5ncy51bmlFeHBvbmVudFxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcXG4gICAgICAgICAgICAgICAgdW5pRXhwb25lbnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcXFwidW5pRXhwb25lbnRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMTAsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDEwLFxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogMC4wMixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwLjUsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdGdkQ29kZUZ1bmN0aW9uX2ZibSxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fcGFsZXR0ZSxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcixcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgY29uc3QgdW5pZm9ybXMgPSB7XG4gICAgICAgIHVuaUV4cG9uZW50OiAwLjUsXG4gICAgfVxuICAgIGNvbnN0IHNoYWRlciA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG4gICAgICAgIGZ1bmN0aW9uczoge1xuICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX3BhbGV0dGUoe1xuICAgICAgICAgICAgICAgIGE6IFswLjUwMiwgMC41MDIsIDAuNTAyLCAxXSxcbiAgICAgICAgICAgICAgICBiOiBbMC41MDIsIDAuNTAyLCAwLjUwMiwgMV0sXG4gICAgICAgICAgICAgICAgYzogWzEuMCwgMS4wLCAxLjAsIDFdLFxuICAgICAgICAgICAgICAgIGQ6IFswLjAsIDAuMzI5LCAwLjY3MSwgMV0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9mYm0oeyBvY3RhdmVzOiA0LCBHOiAwLjUgfSksXG4gICAgICAgIH0sXG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICB1bmlFeHBvbmVudDogXCJmbG9hdFwiLFxuICAgICAgICB9LFxuICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgXCJmbG9hdCBzY2FsZSA9IDIuMCArIDEuNSAqIHNpbih1bmlUaW1lICogLjIzKTtcIixcbiAgICAgICAgICAgIFwiZmxvYXQgaW5kZXggPSBmYm0odmVjMyhzY2FsZSAqIHZhclVWICsgdmVjMih1bmlUaW1lICogLjIsIDAuMCksIHVuaVRpbWUgKiAuMSkpO1wiLFxuICAgICAgICAgICAgXCJ2ZWM0IGNvbG9yID0gcGFsZXR0ZShpbmRleCk7XCIsXG4gICAgICAgICAgICBcImZsb2F0IGxpZ2h0ID0gcG93KGRvdChjb2xvciwgY29sb3IpLCB1bmlFeHBvbmVudCk7XCIsXG4gICAgICAgICAgICBcIkZyYWdDb2xvciA9IGNvbG9yICogdmVjNCh2ZWMzKGxpZ2h0KSwgMS4wKTtcIixcbiAgICAgICAgXSxcbiAgICB9KVxuICAgIHNoYWRlci5kZWJ1ZygpXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIG5ldyBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIoY29udGV4dCwge1xuICAgICAgICAgICAgc2hhZGVyLFxuICAgICAgICAgICAgc2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfSkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFwidW5pRXhwb25lbnRcIiwgdW5pZm9ybXMudW5pRXhwb25lbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICByZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG4gICAgICAgIHVuaWZvcm1zLnVuaUV4cG9uZW50ID0gc2V0dGluZ3MudW5pRXhwb25lbnRcbiAgICB9XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBzZXR0aW5ncz17e1xuICAgICAgICAgICAgICAgIHVuaUV4cG9uZW50OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInVuaUV4cG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTEwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiAwLjAyLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMC41LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQ29kZUZ1bmN0aW9uX2ZibSIsInRnZENvZGVGdW5jdGlvbl9wYWxldHRlIiwiVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyIiwiVGdkU2hhZGVyRnJhZ21lbnQiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJ1bmlmb3JtcyIsInNoYWRlciIsInNldFVuaWZvcm1zIiwicHJvZ3JhbSIsInNldHRpbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQXV5QztBQUNsMEMsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osc0NBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUd0QyxrREFBQ04sdURBQVVBO3dCQUFDLFVB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