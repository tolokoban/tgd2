"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_animation_transfo_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_-afb926"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

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
    "Detail #1": "\tnew TgdControllerCameraOrbit(ctx, { debug: true });\n\tctx.camera.transfo.distance = 10;\n\tconst mesh = new TgdPainterMeshGltf(ctx, {\n\t\tasset: assets.glb.mesh,\n\t});\n\tctx.add(\n\t\tnew TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n\t\tnew TgdPainterState(ctx, {\n\t\t\tdepth: webglPresetDepth.lessOrEqual,\n\t\t\tchildren: [mesh],\n\t\t}),\n\t);\n\tctx.paint();\n\tctx.animSchedule(\n\t\ttgdAnimChainTransfoInterpolations(\n\t\t\tctx.camera.transfo,\n\t\t\t[\n\t\t\t\t{\n\t\t\t\t\tduration: 1,\n\t\t\t\t\ttransfo: {\n\t\t\t\t\t\tdistance: 2.9,\n\t\t\t\t\t\tposition: [-0.39898496866226196, 0.22825193405151367, 0],\n\t\t\t\t\t\torientation: [0, 0, 0, 1],\n\t\t\t\t\t\tscale: [1, 1, 1],\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tduration: 1,\n\t\t\t\t\ttransfo: {\n\t\t\t\t\t\tdistance: 5.1,\n\t\t\t\t\t\tposition: [\n\t\t\t\t\t\t\t-0.9985308647155762, 0.7087523341178894, 0.3115437924861908,\n\t\t\t\t\t\t],\n\t\t\t\t\t\torientation: [\n\t\t\t\t\t\t\t0.09696336090564728, -0.6652175784111023, -0.48327139019966125,\n\t\t\t\t\t\t\t0.5608319044113159,\n\t\t\t\t\t\t],\n\t\t\t\t\t\tscale: [1, 1, 1],\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tduration: 2,\n\t\t\t\t\ttransfo: new TgdTransfo(ctx.camera.transfo),\n\t\t\t\t\teasingFunction: tgdEasingFunctionInOutQuint,\n\t\t\t\t},\n\t\t\t],\n\t\t\t{ repeat: Infinity },\n\t\t),\n\t);"
};
var FULL = "import {\n\ttgdAnimChainTransfoInterpolations,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\ttgdEasingFunctionInOutQuint,\n\tTgdPainterClear,\n\tTgdPainterMeshGltf,\n\tTgdPainterState,\n\tTgdTransfo,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport MeshURL from \"@/assets/mesh/suzanne.glb\";\n\nfunction init(ctx: TgdContext, assets: Assets) {\n\tnew TgdControllerCameraOrbit(ctx, { debug: true });\n\tctx.camera.transfo.distance = 10;\n\tconst mesh = new TgdPainterMeshGltf(ctx, {\n\t\tasset: assets.glb.mesh,\n\t});\n\tctx.add(\n\t\tnew TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n\t\tnew TgdPainterState(ctx, {\n\t\t\tdepth: webglPresetDepth.lessOrEqual,\n\t\t\tchildren: [mesh],\n\t\t}),\n\t);\n\tctx.paint();\n\tctx.animSchedule(\n\t\ttgdAnimChainTransfoInterpolations(\n\t\t\tctx.camera.transfo,\n\t\t\t[\n\t\t\t\t{\n\t\t\t\t\tduration: 1,\n\t\t\t\t\ttransfo: {\n\t\t\t\t\t\tdistance: 2.9,\n\t\t\t\t\t\tposition: [-0.39898496866226196, 0.22825193405151367, 0],\n\t\t\t\t\t\torientation: [0, 0, 0, 1],\n\t\t\t\t\t\tscale: [1, 1, 1],\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tduration: 1,\n\t\t\t\t\ttransfo: {\n\t\t\t\t\t\tdistance: 5.1,\n\t\t\t\t\t\tposition: [\n\t\t\t\t\t\t\t-0.9985308647155762, 0.7087523341178894, 0.3115437924861908,\n\t\t\t\t\t\t],\n\t\t\t\t\t\torientation: [\n\t\t\t\t\t\t\t0.09696336090564728, -0.6652175784111023, -0.48327139019966125,\n\t\t\t\t\t\t\t0.5608319044113159,\n\t\t\t\t\t\t],\n\t\t\t\t\t\tscale: [1, 1, 1],\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tduration: 2,\n\t\t\t\t\ttransfo: new TgdTransfo(ctx.camera.transfo),\n\t\t\t\t\teasingFunction: tgdEasingFunctionInOutQuint,\n\t\t\t\t},\n\t\t\t],\n\t\t\t{ repeat: Infinity },\n\t\t),\n\t);\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{\n\t\t\t\tglb: { mesh: MeshURL },\n\t\t\t}}\n\t\t/>\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_transfo_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/_/index.tsx",
                lineNumber: 16,
                columnNumber: 9
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
        lineNumber: 72,
        columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfYW5pbWF0aW9uX3RyYW5zZm9fcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlXy1hZmI5MjYuMzk5ZDkxNjJmYWM4ZjdmOC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9hbmltYXRpb24vdHJhbnNmby9fL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvYW5pbWF0aW9uL3RyYW5zZm8vXy90cmFuc2ZvLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9hbmltYXRpb24vdHJhbnNmby9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vdHJhbnNmby5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIlxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7IGRlYnVnOiB0cnVlIH0pO1xcblxcdGN0eC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDEwO1xcblxcdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGN0eCwge1xcblxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLm1lc2gsXFxuXFx0fSk7XFxuXFx0Y3R4LmFkZChcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuNCwgMC4yLCAwLCAxXSB9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcblxcdFxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbbWVzaF0sXFxuXFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjdHgucGFpbnQoKTtcXG5cXHRjdHguYW5pbVNjaGVkdWxlKFxcblxcdFxcdHRnZEFuaW1DaGFpblRyYW5zZm9JbnRlcnBvbGF0aW9ucyhcXG5cXHRcXHRcXHRjdHguY2FtZXJhLnRyYW5zZm8sXFxuXFx0XFx0XFx0W1xcblxcdFxcdFxcdFxcdHtcXG5cXHRcXHRcXHRcXHRcXHRkdXJhdGlvbjogMSxcXG5cXHRcXHRcXHRcXHRcXHR0cmFuc2ZvOiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0ZGlzdGFuY2U6IDIuOSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogWy0wLjM5ODk4NDk2ODY2MjI2MTk2LCAwLjIyODI1MTkzNDA1MTUxMzY3LCAwXSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRvcmllbnRhdGlvbjogWzAsIDAsIDAsIDFdLFxcblxcdFxcdFxcdFxcdFxcdFxcdHNjYWxlOiBbMSwgMSwgMV0sXFxuXFx0XFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHtcXG5cXHRcXHRcXHRcXHRcXHRkdXJhdGlvbjogMSxcXG5cXHRcXHRcXHRcXHRcXHR0cmFuc2ZvOiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0ZGlzdGFuY2U6IDUuMSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogW1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdC0wLjk5ODUzMDg2NDcxNTU3NjIsIDAuNzA4NzUyMzM0MTE3ODg5NCwgMC4zMTE1NDM3OTI0ODYxOTA4LFxcblxcdFxcdFxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0XFx0XFx0XFx0b3JpZW50YXRpb246IFtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQwLjA5Njk2MzM2MDkwNTY0NzI4LCAtMC42NjUyMTc1Nzg0MTExMDIzLCAtMC40ODMyNzEzOTAxOTk2NjEyNSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQwLjU2MDgzMTkwNDQxMTMxNTksXFxuXFx0XFx0XFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRzY2FsZTogWzEsIDEsIDFdLFxcblxcdFxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR7XFxuXFx0XFx0XFx0XFx0XFx0ZHVyYXRpb246IDIsXFxuXFx0XFx0XFx0XFx0XFx0dHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oY3R4LmNhbWVyYS50cmFuc2ZvKSxcXG5cXHRcXHRcXHRcXHRcXHRlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dFF1aW50LFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XSxcXG5cXHRcXHRcXHR7IHJlcGVhdDogSW5maW5pdHkgfSxcXG5cXHRcXHQpLFxcblxcdCk7XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdHRnZEFuaW1DaGFpblRyYW5zZm9JbnRlcnBvbGF0aW9ucyxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcblxcdHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRRdWludCxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlck1lc2hHbHRmLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUcmFuc2ZvLFxcblxcdHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcblxcbmltcG9ydCBNZXNoVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7IGRlYnVnOiB0cnVlIH0pO1xcblxcdGN0eC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDEwO1xcblxcdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGN0eCwge1xcblxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLm1lc2gsXFxuXFx0fSk7XFxuXFx0Y3R4LmFkZChcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuNCwgMC4yLCAwLCAxXSB9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcblxcdFxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbbWVzaF0sXFxuXFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjdHgucGFpbnQoKTtcXG5cXHRjdHguYW5pbVNjaGVkdWxlKFxcblxcdFxcdHRnZEFuaW1DaGFpblRyYW5zZm9JbnRlcnBvbGF0aW9ucyhcXG5cXHRcXHRcXHRjdHguY2FtZXJhLnRyYW5zZm8sXFxuXFx0XFx0XFx0W1xcblxcdFxcdFxcdFxcdHtcXG5cXHRcXHRcXHRcXHRcXHRkdXJhdGlvbjogMSxcXG5cXHRcXHRcXHRcXHRcXHR0cmFuc2ZvOiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0ZGlzdGFuY2U6IDIuOSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogWy0wLjM5ODk4NDk2ODY2MjI2MTk2LCAwLjIyODI1MTkzNDA1MTUxMzY3LCAwXSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRvcmllbnRhdGlvbjogWzAsIDAsIDAsIDFdLFxcblxcdFxcdFxcdFxcdFxcdFxcdHNjYWxlOiBbMSwgMSwgMV0sXFxuXFx0XFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHtcXG5cXHRcXHRcXHRcXHRcXHRkdXJhdGlvbjogMSxcXG5cXHRcXHRcXHRcXHRcXHR0cmFuc2ZvOiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0ZGlzdGFuY2U6IDUuMSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogW1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdC0wLjk5ODUzMDg2NDcxNTU3NjIsIDAuNzA4NzUyMzM0MTE3ODg5NCwgMC4zMTE1NDM3OTI0ODYxOTA4LFxcblxcdFxcdFxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0XFx0XFx0XFx0b3JpZW50YXRpb246IFtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQwLjA5Njk2MzM2MDkwNTY0NzI4LCAtMC42NjUyMTc1Nzg0MTExMDIzLCAtMC40ODMyNzEzOTAxOTk2NjEyNSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQwLjU2MDgzMTkwNDQxMTMxNTksXFxuXFx0XFx0XFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRzY2FsZTogWzEsIDEsIDFdLFxcblxcdFxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR7XFxuXFx0XFx0XFx0XFx0XFx0ZHVyYXRpb246IDIsXFxuXFx0XFx0XFx0XFx0XFx0dHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oY3R4LmNhbWVyYS50cmFuc2ZvKSxcXG5cXHRcXHRcXHRcXHRcXHRlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dFF1aW50LFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XSxcXG5cXHRcXHRcXHR7IHJlcGVhdDogSW5maW5pdHkgfSxcXG5cXHRcXHQpLFxcblxcdCk7XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0YXNzZXRzPXt7XFxuXFx0XFx0XFx0XFx0Z2xiOiB7IG1lc2g6IE1lc2hVUkwgfSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KTtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdHRnZEFuaW1DaGFpblRyYW5zZm9JbnRlcnBvbGF0aW9ucyxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRRdWludCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTWVzaEdsdGYsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVHJhbnNmbyxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IE1lc2hVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcblxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdC8vICNiZWdpblxuXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eCwgeyBkZWJ1ZzogdHJ1ZSB9KTtcblx0Y3R4LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTA7XG5cdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGN0eCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLm1lc2gsXG5cdH0pO1xuXHRjdHguYWRkKFxuXHRcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC40LCAwLjIsIDAsIDFdIH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XG5cdFx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcblx0XHRcdGNoaWxkcmVuOiBbbWVzaF0sXG5cdFx0fSksXG5cdCk7XG5cdGN0eC5wYWludCgpO1xuXHRjdHguYW5pbVNjaGVkdWxlKFxuXHRcdHRnZEFuaW1DaGFpblRyYW5zZm9JbnRlcnBvbGF0aW9ucyhcblx0XHRcdGN0eC5jYW1lcmEudHJhbnNmbyxcblx0XHRcdFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGR1cmF0aW9uOiAxLFxuXHRcdFx0XHRcdHRyYW5zZm86IHtcblx0XHRcdFx0XHRcdGRpc3RhbmNlOiAyLjksXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogWy0wLjM5ODk4NDk2ODY2MjI2MTk2LCAwLjIyODI1MTkzNDA1MTUxMzY3LCAwXSxcblx0XHRcdFx0XHRcdG9yaWVudGF0aW9uOiBbMCwgMCwgMCwgMV0sXG5cdFx0XHRcdFx0XHRzY2FsZTogWzEsIDEsIDFdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkdXJhdGlvbjogMSxcblx0XHRcdFx0XHR0cmFuc2ZvOiB7XG5cdFx0XHRcdFx0XHRkaXN0YW5jZTogNS4xLFxuXHRcdFx0XHRcdFx0cG9zaXRpb246IFtcblx0XHRcdFx0XHRcdFx0LTAuOTk4NTMwODY0NzE1NTc2MiwgMC43MDg3NTIzMzQxMTc4ODk0LCAwLjMxMTU0Mzc5MjQ4NjE5MDgsXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0b3JpZW50YXRpb246IFtcblx0XHRcdFx0XHRcdFx0MC4wOTY5NjMzNjA5MDU2NDcyOCwgLTAuNjY1MjE3NTc4NDExMTAyMywgLTAuNDgzMjcxMzkwMTk5NjYxMjUsXG5cdFx0XHRcdFx0XHRcdDAuNTYwODMxOTA0NDExMzE1OSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRzY2FsZTogWzEsIDEsIDFdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkdXJhdGlvbjogMixcblx0XHRcdFx0XHR0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyhjdHguY2FtZXJhLnRyYW5zZm8pLFxuXHRcdFx0XHRcdGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0UXVpbnQsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0eyByZXBlYXQ6IEluZmluaXR5IH0sXG5cdFx0KSxcblx0KTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdGdsYjogeyBtZXNoOiBNZXNoVVJMIH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZEFuaW1DaGFpblRyYW5zZm9JbnRlcnBvbGF0aW9ucyIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsInRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRRdWludCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRyYW5zZm8iLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIk1lc2hVUkwi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