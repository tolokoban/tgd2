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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/_/main.demo/main.demo.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx",
                        lineNumber: 5,
                        columnNumber: 117
                    }, this),
                    " 3D."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/stereo-vision/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX3N0ZXJlby12aXNpb25fcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlX2Nzcy1zci1jYTNkZTguNDdlZGZmNzUxYjVkOTMxYy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3Mvc3RlcmVvLXZpc2lvbi9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9zdGVyZW8tdmlzaW9uL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9zdGVyZW8tdmlzaW9uL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSgpXFxuICAgIGNhbWVyYS5zcGFjZVdpZHRoQXRUYXJnZXQgPSAxNlxcbiAgICBjb250ZXh0LmNhbWVyYSA9IGNhbWVyYVxcbiAgICBjb25zdCBjbGVhckNvbG9yID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGNsZWFyRGVwdGggPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbm5lLFxcbiAgICB9KVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgIGN1bGw6IFxcXCJiYWNrXFxcIixcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGdyb3VwID0gbmV3IFRnZFBhaW50ZXJHcm91cChbY2xlYXJEZXB0aCwgc3RhdGVdKVxcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbigxIC8gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UpXFxuICAgIGNvbnN0IGxlZnRDYW1lcmEgPSBjYW1lcmEuY2xvbmUoKVxcbiAgICBsZWZ0Q2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ2xlKVxcbiAgICBjb25zdCBsZWZ0RXllID0gbmV3IFRnZFBhaW50ZXJHcm91cENhbWVyYShjb250ZXh0LCB7XFxuICAgICAgICBjYW1lcmE6IGxlZnRDYW1lcmEsXFxuICAgICAgICBjaGlsZHJlbjogW2dyb3VwXSxcXG4gICAgfSlcXG4gICAgY29uc3QgcmlnaHRDYW1lcmEgPSBjYW1lcmEuY2xvbmUoKVxcbiAgICByaWdodENhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWSgtYW5nbGUpXFxuICAgIGNvbnN0IHJpZ2h0RXllID0gbmV3IFRnZFBhaW50ZXJHcm91cENhbWVyYShjb250ZXh0LCB7XFxuICAgICAgICBjYW1lcmE6IHJpZ2h0Q2FtZXJhLFxcbiAgICAgICAgY2hpbGRyZW46IFtncm91cF0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXJDb2xvcixcXG4gICAgICAgICh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpID0+IHtcXG4gICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCB0aW1lICogNjAsIDApXFxuICAgICAgICB9LFxcbiAgICAgICAgKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IGNvbnRleHRcXG4gICAgICAgICAgICBjb25zdCBjZW50ZXIgPSB3aWR0aCAvIDJcXG4gICAgICAgICAgICBjb25zdCBzaXplID0gd2lkdGggLyA0XFxuICAgICAgICAgICAgY29udGV4dC52aWV3cG9ydEV4ZWMoXFxuICAgICAgICAgICAgICAgICgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGxlZnRFeWUucGFpbnQodGltZSwgZGVsdGEpXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHsgeDogY2VudGVyIC0gc2l6ZSwgd2lkdGg6IDIwMCB9LFxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgICBjb250ZXh0LnZpZXdwb3J0RXhlYyhcXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRFeWUucGFpbnQodGltZSwgZGVsdGEpXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHsgeDogY2VudGVyLCB3aWR0aDogMjAwIH0sXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckdyb3VwLFxcbiAgICBUZ2RQYWludGVyR3JvdXBDYW1lcmEsXFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoKVxcbiAgICBjYW1lcmEuc3BhY2VXaWR0aEF0VGFyZ2V0ID0gMTZcXG4gICAgY29udGV4dC5jYW1lcmEgPSBjYW1lcmFcXG4gICAgY29uc3QgY2xlYXJDb2xvciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICBjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhckRlcHRoID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICBjdWxsOiBcXFwiYmFja1xcXCIsXFxuICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICB9KVxcbiAgICBjb25zdCBncm91cCA9IG5ldyBUZ2RQYWludGVyR3JvdXAoW2NsZWFyRGVwdGgsIHN0YXRlXSlcXG4gICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4oMSAvIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlKVxcbiAgICBjb25zdCBsZWZ0Q2FtZXJhID0gY2FtZXJhLmNsb25lKClcXG4gICAgbGVmdENhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdsZSlcXG4gICAgY29uc3QgbGVmdEV5ZSA9IG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xcbiAgICAgICAgY2FtZXJhOiBsZWZ0Q2FtZXJhLFxcbiAgICAgICAgY2hpbGRyZW46IFtncm91cF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHJpZ2h0Q2FtZXJhID0gY2FtZXJhLmNsb25lKClcXG4gICAgcmlnaHRDYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFkoLWFuZ2xlKVxcbiAgICBjb25zdCByaWdodEV5ZSA9IG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xcbiAgICAgICAgY2FtZXJhOiByaWdodENhbWVyYSxcXG4gICAgICAgIGNoaWxkcmVuOiBbZ3JvdXBdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyQ29sb3IsXFxuICAgICAgICAodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA9PiB7XFxuICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgdGltZSAqIDYwLCAwKVxcbiAgICAgICAgfSxcXG4gICAgICAgICh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpID0+IHtcXG4gICAgICAgICAgICBjb25zdCB7IHdpZHRoIH0gPSBjb250ZXh0XFxuICAgICAgICAgICAgY29uc3QgY2VudGVyID0gd2lkdGggLyAyXFxuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHdpZHRoIC8gNFxcbiAgICAgICAgICAgIGNvbnRleHQudmlld3BvcnRFeGVjKFxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0RXllLnBhaW50KHRpbWUsIGRlbHRhKVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7IHg6IGNlbnRlciAtIHNpemUsIHdpZHRoOiAyMDAgfSxcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICAgY29udGV4dC52aWV3cG9ydEV4ZWMoXFxuICAgICAgICAgICAgICAgICgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0RXllLnBhaW50KHRpbWUsIGRlbHRhKVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7IHg6IGNlbnRlciwgd2lkdGg6IDIwMCB9LFxcbiAgICAgICAgICAgIClcXG4gICAgICAgIH0sXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICBzdXphbm5lOiBTdXphbm5lVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19PjwvVmlldz5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyR3JvdXAsXG4gICAgVGdkUGFpbnRlckdyb3VwQ2FtZXJhLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKClcbiAgICBjYW1lcmEuc3BhY2VXaWR0aEF0VGFyZ2V0ID0gMTZcbiAgICBjb250ZXh0LmNhbWVyYSA9IGNhbWVyYVxuICAgIGNvbnN0IGNsZWFyQ29sb3IgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXG4gICAgfSlcbiAgICBjb25zdCBjbGVhckRlcHRoID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbm5lLFxuICAgIH0pXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxuICAgICAgICBjdWxsOiBcImJhY2tcIixcbiAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcbiAgICB9KVxuICAgIGNvbnN0IGdyb3VwID0gbmV3IFRnZFBhaW50ZXJHcm91cChbY2xlYXJEZXB0aCwgc3RhdGVdKVxuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuKDEgLyBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSlcbiAgICBjb25zdCBsZWZ0Q2FtZXJhID0gY2FtZXJhLmNsb25lKClcbiAgICBsZWZ0Q2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ2xlKVxuICAgIGNvbnN0IGxlZnRFeWUgPSBuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcbiAgICAgICAgY2FtZXJhOiBsZWZ0Q2FtZXJhLFxuICAgICAgICBjaGlsZHJlbjogW2dyb3VwXSxcbiAgICB9KVxuICAgIGNvbnN0IHJpZ2h0Q2FtZXJhID0gY2FtZXJhLmNsb25lKClcbiAgICByaWdodENhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWSgtYW5nbGUpXG4gICAgY29uc3QgcmlnaHRFeWUgPSBuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcbiAgICAgICAgY2FtZXJhOiByaWdodENhbWVyYSxcbiAgICAgICAgY2hpbGRyZW46IFtncm91cF0sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXJDb2xvcixcbiAgICAgICAgKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgdGltZSAqIDYwLCAwKVxuICAgICAgICB9LFxuICAgICAgICAodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHdpZHRoIH0gPSBjb250ZXh0XG4gICAgICAgICAgICBjb25zdCBjZW50ZXIgPSB3aWR0aCAvIDJcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSB3aWR0aCAvIDRcbiAgICAgICAgICAgIGNvbnRleHQudmlld3BvcnRFeGVjKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdEV5ZS5wYWludCh0aW1lLCBkZWx0YSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgeDogY2VudGVyIC0gc2l6ZSwgd2lkdGg6IDIwMCB9LFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29udGV4dC52aWV3cG9ydEV4ZWMoXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByaWdodEV5ZS5wYWludCh0aW1lLCBkZWx0YSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgeDogY2VudGVyLCB3aWR0aDogMjAwIH0sXG4gICAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgZ2xiOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1emFubmU6IFN1emFubmVVUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19PjwvVmlldz5cbiAgICApXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZENhbWVyYVBlcnNwZWN0aXZlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckdyb3VwIiwiVGdkUGFpbnRlckdyb3VwQ2FtZXJhIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwiVmlldyIsIlN1emFubmVVUkwiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNhbWVyYSIsImNsZWFyQ29sb3IiLCJjbGVhckRlcHRoIiwibWVzaCIsInN0YXRlIiwiZ3JvdXAiLCJhbmdsZSIsIk1hdGgiLCJsZWZ0Q2FtZXJhIiwibGVmdEV5ZSIsInJpZ2h0Q2FtZXJhIiwicmlnaHRFeWUiLCJ0aW1lIiwiZGVsdGEiLCJ3aWR0aCIsImNlbnRlciIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQW94RDtBQUMveUQsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osc0NBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUd0QyxrREFBQ04sdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FBT00sT0FBT0gsT0FBT0Q7Ozs7Ozs7Ozs7Ozs7O0FBRzVEOzs7Ozs7Ozs7Ozs7OztBQ2hCdUI7QUFDNkI7QUFFRjtBQUVsRCxTQUFTZSxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQzdDLFNBQVM7SUFDVCxJQUFNQyxTQUFTLElBQUlYLG9EQUFvQkE7SUFDdkNXLE9BQU8sa0JBQWtCLEdBQUc7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