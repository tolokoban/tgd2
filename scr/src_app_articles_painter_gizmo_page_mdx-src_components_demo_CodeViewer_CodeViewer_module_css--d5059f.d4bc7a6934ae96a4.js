"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_gizmo_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css--d5059f"], {
81006(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid-2x2.eb55dec2a09ac483.webp";

},
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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n\tconst { camera } = context\n\tif (camera instanceof TgdCameraPerspective) {\n\t\tcamera.near = 0.1\n\t\tcamera.far = 10\n\t}\n\tcamera.fitSpaceAtTarget(2.2, 2.2)\n\tconst uniformCamera = new TgdUniformBufferObjectCamera(context)\n\tconst clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n\tconst material = new TgdMaterialDiffuse({\n\t\tlockLightsToCamera: true,\n\t\tcolor: texture,\n\t})\n\tconst meshes: TgdPainterMesh[] = []\n\tconst S = 0.6\n\tfor (const x of [-S, +S]) {\n\t\tfor (const y of [-S, +S]) {\n\t\t\tfor (const z of [-S, +S]) {\n\t\t\t\tmeshes.push(\n\t\t\t\t\tnew TgdPainterMesh(context, {\n\t\t\t\t\t\tuniformCamera,\n\t\t\t\t\t\tmaterial,\n\t\t\t\t\t\ttransfo: {\n\t\t\t\t\t\t\tposition: [x, y, z],\n\t\t\t\t\t\t},\n\t\t\t\t\t}),\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}\n\tconst gizmo = new TgdPainterGizmo(context, { size: 128 })\n\tgizmo.eventTap.addListener((evt) =>\n\t\tconsole.log(\"🐞 [main.demo@41] evt =\", evt),\n\t)\n\tcontext.add(\n\t\tclear,\n\t\t() => {\n\t\t\tuniformCamera.updateData()\n\t\t},\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: meshes,\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"off\",\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [gizmo],\n\t\t}),\n\t)\n\tcontext.paint()\n\treturn ({\n\t\tsize,\n\t\talignY,\n\t\tresolution,\n\t}: {\n\t\tsize: number\n\t\talignY: number\n\t\tresolution: number\n\t}) => {\n\t\tgizmo.size = size\n\t\tgizmo.alignY = alignY\n\t\tcontext.resolution = resolution\n\t\tcontext.paint()\n\t}\n}"
};
var FULL = "import {\n\tTgdCameraPerspective,\n\ttype TgdContext,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterGizmo,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n\tTgdUniformBufferObjectCamera,\n} from \"@tolokoban/tgd\"\nimport TextureURL from \"@/assets/image/uv-grid-2x2.webp\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst { camera } = context\n\tif (camera instanceof TgdCameraPerspective) {\n\t\tcamera.near = 0.1\n\t\tcamera.far = 10\n\t}\n\tcamera.fitSpaceAtTarget(2.2, 2.2)\n\tconst uniformCamera = new TgdUniformBufferObjectCamera(context)\n\tconst clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n\tconst material = new TgdMaterialDiffuse({\n\t\tlockLightsToCamera: true,\n\t\tcolor: texture,\n\t})\n\tconst meshes: TgdPainterMesh[] = []\n\tconst S = 0.6\n\tfor (const x of [-S, +S]) {\n\t\tfor (const y of [-S, +S]) {\n\t\t\tfor (const z of [-S, +S]) {\n\t\t\t\tmeshes.push(\n\t\t\t\t\tnew TgdPainterMesh(context, {\n\t\t\t\t\t\tuniformCamera,\n\t\t\t\t\t\tmaterial,\n\t\t\t\t\t\ttransfo: {\n\t\t\t\t\t\t\tposition: [x, y, z],\n\t\t\t\t\t\t},\n\t\t\t\t\t}),\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}\n\tconst gizmo = new TgdPainterGizmo(context, { size: 128 })\n\tgizmo.eventTap.addListener((evt) =>\n\t\tconsole.log(\"🐞 [main.demo@41] evt =\", evt),\n\t)\n\tcontext.add(\n\t\tclear,\n\t\t() => {\n\t\t\tuniformCamera.updateData()\n\t\t},\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: meshes,\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"off\",\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [gizmo],\n\t\t}),\n\t)\n\tcontext.paint()\n\treturn ({\n\t\tsize,\n\t\talignY,\n\t\tresolution,\n\t}: {\n\t\tsize: number\n\t\talignY: number\n\t\tresolution: number\n\t}) => {\n\t\tgizmo.size = size\n\t\tgizmo.alignY = alignY\n\t\tcontext.resolution = resolution\n\t\tcontext.paint()\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 1000,\n\t\t\t}}\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t\talpha: false,\n\t\t\t\tantialias: true,\n\t\t\t\tpremultipliedAlpha: false,\n\t\t\t}}\n\t\t\tassets={{ image: { texture: TextureURL } }}\n\t\t\tsettings={{\n\t\t\t\tsize: {\n\t\t\t\t\tlabel: \"size\",\n\t\t\t\t\tvalue: 128,\n\t\t\t\t\tmin: 64,\n\t\t\t\t\tmax: 512,\n\t\t\t\t},\n\t\t\t\talignY: {\n\t\t\t\t\tlabel: \"alignY\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: -1,\n\t\t\t\t\tmax: +1,\n\t\t\t\t},\n\t\t\t\tresolution: {\n\t\t\t\t\tlabel: \"resolution\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: 0.1,\n\t\t\t\t\tmax: 2,\n\t\t\t\t\tstep: 0.1,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t)\n}\n";
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
/* import */ var _assets_image_uv_grid_2x2_webp__rspack_import_2 = __webpack_require__(81006);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(43475);
function _instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}




// #begin
function init(context, assets) {
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
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.texture);
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        lockLightsToCamera: true,
        color: texture
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
            for(var _i2 = 0, _iter2 = [
                -S,
                +S
            ]; _i2 < _iter2.length; _i2++){
                var z = _iter2[_i2];
                meshes.push(new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
                    uniformCamera: uniformCamera,
                    material: material,
                    transfo: {
                        position: [
                            x,
                            y,
                            z
                        ]
                    }
                }));
            }
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
        var size = param.size, alignY = param.alignY, resolution = param.resolution;
        gizmo.size = size;
        gizmo.alignY = alignY;
        context.resolution = resolution;
        context.paint();
    };
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_3["default"], {
        onReady: init,
        controller: {
            inertiaOrbit: 1000
        },
        options: {
            preserveDrawingBuffer: true,
            alpha: false,
            antialias: true,
            premultipliedAlpha: false
        },
        assets: {
            image: {
                texture: _assets_image_uv_grid_2x2_webp__rspack_import_2
            }
        },
        settings: {
            size: {
                label: "size",
                value: 128,
                min: 64,
                max: 512
            },
            alignY: {
                label: "alignY",
                value: 1,
                min: -1,
                max: +1
            },
            resolution: {
                label: "resolution",
                value: 1,
                min: 0.1,
                max: 2,
                step: 0.1
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/gizmo/_/main.demo/main.demo.tsx",
        lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9naXptb19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLS1kNTA1OWYuZDRiYzdhNjkzNGFlOTZhNC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2dpem1vL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9naXptby9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2dpem1vL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuXFx0aWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XFxuXFx0XFx0Y2FtZXJhLm5lYXIgPSAwLjFcXG5cXHRcXHRjYW1lcmEuZmFyID0gMTBcXG5cXHR9XFxuXFx0Y2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMi4yLCAyLjIpXFxuXFx0Y29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG5cXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS50ZXh0dXJlKVxcblxcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuXFx0XFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcblxcdFxcdGNvbG9yOiB0ZXh0dXJlLFxcblxcdH0pXFxuXFx0Y29uc3QgbWVzaGVzOiBUZ2RQYWludGVyTWVzaFtdID0gW11cXG5cXHRjb25zdCBTID0gMC42XFxuXFx0Zm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XFxuXFx0XFx0Zm9yIChjb25zdCB5IG9mIFstUywgK1NdKSB7XFxuXFx0XFx0XFx0Zm9yIChjb25zdCB6IG9mIFstUywgK1NdKSB7XFxuXFx0XFx0XFx0XFx0bWVzaGVzLnB1c2goXFxuXFx0XFx0XFx0XFx0XFx0bmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHRcXHRcXHR1bmlmb3JtQ2FtZXJhLFxcblxcdFxcdFxcdFxcdFxcdFxcdG1hdGVyaWFsLFxcblxcdFxcdFxcdFxcdFxcdFxcdHRyYW5zZm86IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogW3gsIHksIHpdLFxcblxcdFxcdFxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0XFx0KVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcdGNvbnN0IGdpem1vID0gbmV3IFRnZFBhaW50ZXJHaXptbyhjb250ZXh0LCB7IHNpemU6IDEyOCB9KVxcblxcdGdpem1vLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+XFxuXFx0XFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW21haW4uZGVtb0A0MV0gZXZ0ID1cXFwiLCBldnQpLFxcblxcdClcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHQoKSA9PiB7XFxuXFx0XFx0XFx0dW5pZm9ybUNhbWVyYS51cGRhdGVEYXRhKClcXG5cXHRcXHR9LFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuXFx0XFx0XFx0Y3VsbDogXFxcImJhY2tcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBtZXNoZXMsXFxuXFx0XFx0fSksXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0ZGVwdGg6IFxcXCJvZmZcXFwiLFxcblxcdFxcdFxcdGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbZ2l6bW9dLFxcblxcdFxcdH0pLFxcblxcdClcXG5cXHRjb250ZXh0LnBhaW50KClcXG5cXHRyZXR1cm4gKHtcXG5cXHRcXHRzaXplLFxcblxcdFxcdGFsaWduWSxcXG5cXHRcXHRyZXNvbHV0aW9uLFxcblxcdH06IHtcXG5cXHRcXHRzaXplOiBudW1iZXJcXG5cXHRcXHRhbGlnblk6IG51bWJlclxcblxcdFxcdHJlc29sdXRpb246IG51bWJlclxcblxcdH0pID0+IHtcXG5cXHRcXHRnaXptby5zaXplID0gc2l6ZVxcblxcdFxcdGdpem1vLmFsaWduWSA9IGFsaWduWVxcblxcdFxcdGNvbnRleHQucmVzb2x1dGlvbiA9IHJlc29sdXRpb25cXG5cXHRcXHRjb250ZXh0LnBhaW50KClcXG5cXHR9XFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHRUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyR2l6bW8sXFxuXFx0VGdkUGFpbnRlck1lc2gsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFRleHR1cmUyRCxcXG5cXHRUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFRleHR1cmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvaW1hZ2UvdXYtZ3JpZC0yeDIud2VicFxcXCJcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuXFx0aWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XFxuXFx0XFx0Y2FtZXJhLm5lYXIgPSAwLjFcXG5cXHRcXHRjYW1lcmEuZmFyID0gMTBcXG5cXHR9XFxuXFx0Y2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMi4yLCAyLjIpXFxuXFx0Y29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG5cXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS50ZXh0dXJlKVxcblxcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuXFx0XFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcblxcdFxcdGNvbG9yOiB0ZXh0dXJlLFxcblxcdH0pXFxuXFx0Y29uc3QgbWVzaGVzOiBUZ2RQYWludGVyTWVzaFtdID0gW11cXG5cXHRjb25zdCBTID0gMC42XFxuXFx0Zm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XFxuXFx0XFx0Zm9yIChjb25zdCB5IG9mIFstUywgK1NdKSB7XFxuXFx0XFx0XFx0Zm9yIChjb25zdCB6IG9mIFstUywgK1NdKSB7XFxuXFx0XFx0XFx0XFx0bWVzaGVzLnB1c2goXFxuXFx0XFx0XFx0XFx0XFx0bmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHRcXHRcXHR1bmlmb3JtQ2FtZXJhLFxcblxcdFxcdFxcdFxcdFxcdFxcdG1hdGVyaWFsLFxcblxcdFxcdFxcdFxcdFxcdFxcdHRyYW5zZm86IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogW3gsIHksIHpdLFxcblxcdFxcdFxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0XFx0KVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcdGNvbnN0IGdpem1vID0gbmV3IFRnZFBhaW50ZXJHaXptbyhjb250ZXh0LCB7IHNpemU6IDEyOCB9KVxcblxcdGdpem1vLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+XFxuXFx0XFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW21haW4uZGVtb0A0MV0gZXZ0ID1cXFwiLCBldnQpLFxcblxcdClcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHQoKSA9PiB7XFxuXFx0XFx0XFx0dW5pZm9ybUNhbWVyYS51cGRhdGVEYXRhKClcXG5cXHRcXHR9LFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuXFx0XFx0XFx0Y3VsbDogXFxcImJhY2tcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBtZXNoZXMsXFxuXFx0XFx0fSksXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0ZGVwdGg6IFxcXCJvZmZcXFwiLFxcblxcdFxcdFxcdGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbZ2l6bW9dLFxcblxcdFxcdH0pLFxcblxcdClcXG5cXHRjb250ZXh0LnBhaW50KClcXG5cXHRyZXR1cm4gKHtcXG5cXHRcXHRzaXplLFxcblxcdFxcdGFsaWduWSxcXG5cXHRcXHRyZXNvbHV0aW9uLFxcblxcdH06IHtcXG5cXHRcXHRzaXplOiBudW1iZXJcXG5cXHRcXHRhbGlnblk6IG51bWJlclxcblxcdFxcdHJlc29sdXRpb246IG51bWJlclxcblxcdH0pID0+IHtcXG5cXHRcXHRnaXptby5zaXplID0gc2l6ZVxcblxcdFxcdGdpem1vLmFsaWduWSA9IGFsaWduWVxcblxcdFxcdGNvbnRleHQucmVzb2x1dGlvbiA9IHJlc29sdXRpb25cXG5cXHRcXHRjb250ZXh0LnBhaW50KClcXG5cXHR9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0Y29udHJvbGxlcj17e1xcblxcdFxcdFxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdG9wdGlvbnM9e3tcXG5cXHRcXHRcXHRcXHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuXFx0XFx0XFx0XFx0YWxwaGE6IGZhbHNlLFxcblxcdFxcdFxcdFxcdGFudGlhbGlhczogdHJ1ZSxcXG5cXHRcXHRcXHRcXHRwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlLFxcblxcdFxcdFxcdH19XFxuXFx0XFx0XFx0YXNzZXRzPXt7IGltYWdlOiB7IHRleHR1cmU6IFRleHR1cmVVUkwgfSB9fVxcblxcdFxcdFxcdHNldHRpbmdzPXt7XFxuXFx0XFx0XFx0XFx0c2l6ZToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwic2l6ZVxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDEyOCxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IDY0LFxcblxcdFxcdFxcdFxcdFxcdG1heDogNTEyLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0YWxpZ25ZOiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJhbGlnbllcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogLTEsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiArMSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHJlc29sdXRpb246IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcInJlc29sdXRpb25cXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogMC4xLFxcblxcdFxcdFxcdFxcdFxcdG1heDogMixcXG5cXHRcXHRcXHRcXHRcXHRzdGVwOiAwLjEsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0VGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJHaXptbyxcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxuXHRUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFRleHR1cmVVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL3V2LWdyaWQtMngyLndlYnBcIlxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHRjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxuXHRpZiAoY2FtZXJhIGluc3RhbmNlb2YgVGdkQ2FtZXJhUGVyc3BlY3RpdmUpIHtcblx0XHRjYW1lcmEubmVhciA9IDAuMVxuXHRcdGNhbWVyYS5mYXIgPSAxMFxuXHR9XG5cdGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIuMiwgMi4yKVxuXHRjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcblx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UudGV4dHVyZSlcblx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcblx0XHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG5cdFx0Y29sb3I6IHRleHR1cmUsXG5cdH0pXG5cdGNvbnN0IG1lc2hlczogVGdkUGFpbnRlck1lc2hbXSA9IFtdXG5cdGNvbnN0IFMgPSAwLjZcblx0Zm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XG5cdFx0Zm9yIChjb25zdCB5IG9mIFstUywgK1NdKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHogb2YgWy1TLCArU10pIHtcblx0XHRcdFx0bWVzaGVzLnB1c2goXG5cdFx0XHRcdFx0bmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcblx0XHRcdFx0XHRcdHVuaWZvcm1DYW1lcmEsXG5cdFx0XHRcdFx0XHRtYXRlcmlhbCxcblx0XHRcdFx0XHRcdHRyYW5zZm86IHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IFt4LCB5LCB6XSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y29uc3QgZ2l6bW8gPSBuZXcgVGdkUGFpbnRlckdpem1vKGNvbnRleHQsIHsgc2l6ZTogMTI4IH0pXG5cdGdpem1vLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+XG5cdFx0Y29uc29sZS5sb2coXCLwn5CeIFttYWluLmRlbW9ANDFdIGV2dCA9XCIsIGV2dCksXG5cdClcblx0Y29udGV4dC5hZGQoXG5cdFx0Y2xlYXIsXG5cdFx0KCkgPT4ge1xuXHRcdFx0dW5pZm9ybUNhbWVyYS51cGRhdGVEYXRhKClcblx0XHR9LFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IFwibGVzc1wiLFxuXHRcdFx0Y3VsbDogXCJiYWNrXCIsXG5cdFx0XHRjaGlsZHJlbjogbWVzaGVzLFxuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IFwib2ZmXCIsXG5cdFx0XHRibGVuZDogXCJhbHBoYVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtnaXptb10sXG5cdFx0fSksXG5cdClcblx0Y29udGV4dC5wYWludCgpXG5cdHJldHVybiAoe1xuXHRcdHNpemUsXG5cdFx0YWxpZ25ZLFxuXHRcdHJlc29sdXRpb24sXG5cdH06IHtcblx0XHRzaXplOiBudW1iZXJcblx0XHRhbGlnblk6IG51bWJlclxuXHRcdHJlc29sdXRpb246IG51bWJlclxuXHR9KSA9PiB7XG5cdFx0Z2l6bW8uc2l6ZSA9IHNpemVcblx0XHRnaXptby5hbGlnblkgPSBhbGlnbllcblx0XHRjb250ZXh0LnJlc29sdXRpb24gPSByZXNvbHV0aW9uXG5cdFx0Y29udGV4dC5wYWludCgpXG5cdH1cbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGNvbnRyb2xsZXI9e3tcblx0XHRcdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdFx0fX1cblx0XHRcdG9wdGlvbnM9e3tcblx0XHRcdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdFx0XHRhbHBoYTogZmFsc2UsXG5cdFx0XHRcdGFudGlhbGlhczogdHJ1ZSxcblx0XHRcdFx0cHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSxcblx0XHRcdH19XG5cdFx0XHRhc3NldHM9e3sgaW1hZ2U6IHsgdGV4dHVyZTogVGV4dHVyZVVSTCB9IH19XG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHRzaXplOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwic2l6ZVwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxMjgsXG5cdFx0XHRcdFx0bWluOiA2NCxcblx0XHRcdFx0XHRtYXg6IDUxMixcblx0XHRcdFx0fSxcblx0XHRcdFx0YWxpZ25ZOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwiYWxpZ25ZXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0bWluOiAtMSxcblx0XHRcdFx0XHRtYXg6ICsxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZXNvbHV0aW9uOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwicmVzb2x1dGlvblwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHRcdG1pbjogMC4xLFxuXHRcdFx0XHRcdG1heDogMixcblx0XHRcdFx0XHRzdGVwOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdClcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ2FtZXJhUGVyc3BlY3RpdmUiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyR2l6bW8iLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEiLCJUZXh0dXJlVVJMIiwiVmlldyIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2FtZXJhIiwiX2luc3RhbmNlb2YiLCJ1bmlmb3JtQ2FtZXJhIiwiY2xlYXIiLCJ0ZXh0dXJlIiwibWF0ZXJpYWwiLCJtZXNoZXMiLCJTIiwiX2l0ZXIiLCJ4IiwiX2l0ZXIxIiwieSIsIl9pdGVyMiIsInoiLCJnaXptbyIsImV2dCIsImNvbnNvbGUiLCJzaXplIiwiYWxpZ25ZIiwicmVzb2x1dGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDdkI7QUFFOUIsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBMnBEO0FBQ3RyRCxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxX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