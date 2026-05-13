"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_animation_transfo_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_-afb926"], {
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/transfo.demo.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
                        lineNumber: 6,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(___rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfYW5pbWF0aW9uX3RyYW5zZm9fcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlXy1hZmI5MjYuYWFmNjM3MDZjMjZlZWUwNy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9hbmltYXRpb24vdHJhbnNmby9fL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvYW5pbWF0aW9uL3RyYW5zZm8vXy90cmFuc2ZvLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9hbmltYXRpb24vdHJhbnNmby9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vdHJhbnNmby5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJEZXRhaWwgIzFcIjpcbiAgICAgICAgXCIgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7IGRlYnVnOiB0cnVlIH0pO1xcbiAgY3R4LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTA7XFxuICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0ZihjdHgsIHtcXG4gICAgYXNzZXQ6IGFzc2V0cy5nbGIubWVzaCxcXG4gIH0pO1xcbiAgY3R4LmFkZChcXG4gICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLjQsIDAuMiwgMCwgMV0gfSksXFxuICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgfSksXFxuICApO1xcbiAgY3R4LnBhaW50KCk7XFxuICBjdHguYW5pbVNjaGVkdWxlKFxcbiAgICB0Z2RBbmltQ2hhaW5UcmFuc2ZvSW50ZXJwb2xhdGlvbnMoXFxuICAgICAgY3R4LmNhbWVyYS50cmFuc2ZvLFxcbiAgICAgIFtcXG4gICAgICAgIHtcXG4gICAgICAgICAgZHVyYXRpb246IDEsXFxuICAgICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICBkaXN0YW5jZTogMi45LFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbLTAuMzk4OTg0OTY4NjYyMjYxOTYsIDAuMjI4MjUxOTM0MDUxNTEzNjcsIDBdLFxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBbMCwgMCwgMCwgMV0sXFxuICAgICAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcXG4gICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICB7XFxuICAgICAgICAgIGR1cmF0aW9uOiAxLFxcbiAgICAgICAgICB0cmFuc2ZvOiB7XFxuICAgICAgICAgICAgZGlzdGFuY2U6IDUuMSxcXG4gICAgICAgICAgICBwb3NpdGlvbjogWy0wLjk5ODUzMDg2NDcxNTU3NjIsIDAuNzA4NzUyMzM0MTE3ODg5NCwgMC4zMTE1NDM3OTI0ODYxOTA4XSxcXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogW1xcbiAgICAgICAgICAgICAgMC4wOTY5NjMzNjA5MDU2NDcyOCwgLTAuNjY1MjE3NTc4NDExMTAyMywgLTAuNDgzMjcxMzkwMTk5NjYxMjUsIDAuNTYwODMxOTA0NDExMzE1OSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXFxuICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAge1xcbiAgICAgICAgICBkdXJhdGlvbjogMixcXG4gICAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oY3R4LmNhbWVyYS50cmFuc2ZvKSxcXG4gICAgICAgICAgZWFzaW5nRnVuY3Rpb246IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRRdWludCxcXG4gICAgICAgIH0sXFxuICAgICAgXSxcXG4gICAgICB7IHJlcGVhdDogSW5maW5pdHkgfSxcXG4gICAgKSxcXG4gICk7XCIsXG59XG5jb25zdCBGVUxMID1cbiAgICAnaW1wb3J0IHtcXG4gIHRnZEFuaW1DaGFpblRyYW5zZm9JbnRlcnBvbGF0aW9ucyxcXG4gIFRnZENvbnRleHQsXFxuICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0UXVpbnQsXFxuICBUZ2RQYWludGVyQ2xlYXIsXFxuICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICBUZ2RQYWludGVyU3RhdGUsXFxuICBUZ2RUcmFuc2ZvLFxcbiAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcXG5cXG5pbXBvcnQgTWVzaFVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgsIHsgZGVidWc6IHRydWUgfSk7XFxuICBjdHguY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxMDtcXG4gIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGN0eCwge1xcbiAgICBhc3NldDogYXNzZXRzLmdsYi5tZXNoLFxcbiAgfSk7XFxuICBjdHguYWRkKFxcbiAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuNCwgMC4yLCAwLCAxXSB9KSxcXG4gICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcXG4gICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICB9KSxcXG4gICk7XFxuICBjdHgucGFpbnQoKTtcXG4gIGN0eC5hbmltU2NoZWR1bGUoXFxuICAgIHRnZEFuaW1DaGFpblRyYW5zZm9JbnRlcnBvbGF0aW9ucyhcXG4gICAgICBjdHguY2FtZXJhLnRyYW5zZm8sXFxuICAgICAgW1xcbiAgICAgICAge1xcbiAgICAgICAgICBkdXJhdGlvbjogMSxcXG4gICAgICAgICAgdHJhbnNmbzoge1xcbiAgICAgICAgICAgIGRpc3RhbmNlOiAyLjksXFxuICAgICAgICAgICAgcG9zaXRpb246IFstMC4zOTg5ODQ5Njg2NjIyNjE5NiwgMC4yMjgyNTE5MzQwNTE1MTM2NywgMF0sXFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFswLCAwLCAwLCAxXSxcXG4gICAgICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIHtcXG4gICAgICAgICAgZHVyYXRpb246IDEsXFxuICAgICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICBkaXN0YW5jZTogNS4xLFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbLTAuOTk4NTMwODY0NzE1NTc2MiwgMC43MDg3NTIzMzQxMTc4ODk0LCAwLjMxMTU0Mzc5MjQ4NjE5MDhdLFxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBbXFxuICAgICAgICAgICAgICAwLjA5Njk2MzM2MDkwNTY0NzI4LCAtMC42NjUyMTc1Nzg0MTExMDIzLCAtMC40ODMyNzEzOTAxOTk2NjEyNSwgMC41NjA4MzE5MDQ0MTEzMTU5LFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcXG4gICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICB7XFxuICAgICAgICAgIGR1cmF0aW9uOiAyLFxcbiAgICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyhjdHguY2FtZXJhLnRyYW5zZm8pLFxcbiAgICAgICAgICBlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dFF1aW50LFxcbiAgICAgICAgfSxcXG4gICAgICBdLFxcbiAgICAgIHsgcmVwZWF0OiBJbmZpbml0eSB9LFxcbiAgICApLFxcbiAgKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gIHJldHVybiAoXFxuICAgIDxWaWV3XFxuICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICBhc3NldHM9e3tcXG4gICAgICAgIGdsYjogeyBtZXNoOiBNZXNoVVJMIH0sXFxuICAgICAgfX1cXG4gICAgLz5cXG4gICk7XFxufVxcbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8RGVtbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IHtcbiAgICB0Z2RBbmltQ2hhaW5UcmFuc2ZvSW50ZXJwb2xhdGlvbnMsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25Jbk91dFF1aW50LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRyYW5zZm8sXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgTWVzaFVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5cbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7IGRlYnVnOiB0cnVlIH0pXG4gICAgY3R4LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTBcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0ZihjdHgsIHtcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIubWVzaCxcbiAgICB9KVxuICAgIGN0eC5hZGQoXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC40LCAwLjIsIDAsIDFdIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXG4gICAgICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY3R4LnBhaW50KClcbiAgICBjdHguYW5pbVNjaGVkdWxlKFxuICAgICAgICB0Z2RBbmltQ2hhaW5UcmFuc2ZvSW50ZXJwb2xhdGlvbnMoXG4gICAgICAgICAgICBjdHguY2FtZXJhLnRyYW5zZm8sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDIuOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbLTAuMzk4OTg0OTY4NjYyMjYxOTYsIDAuMjI4MjUxOTM0MDUxNTEzNjcsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFswLCAwLCAwLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogNS4xLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFstMC45OTg1MzA4NjQ3MTU1NzYyLCAwLjcwODc1MjMzNDExNzg4OTQsIDAuMzExNTQzNzkyNDg2MTkwOF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMDk2OTYzMzYwOTA1NjQ3MjgsIC0wLjY2NTIxNzU3ODQxMTEwMjMsIC0wLjQ4MzI3MTM5MDE5OTY2MTI1LCAwLjU2MDgzMTkwNDQxMTMxNTksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKGN0eC5jYW1lcmEudHJhbnNmbyksXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0UXVpbnQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7IHJlcGVhdDogSW5maW5pdHkgfSxcbiAgICAgICAgKSxcbiAgICApXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgZ2xiOiB7IG1lc2g6IE1lc2hVUkwgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RBbmltQ2hhaW5UcmFuc2ZvSW50ZXJwb2xhdGlvbnMiLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJ0Z2RFYXNpbmdGdW5jdGlvbkluT3V0UXVpbnQiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUcmFuc2ZvIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJNZXNoVVJMIiwiaW5pdCIsImN0eCIsImFzc2V0cyIsIm1lc2giLCJJbmZpbml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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