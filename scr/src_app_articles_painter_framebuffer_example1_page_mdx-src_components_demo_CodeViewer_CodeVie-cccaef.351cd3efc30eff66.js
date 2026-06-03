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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/framebuffer.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/_/framebuffer.demo/index.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " - Example 1"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example1/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFtZWJ1ZmZlcl9leGFtcGxlMV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZS1jY2NhZWYuMzUxY2QzZWZjMzBlZmY2Ni5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUxL18vZnJhbWVidWZmZXIuZGVtby9mcmFtZWJ1ZmZlci5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFtZWJ1ZmZlci9leGFtcGxlMS9fL2ZyYW1lYnVmZmVyLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUxL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZEZpbHRlckh1ZVJvdGF0aW9uLFxuXHRUZ2RGaWx0ZXJab29tLFxuXHRUZ2RMaWdodCxcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJGaWx0ZXIsXG5cdFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcblx0VGdkUGFpbnRlckxvZ2ljLFxuXHRUZ2RQYWludGVyTWVzaEdsdGYsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxuXHRUZ2RWZWMzLFxuXHRUZ2RWZWM0LFxuXHR3ZWJnbFByZXNldEN1bGwsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL2xvZ28uZ2xiXCI7XG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvZGluby53ZWJwXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luXG5cdGNvbnN0IGRlZmF1bHRUZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KTtcblx0Y29udGV4dC5jYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoe1xuXHRcdHRyYW5zZm86IHsgZGlzdGFuY2U6IDYgfSxcblx0XHRmYXI6IDEwMCxcblx0XHRuZWFyOiAwLjAxLFxuXHRcdGZvdnk6IE1hdGguUEkgLyA0LFxuXHRcdHpvb206IDEsXG5cdH0pO1xuXHRjb25zdCBmcmFtZWJ1ZmZlcjEgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcblx0XHR0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxuXHR9KTtcblx0Y29uc3QgZnJhbWVidWZmZXIyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XG5cdFx0dGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcblx0fSk7XG5cdGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG5cdFx0dGV4dHVyZTogZnJhbWVidWZmZXIyLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXG5cdFx0ZmlsdGVyczogW25ldyBUZ2RGaWx0ZXJab29tKCldLFxuXHRcdGZsaXBZOiB0cnVlLFxuXHR9KTtcblx0Y29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0Y3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdGJhY2tncm91bmQsXG5cdFx0XHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRcdFx0ZGVwdGg6IDEsXG5cdFx0XHR9KSxcblx0XHRcdG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdFx0XHRhc3NldDogYXNzZXRzLmdsYi5tZXNoLFxuXHRcdFx0XHRtYXRlcmlhbDogKCkgPT5cblx0XHRcdFx0XHRuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcblx0XHRcdFx0XHRcdGNvbG9yOiBuZXcgVGdkVmVjNCgxLCAwLjY2NiwgMCksXG5cdFx0XHRcdFx0XHRzcGVjdWxhckV4cG9uZW50OiA1LFxuXHRcdFx0XHRcdFx0c3BlY3VsYXJJbnRlbnNpdHk6IDIuNSxcblx0XHRcdFx0XHRcdGxpZ2h0OiBuZXcgVGdkTGlnaHQoe1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogbmV3IFRnZFZlYzQoMSwgMSwgMSwgMSksXG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbjogbmV3IFRnZFZlYzMoMSwgMCwgMCksXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBuZXcgVGdkVmVjNCgwLjExMSwgMC4zMzMsIDAuOTk5LCA0KSxcblx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHQvLyBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxzKCksXG5cdFx0XHR9KSxcblx0XHRdLFxuXHR9KTtcblx0ZnJhbWVidWZmZXIxLmFkZChwYWludGVyKTtcblx0Y29uc3QgZmlsdGVySHVlID0gbmV3IFRnZEZpbHRlckh1ZVJvdGF0aW9uKHsgaHVlU2hpZnRJbkRlZ3JlZXM6IDIgfSk7XG5cdGNvbnN0IGZpbHRlclpvb20gPSBuZXcgVGdkRmlsdGVyWm9vbSh7IHpvb206IDEuMDA3IH0pO1xuXHRjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuXHRcdHRleHR1cmU6IGZyYW1lYnVmZmVyMS50ZXh0dXJlQ29sb3IwID8/IGRlZmF1bHRUZXh0dXJlLFxuXHRcdGZpbHRlcnM6IFtmaWx0ZXJIdWUsIGZpbHRlclpvb21dLFxuXHRcdGZsaXBZOiB0cnVlLFxuXHR9KTtcblx0ZnJhbWVidWZmZXIyLmFkZChmaWx0ZXJzKTtcblx0Y29uc3Qgc2NyZWVuID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuXHRcdHRleHR1cmU6IGZyYW1lYnVmZmVyMS50ZXh0dXJlQ29sb3IwID8/IGRlZmF1bHRUZXh0dXJlLFxuXHRcdGZpbHRlcnM6IFtuZXcgVGdkRmlsdGVyWm9vbSgpXSxcblx0XHRmbGlwWTogdHJ1ZSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKFxuXHRcdGZyYW1lYnVmZmVyMSxcblx0XHRmcmFtZWJ1ZmZlcjIsXG5cdFx0c2NyZWVuLFxuXHRcdG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcblx0XHRcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0O1xuXHRcdFx0Y2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRYKE1hdGguc2luKHRpbWUgKiAwLjAwNTA0NSkgKiAwLjAzKTtcblx0XHRcdGNhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnNpbih0aW1lICogMC4wMDE3NTEpICogMC4wMik7XG5cdFx0XHRmaWx0ZXJab29tLnRyYW5zbGF0aW9uLnggPSAwLjAwNSAqIE1hdGguc2luKHRpbWUgKiAwLjAwMjQ1ODEpO1xuXHRcdFx0ZmlsdGVyWm9vbS50cmFuc2xhdGlvbi55ID0gMC4wMDUgKiBNYXRoLnNpbih0aW1lICogMC4wMDM3MTUxKTtcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wbGF5KCk7XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHtcblx0XHRcdFx0XHRtZXNoOiBTdXphbm5lVVJMLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbWFnZToge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IEJhY2tncm91bmRVUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vZnJhbWVidWZmZXIuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJcXHRjb25zdCBkZWZhdWx0VGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCk7XFxuXFx0Y29udGV4dC5jYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoe1xcblxcdFxcdHRyYW5zZm86IHsgZGlzdGFuY2U6IDYgfSxcXG5cXHRcXHRmYXI6IDEwMCxcXG5cXHRcXHRuZWFyOiAwLjAxLFxcblxcdFxcdGZvdnk6IE1hdGguUEkgLyA0LFxcblxcdFxcdHpvb206IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgZnJhbWVidWZmZXIxID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuXFx0XFx0dGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcXG5cXHR9KTtcXG5cXHRjb25zdCBmcmFtZWJ1ZmZlcjIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG5cXHRcXHR0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxcblxcdH0pO1xcblxcdGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuXFx0XFx0dGV4dHVyZTogZnJhbWVidWZmZXIyLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXFxuXFx0XFx0ZmlsdGVyczogW25ldyBUZ2RGaWx0ZXJab29tKCldLFxcblxcdFxcdGZsaXBZOiB0cnVlLFxcblxcdH0pO1xcblxcdGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcblxcdFxcdGNoaWxkcmVuOiBbXFxuXFx0XFx0XFx0YmFja2dyb3VuZCxcXG5cXHRcXHRcXHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHRkZXB0aDogMSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHRhc3NldDogYXNzZXRzLmdsYi5tZXNoLFxcblxcdFxcdFxcdFxcdG1hdGVyaWFsOiAoKSA9PlxcblxcdFxcdFxcdFxcdFxcdG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBuZXcgVGdkVmVjNCgxLCAwLjY2NiwgMCksXFxuXFx0XFx0XFx0XFx0XFx0XFx0c3BlY3VsYXJFeHBvbmVudDogNSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRzcGVjdWxhckludGVuc2l0eTogMi41LFxcblxcdFxcdFxcdFxcdFxcdFxcdGxpZ2h0OiBuZXcgVGdkTGlnaHQoe1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBuZXcgVGdkVmVjNCgxLCAxLCAxLCAxKSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRkaXJlY3Rpb246IG5ldyBUZ2RWZWMzKDEsIDAsIDApLFxcblxcdFxcdFxcdFxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdFxcdFxcdFxcdGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IG5ldyBUZ2RWZWM0KDAuMTExLCAwLjMzMywgMC45OTksIDQpLFxcblxcdFxcdFxcdFxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdFxcdC8vIG5ldyBUZ2RNYXRlcmlhbE5vcm1hbHMoKSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRdLFxcblxcdH0pO1xcblxcdGZyYW1lYnVmZmVyMS5hZGQocGFpbnRlcik7XFxuXFx0Y29uc3QgZmlsdGVySHVlID0gbmV3IFRnZEZpbHRlckh1ZVJvdGF0aW9uKHsgaHVlU2hpZnRJbkRlZ3JlZXM6IDIgfSk7XFxuXFx0Y29uc3QgZmlsdGVyWm9vbSA9IG5ldyBUZ2RGaWx0ZXJab29tKHsgem9vbTogMS4wMDcgfSk7XFxuXFx0Y29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG5cXHRcXHR0ZXh0dXJlOiBmcmFtZWJ1ZmZlcjEudGV4dHVyZUNvbG9yMCA/PyBkZWZhdWx0VGV4dHVyZSxcXG5cXHRcXHRmaWx0ZXJzOiBbZmlsdGVySHVlLCBmaWx0ZXJab29tXSxcXG5cXHRcXHRmbGlwWTogdHJ1ZSxcXG5cXHR9KTtcXG5cXHRmcmFtZWJ1ZmZlcjIuYWRkKGZpbHRlcnMpO1xcblxcdGNvbnN0IHNjcmVlbiA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG5cXHRcXHR0ZXh0dXJlOiBmcmFtZWJ1ZmZlcjEudGV4dHVyZUNvbG9yMCA/PyBkZWZhdWx0VGV4dHVyZSxcXG5cXHRcXHRmaWx0ZXJzOiBbbmV3IFRnZEZpbHRlclpvb20oKV0sXFxuXFx0XFx0ZmxpcFk6IHRydWUsXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0ZnJhbWVidWZmZXIxLFxcblxcdFxcdGZyYW1lYnVmZmVyMixcXG5cXHRcXHRzY3JlZW4sXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcblxcdFxcdFxcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0O1xcblxcdFxcdFxcdGNhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWChNYXRoLnNpbih0aW1lICogMC4wMDUwNDUpICogMC4wMyk7XFxuXFx0XFx0XFx0Y2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRZKE1hdGguc2luKHRpbWUgKiAwLjAwMTc1MSkgKiAwLjAyKTtcXG5cXHRcXHRcXHRmaWx0ZXJab29tLnRyYW5zbGF0aW9uLnggPSAwLjAwNSAqIE1hdGguc2luKHRpbWUgKiAwLjAwMjQ1ODEpO1xcblxcdFxcdFxcdGZpbHRlclpvb20udHJhbnNsYXRpb24ueSA9IDAuMDA1ICogTWF0aC5zaW4odGltZSAqIDAuMDAzNzE1MSk7XFxuXFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjb250ZXh0LnBsYXkoKTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0VGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZEZpbHRlckh1ZVJvdGF0aW9uLFxcblxcdFRnZEZpbHRlclpvb20sXFxuXFx0VGdkTGlnaHQsXFxuXFx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyRmlsdGVyLFxcblxcdFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcXG5cXHRUZ2RQYWludGVyTG9naWMsXFxuXFx0VGdkUGFpbnRlck1lc2hHbHRmLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxuXFx0VGdkVmVjMyxcXG5cXHRUZ2RWZWM0LFxcblxcdHdlYmdsUHJlc2V0Q3VsbCxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5cXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL2xvZ28uZ2xiXFxcIjtcXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9pbWFnZS9kaW5vLndlYnBcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb25zdCBkZWZhdWx0VGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCk7XFxuXFx0Y29udGV4dC5jYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoe1xcblxcdFxcdHRyYW5zZm86IHsgZGlzdGFuY2U6IDYgfSxcXG5cXHRcXHRmYXI6IDEwMCxcXG5cXHRcXHRuZWFyOiAwLjAxLFxcblxcdFxcdGZvdnk6IE1hdGguUEkgLyA0LFxcblxcdFxcdHpvb206IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgZnJhbWVidWZmZXIxID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuXFx0XFx0dGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcXG5cXHR9KTtcXG5cXHRjb25zdCBmcmFtZWJ1ZmZlcjIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG5cXHRcXHR0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxcblxcdH0pO1xcblxcdGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuXFx0XFx0dGV4dHVyZTogZnJhbWVidWZmZXIyLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXFxuXFx0XFx0ZmlsdGVyczogW25ldyBUZ2RGaWx0ZXJab29tKCldLFxcblxcdFxcdGZsaXBZOiB0cnVlLFxcblxcdH0pO1xcblxcdGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcblxcdFxcdGNoaWxkcmVuOiBbXFxuXFx0XFx0XFx0YmFja2dyb3VuZCxcXG5cXHRcXHRcXHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHRkZXB0aDogMSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHRhc3NldDogYXNzZXRzLmdsYi5tZXNoLFxcblxcdFxcdFxcdFxcdG1hdGVyaWFsOiAoKSA9PlxcblxcdFxcdFxcdFxcdFxcdG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBuZXcgVGdkVmVjNCgxLCAwLjY2NiwgMCksXFxuXFx0XFx0XFx0XFx0XFx0XFx0c3BlY3VsYXJFeHBvbmVudDogNSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRzcGVjdWxhckludGVuc2l0eTogMi41LFxcblxcdFxcdFxcdFxcdFxcdFxcdGxpZ2h0OiBuZXcgVGdkTGlnaHQoe1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBuZXcgVGdkVmVjNCgxLCAxLCAxLCAxKSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRkaXJlY3Rpb246IG5ldyBUZ2RWZWMzKDEsIDAsIDApLFxcblxcdFxcdFxcdFxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdFxcdFxcdFxcdGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IG5ldyBUZ2RWZWM0KDAuMTExLCAwLjMzMywgMC45OTksIDQpLFxcblxcdFxcdFxcdFxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdFxcdC8vIG5ldyBUZ2RNYXRlcmlhbE5vcm1hbHMoKSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRdLFxcblxcdH0pO1xcblxcdGZyYW1lYnVmZmVyMS5hZGQocGFpbnRlcik7XFxuXFx0Y29uc3QgZmlsdGVySHVlID0gbmV3IFRnZEZpbHRlckh1ZVJvdGF0aW9uKHsgaHVlU2hpZnRJbkRlZ3JlZXM6IDIgfSk7XFxuXFx0Y29uc3QgZmlsdGVyWm9vbSA9IG5ldyBUZ2RGaWx0ZXJab29tKHsgem9vbTogMS4wMDcgfSk7XFxuXFx0Y29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG5cXHRcXHR0ZXh0dXJlOiBmcmFtZWJ1ZmZlcjEudGV4dHVyZUNvbG9yMCA/PyBkZWZhdWx0VGV4dHVyZSxcXG5cXHRcXHRmaWx0ZXJzOiBbZmlsdGVySHVlLCBmaWx0ZXJab29tXSxcXG5cXHRcXHRmbGlwWTogdHJ1ZSxcXG5cXHR9KTtcXG5cXHRmcmFtZWJ1ZmZlcjIuYWRkKGZpbHRlcnMpO1xcblxcdGNvbnN0IHNjcmVlbiA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG5cXHRcXHR0ZXh0dXJlOiBmcmFtZWJ1ZmZlcjEudGV4dHVyZUNvbG9yMCA/PyBkZWZhdWx0VGV4dHVyZSxcXG5cXHRcXHRmaWx0ZXJzOiBbbmV3IFRnZEZpbHRlclpvb20oKV0sXFxuXFx0XFx0ZmxpcFk6IHRydWUsXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0ZnJhbWVidWZmZXIxLFxcblxcdFxcdGZyYW1lYnVmZmVyMixcXG5cXHRcXHRzY3JlZW4sXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcblxcdFxcdFxcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0O1xcblxcdFxcdFxcdGNhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWChNYXRoLnNpbih0aW1lICogMC4wMDUwNDUpICogMC4wMyk7XFxuXFx0XFx0XFx0Y2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRZKE1hdGguc2luKHRpbWUgKiAwLjAwMTc1MSkgKiAwLjAyKTtcXG5cXHRcXHRcXHRmaWx0ZXJab29tLnRyYW5zbGF0aW9uLnggPSAwLjAwNSAqIE1hdGguc2luKHRpbWUgKiAwLjAwMjQ1ODEpO1xcblxcdFxcdFxcdGZpbHRlclpvb20udHJhbnNsYXRpb24ueSA9IDAuMDA1ICogTWF0aC5zaW4odGltZSAqIDAuMDAzNzE1MSk7XFxuXFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjb250ZXh0LnBsYXkoKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRnbGI6IHtcXG5cXHRcXHRcXHRcXHRcXHRtZXNoOiBTdXphbm5lVVJMLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0aW1hZ2U6IHtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kVVJMLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHQvPlxcblxcdCk7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZENhbWVyYVBlcnNwZWN0aXZlIiwiVGdkRmlsdGVySHVlUm90YXRpb24iLCJUZ2RGaWx0ZXJab29tIiwiVGdkTGlnaHQiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyRmlsdGVyIiwiVGdkUGFpbnRlckZyYW1lYnVmZmVyIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVGdkVmVjMyIsIlRnZFZlYzQiLCJ3ZWJnbFByZXNldEN1bGwiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIlN1emFubmVVUkwiLCJCYWNrZ3JvdW5kVVJMIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJfZnJhbWVidWZmZXIyX3RleHR1cmVDb2xvcjAiLCJfZnJhbWVidWZmZXIxX3RleHR1cmVDb2xvcjAiLCJfZnJhbWVidWZmZXIxX3RleHR1cmVDb2xvcjAxIiwiZGVmYXVsdFRleHR1cmUiLCJNYXRoIiwiZnJhbWVidWZmZXIxIiwiZnJhbWVidWZmZXIyIiwiYmFja2dyb3VuZCIsInBhaW50ZXIiLCJtYXRlcmlhbCIsImZpbHRlckh1ZSIsImZpbHRlclpvb20iLCJmaWx0ZXJzIiwic2NyZWVuIiwidGltZSIsImNhbWVyYSIsIkRlbW8iLCJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0J3QjtBQUNrQztBQUVWO0FBQ0s7QUFFckQsU0FBU21CLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7UUFpQnRDQyw2QkFtQ0FDLDZCQU1BQztJQXpEVixTQUFTO0lBQ1QsSUFBTUMsaUJBQWlCLElBQUlkLDRDQUFZQSxDQUFDUztJQUN4Q0EsUUFBUSxNQUFNLEdBQUcsSUFBSXBCLG9EQUFvQkEsQ0FBQztRQUN6QyxT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