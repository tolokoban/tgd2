"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_framebuffer_example1_page_mdx-src_components_demo_CodeViewer_CodeVie-cccaef"], {
44859(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/dino.5737266deb4973e5.webp";

},
35345(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/logo.8161e4d2b18544f6.glb";

},
51177(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_mesh_logo_glb__rspack_import_3 = __webpack_require__(35345);
/* import */ var _assets_image_dino_webp__rspack_import_4 = __webpack_require__(44859);





function init(context, assets) {
    var _framebuffer2_textureColor0, _framebuffer1_textureColor0, _framebuffer1_textureColor01;
    // #begin
    var defaultTexture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context);
    context.camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective({
        transfo: {
            distance: 6
        },
        far: 100,
        near: 0.01,
        fovy: Math.PI / 4,
        zoom: 1
    });
    var framebuffer1 = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        textureColor0: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context)
    });
    var framebuffer2 = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        textureColor0: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context)
    });
    var background = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        texture: (_framebuffer2_textureColor0 = framebuffer2.textureColor0) !== null && _framebuffer2_textureColor0 !== void 0 ? _framebuffer2_textureColor0 : defaultTexture,
        filters: [
            new _tolokoban_tgd__rspack_import_1.TgdFilterZoom()
        ],
        flipY: true
    });
    var painter = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back,
        children: [
            background,
            new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
                depth: 1
            }),
            new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
                asset: assets.glb.mesh,
                material: function material() {
                    return new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
                        color: new _tolokoban_tgd__rspack_import_1.TgdVec4(1, 0.666, 0),
                        specularExponent: 5,
                        specularIntensity: 2.5,
                        light: new _tolokoban_tgd__rspack_import_1.TgdLight({
                            color: new _tolokoban_tgd__rspack_import_1.TgdVec4(1, 1, 1, 1),
                            direction: new _tolokoban_tgd__rspack_import_1.TgdVec3(1, 0, 0)
                        }),
                        ambient: new _tolokoban_tgd__rspack_import_1.TgdLight({
                            color: new _tolokoban_tgd__rspack_import_1.TgdVec4(0.111, 0.333, 0.999, 4)
                        })
                    });
                }
            })
        ]
    });
    framebuffer1.add(painter);
    var filterHue = new _tolokoban_tgd__rspack_import_1.TgdFilterHueRotation({
        hueShiftInDegrees: 2
    });
    var filterZoom = new _tolokoban_tgd__rspack_import_1.TgdFilterZoom({
        zoom: 1.007
    });
    var filters = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        texture: (_framebuffer1_textureColor0 = framebuffer1.textureColor0) !== null && _framebuffer1_textureColor0 !== void 0 ? _framebuffer1_textureColor0 : defaultTexture,
        filters: [
            filterHue,
            filterZoom
        ],
        flipY: true
    });
    framebuffer2.add(filters);
    var screen = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        texture: (_framebuffer1_textureColor01 = framebuffer1.textureColor0) !== null && _framebuffer1_textureColor01 !== void 0 ? _framebuffer1_textureColor01 : defaultTexture,
        filters: [
            new _tolokoban_tgd__rspack_import_1.TgdFilterZoom()
        ],
        flipY: true
    });
    context.add(framebuffer1, framebuffer2, screen, new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time) {
        var camera = context.camera;
        camera.transfo.orbitAroundX(Math.sin(time * 0.005045) * 0.03);
        camera.transfo.orbitAroundY(Math.sin(time * 0.001751) * 0.02);
        filterZoom.translation.x = 0.005 * Math.sin(time * 0.0024581);
        filterZoom.translation.y = 0.005 * Math.sin(time * 0.0037151);
    }));
    context.play();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        assets: {
            glb: {
                mesh: _assets_mesh_logo_glb__rspack_import_3
            },
            image: {
                background: _assets_image_dino_webp__rspack_import_4
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/framebuffer.demo.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, this);
}


},
28537(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _framebuffer_demo__rspack_import_4 = __webpack_require__(51177);
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
    "Detail #1": "\tconst defaultTexture = new TgdTexture2D(context);\n\tcontext.camera = new TgdCameraPerspective({\n\t\ttransfo: { distance: 6 },\n\t\tfar: 100,\n\t\tnear: 0.01,\n\t\tfovy: Math.PI / 4,\n\t\tzoom: 1,\n\t});\n\tconst framebuffer1 = new TgdPainterFramebuffer(context, {\n\t\ttextureColor0: new TgdTexture2D(context),\n\t});\n\tconst framebuffer2 = new TgdPainterFramebuffer(context, {\n\t\ttextureColor0: new TgdTexture2D(context),\n\t});\n\tconst background = new TgdPainterFilter(context, {\n\t\ttexture: framebuffer2.textureColor0 ?? defaultTexture,\n\t\tfilters: [new TgdFilterZoom()],\n\t\tflipY: true,\n\t});\n\tconst painter = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tcull: webglPresetCull.back,\n\t\tchildren: [\n\t\t\tbackground,\n\t\t\tnew TgdPainterClear(context, {\n\t\t\t\tdepth: 1,\n\t\t\t}),\n\t\t\tnew TgdPainterMeshGltf(context, {\n\t\t\t\tasset: assets.glb.mesh,\n\t\t\t\tmaterial: () =>\n\t\t\t\t\tnew TgdMaterialDiffuse({\n\t\t\t\t\t\tcolor: new TgdVec4(1, 0.666, 0),\n\t\t\t\t\t\tspecularExponent: 5,\n\t\t\t\t\t\tspecularIntensity: 2.5,\n\t\t\t\t\t\tlight: new TgdLight({\n\t\t\t\t\t\t\tcolor: new TgdVec4(1, 1, 1, 1),\n\t\t\t\t\t\t\tdirection: new TgdVec3(1, 0, 0),\n\t\t\t\t\t\t}),\n\t\t\t\t\t\tambient: new TgdLight({\n\t\t\t\t\t\t\tcolor: new TgdVec4(0.111, 0.333, 0.999, 4),\n\t\t\t\t\t\t}),\n\t\t\t\t\t}),\n\t\t\t\t// new TgdMaterialNormals(),\n\t\t\t}),\n\t\t],\n\t});\n\tframebuffer1.add(painter);\n\tconst filterHue = new TgdFilterHueRotation({ hueShiftInDegrees: 2 });\n\tconst filterZoom = new TgdFilterZoom({ zoom: 1.007 });\n\tconst filters = new TgdPainterFilter(context, {\n\t\ttexture: framebuffer1.textureColor0 ?? defaultTexture,\n\t\tfilters: [filterHue, filterZoom],\n\t\tflipY: true,\n\t});\n\tframebuffer2.add(filters);\n\tconst screen = new TgdPainterFilter(context, {\n\t\ttexture: framebuffer1.textureColor0 ?? defaultTexture,\n\t\tfilters: [new TgdFilterZoom()],\n\t\tflipY: true,\n\t});\n\tcontext.add(\n\t\tframebuffer1,\n\t\tframebuffer2,\n\t\tscreen,\n\t\tnew TgdPainterLogic((time) => {\n\t\t\tconst { camera } = context;\n\t\t\tcamera.transfo.orbitAroundX(Math.sin(time * 0.005045) * 0.03);\n\t\t\tcamera.transfo.orbitAroundY(Math.sin(time * 0.001751) * 0.02);\n\t\t\tfilterZoom.translation.x = 0.005 * Math.sin(time * 0.0024581);\n\t\t\tfilterZoom.translation.y = 0.005 * Math.sin(time * 0.0037151);\n\t\t}),\n\t);\n\tcontext.play();"
};
var FULL = "import {\n\tTgdCameraPerspective,\n\ttype TgdContext,\n\tTgdFilterHueRotation,\n\tTgdFilterZoom,\n\tTgdLight,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterFilter,\n\tTgdPainterFramebuffer,\n\tTgdPainterLogic,\n\tTgdPainterMeshGltf,\n\tTgdPainterState,\n\tTgdTexture2D,\n\tTgdVec3,\n\tTgdVec4,\n\twebglPresetCull,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport SuzanneURL from \"@/assets/mesh/logo.glb\";\nimport BackgroundURL from \"@/assets/image/dino.webp\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst defaultTexture = new TgdTexture2D(context);\n\tcontext.camera = new TgdCameraPerspective({\n\t\ttransfo: { distance: 6 },\n\t\tfar: 100,\n\t\tnear: 0.01,\n\t\tfovy: Math.PI / 4,\n\t\tzoom: 1,\n\t});\n\tconst framebuffer1 = new TgdPainterFramebuffer(context, {\n\t\ttextureColor0: new TgdTexture2D(context),\n\t});\n\tconst framebuffer2 = new TgdPainterFramebuffer(context, {\n\t\ttextureColor0: new TgdTexture2D(context),\n\t});\n\tconst background = new TgdPainterFilter(context, {\n\t\ttexture: framebuffer2.textureColor0 ?? defaultTexture,\n\t\tfilters: [new TgdFilterZoom()],\n\t\tflipY: true,\n\t});\n\tconst painter = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tcull: webglPresetCull.back,\n\t\tchildren: [\n\t\t\tbackground,\n\t\t\tnew TgdPainterClear(context, {\n\t\t\t\tdepth: 1,\n\t\t\t}),\n\t\t\tnew TgdPainterMeshGltf(context, {\n\t\t\t\tasset: assets.glb.mesh,\n\t\t\t\tmaterial: () =>\n\t\t\t\t\tnew TgdMaterialDiffuse({\n\t\t\t\t\t\tcolor: new TgdVec4(1, 0.666, 0),\n\t\t\t\t\t\tspecularExponent: 5,\n\t\t\t\t\t\tspecularIntensity: 2.5,\n\t\t\t\t\t\tlight: new TgdLight({\n\t\t\t\t\t\t\tcolor: new TgdVec4(1, 1, 1, 1),\n\t\t\t\t\t\t\tdirection: new TgdVec3(1, 0, 0),\n\t\t\t\t\t\t}),\n\t\t\t\t\t\tambient: new TgdLight({\n\t\t\t\t\t\t\tcolor: new TgdVec4(0.111, 0.333, 0.999, 4),\n\t\t\t\t\t\t}),\n\t\t\t\t\t}),\n\t\t\t\t// new TgdMaterialNormals(),\n\t\t\t}),\n\t\t],\n\t});\n\tframebuffer1.add(painter);\n\tconst filterHue = new TgdFilterHueRotation({ hueShiftInDegrees: 2 });\n\tconst filterZoom = new TgdFilterZoom({ zoom: 1.007 });\n\tconst filters = new TgdPainterFilter(context, {\n\t\ttexture: framebuffer1.textureColor0 ?? defaultTexture,\n\t\tfilters: [filterHue, filterZoom],\n\t\tflipY: true,\n\t});\n\tframebuffer2.add(filters);\n\tconst screen = new TgdPainterFilter(context, {\n\t\ttexture: framebuffer1.textureColor0 ?? defaultTexture,\n\t\tfilters: [new TgdFilterZoom()],\n\t\tflipY: true,\n\t});\n\tcontext.add(\n\t\tframebuffer1,\n\t\tframebuffer2,\n\t\tscreen,\n\t\tnew TgdPainterLogic((time) => {\n\t\t\tconst { camera } = context;\n\t\t\tcamera.transfo.orbitAroundX(Math.sin(time * 0.005045) * 0.03);\n\t\t\tcamera.transfo.orbitAroundY(Math.sin(time * 0.001751) * 0.02);\n\t\t\tfilterZoom.translation.x = 0.005 * Math.sin(time * 0.0024581);\n\t\t\tfilterZoom.translation.y = 0.005 * Math.sin(time * 0.0037151);\n\t\t}),\n\t);\n\tcontext.play();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{\n\t\t\t\tglb: {\n\t\t\t\t\tmesh: SuzanneURL,\n\t\t\t\t},\n\t\t\t\timage: {\n\t\t\t\t\tbackground: BackgroundURL,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
12926(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _framebuffer_demo__rspack_import_1 = __webpack_require__(28537);
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
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterFramebuffer.html",
                        children: "TgdPainterFramebuffer"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " - Example 1"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFtZWJ1ZmZlcl9leGFtcGxlMV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZS1jY2NhZWYuY2Q0MzEyNmZmZjVlYTg0NC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFtZWJ1ZmZlci9leGFtcGxlMS9fL2ZyYW1lYnVmZmVyLmRlbW8vZnJhbWVidWZmZXIuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUxL18vZnJhbWVidWZmZXIuZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUxL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RGaWx0ZXJIdWVSb3RhdGlvbixcblx0VGdkRmlsdGVyWm9vbSxcblx0VGdkTGlnaHQsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyRmlsdGVyLFxuXHRUZ2RQYWludGVyRnJhbWVidWZmZXIsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlck1lc2hHbHRmLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcblx0VGdkVmVjMyxcblx0VGdkVmVjNCxcblx0d2ViZ2xQcmVzZXRDdWxsLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9sb2dvLmdsYlwiO1xuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFwiO1xuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdC8vICNiZWdpblxuXHRjb25zdCBkZWZhdWx0VGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCk7XG5cdGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcblx0XHR0cmFuc2ZvOiB7IGRpc3RhbmNlOiA2IH0sXG5cdFx0ZmFyOiAxMDAsXG5cdFx0bmVhcjogMC4wMSxcblx0XHRmb3Z5OiBNYXRoLlBJIC8gNCxcblx0XHR6b29tOiAxLFxuXHR9KTtcblx0Y29uc3QgZnJhbWVidWZmZXIxID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XG5cdFx0dGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcblx0fSk7XG5cdGNvbnN0IGZyYW1lYnVmZmVyMiA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xuXHRcdHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCksXG5cdH0pO1xuXHRjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuXHRcdHRleHR1cmU6IGZyYW1lYnVmZmVyMi50ZXh0dXJlQ29sb3IwID8/IGRlZmF1bHRUZXh0dXJlLFxuXHRcdGZpbHRlcnM6IFtuZXcgVGdkRmlsdGVyWm9vbSgpXSxcblx0XHRmbGlwWTogdHJ1ZSxcblx0fSk7XG5cdGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHRcdGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRiYWNrZ3JvdW5kLFxuXHRcdFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0XHRcdGRlcHRoOiAxLFxuXHRcdFx0fSksXG5cdFx0XHRuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcblx0XHRcdFx0YXNzZXQ6IGFzc2V0cy5nbGIubWVzaCxcblx0XHRcdFx0bWF0ZXJpYWw6ICgpID0+XG5cdFx0XHRcdFx0bmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG5cdFx0XHRcdFx0XHRjb2xvcjogbmV3IFRnZFZlYzQoMSwgMC42NjYsIDApLFxuXHRcdFx0XHRcdFx0c3BlY3VsYXJFeHBvbmVudDogNSxcblx0XHRcdFx0XHRcdHNwZWN1bGFySW50ZW5zaXR5OiAyLjUsXG5cdFx0XHRcdFx0XHRsaWdodDogbmV3IFRnZExpZ2h0KHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IG5ldyBUZ2RWZWM0KDEsIDEsIDEsIDEpLFxuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb246IG5ldyBUZ2RWZWMzKDEsIDAsIDApLFxuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogbmV3IFRnZFZlYzQoMC4xMTEsIDAuMzMzLCAwLjk5OSwgNCksXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0Ly8gbmV3IFRnZE1hdGVyaWFsTm9ybWFscygpLFxuXHRcdFx0fSksXG5cdFx0XSxcblx0fSk7XG5cdGZyYW1lYnVmZmVyMS5hZGQocGFpbnRlcik7XG5cdGNvbnN0IGZpbHRlckh1ZSA9IG5ldyBUZ2RGaWx0ZXJIdWVSb3RhdGlvbih7IGh1ZVNoaWZ0SW5EZWdyZWVzOiAyIH0pO1xuXHRjb25zdCBmaWx0ZXJab29tID0gbmV3IFRnZEZpbHRlclpvb20oeyB6b29tOiAxLjAwNyB9KTtcblx0Y29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcblx0XHR0ZXh0dXJlOiBmcmFtZWJ1ZmZlcjEudGV4dHVyZUNvbG9yMCA/PyBkZWZhdWx0VGV4dHVyZSxcblx0XHRmaWx0ZXJzOiBbZmlsdGVySHVlLCBmaWx0ZXJab29tXSxcblx0XHRmbGlwWTogdHJ1ZSxcblx0fSk7XG5cdGZyYW1lYnVmZmVyMi5hZGQoZmlsdGVycyk7XG5cdGNvbnN0IHNjcmVlbiA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcblx0XHR0ZXh0dXJlOiBmcmFtZWJ1ZmZlcjEudGV4dHVyZUNvbG9yMCA/PyBkZWZhdWx0VGV4dHVyZSxcblx0XHRmaWx0ZXJzOiBbbmV3IFRnZEZpbHRlclpvb20oKV0sXG5cdFx0ZmxpcFk6IHRydWUsXG5cdH0pO1xuXHRjb250ZXh0LmFkZChcblx0XHRmcmFtZWJ1ZmZlcjEsXG5cdFx0ZnJhbWVidWZmZXIyLFxuXHRcdHNjcmVlbixcblx0XHRuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG5cdFx0XHRjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dDtcblx0XHRcdGNhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWChNYXRoLnNpbih0aW1lICogMC4wMDUwNDUpICogMC4wMyk7XG5cdFx0XHRjYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFkoTWF0aC5zaW4odGltZSAqIDAuMDAxNzUxKSAqIDAuMDIpO1xuXHRcdFx0ZmlsdGVyWm9vbS50cmFuc2xhdGlvbi54ID0gMC4wMDUgKiBNYXRoLnNpbih0aW1lICogMC4wMDI0NTgxKTtcblx0XHRcdGZpbHRlclpvb20udHJhbnNsYXRpb24ueSA9IDAuMDA1ICogTWF0aC5zaW4odGltZSAqIDAuMDAzNzE1MSk7XG5cdFx0fSksXG5cdCk7XG5cdGNvbnRleHQucGxheSgpO1xuXHQvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0Z2xiOiB7XG5cdFx0XHRcdFx0bWVzaDogU3V6YW5uZVVSTCxcblx0XHRcdFx0fSxcblx0XHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kVVJMLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2ZyYW1lYnVmZmVyLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiXFx0Y29uc3QgZGVmYXVsdFRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpO1xcblxcdGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcXG5cXHRcXHR0cmFuc2ZvOiB7IGRpc3RhbmNlOiA2IH0sXFxuXFx0XFx0ZmFyOiAxMDAsXFxuXFx0XFx0bmVhcjogMC4wMSxcXG5cXHRcXHRmb3Z5OiBNYXRoLlBJIC8gNCxcXG5cXHRcXHR6b29tOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGZyYW1lYnVmZmVyMSA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcblxcdFxcdHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCksXFxuXFx0fSk7XFxuXFx0Y29uc3QgZnJhbWVidWZmZXIyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuXFx0XFx0dGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcXG5cXHR9KTtcXG5cXHRjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcblxcdFxcdHRleHR1cmU6IGZyYW1lYnVmZmVyMi50ZXh0dXJlQ29sb3IwID8/IGRlZmF1bHRUZXh0dXJlLFxcblxcdFxcdGZpbHRlcnM6IFtuZXcgVGdkRmlsdGVyWm9vbSgpXSxcXG5cXHRcXHRmbGlwWTogdHJ1ZSxcXG5cXHR9KTtcXG5cXHRjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG5cXHRcXHRjaGlsZHJlbjogW1xcblxcdFxcdFxcdGJhY2tncm91bmQsXFxuXFx0XFx0XFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0XFx0XFx0ZGVwdGg6IDEsXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0bmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuXFx0XFx0XFx0XFx0YXNzZXQ6IGFzc2V0cy5nbGIubWVzaCxcXG5cXHRcXHRcXHRcXHRtYXRlcmlhbDogKCkgPT5cXG5cXHRcXHRcXHRcXHRcXHRuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogbmV3IFRnZFZlYzQoMSwgMC42NjYsIDApLFxcblxcdFxcdFxcdFxcdFxcdFxcdHNwZWN1bGFyRXhwb25lbnQ6IDUsXFxuXFx0XFx0XFx0XFx0XFx0XFx0c3BlY3VsYXJJbnRlbnNpdHk6IDIuNSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRsaWdodDogbmV3IFRnZExpZ2h0KHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogbmV3IFRnZFZlYzQoMSwgMSwgMSwgMSksXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ZGlyZWN0aW9uOiBuZXcgVGdkVmVjMygxLCAwLCAwKSxcXG5cXHRcXHRcXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBuZXcgVGdkVmVjNCgwLjExMSwgMC4zMzMsIDAuOTk5LCA0KSxcXG5cXHRcXHRcXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRcXHQvLyBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxzKCksXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0XSxcXG5cXHR9KTtcXG5cXHRmcmFtZWJ1ZmZlcjEuYWRkKHBhaW50ZXIpO1xcblxcdGNvbnN0IGZpbHRlckh1ZSA9IG5ldyBUZ2RGaWx0ZXJIdWVSb3RhdGlvbih7IGh1ZVNoaWZ0SW5EZWdyZWVzOiAyIH0pO1xcblxcdGNvbnN0IGZpbHRlclpvb20gPSBuZXcgVGdkRmlsdGVyWm9vbSh7IHpvb206IDEuMDA3IH0pO1xcblxcdGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuXFx0XFx0dGV4dHVyZTogZnJhbWVidWZmZXIxLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXFxuXFx0XFx0ZmlsdGVyczogW2ZpbHRlckh1ZSwgZmlsdGVyWm9vbV0sXFxuXFx0XFx0ZmxpcFk6IHRydWUsXFxuXFx0fSk7XFxuXFx0ZnJhbWVidWZmZXIyLmFkZChmaWx0ZXJzKTtcXG5cXHRjb25zdCBzY3JlZW4gPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuXFx0XFx0dGV4dHVyZTogZnJhbWVidWZmZXIxLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXFxuXFx0XFx0ZmlsdGVyczogW25ldyBUZ2RGaWx0ZXJab29tKCldLFxcblxcdFxcdGZsaXBZOiB0cnVlLFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGZyYW1lYnVmZmVyMSxcXG5cXHRcXHRmcmFtZWJ1ZmZlcjIsXFxuXFx0XFx0c2NyZWVuLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcXG5cXHRcXHRcXHRjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dDtcXG5cXHRcXHRcXHRjYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFgoTWF0aC5zaW4odGltZSAqIDAuMDA1MDQ1KSAqIDAuMDMpO1xcblxcdFxcdFxcdGNhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnNpbih0aW1lICogMC4wMDE3NTEpICogMC4wMik7XFxuXFx0XFx0XFx0ZmlsdGVyWm9vbS50cmFuc2xhdGlvbi54ID0gMC4wMDUgKiBNYXRoLnNpbih0aW1lICogMC4wMDI0NTgxKTtcXG5cXHRcXHRcXHRmaWx0ZXJab29tLnRyYW5zbGF0aW9uLnkgPSAwLjAwNSAqIE1hdGguc2luKHRpbWUgKiAwLjAwMzcxNTEpO1xcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29udGV4dC5wbGF5KCk7XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdFRnZENhbWVyYVBlcnNwZWN0aXZlLFxcblxcdHR5cGUgVGdkQ29udGV4dCxcXG5cXHRUZ2RGaWx0ZXJIdWVSb3RhdGlvbixcXG5cXHRUZ2RGaWx0ZXJab29tLFxcblxcdFRnZExpZ2h0LFxcblxcdFRnZE1hdGVyaWFsRGlmZnVzZSxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlckZpbHRlcixcXG5cXHRUZ2RQYWludGVyRnJhbWVidWZmZXIsXFxuXFx0VGdkUGFpbnRlckxvZ2ljLFxcblxcdFRnZFBhaW50ZXJNZXNoR2x0ZixcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0VGdkVGV4dHVyZTJELFxcblxcdFRnZFZlYzMsXFxuXFx0VGdkVmVjNCxcXG5cXHR3ZWJnbFByZXNldEN1bGwsXFxuXFx0d2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9sb2dvLmdsYlxcXCI7XFxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcXFwiQC9hc3NldHMvaW1hZ2UvZGluby53ZWJwXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29uc3QgZGVmYXVsdFRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpO1xcblxcdGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcXG5cXHRcXHR0cmFuc2ZvOiB7IGRpc3RhbmNlOiA2IH0sXFxuXFx0XFx0ZmFyOiAxMDAsXFxuXFx0XFx0bmVhcjogMC4wMSxcXG5cXHRcXHRmb3Z5OiBNYXRoLlBJIC8gNCxcXG5cXHRcXHR6b29tOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGZyYW1lYnVmZmVyMSA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcblxcdFxcdHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCksXFxuXFx0fSk7XFxuXFx0Y29uc3QgZnJhbWVidWZmZXIyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuXFx0XFx0dGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcXG5cXHR9KTtcXG5cXHRjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcblxcdFxcdHRleHR1cmU6IGZyYW1lYnVmZmVyMi50ZXh0dXJlQ29sb3IwID8/IGRlZmF1bHRUZXh0dXJlLFxcblxcdFxcdGZpbHRlcnM6IFtuZXcgVGdkRmlsdGVyWm9vbSgpXSxcXG5cXHRcXHRmbGlwWTogdHJ1ZSxcXG5cXHR9KTtcXG5cXHRjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG5cXHRcXHRjaGlsZHJlbjogW1xcblxcdFxcdFxcdGJhY2tncm91bmQsXFxuXFx0XFx0XFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0XFx0XFx0ZGVwdGg6IDEsXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0bmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuXFx0XFx0XFx0XFx0YXNzZXQ6IGFzc2V0cy5nbGIubWVzaCxcXG5cXHRcXHRcXHRcXHRtYXRlcmlhbDogKCkgPT5cXG5cXHRcXHRcXHRcXHRcXHRuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogbmV3IFRnZFZlYzQoMSwgMC42NjYsIDApLFxcblxcdFxcdFxcdFxcdFxcdFxcdHNwZWN1bGFyRXhwb25lbnQ6IDUsXFxuXFx0XFx0XFx0XFx0XFx0XFx0c3BlY3VsYXJJbnRlbnNpdHk6IDIuNSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRsaWdodDogbmV3IFRnZExpZ2h0KHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogbmV3IFRnZFZlYzQoMSwgMSwgMSwgMSksXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ZGlyZWN0aW9uOiBuZXcgVGdkVmVjMygxLCAwLCAwKSxcXG5cXHRcXHRcXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBuZXcgVGdkVmVjNCgwLjExMSwgMC4zMzMsIDAuOTk5LCA0KSxcXG5cXHRcXHRcXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRcXHQvLyBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxzKCksXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0XSxcXG5cXHR9KTtcXG5cXHRmcmFtZWJ1ZmZlcjEuYWRkKHBhaW50ZXIpO1xcblxcdGNvbnN0IGZpbHRlckh1ZSA9IG5ldyBUZ2RGaWx0ZXJIdWVSb3RhdGlvbih7IGh1ZVNoaWZ0SW5EZWdyZWVzOiAyIH0pO1xcblxcdGNvbnN0IGZpbHRlclpvb20gPSBuZXcgVGdkRmlsdGVyWm9vbSh7IHpvb206IDEuMDA3IH0pO1xcblxcdGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuXFx0XFx0dGV4dHVyZTogZnJhbWVidWZmZXIxLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXFxuXFx0XFx0ZmlsdGVyczogW2ZpbHRlckh1ZSwgZmlsdGVyWm9vbV0sXFxuXFx0XFx0ZmxpcFk6IHRydWUsXFxuXFx0fSk7XFxuXFx0ZnJhbWVidWZmZXIyLmFkZChmaWx0ZXJzKTtcXG5cXHRjb25zdCBzY3JlZW4gPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuXFx0XFx0dGV4dHVyZTogZnJhbWVidWZmZXIxLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXFxuXFx0XFx0ZmlsdGVyczogW25ldyBUZ2RGaWx0ZXJab29tKCldLFxcblxcdFxcdGZsaXBZOiB0cnVlLFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGZyYW1lYnVmZmVyMSxcXG5cXHRcXHRmcmFtZWJ1ZmZlcjIsXFxuXFx0XFx0c2NyZWVuLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcXG5cXHRcXHRcXHRjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dDtcXG5cXHRcXHRcXHRjYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFgoTWF0aC5zaW4odGltZSAqIDAuMDA1MDQ1KSAqIDAuMDMpO1xcblxcdFxcdFxcdGNhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnNpbih0aW1lICogMC4wMDE3NTEpICogMC4wMik7XFxuXFx0XFx0XFx0ZmlsdGVyWm9vbS50cmFuc2xhdGlvbi54ID0gMC4wMDUgKiBNYXRoLnNpbih0aW1lICogMC4wMDI0NTgxKTtcXG5cXHRcXHRcXHRmaWx0ZXJab29tLnRyYW5zbGF0aW9uLnkgPSAwLjAwNSAqIE1hdGguc2luKHRpbWUgKiAwLjAwMzcxNTEpO1xcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29udGV4dC5wbGF5KCk7XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0YXNzZXRzPXt7XFxuXFx0XFx0XFx0XFx0Z2xiOiB7XFxuXFx0XFx0XFx0XFx0XFx0bWVzaDogU3V6YW5uZVVSTCxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdGltYWdlOiB7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZDogQmFja2dyb3VuZFVSTCxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpO1xcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZEZpbHRlckh1ZVJvdGF0aW9uIiwiVGdkRmlsdGVyWm9vbSIsIlRnZExpZ2h0IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckZpbHRlciIsIlRnZFBhaW50ZXJGcmFtZWJ1ZmZlciIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlRnZFZlYzMiLCJUZ2RWZWM0Iiwid2ViZ2xQcmVzZXRDdWxsIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJTdXphbm5lVVJMIiwiQmFja2dyb3VuZFVSTCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiX2ZyYW1lYnVmZmVyMl90ZXh0dXJlQ29sb3IwIiwiX2ZyYW1lYnVmZmVyMV90ZXh0dXJlQ29sb3IwIiwiX2ZyYW1lYnVmZmVyMV90ZXh0dXJlQ29sb3IwMSIsImRlZmF1bHRUZXh0dXJlIiwiTWF0aCIsImZyYW1lYnVmZmVyMSIsImZyYW1lYnVmZmVyMiIsImJhY2tncm91bmQiLCJwYWludGVyIiwibWF0ZXJpYWwiLCJmaWx0ZXJIdWUiLCJmaWx0ZXJab29tIiwiZmlsdGVycyIsInNjcmVlbiIsInRpbWUiLCJjYW1lcmEiLCJEZW1vIiwiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCd0I7QUFDa0M7QUFFVjtBQUNLO0FBRXJELFNBQVNtQixLQUFLQyxPQUFtQixFQUFFQyxNQUFjO1FBaUJ0Q0MsNkJBbUNBQyw2QkFNQUM7SUF6RFYsU0FBUztJQUNULElBQU1DLGlCQUFpQixJQUFJZCw0Q0FBWUEsQ0FBQ1M7SUFDeENBLFFBQVEsTUFBTSxHQUFHLElBQUlwQixvREFBb0JBLENBQUM7UUFD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