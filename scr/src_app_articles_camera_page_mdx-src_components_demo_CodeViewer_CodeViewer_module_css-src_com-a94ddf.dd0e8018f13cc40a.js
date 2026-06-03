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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 162,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "Perspective"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 163,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 166,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewButton, {
                            onClick: handleApplyZoom,
                            children: "Apply zoom"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 167,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                    lineNumber: 165,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
            lineNumber: 134,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfY2FtZXJhX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jc3Mtc3JjX2NvbS1hOTRkZGYuZGQwZTgwMThmMTNjYzQwYS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jYW1lcmEvXy9jYW1lcmEvY2FtZXJhLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jYW1lcmEvXy9jYW1lcmEvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3V0aWxzL2hvb2tzL2Zsb2F0LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jYW1lcmEvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0dHlwZSBBcnJheU51bWJlcjQsXG5cdHRnZENhbGNDbGFtcCxcblx0dGdkQ2FsY1JhbmRvbTMsXG5cdFRnZENhbWVyYU9ydGhvZ3JhcGhpYyxcblx0VGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkTGlnaHQsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyR3JvdXBDYW1lcmEsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlck1lc2hHbHRmLFxuXHRUZ2RQYWludGVyU2Npc3Nvcixcblx0VGdkUGFpbnRlclN0YXRlLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFwiQC91dGlscy9ob29rcy9mbG9hdFwiO1xuaW1wb3J0IHtcblx0Vmlld0J1dHRvbixcblx0Vmlld0lucHV0TnVtYmVyLFxuXHRWaWV3UGFuZWwsXG5cdFZpZXdTbGlkZXIsXG59IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuXHRjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dDtcblx0Y2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMiwgMik7XG5cdGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV07XG5cdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG5cdFx0Y29sb3IsXG5cdFx0YW1iaWVudDogbmV3IFRnZExpZ2h0KHtcblx0XHRcdGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXG5cdFx0fSksXG5cdFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxuXHR9KTtcblx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcblx0XHRtYXRlcmlhbCxcblx0fSk7XG5cdGNvbnN0IHsgbmVhciwgZmFyIH0gPSBjYW1lcmE7XG5cdGNvbnN0IGNhbU9ydGhvID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYyh7IG5lYXIsIGZhciB9KTtcblx0Y29uc3QgY2FtUGVyc3AgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoeyBuZWFyLCBmYXIgfSk7XG5cdC8vICNlbmRcblx0Y29uc3Qgc2Npc3NvcjEgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcblx0XHRcdFx0Y2FtZXJhOiBjYW1PcnRobyxcblx0XHRcdFx0Y2hpbGRyZW46IFttZXNoXSxcblx0XHRcdH0pLFxuXHRcdF0sXG5cdFx0eDogMCxcblx0XHR5OiAwLFxuXHRcdHdpZHRoOiAwLjUsXG5cdFx0aGVpZ2h0OiAxLFxuXHR9KTtcblx0Y29uc3Qgc2Npc3NvcjIgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcblx0XHRcdFx0Y2FtZXJhOiBjYW1QZXJzcCxcblx0XHRcdFx0Y2hpbGRyZW46IFttZXNoXSxcblx0XHRcdH0pLFxuXHRcdF0sXG5cdFx0eDogMC41LFxuXHRcdHk6IDAsXG5cdFx0d2lkdGg6IDAuNSxcblx0XHRoZWlnaHQ6IDEsXG5cdH0pO1xuXHRjb250ZXh0LmFkZChcblx0XHRuZXcgVGdkUGFpbnRlckxvZ2ljKCgpID0+IHtcblx0XHRcdGNhbVBlcnNwLmZpdFNwYWNlQXRUYXJnZXQoMiwgMik7XG5cdFx0XHRjYW1QZXJzcC5mcm9tVHJhbnNmbyhjYW1lcmEudHJhbnNmbyk7XG5cdFx0XHRjYW1QZXJzcC56b29tID0gY2FtZXJhLnpvb207XG5cdFx0XHRjYW1PcnRoby5maXRTcGFjZUF0VGFyZ2V0KDIsIDIpO1xuXHRcdFx0Y2FtT3J0aG8uZnJvbVRyYW5zZm8oY2FtZXJhLnRyYW5zZm8pO1xuXHRcdFx0Y2FtT3J0aG8uem9vbSA9IGNhbWVyYS56b29tO1xuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdFx0Y29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcblx0XHRcdGRlcHRoOiAxLFxuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRcdGNoaWxkcmVuOiBbc2Npc3NvcjEsIHNjaXNzb3IyXSxcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XG5cdFx0aWYgKGV2dC54IDwgMCkge1xuXHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdFwiT3J0aG9ncmFwaGljOlwiLFxuXHRcdFx0XHRjYW1PcnRoby5zcGFjZVBlclBpeGVsICogY2FtT3J0aG8uc2NyZWVuSGVpZ2h0LFxuXHRcdFx0KTtcblx0XHRcdGNvbnNvbGUubG9nKFwiPiBIZWlnaHQ6XCIsIGNhbU9ydGhvLnNjcmVlbkhlaWdodCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0XHRcIlBlcnNwZWN0aXZlOlwiLFxuXHRcdFx0XHRjYW1QZXJzcC5zcGFjZVBlclBpeGVsICogY2FtUGVyc3Auc2NyZWVuSGVpZ2h0LFxuXHRcdFx0KTtcblx0XHRcdGNvbnNvbGUubG9nKFwiPiBIZWlnaHQ6XCIsIGNhbVBlcnNwLnNjcmVlbkhlaWdodCk7XG5cdFx0fVxuXHR9KTtcblx0Y29udGV4dC5wYWludCgpO1xuXHRyZXR1cm4ge1xuXHRcdHNwbGl0KHZhbHVlOiBudW1iZXIpIHtcblx0XHRcdGNvbnN0IGEgPSB0Z2RDYWxjQ2xhbXAodmFsdWUsIDAsIDEpO1xuXHRcdFx0c2Npc3NvcjEueCA9IDA7XG5cdFx0XHRzY2lzc29yMS53aWR0aCA9IGE7XG5cdFx0XHRzY2lzc29yMi54ID0gYTtcblx0XHRcdHNjaXNzb3IyLndpZHRoID0gMSAtIGE7XG5cdFx0XHRjb250ZXh0LnBhaW50KCk7XG5cdFx0fSxcblx0XHR6b29tKHZhbHVlOiBudW1iZXIpIHtcblx0XHRcdGNvbnRleHQuY2FtZXJhLnpvb20gPSB2YWx1ZTtcblx0XHRcdGNvbnRleHQucGFpbnQoKTtcblx0XHR9LFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKTtcblx0Y29uc3Qgc3J2ID0gcmVmLmN1cnJlbnQ7XG5cdGNvbnN0IFtzcGxpdCwgc2V0U3BsaXRdID0gdXNlRmxvYXQoMC41LCBzcnY/LnNwbGl0KTtcblx0Y29uc3QgW3pvb20sIHNldFpvb21dID0gUmVhY3QudXNlU3RhdGUoMSk7XG5cdGNvbnN0IGhhbmRsZUFwcGx5Wm9vbSA9ICgpID0+IHtcblx0XHRpZiAoc3J2KSBzcnYuem9vbSh6b29tKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8Vmlld1xuXHRcdFx0XHRvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XG5cdFx0XHRcdFx0cmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpO1xuXHRcdFx0XHR9fVxuXHRcdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0XHRnbGI6IHtcblx0XHRcdFx0XHRcdHN1emFuZTogU3V6YW5lVVJMLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH19XG5cdFx0XHRcdGdpem1vXG5cdFx0XHRcdGNvbnRyb2xsZXI9e3tcblx0XHRcdFx0XHRpbmVydGlhT3JiaXQ6IDEwMDAsXG5cdFx0XHRcdFx0aW5lcnRpYVBhbm5pbmc6IDEwMDAsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxWaWV3U2xpZGVyXG5cdFx0XHRcdFx0dmFsdWU9e3NwbGl0fVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXRTcGxpdH1cblx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0bWF4PXsxfVxuXHRcdFx0XHRcdHN0ZXA9ezFlLTJ9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxWaWV3UGFuZWxcblx0XHRcdFx0XHRmdWxsd2lkdGhcblx0XHRcdFx0XHRkaXNwbGF5PVwiZmxleFwiXG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXY+T3J0aG9ncmFwaGljPC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5QZXJzcGVjdGl2ZTwvZGl2PlxuXHRcdFx0XHQ8L1ZpZXdQYW5lbD5cblx0XHRcdFx0PFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBnYXA9XCJNXCI+XG5cdFx0XHRcdFx0PFZpZXdJbnB1dE51bWJlciB2YWx1ZT17em9vbX0gb25DaGFuZ2U9e3NldFpvb219IC8+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b24gb25DbGljaz17aGFuZGxlQXBwbHlab29tfT5BcHBseSB6b29tPC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L1ZpZXdQYW5lbD5cblx0XHRcdDwvVmlldz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9jYW1lcmEuZGVtb1wiO1xuXG5jb25zdCBGT0NVUyA9IHtcblx0XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcblx0XHRcIiAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLCAyKVxcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWy4uLnRnZENhbGNSYW5kb20zKCksIDFdXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcXG4gICAgY29uc3QgeyBuZWFyLCBmYXIgfSA9IGNhbWVyYVxcbiAgICBjb25zdCBjYW1PcnRobyA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoeyBuZWFyLCBmYXIgfSlcXG4gICAgY29uc3QgY2FtUGVyc3AgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoeyBuZWFyLCBmYXIgfSlcIixcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7XFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxcbiAgICB0Z2RDYWxjQ2xhbXAsXFxuICAgIHRnZENhbGNSYW5kb20zLFxcbiAgICBUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXFxuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZExpZ2h0LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckdyb3VwQ2FtZXJhLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcXG4gICAgVGdkUGFpbnRlclNjaXNzb3IsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5pbXBvcnQgU3V6YW5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XCJcXG5pbXBvcnQgeyBWaWV3QnV0dG9uLCBWaWV3SW5wdXROdW1iZXIsIFZpZXdQYW5lbCwgVmlld1NsaWRlciB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIsIDIpXFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgIGNvbG9yLFxcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICB9KVxcbiAgICBjb25zdCB7IG5lYXIsIGZhciB9ID0gY2FtZXJhXFxuICAgIGNvbnN0IGNhbU9ydGhvID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYyh7IG5lYXIsIGZhciB9KVxcbiAgICBjb25zdCBjYW1QZXJzcCA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7IG5lYXIsIGZhciB9KVxcbiAgICBjb25zdCBzY2lzc29yMSA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBjYW1lcmE6IGNhbU9ydGhvLFxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgICAgIHg6IDAsXFxuICAgICAgICB5OiAwLFxcbiAgICAgICAgd2lkdGg6IDAuNSxcXG4gICAgICAgIGhlaWdodDogMSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc2Npc3NvcjIgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgY2FtZXJhOiBjYW1QZXJzcCxcXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgICAgICB4OiAwLjUsXFxuICAgICAgICB5OiAwLFxcbiAgICAgICAgd2lkdGg6IDAuNSxcXG4gICAgICAgIGhlaWdodDogMSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCgpID0+IHtcXG4gICAgICAgICAgICBjYW1QZXJzcC5maXRTcGFjZUF0VGFyZ2V0KDIsIDIpXFxuICAgICAgICAgICAgY2FtUGVyc3AuZnJvbVRyYW5zZm8oY2FtZXJhLnRyYW5zZm8pXFxuICAgICAgICAgICAgY2FtUGVyc3Auem9vbSA9IGNhbWVyYS56b29tXFxuICAgICAgICAgICAgY2FtT3J0aG8uZml0U3BhY2VBdFRhcmdldCgyLCAyKVxcbiAgICAgICAgICAgIGNhbU9ydGhvLmZyb21UcmFuc2ZvKGNhbWVyYS50cmFuc2ZvKVxcbiAgICAgICAgICAgIGNhbU9ydGhvLnpvb20gPSBjYW1lcmEuem9vbVxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbc2Npc3NvcjEsIHNjaXNzb3IyXSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xcbiAgICAgICAgaWYgKGV2dC54IDwgMCkge1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT3J0aG9ncmFwaGljOlwiLCBjYW1PcnRoby5zcGFjZVBlclBpeGVsICogY2FtT3J0aG8uc2NyZWVuSGVpZ2h0KVxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPiBIZWlnaHQ6XCIsIGNhbU9ydGhvLnNjcmVlbkhlaWdodClcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJzcGVjdGl2ZTpcIiwgY2FtUGVyc3Auc3BhY2VQZXJQaXhlbCAqIGNhbVBlcnNwLnNjcmVlbkhlaWdodClcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4gSGVpZ2h0OlwiLCBjYW1QZXJzcC5zY3JlZW5IZWlnaHQpXFxuICAgICAgICB9XFxuICAgIH0pXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICByZXR1cm4ge1xcbiAgICAgICAgc3BsaXQodmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0Z2RDYWxjQ2xhbXAodmFsdWUsIDAsIDEpXFxuICAgICAgICAgICAgc2Npc3NvcjEueCA9IDBcXG4gICAgICAgICAgICBzY2lzc29yMS53aWR0aCA9IGFcXG4gICAgICAgICAgICBzY2lzc29yMi54ID0gYVxcbiAgICAgICAgICAgIHNjaXNzb3IyLndpZHRoID0gMSAtIGFcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0sXFxuICAgICAgICB6b29tKHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS56b29tID0gdmFsdWVcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0sXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbClcXG4gICAgY29uc3Qgc3J2ID0gcmVmLmN1cnJlbnRcXG4gICAgY29uc3QgW3NwbGl0LCBzZXRTcGxpdF0gPSB1c2VGbG9hdCgwLjUsIHNydj8uc3BsaXQpXFxuICAgIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IFJlYWN0LnVzZVN0YXRlKDEpXFxuICAgIGNvbnN0IGhhbmRsZUFwcGx5Wm9vbSA9ICgpID0+IHtcXG4gICAgICAgIGlmIChzcnYpIHNydi56b29tKHpvb20pXFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICAgICAgb25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3V6YW5lOiBTdXphbmVVUkwsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICBnaXptb1xcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgICAgICAgICBpbmVydGlhUGFubmluZzogMTAwMCxcXG4gICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgIDxWaWV3U2xpZGVyIHZhbHVlPXtzcGxpdH0gb25DaGFuZ2U9e3NldFNwbGl0fSBtaW49ezB9IG1heD17MX0gc3RlcD17MWUtMn0gLz5cXG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBmdWxsd2lkdGggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pk9ydGhvZ3JhcGhpYzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5QZXJzcGVjdGl2ZTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBnYXA9XCJNXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIHZhbHVlPXt6b29tfSBvbkNoYW5nZT17c2V0Wm9vbX0gLz5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFwcGx5Wm9vbX0+QXBwbHkgem9vbTwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICAgICAgPC9WaWV3PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIClcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGbG9hdChcblx0aW5pdGlhbFZhbHVlOiBudW1iZXIsXG5cdG9uQ2hhbmdlPzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQsXG4pOiBbdmFsdWU6IG51bWJlciwgc2V0VmFsdWU6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkXSB7XG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IG9uQ2hhbmdlPy4odmFsdWUpLCBbdmFsdWVdKTtcblx0cmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ0Z2RDYWxjQ2xhbXAiLCJ0Z2RDYWxjUmFuZG9tMyIsIlRnZENhbWVyYU9ydGhvZ3JhcGhpYyIsIlRnZENhbWVyYVBlcnNwZWN0aXZlIiwiVGdkTGlnaHQiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyR3JvdXBDYW1lcmEiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU2Npc3NvciIsIlRnZFBhaW50ZXJTdGF0ZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiU3V6YW5lVVJMIiwiUmVhY3QiLCJ1c2VGbG9hdCIsIlZpZXdCdXR0b24iLCJWaWV3SW5wdXROdW1iZXIiLCJWaWV3UGFuZWwiLCJWaWV3U2xpZGVyIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjYW1lcmEiLCJjb2xvciIsIm1hdGVyaWFsIiwibWVzaCIsIm5lYXIiLCJmYXIiLCJjYW1PcnRobyIsImNhbVBlcnNwIiwic2Npc3NvcjEiLCJzY2lzc29yMiIsImV2dCIsImNvbnNvbGUiLCJzcGxpdCIsInZhbHVlIiwiYSIsInpvb20iLCJEZW1vIiwicmVmIiwic3J2IiwiX3VzZUZsb2F0Iiwic2V0U3BsaXQiLCJfUmVhY3RfdXNlU3RhdGUiLCJzZXRab29tIiwiaGFuZGxlQXBwbHlab29tIiwib25SZWFkeSIsInNjZW5lIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJpbml0aWFsVmFsdWUiLCJvbkNoYW5nZSIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQndCO0FBQ2tDO0FBQ1I7QUFDeEI7QUFDcUI7QUFNeEI7QUFFdkIsU0FBU3FCLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDaEQsNEJBQTRCO0lBQzVCLElBQVFDLFNBQVdGLFFBQVhFO0lBQ1JBLE9BQU8sZ0JBQWdCLENBQUMsR0FBRztJQUMzQixJQUFNQyxRQUF1QixxQkFBR3hCLGtEQUFjQSxXQUFsQjtRQUFzQjtLQUFFO0lBQ3BELElBQU15QixXQUFXLElBQUlyQixrREFBa0JBLENBQUM7UUFDdkNvQixPQUFBQTtRQUNBLFNBQVMsSUFBSXJCLHdDQUFRQSxDQUFDO1lBQ3JCLE9BQU87Z0JBQUM7Z0JBQUs7Z0JBQUs7Z0JBQUs7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