"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_tricks_color-mask_3_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-src-f10bfa"], {
43428(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/background.49be5e8ef07a359b.glb";

},
50097(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/background.94860ce4a0297491.webp";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
65667(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(43475);
/* import */ var _background_webp__rspack_import_4 = __webpack_require__(50097);
/* import */ var _background_glb__rspack_import_5 = __webpack_require__(43428);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_6 = __webpack_require__(21278);







function init(context, assets) {
    // #begin
    context.camera = assets.glb.scene.createCameraByName("Camera");
    console.log(context.camera.toCode());
    var painter = (0,_tolokoban_tgd__rspack_import_2.tgdMakeMeshGlbPainter)({
        context: context,
        data: assets.glb.scene,
        node: "Building",
        overrideMaterial: function overrideMaterial() {
            return function() {
                return new _tolokoban_tgd__rspack_import_2.TgdMaterialFlat({
                    color: [
                        1,
                        0,
                        1,
                        1
                    ]
                });
            };
        }
    }).painter;
    var background = new _tolokoban_tgd__rspack_import_2.TgdPainterBackgroundWithDepth(context, {
        background: new _tolokoban_tgd__rspack_import_2.TgdTexture2D(context).loadBitmap(_background_webp__rspack_import_4).setParams({
            wrapS: "MIRRORED_REPEAT"
        }),
        children: [
            painter
        ]
    });
    var object = new _tolokoban_tgd__rspack_import_2.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzanne
    });
    object.transfo.setPosition(11.02, 0, -8.75).setScale(1.5).setScale(8);
    var cube = new _tolokoban_tgd__rspack_import_2.TgdPainterMesh(context);
    cube.transfo.setPosition(11.02, 10, -8.75).setScale(15);
    context.add(background, new _tolokoban_tgd__rspack_import_2.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_2.webglPresetDepth.lessOrEqual,
        children: [
            new _tolokoban_tgd__rspack_import_2.TgdPainterLogic(function() {
                _tolokoban_tgd__rspack_import_2.TgdPainterState.debug(context);
            }),
            cube
        ]
    }), // new TgdPainterState(context, {
    //     depth: webglPresetDepth.lessOrEqual,
    //     children: [object],
    // }),
    new _tolokoban_tgd__rspack_import_2.TgdPainterLogic(function(time) {
        var mod = (0,_tolokoban_tgd__rspack_import_2.tgdCalcModulo)(time * 0.1, 0, 2);
        var y = 0;
        if (mod < 1) y = mod * 25;
        else y = 25 * (2 - mod);
        var _object_transfo_position = object.transfo.position, x = _object_transfo_position.x, z = _object_transfo_position.z;
        object.transfo.setPosition(x, y, z);
        object.transfo.setEulerRotation(time, time * 47, -time * 120);
    }));
    window.setTimeout(function() {
        return context.paint();
    }, 1000);
