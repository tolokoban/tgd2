"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_animation_chain_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_cs-fc3d35"], {
58357(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);



function init(ctx) {
    // #begin
    ctx.camera.transfo.distance = 10;
    var cube = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(ctx, {
        transfo: {
            position: [
                -1,
                -1,
                0
            ]
        }
    });
    ctx.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(ctx, {
        color: [
            0.4,
            0.2,
            0,
            1
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(ctx, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.lessOrEqual,
        children: [
            cube,
            new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(ctx, {
                material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
                    color: [
                        0.5,
                        0.5,
                        0.5,
                        1
                    ]
                }),
                transfo: {
                    position: [
                        0,
                        0,
                        -0.1
                    ]
                }
            })
        ]
    }));
    var anim1 = {
        duration: 1,
        easingFunction: _tolokoban_tgd__rspack_import_1.tgdEasingFunctionInOutCubic,
        action: function action(t) {
            cube.transfo.setPosition(-1, t * 2 - 1, 0);
        }
    };
    var anim2 = {
        duration: 1,
        easingFunction: _tolokoban_tgd__rspack_import_1.tgdEasingFunctionInOutCubic,
        action: function action(t) {
            cube.transfo.setPosition(t * 2 - 1, 1, 0);
        }
    };
    var anim3 = {
        duration: 1,
        easingFunction: _tolokoban_tgd__rspack_import_1.tgdEasingFunctionInOutCubic,
        action: function action(t) {
            cube.transfo.setPosition(+1, 1 - t * 2, 0);
        }
    };
    var anim4 = {
        duration: 1,
        easingFunction: _tolokoban_tgd__rspack_import_1.tgdEasingFunctionInOutCubic,
        action: function action(t) {
            cube.transfo.setPosition(1 - t * 2, -1, 0);
        }
    };
    ctx.animSchedule((0,_tolokoban_tgd__rspack_import_1.tgdAnimChain)([
        anim1,
        anim2,
        anim3,
        anim4
    ], {
        repeat: Infinity
    }));
    ctx.animSchedule((0,_tolokoban_tgd__rspack_import_1.tgdAnimChain)([
        {
            duration: 0.5,
            action: function action(t) {
                cube.transfo.setScale(1 - t * 0.5);
            }
        },
        {
            duration: 0.5,
            action: function action(t) {
                cube.transfo.setScale(1 - (1 - t) * 0.5);
            }
        }
    ], {
        repeat: Infinity
    }));
    ctx.paint();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/chain.demo.tsx",
        lineNumber: 90,
        columnNumber: 9
    }, this);
}


},
21695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _chain_demo__rspack_import_4 = __webpack_require__(58357);
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
    "Detail #1": "\tctx.camera.transfo.distance = 10;\n\tconst cube = new TgdPainterMesh(ctx, { transfo: { position: [-1, -1, 0] } });\n\tctx.add(\n\t\tnew TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n\t\tnew TgdPainterState(ctx, {\n\t\t\tdepth: webglPresetDepth.lessOrEqual,\n\t\t\tchildren: [\n\t\t\t\tcube,\n\t\t\t\tnew TgdPainterMesh(ctx, {\n\t\t\t\t\tmaterial: new TgdMaterialFlat({\n\t\t\t\t\t\tcolor: [0.5, 0.5, 0.5, 1],\n\t\t\t\t\t}),\n\t\t\t\t\ttransfo: { position: [0, 0, -0.1] },\n\t\t\t\t}),\n\t\t\t],\n\t\t}),\n\t);\n\tconst anim1: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(-1, t * 2 - 1, 0);\n\t\t},\n\t};\n\tconst anim2: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(t * 2 - 1, 1, 0);\n\t\t},\n\t};\n\tconst anim3: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(+1, 1 - t * 2, 0);\n\t\t},\n\t};\n\tconst anim4: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(1 - t * 2, -1, 0);\n\t\t},\n\t};\n\tctx.animSchedule(\n\t\ttgdAnimChain([anim1, anim2, anim3, anim4], {\n\t\t\trepeat: Infinity,\n\t\t}),\n\t);\n\tctx.animSchedule(\n\t\ttgdAnimChain(\n\t\t\t[\n\t\t\t\t{\n\t\t\t\t\tduration: 0.5,\n\t\t\t\t\taction(t) {\n\t\t\t\t\t\tcube.transfo.setScale(1 - t * 0.5);\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tduration: 0.5,\n\t\t\t\t\taction(t) {\n\t\t\t\t\t\tcube.transfo.setScale(1 - (1 - t) * 0.5);\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t],\n\t\t\t{ repeat: Infinity },\n\t\t),\n\t);\n\tctx.paint();"
};
var FULL = "import {\n\ttype TgdAnimation,\n\ttgdAnimChain,\n\ttype TgdContext,\n\ttgdEasingFunctionInOutCubic,\n\tTgdMaterialFlat,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport View from \"@/components/demo/Tgd\";\n\nfunction init(ctx: TgdContext) {\n\tctx.camera.transfo.distance = 10;\n\tconst cube = new TgdPainterMesh(ctx, { transfo: { position: [-1, -1, 0] } });\n\tctx.add(\n\t\tnew TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n\t\tnew TgdPainterState(ctx, {\n\t\t\tdepth: webglPresetDepth.lessOrEqual,\n\t\t\tchildren: [\n\t\t\t\tcube,\n\t\t\t\tnew TgdPainterMesh(ctx, {\n\t\t\t\t\tmaterial: new TgdMaterialFlat({\n\t\t\t\t\t\tcolor: [0.5, 0.5, 0.5, 1],\n\t\t\t\t\t}),\n\t\t\t\t\ttransfo: { position: [0, 0, -0.1] },\n\t\t\t\t}),\n\t\t\t],\n\t\t}),\n\t);\n\tconst anim1: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(-1, t * 2 - 1, 0);\n\t\t},\n\t};\n\tconst anim2: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(t * 2 - 1, 1, 0);\n\t\t},\n\t};\n\tconst anim3: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(+1, 1 - t * 2, 0);\n\t\t},\n\t};\n\tconst anim4: TgdAnimation = {\n\t\tduration: 1,\n\t\teasingFunction: tgdEasingFunctionInOutCubic,\n\t\taction(t) {\n\t\t\tcube.transfo.setPosition(1 - t * 2, -1, 0);\n\t\t},\n\t};\n\tctx.animSchedule(\n\t\ttgdAnimChain([anim1, anim2, anim3, anim4], {\n\t\t\trepeat: Infinity,\n\t\t}),\n\t);\n\tctx.animSchedule(\n\t\ttgdAnimChain(\n\t\t\t[\n\t\t\t\t{\n\t\t\t\t\tduration: 0.5,\n\t\t\t\t\taction(t) {\n\t\t\t\t\t\tcube.transfo.setScale(1 - t * 0.5);\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tduration: 0.5,\n\t\t\t\t\taction(t) {\n\t\t\t\t\t\tcube.transfo.setScale(1 - (1 - t) * 0.5);\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t],\n\t\t\t{ repeat: Infinity },\n\t\t),\n\t);\n\tctx.paint();\n}\n\nexport default function Demo() {\n\treturn <View onReady={init} />;\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_chain_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
32307(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var ___rspack_import_1 = __webpack_require__(21695);
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
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "You can chain animations with this utility:\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/tgdAnimChain.html",
                        children: "tgdAnimChain"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx",
                        lineNumber: 4,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In this example, we start two chains in parallel: one for the translations, one\nfor the scales."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(___rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfYW5pbWF0aW9uX2NoYWluX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jcy1mYzNkMzUuNDZiMzk4ZjEyMDI3OWZiMy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9hbmltYXRpb24vY2hhaW4vXy9jaGFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvYW5pbWF0aW9uL2NoYWluL18vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9hbmltYXRpb24vY2hhaW4vcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0dHlwZSBUZ2RBbmltYXRpb24sXG5cdHRnZEFuaW1DaGFpbixcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHR0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXG5cdFRnZE1hdGVyaWFsRmxhdCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcblx0Ly8gI2JlZ2luXG5cdGN0eC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDEwO1xuXHRjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwgeyB0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbLTEsIC0xLCAwXSB9IH0pO1xuXHRjdHguYWRkKFxuXHRcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC40LCAwLjIsIDAsIDFdIH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XG5cdFx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdGN1YmUsXG5cdFx0XHRcdG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcblx0XHRcdFx0XHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7XG5cdFx0XHRcdFx0XHRjb2xvcjogWzAuNSwgMC41LCAwLjUsIDFdLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHRyYW5zZm86IHsgcG9zaXRpb246IFswLCAwLCAtMC4xXSB9LFxuXHRcdFx0XHR9KSxcblx0XHRcdF0sXG5cdFx0fSksXG5cdCk7XG5cdGNvbnN0IGFuaW0xOiBUZ2RBbmltYXRpb24gPSB7XG5cdFx0ZHVyYXRpb246IDEsXG5cdFx0ZWFzaW5nRnVuY3Rpb246IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRDdWJpYyxcblx0XHRhY3Rpb24odCkge1xuXHRcdFx0Y3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKC0xLCB0ICogMiAtIDEsIDApO1xuXHRcdH0sXG5cdH07XG5cdGNvbnN0IGFuaW0yOiBUZ2RBbmltYXRpb24gPSB7XG5cdFx0ZHVyYXRpb246IDEsXG5cdFx0ZWFzaW5nRnVuY3Rpb246IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRDdWJpYyxcblx0XHRhY3Rpb24odCkge1xuXHRcdFx0Y3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKHQgKiAyIC0gMSwgMSwgMCk7XG5cdFx0fSxcblx0fTtcblx0Y29uc3QgYW5pbTM6IFRnZEFuaW1hdGlvbiA9IHtcblx0XHRkdXJhdGlvbjogMSxcblx0XHRlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxuXHRcdGFjdGlvbih0KSB7XG5cdFx0XHRjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oKzEsIDEgLSB0ICogMiwgMCk7XG5cdFx0fSxcblx0fTtcblx0Y29uc3QgYW5pbTQ6IFRnZEFuaW1hdGlvbiA9IHtcblx0XHRkdXJhdGlvbjogMSxcblx0XHRlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxuXHRcdGFjdGlvbih0KSB7XG5cdFx0XHRjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oMSAtIHQgKiAyLCAtMSwgMCk7XG5cdFx0fSxcblx0fTtcblx0Y3R4LmFuaW1TY2hlZHVsZShcblx0XHR0Z2RBbmltQ2hhaW4oW2FuaW0xLCBhbmltMiwgYW5pbTMsIGFuaW00XSwge1xuXHRcdFx0cmVwZWF0OiBJbmZpbml0eSxcblx0XHR9KSxcblx0KTtcblx0Y3R4LmFuaW1TY2hlZHVsZShcblx0XHR0Z2RBbmltQ2hhaW4oXG5cdFx0XHRbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkdXJhdGlvbjogMC41LFxuXHRcdFx0XHRcdGFjdGlvbih0KSB7XG5cdFx0XHRcdFx0XHRjdWJlLnRyYW5zZm8uc2V0U2NhbGUoMSAtIHQgKiAwLjUpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkdXJhdGlvbjogMC41LFxuXHRcdFx0XHRcdGFjdGlvbih0KSB7XG5cdFx0XHRcdFx0XHRjdWJlLnRyYW5zZm8uc2V0U2NhbGUoMSAtICgxIC0gdCkgKiAwLjUpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0eyByZXBlYXQ6IEluZmluaXR5IH0sXG5cdFx0KSxcblx0KTtcblx0Y3R4LnBhaW50KCk7XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IC8+O1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2NoYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiXFx0Y3R4LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTA7XFxuXFx0Y29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHsgdHJhbnNmbzogeyBwb3NpdGlvbjogWy0xLCAtMSwgMF0gfSB9KTtcXG5cXHRjdHguYWRkKFxcblxcdFxcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC40LCAwLjIsIDAsIDFdIH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuXFx0XFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtcXG5cXHRcXHRcXHRcXHRjdWJlLFxcblxcdFxcdFxcdFxcdG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcXG5cXHRcXHRcXHRcXHRcXHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7XFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IFswLjUsIDAuNSwgMC41LCAxXSxcXG5cXHRcXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRcXHRcXHR0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbMCwgMCwgLTAuMV0gfSxcXG5cXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRdLFxcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29uc3QgYW5pbTE6IFRnZEFuaW1hdGlvbiA9IHtcXG5cXHRcXHRkdXJhdGlvbjogMSxcXG5cXHRcXHRlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxcblxcdFxcdGFjdGlvbih0KSB7XFxuXFx0XFx0XFx0Y3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKC0xLCB0ICogMiAtIDEsIDApO1xcblxcdFxcdH0sXFxuXFx0fTtcXG5cXHRjb25zdCBhbmltMjogVGdkQW5pbWF0aW9uID0ge1xcblxcdFxcdGR1cmF0aW9uOiAxLFxcblxcdFxcdGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXFxuXFx0XFx0YWN0aW9uKHQpIHtcXG5cXHRcXHRcXHRjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24odCAqIDIgLSAxLCAxLCAwKTtcXG5cXHRcXHR9LFxcblxcdH07XFxuXFx0Y29uc3QgYW5pbTM6IFRnZEFuaW1hdGlvbiA9IHtcXG5cXHRcXHRkdXJhdGlvbjogMSxcXG5cXHRcXHRlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxcblxcdFxcdGFjdGlvbih0KSB7XFxuXFx0XFx0XFx0Y3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKCsxLCAxIC0gdCAqIDIsIDApO1xcblxcdFxcdH0sXFxuXFx0fTtcXG5cXHRjb25zdCBhbmltNDogVGdkQW5pbWF0aW9uID0ge1xcblxcdFxcdGR1cmF0aW9uOiAxLFxcblxcdFxcdGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXFxuXFx0XFx0YWN0aW9uKHQpIHtcXG5cXHRcXHRcXHRjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oMSAtIHQgKiAyLCAtMSwgMCk7XFxuXFx0XFx0fSxcXG5cXHR9O1xcblxcdGN0eC5hbmltU2NoZWR1bGUoXFxuXFx0XFx0dGdkQW5pbUNoYWluKFthbmltMSwgYW5pbTIsIGFuaW0zLCBhbmltNF0sIHtcXG5cXHRcXHRcXHRyZXBlYXQ6IEluZmluaXR5LFxcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y3R4LmFuaW1TY2hlZHVsZShcXG5cXHRcXHR0Z2RBbmltQ2hhaW4oXFxuXFx0XFx0XFx0W1xcblxcdFxcdFxcdFxcdHtcXG5cXHRcXHRcXHRcXHRcXHRkdXJhdGlvbjogMC41LFxcblxcdFxcdFxcdFxcdFxcdGFjdGlvbih0KSB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0Y3ViZS50cmFuc2ZvLnNldFNjYWxlKDEgLSB0ICogMC41KTtcXG5cXHRcXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0e1xcblxcdFxcdFxcdFxcdFxcdGR1cmF0aW9uOiAwLjUsXFxuXFx0XFx0XFx0XFx0XFx0YWN0aW9uKHQpIHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRjdWJlLnRyYW5zZm8uc2V0U2NhbGUoMSAtICgxIC0gdCkgKiAwLjUpO1xcblxcdFxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRdLFxcblxcdFxcdFxcdHsgcmVwZWF0OiBJbmZpbml0eSB9LFxcblxcdFxcdCksXFxuXFx0KTtcXG5cXHRjdHgucGFpbnQoKTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dHlwZSBUZ2RBbmltYXRpb24sXFxuXFx0dGdkQW5pbUNoYWluLFxcblxcdHR5cGUgVGdkQ29udGV4dCxcXG5cXHR0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXFxuXFx0VGdkTWF0ZXJpYWxGbGF0LFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyTWVzaCxcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0d2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5pbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XFxuXFx0Y3R4LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTA7XFxuXFx0Y29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHsgdHJhbnNmbzogeyBwb3NpdGlvbjogWy0xLCAtMSwgMF0gfSB9KTtcXG5cXHRjdHguYWRkKFxcblxcdFxcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC40LCAwLjIsIDAsIDFdIH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuXFx0XFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtcXG5cXHRcXHRcXHRcXHRjdWJlLFxcblxcdFxcdFxcdFxcdG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcXG5cXHRcXHRcXHRcXHRcXHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7XFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IFswLjUsIDAuNSwgMC41LCAxXSxcXG5cXHRcXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRcXHRcXHR0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbMCwgMCwgLTAuMV0gfSxcXG5cXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRdLFxcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29uc3QgYW5pbTE6IFRnZEFuaW1hdGlvbiA9IHtcXG5cXHRcXHRkdXJhdGlvbjogMSxcXG5cXHRcXHRlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxcblxcdFxcdGFjdGlvbih0KSB7XFxuXFx0XFx0XFx0Y3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKC0xLCB0ICogMiAtIDEsIDApO1xcblxcdFxcdH0sXFxuXFx0fTtcXG5cXHRjb25zdCBhbmltMjogVGdkQW5pbWF0aW9uID0ge1xcblxcdFxcdGR1cmF0aW9uOiAxLFxcblxcdFxcdGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXFxuXFx0XFx0YWN0aW9uKHQpIHtcXG5cXHRcXHRcXHRjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24odCAqIDIgLSAxLCAxLCAwKTtcXG5cXHRcXHR9LFxcblxcdH07XFxuXFx0Y29uc3QgYW5pbTM6IFRnZEFuaW1hdGlvbiA9IHtcXG5cXHRcXHRkdXJhdGlvbjogMSxcXG5cXHRcXHRlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxcblxcdFxcdGFjdGlvbih0KSB7XFxuXFx0XFx0XFx0Y3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKCsxLCAxIC0gdCAqIDIsIDApO1xcblxcdFxcdH0sXFxuXFx0fTtcXG5cXHRjb25zdCBhbmltNDogVGdkQW5pbWF0aW9uID0ge1xcblxcdFxcdGR1cmF0aW9uOiAxLFxcblxcdFxcdGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXFxuXFx0XFx0YWN0aW9uKHQpIHtcXG5cXHRcXHRcXHRjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oMSAtIHQgKiAyLCAtMSwgMCk7XFxuXFx0XFx0fSxcXG5cXHR9O1xcblxcdGN0eC5hbmltU2NoZWR1bGUoXFxuXFx0XFx0dGdkQW5pbUNoYWluKFthbmltMSwgYW5pbTIsIGFuaW0zLCBhbmltNF0sIHtcXG5cXHRcXHRcXHRyZXBlYXQ6IEluZmluaXR5LFxcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y3R4LmFuaW1TY2hlZHVsZShcXG5cXHRcXHR0Z2RBbmltQ2hhaW4oXFxuXFx0XFx0XFx0W1xcblxcdFxcdFxcdFxcdHtcXG5cXHRcXHRcXHRcXHRcXHRkdXJhdGlvbjogMC41LFxcblxcdFxcdFxcdFxcdFxcdGFjdGlvbih0KSB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0Y3ViZS50cmFuc2ZvLnNldFNjYWxlKDEgLSB0ICogMC41KTtcXG5cXHRcXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0e1xcblxcdFxcdFxcdFxcdFxcdGR1cmF0aW9uOiAwLjUsXFxuXFx0XFx0XFx0XFx0XFx0YWN0aW9uKHQpIHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRjdWJlLnRyYW5zZm8uc2V0U2NhbGUoMSAtICgxIC0gdCkgKiAwLjUpO1xcblxcdFxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRdLFxcblxcdFxcdFxcdHsgcmVwZWF0OiBJbmZpbml0eSB9LFxcblxcdFxcdCksXFxuXFx0KTtcXG5cXHRjdHgucGFpbnQoKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz47XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInRnZEFuaW1DaGFpbiIsInRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRDdWJpYyIsIlRnZE1hdGVyaWFsRmxhdCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJpbml0IiwiY3R4IiwiY3ViZSIsImFuaW0xIiwiYWN0aW9uIiwidCIsImFuaW0yIiwiYW5pbTMiLCJhbmltNCIsIkluZmluaXR5IiwiRGVtbyIsIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVV3QjtBQUNpQjtBQUV6QyxTQUFTUSxLQUFLQyxHQUFlO0lBQzVCLFNBQVM7SUFDVEEsSUFBSSxNQUFN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