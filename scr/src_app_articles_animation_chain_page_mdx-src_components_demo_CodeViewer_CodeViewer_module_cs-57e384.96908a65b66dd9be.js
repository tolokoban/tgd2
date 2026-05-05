"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_animation_chain_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_cs-57e384"], {
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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/chain.demo.tsx",
        lineNumber: 90,
        columnNumber: 12
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
    "Detail #1": "    ctx.camera.transfo.distance = 10\n    const cube = new TgdPainterMesh(ctx, { transfo: { position: [-1, -1, 0] } })\n    ctx.add(\n        new TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.lessOrEqual,\n            children: [\n                cube,\n                new TgdPainterMesh(ctx, {\n                    material: new TgdMaterialFlat({\n                        color: [0.5, 0.5, 0.5, 1],\n                    }),\n                    transfo: { position: [0, 0, -0.1] },\n                }),\n            ],\n        }),\n    )\n    const anim1: TgdAnimation = {\n        duration: 1,\n        easingFunction: tgdEasingFunctionInOutCubic,\n        action(t) {\n            cube.transfo.setPosition(-1, t * 2 - 1, 0)\n        },\n    }\n    const anim2: TgdAnimation = {\n        duration: 1,\n        easingFunction: tgdEasingFunctionInOutCubic,\n        action(t) {\n            cube.transfo.setPosition(t * 2 - 1, 1, 0)\n        },\n    }\n    const anim3: TgdAnimation = {\n        duration: 1,\n        easingFunction: tgdEasingFunctionInOutCubic,\n        action(t) {\n            cube.transfo.setPosition(+1, 1 - t * 2, 0)\n        },\n    }\n    const anim4: TgdAnimation = {\n        duration: 1,\n        easingFunction: tgdEasingFunctionInOutCubic,\n        action(t) {\n            cube.transfo.setPosition(1 - t * 2, -1, 0)\n        },\n    }\n    ctx.animSchedule(\n        tgdAnimChain([anim1, anim2, anim3, anim4], {\n            repeat: Infinity,\n        }),\n    )\n    ctx.animSchedule(\n        tgdAnimChain(\n            [\n                {\n                    duration: 0.5,\n                    action(t) {\n                        cube.transfo.setScale(1 - t * 0.5)\n                    },\n                },\n                {\n                    duration: 0.5,\n                    action(t) {\n                        cube.transfo.setScale(1 - (1 - t) * 0.5)\n                    },\n                },\n            ],\n            { repeat: Infinity },\n        ),\n    )\n    ctx.paint()"
};
var FULL = "import {\n    TgdAnimation,\n    tgdAnimChain,\n    TgdContext,\n    tgdEasingFunctionInOutCubic,\n    TgdMaterialFlat,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(ctx: TgdContext) {\n    ctx.camera.transfo.distance = 10\n    const cube = new TgdPainterMesh(ctx, { transfo: { position: [-1, -1, 0] } })\n    ctx.add(\n        new TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.lessOrEqual,\n            children: [\n                cube,\n                new TgdPainterMesh(ctx, {\n                    material: new TgdMaterialFlat({\n                        color: [0.5, 0.5, 0.5, 1],\n                    }),\n                    transfo: { position: [0, 0, -0.1] },\n                }),\n            ],\n        }),\n    )\n    const anim1: TgdAnimation = {\n        duration: 1,\n        easingFunction: tgdEasingFunctionInOutCubic,\n        action(t) {\n            cube.transfo.setPosition(-1, t * 2 - 1, 0)\n        },\n    }\n    const anim2: TgdAnimation = {\n        duration: 1,\n        easingFunction: tgdEasingFunctionInOutCubic,\n        action(t) {\n            cube.transfo.setPosition(t * 2 - 1, 1, 0)\n        },\n    }\n    const anim3: TgdAnimation = {\n        duration: 1,\n        easingFunction: tgdEasingFunctionInOutCubic,\n        action(t) {\n            cube.transfo.setPosition(+1, 1 - t * 2, 0)\n        },\n    }\n    const anim4: TgdAnimation = {\n        duration: 1,\n        easingFunction: tgdEasingFunctionInOutCubic,\n        action(t) {\n            cube.transfo.setPosition(1 - t * 2, -1, 0)\n        },\n    }\n    ctx.animSchedule(\n        tgdAnimChain([anim1, anim2, anim3, anim4], {\n            repeat: Infinity,\n        }),\n    )\n    ctx.animSchedule(\n        tgdAnimChain(\n            [\n                {\n                    duration: 0.5,\n                    action(t) {\n                        cube.transfo.setScale(1 - t * 0.5)\n                    },\n                },\n                {\n                    duration: 0.5,\n                    action(t) {\n                        cube.transfo.setScale(1 - (1 - t) * 0.5)\n                    },\n                },\n            ],\n            { repeat: Infinity },\n        ),\n    )\n    ctx.paint()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_chain_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/_/index.tsx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx",
                        lineNumber: 4,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In this example, we start two chains in parallel: one for the translations, one\nfor the scales."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(___rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/chain/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfYW5pbWF0aW9uX2NoYWluX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jcy01N2UzODQuOTY5MDhhNjViNjZkZDliZS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvYW5pbWF0aW9uL2NoYWluL18vY2hhaW4uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9hbmltYXRpb24vY2hhaW4vXy9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9hbmltYXRpb24vY2hhaW4vcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGdkQW5pbWF0aW9uLFxuICAgIHRnZEFuaW1DaGFpbixcbiAgICBUZ2RDb250ZXh0LFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRDdWJpYyxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY3R4LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTBcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwgeyB0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbLTEsIC0xLCAwXSB9IH0pXG4gICAgY3R4LmFkZChcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLjQsIDAuMiwgMCwgMV0gfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgY3ViZSxcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2goY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBbMC41LCAwLjUsIDAuNSwgMV0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbMCwgMCwgLTAuMV0gfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb25zdCBhbmltMTogVGdkQW5pbWF0aW9uID0ge1xuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgZWFzaW5nRnVuY3Rpb246IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRDdWJpYyxcbiAgICAgICAgYWN0aW9uKHQpIHtcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigtMSwgdCAqIDIgLSAxLCAwKVxuICAgICAgICB9LFxuICAgIH1cbiAgICBjb25zdCBhbmltMjogVGdkQW5pbWF0aW9uID0ge1xuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgZWFzaW5nRnVuY3Rpb246IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRDdWJpYyxcbiAgICAgICAgYWN0aW9uKHQpIHtcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbih0ICogMiAtIDEsIDEsIDApXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IGFuaW0zOiBUZ2RBbmltYXRpb24gPSB7XG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxuICAgICAgICBhY3Rpb24odCkge1xuICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKCsxLCAxIC0gdCAqIDIsIDApXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IGFuaW00OiBUZ2RBbmltYXRpb24gPSB7XG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxuICAgICAgICBhY3Rpb24odCkge1xuICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKDEgLSB0ICogMiwgLTEsIDApXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGN0eC5hbmltU2NoZWR1bGUoXG4gICAgICAgIHRnZEFuaW1DaGFpbihbYW5pbTEsIGFuaW0yLCBhbmltMywgYW5pbTRdLCB7XG4gICAgICAgICAgICByZXBlYXQ6IEluZmluaXR5LFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY3R4LmFuaW1TY2hlZHVsZShcbiAgICAgICAgdGdkQW5pbUNoYWluKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRTY2FsZSgxIC0gdCAqIDAuNSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRTY2FsZSgxIC0gKDEgLSB0KSAqIDAuNSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgcmVwZWF0OiBJbmZpbml0eSB9LFxuICAgICAgICApLFxuICAgIClcbiAgICBjdHgucGFpbnQoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz5cbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9jaGFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjdHguY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxMFxcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwgeyB0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbLTEsIC0xLCAwXSB9IH0pXFxuICAgIGN0eC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuNCwgMC4yLCAwLCAxXSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgY3ViZSxcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBbMC41LCAwLjUsIDAuNSwgMV0sXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm86IHsgcG9zaXRpb246IFswLCAwLCAtMC4xXSB9LFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29uc3QgYW5pbTE6IFRnZEFuaW1hdGlvbiA9IHtcXG4gICAgICAgIGR1cmF0aW9uOiAxLFxcbiAgICAgICAgZWFzaW5nRnVuY3Rpb246IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRDdWJpYyxcXG4gICAgICAgIGFjdGlvbih0KSB7XFxuICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKC0xLCB0ICogMiAtIDEsIDApXFxuICAgICAgICB9LFxcbiAgICB9XFxuICAgIGNvbnN0IGFuaW0yOiBUZ2RBbmltYXRpb24gPSB7XFxuICAgICAgICBkdXJhdGlvbjogMSxcXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXFxuICAgICAgICBhY3Rpb24odCkge1xcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbih0ICogMiAtIDEsIDEsIDApXFxuICAgICAgICB9LFxcbiAgICB9XFxuICAgIGNvbnN0IGFuaW0zOiBUZ2RBbmltYXRpb24gPSB7XFxuICAgICAgICBkdXJhdGlvbjogMSxcXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXFxuICAgICAgICBhY3Rpb24odCkge1xcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigrMSwgMSAtIHQgKiAyLCAwKVxcbiAgICAgICAgfSxcXG4gICAgfVxcbiAgICBjb25zdCBhbmltNDogVGdkQW5pbWF0aW9uID0ge1xcbiAgICAgICAgZHVyYXRpb246IDEsXFxuICAgICAgICBlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxcbiAgICAgICAgYWN0aW9uKHQpIHtcXG4gICAgICAgICAgICBjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oMSAtIHQgKiAyLCAtMSwgMClcXG4gICAgICAgIH0sXFxuICAgIH1cXG4gICAgY3R4LmFuaW1TY2hlZHVsZShcXG4gICAgICAgIHRnZEFuaW1DaGFpbihbYW5pbTEsIGFuaW0yLCBhbmltMywgYW5pbTRdLCB7XFxuICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGN0eC5hbmltU2NoZWR1bGUoXFxuICAgICAgICB0Z2RBbmltQ2hhaW4oXFxuICAgICAgICAgICAgW1xcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uKHQpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjdWJlLnRyYW5zZm8uc2V0U2NhbGUoMSAtIHQgKiAwLjUpXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uKHQpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjdWJlLnRyYW5zZm8uc2V0U2NhbGUoMSAtICgxIC0gdCkgKiAwLjUpXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgeyByZXBlYXQ6IEluZmluaXR5IH0sXFxuICAgICAgICApLFxcbiAgICApXFxuICAgIGN0eC5wYWludCgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBUZ2RBbmltYXRpb24sXFxuICAgIHRnZEFuaW1DaGFpbixcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCkge1xcbiAgICBjdHguY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxMFxcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwgeyB0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbLTEsIC0xLCAwXSB9IH0pXFxuICAgIGN0eC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuNCwgMC4yLCAwLCAxXSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgY3ViZSxcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBbMC41LCAwLjUsIDAuNSwgMV0sXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm86IHsgcG9zaXRpb246IFswLCAwLCAtMC4xXSB9LFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29uc3QgYW5pbTE6IFRnZEFuaW1hdGlvbiA9IHtcXG4gICAgICAgIGR1cmF0aW9uOiAxLFxcbiAgICAgICAgZWFzaW5nRnVuY3Rpb246IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRDdWJpYyxcXG4gICAgICAgIGFjdGlvbih0KSB7XFxuICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKC0xLCB0ICogMiAtIDEsIDApXFxuICAgICAgICB9LFxcbiAgICB9XFxuICAgIGNvbnN0IGFuaW0yOiBUZ2RBbmltYXRpb24gPSB7XFxuICAgICAgICBkdXJhdGlvbjogMSxcXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXFxuICAgICAgICBhY3Rpb24odCkge1xcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbih0ICogMiAtIDEsIDEsIDApXFxuICAgICAgICB9LFxcbiAgICB9XFxuICAgIGNvbnN0IGFuaW0zOiBUZ2RBbmltYXRpb24gPSB7XFxuICAgICAgICBkdXJhdGlvbjogMSxcXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXFxuICAgICAgICBhY3Rpb24odCkge1xcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigrMSwgMSAtIHQgKiAyLCAwKVxcbiAgICAgICAgfSxcXG4gICAgfVxcbiAgICBjb25zdCBhbmltNDogVGdkQW5pbWF0aW9uID0ge1xcbiAgICAgICAgZHVyYXRpb246IDEsXFxuICAgICAgICBlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxcbiAgICAgICAgYWN0aW9uKHQpIHtcXG4gICAgICAgICAgICBjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oMSAtIHQgKiAyLCAtMSwgMClcXG4gICAgICAgIH0sXFxuICAgIH1cXG4gICAgY3R4LmFuaW1TY2hlZHVsZShcXG4gICAgICAgIHRnZEFuaW1DaGFpbihbYW5pbTEsIGFuaW0yLCBhbmltMywgYW5pbTRdLCB7XFxuICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGN0eC5hbmltU2NoZWR1bGUoXFxuICAgICAgICB0Z2RBbmltQ2hhaW4oXFxuICAgICAgICAgICAgW1xcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uKHQpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjdWJlLnRyYW5zZm8uc2V0U2NhbGUoMSAtIHQgKiAwLjUpXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uKHQpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjdWJlLnRyYW5zZm8uc2V0U2NhbGUoMSAtICgxIC0gdCkgKiAwLjUpXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgeyByZXBlYXQ6IEluZmluaXR5IH0sXFxuICAgICAgICApLFxcbiAgICApXFxuICAgIGN0eC5wYWludCgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPlxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ0Z2RBbmltQ2hhaW4iLCJ0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMiLCJUZ2RNYXRlcmlhbEZsYXQiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiaW5pdCIsImN0eCIsImN1YmUiLCJhbmltMSIsImFjdGlvbiIsInQiLCJhbmltMiIsImFuaW0zIiwiYW5pbTQiLCJJbmZpbml0eSIsIkRlbW8iLCJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFVdUI7QUFDaUI7QUFFeEMsU0FBU1EsS0FBS0MsR0FBZTtJQUN6QixTQUFTO0lBQ1RBLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUc7SUFDOUIsSUFBTUMsT0FBTyxJQUFJTiw4Q0FBY0EsQ0FBQ0ssS0FBSztRQUFFLFNBQVM7WUFBRSxVQUFVO2dCQUFDLENBQUM7Z0JBQUcsQ0FBQztnQkFBRzthQUFFO1FBQUM7SUFBRTtJQUMxRUEsSUFBSSxHQUFHLENBQ0gsSUFBSU4sK0NBQWVBLENBQUNNLEtBQUs7UUFBRSxPQUFPO1lB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