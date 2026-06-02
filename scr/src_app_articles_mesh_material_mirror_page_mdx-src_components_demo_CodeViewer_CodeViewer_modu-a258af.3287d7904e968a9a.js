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
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/_material.demo.tsx",
        lineNumber: 78,
        columnNumber: 3
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
    "Initializing WebGL": '    context.camera.fitSpaceAtTarget(3, 3)\n    const skybox = TgdTextureCube.lazyLoad(context, {\n        size: 4096,\n        posX: PosX,\n        posY: PosY,\n        posZ: PosZ,\n        negX: NegX,\n        negY: NegY,\n        negZ: NegZ,\n    })\n    const node = new TgdPainterNode()\n    for (const x of [-0.5, +0.5]) {\n        for (const y of [-0.5, +0.5]) {\n            for (const z of [-0.5, +0.5]) {\n                const material = new TgdMaterialMirror({\n                    roughness: (x + y + z + 1.5) % 2 === 0 ? 0 : 0.7,\n                    skybox,\n                    tint: z > 0 ? "#fff" : ([...tgdCalcRandom3(), 1] as ArrayNumber4),\n                })\n                const mesh = new TgdPainterMesh(context, {\n                    material,\n                    geometry: new TgdGeometryBox({\n                        center: [x, y, z],\n                    }),\n                })\n                node.add(mesh)\n            }\n        }\n    }'
};
var FULL = 'import {\n    type TgdContext,\n    TgdPainterClear,\n    TgdPainterState,\n    TgdTextureCube,\n    TgdPainterSkybox,\n    TgdMaterialMirror,\n    TgdPainterMesh,\n    TgdPainterNode,\n    TgdGeometryBox,\n    tgdCalcRandom3,\n    type ArrayNumber4,\n} from "@tolokoban/tgd"\nimport View, { Assets } from "@/components/demo/Tgd"\n\nimport PosX from "@/assets/cubemap/4096/graffiti/posX.webp"\nimport PosY from "@/assets/cubemap/4096/graffiti/posY.webp"\nimport PosZ from "@/assets/cubemap/4096/graffiti/posZ.webp"\nimport NegX from "@/assets/cubemap/4096/graffiti/negX.webp"\nimport NegY from "@/assets/cubemap/4096/graffiti/negY.webp"\nimport NegZ from "@/assets/cubemap/4096/graffiti/negZ.webp"\n\nfunction init(context: TgdContext) {\n    context.camera.fitSpaceAtTarget(3, 3)\n    const skybox = TgdTextureCube.lazyLoad(context, {\n        size: 4096,\n        posX: PosX,\n        posY: PosY,\n        posZ: PosZ,\n        negX: NegX,\n        negY: NegY,\n        negZ: NegZ,\n    })\n    const node = new TgdPainterNode()\n    for (const x of [-0.5, +0.5]) {\n        for (const y of [-0.5, +0.5]) {\n            for (const z of [-0.5, +0.5]) {\n                const material = new TgdMaterialMirror({\n                    roughness: (x + y + z + 1.5) % 2 === 0 ? 0 : 0.7,\n                    skybox,\n                    tint: z > 0 ? "#fff" : ([...tgdCalcRandom3(), 1] as ArrayNumber4),\n                })\n                const mesh = new TgdPainterMesh(context, {\n                    material,\n                    geometry: new TgdGeometryBox({\n                        center: [x, y, z],\n                    }),\n                })\n                node.add(mesh)\n            }\n        }\n    }\n    context.add(\n        new TgdPainterSkybox(context, {\n            camera: context.camera,\n            texture: skybox,\n        }),\n        new TgdPainterClear(context, {\n            depth: 1,\n        }),\n        new TgdPainterState(context, {\n            depth: "less",\n            cull: "back",\n            children: [node],\n        }),\n        (time) => {\n            context.camera.transfo.setEulerRotation(0, time * 5, 0)\n            node.transfo.setEulerRotation(time * 3, 0, 0)\n        },\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <div>\n            <View\n                onReady={init}\n                options={{ alpha: false }}\n                gizmo\n                controller={{\n                    inertiaOrbit: 1000,\n                }}></View>\n        </div>\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                lineNumber: 20,
                columnNumber: 4
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
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9taXJyb3JfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdS1hMjU4YWYuMzI4N2Q3OTA0ZTk2OGE5YS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9taXJyb3IvX21hdGVyaWFsL19tYXRlcmlhbC5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvbWlycm9yL19tYXRlcmlhbC9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL21pcnJvci9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZUN1YmUsXG5cdFRnZFBhaW50ZXJTa3lib3gsXG5cdFRnZE1hdGVyaWFsTWlycm9yLFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlck5vZGUsXG5cdFRnZEdlb21ldHJ5Qm94LFxuXHR0Z2RDYWxjUmFuZG9tMyxcblx0dHlwZSBBcnJheU51bWJlcjQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG5pbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC80MDk2L2dyYWZmaXRpL3Bvc1gud2VicFwiO1xuaW1wb3J0IFBvc1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9wb3NZLndlYnBcIjtcbmltcG9ydCBQb3NaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzQwOTYvZ3JhZmZpdGkvcG9zWi53ZWJwXCI7XG5pbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC80MDk2L2dyYWZmaXRpL25lZ1gud2VicFwiO1xuaW1wb3J0IE5lZ1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9uZWdZLndlYnBcIjtcbmltcG9ydCBOZWdaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzQwOTYvZ3JhZmZpdGkvbmVnWi53ZWJwXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuXHQvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG5cdGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMyk7XG5cdGNvbnN0IHNreWJveCA9IFRnZFRleHR1cmVDdWJlLmxhenlMb2FkKGNvbnRleHQsIHtcblx0XHRzaXplOiA0MDk2LFxuXHRcdHBvc1g6IFBvc1gsXG5cdFx0cG9zWTogUG9zWSxcblx0XHRwb3NaOiBQb3NaLFxuXHRcdG5lZ1g6IE5lZ1gsXG5cdFx0bmVnWTogTmVnWSxcblx0XHRuZWdaOiBOZWdaLFxuXHR9KTtcblx0Y29uc3Qgbm9kZSA9IG5ldyBUZ2RQYWludGVyTm9kZSgpO1xuXHRmb3IgKGNvbnN0IHggb2YgWy0wLjUsICswLjVdKSB7XG5cdFx0Zm9yIChjb25zdCB5IG9mIFstMC41LCArMC41XSkge1xuXHRcdFx0Zm9yIChjb25zdCB6IG9mIFstMC41LCArMC41XSkge1xuXHRcdFx0XHRjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbE1pcnJvcih7XG5cdFx0XHRcdFx0cm91Z2huZXNzOiAoeCArIHkgKyB6ICsgMS41KSAlIDIgPT09IDAgPyAwIDogMC43LFxuXHRcdFx0XHRcdHNreWJveCxcblx0XHRcdFx0XHR0aW50OiB6ID4gMCA/IFwiI2ZmZlwiIDogKFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXSBhcyBBcnJheU51bWJlcjQpLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG5cdFx0XHRcdFx0bWF0ZXJpYWwsXG5cdFx0XHRcdFx0Z2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7XG5cdFx0XHRcdFx0XHRjZW50ZXI6IFt4LCB5LCB6XSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdG5vZGUuYWRkKG1lc2gpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyAjZW5kXG5cdGNvbnRleHQuYWRkKFxuXHRcdG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcblx0XHRcdGNhbWVyYTogY29udGV4dC5jYW1lcmEsXG5cdFx0XHR0ZXh0dXJlOiBza3lib3gsXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogMSxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiBcImxlc3NcIixcblx0XHRcdGN1bGw6IFwiYmFja1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtub2RlXSxcblx0XHR9KSxcblx0XHQodGltZSkgPT4ge1xuXHRcdFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIHRpbWUgKiA1LCAwKTtcblx0XHRcdG5vZGUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUgKiAzLCAwLCAwKTtcblx0XHR9LFxuXHQpO1xuXHRjb250ZXh0LnBsYXkoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PFZpZXdcblx0XHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdFx0b3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX1cblx0XHRcdFx0Z2l6bW9cblx0XHRcdFx0Y29udHJvbGxlcj17e1xuXHRcdFx0XHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRcdFx0fX1cblx0XHRcdD48L1ZpZXc+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vX21hdGVyaWFsLmRlbW9cIjtcblxuY29uc3QgRk9DVVMgPSB7XG5cdFwiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XG5cdFx0JyAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDMpXFxuICAgIGNvbnN0IHNreWJveCA9IFRnZFRleHR1cmVDdWJlLmxhenlMb2FkKGNvbnRleHQsIHtcXG4gICAgICAgIHNpemU6IDQwOTYsXFxuICAgICAgICBwb3NYOiBQb3NYLFxcbiAgICAgICAgcG9zWTogUG9zWSxcXG4gICAgICAgIHBvc1o6IFBvc1osXFxuICAgICAgICBuZWdYOiBOZWdYLFxcbiAgICAgICAgbmVnWTogTmVnWSxcXG4gICAgICAgIG5lZ1o6IE5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IG5vZGUgPSBuZXcgVGdkUGFpbnRlck5vZGUoKVxcbiAgICBmb3IgKGNvbnN0IHggb2YgWy0wLjUsICswLjVdKSB7XFxuICAgICAgICBmb3IgKGNvbnN0IHkgb2YgWy0wLjUsICswLjVdKSB7XFxuICAgICAgICAgICAgZm9yIChjb25zdCB6IG9mIFstMC41LCArMC41XSkge1xcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbE1pcnJvcih7XFxuICAgICAgICAgICAgICAgICAgICByb3VnaG5lc3M6ICh4ICsgeSArIHogKyAxLjUpICUgMiA9PT0gMCA/IDAgOiAwLjcsXFxuICAgICAgICAgICAgICAgICAgICBza3lib3gsXFxuICAgICAgICAgICAgICAgICAgICB0aW50OiB6ID4gMCA/IFwiI2ZmZlwiIDogKFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXSBhcyBBcnJheU51bWJlcjQpLFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbeCwgeSwgel0sXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgbm9kZS5hZGQobWVzaClcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH0nLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IHtcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZUN1YmUsXFxuICAgIFRnZFBhaW50ZXJTa3lib3gsXFxuICAgIFRnZE1hdGVyaWFsTWlycm9yLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlck5vZGUsXFxuICAgIFRnZEdlb21ldHJ5Qm94LFxcbiAgICB0Z2RDYWxjUmFuZG9tMyxcXG4gICAgdHlwZSBBcnJheU51bWJlcjQsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcblxcbmltcG9ydCBQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzQwOTYvZ3JhZmZpdGkvcG9zWC53ZWJwXCJcXG5pbXBvcnQgUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC80MDk2L2dyYWZmaXRpL3Bvc1kud2VicFwiXFxuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9wb3NaLndlYnBcIlxcbmltcG9ydCBOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzQwOTYvZ3JhZmZpdGkvbmVnWC53ZWJwXCJcXG5pbXBvcnQgTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC80MDk2L2dyYWZmaXRpL25lZ1kud2VicFwiXFxuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9uZWdaLndlYnBcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDMpXFxuICAgIGNvbnN0IHNreWJveCA9IFRnZFRleHR1cmVDdWJlLmxhenlMb2FkKGNvbnRleHQsIHtcXG4gICAgICAgIHNpemU6IDQwOTYsXFxuICAgICAgICBwb3NYOiBQb3NYLFxcbiAgICAgICAgcG9zWTogUG9zWSxcXG4gICAgICAgIHBvc1o6IFBvc1osXFxuICAgICAgICBuZWdYOiBOZWdYLFxcbiAgICAgICAgbmVnWTogTmVnWSxcXG4gICAgICAgIG5lZ1o6IE5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IG5vZGUgPSBuZXcgVGdkUGFpbnRlck5vZGUoKVxcbiAgICBmb3IgKGNvbnN0IHggb2YgWy0wLjUsICswLjVdKSB7XFxuICAgICAgICBmb3IgKGNvbnN0IHkgb2YgWy0wLjUsICswLjVdKSB7XFxuICAgICAgICAgICAgZm9yIChjb25zdCB6IG9mIFstMC41LCArMC41XSkge1xcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbE1pcnJvcih7XFxuICAgICAgICAgICAgICAgICAgICByb3VnaG5lc3M6ICh4ICsgeSArIHogKyAxLjUpICUgMiA9PT0gMCA/IDAgOiAwLjcsXFxuICAgICAgICAgICAgICAgICAgICBza3lib3gsXFxuICAgICAgICAgICAgICAgICAgICB0aW50OiB6ID4gMCA/IFwiI2ZmZlwiIDogKFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXSBhcyBBcnJheU51bWJlcjQpLFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbeCwgeSwgel0sXFxuICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgbm9kZS5hZGQobWVzaClcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XFxuICAgICAgICAgICAgY2FtZXJhOiBjb250ZXh0LmNhbWVyYSxcXG4gICAgICAgICAgICB0ZXh0dXJlOiBza3lib3gsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzXCIsXFxuICAgICAgICAgICAgY3VsbDogXCJiYWNrXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtub2RlXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgdGltZSAqIDUsIDApXFxuICAgICAgICAgICAgbm9kZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSAqIDMsIDAsIDApXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3sgYWxwaGE6IGZhbHNlIH19XFxuICAgICAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICAgICAgfX0+PC9WaWV3PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIClcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmVDdWJlIiwiVGdkUGFpbnRlclNreWJveCIsIlRnZE1hdGVyaWFsTWlycm9yIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyTm9kZSIsIlRnZEdlb21ldHJ5Qm94IiwidGdkQ2FsY1JhbmRvbTMiLCJWaWV3IiwiUG9zWCIsIlBvc1kiLCJQb3NaIiwiTmVnWCIsIk5lZ1kiLCJOZWdaIiwiaW5pdCIsImNvbnRleHQiLCJza3lib3giLCJub2RlIiwiX2l0ZXIiLCJ4IiwiX2l0ZXIxIiwieSIsIl9pdGVyMiIsInoiLCJtYXRlcmlhbCIsIm1lc2giLCJ0aW1lIiwiRGVtbyIsIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZd0I7QUFDNkI7QUFFTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFNUQsU0FBU2dCLEtBQUtDLE9BQW1CO0lBQ2hDLDRCQUE0QjtJQUM1QkEsUUFBUSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRztJQUNuQyxJQUFNQyxTQUFTaEIsdURBQXVCLENBQUNlLFNBQVM7UUFDL0MsTUFBTTtRQUNOLE1BQU1QLHdEQUFJQTtRQUNWLE1BQU1DLHdEQUFJQTtRQUNWLE1BQU1DLHdEQUFJQTtRQUNWLE1BQU1DLHdEQUFJQTtRQUNWLE1BQU1DLHdEQUFJQTtRQUNWLE1BQU1DLHdEQUFJQTtJQUNYO0lBQ0EsSUFBTUksT0FBTyxJQUFJYiw4Q0FBY0E7SUFDL0IsZ0JBQWdCYyxRQUFBQTtRQUFDLENBQUM7UUFBSyxDQUFDO0tBQUksT0FBWkEsbUJBQWM7WUFBbkJDLElBQUtEO1FBQ2YsaUJBQWdCRSxTQUFBQTtZQUFDLENBQUM7WUFBSyxDQUFDO1NBQUksUUFBWkEscUJBQWM7Z0JBQW5CQyxJQUFLRDtZQUNmLGlCQUFnQkUsU0FBQUE7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