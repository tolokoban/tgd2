"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_gltf_page_mdx-src_components_demo_CodeViewer_CodeViewer_module-b00259"], {
56735(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negX.6997b22ac1d3c989.webp";

},
12444(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negY.4360b2d7fd824d08.webp";

},
29305(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negZ.9ede69dc0bde1bb1.webp";

},
12599(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posX.4083d9709c18bba2.webp";

},
70740(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posY.25febb9fa4b1da65.webp";

},
68081(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posZ.2c62d2ea48ae91f6.webp";

},
74167(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/helmet.d635f1c712b5efea.glb";

},
91805(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_mesh_helmet_glb__rspack_import_3 = __webpack_require__(74167);
/* import */ var _assets_cubemap_1024_warehouse_posX_webp__rspack_import_4 = __webpack_require__(12599);
/* import */ var _assets_cubemap_1024_warehouse_posY_webp__rspack_import_5 = __webpack_require__(70740);
/* import */ var _assets_cubemap_1024_warehouse_posZ_webp__rspack_import_6 = __webpack_require__(68081);
/* import */ var _assets_cubemap_1024_warehouse_negX_webp__rspack_import_7 = __webpack_require__(56735);
/* import */ var _assets_cubemap_1024_warehouse_negY_webp__rspack_import_8 = __webpack_require__(12444);
/* import */ var _assets_cubemap_1024_warehouse_negZ_webp__rspack_import_9 = __webpack_require__(29305);










function init(context, assets) {
    // #begin Initializing WebGL
    var skybox = _tolokoban_tgd__rspack_import_1.TgdTextureCube.lazyLoad(context, {
        size: 1024,
        posX: _assets_cubemap_1024_warehouse_posX_webp__rspack_import_4,
        posY: _assets_cubemap_1024_warehouse_posY_webp__rspack_import_5,
        posZ: _assets_cubemap_1024_warehouse_posZ_webp__rspack_import_6,
        negX: _assets_cubemap_1024_warehouse_negX_webp__rspack_import_7,
        negY: _assets_cubemap_1024_warehouse_negY_webp__rspack_import_8,
        negZ: _assets_cubemap_1024_warehouse_negZ_webp__rspack_import_9
    });
    var _assets_glb = assets.glb, data = _assets_glb.helmet;
    // All the textures are read from the glTF material
    // of the first primitive of the first mesh.
    var material = _tolokoban_tgd__rspack_import_1.TgdMaterialGltf.from(context, {
        data: data,
        meshIndexOrName: 0,
        primitiveIndex: 0,
        skybox: skybox
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: data.makeGeometry(),
        transfo: data.createTransfoFromNode(data.getNode(0)),
        material: material
    });
    // #end
    context.camera.fitSpaceAtTarget(2.2, 2.2);
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterSkybox(context, {
        camera: context.camera,
        texture: skybox
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: [
            mesh
        ]
    }));
    context.paint();
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        assets: {
            glb: {
                helmet: _assets_mesh_helmet_glb__rspack_import_3
            }
        },
        options: {
            alpha: false
        },
        controller: {
            inertiaOrbit: 1000
        },
        gizmo: true
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_from/from.demo.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, this);
}


},
69994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _from_demo__rspack_import_4 = __webpack_require__(91805);
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
    "Initializing WebGL": "\tconst skybox = TgdTextureCube.lazyLoad(context, {\n\t\tsize: 1024,\n\t\tposX: PosX,\n\t\tposY: PosY,\n\t\tposZ: PosZ,\n\t\tnegX: NegX,\n\t\tnegY: NegY,\n\t\tnegZ: NegZ,\n\t});\n\tconst { helmet: data } = assets.glb;\n\t// All the textures are read from the glTF material\n\t// of the first primitive of the first mesh.\n\tconst material = TgdMaterialGltf.from(context, {\n\t\tdata,\n\t\tmeshIndexOrName: 0,\n\t\tprimitiveIndex: 0,\n\t\tskybox,\n\t});\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: data.makeGeometry(),\n\t\ttransfo: data.createTransfoFromNode(data.getNode(0)),\n\t\tmaterial,\n\t});"
};
var FULL = "import {\n\ttype TgdContext,\n\tTgdMaterialGltf,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterSkybox,\n\tTgdPainterState,\n\tTgdTextureCube,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport HelmetURL from \"@/assets/mesh/helmet.glb\";\nimport PosX from \"@/assets/cubemap/1024/warehouse/posX.webp\";\nimport PosY from \"@/assets/cubemap/1024/warehouse/posY.webp\";\nimport PosZ from \"@/assets/cubemap/1024/warehouse/posZ.webp\";\nimport NegX from \"@/assets/cubemap/1024/warehouse/negX.webp\";\nimport NegY from \"@/assets/cubemap/1024/warehouse/negY.webp\";\nimport NegZ from \"@/assets/cubemap/1024/warehouse/negZ.webp\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst skybox = TgdTextureCube.lazyLoad(context, {\n\t\tsize: 1024,\n\t\tposX: PosX,\n\t\tposY: PosY,\n\t\tposZ: PosZ,\n\t\tnegX: NegX,\n\t\tnegY: NegY,\n\t\tnegZ: NegZ,\n\t});\n\tconst { helmet: data } = assets.glb;\n\t// All the textures are read from the glTF material\n\t// of the first primitive of the first mesh.\n\tconst material = TgdMaterialGltf.from(context, {\n\t\tdata,\n\t\tmeshIndexOrName: 0,\n\t\tprimitiveIndex: 0,\n\t\tskybox,\n\t});\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: data.makeGeometry(),\n\t\ttransfo: data.createTransfoFromNode(data.getNode(0)),\n\t\tmaterial,\n\t});\n\tcontext.camera.fitSpaceAtTarget(2.2, 2.2);\n\tcontext.add(\n\t\tnew TgdPainterClear(context, { depth: 1 }),\n\t\tnew TgdPainterSkybox(context, {\n\t\t\tcamera: context.camera,\n\t\t\ttexture: skybox,\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: [mesh],\n\t\t}),\n\t);\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{ glb: { helmet: HelmetURL } }}\n\t\t\toptions={{ alpha: false }}\n\t\t\tcontroller={{ inertiaOrbit: 1000 }}\n\t\t\tgizmo\n\t\t/>\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_from_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_from/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_from/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_from/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_from/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_from/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_from/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
57971(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_mesh_helmet_glb__rspack_import_3 = __webpack_require__(74167);
/* import */ var _assets_cubemap_1024_warehouse_posX_webp__rspack_import_4 = __webpack_require__(12599);
/* import */ var _assets_cubemap_1024_warehouse_posY_webp__rspack_import_5 = __webpack_require__(70740);
/* import */ var _assets_cubemap_1024_warehouse_posZ_webp__rspack_import_6 = __webpack_require__(68081);
/* import */ var _assets_cubemap_1024_warehouse_negX_webp__rspack_import_7 = __webpack_require__(56735);
/* import */ var _assets_cubemap_1024_warehouse_negY_webp__rspack_import_8 = __webpack_require__(12444);
/* import */ var _assets_cubemap_1024_warehouse_negZ_webp__rspack_import_9 = __webpack_require__(29305);










function init(context, assets) {
    var _ref, _ref1, _ref2, _ref3, _ref4;
    var _pbr_baseColorTexture, _pbr_metallicRoughnessTexture, _gltfMaterial_normalTexture, _gltfMaterial_occlusionTexture, _gltfMaterial_emissiveTexture;
    // #begin Initializing WebGL
    var skybox = _tolokoban_tgd__rspack_import_1.TgdTextureCube.lazyLoad(context, {
        size: 1024,
        posX: _assets_cubemap_1024_warehouse_posX_webp__rspack_import_4,
        posY: _assets_cubemap_1024_warehouse_posY_webp__rspack_import_5,
        posZ: _assets_cubemap_1024_warehouse_posZ_webp__rspack_import_6,
        negX: _assets_cubemap_1024_warehouse_negX_webp__rspack_import_7,
        negY: _assets_cubemap_1024_warehouse_negY_webp__rspack_import_8,
        negZ: _assets_cubemap_1024_warehouse_negZ_webp__rspack_import_9
    });
    var _assets_glb = assets.glb, asset = _assets_glb.helmet;
    var gltfMaterial = asset.getMaterial(0);
    var pbr = gltfMaterial.pbrMetallicRoughness;
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialGltf({
        textures: {
            albedo: asset.createTexture2D(context, (_ref = pbr === null || pbr === void 0 ? void 0 : (_pbr_baseColorTexture = pbr.baseColorTexture) === null || _pbr_baseColorTexture === void 0 ? void 0 : _pbr_baseColorTexture.index) !== null && _ref !== void 0 ? _ref : 0),
            // glTF stores roughness in GREEN and metallic in BLUE.
            metallicRoughness: asset.createTexture2D(context, (_ref1 = pbr === null || pbr === void 0 ? void 0 : (_pbr_metallicRoughnessTexture = pbr.metallicRoughnessTexture) === null || _pbr_metallicRoughnessTexture === void 0 ? void 0 : _pbr_metallicRoughnessTexture.index) !== null && _ref1 !== void 0 ? _ref1 : 0),
            normal: asset.createTexture2D(context, (_ref2 = (_gltfMaterial_normalTexture = gltfMaterial.normalTexture) === null || _gltfMaterial_normalTexture === void 0 ? void 0 : _gltfMaterial_normalTexture.index) !== null && _ref2 !== void 0 ? _ref2 : 0),
            occlusion: asset.createTexture2D(context, (_ref3 = (_gltfMaterial_occlusionTexture = gltfMaterial.occlusionTexture) === null || _gltfMaterial_occlusionTexture === void 0 ? void 0 : _gltfMaterial_occlusionTexture.index) !== null && _ref3 !== void 0 ? _ref3 : 0),
            emission: asset.createTexture2D(context, (_ref4 = (_gltfMaterial_emissiveTexture = gltfMaterial.emissiveTexture) === null || _gltfMaterial_emissiveTexture === void 0 ? void 0 : _gltfMaterial_emissiveTexture.index) !== null && _ref4 !== void 0 ? _ref4 : 0),
            skybox: skybox
        }
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: asset.makeGeometry(),
        transfo: asset.createTransfoFromNode(asset.getNode(0)),
        material: material
    });
    // #end
    context.camera.fitSpaceAtTarget(2.2, 2.2);
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterSkybox(context, {
        camera: context.camera,
        texture: skybox
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: [
            mesh
        ]
    }));
    context.paint();
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        assets: {
            glb: {
                helmet: _assets_mesh_helmet_glb__rspack_import_3
            }
        },
        options: {
            alpha: false
        },
        controller: {
            inertiaOrbit: 1000
        },
        gizmo: true
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_gltf/gltf.demo.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, this);
}


},
91241(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _gltf_demo__rspack_import_4 = __webpack_require__(57971);
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
    "Initializing WebGL": "\tconst skybox = TgdTextureCube.lazyLoad(context, {\n\t\tsize: 1024,\n\t\tposX: PosX,\n\t\tposY: PosY,\n\t\tposZ: PosZ,\n\t\tnegX: NegX,\n\t\tnegY: NegY,\n\t\tnegZ: NegZ,\n\t});\n\tconst { helmet: asset } = assets.glb;\n\tconst gltfMaterial = asset.getMaterial(0);\n\tconst pbr = gltfMaterial.pbrMetallicRoughness;\n\tconst material = new TgdMaterialGltf({\n\t\ttextures: {\n\t\t\talbedo: asset.createTexture2D(context, pbr?.baseColorTexture?.index ?? 0),\n\t\t\t// glTF stores roughness in GREEN and metallic in BLUE.\n\t\t\tmetallicRoughness: asset.createTexture2D(\n\t\t\t\tcontext,\n\t\t\t\tpbr?.metallicRoughnessTexture?.index ?? 0,\n\t\t\t),\n\t\t\tnormal: asset.createTexture2D(context, gltfMaterial.normalTexture?.index ?? 0),\n\t\t\tocclusion: asset.createTexture2D(context, gltfMaterial.occlusionTexture?.index ?? 0),\n\t\t\temission: asset.createTexture2D(context, gltfMaterial.emissiveTexture?.index ?? 0),\n\t\t\tskybox,\n\t\t},\n\t});\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: asset.makeGeometry(),\n\t\ttransfo: asset.createTransfoFromNode(asset.getNode(0)),\n\t\tmaterial,\n\t});"
};
var FULL = "import {\n\ttype TgdContext,\n\tTgdMaterialGltf,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterSkybox,\n\tTgdPainterState,\n\tTgdTextureCube,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport HelmetURL from \"@/assets/mesh/helmet.glb\";\nimport PosX from \"@/assets/cubemap/1024/warehouse/posX.webp\";\nimport PosY from \"@/assets/cubemap/1024/warehouse/posY.webp\";\nimport PosZ from \"@/assets/cubemap/1024/warehouse/posZ.webp\";\nimport NegX from \"@/assets/cubemap/1024/warehouse/negX.webp\";\nimport NegY from \"@/assets/cubemap/1024/warehouse/negY.webp\";\nimport NegZ from \"@/assets/cubemap/1024/warehouse/negZ.webp\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst skybox = TgdTextureCube.lazyLoad(context, {\n\t\tsize: 1024,\n\t\tposX: PosX,\n\t\tposY: PosY,\n\t\tposZ: PosZ,\n\t\tnegX: NegX,\n\t\tnegY: NegY,\n\t\tnegZ: NegZ,\n\t});\n\tconst { helmet: asset } = assets.glb;\n\tconst gltfMaterial = asset.getMaterial(0);\n\tconst pbr = gltfMaterial.pbrMetallicRoughness;\n\tconst material = new TgdMaterialGltf({\n\t\ttextures: {\n\t\t\talbedo: asset.createTexture2D(context, pbr?.baseColorTexture?.index ?? 0),\n\t\t\t// glTF stores roughness in GREEN and metallic in BLUE.\n\t\t\tmetallicRoughness: asset.createTexture2D(\n\t\t\t\tcontext,\n\t\t\t\tpbr?.metallicRoughnessTexture?.index ?? 0,\n\t\t\t),\n\t\t\tnormal: asset.createTexture2D(context, gltfMaterial.normalTexture?.index ?? 0),\n\t\t\tocclusion: asset.createTexture2D(context, gltfMaterial.occlusionTexture?.index ?? 0),\n\t\t\temission: asset.createTexture2D(context, gltfMaterial.emissiveTexture?.index ?? 0),\n\t\t\tskybox,\n\t\t},\n\t});\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: asset.makeGeometry(),\n\t\ttransfo: asset.createTransfoFromNode(asset.getNode(0)),\n\t\tmaterial,\n\t});\n\tcontext.camera.fitSpaceAtTarget(2.2, 2.2);\n\tcontext.add(\n\t\tnew TgdPainterClear(context, { depth: 1 }),\n\t\tnew TgdPainterSkybox(context, {\n\t\t\tcamera: context.camera,\n\t\t\ttexture: skybox,\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: \"less\",\n\t\t\tcull: \"back\",\n\t\t\tchildren: [mesh],\n\t\t}),\n\t);\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{ glb: { helmet: HelmetURL } }}\n\t\t\toptions={{ alpha: false }}\n\t\t\tcontroller={{ inertiaOrbit: 1000 }}\n\t\t\tgizmo\n\t\t/>\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_gltf_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_gltf/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_gltf/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_gltf/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_gltf/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_gltf/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/_gltf/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
58982(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _gltf__rspack_import_1 = __webpack_require__(91241);
/* import */ var _from__rspack_import_2 = __webpack_require__(69994);
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
        code: "code",
        h1: "h1",
        h2: "h2",
        hr: "hr",
        p: "p",
        pre: "pre",
        span: "span"
    }, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "glTF material"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdMaterialGltf"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                        lineNumber: 6,
                        columnNumber: 1
                    }, this),
                    " is a physically based material that uses the textures of a glTF file\n(albedo, normal, metallic/roughness, occlusion and emission) and a cube texture for the\nimage based lighting."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "It is the default material of ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterMeshGltf"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                        lineNumber: 10,
                        columnNumber: 31
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "There are two ways of creating this material."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "With the constructor"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "You give every texture yourself. This is the way to go if you want to pick\nthe textures from different places, or to replace some of them."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 16,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_gltf__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 19,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: [
                    "With ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdMaterialGltf.from()"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 21,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The static function ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "from()"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this),
                    " reads the glTF material of a mesh primitive\nand creates all the textures for you. You just tell it which mesh\n(",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "meshIndexOrName"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                        lineNumber: 25,
                        columnNumber: 2
                    }, this),
                    ", defaults to ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "0"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                        lineNumber: 25,
                        columnNumber: 33
                    }, this),
                    ") and which primitive (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "primitiveIndex"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                        lineNumber: 25,
                        columnNumber: 59
                    }, this),
                    ", defaults to ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "0"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                        lineNumber: 25,
                        columnNumber: 89
                    }, this),
                    ") to use."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 23,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Textures missing in the asset are replaced by 1x1 textures filled with sensible defaults\n(the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "baseColorFactor"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                        lineNumber: 28,
                        columnNumber: 6
                    }, this),
                    " for the albedo, a flat normal, no emission, ...).\nIf you don't provide a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "skybox"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                        lineNumber: 29,
                        columnNumber: 24
                    }, this),
                    ", a random bluish one is created."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 27,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx"
                        }, this),
                        " material = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdMaterialGltf"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "from"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx"
                        }, this),
                        "(context, {\n\tdata,\n\t",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "meshIndexOrName"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx"
                        }, this),
                        ",\n\t",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "primitiveIndex"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx"
                        }, this),
                        ",\n\tskybox,\n})\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                    lineNumber: 31,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 31,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_from__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 40,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 42,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                    lineNumber: 44,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
                lineNumber: 44,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/gltf/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9nbHRmX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZS1iMDAyNTkuM2UxYjAwZmQ4ZTA3YmY4OC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsdGYvX2Zyb20vZnJvbS5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9nbHRmL19mcm9tL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9nbHRmL19nbHRmL2dsdGYuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvZ2x0Zi9fZ2x0Zi9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvZ2x0Zi9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZE1hdGVyaWFsR2x0Zixcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlclNreWJveCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlQ3ViZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IEhlbG1ldFVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oZWxtZXQuZ2xiXCI7XG5pbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L3dhcmVob3VzZS9wb3NYLndlYnBcIjtcbmltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvd2FyZWhvdXNlL3Bvc1kud2VicFwiO1xuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC93YXJlaG91c2UvcG9zWi53ZWJwXCI7XG5pbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L3dhcmVob3VzZS9uZWdYLndlYnBcIjtcbmltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvd2FyZWhvdXNlL25lZ1kud2VicFwiO1xuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC93YXJlaG91c2UvbmVnWi53ZWJwXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuXHRjb25zdCBza3lib3ggPSBUZ2RUZXh0dXJlQ3ViZS5sYXp5TG9hZChjb250ZXh0LCB7XG5cdFx0c2l6ZTogMTAyNCxcblx0XHRwb3NYOiBQb3NYLFxuXHRcdHBvc1k6IFBvc1ksXG5cdFx0cG9zWjogUG9zWixcblx0XHRuZWdYOiBOZWdYLFxuXHRcdG5lZ1k6IE5lZ1ksXG5cdFx0bmVnWjogTmVnWixcblx0fSk7XG5cdGNvbnN0IHsgaGVsbWV0OiBkYXRhIH0gPSBhc3NldHMuZ2xiO1xuXHQvLyBBbGwgdGhlIHRleHR1cmVzIGFyZSByZWFkIGZyb20gdGhlIGdsVEYgbWF0ZXJpYWxcblx0Ly8gb2YgdGhlIGZpcnN0IHByaW1pdGl2ZSBvZiB0aGUgZmlyc3QgbWVzaC5cblx0Y29uc3QgbWF0ZXJpYWwgPSBUZ2RNYXRlcmlhbEdsdGYuZnJvbShjb250ZXh0LCB7XG5cdFx0ZGF0YSxcblx0XHRtZXNoSW5kZXhPck5hbWU6IDAsXG5cdFx0cHJpbWl0aXZlSW5kZXg6IDAsXG5cdFx0c2t5Ym94LFxuXHR9KTtcblx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG5cdFx0Z2VvbWV0cnk6IGRhdGEubWFrZUdlb21ldHJ5KCksXG5cdFx0dHJhbnNmbzogZGF0YS5jcmVhdGVUcmFuc2ZvRnJvbU5vZGUoZGF0YS5nZXROb2RlKDApKSxcblx0XHRtYXRlcmlhbCxcblx0fSk7XG5cdC8vICNlbmRcblx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLjIsIDIuMik7XG5cdGNvbnRleHQuYWRkKFxuXHRcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBkZXB0aDogMSB9KSxcblx0XHRuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XG5cdFx0XHRjYW1lcmE6IGNvbnRleHQuY2FtZXJhLFxuXHRcdFx0dGV4dHVyZTogc2t5Ym94LFxuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IFwibGVzc1wiLFxuXHRcdFx0Y3VsbDogXCJiYWNrXCIsXG5cdFx0XHRjaGlsZHJlbjogW21lc2hdLFxuXHRcdH0pLFxuXHQpO1xuXHRjb250ZXh0LnBhaW50KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRhc3NldHM9e3sgZ2xiOiB7IGhlbG1ldDogSGVsbWV0VVJMIH0gfX1cblx0XHRcdG9wdGlvbnM9e3sgYWxwaGE6IGZhbHNlIH19XG5cdFx0XHRjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fVxuXHRcdFx0Z2l6bW9cblx0XHQvPlxuXHQpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2Zyb20uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XCJcXHRjb25zdCBza3lib3ggPSBUZ2RUZXh0dXJlQ3ViZS5sYXp5TG9hZChjb250ZXh0LCB7XFxuXFx0XFx0c2l6ZTogMTAyNCxcXG5cXHRcXHRwb3NYOiBQb3NYLFxcblxcdFxcdHBvc1k6IFBvc1ksXFxuXFx0XFx0cG9zWjogUG9zWixcXG5cXHRcXHRuZWdYOiBOZWdYLFxcblxcdFxcdG5lZ1k6IE5lZ1ksXFxuXFx0XFx0bmVnWjogTmVnWixcXG5cXHR9KTtcXG5cXHRjb25zdCB7IGhlbG1ldDogZGF0YSB9ID0gYXNzZXRzLmdsYjtcXG5cXHQvLyBBbGwgdGhlIHRleHR1cmVzIGFyZSByZWFkIGZyb20gdGhlIGdsVEYgbWF0ZXJpYWxcXG5cXHQvLyBvZiB0aGUgZmlyc3QgcHJpbWl0aXZlIG9mIHRoZSBmaXJzdCBtZXNoLlxcblxcdGNvbnN0IG1hdGVyaWFsID0gVGdkTWF0ZXJpYWxHbHRmLmZyb20oY29udGV4dCwge1xcblxcdFxcdGRhdGEsXFxuXFx0XFx0bWVzaEluZGV4T3JOYW1lOiAwLFxcblxcdFxcdHByaW1pdGl2ZUluZGV4OiAwLFxcblxcdFxcdHNreWJveCxcXG5cXHR9KTtcXG5cXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRnZW9tZXRyeTogZGF0YS5tYWtlR2VvbWV0cnkoKSxcXG5cXHRcXHR0cmFuc2ZvOiBkYXRhLmNyZWF0ZVRyYW5zZm9Gcm9tTm9kZShkYXRhLmdldE5vZGUoMCkpLFxcblxcdFxcdG1hdGVyaWFsLFxcblxcdH0pO1wifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkTWF0ZXJpYWxHbHRmLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyTWVzaCxcXG5cXHRUZ2RQYWludGVyU2t5Ym94LFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlQ3ViZSxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxuaW1wb3J0IEhlbG1ldFVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL2hlbG1ldC5nbGJcXFwiO1xcbmltcG9ydCBQb3NYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC93YXJlaG91c2UvcG9zWC53ZWJwXFxcIjtcXG5pbXBvcnQgUG9zWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvd2FyZWhvdXNlL3Bvc1kud2VicFxcXCI7XFxuaW1wb3J0IFBvc1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L3dhcmVob3VzZS9wb3NaLndlYnBcXFwiO1xcbmltcG9ydCBOZWdYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC93YXJlaG91c2UvbmVnWC53ZWJwXFxcIjtcXG5pbXBvcnQgTmVnWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvd2FyZWhvdXNlL25lZ1kud2VicFxcXCI7XFxuaW1wb3J0IE5lZ1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L3dhcmVob3VzZS9uZWdaLndlYnBcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb25zdCBza3lib3ggPSBUZ2RUZXh0dXJlQ3ViZS5sYXp5TG9hZChjb250ZXh0LCB7XFxuXFx0XFx0c2l6ZTogMTAyNCxcXG5cXHRcXHRwb3NYOiBQb3NYLFxcblxcdFxcdHBvc1k6IFBvc1ksXFxuXFx0XFx0cG9zWjogUG9zWixcXG5cXHRcXHRuZWdYOiBOZWdYLFxcblxcdFxcdG5lZ1k6IE5lZ1ksXFxuXFx0XFx0bmVnWjogTmVnWixcXG5cXHR9KTtcXG5cXHRjb25zdCB7IGhlbG1ldDogZGF0YSB9ID0gYXNzZXRzLmdsYjtcXG5cXHQvLyBBbGwgdGhlIHRleHR1cmVzIGFyZSByZWFkIGZyb20gdGhlIGdsVEYgbWF0ZXJpYWxcXG5cXHQvLyBvZiB0aGUgZmlyc3QgcHJpbWl0aXZlIG9mIHRoZSBmaXJzdCBtZXNoLlxcblxcdGNvbnN0IG1hdGVyaWFsID0gVGdkTWF0ZXJpYWxHbHRmLmZyb20oY29udGV4dCwge1xcblxcdFxcdGRhdGEsXFxuXFx0XFx0bWVzaEluZGV4T3JOYW1lOiAwLFxcblxcdFxcdHByaW1pdGl2ZUluZGV4OiAwLFxcblxcdFxcdHNreWJveCxcXG5cXHR9KTtcXG5cXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRnZW9tZXRyeTogZGF0YS5tYWtlR2VvbWV0cnkoKSxcXG5cXHRcXHR0cmFuc2ZvOiBkYXRhLmNyZWF0ZVRyYW5zZm9Gcm9tTm9kZShkYXRhLmdldE5vZGUoMCkpLFxcblxcdFxcdG1hdGVyaWFsLFxcblxcdH0pO1xcblxcdGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMi4yLCAyLjIpO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBkZXB0aDogMSB9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XFxuXFx0XFx0XFx0Y2FtZXJhOiBjb250ZXh0LmNhbWVyYSxcXG5cXHRcXHRcXHR0ZXh0dXJlOiBza3lib3gsXFxuXFx0XFx0fSksXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0ZGVwdGg6IFxcXCJsZXNzXFxcIixcXG5cXHRcXHRcXHRjdWxsOiBcXFwiYmFja1xcXCIsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFttZXNoXSxcXG5cXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRhc3NldHM9e3sgZ2xiOiB7IGhlbG1ldDogSGVsbWV0VVJMIH0gfX1cXG5cXHRcXHRcXHRvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fVxcblxcdFxcdFxcdGNvbnRyb2xsZXI9e3sgaW5lcnRpYU9yYml0OiAxMDAwIH19XFxuXFx0XFx0XFx0Z2l6bW9cXG5cXHRcXHQvPlxcblxcdCk7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZE1hdGVyaWFsR2x0Zixcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlclNreWJveCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlQ3ViZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IEhlbG1ldFVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oZWxtZXQuZ2xiXCI7XG5pbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L3dhcmVob3VzZS9wb3NYLndlYnBcIjtcbmltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvd2FyZWhvdXNlL3Bvc1kud2VicFwiO1xuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC93YXJlaG91c2UvcG9zWi53ZWJwXCI7XG5pbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L3dhcmVob3VzZS9uZWdYLndlYnBcIjtcbmltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvd2FyZWhvdXNlL25lZ1kud2VicFwiO1xuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC93YXJlaG91c2UvbmVnWi53ZWJwXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuXHRjb25zdCBza3lib3ggPSBUZ2RUZXh0dXJlQ3ViZS5sYXp5TG9hZChjb250ZXh0LCB7XG5cdFx0c2l6ZTogMTAyNCxcblx0XHRwb3NYOiBQb3NYLFxuXHRcdHBvc1k6IFBvc1ksXG5cdFx0cG9zWjogUG9zWixcblx0XHRuZWdYOiBOZWdYLFxuXHRcdG5lZ1k6IE5lZ1ksXG5cdFx0bmVnWjogTmVnWixcblx0fSk7XG5cdGNvbnN0IHsgaGVsbWV0OiBhc3NldCB9ID0gYXNzZXRzLmdsYjtcblx0Y29uc3QgZ2x0Zk1hdGVyaWFsID0gYXNzZXQuZ2V0TWF0ZXJpYWwoMCk7XG5cdGNvbnN0IHBiciA9IGdsdGZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcztcblx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbHRmKHtcblx0XHR0ZXh0dXJlczoge1xuXHRcdFx0YWxiZWRvOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgcGJyPy5iYXNlQ29sb3JUZXh0dXJlPy5pbmRleCA/PyAwKSxcblx0XHRcdC8vIGdsVEYgc3RvcmVzIHJvdWdobmVzcyBpbiBHUkVFTiBhbmQgbWV0YWxsaWMgaW4gQkxVRS5cblx0XHRcdG1ldGFsbGljUm91Z2huZXNzOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHRcdHBicj8ubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlPy5pbmRleCA/PyAwLFxuXHRcdFx0KSxcblx0XHRcdG5vcm1hbDogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGdsdGZNYXRlcmlhbC5ub3JtYWxUZXh0dXJlPy5pbmRleCA/PyAwKSxcblx0XHRcdG9jY2x1c2lvbjogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGdsdGZNYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlPy5pbmRleCA/PyAwKSxcblx0XHRcdGVtaXNzaW9uOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgZ2x0Zk1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZT8uaW5kZXggPz8gMCksXG5cdFx0XHRza3lib3gsXG5cdFx0fSxcblx0fSk7XG5cdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuXHRcdGdlb21ldHJ5OiBhc3NldC5tYWtlR2VvbWV0cnkoKSxcblx0XHR0cmFuc2ZvOiBhc3NldC5jcmVhdGVUcmFuc2ZvRnJvbU5vZGUoYXNzZXQuZ2V0Tm9kZSgwKSksXG5cdFx0bWF0ZXJpYWwsXG5cdH0pO1xuXHQvLyAjZW5kXG5cdGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMi4yLCAyLjIpO1xuXHRjb250ZXh0LmFkZChcblx0XHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgZGVwdGg6IDEgfSksXG5cdFx0bmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xuXHRcdFx0Y2FtZXJhOiBjb250ZXh0LmNhbWVyYSxcblx0XHRcdHRleHR1cmU6IHNreWJveCxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiBcImxlc3NcIixcblx0XHRcdGN1bGw6IFwiYmFja1wiLFxuXHRcdFx0Y2hpbGRyZW46IFttZXNoXSxcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wYWludCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0YXNzZXRzPXt7IGdsYjogeyBoZWxtZXQ6IEhlbG1ldFVSTCB9IH19XG5cdFx0XHRvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fVxuXHRcdFx0Y29udHJvbGxlcj17eyBpbmVydGlhT3JiaXQ6IDEwMDAgfX1cblx0XHRcdGdpem1vXG5cdFx0Lz5cblx0KTtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9nbHRmLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiXFx0Y29uc3Qgc2t5Ym94ID0gVGdkVGV4dHVyZUN1YmUubGF6eUxvYWQoY29udGV4dCwge1xcblxcdFxcdHNpemU6IDEwMjQsXFxuXFx0XFx0cG9zWDogUG9zWCxcXG5cXHRcXHRwb3NZOiBQb3NZLFxcblxcdFxcdHBvc1o6IFBvc1osXFxuXFx0XFx0bmVnWDogTmVnWCxcXG5cXHRcXHRuZWdZOiBOZWdZLFxcblxcdFxcdG5lZ1o6IE5lZ1osXFxuXFx0fSk7XFxuXFx0Y29uc3QgeyBoZWxtZXQ6IGFzc2V0IH0gPSBhc3NldHMuZ2xiO1xcblxcdGNvbnN0IGdsdGZNYXRlcmlhbCA9IGFzc2V0LmdldE1hdGVyaWFsKDApO1xcblxcdGNvbnN0IHBiciA9IGdsdGZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcztcXG5cXHRjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsdGYoe1xcblxcdFxcdHRleHR1cmVzOiB7XFxuXFx0XFx0XFx0YWxiZWRvOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgcGJyPy5iYXNlQ29sb3JUZXh0dXJlPy5pbmRleCA/PyAwKSxcXG5cXHRcXHRcXHQvLyBnbFRGIHN0b3JlcyByb3VnaG5lc3MgaW4gR1JFRU4gYW5kIG1ldGFsbGljIGluIEJMVUUuXFxuXFx0XFx0XFx0bWV0YWxsaWNSb3VnaG5lc3M6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChcXG5cXHRcXHRcXHRcXHRjb250ZXh0LFxcblxcdFxcdFxcdFxcdHBicj8ubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlPy5pbmRleCA/PyAwLFxcblxcdFxcdFxcdCksXFxuXFx0XFx0XFx0bm9ybWFsOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgZ2x0Zk1hdGVyaWFsLm5vcm1hbFRleHR1cmU/LmluZGV4ID8/IDApLFxcblxcdFxcdFxcdG9jY2x1c2lvbjogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGdsdGZNYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlPy5pbmRleCA/PyAwKSxcXG5cXHRcXHRcXHRlbWlzc2lvbjogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGdsdGZNYXRlcmlhbC5lbWlzc2l2ZVRleHR1cmU/LmluZGV4ID8/IDApLFxcblxcdFxcdFxcdHNreWJveCxcXG5cXHRcXHR9LFxcblxcdH0pO1xcblxcdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcblxcdFxcdGdlb21ldHJ5OiBhc3NldC5tYWtlR2VvbWV0cnkoKSxcXG5cXHRcXHR0cmFuc2ZvOiBhc3NldC5jcmVhdGVUcmFuc2ZvRnJvbU5vZGUoYXNzZXQuZ2V0Tm9kZSgwKSksXFxuXFx0XFx0bWF0ZXJpYWwsXFxuXFx0fSk7XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdHR5cGUgVGdkQ29udGV4dCxcXG5cXHRUZ2RNYXRlcmlhbEdsdGYsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJNZXNoLFxcblxcdFRnZFBhaW50ZXJTa3lib3gsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFRleHR1cmVDdWJlLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5cXG5pbXBvcnQgSGVsbWV0VVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvaGVsbWV0LmdsYlxcXCI7XFxuaW1wb3J0IFBvc1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L3dhcmVob3VzZS9wb3NYLndlYnBcXFwiO1xcbmltcG9ydCBQb3NZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC93YXJlaG91c2UvcG9zWS53ZWJwXFxcIjtcXG5pbXBvcnQgUG9zWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvd2FyZWhvdXNlL3Bvc1oud2VicFxcXCI7XFxuaW1wb3J0IE5lZ1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L3dhcmVob3VzZS9uZWdYLndlYnBcXFwiO1xcbmltcG9ydCBOZWdZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC93YXJlaG91c2UvbmVnWS53ZWJwXFxcIjtcXG5pbXBvcnQgTmVnWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvd2FyZWhvdXNlL25lZ1oud2VicFxcXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IHNreWJveCA9IFRnZFRleHR1cmVDdWJlLmxhenlMb2FkKGNvbnRleHQsIHtcXG5cXHRcXHRzaXplOiAxMDI0LFxcblxcdFxcdHBvc1g6IFBvc1gsXFxuXFx0XFx0cG9zWTogUG9zWSxcXG5cXHRcXHRwb3NaOiBQb3NaLFxcblxcdFxcdG5lZ1g6IE5lZ1gsXFxuXFx0XFx0bmVnWTogTmVnWSxcXG5cXHRcXHRuZWdaOiBOZWdaLFxcblxcdH0pO1xcblxcdGNvbnN0IHsgaGVsbWV0OiBhc3NldCB9ID0gYXNzZXRzLmdsYjtcXG5cXHRjb25zdCBnbHRmTWF0ZXJpYWwgPSBhc3NldC5nZXRNYXRlcmlhbCgwKTtcXG5cXHRjb25zdCBwYnIgPSBnbHRmTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3M7XFxuXFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbHRmKHtcXG5cXHRcXHR0ZXh0dXJlczoge1xcblxcdFxcdFxcdGFsYmVkbzogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIHBicj8uYmFzZUNvbG9yVGV4dHVyZT8uaW5kZXggPz8gMCksXFxuXFx0XFx0XFx0Ly8gZ2xURiBzdG9yZXMgcm91Z2huZXNzIGluIEdSRUVOIGFuZCBtZXRhbGxpYyBpbiBCTFVFLlxcblxcdFxcdFxcdG1ldGFsbGljUm91Z2huZXNzOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoXFxuXFx0XFx0XFx0XFx0Y29udGV4dCxcXG5cXHRcXHRcXHRcXHRwYnI/Lm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZT8uaW5kZXggPz8gMCxcXG5cXHRcXHRcXHQpLFxcblxcdFxcdFxcdG5vcm1hbDogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGdsdGZNYXRlcmlhbC5ub3JtYWxUZXh0dXJlPy5pbmRleCA/PyAwKSxcXG5cXHRcXHRcXHRvY2NsdXNpb246IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBnbHRmTWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZT8uaW5kZXggPz8gMCksXFxuXFx0XFx0XFx0ZW1pc3Npb246IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBnbHRmTWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlPy5pbmRleCA/PyAwKSxcXG5cXHRcXHRcXHRza3lib3gsXFxuXFx0XFx0fSxcXG5cXHR9KTtcXG5cXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRnZW9tZXRyeTogYXNzZXQubWFrZUdlb21ldHJ5KCksXFxuXFx0XFx0dHJhbnNmbzogYXNzZXQuY3JlYXRlVHJhbnNmb0Zyb21Ob2RlKGFzc2V0LmdldE5vZGUoMCkpLFxcblxcdFxcdG1hdGVyaWFsLFxcblxcdH0pO1xcblxcdGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMi4yLCAyLjIpO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBkZXB0aDogMSB9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XFxuXFx0XFx0XFx0Y2FtZXJhOiBjb250ZXh0LmNhbWVyYSxcXG5cXHRcXHRcXHR0ZXh0dXJlOiBza3lib3gsXFxuXFx0XFx0fSksXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0ZGVwdGg6IFxcXCJsZXNzXFxcIixcXG5cXHRcXHRcXHRjdWxsOiBcXFwiYmFja1xcXCIsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFttZXNoXSxcXG5cXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRhc3NldHM9e3sgZ2xiOiB7IGhlbG1ldDogSGVsbWV0VVJMIH0gfX1cXG5cXHRcXHRcXHRvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fVxcblxcdFxcdFxcdGNvbnRyb2xsZXI9e3sgaW5lcnRpYU9yYml0OiAxMDAwIH19XFxuXFx0XFx0XFx0Z2l6bW9cXG5cXHRcXHQvPlxcblxcdCk7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZE1hdGVyaWFsR2x0ZiIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclNreWJveCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmVDdWJlIiwiVmlldyIsIkhlbG1ldFVSTCIsIlBvc1giLCJQb3NZIiwiUG9zWiIsIk5lZ1giLCJOZWdZIiwiTmVnWiIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwic2t5Ym94IiwiX2Fzc2V0c19nbGIiLCJkYXRhIiwibWF0ZXJpYWwiLCJtZXNoIiwiRGVtbyIsIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiX3Bicl9iYXNlQ29sb3JUZXh0dXJlIiwiX3Bicl9tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUiLCJfZ2x0Zk1hdGVyaWFsX25vcm1hbFRleHR1cmUiLCJfZ2x0Zk1hdGVyaWFsX29jY2x1c2lvblRleHR1cmUiLCJfZ2x0Zk1hdGVyaWFsX2VtaXNzaXZlVGV4dHVyZSIsImFzc2V0IiwiZ2x0Zk1hdGVyaWFsIiwicGJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXdCO0FBQ2tDO0FBRVQ7QUFDWTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFN0QsU0FBU2MsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUNoRCw0QkFBNEI7SUFDNUIsSUFBTUMsU0FBU1osdURBQXVCLENBQUNVLFNBQVM7UUFDL0MsTUFBTTtRQUNOLE1BQU1QLHlEQUFJQTtRQUNWLE1BQU1DLHlEQUFJQTtRQUNWLE1BQU1DLHlEQUFJQTtRQUNWLE1BQU1DLHlEQUFJQTtRQUNWLE1BQU1DLHlEQUFJQTtRQUNWLE1BQU1DLHlEQUFJQTtJQUNYO0lBQ0EsSUFBeUJLLGNBQUFBLE9BQU8sR0FBRyxFQUFuQkMsT0FBU0QsWUFBakI7SUFDUixtREFBbUQ7SUFDbkQsNENBQTRDO0lBQzVDLElBQU1FLFdBQVdwQixvREFBb0IsQ0FBQ2UsU0FBUztRQUM5Q0ksTUFBQUE7UUFDQSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCRixRQUFBQTtJQUNEO0lBQ0EsSUFBTUksT0FBTyxJQUFJbkIsOENBQWNBLENBQUNhLFNBQVM7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