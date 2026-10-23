"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_geometry_shape_plane_page_mdx-src_components_demo_CodeViewer_CodeViewer-ed21c7"], {
57503(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid.0665e1a40d7dcc63.webp";

},
50363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(72157);
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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.1, 0.1, 1],\n\t\tdepth: 1,\n\t});\n\tconst texture = new TgdTexture2D(context, {\n\t\tload: assets.image.uvGrid,\n\t});\n\tconst material = new TgdMaterialDiffuse({ color: texture });\n\tconst plane1 = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryPlane({\n\t\t\tsizeX: 2,\n\t\t\tsizeY: 2,\n\t\t}),\n\t\tmaterial,\n\t});\n\tplane1.transfo.setPosition(-1.2, 0, 0);\n\tconst plane2 = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryPlane({\n\t\t\tsizeX: 2,\n\t\t\tsizeY: 2,\n\t\t\tvecX: [Math.SQRT1_2, 0, -Math.SQRT1_2],\n\t\t\tvecY: [0, 1, 0],\n\t\t\tuv0: [0.5, 0],\n\t\t\tuv1: [1, 0.5],\n\t\t}),\n\t\tmaterial,\n\t});\n\tplane2.transfo.setPosition(1.2, 0, 0);\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [plane1, plane2],\n\t\t\tdepth: \"less\",\n\t\t}),\n\t);\n\tcontext.camera.fitSpaceAtTarget(5, 3);\n\tcontext.paint();\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t});\n}"
};
var FULL = "import {\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdGeometryPlane,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n} from \"@tolokoban/tgd\";\n\nimport View, { type Assets } from \"@/components/demo/Tgd\";\nimport UVGridURL from \"@/assets/image/uv-grid.webp\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.1, 0.1, 1],\n\t\tdepth: 1,\n\t});\n\tconst texture = new TgdTexture2D(context, {\n\t\tload: assets.image.uvGrid,\n\t});\n\tconst material = new TgdMaterialDiffuse({ color: texture });\n\tconst plane1 = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryPlane({\n\t\t\tsizeX: 2,\n\t\t\tsizeY: 2,\n\t\t}),\n\t\tmaterial,\n\t});\n\tplane1.transfo.setPosition(-1.2, 0, 0);\n\tconst plane2 = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryPlane({\n\t\t\tsizeX: 2,\n\t\t\tsizeY: 2,\n\t\t\tvecX: [Math.SQRT1_2, 0, -Math.SQRT1_2],\n\t\t\tvecY: [0, 1, 0],\n\t\t\tuv0: [0.5, 0],\n\t\t\tuv1: [1, 0.5],\n\t\t}),\n\t\tmaterial,\n\t});\n\tplane2.transfo.setPosition(1.2, 0, 0);\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [plane1, plane2],\n\t\t\tdepth: \"less\",\n\t\t}),\n\t);\n\tcontext.camera.fitSpaceAtTarget(5, 3);\n\tcontext.paint();\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t});\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View onReady={init} assets={{ image: { uvGrid: UVGridURL } }} gizmo />\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
72157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_image_uv_grid_webp__rspack_import_3 = __webpack_require__(57503);




