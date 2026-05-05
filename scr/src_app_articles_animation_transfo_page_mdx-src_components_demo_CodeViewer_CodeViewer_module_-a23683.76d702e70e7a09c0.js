"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_animation_transfo_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_-a23683"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

},
46967(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _transfo_demo__rspack_import_4 = __webpack_require__(53125);
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
    "Detail #1": "  new TgdControllerCameraOrbit(ctx, { debug: true });\n  ctx.camera.transfo.distance = 10;\n  const mesh = new TgdPainterMeshGltf(ctx, {\n    asset: assets.glb.mesh,\n  });\n  ctx.add(\n    new TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n    new TgdPainterState(ctx, {\n      depth: webglPresetDepth.lessOrEqual,\n      children: [mesh],\n    }),\n  );\n  ctx.paint();\n  ctx.animSchedule(\n    tgdAnimChainTransfoInterpolations(\n      ctx.camera.transfo,\n      [\n        {\n          duration: 1,\n          transfo: {\n            distance: 2.9,\n            position: [-0.39898496866226196, 0.22825193405151367, 0],\n            orientation: [0, 0, 0, 1],\n            scale: [1, 1, 1],\n          },\n        },\n        {\n          duration: 1,\n          transfo: {\n            distance: 5.1,\n            position: [-0.9985308647155762, 0.7087523341178894, 0.3115437924861908],\n            orientation: [\n              0.09696336090564728, -0.6652175784111023, -0.48327139019966125, 0.5608319044113159,\n            ],\n            scale: [1, 1, 1],\n          },\n        },\n        {\n          duration: 2,\n          transfo: new TgdTransfo(ctx.camera.transfo),\n          easingFunction: tgdEasingFunctionInOutQuint,\n        },\n      ],\n      { repeat: Infinity },\n    ),\n  );"
};
var FULL = 'import {\n  tgdAnimChainTransfoInterpolations,\n  TgdContext,\n  TgdControllerCameraOrbit,\n  tgdEasingFunctionInOutQuint,\n  TgdPainterClear,\n  TgdPainterMeshGltf,\n  TgdPainterState,\n  TgdTransfo,\n  webglPresetDepth,\n} from "@tolokoban/tgd";\nimport View, { Assets } from "@/components/demo/Tgd";\n\nimport MeshURL from "@/assets/mesh/suzanne.glb";\n\nfunction init(ctx: TgdContext, assets: Assets) {\n  new TgdControllerCameraOrbit(ctx, { debug: true });\n  ctx.camera.transfo.distance = 10;\n  const mesh = new TgdPainterMeshGltf(ctx, {\n    asset: assets.glb.mesh,\n  });\n  ctx.add(\n    new TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n    new TgdPainterState(ctx, {\n      depth: webglPresetDepth.lessOrEqual,\n      children: [mesh],\n    }),\n  );\n  ctx.paint();\n  ctx.animSchedule(\n    tgdAnimChainTransfoInterpolations(\n      ctx.camera.transfo,\n      [\n        {\n          duration: 1,\n          transfo: {\n            distance: 2.9,\n            position: [-0.39898496866226196, 0.22825193405151367, 0],\n            orientation: [0, 0, 0, 1],\n            scale: [1, 1, 1],\n          },\n        },\n        {\n          duration: 1,\n          transfo: {\n            distance: 5.1,\n            position: [-0.9985308647155762, 0.7087523341178894, 0.3115437924861908],\n            orientation: [\n              0.09696336090564728, -0.6652175784111023, -0.48327139019966125, 0.5608319044113159,\n            ],\n            scale: [1, 1, 1],\n          },\n        },\n        {\n          duration: 2,\n          transfo: new TgdTransfo(ctx.camera.transfo),\n          easingFunction: tgdEasingFunctionInOutQuint,\n        },\n      ],\n      { repeat: Infinity },\n    ),\n  );\n}\n\nexport default function Demo() {\n  return (\n    <View\n      onReady={init}\n      assets={{\n        glb: { mesh: MeshURL },\n      }}\n    />\n  );\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_transfo_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}


},
53125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_3 = __webpack_require__(21278);




