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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9naXptb19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLS1kNTA1OWYuZDY1MGU0NTFmZGM0MmE2NS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2dpem1vL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9naXptby9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2dpem1vL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuXFx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHQ7XFxuXFx0aWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XFxuXFx0XFx0Y2FtZXJhLm5lYXIgPSAwLjE7XFxuXFx0XFx0Y2FtZXJhLmZhciA9IDEwO1xcblxcdH1cXG5cXHRjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLjIsIDIuMik7XFxuXFx0Y29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pO1xcblxcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7IGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSB9KTtcXG5cXHRjb25zdCBtZXNoZXM6IFRnZFBhaW50ZXJNZXNoW10gPSBbXTtcXG5cXHRjb25zdCBTID0gMC42O1xcblxcdGZvciAoY29uc3QgeCBvZiBbLVMsICtTXSkge1xcblxcdFxcdGZvciAoY29uc3QgeSBvZiBbLVMsICtTXSkge1xcblxcdFxcdFxcdG1lc2hlcy5wdXNoKFxcblxcdFxcdFxcdFxcdG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuXFx0XFx0XFx0XFx0XFx0dW5pZm9ybUNhbWVyYSxcXG5cXHRcXHRcXHRcXHRcXHRtYXRlcmlhbCxcXG5cXHRcXHRcXHRcXHRcXHR0cmFuc2ZvOiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IFt4LCB5LCAwXSxcXG5cXHRcXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRjb25zdCBnaXptbyA9IG5ldyBUZ2RQYWludGVyR2l6bW8oY29udGV4dCwgeyBzaXplOiAxMjggfSk7XFxuXFx0Z2l6bW8uZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT5cXG5cXHRcXHRjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFpbi5kZW1vQDQxXSBldnQgPVxcXCIsIGV2dCksXFxuXFx0KTtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHQoKSA9PiB7XFxuXFx0XFx0XFx0dW5pZm9ybUNhbWVyYS51cGRhdGVEYXRhKCk7XFxuXFx0XFx0fSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRkZXB0aDogXFxcImxlc3NcXFwiLFxcblxcdFxcdFxcdGN1bGw6IFxcXCJiYWNrXFxcIixcXG5cXHRcXHRcXHRjaGlsZHJlbjogbWVzaGVzLFxcblxcdFxcdH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiBcXFwib2ZmXFxcIixcXG5cXHRcXHRcXHRibGVuZDogXFxcImFscGhhXFxcIixcXG5cXHRcXHRcXHRjaGlsZHJlbjogW2dpem1vXSxcXG5cXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHRyZXR1cm4gKHsgc2l6ZSB9OiB7IHNpemU6IG51bWJlciB9KSA9PiB7XFxuXFx0XFx0Z2l6bW8uc2l6ZSA9IHNpemU7XFxuXFx0XFx0Y29udGV4dC5wYWludCgpO1xcblxcdH07XFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHRUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyR2l6bW8sXFxuXFx0VGdkUGFpbnRlck1lc2gsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG5cXHRjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dDtcXG5cXHRpZiAoY2FtZXJhIGluc3RhbmNlb2YgVGdkQ2FtZXJhUGVyc3BlY3RpdmUpIHtcXG5cXHRcXHRjYW1lcmEubmVhciA9IDAuMTtcXG5cXHRcXHRjYW1lcmEuZmFyID0gMTA7XFxuXFx0fVxcblxcdGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIuMiwgMi4yKTtcXG5cXHRjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dCk7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSk7XFxuXFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHsgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlIH0pO1xcblxcdGNvbnN0IG1lc2hlczogVGdkUGFpbnRlck1lc2hbXSA9IFtdO1xcblxcdGNvbnN0IFMgPSAwLjY7XFxuXFx0Zm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XFxuXFx0XFx0Zm9yIChjb25zdCB5IG9mIFstUywgK1NdKSB7XFxuXFx0XFx0XFx0bWVzaGVzLnB1c2goXFxuXFx0XFx0XFx0XFx0bmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHRcXHR1bmlmb3JtQ2FtZXJhLFxcblxcdFxcdFxcdFxcdFxcdG1hdGVyaWFsLFxcblxcdFxcdFxcdFxcdFxcdHRyYW5zZm86IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogW3gsIHksIDBdLFxcblxcdFxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0KTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdGNvbnN0IGdpem1vID0gbmV3IFRnZFBhaW50ZXJHaXptbyhjb250ZXh0LCB7IHNpemU6IDEyOCB9KTtcXG5cXHRnaXptby5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PlxcblxcdFxcdGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYWluLmRlbW9ANDFdIGV2dCA9XFxcIiwgZXZ0KSxcXG5cXHQpO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGNsZWFyLFxcblxcdFxcdCgpID0+IHtcXG5cXHRcXHRcXHR1bmlmb3JtQ2FtZXJhLnVwZGF0ZURhdGEoKTtcXG5cXHRcXHR9LFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuXFx0XFx0XFx0Y3VsbDogXFxcImJhY2tcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBtZXNoZXMsXFxuXFx0XFx0fSksXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0ZGVwdGg6IFxcXCJvZmZcXFwiLFxcblxcdFxcdFxcdGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbZ2l6bW9dLFxcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29udGV4dC5wYWludCgpO1xcblxcdHJldHVybiAoeyBzaXplIH06IHsgc2l6ZTogbnVtYmVyIH0pID0+IHtcXG5cXHRcXHRnaXptby5zaXplID0gc2l6ZTtcXG5cXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0fTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxcblxcdFxcdFxcdGNvbnRyb2xsZXI9e3tcXG5cXHRcXHRcXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRvcHRpb25zPXt7XFxuXFx0XFx0XFx0XFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcblxcdFxcdFxcdFxcdGFscGhhOiBmYWxzZSxcXG5cXHRcXHRcXHRcXHRhbnRpYWxpYXM6IHRydWUsXFxuXFx0XFx0XFx0XFx0cHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdHNldHRpbmdzPXt7XFxuXFx0XFx0XFx0XFx0c2l6ZToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwic2l6ZVxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDEyOCxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IDY0LFxcblxcdFxcdFxcdFxcdFxcdG1heDogNTEyLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHQvPlxcblxcdCk7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHRUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlckdpem1vLFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuXHRjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dDtcblx0aWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XG5cdFx0Y2FtZXJhLm5lYXIgPSAwLjE7XG5cdFx0Y2FtZXJhLmZhciA9IDEwO1xuXHR9XG5cdGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIuMiwgMi4yKTtcblx0Y29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpO1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KTtcblx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHsgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlIH0pO1xuXHRjb25zdCBtZXNoZXM6IFRnZFBhaW50ZXJNZXNoW10gPSBbXTtcblx0Y29uc3QgUyA9IDAuNjtcblx0Zm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XG5cdFx0Zm9yIChjb25zdCB5IG9mIFstUywgK1NdKSB7XG5cdFx0XHRtZXNoZXMucHVzaChcblx0XHRcdFx0bmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcblx0XHRcdFx0XHR1bmlmb3JtQ2FtZXJhLFxuXHRcdFx0XHRcdG1hdGVyaWFsLFxuXHRcdFx0XHRcdHRyYW5zZm86IHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBbeCwgeSwgMF0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRjb25zdCBnaXptbyA9IG5ldyBUZ2RQYWludGVyR2l6bW8oY29udGV4dCwgeyBzaXplOiAxMjggfSk7XG5cdGdpem1vLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+XG5cdFx0Y29uc29sZS5sb2coXCLwn5CeIFttYWluLmRlbW9ANDFdIGV2dCA9XCIsIGV2dCksXG5cdCk7XG5cdGNvbnRleHQuYWRkKFxuXHRcdGNsZWFyLFxuXHRcdCgpID0+IHtcblx0XHRcdHVuaWZvcm1DYW1lcmEudXBkYXRlRGF0YSgpO1xuXHRcdH0sXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogXCJsZXNzXCIsXG5cdFx0XHRjdWxsOiBcImJhY2tcIixcblx0XHRcdGNoaWxkcmVuOiBtZXNoZXMsXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogXCJvZmZcIixcblx0XHRcdGJsZW5kOiBcImFscGhhXCIsXG5cdFx0XHRjaGlsZHJlbjogW2dpem1vXSxcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wYWludCgpO1xuXHRyZXR1cm4gKHsgc2l6ZSB9OiB7IHNpemU6IG51bWJlciB9KSA9PiB7XG5cdFx0Z2l6bW8uc2l6ZSA9IHNpemU7XG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9O1xufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0ZGlzYWJsZURlZmF1bHREb3VibGVUYXBcblx0XHRcdGNvbnRyb2xsZXI9e3tcblx0XHRcdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdFx0fX1cblx0XHRcdG9wdGlvbnM9e3tcblx0XHRcdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdFx0XHRhbHBoYTogZmFsc2UsXG5cdFx0XHRcdGFudGlhbGlhczogdHJ1ZSxcblx0XHRcdFx0cHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSxcblx0XHRcdH19XG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHRzaXplOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwic2l6ZVwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxMjgsXG5cdFx0XHRcdFx0bWluOiA2NCxcblx0XHRcdFx0XHRtYXg6IDUxMixcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ2FtZXJhUGVyc3BlY3RpdmUiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyR2l6bW8iLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJjYW1lcmEiLCJfaW5zdGFuY2VvZiIsInVuaWZvcm1DYW1lcmEiLCJjbGVhciIsIm1hdGVyaWFsIiwibWVzaGVzIiwiUyIsIl9pdGVyIiwieCIsIl9pdGVyMSIsInkiLCJnaXptbyIsImV2dCIsImNvbnNvbGUiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQXcxQztBQUNuM0MsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osc0NBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUd0QyxrREFBQ04sdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FB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