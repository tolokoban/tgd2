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
                    lineNumber: 149,
                    columnNumber: 5
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
                            lineNumber: 162,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "Perspective"
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 163,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                    lineNumber: 156,
                    columnNumber: 5
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
                            lineNumber: 166,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewButton, {
                            onClick: handleApplyZoom,
                            children: "Apply zoom"
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 167,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                    lineNumber: 165,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
            lineNumber: 134,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
        lineNumber: 133,
        columnNumber: 3
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
var FULL = 'import {\n    type ArrayNumber4,\n    tgdCalcClamp,\n    tgdCalcRandom3,\n    TgdCameraOrthographic,\n    TgdCameraPerspective,\n    type TgdContext,\n    TgdLight,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterGroupCamera,\n    TgdPainterLogic,\n    TgdPainterMeshGltf,\n    TgdPainterScissor,\n    TgdPainterState,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\nimport View, { type Assets } from "@/components/demo/Tgd"\nimport SuzaneURL from "@/assets/mesh/suzanne.glb"\nimport React from "react"\nimport { useFloat } from "@/utils/hooks/float"\nimport { ViewButton, ViewInputNumber, ViewPanel, ViewSlider } from "@tolokoban/ui"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const { camera } = context\n    camera.fitSpaceAtTarget(2, 2)\n    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]\n    const material = new TgdMaterialDiffuse({\n        color,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n        lockLightsToCamera: true,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material,\n    })\n    const { near, far } = camera\n    const camOrtho = new TgdCameraOrthographic({ near, far })\n    const camPersp = new TgdCameraPerspective({ near, far })\n    const scissor1 = new TgdPainterScissor(context, {\n        children: [\n            new TgdPainterGroupCamera(context, {\n                camera: camOrtho,\n                children: [mesh],\n            }),\n        ],\n        x: 0,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    })\n    const scissor2 = new TgdPainterScissor(context, {\n        children: [\n            new TgdPainterGroupCamera(context, {\n                camera: camPersp,\n                children: [mesh],\n            }),\n        ],\n        x: 0.5,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    })\n    context.add(\n        new TgdPainterLogic(() => {\n            camPersp.fitSpaceAtTarget(2, 2)\n            camPersp.fromTransfo(camera.transfo)\n            camPersp.zoom = camera.zoom\n            camOrtho.fitSpaceAtTarget(2, 2)\n            camOrtho.fromTransfo(camera.transfo)\n            camOrtho.zoom = camera.zoom\n        }),\n        new TgdPainterClear(context, {\n            color: [0.3, 0.3, 0.3, 1],\n            depth: 1,\n        }),\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [scissor1, scissor2],\n        }),\n    )\n    context.inputs.pointer.eventTap.addListener((evt) => {\n        if (evt.x < 0) {\n            console.log("Orthographic:", camOrtho.spacePerPixel * camOrtho.screenHeight)\n            console.log("> Height:", camOrtho.screenHeight)\n        } else {\n            console.log("Perspective:", camPersp.spacePerPixel * camPersp.screenHeight)\n            console.log("> Height:", camPersp.screenHeight)\n        }\n    })\n    context.paint()\n    return {\n        split(value: number) {\n            const a = tgdCalcClamp(value, 0, 1)\n            scissor1.x = 0\n            scissor1.width = a\n            scissor2.x = a\n            scissor2.width = 1 - a\n            context.paint()\n        },\n        zoom(value: number) {\n            context.camera.zoom = value\n            context.paint()\n        },\n    }\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null)\n    const srv = ref.current\n    const [split, setSplit] = useFloat(0.5, srv?.split)\n    const [zoom, setZoom] = React.useState(1)\n    const handleApplyZoom = () => {\n        if (srv) srv.zoom(zoom)\n    }\n\n    return (\n        <div>\n            <View\n                onReady={(scene: TgdContext, assets: Assets) => {\n                    ref.current = init(scene, assets)\n                }}\n                assets={{\n                    glb: {\n                        suzane: SuzaneURL,\n                    },\n                }}\n                gizmo\n                controller={{\n                    inertiaOrbit: 1000,\n                    inertiaPanning: 1000,\n                }}>\n                <ViewSlider value={split} onChange={setSplit} min={0} max={1} step={1e-2} />\n                <ViewPanel fullwidth display="flex" justifyContent="space-between" alignItems="center">\n                    <div>Orthographic</div>\n                    <div>Perspective</div>\n                </ViewPanel>\n                <ViewPanel display="flex" alignItems="center" gap="M">\n                    <ViewInputNumber value={zoom} onChange={setZoom} />\n                    <ViewButton onClick={handleApplyZoom}>Apply zoom</ViewButton>\n                </ViewPanel>\n            </View>\n        </div>\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_camera_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfY2FtZXJhX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jc3Mtc3JjX2NvbS1hOTRkZGYuZDY5YjJjMDA2MDZjOWJhMi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvY2FtZXJhL18vY2FtZXJhL2NhbWVyYS5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL2NhbWVyYS9fL2NhbWVyYS9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3V0aWxzL2hvb2tzL2Zsb2F0LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvY2FtZXJhL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHR0eXBlIEFycmF5TnVtYmVyNCxcblx0dGdkQ2FsY0NsYW1wLFxuXHR0Z2RDYWxjUmFuZG9tMyxcblx0VGdkQ2FtZXJhT3J0aG9ncmFwaGljLFxuXHRUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RMaWdodCxcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJHcm91cENhbWVyYSxcblx0VGdkUGFpbnRlckxvZ2ljLFxuXHRUZ2RQYWludGVyTWVzaEdsdGYsXG5cdFRnZFBhaW50ZXJTY2lzc29yLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQgU3V6YW5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XCI7XG5pbXBvcnQge1xuXHRWaWV3QnV0dG9uLFxuXHRWaWV3SW5wdXROdW1iZXIsXG5cdFZpZXdQYW5lbCxcblx0Vmlld1NsaWRlcixcbn0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG5cdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0O1xuXHRjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLCAyKTtcblx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXTtcblx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcblx0XHRjb2xvcixcblx0XHRhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xuXHRcdFx0Y29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcblx0XHR9KSxcblx0XHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG5cdH0pO1xuXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG5cdFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxuXHRcdG1hdGVyaWFsLFxuXHR9KTtcblx0Y29uc3QgeyBuZWFyLCBmYXIgfSA9IGNhbWVyYTtcblx0Y29uc3QgY2FtT3J0aG8gPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHsgbmVhciwgZmFyIH0pO1xuXHRjb25zdCBjYW1QZXJzcCA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7IG5lYXIsIGZhciB9KTtcblx0Ly8gI2VuZFxuXHRjb25zdCBzY2lzc29yMSA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xuXHRcdFx0XHRjYW1lcmE6IGNhbU9ydGhvLFxuXHRcdFx0XHRjaGlsZHJlbjogW21lc2hdLFxuXHRcdFx0fSksXG5cdFx0XSxcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdFx0d2lkdGg6IDAuNSxcblx0XHRoZWlnaHQ6IDEsXG5cdH0pO1xuXHRjb25zdCBzY2lzc29yMiA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xuXHRcdFx0XHRjYW1lcmE6IGNhbVBlcnNwLFxuXHRcdFx0XHRjaGlsZHJlbjogW21lc2hdLFxuXHRcdFx0fSksXG5cdFx0XSxcblx0XHR4OiAwLjUsXG5cdFx0eTogMCxcblx0XHR3aWR0aDogMC41LFxuXHRcdGhlaWdodDogMSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKFxuXHRcdG5ldyBUZ2RQYWludGVyTG9naWMoKCkgPT4ge1xuXHRcdFx0Y2FtUGVyc3AuZml0U3BhY2VBdFRhcmdldCgyLCAyKTtcblx0XHRcdGNhbVBlcnNwLmZyb21UcmFuc2ZvKGNhbWVyYS50cmFuc2ZvKTtcblx0XHRcdGNhbVBlcnNwLnpvb20gPSBjYW1lcmEuem9vbTtcblx0XHRcdGNhbU9ydGhvLmZpdFNwYWNlQXRUYXJnZXQoMiwgMik7XG5cdFx0XHRjYW1PcnRoby5mcm9tVHJhbnNmbyhjYW1lcmEudHJhbnNmbyk7XG5cdFx0XHRjYW1PcnRoby56b29tID0gY2FtZXJhLnpvb207XG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0XHRjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxuXHRcdFx0ZGVwdGg6IDEsXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHRcdFx0Y2hpbGRyZW46IFtzY2lzc29yMSwgc2Npc3NvcjJdLFxuXHRcdH0pLFxuXHQpO1xuXHRjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IHtcblx0XHRpZiAoZXZ0LnggPCAwKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0XCJPcnRob2dyYXBoaWM6XCIsXG5cdFx0XHRcdGNhbU9ydGhvLnNwYWNlUGVyUGl4ZWwgKiBjYW1PcnRoby5zY3JlZW5IZWlnaHQsXG5cdFx0XHQpO1xuXHRcdFx0Y29uc29sZS5sb2coXCI+IEhlaWdodDpcIiwgY2FtT3J0aG8uc2NyZWVuSGVpZ2h0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdFwiUGVyc3BlY3RpdmU6XCIsXG5cdFx0XHRcdGNhbVBlcnNwLnNwYWNlUGVyUGl4ZWwgKiBjYW1QZXJzcC5zY3JlZW5IZWlnaHQsXG5cdFx0XHQpO1xuXHRcdFx0Y29uc29sZS5sb2coXCI+IEhlaWdodDpcIiwgY2FtUGVyc3Auc2NyZWVuSGVpZ2h0KTtcblx0XHR9XG5cdH0pO1xuXHRjb250ZXh0LnBhaW50KCk7XG5cdHJldHVybiB7XG5cdFx0c3BsaXQodmFsdWU6IG51bWJlcikge1xuXHRcdFx0Y29uc3QgYSA9IHRnZENhbGNDbGFtcCh2YWx1ZSwgMCwgMSk7XG5cdFx0XHRzY2lzc29yMS54ID0gMDtcblx0XHRcdHNjaXNzb3IxLndpZHRoID0gYTtcblx0XHRcdHNjaXNzb3IyLnggPSBhO1xuXHRcdFx0c2Npc3NvcjIud2lkdGggPSAxIC0gYTtcblx0XHRcdGNvbnRleHQucGFpbnQoKTtcblx0XHR9LFxuXHRcdHpvb20odmFsdWU6IG51bWJlcikge1xuXHRcdFx0Y29udGV4dC5jYW1lcmEuem9vbSA9IHZhbHVlO1xuXHRcdFx0Y29udGV4dC5wYWludCgpO1xuXHRcdH0sXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBzcnYgPSByZWYuY3VycmVudDtcblx0Y29uc3QgW3NwbGl0LCBzZXRTcGxpdF0gPSB1c2VGbG9hdCgwLjUsIHNydj8uc3BsaXQpO1xuXHRjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcblx0Y29uc3QgaGFuZGxlQXBwbHlab29tID0gKCkgPT4ge1xuXHRcdGlmIChzcnYpIHNydi56b29tKHpvb20pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxWaWV3XG5cdFx0XHRcdG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcblx0XHRcdFx0XHRyZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cyk7XG5cdFx0XHRcdH19XG5cdFx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRcdGdsYjoge1xuXHRcdFx0XHRcdFx0c3V6YW5lOiBTdXphbmVVUkwsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fX1cblx0XHRcdFx0Z2l6bW9cblx0XHRcdFx0Y29udHJvbGxlcj17e1xuXHRcdFx0XHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRcdFx0XHRpbmVydGlhUGFubmluZzogMTAwMCxcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0PFZpZXdTbGlkZXJcblx0XHRcdFx0XHR2YWx1ZT17c3BsaXR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3NldFNwbGl0fVxuXHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRtYXg9ezF9XG5cdFx0XHRcdFx0c3RlcD17MWUtMn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFZpZXdQYW5lbFxuXHRcdFx0XHRcdGZ1bGx3aWR0aFxuXHRcdFx0XHRcdGRpc3BsYXk9XCJmbGV4XCJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuXHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdj5PcnRob2dyYXBoaWM8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlBlcnNwZWN0aXZlPC9kaXY+XG5cdFx0XHRcdDwvVmlld1BhbmVsPlxuXHRcdFx0XHQ8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGdhcD1cIk1cIj5cblx0XHRcdFx0XHQ8Vmlld0lucHV0TnVtYmVyIHZhbHVlPXt6b29tfSBvbkNoYW5nZT17c2V0Wm9vbX0gLz5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiBvbkNsaWNrPXtoYW5kbGVBcHBseVpvb219PkFwcGx5IHpvb208L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvVmlld1BhbmVsPlxuXHRcdFx0PC9WaWV3PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIjtcbmltcG9ydCBEZW1vIGZyb20gXCIuL2NhbWVyYS5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkluaXRpYWxpemluZyBXZWJHTFwiOlxuXHRcdFwiICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIsIDIpXFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgIGNvbG9yLFxcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICB9KVxcbiAgICBjb25zdCB7IG5lYXIsIGZhciB9ID0gY2FtZXJhXFxuICAgIGNvbnN0IGNhbU9ydGhvID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYyh7IG5lYXIsIGZhciB9KVxcbiAgICBjb25zdCBjYW1QZXJzcCA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7IG5lYXIsIGZhciB9KVwiLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IHtcXG4gICAgdHlwZSBBcnJheU51bWJlcjQsXFxuICAgIHRnZENhbGNDbGFtcCxcXG4gICAgdGdkQ2FsY1JhbmRvbTMsXFxuICAgIFRnZENhbWVyYU9ydGhvZ3JhcGhpYyxcXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkTGlnaHQsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyR3JvdXBDYW1lcmEsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgICBUZ2RQYWludGVyU2Npc3NvcixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcIkAvdXRpbHMvaG9va3MvZmxvYXRcIlxcbmltcG9ydCB7IFZpZXdCdXR0b24sIFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsLCBWaWV3U2xpZGVyIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMiwgMilcXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgY29sb3IsXFxuICAgICAgICBhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH0pXFxuICAgIGNvbnN0IHsgbmVhciwgZmFyIH0gPSBjYW1lcmFcXG4gICAgY29uc3QgY2FtT3J0aG8gPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHsgbmVhciwgZmFyIH0pXFxuICAgIGNvbnN0IGNhbVBlcnNwID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHsgbmVhciwgZmFyIH0pXFxuICAgIGNvbnN0IHNjaXNzb3IxID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJHcm91cENhbWVyYShjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGNhbWVyYTogY2FtT3J0aG8sXFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICAgICAgeDogMCxcXG4gICAgICAgIHk6IDAsXFxuICAgICAgICB3aWR0aDogMC41LFxcbiAgICAgICAgaGVpZ2h0OiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBzY2lzc29yMiA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBjYW1lcmE6IGNhbVBlcnNwLFxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgICAgIHg6IDAuNSxcXG4gICAgICAgIHk6IDAsXFxuICAgICAgICB3aWR0aDogMC41LFxcbiAgICAgICAgaGVpZ2h0OiAxLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKCkgPT4ge1xcbiAgICAgICAgICAgIGNhbVBlcnNwLmZpdFNwYWNlQXRUYXJnZXQoMiwgMilcXG4gICAgICAgICAgICBjYW1QZXJzcC5mcm9tVHJhbnNmbyhjYW1lcmEudHJhbnNmbylcXG4gICAgICAgICAgICBjYW1QZXJzcC56b29tID0gY2FtZXJhLnpvb21cXG4gICAgICAgICAgICBjYW1PcnRoby5maXRTcGFjZUF0VGFyZ2V0KDIsIDIpXFxuICAgICAgICAgICAgY2FtT3J0aG8uZnJvbVRyYW5zZm8oY2FtZXJhLnRyYW5zZm8pXFxuICAgICAgICAgICAgY2FtT3J0aG8uem9vbSA9IGNhbWVyYS56b29tXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzY2lzc29yMSwgc2Npc3NvcjJdLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XFxuICAgICAgICBpZiAoZXZ0LnggPCAwKSB7XFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPcnRob2dyYXBoaWM6XCIsIGNhbU9ydGhvLnNwYWNlUGVyUGl4ZWwgKiBjYW1PcnRoby5zY3JlZW5IZWlnaHQpXFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI+IEhlaWdodDpcIiwgY2FtT3J0aG8uc2NyZWVuSGVpZ2h0KVxcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcnNwZWN0aXZlOlwiLCBjYW1QZXJzcC5zcGFjZVBlclBpeGVsICogY2FtUGVyc3Auc2NyZWVuSGVpZ2h0KVxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPiBIZWlnaHQ6XCIsIGNhbVBlcnNwLnNjcmVlbkhlaWdodClcXG4gICAgICAgIH1cXG4gICAgfSlcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIHJldHVybiB7XFxuICAgICAgICBzcGxpdCh2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgY29uc3QgYSA9IHRnZENhbGNDbGFtcCh2YWx1ZSwgMCwgMSlcXG4gICAgICAgICAgICBzY2lzc29yMS54ID0gMFxcbiAgICAgICAgICAgIHNjaXNzb3IxLndpZHRoID0gYVxcbiAgICAgICAgICAgIHNjaXNzb3IyLnggPSBhXFxuICAgICAgICAgICAgc2Npc3NvcjIud2lkdGggPSAxIC0gYVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgICAgIHpvb20odmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnpvb20gPSB2YWx1ZVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBzcnYgPSByZWYuY3VycmVudFxcbiAgICBjb25zdCBbc3BsaXQsIHNldFNwbGl0XSA9IHVzZUZsb2F0KDAuNSwgc3J2Py5zcGxpdClcXG4gICAgY29uc3QgW3pvb20sIHNldFpvb21dID0gUmVhY3QudXNlU3RhdGUoMSlcXG4gICAgY29uc3QgaGFuZGxlQXBwbHlab29tID0gKCkgPT4ge1xcbiAgICAgICAgaWYgKHNydikgc3J2Lnpvb20oem9vbSlcXG4gICAgfVxcblxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgICAgICBvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXphbmU6IFN1emFuZVVSTCxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFQYW5uaW5nOiAxMDAwLFxcbiAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgPFZpZXdTbGlkZXIgdmFsdWU9e3NwbGl0fSBvbkNoYW5nZT17c2V0U3BsaXR9IG1pbj17MH0gbWF4PXsxfSBzdGVwPXsxZS0yfSAvPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGZ1bGx3aWR0aCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+T3J0aG9ncmFwaGljPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlBlcnNwZWN0aXZlPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGdhcD1cIk1cIj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgdmFsdWU9e3pvb219IG9uQ2hhbmdlPXtzZXRab29tfSAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17aGFuZGxlQXBwbHlab29tfT5BcHBseSB6b29tPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgICAgICA8L1ZpZXc+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgKVxcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZsb2F0KFxuXHRpbml0aWFsVmFsdWU6IG51bWJlcixcblx0b25DaGFuZ2U/OiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCxcbik6IFt2YWx1ZTogbnVtYmVyLCBzZXRWYWx1ZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWRdIHtcblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4gb25DaGFuZ2U/Lih2YWx1ZSksIFt2YWx1ZV0pO1xuXHRyZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV07XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInRnZENhbGNDbGFtcCIsInRnZENhbGNSYW5kb20zIiwiVGdkQ2FtZXJhT3J0aG9ncmFwaGljIiwiVGdkQ2FtZXJhUGVyc3BlY3RpdmUiLCJUZ2RMaWdodCIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJHcm91cENhbWVyYSIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTY2lzc29yIiwiVGdkUGFpbnRlclN0YXRlIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJTdXphbmVVUkwiLCJSZWFjdCIsInVzZUZsb2F0IiwiVmlld0J1dHRvbiIsIlZpZXdJbnB1dE51bWJlciIsIlZpZXdQYW5lbCIsIlZpZXdTbGlkZXIiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNhbWVyYSIsImNvbG9yIiwibWF0ZXJpYWwiLCJtZXNoIiwibmVhciIsImZhciIsImNhbU9ydGhvIiwiY2FtUGVyc3AiLCJzY2lzc29yMSIsInNjaXNzb3IyIiwiZXZ0IiwiY29uc29sZSIsInNwbGl0IiwidmFsdWUiLCJhIiwiem9vbSIsIkRlbW8iLCJyZWYiLCJzcnYiLCJfdXNlRmxvYXQiLCJzZXRTcGxpdCIsIl9SZWFjdF91c2VTdGF0ZSIsInNldFpvb20iLCJoYW5kbGVBcHBseVpvb20iLCJvblJlYWR5Iiwic2NlbmUiLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsImluaXRpYWxWYWx1ZSIsIm9uQ2hhbmdlIiwic2V0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCd0I7QUFDa0M7QUFDUjtBQUN4QjtBQUNxQjtBQU14QjtBQUV2QixTQUFTcUIsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUNoRCw0QkFBNEI7SUFDNUIsSUFBUUMsU0FBV0YsUUFBWEU7SUFDUkEsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHO0lBQzNCLElBQU1DLFFBQXVCLHFCQUFHeEIsa0RBQWNBLFdBQWxCO1FBQXNCO0tBQUU7SUFDcEQsSUFBTXlCLFdBQVcsSUFBSXJCLGtEQUFrQkEsQ0FBQztRQUN2Q29CLE9BQUFBO1FBQ0EsU0FBUyxJQUFJckIsd0NBQVFBLENBQUM7WUFDckIsT0FBTztnQkFBQztnQkFBSztnQkFBSztn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