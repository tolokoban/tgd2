"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_diffuse_page_mdx-src_components_demo_CodeViewer_CodeViewer_mod-3d7ed0"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

},
17787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
    var color = _to_consumable_array((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom3)()).concat([
        1
    ]);
    var material1 = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color: color,
        ambient: new _tolokoban_tgd__rspack_import_1.TgdLight({
            color: [
                0.8,
                0.8,
                0.8,
                0
            ]
        })
    });
    var mesh1 = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: material1
    });
    var ring1 = makeRing(context, material1);
    var node1 = new _tolokoban_tgd__rspack_import_1.TgdPainterNode({
        children: [
            mesh1,
            ring1
        ]
    });
    var material2 = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color: color,
        lockLightsToCamera: true,
        ambient: new _tolokoban_tgd__rspack_import_1.TgdLight({
            color: [
                0.8,
                0.8,
                0.8,
                0
            ]
        })
    });
    // const material2 = new TgdMaterialNormals()
    var mesh2 = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: material2
    });
    var ring2 = makeRing(context, material2);
    var node2 = new _tolokoban_tgd__rspack_import_1.TgdPainterNode({
        children: [
            mesh2,
            ring2
        ]
    });
    // #end
    var scissor1 = new _tolokoban_tgd__rspack_import_1.TgdPainterScissor(context, {
        children: [
            node1
        ],
        x: 0,
        y: 0,
        width: 0.5,
        height: 1
    });
    var scissor2 = new _tolokoban_tgd__rspack_import_1.TgdPainterScissor(context, {
        children: [
            node2
        ],
        x: 0.5,
        y: 0,
        width: 0.5,
        height: 1
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.3,
            0.3,
            0.3,
            1
        ],
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back,
        children: [
            scissor1,
            scissor2
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time, delta) {
        var speed = 0.1;
        var angX = delta * 0.49541 * speed;
        var angY = delta * 0.31789 * speed;
        var angZ = delta * 0.57892 * speed;
        node1.transfo.orbitAroundX(angX);
        node1.transfo.orbitAroundY(angY);
        node1.transfo.orbitAroundZ(angZ);
        node2.transfo.orbitAroundX(angX);
        node2.transfo.orbitAroundY(angY);
        node2.transfo.orbitAroundZ(angZ);
    }));
    ring2.debug();
    context.play();
    return {
        specularExponent: function specularExponent(value) {
            material1.specularExponent = value;
            material2.specularExponent = value;
            context.paint();
        },
        specularIntensity: function specularIntensity(value) {
            material1.specularIntensity = value;
            material2.specularIntensity = value;
            context.paint();
        },
        split: function split(value) {
            var a = (0,_tolokoban_tgd__rspack_import_1.tgdCalcClamp)(value, 0, 1);
            scissor1.x = 0;
            scissor1.width = a;
            scissor2.x = a;
            scissor2.width = 1 - a;
            context.paint();
        }
    };
}
function makeRing(context, material) {
    var data = new _tolokoban_tgd__rspack_import_1.TgdPainterSegmentsData();
    var count = 16;
    var y = -0.5;
    var r = 0.2;
    var R = 1;
    for(var i = 0; i < count; i++){
        var x0 = R * Math.cos(i * Math.PI * 2 / count);
        var z0 = R * Math.sin(i * Math.PI * 2 / count);
        var x1 = R * Math.cos((i + 1) * Math.PI * 2 / count);
        var z1 = R * Math.sin((i + 1) * Math.PI * 2 / count);
        var u0 = i / count;
        var u1 = (i + 1) / count;
        data.add([
            x0,
            y,
            z0,
            r
        ], [
            x1,
            y,
            z1,
            r
        ], [
            u0,
            u0
        ], [
            u1,
            u1
        ]);
    }
    // return new TgdPainterSegments(context, {
    //     roundness: 5,
    //     material,
    //     dataset: data.makeDataset(),
    // })
    return new _tolokoban_tgd__rspack_import_1.TgdPainterSegmentsMorphing(context, {
        roundness: 5,
        material: material,
        datasetsPairs: [
            [
                data.makeDataset(),
                data.makeDataset()
            ]
        ]
    });
}
function Demo() {
    var ref = react__rspack_import_4_default().useRef(null);
    var srv = ref.current;
    var _useFloat = _sliced_to_array((0,_utils_hooks_float__rspack_import_5.useFloat)(20, srv === null || srv === void 0 ? void 0 : srv.specularExponent), 2), specularExponent = _useFloat[0], setSpecularExponent = _useFloat[1];
    var _useFloat1 = _sliced_to_array((0,_utils_hooks_float__rspack_import_5.useFloat)(1, srv === null || srv === void 0 ? void 0 : srv.specularIntensity), 2), specularIntensity = _useFloat1[0], setSpecularIntensity = _useFloat1[1];
    var _useFloat2 = _sliced_to_array((0,_utils_hooks_float__rspack_import_5.useFloat)(0.1, srv === null || srv === void 0 ? void 0 : srv.split), 2), split = _useFloat2[0], setSplit = _useFloat2[1];
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
                inertiaOrbit: 1000
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewSlider, {
                    value: split,
                    onChange: setSplit,
                    min: 0,
                    max: 1,
                    step: 1e-2
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                    lineNumber: 173,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewPanel, {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewInputNumber, {
                            label: "specularExponent",
                            value: specularExponent,
                            onChange: setSpecularExponent
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 175,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewInputNumber, {
                            label: "specularIntensity",
                            value: specularIntensity,
                            onChange: setSpecularIntensity
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 176,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                    lineNumber: 174,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewPanel, {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewButton, {
                            variant: "text",
                            color: "primary-5",
                            onClick: function onClick() {
                                setSpecularExponent(1);
                                setSpecularIntensity(0.5);
                            },
                            children: "Brushed Metal"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 183,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewButton, {
                            variant: "text",
                            color: "primary-5",
                            onClick: function onClick() {
                                setSpecularExponent(0.25);
                                setSpecularIntensity(0.125);
                            },
                            children: "Soft Light"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 192,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewButton, {
                            variant: "text",
                            color: "primary-5",
                            onClick: function onClick() {
                                setSpecularExponent(50);
                                setSpecularIntensity(2);
                            },
                            children: "Car Paint"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 201,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewButton, {
                            variant: "text",
                            color: "primary-5",
                            onClick: function onClick() {
                                setSpecularIntensity(0);
                            },
                            children: "Plastic"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 210,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
            lineNumber: 160,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
        lineNumber: 159,
        columnNumber: 9
    }, this);
}


},
93418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _material_demo__rspack_import_4 = __webpack_require__(17787);
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
    "Initializing WebGL": "    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]\n    const material1 = new TgdMaterialDiffuse({\n        color,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n    })\n    const mesh1 = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material: material1,\n    })\n    const ring1 = makeRing(context, material1)\n    const node1 = new TgdPainterNode({\n        children: [mesh1, ring1],\n    })\n    const material2 = new TgdMaterialDiffuse({\n        color,\n        lockLightsToCamera: true,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n    })\n    // const material2 = new TgdMaterialNormals()\n    const mesh2 = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material: material2,\n    })\n    const ring2 = makeRing(context, material2)\n    const node2 = new TgdPainterNode({\n        children: [mesh2, ring2],\n    })"
};
var FULL = "import {\n    ArrayNumber4,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdLight,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdPainterScissor,\n    tgdCalcRandom3,\n    webglPresetDepth,\n    tgdCalcClamp,\n    TgdPainterLogic,\n    TgdPainterNode,\n    TgdMaterial,\n    TgdPainterSegmentsData,\n    TgdPainterSegments,\n    webglPresetCull,\n    TgdMaterialFaceOrientation,\n    TgdMaterialNormals,\n    TgdPainterSegmentsMorphing,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport React from \"react\"\nimport { useFloat } from \"@/utils/hooks/float\"\nimport { ViewButton, ViewInputNumber, ViewPanel, ViewSlider } from \"@tolokoban/ui\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]\n    const material1 = new TgdMaterialDiffuse({\n        color,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n    })\n    const mesh1 = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material: material1,\n    })\n    const ring1 = makeRing(context, material1)\n    const node1 = new TgdPainterNode({\n        children: [mesh1, ring1],\n    })\n    const material2 = new TgdMaterialDiffuse({\n        color,\n        lockLightsToCamera: true,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n    })\n    // const material2 = new TgdMaterialNormals()\n    const mesh2 = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material: material2,\n    })\n    const ring2 = makeRing(context, material2)\n    const node2 = new TgdPainterNode({\n        children: [mesh2, ring2],\n    })\n    const scissor1 = new TgdPainterScissor(context, {\n        children: [node1],\n        x: 0,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    })\n    const scissor2 = new TgdPainterScissor(context, {\n        children: [node2],\n        x: 0.5,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    })\n    context.add(\n        new TgdPainterClear(context, {\n            color: [0.3, 0.3, 0.3, 1],\n            depth: 1,\n        }),\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            cull: webglPresetCull.back,\n            children: [scissor1, scissor2],\n        }),\n        new TgdPainterLogic((time, delta) => {\n            const speed = 0.1\n            const angX = delta * 0.49541 * speed\n            const angY = delta * 0.31789 * speed\n            const angZ = delta * 0.57892 * speed\n            node1.transfo.orbitAroundX(angX)\n            node1.transfo.orbitAroundY(angY)\n            node1.transfo.orbitAroundZ(angZ)\n            node2.transfo.orbitAroundX(angX)\n            node2.transfo.orbitAroundY(angY)\n            node2.transfo.orbitAroundZ(angZ)\n        }),\n    )\n    ring2.debug()\n    context.play()\n    return {\n        specularExponent(value: number) {\n            material1.specularExponent = value\n            material2.specularExponent = value\n            context.paint()\n        },\n        specularIntensity(value: number) {\n            material1.specularIntensity = value\n            material2.specularIntensity = value\n            context.paint()\n        },\n        split(value: number) {\n            const a = tgdCalcClamp(value, 0, 1)\n            scissor1.x = 0\n            scissor1.width = a\n            scissor2.x = a\n            scissor2.width = 1 - a\n            context.paint()\n        },\n    }\n}\n\nfunction makeRing(context: TgdContext, material: TgdMaterial) {\n    const data = new TgdPainterSegmentsData()\n    const count = 16\n    const y = -0.5\n    const r = 0.2\n    const R = 1\n    for (let i = 0; i < count; i++) {\n        const x0 = R * Math.cos((i * Math.PI * 2) / count)\n        const z0 = R * Math.sin((i * Math.PI * 2) / count)\n        const x1 = R * Math.cos(((i + 1) * Math.PI * 2) / count)\n        const z1 = R * Math.sin(((i + 1) * Math.PI * 2) / count)\n        const u0 = i / count\n        const u1 = (i + 1) / count\n        data.add([x0, y, z0, r], [x1, y, z1, r], [u0, u0], [u1, u1])\n    }\n    // return new TgdPainterSegments(context, {\n    //     roundness: 5,\n    //     material,\n    //     dataset: data.makeDataset(),\n    // })\n    return new TgdPainterSegmentsMorphing(context, {\n        roundness: 5,\n        material,\n        datasetsPairs: [[data.makeDataset(), data.makeDataset()]],\n    })\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null)\n    const srv = ref.current\n    const [specularExponent, setSpecularExponent] = useFloat(20, srv?.specularExponent)\n    const [specularIntensity, setSpecularIntensity] = useFloat(1, srv?.specularIntensity)\n    const [split, setSplit] = useFloat(0.1, srv?.split)\n    return (\n        <div>\n            <View\n                onReady={(scene: TgdContext, assets: Assets) => {\n                    ref.current = init(scene, assets)\n                }}\n                assets={{\n                    glb: {\n                        suzane: SuzaneURL,\n                    },\n                }}\n                gizmo\n                controller={{\n                    inertiaOrbit: 1000,\n                }}>\n                <ViewSlider value={split} onChange={setSplit} min={0} max={1} step={1e-2} />\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\">\n                    <ViewInputNumber label=\"specularExponent\" value={specularExponent} onChange={setSpecularExponent} />\n                    <ViewInputNumber\n                        label=\"specularIntensity\"\n                        value={specularIntensity}\n                        onChange={setSpecularIntensity}\n                    />\n                </ViewPanel>\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\">\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(1)\n                            setSpecularIntensity(0.5)\n                        }}>\n                        Brushed Metal\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(0.25)\n                            setSpecularIntensity(0.125)\n                        }}>\n                        Soft Light\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(50)\n                            setSpecularIntensity(2)\n                        }}>\n                        Car Paint\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularIntensity(0)\n                        }}>\n                        Plastic\n                    </ViewButton>\n                </ViewPanel>\n            </View>\n        </div>\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/index.tsx",
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
37533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _material__rspack_import_1 = __webpack_require__(93418);
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
        hr: "hr",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Diffuse material"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "To the left, the light is static, but to the right it's stuck to the camera."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                    lineNumber: 11,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9kaWZmdXNlX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZC0zZDdlZDAuYzNkYzExZTM3MDY4MDljMS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2RpZmZ1c2UvX21hdGVyaWFsL19tYXRlcmlhbC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9kaWZmdXNlL19tYXRlcmlhbC9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvdXRpbHMvaG9va3MvZmxvYXQudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvZGlmZnVzZS9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFycmF5TnVtYmVyNCxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RMaWdodCxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkUGFpbnRlclNjaXNzb3IsXG4gICAgdGdkQ2FsY1JhbmRvbTMsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbiAgICB0Z2RDYWxjQ2xhbXAsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJOb2RlLFxuICAgIFRnZE1hdGVyaWFsLFxuICAgIFRnZFBhaW50ZXJTZWdtZW50c0RhdGEsXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzLFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcbiAgICBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcbiAgICBUZ2RNYXRlcmlhbE5vcm1hbHMsXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24sIFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsLCBWaWV3U2xpZGVyIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cbiAgICBjb25zdCBtYXRlcmlhbDEgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XG4gICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgIGNvbnN0IG1lc2gxID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMSxcbiAgICB9KVxuICAgIGNvbnN0IHJpbmcxID0gbWFrZVJpbmcoY29udGV4dCwgbWF0ZXJpYWwxKVxuICAgIGNvbnN0IG5vZGUxID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMSwgcmluZzFdLFxuICAgIH0pXG4gICAgY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgIGNvbG9yLFxuICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XG4gICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgIC8vIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbE5vcm1hbHMoKVxuICAgIGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMixcbiAgICB9KVxuICAgIGNvbnN0IHJpbmcyID0gbWFrZVJpbmcoY29udGV4dCwgbWF0ZXJpYWwyKVxuICAgIGNvbnN0IG5vZGUyID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMiwgcmluZzJdLFxuICAgIH0pXG4gICAgLy8gI2VuZFxuICAgIGNvbnN0IHNjaXNzb3IxID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFtub2RlMV0sXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiAwLjUsXG4gICAgICAgIGhlaWdodDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHNjaXNzb3IyID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFtub2RlMl0sXG4gICAgICAgIHg6IDAuNSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IDAuNSxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXG4gICAgICAgICAgICBjaGlsZHJlbjogW3NjaXNzb3IxLCBzY2lzc29yMl0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWx0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAwLjFcbiAgICAgICAgICAgIGNvbnN0IGFuZ1ggPSBkZWx0YSAqIDAuNDk1NDEgKiBzcGVlZFxuICAgICAgICAgICAgY29uc3QgYW5nWSA9IGRlbHRhICogMC4zMTc4OSAqIHNwZWVkXG4gICAgICAgICAgICBjb25zdCBhbmdaID0gZGVsdGEgKiAwLjU3ODkyICogc3BlZWRcbiAgICAgICAgICAgIG5vZGUxLnRyYW5zZm8ub3JiaXRBcm91bmRYKGFuZ1gpXG4gICAgICAgICAgICBub2RlMS50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKVxuICAgICAgICAgICAgbm9kZTEudHJhbnNmby5vcmJpdEFyb3VuZFooYW5nWilcbiAgICAgICAgICAgIG5vZGUyLnRyYW5zZm8ub3JiaXRBcm91bmRYKGFuZ1gpXG4gICAgICAgICAgICBub2RlMi50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKVxuICAgICAgICAgICAgbm9kZTIudHJhbnNmby5vcmJpdEFyb3VuZFooYW5nWilcbiAgICAgICAgfSksXG4gICAgKVxuICAgIHJpbmcyLmRlYnVnKClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgbWF0ZXJpYWwxLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZVxuICAgICAgICAgICAgbWF0ZXJpYWwyLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgICAgIHNwZWN1bGFySW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIG1hdGVyaWFsMS5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlXG4gICAgICAgICAgICBtYXRlcmlhbDIuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgICAgIHNwbGl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0Z2RDYWxjQ2xhbXAodmFsdWUsIDAsIDEpXG4gICAgICAgICAgICBzY2lzc29yMS54ID0gMFxuICAgICAgICAgICAgc2Npc3NvcjEud2lkdGggPSBhXG4gICAgICAgICAgICBzY2lzc29yMi54ID0gYVxuICAgICAgICAgICAgc2Npc3NvcjIud2lkdGggPSAxIC0gYVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlUmluZyhjb250ZXh0OiBUZ2RDb250ZXh0LCBtYXRlcmlhbDogVGdkTWF0ZXJpYWwpIHtcbiAgICBjb25zdCBkYXRhID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKVxuICAgIGNvbnN0IGNvdW50ID0gMTZcbiAgICBjb25zdCB5ID0gLTAuNVxuICAgIGNvbnN0IHIgPSAwLjJcbiAgICBjb25zdCBSID0gMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCB4MCA9IFIgKiBNYXRoLmNvcygoaSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KVxuICAgICAgICBjb25zdCB6MCA9IFIgKiBNYXRoLnNpbigoaSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KVxuICAgICAgICBjb25zdCB4MSA9IFIgKiBNYXRoLmNvcygoKGkgKyAxKSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KVxuICAgICAgICBjb25zdCB6MSA9IFIgKiBNYXRoLnNpbigoKGkgKyAxKSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KVxuICAgICAgICBjb25zdCB1MCA9IGkgLyBjb3VudFxuICAgICAgICBjb25zdCB1MSA9IChpICsgMSkgLyBjb3VudFxuICAgICAgICBkYXRhLmFkZChbeDAsIHksIHowLCByXSwgW3gxLCB5LCB6MSwgcl0sIFt1MCwgdTBdLCBbdTEsIHUxXSlcbiAgICB9XG4gICAgLy8gcmV0dXJuIG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xuICAgIC8vICAgICByb3VuZG5lc3M6IDUsXG4gICAgLy8gICAgIG1hdGVyaWFsLFxuICAgIC8vICAgICBkYXRhc2V0OiBkYXRhLm1ha2VEYXRhc2V0KCksXG4gICAgLy8gfSlcbiAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nKGNvbnRleHQsIHtcbiAgICAgICAgcm91bmRuZXNzOiA1LFxuICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgZGF0YXNldHNQYWlyczogW1tkYXRhLm1ha2VEYXRhc2V0KCksIGRhdGEubWFrZURhdGFzZXQoKV1dLFxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCBzcnYgPSByZWYuY3VycmVudFxuICAgIGNvbnN0IFtzcGVjdWxhckV4cG9uZW50LCBzZXRTcGVjdWxhckV4cG9uZW50XSA9IHVzZUZsb2F0KDIwLCBzcnY/LnNwZWN1bGFyRXhwb25lbnQpXG4gICAgY29uc3QgW3NwZWN1bGFySW50ZW5zaXR5LCBzZXRTcGVjdWxhckludGVuc2l0eV0gPSB1c2VGbG9hdCgxLCBzcnY/LnNwZWN1bGFySW50ZW5zaXR5KVxuICAgIGNvbnN0IFtzcGxpdCwgc2V0U3BsaXRdID0gdXNlRmxvYXQoMC4xLCBzcnY/LnNwbGl0KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICAgICAgZ2xiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdXphbmU6IFN1emFuZVVSTCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPFZpZXdTbGlkZXIgdmFsdWU9e3NwbGl0fSBvbkNoYW5nZT17c2V0U3BsaXR9IG1pbj17MH0gbWF4PXsxfSBzdGVwPXsxZS0yfSAvPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cInNwZWN1bGFyRXhwb25lbnRcIiB2YWx1ZT17c3BlY3VsYXJFeHBvbmVudH0gb25DaGFuZ2U9e3NldFNwZWN1bGFyRXhwb25lbnR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic3BlY3VsYXJJbnRlbnNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NwZWN1bGFySW50ZW5zaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNwZWN1bGFySW50ZW5zaXR5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMC41KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBCcnVzaGVkIE1ldGFsXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDAuMjUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMC4xMjUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNvZnQgTGlnaHRcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoNTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FyIFBhaW50XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFzdGljXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL19tYXRlcmlhbC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcIiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWy4uLnRnZENhbGNSYW5kb20zKCksIDFdXFxuICAgIGNvbnN0IG1hdGVyaWFsMSA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgY29sb3IsXFxuICAgICAgICBhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWVzaDEgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHJpbmcxID0gbWFrZVJpbmcoY29udGV4dCwgbWF0ZXJpYWwxKVxcbiAgICBjb25zdCBub2RlMSA9IG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuICAgICAgICBjaGlsZHJlbjogW21lc2gxLCByaW5nMV0sXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgY29sb3IsXFxuICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgICAgICBhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgLy8gY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsTm9ybWFscygpXFxuICAgIGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWwyLFxcbiAgICB9KVxcbiAgICBjb25zdCByaW5nMiA9IG1ha2VSaW5nKGNvbnRleHQsIG1hdGVyaWFsMilcXG4gICAgY29uc3Qgbm9kZTIgPSBuZXcgVGdkUGFpbnRlck5vZGUoe1xcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMiwgcmluZzJdLFxcbiAgICB9KVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgQXJyYXlOdW1iZXI0LFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZExpZ2h0LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFBhaW50ZXJTY2lzc29yLFxcbiAgICB0Z2RDYWxjUmFuZG9tMyxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG4gICAgdGdkQ2FsY0NsYW1wLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJOb2RlLFxcbiAgICBUZ2RNYXRlcmlhbCxcXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzLFxcbiAgICB3ZWJnbFByZXNldEN1bGwsXFxuICAgIFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxcbiAgICBUZ2RNYXRlcmlhbE5vcm1hbHMsXFxuICAgIFRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlxcXCJcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiXFxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFxcXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XFxcIlxcbmltcG9ydCB7IFZpZXdCdXR0b24sIFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsLCBWaWV3U2xpZGVyIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi91aVxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cXG4gICAgY29uc3QgbWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoMSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMSxcXG4gICAgfSlcXG4gICAgY29uc3QgcmluZzEgPSBtYWtlUmluZyhjb250ZXh0LCBtYXRlcmlhbDEpXFxuICAgIGNvbnN0IG5vZGUxID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaDEsIHJpbmcxXSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICAvLyBjb25zdCBtYXRlcmlhbDIgPSBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxzKClcXG4gICAgY29uc3QgbWVzaDIgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDIsXFxuICAgIH0pXFxuICAgIGNvbnN0IHJpbmcyID0gbWFrZVJpbmcoY29udGV4dCwgbWF0ZXJpYWwyKVxcbiAgICBjb25zdCBub2RlMiA9IG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuICAgICAgICBjaGlsZHJlbjogW21lc2gyLCByaW5nMl0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHNjaXNzb3IxID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbm9kZTFdLFxcbiAgICAgICAgeDogMCxcXG4gICAgICAgIHk6IDAsXFxuICAgICAgICB3aWR0aDogMC41LFxcbiAgICAgICAgaGVpZ2h0OiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBzY2lzc29yMiA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW25vZGUyXSxcXG4gICAgICAgIHg6IDAuNSxcXG4gICAgICAgIHk6IDAsXFxuICAgICAgICB3aWR0aDogMC41LFxcbiAgICAgICAgaGVpZ2h0OiAxLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzY2lzc29yMSwgc2Npc3NvcjJdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWx0YSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gMC4xXFxuICAgICAgICAgICAgY29uc3QgYW5nWCA9IGRlbHRhICogMC40OTU0MSAqIHNwZWVkXFxuICAgICAgICAgICAgY29uc3QgYW5nWSA9IGRlbHRhICogMC4zMTc4OSAqIHNwZWVkXFxuICAgICAgICAgICAgY29uc3QgYW5nWiA9IGRlbHRhICogMC41Nzg5MiAqIHNwZWVkXFxuICAgICAgICAgICAgbm9kZTEudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWClcXG4gICAgICAgICAgICBub2RlMS50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKVxcbiAgICAgICAgICAgIG5vZGUxLnRyYW5zZm8ub3JiaXRBcm91bmRaKGFuZ1opXFxuICAgICAgICAgICAgbm9kZTIudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWClcXG4gICAgICAgICAgICBub2RlMi50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKVxcbiAgICAgICAgICAgIG5vZGUyLnRyYW5zZm8ub3JiaXRBcm91bmRaKGFuZ1opXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICByaW5nMi5kZWJ1ZygpXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIHJldHVybiB7XFxuICAgICAgICBzcGVjdWxhckV4cG9uZW50KHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBtYXRlcmlhbDEuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlXFxuICAgICAgICAgICAgbWF0ZXJpYWwyLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgICAgIHNwZWN1bGFySW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBtYXRlcmlhbDEuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZVxcbiAgICAgICAgICAgIG1hdGVyaWFsMi5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICAgICAgc3BsaXQodmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0Z2RDYWxjQ2xhbXAodmFsdWUsIDAsIDEpXFxuICAgICAgICAgICAgc2Npc3NvcjEueCA9IDBcXG4gICAgICAgICAgICBzY2lzc29yMS53aWR0aCA9IGFcXG4gICAgICAgICAgICBzY2lzc29yMi54ID0gYVxcbiAgICAgICAgICAgIHNjaXNzb3IyLndpZHRoID0gMSAtIGFcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0sXFxuICAgIH1cXG59XFxuXFxuZnVuY3Rpb24gbWFrZVJpbmcoY29udGV4dDogVGdkQ29udGV4dCwgbWF0ZXJpYWw6IFRnZE1hdGVyaWFsKSB7XFxuICAgIGNvbnN0IGRhdGEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXFxuICAgIGNvbnN0IGNvdW50ID0gMTZcXG4gICAgY29uc3QgeSA9IC0wLjVcXG4gICAgY29uc3QgciA9IDAuMlxcbiAgICBjb25zdCBSID0gMVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG4gICAgICAgIGNvbnN0IHgwID0gUiAqIE1hdGguY29zKChpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXFxuICAgICAgICBjb25zdCB6MCA9IFIgKiBNYXRoLnNpbigoaSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KVxcbiAgICAgICAgY29uc3QgeDEgPSBSICogTWF0aC5jb3MoKChpICsgMSkgKiBNYXRoLlBJICogMikgLyBjb3VudClcXG4gICAgICAgIGNvbnN0IHoxID0gUiAqIE1hdGguc2luKCgoaSArIDEpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXFxuICAgICAgICBjb25zdCB1MCA9IGkgLyBjb3VudFxcbiAgICAgICAgY29uc3QgdTEgPSAoaSArIDEpIC8gY291bnRcXG4gICAgICAgIGRhdGEuYWRkKFt4MCwgeSwgejAsIHJdLCBbeDEsIHksIHoxLCByXSwgW3UwLCB1MF0sIFt1MSwgdTFdKVxcbiAgICB9XFxuICAgIC8vIHJldHVybiBuZXcgVGdkUGFpbnRlclNlZ21lbnRzKGNvbnRleHQsIHtcXG4gICAgLy8gICAgIHJvdW5kbmVzczogNSxcXG4gICAgLy8gICAgIG1hdGVyaWFsLFxcbiAgICAvLyAgICAgZGF0YXNldDogZGF0YS5tYWtlRGF0YXNldCgpLFxcbiAgICAvLyB9KVxcbiAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nKGNvbnRleHQsIHtcXG4gICAgICAgIHJvdW5kbmVzczogNSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgZGF0YXNldHNQYWlyczogW1tkYXRhLm1ha2VEYXRhc2V0KCksIGRhdGEubWFrZURhdGFzZXQoKV1dLFxcbiAgICB9KVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBzcnYgPSByZWYuY3VycmVudFxcbiAgICBjb25zdCBbc3BlY3VsYXJFeHBvbmVudCwgc2V0U3BlY3VsYXJFeHBvbmVudF0gPSB1c2VGbG9hdCgyMCwgc3J2Py5zcGVjdWxhckV4cG9uZW50KVxcbiAgICBjb25zdCBbc3BlY3VsYXJJbnRlbnNpdHksIHNldFNwZWN1bGFySW50ZW5zaXR5XSA9IHVzZUZsb2F0KDEsIHNydj8uc3BlY3VsYXJJbnRlbnNpdHkpXFxuICAgIGNvbnN0IFtzcGxpdCwgc2V0U3BsaXRdID0gdXNlRmxvYXQoMC4xLCBzcnY/LnNwbGl0KVxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgICAgICBvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXphbmU6IFN1emFuZVVSTCxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgIDxWaWV3U2xpZGVyIHZhbHVlPXtzcGxpdH0gb25DaGFuZ2U9e3NldFNwbGl0fSBtaW49ezB9IG1heD17MX0gc3RlcD17MWUtMn0gLz5cXG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVxcXCJmbGV4XFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cXFwic3BlY3VsYXJFeHBvbmVudFxcXCIgdmFsdWU9e3NwZWN1bGFyRXhwb25lbnR9IG9uQ2hhbmdlPXtzZXRTcGVjdWxhckV4cG9uZW50fSAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJzcGVjdWxhckludGVuc2l0eVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3BlY3VsYXJJbnRlbnNpdHl9XFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNwZWN1bGFySW50ZW5zaXR5fVxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cXFwiZmxleFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCgxKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgwLjUpXFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgQnJ1c2hlZCBNZXRhbFxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDAuMjUpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDAuMTI1KVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvZnQgTGlnaHRcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCg1MClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMilcXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXIgUGFpbnRcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMClcXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFzdGljXFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgIDwvVmlldz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZsb2F0KFxuICAgIGluaXRpYWxWYWx1ZTogbnVtYmVyLFxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQsXG4pOiBbdmFsdWU6IG51bWJlciwgc2V0VmFsdWU6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkXSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IG9uQ2hhbmdlPy4odmFsdWUpLCBbdmFsdWVdKVxuICAgIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RMaWdodCIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFBhaW50ZXJTY2lzc29yIiwidGdkQ2FsY1JhbmRvbTMiLCJ3ZWJnbFByZXNldERlcHRoIiwidGdkQ2FsY0NsYW1wIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck5vZGUiLCJUZ2RQYWludGVyU2VnbWVudHNEYXRhIiwid2ViZ2xQcmVzZXRDdWxsIiwiVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmciLCJWaWV3IiwiU3V6YW5lVVJMIiwiUmVhY3QiLCJ1c2VGbG9hdCIsIlZpZXdCdXR0b24iLCJWaWV3SW5wdXROdW1iZXIiLCJWaWV3UGFuZWwiLCJWaWV3U2xpZGVyIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjb2xvciIsIm1hdGVyaWFsMSIsIm1lc2gxIiwicmluZzEiLCJtYWtlUmluZyIsIm5vZGUxIiwibWF0ZXJpYWwyIiwibWVzaDIiLCJyaW5nMiIsIm5vZGUyIiwic2Npc3NvcjEiLCJzY2lzc29yMiIsInRpbWUiLCJkZWx0YSIsInNwZWVkIiwiYW5nWCIsImFuZ1kiLCJhbmdaIiwic3BlY3VsYXJFeHBvbmVudCIsInZhbHVlIiwic3BlY3VsYXJJbnRlbnNpdHkiLCJzcGxpdCIsImEiLCJtYXRlcmlhbCIsImRhdGEiLCJjb3VudCIsInkiLCJyIiwiUiIsImkiLCJ4MCIsIk1hdGgiLCJ6MCIsIngxIiwiejEiLCJ1MCIsInUxIiwiRGVtbyIsInJlZiIsInNydiIsIl91c2VGbG9hdCIsInNldFNwZWN1bGFyRXhwb25lbnQiLCJfdXNlRmxvYXQxIiwic2V0U3BlY3VsYXJJbnRlbnNpdHkiLCJfdXNlRmxvYXQyIiwic2V0U3BsaXQiLCJvblJlYWR5Iiwic2NlbmUiLCJvbkNsaWNrIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsImluaXRpYWxWYWx1ZSIsIm9uQ2hhbmdlIiwic2V0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCdUI7QUFDNkI7QUFDSDtBQUN4QjtBQUNxQjtBQUNvQztBQUVsRixTQUFTc0IsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUM3Qyw0QkFBNEI7SUFDNUIsSUFBTUMsUUFBdUIscUJBQUduQixrREFBY0EsV0FBbEI7UUFBc0I7S0FBRTtJQUNwRCxJQUFNb0IsWUFBWSxJQUFJekIsa0RBQWtCQSxDQUFDO1FBQ3JDd0IsT0FBQUE7UUFDQSxTQUFTLElBQUl6Qix3Q0FBUUEsQ0FBQztZQUNsQixPQUFPO2dCQUFDO2dCQUFLO2dCQUFLO2dCQUFLO2FBQUU7UUFDN0I7SUFDSjtJQUNBLElBQU0yQixRQUFRLElBQUl4QixrREFBa0JBLENBQUNvQixTQUFTO1FBQzFDLE9BQU9DLE9BQU8sR0FBRyxDQUFDLE1BQU07UUFDeEIsVUFBVUU7SUFDZDtJQUNBLElBQU1FLFFBQVFDLFNBQVNOLFNBQVNHO0lBQ2hDLElBQU1JLFFBQVEsSUFBSXBCLDhDQUFjQSxDQUFDO1FBQzdCLFVBQVU7WUFBQ2lCO1lBQU9DO1NBQU07SUFDNUI7SUFDQSxJQUFNRyxZQUFZLElBQUk5QixrREFBa0JBLENBQUM7UUFDckN3QixPQUFBQTtRQUNBLG9CQUFvQjtRQUNwQixTQUFTLElBQUl6Qix3Q0FBUUEsQ0FBQztZQUNsQixPQUFPO2dCQUFDO2dCQUFLO2dCQUFLO2dCQUFLO2FBQUU7UUFDN0I7SUFDSjtJQUNBLDZDQUE2QztJQUM3QyxJQUFNZ0MsUUFBUSxJQUFJN0Isa0RBQWtCQSxDQUFDb0IsU0FBUztRQUMx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