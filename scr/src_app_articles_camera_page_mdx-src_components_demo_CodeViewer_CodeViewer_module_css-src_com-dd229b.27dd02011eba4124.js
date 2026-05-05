"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_camera_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-src_com-dd229b"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

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
                    lineNumber: 139,
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
                            lineNumber: 141,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "Perspective"
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                    lineNumber: 140,
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
                            lineNumber: 145,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewButton, {
                            onClick: handleApplyZoom,
                            children: "Apply zoom"
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                    lineNumber: 144,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
            lineNumber: 125,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
        lineNumber: 124,
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
var FULL = "import {\n    ArrayNumber4,\n    tgdCalcClamp,\n    tgdCalcRandom3,\n    TgdCameraOrthographic,\n    TgdCameraPerspective,\n    TgdContext,\n    TgdGeometrySphereIco,\n    TgdLight,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterGroupCamera,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterMeshGltf,\n    TgdPainterScissor,\n    TgdPainterState,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport React from \"react\"\nimport { useFloat } from \"@/utils/hooks/float\"\nimport { ViewButton, ViewInputNumber, ViewPanel, ViewSlider } from \"@tolokoban/ui\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const { camera } = context\n    camera.fitSpaceAtTarget(2, 2)\n    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]\n    const material = new TgdMaterialDiffuse({\n        color,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n        lockLightsToCamera: true,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material,\n    })\n    const { near, far } = camera\n    const camOrtho = new TgdCameraOrthographic({ near, far })\n    const camPersp = new TgdCameraPerspective({ near, far })\n    const scissor1 = new TgdPainterScissor(context, {\n        children: [\n            new TgdPainterGroupCamera(context, {\n                camera: camOrtho,\n                children: [mesh],\n            }),\n        ],\n        x: 0,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    })\n    const scissor2 = new TgdPainterScissor(context, {\n        children: [\n            new TgdPainterGroupCamera(context, {\n                camera: camPersp,\n                children: [mesh],\n            }),\n        ],\n        x: 0.5,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    })\n    context.add(\n        new TgdPainterLogic(() => {\n            camPersp.fitSpaceAtTarget(2, 2)\n            camPersp.fromTransfo(camera.transfo)\n            camPersp.zoom = camera.zoom\n            camOrtho.fitSpaceAtTarget(2, 2)\n            camOrtho.fromTransfo(camera.transfo)\n            camOrtho.zoom = camera.zoom\n        }),\n        new TgdPainterClear(context, {\n            color: [0.3, 0.3, 0.3, 1],\n            depth: 1,\n        }),\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [scissor1, scissor2],\n        }),\n    )\n    context.inputs.pointer.eventTap.addListener((evt) => {\n        if (evt.x < 0) {\n            console.log(\"Orthographic:\", camOrtho.spacePerPixel * camOrtho.screenHeight)\n            console.log(\"> Height:\", camOrtho.screenHeight)\n        } else {\n            console.log(\"Perspective:\", camPersp.spacePerPixel * camPersp.screenHeight)\n            console.log(\"> Height:\", camPersp.screenHeight)\n        }\n    })\n    context.paint()\n    return {\n        split(value: number) {\n            const a = tgdCalcClamp(value, 0, 1)\n            scissor1.x = 0\n            scissor1.width = a\n            scissor2.x = a\n            scissor2.width = 1 - a\n            context.paint()\n        },\n        zoom(value: number) {\n            context.camera.zoom = value\n            context.paint()\n        },\n    }\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null)\n    const srv = ref.current\n    const [split, setSplit] = useFloat(0.5, srv?.split)\n    const [zoom, setZoom] = React.useState(1)\n    const handleApplyZoom = () => {\n        if (srv) srv.zoom(zoom)\n    }\n\n    return (\n        <div>\n            <View\n                onReady={(scene: TgdContext, assets: Assets) => {\n                    ref.current = init(scene, assets)\n                }}\n                assets={{\n                    glb: {\n                        suzane: SuzaneURL,\n                    },\n                }}\n                gizmo\n                controller={{\n                    inertiaOrbit: 1000,\n                    inertiaPanning: 1000,\n                }}>\n                <ViewSlider value={split} onChange={setSplit} min={0} max={1} step={1e-2} />\n                <ViewPanel fullwidth display=\"flex\" justifyContent=\"space-between\" alignItems=\"center\">\n                    <div>Orthographic</div>\n                    <div>Perspective</div>\n                </ViewPanel>\n                <ViewPanel display=\"flex\" alignItems=\"center\" gap=\"M\">\n                    <ViewInputNumber value={zoom} onChange={setZoom} />\n                    <ViewButton onClick={handleApplyZoom}>Apply zoom</ViewButton>\n                </ViewPanel>\n            </View>\n        </div>\n    )\n}\n";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfY2FtZXJhX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jc3Mtc3JjX2NvbS1kZDIyOWIuMjdkZDAyMDExZWJhNDEyNC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvY2FtZXJhL18vY2FtZXJhL2NhbWVyYS5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL2NhbWVyYS9fL2NhbWVyYS9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3V0aWxzL2hvb2tzL2Zsb2F0LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvY2FtZXJhL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFycmF5TnVtYmVyNCxcbiAgICB0Z2RDYWxjQ2xhbXAsXG4gICAgdGdkQ2FsY1JhbmRvbTMsXG4gICAgVGdkQ2FtZXJhT3J0aG9ncmFwaGljLFxuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkR2VvbWV0cnlTcGhlcmVJY28sXG4gICAgVGdkTGlnaHQsXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyR3JvdXBDYW1lcmEsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU2Npc3NvcixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcIkAvdXRpbHMvaG9va3MvZmxvYXRcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiwgVmlld0lucHV0TnVtYmVyLCBWaWV3UGFuZWwsIFZpZXdTbGlkZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLCAyKVxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICBjb2xvcixcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcbiAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXG4gICAgICAgIH0pLFxuICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG4gICAgfSlcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcbiAgICAgICAgbWF0ZXJpYWwsXG4gICAgfSlcbiAgICBjb25zdCB7IG5lYXIsIGZhciB9ID0gY2FtZXJhXG4gICAgY29uc3QgY2FtT3J0aG8gPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHsgbmVhciwgZmFyIH0pXG4gICAgY29uc3QgY2FtUGVyc3AgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoeyBuZWFyLCBmYXIgfSlcbiAgICAvLyAjZW5kXG4gICAgY29uc3Qgc2Npc3NvcjEgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJHcm91cENhbWVyYShjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgY2FtZXJhOiBjYW1PcnRobyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiAwLjUsXG4gICAgICAgIGhlaWdodDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHNjaXNzb3IyID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGNhbWVyYTogY2FtUGVyc3AsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICB4OiAwLjUsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiAwLjUsXG4gICAgICAgIGhlaWdodDogMSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCgpID0+IHtcbiAgICAgICAgICAgIGNhbVBlcnNwLmZpdFNwYWNlQXRUYXJnZXQoMiwgMilcbiAgICAgICAgICAgIGNhbVBlcnNwLmZyb21UcmFuc2ZvKGNhbWVyYS50cmFuc2ZvKVxuICAgICAgICAgICAgY2FtUGVyc3Auem9vbSA9IGNhbWVyYS56b29tXG4gICAgICAgICAgICBjYW1PcnRoby5maXRTcGFjZUF0VGFyZ2V0KDIsIDIpXG4gICAgICAgICAgICBjYW1PcnRoby5mcm9tVHJhbnNmbyhjYW1lcmEudHJhbnNmbylcbiAgICAgICAgICAgIGNhbU9ydGhvLnpvb20gPSBjYW1lcmEuem9vbVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxuICAgICAgICAgICAgZGVwdGg6IDEsXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3NjaXNzb3IxLCBzY2lzc29yMl0sXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IHtcbiAgICAgICAgaWYgKGV2dC54IDwgMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPcnRob2dyYXBoaWM6XCIsIGNhbU9ydGhvLnNwYWNlUGVyUGl4ZWwgKiBjYW1PcnRoby5zY3JlZW5IZWlnaHQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4gSGVpZ2h0OlwiLCBjYW1PcnRoby5zY3JlZW5IZWlnaHQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcnNwZWN0aXZlOlwiLCBjYW1QZXJzcC5zcGFjZVBlclBpeGVsICogY2FtUGVyc3Auc2NyZWVuSGVpZ2h0KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI+IEhlaWdodDpcIiwgY2FtUGVyc3Auc2NyZWVuSGVpZ2h0KVxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICByZXR1cm4ge1xuICAgICAgICBzcGxpdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBhID0gdGdkQ2FsY0NsYW1wKHZhbHVlLCAwLCAxKVxuICAgICAgICAgICAgc2Npc3NvcjEueCA9IDBcbiAgICAgICAgICAgIHNjaXNzb3IxLndpZHRoID0gYVxuICAgICAgICAgICAgc2Npc3NvcjIueCA9IGFcbiAgICAgICAgICAgIHNjaXNzb3IyLndpZHRoID0gMSAtIGFcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICB9LFxuICAgICAgICB6b29tKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnpvb20gPSB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpXG4gICAgY29uc3Qgc3J2ID0gcmVmLmN1cnJlbnRcbiAgICBjb25zdCBbc3BsaXQsIHNldFNwbGl0XSA9IHVzZUZsb2F0KDAuNSwgc3J2Py5zcGxpdClcbiAgICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSBSZWFjdC51c2VTdGF0ZSgxKVxuICAgIGNvbnN0IGhhbmRsZUFwcGx5Wm9vbSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNydikgc3J2Lnpvb20oem9vbSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICBvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gaW5pdChzY2VuZSwgYXNzZXRzKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgICAgIGdsYjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3V6YW5lOiBTdXphbmVVUkwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBnaXptb1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICBpbmVydGlhUGFubmluZzogMTAwMCxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8Vmlld1NsaWRlciB2YWx1ZT17c3BsaXR9IG9uQ2hhbmdlPXtzZXRTcGxpdH0gbWluPXswfSBtYXg9ezF9IHN0ZXA9ezFlLTJ9IC8+XG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBmdWxsd2lkdGggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+T3J0aG9ncmFwaGljPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+UGVyc3BlY3RpdmU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGdhcD1cIk1cIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciB2YWx1ZT17em9vbX0gb25DaGFuZ2U9e3NldFpvb219IC8+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFwcGx5Wm9vbX0+QXBwbHkgem9vbTwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2NhbWVyYS5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcIiAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLCAyKVxcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWy4uLnRnZENhbGNSYW5kb20zKCksIDFdXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcXG4gICAgY29uc3QgeyBuZWFyLCBmYXIgfSA9IGNhbWVyYVxcbiAgICBjb25zdCBjYW1PcnRobyA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoeyBuZWFyLCBmYXIgfSlcXG4gICAgY29uc3QgY2FtUGVyc3AgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoeyBuZWFyLCBmYXIgfSlcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIEFycmF5TnVtYmVyNCxcXG4gICAgdGdkQ2FsY0NsYW1wLFxcbiAgICB0Z2RDYWxjUmFuZG9tMyxcXG4gICAgVGdkQ2FtZXJhT3J0aG9ncmFwaGljLFxcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkR2VvbWV0cnlTcGhlcmVJY28sXFxuICAgIFRnZExpZ2h0LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckdyb3VwQ2FtZXJhLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTY2lzc29yLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIlxcbmltcG9ydCBSZWFjdCBmcm9tIFxcXCJyZWFjdFxcXCJcXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXFxcIkAvdXRpbHMvaG9va3MvZmxvYXRcXFwiXFxuaW1wb3J0IHsgVmlld0J1dHRvbiwgVmlld0lucHV0TnVtYmVyLCBWaWV3UGFuZWwsIFZpZXdTbGlkZXIgfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3VpXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMiwgMilcXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgY29sb3IsXFxuICAgICAgICBhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH0pXFxuICAgIGNvbnN0IHsgbmVhciwgZmFyIH0gPSBjYW1lcmFcXG4gICAgY29uc3QgY2FtT3J0aG8gPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHsgbmVhciwgZmFyIH0pXFxuICAgIGNvbnN0IGNhbVBlcnNwID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHsgbmVhciwgZmFyIH0pXFxuICAgIGNvbnN0IHNjaXNzb3IxID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJHcm91cENhbWVyYShjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGNhbWVyYTogY2FtT3J0aG8sXFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICAgICAgeDogMCxcXG4gICAgICAgIHk6IDAsXFxuICAgICAgICB3aWR0aDogMC41LFxcbiAgICAgICAgaGVpZ2h0OiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBzY2lzc29yMiA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBjYW1lcmE6IGNhbVBlcnNwLFxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgICAgIHg6IDAuNSxcXG4gICAgICAgIHk6IDAsXFxuICAgICAgICB3aWR0aDogMC41LFxcbiAgICAgICAgaGVpZ2h0OiAxLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKCkgPT4ge1xcbiAgICAgICAgICAgIGNhbVBlcnNwLmZpdFNwYWNlQXRUYXJnZXQoMiwgMilcXG4gICAgICAgICAgICBjYW1QZXJzcC5mcm9tVHJhbnNmbyhjYW1lcmEudHJhbnNmbylcXG4gICAgICAgICAgICBjYW1QZXJzcC56b29tID0gY2FtZXJhLnpvb21cXG4gICAgICAgICAgICBjYW1PcnRoby5maXRTcGFjZUF0VGFyZ2V0KDIsIDIpXFxuICAgICAgICAgICAgY2FtT3J0aG8uZnJvbVRyYW5zZm8oY2FtZXJhLnRyYW5zZm8pXFxuICAgICAgICAgICAgY2FtT3J0aG8uem9vbSA9IGNhbWVyYS56b29tXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzY2lzc29yMSwgc2Npc3NvcjJdLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XFxuICAgICAgICBpZiAoZXZ0LnggPCAwKSB7XFxuICAgICAgICAgICAgY29uc29sZS5sb2coXFxcIk9ydGhvZ3JhcGhpYzpcXFwiLCBjYW1PcnRoby5zcGFjZVBlclBpeGVsICogY2FtT3J0aG8uc2NyZWVuSGVpZ2h0KVxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCI+IEhlaWdodDpcXFwiLCBjYW1PcnRoby5zY3JlZW5IZWlnaHQpXFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJQZXJzcGVjdGl2ZTpcXFwiLCBjYW1QZXJzcC5zcGFjZVBlclBpeGVsICogY2FtUGVyc3Auc2NyZWVuSGVpZ2h0KVxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCI+IEhlaWdodDpcXFwiLCBjYW1QZXJzcC5zY3JlZW5IZWlnaHQpXFxuICAgICAgICB9XFxuICAgIH0pXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICByZXR1cm4ge1xcbiAgICAgICAgc3BsaXQodmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0Z2RDYWxjQ2xhbXAodmFsdWUsIDAsIDEpXFxuICAgICAgICAgICAgc2Npc3NvcjEueCA9IDBcXG4gICAgICAgICAgICBzY2lzc29yMS53aWR0aCA9IGFcXG4gICAgICAgICAgICBzY2lzc29yMi54ID0gYVxcbiAgICAgICAgICAgIHNjaXNzb3IyLndpZHRoID0gMSAtIGFcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0sXFxuICAgICAgICB6b29tKHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS56b29tID0gdmFsdWVcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0sXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbClcXG4gICAgY29uc3Qgc3J2ID0gcmVmLmN1cnJlbnRcXG4gICAgY29uc3QgW3NwbGl0LCBzZXRTcGxpdF0gPSB1c2VGbG9hdCgwLjUsIHNydj8uc3BsaXQpXFxuICAgIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IFJlYWN0LnVzZVN0YXRlKDEpXFxuICAgIGNvbnN0IGhhbmRsZUFwcGx5Wm9vbSA9ICgpID0+IHtcXG4gICAgICAgIGlmIChzcnYpIHNydi56b29tKHpvb20pXFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICAgICAgb25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3V6YW5lOiBTdXphbmVVUkwsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICBnaXptb1xcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgICAgICAgICBpbmVydGlhUGFubmluZzogMTAwMCxcXG4gICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgIDxWaWV3U2xpZGVyIHZhbHVlPXtzcGxpdH0gb25DaGFuZ2U9e3NldFNwbGl0fSBtaW49ezB9IG1heD17MX0gc3RlcD17MWUtMn0gLz5cXG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBmdWxsd2lkdGggZGlzcGxheT1cXFwiZmxleFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk9ydGhvZ3JhcGhpYzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5QZXJzcGVjdGl2ZTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVxcXCJmbGV4XFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiIGdhcD1cXFwiTVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIHZhbHVlPXt6b29tfSBvbkNoYW5nZT17c2V0Wm9vbX0gLz5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFwcGx5Wm9vbX0+QXBwbHkgem9vbTwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICAgICAgPC9WaWV3PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmxvYXQoXG4gICAgaW5pdGlhbFZhbHVlOiBudW1iZXIsXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCxcbik6IFt2YWx1ZTogbnVtYmVyLCBzZXRWYWx1ZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWRdIHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZSlcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gb25DaGFuZ2U/Lih2YWx1ZSksIFt2YWx1ZV0pXG4gICAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInRnZENhbGNDbGFtcCIsInRnZENhbGNSYW5kb20zIiwiVGdkQ2FtZXJhT3J0aG9ncmFwaGljIiwiVGdkQ2FtZXJhUGVyc3BlY3RpdmUiLCJUZ2RMaWdodCIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJHcm91cENhbWVyYSIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTY2lzc29yIiwiVGdkUGFpbnRlclN0YXRlIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJTdXphbmVVUkwiLCJSZWFjdCIsInVzZUZsb2F0IiwiVmlld0J1dHRvbiIsIlZpZXdJbnB1dE51bWJlciIsIlZpZXdQYW5lbCIsIlZpZXdTbGlkZXIiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNhbWVyYSIsImNvbG9yIiwibWF0ZXJpYWwiLCJtZXNoIiwibmVhciIsImZhciIsImNhbU9ydGhvIiwiY2FtUGVyc3AiLCJzY2lzc29yMSIsInNjaXNzb3IyIiwiZXZ0IiwiY29uc29sZSIsInNwbGl0IiwidmFsdWUiLCJhIiwiem9vbSIsIkRlbW8iLCJyZWYiLCJzcnYiLCJfdXNlRmxvYXQiLCJzZXRTcGxpdCIsIl9SZWFjdF91c2VTdGF0ZSIsInNldFpvb20iLCJoYW5kbGVBcHBseVpvb20iLCJvblJlYWR5Iiwic2NlbmUiLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsImluaXRpYWxWYWx1ZSIsIm9uQ2hhbmdlIiwic2V0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCdUI7QUFDNkI7QUFDSDtBQUN4QjtBQUNxQjtBQUNvQztBQUVsRixTQUFTcUIsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUM3Qyw0QkFBNEI7SUFDNUIsSUFBUUMsU0FBV0YsUUFBWEU7SUFDUkEsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHO0lBQzNCLElBQU1DLFFBQXVCLHFCQUFHeEIsa0RBQWNBLFdBQWxCO1FBQXNCO0tBQUU7SUFDcEQsSUFBTXlCLFdBQVcsSUFBSXJCLGtEQUFrQkEsQ0FBQztRQUNwQ29CLE9BQUFBO1FBQ0EsU0FBUyxJQUFJckIsd0NBQVFBLENBQUM7WUFDbEIsT0FBTztnQkFBQztnQkFBSztnQkFBSztnQkFBSzthQUFFO1FBQzdCO1FBQ0Esb0JBQW9CO0lBQ3hCO0lBQ0EsSUFBTXVCLE9BQU8sSUFBSWxCLGtEQUFrQkEsQ0FBQ2EsU0FBUztRQUN6QyxPQUFPQyxPQUFPLEdBQUcsQ0FBQyxNQUFNO1FBQ3hCRyxVQUFBQTtJQUNKO0lBQ0EsSUFBUUUsT0FBY0osT0FBZEksTUFBTUMsTUFBUUwsT0FBUks7SUFDZCxJQUFNQyxXQUFXLElBQUk1QixxREFBcUJBLENBQUM7UUFBRTBCLE1BQUFBO1FBQU1DLEtBQUFBO0lBQUk7SUFDdkQsSUFBTUUsV0FBVyxJQUFJNUIsb0RBQW9CQSxDQUFDO1FBQUV5QixNQUFBQTtRQUFNQyxLQUFBQTtJQUFJO0lBQ3RELE9BQU87SUFDUCxJQUFNRyxXQUFXLElBQUl0QixpREFBaUJBLENBQUNZLFNBQVM7UUFDNUMsVUFBVTtZQUNOLElBQUlmLHFEQUFxQkEs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