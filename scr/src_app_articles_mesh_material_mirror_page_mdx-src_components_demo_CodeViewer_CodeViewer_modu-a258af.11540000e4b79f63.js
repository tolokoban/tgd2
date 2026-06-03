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
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/_material.demo.tsx",
            lineNumber: 79,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/_material.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/_material/index.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Reflects a skybox texture with tint and roughness."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
                    lineNumber: 11,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/mirror/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9taXJyb3JfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdS1hMjU4YWYuMTE1NDAwMDBlNGI3OWY2My5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL21pcnJvci9fbWF0ZXJpYWwvX21hdGVyaWFsLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL21pcnJvci9fbWF0ZXJpYWwvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL21pcnJvci9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlQ3ViZSxcblx0VGdkUGFpbnRlclNreWJveCxcblx0VGdkTWF0ZXJpYWxNaXJyb3IsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyTm9kZSxcblx0VGdkR2VvbWV0cnlCb3gsXG5cdHRnZENhbGNSYW5kb20zLFxuXHR0eXBlIEFycmF5TnVtYmVyNCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmltcG9ydCBQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzQwOTYvZ3JhZmZpdGkvcG9zWC53ZWJwXCI7XG5pbXBvcnQgUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC80MDk2L2dyYWZmaXRpL3Bvc1kud2VicFwiO1xuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9wb3NaLndlYnBcIjtcbmltcG9ydCBOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzQwOTYvZ3JhZmZpdGkvbmVnWC53ZWJwXCI7XG5pbXBvcnQgTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC80MDk2L2dyYWZmaXRpL25lZ1kud2VicFwiO1xuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9uZWdaLndlYnBcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG5cdC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcblx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgzLCAzKTtcblx0Y29uc3Qgc2t5Ym94ID0gVGdkVGV4dHVyZUN1YmUubGF6eUxvYWQoY29udGV4dCwge1xuXHRcdHNpemU6IDQwOTYsXG5cdFx0cG9zWDogUG9zWCxcblx0XHRwb3NZOiBQb3NZLFxuXHRcdHBvc1o6IFBvc1osXG5cdFx0bmVnWDogTmVnWCxcblx0XHRuZWdZOiBOZWdZLFxuXHRcdG5lZ1o6IE5lZ1osXG5cdH0pO1xuXHRjb25zdCBub2RlID0gbmV3IFRnZFBhaW50ZXJOb2RlKCk7XG5cdGZvciAoY29uc3QgeCBvZiBbLTAuNSwgKzAuNV0pIHtcblx0XHRmb3IgKGNvbnN0IHkgb2YgWy0wLjUsICswLjVdKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHogb2YgWy0wLjUsICswLjVdKSB7XG5cdFx0XHRcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsTWlycm9yKHtcblx0XHRcdFx0XHRyb3VnaG5lc3M6ICh4ICsgeSArIHogKyAxLjUpICUgMiA9PT0gMCA/IDAgOiAwLjcsXG5cdFx0XHRcdFx0c2t5Ym94LFxuXHRcdFx0XHRcdHRpbnQ6IHogPiAwID8gXCIjZmZmXCIgOiAoWy4uLnRnZENhbGNSYW5kb20zKCksIDFdIGFzIEFycmF5TnVtYmVyNCksXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcblx0XHRcdFx0XHRtYXRlcmlhbCxcblx0XHRcdFx0XHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHtcblx0XHRcdFx0XHRcdGNlbnRlcjogW3gsIHksIHpdLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bm9kZS5hZGQobWVzaCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vICNlbmRcblx0Y29udGV4dC5hZGQoXG5cdFx0bmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xuXHRcdFx0Y2FtZXJhOiBjb250ZXh0LmNhbWVyYSxcblx0XHRcdHRleHR1cmU6IHNreWJveCxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiAxLFxuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IFwibGVzc1wiLFxuXHRcdFx0Y3VsbDogXCJiYWNrXCIsXG5cdFx0XHRjaGlsZHJlbjogW25vZGVdLFxuXHRcdH0pLFxuXHRcdCh0aW1lKSA9PiB7XG5cdFx0XHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgdGltZSAqIDUsIDApO1xuXHRcdFx0bm9kZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSAqIDMsIDAsIDApO1xuXHRcdH0sXG5cdCk7XG5cdGNvbnRleHQucGxheSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8Vmlld1xuXHRcdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0XHRvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fVxuXHRcdFx0XHRnaXptb1xuXHRcdFx0XHRjb250cm9sbGVyPXt7XG5cdFx0XHRcdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdFx0XHR9fVxuXHRcdFx0PjwvVmlldz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9fbWF0ZXJpYWwuZGVtb1wiO1xuXG5jb25zdCBGT0NVUyA9IHtcblx0XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcblx0XHQnICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMylcXG4gICAgY29uc3Qgc2t5Ym94ID0gVGdkVGV4dHVyZUN1YmUubGF6eUxvYWQoY29udGV4dCwge1xcbiAgICAgICAgc2l6ZTogNDA5NixcXG4gICAgICAgIHBvc1g6IFBvc1gsXFxuICAgICAgICBwb3NZOiBQb3NZLFxcbiAgICAgICAgcG9zWjogUG9zWixcXG4gICAgICAgIG5lZ1g6IE5lZ1gsXFxuICAgICAgICBuZWdZOiBOZWdZLFxcbiAgICAgICAgbmVnWjogTmVnWixcXG4gICAgfSlcXG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUZ2RQYWludGVyTm9kZSgpXFxuICAgIGZvciAoY29uc3QgeCBvZiBbLTAuNSwgKzAuNV0pIHtcXG4gICAgICAgIGZvciAoY29uc3QgeSBvZiBbLTAuNSwgKzAuNV0pIHtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHogb2YgWy0wLjUsICswLjVdKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsTWlycm9yKHtcXG4gICAgICAgICAgICAgICAgICAgIHJvdWdobmVzczogKHggKyB5ICsgeiArIDEuNSkgJSAyID09PSAwID8gMCA6IDAuNyxcXG4gICAgICAgICAgICAgICAgICAgIHNreWJveCxcXG4gICAgICAgICAgICAgICAgICAgIHRpbnQ6IHogPiAwID8gXCIjZmZmXCIgOiAoWy4uLnRnZENhbGNSYW5kb20zKCksIDFdIGFzIEFycmF5TnVtYmVyNCksXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwsXFxuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFt4LCB5LCB6XSxcXG4gICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICBub2RlLmFkZChtZXNoKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfScsXG59O1xuY29uc3QgRlVMTCA9XG5cdCdpbXBvcnQge1xcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcXG4gICAgVGdkUGFpbnRlclNreWJveCxcXG4gICAgVGdkTWF0ZXJpYWxNaXJyb3IsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyTm9kZSxcXG4gICAgVGdkR2VvbWV0cnlCb3gsXFxuICAgIHRnZENhbGNSYW5kb20zLFxcbiAgICB0eXBlIEFycmF5TnVtYmVyNCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXFxuXFxuaW1wb3J0IFBvc1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9wb3NYLndlYnBcIlxcbmltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzQwOTYvZ3JhZmZpdGkvcG9zWS53ZWJwXCJcXG5pbXBvcnQgUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC80MDk2L2dyYWZmaXRpL3Bvc1oud2VicFwiXFxuaW1wb3J0IE5lZ1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvNDA5Ni9ncmFmZml0aS9uZWdYLndlYnBcIlxcbmltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzQwOTYvZ3JhZmZpdGkvbmVnWS53ZWJwXCJcXG5pbXBvcnQgTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC80MDk2L2dyYWZmaXRpL25lZ1oud2VicFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMylcXG4gICAgY29uc3Qgc2t5Ym94ID0gVGdkVGV4dHVyZUN1YmUubGF6eUxvYWQoY29udGV4dCwge1xcbiAgICAgICAgc2l6ZTogNDA5NixcXG4gICAgICAgIHBvc1g6IFBvc1gsXFxuICAgICAgICBwb3NZOiBQb3NZLFxcbiAgICAgICAgcG9zWjogUG9zWixcXG4gICAgICAgIG5lZ1g6IE5lZ1gsXFxuICAgICAgICBuZWdZOiBOZWdZLFxcbiAgICAgICAgbmVnWjogTmVnWixcXG4gICAgfSlcXG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUZ2RQYWludGVyTm9kZSgpXFxuICAgIGZvciAoY29uc3QgeCBvZiBbLTAuNSwgKzAuNV0pIHtcXG4gICAgICAgIGZvciAoY29uc3QgeSBvZiBbLTAuNSwgKzAuNV0pIHtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHogb2YgWy0wLjUsICswLjVdKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsTWlycm9yKHtcXG4gICAgICAgICAgICAgICAgICAgIHJvdWdobmVzczogKHggKyB5ICsgeiArIDEuNSkgJSAyID09PSAwID8gMCA6IDAuNyxcXG4gICAgICAgICAgICAgICAgICAgIHNreWJveCxcXG4gICAgICAgICAgICAgICAgICAgIHRpbnQ6IHogPiAwID8gXCIjZmZmXCIgOiAoWy4uLnRnZENhbGNSYW5kb20zKCksIDFdIGFzIEFycmF5TnVtYmVyNCksXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwsXFxuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFt4LCB5LCB6XSxcXG4gICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICBub2RlLmFkZChtZXNoKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcXG4gICAgICAgICAgICBjYW1lcmE6IGNvbnRleHQuY2FtZXJhLFxcbiAgICAgICAgICAgIHRleHR1cmU6IHNreWJveCxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcXG4gICAgICAgICAgICBjdWxsOiBcImJhY2tcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW25vZGVdLFxcbiAgICAgICAgfSksXFxuICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCB0aW1lICogNSwgMClcXG4gICAgICAgICAgICBub2RlLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lICogMywgMCwgMClcXG4gICAgICAgIH0sXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX1cXG4gICAgICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgICAgICB9fT48L1ZpZXc+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgKVxcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZUN1YmUiLCJUZ2RQYWludGVyU2t5Ym94IiwiVGdkTWF0ZXJpYWxNaXJyb3IiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJOb2RlIiwiVGdkR2VvbWV0cnlCb3giLCJ0Z2RDYWxjUmFuZG9tMyIsIlZpZXciLCJQb3NYIiwiUG9zWSIsIlBvc1oiLCJOZWdYIiwiTmVnWSIsIk5lZ1oiLCJpbml0IiwiY29udGV4dCIsInNreWJveCIsIm5vZGUiLCJfaXRlciIsIngiLCJfaXRlcjEiLCJ5IiwiX2l0ZXIyIiwieiIsIm1hdGVyaWFsIiwibWVzaCIsInRpbWUiLCJEZW1vIiwiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVl3QjtBQUM2QjtBQUVPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUU1RCxTQUFTZ0IsS0FBS0MsT0FBbUI7SUFDaEMsNEJBQTRCO0lBQzVCQSxRQUFRLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHO0lBQ25DLElBQU1DLFNBQVNoQix1REFBdUIsQ0FBQ2UsU0FBUztRQUMvQyxNQUFNO1FBQ04sTUFBTVAsd0RBQUlBO1FBQ1YsTUFBTUMsd0RBQUlBO1FBQ1YsTUFBTUMsd0RBQUlBO1FBQ1YsTUFBTUMsd0RBQUlBO1FBQ1YsTUFBTUMsd0RBQUlBO1FBQ1YsTUFBTUMsd0RBQUlBO0lBQ1g7SUFDQSxJQUFNSSxPQUFPLElBQUliLDhDQUFjQTtJQUMvQixnQkFBZ0JjLFFBQUFBO1FBQUMsQ0FBQztRQUFLLENBQUM7S0FBSSxPQUFaQSxtQkFBYztZQUFuQkMsSUFBS0Q7UUFDZixpQkFBZ0JFLFNBQUFBO1lBQUMsQ0FBQztZQUFLLENBQUM7U0FBSSxRQUFaQSxxQkFBYztnQkFBbkJDLElBQUtEO1lBQ2YsaUJBQWdCRSxTQUFBQTtnQkFB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