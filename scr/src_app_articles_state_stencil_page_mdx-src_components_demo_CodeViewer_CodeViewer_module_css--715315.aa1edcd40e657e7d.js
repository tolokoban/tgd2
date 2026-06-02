"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_state_stencil_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css--715315"], {
44859(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/dino.5737266deb4973e5.webp";

},
97202(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/ring.bc3afd81f6e443f6.glb";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
41559(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _stencil_demo__rspack_import_4 = __webpack_require__(52352);
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
    "Detail #1": "    const camera = new TgdCameraPerspective({\n        transfo: { distance: 3 },\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI / 4,\n        zoom: 1,\n    })\n    ctx.camera = camera\n    new TgdControllerCameraOrbit(ctx, {\n        speedPanning: 0,\n        inertiaOrbit: 1000,\n    })\n    ctx.add(\n        new TgdPainterClear(ctx, {\n            depth: 1,\n            stencil: 0,\n        }),\n        new TgdPainterBackground(ctx, {\n            texture: new TgdTexture2D(ctx).loadBitmap(BackgroundURL),\n        }),\n        new TgdPainterState(ctx, {\n            color: false,\n            depth: webglPresetDepth.off,\n            cull: webglPresetCull.back,\n            stencil: webglPresetStencil.write(1),\n            children: [\n                new TgdPainterMeshGltf(ctx, {\n                    asset: assets.glb.ring,\n                    material: () => new TgdMaterialFlat(),\n                }),\n            ],\n        }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.less,\n            cull: webglPresetCull.back,\n            stencil: webglPresetStencil.paintIfEqual(0),\n            children: [\n                new TgdPainterMeshGltf(ctx, {\n                    asset: assets.glb.suzanne,\n                }),\n            ],\n        }),\n    )\n    ctx.paint()"
};
var FULL = 'import {\n    TgdCameraPerspective,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialFlat,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetCull,\n    webglPresetDepth,\n    webglPresetStencil,\n} from "@tolokoban/tgd"\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport BackgroundURL from "@/assets/image/dino.webp"\nimport RingURL from "@/assets/mesh/ring.glb"\nimport SuzanneURL from "@/assets/mesh/suzanne.glb"\n\nfunction init(ctx: TgdContext, assets: Assets) {\n    const camera = new TgdCameraPerspective({\n        transfo: { distance: 3 },\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI / 4,\n        zoom: 1,\n    })\n    ctx.camera = camera\n    new TgdControllerCameraOrbit(ctx, {\n        speedPanning: 0,\n        inertiaOrbit: 1000,\n    })\n    ctx.add(\n        new TgdPainterClear(ctx, {\n            depth: 1,\n            stencil: 0,\n        }),\n        new TgdPainterBackground(ctx, {\n            texture: new TgdTexture2D(ctx).loadBitmap(BackgroundURL),\n        }),\n        new TgdPainterState(ctx, {\n            color: false,\n            depth: webglPresetDepth.off,\n            cull: webglPresetCull.back,\n            stencil: webglPresetStencil.write(1),\n            children: [\n                new TgdPainterMeshGltf(ctx, {\n                    asset: assets.glb.ring,\n                    material: () => new TgdMaterialFlat(),\n                }),\n            ],\n        }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.less,\n            cull: webglPresetCull.back,\n            stencil: webglPresetStencil.paintIfEqual(0),\n            children: [\n                new TgdPainterMeshGltf(ctx, {\n                    asset: assets.glb.suzanne,\n                }),\n            ],\n        }),\n    )\n    ctx.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            options={{\n                depth: true,\n                stencil: true,\n                antialias: true,\n            }}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                    ring: RingURL,\n                },\n            }}\n        />\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_stencil_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/_/stencil.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/_/stencil.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/_/stencil.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/_/stencil.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/_/stencil.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/_/stencil.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
52352(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_image_dino_webp__rspack_import_3 = __webpack_require__(44859);
/* import */ var _assets_mesh_ring_glb__rspack_import_4 = __webpack_require__(97202);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_5 = __webpack_require__(21278);






function init(ctx, assets) {
    // #begin
    var camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective({
        transfo: {
            distance: 3
        },
        far: 100,
        near: 0.01,
        fovy: Math.PI / 4,
        zoom: 1
    });
    ctx.camera = camera;
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(ctx, {
        speedPanning: 0,
        inertiaOrbit: 1000
    });
    ctx.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(ctx, {
        depth: 1,
        stencil: 0
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(ctx, {
        texture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(ctx).loadBitmap(_assets_image_dino_webp__rspack_import_3)
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(ctx, {
        color: false,
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.off,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back,
        stencil: _tolokoban_tgd__rspack_import_1.webglPresetStencil.write(1),
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(ctx, {
                asset: assets.glb.ring,
                material: function material() {
                    return new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat();
                }
            })
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(ctx, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back,
        stencil: _tolokoban_tgd__rspack_import_1.webglPresetStencil.paintIfEqual(0),
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(ctx, {
                asset: assets.glb.suzanne
            })
        ]
    }));
    ctx.paint();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        options: {
            depth: true,
            stencil: true,
            antialias: true
        },
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_5,
                ring: _assets_mesh_ring_glb__rspack_import_4
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/_/stencil.demo/stencil.demo.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, this);
}


},
24837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _stencil_demo__rspack_import_1 = __webpack_require__(41559);
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
        hr: "hr",
        li: "li",
        ol: "ol",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Stencil"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Here is a demo of a simple masking technique done with stencils."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "This render has three passes:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: "Paint the background"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx",
                        lineNumber: 9,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: "Paint an invisible ring that will set the stencil."
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: "Use the stencil to know where to paint the monkey."
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx",
                        lineNumber: 11,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_stencil_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/state",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx",
                    lineNumber: 17,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/stencil/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfc3RhdGVfc3RlbmNpbF9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLS03MTUzMTUuYWExZWRjZDQwZTY1N2U3ZC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvc3RhdGUvc3RlbmNpbC9fL3N0ZW5jaWwuZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9zdGF0ZS9zdGVuY2lsL18vc3RlbmNpbC5kZW1vL3N0ZW5jaWwuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9zdGF0ZS9zdGVuY2lsL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vc3RlbmNpbC5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkRldGFpbCAjMVwiOlxuXHRcdFwiICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XFxuICAgICAgICB0cmFuc2ZvOiB7IGRpc3RhbmNlOiAzIH0sXFxuICAgICAgICBmYXI6IDEwMCxcXG4gICAgICAgIG5lYXI6IDAuMDEsXFxuICAgICAgICBmb3Z5OiBNYXRoLlBJIC8gNCxcXG4gICAgICAgIHpvb206IDEsXFxuICAgIH0pXFxuICAgIGN0eC5jYW1lcmEgPSBjYW1lcmFcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgsIHtcXG4gICAgICAgIHNwZWVkUGFubmluZzogMCxcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgfSlcXG4gICAgY3R4LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7XFxuICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICAgICAgc3RlbmNpbDogMCxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGN0eCwge1xcbiAgICAgICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY3R4KS5sb2FkQml0bWFwKEJhY2tncm91bmRVUkwpLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcbiAgICAgICAgICAgIGNvbG9yOiBmYWxzZSxcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5vZmYsXFxuICAgICAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuICAgICAgICAgICAgc3RlbmNpbDogd2ViZ2xQcmVzZXRTdGVuY2lsLndyaXRlKDEpLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY3R4LCB7XFxuICAgICAgICAgICAgICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5yaW5nLFxcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6ICgpID0+IG5ldyBUZ2RNYXRlcmlhbEZsYXQoKSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICAgICAgICAgIHN0ZW5jaWw6IHdlYmdsUHJlc2V0U3RlbmNpbC5wYWludElmRXF1YWwoMCksXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoR2x0ZihjdHgsIHtcXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjdHgucGFpbnQoKVwiLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IHtcXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXFxuICAgIFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG4gICAgd2ViZ2xQcmVzZXRTdGVuY2lsLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcblxcbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS9kaW5vLndlYnBcIlxcbmltcG9ydCBSaW5nVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3JpbmcuZ2xiXCJcXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXFxuXFxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XFxuICAgICAgICB0cmFuc2ZvOiB7IGRpc3RhbmNlOiAzIH0sXFxuICAgICAgICBmYXI6IDEwMCxcXG4gICAgICAgIG5lYXI6IDAuMDEsXFxuICAgICAgICBmb3Z5OiBNYXRoLlBJIC8gNCxcXG4gICAgICAgIHpvb206IDEsXFxuICAgIH0pXFxuICAgIGN0eC5jYW1lcmEgPSBjYW1lcmFcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgsIHtcXG4gICAgICAgIHNwZWVkUGFubmluZzogMCxcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgfSlcXG4gICAgY3R4LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7XFxuICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICAgICAgc3RlbmNpbDogMCxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGN0eCwge1xcbiAgICAgICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY3R4KS5sb2FkQml0bWFwKEJhY2tncm91bmRVUkwpLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcbiAgICAgICAgICAgIGNvbG9yOiBmYWxzZSxcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5vZmYsXFxuICAgICAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuICAgICAgICAgICAgc3RlbmNpbDogd2ViZ2xQcmVzZXRTdGVuY2lsLndyaXRlKDEpLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY3R4LCB7XFxuICAgICAgICAgICAgICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5yaW5nLFxcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6ICgpID0+IG5ldyBUZ2RNYXRlcmlhbEZsYXQoKSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICAgICAgICAgIHN0ZW5jaWw6IHdlYmdsUHJlc2V0U3RlbmNpbC5wYWludElmRXF1YWwoMCksXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoR2x0ZihjdHgsIHtcXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjdHgucGFpbnQoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcXG4gICAgICAgICAgICAgICAgZGVwdGg6IHRydWUsXFxuICAgICAgICAgICAgICAgIHN0ZW5jaWw6IHRydWUsXFxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgIHN1emFubmU6IFN1emFubmVVUkwsXFxuICAgICAgICAgICAgICAgICAgICByaW5nOiBSaW5nVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG5cdGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cblx0XHRcdFx0PERlbW8gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuXHRcdFx0XHRcdFx0e2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiaW1wb3J0IHtcblx0VGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuXHRUZ2RNYXRlcmlhbEZsYXQsXG5cdFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJNZXNoR2x0Zixcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHdlYmdsUHJlc2V0Q3VsbCxcblx0d2ViZ2xQcmVzZXREZXB0aCxcblx0d2ViZ2xQcmVzZXRTdGVuY2lsLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvZGluby53ZWJwXCI7XG5pbXBvcnQgUmluZ1VSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9yaW5nLmdsYlwiO1xuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcblxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdC8vICNiZWdpblxuXHRjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoe1xuXHRcdHRyYW5zZm86IHsgZGlzdGFuY2U6IDMgfSxcblx0XHRmYXI6IDEwMCxcblx0XHRuZWFyOiAwLjAxLFxuXHRcdGZvdnk6IE1hdGguUEkgLyA0LFxuXHRcdHpvb206IDEsXG5cdH0pO1xuXHRjdHguY2FtZXJhID0gY2FtZXJhO1xuXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eCwge1xuXHRcdHNwZWVkUGFubmluZzogMCxcblx0XHRpbmVydGlhT3JiaXQ6IDEwMDAsXG5cdH0pO1xuXHRjdHguYWRkKFxuXHRcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7XG5cdFx0XHRkZXB0aDogMSxcblx0XHRcdHN0ZW5jaWw6IDAsXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGN0eCwge1xuXHRcdFx0dGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjdHgpLmxvYWRCaXRtYXAoQmFja2dyb3VuZFVSTCksXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcblx0XHRcdGNvbG9yOiBmYWxzZSxcblx0XHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLm9mZixcblx0XHRcdGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuXHRcdFx0c3RlbmNpbDogd2ViZ2xQcmVzZXRTdGVuY2lsLndyaXRlKDEpLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0bmV3IFRnZFBhaW50ZXJNZXNoR2x0ZihjdHgsIHtcblx0XHRcdFx0XHRhc3NldDogYXNzZXRzLmdsYi5yaW5nLFxuXHRcdFx0XHRcdG1hdGVyaWFsOiAoKSA9PiBuZXcgVGdkTWF0ZXJpYWxGbGF0KCksXG5cdFx0XHRcdH0pLFxuXHRcdFx0XSxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xuXHRcdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRcdGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuXHRcdFx0c3RlbmNpbDogd2ViZ2xQcmVzZXRTdGVuY2lsLnBhaW50SWZFcXVhbCgwKSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY3R4LCB7XG5cdFx0XHRcdFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcblx0XHRcdFx0fSksXG5cdFx0XHRdLFxuXHRcdH0pLFxuXHQpO1xuXHRjdHgucGFpbnQoKTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0b3B0aW9ucz17e1xuXHRcdFx0XHRkZXB0aDogdHJ1ZSxcblx0XHRcdFx0c3RlbmNpbDogdHJ1ZSxcblx0XHRcdFx0YW50aWFsaWFzOiB0cnVlLFxuXHRcdFx0fX1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHtcblx0XHRcdFx0XHRzdXphbm5lOiBTdXphbm5lVVJMLFxuXHRcdFx0XHRcdHJpbmc6IFJpbmdVUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZENhbWVyYVBlcnNwZWN0aXZlIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkTWF0ZXJpYWxGbGF0IiwiVGdkUGFpbnRlckJhY2tncm91bmQiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJ3ZWJnbFByZXNldEN1bGwiLCJ3ZWJnbFByZXNldERlcHRoIiwid2ViZ2xQcmVzZXRTdGVuY2lsIiwiVmlldyIsIkJhY2tncm91bmRVUkwiLCJSaW5nVVJMIiwiU3V6YW5uZVVSTCIsImluaXQiLCJjdHgiLCJhc3NldHMiLCJjYW1lcmEiLCJNYXRoIiwibWF0ZXJpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3lCO0FBQ2lCO0FBQ1c7QUFDcEI7QUFFbEMsSUFBTUksUUFBUTtJQUNiLGFBQ0M7QUFDRjtBQUNBLElBQU1DLE9BQ0w7QUFFYyxTQUFTQztJQUN2QixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQ0M7OzBCQUNDLGtEQUFDO2dCQUFJLFdBQVU7MEJBQ2QsZ0VBQUNKLHlDQUFJQTs7Ozs7Ozs7OzswQkFFTixrREFBQztnQkFBSSxXQUFVOztrQ0FDZCxrREFBQztrQ0FDQSxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNyREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUdoQyxrREFBQ04sdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FBT00sT0FBT0gsT0FBT0Q7Ozs7Ozs7Ozs7Ozs7O0FBSXBEOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ3QjtBQUNrQztBQUVMO0FBQ1I7QUFDTTtBQUVuRCxTQUFTc0IsS0FBS0MsR0FBZSxFQUFFQyxNQUFjO0lBQzVDLFNBQVM7SUFDVCxJQUFNQyxTQUFTLElBQUlsQixvREFBb0JBLENBQUM7UUFDdkMsU0FBUztZQUFFLFVBQVU7UUFBRTtRQUN2QixLQUFLO1FBQ0wsTUFBTTtRQUNOLE1BQU1tQixLQUFLLEVBQUUsR0FBRztR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