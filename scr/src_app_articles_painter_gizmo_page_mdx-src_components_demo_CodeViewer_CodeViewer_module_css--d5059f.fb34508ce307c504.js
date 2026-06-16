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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n\tconst { camera } = context\n\tif (camera instanceof TgdCameraPerspective) {\n\t\tcamera.near = 0.1\n\t\tcamera.far = 10\n\t}\n\tcamera.fitSpaceAtTarget(2.2, 2.2)\n\tconst uniformCamera = new TgdUniformBufferObjectCamera(context)\n\tconst clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n\tconst material = new TgdMaterialDiffuse({\n\t\tlockLightsToCamera: true,\n\t\tcolor: texture,\n\t\tambient: new TgdLight({\n\t\t\tcolor: [0.5, 0.4, 0.3, 1],\n\t\t}),\n\t})\n\tconst meshes: TgdPainterMesh[] = []\n\tconst S = 0.6\n\tfor (const x of [-S, +S]) {\n\t\tfor (const y of [-S, +S]) {\n\t\t\tfor (const z of [-S, +S]) {\n\t\t\t\tmeshes.push(\n\t\t\t\t\tnew TgdPainterMesh(context, {\n\t\t\t\t\t\tuniformCamera,\n\t\t\t\t\t\tmaterial,\n\t\t\t\t\t\ttransfo: {\n\t\t\t\t\t\t\tposition: [x, y, z],\n\t\t\t\t\t\t},\n\t\t\t\t\t}),\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}\n\tconst gizmo = new TgdPainterGizmo(context, { size: 128 })\n\tgizmo.eventTap.addListener((evt) =>\n\t\tconsole.log(\"🐞 [main.demo@41] evt =\", evt),\n\t)\n\tcontext.add(\n\t\tclear,\n\t\t() => {\n\t\t\tuniformCamera.updateData()\n\t\t},\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: meshes,\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"off\",\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [gizmo],\n\t\t}),\n\t)\n\tcontext.paint()\n\n\treturn ({\n\t\tsize,\n\t\talignY,\n\t\tresolution,\n\t}: {\n\t\tsize: number\n\t\talignY: number\n\t\tresolution: number\n\t}) => {\n\t\tgizmo.size = size\n\t\tgizmo.alignY = alignY\n\t\tcontext.resolution = resolution\n\t\tcontext.paint()\n\t}\n}"
};
var FULL = "import {\n\tTgdCameraPerspective,\n\ttype TgdContext,\n\tTgdLight,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterGizmo,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n\tTgdUniformBufferObjectCamera,\n\ttgdCalcMapRange,\n} from \"@tolokoban/tgd\"\nimport TextureURL from \"@/assets/image/uv-grid-2x2.webp\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst { camera } = context\n\tif (camera instanceof TgdCameraPerspective) {\n\t\tcamera.near = 0.1\n\t\tcamera.far = 10\n\t}\n\tcamera.fitSpaceAtTarget(2.2, 2.2)\n\tconst uniformCamera = new TgdUniformBufferObjectCamera(context)\n\tconst clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n\tconst material = new TgdMaterialDiffuse({\n\t\tlockLightsToCamera: true,\n\t\tcolor: texture,\n\t\tambient: new TgdLight({\n\t\t\tcolor: [0.5, 0.4, 0.3, 1],\n\t\t}),\n\t})\n\tconst meshes: TgdPainterMesh[] = []\n\tconst S = 0.6\n\tfor (const x of [-S, +S]) {\n\t\tfor (const y of [-S, +S]) {\n\t\t\tfor (const z of [-S, +S]) {\n\t\t\t\tmeshes.push(\n\t\t\t\t\tnew TgdPainterMesh(context, {\n\t\t\t\t\t\tuniformCamera,\n\t\t\t\t\t\tmaterial,\n\t\t\t\t\t\ttransfo: {\n\t\t\t\t\t\t\tposition: [x, y, z],\n\t\t\t\t\t\t},\n\t\t\t\t\t}),\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}\n\tconst gizmo = new TgdPainterGizmo(context, { size: 128 })\n\tgizmo.eventTap.addListener((evt) =>\n\t\tconsole.log(\"🐞 [main.demo@41] evt =\", evt),\n\t)\n\tcontext.add(\n\t\tclear,\n\t\t() => {\n\t\t\tuniformCamera.updateData()\n\t\t},\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: meshes,\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"off\",\n\t\t\tblend: \"alpha\",\n\t\t\tchildren: [gizmo],\n\t\t}),\n\t)\n\tcontext.paint()\n\n\treturn ({\n\t\tsize,\n\t\talignY,\n\t\tresolution,\n\t}: {\n\t\tsize: number\n\t\talignY: number\n\t\tresolution: number\n\t}) => {\n\t\tgizmo.size = size\n\t\tgizmo.alignY = alignY\n\t\tcontext.resolution = resolution\n\t\tcontext.paint()\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 1000,\n\t\t\t}}\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t\talpha: false,\n\t\t\t\tantialias: true,\n\t\t\t\tpremultipliedAlpha: false,\n\t\t\t}}\n\t\t\tassets={{ image: { texture: TextureURL } }}\n\t\t\tsettings={{\n\t\t\t\tsize: {\n\t\t\t\t\tlabel: \"size\",\n\t\t\t\t\tvalue: 128,\n\t\t\t\t\tmin: 64,\n\t\t\t\t\tmax: 512,\n\t\t\t\t},\n\t\t\t\talignY: {\n\t\t\t\t\tlabel: \"alignY\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: -1,\n\t\t\t\t\tmax: +1,\n\t\t\t\t},\n\t\t\t\tresolution: {\n\t\t\t\t\tlabel: \"resolution\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: 0.1,\n\t\t\t\t\tmax: 2,\n\t\t\t\t\tstep: 0.1,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t)\n}\n";
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
        color: texture,
        ambient: new _tolokoban_tgd__rspack_import_1.TgdLight({
            color: [
                0.5,
                0.4,
                0.3,
                1
            ]
        })
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
        lineNumber: 93,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9naXptb19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLS1kNTA1OWYuZmIzNDUwOGNlMzA3YzUwNC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2dpem1vL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9naXptby9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2dpem1vL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuXFx0aWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XFxuXFx0XFx0Y2FtZXJhLm5lYXIgPSAwLjFcXG5cXHRcXHRjYW1lcmEuZmFyID0gMTBcXG5cXHR9XFxuXFx0Y2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMi4yLCAyLjIpXFxuXFx0Y29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG5cXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS50ZXh0dXJlKVxcblxcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuXFx0XFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcblxcdFxcdGNvbG9yOiB0ZXh0dXJlLFxcblxcdFxcdGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuXFx0XFx0XFx0Y29sb3I6IFswLjUsIDAuNCwgMC4zLCAxXSxcXG5cXHRcXHR9KSxcXG5cXHR9KVxcblxcdGNvbnN0IG1lc2hlczogVGdkUGFpbnRlck1lc2hbXSA9IFtdXFxuXFx0Y29uc3QgUyA9IDAuNlxcblxcdGZvciAoY29uc3QgeCBvZiBbLVMsICtTXSkge1xcblxcdFxcdGZvciAoY29uc3QgeSBvZiBbLVMsICtTXSkge1xcblxcdFxcdFxcdGZvciAoY29uc3QgeiBvZiBbLVMsICtTXSkge1xcblxcdFxcdFxcdFxcdG1lc2hlcy5wdXNoKFxcblxcdFxcdFxcdFxcdFxcdG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0dW5pZm9ybUNhbWVyYSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXRlcmlhbCxcXG5cXHRcXHRcXHRcXHRcXHRcXHR0cmFuc2ZvOiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IFt4LCB5LCB6XSxcXG5cXHRcXHRcXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdFxcdClcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRjb25zdCBnaXptbyA9IG5ldyBUZ2RQYWludGVyR2l6bW8oY29udGV4dCwgeyBzaXplOiAxMjggfSlcXG5cXHRnaXptby5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PlxcblxcdFxcdGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYWluLmRlbW9ANDFdIGV2dCA9XFxcIiwgZXZ0KSxcXG5cXHQpXFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0Y2xlYXIsXFxuXFx0XFx0KCkgPT4ge1xcblxcdFxcdFxcdHVuaWZvcm1DYW1lcmEudXBkYXRlRGF0YSgpXFxuXFx0XFx0fSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRkZXB0aDogXFxcImxlc3NcXFwiLFxcblxcdFxcdFxcdGN1bGw6IFxcXCJiYWNrXFxcIixcXG5cXHRcXHRcXHRjaGlsZHJlbjogbWVzaGVzLFxcblxcdFxcdH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiBcXFwib2ZmXFxcIixcXG5cXHRcXHRcXHRibGVuZDogXFxcImFscGhhXFxcIixcXG5cXHRcXHRcXHRjaGlsZHJlbjogW2dpem1vXSxcXG5cXHRcXHR9KSxcXG5cXHQpXFxuXFx0Y29udGV4dC5wYWludCgpXFxuXFxuXFx0cmV0dXJuICh7XFxuXFx0XFx0c2l6ZSxcXG5cXHRcXHRhbGlnblksXFxuXFx0XFx0cmVzb2x1dGlvbixcXG5cXHR9OiB7XFxuXFx0XFx0c2l6ZTogbnVtYmVyXFxuXFx0XFx0YWxpZ25ZOiBudW1iZXJcXG5cXHRcXHRyZXNvbHV0aW9uOiBudW1iZXJcXG5cXHR9KSA9PiB7XFxuXFx0XFx0Z2l6bW8uc2l6ZSA9IHNpemVcXG5cXHRcXHRnaXptby5hbGlnblkgPSBhbGlnbllcXG5cXHRcXHRjb250ZXh0LnJlc29sdXRpb24gPSByZXNvbHV0aW9uXFxuXFx0XFx0Y29udGV4dC5wYWludCgpXFxuXFx0fVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0VGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZExpZ2h0LFxcblxcdFRnZE1hdGVyaWFsRGlmZnVzZSxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlckdpem1vLFxcblxcdFRnZFBhaW50ZXJNZXNoLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxuXFx0VGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcXG5cXHR0Z2RDYWxjTWFwUmFuZ2UsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgVGV4dHVyZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLTJ4Mi53ZWJwXFxcIlxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG5cXHRpZiAoY2FtZXJhIGluc3RhbmNlb2YgVGdkQ2FtZXJhUGVyc3BlY3RpdmUpIHtcXG5cXHRcXHRjYW1lcmEubmVhciA9IDAuMVxcblxcdFxcdGNhbWVyYS5mYXIgPSAxMFxcblxcdH1cXG5cXHRjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLjIsIDIuMilcXG5cXHRjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KVxcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLnRleHR1cmUpXFxuXFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuXFx0XFx0Y29sb3I6IHRleHR1cmUsXFxuXFx0XFx0YW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG5cXHRcXHRcXHRjb2xvcjogWzAuNSwgMC40LCAwLjMsIDFdLFxcblxcdFxcdH0pLFxcblxcdH0pXFxuXFx0Y29uc3QgbWVzaGVzOiBUZ2RQYWludGVyTWVzaFtdID0gW11cXG5cXHRjb25zdCBTID0gMC42XFxuXFx0Zm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XFxuXFx0XFx0Zm9yIChjb25zdCB5IG9mIFstUywgK1NdKSB7XFxuXFx0XFx0XFx0Zm9yIChjb25zdCB6IG9mIFstUywgK1NdKSB7XFxuXFx0XFx0XFx0XFx0bWVzaGVzLnB1c2goXFxuXFx0XFx0XFx0XFx0XFx0bmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHRcXHRcXHR1bmlmb3JtQ2FtZXJhLFxcblxcdFxcdFxcdFxcdFxcdFxcdG1hdGVyaWFsLFxcblxcdFxcdFxcdFxcdFxcdFxcdHRyYW5zZm86IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogW3gsIHksIHpdLFxcblxcdFxcdFxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0XFx0KVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcdGNvbnN0IGdpem1vID0gbmV3IFRnZFBhaW50ZXJHaXptbyhjb250ZXh0LCB7IHNpemU6IDEyOCB9KVxcblxcdGdpem1vLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+XFxuXFx0XFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW21haW4uZGVtb0A0MV0gZXZ0ID1cXFwiLCBldnQpLFxcblxcdClcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHQoKSA9PiB7XFxuXFx0XFx0XFx0dW5pZm9ybUNhbWVyYS51cGRhdGVEYXRhKClcXG5cXHRcXHR9LFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuXFx0XFx0XFx0Y3VsbDogXFxcImJhY2tcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBtZXNoZXMsXFxuXFx0XFx0fSksXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0ZGVwdGg6IFxcXCJvZmZcXFwiLFxcblxcdFxcdFxcdGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbZ2l6bW9dLFxcblxcdFxcdH0pLFxcblxcdClcXG5cXHRjb250ZXh0LnBhaW50KClcXG5cXG5cXHRyZXR1cm4gKHtcXG5cXHRcXHRzaXplLFxcblxcdFxcdGFsaWduWSxcXG5cXHRcXHRyZXNvbHV0aW9uLFxcblxcdH06IHtcXG5cXHRcXHRzaXplOiBudW1iZXJcXG5cXHRcXHRhbGlnblk6IG51bWJlclxcblxcdFxcdHJlc29sdXRpb246IG51bWJlclxcblxcdH0pID0+IHtcXG5cXHRcXHRnaXptby5zaXplID0gc2l6ZVxcblxcdFxcdGdpem1vLmFsaWduWSA9IGFsaWduWVxcblxcdFxcdGNvbnRleHQucmVzb2x1dGlvbiA9IHJlc29sdXRpb25cXG5cXHRcXHRjb250ZXh0LnBhaW50KClcXG5cXHR9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0Y29udHJvbGxlcj17e1xcblxcdFxcdFxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdG9wdGlvbnM9e3tcXG5cXHRcXHRcXHRcXHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuXFx0XFx0XFx0XFx0YWxwaGE6IGZhbHNlLFxcblxcdFxcdFxcdFxcdGFudGlhbGlhczogdHJ1ZSxcXG5cXHRcXHRcXHRcXHRwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlLFxcblxcdFxcdFxcdH19XFxuXFx0XFx0XFx0YXNzZXRzPXt7IGltYWdlOiB7IHRleHR1cmU6IFRleHR1cmVVUkwgfSB9fVxcblxcdFxcdFxcdHNldHRpbmdzPXt7XFxuXFx0XFx0XFx0XFx0c2l6ZToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwic2l6ZVxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDEyOCxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IDY0LFxcblxcdFxcdFxcdFxcdFxcdG1heDogNTEyLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0YWxpZ25ZOiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJhbGlnbllcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogLTEsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiArMSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHJlc29sdXRpb246IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcInJlc29sdXRpb25cXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogMC4xLFxcblxcdFxcdFxcdFxcdFxcdG1heDogMixcXG5cXHRcXHRcXHRcXHRcXHRzdGVwOiAwLjEsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0VGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkTGlnaHQsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyR2l6bW8sXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcblx0VGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcblx0dGdkQ2FsY01hcFJhbmdlLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFRleHR1cmVVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL3V2LWdyaWQtMngyLndlYnBcIlxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHRjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxuXHRpZiAoY2FtZXJhIGluc3RhbmNlb2YgVGdkQ2FtZXJhUGVyc3BlY3RpdmUpIHtcblx0XHRjYW1lcmEubmVhciA9IDAuMVxuXHRcdGNhbWVyYS5mYXIgPSAxMFxuXHR9XG5cdGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIuMiwgMi4yKVxuXHRjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSlcblx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UudGV4dHVyZSlcblx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcblx0XHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG5cdFx0Y29sb3I6IHRleHR1cmUsXG5cdFx0YW1iaWVudDogbmV3IFRnZExpZ2h0KHtcblx0XHRcdGNvbG9yOiBbMC41LCAwLjQsIDAuMywgMV0sXG5cdFx0fSksXG5cdH0pXG5cdGNvbnN0IG1lc2hlczogVGdkUGFpbnRlck1lc2hbXSA9IFtdXG5cdGNvbnN0IFMgPSAwLjZcblx0Zm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XG5cdFx0Zm9yIChjb25zdCB5IG9mIFstUywgK1NdKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHogb2YgWy1TLCArU10pIHtcblx0XHRcdFx0bWVzaGVzLnB1c2goXG5cdFx0XHRcdFx0bmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcblx0XHRcdFx0XHRcdHVuaWZvcm1DYW1lcmEsXG5cdFx0XHRcdFx0XHRtYXRlcmlhbCxcblx0XHRcdFx0XHRcdHRyYW5zZm86IHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IFt4LCB5LCB6XSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y29uc3QgZ2l6bW8gPSBuZXcgVGdkUGFpbnRlckdpem1vKGNvbnRleHQsIHsgc2l6ZTogMTI4IH0pXG5cdGdpem1vLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+XG5cdFx0Y29uc29sZS5sb2coXCLwn5CeIFttYWluLmRlbW9ANDFdIGV2dCA9XCIsIGV2dCksXG5cdClcblx0Y29udGV4dC5hZGQoXG5cdFx0Y2xlYXIsXG5cdFx0KCkgPT4ge1xuXHRcdFx0dW5pZm9ybUNhbWVyYS51cGRhdGVEYXRhKClcblx0XHR9LFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IFwibGVzc1wiLFxuXHRcdFx0Y3VsbDogXCJiYWNrXCIsXG5cdFx0XHRjaGlsZHJlbjogbWVzaGVzLFxuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IFwib2ZmXCIsXG5cdFx0XHRibGVuZDogXCJhbHBoYVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtnaXptb10sXG5cdFx0fSksXG5cdClcblx0Y29udGV4dC5wYWludCgpXG5cblx0cmV0dXJuICh7XG5cdFx0c2l6ZSxcblx0XHRhbGlnblksXG5cdFx0cmVzb2x1dGlvbixcblx0fToge1xuXHRcdHNpemU6IG51bWJlclxuXHRcdGFsaWduWTogbnVtYmVyXG5cdFx0cmVzb2x1dGlvbjogbnVtYmVyXG5cdH0pID0+IHtcblx0XHRnaXptby5zaXplID0gc2l6ZVxuXHRcdGdpem1vLmFsaWduWSA9IGFsaWduWVxuXHRcdGNvbnRleHQucmVzb2x1dGlvbiA9IHJlc29sdXRpb25cblx0XHRjb250ZXh0LnBhaW50KClcblx0fVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0Y29udHJvbGxlcj17e1xuXHRcdFx0XHRpbmVydGlhT3JiaXQ6IDEwMDAsXG5cdFx0XHR9fVxuXHRcdFx0b3B0aW9ucz17e1xuXHRcdFx0XHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG5cdFx0XHRcdGFscGhhOiBmYWxzZSxcblx0XHRcdFx0YW50aWFsaWFzOiB0cnVlLFxuXHRcdFx0XHRwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlLFxuXHRcdFx0fX1cblx0XHRcdGFzc2V0cz17eyBpbWFnZTogeyB0ZXh0dXJlOiBUZXh0dXJlVVJMIH0gfX1cblx0XHRcdHNldHRpbmdzPXt7XG5cdFx0XHRcdHNpemU6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJzaXplXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEyOCxcblx0XHRcdFx0XHRtaW46IDY0LFxuXHRcdFx0XHRcdG1heDogNTEyLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGlnblk6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJhbGlnbllcIixcblx0XHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdFx0XHRtaW46IC0xLFxuXHRcdFx0XHRcdG1heDogKzEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJlc29sdXRpb246IHtcblx0XHRcdFx0XHRsYWJlbDogXCJyZXNvbHV0aW9uXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0bWluOiAwLjEsXG5cdFx0XHRcdFx0bWF4OiAyLFxuXHRcdFx0XHRcdHN0ZXA6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZExpZ2h0IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckdpem1vIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhIiwiVGV4dHVyZVVSTCIsIlZpZXciLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNhbWVyYSIsIl9pbnN0YW5jZW9mIiwidW5pZm9ybUNhbWVyYSIsImNsZWFyIiwidGV4dHVyZSIsIm1hdGVyaWFsIiwibWVzaGVzIiwiUyIsIl9pdGVyIiwieCIsIl9pdGVyMSIsInkiLCJfaXRlcjIiLCJ6IiwiZ2l6bW8iLCJldnQiLCJjb25zb2xlIiwic2l6ZSIsImFsaWduWSIsInJlc29sdXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQXF1RDtBQUNod0QsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osc0NBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUd0QyxrREFBQ04sdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FBT00sT0FBT0gsT0FBT0Q7Ozs7Ozs7Ozs7Ozs7O0FBRzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnVCO0FBQ2lDO0FBQ0o7QUFFcEQsU0FBUztBQUNULFNBQVNrQixLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQ2hELElBQVFDLFNBQVdGLFFBQVhFO0lBQ1IsSUFBVUMsWUFBTkQsUUFBa0JkLG9EQUFvQkEsR0FBRTtRQUMzQ2MsT0FBTyxJQUFJLEdBQUc7UUFDZEEsT0FBTyxHQUFHLEdBQUc7SUFDZDtJQUNBQSxPQUFPLGdCQUFnQixDQUFDLEtBQUs7SUFDN0IsSUFBTUUsZ0JBQWdCLElBQUlSLDREQUE0QkEsQ0FBQ0k7SUFDdkQsSUFBTUssUUFBUSxJQUFJZCwrQ0FBZUEsQ0FBQ1MsU0FBUztRQUFFLE9BQU87WUFBQztZQUFHO1lBQUc7WUFBRztT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