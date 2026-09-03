"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_utils_loaders_tgdLoadCanvasFromCamera_page_mdx-src_components_demo_CodeViewe-aa955e"], {
35235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _webcam_demo__rspack_import_4 = __webpack_require__(82053);
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



var FOCUS = {};
var FULL = "import {\n    type TgdContext,\n    TgdGeometryBox,\n    tgdLoadCanvasFromCamera,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\nimport React from \"react\"\nimport { IconCamera, IconImage, IconSnapshot, ViewButton } from \"@tolokoban/ui\"\n\nfunction init(context: TgdContext, canvas: HTMLCanvasElement) {\n    context.camera.fitSpaceAtTarget(2, 2)\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.lessOrEqual,\n        children: [\n            new TgdPainterClear(context, {\n                color: [0.3, 0.2, 0.1, 1],\n                depth: 1,\n            }),\n            new TgdPainterLogic((time, delta) => {\n                mesh.transfo.orbitAroundX(delta * 0.573)\n                mesh.transfo.orbitAroundY(delta * 0.741)\n            }),\n        ],\n    })\n    context.add(state)\n    const texture = new TgdTexture2D(context).loadBitmap(canvas)\n    const geometry = new TgdGeometryBox()\n    const material = new TgdMaterialDiffuse({\n        color: texture,\n    })\n    const mesh = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    state.add(mesh)\n    context.play()\n    // #end\n}\n\nexport default function Demo() {\n    const [mode, setMode] = React.useState(\"init\")\n    const [canvas, setCanvas] = React.useState<HTMLCanvasElement | null>(null)\n    const [controller, setController] = React.useState<{\n        takeSnapshot(): HTMLCanvasElement | null\n        cancel(): void\n    } | null>(null)\n    const handleVideoMount = (video: HTMLVideoElement | null) => {\n        if (!video || controller) return\n\n        tgdLoadCanvasFromCamera(video).then(setController)\n    }\n    const takeSnapshot = () => {\n        if (!controller) return\n\n        setCanvas(controller.takeSnapshot())\n        setController(null)\n        setMode(\"3d\")\n    }\n    const back = () => {\n        setMode(\"webcam\")\n        setCanvas(null)\n    }\n\n    if (mode === \"init\") {\n        return (\n            <div>\n                <p>In this demo, we will take a picture from the webcam and use it as texture for a cube.</p>\n                <ViewButton icon={IconCamera} onClick={() => setMode(\"webcam\")}>\n                    Start WebCam\n                </ViewButton>\n            </div>\n        )\n    }\n\n    if (mode === \"webcam\") {\n        return (\n            <div>\n                <main>\n                    <video ref={handleVideoMount}></video>\n                    {canvas && <View onReady={(context: TgdContext) => init(context, canvas)} />}\n                </main>\n                <footer>\n                    {controller && (\n                        <ViewButton onClick={takeSnapshot} icon={IconSnapshot}>\n                            Take a Picture\n                        </ViewButton>\n                    )}\n                </footer>\n            </div>\n        )\n    }\n\n    return (\n        <div>\n            <main>{canvas && <View onReady={(context: TgdContext) => init(context, canvas)} />}</main>\n            <footer>\n                <ViewButton onClick={back} icon={IconImage}>\n                    Back to WebCam\n                </ViewButton>\n            </footer>\n        </div>\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_webcam_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
82053(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _tolokoban_ui__rspack_import_4 = __webpack_require__(62430);
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





function init(context, canvas) {
    context.camera.fitSpaceAtTarget(2, 2);
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.lessOrEqual,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
                color: [
                    0.3,
                    0.2,
                    0.1,
                    1
                ],
                depth: 1
            }),
            new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time, delta) {
                mesh.transfo.orbitAroundX(delta * 0.573);
                mesh.transfo.orbitAroundY(delta * 0.741);
            })
        ]
    });
    context.add(state);
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(canvas);
    var geometry = new _tolokoban_tgd__rspack_import_1.TgdGeometryBox();
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color: texture
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: geometry,
        material: material
    });
    state.add(mesh);
    context.play();
