"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_clear_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css"], {
44191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(87393);
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
    "Detail #1": 'function init(canvas: HTMLCanvasElement): TgdContext {\n    const ctx = new TgdContext(canvas)\n    const clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] })\n    ctx.add(clear)\n    /**\n     * While transitioning to another color, we don\'t want the user\n     * to be able to click.\n     */\n    let enabled = false\n    canvas.addEventListener("click", () => {\n        /**\n         * On click, we want to interpolate to another random color.\n         */\n        const colorInterpolator = tgdActionCreateVec3Interpolation({\n            from: new TgdVec3([clear.red, clear.green, clear.blue]),\n            to: new TgdVec3([Math.random(), Math.random(), Math.random()]),\n            action: ([red, green, blue]) => {\n                clear.red = red\n                clear.green = green\n                clear.blue = blue\n            },\n        })\n        ctx.animSchedule({\n            duration: 0.5,\n            action: colorInterpolator,\n            onEnd: () => (enabled = true),\n        })\n        clear.red = Math.random() + 1\n        clear.green = Math.random()\n        clear.blue = Math.random()\n    })\n    ctx.paint()\n    return ctx\n}'
};
var FULL = 'import {\n    tgdActionCreateVec3Interpolation,\n    TgdContext,\n    TgdPainterClear,\n    TgdVec3,\n} from "@tolokoban/tgd"\n\nfunction init(canvas: HTMLCanvasElement): TgdContext {\n    const ctx = new TgdContext(canvas)\n    const clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] })\n    ctx.add(clear)\n    /**\n     * While transitioning to another color, we don\'t want the user\n     * to be able to click.\n     */\n    let enabled = false\n    canvas.addEventListener("click", () => {\n        /**\n         * On click, we want to interpolate to another random color.\n         */\n        const colorInterpolator = tgdActionCreateVec3Interpolation({\n            from: new TgdVec3([clear.red, clear.green, clear.blue]),\n            to: new TgdVec3([Math.random(), Math.random(), Math.random()]),\n            action: ([red, green, blue]) => {\n                clear.red = red\n                clear.green = green\n                clear.blue = blue\n            },\n        })\n        ctx.animSchedule({\n            duration: 0.5,\n            action: colorInterpolator,\n            onEnd: () => (enabled = true),\n        })\n        clear.red = Math.random() + 1\n        clear.green = Math.random()\n        clear.blue = Math.random()\n    })\n    ctx.paint()\n    return ctx\n}\n\nexport default function Demo() {\n    const handleMount = (canvas: HTMLCanvasElement | null) => {\n        if (canvas) init(canvas)\n    }\n    return (\n        <canvas\n            ref={handleMount}\n            style={{\n                width: "320px",\n                height: "240px",\n                background: "#000",\n            }}\n        ></canvas>\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 13
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}


},
87393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
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


