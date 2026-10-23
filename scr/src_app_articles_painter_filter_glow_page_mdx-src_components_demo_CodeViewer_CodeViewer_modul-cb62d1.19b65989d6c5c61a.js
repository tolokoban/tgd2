"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_filter_glow_page_mdx-src_components_demo_CodeViewer_CodeViewer_modul-cb62d1"], {
74167(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/helmet.d635f1c712b5efea.glb";

},
98712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = {}, sourceKeys, key, i;
    if (typeof Reflect !== "undefined" && Reflect.ownKeys) {
        sourceKeys = Reflect.ownKeys(Object(source));
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
        return target;
    }
    target = _object_without_properties_loose(source, excluded);
    if (Object.getOwnPropertySymbols) {
        sourceKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {}, sourceKeys = Object.getOwnPropertyNames(source), key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
    }
    return target;
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






var DEFAULT_SETTINGS = {
    radius: 0.05,
    strength: 1.5,
    scale: 0.5,
    levels: 5,
    falloff: 0.7,
    threshold: 0,
    knee: 0.5,
    tint: "#fff",
    blend: "additive",
    hdr: false,
    downsampleFilter: "default"
};
function init(context, assets) {
    var _ref, _ref1, _ref2, _ref3;
    var _gltfMaterial_pbrMetallicRoughness_baseColorTexture, _gltfMaterial_pbrMetallicRoughness, _gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture, _gltfMaterial_pbrMetallicRoughness1, _gltfMaterial_occlusionTexture, _gltfMaterial_normalTexture, _gltfMaterial_emissiveTexture;
    // #begin Initializing WebGL
    // glTF stores metallic in BLUE and roughness in GREEN.
    var _assets_glb = assets.glb, asset = _assets_glb.helmet;
    var gltfMaterial = asset.getMaterial(0);
    var indexBaseColor = (_ref = (_gltfMaterial_pbrMetallicRoughness = gltfMaterial.pbrMetallicRoughness) === null || _gltfMaterial_pbrMetallicRoughness === void 0 ? void 0 : (_gltfMaterial_pbrMetallicRoughness_baseColorTexture = _gltfMaterial_pbrMetallicRoughness.baseColorTexture) === null || _gltfMaterial_pbrMetallicRoughness_baseColorTexture === void 0 ? void 0 : _gltfMaterial_pbrMetallicRoughness_baseColorTexture.index) !== null && _ref !== void 0 ? _ref : 0;
    var indexMetallicRoughness = (_ref1 = (_gltfMaterial_pbrMetallicRoughness1 = gltfMaterial.pbrMetallicRoughness) === null || _gltfMaterial_pbrMetallicRoughness1 === void 0 ? void 0 : (_gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture = _gltfMaterial_pbrMetallicRoughness1.metallicRoughnessTexture) === null || _gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture === void 0 ? void 0 : _gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture.index) !== null && _ref1 !== void 0 ? _ref1 : 0;
    var indexOcclusion = (_ref2 = (_gltfMaterial_occlusionTexture = gltfMaterial.occlusionTexture) === null || _gltfMaterial_occlusionTexture === void 0 ? void 0 : _gltfMaterial_occlusionTexture.index) !== null && _ref2 !== void 0 ? _ref2 : 0;
    var indexNormals = (_ref3 = (_gltfMaterial_normalTexture = gltfMaterial.normalTexture) === null || _gltfMaterial_normalTexture === void 0 ? void 0 : _gltfMaterial_normalTexture.index) !== null && _ref3 !== void 0 ? _ref3 : 0;
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
    var deferred = new _tolokoban_tgd__rspack_import_1.TgdPainterDeferredShading(context, {
        meshes: [
            helmet
        ]
    });
    var lighting = new _tolokoban_tgd__rspack_import_1.TgdFilterDeferredShading(context, {
        textureNormals: deferred.textureNormals,
        textureDepth: deferred.textureDepth,
        textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,
        skyboxTexture: "#557"
    });
    var glow = new _tolokoban_tgd__rspack_import_1.TgdFilterGlow(context, _object_spread_props(_object_spread({}, DEFAULT_SETTINGS), {
        tint: parseTint(DEFAULT_SETTINGS.tint),
        textureEmission: deferred.textureEmission
    }));
    context.camera.fitSpaceAtTarget(2.2, 2.2);
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.05,
            0.05,
            0.08,
            1
        ],
        depth: 1
    }), deferred, // Nothing is painted (alpha = 0) where there is no mesh nor glow.
    new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "off",
        cull: "off",
        blend: "alpha",
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
                texture: deferred.textureAlbedo,
                filters: [
                    lighting,
                    glow
                ],
                flipY: true
            })
        ]
    }));
    context.paint();
    // #end
    return glow;
}
function Demo() {
    var refScene = react__rspack_import_3_default().useRef(null);
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS), 2), settings = _React_useState[0], setSettings = _React_useState[1];
    var update = function update(changes) {
        setSettings(_object_spread({}, settings, changes));
        var scene = refScene.current;
        if (!scene) return;
        applySettings(scene, changes);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_4["default"], {
        onReady: function onReady(context, assets) {
            refScene.current = {
                context: context,
                glow: init(context, assets)
            };
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
            flexDirection: "column",
            gap: "S",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "S",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "radius",
                            value: settings.radius,
                            onChange: function onChange(radius) {
                                return update({
                                    radius: radius
                                });
                            }
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "strength",
                            value: settings.strength,
                            onChange: function onChange(strength) {
                                return update({
                                    strength: strength
                                });
                            }
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                            lineNumber: 137,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputColor, {
                            label: "tint",
                            value: settings.tint,
                            onChange: function onChange(tint) {
                                return update({
                                    tint: tint
                                });
                            }
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewOptions, {
                            value: settings.blend,
                            onChange: function onChange(blend) {
                                return update({
                                    blend: blend
                                });
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "additive"
                                }, "additive", false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                                    lineNumber: 144,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "screen"
                                }, "screen", false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                    lineNumber: 135,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "S",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "scale",
                            value: settings.scale,
                            onChange: function onChange(scale) {
                                return update({
                                    scale: scale
                                });
                            }
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                            lineNumber: 149,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "levels",
                            value: settings.levels,
                            onChange: function onChange(levels) {
                                return update({
                                    levels: levels
                                });
                            }
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                            lineNumber: 150,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "falloff",
                            value: settings.falloff,
                            onChange: function onChange(falloff) {
                                return update({
                                    falloff: falloff
                                });
                            }
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                            lineNumber: 151,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "threshold",
                            value: settings.threshold,
                            onChange: function onChange(threshold) {
                                return update({
                                    threshold: threshold
                                });
                            }
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                            lineNumber: 156,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "knee",
                            value: settings.knee,
                            onChange: function onChange(knee) {
                                return update({
                                    knee: knee
                                });
                            }
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                            lineNumber: 161,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                    lineNumber: 148,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "S",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewOptions, {
                            value: settings.downsampleFilter,
                            onChange: function onChange(downsampleFilter) {
                                return update({
                                    downsampleFilter: downsampleFilter
                                });
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "default"
                                }, "default", false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                                    lineNumber: 167,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "13-tap"
                                }, "13-tap", false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                                    lineNumber: 168,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                            lineNumber: 164,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSwitch, {
                            value: settings.hdr,
                            onChange: function onChange(hdr) {
                                return update({
                                    hdr: hdr
                                });
                            },
                            children: "hdr"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                            lineNumber: 170,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
                    lineNumber: 163,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
            lineNumber: 134,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/glow.demo.tsx",
        lineNumber: 127,
        columnNumber: 9
    }, this);
}
// #begin applySettings()
/**
 * Every option of TgdFilterGlow is a public field that can be changed at any time.
 * Changing `levels`, `hdr` or `downsampleFilter` rebuilds the passes before the next paint.
 */ function applySettings(param, changes) {
    var context = param.context, glow = param.glow;
    var tint = changes.tint, others = _object_without_properties(changes, [
        "tint"
    ]);
    Object.assign(glow, others);
    if (tint !== undefined) glow.tint = parseTint(tint);
    context.paint();
}
// #end
// #begin parseTint()
function parseTint(tint) {
    var color = new _tolokoban_tgd__rspack_import_1.TgdColor(tint);
    return [
        color.R,
        color.G,
        color.B
    ];
} // #end


},
64174(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _glow_demo__rspack_import_4 = __webpack_require__(98712);
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
    "Initializing WebGL": '    // glTF stores metallic in BLUE and roughness in GREEN.\n    const { helmet: asset } = assets.glb\n    const gltfMaterial = asset.getMaterial(0)\n    const indexBaseColor = gltfMaterial.pbrMetallicRoughness?.baseColorTexture?.index ?? 0\n    const indexMetallicRoughness = gltfMaterial.pbrMetallicRoughness?.metallicRoughnessTexture?.index ?? 0\n    const indexOcclusion = gltfMaterial.occlusionTexture?.index ?? 0\n    const indexNormals = gltfMaterial.normalTexture?.index ?? 0\n    const indexEmission = gltfMaterial.emissiveTexture?.index\n    const textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness)\n    const helmet: TgdMeshWithTextures = {\n        geometry: asset.makeGeometry(),\n        transfo: asset.createTransfoFromNode(asset.getNode(0)),\n        visible: true,\n        material: new TgdMaterialFlatTexture({\n            texture: asset.createTexture2D(context, indexBaseColor),\n        }),\n        textures: {\n            normals: asset.createTexture2D(context, indexNormals),\n            metallic: textureMetallicRoughness,\n            metallicChannel: "b",\n            roughness: textureMetallicRoughness,\n            roughnessChannel: "g",\n            bakedAO: asset.createTexture2D(context, indexOcclusion),\n            bakedAOChannel: "r",\n            emission: indexEmission === undefined ? undefined : asset.createTexture2D(context, indexEmission),\n        },\n    }\n    const deferred = new TgdPainterDeferredShading(context, { meshes: [helmet] })\n    const lighting = new TgdFilterDeferredShading(context, {\n        textureNormals: deferred.textureNormals,\n        textureDepth: deferred.textureDepth,\n        textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,\n        skyboxTexture: "#557",\n    })\n    const glow = new TgdFilterGlow(context, {\n        ...DEFAULT_SETTINGS,\n        tint: parseTint(DEFAULT_SETTINGS.tint),\n        textureEmission: deferred.textureEmission,\n    })\n    context.camera.fitSpaceAtTarget(2.2, 2.2)\n    context.add(\n        new TgdPainterClear(context, { color: [0.05, 0.05, 0.08, 1], depth: 1 }),\n        deferred,\n        // Nothing is painted (alpha = 0) where there is no mesh nor glow.\n        new TgdPainterState(context, {\n            depth: "off",\n            cull: "off",\n            blend: "alpha",\n            children: [\n                new TgdPainterFilter(context, {\n                    texture: deferred.textureAlbedo,\n                    filters: [lighting, glow],\n                    flipY: true,\n                }),\n            ],\n        }),\n    )\n    context.paint()',
    "applySettings()": "/**\n * Every option of TgdFilterGlow is a public field that can be changed at any time.\n * Changing `levels`, `hdr` or `downsampleFilter` rebuilds the passes before the next paint.\n */\nfunction applySettings({ context, glow }: Scene, changes: Partial<Settings>) {\n    const { tint, ...others } = changes\n    Object.assign(glow, others)\n    if (tint !== undefined) glow.tint = parseTint(tint)\n    context.paint()\n}",
    "parseTint()": "function parseTint(tint: string): [number, number, number] {\n    const color = new TgdColor(tint)\n    return [color.R, color.G, color.B]\n}"
};
var FULL = 'import {\n    TgdColor,\n    type TgdContext,\n    TgdFilterDeferredShading,\n    TgdFilterGlow,\n    TgdMaterialFlatTexture,\n    type TgdMeshWithTextures,\n    TgdPainterClear,\n    TgdPainterDeferredShading,\n    TgdPainterFilter,\n    TgdPainterState,\n} from "@tolokoban/tgd"\nimport { ViewInputColor, ViewInputNumber, ViewOptions, ViewPanel, ViewSwitch } from "@tolokoban/ui"\nimport React from "react"\nimport View, { type Assets } from "@/components/demo/Tgd"\nimport HelmetURL from "@/assets/mesh/helmet.glb"\n\n/** What the user can change in the panel. The names are the ones of the fields of TgdFilterGlow. */\ninterface Settings {\n    radius: number\n    strength: number\n    scale: number\n    levels: number\n    falloff: number\n    threshold: number\n    knee: number\n    tint: string\n    blend: "additive" | "screen"\n    hdr: boolean\n    downsampleFilter: "default" | "13-tap"\n}\n\nconst DEFAULT_SETTINGS: Settings = {\n    radius: 0.05,\n    strength: 1.5,\n    scale: 0.5,\n    levels: 5,\n    falloff: 0.7,\n    threshold: 0,\n    knee: 0.5,\n    tint: "#fff",\n    blend: "additive",\n    hdr: false,\n    downsampleFilter: "default",\n}\n\ninterface Scene {\n    context: TgdContext\n    glow: TgdFilterGlow\n}\n\nfunction init(context: TgdContext, assets: Assets): TgdFilterGlow {\n    // glTF stores metallic in BLUE and roughness in GREEN.\n    const { helmet: asset } = assets.glb\n    const gltfMaterial = asset.getMaterial(0)\n    const indexBaseColor = gltfMaterial.pbrMetallicRoughness?.baseColorTexture?.index ?? 0\n    const indexMetallicRoughness = gltfMaterial.pbrMetallicRoughness?.metallicRoughnessTexture?.index ?? 0\n    const indexOcclusion = gltfMaterial.occlusionTexture?.index ?? 0\n    const indexNormals = gltfMaterial.normalTexture?.index ?? 0\n    const indexEmission = gltfMaterial.emissiveTexture?.index\n    const textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness)\n    const helmet: TgdMeshWithTextures = {\n        geometry: asset.makeGeometry(),\n        transfo: asset.createTransfoFromNode(asset.getNode(0)),\n        visible: true,\n        material: new TgdMaterialFlatTexture({\n            texture: asset.createTexture2D(context, indexBaseColor),\n        }),\n        textures: {\n            normals: asset.createTexture2D(context, indexNormals),\n            metallic: textureMetallicRoughness,\n            metallicChannel: "b",\n            roughness: textureMetallicRoughness,\n            roughnessChannel: "g",\n            bakedAO: asset.createTexture2D(context, indexOcclusion),\n            bakedAOChannel: "r",\n            emission: indexEmission === undefined ? undefined : asset.createTexture2D(context, indexEmission),\n        },\n    }\n    const deferred = new TgdPainterDeferredShading(context, { meshes: [helmet] })\n    const lighting = new TgdFilterDeferredShading(context, {\n        textureNormals: deferred.textureNormals,\n        textureDepth: deferred.textureDepth,\n        textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,\n        skyboxTexture: "#557",\n    })\n    const glow = new TgdFilterGlow(context, {\n        ...DEFAULT_SETTINGS,\n        tint: parseTint(DEFAULT_SETTINGS.tint),\n        textureEmission: deferred.textureEmission,\n    })\n    context.camera.fitSpaceAtTarget(2.2, 2.2)\n    context.add(\n        new TgdPainterClear(context, { color: [0.05, 0.05, 0.08, 1], depth: 1 }),\n        deferred,\n        // Nothing is painted (alpha = 0) where there is no mesh nor glow.\n        new TgdPainterState(context, {\n            depth: "off",\n            cull: "off",\n            blend: "alpha",\n            children: [\n                new TgdPainterFilter(context, {\n                    texture: deferred.textureAlbedo,\n                    filters: [lighting, glow],\n                    flipY: true,\n                }),\n            ],\n        }),\n    )\n    context.paint()\n    return glow\n}\n\nexport default function Demo() {\n    const refScene = React.useRef<Scene | null>(null)\n    const [settings, setSettings] = React.useState<Settings>(DEFAULT_SETTINGS)\n    const update = (changes: Partial<Settings>) => {\n        setSettings({ ...settings, ...changes })\n        const scene = refScene.current\n        if (!scene) return\n\n        applySettings(scene, changes)\n    }\n    return (\n        <View\n            onReady={(context: TgdContext, assets: Assets) => {\n                refScene.current = { context, glow: init(context, assets) }\n            }}\n            assets={{ glb: { helmet: HelmetURL } }}\n            controller={{ inertiaOrbit: 1000 }}\n            gizmo>\n            <ViewPanel display="flex" flexDirection="column" gap="S">\n                <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap" gap="S">\n                    <ViewInputNumber label="radius" value={settings.radius} onChange={(radius) => update({ radius })} />\n                    <ViewInputNumber\n                        label="strength"\n                        value={settings.strength}\n                        onChange={(strength) => update({ strength })}\n                    />\n                    <ViewInputColor label="tint" value={settings.tint} onChange={(tint) => update({ tint })} />\n                    <ViewOptions value={settings.blend} onChange={(blend) => update({ blend })}>\n                        <div key="additive">additive</div>\n                        <div key="screen">screen</div>\n                    </ViewOptions>\n                </ViewPanel>\n                <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap" gap="S">\n                    <ViewInputNumber label="scale" value={settings.scale} onChange={(scale) => update({ scale })} />\n                    <ViewInputNumber label="levels" value={settings.levels} onChange={(levels) => update({ levels })} />\n                    <ViewInputNumber\n                        label="falloff"\n                        value={settings.falloff}\n                        onChange={(falloff) => update({ falloff })}\n                    />\n                    <ViewInputNumber\n                        label="threshold"\n                        value={settings.threshold}\n                        onChange={(threshold) => update({ threshold })}\n                    />\n                    <ViewInputNumber label="knee" value={settings.knee} onChange={(knee) => update({ knee })} />\n                </ViewPanel>\n                <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap" gap="S">\n                    <ViewOptions\n                        value={settings.downsampleFilter}\n                        onChange={(downsampleFilter) => update({ downsampleFilter })}>\n                        <div key="default">default</div>\n                        <div key="13-tap">13-tap</div>\n                    </ViewOptions>\n                    <ViewSwitch value={settings.hdr} onChange={(hdr) => update({ hdr })}>\n                        hdr\n                    </ViewSwitch>\n                </ViewPanel>\n            </ViewPanel>\n        </View>\n    )\n}\n\n/**\n * Every option of TgdFilterGlow is a public field that can be changed at any time.\n * Changing `levels`, `hdr` or `downsampleFilter` rebuilds the passes before the next paint.\n */\nfunction applySettings({ context, glow }: Scene, changes: Partial<Settings>) {\n    const { tint, ...others } = changes\n    Object.assign(glow, others)\n    if (tint !== undefined) glow.tint = parseTint(tint)\n    context.paint()\n}\n\nfunction parseTint(tint: string): [number, number, number] {\n    const color = new TgdColor(tint)\n    return [color.R, color.G, color.B]\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_glow_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/index.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/index.tsx",
                lineNumber: 24,
                columnNumber: 13
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/index.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/index.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/index.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/_glow/index.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}


},
53217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _glow__rspack_import_1 = __webpack_require__(64174);
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
        ol: "ol",
        p: "p",
        strong: "strong",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdFilterGlow.html",
                    children: "TgdFilterGlow"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Adds a glow (also called bloom) around the emissive parts of the image."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_glow__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Controls"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Each control changes the option of the same name. The default values are the ones of ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdFilterGlow"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 11,
                        columnNumber: 86
                    }, this),
                    ".\nThe demo only changes ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "strength"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 12,
                        columnNumber: 23
                    }, this),
                    ", which starts at 1.5 to make the glow easier to see."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "radius"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 14,
                                columnNumber: 3
                            }, this),
                            " (default: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "0.05"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 14,
                                columnNumber: 24
                            }, this),
                            "): spread of the glow, as a fraction of the screen height.\nThe glow gets grainy when it is too large: increase ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "levels"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 15,
                                columnNumber: 55
                            }, this),
                            " instead."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 14,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "strength"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 16,
                                columnNumber: 3
                            }, this),
                            " (default: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "1"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 16,
                                columnNumber: 26
                            }, this),
                            "): multiplier of the glow. ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "0"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 16,
                                columnNumber: 56
                            }, this),
                            " disables it."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "tint"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 17,
                                columnNumber: 3
                            }, this),
                            " (default: white): color multiplier of the glow."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "additive / screen"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 18,
                                columnNumber: 3
                            }, this),
                            " (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "blend"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 18,
                                columnNumber: 26
                            }, this),
                            ", default: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"additive\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 18,
                                columnNumber: 44
                            }, this),
                            "): how the glow is combined with the image.\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"additive\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 19,
                                columnNumber: 3
                            }, this),
                            " adds it (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "color + glow"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this),
                            "), ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"screen\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 19,
                                columnNumber: 42
                            }, this),
                            " gives ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "1 - (1 - color) × (1 - glow)"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 19,
                                columnNumber: 59
                            }, this),
                            ", which never exceeds 1."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 18,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "scale"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 20,
                                columnNumber: 3
                            }, this),
                            " (default: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "0.5"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 20,
                                columnNumber: 23
                            }, this),
                            "): size of the first level of the blur, relative to the canvas.\nSmaller is faster and blurs wider, but small sources can flicker when they move."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 20,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "levels"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 22,
                                columnNumber: 3
                            }, this),
                            " (default: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "5"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 22,
                                columnNumber: 24
                            }, this),
                            ", from 1 to 10): number of levels of the blur, each one half the size of the previous one.\nMore levels give a wider halo, for almost the same cost."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 22,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "falloff"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 24,
                                columnNumber: 3
                            }, this),
                            " (default: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "0.7"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 24,
                                columnNumber: 25
                            }, this),
                            "): weight of each level relative to the previous one.\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "0"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 25,
                                columnNumber: 3
                            }, this),
                            " keeps only the tight glow of the first level, ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "1"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 25,
                                columnNumber: 53
                            }, this),
                            " gives the same weight to every level,\nand greater values favour the wide halo."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 24,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "threshold"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 27,
                                columnNumber: 3
                            }, this),
                            " (default: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "0"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 27,
                                columnNumber: 27
                            }, this),
                            "): brightness under which the emission is ignored."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 27,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "knee"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 28,
                                columnNumber: 3
                            }, this),
                            " (default: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "0.5"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 28,
                                columnNumber: 22
                            }, this),
                            ", from 0 to 1): softness of the threshold, as a fraction of it.\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "0"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 29,
                                columnNumber: 3
                            }, this),
                            " gives a hard cut. It has no effect when ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "threshold"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 29,
                                columnNumber: 47
                            }, this),
                            " is ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "0"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 29,
                                columnNumber: 62
                            }, this),
                            "."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 28,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "default / 13-tap"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 30,
                                columnNumber: 3
                            }, this),
                            " (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "downsampleFilter"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 30,
                                columnNumber: 25
                            }, this),
                            ", default: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"default\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 30,
                                columnNumber: 54
                            }, this),
                            "): kernel used to reduce the levels.\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"default\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 31,
                                columnNumber: 3
                            }, this),
                            " takes 5 samples and is the fastest. ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"13-tap\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 31,
                                columnNumber: 51
                            }, this),
                            " takes 13 samples and is more stable\nwith small, bright and moving sources."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 30,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "hdr"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 33,
                                columnNumber: 3
                            }, this),
                            " (default: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "false"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            "): use 16 bits float textures for the blur, so intense emissions don't saturate.\nIt needs the ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "EXT_color_buffer_float"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 34,
                                columnNumber: 16
                            }, this),
                            " extension, and falls back to 8 bits textures without it."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 33,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "levels"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 36,
                        columnNumber: 1
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "downsampleFilter"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "hdr"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 36,
                        columnNumber: 34
                    }, this),
                    " rebuild the passes of the blur. The other controls are free to change."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 36,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "How it works"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 38,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The glow comes from ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "textureEmission"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this),
                    ", here the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "textureEmission"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 40,
                        columnNumber: 49
                    }, this),
                    " of a\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/painter/deferred-shading",
                        children: "TgdPainterDeferredShading"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 41,
                        columnNumber: 1
                    }, this),
                    ", filled with the emissive texture of the helmet.\nBefore the filter is painted, this texture goes through a blur called ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "Dual Filtering"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 42,
                        columnNumber: 71
                    }, this),
                    ":"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 40,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "It is reduced to ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "scale"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            " times the size of the context (default: 0.5).\nThis first pass also ignores what is darker than ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "threshold"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 45,
                                columnNumber: 53
                            }, this),
                            ", with a soft transition set by ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "knee"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 45,
                                columnNumber: 96
                            }, this),
                            "."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 44,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "It is reduced ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "levels - 1"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 46,
                                columnNumber: 18
                            }, this),
                            " more times (default: 5 levels), each time by a factor 2.\nEvery reduction blurs a little: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "downsampleFilter"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 47,
                                columnNumber: 36
                            }, this),
                            " is ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"default\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 47,
                                columnNumber: 58
                            }, this),
                            " (5 samples)\nor ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"13-tap\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 48,
                                columnNumber: 7
                            }, this),
                            " (13 samples, more stable with small, bright and moving sources)."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 46,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "It is enlarged back to the first level, mixing the levels with the weights ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "1, falloff, falloff²…"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 49,
                                columnNumber: 79
                            }, this),
                            "\n(default: 0.7). A small ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "falloff"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                                lineNumber: 50,
                                columnNumber: 28
                            }, this),
                            " gives a tight glow, a big one a wide halo."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 49,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 44,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Then the glow is multiplied by ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "strength"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 52,
                        columnNumber: 32
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "tint"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 52,
                        columnNumber: 47
                    }, this),
                    ", and combined with the input color according to ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "blend"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 52,
                        columnNumber: 102
                    }, this),
                    ":\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "\"additive\""
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 53,
                        columnNumber: 1
                    }, this),
                    " (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "color + glow"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 53,
                        columnNumber: 15
                    }, this),
                    ") or ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "\"screen\""
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 53,
                        columnNumber: 34
                    }, this),
                    " (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "1 - (1 - color) × (1 - glow)"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 53,
                        columnNumber: 46
                    }, this),
                    ", which never exceeds 1)."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 52,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "radius"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 55,
                        columnNumber: 1
                    }, this),
                    " is the spread of the glow, as a fraction of the screen height (default: 0.05).\nFor a wider glow, increase ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "levels"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 56,
                        columnNumber: 28
                    }, this),
                    " rather than ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "radius"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 56,
                        columnNumber: 49
                    }, this),
                    ", which gives artifacts when it is too large."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 55,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "With ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "hdr: true"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 58,
                        columnNumber: 6
                    }, this),
                    ", the intermediate textures are 16 bits floats, so intense emissions don't saturate."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 58,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "All the options are public fields that can be changed at any time.\nChanging ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "levels"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 61,
                        columnNumber: 10
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "hdr"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 61,
                        columnNumber: 20
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "downsampleFilter"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 61,
                        columnNumber: 27
                    }, this),
                    " or ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "textureEmission"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 61,
                        columnNumber: 49
                    }, this),
                    " rebuilds the passes before the next paint."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 60,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "In this demo, the same ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterFilter"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 63,
                        columnNumber: 24
                    }, this),
                    " chains a\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/painter/deferred-shading/lighting",
                        children: "TgdFilterDeferredShading"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                        lineNumber: 64,
                        columnNumber: 1
                    }, this),
                    " for the lighting, then the glow."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 63,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 66,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter/filter",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                    lineNumber: 68,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
                lineNumber: 68,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/glow/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9maWx0ZXJfZ2xvd19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC1jYjYyZDEuMTliNjU5ODlkNmM1YzYxYS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9nbG93L19nbG93L2dsb3cuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZmlsdGVyL2dsb3cvX2dsb3cvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9nbG93L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGdkQ29sb3IsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyxcbiAgICBUZ2RGaWx0ZXJHbG93LFxuICAgIFRnZE1hdGVyaWFsRmxhdFRleHR1cmUsXG4gICAgdHlwZSBUZ2RNZXNoV2l0aFRleHR1cmVzLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nLFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IHsgVmlld0lucHV0Q29sb3IsIFZpZXdJbnB1dE51bWJlciwgVmlld09wdGlvbnMsIFZpZXdQYW5lbCwgVmlld1N3aXRjaCB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCBIZWxtZXRVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvaGVsbWV0LmdsYlwiXG5cbi8qKiBXaGF0IHRoZSB1c2VyIGNhbiBjaGFuZ2UgaW4gdGhlIHBhbmVsLiBUaGUgbmFtZXMgYXJlIHRoZSBvbmVzIG9mIHRoZSBmaWVsZHMgb2YgVGdkRmlsdGVyR2xvdy4gKi9cbmludGVyZmFjZSBTZXR0aW5ncyB7XG4gICAgcmFkaXVzOiBudW1iZXJcbiAgICBzdHJlbmd0aDogbnVtYmVyXG4gICAgc2NhbGU6IG51bWJlclxuICAgIGxldmVsczogbnVtYmVyXG4gICAgZmFsbG9mZjogbnVtYmVyXG4gICAgdGhyZXNob2xkOiBudW1iZXJcbiAgICBrbmVlOiBudW1iZXJcbiAgICB0aW50OiBzdHJpbmdcbiAgICBibGVuZDogXCJhZGRpdGl2ZVwiIHwgXCJzY3JlZW5cIlxuICAgIGhkcjogYm9vbGVhblxuICAgIGRvd25zYW1wbGVGaWx0ZXI6IFwiZGVmYXVsdFwiIHwgXCIxMy10YXBcIlxufVxuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBTZXR0aW5ncyA9IHtcbiAgICByYWRpdXM6IDAuMDUsXG4gICAgc3RyZW5ndGg6IDEuNSxcbiAgICBzY2FsZTogMC41LFxuICAgIGxldmVsczogNSxcbiAgICBmYWxsb2ZmOiAwLjcsXG4gICAgdGhyZXNob2xkOiAwLFxuICAgIGtuZWU6IDAuNSxcbiAgICB0aW50OiBcIiNmZmZcIixcbiAgICBibGVuZDogXCJhZGRpdGl2ZVwiLFxuICAgIGhkcjogZmFsc2UsXG4gICAgZG93bnNhbXBsZUZpbHRlcjogXCJkZWZhdWx0XCIsXG59XG5cbmludGVyZmFjZSBTY2VuZSB7XG4gICAgY29udGV4dDogVGdkQ29udGV4dFxuICAgIGdsb3c6IFRnZEZpbHRlckdsb3dcbn1cblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cyk6IFRnZEZpbHRlckdsb3cge1xuICAgIC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcbiAgICAvLyBnbFRGIHN0b3JlcyBtZXRhbGxpYyBpbiBCTFVFIGFuZCByb3VnaG5lc3MgaW4gR1JFRU4uXG4gICAgY29uc3QgeyBoZWxtZXQ6IGFzc2V0IH0gPSBhc3NldHMuZ2xiXG4gICAgY29uc3QgZ2x0Zk1hdGVyaWFsID0gYXNzZXQuZ2V0TWF0ZXJpYWwoMClcbiAgICBjb25zdCBpbmRleEJhc2VDb2xvciA9IGdsdGZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcz8uYmFzZUNvbG9yVGV4dHVyZT8uaW5kZXggPz8gMFxuICAgIGNvbnN0IGluZGV4TWV0YWxsaWNSb3VnaG5lc3MgPSBnbHRmTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3M/Lm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZT8uaW5kZXggPz8gMFxuICAgIGNvbnN0IGluZGV4T2NjbHVzaW9uID0gZ2x0Zk1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmU/LmluZGV4ID8/IDBcbiAgICBjb25zdCBpbmRleE5vcm1hbHMgPSBnbHRmTWF0ZXJpYWwubm9ybWFsVGV4dHVyZT8uaW5kZXggPz8gMFxuICAgIGNvbnN0IGluZGV4RW1pc3Npb24gPSBnbHRmTWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlPy5pbmRleFxuICAgIGNvbnN0IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyA9IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleE1ldGFsbGljUm91Z2huZXNzKVxuICAgIGNvbnN0IGhlbG1ldDogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcbiAgICAgICAgZ2VvbWV0cnk6IGFzc2V0Lm1ha2VHZW9tZXRyeSgpLFxuICAgICAgICB0cmFuc2ZvOiBhc3NldC5jcmVhdGVUcmFuc2ZvRnJvbU5vZGUoYXNzZXQuZ2V0Tm9kZSgwKSksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XG4gICAgICAgICAgICB0ZXh0dXJlOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhCYXNlQ29sb3IpLFxuICAgICAgICB9KSxcbiAgICAgICAgdGV4dHVyZXM6IHtcbiAgICAgICAgICAgIG5vcm1hbHM6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleE5vcm1hbHMpLFxuICAgICAgICAgICAgbWV0YWxsaWM6IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyxcbiAgICAgICAgICAgIG1ldGFsbGljQ2hhbm5lbDogXCJiXCIsXG4gICAgICAgICAgICByb3VnaG5lc3M6IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyxcbiAgICAgICAgICAgIHJvdWdobmVzc0NoYW5uZWw6IFwiZ1wiLFxuICAgICAgICAgICAgYmFrZWRBTzogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4T2NjbHVzaW9uKSxcbiAgICAgICAgICAgIGJha2VkQU9DaGFubmVsOiBcInJcIixcbiAgICAgICAgICAgIGVtaXNzaW9uOiBpbmRleEVtaXNzaW9uID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhFbWlzc2lvbiksXG4gICAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwgeyBtZXNoZXM6IFtoZWxtZXRdIH0pXG4gICAgY29uc3QgbGlnaHRpbmcgPSBuZXcgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nKGNvbnRleHQsIHtcbiAgICAgICAgdGV4dHVyZU5vcm1hbHM6IGRlZmVycmVkLnRleHR1cmVOb3JtYWxzLFxuICAgICAgICB0ZXh0dXJlRGVwdGg6IGRlZmVycmVkLnRleHR1cmVEZXB0aCxcbiAgICAgICAgdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPOiBkZWZlcnJlZC50ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3NTcGVjdWxhckJha2VkQU8sXG4gICAgICAgIHNreWJveFRleHR1cmU6IFwiIzU1N1wiLFxuICAgIH0pXG4gICAgY29uc3QgZ2xvdyA9IG5ldyBUZ2RGaWx0ZXJHbG93KGNvbnRleHQsIHtcbiAgICAgICAgLi4uREVGQVVMVF9TRVRUSU5HUyxcbiAgICAgICAgdGludDogcGFyc2VUaW50KERFRkFVTFRfU0VUVElOR1MudGludCksXG4gICAgICAgIHRleHR1cmVFbWlzc2lvbjogZGVmZXJyZWQudGV4dHVyZUVtaXNzaW9uLFxuICAgIH0pXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLjIsIDIuMilcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4wNSwgMC4wNSwgMC4wOCwgMV0sIGRlcHRoOiAxIH0pLFxuICAgICAgICBkZWZlcnJlZCxcbiAgICAgICAgLy8gTm90aGluZyBpcyBwYWludGVkIChhbHBoYSA9IDApIHdoZXJlIHRoZXJlIGlzIG5vIG1lc2ggbm9yIGdsb3cuXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IFwib2ZmXCIsXG4gICAgICAgICAgICBjdWxsOiBcIm9mZlwiLFxuICAgICAgICAgICAgYmxlbmQ6IFwiYWxwaGFcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiBkZWZlcnJlZC50ZXh0dXJlQWxiZWRvLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbbGlnaHRpbmcsIGdsb3ddLFxuICAgICAgICAgICAgICAgICAgICBmbGlwWTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICAvLyAjZW5kXG4gICAgcmV0dXJuIGdsb3dcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCByZWZTY2VuZSA9IFJlYWN0LnVzZVJlZjxTY2VuZSB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSBSZWFjdC51c2VTdGF0ZTxTZXR0aW5ncz4oREVGQVVMVF9TRVRUSU5HUylcbiAgICBjb25zdCB1cGRhdGUgPSAoY2hhbmdlczogUGFydGlhbDxTZXR0aW5ncz4pID0+IHtcbiAgICAgICAgc2V0U2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgLi4uY2hhbmdlcyB9KVxuICAgICAgICBjb25zdCBzY2VuZSA9IHJlZlNjZW5lLmN1cnJlbnRcbiAgICAgICAgaWYgKCFzY2VuZSkgcmV0dXJuXG5cbiAgICAgICAgYXBwbHlTZXR0aW5ncyhzY2VuZSwgY2hhbmdlcylcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9eyhjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgIHJlZlNjZW5lLmN1cnJlbnQgPSB7IGNvbnRleHQsIGdsb3c6IGluaXQoY29udGV4dCwgYXNzZXRzKSB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXNzZXRzPXt7IGdsYjogeyBoZWxtZXQ6IEhlbG1ldFVSTCB9IH19XG4gICAgICAgICAgICBjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fVxuICAgICAgICAgICAgZ2l6bW8+XG4gICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD1cIlNcIj5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleFdyYXA9XCJ3cmFwXCIgZ2FwPVwiU1wiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwicmFkaXVzXCIgdmFsdWU9e3NldHRpbmdzLnJhZGl1c30gb25DaGFuZ2U9eyhyYWRpdXMpID0+IHVwZGF0ZSh7IHJhZGl1cyB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzdHJlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2V0dGluZ3Muc3RyZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHN0cmVuZ3RoKSA9PiB1cGRhdGUoeyBzdHJlbmd0aCB9KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dENvbG9yIGxhYmVsPVwidGludFwiIHZhbHVlPXtzZXR0aW5ncy50aW50fSBvbkNoYW5nZT17KHRpbnQpID0+IHVwZGF0ZSh7IHRpbnQgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyB2YWx1ZT17c2V0dGluZ3MuYmxlbmR9IG9uQ2hhbmdlPXsoYmxlbmQpID0+IHVwZGF0ZSh7IGJsZW5kIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiYWRkaXRpdmVcIj5hZGRpdGl2ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJzY3JlZW5cIj5zY3JlZW48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleFdyYXA9XCJ3cmFwXCIgZ2FwPVwiU1wiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwic2NhbGVcIiB2YWx1ZT17c2V0dGluZ3Muc2NhbGV9IG9uQ2hhbmdlPXsoc2NhbGUpID0+IHVwZGF0ZSh7IHNjYWxlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwibGV2ZWxzXCIgdmFsdWU9e3NldHRpbmdzLmxldmVsc30gb25DaGFuZ2U9eyhsZXZlbHMpID0+IHVwZGF0ZSh7IGxldmVscyB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJmYWxsb2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy5mYWxsb2ZmfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmYWxsb2ZmKSA9PiB1cGRhdGUoeyBmYWxsb2ZmIH0pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRocmVzaG9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2V0dGluZ3MudGhyZXNob2xkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0aHJlc2hvbGQpID0+IHVwZGF0ZSh7IHRocmVzaG9sZCB9KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cImtuZWVcIiB2YWx1ZT17c2V0dGluZ3Mua25lZX0gb25DaGFuZ2U9eyhrbmVlKSA9PiB1cGRhdGUoeyBrbmVlIH0pfSAvPlxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4V3JhcD1cIndyYXBcIiBnYXA9XCJTXCI+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzLmRvd25zYW1wbGVGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRvd25zYW1wbGVGaWx0ZXIpID0+IHVwZGF0ZSh7IGRvd25zYW1wbGVGaWx0ZXIgfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJkZWZhdWx0XCI+ZGVmYXVsdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCIxMy10YXBcIj4xMy10YXA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2ggdmFsdWU9e3NldHRpbmdzLmhkcn0gb25DaGFuZ2U9eyhoZHIpID0+IHVwZGF0ZSh7IGhkciB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBoZHJcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgIDwvVmlldz5cbiAgICApXG59XG5cbi8vICNiZWdpbiBhcHBseVNldHRpbmdzKClcbi8qKlxuICogRXZlcnkgb3B0aW9uIG9mIFRnZEZpbHRlckdsb3cgaXMgYSBwdWJsaWMgZmllbGQgdGhhdCBjYW4gYmUgY2hhbmdlZCBhdCBhbnkgdGltZS5cbiAqIENoYW5naW5nIGBsZXZlbHNgLCBgaGRyYCBvciBgZG93bnNhbXBsZUZpbHRlcmAgcmVidWlsZHMgdGhlIHBhc3NlcyBiZWZvcmUgdGhlIG5leHQgcGFpbnQuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5U2V0dGluZ3MoeyBjb250ZXh0LCBnbG93IH06IFNjZW5lLCBjaGFuZ2VzOiBQYXJ0aWFsPFNldHRpbmdzPikge1xuICAgIGNvbnN0IHsgdGludCwgLi4ub3RoZXJzIH0gPSBjaGFuZ2VzXG4gICAgT2JqZWN0LmFzc2lnbihnbG93LCBvdGhlcnMpXG4gICAgaWYgKHRpbnQgIT09IHVuZGVmaW5lZCkgZ2xvdy50aW50ID0gcGFyc2VUaW50KHRpbnQpXG4gICAgY29udGV4dC5wYWludCgpXG59XG4vLyAjZW5kXG5cbi8vICNiZWdpbiBwYXJzZVRpbnQoKVxuZnVuY3Rpb24gcGFyc2VUaW50KHRpbnQ6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gICAgY29uc3QgY29sb3IgPSBuZXcgVGdkQ29sb3IodGludClcbiAgICByZXR1cm4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkJdXG59XG4vLyAjZW5kXG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vZ2xvdy5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJJbml0aWFsaXppbmcgV2ViR0xcIjpcbiAgICAgICAgJyAgICAvLyBnbFRGIHN0b3JlcyBtZXRhbGxpYyBpbiBCTFVFIGFuZCByb3VnaG5lc3MgaW4gR1JFRU4uXFxuICAgIGNvbnN0IHsgaGVsbWV0OiBhc3NldCB9ID0gYXNzZXRzLmdsYlxcbiAgICBjb25zdCBnbHRmTWF0ZXJpYWwgPSBhc3NldC5nZXRNYXRlcmlhbCgwKVxcbiAgICBjb25zdCBpbmRleEJhc2VDb2xvciA9IGdsdGZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcz8uYmFzZUNvbG9yVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleE1ldGFsbGljUm91Z2huZXNzID0gZ2x0Zk1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzPy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmU/LmluZGV4ID8/IDBcXG4gICAgY29uc3QgaW5kZXhPY2NsdXNpb24gPSBnbHRmTWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleE5vcm1hbHMgPSBnbHRmTWF0ZXJpYWwubm9ybWFsVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleEVtaXNzaW9uID0gZ2x0Zk1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZT8uaW5kZXhcXG4gICAgY29uc3QgdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzID0gYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4TWV0YWxsaWNSb3VnaG5lc3MpXFxuICAgIGNvbnN0IGhlbG1ldDogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBhc3NldC5tYWtlR2VvbWV0cnkoKSxcXG4gICAgICAgIHRyYW5zZm86IGFzc2V0LmNyZWF0ZVRyYW5zZm9Gcm9tTm9kZShhc3NldC5nZXROb2RlKDApKSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoe1xcbiAgICAgICAgICAgIHRleHR1cmU6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleEJhc2VDb2xvciksXFxuICAgICAgICB9KSxcXG4gICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgbm9ybWFsczogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4Tm9ybWFscyksXFxuICAgICAgICAgICAgbWV0YWxsaWM6IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyxcXG4gICAgICAgICAgICBtZXRhbGxpY0NoYW5uZWw6IFwiYlwiLFxcbiAgICAgICAgICAgIHJvdWdobmVzczogdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzLFxcbiAgICAgICAgICAgIHJvdWdobmVzc0NoYW5uZWw6IFwiZ1wiLFxcbiAgICAgICAgICAgIGJha2VkQU86IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleE9jY2x1c2lvbiksXFxuICAgICAgICAgICAgYmFrZWRBT0NoYW5uZWw6IFwiclwiLFxcbiAgICAgICAgICAgIGVtaXNzaW9uOiBpbmRleEVtaXNzaW9uID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhFbWlzc2lvbiksXFxuICAgICAgICB9LFxcbiAgICB9XFxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwgeyBtZXNoZXM6IFtoZWxtZXRdIH0pXFxuICAgIGNvbnN0IGxpZ2h0aW5nID0gbmV3IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlTm9ybWFsczogZGVmZXJyZWQudGV4dHVyZU5vcm1hbHMsXFxuICAgICAgICB0ZXh0dXJlRGVwdGg6IGRlZmVycmVkLnRleHR1cmVEZXB0aCxcXG4gICAgICAgIHRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTzogZGVmZXJyZWQudGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPLFxcbiAgICAgICAgc2t5Ym94VGV4dHVyZTogXCIjNTU3XCIsXFxuICAgIH0pXFxuICAgIGNvbnN0IGdsb3cgPSBuZXcgVGdkRmlsdGVyR2xvdyhjb250ZXh0LCB7XFxuICAgICAgICAuLi5ERUZBVUxUX1NFVFRJTkdTLFxcbiAgICAgICAgdGludDogcGFyc2VUaW50KERFRkFVTFRfU0VUVElOR1MudGludCksXFxuICAgICAgICB0ZXh0dXJlRW1pc3Npb246IGRlZmVycmVkLnRleHR1cmVFbWlzc2lvbixcXG4gICAgfSlcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgyLjIsIDIuMilcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjA1LCAwLjA1LCAwLjA4LCAxXSwgZGVwdGg6IDEgfSksXFxuICAgICAgICBkZWZlcnJlZCxcXG4gICAgICAgIC8vIE5vdGhpbmcgaXMgcGFpbnRlZCAoYWxwaGEgPSAwKSB3aGVyZSB0aGVyZSBpcyBubyBtZXNoIG5vciBnbG93LlxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFwib2ZmXCIsXFxuICAgICAgICAgICAgY3VsbDogXCJvZmZcIixcXG4gICAgICAgICAgICBibGVuZDogXCJhbHBoYVwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmU6IGRlZmVycmVkLnRleHR1cmVBbGJlZG8sXFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbbGlnaHRpbmcsIGdsb3ddLFxcbiAgICAgICAgICAgICAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KCknLFxuICAgIFwiYXBwbHlTZXR0aW5ncygpXCI6XG4gICAgICAgIFwiLyoqXFxuICogRXZlcnkgb3B0aW9uIG9mIFRnZEZpbHRlckdsb3cgaXMgYSBwdWJsaWMgZmllbGQgdGhhdCBjYW4gYmUgY2hhbmdlZCBhdCBhbnkgdGltZS5cXG4gKiBDaGFuZ2luZyBgbGV2ZWxzYCwgYGhkcmAgb3IgYGRvd25zYW1wbGVGaWx0ZXJgIHJlYnVpbGRzIHRoZSBwYXNzZXMgYmVmb3JlIHRoZSBuZXh0IHBhaW50LlxcbiAqL1xcbmZ1bmN0aW9uIGFwcGx5U2V0dGluZ3MoeyBjb250ZXh0LCBnbG93IH06IFNjZW5lLCBjaGFuZ2VzOiBQYXJ0aWFsPFNldHRpbmdzPikge1xcbiAgICBjb25zdCB7IHRpbnQsIC4uLm90aGVycyB9ID0gY2hhbmdlc1xcbiAgICBPYmplY3QuYXNzaWduKGdsb3csIG90aGVycylcXG4gICAgaWYgKHRpbnQgIT09IHVuZGVmaW5lZCkgZ2xvdy50aW50ID0gcGFyc2VUaW50KHRpbnQpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbn1cIixcbiAgICBcInBhcnNlVGludCgpXCI6XG4gICAgICAgIFwiZnVuY3Rpb24gcGFyc2VUaW50KHRpbnQ6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XFxuICAgIGNvbnN0IGNvbG9yID0gbmV3IFRnZENvbG9yKHRpbnQpXFxuICAgIHJldHVybiBbY29sb3IuUiwgY29sb3IuRywgY29sb3IuQl1cXG59XCIsXG59XG5jb25zdCBGVUxMID1cbiAgICAnaW1wb3J0IHtcXG4gICAgVGdkQ29sb3IsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nLFxcbiAgICBUZ2RGaWx0ZXJHbG93LFxcbiAgICBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlLFxcbiAgICB0eXBlIFRnZE1lc2hXaXRoVGV4dHVyZXMsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyxcXG4gICAgVGdkUGFpbnRlckZpbHRlcixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5pbXBvcnQgeyBWaWV3SW5wdXRDb2xvciwgVmlld0lucHV0TnVtYmVyLCBWaWV3T3B0aW9ucywgVmlld1BhbmVsLCBWaWV3U3dpdGNoIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXFxuaW1wb3J0IEhlbG1ldFVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oZWxtZXQuZ2xiXCJcXG5cXG4vKiogV2hhdCB0aGUgdXNlciBjYW4gY2hhbmdlIGluIHRoZSBwYW5lbC4gVGhlIG5hbWVzIGFyZSB0aGUgb25lcyBvZiB0aGUgZmllbGRzIG9mIFRnZEZpbHRlckdsb3cuICovXFxuaW50ZXJmYWNlIFNldHRpbmdzIHtcXG4gICAgcmFkaXVzOiBudW1iZXJcXG4gICAgc3RyZW5ndGg6IG51bWJlclxcbiAgICBzY2FsZTogbnVtYmVyXFxuICAgIGxldmVsczogbnVtYmVyXFxuICAgIGZhbGxvZmY6IG51bWJlclxcbiAgICB0aHJlc2hvbGQ6IG51bWJlclxcbiAgICBrbmVlOiBudW1iZXJcXG4gICAgdGludDogc3RyaW5nXFxuICAgIGJsZW5kOiBcImFkZGl0aXZlXCIgfCBcInNjcmVlblwiXFxuICAgIGhkcjogYm9vbGVhblxcbiAgICBkb3duc2FtcGxlRmlsdGVyOiBcImRlZmF1bHRcIiB8IFwiMTMtdGFwXCJcXG59XFxuXFxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogU2V0dGluZ3MgPSB7XFxuICAgIHJhZGl1czogMC4wNSxcXG4gICAgc3RyZW5ndGg6IDEuNSxcXG4gICAgc2NhbGU6IDAuNSxcXG4gICAgbGV2ZWxzOiA1LFxcbiAgICBmYWxsb2ZmOiAwLjcsXFxuICAgIHRocmVzaG9sZDogMCxcXG4gICAga25lZTogMC41LFxcbiAgICB0aW50OiBcIiNmZmZcIixcXG4gICAgYmxlbmQ6IFwiYWRkaXRpdmVcIixcXG4gICAgaGRyOiBmYWxzZSxcXG4gICAgZG93bnNhbXBsZUZpbHRlcjogXCJkZWZhdWx0XCIsXFxufVxcblxcbmludGVyZmFjZSBTY2VuZSB7XFxuICAgIGNvbnRleHQ6IFRnZENvbnRleHRcXG4gICAgZ2xvdzogVGdkRmlsdGVyR2xvd1xcbn1cXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKTogVGdkRmlsdGVyR2xvdyB7XFxuICAgIC8vIGdsVEYgc3RvcmVzIG1ldGFsbGljIGluIEJMVUUgYW5kIHJvdWdobmVzcyBpbiBHUkVFTi5cXG4gICAgY29uc3QgeyBoZWxtZXQ6IGFzc2V0IH0gPSBhc3NldHMuZ2xiXFxuICAgIGNvbnN0IGdsdGZNYXRlcmlhbCA9IGFzc2V0LmdldE1hdGVyaWFsKDApXFxuICAgIGNvbnN0IGluZGV4QmFzZUNvbG9yID0gZ2x0Zk1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzPy5iYXNlQ29sb3JUZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIGNvbnN0IGluZGV4TWV0YWxsaWNSb3VnaG5lc3MgPSBnbHRmTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3M/Lm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleE9jY2x1c2lvbiA9IGdsdGZNYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIGNvbnN0IGluZGV4Tm9ybWFscyA9IGdsdGZNYXRlcmlhbC5ub3JtYWxUZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIGNvbnN0IGluZGV4RW1pc3Npb24gPSBnbHRmTWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlPy5pbmRleFxcbiAgICBjb25zdCB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3MgPSBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhNZXRhbGxpY1JvdWdobmVzcylcXG4gICAgY29uc3QgaGVsbWV0OiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IGFzc2V0Lm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgdHJhbnNmbzogYXNzZXQuY3JlYXRlVHJhbnNmb0Zyb21Ob2RlKGFzc2V0LmdldE5vZGUoMCkpLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XFxuICAgICAgICAgICAgdGV4dHVyZTogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4QmFzZUNvbG9yKSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICBub3JtYWxzOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhOb3JtYWxzKSxcXG4gICAgICAgICAgICBtZXRhbGxpYzogdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzLFxcbiAgICAgICAgICAgIG1ldGFsbGljQ2hhbm5lbDogXCJiXCIsXFxuICAgICAgICAgICAgcm91Z2huZXNzOiB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3MsXFxuICAgICAgICAgICAgcm91Z2huZXNzQ2hhbm5lbDogXCJnXCIsXFxuICAgICAgICAgICAgYmFrZWRBTzogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4T2NjbHVzaW9uKSxcXG4gICAgICAgICAgICBiYWtlZEFPQ2hhbm5lbDogXCJyXCIsXFxuICAgICAgICAgICAgZW1pc3Npb246IGluZGV4RW1pc3Npb24gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleEVtaXNzaW9uKSxcXG4gICAgICAgIH0sXFxuICAgIH1cXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7IG1lc2hlczogW2hlbG1ldF0gfSlcXG4gICAgY29uc3QgbGlnaHRpbmcgPSBuZXcgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmVOb3JtYWxzOiBkZWZlcnJlZC50ZXh0dXJlTm9ybWFscyxcXG4gICAgICAgIHRleHR1cmVEZXB0aDogZGVmZXJyZWQudGV4dHVyZURlcHRoLFxcbiAgICAgICAgdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPOiBkZWZlcnJlZC50ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3NTcGVjdWxhckJha2VkQU8sXFxuICAgICAgICBza3lib3hUZXh0dXJlOiBcIiM1NTdcIixcXG4gICAgfSlcXG4gICAgY29uc3QgZ2xvdyA9IG5ldyBUZ2RGaWx0ZXJHbG93KGNvbnRleHQsIHtcXG4gICAgICAgIC4uLkRFRkFVTFRfU0VUVElOR1MsXFxuICAgICAgICB0aW50OiBwYXJzZVRpbnQoREVGQVVMVF9TRVRUSU5HUy50aW50KSxcXG4gICAgICAgIHRleHR1cmVFbWlzc2lvbjogZGVmZXJyZWQudGV4dHVyZUVtaXNzaW9uLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDIuMiwgMi4yKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMDUsIDAuMDUsIDAuMDgsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgIGRlZmVycmVkLFxcbiAgICAgICAgLy8gTm90aGluZyBpcyBwYWludGVkIChhbHBoYSA9IDApIHdoZXJlIHRoZXJlIGlzIG5vIG1lc2ggbm9yIGdsb3cuXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXCJvZmZcIixcXG4gICAgICAgICAgICBjdWxsOiBcIm9mZlwiLFxcbiAgICAgICAgICAgIGJsZW5kOiBcImFscGhhXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZTogZGVmZXJyZWQudGV4dHVyZUFsYmVkbyxcXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnM6IFtsaWdodGluZywgZ2xvd10sXFxuICAgICAgICAgICAgICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICByZXR1cm4gZ2xvd1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCByZWZTY2VuZSA9IFJlYWN0LnVzZVJlZjxTY2VuZSB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IFtzZXR0aW5ncywgc2V0U2V0dGluZ3NdID0gUmVhY3QudXNlU3RhdGU8U2V0dGluZ3M+KERFRkFVTFRfU0VUVElOR1MpXFxuICAgIGNvbnN0IHVwZGF0ZSA9IChjaGFuZ2VzOiBQYXJ0aWFsPFNldHRpbmdzPikgPT4ge1xcbiAgICAgICAgc2V0U2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgLi4uY2hhbmdlcyB9KVxcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XFxuICAgICAgICBpZiAoIXNjZW5lKSByZXR1cm5cXG5cXG4gICAgICAgIGFwcGx5U2V0dGluZ3Moc2NlbmUsIGNoYW5nZXMpXFxuICAgIH1cXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICAgICAgICAgIHJlZlNjZW5lLmN1cnJlbnQgPSB7IGNvbnRleHQsIGdsb3c6IGluaXQoY29udGV4dCwgYXNzZXRzKSB9XFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBhc3NldHM9e3sgZ2xiOiB7IGhlbG1ldDogSGVsbWV0VVJMIH0gfX1cXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fVxcbiAgICAgICAgICAgIGdpem1vPlxcbiAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPVwiU1wiPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleFdyYXA9XCJ3cmFwXCIgZ2FwPVwiU1wiPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cInJhZGl1c1wiIHZhbHVlPXtzZXR0aW5ncy5yYWRpdXN9IG9uQ2hhbmdlPXsocmFkaXVzKSA9PiB1cGRhdGUoeyByYWRpdXMgfSl9IC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzdHJlbmd0aFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzLnN0cmVuZ3RofVxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoc3RyZW5ndGgpID0+IHVwZGF0ZSh7IHN0cmVuZ3RoIH0pfVxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXRDb2xvciBsYWJlbD1cInRpbnRcIiB2YWx1ZT17c2V0dGluZ3MudGludH0gb25DaGFuZ2U9eyh0aW50KSA9PiB1cGRhdGUoeyB0aW50IH0pfSAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdPcHRpb25zIHZhbHVlPXtzZXR0aW5ncy5ibGVuZH0gb25DaGFuZ2U9eyhibGVuZCkgPT4gdXBkYXRlKHsgYmxlbmQgfSl9PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiYWRkaXRpdmVcIj5hZGRpdGl2ZTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwic2NyZWVuXCI+c2NyZWVuPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdPcHRpb25zPlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhXcmFwPVwid3JhcFwiIGdhcD1cIlNcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgbGFiZWw9XCJzY2FsZVwiIHZhbHVlPXtzZXR0aW5ncy5zY2FsZX0gb25DaGFuZ2U9eyhzY2FsZSkgPT4gdXBkYXRlKHsgc2NhbGUgfSl9IC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwibGV2ZWxzXCIgdmFsdWU9e3NldHRpbmdzLmxldmVsc30gb25DaGFuZ2U9eyhsZXZlbHMpID0+IHVwZGF0ZSh7IGxldmVscyB9KX0gLz5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImZhbGxvZmZcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy5mYWxsb2ZmfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmFsbG9mZikgPT4gdXBkYXRlKHsgZmFsbG9mZiB9KX1cXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0aHJlc2hvbGRcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy50aHJlc2hvbGR9XFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0aHJlc2hvbGQpID0+IHVwZGF0ZSh7IHRocmVzaG9sZCB9KX1cXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwia25lZVwiIHZhbHVlPXtzZXR0aW5ncy5rbmVlfSBvbkNoYW5nZT17KGtuZWUpID0+IHVwZGF0ZSh7IGtuZWUgfSl9IC8+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleFdyYXA9XCJ3cmFwXCIgZ2FwPVwiU1wiPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdPcHRpb25zXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzLmRvd25zYW1wbGVGaWx0ZXJ9XFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkb3duc2FtcGxlRmlsdGVyKSA9PiB1cGRhdGUoeyBkb3duc2FtcGxlRmlsdGVyIH0pfT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImRlZmF1bHRcIj5kZWZhdWx0PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCIxMy10YXBcIj4xMy10YXA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaCB2YWx1ZT17c2V0dGluZ3MuaGRyfSBvbkNoYW5nZT17KGhkcikgPT4gdXBkYXRlKHsgaGRyIH0pfT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBoZHJcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cXG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICA8L1ZpZXc+XFxuICAgIClcXG59XFxuXFxuLyoqXFxuICogRXZlcnkgb3B0aW9uIG9mIFRnZEZpbHRlckdsb3cgaXMgYSBwdWJsaWMgZmllbGQgdGhhdCBjYW4gYmUgY2hhbmdlZCBhdCBhbnkgdGltZS5cXG4gKiBDaGFuZ2luZyBgbGV2ZWxzYCwgYGhkcmAgb3IgYGRvd25zYW1wbGVGaWx0ZXJgIHJlYnVpbGRzIHRoZSBwYXNzZXMgYmVmb3JlIHRoZSBuZXh0IHBhaW50LlxcbiAqL1xcbmZ1bmN0aW9uIGFwcGx5U2V0dGluZ3MoeyBjb250ZXh0LCBnbG93IH06IFNjZW5lLCBjaGFuZ2VzOiBQYXJ0aWFsPFNldHRpbmdzPikge1xcbiAgICBjb25zdCB7IHRpbnQsIC4uLm90aGVycyB9ID0gY2hhbmdlc1xcbiAgICBPYmplY3QuYXNzaWduKGdsb3csIG90aGVycylcXG4gICAgaWYgKHRpbnQgIT09IHVuZGVmaW5lZCkgZ2xvdy50aW50ID0gcGFyc2VUaW50KHRpbnQpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbn1cXG5cXG5mdW5jdGlvbiBwYXJzZVRpbnQodGludDogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcXG4gICAgY29uc3QgY29sb3IgPSBuZXcgVGdkQ29sb3IodGludClcXG4gICAgcmV0dXJuIFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CXVxcbn1cXG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPERlbW8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiVGdkQ29sb3IiLCJUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmciLCJUZ2RGaWx0ZXJHbG93IiwiVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmciLCJUZ2RQYWludGVyRmlsdGVyIiwiVGdkUGFpbnRlclN0YXRlIiwiVmlld0lucHV0Q29sb3IiLCJWaWV3SW5wdXROdW1iZXIiLCJWaWV3T3B0aW9ucyIsIlZpZXdQYW5lbCIsIlZpZXdTd2l0Y2giLCJSZWFjdCIsIlZpZXciLCJIZWxtZXRVUkwiLCJERUZBVUxUX1NFVFRJTkdTIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJfZ2x0Zk1hdGVyaWFsX3Bick1ldGFsbGljUm91Z2huZXNzX2Jhc2VDb2xvclRleHR1cmUiLCJfZ2x0Zk1hdGVyaWFsX3Bick1ldGFsbGljUm91Z2huZXNzX21ldGFsbGljUm91Z2huZXNzVGV4dHVyZSIsIl9nbHRmTWF0ZXJpYWxfb2NjbHVzaW9uVGV4dHVyZSIsIl9nbHRmTWF0ZXJpYWxfbm9ybWFsVGV4dHVyZSIsIl9nbHRmTWF0ZXJpYWxfZW1pc3NpdmVUZXh0dXJlIiwiX2Fzc2V0c19nbGIiLCJhc3NldCIsImdsdGZNYXRlcmlhbCIsImluZGV4QmFzZUNvbG9yIiwiaW5kZXhNZXRhbGxpY1JvdWdobmVzcyIsImluZGV4T2NjbHVzaW9uIiwiaW5kZXhOb3JtYWxzIiwiaW5kZXhFbWlzc2lvbiIsInRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyIsImhlbG1ldCIsInVuZGVmaW5lZCIsImRlZmVycmVkIiwibGlnaHRpbmciLCJnbG93IiwicGFyc2VUaW50IiwiRGVtbyIsInJlZlNjZW5lIiwiX1JlYWN0X3VzZVN0YXRlIiwic2V0dGluZ3MiLCJzZXRTZXR0aW5ncyIsInVwZGF0ZSIsImNoYW5nZXMiLCJzY2VuZSIsImFwcGx5U2V0dGluZ3MiLCJvblJlYWR5Iiwib25DaGFuZ2UiLCJyYWRpdXMiLCJzdHJlbmd0aCIsInRpbnQiLCJibGVuZCIsInNjYWxlIiwibGV2ZWxzIiwiZmFsbG9mZiIsInRocmVzaG9sZCIsImtuZWUiLCJkb3duc2FtcGxlRmlsdGVyIiwiaGRyIiwicGFyYW0iLCJvdGhlcnMiLCJPYmplY3QiLCJjb2xvciIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3VCO0FBQzRFO0FBQzFFO0FBQ2dDO0FBQ1Q7QUFpQmhELElBQU1nQixtQkFBNkI7SUFDL0IsUUFBUTtJQUNSLFVBQVU7SUFDVixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsTUFBTTtJQUNOLE1BQU07SUFDTixPQUFPO0lBQ1AsS0FBSztJQUNMLGtCQUFrQjtBQUN0QjtBQU9BLFNBQVNDLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7O1FBS3RCQyxxREFBQUEsb0NBQ1FDLDZEQUFBQSxxQ0FDUkMsZ0NBQ0ZDLDZCQUNDQztJQVJ0Qiw0QkFBNEI7SUFDNUIsdURBQXVEO0lBQ3ZELElBQTBCQyxjQUFBQSxPQUFPLEdBQUcsRUFBcEJDLFFBQVVELFlBQWxCO0lBQ1IsSUFBTUUsZUFBZUQsTUFBTSxXQUFXLENBQUM7SUFDdkMsSUFBTUUsMEJBQWlCUixxQ0FBQUEsYUFBYSxvQkFBb0IsY0FBakNBLDBEQUFBQSxzREFBQUEsbUNBQW1DLGdCQUFnQixjQUFuREEsMEVBQUFBLG9EQUFxRCxLQUFLLHVDQUFJO0lBQ3JGLElBQU1TLG1DQUF5QlIsc0NBQUFBLGFBQWEsb0JBQW9CLGNBQWpDQSwyREFBQUEsOERBQUFBLG9DQUFtQyx3QkFBd0IsY0FBM0RBLGtGQUFBQSw0REFBNkQsS0FBSyx5Q0FBSTtJQUNyRyxJQUFNUywyQkFBaUJSLGlDQUFBQSxhQUFhLGdCQUFnQixjQUE3QkEscURBQUFBLCtCQUErQixLQUFLLHlDQUFJO0lBQy9ELElBQU1TLHlCQUFlUiw4QkFBQUEsYUFBYSxhQUFhLGNBQTFCQSxrREFBQUEsNEJBQTRCLEtBQUsseUNBQUk7SUFDMUQsSUFBTVMsaUJBQWdCUixnQ0FBQUEsYUFBYSxlQUFlLGNBQTVCQSxvREFBQUEsOEJBQThCLEtBQUs7SUFDekQsSUFBTVMsMkJBQTJCUCxNQUFNLGVBQWUsQ0FBQ1IsU0FBU1c7SUFDaEUsSUFBTUssU0FBOEI7UUFDaEMsVUFBVVIsTUFBTSxZQUFZO1FBQzVCLFNBQVNBLE1BQU0scUJBQXFCLENBQUNBLE1BQU0sT0FBTyxDQUFDO1FBQ25ELFNBQVM7UUFDVCxVQUFVLElBQUl2QixzREFBc0JBLENBQUM7WUFDakMsU0FBU3VCLE1BQU0sZUFBZSxDQUFDUixTQUFTVTtRQUM1QztRQUNBLFVBQVU7WUFDTixTQUFTRixNQUFNLGVBQWUsQ0FBQ1IsU0FBU2E7WUFDeEMsVUFBVUU7WUFDVixpQkFBaUI7WUFDakIsV0FBV0E7WUFDWCxrQkFBa0I7WUFDbEIsU0FBU1AsTUFBTSxlQUFlLENBQUNSLFNBQVNZO1lBQ3hDLGdCQUFnQjtZQUNoQixVQUFVRSxrQkFBa0JHLFlBQVlBLFlBQVlULE1BQU0sZUFBZSxDQUFDUixTQUFTYztRQUN2RjtJQUNKO0lBQ0EsSUFBTUksV0FBVyxJQUFJL0IseURBQXlCQSxDQUFDYSxTQUFTO1FBQUUsUUFBUTtZQUFDZ0I7U0FBTztJQUFDO0lBQzNFLElBQU1HLFdBQVcsSUFBSXBDLHdEQUF3QkEsQ0FBQ2lCLFNBQVM7UUFDbkQsZ0JBQWdCa0IsU0FBUyxjQUFjO1FBQ3ZDLGNBQWNBLFNBQVMsWUFBWTtRQUNuQyx5Q0FBeUNBLFNBQVMsdUNBQXVDO1FBQ3pGLGVBQWU7SUFDbkI7SUFDQSxJQUFNRSxPQUFPLElBQUlwQyw2Q0FBYUEsQ0FBQ2dCLFNBQVMsd0NBQ2pDRjtRQUNILE1BQU11QixVQUFVdkIsaUJBQWlCLElBQUk7UUFDckMsaUJBQWlCb0IsU0FBUyxlQUFlOztJQUU3Q2xCLFFBQVEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUs7SUFDckNBLFFBQVEsR0FBRyxDQUNQLElBQUlkLCtDQUFlQSxDQUFDYyxTQUFTO1FBQUUsT0FBTztZQUFDO1lBQU07WUFBTTtZQUFNO1NBQUU7UUFBRSxPQUFPO0lBQUUsSUFDdEVrQixVQUNBLGtFQUFrRTtJQUNsRSxJQUFJN0IsK0NBQWVBLENBQUNXLFNBQVM7UUFDekIsT0FBTztRQUNQLE1BQU07UUFDTixPQUFPO1FBQ1AsVUFBVTtZQUNOLElBQUlaLGdEQUFnQkEsQ0FBQ1ksU0FBUztnQkFDMUIsU0FBU2tCLFNBQVMsYUFBYTtnQkFDL0IsU0FBUztvQkFBQ0M7b0JBQVVDO2lCQUFLO2dCQUN6QixPQUFPO1lBQ1g7U0FDSDtJQUNMO0lBRUpwQixRQUFRLEtBQUs7SUFDYixPQUFPO0lBQ1AsT0FBT29CO0FBQ1g7QUFFZSxTQUFTRTtJQUNwQixJQUFNQyxXQUFXNUIsdUNBQVksQ0FBZTtJQUM1QyxJQUFnQzZCLG1DQUFBQSx5Q0FBYyxDQUFXMUIsdUJBQWxEMkIsV0FBeUJELG9CQUFmRSxjQUFlRjtJQUNoQyxJQUFNRyxTQUFTLGdCQUFDQztRQUNaRixZQUFZLG1CQUFLRCxVQUFhRztRQUM5QixJQUFNQyxRQUFRTixTQUFTLE9BQU87UUFDOUIsSUFBSSxDQUFDTSxPQUFPO1FBRVpDLGNBQWNELE9BQU9EO0lBQ3pCO0lBQ0EscUJBQ0ksa0RBQUNoQyxnREFBSUE7UUFDRG1DLFNBQVMsU0FBVEEsUUFBVS9CLFNBQXFCQztZQUMzQnNCLFNBQVMsT0FBTyxHQUFHO2dCQUFFdkIsU0FBQUE7Z0JBQVMsTUFBTUQsS0FBS0MsU0FBU0M7WUFBUTtRQUM5RDtRQUNBLFFBQVE7WUFBRSxLQUFLO2dCQUFFLFFBQVFKLHdDQUFTQTtZQUFDO1FBQUU7UUFDckMsWUFBWTtZQUFFLGNBQWM7UUFBSztRQUNqQyxLQUFLO2tCQUNMLGdFQUFDSix3Q0FBU0E7WUFBQyxTQUFRO1lBQU8sZUFBYztZQUFTLEtBQUk7OzhCQUNqRCxrREFBQ0Esd0NBQVNBO29CQUFDLFNBQVE7b0JBQU8sZ0JBQWU7b0JBQWUsWUFBVztvQkFBUyxVQUFTO29CQUFPLEtBQUk7O3NDQUM1RixrREFBQ0YsOENBQWVBOzRCQUFDLE9BQU07NEJBQVMsT0FBT2tDLFNBQVMsTUFBTTs0QkFBRU8sVUFBVSxTQUFWQSxTQUFXQzt1Q0FBV04sT0FBTztvQ0FBRU0sUUFBQUE7Z0NBQU87Ozs7Ozs7c0NBQzlGLGtEQUFDMUMsOENBQWVBOzRCQUNaLE9BQU07NEJBQ04sT0FBT2tDLFNBQVMsUUFBUTs0QkFDeEJPLFVBQVUsU0FBVkEsU0FBV0U7dUNBQWFQLE9BQU87b0NBQUVPLFVBQUFBO2dDQUFTOzs7Ozs7O3NDQUU5QyxrREFBQzVDLDZDQUFjQTs0QkFBQyxPQUFNOzRCQUFPLE9BQU9tQyxTQUFTLElBQUk7NEJBQUVPLFVBQVUsU0FBVkEsU0FBV0c7dUNBQVNSLE9BQU87b0NBQUVRLE1BQUFBO2dDQUFLOzs7Ozs7O3NDQUNyRixrREFBQzNDLDBDQUFXQTs0QkFBQyxPQUFPaUMsU0FBUyxLQUFLOzRCQUFFTyxVQUFVLFNBQVZBLFNBQVdJO3VDQUFVVCxPQUFPO29DQUFFUyxPQUFBQTtnQ0FBTTs7OzhDQUNwRSxrREFBQzs4Q0FBbUI7bUNBQVg7Ozs7OzhDQUNULGtEQUFDOzhDQUFpQjttQ0FBVDs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR2pCLGtEQUFDM0Msd0NBQVNBO29CQUFDLFNBQVE7b0JBQU8sZ0JBQWU7b0JBQWUsWUFBVztvQkFBUyxVQUFTO29CQUFPLEtBQUk7O3NDQUM1RixrREFBQ0YsOENBQWVBOzRCQUFDLE9BQU07NEJBQVEsT0FBT2tDLFNBQVMsS0FBSzs0QkFBRU8sVUFBVSxTQUFWQSxTQUFXSzt1Q0FBVVYsT0FBTztvQ0FBRVUsT0FBQUE7Z0NBQU07Ozs7Ozs7c0NBQzFGLGtEQUFDOUMsOENBQWVBOzRCQUFDLE9BQU07NEJBQVMsT0FBT2tDLFNBQVMsTUFBTTs0QkFBRU8sVUFBVSxTQUFWQSxTQUFXTTt1Q0FBV1gsT0FBTztvQ0FBRVcsUUFBQUE7Z0NBQU87Ozs7Ozs7c0NBQzlGLGtEQUFDL0MsOENBQWVBOzRCQUNaLE9BQU07NEJBQ04sT0FBT2tDLFNBQVMsT0FBTzs0QkFDdkJPLFVBQVUsU0FBVkEsU0FBV087dUNBQVlaLE9BQU87b0NBQUVZLFNBQUFBO2dDQUFROzs7Ozs7O3NDQUU1QyxrREFBQ2hELDhDQUFlQTs0QkFDWixPQUFNOzRCQUNOLE9BQU9rQyxTQUFTLFNBQVM7NEJBQ3pCTyxVQUFVLFNBQVZBLFNBQVdRO3VDQUFjYixPQUFPO29DQUFFYSxXQUFBQTtnQ0FBVTs7Ozs7OztzQ0FFaEQsa0RBQUNqRCw4Q0FBZUE7NEJBQUMsT0FBTTs0QkFBTyxPQUFPa0MsU0FBUyxJQUFJOzRCQUFFTyxVQUFVLFNBQVZBLFNBQVdTO3VDQUFTZCxPQUFPO29DQUFFYyxNQUFBQTtnQ0FBSzs7Ozs7Ozs7Ozs7Ozs4QkFFMUYsa0RBQUNoRCx3Q0FBU0E7b0JBQUMsU0FBUTtvQkFBTyxnQkFBZTtvQkFBZSxZQUFXO29CQUFTLFVBQVM7b0JBQU8sS0FBSTs7c0NBQzVGLGtEQUFDRCwwQ0FBV0E7NEJBQ1IsT0FBT2lDLFNBQVMsZ0JBQWdCOzRCQUNoQ08sVUFBVSxTQUFWQSxTQUFXVTt1Q0FBcUJmLE9BQU87b0NBQUVlLGtCQUFBQTtnQ0FBaUI7Ozs4Q0FDMUQsa0RBQUM7OENBQWtCO21DQUFWOzs7Ozs4Q0FDVCxrREFBQzs4Q0FBaUI7bUNBQVQ7Ozs7Ozs7Ozs7O3NDQUViLGtEQUFDaEQseUNBQVVBOzRCQUFDLE9BQU8rQixTQUFTLEdBQUc7NEJBQUVPLFVBQVUsU0FBVkEsU0FBV1c7dUNBQVFoQixPQUFPO29DQUFFZ0IsS0FBQUE7Z0NBQUk7O3NDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96RjtBQUVBLHlCQUF5QjtBQUN6Qjs7O0NBR0MsR0FDRCxTQUFTYixjQUFjYyxLQUF3QixFQUFFaEIsT0FBMEI7UUFBbEQ1QixVQUFGNEMsTUFBRTVDLFNBQVNvQixPQUFYd0IsTUFBV3hCO0lBQzlCLElBQVFlLE9BQW9CUCxRQUFwQk8sTUFBU1Usb0NBQVdqQjs7O0lBQzVCa0IsT0FBTyxNQUFNLENBQUMxQixNQUFNeUI7SUFDcEIsSUFBSVYsU0FBU2xCLFdBQVdHLEtBQUssSUFBSSxHQUFHQyxVQUFVYztJQUM5Q25DLFFBQVEsS0FBSztBQUNqQjtBQUNBLE9BQU87QUFFUCxxQkFBcUI7QUFDckIsU0FBU3FCLFVBQVVjLElBQVk7SUFDM0IsSUFBTVksUUFBUSxJQUFJakUsd0NBQVFBLENBQUNxRDtJQUMzQixPQUFPO1FBQUNZLE1BQU0sQ0FBQztRQUFFQSxNQUFNLENBQUM7UUFBRUEsTUFBTSxDQUFDO0tBQUM7QUFDdEMsRUFDQSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BNUDs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1HLFFBQVE7SUFDVixzQkFDSTtJQUNKLG1CQUNJO0lBQ0osZUFDSTtBQUNSO0FBQ0EsSUFBTUMsT0FDRjtBQUVXLFNBQVNDO0lBQ3BCLElBQXdCNUIsbUNBQUFBLHlDQUFjLENBQUMsWUFBaEM2QixPQUFpQjdCLG9CQUFYOEIsVUFBVzlCO0lBQ3hCLHFCQUNJOzswQkFDSSxrREFBQztnQkFBSSxXQUFVOzBCQUNYLGdFQUFDRixzQ0FBSUE7Ozs7Ozs7Ozs7MEJBRVQsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUMwQix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV08sU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ2xEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR3RDLGtEQUFDSix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPSSxPQUFPRixPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFJaEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRWQ7Ozs7Ozs7Ozs7Ozs7MEJBRUg7Ozs7Ozs7Ozs7Ozs7OzBCQUlHOzs7Ozs7Ozs7b0JBRUg7b0JBQUE7a0NBQXFGOzs7Ozs7b0JBQWU7b0JBQUE7a0NBQzlFOzs7Ozs7b0JBQVU7aUJBQUE7Ozs7Ozs7Ozs7Ozs7MENBRTVCOzs7Ozs7NEJBQVE7NEJBQUE7MENBQVc7Ozs7Ozs0QkFBTTs0QkFBQTswQ0FDeUI7Ozs7Ozs0QkFBUTt5QkFBQTs7Ozs7Ozs7OzswQ0FDMUQ7Ozs7Ozs0QkFBVTs0QkFBQTswQ0FBVzs7Ozs7OzRCQUFHOzRCQUFBOzBDQUEyQjs7Ozs7OzRCQUFHO3lCQUFBOzs7Ozs7Ozs7OzBDQUN0RDs7Ozs7OzRCQUFNO3lCQUFBOzs7Ozs7Ozs7OzBDQUNOOzs7Ozs7NEJBQW1COzRCQUFBOzBDQUFFOzs7Ozs7NEJBQU87NEJBQUE7MENBQVc7Ozs7Ozs0QkFBWTs0QkFBQTswQ0FDckQ7Ozs7Ozs0QkFBWTs0QkFBQTswQ0FBVTs7Ozs7OzRCQUFjOzRCQUFBOzBDQUFHOzs7Ozs7NEJBQVU7NEJBQUE7MENBQU87Ozs7Ozs0QkFBOEI7eUJBQUE7Ozs7Ozs7Ozs7MENBQ3BGOzs7Ozs7NEJBQU87NEJBQUE7MENBQVc7Ozs7Ozs0QkFBSzt5QkFBQTs7Ozs7Ozs7OzswQ0FFdkI7Ozs7Ozs0QkFBUTs0QkFBQTswQ0FBVzs7Ozs7OzRCQUFHO3lCQUFBOzs7Ozs7Ozs7OzBDQUV0Qjs7Ozs7OzRCQUFTOzRCQUFBOzBDQUFXOzs7Ozs7NEJBQUs7NEJBQUE7MENBQzNCOzs7Ozs7NEJBQUc7NEJBQUE7MENBQStDOzs7Ozs7NEJBQUc7eUJBQUE7Ozs7Ozs7Ozs7MENBRW5EOzs7Ozs7NEJBQVc7NEJBQUE7MENBQVc7Ozs7Ozs0QkFBRzt5QkFBQTs7Ozs7Ozs7OzswQ0FDekI7Ozs7Ozs0QkFBTTs0QkFBQTswQ0FBVzs7Ozs7OzRCQUFLOzRCQUFBOzBDQUN4Qjs7Ozs7OzRCQUFHOzRCQUFBOzBDQUF5Qzs7Ozs7OzRCQUFXOzRCQUFBOzBDQUFJOzs7Ozs7NEJBQUc7eUJBQUE7Ozs7Ozs7Ozs7MENBQzVEOzs7Ozs7NEJBQWtCOzRCQUFBOzBDQUFFOzs7Ozs7NEJBQWtCOzRCQUFBOzBDQUFXOzs7Ozs7NEJBQVc7NEJBQUE7MENBQzlEOzs7Ozs7NEJBQVc7NEJBQUE7MENBQXFDOzs7Ozs7NEJBQVU7eUJBQUE7Ozs7Ozs7Ozs7MENBRXhEOzs7Ozs7NEJBQUs7NEJBQUE7MENBQVc7Ozs7Ozs0QkFBTzs0QkFBQTswQ0FDWjs7Ozs7OzRCQUF3Qjt5QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRXZDOzs7Ozs7b0JBQVE7b0JBQUE7a0NBQUU7Ozs7OztvQkFBa0I7b0JBQUE7a0NBQUs7Ozs7OztvQkFBSztpQkFBQTs7Ozs7Ozs7MEJBRW5DOzs7Ozs7Ozs7b0JBRUg7b0JBQUE7a0NBQW9COzs7Ozs7b0JBQWlCO29CQUFBO2tDQUFXOzs7Ozs7b0JBQWlCO29CQUFBOztrQ0FDaEU7Ozs7OztvQkFBK0Q7b0JBQUE7a0NBQ1E7Ozs7OztvQkFBZ0I7aUJBQUE7Ozs7Ozs7Ozs7Ozs0QkFFckY7NEJBQUE7MENBQWlCOzs7Ozs7NEJBQU87NEJBQUE7MENBQ3lCOzs7Ozs7NEJBQVc7NEJBQUE7MENBQWdDOzs7Ozs7NEJBQU07eUJBQUE7Ozs7Ozs7Ozs0QkFDbEc7NEJBQUE7MENBQWM7Ozs7Ozs0QkFBWTs0QkFBQTswQ0FDTTs7Ozs7OzRCQUFrQjs0QkFBQTswQ0FBSTs7Ozs7OzRCQUFXOzRCQUFBOzBDQUM5RDs7Ozs7OzRCQUFVO3lCQUFBOzs7Ozs7Ozs7NEJBQ2I7NEJBQUE7MENBQTJFOzs7Ozs7NEJBQXVCOzRCQUFBOzBDQUMxRTs7Ozs7OzRCQUFTO3lCQUFBOzs7Ozs7Ozs7Ozs7Ozs7O29CQUVwQztvQkFBQTtrQ0FBK0I7Ozs7OztvQkFBVTtvQkFBQTtrQ0FBSzs7Ozs7O29CQUFNO29CQUFBO2tDQUFpRDs7Ozs7O29CQUFPO29CQUFBO2tDQUM1Rzs7Ozs7O29CQUFZO29CQUFBO2tDQUFFOzs7Ozs7b0JBQWM7b0JBQUE7a0NBQUs7Ozs7OztvQkFBVTtvQkFBQTtrQ0FBRTs7Ozs7O29CQUE4QjtpQkFBQTs7Ozs7Ozs7OztrQ0FFM0U7Ozs7OztvQkFBUTtvQkFBQTtrQ0FDbUI7Ozs7OztvQkFBUTtvQkFBQTtrQ0FBYTs7Ozs7O29CQUFRO2lCQUFBOzs7Ozs7Ozs7b0JBRXhEO29CQUFBO2tDQUFLOzs7Ozs7b0JBQVc7aUJBQUE7Ozs7Ozs7OztvQkFFaEI7b0JBQUE7a0NBQ1M7Ozs7OztvQkFBUTtvQkFBQTtrQ0FBRTs7Ozs7O29CQUFLO29CQUFBO2tDQUFFOzs7Ozs7b0JBQWtCO29CQUFBO2tDQUFJOzs7Ozs7b0JBQWlCO2lCQUFBOzs7Ozs7Ozs7b0JBRWpFO29CQUFBO2tDQUF1Qjs7Ozs7O29CQUFrQjtvQkFBQTs7a0NBQ3hDOzs7Ozs7b0JBQXVFO2lCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUl2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVEO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFlBQVksb0NBQW9DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseUJBQXlCO0FBQ3BDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4QkFBOEI7QUFDNUM7QUFDQSxjQUFjLDhEQUE4RDtBQUM1RTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7O0FBRXlCOztBQUV6QixXQUFXLHlCQUF5QjtBQUNwQzs7QUFFQSxtQkFBbUIsb0NBQW1COztBQUV0QztBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUE4RDtBQUN6RTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCw0QkFBNEIsaUNBQWdCOztBQUU1QztBQUNBLFNBQVMsOEJBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLGFBQWE7QUFDYjtBQUNBLGVBQWU7QUFDZjtBQUNPO0FBQ1AsYUFBYSx5QkFBeUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFNBQVMsb0NBQW1CO0FBQzVCO0FBQ0EsS0FBSyxxQkFBcUI7QUFDMUI7QUFDQTtBQUNBIn0=