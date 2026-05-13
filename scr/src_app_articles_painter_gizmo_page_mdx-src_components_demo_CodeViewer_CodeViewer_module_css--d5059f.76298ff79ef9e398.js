"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_gizmo_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css--d5059f"], {
57762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(75504);
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
    "Detail #1": "function init(context: TgdContext) {\n    const { camera } = context\n    if (camera instanceof TgdCameraPerspective) {\n        camera.near = 0.1\n        camera.far = 10\n    }\n    camera.fitSpaceAtTarget(2.2, 2.2)\n    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const material = new TgdMaterialDiffuse({ lockLightsToCamera: true })\n    const meshes: TgdPainterMesh[] = []\n    const S = 0.6\n    for (const x of [-S, +S]) {\n        for (const y of [-S, +S]) {\n            meshes.push(\n                new TgdPainterMesh(context, {\n                    uniformCamera,\n                    material,\n                    transfo: {\n                        position: [x, y, 0],\n                    },\n                }),\n            )\n        }\n    }\n    const gizmo = new TgdPainterGizmo(context, { size: 128 })\n    gizmo.eventTap.addListener((evt) => console.log(\"🐞 [main.demo@41] evt =\", evt))\n    context.add(\n        clear,\n        () => {\n            uniformCamera.updateData()\n        },\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: meshes,\n        }),\n        new TgdPainterState(context, {\n            depth: \"off\",\n            blend: \"alpha\",\n            children: [gizmo],\n        }),\n    )\n    context.paint()\n    return ({ size }: { size: number }) => {\n        gizmo.size = size\n        context.paint()\n    }\n}"
};
var FULL = "import {\n    TgdCameraPerspective,\n    type TgdContext,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterGizmo,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdUniformBufferObjectCamera,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    const { camera } = context\n    if (camera instanceof TgdCameraPerspective) {\n        camera.near = 0.1\n        camera.far = 10\n    }\n    camera.fitSpaceAtTarget(2.2, 2.2)\n    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n    const material = new TgdMaterialDiffuse({ lockLightsToCamera: true })\n    const meshes: TgdPainterMesh[] = []\n    const S = 0.6\n    for (const x of [-S, +S]) {\n        for (const y of [-S, +S]) {\n            meshes.push(\n                new TgdPainterMesh(context, {\n                    uniformCamera,\n                    material,\n                    transfo: {\n                        position: [x, y, 0],\n                    },\n                }),\n            )\n        }\n    }\n    const gizmo = new TgdPainterGizmo(context, { size: 128 })\n    gizmo.eventTap.addListener((evt) => console.log(\"🐞 [main.demo@41] evt =\", evt))\n    context.add(\n        clear,\n        () => {\n            uniformCamera.updateData()\n        },\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: meshes,\n        }),\n        new TgdPainterState(context, {\n            depth: \"off\",\n            blend: \"alpha\",\n            children: [gizmo],\n        }),\n    )\n    context.paint()\n    return ({ size }: { size: number }) => {\n        gizmo.size = size\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            disableDefaultDoubleTap\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            options={{\n                preserveDrawingBuffer: true,\n                alpha: false,\n                antialias: true,\n                premultipliedAlpha: false,\n            }}\n            settings={{\n                size: {\n                    label: \"size\",\n                    value: 128,\n                    min: 64,\n                    max: 512,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
75504(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
function _instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}



