"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_global_page_mdx-src_components_demo_CodeViewer_CodeViewer_modu-4f7c1d"], {
51407(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _utils_hooks_float__rspack_import_4 = __webpack_require__(7546);
/* import */ var _tolokoban_ui__rspack_import_5 = __webpack_require__(62430);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_6 = __webpack_require__(21278);
/* import */ var _assets_cubemap_sky_contrast_posX_webp__rspack_import_7 = __webpack_require__(10618);
/* import */ var _assets_cubemap_sky_contrast_posY_webp__rspack_import_8 = __webpack_require__(24645);
/* import */ var _assets_cubemap_sky_contrast_posZ_webp__rspack_import_9 = __webpack_require__(85720);
/* import */ var _assets_cubemap_sky_contrast_negX_webp__rspack_import_10 = __webpack_require__(28814);
/* import */ var _assets_cubemap_sky_contrast_negY_webp__rspack_import_11 = __webpack_require__(51561);
/* import */ var _assets_cubemap_sky_contrast_negZ_webp__rspack_import_12 = __webpack_require__(30892);













function init(context, assets) {
    const color = [...(0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom3)(), 1];
    const skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ,
    });
    const material = new _tolokoban_tgd__rspack_import_1.TgdMaterialGlobal({
        color,
        ambientColor: skybox,
    });
    const mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material,
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0.3, 0.3, 0.3, 1],
        depth: 1,
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterSkybox(context, {
        camera: context.camera,
        texture: {
            imagePosX: assets.image.posX,
            imagePosY: assets.image.posY,
            imagePosZ: assets.image.posZ,
            imageNegX: assets.image.negX,
            imageNegY: assets.image.negY,
            imageNegZ: assets.image.negZ,
        },
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [mesh],
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic((time) => {
        mesh.transfo.setEulerRotation(0, -time * 20, 0);
    }));
    context.play();
    return {
        specularExponent(value) {
            material.specularExponent = value;
            context.paint();
        },
        specularIntensity(value) {
            material.specularIntensity = value;
            context.paint();
        },
    };
}
function Demo() {
    const ref = react__rspack_import_3_default().useRef(null);
    const srv = ref.current;
    const [specularExponent, setSpecularExponent] = (0,_utils_hooks_float__rspack_import_4.useFloat)(2.2, srv?.specularExponent);
    const [specularIntensity, setSpecularIntensity] = (0,_utils_hooks_float__rspack_import_4.useFloat)(2, srv?.specularIntensity);
    return ((0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_demo_Tgd__rspack_import_2["default"], { onReady: (scene, assets) => {
                ref.current = init(scene, assets);
            }, assets: {
                glb: {
                    suzane: _assets_mesh_suzanne_glb__rspack_import_6,
                },
                image: {
                    posX: _assets_cubemap_sky_contrast_posX_webp__rspack_import_7,
                    posY: _assets_cubemap_sky_contrast_posY_webp__rspack_import_8,
                    posZ: _assets_cubemap_sky_contrast_posZ_webp__rspack_import_9,
                    negX: _assets_cubemap_sky_contrast_negX_webp__rspack_import_10,
                    negY: _assets_cubemap_sky_contrast_negY_webp__rspack_import_11,
                    negZ: _assets_cubemap_sky_contrast_negZ_webp__rspack_import_12,
                },
            }, gizmo: true, controller: {
                inertiaOrbit: 1000,
            }, children: [(0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_5.ViewPanel, { display: "flex", justifyContent: "space-around", alignItems: "center", children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_5.ViewInputNumber, { label: "specularExponent", value: specularExponent, onChange: setSpecularExponent }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_5.ViewInputNumber, { label: "specularIntensity", value: specularIntensity, onChange: setSpecularIntensity })] }), (0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_5.ViewPanel, { display: "flex", justifyContent: "space-around", alignItems: "center", children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_5.ViewButton, { variant: "text", color: "primary-5", onClick: () => {
                                setSpecularExponent(1);
                                setSpecularIntensity(1);
                            }, children: "Brushed Metal" }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_5.ViewButton, { variant: "text", color: "primary-5", onClick: () => {
                                setSpecularExponent(0.25);
                                setSpecularIntensity(1.5);
                            }, children: "Soft Light" }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_5.ViewButton, { variant: "text", color: "primary-5", onClick: () => {
                                setSpecularExponent(2.2);
                                setSpecularIntensity(2);
                            }, children: "Car Paint" }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_5.ViewButton, { variant: "text", color: "primary-5", onClick: () => {
                                setSpecularExponent(0);
                                setSpecularIntensity(1);
                            }, children: "Plastic" })] })] }) }));
}


},
77902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _material_demo__rspack_import_4 = __webpack_require__(51407);





