"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_deferred-shading_page_mdx-src_components_demo_CodeViewer_CodeViewer_-f5e52b"], {
74167(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/helmet.d635f1c712b5efea.glb";

},
63458(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _components_demo_Tgd__rspack_import_4 = __webpack_require__(43475);
/* import */ var _assets_mesh_helmet_glb__rspack_import_5 = __webpack_require__(74167);
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






function init(context, assets, refGroups) {
    var _ref, _ref1, _ref2, _ref3;
    var _gltfMaterial_pbrMetallicRoughness_baseColorTexture, _gltfMaterial_pbrMetallicRoughness, _gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture, _gltfMaterial_pbrMetallicRoughness1, _gltfMaterial_occlusionTexture, _gltfMaterial_normalTexture, _gltfMaterial_emissiveTexture;
    // #begin Initializing WebGL
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialFaceOrientation();
    // Metallic grows from left to right, and specular from top to bottom.
    // Roughness and baked AO keep their default values (0.5 and 1.0).
    var box = {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox(),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: [
                0,
                0,
                0
            ],
            distance: 2
        }),
        visible: true,
        material: material,
        textures: {
            metallic: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
                load: (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateGradientHorizontal)(64, [
                    "#000",
                    "#fff"
                ])
            }),
            specular: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
                load: (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateCreateGradientvertical)(64, [
                    "#000",
                    "#fff"
                ])
            })
        }
    };
    // The helmet comes with glTF PBR textures:
    // - metallicRoughnessTexture: metallic in BLUE, roughness in GREEN.
    // - occlusionTexture: baked ambient occlusion in RED.
    // - normalTexture: normal map that bends the normals to simulate bumps.
    // - emissiveTexture: color of the light emitted by the surface.
    //   The geometry has no tangents, so they are computed from the UV coordinates.
    // The `...Channel` attributes tell which channel to read in each texture (RED by default).
    // There is no specular texture in this file: the default value (0.5) is used.
    var _assets_glb = assets.glb, asset = _assets_glb.helmet;
    var gltfMaterial = asset.getMaterial(0);
    var indexBaseColor = (_ref = (_gltfMaterial_pbrMetallicRoughness = gltfMaterial.pbrMetallicRoughness) === null || _gltfMaterial_pbrMetallicRoughness === void 0 ? void 0 : (_gltfMaterial_pbrMetallicRoughness_baseColorTexture = _gltfMaterial_pbrMetallicRoughness.baseColorTexture) === null || _gltfMaterial_pbrMetallicRoughness_baseColorTexture === void 0 ? void 0 : _gltfMaterial_pbrMetallicRoughness_baseColorTexture.index) !== null && _ref !== void 0 ? _ref : 0;
    var indexMetallicRoughness = (_ref1 = (_gltfMaterial_pbrMetallicRoughness1 = gltfMaterial.pbrMetallicRoughness) === null || _gltfMaterial_pbrMetallicRoughness1 === void 0 ? void 0 : (_gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture = _gltfMaterial_pbrMetallicRoughness1.metallicRoughnessTexture) === null || _gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture === void 0 ? void 0 : _gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture.index) !== null && _ref1 !== void 0 ? _ref1 : 0;
    var indexOcclusion = (_ref2 = (_gltfMaterial_occlusionTexture = gltfMaterial.occlusionTexture) === null || _gltfMaterial_occlusionTexture === void 0 ? void 0 : _gltfMaterial_occlusionTexture.index) !== null && _ref2 !== void 0 ? _ref2 : 0;
    var indexNormals = (_ref3 = (_gltfMaterial_normalTexture = gltfMaterial.normalTexture) === null || _gltfMaterial_normalTexture === void 0 ? void 0 : _gltfMaterial_normalTexture.index) !== null && _ref3 !== void 0 ? _ref3 : 0;
    // The emission texture is optional in glTF.
    var indexEmission = (_gltfMaterial_emissiveTexture = gltfMaterial.emissiveTexture) === null || _gltfMaterial_emissiveTexture === void 0 ? void 0 : _gltfMaterial_emissiveTexture.index;
    var textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness);
    var helmet = {
        geometry: asset.makeGeometry(),
        transfo: asset.createTransfoFromNode(asset.getNode(0)),
        visible: true,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlatTexture({
            texture: asset.createTexture2D(context, indexBaseColor)
        }),
        textures: {
            normals: asset.createTexture2D(context, indexNormals),
            metallic: textureMetallicRoughness,
            metallicChannel: "b",
            roughness: textureMetallicRoughness,
            roughnessChannel: "g",
            bakedAO: asset.createTexture2D(context, indexOcclusion),
            bakedAOChannel: "r",
            emission: indexEmission === undefined ? undefined : asset.createTexture2D(context, indexEmission)
        }
    };
    var meshes = [
        box,
        helmet
    ];
    var deferred = new _tolokoban_tgd__rspack_import_1.TgdPainterDeferredShading(context, {
        meshes: meshes
    });
    var makeBackground = function makeBackground(texture) {
        return new _tolokoban_tgd__rspack_import_1.TgdPainterGroup([
            new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(context, {
                texture: texture,
                scaleY: -1
            })
        ]);
    };
    var groups = {
        scene: makeBackground(deferred.textureAlbedo),
        normals: makeBackground(deferred.textureNormals),
        depth: new _tolokoban_tgd__rspack_import_1.TgdPainterGroup([
            new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
                texture: deferred.textureDepth,
                filters: [
                    makeFilterLinearDepth(context)
                ],
                flipY: true
            })
        ]),
        albedo: makeBackground(deferred.textureAlbedo),
        material: makeBackground(deferred.textureMetallicRoughnessSpecularBakedAO),
        emission: makeBackground(deferred.textureEmission)
    };
    refGroups.current = groups;
    applyMode(groups, "scene");
    context.add(deferred, new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.3,
            0.22,
            0,
            1
        ],
        depth: 1
    }), // The scene is the albedo texture, blended over the clear color.
    new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "off",
        cull: "off",
        blend: "alpha",
        children: [
            groups.scene
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "off",
        cull: "off",
        blend: "off",
        children: [
            groups.depth,
            groups.normals,
            groups.albedo,
            groups.material,
            groups.emission
        ]
    }), function(_time, delta) {
        box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94);
    });
    // A short depth range makes the linearized depth easier to see.
    context.camera.near = 1;
    context.camera.far = 20;
    context.camera.fitSpaceAtTarget(5, 5);
    context.play();
// #end
}
function Demo() {
    var refContext = react__rspack_import_3_default().useRef(null);
    var refGroups = react__rspack_import_3_default().useRef(null);
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState("scene"), 2), mode = _React_useState[0], setMode = _React_useState[1];
    var handleModeChange = function handleModeChange(value) {
        setMode(value);
        var context = refContext.current;
        var groups = refGroups.current;
        if (!context || !groups) return;
        applyMode(groups, value);
        context.paint();
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_4["default"], {
        onReady: function onReady(context, assets) {
            refContext.current = context;
            init(context, assets, refGroups);
        },
        assets: {
            glb: {
                helmet: _assets_mesh_helmet_glb__rspack_import_5
            }
        },
        controller: {
            inertiaOrbit: 1000
        },
        gizmo: true,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewOptions, {
                value: mode,
                onChange: handleModeChange,
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: "scene"
                    }, "scene", false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/deferred-shading.demo.tsx",
                        lineNumber: 154,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: "normals"
                    }, "normals", false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/deferred-shading.demo.tsx",
                        lineNumber: 155,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: "depth"
                    }, "depth", false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/deferred-shading.demo.tsx",
                        lineNumber: 156,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: "albedo"
                    }, "albedo", false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/deferred-shading.demo.tsx",
                        lineNumber: 157,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: "material"
                    }, "material", false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/deferred-shading.demo.tsx",
                        lineNumber: 158,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: "emission"
                    }, "emission", false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/deferred-shading.demo.tsx",
                        lineNumber: 159,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/deferred-shading.demo.tsx",
                lineNumber: 153,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/deferred-shading.demo.tsx",
            lineNumber: 152,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/deferred-shading.demo.tsx",
        lineNumber: 144,
        columnNumber: 9
    }, this);
}
// #begin applyMode()
/**
 * Show the scene, or one of the textures of the deferred shading.
 */ function applyMode(groups, mode) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.keys(groups)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            groups[key].active = key === mode;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
