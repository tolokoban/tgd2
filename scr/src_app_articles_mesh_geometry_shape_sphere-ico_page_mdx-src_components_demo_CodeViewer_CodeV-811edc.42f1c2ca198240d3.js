"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_geometry_shape_sphere-ico_page_mdx-src_components_demo_CodeViewer_CodeV-811edc"], {
63650(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(35568);
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
    "Detail #1": 'function init(context: TgdContext) {\n\tconst clear = new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1] })\n\tconst material = new TgdMaterialFaceOrientation()\n\tconst meshes = [0, 1, 2, 3].map(\n\t\t(subdivisions) =>\n\t\t\tnew TgdPainterMesh(context, {\n\t\t\t\tgeometry: new TgdGeometrySphereIco({\n\t\t\t\t\tcenter: [\n\t\t\t\t\t\t(subdivisions % 2) - 0.5,\n\t\t\t\t\t\tMath.floor(subdivisions / 2) - 0.5,\n\t\t\t\t\t\t0,\n\t\t\t\t\t],\n\t\t\t\t\tsubdivisions,\n\t\t\t\t\tradius: 0.5,\n\t\t\t\t}),\n\t\t\t\tmaterial,\n\t\t\t}),\n\t)\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: meshes,\n\t\t\tdepth: "less",\n\t\t\tcull: "back",\n\t\t}),\n\t)\n\tcontext.paint()\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t})\n}'
};
var FULL = 'import {\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdGeometrySphereIco,\n\tTgdMaterialDiffuse,\n\tTgdMaterialFaceOrientation,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\twebglPresetDepth,\n} from "@tolokoban/tgd"\n\nimport View from "@/components/demo/Tgd"\n\nfunction init(context: TgdContext) {\n\tconst clear = new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1] })\n\tconst material = new TgdMaterialFaceOrientation()\n\tconst meshes = [0, 1, 2, 3].map(\n\t\t(subdivisions) =>\n\t\t\tnew TgdPainterMesh(context, {\n\t\t\t\tgeometry: new TgdGeometrySphereIco({\n\t\t\t\t\tcenter: [\n\t\t\t\t\t\t(subdivisions % 2) - 0.5,\n\t\t\t\t\t\tMath.floor(subdivisions / 2) - 0.5,\n\t\t\t\t\t\t0,\n\t\t\t\t\t],\n\t\t\t\t\tsubdivisions,\n\t\t\t\t\tradius: 0.5,\n\t\t\t\t}),\n\t\t\t\tmaterial,\n\t\t\t}),\n\t)\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: meshes,\n\t\t\tdepth: "less",\n\t\t\tcull: "back",\n\t\t}),\n\t)\n\tcontext.paint()\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t})\n}\n\nexport default function Demo() {\n\treturn <View onReady={init} gizmo />\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/_/main.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/_/main.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/_/main.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}


},
35568(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
        ]
    });
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialFaceOrientation();
    var meshes = [
        0,
        1,
        2,
        3
    ].map(function(subdivisions) {
        return new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
            geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometrySphereIco({
                center: [
                    subdivisions % 2 - 0.5,
                    Math.floor(subdivisions / 2) - 0.5,
                    0
                ],
                subdivisions: subdivisions,
                radius: 0.5
            }),
            material: material
        });
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        children: meshes,
        depth: "less",
        cull: "back"
    }));
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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/_/main.demo/main.demo.tsx",
        lineNumber: 47,
        columnNumber: 12
    }, this);
}


},
93699(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(63650);
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
        h1: "h1",
        p: "p",
        table: "table",
        tbody: "tbody",
        td: "td",
        th: "th",
        thead: "thead",
        tr: "tr"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "TgdGeometrySphereIco"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "An IcoSphere is a subdivided icosahedron (a 20 faces dice).\nEvery subdivision multiplies the number of faces by 4."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.table, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.thead, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.tr, {
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.th, {
                                    children: "Subdivisions"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                    lineNumber: 10,
                                    columnNumber: 1
                                }, this),
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.th, {
                                    children: "Faces"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                    lineNumber: 10,
                                    columnNumber: 16
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                            lineNumber: 10,
                            columnNumber: 1
                        }, this)
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.tbody, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.tr, {
                                children: [
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.td, {
                                        children: "0"
                                    }, undefined, false, {
                                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                        lineNumber: 12,
                                        columnNumber: 1
                                    }, this),
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.td, {
                                        children: "20"
                                    }, undefined, false, {
                                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                        lineNumber: 12,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, undefined, true, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                lineNumber: 12,
                                columnNumber: 1
                            }, this),
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.tr, {
                                children: [
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.td, {
                                        children: "1"
                                    }, undefined, false, {
                                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                        lineNumber: 13,
                                        columnNumber: 1
                                    }, this),
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.td, {
                                        children: "80"
                                    }, undefined, false, {
                                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                        lineNumber: 13,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, undefined, true, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                lineNumber: 13,
                                columnNumber: 1
                            }, this),
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.tr, {
                                children: [
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.td, {
                                        children: "2"
                                    }, undefined, false, {
                                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                        lineNumber: 14,
                                        columnNumber: 1
                                    }, this),
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.td, {
                                        children: "320"
                                    }, undefined, false, {
                                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                        lineNumber: 14,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, undefined, true, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                lineNumber: 14,
                                columnNumber: 1
                            }, this),
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.tr, {
                                children: [
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.td, {
                                        children: "3"
                                    }, undefined, false, {
                                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                        lineNumber: 15,
                                        columnNumber: 1
                                    }, this),
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.td, {
                                        children: "1280"
                                    }, undefined, false, {
                                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                        lineNumber: 15,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, undefined, true, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                lineNumber: 15,
                                columnNumber: 1
                            }, this),
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.tr, {
                                children: [
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.td, {
                                        children: "3"
                                    }, undefined, false, {
                                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                        lineNumber: 16,
                                        columnNumber: 1
                                    }, this),
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.td, {
                                        children: "5120"
                                    }, undefined, false, {
                                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                        lineNumber: 16,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, undefined, true, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                lineNumber: 16,
                                columnNumber: 1
                            }, this),
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.tr, {
                                children: [
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.td, {
                                        children: "n"
                                    }, undefined, false, {
                                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                        lineNumber: 17,
                                        columnNumber: 1
                                    }, this),
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.td, {
                                        children: "n*80"
                                    }, undefined, false, {
                                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                        lineNumber: 17,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, undefined, true, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                                lineNumber: 17,
                                columnNumber: 1
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this)
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/sphere-ico/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9nZW9tZXRyeV9zaGFwZV9zcGhlcmUtaWNvX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVi04MTFlZGMuNDJmMWMyY2ExOTgyNDBkMy5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9nZW9tZXRyeS9zaGFwZS9zcGhlcmUtaWNvL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvZ2VvbWV0cnkvc2hhcGUvc3BoZXJlLWljby9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9nZW9tZXRyeS9zaGFwZS9zcGhlcmUtaWNvL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJEZXRhaWwgIzFcIjpcbiAgICAgICAgJ2Z1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4xLCAwLjEsIDAuMSwgMV0gfSlcXG5cXHRjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpXFxuXFx0Y29uc3QgbWVzaGVzID0gWzAsIDEsIDIsIDNdLm1hcChcXG5cXHRcXHQoc3ViZGl2aXNpb25zKSA9PlxcblxcdFxcdFxcdG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuXFx0XFx0XFx0XFx0Z2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVNwaGVyZUljbyh7XFxuXFx0XFx0XFx0XFx0XFx0Y2VudGVyOiBbXFxuXFx0XFx0XFx0XFx0XFx0XFx0KHN1YmRpdmlzaW9ucyAlIDIpIC0gMC41LFxcblxcdFxcdFxcdFxcdFxcdFxcdE1hdGguZmxvb3Ioc3ViZGl2aXNpb25zIC8gMikgLSAwLjUsXFxuXFx0XFx0XFx0XFx0XFx0XFx0MCxcXG5cXHRcXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdFxcdFxcdHN1YmRpdmlzaW9ucyxcXG5cXHRcXHRcXHRcXHRcXHRyYWRpdXM6IDAuNSxcXG5cXHRcXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRcXHRtYXRlcmlhbCxcXG5cXHRcXHRcXHR9KSxcXG5cXHQpXFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0Y2xlYXIsXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0Y2hpbGRyZW46IG1lc2hlcyxcXG5cXHRcXHRcXHRkZXB0aDogXCJsZXNzXCIsXFxuXFx0XFx0XFx0Y3VsbDogXCJiYWNrXCIsXFxuXFx0XFx0fSksXFxuXFx0KVxcblxcdGNvbnRleHQucGFpbnQoKVxcblxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcblxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRpbmVydGlhWm9vbTogMTAwMCxcXG5cXHR9KVxcbn0nLFxufVxuY29uc3QgRlVMTCA9XG4gICAgJ2ltcG9ydCB7XFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHRUZ2RHZW9tZXRyeVNwaGVyZUljbyxcXG5cXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuXFx0VGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJNZXNoLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5cXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdIH0pXFxuXFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKVxcblxcdGNvbnN0IG1lc2hlcyA9IFswLCAxLCAyLCAzXS5tYXAoXFxuXFx0XFx0KHN1YmRpdmlzaW9ucykgPT5cXG5cXHRcXHRcXHRuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcblxcdFxcdFxcdFxcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oe1xcblxcdFxcdFxcdFxcdFxcdGNlbnRlcjogW1xcblxcdFxcdFxcdFxcdFxcdFxcdChzdWJkaXZpc2lvbnMgJSAyKSAtIDAuNSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRNYXRoLmZsb29yKHN1YmRpdmlzaW9ucyAvIDIpIC0gMC41LFxcblxcdFxcdFxcdFxcdFxcdFxcdDAsXFxuXFx0XFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHRcXHRcXHRzdWJkaXZpc2lvbnMsXFxuXFx0XFx0XFx0XFx0XFx0cmFkaXVzOiAwLjUsXFxuXFx0XFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0XFx0bWF0ZXJpYWwsXFxuXFx0XFx0XFx0fSksXFxuXFx0KVxcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGNsZWFyLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGNoaWxkcmVuOiBtZXNoZXMsXFxuXFx0XFx0XFx0ZGVwdGg6IFwibGVzc1wiLFxcblxcdFxcdFxcdGN1bGw6IFwiYmFja1wiLFxcblxcdFxcdH0pLFxcblxcdClcXG5cXHRjb250ZXh0LnBhaW50KClcXG5cXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0aW5lcnRpYVpvb206IDEwMDAsXFxuXFx0fSlcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gZ2l6bW8gLz5cXG59XFxuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxEZW1vIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgVGdkR2VvbWV0cnlTcGhlcmVJY28sXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxuICAgIFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSB9KVxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKClcbiAgICBjb25zdCBtZXNoZXMgPSBbMCwgMSwgMiwgM10ubWFwKFxuICAgICAgICAoc3ViZGl2aXNpb25zKSA9PlxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5U3BoZXJlSWNvKHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbKHN1YmRpdmlzaW9ucyAlIDIpIC0gMC41LCBNYXRoLmZsb29yKHN1YmRpdmlzaW9ucyAvIDIpIC0gMC41LCAwXSxcbiAgICAgICAgICAgICAgICAgICAgc3ViZGl2aXNpb25zLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDAuNSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgY2hpbGRyZW46IG1lc2hlcyxcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgICAgIGN1bGw6IFwiYmFja1wiLFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgaW5lcnRpYVpvb206IDEwMDAsXG4gICAgfSlcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gZ2l6bW8gLz5cbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkR2VvbWV0cnlTcGhlcmVJY28iLCJUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbiIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwiVmlldyIsImluaXQiLCJjb250ZXh0IiwiY2xlYXIiLCJtYXRlcmlhbCIsIm1lc2hlcyIsInN1YmRpdmlzaW9ucyIsIk1hdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDdkI7QUFFOUIsSUFBTUksUUFBUTtJQUNWLGFBQ0k7QUFDUjtBQUNBLElBQU1DLE9BQ0Y7QUFFVyxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQ0k7OzBCQUNJLGtEQUFDO2dCQUFJLFdBQVU7MEJB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