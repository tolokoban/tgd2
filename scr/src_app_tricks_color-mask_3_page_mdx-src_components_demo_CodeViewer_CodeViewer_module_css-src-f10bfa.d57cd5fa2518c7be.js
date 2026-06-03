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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/color-mask.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_color_mask_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX2NvbG9yLW1hc2tfM19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLXNyYy1mMTBiZmEuZDU3Y2Q1ZmEyNTE4YzdiZS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3MvY29sb3ItbWFzay8zL18vY29sb3ItbWFzay5kZW1vL2NvbG9yLW1hc2suZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9jb2xvci1tYXNrLzMvXy9jb2xvci1tYXNrLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3MvY29sb3ItbWFzay8zL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdHRnZENhbGNNb2R1bG8sXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0dGdkTWFrZU1lc2hHbGJQYWludGVyLFxuXHRUZ2RNYXRlcmlhbEZsYXQsXG5cdFRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJNZXNoR2x0Zixcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHdlYmdsUHJlc2V0Q3VsbCxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFwiLi9iYWNrZ3JvdW5kLndlYnBcIjtcbmltcG9ydCBCYWNrZ3JvdW5kR0xCIGZyb20gXCIuL2JhY2tncm91bmQuZ2xiXCI7XG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiO1xuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdC8vICNiZWdpblxuXHRjb250ZXh0LmNhbWVyYSA9IGFzc2V0cy5nbGIuc2NlbmUuY3JlYXRlQ2FtZXJhQnlOYW1lKFwiQ2FtZXJhXCIpO1xuXHRjb25zb2xlLmxvZyhjb250ZXh0LmNhbWVyYS50b0NvZGUoKSk7XG5cdGNvbnN0IHsgcGFpbnRlciB9ID0gdGdkTWFrZU1lc2hHbGJQYWludGVyKHtcblx0XHRjb250ZXh0LFxuXHRcdGRhdGE6IGFzc2V0cy5nbGIuc2NlbmUsXG5cdFx0bm9kZTogXCJCdWlsZGluZ1wiLFxuXHRcdG92ZXJyaWRlTWF0ZXJpYWw6ICgpID0+ICgpID0+IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzEsIDAsIDEsIDFdIH0pLFxuXHR9KTtcblx0Y29uc3QgYmFja2dyb3VuZCA9IG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZFdpdGhEZXB0aChjb250ZXh0LCB7XG5cdFx0YmFja2dyb3VuZDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKEJhY2tncm91bmRVUkwpLnNldFBhcmFtcyh7XG5cdFx0XHR3cmFwUzogXCJNSVJST1JFRF9SRVBFQVRcIixcblx0XHR9KSxcblx0XHRjaGlsZHJlbjogW3BhaW50ZXJdLFxuXHR9KTtcblx0Y29uc3Qgb2JqZWN0ID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG5cdFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcblx0fSk7XG5cdG9iamVjdC50cmFuc2ZvLnNldFBvc2l0aW9uKDExLjAyLCAwLCAtOC43NSkuc2V0U2NhbGUoMS41KS5zZXRTY2FsZSg4KTtcblxuXHRjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpO1xuXHRjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oMTEuMDIsIDEwLCAtOC43NSkuc2V0U2NhbGUoMTUpO1xuXG5cdGNvbnRleHQuYWRkKFxuXHRcdGJhY2tncm91bmQsXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdG5ldyBUZ2RQYWludGVyTG9naWMoKCkgPT4ge1xuXHRcdFx0XHRcdFRnZFBhaW50ZXJTdGF0ZS5kZWJ1Zyhjb250ZXh0KTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGN1YmUsXG5cdFx0XHRdLFxuXHRcdH0pLFxuXHRcdC8vIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdC8vICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcblx0XHQvLyAgICAgY2hpbGRyZW46IFtvYmplY3RdLFxuXHRcdC8vIH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcblx0XHRcdGNvbnN0IG1vZCA9IHRnZENhbGNNb2R1bG8odGltZSAqIDAuMSwgMCwgMik7XG5cdFx0XHRsZXQgeSA9IDA7XG5cdFx0XHRpZiAobW9kIDwgMSkgeSA9IG1vZCAqIDI1O1xuXHRcdFx0ZWxzZSB5ID0gMjUgKiAoMiAtIG1vZCk7XG5cdFx0XHRjb25zdCB7IHgsIHogfSA9IG9iamVjdC50cmFuc2ZvLnBvc2l0aW9uO1xuXHRcdFx0b2JqZWN0LnRyYW5zZm8uc2V0UG9zaXRpb24oeCwgeSwgeik7XG5cdFx0XHRvYmplY3QudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUsIHRpbWUgKiA0NywgLXRpbWUgKiAxMjApO1xuXHRcdH0pLFxuXHQpO1xuXHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBjb250ZXh0LnBhaW50KCksIDEwMDApO1xuXHQvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdGNvbnN0IGhhbmRsZUluaXQgPSAoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcblx0XHRpbml0KGNvbnRleHQsIGFzc2V0cyk7XG5cdH07XG5cdGNvbnN0IHNpemUgPSA1MDA7XG5cblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aGFuZGxlSW5pdH1cblx0XHRcdHdpZHRoPXtgJHtzaXplICogMS43Nzc3Nzc3Nzc3Nzc3fXB4YH1cblx0XHRcdGhlaWdodD17YCR7c2l6ZX1weGB9XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0Z2xiOiB7XG5cdFx0XHRcdFx0c3V6YW5uZTogU3V6YW5uZVVSTCxcblx0XHRcdFx0XHRzY2VuZTogQmFja2dyb3VuZEdMQixcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0PjwvVmlldz5cblx0KTtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9jb2xvci1tYXNrLmRlbW9cIjtcblxuY29uc3QgRk9DVVMgPSB7XG5cdFwiRGV0YWlsICMxXCI6XG5cdFx0JyAgICBjb250ZXh0LmNhbWVyYSA9IGFzc2V0cy5nbGIuc2NlbmUuY3JlYXRlQ2FtZXJhQnlOYW1lKFwiQ2FtZXJhXCIpXFxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQuY2FtZXJhLnRvQ29kZSgpKVxcbiAgICBjb25zdCB7IHBhaW50ZXIgfSA9IHRnZE1ha2VNZXNoR2xiUGFpbnRlcih7XFxuICAgICAgICBjb250ZXh0LFxcbiAgICAgICAgZGF0YTogYXNzZXRzLmdsYi5zY2VuZSxcXG4gICAgICAgIG5vZGU6IFwiQnVpbGRpbmdcIixcXG4gICAgICAgIG92ZXJyaWRlTWF0ZXJpYWw6ICgpID0+ICgpID0+IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzEsIDAsIDEsIDFdIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoKGNvbnRleHQsIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChCYWNrZ3JvdW5kVVJMKS5zZXRQYXJhbXMoe1xcbiAgICAgICAgICAgIHdyYXBTOiBcIk1JUlJPUkVEX1JFUEVBVFwiLFxcbiAgICAgICAgfSksXFxuICAgICAgICBjaGlsZHJlbjogW3BhaW50ZXJdLFxcbiAgICB9KVxcbiAgICBjb25zdCBvYmplY3QgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXFxuICAgIH0pXFxuICAgIG9iamVjdC50cmFuc2ZvLnNldFBvc2l0aW9uKDExLjAyLCAwLCAtOC43NSkuc2V0U2NhbGUoMS41KS5zZXRTY2FsZSg4KVxcblxcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXFxuICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMTAsIC04Ljc1KS5zZXRTY2FsZSgxNSlcXG5cXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBiYWNrZ3JvdW5kLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBUZ2RQYWludGVyU3RhdGUuZGVidWcoY29udGV4dClcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgIGN1YmUsXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgLy8gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAvLyAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgICAvLyAgICAgY2hpbGRyZW46IFtvYmplY3RdLFxcbiAgICAgICAgLy8gfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgbW9kID0gdGdkQ2FsY01vZHVsbyh0aW1lICogMC4xLCAwLCAyKVxcbiAgICAgICAgICAgIGxldCB5ID0gMFxcbiAgICAgICAgICAgIGlmIChtb2QgPCAxKSB5ID0gbW9kICogMjVcXG4gICAgICAgICAgICBlbHNlIHkgPSAyNSAqICgyIC0gbW9kKVxcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeiB9ID0gb2JqZWN0LnRyYW5zZm8ucG9zaXRpb25cXG4gICAgICAgICAgICBvYmplY3QudHJhbnNmby5zZXRQb3NpdGlvbih4LCB5LCB6KVxcbiAgICAgICAgICAgIG9iamVjdC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSwgdGltZSAqIDQ3LCAtdGltZSAqIDEyMClcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNvbnRleHQucGFpbnQoKSwgMTAwMCknLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXFxuaW1wb3J0IHtcXG4gICAgdGdkQ2FsY01vZHVsbyxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICB0Z2RNYWtlTWVzaEdsYlBhaW50ZXIsXFxuICAgIFRnZE1hdGVyaWFsRmxhdCxcXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmRXaXRoRGVwdGgsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgd2ViZ2xQcmVzZXRDdWxsLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5cXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcblxcbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXCIuL2JhY2tncm91bmQud2VicFwiXFxuaW1wb3J0IEJhY2tncm91bmRHTEIgZnJvbSBcIi4vYmFja2dyb3VuZC5nbGJcIlxcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnRleHQuY2FtZXJhID0gYXNzZXRzLmdsYi5zY2VuZS5jcmVhdGVDYW1lcmFCeU5hbWUoXCJDYW1lcmFcIilcXG4gICAgY29uc29sZS5sb2coY29udGV4dC5jYW1lcmEudG9Db2RlKCkpXFxuICAgIGNvbnN0IHsgcGFpbnRlciB9ID0gdGdkTWFrZU1lc2hHbGJQYWludGVyKHtcXG4gICAgICAgIGNvbnRleHQsXFxuICAgICAgICBkYXRhOiBhc3NldHMuZ2xiLnNjZW5lLFxcbiAgICAgICAgbm9kZTogXCJCdWlsZGluZ1wiLFxcbiAgICAgICAgb3ZlcnJpZGVNYXRlcmlhbDogKCkgPT4gKCkgPT4gbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMSwgMCwgMSwgMV0gfSksXFxuICAgIH0pXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmRXaXRoRGVwdGgoY29udGV4dCwge1xcbiAgICAgICAgYmFja2dyb3VuZDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKEJhY2tncm91bmRVUkwpLnNldFBhcmFtcyh7XFxuICAgICAgICAgICAgd3JhcFM6IFwiTUlSUk9SRURfUkVQRUFUXCIsXFxuICAgICAgICB9KSxcXG4gICAgICAgIGNoaWxkcmVuOiBbcGFpbnRlcl0sXFxuICAgIH0pXFxuICAgIGNvbnN0IG9iamVjdCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcXG4gICAgfSlcXG4gICAgb2JqZWN0LnRyYW5zZm8uc2V0UG9zaXRpb24oMTEuMDIsIDAsIC04Ljc1KS5zZXRTY2FsZSgxLjUpLnNldFNjYWxlKDgpXFxuXFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcXG4gICAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKDExLjAyLCAxMCwgLTguNzUpLnNldFNjYWxlKDE1KVxcblxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGJhY2tncm91bmQsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIFRnZFBhaW50ZXJTdGF0ZS5kZWJ1Zyhjb250ZXh0KVxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgY3ViZSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSksXFxuICAgICAgICAvLyBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIC8vICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICAgIC8vICAgICBjaGlsZHJlbjogW29iamVjdF0sXFxuICAgICAgICAvLyB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBjb25zdCBtb2QgPSB0Z2RDYWxjTW9kdWxvKHRpbWUgKiAwLjEsIDAsIDIpXFxuICAgICAgICAgICAgbGV0IHkgPSAwXFxuICAgICAgICAgICAgaWYgKG1vZCA8IDEpIHkgPSBtb2QgKiAyNVxcbiAgICAgICAgICAgIGVsc2UgeSA9IDI1ICogKDIgLSBtb2QpXFxuICAgICAgICAgICAgY29uc3QgeyB4LCB6IH0gPSBvYmplY3QudHJhbnNmby5wb3NpdGlvblxcbiAgICAgICAgICAgIG9iamVjdC50cmFuc2ZvLnNldFBvc2l0aW9uKHgsIHksIHopXFxuICAgICAgICAgICAgb2JqZWN0LnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lLCB0aW1lICogNDcsIC10aW1lICogMTIwKVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gY29udGV4dC5wYWludCgpLCAxMDAwKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCBoYW5kbGVJbml0ID0gKGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICBpbml0KGNvbnRleHQsIGFzc2V0cylcXG4gICAgfVxcbiAgICBjb25zdCBzaXplID0gNTAwXFxuXFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2hhbmRsZUluaXR9XFxuICAgICAgICAgICAgd2lkdGg9e2Ake3NpemUgKiAxLjc3Nzc3Nzc3Nzc3Nzd9cHhgfVxcbiAgICAgICAgICAgIGhlaWdodD17YCR7c2l6ZX1weGB9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGdsYjoge1xcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5uZTogU3V6YW5uZVVSTCxcXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lOiBCYWNrZ3JvdW5kR0xCLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19PjwvVmlldz5cXG4gICAgKVxcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ0Z2RDYWxjTW9kdWxvIiwidGdkTWFrZU1lc2hHbGJQYWludGVyIiwiVGdkTWF0ZXJpYWxGbGF0IiwiVGdkUGFpbnRlckJhY2tncm91bmRXaXRoRGVwdGgiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiQmFja2dyb3VuZFVSTCIsIkJhY2tncm91bmRHTEIiLCJTdXphbm5lVVJMIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjb25zb2xlIiwicGFpbnRlciIsIm92ZXJyaWRlTWF0ZXJpYWwiLCJiYWNrZ3JvdW5kIiwib2JqZWN0IiwiY3ViZSIsInRpbWUiLCJtb2QiLCJ5IiwiX29iamVjdF90cmFuc2ZvX3Bvc2l0aW9uIiwieCIsInoiLCJ3aW5kb3ciLCJEZW1vIiwiaGFuZGxlSW5pdCIsInNpemUiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFlRjtBQUVrQztBQUVaO0FBQ0Q7QUFDTTtBQUVuRCxTQUFTZSxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQ2hELFNBQVM7SUFDVEQsUUFBUSxNQUFNLEdBQUdDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztJQUNyREMsUUFBUSxHQUFHLENBQUNGLFFBQVEsTUFBTSxDQUFDLE1BQU07SUFDakMsSUFBUUcsVUFBWWpCLHlEQUFxQkEsQ0FBQztRQUN6Q2MsU0FBQUE7UUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQyxLQUFLO1FBQ3RCLE1BQU07UUFDTkcsa0JBQWtCLFNBQWxCQTttQkFBd0I7dUJBQU0sSUFBSWpCLCtDQUFlQSxDQUFDO29CQUFFLE9BQU87d0JBQUM7d0JBQUc7d0JBQUc7d0JBQUc7cUJBQUU7Z0JBQUM7OztJQUN6RSxHQUxRZ0I7SUFNUixJQUFNRSxhQUFhLElBQUlqQiw2REFBNkJBLENBQUNZLFNBQVM7UUFDN0QsWUFBWSxJQUFJUCw0Q0FBWUEsQ0FBQ08sU0FBUyxVQUFVLENBQUNKLGlDQUFhQSxFQUFFLFNBQVMsQ0FBQztZQUN6RSxPQUFPO1FBQ1I7UUFDQSxVQUFVO1lBQUNPO1NBQVE7SUFDcEI7SUFDQSxJQUFNRyxTQUFTLElBQUlmLGtEQUFrQkEsQ0FBQ1MsU0FBUztRQUM5QyxPQUFPQyxPQUFPLEdBQUcsQ0FBQyxPQUFPO0lBQzFCO0lBQ0FLLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxLQUFLLFFBQVEs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