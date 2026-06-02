"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_filter_bloom_page_mdx-src_components_demo_CodeViewer_CodeViewer_modu-add4af"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
81092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_2 = __webpack_require__(21278);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(43475);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
    var meshFlat = createMesh(context, assets, true);
    var framebuffer = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        viewportMatchingScale: 0.25,
        children: [
            meshFlat
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
            0.5,
            0.5,
            0.5,
            1
        ]
    });
    var blurSize = 16;
    context.add(mesh, framebuffer, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "off",
        cull: "off",
        blend: "add",
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
                texture: framebuffer.textureColor0,
                flipY: true,
                filters: _to_consumable_array(_tolokoban_tgd__rspack_import_1.TgdFilterBlur.createPair({
                    size: blurSize
                })).concat([
                    filterMultiply
                ])
            })
        ]
    }), function(time) {
        var s = Math.pow(Math.abs(Math.sin(time)), 13) * 2;
        filterMultiply.color.x = s;
        filterMultiply.color.y = s;
        filterMultiply.color.z = s;
    });
    context.play();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_3["default"], {
        onReady: init,
        options: {
            alpha: false,
            preserveDrawingBuffer: false
        },
        assets: {
            glb: {
                suzane: _assets_mesh_suzanne_glb__rspack_import_2
            }
        },
        controller: {
            inertiaOrbit: 1000
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/bloom.demo.tsx",
        lineNumber: 74,
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
        0.6,
        0.1,
        1
    ];
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: flat ? new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: [
                0.3,
                0.6,
                0.9,
                1
            ]
        }) : new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: color,
            lockLightsToCamera: true
        })
    });
    return new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        blend: "off",
        cull: "back",
        children: [
            clear,
            mesh,
            function(time) {
                mesh.transfo.setEulerRotation(time * 5, time * 7.124, time * -3.085);
            }
        ]
    });
}


},
91682(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _bloom_demo__rspack_import_4 = __webpack_require__(81092);
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
    "Detail #1": "\tconst { camera } = context;\n\tcamera.fitSpaceAtTarget(3, 3);\n\tconst mesh = createMesh(context, assets, false);\n\tconst meshFlat = createMesh(context, assets, true);\n\tconst framebuffer = new TgdPainterFramebuffer(context, {\n\t\tviewportMatchingScale: 0.25,\n\t\tchildren: [meshFlat],\n\t\ttextureColor0: new TgdTexture2D(context, {\n\t\t\tparams: {\n\t\t\t\tminFilter: \"LINEAR\",\n\t\t\t\tmagFilter: \"LINEAR\",\n\t\t\t\twrapR: \"CLAMP_TO_EDGE\",\n\t\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t\t},\n\t\t}),\n\t});\n\tconst filterMultiply = new TgdFilterMultiply({\n\t\tcolor: [0.5, 0.5, 0.5, 1],\n\t});\n\tconst blurSize = 16;\n\tcontext.add(\n\t\tmesh,\n\t\tframebuffer,\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"off\",\n\t\t\tcull: \"off\",\n\t\t\tblend: \"add\",\n\t\t\tchildren: [\n\t\t\t\tnew TgdPainterFilter(context, {\n\t\t\t\t\ttexture: framebuffer.textureColor0,\n\t\t\t\t\tflipY: true,\n\t\t\t\t\tfilters: [\n\t\t\t\t\t\t...TgdFilterBlur.createPair({ size: blurSize }),\n\t\t\t\t\t\tfilterMultiply,\n\t\t\t\t\t],\n\t\t\t\t}),\n\t\t\t],\n\t\t}),\n\t\t(time) => {\n\t\t\tconst s = Math.abs(Math.sin(time)) ** 13 * 2;\n\t\t\tfilterMultiply.color.x = s;\n\t\t\tfilterMultiply.color.y = s;\n\t\t\tfilterMultiply.color.z = s;\n\t\t},\n\t);\n\tcontext.play();"
};
var FULL = "import {\n\ttype ArrayNumber4,\n\ttype TgdContext,\n\tTgdFilterBlur,\n\tTgdFilterMultiply,\n\tTgdLight,\n\tTgdMaterialDiffuse,\n\tTgdMaterialFlat,\n\tTgdPainterBackground,\n\tTgdPainterClear,\n\tTgdPainterFilter,\n\tTgdPainterFramebuffer,\n\tTgdPainterMeshGltf,\n\tTgdPainterState,\n\tTgdTexture2D,\n} from \"@tolokoban/tgd\";\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst { camera } = context;\n\tcamera.fitSpaceAtTarget(3, 3);\n\tconst mesh = createMesh(context, assets, false);\n\tconst meshFlat = createMesh(context, assets, true);\n\tconst framebuffer = new TgdPainterFramebuffer(context, {\n\t\tviewportMatchingScale: 0.25,\n\t\tchildren: [meshFlat],\n\t\ttextureColor0: new TgdTexture2D(context, {\n\t\t\tparams: {\n\t\t\t\tminFilter: \"LINEAR\",\n\t\t\t\tmagFilter: \"LINEAR\",\n\t\t\t\twrapR: \"CLAMP_TO_EDGE\",\n\t\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t\t},\n\t\t}),\n\t});\n\tconst filterMultiply = new TgdFilterMultiply({\n\t\tcolor: [0.5, 0.5, 0.5, 1],\n\t});\n\tconst blurSize = 16;\n\tcontext.add(\n\t\tmesh,\n\t\tframebuffer,\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"off\",\n\t\t\tcull: \"off\",\n\t\t\tblend: \"add\",\n\t\t\tchildren: [\n\t\t\t\tnew TgdPainterFilter(context, {\n\t\t\t\t\ttexture: framebuffer.textureColor0,\n\t\t\t\t\tflipY: true,\n\t\t\t\t\tfilters: [\n\t\t\t\t\t\t...TgdFilterBlur.createPair({ size: blurSize }),\n\t\t\t\t\t\tfilterMultiply,\n\t\t\t\t\t],\n\t\t\t\t}),\n\t\t\t],\n\t\t}),\n\t\t(time) => {\n\t\t\tconst s = Math.abs(Math.sin(time)) ** 13 * 2;\n\t\t\tfilterMultiply.color.x = s;\n\t\t\tfilterMultiply.color.y = s;\n\t\t\tfilterMultiply.color.z = s;\n\t\t},\n\t);\n\tcontext.play();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\toptions={{\n\t\t\t\talpha: false,\n\t\t\t\tpreserveDrawingBuffer: false,\n\t\t\t}}\n\t\t\tassets={{\n\t\t\t\tglb: {\n\t\t\t\t\tsuzane: SuzaneURL,\n\t\t\t\t},\n\t\t\t}}\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 1000,\n\t\t\t}}\n\t\t/>\n\t);\n}\n\nfunction createMesh(context: TgdContext, assets: Assets, flat: boolean) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0, 0, 0, 1],\n\t\tdepth: 1,\n\t});\n\tconst color: ArrayNumber4 = [0.9, 0.6, 0.1, 1];\n\tconst mesh = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzane,\n\t\tmaterial: flat\n\t\t\t? new TgdMaterialFlat({ color: [0.3, 0.6, 0.9, 1] })\n\t\t\t: new TgdMaterialDiffuse({\n\t\t\t\t\tcolor,\n\t\t\t\t\tlockLightsToCamera: true,\n\t\t\t\t}),\n\t});\n\treturn new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tblend: \"off\",\n\t\tcull: \"back\",\n\t\tchildren: [\n\t\t\tclear,\n\t\t\tmesh,\n\t\t\t(time) => {\n\t\t\t\tmesh.transfo.setEulerRotation(time * 5, time * 7.124, time * -3.085);\n\t\t\t},\n\t\t],\n\t});\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_bloom_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
61353(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _bloom_demo__rspack_import_1 = __webpack_require__(91682);
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
        li: "li",
        ol: "ol",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterFilter.html",
                    children: "TgdPainterFilter"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#..",
                    children: "Back to the list of available filters"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                    lineNumber: 5,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: [
                    "Bloom effect, using ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdFilterBlur.html",
                        children: "TgdFilterBlur"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                        lineNumber: 7,
                        columnNumber: 24
                    }, this)
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: "Display the mesh in a low res framebuffer"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                        lineNumber: 9,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: "Apply horizontal and vertical blur of 8px."
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: "Add the result to the screen."
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                        lineNumber: 11,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_bloom_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9maWx0ZXJfYmxvb21fcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdS1hZGQ0YWYuNDFiMjkyZWM1OWU1MDhlNy5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9maWx0ZXIvYmxvb20vXy9ibG9vbS5kZW1vL2Jsb29tLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9maWx0ZXIvYmxvb20vXy9ibG9vbS5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZmlsdGVyL2Jsb29tL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHR0eXBlIEFycmF5TnVtYmVyNCxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RGaWx0ZXJCbHVyLFxuXHRUZ2RGaWx0ZXJNdWx0aXBseSxcblx0VGdkTGlnaHQsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcblx0VGdkTWF0ZXJpYWxGbGF0LFxuXHRUZ2RQYWludGVyQmFja2dyb3VuZCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyRmlsdGVyLFxuXHRUZ2RQYWludGVyRnJhbWVidWZmZXIsXG5cdFRnZFBhaW50ZXJNZXNoR2x0Zixcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luXG5cdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0O1xuXHRjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgzLCAzKTtcblx0Y29uc3QgbWVzaCA9IGNyZWF0ZU1lc2goY29udGV4dCwgYXNzZXRzLCBmYWxzZSk7XG5cdGNvbnN0IG1lc2hGbGF0ID0gY3JlYXRlTWVzaChjb250ZXh0LCBhc3NldHMsIHRydWUpO1xuXHRjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xuXHRcdHZpZXdwb3J0TWF0Y2hpbmdTY2FsZTogMC4yNSxcblx0XHRjaGlsZHJlbjogW21lc2hGbGF0XSxcblx0XHR0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG5cdFx0XHRcdG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcblx0XHRcdFx0d3JhcFI6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdFx0XHR3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXG5cdFx0XHRcdHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcblx0XHRcdH0sXG5cdFx0fSksXG5cdH0pO1xuXHRjb25zdCBmaWx0ZXJNdWx0aXBseSA9IG5ldyBUZ2RGaWx0ZXJNdWx0aXBseSh7XG5cdFx0Y29sb3I6IFswLjUsIDAuNSwgMC41LCAxXSxcblx0fSk7XG5cdGNvbnN0IGJsdXJTaXplID0gMTY7XG5cdGNvbnRleHQuYWRkKFxuXHRcdG1lc2gsXG5cdFx0ZnJhbWVidWZmZXIsXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogXCJvZmZcIixcblx0XHRcdGN1bGw6IFwib2ZmXCIsXG5cdFx0XHRibGVuZDogXCJhZGRcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcblx0XHRcdFx0XHR0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxuXHRcdFx0XHRcdGZsaXBZOiB0cnVlLFxuXHRcdFx0XHRcdGZpbHRlcnM6IFtcblx0XHRcdFx0XHRcdC4uLlRnZEZpbHRlckJsdXIuY3JlYXRlUGFpcih7IHNpemU6IGJsdXJTaXplIH0pLFxuXHRcdFx0XHRcdFx0ZmlsdGVyTXVsdGlwbHksXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSksXG5cdFx0XHRdLFxuXHRcdH0pLFxuXHRcdCh0aW1lKSA9PiB7XG5cdFx0XHRjb25zdCBzID0gTWF0aC5hYnMoTWF0aC5zaW4odGltZSkpICoqIDEzICogMjtcblx0XHRcdGZpbHRlck11bHRpcGx5LmNvbG9yLnggPSBzO1xuXHRcdFx0ZmlsdGVyTXVsdGlwbHkuY29sb3IueSA9IHM7XG5cdFx0XHRmaWx0ZXJNdWx0aXBseS5jb2xvci56ID0gcztcblx0XHR9LFxuXHQpO1xuXHRjb250ZXh0LnBsYXkoKTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0b3B0aW9ucz17e1xuXHRcdFx0XHRhbHBoYTogZmFsc2UsXG5cdFx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogZmFsc2UsXG5cdFx0XHR9fVxuXHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdGdsYjoge1xuXHRcdFx0XHRcdHN1emFuZTogU3V6YW5lVVJMLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHRcdGNvbnRyb2xsZXI9e3tcblx0XHRcdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZXNoKGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzLCBmbGF0OiBib29sZWFuKSB7XG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLCAwLCAwLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSk7XG5cdGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMC45LCAwLjYsIDAuMSwgMV07XG5cdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcblx0XHRhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXG5cdFx0bWF0ZXJpYWw6IGZsYXRcblx0XHRcdD8gbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMC4zLCAwLjYsIDAuOSwgMV0gfSlcblx0XHRcdDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG5cdFx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxuXHRcdFx0XHR9KSxcblx0fSk7XG5cdHJldHVybiBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRkZXB0aDogXCJsZXNzXCIsXG5cdFx0YmxlbmQ6IFwib2ZmXCIsXG5cdFx0Y3VsbDogXCJiYWNrXCIsXG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdGNsZWFyLFxuXHRcdFx0bWVzaCxcblx0XHRcdCh0aW1lKSA9PiB7XG5cdFx0XHRcdG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUgKiA1LCB0aW1lICogNy4xMjQsIHRpbWUgKiAtMy4wODUpO1xuXHRcdFx0fSxcblx0XHRdLFxuXHR9KTtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9ibG9vbS5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIlxcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0O1xcblxcdGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDMpO1xcblxcdGNvbnN0IG1lc2ggPSBjcmVhdGVNZXNoKGNvbnRleHQsIGFzc2V0cywgZmFsc2UpO1xcblxcdGNvbnN0IG1lc2hGbGF0ID0gY3JlYXRlTWVzaChjb250ZXh0LCBhc3NldHMsIHRydWUpO1xcblxcdGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuXFx0XFx0dmlld3BvcnRNYXRjaGluZ1NjYWxlOiAwLjI1LFxcblxcdFxcdGNoaWxkcmVuOiBbbWVzaEZsYXRdLFxcblxcdFxcdHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0XFx0bWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHRcXHR3cmFwUjogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdFxcdHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0XFx0XFx0d3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHRcXHR9LFxcblxcdFxcdH0pLFxcblxcdH0pO1xcblxcdGNvbnN0IGZpbHRlck11bHRpcGx5ID0gbmV3IFRnZEZpbHRlck11bHRpcGx5KHtcXG5cXHRcXHRjb2xvcjogWzAuNSwgMC41LCAwLjUsIDFdLFxcblxcdH0pO1xcblxcdGNvbnN0IGJsdXJTaXplID0gMTY7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0bWVzaCxcXG5cXHRcXHRmcmFtZWJ1ZmZlcixcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRkZXB0aDogXFxcIm9mZlxcXCIsXFxuXFx0XFx0XFx0Y3VsbDogXFxcIm9mZlxcXCIsXFxuXFx0XFx0XFx0YmxlbmQ6IFxcXCJhZGRcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbXFxuXFx0XFx0XFx0XFx0bmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdFxcdHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXFxuXFx0XFx0XFx0XFx0XFx0ZmxpcFk6IHRydWUsXFxuXFx0XFx0XFx0XFx0XFx0ZmlsdGVyczogW1xcblxcdFxcdFxcdFxcdFxcdFxcdC4uLlRnZEZpbHRlckJsdXIuY3JlYXRlUGFpcih7IHNpemU6IGJsdXJTaXplIH0pLFxcblxcdFxcdFxcdFxcdFxcdFxcdGZpbHRlck11bHRpcGx5LFxcblxcdFxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0XSxcXG5cXHRcXHR9KSxcXG5cXHRcXHQodGltZSkgPT4ge1xcblxcdFxcdFxcdGNvbnN0IHMgPSBNYXRoLmFicyhNYXRoLnNpbih0aW1lKSkgKiogMTMgKiAyO1xcblxcdFxcdFxcdGZpbHRlck11bHRpcGx5LmNvbG9yLnggPSBzO1xcblxcdFxcdFxcdGZpbHRlck11bHRpcGx5LmNvbG9yLnkgPSBzO1xcblxcdFxcdFxcdGZpbHRlck11bHRpcGx5LmNvbG9yLnogPSBzO1xcblxcdFxcdH0sXFxuXFx0KTtcXG5cXHRjb250ZXh0LnBsYXkoKTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dHlwZSBBcnJheU51bWJlcjQsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZEZpbHRlckJsdXIsXFxuXFx0VGdkRmlsdGVyTXVsdGlwbHksXFxuXFx0VGdkTGlnaHQsXFxuXFx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxcblxcdFRnZE1hdGVyaWFsRmxhdCxcXG5cXHRUZ2RQYWludGVyQmFja2dyb3VuZCxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlckZpbHRlcixcXG5cXHRUZ2RQYWludGVyRnJhbWVidWZmZXIsXFxuXFx0VGdkUGFpbnRlck1lc2hHbHRmLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIjtcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0O1xcblxcdGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDMpO1xcblxcdGNvbnN0IG1lc2ggPSBjcmVhdGVNZXNoKGNvbnRleHQsIGFzc2V0cywgZmFsc2UpO1xcblxcdGNvbnN0IG1lc2hGbGF0ID0gY3JlYXRlTWVzaChjb250ZXh0LCBhc3NldHMsIHRydWUpO1xcblxcdGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuXFx0XFx0dmlld3BvcnRNYXRjaGluZ1NjYWxlOiAwLjI1LFxcblxcdFxcdGNoaWxkcmVuOiBbbWVzaEZsYXRdLFxcblxcdFxcdHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0XFx0bWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHRcXHR3cmFwUjogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdFxcdHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0XFx0XFx0d3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHRcXHR9LFxcblxcdFxcdH0pLFxcblxcdH0pO1xcblxcdGNvbnN0IGZpbHRlck11bHRpcGx5ID0gbmV3IFRnZEZpbHRlck11bHRpcGx5KHtcXG5cXHRcXHRjb2xvcjogWzAuNSwgMC41LCAwLjUsIDFdLFxcblxcdH0pO1xcblxcdGNvbnN0IGJsdXJTaXplID0gMTY7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0bWVzaCxcXG5cXHRcXHRmcmFtZWJ1ZmZlcixcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRkZXB0aDogXFxcIm9mZlxcXCIsXFxuXFx0XFx0XFx0Y3VsbDogXFxcIm9mZlxcXCIsXFxuXFx0XFx0XFx0YmxlbmQ6IFxcXCJhZGRcXFwiLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbXFxuXFx0XFx0XFx0XFx0bmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdFxcdHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXFxuXFx0XFx0XFx0XFx0XFx0ZmxpcFk6IHRydWUsXFxuXFx0XFx0XFx0XFx0XFx0ZmlsdGVyczogW1xcblxcdFxcdFxcdFxcdFxcdFxcdC4uLlRnZEZpbHRlckJsdXIuY3JlYXRlUGFpcih7IHNpemU6IGJsdXJTaXplIH0pLFxcblxcdFxcdFxcdFxcdFxcdFxcdGZpbHRlck11bHRpcGx5LFxcblxcdFxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0XSxcXG5cXHRcXHR9KSxcXG5cXHRcXHQodGltZSkgPT4ge1xcblxcdFxcdFxcdGNvbnN0IHMgPSBNYXRoLmFicyhNYXRoLnNpbih0aW1lKSkgKiogMTMgKiAyO1xcblxcdFxcdFxcdGZpbHRlck11bHRpcGx5LmNvbG9yLnggPSBzO1xcblxcdFxcdFxcdGZpbHRlck11bHRpcGx5LmNvbG9yLnkgPSBzO1xcblxcdFxcdFxcdGZpbHRlck11bHRpcGx5LmNvbG9yLnogPSBzO1xcblxcdFxcdH0sXFxuXFx0KTtcXG5cXHRjb250ZXh0LnBsYXkoKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRvcHRpb25zPXt7XFxuXFx0XFx0XFx0XFx0YWxwaGE6IGZhbHNlLFxcblxcdFxcdFxcdFxcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogZmFsc2UsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRnbGI6IHtcXG5cXHRcXHRcXHRcXHRcXHRzdXphbmU6IFN1emFuZVVSTCxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0XFx0Y29udHJvbGxlcj17e1xcblxcdFxcdFxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KTtcXG59XFxuXFxuZnVuY3Rpb24gY3JlYXRlTWVzaChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cywgZmxhdDogYm9vbGVhbikge1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLCAwLCAwLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWzAuOSwgMC42LCAwLjEsIDFdO1xcblxcdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG5cXHRcXHRhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuXFx0XFx0bWF0ZXJpYWw6IGZsYXRcXG5cXHRcXHRcXHQ/IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzAuMywgMC42LCAwLjksIDFdIH0pXFxuXFx0XFx0XFx0OiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcixcXG5cXHRcXHRcXHRcXHRcXHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuXFx0XFx0XFx0XFx0fSksXFxuXFx0fSk7XFxuXFx0cmV0dXJuIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuXFx0XFx0YmxlbmQ6IFxcXCJvZmZcXFwiLFxcblxcdFxcdGN1bGw6IFxcXCJiYWNrXFxcIixcXG5cXHRcXHRjaGlsZHJlbjogW1xcblxcdFxcdFxcdGNsZWFyLFxcblxcdFxcdFxcdG1lc2gsXFxuXFx0XFx0XFx0KHRpbWUpID0+IHtcXG5cXHRcXHRcXHRcXHRtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lICogNSwgdGltZSAqIDcuMTI0LCB0aW1lICogLTMuMDg1KTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdF0sXFxuXFx0fSk7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZEZpbHRlckJsdXIiLCJUZ2RGaWx0ZXJNdWx0aXBseSIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZE1hdGVyaWFsRmxhdCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyRnJhbWVidWZmZXIiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJTdXphbmVVUkwiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjYW1lcmEiLCJtZXNoIiwiY3JlYXRlTWVzaCIsIm1lc2hGbGF0IiwiZnJhbWVidWZmZXIiLCJmaWx0ZXJNdWx0aXBseSIsImJsdXJTaXplIiwidGltZSIsInMiLCJNYXRoIiwiRGVtbyIsImZsYXQiLCJjbGVhciIsImNvbG9yIiwiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXdCO0FBQzBCO0FBQ1E7QUFFMUQsU0FBU1ksS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUNoRCxTQUFTO0lBQ1QsSUFBUUMsU0FBV0YsUUFBWEU7SUFDUkEsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHO0lBQzNCLElBQU1DLE9BQU9DLFdBQVdKLFNBQVNDLFFBQVE7SUFDekMsSUFBTUksV0FBV0QsV0FBV0osU0FBU0MsUUFBUTtJQUM3QyxJQUFNSyxjQUFjLElBQUliLHFEQUFxQkEsQ0FBQ08sU0FBUztRQUN0RCx1QkFBdUI7UUFDdkIsVUFBVTtZQUFDSztTQUFTO1FBQ3BCLGVBQWUsSUFBSVQsNENBQVlBLENBQUNJLFNBQVM7WUFDeEMsUUFBUTtnQkFDUCxXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87WUFDUjtRQUNEO0lBQ0Q7SUFDQSxJQUFNTyxpQkFBaUIsSUFBSW5CLGlEQUFpQkEsQ0FBQztRQUM1QyxPQUFPO1lBQUM7WUFBSztZQUFLO1lBQUs7U0FBRTtJQUMxQjtJ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