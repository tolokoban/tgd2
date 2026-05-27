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
        columnNumber: 9
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
    "Detail #1": "    const defaultTexture = new TgdTexture2D(context)\n    context.camera = new TgdCameraPerspective({\n        transfo: { distance: 6 },\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI / 4,\n        zoom: 1,\n    })\n    const framebuffer1 = new TgdPainterFramebuffer(context, {\n        textureColor0: new TgdTexture2D(context),\n    })\n    const framebuffer2 = new TgdPainterFramebuffer(context, {\n        textureColor0: new TgdTexture2D(context),\n    })\n    const background = new TgdPainterFilter(context, {\n        texture: framebuffer2.textureColor0 ?? defaultTexture,\n        filters: [new TgdFilterZoom()],\n        flipY: true,\n    })\n    const painter = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        cull: webglPresetCull.back,\n        children: [\n            background,\n            new TgdPainterClear(context, {\n                depth: 1,\n            }),\n            new TgdPainterMeshGltf(context, {\n                asset: assets.glb.mesh,\n                material: () =>\n                    new TgdMaterialDiffuse({\n                        color: new TgdVec4(1, 0.666, 0),\n                        specularExponent: 5,\n                        specularIntensity: 2.5,\n                        light: new TgdLight({\n                            color: new TgdVec4(1, 1, 1, 1),\n                            direction: new TgdVec3(1, 0, 0),\n                        }),\n                        ambient: new TgdLight({\n                            color: new TgdVec4(0.111, 0.333, 0.999, 4),\n                        }),\n                    }),\n                // new TgdMaterialNormals(),\n            }),\n        ],\n    })\n    framebuffer1.add(painter)\n    const filterHue = new TgdFilterHueRotation({ hueShiftInDegrees: 2 })\n    const filterZoom = new TgdFilterZoom({ zoom: 1.007 })\n    const filters = new TgdPainterFilter(context, {\n        texture: framebuffer1.textureColor0 ?? defaultTexture,\n        filters: [filterHue, filterZoom],\n        flipY: true,\n    })\n    framebuffer2.add(filters)\n    const screen = new TgdPainterFilter(context, {\n        texture: framebuffer1.textureColor0 ?? defaultTexture,\n        filters: [new TgdFilterZoom()],\n        flipY: true,\n    })\n    context.add(\n        framebuffer1,\n        framebuffer2,\n        screen,\n        new TgdPainterLogic((time) => {\n            const { camera } = context\n            camera.transfo.orbitAroundX(Math.sin(time * 0.005045) * 0.03)\n            camera.transfo.orbitAroundY(Math.sin(time * 0.001751) * 0.02)\n            filterZoom.translation.x = 0.005 * Math.sin(time * 0.0024581)\n            filterZoom.translation.y = 0.005 * Math.sin(time * 0.0037151)\n        }),\n    )\n    context.play()"
};
var FULL = "import {\n    TgdCameraPerspective,\n    TgdContext,\n    TgdFilterHueRotation,\n    TgdFilterZoom,\n    TgdLight,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterLogic,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdVec3,\n    TgdVec4,\n    webglPresetCull,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport SuzanneURL from \"@/assets/mesh/logo.glb\"\nimport BackgroundURL from \"@/assets/image/dino.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const defaultTexture = new TgdTexture2D(context)\n    context.camera = new TgdCameraPerspective({\n        transfo: { distance: 6 },\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI / 4,\n        zoom: 1,\n    })\n    const framebuffer1 = new TgdPainterFramebuffer(context, {\n        textureColor0: new TgdTexture2D(context),\n    })\n    const framebuffer2 = new TgdPainterFramebuffer(context, {\n        textureColor0: new TgdTexture2D(context),\n    })\n    const background = new TgdPainterFilter(context, {\n        texture: framebuffer2.textureColor0 ?? defaultTexture,\n        filters: [new TgdFilterZoom()],\n        flipY: true,\n    })\n    const painter = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        cull: webglPresetCull.back,\n        children: [\n            background,\n            new TgdPainterClear(context, {\n                depth: 1,\n            }),\n            new TgdPainterMeshGltf(context, {\n                asset: assets.glb.mesh,\n                material: () =>\n                    new TgdMaterialDiffuse({\n                        color: new TgdVec4(1, 0.666, 0),\n                        specularExponent: 5,\n                        specularIntensity: 2.5,\n                        light: new TgdLight({\n                            color: new TgdVec4(1, 1, 1, 1),\n                            direction: new TgdVec3(1, 0, 0),\n                        }),\n                        ambient: new TgdLight({\n                            color: new TgdVec4(0.111, 0.333, 0.999, 4),\n                        }),\n                    }),\n                // new TgdMaterialNormals(),\n            }),\n        ],\n    })\n    framebuffer1.add(painter)\n    const filterHue = new TgdFilterHueRotation({ hueShiftInDegrees: 2 })\n    const filterZoom = new TgdFilterZoom({ zoom: 1.007 })\n    const filters = new TgdPainterFilter(context, {\n        texture: framebuffer1.textureColor0 ?? defaultTexture,\n        filters: [filterHue, filterZoom],\n        flipY: true,\n    })\n    framebuffer2.add(filters)\n    const screen = new TgdPainterFilter(context, {\n        texture: framebuffer1.textureColor0 ?? defaultTexture,\n        filters: [new TgdFilterZoom()],\n        flipY: true,\n    })\n    context.add(\n        framebuffer1,\n        framebuffer2,\n        screen,\n        new TgdPainterLogic((time) => {\n            const { camera } = context\n            camera.transfo.orbitAroundX(Math.sin(time * 0.005045) * 0.03)\n            camera.transfo.orbitAroundY(Math.sin(time * 0.001751) * 0.02)\n            filterZoom.translation.x = 0.005 * Math.sin(time * 0.0024581)\n            filterZoom.translation.y = 0.005 * Math.sin(time * 0.0037151)\n        }),\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    mesh: SuzanneURL,\n                },\n                image: {\n                    background: BackgroundURL,\n                },\n            }}\n        />\n    )\n}\n";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFtZWJ1ZmZlcl9leGFtcGxlMV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZS1jY2NhZWYuOTlhZDJlYTU2MjY4NmI3NS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFtZWJ1ZmZlci9leGFtcGxlMS9fL2ZyYW1lYnVmZmVyLmRlbW8vZnJhbWVidWZmZXIuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUxL18vZnJhbWVidWZmZXIuZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUxL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkRmlsdGVySHVlUm90YXRpb24sXG4gICAgVGdkRmlsdGVyWm9vbSxcbiAgICBUZ2RMaWdodCxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICBUZ2RWZWMzLFxuICAgIFRnZFZlYzQsXG4gICAgd2ViZ2xQcmVzZXRDdWxsLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvbG9nby5nbGJcIlxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb25zdCBkZWZhdWx0VGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dClcbiAgICBjb250ZXh0LmNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XG4gICAgICAgIHRyYW5zZm86IHsgZGlzdGFuY2U6IDYgfSxcbiAgICAgICAgZmFyOiAxMDAsXG4gICAgICAgIG5lYXI6IDAuMDEsXG4gICAgICAgIGZvdnk6IE1hdGguUEkgLyA0LFxuICAgICAgICB6b29tOiAxLFxuICAgIH0pXG4gICAgY29uc3QgZnJhbWVidWZmZXIxID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XG4gICAgICAgIHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCksXG4gICAgfSlcbiAgICBjb25zdCBmcmFtZWJ1ZmZlcjIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcbiAgICB9KVxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyMi50ZXh0dXJlQ29sb3IwID8/IGRlZmF1bHRUZXh0dXJlLFxuICAgICAgICBmaWx0ZXJzOiBbbmV3IFRnZEZpbHRlclpvb20oKV0sXG4gICAgICAgIGZsaXBZOiB0cnVlLFxuICAgIH0pXG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGJhY2tncm91bmQsXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBkZXB0aDogMSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIubWVzaCxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoMSwgMC42NjYsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJFeHBvbmVudDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWN1bGFySW50ZW5zaXR5OiAyLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodDogbmV3IFRnZExpZ2h0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoMSwgMSwgMSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBuZXcgVGdkVmVjMygxLCAwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoMC4xMTEsIDAuMzMzLCAwLjk5OSwgNCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgLy8gbmV3IFRnZE1hdGVyaWFsTm9ybWFscygpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBmcmFtZWJ1ZmZlcjEuYWRkKHBhaW50ZXIpXG4gICAgY29uc3QgZmlsdGVySHVlID0gbmV3IFRnZEZpbHRlckh1ZVJvdGF0aW9uKHsgaHVlU2hpZnRJbkRlZ3JlZXM6IDIgfSlcbiAgICBjb25zdCBmaWx0ZXJab29tID0gbmV3IFRnZEZpbHRlclpvb20oeyB6b29tOiAxLjAwNyB9KVxuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyMS50ZXh0dXJlQ29sb3IwID8/IGRlZmF1bHRUZXh0dXJlLFxuICAgICAgICBmaWx0ZXJzOiBbZmlsdGVySHVlLCBmaWx0ZXJab29tXSxcbiAgICAgICAgZmxpcFk6IHRydWUsXG4gICAgfSlcbiAgICBmcmFtZWJ1ZmZlcjIuYWRkKGZpbHRlcnMpXG4gICAgY29uc3Qgc2NyZWVuID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlcjEudGV4dHVyZUNvbG9yMCA/PyBkZWZhdWx0VGV4dHVyZSxcbiAgICAgICAgZmlsdGVyczogW25ldyBUZ2RGaWx0ZXJab29tKCldLFxuICAgICAgICBmbGlwWTogdHJ1ZSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBmcmFtZWJ1ZmZlcjEsXG4gICAgICAgIGZyYW1lYnVmZmVyMixcbiAgICAgICAgc2NyZWVuLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxuICAgICAgICAgICAgY2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRYKE1hdGguc2luKHRpbWUgKiAwLjAwNTA0NSkgKiAwLjAzKVxuICAgICAgICAgICAgY2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRZKE1hdGguc2luKHRpbWUgKiAwLjAwMTc1MSkgKiAwLjAyKVxuICAgICAgICAgICAgZmlsdGVyWm9vbS50cmFuc2xhdGlvbi54ID0gMC4wMDUgKiBNYXRoLnNpbih0aW1lICogMC4wMDI0NTgxKVxuICAgICAgICAgICAgZmlsdGVyWm9vbS50cmFuc2xhdGlvbi55ID0gMC4wMDUgKiBNYXRoLnNpbih0aW1lICogMC4wMDM3MTUxKVxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzaDogU3V6YW5uZVVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEJhY2tncm91bmRVUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2ZyYW1lYnVmZmVyLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnN0IGRlZmF1bHRUZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KVxcbiAgICBjb250ZXh0LmNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XFxuICAgICAgICB0cmFuc2ZvOiB7IGRpc3RhbmNlOiA2IH0sXFxuICAgICAgICBmYXI6IDEwMCxcXG4gICAgICAgIG5lYXI6IDAuMDEsXFxuICAgICAgICBmb3Z5OiBNYXRoLlBJIC8gNCxcXG4gICAgICAgIHpvb206IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IGZyYW1lYnVmZmVyMSA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcXG4gICAgfSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXIyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxcbiAgICB9KVxcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIyLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXFxuICAgICAgICBmaWx0ZXJzOiBbbmV3IFRnZEZpbHRlclpvb20oKV0sXFxuICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgfSlcXG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLFxcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIubWVzaCxcXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6ICgpID0+XFxuICAgICAgICAgICAgICAgICAgICBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoMSwgMC42NjYsIDApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyRXhwb25lbnQ6IDUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJJbnRlbnNpdHk6IDIuNSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodDogbmV3IFRnZExpZ2h0KHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG5ldyBUZ2RWZWM0KDEsIDEsIDEsIDEpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG5ldyBUZ2RWZWMzKDEsIDAsIDApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVmVjNCgwLjExMSwgMC4zMzMsIDAuOTk5LCA0KSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAvLyBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxzKCksXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBmcmFtZWJ1ZmZlcjEuYWRkKHBhaW50ZXIpXFxuICAgIGNvbnN0IGZpbHRlckh1ZSA9IG5ldyBUZ2RGaWx0ZXJIdWVSb3RhdGlvbih7IGh1ZVNoaWZ0SW5EZWdyZWVzOiAyIH0pXFxuICAgIGNvbnN0IGZpbHRlclpvb20gPSBuZXcgVGdkRmlsdGVyWm9vbSh7IHpvb206IDEuMDA3IH0pXFxuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlcjEudGV4dHVyZUNvbG9yMCA/PyBkZWZhdWx0VGV4dHVyZSxcXG4gICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJIdWUsIGZpbHRlclpvb21dLFxcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgIH0pXFxuICAgIGZyYW1lYnVmZmVyMi5hZGQoZmlsdGVycylcXG4gICAgY29uc3Qgc2NyZWVuID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIxLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXFxuICAgICAgICBmaWx0ZXJzOiBbbmV3IFRnZEZpbHRlclpvb20oKV0sXFxuICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBmcmFtZWJ1ZmZlcjEsXFxuICAgICAgICBmcmFtZWJ1ZmZlcjIsXFxuICAgICAgICBzY3JlZW4sXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgICAgICAgICBjYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFgoTWF0aC5zaW4odGltZSAqIDAuMDA1MDQ1KSAqIDAuMDMpXFxuICAgICAgICAgICAgY2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRZKE1hdGguc2luKHRpbWUgKiAwLjAwMTc1MSkgKiAwLjAyKVxcbiAgICAgICAgICAgIGZpbHRlclpvb20udHJhbnNsYXRpb24ueCA9IDAuMDA1ICogTWF0aC5zaW4odGltZSAqIDAuMDAyNDU4MSlcXG4gICAgICAgICAgICBmaWx0ZXJab29tLnRyYW5zbGF0aW9uLnkgPSAwLjAwNSAqIE1hdGguc2luKHRpbWUgKiAwLjAwMzcxNTEpXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZEZpbHRlckh1ZVJvdGF0aW9uLFxcbiAgICBUZ2RGaWx0ZXJab29tLFxcbiAgICBUZ2RMaWdodCxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICBUZ2RWZWMzLFxcbiAgICBUZ2RWZWM0LFxcbiAgICB3ZWJnbFByZXNldEN1bGwsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9sb2dvLmdsYlxcXCJcXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9pbWFnZS9kaW5vLndlYnBcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBkZWZhdWx0VGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dClcXG4gICAgY29udGV4dC5jYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoe1xcbiAgICAgICAgdHJhbnNmbzogeyBkaXN0YW5jZTogNiB9LFxcbiAgICAgICAgZmFyOiAxMDAsXFxuICAgICAgICBuZWFyOiAwLjAxLFxcbiAgICAgICAgZm92eTogTWF0aC5QSSAvIDQsXFxuICAgICAgICB6b29tOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBmcmFtZWJ1ZmZlcjEgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCksXFxuICAgIH0pXFxuICAgIGNvbnN0IGZyYW1lYnVmZmVyMiA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcXG4gICAgfSlcXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyMi50ZXh0dXJlQ29sb3IwID8/IGRlZmF1bHRUZXh0dXJlLFxcbiAgICAgICAgZmlsdGVyczogW25ldyBUZ2RGaWx0ZXJab29tKCldLFxcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgIH0pXFxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgYmFja2dyb3VuZCxcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLm1lc2gsXFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiAoKSA9PlxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG5ldyBUZ2RWZWM0KDEsIDAuNjY2LCAwKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjdWxhckV4cG9uZW50OiA1LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWN1bGFySW50ZW5zaXR5OiAyLjUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVmVjNCgxLCAxLCAxLCAxKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBuZXcgVGdkVmVjMygxLCAwLCAwKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoMC4xMTEsIDAuMzMzLCAwLjk5OSwgNCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgLy8gbmV3IFRnZE1hdGVyaWFsTm9ybWFscygpLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgZnJhbWVidWZmZXIxLmFkZChwYWludGVyKVxcbiAgICBjb25zdCBmaWx0ZXJIdWUgPSBuZXcgVGdkRmlsdGVySHVlUm90YXRpb24oeyBodWVTaGlmdEluRGVncmVlczogMiB9KVxcbiAgICBjb25zdCBmaWx0ZXJab29tID0gbmV3IFRnZEZpbHRlclpvb20oeyB6b29tOiAxLjAwNyB9KVxcbiAgICBjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIxLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXFxuICAgICAgICBmaWx0ZXJzOiBbZmlsdGVySHVlLCBmaWx0ZXJab29tXSxcXG4gICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICB9KVxcbiAgICBmcmFtZWJ1ZmZlcjIuYWRkKGZpbHRlcnMpXFxuICAgIGNvbnN0IHNjcmVlbiA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyMS50ZXh0dXJlQ29sb3IwID8/IGRlZmF1bHRUZXh0dXJlLFxcbiAgICAgICAgZmlsdGVyczogW25ldyBUZ2RGaWx0ZXJab29tKCldLFxcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgZnJhbWVidWZmZXIxLFxcbiAgICAgICAgZnJhbWVidWZmZXIyLFxcbiAgICAgICAgc2NyZWVuLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgICAgICAgICAgY2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRYKE1hdGguc2luKHRpbWUgKiAwLjAwNTA0NSkgKiAwLjAzKVxcbiAgICAgICAgICAgIGNhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWShNYXRoLnNpbih0aW1lICogMC4wMDE3NTEpICogMC4wMilcXG4gICAgICAgICAgICBmaWx0ZXJab29tLnRyYW5zbGF0aW9uLnggPSAwLjAwNSAqIE1hdGguc2luKHRpbWUgKiAwLjAwMjQ1ODEpXFxuICAgICAgICAgICAgZmlsdGVyWm9vbS50cmFuc2xhdGlvbi55ID0gMC4wMDUgKiBNYXRoLnNpbih0aW1lICogMC4wMDM3MTUxKVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICBtZXNoOiBTdXphbm5lVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQmFja2dyb3VuZFVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZEZpbHRlckh1ZVJvdGF0aW9uIiwiVGdkRmlsdGVyWm9vbSIsIlRnZExpZ2h0IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckZpbHRlciIsIlRnZFBhaW50ZXJGcmFtZWJ1ZmZlciIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlRnZFZlYzMiLCJUZ2RWZWM0Iiwid2ViZ2xQcmVzZXRDdWxsIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJTdXphbm5lVVJMIiwiQmFja2dyb3VuZFVSTCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiX2ZyYW1lYnVmZmVyMl90ZXh0dXJlQ29sb3IwIiwiX2ZyYW1lYnVmZmVyMV90ZXh0dXJlQ29sb3IwIiwiX2ZyYW1lYnVmZmVyMV90ZXh0dXJlQ29sb3IwMSIsImRlZmF1bHRUZXh0dXJlIiwiTWF0aCIsImZyYW1lYnVmZmVyMSIsImZyYW1lYnVmZmVyMiIsImJhY2tncm91bmQiLCJwYWludGVyIiwibWF0ZXJpYWwiLCJmaWx0ZXJIdWUiLCJmaWx0ZXJab29tIiwiZmlsdGVycyIsInNjcmVlbiIsInRpbWUiLCJjYW1lcmEiLCJEZW1vIiwiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCdUI7QUFDNkI7QUFFTDtBQUNLO0FBRXBELFNBQVNtQixLQUFLQyxPQUFtQixFQUFFQyxNQUFjO1FBaUJoQ0MsNkJBbUNBQyw2QkFNQUM7SUF6RGIsU0FBUztJQUNULElBQU1DLGlCQUFpQixJQUFJZCw0Q0FBWUEsQ0FBQ1M7SUFDeENBLFFBQVEsTUFBTSxHQUFHLElBQUlwQixvREFBb0JBLENBQUM7UUFDdEMsU0FBUztZQUFFLFVBQVU7UUFBRTtRQUN2QixLQUFLO1FBQ0wsTUFBTTtR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