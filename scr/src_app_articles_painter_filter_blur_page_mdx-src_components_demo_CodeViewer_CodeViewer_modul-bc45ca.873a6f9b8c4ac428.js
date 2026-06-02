"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_filter_blur_page_mdx-src_components_demo_CodeViewer_CodeViewer_modul-bc45ca"], {
77276(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/marylin.a798ca8d93006b9f.webp";

},
93833(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _marylin_demo__rspack_import_4 = __webpack_require__(10300);
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
    "Detail #1": "    const texture = new TgdTexture2D(context).loadBitmap(assets.image.image)\n    const size = 16\n    const horizontalBlurFilter = new TgdFilterBlur({\n        size,\n        direction: 0,\n    })\n    const verticalBlurFilter = new TgdFilterBlur({\n        size,\n        direction: 90,\n    })\n    const filter = new TgdPainterFilter(context, {\n        texture,\n        filters: [horizontalBlurFilter, verticalBlurFilter],\n    })\n    context.add(filter)\n    context.paint()\n    return ({ strength }: { strength: number }) => {\n        horizontalBlurFilter.strength = strength\n        verticalBlurFilter.strength = strength\n        context.paint()\n    }"
};
var FULL = 'import { type TgdContext, TgdFilterBlur, TgdPainterFilter, TgdTexture2D } from "@tolokoban/tgd"\nimport View, { type Assets } from "@/components/demo/Tgd"\nimport BackgroundURL from "../../../marylin.webp"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.image)\n    const size = 16\n    const horizontalBlurFilter = new TgdFilterBlur({\n        size,\n        direction: 0,\n    })\n    const verticalBlurFilter = new TgdFilterBlur({\n        size,\n        direction: 90,\n    })\n    const filter = new TgdPainterFilter(context, {\n        texture,\n        filters: [horizontalBlurFilter, verticalBlurFilter],\n    })\n    context.add(filter)\n    context.paint()\n    return ({ strength }: { strength: number }) => {\n        horizontalBlurFilter.strength = strength\n        verticalBlurFilter.strength = strength\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            width="512px"\n            height="512px"\n            settings={{\n                strength: {\n                    label: "strength",\n                    min: 0,\n                    max: 2,\n                    value: 1,\n                    step: 0.1,\n                },\n            }}\n            assets={{\n                image: {\n                    image: BackgroundURL,\n                },\n            }}\n        />\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marylin_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/_/marylin.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/_/marylin.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/_/marylin.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/_/marylin.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/_/marylin.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/_/marylin.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
10300(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _marylin_webp__rspack_import_3 = __webpack_require__(77276);




function init(context, assets) {
    // #begin
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.image);
    var size = 16;
    var horizontalBlurFilter = new _tolokoban_tgd__rspack_import_1.TgdFilterBlur({
        size: size,
        direction: 0
    });
    var verticalBlurFilter = new _tolokoban_tgd__rspack_import_1.TgdFilterBlur({
        size: size,
        direction: 90
    });
    var filter = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        texture: texture,
        filters: [
            horizontalBlurFilter,
            verticalBlurFilter
        ]
    });
    context.add(filter);
    context.paint();
    return function(param) {
        var strength = param.strength;
        horizontalBlurFilter.strength = strength;
        verticalBlurFilter.strength = strength;
        context.paint();
    };
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        width: "512px",
        height: "512px",
        settings: {
            strength: {
                label: "strength",
                min: 0,
                max: 2,
                value: 1,
                step: 0.1
            }
        },
        assets: {
            image: {
                image: _marylin_webp__rspack_import_3
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/_/marylin.demo/marylin.demo.tsx",
        lineNumber: 38,
        columnNumber: 3
    }, this);
}


},
19277(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _marylin_demo__rspack_import_1 = __webpack_require__(93833);
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#..",
                    children: "Back to the list of available filters"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/page.mdx",
                    lineNumber: 5,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdFilterBlur.html",
                    children: "TgdFilterBlur"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/page.mdx",
                    lineNumber: 7,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Horizontal and vertical blur of 16px."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marylin_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/blur/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9maWx0ZXJfYmx1cl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC1iYzQ1Y2EuODczYTZmOWI4YzRhYzQyOC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9maWx0ZXIvYmx1ci9fL21hcnlsaW4uZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9ibHVyL18vbWFyeWxpbi5kZW1vL21hcnlsaW4uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9ibHVyL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFyeWxpbi5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkRldGFpbCAjMVwiOlxuXHRcdFwiICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmltYWdlKVxcbiAgICBjb25zdCBzaXplID0gMTZcXG4gICAgY29uc3QgaG9yaXpvbnRhbEJsdXJGaWx0ZXIgPSBuZXcgVGdkRmlsdGVyQmx1cih7XFxuICAgICAgICBzaXplLFxcbiAgICAgICAgZGlyZWN0aW9uOiAwLFxcbiAgICB9KVxcbiAgICBjb25zdCB2ZXJ0aWNhbEJsdXJGaWx0ZXIgPSBuZXcgVGdkRmlsdGVyQmx1cih7XFxuICAgICAgICBzaXplLFxcbiAgICAgICAgZGlyZWN0aW9uOiA5MCxcXG4gICAgfSlcXG4gICAgY29uc3QgZmlsdGVyID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgICAgIGZpbHRlcnM6IFtob3Jpem9udGFsQmx1ckZpbHRlciwgdmVydGljYWxCbHVyRmlsdGVyXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoZmlsdGVyKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgcmV0dXJuICh7IHN0cmVuZ3RoIH06IHsgc3RyZW5ndGg6IG51bWJlciB9KSA9PiB7XFxuICAgICAgICBob3Jpem9udGFsQmx1ckZpbHRlci5zdHJlbmd0aCA9IHN0cmVuZ3RoXFxuICAgICAgICB2ZXJ0aWNhbEJsdXJGaWx0ZXIuc3RyZW5ndGggPSBzdHJlbmd0aFxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cIixcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7IHR5cGUgVGdkQ29udGV4dCwgVGdkRmlsdGVyQmx1ciwgVGdkUGFpbnRlckZpbHRlciwgVGdkVGV4dHVyZTJEIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXCIuLi8uLi8uLi9tYXJ5bGluLndlYnBcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuaW1hZ2UpXFxuICAgIGNvbnN0IHNpemUgPSAxNlxcbiAgICBjb25zdCBob3Jpem9udGFsQmx1ckZpbHRlciA9IG5ldyBUZ2RGaWx0ZXJCbHVyKHtcXG4gICAgICAgIHNpemUsXFxuICAgICAgICBkaXJlY3Rpb246IDAsXFxuICAgIH0pXFxuICAgIGNvbnN0IHZlcnRpY2FsQmx1ckZpbHRlciA9IG5ldyBUZ2RGaWx0ZXJCbHVyKHtcXG4gICAgICAgIHNpemUsXFxuICAgICAgICBkaXJlY3Rpb246IDkwLFxcbiAgICB9KVxcbiAgICBjb25zdCBmaWx0ZXIgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICAgICAgZmlsdGVyczogW2hvcml6b250YWxCbHVyRmlsdGVyLCB2ZXJ0aWNhbEJsdXJGaWx0ZXJdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChmaWx0ZXIpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICByZXR1cm4gKHsgc3RyZW5ndGggfTogeyBzdHJlbmd0aDogbnVtYmVyIH0pID0+IHtcXG4gICAgICAgIGhvcml6b250YWxCbHVyRmlsdGVyLnN0cmVuZ3RoID0gc3RyZW5ndGhcXG4gICAgICAgIHZlcnRpY2FsQmx1ckZpbHRlci5zdHJlbmd0aCA9IHN0cmVuZ3RoXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIHdpZHRoPVwiNTEycHhcIlxcbiAgICAgICAgICAgIGhlaWdodD1cIjUxMnB4XCJcXG4gICAgICAgICAgICBzZXR0aW5ncz17e1xcbiAgICAgICAgICAgICAgICBzdHJlbmd0aDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic3RyZW5ndGhcIixcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogMixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogMC4xLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogQmFja2dyb3VuZFVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImltcG9ydCB7XG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkRmlsdGVyQmx1cixcblx0VGdkUGFpbnRlckZpbHRlcixcblx0VGdkVGV4dHVyZTJELFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIi4uLy4uLy4uL21hcnlsaW4ud2VicFwiO1xuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdC8vICNiZWdpblxuXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5pbWFnZSk7XG5cdGNvbnN0IHNpemUgPSAxNjtcblx0Y29uc3QgaG9yaXpvbnRhbEJsdXJGaWx0ZXIgPSBuZXcgVGdkRmlsdGVyQmx1cih7XG5cdFx0c2l6ZSxcblx0XHRkaXJlY3Rpb246IDAsXG5cdH0pO1xuXHRjb25zdCB2ZXJ0aWNhbEJsdXJGaWx0ZXIgPSBuZXcgVGdkRmlsdGVyQmx1cih7XG5cdFx0c2l6ZSxcblx0XHRkaXJlY3Rpb246IDkwLFxuXHR9KTtcblx0Y29uc3QgZmlsdGVyID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuXHRcdHRleHR1cmUsXG5cdFx0ZmlsdGVyczogW2hvcml6b250YWxCbHVyRmlsdGVyLCB2ZXJ0aWNhbEJsdXJGaWx0ZXJdLFxuXHR9KTtcblx0Y29udGV4dC5hZGQoZmlsdGVyKTtcblx0Y29udGV4dC5wYWludCgpO1xuXHRyZXR1cm4gKHsgc3RyZW5ndGggfTogeyBzdHJlbmd0aDogbnVtYmVyIH0pID0+IHtcblx0XHRob3Jpem9udGFsQmx1ckZpbHRlci5zdHJlbmd0aCA9IHN0cmVuZ3RoO1xuXHRcdHZlcnRpY2FsQmx1ckZpbHRlci5zdHJlbmd0aCA9IHN0cmVuZ3RoO1xuXHRcdGNvbnRleHQucGFpbnQoKTtcblx0fTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0d2lkdGg9XCI1MTJweFwiXG5cdFx0XHRoZWlnaHQ9XCI1MTJweFwiXG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHRzdHJlbmd0aDoge1xuXHRcdFx0XHRcdGxhYmVsOiBcInN0cmVuZ3RoXCIsXG5cdFx0XHRcdFx0bWluOiAwLFxuXHRcdFx0XHRcdG1heDogMixcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRzdGVwOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0aW1hZ2U6IEJhY2tncm91bmRVUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZEZpbHRlckJsdXIiLCJUZ2RQYWludGVyRmlsdGVyIiwiVGdkVGV4dHVyZTJEIiwiVmlldyIsIkJhY2tncm91bmRVUkwiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsInRleHR1cmUiLCJzaXplIiwiaG9yaXpvbnRhbEJsdXJGaWx0ZXIiLCJ2ZXJ0aWNhbEJsdXJGaWx0ZXIiLCJmaWx0ZXIiLCJzdHJlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3lCO0FBQ2lCO0FBQ1c7QUFDcEI7QUFFbEMsSUFBTUksUUFBUTtJQUNiLGFBQ0M7QUFDRjtBQUNBLElBQU1DLE9BQ0w7QUFFYyxTQUFTQztJQUN2QixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQ0M7OzBCQUNDLGtEQUFDO2dCQUFJLFdBQVU7MEJBQ2QsZ0VBQUNKLHlDQUFJQTs7Ozs7Ozs7OzswQkFFTixrREFBQztnQkFBSSxXQUFVOztrQ0FDZCxrREFBQztrQ0FDQSxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNy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