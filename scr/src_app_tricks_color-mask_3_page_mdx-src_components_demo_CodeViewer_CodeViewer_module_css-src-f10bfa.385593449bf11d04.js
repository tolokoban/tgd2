"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_tricks_color-mask_3_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-src-f10bfa"], {
43428(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/background.49be5e8ef07a359b.glb";

},
50097(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/background.94860ce4a0297491.webp";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

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
        columnNumber: 9
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
    "Detail #1": '    context.camera = assets.glb.scene.createCameraByName("Camera");\n    console.log(context.camera.toCode());\n    const { painter } = tgdMakeMeshGlbPainter({\n        context,\n        data: assets.glb.scene,\n        node: "Building",\n        overrideMaterial: () => () =>\n            new TgdMaterialFlat({ color: [1, 0, 1, 1] }),\n    });\n    const background = new TgdPainterBackgroundWithDepth(context, {\n        background: new TgdTexture2D(context)\n            .loadBitmap(BackgroundURL)\n            .setParams({\n                wrapS: "MIRRORED_REPEAT",\n            }),\n        children: [painter],\n    });\n    const object = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzanne,\n    });\n    object.transfo.setPosition(11.02, 0, -8.75).setScale(1.5).setScale(8);\n\n    const cube = new TgdPainterMesh(context);\n    cube.transfo.setPosition(11.02, 10, -8.75).setScale(15);\n\n    context.add(\n        background,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.lessOrEqual,\n            children: [\n                new TgdPainterLogic(() => {\n                    TgdPainterState.debug(context);\n                }),\n                cube,\n            ],\n        }),\n        // new TgdPainterState(context, {\n        //     depth: webglPresetDepth.lessOrEqual,\n        //     children: [object],\n        // }),\n        new TgdPainterLogic((time) => {\n            const mod = tgdCalcModulo(time * 0.1, 0, 2);\n            let y = 0;\n            if (mod < 1) y = mod * 25;\n            else y = 25 * (2 - mod);\n            const { x, z } = object.transfo.position;\n            object.transfo.setPosition(x, y, z);\n            object.transfo.setEulerRotation(time, time * 47, -time * 120);\n        }),\n    );\n    window.setTimeout(() => context.paint(), 1000);'
};
var FULL = 'import React from "react";\nimport {\n    tgdCalcModulo,\n    TgdContext,\n    tgdMakeMeshGlbPainter,\n    TgdMaterialFlat,\n    TgdPainterBackgroundWithDepth,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetCull,\n    webglPresetDepth,\n} from "@tolokoban/tgd";\n\nimport View, { Assets } from "@/components/demo/Tgd";\n\nimport BackgroundURL from "./background.webp";\nimport BackgroundGLB from "./background.glb";\nimport SuzanneURL from "@/assets/mesh/suzanne.glb";\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera = assets.glb.scene.createCameraByName("Camera");\n    console.log(context.camera.toCode());\n    const { painter } = tgdMakeMeshGlbPainter({\n        context,\n        data: assets.glb.scene,\n        node: "Building",\n        overrideMaterial: () => () =>\n            new TgdMaterialFlat({ color: [1, 0, 1, 1] }),\n    });\n    const background = new TgdPainterBackgroundWithDepth(context, {\n        background: new TgdTexture2D(context)\n            .loadBitmap(BackgroundURL)\n            .setParams({\n                wrapS: "MIRRORED_REPEAT",\n            }),\n        children: [painter],\n    });\n    const object = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzanne,\n    });\n    object.transfo.setPosition(11.02, 0, -8.75).setScale(1.5).setScale(8);\n\n    const cube = new TgdPainterMesh(context);\n    cube.transfo.setPosition(11.02, 10, -8.75).setScale(15);\n\n    context.add(\n        background,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.lessOrEqual,\n            children: [\n                new TgdPainterLogic(() => {\n                    TgdPainterState.debug(context);\n                }),\n                cube,\n            ],\n        }),\n        // new TgdPainterState(context, {\n        //     depth: webglPresetDepth.lessOrEqual,\n        //     children: [object],\n        // }),\n        new TgdPainterLogic((time) => {\n            const mod = tgdCalcModulo(time * 0.1, 0, 2);\n            let y = 0;\n            if (mod < 1) y = mod * 25;\n            else y = 25 * (2 - mod);\n            const { x, z } = object.transfo.position;\n            object.transfo.setPosition(x, y, z);\n            object.transfo.setEulerRotation(time, time * 47, -time * 120);\n        }),\n    );\n    window.setTimeout(() => context.paint(), 1000);\n}\n\nexport default function Demo() {\n    const handleInit = (context: TgdContext, assets: Assets) => {\n        init(context, assets);\n    };\n    const size = 500;\n\n    return (\n        <View\n            onReady={handleInit}\n            width={`${size * 1.7777777777777}px`}\n            height={`${size}px`}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                    scene: BackgroundGLB,\n                },\n            }}\n        >\n        </View>\n    );\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_color_mask_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/3/_/color-mask.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX2NvbG9yLW1hc2tfM19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLXNyYy1mMTBiZmEuMzg1NTkzNDQ5YmYxMWQwNC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3MvY29sb3ItbWFzay8zL18vY29sb3ItbWFzay5kZW1vL2NvbG9yLW1hc2suZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9jb2xvci1tYXNrLzMvXy9jb2xvci1tYXNrLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3MvY29sb3ItbWFzay8zL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHtcbiAgICB0Z2RDYWxjTW9kdWxvLFxuICAgIFRnZENvbnRleHQsXG4gICAgdGdkTWFrZU1lc2hHbGJQYWludGVyLFxuICAgIFRnZE1hdGVyaWFsRmxhdCxcbiAgICBUZ2RQYWludGVyQmFja2dyb3VuZFdpdGhEZXB0aCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIi4vYmFja2dyb3VuZC53ZWJwXCJcbmltcG9ydCBCYWNrZ3JvdW5kR0xCIGZyb20gXCIuL2JhY2tncm91bmQuZ2xiXCJcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnRleHQuY2FtZXJhID0gYXNzZXRzLmdsYi5zY2VuZS5jcmVhdGVDYW1lcmFCeU5hbWUoXCJDYW1lcmFcIilcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0LmNhbWVyYS50b0NvZGUoKSlcbiAgICBjb25zdCB7IHBhaW50ZXIgfSA9IHRnZE1ha2VNZXNoR2xiUGFpbnRlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGRhdGE6IGFzc2V0cy5nbGIuc2NlbmUsXG4gICAgICAgIG5vZGU6IFwiQnVpbGRpbmdcIixcbiAgICAgICAgb3ZlcnJpZGVNYXRlcmlhbDogKCkgPT4gKCkgPT4gbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMSwgMCwgMSwgMV0gfSksXG4gICAgfSlcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoKGNvbnRleHQsIHtcbiAgICAgICAgYmFja2dyb3VuZDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKEJhY2tncm91bmRVUkwpLnNldFBhcmFtcyh7XG4gICAgICAgICAgICB3cmFwUzogXCJNSVJST1JFRF9SRVBFQVRcIixcbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkcmVuOiBbcGFpbnRlcl0sXG4gICAgfSlcbiAgICBjb25zdCBvYmplY3QgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcbiAgICB9KVxuICAgIG9iamVjdC50cmFuc2ZvLnNldFBvc2l0aW9uKDExLjAyLCAwLCAtOC43NSkuc2V0U2NhbGUoMS41KS5zZXRTY2FsZSg4KVxuXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxuICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMTAsIC04Ljc1KS5zZXRTY2FsZSgxNSlcblxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBiYWNrZ3JvdW5kLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVGdkUGFpbnRlclN0YXRlLmRlYnVnKGNvbnRleHQpXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY3ViZSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICAvLyBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgLy8gICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxuICAgICAgICAvLyAgICAgY2hpbGRyZW46IFtvYmplY3RdLFxuICAgICAgICAvLyB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kID0gdGdkQ2FsY01vZHVsbyh0aW1lICogMC4xLCAwLCAyKVxuICAgICAgICAgICAgbGV0IHkgPSAwXG4gICAgICAgICAgICBpZiAobW9kIDwgMSkgeSA9IG1vZCAqIDI1XG4gICAgICAgICAgICBlbHNlIHkgPSAyNSAqICgyIC0gbW9kKVxuICAgICAgICAgICAgY29uc3QgeyB4LCB6IH0gPSBvYmplY3QudHJhbnNmby5wb3NpdGlvblxuICAgICAgICAgICAgb2JqZWN0LnRyYW5zZm8uc2V0UG9zaXRpb24oeCwgeSwgeilcbiAgICAgICAgICAgIG9iamVjdC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSwgdGltZSAqIDQ3LCAtdGltZSAqIDEyMClcbiAgICAgICAgfSksXG4gICAgKVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNvbnRleHQucGFpbnQoKSwgMTAwMClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgY29uc3QgaGFuZGxlSW5pdCA9IChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICBpbml0KGNvbnRleHQsIGFzc2V0cylcbiAgICB9XG4gICAgY29uc3Qgc2l6ZSA9IDUwMFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2hhbmRsZUluaXR9XG4gICAgICAgICAgICB3aWR0aD17YCR7c2l6ZSAqIDEuNzc3Nzc3Nzc3Nzc3N31weGB9XG4gICAgICAgICAgICBoZWlnaHQ9e2Ake3NpemV9cHhgfVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgZ2xiOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1emFubmU6IFN1emFubmVVUkwsXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lOiBCYWNrZ3JvdW5kR0xCLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fT48L1ZpZXc+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2NvbG9yLW1hc2suZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1xuICAgIFwiRGV0YWlsICMxXCI6XG4gICAgICAgICcgICAgY29udGV4dC5jYW1lcmEgPSBhc3NldHMuZ2xiLnNjZW5lLmNyZWF0ZUNhbWVyYUJ5TmFtZShcIkNhbWVyYVwiKTtcXG4gICAgY29uc29sZS5sb2coY29udGV4dC5jYW1lcmEudG9Db2RlKCkpO1xcbiAgICBjb25zdCB7IHBhaW50ZXIgfSA9IHRnZE1ha2VNZXNoR2xiUGFpbnRlcih7XFxuICAgICAgICBjb250ZXh0LFxcbiAgICAgICAgZGF0YTogYXNzZXRzLmdsYi5zY2VuZSxcXG4gICAgICAgIG5vZGU6IFwiQnVpbGRpbmdcIixcXG4gICAgICAgIG92ZXJyaWRlTWF0ZXJpYWw6ICgpID0+ICgpID0+XFxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMSwgMCwgMSwgMV0gfSksXFxuICAgIH0pO1xcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoKGNvbnRleHQsIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dClcXG4gICAgICAgICAgICAubG9hZEJpdG1hcChCYWNrZ3JvdW5kVVJMKVxcbiAgICAgICAgICAgIC5zZXRQYXJhbXMoe1xcbiAgICAgICAgICAgICAgICB3cmFwUzogXCJNSVJST1JFRF9SRVBFQVRcIixcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIGNoaWxkcmVuOiBbcGFpbnRlcl0sXFxuICAgIH0pO1xcbiAgICBjb25zdCBvYmplY3QgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXFxuICAgIH0pO1xcbiAgICBvYmplY3QudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMCwgLTguNzUpLnNldFNjYWxlKDEuNSkuc2V0U2NhbGUoOCk7XFxuXFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCk7XFxuICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMTAsIC04Ljc1KS5zZXRTY2FsZSgxNSk7XFxuXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgYmFja2dyb3VuZCxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgVGdkUGFpbnRlclN0YXRlLmRlYnVnKGNvbnRleHQpO1xcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgY3ViZSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSksXFxuICAgICAgICAvLyBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIC8vICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICAgIC8vICAgICBjaGlsZHJlbjogW29iamVjdF0sXFxuICAgICAgICAvLyB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBjb25zdCBtb2QgPSB0Z2RDYWxjTW9kdWxvKHRpbWUgKiAwLjEsIDAsIDIpO1xcbiAgICAgICAgICAgIGxldCB5ID0gMDtcXG4gICAgICAgICAgICBpZiAobW9kIDwgMSkgeSA9IG1vZCAqIDI1O1xcbiAgICAgICAgICAgIGVsc2UgeSA9IDI1ICogKDIgLSBtb2QpO1xcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeiB9ID0gb2JqZWN0LnRyYW5zZm8ucG9zaXRpb247XFxuICAgICAgICAgICAgb2JqZWN0LnRyYW5zZm8uc2V0UG9zaXRpb24oeCwgeSwgeik7XFxuICAgICAgICAgICAgb2JqZWN0LnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lLCB0aW1lICogNDcsIC10aW1lICogMTIwKTtcXG4gICAgICAgIH0pLFxcbiAgICApO1xcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBjb250ZXh0LnBhaW50KCksIDEwMDApOycsXG59XG5jb25zdCBGVUxMID1cbiAgICAnaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xcbmltcG9ydCB7XFxuICAgIHRnZENhbGNNb2R1bG8sXFxuICAgIFRnZENvbnRleHQsXFxuICAgIHRnZE1ha2VNZXNoR2xiUGFpbnRlcixcXG4gICAgVGdkTWF0ZXJpYWxGbGF0LFxcbiAgICBUZ2RQYWludGVyQmFja2dyb3VuZFdpdGhEZXB0aCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICB3ZWJnbFByZXNldEN1bGwsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcXG5cXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XFxuXFxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIi4vYmFja2dyb3VuZC53ZWJwXCI7XFxuaW1wb3J0IEJhY2tncm91bmRHTEIgZnJvbSBcIi4vYmFja2dyb3VuZC5nbGJcIjtcXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29udGV4dC5jYW1lcmEgPSBhc3NldHMuZ2xiLnNjZW5lLmNyZWF0ZUNhbWVyYUJ5TmFtZShcIkNhbWVyYVwiKTtcXG4gICAgY29uc29sZS5sb2coY29udGV4dC5jYW1lcmEudG9Db2RlKCkpO1xcbiAgICBjb25zdCB7IHBhaW50ZXIgfSA9IHRnZE1ha2VNZXNoR2xiUGFpbnRlcih7XFxuICAgICAgICBjb250ZXh0LFxcbiAgICAgICAgZGF0YTogYXNzZXRzLmdsYi5zY2VuZSxcXG4gICAgICAgIG5vZGU6IFwiQnVpbGRpbmdcIixcXG4gICAgICAgIG92ZXJyaWRlTWF0ZXJpYWw6ICgpID0+ICgpID0+XFxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMSwgMCwgMSwgMV0gfSksXFxuICAgIH0pO1xcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoKGNvbnRleHQsIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dClcXG4gICAgICAgICAgICAubG9hZEJpdG1hcChCYWNrZ3JvdW5kVVJMKVxcbiAgICAgICAgICAgIC5zZXRQYXJhbXMoe1xcbiAgICAgICAgICAgICAgICB3cmFwUzogXCJNSVJST1JFRF9SRVBFQVRcIixcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIGNoaWxkcmVuOiBbcGFpbnRlcl0sXFxuICAgIH0pO1xcbiAgICBjb25zdCBvYmplY3QgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXFxuICAgIH0pO1xcbiAgICBvYmplY3QudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMCwgLTguNzUpLnNldFNjYWxlKDEuNSkuc2V0U2NhbGUoOCk7XFxuXFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCk7XFxuICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMTAsIC04Ljc1KS5zZXRTY2FsZSgxNSk7XFxuXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgYmFja2dyb3VuZCxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgVGdkUGFpbnRlclN0YXRlLmRlYnVnKGNvbnRleHQpO1xcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgY3ViZSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSksXFxuICAgICAgICAvLyBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIC8vICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICAgIC8vICAgICBjaGlsZHJlbjogW29iamVjdF0sXFxuICAgICAgICAvLyB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBjb25zdCBtb2QgPSB0Z2RDYWxjTW9kdWxvKHRpbWUgKiAwLjEsIDAsIDIpO1xcbiAgICAgICAgICAgIGxldCB5ID0gMDtcXG4gICAgICAgICAgICBpZiAobW9kIDwgMSkgeSA9IG1vZCAqIDI1O1xcbiAgICAgICAgICAgIGVsc2UgeSA9IDI1ICogKDIgLSBtb2QpO1xcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeiB9ID0gb2JqZWN0LnRyYW5zZm8ucG9zaXRpb247XFxuICAgICAgICAgICAgb2JqZWN0LnRyYW5zZm8uc2V0UG9zaXRpb24oeCwgeSwgeik7XFxuICAgICAgICAgICAgb2JqZWN0LnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lLCB0aW1lICogNDcsIC10aW1lICogMTIwKTtcXG4gICAgICAgIH0pLFxcbiAgICApO1xcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBjb250ZXh0LnBhaW50KCksIDEwMDApO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCBoYW5kbGVJbml0ID0gKGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICBpbml0KGNvbnRleHQsIGFzc2V0cyk7XFxuICAgIH07XFxuICAgIGNvbnN0IHNpemUgPSA1MDA7XFxuXFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2hhbmRsZUluaXR9XFxuICAgICAgICAgICAgd2lkdGg9e2Ake3NpemUgKiAxLjc3Nzc3Nzc3Nzc3Nzd9cHhgfVxcbiAgICAgICAgICAgIGhlaWdodD17YCR7c2l6ZX1weGB9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGdsYjoge1xcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5uZTogU3V6YW5uZVVSTCxcXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lOiBCYWNrZ3JvdW5kR0xCLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICA+XFxuICAgICAgICA8L1ZpZXc+XFxuICAgICk7XFxufVxcbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8RGVtbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInRnZENhbGNNb2R1bG8iLCJ0Z2RNYWtlTWVzaEdsYlBhaW50ZXIiLCJUZ2RNYXRlcmlhbEZsYXQiLCJUZ2RQYWludGVyQmFja2dyb3VuZFdpdGhEZXB0aCIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJCYWNrZ3JvdW5kVVJMIiwiQmFja2dyb3VuZEdMQiIsIlN1emFubmVVUkwiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNvbnNvbGUiLCJwYWludGVyIiwib3ZlcnJpZGVNYXRlcmlhbCIsImJhY2tncm91bmQiLCJvYmplY3QiLCJjdWJlIiwidGltZSIsIm1vZCIsInkiLCJfb2JqZWN0X3RyYW5zZm9fcG9zaXRpb24iLCJ4IiwieiIsIndpbmRvdyIsIkRlbW8iLCJoYW5kbGVJbml0Iiwic2l6ZSIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQWVGO0FBRTZCO0FBRVA7QUFDRDtBQUNNO0FBRWxELFNBQVNlLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDN0MsU0FBUztJQUNURCxRQUFRLE1BQU0sR0FBR0MsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO0lBQ3JEQyxRQUFRLEdBQUcs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