"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_ambient-occlusion-screen-space_page_mdx-src_components_demo_CodeView-60cd3a"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
89298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var _assets_mesh_suzanne_glb__rspack_import_5 = __webpack_require__(21278);
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






/** Space between the plane and the objects. */ var GAP = 0.05;
function init(context, assets, refRefs, settings) {
    // #begin Initializing WebGL
    var root = new _tolokoban_tgd__rspack_import_1.TgdPainterGroup();
    context.add(root);
    refRefs.current = buildScene(context, assets, root, settings);
    context.camera.near = 0.1;
    context.camera.far = 50;
    context.camera.transfo.orientation = new _tolokoban_tgd__rspack_import_1.TgdTransfo({
        position: [
            3,
            4,
            5
        ]
    }).lookAt([
        0,
        0,
        0
    ]).orientation;
    context.camera.fitSpaceAtTarget(6, 6);
    context.play();
// #end
}
function Demo() {
    var refContext = react__rspack_import_3_default().useRef(null);
    var refRefs = react__rspack_import_3_default().useRef(null);
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState("both"), 2), mode = _React_useState[0], setMode = _React_useState[1];
    var _React_useState1 = _sliced_to_array(react__rspack_import_3_default().useState("1"), 2), scale = _React_useState1[0], setScale = _React_useState1[1];
    var _React_useState2 = _sliced_to_array(react__rspack_import_3_default().useState(2), 2), blur = _React_useState2[0], setBlur = _React_useState2[1];
    var _React_useState3 = _sliced_to_array(react__rspack_import_3_default().useState(0.5), 2), radius = _React_useState3[0], setRadius = _React_useState3[1];
    // Same default as TgdPainterAmbientOcclusionScreenSpace.
    var _React_useState4 = _sliced_to_array(react__rspack_import_3_default().useState("medium"), 2), quality = _React_useState4[0], setQuality = _React_useState4[1];
    var handleModeChange = function handleModeChange(value) {
        setMode(value);
        var context = refContext.current;
        var refs = refRefs.current;
        if (!context || !refs) return;
        activateGroups(refs, value, blur);
        context.paint();
    };
    var handleBlurChange = function handleBlurChange(value) {
        setBlur(value);
        var context = refContext.current;
        var refs = refRefs.current;
        if (!context || !refs) return;
        // The size of the blur is baked in the shader: we need new filters.
        refRefs.current = rebuildScene(context, refs, {
            mode: mode,
            scale: scale,
            blur: value,
            radius: radius,
            quality: quality
        });
        context.paint();
    };
    var handleRadiusChange = function handleRadiusChange(value) {
        setRadius(value);
        var context = refContext.current;
        var refs = refRefs.current;
        if (!context || !refs) return;
        refs.ao.radius = value;
        context.paint();
    };
    var handleScaleChange = function handleScaleChange(value) {
        setScale(value);
        var context = refContext.current;
        var refs = refRefs.current;
        if (!context || !refs) return;
        applyScale(refs, value);
        context.paint();
    };
    var handleQualityChange = function handleQualityChange(value) {
        setQuality(value);
        var context = refContext.current;
        var refs = refRefs.current;
        if (!context || !refs) return;
        // The number of samples is baked in the shader: we need a new painter.
        refRefs.current = rebuildScene(context, refs, {
            mode: mode,
            scale: scale,
            blur: blur,
            radius: radius,
            quality: value
        });
        context.paint();
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_4["default"], {
        onReady: function onReady(context, assets) {
            refContext.current = context;
            init(context, assets, refRefs, {
                mode: mode,
                scale: scale,
                blur: blur,
                radius: radius,
                quality: quality
            });
        },
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_5
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
            gap: "S",
            width: "640px",
            maxWidth: "100%",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewOptions, {
                    value: mode,
                    onChange: handleModeChange,
                    label: "View",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "scene"
                        }, "scene", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                            lineNumber: 147,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "textureAO"
                        }, "ao", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                            lineNumber: 148,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "both"
                        }, "both", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                            lineNumber: 149,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                    lineNumber: 146,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewOptions, {
                    label: "quality",
                    value: quality,
                    onChange: handleQualityChange,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "low"
                        }, "low", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                            lineNumber: 152,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "medium"
                        }, "medium", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                            lineNumber: 153,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "high"
                        }, "high", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                            lineNumber: 154,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                    lineNumber: 151,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewOptions, {
                    label: "viewportMatchingScale",
                    value: scale,
                    onChange: handleScaleChange,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "2"
                        }, "2", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "1"
                        }, "1", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                            lineNumber: 158,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "1/2"
                        }, "0.5", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                            lineNumber: 159,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "1/4"
                        }, "0.25", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                            lineNumber: 160,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                    lineNumber: 156,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                    style: {
                        display: "flex",
                        gap: "1em",
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSlider, {
                            value: blur,
                            onChange: handleBlurChange,
                            min: 0,
                            max: 32,
                            step: 1,
                            text: function text(value) {
                                return "blur: ".concat(value);
                            },
                            wide: true
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                            lineNumber: 163,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSlider, {
                            value: radius,
                            onChange: handleRadiusChange,
                            min: 0,
                            max: 5,
                            step: 0.1,
                            text: function text(value) {
                                return "radius: ".concat(value.toFixed(1));
                            },
                            wide: true
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                            lineNumber: 172,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
                    lineNumber: 162,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
            lineNumber: 138,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/ambient-occlusion-screen-space.demo.tsx",
        lineNumber: 130,
        columnNumber: 9
    }, this);
}
// #begin buildScene()
/**
 * Create all the painters of the scene and add them to `root`.
 */ function buildScene(context, assets, root, param) {
    var mode = param.mode, scale = param.scale, blur = param.blur, radius = param.radius, quality = param.quality;
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color: "rgb(255, 215, 175)",
        ambient: new _tolokoban_tgd__rspack_import_1.TgdLight({
            color: [
                0.5,
                0.5,
                0.5,
                1
            ]
        })
    });
    // The plane lies at y = 0, facing +Y.
    var plane = {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPlane({
            sizeX: 12,
            sizeY: 12,
            vecX: [
                1,
                0,
                0
            ],
            vecY: [
                0,
                0,
                -1
            ]
        }),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo(),
        visible: true,
        material: material
    };
    var suzanneGeometry = assets.glb.suzanne.makeGeometry();
    var _suzanneGeometry_computeBoundingBox_min = _sliced_to_array(suzanneGeometry.computeBoundingBox().min, 2), suzanneMinY = _suzanneGeometry_computeBoundingBox_min[1];
    var suzanne = {
        geometry: suzanneGeometry,
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: [
                0,
                GAP - suzanneMinY,
                0
            ],
            scale: [
                1.2,
                1,
                1.2
            ]
        }),
        visible: true,
        material: material
    };
    var cubes = [
        makeCube(material, [
            -2.5,
            0,
            -1
        ], 0.3),
        makeCube(material, [
            2.2,
            0,
            -1.5
        ], -0.5),
        makeCube(material, [
            -1.5,
            0,
            2
        ], 0.9),
        makeCube(material, [
            2,
            0,
            1.8
        ], 0),
        makeCube(material, [
            0,
            0,
            -3
        ], 0.2)
    ];
    var meshes = [
        plane,
        suzanne
    ].concat(_to_consumable_array(cubes));
    var deferred = new _tolokoban_tgd__rspack_import_1.TgdPainterDeferredShading(context, {
        meshes: meshes
    });
    var ao = new _tolokoban_tgd__rspack_import_1.TgdPainterAmbientOcclusionScreenSpace(context, {
        textureNormals: deferred.textureNormals,
        textureDepth: deferred.textureDepth,
        quality: quality,
        radius: radius,
        bias: 0.02,
        viewportMatchingScale: 1
    });
    // The scene is rendered into a texture, to be combined with textureAO later.
    var textureScene = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context);
    var framebuffer = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        textureColor0: textureScene,
        depthBuffer: true,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
                color: [
                    0.1,
                    0.22,
                    0.3,
                    1
                ],
                depth: 1
            }),
            new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
                depth: "lessOrEqual",
                cull: "back",
                blend: "off",
                children: [
                    new _tolokoban_tgd__rspack_import_1.TgdPainterMeshes(context, {
                        meshes: meshes
                    })
                ]
            })
        ]
    });
    // textureAO has a single channel (R32F): we display it in shades of grey.
    var filterGrey = new _tolokoban_tgd__rspack_import_1.TgdFilter({
        fragmentShaderCode: [
            "float ao = texture(uniTexture, varUV).r;",
            "FragColor = vec4(vec3(ao), 1.0);"
        ]
    });
    // Apply the ambient occlusion to the scene by multiplying the colors.
    var filterBoth = new _tolokoban_tgd__rspack_import_1.TgdFilter({
        textures: {
            uniTextureAO: ao.textureAO
        },
        fragmentShaderCode: [
            "vec4 color = texture(uniTexture, varUV);",
            "float ao = texture(uniTextureAO, varUV).r;",
            "FragColor = vec4(color.rgb * ao, color.a);"
        ]
    });
    var groups = {
        scene: new _tolokoban_tgd__rspack_import_1.TgdPainterGroup([
            new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
                texture: textureScene,
                flipY: true
            })
        ]),
        ao: new _tolokoban_tgd__rspack_import_1.TgdPainterGroup([
            new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
                texture: ao.textureAO,
                filters: [
                    filterGrey
                ],
                flipY: true
            })
        ]),
        both: new _tolokoban_tgd__rspack_import_1.TgdPainterGroup([
            new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
                texture: textureScene,
                filters: [
                    filterBoth
                ],
                flipY: true
            })
        ])
    };
    // textureAO uses R32F with NEAREST filtering, but the blur relies on bilinear interpolation.
    // So we copy it into a RGBA8 texture with LINEAR filtering first.
    var textureAOLinear = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        params: {
            magFilter: "LINEAR",
            minFilter: "LINEAR",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE"
        }
    });
    var copy = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        textureColor0: textureAOLinear,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
                texture: ao.textureAO,
                flipY: true
            })
        ]
    });
    // Horizontal and vertical blurs.
    var blurs = _tolokoban_tgd__rspack_import_1.TgdFilterBlur.createPair({
        size: blur
    });
    // Here, uniTexture is the blurred textureAO.
    var filterBothBlur = new _tolokoban_tgd__rspack_import_1.TgdFilter({
        textures: {
            uniTextureScene: textureScene
        },
        fragmentShaderCode: [
            "vec4 color = texture(uniTextureScene, varUV);",
            "float ao = texture(uniTexture, varUV).r;",
            "FragColor = vec4(color.rgb * ao, color.a);"
        ]
    });
    var groupsBlur = {
        scene: groups.scene,
        ao: new _tolokoban_tgd__rspack_import_1.TgdPainterGroup([
            new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
                texture: textureAOLinear,
                filters: _to_consumable_array(blurs).concat([
                    filterGrey
                ]),
                flipY: true
            })
        ]),
        both: new _tolokoban_tgd__rspack_import_1.TgdPainterGroup([
            new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
                texture: textureAOLinear,
                filters: _to_consumable_array(blurs).concat([
                    filterBothBlur
                ]),
                flipY: true
            })
        ])
    };
    var refs = {
        assets: assets,
        root: root,
        textures: [
            textureScene,
            textureAOLinear
        ],
        groups: groups,
        groupsBlur: groupsBlur,
        copy: copy,
        blurs: blurs,
        ao: ao
    };
    // Start with the initial values of the UI controls.
    activateGroups(refs, mode, blur);
    applyScale(refs, scale);
    root.add(// Must come first: the meshes have to move before being painted.
    makeBounce(suzanne), deferred, ao, framebuffer, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "off",
        cull: "off",
        blend: "off",
        children: [
            copy,
            groups.scene,
            groups.ao,
            groups.both,
            groupsBlur.ao,
            groupsBlur.both
        ]
    }));
    return refs;
}
// #end
// #begin rebuildScene()
/**
 * Release all the GPU resources of the scene, and build it again.
 */ function rebuildScene(context, param, settings) {
    var assets = param.assets, root = param.root, textures = param.textures;
    // Deletes the painters too.
    root.removeAll();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = textures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var texture = _step.value;
            texture.delete();
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
    return buildScene(context, assets, root, settings);
}
// #end
// #begin activateGroups()
/**
 * Only the group of the current `mode` is active.
 * The copy of textureAO is only needed when we blur it (`blur > 0`).
 */ function activateGroups(param, mode, blur) {
    var groups = param.groups, groupsBlur = param.groupsBlur, copy = param.copy;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.keys(groups)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            groups[key].active = false;
            groupsBlur[key].active = false;
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
    ;
    (blur > 0 ? groupsBlur : groups)[mode].active = true;
    copy.active = blur > 0 && mode !== "scene";
}
// #end
// #begin applyScale()
function applyScale(param, scale) {
    var ao = param.ao, blurs = param.blurs;
    // textureAO will be resized on next paint.
    ao.viewportMatchingScale = Number(scale);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // The blur is applied at full resolution: we widen it to cover the same number of AO pixels.
        for(var _iterator = blurs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var filter = _step.value;
            filter.strength = 1 / Number(scale);
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
// #begin makeBounce()
/**
 * Suzanne bounces from her current Y to Y + 1, and back, in one second.
 */ function makeBounce(mesh) {
    var _mesh_transfo_position = _sliced_to_array(mesh.transfo.position, 3), x = _mesh_transfo_position[0], y = _mesh_transfo_position[1], z = _mesh_transfo_position[2];
    return function(time) {
        mesh.transfo.setPosition(x, y + Math.abs(Math.sin(Math.PI * time)), z);
    };
}
// #end
// #begin makeCube()
/**
 * A cube of size 1 floating `GAP` above the plane,
 * rotated by `angle` radians around the Y axis.
 */ function makeCube(material, param, angle) {
    var _param = _sliced_to_array(param, 3), x = _param[0], y = _param[1], z = _param[2];
    var transfo = new _tolokoban_tgd__rspack_import_1.TgdTransfo({
        position: [
            x,
            y + 0.5 + GAP,
            z
        ]
    });
    transfo.orbitAroundY(angle);
    return {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox(),
        transfo: transfo,
        visible: true,
        material: material
    };
} // #end


},
37413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _ambient_occlusion_screen_space_demo__rspack_import_4 = __webpack_require__(89298);
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
    "Initializing WebGL": "    const root = new TgdPainterGroup()\n    context.add(root)\n    refRefs.current = buildScene(context, assets, root, settings)\n    context.camera.near = 0.1\n    context.camera.far = 50\n    context.camera.transfo.orientation = new TgdTransfo({ position: [3, 4, 5] }).lookAt([0, 0, 0]).orientation\n    context.camera.fitSpaceAtTarget(6, 6)\n    context.play()",
    "buildScene()": "/**\n * Create all the painters of the scene and add them to `root`.\n */\nfunction buildScene(\n    context: TgdContext,\n    assets: Assets,\n    root: TgdPainterGroup,\n    { mode, scale, blur, radius, quality }: Settings,\n): Refs {\n    const material = new TgdMaterialDiffuse({\n        color: \"rgb(255, 215, 175)\",\n        ambient: new TgdLight({\n            color: [0.5, 0.5, 0.5, 1],\n        }),\n    })\n    // The plane lies at y = 0, facing +Y.\n    const plane: TgdMesh = {\n        geometry: new TgdGeometryPlane({ sizeX: 12, sizeY: 12, vecX: [1, 0, 0], vecY: [0, 0, -1] }),\n        transfo: new TgdTransfo(),\n        visible: true,\n        material,\n    }\n    const suzanneGeometry = assets.glb.suzanne.makeGeometry()\n    const [, suzanneMinY] = suzanneGeometry.computeBoundingBox().min\n    const suzanne: TgdMesh = {\n        geometry: suzanneGeometry,\n        transfo: new TgdTransfo({ position: [0, GAP - suzanneMinY, 0], scale: [1.2, 1, 1.2] }),\n        visible: true,\n        material,\n    }\n    const cubes = [\n        makeCube(material, [-2.5, 0, -1], 0.3),\n        makeCube(material, [2.2, 0, -1.5], -0.5),\n        makeCube(material, [-1.5, 0, 2], 0.9),\n        makeCube(material, [2, 0, 1.8], 0),\n        makeCube(material, [0, 0, -3], 0.2),\n    ]\n    const meshes = [plane, suzanne, ...cubes]\n    const deferred = new TgdPainterDeferredShading(context, { meshes })\n    const ao = new TgdPainterAmbientOcclusionScreenSpace(context, {\n        textureNormals: deferred.textureNormals,\n        textureDepth: deferred.textureDepth,\n        quality,\n        radius,\n        bias: 0.02,\n        viewportMatchingScale: 1,\n    })\n    // The scene is rendered into a texture, to be combined with textureAO later.\n    const textureScene = new TgdTexture2D(context)\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        textureColor0: textureScene,\n        depthBuffer: true,\n        children: [\n            new TgdPainterClear(context, { color: [0.1, 0.22, 0.3, 1], depth: 1 }),\n            new TgdPainterState(context, {\n                depth: \"lessOrEqual\",\n                cull: \"back\",\n                blend: \"off\",\n                children: [new TgdPainterMeshes(context, { meshes })],\n            }),\n        ],\n    })\n    // textureAO has a single channel (R32F): we display it in shades of grey.\n    const filterGrey = new TgdFilter({\n        fragmentShaderCode: [\"float ao = texture(uniTexture, varUV).r;\", \"FragColor = vec4(vec3(ao), 1.0);\"],\n    })\n    // Apply the ambient occlusion to the scene by multiplying the colors.\n    const filterBoth = new TgdFilter({\n        textures: { uniTextureAO: ao.textureAO },\n        fragmentShaderCode: [\n            \"vec4 color = texture(uniTexture, varUV);\",\n            \"float ao = texture(uniTextureAO, varUV).r;\",\n            \"FragColor = vec4(color.rgb * ao, color.a);\",\n        ],\n    })\n    const groups: Record<Mode, TgdPainterGroup> = {\n        scene: new TgdPainterGroup([new TgdPainterFilter(context, { texture: textureScene, flipY: true })]),\n        ao: new TgdPainterGroup([\n            new TgdPainterFilter(context, { texture: ao.textureAO, filters: [filterGrey], flipY: true }),\n        ]),\n        both: new TgdPainterGroup([\n            new TgdPainterFilter(context, { texture: textureScene, filters: [filterBoth], flipY: true }),\n        ]),\n    }\n    // textureAO uses R32F with NEAREST filtering, but the blur relies on bilinear interpolation.\n    // So we copy it into a RGBA8 texture with LINEAR filtering first.\n    const textureAOLinear = new TgdTexture2D(context, {\n        params: {\n            magFilter: \"LINEAR\",\n            minFilter: \"LINEAR\",\n            wrapS: \"CLAMP_TO_EDGE\",\n            wrapT: \"CLAMP_TO_EDGE\",\n        },\n    })\n    const copy = new TgdPainterFramebuffer(context, {\n        textureColor0: textureAOLinear,\n        children: [new TgdPainterFilter(context, { texture: ao.textureAO, flipY: true })],\n    })\n    // Horizontal and vertical blurs.\n    const blurs = TgdFilterBlur.createPair({ size: blur })\n    // Here, uniTexture is the blurred textureAO.\n    const filterBothBlur = new TgdFilter({\n        textures: { uniTextureScene: textureScene },\n        fragmentShaderCode: [\n            \"vec4 color = texture(uniTextureScene, varUV);\",\n            \"float ao = texture(uniTexture, varUV).r;\",\n            \"FragColor = vec4(color.rgb * ao, color.a);\",\n        ],\n    })\n    const groupsBlur: Record<Mode, TgdPainterGroup> = {\n        scene: groups.scene,\n        ao: new TgdPainterGroup([\n            new TgdPainterFilter(context, { texture: textureAOLinear, filters: [...blurs, filterGrey], flipY: true }),\n        ]),\n        both: new TgdPainterGroup([\n            new TgdPainterFilter(context, {\n                texture: textureAOLinear,\n                filters: [...blurs, filterBothBlur],\n                flipY: true,\n            }),\n        ]),\n    }\n    const refs: Refs = {\n        assets,\n        root,\n        textures: [textureScene, textureAOLinear],\n        groups,\n        groupsBlur,\n        copy,\n        blurs,\n        ao,\n    }\n    // Start with the initial values of the UI controls.\n    activateGroups(refs, mode, blur)\n    applyScale(refs, scale)\n    root.add(\n        // Must come first: the meshes have to move before being painted.\n        makeBounce(suzanne),\n        deferred,\n        ao,\n        framebuffer,\n        new TgdPainterState(context, {\n            depth: \"off\",\n            cull: \"off\",\n            blend: \"off\",\n            children: [copy, groups.scene, groups.ao, groups.both, groupsBlur.ao, groupsBlur.both],\n        }),\n    )\n    return refs\n}",
    "rebuildScene()": "/**\n * Release all the GPU resources of the scene, and build it again.\n */\nfunction rebuildScene(context: TgdContext, { assets, root, textures }: Refs, settings: Settings): Refs {\n    // Deletes the painters too.\n    root.removeAll()\n    for (const texture of textures) texture.delete()\n    return buildScene(context, assets, root, settings)\n}",
    "activateGroups()": "/**\n * Only the group of the current `mode` is active.\n * The copy of textureAO is only needed when we blur it (`blur > 0`).\n */\nfunction activateGroups({ groups, groupsBlur, copy }: Refs, mode: Mode, blur: number) {\n    for (const key of Object.keys(groups) as Mode[]) {\n        groups[key].active = false\n        groupsBlur[key].active = false\n    }\n    ;(blur > 0 ? groupsBlur : groups)[mode].active = true\n    copy.active = blur > 0 && mode !== \"scene\"\n}",
    "applyScale()": "function applyScale({ ao, blurs }: Refs, scale: Scale) {\n    // textureAO will be resized on next paint.\n    ao.viewportMatchingScale = Number(scale)\n    // The blur is applied at full resolution: we widen it to cover the same number of AO pixels.\n    for (const filter of blurs) filter.strength = 1 / Number(scale)\n}",
    "makeBounce()": "/**\n * Suzanne bounces from her current Y to Y + 1, and back, in one second.\n */\nfunction makeBounce(mesh: TgdMesh) {\n    const [x, y, z] = mesh.transfo.position\n    return (time: number) => {\n        mesh.transfo.setPosition(x, y + Math.abs(Math.sin(Math.PI * time)), z)\n    }\n}",
    "makeCube()": "/**\n * A cube of size 1 floating `GAP` above the plane,\n * rotated by `angle` radians around the Y axis.\n */\nfunction makeCube(material: TgdMaterialDiffuse, [x, y, z]: ArrayNumber3, angle: number): TgdMesh {\n    const transfo = new TgdTransfo({ position: [x, y + 0.5 + GAP, z] })\n    transfo.orbitAroundY(angle)\n    return {\n        geometry: new TgdGeometryBox(),\n        transfo,\n        visible: true,\n        material,\n    }\n}"
};
var FULL = "import {\n    type ArrayNumber3,\n    type TgdContext,\n    TgdFilter,\n    TgdFilterBlur,\n    TgdGeometryBox,\n    TgdGeometryPlane,\n    TgdLight,\n    TgdMaterialDiffuse,\n    type TgdMesh,\n    TgdPainterAmbientOcclusionScreenSpace,\n    TgdPainterClear,\n    TgdPainterDeferredShading,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterGroup,\n    TgdPainterMeshes,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdTransfo,\n} from \"@tolokoban/tgd\"\nimport { ViewOptions, ViewPanel, ViewSlider } from \"@tolokoban/ui\"\nimport React from \"react\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\n\ntype Mode = \"scene\" | \"ao\" | \"both\"\ntype Scale = \"1\" | \"0.5\" | \"0.25\" | \"0.125\"\ntype Quality = \"low\" | \"medium\" | \"high\"\n\n/** Current values of the UI controls. */\ninterface Settings {\n    mode: Mode\n    scale: Scale\n    /** Size of the blur applied to textureAO (0 means no blur). */\n    blur: number\n    radius: number\n    quality: Quality\n}\n\ninterface Refs {\n    assets: Assets\n    /** Holds the whole scene, so we can rebuild it when `quality` or `blur` changes. */\n    root: TgdPainterGroup\n    /** Textures that are not owned by any painter. */\n    textures: TgdTexture2D[]\n    /** One group per mode: only the one of the current mode is active. */\n    groups: Record<Mode, TgdPainterGroup>\n    /** Same as `groups`, but with a blurred textureAO. */\n    groupsBlur: Record<Mode, TgdPainterGroup>\n    /** Copy of textureAO into a texture that can be sampled with bilinear interpolation. */\n    copy: TgdPainterFramebuffer\n    blurs: TgdFilterBlur[]\n    ao: TgdPainterAmbientOcclusionScreenSpace\n}\n\n/** Space between the plane and the objects. */\nconst GAP = 0.05\n\nfunction init(context: TgdContext, assets: Assets, refRefs: { current: Refs | null }, settings: Settings) {\n    const root = new TgdPainterGroup()\n    context.add(root)\n    refRefs.current = buildScene(context, assets, root, settings)\n    context.camera.near = 0.1\n    context.camera.far = 50\n    context.camera.transfo.orientation = new TgdTransfo({ position: [3, 4, 5] }).lookAt([0, 0, 0]).orientation\n    context.camera.fitSpaceAtTarget(6, 6)\n    context.play()\n}\n\nexport default function Demo() {\n    const refContext = React.useRef<TgdContext | null>(null)\n    const refRefs = React.useRef<Refs | null>(null)\n    const [mode, setMode] = React.useState<Mode>(\"both\")\n    const [scale, setScale] = React.useState<Scale>(\"1\")\n    const [blur, setBlur] = React.useState(2)\n    const [radius, setRadius] = React.useState(0.5)\n    // Same default as TgdPainterAmbientOcclusionScreenSpace.\n    const [quality, setQuality] = React.useState<Quality>(\"medium\")\n    const handleModeChange = (value: Mode) => {\n        setMode(value)\n        const context = refContext.current\n        const refs = refRefs.current\n        if (!context || !refs) return\n\n        activateGroups(refs, value, blur)\n        context.paint()\n    }\n    const handleBlurChange = (value: number) => {\n        setBlur(value)\n        const context = refContext.current\n        const refs = refRefs.current\n        if (!context || !refs) return\n\n        // The size of the blur is baked in the shader: we need new filters.\n        refRefs.current = rebuildScene(context, refs, { mode, scale, blur: value, radius, quality })\n        context.paint()\n    }\n    const handleRadiusChange = (value: number) => {\n        setRadius(value)\n        const context = refContext.current\n        const refs = refRefs.current\n        if (!context || !refs) return\n\n        refs.ao.radius = value\n        context.paint()\n    }\n    const handleScaleChange = (value: Scale) => {\n        setScale(value)\n        const context = refContext.current\n        const refs = refRefs.current\n        if (!context || !refs) return\n\n        applyScale(refs, value)\n        context.paint()\n    }\n    const handleQualityChange = (value: Quality) => {\n        setQuality(value)\n        const context = refContext.current\n        const refs = refRefs.current\n        if (!context || !refs) return\n\n        // The number of samples is baked in the shader: we need a new painter.\n        refRefs.current = rebuildScene(context, refs, { mode, scale, blur, radius, quality: value })\n        context.paint()\n    }\n    return (\n        <View\n            onReady={(context: TgdContext, assets: Assets) => {\n                refContext.current = context\n                init(context, assets, refRefs, { mode, scale, blur, radius, quality })\n            }}\n            assets={{ glb: { suzanne: SuzanneURL } }}\n            controller={{ inertiaOrbit: 1000 }}\n            gizmo>\n            <ViewPanel\n                display=\"flex\"\n                justifyContent=\"space-around\"\n                alignItems=\"center\"\n                flexWrap=\"wrap\"\n                gap=\"S\"\n                width=\"640px\"\n                maxWidth=\"100%\">\n                <ViewOptions value={mode} onChange={handleModeChange} label=\"View\">\n                    <div key=\"scene\">scene</div>\n                    <div key=\"ao\">textureAO</div>\n                    <div key=\"both\">both</div>\n                </ViewOptions>\n                <ViewOptions label=\"quality\" value={quality} onChange={handleQualityChange}>\n                    <div key=\"low\">low</div>\n                    <div key=\"medium\">medium</div>\n                    <div key=\"high\">high</div>\n                </ViewOptions>\n                <ViewOptions label=\"viewportMatchingScale\" value={scale} onChange={handleScaleChange}>\n                    <div key=\"2\">2</div>\n                    <div key=\"1\">1</div>\n                    <div key=\"0.5\">1/2</div>\n                    <div key=\"0.25\">1/4</div>\n                </ViewOptions>\n                <div style={{ display: \"flex\", gap: \"1em\", width: \"100%\" }}>\n                    <ViewSlider\n                        value={blur}\n                        onChange={handleBlurChange}\n                        min={0}\n                        max={32}\n                        step={1}\n                        text={(value) => `blur: ${value}`}\n                        wide\n                    />\n                    <ViewSlider\n                        value={radius}\n                        onChange={handleRadiusChange}\n                        min={0}\n                        max={5}\n                        step={0.1}\n                        text={(value) => `radius: ${value.toFixed(1)}`}\n                        wide\n                    />\n                </div>\n            </ViewPanel>\n        </View>\n    )\n}\n\n/**\n * Create all the painters of the scene and add them to `root`.\n */\nfunction buildScene(\n    context: TgdContext,\n    assets: Assets,\n    root: TgdPainterGroup,\n    { mode, scale, blur, radius, quality }: Settings,\n): Refs {\n    const material = new TgdMaterialDiffuse({\n        color: \"rgb(255, 215, 175)\",\n        ambient: new TgdLight({\n            color: [0.5, 0.5, 0.5, 1],\n        }),\n    })\n    // The plane lies at y = 0, facing +Y.\n    const plane: TgdMesh = {\n        geometry: new TgdGeometryPlane({ sizeX: 12, sizeY: 12, vecX: [1, 0, 0], vecY: [0, 0, -1] }),\n        transfo: new TgdTransfo(),\n        visible: true,\n        material,\n    }\n    const suzanneGeometry = assets.glb.suzanne.makeGeometry()\n    const [, suzanneMinY] = suzanneGeometry.computeBoundingBox().min\n    const suzanne: TgdMesh = {\n        geometry: suzanneGeometry,\n        transfo: new TgdTransfo({ position: [0, GAP - suzanneMinY, 0], scale: [1.2, 1, 1.2] }),\n        visible: true,\n        material,\n    }\n    const cubes = [\n        makeCube(material, [-2.5, 0, -1], 0.3),\n        makeCube(material, [2.2, 0, -1.5], -0.5),\n        makeCube(material, [-1.5, 0, 2], 0.9),\n        makeCube(material, [2, 0, 1.8], 0),\n        makeCube(material, [0, 0, -3], 0.2),\n    ]\n    const meshes = [plane, suzanne, ...cubes]\n    const deferred = new TgdPainterDeferredShading(context, { meshes })\n    const ao = new TgdPainterAmbientOcclusionScreenSpace(context, {\n        textureNormals: deferred.textureNormals,\n        textureDepth: deferred.textureDepth,\n        quality,\n        radius,\n        bias: 0.02,\n        viewportMatchingScale: 1,\n    })\n    // The scene is rendered into a texture, to be combined with textureAO later.\n    const textureScene = new TgdTexture2D(context)\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        textureColor0: textureScene,\n        depthBuffer: true,\n        children: [\n            new TgdPainterClear(context, { color: [0.1, 0.22, 0.3, 1], depth: 1 }),\n            new TgdPainterState(context, {\n                depth: \"lessOrEqual\",\n                cull: \"back\",\n                blend: \"off\",\n                children: [new TgdPainterMeshes(context, { meshes })],\n            }),\n        ],\n    })\n    // textureAO has a single channel (R32F): we display it in shades of grey.\n    const filterGrey = new TgdFilter({\n        fragmentShaderCode: [\"float ao = texture(uniTexture, varUV).r;\", \"FragColor = vec4(vec3(ao), 1.0);\"],\n    })\n    // Apply the ambient occlusion to the scene by multiplying the colors.\n    const filterBoth = new TgdFilter({\n        textures: { uniTextureAO: ao.textureAO },\n        fragmentShaderCode: [\n            \"vec4 color = texture(uniTexture, varUV);\",\n            \"float ao = texture(uniTextureAO, varUV).r;\",\n            \"FragColor = vec4(color.rgb * ao, color.a);\",\n        ],\n    })\n    const groups: Record<Mode, TgdPainterGroup> = {\n        scene: new TgdPainterGroup([new TgdPainterFilter(context, { texture: textureScene, flipY: true })]),\n        ao: new TgdPainterGroup([\n            new TgdPainterFilter(context, { texture: ao.textureAO, filters: [filterGrey], flipY: true }),\n        ]),\n        both: new TgdPainterGroup([\n            new TgdPainterFilter(context, { texture: textureScene, filters: [filterBoth], flipY: true }),\n        ]),\n    }\n    // textureAO uses R32F with NEAREST filtering, but the blur relies on bilinear interpolation.\n    // So we copy it into a RGBA8 texture with LINEAR filtering first.\n    const textureAOLinear = new TgdTexture2D(context, {\n        params: {\n            magFilter: \"LINEAR\",\n            minFilter: \"LINEAR\",\n            wrapS: \"CLAMP_TO_EDGE\",\n            wrapT: \"CLAMP_TO_EDGE\",\n        },\n    })\n    const copy = new TgdPainterFramebuffer(context, {\n        textureColor0: textureAOLinear,\n        children: [new TgdPainterFilter(context, { texture: ao.textureAO, flipY: true })],\n    })\n    // Horizontal and vertical blurs.\n    const blurs = TgdFilterBlur.createPair({ size: blur })\n    // Here, uniTexture is the blurred textureAO.\n    const filterBothBlur = new TgdFilter({\n        textures: { uniTextureScene: textureScene },\n        fragmentShaderCode: [\n            \"vec4 color = texture(uniTextureScene, varUV);\",\n            \"float ao = texture(uniTexture, varUV).r;\",\n            \"FragColor = vec4(color.rgb * ao, color.a);\",\n        ],\n    })\n    const groupsBlur: Record<Mode, TgdPainterGroup> = {\n        scene: groups.scene,\n        ao: new TgdPainterGroup([\n            new TgdPainterFilter(context, { texture: textureAOLinear, filters: [...blurs, filterGrey], flipY: true }),\n        ]),\n        both: new TgdPainterGroup([\n            new TgdPainterFilter(context, {\n                texture: textureAOLinear,\n                filters: [...blurs, filterBothBlur],\n                flipY: true,\n            }),\n        ]),\n    }\n    const refs: Refs = {\n        assets,\n        root,\n        textures: [textureScene, textureAOLinear],\n        groups,\n        groupsBlur,\n        copy,\n        blurs,\n        ao,\n    }\n    // Start with the initial values of the UI controls.\n    activateGroups(refs, mode, blur)\n    applyScale(refs, scale)\n    root.add(\n        // Must come first: the meshes have to move before being painted.\n        makeBounce(suzanne),\n        deferred,\n        ao,\n        framebuffer,\n        new TgdPainterState(context, {\n            depth: \"off\",\n            cull: \"off\",\n            blend: \"off\",\n            children: [copy, groups.scene, groups.ao, groups.both, groupsBlur.ao, groupsBlur.both],\n        }),\n    )\n    return refs\n}\n\n/**\n * Release all the GPU resources of the scene, and build it again.\n */\nfunction rebuildScene(context: TgdContext, { assets, root, textures }: Refs, settings: Settings): Refs {\n    // Deletes the painters too.\n    root.removeAll()\n    for (const texture of textures) texture.delete()\n    return buildScene(context, assets, root, settings)\n}\n\n/**\n * Only the group of the current `mode` is active.\n * The copy of textureAO is only needed when we blur it (`blur > 0`).\n */\nfunction activateGroups({ groups, groupsBlur, copy }: Refs, mode: Mode, blur: number) {\n    for (const key of Object.keys(groups) as Mode[]) {\n        groups[key].active = false\n        groupsBlur[key].active = false\n    }\n    ;(blur > 0 ? groupsBlur : groups)[mode].active = true\n    copy.active = blur > 0 && mode !== \"scene\"\n}\n\nfunction applyScale({ ao, blurs }: Refs, scale: Scale) {\n    // textureAO will be resized on next paint.\n    ao.viewportMatchingScale = Number(scale)\n    // The blur is applied at full resolution: we widen it to cover the same number of AO pixels.\n    for (const filter of blurs) filter.strength = 1 / Number(scale)\n}\n\n/**\n * Suzanne bounces from her current Y to Y + 1, and back, in one second.\n */\nfunction makeBounce(mesh: TgdMesh) {\n    const [x, y, z] = mesh.transfo.position\n    return (time: number) => {\n        mesh.transfo.setPosition(x, y + Math.abs(Math.sin(Math.PI * time)), z)\n    }\n}\n\n/**\n * A cube of size 1 floating `GAP` above the plane,\n * rotated by `angle` radians around the Y axis.\n */\nfunction makeCube(material: TgdMaterialDiffuse, [x, y, z]: ArrayNumber3, angle: number): TgdMesh {\n    const transfo = new TgdTransfo({ position: [x, y + 0.5 + GAP, z] })\n    transfo.orbitAroundY(angle)\n    return {\n        geometry: new TgdGeometryBox(),\n        transfo,\n        visible: true,\n        material,\n    }\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_ambient_occlusion_screen_space_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/_ambient-occlusion-screen-space/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
84835(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _ambient_occlusion_screen_space__rspack_import_1 = __webpack_require__(37413);
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
        pre: "pre",
        span: "span",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterAmbientOcclusionScreenSpace.html",
                    children: "TgdPainterAmbientOcclusionScreenSpace"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Screen Space Ambient Occlusion (SSAO) computed from the normals and the depth\nof a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/painter/deferred-shading",
                        children: "TgdPainterDeferredShading"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                        lineNumber: 6,
                        columnNumber: 6
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_ambient_occlusion_screen_space__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "textureAO"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                                lineNumber: 10,
                                columnNumber: 3
                            }, this),
                            " (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "R32F"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                                lineNumber: 10,
                                columnNumber: 16
                            }, this),
                            ") holds the ambient light factor, from 0 (fully occluded) to 1 (not occluded).\nTexels where nothing has been painted hold 1."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "quality"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                                lineNumber: 12,
                                columnNumber: 3
                            }, this),
                            " sets the number of samples per pixel: 8 (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"low\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                                lineNumber: 12,
                                columnNumber: 54
                            }, this),
                            "), 16 (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"medium\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                                lineNumber: 12,
                                columnNumber: 68
                            }, this),
                            ") or 32 (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"high\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                                lineNumber: 12,
                                columnNumber: 87
                            }, this),
                            ")."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "radius"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                                lineNumber: 13,
                                columnNumber: 3
                            }, this),
                            " (default 0.5) is the size, in camera space units, of the hemisphere where we look for occluders,\nand ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "bias"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                                lineNumber: 14,
                                columnNumber: 7
                            }, this),
                            " (default 0.02) prevents a surface from occluding itself."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                        lineNumber: 13,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "viewportMatchingScale"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                                lineNumber: 15,
                                columnNumber: 3
                            }, this),
                            " (default 1) multiplies the size of the context to get the size of ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "textureAO"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                                lineNumber: 15,
                                columnNumber: 93
                            }, this),
                            ".\nUse 0.5 to compute four times fewer pixels."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "radius"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                                lineNumber: 17,
                                columnNumber: 3
                            }, this),
                            ", ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "bias"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            " and ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "viewportMatchingScale"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                                lineNumber: 17,
                                columnNumber: 24
                            }, this),
                            " can be set in the options, and changed at any time."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "No blur is applied: each pixel rotates the samples by a different angle, so the result is noisy.\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "textureAO"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                        lineNumber: 20,
                        columnNumber: 1
                    }, this),
                    " has a single channel, so the demo displays it in shades of grey with a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterFilter"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                        lineNumber: 20,
                        columnNumber: 84
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                lineNumber: 19,
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
                        }, this),
                        " deferred = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterDeferredShading"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
                        }, this),
                        "(context, { meshes })\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
                        }, this),
                        " ao = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterAmbientOcclusionScreenSpace"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
                        }, this),
                        "(context, {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "textureNormals"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
                        }, this),
                        ": deferred.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "textureNormals"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
                        }, this),
                        ",\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "textureDepth"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
                        }, this),
                        ": deferred.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "textureDepth"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
                        }, this),
                        ",\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "quality"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"medium\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
                        }, this),
                        ",\n})\ncontext.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
                        }, this),
                        "(deferred, ao)\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                    lineNumber: 22,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                lineNumber: 22,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                lineNumber: 32,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                    lineNumber: 34,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
                lineNumber: 34,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/ambient-occlusion-screen-space/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9hbWJpZW50LW9jY2x1c2lvbi1zY3JlZW4tc3BhY2VfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlldy02MGNkM2EuMTljN2EzOTdhODgxOWU5Yi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2FtYmllbnQtb2NjbHVzaW9uLXNjcmVlbi1zcGFjZS9fYW1iaWVudC1vY2NsdXNpb24tc2NyZWVuLXNwYWNlL2FtYmllbnQtb2NjbHVzaW9uLXNjcmVlbi1zcGFjZS5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9hbWJpZW50LW9jY2x1c2lvbi1zY3JlZW4tc3BhY2UvX2FtYmllbnQtb2NjbHVzaW9uLXNjcmVlbi1zcGFjZS9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvYW1iaWVudC1vY2NsdXNpb24tc2NyZWVuLXNwYWNlL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgdHlwZSBBcnJheU51bWJlcjMsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZEZpbHRlcixcbiAgICBUZ2RGaWx0ZXJCbHVyLFxuICAgIFRnZEdlb21ldHJ5Qm94LFxuICAgIFRnZEdlb21ldHJ5UGxhbmUsXG4gICAgVGdkTGlnaHQsXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxuICAgIHR5cGUgVGdkTWVzaCxcbiAgICBUZ2RQYWludGVyQW1iaWVudE9jY2x1c2lvblNjcmVlblNwYWNlLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nLFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyLFxuICAgIFRnZFBhaW50ZXJHcm91cCxcbiAgICBUZ2RQYWludGVyTWVzaGVzLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgVGdkVHJhbnNmbyxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IFZpZXdPcHRpb25zLCBWaWV3UGFuZWwsIFZpZXdTbGlkZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5cbnR5cGUgTW9kZSA9IFwic2NlbmVcIiB8IFwiYW9cIiB8IFwiYm90aFwiXG50eXBlIFNjYWxlID0gXCIxXCIgfCBcIjAuNVwiIHwgXCIwLjI1XCIgfCBcIjAuMTI1XCJcbnR5cGUgUXVhbGl0eSA9IFwibG93XCIgfCBcIm1lZGl1bVwiIHwgXCJoaWdoXCJcblxuLyoqIEN1cnJlbnQgdmFsdWVzIG9mIHRoZSBVSSBjb250cm9scy4gKi9cbmludGVyZmFjZSBTZXR0aW5ncyB7XG4gICAgbW9kZTogTW9kZVxuICAgIHNjYWxlOiBTY2FsZVxuICAgIC8qKiBTaXplIG9mIHRoZSBibHVyIGFwcGxpZWQgdG8gdGV4dHVyZUFPICgwIG1lYW5zIG5vIGJsdXIpLiAqL1xuICAgIGJsdXI6IG51bWJlclxuICAgIHJhZGl1czogbnVtYmVyXG4gICAgcXVhbGl0eTogUXVhbGl0eVxufVxuXG5pbnRlcmZhY2UgUmVmcyB7XG4gICAgYXNzZXRzOiBBc3NldHNcbiAgICAvKiogSG9sZHMgdGhlIHdob2xlIHNjZW5lLCBzbyB3ZSBjYW4gcmVidWlsZCBpdCB3aGVuIGBxdWFsaXR5YCBvciBgYmx1cmAgY2hhbmdlcy4gKi9cbiAgICByb290OiBUZ2RQYWludGVyR3JvdXBcbiAgICAvKiogVGV4dHVyZXMgdGhhdCBhcmUgbm90IG93bmVkIGJ5IGFueSBwYWludGVyLiAqL1xuICAgIHRleHR1cmVzOiBUZ2RUZXh0dXJlMkRbXVxuICAgIC8qKiBPbmUgZ3JvdXAgcGVyIG1vZGU6IG9ubHkgdGhlIG9uZSBvZiB0aGUgY3VycmVudCBtb2RlIGlzIGFjdGl2ZS4gKi9cbiAgICBncm91cHM6IFJlY29yZDxNb2RlLCBUZ2RQYWludGVyR3JvdXA+XG4gICAgLyoqIFNhbWUgYXMgYGdyb3Vwc2AsIGJ1dCB3aXRoIGEgYmx1cnJlZCB0ZXh0dXJlQU8uICovXG4gICAgZ3JvdXBzQmx1cjogUmVjb3JkPE1vZGUsIFRnZFBhaW50ZXJHcm91cD5cbiAgICAvKiogQ29weSBvZiB0ZXh0dXJlQU8gaW50byBhIHRleHR1cmUgdGhhdCBjYW4gYmUgc2FtcGxlZCB3aXRoIGJpbGluZWFyIGludGVycG9sYXRpb24uICovXG4gICAgY29weTogVGdkUGFpbnRlckZyYW1lYnVmZmVyXG4gICAgYmx1cnM6IFRnZEZpbHRlckJsdXJbXVxuICAgIGFvOiBUZ2RQYWludGVyQW1iaWVudE9jY2x1c2lvblNjcmVlblNwYWNlXG59XG5cbi8qKiBTcGFjZSBiZXR3ZWVuIHRoZSBwbGFuZSBhbmQgdGhlIG9iamVjdHMuICovXG5jb25zdCBHQVAgPSAwLjA1XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMsIHJlZlJlZnM6IHsgY3VycmVudDogUmVmcyB8IG51bGwgfSwgc2V0dGluZ3M6IFNldHRpbmdzKSB7XG4gICAgLy8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuICAgIGNvbnN0IHJvb3QgPSBuZXcgVGdkUGFpbnRlckdyb3VwKClcbiAgICBjb250ZXh0LmFkZChyb290KVxuICAgIHJlZlJlZnMuY3VycmVudCA9IGJ1aWxkU2NlbmUoY29udGV4dCwgYXNzZXRzLCByb290LCBzZXR0aW5ncylcbiAgICBjb250ZXh0LmNhbWVyYS5uZWFyID0gMC4xXG4gICAgY29udGV4dC5jYW1lcmEuZmFyID0gNTBcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLm9yaWVudGF0aW9uID0gbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzMsIDQsIDVdIH0pLmxvb2tBdChbMCwgMCwgMF0pLm9yaWVudGF0aW9uXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg2LCA2KVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IHJlZkNvbnRleHQgPSBSZWFjdC51c2VSZWY8VGdkQ29udGV4dCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgcmVmUmVmcyA9IFJlYWN0LnVzZVJlZjxSZWZzIHwgbnVsbD4obnVsbClcbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSBSZWFjdC51c2VTdGF0ZTxNb2RlPihcImJvdGhcIilcbiAgICBjb25zdCBbc2NhbGUsIHNldFNjYWxlXSA9IFJlYWN0LnVzZVN0YXRlPFNjYWxlPihcIjFcIilcbiAgICBjb25zdCBbYmx1ciwgc2V0Qmx1cl0gPSBSZWFjdC51c2VTdGF0ZSgyKVxuICAgIGNvbnN0IFtyYWRpdXMsIHNldFJhZGl1c10gPSBSZWFjdC51c2VTdGF0ZSgwLjUpXG4gICAgLy8gU2FtZSBkZWZhdWx0IGFzIFRnZFBhaW50ZXJBbWJpZW50T2NjbHVzaW9uU2NyZWVuU3BhY2UuXG4gICAgY29uc3QgW3F1YWxpdHksIHNldFF1YWxpdHldID0gUmVhY3QudXNlU3RhdGU8UXVhbGl0eT4oXCJtZWRpdW1cIilcbiAgICBjb25zdCBoYW5kbGVNb2RlQ2hhbmdlID0gKHZhbHVlOiBNb2RlKSA9PiB7XG4gICAgICAgIHNldE1vZGUodmFsdWUpXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgY29uc3QgcmVmcyA9IHJlZlJlZnMuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXJlZnMpIHJldHVyblxuXG4gICAgICAgIGFjdGl2YXRlR3JvdXBzKHJlZnMsIHZhbHVlLCBibHVyKVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQmx1ckNoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNldEJsdXIodmFsdWUpXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgY29uc3QgcmVmcyA9IHJlZlJlZnMuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXJlZnMpIHJldHVyblxuXG4gICAgICAgIC8vIFRoZSBzaXplIG9mIHRoZSBibHVyIGlzIGJha2VkIGluIHRoZSBzaGFkZXI6IHdlIG5lZWQgbmV3IGZpbHRlcnMuXG4gICAgICAgIHJlZlJlZnMuY3VycmVudCA9IHJlYnVpbGRTY2VuZShjb250ZXh0LCByZWZzLCB7IG1vZGUsIHNjYWxlLCBibHVyOiB2YWx1ZSwgcmFkaXVzLCBxdWFsaXR5IH0pXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVSYWRpdXNDaGFuZ2UgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgICBzZXRSYWRpdXModmFsdWUpXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgY29uc3QgcmVmcyA9IHJlZlJlZnMuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXJlZnMpIHJldHVyblxuXG4gICAgICAgIHJlZnMuYW8ucmFkaXVzID0gdmFsdWVcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVNjYWxlQ2hhbmdlID0gKHZhbHVlOiBTY2FsZSkgPT4ge1xuICAgICAgICBzZXRTY2FsZSh2YWx1ZSlcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxuICAgICAgICBjb25zdCByZWZzID0gcmVmUmVmcy5jdXJyZW50XG4gICAgICAgIGlmICghY29udGV4dCB8fCAhcmVmcykgcmV0dXJuXG5cbiAgICAgICAgYXBwbHlTY2FsZShyZWZzLCB2YWx1ZSlcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVF1YWxpdHlDaGFuZ2UgPSAodmFsdWU6IFF1YWxpdHkpID0+IHtcbiAgICAgICAgc2V0UXVhbGl0eSh2YWx1ZSlcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxuICAgICAgICBjb25zdCByZWZzID0gcmVmUmVmcy5jdXJyZW50XG4gICAgICAgIGlmICghY29udGV4dCB8fCAhcmVmcykgcmV0dXJuXG5cbiAgICAgICAgLy8gVGhlIG51bWJlciBvZiBzYW1wbGVzIGlzIGJha2VkIGluIHRoZSBzaGFkZXI6IHdlIG5lZWQgYSBuZXcgcGFpbnRlci5cbiAgICAgICAgcmVmUmVmcy5jdXJyZW50ID0gcmVidWlsZFNjZW5lKGNvbnRleHQsIHJlZnMsIHsgbW9kZSwgc2NhbGUsIGJsdXIsIHJhZGl1cywgcXVhbGl0eTogdmFsdWUgfSlcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcbiAgICAgICAgICAgICAgICByZWZDb250ZXh0LmN1cnJlbnQgPSBjb250ZXh0XG4gICAgICAgICAgICAgICAgaW5pdChjb250ZXh0LCBhc3NldHMsIHJlZlJlZnMsIHsgbW9kZSwgc2NhbGUsIGJsdXIsIHJhZGl1cywgcXVhbGl0eSB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzc2V0cz17eyBnbGI6IHsgc3V6YW5uZTogU3V6YW5uZVVSTCB9IH19XG4gICAgICAgICAgICBjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fVxuICAgICAgICAgICAgZ2l6bW8+XG4gICAgICAgICAgICA8Vmlld1BhbmVsXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgIGdhcD1cIlNcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNjQwcHhcIlxuICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyB2YWx1ZT17bW9kZX0gb25DaGFuZ2U9e2hhbmRsZU1vZGVDaGFuZ2V9IGxhYmVsPVwiVmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cInNjZW5lXCI+c2NlbmU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJhb1wiPnRleHR1cmVBTzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImJvdGhcIj5ib3RoPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cbiAgICAgICAgICAgICAgICA8Vmlld09wdGlvbnMgbGFiZWw9XCJxdWFsaXR5XCIgdmFsdWU9e3F1YWxpdHl9IG9uQ2hhbmdlPXtoYW5kbGVRdWFsaXR5Q2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJsb3dcIj5sb3c8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJtZWRpdW1cIj5tZWRpdW08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJoaWdoXCI+aGlnaDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XG4gICAgICAgICAgICAgICAgPFZpZXdPcHRpb25zIGxhYmVsPVwidmlld3BvcnRNYXRjaGluZ1NjYWxlXCIgdmFsdWU9e3NjYWxlfSBvbkNoYW5nZT17aGFuZGxlU2NhbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIjJcIj4yPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiMVwiPjE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCIwLjVcIj4xLzI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCIwLjI1XCI+MS80PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IFwiMWVtXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtibHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUJsdXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezMyfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9eyh2YWx1ZSkgPT4gYGJsdXI6ICR7dmFsdWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGVcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyYWRpdXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaXVzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MC4xfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17KHZhbHVlKSA9PiBgcmFkaXVzOiAke3ZhbHVlLnRvRml4ZWQoMSl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGVcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICA8L1ZpZXc+XG4gICAgKVxufVxuXG4vLyAjYmVnaW4gYnVpbGRTY2VuZSgpXG4vKipcbiAqIENyZWF0ZSBhbGwgdGhlIHBhaW50ZXJzIG9mIHRoZSBzY2VuZSBhbmQgYWRkIHRoZW0gdG8gYHJvb3RgLlxuICovXG5mdW5jdGlvbiBidWlsZFNjZW5lKFxuICAgIGNvbnRleHQ6IFRnZENvbnRleHQsXG4gICAgYXNzZXRzOiBBc3NldHMsXG4gICAgcm9vdDogVGdkUGFpbnRlckdyb3VwLFxuICAgIHsgbW9kZSwgc2NhbGUsIGJsdXIsIHJhZGl1cywgcXVhbGl0eSB9OiBTZXR0aW5ncyxcbik6IFJlZnMge1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgIGNvbG9yOiBcInJnYigyNTUsIDIxNSwgMTc1KVwiLFxuICAgICAgICBhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xuICAgICAgICAgICAgY29sb3I6IFswLjUsIDAuNSwgMC41LCAxXSxcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICAvLyBUaGUgcGxhbmUgbGllcyBhdCB5ID0gMCwgZmFjaW5nICtZLlxuICAgIGNvbnN0IHBsYW5lOiBUZ2RNZXNoID0ge1xuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoeyBzaXplWDogMTIsIHNpemVZOiAxMiwgdmVjWDogWzEsIDAsIDBdLCB2ZWNZOiBbMCwgMCwgLTFdIH0pLFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbygpLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBtYXRlcmlhbCxcbiAgICB9XG4gICAgY29uc3Qgc3V6YW5uZUdlb21ldHJ5ID0gYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpXG4gICAgY29uc3QgWywgc3V6YW5uZU1pblldID0gc3V6YW5uZUdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ0JveCgpLm1pblxuICAgIGNvbnN0IHN1emFubmU6IFRnZE1lc2ggPSB7XG4gICAgICAgIGdlb21ldHJ5OiBzdXphbm5lR2VvbWV0cnksXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFswLCBHQVAgLSBzdXphbm5lTWluWSwgMF0sIHNjYWxlOiBbMS4yLCAxLCAxLjJdIH0pLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBtYXRlcmlhbCxcbiAgICB9XG4gICAgY29uc3QgY3ViZXMgPSBbXG4gICAgICAgIG1ha2VDdWJlKG1hdGVyaWFsLCBbLTIuNSwgMCwgLTFdLCAwLjMpLFxuICAgICAgICBtYWtlQ3ViZShtYXRlcmlhbCwgWzIuMiwgMCwgLTEuNV0sIC0wLjUpLFxuICAgICAgICBtYWtlQ3ViZShtYXRlcmlhbCwgWy0xLjUsIDAsIDJdLCAwLjkpLFxuICAgICAgICBtYWtlQ3ViZShtYXRlcmlhbCwgWzIsIDAsIDEuOF0sIDApLFxuICAgICAgICBtYWtlQ3ViZShtYXRlcmlhbCwgWzAsIDAsIC0zXSwgMC4yKSxcbiAgICBdXG4gICAgY29uc3QgbWVzaGVzID0gW3BsYW5lLCBzdXphbm5lLCAuLi5jdWJlc11cbiAgICBjb25zdCBkZWZlcnJlZCA9IG5ldyBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nKGNvbnRleHQsIHsgbWVzaGVzIH0pXG4gICAgY29uc3QgYW8gPSBuZXcgVGdkUGFpbnRlckFtYmllbnRPY2NsdXNpb25TY3JlZW5TcGFjZShjb250ZXh0LCB7XG4gICAgICAgIHRleHR1cmVOb3JtYWxzOiBkZWZlcnJlZC50ZXh0dXJlTm9ybWFscyxcbiAgICAgICAgdGV4dHVyZURlcHRoOiBkZWZlcnJlZC50ZXh0dXJlRGVwdGgsXG4gICAgICAgIHF1YWxpdHksXG4gICAgICAgIHJhZGl1cyxcbiAgICAgICAgYmlhczogMC4wMixcbiAgICAgICAgdmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxLFxuICAgIH0pXG4gICAgLy8gVGhlIHNjZW5lIGlzIHJlbmRlcmVkIGludG8gYSB0ZXh0dXJlLCB0byBiZSBjb21iaW5lZCB3aXRoIHRleHR1cmVBTyBsYXRlci5cbiAgICBjb25zdCB0ZXh0dXJlU2NlbmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZVNjZW5lLFxuICAgICAgICBkZXB0aEJ1ZmZlcjogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMSwgMC4yMiwgMC4zLCAxXSwgZGVwdGg6IDEgfSksXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBkZXB0aDogXCJsZXNzT3JFcXVhbFwiLFxuICAgICAgICAgICAgICAgIGN1bGw6IFwiYmFja1wiLFxuICAgICAgICAgICAgICAgIGJsZW5kOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbmV3IFRnZFBhaW50ZXJNZXNoZXMoY29udGV4dCwgeyBtZXNoZXMgfSldLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICAvLyB0ZXh0dXJlQU8gaGFzIGEgc2luZ2xlIGNoYW5uZWwgKFIzMkYpOiB3ZSBkaXNwbGF5IGl0IGluIHNoYWRlcyBvZiBncmV5LlxuICAgIGNvbnN0IGZpbHRlckdyZXkgPSBuZXcgVGdkRmlsdGVyKHtcbiAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXCJmbG9hdCBhbyA9IHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpLnI7XCIsIFwiRnJhZ0NvbG9yID0gdmVjNCh2ZWMzKGFvKSwgMS4wKTtcIl0sXG4gICAgfSlcbiAgICAvLyBBcHBseSB0aGUgYW1iaWVudCBvY2NsdXNpb24gdG8gdGhlIHNjZW5lIGJ5IG11bHRpcGx5aW5nIHRoZSBjb2xvcnMuXG4gICAgY29uc3QgZmlsdGVyQm90aCA9IG5ldyBUZ2RGaWx0ZXIoe1xuICAgICAgICB0ZXh0dXJlczogeyB1bmlUZXh0dXJlQU86IGFvLnRleHR1cmVBTyB9LFxuICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcbiAgICAgICAgICAgIFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpO1wiLFxuICAgICAgICAgICAgXCJmbG9hdCBhbyA9IHRleHR1cmUodW5pVGV4dHVyZUFPLCB2YXJVVikucjtcIixcbiAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gdmVjNChjb2xvci5yZ2IgKiBhbywgY29sb3IuYSk7XCIsXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBjb25zdCBncm91cHM6IFJlY29yZDxNb2RlLCBUZ2RQYWludGVyR3JvdXA+ID0ge1xuICAgICAgICBzY2VuZTogbmV3IFRnZFBhaW50ZXJHcm91cChbbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwgeyB0ZXh0dXJlOiB0ZXh0dXJlU2NlbmUsIGZsaXBZOiB0cnVlIH0pXSksXG4gICAgICAgIGFvOiBuZXcgVGdkUGFpbnRlckdyb3VwKFtcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHsgdGV4dHVyZTogYW8udGV4dHVyZUFPLCBmaWx0ZXJzOiBbZmlsdGVyR3JleV0sIGZsaXBZOiB0cnVlIH0pLFxuICAgICAgICBdKSxcbiAgICAgICAgYm90aDogbmV3IFRnZFBhaW50ZXJHcm91cChbXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7IHRleHR1cmU6IHRleHR1cmVTY2VuZSwgZmlsdGVyczogW2ZpbHRlckJvdGhdLCBmbGlwWTogdHJ1ZSB9KSxcbiAgICAgICAgXSksXG4gICAgfVxuICAgIC8vIHRleHR1cmVBTyB1c2VzIFIzMkYgd2l0aCBORUFSRVNUIGZpbHRlcmluZywgYnV0IHRoZSBibHVyIHJlbGllcyBvbiBiaWxpbmVhciBpbnRlcnBvbGF0aW9uLlxuICAgIC8vIFNvIHdlIGNvcHkgaXQgaW50byBhIFJHQkE4IHRleHR1cmUgd2l0aCBMSU5FQVIgZmlsdGVyaW5nIGZpcnN0LlxuICAgIGNvbnN0IHRleHR1cmVBT0xpbmVhciA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJMSU5FQVJcIixcbiAgICAgICAgICAgIHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcbiAgICAgICAgICAgIHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnN0IGNvcHkgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogdGV4dHVyZUFPTGluZWFyLFxuICAgICAgICBjaGlsZHJlbjogW25ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHsgdGV4dHVyZTogYW8udGV4dHVyZUFPLCBmbGlwWTogdHJ1ZSB9KV0sXG4gICAgfSlcbiAgICAvLyBIb3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBibHVycy5cbiAgICBjb25zdCBibHVycyA9IFRnZEZpbHRlckJsdXIuY3JlYXRlUGFpcih7IHNpemU6IGJsdXIgfSlcbiAgICAvLyBIZXJlLCB1bmlUZXh0dXJlIGlzIHRoZSBibHVycmVkIHRleHR1cmVBTy5cbiAgICBjb25zdCBmaWx0ZXJCb3RoQmx1ciA9IG5ldyBUZ2RGaWx0ZXIoe1xuICAgICAgICB0ZXh0dXJlczogeyB1bmlUZXh0dXJlU2NlbmU6IHRleHR1cmVTY2VuZSB9LFxuICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcbiAgICAgICAgICAgIFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZVNjZW5lLCB2YXJVVik7XCIsXG4gICAgICAgICAgICBcImZsb2F0IGFvID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVikucjtcIixcbiAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gdmVjNChjb2xvci5yZ2IgKiBhbywgY29sb3IuYSk7XCIsXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBjb25zdCBncm91cHNCbHVyOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckdyb3VwPiA9IHtcbiAgICAgICAgc2NlbmU6IGdyb3Vwcy5zY2VuZSxcbiAgICAgICAgYW86IG5ldyBUZ2RQYWludGVyR3JvdXAoW1xuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwgeyB0ZXh0dXJlOiB0ZXh0dXJlQU9MaW5lYXIsIGZpbHRlcnM6IFsuLi5ibHVycywgZmlsdGVyR3JleV0sIGZsaXBZOiB0cnVlIH0pLFxuICAgICAgICBdKSxcbiAgICAgICAgYm90aDogbmV3IFRnZFBhaW50ZXJHcm91cChbXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgdGV4dHVyZTogdGV4dHVyZUFPTGluZWFyLFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IFsuLi5ibHVycywgZmlsdGVyQm90aEJsdXJdLFxuICAgICAgICAgICAgICAgIGZsaXBZOiB0cnVlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0pLFxuICAgIH1cbiAgICBjb25zdCByZWZzOiBSZWZzID0ge1xuICAgICAgICBhc3NldHMsXG4gICAgICAgIHJvb3QsXG4gICAgICAgIHRleHR1cmVzOiBbdGV4dHVyZVNjZW5lLCB0ZXh0dXJlQU9MaW5lYXJdLFxuICAgICAgICBncm91cHMsXG4gICAgICAgIGdyb3Vwc0JsdXIsXG4gICAgICAgIGNvcHksXG4gICAgICAgIGJsdXJzLFxuICAgICAgICBhbyxcbiAgICB9XG4gICAgLy8gU3RhcnQgd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZXMgb2YgdGhlIFVJIGNvbnRyb2xzLlxuICAgIGFjdGl2YXRlR3JvdXBzKHJlZnMsIG1vZGUsIGJsdXIpXG4gICAgYXBwbHlTY2FsZShyZWZzLCBzY2FsZSlcbiAgICByb290LmFkZChcbiAgICAgICAgLy8gTXVzdCBjb21lIGZpcnN0OiB0aGUgbWVzaGVzIGhhdmUgdG8gbW92ZSBiZWZvcmUgYmVpbmcgcGFpbnRlZC5cbiAgICAgICAgbWFrZUJvdW5jZShzdXphbm5lKSxcbiAgICAgICAgZGVmZXJyZWQsXG4gICAgICAgIGFvLFxuICAgICAgICBmcmFtZWJ1ZmZlcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogXCJvZmZcIixcbiAgICAgICAgICAgIGN1bGw6IFwib2ZmXCIsXG4gICAgICAgICAgICBibGVuZDogXCJvZmZcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY29weSwgZ3JvdXBzLnNjZW5lLCBncm91cHMuYW8sIGdyb3Vwcy5ib3RoLCBncm91cHNCbHVyLmFvLCBncm91cHNCbHVyLmJvdGhdLFxuICAgICAgICB9KSxcbiAgICApXG4gICAgcmV0dXJuIHJlZnNcbn1cbi8vICNlbmRcblxuLy8gI2JlZ2luIHJlYnVpbGRTY2VuZSgpXG4vKipcbiAqIFJlbGVhc2UgYWxsIHRoZSBHUFUgcmVzb3VyY2VzIG9mIHRoZSBzY2VuZSwgYW5kIGJ1aWxkIGl0IGFnYWluLlxuICovXG5mdW5jdGlvbiByZWJ1aWxkU2NlbmUoY29udGV4dDogVGdkQ29udGV4dCwgeyBhc3NldHMsIHJvb3QsIHRleHR1cmVzIH06IFJlZnMsIHNldHRpbmdzOiBTZXR0aW5ncyk6IFJlZnMge1xuICAgIC8vIERlbGV0ZXMgdGhlIHBhaW50ZXJzIHRvby5cbiAgICByb290LnJlbW92ZUFsbCgpXG4gICAgZm9yIChjb25zdCB0ZXh0dXJlIG9mIHRleHR1cmVzKSB0ZXh0dXJlLmRlbGV0ZSgpXG4gICAgcmV0dXJuIGJ1aWxkU2NlbmUoY29udGV4dCwgYXNzZXRzLCByb290LCBzZXR0aW5ncylcbn1cbi8vICNlbmRcblxuLy8gI2JlZ2luIGFjdGl2YXRlR3JvdXBzKClcbi8qKlxuICogT25seSB0aGUgZ3JvdXAgb2YgdGhlIGN1cnJlbnQgYG1vZGVgIGlzIGFjdGl2ZS5cbiAqIFRoZSBjb3B5IG9mIHRleHR1cmVBTyBpcyBvbmx5IG5lZWRlZCB3aGVuIHdlIGJsdXIgaXQgKGBibHVyID4gMGApLlxuICovXG5mdW5jdGlvbiBhY3RpdmF0ZUdyb3Vwcyh7IGdyb3VwcywgZ3JvdXBzQmx1ciwgY29weSB9OiBSZWZzLCBtb2RlOiBNb2RlLCBibHVyOiBudW1iZXIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhncm91cHMpIGFzIE1vZGVbXSkge1xuICAgICAgICBncm91cHNba2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBncm91cHNCbHVyW2tleV0uYWN0aXZlID0gZmFsc2VcbiAgICB9XG4gICAgOyhibHVyID4gMCA/IGdyb3Vwc0JsdXIgOiBncm91cHMpW21vZGVdLmFjdGl2ZSA9IHRydWVcbiAgICBjb3B5LmFjdGl2ZSA9IGJsdXIgPiAwICYmIG1vZGUgIT09IFwic2NlbmVcIlxufVxuLy8gI2VuZFxuXG4vLyAjYmVnaW4gYXBwbHlTY2FsZSgpXG5mdW5jdGlvbiBhcHBseVNjYWxlKHsgYW8sIGJsdXJzIH06IFJlZnMsIHNjYWxlOiBTY2FsZSkge1xuICAgIC8vIHRleHR1cmVBTyB3aWxsIGJlIHJlc2l6ZWQgb24gbmV4dCBwYWludC5cbiAgICBhby52aWV3cG9ydE1hdGNoaW5nU2NhbGUgPSBOdW1iZXIoc2NhbGUpXG4gICAgLy8gVGhlIGJsdXIgaXMgYXBwbGllZCBhdCBmdWxsIHJlc29sdXRpb246IHdlIHdpZGVuIGl0IHRvIGNvdmVyIHRoZSBzYW1lIG51bWJlciBvZiBBTyBwaXhlbHMuXG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgYmx1cnMpIGZpbHRlci5zdHJlbmd0aCA9IDEgLyBOdW1iZXIoc2NhbGUpXG59XG4vLyAjZW5kXG5cbi8vICNiZWdpbiBtYWtlQm91bmNlKClcbi8qKlxuICogU3V6YW5uZSBib3VuY2VzIGZyb20gaGVyIGN1cnJlbnQgWSB0byBZICsgMSwgYW5kIGJhY2ssIGluIG9uZSBzZWNvbmQuXG4gKi9cbmZ1bmN0aW9uIG1ha2VCb3VuY2UobWVzaDogVGdkTWVzaCkge1xuICAgIGNvbnN0IFt4LCB5LCB6XSA9IG1lc2gudHJhbnNmby5wb3NpdGlvblxuICAgIHJldHVybiAodGltZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIG1lc2gudHJhbnNmby5zZXRQb3NpdGlvbih4LCB5ICsgTWF0aC5hYnMoTWF0aC5zaW4oTWF0aC5QSSAqIHRpbWUpKSwgeilcbiAgICB9XG59XG4vLyAjZW5kXG5cbi8vICNiZWdpbiBtYWtlQ3ViZSgpXG4vKipcbiAqIEEgY3ViZSBvZiBzaXplIDEgZmxvYXRpbmcgYEdBUGAgYWJvdmUgdGhlIHBsYW5lLFxuICogcm90YXRlZCBieSBgYW5nbGVgIHJhZGlhbnMgYXJvdW5kIHRoZSBZIGF4aXMuXG4gKi9cbmZ1bmN0aW9uIG1ha2VDdWJlKG1hdGVyaWFsOiBUZ2RNYXRlcmlhbERpZmZ1c2UsIFt4LCB5LCB6XTogQXJyYXlOdW1iZXIzLCBhbmdsZTogbnVtYmVyKTogVGdkTWVzaCB7XG4gICAgY29uc3QgdHJhbnNmbyA9IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFt4LCB5ICsgMC41ICsgR0FQLCB6XSB9KVxuICAgIHRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ2xlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goKSxcbiAgICAgICAgdHJhbnNmbyxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgbWF0ZXJpYWwsXG4gICAgfVxufVxuLy8gI2VuZFxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2FtYmllbnQtb2NjbHVzaW9uLXNjcmVlbi1zcGFjZS5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcIiAgICBjb25zdCByb290ID0gbmV3IFRnZFBhaW50ZXJHcm91cCgpXFxuICAgIGNvbnRleHQuYWRkKHJvb3QpXFxuICAgIHJlZlJlZnMuY3VycmVudCA9IGJ1aWxkU2NlbmUoY29udGV4dCwgYXNzZXRzLCByb290LCBzZXR0aW5ncylcXG4gICAgY29udGV4dC5jYW1lcmEubmVhciA9IDAuMVxcbiAgICBjb250ZXh0LmNhbWVyYS5mYXIgPSA1MFxcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLm9yaWVudGF0aW9uID0gbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzMsIDQsIDVdIH0pLmxvb2tBdChbMCwgMCwgMF0pLm9yaWVudGF0aW9uXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNiwgNilcXG4gICAgY29udGV4dC5wbGF5KClcIixcImJ1aWxkU2NlbmUoKVwiOlwiLyoqXFxuICogQ3JlYXRlIGFsbCB0aGUgcGFpbnRlcnMgb2YgdGhlIHNjZW5lIGFuZCBhZGQgdGhlbSB0byBgcm9vdGAuXFxuICovXFxuZnVuY3Rpb24gYnVpbGRTY2VuZShcXG4gICAgY29udGV4dDogVGdkQ29udGV4dCxcXG4gICAgYXNzZXRzOiBBc3NldHMsXFxuICAgIHJvb3Q6IFRnZFBhaW50ZXJHcm91cCxcXG4gICAgeyBtb2RlLCBzY2FsZSwgYmx1ciwgcmFkaXVzLCBxdWFsaXR5IH06IFNldHRpbmdzLFxcbik6IFJlZnMge1xcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgY29sb3I6IFxcXCJyZ2IoMjU1LCAyMTUsIDE3NSlcXFwiLFxcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuNSwgMC41LCAwLjUsIDFdLFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIC8vIFRoZSBwbGFuZSBsaWVzIGF0IHkgPSAwLCBmYWNpbmcgK1kuXFxuICAgIGNvbnN0IHBsYW5lOiBUZ2RNZXNoID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVBsYW5lKHsgc2l6ZVg6IDEyLCBzaXplWTogMTIsIHZlY1g6IFsxLCAwLCAwXSwgdmVjWTogWzAsIDAsIC0xXSB9KSxcXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKCksXFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH1cXG4gICAgY29uc3Qgc3V6YW5uZUdlb21ldHJ5ID0gYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpXFxuICAgIGNvbnN0IFssIHN1emFubmVNaW5ZXSA9IHN1emFubmVHZW9tZXRyeS5jb21wdXRlQm91bmRpbmdCb3goKS5taW5cXG4gICAgY29uc3Qgc3V6YW5uZTogVGdkTWVzaCA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBzdXphbm5lR2VvbWV0cnksXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMCwgR0FQIC0gc3V6YW5uZU1pblksIDBdLCBzY2FsZTogWzEuMiwgMSwgMS4yXSB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfVxcbiAgICBjb25zdCBjdWJlcyA9IFtcXG4gICAgICAgIG1ha2VDdWJlKG1hdGVyaWFsLCBbLTIuNSwgMCwgLTFdLCAwLjMpLFxcbiAgICAgICAgbWFrZUN1YmUobWF0ZXJpYWwsIFsyLjIsIDAsIC0xLjVdLCAtMC41KSxcXG4gICAgICAgIG1ha2VDdWJlKG1hdGVyaWFsLCBbLTEuNSwgMCwgMl0sIDAuOSksXFxuICAgICAgICBtYWtlQ3ViZShtYXRlcmlhbCwgWzIsIDAsIDEuOF0sIDApLFxcbiAgICAgICAgbWFrZUN1YmUobWF0ZXJpYWwsIFswLCAwLCAtM10sIDAuMiksXFxuICAgIF1cXG4gICAgY29uc3QgbWVzaGVzID0gW3BsYW5lLCBzdXphbm5lLCAuLi5jdWJlc11cXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7IG1lc2hlcyB9KVxcbiAgICBjb25zdCBhbyA9IG5ldyBUZ2RQYWludGVyQW1iaWVudE9jY2x1c2lvblNjcmVlblNwYWNlKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmVOb3JtYWxzOiBkZWZlcnJlZC50ZXh0dXJlTm9ybWFscyxcXG4gICAgICAgIHRleHR1cmVEZXB0aDogZGVmZXJyZWQudGV4dHVyZURlcHRoLFxcbiAgICAgICAgcXVhbGl0eSxcXG4gICAgICAgIHJhZGl1cyxcXG4gICAgICAgIGJpYXM6IDAuMDIsXFxuICAgICAgICB2aWV3cG9ydE1hdGNoaW5nU2NhbGU6IDEsXFxuICAgIH0pXFxuICAgIC8vIFRoZSBzY2VuZSBpcyByZW5kZXJlZCBpbnRvIGEgdGV4dHVyZSwgdG8gYmUgY29tYmluZWQgd2l0aCB0ZXh0dXJlQU8gbGF0ZXIuXFxuICAgIGNvbnN0IHRleHR1cmVTY2VuZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dClcXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IHRleHR1cmVTY2VuZSxcXG4gICAgICAgIGRlcHRoQnVmZmVyOiB0cnVlLFxcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjEsIDAuMjIsIDAuMywgMV0sIGRlcHRoOiAxIH0pLFxcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBkZXB0aDogXFxcImxlc3NPckVxdWFsXFxcIixcXG4gICAgICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgICAgICBibGVuZDogXFxcIm9mZlxcXCIsXFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbmV3IFRnZFBhaW50ZXJNZXNoZXMoY29udGV4dCwgeyBtZXNoZXMgfSldLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgLy8gdGV4dHVyZUFPIGhhcyBhIHNpbmdsZSBjaGFubmVsIChSMzJGKTogd2UgZGlzcGxheSBpdCBpbiBzaGFkZXMgb2YgZ3JleS5cXG4gICAgY29uc3QgZmlsdGVyR3JleSA9IG5ldyBUZ2RGaWx0ZXIoe1xcbiAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxcImZsb2F0IGFvID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVikucjtcXFwiLCBcXFwiRnJhZ0NvbG9yID0gdmVjNCh2ZWMzKGFvKSwgMS4wKTtcXFwiXSxcXG4gICAgfSlcXG4gICAgLy8gQXBwbHkgdGhlIGFtYmllbnQgb2NjbHVzaW9uIHRvIHRoZSBzY2VuZSBieSBtdWx0aXBseWluZyB0aGUgY29sb3JzLlxcbiAgICBjb25zdCBmaWx0ZXJCb3RoID0gbmV3IFRnZEZpbHRlcih7XFxuICAgICAgICB0ZXh0dXJlczogeyB1bmlUZXh0dXJlQU86IGFvLnRleHR1cmVBTyB9LFxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxuICAgICAgICAgICAgXFxcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJmbG9hdCBhbyA9IHRleHR1cmUodW5pVGV4dHVyZUFPLCB2YXJVVikucjtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLnJnYiAqIGFvLCBjb2xvci5hKTtcXFwiLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgY29uc3QgZ3JvdXBzOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckdyb3VwPiA9IHtcXG4gICAgICAgIHNjZW5lOiBuZXcgVGdkUGFpbnRlckdyb3VwKFtuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7IHRleHR1cmU6IHRleHR1cmVTY2VuZSwgZmxpcFk6IHRydWUgfSldKSxcXG4gICAgICAgIGFvOiBuZXcgVGdkUGFpbnRlckdyb3VwKFtcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7IHRleHR1cmU6IGFvLnRleHR1cmVBTywgZmlsdGVyczogW2ZpbHRlckdyZXldLCBmbGlwWTogdHJ1ZSB9KSxcXG4gICAgICAgIF0pLFxcbiAgICAgICAgYm90aDogbmV3IFRnZFBhaW50ZXJHcm91cChbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwgeyB0ZXh0dXJlOiB0ZXh0dXJlU2NlbmUsIGZpbHRlcnM6IFtmaWx0ZXJCb3RoXSwgZmxpcFk6IHRydWUgfSksXFxuICAgICAgICBdKSxcXG4gICAgfVxcbiAgICAvLyB0ZXh0dXJlQU8gdXNlcyBSMzJGIHdpdGggTkVBUkVTVCBmaWx0ZXJpbmcsIGJ1dCB0aGUgYmx1ciByZWxpZXMgb24gYmlsaW5lYXIgaW50ZXJwb2xhdGlvbi5cXG4gICAgLy8gU28gd2UgY29weSBpdCBpbnRvIGEgUkdCQTggdGV4dHVyZSB3aXRoIExJTkVBUiBmaWx0ZXJpbmcgZmlyc3QuXFxuICAgIGNvbnN0IHRleHR1cmVBT0xpbmVhciA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcbiAgICAgICAgICAgIHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICAgICAgd3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGNvcHkgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IHRleHR1cmVBT0xpbmVhcixcXG4gICAgICAgIGNoaWxkcmVuOiBbbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwgeyB0ZXh0dXJlOiBhby50ZXh0dXJlQU8sIGZsaXBZOiB0cnVlIH0pXSxcXG4gICAgfSlcXG4gICAgLy8gSG9yaXpvbnRhbCBhbmQgdmVydGljYWwgYmx1cnMuXFxuICAgIGNvbnN0IGJsdXJzID0gVGdkRmlsdGVyQmx1ci5jcmVhdGVQYWlyKHsgc2l6ZTogYmx1ciB9KVxcbiAgICAvLyBIZXJlLCB1bmlUZXh0dXJlIGlzIHRoZSBibHVycmVkIHRleHR1cmVBTy5cXG4gICAgY29uc3QgZmlsdGVyQm90aEJsdXIgPSBuZXcgVGdkRmlsdGVyKHtcXG4gICAgICAgIHRleHR1cmVzOiB7IHVuaVRleHR1cmVTY2VuZTogdGV4dHVyZVNjZW5lIH0sXFxuICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcXG4gICAgICAgICAgICBcXFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZVNjZW5lLCB2YXJVVik7XFxcIixcXG4gICAgICAgICAgICBcXFwiZmxvYXQgYW8gPSB0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKS5yO1xcXCIsXFxuICAgICAgICAgICAgXFxcIkZyYWdDb2xvciA9IHZlYzQoY29sb3IucmdiICogYW8sIGNvbG9yLmEpO1xcXCIsXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb25zdCBncm91cHNCbHVyOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckdyb3VwPiA9IHtcXG4gICAgICAgIHNjZW5lOiBncm91cHMuc2NlbmUsXFxuICAgICAgICBhbzogbmV3IFRnZFBhaW50ZXJHcm91cChbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwgeyB0ZXh0dXJlOiB0ZXh0dXJlQU9MaW5lYXIsIGZpbHRlcnM6IFsuLi5ibHVycywgZmlsdGVyR3JleV0sIGZsaXBZOiB0cnVlIH0pLFxcbiAgICAgICAgXSksXFxuICAgICAgICBib3RoOiBuZXcgVGdkUGFpbnRlckdyb3VwKFtcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIHRleHR1cmU6IHRleHR1cmVBT0xpbmVhcixcXG4gICAgICAgICAgICAgICAgZmlsdGVyczogWy4uLmJsdXJzLCBmaWx0ZXJCb3RoQmx1cl0sXFxuICAgICAgICAgICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSksXFxuICAgIH1cXG4gICAgY29uc3QgcmVmczogUmVmcyA9IHtcXG4gICAgICAgIGFzc2V0cyxcXG4gICAgICAgIHJvb3QsXFxuICAgICAgICB0ZXh0dXJlczogW3RleHR1cmVTY2VuZSwgdGV4dHVyZUFPTGluZWFyXSxcXG4gICAgICAgIGdyb3VwcyxcXG4gICAgICAgIGdyb3Vwc0JsdXIsXFxuICAgICAgICBjb3B5LFxcbiAgICAgICAgYmx1cnMsXFxuICAgICAgICBhbyxcXG4gICAgfVxcbiAgICAvLyBTdGFydCB3aXRoIHRoZSBpbml0aWFsIHZhbHVlcyBvZiB0aGUgVUkgY29udHJvbHMuXFxuICAgIGFjdGl2YXRlR3JvdXBzKHJlZnMsIG1vZGUsIGJsdXIpXFxuICAgIGFwcGx5U2NhbGUocmVmcywgc2NhbGUpXFxuICAgIHJvb3QuYWRkKFxcbiAgICAgICAgLy8gTXVzdCBjb21lIGZpcnN0OiB0aGUgbWVzaGVzIGhhdmUgdG8gbW92ZSBiZWZvcmUgYmVpbmcgcGFpbnRlZC5cXG4gICAgICAgIG1ha2VCb3VuY2Uoc3V6YW5uZSksXFxuICAgICAgICBkZWZlcnJlZCxcXG4gICAgICAgIGFvLFxcbiAgICAgICAgZnJhbWVidWZmZXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcIm9mZlxcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcIm9mZlxcXCIsXFxuICAgICAgICAgICAgYmxlbmQ6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY29weSwgZ3JvdXBzLnNjZW5lLCBncm91cHMuYW8sIGdyb3Vwcy5ib3RoLCBncm91cHNCbHVyLmFvLCBncm91cHNCbHVyLmJvdGhdLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgcmV0dXJuIHJlZnNcXG59XCIsXCJyZWJ1aWxkU2NlbmUoKVwiOlwiLyoqXFxuICogUmVsZWFzZSBhbGwgdGhlIEdQVSByZXNvdXJjZXMgb2YgdGhlIHNjZW5lLCBhbmQgYnVpbGQgaXQgYWdhaW4uXFxuICovXFxuZnVuY3Rpb24gcmVidWlsZFNjZW5lKGNvbnRleHQ6IFRnZENvbnRleHQsIHsgYXNzZXRzLCByb290LCB0ZXh0dXJlcyB9OiBSZWZzLCBzZXR0aW5nczogU2V0dGluZ3MpOiBSZWZzIHtcXG4gICAgLy8gRGVsZXRlcyB0aGUgcGFpbnRlcnMgdG9vLlxcbiAgICByb290LnJlbW92ZUFsbCgpXFxuICAgIGZvciAoY29uc3QgdGV4dHVyZSBvZiB0ZXh0dXJlcykgdGV4dHVyZS5kZWxldGUoKVxcbiAgICByZXR1cm4gYnVpbGRTY2VuZShjb250ZXh0LCBhc3NldHMsIHJvb3QsIHNldHRpbmdzKVxcbn1cIixcImFjdGl2YXRlR3JvdXBzKClcIjpcIi8qKlxcbiAqIE9ubHkgdGhlIGdyb3VwIG9mIHRoZSBjdXJyZW50IGBtb2RlYCBpcyBhY3RpdmUuXFxuICogVGhlIGNvcHkgb2YgdGV4dHVyZUFPIGlzIG9ubHkgbmVlZGVkIHdoZW4gd2UgYmx1ciBpdCAoYGJsdXIgPiAwYCkuXFxuICovXFxuZnVuY3Rpb24gYWN0aXZhdGVHcm91cHMoeyBncm91cHMsIGdyb3Vwc0JsdXIsIGNvcHkgfTogUmVmcywgbW9kZTogTW9kZSwgYmx1cjogbnVtYmVyKSB7XFxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGdyb3VwcykgYXMgTW9kZVtdKSB7XFxuICAgICAgICBncm91cHNba2V5XS5hY3RpdmUgPSBmYWxzZVxcbiAgICAgICAgZ3JvdXBzQmx1cltrZXldLmFjdGl2ZSA9IGZhbHNlXFxuICAgIH1cXG4gICAgOyhibHVyID4gMCA/IGdyb3Vwc0JsdXIgOiBncm91cHMpW21vZGVdLmFjdGl2ZSA9IHRydWVcXG4gICAgY29weS5hY3RpdmUgPSBibHVyID4gMCAmJiBtb2RlICE9PSBcXFwic2NlbmVcXFwiXFxufVwiLFwiYXBwbHlTY2FsZSgpXCI6XCJmdW5jdGlvbiBhcHBseVNjYWxlKHsgYW8sIGJsdXJzIH06IFJlZnMsIHNjYWxlOiBTY2FsZSkge1xcbiAgICAvLyB0ZXh0dXJlQU8gd2lsbCBiZSByZXNpemVkIG9uIG5leHQgcGFpbnQuXFxuICAgIGFvLnZpZXdwb3J0TWF0Y2hpbmdTY2FsZSA9IE51bWJlcihzY2FsZSlcXG4gICAgLy8gVGhlIGJsdXIgaXMgYXBwbGllZCBhdCBmdWxsIHJlc29sdXRpb246IHdlIHdpZGVuIGl0IHRvIGNvdmVyIHRoZSBzYW1lIG51bWJlciBvZiBBTyBwaXhlbHMuXFxuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIGJsdXJzKSBmaWx0ZXIuc3RyZW5ndGggPSAxIC8gTnVtYmVyKHNjYWxlKVxcbn1cIixcIm1ha2VCb3VuY2UoKVwiOlwiLyoqXFxuICogU3V6YW5uZSBib3VuY2VzIGZyb20gaGVyIGN1cnJlbnQgWSB0byBZICsgMSwgYW5kIGJhY2ssIGluIG9uZSBzZWNvbmQuXFxuICovXFxuZnVuY3Rpb24gbWFrZUJvdW5jZShtZXNoOiBUZ2RNZXNoKSB7XFxuICAgIGNvbnN0IFt4LCB5LCB6XSA9IG1lc2gudHJhbnNmby5wb3NpdGlvblxcbiAgICByZXR1cm4gKHRpbWU6IG51bWJlcikgPT4ge1xcbiAgICAgICAgbWVzaC50cmFuc2ZvLnNldFBvc2l0aW9uKHgsIHkgKyBNYXRoLmFicyhNYXRoLnNpbihNYXRoLlBJICogdGltZSkpLCB6KVxcbiAgICB9XFxufVwiLFwibWFrZUN1YmUoKVwiOlwiLyoqXFxuICogQSBjdWJlIG9mIHNpemUgMSBmbG9hdGluZyBgR0FQYCBhYm92ZSB0aGUgcGxhbmUsXFxuICogcm90YXRlZCBieSBgYW5nbGVgIHJhZGlhbnMgYXJvdW5kIHRoZSBZIGF4aXMuXFxuICovXFxuZnVuY3Rpb24gbWFrZUN1YmUobWF0ZXJpYWw6IFRnZE1hdGVyaWFsRGlmZnVzZSwgW3gsIHksIHpdOiBBcnJheU51bWJlcjMsIGFuZ2xlOiBudW1iZXIpOiBUZ2RNZXNoIHtcXG4gICAgY29uc3QgdHJhbnNmbyA9IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFt4LCB5ICsgMC41ICsgR0FQLCB6XSB9KVxcbiAgICB0cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdsZSlcXG4gICAgcmV0dXJuIHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goKSxcXG4gICAgICAgIHRyYW5zZm8sXFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH1cXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0eXBlIEFycmF5TnVtYmVyMyxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RGaWx0ZXIsXFxuICAgIFRnZEZpbHRlckJsdXIsXFxuICAgIFRnZEdlb21ldHJ5Qm94LFxcbiAgICBUZ2RHZW9tZXRyeVBsYW5lLFxcbiAgICBUZ2RMaWdodCxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICB0eXBlIFRnZE1lc2gsXFxuICAgIFRnZFBhaW50ZXJBbWJpZW50T2NjbHVzaW9uU2NyZWVuU3BhY2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyxcXG4gICAgVGdkUGFpbnRlckZpbHRlcixcXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyLFxcbiAgICBUZ2RQYWludGVyR3JvdXAsXFxuICAgIFRnZFBhaW50ZXJNZXNoZXMsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICBUZ2RUcmFuc2ZvLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IHsgVmlld09wdGlvbnMsIFZpZXdQYW5lbCwgVmlld1NsaWRlciB9IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcXFwiXFxuXFxudHlwZSBNb2RlID0gXFxcInNjZW5lXFxcIiB8IFxcXCJhb1xcXCIgfCBcXFwiYm90aFxcXCJcXG50eXBlIFNjYWxlID0gXFxcIjFcXFwiIHwgXFxcIjAuNVxcXCIgfCBcXFwiMC4yNVxcXCIgfCBcXFwiMC4xMjVcXFwiXFxudHlwZSBRdWFsaXR5ID0gXFxcImxvd1xcXCIgfCBcXFwibWVkaXVtXFxcIiB8IFxcXCJoaWdoXFxcIlxcblxcbi8qKiBDdXJyZW50IHZhbHVlcyBvZiB0aGUgVUkgY29udHJvbHMuICovXFxuaW50ZXJmYWNlIFNldHRpbmdzIHtcXG4gICAgbW9kZTogTW9kZVxcbiAgICBzY2FsZTogU2NhbGVcXG4gICAgLyoqIFNpemUgb2YgdGhlIGJsdXIgYXBwbGllZCB0byB0ZXh0dXJlQU8gKDAgbWVhbnMgbm8gYmx1cikuICovXFxuICAgIGJsdXI6IG51bWJlclxcbiAgICByYWRpdXM6IG51bWJlclxcbiAgICBxdWFsaXR5OiBRdWFsaXR5XFxufVxcblxcbmludGVyZmFjZSBSZWZzIHtcXG4gICAgYXNzZXRzOiBBc3NldHNcXG4gICAgLyoqIEhvbGRzIHRoZSB3aG9sZSBzY2VuZSwgc28gd2UgY2FuIHJlYnVpbGQgaXQgd2hlbiBgcXVhbGl0eWAgb3IgYGJsdXJgIGNoYW5nZXMuICovXFxuICAgIHJvb3Q6IFRnZFBhaW50ZXJHcm91cFxcbiAgICAvKiogVGV4dHVyZXMgdGhhdCBhcmUgbm90IG93bmVkIGJ5IGFueSBwYWludGVyLiAqL1xcbiAgICB0ZXh0dXJlczogVGdkVGV4dHVyZTJEW11cXG4gICAgLyoqIE9uZSBncm91cCBwZXIgbW9kZTogb25seSB0aGUgb25lIG9mIHRoZSBjdXJyZW50IG1vZGUgaXMgYWN0aXZlLiAqL1xcbiAgICBncm91cHM6IFJlY29yZDxNb2RlLCBUZ2RQYWludGVyR3JvdXA+XFxuICAgIC8qKiBTYW1lIGFzIGBncm91cHNgLCBidXQgd2l0aCBhIGJsdXJyZWQgdGV4dHVyZUFPLiAqL1xcbiAgICBncm91cHNCbHVyOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckdyb3VwPlxcbiAgICAvKiogQ29weSBvZiB0ZXh0dXJlQU8gaW50byBhIHRleHR1cmUgdGhhdCBjYW4gYmUgc2FtcGxlZCB3aXRoIGJpbGluZWFyIGludGVycG9sYXRpb24uICovXFxuICAgIGNvcHk6IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlclxcbiAgICBibHVyczogVGdkRmlsdGVyQmx1cltdXFxuICAgIGFvOiBUZ2RQYWludGVyQW1iaWVudE9jY2x1c2lvblNjcmVlblNwYWNlXFxufVxcblxcbi8qKiBTcGFjZSBiZXR3ZWVuIHRoZSBwbGFuZSBhbmQgdGhlIG9iamVjdHMuICovXFxuY29uc3QgR0FQID0gMC4wNVxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMsIHJlZlJlZnM6IHsgY3VycmVudDogUmVmcyB8IG51bGwgfSwgc2V0dGluZ3M6IFNldHRpbmdzKSB7XFxuICAgIGNvbnN0IHJvb3QgPSBuZXcgVGdkUGFpbnRlckdyb3VwKClcXG4gICAgY29udGV4dC5hZGQocm9vdClcXG4gICAgcmVmUmVmcy5jdXJyZW50ID0gYnVpbGRTY2VuZShjb250ZXh0LCBhc3NldHMsIHJvb3QsIHNldHRpbmdzKVxcbiAgICBjb250ZXh0LmNhbWVyYS5uZWFyID0gMC4xXFxuICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IDUwXFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb24gPSBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMywgNCwgNV0gfSkubG9va0F0KFswLCAwLCAwXSkub3JpZW50YXRpb25cXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg2LCA2KVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCByZWZDb250ZXh0ID0gUmVhY3QudXNlUmVmPFRnZENvbnRleHQgfCBudWxsPihudWxsKVxcbiAgICBjb25zdCByZWZSZWZzID0gUmVhY3QudXNlUmVmPFJlZnMgfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSBSZWFjdC51c2VTdGF0ZTxNb2RlPihcXFwiYm90aFxcXCIpXFxuICAgIGNvbnN0IFtzY2FsZSwgc2V0U2NhbGVdID0gUmVhY3QudXNlU3RhdGU8U2NhbGU+KFxcXCIxXFxcIilcXG4gICAgY29uc3QgW2JsdXIsIHNldEJsdXJdID0gUmVhY3QudXNlU3RhdGUoMilcXG4gICAgY29uc3QgW3JhZGl1cywgc2V0UmFkaXVzXSA9IFJlYWN0LnVzZVN0YXRlKDAuNSlcXG4gICAgLy8gU2FtZSBkZWZhdWx0IGFzIFRnZFBhaW50ZXJBbWJpZW50T2NjbHVzaW9uU2NyZWVuU3BhY2UuXFxuICAgIGNvbnN0IFtxdWFsaXR5LCBzZXRRdWFsaXR5XSA9IFJlYWN0LnVzZVN0YXRlPFF1YWxpdHk+KFxcXCJtZWRpdW1cXFwiKVxcbiAgICBjb25zdCBoYW5kbGVNb2RlQ2hhbmdlID0gKHZhbHVlOiBNb2RlKSA9PiB7XFxuICAgICAgICBzZXRNb2RlKHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3QgcmVmcyA9IHJlZlJlZnMuY3VycmVudFxcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFyZWZzKSByZXR1cm5cXG5cXG4gICAgICAgIGFjdGl2YXRlR3JvdXBzKHJlZnMsIHZhbHVlLCBibHVyKVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG4gICAgY29uc3QgaGFuZGxlQmx1ckNoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XFxuICAgICAgICBzZXRCbHVyKHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3QgcmVmcyA9IHJlZlJlZnMuY3VycmVudFxcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFyZWZzKSByZXR1cm5cXG5cXG4gICAgICAgIC8vIFRoZSBzaXplIG9mIHRoZSBibHVyIGlzIGJha2VkIGluIHRoZSBzaGFkZXI6IHdlIG5lZWQgbmV3IGZpbHRlcnMuXFxuICAgICAgICByZWZSZWZzLmN1cnJlbnQgPSByZWJ1aWxkU2NlbmUoY29udGV4dCwgcmVmcywgeyBtb2RlLCBzY2FsZSwgYmx1cjogdmFsdWUsIHJhZGl1cywgcXVhbGl0eSB9KVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG4gICAgY29uc3QgaGFuZGxlUmFkaXVzQ2hhbmdlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcXG4gICAgICAgIHNldFJhZGl1cyh2YWx1ZSlcXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcXG4gICAgICAgIGNvbnN0IHJlZnMgPSByZWZSZWZzLmN1cnJlbnRcXG4gICAgICAgIGlmICghY29udGV4dCB8fCAhcmVmcykgcmV0dXJuXFxuXFxuICAgICAgICByZWZzLmFvLnJhZGl1cyA9IHZhbHVlXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICBjb25zdCBoYW5kbGVTY2FsZUNoYW5nZSA9ICh2YWx1ZTogU2NhbGUpID0+IHtcXG4gICAgICAgIHNldFNjYWxlKHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3QgcmVmcyA9IHJlZlJlZnMuY3VycmVudFxcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFyZWZzKSByZXR1cm5cXG5cXG4gICAgICAgIGFwcGx5U2NhbGUocmVmcywgdmFsdWUpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICBjb25zdCBoYW5kbGVRdWFsaXR5Q2hhbmdlID0gKHZhbHVlOiBRdWFsaXR5KSA9PiB7XFxuICAgICAgICBzZXRRdWFsaXR5KHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3QgcmVmcyA9IHJlZlJlZnMuY3VycmVudFxcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFyZWZzKSByZXR1cm5cXG5cXG4gICAgICAgIC8vIFRoZSBudW1iZXIgb2Ygc2FtcGxlcyBpcyBiYWtlZCBpbiB0aGUgc2hhZGVyOiB3ZSBuZWVkIGEgbmV3IHBhaW50ZXIuXFxuICAgICAgICByZWZSZWZzLmN1cnJlbnQgPSByZWJ1aWxkU2NlbmUoY29udGV4dCwgcmVmcywgeyBtb2RlLCBzY2FsZSwgYmx1ciwgcmFkaXVzLCBxdWFsaXR5OiB2YWx1ZSB9KVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICAgICAgICAgIHJlZkNvbnRleHQuY3VycmVudCA9IGNvbnRleHRcXG4gICAgICAgICAgICAgICAgaW5pdChjb250ZXh0LCBhc3NldHMsIHJlZlJlZnMsIHsgbW9kZSwgc2NhbGUsIGJsdXIsIHJhZGl1cywgcXVhbGl0eSB9KVxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgYXNzZXRzPXt7IGdsYjogeyBzdXphbm5lOiBTdXphbm5lVVJMIH0gfX1cXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fVxcbiAgICAgICAgICAgIGdpem1vPlxcbiAgICAgICAgICAgIDxWaWV3UGFuZWxcXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cXFwiZmxleFxcXCJcXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCJcXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIlxcbiAgICAgICAgICAgICAgICBmbGV4V3JhcD1cXFwid3JhcFxcXCJcXG4gICAgICAgICAgICAgICAgZ2FwPVxcXCJTXFxcIlxcbiAgICAgICAgICAgICAgICB3aWR0aD1cXFwiNjQwcHhcXFwiXFxuICAgICAgICAgICAgICAgIG1heFdpZHRoPVxcXCIxMDAlXFxcIj5cXG4gICAgICAgICAgICAgICAgPFZpZXdPcHRpb25zIHZhbHVlPXttb2RlfSBvbkNoYW5nZT17aGFuZGxlTW9kZUNoYW5nZX0gbGFiZWw9XFxcIlZpZXdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcInNjZW5lXFxcIj5zY2VuZTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcImFvXFxcIj50ZXh0dXJlQU88L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJib3RoXFxcIj5ib3RoPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XFxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyBsYWJlbD1cXFwicXVhbGl0eVxcXCIgdmFsdWU9e3F1YWxpdHl9IG9uQ2hhbmdlPXtoYW5kbGVRdWFsaXR5Q2hhbmdlfT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJsb3dcXFwiPmxvdzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcIm1lZGl1bVxcXCI+bWVkaXVtPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwiaGlnaFxcXCI+aGlnaDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdPcHRpb25zPlxcbiAgICAgICAgICAgICAgICA8Vmlld09wdGlvbnMgbGFiZWw9XFxcInZpZXdwb3J0TWF0Y2hpbmdTY2FsZVxcXCIgdmFsdWU9e3NjYWxlfSBvbkNoYW5nZT17aGFuZGxlU2NhbGVDaGFuZ2V9PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcIjJcXFwiPjI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCIxXFxcIj4xPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwiMC41XFxcIj4xLzI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCIwLjI1XFxcIj4xLzQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcXFwiZmxleFxcXCIsIGdhcDogXFxcIjFlbVxcXCIsIHdpZHRoOiBcXFwiMTAwJVxcXCIgfX0+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld1NsaWRlclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtibHVyfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVCbHVyQ2hhbmdlfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezMyfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17KHZhbHVlKSA9PiBgYmx1cjogJHt2YWx1ZX1gfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGVcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld1NsaWRlclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyYWRpdXN9XFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGl1c0NoYW5nZX1cXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXsodmFsdWUpID0+IGByYWRpdXM6ICR7dmFsdWUudG9GaXhlZCgxKX1gfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGVcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgPC9WaWV3PlxcbiAgICApXFxufVxcblxcbi8qKlxcbiAqIENyZWF0ZSBhbGwgdGhlIHBhaW50ZXJzIG9mIHRoZSBzY2VuZSBhbmQgYWRkIHRoZW0gdG8gYHJvb3RgLlxcbiAqL1xcbmZ1bmN0aW9uIGJ1aWxkU2NlbmUoXFxuICAgIGNvbnRleHQ6IFRnZENvbnRleHQsXFxuICAgIGFzc2V0czogQXNzZXRzLFxcbiAgICByb290OiBUZ2RQYWludGVyR3JvdXAsXFxuICAgIHsgbW9kZSwgc2NhbGUsIGJsdXIsIHJhZGl1cywgcXVhbGl0eSB9OiBTZXR0aW5ncyxcXG4pOiBSZWZzIHtcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgIGNvbG9yOiBcXFwicmdiKDI1NSwgMjE1LCAxNzUpXFxcIixcXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgY29sb3I6IFswLjUsIDAuNSwgMC41LCAxXSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICAvLyBUaGUgcGxhbmUgbGllcyBhdCB5ID0gMCwgZmFjaW5nICtZLlxcbiAgICBjb25zdCBwbGFuZTogVGdkTWVzaCA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlQbGFuZSh7IHNpemVYOiAxMiwgc2l6ZVk6IDEyLCB2ZWNYOiBbMSwgMCwgMF0sIHZlY1k6IFswLCAwLCAtMV0gfSksXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbygpLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICB9XFxuICAgIGNvbnN0IHN1emFubmVHZW9tZXRyeSA9IGFzc2V0cy5nbGIuc3V6YW5uZS5tYWtlR2VvbWV0cnkoKVxcbiAgICBjb25zdCBbLCBzdXphbm5lTWluWV0gPSBzdXphbm5lR2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nQm94KCkubWluXFxuICAgIGNvbnN0IHN1emFubmU6IFRnZE1lc2ggPSB7XFxuICAgICAgICBnZW9tZXRyeTogc3V6YW5uZUdlb21ldHJ5LFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIEdBUCAtIHN1emFubmVNaW5ZLCAwXSwgc2NhbGU6IFsxLjIsIDEsIDEuMl0gfSksXFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH1cXG4gICAgY29uc3QgY3ViZXMgPSBbXFxuICAgICAgICBtYWtlQ3ViZShtYXRlcmlhbCwgWy0yLjUsIDAsIC0xXSwgMC4zKSxcXG4gICAgICAgIG1ha2VDdWJlKG1hdGVyaWFsLCBbMi4yLCAwLCAtMS41XSwgLTAuNSksXFxuICAgICAgICBtYWtlQ3ViZShtYXRlcmlhbCwgWy0xLjUsIDAsIDJdLCAwLjkpLFxcbiAgICAgICAgbWFrZUN1YmUobWF0ZXJpYWwsIFsyLCAwLCAxLjhdLCAwKSxcXG4gICAgICAgIG1ha2VDdWJlKG1hdGVyaWFsLCBbMCwgMCwgLTNdLCAwLjIpLFxcbiAgICBdXFxuICAgIGNvbnN0IG1lc2hlcyA9IFtwbGFuZSwgc3V6YW5uZSwgLi4uY3ViZXNdXFxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwgeyBtZXNoZXMgfSlcXG4gICAgY29uc3QgYW8gPSBuZXcgVGdkUGFpbnRlckFtYmllbnRPY2NsdXNpb25TY3JlZW5TcGFjZShjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlTm9ybWFsczogZGVmZXJyZWQudGV4dHVyZU5vcm1hbHMsXFxuICAgICAgICB0ZXh0dXJlRGVwdGg6IGRlZmVycmVkLnRleHR1cmVEZXB0aCxcXG4gICAgICAgIHF1YWxpdHksXFxuICAgICAgICByYWRpdXMsXFxuICAgICAgICBiaWFzOiAwLjAyLFxcbiAgICAgICAgdmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxLFxcbiAgICB9KVxcbiAgICAvLyBUaGUgc2NlbmUgaXMgcmVuZGVyZWQgaW50byBhIHRleHR1cmUsIHRvIGJlIGNvbWJpbmVkIHdpdGggdGV4dHVyZUFPIGxhdGVyLlxcbiAgICBjb25zdCB0ZXh0dXJlU2NlbmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpXFxuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlU2NlbmUsXFxuICAgICAgICBkZXB0aEJ1ZmZlcjogdHJ1ZSxcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4xLCAwLjIyLCAwLjMsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzT3JFcXVhbFxcXCIsXFxuICAgICAgICAgICAgICAgIGN1bGw6IFxcXCJiYWNrXFxcIixcXG4gICAgICAgICAgICAgICAgYmxlbmQ6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW25ldyBUZ2RQYWludGVyTWVzaGVzKGNvbnRleHQsIHsgbWVzaGVzIH0pXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIC8vIHRleHR1cmVBTyBoYXMgYSBzaW5nbGUgY2hhbm5lbCAoUjMyRik6IHdlIGRpc3BsYXkgaXQgaW4gc2hhZGVzIG9mIGdyZXkuXFxuICAgIGNvbnN0IGZpbHRlckdyZXkgPSBuZXcgVGdkRmlsdGVyKHtcXG4gICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xcXCJmbG9hdCBhbyA9IHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpLnI7XFxcIiwgXFxcIkZyYWdDb2xvciA9IHZlYzQodmVjMyhhbyksIDEuMCk7XFxcIl0sXFxuICAgIH0pXFxuICAgIC8vIEFwcGx5IHRoZSBhbWJpZW50IG9jY2x1c2lvbiB0byB0aGUgc2NlbmUgYnkgbXVsdGlwbHlpbmcgdGhlIGNvbG9ycy5cXG4gICAgY29uc3QgZmlsdGVyQm90aCA9IG5ldyBUZ2RGaWx0ZXIoe1xcbiAgICAgICAgdGV4dHVyZXM6IHsgdW5pVGV4dHVyZUFPOiBhby50ZXh0dXJlQU8gfSxcXG4gICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xcbiAgICAgICAgICAgIFxcXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVik7XFxcIixcXG4gICAgICAgICAgICBcXFwiZmxvYXQgYW8gPSB0ZXh0dXJlKHVuaVRleHR1cmVBTywgdmFyVVYpLnI7XFxcIixcXG4gICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gdmVjNChjb2xvci5yZ2IgKiBhbywgY29sb3IuYSk7XFxcIixcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGdyb3VwczogUmVjb3JkPE1vZGUsIFRnZFBhaW50ZXJHcm91cD4gPSB7XFxuICAgICAgICBzY2VuZTogbmV3IFRnZFBhaW50ZXJHcm91cChbbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwgeyB0ZXh0dXJlOiB0ZXh0dXJlU2NlbmUsIGZsaXBZOiB0cnVlIH0pXSksXFxuICAgICAgICBhbzogbmV3IFRnZFBhaW50ZXJHcm91cChbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwgeyB0ZXh0dXJlOiBhby50ZXh0dXJlQU8sIGZpbHRlcnM6IFtmaWx0ZXJHcmV5XSwgZmxpcFk6IHRydWUgfSksXFxuICAgICAgICBdKSxcXG4gICAgICAgIGJvdGg6IG5ldyBUZ2RQYWludGVyR3JvdXAoW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHsgdGV4dHVyZTogdGV4dHVyZVNjZW5lLCBmaWx0ZXJzOiBbZmlsdGVyQm90aF0sIGZsaXBZOiB0cnVlIH0pLFxcbiAgICAgICAgXSksXFxuICAgIH1cXG4gICAgLy8gdGV4dHVyZUFPIHVzZXMgUjMyRiB3aXRoIE5FQVJFU1QgZmlsdGVyaW5nLCBidXQgdGhlIGJsdXIgcmVsaWVzIG9uIGJpbGluZWFyIGludGVycG9sYXRpb24uXFxuICAgIC8vIFNvIHdlIGNvcHkgaXQgaW50byBhIFJHQkE4IHRleHR1cmUgd2l0aCBMSU5FQVIgZmlsdGVyaW5nIGZpcnN0LlxcbiAgICBjb25zdCB0ZXh0dXJlQU9MaW5lYXIgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICB3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgICAgIHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBjb3B5ID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlQU9MaW5lYXIsXFxuICAgICAgICBjaGlsZHJlbjogW25ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHsgdGV4dHVyZTogYW8udGV4dHVyZUFPLCBmbGlwWTogdHJ1ZSB9KV0sXFxuICAgIH0pXFxuICAgIC8vIEhvcml6b250YWwgYW5kIHZlcnRpY2FsIGJsdXJzLlxcbiAgICBjb25zdCBibHVycyA9IFRnZEZpbHRlckJsdXIuY3JlYXRlUGFpcih7IHNpemU6IGJsdXIgfSlcXG4gICAgLy8gSGVyZSwgdW5pVGV4dHVyZSBpcyB0aGUgYmx1cnJlZCB0ZXh0dXJlQU8uXFxuICAgIGNvbnN0IGZpbHRlckJvdGhCbHVyID0gbmV3IFRnZEZpbHRlcih7XFxuICAgICAgICB0ZXh0dXJlczogeyB1bmlUZXh0dXJlU2NlbmU6IHRleHR1cmVTY2VuZSB9LFxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxuICAgICAgICAgICAgXFxcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmVTY2VuZSwgdmFyVVYpO1xcXCIsXFxuICAgICAgICAgICAgXFxcImZsb2F0IGFvID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVikucjtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLnJnYiAqIGFvLCBjb2xvci5hKTtcXFwiLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgY29uc3QgZ3JvdXBzQmx1cjogUmVjb3JkPE1vZGUsIFRnZFBhaW50ZXJHcm91cD4gPSB7XFxuICAgICAgICBzY2VuZTogZ3JvdXBzLnNjZW5lLFxcbiAgICAgICAgYW86IG5ldyBUZ2RQYWludGVyR3JvdXAoW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHsgdGV4dHVyZTogdGV4dHVyZUFPTGluZWFyLCBmaWx0ZXJzOiBbLi4uYmx1cnMsIGZpbHRlckdyZXldLCBmbGlwWTogdHJ1ZSB9KSxcXG4gICAgICAgIF0pLFxcbiAgICAgICAgYm90aDogbmV3IFRnZFBhaW50ZXJHcm91cChbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICB0ZXh0dXJlOiB0ZXh0dXJlQU9MaW5lYXIsXFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IFsuLi5ibHVycywgZmlsdGVyQm90aEJsdXJdLFxcbiAgICAgICAgICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0pLFxcbiAgICB9XFxuICAgIGNvbnN0IHJlZnM6IFJlZnMgPSB7XFxuICAgICAgICBhc3NldHMsXFxuICAgICAgICByb290LFxcbiAgICAgICAgdGV4dHVyZXM6IFt0ZXh0dXJlU2NlbmUsIHRleHR1cmVBT0xpbmVhcl0sXFxuICAgICAgICBncm91cHMsXFxuICAgICAgICBncm91cHNCbHVyLFxcbiAgICAgICAgY29weSxcXG4gICAgICAgIGJsdXJzLFxcbiAgICAgICAgYW8sXFxuICAgIH1cXG4gICAgLy8gU3RhcnQgd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZXMgb2YgdGhlIFVJIGNvbnRyb2xzLlxcbiAgICBhY3RpdmF0ZUdyb3VwcyhyZWZzLCBtb2RlLCBibHVyKVxcbiAgICBhcHBseVNjYWxlKHJlZnMsIHNjYWxlKVxcbiAgICByb290LmFkZChcXG4gICAgICAgIC8vIE11c3QgY29tZSBmaXJzdDogdGhlIG1lc2hlcyBoYXZlIHRvIG1vdmUgYmVmb3JlIGJlaW5nIHBhaW50ZWQuXFxuICAgICAgICBtYWtlQm91bmNlKHN1emFubmUpLFxcbiAgICAgICAgZGVmZXJyZWQsXFxuICAgICAgICBhbyxcXG4gICAgICAgIGZyYW1lYnVmZmVyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgICAgIGJsZW5kOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2NvcHksIGdyb3Vwcy5zY2VuZSwgZ3JvdXBzLmFvLCBncm91cHMuYm90aCwgZ3JvdXBzQmx1ci5hbywgZ3JvdXBzQmx1ci5ib3RoXSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIHJldHVybiByZWZzXFxufVxcblxcbi8qKlxcbiAqIFJlbGVhc2UgYWxsIHRoZSBHUFUgcmVzb3VyY2VzIG9mIHRoZSBzY2VuZSwgYW5kIGJ1aWxkIGl0IGFnYWluLlxcbiAqL1xcbmZ1bmN0aW9uIHJlYnVpbGRTY2VuZShjb250ZXh0OiBUZ2RDb250ZXh0LCB7IGFzc2V0cywgcm9vdCwgdGV4dHVyZXMgfTogUmVmcywgc2V0dGluZ3M6IFNldHRpbmdzKTogUmVmcyB7XFxuICAgIC8vIERlbGV0ZXMgdGhlIHBhaW50ZXJzIHRvby5cXG4gICAgcm9vdC5yZW1vdmVBbGwoKVxcbiAgICBmb3IgKGNvbnN0IHRleHR1cmUgb2YgdGV4dHVyZXMpIHRleHR1cmUuZGVsZXRlKClcXG4gICAgcmV0dXJuIGJ1aWxkU2NlbmUoY29udGV4dCwgYXNzZXRzLCByb290LCBzZXR0aW5ncylcXG59XFxuXFxuLyoqXFxuICogT25seSB0aGUgZ3JvdXAgb2YgdGhlIGN1cnJlbnQgYG1vZGVgIGlzIGFjdGl2ZS5cXG4gKiBUaGUgY29weSBvZiB0ZXh0dXJlQU8gaXMgb25seSBuZWVkZWQgd2hlbiB3ZSBibHVyIGl0IChgYmx1ciA+IDBgKS5cXG4gKi9cXG5mdW5jdGlvbiBhY3RpdmF0ZUdyb3Vwcyh7IGdyb3VwcywgZ3JvdXBzQmx1ciwgY29weSB9OiBSZWZzLCBtb2RlOiBNb2RlLCBibHVyOiBudW1iZXIpIHtcXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZ3JvdXBzKSBhcyBNb2RlW10pIHtcXG4gICAgICAgIGdyb3Vwc1trZXldLmFjdGl2ZSA9IGZhbHNlXFxuICAgICAgICBncm91cHNCbHVyW2tleV0uYWN0aXZlID0gZmFsc2VcXG4gICAgfVxcbiAgICA7KGJsdXIgPiAwID8gZ3JvdXBzQmx1ciA6IGdyb3VwcylbbW9kZV0uYWN0aXZlID0gdHJ1ZVxcbiAgICBjb3B5LmFjdGl2ZSA9IGJsdXIgPiAwICYmIG1vZGUgIT09IFxcXCJzY2VuZVxcXCJcXG59XFxuXFxuZnVuY3Rpb24gYXBwbHlTY2FsZSh7IGFvLCBibHVycyB9OiBSZWZzLCBzY2FsZTogU2NhbGUpIHtcXG4gICAgLy8gdGV4dHVyZUFPIHdpbGwgYmUgcmVzaXplZCBvbiBuZXh0IHBhaW50LlxcbiAgICBhby52aWV3cG9ydE1hdGNoaW5nU2NhbGUgPSBOdW1iZXIoc2NhbGUpXFxuICAgIC8vIFRoZSBibHVyIGlzIGFwcGxpZWQgYXQgZnVsbCByZXNvbHV0aW9uOiB3ZSB3aWRlbiBpdCB0byBjb3ZlciB0aGUgc2FtZSBudW1iZXIgb2YgQU8gcGl4ZWxzLlxcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBibHVycykgZmlsdGVyLnN0cmVuZ3RoID0gMSAvIE51bWJlcihzY2FsZSlcXG59XFxuXFxuLyoqXFxuICogU3V6YW5uZSBib3VuY2VzIGZyb20gaGVyIGN1cnJlbnQgWSB0byBZICsgMSwgYW5kIGJhY2ssIGluIG9uZSBzZWNvbmQuXFxuICovXFxuZnVuY3Rpb24gbWFrZUJvdW5jZShtZXNoOiBUZ2RNZXNoKSB7XFxuICAgIGNvbnN0IFt4LCB5LCB6XSA9IG1lc2gudHJhbnNmby5wb3NpdGlvblxcbiAgICByZXR1cm4gKHRpbWU6IG51bWJlcikgPT4ge1xcbiAgICAgICAgbWVzaC50cmFuc2ZvLnNldFBvc2l0aW9uKHgsIHkgKyBNYXRoLmFicyhNYXRoLnNpbihNYXRoLlBJICogdGltZSkpLCB6KVxcbiAgICB9XFxufVxcblxcbi8qKlxcbiAqIEEgY3ViZSBvZiBzaXplIDEgZmxvYXRpbmcgYEdBUGAgYWJvdmUgdGhlIHBsYW5lLFxcbiAqIHJvdGF0ZWQgYnkgYGFuZ2xlYCByYWRpYW5zIGFyb3VuZCB0aGUgWSBheGlzLlxcbiAqL1xcbmZ1bmN0aW9uIG1ha2VDdWJlKG1hdGVyaWFsOiBUZ2RNYXRlcmlhbERpZmZ1c2UsIFt4LCB5LCB6XTogQXJyYXlOdW1iZXIzLCBhbmdsZTogbnVtYmVyKTogVGdkTWVzaCB7XFxuICAgIGNvbnN0IHRyYW5zZm8gPSBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbeCwgeSArIDAuNSArIEdBUCwgel0gfSlcXG4gICAgdHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nbGUpXFxuICAgIHJldHVybiB7XFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KCksXFxuICAgICAgICB0cmFuc2ZvLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICB9XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZEZpbHRlciIsIlRnZEZpbHRlckJsdXIiLCJUZ2RHZW9tZXRyeUJveCIsIlRnZEdlb21ldHJ5UGxhbmUiLCJUZ2RMaWdodCIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJBbWJpZW50T2NjbHVzaW9uU2NyZWVuU3BhY2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nIiwiVGdkUGFpbnRlckZpbHRlciIsIlRnZFBhaW50ZXJGcmFtZWJ1ZmZlciIsIlRnZFBhaW50ZXJHcm91cCIsIlRnZFBhaW50ZXJNZXNoZXMiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJUZ2RUcmFuc2ZvIiwiVmlld09wdGlvbnMiLCJWaWV3UGFuZWwiLCJWaWV3U2xpZGVyIiwiUmVhY3QiLCJWaWV3IiwiU3V6YW5uZVVSTCIsIkdBUCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwicmVmUmVmcyIsInNldHRpbmdzIiwicm9vdCIsImJ1aWxkU2NlbmUiLCJEZW1vIiwicmVmQ29udGV4dCIsIl9SZWFjdF91c2VTdGF0ZSIsIm1vZGUiLCJzZXRNb2RlIiwiX1JlYWN0X3VzZVN0YXRlMSIsInNjYWxlIiwic2V0U2NhbGUiLCJfUmVhY3RfdXNlU3RhdGUyIiwiYmx1ciIsInNldEJsdXIiLCJfUmVhY3RfdXNlU3RhdGUzIiwicmFkaXVzIiwic2V0UmFkaXVzIiwiX1JlYWN0X3VzZVN0YXRlNCIsInF1YWxpdHkiLCJzZXRRdWFsaXR5IiwiaGFuZGxlTW9kZUNoYW5nZSIsInZhbHVlIiwicmVmcyIsImFjdGl2YXRlR3JvdXBzIiwiaGFuZGxlQmx1ckNoYW5nZSIsInJlYnVpbGRTY2VuZSIsImhhbmRsZVJhZGl1c0NoYW5nZSIsImhhbmRsZVNjYWxlQ2hhbmdlIiwiYXBwbHlTY2FsZSIsImhhbmRsZVF1YWxpdHlDaGFuZ2UiLCJvblJlYWR5IiwidGV4dCIsInBhcmFtIiwibWF0ZXJpYWwiLCJwbGFuZSIsInN1emFubmVHZW9tZXRyeSIsIl9zdXphbm5lR2VvbWV0cnlfY29tcHV0ZUJvdW5kaW5nQm94X21pbiIsInN1emFubmVNaW5ZIiwic3V6YW5uZSIsImN1YmVzIiwibWFrZUN1YmUiLCJtZXNoZXMiLCJkZWZlcnJlZCIsImFvIiwidGV4dHVyZVNjZW5lIiwiZnJhbWVidWZmZXIiLCJmaWx0ZXJHcmV5IiwiZmlsdGVyQm90aCIsImdyb3VwcyIsInRleHR1cmVBT0xpbmVhciIsImNvcHkiLCJibHVycyIsImZpbHRlckJvdGhCbHVyIiwiZ3JvdXBzQmx1ciIsIm1ha2VCb3VuY2UiLCJ0ZXh0dXJlcyIsIl9pdGVyYXRvckVycm9yIiwidGV4dHVyZSIsIk9iamVjdCIsImtleSIsIk51bWJlciIsImZpbHRlciIsIm1lc2giLCJfbWVzaF90cmFuc2ZvX3Bvc2l0aW9uIiwieCIsInkiLCJ6IiwidGltZSIsIk1hdGgiLCJfcGFyYW0iLCJhbmdsZSIsInRyYW5zZm8iLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0J1QjtBQUMyQztBQUN6QztBQUNnQztBQUNQO0FBZ0NsRCw2Q0FBNkMsR0FDN0MsSUFBTXNCLE1BQU07QUFFWixTQUFTQyxLQUFLQyxPQUFtQixFQUFFQyxNQUFjLEVBQUVDLE9BQWlDLEVBQUVDLFFBQWtCO0lBQ3BHLDRCQUE0QjtJQUM1QixJQUFNQyxPQUFPLElBQUlqQiwrQ0FBZUE7SUFDaENhLFFBQVEsR0FBRyxDQUFDSTtJQUNaRixRQUFRLE9BQU8sR0FBR0csV0FBV0wsU0FBU0MsUUFBUUcsTUFBTUQ7SUFDcERILFFBQVEsTUFBTSxDQUFDLElBQUksR0FBRztJQUN0QkEsUUFBUSxNQUFNLENBQUMsR0FBRyxHQUFHO0lBQ3JCQSxRQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUlULDBDQUFVQSxDQUFDO1FBQUUs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