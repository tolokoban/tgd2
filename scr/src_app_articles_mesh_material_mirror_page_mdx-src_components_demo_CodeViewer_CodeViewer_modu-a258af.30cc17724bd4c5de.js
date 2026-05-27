"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_mirror_page_mdx-src_components_demo_CodeViewer_CodeViewer_modu-a258af"], {
78548(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negX.5e969cdd56fe60c8.webp";

},
63255(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negY.e41d4e67fbca3346.webp";

},
37782(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negZ.e631d3c4668c80c2.webp";

},
69776(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posX.8e22a07fffb759b5.webp";

},
95539(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posY.e93acb6847a80db5.webp";

},
61266(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posZ.b0ad3f58297deef6.webp";

},
59440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_cubemap_4096_graffiti_posX_webp__rspack_import_3 = __webpack_require__(69776);
/* import */ var _assets_cubemap_4096_graffiti_posY_webp__rspack_import_4 = __webpack_require__(95539);
/* import */ var _assets_cubemap_4096_graffiti_posZ_webp__rspack_import_5 = __webpack_require__(61266);
/* import */ var _assets_cubemap_4096_graffiti_negX_webp__rspack_import_6 = __webpack_require__(78548);
/* import */ var _assets_cubemap_4096_graffiti_negY_webp__rspack_import_7 = __webpack_require__(63255);
/* import */ var _assets_cubemap_4096_graffiti_negZ_webp__rspack_import_8 = __webpack_require__(37782);
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









function init(context) {
    // #begin Initializing WebGL
    context.camera.fitSpaceAtTarget(3, 3);
    var skybox = _tolokoban_tgd__rspack_import_1.TgdTextureCube.lazyLoad(context, {
        size: 4096,
        posX: _assets_cubemap_4096_graffiti_posX_webp__rspack_import_3,
        posY: _assets_cubemap_4096_graffiti_posY_webp__rspack_import_4,
        posZ: _assets_cubemap_4096_graffiti_posZ_webp__rspack_import_5,
        negX: _assets_cubemap_4096_graffiti_negX_webp__rspack_import_6,
        negY: _assets_cubemap_4096_graffiti_negY_webp__rspack_import_7,
        negZ: _assets_cubemap_4096_graffiti_negZ_webp__rspack_import_8
    });
    var node = new _tolokoban_tgd__rspack_import_1.TgdPainterNode();
    for(var _i = 0, _iter = [
        -0.5,
        +0.5
    ]; _i < _iter.length; _i++){
        var x = _iter[_i];
        for(var _i1 = 0, _iter1 = [
            -0.5,
            +0.5
        ]; _i1 < _iter1.length; _i1++){
            var y = _iter1[_i1];
            for(var _i2 = 0, _iter2 = [
                -0.5,
                +0.5
            ]; _i2 < _iter2.length; _i2++){
                var z = _iter2[_i2];
                var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialMirror({
                    roughness: (x + y + z + 1.5) % 2 === 0 ? 0 : 0.7,
                    skybox: skybox,
                    tint: z > 0 ? "#fff" : _to_consumable_array((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom3)()).concat([
                        1
                    ])
                });
                var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
                    material: material,
                    geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox({
                        center: [
                            x,
                            y,
                            z
                        ]
                    })
                });
                node.add(mesh);
            }
        }
    }
    // #end
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterSkybox(context, {
        camera: context.camera,
        texture: skybox
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: [
            node
        ]
    }), function(time) {
        context.camera.transfo.setEulerRotation(0, time * 5, 0);
        node.transfo.setEulerRotation(time * 3, 0, 0);
    });
    context.play();
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
            onReady: init,
            options: {
                alpha: false
            },
            gizmo: true,
            controller: {
                inertiaOrbit: 1000
            }
        }, void 0, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/_material.demo.tsx",
            lineNumber: 79,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/_material.demo.tsx",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}


},
73507(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _material_demo__rspack_import_4 = __webpack_require__(59440);
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
    "Initializing WebGL": "    context.camera.fitSpaceAtTarget(3, 3)\n    const skybox = TgdTextureCube.lazyLoad(context, {\n        size: 4096,\n        posX: PosX,\n        posY: PosY,\n        posZ: PosZ,\n        negX: NegX,\n        negY: NegY,\n        negZ: NegZ,\n    })\n    const node = new TgdPainterNode()\n    for (const x of [-0.5, +0.5]) {\n        for (const y of [-0.5, +0.5]) {\n            for (const z of [-0.5, +0.5]) {\n                const material = new TgdMaterialMirror({\n                    roughness: (x + y + z + 1.5) % 2 === 0 ? 0 : 0.7,\n                    skybox,\n                    tint: z > 0 ? \"#fff\" : ([...tgdCalcRandom3(), 1] as ArrayNumber4),\n                })\n                const mesh = new TgdPainterMesh(context, {\n                    material,\n                    geometry: new TgdGeometryBox({\n                        center: [x, y, z],\n                    }),\n                })\n                node.add(mesh)\n            }\n        }\n    }"
};
var FULL = "import {\n    TgdContext,\n    TgdPainterClear,\n    TgdPainterState,\n    TgdTextureCube,\n    TgdPainterSkybox,\n    TgdMaterialMirror,\n    TgdPainterMesh,\n    TgdPainterNode,\n    TgdGeometryBox,\n    tgdCalcRandom3,\n    ArrayNumber4,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport PosX from \"@/assets/cubemap/4096/graffiti/posX.webp\"\nimport PosY from \"@/assets/cubemap/4096/graffiti/posY.webp\"\nimport PosZ from \"@/assets/cubemap/4096/graffiti/posZ.webp\"\nimport NegX from \"@/assets/cubemap/4096/graffiti/negX.webp\"\nimport NegY from \"@/assets/cubemap/4096/graffiti/negY.webp\"\nimport NegZ from \"@/assets/cubemap/4096/graffiti/negZ.webp\"\n\nfunction init(context: TgdContext) {\n    context.camera.fitSpaceAtTarget(3, 3)\n    const skybox = TgdTextureCube.lazyLoad(context, {\n        size: 4096,\n        posX: PosX,\n        posY: PosY,\n        posZ: PosZ,\n        negX: NegX,\n        negY: NegY,\n        negZ: NegZ,\n    })\n    const node = new TgdPainterNode()\n    for (const x of [-0.5, +0.5]) {\n        for (const y of [-0.5, +0.5]) {\n            for (const z of [-0.5, +0.5]) {\n                const material = new TgdMaterialMirror({\n                    roughness: (x + y + z + 1.5) % 2 === 0 ? 0 : 0.7,\n                    skybox,\n                    tint: z > 0 ? \"#fff\" : ([...tgdCalcRandom3(), 1] as ArrayNumber4),\n                })\n                const mesh = new TgdPainterMesh(context, {\n                    material,\n                    geometry: new TgdGeometryBox({\n                        center: [x, y, z],\n                    }),\n                })\n                node.add(mesh)\n            }\n        }\n    }\n    context.add(\n        new TgdPainterSkybox(context, {\n            camera: context.camera,\n            texture: skybox,\n        }),\n        new TgdPainterClear(context, {\n            depth: 1,\n        }),\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [node],\n        }),\n        (time) => {\n            context.camera.transfo.setEulerRotation(0, time * 5, 0)\n            node.transfo.setEulerRotation(time * 3, 0, 0)\n        },\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <div>\n            <View\n                onReady={init}\n                options={{ alpha: false }}\n                gizmo\n                controller={{\n                    inertiaOrbit: 1000,\n                }}></View>\n        </div>\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
75308(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _material__rspack_import_1 = __webpack_require__(73507);
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
        hr: "hr",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Mirror material"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Reflects a skybox texture with tint and roughness."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
                    lineNumber: 11,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9taXJyb3JfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdS1hMjU4YWYuMzBjYzE3NzI0YmQ0YzVkZS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9taXJyb3IvX21hdGVyaWFsL19tYXRlcmlhbC5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvbWlycm9yL19tYXRlcmlhbC9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL21pcnJvci9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZUN1YmUsXG4gICAgVGdkUGFpbnRlclNreWJveCxcbiAgICBUZ2RNYXRlcmlhbE1pcnJvcixcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyTm9kZSxcbiAgICBUZ2RHZW9tZXRyeUJveCxcbiAgICB0Z2RDYWxjUmFuZG9tMyxcbiAgICBBcnJheU51bWJlcjQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IFBvc1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9wb3NYLndlYnBcIlxuaW1wb3J0IFBvc1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9wb3NZLndlYnBcIlxuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9wb3NaLndlYnBcIlxuaW1wb3J0IE5lZ1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9uZWdYLndlYnBcIlxuaW1wb3J0IE5lZ1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9uZWdZLndlYnBcIlxuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9uZWdaLndlYnBcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgzLCAzKVxuICAgIGNvbnN0IHNreWJveCA9IFRnZFRleHR1cmVDdWJlLmxhenlMb2FkKGNvbnRleHQsIHtcbiAgICAgICAgc2l6ZTogNDA5NixcbiAgICAgICAgcG9zWDogUG9zWCxcbiAgICAgICAgcG9zWTogUG9zWSxcbiAgICAgICAgcG9zWjogUG9zWixcbiAgICAgICAgbmVnWDogTmVnWCxcbiAgICAgICAgbmVnWTogTmVnWSxcbiAgICAgICAgbmVnWjogTmVnWixcbiAgICB9KVxuICAgIGNvbnN0IG5vZGUgPSBuZXcgVGdkUGFpbnRlck5vZGUoKVxuICAgIGZvciAoY29uc3QgeCBvZiBbLTAuNSwgKzAuNV0pIHtcbiAgICAgICAgZm9yIChjb25zdCB5IG9mIFstMC41LCArMC41XSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB6IG9mIFstMC41LCArMC41XSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsTWlycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgcm91Z2huZXNzOiAoeCArIHkgKyB6ICsgMS41KSAlIDIgPT09IDAgPyAwIDogMC43LFxuICAgICAgICAgICAgICAgICAgICBza3lib3gsXG4gICAgICAgICAgICAgICAgICAgIHRpbnQ6IHogPiAwID8gXCIjZmZmXCIgOiAoWy4uLnRnZENhbGNSYW5kb20zKCksIDFdIGFzIEFycmF5TnVtYmVyNCksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbeCwgeSwgel0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbm9kZS5hZGQobWVzaClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyAjZW5kXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcbiAgICAgICAgICAgIGNhbWVyYTogY29udGV4dC5jYW1lcmEsXG4gICAgICAgICAgICB0ZXh0dXJlOiBza3lib3gsXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgICAgICBjdWxsOiBcImJhY2tcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbm9kZV0sXG4gICAgICAgIH0pLFxuICAgICAgICAodGltZSkgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIHRpbWUgKiA1LCAwKVxuICAgICAgICAgICAgbm9kZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSAqIDMsIDAsIDApXG4gICAgICAgIH0sXG4gICAgKVxuICAgIGNvbnRleHQucGxheSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fVxuICAgICAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgfX0+PC9WaWV3PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vX21hdGVyaWFsLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMylcXG4gICAgY29uc3Qgc2t5Ym94ID0gVGdkVGV4dHVyZUN1YmUubGF6eUxvYWQoY29udGV4dCwge1xcbiAgICAgICAgc2l6ZTogNDA5NixcXG4gICAgICAgIHBvc1g6IFBvc1gsXFxuICAgICAgICBwb3NZOiBQb3NZLFxcbiAgICAgICAgcG9zWjogUG9zWixcXG4gICAgICAgIG5lZ1g6IE5lZ1gsXFxuICAgICAgICBuZWdZOiBOZWdZLFxcbiAgICAgICAgbmVnWjogTmVnWixcXG4gICAgfSlcXG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUZ2RQYWludGVyTm9kZSgpXFxuICAgIGZvciAoY29uc3QgeCBvZiBbLTAuNSwgKzAuNV0pIHtcXG4gICAgICAgIGZvciAoY29uc3QgeSBvZiBbLTAuNSwgKzAuNV0pIHtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHogb2YgWy0wLjUsICswLjVdKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsTWlycm9yKHtcXG4gICAgICAgICAgICAgICAgICAgIHJvdWdobmVzczogKHggKyB5ICsgeiArIDEuNSkgJSAyID09PSAwID8gMCA6IDAuNyxcXG4gICAgICAgICAgICAgICAgICAgIHNreWJveCxcXG4gICAgICAgICAgICAgICAgICAgIHRpbnQ6IHogPiAwID8gXFxcIiNmZmZcXFwiIDogKFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXSBhcyBBcnJheU51bWJlcjQpLFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbeCwgeSwgel0sXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgbm9kZS5hZGQobWVzaClcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcXG4gICAgVGdkUGFpbnRlclNreWJveCxcXG4gICAgVGdkTWF0ZXJpYWxNaXJyb3IsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyTm9kZSxcXG4gICAgVGdkR2VvbWV0cnlCb3gsXFxuICAgIHRnZENhbGNSYW5kb20zLFxcbiAgICBBcnJheU51bWJlcjQsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuaW1wb3J0IFBvc1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC80MDk2L2dyYWZmaXRpL3Bvc1gud2VicFxcXCJcXG5pbXBvcnQgUG9zWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzQwOTYvZ3JhZmZpdGkvcG9zWS53ZWJwXFxcIlxcbmltcG9ydCBQb3NaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9wb3NaLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC80MDk2L2dyYWZmaXRpL25lZ1gud2VicFxcXCJcXG5pbXBvcnQgTmVnWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzQwOTYvZ3JhZmZpdGkvbmVnWS53ZWJwXFxcIlxcbmltcG9ydCBOZWdaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9uZWdaLndlYnBcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMylcXG4gICAgY29uc3Qgc2t5Ym94ID0gVGdkVGV4dHVyZUN1YmUubGF6eUxvYWQoY29udGV4dCwge1xcbiAgICAgICAgc2l6ZTogNDA5NixcXG4gICAgICAgIHBvc1g6IFBvc1gsXFxuICAgICAgICBwb3NZOiBQb3NZLFxcbiAgICAgICAgcG9zWjogUG9zWixcXG4gICAgICAgIG5lZ1g6IE5lZ1gsXFxuICAgICAgICBuZWdZOiBOZWdZLFxcbiAgICAgICAgbmVnWjogTmVnWixcXG4gICAgfSlcXG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUZ2RQYWludGVyTm9kZSgpXFxuICAgIGZvciAoY29uc3QgeCBvZiBbLTAuNSwgKzAuNV0pIHtcXG4gICAgICAgIGZvciAoY29uc3QgeSBvZiBbLTAuNSwgKzAuNV0pIHtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHogb2YgWy0wLjUsICswLjVdKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsTWlycm9yKHtcXG4gICAgICAgICAgICAgICAgICAgIHJvdWdobmVzczogKHggKyB5ICsgeiArIDEuNSkgJSAyID09PSAwID8gMCA6IDAuNyxcXG4gICAgICAgICAgICAgICAgICAgIHNreWJveCxcXG4gICAgICAgICAgICAgICAgICAgIHRpbnQ6IHogPiAwID8gXFxcIiNmZmZcXFwiIDogKFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXSBhcyBBcnJheU51bWJlcjQpLFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbeCwgeSwgel0sXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgbm9kZS5hZGQobWVzaClcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XFxuICAgICAgICAgICAgY2FtZXJhOiBjb250ZXh0LmNhbWVyYSxcXG4gICAgICAgICAgICB0ZXh0dXJlOiBza3lib3gsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJiYWNrXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW25vZGVdLFxcbiAgICAgICAgfSksXFxuICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCB0aW1lICogNSwgMClcXG4gICAgICAgICAgICBub2RlLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lICogMywgMCwgMClcXG4gICAgICAgIH0sXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX1cXG4gICAgICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgICAgICB9fT48L1ZpZXc+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlQ3ViZSIsIlRnZFBhaW50ZXJTa3lib3giLCJUZ2RNYXRlcmlhbE1pcnJvciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlck5vZGUiLCJUZ2RHZW9tZXRyeUJveCIsInRnZENhbGNSYW5kb20zIiwiVmlldyIsIlBvc1giLCJQb3NZIiwiUG9zWiIsIk5lZ1giLCJOZWdZIiwiTmVnWiIsImluaXQiLCJjb250ZXh0Iiwic2t5Ym94Iiwibm9kZSIsIl9pdGVyIiwieCIsIl9pdGVyMSIsInkiLCJfaXRlcjIiLCJ6IiwibWF0ZXJpYWwiLCJtZXNoIiwidGltZSIsIkRlbW8iLCJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXVCO0FBQzZCO0FBRU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRTNELFNBQVNnQixLQUFLQyxPQUFtQjtJQUM3Qiw0QkFBNEI7SUFDNUJBLFFBQVEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUc7SUFDbkMs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