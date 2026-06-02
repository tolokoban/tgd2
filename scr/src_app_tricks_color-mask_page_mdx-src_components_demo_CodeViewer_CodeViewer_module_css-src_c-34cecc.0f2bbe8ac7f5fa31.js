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
                    lineNumber: 83,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewSwitch, {
                    value: G,
                    onChange: setG,
                    children: "Green"
                }, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
                    lineNumber: 86,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewSwitch, {
                    value: B,
                    onChange: setB,
                    children: "Blue"
                }, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
                    lineNumber: 89,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
            lineNumber: 82,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
        lineNumber: 74,
        columnNumber: 3
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
var FULL = 'import {\n    type TgdContext,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport SuzanneURL from "@/assets/mesh/suzanne.glb"\nimport React from "react"\nimport { ViewPanel, ViewSwitch } from "@tolokoban/ui"\n\ninterface Controller {\n    setColor(red: boolean, green: boolean, blue: boolean): void\n}\n\nfunction init(context: TgdContext, assets: Assets): Controller {\n    const invisible = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzanne,\n    })\n    const cube = new TgdPainterMesh(context)\n    cube.transfo.setScale(1.6)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0.3, 0.2, 0.1, 1],\n    })\n    const mask = new TgdPainterState(context, {\n        color: true,\n        children: [invisible],\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.lessOrEqual,\n            children: [mask, cube],\n        }),\n        new TgdPainterLogic((time) => {\n            invisible.transfo.setEulerRotation(0, time * 10, 0)\n            cube.transfo.setPosition(2 * Math.cos(time), 0, 0)\n            cube.transfo.setEulerRotation(time * 17.945, 0, 0)\n        }),\n    )\n    context.play()\n    return {\n        setColor(red: boolean, green: boolean, blue: boolean) {\n            mask.color.red = red\n            mask.color.green = green\n            mask.color.blue = blue\n        },\n    }\n}\n\nexport default function Demo() {\n    const [R, setR] = React.useState(true)\n    const [G, setG] = React.useState(true)\n    const [B, setB] = React.useState(true)\n    const refController = React.useRef<Controller | null>(null)\n    const handleInit = (context: TgdContext, assets: Assets) => {\n        refController.current = init(context, assets)\n    }\n    React.useEffect(() => {\n        const ctrl = refController.current\n        if (!ctrl) return\n\n        ctrl.setColor(R, G, B)\n    }, [R, G, B])\n\n    return (\n        <View\n            onReady={handleInit}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                },\n            }}>\n            <ViewPanel display="flex" gap="L" justifyContent="center">\n                <ViewSwitch value={R} onChange={setR}>\n                    Red\n                </ViewSwitch>\n                <ViewSwitch value={G} onChange={setG}>\n                    Green\n                </ViewSwitch>\n                <ViewSwitch value={B} onChange={setB}>\n                    Blue\n                </ViewSwitch>\n            </ViewPanel>\n        </View>\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_color_mask_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX2NvbG9yLW1hc2tfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlX2Nzcy1zcmNfYy0zNGNlY2MuMGYyYmJlOGFjN2Y1ZmEzMS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdHJpY2tzL2NvbG9yLW1hc2svXy9jb2xvci1tYXNrLmRlbW8vY29sb3ItbWFzay5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9jb2xvci1tYXNrL18vY29sb3ItbWFzay5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9jb2xvci1tYXNrL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlckxvZ2ljLFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlck1lc2hHbHRmLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3UGFuZWwsIFZpZXdTd2l0Y2ggfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuXG5pbnRlcmZhY2UgQ29udHJvbGxlciB7XG5cdHNldENvbG9yKHJlZDogYm9vbGVhbiwgZ3JlZW46IGJvb2xlYW4sIGJsdWU6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKTogQ29udHJvbGxlciB7XG5cdC8vICNiZWdpblxuXHRjb25zdCBpbnZpc2libGUgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcblx0XHRhc3NldDogYXNzZXRzLmdsYi5zdXphbm5lLFxuXHR9KTtcblx0Y29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KTtcblx0Y3ViZS50cmFuc2ZvLnNldFNjYWxlKDEuNik7XG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IDEsXG5cdFx0Y29sb3I6IFswLjMsIDAuMiwgMC4xLCAxXSxcblx0fSk7XG5cdGNvbnN0IG1hc2sgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRjb2xvcjogdHJ1ZSxcblx0XHRjaGlsZHJlbjogW2ludmlzaWJsZV0sXG5cdH0pO1xuXHRjb250ZXh0LmFkZChcblx0XHRjbGVhcixcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxuXHRcdFx0Y2hpbGRyZW46IFttYXNrLCBjdWJlXSxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG5cdFx0XHRpbnZpc2libGUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIHRpbWUgKiAxMCwgMCk7XG5cdFx0XHRjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oMiAqIE1hdGguY29zKHRpbWUpLCAwLCAwKTtcblx0XHRcdGN1YmUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUgKiAxNy45NDUsIDAsIDApO1xuXHRcdH0pLFxuXHQpO1xuXHRjb250ZXh0LnBsYXkoKTtcblx0Ly8gI2VuZFxuXHRyZXR1cm4ge1xuXHRcdHNldENvbG9yKHJlZDogYm9vbGVhbiwgZ3JlZW46IGJvb2xlYW4sIGJsdWU6IGJvb2xlYW4pIHtcblx0XHRcdG1hc2suY29sb3IucmVkID0gcmVkO1xuXHRcdFx0bWFzay5jb2xvci5ncmVlbiA9IGdyZWVuO1xuXHRcdFx0bWFzay5jb2xvci5ibHVlID0gYmx1ZTtcblx0XHR9LFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRjb25zdCBbUiwgc2V0Ul0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgW0csIHNldEddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFtCLCBzZXRCXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCByZWZDb250cm9sbGVyID0gUmVhY3QudXNlUmVmPENvbnRyb2xsZXIgfCBudWxsPihudWxsKTtcblx0Y29uc3QgaGFuZGxlSW5pdCA9IChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuXHRcdHJlZkNvbnRyb2xsZXIuY3VycmVudCA9IGluaXQoY29udGV4dCwgYXNzZXRzKTtcblx0fTtcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBjdHJsID0gcmVmQ29udHJvbGxlci5jdXJyZW50O1xuXHRcdGlmICghY3RybCkgcmV0dXJuO1xuXG5cdFx0Y3RybC5zZXRDb2xvcihSLCBHLCBCKTtcblx0fSwgW1IsIEcsIEJdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtoYW5kbGVJbml0fVxuXHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdGdsYjoge1xuXHRcdFx0XHRcdHN1emFubmU6IFN1emFubmVVUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBnYXA9XCJMXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cblx0XHRcdFx0PFZpZXdTd2l0Y2ggdmFsdWU9e1J9IG9uQ2hhbmdlPXtzZXRSfT5cblx0XHRcdFx0XHRSZWRcblx0XHRcdFx0PC9WaWV3U3dpdGNoPlxuXHRcdFx0XHQ8Vmlld1N3aXRjaCB2YWx1ZT17R30gb25DaGFuZ2U9e3NldEd9PlxuXHRcdFx0XHRcdEdyZWVuXG5cdFx0XHRcdDwvVmlld1N3aXRjaD5cblx0XHRcdFx0PFZpZXdTd2l0Y2ggdmFsdWU9e0J9IG9uQ2hhbmdlPXtzZXRCfT5cblx0XHRcdFx0XHRCbHVlXG5cdFx0XHRcdDwvVmlld1N3aXRjaD5cblx0XHRcdDwvVmlld1BhbmVsPlxuXHRcdDwvVmlldz5cblx0KTtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9jb2xvci1tYXNrLmRlbW9cIjtcblxuY29uc3QgRk9DVVMgPSB7XG5cdFwiRGV0YWlsICMxXCI6XG5cdFx0XCIgICAgY29uc3QgaW52aXNpYmxlID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbm5lLFxcbiAgICB9KVxcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXFxuICAgIGN1YmUudHJhbnNmby5zZXRTY2FsZSgxLjYpXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjIsIDAuMSwgMV0sXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hc2sgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiB0cnVlLFxcbiAgICAgICAgY2hpbGRyZW46IFtpbnZpc2libGVdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFttYXNrLCBjdWJlXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGludmlzaWJsZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgdGltZSAqIDEwLCAwKVxcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigyICogTWF0aC5jb3ModGltZSksIDAsIDApXFxuICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSAqIDE3Ljk0NSwgMCwgMClcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXCIsXG59O1xuY29uc3QgRlVMTCA9XG5cdCdpbXBvcnQge1xcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXFxuXFxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxcbmltcG9ydCB7IFZpZXdQYW5lbCwgVmlld1N3aXRjaCB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcXG5cXG5pbnRlcmZhY2UgQ29udHJvbGxlciB7XFxuICAgIHNldENvbG9yKHJlZDogYm9vbGVhbiwgZ3JlZW46IGJvb2xlYW4sIGJsdWU6IGJvb2xlYW4pOiB2b2lkXFxufVxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpOiBDb250cm9sbGVyIHtcXG4gICAgY29uc3QgaW52aXNpYmxlID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbm5lLFxcbiAgICB9KVxcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXFxuICAgIGN1YmUudHJhbnNmby5zZXRTY2FsZSgxLjYpXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjIsIDAuMSwgMV0sXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hc2sgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiB0cnVlLFxcbiAgICAgICAgY2hpbGRyZW46IFtpbnZpc2libGVdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFttYXNrLCBjdWJlXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGludmlzaWJsZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgdGltZSAqIDEwLCAwKVxcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigyICogTWF0aC5jb3ModGltZSksIDAsIDApXFxuICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSAqIDE3Ljk0NSwgMCwgMClcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIHJldHVybiB7XFxuICAgICAgICBzZXRDb2xvcihyZWQ6IGJvb2xlYW4sIGdyZWVuOiBib29sZWFuLCBibHVlOiBib29sZWFuKSB7XFxuICAgICAgICAgICAgbWFzay5jb2xvci5yZWQgPSByZWRcXG4gICAgICAgICAgICBtYXNrLmNvbG9yLmdyZWVuID0gZ3JlZW5cXG4gICAgICAgICAgICBtYXNrLmNvbG9yLmJsdWUgPSBibHVlXFxuICAgICAgICB9LFxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIGNvbnN0IFtSLCBzZXRSXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXFxuICAgIGNvbnN0IFtHLCBzZXRHXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXFxuICAgIGNvbnN0IFtCLCBzZXRCXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXFxuICAgIGNvbnN0IHJlZkNvbnRyb2xsZXIgPSBSZWFjdC51c2VSZWY8Q29udHJvbGxlciB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IGhhbmRsZUluaXQgPSAoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG4gICAgICAgIHJlZkNvbnRyb2xsZXIuY3VycmVudCA9IGluaXQoY29udGV4dCwgYXNzZXRzKVxcbiAgICB9XFxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XFxuICAgICAgICBjb25zdCBjdHJsID0gcmVmQ29udHJvbGxlci5jdXJyZW50XFxuICAgICAgICBpZiAoIWN0cmwpIHJldHVyblxcblxcbiAgICAgICAgY3RybC5zZXRDb2xvcihSLCBHLCBCKVxcbiAgICB9LCBbUiwgRywgQl0pXFxuXFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2hhbmRsZUluaXR9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGdsYjoge1xcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5uZTogU3V6YW5uZVVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIgZ2FwPVwiTFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XFxuICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXtSfSBvbkNoYW5nZT17c2V0Un0+XFxuICAgICAgICAgICAgICAgICAgICBSZWRcXG4gICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxcbiAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaCB2YWx1ZT17R30gb25DaGFuZ2U9e3NldEd9PlxcbiAgICAgICAgICAgICAgICAgICAgR3JlZW5cXG4gICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxcbiAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaCB2YWx1ZT17Qn0gb25DaGFuZ2U9e3NldEJ9PlxcbiAgICAgICAgICAgICAgICAgICAgQmx1ZVxcbiAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XFxuICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICA8L1ZpZXc+XFxuICAgIClcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJTdXphbm5lVVJMIiwiUmVhY3QiLCJWaWV3UGFuZWwiLCJWaWV3U3dpdGNoIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJpbnZpc2libGUiLCJjdWJlIiwiY2xlYXIiLCJtYXNrIiwidGltZSIsIk1hdGgiLCJzZXRDb2xvciIsInJlZCIsImdyZWVuIiwiYmx1ZSIsIkRlbW8iLCJfUmVhY3RfdXNlU3RhdGUiLCJSIiwic2V0UiIsIl9SZWFjdF91c2VTdGF0ZTEiLCJHIiwic2V0RyIsIl9SZWFjdF91c2VTdGF0ZTIiLCJCIiwic2V0QiIsInJlZkNvbnRyb2xsZXIiLCJoYW5kbGVJbml0IiwiY3RybCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRd0I7QUFDa0M7QUFFUDtBQUN6QjtBQUM0QjtBQU10RCxTQUFTVyxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQ2hELFNBQVM7SUFDVCxJQUFNQyxZQUFZLElBQUlYLGtEQUFrQkEsQ0FBQ1MsU0FBUztRQUNqRCxPQUFPQyxPQUFPLEdBQUcsQ0FBQyxPQUFPO0lBQzFCO0lBQ0EsSUFBTUUsT0FBTyxJQUFJYiw4Q0FBY0EsQ0FBQ1U7SUFDaENHLEtBQUssT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUN0QixJQUFNQyxRQUFRLElBQUloQiwrQ0FBZUEsQ0FBQ1ksU0FBUztRQUMxQyxPQUFPO1FBQ1AsT0FBTztZQUFDO1lBQUs7WUFBSztZQUFLO1NBQUU7SUFDMUI7SUFDQSxJQUFNSyxPQUFPLElBQUliLCtDQUFlQSxDQUFDUSxTQUFTO1FBQ3pDLE9BQU87UUFDUCxVQUFVO1lBQUNFO1NBQVU7SUFDdEI7SUFDQUYsUUFBUSxHQUFHLENBQ1ZJLE9BQ0EsSUFBSVosK0NBQWVBLENBQUNRLFNBQVM7UUFDNUIsT0FBT1AsNERBQTRCO1FBQ25DLFVBQVU7WUFBQ1k7WUFBTUY7U0FBSztJQUN2QixJQUNBLElBQUlkLCtDQUFlQSxDQUFDLFNBQUNpQjtRQUNwQkosVUFBVSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBR0ksT0FBTyxJQUFJO1FBQ2pESCxLQUFLLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSUksS0FBSyxHQUFHLENBQUNELE9BQU8sR0FBRztRQUNoREgsS0FBSyxPQUFPLENBQUMsZ0JBQWdCLENBQUNHLE9BQU8sUUFBUSxHQUFHO0lBQ2pEO0lBRUROLFFBQVEsSUFBSTtJQUNaLE9BQU87SUFDUCxPQUFPO1FBQ05RLFVBQUFBLFNBQUFBLFNBQVNDLEdBQVksRUFBRUMsS0FBYyxFQUFFQyxJQUFhO1lBQ25ETixLQUFLLEtBQUssQ0FBQyxHQUFHLEdBQUdJO1lBQ2pCSixLQUFLLEtBQUssQ0FBQyxLQUFLLEdBQUdLO1lBQ25CTCxLQUFLLEtBQUssQ0FBQyxJQUFJLEdBQUdNO1FBQ25CO0lBQ0Q7QUFDRDtBQUVlLFNBQVNDO0lBQ3ZCLElBQWtCQyxtQ0FBQUEseUNBQWMsQ0FBQyxXQUExQkMsSUFBV0Qsb0JBQVJFLE9BQVFGO0lBQ2xCLElBQWtCRyxvQ0FBQUEseUNBQWMsQ0FBQyxXQUExQkMsSUFBV0QscUJBQVJFLE9BQVFGO0lBQ2xCLElBQWtCRyxvQ0FBQUEseUNBQWMsQ0FBQyxXQUExQkMsSUFBV0QscUJBQVJFLE9BQVFGO0lBQ2xCLElBQU1HLGdCQUFnQjFCLHVDQUFZLENBQW9CO0lBQ3RELElBQU0yQixhQUFhLG9CQUFDdkIsU0FBcUJDO1FBQ3hDcUIsY0FBYyxPQUFPLEdBQUd2QixLQUFLQyxTQUFTQztJQUN2QztJQUNBTCwwQ0FBZSxDQUFDO1FBQ2YsSUFBTTRCLE9BQU9GLGNBQWMsT0FBTztRQUNsQyxJQUFJLENBQUNFLE1BQU07UUFFWEEsS0FBSyxRQUFRLENBQUNWLEdBQUdHLEdBQUdHO0lBQ3JCLEdBQUc7UUFBQ047UUFBR0c7UUFBR0c7S0FBRTtJQUVaLHFCQUNDLGtEQUFDMUIsZ0RBQUlBO1FBQ0osU0FBUzZCO1FBQ1QsUUFBUTtZQUNQLEtBQUs7Z0JBQ0osU0FBUzVCLHlDQUFVQTtZQUNwQjtRQUNEO2tCQUVBLGdFQUFDRSx3Q0FBU0E7WUFBQyxTQUFRO1lBQU8sS0FBSTtZQUFJLGdCQUFlOzs4QkFDaEQsa0RBQUNDLHlDQUFVQTtvQkFBQyxPQUFPZ0I7b0JBQUcsVUFBVUM7OEJBQU07Ozs7Ozs4QkFHdEMsa0RBQUNqQix5Q0FBVUE7b0JBQUMsT0FBT21CO29CQUFHLFVBQVVDOzhCQUFNOzs7Ozs7OEJBR3RDLGtEQUFDcEIseUNBQVVBO29CQUFDLE9BQU9zQjtvQkFBRyxVQUFVQzs4QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBOztDQUVDLEdBQ3lCO0FBQ2lCO0FBQ1c7QUFDakI7QUFFckMsSUFBTU0sUUFBUTtJQUNiLGFBQ0M7QUFDRjtBQUNBLElBQU1DLE9BQ0w7QUFFYyxTQUFTQztJQUN2QixJQUF3QmhCLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDaUIsT0FBaUJqQixvQkFBWGtCLFVBQVdsQjtJQUN4QixxQkFDQzs7MEJBQ0Msa0RBQUM7Z0JBQUksV0FBVTswQkFDZCxnRUFBQ0QsNENBQUlBOzs7Ozs7Ozs7OzBCQUVOLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNkLGtEQUFDO2tDQUNBLGdFQUFDYSx5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV08sU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ3JEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR2hDLGtEQUFDSix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPSSxPQUFPRixPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFJcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDaUI7Ozs7Ozs7Ozs7MEJBRWY7Ozs7Ozs7Ozs7Ozs7OzBCQUlGOzs7Ozs7OzswQkFHQTs7Ozs7Ozs7Ozs4QkFHQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7QUFDQSxZQUFZLGVBQWU7QUFDM0IsWUFBWSxvQ0FBb0M7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QztBQUNBLGNBQWMsOERBQThEO0FBQzVFO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTs7QUFFeUI7O0FBRXpCLFdBQVcseUJBQXlCO0FBQ3BDOztBQUVBLG1CQUFtQixvQ0FBbUI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQThEO0FBQ3pFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLDRCQUE0QixpQ0FBZ0I7O0FBRTVDO0FBQ0EsU0FBUyw4QkFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsZUFBZTtBQUNmO0FBQ087QUFDUCxhQUFhLHlCQUF5QjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsU0FBUyxvQ0FBbUI7QUFDNUI7QUFDQSxLQUFLLHFCQUFxQjtBQUMxQjtBQUNBO0FBQ0EifQ==