// #begin
function init(context) {
    var camera = context.camera;
    if (_instanceof(camera, _tolokoban_tgd__rspack_import_1.TgdCameraPerspective)) {
        camera.near = 0.1;
        camera.far = 10;
    }
    camera.fitSpaceAtTarget(2.2, 2.2);
    var uniformCamera = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObjectCamera(context);
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0,
            0,
            1
        ],
        depth: 1
    });
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        lockLightsToCamera: true
    });
    var meshes = [];
    var S = 0.6;
    for(var _i = 0, _iter = [
        -S,
        +S
    ]; _i < _iter.length; _i++){
        var x = _iter[_i];
        for(var _i1 = 0, _iter1 = [
            -S,
            +S
        ]; _i1 < _iter1.length; _i1++){
            var y = _iter1[_i1];
            meshes.push(new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
                uniformCamera: uniformCamera,
                material: material,
                transfo: {
                    position: [
                        x,
                        y,
                        0
                    ]
                }
            }));
        }
    }
    var gizmo = new _tolokoban_tgd__rspack_import_1.TgdPainterGizmo(context, {
        size: 128
    });
    gizmo.eventTap.addListener(function(evt) {
        return console.log("🐞 [main.demo@41] evt =", evt);
    });
    context.add(clear, function() {
        uniformCamera.updateData();
    }, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: meshes
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "off",
        blend: "alpha",
        children: [
            gizmo
        ]
    }));
    context.paint();
    return function(param) {
        var size = param.size;
        gizmo.size = size;
        context.paint();
    };
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        disableDefaultDoubleTap: true,
        controller: {
            inertiaOrbit: 1000
        },
        options: {
            preserveDrawingBuffer: true,
            alpha: false,
            antialias: true,
            premultipliedAlpha: false
        },
        settings: {
            size: {
                label: "size",
                value: 128,
                min: 64,
                max: 512
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/main.demo.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
}


},
80497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(57762);
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
        h1: "h1"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterGizmo.html",
                    children: "TgdPainterGizmo"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9naXptb19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLS1kNTA1OWYuNzYyOThmZjc5ZWY5ZTM5OC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2dpem1vL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9naXptby9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2dpem1vL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgIGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSkge1xcbiAgICAgICAgY2FtZXJhLm5lYXIgPSAwLjFcXG4gICAgICAgIGNhbWVyYS5mYXIgPSAxMFxcbiAgICB9XFxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIuMiwgMi4yKVxcbiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHsgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlIH0pXFxuICAgIGNvbnN0IG1lc2hlczogVGdkUGFpbnRlck1lc2hbXSA9IFtdXFxuICAgIGNvbnN0IFMgPSAwLjZcXG4gICAgZm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XFxuICAgICAgICBmb3IgKGNvbnN0IHkgb2YgWy1TLCArU10pIHtcXG4gICAgICAgICAgICBtZXNoZXMucHVzaChcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEsXFxuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogW3gsIHksIDBdLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IGdpem1vID0gbmV3IFRnZFBhaW50ZXJHaXptbyhjb250ZXh0LCB7IHNpemU6IDEyOCB9KVxcbiAgICBnaXptby5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiBjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFpbi5kZW1vQDQxXSBldnQgPVxcXCIsIGV2dCkpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICAoKSA9PiB7XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS51cGRhdGVEYXRhKClcXG4gICAgICAgIH0sXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJiYWNrXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogbWVzaGVzLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcIm9mZlxcXCIsXFxuICAgICAgICAgICAgYmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtnaXptb10sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgcmV0dXJuICh7IHNpemUgfTogeyBzaXplOiBudW1iZXIgfSkgPT4ge1xcbiAgICAgICAgZ2l6bW8uc2l6ZSA9IHNpemVcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJHaXptbyxcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgaWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XFxuICAgICAgICBjYW1lcmEubmVhciA9IDAuMVxcbiAgICAgICAgY2FtZXJhLmZhciA9IDEwXFxuICAgIH1cXG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMi4yLCAyLjIpXFxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2UoeyBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUgfSlcXG4gICAgY29uc3QgbWVzaGVzOiBUZ2RQYWludGVyTWVzaFtdID0gW11cXG4gICAgY29uc3QgUyA9IDAuNlxcbiAgICBmb3IgKGNvbnN0IHggb2YgWy1TLCArU10pIHtcXG4gICAgICAgIGZvciAoY29uc3QgeSBvZiBbLVMsICtTXSkge1xcbiAgICAgICAgICAgIG1lc2hlcy5wdXNoKFxcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybUNhbWVyYSxcXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmbzoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbeCwgeSwgMF0sXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICApXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29uc3QgZ2l6bW8gPSBuZXcgVGdkUGFpbnRlckdpem1vKGNvbnRleHQsIHsgc2l6ZTogMTI4IH0pXFxuICAgIGdpem1vLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYWluLmRlbW9ANDFdIGV2dCA9XFxcIiwgZXZ0KSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgICgpID0+IHtcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnVwZGF0ZURhdGEoKVxcbiAgICAgICAgfSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBtZXNoZXMsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBibGVuZDogXFxcImFscGhhXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2dpem1vXSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICByZXR1cm4gKHsgc2l6ZSB9OiB7IHNpemU6IG51bWJlciB9KSA9PiB7XFxuICAgICAgICBnaXptby5zaXplID0gc2l6ZVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgb3B0aW9ucz17e1xcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuICAgICAgICAgICAgICAgIGFscGhhOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcXG4gICAgICAgICAgICAgICAgc2l6ZToge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJzaXplXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxMjgsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDY0LFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA1MTIsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckdpem1vLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxuICAgIGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSkge1xuICAgICAgICBjYW1lcmEubmVhciA9IDAuMVxuICAgICAgICBjYW1lcmEuZmFyID0gMTBcbiAgICB9XG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMi4yLCAyLjIpXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2UoeyBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUgfSlcbiAgICBjb25zdCBtZXNoZXM6IFRnZFBhaW50ZXJNZXNoW10gPSBbXVxuICAgIGNvbnN0IFMgPSAwLjZcbiAgICBmb3IgKGNvbnN0IHggb2YgWy1TLCArU10pIHtcbiAgICAgICAgZm9yIChjb25zdCB5IG9mIFstUywgK1NdKSB7XG4gICAgICAgICAgICBtZXNoZXMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLFxuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFt4LCB5LCAwXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnaXptbyA9IG5ldyBUZ2RQYWludGVyR2l6bW8oY29udGV4dCwgeyBzaXplOiAxMjggfSlcbiAgICBnaXptby5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiBjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0A0MV0gZXZ0ID1cIiwgZXZ0KSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudXBkYXRlRGF0YSgpXG4gICAgICAgIH0sXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxuICAgICAgICAgICAgY3VsbDogXCJiYWNrXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogbWVzaGVzLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogXCJvZmZcIixcbiAgICAgICAgICAgIGJsZW5kOiBcImFscGhhXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2dpem1vXSxcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIHJldHVybiAoeyBzaXplIH06IHsgc2l6ZTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgZ2l6bW8uc2l6ZSA9IHNpemVcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHREb3VibGVUYXBcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHBoYTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcbiAgICAgICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNpemVcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEyOCxcbiAgICAgICAgICAgICAgICAgICAgbWluOiA2NCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA1MTIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJHaXptbyIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSIsIlZpZXciLCJpbml0IiwiY29udGV4dCIsImNhbWVyYSIsIl9pbnN0YW5jZW9mIiwidW5pZm9ybUNhbWVyYSIsImNsZWFyIiwibWF0ZXJpYWwiLCJtZXNoZXMiLCJTIiwiX2l0ZXIiLCJ4IiwiX2l0ZXIxIiwieSIsImdpem1vIiwiZXZ0IiwiY29uc29sZSIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDdkI7QUFFOUIsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBOGdEO0FBQ3ppRCxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSixzQ0FBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ2xEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR3RDLGtEQUFDTix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPTSxPQUFPSCxPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFHNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z1QjtBQUVpQjtBQUV4QyxTQUFTO0FBQ1QsU0FBU2UsS0FBS0MsT0FBbUI7SUFDN0IsSUFBUUMsU0FBV0QsUUFBWEM7SUFDUixJQUFVQyxZQUFORCxRQUFrQlYsb0RBQW9CQSxHQUFFO1FBQ3hDVSxPQUFPLElBQUksR0FBRztRQUNkQSxPQUFPLEdBQUcsR0FBRztJQUNqQjtJQUNBQSxPQUFPLGdCQUFnQixDQUFDLEtBQUs7SUFDN0IsSUFBTUUsZ0JBQWdCLElBQUlOLDREQUE0QkEsQ0FBQ0c7SUFDdkQsSUFBTUksUUFBUSxJQUFJWCwrQ0FBZUEsQ0FBQ08sU0FBUztRQUFFLE9BQU87WUFBQztZQUFHO1lBQUc7WUFBRztTQUFFO1FBQUUsT0FBTztJQUFFO0lBQzNFLElBQU1LLFdBQVcsSUFBSWIsa0RBQWtCQSxDQUFDO1FBQUUsb0JBQW9CO0lBQUs7SUFDbkUsSUFBTWMsU0FBMkIsRUFBRTtJQUNuQyxJQUFNQyxJQUFJO0lBQ1YsZ0JBQWdCQyxRQUFBQTtRQUFDLENBQUNEO1FBQUcsQ0FBQ0E7S0FBRSxPQUFSQyxtQkFBVTtZQUFmQyxJQUFLRDtRQUNaLGlCQUFnQkUsU0FBQUE7WUFBQyxDQUFDSDtZQUFHLENBQUNBO1NBQUUsUUFBUkcscUJBQVU7Z0JBQWZDLElBQUtEO1lBQ1pKLE9BQU8sSUFBSSxDQUNQLElBQUlYLDhDQUFjQSxDQUFDSyxTQUFTO2dCQUN4QkcsZUFBQUE7Z0JBQ0FFLFVBQUFBO2dCQUNBLFNBQVM7b0JBQ0wsVUFBVTt3QkFBQ0k7d0JBQUdFO3dCQUFHO3FCQUFFO2dCQUN2QjtZQUNKO1FBRVI7SUFDSjtJQUNBLElBQU1DLFFBQVEsSUFBSWxCLCtDQUFlQSxDQUFDTSxTQUFTO1FBQUUsTUFBTTtJQUFJO0lBQ3ZEWSxNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBQ0M7ZUFBUUMsUUFBUSxHQUFHLENBQUMsMkJBQTJCRDs7SUFDM0ViLFFBQVEsR0FBRyxDQUNQSSxPQUNBO1FBQ0lELGNBQWMsVUFBVTtJQUM1QixHQUNBLElBQUlQLCtDQUFlQSxDQUFDSSxTQUFTO1FBQ3pCLE9BQU87UUFDUCxNQUFNO1FBQ04sVUFBVU07SUFDZCxJQUNBLElBQUlWLCtDQUFlQSxDQUFDSSxTQUFTO1FBQ3pCLE9BQU87UUFDUCxPQUFPO1FBQ1AsVUFBVTtZQUFDWTtTQUFNO0lBQ3JCO0lBRUpaLFFBQVEsS0FBSztJQUNiLE9BQU87WUFBR2UsYUFBQUE7UUFDTkgsTUFBTSxJQUFJLEdBQUdHO1FBQ2JmLFFBQVEsS0FBSztJQUNqQjtBQUNKO0FBQ0EsT0FBTztBQUVRLFNBQVNqQjtJQUNwQixxQkFDSSxrREFBQ2UsZ0RBQUlBO1FBQ0QsU0FBU0M7UUFDVCx1QkFBdUI7UUFDdkIsWUFBWTtZQUNSLGNBQWM7UUFDbEI7UUFDQSxTQUFTO1lBQ0wsdUJBQXVCO1lBQ3ZCLE9BQU87WUFDUCxXQUFXO1lBQ1gsb0JBQW9CO1FBQ3hCO1FBQ0EsVUFBVTtZQUNOLE1BQU07Z0JBQ0YsT0FBTztnQkFDUCxPQUFPO2dCQUNQLEtBQUs7Z0JBQ0wsS0FBSztZQUNUO1FBQ0o7Ozs7OztBQUdaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RmlCOzs7Ozs7Ozs7Ozs4QkFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkg7QUFDQSxZQUFZLGVBQWU7QUFDM0IsWUFBWSxvQ0FBb0M7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QztBQUNBLGNBQWMsOERBQThEO0FBQzVFO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTs7QUFFeUI7O0FBRXpCLFdBQVcseUJBQXlCO0FBQ3BDOztBQUVBLG1CQUFtQixvQ0FBbUI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQThEO0FBQ3pFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLDRCQUE0QixpQ0FBZ0I7O0FBRTVDO0FBQ0EsU0FBUyw4QkFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsZUFBZTtBQUNmO0FBQ087QUFDUCxhQUFhLHlCQUF5QjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsU0FBUyxvQ0FBbUI7QUFDNUI7QUFDQSxLQUFLLHFCQUFxQjtBQUMxQjtBQUNBO0FBQ0EifQ==