// #begin
function init(canvas) {
    var ctx = new _tolokoban_tgd__rspack_import_1.TgdContext(canvas);
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(ctx, {
        color: [
            1,
            0.7,
            0,
            1
        ]
    });
    ctx.add(clear);
    /**
     * While transitioning to another color, we don't want the user
     * to be able to click.
     */ var enabled = false;
    canvas.addEventListener("click", function() {
        /**
         * On click, we want to interpolate to another random color.
         */ var colorInterpolator = (0,_tolokoban_tgd__rspack_import_1.tgdActionCreateVec3Interpolation)({
            from: new _tolokoban_tgd__rspack_import_1.TgdVec3([
                clear.red,
                clear.green,
                clear.blue
            ]),
            to: new _tolokoban_tgd__rspack_import_1.TgdVec3([
                Math.random(),
                Math.random(),
                Math.random()
            ]),
            action: function action(param) {
                var _param = _sliced_to_array(param, 3), red = _param[0], green = _param[1], blue = _param[2];
                clear.red = red;
                clear.green = green;
                clear.blue = blue;
            }
        });
        ctx.animSchedule({
            duration: 0.5,
            action: colorInterpolator,
            onEnd: function onEnd() {
                return enabled = true;
            }
        });
        clear.red = Math.random() + 1;
        clear.green = Math.random();
        clear.blue = Math.random();
    });
    ctx.paint();
    return ctx;
}
// #end
function Demo() {
    var handleMount = function handleMount(canvas) {
        if (canvas) init(canvas);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("canvas", {
        ref: handleMount,
        style: {
            width: "320px",
            height: "240px",
            background: "#000"
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/main.demo.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}


},
38466(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(44191);
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
                    href: "docs/classes/TgdPainterClear.html",
                    children: "TgdPainterClear"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "How to fill all the pixels of the canvas with a unique color."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Click the canvas (the rectangle below) to set an new random color."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9jbGVhcl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLjBhMGI3NjQ4YjMxNTQyYTQuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvY2xlYXIvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9jbGVhci9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9jbGVhci9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1xuICAgIFwiRGV0YWlsICMxXCI6XG4gICAgICAgICdmdW5jdGlvbiBpbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBUZ2RDb250ZXh0IHtcXG4gICAgY29uc3QgY3R4ID0gbmV3IFRnZENvbnRleHQoY2FudmFzKVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMSwgMC43LCAwLCAxXSB9KVxcbiAgICBjdHguYWRkKGNsZWFyKVxcbiAgICAvKipcXG4gICAgICogV2hpbGUgdHJhbnNpdGlvbmluZyB0byBhbm90aGVyIGNvbG9yLCB3ZSBkb25cXCd0IHdhbnQgdGhlIHVzZXJcXG4gICAgICogdG8gYmUgYWJsZSB0byBjbGljay5cXG4gICAgICovXFxuICAgIGxldCBlbmFibGVkID0gZmFsc2VcXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XFxuICAgICAgICAvKipcXG4gICAgICAgICAqIE9uIGNsaWNrLCB3ZSB3YW50IHRvIGludGVycG9sYXRlIHRvIGFub3RoZXIgcmFuZG9tIGNvbG9yLlxcbiAgICAgICAgICovXFxuICAgICAgICBjb25zdCBjb2xvckludGVycG9sYXRvciA9IHRnZEFjdGlvbkNyZWF0ZVZlYzNJbnRlcnBvbGF0aW9uKHtcXG4gICAgICAgICAgICBmcm9tOiBuZXcgVGdkVmVjMyhbY2xlYXIucmVkLCBjbGVhci5ncmVlbiwgY2xlYXIuYmx1ZV0pLFxcbiAgICAgICAgICAgIHRvOiBuZXcgVGdkVmVjMyhbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKV0pLFxcbiAgICAgICAgICAgIGFjdGlvbjogKFtyZWQsIGdyZWVuLCBibHVlXSkgPT4ge1xcbiAgICAgICAgICAgICAgICBjbGVhci5yZWQgPSByZWRcXG4gICAgICAgICAgICAgICAgY2xlYXIuZ3JlZW4gPSBncmVlblxcbiAgICAgICAgICAgICAgICBjbGVhci5ibHVlID0gYmx1ZVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KVxcbiAgICAgICAgY3R4LmFuaW1TY2hlZHVsZSh7XFxuICAgICAgICAgICAgZHVyYXRpb246IDAuNSxcXG4gICAgICAgICAgICBhY3Rpb246IGNvbG9ySW50ZXJwb2xhdG9yLFxcbiAgICAgICAgICAgIG9uRW5kOiAoKSA9PiAoZW5hYmxlZCA9IHRydWUpLFxcbiAgICAgICAgfSlcXG4gICAgICAgIGNsZWFyLnJlZCA9IE1hdGgucmFuZG9tKCkgKyAxXFxuICAgICAgICBjbGVhci5ncmVlbiA9IE1hdGgucmFuZG9tKClcXG4gICAgICAgIGNsZWFyLmJsdWUgPSBNYXRoLnJhbmRvbSgpXFxuICAgIH0pXFxuICAgIGN0eC5wYWludCgpXFxuICAgIHJldHVybiBjdHhcXG59Jyxcbn1cbmNvbnN0IEZVTEwgPVxuICAgICdpbXBvcnQge1xcbiAgICB0Z2RBY3Rpb25DcmVhdGVWZWMzSW50ZXJwb2xhdGlvbixcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RWZWMzLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBUZ2RDb250ZXh0IHtcXG4gICAgY29uc3QgY3R4ID0gbmV3IFRnZENvbnRleHQoY2FudmFzKVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMSwgMC43LCAwLCAxXSB9KVxcbiAgICBjdHguYWRkKGNsZWFyKVxcbiAgICAvKipcXG4gICAgICogV2hpbGUgdHJhbnNpdGlvbmluZyB0byBhbm90aGVyIGNvbG9yLCB3ZSBkb25cXCd0IHdhbnQgdGhlIHVzZXJcXG4gICAgICogdG8gYmUgYWJsZSB0byBjbGljay5cXG4gICAgICovXFxuICAgIGxldCBlbmFibGVkID0gZmFsc2VcXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XFxuICAgICAgICAvKipcXG4gICAgICAgICAqIE9uIGNsaWNrLCB3ZSB3YW50IHRvIGludGVycG9sYXRlIHRvIGFub3RoZXIgcmFuZG9tIGNvbG9yLlxcbiAgICAgICAgICovXFxuICAgICAgICBjb25zdCBjb2xvckludGVycG9sYXRvciA9IHRnZEFjdGlvbkNyZWF0ZVZlYzNJbnRlcnBvbGF0aW9uKHtcXG4gICAgICAgICAgICBmcm9tOiBuZXcgVGdkVmVjMyhbY2xlYXIucmVkLCBjbGVhci5ncmVlbiwgY2xlYXIuYmx1ZV0pLFxcbiAgICAgICAgICAgIHRvOiBuZXcgVGdkVmVjMyhbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKV0pLFxcbiAgICAgICAgICAgIGFjdGlvbjogKFtyZWQsIGdyZWVuLCBibHVlXSkgPT4ge1xcbiAgICAgICAgICAgICAgICBjbGVhci5yZWQgPSByZWRcXG4gICAgICAgICAgICAgICAgY2xlYXIuZ3JlZW4gPSBncmVlblxcbiAgICAgICAgICAgICAgICBjbGVhci5ibHVlID0gYmx1ZVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KVxcbiAgICAgICAgY3R4LmFuaW1TY2hlZHVsZSh7XFxuICAgICAgICAgICAgZHVyYXRpb246IDAuNSxcXG4gICAgICAgICAgICBhY3Rpb246IGNvbG9ySW50ZXJwb2xhdG9yLFxcbiAgICAgICAgICAgIG9uRW5kOiAoKSA9PiAoZW5hYmxlZCA9IHRydWUpLFxcbiAgICAgICAgfSlcXG4gICAgICAgIGNsZWFyLnJlZCA9IE1hdGgucmFuZG9tKCkgKyAxXFxuICAgICAgICBjbGVhci5ncmVlbiA9IE1hdGgucmFuZG9tKClcXG4gICAgICAgIGNsZWFyLmJsdWUgPSBNYXRoLnJhbmRvbSgpXFxuICAgIH0pXFxuICAgIGN0eC5wYWludCgpXFxuICAgIHJldHVybiBjdHhcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgaGFuZGxlTW91bnQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwpID0+IHtcXG4gICAgICAgIGlmIChjYW52YXMpIGluaXQoY2FudmFzKVxcbiAgICB9XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Y2FudmFzXFxuICAgICAgICAgICAgcmVmPXtoYW5kbGVNb3VudH1cXG4gICAgICAgICAgICBzdHlsZT17e1xcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIzMjBweFwiLFxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjQwcHhcIixcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgID48L2NhbnZhcz5cXG4gICAgKVxcbn1cXG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPERlbW8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCB7IHRnZEFjdGlvbkNyZWF0ZVZlYzNJbnRlcnBvbGF0aW9uLCBUZ2RDb250ZXh0LCBUZ2RQYWludGVyQ2xlYXIsIFRnZFZlYzMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFRnZENvbnRleHQge1xuICAgIGNvbnN0IGN0eCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcylcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMSwgMC43LCAwLCAxXSB9KVxuICAgIGN0eC5hZGQoY2xlYXIpXG4gICAgLyoqXG4gICAgICogV2hpbGUgdHJhbnNpdGlvbmluZyB0byBhbm90aGVyIGNvbG9yLCB3ZSBkb24ndCB3YW50IHRoZSB1c2VyXG4gICAgICogdG8gYmUgYWJsZSB0byBjbGljay5cbiAgICAgKi9cbiAgICBsZXQgZW5hYmxlZCA9IGZhbHNlXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbiBjbGljaywgd2Ugd2FudCB0byBpbnRlcnBvbGF0ZSB0byBhbm90aGVyIHJhbmRvbSBjb2xvci5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGNvbG9ySW50ZXJwb2xhdG9yID0gdGdkQWN0aW9uQ3JlYXRlVmVjM0ludGVycG9sYXRpb24oe1xuICAgICAgICAgICAgZnJvbTogbmV3IFRnZFZlYzMoW2NsZWFyLnJlZCwgY2xlYXIuZ3JlZW4sIGNsZWFyLmJsdWVdKSxcbiAgICAgICAgICAgIHRvOiBuZXcgVGdkVmVjMyhbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKV0pLFxuICAgICAgICAgICAgYWN0aW9uOiAoW3JlZCwgZ3JlZW4sIGJsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXIucmVkID0gcmVkXG4gICAgICAgICAgICAgICAgY2xlYXIuZ3JlZW4gPSBncmVlblxuICAgICAgICAgICAgICAgIGNsZWFyLmJsdWUgPSBibHVlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBjdHguYW5pbVNjaGVkdWxlKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgICBhY3Rpb246IGNvbG9ySW50ZXJwb2xhdG9yLFxuICAgICAgICAgICAgb25FbmQ6ICgpID0+IChlbmFibGVkID0gdHJ1ZSksXG4gICAgICAgIH0pXG4gICAgICAgIGNsZWFyLnJlZCA9IE1hdGgucmFuZG9tKCkgKyAxXG4gICAgICAgIGNsZWFyLmdyZWVuID0gTWF0aC5yYW5kb20oKVxuICAgICAgICBjbGVhci5ibHVlID0gTWF0aC5yYW5kb20oKVxuICAgIH0pXG4gICAgY3R4LnBhaW50KClcbiAgICByZXR1cm4gY3R4XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgY29uc3QgaGFuZGxlTW91bnQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKGNhbnZhcykgaW5pdChjYW52YXMpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIHJlZj17aGFuZGxlTW91bnR9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMyMHB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI0MHB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXG4gICAgICAgICAgICB9fT48L2NhbnZhcz5cbiAgICApXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZEFjdGlvbkNyZWF0ZVZlYzNJbnRlcnBvbGF0aW9uIiwiVGdkQ29udGV4dCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFZlYzMiLCJpbml0IiwiY2FudmFzIiwiY3R4IiwiY2xlYXIiLCJlbmFibGVkIiwiY29sb3JJbnRlcnBvbGF0b3IiLCJNYXRoIiwiYWN0aW9uIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwib25FbmQiLCJoYW5kbGVNb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQ1YsYUFDSTtBQUNSO0FBQ0EsSUFBTUMsT0FDRjtBQUVXLFNB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