// #end
}
function Demo() {
    var handleInit = function handleInit(context, assets) {
        init(context, assets);
    };
    var size = 500;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_3["default"], {
        onReady: handleInit,
        width: "".concat(size * 1.7777777777777, "px"),
        height: "".concat(size, "px"),
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_6,
                scene: _background_glb__rspack_import_5
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/color-mask.demo.tsx",
        lineNumber: 84,
        columnNumber: 3
    }, this);
}


},
82210(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _color_mask_demo__rspack_import_4 = __webpack_require__(65667);
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
    "Detail #1": '    context.camera = assets.glb.scene.createCameraByName("Camera")\n    console.log(context.camera.toCode())\n    const { painter } = tgdMakeMeshGlbPainter({\n        context,\n        data: assets.glb.scene,\n        node: "Building",\n        overrideMaterial: () => () => new TgdMaterialFlat({ color: [1, 0, 1, 1] }),\n    })\n    const background = new TgdPainterBackgroundWithDepth(context, {\n        background: new TgdTexture2D(context).loadBitmap(BackgroundURL).setParams({\n            wrapS: "MIRRORED_REPEAT",\n        }),\n        children: [painter],\n    })\n    const object = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzanne,\n    })\n    object.transfo.setPosition(11.02, 0, -8.75).setScale(1.5).setScale(8)\n\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.setPosition(11.02, 10, -8.75).setScale(15)\n\n    context.add(\n        background,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.lessOrEqual,\n            children: [\n                new TgdPainterLogic(() => {\n                    TgdPainterState.debug(context)\n                }),\n                cube,\n            ],\n        }),\n        // new TgdPainterState(context, {\n        //     depth: webglPresetDepth.lessOrEqual,\n        //     children: [object],\n        // }),\n        new TgdPainterLogic((time) => {\n            const mod = tgdCalcModulo(time * 0.1, 0, 2)\n            let y = 0\n            if (mod < 1) y = mod * 25\n            else y = 25 * (2 - mod)\n            const { x, z } = object.transfo.position\n            object.transfo.setPosition(x, y, z)\n            object.transfo.setEulerRotation(time, time * 47, -time * 120)\n        }),\n    )\n    window.setTimeout(() => context.paint(), 1000)'
};
var FULL = 'import React from "react"\nimport {\n    tgdCalcModulo,\n    type TgdContext,\n    tgdMakeMeshGlbPainter,\n    TgdMaterialFlat,\n    TgdPainterBackgroundWithDepth,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetCull,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\n\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport BackgroundURL from "./background.webp"\nimport BackgroundGLB from "./background.glb"\nimport SuzanneURL from "@/assets/mesh/suzanne.glb"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera = assets.glb.scene.createCameraByName("Camera")\n    console.log(context.camera.toCode())\n    const { painter } = tgdMakeMeshGlbPainter({\n        context,\n        data: assets.glb.scene,\n        node: "Building",\n        overrideMaterial: () => () => new TgdMaterialFlat({ color: [1, 0, 1, 1] }),\n    })\n    const background = new TgdPainterBackgroundWithDepth(context, {\n        background: new TgdTexture2D(context).loadBitmap(BackgroundURL).setParams({\n            wrapS: "MIRRORED_REPEAT",\n        }),\n        children: [painter],\n    })\n    const object = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzanne,\n    })\n    object.transfo.setPosition(11.02, 0, -8.75).setScale(1.5).setScale(8)\n\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.setPosition(11.02, 10, -8.75).setScale(15)\n\n    context.add(\n        background,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.lessOrEqual,\n            children: [\n                new TgdPainterLogic(() => {\n                    TgdPainterState.debug(context)\n                }),\n                cube,\n            ],\n        }),\n        // new TgdPainterState(context, {\n        //     depth: webglPresetDepth.lessOrEqual,\n        //     children: [object],\n        // }),\n        new TgdPainterLogic((time) => {\n            const mod = tgdCalcModulo(time * 0.1, 0, 2)\n            let y = 0\n            if (mod < 1) y = mod * 25\n            else y = 25 * (2 - mod)\n            const { x, z } = object.transfo.position\n            object.transfo.setPosition(x, y, z)\n            object.transfo.setEulerRotation(time, time * 47, -time * 120)\n        }),\n    )\n    window.setTimeout(() => context.paint(), 1000)\n}\n\nexport default function Demo() {\n    const handleInit = (context: TgdContext, assets: Assets) => {\n        init(context, assets)\n    }\n    const size = 500\n\n    return (\n        <View\n            onReady={handleInit}\n            width={`${size * 1.7777777777777}px`}\n            height={`${size}px`}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                    scene: BackgroundGLB,\n                },\n            }}></View>\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_color_mask_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
6602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _color_mask_demo__rspack_import_1 = __webpack_require__(82210);
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
        h1: "h1"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Color Masking for rich backgrounds"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_color_mask_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX2NvbG9yLW1hc2tfM19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLXNyYy1mMTBiZmEuZDEyZWM5MTViNTQ1N2NhMS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdHJpY2tzL2NvbG9yLW1hc2svMy9fL2NvbG9yLW1hc2suZGVtby9jb2xvci1tYXNrLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdHJpY2tzL2NvbG9yLW1hc2svMy9fL2NvbG9yLW1hc2suZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3MvY29sb3ItbWFzay8zL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHR0Z2RDYWxjTW9kdWxvLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdHRnZE1ha2VNZXNoR2xiUGFpbnRlcixcblx0VGdkTWF0ZXJpYWxGbGF0LFxuXHRUZ2RQYWludGVyQmFja2dyb3VuZFdpdGhEZXB0aCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTG9naWMsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyTWVzaEdsdGYsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxuXHR3ZWJnbFByZXNldEN1bGwsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIi4vYmFja2dyb3VuZC53ZWJwXCI7XG5pbXBvcnQgQmFja2dyb3VuZEdMQiBmcm9tIFwiLi9iYWNrZ3JvdW5kLmdsYlwiO1xuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW5cblx0Y29udGV4dC5jYW1lcmEgPSBhc3NldHMuZ2xiLnNjZW5lLmNyZWF0ZUNhbWVyYUJ5TmFtZShcIkNhbWVyYVwiKTtcblx0Y29uc29sZS5sb2coY29udGV4dC5jYW1lcmEudG9Db2RlKCkpO1xuXHRjb25zdCB7IHBhaW50ZXIgfSA9IHRnZE1ha2VNZXNoR2xiUGFpbnRlcih7XG5cdFx0Y29udGV4dCxcblx0XHRkYXRhOiBhc3NldHMuZ2xiLnNjZW5lLFxuXHRcdG5vZGU6IFwiQnVpbGRpbmdcIixcblx0XHRvdmVycmlkZU1hdGVyaWFsOiAoKSA9PiAoKSA9PiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3I6IFsxLCAwLCAxLCAxXSB9KSxcblx0fSk7XG5cdGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmRXaXRoRGVwdGgoY29udGV4dCwge1xuXHRcdGJhY2tncm91bmQ6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChCYWNrZ3JvdW5kVVJMKS5zZXRQYXJhbXMoe1xuXHRcdFx0d3JhcFM6IFwiTUlSUk9SRURfUkVQRUFUXCIsXG5cdFx0fSksXG5cdFx0Y2hpbGRyZW46IFtwYWludGVyXSxcblx0fSk7XG5cdGNvbnN0IG9iamVjdCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXG5cdH0pO1xuXHRvYmplY3QudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMCwgLTguNzUpLnNldFNjYWxlKDEuNSkuc2V0U2NhbGUoOCk7XG5cblx0Y29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KTtcblx0Y3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKDExLjAyLCAxMCwgLTguNzUpLnNldFNjYWxlKDE1KTtcblxuXHRjb250ZXh0LmFkZChcblx0XHRiYWNrZ3JvdW5kLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRuZXcgVGdkUGFpbnRlckxvZ2ljKCgpID0+IHtcblx0XHRcdFx0XHRUZ2RQYWludGVyU3RhdGUuZGVidWcoY29udGV4dCk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRjdWJlLFxuXHRcdFx0XSxcblx0XHR9KSxcblx0XHQvLyBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHQvLyAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXG5cdFx0Ly8gICAgIGNoaWxkcmVuOiBbb2JqZWN0XSxcblx0XHQvLyB9KSxcblx0XHRuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG5cdFx0XHRjb25zdCBtb2QgPSB0Z2RDYWxjTW9kdWxvKHRpbWUgKiAwLjEsIDAsIDIpO1xuXHRcdFx0bGV0IHkgPSAwO1xuXHRcdFx0aWYgKG1vZCA8IDEpIHkgPSBtb2QgKiAyNTtcblx0XHRcdGVsc2UgeSA9IDI1ICogKDIgLSBtb2QpO1xuXHRcdFx0Y29uc3QgeyB4LCB6IH0gPSBvYmplY3QudHJhbnNmby5wb3NpdGlvbjtcblx0XHRcdG9iamVjdC50cmFuc2ZvLnNldFBvc2l0aW9uKHgsIHksIHopO1xuXHRcdFx0b2JqZWN0LnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lLCB0aW1lICogNDcsIC10aW1lICogMTIwKTtcblx0XHR9KSxcblx0KTtcblx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4gY29udGV4dC5wYWludCgpLCAxMDAwKTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRjb25zdCBoYW5kbGVJbml0ID0gKGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XG5cdFx0aW5pdChjb250ZXh0LCBhc3NldHMpO1xuXHR9O1xuXHRjb25zdCBzaXplID0gNTAwO1xuXG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2hhbmRsZUluaXR9XG5cdFx0XHR3aWR0aD17YCR7c2l6ZSAqIDEuNzc3Nzc3Nzc3Nzc3N31weGB9XG5cdFx0XHRoZWlnaHQ9e2Ake3NpemV9cHhgfVxuXHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdGdsYjoge1xuXHRcdFx0XHRcdHN1emFubmU6IFN1emFubmVVUkwsXG5cdFx0XHRcdFx0c2NlbmU6IEJhY2tncm91bmRHTEIsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdD48L1ZpZXc+XG5cdCk7XG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vY29sb3ItbWFzay5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkRldGFpbCAjMVwiOlxuXHRcdCcgICAgY29udGV4dC5jYW1lcmEgPSBhc3NldHMuZ2xiLnNjZW5lLmNyZWF0ZUNhbWVyYUJ5TmFtZShcIkNhbWVyYVwiKVxcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0LmNhbWVyYS50b0NvZGUoKSlcXG4gICAgY29uc3QgeyBwYWludGVyIH0gPSB0Z2RNYWtlTWVzaEdsYlBhaW50ZXIoe1xcbiAgICAgICAgY29udGV4dCxcXG4gICAgICAgIGRhdGE6IGFzc2V0cy5nbGIuc2NlbmUsXFxuICAgICAgICBub2RlOiBcIkJ1aWxkaW5nXCIsXFxuICAgICAgICBvdmVycmlkZU1hdGVyaWFsOiAoKSA9PiAoKSA9PiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3I6IFsxLCAwLCAxLCAxXSB9KSxcXG4gICAgfSlcXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZFdpdGhEZXB0aChjb250ZXh0LCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoQmFja2dyb3VuZFVSTCkuc2V0UGFyYW1zKHtcXG4gICAgICAgICAgICB3cmFwUzogXCJNSVJST1JFRF9SRVBFQVRcIixcXG4gICAgICAgIH0pLFxcbiAgICAgICAgY2hpbGRyZW46IFtwYWludGVyXSxcXG4gICAgfSlcXG4gICAgY29uc3Qgb2JqZWN0ID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbm5lLFxcbiAgICB9KVxcbiAgICBvYmplY3QudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMCwgLTguNzUpLnNldFNjYWxlKDEuNSkuc2V0U2NhbGUoOClcXG5cXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxcbiAgICBjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oMTEuMDIsIDEwLCAtOC43NSkuc2V0U2NhbGUoMTUpXFxuXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgYmFja2dyb3VuZCxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgVGdkUGFpbnRlclN0YXRlLmRlYnVnKGNvbnRleHQpXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICBjdWJlLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIC8vIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgLy8gICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcbiAgICAgICAgLy8gICAgIGNoaWxkcmVuOiBbb2JqZWN0XSxcXG4gICAgICAgIC8vIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IHRnZENhbGNNb2R1bG8odGltZSAqIDAuMSwgMCwgMilcXG4gICAgICAgICAgICBsZXQgeSA9IDBcXG4gICAgICAgICAgICBpZiAobW9kIDwgMSkgeSA9IG1vZCAqIDI1XFxuICAgICAgICAgICAgZWxzZSB5ID0gMjUgKiAoMiAtIG1vZClcXG4gICAgICAgICAgICBjb25zdCB7IHgsIHogfSA9IG9iamVjdC50cmFuc2ZvLnBvc2l0aW9uXFxuICAgICAgICAgICAgb2JqZWN0LnRyYW5zZm8uc2V0UG9zaXRpb24oeCwgeSwgeilcXG4gICAgICAgICAgICBvYmplY3QudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUsIHRpbWUgKiA0NywgLXRpbWUgKiAxMjApXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBjb250ZXh0LnBhaW50KCksIDEwMDApJyxcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxcbmltcG9ydCB7XFxuICAgIHRnZENhbGNNb2R1bG8sXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgdGdkTWFrZU1lc2hHbGJQYWludGVyLFxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXFxuICAgIFRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5cXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFwiLi9iYWNrZ3JvdW5kLndlYnBcIlxcbmltcG9ydCBCYWNrZ3JvdW5kR0xCIGZyb20gXCIuL2JhY2tncm91bmQuZ2xiXCJcXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYSA9IGFzc2V0cy5nbGIuc2NlbmUuY3JlYXRlQ2FtZXJhQnlOYW1lKFwiQ2FtZXJhXCIpXFxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQuY2FtZXJhLnRvQ29kZSgpKVxcbiAgICBjb25zdCB7IHBhaW50ZXIgfSA9IHRnZE1ha2VNZXNoR2xiUGFpbnRlcih7XFxuICAgICAgICBjb250ZXh0LFxcbiAgICAgICAgZGF0YTogYXNzZXRzLmdsYi5zY2VuZSxcXG4gICAgICAgIG5vZGU6IFwiQnVpbGRpbmdcIixcXG4gICAgICAgIG92ZXJyaWRlTWF0ZXJpYWw6ICgpID0+ICgpID0+IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzEsIDAsIDEsIDFdIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoKGNvbnRleHQsIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChCYWNrZ3JvdW5kVVJMKS5zZXRQYXJhbXMoe1xcbiAgICAgICAgICAgIHdyYXBTOiBcIk1JUlJPUkVEX1JFUEVBVFwiLFxcbiAgICAgICAgfSksXFxuICAgICAgICBjaGlsZHJlbjogW3BhaW50ZXJdLFxcbiAgICB9KVxcbiAgICBjb25zdCBvYmplY3QgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXFxuICAgIH0pXFxuICAgIG9iamVjdC50cmFuc2ZvLnNldFBvc2l0aW9uKDExLjAyLCAwLCAtOC43NSkuc2V0U2NhbGUoMS41KS5zZXRTY2FsZSg4KVxcblxcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXFxuICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMTAsIC04Ljc1KS5zZXRTY2FsZSgxNSlcXG5cXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBiYWNrZ3JvdW5kLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBUZ2RQYWludGVyU3RhdGUuZGVidWcoY29udGV4dClcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgIGN1YmUsXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgLy8gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAvLyAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgICAvLyAgICAgY2hpbGRyZW46IFtvYmplY3RdLFxcbiAgICAgICAgLy8gfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgbW9kID0gdGdkQ2FsY01vZHVsbyh0aW1lICogMC4xLCAwLCAyKVxcbiAgICAgICAgICAgIGxldCB5ID0gMFxcbiAgICAgICAgICAgIGlmIChtb2QgPCAxKSB5ID0gbW9kICogMjVcXG4gICAgICAgICAgICBlbHNlIHkgPSAyNSAqICgyIC0gbW9kKVxcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeiB9ID0gb2JqZWN0LnRyYW5zZm8ucG9zaXRpb25cXG4gICAgICAgICAgICBvYmplY3QudHJhbnNmby5zZXRQb3NpdGlvbih4LCB5LCB6KVxcbiAgICAgICAgICAgIG9iamVjdC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSwgdGltZSAqIDQ3LCAtdGltZSAqIDEyMClcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNvbnRleHQucGFpbnQoKSwgMTAwMClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgaGFuZGxlSW5pdCA9IChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICAgICAgaW5pdChjb250ZXh0LCBhc3NldHMpXFxuICAgIH1cXG4gICAgY29uc3Qgc2l6ZSA9IDUwMFxcblxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtoYW5kbGVJbml0fVxcbiAgICAgICAgICAgIHdpZHRoPXtgJHtzaXplICogMS43Nzc3Nzc3Nzc3Nzc3fXB4YH1cXG4gICAgICAgICAgICBoZWlnaHQ9e2Ake3NpemV9cHhgfVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgIHN1emFubmU6IFN1emFubmVVUkwsXFxuICAgICAgICAgICAgICAgICAgICBzY2VuZTogQmFja2dyb3VuZEdMQixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fT48L1ZpZXc+XFxuICAgIClcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidGdkQ2FsY01vZHVsbyIsInRnZE1ha2VNZXNoR2xiUGFpbnRlciIsIlRnZE1hdGVyaWFsRmxhdCIsIlRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIkJhY2tncm91bmRVUkwiLCJCYWNrZ3JvdW5kR0xCIiwiU3V6YW5uZVVSTCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY29uc29sZSIsInBhaW50ZXIiLCJvdmVycmlkZU1hdGVyaWFsIiwiYmFja2dyb3VuZCIsIm9iamVjdCIsImN1YmUiLCJ0aW1lIiwibW9kIiwieSIsIl9vYmplY3RfdHJhbnNmb19wb3NpdGlvbiIsIngiLCJ6Iiwid2luZG93IiwiRGVtbyIsImhhbmRsZUluaXQiLCJzaXplIiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBZUY7QUFFa0M7QUFFWjtBQUNEO0FBQ007QUFFbkQsU0FBU2UsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUNoRCxTQUFTO0lBQ1RELFFBQVEsTUFBTSxHQUFHQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7SUFDckRDLFFBQVEsR0FBRyxDQUFDRixRQUFRLE1BQU0sQ0FBQyxNQUFNO0lBQ2pDLElBQVFHLFVBQVlqQix5REFBcUJBLENBQUM7UUFDekNjLFNBQUFBO1FBQ0EsTUFBTUMsT0FBTyxHQUFHLENBQUMsS0FBSztRQUN0QixNQUFNO1FBQ05HLGtCQUFrQixTQUFsQkE7bUJBQXdCO3VCQUFNLElBQUlqQiwrQ0FBZUEsQ0FBQztvQkFBRSxPQUFPO3dCQUFDO3dCQUFHO3dCQUFHO3dCQUFHO3FCQUFFO2dCQUFDOzs7SUFDekUsR0FMUWdCO0lBTVIsSUFBTUUsYUFBYSxJQUFJakIsNkRBQTZCQSxDQUFDWSxTQUFTO1FBQzdELFlBQVksSUFBSVAsNENBQVlBLENBQUNPLFNBQVMsVUFBVSxDQUFDSixpQ0FBYUEsRUFBRSxTQUFTLENBQUM7WUFDekUsT0FBTztRQUNSO1FBQ0EsVUFBVTtZQUFDTztTQUFRO0lBQ3BCO0lBQ0EsSUFBTUcsU0FBUyxJQUFJZixrREFBa0JBLENBQUNTLFNBQVM7UUFDOUMsT0FBT0MsT0FBTyxHQUFHLENBQUMsT0FBTztJQUMxQjtJQUNBSyxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxRQUFRLENBQUMsS0FBSyxR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