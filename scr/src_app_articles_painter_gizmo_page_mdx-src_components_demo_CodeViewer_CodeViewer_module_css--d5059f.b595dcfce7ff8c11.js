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
    "Detail #1": "function init(context: TgdContext) {\n\tconst { camera } = context;\n\tif (camera instanceof TgdCameraPerspective) {\n\t\tcamera.near = 0.1;\n\t\tcamera.far = 10;\n\t}\n\tcamera.fitSpaceAtTarget(2.2, 2.2);\n\tconst uniformCamera = new TgdUniformBufferObjectCamera(context);\n\tconst clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 });\n\tconst material = new TgdMaterialDiffuse({ lockLightsToCamera: true });\n\tconst meshes: TgdPainterMesh[] = [];\n\tconst S = 0.6;\n\tfor (const x of [-S, +S]) {\n\t\tfor (const y of [-S, +S]) {\n\t\t\tmeshes.push(\n\t\t\t\tnew TgdPainterMesh(context, {\n\t\t\t\t\tuniformCamera,\n\t\t\t\t\tmaterial,\n\t\t\t\t\ttransfo: {\n\t\t\t\t\t\tposition: [x, y, 0],\n\t\t\t\t\t},\n\t\t\t\t}),\n\t\t\t);\n\t\t}\n\t}\n\tconst gizmo = new TgdPainterGizmo(context, { size: 128 });\n\tgizmo.eventTap.addListener((evt) =>\n\t\tconsole.log(\"🐞 [main.demo@41] evt =\", evt),\n\t);\n\tcontext.add(\n\t\tclear,\n\t\t() => {\n\t\t\tuniformCamera.updateData();\n\t\t},\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: meshes,\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"off\",\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [gizmo],\n\t\t}),\n\t);\n\tcontext.paint();\n\treturn ({ size }: { size: number }) => {\n\t\tgizmo.size = size;\n\t\tcontext.paint();\n\t};\n}"
};
var FULL = "import {\n\tTgdCameraPerspective,\n\ttype TgdContext,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterGizmo,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdUniformBufferObjectCamera,\n} from \"@tolokoban/tgd\";\n\nimport View from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext) {\n\tconst { camera } = context;\n\tif (camera instanceof TgdCameraPerspective) {\n\t\tcamera.near = 0.1;\n\t\tcamera.far = 10;\n\t}\n\tcamera.fitSpaceAtTarget(2.2, 2.2);\n\tconst uniformCamera = new TgdUniformBufferObjectCamera(context);\n\tconst clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 });\n\tconst material = new TgdMaterialDiffuse({ lockLightsToCamera: true });\n\tconst meshes: TgdPainterMesh[] = [];\n\tconst S = 0.6;\n\tfor (const x of [-S, +S]) {\n\t\tfor (const y of [-S, +S]) {\n\t\t\tmeshes.push(\n\t\t\t\tnew TgdPainterMesh(context, {\n\t\t\t\t\tuniformCamera,\n\t\t\t\t\tmaterial,\n\t\t\t\t\ttransfo: {\n\t\t\t\t\t\tposition: [x, y, 0],\n\t\t\t\t\t},\n\t\t\t\t}),\n\t\t\t);\n\t\t}\n\t}\n\tconst gizmo = new TgdPainterGizmo(context, { size: 128 });\n\tgizmo.eventTap.addListener((evt) =>\n\t\tconsole.log(\"🐞 [main.demo@41] evt =\", evt),\n\t);\n\tcontext.add(\n\t\tclear,\n\t\t() => {\n\t\t\tuniformCamera.updateData();\n\t\t},\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: meshes,\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"off\",\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [gizmo],\n\t\t}),\n\t);\n\tcontext.paint();\n\treturn ({ size }: { size: number }) => {\n\t\tgizmo.size = size;\n\t\tcontext.paint();\n\t};\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tdisableDefaultDoubleTap\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 1000,\n\t\t\t}}\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t\talpha: false,\n\t\t\t\tantialias: true,\n\t\t\t\tpremultipliedAlpha: false,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tsize: {\n\t\t\t\t\tlabel: \"size\",\n\t\t\t\t\tvalue: 128,\n\t\t\t\t\tmin: 64,\n\t\t\t\t\tmax: 512,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/index.tsx",
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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/main.demo.tsx",
        lineNumber: 70,
        columnNumber: 3
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9naXptb19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLS1kNTA1OWYuYjU5NWRjZmNlN2ZmOGMxMS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9naXptby9fL21haW4uZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2dpem1vL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2dpem1vL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcblxcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0O1xcblxcdGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSkge1xcblxcdFxcdGNhbWVyYS5uZWFyID0gMC4xO1xcblxcdFxcdGNhbWVyYS5mYXIgPSAxMDtcXG5cXHR9XFxuXFx0Y2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMi4yLCAyLjIpO1xcblxcdGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KTtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KTtcXG5cXHRjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2UoeyBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUgfSk7XFxuXFx0Y29uc3QgbWVzaGVzOiBUZ2RQYWludGVyTWVzaFtdID0gW107XFxuXFx0Y29uc3QgUyA9IDAuNjtcXG5cXHRmb3IgKGNvbnN0IHggb2YgWy1TLCArU10pIHtcXG5cXHRcXHRmb3IgKGNvbnN0IHkgb2YgWy1TLCArU10pIHtcXG5cXHRcXHRcXHRtZXNoZXMucHVzaChcXG5cXHRcXHRcXHRcXHRuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcblxcdFxcdFxcdFxcdFxcdHVuaWZvcm1DYW1lcmEsXFxuXFx0XFx0XFx0XFx0XFx0bWF0ZXJpYWwsXFxuXFx0XFx0XFx0XFx0XFx0dHJhbnNmbzoge1xcblxcdFxcdFxcdFxcdFxcdFxcdHBvc2l0aW9uOiBbeCwgeSwgMF0sXFxuXFx0XFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHQpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0Y29uc3QgZ2l6bW8gPSBuZXcgVGdkUGFpbnRlckdpem1vKGNvbnRleHQsIHsgc2l6ZTogMTI4IH0pO1xcblxcdGdpem1vLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+XFxuXFx0XFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW21haW4uZGVtb0A0MV0gZXZ0ID1cXFwiLCBldnQpLFxcblxcdCk7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0Y2xlYXIsXFxuXFx0XFx0KCkgPT4ge1xcblxcdFxcdFxcdHVuaWZvcm1DYW1lcmEudXBkYXRlRGF0YSgpO1xcblxcdFxcdH0sXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0ZGVwdGg6IFxcXCJsZXNzXFxcIixcXG5cXHRcXHRcXHRjdWxsOiBcXFwiYmFja1xcXCIsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IG1lc2hlcyxcXG5cXHRcXHR9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRkZXB0aDogXFxcIm9mZlxcXCIsXFxuXFx0XFx0XFx0YmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtnaXptb10sXFxuXFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0cmV0dXJuICh7IHNpemUgfTogeyBzaXplOiBudW1iZXIgfSkgPT4ge1xcblxcdFxcdGdpem1vLnNpemUgPSBzaXplO1xcblxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHR9O1xcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0VGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZE1hdGVyaWFsRGlmZnVzZSxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlckdpem1vLFxcblxcdFRnZFBhaW50ZXJNZXNoLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcblxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuXFx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHQ7XFxuXFx0aWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XFxuXFx0XFx0Y2FtZXJhLm5lYXIgPSAwLjE7XFxuXFx0XFx0Y2FtZXJhLmZhciA9IDEwO1xcblxcdH1cXG5cXHRjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLjIsIDIuMik7XFxuXFx0Y29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pO1xcblxcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7IGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSB9KTtcXG5cXHRjb25zdCBtZXNoZXM6IFRnZFBhaW50ZXJNZXNoW10gPSBbXTtcXG5cXHRjb25zdCBTID0gMC42O1xcblxcdGZvciAoY29uc3QgeCBvZiBbLVMsICtTXSkge1xcblxcdFxcdGZvciAoY29uc3QgeSBvZiBbLVMsICtTXSkge1xcblxcdFxcdFxcdG1lc2hlcy5wdXNoKFxcblxcdFxcdFxcdFxcdG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuXFx0XFx0XFx0XFx0XFx0dW5pZm9ybUNhbWVyYSxcXG5cXHRcXHRcXHRcXHRcXHRtYXRlcmlhbCxcXG5cXHRcXHRcXHRcXHRcXHR0cmFuc2ZvOiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IFt4LCB5LCAwXSxcXG5cXHRcXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRjb25zdCBnaXptbyA9IG5ldyBUZ2RQYWludGVyR2l6bW8oY29udGV4dCwgeyBzaXplOiAxMjggfSk7XFxuXFx0Z2l6bW8uZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT5cXG5cXHRcXHRjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFpbi5kZW1vQDQxXSBldnQgPVxcXCIsIGV2dCksXFxuXFx0KTtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHQoKSA9PiB7XFxuXFx0XFx0XFx0dW5pZm9ybUNhbWVyYS51cGRhdGVEYXRhKCk7XFxuXFx0XFx0fSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRkZXB0aDogXFxcImxlc3NcXFwiLFxcblxcdFxcdFxcdGN1bGw6IFxcXCJiYWNrXFxcIixcXG5cXHRcXHRcXHRjaGlsZHJlbjogbWVzaGVzLFxcblxcdFxcdH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiBcXFwib2ZmXFxcIixcXG5cXHRcXHRcXHRibGVuZDogXFxcImFscGhhXFxcIixcXG5cXHRcXHRcXHRjaGlsZHJlbjogW2dpem1vXSxcXG5cXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHRyZXR1cm4gKHsgc2l6ZSB9OiB7IHNpemU6IG51bWJlciB9KSA9PiB7XFxuXFx0XFx0Z2l6bW8uc2l6ZSA9IHNpemU7XFxuXFx0XFx0Y29udGV4dC5wYWludCgpO1xcblxcdH07XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0ZGlzYWJsZURlZmF1bHREb3VibGVUYXBcXG5cXHRcXHRcXHRjb250cm9sbGVyPXt7XFxuXFx0XFx0XFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdFxcdH19XFxuXFx0XFx0XFx0b3B0aW9ucz17e1xcblxcdFxcdFxcdFxcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG5cXHRcXHRcXHRcXHRhbHBoYTogZmFsc2UsXFxuXFx0XFx0XFx0XFx0YW50aWFsaWFzOiB0cnVlLFxcblxcdFxcdFxcdFxcdHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRzZXR0aW5ncz17e1xcblxcdFxcdFxcdFxcdHNpemU6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcInNpemVcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxMjgsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiA2NCxcXG5cXHRcXHRcXHRcXHRcXHRtYXg6IDUxMixcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpO1xcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0VGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJHaXptbyxcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcblx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHQ7XG5cdGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSkge1xuXHRcdGNhbWVyYS5uZWFyID0gMC4xO1xuXHRcdGNhbWVyYS5mYXIgPSAxMDtcblx0fVxuXHRjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLjIsIDIuMik7XG5cdGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KTtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSk7XG5cdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7IGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSB9KTtcblx0Y29uc3QgbWVzaGVzOiBUZ2RQYWludGVyTWVzaFtdID0gW107XG5cdGNvbnN0IFMgPSAwLjY7XG5cdGZvciAoY29uc3QgeCBvZiBbLVMsICtTXSkge1xuXHRcdGZvciAoY29uc3QgeSBvZiBbLVMsICtTXSkge1xuXHRcdFx0bWVzaGVzLnB1c2goXG5cdFx0XHRcdG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG5cdFx0XHRcdFx0dW5pZm9ybUNhbWVyYSxcblx0XHRcdFx0XHRtYXRlcmlhbCxcblx0XHRcdFx0XHR0cmFuc2ZvOiB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogW3gsIHksIDBdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pLFxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0Y29uc3QgZ2l6bW8gPSBuZXcgVGdkUGFpbnRlckdpem1vKGNvbnRleHQsIHsgc2l6ZTogMTI4IH0pO1xuXHRnaXptby5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PlxuXHRcdGNvbnNvbGUubG9nKFwi8J+QniBbbWFpbi5kZW1vQDQxXSBldnQgPVwiLCBldnQpLFxuXHQpO1xuXHRjb250ZXh0LmFkZChcblx0XHRjbGVhcixcblx0XHQoKSA9PiB7XG5cdFx0XHR1bmlmb3JtQ2FtZXJhLnVwZGF0ZURhdGEoKTtcblx0XHR9LFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IFwibGVzc1wiLFxuXHRcdFx0Y3VsbDogXCJiYWNrXCIsXG5cdFx0XHRjaGlsZHJlbjogbWVzaGVzLFxuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IFwib2ZmXCIsXG5cdFx0XHRibGVuZDogXCJhbHBoYVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtnaXptb10sXG5cdFx0fSksXG5cdCk7XG5cdGNvbnRleHQucGFpbnQoKTtcblx0cmV0dXJuICh7IHNpemUgfTogeyBzaXplOiBudW1iZXIgfSkgPT4ge1xuXHRcdGdpem1vLnNpemUgPSBzaXplO1xuXHRcdGNvbnRleHQucGFpbnQoKTtcblx0fTtcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGRpc2FibGVEZWZhdWx0RG91YmxlVGFwXG5cdFx0XHRjb250cm9sbGVyPXt7XG5cdFx0XHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRcdH19XG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdFx0YWxwaGE6IGZhbHNlLFxuXHRcdFx0XHRhbnRpYWxpYXM6IHRydWUsXG5cdFx0XHRcdHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UsXG5cdFx0XHR9fVxuXHRcdFx0c2V0dGluZ3M9e3tcblx0XHRcdFx0c2l6ZToge1xuXHRcdFx0XHRcdGxhYmVsOiBcInNpemVcIixcblx0XHRcdFx0XHR2YWx1ZTogMTI4LFxuXHRcdFx0XHRcdG1pbjogNjQsXG5cdFx0XHRcdFx0bWF4OiA1MTIsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZENhbWVyYVBlcnNwZWN0aXZlIiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckdpem1vIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhIiwiVmlldyIsImluaXQiLCJjb250ZXh0IiwiY2FtZXJhIiwiX2luc3RhbmNlb2YiLCJ1bmlmb3JtQ2FtZXJhIiwiY2xlYXIiLCJtYXRlcmlhbCIsIm1lc2hlcyIsIlMiLCJfaXRlciIsIngiLCJfaXRlcjEiLCJ5IiwiZ2l6bW8iLCJldnQiLCJjb25zb2xlIiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUF3MUM7QUFDbjNDLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFN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