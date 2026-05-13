"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_filter_custom_page_mdx-src_components_demo_CodeViewer_CodeViewer_mod-a039be"], {
77276(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/marylin.a798ca8d93006b9f.webp";

},
11323(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _marylin_demo__rspack_import_4 = __webpack_require__(49310);
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
    "Detail #1": "    const texture = new TgdTexture2D(context).loadBitmap(tgdLoadImage(BackgroundURL))\n    const filter = new TgdFilter({\n        uniforms: {\n            uniTime: \"float\",\n            uniAspectRatio: \"float\",\n            uniAspectRatioInverse: \"float\",\n        },\n        setUniforms({ program, time }) {\n            program.uniform1f(\"uniTime\", time)\n            program.uniform1f(\"uniAspectRatio\", context.aspectRatio)\n            program.uniform1f(\"uniAspectRatioInverse\", context.aspectRatioInverse)\n        },\n        extraFunctions: {\n            ...tgdCodeFunction_uv2polar(),\n            ...tgdCodeFunction_polar2uv(),\n        },\n        fragmentShaderCode: [\n            \"vec2 polar = uv2polar(varUV);\",\n            \"float strength = sin(uniTime);\",\n            \"polar.y += strength * polar.x;\",\n            \"vec2 uv = polar2uv(polar);\",\n            \"FragColor = texture(uniTexture, uv);\",\n        ],\n    })\n    context.add(\n        new TgdPainterFilter(context, {\n            texture,\n            filters: [filter],\n        }),\n    )\n    context.play()"
};
var FULL = "import {\n    tgdCodeFunction_polar2uv,\n    tgdCodeFunction_uv2polar,\n    TgdContext,\n    TgdFilter,\n    tgdLoadImage,\n    TgdPainterFilter,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"../../../marylin.webp\"\n\nfunction init(context: TgdContext) {\n    const texture = new TgdTexture2D(context).loadBitmap(tgdLoadImage(BackgroundURL))\n    const filter = new TgdFilter({\n        uniforms: {\n            uniTime: \"float\",\n            uniAspectRatio: \"float\",\n            uniAspectRatioInverse: \"float\",\n        },\n        setUniforms({ program, time }) {\n            program.uniform1f(\"uniTime\", time)\n            program.uniform1f(\"uniAspectRatio\", context.aspectRatio)\n            program.uniform1f(\"uniAspectRatioInverse\", context.aspectRatioInverse)\n        },\n        extraFunctions: {\n            ...tgdCodeFunction_uv2polar(),\n            ...tgdCodeFunction_polar2uv(),\n        },\n        fragmentShaderCode: [\n            \"vec2 polar = uv2polar(varUV);\",\n            \"float strength = sin(uniTime);\",\n            \"polar.y += strength * polar.x;\",\n            \"vec2 uv = polar2uv(polar);\",\n            \"FragColor = texture(uniTexture, uv);\",\n        ],\n    })\n    context.add(\n        new TgdPainterFilter(context, {\n            texture,\n            filters: [filter],\n        }),\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} width=\"512px\" height=\"512px\" />\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marylin_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
49310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _marylin_webp__rspack_import_3 = __webpack_require__(77276);
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




function init(context) {
    // #begin
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdLoadImage)(_marylin_webp__rspack_import_3));
    var filter = new _tolokoban_tgd__rspack_import_1.TgdFilter({
        uniforms: {
            uniTime: "float",
            uniAspectRatio: "float",
            uniAspectRatioInverse: "float"
        },
        setUniforms: function setUniforms(param) {
            var program = param.program, time = param.time;
            program.uniform1f("uniTime", time);
            program.uniform1f("uniAspectRatio", context.aspectRatio);
            program.uniform1f("uniAspectRatioInverse", context.aspectRatioInverse);
        },
        extraFunctions: _object_spread({}, (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_uv2polar)(), (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_polar2uv)()),
        fragmentShaderCode: [
            "vec2 polar = uv2polar(varUV);",
            "float strength = sin(uniTime);",
            "polar.y += strength * polar.x;",
            "vec2 uv = polar2uv(polar);",
            "FragColor = texture(uniTexture, uv);"
        ]
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        texture: texture,
        filters: [
            filter
        ]
    }));
    context.play();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        width: "512px",
        height: "512px"
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/marylin.demo.tsx",
        lineNumber: 51,
        columnNumber: 12
    }, this);
}


},
97623(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _marylin_demo__rspack_import_1 = __webpack_require__(11323);
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
        h2: "h2",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterFilter.html",
                    children: "TgdPainterFilter"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#..",
                    children: "Back to the list of available filters"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                    lineNumber: 5,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: [
                    "Custom filter with ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdFilter.html",
                        children: "TgdFilter"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                        lineNumber: 7,
                        columnNumber: 23
                    }, this)
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "We want some kind of line art for Marylin. Everything dark enough will become\npart of a line, the rest will be discarded."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marylin_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9maWx0ZXJfY3VzdG9tX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZC1hMDM5YmUuMmU0MTIyZjBjZmI0NjY5YS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9jdXN0b20vXy9tYXJ5bGluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9jdXN0b20vXy9tYXJ5bGluLmRlbW8vbWFyeWxpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9maWx0ZXIvY3VzdG9tL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYXJ5bGluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAodGdkTG9hZEltYWdlKEJhY2tncm91bmRVUkwpKVxcbiAgICBjb25zdCBmaWx0ZXIgPSBuZXcgVGdkRmlsdGVyKHtcXG4gICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgdW5pVGltZTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICB1bmlBc3BlY3RSYXRpbzogXFxcImZsb2F0XFxcIixcXG4gICAgICAgICAgICB1bmlBc3BlY3RSYXRpb0ludmVyc2U6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0VW5pZm9ybXMoeyBwcm9ncmFtLCB0aW1lIH0pIHtcXG4gICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcXFwidW5pVGltZVxcXCIsIHRpbWUpXFxuICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtMWYoXFxcInVuaUFzcGVjdFJhdGlvXFxcIiwgY29udGV4dC5hc3BlY3RSYXRpbylcXG4gICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcXFwidW5pQXNwZWN0UmF0aW9JbnZlcnNlXFxcIiwgY29udGV4dC5hc3BlY3RSYXRpb0ludmVyc2UpXFxuICAgICAgICB9LFxcbiAgICAgICAgZXh0cmFGdW5jdGlvbnM6IHtcXG4gICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fdXYycG9sYXIoKSxcXG4gICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcG9sYXIydXYoKSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcXG4gICAgICAgICAgICBcXFwidmVjMiBwb2xhciA9IHV2MnBvbGFyKHZhclVWKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJmbG9hdCBzdHJlbmd0aCA9IHNpbih1bmlUaW1lKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJwb2xhci55ICs9IHN0cmVuZ3RoICogcG9sYXIueDtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJ2ZWMyIHV2ID0gcG9sYXIydXYocG9sYXIpO1xcXCIsXFxuICAgICAgICAgICAgXFxcIkZyYWdDb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgdXYpO1xcXCIsXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICB0ZXh0dXJlLFxcbiAgICAgICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJdLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHRnZENvZGVGdW5jdGlvbl9wb2xhcjJ1dixcXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyLFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RGaWx0ZXIsXFxuICAgIHRnZExvYWRJbWFnZSxcXG4gICAgVGdkUGFpbnRlckZpbHRlcixcXG4gICAgVGdkVGV4dHVyZTJELFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXFxcIi4uLy4uLy4uL21hcnlsaW4ud2VicFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcCh0Z2RMb2FkSW1hZ2UoQmFja2dyb3VuZFVSTCkpXFxuICAgIGNvbnN0IGZpbHRlciA9IG5ldyBUZ2RGaWx0ZXIoe1xcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlUaW1lOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgIHVuaUFzcGVjdFJhdGlvOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgICAgIHVuaUFzcGVjdFJhdGlvSW52ZXJzZTogXFxcImZsb2F0XFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVbmlmb3Jtcyh7IHByb2dyYW0sIHRpbWUgfSkge1xcbiAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFxcXCJ1bmlUaW1lXFxcIiwgdGltZSlcXG4gICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcXFwidW5pQXNwZWN0UmF0aW9cXFwiLCBjb250ZXh0LmFzcGVjdFJhdGlvKVxcbiAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFxcXCJ1bmlBc3BlY3RSYXRpb0ludmVyc2VcXFwiLCBjb250ZXh0LmFzcGVjdFJhdGlvSW52ZXJzZSlcXG4gICAgICAgIH0sXFxuICAgICAgICBleHRyYUZ1bmN0aW9uczoge1xcbiAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl91djJwb2xhcigpLFxcbiAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wb2xhcjJ1digpLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xcbiAgICAgICAgICAgIFxcXCJ2ZWMyIHBvbGFyID0gdXYycG9sYXIodmFyVVYpO1xcXCIsXFxuICAgICAgICAgICAgXFxcImZsb2F0IHN0cmVuZ3RoID0gc2luKHVuaVRpbWUpO1xcXCIsXFxuICAgICAgICAgICAgXFxcInBvbGFyLnkgKz0gc3RyZW5ndGggKiBwb2xhci54O1xcXCIsXFxuICAgICAgICAgICAgXFxcInZlYzIgdXYgPSBwb2xhcjJ1dihwb2xhcik7XFxcIixcXG4gICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB1dik7XFxcIixcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIHRleHR1cmUsXFxuICAgICAgICAgICAgZmlsdGVyczogW2ZpbHRlcl0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gd2lkdGg9XFxcIjUxMnB4XFxcIiBoZWlnaHQ9XFxcIjUxMnB4XFxcIiAvPlxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0Z2RDb2RlRnVuY3Rpb25fcG9sYXIydXYsXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkRmlsdGVyLFxuICAgIHRnZExvYWRJbWFnZSxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxuICAgIFRnZFRleHR1cmUyRCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFwiLi4vLi4vLi4vbWFyeWxpbi53ZWJwXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcCh0Z2RMb2FkSW1hZ2UoQmFja2dyb3VuZFVSTCkpXG4gICAgY29uc3QgZmlsdGVyID0gbmV3IFRnZEZpbHRlcih7XG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICB1bmlUaW1lOiBcImZsb2F0XCIsXG4gICAgICAgICAgICB1bmlBc3BlY3RSYXRpbzogXCJmbG9hdFwiLFxuICAgICAgICAgICAgdW5pQXNwZWN0UmF0aW9JbnZlcnNlOiBcImZsb2F0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNldFVuaWZvcm1zKHsgcHJvZ3JhbSwgdGltZSB9KSB7XG4gICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaVRpbWVcIiwgdGltZSlcbiAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFwidW5pQXNwZWN0UmF0aW9cIiwgY29udGV4dC5hc3BlY3RSYXRpbylcbiAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFwidW5pQXNwZWN0UmF0aW9JbnZlcnNlXCIsIGNvbnRleHQuYXNwZWN0UmF0aW9JbnZlcnNlKVxuICAgICAgICB9LFxuICAgICAgICBleHRyYUZ1bmN0aW9uczoge1xuICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyKCksXG4gICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcG9sYXIydXYoKSxcbiAgICAgICAgfSxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXG4gICAgICAgICAgICBcInZlYzIgcG9sYXIgPSB1djJwb2xhcih2YXJVVik7XCIsXG4gICAgICAgICAgICBcImZsb2F0IHN0cmVuZ3RoID0gc2luKHVuaVRpbWUpO1wiLFxuICAgICAgICAgICAgXCJwb2xhci55ICs9IHN0cmVuZ3RoICogcG9sYXIueDtcIixcbiAgICAgICAgICAgIFwidmVjMiB1diA9IHBvbGFyMnV2KHBvbGFyKTtcIixcbiAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB1dik7XCIsXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuICAgICAgICAgICAgdGV4dHVyZSxcbiAgICAgICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJdLFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IHdpZHRoPVwiNTEycHhcIiBoZWlnaHQ9XCI1MTJweFwiIC8+XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENvZGVGdW5jdGlvbl9wb2xhcjJ1diIsInRnZENvZGVGdW5jdGlvbl91djJwb2xhciIsIlRnZEZpbHRlciIsInRnZExvYWRJbWFnZSIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RUZXh0dXJlMkQiLCJWaWV3IiwiQmFja2dyb3VuZFVSTCIsImluaXQiLCJjb250ZXh0IiwidGV4dHVyZSIsImZpbHRlciIsInNldFVuaWZvcm1zIiwicGFyYW0iLCJwcm9ncmFtIiwidGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDcEI7QUFFakMsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBMmxDO0FBQ3RuQyxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSix5Q0FBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ2xE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