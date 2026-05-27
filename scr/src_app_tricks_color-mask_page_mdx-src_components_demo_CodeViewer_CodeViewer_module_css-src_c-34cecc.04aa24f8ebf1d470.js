"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_tricks_color-mask_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-src_c-34cecc"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
31069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_3 = __webpack_require__(21278);
/* import */ var react__rspack_import_4 = __webpack_require__(96540);
/* import */ var react__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_4);
/* import */ var _tolokoban_ui__rspack_import_5 = __webpack_require__(62430);
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






function init(context, assets) {
    // #begin
    var invisible = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzanne
    });
    var cube = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context);
    cube.transfo.setScale(1.6);
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1,
        color: [
            0.3,
            0.2,
            0.1,
            1
        ]
    });
    var mask = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        color: true,
        children: [
            invisible
        ]
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.lessOrEqual,
        children: [
            mask,
            cube
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time) {
        invisible.transfo.setEulerRotation(0, time * 10, 0);
        cube.transfo.setPosition(2 * Math.cos(time), 0, 0);
        cube.transfo.setEulerRotation(time * 17.945, 0, 0);
    }));
    context.play();
    // #end
    return {
        setColor: function setColor(red, green, blue) {
            mask.color.red = red;
            mask.color.green = green;
            mask.color.blue = blue;
        }
    };
}
function Demo() {
    var _React_useState = _sliced_to_array(react__rspack_import_4_default().useState(true), 2), R = _React_useState[0], setR = _React_useState[1];
    var _React_useState1 = _sliced_to_array(react__rspack_import_4_default().useState(true), 2), G = _React_useState1[0], setG = _React_useState1[1];
    var _React_useState2 = _sliced_to_array(react__rspack_import_4_default().useState(true), 2), B = _React_useState2[0], setB = _React_useState2[1];
    var refController = react__rspack_import_4_default().useRef(null);
    var handleInit = function handleInit(context, assets) {
        refController.current = init(context, assets);
    };
    react__rspack_import_4_default().useEffect(function() {
        var ctrl = refController.current;
        if (!ctrl) return;
        ctrl.setColor(R, G, B);
    }, [
        R,
        G,
        B
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: handleInit,
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_3
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewPanel, {
            display: "flex",
            gap: "L",
            justifyContent: "center",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewSwitch, {
                    value: R,
                    onChange: setR,
                    children: "Red"
                }, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewSwitch, {
                    value: G,
                    onChange: setG,
                    children: "Green"
                }, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewSwitch, {
                    value: B,
                    onChange: setB,
                    children: "Blue"
                }, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
            lineNumber: 81,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}


},
94728(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _color_mask_demo__rspack_import_4 = __webpack_require__(31069);
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
    "Detail #1": "    const invisible = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzanne,\n    })\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.setScale(1.6)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0.3, 0.2, 0.1, 1],\n    })\n    const mask = new TgdPainterState(context, {\n        color: true,\n        children: [invisible],\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.lessOrEqual,\n            children: [mask, cube],\n        }),\n        new TgdPainterLogic((time) => {\n            invisible.transfo.setEulerRotation(0, time * 10, 0)\n            cube.transfo.setPosition(2 * Math.cos(time), 0, 0)\n            cube.transfo.setEulerRotation(time * 17.945, 0, 0)\n        }),\n    )\n    context.play()"
};
var FULL = "import {\n    TgdContext,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\nimport React from \"react\"\nimport { ViewPanel, ViewSwitch } from \"@tolokoban/ui\"\n\ninterface Controller {\n    setColor(red: boolean, green: boolean, blue: boolean): void\n}\n\nfunction init(context: TgdContext, assets: Assets): Controller {\n    const invisible = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzanne,\n    })\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.setScale(1.6)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0.3, 0.2, 0.1, 1],\n    })\n    const mask = new TgdPainterState(context, {\n        color: true,\n        children: [invisible],\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.lessOrEqual,\n            children: [mask, cube],\n        }),\n        new TgdPainterLogic((time) => {\n            invisible.transfo.setEulerRotation(0, time * 10, 0)\n            cube.transfo.setPosition(2 * Math.cos(time), 0, 0)\n            cube.transfo.setEulerRotation(time * 17.945, 0, 0)\n        }),\n    )\n    context.play()\n    return {\n        setColor(red: boolean, green: boolean, blue: boolean) {\n            mask.color.red = red\n            mask.color.green = green\n            mask.color.blue = blue\n        },\n    }\n}\n\nexport default function Demo() {\n    const [R, setR] = React.useState(true)\n    const [G, setG] = React.useState(true)\n    const [B, setB] = React.useState(true)\n    const refController = React.useRef<Controller | null>(null)\n    const handleInit = (context: TgdContext, assets: Assets) => {\n        refController.current = init(context, assets)\n    }\n    React.useEffect(() => {\n        const ctrl = refController.current\n        if (!ctrl) return\n\n        ctrl.setColor(R, G, B)\n    }, [R, G, B])\n\n    return (\n        <View\n            onReady={handleInit}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                },\n            }}>\n            <ViewPanel display=\"flex\" gap=\"L\" justifyContent=\"center\">\n                <ViewSwitch value={R} onChange={setR}>\n                    Red\n                </ViewSwitch>\n                <ViewSwitch value={G} onChange={setG}>\n                    Green\n                </ViewSwitch>\n                <ViewSwitch value={B} onChange={setB}>\n                    Blue\n                </ViewSwitch>\n            </ViewPanel>\n        </View>\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_color_mask_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
66884(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _color_mask_demo__rspack_import_1 = __webpack_require__(94728);
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
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Color Masking"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_color_mask_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "As you can see in this demo, we can mask out any color channel. When we render\nsuzanne, we can just fill the depth buffer, but change none of the pixels."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "As you will see in the next demo, this technique can be useful if you want to\nhave a rich (but fixed) environment in which you can move other meshes."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/tricks/color-mask/2",
                    children: "Next demo"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
                    lineNumber: 13,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX2NvbG9yLW1hc2tfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlX2Nzcy1zcmNfYy0zNGNlY2MuMDRhYTI0ZjhlYmYxZDQ3MC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdHJpY2tzL2NvbG9yLW1hc2svXy9jb2xvci1tYXNrLmRlbW8vY29sb3ItbWFzay5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9jb2xvci1tYXNrL18vY29sb3ItbWFzay5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9jb2xvci1tYXNrL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFRnZENvbnRleHQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3UGFuZWwsIFZpZXdTd2l0Y2ggfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmludGVyZmFjZSBDb250cm9sbGVyIHtcbiAgICBzZXRDb2xvcihyZWQ6IGJvb2xlYW4sIGdyZWVuOiBib29sZWFuLCBibHVlOiBib29sZWFuKTogdm9pZFxufVxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKTogQ29udHJvbGxlciB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29uc3QgaW52aXNpYmxlID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXG4gICAgfSlcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXG4gICAgY3ViZS50cmFuc2ZvLnNldFNjYWxlKDEuNilcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogMSxcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMiwgMC4xLCAxXSxcbiAgICB9KVxuICAgIGNvbnN0IG1hc2sgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IHRydWUsXG4gICAgICAgIGNoaWxkcmVuOiBbaW52aXNpYmxlXSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBjbGVhcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbWFzaywgY3ViZV0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG4gICAgICAgICAgICBpbnZpc2libGUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIHRpbWUgKiAxMCwgMClcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigyICogTWF0aC5jb3ModGltZSksIDAsIDApXG4gICAgICAgICAgICBjdWJlLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lICogMTcuOTQ1LCAwLCAwKVxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Q29sb3IocmVkOiBib29sZWFuLCBncmVlbjogYm9vbGVhbiwgYmx1ZTogYm9vbGVhbikge1xuICAgICAgICAgICAgbWFzay5jb2xvci5yZWQgPSByZWRcbiAgICAgICAgICAgIG1hc2suY29sb3IuZ3JlZW4gPSBncmVlblxuICAgICAgICAgICAgbWFzay5jb2xvci5ibHVlID0gYmx1ZVxuICAgICAgICB9LFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCBbUiwgc2V0Ul0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtHLCBzZXRHXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW0IsIHNldEJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCByZWZDb250cm9sbGVyID0gUmVhY3QudXNlUmVmPENvbnRyb2xsZXIgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IGhhbmRsZUluaXQgPSAoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcbiAgICAgICAgcmVmQ29udHJvbGxlci5jdXJyZW50ID0gaW5pdChjb250ZXh0LCBhc3NldHMpXG4gICAgfVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN0cmwgPSByZWZDb250cm9sbGVyLmN1cnJlbnRcbiAgICAgICAgaWYgKCFjdHJsKSByZXR1cm5cblxuICAgICAgICBjdHJsLnNldENvbG9yKFIsIEcsIEIpXG4gICAgfSwgW1IsIEcsIEJdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2hhbmRsZUluaXR9XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5uZTogU3V6YW5uZVVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIgZ2FwPVwiTFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2ggdmFsdWU9e1J9IG9uQ2hhbmdlPXtzZXRSfT5cbiAgICAgICAgICAgICAgICAgICAgUmVkXG4gICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXtHfSBvbkNoYW5nZT17c2V0R30+XG4gICAgICAgICAgICAgICAgICAgIEdyZWVuXG4gICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXtCfSBvbkNoYW5nZT17c2V0Qn0+XG4gICAgICAgICAgICAgICAgICAgIEJsdWVcbiAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgPC9WaWV3PlxuICAgIClcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9jb2xvci1tYXNrLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnN0IGludmlzaWJsZSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcXG4gICAgfSlcXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxcbiAgICBjdWJlLnRyYW5zZm8uc2V0U2NhbGUoMS42KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICBjb2xvcjogWzAuMywgMC4yLCAwLjEsIDFdLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXNrID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogdHJ1ZSxcXG4gICAgICAgIGNoaWxkcmVuOiBbaW52aXNpYmxlXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbWFzaywgY3ViZV0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBpbnZpc2libGUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIHRpbWUgKiAxMCwgMClcXG4gICAgICAgICAgICBjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oMiAqIE1hdGguY29zKHRpbWUpLCAwLCAwKVxcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUgKiAxNy45NDUsIDAsIDApXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIlxcbmltcG9ydCBSZWFjdCBmcm9tIFxcXCJyZWFjdFxcXCJcXG5pbXBvcnQgeyBWaWV3UGFuZWwsIFZpZXdTd2l0Y2ggfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3VpXFxcIlxcblxcbmludGVyZmFjZSBDb250cm9sbGVyIHtcXG4gICAgc2V0Q29sb3IocmVkOiBib29sZWFuLCBncmVlbjogYm9vbGVhbiwgYmx1ZTogYm9vbGVhbik6IHZvaWRcXG59XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cyk6IENvbnRyb2xsZXIge1xcbiAgICBjb25zdCBpbnZpc2libGUgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXFxuICAgIH0pXFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcXG4gICAgY3ViZS50cmFuc2ZvLnNldFNjYWxlKDEuNilcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMiwgMC4xLCAxXSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWFzayA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IHRydWUsXFxuICAgICAgICBjaGlsZHJlbjogW2ludmlzaWJsZV0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW21hc2ssIGN1YmVdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgaW52aXNpYmxlLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCB0aW1lICogMTAsIDApXFxuICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKDIgKiBNYXRoLmNvcyh0aW1lKSwgMCwgMClcXG4gICAgICAgICAgICBjdWJlLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lICogMTcuOTQ1LCAwLCAwKVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG4gICAgcmV0dXJuIHtcXG4gICAgICAgIHNldENvbG9yKHJlZDogYm9vbGVhbiwgZ3JlZW46IGJvb2xlYW4sIGJsdWU6IGJvb2xlYW4pIHtcXG4gICAgICAgICAgICBtYXNrLmNvbG9yLnJlZCA9IHJlZFxcbiAgICAgICAgICAgIG1hc2suY29sb3IuZ3JlZW4gPSBncmVlblxcbiAgICAgICAgICAgIG1hc2suY29sb3IuYmx1ZSA9IGJsdWVcXG4gICAgICAgIH0sXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgW1IsIHNldFJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcXG4gICAgY29uc3QgW0csIHNldEddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcXG4gICAgY29uc3QgW0IsIHNldEJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcXG4gICAgY29uc3QgcmVmQ29udHJvbGxlciA9IFJlYWN0LnVzZVJlZjxDb250cm9sbGVyIHwgbnVsbD4obnVsbClcXG4gICAgY29uc3QgaGFuZGxlSW5pdCA9IChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICAgICAgcmVmQ29udHJvbGxlci5jdXJyZW50ID0gaW5pdChjb250ZXh0LCBhc3NldHMpXFxuICAgIH1cXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcXG4gICAgICAgIGNvbnN0IGN0cmwgPSByZWZDb250cm9sbGVyLmN1cnJlbnRcXG4gICAgICAgIGlmICghY3RybCkgcmV0dXJuXFxuXFxuICAgICAgICBjdHJsLnNldENvbG9yKFIsIEcsIEIpXFxuICAgIH0sIFtSLCBHLCBCXSlcXG5cXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aGFuZGxlSW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICBzdXphbm5lOiBTdXphbm5lVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cXFwiZmxleFxcXCIgZ2FwPVxcXCJMXFxcIiBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2ggdmFsdWU9e1J9IG9uQ2hhbmdlPXtzZXRSfT5cXG4gICAgICAgICAgICAgICAgICAgIFJlZFxcbiAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XFxuICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXtHfSBvbkNoYW5nZT17c2V0R30+XFxuICAgICAgICAgICAgICAgICAgICBHcmVlblxcbiAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XFxuICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXtCfSBvbkNoYW5nZT17c2V0Qn0+XFxuICAgICAgICAgICAgICAgICAgICBCbHVlXFxuICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cXG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgIDwvVmlldz5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTdGF0ZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiU3V6YW5uZVVSTCIsIlJlYWN0IiwiVmlld1BhbmVsIiwiVmlld1N3aXRjaCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiaW52aXNpYmxlIiwiY3ViZSIsImNsZWFyIiwibWFzayIsInRpbWUiLCJNYXRoIiwic2V0Q29sb3IiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJEZW1vIiwiX1JlYWN0X3VzZVN0YXRlIiwiUiIsInNldFIiLCJfUmVhY3RfdXNlU3RhdGUxIiwiRyIsInNldEciLCJfUmVhY3RfdXNlU3RhdGUyIiwiQiIsInNldEIiLCJyZWZDb250cm9sbGVyIiwiaGFuZGxlSW5pdCIsImN0cmwiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXVCO0FBQzZCO0FBRUY7QUFDekI7QUFDNEI7QUFNckQsU0FBU1csS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUM3QyxTQUFTO0lBQ1QsSUFBTUMsWUFBWSxJQUFJWCxrREFBa0JBLENBQUNTLFNBQVM7UUFDOUMsT0FBT0MsT0FBTyxHQUFHLENBQUMsT0FBTztJQUM3QjtJQUNBLElBQU1FLE9BQU8sSUFBSWIsOENBQWNBLENBQUNVO0lBQ2hDRyxLQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDdEIsSUFBTUMsUUFBUSxJQUFJaEIsK0NBQWVBLENBQUNZLFNBQVM7UUFDdkMsT0FBTztRQUNQLE9BQU87WUFBQztZQUFLO1lBQUs7WUFBSztTQUFFO0lBQzdCO0lBQ0EsSUFBTUssT0FBTyxJQUFJYiwrQ0FBZUEsQ0FBQ1EsU0FBUztRQUN0QyxPQUFPO1FBQ1AsVUFBVTtZQUFDRTtTQUFVO0lBQ3pCO0lBQ0FGLFFBQVEsR0FBRyxDQUNQSSxPQUNBLElBQUlaLCtDQUFlQSxDQUFDUSxTQUFTO1FBQ3pCLE9BQU9QLDREQUE0QjtRQUNuQyxVQUFVO1lBQUNZO1lBQU1GO1NBQUs7SUFDMUIsSUFDQSxJQUFJZCwrQ0FBZUEsQ0FBQyxTQUFDaUI7UUFDakJKLFVBQVUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEdBQUdJLE9BQU8sSUFBSTtRQUNqREgsS0FBSyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUlJLEtBQUssR0FBRyxDQUFDRCxPQUFPLEdBQUc7UUFDaERILEtBQUssT0FBTyxDQUFDLGdCQUFnQixDQUFDRyxPQUFPLFFBQVEsR0FBRztJQUNwRDtJQUVKTixRQUFRLElBQUk7SUFDWixPQUFPO0lBQ1AsT0FBTztRQUNIUSxVQUFBQSxT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