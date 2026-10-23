"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_geometry_shape_box_page_mdx-src_components_demo_CodeViewer_CodeViewer_m-ed133c"], {
94897(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid-3x2.a98602b61cdbb8df.webp";

},
94322(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(3616);
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
    "createMesh()": "function createMesh(\n\tcontext: TgdContext,\n\tmaterial: TgdMaterial,\n\tsettings: Settings,\n): TgdPainterMesh {\n\tconst geometry = new TgdGeometryBox({\n\t\tsizeX: settings.sizeX,\n\t\tsizeY: settings.sizeY,\n\t\tsizeZ: settings.sizeZ,\n\t\tcenter: [settings.centerX, settings.centerY, settings.centerZ],\n\t\tuvs: UVS[settings.uvs],\n\t\tbevel:\n\t\t\tsettings.bevel === 1\n\t\t\t\t? {\n\t\t\t\t\t\twidth: settings.width,\n\t\t\t\t\t\tsegments: settings.segments,\n\t\t\t\t\t\tprofileShape: settings.profileShape,\n\t\t\t\t\t\tkeep: KEEP[settings.keep],\n\t\t\t\t\t}\n\t\t\t\t: undefined,\n\t});\n\treturn new TgdPainterMesh(context, { geometry, material });\n}"
};
var FULL = "import {\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdGeometryBox,\n\ttype TgdGeometryBoxOptions,\n\ttype TgdMaterial,\n\tTgdMaterialDiffuse,\n\tTgdMaterialFaceOrientation,\n\tTgdMaterialNormals,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\n\nimport View, { type Assets } from \"@/components/demo/Tgd\";\nimport UVGrid3x2URL from \"@/assets/image/uv-grid-3x2.webp\";\n\nconst UVS: Array<TgdGeometryBoxOptions[\"uvs\"]> = [\"sameOnEachFace\", \"3x2\"];\nconst KEEP = [\"both\", \"bevel\", \"face\"] as const;\n\ntype Settings = Record<\n\t| \"sizeX\"\n\t| \"sizeY\"\n\t| \"sizeZ\"\n\t| \"centerX\"\n\t| \"centerY\"\n\t| \"centerZ\"\n\t| \"uvs\"\n\t| \"bevel\"\n\t| \"width\"\n\t| \"segments\"\n\t| \"profileShape\"\n\t| \"keep\"\n\t| \"material\",\n\tnumber\n>;\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.1, 0.1, 1],\n\t\tdepth: 1,\n\t});\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.uvGrid);\n\tconst materials: TgdMaterial[] = [\n\t\tnew TgdMaterialDiffuse({ color: texture, lockLightsToCamera: true }),\n\t\tnew TgdMaterialNormals(),\n\t\tnew TgdMaterialFaceOrientation(),\n\t];\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t});\n\tcontext.add(clear, state);\n\tcontext.camera.fitSpaceAtTarget(4, 4);\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t});\n\treturn (settings: Settings) => {\n\t\tstate.removeAll();\n\t\tstate.add(createMesh(context, materials[settings.material], settings));\n\t\tcontext.paint();\n\t};\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\tassets={{ image: { uvGrid: UVGrid3x2URL } }}\n\t\t\tsettings={{\n\t\t\t\tsizeX: { label: \"sizeX\", value: 3, min: 0.1, max: 4 },\n\t\t\t\tsizeY: { label: \"sizeY\", value: 2, min: 0.1, max: 4 },\n\t\t\t\tsizeZ: { label: \"sizeZ\", value: 1, min: 0.1, max: 4 },\n\t\t\t\tcenterX: { label: \"center X\", value: -0.5, min: -2, max: 2 },\n\t\t\t\tcenterY: { label: \"center Y\", value: 0, min: -2, max: 2 },\n\t\t\t\tcenterZ: { label: \"center Z\", value: 0, min: -2, max: 2 },\n\t\t\t\tuvs: { label: \"uvs\", value: 1, step: [\"sameOnEachFace\", \"3x2\"] },\n\t\t\t\tbevel: { label: \"bevel\", value: 1, step: [\"Off\", \"On\"] },\n\t\t\t\twidth: { label: \"bevel.width\", value: 0.3, min: 0, max: 1 },\n\t\t\t\tsegments: {\n\t\t\t\t\tlabel: \"bevel.segments\",\n\t\t\t\t\tvalue: 4,\n\t\t\t\t\tmin: 1,\n\t\t\t\t\tmax: 16,\n\t\t\t\t\tstep: 1,\n\t\t\t\t},\n\t\t\t\tprofileShape: {\n\t\t\t\t\tlabel: \"bevel.profileShape\",\n\t\t\t\t\tvalue: 0.5,\n\t\t\t\t\tmin: 0,\n\t\t\t\t\tmax: 1,\n\t\t\t\t},\n\t\t\t\tkeep: {\n\t\t\t\t\tlabel: \"bevel.keep\",\n\t\t\t\t\tvalue: 0,\n\t\t\t\t\tstep: [\"both\", \"bevel\", \"face\"],\n\t\t\t\t},\n\t\t\t\tmaterial: {\n\t\t\t\t\tlabel: \"material\",\n\t\t\t\t\tvalue: 0,\n\t\t\t\t\tstep: [\"Diffuse\", \"Normals\", \"Face orientation\"],\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n\nfunction createMesh(\n\tcontext: TgdContext,\n\tmaterial: TgdMaterial,\n\tsettings: Settings,\n): TgdPainterMesh {\n\tconst geometry = new TgdGeometryBox({\n\t\tsizeX: settings.sizeX,\n\t\tsizeY: settings.sizeY,\n\t\tsizeZ: settings.sizeZ,\n\t\tcenter: [settings.centerX, settings.centerY, settings.centerZ],\n\t\tuvs: UVS[settings.uvs],\n\t\tbevel:\n\t\t\tsettings.bevel === 1\n\t\t\t\t? {\n\t\t\t\t\t\twidth: settings.width,\n\t\t\t\t\t\tsegments: settings.segments,\n\t\t\t\t\t\tprofileShape: settings.profileShape,\n\t\t\t\t\t\tkeep: KEEP[settings.keep],\n\t\t\t\t\t}\n\t\t\t\t: undefined,\n\t});\n\treturn new TgdPainterMesh(context, { geometry, material });\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
3616(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_image_uv_grid_3x2_webp__rspack_import_3 = __webpack_require__(94897);




var UVS = [
    "sameOnEachFace",
    "3x2"
];
var KEEP = [
    "both",
    "bevel",
    "face"
];
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
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.uvGrid);
    var materials = [
        new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: texture,
            lockLightsToCamera: true
        }),
        new _tolokoban_tgd__rspack_import_1.TgdMaterialNormals(),
        new _tolokoban_tgd__rspack_import_1.TgdMaterialFaceOrientation()
    ];
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less
    });
    context.add(clear, state);
    context.camera.fitSpaceAtTarget(4, 4);
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        inertiaZoom: 1000
    });
    return function(settings) {
        state.removeAll();
        state.add(createMesh(context, materials[settings.material], settings));
        context.paint();
    };
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        gizmo: true,
        assets: {
            image: {
                uvGrid: _assets_image_uv_grid_3x2_webp__rspack_import_3
            }
        },
        settings: {
            sizeX: {
                label: "sizeX",
                value: 3,
                min: 0.1,
                max: 4
            },
            sizeY: {
                label: "sizeY",
                value: 2,
                min: 0.1,
                max: 4
            },
            sizeZ: {
                label: "sizeZ",
                value: 1,
                min: 0.1,
                max: 4
            },
            centerX: {
                label: "center X",
                value: -0.5,
                min: -2,
                max: 2
            },
            centerY: {
                label: "center Y",
                value: 0,
                min: -2,
                max: 2
            },
            centerZ: {
                label: "center Z",
                value: 0,
                min: -2,
                max: 2
            },
            uvs: {
                label: "uvs",
                value: 1,
                step: [
                    "sameOnEachFace",
                    "3x2"
                ]
            },
            bevel: {
                label: "bevel",
                value: 1,
                step: [
                    "Off",
                    "On"
                ]
            },
            width: {
                label: "bevel.width",
                value: 0.3,
                min: 0,
                max: 1
            },
            segments: {
                label: "bevel.segments",
                value: 4,
                min: 1,
                max: 16,
                step: 1
            },
            profileShape: {
                label: "bevel.profileShape",
                value: 0.5,
                min: 0,
                max: 1
            },
            keep: {
                label: "bevel.keep",
                value: 0,
                step: [
                    "both",
                    "bevel",
                    "face"
                ]
            },
            material: {
                label: "material",
                value: 0,
                step: [
                    "Diffuse",
                    "Normals",
                    "Face orientation"
                ]
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/_/main.demo/main.demo.tsx",
        lineNumber: 69,
        columnNumber: 3
    }, this);
}
// #begin createMesh()
function createMesh(context, material, settings) {
    var geometry = new _tolokoban_tgd__rspack_import_1.TgdGeometryBox({
        sizeX: settings.sizeX,
        sizeY: settings.sizeY,
        sizeZ: settings.sizeZ,
        center: [
            settings.centerX,
            settings.centerY,
            settings.centerZ
        ],
        uvs: UVS[settings.uvs],
        bevel: settings.bevel === 1 ? {
            width: settings.width,
            segments: settings.segments,
            profileShape: settings.profileShape,
            keep: KEEP[settings.keep]
        } : undefined
    });
    return new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: geometry,
        material: material
    });
} // #end


},
12593(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(94322);
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
                    href: "docs/classes/TgdGeometryBox.html",
                    children: "TgdGeometryBox"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "A box with flat normals, centered on ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "center"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                        lineNumber: 7,
                        columnNumber: 38
                    }, this),
                    ".\nThe ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "uvs"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                        lineNumber: 8,
                        columnNumber: 5
                    }, this),
                    " option maps the same texture on each face (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "\"sameOnEachFace\""
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                        lineNumber: 8,
                        columnNumber: 54
                    }, this),
                    "),\nor uses a texture split into 3 columns and 2 rows (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "\"3x2\""
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                        lineNumber: 9,
                        columnNumber: 52
                    }, this),
                    "), one area per face."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Bevel"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "bevel"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                        lineNumber: 13,
                        columnNumber: 5
                    }, this),
                    " option rounds the edges and corners, like the Bevel modifier of Blender:"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        " geometry = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdGeometryBox"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        "({\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "sizeX"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "3"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        ",\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "sizeY"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "2"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        ",\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "sizeZ"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        ",\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "bevel"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        ": {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "width"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.3"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        ",\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "segments"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "4"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        ",\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "profileShape"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.5"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
                        }, this),
                        ",\n    },\n})\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                    lineNumber: 15,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "width"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                                lineNumber: 28,
                                columnNumber: 3
                            }, this),
                            ": the bevel amount. It cannot be greater than half the smallest size."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                        lineNumber: 28,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "segments"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                                lineNumber: 29,
                                columnNumber: 3
                            }, this),
                            ": the number of segments of the curved edges."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                        lineNumber: 29,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "profileShape"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                                lineNumber: 30,
                                columnNumber: 3
                            }, this),
                            " (default ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "0.5"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                                lineNumber: 30,
                                columnNumber: 27
                            }, this),
                            "): the superellipse factor.\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "0.25"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                                lineNumber: 31,
                                columnNumber: 3
                            }, this),
                            " is a straight chamfer, ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "0.5"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                                lineNumber: 31,
                                columnNumber: 35
                            }, this),
                            " a circular arc, ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "1.0"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                                lineNumber: 31,
                                columnNumber: 59
                            }, this),
                            " a square corner, and ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "0.0"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                                lineNumber: 31,
                                columnNumber: 88
                            }, this),
                            " a concave one."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                        lineNumber: 30,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "keep"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                                lineNumber: 32,
                                columnNumber: 3
                            }, this),
                            " (default ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "\"both\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                                lineNumber: 32,
                                columnNumber: 19
                            }, this),
                            "): ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"bevel\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                                lineNumber: 32,
                                columnNumber: 32
                            }, this),
                            " keeps only the bevel, ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"face\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                                lineNumber: 32,
                                columnNumber: 64
                            }, this),
                            " keeps only the (smaller) faces."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                        lineNumber: 32,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                lineNumber: 28,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "The normals are smooth on the bevel, but stay sharp on the 6 faces."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
                lineNumber: 34,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/box/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9nZW9tZXRyeV9zaGFwZV9ib3hfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbS1lZDEzM2MuMjNkMjJlOTI2ZGViNWFhYi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL2dlb21ldHJ5L3NoYXBlL2JveC9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvZ2VvbWV0cnkvc2hhcGUvYm94L18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvZ2VvbWV0cnkvc2hhcGUvYm94L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcImNyZWF0ZU1lc2goKVwiOlwiZnVuY3Rpb24gY3JlYXRlTWVzaChcXG5cXHRjb250ZXh0OiBUZ2RDb250ZXh0LFxcblxcdG1hdGVyaWFsOiBUZ2RNYXRlcmlhbCxcXG5cXHRzZXR0aW5nczogU2V0dGluZ3MsXFxuKTogVGdkUGFpbnRlck1lc2gge1xcblxcdGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRnZEdlb21ldHJ5Qm94KHtcXG5cXHRcXHRzaXplWDogc2V0dGluZ3Muc2l6ZVgsXFxuXFx0XFx0c2l6ZVk6IHNldHRpbmdzLnNpemVZLFxcblxcdFxcdHNpemVaOiBzZXR0aW5ncy5zaXplWixcXG5cXHRcXHRjZW50ZXI6IFtzZXR0aW5ncy5jZW50ZXJYLCBzZXR0aW5ncy5jZW50ZXJZLCBzZXR0aW5ncy5jZW50ZXJaXSxcXG5cXHRcXHR1dnM6IFVWU1tzZXR0aW5ncy51dnNdLFxcblxcdFxcdGJldmVsOlxcblxcdFxcdFxcdHNldHRpbmdzLmJldmVsID09PSAxXFxuXFx0XFx0XFx0XFx0PyB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IHNldHRpbmdzLndpZHRoLFxcblxcdFxcdFxcdFxcdFxcdFxcdHNlZ21lbnRzOiBzZXR0aW5ncy5zZWdtZW50cyxcXG5cXHRcXHRcXHRcXHRcXHRcXHRwcm9maWxlU2hhcGU6IHNldHRpbmdzLnByb2ZpbGVTaGFwZSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRrZWVwOiBLRUVQW3NldHRpbmdzLmtlZXBdLFxcblxcdFxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHQ6IHVuZGVmaW5lZCxcXG5cXHR9KTtcXG5cXHRyZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHsgZ2VvbWV0cnksIG1hdGVyaWFsIH0pO1xcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHRUZ2RHZW9tZXRyeUJveCxcXG5cXHR0eXBlIFRnZEdlb21ldHJ5Qm94T3B0aW9ucyxcXG5cXHR0eXBlIFRnZE1hdGVyaWFsLFxcblxcdFRnZE1hdGVyaWFsRGlmZnVzZSxcXG5cXHRUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcXG5cXHRUZ2RNYXRlcmlhbE5vcm1hbHMsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJNZXNoLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxuXFx0d2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5cXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuaW1wb3J0IFVWR3JpZDN4MlVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLTN4Mi53ZWJwXFxcIjtcXG5cXG5jb25zdCBVVlM6IEFycmF5PFRnZEdlb21ldHJ5Qm94T3B0aW9uc1tcXFwidXZzXFxcIl0+ID0gW1xcXCJzYW1lT25FYWNoRmFjZVxcXCIsIFxcXCIzeDJcXFwiXTtcXG5jb25zdCBLRUVQID0gW1xcXCJib3RoXFxcIiwgXFxcImJldmVsXFxcIiwgXFxcImZhY2VcXFwiXSBhcyBjb25zdDtcXG5cXG50eXBlIFNldHRpbmdzID0gUmVjb3JkPFxcblxcdHwgXFxcInNpemVYXFxcIlxcblxcdHwgXFxcInNpemVZXFxcIlxcblxcdHwgXFxcInNpemVaXFxcIlxcblxcdHwgXFxcImNlbnRlclhcXFwiXFxuXFx0fCBcXFwiY2VudGVyWVxcXCJcXG5cXHR8IFxcXCJjZW50ZXJaXFxcIlxcblxcdHwgXFxcInV2c1xcXCJcXG5cXHR8IFxcXCJiZXZlbFxcXCJcXG5cXHR8IFxcXCJ3aWR0aFxcXCJcXG5cXHR8IFxcXCJzZWdtZW50c1xcXCJcXG5cXHR8IFxcXCJwcm9maWxlU2hhcGVcXFwiXFxuXFx0fCBcXFwia2VlcFxcXCJcXG5cXHR8IFxcXCJtYXRlcmlhbFxcXCIsXFxuXFx0bnVtYmVyXFxuPjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLnV2R3JpZCk7XFxuXFx0Y29uc3QgbWF0ZXJpYWxzOiBUZ2RNYXRlcmlhbFtdID0gW1xcblxcdFxcdG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2UoeyBjb2xvcjogdGV4dHVyZSwgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlIH0pLFxcblxcdFxcdG5ldyBUZ2RNYXRlcmlhbE5vcm1hbHMoKSxcXG5cXHRcXHRuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKSxcXG5cXHRdO1xcblxcdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcblxcdGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNCwgNCk7XFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdGluZXJ0aWFab29tOiAxMDAwLFxcblxcdH0pO1xcblxcdHJldHVybiAoc2V0dGluZ3M6IFNldHRpbmdzKSA9PiB7XFxuXFx0XFx0c3RhdGUucmVtb3ZlQWxsKCk7XFxuXFx0XFx0c3RhdGUuYWRkKGNyZWF0ZU1lc2goY29udGV4dCwgbWF0ZXJpYWxzW3NldHRpbmdzLm1hdGVyaWFsXSwgc2V0dGluZ3MpKTtcXG5cXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0fTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRnaXptb1xcblxcdFxcdFxcdGFzc2V0cz17eyBpbWFnZTogeyB1dkdyaWQ6IFVWR3JpZDN4MlVSTCB9IH19XFxuXFx0XFx0XFx0c2V0dGluZ3M9e3tcXG5cXHRcXHRcXHRcXHRzaXplWDogeyBsYWJlbDogXFxcInNpemVYXFxcIiwgdmFsdWU6IDMsIG1pbjogMC4xLCBtYXg6IDQgfSxcXG5cXHRcXHRcXHRcXHRzaXplWTogeyBsYWJlbDogXFxcInNpemVZXFxcIiwgdmFsdWU6IDIsIG1pbjogMC4xLCBtYXg6IDQgfSxcXG5cXHRcXHRcXHRcXHRzaXplWjogeyBsYWJlbDogXFxcInNpemVaXFxcIiwgdmFsdWU6IDEsIG1pbjogMC4xLCBtYXg6IDQgfSxcXG5cXHRcXHRcXHRcXHRjZW50ZXJYOiB7IGxhYmVsOiBcXFwiY2VudGVyIFhcXFwiLCB2YWx1ZTogLTAuNSwgbWluOiAtMiwgbWF4OiAyIH0sXFxuXFx0XFx0XFx0XFx0Y2VudGVyWTogeyBsYWJlbDogXFxcImNlbnRlciBZXFxcIiwgdmFsdWU6IDAsIG1pbjogLTIsIG1heDogMiB9LFxcblxcdFxcdFxcdFxcdGNlbnRlclo6IHsgbGFiZWw6IFxcXCJjZW50ZXIgWlxcXCIsIHZhbHVlOiAwLCBtaW46IC0yLCBtYXg6IDIgfSxcXG5cXHRcXHRcXHRcXHR1dnM6IHsgbGFiZWw6IFxcXCJ1dnNcXFwiLCB2YWx1ZTogMSwgc3RlcDogW1xcXCJzYW1lT25FYWNoRmFjZVxcXCIsIFxcXCIzeDJcXFwiXSB9LFxcblxcdFxcdFxcdFxcdGJldmVsOiB7IGxhYmVsOiBcXFwiYmV2ZWxcXFwiLCB2YWx1ZTogMSwgc3RlcDogW1xcXCJPZmZcXFwiLCBcXFwiT25cXFwiXSB9LFxcblxcdFxcdFxcdFxcdHdpZHRoOiB7IGxhYmVsOiBcXFwiYmV2ZWwud2lkdGhcXFwiLCB2YWx1ZTogMC4zLCBtaW46IDAsIG1heDogMSB9LFxcblxcdFxcdFxcdFxcdHNlZ21lbnRzOiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJiZXZlbC5zZWdtZW50c1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDQsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1heDogMTYsXFxuXFx0XFx0XFx0XFx0XFx0c3RlcDogMSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHByb2ZpbGVTaGFwZToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwiYmV2ZWwucHJvZmlsZVNoYXBlXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMC41LFxcblxcdFxcdFxcdFxcdFxcdG1pbjogMCxcXG5cXHRcXHRcXHRcXHRcXHRtYXg6IDEsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRrZWVwOiB7XFxuXFx0XFx0XFx0XFx0XFx0bGFiZWw6IFxcXCJiZXZlbC5rZWVwXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMCxcXG5cXHRcXHRcXHRcXHRcXHRzdGVwOiBbXFxcImJvdGhcXFwiLCBcXFwiYmV2ZWxcXFwiLCBcXFwiZmFjZVxcXCJdLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0bWF0ZXJpYWw6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcIm1hdGVyaWFsXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMCxcXG5cXHRcXHRcXHRcXHRcXHRzdGVwOiBbXFxcIkRpZmZ1c2VcXFwiLCBcXFwiTm9ybWFsc1xcXCIsIFxcXCJGYWNlIG9yaWVudGF0aW9uXFxcIl0sXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KTtcXG59XFxuXFxuZnVuY3Rpb24gY3JlYXRlTWVzaChcXG5cXHRjb250ZXh0OiBUZ2RDb250ZXh0LFxcblxcdG1hdGVyaWFsOiBUZ2RNYXRlcmlhbCxcXG5cXHRzZXR0aW5nczogU2V0dGluZ3MsXFxuKTogVGdkUGFpbnRlck1lc2gge1xcblxcdGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRnZEdlb21ldHJ5Qm94KHtcXG5cXHRcXHRzaXplWDogc2V0dGluZ3Muc2l6ZVgsXFxuXFx0XFx0c2l6ZVk6IHNldHRpbmdzLnNpemVZLFxcblxcdFxcdHNpemVaOiBzZXR0aW5ncy5zaXplWixcXG5cXHRcXHRjZW50ZXI6IFtzZXR0aW5ncy5jZW50ZXJYLCBzZXR0aW5ncy5jZW50ZXJZLCBzZXR0aW5ncy5jZW50ZXJaXSxcXG5cXHRcXHR1dnM6IFVWU1tzZXR0aW5ncy51dnNdLFxcblxcdFxcdGJldmVsOlxcblxcdFxcdFxcdHNldHRpbmdzLmJldmVsID09PSAxXFxuXFx0XFx0XFx0XFx0PyB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IHNldHRpbmdzLndpZHRoLFxcblxcdFxcdFxcdFxcdFxcdFxcdHNlZ21lbnRzOiBzZXR0aW5ncy5zZWdtZW50cyxcXG5cXHRcXHRcXHRcXHRcXHRcXHRwcm9maWxlU2hhcGU6IHNldHRpbmdzLnByb2ZpbGVTaGFwZSxcXG5cXHRcXHRcXHRcXHRcXHRcXHRrZWVwOiBLRUVQW3NldHRpbmdzLmtlZXBdLFxcblxcdFxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHQ6IHVuZGVmaW5lZCxcXG5cXHR9KTtcXG5cXHRyZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHsgZ2VvbWV0cnksIG1hdGVyaWFsIH0pO1xcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdFRnZEdlb21ldHJ5Qm94LFxuXHR0eXBlIFRnZEdlb21ldHJ5Qm94T3B0aW9ucyxcblx0dHlwZSBUZ2RNYXRlcmlhbCxcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHRUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcblx0VGdkTWF0ZXJpYWxOb3JtYWxzLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuaW1wb3J0IFVWR3JpZDN4MlVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvdXYtZ3JpZC0zeDIud2VicFwiO1xuXG5jb25zdCBVVlM6IEFycmF5PFRnZEdlb21ldHJ5Qm94T3B0aW9uc1tcInV2c1wiXT4gPSBbXCJzYW1lT25FYWNoRmFjZVwiLCBcIjN4MlwiXTtcbmNvbnN0IEtFRVAgPSBbXCJib3RoXCIsIFwiYmV2ZWxcIiwgXCJmYWNlXCJdIGFzIGNvbnN0O1xuXG50eXBlIFNldHRpbmdzID0gUmVjb3JkPFxuXHR8IFwic2l6ZVhcIlxuXHR8IFwic2l6ZVlcIlxuXHR8IFwic2l6ZVpcIlxuXHR8IFwiY2VudGVyWFwiXG5cdHwgXCJjZW50ZXJZXCJcblx0fCBcImNlbnRlclpcIlxuXHR8IFwidXZzXCJcblx0fCBcImJldmVsXCJcblx0fCBcIndpZHRoXCJcblx0fCBcInNlZ21lbnRzXCJcblx0fCBcInByb2ZpbGVTaGFwZVwiXG5cdHwgXCJrZWVwXCJcblx0fCBcIm1hdGVyaWFsXCIsXG5cdG51bWJlclxuPjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMC4xLCAwLjEsIDAuMSwgMV0sXG5cdFx0ZGVwdGg6IDEsXG5cdH0pO1xuXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS51dkdyaWQpO1xuXHRjb25zdCBtYXRlcmlhbHM6IFRnZE1hdGVyaWFsW10gPSBbXG5cdFx0bmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7IGNvbG9yOiB0ZXh0dXJlLCBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUgfSksXG5cdFx0bmV3IFRnZE1hdGVyaWFsTm9ybWFscygpLFxuXHRcdG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxuXHRdO1xuXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdH0pO1xuXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xuXHRjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDQsIDQpO1xuXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcblx0XHRpbmVydGlhT3JiaXQ6IDEwMDAsXG5cdFx0aW5lcnRpYVpvb206IDEwMDAsXG5cdH0pO1xuXHRyZXR1cm4gKHNldHRpbmdzOiBTZXR0aW5ncykgPT4ge1xuXHRcdHN0YXRlLnJlbW92ZUFsbCgpO1xuXHRcdHN0YXRlLmFkZChjcmVhdGVNZXNoKGNvbnRleHQsIG1hdGVyaWFsc1tzZXR0aW5ncy5tYXRlcmlhbF0sIHNldHRpbmdzKSk7XG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0Z2l6bW9cblx0XHRcdGFzc2V0cz17eyBpbWFnZTogeyB1dkdyaWQ6IFVWR3JpZDN4MlVSTCB9IH19XG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHRzaXplWDogeyBsYWJlbDogXCJzaXplWFwiLCB2YWx1ZTogMywgbWluOiAwLjEsIG1heDogNCB9LFxuXHRcdFx0XHRzaXplWTogeyBsYWJlbDogXCJzaXplWVwiLCB2YWx1ZTogMiwgbWluOiAwLjEsIG1heDogNCB9LFxuXHRcdFx0XHRzaXplWjogeyBsYWJlbDogXCJzaXplWlwiLCB2YWx1ZTogMSwgbWluOiAwLjEsIG1heDogNCB9LFxuXHRcdFx0XHRjZW50ZXJYOiB7IGxhYmVsOiBcImNlbnRlciBYXCIsIHZhbHVlOiAtMC41LCBtaW46IC0yLCBtYXg6IDIgfSxcblx0XHRcdFx0Y2VudGVyWTogeyBsYWJlbDogXCJjZW50ZXIgWVwiLCB2YWx1ZTogMCwgbWluOiAtMiwgbWF4OiAyIH0sXG5cdFx0XHRcdGNlbnRlclo6IHsgbGFiZWw6IFwiY2VudGVyIFpcIiwgdmFsdWU6IDAsIG1pbjogLTIsIG1heDogMiB9LFxuXHRcdFx0XHR1dnM6IHsgbGFiZWw6IFwidXZzXCIsIHZhbHVlOiAxLCBzdGVwOiBbXCJzYW1lT25FYWNoRmFjZVwiLCBcIjN4MlwiXSB9LFxuXHRcdFx0XHRiZXZlbDogeyBsYWJlbDogXCJiZXZlbFwiLCB2YWx1ZTogMSwgc3RlcDogW1wiT2ZmXCIsIFwiT25cIl0gfSxcblx0XHRcdFx0d2lkdGg6IHsgbGFiZWw6IFwiYmV2ZWwud2lkdGhcIiwgdmFsdWU6IDAuMywgbWluOiAwLCBtYXg6IDEgfSxcblx0XHRcdFx0c2VnbWVudHM6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJiZXZlbC5zZWdtZW50c1wiLFxuXHRcdFx0XHRcdHZhbHVlOiA0LFxuXHRcdFx0XHRcdG1pbjogMSxcblx0XHRcdFx0XHRtYXg6IDE2LFxuXHRcdFx0XHRcdHN0ZXA6IDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByb2ZpbGVTaGFwZToge1xuXHRcdFx0XHRcdGxhYmVsOiBcImJldmVsLnByb2ZpbGVTaGFwZVwiLFxuXHRcdFx0XHRcdHZhbHVlOiAwLjUsXG5cdFx0XHRcdFx0bWluOiAwLFxuXHRcdFx0XHRcdG1heDogMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0a2VlcDoge1xuXHRcdFx0XHRcdGxhYmVsOiBcImJldmVsLmtlZXBcIixcblx0XHRcdFx0XHR2YWx1ZTogMCxcblx0XHRcdFx0XHRzdGVwOiBbXCJib3RoXCIsIFwiYmV2ZWxcIiwgXCJmYWNlXCJdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtYXRlcmlhbDoge1xuXHRcdFx0XHRcdGxhYmVsOiBcIm1hdGVyaWFsXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHRcdFx0c3RlcDogW1wiRGlmZnVzZVwiLCBcIk5vcm1hbHNcIiwgXCJGYWNlIG9yaWVudGF0aW9uXCJdLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuXG4vLyAjYmVnaW4gY3JlYXRlTWVzaCgpXG5mdW5jdGlvbiBjcmVhdGVNZXNoKFxuXHRjb250ZXh0OiBUZ2RDb250ZXh0LFxuXHRtYXRlcmlhbDogVGdkTWF0ZXJpYWwsXG5cdHNldHRpbmdzOiBTZXR0aW5ncyxcbik6IFRnZFBhaW50ZXJNZXNoIHtcblx0Y29uc3QgZ2VvbWV0cnkgPSBuZXcgVGdkR2VvbWV0cnlCb3goe1xuXHRcdHNpemVYOiBzZXR0aW5ncy5zaXplWCxcblx0XHRzaXplWTogc2V0dGluZ3Muc2l6ZVksXG5cdFx0c2l6ZVo6IHNldHRpbmdzLnNpemVaLFxuXHRcdGNlbnRlcjogW3NldHRpbmdzLmNlbnRlclgsIHNldHRpbmdzLmNlbnRlclksIHNldHRpbmdzLmNlbnRlclpdLFxuXHRcdHV2czogVVZTW3NldHRpbmdzLnV2c10sXG5cdFx0YmV2ZWw6XG5cdFx0XHRzZXR0aW5ncy5iZXZlbCA9PT0gMVxuXHRcdFx0XHQ/IHtcblx0XHRcdFx0XHRcdHdpZHRoOiBzZXR0aW5ncy53aWR0aCxcblx0XHRcdFx0XHRcdHNlZ21lbnRzOiBzZXR0aW5ncy5zZWdtZW50cyxcblx0XHRcdFx0XHRcdHByb2ZpbGVTaGFwZTogc2V0dGluZ3MucHJvZmlsZVNoYXBlLFxuXHRcdFx0XHRcdFx0a2VlcDogS0VFUFtzZXR0aW5ncy5rZWVwXSxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDogdW5kZWZpbmVkLFxuXHR9KTtcblx0cmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7IGdlb21ldHJ5LCBtYXRlcmlhbCB9KTtcbn1cbi8vICNlbmRcbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkR2VvbWV0cnlCb3giLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbiIsIlRnZE1hdGVyaWFsTm9ybWFscyIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJVVkdyaWQzeDJVUkwiLCJVVlMiLCJLRUVQIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjbGVhciIsInRleHR1cmUiLCJtYXRlcmlhbHMiLCJzdGF0ZSIsInNldHRpbmdzIiwiY3JlYXRlTWVzaCIsIm1hdGVyaWFsIiwiZ2VvbWV0cnkiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1JLFFBQVE7SUFBQyxnQkFBZTtBQUE0cEI7QUFDMXJCLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7Ozs7Ozs7Ozs7Ozs7QUNWd0I7QUFFa0M7QUFDQztBQUUzRCxJQUFNbUIsTUFBMkM7SUFBQztJQUFrQjtDQUFNO0FBQzFFLElBQU1DLE9BQU87SUFBQztJQUFRO0lBQVM7Q0FBTztBQW1CdEMsU0FBU0MsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUNoRCxJQUFNQyxRQUFRLElBQUlaLCtDQUFlQSxDQUFDVSxTQUFTO1FBQzFDLE9BQU87WUFBQztZQUFLO1lBQUs7WUFBSztTQUFFO1FBQ3pCLE9BQU87SUFDUjtJQUNBLElBQU1HLFVBQVUsSUFBSVYsNENBQVlBLENBQUNPLFNBQVMsVUFBVSxDQUFDQyxPQUFPLEtBQUssQ0FBQyxNQUFNO0lBQ3hFLElBQU1HLFlBQTJCO1FBQ2hDLElBQUlqQixrREFBa0JBLENBQUM7WUFBRSxPQUFPZ0I7WUFBUyxvQkFBb0I7UUFBSztRQUNsRSxJQUFJZCxrREFBa0JBO1FBQ3RCLElBQUlELDBEQUEwQkE7S0FDOUI7SUFDRCxJQUFNaUIsUUFBUSxJQUFJYiwrQ0FBZUEsQ0FBQ1EsU0FBUztRQUMxQyxPQUFPTixxREFBcUI7SUFDN0I7SUFDQU0sUUFBUSxHQUFHLENBQUNFLE9BQU9HO0lBQ25CTCxRQUFRLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHO0lBQ25DLElBQUlmLHdEQUF3QkEsQ0FBQ2UsU0FBUztRQUNyQyxjQUFjO1FBQ2QsYUFBYTtJQUNkO0lBQ0EsT0FBTyxTQUFDTTtRQUNQRCxNQUFNLFNBQVM7UUFDZkEsTUFBTSxHQUFHLENBQUNFLFdBQVdQLFNBQVNJLFNBQVMsQ0FBQ0UsU0FBUyxRQUFRLENBQUMsRUFBRUE7UUFDNUROLFFBQVEsS0FBSztJQUNkO0FBQ0Q7QUFFZSxTQUFTdkI7SUFDdkIscUJBQ0Msa0RBQUNrQixnREFBSUE7UUFDSixTQUFTSTtRQUNULEtBQUs7UUFDTCxRQUFRO1lBQUUsT0FBTztnQkFBRSxRQUFRSCwrQ0FBWUE7WUFBQztRQUFFO1FBQzFDLFVBQVU7WUFDVCxPQUFPO2dCQUFFLE9BQU87Z0JBQVMsT0FBTztnQkFBRyxLQUFLO2dCQUFLLEtBQUs7WUFBRTtZQUNwRCxPQUFPO2dCQUFFLE9BQU87Z0JBQVMsT0FBTztnQkFBRyxLQUFLO2dCQUFLLEtBQUs7WUFBRTtZQUNwRCxPQUFPO2dCQUFFLE9BQU87Z0JBQVMsT0FBTztnQkFBRyxLQUFLO2dCQUFLLEtBQUs7WUFBRTtZQUNwRCxTQUFTO2dCQUFFLE9BQU87Z0JBQVksT0FBTyxDQUFDO2dCQUFLLEtBQUssQ0FBQztnQkFBRyxLQUFLO1lBQUU7WUFDM0QsU0FBUztnQkFBRSxPQUFPO2dCQUFZLE9BQU87Z0JBQUcsS0FBSyxDQUFDO2dCQUFHLEtBQUs7WUFBRTtZQUN4RCxTQUFTO2dCQUFFLE9BQU87Z0JBQVksT0FBTztnQkFBRyxLQUFLLENBQUM7Z0JBQUcsS0FBSztZQUFFO1lBQ3hELEtBQUs7Z0JBQUUsT0FBTztnQkFBTyxPQUFPO2dCQUFHLE1BQU07b0JBQUM7b0JBQWtCO2lCQUFNO1lBQUM7WUFDL0QsT0FBTztnQkFBRSxPQUFPO2dCQUFTLE9BQU87Z0JBQUcsTUFBTTtvQkFBQztvQkFBTztpQkFBSztZQUFDO1lBQ3ZELE9BQU87Z0JBQUUsT0FBTztnQkFBZSxPQUFPO2dCQUFLLEtBQUs7Z0JBQUcsS0FBSztZQUFFO1lBQzFELFVBQVU7Z0JBQ1QsT0FBTztnQkFDUCxPQUFPO2dCQUNQLEtBQUs7Z0JBQ0wsS0FBSztnQkFDTCxNQUFNO1lBQ1A7WUFDQSxjQUFjO2dCQUNiLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxLQUFLO2dCQUNMLEtBQUs7WUFDTjtZQUNBLE1BQU07Z0JBQ0wsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE1BQU07b0JBQUM7b0JBQVE7b0JBQVM7aUJBQU87WUFDaEM7WUFDQSxVQUFVO2dCQUNULE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxNQUFNO29CQUFDO29CQUFXO29CQUFXO2lCQUFtQjtZQUNqRDtRQUNEOzs7Ozs7QUFHSDtBQUVBLHNCQUFzQjtBQUN0QixTQUFTVyxXQUNSUCxPQUFtQixFQUNuQlEsUUFBcUIsRUFDckJGLFFBQWtCO0lBRWxCLElBQU1HLFdBQVcsSUFBSXZCLDhDQUFjQSxDQUFDO1FBQ25DLE9BQU9vQixTQUFTLEtBQUs7UUFDckIsT0FBT0EsU0FBUyxLQUFLO1FBQ3JCLE9BQU9BLFNBQVMsS0FBSztRQUNyQixRQUFRO1lBQUNBLFNBQVMsT0FBTztZQUFFQSxTQUFTLE9BQU87WUFBRUEsU0FBUyxPQUFPO1NBQUM7UUFDOUQsS0FBS1QsR0FBRyxDQUFDUyxTQUFTLEdBQUcsQ0FBQztRQUN0QixPQUNDQSxTQUFTLEtBQUssS0FBSyxJQUNoQjtZQUNBLE9BQU9BLFNBQVMsS0FBSztZQUNyQixVQUFVQSxTQUFTLFFBQVE7WUFDM0IsY0FBY0EsU0FBUyxZQUFZO1lBQ25DLE1BQU1SLElBQUksQ0FBQ1EsU0FBUyxJQUFJLENBQUM7UUFDMUIsSUFDQ0k7SUFDTDtJQUNBLE9BQU8sSUFBSW5CLDhDQUFjQSxDQUFDUyxTQUFTO1FBQUVTLFVBQUFBO1FBQVVELFVBQUFBO0lBQVM7QUFDekQsRUFDQSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUlIO29CQUFBO2tDQUFxQzs7Ozs7O29CQUFRO29CQUFBO2tDQUN6Qzs7Ozs7O29CQUFLO29CQUFBO2tDQUE0Qzs7Ozs7O29CQUFrQjtvQkFBQTtrQ0FDcEI7Ozs7OztvQkFBTztpQkFBQTs7Ozs7Ozs7MEJBRXZEOzs7Ozs7Ozs7b0JBRUg7b0JBQUE7a0NBQUk7Ozs7OztvQkFBTztpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQWVUOzs7Ozs7NEJBQU87eUJBQUE7Ozs7Ozs7Ozs7MENBQ1A7Ozs7Ozs0QkFBVTt5QkFBQTs7Ozs7Ozs7OzswQ0FDVjs7Ozs7OzRCQUFjOzRCQUFBOzBDQUFZOzs7Ozs7NEJBQUs7NEJBQUE7MENBQzdCOzs7Ozs7NEJBQU07NEJBQUE7MENBQTBCOzs7Ozs7NEJBQUs7NEJBQUE7MENBQW1COzs7Ozs7NEJBQUs7NEJBQUE7MENBQXdCOzs7Ozs7NEJBQUs7eUJBQUE7Ozs7Ozs7Ozs7MENBQzVGOzs7Ozs7NEJBQU07NEJBQUE7MENBQVk7Ozs7Ozs0QkFBUTs0QkFBQTswQ0FBRzs7Ozs7OzRCQUFTOzRCQUFBOzBDQUF1Qjs7Ozs7OzRCQUFRO3lCQUFBOzs7Ozs7Ozs7Ozs7Ozs7MEJBRXZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFlBQVksb0NBQW9DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseUJBQXlCO0FBQ3BDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4QkFBOEI7QUFDNUM7QUFDQSxjQUFjLDhEQUE4RDtBQUM1RTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7O0FBRXlCOztBQUV6QixXQUFXLHlCQUF5QjtBQUNwQzs7QUFFQSxtQkFBbUIsb0NBQW1COztBQUV0QztBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUE4RDtBQUN6RTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCw0QkFBNEIsaUNBQWdCOztBQUU1QztBQUNBLFNBQVMsOEJBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLGFBQWE7QUFDYjtBQUNBLGVBQWU7QUFDZjtBQUNPO0FBQ1AsYUFBYSx5QkFBeUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFNBQVMsb0NBQW1CO0FBQzVCO0FBQ0EsS0FBSyxxQkFBcUI7QUFDMUI7QUFDQTtBQUNBIn0=