// #end
}
function Demo() {
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState("init"), 2), mode = _React_useState[0], setMode = _React_useState[1];
    var _React_useState1 = _sliced_to_array(react__rspack_import_3_default().useState(null), 2), canvas = _React_useState1[0], setCanvas = _React_useState1[1];
    var _React_useState2 = _sliced_to_array(react__rspack_import_3_default().useState(null), 2), controller = _React_useState2[0], setController = _React_useState2[1];
    var handleVideoMount = function handleVideoMount(video) {
        if (!video || controller) return;
        (0,_tolokoban_tgd__rspack_import_1.tgdLoadCanvasFromCamera)(video).then(setController);
    };
    var takeSnapshot = function takeSnapshot() {
        if (!controller) return;
        setCanvas(controller.takeSnapshot());
        setController(null);
        setMode("3d");
    };
    var back = function back() {
        setMode("webcam");
        setCanvas(null);
    };
    if (mode === "init") {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                    children: "In this demo, we will take a picture from the webcam and use it as texture for a cube."
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_4.ViewButton, {
                    icon: _tolokoban_ui__rspack_import_4.IconCamera,
                    onClick: function onClick() {
                        return setMode("webcam");
                    },
                    children: "Start WebCam"
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
            lineNumber: 73,
            columnNumber: 13
        }, this);
    }
    if (mode === "webcam") {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("main", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("video", {
                            ref: handleVideoMount
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this),
                        canvas && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
                            onReady: function onReady(context) {
                                return init(context, canvas);
                            }
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
                            lineNumber: 87,
                            columnNumber: 32
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("footer", {
                    children: controller && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_4.ViewButton, {
                        onClick: takeSnapshot,
                        icon: _tolokoban_ui__rspack_import_4.IconSnapshot,
                        children: "Take a Picture"
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
                        lineNumber: 91,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
            lineNumber: 84,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("main", {
                children: canvas && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
                    onReady: function onReady(context) {
                        return init(context, canvas);
                    }
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
                    lineNumber: 102,
                    columnNumber: 30
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("footer", {
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_4.ViewButton, {
                    onClick: back,
                    icon: _tolokoban_ui__rspack_import_4.IconImage,
                    children: "Back to WebCam"
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
                    lineNumber: 104,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/_webcam/webcam.demo.tsx",
        lineNumber: 101,
        columnNumber: 9
    }, this);
}


},
54854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _webcam__rspack_import_1 = __webpack_require__(35235);
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
        h1: "h1"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Create a Canvas from the WebCam"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_webcam__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadCanvasFromCamera/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdXRpbHNfbG9hZGVyc190Z2RMb2FkQ2FudmFzRnJvbUNhbWVyYV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZS1hYTk1NWUuYzQ1ZjUxY2U1MTUxNTk5NS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy91dGlscy9sb2FkZXJzL3RnZExvYWRDYW52YXNGcm9tQ2FtZXJhL193ZWJjYW0vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy91dGlscy9sb2FkZXJzL3RnZExvYWRDYW52YXNGcm9tQ2FtZXJhL193ZWJjYW0vd2ViY2FtLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy91dGlscy9sb2FkZXJzL3RnZExvYWRDYW52YXNGcm9tQ2FtZXJhL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi93ZWJjYW0uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge31cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkR2VvbWV0cnlCb3gsXFxuICAgIHRnZExvYWRDYW52YXNGcm9tQ2FtZXJhLFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCB7IEljb25DYW1lcmEsIEljb25JbWFnZSwgSWNvblNuYXBzaG90LCBWaWV3QnV0dG9uIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi91aVxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLCAyKVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogWzAuMywgMC4yLCAwLjEsIDFdLFxcbiAgICAgICAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWx0YSkgPT4ge1xcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbHRhICogMC41NzMpXFxuICAgICAgICAgICAgICAgIG1lc2gudHJhbnNmby5vcmJpdEFyb3VuZFkoZGVsdGEgKiAwLjc0MSlcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKHN0YXRlKVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVGdkR2VvbWV0cnlCb3goKVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgY29sb3I6IHRleHR1cmUsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgZ2VvbWV0cnksXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcXG4gICAgc3RhdGUuYWRkKG1lc2gpXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIC8vICNlbmRcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gUmVhY3QudXNlU3RhdGUoXFxcImluaXRcXFwiKVxcbiAgICBjb25zdCBbY2FudmFzLCBzZXRDYW52YXNdID0gUmVhY3QudXNlU3RhdGU8SFRNTENhbnZhc0VsZW1lbnQgfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBbY29udHJvbGxlciwgc2V0Q29udHJvbGxlcl0gPSBSZWFjdC51c2VTdGF0ZTx7XFxuICAgICAgICB0YWtlU25hcHNob3QoKTogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsXFxuICAgICAgICBjYW5jZWwoKTogdm9pZFxcbiAgICB9IHwgbnVsbD4obnVsbClcXG4gICAgY29uc3QgaGFuZGxlVmlkZW9Nb3VudCA9ICh2aWRlbzogSFRNTFZpZGVvRWxlbWVudCB8IG51bGwpID0+IHtcXG4gICAgICAgIGlmICghdmlkZW8gfHwgY29udHJvbGxlcikgcmV0dXJuXFxuXFxuICAgICAgICB0Z2RMb2FkQ2FudmFzRnJvbUNhbWVyYSh2aWRlbykudGhlbihzZXRDb250cm9sbGVyKVxcbiAgICB9XFxuICAgIGNvbnN0IHRha2VTbmFwc2hvdCA9ICgpID0+IHtcXG4gICAgICAgIGlmICghY29udHJvbGxlcikgcmV0dXJuXFxuXFxuICAgICAgICBzZXRDYW52YXMoY29udHJvbGxlci50YWtlU25hcHNob3QoKSlcXG4gICAgICAgIHNldENvbnRyb2xsZXIobnVsbClcXG4gICAgICAgIHNldE1vZGUoXFxcIjNkXFxcIilcXG4gICAgfVxcbiAgICBjb25zdCBiYWNrID0gKCkgPT4ge1xcbiAgICAgICAgc2V0TW9kZShcXFwid2ViY2FtXFxcIilcXG4gICAgICAgIHNldENhbnZhcyhudWxsKVxcbiAgICB9XFxuXFxuICAgIGlmIChtb2RlID09PSBcXFwiaW5pdFxcXCIpIHtcXG4gICAgICAgIHJldHVybiAoXFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgPHA+SW4gdGhpcyBkZW1vLCB3ZSB3aWxsIHRha2UgYSBwaWN0dXJlIGZyb20gdGhlIHdlYmNhbSBhbmQgdXNlIGl0IGFzIHRleHR1cmUgZm9yIGEgY3ViZS48L3A+XFxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIGljb249e0ljb25DYW1lcmF9IG9uQ2xpY2s9eygpID0+IHNldE1vZGUoXFxcIndlYmNhbVxcXCIpfT5cXG4gICAgICAgICAgICAgICAgICAgIFN0YXJ0IFdlYkNhbVxcbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICApXFxuICAgIH1cXG5cXG4gICAgaWYgKG1vZGUgPT09IFxcXCJ3ZWJjYW1cXFwiKSB7XFxuICAgICAgICByZXR1cm4gKFxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIDxtYWluPlxcbiAgICAgICAgICAgICAgICAgICAgPHZpZGVvIHJlZj17aGFuZGxlVmlkZW9Nb3VudH0+PC92aWRlbz5cXG4gICAgICAgICAgICAgICAgICAgIHtjYW52YXMgJiYgPFZpZXcgb25SZWFkeT17KGNvbnRleHQ6IFRnZENvbnRleHQpID0+IGluaXQoY29udGV4dCwgY2FudmFzKX0gLz59XFxuICAgICAgICAgICAgICAgIDwvbWFpbj5cXG4gICAgICAgICAgICAgICAgPGZvb3Rlcj5cXG4gICAgICAgICAgICAgICAgICAgIHtjb250cm9sbGVyICYmIChcXG4gICAgICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXt0YWtlU25hcHNob3R9IGljb249e0ljb25TbmFwc2hvdH0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRha2UgYSBQaWN0dXJlXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgKX1cXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICApXFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPG1haW4+e2NhbnZhcyAmJiA8VmlldyBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCkgPT4gaW5pdChjb250ZXh0LCBjYW52YXMpfSAvPn08L21haW4+XFxuICAgICAgICAgICAgPGZvb3Rlcj5cXG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17YmFja30gaWNvbj17SWNvbkltYWdlfT5cXG4gICAgICAgICAgICAgICAgICAgIEJhY2sgdG8gV2ViQ2FtXFxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RHZW9tZXRyeUJveCxcbiAgICB0Z2RMb2FkQ2FudmFzRnJvbUNhbWVyYSxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgSWNvbkNhbWVyYSwgSWNvbkltYWdlLCBJY29uU25hcHNob3QsIFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMiwgMilcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBbMC4zLCAwLjIsIDAuMSwgMV0sXG4gICAgICAgICAgICAgICAgZGVwdGg6IDEsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVzaC50cmFuc2ZvLm9yYml0QXJvdW5kWChkZWx0YSAqIDAuNTczKVxuICAgICAgICAgICAgICAgIG1lc2gudHJhbnNmby5vcmJpdEFyb3VuZFkoZGVsdGEgKiAwLjc0MSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoc3RhdGUpXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChjYW52YXMpXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVGdkR2VvbWV0cnlCb3goKVxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgIGNvbG9yOiB0ZXh0dXJlLFxuICAgIH0pXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG4gICAgICAgIGdlb21ldHJ5LFxuICAgICAgICBtYXRlcmlhbCxcbiAgICB9KVxuICAgIHN0YXRlLmFkZChtZXNoKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IFJlYWN0LnVzZVN0YXRlKFwiaW5pdFwiKVxuICAgIGNvbnN0IFtjYW52YXMsIHNldENhbnZhc10gPSBSZWFjdC51c2VTdGF0ZTxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgW2NvbnRyb2xsZXIsIHNldENvbnRyb2xsZXJdID0gUmVhY3QudXNlU3RhdGU8e1xuICAgICAgICB0YWtlU25hcHNob3QoKTogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsXG4gICAgICAgIGNhbmNlbCgpOiB2b2lkXG4gICAgfSB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgaGFuZGxlVmlkZW9Nb3VudCA9ICh2aWRlbzogSFRNTFZpZGVvRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKCF2aWRlbyB8fCBjb250cm9sbGVyKSByZXR1cm5cblxuICAgICAgICB0Z2RMb2FkQ2FudmFzRnJvbUNhbWVyYSh2aWRlbykudGhlbihzZXRDb250cm9sbGVyKVxuICAgIH1cbiAgICBjb25zdCB0YWtlU25hcHNob3QgPSAoKSA9PiB7XG4gICAgICAgIGlmICghY29udHJvbGxlcikgcmV0dXJuXG5cbiAgICAgICAgc2V0Q2FudmFzKGNvbnRyb2xsZXIudGFrZVNuYXBzaG90KCkpXG4gICAgICAgIHNldENvbnRyb2xsZXIobnVsbClcbiAgICAgICAgc2V0TW9kZShcIjNkXCIpXG4gICAgfVxuICAgIGNvbnN0IGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldE1vZGUoXCJ3ZWJjYW1cIilcbiAgICAgICAgc2V0Q2FudmFzKG51bGwpXG4gICAgfVxuXG4gICAgaWYgKG1vZGUgPT09IFwiaW5pdFwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPkluIHRoaXMgZGVtbywgd2Ugd2lsbCB0YWtlIGEgcGljdHVyZSBmcm9tIHRoZSB3ZWJjYW0gYW5kIHVzZSBpdCBhcyB0ZXh0dXJlIGZvciBhIGN1YmUuPC9wPlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIGljb249e0ljb25DYW1lcmF9IG9uQ2xpY2s9eygpID0+IHNldE1vZGUoXCJ3ZWJjYW1cIil9PlxuICAgICAgICAgICAgICAgICAgICBTdGFydCBXZWJDYW1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGlmIChtb2RlID09PSBcIndlYmNhbVwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgICAgICA8dmlkZW8gcmVmPXtoYW5kbGVWaWRlb01vdW50fT48L3ZpZGVvPlxuICAgICAgICAgICAgICAgICAgICB7Y2FudmFzICYmIDxWaWV3IG9uUmVhZHk9eyhjb250ZXh0OiBUZ2RDb250ZXh0KSA9PiBpbml0KGNvbnRleHQsIGNhbnZhcyl9IC8+fVxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICB7Y29udHJvbGxlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXt0YWtlU25hcHNob3R9IGljb249e0ljb25TbmFwc2hvdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFrZSBhIFBpY3R1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxtYWluPntjYW52YXMgJiYgPFZpZXcgb25SZWFkeT17KGNvbnRleHQ6IFRnZENvbnRleHQpID0+IGluaXQoY29udGV4dCwgY2FudmFzKX0gLz59PC9tYWluPlxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXtiYWNrfSBpY29uPXtJY29uSW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgICBCYWNrIHRvIFdlYkNhbVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZEdlb21ldHJ5Qm94IiwidGdkTG9hZENhbnZhc0Zyb21DYW1lcmEiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiSWNvbkNhbWVyYSIsIkljb25JbWFnZSIsIkljb25TbmFwc2hvdCIsImluaXQiLCJjb250ZXh0IiwiY2FudmFzIiwic3RhdGUiLCJ0aW1lIiwiZGVsdGEiLCJtZXNoIiwidGV4dHVyZSIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJtb2RlIiwic2V0TW9kZSIsIl9SZWFjdF91c2VTdGF0ZTEiLCJzZXRDYW52YXMiLCJfUmVhY3RfdXNlU3RhdGUyIiwiY29udHJvbGxlciIsInNldENvbnRyb2xsZXIiLCJoYW5kbGVWaWRlb01vdW50IiwidmlkZW8iLCJ0YWtlU25hcHNob3QiLCJiYWNrIiwib25SZWFkeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUNyQjtBQUVoQyxJQUFNSSxRQUFRLENBQUM7QUFDZixJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSix3Q0FBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNH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