"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_tricks_stereo-vision_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-sr-ca3de8"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
3508(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(32410);
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
    "Detail #1": '    const camera = new TgdCameraPerspective()\n    camera.spaceWidthAtTarget = 16\n    context.camera = camera\n    const clearColor = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0.1, 0.2, 0.3, 1],\n    })\n    const clearDepth = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzanne,\n    })\n    const state = new TgdPainterState(context, {\n        depth: "less",\n        cull: "back",\n        children: [mesh],\n    })\n    const group = new TgdPainterGroup([clearDepth, state])\n    const angle = Math.atan(1 / camera.transfo.distance)\n    const leftCamera = camera.clone()\n    leftCamera.transfo.orbitAroundY(angle)\n    const leftEye = new TgdPainterGroupCamera(context, {\n        camera: leftCamera,\n        children: [group],\n    })\n    const rightCamera = camera.clone()\n    rightCamera.transfo.orbitAroundY(-angle)\n    const rightEye = new TgdPainterGroupCamera(context, {\n        camera: rightCamera,\n        children: [group],\n    })\n    context.add(\n        clearColor,\n        (time: number, delta: number) => {\n            mesh.transfo.setEulerRotation(0, time * 60, 0)\n        },\n        (time: number, delta: number) => {\n            const { width } = context\n            const center = width / 2\n            const size = width / 4\n            context.viewportExec(\n                () => {\n                    leftEye.paint(time, delta)\n                },\n                { x: center - size, width: 200 },\n            )\n            context.viewportExec(\n                () => {\n                    rightEye.paint(time, delta)\n                },\n                { x: center, width: 200 },\n            )\n        },\n    )\n    context.play()'
};
var FULL = 'import {\n    TgdCameraPerspective,\n    type TgdContext,\n    TgdPainterClear,\n    TgdPainterGroup,\n    TgdPainterGroupCamera,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n} from "@tolokoban/tgd"\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport SuzanneURL from "@/assets/mesh/suzanne.glb"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const camera = new TgdCameraPerspective()\n    camera.spaceWidthAtTarget = 16\n    context.camera = camera\n    const clearColor = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0.1, 0.2, 0.3, 1],\n    })\n    const clearDepth = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzanne,\n    })\n    const state = new TgdPainterState(context, {\n        depth: "less",\n        cull: "back",\n        children: [mesh],\n    })\n    const group = new TgdPainterGroup([clearDepth, state])\n    const angle = Math.atan(1 / camera.transfo.distance)\n    const leftCamera = camera.clone()\n    leftCamera.transfo.orbitAroundY(angle)\n    const leftEye = new TgdPainterGroupCamera(context, {\n        camera: leftCamera,\n        children: [group],\n    })\n    const rightCamera = camera.clone()\n    rightCamera.transfo.orbitAroundY(-angle)\n    const rightEye = new TgdPainterGroupCamera(context, {\n        camera: rightCamera,\n        children: [group],\n    })\n    context.add(\n        clearColor,\n        (time: number, delta: number) => {\n            mesh.transfo.setEulerRotation(0, time * 60, 0)\n        },\n        (time: number, delta: number) => {\n            const { width } = context\n            const center = width / 2\n            const size = width / 4\n            context.viewportExec(\n                () => {\n                    leftEye.paint(time, delta)\n                },\n                { x: center - size, width: 200 },\n            )\n            context.viewportExec(\n                () => {\n                    rightEye.paint(time, delta)\n                },\n                { x: center, width: 200 },\n            )\n        },\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                },\n            }}></View>\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
32410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_3 = __webpack_require__(21278);




