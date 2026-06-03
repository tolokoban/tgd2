"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_diffuse_page_mdx-src_components_demo_CodeViewer_CodeViewer_mod-3d7ed0"], {
57503(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid.0665e1a40d7dcc63.webp";

},
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
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _assets_image_uv_grid_webp__rspack_import_4 = __webpack_require__(57503);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_5 = __webpack_require__(21278);
/* import */ var _components_demo_Tgd__rspack_import_6 = __webpack_require__(43475);
/* import */ var _utils_hooks_float__rspack_import_7 = __webpack_require__(24429);
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
    // #begin Initializing WebGL
    var color = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.grid);
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
                1
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
    var y = -1.5;
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
    var ref = react__rspack_import_3_default().useRef(null);
    var srv = ref.current;
    var _useFloat = _sliced_to_array((0,_utils_hooks_float__rspack_import_7.useFloat)(20, srv === null || srv === void 0 ? void 0 : srv.specularExponent), 2), specularExponent = _useFloat[0], setSpecularExponent = _useFloat[1];
    var _useFloat1 = _sliced_to_array((0,_utils_hooks_float__rspack_import_7.useFloat)(1, srv === null || srv === void 0 ? void 0 : srv.specularIntensity), 2), specularIntensity = _useFloat1[0], setSpecularIntensity = _useFloat1[1];
    var _useFloat2 = _sliced_to_array((0,_utils_hooks_float__rspack_import_7.useFloat)(0.1, srv === null || srv === void 0 ? void 0 : srv.split), 2), split = _useFloat2[0], setSplit = _useFloat2[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_6["default"], {
            onReady: function onReady(scene, assets) {
                ref.current = init(scene, assets);
            },
            assets: {
                glb: {
                    suzane: _assets_mesh_suzanne_glb__rspack_import_5
                },
                image: {
                    grid: _assets_image_uv_grid_webp__rspack_import_4
                }
            },
            gizmo: true,
            controller: {
                inertiaOrbit: 1000
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSlider, {
                    value: split,
                    onChange: setSplit,
                    min: 0,
                    max: 1,
                    step: 1e-2
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                    lineNumber: 190,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "specularExponent",
                            value: specularExponent,
                            onChange: setSpecularExponent
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 202,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "specularIntensity",
                            value: specularIntensity,
                            onChange: setSpecularIntensity
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 207,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                    lineNumber: 197,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewButton, {
                            variant: "text",
                            color: "primary-5",
                            onClick: function onClick() {
                                setSpecularExponent(1);
                                setSpecularIntensity(0.5);
                            },
                            children: "Brushed Metal"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 218,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewButton, {
                            variant: "text",
                            color: "primary-5",
                            onClick: function onClick() {
                                setSpecularExponent(0.25);
                                setSpecularIntensity(0.125);
                            },
                            children: "Soft Light"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 228,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewButton, {
                            variant: "text",
                            color: "primary-5",
                            onClick: function onClick() {
                                setSpecularExponent(50);
                                setSpecularIntensity(2);
                            },
                            children: "Car Paint"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 238,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewButton, {
                            variant: "text",
                            color: "primary-5",
                            onClick: function onClick() {
                                setSpecularIntensity(0);
                            },
                            children: "Plastic"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                            lineNumber: 248,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
                    lineNumber: 213,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
            lineNumber: 173,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/_material/_material.demo.tsx",
        lineNumber: 172,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9kaWZmdXNlX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZC0zZDdlZDAuMjhmMWIyMWUyYTcxNDFiNi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2RpZmZ1c2UvX21hdGVyaWFsL19tYXRlcmlhbC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9kaWZmdXNlL19tYXRlcmlhbC9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvdXRpbHMvaG9va3MvZmxvYXQudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvZGlmZnVzZS9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHR0eXBlIEFycmF5TnVtYmVyNCxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdFRnZExpZ2h0LFxuXHR0eXBlIFRnZE1hdGVyaWFsLFxuXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXG5cdFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxuXHRUZ2RNYXRlcmlhbE5vcm1hbHMsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlckxvZ2ljLFxuXHRUZ2RQYWludGVyTWVzaEdsdGYsXG5cdFRnZFBhaW50ZXJOb2RlLFxuXHRUZ2RQYWludGVyU2Npc3Nvcixcblx0VGdkUGFpbnRlclNlZ21lbnRzLFxuXHRUZ2RQYWludGVyU2VnbWVudHNEYXRhLFxuXHRUZ2RQYWludGVyU2VnbWVudHNNb3JwaGluZyxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHRnZENhbGNDbGFtcCxcblx0dGdkQ2FsY1JhbmRvbTMsXG5cdHdlYmdsUHJlc2V0Q3VsbCxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7XG5cdFZpZXdCdXR0b24sXG5cdFZpZXdJbnB1dE51bWJlcixcblx0Vmlld1BhbmVsLFxuXHRWaWV3U2xpZGVyLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBVVkdyaWRVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL3V2LWdyaWQud2VicFwiXG5pbXBvcnQgU3V6YW5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFwiQC91dGlscy9ob29rcy9mbG9hdFwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuXHRjb25zdCBjb2xvciA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuZ3JpZClcblx0Y29uc3QgbWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG5cdFx0Y29sb3IsXG5cdFx0YW1iaWVudDogbmV3IFRnZExpZ2h0KHtcblx0XHRcdGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXG5cdFx0fSksXG5cdH0pXG5cdGNvbnN0IG1lc2gxID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG5cdFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxuXHRcdG1hdGVyaWFsOiBtYXRlcmlhbDEsXG5cdH0pXG5cdGNvbnN0IHJpbmcxID0gbWFrZVJpbmcoY29udGV4dCwgbWF0ZXJpYWwxKVxuXHRjb25zdCBub2RlMSA9IG5ldyBUZ2RQYWludGVyTm9kZSh7XG5cdFx0Y2hpbGRyZW46IFttZXNoMSwgcmluZzFdLFxuXHR9KVxuXHRjb25zdCBtYXRlcmlhbDIgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcblx0XHRjb2xvcixcblx0XHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG5cdFx0YW1iaWVudDogbmV3IFRnZExpZ2h0KHtcblx0XHRcdGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMV0sXG5cdFx0fSksXG5cdH0pXG5cdC8vIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbE5vcm1hbHMoKVxuXHRjb25zdCBtZXNoMiA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcblx0XHRtYXRlcmlhbDogbWF0ZXJpYWwyLFxuXHR9KVxuXHRjb25zdCByaW5nMiA9IG1ha2VSaW5nKGNvbnRleHQsIG1hdGVyaWFsMilcblx0Y29uc3Qgbm9kZTIgPSBuZXcgVGdkUGFpbnRlck5vZGUoe1xuXHRcdGNoaWxkcmVuOiBbbWVzaDIsIHJpbmcyXSxcblx0fSlcblx0Ly8gI2VuZFxuXHRjb25zdCBzY2lzc29yMSA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XG5cdFx0Y2hpbGRyZW46IFtub2RlMV0sXG5cdFx0eDogMCxcblx0XHR5OiAwLFxuXHRcdHdpZHRoOiAwLjUsXG5cdFx0aGVpZ2h0OiAxLFxuXHR9KVxuXHRjb25zdCBzY2lzc29yMiA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XG5cdFx0Y2hpbGRyZW46IFtub2RlMl0sXG5cdFx0eDogMC41LFxuXHRcdHk6IDAsXG5cdFx0d2lkdGg6IDAuNSxcblx0XHRoZWlnaHQ6IDEsXG5cdH0pXG5cdGNvbnRleHQuYWRkKFxuXHRcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdFx0Y29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcblx0XHRcdGRlcHRoOiAxLFxuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRcdGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuXHRcdFx0Y2hpbGRyZW46IFtzY2lzc29yMSwgc2Npc3NvcjJdLFxuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XG5cdFx0XHRjb25zdCBzcGVlZCA9IDAuMVxuXHRcdFx0Y29uc3QgYW5nWCA9IGRlbHRhICogMC40OTU0MSAqIHNwZWVkXG5cdFx0XHRjb25zdCBhbmdZID0gZGVsdGEgKiAwLjMxNzg5ICogc3BlZWRcblx0XHRcdGNvbnN0IGFuZ1ogPSBkZWx0YSAqIDAuNTc4OTIgKiBzcGVlZFxuXHRcdFx0bm9kZTEudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWClcblx0XHRcdG5vZGUxLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpXG5cdFx0XHRub2RlMS50cmFuc2ZvLm9yYml0QXJvdW5kWihhbmdaKVxuXHRcdFx0bm9kZTIudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWClcblx0XHRcdG5vZGUyLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpXG5cdFx0XHRub2RlMi50cmFuc2ZvLm9yYml0QXJvdW5kWihhbmdaKVxuXHRcdH0pLFxuXHQpXG5cdHJpbmcyLmRlYnVnKClcblx0Y29udGV4dC5wbGF5KClcblx0cmV0dXJuIHtcblx0XHRzcGVjdWxhckV4cG9uZW50KHZhbHVlOiBudW1iZXIpIHtcblx0XHRcdG1hdGVyaWFsMS5zcGVjdWxhckV4cG9uZW50ID0gdmFsdWVcblx0XHRcdG1hdGVyaWFsMi5zcGVjdWxhckV4cG9uZW50ID0gdmFsdWVcblx0XHRcdGNvbnRleHQucGFpbnQoKVxuXHRcdH0sXG5cdFx0c3BlY3VsYXJJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuXHRcdFx0bWF0ZXJpYWwxLnNwZWN1bGFySW50ZW5zaXR5ID0gdmFsdWVcblx0XHRcdG1hdGVyaWFsMi5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlXG5cdFx0XHRjb250ZXh0LnBhaW50KClcblx0XHR9LFxuXHRcdHNwbGl0KHZhbHVlOiBudW1iZXIpIHtcblx0XHRcdGNvbnN0IGEgPSB0Z2RDYWxjQ2xhbXAodmFsdWUsIDAsIDEpXG5cdFx0XHRzY2lzc29yMS54ID0gMFxuXHRcdFx0c2Npc3NvcjEud2lkdGggPSBhXG5cdFx0XHRzY2lzc29yMi54ID0gYVxuXHRcdFx0c2Npc3NvcjIud2lkdGggPSAxIC0gYVxuXHRcdFx0Y29udGV4dC5wYWludCgpXG5cdFx0fSxcblx0fVxufVxuXG5mdW5jdGlvbiBtYWtlUmluZyhjb250ZXh0OiBUZ2RDb250ZXh0LCBtYXRlcmlhbDogVGdkTWF0ZXJpYWwpIHtcblx0Y29uc3QgZGF0YSA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKClcblx0Y29uc3QgY291bnQgPSAxNlxuXHRjb25zdCB5ID0gLTEuNVxuXHRjb25zdCByID0gMC4yXG5cdGNvbnN0IFIgPSAxXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdGNvbnN0IHgwID0gUiAqIE1hdGguY29zKChpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXG5cdFx0Y29uc3QgejAgPSBSICogTWF0aC5zaW4oKGkgKiBNYXRoLlBJICogMikgLyBjb3VudClcblx0XHRjb25zdCB4MSA9IFIgKiBNYXRoLmNvcygoKGkgKyAxKSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KVxuXHRcdGNvbnN0IHoxID0gUiAqIE1hdGguc2luKCgoaSArIDEpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXG5cdFx0Y29uc3QgdTAgPSBpIC8gY291bnRcblx0XHRjb25zdCB1MSA9IChpICsgMSkgLyBjb3VudFxuXHRcdGRhdGEuYWRkKFt4MCwgeSwgejAsIHJdLCBbeDEsIHksIHoxLCByXSwgW3UwLCB1MF0sIFt1MSwgdTFdKVxuXHR9XG5cdC8vIHJldHVybiBuZXcgVGdkUGFpbnRlclNlZ21lbnRzKGNvbnRleHQsIHtcblx0Ly8gICAgIHJvdW5kbmVzczogNSxcblx0Ly8gICAgIG1hdGVyaWFsLFxuXHQvLyAgICAgZGF0YXNldDogZGF0YS5tYWtlRGF0YXNldCgpLFxuXHQvLyB9KVxuXHRyZXR1cm4gbmV3IFRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nKGNvbnRleHQsIHtcblx0XHRyb3VuZG5lc3M6IDUsXG5cdFx0bWF0ZXJpYWwsXG5cdFx0ZGF0YXNldHNQYWlyczogW1tkYXRhLm1ha2VEYXRhc2V0KCksIGRhdGEubWFrZURhdGFzZXQoKV1dLFxuXHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxuXHRjb25zdCBzcnYgPSByZWYuY3VycmVudFxuXHRjb25zdCBbc3BlY3VsYXJFeHBvbmVudCwgc2V0U3BlY3VsYXJFeHBvbmVudF0gPSB1c2VGbG9hdChcblx0XHQyMCxcblx0XHRzcnY/LnNwZWN1bGFyRXhwb25lbnQsXG5cdClcblx0Y29uc3QgW3NwZWN1bGFySW50ZW5zaXR5LCBzZXRTcGVjdWxhckludGVuc2l0eV0gPSB1c2VGbG9hdChcblx0XHQxLFxuXHRcdHNydj8uc3BlY3VsYXJJbnRlbnNpdHksXG5cdClcblx0Y29uc3QgW3NwbGl0LCBzZXRTcGxpdF0gPSB1c2VGbG9hdCgwLjEsIHNydj8uc3BsaXQpXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxWaWV3XG5cdFx0XHRcdG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcblx0XHRcdFx0XHRyZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcblx0XHRcdFx0fX1cblx0XHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdFx0Z2xiOiB7XG5cdFx0XHRcdFx0XHRzdXphbmU6IFN1emFuZVVSTCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0XHRncmlkOiBVVkdyaWRVUkwsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fX1cblx0XHRcdFx0Z2l6bW9cblx0XHRcdFx0Y29udHJvbGxlcj17e1xuXHRcdFx0XHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0PFZpZXdTbGlkZXJcblx0XHRcdFx0XHR2YWx1ZT17c3BsaXR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3NldFNwbGl0fVxuXHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRtYXg9ezF9XG5cdFx0XHRcdFx0c3RlcD17MWUtMn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFZpZXdQYW5lbFxuXHRcdFx0XHRcdGRpc3BsYXk9XCJmbGV4XCJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiXG5cdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Vmlld0lucHV0TnVtYmVyXG5cdFx0XHRcdFx0XHRsYWJlbD1cInNwZWN1bGFyRXhwb25lbnRcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e3NwZWN1bGFyRXhwb25lbnR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17c2V0U3BlY3VsYXJFeHBvbmVudH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxWaWV3SW5wdXROdW1iZXJcblx0XHRcdFx0XHRcdGxhYmVsPVwic3BlY3VsYXJJbnRlbnNpdHlcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e3NwZWN1bGFySW50ZW5zaXR5fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3NldFNwZWN1bGFySW50ZW5zaXR5fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvVmlld1BhbmVsPlxuXHRcdFx0XHQ8Vmlld1BhbmVsXG5cdFx0XHRcdFx0ZGlzcGxheT1cImZsZXhcIlxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zPVwiY2VudGVyXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjb2xvcj1cInByaW1hcnktNVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldFNwZWN1bGFyRXhwb25lbnQoMSlcblx0XHRcdFx0XHRcdFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMC41KVxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRCcnVzaGVkIE1ldGFsXG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjb2xvcj1cInByaW1hcnktNVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldFNwZWN1bGFyRXhwb25lbnQoMC4yNSlcblx0XHRcdFx0XHRcdFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMC4xMjUpXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFNvZnQgTGlnaHRcblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b25cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNvbG9yPVwicHJpbWFyeS01XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0U3BlY3VsYXJFeHBvbmVudCg1MClcblx0XHRcdFx0XHRcdFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMilcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0Q2FyIFBhaW50XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjb2xvcj1cInByaW1hcnktNVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldFNwZWN1bGFySW50ZW5zaXR5KDApXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFBsYXN0aWNcblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvVmlld1BhbmVsPlxuXHRcdFx0PC9WaWV3PlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vX21hdGVyaWFsLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiXFx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXTtcXG5cXHRjb25zdCBtYXRlcmlhbDEgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRjb2xvcixcXG5cXHRcXHRhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcblxcdFxcdFxcdGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuXFx0XFx0fSksXFxuXFx0fSk7XFxuXFx0Y29uc3QgbWVzaDEgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG5cXHRcXHRhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuXFx0XFx0bWF0ZXJpYWw6IG1hdGVyaWFsMSxcXG5cXHR9KTtcXG5cXHRjb25zdCByaW5nMSA9IG1ha2VSaW5nKGNvbnRleHQsIG1hdGVyaWFsMSk7XFxuXFx0Y29uc3Qgbm9kZTEgPSBuZXcgVGdkUGFpbnRlck5vZGUoe1xcblxcdFxcdGNoaWxkcmVuOiBbbWVzaDEsIHJpbmcxXSxcXG5cXHR9KTtcXG5cXHRjb25zdCBtYXRlcmlhbDIgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRjb2xvcixcXG5cXHRcXHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuXFx0XFx0YW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG5cXHRcXHRcXHRjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxcblxcdFxcdH0pLFxcblxcdH0pO1xcblxcdC8vIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbE5vcm1hbHMoKVxcblxcdGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuXFx0XFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcblxcdFxcdG1hdGVyaWFsOiBtYXRlcmlhbDIsXFxuXFx0fSk7XFxuXFx0Y29uc3QgcmluZzIgPSBtYWtlUmluZyhjb250ZXh0LCBtYXRlcmlhbDIpO1xcblxcdGNvbnN0IG5vZGUyID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG5cXHRcXHRjaGlsZHJlbjogW21lc2gyLCByaW5nMl0sXFxuXFx0fSk7XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdHR5cGUgQXJyYXlOdW1iZXI0LFxcblxcdHR5cGUgVGdkQ29udGV4dCxcXG5cXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuXFx0VGdkTGlnaHQsXFxuXFx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyTWVzaEdsdGYsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFBhaW50ZXJTY2lzc29yLFxcblxcdHRnZENhbGNSYW5kb20zLFxcblxcdHdlYmdsUHJlc2V0RGVwdGgsXFxuXFx0dGdkQ2FsY0NsYW1wLFxcblxcdFRnZFBhaW50ZXJMb2dpYyxcXG5cXHRUZ2RQYWludGVyTm9kZSxcXG5cXHR0eXBlIFRnZE1hdGVyaWFsLFxcblxcdFRnZFBhaW50ZXJTZWdtZW50c0RhdGEsXFxuXFx0VGdkUGFpbnRlclNlZ21lbnRzLFxcblxcdHdlYmdsUHJlc2V0Q3VsbCxcXG5cXHRUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcXG5cXHRUZ2RNYXRlcmlhbE5vcm1hbHMsXFxuXFx0VGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlxcXCI7XFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIjtcXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXFxcIkAvdXRpbHMvaG9va3MvZmxvYXRcXFwiO1xcbmltcG9ydCB7XFxuXFx0Vmlld0J1dHRvbixcXG5cXHRWaWV3SW5wdXROdW1iZXIsXFxuXFx0Vmlld1BhbmVsLFxcblxcdFZpZXdTbGlkZXIsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3VpXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXTtcXG5cXHRjb25zdCBtYXRlcmlhbDEgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRjb2xvcixcXG5cXHRcXHRhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcblxcdFxcdFxcdGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuXFx0XFx0fSksXFxuXFx0fSk7XFxuXFx0Y29uc3QgbWVzaDEgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG5cXHRcXHRhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuXFx0XFx0bWF0ZXJpYWw6IG1hdGVyaWFsMSxcXG5cXHR9KTtcXG5cXHRjb25zdCByaW5nMSA9IG1ha2VSaW5nKGNvbnRleHQsIG1hdGVyaWFsMSk7XFxuXFx0Y29uc3Qgbm9kZTEgPSBuZXcgVGdkUGFpbnRlck5vZGUoe1xcblxcdFxcdGNoaWxkcmVuOiBbbWVzaDEsIHJpbmcxXSxcXG5cXHR9KTtcXG5cXHRjb25zdCBtYXRlcmlhbDIgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRjb2xvcixcXG5cXHRcXHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuXFx0XFx0YW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG5cXHRcXHRcXHRjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxcblxcdFxcdH0pLFxcblxcdH0pO1xcblxcdC8vIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbE5vcm1hbHMoKVxcblxcdGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuXFx0XFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcblxcdFxcdG1hdGVyaWFsOiBtYXRlcmlhbDIsXFxuXFx0fSk7XFxuXFx0Y29uc3QgcmluZzIgPSBtYWtlUmluZyhjb250ZXh0LCBtYXRlcmlhbDIpO1xcblxcdGNvbnN0IG5vZGUyID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG5cXHRcXHRjaGlsZHJlbjogW21lc2gyLCByaW5nMl0sXFxuXFx0fSk7XFxuXFx0Y29uc3Qgc2Npc3NvcjEgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xcblxcdFxcdGNoaWxkcmVuOiBbbm9kZTFdLFxcblxcdFxcdHg6IDAsXFxuXFx0XFx0eTogMCxcXG5cXHRcXHR3aWR0aDogMC41LFxcblxcdFxcdGhlaWdodDogMSxcXG5cXHR9KTtcXG5cXHRjb25zdCBzY2lzc29yMiA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XFxuXFx0XFx0Y2hpbGRyZW46IFtub2RlMl0sXFxuXFx0XFx0eDogMC41LFxcblxcdFxcdHk6IDAsXFxuXFx0XFx0d2lkdGg6IDAuNSxcXG5cXHRcXHRoZWlnaHQ6IDEsXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuXFx0XFx0XFx0Y29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG5cXHRcXHRcXHRkZXB0aDogMSxcXG5cXHRcXHR9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdFxcdGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbc2Npc3NvcjEsIHNjaXNzb3IyXSxcXG5cXHRcXHR9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWx0YSkgPT4ge1xcblxcdFxcdFxcdGNvbnN0IHNwZWVkID0gMC4xO1xcblxcdFxcdFxcdGNvbnN0IGFuZ1ggPSBkZWx0YSAqIDAuNDk1NDEgKiBzcGVlZDtcXG5cXHRcXHRcXHRjb25zdCBhbmdZID0gZGVsdGEgKiAwLjMxNzg5ICogc3BlZWQ7XFxuXFx0XFx0XFx0Y29uc3QgYW5nWiA9IGRlbHRhICogMC41Nzg5MiAqIHNwZWVkO1xcblxcdFxcdFxcdG5vZGUxLnRyYW5zZm8ub3JiaXRBcm91bmRYKGFuZ1gpO1xcblxcdFxcdFxcdG5vZGUxLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpO1xcblxcdFxcdFxcdG5vZGUxLnRyYW5zZm8ub3JiaXRBcm91bmRaKGFuZ1opO1xcblxcdFxcdFxcdG5vZGUyLnRyYW5zZm8ub3JiaXRBcm91bmRYKGFuZ1gpO1xcblxcdFxcdFxcdG5vZGUyLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpO1xcblxcdFxcdFxcdG5vZGUyLnRyYW5zZm8ub3JiaXRBcm91bmRaKGFuZ1opO1xcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0cmluZzIuZGVidWcoKTtcXG5cXHRjb250ZXh0LnBsYXkoKTtcXG5cXHRyZXR1cm4ge1xcblxcdFxcdHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xcblxcdFxcdFxcdG1hdGVyaWFsMS5zcGVjdWxhckV4cG9uZW50ID0gdmFsdWU7XFxuXFx0XFx0XFx0bWF0ZXJpYWwyLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZTtcXG5cXHRcXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0XFx0fSxcXG5cXHRcXHRzcGVjdWxhckludGVuc2l0eSh2YWx1ZTogbnVtYmVyKSB7XFxuXFx0XFx0XFx0bWF0ZXJpYWwxLnNwZWN1bGFySW50ZW5zaXR5ID0gdmFsdWU7XFxuXFx0XFx0XFx0bWF0ZXJpYWwyLnNwZWN1bGFySW50ZW5zaXR5ID0gdmFsdWU7XFxuXFx0XFx0XFx0Y29udGV4dC5wYWludCgpO1xcblxcdFxcdH0sXFxuXFx0XFx0c3BsaXQodmFsdWU6IG51bWJlcikge1xcblxcdFxcdFxcdGNvbnN0IGEgPSB0Z2RDYWxjQ2xhbXAodmFsdWUsIDAsIDEpO1xcblxcdFxcdFxcdHNjaXNzb3IxLnggPSAwO1xcblxcdFxcdFxcdHNjaXNzb3IxLndpZHRoID0gYTtcXG5cXHRcXHRcXHRzY2lzc29yMi54ID0gYTtcXG5cXHRcXHRcXHRzY2lzc29yMi53aWR0aCA9IDEgLSBhO1xcblxcdFxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHRcXHR9LFxcblxcdH07XFxufVxcblxcbmZ1bmN0aW9uIG1ha2VSaW5nKGNvbnRleHQ6IFRnZENvbnRleHQsIG1hdGVyaWFsOiBUZ2RNYXRlcmlhbCkge1xcblxcdGNvbnN0IGRhdGEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpO1xcblxcdGNvbnN0IGNvdW50ID0gMTY7XFxuXFx0Y29uc3QgeSA9IC0wLjU7XFxuXFx0Y29uc3QgciA9IDAuMjtcXG5cXHRjb25zdCBSID0gMTtcXG5cXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG5cXHRcXHRjb25zdCB4MCA9IFIgKiBNYXRoLmNvcygoaSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KTtcXG5cXHRcXHRjb25zdCB6MCA9IFIgKiBNYXRoLnNpbigoaSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KTtcXG5cXHRcXHRjb25zdCB4MSA9IFIgKiBNYXRoLmNvcygoKGkgKyAxKSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KTtcXG5cXHRcXHRjb25zdCB6MSA9IFIgKiBNYXRoLnNpbigoKGkgKyAxKSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KTtcXG5cXHRcXHRjb25zdCB1MCA9IGkgLyBjb3VudDtcXG5cXHRcXHRjb25zdCB1MSA9IChpICsgMSkgLyBjb3VudDtcXG5cXHRcXHRkYXRhLmFkZChbeDAsIHksIHowLCByXSwgW3gxLCB5LCB6MSwgcl0sIFt1MCwgdTBdLCBbdTEsIHUxXSk7XFxuXFx0fVxcblxcdC8vIHJldHVybiBuZXcgVGdkUGFpbnRlclNlZ21lbnRzKGNvbnRleHQsIHtcXG5cXHQvLyAgICAgcm91bmRuZXNzOiA1LFxcblxcdC8vICAgICBtYXRlcmlhbCxcXG5cXHQvLyAgICAgZGF0YXNldDogZGF0YS5tYWtlRGF0YXNldCgpLFxcblxcdC8vIH0pXFxuXFx0cmV0dXJuIG5ldyBUZ2RQYWludGVyU2VnbWVudHNNb3JwaGluZyhjb250ZXh0LCB7XFxuXFx0XFx0cm91bmRuZXNzOiA1LFxcblxcdFxcdG1hdGVyaWFsLFxcblxcdFxcdGRhdGFzZXRzUGFpcnM6IFtbZGF0YS5tYWtlRGF0YXNldCgpLCBkYXRhLm1ha2VEYXRhc2V0KCldXSxcXG5cXHR9KTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKTtcXG5cXHRjb25zdCBzcnYgPSByZWYuY3VycmVudDtcXG5cXHRjb25zdCBbc3BlY3VsYXJFeHBvbmVudCwgc2V0U3BlY3VsYXJFeHBvbmVudF0gPSB1c2VGbG9hdChcXG5cXHRcXHQyMCxcXG5cXHRcXHRzcnY/LnNwZWN1bGFyRXhwb25lbnQsXFxuXFx0KTtcXG5cXHRjb25zdCBbc3BlY3VsYXJJbnRlbnNpdHksIHNldFNwZWN1bGFySW50ZW5zaXR5XSA9IHVzZUZsb2F0KFxcblxcdFxcdDEsXFxuXFx0XFx0c3J2Py5zcGVjdWxhckludGVuc2l0eSxcXG5cXHQpO1xcblxcdGNvbnN0IFtzcGxpdCwgc2V0U3BsaXRdID0gdXNlRmxvYXQoMC4xLCBzcnY/LnNwbGl0KTtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxkaXY+XFxuXFx0XFx0XFx0PFZpZXdcXG5cXHRcXHRcXHRcXHRvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuXFx0XFx0XFx0XFx0XFx0cmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpO1xcblxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0XFx0YXNzZXRzPXt7XFxuXFx0XFx0XFx0XFx0XFx0Z2xiOiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0c3V6YW5lOiBTdXphbmVVUkwsXFxuXFx0XFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR9fVxcblxcdFxcdFxcdFxcdGdpem1vXFxuXFx0XFx0XFx0XFx0Y29udHJvbGxlcj17e1xcblxcdFxcdFxcdFxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRcXHRcXHR9fVxcblxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHQ8Vmlld1NsaWRlclxcblxcdFxcdFxcdFxcdFxcdHZhbHVlPXtzcGxpdH1cXG5cXHRcXHRcXHRcXHRcXHRvbkNoYW5nZT17c2V0U3BsaXR9XFxuXFx0XFx0XFx0XFx0XFx0bWluPXswfVxcblxcdFxcdFxcdFxcdFxcdG1heD17MX1cXG5cXHRcXHRcXHRcXHRcXHRzdGVwPXsxZS0yfVxcblxcdFxcdFxcdFxcdC8+XFxuXFx0XFx0XFx0XFx0PFZpZXdQYW5lbFxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk9XFxcImZsZXhcXFwiXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiXFxuXFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdDxWaWV3SW5wdXROdW1iZXJcXG5cXHRcXHRcXHRcXHRcXHRcXHRsYWJlbD1cXFwic3BlY3VsYXJFeHBvbmVudFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHR2YWx1ZT17c3BlY3VsYXJFeHBvbmVudH1cXG5cXHRcXHRcXHRcXHRcXHRcXHRvbkNoYW5nZT17c2V0U3BlY3VsYXJFeHBvbmVudH1cXG5cXHRcXHRcXHRcXHRcXHQvPlxcblxcdFxcdFxcdFxcdFxcdDxWaWV3SW5wdXROdW1iZXJcXG5cXHRcXHRcXHRcXHRcXHRcXHRsYWJlbD1cXFwic3BlY3VsYXJJbnRlbnNpdHlcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFsdWU9e3NwZWN1bGFySW50ZW5zaXR5fVxcblxcdFxcdFxcdFxcdFxcdFxcdG9uQ2hhbmdlPXtzZXRTcGVjdWxhckludGVuc2l0eX1cXG5cXHRcXHRcXHRcXHRcXHQvPlxcblxcdFxcdFxcdFxcdDwvVmlld1BhbmVsPlxcblxcdFxcdFxcdFxcdDxWaWV3UGFuZWxcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5PVxcXCJmbGV4XFxcIlxcblxcdFxcdFxcdFxcdFxcdGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0YWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIlxcblxcdFxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHRcXHQ8Vmlld0J1dHRvblxcblxcdFxcdFxcdFxcdFxcdFxcdHZhcmlhbnQ9XFxcInRleHRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I9XFxcInByaW1hcnktNVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRvbkNsaWNrPXsoKSA9PiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0c2V0U3BlY3VsYXJFeHBvbmVudCgxKTtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRzZXRTcGVjdWxhckludGVuc2l0eSgwLjUpO1xcblxcdFxcdFxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdFxcdEJydXNoZWQgTWV0YWxcXG5cXHRcXHRcXHRcXHRcXHQ8L1ZpZXdCdXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0PFZpZXdCdXR0b25cXG5cXHRcXHRcXHRcXHRcXHRcXHR2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0b25DbGljaz17KCkgPT4ge1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHNldFNwZWN1bGFyRXhwb25lbnQoMC4yNSk7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMC4xMjUpO1xcblxcdFxcdFxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdFxcdFNvZnQgTGlnaHRcXG5cXHRcXHRcXHRcXHRcXHQ8L1ZpZXdCdXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0PFZpZXdCdXR0b25cXG5cXHRcXHRcXHRcXHRcXHRcXHR2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0b25DbGljaz17KCkgPT4ge1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHNldFNwZWN1bGFyRXhwb25lbnQoNTApO1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHNldFNwZWN1bGFySW50ZW5zaXR5KDIpO1xcblxcdFxcdFxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdFxcdENhciBQYWludFxcblxcdFxcdFxcdFxcdFxcdDwvVmlld0J1dHRvbj5cXG5cXHRcXHRcXHRcXHRcXHQ8Vmlld0J1dHRvblxcblxcdFxcdFxcdFxcdFxcdFxcdHZhcmlhbnQ9XFxcInRleHRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I9XFxcInByaW1hcnktNVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRvbkNsaWNrPXsoKSA9PiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0c2V0U3BlY3VsYXJJbnRlbnNpdHkoMCk7XFxuXFx0XFx0XFx0XFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0UGxhc3RpY1xcblxcdFxcdFxcdFxcdFxcdDwvVmlld0J1dHRvbj5cXG5cXHRcXHRcXHRcXHQ8L1ZpZXdQYW5lbD5cXG5cXHRcXHRcXHQ8L1ZpZXc+XFxuXFx0XFx0PC9kaXY+XFxuXFx0KTtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZsb2F0KFxuXHRpbml0aWFsVmFsdWU6IG51bWJlcixcblx0b25DaGFuZ2U/OiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCxcbik6IFt2YWx1ZTogbnVtYmVyLCBzZXRWYWx1ZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWRdIHtcblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4gb25DaGFuZ2U/Lih2YWx1ZSksIFt2YWx1ZV0pO1xuXHRyZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV07XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZExpZ2h0IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlck5vZGUiLCJUZ2RQYWludGVyU2Npc3NvciIsIlRnZFBhaW50ZXJTZWdtZW50c0RhdGEiLCJUZ2RQYWludGVyU2VnbWVudHNNb3JwaGluZyIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsInRnZENhbGNDbGFtcCIsIndlYmdsUHJlc2V0Q3VsbCIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3QnV0dG9uIiwiVmlld0lucHV0TnVtYmVyIiwiVmlld1BhbmVsIiwiVmlld1NsaWRlciIsIlJlYWN0IiwiVVZHcmlkVVJMIiwiU3V6YW5lVVJMIiwiVmlldyIsInVzZUZsb2F0IiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjb2xvciIsIm1hdGVyaWFsMSIsIm1lc2gxIiwicmluZzEiLCJtYWtlUmluZyIsIm5vZGUxIiwibWF0ZXJpYWwyIiwibWVzaDIiLCJyaW5nMiIsIm5vZGUyIiwic2Npc3NvcjEiLCJzY2lzc29yMiIsInRpbWUiLCJkZWx0YSIsInNwZWVkIiwiYW5nWCIsImFuZ1kiLCJhbmdaIiwic3BlY3VsYXJFeHBvbmVudCIsInZhbHVlIiwic3BlY3VsYXJJbnRlbnNpdHkiLCJzcGxpdCIsImEiLCJtYXRlcmlhbCIsImRhdGEiLCJjb3VudCIsInkiLCJyIiwiUiIsImkiLCJ4MCIsIk1hdGgiLCJ6MCIsIngxIiwiejEiLCJ1MCIsInUxIiwiRGVtbyIsInJlZiIsInNydiIsIl91c2VGbG9hdCIsInNldFNwZWN1bGFyRXhwb25lbnQiLCJfdXNlRmxvYXQxIiwic2V0U3BlY3VsYXJJbnRlbnNpdHkiLCJfdXNlRmxvYXQyIiwic2V0U3BsaXQiLCJvblJlYWR5Iiwic2NlbmUiLCJvbkNsaWNrIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsImluaXRpYWxWYWx1ZSIsIm9uQ2hhbmdlIiwic2V0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJ1QjtBQU1EO0FBQ0c7QUFDMEI7QUFDRjtBQUNHO0FBQ047QUFFOUMsU0FBU3VCLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDaEQsNEJBQTRCO0lBQzVCLElBQU1DLFFBQVEsSUFBSWhCLDRDQUFZQSxDQUFDYyxTQUFTLFVBQVUsQ0FBQ0MsT0FBTyxLQUFLLENBQUMsSUFBSTtJQUNwRSxJQUFNRSxZQUFZLElBQUkxQixrREFBa0JBLENBQUM7UUFDeEN5QixPQUFBQTtRQUNBLFNBQVMsSUFBSTFCLHdDQUFRQSxDQUFDO1lBQ3JCLE9BQU87Z0JBQUM7Z0JBQUs7Z0JBQUs7Z0JBQUs7YUFBRTtRQUMxQjtJQUNEO0lBQ0EsSUFBTTRCLFFBQVEsSUFBSXhCLGtEQUFrQkEsQ0FBQ29CLFNBQVM7UUFDN0MsT0FBT0MsT0FBTyxHQUFHLENBQUMsTUFBTTtRQUN4QixVQUFVRTtJQUNYO0lBQ0EsSUFBTUUsUUFBUUMsU0FBU04sU0FBU0c7SUFDaEMsSUFBTUksUUFBUSxJQUFJMUIsOENBQWNBLENBQUM7UUFDaEMsVUFBVTtZQUFDdUI7WUFBT0M7U0FBTTtJQUN6QjtJQUNBLElBQU1HLFlBQVks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