const FOCUS = { "Initializing WebGL": "    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const material = new TgdMaterialGlobal({\n        color,\n        ambientColor: skybox,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material,\n    })" };
const FULL = "import {\n    ArrayNumber4,\n    TgdContext,\n    TgdPainterClear,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    tgdCalcRandom3,\n    webglPresetDepth,\n    TgdTextureCube,\n    TgdPainterLogic,\n    TgdPainterSkybox,\n    TgdMaterialGlobal,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport React from \"react\"\nimport { useFloat } from \"@/utils/hooks/float\"\nimport { ViewButton, ViewInputNumber, ViewPanel } from \"@tolokoban/ui\"\n\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\"\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\"\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\"\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\"\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\"\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const material = new TgdMaterialGlobal({\n        color,\n        ambientColor: skybox,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material,\n    })\n    context.add(\n        new TgdPainterClear(context, {\n            color: [0.3, 0.3, 0.3, 1],\n            depth: 1,\n        }),\n        new TgdPainterSkybox(context, {\n            camera: context.camera,\n            texture: {\n                imagePosX: assets.image.posX,\n                imagePosY: assets.image.posY,\n                imagePosZ: assets.image.posZ,\n                imageNegX: assets.image.negX,\n                imageNegY: assets.image.negY,\n                imageNegZ: assets.image.negZ,\n            },\n        }),\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [mesh],\n        }),\n        new TgdPainterLogic((time) => {\n            mesh.transfo.setEulerRotation(0, -time * 20, 0)\n        }),\n    )\n    context.play()\n    return {\n        specularExponent(value: number) {\n            material.specularExponent = value\n            context.paint()\n        },\n        specularIntensity(value: number) {\n            material.specularIntensity = value\n            context.paint()\n        },\n    }\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null)\n    const srv = ref.current\n    const [specularExponent, setSpecularExponent] = useFloat(2.2, srv?.specularExponent)\n    const [specularIntensity, setSpecularIntensity] = useFloat(2, srv?.specularIntensity)\n    return (\n        <div>\n            <View\n                onReady={(scene: TgdContext, assets: Assets) => {\n                    ref.current = init(scene, assets)\n                }}\n                assets={{\n                    glb: {\n                        suzane: SuzaneURL,\n                    },\n                    image: {\n                        posX: PosX,\n                        posY: PosY,\n                        posZ: PosZ,\n                        negX: NegX,\n                        negY: NegY,\n                        negZ: NegZ,\n                    },\n                }}\n                gizmo\n                controller={{\n                    inertiaOrbit: 1000,\n                }}>\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\">\n                    <ViewInputNumber label=\"specularExponent\" value={specularExponent} onChange={setSpecularExponent} />\n                    <ViewInputNumber\n                        label=\"specularIntensity\"\n                        value={specularIntensity}\n                        onChange={setSpecularIntensity}\n                    />\n                </ViewPanel>\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\">\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(1)\n                            setSpecularIntensity(1)\n                        }}>\n                        Brushed Metal\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(0.25)\n                            setSpecularIntensity(1.5)\n                        }}>\n                        Soft Light\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(2.2)\n                            setSpecularIntensity(2)\n                        }}>\n                        Car Paint\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(0)\n                            setSpecularIntensity(1)\n                        }}>\n                        Plastic\n                    </ViewButton>\n                </ViewPanel>\n            </View>\n        </div>\n    )\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_material_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
7546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useFloat: () => (useFloat)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/* import */ var react__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_0);

