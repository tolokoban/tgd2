"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_camera_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-src_com-a94ddf"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
26062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var _utils_hooks_float__rspack_import_5 = __webpack_require__(24429);
/* import */ var _tolokoban_ui__rspack_import_6 = __webpack_require__(62430);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
    // #begin Initializing WebGL
    var camera = context.camera;
    camera.fitSpaceAtTarget(2, 2);
    var color = _to_consumable_array((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom3)()).concat([
        1
    ]);
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color: color,
        ambient: new _tolokoban_tgd__rspack_import_1.TgdLight({
            color: [
                0.8,
                0.8,
                0.8,
                0
            ]
        }),
        lockLightsToCamera: true
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: material
    });
    var near = camera.near, far = camera.far;
    var camOrtho = new _tolokoban_tgd__rspack_import_1.TgdCameraOrthographic({
        near: near,
        far: far
    });
    var camPersp = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective({
        near: near,
        far: far
    });
    // #end
    var scissor1 = new _tolokoban_tgd__rspack_import_1.TgdPainterScissor(context, {
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterGroupCamera(context, {
                camera: camOrtho,
                children: [
                    mesh
                ]
            })
        ],
        x: 0,
        y: 0,
        width: 0.5,
        height: 1
    });
    var scissor2 = new _tolokoban_tgd__rspack_import_1.TgdPainterScissor(context, {
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterGroupCamera(context, {
                camera: camPersp,
                children: [
                    mesh
                ]
            })
        ],
        x: 0.5,
        y: 0,
        width: 0.5,
        height: 1
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function() {
        camPersp.fitSpaceAtTarget(2, 2);
        camPersp.fromTransfo(camera.transfo);
        camPersp.zoom = camera.zoom;
        camOrtho.fitSpaceAtTarget(2, 2);
        camOrtho.fromTransfo(camera.transfo);
        camOrtho.zoom = camera.zoom;
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.3,
            0.3,
            0.3,
            1
        ],
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            scissor1,
            scissor2
        ]
    }));
    context.inputs.pointer.eventTap.addListener(function(evt) {
        if (evt.x < 0) {
            console.log("Orthographic:", camOrtho.spacePerPixel * camOrtho.screenHeight);
            console.log("> Height:", camOrtho.screenHeight);
        } else {
            console.log("Perspective:", camPersp.spacePerPixel * camPersp.screenHeight);
            console.log("> Height:", camPersp.screenHeight);
        }
    });
    context.paint();
    return {
        split: function split(value) {
            var a = (0,_tolokoban_tgd__rspack_import_1.tgdCalcClamp)(value, 0, 1);
            scissor1.x = 0;
            scissor1.width = a;
            scissor2.x = a;
            scissor2.width = 1 - a;
            context.paint();
        },
        zoom: function zoom(value) {
            context.camera.zoom = value;
            context.paint();
        }
    };
}
function Demo() {
    var ref = react__rspack_import_4_default().useRef(null);
    var srv = ref.current;
    var _useFloat = _sliced_to_array((0,_utils_hooks_float__rspack_import_5.useFloat)(0.5, srv === null || srv === void 0 ? void 0 : srv.split), 2), split = _useFloat[0], setSplit = _useFloat[1];
    var _React_useState = _sliced_to_array(react__rspack_import_4_default().useState(1), 2), zoom = _React_useState[0], setZoom = _React_useState[1];
    var handleApplyZoom = function handleApplyZoom() {
        if (srv) srv.zoom(zoom);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
            onReady: function onReady(scene, assets) {
                ref.current = init(scene, assets);
            },
            assets: {
                glb: {
                    suzane: _assets_mesh_suzanne_glb__rspack_import_3
                }
            },
            gizmo: true,
            controller: {
                inertiaOrbit: 1000,
                inertiaPanning: 1000
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewSlider, {
                    value: split,
                    onChange: setSplit,
                    min: 0,
                    max: 1,
                    step: 1e-2
                }, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                    lineNumber: 137,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewPanel, {
                    fullwidth: true,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "Orthographic"
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "Perspective"
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 140,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                    lineNumber: 138,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewPanel, {
                    display: "flex",
                    alignItems: "center",
                    gap: "M",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewInputNumber, {
                            value: zoom,
                            onChange: setZoom
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewButton, {
                            onClick: handleApplyZoom,
                            children: "Apply zoom"
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                    lineNumber: 142,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
            lineNumber: 123,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
        lineNumber: 122,
        columnNumber: 9
    }, this);
}


},
57418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _camera_demo__rspack_import_4 = __webpack_require__(26062);
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
    "Initializing WebGL": "    const { camera } = context\n    camera.fitSpaceAtTarget(2, 2)\n    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]\n    const material = new TgdMaterialDiffuse({\n        color,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n        lockLightsToCamera: true,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material,\n    })\n    const { near, far } = camera\n    const camOrtho = new TgdCameraOrthographic({ near, far })\n    const camPersp = new TgdCameraPerspective({ near, far })"
};
var FULL = "import {\n    ArrayNumber4,\n    tgdCalcClamp,\n    tgdCalcRandom3,\n    TgdCameraOrthographic,\n    TgdCameraPerspective,\n    TgdContext,\n    TgdLight,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterGroupCamera,\n    TgdPainterLogic,\n    TgdPainterMeshGltf,\n    TgdPainterScissor,\n    TgdPainterState,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport React from \"react\"\nimport { useFloat } from \"@/utils/hooks/float\"\nimport { ViewButton, ViewInputNumber, ViewPanel, ViewSlider } from \"@tolokoban/ui\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const { camera } = context\n    camera.fitSpaceAtTarget(2, 2)\n    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]\n    const material = new TgdMaterialDiffuse({\n        color,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n        lockLightsToCamera: true,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material,\n    })\n    const { near, far } = camera\n    const camOrtho = new TgdCameraOrthographic({ near, far })\n    const camPersp = new TgdCameraPerspective({ near, far })\n    const scissor1 = new TgdPainterScissor(context, {\n        children: [\n            new TgdPainterGroupCamera(context, {\n                camera: camOrtho,\n                children: [mesh],\n            }),\n        ],\n        x: 0,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    })\n    const scissor2 = new TgdPainterScissor(context, {\n        children: [\n            new TgdPainterGroupCamera(context, {\n                camera: camPersp,\n                children: [mesh],\n            }),\n        ],\n        x: 0.5,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    })\n    context.add(\n        new TgdPainterLogic(() => {\n            camPersp.fitSpaceAtTarget(2, 2)\n            camPersp.fromTransfo(camera.transfo)\n            camPersp.zoom = camera.zoom\n            camOrtho.fitSpaceAtTarget(2, 2)\n            camOrtho.fromTransfo(camera.transfo)\n            camOrtho.zoom = camera.zoom\n        }),\n        new TgdPainterClear(context, {\n            color: [0.3, 0.3, 0.3, 1],\n            depth: 1,\n        }),\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [scissor1, scissor2],\n        }),\n    )\n    context.inputs.pointer.eventTap.addListener((evt) => {\n        if (evt.x < 0) {\n            console.log(\"Orthographic:\", camOrtho.spacePerPixel * camOrtho.screenHeight)\n            console.log(\"> Height:\", camOrtho.screenHeight)\n        } else {\n            console.log(\"Perspective:\", camPersp.spacePerPixel * camPersp.screenHeight)\n            console.log(\"> Height:\", camPersp.screenHeight)\n        }\n    })\n    context.paint()\n    return {\n        split(value: number) {\n            const a = tgdCalcClamp(value, 0, 1)\n            scissor1.x = 0\n            scissor1.width = a\n            scissor2.x = a\n            scissor2.width = 1 - a\n            context.paint()\n        },\n        zoom(value: number) {\n            context.camera.zoom = value\n            context.paint()\n        },\n    }\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null)\n    const srv = ref.current\n    const [split, setSplit] = useFloat(0.5, srv?.split)\n    const [zoom, setZoom] = React.useState(1)\n    const handleApplyZoom = () => {\n        if (srv) srv.zoom(zoom)\n    }\n\n    return (\n        <div>\n            <View\n                onReady={(scene: TgdContext, assets: Assets) => {\n                    ref.current = init(scene, assets)\n                }}\n                assets={{\n                    glb: {\n                        suzane: SuzaneURL,\n                    },\n                }}\n                gizmo\n                controller={{\n                    inertiaOrbit: 1000,\n                    inertiaPanning: 1000,\n                }}>\n                <ViewSlider value={split} onChange={setSplit} min={0} max={1} step={1e-2} />\n                <ViewPanel fullwidth display=\"flex\" justifyContent=\"space-between\" alignItems=\"center\">\n                    <div>Orthographic</div>\n                    <div>Perspective</div>\n                </ViewPanel>\n                <ViewPanel display=\"flex\" alignItems=\"center\" gap=\"M\">\n                    <ViewInputNumber value={zoom} onChange={setZoom} />\n                    <ViewButton onClick={handleApplyZoom}>Apply zoom</ViewButton>\n                </ViewPanel>\n            </View>\n        </div>\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_camera_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
24429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useFloat: () => (useFloat)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/* import */ var react__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_0);
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

function useFloat(initialValue, onChange) {
    var _React_useState = _sliced_to_array(react__rspack_import_0_default().useState(initialValue), 2), value = _React_useState[0], setValue = _React_useState[1];
    react__rspack_import_0_default().useEffect(function() {
        return onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [
        value
    ]);
    return [
        value,
        setValue
    ];
}


},
73068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _camera__rspack_import_1 = __webpack_require__(57418);
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
        li: "li",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Camera"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "#/articles/camera/screen-coords",
                            children: "Screen coordinates"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                            lineNumber: 5,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                        lineNumber: 5,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_camera__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfY2FtZXJhX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jc3Mtc3JjX2NvbS1hOTRkZGYuYjc0ZTYyZTA3NTIxY2I0Yy5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvY2FtZXJhL18vY2FtZXJhL2NhbWVyYS5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL2NhbWVyYS9fL2NhbWVyYS9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3V0aWxzL2hvb2tzL2Zsb2F0LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvY2FtZXJhL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFycmF5TnVtYmVyNCxcbiAgICB0Z2RDYWxjQ2xhbXAsXG4gICAgdGdkQ2FsY1JhbmRvbTMsXG4gICAgVGdkQ2FtZXJhT3J0aG9ncmFwaGljLFxuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkTGlnaHQsXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyR3JvdXBDYW1lcmEsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU2Npc3NvcixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcIkAvdXRpbHMvaG9va3MvZmxvYXRcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiwgVmlld0lucHV0TnVtYmVyLCBWaWV3UGFuZWwsIFZpZXdTbGlkZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLCAyKVxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICBjb2xvcixcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcbiAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXG4gICAgICAgIH0pLFxuICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG4gICAgfSlcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcbiAgICAgICAgbWF0ZXJpYWwsXG4gICAgfSlcbiAgICBjb25zdCB7IG5lYXIsIGZhciB9ID0gY2FtZXJhXG4gICAgY29uc3QgY2FtT3J0aG8gPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHsgbmVhciwgZmFyIH0pXG4gICAgY29uc3QgY2FtUGVyc3AgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoeyBuZWFyLCBmYXIgfSlcbiAgICAvLyAjZW5kXG4gICAgY29uc3Qgc2Npc3NvcjEgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJHcm91cENhbWVyYShjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgY2FtZXJhOiBjYW1PcnRobyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiAwLjUsXG4gICAgICAgIGhlaWdodDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHNjaXNzb3IyID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGNhbWVyYTogY2FtUGVyc3AsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICB4OiAwLjUsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiAwLjUsXG4gICAgICAgIGhlaWdodDogMSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCgpID0+IHtcbiAgICAgICAgICAgIGNhbVBlcnNwLmZpdFNwYWNlQXRUYXJnZXQoMiwgMilcbiAgICAgICAgICAgIGNhbVBlcnNwLmZyb21UcmFuc2ZvKGNhbWVyYS50cmFuc2ZvKVxuICAgICAgICAgICAgY2FtUGVyc3Auem9vbSA9IGNhbWVyYS56b29tXG4gICAgICAgICAgICBjYW1PcnRoby5maXRTcGFjZUF0VGFyZ2V0KDIsIDIpXG4gICAgICAgICAgICBjYW1PcnRoby5mcm9tVHJhbnNmbyhjYW1lcmEudHJhbnNmbylcbiAgICAgICAgICAgIGNhbU9ydGhvLnpvb20gPSBjYW1lcmEuem9vbVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxuICAgICAgICAgICAgZGVwdGg6IDEsXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3NjaXNzb3IxLCBzY2lzc29yMl0sXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IHtcbiAgICAgICAgaWYgKGV2dC54IDwgMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPcnRob2dyYXBoaWM6XCIsIGNhbU9ydGhvLnNwYWNlUGVyUGl4ZWwgKiBjYW1PcnRoby5zY3JlZW5IZWlnaHQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4gSGVpZ2h0OlwiLCBjYW1PcnRoby5zY3JlZW5IZWlnaHQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcnNwZWN0aXZlOlwiLCBjYW1QZXJzcC5zcGFjZVBlclBpeGVsICogY2FtUGVyc3Auc2NyZWVuSGVpZ2h0KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI+IEhlaWdodDpcIiwgY2FtUGVyc3Auc2NyZWVuSGVpZ2h0KVxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICByZXR1cm4ge1xuICAgICAgICBzcGxpdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBhID0gdGdkQ2FsY0NsYW1wKHZhbHVlLCAwLCAxKVxuICAgICAgICAgICAgc2Npc3NvcjEueCA9IDBcbiAgICAgICAgICAgIHNjaXNzb3IxLndpZHRoID0gYVxuICAgICAgICAgICAgc2Npc3NvcjIueCA9IGFcbiAgICAgICAgICAgIHNjaXNzb3IyLndpZHRoID0gMSAtIGFcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICB9LFxuICAgICAgICB6b29tKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnpvb20gPSB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpXG4gICAgY29uc3Qgc3J2ID0gcmVmLmN1cnJlbnRcbiAgICBjb25zdCBbc3BsaXQsIHNldFNwbGl0XSA9IHVzZUZsb2F0KDAuNSwgc3J2Py5zcGxpdClcbiAgICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSBSZWFjdC51c2VTdGF0ZSgxKVxuICAgIGNvbnN0IGhhbmRsZUFwcGx5Wm9vbSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNydikgc3J2Lnpvb20oem9vbSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICBvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gaW5pdChzY2VuZSwgYXNzZXRzKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgICAgIGdsYjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3V6YW5lOiBTdXphbmVVUkwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBnaXptb1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICBpbmVydGlhUGFubmluZzogMTAwMCxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8Vmlld1NsaWRlciB2YWx1ZT17c3BsaXR9IG9uQ2hhbmdlPXtzZXRTcGxpdH0gbWluPXswfSBtYXg9ezF9IHN0ZXA9ezFlLTJ9IC8+XG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBmdWxsd2lkdGggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+T3J0aG9ncmFwaGljPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+UGVyc3BlY3RpdmU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGdhcD1cIk1cIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciB2YWx1ZT17em9vbX0gb25DaGFuZ2U9e3NldFpvb219IC8+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFwcGx5Wm9vbX0+QXBwbHkgem9vbTwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2NhbWVyYS5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcIiAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLCAyKVxcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWy4uLnRnZENhbGNSYW5kb20zKCksIDFdXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcXG4gICAgY29uc3QgeyBuZWFyLCBmYXIgfSA9IGNhbWVyYVxcbiAgICBjb25zdCBjYW1PcnRobyA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoeyBuZWFyLCBmYXIgfSlcXG4gICAgY29uc3QgY2FtUGVyc3AgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoeyBuZWFyLCBmYXIgfSlcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIEFycmF5TnVtYmVyNCxcXG4gICAgdGdkQ2FsY0NsYW1wLFxcbiAgICB0Z2RDYWxjUmFuZG9tMyxcXG4gICAgVGdkQ2FtZXJhT3J0aG9ncmFwaGljLFxcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkTGlnaHQsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyR3JvdXBDYW1lcmEsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgICBUZ2RQYWludGVyU2Npc3NvcixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlxcXCJcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiXFxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFxcXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XFxcIlxcbmltcG9ydCB7IFZpZXdCdXR0b24sIFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsLCBWaWV3U2xpZGVyIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi91aVxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIsIDIpXFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgIGNvbG9yLFxcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICB9KVxcbiAgICBjb25zdCB7IG5lYXIsIGZhciB9ID0gY2FtZXJhXFxuICAgIGNvbnN0IGNhbU9ydGhvID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYyh7IG5lYXIsIGZhciB9KVxcbiAgICBjb25zdCBjYW1QZXJzcCA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7IG5lYXIsIGZhciB9KVxcbiAgICBjb25zdCBzY2lzc29yMSA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBjYW1lcmE6IGNhbU9ydGhvLFxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgICAgIHg6IDAsXFxuICAgICAgICB5OiAwLFxcbiAgICAgICAgd2lkdGg6IDAuNSxcXG4gICAgICAgIGhlaWdodDogMSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc2Npc3NvcjIgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgY2FtZXJhOiBjYW1QZXJzcCxcXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgICAgICB4OiAwLjUsXFxuICAgICAgICB5OiAwLFxcbiAgICAgICAgd2lkdGg6IDAuNSxcXG4gICAgICAgIGhlaWdodDogMSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCgpID0+IHtcXG4gICAgICAgICAgICBjYW1QZXJzcC5maXRTcGFjZUF0VGFyZ2V0KDIsIDIpXFxuICAgICAgICAgICAgY2FtUGVyc3AuZnJvbVRyYW5zZm8oY2FtZXJhLnRyYW5zZm8pXFxuICAgICAgICAgICAgY2FtUGVyc3Auem9vbSA9IGNhbWVyYS56b29tXFxuICAgICAgICAgICAgY2FtT3J0aG8uZml0U3BhY2VBdFRhcmdldCgyLCAyKVxcbiAgICAgICAgICAgIGNhbU9ydGhvLmZyb21UcmFuc2ZvKGNhbWVyYS50cmFuc2ZvKVxcbiAgICAgICAgICAgIGNhbU9ydGhvLnpvb20gPSBjYW1lcmEuem9vbVxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbc2Npc3NvcjEsIHNjaXNzb3IyXSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xcbiAgICAgICAgaWYgKGV2dC54IDwgMCkge1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJPcnRob2dyYXBoaWM6XFxcIiwgY2FtT3J0aG8uc3BhY2VQZXJQaXhlbCAqIGNhbU9ydGhvLnNjcmVlbkhlaWdodClcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiPiBIZWlnaHQ6XFxcIiwgY2FtT3J0aG8uc2NyZWVuSGVpZ2h0KVxcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiUGVyc3BlY3RpdmU6XFxcIiwgY2FtUGVyc3Auc3BhY2VQZXJQaXhlbCAqIGNhbVBlcnNwLnNjcmVlbkhlaWdodClcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiPiBIZWlnaHQ6XFxcIiwgY2FtUGVyc3Auc2NyZWVuSGVpZ2h0KVxcbiAgICAgICAgfVxcbiAgICB9KVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgcmV0dXJuIHtcXG4gICAgICAgIHNwbGl0KHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBjb25zdCBhID0gdGdkQ2FsY0NsYW1wKHZhbHVlLCAwLCAxKVxcbiAgICAgICAgICAgIHNjaXNzb3IxLnggPSAwXFxuICAgICAgICAgICAgc2Npc3NvcjEud2lkdGggPSBhXFxuICAgICAgICAgICAgc2Npc3NvcjIueCA9IGFcXG4gICAgICAgICAgICBzY2lzc29yMi53aWR0aCA9IDEgLSBhXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICAgICAgem9vbSh2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEuem9vbSA9IHZhbHVlXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XFxuICAgIGNvbnN0IFtzcGxpdCwgc2V0U3BsaXRdID0gdXNlRmxvYXQoMC41LCBzcnY/LnNwbGl0KVxcbiAgICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSBSZWFjdC51c2VTdGF0ZSgxKVxcbiAgICBjb25zdCBoYW5kbGVBcHBseVpvb20gPSAoKSA9PiB7XFxuICAgICAgICBpZiAoc3J2KSBzcnYuem9vbSh6b29tKVxcbiAgICB9XFxuXFxuICAgIHJldHVybiAoXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgICAgIG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gaW5pdChzY2VuZSwgYXNzZXRzKVxcbiAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgICAgIGdsYjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1emFuZTogU3V6YW5lVVJMLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYVBhbm5pbmc6IDEwMDAsXFxuICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICA8Vmlld1NsaWRlciB2YWx1ZT17c3BsaXR9IG9uQ2hhbmdlPXtzZXRTcGxpdH0gbWluPXswfSBtYXg9ezF9IHN0ZXA9ezFlLTJ9IC8+XFxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZnVsbHdpZHRoIGRpc3BsYXk9XFxcImZsZXhcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5PcnRob2dyYXBoaWM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+UGVyc3BlY3RpdmU8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cXFwiZmxleFxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIiBnYXA9XFxcIk1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciB2YWx1ZT17em9vbX0gb25DaGFuZ2U9e3NldFpvb219IC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXtoYW5kbGVBcHBseVpvb219PkFwcGx5IHpvb208L1ZpZXdCdXR0b24+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgIDwvVmlldz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZsb2F0KFxuICAgIGluaXRpYWxWYWx1ZTogbnVtYmVyLFxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQsXG4pOiBbdmFsdWU6IG51bWJlciwgc2V0VmFsdWU6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkXSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IG9uQ2hhbmdlPy4odmFsdWUpLCBbdmFsdWVdKVxuICAgIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ0Z2RDYWxjQ2xhbXAiLCJ0Z2RDYWxjUmFuZG9tMyIsIlRnZENhbWVyYU9ydGhvZ3JhcGhpYyIsIlRnZENhbWVyYVBlcnNwZWN0aXZlIiwiVGdkTGlnaHQiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyR3JvdXBDYW1lcmEiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU2Npc3NvciIsIlRnZFBhaW50ZXJTdGF0ZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiU3V6YW5lVVJMIiwiUmVhY3QiLCJ1c2VGbG9hdCIsIlZpZXdCdXR0b24iLCJWaWV3SW5wdXROdW1iZXIiLCJWaWV3UGFuZWwiLCJWaWV3U2xpZGVyIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjYW1lcmEiLCJjb2xvciIsIm1hdGVyaWFsIiwibWVzaCIsIm5lYXIiLCJmYXIiLCJjYW1PcnRobyIsImNhbVBlcnNwIiwic2Npc3NvcjEiLCJzY2lzc29yMiIsImV2dCIsImNvbnNvbGUiLCJzcGxpdCIsInZhbHVlIiwiYSIsInpvb20iLCJEZW1vIiwicmVmIiwic3J2IiwiX3VzZUZsb2F0Iiwic2V0U3BsaXQiLCJfUmVhY3RfdXNlU3RhdGUiLCJzZXRab29tIiwiaGFuZGxlQXBwbHlab29tIiwib25SZWFkeSIsInNjZW5lIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJpbml0aWFsVmFsdWUiLCJvbkNoYW5nZSIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnVCO0FBQzZCO0FBQ0g7QUFDeEI7QUFDcUI7QUFDb0M7QUFFbEYsU0FBU3FCLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDN0MsNEJBQTRCO0lBQzVCLElBQVFDLFNBQVdGLFFBQVhFO0lBQ1JBLE9BQU8sZ0JBQWdCLENBQUMsR0FBRztJQUMzQixJQUFNQyxRQUF1QixxQkFBR3hCLGtEQUFjQSxXQUFsQjtRQUFzQjtLQUFFO0lBQ3BELElBQU15QixXQUFXLElBQUlyQixrREFBa0JBLENBQUM7UUFDcENvQixPQUFBQTtRQUNBLFNBQVMsSUFBSXJCLHdDQUFRQSxDQUFDO1lBQ2xCLE9BQU87Z0JBQUM7Z0JBQUs7Z0JBQUs7Z0JBQUs7YUFBRTtRQUM3QjtRQUNBLG9CQUFvQjtJQUN4QjtJQUNBLElBQU11QixPQUFPLElBQUlsQixrREFBa0JBLENBQUNhLFNBQVM7UUFDekMsT0FBT0MsT0FBTyxHQUFHLENBQUMsTUFBTTtRQUN4QkcsVUFBQUE7SUFDSjtJQUNBLElBQVFFLE9BQWNKLE9BQWRJLE1BQU1DLE1BQVFMLE9BQVJLO0lBQ2QsSUFBTUMsV0FBVyxJQUFJNUIscURBQXFCQSxDQUFDO1FBQUUwQixNQUFBQTtRQUFNQyxLQUFBQTtJQUFJO0lBQ3ZELElBQU1FLFdBQVcsSUFBSTVCLG9EQUFvQkEsQ0FBQztRQUFFeUIsTUFBQUE7UUFBTUMsS0FBQUE7SUFBSTtJQUN0RCxPQUFPO0lBQ1AsSUFBTUcsV0FBVyxJQUFJdEIsaURBQWlCQSxDQUFDWSxTQUFTO1FBQzVDLFVBQVU7WUFDTixJQUFJZixxREFBcUJBLENBQUNlLFNBQVM7Z0JBQy9CLFFBQVFRO2dCQUNSLFVBQVU7b0JBQUNIO2lCQUFLO1lBQ3BCO1NBQ0g7UUFDRCxHQUFHO1FBQ0gsR0FBRztRQUNILE9BQU87UUFDUCxRQUFRO0lBQ1o7SUFDQSxJQUFNTSxXQUFXLElBQUl2QixpREFBaUJBLENBQUNZLFNBQVM7UUFDNUMsVUFBVTtZQUNOLElBQUlmLHFEQUFxQkEsQ0FBQ2UsU0FBUztnQkFDL0IsUUFBUVM7Z0JBQ1IsVUFBVTtvQkFBQ0o7aUJBQUs7WUFDcEI7U0FDSDtRQUNELEdBQUc7UUFDSCxHQUFHO1FBQ0gsT0FBTztRQUNQLFFBQVE7SUFDWjtJQUNBTCxRQUFRLEdBQUcsQ0FDUCxJQUFJZCwrQ0FBZUEsQ0FBQztRQUNoQnVCLFNBQVMsZ0JBQWdCLENBQUMsR0FBRztRQUM3QkEsU0FBUyxXQUFXLENBQUNQLE9BQU8sT0FBTztRQUNuQ08sU0FBUyxJQUFJLEdBQUdQLE9BQU8sSUFBSTtRQUMzQk0sU0FBUyxnQkFBZ0IsQ0FBQyxHQUFHO1FBQzdCQSxTQUFTLFdBQVcsQ0FBQ04sT0FBTyxPQUFPO1FBQ25DTSxTQUFTLElBQUksR0FBR04sT0FBTyxJQUFJO0lBQy9CLElBQ0EsSUFBSWxCLCtDQUFlQSxDQUFDZ0IsU0FBUztRQUN6QixPQUFPO1lBQUM7WUFBSztZQUFLO1lBQUs7U0FBRTtRQUN6QixPQUFPO0lBQ1gsSUFDQSxJQUFJWCwrQ0FBZUEsQ0FBQ1csU0FBUztRQUN6QixPQUFPVixxREFBcUI7UUFDNUIsVUFBVTtZQUFDb0I7WUFBVUM7U0FBUztJQUNsQztJQUVKWCxRQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFDWTtRQUN6QyxJQUFJQSxJQUFJLENBQUMsR0FBRyxHQUFHO1lBQ1hDLFFBQVEsR0FBRyxDQUFDLGlCQUFpQkwsU0FBUyxhQUFhLEdBQUdBLFNBQVMsWUFBWTtZQUMzRUssUUFBUSxHQUFHLENBQUMsYUFBYUwsU0FBUyxZQUFZO1FBQ2xELE9BQU87WUFDSEssUUFBUSxHQUFHLENBQUMsZ0JBQWdCSixTQUFTLGFBQWEsR0FBR0EsU0FBUyxZQUFZO1lBQzFFSSxRQUFRLEdBQUcsQ0FBQyxhQUFhSixTQUFTLFlBQVk7UUFDbEQ7SUFDSjtJQUNBVCxRQUFRLEtBQUs7SUFDYixPQUFPO1FBQ0hjLE9BQUFBLFNBQUFBLE1BQU1DLEtBQWE7WUFDZixJQUFNQyxJQUFJdEMsZ0RBQVlBLENBQUNxQyxPQUFPLEdBQUc7WUFDakNMLFNBQVMsQ0FBQyxHQUFHO1lBQ2JBLFNBQVMsS0FBSyxHQUFHTTtZQUNqQkwsU0FBUyxDQUFDLEdBQUdLO1lBQ2JMLFNBQVMsS0FBSyxHQUFHLElBQUlLO1lBQ3JCaEIsUUFBUSxLQUFLO1FBQ2pCO1FBQ0FpQixNQUFBQSxTQUFBQSxLQUFLRixLQUFhO1lBQ2RmLFFBQVEsTUFBTSxDQUFDLElBQUksR0FBR2U7WUFDdEJmLFFBQVEsS0FBSztRQUNqQjtJQUNKO0FBQ0o7QUFFZSxTQUFTa0I7SUFDcEIsSUFBTUMsTUFBTTFCLHVDQUFZLENBQWlDO0lBQ3pELElBQU0yQixNQUFNRCxJQUFJLE9BQU87SUFDdkIsSUFBMEJFLDZCQUFBQSxnREFBUUEsQ0FBQyxLQUFLRCxnQkFBQUEsMEJBQUFBLElBQUssS0FBSyxPQUEzQ04sUUFBbUJPLGNBQVpDLFdBQVlEO0lBQzFCLElBQXdCRSxtQ0FBQUEseUNBQWMsQ0FBQyxRQUFoQ04sT0FBaUJNLG9CQUFYQyxVQUFXRDtJQUN4QixJQUFNRSxrQkFBa0I7UUFDcEIsSUFBSUwsS0FBS0EsSUFBSSxJQUFJLENBQUNIO0lBQ3RCO0lBRUEscUJBQ0ksa0RBQUM7a0JBQ0csZ0VBQUMxQixnREFBSUE7WUFDRG1DLFNBQVMsU0FBVEEsUUFBVUMsT0FBbUIxQjtnQkFDekJrQixJQUFJLE9BQU8sR0FBR3BCLEtBQUs0QixPQUFPMUI7WUFDOUI7WUFDQSxRQUFRO2dCQUNKLEtBQUs7b0JBQ0QsUUFBUVQseUNBQVNBO2dCQUNyQjtZQUNKO1lBQ0EsS0FBSztZQUNMLFlBQVk7Z0JBQ1IsY0FBYztnQkFDZCxnQkFBZ0I7WUFDcEI7OzhCQUNBLGtEQUFDTSx5Q0FBVUE7b0JBQUMsT0FBT2dCO29CQUFPLFVBQVVRO29CQUFVLEtBQUs7b0JBQUcsS0FBSztvQkFBRyxNQUFNOzs7Ozs7OEJBQ3BFLGtEQUFDekIsd0NBQVNBO29CQUFDLFNBQVM7b0JBQUMsU0FBUTtvQkFBTyxnQkFBZTtvQkFBZ0IsWUFBVzs7c0NBQzFFLGtEQUFDO3NDQUFJOzs7Ozs7c0NBQ0wsa0RBQUM7c0NBQUk7Ozs7Ozs7Ozs7Ozs4QkFFVCxrREFBQ0Esd0NBQVNBO29CQUFDLFNBQVE7b0JBQU8sWUFBVztvQkFBUyxLQUFJOztzQ0FDOUMsa0RBQUNELDhDQUFlQTs0QkFBQyxPQUFPcUI7NEJBQU0sVUFBVU87Ozs7OztzQ0FDeEMsa0RBQUM3Qix5Q0FBVUE7NEJBQUMsU0FBUzhCO3NDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEpBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDckI7QUFFaEMsSUFBTUksUUFBUTtJQUFDLHNCQUFxQjtBQUE4a0I7QUFDbG5CLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QlIsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENTLE9BQWlCVCxvQkFBWFUsVUFBV1Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNMLHdDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUN2Qix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV3VDLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUd0QyxrREFBQ0osdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FBT0ksT0FBT0YsT0FBT0Q7Ozs7Ozs7Ozs7Ozs7O0FBRzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnlCO0FBRWxCLFNBQVNuQyxTQUNaeUMsWUFBb0IsRUFDcEJDLFFBQWtDO0lBRWxDLElBQTBCYixtQ0FBQUEseUNBQWMsQ0FBQ1ksbUJBQWxDcEIsUUFBbUJRLG9CQUFaYyxXQUFZZDtJQUMxQjlCLDBDQUFlLENBQUM7ZUFBTTJDLHFCQUFBQSwrQkFBQUEsU0FBV3JCO09BQVE7UUFBQ0E7S0FBTTtJQUNoRCxPQUFPO1FBQUNBO1FBQU9zQjtLQUFTO0FBQzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUaUI7Ozs7Ozs7Ozs7OzBCQUVmOzs7Ozs7Ozs7Ozs7O3NDQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkg7QUFDQSxZQUFZLGVBQWU7QUFDM0IsWUFBWSxvQ0FBb0M7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QztBQUNBLGNBQWMsOERBQThEO0FBQzVFO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTs7QUFFeUI7O0FBRXpCLFdBQVcseUJBQXlCO0FBQ3BDOztBQUVBLG1CQUFtQixvQ0FBbUI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQThEO0FBQ3pFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLDRCQUE0QixpQ0FBZ0I7O0FBRTVDO0FBQ0EsU0FBUyw4QkFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsZUFBZTtBQUNmO0FBQ087QUFDUCxhQUFhLHlCQUF5QjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsU0FBUyxvQ0FBbUI7QUFDNUI7QUFDQSxLQUFLLHFCQUFxQjtBQUMxQjtBQUNBO0FBQ0EifQ==