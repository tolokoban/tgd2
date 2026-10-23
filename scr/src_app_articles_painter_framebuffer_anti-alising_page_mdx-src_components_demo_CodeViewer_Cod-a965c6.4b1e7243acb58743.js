"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_framebuffer_anti-alising_page_mdx-src_components_demo_CodeViewer_Cod-a965c6"], {
94897(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid-3x2.a98602b61cdbb8df.webp";

},
58172(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_image_uv_grid_3x2_webp__rspack_import_3 = __webpack_require__(94897);




function init(context, assets) {
    // #begin
    context.camera.fitSpaceAtTarget(1.5, 1.5);
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1,
        color: [
            0,
            0,
            0,
            1
        ]
    });
    var color = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.grid);
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox({
            uvs: "3x2"
        }),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: color,
            lockLightsToCamera: true
        })
    });
    mesh.transfo.setEulerRotation(36, 60, 0);
    var meshPainter = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        children: [
            clear,
            mesh
        ]
    });
    var framebuffer = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        viewportMatchingScale: 1 / 8,
        textureColor0: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
            params: {
                magFilter: "LINEAR",
                minFilter: "LINEAR"
            }
        }),
        children: [
            clear,
            meshPainter
        ]
    });
    var filterAA = new _tolokoban_tgd__rspack_import_1.TgdFilterAntiAliasing();
    var filters = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        texture: framebuffer.textureColor0,
        filters: [
            filterAA
        ],
        flipY: true
    });
    globalThis.setInterval(function() {
        filterAA.strength = 1 - filterAA.strength;
        context.paint();
    }, 2000);
    context.add(framebuffer, filters);
    context.paint();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        controller: {
            inertiaOrbit: 1000
        },
        assets: {
            image: {
                grid: _assets_image_uv_grid_3x2_webp__rspack_import_3
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/_/framebuffer.demo/framebuffer.demo.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, this);
}


},
80678(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _framebuffer_demo__rspack_import_4 = __webpack_require__(58172);
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
    "Detail #1": "\tcontext.camera.fitSpaceAtTarget(1.5, 1.5);\n\tconst clear = new TgdPainterClear(context, {\n\t\tdepth: 1,\n\t\tcolor: [0, 0, 0, 1],\n\t});\n\tconst color = new TgdTexture2D(context).loadBitmap(assets.image.grid);\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({ uvs: \"3x2\" }),\n\t\tmaterial: new TgdMaterialDiffuse({\n\t\t\tcolor,\n\t\t\tlockLightsToCamera: true,\n\t\t}),\n\t});\n\tmesh.transfo.setEulerRotation(36, 60, 0);\n\tconst meshPainter = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tchildren: [clear, mesh],\n\t});\n\tconst framebuffer = new TgdPainterFramebuffer(context, {\n\t\tviewportMatchingScale: 1 / 8,\n\t\ttextureColor0: new TgdTexture2D(context, {\n\t\t\tparams: {\n\t\t\t\tmagFilter: \"LINEAR\",\n\t\t\t\tminFilter: \"LINEAR\",\n\t\t\t},\n\t\t}),\n\t\tchildren: [clear, meshPainter],\n\t});\n\tconst filterAA = new TgdFilterAntiAliasing();\n\tconst filters = new TgdPainterFilter(context, {\n\t\ttexture: framebuffer.textureColor0,\n\t\tfilters: [filterAA],\n\t\tflipY: true,\n\t});\n\tglobalThis.setInterval(() => {\n\t\tfilterAA.strength = 1 - filterAA.strength;\n\t\tcontext.paint();\n\t}, 2000);\n\tcontext.add(framebuffer, filters);\n\tcontext.paint();"
};
var FULL = "import {\n\ttype TgdContext,\n\tTgdPainterBackground,\n\tTgdFilterAntiAliasing,\n\tTgdPainterClear,\n\tTgdPainterFilter,\n\tTgdPainterFramebuffer,\n\tTgdPainterLogic,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n\tTgdGeometryBox,\n\tTgdMaterialDiffuse,\n\ttgdCalcModuloDiscrete,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport GridURL from \"@/assets/image/uv-grid-3x2.webp\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera.fitSpaceAtTarget(1.5, 1.5);\n\tconst clear = new TgdPainterClear(context, {\n\t\tdepth: 1,\n\t\tcolor: [0, 0, 0, 1],\n\t});\n\tconst color = new TgdTexture2D(context).loadBitmap(assets.image.grid);\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({ uvs: \"3x2\" }),\n\t\tmaterial: new TgdMaterialDiffuse({\n\t\t\tcolor,\n\t\t\tlockLightsToCamera: true,\n\t\t}),\n\t});\n\tmesh.transfo.setEulerRotation(36, 60, 0);\n\tconst meshPainter = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tchildren: [clear, mesh],\n\t});\n\tconst framebuffer = new TgdPainterFramebuffer(context, {\n\t\tviewportMatchingScale: 1 / 8,\n\t\ttextureColor0: new TgdTexture2D(context, {\n\t\t\tparams: {\n\t\t\t\tmagFilter: \"LINEAR\",\n\t\t\t\tminFilter: \"LINEAR\",\n\t\t\t},\n\t\t}),\n\t\tchildren: [clear, meshPainter],\n\t});\n\tconst filterAA = new TgdFilterAntiAliasing();\n\tconst filters = new TgdPainterFilter(context, {\n\t\ttexture: framebuffer.textureColor0,\n\t\tfilters: [filterAA],\n\t\tflipY: true,\n\t});\n\tglobalThis.setInterval(() => {\n\t\tfilterAA.strength = 1 - filterAA.strength;\n\t\tcontext.paint();\n\t}, 2000);\n\tcontext.add(framebuffer, filters);\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tcontroller={{ inertiaOrbit: 1000 }}\n\t\t\tassets={{\n\t\t\t\timage: { grid: GridURL },\n\t\t\t}}\n\t\t/>\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/_/framebuffer.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/_/framebuffer.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/_/framebuffer.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/_/framebuffer.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/_/framebuffer.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/_/framebuffer.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
53605(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _framebuffer_demo__rspack_import_1 = __webpack_require__(80678);
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
        p: "p",
        pre: "pre",
        span: "span",
        strong: "strong"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterFramebuffer.html",
                        children: "TgdPainterFramebuffer"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " - Anti-aliasing"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "By default, framebuffers do not use anti-aliasing.\nWe can see this in the next example where we render a cube in a framebuffer in a low resolution canvas."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Here we use ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/painter/filter/anti-aliasing",
                        children: "TgdFilterAntiAliasing"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                        lineNumber: 8,
                        columnNumber: 13
                    }, this),
                    " (FXAA) to smooth the edges.\nIt works on the final image only, so it is useful when MSAA cannot be used (with deferred shading, for instance),\nbut that's not the most performant way for a simple framebuffer."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "FXAA blends each pixel on an edge with its neighbour by reading the texture between two texels.\nSo ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: [
                            "the input texture must use ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "LINEAR"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                                lineNumber: 13,
                                columnNumber: 33
                            }, this),
                            " filtering"
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                        lineNumber: 13,
                        columnNumber: 4
                    }, this),
                    ": with ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "NEAREST"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                        lineNumber: 13,
                        columnNumber: 60
                    }, this),
                    ", the filter has almost no effect."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "textureColor0"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdTexture2D"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx"
                        }, this),
                        "(context, {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "params"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx"
                        }, this),
                        ": {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "magFilter"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"LINEAR\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx"
                        }, this),
                        ",\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "minFilter"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"LINEAR\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx"
                        }, this),
                        ",\n    },\n}),\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                    lineNumber: 15,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                lineNumber: 24,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "In the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#msaa",
                        children: "next step"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                        lineNumber: 26,
                        columnNumber: 8
                    }, this),
                    " we will use MSAA internal capabilities of the framebuffer itself. So we don't need a filter anymore."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
                lineNumber: 26,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFtZWJ1ZmZlcl9hbnRpLWFsaXNpbmdfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZC1hOTY1YzYuNGIxZTcyNDNhY2I1ODc0My5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2FudGktYWxpc2luZy9fL2ZyYW1lYnVmZmVyLmRlbW8vZnJhbWVidWZmZXIuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZnJhbWVidWZmZXIvYW50aS1hbGlzaW5nL18vZnJhbWVidWZmZXIuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZnJhbWVidWZmZXIvYW50aS1hbGlzaW5nL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkUGFpbnRlckJhY2tncm91bmQsXG5cdFRnZEZpbHRlckFudGlBbGlhc2luZyxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyRmlsdGVyLFxuXHRUZ2RQYWludGVyRnJhbWVidWZmZXIsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxuXHRUZ2RHZW9tZXRyeUJveCxcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHR0Z2RDYWxjTW9kdWxvRGlzY3JldGUsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmltcG9ydCBHcmlkVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLTN4Mi53ZWJwXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luXG5cdGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS41LCAxLjUpO1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGRlcHRoOiAxLFxuXHRcdGNvbG9yOiBbMCwgMCwgMCwgMV0sXG5cdH0pO1xuXHRjb25zdCBjb2xvciA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuZ3JpZCk7XG5cdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuXHRcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goeyB1dnM6IFwiM3gyXCIgfSksXG5cdFx0bWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuXHRcdFx0Y29sb3IsXG5cdFx0XHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG5cdFx0fSksXG5cdH0pO1xuXHRtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigzNiwgNjAsIDApO1xuXHRjb25zdCBtZXNoUGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGRlcHRoOiBcImxlc3NcIixcblx0XHRjaGlsZHJlbjogW2NsZWFyLCBtZXNoXSxcblx0fSk7XG5cdGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XG5cdFx0dmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxIC8gOCxcblx0XHR0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG5cdFx0XHRcdG1pbkZpbHRlcjogXCJMSU5FQVJcIixcblx0XHRcdH0sXG5cdFx0fSksXG5cdFx0Y2hpbGRyZW46IFtjbGVhciwgbWVzaFBhaW50ZXJdLFxuXHR9KTtcblx0Y29uc3QgZmlsdGVyQUEgPSBuZXcgVGdkRmlsdGVyQW50aUFsaWFzaW5nKCk7XG5cdGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG5cdFx0dGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcblx0XHRmaWx0ZXJzOiBbZmlsdGVyQUFdLFxuXHRcdGZsaXBZOiB0cnVlLFxuXHR9KTtcblx0Z2xvYmFsVGhpcy5zZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0ZmlsdGVyQUEuc3RyZW5ndGggPSAxIC0gZmlsdGVyQUEuc3RyZW5ndGg7XG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9LCAyMDAwKTtcblx0Y29udGV4dC5hZGQoZnJhbWVidWZmZXIsIGZpbHRlcnMpO1xuXHRjb250ZXh0LnBhaW50KCk7XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGNvbnRyb2xsZXI9e3sgaW5lcnRpYU9yYml0OiAxMDAwIH19XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0aW1hZ2U6IHsgZ3JpZDogR3JpZFVSTCB9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2ZyYW1lYnVmZmVyLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiXFx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxLjUsIDEuNSk7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHRcXHRjb2xvcjogWzAsIDAsIDAsIDFdLFxcblxcdH0pO1xcblxcdGNvbnN0IGNvbG9yID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5ncmlkKTtcXG5cXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHsgdXZzOiBcXFwiM3gyXFxcIiB9KSxcXG5cXHRcXHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuXFx0XFx0XFx0Y29sb3IsXFxuXFx0XFx0XFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcblxcdFxcdH0pLFxcblxcdH0pO1xcblxcdG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDM2LCA2MCwgMCk7XFxuXFx0Y29uc3QgbWVzaFBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRkZXB0aDogXFxcImxlc3NcXFwiLFxcblxcdFxcdGNoaWxkcmVuOiBbY2xlYXIsIG1lc2hdLFxcblxcdH0pO1xcblxcdGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuXFx0XFx0dmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxIC8gOCxcXG5cXHRcXHR0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRwYXJhbXM6IHtcXG5cXHRcXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcblxcdFxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0fSxcXG5cXHRcXHR9KSxcXG5cXHRcXHRjaGlsZHJlbjogW2NsZWFyLCBtZXNoUGFpbnRlcl0sXFxuXFx0fSk7XFxuXFx0Y29uc3QgZmlsdGVyQUEgPSBuZXcgVGdkRmlsdGVyQW50aUFsaWFzaW5nKCk7XFxuXFx0Y29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG5cXHRcXHR0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxcblxcdFxcdGZpbHRlcnM6IFtmaWx0ZXJBQV0sXFxuXFx0XFx0ZmxpcFk6IHRydWUsXFxuXFx0fSk7XFxuXFx0Z2xvYmFsVGhpcy5zZXRJbnRlcnZhbCgoKSA9PiB7XFxuXFx0XFx0ZmlsdGVyQUEuc3RyZW5ndGggPSAxIC0gZmlsdGVyQUEuc3RyZW5ndGg7XFxuXFx0XFx0Y29udGV4dC5wYWludCgpO1xcblxcdH0sIDIwMDApO1xcblxcdGNvbnRleHQuYWRkKGZyYW1lYnVmZmVyLCBmaWx0ZXJzKTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdHR5cGUgVGdkQ29udGV4dCxcXG5cXHRUZ2RQYWludGVyQmFja2dyb3VuZCxcXG5cXHRUZ2RGaWx0ZXJBbnRpQWxpYXNpbmcsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJGaWx0ZXIsXFxuXFx0VGdkUGFpbnRlckZyYW1lYnVmZmVyLFxcblxcdFRnZFBhaW50ZXJMb2dpYyxcXG5cXHRUZ2RQYWludGVyTWVzaCxcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0VGdkVGV4dHVyZTJELFxcblxcdFRnZEdlb21ldHJ5Qm94LFxcblxcdFRnZE1hdGVyaWFsRGlmZnVzZSxcXG5cXHR0Z2RDYWxjTW9kdWxvRGlzY3JldGUsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcblxcbmltcG9ydCBHcmlkVVJMIGZyb20gXFxcIkAvYXNzZXRzL2ltYWdlL3V2LWdyaWQtM3gyLndlYnBcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEuNSwgMS41KTtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiAxLFxcblxcdFxcdGNvbG9yOiBbMCwgMCwgMCwgMV0sXFxuXFx0fSk7XFxuXFx0Y29uc3QgY29sb3IgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmdyaWQpO1xcblxcdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcblxcdFxcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goeyB1dnM6IFxcXCIzeDJcXFwiIH0pLFxcblxcdFxcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRcXHRjb2xvcixcXG5cXHRcXHRcXHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuXFx0XFx0fSksXFxuXFx0fSk7XFxuXFx0bWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMzYsIDYwLCAwKTtcXG5cXHRjb25zdCBtZXNoUGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuXFx0XFx0Y2hpbGRyZW46IFtjbGVhciwgbWVzaF0sXFxuXFx0fSk7XFxuXFx0Y29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG5cXHRcXHR2aWV3cG9ydE1hdGNoaW5nU2NhbGU6IDEgLyA4LFxcblxcdFxcdHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0XFx0bWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHR9LFxcblxcdFxcdH0pLFxcblxcdFxcdGNoaWxkcmVuOiBbY2xlYXIsIG1lc2hQYWludGVyXSxcXG5cXHR9KTtcXG5cXHRjb25zdCBmaWx0ZXJBQSA9IG5ldyBUZ2RGaWx0ZXJBbnRpQWxpYXNpbmcoKTtcXG5cXHRjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcblxcdFxcdHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXFxuXFx0XFx0ZmlsdGVyczogW2ZpbHRlckFBXSxcXG5cXHRcXHRmbGlwWTogdHJ1ZSxcXG5cXHR9KTtcXG5cXHRnbG9iYWxUaGlzLnNldEludGVydmFsKCgpID0+IHtcXG5cXHRcXHRmaWx0ZXJBQS5zdHJlbmd0aCA9IDEgLSBmaWx0ZXJBQS5zdHJlbmd0aDtcXG5cXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0fSwgMjAwMCk7XFxuXFx0Y29udGV4dC5hZGQoZnJhbWVidWZmZXIsIGZpbHRlcnMpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fVxcblxcdFxcdFxcdGFzc2V0cz17e1xcblxcdFxcdFxcdFxcdGltYWdlOiB7IGdyaWQ6IEdyaWRVUkwgfSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KTtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiVGdkRmlsdGVyQW50aUFsaWFzaW5nIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckZpbHRlciIsIlRnZFBhaW50ZXJGcmFtZWJ1ZmZlciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVGdkR2VvbWV0cnlCb3giLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJWaWV3IiwiR3JpZFVSTCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2xlYXIiLCJjb2xvciIsIm1lc2giLCJtZXNoUGFpbnRlciIsImZyYW1lYnVmZmVyIiwiZmlsdGVyQUEiLCJmaWx0ZXJzIiwiZ2xvYmFsVGhpcyIsIkRlbW8iLCJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWN3QjtBQUNrQztBQUVKO0FBRXRELFNBQVNXLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDaEQsU0FBUztJQUNURCxRQUFRLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLO0lBQ3JDLElBQU1FLFFBQVEsSUFBSWIsK0NBQWVBLENBQUNX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