function init(ctx, assets) {
    // #begin
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(ctx, {
        debug: true
    });
    ctx.camera.transfo.distance = 10;
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(ctx, {
        asset: assets.glb.mesh
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
            mesh
        ]
    }));
    ctx.paint();
    ctx.animSchedule((0,_tolokoban_tgd__rspack_import_1.tgdAnimChainTransfoInterpolations)(ctx.camera.transfo, [
        {
            duration: 1,
            transfo: {
                distance: 2.9,
                position: [
                    -0.39898496866226196,
                    0.22825193405151367,
                    0
                ],
                orientation: [
                    0,
                    0,
                    0,
                    1
                ],
                scale: [
                    1,
                    1,
                    1
                ]
            }
        },
        {
            duration: 1,
            transfo: {
                distance: 5.1,
                position: [
                    -0.9985308647155762,
                    0.7087523341178894,
                    0.3115437924861908
                ],
                orientation: [
                    0.09696336090564728,
                    -0.6652175784111023,
                    -0.48327139019966125,
                    0.5608319044113159
                ],
                scale: [
                    1,
                    1,
                    1
                ]
            }
        },
        {
            duration: 2,
            transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo(ctx.camera.transfo),
            easingFunction: _tolokoban_tgd__rspack_import_1.tgdEasingFunctionInOutQuint
        }
    ], {
        repeat: Infinity
    }));
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        assets: {
            glb: {
                mesh: _assets_mesh_suzanne_glb__rspack_import_3
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/transfo.demo.tsx",
        lineNumber: 69,
        columnNumber: 9
    }, this);
}


},
48939(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var ___rspack_import_1 = __webpack_require__(46967);
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
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Playing with transformations"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "In this demo we use the animation on a camera, but it can work with any\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdTransfo.html",
                        children: "transformation"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
                        lineNumber: 6,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(___rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfYW5pbWF0aW9uX3RyYW5zZm9fcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlXy1hMjM2ODMuNzZkNzAyZTcwZTdhMDljMC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvYW5pbWF0aW9uL3RyYW5zZm8vXy9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9hbmltYXRpb24vdHJhbnNmby9fL3RyYW5zZm8uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9hbmltYXRpb24vdHJhbnNmby9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3RyYW5zZm8uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1xuICAgIFwiRGV0YWlsICMxXCI6XG4gICAgICAgIFwiICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eCwgeyBkZWJ1ZzogdHJ1ZSB9KTtcXG4gIGN0eC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDEwO1xcbiAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY3R4LCB7XFxuICAgIGFzc2V0OiBhc3NldHMuZ2xiLm1lc2gsXFxuICB9KTtcXG4gIGN0eC5hZGQoXFxuICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC40LCAwLjIsIDAsIDFdIH0pLFxcbiAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcbiAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcbiAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgIH0pLFxcbiAgKTtcXG4gIGN0eC5wYWludCgpO1xcbiAgY3R4LmFuaW1TY2hlZHVsZShcXG4gICAgdGdkQW5pbUNoYWluVHJhbnNmb0ludGVycG9sYXRpb25zKFxcbiAgICAgIGN0eC5jYW1lcmEudHJhbnNmbyxcXG4gICAgICBbXFxuICAgICAgICB7XFxuICAgICAgICAgIGR1cmF0aW9uOiAxLFxcbiAgICAgICAgICB0cmFuc2ZvOiB7XFxuICAgICAgICAgICAgZGlzdGFuY2U6IDIuOSxcXG4gICAgICAgICAgICBwb3NpdGlvbjogWy0wLjM5ODk4NDk2ODY2MjI2MTk2LCAwLjIyODI1MTkzNDA1MTUxMzY3LCAwXSxcXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogWzAsIDAsIDAsIDFdLFxcbiAgICAgICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXFxuICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAge1xcbiAgICAgICAgICBkdXJhdGlvbjogMSxcXG4gICAgICAgICAgdHJhbnNmbzoge1xcbiAgICAgICAgICAgIGRpc3RhbmNlOiA1LjEsXFxuICAgICAgICAgICAgcG9zaXRpb246IFstMC45OTg1MzA4NjQ3MTU1NzYyLCAwLjcwODc1MjMzNDExNzg4OTQsIDAuMzExNTQzNzkyNDg2MTkwOF0sXFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFtcXG4gICAgICAgICAgICAgIDAuMDk2OTYzMzYwOTA1NjQ3MjgsIC0wLjY2NTIxNzU3ODQxMTEwMjMsIC0wLjQ4MzI3MTM5MDE5OTY2MTI1LCAwLjU2MDgzMTkwNDQxMTMxNTksXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIHtcXG4gICAgICAgICAgZHVyYXRpb246IDIsXFxuICAgICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKGN0eC5jYW1lcmEudHJhbnNmbyksXFxuICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0UXVpbnQsXFxuICAgICAgICB9LFxcbiAgICAgIF0sXFxuICAgICAgeyByZXBlYXQ6IEluZmluaXR5IH0sXFxuICAgICksXFxuICApO1wiLFxufVxuY29uc3QgRlVMTCA9XG4gICAgJ2ltcG9ydCB7XFxuICB0Z2RBbmltQ2hhaW5UcmFuc2ZvSW50ZXJwb2xhdGlvbnMsXFxuICBUZ2RDb250ZXh0LFxcbiAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgdGdkRWFzaW5nRnVuY3Rpb25Jbk91dFF1aW50LFxcbiAgVGdkUGFpbnRlckNsZWFyLFxcbiAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgVGdkUGFpbnRlclN0YXRlLFxcbiAgVGdkVHJhbnNmbyxcXG4gIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XFxuXFxuaW1wb3J0IE1lc2hVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7IGRlYnVnOiB0cnVlIH0pO1xcbiAgY3R4LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTA7XFxuICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0ZihjdHgsIHtcXG4gICAgYXNzZXQ6IGFzc2V0cy5nbGIubWVzaCxcXG4gIH0pO1xcbiAgY3R4LmFkZChcXG4gICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLjQsIDAuMiwgMCwgMV0gfSksXFxuICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgfSksXFxuICApO1xcbiAgY3R4LnBhaW50KCk7XFxuICBjdHguYW5pbVNjaGVkdWxlKFxcbiAgICB0Z2RBbmltQ2hhaW5UcmFuc2ZvSW50ZXJwb2xhdGlvbnMoXFxuICAgICAgY3R4LmNhbWVyYS50cmFuc2ZvLFxcbiAgICAgIFtcXG4gICAgICAgIHtcXG4gICAgICAgICAgZHVyYXRpb246IDEsXFxuICAgICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICBkaXN0YW5jZTogMi45LFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbLTAuMzk4OTg0OTY4NjYyMjYxOTYsIDAuMjI4MjUxOTM0MDUxNTEzNjcsIDBdLFxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBbMCwgMCwgMCwgMV0sXFxuICAgICAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcXG4gICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICB7XFxuICAgICAgICAgIGR1cmF0aW9uOiAxLFxcbiAgICAgICAgICB0cmFuc2ZvOiB7XFxuICAgICAgICAgICAgZGlzdGFuY2U6IDUuMSxcXG4gICAgICAgICAgICBwb3NpdGlvbjogWy0wLjk5ODUzMDg2NDcxNTU3NjIsIDAuNzA4NzUyMzM0MTE3ODg5NCwgMC4zMTE1NDM3OTI0ODYxOTA4XSxcXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogW1xcbiAgICAgICAgICAgICAgMC4wOTY5NjMzNjA5MDU2NDcyOCwgLTAuNjY1MjE3NTc4NDExMTAyMywgLTAuNDgzMjcxMzkwMTk5NjYxMjUsIDAuNTYwODMxOTA0NDExMzE1OSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXFxuICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAge1xcbiAgICAgICAgICBkdXJhdGlvbjogMixcXG4gICAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oY3R4LmNhbWVyYS50cmFuc2ZvKSxcXG4gICAgICAgICAgZWFzaW5nRnVuY3Rpb246IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRRdWludCxcXG4gICAgICAgIH0sXFxuICAgICAgXSxcXG4gICAgICB7IHJlcGVhdDogSW5maW5pdHkgfSxcXG4gICAgKSxcXG4gICk7XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICByZXR1cm4gKFxcbiAgICA8Vmlld1xcbiAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgYXNzZXRzPXt7XFxuICAgICAgICBnbGI6IHsgbWVzaDogTWVzaFVSTCB9LFxcbiAgICAgIH19XFxuICAgIC8+XFxuICApO1xcbn1cXG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPERlbW8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCB7XG4gICAgdGdkQW5pbUNoYWluVHJhbnNmb0ludGVycG9sYXRpb25zLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRRdWludCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUcmFuc2ZvLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IE1lc2hVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eCwgeyBkZWJ1ZzogdHJ1ZSB9KVxuICAgIGN0eC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDEwXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY3R4LCB7XG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLm1lc2gsXG4gICAgfSlcbiAgICBjdHguYWRkKFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuNCwgMC4yLCAwLCAxXSB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxuICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGN0eC5wYWludCgpXG4gICAgY3R4LmFuaW1TY2hlZHVsZShcbiAgICAgICAgdGdkQW5pbUNoYWluVHJhbnNmb0ludGVycG9sYXRpb25zKFxuICAgICAgICAgICAgY3R4LmNhbWVyYS50cmFuc2ZvLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAyLjksXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogWy0wLjM5ODk4NDk2ODY2MjI2MTk2LCAwLjIyODI1MTkzNDA1MTUxMzY3LCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBbMCwgMCwgMCwgMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDUuMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbLTAuOTk4NTMwODY0NzE1NTc2MiwgMC43MDg3NTIzMzQxMTc4ODk0LCAwLjMxMTU0Mzc5MjQ4NjE5MDhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjA5Njk2MzM2MDkwNTY0NzI4LCAtMC42NjUyMTc1Nzg0MTExMDIzLCAtMC40ODMyNzEzOTAxOTk2NjEyNSwgMC41NjA4MzE5MDQ0MTEzMTU5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyhjdHguY2FtZXJhLnRyYW5zZm8pLFxuICAgICAgICAgICAgICAgICAgICBlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dFF1aW50LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgeyByZXBlYXQ6IEluZmluaXR5IH0sXG4gICAgICAgICksXG4gICAgKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjogeyBtZXNoOiBNZXNoVVJMIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQW5pbUNoYWluVHJhbnNmb0ludGVycG9sYXRpb25zIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwidGdkRWFzaW5nRnVuY3Rpb25Jbk91dFF1aW50IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVHJhbnNmbyIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiTWVzaFVSTCIsImluaXQiLCJjdHgiLCJhc3NldHMiLCJtZXNoIiwiSW5maW5pdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3BCO0FBRWpDLElBQU1JLFFBQVE7SUFDVixhQUNJO0FBQ1I7QUFDQSxJQUFNQyxPQUNGO0FBRVcsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUNJOzswQkFDSSxrREFBQztnQkFBSSxXQUFVOzBCQUNYLGdFQUFDSix5Q0FBSUE7Ozs7Ozs7Ozs7MEJBRVQsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUloRTs7Ozs7Ozs7Ozs7Ozs7QUN0QnVCO0FBQzZCO0FBRUw7QUFFL0MsU0FBU2lCLEtBQUtDLEdBQWUsRUFBRUMsTUFBYztJQUN6QyxTQUFTO0lBQ1QsSUFBSVgsd0RBQXdCQSxDQUFDVSxLQUFLO1FBQUUsT0FBTztJQUFLO0lBQ2hEQSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHO0lBQzlCLElBQU1FLE9BQU8sSUFBSVQsa0RBQWtCQSxDQUFDTyxLQUFLO1FBQ3JDLE9BQU9DLE9BQU8sR0FBRyxDQUFDLElBQUk7SUFDMUI7SUFDQUQsSUFBSSxHQUFHLENBQ0gsSUFBSVIsK0NBQWVBLENBQUNRLEtBQUs7UUFBRSxPQUFPO1lBQUM7WUFBSztZQUFLO1lBQUc7U0FBRTtJQUFDLElBQ25ELElBQUlOLCtDQUFlQSxDQUFDTSxLQUFLO1FBQ3JCLE9BQU9KLDREQUE0QjtRQUNuQyxVQUFVO1lBQUNNO1NBQUs7SUFDcEI7SUFFSkYsSUFBSSxLQUFLO0lBQ1RBLElBQUksWUFBWSxDQUNaWCxxRUFBaUNBLENBQzdCVyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQ2xCO1FBQ0k7WUFDSSxVQUFVO1lBQ1YsU0FBUztnQkFDTCxVQUFVO2dCQUNWLFVBQVU7b0JBQUMsQ0FBQztvQkFBcUI7b0JBQXFCO2lCQUFFO2dCQUN4RCxhQUFhO29CQUFDO29CQUFHO29CQUFHO29CQUFHO2lCQUFFO2dCQUN6QixPQUFPO29CQUFDO29CQUFHO29CQUFHO2lCQUFFO1lBQ3BCO1FBQ0o7UUFDQTtZQUNJLFVBQVU7WUFDVixTQUFTO2dCQUNMLFVBQVU7Z0JBQ1YsVUFBVTtvQkFBQyxDQUFDO29CQUFvQjtvQkFBb0I7aUJBQW1CO2dCQUN2RSxhQUFhO29CQUNUO29CQUFxQixDQUFDO29CQUFvQixDQUFDO29CQUFxQjtpQkFDbkU7Z0JBQ0QsT0FBTztvQkFBQztvQkFBRztvQkFBRztpQkFBRTtZQUNwQjtRQUNKO1FBQ0E7WUFDSSxVQUFVO1lBQ1YsU0FBUyxJQUFJTCwwQ0FBVUEsQ0FBQ0ssSUFBSSxNQUFNLENBQUMsT0FBTztZQUMxQyxnQkFBZ0JULDJEQUEyQkE7UUFDL0M7S0FDSCxFQUNEO1FBQUUsUUFBUVk7SUFBUztBQUczQixPQUFPO0FBQ1g7QUFFZSxTQUFTdEI7SUFDcEIscUJBQ0ksa0RBQUNnQixnREFBSUE7UUFDRCxTQUFTRTtRQUNULFFBQVE7WUFDSixLQUFLO2dCQUFFLE1BQU1ELHlDQUFPQTtZQUFDO1FBQ3pCOzs7Ozs7QUFHWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VpQjs7Ozs7Ozs7OzswQkFFZjs7Ozs7Ozs7O29CQUVGO29CQUFBOztrQ0FDQzs7Ozs7O29CQUE2QztpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0w5QztBQUNBLFlBQVksZUFBZTtBQUMzQixZQUFZLG9DQUFvQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlCQUF5QjtBQUNwQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOEJBQThCO0FBQzVDO0FBQ0EsY0FBYyw4REFBOEQ7QUFDNUU7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBOztBQUV5Qjs7QUFFekIsV0FBVyx5QkFBeUI7QUFDcEM7O0FBRUEsbUJBQW1CLG9DQUFtQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBOEQ7QUFDekU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1AsNEJBQTRCLGlDQUFnQjs7QUFFNUM7QUFDQSxTQUFTLDhCQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxlQUFlO0FBQ2Y7QUFDTztBQUNQLGFBQWEseUJBQXlCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxTQUFTLG9DQUFtQjtBQUM1QjtBQUNBLEtBQUsscUJBQXFCO0FBQzFCO0FBQ0E7QUFDQSJ9