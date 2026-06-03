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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/marylin.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#..",
                    children: "Back to the list of available filters"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                    lineNumber: 5,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Combining several filters"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "You can add as many filters as you want, but keep in mind that the more you add, the slowest the render will become."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marylin_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9maWx0ZXJfc2V2ZXJhbF9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tby01MTM0NjEuOGJmZWE0ZjI1YjZlYjBiMy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9zZXZlcmFsL18vbWFyeWxpbi5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9maWx0ZXIvc2V2ZXJhbC9fL21hcnlsaW4uZGVtby9tYXJ5bGluLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9zZXZlcmFsL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYXJ5bGluLmRlbW9cIjtcblxuY29uc3QgRk9DVVMgPSB7XG5cdFwiRGV0YWlsICMxXCI6XG5cdFx0JyAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgzLCAzKVxcbiAgICBjb25zdCBtZXNoID0gY3JlYXRlTWVzaChjb250ZXh0LCBhc3NldHMsIGZhbHNlKVxcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTElORUFSXCIsXFxuICAgICAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcXG4gICAgICAgICAgICAgICAgd3JhcFI6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgICAgICAgICB3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgICAgIHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIGNvbnN0IGZpbHRlck11bHRpcGx5ID0gbmV3IFRnZEZpbHRlck11bHRpcGx5KHtcXG4gICAgICAgIGNvbG9yOiBbMSwgMSwgMSwgMV0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGZpbHRlclpvb20gPSBuZXcgVGdkRmlsdGVyWm9vbSgpXFxuICAgIGNvbnN0IGZpbHRlckFiZXJyYXRpb24gPSBuZXcgVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbih7XFxuICAgICAgICBzdHJlbmd0aDogMTAsXFxuICAgIH0pXFxuICAgIGNvbnN0IFtoQmx1ciwgdkJsdXJdID0gVGdkRmlsdGVyQmx1ci5jcmVhdGVQYWlyKHsgc2l6ZTogOCB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGZyYW1lYnVmZmVyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXFxuICAgICAgICAgICAgZmlsdGVyczogW2ZpbHRlck11bHRpcGx5LCBmaWx0ZXJab29tLCBoQmx1ciwgdkJsdXIsIGZpbHRlckFiZXJyYXRpb25dLFxcbiAgICAgICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICAgICAgfSksXFxuICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGZpbHRlck11bHRpcGx5LmNvbG9yLnJlc2V0KFxcbiAgICAgICAgICAgICAgICAwLjUgKyBNYXRoLmFicyhNYXRoLmNvcyh0aW1lICogMC40NTgpKSxcXG4gICAgICAgICAgICAgICAgMC41ICsgTWF0aC5hYnMoTWF0aC5jb3ModGltZSAqIDAuNzI1KSksXFxuICAgICAgICAgICAgICAgIDAuNSArIE1hdGguYWJzKE1hdGguY29zKHRpbWUgKiAwLjg4MSkpLFxcbiAgICAgICAgICAgICAgICAxLFxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgICBmaWx0ZXJab29tLnpvb20gPSAxICsgTWF0aC5zaW4odGltZSAqIDEuNikgKiAwLjFcXG4gICAgICAgICAgICBjb25zdCBibHVyID0gTWF0aC5tYXgoMCwgTWF0aC5zaW4odGltZSAqIDAuNzU1KSlcXG4gICAgICAgICAgICBoQmx1ci5zdHJlbmd0aCA9IGJsdXJcXG4gICAgICAgICAgICB2Qmx1ci5zdHJlbmd0aCA9IGJsdXJcXG4gICAgICAgIH0sXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KCknLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IHtcXG4gICAgdHlwZSBBcnJheU51bWJlcjQsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkRmlsdGVyQmx1cixcXG4gICAgVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbixcXG4gICAgVGdkRmlsdGVyTXVsdGlwbHksXFxuICAgIFRnZEZpbHRlclZlcmJhdGltLFxcbiAgICBUZ2RGaWx0ZXJab29tLFxcbiAgICBUZ2RMaWdodCxcXG4gICAgdGdkTG9hZEltYWdlLFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZE1hdGVyaWFsRmxhdCxcXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckZpbHRlcixcXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXFxuXFxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXFxuaW1wb3J0IEltYWdlVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLndlYnBcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMylcXG4gICAgY29uc3QgbWVzaCA9IGNyZWF0ZU1lc2goY29udGV4dCwgYXNzZXRzLCBmYWxzZSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXFxuICAgICAgICAgICAgICAgIHdyYXBSOiBcIkNMQU1QX1RPX0VER0VcIixcXG4gICAgICAgICAgICAgICAgd3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxcbiAgICAgICAgICAgICAgICB3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBmaWx0ZXJNdWx0aXBseSA9IG5ldyBUZ2RGaWx0ZXJNdWx0aXBseSh7XFxuICAgICAgICBjb2xvcjogWzEsIDEsIDEsIDFdLFxcbiAgICB9KVxcbiAgICBjb25zdCBmaWx0ZXJab29tID0gbmV3IFRnZEZpbHRlclpvb20oKVxcbiAgICBjb25zdCBmaWx0ZXJBYmVycmF0aW9uID0gbmV3IFRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24oe1xcbiAgICAgICAgc3RyZW5ndGg6IDEwLFxcbiAgICB9KVxcbiAgICBjb25zdCBbaEJsdXIsIHZCbHVyXSA9IFRnZEZpbHRlckJsdXIuY3JlYXRlUGFpcih7IHNpemU6IDggfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBmcmFtZWJ1ZmZlcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxcbiAgICAgICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJNdWx0aXBseSwgZmlsdGVyWm9vbSwgaEJsdXIsIHZCbHVyLCBmaWx0ZXJBYmVycmF0aW9uXSxcXG4gICAgICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBmaWx0ZXJNdWx0aXBseS5jb2xvci5yZXNldChcXG4gICAgICAgICAgICAgICAgMC41ICsgTWF0aC5hYnMoTWF0aC5jb3ModGltZSAqIDAuNDU4KSksXFxuICAgICAgICAgICAgICAgIDAuNSArIE1hdGguYWJzKE1hdGguY29zKHRpbWUgKiAwLjcyNSkpLFxcbiAgICAgICAgICAgICAgICAwLjUgKyBNYXRoLmFicyhNYXRoLmNvcyh0aW1lICogMC44ODEpKSxcXG4gICAgICAgICAgICAgICAgMSxcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICAgZmlsdGVyWm9vbS56b29tID0gMSArIE1hdGguc2luKHRpbWUgKiAxLjYpICogMC4xXFxuICAgICAgICAgICAgY29uc3QgYmx1ciA9IE1hdGgubWF4KDAsIE1hdGguc2luKHRpbWUgKiAwLjc1NSkpXFxuICAgICAgICAgICAgaEJsdXIuc3RyZW5ndGggPSBibHVyXFxuICAgICAgICAgICAgdkJsdXIuc3RyZW5ndGggPSBibHVyXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGdsYjoge1xcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5lOiBTdXphbmVVUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogSW1hZ2VVUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXFxuZnVuY3Rpb24gY3JlYXRlTWVzaChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cywgZmxhdDogYm9vbGVhbikge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLCAwLCAwLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWzAuOSwgMC4zLCAwLjcsIDFdXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG4gICAgICAgIG1hdGVyaWFsOiBmbGF0XFxuICAgICAgICAgICAgPyBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3IgfSlcXG4gICAgICAgICAgICA6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICAgIGNvbG9yLFxcbiAgICAgICAgICAgICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuICAgICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICAgICAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5pbWFnZSksXFxuICAgIH0pXFxuICAgIHJldHVybiBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiBcImxlc3NcIixcXG4gICAgICAgIGJsZW5kOiBcIm9mZlwiLFxcbiAgICAgICAgY3VsbDogXCJiYWNrXCIsXFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIGNsZWFyLFxcbiAgICAgICAgICAgIGJhY2tncm91bmQsXFxuICAgICAgICAgICAgbWVzaCxcXG4gICAgICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lICogNTAsIHRpbWUgKiA3MS4yNCwgdGltZSAqIC0zNC44NSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQge1xuXHR0eXBlIEFycmF5TnVtYmVyNCxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RGaWx0ZXJCbHVyLFxuXHRUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uLFxuXHRUZ2RGaWx0ZXJNdWx0aXBseSxcblx0VGdkRmlsdGVyVmVyYmF0aW0sXG5cdFRnZEZpbHRlclpvb20sXG5cdFRnZExpZ2h0LFxuXHR0Z2RMb2FkSW1hZ2UsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcblx0VGdkTWF0ZXJpYWxGbGF0LFxuXHRUZ2RQYWludGVyQmFja2dyb3VuZCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyRmlsdGVyLFxuXHRUZ2RQYWludGVyRnJhbWVidWZmZXIsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlck1lc2hHbHRmLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiO1xuaW1wb3J0IEltYWdlVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLndlYnBcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW5cblx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHQ7XG5cdGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDMpO1xuXHRjb25zdCBtZXNoID0gY3JlYXRlTWVzaChjb250ZXh0LCBhc3NldHMsIGZhbHNlKTtcblx0Y29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcblx0XHRjaGlsZHJlbjogW21lc2hdLFxuXHRcdHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuXHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdG1pbkZpbHRlcjogXCJMSU5FQVJcIixcblx0XHRcdFx0bWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0XHR3cmFwUjogXCJDTEFNUF9UT19FREdFXCIsXG5cdFx0XHRcdHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcblx0XHRcdFx0d3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdFx0fSxcblx0XHR9KSxcblx0fSk7XG5cdGNvbnN0IGZpbHRlck11bHRpcGx5ID0gbmV3IFRnZEZpbHRlck11bHRpcGx5KHtcblx0XHRjb2xvcjogWzEsIDEsIDEsIDFdLFxuXHR9KTtcblx0Y29uc3QgZmlsdGVyWm9vbSA9IG5ldyBUZ2RGaWx0ZXJab29tKCk7XG5cdGNvbnN0IGZpbHRlckFiZXJyYXRpb24gPSBuZXcgVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbih7XG5cdFx0c3RyZW5ndGg6IDEwLFxuXHR9KTtcblx0Y29uc3QgW2hCbHVyLCB2Qmx1cl0gPSBUZ2RGaWx0ZXJCbHVyLmNyZWF0ZVBhaXIoeyBzaXplOiA4IH0pO1xuXHRjb250ZXh0LmFkZChcblx0XHRmcmFtZWJ1ZmZlcixcblx0XHRuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG5cdFx0XHR0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxuXHRcdFx0ZmlsdGVyczogW2ZpbHRlck11bHRpcGx5LCBmaWx0ZXJab29tLCBoQmx1ciwgdkJsdXIsIGZpbHRlckFiZXJyYXRpb25dLFxuXHRcdFx0ZmxpcFk6IHRydWUsXG5cdFx0fSksXG5cdFx0KHRpbWUpID0+IHtcblx0XHRcdGZpbHRlck11bHRpcGx5LmNvbG9yLnJlc2V0KFxuXHRcdFx0XHQwLjUgKyBNYXRoLmFicyhNYXRoLmNvcyh0aW1lICogMC40NTgpKSxcblx0XHRcdFx0MC41ICsgTWF0aC5hYnMoTWF0aC5jb3ModGltZSAqIDAuNzI1KSksXG5cdFx0XHRcdDAuNSArIE1hdGguYWJzKE1hdGguY29zKHRpbWUgKiAwLjg4MSkpLFxuXHRcdFx0XHQxLFxuXHRcdFx0KTtcblx0XHRcdGZpbHRlclpvb20uem9vbSA9IDEgKyBNYXRoLnNpbih0aW1lICogMS42KSAqIDAuMTtcblx0XHRcdGNvbnN0IGJsdXIgPSBNYXRoLm1heCgwLCBNYXRoLnNpbih0aW1lICogMC43NTUpKTtcblx0XHRcdGhCbHVyLnN0cmVuZ3RoID0gYmx1cjtcblx0XHRcdHZCbHVyLnN0cmVuZ3RoID0gYmx1cjtcblx0XHR9LFxuXHQpO1xuXHRjb250ZXh0LnBsYXkoKTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdGdsYjoge1xuXHRcdFx0XHRcdHN1emFuZTogU3V6YW5lVVJMLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbWFnZToge1xuXHRcdFx0XHRcdGltYWdlOiBJbWFnZVVSTCxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVzaChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cywgZmxhdDogYm9vbGVhbikge1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMCwgMCwgMCwgMV0sXG5cdFx0ZGVwdGg6IDEsXG5cdH0pO1xuXHRjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWzAuOSwgMC4zLCAwLjcsIDFdO1xuXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG5cdFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxuXHRcdG1hdGVyaWFsOiBmbGF0XG5cdFx0XHQ/IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvciB9KVxuXHRcdFx0OiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcblx0XHRcdFx0XHRjb2xvcixcblx0XHRcdFx0XHRhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xuXHRcdFx0XHRcdFx0Y29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG5cdFx0XHRcdH0pLFxuXHR9KTtcblx0Y29uc3QgYmFja2dyb3VuZCA9IG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XG5cdFx0dGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5pbWFnZSksXG5cdH0pO1xuXHRyZXR1cm4gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IFwibGVzc1wiLFxuXHRcdGJsZW5kOiBcIm9mZlwiLFxuXHRcdGN1bGw6IFwiYmFja1wiLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRjbGVhcixcblx0XHRcdGJhY2tncm91bmQsXG5cdFx0XHRtZXNoLFxuXHRcdFx0KHRpbWUpID0+IHtcblx0XHRcdFx0bWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSAqIDUwLCB0aW1lICogNzEuMjQsIHRpbWUgKiAtMzQuODUpO1xuXHRcdFx0fSxcblx0XHRdLFxuXHR9KTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkRmlsdGVyQmx1ciIsIlRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24iLCJUZ2RGaWx0ZXJNdWx0aXBseSIsIlRnZEZpbHRlclpvb20iLCJUZ2RMaWdodCIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZE1hdGVyaWFsRmxhdCIsIlRnZFBhaW50ZXJCYWNrZ3JvdW5kIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckZpbHRlciIsIlRnZFBhaW50ZXJGcmFtZWJ1ZmZlciIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlZpZXciLCJTdXphbmVVUkwiLCJJbWFnZVVSTCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2FtZXJhIiwibWVzaCIsImNyZWF0ZU1lc2giLCJmcmFtZWJ1ZmZlciIsImZpbHRlck11bHRpcGx5IiwiZmlsdGVyWm9vbSIsImZpbHRlckFiZXJyYXRpb24iLCJfVGdkRmlsdGVyQmx1cl9jcmVhdGVQYWlyIiwiaEJsdXIiLCJ2Qmx1ciIsInRpbWUiLCJNYXRoIiwiYmx1ciIsImZsYXQiLCJjbGVhciIsImNvbG9yIiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN5QjtBQUNpQjtBQUNXO0FBQ3BCO0FBRWxDLElBQU1JLFFBQVE7SUFDYixhQUNDO0FBQ0Y7QUFDQSxJQUFN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