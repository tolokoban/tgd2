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
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ,
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
const FULL = "import {\n    ArrayNumber4,\n    TgdContext,\n    TgdPainterClear,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    tgdCalcRandom3,\n    webglPresetDepth,\n    TgdTextureCube,\n    TgdPainterLogic,\n    TgdPainterSkybox,\n    TgdMaterialGlobal,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport React from \"react\"\nimport { useFloat } from \"@/utils/hooks/float\"\nimport { ViewButton, ViewInputNumber, ViewPanel } from \"@tolokoban/ui\"\n\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\"\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\"\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\"\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\"\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\"\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const material = new TgdMaterialGlobal({\n        color,\n        ambientColor: skybox,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material,\n    })\n    context.add(\n        new TgdPainterClear(context, {\n            color: [0.3, 0.3, 0.3, 1],\n            depth: 1,\n        }),\n        new TgdPainterSkybox(context, {\n            camera: context.camera,\n            imagePosX: assets.image.posX,\n            imagePosY: assets.image.posY,\n            imagePosZ: assets.image.posZ,\n            imageNegX: assets.image.negX,\n            imageNegY: assets.image.negY,\n            imageNegZ: assets.image.negZ,\n        }),\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [mesh],\n        }),\n        new TgdPainterLogic((time) => {\n            mesh.transfo.setEulerRotation(0, -time * 20, 0)\n        }),\n    )\n    context.play()\n    return {\n        specularExponent(value: number) {\n            material.specularExponent = value\n            context.paint()\n        },\n        specularIntensity(value: number) {\n            material.specularIntensity = value\n            context.paint()\n        },\n    }\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null)\n    const srv = ref.current\n    const [specularExponent, setSpecularExponent] = useFloat(2.2, srv?.specularExponent)\n    const [specularIntensity, setSpecularIntensity] = useFloat(2, srv?.specularIntensity)\n    return (\n        <div>\n            <View\n                onReady={(scene: TgdContext, assets: Assets) => {\n                    ref.current = init(scene, assets)\n                }}\n                assets={{\n                    glb: {\n                        suzane: SuzaneURL,\n                    },\n                    image: {\n                        posX: PosX,\n                        posY: PosY,\n                        posZ: PosZ,\n                        negX: NegX,\n                        negY: NegY,\n                        negZ: NegZ,\n                    },\n                }}\n                gizmo\n                controller={{\n                    inertiaOrbit: 1000,\n                }}>\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\">\n                    <ViewInputNumber label=\"specularExponent\" value={specularExponent} onChange={setSpecularExponent} />\n                    <ViewInputNumber\n                        label=\"specularIntensity\"\n                        value={specularIntensity}\n                        onChange={setSpecularIntensity}\n                    />\n                </ViewPanel>\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\">\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(1)\n                            setSpecularIntensity(1)\n                        }}>\n                        Brushed Metal\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(0.25)\n                            setSpecularIntensity(1.5)\n                        }}>\n                        Soft Light\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(2.2)\n                            setSpecularIntensity(2)\n                        }}>\n                        Car Paint\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(0)\n                            setSpecularIntensity(1)\n                        }}>\n                        Plastic\n                    </ViewButton>\n                </ViewPanel>\n            </View>\n        </div>\n    )\n}\n";
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                        lineNumber: 9,
                        columnNumber: 5
                    }, this),
                    " is a versatile one, but one of the slowest because it relies on several textures."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                    lineNumber: 13,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/global/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9nbG9iYWxfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdS00ZjdjMWQuMDUwODNiYzRkZWE1YTI2NS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsb2JhbC9fbWF0ZXJpYWwvX21hdGVyaWFsLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsb2JhbC9fbWF0ZXJpYWwvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3V0aWxzL2hvb2tzL2Zsb2F0LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsb2JhbC9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFycmF5TnVtYmVyNCxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIHRnZENhbGNSYW5kb20zLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG4gICAgVGdkVGV4dHVyZUN1YmUsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJTa3lib3gsXG4gICAgVGdkTWF0ZXJpYWxHbG9iYWwsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFwiQC91dGlscy9ob29rcy9mbG9hdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uLCBWaWV3SW5wdXROdW1iZXIsIFZpZXdQYW5lbCB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5pbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXCJcbmltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcIlxuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1oud2VicFwiXG5pbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXCJcbmltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcIlxuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1oud2VicFwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXVxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXG4gICAgfSlcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XG4gICAgICAgIGNvbG9yLFxuICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcbiAgICB9KVxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxuICAgICAgICBtYXRlcmlhbCxcbiAgICB9KVxuICAgIC8vICNlbmRcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxuICAgICAgICAgICAgZGVwdGg6IDEsXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XG4gICAgICAgICAgICBjYW1lcmE6IGNvbnRleHQuY2FtZXJhLFxuICAgICAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcbiAgICAgICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXG4gICAgICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxuICAgICAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcbiAgICAgICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXG4gICAgICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcbiAgICAgICAgICAgIG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIC10aW1lICogMjAsIDApXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICAgICAgc3BlY3VsYXJJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpXG4gICAgY29uc3Qgc3J2ID0gcmVmLmN1cnJlbnRcbiAgICBjb25zdCBbc3BlY3VsYXJFeHBvbmVudCwgc2V0U3BlY3VsYXJFeHBvbmVudF0gPSB1c2VGbG9hdCgyLjIsIHNydj8uc3BlY3VsYXJFeHBvbmVudClcbiAgICBjb25zdCBbc3BlY3VsYXJJbnRlbnNpdHksIHNldFNwZWN1bGFySW50ZW5zaXR5XSA9IHVzZUZsb2F0KDIsIHNydj8uc3BlY3VsYXJJbnRlbnNpdHkpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgb25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1emFuZTogU3V6YW5lVVJMLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWDogUG9zWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1k6IFBvc1ksXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NaOiBQb3NaLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnWDogTmVnWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ1k6IE5lZ1ksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdaOiBOZWdaLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZ2l6bW9cbiAgICAgICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgbGFiZWw9XCJzcGVjdWxhckV4cG9uZW50XCIgdmFsdWU9e3NwZWN1bGFyRXhwb25lbnR9IG9uQ2hhbmdlPXtzZXRTcGVjdWxhckV4cG9uZW50fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNwZWN1bGFySW50ZW5zaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcGVjdWxhckludGVuc2l0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTcGVjdWxhckludGVuc2l0eX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnktNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJydXNoZWQgTWV0YWxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMC4yNSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgxLjUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNvZnQgTGlnaHRcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMi4yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhciBQYWludFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnktNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXN0aWNcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vX21hdGVyaWFsLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xcbiAgICAgICAgY29sb3IsXFxuICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcXG4gICAgfSlcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH0pXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBBcnJheU51bWJlcjQsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIHRnZENhbGNSYW5kb20zLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxcbiAgICBUZ2RNYXRlcmlhbEdsb2JhbCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiXFxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFxcXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XFxcIlxcbmltcG9ydCB7IFZpZXdCdXR0b24sIFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi91aVxcXCJcXG5cXG5pbXBvcnQgU3V6YW5lVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcXFwiXFxuaW1wb3J0IFBvc1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXFxcIlxcbmltcG9ydCBQb3NZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFxcXCJcXG5pbXBvcnQgUG9zWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NaLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXFxcIlxcbmltcG9ydCBOZWdZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFxcXCJcXG5pbXBvcnQgTmVnWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdaLndlYnBcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWy4uLnRnZENhbGNSYW5kb20zKCksIDFdXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcXG4gICAgICAgIGNvbG9yLFxcbiAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcXG4gICAgICAgICAgICBjYW1lcmE6IGNvbnRleHQuY2FtZXJhLFxcbiAgICAgICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG4gICAgICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcbiAgICAgICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG4gICAgICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCAtdGltZSAqIDIwLCAwKVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG4gICAgcmV0dXJuIHtcXG4gICAgICAgIHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIG1hdGVyaWFsLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgICAgIHNwZWN1bGFySW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBtYXRlcmlhbC5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XFxuICAgIGNvbnN0IFtzcGVjdWxhckV4cG9uZW50LCBzZXRTcGVjdWxhckV4cG9uZW50XSA9IHVzZUZsb2F0KDIuMiwgc3J2Py5zcGVjdWxhckV4cG9uZW50KVxcbiAgICBjb25zdCBbc3BlY3VsYXJJbnRlbnNpdHksIHNldFNwZWN1bGFySW50ZW5zaXR5XSA9IHVzZUZsb2F0KDIsIHNydj8uc3BlY3VsYXJJbnRlbnNpdHkpXFxuICAgIHJldHVybiAoXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgICAgIG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gaW5pdChzY2VuZSwgYXNzZXRzKVxcbiAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgICAgIGdsYjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1emFuZTogU3V6YW5lVVJMLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWDogUG9zWCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NZOiBQb3NZLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1o6IFBvc1osXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnWDogTmVnWCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdZOiBOZWdZLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ1o6IE5lZ1osXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICBnaXptb1xcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XFxcImZsZXhcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJzcGVjdWxhckV4cG9uZW50XFxcIiB2YWx1ZT17c3BlY3VsYXJFeHBvbmVudH0gb25DaGFuZ2U9e3NldFNwZWN1bGFyRXhwb25lbnR9IC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcInNwZWN1bGFySW50ZW5zaXR5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcGVjdWxhckludGVuc2l0eX1cXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U3BlY3VsYXJJbnRlbnNpdHl9XFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVxcXCJmbGV4XFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDEpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDEpXFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgQnJ1c2hlZCBNZXRhbFxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDAuMjUpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDEuNSlcXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBTb2Z0IExpZ2h0XFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInByaW1hcnktNVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMi4yKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgyKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENhciBQYWludFxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDApXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDEpXFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxhc3RpY1xcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgICAgICA8L1ZpZXc+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGbG9hdChcbiAgICBpbml0aWFsVmFsdWU6IG51bWJlcixcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkLFxuKTogW3ZhbHVlOiBudW1iZXIsIHNldFZhbHVlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZF0ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBvbkNoYW5nZT8uKHZhbHVlKSwgW3ZhbHVlXSlcbiAgICByZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV1cbn1cbiIsIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXVCO0FBQzZCO0FBQzNCO0FBQ3FCO0FBQ3dCO0FBRXJCO0FBQ1M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRTFELFNBQVMsSUFBSSxDQUFDLE9BQW1CLEVBQUUsTUFBYztJQUU3QyxNQUFNLEtBQUssR0FBaUIsQ0FBQyxHQUFHLGtEQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEQsTUFBTSxNQUFNLEdBQUcsSUFBSSw4Q0FBYyxDQUFDLE9BQU8sRUFBRTtRQUN2QyxTQUFTLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQzVC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