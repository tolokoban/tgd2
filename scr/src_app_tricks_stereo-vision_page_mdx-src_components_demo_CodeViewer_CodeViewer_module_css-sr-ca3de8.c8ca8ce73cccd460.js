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
    "Detail #1": "    const camera = new TgdCameraPerspective()\n    camera.spaceWidthAtTarget = 16\n    context.camera = camera\n    const clearColor = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0.1, 0.2, 0.3, 1],\n    })\n    const clearDepth = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzanne,\n    })\n    const state = new TgdPainterState(context, {\n        depth: \"less\",\n        cull: \"back\",\n        children: [mesh],\n    })\n    const group = new TgdPainterGroup([clearDepth, state])\n    const angle = Math.atan(1 / camera.transfo.distance)\n    const leftCamera = camera.clone()\n    leftCamera.transfo.orbitAroundY(angle)\n    const leftEye = new TgdPainterGroupCamera(context, {\n        camera: leftCamera,\n        children: [group],\n    })\n    const rightCamera = camera.clone()\n    rightCamera.transfo.orbitAroundY(-angle)\n    const rightEye = new TgdPainterGroupCamera(context, {\n        camera: rightCamera,\n        children: [group],\n    })\n    context.add(\n        clearColor,\n        (time: number, delta: number) => {\n            mesh.transfo.setEulerRotation(0, time * 60, 0)\n        },\n        (time: number, delta: number) => {\n            const { width } = context\n            const center = width / 2\n            const size = width / 4\n            context.viewportExec(\n                () => {\n                    leftEye.paint(time, delta)\n                },\n                { x: center - size, width: 200 },\n            )\n            context.viewportExec(\n                () => {\n                    rightEye.paint(time, delta)\n                },\n                { x: center, width: 200 },\n            )\n        },\n    )\n    context.play()"
};
var FULL = "import {\n    TgdCameraPerspective,\n    TgdContext,\n    TgdPainterClear,\n    TgdPainterGroup,\n    TgdPainterGroupCamera,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const camera = new TgdCameraPerspective()\n    camera.spaceWidthAtTarget = 16\n    context.camera = camera\n    const clearColor = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0.1, 0.2, 0.3, 1],\n    })\n    const clearDepth = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzanne,\n    })\n    const state = new TgdPainterState(context, {\n        depth: \"less\",\n        cull: \"back\",\n        children: [mesh],\n    })\n    const group = new TgdPainterGroup([clearDepth, state])\n    const angle = Math.atan(1 / camera.transfo.distance)\n    const leftCamera = camera.clone()\n    leftCamera.transfo.orbitAroundY(angle)\n    const leftEye = new TgdPainterGroupCamera(context, {\n        camera: leftCamera,\n        children: [group],\n    })\n    const rightCamera = camera.clone()\n    rightCamera.transfo.orbitAroundY(-angle)\n    const rightEye = new TgdPainterGroupCamera(context, {\n        camera: rightCamera,\n        children: [group],\n    })\n    context.add(\n        clearColor,\n        (time: number, delta: number) => {\n            mesh.transfo.setEulerRotation(0, time * 60, 0)\n        },\n        (time: number, delta: number) => {\n            const { width } = context\n            const center = width / 2\n            const size = width / 4\n            context.viewportExec(\n                () => {\n                    leftEye.paint(time, delta)\n                },\n                { x: center - size, width: 200 },\n            )\n            context.viewportExec(\n                () => {\n                    rightEye.paint(time, delta)\n                },\n                { x: center, width: 200 },\n            )\n        },\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                },\n            }}></View>\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
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
        columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX3N0ZXJlby12aXNpb25fcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlX2Nzcy1zci1jYTNkZTguYzhjYThjZTczY2NjZDQ2MC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdHJpY2tzL3N0ZXJlby12aXNpb24vXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdHJpY2tzL3N0ZXJlby12aXNpb24vXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9zdGVyZW8tdmlzaW9uL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoKVxcbiAgICBjYW1lcmEuc3BhY2VXaWR0aEF0VGFyZ2V0ID0gMTZcXG4gICAgY29udGV4dC5jYW1lcmEgPSBjYW1lcmFcXG4gICAgY29uc3QgY2xlYXJDb2xvciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICBjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhckRlcHRoID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICBjdWxsOiBcXFwiYmFja1xcXCIsXFxuICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICB9KVxcbiAgICBjb25zdCBncm91cCA9IG5ldyBUZ2RQYWludGVyR3JvdXAoW2NsZWFyRGVwdGgsIHN0YXRlXSlcXG4gICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4oMSAvIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlKVxcbiAgICBjb25zdCBsZWZ0Q2FtZXJhID0gY2FtZXJhLmNsb25lKClcXG4gICAgbGVmdENhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdsZSlcXG4gICAgY29uc3QgbGVmdEV5ZSA9IG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xcbiAgICAgICAgY2FtZXJhOiBsZWZ0Q2FtZXJhLFxcbiAgICAgICAgY2hpbGRyZW46IFtncm91cF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHJpZ2h0Q2FtZXJhID0gY2FtZXJhLmNsb25lKClcXG4gICAgcmlnaHRDYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFkoLWFuZ2xlKVxcbiAgICBjb25zdCByaWdodEV5ZSA9IG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xcbiAgICAgICAgY2FtZXJhOiByaWdodENhbWVyYSxcXG4gICAgICAgIGNoaWxkcmVuOiBbZ3JvdXBdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyQ29sb3IsXFxuICAgICAgICAodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA9PiB7XFxuICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgdGltZSAqIDYwLCAwKVxcbiAgICAgICAgfSxcXG4gICAgICAgICh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpID0+IHtcXG4gICAgICAgICAgICBjb25zdCB7IHdpZHRoIH0gPSBjb250ZXh0XFxuICAgICAgICAgICAgY29uc3QgY2VudGVyID0gd2lkdGggLyAyXFxuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHdpZHRoIC8gNFxcbiAgICAgICAgICAgIGNvbnRleHQudmlld3BvcnRFeGVjKFxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0RXllLnBhaW50KHRpbWUsIGRlbHRhKVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7IHg6IGNlbnRlciAtIHNpemUsIHdpZHRoOiAyMDAgfSxcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICAgY29udGV4dC52aWV3cG9ydEV4ZWMoXFxuICAgICAgICAgICAgICAgICgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0RXllLnBhaW50KHRpbWUsIGRlbHRhKVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7IHg6IGNlbnRlciwgd2lkdGg6IDIwMCB9LFxcbiAgICAgICAgICAgIClcXG4gICAgICAgIH0sXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJHcm91cCxcXG4gICAgVGdkUGFpbnRlckdyb3VwQ2FtZXJhLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKClcXG4gICAgY2FtZXJhLnNwYWNlV2lkdGhBdFRhcmdldCA9IDE2XFxuICAgIGNvbnRleHQuY2FtZXJhID0gY2FtZXJhXFxuICAgIGNvbnN0IGNsZWFyQ29sb3IgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG4gICAgfSlcXG4gICAgY29uc3QgY2xlYXJEZXB0aCA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXFxuICAgIH0pXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgfSlcXG4gICAgY29uc3QgZ3JvdXAgPSBuZXcgVGdkUGFpbnRlckdyb3VwKFtjbGVhckRlcHRoLCBzdGF0ZV0pXFxuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuKDEgLyBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSlcXG4gICAgY29uc3QgbGVmdENhbWVyYSA9IGNhbWVyYS5jbG9uZSgpXFxuICAgIGxlZnRDYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nbGUpXFxuICAgIGNvbnN0IGxlZnRFeWUgPSBuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcXG4gICAgICAgIGNhbWVyYTogbGVmdENhbWVyYSxcXG4gICAgICAgIGNoaWxkcmVuOiBbZ3JvdXBdLFxcbiAgICB9KVxcbiAgICBjb25zdCByaWdodENhbWVyYSA9IGNhbWVyYS5jbG9uZSgpXFxuICAgIHJpZ2h0Q2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRZKC1hbmdsZSlcXG4gICAgY29uc3QgcmlnaHRFeWUgPSBuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcXG4gICAgICAgIGNhbWVyYTogcmlnaHRDYW1lcmEsXFxuICAgICAgICBjaGlsZHJlbjogW2dyb3VwXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhckNvbG9yLFxcbiAgICAgICAgKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4ge1xcbiAgICAgICAgICAgIG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIHRpbWUgKiA2MCwgMClcXG4gICAgICAgIH0sXFxuICAgICAgICAodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gY29udGV4dFxcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlciA9IHdpZHRoIC8gMlxcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSB3aWR0aCAvIDRcXG4gICAgICAgICAgICBjb250ZXh0LnZpZXdwb3J0RXhlYyhcXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgbGVmdEV5ZS5wYWludCh0aW1lLCBkZWx0YSlcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeyB4OiBjZW50ZXIgLSBzaXplLCB3aWR0aDogMjAwIH0sXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIGNvbnRleHQudmlld3BvcnRFeGVjKFxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICByaWdodEV5ZS5wYWludCh0aW1lLCBkZWx0YSlcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgeyB4OiBjZW50ZXIsIHdpZHRoOiAyMDAgfSxcXG4gICAgICAgICAgICApXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGdsYjoge1xcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5uZTogU3V6YW5uZVVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fT48L1ZpZXc+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckdyb3VwLFxuICAgIFRnZFBhaW50ZXJHcm91cENhbWVyYSxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSgpXG4gICAgY2FtZXJhLnNwYWNlV2lkdGhBdFRhcmdldCA9IDE2XG4gICAgY29udGV4dC5jYW1lcmEgPSBjYW1lcmFcbiAgICBjb25zdCBjbGVhckNvbG9yID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiAxLFxuICAgICAgICBjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxuICAgIH0pXG4gICAgY29uc3QgY2xlYXJEZXB0aCA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcbiAgICB9KVxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgY3VsbDogXCJiYWNrXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXG4gICAgfSlcbiAgICBjb25zdCBncm91cCA9IG5ldyBUZ2RQYWludGVyR3JvdXAoW2NsZWFyRGVwdGgsIHN0YXRlXSlcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbigxIC8gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UpXG4gICAgY29uc3QgbGVmdENhbWVyYSA9IGNhbWVyYS5jbG9uZSgpXG4gICAgbGVmdENhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdsZSlcbiAgICBjb25zdCBsZWZ0RXllID0gbmV3IFRnZFBhaW50ZXJHcm91cENhbWVyYShjb250ZXh0LCB7XG4gICAgICAgIGNhbWVyYTogbGVmdENhbWVyYSxcbiAgICAgICAgY2hpbGRyZW46IFtncm91cF0sXG4gICAgfSlcbiAgICBjb25zdCByaWdodENhbWVyYSA9IGNhbWVyYS5jbG9uZSgpXG4gICAgcmlnaHRDYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFkoLWFuZ2xlKVxuICAgIGNvbnN0IHJpZ2h0RXllID0gbmV3IFRnZFBhaW50ZXJHcm91cENhbWVyYShjb250ZXh0LCB7XG4gICAgICAgIGNhbWVyYTogcmlnaHRDYW1lcmEsXG4gICAgICAgIGNoaWxkcmVuOiBbZ3JvdXBdLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyQ29sb3IsXG4gICAgICAgICh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIHRpbWUgKiA2MCwgMClcbiAgICAgICAgfSxcbiAgICAgICAgKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gY29udGV4dFxuICAgICAgICAgICAgY29uc3QgY2VudGVyID0gd2lkdGggLyAyXG4gICAgICAgICAgICBjb25zdCBzaXplID0gd2lkdGggLyA0XG4gICAgICAgICAgICBjb250ZXh0LnZpZXdwb3J0RXhlYyhcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRFeWUucGFpbnQodGltZSwgZGVsdGEpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7IHg6IGNlbnRlciAtIHNpemUsIHdpZHRoOiAyMDAgfSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnRleHQudmlld3BvcnRFeGVjKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRFeWUucGFpbnQodGltZSwgZGVsdGEpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7IHg6IGNlbnRlciwgd2lkdGg6IDIwMCB9LFxuICAgICAgICAgICAgKVxuICAgICAgICB9LFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjoge1xuICAgICAgICAgICAgICAgICAgICBzdXphbm5lOiBTdXphbm5lVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fT48L1ZpZXc+XG4gICAgKVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJHcm91cCIsIlRnZFBhaW50ZXJHcm91cENhbWVyYSIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTdGF0ZSIsIlZpZXciLCJTdXphbm5lVVJMIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjYW1lcmEiLCJjbGVhckNvbG9yIiwiY2xlYXJEZXB0aCIsIm1lc2giLCJzdGF0ZSIsImdyb3VwIiwiYW5nbGUiLCJNYXRoIiwibGVmdENhbWVyYSIsImxlZnRFeWUiLCJyaWdodENhbWVyYSIsInJpZ2h0RXllIiwidGltZSIsImRlbHRhIiwid2lkdGgiLCJjZW50ZXIiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUFveEQ7QUFDL3lELElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7Ozs7Ozs7Ozs7Ozs7QUNoQnVCO0FBQzZCO0FBRUY7QUFFbEQsU0FBU2UsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUM3QyxTQUFTO0lBQ1QsSUFBTUMsU0FBUyxJQUFJWCxvREFBb0JBO0lBQ3ZDVyxPQUFPLGtCQUFrQixH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