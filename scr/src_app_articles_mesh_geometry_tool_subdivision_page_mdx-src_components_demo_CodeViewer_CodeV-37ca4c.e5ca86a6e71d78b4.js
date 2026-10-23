"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_geometry_tool_subdivision_page_mdx-src_components_demo_CodeViewer_CodeV-37ca4c"], {
57503(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid.0665e1a40d7dcc63.webp";

},
89799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(3385);
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
    "createMesh()": "function createMesh(\n\tcontext: TgdContext,\n\tmaterial: TgdMaterial,\n\tmode: TgdGeometrySubdivisionOptions[\"mode\"],\n\tlevels: number,\n): TgdPainterMesh {\n\tconst box = new TgdGeometryBox({\n\t\tcenter: [(levels - 1) * 1.5, 0, 0],\n\t}).computeTangents();\n\tconst geometry =\n\t\tlevels > 0 ? tgdGeometrySubdivision(box, { mode, levels }) : box;\n\treturn new TgdPainterMesh(context, { geometry, material });\n}",
    "createMaterialTangents()": "/**\n * Show the tangents (attribute CUSTOM_ATTRIBUTE_3) as colors.\n */\nfunction createMaterialTangents(): TgdMaterial {\n\treturn new TgdMaterial({\n\t\tvaryings: { varTangent: \"vec3\" },\n\t\tvertexShaderCode: [\"varTangent = CUSTOM_ATTRIBUTE_3.xyz;\"],\n\t\tfragmentShaderCode: [\n\t\t\t\"return vec4(0.5 * (vec3(1.0) + normalize(varTangent)), 1.0);\",\n\t\t],\n\t});\n}"
};
var FULL = "import {\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdGeometryBox,\n\ttype TgdGeometrySubdivisionOptions,\n\tTgdMaterial,\n\tTgdMaterialDiffuse,\n\tTgdMaterialNormals,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdGeometrySubdivision,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\n\nimport View, { type Assets } from \"@/components/demo/Tgd\";\nimport UVGridURL from \"@/assets/image/uv-grid.webp\";\n\nconst MODES: Array<TgdGeometrySubdivisionOptions[\"mode\"]> = [\n\t\"catmull-clark\",\n\t\"simple\",\n];\n\ntype Settings = Record<\"mode\" | \"material\", number>;\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.1, 0.1, 1],\n\t\tdepth: 1,\n\t});\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.uvGrid);\n\tconst materials: TgdMaterial[] = [\n\t\tnew TgdMaterialDiffuse({ color: texture, lockLightsToCamera: true }),\n\t\tnew TgdMaterialNormals(),\n\t\tcreateMaterialTangents(),\n\t];\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t});\n\tcontext.add(clear, state);\n\tcontext.camera.fitSpaceAtTarget(4, 2);\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t});\n\treturn (settings: Settings) => {\n\t\tstate.removeAll();\n\t\tconst material = materials[settings.material];\n\t\tfor (const levels of [0, 1, 2]) {\n\t\t\tstate.add(\n\t\t\t\tcreateMesh(context, material, MODES[settings.mode], levels),\n\t\t\t);\n\t\t}\n\t\tcontext.paint();\n\t};\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\tassets={{ image: { uvGrid: UVGridURL } }}\n\t\t\tsettings={{\n\t\t\t\tmode: {\n\t\t\t\t\tlabel: \"mode\",\n\t\t\t\t\tvalue: 0,\n\t\t\t\t\tstep: [\"catmull-clark\", \"simple\"],\n\t\t\t\t},\n\t\t\t\tmaterial: {\n\t\t\t\t\tlabel: \"material\",\n\t\t\t\t\tvalue: 0,\n\t\t\t\t\tstep: [\"Diffuse\", \"Normals\", \"Tangents\"],\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n\nfunction createMesh(\n\tcontext: TgdContext,\n\tmaterial: TgdMaterial,\n\tmode: TgdGeometrySubdivisionOptions[\"mode\"],\n\tlevels: number,\n): TgdPainterMesh {\n\tconst box = new TgdGeometryBox({\n\t\tcenter: [(levels - 1) * 1.5, 0, 0],\n\t}).computeTangents();\n\tconst geometry =\n\t\tlevels > 0 ? tgdGeometrySubdivision(box, { mode, levels }) : box;\n\treturn new TgdPainterMesh(context, { geometry, material });\n}\n\n/**\n * Show the tangents (attribute CUSTOM_ATTRIBUTE_3) as colors.\n */\nfunction createMaterialTangents(): TgdMaterial {\n\treturn new TgdMaterial({\n\t\tvaryings: { varTangent: \"vec3\" },\n\t\tvertexShaderCode: [\"varTangent = CUSTOM_ATTRIBUTE_3.xyz;\"],\n\t\tfragmentShaderCode: [\n\t\t\t\"return vec4(0.5 * (vec3(1.0) + normalize(varTangent)), 1.0);\",\n\t\t],\n\t});\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
3385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_image_uv_grid_webp__rspack_import_3 = __webpack_require__(57503);




