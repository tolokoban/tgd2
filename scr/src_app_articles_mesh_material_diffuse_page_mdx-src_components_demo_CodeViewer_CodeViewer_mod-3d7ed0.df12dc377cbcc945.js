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
                    lineNumber: 185,
                    columnNumber: 5
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
                            lineNumber: 197,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_6.ViewInputNumber, {
                            label: "specularIntensity",
                            value: specularIntensity,
                            onChange: setSpecularIntensity
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 202,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                    lineNumber: 192,
                    columnNumber: 5
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
                            lineNumber: 213,
                            columnNumber: 6
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
                            lineNumber: 223,
                            columnNumber: 6
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
                            lineNumber: 233,
                            columnNumber: 6
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
                            lineNumber: 243,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                    lineNumber: 208,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
            lineNumber: 171,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
        lineNumber: 170,
        columnNumber: 3
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
    "Initializing WebGL": "\tconst color: ArrayNumber4 = [...tgdCalcRandom3(), 1];\n\tconst material1 = new TgdMaterialDiffuse({\n\t\tcolor,\n\t\tambient: new TgdLight({\n\t\t\tcolor: [0.8, 0.8, 0.8, 0],\n\t\t}),\n\t});\n\tconst mesh1 = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzane,\n\t\tmaterial: material1,\n\t});\n\tconst ring1 = makeRing(context, material1);\n\tconst node1 = new TgdPainterNode({\n\t\tchildren: [mesh1, ring1],\n\t});\n\tconst material2 = new TgdMaterialDiffuse({\n\t\tcolor,\n\t\tlockLightsToCamera: true,\n\t\tambient: new TgdLight({\n\t\t\tcolor: [0.8, 0.8, 0.8, 0],\n\t\t}),\n\t});\n\t// const material2 = new TgdMaterialNormals()\n\tconst mesh2 = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzane,\n\t\tmaterial: material2,\n\t});\n\tconst ring2 = makeRing(context, material2);\n\tconst node2 = new TgdPainterNode({\n\t\tchildren: [mesh2, ring2],\n\t});"
};
var FULL = "import {\n\ttype ArrayNumber4,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdLight,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterMeshGltf,\n\tTgdPainterState,\n\tTgdPainterScissor,\n\ttgdCalcRandom3,\n\twebglPresetDepth,\n\ttgdCalcClamp,\n\tTgdPainterLogic,\n\tTgdPainterNode,\n\ttype TgdMaterial,\n\tTgdPainterSegmentsData,\n\tTgdPainterSegments,\n\twebglPresetCull,\n\tTgdMaterialFaceOrientation,\n\tTgdMaterialNormals,\n\tTgdPainterSegmentsMorphing,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\";\nimport React from \"react\";\nimport { useFloat } from \"@/utils/hooks/float\";\nimport {\n\tViewButton,\n\tViewInputNumber,\n\tViewPanel,\n\tViewSlider,\n} from \"@tolokoban/ui\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst color: ArrayNumber4 = [...tgdCalcRandom3(), 1];\n\tconst material1 = new TgdMaterialDiffuse({\n\t\tcolor,\n\t\tambient: new TgdLight({\n\t\t\tcolor: [0.8, 0.8, 0.8, 0],\n\t\t}),\n\t});\n\tconst mesh1 = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzane,\n\t\tmaterial: material1,\n\t});\n\tconst ring1 = makeRing(context, material1);\n\tconst node1 = new TgdPainterNode({\n\t\tchildren: [mesh1, ring1],\n\t});\n\tconst material2 = new TgdMaterialDiffuse({\n\t\tcolor,\n\t\tlockLightsToCamera: true,\n\t\tambient: new TgdLight({\n\t\t\tcolor: [0.8, 0.8, 0.8, 0],\n\t\t}),\n\t});\n\t// const material2 = new TgdMaterialNormals()\n\tconst mesh2 = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzane,\n\t\tmaterial: material2,\n\t});\n\tconst ring2 = makeRing(context, material2);\n\tconst node2 = new TgdPainterNode({\n\t\tchildren: [mesh2, ring2],\n\t});\n\tconst scissor1 = new TgdPainterScissor(context, {\n\t\tchildren: [node1],\n\t\tx: 0,\n\t\ty: 0,\n\t\twidth: 0.5,\n\t\theight: 1,\n\t});\n\tconst scissor2 = new TgdPainterScissor(context, {\n\t\tchildren: [node2],\n\t\tx: 0.5,\n\t\ty: 0,\n\t\twidth: 0.5,\n\t\theight: 1,\n\t});\n\tcontext.add(\n\t\tnew TgdPainterClear(context, {\n\t\t\tcolor: [0.3, 0.3, 0.3, 1],\n\t\t\tdepth: 1,\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tcull: webglPresetCull.back,\n\t\t\tchildren: [scissor1, scissor2],\n\t\t}),\n\t\tnew TgdPainterLogic((time, delta) => {\n\t\t\tconst speed = 0.1;\n\t\t\tconst angX = delta * 0.49541 * speed;\n\t\t\tconst angY = delta * 0.31789 * speed;\n\t\t\tconst angZ = delta * 0.57892 * speed;\n\t\t\tnode1.transfo.orbitAroundX(angX);\n\t\t\tnode1.transfo.orbitAroundY(angY);\n\t\t\tnode1.transfo.orbitAroundZ(angZ);\n\t\t\tnode2.transfo.orbitAroundX(angX);\n\t\t\tnode2.transfo.orbitAroundY(angY);\n\t\t\tnode2.transfo.orbitAroundZ(angZ);\n\t\t}),\n\t);\n\tring2.debug();\n\tcontext.play();\n\treturn {\n\t\tspecularExponent(value: number) {\n\t\t\tmaterial1.specularExponent = value;\n\t\t\tmaterial2.specularExponent = value;\n\t\t\tcontext.paint();\n\t\t},\n\t\tspecularIntensity(value: number) {\n\t\t\tmaterial1.specularIntensity = value;\n\t\t\tmaterial2.specularIntensity = value;\n\t\t\tcontext.paint();\n\t\t},\n\t\tsplit(value: number) {\n\t\t\tconst a = tgdCalcClamp(value, 0, 1);\n\t\t\tscissor1.x = 0;\n\t\t\tscissor1.width = a;\n\t\t\tscissor2.x = a;\n\t\t\tscissor2.width = 1 - a;\n\t\t\tcontext.paint();\n\t\t},\n\t};\n}\n\nfunction makeRing(context: TgdContext, material: TgdMaterial) {\n\tconst data = new TgdPainterSegmentsData();\n\tconst count = 16;\n\tconst y = -0.5;\n\tconst r = 0.2;\n\tconst R = 1;\n\tfor (let i = 0; i < count; i++) {\n\t\tconst x0 = R * Math.cos((i * Math.PI * 2) / count);\n\t\tconst z0 = R * Math.sin((i * Math.PI * 2) / count);\n\t\tconst x1 = R * Math.cos(((i + 1) * Math.PI * 2) / count);\n\t\tconst z1 = R * Math.sin(((i + 1) * Math.PI * 2) / count);\n\t\tconst u0 = i / count;\n\t\tconst u1 = (i + 1) / count;\n\t\tdata.add([x0, y, z0, r], [x1, y, z1, r], [u0, u0], [u1, u1]);\n\t}\n\t// return new TgdPainterSegments(context, {\n\t//     roundness: 5,\n\t//     material,\n\t//     dataset: data.makeDataset(),\n\t// })\n\treturn new TgdPainterSegmentsMorphing(context, {\n\t\troundness: 5,\n\t\tmaterial,\n\t\tdatasetsPairs: [[data.makeDataset(), data.makeDataset()]],\n\t});\n}\n\nexport default function Demo() {\n\tconst ref = React.useRef<ReturnType<typeof init> | null>(null);\n\tconst srv = ref.current;\n\tconst [specularExponent, setSpecularExponent] = useFloat(\n\t\t20,\n\t\tsrv?.specularExponent,\n\t);\n\tconst [specularIntensity, setSpecularIntensity] = useFloat(\n\t\t1,\n\t\tsrv?.specularIntensity,\n\t);\n\tconst [split, setSplit] = useFloat(0.1, srv?.split);\n\treturn (\n\t\t<div>\n\t\t\t<View\n\t\t\t\tonReady={(scene: TgdContext, assets: Assets) => {\n\t\t\t\t\tref.current = init(scene, assets);\n\t\t\t\t}}\n\t\t\t\tassets={{\n\t\t\t\t\tglb: {\n\t\t\t\t\t\tsuzane: SuzaneURL,\n\t\t\t\t\t},\n\t\t\t\t}}\n\t\t\t\tgizmo\n\t\t\t\tcontroller={{\n\t\t\t\t\tinertiaOrbit: 1000,\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\t<ViewSlider\n\t\t\t\t\tvalue={split}\n\t\t\t\t\tonChange={setSplit}\n\t\t\t\t\tmin={0}\n\t\t\t\t\tmax={1}\n\t\t\t\t\tstep={1e-2}\n\t\t\t\t/>\n\t\t\t\t<ViewPanel\n\t\t\t\t\tdisplay=\"flex\"\n\t\t\t\t\tjustifyContent=\"space-around\"\n\t\t\t\t\talignItems=\"center\"\n\t\t\t\t>\n\t\t\t\t\t<ViewInputNumber\n\t\t\t\t\t\tlabel=\"specularExponent\"\n\t\t\t\t\t\tvalue={specularExponent}\n\t\t\t\t\t\tonChange={setSpecularExponent}\n\t\t\t\t\t/>\n\t\t\t\t\t<ViewInputNumber\n\t\t\t\t\t\tlabel=\"specularIntensity\"\n\t\t\t\t\t\tvalue={specularIntensity}\n\t\t\t\t\t\tonChange={setSpecularIntensity}\n\t\t\t\t\t/>\n\t\t\t\t</ViewPanel>\n\t\t\t\t<ViewPanel\n\t\t\t\t\tdisplay=\"flex\"\n\t\t\t\t\tjustifyContent=\"space-around\"\n\t\t\t\t\talignItems=\"center\"\n\t\t\t\t>\n\t\t\t\t\t<ViewButton\n\t\t\t\t\t\tvariant=\"text\"\n\t\t\t\t\t\tcolor=\"primary-5\"\n\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\tsetSpecularExponent(1);\n\t\t\t\t\t\t\tsetSpecularIntensity(0.5);\n\t\t\t\t\t\t}}\n\t\t\t\t\t>\n\t\t\t\t\t\tBrushed Metal\n\t\t\t\t\t</ViewButton>\n\t\t\t\t\t<ViewButton\n\t\t\t\t\t\tvariant=\"text\"\n\t\t\t\t\t\tcolor=\"primary-5\"\n\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\tsetSpecularExponent(0.25);\n\t\t\t\t\t\t\tsetSpecularIntensity(0.125);\n\t\t\t\t\t\t}}\n\t\t\t\t\t>\n\t\t\t\t\t\tSoft Light\n\t\t\t\t\t</ViewButton>\n\t\t\t\t\t<ViewButton\n\t\t\t\t\t\tvariant=\"text\"\n\t\t\t\t\t\tcolor=\"primary-5\"\n\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\tsetSpecularExponent(50);\n\t\t\t\t\t\t\tsetSpecularIntensity(2);\n\t\t\t\t\t\t}}\n\t\t\t\t\t>\n\t\t\t\t\t\tCar Paint\n\t\t\t\t\t</ViewButton>\n\t\t\t\t\t<ViewButton\n\t\t\t\t\t\tvariant=\"text\"\n\t\t\t\t\t\tcolor=\"primary-5\"\n\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\tsetSpecularIntensity(0);\n\t\t\t\t\t\t}}\n\t\t\t\t\t>\n\t\t\t\t\t\tPlastic\n\t\t\t\t\t</ViewButton>\n\t\t\t\t</ViewPanel>\n\t\t\t</View>\n\t\t</div>\n\t);\n}\n";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9kaWZmdXNlX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZC0zZDdlZDAuZGYxMmRjMzc3Y2JjYzk0NS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9kaWZmdXNlL19tYXRlcmlhbC9fbWF0ZXJpYWwuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2RpZmZ1c2UvX21hdGVyaWFsL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvdXRpbHMvaG9va3MvZmxvYXQudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2RpZmZ1c2UvcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdHR5cGUgQXJyYXlOdW1iZXI0LFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcblx0VGdkTGlnaHQsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTWVzaEdsdGYsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkUGFpbnRlclNjaXNzb3IsXG5cdHRnZENhbGNSYW5kb20zLFxuXHR3ZWJnbFByZXNldERlcHRoLFxuXHR0Z2RDYWxjQ2xhbXAsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlck5vZGUsXG5cdHR5cGUgVGdkTWF0ZXJpYWwsXG5cdFRnZFBhaW50ZXJTZWdtZW50c0RhdGEsXG5cdFRnZFBhaW50ZXJTZWdtZW50cyxcblx0d2ViZ2xQcmVzZXRDdWxsLFxuXHRUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcblx0VGdkTWF0ZXJpYWxOb3JtYWxzLFxuXHRUZ2RQYWludGVyU2VnbWVudHNNb3JwaGluZyxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcIkAvdXRpbHMvaG9va3MvZmxvYXRcIjtcbmltcG9ydCB7XG5cdFZpZXdCdXR0b24sXG5cdFZpZXdJbnB1dE51bWJlcixcblx0Vmlld1BhbmVsLFxuXHRWaWV3U2xpZGVyLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcblx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXTtcblx0Y29uc3QgbWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG5cdFx0Y29sb3IsXG5cdFx0YW1iaWVudDogbmV3IFRnZExpZ2h0KHtcblx0XHRcdGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXG5cdFx0fSksXG5cdH0pO1xuXHRjb25zdCBtZXNoMSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcblx0XHRtYXRlcmlhbDogbWF0ZXJpYWwxLFxuXHR9KTtcblx0Y29uc3QgcmluZzEgPSBtYWtlUmluZyhjb250ZXh0LCBtYXRlcmlhbDEpO1xuXHRjb25zdCBub2RlMSA9IG5ldyBUZ2RQYWludGVyTm9kZSh7XG5cdFx0Y2hpbGRyZW46IFttZXNoMSwgcmluZzFdLFxuXHR9KTtcblx0Y29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG5cdFx0Y29sb3IsXG5cdFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxuXHRcdGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XG5cdFx0XHRjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxuXHRcdH0pLFxuXHR9KTtcblx0Ly8gY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsTm9ybWFscygpXG5cdGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG5cdFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxuXHRcdG1hdGVyaWFsOiBtYXRlcmlhbDIsXG5cdH0pO1xuXHRjb25zdCByaW5nMiA9IG1ha2VSaW5nKGNvbnRleHQsIG1hdGVyaWFsMik7XG5cdGNvbnN0IG5vZGUyID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcblx0XHRjaGlsZHJlbjogW21lc2gyLCByaW5nMl0sXG5cdH0pO1xuXHQvLyAjZW5kXG5cdGNvbnN0IHNjaXNzb3IxID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcblx0XHRjaGlsZHJlbjogW25vZGUxXSxcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdFx0d2lkdGg6IDAuNSxcblx0XHRoZWlnaHQ6IDEsXG5cdH0pO1xuXHRjb25zdCBzY2lzc29yMiA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XG5cdFx0Y2hpbGRyZW46IFtub2RlMl0sXG5cdFx0eDogMC41LFxuXHRcdHk6IDAsXG5cdFx0d2lkdGg6IDAuNSxcblx0XHRoZWlnaHQ6IDEsXG5cdH0pO1xuXHRjb250ZXh0LmFkZChcblx0XHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRcdGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXG5cdFx0XHRkZXB0aDogMSxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0XHRjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcblx0XHRcdGNoaWxkcmVuOiBbc2Npc3NvcjEsIHNjaXNzb3IyXSxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWx0YSkgPT4ge1xuXHRcdFx0Y29uc3Qgc3BlZWQgPSAwLjE7XG5cdFx0XHRjb25zdCBhbmdYID0gZGVsdGEgKiAwLjQ5NTQxICogc3BlZWQ7XG5cdFx0XHRjb25zdCBhbmdZID0gZGVsdGEgKiAwLjMxNzg5ICogc3BlZWQ7XG5cdFx0XHRjb25zdCBhbmdaID0gZGVsdGEgKiAwLjU3ODkyICogc3BlZWQ7XG5cdFx0XHRub2RlMS50cmFuc2ZvLm9yYml0QXJvdW5kWChhbmdYKTtcblx0XHRcdG5vZGUxLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpO1xuXHRcdFx0bm9kZTEudHJhbnNmby5vcmJpdEFyb3VuZFooYW5nWik7XG5cdFx0XHRub2RlMi50cmFuc2ZvLm9yYml0QXJvdW5kWChhbmdYKTtcblx0XHRcdG5vZGUyLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpO1xuXHRcdFx0bm9kZTIudHJhbnNmby5vcmJpdEFyb3VuZFooYW5nWik7XG5cdFx0fSksXG5cdCk7XG5cdHJpbmcyLmRlYnVnKCk7XG5cdGNvbnRleHQucGxheSgpO1xuXHRyZXR1cm4ge1xuXHRcdHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xuXHRcdFx0bWF0ZXJpYWwxLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZTtcblx0XHRcdG1hdGVyaWFsMi5zcGVjdWxhckV4cG9uZW50ID0gdmFsdWU7XG5cdFx0XHRjb250ZXh0LnBhaW50KCk7XG5cdFx0fSxcblx0XHRzcGVjdWxhckludGVuc2l0eSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0XHRtYXRlcmlhbDEuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZTtcblx0XHRcdG1hdGVyaWFsMi5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlO1xuXHRcdFx0Y29udGV4dC5wYWludCgpO1xuXHRcdH0sXG5cdFx0c3BsaXQodmFsdWU6IG51bWJlcikge1xuXHRcdFx0Y29uc3QgYSA9IHRnZENhbGNDbGFtcCh2YWx1ZSwgMCwgMSk7XG5cdFx0XHRzY2lzc29yMS54ID0gMDtcblx0XHRcdHNjaXNzb3IxLndpZHRoID0gYTtcblx0XHRcdHNjaXNzb3IyLnggPSBhO1xuXHRcdFx0c2Npc3NvcjIud2lkdGggPSAxIC0gYTtcblx0XHRcdGNvbnRleHQucGFpbnQoKTtcblx0XHR9LFxuXHR9O1xufVxuXG5mdW5jdGlvbiBtYWtlUmluZyhjb250ZXh0OiBUZ2RDb250ZXh0LCBtYXRlcmlhbDogVGdkTWF0ZXJpYWwpIHtcblx0Y29uc3QgZGF0YSA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKCk7XG5cdGNvbnN0IGNvdW50ID0gMTY7XG5cdGNvbnN0IHkgPSAtMC41O1xuXHRjb25zdCByID0gMC4yO1xuXHRjb25zdCBSID0gMTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0Y29uc3QgeDAgPSBSICogTWF0aC5jb3MoKGkgKiBNYXRoLlBJICogMikgLyBjb3VudCk7XG5cdFx0Y29uc3QgejAgPSBSICogTWF0aC5zaW4oKGkgKiBNYXRoLlBJICogMikgLyBjb3VudCk7XG5cdFx0Y29uc3QgeDEgPSBSICogTWF0aC5jb3MoKChpICsgMSkgKiBNYXRoLlBJICogMikgLyBjb3VudCk7XG5cdFx0Y29uc3QgejEgPSBSICogTWF0aC5zaW4oKChpICsgMSkgKiBNYXRoLlBJICogMikgLyBjb3VudCk7XG5cdFx0Y29uc3QgdTAgPSBpIC8gY291bnQ7XG5cdFx0Y29uc3QgdTEgPSAoaSArIDEpIC8gY291bnQ7XG5cdFx0ZGF0YS5hZGQoW3gwLCB5LCB6MCwgcl0sIFt4MSwgeSwgejEsIHJdLCBbdTAsIHUwXSwgW3UxLCB1MV0pO1xuXHR9XG5cdC8vIHJldHVybiBuZXcgVGdkUGFpbnRlclNlZ21lbnRzKGNvbnRleHQsIHtcblx0Ly8gICAgIHJvdW5kbmVzczogNSxcblx0Ly8gICAgIG1hdGVyaWFsLFxuXHQvLyAgICAgZGF0YXNldDogZGF0YS5tYWtlRGF0YXNldCgpLFxuXHQvLyB9KVxuXHRyZXR1cm4gbmV3IFRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nKGNvbnRleHQsIHtcblx0XHRyb3VuZG5lc3M6IDUsXG5cdFx0bWF0ZXJpYWwsXG5cdFx0ZGF0YXNldHNQYWlyczogW1tkYXRhLm1ha2VEYXRhc2V0KCksIGRhdGEubWFrZURhdGFzZXQoKV1dLFxuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0Y29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbCk7XG5cdGNvbnN0IHNydiA9IHJlZi5jdXJyZW50O1xuXHRjb25zdCBbc3BlY3VsYXJFeHBvbmVudCwgc2V0U3BlY3VsYXJFeHBvbmVudF0gPSB1c2VGbG9hdChcblx0XHQyMCxcblx0XHRzcnY/LnNwZWN1bGFyRXhwb25lbnQsXG5cdCk7XG5cdGNvbnN0IFtzcGVjdWxhckludGVuc2l0eSwgc2V0U3BlY3VsYXJJbnRlbnNpdHldID0gdXNlRmxvYXQoXG5cdFx0MSxcblx0XHRzcnY/LnNwZWN1bGFySW50ZW5zaXR5LFxuXHQpO1xuXHRjb25zdCBbc3BsaXQsIHNldFNwbGl0XSA9IHVzZUZsb2F0KDAuMSwgc3J2Py5zcGxpdCk7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxWaWV3XG5cdFx0XHRcdG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcblx0XHRcdFx0XHRyZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cyk7XG5cdFx0XHRcdH19XG5cdFx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRcdGdsYjoge1xuXHRcdFx0XHRcdFx0c3V6YW5lOiBTdXphbmVVUkwsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fX1cblx0XHRcdFx0Z2l6bW9cblx0XHRcdFx0Y29udHJvbGxlcj17e1xuXHRcdFx0XHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0PFZpZXdTbGlkZXJcblx0XHRcdFx0XHR2YWx1ZT17c3BsaXR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3NldFNwbGl0fVxuXHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRtYXg9ezF9XG5cdFx0XHRcdFx0c3RlcD17MWUtMn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFZpZXdQYW5lbFxuXHRcdFx0XHRcdGRpc3BsYXk9XCJmbGV4XCJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiXG5cdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Vmlld0lucHV0TnVtYmVyXG5cdFx0XHRcdFx0XHRsYWJlbD1cInNwZWN1bGFyRXhwb25lbnRcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e3NwZWN1bGFyRXhwb25lbnR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17c2V0U3BlY3VsYXJFeHBvbmVudH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxWaWV3SW5wdXROdW1iZXJcblx0XHRcdFx0XHRcdGxhYmVsPVwic3BlY3VsYXJJbnRlbnNpdHlcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e3NwZWN1bGFySW50ZW5zaXR5fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3NldFNwZWN1bGFySW50ZW5zaXR5fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvVmlld1BhbmVsPlxuXHRcdFx0XHQ8Vmlld1BhbmVsXG5cdFx0XHRcdFx0ZGlzcGxheT1cImZsZXhcIlxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjb2xvcj1cInByaW1hcnktNVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldFNwZWN1bGFyRXhwb25lbnQoMSk7XG5cdFx0XHRcdFx0XHRcdHNldFNwZWN1bGFySW50ZW5zaXR5KDAuNSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdEJydXNoZWQgTWV0YWxcblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b25cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNvbG9yPVwicHJpbWFyeS01XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0U3BlY3VsYXJFeHBvbmVudCgwLjI1KTtcblx0XHRcdFx0XHRcdFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMC4xMjUpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRTb2Z0IExpZ2h0XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjb2xvcj1cInByaW1hcnktNVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldFNwZWN1bGFyRXhwb25lbnQoNTApO1xuXHRcdFx0XHRcdFx0XHRzZXRTcGVjdWxhckludGVuc2l0eSgyKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0Q2FyIFBhaW50XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjb2xvcj1cInByaW1hcnktNVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldFNwZWN1bGFySW50ZW5zaXR5KDApO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRQbGFzdGljXG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L1ZpZXdQYW5lbD5cblx0XHRcdDwvVmlldz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9fbWF0ZXJpYWwuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XCJcXHRjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWy4uLnRnZENhbGNSYW5kb20zKCksIDFdO1xcblxcdGNvbnN0IG1hdGVyaWFsMSA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcblxcdFxcdGNvbG9yLFxcblxcdFxcdGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuXFx0XFx0XFx0Y29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG5cXHRcXHR9KSxcXG5cXHR9KTtcXG5cXHRjb25zdCBtZXNoMSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG5cXHRcXHRtYXRlcmlhbDogbWF0ZXJpYWwxLFxcblxcdH0pO1xcblxcdGNvbnN0IHJpbmcxID0gbWFrZVJpbmcoY29udGV4dCwgbWF0ZXJpYWwxKTtcXG5cXHRjb25zdCBub2RlMSA9IG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuXFx0XFx0Y2hpbGRyZW46IFttZXNoMSwgcmluZzFdLFxcblxcdH0pO1xcblxcdGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcblxcdFxcdGNvbG9yLFxcblxcdFxcdGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG5cXHRcXHRhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcblxcdFxcdFxcdGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuXFx0XFx0fSksXFxuXFx0fSk7XFxuXFx0Ly8gY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsTm9ybWFscygpXFxuXFx0Y29uc3QgbWVzaDIgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG5cXHRcXHRhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuXFx0XFx0bWF0ZXJpYWw6IG1hdGVyaWFsMixcXG5cXHR9KTtcXG5cXHRjb25zdCByaW5nMiA9IG1ha2VSaW5nKGNvbnRleHQsIG1hdGVyaWFsMik7XFxuXFx0Y29uc3Qgbm9kZTIgPSBuZXcgVGdkUGFpbnRlck5vZGUoe1xcblxcdFxcdGNoaWxkcmVuOiBbbWVzaDIsIHJpbmcyXSxcXG5cXHR9KTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dHlwZSBBcnJheU51bWJlcjQsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHRUZ2RMaWdodCxcXG5cXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJNZXNoR2x0ZixcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0VGdkUGFpbnRlclNjaXNzb3IsXFxuXFx0dGdkQ2FsY1JhbmRvbTMsXFxuXFx0d2ViZ2xQcmVzZXREZXB0aCxcXG5cXHR0Z2RDYWxjQ2xhbXAsXFxuXFx0VGdkUGFpbnRlckxvZ2ljLFxcblxcdFRnZFBhaW50ZXJOb2RlLFxcblxcdHR5cGUgVGdkTWF0ZXJpYWwsXFxuXFx0VGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcXG5cXHRUZ2RQYWludGVyU2VnbWVudHMsXFxuXFx0d2ViZ2xQcmVzZXRDdWxsLFxcblxcdFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxcblxcdFRnZE1hdGVyaWFsTm9ybWFscyxcXG5cXHRUZ2RQYWludGVyU2VnbWVudHNNb3JwaGluZyxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIjtcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiO1xcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcXFwiQC91dGlscy9ob29rcy9mbG9hdFxcXCI7XFxuaW1wb3J0IHtcXG5cXHRWaWV3QnV0dG9uLFxcblxcdFZpZXdJbnB1dE51bWJlcixcXG5cXHRWaWV3UGFuZWwsXFxuXFx0Vmlld1NsaWRlcixcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWy4uLnRnZENhbGNSYW5kb20zKCksIDFdO1xcblxcdGNvbnN0IG1hdGVyaWFsMSA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcblxcdFxcdGNvbG9yLFxcblxcdFxcdGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuXFx0XFx0XFx0Y29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG5cXHRcXHR9KSxcXG5cXHR9KTtcXG5cXHRjb25zdCBtZXNoMSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG5cXHRcXHRtYXRlcmlhbDogbWF0ZXJpYWwxLFxcblxcdH0pO1xcblxcdGNvbnN0IHJpbmcxID0gbWFrZVJpbmcoY29udGV4dCwgbWF0ZXJpYWwxKTtcXG5cXHRjb25zdCBub2RlMSA9IG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuXFx0XFx0Y2hpbGRyZW46IFttZXNoMSwgcmluZzFdLFxcblxcdH0pO1xcblxcdGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcblxcdFxcdGNvbG9yLFxcblxcdFxcdGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG5cXHRcXHRhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcblxcdFxcdFxcdGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuXFx0XFx0fSksXFxuXFx0fSk7XFxuXFx0Ly8gY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsTm9ybWFscygpXFxuXFx0Y29uc3QgbWVzaDIgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG5cXHRcXHRhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuXFx0XFx0bWF0ZXJpYWw6IG1hdGVyaWFsMixcXG5cXHR9KTtcXG5cXHRjb25zdCByaW5nMiA9IG1ha2VSaW5nKGNvbnRleHQsIG1hdGVyaWFsMik7XFxuXFx0Y29uc3Qgbm9kZTIgPSBuZXcgVGdkUGFpbnRlck5vZGUoe1xcblxcdFxcdGNoaWxkcmVuOiBbbWVzaDIsIHJpbmcyXSxcXG5cXHR9KTtcXG5cXHRjb25zdCBzY2lzc29yMSA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XFxuXFx0XFx0Y2hpbGRyZW46IFtub2RlMV0sXFxuXFx0XFx0eDogMCxcXG5cXHRcXHR5OiAwLFxcblxcdFxcdHdpZHRoOiAwLjUsXFxuXFx0XFx0aGVpZ2h0OiAxLFxcblxcdH0pO1xcblxcdGNvbnN0IHNjaXNzb3IyID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcXG5cXHRcXHRjaGlsZHJlbjogW25vZGUyXSxcXG5cXHRcXHR4OiAwLjUsXFxuXFx0XFx0eTogMCxcXG5cXHRcXHR3aWR0aDogMC41LFxcblxcdFxcdGhlaWdodDogMSxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcblxcdFxcdFxcdGRlcHRoOiAxLFxcblxcdFxcdH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0XFx0Y3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtzY2lzc29yMSwgc2Npc3NvcjJdLFxcblxcdFxcdH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XFxuXFx0XFx0XFx0Y29uc3Qgc3BlZWQgPSAwLjE7XFxuXFx0XFx0XFx0Y29uc3QgYW5nWCA9IGRlbHRhICogMC40OTU0MSAqIHNwZWVkO1xcblxcdFxcdFxcdGNvbnN0IGFuZ1kgPSBkZWx0YSAqIDAuMzE3ODkgKiBzcGVlZDtcXG5cXHRcXHRcXHRjb25zdCBhbmdaID0gZGVsdGEgKiAwLjU3ODkyICogc3BlZWQ7XFxuXFx0XFx0XFx0bm9kZTEudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWCk7XFxuXFx0XFx0XFx0bm9kZTEudHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nWSk7XFxuXFx0XFx0XFx0bm9kZTEudHJhbnNmby5vcmJpdEFyb3VuZFooYW5nWik7XFxuXFx0XFx0XFx0bm9kZTIudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWCk7XFxuXFx0XFx0XFx0bm9kZTIudHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nWSk7XFxuXFx0XFx0XFx0bm9kZTIudHJhbnNmby5vcmJpdEFyb3VuZFooYW5nWik7XFxuXFx0XFx0fSksXFxuXFx0KTtcXG5cXHRyaW5nMi5kZWJ1ZygpO1xcblxcdGNvbnRleHQucGxheSgpO1xcblxcdHJldHVybiB7XFxuXFx0XFx0c3BlY3VsYXJFeHBvbmVudCh2YWx1ZTogbnVtYmVyKSB7XFxuXFx0XFx0XFx0bWF0ZXJpYWwxLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZTtcXG5cXHRcXHRcXHRtYXRlcmlhbDIuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlO1xcblxcdFxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHRcXHR9LFxcblxcdFxcdHNwZWN1bGFySW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcXG5cXHRcXHRcXHRtYXRlcmlhbDEuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZTtcXG5cXHRcXHRcXHRtYXRlcmlhbDIuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZTtcXG5cXHRcXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0XFx0fSxcXG5cXHRcXHRzcGxpdCh2YWx1ZTogbnVtYmVyKSB7XFxuXFx0XFx0XFx0Y29uc3QgYSA9IHRnZENhbGNDbGFtcCh2YWx1ZSwgMCwgMSk7XFxuXFx0XFx0XFx0c2Npc3NvcjEueCA9IDA7XFxuXFx0XFx0XFx0c2Npc3NvcjEud2lkdGggPSBhO1xcblxcdFxcdFxcdHNjaXNzb3IyLnggPSBhO1xcblxcdFxcdFxcdHNjaXNzb3IyLndpZHRoID0gMSAtIGE7XFxuXFx0XFx0XFx0Y29udGV4dC5wYWludCgpO1xcblxcdFxcdH0sXFxuXFx0fTtcXG59XFxuXFxuZnVuY3Rpb24gbWFrZVJpbmcoY29udGV4dDogVGdkQ29udGV4dCwgbWF0ZXJpYWw6IFRnZE1hdGVyaWFsKSB7XFxuXFx0Y29uc3QgZGF0YSA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKCk7XFxuXFx0Y29uc3QgY291bnQgPSAxNjtcXG5cXHRjb25zdCB5ID0gLTAuNTtcXG5cXHRjb25zdCByID0gMC4yO1xcblxcdGNvbnN0IFIgPSAxO1xcblxcdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcblxcdFxcdGNvbnN0IHgwID0gUiAqIE1hdGguY29zKChpICogTWF0aC5QSSAqIDIpIC8gY291bnQpO1xcblxcdFxcdGNvbnN0IHowID0gUiAqIE1hdGguc2luKChpICogTWF0aC5QSSAqIDIpIC8gY291bnQpO1xcblxcdFxcdGNvbnN0IHgxID0gUiAqIE1hdGguY29zKCgoaSArIDEpICogTWF0aC5QSSAqIDIpIC8gY291bnQpO1xcblxcdFxcdGNvbnN0IHoxID0gUiAqIE1hdGguc2luKCgoaSArIDEpICogTWF0aC5QSSAqIDIpIC8gY291bnQpO1xcblxcdFxcdGNvbnN0IHUwID0gaSAvIGNvdW50O1xcblxcdFxcdGNvbnN0IHUxID0gKGkgKyAxKSAvIGNvdW50O1xcblxcdFxcdGRhdGEuYWRkKFt4MCwgeSwgejAsIHJdLCBbeDEsIHksIHoxLCByXSwgW3UwLCB1MF0sIFt1MSwgdTFdKTtcXG5cXHR9XFxuXFx0Ly8gcmV0dXJuIG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xcblxcdC8vICAgICByb3VuZG5lc3M6IDUsXFxuXFx0Ly8gICAgIG1hdGVyaWFsLFxcblxcdC8vICAgICBkYXRhc2V0OiBkYXRhLm1ha2VEYXRhc2V0KCksXFxuXFx0Ly8gfSlcXG5cXHRyZXR1cm4gbmV3IFRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nKGNvbnRleHQsIHtcXG5cXHRcXHRyb3VuZG5lc3M6IDUsXFxuXFx0XFx0bWF0ZXJpYWwsXFxuXFx0XFx0ZGF0YXNldHNQYWlyczogW1tkYXRhLm1ha2VEYXRhc2V0KCksIGRhdGEubWFrZURhdGFzZXQoKV1dLFxcblxcdH0pO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpO1xcblxcdGNvbnN0IHNydiA9IHJlZi5jdXJyZW50O1xcblxcdGNvbnN0IFtzcGVjdWxhckV4cG9uZW50LCBzZXRTcGVjdWxhckV4cG9uZW50XSA9IHVzZUZsb2F0KFxcblxcdFxcdDIwLFxcblxcdFxcdHNydj8uc3BlY3VsYXJFeHBvbmVudCxcXG5cXHQpO1xcblxcdGNvbnN0IFtzcGVjdWxhckludGVuc2l0eSwgc2V0U3BlY3VsYXJJbnRlbnNpdHldID0gdXNlRmxvYXQoXFxuXFx0XFx0MSxcXG5cXHRcXHRzcnY/LnNwZWN1bGFySW50ZW5zaXR5LFxcblxcdCk7XFxuXFx0Y29uc3QgW3NwbGl0LCBzZXRTcGxpdF0gPSB1c2VGbG9hdCgwLjEsIHNydj8uc3BsaXQpO1xcblxcdHJldHVybiAoXFxuXFx0XFx0PGRpdj5cXG5cXHRcXHRcXHQ8Vmlld1xcblxcdFxcdFxcdFxcdG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG5cXHRcXHRcXHRcXHRcXHRyZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cyk7XFxuXFx0XFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRcXHRnbGI6IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRzdXphbmU6IFN1emFuZVVSTCxcXG5cXHRcXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0XFx0Z2l6bW9cXG5cXHRcXHRcXHRcXHRjb250cm9sbGVyPXt7XFxuXFx0XFx0XFx0XFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdDxWaWV3U2xpZGVyXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU9e3NwbGl0fVxcblxcdFxcdFxcdFxcdFxcdG9uQ2hhbmdlPXtzZXRTcGxpdH1cXG5cXHRcXHRcXHRcXHRcXHRtaW49ezB9XFxuXFx0XFx0XFx0XFx0XFx0bWF4PXsxfVxcblxcdFxcdFxcdFxcdFxcdHN0ZXA9ezFlLTJ9XFxuXFx0XFx0XFx0XFx0Lz5cXG5cXHRcXHRcXHRcXHQ8Vmlld1BhbmVsXFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheT1cXFwiZmxleFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIlxcblxcdFxcdFxcdFxcdFxcdGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCJcXG5cXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0PFZpZXdJbnB1dE51bWJlclxcblxcdFxcdFxcdFxcdFxcdFxcdGxhYmVsPVxcXCJzcGVjdWxhckV4cG9uZW50XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdHZhbHVlPXtzcGVjdWxhckV4cG9uZW50fVxcblxcdFxcdFxcdFxcdFxcdFxcdG9uQ2hhbmdlPXtzZXRTcGVjdWxhckV4cG9uZW50fVxcblxcdFxcdFxcdFxcdFxcdC8+XFxuXFx0XFx0XFx0XFx0XFx0PFZpZXdJbnB1dE51bWJlclxcblxcdFxcdFxcdFxcdFxcdFxcdGxhYmVsPVxcXCJzcGVjdWxhckludGVuc2l0eVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHR2YWx1ZT17c3BlY3VsYXJJbnRlbnNpdHl9XFxuXFx0XFx0XFx0XFx0XFx0XFx0b25DaGFuZ2U9e3NldFNwZWN1bGFySW50ZW5zaXR5fVxcblxcdFxcdFxcdFxcdFxcdC8+XFxuXFx0XFx0XFx0XFx0PC9WaWV3UGFuZWw+XFxuXFx0XFx0XFx0XFx0PFZpZXdQYW5lbFxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk9XFxcImZsZXhcXFwiXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiXFxuXFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdDxWaWV3QnV0dG9uXFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFyaWFudD1cXFwidGV4dFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdG9uQ2xpY2s9eygpID0+IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRzZXRTcGVjdWxhckV4cG9uZW50KDEpO1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHNldFNwZWN1bGFySW50ZW5zaXR5KDAuNSk7XFxuXFx0XFx0XFx0XFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0QnJ1c2hlZCBNZXRhbFxcblxcdFxcdFxcdFxcdFxcdDwvVmlld0J1dHRvbj5cXG5cXHRcXHRcXHRcXHRcXHQ8Vmlld0J1dHRvblxcblxcdFxcdFxcdFxcdFxcdFxcdHZhcmlhbnQ9XFxcInRleHRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I9XFxcInByaW1hcnktNVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRvbkNsaWNrPXsoKSA9PiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0c2V0U3BlY3VsYXJFeHBvbmVudCgwLjI1KTtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRzZXRTcGVjdWxhckludGVuc2l0eSgwLjEyNSk7XFxuXFx0XFx0XFx0XFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0U29mdCBMaWdodFxcblxcdFxcdFxcdFxcdFxcdDwvVmlld0J1dHRvbj5cXG5cXHRcXHRcXHRcXHRcXHQ8Vmlld0J1dHRvblxcblxcdFxcdFxcdFxcdFxcdFxcdHZhcmlhbnQ9XFxcInRleHRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I9XFxcInByaW1hcnktNVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRvbkNsaWNrPXsoKSA9PiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0c2V0U3BlY3VsYXJFeHBvbmVudCg1MCk7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMik7XFxuXFx0XFx0XFx0XFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0Q2FyIFBhaW50XFxuXFx0XFx0XFx0XFx0XFx0PC9WaWV3QnV0dG9uPlxcblxcdFxcdFxcdFxcdFxcdDxWaWV3QnV0dG9uXFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFyaWFudD1cXFwidGV4dFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdG9uQ2xpY2s9eygpID0+IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRzZXRTcGVjdWxhckludGVuc2l0eSgwKTtcXG5cXHRcXHRcXHRcXHRcXHRcXHR9fVxcblxcdFxcdFxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHRcXHRcXHRQbGFzdGljXFxuXFx0XFx0XFx0XFx0XFx0PC9WaWV3QnV0dG9uPlxcblxcdFxcdFxcdFxcdDwvVmlld1BhbmVsPlxcblxcdFxcdFxcdDwvVmlldz5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHQpO1xcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmxvYXQoXG5cdGluaXRpYWxWYWx1ZTogbnVtYmVyLFxuXHRvbkNoYW5nZT86ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkLFxuKTogW3ZhbHVlOiBudW1iZXIsIHNldFZhbHVlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZF0ge1xuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBvbkNoYW5nZT8uKHZhbHVlKSwgW3ZhbHVlXSk7XG5cdHJldHVybiBbdmFsdWUsIHNldFZhbHVlXTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiVGdkTGlnaHQiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RQYWludGVyU2Npc3NvciIsInRnZENhbGNSYW5kb20zIiwid2ViZ2xQcmVzZXREZXB0aCIsInRnZENhbGNDbGFtcCIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZFBhaW50ZXJOb2RlIiwiVGdkUGFpbnRlclNlZ21lbnRzRGF0YSIsIndlYmdsUHJlc2V0Q3VsbCIsIlRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nIiwiVmlldyIsIlN1emFuZVVSTCIsIlJlYWN0IiwidXNlRmxvYXQiLCJWaWV3QnV0dG9uIiwiVmlld0lucHV0TnVtYmVyIiwiVmlld1BhbmVsIiwiVmlld1NsaWRlciIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY29sb3IiLCJtYXRlcmlhbDEiLCJtZXNoMSIsInJpbmcxIiwibWFrZVJpbmciLCJub2RlMSIsIm1hdGVyaWFsMiIsIm1lc2gyIiwicmluZzIiLCJub2RlMiIsInNjaXNzb3IxIiwic2Npc3NvcjIiLCJ0aW1lIiwiZGVsdGEiLCJzcGVlZCIsImFuZ1giLCJhbmdZIiwiYW5nWiIsInNwZWN1bGFyRXhwb25lbnQiLCJ2YWx1ZSIsInNwZWN1bGFySW50ZW5zaXR5Iiwic3BsaXQiLCJhIiwibWF0ZXJpYWwiLCJkYXRhIiwiY291bnQiLCJ5IiwiciIsIlIiLCJpIiwieDAiLCJNYXRoIiwiejAiLCJ4MSIsInoxIiwidTAiLCJ1MSIsIkRlbW8iLCJyZWYiLCJzcnYiLCJfdXNlRmxvYXQiLCJzZXRTcGVjdWxhckV4cG9uZW50IiwiX3VzZUZsb2F0MSIsInNldFNwZWN1bGFySW50ZW5zaXR5IiwiX3VzZUZsb2F0MiIsInNldFNwbGl0Iiwib25SZWFkeSIsInNjZW5lIiwib25DbGljayIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJpbml0aWFsVmFsdWUiLCJvbkNoYW5nZSIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQndCO0FBQ2tDO0FBQ1I7QUFDeEI7QUFDcUI7QUFNeEI7QUFFdkIsU0FBU3NCLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDaEQsNEJBQTRCO0lBQzVCLElBQU1DLFFBQXVCLHFCQUFHbkIsa0RBQWNBLFdBQWxCO1FBQXNCO0tBQUU7SUFDcEQsSUFBTW9CLFlBQVksSUFBSXpCLGtEQUFrQkEsQ0FBQztRQUN4Q3dCLE9BQUFBO1FBQ0EsU0FBUyxJQUFJekIsd0NBQVFBLENBQUM7WUFDckIsT0FBTztnQkFBQztnQkFBSztnQkFBSztnQkFBSzthQUFFO1FBQzFCO0lBQ0Q7SUFDQSxJQUFNMkIsUUFBUSxJQUFJeEIsa0RBQWtCQSxDQUFDb0IsU0FBUztRQUM3QyxPQUFPQyxPQUFPLEdBQUcsQ0FBQyxNQUFNO1FBQ3hCLFVBQVVFO0lBQ1g7SUFDQSxJQUFNRSxRQUFRQyxTQUFTTixTQUFTRztJQUNoQyxJQUFNSSxRQUFRLElBQUlwQiw4Q0FBY0EsQ0FBQztRQUNoQyxVQUFVO1lBQUNpQjtZQUFPQztTQUFNO0lBQ3pCO0lBQ0EsSUFBTUcsWUFBWSxJQUFJOUIsa0RBQWtCQSxDQUFDO1FBQ3hDd0IsT0FBQUE7UUFDQSxvQkFBb0I7UUFDcEIsU0FBUyxJQUFJekIsd0NBQVFBLENBQUM7WUFDckIsT0FBTztnQkFBQztnQkFBSztn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