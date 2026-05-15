"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_tricks_color-mask_2_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-src-f3f011"], {
39816(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/background.49be5e8ef07a359b.glb";

},
1916(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/background.94860ce4a0297491.webp";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
23686(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(43475);
/* import */ var _background_webp__rspack_import_4 = __webpack_require__(1916);
/* import */ var _background_glb__rspack_import_5 = __webpack_require__(39816);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_6 = __webpack_require__(21278);







function init(context, assets) {
    // #begin
    context.camera = assets.glb.scene.createCameraByName("Camera");
    console.log(context.camera.toCode());
    // new TgdControllerCameraOrbit(context)
    var clear = new _tolokoban_tgd__rspack_import_2.TgdPainterClear(context, {
        depth: 1
    });
    var cube = new _tolokoban_tgd__rspack_import_2.TgdPainterMesh(context);
    cube.transfo.setPosition(11.02, 0, -8.75).setScale(3);
    var background = new _tolokoban_tgd__rspack_import_2.TgdPainterBackground(context, {
        texture: new _tolokoban_tgd__rspack_import_2.TgdTexture2D(context).loadBitmap(_background_webp__rspack_import_4)
    });
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
    var mask = new _tolokoban_tgd__rspack_import_2.TgdPainterState(context, {
        color: false,
        cull: _tolokoban_tgd__rspack_import_2.webglPresetCull.back,
        children: [
            painter
        ]
    });
    context.add(clear, background, new _tolokoban_tgd__rspack_import_2.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_2.webglPresetDepth.lessOrEqual,
        children: [
            mask,
            cube
        ]
    }), new _tolokoban_tgd__rspack_import_2.TgdPainterLogic(function(time) {
        var mod = (0,_tolokoban_tgd__rspack_import_2.tgdCalcModulo)(time * 0.1, 0, 2);
        var y = 0;
        if (mod < 1) y = mod * 25;
        else y = 25 * (2 - mod);
        var _cube_transfo_position = cube.transfo.position, x = _cube_transfo_position.x, z = _cube_transfo_position.z;
        cube.transfo.setPosition(x, y, z);
        cube.transfo.setEulerRotation(time, time * 47, -time * 120);
    }));
    context.play();
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/color-mask.demo.tsx",
        lineNumber: 75,
        columnNumber: 9
    }, this);
}


},
54603(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _color_mask_demo__rspack_import_4 = __webpack_require__(23686);
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
    "Detail #1": '  context.camera = assets.glb.scene.createCameraByName("Camera");\n  console.log(context.camera.toCode());\n  // new TgdControllerCameraOrbit(context)\n  const clear = new TgdPainterClear(context, {\n    depth: 1,\n  });\n  const cube = new TgdPainterMesh(context);\n  cube.transfo.setPosition(11.02, 0, -8.75).setScale(3);\n  const background = new TgdPainterBackground(context, {\n    texture: new TgdTexture2D(context).loadBitmap(BackgroundURL),\n  });\n  const { painter } = tgdMakeMeshGlbPainter({\n    context,\n    data: assets.glb.scene,\n    node: "Building",\n    overrideMaterial: () => () => new TgdMaterialFlat({ color: [1, 0, 1, 1] }),\n  });\n  const mask = new TgdPainterState(context, {\n    color: false,\n    cull: webglPresetCull.back,\n    children: [painter],\n  });\n  context.add(\n    clear,\n    background,\n    new TgdPainterState(context, {\n      depth: webglPresetDepth.lessOrEqual,\n      children: [mask, cube],\n    }),\n    new TgdPainterLogic((time) => {\n      const mod = tgdCalcModulo(time * 0.1, 0, 2);\n      let y = 0;\n      if (mod < 1) y = mod * 25;\n      else y = 25 * (2 - mod);\n      const { x, z } = cube.transfo.position;\n      cube.transfo.setPosition(x, y, z);\n      cube.transfo.setEulerRotation(time, time * 47, -time * 120);\n    }),\n  );\n  context.play();'
};
var FULL = 'import React from "react";\nimport {\n  tgdCalcModulo,\n  TgdContext,\n  tgdMakeMeshGlbPainter,\n  TgdMaterialFlat,\n  TgdPainterBackground,\n  TgdPainterClear,\n  TgdPainterLogic,\n  TgdPainterMesh,\n  TgdPainterState,\n  TgdTexture2D,\n  webglPresetCull,\n  webglPresetDepth,\n} from "@tolokoban/tgd";\n\nimport View, { Assets } from "@/components/demo/Tgd";\n\nimport BackgroundURL from "./background.webp";\nimport BackgroundGLB from "./background.glb";\nimport SuzanneURL from "@/assets/mesh/suzanne.glb";\n\nfunction init(context: TgdContext, assets: Assets) {\n  context.camera = assets.glb.scene.createCameraByName("Camera");\n  console.log(context.camera.toCode());\n  // new TgdControllerCameraOrbit(context)\n  const clear = new TgdPainterClear(context, {\n    depth: 1,\n  });\n  const cube = new TgdPainterMesh(context);\n  cube.transfo.setPosition(11.02, 0, -8.75).setScale(3);\n  const background = new TgdPainterBackground(context, {\n    texture: new TgdTexture2D(context).loadBitmap(BackgroundURL),\n  });\n  const { painter } = tgdMakeMeshGlbPainter({\n    context,\n    data: assets.glb.scene,\n    node: "Building",\n    overrideMaterial: () => () => new TgdMaterialFlat({ color: [1, 0, 1, 1] }),\n  });\n  const mask = new TgdPainterState(context, {\n    color: false,\n    cull: webglPresetCull.back,\n    children: [painter],\n  });\n  context.add(\n    clear,\n    background,\n    new TgdPainterState(context, {\n      depth: webglPresetDepth.lessOrEqual,\n      children: [mask, cube],\n    }),\n    new TgdPainterLogic((time) => {\n      const mod = tgdCalcModulo(time * 0.1, 0, 2);\n      let y = 0;\n      if (mod < 1) y = mod * 25;\n      else y = 25 * (2 - mod);\n      const { x, z } = cube.transfo.position;\n      cube.transfo.setPosition(x, y, z);\n      cube.transfo.setEulerRotation(time, time * 47, -time * 120);\n    }),\n  );\n  context.play();\n}\n\nexport default function Demo() {\n  const handleInit = (context: TgdContext, assets: Assets) => {\n    init(context, assets);\n  };\n  const size = 500;\n\n  return (\n    <View\n      onReady={handleInit}\n      width={`${size * 1.7777777777777}px`}\n      height={`${size}px`}\n      assets={{\n        glb: {\n          suzanne: SuzanneURL,\n          scene: BackgroundGLB,\n        },\n      }}\n    ></View>\n  );\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_color_mask_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}


},
4497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _color_mask_demo__rspack_import_1 = __webpack_require__(54603);
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_color_mask_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX2NvbG9yLW1hc2tfMl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLXNyYy1mM2YwMTEuZGYxMjI4Mzk2ZDU1MjNiOS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3MvY29sb3ItbWFzay8yL18vY29sb3ItbWFzay5kZW1vL2NvbG9yLW1hc2suZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9jb2xvci1tYXNrLzIvXy9jb2xvci1tYXNrLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3MvY29sb3ItbWFzay8yL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHtcbiAgICB0Z2RDYWxjTW9kdWxvLFxuICAgIFRnZENvbnRleHQsXG4gICAgdGdkTWFrZU1lc2hHbGJQYWludGVyLFxuICAgIFRnZE1hdGVyaWFsRmxhdCxcbiAgICBUZ2RQYWludGVyQmFja2dyb3VuZCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgd2ViZ2xQcmVzZXRDdWxsLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFwiLi9iYWNrZ3JvdW5kLndlYnBcIlxuaW1wb3J0IEJhY2tncm91bmRHTEIgZnJvbSBcIi4vYmFja2dyb3VuZC5nbGJcIlxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29udGV4dC5jYW1lcmEgPSBhc3NldHMuZ2xiLnNjZW5lLmNyZWF0ZUNhbWVyYUJ5TmFtZShcIkNhbWVyYVwiKVxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQuY2FtZXJhLnRvQ29kZSgpKVxuICAgIC8vIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dClcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcbiAgICBjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oMTEuMDIsIDAsIC04Ljc1KS5zZXRTY2FsZSgzKVxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xuICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoQmFja2dyb3VuZFVSTCksXG4gICAgfSlcbiAgICBjb25zdCB7IHBhaW50ZXIgfSA9IHRnZE1ha2VNZXNoR2xiUGFpbnRlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGRhdGE6IGFzc2V0cy5nbGIuc2NlbmUsXG4gICAgICAgIG5vZGU6IFwiQnVpbGRpbmdcIixcbiAgICAgICAgb3ZlcnJpZGVNYXRlcmlhbDogKCkgPT4gKCkgPT4gbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMSwgMCwgMSwgMV0gfSksXG4gICAgfSlcbiAgICBjb25zdCBtYXNrID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBmYWxzZSxcbiAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXG4gICAgICAgIGNoaWxkcmVuOiBbcGFpbnRlcl0sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIGJhY2tncm91bmQsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXG4gICAgICAgICAgICBjaGlsZHJlbjogW21hc2ssIGN1YmVdLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kID0gdGdkQ2FsY01vZHVsbyh0aW1lICogMC4xLCAwLCAyKVxuICAgICAgICAgICAgbGV0IHkgPSAwXG4gICAgICAgICAgICBpZiAobW9kIDwgMSkgeSA9IG1vZCAqIDI1XG4gICAgICAgICAgICBlbHNlIHkgPSAyNSAqICgyIC0gbW9kKVxuICAgICAgICAgICAgY29uc3QgeyB4LCB6IH0gPSBjdWJlLnRyYW5zZm8ucG9zaXRpb25cbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbih4LCB5LCB6KVxuICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSwgdGltZSAqIDQ3LCAtdGltZSAqIDEyMClcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IGhhbmRsZUluaXQgPSAoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcbiAgICAgICAgaW5pdChjb250ZXh0LCBhc3NldHMpXG4gICAgfVxuICAgIGNvbnN0IHNpemUgPSA1MDBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtoYW5kbGVJbml0fVxuICAgICAgICAgICAgd2lkdGg9e2Ake3NpemUgKiAxLjc3Nzc3Nzc3Nzc3Nzd9cHhgfVxuICAgICAgICAgICAgaGVpZ2h0PXtgJHtzaXplfXB4YH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjoge1xuICAgICAgICAgICAgICAgICAgICBzdXphbm5lOiBTdXphbm5lVVJMLFxuICAgICAgICAgICAgICAgICAgICBzY2VuZTogQmFja2dyb3VuZEdMQixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX0+PC9WaWV3PlxuICAgIClcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9jb2xvci1tYXNrLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcbiAgICBcIkRldGFpbCAjMVwiOlxuICAgICAgICAnICBjb250ZXh0LmNhbWVyYSA9IGFzc2V0cy5nbGIuc2NlbmUuY3JlYXRlQ2FtZXJhQnlOYW1lKFwiQ2FtZXJhXCIpO1xcbiAgY29uc29sZS5sb2coY29udGV4dC5jYW1lcmEudG9Db2RlKCkpO1xcbiAgLy8gbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0KVxcbiAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgZGVwdGg6IDEsXFxuICB9KTtcXG4gIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCk7XFxuICBjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oMTEuMDIsIDAsIC04Ljc1KS5zZXRTY2FsZSgzKTtcXG4gIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcbiAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoQmFja2dyb3VuZFVSTCksXFxuICB9KTtcXG4gIGNvbnN0IHsgcGFpbnRlciB9ID0gdGdkTWFrZU1lc2hHbGJQYWludGVyKHtcXG4gICAgY29udGV4dCxcXG4gICAgZGF0YTogYXNzZXRzLmdsYi5zY2VuZSxcXG4gICAgbm9kZTogXCJCdWlsZGluZ1wiLFxcbiAgICBvdmVycmlkZU1hdGVyaWFsOiAoKSA9PiAoKSA9PiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3I6IFsxLCAwLCAxLCAxXSB9KSxcXG4gIH0pO1xcbiAgY29uc3QgbWFzayA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICBjb2xvcjogZmFsc2UsXFxuICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICBjaGlsZHJlbjogW3BhaW50ZXJdLFxcbiAgfSk7XFxuICBjb250ZXh0LmFkZChcXG4gICAgY2xlYXIsXFxuICAgIGJhY2tncm91bmQsXFxuICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcbiAgICAgIGNoaWxkcmVuOiBbbWFzaywgY3ViZV0sXFxuICAgIH0pLFxcbiAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgY29uc3QgbW9kID0gdGdkQ2FsY01vZHVsbyh0aW1lICogMC4xLCAwLCAyKTtcXG4gICAgICBsZXQgeSA9IDA7XFxuICAgICAgaWYgKG1vZCA8IDEpIHkgPSBtb2QgKiAyNTtcXG4gICAgICBlbHNlIHkgPSAyNSAqICgyIC0gbW9kKTtcXG4gICAgICBjb25zdCB7IHgsIHogfSA9IGN1YmUudHJhbnNmby5wb3NpdGlvbjtcXG4gICAgICBjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oeCwgeSwgeik7XFxuICAgICAgY3ViZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSwgdGltZSAqIDQ3LCAtdGltZSAqIDEyMCk7XFxuICAgIH0pLFxcbiAgKTtcXG4gIGNvbnRleHQucGxheSgpOycsXG59XG5jb25zdCBGVUxMID1cbiAgICAnaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xcbmltcG9ydCB7XFxuICB0Z2RDYWxjTW9kdWxvLFxcbiAgVGdkQ29udGV4dCxcXG4gIHRnZE1ha2VNZXNoR2xiUGFpbnRlcixcXG4gIFRnZE1hdGVyaWFsRmxhdCxcXG4gIFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxcbiAgVGdkUGFpbnRlckNsZWFyLFxcbiAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgVGdkUGFpbnRlck1lc2gsXFxuICBUZ2RQYWludGVyU3RhdGUsXFxuICBUZ2RUZXh0dXJlMkQsXFxuICB3ZWJnbFByZXNldEN1bGwsXFxuICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XFxuXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xcblxcbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXCIuL2JhY2tncm91bmQud2VicFwiO1xcbmltcG9ydCBCYWNrZ3JvdW5kR0xCIGZyb20gXCIuL2JhY2tncm91bmQuZ2xiXCI7XFxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICBjb250ZXh0LmNhbWVyYSA9IGFzc2V0cy5nbGIuc2NlbmUuY3JlYXRlQ2FtZXJhQnlOYW1lKFwiQ2FtZXJhXCIpO1xcbiAgY29uc29sZS5sb2coY29udGV4dC5jYW1lcmEudG9Db2RlKCkpO1xcbiAgLy8gbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0KVxcbiAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgZGVwdGg6IDEsXFxuICB9KTtcXG4gIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCk7XFxuICBjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oMTEuMDIsIDAsIC04Ljc1KS5zZXRTY2FsZSgzKTtcXG4gIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcbiAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoQmFja2dyb3VuZFVSTCksXFxuICB9KTtcXG4gIGNvbnN0IHsgcGFpbnRlciB9ID0gdGdkTWFrZU1lc2hHbGJQYWludGVyKHtcXG4gICAgY29udGV4dCxcXG4gICAgZGF0YTogYXNzZXRzLmdsYi5zY2VuZSxcXG4gICAgbm9kZTogXCJCdWlsZGluZ1wiLFxcbiAgICBvdmVycmlkZU1hdGVyaWFsOiAoKSA9PiAoKSA9PiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3I6IFsxLCAwLCAxLCAxXSB9KSxcXG4gIH0pO1xcbiAgY29uc3QgbWFzayA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICBjb2xvcjogZmFsc2UsXFxuICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICBjaGlsZHJlbjogW3BhaW50ZXJdLFxcbiAgfSk7XFxuICBjb250ZXh0LmFkZChcXG4gICAgY2xlYXIsXFxuICAgIGJhY2tncm91bmQsXFxuICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcbiAgICAgIGNoaWxkcmVuOiBbbWFzaywgY3ViZV0sXFxuICAgIH0pLFxcbiAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgY29uc3QgbW9kID0gdGdkQ2FsY01vZHVsbyh0aW1lICogMC4xLCAwLCAyKTtcXG4gICAgICBsZXQgeSA9IDA7XFxuICAgICAgaWYgKG1vZCA8IDEpIHkgPSBtb2QgKiAyNTtcXG4gICAgICBlbHNlIHkgPSAyNSAqICgyIC0gbW9kKTtcXG4gICAgICBjb25zdCB7IHgsIHogfSA9IGN1YmUudHJhbnNmby5wb3NpdGlvbjtcXG4gICAgICBjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oeCwgeSwgeik7XFxuICAgICAgY3ViZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSwgdGltZSAqIDQ3LCAtdGltZSAqIDEyMCk7XFxuICAgIH0pLFxcbiAgKTtcXG4gIGNvbnRleHQucGxheSgpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgY29uc3QgaGFuZGxlSW5pdCA9IChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICBpbml0KGNvbnRleHQsIGFzc2V0cyk7XFxuICB9O1xcbiAgY29uc3Qgc2l6ZSA9IDUwMDtcXG5cXG4gIHJldHVybiAoXFxuICAgIDxWaWV3XFxuICAgICAgb25SZWFkeT17aGFuZGxlSW5pdH1cXG4gICAgICB3aWR0aD17YCR7c2l6ZSAqIDEuNzc3Nzc3Nzc3Nzc3N31weGB9XFxuICAgICAgaGVpZ2h0PXtgJHtzaXplfXB4YH1cXG4gICAgICBhc3NldHM9e3tcXG4gICAgICAgIGdsYjoge1xcbiAgICAgICAgICBzdXphbm5lOiBTdXphbm5lVVJMLFxcbiAgICAgICAgICBzY2VuZTogQmFja2dyb3VuZEdMQixcXG4gICAgICAgIH0sXFxuICAgICAgfX1cXG4gICAgPjwvVmlldz5cXG4gICk7XFxufVxcbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8RGVtbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInRnZENhbGNNb2R1bG8iLCJ0Z2RNYWtlTWVzaEdsYlBhaW50ZXIiLCJUZ2RNYXRlcmlhbEZsYXQiLCJUZ2RQYWludGVyQmFja2dyb3VuZCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwid2ViZ2xQcmVzZXRDdWxsIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJCYWNrZ3JvdW5kVVJMIiwiQmFja2dyb3VuZEdMQiIsIlN1emFubmVVUkwiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNvbnNvbGUiLCJjbGVhciIsImN1YmUiLCJiYWNrZ3JvdW5kIiwicGFpbnRlciIsIm92ZXJyaWRlTWF0ZXJpYWwiLCJtYXNrIiwidGltZSIsIm1vZCIsInkiLCJfY3ViZV90cmFuc2ZvX3Bvc2l0aW9uIiwieCIsInoiLCJEZW1vIiwiaGFuZGxlSW5pdCIsInNpemUiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9u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