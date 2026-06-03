"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_fragment-shader_flame_page_mdx-src_components_demo_CodeViewer_CodeVi-a69d15"], {
54972(module) {
module.exports = "data:image/webp;base64,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";

},
72302(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(37356);
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
    "Detail #1": 'function init(context: TgdContext, assets: Assets) {\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.flame)\n    const shader = new TgdShaderFragment({\n        functions: {\n            ...tgdCodeFunction_fbm({ octaves: 3, G: 0.5 }),\n        },\n        uniforms: {\n            uniTexture: "sampler2D",\n        },\n        mainCode: [\n            "float shift = fbm(vec3(varUV.x, varUV.y + uniTime, uniTime * .01));",\n            "shift -= .0;",\n            "shift *= .25 * (1.0 - varUV.y);",\n            "vec4 color = texture(uniTexture, varUV + vec2(shift, 0.0));",\n            "FragColor = vec4(color.rgb * color.a, 1.0);",\n        ],\n    })\n    shader.debug()\n    context.add(\n        new TgdPainterFragmentShader(context, {\n            shader,\n            setUniforms: ({ program }) => {\n                texture.activate(0, program, "uniTexture")\n            },\n        }),\n    )\n    context.play()\n    return (settings: Record<string, number>) => {\n        console.log("🐞 [main.demo@34] settings =", settings) // @FIXME: Remove this line written on 2025-12-15 at 17:20\n    }\n}'
};
var FULL = 'import {\n    tgdCodeFunction_fbm,\n    type TgdContext,\n    TgdPainterFragmentShader,\n    TgdShaderFragment,\n    TgdTexture2D,\n} from "@tolokoban/tgd"\n\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport FlameURL from "./flame.webp"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.flame)\n    const shader = new TgdShaderFragment({\n        functions: {\n            ...tgdCodeFunction_fbm({ octaves: 3, G: 0.5 }),\n        },\n        uniforms: {\n            uniTexture: "sampler2D",\n        },\n        mainCode: [\n            "float shift = fbm(vec3(varUV.x, varUV.y + uniTime, uniTime * .01));",\n            "shift -= .0;",\n            "shift *= .25 * (1.0 - varUV.y);",\n            "vec4 color = texture(uniTexture, varUV + vec2(shift, 0.0));",\n            "FragColor = vec4(color.rgb * color.a, 1.0);",\n        ],\n    })\n    shader.debug()\n    context.add(\n        new TgdPainterFragmentShader(context, {\n            shader,\n            setUniforms: ({ program }) => {\n                texture.activate(0, program, "uniTexture")\n            },\n        }),\n    )\n    context.play()\n    return (settings: Record<string, number>) => {\n        console.log("🐞 [main.demo@34] settings =", settings) // @FIXME: Remove this line written on 2025-12-15 at 17:20\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            options={{ alpha: false }}\n            assets={{\n                image: {\n                    flame: FlameURL,\n                },\n            }}\n            onReady={init}\n            settings={{\n                exponent: {\n                    label: "uniExponent",\n                    min: 0,\n                    max: 1,\n                    value: 0.5,\n                },\n            }}\n        />\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/_/main.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/_/main.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
37356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _flame_webp__rspack_import_3 = __webpack_require__(54972);
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
function init(context, assets) {
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.flame);
    var shader = new _tolokoban_tgd__rspack_import_1.TgdShaderFragment({
        functions: _object_spread({}, (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_fbm)({
            octaves: 3,
            G: 0.5
        })),
        uniforms: {
            uniTexture: "sampler2D"
        },
        mainCode: [
            "float shift = fbm(vec3(varUV.x, varUV.y + uniTime, uniTime * .01));",
            "shift -= .0;",
            "shift *= .25 * (1.0 - varUV.y);",
            "vec4 color = texture(uniTexture, varUV + vec2(shift, 0.0));",
            "FragColor = vec4(color.rgb * color.a, 1.0);"
        ]
    });
    shader.debug();
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterFragmentShader(context, {
        shader: shader,
        setUniforms: function setUniforms(param) {
            var program = param.program;
            texture.activate(0, program, "uniTexture");
        }
    }));
    context.play();
    return function(settings) {
        console.log("🐞 [main.demo@34] settings =", settings); // @FIXME: Remove this line written on 2025-12-15 at 17:20
    };
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        options: {
            alpha: false
        },
        assets: {
            image: {
                flame: _flame_webp__rspack_import_3
            }
        },
        onReady: init,
        settings: {
            exponent: {
                label: "uniExponent",
                min: 0,
                max: 1,
                value: 0.5
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/_/main.demo/main.demo.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, this);
}


},
86153(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(72302);
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
                children: "Flame"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFnbWVudC1zaGFkZXJfZmxhbWVfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaS1hNjlkMTUuZGI5NGNiNDlkN2NlZTgwNC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYWdtZW50LXNoYWRlci9mbGFtZS9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZnJhZ21lbnQtc2hhZGVyL2ZsYW1lL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZnJhZ21lbnQtc2hhZGVyL2ZsYW1lL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIjtcblxuY29uc3QgRk9DVVMgPSB7XG5cdFwiRGV0YWlsICMxXCI6XG5cdFx0J2Z1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuZmxhbWUpXFxuICAgIGNvbnN0IHNoYWRlciA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuICAgICAgICBmdW5jdGlvbnM6IHtcXG4gICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fZmJtKHsgb2N0YXZlczogMywgRzogMC41IH0pLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgdW5pVGV4dHVyZTogXCJzYW1wbGVyMkRcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgIFwiZmxvYXQgc2hpZnQgPSBmYm0odmVjMyh2YXJVVi54LCB2YXJVVi55ICsgdW5pVGltZSwgdW5pVGltZSAqIC4wMSkpO1wiLFxcbiAgICAgICAgICAgIFwic2hpZnQgLT0gLjA7XCIsXFxuICAgICAgICAgICAgXCJzaGlmdCAqPSAuMjUgKiAoMS4wIC0gdmFyVVYueSk7XCIsXFxuICAgICAgICAgICAgXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVViArIHZlYzIoc2hpZnQsIDAuMCkpO1wiLFxcbiAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gdmVjNChjb2xvci5yZ2IgKiBjb2xvci5hLCAxLjApO1wiLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgc2hhZGVyLmRlYnVnKClcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBzaGFkZXIsXFxuICAgICAgICAgICAgc2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmFjdGl2YXRlKDAsIHByb2dyYW0sIFwidW5pVGV4dHVyZVwiKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICByZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XFxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0AzNF0gc2V0dGluZ3MgPVwiLCBzZXR0aW5ncykgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNS0xMi0xNSBhdCAxNzoyMFxcbiAgICB9XFxufScsXG59O1xuY29uc3QgRlVMTCA9XG5cdCdpbXBvcnQge1xcbiAgICB0Z2RDb2RlRnVuY3Rpb25fZmJtLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcixcXG4gICAgVGdkU2hhZGVyRnJhZ21lbnQsXFxuICAgIFRnZFRleHR1cmUyRCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5cXG5pbXBvcnQgRmxhbWVVUkwgZnJvbSBcIi4vZmxhbWUud2VicFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5mbGFtZSlcXG4gICAgY29uc3Qgc2hhZGVyID0gbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcXG4gICAgICAgIGZ1bmN0aW9uczoge1xcbiAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9mYm0oeyBvY3RhdmVzOiAzLCBHOiAwLjUgfSksXFxuICAgICAgICB9LFxcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlUZXh0dXJlOiBcInNhbXBsZXIyRFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgXCJmbG9hdCBzaGlmdCA9IGZibSh2ZWMzKHZhclVWLngsIHZhclVWLnkgKyB1bmlUaW1lLCB1bmlUaW1lICogLjAxKSk7XCIsXFxuICAgICAgICAgICAgXCJzaGlmdCAtPSAuMDtcIixcXG4gICAgICAgICAgICBcInNoaWZ0ICo9IC4yNSAqICgxLjAgLSB2YXJVVi55KTtcIixcXG4gICAgICAgICAgICBcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWICsgdmVjMihzaGlmdCwgMC4wKSk7XCIsXFxuICAgICAgICAgICAgXCJGcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLnJnYiAqIGNvbG9yLmEsIDEuMCk7XCIsXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBzaGFkZXIuZGVidWcoKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIHNoYWRlcixcXG4gICAgICAgICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRleHR1cmUuYWN0aXZhdGUoMCwgcHJvZ3JhbSwgXCJ1bmlUZXh0dXJlXCIpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+QniBbbWFpbi5kZW1vQDM0XSBzZXR0aW5ncyA9XCIsIHNldHRpbmdzKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI1LTEyLTE1IGF0IDE3OjIwXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIGZsYW1lOiBGbGFtZVVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcXG4gICAgICAgICAgICAgICAgZXhwb25lbnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInVuaUV4cG9uZW50XCIsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDEsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMC41LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG5cdGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cblx0XHRcdFx0PERlbW8gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuXHRcdFx0XHRcdFx0e2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiaW1wb3J0IHtcblx0dGdkQ29kZUZ1bmN0aW9uX2ZibSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIsXG5cdFRnZFNoYWRlckZyYWdtZW50LFxuXHRUZ2RUZXh0dXJlMkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IEZsYW1lVVJMIGZyb20gXCIuL2ZsYW1lLndlYnBcIjtcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmZsYW1lKTtcblx0Y29uc3Qgc2hhZGVyID0gbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcblx0XHRmdW5jdGlvbnM6IHtcblx0XHRcdC4uLnRnZENvZGVGdW5jdGlvbl9mYm0oeyBvY3RhdmVzOiAzLCBHOiAwLjUgfSksXG5cdFx0fSxcblx0XHR1bmlmb3Jtczoge1xuXHRcdFx0dW5pVGV4dHVyZTogXCJzYW1wbGVyMkRcIixcblx0XHR9LFxuXHRcdG1haW5Db2RlOiBbXG5cdFx0XHRcImZsb2F0IHNoaWZ0ID0gZmJtKHZlYzModmFyVVYueCwgdmFyVVYueSArIHVuaVRpbWUsIHVuaVRpbWUgKiAuMDEpKTtcIixcblx0XHRcdFwic2hpZnQgLT0gLjA7XCIsXG5cdFx0XHRcInNoaWZ0ICo9IC4yNSAqICgxLjAgLSB2YXJVVi55KTtcIixcblx0XHRcdFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYgKyB2ZWMyKHNoaWZ0LCAwLjApKTtcIixcblx0XHRcdFwiRnJhZ0NvbG9yID0gdmVjNChjb2xvci5yZ2IgKiBjb2xvci5hLCAxLjApO1wiLFxuXHRcdF0sXG5cdH0pO1xuXHRzaGFkZXIuZGVidWcoKTtcblx0Y29udGV4dC5hZGQoXG5cdFx0bmV3IFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcihjb250ZXh0LCB7XG5cdFx0XHRzaGFkZXIsXG5cdFx0XHRzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9KSA9PiB7XG5cdFx0XHRcdHRleHR1cmUuYWN0aXZhdGUoMCwgcHJvZ3JhbSwgXCJ1bmlUZXh0dXJlXCIpO1xuXHRcdFx0fSxcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wbGF5KCk7XG5cdHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcblx0XHRjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0AzNF0gc2V0dGluZ3MgPVwiLCBzZXR0aW5ncyk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjUtMTItMTUgYXQgMTc6MjBcblx0fTtcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRpbWFnZToge1xuXHRcdFx0XHRcdGZsYW1lOiBGbGFtZVVSTCxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0c2V0dGluZ3M9e3tcblx0XHRcdFx0ZXhwb25lbnQ6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJ1bmlFeHBvbmVudFwiLFxuXHRcdFx0XHRcdG1pbjogMCxcblx0XHRcdFx0XHRtYXg6IDEsXG5cdFx0XHRcdFx0dmFsdWU6IDAuNSxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQ29kZUZ1bmN0aW9uX2ZibSIsIlRnZFBhaW50ZXJGcmFnbWVudFNoYWRlciIsIlRnZFNoYWRlckZyYWdtZW50IiwiVGdkVGV4dHVyZTJEIiwiVmlldyIsIkZsYW1lVVJMIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJ0ZXh0dXJlIiwic2hhZGVyIiwic2V0VW5pZm9ybXMiLCJwcm9ncmFtIiwic2V0dGluZ3MiLCJjb25zb2xl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