// #end
// #begin makeFilterLinearDepth()
/**
 * The depth texture is not linear with a perspective camera.
 * This filter unprojects it to show the distance from the camera
 * between 0 (near plane) and 1 (far plane).
 */ function makeFilterLinearDepth(context) {
    return new _tolokoban_tgd__rspack_import_1.TgdFilter({
        uniforms: {
            uniProjectionMatrixInverse: "mat4",
            uniNear: "float",
            uniFar: "float"
        },
        fragmentShaderCode: [
            "float depth = texture(uniTexture, varUV).r;",
            "vec4 p = uniProjectionMatrixInverse * vec4(0.0, 0.0, depth * 2.0 - 1.0, 1.0);",
            "float z = (-p.z / p.w - uniNear) / (uniFar - uniNear);",
            "FragColor = vec4(vec3(z), 1.0);"
        ],
        setUniforms: function setUniforms(param) {
            var program = param.program;
            var camera = context.camera;
            program.uniformMatrix4fv("uniProjectionMatrixInverse", camera.matrixProjectionInverse);
            program.uniform1f("uniNear", camera.near);
            program.uniform1f("uniFar", camera.far);
        }
    });
} // #end


},
71445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _deferred_shading_demo__rspack_import_4 = __webpack_require__(63458);
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
    "Initializing WebGL": "    const material = new TgdMaterialFaceOrientation()\n    // Metallic grows from left to right, and specular from top to bottom.\n    // Roughness and baked AO keep their default values (0.5 and 1.0).\n    const box: TgdMeshWithTextures = {\n        geometry: new TgdGeometryBox(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),\n        visible: true,\n        material,\n        textures: {\n            metallic: new TgdTexture2D(context, {\n                load: tgdCanvasCreateGradientHorizontal(64, [\"#000\", \"#fff\"]),\n            }),\n            specular: new TgdTexture2D(context, {\n                load: tgdCanvasCreateCreateGradientvertical(64, [\"#000\", \"#fff\"]),\n            }),\n        },\n    }\n    // The helmet comes with glTF PBR textures:\n    // - metallicRoughnessTexture: metallic in BLUE, roughness in GREEN.\n    // - occlusionTexture: baked ambient occlusion in RED.\n    // - normalTexture: normal map that bends the normals to simulate bumps.\n    // - emissiveTexture: color of the light emitted by the surface.\n    //   The geometry has no tangents, so they are computed from the UV coordinates.\n    // The `...Channel` attributes tell which channel to read in each texture (RED by default).\n    // There is no specular texture in this file: the default value (0.5) is used.\n    const { helmet: asset } = assets.glb\n    const gltfMaterial = asset.getMaterial(0)\n    const indexBaseColor = gltfMaterial.pbrMetallicRoughness?.baseColorTexture?.index ?? 0\n    const indexMetallicRoughness = gltfMaterial.pbrMetallicRoughness?.metallicRoughnessTexture?.index ?? 0\n    const indexOcclusion = gltfMaterial.occlusionTexture?.index ?? 0\n    const indexNormals = gltfMaterial.normalTexture?.index ?? 0\n    // The emission texture is optional in glTF.\n    const indexEmission = gltfMaterial.emissiveTexture?.index\n    const textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness)\n    const helmet: TgdMeshWithTextures = {\n        geometry: asset.makeGeometry(),\n        transfo: asset.createTransfoFromNode(asset.getNode(0)),\n        visible: true,\n        material: new TgdMaterialFlatTexture({\n            texture: asset.createTexture2D(context, indexBaseColor),\n        }),\n        textures: {\n            normals: asset.createTexture2D(context, indexNormals),\n            metallic: textureMetallicRoughness,\n            metallicChannel: \"b\",\n            roughness: textureMetallicRoughness,\n            roughnessChannel: \"g\",\n            bakedAO: asset.createTexture2D(context, indexOcclusion),\n            bakedAOChannel: \"r\",\n            emission: indexEmission === undefined ? undefined : asset.createTexture2D(context, indexEmission),\n        },\n    }\n    const meshes = [box, helmet]\n    const deferred = new TgdPainterDeferredShading(context, { meshes })\n    const makeBackground = (texture: TgdTexture2D) =>\n        new TgdPainterGroup([new TgdPainterBackground(context, { texture, scaleY: -1 })])\n    const groups: Groups = {\n        scene: makeBackground(deferred.textureAlbedo),\n        normals: makeBackground(deferred.textureNormals),\n        depth: new TgdPainterGroup([\n            new TgdPainterFilter(context, {\n                texture: deferred.textureDepth,\n                filters: [makeFilterLinearDepth(context)],\n                flipY: true,\n            }),\n        ]),\n        albedo: makeBackground(deferred.textureAlbedo),\n        material: makeBackground(deferred.textureMetallicRoughnessSpecularBakedAO),\n        emission: makeBackground(deferred.textureEmission),\n    }\n    refGroups.current = groups\n    applyMode(groups, \"scene\")\n    context.add(\n        deferred,\n        new TgdPainterClear(context, { color: [0.3, 0.22, 0, 1], depth: 1 }),\n        // The scene is the albedo texture, blended over the clear color.\n        new TgdPainterState(context, {\n            depth: \"off\",\n            cull: \"off\",\n            blend: \"alpha\",\n            children: [groups.scene],\n        }),\n        new TgdPainterState(context, {\n            depth: \"off\",\n            cull: \"off\",\n            blend: \"off\",\n            children: [groups.depth, groups.normals, groups.albedo, groups.material, groups.emission],\n        }),\n        (_time, delta) => {\n            box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94)\n        },\n    )\n    // A short depth range makes the linearized depth easier to see.\n    context.camera.near = 1\n    context.camera.far = 20\n    context.camera.fitSpaceAtTarget(5, 5)\n    context.play()",
    "applyMode()": "/**\n * Show the scene, or one of the textures of the deferred shading.\n */\nfunction applyMode(groups: Groups, mode: Mode) {\n    for (const key of Object.keys(groups) as Mode[]) {\n        groups[key].active = key === mode\n    }\n}",
    "makeFilterLinearDepth()": "/**\n * The depth texture is not linear with a perspective camera.\n * This filter unprojects it to show the distance from the camera\n * between 0 (near plane) and 1 (far plane).\n */\nfunction makeFilterLinearDepth(context: TgdContext) {\n    return new TgdFilter({\n        uniforms: {\n            uniProjectionMatrixInverse: \"mat4\",\n            uniNear: \"float\",\n            uniFar: \"float\",\n        },\n        fragmentShaderCode: [\n            \"float depth = texture(uniTexture, varUV).r;\",\n            \"vec4 p = uniProjectionMatrixInverse * vec4(0.0, 0.0, depth * 2.0 - 1.0, 1.0);\",\n            \"float z = (-p.z / p.w - uniNear) / (uniFar - uniNear);\",\n            \"FragColor = vec4(vec3(z), 1.0);\",\n        ],\n        setUniforms: ({ program }) => {\n            const { camera } = context\n            program.uniformMatrix4fv(\"uniProjectionMatrixInverse\", camera.matrixProjectionInverse)\n            program.uniform1f(\"uniNear\", camera.near)\n            program.uniform1f(\"uniFar\", camera.far)\n        },\n    })\n}"
};
var FULL = "import {\n    type TgdContext,\n    TgdFilter,\n    TgdGeometryBox,\n    TgdMaterialFaceOrientation,\n    TgdMaterialFlatTexture,\n    type TgdMeshWithTextures,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterDeferredShading,\n    TgdPainterFilter,\n    TgdPainterGroup,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdTransfo,\n    tgdCanvasCreateCreateGradientvertical,\n    tgdCanvasCreateGradientHorizontal,\n} from \"@tolokoban/tgd\"\nimport { ViewOptions, ViewPanel } from \"@tolokoban/ui\"\nimport React from \"react\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport HelmetURL from \"@/assets/mesh/helmet.glb\"\n\ntype Mode = \"scene\" | \"normals\" | \"depth\" | \"albedo\" | \"material\" | \"emission\"\n\ntype Groups = Record<Mode, TgdPainterGroup>\n\nfunction init(context: TgdContext, assets: Assets, refGroups: { current: Groups | null }) {\n    const material = new TgdMaterialFaceOrientation()\n    // Metallic grows from left to right, and specular from top to bottom.\n    // Roughness and baked AO keep their default values (0.5 and 1.0).\n    const box: TgdMeshWithTextures = {\n        geometry: new TgdGeometryBox(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),\n        visible: true,\n        material,\n        textures: {\n            metallic: new TgdTexture2D(context, {\n                load: tgdCanvasCreateGradientHorizontal(64, [\"#000\", \"#fff\"]),\n            }),\n            specular: new TgdTexture2D(context, {\n                load: tgdCanvasCreateCreateGradientvertical(64, [\"#000\", \"#fff\"]),\n            }),\n        },\n    }\n    // The helmet comes with glTF PBR textures:\n    // - metallicRoughnessTexture: metallic in BLUE, roughness in GREEN.\n    // - occlusionTexture: baked ambient occlusion in RED.\n    // - normalTexture: normal map that bends the normals to simulate bumps.\n    // - emissiveTexture: color of the light emitted by the surface.\n    //   The geometry has no tangents, so they are computed from the UV coordinates.\n    // The `...Channel` attributes tell which channel to read in each texture (RED by default).\n    // There is no specular texture in this file: the default value (0.5) is used.\n    const { helmet: asset } = assets.glb\n    const gltfMaterial = asset.getMaterial(0)\n    const indexBaseColor = gltfMaterial.pbrMetallicRoughness?.baseColorTexture?.index ?? 0\n    const indexMetallicRoughness = gltfMaterial.pbrMetallicRoughness?.metallicRoughnessTexture?.index ?? 0\n    const indexOcclusion = gltfMaterial.occlusionTexture?.index ?? 0\n    const indexNormals = gltfMaterial.normalTexture?.index ?? 0\n    // The emission texture is optional in glTF.\n    const indexEmission = gltfMaterial.emissiveTexture?.index\n    const textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness)\n    const helmet: TgdMeshWithTextures = {\n        geometry: asset.makeGeometry(),\n        transfo: asset.createTransfoFromNode(asset.getNode(0)),\n        visible: true,\n        material: new TgdMaterialFlatTexture({\n            texture: asset.createTexture2D(context, indexBaseColor),\n        }),\n        textures: {\n            normals: asset.createTexture2D(context, indexNormals),\n            metallic: textureMetallicRoughness,\n            metallicChannel: \"b\",\n            roughness: textureMetallicRoughness,\n            roughnessChannel: \"g\",\n            bakedAO: asset.createTexture2D(context, indexOcclusion),\n            bakedAOChannel: \"r\",\n            emission: indexEmission === undefined ? undefined : asset.createTexture2D(context, indexEmission),\n        },\n    }\n    const meshes = [box, helmet]\n    const deferred = new TgdPainterDeferredShading(context, { meshes })\n    const makeBackground = (texture: TgdTexture2D) =>\n        new TgdPainterGroup([new TgdPainterBackground(context, { texture, scaleY: -1 })])\n    const groups: Groups = {\n        scene: makeBackground(deferred.textureAlbedo),\n        normals: makeBackground(deferred.textureNormals),\n        depth: new TgdPainterGroup([\n            new TgdPainterFilter(context, {\n                texture: deferred.textureDepth,\n                filters: [makeFilterLinearDepth(context)],\n                flipY: true,\n            }),\n        ]),\n        albedo: makeBackground(deferred.textureAlbedo),\n        material: makeBackground(deferred.textureMetallicRoughnessSpecularBakedAO),\n        emission: makeBackground(deferred.textureEmission),\n    }\n    refGroups.current = groups\n    applyMode(groups, \"scene\")\n    context.add(\n        deferred,\n        new TgdPainterClear(context, { color: [0.3, 0.22, 0, 1], depth: 1 }),\n        // The scene is the albedo texture, blended over the clear color.\n        new TgdPainterState(context, {\n            depth: \"off\",\n            cull: \"off\",\n            blend: \"alpha\",\n            children: [groups.scene],\n        }),\n        new TgdPainterState(context, {\n            depth: \"off\",\n            cull: \"off\",\n            blend: \"off\",\n            children: [groups.depth, groups.normals, groups.albedo, groups.material, groups.emission],\n        }),\n        (_time, delta) => {\n            box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94)\n        },\n    )\n    // A short depth range makes the linearized depth easier to see.\n    context.camera.near = 1\n    context.camera.far = 20\n    context.camera.fitSpaceAtTarget(5, 5)\n    context.play()\n}\n\nexport default function Demo() {\n    const refContext = React.useRef<TgdContext | null>(null)\n    const refGroups = React.useRef<Groups | null>(null)\n    const [mode, setMode] = React.useState<Mode>(\"scene\")\n    const handleModeChange = (value: Mode) => {\n        setMode(value)\n        const context = refContext.current\n        const groups = refGroups.current\n        if (!context || !groups) return\n\n        applyMode(groups, value)\n        context.paint()\n    }\n    return (\n        <View\n            onReady={(context: TgdContext, assets: Assets) => {\n                refContext.current = context\n                init(context, assets, refGroups)\n            }}\n            assets={{ glb: { helmet: HelmetURL } }}\n            controller={{ inertiaOrbit: 1000 }}\n            gizmo>\n            <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" flexWrap=\"wrap\">\n                <ViewOptions value={mode} onChange={handleModeChange}>\n                    <div key=\"scene\">scene</div>\n                    <div key=\"normals\">normals</div>\n                    <div key=\"depth\">depth</div>\n                    <div key=\"albedo\">albedo</div>\n                    <div key=\"material\">material</div>\n                    <div key=\"emission\">emission</div>\n                </ViewOptions>\n            </ViewPanel>\n        </View>\n    )\n}\n\n/**\n * Show the scene, or one of the textures of the deferred shading.\n */\nfunction applyMode(groups: Groups, mode: Mode) {\n    for (const key of Object.keys(groups) as Mode[]) {\n        groups[key].active = key === mode\n    }\n}\n\n/**\n * The depth texture is not linear with a perspective camera.\n * This filter unprojects it to show the distance from the camera\n * between 0 (near plane) and 1 (far plane).\n */\nfunction makeFilterLinearDepth(context: TgdContext) {\n    return new TgdFilter({\n        uniforms: {\n            uniProjectionMatrixInverse: \"mat4\",\n            uniNear: \"float\",\n            uniFar: \"float\",\n        },\n        fragmentShaderCode: [\n            \"float depth = texture(uniTexture, varUV).r;\",\n            \"vec4 p = uniProjectionMatrixInverse * vec4(0.0, 0.0, depth * 2.0 - 1.0, 1.0);\",\n            \"float z = (-p.z / p.w - uniNear) / (uniFar - uniNear);\",\n            \"FragColor = vec4(vec3(z), 1.0);\",\n        ],\n        setUniforms: ({ program }) => {\n            const { camera } = context\n            program.uniformMatrix4fv(\"uniProjectionMatrixInverse\", camera.matrixProjectionInverse)\n            program.uniform1f(\"uniNear\", camera.near)\n            program.uniform1f(\"uniFar\", camera.far)\n        },\n    })\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_deferred_shading_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/_deferred-shading/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
31427(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _deferred_shading__rspack_import_1 = __webpack_require__(71445);
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
        hr: "hr",
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterDeferredShading.html",
                    children: "TgdPainterDeferredShading"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Framebuffer that holds the surface normals, the depth, the albedo, the material parameters and the emission of meshes,\nseen from the camera of the context. The five textures are rendered in a single pass.\nIt is the first pass of a deferred shading pipeline."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_deferred_shading__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "textureNormals"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 11,
                                columnNumber: 3
                            }, this),
                            " (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "RGB10_A2"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 11,
                                columnNumber: 21
                            }, this),
                            ") holds the normals in the camera space, encoded as ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "N * 0.5 + 0.5"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 11,
                                columnNumber: 83
                            }, this),
                            ".\nThe alpha channel is 1 where a mesh has been painted, and 0 elsewhere."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 11,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "textureDepth"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 13,
                                columnNumber: 3
                            }, this),
                            " (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "DEPTH_COMPONENT24"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 13,
                                columnNumber: 19
                            }, this),
                            ") is the depth buffer of the pass. It holds the window depth,\nbetween 0 (near plane) and 1 (far plane), which is ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "not linear"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 14,
                                columnNumber: 54
                            }, this),
                            " with a perspective camera.\nUnproject it with the inverse projection matrix to get the position in the camera space:\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "vec4 p = uniProjectionMatrixInverse * vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0); vec3 pos = p.xyz / p.w;"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 16,
                                columnNumber: 3
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 13,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "textureAlbedo"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 17,
                                columnNumber: 3
                            }, this),
                            " (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "RGBA8"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 17,
                                columnNumber: 20
                            }, this),
                            ") holds the color computed by the material of each mesh.\nUse an unlit material if you want the pure albedo, without any lighting."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "textureMetallicRoughnessSpecularBakedAO"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 19,
                                columnNumber: 3
                            }, this),
                            " (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "RGBA8"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 19,
                                columnNumber: 46
                            }, this),
                            ") holds the metallic (R), roughness (G),\nspecular (B) and baked ambient occlusion (A) of each mesh. They are read from the optional ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "textures"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 20,
                                columnNumber: 94
                            }, this),
                            "\nof a ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "TgdMeshWithTextures"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 21,
                                columnNumber: 8
                            }, this),
                            ", in the RED channel unless ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "metallicChannel"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 21,
                                columnNumber: 57
                            }, this),
                            ", ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "roughnessChannel"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 21,
                                columnNumber: 76
                            }, this),
                            ",\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "specularChannel"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 22,
                                columnNumber: 3
                            }, this),
                            " or ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "bakedAOChannel"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 22,
                                columnNumber: 24
                            }, this),
                            " says otherwise. A missing texture uses the default value:\nmetallic 0.0, roughness 0.5, specular 0.5 and baked AO 1.0."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 19,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "textureEmission"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 24,
                                columnNumber: 3
                            }, this),
                            " (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "RGBA8"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 24,
                                columnNumber: 22
                            }, this),
                            ") holds the color of the light emitted by each mesh, read from the optional\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "emission"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 25,
                                columnNumber: 3
                            }, this),
                            " texture of a ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "TgdMeshWithTextures"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 25,
                                columnNumber: 27
                            }, this),
                            ". It is ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "(0, 0, 0, 1)"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                                lineNumber: 25,
                                columnNumber: 56
                            }, this),
                            " when the texture is missing."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 24,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "As in ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterMeshes"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 27,
                        columnNumber: 7
                    }, this),
                    ", a mesh without ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "material"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 27,
                        columnNumber: 42
                    }, this),
                    " uses the one of its closest ancestor,\nand it is not painted if there is none."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                lineNumber: 27,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Use the buttons to see the scene, the normals, the depth (linearized), the albedo, the material parameters or the emission.\nThe box has a metallic texture (from left to right) and a specular one (from top to bottom),\nwhile the helmet takes its metallic, roughness, baked AO and emission from the textures of its GLB file.\nglTF stores metallic in the BLUE channel and roughness in the GREEN channel of the same image,\nso the demo uses this texture twice, with ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "metallicChannel: \"b\""
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 34,
                        columnNumber: 43
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "roughnessChannel: \"g\""
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 34,
                        columnNumber: 70
                    }, this),
                    ".\nThe GLB file has no specular texture, so the helmet uses the default specular value."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                lineNumber: 30,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Use ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/painter/deferred-shading/lighting",
                        children: "TgdFilterDeferredShading"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 37,
                        columnNumber: 5
                    }, this),
                    " to compute the lighting from these textures."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                lineNumber: 37,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Set the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "enableIDs"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    " option to write the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "id"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 39,
                        columnNumber: 41
                    }, this),
                    " of the meshes in ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "textureIDs"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 39,
                        columnNumber: 63
                    }, this),
                    ", for ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/painter/deferred-shading/picking",
                        children: "object picking"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                        lineNumber: 39,
                        columnNumber: 81
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                lineNumber: 39,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                lineNumber: 41,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                    lineNumber: 43,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
                lineNumber: 43,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9kZWZlcnJlZC1zaGFkaW5nX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyXy1mNWU1MmIuNDU1OTAzZGZkMmU4MTNjOS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2RlZmVycmVkLXNoYWRpbmcvX2RlZmVycmVkLXNoYWRpbmcvZGVmZXJyZWQtc2hhZGluZy5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9kZWZlcnJlZC1zaGFkaW5nL19kZWZlcnJlZC1zaGFkaW5nL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9kZWZlcnJlZC1zaGFkaW5nL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZEZpbHRlcixcbiAgICBUZ2RHZW9tZXRyeUJveCxcbiAgICBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcbiAgICBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlLFxuICAgIHR5cGUgVGdkTWVzaFdpdGhUZXh0dXJlcyxcbiAgICBUZ2RQYWludGVyQmFja2dyb3VuZCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxuICAgIFRnZFBhaW50ZXJHcm91cCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFRyYW5zZm8sXG4gICAgdGdkQ2FudmFzQ3JlYXRlQ3JlYXRlR3JhZGllbnR2ZXJ0aWNhbCxcbiAgICB0Z2RDYW52YXNDcmVhdGVHcmFkaWVudEhvcml6b250YWwsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBWaWV3T3B0aW9ucywgVmlld1BhbmVsIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IEhlbG1ldFVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oZWxtZXQuZ2xiXCJcblxudHlwZSBNb2RlID0gXCJzY2VuZVwiIHwgXCJub3JtYWxzXCIgfCBcImRlcHRoXCIgfCBcImFsYmVkb1wiIHwgXCJtYXRlcmlhbFwiIHwgXCJlbWlzc2lvblwiXG5cbnR5cGUgR3JvdXBzID0gUmVjb3JkPE1vZGUsIFRnZFBhaW50ZXJHcm91cD5cblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cywgcmVmR3JvdXBzOiB7IGN1cnJlbnQ6IEdyb3VwcyB8IG51bGwgfSkge1xuICAgIC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpXG4gICAgLy8gTWV0YWxsaWMgZ3Jvd3MgZnJvbSBsZWZ0IHRvIHJpZ2h0LCBhbmQgc3BlY3VsYXIgZnJvbSB0b3AgdG8gYm90dG9tLlxuICAgIC8vIFJvdWdobmVzcyBhbmQgYmFrZWQgQU8ga2VlcCB0aGVpciBkZWZhdWx0IHZhbHVlcyAoMC41IGFuZCAxLjApLlxuICAgIGNvbnN0IGJveDogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCgpLFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMCwgMCwgMF0sIGRpc3RhbmNlOiAyIH0pLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgdGV4dHVyZXM6IHtcbiAgICAgICAgICAgIG1ldGFsbGljOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBsb2FkOiB0Z2RDYW52YXNDcmVhdGVHcmFkaWVudEhvcml6b250YWwoNjQsIFtcIiMwMDBcIiwgXCIjZmZmXCJdKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3BlY3VsYXI6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGxvYWQ6IHRnZENhbnZhc0NyZWF0ZUNyZWF0ZUdyYWRpZW50dmVydGljYWwoNjQsIFtcIiMwMDBcIiwgXCIjZmZmXCJdKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgIH1cbiAgICAvLyBUaGUgaGVsbWV0IGNvbWVzIHdpdGggZ2xURiBQQlIgdGV4dHVyZXM6XG4gICAgLy8gLSBtZXRhbGxpY1JvdWdobmVzc1RleHR1cmU6IG1ldGFsbGljIGluIEJMVUUsIHJvdWdobmVzcyBpbiBHUkVFTi5cbiAgICAvLyAtIG9jY2x1c2lvblRleHR1cmU6IGJha2VkIGFtYmllbnQgb2NjbHVzaW9uIGluIFJFRC5cbiAgICAvLyAtIG5vcm1hbFRleHR1cmU6IG5vcm1hbCBtYXAgdGhhdCBiZW5kcyB0aGUgbm9ybWFscyB0byBzaW11bGF0ZSBidW1wcy5cbiAgICAvLyAtIGVtaXNzaXZlVGV4dHVyZTogY29sb3Igb2YgdGhlIGxpZ2h0IGVtaXR0ZWQgYnkgdGhlIHN1cmZhY2UuXG4gICAgLy8gICBUaGUgZ2VvbWV0cnkgaGFzIG5vIHRhbmdlbnRzLCBzbyB0aGV5IGFyZSBjb21wdXRlZCBmcm9tIHRoZSBVViBjb29yZGluYXRlcy5cbiAgICAvLyBUaGUgYC4uLkNoYW5uZWxgIGF0dHJpYnV0ZXMgdGVsbCB3aGljaCBjaGFubmVsIHRvIHJlYWQgaW4gZWFjaCB0ZXh0dXJlIChSRUQgYnkgZGVmYXVsdCkuXG4gICAgLy8gVGhlcmUgaXMgbm8gc3BlY3VsYXIgdGV4dHVyZSBpbiB0aGlzIGZpbGU6IHRoZSBkZWZhdWx0IHZhbHVlICgwLjUpIGlzIHVzZWQuXG4gICAgY29uc3QgeyBoZWxtZXQ6IGFzc2V0IH0gPSBhc3NldHMuZ2xiXG4gICAgY29uc3QgZ2x0Zk1hdGVyaWFsID0gYXNzZXQuZ2V0TWF0ZXJpYWwoMClcbiAgICBjb25zdCBpbmRleEJhc2VDb2xvciA9IGdsdGZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcz8uYmFzZUNvbG9yVGV4dHVyZT8uaW5kZXggPz8gMFxuICAgIGNvbnN0IGluZGV4TWV0YWxsaWNSb3VnaG5lc3MgPSBnbHRmTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3M/Lm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZT8uaW5kZXggPz8gMFxuICAgIGNvbnN0IGluZGV4T2NjbHVzaW9uID0gZ2x0Zk1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmU/LmluZGV4ID8/IDBcbiAgICBjb25zdCBpbmRleE5vcm1hbHMgPSBnbHRmTWF0ZXJpYWwubm9ybWFsVGV4dHVyZT8uaW5kZXggPz8gMFxuICAgIC8vIFRoZSBlbWlzc2lvbiB0ZXh0dXJlIGlzIG9wdGlvbmFsIGluIGdsVEYuXG4gICAgY29uc3QgaW5kZXhFbWlzc2lvbiA9IGdsdGZNYXRlcmlhbC5lbWlzc2l2ZVRleHR1cmU/LmluZGV4XG4gICAgY29uc3QgdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzID0gYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4TWV0YWxsaWNSb3VnaG5lc3MpXG4gICAgY29uc3QgaGVsbWV0OiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xuICAgICAgICBnZW9tZXRyeTogYXNzZXQubWFrZUdlb21ldHJ5KCksXG4gICAgICAgIHRyYW5zZm86IGFzc2V0LmNyZWF0ZVRyYW5zZm9Gcm9tTm9kZShhc3NldC5nZXROb2RlKDApKSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHtcbiAgICAgICAgICAgIHRleHR1cmU6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleEJhc2VDb2xvciksXG4gICAgICAgIH0pLFxuICAgICAgICB0ZXh0dXJlczoge1xuICAgICAgICAgICAgbm9ybWFsczogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4Tm9ybWFscyksXG4gICAgICAgICAgICBtZXRhbGxpYzogdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzLFxuICAgICAgICAgICAgbWV0YWxsaWNDaGFubmVsOiBcImJcIixcbiAgICAgICAgICAgIHJvdWdobmVzczogdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzLFxuICAgICAgICAgICAgcm91Z2huZXNzQ2hhbm5lbDogXCJnXCIsXG4gICAgICAgICAgICBiYWtlZEFPOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhPY2NsdXNpb24pLFxuICAgICAgICAgICAgYmFrZWRBT0NoYW5uZWw6IFwiclwiLFxuICAgICAgICAgICAgZW1pc3Npb246IGluZGV4RW1pc3Npb24gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleEVtaXNzaW9uKSxcbiAgICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgbWVzaGVzID0gW2JveCwgaGVsbWV0XVxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwgeyBtZXNoZXMgfSlcbiAgICBjb25zdCBtYWtlQmFja2dyb3VuZCA9ICh0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQpID0+XG4gICAgICAgIG5ldyBUZ2RQYWludGVyR3JvdXAoW25ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7IHRleHR1cmUsIHNjYWxlWTogLTEgfSldKVxuICAgIGNvbnN0IGdyb3VwczogR3JvdXBzID0ge1xuICAgICAgICBzY2VuZTogbWFrZUJhY2tncm91bmQoZGVmZXJyZWQudGV4dHVyZUFsYmVkbyksXG4gICAgICAgIG5vcm1hbHM6IG1ha2VCYWNrZ3JvdW5kKGRlZmVycmVkLnRleHR1cmVOb3JtYWxzKSxcbiAgICAgICAgZGVwdGg6IG5ldyBUZ2RQYWludGVyR3JvdXAoW1xuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIHRleHR1cmU6IGRlZmVycmVkLnRleHR1cmVEZXB0aCxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbbWFrZUZpbHRlckxpbmVhckRlcHRoKGNvbnRleHQpXSxcbiAgICAgICAgICAgICAgICBmbGlwWTogdHJ1ZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdKSxcbiAgICAgICAgYWxiZWRvOiBtYWtlQmFja2dyb3VuZChkZWZlcnJlZC50ZXh0dXJlQWxiZWRvKSxcbiAgICAgICAgbWF0ZXJpYWw6IG1ha2VCYWNrZ3JvdW5kKGRlZmVycmVkLnRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTyksXG4gICAgICAgIGVtaXNzaW9uOiBtYWtlQmFja2dyb3VuZChkZWZlcnJlZC50ZXh0dXJlRW1pc3Npb24pLFxuICAgIH1cbiAgICByZWZHcm91cHMuY3VycmVudCA9IGdyb3Vwc1xuICAgIGFwcGx5TW9kZShncm91cHMsIFwic2NlbmVcIilcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgZGVmZXJyZWQsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4yMiwgMCwgMV0sIGRlcHRoOiAxIH0pLFxuICAgICAgICAvLyBUaGUgc2NlbmUgaXMgdGhlIGFsYmVkbyB0ZXh0dXJlLCBibGVuZGVkIG92ZXIgdGhlIGNsZWFyIGNvbG9yLlxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiBcIm9mZlwiLFxuICAgICAgICAgICAgY3VsbDogXCJvZmZcIixcbiAgICAgICAgICAgIGJsZW5kOiBcImFscGhhXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2dyb3Vwcy5zY2VuZV0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiBcIm9mZlwiLFxuICAgICAgICAgICAgY3VsbDogXCJvZmZcIixcbiAgICAgICAgICAgIGJsZW5kOiBcIm9mZlwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtncm91cHMuZGVwdGgsIGdyb3Vwcy5ub3JtYWxzLCBncm91cHMuYWxiZWRvLCBncm91cHMubWF0ZXJpYWwsIGdyb3Vwcy5lbWlzc2lvbl0sXG4gICAgICAgIH0pLFxuICAgICAgICAoX3RpbWUsIGRlbHRhKSA9PiB7XG4gICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsdGEgKiAwLjcxKS5vcmJpdEFyb3VuZFkoZGVsdGEgKiAwLjk0KVxuICAgICAgICB9LFxuICAgIClcbiAgICAvLyBBIHNob3J0IGRlcHRoIHJhbmdlIG1ha2VzIHRoZSBsaW5lYXJpemVkIGRlcHRoIGVhc2llciB0byBzZWUuXG4gICAgY29udGV4dC5jYW1lcmEubmVhciA9IDFcbiAgICBjb250ZXh0LmNhbWVyYS5mYXIgPSAyMFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNSwgNSlcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCByZWZDb250ZXh0ID0gUmVhY3QudXNlUmVmPFRnZENvbnRleHQgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHJlZkdyb3VwcyA9IFJlYWN0LnVzZVJlZjxHcm91cHMgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IFJlYWN0LnVzZVN0YXRlPE1vZGU+KFwic2NlbmVcIilcbiAgICBjb25zdCBoYW5kbGVNb2RlQ2hhbmdlID0gKHZhbHVlOiBNb2RlKSA9PiB7XG4gICAgICAgIHNldE1vZGUodmFsdWUpXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gcmVmR3JvdXBzLmN1cnJlbnRcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFncm91cHMpIHJldHVyblxuXG4gICAgICAgIGFwcGx5TW9kZShncm91cHMsIHZhbHVlKVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9eyhjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgIHJlZkNvbnRleHQuY3VycmVudCA9IGNvbnRleHRcbiAgICAgICAgICAgICAgICBpbml0KGNvbnRleHQsIGFzc2V0cywgcmVmR3JvdXBzKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzc2V0cz17eyBnbGI6IHsgaGVsbWV0OiBIZWxtZXRVUkwgfSB9fVxuICAgICAgICAgICAgY29udHJvbGxlcj17eyBpbmVydGlhT3JiaXQ6IDEwMDAgfX1cbiAgICAgICAgICAgIGdpem1vPlxuICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyB2YWx1ZT17bW9kZX0gb25DaGFuZ2U9e2hhbmRsZU1vZGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cInNjZW5lXCI+c2NlbmU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJub3JtYWxzXCI+bm9ybWFsczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImRlcHRoXCI+ZGVwdGg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJhbGJlZG9cIj5hbGJlZG88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJtYXRlcmlhbFwiPm1hdGVyaWFsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiZW1pc3Npb25cIj5lbWlzc2lvbjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgPC9WaWV3PlxuICAgIClcbn1cblxuLy8gI2JlZ2luIGFwcGx5TW9kZSgpXG4vKipcbiAqIFNob3cgdGhlIHNjZW5lLCBvciBvbmUgb2YgdGhlIHRleHR1cmVzIG9mIHRoZSBkZWZlcnJlZCBzaGFkaW5nLlxuICovXG5mdW5jdGlvbiBhcHBseU1vZGUoZ3JvdXBzOiBHcm91cHMsIG1vZGU6IE1vZGUpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhncm91cHMpIGFzIE1vZGVbXSkge1xuICAgICAgICBncm91cHNba2V5XS5hY3RpdmUgPSBrZXkgPT09IG1vZGVcbiAgICB9XG59XG4vLyAjZW5kXG5cbi8vICNiZWdpbiBtYWtlRmlsdGVyTGluZWFyRGVwdGgoKVxuLyoqXG4gKiBUaGUgZGVwdGggdGV4dHVyZSBpcyBub3QgbGluZWFyIHdpdGggYSBwZXJzcGVjdGl2ZSBjYW1lcmEuXG4gKiBUaGlzIGZpbHRlciB1bnByb2plY3RzIGl0IHRvIHNob3cgdGhlIGRpc3RhbmNlIGZyb20gdGhlIGNhbWVyYVxuICogYmV0d2VlbiAwIChuZWFyIHBsYW5lKSBhbmQgMSAoZmFyIHBsYW5lKS5cbiAqL1xuZnVuY3Rpb24gbWFrZUZpbHRlckxpbmVhckRlcHRoKGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IFRnZEZpbHRlcih7XG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4SW52ZXJzZTogXCJtYXQ0XCIsXG4gICAgICAgICAgICB1bmlOZWFyOiBcImZsb2F0XCIsXG4gICAgICAgICAgICB1bmlGYXI6IFwiZmxvYXRcIixcbiAgICAgICAgfSxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXG4gICAgICAgICAgICBcImZsb2F0IGRlcHRoID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVikucjtcIixcbiAgICAgICAgICAgIFwidmVjNCBwID0gdW5pUHJvamVjdGlvbk1hdHJpeEludmVyc2UgKiB2ZWM0KDAuMCwgMC4wLCBkZXB0aCAqIDIuMCAtIDEuMCwgMS4wKTtcIixcbiAgICAgICAgICAgIFwiZmxvYXQgeiA9ICgtcC56IC8gcC53IC0gdW5pTmVhcikgLyAodW5pRmFyIC0gdW5pTmVhcik7XCIsXG4gICAgICAgICAgICBcIkZyYWdDb2xvciA9IHZlYzQodmVjMyh6KSwgMS4wKTtcIixcbiAgICAgICAgXSxcbiAgICAgICAgc2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcbiAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaVByb2plY3Rpb25NYXRyaXhJbnZlcnNlXCIsIGNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uSW52ZXJzZSlcbiAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFwidW5pTmVhclwiLCBjYW1lcmEubmVhcilcbiAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFwidW5pRmFyXCIsIGNhbWVyYS5mYXIpXG4gICAgICAgIH0sXG4gICAgfSlcbn1cbi8vICNlbmRcbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9kZWZlcnJlZC1zaGFkaW5nLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKClcXG4gICAgLy8gTWV0YWxsaWMgZ3Jvd3MgZnJvbSBsZWZ0IHRvIHJpZ2h0LCBhbmQgc3BlY3VsYXIgZnJvbSB0b3AgdG8gYm90dG9tLlxcbiAgICAvLyBSb3VnaG5lc3MgYW5kIGJha2VkIEFPIGtlZXAgdGhlaXIgZGVmYXVsdCB2YWx1ZXMgKDAuNSBhbmQgMS4wKS5cXG4gICAgY29uc3QgYm94OiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCgpLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIDBdLCBkaXN0YW5jZTogMiB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgbWV0YWxsaWM6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBsb2FkOiB0Z2RDYW52YXNDcmVhdGVHcmFkaWVudEhvcml6b250YWwoNjQsIFtcXFwiIzAwMFxcXCIsIFxcXCIjZmZmXFxcIl0pLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIHNwZWN1bGFyOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgbG9hZDogdGdkQ2FudmFzQ3JlYXRlQ3JlYXRlR3JhZGllbnR2ZXJ0aWNhbCg2NCwgW1xcXCIjMDAwXFxcIiwgXFxcIiNmZmZcXFwiXSksXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICB9LFxcbiAgICB9XFxuICAgIC8vIFRoZSBoZWxtZXQgY29tZXMgd2l0aCBnbFRGIFBCUiB0ZXh0dXJlczpcXG4gICAgLy8gLSBtZXRhbGxpY1JvdWdobmVzc1RleHR1cmU6IG1ldGFsbGljIGluIEJMVUUsIHJvdWdobmVzcyBpbiBHUkVFTi5cXG4gICAgLy8gLSBvY2NsdXNpb25UZXh0dXJlOiBiYWtlZCBhbWJpZW50IG9jY2x1c2lvbiBpbiBSRUQuXFxuICAgIC8vIC0gbm9ybWFsVGV4dHVyZTogbm9ybWFsIG1hcCB0aGF0IGJlbmRzIHRoZSBub3JtYWxzIHRvIHNpbXVsYXRlIGJ1bXBzLlxcbiAgICAvLyAtIGVtaXNzaXZlVGV4dHVyZTogY29sb3Igb2YgdGhlIGxpZ2h0IGVtaXR0ZWQgYnkgdGhlIHN1cmZhY2UuXFxuICAgIC8vICAgVGhlIGdlb21ldHJ5IGhhcyBubyB0YW5nZW50cywgc28gdGhleSBhcmUgY29tcHV0ZWQgZnJvbSB0aGUgVVYgY29vcmRpbmF0ZXMuXFxuICAgIC8vIFRoZSBgLi4uQ2hhbm5lbGAgYXR0cmlidXRlcyB0ZWxsIHdoaWNoIGNoYW5uZWwgdG8gcmVhZCBpbiBlYWNoIHRleHR1cmUgKFJFRCBieSBkZWZhdWx0KS5cXG4gICAgLy8gVGhlcmUgaXMgbm8gc3BlY3VsYXIgdGV4dHVyZSBpbiB0aGlzIGZpbGU6IHRoZSBkZWZhdWx0IHZhbHVlICgwLjUpIGlzIHVzZWQuXFxuICAgIGNvbnN0IHsgaGVsbWV0OiBhc3NldCB9ID0gYXNzZXRzLmdsYlxcbiAgICBjb25zdCBnbHRmTWF0ZXJpYWwgPSBhc3NldC5nZXRNYXRlcmlhbCgwKVxcbiAgICBjb25zdCBpbmRleEJhc2VDb2xvciA9IGdsdGZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcz8uYmFzZUNvbG9yVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleE1ldGFsbGljUm91Z2huZXNzID0gZ2x0Zk1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzPy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmU/LmluZGV4ID8/IDBcXG4gICAgY29uc3QgaW5kZXhPY2NsdXNpb24gPSBnbHRmTWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleE5vcm1hbHMgPSBnbHRmTWF0ZXJpYWwubm9ybWFsVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICAvLyBUaGUgZW1pc3Npb24gdGV4dHVyZSBpcyBvcHRpb25hbCBpbiBnbFRGLlxcbiAgICBjb25zdCBpbmRleEVtaXNzaW9uID0gZ2x0Zk1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZT8uaW5kZXhcXG4gICAgY29uc3QgdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzID0gYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4TWV0YWxsaWNSb3VnaG5lc3MpXFxuICAgIGNvbnN0IGhlbG1ldDogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBhc3NldC5tYWtlR2VvbWV0cnkoKSxcXG4gICAgICAgIHRyYW5zZm86IGFzc2V0LmNyZWF0ZVRyYW5zZm9Gcm9tTm9kZShhc3NldC5nZXROb2RlKDApKSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoe1xcbiAgICAgICAgICAgIHRleHR1cmU6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleEJhc2VDb2xvciksXFxuICAgICAgICB9KSxcXG4gICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgbm9ybWFsczogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4Tm9ybWFscyksXFxuICAgICAgICAgICAgbWV0YWxsaWM6IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyxcXG4gICAgICAgICAgICBtZXRhbGxpY0NoYW5uZWw6IFxcXCJiXFxcIixcXG4gICAgICAgICAgICByb3VnaG5lc3M6IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyxcXG4gICAgICAgICAgICByb3VnaG5lc3NDaGFubmVsOiBcXFwiZ1xcXCIsXFxuICAgICAgICAgICAgYmFrZWRBTzogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4T2NjbHVzaW9uKSxcXG4gICAgICAgICAgICBiYWtlZEFPQ2hhbm5lbDogXFxcInJcXFwiLFxcbiAgICAgICAgICAgIGVtaXNzaW9uOiBpbmRleEVtaXNzaW9uID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhFbWlzc2lvbiksXFxuICAgICAgICB9LFxcbiAgICB9XFxuICAgIGNvbnN0IG1lc2hlcyA9IFtib3gsIGhlbG1ldF1cXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7IG1lc2hlcyB9KVxcbiAgICBjb25zdCBtYWtlQmFja2dyb3VuZCA9ICh0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQpID0+XFxuICAgICAgICBuZXcgVGdkUGFpbnRlckdyb3VwKFtuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwgeyB0ZXh0dXJlLCBzY2FsZVk6IC0xIH0pXSlcXG4gICAgY29uc3QgZ3JvdXBzOiBHcm91cHMgPSB7XFxuICAgICAgICBzY2VuZTogbWFrZUJhY2tncm91bmQoZGVmZXJyZWQudGV4dHVyZUFsYmVkbyksXFxuICAgICAgICBub3JtYWxzOiBtYWtlQmFja2dyb3VuZChkZWZlcnJlZC50ZXh0dXJlTm9ybWFscyksXFxuICAgICAgICBkZXB0aDogbmV3IFRnZFBhaW50ZXJHcm91cChbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICB0ZXh0dXJlOiBkZWZlcnJlZC50ZXh0dXJlRGVwdGgsXFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IFttYWtlRmlsdGVyTGluZWFyRGVwdGgoY29udGV4dCldLFxcbiAgICAgICAgICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0pLFxcbiAgICAgICAgYWxiZWRvOiBtYWtlQmFja2dyb3VuZChkZWZlcnJlZC50ZXh0dXJlQWxiZWRvKSxcXG4gICAgICAgIG1hdGVyaWFsOiBtYWtlQmFja2dyb3VuZChkZWZlcnJlZC50ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3NTcGVjdWxhckJha2VkQU8pLFxcbiAgICAgICAgZW1pc3Npb246IG1ha2VCYWNrZ3JvdW5kKGRlZmVycmVkLnRleHR1cmVFbWlzc2lvbiksXFxuICAgIH1cXG4gICAgcmVmR3JvdXBzLmN1cnJlbnQgPSBncm91cHNcXG4gICAgYXBwbHlNb2RlKGdyb3VwcywgXFxcInNjZW5lXFxcIilcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBkZWZlcnJlZCxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4yMiwgMCwgMV0sIGRlcHRoOiAxIH0pLFxcbiAgICAgICAgLy8gVGhlIHNjZW5lIGlzIHRoZSBhbGJlZG8gdGV4dHVyZSwgYmxlbmRlZCBvdmVyIHRoZSBjbGVhciBjb2xvci5cXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBibGVuZDogXFxcImFscGhhXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2dyb3Vwcy5zY2VuZV0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBibGVuZDogXFxcIm9mZlxcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtncm91cHMuZGVwdGgsIGdyb3Vwcy5ub3JtYWxzLCBncm91cHMuYWxiZWRvLCBncm91cHMubWF0ZXJpYWwsIGdyb3Vwcy5lbWlzc2lvbl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIChfdGltZSwgZGVsdGEpID0+IHtcXG4gICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsdGEgKiAwLjcxKS5vcmJpdEFyb3VuZFkoZGVsdGEgKiAwLjk0KVxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICAvLyBBIHNob3J0IGRlcHRoIHJhbmdlIG1ha2VzIHRoZSBsaW5lYXJpemVkIGRlcHRoIGVhc2llciB0byBzZWUuXFxuICAgIGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxXFxuICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IDIwXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNSwgNSlcXG4gICAgY29udGV4dC5wbGF5KClcIixcImFwcGx5TW9kZSgpXCI6XCIvKipcXG4gKiBTaG93IHRoZSBzY2VuZSwgb3Igb25lIG9mIHRoZSB0ZXh0dXJlcyBvZiB0aGUgZGVmZXJyZWQgc2hhZGluZy5cXG4gKi9cXG5mdW5jdGlvbiBhcHBseU1vZGUoZ3JvdXBzOiBHcm91cHMsIG1vZGU6IE1vZGUpIHtcXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZ3JvdXBzKSBhcyBNb2RlW10pIHtcXG4gICAgICAgIGdyb3Vwc1trZXldLmFjdGl2ZSA9IGtleSA9PT0gbW9kZVxcbiAgICB9XFxufVwiLFwibWFrZUZpbHRlckxpbmVhckRlcHRoKClcIjpcIi8qKlxcbiAqIFRoZSBkZXB0aCB0ZXh0dXJlIGlzIG5vdCBsaW5lYXIgd2l0aCBhIHBlcnNwZWN0aXZlIGNhbWVyYS5cXG4gKiBUaGlzIGZpbHRlciB1bnByb2plY3RzIGl0IHRvIHNob3cgdGhlIGRpc3RhbmNlIGZyb20gdGhlIGNhbWVyYVxcbiAqIGJldHdlZW4gMCAobmVhciBwbGFuZSkgYW5kIDEgKGZhciBwbGFuZSkuXFxuICovXFxuZnVuY3Rpb24gbWFrZUZpbHRlckxpbmVhckRlcHRoKGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgcmV0dXJuIG5ldyBUZ2RGaWx0ZXIoe1xcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4SW52ZXJzZTogXFxcIm1hdDRcXFwiLFxcbiAgICAgICAgICAgIHVuaU5lYXI6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgdW5pRmFyOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xcbiAgICAgICAgICAgIFxcXCJmbG9hdCBkZXB0aCA9IHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpLnI7XFxcIixcXG4gICAgICAgICAgICBcXFwidmVjNCBwID0gdW5pUHJvamVjdGlvbk1hdHJpeEludmVyc2UgKiB2ZWM0KDAuMCwgMC4wLCBkZXB0aCAqIDIuMCAtIDEuMCwgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJmbG9hdCB6ID0gKC1wLnogLyBwLncgLSB1bmlOZWFyKSAvICh1bmlGYXIgLSB1bmlOZWFyKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSB2ZWM0KHZlYzMoeiksIDEuMCk7XFxcIixcXG4gICAgICAgIF0sXFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9KSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm1NYXRyaXg0ZnYoXFxcInVuaVByb2plY3Rpb25NYXRyaXhJbnZlcnNlXFxcIiwgY2FtZXJhLm1hdHJpeFByb2plY3Rpb25JbnZlcnNlKVxcbiAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFxcXCJ1bmlOZWFyXFxcIiwgY2FtZXJhLm5lYXIpXFxuICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtMWYoXFxcInVuaUZhclxcXCIsIGNhbWVyYS5mYXIpXFxuICAgICAgICB9LFxcbiAgICB9KVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkRmlsdGVyLFxcbiAgICBUZ2RHZW9tZXRyeUJveCxcXG4gICAgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXFxuICAgIFRnZE1hdGVyaWFsRmxhdFRleHR1cmUsXFxuICAgIHR5cGUgVGdkTWVzaFdpdGhUZXh0dXJlcyxcXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyxcXG4gICAgVGdkUGFpbnRlckZpbHRlcixcXG4gICAgVGdkUGFpbnRlckdyb3VwLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgVGdkVHJhbnNmbyxcXG4gICAgdGdkQ2FudmFzQ3JlYXRlQ3JlYXRlR3JhZGllbnR2ZXJ0aWNhbCxcXG4gICAgdGdkQ2FudmFzQ3JlYXRlR3JhZGllbnRIb3Jpem9udGFsLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IHsgVmlld09wdGlvbnMsIFZpZXdQYW5lbCB9IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCBIZWxtZXRVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9oZWxtZXQuZ2xiXFxcIlxcblxcbnR5cGUgTW9kZSA9IFxcXCJzY2VuZVxcXCIgfCBcXFwibm9ybWFsc1xcXCIgfCBcXFwiZGVwdGhcXFwiIHwgXFxcImFsYmVkb1xcXCIgfCBcXFwibWF0ZXJpYWxcXFwiIHwgXFxcImVtaXNzaW9uXFxcIlxcblxcbnR5cGUgR3JvdXBzID0gUmVjb3JkPE1vZGUsIFRnZFBhaW50ZXJHcm91cD5cXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzLCByZWZHcm91cHM6IHsgY3VycmVudDogR3JvdXBzIHwgbnVsbCB9KSB7XFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKClcXG4gICAgLy8gTWV0YWxsaWMgZ3Jvd3MgZnJvbSBsZWZ0IHRvIHJpZ2h0LCBhbmQgc3BlY3VsYXIgZnJvbSB0b3AgdG8gYm90dG9tLlxcbiAgICAvLyBSb3VnaG5lc3MgYW5kIGJha2VkIEFPIGtlZXAgdGhlaXIgZGVmYXVsdCB2YWx1ZXMgKDAuNSBhbmQgMS4wKS5cXG4gICAgY29uc3QgYm94OiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCgpLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIDBdLCBkaXN0YW5jZTogMiB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgbWV0YWxsaWM6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBsb2FkOiB0Z2RDYW52YXNDcmVhdGVHcmFkaWVudEhvcml6b250YWwoNjQsIFtcXFwiIzAwMFxcXCIsIFxcXCIjZmZmXFxcIl0pLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIHNwZWN1bGFyOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgbG9hZDogdGdkQ2FudmFzQ3JlYXRlQ3JlYXRlR3JhZGllbnR2ZXJ0aWNhbCg2NCwgW1xcXCIjMDAwXFxcIiwgXFxcIiNmZmZcXFwiXSksXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICB9LFxcbiAgICB9XFxuICAgIC8vIFRoZSBoZWxtZXQgY29tZXMgd2l0aCBnbFRGIFBCUiB0ZXh0dXJlczpcXG4gICAgLy8gLSBtZXRhbGxpY1JvdWdobmVzc1RleHR1cmU6IG1ldGFsbGljIGluIEJMVUUsIHJvdWdobmVzcyBpbiBHUkVFTi5cXG4gICAgLy8gLSBvY2NsdXNpb25UZXh0dXJlOiBiYWtlZCBhbWJpZW50IG9jY2x1c2lvbiBpbiBSRUQuXFxuICAgIC8vIC0gbm9ybWFsVGV4dHVyZTogbm9ybWFsIG1hcCB0aGF0IGJlbmRzIHRoZSBub3JtYWxzIHRvIHNpbXVsYXRlIGJ1bXBzLlxcbiAgICAvLyAtIGVtaXNzaXZlVGV4dHVyZTogY29sb3Igb2YgdGhlIGxpZ2h0IGVtaXR0ZWQgYnkgdGhlIHN1cmZhY2UuXFxuICAgIC8vICAgVGhlIGdlb21ldHJ5IGhhcyBubyB0YW5nZW50cywgc28gdGhleSBhcmUgY29tcHV0ZWQgZnJvbSB0aGUgVVYgY29vcmRpbmF0ZXMuXFxuICAgIC8vIFRoZSBgLi4uQ2hhbm5lbGAgYXR0cmlidXRlcyB0ZWxsIHdoaWNoIGNoYW5uZWwgdG8gcmVhZCBpbiBlYWNoIHRleHR1cmUgKFJFRCBieSBkZWZhdWx0KS5cXG4gICAgLy8gVGhlcmUgaXMgbm8gc3BlY3VsYXIgdGV4dHVyZSBpbiB0aGlzIGZpbGU6IHRoZSBkZWZhdWx0IHZhbHVlICgwLjUpIGlzIHVzZWQuXFxuICAgIGNvbnN0IHsgaGVsbWV0OiBhc3NldCB9ID0gYXNzZXRzLmdsYlxcbiAgICBjb25zdCBnbHRmTWF0ZXJpYWwgPSBhc3NldC5nZXRNYXRlcmlhbCgwKVxcbiAgICBjb25zdCBpbmRleEJhc2VDb2xvciA9IGdsdGZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcz8uYmFzZUNvbG9yVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleE1ldGFsbGljUm91Z2huZXNzID0gZ2x0Zk1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzPy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmU/LmluZGV4ID8/IDBcXG4gICAgY29uc3QgaW5kZXhPY2NsdXNpb24gPSBnbHRmTWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleE5vcm1hbHMgPSBnbHRmTWF0ZXJpYWwubm9ybWFsVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICAvLyBUaGUgZW1pc3Npb24gdGV4dHVyZSBpcyBvcHRpb25hbCBpbiBnbFRGLlxcbiAgICBjb25zdCBpbmRleEVtaXNzaW9uID0gZ2x0Zk1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZT8uaW5kZXhcXG4gICAgY29uc3QgdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzID0gYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4TWV0YWxsaWNSb3VnaG5lc3MpXFxuICAgIGNvbnN0IGhlbG1ldDogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBhc3NldC5tYWtlR2VvbWV0cnkoKSxcXG4gICAgICAgIHRyYW5zZm86IGFzc2V0LmNyZWF0ZVRyYW5zZm9Gcm9tTm9kZShhc3NldC5nZXROb2RlKDApKSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoe1xcbiAgICAgICAgICAgIHRleHR1cmU6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleEJhc2VDb2xvciksXFxuICAgICAgICB9KSxcXG4gICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgbm9ybWFsczogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4Tm9ybWFscyksXFxuICAgICAgICAgICAgbWV0YWxsaWM6IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyxcXG4gICAgICAgICAgICBtZXRhbGxpY0NoYW5uZWw6IFxcXCJiXFxcIixcXG4gICAgICAgICAgICByb3VnaG5lc3M6IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyxcXG4gICAgICAgICAgICByb3VnaG5lc3NDaGFubmVsOiBcXFwiZ1xcXCIsXFxuICAgICAgICAgICAgYmFrZWRBTzogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4T2NjbHVzaW9uKSxcXG4gICAgICAgICAgICBiYWtlZEFPQ2hhbm5lbDogXFxcInJcXFwiLFxcbiAgICAgICAgICAgIGVtaXNzaW9uOiBpbmRleEVtaXNzaW9uID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhFbWlzc2lvbiksXFxuICAgICAgICB9LFxcbiAgICB9XFxuICAgIGNvbnN0IG1lc2hlcyA9IFtib3gsIGhlbG1ldF1cXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7IG1lc2hlcyB9KVxcbiAgICBjb25zdCBtYWtlQmFja2dyb3VuZCA9ICh0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQpID0+XFxuICAgICAgICBuZXcgVGdkUGFpbnRlckdyb3VwKFtuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwgeyB0ZXh0dXJlLCBzY2FsZVk6IC0xIH0pXSlcXG4gICAgY29uc3QgZ3JvdXBzOiBHcm91cHMgPSB7XFxuICAgICAgICBzY2VuZTogbWFrZUJhY2tncm91bmQoZGVmZXJyZWQudGV4dHVyZUFsYmVkbyksXFxuICAgICAgICBub3JtYWxzOiBtYWtlQmFja2dyb3VuZChkZWZlcnJlZC50ZXh0dXJlTm9ybWFscyksXFxuICAgICAgICBkZXB0aDogbmV3IFRnZFBhaW50ZXJHcm91cChbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICB0ZXh0dXJlOiBkZWZlcnJlZC50ZXh0dXJlRGVwdGgsXFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IFttYWtlRmlsdGVyTGluZWFyRGVwdGgoY29udGV4dCldLFxcbiAgICAgICAgICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0pLFxcbiAgICAgICAgYWxiZWRvOiBtYWtlQmFja2dyb3VuZChkZWZlcnJlZC50ZXh0dXJlQWxiZWRvKSxcXG4gICAgICAgIG1hdGVyaWFsOiBtYWtlQmFja2dyb3VuZChkZWZlcnJlZC50ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3NTcGVjdWxhckJha2VkQU8pLFxcbiAgICAgICAgZW1pc3Npb246IG1ha2VCYWNrZ3JvdW5kKGRlZmVycmVkLnRleHR1cmVFbWlzc2lvbiksXFxuICAgIH1cXG4gICAgcmVmR3JvdXBzLmN1cnJlbnQgPSBncm91cHNcXG4gICAgYXBwbHlNb2RlKGdyb3VwcywgXFxcInNjZW5lXFxcIilcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBkZWZlcnJlZCxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4yMiwgMCwgMV0sIGRlcHRoOiAxIH0pLFxcbiAgICAgICAgLy8gVGhlIHNjZW5lIGlzIHRoZSBhbGJlZG8gdGV4dHVyZSwgYmxlbmRlZCBvdmVyIHRoZSBjbGVhciBjb2xvci5cXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBibGVuZDogXFxcImFscGhhXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2dyb3Vwcy5zY2VuZV0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBibGVuZDogXFxcIm9mZlxcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtncm91cHMuZGVwdGgsIGdyb3Vwcy5ub3JtYWxzLCBncm91cHMuYWxiZWRvLCBncm91cHMubWF0ZXJpYWwsIGdyb3Vwcy5lbWlzc2lvbl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIChfdGltZSwgZGVsdGEpID0+IHtcXG4gICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsdGEgKiAwLjcxKS5vcmJpdEFyb3VuZFkoZGVsdGEgKiAwLjk0KVxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICAvLyBBIHNob3J0IGRlcHRoIHJhbmdlIG1ha2VzIHRoZSBsaW5lYXJpemVkIGRlcHRoIGVhc2llciB0byBzZWUuXFxuICAgIGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxXFxuICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IDIwXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNSwgNSlcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgcmVmQ29udGV4dCA9IFJlYWN0LnVzZVJlZjxUZ2RDb250ZXh0IHwgbnVsbD4obnVsbClcXG4gICAgY29uc3QgcmVmR3JvdXBzID0gUmVhY3QudXNlUmVmPEdyb3VwcyB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IFJlYWN0LnVzZVN0YXRlPE1vZGU+KFxcXCJzY2VuZVxcXCIpXFxuICAgIGNvbnN0IGhhbmRsZU1vZGVDaGFuZ2UgPSAodmFsdWU6IE1vZGUpID0+IHtcXG4gICAgICAgIHNldE1vZGUodmFsdWUpXFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XFxuICAgICAgICBjb25zdCBncm91cHMgPSByZWZHcm91cHMuY3VycmVudFxcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFncm91cHMpIHJldHVyblxcblxcbiAgICAgICAgYXBwbHlNb2RlKGdyb3VwcywgdmFsdWUpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG4gICAgICAgICAgICAgICAgcmVmQ29udGV4dC5jdXJyZW50ID0gY29udGV4dFxcbiAgICAgICAgICAgICAgICBpbml0KGNvbnRleHQsIGFzc2V0cywgcmVmR3JvdXBzKVxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgYXNzZXRzPXt7IGdsYjogeyBoZWxtZXQ6IEhlbG1ldFVSTCB9IH19XFxuICAgICAgICAgICAgY29udHJvbGxlcj17eyBpbmVydGlhT3JiaXQ6IDEwMDAgfX1cXG4gICAgICAgICAgICBnaXptbz5cXG4gICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XFxcImZsZXhcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgZmxleFdyYXA9XFxcIndyYXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8Vmlld09wdGlvbnMgdmFsdWU9e21vZGV9IG9uQ2hhbmdlPXtoYW5kbGVNb2RlQ2hhbmdlfT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJzY2VuZVxcXCI+c2NlbmU8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJub3JtYWxzXFxcIj5ub3JtYWxzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwiZGVwdGhcXFwiPmRlcHRoPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwiYWxiZWRvXFxcIj5hbGJlZG88L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJtYXRlcmlhbFxcXCI+bWF0ZXJpYWw8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJlbWlzc2lvblxcXCI+ZW1pc3Npb248L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cXG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgIDwvVmlldz5cXG4gICAgKVxcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBzY2VuZSwgb3Igb25lIG9mIHRoZSB0ZXh0dXJlcyBvZiB0aGUgZGVmZXJyZWQgc2hhZGluZy5cXG4gKi9cXG5mdW5jdGlvbiBhcHBseU1vZGUoZ3JvdXBzOiBHcm91cHMsIG1vZGU6IE1vZGUpIHtcXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZ3JvdXBzKSBhcyBNb2RlW10pIHtcXG4gICAgICAgIGdyb3Vwc1trZXldLmFjdGl2ZSA9IGtleSA9PT0gbW9kZVxcbiAgICB9XFxufVxcblxcbi8qKlxcbiAqIFRoZSBkZXB0aCB0ZXh0dXJlIGlzIG5vdCBsaW5lYXIgd2l0aCBhIHBlcnNwZWN0aXZlIGNhbWVyYS5cXG4gKiBUaGlzIGZpbHRlciB1bnByb2plY3RzIGl0IHRvIHNob3cgdGhlIGRpc3RhbmNlIGZyb20gdGhlIGNhbWVyYVxcbiAqIGJldHdlZW4gMCAobmVhciBwbGFuZSkgYW5kIDEgKGZhciBwbGFuZSkuXFxuICovXFxuZnVuY3Rpb24gbWFrZUZpbHRlckxpbmVhckRlcHRoKGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgcmV0dXJuIG5ldyBUZ2RGaWx0ZXIoe1xcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4SW52ZXJzZTogXFxcIm1hdDRcXFwiLFxcbiAgICAgICAgICAgIHVuaU5lYXI6IFxcXCJmbG9hdFxcXCIsXFxuICAgICAgICAgICAgdW5pRmFyOiBcXFwiZmxvYXRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xcbiAgICAgICAgICAgIFxcXCJmbG9hdCBkZXB0aCA9IHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpLnI7XFxcIixcXG4gICAgICAgICAgICBcXFwidmVjNCBwID0gdW5pUHJvamVjdGlvbk1hdHJpeEludmVyc2UgKiB2ZWM0KDAuMCwgMC4wLCBkZXB0aCAqIDIuMCAtIDEuMCwgMS4wKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJmbG9hdCB6ID0gKC1wLnogLyBwLncgLSB1bmlOZWFyKSAvICh1bmlGYXIgLSB1bmlOZWFyKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSB2ZWM0KHZlYzMoeiksIDEuMCk7XFxcIixcXG4gICAgICAgIF0sXFxuICAgICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9KSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm1NYXRyaXg0ZnYoXFxcInVuaVByb2plY3Rpb25NYXRyaXhJbnZlcnNlXFxcIiwgY2FtZXJhLm1hdHJpeFByb2plY3Rpb25JbnZlcnNlKVxcbiAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFxcXCJ1bmlOZWFyXFxcIiwgY2FtZXJhLm5lYXIpXFxuICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtMWYoXFxcInVuaUZhclxcXCIsIGNhbWVyYS5mYXIpXFxuICAgICAgICB9LFxcbiAgICB9KVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RGaWx0ZXIiLCJUZ2RHZW9tZXRyeUJveCIsIlRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uIiwiVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSIsIlRnZFBhaW50ZXJCYWNrZ3JvdW5kIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyR3JvdXAiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJUZ2RUcmFuc2ZvIiwidGdkQ2FudmFzQ3JlYXRlQ3JlYXRlR3JhZGllbnR2ZXJ0aWNhbCIsInRnZENhbnZhc0NyZWF0ZUdyYWRpZW50SG9yaXpvbnRhbCIsIlZpZXdPcHRpb25zIiwiVmlld1BhbmVsIiwiUmVhY3QiLCJWaWV3IiwiSGVsbWV0VVJMIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJyZWZHcm91cHMiLCJfZ2x0Zk1hdGVyaWFsX3Bick1ldGFsbGljUm91Z2huZXNzX2Jhc2VDb2xvclRleHR1cmUiLCJfZ2x0Zk1hdGVyaWFsX3Bick1ldGFsbGljUm91Z2huZXNzX21ldGFsbGljUm91Z2huZXNzVGV4dHVyZSIsIl9nbHRmTWF0ZXJpYWxfb2NjbHVzaW9uVGV4dHVyZSIsIl9nbHRmTWF0ZXJpYWxfbm9ybWFsVGV4dHVyZSIsIl9nbHRmTWF0ZXJpYWxfZW1pc3NpdmVUZXh0dXJlIiwibWF0ZXJpYWwiLCJib3giLCJfYXNzZXRzX2dsYiIsImFzc2V0IiwiZ2x0Zk1hdGVyaWFsIiwiaW5kZXhCYXNlQ29sb3IiLCJpbmRleE1ldGFsbGljUm91Z2huZXNzIiwiaW5kZXhPY2NsdXNpb24iLCJpbmRleE5vcm1hbHMiLCJpbmRleEVtaXNzaW9uIiwidGV4dHVyZU1ldGFsbGljUm91Z2huZXNzIiwiaGVsbWV0IiwidW5kZWZpbmVkIiwibWVzaGVzIiwiZGVmZXJyZWQiLCJtYWtlQmFja2dyb3VuZCIsInRleHR1cmUiLCJncm91cHMiLCJtYWtlRmlsdGVyTGluZWFyRGVwdGgiLCJhcHBseU1vZGUiLCJfdGltZSIsImRlbHRhIiwiRGVtbyIsInJlZkNvbnRleHQiLCJfUmVhY3RfdXNlU3RhdGUiLCJtb2RlIiwic2V0TW9kZSIsImhhbmRsZU1vZGVDaGFuZ2UiLCJ2YWx1ZSIsIm9uUmVhZHkiLCJfaXRlcmF0b3JFcnJvciIsIk9iamVjdCIsImtleSIsInNldFVuaWZvcm1zIiwicHJvZ3JhbSIsImNhbWVyYSIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnVCO0FBQytCO0FBQzdCO0FBQ2dDO0FBQ1Q7QUFNaEQsU0FBU21CLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWMsRUFBRUMsU0FBcUM7O1FBNkI3REMscURBQUFBLG9DQUNRQyw2REFBQUEscUNBQ1JDLGdDQUNGQyw2QkFFQ0M7SUFqQ3RCLDRCQUE0QjtJQUM1QixJQUFNQyxXQUFXLElBQUkxQiwwREFBMEJBO0lBQy9DLHNFQUFzRTtJQUN0RSxrRUFBa0U7SUFDbEUsSUFBTTJCLE1BQTJCO1FBQzdCLFVBQVUsSUFBSTVCLDhDQUFjQTtRQUM1QixTQUFTLElBQUlVLDBDQUFVQSxDQUFDO1lBQUUsVUFBVTtnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQUUsVUFBVTtRQUFFO1FBQzNELFNBQVM7UUFDVGlCLFVBQUFBO1FBQ0EsVUFBVTtZQUNOLFVBQVUsSUFBSWxCLDRDQUFZQSxDQUFDVSxTQUFTO2dCQUNoQyxNQUFNUCxxRUFBaUNBLENBQUMsSUFBSTtvQkFBQztvQkFBUTtpQkFBTztZQUNoRTtZQUNBLFVBQVUsSUFBSUgsNENBQVlBLENBQUNVLFNBQVM7Z0JBQ2hDLE1BQU1SLHlFQUFxQ0EsQ0FBQyxJQUFJO29CQUFDO29CQUFRO2lCQUFPO1lBQ3BFO1FBQ0o7SUFDSjtJQUNBLDJDQUEyQztJQUMzQyxvRUFBb0U7SUFDcEUsc0RBQXNEO0lBQ3RELHdFQUF3RTtJQUN4RSxnRUFBZ0U7SUFDaEUsZ0ZBQWdGO0lBQ2hGLDJGQUEyRjtJQUMzRiw4RUFBOEU7SUFDOUUsSUFBMEJrQixjQUFBQSxPQUFPLEdBQUcsRUFBcEJDLFFBQVVELFlBQWxCO0lBQ1IsSUFBTUUsZUFBZUQsTUFBTSxXQUFXLENBQUM7SUFDdkMsSUFBTUUsMEJBQWlCVixxQ0FBQUEsYUFBYSxvQkFBb0IsY0FBakNBLDBEQUFBQSxzREFBQUEsbUNBQW1DLGdCQUFnQixjQUFuREEsMEVBQUFBLG9EQUFxRCxLQUFLLHVDQUFJO0lBQ3JGLElBQU1XLG1DQUF5QlYsc0NBQUFBLGFBQWEsb0JBQW9CLGNBQWpDQSwyREFBQUEsOERBQUFBLG9DQUFtQyx3QkFBd0IsY0FBM0RBLGtGQUFBQSw0REFBNkQsS0FBSyx5Q0FBSTtJQUNyRyxJQUFNVywyQkFBaUJWLGlDQUFBQSxhQUFhLGdCQUFnQixjQUE3QkEscURBQUFBLCtCQUErQixLQUFLLHlDQUFJO0lBQy9ELElBQU1XLHlCQUFlViw4QkFBQUEsYUFBYSxhQUFhLGNBQTFCQSxrREFBQUEsNEJBQTRCLEtBQUsseUNBQUk7SUFDMUQsNENBQTRDO0lBQzVDLElBQU1XLGlCQUFnQlYsZ0NBQUFBLGFBQWEsZUFBZSxjQUE1QkEsb0RBQUFBLDhCQUE4QixLQUFLO0lBQ3pELElBQU1XLDJCQUEyQlAsTUFBTSxlQUFlLENBQUNYLFNBQVNjO0lBQ2hFLElBQU1LLFNBQThCO1FBQ2hDLFVBQVVSLE1BQU0sWUFBWTtRQUM1QixTQUFTQSxNQUFNLHFCQUFxQixDQUFDQSxNQUFNLE9BQU8sQ0FBQztRQUNuRCxTQUFTO1FBQ1QsVUFBVSxJQUFJNUIsc0RBQXNCQSxDQUFDO1lBQ2pDLFNBQVM0QixNQUFNLGVBQWUsQ0FBQ1gsU0FBU2E7UUFDNUM7UUFDQSxVQUFVO1lBQ04sU0FBU0YsTUFBTSxlQUFlLENBQUNYLFNBQVNnQjtZQUN4QyxVQUFVRTtZQUNWLGlCQUFpQjtZQUNqQixXQUFXQTtZQUNYLGtCQUFrQjtZQUNsQixTQUFTUCxNQUFNLGVBQWUsQ0FBQ1gsU0FBU2U7WUFDeEMsZ0JBQWdCO1lBQ2hCLFVBQVVFLGtCQUFrQkcsWUFBWUEsWUFBWVQsTUFBTSxlQUFlLENBQUNYLFNBQVNpQjtRQUN2RjtJQUNKO0lBQ0EsSUFBTUksU0FBUztRQUFDWjtRQUFLVTtLQUFPO0lBQzVCLElBQU1HLFdBQVcsSUFBSXBDLHlEQUF5QkEsQ0FBQ2MsU0FBUztRQUFFcUIsUUFBQUE7SUFBTztJQUNqRSxJQUFNRSxpQkFBaUIsd0JBQUNDO2VBQ3BCLElBQUlwQywrQ0FBZUEsQ0FBQztZQUFDLElBQUlKLG9EQUFvQkEsQ0FBQ2dCLFNBQVM7Z0JBQUV3QixTQUFBQTtnQkFBUyxRQUFRLENBQUM7WUFBRTtTQUFHOztJQUNwRixJQUFNQyxTQUFpQjtRQUNuQixPQUFPRixlQUFlRCxTQUFTLGFBQWE7UUFDNUMsU0FBU0MsZUFBZUQsU0FBUyxjQUFjO1FBQy9DLE9BQU8sSUFBSWxDLCtDQUFlQSxDQUFDO1lBQ3ZCLElBQUlELGdEQUFnQkEsQ0FBQ2EsU0FBUztnQkFDMUIsU0FBU3NCLFNBQVMsWUFBWTtnQkFDOUIsU0FBUztvQkFBQ0ksc0JBQXNCMUI7aUJBQVM7Z0JBQ3pDLE9BQU87WUFDWDtTQUNIO1FBQ0QsUUFBUXVCLGVBQWVELFNBQVMsYUFBYTtRQUM3QyxVQUFVQyxlQUFlRCxTQUFTLHVDQUF1QztRQUN6RSxVQUFVQyxlQUFlRCxTQUFTLGVBQWU7SUFDckQ7SUFDQXBCLFVBQVUsT0FBTyxHQUFHdUI7SUFDcEJFLFVBQVVGLFFBQVE7SUFDbEJ6QixRQUFRLEdBQUcsQ0FDUHNCLFVBQ0EsSUFBSXJDLCtDQUFlQSxDQUFDZSxTQUFTO1FBQUUsT0FBTztZQUFDO1lBQUs7WUFBTTtZQUFHO1NBQUU7UUFBRSxPQUFPO0lBQUUsSUFDbEUsaUVBQWlFO0lBQ2pFLElBQUlYLCtDQUFlQSxDQUFDVyxTQUFTO1FBQ3pCLE9BQU87UUFDUCxNQUFNO1FBQ04sT0FBTztRQUNQLFVBQVU7WUFBQ3lCLE9BQU8sS0FBSztTQUFDO0lBQzVCLElBQ0EsSUFBSXBDLCtDQUFlQSxDQUFDVyxTQUFTO1FBQ3pCLE9BQU87UUFDUCxNQUFNO1FBQ04sT0FBTztRQUNQLFVBQVU7WUFBQ3lCLE9BQU8sS0FBSztZQUFFQSxPQUFPLE9BQU87WUFBRUEsT0FBTyxNQUFNO1lBQUVBLE9BQU8sUUFBUTtZQUFFQSxPQUFPLFFBQVE7U0FBQztJQUM3RixJQUNBLFNBQUNHLE9BQU9DO1FBQ0pwQixJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUNvQixRQUFRLE1BQU0sWUFBWSxDQUFDQSxRQUFRO0lBQ2hFO0lBRUosZ0VBQWdFO0lBQ2hFN0IsUUFBUSxNQUFNLENBQUMsSUFBSSxHQUFHO0lBQ3RCQSxRQUFRLE1BQU0sQ0FBQyxHQUFHLEdBQUc7SUFDckJBLFFBQVEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUc7SUFDbkNBLFFBQVEsSUFBSTtBQUNaLE9BQU87QUFDWDtBQUVlLFNBQVM4QjtJQUNwQixJQUFNQyxhQUFhbkMsdUNBQVksQ0FBb0I7SUFDbkQsSUFBTU0sWUFBWU4sdUNBQVksQ0FBZ0I7SUFDOUMsSUFBd0JvQyxtQ0FBQUEseUNBQWMsQ0FBTyxjQUF0Q0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixJQUFNRyxtQkFBbUIsMEJBQUNDO1FBQ3RCRixRQUFRRTtRQUNSLElBQU1wQyxVQUFVK0IsV0FBVyxPQUFPO1FBQ2xDLElBQU1OLFNBQVN2QixVQUFVLE9BQU87UUFDaEMsSUFBSSxDQUFDRixXQUFXLENBQUN5QixRQUFRO1FBRXpCRSxVQUFVRixRQUFRVztRQUNsQnBDLFFBQVEsS0FBSztJQUNqQjtJQUNBLHFCQUNJLGtEQUFDSCxnREFBSUE7UUFDRHdDLFNBQVMsU0FBVEEsUUFBVXJDLFNBQXFCQztZQUMzQjhCLFdBQVcsT0FBTyxHQUFHL0I7WUFDckJELEtBQUtDLFNBQVNDLFFBQVFDO1FBQzFCO1FBQ0EsUUFBUTtZQUFFLEtBQUs7Z0JBQUUsUUFBUUosd0NBQVNBO1lBQUM7UUFBRTtRQUNyQyxZQUFZO1lBQUUsY0FBYztRQUFLO1FBQ2pDLEtBQUs7a0JBQ0wsZ0VBQUNILHdDQUFTQTtZQUFDLFNBQVE7WUFBTyxnQkFBZTtZQUFlLFlBQVc7WUFBUyxVQUFTO3NCQUNqRixnRUFBQ0QsMENBQVdBO2dCQUFDLE9BQU91QztnQkFBTSxVQUFVRTs7a0NBQ2hDLGtEQUFDO2tDQUFnQjt1QkFBUjs7Ozs7a0NBQ1Qsa0RBQUM7a0NBQWtCO3VCQUFWOzs7OztrQ0FDVCxrREFBQztrQ0FBZ0I7dUJBQVI7Ozs7O2tDQUNULGtEQUFDO2tDQUFpQjt1QkFBVDs7Ozs7a0NBQ1Qsa0RBQUM7a0NBQW1CO3VCQUFYOzs7OztrQ0FDVCxrREFBQztrQ0FBbUI7dUJBQVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QjtBQUVBLHFCQUFxQjtBQUNyQjs7Q0FFQyxHQUNELFNBQVNSLFVBQVVGLE1BQWMsRUFBRVEsSUFBVTtRQUNwQ0ssa0NBQUFBLDJCQUFBQTs7UUFBTCxRQUFLQSxZQUFhQyxPQUFPLElBQUksQ0FBQ2QsNEJBQXpCYSxTQUFBQSw2QkFBQUEsUUFBQUEseUJBQUFBLGlDQUE0QztZQUE1Q0EsSUFBTUUsTUFBTkY7WUFDRGIsTUFBTSxDQUFDZSxJQUFJLENBQUMsTUFBTSxHQUFHQSxRQUFRUDtRQUNqQzs7UUFGS0s7UUFBQUE7OztpQkFBQUEsNkJBQUFBO2dCQUFBQTs7O2dCQUFBQTtzQkFBQUE7Ozs7QUFHVDtBQUNBLE9BQU87QUFFUCxpQ0FBaUM7QUFDakM7Ozs7Q0FJQyxHQUNELFNBQVNaLHNCQUFzQjFCLE9BQW1CO0lBQzlDLE9BQU8sSUFBSXBCLHlDQUFTQSxDQUFDO1FBQ2pCLFVBQVU7WUFDTiw0QkFBNEI7WUFDNUIsU0FBUztZQUNULFFBQVE7UUFDWjtRQUNBLG9CQUFvQjtZQUNoQjtZQUNBO1lBQ0E7WUFDQTtTQUNIO1FBQ0Q2RCxhQUFhLFNBQWJBO2dCQUFnQkMsZ0JBQUFBO1lBQ1osSUFBUUMsU0FBVzNDLFFBQVgyQztZQUNSRCxRQUFRLGdCQUFnQixDQUFDLDhCQUE4QkMsT0FBTyx1QkFBdUI7WUFDckZELFFBQVEsU0FBUyxDQUFDLFdBQVdDLE9BQU8sSUFBSTtZQUN4Q0QsUUFBUSxTQUFTLENBQUMsVUFBVUMsT0FBTyxHQUFHO1FBQzFDO0lBQ0o7QUFDSixFQUNBLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM01QOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDWDtBQUUxQyxJQUFNRyxRQUFRO0lBQUMsc0JBQXFCO0lBQThoSixlQUFjO0lBQThPLDJCQUEwQjtBQUFvaUM7QUFDNTNMLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QmhCLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDaUIsT0FBaUJqQixvQkFBWGtCLFVBQVdsQjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0Ysa0RBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ2MseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdPLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUd0QyxrREFBQ0osdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FBT0ksT0FBT0YsT0FBT0Q7Ozs7Ozs7Ozs7Ozs7O0FBRzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFFZDs7Ozs7Ozs7Ozs7OzswQkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNRTs7Ozs7OzRCQUFnQjs0QkFBQTswQ0FBRTs7Ozs7OzRCQUFVOzRCQUFBOzBDQUFvRDs7Ozs7OzRCQUFlO3lCQUFBOzs7Ozs7Ozs7OzBDQUUvRjs7Ozs7OzRCQUFjOzRCQUFBOzBDQUFFOzs7Ozs7NEJBQW1COzRCQUFBOzBDQUNrQjs7Ozs7OzRCQUFZOzRCQUFBOzBDQUVqRTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FDQTs7Ozs7OzRCQUFlOzRCQUFBOzBDQUFFOzs7Ozs7NEJBQU87eUJBQUE7Ozs7Ozs7Ozs7MENBRXhCOzs7Ozs7NEJBQXlDOzRCQUFBOzBDQUFFOzs7Ozs7NEJBQU87NEJBQUE7MENBQ3lDOzs7Ozs7NEJBQVU7NEJBQUE7MENBQ2hHOzs7Ozs7NEJBQXFCOzRCQUFBOzBDQUE0Qjs7Ozs7OzRCQUFpQjs0QkFBQTswQ0FBRTs7Ozs7OzRCQUFrQjs0QkFBQTswQ0FDM0Y7Ozs7Ozs0QkFBaUI7NEJBQUE7MENBQUk7Ozs7Ozs0QkFBZ0I7eUJBQUE7Ozs7Ozs7Ozs7MENBRXJDOzs7Ozs7NEJBQWlCOzRCQUFBOzBDQUFFOzs7Ozs7NEJBQU87NEJBQUE7MENBQzFCOzs7Ozs7NEJBQVU7NEJBQUE7MENBQWM7Ozs7Ozs0QkFBcUI7NEJBQUE7MENBQVE7Ozs7Ozs0QkFBYzt5QkFBQTs7Ozs7Ozs7Ozs7Ozs7OztvQkFFckU7b0JBQUE7a0NBQU07Ozs7OztvQkFBa0I7b0JBQUE7a0NBQWlCOzs7Ozs7b0JBQVU7aUJBQUE7Ozs7Ozs7OztvQkFHbkQ7b0JBQUE7a0NBSTBDOzs7Ozs7b0JBQXNCO29CQUFBO2tDQUFLOzs7Ozs7b0JBQXVCO2lCQUFBOzs7Ozs7Ozs7b0JBRzVGO29CQUFBOztrQ0FBSzs7Ozs7O29CQUF1RTtpQkFBQTs7Ozs7Ozs7O29CQUU1RTtvQkFBQTtrQ0FBUTs7Ozs7O29CQUFXO29CQUFBO2tDQUFxQjs7Ozs7O29CQUFJO29CQUFBO2tDQUFrQjs7Ozs7O29CQUFZO29CQUFBOztrQ0FBTzs7Ozs7O29CQUE0RDtpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJNUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDRDtBQUNBLFlBQVksZUFBZTtBQUMzQixZQUFZLG9DQUFvQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlCQUF5QjtBQUNwQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOEJBQThCO0FBQzVDO0FBQ0EsY0FBYyw4REFBOEQ7QUFDNUU7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBOztBQUV5Qjs7QUFFekIsV0FBVyx5QkFBeUI7QUFDcEM7O0FBRUEsbUJBQW1CLG9DQUFtQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBOEQ7QUFDekU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1AsNEJBQTRCLGlDQUFnQjs7QUFFNUM7QUFDQSxTQUFTLDhCQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxlQUFlO0FBQ2Y7QUFDTztBQUNQLGFBQWEseUJBQXlCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxTQUFTLG9DQUFtQjtBQUM1QjtBQUNBLEtBQUsscUJBQXFCO0FBQzFCO0FBQ0E7QUFDQSJ9