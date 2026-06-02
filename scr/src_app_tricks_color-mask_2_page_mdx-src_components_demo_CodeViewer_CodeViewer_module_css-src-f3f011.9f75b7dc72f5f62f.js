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
        columnNumber: 3
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
    "Detail #1": '    context.camera = assets.glb.scene.createCameraByName("Camera")\n    console.log(context.camera.toCode())\n    // new TgdControllerCameraOrbit(context)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.setPosition(11.02, 0, -8.75).setScale(3)\n    const background = new TgdPainterBackground(context, {\n        texture: new TgdTexture2D(context).loadBitmap(BackgroundURL),\n    })\n    const { painter } = tgdMakeMeshGlbPainter({\n        context,\n        data: assets.glb.scene,\n        node: "Building",\n        overrideMaterial: () => () => new TgdMaterialFlat({ color: [1, 0, 1, 1] }),\n    })\n    const mask = new TgdPainterState(context, {\n        color: false,\n        cull: webglPresetCull.back,\n        children: [painter],\n    })\n    context.add(\n        clear,\n        background,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.lessOrEqual,\n            children: [mask, cube],\n        }),\n        new TgdPainterLogic((time) => {\n            const mod = tgdCalcModulo(time * 0.1, 0, 2)\n            let y = 0\n            if (mod < 1) y = mod * 25\n            else y = 25 * (2 - mod)\n            const { x, z } = cube.transfo.position\n            cube.transfo.setPosition(x, y, z)\n            cube.transfo.setEulerRotation(time, time * 47, -time * 120)\n        }),\n    )\n    context.play()'
};
var FULL = 'import React from "react"\nimport {\n    tgdCalcModulo,\n    type TgdContext,\n    tgdMakeMeshGlbPainter,\n    TgdMaterialFlat,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetCull,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\n\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport BackgroundURL from "./background.webp"\nimport BackgroundGLB from "./background.glb"\nimport SuzanneURL from "@/assets/mesh/suzanne.glb"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera = assets.glb.scene.createCameraByName("Camera")\n    console.log(context.camera.toCode())\n    // new TgdControllerCameraOrbit(context)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.setPosition(11.02, 0, -8.75).setScale(3)\n    const background = new TgdPainterBackground(context, {\n        texture: new TgdTexture2D(context).loadBitmap(BackgroundURL),\n    })\n    const { painter } = tgdMakeMeshGlbPainter({\n        context,\n        data: assets.glb.scene,\n        node: "Building",\n        overrideMaterial: () => () => new TgdMaterialFlat({ color: [1, 0, 1, 1] }),\n    })\n    const mask = new TgdPainterState(context, {\n        color: false,\n        cull: webglPresetCull.back,\n        children: [painter],\n    })\n    context.add(\n        clear,\n        background,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.lessOrEqual,\n            children: [mask, cube],\n        }),\n        new TgdPainterLogic((time) => {\n            const mod = tgdCalcModulo(time * 0.1, 0, 2)\n            let y = 0\n            if (mod < 1) y = mod * 25\n            else y = 25 * (2 - mod)\n            const { x, z } = cube.transfo.position\n            cube.transfo.setPosition(x, y, z)\n            cube.transfo.setEulerRotation(time, time * 47, -time * 120)\n        }),\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    const handleInit = (context: TgdContext, assets: Assets) => {\n        init(context, assets)\n    }\n    const size = 500\n\n    return (\n        <View\n            onReady={handleInit}\n            width={`${size * 1.7777777777777}px`}\n            height={`${size}px`}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                    scene: BackgroundGLB,\n                },\n            }}></View>\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_color_mask_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/2/_/color-mask.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX2NvbG9yLW1hc2tfMl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLXNyYy1mM2YwMTEuOWY3NWI3ZGM3MmY1ZjYyZi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdHJpY2tzL2NvbG9yLW1hc2svMi9fL2NvbG9yLW1hc2suZGVtby9jb2xvci1tYXNrLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdHJpY2tzL2NvbG9yLW1hc2svMi9fL2NvbG9yLW1hc2suZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3MvY29sb3ItbWFzay8yL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHR0Z2RDYWxjTW9kdWxvLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdHRnZE1ha2VNZXNoR2xiUGFpbnRlcixcblx0VGdkTWF0ZXJpYWxGbGF0LFxuXHRUZ2RQYWludGVyQmFja2dyb3VuZCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTG9naWMsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcblx0d2ViZ2xQcmVzZXRDdWxsLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXCIuL2JhY2tncm91bmQud2VicFwiO1xuaW1wb3J0IEJhY2tncm91bmRHTEIgZnJvbSBcIi4vYmFja2dyb3VuZC5nbGJcIjtcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luXG5cdGNvbnRleHQuY2FtZXJhID0gYXNzZXRzLmdsYi5zY2VuZS5jcmVhdGVDYW1lcmFCeU5hbWUoXCJDYW1lcmFcIik7XG5cdGNvbnNvbGUubG9nKGNvbnRleHQuY2FtZXJhLnRvQ29kZSgpKTtcblx0Ly8gbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0KVxuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGRlcHRoOiAxLFxuXHR9KTtcblx0Y29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KTtcblx0Y3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKDExLjAyLCAwLCAtOC43NSkuc2V0U2NhbGUoMyk7XG5cdGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xuXHRcdHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChCYWNrZ3JvdW5kVVJMKSxcblx0fSk7XG5cdGNvbnN0IHsgcGFpbnRlciB9ID0gdGdkTWFrZU1lc2hHbGJQYWludGVyKHtcblx0XHRjb250ZXh0LFxuXHRcdGRhdGE6IGFzc2V0cy5nbGIuc2NlbmUsXG5cdFx0bm9kZTogXCJCdWlsZGluZ1wiLFxuXHRcdG92ZXJyaWRlTWF0ZXJpYWw6ICgpID0+ICgpID0+IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzEsIDAsIDEsIDFdIH0pLFxuXHR9KTtcblx0Y29uc3QgbWFzayA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGNvbG9yOiBmYWxzZSxcblx0XHRjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcblx0XHRjaGlsZHJlbjogW3BhaW50ZXJdLFxuXHR9KTtcblx0Y29udGV4dC5hZGQoXG5cdFx0Y2xlYXIsXG5cdFx0YmFja2dyb3VuZCxcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxuXHRcdFx0Y2hpbGRyZW46IFttYXNrLCBjdWJlXSxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG5cdFx0XHRjb25zdCBtb2QgPSB0Z2RDYWxjTW9kdWxvKHRpbWUgKiAwLjEsIDAsIDIpO1xuXHRcdFx0bGV0IHkgPSAwO1xuXHRcdFx0aWYgKG1vZCA8IDEpIHkgPSBtb2QgKiAyNTtcblx0XHRcdGVsc2UgeSA9IDI1ICogKDIgLSBtb2QpO1xuXHRcdFx0Y29uc3QgeyB4LCB6IH0gPSBjdWJlLnRyYW5zZm8ucG9zaXRpb247XG5cdFx0XHRjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oeCwgeSwgeik7XG5cdFx0XHRjdWJlLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lLCB0aW1lICogNDcsIC10aW1lICogMTIwKTtcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wbGF5KCk7XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0Y29uc3QgaGFuZGxlSW5pdCA9IChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuXHRcdGluaXQoY29udGV4dCwgYXNzZXRzKTtcblx0fTtcblx0Y29uc3Qgc2l6ZSA9IDUwMDtcblxuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtoYW5kbGVJbml0fVxuXHRcdFx0d2lkdGg9e2Ake3NpemUgKiAxLjc3Nzc3Nzc3Nzc3Nzd9cHhgfVxuXHRcdFx0aGVpZ2h0PXtgJHtzaXplfXB4YH1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHtcblx0XHRcdFx0XHRzdXphbm5lOiBTdXphbm5lVVJMLFxuXHRcdFx0XHRcdHNjZW5lOiBCYWNrZ3JvdW5kR0xCLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQ+PC9WaWV3PlxuXHQpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIjtcbmltcG9ydCBEZW1vIGZyb20gXCIuL2NvbG9yLW1hc2suZGVtb1wiO1xuXG5jb25zdCBGT0NVUyA9IHtcblx0XCJEZXRhaWwgIzFcIjpcblx0XHQnICAgIGNvbnRleHQuY2FtZXJhID0gYXNzZXRzLmdsYi5zY2VuZS5jcmVhdGVDYW1lcmFCeU5hbWUoXCJDYW1lcmFcIilcXG4gICAgY29uc29sZS5sb2coY29udGV4dC5jYW1lcmEudG9Db2RlKCkpXFxuICAgIC8vIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dClcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXFxuICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMCwgLTguNzUpLnNldFNjYWxlKDMpXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKEJhY2tncm91bmRVUkwpLFxcbiAgICB9KVxcbiAgICBjb25zdCB7IHBhaW50ZXIgfSA9IHRnZE1ha2VNZXNoR2xiUGFpbnRlcih7XFxuICAgICAgICBjb250ZXh0LFxcbiAgICAgICAgZGF0YTogYXNzZXRzLmdsYi5zY2VuZSxcXG4gICAgICAgIG5vZGU6IFwiQnVpbGRpbmdcIixcXG4gICAgICAgIG92ZXJyaWRlTWF0ZXJpYWw6ICgpID0+ICgpID0+IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzEsIDAsIDEsIDFdIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXNrID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogZmFsc2UsXFxuICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICAgIGNoaWxkcmVuOiBbcGFpbnRlcl0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBiYWNrZ3JvdW5kLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFttYXNrLCBjdWJlXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IHRnZENhbGNNb2R1bG8odGltZSAqIDAuMSwgMCwgMilcXG4gICAgICAgICAgICBsZXQgeSA9IDBcXG4gICAgICAgICAgICBpZiAobW9kIDwgMSkgeSA9IG1vZCAqIDI1XFxuICAgICAgICAgICAgZWxzZSB5ID0gMjUgKiAoMiAtIG1vZClcXG4gICAgICAgICAgICBjb25zdCB7IHgsIHogfSA9IGN1YmUudHJhbnNmby5wb3NpdGlvblxcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbih4LCB5LCB6KVxcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUsIHRpbWUgKiA0NywgLXRpbWUgKiAxMjApXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKScsXG59O1xuY29uc3QgRlVMTCA9XG5cdCdpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcXG5pbXBvcnQge1xcbiAgICB0Z2RDYWxjTW9kdWxvLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIHRnZE1ha2VNZXNoR2xiUGFpbnRlcixcXG4gICAgVGdkTWF0ZXJpYWxGbGF0LFxcbiAgICBUZ2RQYWludGVyQmFja2dyb3VuZCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgd2ViZ2xQcmVzZXRDdWxsLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5cXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcblxcbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXCIuL2JhY2tncm91bmQud2VicFwiXFxuaW1wb3J0IEJhY2tncm91bmRHTEIgZnJvbSBcIi4vYmFja2dyb3VuZC5nbGJcIlxcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnRleHQuY2FtZXJhID0gYXNzZXRzLmdsYi5zY2VuZS5jcmVhdGVDYW1lcmFCeU5hbWUoXCJDYW1lcmFcIilcXG4gICAgY29uc29sZS5sb2coY29udGV4dC5jYW1lcmEudG9Db2RlKCkpXFxuICAgIC8vIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dClcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXFxuICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMCwgLTguNzUpLnNldFNjYWxlKDMpXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKEJhY2tncm91bmRVUkwpLFxcbiAgICB9KVxcbiAgICBjb25zdCB7IHBhaW50ZXIgfSA9IHRnZE1ha2VNZXNoR2xiUGFpbnRlcih7XFxuICAgICAgICBjb250ZXh0LFxcbiAgICAgICAgZGF0YTogYXNzZXRzLmdsYi5zY2VuZSxcXG4gICAgICAgIG5vZGU6IFwiQnVpbGRpbmdcIixcXG4gICAgICAgIG92ZXJyaWRlTWF0ZXJpYWw6ICgpID0+ICgpID0+IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzEsIDAsIDEsIDFdIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXNrID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogZmFsc2UsXFxuICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICAgIGNoaWxkcmVuOiBbcGFpbnRlcl0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBiYWNrZ3JvdW5kLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFttYXNrLCBjdWJlXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IHRnZENhbGNNb2R1bG8odGltZSAqIDAuMSwgMCwgMilcXG4gICAgICAgICAgICBsZXQgeSA9IDBcXG4gICAgICAgICAgICBpZiAobW9kIDwgMSkgeSA9IG1vZCAqIDI1XFxuICAgICAgICAgICAgZWxzZSB5ID0gMjUgKiAoMiAtIG1vZClcXG4gICAgICAgICAgICBjb25zdCB7IHgsIHogfSA9IGN1YmUudHJhbnNmby5wb3NpdGlvblxcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbih4LCB5LCB6KVxcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUsIHRpbWUgKiA0NywgLXRpbWUgKiAxMjApXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCBoYW5kbGVJbml0ID0gKGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICBpbml0KGNvbnRleHQsIGFzc2V0cylcXG4gICAgfVxcbiAgICBjb25zdCBzaXplID0gNTAwXFxuXFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2hhbmRsZUluaXR9XFxuICAgICAgICAgICAgd2lkdGg9e2Ake3NpemUgKiAxLjc3Nzc3Nzc3Nzc3Nzd9cHhgfVxcbiAgICAgICAgICAgIGhlaWdodD17YCR7c2l6ZX1weGB9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGdsYjoge1xcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5uZTogU3V6YW5uZVVSTCxcXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lOiBCYWNrZ3JvdW5kR0xCLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19PjwvVmlldz5cXG4gICAgKVxcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ0Z2RDYWxjTW9kdWxvIiwidGdkTWFrZU1lc2hHbGJQYWludGVyIiwiVGdkTWF0ZXJpYWxGbGF0IiwiVGdkUGFpbnRlckJhY2tncm91bmQiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIndlYmdsUHJlc2V0Q3VsbCIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiQmFja2dyb3VuZFVSTCIsIkJhY2tncm91bmRHTEIiLCJTdXphbm5lVVJMIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjb25zb2xlIiwiY2xlYXIiLCJjdWJlIiwiYmFja2dyb3VuZCIsInBhaW50ZXIiLCJvdmVycmlkZU1hdGVyaWFsIiwibWFzayIsInRpbWUiLCJtb2QiLCJ5IiwiX2N1YmVfdHJhbnNmb19wb3NpdGlvbiIsIngiLCJ6IiwiRGVtbyIsImhhbmRsZUluaXQiLCJzaXplIiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29u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