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
var FULL = "import {\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdGeometryBox,\n    TgdMaterialDiffuse,\n    TgdMaterialNormals,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterNode,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\nimport WoodURL from \"./wood.webp\"\n\nfunction init(ctx: TgdContext) {\n    ctx.camera.transfo.setPosition(0, -5, 0).distance = 30\n    new TgdControllerCameraOrbit(ctx)\n    const createBox = () =>\n        new TgdPainterNode({\n            transfo: {\n                position: [0, -1, 0],\n            },\n            children: [\n                new TgdPainterNode({\n                    transfo: {\n                        position: [0, -0.5, -0.5],\n                    },\n                    children: [\n                        new TgdPainterMesh(ctx, {\n                            geometry: new TgdGeometryBox(),\n                            material: new TgdMaterialDiffuse({\n                                color: new TgdTexture2D(ctx).loadBitmap(WoodURL, { generateMipmap: true }),\n                            }),\n                        }),\n                    ],\n                }),\n            ],\n        })\n    let root = createBox()\n    const boxes: TgdPainterNode[] = [root]\n    for (let i = 0; i < 31; i++) {\n        const box = createBox()\n        boxes.push(box)\n        box.add(root)\n        root = box\n    }\n    ctx.add(\n        new TgdPainterClear(ctx, { color: [0.2, 0.1, 0, 1], depth: 1 }),\n        new TgdPainterState(ctx, {\n            depth: webglPresetDepth.less,\n            children: [root],\n        }),\n        new TgdPainterLogic((time, delay) => {\n            for (const box of boxes) {\n                box.transfo.orientation.reset()\n                const s = 0.95\n                box.transfo.setScale(s, s, s)\n                box.transfo.orbitAroundX((Math.abs(Math.sin(time)) * Math.PI * 2) / boxes.length)\n                box.transfo.orbitAroundY(\n                    (Math.sin(time * 1.1287) * Math.PI * 3 * (1 + Math.cos(time * 0.37243))) / boxes.length,\n                )\n            }\n            root.transfo.orbitAroundY(time * 0.5)\n        }),\n    )\n    ctx.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_node_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/node/_/node.demo/node.demo.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9ub2RlX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jc3Mtcy00Yjk1ZTguN2UxODg0NDA3Nzc4NjYwMi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL25vZGUvXy9ub2RlLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL25vZGUvXy9ub2RlLmRlbW8vbm9kZS5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9ub2RlL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9ub2RlLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGN0eC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAtNSwgMCkuZGlzdGFuY2UgPSAzMFxcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eClcXG4gICAgY29uc3QgY3JlYXRlQm94ID0gKCkgPT5cXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuICAgICAgICAgICAgdHJhbnNmbzoge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogWzAsIC0xLCAwXSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFswLCAtMC41LCAtMC41XSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCgpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFRleHR1cmUyRChjdHgpLmxvYWRCaXRtYXAoV29vZFVSTCwgeyBnZW5lcmF0ZU1pcG1hcDogdHJ1ZSB9KSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSlcXG4gICAgbGV0IHJvb3QgPSBjcmVhdGVCb3goKVxcbiAgICBjb25zdCBib3hlczogVGdkUGFpbnRlck5vZGVbXSA9IFtyb290XVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMxOyBpKyspIHtcXG4gICAgICAgIGNvbnN0IGJveCA9IGNyZWF0ZUJveCgpXFxuICAgICAgICBib3hlcy5wdXNoKGJveClcXG4gICAgICAgIGJveC5hZGQocm9vdClcXG4gICAgICAgIHJvb3QgPSBib3hcXG4gICAgfVxcbiAgICBjdHguYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLjIsIDAuMSwgMCwgMV0sIGRlcHRoOiAxIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbcm9vdF0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbGF5KSA9PiB7XFxuICAgICAgICAgICAgZm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcXG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JpZW50YXRpb24ucmVzZXQoKVxcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gMC45NVxcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5zZXRTY2FsZShzLCBzLCBzKVxcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFgoKE1hdGguYWJzKE1hdGguc2luKHRpbWUpKSAqIE1hdGguUEkgKiAyKSAvIGJveGVzLmxlbmd0aClcXG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JiaXRBcm91bmRZKFxcbiAgICAgICAgICAgICAgICAgICAgKE1hdGguc2luKHRpbWUgKiAxLjEyODcpICogTWF0aC5QSSAqIDMgKiAoMSArIE1hdGguY29zKHRpbWUgKiAwLjM3MjQzKSkpIC8gYm94ZXMubGVuZ3RoLFxcbiAgICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJvb3QudHJhbnNmby5vcmJpdEFyb3VuZFkodGltZSAqIDAuNSlcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGN0eC5wbGF5KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gICAgVGdkR2VvbWV0cnlCb3gsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkTWF0ZXJpYWxOb3JtYWxzLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJOb2RlLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgV29vZFVSTCBmcm9tIFxcXCIuL3dvb2Qud2VicFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCkge1xcbiAgICBjdHguY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgLTUsIDApLmRpc3RhbmNlID0gMzBcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgpXFxuICAgIGNvbnN0IGNyZWF0ZUJveCA9ICgpID0+XFxuICAgICAgICBuZXcgVGdkUGFpbnRlck5vZGUoe1xcbiAgICAgICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFswLCAtMSwgMF0sXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlck5vZGUoe1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmbzoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwgLTAuNSwgLTAuNV0sXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2goY3R4LCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG5ldyBUZ2RUZXh0dXJlMkQoY3R4KS5sb2FkQml0bWFwKFdvb2RVUkwsIHsgZ2VuZXJhdGVNaXBtYXA6IHRydWUgfSksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0pXFxuICAgIGxldCByb290ID0gY3JlYXRlQm94KClcXG4gICAgY29uc3QgYm94ZXM6IFRnZFBhaW50ZXJOb2RlW10gPSBbcm9vdF1cXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMTsgaSsrKSB7XFxuICAgICAgICBjb25zdCBib3ggPSBjcmVhdGVCb3goKVxcbiAgICAgICAgYm94ZXMucHVzaChib3gpXFxuICAgICAgICBib3guYWRkKHJvb3QpXFxuICAgICAgICByb290ID0gYm94XFxuICAgIH1cXG4gICAgY3R4LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3Jvb3RdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWxheSkgPT4ge1xcbiAgICAgICAgICAgIGZvciAoY29uc3QgYm94IG9mIGJveGVzKSB7XFxuICAgICAgICAgICAgICAgIGJveC50cmFuc2ZvLm9yaWVudGF0aW9uLnJlc2V0KClcXG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IDAuOTVcXG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8uc2V0U2NhbGUocywgcywgcylcXG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JiaXRBcm91bmRYKChNYXRoLmFicyhNYXRoLnNpbih0aW1lKSkgKiBNYXRoLlBJICogMikgLyBib3hlcy5sZW5ndGgpXFxuICAgICAgICAgICAgICAgIGJveC50cmFuc2ZvLm9yYml0QXJvdW5kWShcXG4gICAgICAgICAgICAgICAgICAgIChNYXRoLnNpbih0aW1lICogMS4xMjg3KSAqIE1hdGguUEkgKiAzICogKDEgKyBNYXRoLmNvcyh0aW1lICogMC4zNzI0MykpKSAvIGJveGVzLmxlbmd0aCxcXG4gICAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICByb290LnRyYW5zZm8ub3JiaXRBcm91bmRZKHRpbWUgKiAwLjUpXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjdHgucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPlxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RHZW9tZXRyeUJveCxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkTWF0ZXJpYWxOb3JtYWxzLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTG9naWMsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlck5vZGUsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQgV29vZFVSTCBmcm9tIFwiLi93b29kLndlYnBcIlxuXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCkge1xuICAgIC8vICNiZWdpblxuICAgIGN0eC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAtNSwgMCkuZGlzdGFuY2UgPSAzMFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4KVxuICAgIGNvbnN0IGNyZWF0ZUJveCA9ICgpID0+XG4gICAgICAgIG5ldyBUZ2RQYWludGVyTm9kZSh7XG4gICAgICAgICAgICB0cmFuc2ZvOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFswLCAtMSwgMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlck5vZGUoe1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogWzAsIC0wLjUsIC0wLjVdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVGV4dHVyZTJEKGN0eCkubG9hZEJpdG1hcChXb29kVVJMLCB7IGdlbmVyYXRlTWlwbWFwOiB0cnVlIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgIGxldCByb290ID0gY3JlYXRlQm94KClcbiAgICBjb25zdCBib3hlczogVGdkUGFpbnRlck5vZGVbXSA9IFtyb290XVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzE7IGkrKykge1xuICAgICAgICBjb25zdCBib3ggPSBjcmVhdGVCb3goKVxuICAgICAgICBib3hlcy5wdXNoKGJveClcbiAgICAgICAgYm94LmFkZChyb290KVxuICAgICAgICByb290ID0gYm94XG4gICAgfVxuICAgIGN0eC5hZGQoXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLCBkZXB0aDogMSB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3Jvb3RdLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsYXkpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYm94IG9mIGJveGVzKSB7XG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JpZW50YXRpb24ucmVzZXQoKVxuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSAwLjk1XG4gICAgICAgICAgICAgICAgYm94LnRyYW5zZm8uc2V0U2NhbGUocywgcywgcylcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFgoKE1hdGguYWJzKE1hdGguc2luKHRpbWUpKSAqIE1hdGguUEkgKiAyKSAvIGJveGVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFkoXG4gICAgICAgICAgICAgICAgICAgIChNYXRoLnNpbih0aW1lICogMS4xMjg3KSAqIE1hdGguUEkgKiAzICogKDEgKyBNYXRoLmNvcyh0aW1lICogMC4zNzI0MykpKSAvIGJveGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb290LnRyYW5zZm8ub3JiaXRBcm91bmRZKHRpbWUgKiAwLjUpXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjdHgucGxheSgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPlxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2RHZW9tZXRyeUJveCIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlck5vZGUiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIldvb2RVUkwiLCJpbml0IiwiY3R4IiwiY3JlYXRlQm94Iiwicm9vdCIsImJveGVzIiwiaSIsImJveCIsInRpbWUiLCJkZWxheSIsIl9pdGVyYXRvckVycm9yIiwicyIsIk1hdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQXExRDtBQUNoM0QsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osc0NBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUd0QyxrREFBQ04sdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FBT00sT0FBT0gsT0FBT0Q7Ozs7Ozs7Ozs7Ozs7O0FBRzVEOzs7Ozs7Ozs7Ozs7OztBQ1h1QjtBQUNpQjtBQUNQO0FBRWpDLFNBQVNtQixLQUFLQyxHQUFlO0lBQ3pCLFNBQVM7SUFDVEEsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBRztJQUNwRCxJQUFJYix3REFBd0JBLENBQUNhO0lBQzdCLElBQU1DLFlBQVk7ZUFDZCxJQUFJUiw4Q0FBY0EsQ0FBQztZQUNm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