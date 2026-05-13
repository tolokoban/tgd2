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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/clear/_/main.demo/main.demo.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9jbGVhcl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLmU4ODBhMDYzYTllNThhZjMuanMiLCJzb3VyY2VzIjpbIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9jbGVhci9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvY2xlYXIvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9jbGVhci9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJEZXRhaWwgIzFcIjpcbiAgICAgICAgJ2Z1bmN0aW9uIGluaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFRnZENvbnRleHQge1xcbiAgICBjb25zdCBjdHggPSBuZXcgVGdkQ29udGV4dChjYW52YXMpXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFsxLCAwLjcsIDAsIDFdIH0pXFxuICAgIGN0eC5hZGQoY2xlYXIpXFxuICAgIC8qKlxcbiAgICAgKiBXaGlsZSB0cmFuc2l0aW9uaW5nIHRvIGFub3RoZXIgY29sb3IsIHdlIGRvblxcJ3Qgd2FudCB0aGUgdXNlclxcbiAgICAgKiB0byBiZSBhYmxlIHRvIGNsaWNrLlxcbiAgICAgKi9cXG4gICAgbGV0IGVuYWJsZWQgPSBmYWxzZVxcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcXG4gICAgICAgIC8qKlxcbiAgICAgICAgICogT24gY2xpY2ssIHdlIHdhbnQgdG8gaW50ZXJwb2xhdGUgdG8gYW5vdGhlciByYW5kb20gY29sb3IuXFxuICAgICAgICAgKi9cXG4gICAgICAgIGNvbnN0IGNvbG9ySW50ZXJwb2xhdG9yID0gdGdkQWN0aW9uQ3JlYXRlVmVjM0ludGVycG9sYXRpb24oe1xcbiAgICAgICAgICAgIGZyb206IG5ldyBUZ2RWZWMzKFtjbGVhci5yZWQsIGNsZWFyLmdyZWVuLCBjbGVhci5ibHVlXSksXFxuICAgICAgICAgICAgdG86IG5ldyBUZ2RWZWMzKFtNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpXSksXFxuICAgICAgICAgICAgYWN0aW9uOiAoW3JlZCwgZ3JlZW4sIGJsdWVdKSA9PiB7XFxuICAgICAgICAgICAgICAgIGNsZWFyLnJlZCA9IHJlZFxcbiAgICAgICAgICAgICAgICBjbGVhci5ncmVlbiA9IGdyZWVuXFxuICAgICAgICAgICAgICAgIGNsZWFyLmJsdWUgPSBibHVlXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pXFxuICAgICAgICBjdHguYW5pbVNjaGVkdWxlKHtcXG4gICAgICAgICAgICBkdXJhdGlvbjogMC41LFxcbiAgICAgICAgICAgIGFjdGlvbjogY29sb3JJbnRlcnBvbGF0b3IsXFxuICAgICAgICAgICAgb25FbmQ6ICgpID0+IChlbmFibGVkID0gdHJ1ZSksXFxuICAgICAgICB9KVxcbiAgICAgICAgY2xlYXIucmVkID0gTWF0aC5yYW5kb20oKSArIDFcXG4gICAgICAgIGNsZWFyLmdyZWVuID0gTWF0aC5yYW5kb20oKVxcbiAgICAgICAgY2xlYXIuYmx1ZSA9IE1hdGgucmFuZG9tKClcXG4gICAgfSlcXG4gICAgY3R4LnBhaW50KClcXG4gICAgcmV0dXJuIGN0eFxcbn0nLFxufVxuY29uc3QgRlVMTCA9XG4gICAgJ2ltcG9ydCB7XFxuICAgIHRnZEFjdGlvbkNyZWF0ZVZlYzNJbnRlcnBvbGF0aW9uLFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFZlYzMsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxcblxcbmZ1bmN0aW9uIGluaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IFRnZENvbnRleHQge1xcbiAgICBjb25zdCBjdHggPSBuZXcgVGdkQ29udGV4dChjYW52YXMpXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFsxLCAwLjcsIDAsIDFdIH0pXFxuICAgIGN0eC5hZGQoY2xlYXIpXFxuICAgIC8qKlxcbiAgICAgKiBXaGlsZSB0cmFuc2l0aW9uaW5nIHRvIGFub3RoZXIgY29sb3IsIHdlIGRvblxcJ3Qgd2FudCB0aGUgdXNlclxcbiAgICAgKiB0byBiZSBhYmxlIHRvIGNsaWNrLlxcbiAgICAgKi9cXG4gICAgbGV0IGVuYWJsZWQgPSBmYWxzZVxcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcXG4gICAgICAgIC8qKlxcbiAgICAgICAgICogT24gY2xpY2ssIHdlIHdhbnQgdG8gaW50ZXJwb2xhdGUgdG8gYW5vdGhlciByYW5kb20gY29sb3IuXFxuICAgICAgICAgKi9cXG4gICAgICAgIGNvbnN0IGNvbG9ySW50ZXJwb2xhdG9yID0gdGdkQWN0aW9uQ3JlYXRlVmVjM0ludGVycG9sYXRpb24oe1xcbiAgICAgICAgICAgIGZyb206IG5ldyBUZ2RWZWMzKFtjbGVhci5yZWQsIGNsZWFyLmdyZWVuLCBjbGVhci5ibHVlXSksXFxuICAgICAgICAgICAgdG86IG5ldyBUZ2RWZWMzKFtNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpXSksXFxuICAgICAgICAgICAgYWN0aW9uOiAoW3JlZCwgZ3JlZW4sIGJsdWVdKSA9PiB7XFxuICAgICAgICAgICAgICAgIGNsZWFyLnJlZCA9IHJlZFxcbiAgICAgICAgICAgICAgICBjbGVhci5ncmVlbiA9IGdyZWVuXFxuICAgICAgICAgICAgICAgIGNsZWFyLmJsdWUgPSBibHVlXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pXFxuICAgICAgICBjdHguYW5pbVNjaGVkdWxlKHtcXG4gICAgICAgICAgICBkdXJhdGlvbjogMC41LFxcbiAgICAgICAgICAgIGFjdGlvbjogY29sb3JJbnRlcnBvbGF0b3IsXFxuICAgICAgICAgICAgb25FbmQ6ICgpID0+IChlbmFibGVkID0gdHJ1ZSksXFxuICAgICAgICB9KVxcbiAgICAgICAgY2xlYXIucmVkID0gTWF0aC5yYW5kb20oKSArIDFcXG4gICAgICAgIGNsZWFyLmdyZWVuID0gTWF0aC5yYW5kb20oKVxcbiAgICAgICAgY2xlYXIuYmx1ZSA9IE1hdGgucmFuZG9tKClcXG4gICAgfSlcXG4gICAgY3R4LnBhaW50KClcXG4gICAgcmV0dXJuIGN0eFxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCBoYW5kbGVNb3VudCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCkgPT4ge1xcbiAgICAgICAgaWYgKGNhbnZhcykgaW5pdChjYW52YXMpXFxuICAgIH1cXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxjYW52YXNcXG4gICAgICAgICAgICByZWY9e2hhbmRsZU1vdW50fVxcbiAgICAgICAgICAgIHN0eWxlPXt7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMyMHB4XCIsXFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNDBweFwiLFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMDBcIixcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgPjwvY2FudmFzPlxcbiAgICApXFxufVxcbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8RGVtbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgdGdkQWN0aW9uQ3JlYXRlVmVjM0ludGVycG9sYXRpb24sIFRnZENvbnRleHQsIFRnZFBhaW50ZXJDbGVhciwgVGdkVmVjMyB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogVGdkQ29udGV4dCB7XG4gICAgY29uc3QgY3R4ID0gbmV3IFRnZENvbnRleHQoY2FudmFzKVxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFsxLCAwLjcsIDAsIDFdIH0pXG4gICAgY3R4LmFkZChjbGVhcilcbiAgICAvKipcbiAgICAgKiBXaGlsZSB0cmFuc2l0aW9uaW5nIHRvIGFub3RoZXIgY29sb3IsIHdlIGRvbid0IHdhbnQgdGhlIHVzZXJcbiAgICAgKiB0byBiZSBhYmxlIHRvIGNsaWNrLlxuICAgICAqL1xuICAgIGxldCBlbmFibGVkID0gZmFsc2VcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9uIGNsaWNrLCB3ZSB3YW50IHRvIGludGVycG9sYXRlIHRvIGFub3RoZXIgcmFuZG9tIGNvbG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY29sb3JJbnRlcnBvbGF0b3IgPSB0Z2RBY3Rpb25DcmVhdGVWZWMzSW50ZXJwb2xhdGlvbih7XG4gICAgICAgICAgICBmcm9tOiBuZXcgVGdkVmVjMyhbY2xlYXIucmVkLCBjbGVhci5ncmVlbiwgY2xlYXIuYmx1ZV0pLFxuICAgICAgICAgICAgdG86IG5ldyBUZ2RWZWMzKFtNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpXSksXG4gICAgICAgICAgICBhY3Rpb246IChbcmVkLCBncmVlbiwgYmx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhci5yZWQgPSByZWRcbiAgICAgICAgICAgICAgICBjbGVhci5ncmVlbiA9IGdyZWVuXG4gICAgICAgICAgICAgICAgY2xlYXIuYmx1ZSA9IGJsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIGN0eC5hbmltU2NoZWR1bGUoe1xuICAgICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgICAgIGFjdGlvbjogY29sb3JJbnRlcnBvbGF0b3IsXG4gICAgICAgICAgICBvbkVuZDogKCkgPT4gKGVuYWJsZWQgPSB0cnVlKSxcbiAgICAgICAgfSlcbiAgICAgICAgY2xlYXIucmVkID0gTWF0aC5yYW5kb20oKSArIDFcbiAgICAgICAgY2xlYXIuZ3JlZW4gPSBNYXRoLnJhbmRvbSgpXG4gICAgICAgIGNsZWFyLmJsdWUgPSBNYXRoLnJhbmRvbSgpXG4gICAgfSlcbiAgICBjdHgucGFpbnQoKVxuICAgIHJldHVybiBjdHhcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCBoYW5kbGVNb3VudCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgICAgICBpZiAoY2FudmFzKSBpbml0KGNhbnZhcylcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgcmVmPXtoYW5kbGVNb3VudH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzIwcHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjQwcHhcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMDBcIixcbiAgICAgICAgICAgIH19PjwvY2FudmFzPlxuICAgIClcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQWN0aW9uQ3JlYXRlVmVjM0ludGVycG9sYXRpb24iLCJUZ2RDb250ZXh0IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkVmVjMyIsImluaXQiLCJjYW52YXMiLCJjdHgiLCJjbGVhciIsImVuYWJsZWQiLCJjb2xvckludGVycG9sYXRvciIsIk1hdGgiLCJhY3Rpb24iLCJyZWQiLCJncmVlbiIsImJsdWUiLCJvbkVuZCIsImhhbmRsZU1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1JLFFBQVE7SUFDVixhQUNJO0FBQ1I7QUFDQSxJQUFNQyxPQUNGO0FBRVcsU0FBU0M7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