"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_node_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-s-6604fb"], {
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
var FULL = "import {\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdGeometryBox,\n    TgdMaterialDiffuse,\n    TgdMaterialNormals,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterNode,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\nimport WoodURL from \"./wood.webp\"\n\nfunction init(ctx: TgdContext) {\n    ctx.camera.transfo.setPosition(0, -5, 0).distance = 30\n    new TgdControllerCameraOrbit(ctx)\n    const createBox = () =>\n        new TgdPainterNode({\n            transfo: {\n                position: [0, -1, 0],\n            },\n            children: [\n                new TgdPainterNode({\n                    transfo: {\n                        position: [0, -0.5, -0.5],\n                    },\n                    children: [\n                        new TgdPainterMesh(ctx, {\n                            geometry: new TgdGeometryBox(),\n                            material: new TgdMaterialDiffuse({\n                                color: new TgdTexture2D(ctx).loadBitmap(WoodURL, { generateMipmap: true }),\n                            }),\n                        }),\n                    ],\n                }),\n            ],\n        })\n    let root = createBox()\n    const boxes: TgdPainterNode[] = [root]\n    for (let i = 0; i < 31; i++) {\n        const box = createBox()\n        boxes.push(box)\n        box.add(root)\n        root = box\n    }\n    ctx.add(\n        new TgdPainterClear(ctx, { color: [0.2, 0.1, 0, 1], depth: 1 }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.less,\n            children: [root],\n        }),\n        new TgdPainterLogic((time, delay) => {\n            for (const box of boxes) {\n                box.transfo.orientation.reset()\n                const s = 0.95\n                box.transfo.setScale(s, s, s)\n                box.transfo.orbitAroundX((Math.abs(Math.sin(time)) * Math.PI * 2) / boxes.length)\n                box.transfo.orbitAroundY(\n                    (Math.sin(time * 1.1287) * Math.PI * 3 * (1 + Math.cos(time * 0.37243))) / boxes.length,\n                )\n            }\n            root.transfo.orbitAroundY(time * 0.5)\n        }),\n    )\n    ctx.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_node_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
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
        lineNumber: 75,
        columnNumber: 12
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9ub2RlX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jc3Mtcy02NjA0ZmIuNGIwMGM3YmVmODJjM2QyNS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9ub2RlL18vbm9kZS5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbm9kZS9fL25vZGUuZGVtby9ub2RlLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9ub2RlL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbm9kZS5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjdHguY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgLTUsIDApLmRpc3RhbmNlID0gMzBcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgpXFxuICAgIGNvbnN0IGNyZWF0ZUJveCA9ICgpID0+XFxuICAgICAgICBuZXcgVGdkUGFpbnRlck5vZGUoe1xcbiAgICAgICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFswLCAtMSwgMF0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlck5vZGUoe1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmbzoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwgLTAuNSwgLTAuNV0sXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2goY3R4LCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG5ldyBUZ2RUZXh0dXJlMkQoY3R4KS5sb2FkQml0bWFwKFdvb2RVUkwsIHsgZ2VuZXJhdGVNaXBtYXA6IHRydWUgfSksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0pXFxuICAgIGxldCByb290ID0gY3JlYXRlQm94KClcXG4gICAgY29uc3QgYm94ZXM6IFRnZFBhaW50ZXJOb2RlW10gPSBbcm9vdF1cXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMTsgaSsrKSB7XFxuICAgICAgICBjb25zdCBib3ggPSBjcmVhdGVCb3goKVxcbiAgICAgICAgYm94ZXMucHVzaChib3gpXFxuICAgICAgICBib3guYWRkKHJvb3QpXFxuICAgICAgICByb290ID0gYm94XFxuICAgIH1cXG4gICAgY3R4LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3Jvb3RdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWxheSkgPT4ge1xcbiAgICAgICAgICAgIGZvciAoY29uc3QgYm94IG9mIGJveGVzKSB7XFxuICAgICAgICAgICAgICAgIGJveC50cmFuc2ZvLm9yaWVudGF0aW9uLnJlc2V0KClcXG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IDAuOTVcXG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8uc2V0U2NhbGUocywgcywgcylcXG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JiaXRBcm91bmRYKChNYXRoLmFicyhNYXRoLnNpbih0aW1lKSkgKiBNYXRoLlBJICogMikgLyBib3hlcy5sZW5ndGgpXFxuICAgICAgICAgICAgICAgIGJveC50cmFuc2ZvLm9yYml0QXJvdW5kWShcXG4gICAgICAgICAgICAgICAgICAgIChNYXRoLnNpbih0aW1lICogMS4xMjg3KSAqIE1hdGguUEkgKiAzICogKDEgKyBNYXRoLmNvcyh0aW1lICogMC4zNzI0MykpKSAvIGJveGVzLmxlbmd0aCxcXG4gICAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICByb290LnRyYW5zZm8ub3JiaXRBcm91bmRZKHRpbWUgKiAwLjUpXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjdHgucGxheSgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZEdlb21ldHJ5Qm94LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZE1hdGVyaWFsTm9ybWFscyxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyTm9kZSxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuaW1wb3J0IFdvb2RVUkwgZnJvbSBcXFwiLi93b29kLndlYnBcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcXG4gICAgY3R4LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIC01LCAwKS5kaXN0YW5jZSA9IDMwXFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4KVxcbiAgICBjb25zdCBjcmVhdGVCb3ggPSAoKSA9PlxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG4gICAgICAgICAgICB0cmFuc2ZvOiB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwgLTEsIDBdLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogWzAsIC0wLjUsIC0wLjVdLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVGV4dHVyZTJEKGN0eCkubG9hZEJpdG1hcChXb29kVVJMLCB7IGdlbmVyYXRlTWlwbWFwOiB0cnVlIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9KVxcbiAgICBsZXQgcm9vdCA9IGNyZWF0ZUJveCgpXFxuICAgIGNvbnN0IGJveGVzOiBUZ2RQYWludGVyTm9kZVtdID0gW3Jvb3RdXFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzE7IGkrKykge1xcbiAgICAgICAgY29uc3QgYm94ID0gY3JlYXRlQm94KClcXG4gICAgICAgIGJveGVzLnB1c2goYm94KVxcbiAgICAgICAgYm94LmFkZChyb290KVxcbiAgICAgICAgcm9vdCA9IGJveFxcbiAgICB9XFxuICAgIGN0eC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuMiwgMC4xLCAwLCAxXSwgZGVwdGg6IDEgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtyb290XSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsYXkpID0+IHtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJveCBvZiBib3hlcykge1xcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5vcmllbnRhdGlvbi5yZXNldCgpXFxuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSAwLjk1XFxuICAgICAgICAgICAgICAgIGJveC50cmFuc2ZvLnNldFNjYWxlKHMsIHMsIHMpXFxuICAgICAgICAgICAgICAgIGJveC50cmFuc2ZvLm9yYml0QXJvdW5kWCgoTWF0aC5hYnMoTWF0aC5zaW4odGltZSkpICogTWF0aC5QSSAqIDIpIC8gYm94ZXMubGVuZ3RoKVxcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFkoXFxuICAgICAgICAgICAgICAgICAgICAoTWF0aC5zaW4odGltZSAqIDEuMTI4NykgKiBNYXRoLlBJICogMyAqICgxICsgTWF0aC5jb3ModGltZSAqIDAuMzcyNDMpKSkgLyBib3hlcy5sZW5ndGgsXFxuICAgICAgICAgICAgICAgIClcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcm9vdC50cmFuc2ZvLm9yYml0QXJvdW5kWSh0aW1lICogMC41KVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY3R4LnBsYXkoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz5cXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgVGdkR2VvbWV0cnlCb3gsXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxuICAgIFRnZE1hdGVyaWFsTm9ybWFscyxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJOb2RlLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IFdvb2RVUkwgZnJvbSBcIi4vd29vZC53ZWJwXCJcblxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjdHguY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgLTUsIDApLmRpc3RhbmNlID0gMzBcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eClcbiAgICBjb25zdCBjcmVhdGVCb3ggPSAoKSA9PlxuICAgICAgICBuZXcgVGdkUGFpbnRlck5vZGUoe1xuICAgICAgICAgICAgdHJhbnNmbzoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwgLTEsIDBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJOb2RlKHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFswLCAtMC41LCAtMC41XSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFRleHR1cmUyRChjdHgpLmxvYWRCaXRtYXAoV29vZFVSTCwgeyBnZW5lcmF0ZU1pcG1hcDogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICBsZXQgcm9vdCA9IGNyZWF0ZUJveCgpXG4gICAgY29uc3QgYm94ZXM6IFRnZFBhaW50ZXJOb2RlW10gPSBbcm9vdF1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMxOyBpKyspIHtcbiAgICAgICAgY29uc3QgYm94ID0gY3JlYXRlQm94KClcbiAgICAgICAgYm94ZXMucHVzaChib3gpXG4gICAgICAgIGJveC5hZGQocm9vdClcbiAgICAgICAgcm9vdCA9IGJveFxuICAgIH1cbiAgICBjdHguYWRkKFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuMiwgMC4xLCAwLCAxXSwgZGVwdGg6IDEgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtyb290XSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbGF5KSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJveCBvZiBib3hlcykge1xuICAgICAgICAgICAgICAgIGJveC50cmFuc2ZvLm9yaWVudGF0aW9uLnJlc2V0KClcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gMC45NVxuICAgICAgICAgICAgICAgIGJveC50cmFuc2ZvLnNldFNjYWxlKHMsIHMsIHMpXG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JiaXRBcm91bmRYKChNYXRoLmFicyhNYXRoLnNpbih0aW1lKSkgKiBNYXRoLlBJICogMikgLyBib3hlcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JiaXRBcm91bmRZKFxuICAgICAgICAgICAgICAgICAgICAoTWF0aC5zaW4odGltZSAqIDEuMTI4NykgKiBNYXRoLlBJICogMyAqICgxICsgTWF0aC5jb3ModGltZSAqIDAuMzcyNDMpKSkgLyBib3hlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm9vdC50cmFuc2ZvLm9yYml0QXJvdW5kWSh0aW1lICogMC41KVxuICAgICAgICB9KSxcbiAgICApXG4gICAgY3R4LnBsYXkoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz5cbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkR2VvbWV0cnlCb3giLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJOb2RlIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJXb29kVVJMIiwiaW5pdCIsImN0eCIsImNyZWF0ZUJveCIsInJvb3QiLCJib3hlcyIsImkiLCJib3giLCJ0aW1lIiwiZGVsYXkiLCJfaXRlcmF0b3JFcnJvciIsInMiLCJNYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUFxMUQ7QUFDaDNELElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7Ozs7Ozs7Ozs7Ozs7QUNYdUI7QUFDaUI7QUFDUDtBQUVqQyxTQUFTbUIsS0FBS0MsR0FBZTtJQUN6QixTQUFTO0lBQ1RBLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxRQUFRLEdBQUc7SUFDcEQsSUFBSWIsd0RBQXdCQSxDQUFDYTtJQUM3QixJQUFNQyxZQUFZO2VBQ2QsSUFBSVIsOENBQWNBLENBQUM7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