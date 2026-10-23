"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_geometry_shape_grid_page_mdx-src_components_demo_CodeViewer_CodeViewer_-fdba98"], {
27285(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(90791);
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
    "Detail #1": "function init(context: TgdContext) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.1, 0.1, 1],\n        depth: 1,\n    })\n    const material = new TgdMaterial({\n        varyings: { varPosition: \"vec3\" },\n        vertexShaderCodeForGetPosition: [\n            \"float h = 0.2 * sin(6.0 * pos.x) * cos(6.0 * pos.y);\",\n            \"return vec4(pos.xy, pos.z + h, pos.w);\",\n        ],\n        vertexShaderCode: [\"varPosition = position;\"],\n        fragmentShaderCode: [\n            \"vec3 normal = normalize(cross(dFdx(varPosition), dFdy(varPosition)));\",\n            \"float light = 0.3 + 0.7 * abs(dot(normal, normalize(vec3(1, 2, 3))));\",\n            \"vec3 color = mix(vec3(0, .3, 1), vec3(1, .8, .2), varPosition.z * 2.5 + 0.5);\",\n            \"return vec4(color * light, 1);\",\n        ],\n    })\n    const meshes = [2, 8, 32].map((subdivisions, index) => {\n        const mesh = new TgdPainterMesh(context, {\n            geometry: new TgdGeometryGrid({\n                sizeX: 1.5,\n                sizeY: 1.5,\n                subdivisions,\n            }),\n            material,\n        })\n        mesh.transfo.setPosition(index - 1, 0, (index - 1) * 2)\n        return mesh\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: meshes,\n            depth: \"less\",\n        }),\n    )\n    context.camera.fitSpaceAtTarget(5.5, 2)\n    context.paint()\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        inertiaZoom: 1000,\n    })\n}"
};
var FULL = "import {\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdGeometryGrid,\n    TgdMaterial,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.1, 0.1, 1],\n        depth: 1,\n    })\n    const material = new TgdMaterial({\n        varyings: { varPosition: \"vec3\" },\n        vertexShaderCodeForGetPosition: [\n            \"float h = 0.2 * sin(6.0 * pos.x) * cos(6.0 * pos.y);\",\n            \"return vec4(pos.xy, pos.z + h, pos.w);\",\n        ],\n        vertexShaderCode: [\"varPosition = position;\"],\n        fragmentShaderCode: [\n            \"vec3 normal = normalize(cross(dFdx(varPosition), dFdy(varPosition)));\",\n            \"float light = 0.3 + 0.7 * abs(dot(normal, normalize(vec3(1, 2, 3))));\",\n            \"vec3 color = mix(vec3(0, .3, 1), vec3(1, .8, .2), varPosition.z * 2.5 + 0.5);\",\n            \"return vec4(color * light, 1);\",\n        ],\n    })\n    const meshes = [2, 8, 32].map((subdivisions, index) => {\n        const mesh = new TgdPainterMesh(context, {\n            geometry: new TgdGeometryGrid({\n                sizeX: 1.5,\n                sizeY: 1.5,\n                subdivisions,\n            }),\n            material,\n        })\n        mesh.transfo.setPosition(index - 1, 0, (index - 1) * 2)\n        return mesh\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: meshes,\n            depth: \"less\",\n        }),\n    )\n    context.camera.fitSpaceAtTarget(5.5, 2)\n    context.paint()\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        inertiaZoom: 1000,\n    })\n}\n\nexport default function Demo() {\n    return <View onReady={init} gizmo />\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
90791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);



