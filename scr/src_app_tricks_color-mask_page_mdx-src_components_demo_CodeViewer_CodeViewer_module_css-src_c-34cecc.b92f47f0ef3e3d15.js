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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
                    lineNumber: 83,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewSwitch, {
                    value: G,
                    onChange: setG,
                    children: "Green"
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
                    lineNumber: 86,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewSwitch, {
                    value: B,
                    onChange: setB,
                    children: "Blue"
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
                    lineNumber: 89,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
            lineNumber: 82,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_color_mask_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "As you can see in this demo, we can mask out any color channel. When we render\nsuzanne, we can just fill the depth buffer, but change none of the pixels."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "As you will see in the next demo, this technique can be useful if you want to\nhave a rich (but fixed) environment in which you can move other meshes."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/tricks/color-mask/2",
                    children: "Next demo"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
                    lineNumber: 13,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX2NvbG9yLW1hc2tfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlX2Nzcy1zcmNfYy0zNGNlY2MuYjkyZjQ3ZjBlZjNlM2QxNS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3MvY29sb3ItbWFzay9fL2NvbG9yLW1hc2suZGVtby9jb2xvci1tYXNrLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3MvY29sb3ItbWFzay9fL2NvbG9yLW1hc2suZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9jb2xvci1tYXNrL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTG9naWMsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyTWVzaEdsdGYsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXdQYW5lbCwgVmlld1N3aXRjaCB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5cbmludGVyZmFjZSBDb250cm9sbGVyIHtcblx0c2V0Q29sb3IocmVkOiBib29sZWFuLCBncmVlbjogYm9vbGVhbiwgYmx1ZTogYm9vbGVhbik6IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpOiBDb250cm9sbGVyIHtcblx0Ly8gI2JlZ2luXG5cdGNvbnN0IGludmlzaWJsZSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXG5cdH0pO1xuXHRjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpO1xuXHRjdWJlLnRyYW5zZm8uc2V0U2NhbGUoMS42KTtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRkZXB0aDogMSxcblx0XHRjb2xvcjogWzAuMywgMC4yLCAwLjEsIDFdLFxuXHR9KTtcblx0Y29uc3QgbWFzayA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGNvbG9yOiB0cnVlLFxuXHRcdGNoaWxkcmVuOiBbaW52aXNpYmxlXSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKFxuXHRcdGNsZWFyLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXG5cdFx0XHRjaGlsZHJlbjogW21hc2ssIGN1YmVdLFxuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcblx0XHRcdGludmlzaWJsZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgdGltZSAqIDEwLCAwKTtcblx0XHRcdGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigyICogTWF0aC5jb3ModGltZSksIDAsIDApO1xuXHRcdFx0Y3ViZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSAqIDE3Ljk0NSwgMCwgMCk7XG5cdFx0fSksXG5cdCk7XG5cdGNvbnRleHQucGxheSgpO1xuXHQvLyAjZW5kXG5cdHJldHVybiB7XG5cdFx0c2V0Q29sb3IocmVkOiBib29sZWFuLCBncmVlbjogYm9vbGVhbiwgYmx1ZTogYm9vbGVhbikge1xuXHRcdFx0bWFzay5jb2xvci5yZWQgPSByZWQ7XG5cdFx0XHRtYXNrLmNvbG9yLmdyZWVuID0gZ3JlZW47XG5cdFx0XHRtYXNrLmNvbG9yLmJsdWUgPSBibHVlO1xuXHRcdH0sXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdGNvbnN0IFtSLCBzZXRSXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCBbRywgc2V0R10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgW0IsIHNldEJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IHJlZkNvbnRyb2xsZXIgPSBSZWFjdC51c2VSZWY8Q29udHJvbGxlciB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBoYW5kbGVJbml0ID0gKGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XG5cdFx0cmVmQ29udHJvbGxlci5jdXJyZW50ID0gaW5pdChjb250ZXh0LCBhc3NldHMpO1xuXHR9O1xuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGN0cmwgPSByZWZDb250cm9sbGVyLmN1cnJlbnQ7XG5cdFx0aWYgKCFjdHJsKSByZXR1cm47XG5cblx0XHRjdHJsLnNldENvbG9yKFIsIEcsIEIpO1xuXHR9LCBbUiwgRywgQl0pO1xuXG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2hhbmRsZUluaXR9XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0Z2xiOiB7XG5cdFx0XHRcdFx0c3V6YW5uZTogU3V6YW5uZVVSTCxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGdhcD1cIkxcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuXHRcdFx0XHQ8Vmlld1N3aXRjaCB2YWx1ZT17Un0gb25DaGFuZ2U9e3NldFJ9PlxuXHRcdFx0XHRcdFJlZFxuXHRcdFx0XHQ8L1ZpZXdTd2l0Y2g+XG5cdFx0XHRcdDxWaWV3U3dpdGNoIHZhbHVlPXtHfSBvbkNoYW5nZT17c2V0R30+XG5cdFx0XHRcdFx0R3JlZW5cblx0XHRcdFx0PC9WaWV3U3dpdGNoPlxuXHRcdFx0XHQ8Vmlld1N3aXRjaCB2YWx1ZT17Qn0gb25DaGFuZ2U9e3NldEJ9PlxuXHRcdFx0XHRcdEJsdWVcblx0XHRcdFx0PC9WaWV3U3dpdGNoPlxuXHRcdFx0PC9WaWV3UGFuZWw+XG5cdFx0PC9WaWV3PlxuXHQpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIjtcbmltcG9ydCBEZW1vIGZyb20gXCIuL2NvbG9yLW1hc2suZGVtb1wiO1xuXG5jb25zdCBGT0NVUyA9IHtcblx0XCJEZXRhaWwgIzFcIjpcblx0XHRcIiAgICBjb25zdCBpbnZpc2libGUgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXFxuICAgIH0pXFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcXG4gICAgY3ViZS50cmFuc2ZvLnNldFNjYWxlKDEuNilcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMiwgMC4xLCAxXSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWFzayA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IHRydWUsXFxuICAgICAgICBjaGlsZHJlbjogW2ludmlzaWJsZV0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW21hc2ssIGN1YmVdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgaW52aXNpYmxlLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCB0aW1lICogMTAsIDApXFxuICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKDIgKiBNYXRoLmNvcyh0aW1lKSwgMCwgMClcXG4gICAgICAgICAgICBjdWJlLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lICogMTcuOTQ1LCAwLCAwKVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcIixcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7XFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5cXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXFxuaW1wb3J0IHsgVmlld1BhbmVsLCBWaWV3U3dpdGNoIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxcblxcbmludGVyZmFjZSBDb250cm9sbGVyIHtcXG4gICAgc2V0Q29sb3IocmVkOiBib29sZWFuLCBncmVlbjogYm9vbGVhbiwgYmx1ZTogYm9vbGVhbik6IHZvaWRcXG59XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cyk6IENvbnRyb2xsZXIge1xcbiAgICBjb25zdCBpbnZpc2libGUgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXFxuICAgIH0pXFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcXG4gICAgY3ViZS50cmFuc2ZvLnNldFNjYWxlKDEuNilcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgY29sb3I6IFswLjMsIDAuMiwgMC4xLCAxXSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWFzayA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IHRydWUsXFxuICAgICAgICBjaGlsZHJlbjogW2ludmlzaWJsZV0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW21hc2ssIGN1YmVdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgaW52aXNpYmxlLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCB0aW1lICogMTAsIDApXFxuICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKDIgKiBNYXRoLmNvcyh0aW1lKSwgMCwgMClcXG4gICAgICAgICAgICBjdWJlLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lICogMTcuOTQ1LCAwLCAwKVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG4gICAgcmV0dXJuIHtcXG4gICAgICAgIHNldENvbG9yKHJlZDogYm9vbGVhbiwgZ3JlZW46IGJvb2xlYW4sIGJsdWU6IGJvb2xlYW4pIHtcXG4gICAgICAgICAgICBtYXNrLmNvbG9yLnJlZCA9IHJlZFxcbiAgICAgICAgICAgIG1hc2suY29sb3IuZ3JlZW4gPSBncmVlblxcbiAgICAgICAgICAgIG1hc2suY29sb3IuYmx1ZSA9IGJsdWVcXG4gICAgICAgIH0sXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgW1IsIHNldFJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcXG4gICAgY29uc3QgW0csIHNldEddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcXG4gICAgY29uc3QgW0IsIHNldEJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcXG4gICAgY29uc3QgcmVmQ29udHJvbGxlciA9IFJlYWN0LnVzZVJlZjxDb250cm9sbGVyIHwgbnVsbD4obnVsbClcXG4gICAgY29uc3QgaGFuZGxlSW5pdCA9IChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICAgICAgcmVmQ29udHJvbGxlci5jdXJyZW50ID0gaW5pdChjb250ZXh0LCBhc3NldHMpXFxuICAgIH1cXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcXG4gICAgICAgIGNvbnN0IGN0cmwgPSByZWZDb250cm9sbGVyLmN1cnJlbnRcXG4gICAgICAgIGlmICghY3RybCkgcmV0dXJuXFxuXFxuICAgICAgICBjdHJsLnNldENvbG9yKFIsIEcsIEIpXFxuICAgIH0sIFtSLCBHLCBCXSlcXG5cXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aGFuZGxlSW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICBzdXphbm5lOiBTdXphbm5lVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBnYXA9XCJMXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cXG4gICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2ggdmFsdWU9e1J9IG9uQ2hhbmdlPXtzZXRSfT5cXG4gICAgICAgICAgICAgICAgICAgIFJlZFxcbiAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XFxuICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXtHfSBvbkNoYW5nZT17c2V0R30+XFxuICAgICAgICAgICAgICAgICAgICBHcmVlblxcbiAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XFxuICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXtCfSBvbkNoYW5nZT17c2V0Qn0+XFxuICAgICAgICAgICAgICAgICAgICBCbHVlXFxuICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cXG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgIDwvVmlldz5cXG4gICAgKVxcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU3RhdGUiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIlN1emFubmVVUkwiLCJSZWFjdCIsIlZpZXdQYW5lbCIsIlZpZXdTd2l0Y2giLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImludmlzaWJsZSIsImN1YmUiLCJjbGVhciIsIm1hc2siLCJ0aW1lIiwiTWF0aCIsInNldENvbG9yIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiRGVtbyIsIl9SZWFjdF91c2VTdGF0ZSIsIlIiLCJzZXRSIiwiX1JlYWN0X3VzZVN0YXRlMSIsIkciLCJzZXRHIiwiX1JlYWN0X3VzZVN0YXRlMiIsIkIiLCJzZXRCIiwicmVmQ29udHJvbGxlciIsImhhbmRsZUluaXQiLCJjdHJsIiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF3QjtBQUNrQztBQUVQO0FBQ3pCO0FBQzRCO0FBTXRELFNBQVNXLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDaEQsU0FBUztJQUNULElBQU1DLFlBQVksSUFBSVgsa0RBQWtCQSxDQUFDUyxTQUFTO1FBQ2pELE9BQU9DLE9BQU8s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