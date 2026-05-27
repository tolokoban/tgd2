"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_diffuse_page_mdx-src_components_demo_CodeViewer_CodeViewer_mod-3d7ed0"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 175,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewInputNumber, {
                            label: "specularIntensity",
                            value: specularIntensity,
                            onChange: setSpecularIntensity
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 176,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 210,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
            lineNumber: 160,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/index.tsx",
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
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "To the left, the light is static, but to the right it's stuck to the camera."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                    lineNumber: 11,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9kaWZmdXNlX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZC0zZDdlZDAuMjM0NDFkZTUwNjQzNmExZS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9kaWZmdXNlL19tYXRlcmlhbC9fbWF0ZXJpYWwuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2RpZmZ1c2UvX21hdGVyaWFsL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvdXRpbHMvaG9va3MvZmxvYXQudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2RpZmZ1c2UvcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQXJyYXlOdW1iZXI0LFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIFRnZExpZ2h0LFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RQYWludGVyU2Npc3NvcixcbiAgICB0Z2RDYWxjUmFuZG9tMyxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxuICAgIHRnZENhbGNDbGFtcCxcbiAgICBUZ2RQYWludGVyTG9naWMsXG4gICAgVGdkUGFpbnRlck5vZGUsXG4gICAgVGdkTWF0ZXJpYWwsXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcbiAgICBUZ2RQYWludGVyU2VnbWVudHMsXG4gICAgd2ViZ2xQcmVzZXRDdWxsLFxuICAgIFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxuICAgIFRnZE1hdGVyaWFsTm9ybWFscyxcbiAgICBUZ2RQYWludGVyU2VnbWVudHNNb3JwaGluZyxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcIkAvdXRpbHMvaG9va3MvZmxvYXRcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiwgVmlld0lucHV0TnVtYmVyLCBWaWV3UGFuZWwsIFZpZXdTbGlkZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXVxuICAgIGNvbnN0IG1hdGVyaWFsMSA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICBjb2xvcixcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcbiAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgY29uc3QgbWVzaDEgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWwxLFxuICAgIH0pXG4gICAgY29uc3QgcmluZzEgPSBtYWtlUmluZyhjb250ZXh0LCBtYXRlcmlhbDEpXG4gICAgY29uc3Qgbm9kZTEgPSBuZXcgVGdkUGFpbnRlck5vZGUoe1xuICAgICAgICBjaGlsZHJlbjogW21lc2gxLCByaW5nMV0sXG4gICAgfSlcbiAgICBjb25zdCBtYXRlcmlhbDIgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcbiAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgLy8gY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsTm9ybWFscygpXG4gICAgY29uc3QgbWVzaDIgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWwyLFxuICAgIH0pXG4gICAgY29uc3QgcmluZzIgPSBtYWtlUmluZyhjb250ZXh0LCBtYXRlcmlhbDIpXG4gICAgY29uc3Qgbm9kZTIgPSBuZXcgVGdkUGFpbnRlck5vZGUoe1xuICAgICAgICBjaGlsZHJlbjogW21lc2gyLCByaW5nMl0sXG4gICAgfSlcbiAgICAvLyAjZW5kXG4gICAgY29uc3Qgc2Npc3NvcjEgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xuICAgICAgICBjaGlsZHJlbjogW25vZGUxXSxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IDAuNSxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgIH0pXG4gICAgY29uc3Qgc2Npc3NvcjIgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xuICAgICAgICBjaGlsZHJlbjogW25vZGUyXSxcbiAgICAgICAgeDogMC41LFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogMC41LFxuICAgICAgICBoZWlnaHQ6IDEsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxuICAgICAgICAgICAgZGVwdGg6IDEsXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbc2Npc3NvcjEsIHNjaXNzb3IyXSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IDAuMVxuICAgICAgICAgICAgY29uc3QgYW5nWCA9IGRlbHRhICogMC40OTU0MSAqIHNwZWVkXG4gICAgICAgICAgICBjb25zdCBhbmdZID0gZGVsdGEgKiAwLjMxNzg5ICogc3BlZWRcbiAgICAgICAgICAgIGNvbnN0IGFuZ1ogPSBkZWx0YSAqIDAuNTc4OTIgKiBzcGVlZFxuICAgICAgICAgICAgbm9kZTEudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWClcbiAgICAgICAgICAgIG5vZGUxLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpXG4gICAgICAgICAgICBub2RlMS50cmFuc2ZvLm9yYml0QXJvdW5kWihhbmdaKVxuICAgICAgICAgICAgbm9kZTIudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWClcbiAgICAgICAgICAgIG5vZGUyLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpXG4gICAgICAgICAgICBub2RlMi50cmFuc2ZvLm9yYml0QXJvdW5kWihhbmdaKVxuICAgICAgICB9KSxcbiAgICApXG4gICAgcmluZzIuZGVidWcoKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3BlY3VsYXJFeHBvbmVudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBtYXRlcmlhbDEuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlXG4gICAgICAgICAgICBtYXRlcmlhbDIuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICAgICAgc3BlY3VsYXJJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgbWF0ZXJpYWwxLnNwZWN1bGFySW50ZW5zaXR5ID0gdmFsdWVcbiAgICAgICAgICAgIG1hdGVyaWFsMi5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICAgICAgc3BsaXQodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgYSA9IHRnZENhbGNDbGFtcCh2YWx1ZSwgMCwgMSlcbiAgICAgICAgICAgIHNjaXNzb3IxLnggPSAwXG4gICAgICAgICAgICBzY2lzc29yMS53aWR0aCA9IGFcbiAgICAgICAgICAgIHNjaXNzb3IyLnggPSBhXG4gICAgICAgICAgICBzY2lzc29yMi53aWR0aCA9IDEgLSBhXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VSaW5nKGNvbnRleHQ6IFRnZENvbnRleHQsIG1hdGVyaWFsOiBUZ2RNYXRlcmlhbCkge1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXG4gICAgY29uc3QgY291bnQgPSAxNlxuICAgIGNvbnN0IHkgPSAtMC41XG4gICAgY29uc3QgciA9IDAuMlxuICAgIGNvbnN0IFIgPSAxXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHgwID0gUiAqIE1hdGguY29zKChpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXG4gICAgICAgIGNvbnN0IHowID0gUiAqIE1hdGguc2luKChpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXG4gICAgICAgIGNvbnN0IHgxID0gUiAqIE1hdGguY29zKCgoaSArIDEpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXG4gICAgICAgIGNvbnN0IHoxID0gUiAqIE1hdGguc2luKCgoaSArIDEpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXG4gICAgICAgIGNvbnN0IHUwID0gaSAvIGNvdW50XG4gICAgICAgIGNvbnN0IHUxID0gKGkgKyAxKSAvIGNvdW50XG4gICAgICAgIGRhdGEuYWRkKFt4MCwgeSwgejAsIHJdLCBbeDEsIHksIHoxLCByXSwgW3UwLCB1MF0sIFt1MSwgdTFdKVxuICAgIH1cbiAgICAvLyByZXR1cm4gbmV3IFRnZFBhaW50ZXJTZWdtZW50cyhjb250ZXh0LCB7XG4gICAgLy8gICAgIHJvdW5kbmVzczogNSxcbiAgICAvLyAgICAgbWF0ZXJpYWwsXG4gICAgLy8gICAgIGRhdGFzZXQ6IGRhdGEubWFrZURhdGFzZXQoKSxcbiAgICAvLyB9KVxuICAgIHJldHVybiBuZXcgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcoY29udGV4dCwge1xuICAgICAgICByb3VuZG5lc3M6IDUsXG4gICAgICAgIG1hdGVyaWFsLFxuICAgICAgICBkYXRhc2V0c1BhaXJzOiBbW2RhdGEubWFrZURhdGFzZXQoKSwgZGF0YS5tYWtlRGF0YXNldCgpXV0sXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XG4gICAgY29uc3QgW3NwZWN1bGFyRXhwb25lbnQsIHNldFNwZWN1bGFyRXhwb25lbnRdID0gdXNlRmxvYXQoMjAsIHNydj8uc3BlY3VsYXJFeHBvbmVudClcbiAgICBjb25zdCBbc3BlY3VsYXJJbnRlbnNpdHksIHNldFNwZWN1bGFySW50ZW5zaXR5XSA9IHVzZUZsb2F0KDEsIHNydj8uc3BlY3VsYXJJbnRlbnNpdHkpXG4gICAgY29uc3QgW3NwbGl0LCBzZXRTcGxpdF0gPSB1c2VGbG9hdCgwLjEsIHNydj8uc3BsaXQpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgb25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1emFuZTogU3V6YW5lVVJMLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZ2l6bW9cbiAgICAgICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8Vmlld1NsaWRlciB2YWx1ZT17c3BsaXR9IG9uQ2hhbmdlPXtzZXRTcGxpdH0gbWluPXswfSBtYXg9ezF9IHN0ZXA9ezFlLTJ9IC8+XG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwic3BlY3VsYXJFeHBvbmVudFwiIHZhbHVlPXtzcGVjdWxhckV4cG9uZW50fSBvbkNoYW5nZT17c2V0U3BlY3VsYXJFeHBvbmVudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzcGVjdWxhckludGVuc2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3BlY3VsYXJJbnRlbnNpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U3BlY3VsYXJJbnRlbnNpdHl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgwLjUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJydXNoZWQgTWV0YWxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMC4yNSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgwLjEyNSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgU29mdCBMaWdodFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnktNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCg1MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYXIgUGFpbnRcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXN0aWNcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vX21hdGVyaWFsLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cXG4gICAgY29uc3QgbWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoMSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMSxcXG4gICAgfSlcXG4gICAgY29uc3QgcmluZzEgPSBtYWtlUmluZyhjb250ZXh0LCBtYXRlcmlhbDEpXFxuICAgIGNvbnN0IG5vZGUxID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaDEsIHJpbmcxXSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICAvLyBjb25zdCBtYXRlcmlhbDIgPSBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxzKClcXG4gICAgY29uc3QgbWVzaDIgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDIsXFxuICAgIH0pXFxuICAgIGNvbnN0IHJpbmcyID0gbWFrZVJpbmcoY29udGV4dCwgbWF0ZXJpYWwyKVxcbiAgICBjb25zdCBub2RlMiA9IG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuICAgICAgICBjaGlsZHJlbjogW21lc2gyLCByaW5nMl0sXFxuICAgIH0pXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBBcnJheU51bWJlcjQsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gICAgVGdkTGlnaHQsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkUGFpbnRlclNjaXNzb3IsXFxuICAgIHRnZENhbGNSYW5kb20zLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbiAgICB0Z2RDYWxjQ2xhbXAsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlck5vZGUsXFxuICAgIFRnZE1hdGVyaWFsLFxcbiAgICBUZ2RQYWludGVyU2VnbWVudHNEYXRhLFxcbiAgICBUZ2RQYWludGVyU2VnbWVudHMsXFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcXG4gICAgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXFxuICAgIFRnZE1hdGVyaWFsTm9ybWFscyxcXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIlxcbmltcG9ydCBSZWFjdCBmcm9tIFxcXCJyZWFjdFxcXCJcXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXFxcIkAvdXRpbHMvaG9va3MvZmxvYXRcXFwiXFxuaW1wb3J0IHsgVmlld0J1dHRvbiwgVmlld0lucHV0TnVtYmVyLCBWaWV3UGFuZWwsIFZpZXdTbGlkZXIgfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3VpXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXVxcbiAgICBjb25zdCBtYXRlcmlhbDEgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgIGNvbG9yLFxcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2gxID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWwxLFxcbiAgICB9KVxcbiAgICBjb25zdCByaW5nMSA9IG1ha2VSaW5nKGNvbnRleHQsIG1hdGVyaWFsMSlcXG4gICAgY29uc3Qgbm9kZTEgPSBuZXcgVGdkUGFpbnRlck5vZGUoe1xcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMSwgcmluZzFdLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXRlcmlhbDIgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgIGNvbG9yLFxcbiAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIC8vIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbE5vcm1hbHMoKVxcbiAgICBjb25zdCBtZXNoMiA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMixcXG4gICAgfSlcXG4gICAgY29uc3QgcmluZzIgPSBtYWtlUmluZyhjb250ZXh0LCBtYXRlcmlhbDIpXFxuICAgIGNvbnN0IG5vZGUyID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaDIsIHJpbmcyXSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc2Npc3NvcjEgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFtub2RlMV0sXFxuICAgICAgICB4OiAwLFxcbiAgICAgICAgeTogMCxcXG4gICAgICAgIHdpZHRoOiAwLjUsXFxuICAgICAgICBoZWlnaHQ6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHNjaXNzb3IyID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbm9kZTJdLFxcbiAgICAgICAgeDogMC41LFxcbiAgICAgICAgeTogMCxcXG4gICAgICAgIHdpZHRoOiAwLjUsXFxuICAgICAgICBoZWlnaHQ6IDEsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3NjaXNzb3IxLCBzY2lzc29yMl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XFxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAwLjFcXG4gICAgICAgICAgICBjb25zdCBhbmdYID0gZGVsdGEgKiAwLjQ5NTQxICogc3BlZWRcXG4gICAgICAgICAgICBjb25zdCBhbmdZID0gZGVsdGEgKiAwLjMxNzg5ICogc3BlZWRcXG4gICAgICAgICAgICBjb25zdCBhbmdaID0gZGVsdGEgKiAwLjU3ODkyICogc3BlZWRcXG4gICAgICAgICAgICBub2RlMS50cmFuc2ZvLm9yYml0QXJvdW5kWChhbmdYKVxcbiAgICAgICAgICAgIG5vZGUxLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpXFxuICAgICAgICAgICAgbm9kZTEudHJhbnNmby5vcmJpdEFyb3VuZFooYW5nWilcXG4gICAgICAgICAgICBub2RlMi50cmFuc2ZvLm9yYml0QXJvdW5kWChhbmdYKVxcbiAgICAgICAgICAgIG5vZGUyLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpXFxuICAgICAgICAgICAgbm9kZTIudHJhbnNmby5vcmJpdEFyb3VuZFooYW5nWilcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIHJpbmcyLmRlYnVnKClcXG4gICAgY29udGV4dC5wbGF5KClcXG4gICAgcmV0dXJuIHtcXG4gICAgICAgIHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIG1hdGVyaWFsMS5zcGVjdWxhckV4cG9uZW50ID0gdmFsdWVcXG4gICAgICAgICAgICBtYXRlcmlhbDIuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICAgICAgc3BlY3VsYXJJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIG1hdGVyaWFsMS5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlXFxuICAgICAgICAgICAgbWF0ZXJpYWwyLnNwZWN1bGFySW50ZW5zaXR5ID0gdmFsdWVcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0sXFxuICAgICAgICBzcGxpdCh2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgY29uc3QgYSA9IHRnZENhbGNDbGFtcCh2YWx1ZSwgMCwgMSlcXG4gICAgICAgICAgICBzY2lzc29yMS54ID0gMFxcbiAgICAgICAgICAgIHNjaXNzb3IxLndpZHRoID0gYVxcbiAgICAgICAgICAgIHNjaXNzb3IyLnggPSBhXFxuICAgICAgICAgICAgc2Npc3NvcjIud2lkdGggPSAxIC0gYVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgfVxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlUmluZyhjb250ZXh0OiBUZ2RDb250ZXh0LCBtYXRlcmlhbDogVGdkTWF0ZXJpYWwpIHtcXG4gICAgY29uc3QgZGF0YSA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKClcXG4gICAgY29uc3QgY291bnQgPSAxNlxcbiAgICBjb25zdCB5ID0gLTAuNVxcbiAgICBjb25zdCByID0gMC4yXFxuICAgIGNvbnN0IFIgPSAxXFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcbiAgICAgICAgY29uc3QgeDAgPSBSICogTWF0aC5jb3MoKGkgKiBNYXRoLlBJICogMikgLyBjb3VudClcXG4gICAgICAgIGNvbnN0IHowID0gUiAqIE1hdGguc2luKChpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXFxuICAgICAgICBjb25zdCB4MSA9IFIgKiBNYXRoLmNvcygoKGkgKyAxKSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KVxcbiAgICAgICAgY29uc3QgejEgPSBSICogTWF0aC5zaW4oKChpICsgMSkgKiBNYXRoLlBJICogMikgLyBjb3VudClcXG4gICAgICAgIGNvbnN0IHUwID0gaSAvIGNvdW50XFxuICAgICAgICBjb25zdCB1MSA9IChpICsgMSkgLyBjb3VudFxcbiAgICAgICAgZGF0YS5hZGQoW3gwLCB5LCB6MCwgcl0sIFt4MSwgeSwgejEsIHJdLCBbdTAsIHUwXSwgW3UxLCB1MV0pXFxuICAgIH1cXG4gICAgLy8gcmV0dXJuIG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xcbiAgICAvLyAgICAgcm91bmRuZXNzOiA1LFxcbiAgICAvLyAgICAgbWF0ZXJpYWwsXFxuICAgIC8vICAgICBkYXRhc2V0OiBkYXRhLm1ha2VEYXRhc2V0KCksXFxuICAgIC8vIH0pXFxuICAgIHJldHVybiBuZXcgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcoY29udGV4dCwge1xcbiAgICAgICAgcm91bmRuZXNzOiA1LFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgICAgICBkYXRhc2V0c1BhaXJzOiBbW2RhdGEubWFrZURhdGFzZXQoKSwgZGF0YS5tYWtlRGF0YXNldCgpXV0sXFxuICAgIH0pXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XFxuICAgIGNvbnN0IFtzcGVjdWxhckV4cG9uZW50LCBzZXRTcGVjdWxhckV4cG9uZW50XSA9IHVzZUZsb2F0KDIwLCBzcnY/LnNwZWN1bGFyRXhwb25lbnQpXFxuICAgIGNvbnN0IFtzcGVjdWxhckludGVuc2l0eSwgc2V0U3BlY3VsYXJJbnRlbnNpdHldID0gdXNlRmxvYXQoMSwgc3J2Py5zcGVjdWxhckludGVuc2l0eSlcXG4gICAgY29uc3QgW3NwbGl0LCBzZXRTcGxpdF0gPSB1c2VGbG9hdCgwLjEsIHNydj8uc3BsaXQpXFxuICAgIHJldHVybiAoXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgICAgIG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gaW5pdChzY2VuZSwgYXNzZXRzKVxcbiAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgICAgIGdsYjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1emFuZTogU3V6YW5lVVJMLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgPFZpZXdTbGlkZXIgdmFsdWU9e3NwbGl0fSBvbkNoYW5nZT17c2V0U3BsaXR9IG1pbj17MH0gbWF4PXsxfSBzdGVwPXsxZS0yfSAvPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XFxcImZsZXhcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJzcGVjdWxhckV4cG9uZW50XFxcIiB2YWx1ZT17c3BlY3VsYXJFeHBvbmVudH0gb25DaGFuZ2U9e3NldFNwZWN1bGFyRXhwb25lbnR9IC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcInNwZWN1bGFySW50ZW5zaXR5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcGVjdWxhckludGVuc2l0eX1cXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U3BlY3VsYXJJbnRlbnNpdHl9XFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVxcXCJmbGV4XFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDEpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDAuNSlcXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBCcnVzaGVkIE1ldGFsXFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInByaW1hcnktNVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMC4yNSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMC4xMjUpXFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgU29mdCBMaWdodFxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDUwKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgyKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENhciBQYWludFxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgwKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXN0aWNcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICAgICAgPC9WaWV3PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmxvYXQoXG4gICAgaW5pdGlhbFZhbHVlOiBudW1iZXIsXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCxcbik6IFt2YWx1ZTogbnVtYmVyLCBzZXRWYWx1ZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWRdIHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZSlcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gb25DaGFuZ2U/Lih2YWx1ZSksIFt2YWx1ZV0pXG4gICAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZExpZ2h0IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkUGFpbnRlclNjaXNzb3IiLCJ0Z2RDYWxjUmFuZG9tMyIsIndlYmdsUHJlc2V0RGVwdGgiLCJ0Z2RDYWxjQ2xhbXAiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTm9kZSIsIlRnZFBhaW50ZXJTZWdtZW50c0RhdGEiLCJ3ZWJnbFByZXNldEN1bGwiLCJUZ2RQYWludGVyU2VnbWVudHNNb3JwaGluZyIsIlZpZXciLCJTdXphbmVVUkwiLCJSZWFjdCIsInVzZUZsb2F0IiwiVmlld0J1dHRvbiIsIlZpZXdJbnB1dE51bWJlciIsIlZpZXdQYW5lbCIsIlZpZXdTbGlkZXIiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNvbG9yIiwibWF0ZXJpYWwxIiwibWVzaDEiLCJyaW5nMSIsIm1ha2VSaW5nIiwibm9kZTEiLCJtYXRlcmlhbDIiLCJtZXNoMiIsInJpbmcyIiwibm9kZTIiLCJzY2lzc29yMSIsInNjaXNzb3IyIiwidGltZSIsImRlbHRhIiwic3BlZWQiLCJhbmdYIiwiYW5nWSIsImFuZ1oiLCJzcGVjdWxhckV4cG9uZW50IiwidmFsdWUiLCJzcGVjdWxhckludGVuc2l0eSIsInNwbGl0IiwiYSIsIm1hdGVyaWFsIiwiZGF0YSIsImNvdW50IiwieSIsInIiLCJSIiwiaSIsIngwIiwiTWF0aCIsInowIiwieDEiLCJ6MSIsInUwIiwidTEiLCJEZW1vIiwicmVmIiwic3J2IiwiX3VzZUZsb2F0Iiwic2V0U3BlY3VsYXJFeHBvbmVudCIsIl91c2VGbG9hdDEiLCJzZXRTcGVjdWxhckludGVuc2l0eSIsIl91c2VGbG9hdDIiLCJzZXRTcGxpdCIsIm9uUmVhZHkiLCJzY2VuZSIsIm9uQ2xpY2siLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwiaW5pdGlhbFZhbHVlIiwib25DaGFuZ2UiLCJzZXRWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0J1QjtBQUM2QjtBQUNIO0FBQ3hCO0FBQ3FCO0FBQ29DO0FBRWxGLFNBQVNzQixLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQzdDLDRCQUE0QjtJQUM1QixJQUFNQyxRQUF1QixxQkFBR25CLGtEQUFjQSxXQUFsQjtRQUFzQjtLQUFFO0lBQ3BELElBQU1vQixZQUFZLElBQUl6QixrREFBa0JBLENBQUM7UUFDckN3QixPQUFBQTtRQUNBLFNBQVMsSUFBSXpCLHdDQUFRQSxDQUFDO1lBQ2xCLE9BQU87Z0JBQUM7Z0JBQUs7Z0JBQUs7Z0JBQUs7YUFBRTtRQUM3QjtJQUNKO0lBQ0EsSUFBTTJCLFFBQVEsSUFBSXhCLGtEQUFrQkEsQ0FBQ29CLFNBQVM7UUFDMUMsT0FBT0MsT0FBTyxHQUFHLENBQUMsTUFBTTtRQUN4QixVQUFVRTtJQUNkO0lBQ0EsSUFBTUUsUUFBUUMsU0FBU04sU0FBU0c7SUFDaEMsSUFBTUksUUFBUSxJQUFJcEIsOENBQWNBLENBQUM7UUFDN0IsVUFBVTtZQUFDaUI7WUFBT0M7U0FBTTtJQUM1QjtJQUNBLElBQU1HLFlBQVksSUFBSTlCLGtEQUFrQkEsQ0FBQztRQUNyQ3dCLE9BQUFBO1FBQ0Esb0JBQW9CO1FBQ3BCLFNBQVMsSUFBSXpCLHdDQUFRQSxDQUFDO1lBQ2xCLE9BQU87Z0JBQUM7Z0JBQUs7Z0JBQUs7Z0JBQUs7YUFBRTtRQUM3QjtJQUNKO0lBQ0EsNkNBQTZDO0lBQzdDLElBQU1nQyxRQUFRLElBQUk3QixrREFBa0JBLENBQUNvQixTQUFT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