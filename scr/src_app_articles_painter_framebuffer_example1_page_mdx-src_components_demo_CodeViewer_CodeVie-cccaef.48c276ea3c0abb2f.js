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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFtZWJ1ZmZlcl9leGFtcGxlMV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZS1jY2NhZWYuNDhjMjc2ZWEzYzBhYmIyZi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUxL18vZnJhbWVidWZmZXIuZGVtby9mcmFtZWJ1ZmZlci5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFtZWJ1ZmZlci9leGFtcGxlMS9fL2ZyYW1lYnVmZmVyLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUxL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RGaWx0ZXJIdWVSb3RhdGlvbixcbiAgICBUZ2RGaWx0ZXJab29tLFxuICAgIFRnZExpZ2h0LFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckZpbHRlcixcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFZlYzMsXG4gICAgVGdkVmVjNCxcbiAgICB3ZWJnbFByZXNldEN1bGwsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9sb2dvLmdsYlwiXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvZGluby53ZWJwXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnN0IGRlZmF1bHRUZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KVxuICAgIGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcbiAgICAgICAgdHJhbnNmbzogeyBkaXN0YW5jZTogNiB9LFxuICAgICAgICBmYXI6IDEwMCxcbiAgICAgICAgbmVhcjogMC4wMSxcbiAgICAgICAgZm92eTogTWF0aC5QSSAvIDQsXG4gICAgICAgIHpvb206IDEsXG4gICAgfSlcbiAgICBjb25zdCBmcmFtZWJ1ZmZlcjEgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcbiAgICB9KVxuICAgIGNvbnN0IGZyYW1lYnVmZmVyMiA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxuICAgIH0pXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcbiAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIyLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXG4gICAgICAgIGZpbHRlcnM6IFtuZXcgVGdkRmlsdGVyWm9vbSgpXSxcbiAgICAgICAgZmxpcFk6IHRydWUsXG4gICAgfSlcbiAgICBjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgYmFja2dyb3VuZCxcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5tZXNoLFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiAoKSA9PlxuICAgICAgICAgICAgICAgICAgICBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVmVjNCgxLCAwLjY2NiwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjdWxhckV4cG9uZW50OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJJbnRlbnNpdHk6IDIuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBuZXcgVGdkTGlnaHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVmVjNCgxLCAxLCAxLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG5ldyBUZ2RWZWMzKDEsIDAsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVmVjNCgwLjExMSwgMC4zMzMsIDAuOTk5LCA0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAvLyBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxzKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KVxuICAgIGZyYW1lYnVmZmVyMS5hZGQocGFpbnRlcilcbiAgICBjb25zdCBmaWx0ZXJIdWUgPSBuZXcgVGdkRmlsdGVySHVlUm90YXRpb24oeyBodWVTaGlmdEluRGVncmVlczogMiB9KVxuICAgIGNvbnN0IGZpbHRlclpvb20gPSBuZXcgVGdkRmlsdGVyWm9vbSh7IHpvb206IDEuMDA3IH0pXG4gICAgY29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcbiAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIxLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXG4gICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJIdWUsIGZpbHRlclpvb21dLFxuICAgICAgICBmbGlwWTogdHJ1ZSxcbiAgICB9KVxuICAgIGZyYW1lYnVmZmVyMi5hZGQoZmlsdGVycylcbiAgICBjb25zdCBzY3JlZW4gPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyMS50ZXh0dXJlQ29sb3IwID8/IGRlZmF1bHRUZXh0dXJlLFxuICAgICAgICBmaWx0ZXJzOiBbbmV3IFRnZEZpbHRlclpvb20oKV0sXG4gICAgICAgIGZsaXBZOiB0cnVlLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGZyYW1lYnVmZmVyMSxcbiAgICAgICAgZnJhbWVidWZmZXIyLFxuICAgICAgICBzY3JlZW4sXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgICAgICAgICBjYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFgoTWF0aC5zaW4odGltZSAqIDAuMDA1MDQ1KSAqIDAuMDMpXG4gICAgICAgICAgICBjYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFkoTWF0aC5zaW4odGltZSAqIDAuMDAxNzUxKSAqIDAuMDIpXG4gICAgICAgICAgICBmaWx0ZXJab29tLnRyYW5zbGF0aW9uLnggPSAwLjAwNSAqIE1hdGguc2luKHRpbWUgKiAwLjAwMjQ1ODEpXG4gICAgICAgICAgICBmaWx0ZXJab29tLnRyYW5zbGF0aW9uLnkgPSAwLjAwNSAqIE1hdGguc2luKHRpbWUgKiAwLjAwMzcxNTEpXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjoge1xuICAgICAgICAgICAgICAgICAgICBtZXNoOiBTdXphbm5lVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQmFja2dyb3VuZFVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vZnJhbWVidWZmZXIuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCIgICAgY29uc3QgZGVmYXVsdFRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpXFxuICAgIGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcXG4gICAgICAgIHRyYW5zZm86IHsgZGlzdGFuY2U6IDYgfSxcXG4gICAgICAgIGZhcjogMTAwLFxcbiAgICAgICAgbmVhcjogMC4wMSxcXG4gICAgICAgIGZvdnk6IE1hdGguUEkgLyA0LFxcbiAgICAgICAgem9vbTogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXIxID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxcbiAgICB9KVxcbiAgICBjb25zdCBmcmFtZWJ1ZmZlcjIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCksXFxuICAgIH0pXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlcjIudGV4dHVyZUNvbG9yMCA/PyBkZWZhdWx0VGV4dHVyZSxcXG4gICAgICAgIGZpbHRlcnM6IFtuZXcgVGdkRmlsdGVyWm9vbSgpXSxcXG4gICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICB9KVxcbiAgICBjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIGJhY2tncm91bmQsXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5tZXNoLFxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogKCkgPT5cXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVmVjNCgxLCAwLjY2NiwgMCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJFeHBvbmVudDogNSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjdWxhckludGVuc2l0eTogMi41LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBuZXcgVGdkTGlnaHQoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoMSwgMSwgMSwgMSksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogbmV3IFRnZFZlYzMoMSwgMCwgMCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG5ldyBUZ2RWZWM0KDAuMTExLCAwLjMzMywgMC45OTksIDQpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgIC8vIG5ldyBUZ2RNYXRlcmlhbE5vcm1hbHMoKSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGZyYW1lYnVmZmVyMS5hZGQocGFpbnRlcilcXG4gICAgY29uc3QgZmlsdGVySHVlID0gbmV3IFRnZEZpbHRlckh1ZVJvdGF0aW9uKHsgaHVlU2hpZnRJbkRlZ3JlZXM6IDIgfSlcXG4gICAgY29uc3QgZmlsdGVyWm9vbSA9IG5ldyBUZ2RGaWx0ZXJab29tKHsgem9vbTogMS4wMDcgfSlcXG4gICAgY29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyMS50ZXh0dXJlQ29sb3IwID8/IGRlZmF1bHRUZXh0dXJlLFxcbiAgICAgICAgZmlsdGVyczogW2ZpbHRlckh1ZSwgZmlsdGVyWm9vbV0sXFxuICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgfSlcXG4gICAgZnJhbWVidWZmZXIyLmFkZChmaWx0ZXJzKVxcbiAgICBjb25zdCBzY3JlZW4gPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlcjEudGV4dHVyZUNvbG9yMCA/PyBkZWZhdWx0VGV4dHVyZSxcXG4gICAgICAgIGZpbHRlcnM6IFtuZXcgVGdkRmlsdGVyWm9vbSgpXSxcXG4gICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGZyYW1lYnVmZmVyMSxcXG4gICAgICAgIGZyYW1lYnVmZmVyMixcXG4gICAgICAgIHNjcmVlbixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICAgICAgICAgIGNhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWChNYXRoLnNpbih0aW1lICogMC4wMDUwNDUpICogMC4wMylcXG4gICAgICAgICAgICBjYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFkoTWF0aC5zaW4odGltZSAqIDAuMDAxNzUxKSAqIDAuMDIpXFxuICAgICAgICAgICAgZmlsdGVyWm9vbS50cmFuc2xhdGlvbi54ID0gMC4wMDUgKiBNYXRoLnNpbih0aW1lICogMC4wMDI0NTgxKVxcbiAgICAgICAgICAgIGZpbHRlclpvb20udHJhbnNsYXRpb24ueSA9IDAuMDA1ICogTWF0aC5zaW4odGltZSAqIDAuMDAzNzE1MSlcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkRmlsdGVySHVlUm90YXRpb24sXFxuICAgIFRnZEZpbHRlclpvb20sXFxuICAgIFRnZExpZ2h0LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckZpbHRlcixcXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIFRnZFZlYzMsXFxuICAgIFRnZFZlYzQsXFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL2xvZ28uZ2xiXFxcIlxcbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXFxcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGRlZmF1bHRUZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KVxcbiAgICBjb250ZXh0LmNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XFxuICAgICAgICB0cmFuc2ZvOiB7IGRpc3RhbmNlOiA2IH0sXFxuICAgICAgICBmYXI6IDEwMCxcXG4gICAgICAgIG5lYXI6IDAuMDEsXFxuICAgICAgICBmb3Z5OiBNYXRoLlBJIC8gNCxcXG4gICAgICAgIHpvb206IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IGZyYW1lYnVmZmVyMSA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcXG4gICAgfSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXIyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxcbiAgICB9KVxcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIyLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXFxuICAgICAgICBmaWx0ZXJzOiBbbmV3IFRnZEZpbHRlclpvb20oKV0sXFxuICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgfSlcXG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLFxcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIubWVzaCxcXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6ICgpID0+XFxuICAgICAgICAgICAgICAgICAgICBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoMSwgMC42NjYsIDApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWN1bGFyRXhwb25lbnQ6IDUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJJbnRlbnNpdHk6IDIuNSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodDogbmV3IFRnZExpZ2h0KHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG5ldyBUZ2RWZWM0KDEsIDEsIDEsIDEpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG5ldyBUZ2RWZWMzKDEsIDAsIDApLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVmVjNCgwLjExMSwgMC4zMzMsIDAuOTk5LCA0KSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAvLyBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxzKCksXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBmcmFtZWJ1ZmZlcjEuYWRkKHBhaW50ZXIpXFxuICAgIGNvbnN0IGZpbHRlckh1ZSA9IG5ldyBUZ2RGaWx0ZXJIdWVSb3RhdGlvbih7IGh1ZVNoaWZ0SW5EZWdyZWVzOiAyIH0pXFxuICAgIGNvbnN0IGZpbHRlclpvb20gPSBuZXcgVGdkRmlsdGVyWm9vbSh7IHpvb206IDEuMDA3IH0pXFxuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlcjEudGV4dHVyZUNvbG9yMCA/PyBkZWZhdWx0VGV4dHVyZSxcXG4gICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJIdWUsIGZpbHRlclpvb21dLFxcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgIH0pXFxuICAgIGZyYW1lYnVmZmVyMi5hZGQoZmlsdGVycylcXG4gICAgY29uc3Qgc2NyZWVuID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIxLnRleHR1cmVDb2xvcjAgPz8gZGVmYXVsdFRleHR1cmUsXFxuICAgICAgICBmaWx0ZXJzOiBbbmV3IFRnZEZpbHRlclpvb20oKV0sXFxuICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBmcmFtZWJ1ZmZlcjEsXFxuICAgICAgICBmcmFtZWJ1ZmZlcjIsXFxuICAgICAgICBzY3JlZW4sXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgICAgICAgICBjYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFgoTWF0aC5zaW4odGltZSAqIDAuMDA1MDQ1KSAqIDAuMDMpXFxuICAgICAgICAgICAgY2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRZKE1hdGguc2luKHRpbWUgKiAwLjAwMTc1MSkgKiAwLjAyKVxcbiAgICAgICAgICAgIGZpbHRlclpvb20udHJhbnNsYXRpb24ueCA9IDAuMDA1ICogTWF0aC5zaW4odGltZSAqIDAuMDAyNDU4MSlcXG4gICAgICAgICAgICBmaWx0ZXJab29tLnRyYW5zbGF0aW9uLnkgPSAwLjAwNSAqIE1hdGguc2luKHRpbWUgKiAwLjAwMzcxNTEpXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgIG1lc2g6IFN1emFubmVVUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZENhbWVyYVBlcnNwZWN0aXZlIiwiVGdkRmlsdGVySHVlUm90YXRpb24iLCJUZ2RGaWx0ZXJab29tIiwiVGdkTGlnaHQiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyRmlsdGVyIiwiVGdkUGFpbnRlckZyYW1lYnVmZmVyIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVGdkVmVjMyIsIlRnZFZlYzQiLCJ3ZWJnbFByZXNldEN1bGwiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIlN1emFubmVVUkwiLCJCYWNrZ3JvdW5kVVJMIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJfZnJhbWVidWZmZXIyX3RleHR1cmVDb2xvcjAiLCJfZnJhbWVidWZmZXIxX3RleHR1cmVDb2xvcjAiLCJfZnJhbWVidWZmZXIxX3RleHR1cmVDb2xvcjAxIiwiZGVmYXVsdFRleHR1cmUiLCJNYXRoIiwiZnJhbWVidWZmZXIxIiwiZnJhbWVidWZmZXIyIiwiYmFja2dyb3VuZCIsInBhaW50ZXIiLCJtYXRlcmlhbCIsImZpbHRlckh1ZSIsImZpbHRlclpvb20iLCJmaWx0ZXJzIiwic2NyZWVuIiwidGltZSIsImNhbWVyYSIsIkRlbW8iLCJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0J1QjtBQUM2QjtBQUVMO0FBQ0s7QUFFcEQsU0FBU21CLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7UUFpQmhDQyw2QkFtQ0FDLDZCQU1BQztJQXpEYixTQUFTO0lBQ1QsSUFBTUMsaUJBQWlCLElBQUlkLDRDQUFZQSxDQUFDUztJQUN4Q0EsUUFBUSxNQUFNLEdBQUcsSUFBSXBCLG9EQUFvQkEsQ0FBQztRQUN0QyxTQUFTO1lBQUUsVUFBVTtRQUFFO1FBQ3ZCLEtBQUs7UUFDTCxNQUFNO1FBQ04s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