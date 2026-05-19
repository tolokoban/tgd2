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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "Perspective"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 140,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewButton, {
                            onClick: handleApplyZoom,
                            children: "Apply zoom"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                    lineNumber: 142,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
            lineNumber: 123,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                            lineNumber: 5,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                        lineNumber: 5,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_camera__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfY2FtZXJhX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jc3Mtc3JjX2NvbS1hOTRkZGYuNDU2OGNhMjE4ZjMwOThjMi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jYW1lcmEvXy9jYW1lcmEvY2FtZXJhLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jYW1lcmEvXy9jYW1lcmEvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3V0aWxzL2hvb2tzL2Zsb2F0LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jYW1lcmEvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBcnJheU51bWJlcjQsXG4gICAgdGdkQ2FsY0NsYW1wLFxuICAgIHRnZENhbGNSYW5kb20zLFxuICAgIFRnZENhbWVyYU9ydGhvZ3JhcGhpYyxcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZExpZ2h0LFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckdyb3VwQ2FtZXJhLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclNjaXNzb3IsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24sIFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsLCBWaWV3U2xpZGVyIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMiwgMilcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWy4uLnRnZENhbGNSYW5kb20zKCksIDFdXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XG4gICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxuICAgICAgICB9KSxcbiAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxuICAgIH0pXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXG4gICAgICAgIG1hdGVyaWFsLFxuICAgIH0pXG4gICAgY29uc3QgeyBuZWFyLCBmYXIgfSA9IGNhbWVyYVxuICAgIGNvbnN0IGNhbU9ydGhvID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYyh7IG5lYXIsIGZhciB9KVxuICAgIGNvbnN0IGNhbVBlcnNwID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHsgbmVhciwgZmFyIH0pXG4gICAgLy8gI2VuZFxuICAgIGNvbnN0IHNjaXNzb3IxID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGNhbWVyYTogY2FtT3J0aG8sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogMC41LFxuICAgICAgICBoZWlnaHQ6IDEsXG4gICAgfSlcbiAgICBjb25zdCBzY2lzc29yMiA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBjYW1lcmE6IGNhbVBlcnNwLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgeDogMC41LFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogMC41LFxuICAgICAgICBoZWlnaHQ6IDEsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygoKSA9PiB7XG4gICAgICAgICAgICBjYW1QZXJzcC5maXRTcGFjZUF0VGFyZ2V0KDIsIDIpXG4gICAgICAgICAgICBjYW1QZXJzcC5mcm9tVHJhbnNmbyhjYW1lcmEudHJhbnNmbylcbiAgICAgICAgICAgIGNhbVBlcnNwLnpvb20gPSBjYW1lcmEuem9vbVxuICAgICAgICAgICAgY2FtT3J0aG8uZml0U3BhY2VBdFRhcmdldCgyLCAyKVxuICAgICAgICAgICAgY2FtT3J0aG8uZnJvbVRyYW5zZm8oY2FtZXJhLnRyYW5zZm8pXG4gICAgICAgICAgICBjYW1PcnRoby56b29tID0gY2FtZXJhLnpvb21cbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzY2lzc29yMSwgc2Npc3NvcjJdLFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XG4gICAgICAgIGlmIChldnQueCA8IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT3J0aG9ncmFwaGljOlwiLCBjYW1PcnRoby5zcGFjZVBlclBpeGVsICogY2FtT3J0aG8uc2NyZWVuSGVpZ2h0KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI+IEhlaWdodDpcIiwgY2FtT3J0aG8uc2NyZWVuSGVpZ2h0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJzcGVjdGl2ZTpcIiwgY2FtUGVyc3Auc3BhY2VQZXJQaXhlbCAqIGNhbVBlcnNwLnNjcmVlbkhlaWdodClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPiBIZWlnaHQ6XCIsIGNhbVBlcnNwLnNjcmVlbkhlaWdodClcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3BsaXQodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgYSA9IHRnZENhbGNDbGFtcCh2YWx1ZSwgMCwgMSlcbiAgICAgICAgICAgIHNjaXNzb3IxLnggPSAwXG4gICAgICAgICAgICBzY2lzc29yMS53aWR0aCA9IGFcbiAgICAgICAgICAgIHNjaXNzb3IyLnggPSBhXG4gICAgICAgICAgICBzY2lzc29yMi53aWR0aCA9IDEgLSBhXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICAgICAgem9vbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS56b29tID0gdmFsdWVcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICB9LFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XG4gICAgY29uc3QgW3NwbGl0LCBzZXRTcGxpdF0gPSB1c2VGbG9hdCgwLjUsIHNydj8uc3BsaXQpXG4gICAgY29uc3QgW3pvb20sIHNldFpvb21dID0gUmVhY3QudXNlU3RhdGUoMSlcbiAgICBjb25zdCBoYW5kbGVBcHBseVpvb20gPSAoKSA9PiB7XG4gICAgICAgIGlmIChzcnYpIHNydi56b29tKHpvb20pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgb25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1emFuZTogU3V6YW5lVVJMLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZ2l6bW9cbiAgICAgICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYVBhbm5pbmc6IDEwMDAsXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPFZpZXdTbGlkZXIgdmFsdWU9e3NwbGl0fSBvbkNoYW5nZT17c2V0U3BsaXR9IG1pbj17MH0gbWF4PXsxfSBzdGVwPXsxZS0yfSAvPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZnVsbHdpZHRoIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk9ydGhvZ3JhcGhpYzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlBlcnNwZWN0aXZlPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBnYXA9XCJNXCI+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgdmFsdWU9e3pvb219IG9uQ2hhbmdlPXtzZXRab29tfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXtoYW5kbGVBcHBseVpvb219PkFwcGx5IHpvb208L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9jYW1lcmEuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XCIgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMiwgMilcXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgY29sb3IsXFxuICAgICAgICBhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH0pXFxuICAgIGNvbnN0IHsgbmVhciwgZmFyIH0gPSBjYW1lcmFcXG4gICAgY29uc3QgY2FtT3J0aG8gPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHsgbmVhciwgZmFyIH0pXFxuICAgIGNvbnN0IGNhbVBlcnNwID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHsgbmVhciwgZmFyIH0pXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBBcnJheU51bWJlcjQsXFxuICAgIHRnZENhbGNDbGFtcCxcXG4gICAgdGdkQ2FsY1JhbmRvbTMsXFxuICAgIFRnZENhbWVyYU9ydGhvZ3JhcGhpYyxcXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZExpZ2h0LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckdyb3VwQ2FtZXJhLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcXG4gICAgVGdkUGFpbnRlclNjaXNzb3IsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgU3V6YW5lVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcXFwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcXFwiQC91dGlscy9ob29rcy9mbG9hdFxcXCJcXG5pbXBvcnQgeyBWaWV3QnV0dG9uLCBWaWV3SW5wdXROdW1iZXIsIFZpZXdQYW5lbCwgVmlld1NsaWRlciB9IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLCAyKVxcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWy4uLnRnZENhbGNSYW5kb20zKCksIDFdXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcXG4gICAgY29uc3QgeyBuZWFyLCBmYXIgfSA9IGNhbWVyYVxcbiAgICBjb25zdCBjYW1PcnRobyA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoeyBuZWFyLCBmYXIgfSlcXG4gICAgY29uc3QgY2FtUGVyc3AgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoeyBuZWFyLCBmYXIgfSlcXG4gICAgY29uc3Qgc2Npc3NvcjEgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgY2FtZXJhOiBjYW1PcnRobyxcXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgICAgICB4OiAwLFxcbiAgICAgICAgeTogMCxcXG4gICAgICAgIHdpZHRoOiAwLjUsXFxuICAgICAgICBoZWlnaHQ6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHNjaXNzb3IyID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJHcm91cENhbWVyYShjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGNhbWVyYTogY2FtUGVyc3AsXFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICAgICAgeDogMC41LFxcbiAgICAgICAgeTogMCxcXG4gICAgICAgIHdpZHRoOiAwLjUsXFxuICAgICAgICBoZWlnaHQ6IDEsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygoKSA9PiB7XFxuICAgICAgICAgICAgY2FtUGVyc3AuZml0U3BhY2VBdFRhcmdldCgyLCAyKVxcbiAgICAgICAgICAgIGNhbVBlcnNwLmZyb21UcmFuc2ZvKGNhbWVyYS50cmFuc2ZvKVxcbiAgICAgICAgICAgIGNhbVBlcnNwLnpvb20gPSBjYW1lcmEuem9vbVxcbiAgICAgICAgICAgIGNhbU9ydGhvLmZpdFNwYWNlQXRUYXJnZXQoMiwgMilcXG4gICAgICAgICAgICBjYW1PcnRoby5mcm9tVHJhbnNmbyhjYW1lcmEudHJhbnNmbylcXG4gICAgICAgICAgICBjYW1PcnRoby56b29tID0gY2FtZXJhLnpvb21cXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3NjaXNzb3IxLCBzY2lzc29yMl0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG4gICAgICAgIGlmIChldnQueCA8IDApIHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiT3J0aG9ncmFwaGljOlxcXCIsIGNhbU9ydGhvLnNwYWNlUGVyUGl4ZWwgKiBjYW1PcnRoby5zY3JlZW5IZWlnaHQpXFxuICAgICAgICAgICAgY29uc29sZS5sb2coXFxcIj4gSGVpZ2h0OlxcXCIsIGNhbU9ydGhvLnNjcmVlbkhlaWdodClcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgY29uc29sZS5sb2coXFxcIlBlcnNwZWN0aXZlOlxcXCIsIGNhbVBlcnNwLnNwYWNlUGVyUGl4ZWwgKiBjYW1QZXJzcC5zY3JlZW5IZWlnaHQpXFxuICAgICAgICAgICAgY29uc29sZS5sb2coXFxcIj4gSGVpZ2h0OlxcXCIsIGNhbVBlcnNwLnNjcmVlbkhlaWdodClcXG4gICAgICAgIH1cXG4gICAgfSlcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIHJldHVybiB7XFxuICAgICAgICBzcGxpdCh2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgY29uc3QgYSA9IHRnZENhbGNDbGFtcCh2YWx1ZSwgMCwgMSlcXG4gICAgICAgICAgICBzY2lzc29yMS54ID0gMFxcbiAgICAgICAgICAgIHNjaXNzb3IxLndpZHRoID0gYVxcbiAgICAgICAgICAgIHNjaXNzb3IyLnggPSBhXFxuICAgICAgICAgICAgc2Npc3NvcjIud2lkdGggPSAxIC0gYVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgICAgIHpvb20odmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnpvb20gPSB2YWx1ZVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBzcnYgPSByZWYuY3VycmVudFxcbiAgICBjb25zdCBbc3BsaXQsIHNldFNwbGl0XSA9IHVzZUZsb2F0KDAuNSwgc3J2Py5zcGxpdClcXG4gICAgY29uc3QgW3pvb20sIHNldFpvb21dID0gUmVhY3QudXNlU3RhdGUoMSlcXG4gICAgY29uc3QgaGFuZGxlQXBwbHlab29tID0gKCkgPT4ge1xcbiAgICAgICAgaWYgKHNydikgc3J2Lnpvb20oem9vbSlcXG4gICAgfVxcblxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgICAgICBvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXphbmU6IFN1emFuZVVSTCxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFQYW5uaW5nOiAxMDAwLFxcbiAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgPFZpZXdTbGlkZXIgdmFsdWU9e3NwbGl0fSBvbkNoYW5nZT17c2V0U3BsaXR9IG1pbj17MH0gbWF4PXsxfSBzdGVwPXsxZS0yfSAvPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGZ1bGx3aWR0aCBkaXNwbGF5PVxcXCJmbGV4XFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYmV0d2VlblxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+T3J0aG9ncmFwaGljPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlBlcnNwZWN0aXZlPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XFxcImZsZXhcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgZ2FwPVxcXCJNXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgdmFsdWU9e3pvb219IG9uQ2hhbmdlPXtzZXRab29tfSAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17aGFuZGxlQXBwbHlab29tfT5BcHBseSB6b29tPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgICAgICA8L1ZpZXc+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGbG9hdChcbiAgICBpbml0aWFsVmFsdWU6IG51bWJlcixcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkLFxuKTogW3ZhbHVlOiBudW1iZXIsIHNldFZhbHVlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZF0ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBvbkNoYW5nZT8uKHZhbHVlKSwgW3ZhbHVlXSlcbiAgICByZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV1cbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsidGdkQ2FsY0NsYW1wIiwidGdkQ2FsY1JhbmRvbTMiLCJUZ2RDYW1lcmFPcnRob2dyYXBoaWMiLCJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZExpZ2h0IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckdyb3VwQ2FtZXJhIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclNjaXNzb3IiLCJUZ2RQYWludGVyU3RhdGUiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIlN1emFuZVVSTCIsIlJlYWN0IiwidXNlRmxvYXQiLCJWaWV3QnV0dG9uIiwiVmlld0lucHV0TnVtYmVyIiwiVmlld1BhbmVsIiwiVmlld1NsaWRlciIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2FtZXJhIiwiY29sb3IiLCJtYXRlcmlhbCIsIm1lc2giLCJuZWFyIiwiZmFyIiwiY2FtT3J0aG8iLCJjYW1QZXJzcCIsInNjaXNzb3IxIiwic2Npc3NvcjIiLCJldnQiLCJjb25zb2xlIiwic3BsaXQiLCJ2YWx1ZSIsImEiLCJ6b29tIiwiRGVtbyIsInJlZiIsInNydiIsIl91c2VGbG9hdCIsInNldFNwbGl0IiwiX1JlYWN0X3VzZVN0YXRlIiwic2V0Wm9vbSIsImhhbmRsZUFwcGx5Wm9vbSIsIm9uUmVhZHkiLCJzY2VuZSIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiaW5pdGlhbFZhbHVl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