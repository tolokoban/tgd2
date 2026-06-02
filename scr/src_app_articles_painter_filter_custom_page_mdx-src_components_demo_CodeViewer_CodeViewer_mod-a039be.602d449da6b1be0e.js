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
    "Detail #1": '    const texture = new TgdTexture2D(context).loadBitmap(tgdLoadImage(BackgroundURL))\n    const filter = new TgdFilter({\n        uniforms: {\n            uniTime: "float",\n            uniAspectRatio: "float",\n            uniAspectRatioInverse: "float",\n        },\n        setUniforms({ program, time }) {\n            program.uniform1f("uniTime", time)\n            program.uniform1f("uniAspectRatio", context.aspectRatio)\n            program.uniform1f("uniAspectRatioInverse", context.aspectRatioInverse)\n        },\n        extraFunctions: {\n            ...tgdCodeFunction_uv2polar(),\n            ...tgdCodeFunction_polar2uv(),\n        },\n        fragmentShaderCode: [\n            "vec2 polar = uv2polar(varUV);",\n            "float strength = sin(uniTime);",\n            "polar.y += strength * polar.x;",\n            "vec2 uv = polar2uv(polar);",\n            "FragColor = texture(uniTexture, uv);",\n        ],\n    })\n    context.add(\n        new TgdPainterFilter(context, {\n            texture,\n            filters: [filter],\n        }),\n    )\n    context.play()'
};
var FULL = 'import {\n    tgdCodeFunction_polar2uv,\n    tgdCodeFunction_uv2polar,\n    type TgdContext,\n    TgdFilter,\n    tgdLoadImage,\n    TgdPainterFilter,\n    TgdTexture2D,\n} from "@tolokoban/tgd"\nimport View from "@/components/demo/Tgd"\n\nimport BackgroundURL from "../../../marylin.webp"\n\nfunction init(context: TgdContext) {\n    const texture = new TgdTexture2D(context).loadBitmap(tgdLoadImage(BackgroundURL))\n    const filter = new TgdFilter({\n        uniforms: {\n            uniTime: "float",\n            uniAspectRatio: "float",\n            uniAspectRatioInverse: "float",\n        },\n        setUniforms({ program, time }) {\n            program.uniform1f("uniTime", time)\n            program.uniform1f("uniAspectRatio", context.aspectRatio)\n            program.uniform1f("uniAspectRatioInverse", context.aspectRatioInverse)\n        },\n        extraFunctions: {\n            ...tgdCodeFunction_uv2polar(),\n            ...tgdCodeFunction_polar2uv(),\n        },\n        fragmentShaderCode: [\n            "vec2 polar = uv2polar(varUV);",\n            "float strength = sin(uniTime);",\n            "polar.y += strength * polar.x;",\n            "vec2 uv = polar2uv(polar);",\n            "FragColor = texture(uniTexture, uv);",\n        ],\n    })\n    context.add(\n        new TgdPainterFilter(context, {\n            texture,\n            filters: [filter],\n        }),\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} width="512px" height="512px" />\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marylin_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/_/marylin.demo/marylin.demo.tsx",
        lineNumber: 53,
        columnNumber: 9
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#..",
                    children: "Back to the list of available filters"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                    lineNumber: 5,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                        lineNumber: 7,
                        columnNumber: 23
                    }, this)
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "We want some kind of line art for Marylin. Everything dark enough will become\npart of a line, the rest will be discarded."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marylin_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/custom/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9maWx0ZXJfY3VzdG9tX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZC1hMDM5YmUuNjAyZDQ0OWRhNmIxYmUwZS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9maWx0ZXIvY3VzdG9tL18vbWFyeWxpbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZmlsdGVyL2N1c3RvbS9fL21hcnlsaW4uZGVtby9tYXJ5bGluLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9maWx0ZXIvY3VzdG9tL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFyeWxpbi5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkRldGFpbCAjMVwiOlxuXHRcdCcgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcCh0Z2RMb2FkSW1hZ2UoQmFja2dyb3VuZFVSTCkpXFxuICAgIGNvbnN0IGZpbHRlciA9IG5ldyBUZ2RGaWx0ZXIoe1xcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlUaW1lOiBcImZsb2F0XCIsXFxuICAgICAgICAgICAgdW5pQXNwZWN0UmF0aW86IFwiZmxvYXRcIixcXG4gICAgICAgICAgICB1bmlBc3BlY3RSYXRpb0ludmVyc2U6IFwiZmxvYXRcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVbmlmb3Jtcyh7IHByb2dyYW0sIHRpbWUgfSkge1xcbiAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFwidW5pVGltZVwiLCB0aW1lKVxcbiAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFwidW5pQXNwZWN0UmF0aW9cIiwgY29udGV4dC5hc3BlY3RSYXRpbylcXG4gICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaUFzcGVjdFJhdGlvSW52ZXJzZVwiLCBjb250ZXh0LmFzcGVjdFJhdGlvSW52ZXJzZSlcXG4gICAgICAgIH0sXFxuICAgICAgICBleHRyYUZ1bmN0aW9uczoge1xcbiAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl91djJwb2xhcigpLFxcbiAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wb2xhcjJ1digpLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xcbiAgICAgICAgICAgIFwidmVjMiBwb2xhciA9IHV2MnBvbGFyKHZhclVWKTtcIixcXG4gICAgICAgICAgICBcImZsb2F0IHN0cmVuZ3RoID0gc2luKHVuaVRpbWUpO1wiLFxcbiAgICAgICAgICAgIFwicG9sYXIueSArPSBzdHJlbmd0aCAqIHBvbGFyLng7XCIsXFxuICAgICAgICAgICAgXCJ2ZWMyIHV2ID0gcG9sYXIydXYocG9sYXIpO1wiLFxcbiAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB1dik7XCIsXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICB0ZXh0dXJlLFxcbiAgICAgICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJdLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KCknLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IHtcXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3BvbGFyMnV2LFxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fdXYycG9sYXIsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkRmlsdGVyLFxcbiAgICB0Z2RMb2FkSW1hZ2UsXFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXFxuICAgIFRnZFRleHR1cmUyRCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXFxuXFxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIi4uLy4uLy4uL21hcnlsaW4ud2VicFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAodGdkTG9hZEltYWdlKEJhY2tncm91bmRVUkwpKVxcbiAgICBjb25zdCBmaWx0ZXIgPSBuZXcgVGdkRmlsdGVyKHtcXG4gICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgdW5pVGltZTogXCJmbG9hdFwiLFxcbiAgICAgICAgICAgIHVuaUFzcGVjdFJhdGlvOiBcImZsb2F0XCIsXFxuICAgICAgICAgICAgdW5pQXNwZWN0UmF0aW9JbnZlcnNlOiBcImZsb2F0XCIsXFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0VW5pZm9ybXMoeyBwcm9ncmFtLCB0aW1lIH0pIHtcXG4gICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaVRpbWVcIiwgdGltZSlcXG4gICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaUFzcGVjdFJhdGlvXCIsIGNvbnRleHQuYXNwZWN0UmF0aW8pXFxuICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtMWYoXCJ1bmlBc3BlY3RSYXRpb0ludmVyc2VcIiwgY29udGV4dC5hc3BlY3RSYXRpb0ludmVyc2UpXFxuICAgICAgICB9LFxcbiAgICAgICAgZXh0cmFGdW5jdGlvbnM6IHtcXG4gICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fdXYycG9sYXIoKSxcXG4gICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcG9sYXIydXYoKSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcXG4gICAgICAgICAgICBcInZlYzIgcG9sYXIgPSB1djJwb2xhcih2YXJVVik7XCIsXFxuICAgICAgICAgICAgXCJmbG9hdCBzdHJlbmd0aCA9IHNpbih1bmlUaW1lKTtcIixcXG4gICAgICAgICAgICBcInBvbGFyLnkgKz0gc3RyZW5ndGggKiBwb2xhci54O1wiLFxcbiAgICAgICAgICAgIFwidmVjMiB1diA9IHBvbGFyMnV2KHBvbGFyKTtcIixcXG4gICAgICAgICAgICBcIkZyYWdDb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgdXYpO1wiLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgdGV4dHVyZSxcXG4gICAgICAgICAgICBmaWx0ZXJzOiBbZmlsdGVyXSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSB3aWR0aD1cIjUxMnB4XCIgaGVpZ2h0PVwiNTEycHhcIiAvPlxcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImltcG9ydCB7XG5cdHRnZENvZGVGdW5jdGlvbl9wb2xhcjJ1dixcblx0dGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZEZpbHRlcixcblx0dGdkTG9hZEltYWdlLFxuXHRUZ2RQYWludGVyRmlsdGVyLFxuXHRUZ2RUZXh0dXJlMkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFwiLi4vLi4vLi4vbWFyeWxpbi53ZWJwXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuXHQvLyAjYmVnaW5cblx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChcblx0XHR0Z2RMb2FkSW1hZ2UoQmFja2dyb3VuZFVSTCksXG5cdCk7XG5cdGNvbnN0IGZpbHRlciA9IG5ldyBUZ2RGaWx0ZXIoe1xuXHRcdHVuaWZvcm1zOiB7XG5cdFx0XHR1bmlUaW1lOiBcImZsb2F0XCIsXG5cdFx0XHR1bmlBc3BlY3RSYXRpbzogXCJmbG9hdFwiLFxuXHRcdFx0dW5pQXNwZWN0UmF0aW9JbnZlcnNlOiBcImZsb2F0XCIsXG5cdFx0fSxcblx0XHRzZXRVbmlmb3Jtcyh7IHByb2dyYW0sIHRpbWUgfSkge1xuXHRcdFx0cHJvZ3JhbS51bmlmb3JtMWYoXCJ1bmlUaW1lXCIsIHRpbWUpO1xuXHRcdFx0cHJvZ3JhbS51bmlmb3JtMWYoXCJ1bmlBc3BlY3RSYXRpb1wiLCBjb250ZXh0LmFzcGVjdFJhdGlvKTtcblx0XHRcdHByb2dyYW0udW5pZm9ybTFmKFwidW5pQXNwZWN0UmF0aW9JbnZlcnNlXCIsIGNvbnRleHQuYXNwZWN0UmF0aW9JbnZlcnNlKTtcblx0XHR9LFxuXHRcdGV4dHJhRnVuY3Rpb25zOiB7XG5cdFx0XHQuLi50Z2RDb2RlRnVuY3Rpb25fdXYycG9sYXIoKSxcblx0XHRcdC4uLnRnZENvZGVGdW5jdGlvbl9wb2xhcjJ1digpLFxuXHRcdH0sXG5cdFx0ZnJhZ21lbnRTaGFkZXJDb2RlOiBbXG5cdFx0XHRcInZlYzIgcG9sYXIgPSB1djJwb2xhcih2YXJVVik7XCIsXG5cdFx0XHRcImZsb2F0IHN0cmVuZ3RoID0gc2luKHVuaVRpbWUpO1wiLFxuXHRcdFx0XCJwb2xhci55ICs9IHN0cmVuZ3RoICogcG9sYXIueDtcIixcblx0XHRcdFwidmVjMiB1diA9IHBvbGFyMnV2KHBvbGFyKTtcIixcblx0XHRcdFwiRnJhZ0NvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB1dik7XCIsXG5cdFx0XSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKFxuXHRcdG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcblx0XHRcdHRleHR1cmUsXG5cdFx0XHRmaWx0ZXJzOiBbZmlsdGVyXSxcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wbGF5KCk7XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IHdpZHRoPVwiNTEycHhcIiBoZWlnaHQ9XCI1MTJweFwiIC8+O1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDb2RlRnVuY3Rpb25fcG9sYXIydXYiLCJ0Z2RDb2RlRnVuY3Rpb25fdXYycG9sYXIiLCJUZ2RGaWx0ZXIiLCJ0Z2RMb2FkSW1hZ2UiLCJUZ2RQYWludGVyRmlsdGVyIiwiVGdkVGV4dHVyZTJEIiwiVmlldyIsIkJhY2tncm91bmRVUkwiLCJpbml0IiwiY29udGV4dCIsInRleHR1cmUiLCJmaWx0ZXIiLCJzZXRVbmlmb3JtcyIsInBhcmFtIiwicHJvZ3JhbSIsInRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN5QjtBQUNpQjtBQUNXO0FBQ3BCO0FBRWxDLElBQU1JLFFBQVE7SUFDYixhQUNDO0FBQ0Y7QUFDQSxJQUFNQyxPQUNMO0FBRWMsU0FBU0M7SUFDdkIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUNDOzswQkFDQyxrREFBQztnQkFBSSxXQUFVOzBCQUNkLGdFQUFDSix5Q0FBSUE7Ozs7Ozs7Ozs7MEJBRU4sa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ2Qsa0RBQUM7a0NBQ0EsZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDckRBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHaEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUlwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ3QjtBQUNpQjtBQUVTO0FBRWxELFNBQVNlLEtBQUtDLE9BQW1CO0lBQ2hDLFNBQVM7SUFDVCxJQUFNQyxVQUFVLElBQUlMLDRDQUFZQSxDQUFDSSxTQUFTLFVBQVUsQ0FDbkROLGdEQUFZQSxDQUFDSSw4QkFBYUE7SUFFM0IsSUFBTUksU0FBUyxJQUFJVCx5Q0FBU0EsQ0FBQztRQUM1QixVQUFVO1lBQ1QsU0FBUztZQUNULGdCQUFnQjtZQUNoQix1QkFBdUI7UUFDeEI7UUFDQVUsYUFBQUEsU0FBQUEsWUFBWUMsS0FBaUI7Z0JBQWZDLFVBQUZELE1BQUVDLFNBQVNDLE9BQVhGLE1BQVdFO1lBQ3RCRCxRQUFRLFNBQVMsQ0FBQyxXQUFXQztZQUM3QkQsUUFBUSxTQUFTLENBQUMsa0JBQWtCTCxRQUFRLFdBQVc7WUFDdkRLLFFBQVEsU0FBUyxDQUFDLHlCQUF5QkwsUUFBUSxrQkFBa0I7UUFDdEU7UUFDQSxnQkFBZ0IsbUJBQ1pSLDREQUF3QkEsSUFDeEJELDREQUF3QkE7UUFFNUIsb0JBQW9CO1lBQ25CO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDQTtJQUNGO0lBQ0FTLFFBQVEsR0FBRyxDQUNWLElBQUlMLGdEQUFnQkEsQ0FBQ0ssU0FBUztRQUM3QkMsU0FBQUE7UUFDQSxTQUFTO1lBQUNDO1NBQU87SUFDbEI7SUFFREYsUUFBUSxJQUFJO0FBQ1osT0FBTztBQUNSO0FBRWUsU0FBU2pCO0lBQ3ZCLHFCQUFPLGtEQUFDYyxnREFBSUE7UUFBQyxTQUFTRTtRQUFNLE9BQU07UUFBUSxRQUFPOzs7Ozs7QUFDbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEd0I7Ozs7Ozs7Ozs7Ozs7OEJBRXJCOzs7Ozs7Ozs7Ozs7Ozs7OEJBRUY7Ozs7Ozs7Ozs7Ozs7O29CQUVFO29CQUFBOztrQ0FBb0I7Ozs7Ozs7Ozs7Ozs7OzBCQUV2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFlBQVksb0NBQW9DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseUJBQXlCO0FBQ3BDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4QkFBOEI7QUFDNUM7QUFDQSxjQUFjLDhEQUE4RDtBQUM1RTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7O0FBRXlCOztBQUV6QixXQUFXLHlCQUF5QjtBQUNwQzs7QUFFQSxtQkFBbUIsb0NBQW1COztBQUV0QztBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUE4RDtBQUN6RTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCw0QkFBNEIsaUNBQWdCOztBQUU1QztBQUNBLFNBQVMsOEJBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLGFBQWE7QUFDYjtBQUNBLGVBQWU7QUFDZjtBQUNPO0FBQ1AsYUFBYSx5QkFBeUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFNBQVMsb0NBQW1CO0FBQzVCO0FBQ0EsS0FBSyxxQkFBcUI7QUFDMUI7QUFDQTtBQUNBIn0=