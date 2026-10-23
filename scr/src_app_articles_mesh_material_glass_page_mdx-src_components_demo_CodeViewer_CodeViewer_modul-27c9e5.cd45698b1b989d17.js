"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_glass_page_mdx-src_components_demo_CodeViewer_CodeViewer_modul-27c9e5"], {
51746(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/specimen.65584ec4a9a7b42d.glb";

},
48905(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne-glass.9ff51970b62c6c3f.glb";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
1438(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_mesh_suzanne_glass_glb__rspack_import_3 = __webpack_require__(48905);
/* import */ var _assets_cubemap_sky_contrast_posX_webp__rspack_import_4 = __webpack_require__(10618);
/* import */ var _assets_cubemap_sky_contrast_posY_webp__rspack_import_5 = __webpack_require__(24645);
/* import */ var _assets_cubemap_sky_contrast_posZ_webp__rspack_import_6 = __webpack_require__(85720);
/* import */ var _assets_cubemap_sky_contrast_negX_webp__rspack_import_7 = __webpack_require__(28814);
/* import */ var _assets_cubemap_sky_contrast_negY_webp__rspack_import_8 = __webpack_require__(51561);
/* import */ var _assets_cubemap_sky_contrast_negZ_webp__rspack_import_9 = __webpack_require__(30892);










function init(context, assets) {
    context.camera.fitSpaceAtTarget(2.5, 2.5);
    // #begin Initializing WebGL
    var skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ
    });
    // The glTF material uses KHR_materials_transmission,
    // so the default material is a TgdMaterialGlass.
    var suzanne = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzanne,
        skybox: skybox
    });
    // #end
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterSkybox(context, {
        camera: context.camera,
        texture: skybox
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            suzanne
        ]
    }));
    context.paint();
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glass_glb__rspack_import_3
            },
            image: {
                posX: _assets_cubemap_sky_contrast_posX_webp__rspack_import_4,
                posY: _assets_cubemap_sky_contrast_posY_webp__rspack_import_5,
                posZ: _assets_cubemap_sky_contrast_posZ_webp__rspack_import_6,
                negX: _assets_cubemap_sky_contrast_negX_webp__rspack_import_7,
                negY: _assets_cubemap_sky_contrast_negY_webp__rspack_import_8,
                negZ: _assets_cubemap_sky_contrast_negZ_webp__rspack_import_9
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_gltf/gltf.demo.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, this);
}


},
90132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _gltf_demo__rspack_import_4 = __webpack_require__(1438);
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
    "Initializing WebGL": "\tconst skybox = new TgdTextureCube(context, {\n\t\timagePosX: assets.image.posX,\n\t\timagePosY: assets.image.posY,\n\t\timagePosZ: assets.image.posZ,\n\t\timageNegX: assets.image.negX,\n\t\timageNegY: assets.image.negY,\n\t\timageNegZ: assets.image.negZ,\n\t});\n\t// The glTF material uses KHR_materials_transmission,\n\t// so the default material is a TgdMaterialGlass.\n\tconst suzanne = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzanne,\n\t\tskybox,\n\t});"
};
var FULL = "import {\n\ttype TgdContext,\n\tTgdPainterClear,\n\tTgdPainterMeshGltf,\n\tTgdPainterSkybox,\n\tTgdPainterState,\n\tTgdTextureCube,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport SuzanneGlassURL from \"@/assets/mesh/suzanne-glass.glb\";\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\";\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\";\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\";\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\";\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\";\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera.fitSpaceAtTarget(2.5, 2.5);\n\tconst skybox = new TgdTextureCube(context, {\n\t\timagePosX: assets.image.posX,\n\t\timagePosY: assets.image.posY,\n\t\timagePosZ: assets.image.posZ,\n\t\timageNegX: assets.image.negX,\n\t\timageNegY: assets.image.negY,\n\t\timageNegZ: assets.image.negZ,\n\t});\n\t// The glTF material uses KHR_materials_transmission,\n\t// so the default material is a TgdMaterialGlass.\n\tconst suzanne = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzanne,\n\t\tskybox,\n\t});\n\tcontext.add(\n\t\tnew TgdPainterClear(context, { depth: 1 }),\n\t\tnew TgdPainterSkybox(context, {\n\t\t\tcamera: context.camera,\n\t\t\ttexture: skybox,\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tchildren: [suzanne],\n\t\t}),\n\t);\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{\n\t\t\t\tglb: { suzanne: SuzanneGlassURL },\n\t\t\t\timage: {\n\t\t\t\t\tposX: PosX,\n\t\t\t\t\tposY: PosY,\n\t\t\t\t\tposZ: PosZ,\n\t\t\t\t\tnegX: NegX,\n\t\t\t\t\tnegY: NegY,\n\t\t\t\t\tnegZ: NegZ,\n\t\t\t\t},\n\t\t\t}}\n\t\t\toptions={{ alpha: false }}\n\t\t\tcontroller={{ inertiaOrbit: 1000 }}\n\t\t\tgizmo\n\t\t/>\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_gltf_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_gltf/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_gltf/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_gltf/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_gltf/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_gltf/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_gltf/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
77681(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _utils_hooks_float__rspack_import_4 = __webpack_require__(24429);
/* import */ var _tolokoban_ui__rspack_import_5 = __webpack_require__(62430);
/* import */ var _assets_mesh_specimen_glb__rspack_import_6 = __webpack_require__(51746);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_7 = __webpack_require__(21278);
/* import */ var _assets_cubemap_sky_contrast_posX_webp__rspack_import_8 = __webpack_require__(10618);
/* import */ var _assets_cubemap_sky_contrast_posY_webp__rspack_import_9 = __webpack_require__(24645);
/* import */ var _assets_cubemap_sky_contrast_posZ_webp__rspack_import_10 = __webpack_require__(85720);
/* import */ var _assets_cubemap_sky_contrast_negX_webp__rspack_import_11 = __webpack_require__(28814);
/* import */ var _assets_cubemap_sky_contrast_negY_webp__rspack_import_12 = __webpack_require__(51561);
/* import */ var _assets_cubemap_sky_contrast_negZ_webp__rspack_import_13 = __webpack_require__(30892);
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
    context.camera.fitSpaceAtTarget(13, 1.1);
    // #begin Initializing WebGL
    var color = [
        0.4,
        0.8,
        1,
        0.1
    ];
    var skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ
    });
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialGlass({
        color: color,
        ambientColor: skybox,
        lights: [
            new _tolokoban_tgd__rspack_import_1.TgdLight({
                color: [
                    1,
                    0.9,
                    0.7,
                    1
                ],
                direction: [
                    -1,
                    -0.5,
                    -1
                ]
            })
        ]
    });
    var specimen = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.specimen,
        material: material
    });
    var suzanne = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzanne,
        material: material
    });
    var sphere = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometrySphereIco({
            subdivisions: 3
        }),
        material: material
    });
    var cube = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox(),
        material: material
    });
    // #end
    var meshes = {
        specimen: specimen,
        suzanne: suzanne,
        sphere: sphere,
        cube: cube
    };
    var size = computeSize(specimen);
    fitSize(suzanne, size);
    fitSize(sphere, size);
    fitSize(cube, size);
    activateMesh(meshes, "specimen");
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.1,
            0.2,
            0.3,
            1
        ],
        depth: 1
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            specimen,
            suzanne,
            sphere,
            cube
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.values(meshes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var mesh = _step.value;
                mesh.transfo.setEulerRotation(0, Math.sin(time) * 20, 0);
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
        var color = _tolokoban_tgd__rspack_import_1.TgdColor.fromHSL(time * 0.1, 0.7, 0.1);
        clear.red = color.R;
        clear.green = color.G;
        clear.blue = color.B;
    }));
    context.play();
    return {
        shape: function shape(value) {
            activateMesh(meshes, value);
            context.paint();
        },
        specularExponent: function specularExponent(value) {
            material.specularExponent = value;
            context.paint();
        },
        specularIntensity: function specularIntensity(value) {
            material.specularIntensity = value;
            context.paint();
        },
        opacityMin: function opacityMin(value) {
            material.color.w = value;
            context.paint();
        },
        opacityMax: function opacityMax(value) {
            material.opacityMax = value;
            context.paint();
        },
        roughness: function roughness(value) {
            material.roughness = value;
            context.paint();
        },
        ior: function ior(value) {
            material.ior = value;
            context.paint();
        }
    };
}
function Demo() {
    var ref = react__rspack_import_3_default().useRef(null);
    var srv = ref.current;
    var _useFloat = _sliced_to_array((0,_utils_hooks_float__rspack_import_4.useFloat)(2.2, srv === null || srv === void 0 ? void 0 : srv.specularExponent), 2), specularExponent = _useFloat[0], setSpecularExponent = _useFloat[1];
    var _useFloat1 = _sliced_to_array((0,_utils_hooks_float__rspack_import_4.useFloat)(2, srv === null || srv === void 0 ? void 0 : srv.specularIntensity), 2), specularIntensity = _useFloat1[0], setSpecularIntensity = _useFloat1[1];
    var _useFloat2 = _sliced_to_array((0,_utils_hooks_float__rspack_import_4.useFloat)(0.1, srv === null || srv === void 0 ? void 0 : srv.opacityMin), 2), opacityMin = _useFloat2[0], setOpacityMin = _useFloat2[1];
    var _useFloat3 = _sliced_to_array((0,_utils_hooks_float__rspack_import_4.useFloat)(0.6, srv === null || srv === void 0 ? void 0 : srv.opacityMax), 2), opacityMax = _useFloat3[0], setOpacityMax = _useFloat3[1];
    var _useFloat4 = _sliced_to_array((0,_utils_hooks_float__rspack_import_4.useFloat)(0.05, srv === null || srv === void 0 ? void 0 : srv.roughness), 2), roughness = _useFloat4[0], setRoughness = _useFloat4[1];
    var _useFloat5 = _sliced_to_array((0,_utils_hooks_float__rspack_import_4.useFloat)(1.5, srv === null || srv === void 0 ? void 0 : srv.ior), 2), ior = _useFloat5[0], setIor = _useFloat5[1];
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState("specimen"), 2), shape = _React_useState[0], setShape = _React_useState[1];
    var handleShapeChange = function handleShapeChange(value) {
        var _ref_current;
        setShape(value);
        (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.shape(value);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
            onReady: function onReady(scene, assets) {
                ref.current = init(scene, assets);
            },
            assets: {
                glb: {
                    specimen: _assets_mesh_specimen_glb__rspack_import_6,
                    suzanne: _assets_mesh_suzanne_glb__rspack_import_7
                },
                image: {
                    posX: _assets_cubemap_sky_contrast_posX_webp__rspack_import_8,
                    posY: _assets_cubemap_sky_contrast_posY_webp__rspack_import_9,
                    posZ: _assets_cubemap_sky_contrast_posZ_webp__rspack_import_10,
                    negX: _assets_cubemap_sky_contrast_negX_webp__rspack_import_11,
                    negY: _assets_cubemap_sky_contrast_negY_webp__rspack_import_12,
                    negZ: _assets_cubemap_sky_contrast_negZ_webp__rspack_import_13
                }
            },
            controller: {
                inertiaOrbit: 1000
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewOptions, {
                    value: shape,
                    onChange: handleShapeChange,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "specimen"
                        }, "specimen", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 183,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "suzanne"
                        }, "suzanne", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 184,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "sphere"
                        }, "sphere", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 185,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "cube"
                        }, "cube", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 186,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                    lineNumber: 182,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewPanel, {
                    display: "flex",
                    "flex-wrap": "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: "S",
                    width: "600px",
                    maxWidth: "600px",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "specularExponent",
                            value: specularExponent,
                            onChange: setSpecularExponent
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 197,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "specularIntensity",
                            value: specularIntensity,
                            onChange: setSpecularIntensity
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 202,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                    lineNumber: 188,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewPanel, {
                    display: "flex",
                    "flex-wrap": "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: "S",
                    width: "600px",
                    maxWidth: "600px",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "color alpha",
                            value: opacityMin,
                            onChange: setOpacityMin
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 217,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "opacityMax",
                            value: opacityMax,
                            onChange: setOpacityMax
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 222,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                    lineNumber: 208,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewPanel, {
                    display: "flex",
                    "flex-wrap": "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: "S",
                    width: "600px",
                    maxWidth: "600px",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "roughness",
                            value: roughness,
                            onChange: setRoughness
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 237,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_5.ViewInputNumber, {
                            label: "ior",
                            value: ior,
                            onChange: setIor
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                            lineNumber: 242,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
                    lineNumber: 228,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
            lineNumber: 160,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/_material.demo.tsx",
        lineNumber: 159,
        columnNumber: 3
    }, this);
}
// #begin activateMesh()
function activateMesh(meshes, shape) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.keys(meshes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            meshes[key].active = key === shape;
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
// #begin computeSize()
function computeSize(mesh) {
    var _mesh_computeBoundingBox = mesh.computeBoundingBox(), min = _mesh_computeBoundingBox.min, max = _mesh_computeBoundingBox.max;
    return Math.max(max.x - min.x, max.y - min.y, max.z - min.z);
}
// #end
// #begin fitSize()
/**
 * Scale the mesh to make its biggest dimension equal to `size`.
 */ function fitSize(mesh, size) {
    var scale = size / computeSize(mesh);
    mesh.transfo.setScale(scale, scale, scale);
} // #end


},
67080(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _material_demo__rspack_import_4 = __webpack_require__(77681);
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
    "Initializing WebGL": "\tconst color: ArrayNumber4 = [0.4, 0.8, 1, 0.1];\n\tconst skybox = new TgdTextureCube(context, {\n\t\timagePosX: assets.image.posX,\n\t\timagePosY: assets.image.posY,\n\t\timagePosZ: assets.image.posZ,\n\t\timageNegX: assets.image.negX,\n\t\timageNegY: assets.image.negY,\n\t\timageNegZ: assets.image.negZ,\n\t});\n\tconst material = new TgdMaterialGlass({\n\t\tcolor,\n\t\tambientColor: skybox,\n\t\tlights: [\n\t\t\tnew TgdLight({\n\t\t\t\tcolor: [1, 0.9, 0.7, 1],\n\t\t\t\tdirection: [-1, -0.5, -1],\n\t\t\t}),\n\t\t],\n\t});\n\tconst specimen = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.specimen,\n\t\tmaterial,\n\t});\n\tconst suzanne = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzanne,\n\t\tmaterial,\n\t});\n\tconst sphere = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometrySphereIco({ subdivisions: 3 }),\n\t\tmaterial,\n\t});\n\tconst cube = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox(),\n\t\tmaterial,\n\t});",
    "activateMesh()": "function activateMesh(meshes: Record<Shape, TgdPainterMesh>, shape: Shape) {\n\tfor (const key of Object.keys(meshes) as Shape[]) {\n\t\tmeshes[key].active = key === shape;\n\t}\n}",
    "computeSize()": "function computeSize(mesh: TgdPainterMesh): number {\n\tconst { min, max } = mesh.computeBoundingBox();\n\treturn Math.max(max.x - min.x, max.y - min.y, max.z - min.z);\n}",
    "fitSize()": "/**\n * Scale the mesh to make its biggest dimension equal to `size`.\n */\nfunction fitSize(mesh: TgdPainterMesh, size: number) {\n\tconst scale = size / computeSize(mesh);\n\tmesh.transfo.setScale(scale, scale, scale);\n}"
};
var FULL = "import {\n\ttype ArrayNumber4,\n\ttype TgdContext,\n\tTgdPainterClear,\n\tTgdPainterMeshGltf,\n\tTgdPainterState,\n\ttgdCalcRandom3,\n\twebglPresetDepth,\n\tTgdTextureCube,\n\tTgdPainterLogic,\n\tTgdPainterSkybox,\n\tTgdMaterialGlass,\n\tTgdColor,\n\tTgdLight,\n\tTgdPainterMesh,\n\tTgdGeometrySphereIco,\n\tTgdGeometryBox,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\nimport React from \"react\";\nimport { useFloat } from \"@/utils/hooks/float\";\nimport { ViewInputNumber, ViewOptions, ViewPanel } from \"@tolokoban/ui\";\n\nimport SpecimenURL from \"@/assets/mesh/specimen.glb\";\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\";\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\";\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\";\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\";\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\";\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\";\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\";\n\ntype Shape = \"specimen\" | \"suzanne\" | \"sphere\" | \"cube\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera.fitSpaceAtTarget(13, 1.1);\n\tconst color: ArrayNumber4 = [0.4, 0.8, 1, 0.1];\n\tconst skybox = new TgdTextureCube(context, {\n\t\timagePosX: assets.image.posX,\n\t\timagePosY: assets.image.posY,\n\t\timagePosZ: assets.image.posZ,\n\t\timageNegX: assets.image.negX,\n\t\timageNegY: assets.image.negY,\n\t\timageNegZ: assets.image.negZ,\n\t});\n\tconst material = new TgdMaterialGlass({\n\t\tcolor,\n\t\tambientColor: skybox,\n\t\tlights: [\n\t\t\tnew TgdLight({\n\t\t\t\tcolor: [1, 0.9, 0.7, 1],\n\t\t\t\tdirection: [-1, -0.5, -1],\n\t\t\t}),\n\t\t],\n\t});\n\tconst specimen = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.specimen,\n\t\tmaterial,\n\t});\n\tconst suzanne = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzanne,\n\t\tmaterial,\n\t});\n\tconst sphere = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometrySphereIco({ subdivisions: 3 }),\n\t\tmaterial,\n\t});\n\tconst cube = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox(),\n\t\tmaterial,\n\t});\n\tconst meshes: Record<Shape, TgdPainterMesh> = {\n\t\tspecimen,\n\t\tsuzanne,\n\t\tsphere,\n\t\tcube,\n\t};\n\tconst size = computeSize(specimen);\n\tfitSize(suzanne, size);\n\tfitSize(sphere, size);\n\tfitSize(cube, size);\n\tactivateMesh(meshes, \"specimen\");\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t});\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tchildren: [specimen, suzanne, sphere, cube],\n\t\t}),\n\t\tnew TgdPainterLogic((time) => {\n\t\t\tfor (const mesh of Object.values(meshes)) {\n\t\t\t\tmesh.transfo.setEulerRotation(0, Math.sin(time) * 20, 0);\n\t\t\t}\n\t\t\tconst color = TgdColor.fromHSL(time * 0.1, 0.7, 0.1);\n\t\t\tclear.red = color.R;\n\t\t\tclear.green = color.G;\n\t\t\tclear.blue = color.B;\n\t\t}),\n\t);\n\tcontext.play();\n\treturn {\n\t\tshape(value: Shape) {\n\t\t\tactivateMesh(meshes, value);\n\t\t\tcontext.paint();\n\t\t},\n\t\tspecularExponent(value: number) {\n\t\t\tmaterial.specularExponent = value;\n\t\t\tcontext.paint();\n\t\t},\n\t\tspecularIntensity(value: number) {\n\t\t\tmaterial.specularIntensity = value;\n\t\t\tcontext.paint();\n\t\t},\n\t\topacityMin(value: number) {\n\t\t\tmaterial.color.w = value;\n\t\t\tcontext.paint();\n\t\t},\n\t\topacityMax(value: number) {\n\t\t\tmaterial.opacityMax = value;\n\t\t\tcontext.paint();\n\t\t},\n\t\troughness(value: number) {\n\t\t\tmaterial.roughness = value;\n\t\t\tcontext.paint();\n\t\t},\n\t\tior(value: number) {\n\t\t\tmaterial.ior = value;\n\t\t\tcontext.paint();\n\t\t},\n\t};\n}\n\nexport default function Demo() {\n\tconst ref = React.useRef<ReturnType<typeof init> | null>(null);\n\tconst srv = ref.current;\n\tconst [specularExponent, setSpecularExponent] = useFloat(\n\t\t2.2,\n\t\tsrv?.specularExponent,\n\t);\n\tconst [specularIntensity, setSpecularIntensity] = useFloat(\n\t\t2,\n\t\tsrv?.specularIntensity,\n\t);\n\tconst [opacityMin, setOpacityMin] = useFloat(0.1, srv?.opacityMin);\n\tconst [opacityMax, setOpacityMax] = useFloat(0.6, srv?.opacityMax);\n\tconst [roughness, setRoughness] = useFloat(0.05, srv?.roughness);\n\tconst [ior, setIor] = useFloat(1.5, srv?.ior);\n\tconst [shape, setShape] = React.useState<Shape>(\"specimen\");\n\tconst handleShapeChange = (value: Shape) => {\n\t\tsetShape(value);\n\t\tref.current?.shape(value);\n\t};\n\treturn (\n\t\t<div>\n\t\t\t<View\n\t\t\t\tonReady={(scene: TgdContext, assets: Assets) => {\n\t\t\t\t\tref.current = init(scene, assets);\n\t\t\t\t}}\n\t\t\t\tassets={{\n\t\t\t\t\tglb: {\n\t\t\t\t\t\tspecimen: SpecimenURL,\n\t\t\t\t\t\tsuzanne: SuzanneURL,\n\t\t\t\t\t},\n\t\t\t\t\timage: {\n\t\t\t\t\t\tposX: PosX,\n\t\t\t\t\t\tposY: PosY,\n\t\t\t\t\t\tposZ: PosZ,\n\t\t\t\t\t\tnegX: NegX,\n\t\t\t\t\t\tnegY: NegY,\n\t\t\t\t\t\tnegZ: NegZ,\n\t\t\t\t\t},\n\t\t\t\t}}\n\t\t\t\tcontroller={{\n\t\t\t\t\tinertiaOrbit: 1000,\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\t<ViewOptions value={shape} onChange={handleShapeChange}>\n\t\t\t\t\t<div key=\"specimen\">specimen</div>\n\t\t\t\t\t<div key=\"suzanne\">suzanne</div>\n\t\t\t\t\t<div key=\"sphere\">sphere</div>\n\t\t\t\t\t<div key=\"cube\">cube</div>\n\t\t\t\t</ViewOptions>\n\t\t\t\t<ViewPanel\n\t\t\t\t\tdisplay=\"flex\"\n\t\t\t\t\tflex-wrap=\"wrap\"\n\t\t\t\t\tjustifyContent=\"space-around\"\n\t\t\t\t\talignItems=\"center\"\n\t\t\t\t\tgap=\"S\"\n\t\t\t\t\twidth=\"600px\"\n\t\t\t\t\tmaxWidth=\"600px\"\n\t\t\t\t>\n\t\t\t\t\t<ViewInputNumber\n\t\t\t\t\t\tlabel=\"specularExponent\"\n\t\t\t\t\t\tvalue={specularExponent}\n\t\t\t\t\t\tonChange={setSpecularExponent}\n\t\t\t\t\t/>\n\t\t\t\t\t<ViewInputNumber\n\t\t\t\t\t\tlabel=\"specularIntensity\"\n\t\t\t\t\t\tvalue={specularIntensity}\n\t\t\t\t\t\tonChange={setSpecularIntensity}\n\t\t\t\t\t/>\n\t\t\t\t</ViewPanel>\n\t\t\t\t<ViewPanel\n\t\t\t\t\tdisplay=\"flex\"\n\t\t\t\t\tflex-wrap=\"wrap\"\n\t\t\t\t\tjustifyContent=\"space-around\"\n\t\t\t\t\talignItems=\"center\"\n\t\t\t\t\tgap=\"S\"\n\t\t\t\t\twidth=\"600px\"\n\t\t\t\t\tmaxWidth=\"600px\"\n\t\t\t\t>\n\t\t\t\t\t<ViewInputNumber\n\t\t\t\t\t\tlabel=\"color alpha\"\n\t\t\t\t\t\tvalue={opacityMin}\n\t\t\t\t\t\tonChange={setOpacityMin}\n\t\t\t\t\t/>\n\t\t\t\t\t<ViewInputNumber\n\t\t\t\t\t\tlabel=\"opacityMax\"\n\t\t\t\t\t\tvalue={opacityMax}\n\t\t\t\t\t\tonChange={setOpacityMax}\n\t\t\t\t\t/>\n\t\t\t\t</ViewPanel>\n\t\t\t\t<ViewPanel\n\t\t\t\t\tdisplay=\"flex\"\n\t\t\t\t\tflex-wrap=\"wrap\"\n\t\t\t\t\tjustifyContent=\"space-around\"\n\t\t\t\t\talignItems=\"center\"\n\t\t\t\t\tgap=\"S\"\n\t\t\t\t\twidth=\"600px\"\n\t\t\t\t\tmaxWidth=\"600px\"\n\t\t\t\t>\n\t\t\t\t\t<ViewInputNumber\n\t\t\t\t\t\tlabel=\"roughness\"\n\t\t\t\t\t\tvalue={roughness}\n\t\t\t\t\t\tonChange={setRoughness}\n\t\t\t\t\t/>\n\t\t\t\t\t<ViewInputNumber label=\"ior\" value={ior} onChange={setIor} />\n\t\t\t\t</ViewPanel>\n\t\t\t</View>\n\t\t</div>\n\t);\n}\n\nfunction activateMesh(meshes: Record<Shape, TgdPainterMesh>, shape: Shape) {\n\tfor (const key of Object.keys(meshes) as Shape[]) {\n\t\tmeshes[key].active = key === shape;\n\t}\n}\n\nfunction computeSize(mesh: TgdPainterMesh): number {\n\tconst { min, max } = mesh.computeBoundingBox();\n\treturn Math.max(max.x - min.x, max.y - min.y, max.z - min.z);\n}\n\n/**\n * Scale the mesh to make its biggest dimension equal to `size`.\n */\nfunction fitSize(mesh: TgdPainterMesh, size: number) {\n\tconst scale = size / computeSize(mesh);\n\tmesh.transfo.setScale(scale, scale, scale);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/_material/index.tsx",
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
56287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _material__rspack_import_1 = __webpack_require__(67080);
/* import */ var _gltf__rspack_import_2 = __webpack_require__(90132);
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
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Glass material"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "The glass material is rendered in a single pass, with a premultiplied alpha blending."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "Fresnel"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 8,
                                columnNumber: 3
                            }, this),
                            ": the glass reflects about 4% of the environment when you look at it straight on (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "ior = 1.5"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 8,
                                columnNumber: 96
                            }, this),
                            "), and almost everything at grazing angles."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 8,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "Reflections"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 9,
                                columnNumber: 3
                            }, this),
                            " of ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "ambientColor"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 9,
                                columnNumber: 22
                            }, this),
                            " (usually the skybox) and of the ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "lights"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 9,
                                columnNumber: 69
                            }, this),
                            " are not tinted by ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "color"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 9,
                                columnNumber: 96
                            }, this),
                            ", and don't hide what is behind the glass."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 9,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "Thickness"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 10,
                                columnNumber: 3
                            }, this),
                            ": the tint opacity grows from the alpha of ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "color"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 10,
                                columnNumber: 59
                            }, this),
                            " (facing the camera) up to ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "opacityMax"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 10,
                                columnNumber: 93
                            }, this),
                            " near the silhouette."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "Roughness"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 11,
                                columnNumber: 3
                            }, this),
                            ": blurs the reflections (frosted glass) and widens the highlights of the lights."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 11,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "The depth is tested but not written, so paint the glass after the opaque objects."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "From a glTF file"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterMeshGltf"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 19,
                        columnNumber: 1
                    }, this),
                    " uses a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdMaterialGlass"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 19,
                        columnNumber: 29
                    }, this),
                    " by default when the glTF material has the\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_transmission",
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                            children: "KHR_materials_transmission"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                            lineNumber: 20,
                            columnNumber: 2
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 20,
                        columnNumber: 1
                    }, this),
                    "\nextension with a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "transmissionFactor"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 21,
                        columnNumber: 18
                    }, this),
                    " greater than 0. Blender exports it when the\n\"Transmission Weight\" of the Principled BSDF is not 0."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 19,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "color"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 24,
                                columnNumber: 3
                            }, this),
                            " is the ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "baseColorFactor"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 24,
                                columnNumber: 18
                            }, this),
                            " (or the ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "baseColorTexture"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 24,
                                columnNumber: 44
                            }, this),
                            ", multiplied by ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "baseColorFactor"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 24,
                                columnNumber: 78
                            }, this),
                            ")."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 24,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "The alpha of ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "color"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 25,
                                columnNumber: 16
                            }, this),
                            " (the minimal opacity of the tint) is ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "1 - 0.9 * transmissionFactor"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 25,
                                columnNumber: 61
                            }, this),
                            ", so 0.1 for a full transmission."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 25,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "ior"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 26,
                                columnNumber: 3
                            }, this),
                            " comes from the ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "KHR_materials_ior"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 26,
                                columnNumber: 24
                            }, this),
                            " extension (default 1.5)."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 26,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "roughness"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 27,
                                columnNumber: 3
                            }, this),
                            " is the ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "roughnessFactor"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 27,
                                columnNumber: 22
                            }, this),
                            "."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 27,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "normalMap"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 28,
                                columnNumber: 3
                            }, this),
                            " is the ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "normalTexture"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 28,
                                columnNumber: 22
                            }, this),
                            "."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 28,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "ambientColor"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 29,
                                columnNumber: 3
                            }, this),
                            " is the ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "skybox"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                                lineNumber: 29,
                                columnNumber: 25
                            }, this),
                            " option of the painter."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 29,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 24,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "There is no light, so you only get the reflections of the environment.\nTo add lights, pass your own ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "material"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 32,
                        columnNumber: 30
                    }, this),
                    " function: it receives the\ndescription of the glTF material, with a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "transmission"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 33,
                        columnNumber: 42
                    }, this),
                    " attribute for glass."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 31,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_gltf__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 35,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 37,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                    lineNumber: 39,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 39,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9nbGFzc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC0yN2M5ZTUuY2Q0NTY5OGIxYjk4OWQxNy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsYXNzL19nbHRmL2dsdGYuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvZ2xhc3MvX2dsdGYvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsYXNzL19tYXRlcmlhbC9fbWF0ZXJpYWwuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvZ2xhc3MvX21hdGVyaWFsL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy91dGlscy9ob29rcy9mbG9hdC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9nbGFzcy9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlck1lc2hHbHRmLFxuXHRUZ2RQYWludGVyU2t5Ym94LFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmVDdWJlLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG5pbXBvcnQgU3V6YW5uZUdsYXNzVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUtZ2xhc3MuZ2xiXCI7XG5pbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXCI7XG5pbXBvcnQgUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWS53ZWJwXCI7XG5pbXBvcnQgUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXCI7XG5pbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXCI7XG5pbXBvcnQgTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWS53ZWJwXCI7XG5pbXBvcnQgTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLjUsIDIuNSk7XG5cdC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcblx0Y29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcblx0XHRpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxuXHRcdGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXG5cdFx0aW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcblx0XHRpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxuXHRcdGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXG5cdFx0aW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcblx0fSk7XG5cdC8vIFRoZSBnbFRGIG1hdGVyaWFsIHVzZXMgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24sXG5cdC8vIHNvIHRoZSBkZWZhdWx0IG1hdGVyaWFsIGlzIGEgVGdkTWF0ZXJpYWxHbGFzcy5cblx0Y29uc3Qgc3V6YW5uZSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXG5cdFx0c2t5Ym94LFxuXHR9KTtcblx0Ly8gI2VuZFxuXHRjb250ZXh0LmFkZChcblx0XHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgZGVwdGg6IDEgfSksXG5cdFx0bmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xuXHRcdFx0Y2FtZXJhOiBjb250ZXh0LmNhbWVyYSxcblx0XHRcdHRleHR1cmU6IHNreWJveCxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0XHRjaGlsZHJlbjogW3N1emFubmVdLFxuXHRcdH0pLFxuXHQpO1xuXHRjb250ZXh0LnBhaW50KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0Z2xiOiB7IHN1emFubmU6IFN1emFubmVHbGFzc1VSTCB9LFxuXHRcdFx0XHRpbWFnZToge1xuXHRcdFx0XHRcdHBvc1g6IFBvc1gsXG5cdFx0XHRcdFx0cG9zWTogUG9zWSxcblx0XHRcdFx0XHRwb3NaOiBQb3NaLFxuXHRcdFx0XHRcdG5lZ1g6IE5lZ1gsXG5cdFx0XHRcdFx0bmVnWTogTmVnWSxcblx0XHRcdFx0XHRuZWdaOiBOZWdaLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHRcdG9wdGlvbnM9e3sgYWxwaGE6IGZhbHNlIH19XG5cdFx0XHRjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fVxuXHRcdFx0Z2l6bW9cblx0XHQvPlxuXHQpO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2dsdGYuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XCJcXHRjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcblxcdFxcdGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuXFx0XFx0aW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG5cXHRcXHRpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcblxcdFxcdGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuXFx0XFx0aW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG5cXHRcXHRpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcblxcdH0pO1xcblxcdC8vIFRoZSBnbFRGIG1hdGVyaWFsIHVzZXMgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24sXFxuXFx0Ly8gc28gdGhlIGRlZmF1bHQgbWF0ZXJpYWwgaXMgYSBUZ2RNYXRlcmlhbEdsYXNzLlxcblxcdGNvbnN0IHN1emFubmUgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG5cXHRcXHRhc3NldDogYXNzZXRzLmdsYi5zdXphbm5lLFxcblxcdFxcdHNreWJveCxcXG5cXHR9KTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyTWVzaEdsdGYsXFxuXFx0VGdkUGFpbnRlclNreWJveCxcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0VGdkVGV4dHVyZUN1YmUsXFxuXFx0d2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxuaW1wb3J0IFN1emFubmVHbGFzc1VSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUtZ2xhc3MuZ2xiXFxcIjtcXG5pbXBvcnQgUG9zWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NYLndlYnBcXFwiO1xcbmltcG9ydCBQb3NZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFxcXCI7XFxuaW1wb3J0IFBvc1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXFxcIjtcXG5pbXBvcnQgTmVnWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdYLndlYnBcXFwiO1xcbmltcG9ydCBOZWdZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFxcXCI7XFxuaW1wb3J0IE5lZ1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLjUsIDIuNSk7XFxuXFx0Y29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG5cXHRcXHRpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcblxcdFxcdGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuXFx0XFx0aW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG5cXHRcXHRpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcblxcdFxcdGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuXFx0XFx0aW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG5cXHR9KTtcXG5cXHQvLyBUaGUgZ2xURiBtYXRlcmlhbCB1c2VzIEtIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uLFxcblxcdC8vIHNvIHRoZSBkZWZhdWx0IG1hdGVyaWFsIGlzIGEgVGdkTWF0ZXJpYWxHbGFzcy5cXG5cXHRjb25zdCBzdXphbm5lID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuXFx0XFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcXG5cXHRcXHRza3lib3gsXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGRlcHRoOiAxIH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcXG5cXHRcXHRcXHRjYW1lcmE6IGNvbnRleHQuY2FtZXJhLFxcblxcdFxcdFxcdHRleHR1cmU6IHNreWJveCxcXG5cXHRcXHR9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdFxcdGNoaWxkcmVuOiBbc3V6YW5uZV0sXFxuXFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0YXNzZXRzPXt7XFxuXFx0XFx0XFx0XFx0Z2xiOiB7IHN1emFubmU6IFN1emFubmVHbGFzc1VSTCB9LFxcblxcdFxcdFxcdFxcdGltYWdlOiB7XFxuXFx0XFx0XFx0XFx0XFx0cG9zWDogUG9zWCxcXG5cXHRcXHRcXHRcXHRcXHRwb3NZOiBQb3NZLFxcblxcdFxcdFxcdFxcdFxcdHBvc1o6IFBvc1osXFxuXFx0XFx0XFx0XFx0XFx0bmVnWDogTmVnWCxcXG5cXHRcXHRcXHRcXHRcXHRuZWdZOiBOZWdZLFxcblxcdFxcdFxcdFxcdFxcdG5lZ1o6IE5lZ1osXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdG9wdGlvbnM9e3sgYWxwaGE6IGZhbHNlIH19XFxuXFx0XFx0XFx0Y29udHJvbGxlcj17eyBpbmVydGlhT3JiaXQ6IDEwMDAgfX1cXG5cXHRcXHRcXHRnaXptb1xcblxcdFxcdC8+XFxuXFx0KTtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdHR5cGUgQXJyYXlOdW1iZXI0LFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlck1lc2hHbHRmLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdHRnZENhbGNSYW5kb20zLFxuXHR3ZWJnbFByZXNldERlcHRoLFxuXHRUZ2RUZXh0dXJlQ3ViZSxcblx0VGdkUGFpbnRlckxvZ2ljLFxuXHRUZ2RQYWludGVyU2t5Ym94LFxuXHRUZ2RNYXRlcmlhbEdsYXNzLFxuXHRUZ2RDb2xvcixcblx0VGdkTGlnaHQsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RHZW9tZXRyeVNwaGVyZUljbyxcblx0VGdkR2VvbWV0cnlCb3gsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XCI7XG5pbXBvcnQgeyBWaWV3SW5wdXROdW1iZXIsIFZpZXdPcHRpb25zLCBWaWV3UGFuZWwgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuXG5pbXBvcnQgU3BlY2ltZW5VUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3BlY2ltZW4uZ2xiXCI7XG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiO1xuaW1wb3J0IFBvc1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1gud2VicFwiO1xuaW1wb3J0IFBvc1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFwiO1xuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1oud2VicFwiO1xuaW1wb3J0IE5lZ1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1gud2VicFwiO1xuaW1wb3J0IE5lZ1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFwiO1xuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1oud2VicFwiO1xuXG50eXBlIFNoYXBlID0gXCJzcGVjaW1lblwiIHwgXCJzdXphbm5lXCIgfCBcInNwaGVyZVwiIHwgXCJjdWJlXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxMywgMS4xKTtcblx0Ly8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuXHRjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWzAuNCwgMC44LCAxLCAwLjFdO1xuXHRjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xuXHRcdGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXG5cdFx0aW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcblx0XHRpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxuXHRcdGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXG5cdFx0aW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcblx0XHRpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxuXHR9KTtcblx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbGFzcyh7XG5cdFx0Y29sb3IsXG5cdFx0YW1iaWVudENvbG9yOiBza3lib3gsXG5cdFx0bGlnaHRzOiBbXG5cdFx0XHRuZXcgVGdkTGlnaHQoe1xuXHRcdFx0XHRjb2xvcjogWzEsIDAuOSwgMC43LCAxXSxcblx0XHRcdFx0ZGlyZWN0aW9uOiBbLTEsIC0wLjUsIC0xXSxcblx0XHRcdH0pLFxuXHRcdF0sXG5cdH0pO1xuXHRjb25zdCBzcGVjaW1lbiA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLnNwZWNpbWVuLFxuXHRcdG1hdGVyaWFsLFxuXHR9KTtcblx0Y29uc3Qgc3V6YW5uZSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXG5cdFx0bWF0ZXJpYWwsXG5cdH0pO1xuXHRjb25zdCBzcGhlcmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuXHRcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oeyBzdWJkaXZpc2lvbnM6IDMgfSksXG5cdFx0bWF0ZXJpYWwsXG5cdH0pO1xuXHRjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcblx0XHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KCksXG5cdFx0bWF0ZXJpYWwsXG5cdH0pO1xuXHQvLyAjZW5kXG5cdGNvbnN0IG1lc2hlczogUmVjb3JkPFNoYXBlLCBUZ2RQYWludGVyTWVzaD4gPSB7XG5cdFx0c3BlY2ltZW4sXG5cdFx0c3V6YW5uZSxcblx0XHRzcGhlcmUsXG5cdFx0Y3ViZSxcblx0fTtcblx0Y29uc3Qgc2l6ZSA9IGNvbXB1dGVTaXplKHNwZWNpbWVuKTtcblx0Zml0U2l6ZShzdXphbm5lLCBzaXplKTtcblx0Zml0U2l6ZShzcGhlcmUsIHNpemUpO1xuXHRmaXRTaXplKGN1YmUsIHNpemUpO1xuXHRhY3RpdmF0ZU1lc2gobWVzaGVzLCBcInNwZWNpbWVuXCIpO1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXG5cdFx0ZGVwdGg6IDEsXG5cdH0pO1xuXHRjb250ZXh0LmFkZChcblx0XHRjbGVhcixcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0XHRjaGlsZHJlbjogW3NwZWNpbWVuLCBzdXphbm5lLCBzcGhlcmUsIGN1YmVdLFxuXHRcdH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcblx0XHRcdGZvciAoY29uc3QgbWVzaCBvZiBPYmplY3QudmFsdWVzKG1lc2hlcykpIHtcblx0XHRcdFx0bWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgTWF0aC5zaW4odGltZSkgKiAyMCwgMCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjb2xvciA9IFRnZENvbG9yLmZyb21IU0wodGltZSAqIDAuMSwgMC43LCAwLjEpO1xuXHRcdFx0Y2xlYXIucmVkID0gY29sb3IuUjtcblx0XHRcdGNsZWFyLmdyZWVuID0gY29sb3IuRztcblx0XHRcdGNsZWFyLmJsdWUgPSBjb2xvci5CO1xuXHRcdH0pLFxuXHQpO1xuXHRjb250ZXh0LnBsYXkoKTtcblx0cmV0dXJuIHtcblx0XHRzaGFwZSh2YWx1ZTogU2hhcGUpIHtcblx0XHRcdGFjdGl2YXRlTWVzaChtZXNoZXMsIHZhbHVlKTtcblx0XHRcdGNvbnRleHQucGFpbnQoKTtcblx0XHR9LFxuXHRcdHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xuXHRcdFx0bWF0ZXJpYWwuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlO1xuXHRcdFx0Y29udGV4dC5wYWludCgpO1xuXHRcdH0sXG5cdFx0c3BlY3VsYXJJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuXHRcdFx0bWF0ZXJpYWwuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZTtcblx0XHRcdGNvbnRleHQucGFpbnQoKTtcblx0XHR9LFxuXHRcdG9wYWNpdHlNaW4odmFsdWU6IG51bWJlcikge1xuXHRcdFx0bWF0ZXJpYWwuY29sb3IudyA9IHZhbHVlO1xuXHRcdFx0Y29udGV4dC5wYWludCgpO1xuXHRcdH0sXG5cdFx0b3BhY2l0eU1heCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0XHRtYXRlcmlhbC5vcGFjaXR5TWF4ID0gdmFsdWU7XG5cdFx0XHRjb250ZXh0LnBhaW50KCk7XG5cdFx0fSxcblx0XHRyb3VnaG5lc3ModmFsdWU6IG51bWJlcikge1xuXHRcdFx0bWF0ZXJpYWwucm91Z2huZXNzID0gdmFsdWU7XG5cdFx0XHRjb250ZXh0LnBhaW50KCk7XG5cdFx0fSxcblx0XHRpb3IodmFsdWU6IG51bWJlcikge1xuXHRcdFx0bWF0ZXJpYWwuaW9yID0gdmFsdWU7XG5cdFx0XHRjb250ZXh0LnBhaW50KCk7XG5cdFx0fSxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0Y29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbCk7XG5cdGNvbnN0IHNydiA9IHJlZi5jdXJyZW50O1xuXHRjb25zdCBbc3BlY3VsYXJFeHBvbmVudCwgc2V0U3BlY3VsYXJFeHBvbmVudF0gPSB1c2VGbG9hdChcblx0XHQyLjIsXG5cdFx0c3J2Py5zcGVjdWxhckV4cG9uZW50LFxuXHQpO1xuXHRjb25zdCBbc3BlY3VsYXJJbnRlbnNpdHksIHNldFNwZWN1bGFySW50ZW5zaXR5XSA9IHVzZUZsb2F0KFxuXHRcdDIsXG5cdFx0c3J2Py5zcGVjdWxhckludGVuc2l0eSxcblx0KTtcblx0Y29uc3QgW29wYWNpdHlNaW4sIHNldE9wYWNpdHlNaW5dID0gdXNlRmxvYXQoMC4xLCBzcnY/Lm9wYWNpdHlNaW4pO1xuXHRjb25zdCBbb3BhY2l0eU1heCwgc2V0T3BhY2l0eU1heF0gPSB1c2VGbG9hdCgwLjYsIHNydj8ub3BhY2l0eU1heCk7XG5cdGNvbnN0IFtyb3VnaG5lc3MsIHNldFJvdWdobmVzc10gPSB1c2VGbG9hdCgwLjA1LCBzcnY/LnJvdWdobmVzcyk7XG5cdGNvbnN0IFtpb3IsIHNldElvcl0gPSB1c2VGbG9hdCgxLjUsIHNydj8uaW9yKTtcblx0Y29uc3QgW3NoYXBlLCBzZXRTaGFwZV0gPSBSZWFjdC51c2VTdGF0ZTxTaGFwZT4oXCJzcGVjaW1lblwiKTtcblx0Y29uc3QgaGFuZGxlU2hhcGVDaGFuZ2UgPSAodmFsdWU6IFNoYXBlKSA9PiB7XG5cdFx0c2V0U2hhcGUodmFsdWUpO1xuXHRcdHJlZi5jdXJyZW50Py5zaGFwZSh2YWx1ZSk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxWaWV3XG5cdFx0XHRcdG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcblx0XHRcdFx0XHRyZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cyk7XG5cdFx0XHRcdH19XG5cdFx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRcdGdsYjoge1xuXHRcdFx0XHRcdFx0c3BlY2ltZW46IFNwZWNpbWVuVVJMLFxuXHRcdFx0XHRcdFx0c3V6YW5uZTogU3V6YW5uZVVSTCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0XHRwb3NYOiBQb3NYLFxuXHRcdFx0XHRcdFx0cG9zWTogUG9zWSxcblx0XHRcdFx0XHRcdHBvc1o6IFBvc1osXG5cdFx0XHRcdFx0XHRuZWdYOiBOZWdYLFxuXHRcdFx0XHRcdFx0bmVnWTogTmVnWSxcblx0XHRcdFx0XHRcdG5lZ1o6IE5lZ1osXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fX1cblx0XHRcdFx0Y29udHJvbGxlcj17e1xuXHRcdFx0XHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0PFZpZXdPcHRpb25zIHZhbHVlPXtzaGFwZX0gb25DaGFuZ2U9e2hhbmRsZVNoYXBlQ2hhbmdlfT5cblx0XHRcdFx0XHQ8ZGl2IGtleT1cInNwZWNpbWVuXCI+c3BlY2ltZW48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGtleT1cInN1emFubmVcIj5zdXphbm5lPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBrZXk9XCJzcGhlcmVcIj5zcGhlcmU8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGtleT1cImN1YmVcIj5jdWJlPC9kaXY+XG5cdFx0XHRcdDwvVmlld09wdGlvbnM+XG5cdFx0XHRcdDxWaWV3UGFuZWxcblx0XHRcdFx0XHRkaXNwbGF5PVwiZmxleFwiXG5cdFx0XHRcdFx0ZmxleC13cmFwPVwid3JhcFwiXG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIlxuXHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdGdhcD1cIlNcIlxuXHRcdFx0XHRcdHdpZHRoPVwiNjAwcHhcIlxuXHRcdFx0XHRcdG1heFdpZHRoPVwiNjAwcHhcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFZpZXdJbnB1dE51bWJlclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJzcGVjdWxhckV4cG9uZW50XCJcblx0XHRcdFx0XHRcdHZhbHVlPXtzcGVjdWxhckV4cG9uZW50fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3NldFNwZWN1bGFyRXhwb25lbnR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Vmlld0lucHV0TnVtYmVyXG5cdFx0XHRcdFx0XHRsYWJlbD1cInNwZWN1bGFySW50ZW5zaXR5XCJcblx0XHRcdFx0XHRcdHZhbHVlPXtzcGVjdWxhckludGVuc2l0eX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXRTcGVjdWxhckludGVuc2l0eX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1ZpZXdQYW5lbD5cblx0XHRcdFx0PFZpZXdQYW5lbFxuXHRcdFx0XHRcdGRpc3BsYXk9XCJmbGV4XCJcblx0XHRcdFx0XHRmbGV4LXdyYXA9XCJ3cmFwXCJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiXG5cdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0Z2FwPVwiU1wiXG5cdFx0XHRcdFx0d2lkdGg9XCI2MDBweFwiXG5cdFx0XHRcdFx0bWF4V2lkdGg9XCI2MDBweFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Vmlld0lucHV0TnVtYmVyXG5cdFx0XHRcdFx0XHRsYWJlbD1cImNvbG9yIGFscGhhXCJcblx0XHRcdFx0XHRcdHZhbHVlPXtvcGFjaXR5TWlufVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3NldE9wYWNpdHlNaW59XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Vmlld0lucHV0TnVtYmVyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIm9wYWNpdHlNYXhcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e29wYWNpdHlNYXh9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17c2V0T3BhY2l0eU1heH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1ZpZXdQYW5lbD5cblx0XHRcdFx0PFZpZXdQYW5lbFxuXHRcdFx0XHRcdGRpc3BsYXk9XCJmbGV4XCJcblx0XHRcdFx0XHRmbGV4LXdyYXA9XCJ3cmFwXCJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiXG5cdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0Z2FwPVwiU1wiXG5cdFx0XHRcdFx0d2lkdGg9XCI2MDBweFwiXG5cdFx0XHRcdFx0bWF4V2lkdGg9XCI2MDBweFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Vmlld0lucHV0TnVtYmVyXG5cdFx0XHRcdFx0XHRsYWJlbD1cInJvdWdobmVzc1wiXG5cdFx0XHRcdFx0XHR2YWx1ZT17cm91Z2huZXNzfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3NldFJvdWdobmVzc31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxWaWV3SW5wdXROdW1iZXIgbGFiZWw9XCJpb3JcIiB2YWx1ZT17aW9yfSBvbkNoYW5nZT17c2V0SW9yfSAvPlxuXHRcdFx0XHQ8L1ZpZXdQYW5lbD5cblx0XHRcdDwvVmlldz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuLy8gI2JlZ2luIGFjdGl2YXRlTWVzaCgpXG5mdW5jdGlvbiBhY3RpdmF0ZU1lc2gobWVzaGVzOiBSZWNvcmQ8U2hhcGUsIFRnZFBhaW50ZXJNZXNoPiwgc2hhcGU6IFNoYXBlKSB7XG5cdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG1lc2hlcykgYXMgU2hhcGVbXSkge1xuXHRcdG1lc2hlc1trZXldLmFjdGl2ZSA9IGtleSA9PT0gc2hhcGU7XG5cdH1cbn1cbi8vICNlbmRcblxuLy8gI2JlZ2luIGNvbXB1dGVTaXplKClcbmZ1bmN0aW9uIGNvbXB1dGVTaXplKG1lc2g6IFRnZFBhaW50ZXJNZXNoKTogbnVtYmVyIHtcblx0Y29uc3QgeyBtaW4sIG1heCB9ID0gbWVzaC5jb21wdXRlQm91bmRpbmdCb3goKTtcblx0cmV0dXJuIE1hdGgubWF4KG1heC54IC0gbWluLngsIG1heC55IC0gbWluLnksIG1heC56IC0gbWluLnopO1xufVxuLy8gI2VuZFxuXG4vLyAjYmVnaW4gZml0U2l6ZSgpXG4vKipcbiAqIFNjYWxlIHRoZSBtZXNoIHRvIG1ha2UgaXRzIGJpZ2dlc3QgZGltZW5zaW9uIGVxdWFsIHRvIGBzaXplYC5cbiAqL1xuZnVuY3Rpb24gZml0U2l6ZShtZXNoOiBUZ2RQYWludGVyTWVzaCwgc2l6ZTogbnVtYmVyKSB7XG5cdGNvbnN0IHNjYWxlID0gc2l6ZSAvIGNvbXB1dGVTaXplKG1lc2gpO1xuXHRtZXNoLnRyYW5zZm8uc2V0U2NhbGUoc2NhbGUsIHNjYWxlLCBzY2FsZSk7XG59XG4vLyAjZW5kXG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vX21hdGVyaWFsLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiXFx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFswLjQsIDAuOCwgMSwgMC4xXTtcXG5cXHRjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcblxcdFxcdGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuXFx0XFx0aW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG5cXHRcXHRpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcblxcdFxcdGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuXFx0XFx0aW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG5cXHRcXHRpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcblxcdH0pO1xcblxcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsR2xhc3Moe1xcblxcdFxcdGNvbG9yLFxcblxcdFxcdGFtYmllbnRDb2xvcjogc2t5Ym94LFxcblxcdFxcdGxpZ2h0czogW1xcblxcdFxcdFxcdG5ldyBUZ2RMaWdodCh7XFxuXFx0XFx0XFx0XFx0Y29sb3I6IFsxLCAwLjksIDAuNywgMV0sXFxuXFx0XFx0XFx0XFx0ZGlyZWN0aW9uOiBbLTEsIC0wLjUsIC0xXSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRdLFxcblxcdH0pO1xcblxcdGNvbnN0IHNwZWNpbWVuID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuXFx0XFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3BlY2ltZW4sXFxuXFx0XFx0bWF0ZXJpYWwsXFxuXFx0fSk7XFxuXFx0Y29uc3Qgc3V6YW5uZSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXFxuXFx0XFx0bWF0ZXJpYWwsXFxuXFx0fSk7XFxuXFx0Y29uc3Qgc3BoZXJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5U3BoZXJlSWNvKHsgc3ViZGl2aXNpb25zOiAzIH0pLFxcblxcdFxcdG1hdGVyaWFsLFxcblxcdH0pO1xcblxcdGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcblxcdFxcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goKSxcXG5cXHRcXHRtYXRlcmlhbCxcXG5cXHR9KTtcIixcImFjdGl2YXRlTWVzaCgpXCI6XCJmdW5jdGlvbiBhY3RpdmF0ZU1lc2gobWVzaGVzOiBSZWNvcmQ8U2hhcGUsIFRnZFBhaW50ZXJNZXNoPiwgc2hhcGU6IFNoYXBlKSB7XFxuXFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobWVzaGVzKSBhcyBTaGFwZVtdKSB7XFxuXFx0XFx0bWVzaGVzW2tleV0uYWN0aXZlID0ga2V5ID09PSBzaGFwZTtcXG5cXHR9XFxufVwiLFwiY29tcHV0ZVNpemUoKVwiOlwiZnVuY3Rpb24gY29tcHV0ZVNpemUobWVzaDogVGdkUGFpbnRlck1lc2gpOiBudW1iZXIge1xcblxcdGNvbnN0IHsgbWluLCBtYXggfSA9IG1lc2guY29tcHV0ZUJvdW5kaW5nQm94KCk7XFxuXFx0cmV0dXJuIE1hdGgubWF4KG1heC54IC0gbWluLngsIG1heC55IC0gbWluLnksIG1heC56IC0gbWluLnopO1xcbn1cIixcImZpdFNpemUoKVwiOlwiLyoqXFxuICogU2NhbGUgdGhlIG1lc2ggdG8gbWFrZSBpdHMgYmlnZ2VzdCBkaW1lbnNpb24gZXF1YWwgdG8gYHNpemVgLlxcbiAqL1xcbmZ1bmN0aW9uIGZpdFNpemUobWVzaDogVGdkUGFpbnRlck1lc2gsIHNpemU6IG51bWJlcikge1xcblxcdGNvbnN0IHNjYWxlID0gc2l6ZSAvIGNvbXB1dGVTaXplKG1lc2gpO1xcblxcdG1lc2gudHJhbnNmby5zZXRTY2FsZShzY2FsZSwgc2NhbGUsIHNjYWxlKTtcXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdHR5cGUgQXJyYXlOdW1iZXI0LFxcblxcdHR5cGUgVGdkQ29udGV4dCxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlck1lc2hHbHRmLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHR0Z2RDYWxjUmFuZG9tMyxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcblxcdFRnZFRleHR1cmVDdWJlLFxcblxcdFRnZFBhaW50ZXJMb2dpYyxcXG5cXHRUZ2RQYWludGVyU2t5Ym94LFxcblxcdFRnZE1hdGVyaWFsR2xhc3MsXFxuXFx0VGdkQ29sb3IsXFxuXFx0VGdkTGlnaHQsXFxuXFx0VGdkUGFpbnRlck1lc2gsXFxuXFx0VGdkR2VvbWV0cnlTcGhlcmVJY28sXFxuXFx0VGdkR2VvbWV0cnlCb3gsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcbmltcG9ydCBSZWFjdCBmcm9tIFxcXCJyZWFjdFxcXCI7XFxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFxcXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XFxcIjtcXG5pbXBvcnQgeyBWaWV3SW5wdXROdW1iZXIsIFZpZXdPcHRpb25zLCBWaWV3UGFuZWwgfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3VpXFxcIjtcXG5cXG5pbXBvcnQgU3BlY2ltZW5VUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zcGVjaW1lbi5nbGJcXFwiO1xcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcXFwiO1xcbmltcG9ydCBQb3NYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1gud2VicFxcXCI7XFxuaW1wb3J0IFBvc1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWS53ZWJwXFxcIjtcXG5pbXBvcnQgUG9zWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NaLndlYnBcXFwiO1xcbmltcG9ydCBOZWdYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1gud2VicFxcXCI7XFxuaW1wb3J0IE5lZ1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWS53ZWJwXFxcIjtcXG5pbXBvcnQgTmVnWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdaLndlYnBcXFwiO1xcblxcbnR5cGUgU2hhcGUgPSBcXFwic3BlY2ltZW5cXFwiIHwgXFxcInN1emFubmVcXFwiIHwgXFxcInNwaGVyZVxcXCIgfCBcXFwiY3ViZVxcXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMTMsIDEuMSk7XFxuXFx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFswLjQsIDAuOCwgMSwgMC4xXTtcXG5cXHRjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcblxcdFxcdGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuXFx0XFx0aW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG5cXHRcXHRpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcblxcdFxcdGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuXFx0XFx0aW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG5cXHRcXHRpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcblxcdH0pO1xcblxcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsR2xhc3Moe1xcblxcdFxcdGNvbG9yLFxcblxcdFxcdGFtYmllbnRDb2xvcjogc2t5Ym94LFxcblxcdFxcdGxpZ2h0czogW1xcblxcdFxcdFxcdG5ldyBUZ2RMaWdodCh7XFxuXFx0XFx0XFx0XFx0Y29sb3I6IFsxLCAwLjksIDAuNywgMV0sXFxuXFx0XFx0XFx0XFx0ZGlyZWN0aW9uOiBbLTEsIC0wLjUsIC0xXSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRdLFxcblxcdH0pO1xcblxcdGNvbnN0IHNwZWNpbWVuID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuXFx0XFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3BlY2ltZW4sXFxuXFx0XFx0bWF0ZXJpYWwsXFxuXFx0fSk7XFxuXFx0Y29uc3Qgc3V6YW5uZSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXFxuXFx0XFx0bWF0ZXJpYWwsXFxuXFx0fSk7XFxuXFx0Y29uc3Qgc3BoZXJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5U3BoZXJlSWNvKHsgc3ViZGl2aXNpb25zOiAzIH0pLFxcblxcdFxcdG1hdGVyaWFsLFxcblxcdH0pO1xcblxcdGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcblxcdFxcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goKSxcXG5cXHRcXHRtYXRlcmlhbCxcXG5cXHR9KTtcXG5cXHRjb25zdCBtZXNoZXM6IFJlY29yZDxTaGFwZSwgVGdkUGFpbnRlck1lc2g+ID0ge1xcblxcdFxcdHNwZWNpbWVuLFxcblxcdFxcdHN1emFubmUsXFxuXFx0XFx0c3BoZXJlLFxcblxcdFxcdGN1YmUsXFxuXFx0fTtcXG5cXHRjb25zdCBzaXplID0gY29tcHV0ZVNpemUoc3BlY2ltZW4pO1xcblxcdGZpdFNpemUoc3V6YW5uZSwgc2l6ZSk7XFxuXFx0Zml0U2l6ZShzcGhlcmUsIHNpemUpO1xcblxcdGZpdFNpemUoY3ViZSwgc2l6ZSk7XFxuXFx0YWN0aXZhdGVNZXNoKG1lc2hlcywgXFxcInNwZWNpbWVuXFxcIik7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGNsZWFyLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtzcGVjaW1lbiwgc3V6YW5uZSwgc3BoZXJlLCBjdWJlXSxcXG5cXHRcXHR9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuXFx0XFx0XFx0Zm9yIChjb25zdCBtZXNoIG9mIE9iamVjdC52YWx1ZXMobWVzaGVzKSkge1xcblxcdFxcdFxcdFxcdG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIE1hdGguc2luKHRpbWUpICogMjAsIDApO1xcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHRjb25zdCBjb2xvciA9IFRnZENvbG9yLmZyb21IU0wodGltZSAqIDAuMSwgMC43LCAwLjEpO1xcblxcdFxcdFxcdGNsZWFyLnJlZCA9IGNvbG9yLlI7XFxuXFx0XFx0XFx0Y2xlYXIuZ3JlZW4gPSBjb2xvci5HO1xcblxcdFxcdFxcdGNsZWFyLmJsdWUgPSBjb2xvci5CO1xcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29udGV4dC5wbGF5KCk7XFxuXFx0cmV0dXJuIHtcXG5cXHRcXHRzaGFwZSh2YWx1ZTogU2hhcGUpIHtcXG5cXHRcXHRcXHRhY3RpdmF0ZU1lc2gobWVzaGVzLCB2YWx1ZSk7XFxuXFx0XFx0XFx0Y29udGV4dC5wYWludCgpO1xcblxcdFxcdH0sXFxuXFx0XFx0c3BlY3VsYXJFeHBvbmVudCh2YWx1ZTogbnVtYmVyKSB7XFxuXFx0XFx0XFx0bWF0ZXJpYWwuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlO1xcblxcdFxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHRcXHR9LFxcblxcdFxcdHNwZWN1bGFySW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcXG5cXHRcXHRcXHRtYXRlcmlhbC5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlO1xcblxcdFxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHRcXHR9LFxcblxcdFxcdG9wYWNpdHlNaW4odmFsdWU6IG51bWJlcikge1xcblxcdFxcdFxcdG1hdGVyaWFsLmNvbG9yLncgPSB2YWx1ZTtcXG5cXHRcXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0XFx0fSxcXG5cXHRcXHRvcGFjaXR5TWF4KHZhbHVlOiBudW1iZXIpIHtcXG5cXHRcXHRcXHRtYXRlcmlhbC5vcGFjaXR5TWF4ID0gdmFsdWU7XFxuXFx0XFx0XFx0Y29udGV4dC5wYWludCgpO1xcblxcdFxcdH0sXFxuXFx0XFx0cm91Z2huZXNzKHZhbHVlOiBudW1iZXIpIHtcXG5cXHRcXHRcXHRtYXRlcmlhbC5yb3VnaG5lc3MgPSB2YWx1ZTtcXG5cXHRcXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0XFx0fSxcXG5cXHRcXHRpb3IodmFsdWU6IG51bWJlcikge1xcblxcdFxcdFxcdG1hdGVyaWFsLmlvciA9IHZhbHVlO1xcblxcdFxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHRcXHR9LFxcblxcdH07XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0Y29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbCk7XFxuXFx0Y29uc3Qgc3J2ID0gcmVmLmN1cnJlbnQ7XFxuXFx0Y29uc3QgW3NwZWN1bGFyRXhwb25lbnQsIHNldFNwZWN1bGFyRXhwb25lbnRdID0gdXNlRmxvYXQoXFxuXFx0XFx0Mi4yLFxcblxcdFxcdHNydj8uc3BlY3VsYXJFeHBvbmVudCxcXG5cXHQpO1xcblxcdGNvbnN0IFtzcGVjdWxhckludGVuc2l0eSwgc2V0U3BlY3VsYXJJbnRlbnNpdHldID0gdXNlRmxvYXQoXFxuXFx0XFx0MixcXG5cXHRcXHRzcnY/LnNwZWN1bGFySW50ZW5zaXR5LFxcblxcdCk7XFxuXFx0Y29uc3QgW29wYWNpdHlNaW4sIHNldE9wYWNpdHlNaW5dID0gdXNlRmxvYXQoMC4xLCBzcnY/Lm9wYWNpdHlNaW4pO1xcblxcdGNvbnN0IFtvcGFjaXR5TWF4LCBzZXRPcGFjaXR5TWF4XSA9IHVzZUZsb2F0KDAuNiwgc3J2Py5vcGFjaXR5TWF4KTtcXG5cXHRjb25zdCBbcm91Z2huZXNzLCBzZXRSb3VnaG5lc3NdID0gdXNlRmxvYXQoMC4wNSwgc3J2Py5yb3VnaG5lc3MpO1xcblxcdGNvbnN0IFtpb3IsIHNldElvcl0gPSB1c2VGbG9hdCgxLjUsIHNydj8uaW9yKTtcXG5cXHRjb25zdCBbc2hhcGUsIHNldFNoYXBlXSA9IFJlYWN0LnVzZVN0YXRlPFNoYXBlPihcXFwic3BlY2ltZW5cXFwiKTtcXG5cXHRjb25zdCBoYW5kbGVTaGFwZUNoYW5nZSA9ICh2YWx1ZTogU2hhcGUpID0+IHtcXG5cXHRcXHRzZXRTaGFwZSh2YWx1ZSk7XFxuXFx0XFx0cmVmLmN1cnJlbnQ/LnNoYXBlKHZhbHVlKTtcXG5cXHR9O1xcblxcdHJldHVybiAoXFxuXFx0XFx0PGRpdj5cXG5cXHRcXHRcXHQ8Vmlld1xcblxcdFxcdFxcdFxcdG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG5cXHRcXHRcXHRcXHRcXHRyZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cyk7XFxuXFx0XFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRcXHRnbGI6IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRzcGVjaW1lbjogU3BlY2ltZW5VUkwsXFxuXFx0XFx0XFx0XFx0XFx0XFx0c3V6YW5uZTogU3V6YW5uZVVSTCxcXG5cXHRcXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdFxcdGltYWdlOiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0cG9zWDogUG9zWCxcXG5cXHRcXHRcXHRcXHRcXHRcXHRwb3NZOiBQb3NZLFxcblxcdFxcdFxcdFxcdFxcdFxcdHBvc1o6IFBvc1osXFxuXFx0XFx0XFx0XFx0XFx0XFx0bmVnWDogTmVnWCxcXG5cXHRcXHRcXHRcXHRcXHRcXHRuZWdZOiBOZWdZLFxcblxcdFxcdFxcdFxcdFxcdFxcdG5lZ1o6IE5lZ1osXFxuXFx0XFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR9fVxcblxcdFxcdFxcdFxcdGNvbnRyb2xsZXI9e3tcXG5cXHRcXHRcXHRcXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0XFx0XFx0fX1cXG5cXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0PFZpZXdPcHRpb25zIHZhbHVlPXtzaGFwZX0gb25DaGFuZ2U9e2hhbmRsZVNoYXBlQ2hhbmdlfT5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGtleT1cXFwic3BlY2ltZW5cXFwiPnNwZWNpbWVuPC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBrZXk9XFxcInN1emFubmVcXFwiPnN1emFubmU8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGtleT1cXFwic3BoZXJlXFxcIj5zcGhlcmU8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGtleT1cXFwiY3ViZVxcXCI+Y3ViZTwvZGl2PlxcblxcdFxcdFxcdFxcdDwvVmlld09wdGlvbnM+XFxuXFx0XFx0XFx0XFx0PFZpZXdQYW5lbFxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk9XFxcImZsZXhcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ZmxleC13cmFwPVxcXCJ3cmFwXFxcIlxcblxcdFxcdFxcdFxcdFxcdGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0YWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIlxcblxcdFxcdFxcdFxcdFxcdGdhcD1cXFwiU1xcXCJcXG5cXHRcXHRcXHRcXHRcXHR3aWR0aD1cXFwiNjAwcHhcXFwiXFxuXFx0XFx0XFx0XFx0XFx0bWF4V2lkdGg9XFxcIjYwMHB4XFxcIlxcblxcdFxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHRcXHQ8Vmlld0lucHV0TnVtYmVyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bGFiZWw9XFxcInNwZWN1bGFyRXhwb25lbnRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFsdWU9e3NwZWN1bGFyRXhwb25lbnR9XFxuXFx0XFx0XFx0XFx0XFx0XFx0b25DaGFuZ2U9e3NldFNwZWN1bGFyRXhwb25lbnR9XFxuXFx0XFx0XFx0XFx0XFx0Lz5cXG5cXHRcXHRcXHRcXHRcXHQ8Vmlld0lucHV0TnVtYmVyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bGFiZWw9XFxcInNwZWN1bGFySW50ZW5zaXR5XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdHZhbHVlPXtzcGVjdWxhckludGVuc2l0eX1cXG5cXHRcXHRcXHRcXHRcXHRcXHRvbkNoYW5nZT17c2V0U3BlY3VsYXJJbnRlbnNpdHl9XFxuXFx0XFx0XFx0XFx0XFx0Lz5cXG5cXHRcXHRcXHRcXHQ8L1ZpZXdQYW5lbD5cXG5cXHRcXHRcXHRcXHQ8Vmlld1BhbmVsXFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheT1cXFwiZmxleFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRmbGV4LXdyYXA9XFxcIndyYXBcXFwiXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiXFxuXFx0XFx0XFx0XFx0XFx0Z2FwPVxcXCJTXFxcIlxcblxcdFxcdFxcdFxcdFxcdHdpZHRoPVxcXCI2MDBweFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRtYXhXaWR0aD1cXFwiNjAwcHhcXFwiXFxuXFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdDxWaWV3SW5wdXROdW1iZXJcXG5cXHRcXHRcXHRcXHRcXHRcXHRsYWJlbD1cXFwiY29sb3IgYWxwaGFcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFsdWU9e29wYWNpdHlNaW59XFxuXFx0XFx0XFx0XFx0XFx0XFx0b25DaGFuZ2U9e3NldE9wYWNpdHlNaW59XFxuXFx0XFx0XFx0XFx0XFx0Lz5cXG5cXHRcXHRcXHRcXHRcXHQ8Vmlld0lucHV0TnVtYmVyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bGFiZWw9XFxcIm9wYWNpdHlNYXhcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFsdWU9e29wYWNpdHlNYXh9XFxuXFx0XFx0XFx0XFx0XFx0XFx0b25DaGFuZ2U9e3NldE9wYWNpdHlNYXh9XFxuXFx0XFx0XFx0XFx0XFx0Lz5cXG5cXHRcXHRcXHRcXHQ8L1ZpZXdQYW5lbD5cXG5cXHRcXHRcXHRcXHQ8Vmlld1BhbmVsXFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheT1cXFwiZmxleFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRmbGV4LXdyYXA9XFxcIndyYXBcXFwiXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiXFxuXFx0XFx0XFx0XFx0XFx0Z2FwPVxcXCJTXFxcIlxcblxcdFxcdFxcdFxcdFxcdHdpZHRoPVxcXCI2MDBweFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRtYXhXaWR0aD1cXFwiNjAwcHhcXFwiXFxuXFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdDxWaWV3SW5wdXROdW1iZXJcXG5cXHRcXHRcXHRcXHRcXHRcXHRsYWJlbD1cXFwicm91Z2huZXNzXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdHZhbHVlPXtyb3VnaG5lc3N9XFxuXFx0XFx0XFx0XFx0XFx0XFx0b25DaGFuZ2U9e3NldFJvdWdobmVzc31cXG5cXHRcXHRcXHRcXHRcXHQvPlxcblxcdFxcdFxcdFxcdFxcdDxWaWV3SW5wdXROdW1iZXIgbGFiZWw9XFxcImlvclxcXCIgdmFsdWU9e2lvcn0gb25DaGFuZ2U9e3NldElvcn0gLz5cXG5cXHRcXHRcXHRcXHQ8L1ZpZXdQYW5lbD5cXG5cXHRcXHRcXHQ8L1ZpZXc+XFxuXFx0XFx0PC9kaXY+XFxuXFx0KTtcXG59XFxuXFxuZnVuY3Rpb24gYWN0aXZhdGVNZXNoKG1lc2hlczogUmVjb3JkPFNoYXBlLCBUZ2RQYWludGVyTWVzaD4sIHNoYXBlOiBTaGFwZSkge1xcblxcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG1lc2hlcykgYXMgU2hhcGVbXSkge1xcblxcdFxcdG1lc2hlc1trZXldLmFjdGl2ZSA9IGtleSA9PT0gc2hhcGU7XFxuXFx0fVxcbn1cXG5cXG5mdW5jdGlvbiBjb21wdXRlU2l6ZShtZXNoOiBUZ2RQYWludGVyTWVzaCk6IG51bWJlciB7XFxuXFx0Y29uc3QgeyBtaW4sIG1heCB9ID0gbWVzaC5jb21wdXRlQm91bmRpbmdCb3goKTtcXG5cXHRyZXR1cm4gTWF0aC5tYXgobWF4LnggLSBtaW4ueCwgbWF4LnkgLSBtaW4ueSwgbWF4LnogLSBtaW4ueik7XFxufVxcblxcbi8qKlxcbiAqIFNjYWxlIHRoZSBtZXNoIHRvIG1ha2UgaXRzIGJpZ2dlc3QgZGltZW5zaW9uIGVxdWFsIHRvIGBzaXplYC5cXG4gKi9cXG5mdW5jdGlvbiBmaXRTaXplKG1lc2g6IFRnZFBhaW50ZXJNZXNoLCBzaXplOiBudW1iZXIpIHtcXG5cXHRjb25zdCBzY2FsZSA9IHNpemUgLyBjb21wdXRlU2l6ZShtZXNoKTtcXG5cXHRtZXNoLnRyYW5zZm8uc2V0U2NhbGUoc2NhbGUsIHNjYWxlLCBzY2FsZSk7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGbG9hdChcblx0aW5pdGlhbFZhbHVlOiBudW1iZXIsXG5cdG9uQ2hhbmdlPzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQsXG4pOiBbdmFsdWU6IG51bWJlciwgc2V0VmFsdWU6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkXSB7XG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IG9uQ2hhbmdlPy4odmFsdWUpLCBbdmFsdWVdKTtcblx0cmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU2t5Ym94IiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZUN1YmUiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIlN1emFubmVHbGFzc1VSTCIsIlBvc1giLCJQb3NZIiwiUG9zWiIsIk5lZ1giLCJOZWdZIiwiTmVnWiIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwic2t5Ym94Iiwic3V6YW5uZSIsIkRlbW8iLCJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZE1hdGVyaWFsR2xhc3MiLCJUZ2RDb2xvciIsIlRnZExpZ2h0IiwiVGdkUGFpbnRlck1lc2giLCJUZ2RHZW9tZXRyeVNwaGVyZUljbyIsIlRnZEdlb21ldHJ5Qm94IiwidXNlRmxvYXQiLCJWaWV3SW5wdXROdW1iZXIiLCJWaWV3T3B0aW9ucyIsIlZpZXdQYW5lbCIsIlNwZWNpbWVuVVJMIiwiU3V6YW5uZVVSTCIsImNvbG9yIiwibWF0ZXJpYWwiLCJzcGVjaW1lbiIsInNwaGVyZSIsImN1YmUiLCJtZXNoZXMiLCJzaXplIiwiY29tcHV0ZVNpemUiLCJmaXRTaXplIiwiYWN0aXZhdGVNZXNoIiwiY2xlYXIiLCJ0aW1lIiwiX2l0ZXJhdG9yRXJyb3IiLCJPYmplY3QiLCJtZXNoIiwiTWF0aCIsInNoYXBlIiwidmFsdWUiLCJzcGVjdWxhckV4cG9uZW50Iiwic3BlY3VsYXJJbnRlbnNpdHkiLCJvcGFjaXR5TWluIiwib3BhY2l0eU1heCIsInJvdWdobmVzcyIsImlvciIsInJlZiIsInNydiIsIl91c2VGbG9hdCIsInNldFNwZWN1bGFyRXhwb25lbnQiLCJfdXNlRmxvYXQxIiwic2V0U3BlY3VsYXJJbnRlbnNpdHkiLCJfdXNlRmxvYXQyIiwic2V0T3BhY2l0eU1pbiIsIl91c2VGbG9hdDMiLCJzZXRPcGFjaXR5TWF4IiwiX3VzZUZsb2F0NCIsInNldFJvdWdobmVzcyIsIl91c2VGbG9hdDUiLCJzZXRJb3IiLCJzZXRTaGFwZSIsImhhbmRsZVNoYXBlQ2hhbmdlIiwiX3JlZl9jdXJyZW50Iiwib25SZWFkeSIsInNjZW5lIiwia2V5IiwiX21lc2hfY29tcHV0ZUJvdW5kaW5nQm94IiwibWluIiwibWF4Iiwic2NhbGUiLCJpbml0aWFsVmFsdWUiLCJvbkNoYW5nZSIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRd0I7QUFDa0M7QUFFSTtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUUzRCxTQUFTYyxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQ2hERCxRQUFRLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFL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