var MODES = [
    "catmull-clark",
    "simple"
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
        createMaterialTangents()
    ];
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less
    });
    context.add(clear, state);
    context.camera.fitSpaceAtTarget(4, 2);
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        inertiaZoom: 1000
    });
    return function(settings) {
        state.removeAll();
        var material = materials[settings.material];
        for(var _i = 0, _iter = [
            0,
            1,
            2
        ]; _i < _iter.length; _i++){
            var levels = _iter[_i];
            state.add(createMesh(context, material, MODES[settings.mode], levels));
        }
        context.paint();
    };
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        gizmo: true,
        assets: {
            image: {
                uvGrid: _assets_image_uv_grid_webp__rspack_import_3
            }
        },
        settings: {
            mode: {
                label: "mode",
                value: 0,
                step: [
                    "catmull-clark",
                    "simple"
                ]
            },
            material: {
                label: "material",
                value: 0,
                step: [
                    "Diffuse",
                    "Normals",
                    "Tangents"
                ]
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/_/main.demo/main.demo.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, this);
}
// #begin createMesh()
function createMesh(context, material, mode, levels) {
    var box = new _tolokoban_tgd__rspack_import_1.TgdGeometryBox({
        center: [
            (levels - 1) * 1.5,
            0,
            0
        ]
    }).computeTangents();
    var geometry = levels > 0 ? (0,_tolokoban_tgd__rspack_import_1.tgdGeometrySubdivision)(box, {
        mode: mode,
        levels: levels
    }) : box;
    return new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: geometry,
        material: material
    });
}
// #end
// #begin createMaterialTangents()
/**
 * Show the tangents (attribute CUSTOM_ATTRIBUTE_3) as colors.
 */ function createMaterialTangents() {
    return new _tolokoban_tgd__rspack_import_1.TgdMaterial({
        varyings: {
            varTangent: "vec3"
        },
        vertexShaderCode: [
            "varTangent = CUSTOM_ATTRIBUTE_3.xyz;"
        ],
        fragmentShaderCode: [
            "return vec4(0.5 * (vec3(1.0) + normalize(varTangent)), 1.0);"
        ]
    });
} // #end


},
26388(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(89799);
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
                children: "tgdGeometrySubdivision"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Subdivide a geometry, like the Subdivision Surface modifier of Blender."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "From left to right: no subdivision, level 1 and level 2."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                lineNumber: 9,
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx"
                        }, this),
                        " geometry = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "tgdGeometrySubdivision"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdGeometryBox"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx"
                        }, this),
                        "(), {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "mode"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"catmull-clark\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// or \"simple\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx"
                        }, this),
                        "\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "levels"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "2"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx"
                        }, this),
                        ",\n})\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                    lineNumber: 11,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "mode"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                                lineNumber: 18,
                                columnNumber: 3
                            }, this),
                            " (default ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "\"catmull-clark\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                                lineNumber: 18,
                                columnNumber: 19
                            }, this),
                            "): ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"catmull-clark\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                                lineNumber: 18,
                                columnNumber: 41
                            }, this),
                            " smoothes the shape, ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"simple\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                                lineNumber: 18,
                                columnNumber: 79
                            }, this),
                            " only splits the faces."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                        lineNumber: 18,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "levels"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                                lineNumber: 19,
                                columnNumber: 3
                            }, this),
                            " (default ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "2"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                                lineNumber: 19,
                                columnNumber: 21
                            }, this),
                            "): each level multiplies the number of faces by 4."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                        lineNumber: 19,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "rebuildQuads"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                                lineNumber: 20,
                                columnNumber: 3
                            }, this),
                            " (default ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "true"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                                lineNumber: 20,
                                columnNumber: 27
                            }, this),
                            "): merge pairs of coplanar triangles into quads before subdividing,\nbecause Catmull-Clark gives much better results on quads."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                        lineNumber: 20,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                lineNumber: 18,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Vertices are welded by position, so the 6 faces of a box get connected.\nUVs are interpolated linearly in each face. Normals are recomputed (smooth) in ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "\"catmull-clark\""
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                        lineNumber: 24,
                        columnNumber: 80
                    }, this),
                    " mode.\nIf the geometry has tangents, they are recomputed on the result."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                lineNumber: 23,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Tangents"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                lineNumber: 27,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "geometry.computeTangents()"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                        lineNumber: 29,
                        columnNumber: 1
                    }, this),
                    " computes the vec4 tangents from the positions, normals and UVs,\nand stores them in the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "attTangent"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                        lineNumber: 30,
                        columnNumber: 24
                    }, this),
                    " attribute (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "CUSTOM_ATTRIBUTE_3"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                        lineNumber: 30,
                        columnNumber: 48
                    }, this),
                    " by default).\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "xyz"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                        lineNumber: 31,
                        columnNumber: 1
                    }, this),
                    " points towards increasing U and is orthogonal to the normal.\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "w"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                        lineNumber: 32,
                        columnNumber: 1
                    }, this),
                    " is the handedness of the TBN basis, as in glTF: ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "bitangent = cross(normal, tangent.xyz) * tangent.w"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                        lineNumber: 32,
                        columnNumber: 53
                    }, this),
                    ".\nSelect the \"Tangents\" material in the demo above to see them as colors."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
                lineNumber: 29,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/tool/subdivision/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9nZW9tZXRyeV90b29sX3N1YmRpdmlzaW9uX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVi0zN2NhNGMuZTVjYTg2YTZlNzFkNzhiNC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL2dlb21ldHJ5L3Rvb2wvc3ViZGl2aXNpb24vXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL2dlb21ldHJ5L3Rvb2wvc3ViZGl2aXNpb24vXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9nZW9tZXRyeS90b29sL3N1YmRpdmlzaW9uL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcImNyZWF0ZU1lc2goKVwiOlwiZnVuY3Rpb24gY3JlYXRlTWVzaChcXG5cXHRjb250ZXh0OiBUZ2RDb250ZXh0LFxcblxcdG1hdGVyaWFsOiBUZ2RNYXRlcmlhbCxcXG5cXHRtb2RlOiBUZ2RHZW9tZXRyeVN1YmRpdmlzaW9uT3B0aW9uc1tcXFwibW9kZVxcXCJdLFxcblxcdGxldmVsczogbnVtYmVyLFxcbik6IFRnZFBhaW50ZXJNZXNoIHtcXG5cXHRjb25zdCBib3ggPSBuZXcgVGdkR2VvbWV0cnlCb3goe1xcblxcdFxcdGNlbnRlcjogWyhsZXZlbHMgLSAxKSAqIDEuNSwgMCwgMF0sXFxuXFx0fSkuY29tcHV0ZVRhbmdlbnRzKCk7XFxuXFx0Y29uc3QgZ2VvbWV0cnkgPVxcblxcdFxcdGxldmVscyA+IDAgPyB0Z2RHZW9tZXRyeVN1YmRpdmlzaW9uKGJveCwgeyBtb2RlLCBsZXZlbHMgfSkgOiBib3g7XFxuXFx0cmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7IGdlb21ldHJ5LCBtYXRlcmlhbCB9KTtcXG59XCIsXCJjcmVhdGVNYXRlcmlhbFRhbmdlbnRzKClcIjpcIi8qKlxcbiAqIFNob3cgdGhlIHRhbmdlbnRzIChhdHRyaWJ1dGUgQ1VTVE9NX0FUVFJJQlVURV8zKSBhcyBjb2xvcnMuXFxuICovXFxuZnVuY3Rpb24gY3JlYXRlTWF0ZXJpYWxUYW5nZW50cygpOiBUZ2RNYXRlcmlhbCB7XFxuXFx0cmV0dXJuIG5ldyBUZ2RNYXRlcmlhbCh7XFxuXFx0XFx0dmFyeWluZ3M6IHsgdmFyVGFuZ2VudDogXFxcInZlYzNcXFwiIH0sXFxuXFx0XFx0dmVydGV4U2hhZGVyQ29kZTogW1xcXCJ2YXJUYW5nZW50ID0gQ1VTVE9NX0FUVFJJQlVURV8zLnh5ejtcXFwiXSxcXG5cXHRcXHRmcmFnbWVudFNoYWRlckNvZGU6IFtcXG5cXHRcXHRcXHRcXFwicmV0dXJuIHZlYzQoMC41ICogKHZlYzMoMS4wKSArIG5vcm1hbGl6ZSh2YXJUYW5nZW50KSksIDEuMCk7XFxcIixcXG5cXHRcXHRdLFxcblxcdH0pO1xcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHRUZ2RHZW9tZXRyeUJveCxcXG5cXHR0eXBlIFRnZEdlb21ldHJ5U3ViZGl2aXNpb25PcHRpb25zLFxcblxcdFRnZE1hdGVyaWFsLFxcblxcdFRnZE1hdGVyaWFsRGlmZnVzZSxcXG5cXHRUZ2RNYXRlcmlhbE5vcm1hbHMsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJNZXNoLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxuXFx0dGdkR2VvbWV0cnlTdWJkaXZpc2lvbixcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcblxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5pbXBvcnQgVVZHcmlkVVJMIGZyb20gXFxcIkAvYXNzZXRzL2ltYWdlL3V2LWdyaWQud2VicFxcXCI7XFxuXFxuY29uc3QgTU9ERVM6IEFycmF5PFRnZEdlb21ldHJ5U3ViZGl2aXNpb25PcHRpb25zW1xcXCJtb2RlXFxcIl0+ID0gW1xcblxcdFxcXCJjYXRtdWxsLWNsYXJrXFxcIixcXG5cXHRcXFwic2ltcGxlXFxcIixcXG5dO1xcblxcbnR5cGUgU2V0dGluZ3MgPSBSZWNvcmQ8XFxcIm1vZGVcXFwiIHwgXFxcIm1hdGVyaWFsXFxcIiwgbnVtYmVyPjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLnV2R3JpZCk7XFxuXFx0Y29uc3QgbWF0ZXJpYWxzOiBUZ2RNYXRlcmlhbFtdID0gW1xcblxcdFxcdG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2UoeyBjb2xvcjogdGV4dHVyZSwgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlIH0pLFxcblxcdFxcdG5ldyBUZ2RNYXRlcmlhbE5vcm1hbHMoKSxcXG5cXHRcXHRjcmVhdGVNYXRlcmlhbFRhbmdlbnRzKCksXFxuXFx0XTtcXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKTtcXG5cXHRjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDQsIDIpO1xcblxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcblxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRpbmVydGlhWm9vbTogMTAwMCxcXG5cXHR9KTtcXG5cXHRyZXR1cm4gKHNldHRpbmdzOiBTZXR0aW5ncykgPT4ge1xcblxcdFxcdHN0YXRlLnJlbW92ZUFsbCgpO1xcblxcdFxcdGNvbnN0IG1hdGVyaWFsID0gbWF0ZXJpYWxzW3NldHRpbmdzLm1hdGVyaWFsXTtcXG5cXHRcXHRmb3IgKGNvbnN0IGxldmVscyBvZiBbMCwgMSwgMl0pIHtcXG5cXHRcXHRcXHRzdGF0ZS5hZGQoXFxuXFx0XFx0XFx0XFx0Y3JlYXRlTWVzaChjb250ZXh0LCBtYXRlcmlhbCwgTU9ERVNbc2V0dGluZ3MubW9kZV0sIGxldmVscyksXFxuXFx0XFx0XFx0KTtcXG5cXHRcXHR9XFxuXFx0XFx0Y29udGV4dC5wYWludCgpO1xcblxcdH07XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0Z2l6bW9cXG5cXHRcXHRcXHRhc3NldHM9e3sgaW1hZ2U6IHsgdXZHcmlkOiBVVkdyaWRVUkwgfSB9fVxcblxcdFxcdFxcdHNldHRpbmdzPXt7XFxuXFx0XFx0XFx0XFx0bW9kZToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcXFwibW9kZVxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDAsXFxuXFx0XFx0XFx0XFx0XFx0c3RlcDogW1xcXCJjYXRtdWxsLWNsYXJrXFxcIiwgXFxcInNpbXBsZVxcXCJdLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0bWF0ZXJpYWw6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcIm1hdGVyaWFsXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMCxcXG5cXHRcXHRcXHRcXHRcXHRzdGVwOiBbXFxcIkRpZmZ1c2VcXFwiLCBcXFwiTm9ybWFsc1xcXCIsIFxcXCJUYW5nZW50c1xcXCJdLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHQvPlxcblxcdCk7XFxufVxcblxcbmZ1bmN0aW9uIGNyZWF0ZU1lc2goXFxuXFx0Y29udGV4dDogVGdkQ29udGV4dCxcXG5cXHRtYXRlcmlhbDogVGdkTWF0ZXJpYWwsXFxuXFx0bW9kZTogVGdkR2VvbWV0cnlTdWJkaXZpc2lvbk9wdGlvbnNbXFxcIm1vZGVcXFwiXSxcXG5cXHRsZXZlbHM6IG51bWJlcixcXG4pOiBUZ2RQYWludGVyTWVzaCB7XFxuXFx0Y29uc3QgYm94ID0gbmV3IFRnZEdlb21ldHJ5Qm94KHtcXG5cXHRcXHRjZW50ZXI6IFsobGV2ZWxzIC0gMSkgKiAxLjUsIDAsIDBdLFxcblxcdH0pLmNvbXB1dGVUYW5nZW50cygpO1xcblxcdGNvbnN0IGdlb21ldHJ5ID1cXG5cXHRcXHRsZXZlbHMgPiAwID8gdGdkR2VvbWV0cnlTdWJkaXZpc2lvbihib3gsIHsgbW9kZSwgbGV2ZWxzIH0pIDogYm94O1xcblxcdHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwgeyBnZW9tZXRyeSwgbWF0ZXJpYWwgfSk7XFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIHRhbmdlbnRzIChhdHRyaWJ1dGUgQ1VTVE9NX0FUVFJJQlVURV8zKSBhcyBjb2xvcnMuXFxuICovXFxuZnVuY3Rpb24gY3JlYXRlTWF0ZXJpYWxUYW5nZW50cygpOiBUZ2RNYXRlcmlhbCB7XFxuXFx0cmV0dXJuIG5ldyBUZ2RNYXRlcmlhbCh7XFxuXFx0XFx0dmFyeWluZ3M6IHsgdmFyVGFuZ2VudDogXFxcInZlYzNcXFwiIH0sXFxuXFx0XFx0dmVydGV4U2hhZGVyQ29kZTogW1xcXCJ2YXJUYW5nZW50ID0gQ1VTVE9NX0FUVFJJQlVURV8zLnh5ejtcXFwiXSxcXG5cXHRcXHRmcmFnbWVudFNoYWRlckNvZGU6IFtcXG5cXHRcXHRcXHRcXFwicmV0dXJuIHZlYzQoMC41ICogKHZlYzMoMS4wKSArIG5vcm1hbGl6ZSh2YXJUYW5nZW50KSksIDEuMCk7XFxcIixcXG5cXHRcXHRdLFxcblxcdH0pO1xcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdFRnZEdlb21ldHJ5Qm94LFxuXHR0eXBlIFRnZEdlb21ldHJ5U3ViZGl2aXNpb25PcHRpb25zLFxuXHRUZ2RNYXRlcmlhbCxcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHRUZ2RNYXRlcmlhbE5vcm1hbHMsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxuXHR0Z2RHZW9tZXRyeVN1YmRpdmlzaW9uLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQgVVZHcmlkVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLndlYnBcIjtcblxuY29uc3QgTU9ERVM6IEFycmF5PFRnZEdlb21ldHJ5U3ViZGl2aXNpb25PcHRpb25zW1wibW9kZVwiXT4gPSBbXG5cdFwiY2F0bXVsbC1jbGFya1wiLFxuXHRcInNpbXBsZVwiLFxuXTtcblxudHlwZSBTZXR0aW5ncyA9IFJlY29yZDxcIm1vZGVcIiB8IFwibWF0ZXJpYWxcIiwgbnVtYmVyPjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMC4xLCAwLjEsIDAuMSwgMV0sXG5cdFx0ZGVwdGg6IDEsXG5cdH0pO1xuXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS51dkdyaWQpO1xuXHRjb25zdCBtYXRlcmlhbHM6IFRnZE1hdGVyaWFsW10gPSBbXG5cdFx0bmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7IGNvbG9yOiB0ZXh0dXJlLCBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUgfSksXG5cdFx0bmV3IFRnZE1hdGVyaWFsTm9ybWFscygpLFxuXHRcdGNyZWF0ZU1hdGVyaWFsVGFuZ2VudHMoKSxcblx0XTtcblx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHR9KTtcblx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKTtcblx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg0LCAyKTtcblx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG5cdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdGluZXJ0aWFab29tOiAxMDAwLFxuXHR9KTtcblx0cmV0dXJuIChzZXR0aW5nczogU2V0dGluZ3MpID0+IHtcblx0XHRzdGF0ZS5yZW1vdmVBbGwoKTtcblx0XHRjb25zdCBtYXRlcmlhbCA9IG1hdGVyaWFsc1tzZXR0aW5ncy5tYXRlcmlhbF07XG5cdFx0Zm9yIChjb25zdCBsZXZlbHMgb2YgWzAsIDEsIDJdKSB7XG5cdFx0XHRzdGF0ZS5hZGQoXG5cdFx0XHRcdGNyZWF0ZU1lc2goY29udGV4dCwgbWF0ZXJpYWwsIE1PREVTW3NldHRpbmdzLm1vZGVdLCBsZXZlbHMpLFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0Z2l6bW9cblx0XHRcdGFzc2V0cz17eyBpbWFnZTogeyB1dkdyaWQ6IFVWR3JpZFVSTCB9IH19XG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHRtb2RlOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwibW9kZVwiLFxuXHRcdFx0XHRcdHZhbHVlOiAwLFxuXHRcdFx0XHRcdHN0ZXA6IFtcImNhdG11bGwtY2xhcmtcIiwgXCJzaW1wbGVcIl0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1hdGVyaWFsOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwibWF0ZXJpYWxcIixcblx0XHRcdFx0XHR2YWx1ZTogMCxcblx0XHRcdFx0XHRzdGVwOiBbXCJEaWZmdXNlXCIsIFwiTm9ybWFsc1wiLCBcIlRhbmdlbnRzXCJdLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuXG4vLyAjYmVnaW4gY3JlYXRlTWVzaCgpXG5mdW5jdGlvbiBjcmVhdGVNZXNoKFxuXHRjb250ZXh0OiBUZ2RDb250ZXh0LFxuXHRtYXRlcmlhbDogVGdkTWF0ZXJpYWwsXG5cdG1vZGU6IFRnZEdlb21ldHJ5U3ViZGl2aXNpb25PcHRpb25zW1wibW9kZVwiXSxcblx0bGV2ZWxzOiBudW1iZXIsXG4pOiBUZ2RQYWludGVyTWVzaCB7XG5cdGNvbnN0IGJveCA9IG5ldyBUZ2RHZW9tZXRyeUJveCh7XG5cdFx0Y2VudGVyOiBbKGxldmVscyAtIDEpICogMS41LCAwLCAwXSxcblx0fSkuY29tcHV0ZVRhbmdlbnRzKCk7XG5cdGNvbnN0IGdlb21ldHJ5ID1cblx0XHRsZXZlbHMgPiAwID8gdGdkR2VvbWV0cnlTdWJkaXZpc2lvbihib3gsIHsgbW9kZSwgbGV2ZWxzIH0pIDogYm94O1xuXHRyZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHsgZ2VvbWV0cnksIG1hdGVyaWFsIH0pO1xufVxuLy8gI2VuZFxuXG4vLyAjYmVnaW4gY3JlYXRlTWF0ZXJpYWxUYW5nZW50cygpXG4vKipcbiAqIFNob3cgdGhlIHRhbmdlbnRzIChhdHRyaWJ1dGUgQ1VTVE9NX0FUVFJJQlVURV8zKSBhcyBjb2xvcnMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU1hdGVyaWFsVGFuZ2VudHMoKTogVGdkTWF0ZXJpYWwge1xuXHRyZXR1cm4gbmV3IFRnZE1hdGVyaWFsKHtcblx0XHR2YXJ5aW5nczogeyB2YXJUYW5nZW50OiBcInZlYzNcIiB9LFxuXHRcdHZlcnRleFNoYWRlckNvZGU6IFtcInZhclRhbmdlbnQgPSBDVVNUT01fQVRUUklCVVRFXzMueHl6O1wiXSxcblx0XHRmcmFnbWVudFNoYWRlckNvZGU6IFtcblx0XHRcdFwicmV0dXJuIHZlYzQoMC41ICogKHZlYzMoMS4wKSArIG5vcm1hbGl6ZSh2YXJUYW5nZW50KSksIDEuMCk7XCIsXG5cdFx0XSxcblx0fSk7XG59XG4vLyAjZW5kXG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsIlRnZEdlb21ldHJ5Qm94IiwiVGdkTWF0ZXJpYWwiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RNYXRlcmlhbE5vcm1hbHMiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsInRnZEdlb21ldHJ5U3ViZGl2aXNpb24iLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIlVWR3JpZFVSTCIsIk1PREVTIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjbGVhciIsInRleHR1cmUiLCJtYXRlcmlhbHMiLCJjcmVhdGVNYXRlcmlhbFRhbmdlbnRzIiwic3RhdGUiLCJzZXR0aW5ncyIsIm1hdGVyaWFsIiwiX2l0ZXIiLCJsZXZlbHMiLCJjcmVhdGVNZXNoIiwibW9kZSIsImJveCIsImdlb21ldHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsZ0JBQWU7SUFBc2EsNEJBQTJCO0FBQTBYO0FBQ3oxQixJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSixzQ0FBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tD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