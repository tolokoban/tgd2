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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/bloom.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/_/bloom.demo/index.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#..",
                    children: "Back to the list of available filters"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                    lineNumber: 5,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                        lineNumber: 7,
                        columnNumber: 24
                    }, this)
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                        lineNumber: 9,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: "Apply horizontal and vertical blur of 8px."
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: "Add the result to the screen."
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                        lineNumber: 11,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_bloom_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/bloom/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9maWx0ZXJfYmxvb21fcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdS1hZGQ0YWYuM2UxYmE1MGUyNDdkNzI2ZC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9ibG9vbS9fL2Jsb29tLmRlbW8vYmxvb20uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZmlsdGVyL2Jsb29tL18vYmxvb20uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZmlsdGVyL2Jsb29tL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdHR5cGUgQXJyYXlOdW1iZXI0LFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZEZpbHRlckJsdXIsXG5cdFRnZEZpbHRlck11bHRpcGx5LFxuXHRUZ2RMaWdodCxcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHRUZ2RNYXRlcmlhbEZsYXQsXG5cdFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJGaWx0ZXIsXG5cdFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcblx0VGdkUGFpbnRlck1lc2hHbHRmLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgU3V6YW5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW5cblx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHQ7XG5cdGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDMpO1xuXHRjb25zdCBtZXNoID0gY3JlYXRlTWVzaChjb250ZXh0LCBhc3NldHMsIGZhbHNlKTtcblx0Y29uc3QgbWVzaEZsYXQgPSBjcmVhdGVNZXNoKGNvbnRleHQsIGFzc2V0cywgdHJ1ZSk7XG5cdGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XG5cdFx0dmlld3BvcnRNYXRjaGluZ1NjYWxlOiAwLjI1LFxuXHRcdGNoaWxkcmVuOiBbbWVzaEZsYXRdLFxuXHRcdHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuXHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdG1pbkZpbHRlcjogXCJMSU5FQVJcIixcblx0XHRcdFx0bWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0XHR3cmFwUjogXCJDTEFNUF9UT19FREdFXCIsXG5cdFx0XHRcdHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcblx0XHRcdFx0d3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdFx0fSxcblx0XHR9KSxcblx0fSk7XG5cdGNvbnN0IGZpbHRlck11bHRpcGx5ID0gbmV3IFRnZEZpbHRlck11bHRpcGx5KHtcblx0XHRjb2xvcjogWzAuNSwgMC41LCAwLjUsIDFdLFxuXHR9KTtcblx0Y29uc3QgYmx1clNpemUgPSAxNjtcblx0Y29udGV4dC5hZGQoXG5cdFx0bWVzaCxcblx0XHRmcmFtZWJ1ZmZlcixcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiBcIm9mZlwiLFxuXHRcdFx0Y3VsbDogXCJvZmZcIixcblx0XHRcdGJsZW5kOiBcImFkZFwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0bmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuXHRcdFx0XHRcdHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXG5cdFx0XHRcdFx0ZmxpcFk6IHRydWUsXG5cdFx0XHRcdFx0ZmlsdGVyczogW1xuXHRcdFx0XHRcdFx0Li4uVGdkRmlsdGVyQmx1ci5jcmVhdGVQYWlyKHsgc2l6ZTogYmx1clNpemUgfSksXG5cdFx0XHRcdFx0XHRmaWx0ZXJNdWx0aXBseSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9KSxcblx0XHRcdF0sXG5cdFx0fSksXG5cdFx0KHRpbWUpID0+IHtcblx0XHRcdGNvbnN0IHMgPSBNYXRoLmFicyhNYXRoLnNpbih0aW1lKSkgKiogMTMgKiAyO1xuXHRcdFx0ZmlsdGVyTXVsdGlwbHkuY29sb3IueCA9IHM7XG5cdFx0XHRmaWx0ZXJNdWx0aXBseS5jb2xvci55ID0gcztcblx0XHRcdGZpbHRlck11bHRpcGx5LmNvbG9yLnogPSBzO1xuXHRcdH0sXG5cdCk7XG5cdGNvbnRleHQucGxheSgpO1xuXHQvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdGFscGhhOiBmYWxzZSxcblx0XHRcdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiBmYWxzZSxcblx0XHRcdH19XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0Z2xiOiB7XG5cdFx0XHRcdFx0c3V6YW5lOiBTdXphbmVVUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdFx0Y29udHJvbGxlcj17e1xuXHRcdFx0XHRpbmVydGlhT3JiaXQ6IDEwMDAsXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lc2goY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMsIGZsYXQ6IGJvb2xlYW4pIHtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRjb2xvcjogWzAsIDAsIDAsIDFdLFxuXHRcdGRlcHRoOiAxLFxuXHR9KTtcblx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFswLjksIDAuNiwgMC4xLCAxXTtcblx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcblx0XHRtYXRlcmlhbDogZmxhdFxuXHRcdFx0PyBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3I6IFswLjMsIDAuNiwgMC45LCAxXSB9KVxuXHRcdFx0OiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcblx0XHRcdFx0XHRjb2xvcixcblx0XHRcdFx0XHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG5cdFx0XHRcdH0pLFxuXHR9KTtcblx0cmV0dXJuIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGRlcHRoOiBcImxlc3NcIixcblx0XHRibGVuZDogXCJvZmZcIixcblx0XHRjdWxsOiBcImJhY2tcIixcblx0XHRjaGlsZHJlbjogW1xuXHRcdFx0Y2xlYXIsXG5cdFx0XHRtZXNoLFxuXHRcdFx0KHRpbWUpID0+IHtcblx0XHRcdFx0bWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSAqIDUsIHRpbWUgKiA3LjEyNCwgdGltZSAqIC0zLjA4NSk7XG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0pO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2Jsb29tLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiXFx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHQ7XFxuXFx0Y2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMyk7XFxuXFx0Y29uc3QgbWVzaCA9IGNyZWF0ZU1lc2goY29udGV4dCwgYXNzZXRzLCBmYWxzZSk7XFxuXFx0Y29uc3QgbWVzaEZsYXQgPSBjcmVhdGVNZXNoKGNvbnRleHQsIGFzc2V0cywgdHJ1ZSk7XFxuXFx0Y29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG5cXHRcXHR2aWV3cG9ydE1hdGNoaW5nU2NhbGU6IDAuMjUsXFxuXFx0XFx0Y2hpbGRyZW46IFttZXNoRmxhdF0sXFxuXFx0XFx0dGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuXFx0XFx0XFx0cGFyYW1zOiB7XFxuXFx0XFx0XFx0XFx0bWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcblxcdFxcdFxcdFxcdHdyYXBSOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0XFx0XFx0d3JhcFM6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHRcXHRcXHR3cmFwVDogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdH0sXFxuXFx0XFx0fSksXFxuXFx0fSk7XFxuXFx0Y29uc3QgZmlsdGVyTXVsdGlwbHkgPSBuZXcgVGdkRmlsdGVyTXVsdGlwbHkoe1xcblxcdFxcdGNvbG9yOiBbMC41LCAwLjUsIDAuNSwgMV0sXFxuXFx0fSk7XFxuXFx0Y29uc3QgYmx1clNpemUgPSAxNjtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRtZXNoLFxcblxcdFxcdGZyYW1lYnVmZmVyLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiBcXFwib2ZmXFxcIixcXG5cXHRcXHRcXHRjdWxsOiBcXFwib2ZmXFxcIixcXG5cXHRcXHRcXHRibGVuZDogXFxcImFkZFxcXCIsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtcXG5cXHRcXHRcXHRcXHRuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuXFx0XFx0XFx0XFx0XFx0dGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcXG5cXHRcXHRcXHRcXHRcXHRmbGlwWTogdHJ1ZSxcXG5cXHRcXHRcXHRcXHRcXHRmaWx0ZXJzOiBbXFxuXFx0XFx0XFx0XFx0XFx0XFx0Li4uVGdkRmlsdGVyQmx1ci5jcmVhdGVQYWlyKHsgc2l6ZTogYmx1clNpemUgfSksXFxuXFx0XFx0XFx0XFx0XFx0XFx0ZmlsdGVyTXVsdGlwbHksXFxuXFx0XFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRdLFxcblxcdFxcdH0pLFxcblxcdFxcdCh0aW1lKSA9PiB7XFxuXFx0XFx0XFx0Y29uc3QgcyA9IE1hdGguYWJzKE1hdGguc2luKHRpbWUpKSAqKiAxMyAqIDI7XFxuXFx0XFx0XFx0ZmlsdGVyTXVsdGlwbHkuY29sb3IueCA9IHM7XFxuXFx0XFx0XFx0ZmlsdGVyTXVsdGlwbHkuY29sb3IueSA9IHM7XFxuXFx0XFx0XFx0ZmlsdGVyTXVsdGlwbHkuY29sb3IueiA9IHM7XFxuXFx0XFx0fSxcXG5cXHQpO1xcblxcdGNvbnRleHQucGxheSgpO1wifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHR0eXBlIEFycmF5TnVtYmVyNCxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkRmlsdGVyQmx1cixcXG5cXHRUZ2RGaWx0ZXJNdWx0aXBseSxcXG5cXHRUZ2RMaWdodCxcXG5cXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuXFx0VGdkTWF0ZXJpYWxGbGF0LFxcblxcdFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyRmlsdGVyLFxcblxcdFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcXG5cXHRUZ2RQYWludGVyTWVzaEdsdGYsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFRleHR1cmUyRCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5pbXBvcnQgU3V6YW5lVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcXFwiO1xcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHQ7XFxuXFx0Y2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMyk7XFxuXFx0Y29uc3QgbWVzaCA9IGNyZWF0ZU1lc2goY29udGV4dCwgYXNzZXRzLCBmYWxzZSk7XFxuXFx0Y29uc3QgbWVzaEZsYXQgPSBjcmVhdGVNZXNoKGNvbnRleHQsIGFzc2V0cywgdHJ1ZSk7XFxuXFx0Y29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG5cXHRcXHR2aWV3cG9ydE1hdGNoaW5nU2NhbGU6IDAuMjUsXFxuXFx0XFx0Y2hpbGRyZW46IFttZXNoRmxhdF0sXFxuXFx0XFx0dGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuXFx0XFx0XFx0cGFyYW1zOiB7XFxuXFx0XFx0XFx0XFx0bWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcblxcdFxcdFxcdFxcdHdyYXBSOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0XFx0XFx0d3JhcFM6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHRcXHRcXHR3cmFwVDogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdH0sXFxuXFx0XFx0fSksXFxuXFx0fSk7XFxuXFx0Y29uc3QgZmlsdGVyTXVsdGlwbHkgPSBuZXcgVGdkRmlsdGVyTXVsdGlwbHkoe1xcblxcdFxcdGNvbG9yOiBbMC41LCAwLjUsIDAuNSwgMV0sXFxuXFx0fSk7XFxuXFx0Y29uc3QgYmx1clNpemUgPSAxNjtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRtZXNoLFxcblxcdFxcdGZyYW1lYnVmZmVyLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiBcXFwib2ZmXFxcIixcXG5cXHRcXHRcXHRjdWxsOiBcXFwib2ZmXFxcIixcXG5cXHRcXHRcXHRibGVuZDogXFxcImFkZFxcXCIsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtcXG5cXHRcXHRcXHRcXHRuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuXFx0XFx0XFx0XFx0XFx0dGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcXG5cXHRcXHRcXHRcXHRcXHRmbGlwWTogdHJ1ZSxcXG5cXHRcXHRcXHRcXHRcXHRmaWx0ZXJzOiBbXFxuXFx0XFx0XFx0XFx0XFx0XFx0Li4uVGdkRmlsdGVyQmx1ci5jcmVhdGVQYWlyKHsgc2l6ZTogYmx1clNpemUgfSksXFxuXFx0XFx0XFx0XFx0XFx0XFx0ZmlsdGVyTXVsdGlwbHksXFxuXFx0XFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRdLFxcblxcdFxcdH0pLFxcblxcdFxcdCh0aW1lKSA9PiB7XFxuXFx0XFx0XFx0Y29uc3QgcyA9IE1hdGguYWJzKE1hdGguc2luKHRpbWUpKSAqKiAxMyAqIDI7XFxuXFx0XFx0XFx0ZmlsdGVyTXVsdGlwbHkuY29sb3IueCA9IHM7XFxuXFx0XFx0XFx0ZmlsdGVyTXVsdGlwbHkuY29sb3IueSA9IHM7XFxuXFx0XFx0XFx0ZmlsdGVyTXVsdGlwbHkuY29sb3IueiA9IHM7XFxuXFx0XFx0fSxcXG5cXHQpO1xcblxcdGNvbnRleHQucGxheSgpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdHJldHVybiAoXFxuXFx0XFx0PFZpZXdcXG5cXHRcXHRcXHRvblJlYWR5PXtpbml0fVxcblxcdFxcdFxcdG9wdGlvbnM9e3tcXG5cXHRcXHRcXHRcXHRhbHBoYTogZmFsc2UsXFxuXFx0XFx0XFx0XFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiBmYWxzZSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdGFzc2V0cz17e1xcblxcdFxcdFxcdFxcdGdsYjoge1xcblxcdFxcdFxcdFxcdFxcdHN1emFuZTogU3V6YW5lVVJMLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRjb250cm9sbGVyPXt7XFxuXFx0XFx0XFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpO1xcbn1cXG5cXG5mdW5jdGlvbiBjcmVhdGVNZXNoKGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzLCBmbGF0OiBib29sZWFuKSB7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAsIDAsIDAsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMC45LCAwLjYsIDAuMSwgMV07XFxuXFx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG5cXHRcXHRtYXRlcmlhbDogZmxhdFxcblxcdFxcdFxcdD8gbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMC4zLCAwLjYsIDAuOSwgMV0gfSlcXG5cXHRcXHRcXHQ6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcblxcdFxcdFxcdFxcdFxcdGNvbG9yLFxcblxcdFxcdFxcdFxcdFxcdGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG5cXHRcXHRcXHRcXHR9KSxcXG5cXHR9KTtcXG5cXHRyZXR1cm4gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IFxcXCJsZXNzXFxcIixcXG5cXHRcXHRibGVuZDogXFxcIm9mZlxcXCIsXFxuXFx0XFx0Y3VsbDogXFxcImJhY2tcXFwiLFxcblxcdFxcdGNoaWxkcmVuOiBbXFxuXFx0XFx0XFx0Y2xlYXIsXFxuXFx0XFx0XFx0bWVzaCxcXG5cXHRcXHRcXHQodGltZSkgPT4ge1xcblxcdFxcdFxcdFxcdG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUgKiA1LCB0aW1lICogNy4xMjQsIHRpbWUgKiAtMy4wODUpO1xcblxcdFxcdFxcdH0sXFxuXFx0XFx0XSxcXG5cXHR9KTtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiVGdkRmlsdGVyQmx1ciIsIlRnZEZpbHRlck11bHRpcGx5IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkTWF0ZXJpYWxGbGF0IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckZpbHRlciIsIlRnZFBhaW50ZXJGcmFtZWJ1ZmZlciIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlN1emFuZVVSTCIsIlZpZXciLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNhbWVyYSIsIm1lc2giLCJjcmVhdGVNZXNoIiwibWVzaEZsYXQiLCJmcmFtZWJ1ZmZlciIsImZpbHRlck11bHRpcGx5IiwiYmx1clNpemUiLCJ0aW1lIiwicyIsIk1hdGgiLCJEZW1vIiwiZmxhdCIsImNsZWFyIiwiY29sb3IiLCJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFld0I7QUFDMEI7QUFDUTtBQUUxRCxTQUFTWSxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQ2hELFNBQVM7SUFDVCxJQUFRQyxTQUFXRixRQUFYRTtJQUNSQSxPQUFPLGdCQUFnQixDQUFDLEdBQUc7SUFDM0IsSUFBTUMsT0FBT0MsV0FBV0osU0FBU0MsUUFBUTtJQUN6QyxJQUFNSSxXQUFXRCxXQUFXSixTQUFTQyxRQUFRO0lBQzdDLElBQU1LLGNBQWMsSUFBSWIscURBQXFCQSxDQUFDTyxTQUFTO1FBQ3RELHVCQUF1QjtRQUN2QixVQUFVO1lBQUNLO1NBQVM7UUFDcEIsZUFBZSxJQUFJVCw0Q0FBWUEsQ0FBQ0ksU0FBUztZQUN4QyxRQUFRO2dCQUNQLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsT0FBTztZQUNSO1FBQ0Q7SUFDRDtJQUNBLElBQU1PLGlCQUFpQixJQUFJbkIsaURBQWlCQSxDQUFDO1FBQzVDLE9BQU87WUFBQztZQUFLO1lBQUs7WUFBSztTQUFFO0lBQzFCO0lBQ0Es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