// #begin
function init(context) {
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.1,
            0.1,
            0.1,
            1
        ],
        depth: 1
    });
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterial({
        varyings: {
            varPosition: "vec3"
        },
        vertexShaderCodeForGetPosition: [
            "float h = 0.2 * sin(6.0 * pos.x) * cos(6.0 * pos.y);",
            "return vec4(pos.xy, pos.z + h, pos.w);"
        ],
        vertexShaderCode: [
            "varPosition = position;"
        ],
        fragmentShaderCode: [
            "vec3 normal = normalize(cross(dFdx(varPosition), dFdy(varPosition)));",
            "float light = 0.3 + 0.7 * abs(dot(normal, normalize(vec3(1, 2, 3))));",
            "vec3 color = mix(vec3(0, .3, 1), vec3(1, .8, .2), varPosition.z * 2.5 + 0.5);",
            "return vec4(color * light, 1);"
        ]
    });
    var meshes = [
        2,
        8,
        32
    ].map(function(subdivisions, index) {
        var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
            geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryGrid({
                sizeX: 1.5,
                sizeY: 1.5,
                subdivisions: subdivisions
            }),
            material: material
        });
        mesh.transfo.setPosition(index - 1, 0, (index - 1) * 2);
        return mesh;
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        children: meshes,
        depth: "less"
    }));
    context.camera.fitSpaceAtTarget(5.5, 2);
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
        gizmo: true
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/_/main.demo/main.demo.tsx",
        lineNumber: 62,
        columnNumber: 12
    }, this);
}


},
39274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(27285);
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
                    href: "docs/classes/TgdGeometryGrid.html",
                    children: "TgdGeometryGrid"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Like ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/mesh/geometry/shape/plane",
                        children: "TgdGeometryPlane"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                        lineNumber: 7,
                        columnNumber: 6
                    }, this),
                    ", but subdivided into\na grid of quads (two triangles each). The extra vertices are useful when the vertex\nshader deforms the surface: terrains, water, flags, ..."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                                lineNumber: 11,
                                columnNumber: 3
                            }, this),
                            ", ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "sizeY"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                                lineNumber: 11,
                                columnNumber: 12
                            }, this),
                            ": dimensions of the grid (default to ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "1"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                                lineNumber: 11,
                                columnNumber: 56
                            }, this),
                            ")."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                        lineNumber: 11,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "subdivisions"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                                lineNumber: 12,
                                columnNumber: 3
                            }, this),
                            ": number of quads along each axis (default to ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "10"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                                lineNumber: 12,
                                columnNumber: 63
                            }, this),
                            ")."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "subdivisionsX"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                                lineNumber: 13,
                                columnNumber: 3
                            }, this),
                            ", ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "subdivisionsY"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                                lineNumber: 13,
                                columnNumber: 20
                            }, this),
                            ": override ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "subdivisions"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                                lineNumber: 13,
                                columnNumber: 46
                            }, this),
                            " for one axis."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                        lineNumber: 13,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "vecX"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                                lineNumber: 14,
                                columnNumber: 3
                            }, this),
                            ", ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "vecY"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            ": the axes of the grid (default to ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "[1, 0, 0]"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                                lineNumber: 14,
                                columnNumber: 52
                            }, this),
                            " and ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "[0, 1, 0]"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                                lineNumber: 14,
                                columnNumber: 68
                            }, this),
                            ").\nThe normal is ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "vecX × vecY"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                                lineNumber: 15,
                                columnNumber: 17
                            }, this),
                            "."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                        lineNumber: 14,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The geometry provides ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "POSITION"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                        lineNumber: 17,
                        columnNumber: 23
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "NORMAL"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                        lineNumber: 17,
                        columnNumber: 35
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TEXCOORD_0"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                        lineNumber: 17,
                        columnNumber: 48
                    }, this),
                    " attributes."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In this demo, the three grids have 2, 8 and 32 subdivisions, and a material\npushes the vertices along the Z axis."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                lineNumber: 19,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                lineNumber: 22,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/geometry",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                    lineNumber: 24,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
                lineNumber: 24,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/grid/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9nZW9tZXRyeV9zaGFwZV9ncmlkX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyXy1mZGJhOTguMTNlYjA0YWRkNWQxOWRkOC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL2dlb21ldHJ5L3NoYXBlL2dyaWQvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL2dlb21ldHJ5L3NoYXBlL2dyaWQvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9nZW9tZXRyeS9zaGFwZS9ncmlkL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsKHtcXG4gICAgICAgIHZhcnlpbmdzOiB7IHZhclBvc2l0aW9uOiBcXFwidmVjM1xcXCIgfSxcXG4gICAgICAgIHZlcnRleFNoYWRlckNvZGVGb3JHZXRQb3NpdGlvbjogW1xcbiAgICAgICAgICAgIFxcXCJmbG9hdCBoID0gMC4yICogc2luKDYuMCAqIHBvcy54KSAqIGNvcyg2LjAgKiBwb3MueSk7XFxcIixcXG4gICAgICAgICAgICBcXFwicmV0dXJuIHZlYzQocG9zLnh5LCBwb3MueiArIGgsIHBvcy53KTtcXFwiLFxcbiAgICAgICAgXSxcXG4gICAgICAgIHZlcnRleFNoYWRlckNvZGU6IFtcXFwidmFyUG9zaXRpb24gPSBwb3NpdGlvbjtcXFwiXSxcXG4gICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xcbiAgICAgICAgICAgIFxcXCJ2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZShjcm9zcyhkRmR4KHZhclBvc2l0aW9uKSwgZEZkeSh2YXJQb3NpdGlvbikpKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJmbG9hdCBsaWdodCA9IDAuMyArIDAuNyAqIGFicyhkb3Qobm9ybWFsLCBub3JtYWxpemUodmVjMygxLCAyLCAzKSkpKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJ2ZWMzIGNvbG9yID0gbWl4KHZlYzMoMCwgLjMsIDEpLCB2ZWMzKDEsIC44LCAuMiksIHZhclBvc2l0aW9uLnogKiAyLjUgKyAwLjUpO1xcXCIsXFxuICAgICAgICAgICAgXFxcInJldHVybiB2ZWM0KGNvbG9yICogbGlnaHQsIDEpO1xcXCIsXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoZXMgPSBbMiwgOCwgMzJdLm1hcCgoc3ViZGl2aXNpb25zLCBpbmRleCkgPT4ge1xcbiAgICAgICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUdyaWQoe1xcbiAgICAgICAgICAgICAgICBzaXplWDogMS41LFxcbiAgICAgICAgICAgICAgICBzaXplWTogMS41LFxcbiAgICAgICAgICAgICAgICBzdWJkaXZpc2lvbnMsXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgbWF0ZXJpYWwsXFxuICAgICAgICB9KVxcbiAgICAgICAgbWVzaC50cmFuc2ZvLnNldFBvc2l0aW9uKGluZGV4IC0gMSwgMCwgKGluZGV4IC0gMSkgKiAyKVxcbiAgICAgICAgcmV0dXJuIG1lc2hcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNoaWxkcmVuOiBtZXNoZXMsXFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNS41LCAyKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICBpbmVydGlhWm9vbTogMTAwMCxcXG4gICAgfSlcXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gICAgVGdkR2VvbWV0cnlHcmlkLFxcbiAgICBUZ2RNYXRlcmlhbCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbCh7XFxuICAgICAgICB2YXJ5aW5nczogeyB2YXJQb3NpdGlvbjogXFxcInZlYzNcXFwiIH0sXFxuICAgICAgICB2ZXJ0ZXhTaGFkZXJDb2RlRm9yR2V0UG9zaXRpb246IFtcXG4gICAgICAgICAgICBcXFwiZmxvYXQgaCA9IDAuMiAqIHNpbig2LjAgKiBwb3MueCkgKiBjb3MoNi4wICogcG9zLnkpO1xcXCIsXFxuICAgICAgICAgICAgXFxcInJldHVybiB2ZWM0KHBvcy54eSwgcG9zLnogKyBoLCBwb3Mudyk7XFxcIixcXG4gICAgICAgIF0sXFxuICAgICAgICB2ZXJ0ZXhTaGFkZXJDb2RlOiBbXFxcInZhclBvc2l0aW9uID0gcG9zaXRpb247XFxcIl0sXFxuICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcXG4gICAgICAgICAgICBcXFwidmVjMyBub3JtYWwgPSBub3JtYWxpemUoY3Jvc3MoZEZkeCh2YXJQb3NpdGlvbiksIGRGZHkodmFyUG9zaXRpb24pKSk7XFxcIixcXG4gICAgICAgICAgICBcXFwiZmxvYXQgbGlnaHQgPSAwLjMgKyAwLjcgKiBhYnMoZG90KG5vcm1hbCwgbm9ybWFsaXplKHZlYzMoMSwgMiwgMykpKSk7XFxcIixcXG4gICAgICAgICAgICBcXFwidmVjMyBjb2xvciA9IG1peCh2ZWMzKDAsIC4zLCAxKSwgdmVjMygxLCAuOCwgLjIpLCB2YXJQb3NpdGlvbi56ICogMi41ICsgMC41KTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJyZXR1cm4gdmVjNChjb2xvciAqIGxpZ2h0LCAxKTtcXFwiLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWVzaGVzID0gWzIsIDgsIDMyXS5tYXAoKHN1YmRpdmlzaW9ucywgaW5kZXgpID0+IHtcXG4gICAgICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlHcmlkKHtcXG4gICAgICAgICAgICAgICAgc2l6ZVg6IDEuNSxcXG4gICAgICAgICAgICAgICAgc2l6ZVk6IDEuNSxcXG4gICAgICAgICAgICAgICAgc3ViZGl2aXNpb25zLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgfSlcXG4gICAgICAgIG1lc2gudHJhbnNmby5zZXRQb3NpdGlvbihpbmRleCAtIDEsIDAsIChpbmRleCAtIDEpICogMilcXG4gICAgICAgIHJldHVybiBtZXNoXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBjaGlsZHJlbjogbWVzaGVzLFxcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDUuNSwgMilcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgaW5lcnRpYVpvb206IDEwMDAsXFxuICAgIH0pXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSBnaXptbyAvPlxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIFRnZEdlb21ldHJ5R3JpZCxcbiAgICBUZ2RNYXRlcmlhbCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLFxuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsKHtcbiAgICAgICAgdmFyeWluZ3M6IHsgdmFyUG9zaXRpb246IFwidmVjM1wiIH0sXG4gICAgICAgIHZlcnRleFNoYWRlckNvZGVGb3JHZXRQb3NpdGlvbjogW1xuICAgICAgICAgICAgXCJmbG9hdCBoID0gMC4yICogc2luKDYuMCAqIHBvcy54KSAqIGNvcyg2LjAgKiBwb3MueSk7XCIsXG4gICAgICAgICAgICBcInJldHVybiB2ZWM0KHBvcy54eSwgcG9zLnogKyBoLCBwb3Mudyk7XCIsXG4gICAgICAgIF0sXG4gICAgICAgIHZlcnRleFNoYWRlckNvZGU6IFtcInZhclBvc2l0aW9uID0gcG9zaXRpb247XCJdLFxuICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcbiAgICAgICAgICAgIFwidmVjMyBub3JtYWwgPSBub3JtYWxpemUoY3Jvc3MoZEZkeCh2YXJQb3NpdGlvbiksIGRGZHkodmFyUG9zaXRpb24pKSk7XCIsXG4gICAgICAgICAgICBcImZsb2F0IGxpZ2h0ID0gMC4zICsgMC43ICogYWJzKGRvdChub3JtYWwsIG5vcm1hbGl6ZSh2ZWMzKDEsIDIsIDMpKSkpO1wiLFxuICAgICAgICAgICAgXCJ2ZWMzIGNvbG9yID0gbWl4KHZlYzMoMCwgLjMsIDEpLCB2ZWMzKDEsIC44LCAuMiksIHZhclBvc2l0aW9uLnogKiAyLjUgKyAwLjUpO1wiLFxuICAgICAgICAgICAgXCJyZXR1cm4gdmVjNChjb2xvciAqIGxpZ2h0LCAxKTtcIixcbiAgICAgICAgXSxcbiAgICB9KVxuICAgIGNvbnN0IG1lc2hlcyA9IFsyLCA4LCAzMl0ubWFwKChzdWJkaXZpc2lvbnMsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUdyaWQoe1xuICAgICAgICAgICAgICAgIHNpemVYOiAxLjUsXG4gICAgICAgICAgICAgICAgc2l6ZVk6IDEuNSxcbiAgICAgICAgICAgICAgICBzdWJkaXZpc2lvbnMsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1hdGVyaWFsLFxuICAgICAgICB9KVxuICAgICAgICBtZXNoLnRyYW5zZm8uc2V0UG9zaXRpb24oaW5kZXggLSAxLCAwLCAoaW5kZXggLSAxKSAqIDIpXG4gICAgICAgIHJldHVybiBtZXNoXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgY2hpbGRyZW46IG1lc2hlcyxcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNS41LCAyKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxuICAgIH0pXG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IGdpem1vIC8+XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsIlRnZEdlb21ldHJ5R3JpZCIsIlRnZE1hdGVyaWFsIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU3RhdGUiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJjbGVhciIsIm1hdGVyaWFsIiwibWVzaGVzIiwic3ViZGl2aXNpb25zIiwiaW5kZXgiLCJtZXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQTBpRDtBQUNya0QsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEs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