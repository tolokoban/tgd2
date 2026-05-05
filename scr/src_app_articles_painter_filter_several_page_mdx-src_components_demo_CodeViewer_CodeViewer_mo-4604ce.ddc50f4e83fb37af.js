"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_filter_several_page_mdx-src_components_demo_CodeViewer_CodeViewer_mo-4604ce"], {
57503(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid.0665e1a40d7dcc63.webp";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

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
    "Detail #1": "    const { camera } = context\n    camera.fitSpaceAtTarget(3, 3)\n    const mesh = createMesh(context, assets, false)\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        children: [mesh],\n        textureColor0: new TgdTexture2D(context, {\n            params: {\n                minFilter: \"LINEAR\",\n                magFilter: \"LINEAR\",\n                wrapR: \"CLAMP_TO_EDGE\",\n                wrapS: \"CLAMP_TO_EDGE\",\n                wrapT: \"CLAMP_TO_EDGE\",\n            },\n        }),\n    })\n    const filterMultiply = new TgdFilterMultiply({\n        color: [1, 1, 1, 1],\n    })\n    const filterZoom = new TgdFilterZoom()\n    const filterAberration = new TgdFilterChromaticAberration({\n        strength: 10,\n    })\n    const [hBlur, vBlur] = TgdFilterBlur.createPair({ size: 8 })\n    context.add(\n        framebuffer,\n        new TgdPainterFilter(context, {\n            texture: framebuffer.textureColor0,\n            filters: [filterMultiply, filterZoom, hBlur, vBlur, filterAberration],\n            flipY: true,\n        }),\n        (time) => {\n            filterMultiply.color.reset(\n                0.5 + Math.abs(Math.cos(time * 0.458)),\n                0.5 + Math.abs(Math.cos(time * 0.725)),\n                0.5 + Math.abs(Math.cos(time * 0.881)),\n                1,\n            )\n            filterZoom.zoom = 1 + Math.sin(time * 1.6) * 0.1\n            const blur = Math.max(0, Math.sin(time * 0.755))\n            hBlur.strength = blur\n            vBlur.strength = blur\n        },\n    )\n    context.play()"
};
var FULL = "import {\n    ArrayNumber4,\n    type TgdContext,\n    TgdFilterBlur,\n    TgdFilterChromaticAberration,\n    TgdFilterMultiply,\n    TgdFilterVerbatim,\n    TgdFilterZoom,\n    TgdLight,\n    tgdLoadImage,\n    TgdMaterialDiffuse,\n    TgdMaterialFlat,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterLogic,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport React from \"react\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport ImageURL from \"@/assets/image/uv-grid.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const { camera } = context\n    camera.fitSpaceAtTarget(3, 3)\n    const mesh = createMesh(context, assets, false)\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        children: [mesh],\n        textureColor0: new TgdTexture2D(context, {\n            params: {\n                minFilter: \"LINEAR\",\n                magFilter: \"LINEAR\",\n                wrapR: \"CLAMP_TO_EDGE\",\n                wrapS: \"CLAMP_TO_EDGE\",\n                wrapT: \"CLAMP_TO_EDGE\",\n            },\n        }),\n    })\n    const filterMultiply = new TgdFilterMultiply({\n        color: [1, 1, 1, 1],\n    })\n    const filterZoom = new TgdFilterZoom()\n    const filterAberration = new TgdFilterChromaticAberration({\n        strength: 10,\n    })\n    const [hBlur, vBlur] = TgdFilterBlur.createPair({ size: 8 })\n    context.add(\n        framebuffer,\n        new TgdPainterFilter(context, {\n            texture: framebuffer.textureColor0,\n            filters: [filterMultiply, filterZoom, hBlur, vBlur, filterAberration],\n            flipY: true,\n        }),\n        (time) => {\n            filterMultiply.color.reset(\n                0.5 + Math.abs(Math.cos(time * 0.458)),\n                0.5 + Math.abs(Math.cos(time * 0.725)),\n                0.5 + Math.abs(Math.cos(time * 0.881)),\n                1,\n            )\n            filterZoom.zoom = 1 + Math.sin(time * 1.6) * 0.1\n            const blur = Math.max(0, Math.sin(time * 0.755))\n            hBlur.strength = blur\n            vBlur.strength = blur\n        },\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    suzane: SuzaneURL,\n                },\n                image: {\n                    image: ImageURL,\n                },\n            }}\n        />\n    )\n}\n\nfunction createMesh(context: TgdContext, assets: Assets, flat: boolean) {\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const color: ArrayNumber4 = [0.9, 0.3, 0.7, 1]\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material: flat\n            ? new TgdMaterialFlat({ color })\n            : new TgdMaterialDiffuse({\n                  color,\n                  ambient: new TgdLight({\n                      color: [0.8, 0.8, 0.8, 0],\n                  }),\n                  lockLightsToCamera: true,\n              }),\n    })\n    const background = new TgdPainterBackground(context, {\n        texture: new TgdTexture2D(context).loadBitmap(assets.image.image),\n    })\n    return new TgdPainterState(context, {\n        depth: \"less\",\n        blend: \"off\",\n        cull: \"back\",\n        children: [\n            clear,\n            background,\n            mesh,\n            (time) => {\n                mesh.transfo.setEulerRotation(time * 50, time * 71.24, time * -34.85)\n            },\n        ],\n    })\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marylin_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/_/marylin.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
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
        columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9maWx0ZXJfc2V2ZXJhbF9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tby00NjA0Y2UuZGRjNTBmNGU4M2ZiMzdhZi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9maWx0ZXIvc2V2ZXJhbC9fL21hcnlsaW4uZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9zZXZlcmFsL18vbWFyeWxpbi5kZW1vL21hcnlsaW4uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9zZXZlcmFsL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFyeWxpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgzLCAzKVxcbiAgICBjb25zdCBtZXNoID0gY3JlYXRlTWVzaChjb250ZXh0LCBhc3NldHMsIGZhbHNlKVxcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcbiAgICAgICAgICAgICAgICB3cmFwUjogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgICAgICAgICB3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgICAgICAgICB3cmFwVDogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgY29uc3QgZmlsdGVyTXVsdGlwbHkgPSBuZXcgVGdkRmlsdGVyTXVsdGlwbHkoe1xcbiAgICAgICAgY29sb3I6IFsxLCAxLCAxLCAxXSxcXG4gICAgfSlcXG4gICAgY29uc3QgZmlsdGVyWm9vbSA9IG5ldyBUZ2RGaWx0ZXJab29tKClcXG4gICAgY29uc3QgZmlsdGVyQWJlcnJhdGlvbiA9IG5ldyBUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uKHtcXG4gICAgICAgIHN0cmVuZ3RoOiAxMCxcXG4gICAgfSlcXG4gICAgY29uc3QgW2hCbHVyLCB2Qmx1cl0gPSBUZ2RGaWx0ZXJCbHVyLmNyZWF0ZVBhaXIoeyBzaXplOiA4IH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgZnJhbWVidWZmZXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcXG4gICAgICAgICAgICBmaWx0ZXJzOiBbZmlsdGVyTXVsdGlwbHksIGZpbHRlclpvb20sIGhCbHVyLCB2Qmx1ciwgZmlsdGVyQWJlcnJhdGlvbl0sXFxuICAgICAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgICAgICB9KSxcXG4gICAgICAgICh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgZmlsdGVyTXVsdGlwbHkuY29sb3IucmVzZXQoXFxuICAgICAgICAgICAgICAgIDAuNSArIE1hdGguYWJzKE1hdGguY29zKHRpbWUgKiAwLjQ1OCkpLFxcbiAgICAgICAgICAgICAgICAwLjUgKyBNYXRoLmFicyhNYXRoLmNvcyh0aW1lICogMC43MjUpKSxcXG4gICAgICAgICAgICAgICAgMC41ICsgTWF0aC5hYnMoTWF0aC5jb3ModGltZSAqIDAuODgxKSksXFxuICAgICAgICAgICAgICAgIDEsXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIGZpbHRlclpvb20uem9vbSA9IDEgKyBNYXRoLnNpbih0aW1lICogMS42KSAqIDAuMVxcbiAgICAgICAgICAgIGNvbnN0IGJsdXIgPSBNYXRoLm1heCgwLCBNYXRoLnNpbih0aW1lICogMC43NTUpKVxcbiAgICAgICAgICAgIGhCbHVyLnN0cmVuZ3RoID0gYmx1clxcbiAgICAgICAgICAgIHZCbHVyLnN0cmVuZ3RoID0gYmx1clxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgQXJyYXlOdW1iZXI0LFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZEZpbHRlckJsdXIsXFxuICAgIFRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24sXFxuICAgIFRnZEZpbHRlck11bHRpcGx5LFxcbiAgICBUZ2RGaWx0ZXJWZXJiYXRpbSxcXG4gICAgVGdkRmlsdGVyWm9vbSxcXG4gICAgVGdkTGlnaHQsXFxuICAgIHRnZExvYWRJbWFnZSxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXFxuICAgIFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlxcXCJcXG5pbXBvcnQgSW1hZ2VVUkwgZnJvbSBcXFwiQC9hc3NldHMvaW1hZ2UvdXYtZ3JpZC53ZWJwXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMylcXG4gICAgY29uc3QgbWVzaCA9IGNyZWF0ZU1lc2goY29udGV4dCwgYXNzZXRzLCBmYWxzZSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICAgICAgd3JhcFI6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgICAgICAgICAgd3JhcFM6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgICAgICAgICAgd3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIGNvbnN0IGZpbHRlck11bHRpcGx5ID0gbmV3IFRnZEZpbHRlck11bHRpcGx5KHtcXG4gICAgICAgIGNvbG9yOiBbMSwgMSwgMSwgMV0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGZpbHRlclpvb20gPSBuZXcgVGdkRmlsdGVyWm9vbSgpXFxuICAgIGNvbnN0IGZpbHRlckFiZXJyYXRpb24gPSBuZXcgVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbih7XFxuICAgICAgICBzdHJlbmd0aDogMTAsXFxuICAgIH0pXFxuICAgIGNvbnN0IFtoQmx1ciwgdkJsdXJdID0gVGdkRmlsdGVyQmx1ci5jcmVhdGVQYWlyKHsgc2l6ZTogOCB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGZyYW1lYnVmZmVyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXFxuICAgICAgICAgICAgZmlsdGVyczogW2ZpbHRlck11bHRpcGx5LCBmaWx0ZXJab29tLCBoQmx1ciwgdkJsdXIsIGZpbHRlckFiZXJyYXRpb25dLFxcbiAgICAgICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICAgICAgfSksXFxuICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGZpbHRlck11bHRpcGx5LmNvbG9yLnJlc2V0KFxcbiAgICAgICAgICAgICAgICAwLjUgKyBNYXRoLmFicyhNYXRoLmNvcyh0aW1lICogMC40NTgpKSxcXG4gICAgICAgICAgICAgICAgMC41ICsgTWF0aC5hYnMoTWF0aC5jb3ModGltZSAqIDAuNzI1KSksXFxuICAgICAgICAgICAgICAgIDAuNSArIE1hdGguYWJzKE1hdGguY29zKHRpbWUgKiAwLjg4MSkpLFxcbiAgICAgICAgICAgICAgICAxLFxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgICBmaWx0ZXJab29tLnpvb20gPSAxICsgTWF0aC5zaW4odGltZSAqIDEuNikgKiAwLjFcXG4gICAgICAgICAgICBjb25zdCBibHVyID0gTWF0aC5tYXgoMCwgTWF0aC5zaW4odGltZSAqIDAuNzU1KSlcXG4gICAgICAgICAgICBoQmx1ci5zdHJlbmd0aCA9IGJsdXJcXG4gICAgICAgICAgICB2Qmx1ci5zdHJlbmd0aCA9IGJsdXJcXG4gICAgICAgIH0sXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICBzdXphbmU6IFN1emFuZVVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBJbWFnZVVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cXG5mdW5jdGlvbiBjcmVhdGVNZXNoKGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzLCBmbGF0OiBib29sZWFuKSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMC45LCAwLjMsIDAuNywgMV1cXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcbiAgICAgICAgbWF0ZXJpYWw6IGZsYXRcXG4gICAgICAgICAgICA/IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvciB9KVxcbiAgICAgICAgICAgIDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgICAgY29sb3IsXFxuICAgICAgICAgICAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG4gICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgICAgICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmltYWdlKSxcXG4gICAgfSlcXG4gICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgIGJsZW5kOiBcXFwib2ZmXFxcIixcXG4gICAgICAgIGN1bGw6IFxcXCJiYWNrXFxcIixcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgY2xlYXIsXFxuICAgICAgICAgICAgYmFja2dyb3VuZCxcXG4gICAgICAgICAgICBtZXNoLFxcbiAgICAgICAgICAgICh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgICAgIG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUgKiA1MCwgdGltZSAqIDcxLjI0LCB0aW1lICogLTM0Ljg1KVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICBdLFxcbiAgICB9KVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICBBcnJheU51bWJlcjQsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZEZpbHRlckJsdXIsXG4gICAgVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbixcbiAgICBUZ2RGaWx0ZXJNdWx0aXBseSxcbiAgICBUZ2RGaWx0ZXJWZXJiYXRpbSxcbiAgICBUZ2RGaWx0ZXJab29tLFxuICAgIFRnZExpZ2h0LFxuICAgIHRnZExvYWRJbWFnZSxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkTWF0ZXJpYWxGbGF0LFxuICAgIFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcbiAgICBUZ2RQYWludGVyTG9naWMsXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuaW1wb3J0IEltYWdlVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLndlYnBcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgzLCAzKVxuICAgIGNvbnN0IG1lc2ggPSBjcmVhdGVNZXNoKGNvbnRleHQsIGFzc2V0cywgZmFsc2UpXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgICAgIHdyYXBSOiBcIkNMQU1QX1RPX0VER0VcIixcbiAgICAgICAgICAgICAgICB3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgICAgICAgICAgd3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICBjb25zdCBmaWx0ZXJNdWx0aXBseSA9IG5ldyBUZ2RGaWx0ZXJNdWx0aXBseSh7XG4gICAgICAgIGNvbG9yOiBbMSwgMSwgMSwgMV0sXG4gICAgfSlcbiAgICBjb25zdCBmaWx0ZXJab29tID0gbmV3IFRnZEZpbHRlclpvb20oKVxuICAgIGNvbnN0IGZpbHRlckFiZXJyYXRpb24gPSBuZXcgVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbih7XG4gICAgICAgIHN0cmVuZ3RoOiAxMCxcbiAgICB9KVxuICAgIGNvbnN0IFtoQmx1ciwgdkJsdXJdID0gVGdkRmlsdGVyQmx1ci5jcmVhdGVQYWlyKHsgc2l6ZTogOCB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBmcmFtZWJ1ZmZlcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuICAgICAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcbiAgICAgICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJNdWx0aXBseSwgZmlsdGVyWm9vbSwgaEJsdXIsIHZCbHVyLCBmaWx0ZXJBYmVycmF0aW9uXSxcbiAgICAgICAgICAgIGZsaXBZOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGZpbHRlck11bHRpcGx5LmNvbG9yLnJlc2V0KFxuICAgICAgICAgICAgICAgIDAuNSArIE1hdGguYWJzKE1hdGguY29zKHRpbWUgKiAwLjQ1OCkpLFxuICAgICAgICAgICAgICAgIDAuNSArIE1hdGguYWJzKE1hdGguY29zKHRpbWUgKiAwLjcyNSkpLFxuICAgICAgICAgICAgICAgIDAuNSArIE1hdGguYWJzKE1hdGguY29zKHRpbWUgKiAwLjg4MSkpLFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBmaWx0ZXJab29tLnpvb20gPSAxICsgTWF0aC5zaW4odGltZSAqIDEuNikgKiAwLjFcbiAgICAgICAgICAgIGNvbnN0IGJsdXIgPSBNYXRoLm1heCgwLCBNYXRoLnNpbih0aW1lICogMC43NTUpKVxuICAgICAgICAgICAgaEJsdXIuc3RyZW5ndGggPSBibHVyXG4gICAgICAgICAgICB2Qmx1ci5zdHJlbmd0aCA9IGJsdXJcbiAgICAgICAgfSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5lOiBTdXphbmVVUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZTogSW1hZ2VVUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNZXNoKGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzLCBmbGF0OiBib29sZWFuKSB7XG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLCAwLCAwLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWzAuOSwgMC4zLCAwLjcsIDFdXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXG4gICAgICAgIG1hdGVyaWFsOiBmbGF0XG4gICAgICAgICAgICA/IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvciB9KVxuICAgICAgICAgICAgOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG4gICAgICAgICAgICAgIH0pLFxuICAgIH0pXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XG4gICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuaW1hZ2UpLFxuICAgIH0pXG4gICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgIGJsZW5kOiBcIm9mZlwiLFxuICAgICAgICBjdWxsOiBcImJhY2tcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGNsZWFyLFxuICAgICAgICAgICAgYmFja2dyb3VuZCxcbiAgICAgICAgICAgIG1lc2gsXG4gICAgICAgICAgICAodGltZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUgKiA1MCwgdGltZSAqIDcxLjI0LCB0aW1lICogLTM0Ljg1KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9KVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJUZ2RGaWx0ZXJCbHVyIiwiVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbiIsIlRnZEZpbHRlck11bHRpcGx5IiwiVGdkRmlsdGVyWm9vbSIsIlRnZExpZ2h0IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkTWF0ZXJpYWxGbGF0IiwiVGdkUGFpbnRlckJhY2tncm91bmQiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyRmlsdGVyIiwiVGdkUGFpbnRlckZyYW1lYnVmZmVyIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVmlldyIsIlN1emFuZVVSTCIsIkltYWdlVVJMIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjYW1lcmEiLCJtZXNoIiwiY3JlYXRlTWVzaCIsImZyYW1lYnVmZmVyIiwiZmlsdGVyTXVsdGlwbHkiLCJmaWx0ZXJab29tIiwiZmlsdGVyQWJlcnJhdGlvbiIsIl9UZ2RGaWx0ZXJCbHVyX2NyZWF0ZVBhaXIiLCJoQmx1ciIsInZCbHVyIiwidGltZSIsIk1hdGgiLCJibHVyIiwiZmxhdCIsImNsZWFyIiwiY29sb3IiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDcEI7QUFFakMsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBNGlEO0FBQ3ZrRCxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSix5Q0FBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ2xEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR3RDLGtEQUFDTix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPTSxPQUFPSCxPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFHNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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