function useFloat(initialValue, onChange) {
    const [value, setValue] = react__rspack_import_0_default().useState(initialValue);
    react__rspack_import_0_default().useEffect(() => onChange?.(value), [value]);
    return [value, setValue];
}


},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

},
19524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _material__rspack_import_1 = __webpack_require__(77902);
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
                children: "Global material"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "",
                        children: "Global material"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                        lineNumber: 9,
                        columnNumber: 5
                    }, this),
                    " is a versatile one, but one of the slowest because it relies on several textures."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                    lineNumber: 13,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9nbG9iYWxfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdS00ZjdjMWQuNDY1NjQwNDEzZjVmODBmNy5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9nbG9iYWwvX21hdGVyaWFsL19tYXRlcmlhbC5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvZ2xvYmFsL19tYXRlcmlhbC9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3V0aWxzL2hvb2tzL2Zsb2F0LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9nbG9iYWwvcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBcnJheU51bWJlcjQsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICB0Z2RDYWxjUmFuZG9tMyxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxuICAgIFRnZFRleHR1cmVDdWJlLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxuICAgIFRnZE1hdGVyaWFsR2xvYmFsLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcIkAvdXRpbHMvaG9va3MvZmxvYXRcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiwgVmlld0lucHV0TnVtYmVyLCBWaWV3UGFuZWwgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuaW1wb3J0IFBvc1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1gud2VicFwiXG5pbXBvcnQgUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWS53ZWJwXCJcbmltcG9ydCBQb3NaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NaLndlYnBcIlxuaW1wb3J0IE5lZ1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1gud2VicFwiXG5pbXBvcnQgTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWS53ZWJwXCJcbmltcG9ydCBOZWdaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdaLndlYnBcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxuICAgIH0pXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xuICAgICAgICBjb2xvcixcbiAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXG4gICAgfSlcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcbiAgICAgICAgbWF0ZXJpYWwsXG4gICAgfSlcbiAgICAvLyAjZW5kXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xuICAgICAgICAgICAgY2FtZXJhOiBjb250ZXh0LmNhbWVyYSxcbiAgICAgICAgICAgIHRleHR1cmU6IHtcbiAgICAgICAgICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxuICAgICAgICAgICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXG4gICAgICAgICAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcbiAgICAgICAgICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxuICAgICAgICAgICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXG4gICAgICAgICAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xuICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgLXRpbWUgKiAyMCwgMClcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3BlY3VsYXJFeHBvbmVudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBtYXRlcmlhbC5zcGVjdWxhckV4cG9uZW50ID0gdmFsdWVcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICB9LFxuICAgICAgICBzcGVjdWxhckludGVuc2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBtYXRlcmlhbC5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCBzcnYgPSByZWYuY3VycmVudFxuICAgIGNvbnN0IFtzcGVjdWxhckV4cG9uZW50LCBzZXRTcGVjdWxhckV4cG9uZW50XSA9IHVzZUZsb2F0KDIuMiwgc3J2Py5zcGVjdWxhckV4cG9uZW50KVxuICAgIGNvbnN0IFtzcGVjdWxhckludGVuc2l0eSwgc2V0U3BlY3VsYXJJbnRlbnNpdHldID0gdXNlRmxvYXQoMiwgc3J2Py5zcGVjdWxhckludGVuc2l0eSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgICAgICBvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gaW5pdChzY2VuZSwgYXNzZXRzKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgICAgIGdsYjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3V6YW5lOiBTdXphbmVVUkwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NYOiBQb3NYLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWTogUG9zWSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1o6IFBvc1osXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdYOiBOZWdYLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnWTogTmVnWSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ1o6IE5lZ1osXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBnaXptb1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cInNwZWN1bGFyRXhwb25lbnRcIiB2YWx1ZT17c3BlY3VsYXJFeHBvbmVudH0gb25DaGFuZ2U9e3NldFNwZWN1bGFyRXhwb25lbnR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic3BlY3VsYXJJbnRlbnNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NwZWN1bGFySW50ZW5zaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNwZWN1bGFySW50ZW5zaXR5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgQnJ1c2hlZCBNZXRhbFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnktNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCgwLjI1KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDEuNSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgU29mdCBMaWdodFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnktNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCgyLjIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FyIFBhaW50XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgUGxhc3RpY1xuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9fbWF0ZXJpYWwuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XCIgICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXVxcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIEFycmF5TnVtYmVyNCxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgdGdkQ2FsY1JhbmRvbTMsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxuICAgIFRnZFRleHR1cmVDdWJlLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJTa3lib3gsXFxuICAgIFRnZE1hdGVyaWFsR2xvYmFsLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCBSZWFjdCBmcm9tIFxcXCJyZWFjdFxcXCJcXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXFxcIkAvdXRpbHMvaG9va3MvZmxvYXRcXFwiXFxuaW1wb3J0IHsgVmlld0J1dHRvbiwgVmlld0lucHV0TnVtYmVyLCBWaWV3UGFuZWwgfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3VpXFxcIlxcblxcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlxcXCJcXG5pbXBvcnQgUG9zWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NYLndlYnBcXFwiXFxuaW1wb3J0IFBvc1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWS53ZWJwXFxcIlxcbmltcG9ydCBQb3NaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1oud2VicFxcXCJcXG5pbXBvcnQgTmVnWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdYLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWS53ZWJwXFxcIlxcbmltcG9ydCBOZWdaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1oud2VicFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xcbiAgICAgICAgY29sb3IsXFxuICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcXG4gICAgfSlcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xcbiAgICAgICAgICAgIGNhbWVyYTogY29udGV4dC5jYW1lcmEsXFxuICAgICAgICAgICAgdGV4dHVyZToge1xcbiAgICAgICAgICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcbiAgICAgICAgICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcbiAgICAgICAgICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcbiAgICAgICAgICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcbiAgICAgICAgICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcbiAgICAgICAgICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgICAgICAgIG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIC10aW1lICogMjAsIDApXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICByZXR1cm4ge1xcbiAgICAgICAgc3BlY3VsYXJFeHBvbmVudCh2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICAgICAgc3BlY3VsYXJJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIG1hdGVyaWFsLnNwZWN1bGFySW50ZW5zaXR5ID0gdmFsdWVcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0sXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbClcXG4gICAgY29uc3Qgc3J2ID0gcmVmLmN1cnJlbnRcXG4gICAgY29uc3QgW3NwZWN1bGFyRXhwb25lbnQsIHNldFNwZWN1bGFyRXhwb25lbnRdID0gdXNlRmxvYXQoMi4yLCBzcnY/LnNwZWN1bGFyRXhwb25lbnQpXFxuICAgIGNvbnN0IFtzcGVjdWxhckludGVuc2l0eSwgc2V0U3BlY3VsYXJJbnRlbnNpdHldID0gdXNlRmxvYXQoMiwgc3J2Py5zcGVjdWxhckludGVuc2l0eSlcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICAgICAgb25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3V6YW5lOiBTdXphbmVVUkwsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NYOiBQb3NYLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1k6IFBvc1ksXFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWjogUG9zWixcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdYOiBOZWdYLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ1k6IE5lZ1ksXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnWjogTmVnWixcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cXFwiZmxleFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgbGFiZWw9XFxcInNwZWN1bGFyRXhwb25lbnRcXFwiIHZhbHVlPXtzcGVjdWxhckV4cG9uZW50fSBvbkNoYW5nZT17c2V0U3BlY3VsYXJFeHBvbmVudH0gLz5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwic3BlY3VsYXJJbnRlbnNpdHlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NwZWN1bGFySW50ZW5zaXR5fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTcGVjdWxhckludGVuc2l0eX1cXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XFxcImZsZXhcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInByaW1hcnktNVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMSlcXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBCcnVzaGVkIE1ldGFsXFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInByaW1hcnktNVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMC4yNSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMS41KVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvZnQgTGlnaHRcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCgyLjIpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDIpXFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FyIFBhaW50XFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInByaW1hcnktNVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMSlcXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFzdGljXFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgIDwvVmlldz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZsb2F0KFxuICAgIGluaXRpYWxWYWx1ZTogbnVtYmVyLFxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQsXG4pOiBbdmFsdWU6IG51bWJlciwgc2V0VmFsdWU6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkXSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IG9uQ2hhbmdlPy4odmFsdWUpLCBbdmFsdWVdKVxuICAgIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXVxufVxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZdUI7QUFDNkI7QUFDM0I7QUFDcUI7QUFDd0I7QUFFckI7QUFDUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFMUQsU0FBUyxJQUFJLENBQUMsT0FBbUIsRUFBRSxNQUFjO0lBRTdDLE1BQU0sS0FBSyxH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