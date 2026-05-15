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
                    lineNumber: 82,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewSwitch, {
                    value: G,
                    onChange: setG,
                    children: "Green"
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewSwitch, {
                    value: B,
                    onChange: setB,
                    children: "Blue"
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
            lineNumber: 81,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/color-mask.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/color-mask/_/color-mask.demo/index.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX2NvbG9yLW1hc2tfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlX2Nzcy1zcmNfYy0zNGNlY2MuZDFlNTBhNjk4ODA1Mjk5OC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3MvY29sb3ItbWFzay9fL2NvbG9yLW1hc2suZGVtby9jb2xvci1tYXNrLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3MvY29sb3ItbWFzay9fL2NvbG9yLW1hc2suZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9jb2xvci1tYXNrL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdQYW5lbCwgVmlld1N3aXRjaCB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW50ZXJmYWNlIENvbnRyb2xsZXIge1xuICAgIHNldENvbG9yKHJlZDogYm9vbGVhbiwgZ3JlZW46IGJvb2xlYW4sIGJsdWU6IGJvb2xlYW4pOiB2b2lkXG59XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpOiBDb250cm9sbGVyIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb25zdCBpbnZpc2libGUgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcbiAgICB9KVxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcbiAgICBjdWJlLnRyYW5zZm8uc2V0U2NhbGUoMS42KVxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiAxLFxuICAgICAgICBjb2xvcjogWzAuMywgMC4yLCAwLjEsIDFdLFxuICAgIH0pXG4gICAgY29uc3QgbWFzayA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtpbnZpc2libGVdLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxuICAgICAgICAgICAgY2hpbGRyZW46IFttYXNrLCBjdWJlXSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGludmlzaWJsZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgdGltZSAqIDEwLCAwKVxuICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldFBvc2l0aW9uKDIgKiBNYXRoLmNvcyh0aW1lKSwgMCwgMClcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUgKiAxNy45NDUsIDAsIDApXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIC8vICNlbmRcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRDb2xvcihyZWQ6IGJvb2xlYW4sIGdyZWVuOiBib29sZWFuLCBibHVlOiBib29sZWFuKSB7XG4gICAgICAgICAgICBtYXNrLmNvbG9yLnJlZCA9IHJlZFxuICAgICAgICAgICAgbWFzay5jb2xvci5ncmVlbiA9IGdyZWVuXG4gICAgICAgICAgICBtYXNrLmNvbG9yLmJsdWUgPSBibHVlXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IFtSLCBzZXRSXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW0csIHNldEddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbQiwgc2V0Ql0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IHJlZkNvbnRyb2xsZXIgPSBSZWFjdC51c2VSZWY8Q29udHJvbGxlciB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgaGFuZGxlSW5pdCA9IChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICByZWZDb250cm9sbGVyLmN1cnJlbnQgPSBpbml0KGNvbnRleHQsIGFzc2V0cylcbiAgICB9XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY3RybCA9IHJlZkNvbnRyb2xsZXIuY3VycmVudFxuICAgICAgICBpZiAoIWN0cmwpIHJldHVyblxuXG4gICAgICAgIGN0cmwuc2V0Q29sb3IoUiwgRywgQilcbiAgICB9LCBbUiwgRywgQl0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aGFuZGxlSW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjoge1xuICAgICAgICAgICAgICAgICAgICBzdXphbm5lOiBTdXphbm5lVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBnYXA9XCJMXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaCB2YWx1ZT17Un0gb25DaGFuZ2U9e3NldFJ9PlxuICAgICAgICAgICAgICAgICAgICBSZWRcbiAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XG4gICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2ggdmFsdWU9e0d9IG9uQ2hhbmdlPXtzZXRHfT5cbiAgICAgICAgICAgICAgICAgICAgR3JlZW5cbiAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XG4gICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2ggdmFsdWU9e0J9IG9uQ2hhbmdlPXtzZXRCfT5cbiAgICAgICAgICAgICAgICAgICAgQmx1ZVxuICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cbiAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICA8L1ZpZXc+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2NvbG9yLW1hc2suZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCIgICAgY29uc3QgaW52aXNpYmxlID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbm5lLFxcbiAgICB9KVxcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXFxuICAgIGN1YmUudHJhbnNmby5zZXRTY2FsZSgxLjYpXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjIsIDAuMSwgMV0sXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hc2sgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiB0cnVlLFxcbiAgICAgICAgY2hpbGRyZW46IFtpbnZpc2libGVdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFttYXNrLCBjdWJlXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGludmlzaWJsZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgdGltZSAqIDEwLCAwKVxcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRQb3NpdGlvbigyICogTWF0aC5jb3ModGltZSksIDAsIDApXFxuICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSAqIDE3Ljk0NSwgMCwgMClcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcXFwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCB7IFZpZXdQYW5lbCwgVmlld1N3aXRjaCB9IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiXFxuXFxuaW50ZXJmYWNlIENvbnRyb2xsZXIge1xcbiAgICBzZXRDb2xvcihyZWQ6IGJvb2xlYW4sIGdyZWVuOiBib29sZWFuLCBibHVlOiBib29sZWFuKTogdm9pZFxcbn1cXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKTogQ29udHJvbGxlciB7XFxuICAgIGNvbnN0IGludmlzaWJsZSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcXG4gICAgfSlcXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxcbiAgICBjdWJlLnRyYW5zZm8uc2V0U2NhbGUoMS42KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICBjb2xvcjogWzAuMywgMC4yLCAwLjEsIDFdLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXNrID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogdHJ1ZSxcXG4gICAgICAgIGNoaWxkcmVuOiBbaW52aXNpYmxlXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbWFzaywgY3ViZV0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBpbnZpc2libGUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIHRpbWUgKiAxMCwgMClcXG4gICAgICAgICAgICBjdWJlLnRyYW5zZm8uc2V0UG9zaXRpb24oMiAqIE1hdGguY29zKHRpbWUpLCAwLCAwKVxcbiAgICAgICAgICAgIGN1YmUudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUgKiAxNy45NDUsIDAsIDApXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICByZXR1cm4ge1xcbiAgICAgICAgc2V0Q29sb3IocmVkOiBib29sZWFuLCBncmVlbjogYm9vbGVhbiwgYmx1ZTogYm9vbGVhbikge1xcbiAgICAgICAgICAgIG1hc2suY29sb3IucmVkID0gcmVkXFxuICAgICAgICAgICAgbWFzay5jb2xvci5ncmVlbiA9IGdyZWVuXFxuICAgICAgICAgICAgbWFzay5jb2xvci5ibHVlID0gYmx1ZVxcbiAgICAgICAgfSxcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCBbUiwgc2V0Ul0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxcbiAgICBjb25zdCBbRywgc2V0R10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxcbiAgICBjb25zdCBbQiwgc2V0Ql0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxcbiAgICBjb25zdCByZWZDb250cm9sbGVyID0gUmVhY3QudXNlUmVmPENvbnRyb2xsZXIgfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBoYW5kbGVJbml0ID0gKGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICByZWZDb250cm9sbGVyLmN1cnJlbnQgPSBpbml0KGNvbnRleHQsIGFzc2V0cylcXG4gICAgfVxcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xcbiAgICAgICAgY29uc3QgY3RybCA9IHJlZkNvbnRyb2xsZXIuY3VycmVudFxcbiAgICAgICAgaWYgKCFjdHJsKSByZXR1cm5cXG5cXG4gICAgICAgIGN0cmwuc2V0Q29sb3IoUiwgRywgQilcXG4gICAgfSwgW1IsIEcsIEJdKVxcblxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtoYW5kbGVJbml0fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgIHN1emFubmU6IFN1emFubmVVUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVxcXCJmbGV4XFxcIiBnYXA9XFxcIkxcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaCB2YWx1ZT17Un0gb25DaGFuZ2U9e3NldFJ9PlxcbiAgICAgICAgICAgICAgICAgICAgUmVkXFxuICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cXG4gICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2ggdmFsdWU9e0d9IG9uQ2hhbmdlPXtzZXRHfT5cXG4gICAgICAgICAgICAgICAgICAgIEdyZWVuXFxuICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cXG4gICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2ggdmFsdWU9e0J9IG9uQ2hhbmdlPXtzZXRCfT5cXG4gICAgICAgICAgICAgICAgICAgIEJsdWVcXG4gICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxcbiAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgPC9WaWV3PlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJTdXphbm5lVVJMIiwiUmVhY3QiLCJWaWV3UGFuZWwiLCJWaWV3U3dpdGNoIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJpbnZpc2libGUiLCJjdWJlIiwiY2xlYXIiLCJtYXNrIiwidGltZSIsIk1hdGgiLCJzZXRDb2xvciIsInJlZCIsImdyZWVuIiwiYmx1ZSIsIkRlbW8iLCJfUmVhY3RfdXNlU3RhdGUiLCJSIiwic2V0UiIsIl9SZWFjdF91c2VTdGF0ZTEiLCJHIiwic2V0RyIsIl9SZWFjdF91c2VTdGF0ZTIiLCJCIiwic2V0QiIsInJlZkNvbnRyb2xsZXIiLCJoYW5kbGVJbml0IiwiY3RybCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdUI7QUFDNkI7QUFFRjtBQUN6QjtBQUM0QjtBQU1yRCxTQUFTVyxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQzdDLFNBQVM7SUFDVCxJQUFNQyxZQUFZLElBQUlYLGtEQUFrQkEsQ0FBQ1MsU0FBUztRQUM5QyxPQUFPQyxPQUFPLEdBQUcsQ0FBQyxPQUFPO0lBQzdCO0lBQ0EsSUFBTUUsT0FBTyxJQUFJYiw4Q0FBY0EsQ0FBQ1U7SUFDaENHLEtBQUssT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUN0QixJQUFNQyxRQUFRLElBQUloQiwrQ0FBZUEsQ0FBQ1ksU0FBUztRQUN2QyxPQUFPO1FBQ1AsT0FBTztZQUFDO1lBQUs7WUFBSztZQUFLO1NBQUU7SUFDN0I7SUFDQSxJQUFNSyxPQUFPLElBQUliLCtDQUFlQSxDQUFDUSxTQUFTO1FBQ3RDLE9BQU87UUFDUCxVQUFVO1lBQUNFO1NBQVU7SUFDekI7SUFDQUYsUUFBUSxHQUFHLENBQ1BJLE9BQ0EsSUFBSVosK0NBQWVBLENBQUNRLFNBQVM7UUFDekIsT0FBT1AsNERBQTRCO1FBQ25DLFVBQVU7WUFBQ1k7WUFBTUY7U0FBSztJQUMxQixJQUNBLElBQUlkLCtDQUFlQSxDQUFDLFNBQUNpQjtRQUNqQkosVUFBVSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBR0ksT0FBTyxJQUFJO1FBQ2pESCxLQUFLLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSUksS0FBSyxHQUFHLENBQUNELE9BQU8sR0FBRztRQUNoREgsS0FBSyxPQUFPLENBQUMsZ0JBQWdCLENBQUNHLE9BQU8sUUFBUSxHQUFHO0lBQ3BEO0lBRUpOLFFBQVEsSUFBSTtJQUNaLE9BQU87SUFDUCxPQUFPO1FBQ0hRLFVBQUFBLFNBQUFB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