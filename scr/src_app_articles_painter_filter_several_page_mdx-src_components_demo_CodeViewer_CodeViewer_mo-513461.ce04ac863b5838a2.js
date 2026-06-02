"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_filter_several_page_mdx-src_components_demo_CodeViewer_CodeViewer_mo-513461"], {
57503(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid.0665e1a40d7dcc63.webp";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
6776(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _marylin_demo__rspack_import_4 = __webpack_require__(38343);
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
    "Detail #1": '    const { camera } = context\n    camera.fitSpaceAtTarget(3, 3)\n    const mesh = createMesh(context, assets, false)\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        children: [mesh],\n        textureColor0: new TgdTexture2D(context, {\n            params: {\n                minFilter: "LINEAR",\n                magFilter: "LINEAR",\n                wrapR: "CLAMP_TO_EDGE",\n                wrapS: "CLAMP_TO_EDGE",\n                wrapT: "CLAMP_TO_EDGE",\n            },\n        }),\n    })\n    const filterMultiply = new TgdFilterMultiply({\n        color: [1, 1, 1, 1],\n    })\n    const filterZoom = new TgdFilterZoom()\n    const filterAberration = new TgdFilterChromaticAberration({\n        strength: 10,\n    })\n    const [hBlur, vBlur] = TgdFilterBlur.createPair({ size: 8 })\n    context.add(\n        framebuffer,\n        new TgdPainterFilter(context, {\n            texture: framebuffer.textureColor0,\n            filters: [filterMultiply, filterZoom, hBlur, vBlur, filterAberration],\n            flipY: true,\n        }),\n        (time) => {\n            filterMultiply.color.reset(\n                0.5 + Math.abs(Math.cos(time * 0.458)),\n                0.5 + Math.abs(Math.cos(time * 0.725)),\n                0.5 + Math.abs(Math.cos(time * 0.881)),\n                1,\n            )\n            filterZoom.zoom = 1 + Math.sin(time * 1.6) * 0.1\n            const blur = Math.max(0, Math.sin(time * 0.755))\n            hBlur.strength = blur\n            vBlur.strength = blur\n        },\n    )\n    context.play()'
};
var FULL = 'import {\n    type ArrayNumber4,\n    type TgdContext,\n    TgdFilterBlur,\n    TgdFilterChromaticAberration,\n    TgdFilterMultiply,\n    TgdFilterVerbatim,\n    TgdFilterZoom,\n    TgdLight,\n    tgdLoadImage,\n    TgdMaterialDiffuse,\n    TgdMaterialFlat,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterLogic,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdTexture2D,\n} from "@tolokoban/tgd"\nimport React from "react"\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport SuzaneURL from "@/assets/mesh/suzanne.glb"\nimport ImageURL from "@/assets/image/uv-grid.webp"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const { camera } = context\n    camera.fitSpaceAtTarget(3, 3)\n    const mesh = createMesh(context, assets, false)\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        children: [mesh],\n        textureColor0: new TgdTexture2D(context, {\n            params: {\n                minFilter: "LINEAR",\n                magFilter: "LINEAR",\n                wrapR: "CLAMP_TO_EDGE",\n                wrapS: "CLAMP_TO_EDGE",\n                wrapT: "CLAMP_TO_EDGE",\n            },\n        }),\n    })\n    const filterMultiply = new TgdFilterMultiply({\n        color: [1, 1, 1, 1],\n    })\n    const filterZoom = new TgdFilterZoom()\n    const filterAberration = new TgdFilterChromaticAberration({\n        strength: 10,\n    })\n    const [hBlur, vBlur] = TgdFilterBlur.createPair({ size: 8 })\n    context.add(\n        framebuffer,\n        new TgdPainterFilter(context, {\n            texture: framebuffer.textureColor0,\n            filters: [filterMultiply, filterZoom, hBlur, vBlur, filterAberration],\n            flipY: true,\n        }),\n        (time) => {\n            filterMultiply.color.reset(\n                0.5 + Math.abs(Math.cos(time * 0.458)),\n                0.5 + Math.abs(Math.cos(time * 0.725)),\n                0.5 + Math.abs(Math.cos(time * 0.881)),\n                1,\n            )\n            filterZoom.zoom = 1 + Math.sin(time * 1.6) * 0.1\n            const blur = Math.max(0, Math.sin(time * 0.755))\n            hBlur.strength = blur\n            vBlur.strength = blur\n        },\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    suzane: SuzaneURL,\n                },\n                image: {\n                    image: ImageURL,\n                },\n            }}\n        />\n    )\n}\n\nfunction createMesh(context: TgdContext, assets: Assets, flat: boolean) {\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const color: ArrayNumber4 = [0.9, 0.3, 0.7, 1]\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material: flat\n            ? new TgdMaterialFlat({ color })\n            : new TgdMaterialDiffuse({\n                  color,\n                  ambient: new TgdLight({\n                      color: [0.8, 0.8, 0.8, 0],\n                  }),\n                  lockLightsToCamera: true,\n              }),\n    })\n    const background = new TgdPainterBackground(context, {\n        texture: new TgdTexture2D(context).loadBitmap(assets.image.image),\n    })\n    return new TgdPainterState(context, {\n        depth: "less",\n        blend: "off",\n        cull: "back",\n        children: [\n            clear,\n            background,\n            mesh,\n            (time) => {\n                mesh.transfo.setEulerRotation(time * 50, time * 71.24, time * -34.85)\n            },\n        ],\n    })\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marylin_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 4
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
38343(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var react__rspack_import_2 = __webpack_require__(96540);
/* import */ var react__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_2);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(43475);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_4 = __webpack_require__(21278);
/* import */ var _assets_image_uv_grid_webp__rspack_import_5 = __webpack_require__(57503);
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






function init(context, assets) {
    // #begin
    var camera = context.camera;
    camera.fitSpaceAtTarget(3, 3);
    var mesh = createMesh(context, assets, false);
    var framebuffer = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        children: [
            mesh
        ],
        textureColor0: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
            params: {
                minFilter: "LINEAR",
                magFilter: "LINEAR",
                wrapR: "CLAMP_TO_EDGE",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE"
            }
        })
    });
    var filterMultiply = new _tolokoban_tgd__rspack_import_1.TgdFilterMultiply({
        color: [
            1,
            1,
            1,
            1
        ]
    });
    var filterZoom = new _tolokoban_tgd__rspack_import_1.TgdFilterZoom();
    var filterAberration = new _tolokoban_tgd__rspack_import_1.TgdFilterChromaticAberration({
        strength: 10
    });
    var _TgdFilterBlur_createPair = _sliced_to_array(_tolokoban_tgd__rspack_import_1.TgdFilterBlur.createPair({
        size: 8
    }), 2), hBlur = _TgdFilterBlur_createPair[0], vBlur = _TgdFilterBlur_createPair[1];
    context.add(framebuffer, new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        texture: framebuffer.textureColor0,
        filters: [
            filterMultiply,
            filterZoom,
            hBlur,
            vBlur,
            filterAberration
        ],
        flipY: true
    }), function(time) {
        filterMultiply.color.reset(0.5 + Math.abs(Math.cos(time * 0.458)), 0.5 + Math.abs(Math.cos(time * 0.725)), 0.5 + Math.abs(Math.cos(time * 0.881)), 1);
        filterZoom.zoom = 1 + Math.sin(time * 1.6) * 0.1;
        var blur = Math.max(0, Math.sin(time * 0.755));
        hBlur.strength = blur;
        vBlur.strength = blur;
    });
    context.play();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_3["default"], {
        onReady: init,
        assets: {
            glb: {
                suzane: _assets_mesh_suzanne_glb__rspack_import_4
            },
            image: {
                image: _assets_image_uv_grid_webp__rspack_import_5
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/marylin.demo.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, this);
}
function createMesh(context, assets, flat) {
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0,
            0,
            1
        ],
        depth: 1
    });
    var color = [
        0.9,
        0.3,
        0.7,
        1
    ];
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: flat ? new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: color
        }) : new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: color,
            ambient: new _tolokoban_tgd__rspack_import_1.TgdLight({
                color: [
                    0.8,
                    0.8,
                    0.8,
                    0
                ]
            }),
            lockLightsToCamera: true
        })
    });
    var background = new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(context, {
        texture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.image)
    });
    return new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        blend: "off",
        cull: "back",
        children: [
            clear,
            background,
            mesh,
            function(time) {
                mesh.transfo.setEulerRotation(time * 50, time * 71.24, time * -34.85);
            }
        ]
    });
}


},
85810(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _marylin_demo__rspack_import_1 = __webpack_require__(6776);
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
        h1: "h1",
        h2: "h2",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterFilter.html",
                    children: "TgdPainterFilter"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#..",
                    children: "Back to the list of available filters"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                    lineNumber: 5,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Combining several filters"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "You can add as many filters as you want, but keep in mind that the more you add, the slowest the render will become."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marylin_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9maWx0ZXJfc2V2ZXJhbF9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tby01MTM0NjEuY2UwNGFjODYzYjU4MzhhMi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9maWx0ZXIvc2V2ZXJhbC9fL21hcnlsaW4uZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9zZXZlcmFsL18vbWFyeWxpbi5kZW1vL21hcnlsaW4uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9zZXZlcmFsL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFyeWxpbi5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkRldGFpbCAjMVwiOlxuXHRcdCcgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMylcXG4gICAgY29uc3QgbWVzaCA9IGNyZWF0ZU1lc2goY29udGV4dCwgYXNzZXRzLCBmYWxzZSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXFxuICAgICAgICAgICAgICAgIHdyYXBSOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgICAgICAgICAgd3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgICAgICAgICB3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBmaWx0ZXJNdWx0aXBseSA9IG5ldyBUZ2RGaWx0ZXJNdWx0aXBseSh7XFxuICAgICAgICBjb2xvcjogWzEsIDEsIDEsIDFdLFxcbiAgICB9KVxcbiAgICBjb25zdCBmaWx0ZXJab29tID0gbmV3IFRnZEZpbHRlclpvb20oKVxcbiAgICBjb25zdCBmaWx0ZXJBYmVycmF0aW9uID0gbmV3IFRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24oe1xcbiAgICAgICAgc3RyZW5ndGg6IDEwLFxcbiAgICB9KVxcbiAgICBjb25zdCBbaEJsdXIsIHZCbHVyXSA9IFRnZEZpbHRlckJsdXIuY3JlYXRlUGFpcih7IHNpemU6IDggfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBmcmFtZWJ1ZmZlcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxcbiAgICAgICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJNdWx0aXBseSwgZmlsdGVyWm9vbSwgaEJsdXIsIHZCbHVyLCBmaWx0ZXJBYmVycmF0aW9uXSxcXG4gICAgICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBmaWx0ZXJNdWx0aXBseS5jb2xvci5yZXNldChcXG4gICAgICAgICAgICAgICAgMC41ICsgTWF0aC5hYnMoTWF0aC5jb3ModGltZSAqIDAuNDU4KSksXFxuICAgICAgICAgICAgICAgIDAuNSArIE1hdGguYWJzKE1hdGguY29zKHRpbWUgKiAwLjcyNSkpLFxcbiAgICAgICAgICAgICAgICAwLjUgKyBNYXRoLmFicyhNYXRoLmNvcyh0aW1lICogMC44ODEpKSxcXG4gICAgICAgICAgICAgICAgMSxcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICAgZmlsdGVyWm9vbS56b29tID0gMSArIE1hdGguc2luKHRpbWUgKiAxLjYpICogMC4xXFxuICAgICAgICAgICAgY29uc3QgYmx1ciA9IE1hdGgubWF4KDAsIE1hdGguc2luKHRpbWUgKiAwLjc1NSkpXFxuICAgICAgICAgICAgaEJsdXIuc3RyZW5ndGggPSBibHVyXFxuICAgICAgICAgICAgdkJsdXIuc3RyZW5ndGggPSBibHVyXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpJyxcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7XFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZEZpbHRlckJsdXIsXFxuICAgIFRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24sXFxuICAgIFRnZEZpbHRlck11bHRpcGx5LFxcbiAgICBUZ2RGaWx0ZXJWZXJiYXRpbSxcXG4gICAgVGdkRmlsdGVyWm9vbSxcXG4gICAgVGdkTGlnaHQsXFxuICAgIHRnZExvYWRJbWFnZSxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXFxuICAgIFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcblxcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxcbmltcG9ydCBJbWFnZVVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvdXYtZ3JpZC53ZWJwXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDMpXFxuICAgIGNvbnN0IG1lc2ggPSBjcmVhdGVNZXNoKGNvbnRleHQsIGFzc2V0cywgZmFsc2UpXFxuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgIG1pbkZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxcbiAgICAgICAgICAgICAgICB3cmFwUjogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgICAgIHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgICAgICAgICAgd3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgY29uc3QgZmlsdGVyTXVsdGlwbHkgPSBuZXcgVGdkRmlsdGVyTXVsdGlwbHkoe1xcbiAgICAgICAgY29sb3I6IFsxLCAxLCAxLCAxXSxcXG4gICAgfSlcXG4gICAgY29uc3QgZmlsdGVyWm9vbSA9IG5ldyBUZ2RGaWx0ZXJab29tKClcXG4gICAgY29uc3QgZmlsdGVyQWJlcnJhdGlvbiA9IG5ldyBUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uKHtcXG4gICAgICAgIHN0cmVuZ3RoOiAxMCxcXG4gICAgfSlcXG4gICAgY29uc3QgW2hCbHVyLCB2Qmx1cl0gPSBUZ2RGaWx0ZXJCbHVyLmNyZWF0ZVBhaXIoeyBzaXplOiA4IH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgZnJhbWVidWZmZXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcXG4gICAgICAgICAgICBmaWx0ZXJzOiBbZmlsdGVyTXVsdGlwbHksIGZpbHRlclpvb20sIGhCbHVyLCB2Qmx1ciwgZmlsdGVyQWJlcnJhdGlvbl0sXFxuICAgICAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgICAgICB9KSxcXG4gICAgICAgICh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgZmlsdGVyTXVsdGlwbHkuY29sb3IucmVzZXQoXFxuICAgICAgICAgICAgICAgIDAuNSArIE1hdGguYWJzKE1hdGguY29zKHRpbWUgKiAwLjQ1OCkpLFxcbiAgICAgICAgICAgICAgICAwLjUgKyBNYXRoLmFicyhNYXRoLmNvcyh0aW1lICogMC43MjUpKSxcXG4gICAgICAgICAgICAgICAgMC41ICsgTWF0aC5hYnMoTWF0aC5jb3ModGltZSAqIDAuODgxKSksXFxuICAgICAgICAgICAgICAgIDEsXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIGZpbHRlclpvb20uem9vbSA9IDEgKyBNYXRoLnNpbih0aW1lICogMS42KSAqIDAuMVxcbiAgICAgICAgICAgIGNvbnN0IGJsdXIgPSBNYXRoLm1heCgwLCBNYXRoLnNpbih0aW1lICogMC43NTUpKVxcbiAgICAgICAgICAgIGhCbHVyLnN0cmVuZ3RoID0gYmx1clxcbiAgICAgICAgICAgIHZCbHVyLnN0cmVuZ3RoID0gYmx1clxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgIHN1emFuZTogU3V6YW5lVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IEltYWdlVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmZ1bmN0aW9uIGNyZWF0ZU1lc2goY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMsIGZsYXQ6IGJvb2xlYW4pIHtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFswLjksIDAuMywgMC43LCAxXVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuICAgICAgICBtYXRlcmlhbDogZmxhdFxcbiAgICAgICAgICAgID8gbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yIH0pXFxuICAgICAgICAgICAgOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgICBjb2xvcixcXG4gICAgICAgICAgICAgICAgICBhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxcbiAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuaW1hZ2UpLFxcbiAgICB9KVxcbiAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogXCJsZXNzXCIsXFxuICAgICAgICBibGVuZDogXCJvZmZcIixcXG4gICAgICAgIGN1bGw6IFwiYmFja1wiLFxcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBjbGVhcixcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLFxcbiAgICAgICAgICAgIG1lc2gsXFxuICAgICAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSAqIDUwLCB0aW1lICogNzEuMjQsIHRpbWUgKiAtMzQuODUpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxufVxcbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG5cdGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cblx0XHRcdFx0PERlbW8gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuXHRcdFx0XHRcdFx0e2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiaW1wb3J0IHtcblx0dHlwZSBBcnJheU51bWJlcjQsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkRmlsdGVyQmx1cixcblx0VGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbixcblx0VGdkRmlsdGVyTXVsdGlwbHksXG5cdFRnZEZpbHRlclZlcmJhdGltLFxuXHRUZ2RGaWx0ZXJab29tLFxuXHRUZ2RMaWdodCxcblx0dGdkTG9hZEltYWdlLFxuXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXG5cdFRnZE1hdGVyaWFsRmxhdCxcblx0VGdkUGFpbnRlckJhY2tncm91bmQsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlckZpbHRlcixcblx0VGdkUGFpbnRlckZyYW1lYnVmZmVyLFxuXHRUZ2RQYWludGVyTG9naWMsXG5cdFRnZFBhaW50ZXJNZXNoR2x0Zixcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcbmltcG9ydCBJbWFnZVVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvdXYtZ3JpZC53ZWJwXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luXG5cdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0O1xuXHRjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgzLCAzKTtcblx0Y29uc3QgbWVzaCA9IGNyZWF0ZU1lc2goY29udGV4dCwgYXNzZXRzLCBmYWxzZSk7XG5cdGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XG5cdFx0Y2hpbGRyZW46IFttZXNoXSxcblx0XHR0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG5cdFx0XHRcdG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcblx0XHRcdFx0d3JhcFI6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdFx0XHR3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXG5cdFx0XHRcdHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcblx0XHRcdH0sXG5cdFx0fSksXG5cdH0pO1xuXHRjb25zdCBmaWx0ZXJNdWx0aXBseSA9IG5ldyBUZ2RGaWx0ZXJNdWx0aXBseSh7XG5cdFx0Y29sb3I6IFsxLCAxLCAxLCAxXSxcblx0fSk7XG5cdGNvbnN0IGZpbHRlclpvb20gPSBuZXcgVGdkRmlsdGVyWm9vbSgpO1xuXHRjb25zdCBmaWx0ZXJBYmVycmF0aW9uID0gbmV3IFRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24oe1xuXHRcdHN0cmVuZ3RoOiAxMCxcblx0fSk7XG5cdGNvbnN0IFtoQmx1ciwgdkJsdXJdID0gVGdkRmlsdGVyQmx1ci5jcmVhdGVQYWlyKHsgc2l6ZTogOCB9KTtcblx0Y29udGV4dC5hZGQoXG5cdFx0ZnJhbWVidWZmZXIsXG5cdFx0bmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuXHRcdFx0dGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcblx0XHRcdGZpbHRlcnM6IFtmaWx0ZXJNdWx0aXBseSwgZmlsdGVyWm9vbSwgaEJsdXIsIHZCbHVyLCBmaWx0ZXJBYmVycmF0aW9uXSxcblx0XHRcdGZsaXBZOiB0cnVlLFxuXHRcdH0pLFxuXHRcdCh0aW1lKSA9PiB7XG5cdFx0XHRmaWx0ZXJNdWx0aXBseS5jb2xvci5yZXNldChcblx0XHRcdFx0MC41ICsgTWF0aC5hYnMoTWF0aC5jb3ModGltZSAqIDAuNDU4KSksXG5cdFx0XHRcdDAuNSArIE1hdGguYWJzKE1hdGguY29zKHRpbWUgKiAwLjcyNSkpLFxuXHRcdFx0XHQwLjUgKyBNYXRoLmFicyhNYXRoLmNvcyh0aW1lICogMC44ODEpKSxcblx0XHRcdFx0MSxcblx0XHRcdCk7XG5cdFx0XHRmaWx0ZXJab29tLnpvb20gPSAxICsgTWF0aC5zaW4odGltZSAqIDEuNikgKiAwLjE7XG5cdFx0XHRjb25zdCBibHVyID0gTWF0aC5tYXgoMCwgTWF0aC5zaW4odGltZSAqIDAuNzU1KSk7XG5cdFx0XHRoQmx1ci5zdHJlbmd0aCA9IGJsdXI7XG5cdFx0XHR2Qmx1ci5zdHJlbmd0aCA9IGJsdXI7XG5cdFx0fSxcblx0KTtcblx0Y29udGV4dC5wbGF5KCk7XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHtcblx0XHRcdFx0XHRzdXphbmU6IFN1emFuZVVSTCxcblx0XHRcdFx0fSxcblx0XHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0XHRpbWFnZTogSW1hZ2VVUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lc2goY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMsIGZsYXQ6IGJvb2xlYW4pIHtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRjb2xvcjogWzAsIDAsIDAsIDFdLFxuXHRcdGRlcHRoOiAxLFxuXHR9KTtcblx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFswLjksIDAuMywgMC43LCAxXTtcblx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcblx0XHRtYXRlcmlhbDogZmxhdFxuXHRcdFx0PyBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3IgfSlcblx0XHRcdDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG5cdFx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdFx0YW1iaWVudDogbmV3IFRnZExpZ2h0KHtcblx0XHRcdFx0XHRcdGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxuXHRcdFx0XHR9KSxcblx0fSk7XG5cdGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xuXHRcdHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuaW1hZ2UpLFxuXHR9KTtcblx0cmV0dXJuIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGRlcHRoOiBcImxlc3NcIixcblx0XHRibGVuZDogXCJvZmZcIixcblx0XHRjdWxsOiBcImJhY2tcIixcblx0XHRjaGlsZHJlbjogW1xuXHRcdFx0Y2xlYXIsXG5cdFx0XHRiYWNrZ3JvdW5kLFxuXHRcdFx0bWVzaCxcblx0XHRcdCh0aW1lKSA9PiB7XG5cdFx0XHRcdG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUgKiA1MCwgdGltZSAqIDcxLjI0LCB0aW1lICogLTM0Ljg1KTtcblx0XHRcdH0sXG5cdFx0XSxcblx0fSk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZEZpbHRlckJsdXIiLCJUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uIiwiVGdkRmlsdGVyTXVsdGlwbHkiLCJUZ2RGaWx0ZXJab29tIiwiVGdkTGlnaHQiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RNYXRlcmlhbEZsYXQiLCJUZ2RQYWludGVyQmFja2dyb3VuZCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyRnJhbWVidWZmZXIiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJWaWV3IiwiU3V6YW5lVVJMIiwiSW1hZ2VVUkwiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNhbWVyYSIsIm1lc2giLCJjcmVhdGVNZXNoIiwiZnJhbWVidWZmZXIiLCJmaWx0ZXJNdWx0aXBseSIsImZpbHRlclpvb20iLCJmaWx0ZXJBYmVycmF0aW9uIiwiX1RnZEZpbHRlckJsdXJfY3JlYXRlUGFpciIsImhCbHVyIiwidkJsdXIiLCJ0aW1lIiwiTWF0aCIsImJsdXIiLCJmbGF0IiwiY2xlYXIiLCJjb2xvciIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDeUI7QUFDaUI7QUFDVztBQUNwQjtBQUVsQyxJQUFNSSxRQUFRO0lBQ2IsYUFDQztBQUNGO0FBQ0Es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