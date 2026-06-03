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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/node.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 5,
                        columnNumber: 26
                    }, this),
                    " have a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "transfo"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 5,
                        columnNumber: 61
                    }, this),
                    " attribute\nthat controls its position/orientation/scale in the world coordinate system. If\nyou need an object's transformation to be defined in another object coordinate\nsystem, you just have to wrap it in a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterNode"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 8,
                        columnNumber: 39
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 10,
                        columnNumber: 14
                    }, this),
                    " is hold by the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "painter"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 10,
                        columnNumber: 45
                    }, this),
                    " attribute of a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterNode"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 10,
                        columnNumber: 70
                    }, this),
                    ",\nit will be controlled by the node.\nThat means, you should not use its ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "transfo"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                        lineNumber: 12,
                        columnNumber: 36
                    }, this),
                    " attribute because it will be\noverwritten by the node."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_node_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9ub2RlX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jc3Mtcy00Yjk1ZTguMDY3MzBiMzcwZjBhZjVlZS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL25vZGUvXy9ub2RlLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL25vZGUvXy9ub2RlLmRlbW8vbm9kZS5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9ub2RlL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9ub2RlLmRlbW9cIjtcblxuY29uc3QgRk9DVVMgPSB7XG5cdFwiRGV0YWlsICMxXCI6XG5cdFx0XCIgICAgY3R4LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIC01LCAwKS5kaXN0YW5jZSA9IDMwXFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4KVxcbiAgICBjb25zdCBjcmVhdGVCb3ggPSAoKSA9PlxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG4gICAgICAgICAgICB0cmFuc2ZvOiB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwgLTEsIDBdLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogWzAsIC0wLjUsIC0wLjVdLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVGV4dHVyZTJEKGN0eCkubG9hZEJpdG1hcChXb29kVVJMLCB7IGdlbmVyYXRlTWlwbWFwOiB0cnVlIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9KVxcbiAgICBsZXQgcm9vdCA9IGNyZWF0ZUJveCgpXFxuICAgIGNvbnN0IGJveGVzOiBUZ2RQYWludGVyTm9kZVtdID0gW3Jvb3RdXFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzE7IGkrKykge1xcbiAgICAgICAgY29uc3QgYm94ID0gY3JlYXRlQm94KClcXG4gICAgICAgIGJveGVzLnB1c2goYm94KVxcbiAgICAgICAgYm94LmFkZChyb290KVxcbiAgICAgICAgcm9vdCA9IGJveFxcbiAgICB9XFxuICAgIGN0eC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuMiwgMC4xLCAwLCAxXSwgZGVwdGg6IDEgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtyb290XSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsYXkpID0+IHtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJveCBvZiBib3hlcykge1xcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5vcmllbnRhdGlvbi5yZXNldCgpXFxuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSAwLjk1XFxuICAgICAgICAgICAgICAgIGJveC50cmFuc2ZvLnNldFNjYWxlKHMsIHMsIHMpXFxuICAgICAgICAgICAgICAgIGJveC50cmFuc2ZvLm9yYml0QXJvdW5kWCgoTWF0aC5hYnMoTWF0aC5zaW4odGltZSkpICogTWF0aC5QSSAqIDIpIC8gYm94ZXMubGVuZ3RoKVxcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFkoXFxuICAgICAgICAgICAgICAgICAgICAoTWF0aC5zaW4odGltZSAqIDEuMTI4NykgKiBNYXRoLlBJICogMyAqICgxICsgTWF0aC5jb3ModGltZSAqIDAuMzcyNDMpKSkgLyBib3hlcy5sZW5ndGgsXFxuICAgICAgICAgICAgICAgIClcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcm9vdC50cmFuc2ZvLm9yYml0QXJvdW5kWSh0aW1lICogMC41KVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY3R4LnBsYXkoKVwiLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IHtcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZEdlb21ldHJ5Qm94LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZE1hdGVyaWFsTm9ybWFscyxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyTm9kZSxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxcbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcbmltcG9ydCBXb29kVVJMIGZyb20gXCIuL3dvb2Qud2VicFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcXG4gICAgY3R4LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIC01LCAwKS5kaXN0YW5jZSA9IDMwXFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4KVxcbiAgICBjb25zdCBjcmVhdGVCb3ggPSAoKSA9PlxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG4gICAgICAgICAgICB0cmFuc2ZvOiB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwgLTEsIDBdLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogWzAsIC0wLjUsIC0wLjVdLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVGV4dHVyZTJEKGN0eCkubG9hZEJpdG1hcChXb29kVVJMLCB7IGdlbmVyYXRlTWlwbWFwOiB0cnVlIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9KVxcbiAgICBsZXQgcm9vdCA9IGNyZWF0ZUJveCgpXFxuICAgIGNvbnN0IGJveGVzOiBUZ2RQYWludGVyTm9kZVtdID0gW3Jvb3RdXFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzE7IGkrKykge1xcbiAgICAgICAgY29uc3QgYm94ID0gY3JlYXRlQm94KClcXG4gICAgICAgIGJveGVzLnB1c2goYm94KVxcbiAgICAgICAgYm94LmFkZChyb290KVxcbiAgICAgICAgcm9vdCA9IGJveFxcbiAgICB9XFxuICAgIGN0eC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuMiwgMC4xLCAwLCAxXSwgZGVwdGg6IDEgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtyb290XSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsYXkpID0+IHtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJveCBvZiBib3hlcykge1xcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5vcmllbnRhdGlvbi5yZXNldCgpXFxuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSAwLjk1XFxuICAgICAgICAgICAgICAgIGJveC50cmFuc2ZvLnNldFNjYWxlKHMsIHMsIHMpXFxuICAgICAgICAgICAgICAgIGJveC50cmFuc2ZvLm9yYml0QXJvdW5kWCgoTWF0aC5hYnMoTWF0aC5zaW4odGltZSkpICogTWF0aC5QSSAqIDIpIC8gYm94ZXMubGVuZ3RoKVxcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFkoXFxuICAgICAgICAgICAgICAgICAgICAoTWF0aC5zaW4odGltZSAqIDEuMTI4NykgKiBNYXRoLlBJICogMyAqICgxICsgTWF0aC5jb3ModGltZSAqIDAuMzcyNDMpKSkgLyBib3hlcy5sZW5ndGgsXFxuICAgICAgICAgICAgICAgIClcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcm9vdC50cmFuc2ZvLm9yYml0QXJvdW5kWSh0aW1lICogMC41KVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY3R4LnBsYXkoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz5cXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcblx0VGdkR2VvbWV0cnlCb3gsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcblx0VGdkTWF0ZXJpYWxOb3JtYWxzLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJOb2RlLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQgV29vZFVSTCBmcm9tIFwiLi93b29kLndlYnBcIjtcblxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcblx0Ly8gI2JlZ2luXG5cdGN0eC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAtNSwgMCkuZGlzdGFuY2UgPSAzMDtcblx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgpO1xuXHRjb25zdCBjcmVhdGVCb3ggPSAoKSA9PlxuXHRcdG5ldyBUZ2RQYWludGVyTm9kZSh7XG5cdFx0XHR0cmFuc2ZvOiB7XG5cdFx0XHRcdHBvc2l0aW9uOiBbMCwgLTEsIDBdLFxuXHRcdFx0fSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdG5ldyBUZ2RQYWludGVyTm9kZSh7XG5cdFx0XHRcdFx0dHJhbnNmbzoge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IFswLCAtMC41LCAtMC41XSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRuZXcgVGdkUGFpbnRlck1lc2goY3R4LCB7XG5cdFx0XHRcdFx0XHRcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goKSxcblx0XHRcdFx0XHRcdFx0bWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBuZXcgVGdkVGV4dHVyZTJEKGN0eCkubG9hZEJpdG1hcChXb29kVVJMLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRnZW5lcmF0ZU1pcG1hcDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9KSxcblx0XHRcdF0sXG5cdFx0fSk7XG5cdGxldCByb290ID0gY3JlYXRlQm94KCk7XG5cdGNvbnN0IGJveGVzOiBUZ2RQYWludGVyTm9kZVtdID0gW3Jvb3RdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDMxOyBpKyspIHtcblx0XHRjb25zdCBib3ggPSBjcmVhdGVCb3goKTtcblx0XHRib3hlcy5wdXNoKGJveCk7XG5cdFx0Ym94LmFkZChyb290KTtcblx0XHRyb290ID0gYm94O1xuXHR9XG5cdGN0eC5hZGQoXG5cdFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLjIsIDAuMSwgMCwgMV0sIGRlcHRoOiAxIH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XG5cdFx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHRcdFx0Y2hpbGRyZW46IFtyb290XSxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWxheSkgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcblx0XHRcdFx0Ym94LnRyYW5zZm8ub3JpZW50YXRpb24ucmVzZXQoKTtcblx0XHRcdFx0Y29uc3QgcyA9IDAuOTU7XG5cdFx0XHRcdGJveC50cmFuc2ZvLnNldFNjYWxlKHMsIHMsIHMpO1xuXHRcdFx0XHRib3gudHJhbnNmby5vcmJpdEFyb3VuZFgoXG5cdFx0XHRcdFx0KE1hdGguYWJzKE1hdGguc2luKHRpbWUpKSAqIE1hdGguUEkgKiAyKSAvIGJveGVzLmxlbmd0aCxcblx0XHRcdFx0KTtcblx0XHRcdFx0Ym94LnRyYW5zZm8ub3JiaXRBcm91bmRZKFxuXHRcdFx0XHRcdChNYXRoLnNpbih0aW1lICogMS4xMjg3KSAqXG5cdFx0XHRcdFx0XHRNYXRoLlBJICpcblx0XHRcdFx0XHRcdDMgKlxuXHRcdFx0XHRcdFx0KDEgKyBNYXRoLmNvcyh0aW1lICogMC4zNzI0MykpKSAvXG5cdFx0XHRcdFx0XHRib3hlcy5sZW5ndGgsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyb290LnRyYW5zZm8ub3JiaXRBcm91bmRZKHRpbWUgKiAwLjUpO1xuXHRcdH0pLFxuXHQpO1xuXHRjdHgucGxheSgpO1xuXHQvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPjtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkR2VvbWV0cnlCb3giLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJOb2RlIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJXb29kVVJMIiwiaW5pdCIsImN0eCIsImNyZWF0ZUJveCIsInJvb3QiLCJib3hlcyIsImkiLCJib3giLCJ0aW1lIiwiZGVsYXkiLCJfaXRlcmF0b3JFcnJvciIsInMiLCJNYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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