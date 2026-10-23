"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_filter_anti-aliasing_page_mdx-src_components_demo_CodeViewer_CodeVie-330e50"], {
98771(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne-low.9e07f8932ceaa6ca.glb";

},
78832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_mesh_suzanne_low_glb__rspack_import_3 = __webpack_require__(98771);
function _instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}




var BACKGROUND = [
    0.9,
    0.92,
    0.95,
    1
];
function init(context, assets) {
    // Low resolution and pixelated canvas, to see the pixels.
    context.resolution = 0.5;
    if (_instanceof(context.canvas, HTMLCanvasElement)) context.canvas.style.imageRendering = "pixelated";
    context.camera.fitSpaceAtTarget(2.5, 2.5);
    // #begin
    // The flat faces of a low poly mesh give sharp creases to the cavity.
    var suzanne = {
        geometry: assets.glb.suzanne.makeGeometry(),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo(),
        visible: true,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: [
                0.9,
                0.5,
                0.2,
                1
            ]
        })
    };
    var box = {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox({
            sizeX: 0.5,
            sizeY: 0.5,
            sizeZ: 0.5
        }),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: [
                0,
                0,
                0
            ],
            distance: 1.3
        }),
        visible: true,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: [
                0.2,
                0.5,
                0.9,
                1
            ]
        })
    };
    var deferred = new _tolokoban_tgd__rspack_import_1.TgdPainterDeferredShading(context, {
        meshes: [
            suzanne,
            box
        ]
    });
    var shading = new _tolokoban_tgd__rspack_import_1.TgdFilterDeferredShading(context, {
        textureNormals: deferred.textureNormals,
        textureDepth: deferred.textureDepth,
        textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,
        skyboxTexture: "#bcd",
        light: new _tolokoban_tgd__rspack_import_1.TgdLight({
            color: [
                1,
                0.95,
                0.9,
                1
            ],
            direction: [
                -1,
                -1,
                -1
            ]
        }),
        // Thin bright and dark lines on the edges: the worst case for aliasing.
        cavity: {
            ridge: 2,
            valley: 2
        }
    });
    // The deferred shading has no anti-aliasing, and the background is transparent.
    var filterAA = new _tolokoban_tgd__rspack_import_1.TgdFilterAntiAliasing({
        alpha: true
    });
    context.add(deferred, new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: BACKGROUND,
        depth: 1
    }), // Nothing is painted (alpha = 0) where there is no mesh.
    new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "off",
        cull: "off",
        blend: "alpha",
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
                texture: deferred.textureAlbedo,
                filters: [
                    shading,
                    filterAA
                ],
                flipY: true
            })
        ]
    }), function(_time, delta) {
        suzanne.transfo.orbitAroundY(delta * 0.2);
        box.transfo.orbitAroundY(-delta * 0.3).orbitAroundX(delta * 0.17);
    });
    context.play();
    // #end
    return function(param) {
        var fxaa = param.fxaa, subpixel = param.subpixel, edgeThreshold = param.edgeThreshold;
        filterAA.strength = fxaa;
        filterAA.subpixel = subpixel;
        filterAA.edgeThreshold = edgeThreshold;
    };
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        controller: {
            inertiaOrbit: 1000
        },
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_low_glb__rspack_import_3
            }
        },
        settings: {
            fxaa: {
                label: "FXAA",
                value: 1,
                step: [
                    "off",
                    "on"
                ]
            },
            subpixel: {
                label: "subpixel",
                value: 0.75,
                min: 0,
                max: 1
            },
            edgeThreshold: {
                label: "edgeThreshold",
                value: 0.166,
                min: 0.063,
                max: 0.333
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/_/anti-aliasing.demo/anti-aliasing.demo.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}


},
48662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _anti_aliasing_demo__rspack_import_4 = __webpack_require__(78832);
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
    "Detail #1": '    // The flat faces of a low poly mesh give sharp creases to the cavity.\n    const suzanne: TgdMeshWithTextures = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        transfo: new TgdTransfo(),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [0.9, 0.5, 0.2, 1] }),\n    }\n    const box: TgdMeshWithTextures = {\n        geometry: new TgdGeometryBox({ sizeX: 0.5, sizeY: 0.5, sizeZ: 0.5 }),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 1.3 }),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [0.2, 0.5, 0.9, 1] }),\n    }\n    const deferred = new TgdPainterDeferredShading(context, { meshes: [suzanne, box] })\n    const shading = new TgdFilterDeferredShading(context, {\n        textureNormals: deferred.textureNormals,\n        textureDepth: deferred.textureDepth,\n        textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,\n        skyboxTexture: "#bcd",\n        light: new TgdLight({ color: [1, 0.95, 0.9, 1], direction: [-1, -1, -1] }),\n        // Thin bright and dark lines on the edges: the worst case for aliasing.\n        cavity: { ridge: 2, valley: 2 },\n    })\n    // The deferred shading has no anti-aliasing, and the background is transparent.\n    const filterAA = new TgdFilterAntiAliasing({ alpha: true })\n    context.add(\n        deferred,\n        new TgdPainterClear(context, { color: BACKGROUND, depth: 1 }),\n        // Nothing is painted (alpha = 0) where there is no mesh.\n        new TgdPainterState(context, {\n            depth: "off",\n            cull: "off",\n            blend: "alpha",\n            children: [\n                new TgdPainterFilter(context, {\n                    texture: deferred.textureAlbedo,\n                    filters: [shading, filterAA],\n                    flipY: true,\n                }),\n            ],\n        }),\n        (_time, delta) => {\n            suzanne.transfo.orbitAroundY(delta * 0.2)\n            box.transfo.orbitAroundY(-delta * 0.3).orbitAroundX(delta * 0.17)\n        },\n    )\n    context.play()'
};
var FULL = 'import {\n    type TgdContext,\n    TgdFilterAntiAliasing,\n    TgdFilterDeferredShading,\n    TgdGeometryBox,\n    TgdLight,\n    TgdMaterialFlat,\n    type TgdMeshWithTextures,\n    TgdPainterClear,\n    TgdPainterDeferredShading,\n    TgdPainterFilter,\n    TgdPainterState,\n    TgdTransfo,\n} from "@tolokoban/tgd"\nimport View, { type Assets } from "@/components/demo/Tgd"\nimport SuzanneURL from "@/assets/mesh/suzanne-low.glb"\n\nconst BACKGROUND: [number, number, number, number] = [0.9, 0.92, 0.95, 1]\n\nfunction init(context: TgdContext, assets: Assets) {\n    // Low resolution and pixelated canvas, to see the pixels.\n    context.resolution = 0.5\n    if (context.canvas instanceof HTMLCanvasElement) context.canvas.style.imageRendering = "pixelated"\n    context.camera.fitSpaceAtTarget(2.5, 2.5)\n    // The flat faces of a low poly mesh give sharp creases to the cavity.\n    const suzanne: TgdMeshWithTextures = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        transfo: new TgdTransfo(),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [0.9, 0.5, 0.2, 1] }),\n    }\n    const box: TgdMeshWithTextures = {\n        geometry: new TgdGeometryBox({ sizeX: 0.5, sizeY: 0.5, sizeZ: 0.5 }),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 1.3 }),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [0.2, 0.5, 0.9, 1] }),\n    }\n    const deferred = new TgdPainterDeferredShading(context, { meshes: [suzanne, box] })\n    const shading = new TgdFilterDeferredShading(context, {\n        textureNormals: deferred.textureNormals,\n        textureDepth: deferred.textureDepth,\n        textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,\n        skyboxTexture: "#bcd",\n        light: new TgdLight({ color: [1, 0.95, 0.9, 1], direction: [-1, -1, -1] }),\n        // Thin bright and dark lines on the edges: the worst case for aliasing.\n        cavity: { ridge: 2, valley: 2 },\n    })\n    // The deferred shading has no anti-aliasing, and the background is transparent.\n    const filterAA = new TgdFilterAntiAliasing({ alpha: true })\n    context.add(\n        deferred,\n        new TgdPainterClear(context, { color: BACKGROUND, depth: 1 }),\n        // Nothing is painted (alpha = 0) where there is no mesh.\n        new TgdPainterState(context, {\n            depth: "off",\n            cull: "off",\n            blend: "alpha",\n            children: [\n                new TgdPainterFilter(context, {\n                    texture: deferred.textureAlbedo,\n                    filters: [shading, filterAA],\n                    flipY: true,\n                }),\n            ],\n        }),\n        (_time, delta) => {\n            suzanne.transfo.orbitAroundY(delta * 0.2)\n            box.transfo.orbitAroundY(-delta * 0.3).orbitAroundX(delta * 0.17)\n        },\n    )\n    context.play()\n    return ({ fxaa, subpixel, edgeThreshold }: { fxaa: number; subpixel: number; edgeThreshold: number }) => {\n        filterAA.strength = fxaa\n        filterAA.subpixel = subpixel\n        filterAA.edgeThreshold = edgeThreshold\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            controller={{ inertiaOrbit: 1000 }}\n            assets={{ glb: { suzanne: SuzanneURL } }}\n            settings={{\n                fxaa: { label: "FXAA", value: 1, step: ["off", "on"] },\n                subpixel: { label: "subpixel", value: 0.75, min: 0, max: 1 },\n                edgeThreshold: { label: "edgeThreshold", value: 0.166, min: 0.063, max: 0.333 },\n            }}\n        />\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_anti_aliasing_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/_/anti-aliasing.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/_/anti-aliasing.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 13
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/_/anti-aliasing.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/_/anti-aliasing.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/_/anti-aliasing.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/_/anti-aliasing.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}


},
40873(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _anti_aliasing_demo__rspack_import_1 = __webpack_require__(48662);
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
        code: "code",
        h1: "h1",
        h2: "h2",
        li: "li",
        p: "p",
        pre: "pre",
        span: "span",
        strong: "strong",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterFilter.html",
                    children: "TgdPainterFilter"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#..",
                    children: "Back to the list of available filters"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                    lineNumber: 5,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdFilterAntiAliasing.html",
                    children: "TgdFilterAntiAliasing"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                    lineNumber: 7,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_anti_aliasing_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "This demo uses deferred shading with a strong ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "cavity"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                        lineNumber: 11,
                        columnNumber: 47
                    }, this),
                    ": it draws thin bright and dark lines\non the creases of the meshes, which are very aliased without anti-aliasing.\nThe canvas has half the resolution of the screen, to make the pixels visible.\nSwitch ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "FXAA"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                        lineNumber: 14,
                        columnNumber: 8
                    }, this),
                    " off and on to see the difference."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Fast Approximate Anti-Aliasing (FXAA). Only the pixels on an edge are processed:\nthe filter finds the direction and the ends of the edge, then blends the pixel with its neighbour\nacross the edge. The rest of the image stays sharp."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                lineNumber: 16,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Framebuffers have no anti-aliasing, and MSAA cannot be used for deferred shading.\nIn these cases, add this filter at the end of the chain, after the lighting:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterFilter"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx"
                        }, this),
                        "(context, {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "texture"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx"
                        }, this),
                        ": deferred.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "textureAlbedo"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx"
                        }, this),
                        ",\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "filters"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx"
                        }, this),
                        ": [shading, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdFilterAntiAliasing"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx"
                        }, this),
                        "({ ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "alpha"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-literal",
                            children: "true"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx"
                        }, this),
                        " })],\n})\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                    lineNumber: 23,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                lineNumber: 23,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "strength"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                                lineNumber: 30,
                                columnNumber: 3
                            }, this),
                            " (default 1): mix between the input (0) and the anti-aliased image (1)."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                        lineNumber: 30,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "subpixel"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                                lineNumber: 31,
                                columnNumber: 3
                            }, this),
                            " (default 0.75): smoothing of the details smaller than a pixel."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                        lineNumber: 31,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "edgeThreshold"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                                lineNumber: 32,
                                columnNumber: 3
                            }, this),
                            " (default 0.166) and ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "edgeThresholdMin"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                                lineNumber: 32,
                                columnNumber: 39
                            }, this),
                            " (default 0.0833): minimal contrast of an edge."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                        lineNumber: 32,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "alpha"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                                lineNumber: 33,
                                columnNumber: 3
                            }, this),
                            " (default ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "false"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                                lineNumber: 33,
                                columnNumber: 20
                            }, this),
                            "): set it to ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "true"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                                lineNumber: 33,
                                columnNumber: 40
                            }, this),
                            " if the image has transparent parts, to smooth their edges too."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                        lineNumber: 33,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                lineNumber: 30,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "They are public fields, so you can change them at any time.\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: [
                            "The input texture must use ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "LINEAR"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                                lineNumber: 36,
                                columnNumber: 30
                            }, this),
                            " filtering."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                        lineNumber: 36,
                        columnNumber: 1
                    }, this),
                    " FXAA blends a pixel with its neighbour by reading\nthe texture between two texels, so with ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "NEAREST"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                        lineNumber: 37,
                        columnNumber: 41
                    }, this),
                    " the filter has almost no effect.\nThe intermediate textures of ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterFilter"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                        lineNumber: 38,
                        columnNumber: 30
                    }, this),
                    " already use ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "LINEAR"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                        lineNumber: 38,
                        columnNumber: 61
                    }, this),
                    ", so this only matters\nwhen ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdFilterAntiAliasing"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                        lineNumber: 39,
                        columnNumber: 6
                    }, this),
                    " is the first filter of the chain."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
                lineNumber: 35,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/anti-aliasing/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9maWx0ZXJfYW50aS1hbGlhc2luZ19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZS0zMzBlNTAuNzQ0OWM5ODYwNzAxY2QzZS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9hbnRpLWFsaWFzaW5nL18vYW50aS1hbGlhc2luZy5kZW1vL2FudGktYWxpYXNpbmcuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZmlsdGVyL2FudGktYWxpYXNpbmcvXy9hbnRpLWFsaWFzaW5nLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9hbnRpLWFsaWFzaW5nL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZEZpbHRlckFudGlBbGlhc2luZyxcbiAgICBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcsXG4gICAgVGdkR2VvbWV0cnlCb3gsXG4gICAgVGdkTGlnaHQsXG4gICAgVGdkTWF0ZXJpYWxGbGF0LFxuICAgIHR5cGUgVGdkTWVzaFdpdGhUZXh0dXJlcyxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUcmFuc2ZvLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUtbG93LmdsYlwiXG5cbmNvbnN0IEJBQ0tHUk9VTkQ6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdID0gWzAuOSwgMC45MiwgMC45NSwgMV1cblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vIExvdyByZXNvbHV0aW9uIGFuZCBwaXhlbGF0ZWQgY2FudmFzLCB0byBzZWUgdGhlIHBpeGVscy5cbiAgICBjb250ZXh0LnJlc29sdXRpb24gPSAwLjVcbiAgICBpZiAoY29udGV4dC5jYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkgY29udGV4dC5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBcInBpeGVsYXRlZFwiXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLjUsIDIuNSlcbiAgICAvLyAjYmVnaW5cbiAgICAvLyBUaGUgZmxhdCBmYWNlcyBvZiBhIGxvdyBwb2x5IG1lc2ggZ2l2ZSBzaGFycCBjcmVhc2VzIHRvIHRoZSBjYXZpdHkuXG4gICAgY29uc3Qgc3V6YW5uZTogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcbiAgICAgICAgZ2VvbWV0cnk6IGFzc2V0cy5nbGIuc3V6YW5uZS5tYWtlR2VvbWV0cnkoKSxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oKSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzAuOSwgMC41LCAwLjIsIDFdIH0pLFxuICAgIH1cbiAgICBjb25zdCBib3g6IFRnZE1lc2hXaXRoVGV4dHVyZXMgPSB7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goeyBzaXplWDogMC41LCBzaXplWTogMC41LCBzaXplWjogMC41IH0pLFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMCwgMCwgMF0sIGRpc3RhbmNlOiAxLjMgfSksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3I6IFswLjIsIDAuNSwgMC45LCAxXSB9KSxcbiAgICB9XG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7IG1lc2hlczogW3N1emFubmUsIGJveF0gfSlcbiAgICBjb25zdCBzaGFkaW5nID0gbmV3IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XG4gICAgICAgIHRleHR1cmVOb3JtYWxzOiBkZWZlcnJlZC50ZXh0dXJlTm9ybWFscyxcbiAgICAgICAgdGV4dHVyZURlcHRoOiBkZWZlcnJlZC50ZXh0dXJlRGVwdGgsXG4gICAgICAgIHRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTzogZGVmZXJyZWQudGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPLFxuICAgICAgICBza3lib3hUZXh0dXJlOiBcIiNiY2RcIixcbiAgICAgICAgbGlnaHQ6IG5ldyBUZ2RMaWdodCh7IGNvbG9yOiBbMSwgMC45NSwgMC45LCAxXSwgZGlyZWN0aW9uOiBbLTEsIC0xLCAtMV0gfSksXG4gICAgICAgIC8vIFRoaW4gYnJpZ2h0IGFuZCBkYXJrIGxpbmVzIG9uIHRoZSBlZGdlczogdGhlIHdvcnN0IGNhc2UgZm9yIGFsaWFzaW5nLlxuICAgICAgICBjYXZpdHk6IHsgcmlkZ2U6IDIsIHZhbGxleTogMiB9LFxuICAgIH0pXG4gICAgLy8gVGhlIGRlZmVycmVkIHNoYWRpbmcgaGFzIG5vIGFudGktYWxpYXNpbmcsIGFuZCB0aGUgYmFja2dyb3VuZCBpcyB0cmFuc3BhcmVudC5cbiAgICBjb25zdCBmaWx0ZXJBQSA9IG5ldyBUZ2RGaWx0ZXJBbnRpQWxpYXNpbmcoeyBhbHBoYTogdHJ1ZSB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBkZWZlcnJlZCxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBCQUNLR1JPVU5ELCBkZXB0aDogMSB9KSxcbiAgICAgICAgLy8gTm90aGluZyBpcyBwYWludGVkIChhbHBoYSA9IDApIHdoZXJlIHRoZXJlIGlzIG5vIG1lc2guXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IFwib2ZmXCIsXG4gICAgICAgICAgICBjdWxsOiBcIm9mZlwiLFxuICAgICAgICAgICAgYmxlbmQ6IFwiYWxwaGFcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiBkZWZlcnJlZC50ZXh0dXJlQWxiZWRvLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbc2hhZGluZywgZmlsdGVyQUFdLFxuICAgICAgICAgICAgICAgICAgICBmbGlwWTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICAoX3RpbWUsIGRlbHRhKSA9PiB7XG4gICAgICAgICAgICBzdXphbm5lLnRyYW5zZm8ub3JiaXRBcm91bmRZKGRlbHRhICogMC4yKVxuICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JiaXRBcm91bmRZKC1kZWx0YSAqIDAuMykub3JiaXRBcm91bmRYKGRlbHRhICogMC4xNylcbiAgICAgICAgfSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG4gICAgcmV0dXJuICh7IGZ4YWEsIHN1YnBpeGVsLCBlZGdlVGhyZXNob2xkIH06IHsgZnhhYTogbnVtYmVyOyBzdWJwaXhlbDogbnVtYmVyOyBlZGdlVGhyZXNob2xkOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBmaWx0ZXJBQS5zdHJlbmd0aCA9IGZ4YWFcbiAgICAgICAgZmlsdGVyQUEuc3VicGl4ZWwgPSBzdWJwaXhlbFxuICAgICAgICBmaWx0ZXJBQS5lZGdlVGhyZXNob2xkID0gZWRnZVRocmVzaG9sZFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3sgaW5lcnRpYU9yYml0OiAxMDAwIH19XG4gICAgICAgICAgICBhc3NldHM9e3sgZ2xiOiB7IHN1emFubmU6IFN1emFubmVVUkwgfSB9fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcbiAgICAgICAgICAgICAgICBmeGFhOiB7IGxhYmVsOiBcIkZYQUFcIiwgdmFsdWU6IDEsIHN0ZXA6IFtcIm9mZlwiLCBcIm9uXCJdIH0sXG4gICAgICAgICAgICAgICAgc3VicGl4ZWw6IHsgbGFiZWw6IFwic3VicGl4ZWxcIiwgdmFsdWU6IDAuNzUsIG1pbjogMCwgbWF4OiAxIH0sXG4gICAgICAgICAgICAgICAgZWRnZVRocmVzaG9sZDogeyBsYWJlbDogXCJlZGdlVGhyZXNob2xkXCIsIHZhbHVlOiAwLjE2NiwgbWluOiAwLjA2MywgbWF4OiAwLjMzMyB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vYW50aS1hbGlhc2luZy5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJEZXRhaWwgIzFcIjpcbiAgICAgICAgJyAgICAvLyBUaGUgZmxhdCBmYWNlcyBvZiBhIGxvdyBwb2x5IG1lc2ggZ2l2ZSBzaGFycCBjcmVhc2VzIHRvIHRoZSBjYXZpdHkuXFxuICAgIGNvbnN0IHN1emFubmU6IFRnZE1lc2hXaXRoVGV4dHVyZXMgPSB7XFxuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oKSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMC45LCAwLjUsIDAuMiwgMV0gfSksXFxuICAgIH1cXG4gICAgY29uc3QgYm94OiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7IHNpemVYOiAwLjUsIHNpemVZOiAwLjUsIHNpemVaOiAwLjUgfSksXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMCwgMCwgMF0sIGRpc3RhbmNlOiAxLjMgfSksXFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzAuMiwgMC41LCAwLjksIDFdIH0pLFxcbiAgICB9XFxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwgeyBtZXNoZXM6IFtzdXphbm5lLCBib3hdIH0pXFxuICAgIGNvbnN0IHNoYWRpbmcgPSBuZXcgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmVOb3JtYWxzOiBkZWZlcnJlZC50ZXh0dXJlTm9ybWFscyxcXG4gICAgICAgIHRleHR1cmVEZXB0aDogZGVmZXJyZWQudGV4dHVyZURlcHRoLFxcbiAgICAgICAgdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPOiBkZWZlcnJlZC50ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3NTcGVjdWxhckJha2VkQU8sXFxuICAgICAgICBza3lib3hUZXh0dXJlOiBcIiNiY2RcIixcXG4gICAgICAgIGxpZ2h0OiBuZXcgVGdkTGlnaHQoeyBjb2xvcjogWzEsIDAuOTUsIDAuOSwgMV0sIGRpcmVjdGlvbjogWy0xLCAtMSwgLTFdIH0pLFxcbiAgICAgICAgLy8gVGhpbiBicmlnaHQgYW5kIGRhcmsgbGluZXMgb24gdGhlIGVkZ2VzOiB0aGUgd29yc3QgY2FzZSBmb3IgYWxpYXNpbmcuXFxuICAgICAgICBjYXZpdHk6IHsgcmlkZ2U6IDIsIHZhbGxleTogMiB9LFxcbiAgICB9KVxcbiAgICAvLyBUaGUgZGVmZXJyZWQgc2hhZGluZyBoYXMgbm8gYW50aS1hbGlhc2luZywgYW5kIHRoZSBiYWNrZ3JvdW5kIGlzIHRyYW5zcGFyZW50LlxcbiAgICBjb25zdCBmaWx0ZXJBQSA9IG5ldyBUZ2RGaWx0ZXJBbnRpQWxpYXNpbmcoeyBhbHBoYTogdHJ1ZSB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGRlZmVycmVkLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBCQUNLR1JPVU5ELCBkZXB0aDogMSB9KSxcXG4gICAgICAgIC8vIE5vdGhpbmcgaXMgcGFpbnRlZCAoYWxwaGEgPSAwKSB3aGVyZSB0aGVyZSBpcyBubyBtZXNoLlxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFwib2ZmXCIsXFxuICAgICAgICAgICAgY3VsbDogXCJvZmZcIixcXG4gICAgICAgICAgICBibGVuZDogXCJhbHBoYVwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmU6IGRlZmVycmVkLnRleHR1cmVBbGJlZG8sXFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbc2hhZGluZywgZmlsdGVyQUFdLFxcbiAgICAgICAgICAgICAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIChfdGltZSwgZGVsdGEpID0+IHtcXG4gICAgICAgICAgICBzdXphbm5lLnRyYW5zZm8ub3JiaXRBcm91bmRZKGRlbHRhICogMC4yKVxcbiAgICAgICAgICAgIGJveC50cmFuc2ZvLm9yYml0QXJvdW5kWSgtZGVsdGEgKiAwLjMpLm9yYml0QXJvdW5kWChkZWx0YSAqIDAuMTcpXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpJyxcbn1cbmNvbnN0IEZVTEwgPVxuICAgICdpbXBvcnQge1xcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZEZpbHRlckFudGlBbGlhc2luZyxcXG4gICAgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nLFxcbiAgICBUZ2RHZW9tZXRyeUJveCxcXG4gICAgVGdkTGlnaHQsXFxuICAgIFRnZE1hdGVyaWFsRmxhdCxcXG4gICAgdHlwZSBUZ2RNZXNoV2l0aFRleHR1cmVzLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmcsXFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVHJhbnNmbyxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLWxvdy5nbGJcIlxcblxcbmNvbnN0IEJBQ0tHUk9VTkQ6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdID0gWzAuOSwgMC45MiwgMC45NSwgMV1cXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIC8vIExvdyByZXNvbHV0aW9uIGFuZCBwaXhlbGF0ZWQgY2FudmFzLCB0byBzZWUgdGhlIHBpeGVscy5cXG4gICAgY29udGV4dC5yZXNvbHV0aW9uID0gMC41XFxuICAgIGlmIChjb250ZXh0LmNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSBjb250ZXh0LmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IFwicGl4ZWxhdGVkXCJcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLjUsIDIuNSlcXG4gICAgLy8gVGhlIGZsYXQgZmFjZXMgb2YgYSBsb3cgcG9seSBtZXNoIGdpdmUgc2hhcnAgY3JlYXNlcyB0byB0aGUgY2F2aXR5LlxcbiAgICBjb25zdCBzdXphbm5lOiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IGFzc2V0cy5nbGIuc3V6YW5uZS5tYWtlR2VvbWV0cnkoKSxcXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKCksXFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzAuOSwgMC41LCAwLjIsIDFdIH0pLFxcbiAgICB9XFxuICAgIGNvbnN0IGJveDogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goeyBzaXplWDogMC41LCBzaXplWTogMC41LCBzaXplWjogMC41IH0pLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIDBdLCBkaXN0YW5jZTogMS4zIH0pLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3I6IFswLjIsIDAuNSwgMC45LCAxXSB9KSxcXG4gICAgfVxcbiAgICBjb25zdCBkZWZlcnJlZCA9IG5ldyBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nKGNvbnRleHQsIHsgbWVzaGVzOiBbc3V6YW5uZSwgYm94XSB9KVxcbiAgICBjb25zdCBzaGFkaW5nID0gbmV3IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlTm9ybWFsczogZGVmZXJyZWQudGV4dHVyZU5vcm1hbHMsXFxuICAgICAgICB0ZXh0dXJlRGVwdGg6IGRlZmVycmVkLnRleHR1cmVEZXB0aCxcXG4gICAgICAgIHRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTzogZGVmZXJyZWQudGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPLFxcbiAgICAgICAgc2t5Ym94VGV4dHVyZTogXCIjYmNkXCIsXFxuICAgICAgICBsaWdodDogbmV3IFRnZExpZ2h0KHsgY29sb3I6IFsxLCAwLjk1LCAwLjksIDFdLCBkaXJlY3Rpb246IFstMSwgLTEsIC0xXSB9KSxcXG4gICAgICAgIC8vIFRoaW4gYnJpZ2h0IGFuZCBkYXJrIGxpbmVzIG9uIHRoZSBlZGdlczogdGhlIHdvcnN0IGNhc2UgZm9yIGFsaWFzaW5nLlxcbiAgICAgICAgY2F2aXR5OiB7IHJpZGdlOiAyLCB2YWxsZXk6IDIgfSxcXG4gICAgfSlcXG4gICAgLy8gVGhlIGRlZmVycmVkIHNoYWRpbmcgaGFzIG5vIGFudGktYWxpYXNpbmcsIGFuZCB0aGUgYmFja2dyb3VuZCBpcyB0cmFuc3BhcmVudC5cXG4gICAgY29uc3QgZmlsdGVyQUEgPSBuZXcgVGdkRmlsdGVyQW50aUFsaWFzaW5nKHsgYWxwaGE6IHRydWUgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBkZWZlcnJlZCxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogQkFDS0dST1VORCwgZGVwdGg6IDEgfSksXFxuICAgICAgICAvLyBOb3RoaW5nIGlzIHBhaW50ZWQgKGFscGhhID0gMCkgd2hlcmUgdGhlcmUgaXMgbm8gbWVzaC5cXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcIm9mZlwiLFxcbiAgICAgICAgICAgIGN1bGw6IFwib2ZmXCIsXFxuICAgICAgICAgICAgYmxlbmQ6IFwiYWxwaGFcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiBkZWZlcnJlZC50ZXh0dXJlQWxiZWRvLFxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyczogW3NoYWRpbmcsIGZpbHRlckFBXSxcXG4gICAgICAgICAgICAgICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSksXFxuICAgICAgICAoX3RpbWUsIGRlbHRhKSA9PiB7XFxuICAgICAgICAgICAgc3V6YW5uZS50cmFuc2ZvLm9yYml0QXJvdW5kWShkZWx0YSAqIDAuMilcXG4gICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFkoLWRlbHRhICogMC4zKS5vcmJpdEFyb3VuZFgoZGVsdGEgKiAwLjE3KVxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICByZXR1cm4gKHsgZnhhYSwgc3VicGl4ZWwsIGVkZ2VUaHJlc2hvbGQgfTogeyBmeGFhOiBudW1iZXI7IHN1YnBpeGVsOiBudW1iZXI7IGVkZ2VUaHJlc2hvbGQ6IG51bWJlciB9KSA9PiB7XFxuICAgICAgICBmaWx0ZXJBQS5zdHJlbmd0aCA9IGZ4YWFcXG4gICAgICAgIGZpbHRlckFBLnN1YnBpeGVsID0gc3VicGl4ZWxcXG4gICAgICAgIGZpbHRlckFBLmVkZ2VUaHJlc2hvbGQgPSBlZGdlVGhyZXNob2xkXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fVxcbiAgICAgICAgICAgIGFzc2V0cz17eyBnbGI6IHsgc3V6YW5uZTogU3V6YW5uZVVSTCB9IH19XFxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcXG4gICAgICAgICAgICAgICAgZnhhYTogeyBsYWJlbDogXCJGWEFBXCIsIHZhbHVlOiAxLCBzdGVwOiBbXCJvZmZcIiwgXCJvblwiXSB9LFxcbiAgICAgICAgICAgICAgICBzdWJwaXhlbDogeyBsYWJlbDogXCJzdWJwaXhlbFwiLCB2YWx1ZTogMC43NSwgbWluOiAwLCBtYXg6IDEgfSxcXG4gICAgICAgICAgICAgICAgZWRnZVRocmVzaG9sZDogeyBsYWJlbDogXCJlZGdlVGhyZXNob2xkXCIsIHZhbHVlOiAwLjE2NiwgbWluOiAwLjA2MywgbWF4OiAwLjMzMyB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8RGVtbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RGaWx0ZXJBbnRpQWxpYXNpbmciLCJUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmciLCJUZ2RHZW9tZXRyeUJveCIsIlRnZExpZ2h0IiwiVGdkTWF0ZXJpYWxGbGF0IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUcmFuc2ZvIiwiVmlldyIsIlN1emFubmVVUkwiLCJCQUNLR1JPVU5EIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJfaW5zdGFuY2VvZiIsIkhUTUxDYW52YXNFbGVtZW50Iiwic3V6YW5uZSIsImJveCIsImRlZmVycmVkIiwic2hhZGluZyIsImZpbHRlckFBIiwiX3RpbWUiLCJkZWx0YSIsImZ4YWEiLCJzdWJwaXhlbCIsImVkZ2VUaHJlc2hvbGQiLCJEZW1vIiwiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF1QjtBQUNrQztBQUNIO0FBRXRELElBQU1ZLGFBQStDO0lBQUM7SUFBSztJQUFNO0lBQU07Q0FBRTtBQUV6RSxTQUFTQyxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQzdDLDBEQUEwRDtJQUMxREQsUUFBUSxVQUFVLEdBQUc7SUFDckIsSUFBa0JFLFlBQWRGLFFBQVEsTUFBTUUsRUFBWUMsb0JBQW1CSCxRQUFRLE1BQU0s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