function init(context, assets) {
    // #begin
    var camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective();
    camera.spaceWidthAtTarget = 16;
    context.camera = camera;
    var clearColor = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1,
        color: [
            0.1,
            0.2,
            0.3,
            1
        ]
    });
    var clearDepth = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzanne
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: [
            mesh
        ]
    });
    var group = new _tolokoban_tgd__rspack_import_1.TgdPainterGroup([
        clearDepth,
        state
    ]);
    var angle = Math.atan(1 / camera.transfo.distance);
    var leftCamera = camera.clone();
    leftCamera.transfo.orbitAroundY(angle);
    var leftEye = new _tolokoban_tgd__rspack_import_1.TgdPainterGroupCamera(context, {
        camera: leftCamera,
        children: [
            group
        ]
    });
    var rightCamera = camera.clone();
    rightCamera.transfo.orbitAroundY(-angle);
    var rightEye = new _tolokoban_tgd__rspack_import_1.TgdPainterGroupCamera(context, {
        camera: rightCamera,
        children: [
            group
        ]
    });
    context.add(clearColor, function(time, delta) {
        mesh.transfo.setEulerRotation(0, time * 60, 0);
    }, function(time, delta) {
        var width = context.width;
        var center = width / 2;
        var size = width / 4;
        context.viewportExec(function() {
            leftEye.paint(time, delta);
        }, {
            x: center - size,
            width: 200
        });
        context.viewportExec(function() {
            rightEye.paint(time, delta);
        }, {
            x: center,
            width: 200
        });
    });
    context.play();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_3
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/main.demo.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, this);
}


},
43787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(3508);
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
        h1: "h1",
        p: "p",
        strong: "strong"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Stereo Vision"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "If you unfocus your eyes in a way that you manage to merge the two monkeys in one, then you will start to see it as ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "real"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx",
                        lineNumber: 5,
                        columnNumber: 117
                    }, this),
                    " 3D."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX3N0ZXJlby12aXNpb25fcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlX2Nzcy1zci1jYTNkZTguOTViOWRkNjAwMWIyODljZC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdHJpY2tzL3N0ZXJlby12aXNpb24vXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdHJpY2tzL3N0ZXJlby12aXNpb24vXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9zdGVyZW8tdmlzaW9uL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkRldGFpbCAjMVwiOlxuXHRcdCcgICAgY29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKClcXG4gICAgY2FtZXJhLnNwYWNlV2lkdGhBdFRhcmdldCA9IDE2XFxuICAgIGNvbnRleHQuY2FtZXJhID0gY2FtZXJhXFxuICAgIGNvbnN0IGNsZWFyQ29sb3IgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG4gICAgfSlcXG4gICAgY29uc3QgY2xlYXJEZXB0aCA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXFxuICAgIH0pXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogXCJsZXNzXCIsXFxuICAgICAgICBjdWxsOiBcImJhY2tcIixcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGdyb3VwID0gbmV3IFRnZFBhaW50ZXJHcm91cChbY2xlYXJEZXB0aCwgc3RhdGVdKVxcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbigxIC8gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UpXFxuICAgIGNvbnN0IGxlZnRDYW1lcmEgPSBjYW1lcmEuY2xvbmUoKVxcbiAgICBsZWZ0Q2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ2xlKVxcbiAgICBjb25zdCBsZWZ0RXllID0gbmV3IFRnZFBhaW50ZXJHcm91cENhbWVyYShjb250ZXh0LCB7XFxuICAgICAgICBjYW1lcmE6IGxlZnRDYW1lcmEsXFxuICAgICAgICBjaGlsZHJlbjogW2dyb3VwXSxcXG4gICAgfSlcXG4gICAgY29uc3QgcmlnaHRDYW1lcmEgPSBjYW1lcmEuY2xvbmUoKVxcbiAgICByaWdodENhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWSgtYW5nbGUpXFxuICAgIGNvbnN0IHJpZ2h0RXllID0gbmV3IFRnZFBhaW50ZXJHcm91cENhbWVyYShjb250ZXh0LCB7XFxuICAgICAgICBjYW1lcmE6IHJpZ2h0Q2FtZXJhLFxcbiAgICAgICAgY2hpbGRyZW46IFtncm91cF0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXJDb2xvcixcXG4gICAgICAgICh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpID0+IHtcXG4gICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCB0aW1lICogNjAsIDApXFxuICAgICAgICB9LFxcbiAgICAgICAgKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IGNvbnRleHRcXG4gICAgICAgICAgICBjb25zdCBjZW50ZXIgPSB3aWR0aCAvIDJcXG4gICAgICAgICAgICBjb25zdCBzaXplID0gd2lkdGggLyA0XFxuICAgICAgICAgICAgY29udGV4dC52aWV3cG9ydEV4ZWMoXFxuICAgICAgICAgICAgICAgICgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGxlZnRFeWUucGFpbnQodGltZSwgZGVsdGEpXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHsgeDogY2VudGVyIC0gc2l6ZSwgd2lkdGg6IDIwMCB9LFxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgICBjb250ZXh0LnZpZXdwb3J0RXhlYyhcXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRFeWUucGFpbnQodGltZSwgZGVsdGEpXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHsgeDogY2VudGVyLCB3aWR0aDogMjAwIH0sXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKScsXG59O1xuY29uc3QgRlVMTCA9XG5cdCdpbXBvcnQge1xcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJHcm91cCxcXG4gICAgVGdkUGFpbnRlckdyb3VwQ2FtZXJhLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5cXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoKVxcbiAgICBjYW1lcmEuc3BhY2VXaWR0aEF0VGFyZ2V0ID0gMTZcXG4gICAgY29udGV4dC5jYW1lcmEgPSBjYW1lcmFcXG4gICAgY29uc3QgY2xlYXJDb2xvciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICBjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhckRlcHRoID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiBcImxlc3NcIixcXG4gICAgICAgIGN1bGw6IFwiYmFja1wiLFxcbiAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgfSlcXG4gICAgY29uc3QgZ3JvdXAgPSBuZXcgVGdkUGFpbnRlckdyb3VwKFtjbGVhckRlcHRoLCBzdGF0ZV0pXFxuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuKDEgLyBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSlcXG4gICAgY29uc3QgbGVmdENhbWVyYSA9IGNhbWVyYS5jbG9uZSgpXFxuICAgIGxlZnRDYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nbGUpXFxuICAgIGNvbnN0IGxlZnRFeWUgPSBuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcXG4gICAgICAgIGNhbWVyYTogbGVmdENhbWVyYSxcXG4gICAgICAgIGNoaWxkcmVuOiBbZ3JvdXBdLFxcbiAgICB9KVxcbiAgICBjb25zdCByaWdodENhbWVyYSA9IGNhbWVyYS5jbG9uZSgpXFxuICAgIHJpZ2h0Q2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRZKC1hbmdsZSlcXG4gICAgY29uc3QgcmlnaHRFeWUgPSBuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcXG4gICAgICAgIGNhbWVyYTogcmlnaHRDYW1lcmEsXFxuICAgICAgICBjaGlsZHJlbjogW2dyb3VwXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhckNvbG9yLFxcbiAgICAgICAgKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4ge1xcbiAgICAgICAgICAgIG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIHRpbWUgKiA2MCwgMClcXG4gICAgICAgIH0sXFxuICAgICAgICAodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gY29udGV4dFxcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlciA9IHdpZHRoIC8gMlxcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSB3aWR0aCAvIDRcXG4gICAgICAgICAgICBjb250ZXh0LnZpZXdwb3J0RXhlYyhcXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgbGVmdEV5ZS5wYWludCh0aW1lLCBkZWx0YSlcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeyB4OiBjZW50ZXIgLSBzaXplLCB3aWR0aDogMjAwIH0sXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIGNvbnRleHQudmlld3BvcnRFeGVjKFxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICByaWdodEV5ZS5wYWludCh0aW1lLCBkZWx0YSlcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeyB4OiBjZW50ZXIsIHdpZHRoOiAyMDAgfSxcXG4gICAgICAgICAgICApXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGdsYjoge1xcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5uZTogU3V6YW5uZVVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fT48L1ZpZXc+XFxuICAgIClcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQge1xuXHRUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJHcm91cCxcblx0VGdkUGFpbnRlckdyb3VwQ2FtZXJhLFxuXHRUZ2RQYWludGVyTWVzaEdsdGYsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW5cblx0Y29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKCk7XG5cdGNhbWVyYS5zcGFjZVdpZHRoQXRUYXJnZXQgPSAxNjtcblx0Y29udGV4dC5jYW1lcmEgPSBjYW1lcmE7XG5cdGNvbnN0IGNsZWFyQ29sb3IgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRkZXB0aDogMSxcblx0XHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxuXHR9KTtcblx0Y29uc3QgY2xlYXJEZXB0aCA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGRlcHRoOiAxLFxuXHR9KTtcblx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXG5cdH0pO1xuXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGRlcHRoOiBcImxlc3NcIixcblx0XHRjdWxsOiBcImJhY2tcIixcblx0XHRjaGlsZHJlbjogW21lc2hdLFxuXHR9KTtcblx0Y29uc3QgZ3JvdXAgPSBuZXcgVGdkUGFpbnRlckdyb3VwKFtjbGVhckRlcHRoLCBzdGF0ZV0pO1xuXHRjb25zdCBhbmdsZSA9IE1hdGguYXRhbigxIC8gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UpO1xuXHRjb25zdCBsZWZ0Q2FtZXJhID0gY2FtZXJhLmNsb25lKCk7XG5cdGxlZnRDYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nbGUpO1xuXHRjb25zdCBsZWZ0RXllID0gbmV3IFRnZFBhaW50ZXJHcm91cENhbWVyYShjb250ZXh0LCB7XG5cdFx0Y2FtZXJhOiBsZWZ0Q2FtZXJhLFxuXHRcdGNoaWxkcmVuOiBbZ3JvdXBdLFxuXHR9KTtcblx0Y29uc3QgcmlnaHRDYW1lcmEgPSBjYW1lcmEuY2xvbmUoKTtcblx0cmlnaHRDYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFkoLWFuZ2xlKTtcblx0Y29uc3QgcmlnaHRFeWUgPSBuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcblx0XHRjYW1lcmE6IHJpZ2h0Q2FtZXJhLFxuXHRcdGNoaWxkcmVuOiBbZ3JvdXBdLFxuXHR9KTtcblx0Y29udGV4dC5hZGQoXG5cdFx0Y2xlYXJDb2xvcixcblx0XHQodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA9PiB7XG5cdFx0XHRtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCB0aW1lICogNjAsIDApO1xuXHRcdH0sXG5cdFx0KHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4ge1xuXHRcdFx0Y29uc3QgeyB3aWR0aCB9ID0gY29udGV4dDtcblx0XHRcdGNvbnN0IGNlbnRlciA9IHdpZHRoIC8gMjtcblx0XHRcdGNvbnN0IHNpemUgPSB3aWR0aCAvIDQ7XG5cdFx0XHRjb250ZXh0LnZpZXdwb3J0RXhlYyhcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdGxlZnRFeWUucGFpbnQodGltZSwgZGVsdGEpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IHg6IGNlbnRlciAtIHNpemUsIHdpZHRoOiAyMDAgfSxcblx0XHRcdCk7XG5cdFx0XHRjb250ZXh0LnZpZXdwb3J0RXhlYyhcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdHJpZ2h0RXllLnBhaW50KHRpbWUsIGRlbHRhKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0eyB4OiBjZW50ZXIsIHdpZHRoOiAyMDAgfSxcblx0XHRcdCk7XG5cdFx0fSxcblx0KTtcblx0Y29udGV4dC5wbGF5KCk7XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHtcblx0XHRcdFx0XHRzdXphbm5lOiBTdXphbm5lVVJMLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQ+PC9WaWV3PlxuXHQpO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJHcm91cCIsIlRnZFBhaW50ZXJHcm91cENhbWVyYSIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTdGF0ZSIsIlZpZXciLCJTdXphbm5lVVJMIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjYW1lcmEiLCJjbGVhckNvbG9yIiwiY2xlYXJEZXB0aCIsIm1lc2giLCJzdGF0ZSIsImdyb3VwIiwiYW5nbGUiLCJNYXRoIiwibGVmdENhbWVyYSIsImxlZnRFeWUiLCJyaWdodENhbWVyYSIsInJpZ2h0RXllIiwidGltZSIsImRlbHRhIiwid2lkdGgiLCJjZW50ZXIiLCJz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