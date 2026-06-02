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
    "Detail #1": "function init(canvas: HTMLCanvasElement): TgdContext {\n\tconst ctx = new TgdContext(canvas);\n\tconst clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] });\n\tctx.add(clear);\n\t/**\n\t * While transitioning to another color, we don't want the user\n\t * to be able to click.\n\t */\n\tlet enabled = false;\n\tcanvas.addEventListener(\"click\", () => {\n\t\t/**\n\t\t * On click, we want to interpolate to another random color.\n\t\t */\n\t\tconst colorInterpolator = tgdActionCreateVec3Interpolation({\n\t\t\tfrom: new TgdVec3([clear.red, clear.green, clear.blue]),\n\t\t\tto: new TgdVec3([Math.random(), Math.random(), Math.random()]),\n\t\t\taction: ([red, green, blue]) => {\n\t\t\t\tclear.red = red;\n\t\t\t\tclear.green = green;\n\t\t\t\tclear.blue = blue;\n\t\t\t},\n\t\t});\n\t\tctx.animSchedule({\n\t\t\tduration: 0.5,\n\t\t\taction: colorInterpolator,\n\t\t\tonEnd: () => (enabled = true),\n\t\t});\n\t\tclear.red = Math.random() + 1;\n\t\tclear.green = Math.random();\n\t\tclear.blue = Math.random();\n\t});\n\tctx.paint();\n\treturn ctx;\n}"
};
var FULL = "import {\n\ttgdActionCreateVec3Interpolation,\n\tTgdContext,\n\tTgdPainterClear,\n\tTgdVec3,\n} from \"@tolokoban/tgd\";\n\nfunction init(canvas: HTMLCanvasElement): TgdContext {\n\tconst ctx = new TgdContext(canvas);\n\tconst clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] });\n\tctx.add(clear);\n\t/**\n\t * While transitioning to another color, we don't want the user\n\t * to be able to click.\n\t */\n\tlet enabled = false;\n\tcanvas.addEventListener(\"click\", () => {\n\t\t/**\n\t\t * On click, we want to interpolate to another random color.\n\t\t */\n\t\tconst colorInterpolator = tgdActionCreateVec3Interpolation({\n\t\t\tfrom: new TgdVec3([clear.red, clear.green, clear.blue]),\n\t\t\tto: new TgdVec3([Math.random(), Math.random(), Math.random()]),\n\t\t\taction: ([red, green, blue]) => {\n\t\t\t\tclear.red = red;\n\t\t\t\tclear.green = green;\n\t\t\t\tclear.blue = blue;\n\t\t\t},\n\t\t});\n\t\tctx.animSchedule({\n\t\t\tduration: 0.5,\n\t\t\taction: colorInterpolator,\n\t\t\tonEnd: () => (enabled = true),\n\t\t});\n\t\tclear.red = Math.random() + 1;\n\t\tclear.green = Math.random();\n\t\tclear.blue = Math.random();\n\t});\n\tctx.paint();\n\treturn ctx;\n}\n\nexport default function Demo() {\n\tconst handleMount = (canvas: HTMLCanvasElement | null) => {\n\t\tif (canvas) init(canvas);\n\t};\n\treturn (\n\t\t<canvas\n\t\t\tref={handleMount}\n\t\t\tstyle={{\n\t\t\t\twidth: \"320px\",\n\t\t\t\theight: \"240px\",\n\t\t\t\tbackground: \"#000\",\n\t\t\t}}\n\t\t></canvas>\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
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
        lineNumber: 50,
        columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9jbGVhcl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLjExYzUyOGM3NjFlMTgzMTEuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvY2xlYXIvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9jbGVhci9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9jbGVhci9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJmdW5jdGlvbiBpbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBUZ2RDb250ZXh0IHtcXG5cXHRjb25zdCBjdHggPSBuZXcgVGdkQ29udGV4dChjYW52YXMpO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFsxLCAwLjcsIDAsIDFdIH0pO1xcblxcdGN0eC5hZGQoY2xlYXIpO1xcblxcdC8qKlxcblxcdCAqIFdoaWxlIHRyYW5zaXRpb25pbmcgdG8gYW5vdGhlciBjb2xvciwgd2UgZG9uJ3Qgd2FudCB0aGUgdXNlclxcblxcdCAqIHRvIGJlIGFibGUgdG8gY2xpY2suXFxuXFx0ICovXFxuXFx0bGV0IGVuYWJsZWQgPSBmYWxzZTtcXG5cXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcXFwiY2xpY2tcXFwiLCAoKSA9PiB7XFxuXFx0XFx0LyoqXFxuXFx0XFx0ICogT24gY2xpY2ssIHdlIHdhbnQgdG8gaW50ZXJwb2xhdGUgdG8gYW5vdGhlciByYW5kb20gY29sb3IuXFxuXFx0XFx0ICovXFxuXFx0XFx0Y29uc3QgY29sb3JJbnRlcnBvbGF0b3IgPSB0Z2RBY3Rpb25DcmVhdGVWZWMzSW50ZXJwb2xhdGlvbih7XFxuXFx0XFx0XFx0ZnJvbTogbmV3IFRnZFZlYzMoW2NsZWFyLnJlZCwgY2xlYXIuZ3JlZW4sIGNsZWFyLmJsdWVdKSxcXG5cXHRcXHRcXHR0bzogbmV3IFRnZFZlYzMoW01hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCldKSxcXG5cXHRcXHRcXHRhY3Rpb246IChbcmVkLCBncmVlbiwgYmx1ZV0pID0+IHtcXG5cXHRcXHRcXHRcXHRjbGVhci5yZWQgPSByZWQ7XFxuXFx0XFx0XFx0XFx0Y2xlYXIuZ3JlZW4gPSBncmVlbjtcXG5cXHRcXHRcXHRcXHRjbGVhci5ibHVlID0gYmx1ZTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdH0pO1xcblxcdFxcdGN0eC5hbmltU2NoZWR1bGUoe1xcblxcdFxcdFxcdGR1cmF0aW9uOiAwLjUsXFxuXFx0XFx0XFx0YWN0aW9uOiBjb2xvckludGVycG9sYXRvcixcXG5cXHRcXHRcXHRvbkVuZDogKCkgPT4gKGVuYWJsZWQgPSB0cnVlKSxcXG5cXHRcXHR9KTtcXG5cXHRcXHRjbGVhci5yZWQgPSBNYXRoLnJhbmRvbSgpICsgMTtcXG5cXHRcXHRjbGVhci5ncmVlbiA9IE1hdGgucmFuZG9tKCk7XFxuXFx0XFx0Y2xlYXIuYmx1ZSA9IE1hdGgucmFuZG9tKCk7XFxuXFx0fSk7XFxuXFx0Y3R4LnBhaW50KCk7XFxuXFx0cmV0dXJuIGN0eDtcXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdHRnZEFjdGlvbkNyZWF0ZVZlYzNJbnRlcnBvbGF0aW9uLFxcblxcdFRnZENvbnRleHQsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFZlYzMsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogVGdkQ29udGV4dCB7XFxuXFx0Y29uc3QgY3R4ID0gbmV3IFRnZENvbnRleHQoY2FudmFzKTtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMSwgMC43LCAwLCAxXSB9KTtcXG5cXHRjdHguYWRkKGNsZWFyKTtcXG5cXHQvKipcXG5cXHQgKiBXaGlsZSB0cmFuc2l0aW9uaW5nIHRvIGFub3RoZXIgY29sb3IsIHdlIGRvbid0IHdhbnQgdGhlIHVzZXJcXG5cXHQgKiB0byBiZSBhYmxlIHRvIGNsaWNrLlxcblxcdCAqL1xcblxcdGxldCBlbmFibGVkID0gZmFsc2U7XFxuXFx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXFxcImNsaWNrXFxcIiwgKCkgPT4ge1xcblxcdFxcdC8qKlxcblxcdFxcdCAqIE9uIGNsaWNrLCB3ZSB3YW50IHRvIGludGVycG9sYXRlIHRvIGFub3RoZXIgcmFuZG9tIGNvbG9yLlxcblxcdFxcdCAqL1xcblxcdFxcdGNvbnN0IGNvbG9ySW50ZXJwb2xhdG9yID0gdGdkQWN0aW9uQ3JlYXRlVmVjM0ludGVycG9sYXRpb24oe1xcblxcdFxcdFxcdGZyb206IG5ldyBUZ2RWZWMzKFtjbGVhci5yZWQsIGNsZWFyLmdyZWVuLCBjbGVhci5ibHVlXSksXFxuXFx0XFx0XFx0dG86IG5ldyBUZ2RWZWMzKFtNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpXSksXFxuXFx0XFx0XFx0YWN0aW9uOiAoW3JlZCwgZ3JlZW4sIGJsdWVdKSA9PiB7XFxuXFx0XFx0XFx0XFx0Y2xlYXIucmVkID0gcmVkO1xcblxcdFxcdFxcdFxcdGNsZWFyLmdyZWVuID0gZ3JlZW47XFxuXFx0XFx0XFx0XFx0Y2xlYXIuYmx1ZSA9IGJsdWU7XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHR9KTtcXG5cXHRcXHRjdHguYW5pbVNjaGVkdWxlKHtcXG5cXHRcXHRcXHRkdXJhdGlvbjogMC41LFxcblxcdFxcdFxcdGFjdGlvbjogY29sb3JJbnRlcnBvbGF0b3IsXFxuXFx0XFx0XFx0b25FbmQ6ICgpID0+IChlbmFibGVkID0gdHJ1ZSksXFxuXFx0XFx0fSk7XFxuXFx0XFx0Y2xlYXIucmVkID0gTWF0aC5yYW5kb20oKSArIDE7XFxuXFx0XFx0Y2xlYXIuZ3JlZW4gPSBNYXRoLnJhbmRvbSgpO1xcblxcdFxcdGNsZWFyLmJsdWUgPSBNYXRoLnJhbmRvbSgpO1xcblxcdH0pO1xcblxcdGN0eC5wYWludCgpO1xcblxcdHJldHVybiBjdHg7XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0Y29uc3QgaGFuZGxlTW91bnQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwpID0+IHtcXG5cXHRcXHRpZiAoY2FudmFzKSBpbml0KGNhbnZhcyk7XFxuXFx0fTtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxjYW52YXNcXG5cXHRcXHRcXHRyZWY9e2hhbmRsZU1vdW50fVxcblxcdFxcdFxcdHN0eWxlPXt7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IFxcXCIzMjBweFxcXCIsXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiBcXFwiMjQwcHhcXFwiLFxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQ6IFxcXCIjMDAwXFxcIixcXG5cXHRcXHRcXHR9fVxcblxcdFxcdD48L2NhbnZhcz5cXG5cXHQpO1xcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0dGdkQWN0aW9uQ3JlYXRlVmVjM0ludGVycG9sYXRpb24sXG5cdFRnZENvbnRleHQsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkVmVjMyxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogVGdkQ29udGV4dCB7XG5cdGNvbnN0IGN0eCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcyk7XG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFsxLCAwLjcsIDAsIDFdIH0pO1xuXHRjdHguYWRkKGNsZWFyKTtcblx0LyoqXG5cdCAqIFdoaWxlIHRyYW5zaXRpb25pbmcgdG8gYW5vdGhlciBjb2xvciwgd2UgZG9uJ3Qgd2FudCB0aGUgdXNlclxuXHQgKiB0byBiZSBhYmxlIHRvIGNsaWNrLlxuXHQgKi9cblx0bGV0IGVuYWJsZWQgPSBmYWxzZTtcblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0LyoqXG5cdFx0ICogT24gY2xpY2ssIHdlIHdhbnQgdG8gaW50ZXJwb2xhdGUgdG8gYW5vdGhlciByYW5kb20gY29sb3IuXG5cdFx0ICovXG5cdFx0Y29uc3QgY29sb3JJbnRlcnBvbGF0b3IgPSB0Z2RBY3Rpb25DcmVhdGVWZWMzSW50ZXJwb2xhdGlvbih7XG5cdFx0XHRmcm9tOiBuZXcgVGdkVmVjMyhbY2xlYXIucmVkLCBjbGVhci5ncmVlbiwgY2xlYXIuYmx1ZV0pLFxuXHRcdFx0dG86IG5ldyBUZ2RWZWMzKFtNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpXSksXG5cdFx0XHRhY3Rpb246IChbcmVkLCBncmVlbiwgYmx1ZV0pID0+IHtcblx0XHRcdFx0Y2xlYXIucmVkID0gcmVkO1xuXHRcdFx0XHRjbGVhci5ncmVlbiA9IGdyZWVuO1xuXHRcdFx0XHRjbGVhci5ibHVlID0gYmx1ZTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0Y3R4LmFuaW1TY2hlZHVsZSh7XG5cdFx0XHRkdXJhdGlvbjogMC41LFxuXHRcdFx0YWN0aW9uOiBjb2xvckludGVycG9sYXRvcixcblx0XHRcdG9uRW5kOiAoKSA9PiAoZW5hYmxlZCA9IHRydWUpLFxuXHRcdH0pO1xuXHRcdGNsZWFyLnJlZCA9IE1hdGgucmFuZG9tKCkgKyAxO1xuXHRcdGNsZWFyLmdyZWVuID0gTWF0aC5yYW5kb20oKTtcblx0XHRjbGVhci5ibHVlID0gTWF0aC5yYW5kb20oKTtcblx0fSk7XG5cdGN0eC5wYWludCgpO1xuXHRyZXR1cm4gY3R4O1xufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRjb25zdCBoYW5kbGVNb3VudCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCkgPT4ge1xuXHRcdGlmIChjYW52YXMpIGluaXQoY2FudmFzKTtcblx0fTtcblx0cmV0dXJuIChcblx0XHQ8Y2FudmFzXG5cdFx0XHRyZWY9e2hhbmRsZU1vdW50fVxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0d2lkdGg6IFwiMzIwcHhcIixcblx0XHRcdFx0aGVpZ2h0OiBcIjI0MHB4XCIsXG5cdFx0XHRcdGJhY2tncm91bmQ6IFwiIzAwMFwiLFxuXHRcdFx0fX1cblx0XHQ+PC9jYW52YXM+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZEFjdGlvbkNyZWF0ZVZlYzNJbnRlcnBvbGF0aW9uIiwiVGdkQ29udGV4dCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFZlYzMiLCJpbml0IiwiY2FudmFzIiwiY3R4IiwiY2xlYXIiLCJlbmFibGVkIiwiY29sb3JJbnRlcnBvbGF0b3IiLCJNYXRoIiwiYWN0aW9uIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwib25FbmQiLCJoYW5kbGVNb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUFzaUM7QUFDamtDLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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