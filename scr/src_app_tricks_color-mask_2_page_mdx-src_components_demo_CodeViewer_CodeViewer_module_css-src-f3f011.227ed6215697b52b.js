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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/color-mask.demo.tsx",
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
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
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_color_mask_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX2NvbG9yLW1hc2tfMl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLXNyYy1mM2YwMTEuMjI3ZWQ2MjE1Njk3YjUyYi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdHJpY2tzL2NvbG9yLW1hc2svMi9fL2NvbG9yLW1hc2suZGVtby9jb2xvci1tYXNrLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdHJpY2tzL2NvbG9yLW1hc2svMi9fL2NvbG9yLW1hc2suZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3MvY29sb3ItbWFzay8yL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7XG4gICAgdGdkQ2FsY01vZHVsbyxcbiAgICBUZ2RDb250ZXh0LFxuICAgIHRnZE1ha2VNZXNoR2xiUGFpbnRlcixcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIi4vYmFja2dyb3VuZC53ZWJwXCJcbmltcG9ydCBCYWNrZ3JvdW5kR0xCIGZyb20gXCIuL2JhY2tncm91bmQuZ2xiXCJcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnRleHQuY2FtZXJhID0gYXNzZXRzLmdsYi5zY2VuZS5jcmVhdGVDYW1lcmFCeU5hbWUoXCJDYW1lcmFcIilcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0LmNhbWVyYS50b0NvZGUoKSlcbiAgICAvLyBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQpXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXG4gICAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKDExLjAyLCAwLCAtOC43NSkuc2V0U2NhbGUoMylcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcbiAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKEJhY2tncm91bmRVUkwpLFxuICAgIH0pXG4gICAgY29uc3QgeyBwYWludGVyIH0gPSB0Z2RNYWtlTWVzaEdsYlBhaW50ZXIoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBkYXRhOiBhc3NldHMuZ2xiLnNjZW5lLFxuICAgICAgICBub2RlOiBcIkJ1aWxkaW5nXCIsXG4gICAgICAgIG92ZXJyaWRlTWF0ZXJpYWw6ICgpID0+ICgpID0+IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzEsIDAsIDEsIDFdIH0pLFxuICAgIH0pXG4gICAgY29uc3QgbWFzayA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogZmFsc2UsXG4gICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuICAgICAgICBjaGlsZHJlbjogW3BhaW50ZXJdLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBiYWNrZ3JvdW5kLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxuICAgICAgICAgICAgY2hpbGRyZW46IFttYXNrLCBjdWJlXSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IHRnZENhbGNNb2R1bG8odGltZSAqIDAuMSwgMCwgMilcbiAgICAgICAgICAgIGxldCB5ID0gMFxuICAgICAgICAgICAgaWYgKG1vZCA8IDEpIHkgPSBtb2QgKiAyNVxuICAgICAgICAgICAgZWxzZSB5ID0gMjUgKiAoMiAtIG1vZClcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeiB9ID0gY3ViZS50cmFuc2ZvLnBvc2l0aW9uXG4gICAgICAgICAgICBjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oeCwgeSwgeilcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUsIHRpbWUgKiA0NywgLXRpbWUgKiAxMjApXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCBoYW5kbGVJbml0ID0gKGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XG4gICAgICAgIGluaXQoY29udGV4dCwgYXNzZXRzKVxuICAgIH1cbiAgICBjb25zdCBzaXplID0gNTAwXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aGFuZGxlSW5pdH1cbiAgICAgICAgICAgIHdpZHRoPXtgJHtzaXplICogMS43Nzc3Nzc3Nzc3Nzc3fXB4YH1cbiAgICAgICAgICAgIGhlaWdodD17YCR7c2l6ZX1weGB9XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5uZTogU3V6YW5uZVVSTCxcbiAgICAgICAgICAgICAgICAgICAgc2NlbmU6IEJhY2tncm91bmRHTEIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19PjwvVmlldz5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vY29sb3ItbWFzay5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJEZXRhaWwgIzFcIjpcbiAgICAgICAgJyAgY29udGV4dC5jYW1lcmEgPSBhc3NldHMuZ2xiLnNjZW5lLmNyZWF0ZUNhbWVyYUJ5TmFtZShcIkNhbWVyYVwiKTtcXG4gIGNvbnNvbGUubG9nKGNvbnRleHQuY2FtZXJhLnRvQ29kZSgpKTtcXG4gIC8vIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dClcXG4gIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgIGRlcHRoOiAxLFxcbiAgfSk7XFxuICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpO1xcbiAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKDExLjAyLCAwLCAtOC43NSkuc2V0U2NhbGUoMyk7XFxuICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcXG4gICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKEJhY2tncm91bmRVUkwpLFxcbiAgfSk7XFxuICBjb25zdCB7IHBhaW50ZXIgfSA9IHRnZE1ha2VNZXNoR2xiUGFpbnRlcih7XFxuICAgIGNvbnRleHQsXFxuICAgIGRhdGE6IGFzc2V0cy5nbGIuc2NlbmUsXFxuICAgIG5vZGU6IFwiQnVpbGRpbmdcIixcXG4gICAgb3ZlcnJpZGVNYXRlcmlhbDogKCkgPT4gKCkgPT4gbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMSwgMCwgMSwgMV0gfSksXFxuICB9KTtcXG4gIGNvbnN0IG1hc2sgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgY29sb3I6IGZhbHNlLFxcbiAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgY2hpbGRyZW46IFtwYWludGVyXSxcXG4gIH0pO1xcbiAgY29udGV4dC5hZGQoXFxuICAgIGNsZWFyLFxcbiAgICBiYWNrZ3JvdW5kLFxcbiAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICBjaGlsZHJlbjogW21hc2ssIGN1YmVdLFxcbiAgICB9KSxcXG4gICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgIGNvbnN0IG1vZCA9IHRnZENhbGNNb2R1bG8odGltZSAqIDAuMSwgMCwgMik7XFxuICAgICAgbGV0IHkgPSAwO1xcbiAgICAgIGlmIChtb2QgPCAxKSB5ID0gbW9kICogMjU7XFxuICAgICAgZWxzZSB5ID0gMjUgKiAoMiAtIG1vZCk7XFxuICAgICAgY29uc3QgeyB4LCB6IH0gPSBjdWJlLnRyYW5zZm8ucG9zaXRpb247XFxuICAgICAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKHgsIHksIHopO1xcbiAgICAgIGN1YmUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUsIHRpbWUgKiA0NywgLXRpbWUgKiAxMjApO1xcbiAgICB9KSxcXG4gICk7XFxuICBjb250ZXh0LnBsYXkoKTsnLFxufVxuY29uc3QgRlVMTCA9XG4gICAgJ2ltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcXG5pbXBvcnQge1xcbiAgdGdkQ2FsY01vZHVsbyxcXG4gIFRnZENvbnRleHQsXFxuICB0Z2RNYWtlTWVzaEdsYlBhaW50ZXIsXFxuICBUZ2RNYXRlcmlhbEZsYXQsXFxuICBUZ2RQYWludGVyQmFja2dyb3VuZCxcXG4gIFRnZFBhaW50ZXJDbGVhcixcXG4gIFRnZFBhaW50ZXJMb2dpYyxcXG4gIFRnZFBhaW50ZXJNZXNoLFxcbiAgVGdkUGFpbnRlclN0YXRlLFxcbiAgVGdkVGV4dHVyZTJELFxcbiAgd2ViZ2xQcmVzZXRDdWxsLFxcbiAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xcblxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcXG5cXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFwiLi9iYWNrZ3JvdW5kLndlYnBcIjtcXG5pbXBvcnQgQmFja2dyb3VuZEdMQiBmcm9tIFwiLi9iYWNrZ3JvdW5kLmdsYlwiO1xcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgY29udGV4dC5jYW1lcmEgPSBhc3NldHMuZ2xiLnNjZW5lLmNyZWF0ZUNhbWVyYUJ5TmFtZShcIkNhbWVyYVwiKTtcXG4gIGNvbnNvbGUubG9nKGNvbnRleHQuY2FtZXJhLnRvQ29kZSgpKTtcXG4gIC8vIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dClcXG4gIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgIGRlcHRoOiAxLFxcbiAgfSk7XFxuICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpO1xcbiAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKDExLjAyLCAwLCAtOC43NSkuc2V0U2NhbGUoMyk7XFxuICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcXG4gICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKEJhY2tncm91bmRVUkwpLFxcbiAgfSk7XFxuICBjb25zdCB7IHBhaW50ZXIgfSA9IHRnZE1ha2VNZXNoR2xiUGFpbnRlcih7XFxuICAgIGNvbnRleHQsXFxuICAgIGRhdGE6IGFzc2V0cy5nbGIuc2NlbmUsXFxuICAgIG5vZGU6IFwiQnVpbGRpbmdcIixcXG4gICAgb3ZlcnJpZGVNYXRlcmlhbDogKCkgPT4gKCkgPT4gbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMSwgMCwgMSwgMV0gfSksXFxuICB9KTtcXG4gIGNvbnN0IG1hc2sgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgY29sb3I6IGZhbHNlLFxcbiAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgY2hpbGRyZW46IFtwYWludGVyXSxcXG4gIH0pO1xcbiAgY29udGV4dC5hZGQoXFxuICAgIGNsZWFyLFxcbiAgICBiYWNrZ3JvdW5kLFxcbiAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICBjaGlsZHJlbjogW21hc2ssIGN1YmVdLFxcbiAgICB9KSxcXG4gICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgIGNvbnN0IG1vZCA9IHRnZENhbGNNb2R1bG8odGltZSAqIDAuMSwgMCwgMik7XFxuICAgICAgbGV0IHkgPSAwO1xcbiAgICAgIGlmIChtb2QgPCAxKSB5ID0gbW9kICogMjU7XFxuICAgICAgZWxzZSB5ID0gMjUgKiAoMiAtIG1vZCk7XFxuICAgICAgY29uc3QgeyB4LCB6IH0gPSBjdWJlLnRyYW5zZm8ucG9zaXRpb247XFxuICAgICAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKHgsIHksIHopO1xcbiAgICAgIGN1YmUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUsIHRpbWUgKiA0NywgLXRpbWUgKiAxMjApO1xcbiAgICB9KSxcXG4gICk7XFxuICBjb250ZXh0LnBsYXkoKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gIGNvbnN0IGhhbmRsZUluaXQgPSAoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG4gICAgaW5pdChjb250ZXh0LCBhc3NldHMpO1xcbiAgfTtcXG4gIGNvbnN0IHNpemUgPSA1MDA7XFxuXFxuICByZXR1cm4gKFxcbiAgICA8Vmlld1xcbiAgICAgIG9uUmVhZHk9e2hhbmRsZUluaXR9XFxuICAgICAgd2lkdGg9e2Ake3NpemUgKiAxLjc3Nzc3Nzc3Nzc3Nzd9cHhgfVxcbiAgICAgIGhlaWdodD17YCR7c2l6ZX1weGB9XFxuICAgICAgYXNzZXRzPXt7XFxuICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgc3V6YW5uZTogU3V6YW5uZVVSTCxcXG4gICAgICAgICAgc2NlbmU6IEJhY2tncm91bmRHTEIsXFxuICAgICAgICB9LFxcbiAgICAgIH19XFxuICAgID48L1ZpZXc+XFxuICApO1xcbn1cXG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPERlbW8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ0Z2RDYWxjTW9kdWxvIiwidGdkTWFrZU1lc2hHbGJQYWludGVyIiwiVGdkTWF0ZXJpYWxGbGF0IiwiVGdkUGFpbnRlckJhY2tncm91bmQiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIndlYmdsUHJlc2V0Q3VsbCIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiQmFja2dyb3VuZFVSTCIsIkJhY2tncm91bmRHTEIiLCJTdXphbm5lVVJMIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjb25zb2xlIiwiY2xlYXIiLCJjdWJlIiwiYmFja2dyb3VuZCIsInBhaW50ZXIiLCJvdmVycmlkZU1hdGVyaWFsIiwibWFzayIsInRpbWUiLCJtb2QiLCJ5IiwiX2N1YmVfdHJhbnNmb19wb3NpdGlvbiIsIngiLCJ6IiwiRGVtbyIsImhhbmRsZUluaXQiLCJzaXplIiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwi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