"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_meshes_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-846efc"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
26761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _meshes_demo__rspack_import_4 = __webpack_require__(31763);
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
    "Initializing WebGL": "    // The moon's transfo is relative to the box's one.\n    // It has no material, so it uses the box's one.\n    const moon: TgdMesh = {\n        geometry: new TgdGeometrySphereIco(),\n        transfo: new TgdTransfo({ position: [0, 0, 1] }),\n        visible: true,\n    }\n    const box: TgdMesh = {\n        geometry: new TgdGeometryBox(),\n        material: new TgdMaterialNormals(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),\n        visible: true,\n        children: [moon],\n    }\n    const suzanne: TgdMesh = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        material: new TgdMaterialFlatTexture({\n            texture: assets.glb.suzanne.createTexture2D(context, 0),\n        }),\n        transfo: new TgdTransfo(),\n        visible: true,\n    }\n    context.add(\n        new TgdPainterClear(context, { color: [0.2, 0.2, 0.2, 1], depth: 1 }),\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [new TgdPainterMeshes(context, { meshes: [box, suzanne] })],\n        }),\n        new TgdPainterLogic((time, delta) => {\n            box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94)\n            // Heart beat: a short sharp pulse every second.\n            const beat = Math.abs(Math.sin(time * Math.PI)) ** 8\n            suzanne.transfo.setScale(0.8 + 0.4 * beat)\n            moon.transfo.distance = 2 * Math.abs(Math.cos(time * 2.8475))\n        }),\n    )\n    context.camera.fitSpaceAtTarget(9, 9)\n    context.play()"
};
var FULL = "import {\n    type TgdContext,\n    TgdGeometryBox,\n    TgdGeometrySphereIco,\n    TgdMaterialFlatTexture,\n    TgdMaterialNormals,\n    type TgdMesh,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMeshes,\n    TgdPainterState,\n    TgdTransfo,\n} from \"@tolokoban/tgd\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    // The moon's transfo is relative to the box's one.\n    // It has no material, so it uses the box's one.\n    const moon: TgdMesh = {\n        geometry: new TgdGeometrySphereIco(),\n        transfo: new TgdTransfo({ position: [0, 0, 1] }),\n        visible: true,\n    }\n    const box: TgdMesh = {\n        geometry: new TgdGeometryBox(),\n        material: new TgdMaterialNormals(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),\n        visible: true,\n        children: [moon],\n    }\n    const suzanne: TgdMesh = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        material: new TgdMaterialFlatTexture({\n            texture: assets.glb.suzanne.createTexture2D(context, 0),\n        }),\n        transfo: new TgdTransfo(),\n        visible: true,\n    }\n    context.add(\n        new TgdPainterClear(context, { color: [0.2, 0.2, 0.2, 1], depth: 1 }),\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [new TgdPainterMeshes(context, { meshes: [box, suzanne] })],\n        }),\n        new TgdPainterLogic((time, delta) => {\n            box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94)\n            // Heart beat: a short sharp pulse every second.\n            const beat = Math.abs(Math.sin(time * Math.PI)) ** 8\n            suzanne.transfo.setScale(0.8 + 0.4 * beat)\n            moon.transfo.distance = 2 * Math.abs(Math.cos(time * 2.8475))\n        }),\n    )\n    context.camera.fitSpaceAtTarget(9, 9)\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} assets={{ glb: { suzanne: SuzanneURL } }} controller={{ inertiaOrbit: 1000 }} gizmo />\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_meshes_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/_meshes/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/_meshes/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/_meshes/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/_meshes/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/_meshes/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/_meshes/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
31763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_3 = __webpack_require__(21278);




