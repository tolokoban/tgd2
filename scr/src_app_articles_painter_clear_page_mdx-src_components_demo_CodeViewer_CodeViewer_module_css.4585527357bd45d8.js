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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/main.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "How to fill all the pixels of the canvas with a unique color."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Click the canvas (the rectangle below) to set an new random color."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9jbGVhcl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLjQ1ODU1MjczNTdiZDQ1ZDguanMiLCJzb3VyY2VzIjpbIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9jbGVhci9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvY2xlYXIvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9jbGVhci9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFRnZENvbnRleHQge1xcblxcdGNvbnN0IGN0eCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcyk7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzEsIDAuNywgMCwgMV0gfSk7XFxuXFx0Y3R4LmFkZChjbGVhcik7XFxuXFx0LyoqXFxuXFx0ICogV2hpbGUgdHJhbnNpdGlvbmluZyB0byBhbm90aGVyIGNvbG9yLCB3ZSBkb24ndCB3YW50IHRoZSB1c2VyXFxuXFx0ICogdG8gYmUgYWJsZSB0byBjbGljay5cXG5cXHQgKi9cXG5cXHRsZXQgZW5hYmxlZCA9IGZhbHNlO1xcblxcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFxcXCJjbGlja1xcXCIsICgpID0+IHtcXG5cXHRcXHQvKipcXG5cXHRcXHQgKiBPbiBjbGljaywgd2Ugd2FudCB0byBpbnRlcnBvbGF0ZSB0byBhbm90aGVyIHJhbmRvbSBjb2xvci5cXG5cXHRcXHQgKi9cXG5cXHRcXHRjb25zdCBjb2xvckludGVycG9sYXRvciA9IHRnZEFjdGlvbkNyZWF0ZVZlYzNJbnRlcnBvbGF0aW9uKHtcXG5cXHRcXHRcXHRmcm9tOiBuZXcgVGdkVmVjMyhbY2xlYXIucmVkLCBjbGVhci5ncmVlbiwgY2xlYXIuYmx1ZV0pLFxcblxcdFxcdFxcdHRvOiBuZXcgVGdkVmVjMyhbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKV0pLFxcblxcdFxcdFxcdGFjdGlvbjogKFtyZWQsIGdyZWVuLCBibHVlXSkgPT4ge1xcblxcdFxcdFxcdFxcdGNsZWFyLnJlZCA9IHJlZDtcXG5cXHRcXHRcXHRcXHRjbGVhci5ncmVlbiA9IGdyZWVuO1xcblxcdFxcdFxcdFxcdGNsZWFyLmJsdWUgPSBibHVlO1xcblxcdFxcdFxcdH0sXFxuXFx0XFx0fSk7XFxuXFx0XFx0Y3R4LmFuaW1TY2hlZHVsZSh7XFxuXFx0XFx0XFx0ZHVyYXRpb246IDAuNSxcXG5cXHRcXHRcXHRhY3Rpb246IGNvbG9ySW50ZXJwb2xhdG9yLFxcblxcdFxcdFxcdG9uRW5kOiAoKSA9PiAoZW5hYmxlZCA9IHRydWUpLFxcblxcdFxcdH0pO1xcblxcdFxcdGNsZWFyLnJlZCA9IE1hdGgucmFuZG9tKCkgKyAxO1xcblxcdFxcdGNsZWFyLmdyZWVuID0gTWF0aC5yYW5kb20oKTtcXG5cXHRcXHRjbGVhci5ibHVlID0gTWF0aC5yYW5kb20oKTtcXG5cXHR9KTtcXG5cXHRjdHgucGFpbnQoKTtcXG5cXHRyZXR1cm4gY3R4O1xcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dGdkQWN0aW9uQ3JlYXRlVmVjM0ludGVycG9sYXRpb24sXFxuXFx0VGdkQ29udGV4dCxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkVmVjMyxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBUZ2RDb250ZXh0IHtcXG5cXHRjb25zdCBjdHggPSBuZXcgVGdkQ29udGV4dChjYW52YXMpO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFsxLCAwLjcsIDAsIDFdIH0pO1xcblxcdGN0eC5hZGQoY2xlYXIpO1xcblxcdC8qKlxcblxcdCAqIFdoaWxlIHRyYW5zaXRpb25pbmcgdG8gYW5vdGhlciBjb2xvciwgd2UgZG9uJ3Qgd2FudCB0aGUgdXNlclxcblxcdCAqIHRvIGJlIGFibGUgdG8gY2xpY2suXFxuXFx0ICovXFxuXFx0bGV0IGVuYWJsZWQgPSBmYWxzZTtcXG5cXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcXFwiY2xpY2tcXFwiLCAoKSA9PiB7XFxuXFx0XFx0LyoqXFxuXFx0XFx0ICogT24gY2xpY2ssIHdlIHdhbnQgdG8gaW50ZXJwb2xhdGUgdG8gYW5vdGhlciByYW5kb20gY29sb3IuXFxuXFx0XFx0ICovXFxuXFx0XFx0Y29uc3QgY29sb3JJbnRlcnBvbGF0b3IgPSB0Z2RBY3Rpb25DcmVhdGVWZWMzSW50ZXJwb2xhdGlvbih7XFxuXFx0XFx0XFx0ZnJvbTogbmV3IFRnZFZlYzMoW2NsZWFyLnJlZCwgY2xlYXIuZ3JlZW4sIGNsZWFyLmJsdWVdKSxcXG5cXHRcXHRcXHR0bzogbmV3IFRnZFZlYzMoW01hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCldKSxcXG5cXHRcXHRcXHRhY3Rpb246IChbcmVkLCBncmVlbiwgYmx1ZV0pID0+IHtcXG5cXHRcXHRcXHRcXHRjbGVhci5yZWQgPSByZWQ7XFxuXFx0XFx0XFx0XFx0Y2xlYXIuZ3JlZW4gPSBncmVlbjtcXG5cXHRcXHRcXHRcXHRjbGVhci5ibHVlID0gYmx1ZTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdH0pO1xcblxcdFxcdGN0eC5hbmltU2NoZWR1bGUoe1xcblxcdFxcdFxcdGR1cmF0aW9uOiAwLjUsXFxuXFx0XFx0XFx0YWN0aW9uOiBjb2xvckludGVycG9sYXRvcixcXG5cXHRcXHRcXHRvbkVuZDogKCkgPT4gKGVuYWJsZWQgPSB0cnVlKSxcXG5cXHRcXHR9KTtcXG5cXHRcXHRjbGVhci5yZWQgPSBNYXRoLnJhbmRvbSgpICsgMTtcXG5cXHRcXHRjbGVhci5ncmVlbiA9IE1hdGgucmFuZG9tKCk7XFxuXFx0XFx0Y2xlYXIuYmx1ZSA9IE1hdGgucmFuZG9tKCk7XFxuXFx0fSk7XFxuXFx0Y3R4LnBhaW50KCk7XFxuXFx0cmV0dXJuIGN0eDtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRjb25zdCBoYW5kbGVNb3VudCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCkgPT4ge1xcblxcdFxcdGlmIChjYW52YXMpIGluaXQoY2FudmFzKTtcXG5cXHR9O1xcblxcdHJldHVybiAoXFxuXFx0XFx0PGNhbnZhc1xcblxcdFxcdFxcdHJlZj17aGFuZGxlTW91bnR9XFxuXFx0XFx0XFx0c3R5bGU9e3tcXG5cXHRcXHRcXHRcXHR3aWR0aDogXFxcIjMyMHB4XFxcIixcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IFxcXCIyNDBweFxcXCIsXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZDogXFxcIiMwMDBcXFwiLFxcblxcdFxcdFxcdH19XFxuXFx0XFx0PjwvY2FudmFzPlxcblxcdCk7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHR0Z2RBY3Rpb25DcmVhdGVWZWMzSW50ZXJwb2xhdGlvbixcblx0VGdkQ29udGV4dCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RWZWMzLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBUZ2RDb250ZXh0IHtcblx0Y29uc3QgY3R4ID0gbmV3IFRnZENvbnRleHQoY2FudmFzKTtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzEsIDAuNywgMCwgMV0gfSk7XG5cdGN0eC5hZGQoY2xlYXIpO1xuXHQvKipcblx0ICogV2hpbGUgdHJhbnNpdGlvbmluZyB0byBhbm90aGVyIGNvbG9yLCB3ZSBkb24ndCB3YW50IHRoZSB1c2VyXG5cdCAqIHRvIGJlIGFibGUgdG8gY2xpY2suXG5cdCAqL1xuXHRsZXQgZW5hYmxlZCA9IGZhbHNlO1xuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHQvKipcblx0XHQgKiBPbiBjbGljaywgd2Ugd2FudCB0byBpbnRlcnBvbGF0ZSB0byBhbm90aGVyIHJhbmRvbSBjb2xvci5cblx0XHQgKi9cblx0XHRjb25zdCBjb2xvckludGVycG9sYXRvciA9IHRnZEFjdGlvbkNyZWF0ZVZlYzNJbnRlcnBvbGF0aW9uKHtcblx0XHRcdGZyb206IG5ldyBUZ2RWZWMzKFtjbGVhci5yZWQsIGNsZWFyLmdyZWVuLCBjbGVhci5ibHVlXSksXG5cdFx0XHR0bzogbmV3IFRnZFZlYzMoW01hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCldKSxcblx0XHRcdGFjdGlvbjogKFtyZWQsIGdyZWVuLCBibHVlXSkgPT4ge1xuXHRcdFx0XHRjbGVhci5yZWQgPSByZWQ7XG5cdFx0XHRcdGNsZWFyLmdyZWVuID0gZ3JlZW47XG5cdFx0XHRcdGNsZWFyLmJsdWUgPSBibHVlO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRjdHguYW5pbVNjaGVkdWxlKHtcblx0XHRcdGR1cmF0aW9uOiAwLjUsXG5cdFx0XHRhY3Rpb246IGNvbG9ySW50ZXJwb2xhdG9yLFxuXHRcdFx0b25FbmQ6ICgpID0+IChlbmFibGVkID0gdHJ1ZSksXG5cdFx0fSk7XG5cdFx0Y2xlYXIucmVkID0gTWF0aC5yYW5kb20oKSArIDE7XG5cdFx0Y2xlYXIuZ3JlZW4gPSBNYXRoLnJhbmRvbSgpO1xuXHRcdGNsZWFyLmJsdWUgPSBNYXRoLnJhbmRvbSgpO1xuXHR9KTtcblx0Y3R4LnBhaW50KCk7XG5cdHJldHVybiBjdHg7XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdGNvbnN0IGhhbmRsZU1vdW50ID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsKSA9PiB7XG5cdFx0aWYgKGNhbnZhcykgaW5pdChjYW52YXMpO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxjYW52YXNcblx0XHRcdHJlZj17aGFuZGxlTW91bnR9XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHR3aWR0aDogXCIzMjBweFwiLFxuXHRcdFx0XHRoZWlnaHQ6IFwiMjQwcHhcIixcblx0XHRcdFx0YmFja2dyb3VuZDogXCIjMDAwXCIsXG5cdFx0XHR9fVxuXHRcdD48L2NhbnZhcz5cblx0KTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQWN0aW9uQ3JlYXRlVmVjM0ludGVycG9sYXRpb24iLCJUZ2RDb250ZXh0IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkVmVjMyIsImluaXQiLCJjYW52YXMiLCJjdHgiLCJjbGVhciIsImVuYWJsZWQiLCJjb2xvckludGVycG9sYXRvciIsIk1hdGgiLCJhY3Rpb24iLCJyZWQiLCJncmVlbiIsImJsdWUiLCJvbkVuZCIsImhhbmRsZU1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQXNpQztBQUNqa0MsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osc0NBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUd0QyxrREFBQ04sdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FBT00sT0FBT0gsT0FBT0Q7Ozs7Ozs7Ozs7Ozs7O0FBRzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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