// #begin
function init(context, assets) {
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.1,
            0.1,
            0.1,
            1
        ],
        depth: 1
    });
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        load: assets.image.uvGrid
    });
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color: texture
    });
    var plane1 = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPlane({
            sizeX: 2,
            sizeY: 2
        }),
        material: material
    });
    plane1.transfo.setPosition(-1.2, 0, 0);
    var plane2 = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPlane({
            sizeX: 2,
            sizeY: 2,
            vecX: [
                Math.SQRT1_2,
                0,
                -Math.SQRT1_2
            ],
            vecY: [
                0,
                1,
                0
            ],
            uv0: [
                0.5,
                0
            ],
            uv1: [
                1,
                0.5
            ]
        }),
        material: material
    });
    plane2.transfo.setPosition(1.2, 0, 0);
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        children: [
            plane1,
            plane2
        ],
        depth: "less"
    }));
    context.camera.fitSpaceAtTarget(5, 3);
    context.paint();
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        inertiaZoom: 1000
    });
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        assets: {
            image: {
                uvGrid: _assets_image_uv_grid_webp__rspack_import_3
            }
        },
        gizmo: true
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/_/main.demo/main.demo.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this);
}


},
83630(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(50363);
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
        hr: "hr",
        li: "li",
        p: "p",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdGeometryPlane.html",
                    children: "TgdGeometryPlane"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "A rectangle made of two triangles (drawn as a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TRIANGLE_STRIP"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                        lineNumber: 7,
                        columnNumber: 47
                    }, this),
                    "), centered on the origin."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "sizeX"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                                lineNumber: 9,
                                columnNumber: 3
                            }, this),
                            ", ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "sizeY"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                                lineNumber: 9,
                                columnNumber: 12
                            }, this),
                            ": dimensions of the rectangle (default to ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "1"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                                lineNumber: 9,
                                columnNumber: 61
                            }, this),
                            ")."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                        lineNumber: 9,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "vecX"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                                lineNumber: 10,
                                columnNumber: 3
                            }, this),
                            ", ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "vecY"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                                lineNumber: 10,
                                columnNumber: 11
                            }, this),
                            ": the axes of the plane (default to ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "[1, 0, 0]"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                                lineNumber: 10,
                                columnNumber: 53
                            }, this),
                            " and ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "[0, 1, 0]"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                                lineNumber: 10,
                                columnNumber: 69
                            }, this),
                            ").\nThe normal is ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "vecX × vecY"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                                lineNumber: 11,
                                columnNumber: 17
                            }, this),
                            ", and the front face looks in its direction."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "uv0"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                                lineNumber: 12,
                                columnNumber: 3
                            }, this),
                            ", ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "uv1"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                                lineNumber: 12,
                                columnNumber: 10
                            }, this),
                            ": texture coordinates of the bottom-left and top-right corners\n(default to ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "[0, 0]"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                                lineNumber: 13,
                                columnNumber: 15
                            }, this),
                            " and ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "[1, 1]"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                                lineNumber: 13,
                                columnNumber: 28
                            }, this),
                            "). Use them to show only a part of a texture."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In this demo, the left plane shows the whole texture, while the right one is\ntilted and only shows its upper right quarter."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                lineNumber: 18,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/geometry",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                    lineNumber: 20,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/plane/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9nZW9tZXRyeV9zaGFwZV9wbGFuZV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlci1lZDIxYzcuMTMwZTA0NmUwZTg5NGM4My5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL2dlb21ldHJ5L3NoYXBlL3BsYW5lL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9nZW9tZXRyeS9zaGFwZS9wbGFuZS9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL2dlb21ldHJ5L3NoYXBlL3BsYW5lL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0Y29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSxcXG5cXHRcXHRkZXB0aDogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuXFx0XFx0bG9hZDogYXNzZXRzLmltYWdlLnV2R3JpZCxcXG5cXHR9KTtcXG5cXHRjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2UoeyBjb2xvcjogdGV4dHVyZSB9KTtcXG5cXHRjb25zdCBwbGFuZTEgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcblxcdFxcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlQbGFuZSh7XFxuXFx0XFx0XFx0c2l6ZVg6IDIsXFxuXFx0XFx0XFx0c2l6ZVk6IDIsXFxuXFx0XFx0fSksXFxuXFx0XFx0bWF0ZXJpYWwsXFxuXFx0fSk7XFxuXFx0cGxhbmUxLnRyYW5zZm8uc2V0UG9zaXRpb24oLTEuMiwgMCwgMCk7XFxuXFx0Y29uc3QgcGxhbmUyID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoe1xcblxcdFxcdFxcdHNpemVYOiAyLFxcblxcdFxcdFxcdHNpemVZOiAyLFxcblxcdFxcdFxcdHZlY1g6IFtNYXRoLlNRUlQxXzIsIDAsIC1NYXRoLlNRUlQxXzJdLFxcblxcdFxcdFxcdHZlY1k6IFswLCAxLCAwXSxcXG5cXHRcXHRcXHR1djA6IFswLjUsIDBdLFxcblxcdFxcdFxcdHV2MTogWzEsIDAuNV0sXFxuXFx0XFx0fSksXFxuXFx0XFx0bWF0ZXJpYWwsXFxuXFx0fSk7XFxuXFx0cGxhbmUyLnRyYW5zZm8uc2V0UG9zaXRpb24oMS4yLCAwLCAwKTtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRjaGlsZHJlbjogW3BsYW5lMSwgcGxhbmUyXSxcXG5cXHRcXHRcXHRkZXB0aDogXFxcImxlc3NcXFwiLFxcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg1LCAzKTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdGluZXJ0aWFab29tOiAxMDAwLFxcblxcdH0pO1xcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHRUZ2RHZW9tZXRyeVBsYW5lLFxcblxcdFRnZE1hdGVyaWFsRGlmZnVzZSxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlck1lc2gsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFRleHR1cmUyRCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5cXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuaW1wb3J0IFVWR3JpZFVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLndlYnBcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGNvbG9yOiBbMC4xLCAwLjEsIDAuMSwgMV0sXFxuXFx0XFx0ZGVwdGg6IDEsXFxuXFx0fSk7XFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdGxvYWQ6IGFzc2V0cy5pbWFnZS51dkdyaWQsXFxuXFx0fSk7XFxuXFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHsgY29sb3I6IHRleHR1cmUgfSk7XFxuXFx0Y29uc3QgcGxhbmUxID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoe1xcblxcdFxcdFxcdHNpemVYOiAyLFxcblxcdFxcdFxcdHNpemVZOiAyLFxcblxcdFxcdH0pLFxcblxcdFxcdG1hdGVyaWFsLFxcblxcdH0pO1xcblxcdHBsYW5lMS50cmFuc2ZvLnNldFBvc2l0aW9uKC0xLjIsIDAsIDApO1xcblxcdGNvbnN0IHBsYW5lMiA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuXFx0XFx0Z2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVBsYW5lKHtcXG5cXHRcXHRcXHRzaXplWDogMixcXG5cXHRcXHRcXHRzaXplWTogMixcXG5cXHRcXHRcXHR2ZWNYOiBbTWF0aC5TUVJUMV8yLCAwLCAtTWF0aC5TUVJUMV8yXSxcXG5cXHRcXHRcXHR2ZWNZOiBbMCwgMSwgMF0sXFxuXFx0XFx0XFx0dXYwOiBbMC41LCAwXSxcXG5cXHRcXHRcXHR1djE6IFsxLCAwLjVdLFxcblxcdFxcdH0pLFxcblxcdFxcdG1hdGVyaWFsLFxcblxcdH0pO1xcblxcdHBsYW5lMi50cmFuc2ZvLnNldFBvc2l0aW9uKDEuMiwgMCwgMCk7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0Y2xlYXIsXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtwbGFuZTEsIHBsYW5lMl0sXFxuXFx0XFx0XFx0ZGVwdGg6IFxcXCJsZXNzXFxcIixcXG5cXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNSwgMyk7XFxuXFx0Y29udGV4dC5wYWludCgpO1xcblxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcblxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRpbmVydGlhWm9vbTogMTAwMCxcXG5cXHR9KTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3IG9uUmVhZHk9e2luaXR9IGFzc2V0cz17eyBpbWFnZTogeyB1dkdyaWQ6IFVWR3JpZFVSTCB9IH19IGdpem1vIC8+XFxuXFx0KTtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuXHRUZ2RHZW9tZXRyeVBsYW5lLFxuXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQgVVZHcmlkVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLndlYnBcIjtcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSk7XG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRsb2FkOiBhc3NldHMuaW1hZ2UudXZHcmlkLFxuXHR9KTtcblx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHsgY29sb3I6IHRleHR1cmUgfSk7XG5cdGNvbnN0IHBsYW5lMSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG5cdFx0Z2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVBsYW5lKHtcblx0XHRcdHNpemVYOiAyLFxuXHRcdFx0c2l6ZVk6IDIsXG5cdFx0fSksXG5cdFx0bWF0ZXJpYWwsXG5cdH0pO1xuXHRwbGFuZTEudHJhbnNmby5zZXRQb3NpdGlvbigtMS4yLCAwLCAwKTtcblx0Y29uc3QgcGxhbmUyID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcblx0XHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoe1xuXHRcdFx0c2l6ZVg6IDIsXG5cdFx0XHRzaXplWTogMixcblx0XHRcdHZlY1g6IFtNYXRoLlNRUlQxXzIsIDAsIC1NYXRoLlNRUlQxXzJdLFxuXHRcdFx0dmVjWTogWzAsIDEsIDBdLFxuXHRcdFx0dXYwOiBbMC41LCAwXSxcblx0XHRcdHV2MTogWzEsIDAuNV0sXG5cdFx0fSksXG5cdFx0bWF0ZXJpYWwsXG5cdH0pO1xuXHRwbGFuZTIudHJhbnNmby5zZXRQb3NpdGlvbigxLjIsIDAsIDApO1xuXHRjb250ZXh0LmFkZChcblx0XHRjbGVhcixcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGNoaWxkcmVuOiBbcGxhbmUxLCBwbGFuZTJdLFxuXHRcdFx0ZGVwdGg6IFwibGVzc1wiLFxuXHRcdH0pLFxuXHQpO1xuXHRjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDUsIDMpO1xuXHRjb250ZXh0LnBhaW50KCk7XG5cdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRpbmVydGlhWm9vbTogMTAwMCxcblx0fSk7XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXcgb25SZWFkeT17aW5pdH0gYXNzZXRzPXt7IGltYWdlOiB7IHV2R3JpZDogVVZHcmlkVVJMIH0gfX0gZ2l6bW8gLz5cblx0KTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkR2VvbWV0cnlQbGFuZSIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVmlldyIsIlVWR3JpZFVSTCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2xlYXIiLCJ0ZXh0dXJlIiwibWF0ZXJpYWwiLCJwbGFuZTEiLCJwbGFuZTIiLCJNYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUFzbEM7QUFDam5DLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJB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