function init(context, assets) {
    // #begin Initializing WebGL
    // The moon's transfo is relative to the box's one.
    // It has no material, so it uses the box's one.
    var moon = {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometrySphereIco(),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: [
                0,
                0,
                1
            ]
        }),
        visible: true
    };
    var box = {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox(),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialNormals(),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: [
                0,
                0,
                0
            ],
            distance: 2
        }),
        visible: true,
        children: [
            moon
        ]
    };
    var suzanne = {
        geometry: assets.glb.suzanne.makeGeometry(),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlatTexture({
            texture: assets.glb.suzanne.createTexture2D(context, 0)
        }),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo(),
        visible: true
    };
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.2,
            0.2,
            0.2,
            1
        ],
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterMeshes(context, {
                meshes: [
                    box,
                    suzanne
                ]
            })
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time, delta) {
        box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94);
        // Heart beat: a short sharp pulse every second.
        var beat = Math.pow(Math.abs(Math.sin(time * Math.PI)), 8);
        suzanne.transfo.setScale(0.8 + 0.4 * beat);
        moon.transfo.distance = 2 * Math.abs(Math.cos(time * 2.8475));
    }));
    context.camera.fitSpaceAtTarget(9, 9);
    context.play();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_3
            }
        },
        controller: {
            inertiaOrbit: 1000
        },
        gizmo: true
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/_meshes/meshes.demo.tsx",
        lineNumber: 62,
        columnNumber: 12
    }, this);
}


},
96018(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _meshes__rspack_import_1 = __webpack_require__(26761);
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
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterMeshes.html",
                    children: "TgdPainterMeshes"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_meshes__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Paint a list of meshes, each one with its own geometry, material and transfo.\nMeshes sharing the same material share the same program."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "A mesh can have ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "children"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                        lineNumber: 10,
                        columnNumber: 17
                    }, this),
                    ": they are painted after their parent and their ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "transfo"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                        lineNumber: 10,
                        columnNumber: 75
                    }, this),
                    " is relative to the parent's one.\nIf ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "visible"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                        lineNumber: 11,
                        columnNumber: 4
                    }, this),
                    " is false, the mesh and all its children are hidden.\nA mesh without ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "material"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                        lineNumber: 12,
                        columnNumber: 16
                    }, this),
                    " uses the one of its closest ancestor.\nA mesh without ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "geometry"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                        lineNumber: 13,
                        columnNumber: 16
                    }, this),
                    " is not painted, but its children are. Use it to group meshes."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Here, a box with a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdMaterialNormals"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                        lineNumber: 15,
                        columnNumber: 20
                    }, this),
                    " orbits around a pulsing Suzanne with a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdMaterialFlatTexture"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                        lineNumber: 15,
                        columnNumber: 80
                    }, this),
                    ".\nThe sphere is a child of the big one, so it follows it and uses its material."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                lineNumber: 18,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                    lineNumber: 20,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/meshes/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9tZXNoZXNfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlX2Nzcy04NDZlZmMuNWYyMjFiMGE5OGQ2ZDNmYy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL21lc2hlcy9fbWVzaGVzL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9tZXNoZXMvX21lc2hlcy9tZXNoZXMuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbWVzaGVzL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tZXNoZXMuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XCIgICAgLy8gVGhlIG1vb24ncyB0cmFuc2ZvIGlzIHJlbGF0aXZlIHRvIHRoZSBib3gncyBvbmUuXFxuICAgIC8vIEl0IGhhcyBubyBtYXRlcmlhbCwgc28gaXQgdXNlcyB0aGUgYm94J3Mgb25lLlxcbiAgICBjb25zdCBtb29uOiBUZ2RNZXNoID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVNwaGVyZUljbygpLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIDFdIH0pLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgfVxcbiAgICBjb25zdCBib3g6IFRnZE1lc2ggPSB7XFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KCksXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsTm9ybWFscygpLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIDBdLCBkaXN0YW5jZTogMiB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICBjaGlsZHJlbjogW21vb25dLFxcbiAgICB9XFxuICAgIGNvbnN0IHN1emFubmU6IFRnZE1lc2ggPSB7XFxuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBhc3NldHMuZ2xiLnN1emFubmUuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIDApLFxcbiAgICAgICAgfSksXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbygpLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgfVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMiwgMC4yLCAwLjIsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbmV3IFRnZFBhaW50ZXJNZXNoZXMoY29udGV4dCwgeyBtZXNoZXM6IFtib3gsIHN1emFubmVdIH0pXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsdGEpID0+IHtcXG4gICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsdGEgKiAwLjcxKS5vcmJpdEFyb3VuZFkoZGVsdGEgKiAwLjk0KVxcbiAgICAgICAgICAgIC8vIEhlYXJ0IGJlYXQ6IGEgc2hvcnQgc2hhcnAgcHVsc2UgZXZlcnkgc2Vjb25kLlxcbiAgICAgICAgICAgIGNvbnN0IGJlYXQgPSBNYXRoLmFicyhNYXRoLnNpbih0aW1lICogTWF0aC5QSSkpICoqIDhcXG4gICAgICAgICAgICBzdXphbm5lLnRyYW5zZm8uc2V0U2NhbGUoMC44ICsgMC40ICogYmVhdClcXG4gICAgICAgICAgICBtb29uLnRyYW5zZm8uZGlzdGFuY2UgPSAyICogTWF0aC5hYnMoTWF0aC5jb3ModGltZSAqIDIuODQ3NSkpXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDksIDkpXFxuICAgIGNvbnRleHQucGxheSgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZEdlb21ldHJ5Qm94LFxcbiAgICBUZ2RHZW9tZXRyeVNwaGVyZUljbyxcXG4gICAgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSxcXG4gICAgVGdkTWF0ZXJpYWxOb3JtYWxzLFxcbiAgICB0eXBlIFRnZE1lc2gsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaGVzLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRyYW5zZm8sXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgLy8gVGhlIG1vb24ncyB0cmFuc2ZvIGlzIHJlbGF0aXZlIHRvIHRoZSBib3gncyBvbmUuXFxuICAgIC8vIEl0IGhhcyBubyBtYXRlcmlhbCwgc28gaXQgdXNlcyB0aGUgYm94J3Mgb25lLlxcbiAgICBjb25zdCBtb29uOiBUZ2RNZXNoID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVNwaGVyZUljbygpLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIDFdIH0pLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgfVxcbiAgICBjb25zdCBib3g6IFRnZE1lc2ggPSB7XFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KCksXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsTm9ybWFscygpLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIDBdLCBkaXN0YW5jZTogMiB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICBjaGlsZHJlbjogW21vb25dLFxcbiAgICB9XFxuICAgIGNvbnN0IHN1emFubmU6IFRnZE1lc2ggPSB7XFxuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBhc3NldHMuZ2xiLnN1emFubmUuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIDApLFxcbiAgICAgICAgfSksXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbygpLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgfVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMiwgMC4yLCAwLjIsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbmV3IFRnZFBhaW50ZXJNZXNoZXMoY29udGV4dCwgeyBtZXNoZXM6IFtib3gsIHN1emFubmVdIH0pXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsdGEpID0+IHtcXG4gICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsdGEgKiAwLjcxKS5vcmJpdEFyb3VuZFkoZGVsdGEgKiAwLjk0KVxcbiAgICAgICAgICAgIC8vIEhlYXJ0IGJlYXQ6IGEgc2hvcnQgc2hhcnAgcHVsc2UgZXZlcnkgc2Vjb25kLlxcbiAgICAgICAgICAgIGNvbnN0IGJlYXQgPSBNYXRoLmFicyhNYXRoLnNpbih0aW1lICogTWF0aC5QSSkpICoqIDhcXG4gICAgICAgICAgICBzdXphbm5lLnRyYW5zZm8uc2V0U2NhbGUoMC44ICsgMC40ICogYmVhdClcXG4gICAgICAgICAgICBtb29uLnRyYW5zZm8uZGlzdGFuY2UgPSAyICogTWF0aC5hYnMoTWF0aC5jb3ModGltZSAqIDIuODQ3NSkpXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDksIDkpXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSBhc3NldHM9e3sgZ2xiOiB7IHN1emFubmU6IFN1emFubmVVUkwgfSB9fSBjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fSBnaXptbyAvPlxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkR2VvbWV0cnlCb3gsXG4gICAgVGdkR2VvbWV0cnlTcGhlcmVJY28sXG4gICAgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSxcbiAgICBUZ2RNYXRlcmlhbE5vcm1hbHMsXG4gICAgdHlwZSBUZ2RNZXNoLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTG9naWMsXG4gICAgVGdkUGFpbnRlck1lc2hlcyxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVHJhbnNmbyxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgLy8gVGhlIG1vb24ncyB0cmFuc2ZvIGlzIHJlbGF0aXZlIHRvIHRoZSBib3gncyBvbmUuXG4gICAgLy8gSXQgaGFzIG5vIG1hdGVyaWFsLCBzbyBpdCB1c2VzIHRoZSBib3gncyBvbmUuXG4gICAgY29uc3QgbW9vbjogVGdkTWVzaCA9IHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVNwaGVyZUljbygpLFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMCwgMCwgMV0gfSksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgfVxuICAgIGNvbnN0IGJveDogVGdkTWVzaCA9IHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCgpLFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsTm9ybWFscygpLFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMCwgMCwgMF0sIGRpc3RhbmNlOiAyIH0pLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogW21vb25dLFxuICAgIH1cbiAgICBjb25zdCBzdXphbm5lOiBUZ2RNZXNoID0ge1xuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoe1xuICAgICAgICAgICAgdGV4dHVyZTogYXNzZXRzLmdsYi5zdXphbm5lLmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCAwKSxcbiAgICAgICAgfSksXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKCksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgfVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjIsIDAuMiwgMC4yLCAxXSwgZGVwdGg6IDEgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxuICAgICAgICAgICAgY3VsbDogXCJiYWNrXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW25ldyBUZ2RQYWludGVyTWVzaGVzKGNvbnRleHQsIHsgbWVzaGVzOiBbYm94LCBzdXphbm5lXSB9KV0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWx0YSkgPT4ge1xuICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbHRhICogMC43MSkub3JiaXRBcm91bmRZKGRlbHRhICogMC45NClcbiAgICAgICAgICAgIC8vIEhlYXJ0IGJlYXQ6IGEgc2hvcnQgc2hhcnAgcHVsc2UgZXZlcnkgc2Vjb25kLlxuICAgICAgICAgICAgY29uc3QgYmVhdCA9IE1hdGguYWJzKE1hdGguc2luKHRpbWUgKiBNYXRoLlBJKSkgKiogOFxuICAgICAgICAgICAgc3V6YW5uZS50cmFuc2ZvLnNldFNjYWxlKDAuOCArIDAuNCAqIGJlYXQpXG4gICAgICAgICAgICBtb29uLnRyYW5zZm8uZGlzdGFuY2UgPSAyICogTWF0aC5hYnMoTWF0aC5jb3ModGltZSAqIDIuODQ3NSkpXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDksIDkpXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IGFzc2V0cz17eyBnbGI6IHsgc3V6YW5uZTogU3V6YW5uZVVSTCB9IH19IGNvbnRyb2xsZXI9e3sgaW5lcnRpYU9yYml0OiAxMDAwIH19IGdpem1vIC8+XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZEdlb21ldHJ5Qm94IiwiVGdkR2VvbWV0cnlTcGhlcmVJY28iLCJUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlIiwiVGdkTWF0ZXJpYWxOb3JtYWxzIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2hlcyIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRyYW5zZm8iLCJWaWV3IiwiU3V6YW5uZVVSTCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwibW9vbiIsImJveCIsInN1emFubmUiLCJ0aW1lIiwiZGVsdGEiLCJiZWF0IiwiTWF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDckI7QUFFaEMsSUFBTUksUUFBUTtJQUFDLHNCQUFxQjtBQUFnaUQ7QUFDcGtELElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHdDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7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