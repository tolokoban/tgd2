"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_node_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-s-4b95e8"], {
58621(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/wood.8b5989676a3d8a15.webp";

},
90863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _node_demo__rspack_import_4 = __webpack_require__(67304);
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
    "Detail #1": "    ctx.camera.transfo.setPosition(0, -5, 0).distance = 30\n    new TgdControllerCameraOrbit(ctx)\n    const createBox = () =>\n        new TgdPainterNode({\n            transfo: {\n                position: [0, -1, 0],\n            },\n            children: [\n                new TgdPainterNode({\n                    transfo: {\n                        position: [0, -0.5, -0.5],\n                    },\n                    children: [\n                        new TgdPainterMesh(ctx, {\n                            geometry: new TgdGeometryBox(),\n                            material: new TgdMaterialDiffuse({\n                                color: new TgdTexture2D(ctx).loadBitmap(WoodURL, { generateMipmap: true }),\n                            }),\n                        }),\n                    ],\n                }),\n            ],\n        })\n    let root = createBox()\n    const boxes: TgdPainterNode[] = [root]\n    for (let i = 0; i < 31; i++) {\n        const box = createBox()\n        boxes.push(box)\n        box.add(root)\n        root = box\n    }\n    ctx.add(\n        new TgdPainterClear(ctx, { color: [0.2, 0.1, 0, 1], depth: 1 }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.less,\n            children: [root],\n        }),\n        new TgdPainterLogic((time, delay) => {\n            for (const box of boxes) {\n                box.transfo.orientation.reset()\n                const s = 0.95\n                box.transfo.setScale(s, s, s)\n                box.transfo.orbitAroundX((Math.abs(Math.sin(time)) * Math.PI * 2) / boxes.length)\n                box.transfo.orbitAroundY(\n                    (Math.sin(time * 1.1287) * Math.PI * 3 * (1 + Math.cos(time * 0.37243))) / boxes.length,\n                )\n            }\n            root.transfo.orbitAroundY(time * 0.5)\n        }),\n    )\n    ctx.play()"
};
var FULL = 'import {\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdGeometryBox,\n    TgdMaterialDiffuse,\n    TgdMaterialNormals,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterNode,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\nimport View from "@/components/demo/Tgd"\nimport WoodURL from "./wood.webp"\n\nfunction init(ctx: TgdContext) {\n    ctx.camera.transfo.setPosition(0, -5, 0).distance = 30\n    new TgdControllerCameraOrbit(ctx)\n    const createBox = () =>\n        new TgdPainterNode({\n            transfo: {\n                position: [0, -1, 0],\n            },\n            children: [\n                new TgdPainterNode({\n                    transfo: {\n                        position: [0, -0.5, -0.5],\n                    },\n                    children: [\n                        new TgdPainterMesh(ctx, {\n                            geometry: new TgdGeometryBox(),\n                            material: new TgdMaterialDiffuse({\n                                color: new TgdTexture2D(ctx).loadBitmap(WoodURL, { generateMipmap: true }),\n                            }),\n                        }),\n                    ],\n                }),\n            ],\n        })\n    let root = createBox()\n    const boxes: TgdPainterNode[] = [root]\n    for (let i = 0; i < 31; i++) {\n        const box = createBox()\n        boxes.push(box)\n        box.add(root)\n        root = box\n    }\n    ctx.add(\n        new TgdPainterClear(ctx, { color: [0.2, 0.1, 0, 1], depth: 1 }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.less,\n            children: [root],\n        }),\n        new TgdPainterLogic((time, delay) => {\n            for (const box of boxes) {\n                box.transfo.orientation.reset()\n                const s = 0.95\n                box.transfo.setScale(s, s, s)\n                box.transfo.orbitAroundX((Math.abs(Math.sin(time)) * Math.PI * 2) / boxes.length)\n                box.transfo.orbitAroundY(\n                    (Math.sin(time * 1.1287) * Math.PI * 3 * (1 + Math.cos(time * 0.37243))) / boxes.length,\n                )\n            }\n            root.transfo.orbitAroundY(time * 0.5)\n        }),\n    )\n    ctx.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_node_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
67304(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _wood_webp__rspack_import_3 = __webpack_require__(58621);




function init(ctx) {
    // #begin
    ctx.camera.transfo.setPosition(0, -5, 0).distance = 30;
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(ctx);
    var createBox = function createBox() {
        return new _tolokoban_tgd__rspack_import_1.TgdPainterNode({
            transfo: {
                position: [
                    0,
                    -1,
                    0
                ]
            },
            children: [
                new _tolokoban_tgd__rspack_import_1.TgdPainterNode({
                    transfo: {
                        position: [
                            0,
                            -0.5,
                            -0.5
                        ]
                    },
                    children: [
                        new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(ctx, {
                            geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox(),
                            material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
                                color: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(ctx).loadBitmap(_wood_webp__rspack_import_3, {
                                    generateMipmap: true
                                })
                            })
                        })
                    ]
                })
            ]
        });
    };
    var root = createBox();
    var boxes = [
        root
    ];
    for(var i = 0; i < 31; i++){
        var box = createBox();
        boxes.push(box);
        box.add(root);
        root = box;
    }
    ctx.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(ctx, {
        color: [
            0.2,
            0.1,
            0,
            1
        ],
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(ctx, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            root
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time, delay) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = boxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var box = _step.value;
                box.transfo.orientation.reset();
                var s = 0.95;
                box.transfo.setScale(s, s, s);
                box.transfo.orbitAroundX(Math.abs(Math.sin(time)) * Math.PI * 2 / boxes.length);
                box.transfo.orbitAroundY(Math.sin(time * 1.1287) * Math.PI * 3 * (1 + Math.cos(time * 0.37243)) / boxes.length);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        root.transfo.orbitAroundY(time * 0.5);
    }));
    ctx.play();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/node.demo.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}


},
5395(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _node_demo__rspack_import_1 = __webpack_require__(90863);
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
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterNode.html",
                    children: "TgdPainterNode"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "All objects implementing ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdInterfaceTransformable"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 5,
                        columnNumber: 26
                    }, this),
                    " have a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "transfo"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 5,
                        columnNumber: 61
                    }, this),
                    " attribute\nthat controls its position/orientation/scale in the world coordinate system. If\nyou need an object's transformation to be defined in another object coordinate\nsystem, you just have to wrap it in a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterNode"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 8,
                        columnNumber: 39
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "As long as a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "Transformable"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 10,
                        columnNumber: 14
                    }, this),
                    " is hold by the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "painter"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 10,
                        columnNumber: 45
                    }, this),
                    " attribute of a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterNode"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 10,
                        columnNumber: 70
                    }, this),
                    ",\nit will be controlled by the node.\nThat means, you should not use its ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "transfo"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 12,
                        columnNumber: 36
                    }, this),
                    " attribute because it will be\noverwritten by the node."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_node_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9ub2RlX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jc3Mtcy00Yjk1ZTguYzFiODc0Y2ZlZmQ5M2MxMi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9ub2RlL18vbm9kZS5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbm9kZS9fL25vZGUuZGVtby9ub2RlLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9ub2RlL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vbm9kZS5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkRldGFpbCAjMVwiOlxuXHRcdFwiICAgIGN0eC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAtNSwgMCkuZGlzdGFuY2UgPSAzMFxcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eClcXG4gICAgY29uc3QgY3JlYXRlQm94ID0gKCkgPT5cXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuICAgICAgICAgICAgdHJhbnNmbzoge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogWzAsIC0xLCAwXSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFswLCAtMC41LCAtMC41XSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCgpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFRleHR1cmUyRChjdHgpLmxvYWRCaXRtYXAoV29vZFVSTCwgeyBnZW5lcmF0ZU1pcG1hcDogdHJ1ZSB9KSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSlcXG4gICAgbGV0IHJvb3QgPSBjcmVhdGVCb3goKVxcbiAgICBjb25zdCBib3hlczogVGdkUGFpbnRlck5vZGVbXSA9IFtyb290XVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMxOyBpKyspIHtcXG4gICAgICAgIGNvbnN0IGJveCA9IGNyZWF0ZUJveCgpXFxuICAgICAgICBib3hlcy5wdXNoKGJveClcXG4gICAgICAgIGJveC5hZGQocm9vdClcXG4gICAgICAgIHJvb3QgPSBib3hcXG4gICAgfVxcbiAgICBjdHguYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLjIsIDAuMSwgMCwgMV0sIGRlcHRoOiAxIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbcm9vdF0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbGF5KSA9PiB7XFxuICAgICAgICAgICAgZm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcXG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JpZW50YXRpb24ucmVzZXQoKVxcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gMC45NVxcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5zZXRTY2FsZShzLCBzLCBzKVxcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFgoKE1hdGguYWJzKE1hdGguc2luKHRpbWUpKSAqIE1hdGguUEkgKiAyKSAvIGJveGVzLmxlbmd0aClcXG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JiaXRBcm91bmRZKFxcbiAgICAgICAgICAgICAgICAgICAgKE1hdGguc2luKHRpbWUgKiAxLjEyODcpICogTWF0aC5QSSAqIDMgKiAoMSArIE1hdGguY29zKHRpbWUgKiAwLjM3MjQzKSkpIC8gYm94ZXMubGVuZ3RoLFxcbiAgICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJvb3QudHJhbnNmby5vcmJpdEFyb3VuZFkodGltZSAqIDAuNSlcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGN0eC5wbGF5KClcIixcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7XFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICBUZ2RHZW9tZXRyeUJveCxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICBUZ2RNYXRlcmlhbE5vcm1hbHMsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlck5vZGUsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5pbXBvcnQgV29vZFVSTCBmcm9tIFwiLi93b29kLndlYnBcIlxcblxcbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XFxuICAgIGN0eC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAtNSwgMCkuZGlzdGFuY2UgPSAzMFxcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eClcXG4gICAgY29uc3QgY3JlYXRlQm94ID0gKCkgPT5cXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuICAgICAgICAgICAgdHJhbnNmbzoge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogWzAsIC0xLCAwXSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFswLCAtMC41LCAtMC41XSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCgpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFRleHR1cmUyRChjdHgpLmxvYWRCaXRtYXAoV29vZFVSTCwgeyBnZW5lcmF0ZU1pcG1hcDogdHJ1ZSB9KSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSlcXG4gICAgbGV0IHJvb3QgPSBjcmVhdGVCb3goKVxcbiAgICBjb25zdCBib3hlczogVGdkUGFpbnRlck5vZGVbXSA9IFtyb290XVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMxOyBpKyspIHtcXG4gICAgICAgIGNvbnN0IGJveCA9IGNyZWF0ZUJveCgpXFxuICAgICAgICBib3hlcy5wdXNoKGJveClcXG4gICAgICAgIGJveC5hZGQocm9vdClcXG4gICAgICAgIHJvb3QgPSBib3hcXG4gICAgfVxcbiAgICBjdHguYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLjIsIDAuMSwgMCwgMV0sIGRlcHRoOiAxIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbcm9vdF0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbGF5KSA9PiB7XFxuICAgICAgICAgICAgZm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcXG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JpZW50YXRpb24ucmVzZXQoKVxcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gMC45NVxcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5zZXRTY2FsZShzLCBzLCBzKVxcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFgoKE1hdGguYWJzKE1hdGguc2luKHRpbWUpKSAqIE1hdGguUEkgKiAyKSAvIGJveGVzLmxlbmd0aClcXG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JiaXRBcm91bmRZKFxcbiAgICAgICAgICAgICAgICAgICAgKE1hdGguc2luKHRpbWUgKiAxLjEyODcpICogTWF0aC5QSSAqIDMgKiAoMSArIE1hdGguY29zKHRpbWUgKiAwLjM3MjQzKSkpIC8gYm94ZXMubGVuZ3RoLFxcbiAgICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJvb3QudHJhbnNmby5vcmJpdEFyb3VuZFkodGltZSAqIDAuNSlcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGN0eC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IC8+XFxufVxcbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG5cdGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cblx0XHRcdFx0PERlbW8gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuXHRcdFx0XHRcdFx0e2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiaW1wb3J0IHtcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdFRnZEdlb21ldHJ5Qm94LFxuXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXG5cdFRnZE1hdGVyaWFsTm9ybWFscyxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTG9naWMsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyTm9kZSxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuaW1wb3J0IFdvb2RVUkwgZnJvbSBcIi4vd29vZC53ZWJwXCI7XG5cbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XG5cdC8vICNiZWdpblxuXHRjdHguY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgLTUsIDApLmRpc3RhbmNlID0gMzA7XG5cdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4KTtcblx0Y29uc3QgY3JlYXRlQm94ID0gKCkgPT5cblx0XHRuZXcgVGdkUGFpbnRlck5vZGUoe1xuXHRcdFx0dHJhbnNmbzoge1xuXHRcdFx0XHRwb3NpdGlvbjogWzAsIC0xLCAwXSxcblx0XHRcdH0sXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRuZXcgVGdkUGFpbnRlck5vZGUoe1xuXHRcdFx0XHRcdHRyYW5zZm86IHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBbMCwgLTAuNSwgLTAuNV0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0bmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xuXHRcdFx0XHRcdFx0XHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KCksXG5cdFx0XHRcdFx0XHRcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogbmV3IFRnZFRleHR1cmUyRChjdHgpLmxvYWRCaXRtYXAoV29vZFVSTCwge1xuXHRcdFx0XHRcdFx0XHRcdFx0Z2VuZXJhdGVNaXBtYXA6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSksXG5cdFx0XHRdLFxuXHRcdH0pO1xuXHRsZXQgcm9vdCA9IGNyZWF0ZUJveCgpO1xuXHRjb25zdCBib3hlczogVGdkUGFpbnRlck5vZGVbXSA9IFtyb290XTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzMTsgaSsrKSB7XG5cdFx0Y29uc3QgYm94ID0gY3JlYXRlQm94KCk7XG5cdFx0Ym94ZXMucHVzaChib3gpO1xuXHRcdGJveC5hZGQocm9vdCk7XG5cdFx0cm9vdCA9IGJveDtcblx0fVxuXHRjdHguYWRkKFxuXHRcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLCBkZXB0aDogMSB9KSxcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xuXHRcdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRcdGNoaWxkcmVuOiBbcm9vdF0sXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsYXkpID0+IHtcblx0XHRcdGZvciAoY29uc3QgYm94IG9mIGJveGVzKSB7XG5cdFx0XHRcdGJveC50cmFuc2ZvLm9yaWVudGF0aW9uLnJlc2V0KCk7XG5cdFx0XHRcdGNvbnN0IHMgPSAwLjk1O1xuXHRcdFx0XHRib3gudHJhbnNmby5zZXRTY2FsZShzLCBzLCBzKTtcblx0XHRcdFx0Ym94LnRyYW5zZm8ub3JiaXRBcm91bmRYKFxuXHRcdFx0XHRcdChNYXRoLmFicyhNYXRoLnNpbih0aW1lKSkgKiBNYXRoLlBJICogMikgLyBib3hlcy5sZW5ndGgsXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJveC50cmFuc2ZvLm9yYml0QXJvdW5kWShcblx0XHRcdFx0XHQoTWF0aC5zaW4odGltZSAqIDEuMTI4NykgKlxuXHRcdFx0XHRcdFx0TWF0aC5QSSAqXG5cdFx0XHRcdFx0XHQzICpcblx0XHRcdFx0XHRcdCgxICsgTWF0aC5jb3ModGltZSAqIDAuMzcyNDMpKSkgL1xuXHRcdFx0XHRcdFx0Ym94ZXMubGVuZ3RoLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cm9vdC50cmFuc2ZvLm9yYml0QXJvdW5kWSh0aW1lICogMC41KTtcblx0XHR9KSxcblx0KTtcblx0Y3R4LnBsYXkoKTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz47XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsIlRnZEdlb21ldHJ5Qm94IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyTm9kZSIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiV29vZFVSTCIsImluaXQiLCJjdHgiLCJjcmVhdGVCb3giLCJyb290IiwiYm94ZXMiLCJpIiwiYm94IiwidGltZSIsImRlbGF5IiwiX2l0ZXJhdG9yRXJyb3IiLCJzIiwiTWF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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