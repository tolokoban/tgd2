"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_glass_page_mdx-src_components_demo_CodeViewer_CodeViewer_modul-2f12db"], {
99340(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var _assets_mesh_specimen_glb__rspack_import_6 = __webpack_require__(51746);
/* import */ var _assets_cubemap_sky_contrast_posX_webp__rspack_import_7 = __webpack_require__(10618);
/* import */ var _assets_cubemap_sky_contrast_posY_webp__rspack_import_8 = __webpack_require__(24645);
/* import */ var _assets_cubemap_sky_contrast_posZ_webp__rspack_import_9 = __webpack_require__(85720);
/* import */ var _assets_cubemap_sky_contrast_negX_webp__rspack_import_10 = __webpack_require__(28814);
/* import */ var _assets_cubemap_sky_contrast_negY_webp__rspack_import_11 = __webpack_require__(51561);
/* import */ var _assets_cubemap_sky_contrast_negZ_webp__rspack_import_12 = __webpack_require__(30892);













function init(context, assets) {
    context.camera.fitSpaceAtTarget(14, 1.1);
    const color = [1, 1, 1, 1];
    const skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ,
    });
    const material = new _tolokoban_tgd__rspack_import_1.TgdMaterialGlass({
        color,
        ambientColor: skybox,
    });
    const mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.specimen,
        material,
    });
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0.1, 0.2, 0.3, 1],
        depth: 1,
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [mesh],
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic((time) => {
        mesh.transfo.setEulerRotation(0, Math.sin(time) * 20, 0);
        const color = new _tolokoban_tgd__rspack_import_1.TgdColor(0.1, 0.2, 0.3, 1);
        color.rgb2hsl().H = time * 0.1;
        color.hsl2rgb();
        clear.red = color.R;
        clear.green = color.G;
        clear.blue = color.B;
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
        opacityMin(value) {
            material.opacityMin = value;
            context.paint();
        },
        opacityMax(value) {
            material.opacityMax = value;
            context.paint();
        },
    };
}
function Demo() {
    const ref = react__rspack_import_3_default().useRef(null);
    const srv = ref.current;
    const [specularExponent, setSpecularExponent] = (0,_utils_hooks_float__rspack_import_4.useFloat)(2.2, srv?.specularExponent);
    const [specularIntensity, setSpecularIntensity] = (0,_utils_hooks_float__rspack_import_4.useFloat)(2, srv?.specularIntensity);
    const [opacityMin, setOpacityMin] = (0,_utils_hooks_float__rspack_import_4.useFloat)(0, srv?.opacityMin);
    const [opacityMax, setOpacityMax] = (0,_utils_hooks_float__rspack_import_4.useFloat)(0.05, srv?.opacityMax);
    return ((0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_demo_Tgd__rspack_import_2["default"], { onReady: (scene, assets) => {
                ref.current = init(scene, assets);
            }, assets: {
                glb: {
                    specimen: _assets_mesh_specimen_glb__rspack_import_6,
                },
                image: {
                    posX: _assets_cubemap_sky_contrast_posX_webp__rspack_import_7,
                    posY: _assets_cubemap_sky_contrast_posY_webp__rspack_import_8,
                    posZ: _assets_cubemap_sky_contrast_posZ_webp__rspack_import_9,
                    negX: _assets_cubemap_sky_contrast_negX_webp__rspack_import_10,
                    negY: _assets_cubemap_sky_contrast_negY_webp__rspack_import_11,
                    negZ: _assets_cubemap_sky_contrast_negZ_webp__rspack_import_12,
                },
            }, controller: {
                inertiaOrbit: 1000,
            }, children: [(0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_5.ViewPanel, { display: "flex", "flex-wrap": "wrap", justifyContent: "space-around", alignItems: "center", gap: "S", width: "600px", maxWidth: "600px", children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_5.ViewInputNumber, { label: "specularExponent", value: specularExponent, onChange: setSpecularExponent }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_5.ViewInputNumber, { label: "specularIntensity", value: specularIntensity, onChange: setSpecularIntensity })] }), (0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_5.ViewPanel, { display: "flex", "flex-wrap": "wrap", justifyContent: "space-around", alignItems: "center", gap: "S", width: "600px", maxWidth: "600px", children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_5.ViewInputNumber, { label: "opacityMin", value: opacityMin, onChange: setOpacityMin }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_5.ViewInputNumber, { label: "opacityMax", value: opacityMax, onChange: setOpacityMax })] })] }) }));
}


},
4159(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _material_demo__rspack_import_4 = __webpack_require__(99340);





const FOCUS = { "Initializing WebGL": "    const color: ArrayNumber4 = [1, 1, 1, 1]\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const material = new TgdMaterialGlass({\n        color,\n        ambientColor: skybox,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.specimen,\n        material,\n    })" };
const FULL = "import {\n    ArrayNumber4,\n    TgdContext,\n    TgdPainterClear,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    tgdCalcRandom3,\n    webglPresetDepth,\n    TgdTextureCube,\n    TgdPainterLogic,\n    TgdPainterSkybox,\n    TgdMaterialGlass,\n    TgdColor,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport React from \"react\"\nimport { useFloat } from \"@/utils/hooks/float\"\nimport { ViewButton, ViewInputNumber, ViewPanel } from \"@tolokoban/ui\"\n\nimport SpecimenURL from \"@/assets/mesh/specimen.glb\"\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\"\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\"\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\"\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\"\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\"\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.fitSpaceAtTarget(14, 1.1)\n    const color: ArrayNumber4 = [1, 1, 1, 1]\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const material = new TgdMaterialGlass({\n        color,\n        ambientColor: skybox,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.specimen,\n        material,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [mesh],\n        }),\n        new TgdPainterLogic((time) => {\n            mesh.transfo.setEulerRotation(0, Math.sin(time) * 20, 0)\n            const color = new TgdColor(0.1, 0.2, 0.3, 1)\n            color.rgb2hsl().H = time * 0.1\n            color.hsl2rgb()\n            clear.red = color.R\n            clear.green = color.G\n            clear.blue = color.B\n        }),\n    )\n    context.play()\n    return {\n        specularExponent(value: number) {\n            material.specularExponent = value\n            context.paint()\n        },\n        specularIntensity(value: number) {\n            material.specularIntensity = value\n            context.paint()\n        },\n        opacityMin(value: number) {\n            material.opacityMin = value\n            context.paint()\n        },\n        opacityMax(value: number) {\n            material.opacityMax = value\n            context.paint()\n        },\n    }\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null)\n    const srv = ref.current\n    const [specularExponent, setSpecularExponent] = useFloat(2.2, srv?.specularExponent)\n    const [specularIntensity, setSpecularIntensity] = useFloat(2, srv?.specularIntensity)\n    const [opacityMin, setOpacityMin] = useFloat(0, srv?.opacityMin)\n    const [opacityMax, setOpacityMax] = useFloat(0.05, srv?.opacityMax)\n    return (\n        <div>\n            <View\n                onReady={(scene: TgdContext, assets: Assets) => {\n                    ref.current = init(scene, assets)\n                }}\n                assets={{\n                    glb: {\n                        specimen: SpecimenURL,\n                    },\n                    image: {\n                        posX: PosX,\n                        posY: PosY,\n                        posZ: PosZ,\n                        negX: NegX,\n                        negY: NegY,\n                        negZ: NegZ,\n                    },\n                }}\n                controller={{\n                    inertiaOrbit: 1000,\n                }}>\n                <ViewPanel\n                    display=\"flex\"\n                    flex-wrap=\"wrap\"\n                    justifyContent=\"space-around\"\n                    alignItems=\"center\"\n                    gap=\"S\"\n                    width=\"600px\"\n                    maxWidth=\"600px\">\n                    <ViewInputNumber label=\"specularExponent\" value={specularExponent} onChange={setSpecularExponent} />\n                    <ViewInputNumber\n                        label=\"specularIntensity\"\n                        value={specularIntensity}\n                        onChange={setSpecularIntensity}\n                    />\n                </ViewPanel>\n                <ViewPanel\n                    display=\"flex\"\n                    flex-wrap=\"wrap\"\n                    justifyContent=\"space-around\"\n                    alignItems=\"center\"\n                    gap=\"S\"\n                    width=\"600px\"\n                    maxWidth=\"600px\">\n                    <ViewInputNumber label=\"opacityMin\" value={opacityMin} onChange={setOpacityMin} />\n                    <ViewInputNumber label=\"opacityMax\" value={opacityMax} onChange={setOpacityMax} />\n                </ViewPanel>\n            </View>\n        </div>\n    )\n}\n";
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
51746(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/specimen.65584ec4a9a7b42d.glb";

},
56287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _material__rspack_import_1 = __webpack_require__(4159);
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
                children: "Glass material"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "",
                        children: "Glass material"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 5,
                        columnNumber: 1
                    }, this),
                    " will turn off the depth test and use an alpha blending."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                    lineNumber: 13,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9nbGFzc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC0yZjEyZGIuN2JiN2RjYzVlZGQ3NDkwMy5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9nbGFzcy9fbWF0ZXJpYWwvX21hdGVyaWFsLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9nbGFzcy9fbWF0ZXJpYWwvaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy91dGlscy9ob29rcy9mbG9hdC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvZ2xhc3MvcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBcnJheU51bWJlcjQsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICB0Z2RDYWxjUmFuZG9tMyxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxuICAgIFRnZFRleHR1cmVDdWJlLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxuICAgIFRnZE1hdGVyaWFsR2xhc3MsXG4gICAgVGdkQ29sb3IsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFwiQC91dGlscy9ob29rcy9mbG9hdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uLCBWaWV3SW5wdXROdW1iZXIsIFZpZXdQYW5lbCB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IFNwZWNpbWVuVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3NwZWNpbWVuLmdsYlwiXG5pbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXCJcbmltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcIlxuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1oud2VicFwiXG5pbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXCJcbmltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcIlxuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1oud2VicFwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDE0LCAxLjEpXG4gICAgLy8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMSwgMSwgMSwgMV1cbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxuICAgIH0pXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbGFzcyh7XG4gICAgICAgIGNvbG9yLFxuICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcbiAgICB9KVxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3BlY2ltZW4sXG4gICAgICAgIG1hdGVyaWFsLFxuICAgIH0pXG4gICAgLy8gI2VuZFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xuICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgTWF0aC5zaW4odGltZSkgKiAyMCwgMClcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbmV3IFRnZENvbG9yKDAuMSwgMC4yLCAwLjMsIDEpXG4gICAgICAgICAgICBjb2xvci5yZ2IyaHNsKCkuSCA9IHRpbWUgKiAwLjFcbiAgICAgICAgICAgIGNvbG9yLmhzbDJyZ2IoKVxuICAgICAgICAgICAgY2xlYXIucmVkID0gY29sb3IuUlxuICAgICAgICAgICAgY2xlYXIuZ3JlZW4gPSBjb2xvci5HXG4gICAgICAgICAgICBjbGVhci5ibHVlID0gY29sb3IuQlxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICByZXR1cm4ge1xuICAgICAgICBzcGVjdWxhckV4cG9uZW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgICAgIHNwZWN1bGFySW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNwZWN1bGFySW50ZW5zaXR5ID0gdmFsdWVcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICB9LFxuICAgICAgICBvcGFjaXR5TWluKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIG1hdGVyaWFsLm9wYWNpdHlNaW4gPSB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgICAgIG9wYWNpdHlNYXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgbWF0ZXJpYWwub3BhY2l0eU1heCA9IHZhbHVlXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCBzcnYgPSByZWYuY3VycmVudFxuICAgIGNvbnN0IFtzcGVjdWxhckV4cG9uZW50LCBzZXRTcGVjdWxhckV4cG9uZW50XSA9IHVzZUZsb2F0KDIuMiwgc3J2Py5zcGVjdWxhckV4cG9uZW50KVxuICAgIGNvbnN0IFtzcGVjdWxhckludGVuc2l0eSwgc2V0U3BlY3VsYXJJbnRlbnNpdHldID0gdXNlRmxvYXQoMiwgc3J2Py5zcGVjdWxhckludGVuc2l0eSlcbiAgICBjb25zdCBbb3BhY2l0eU1pbiwgc2V0T3BhY2l0eU1pbl0gPSB1c2VGbG9hdCgwLCBzcnY/Lm9wYWNpdHlNaW4pXG4gICAgY29uc3QgW29wYWNpdHlNYXgsIHNldE9wYWNpdHlNYXhdID0gdXNlRmxvYXQoMC4wNSwgc3J2Py5vcGFjaXR5TWF4KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICAgICAgZ2xiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaW1lbjogU3BlY2ltZW5VUkwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NYOiBQb3NYLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWTogUG9zWSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1o6IFBvc1osXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdYOiBOZWdYLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnWTogTmVnWSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ1o6IE5lZ1osXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGdhcD1cIlNcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI2MDBweFwiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwic3BlY3VsYXJFeHBvbmVudFwiIHZhbHVlPXtzcGVjdWxhckV4cG9uZW50fSBvbkNoYW5nZT17c2V0U3BlY3VsYXJFeHBvbmVudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzcGVjdWxhckludGVuc2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3BlY3VsYXJJbnRlbnNpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U3BlY3VsYXJJbnRlbnNpdHl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBnYXA9XCJTXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI2MDBweFwiXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNjAwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cIm9wYWNpdHlNaW5cIiB2YWx1ZT17b3BhY2l0eU1pbn0gb25DaGFuZ2U9e3NldE9wYWNpdHlNaW59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgbGFiZWw9XCJvcGFjaXR5TWF4XCIgdmFsdWU9e29wYWNpdHlNYXh9IG9uQ2hhbmdlPXtzZXRPcGFjaXR5TWF4fSAvPlxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vX21hdGVyaWFsLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMSwgMSwgMSwgMV1cXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbGFzcyh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zcGVjaW1lbixcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICB9KVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgQXJyYXlOdW1iZXI0LFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICB0Z2RDYWxjUmFuZG9tMyxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG4gICAgVGdkVGV4dHVyZUN1YmUsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlclNreWJveCxcXG4gICAgVGdkTWF0ZXJpYWxHbGFzcyxcXG4gICAgVGdkQ29sb3IsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcXFwiQC91dGlscy9ob29rcy9mbG9hdFxcXCJcXG5pbXBvcnQgeyBWaWV3QnV0dG9uLCBWaWV3SW5wdXROdW1iZXIsIFZpZXdQYW5lbCB9IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiXFxuXFxuaW1wb3J0IFNwZWNpbWVuVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvc3BlY2ltZW4uZ2xiXFxcIlxcbmltcG9ydCBQb3NYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1gud2VicFxcXCJcXG5pbXBvcnQgUG9zWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcXFwiXFxuaW1wb3J0IFBvc1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXFxcIlxcbmltcG9ydCBOZWdYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1gud2VicFxcXCJcXG5pbXBvcnQgTmVnWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxNCwgMS4xKVxcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWzEsIDEsIDEsIDFdXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsR2xhc3Moe1xcbiAgICAgICAgY29sb3IsXFxuICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcXG4gICAgfSlcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3BlY2ltZW4sXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgICAgICAgIG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIE1hdGguc2luKHRpbWUpICogMjAsIDApXFxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBuZXcgVGdkQ29sb3IoMC4xLCAwLjIsIDAuMywgMSlcXG4gICAgICAgICAgICBjb2xvci5yZ2IyaHNsKCkuSCA9IHRpbWUgKiAwLjFcXG4gICAgICAgICAgICBjb2xvci5oc2wycmdiKClcXG4gICAgICAgICAgICBjbGVhci5yZWQgPSBjb2xvci5SXFxuICAgICAgICAgICAgY2xlYXIuZ3JlZW4gPSBjb2xvci5HXFxuICAgICAgICAgICAgY2xlYXIuYmx1ZSA9IGNvbG9yLkJcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIHJldHVybiB7XFxuICAgICAgICBzcGVjdWxhckV4cG9uZW50KHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBtYXRlcmlhbC5zcGVjdWxhckV4cG9uZW50ID0gdmFsdWVcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0sXFxuICAgICAgICBzcGVjdWxhckludGVuc2l0eSh2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgICAgIG9wYWNpdHlNaW4odmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIG1hdGVyaWFsLm9wYWNpdHlNaW4gPSB2YWx1ZVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgICAgIG9wYWNpdHlNYXgodmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIG1hdGVyaWFsLm9wYWNpdHlNYXggPSB2YWx1ZVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBzcnYgPSByZWYuY3VycmVudFxcbiAgICBjb25zdCBbc3BlY3VsYXJFeHBvbmVudCwgc2V0U3BlY3VsYXJFeHBvbmVudF0gPSB1c2VGbG9hdCgyLjIsIHNydj8uc3BlY3VsYXJFeHBvbmVudClcXG4gICAgY29uc3QgW3NwZWN1bGFySW50ZW5zaXR5LCBzZXRTcGVjdWxhckludGVuc2l0eV0gPSB1c2VGbG9hdCgyLCBzcnY/LnNwZWN1bGFySW50ZW5zaXR5KVxcbiAgICBjb25zdCBbb3BhY2l0eU1pbiwgc2V0T3BhY2l0eU1pbl0gPSB1c2VGbG9hdCgwLCBzcnY/Lm9wYWNpdHlNaW4pXFxuICAgIGNvbnN0IFtvcGFjaXR5TWF4LCBzZXRPcGFjaXR5TWF4XSA9IHVzZUZsb2F0KDAuMDUsIHNydj8ub3BhY2l0eU1heClcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICAgICAgb25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2ltZW46IFNwZWNpbWVuVVJMLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWDogUG9zWCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NZOiBQb3NZLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1o6IFBvc1osXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnWDogTmVnWCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdZOiBOZWdZLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ1o6IE5lZ1osXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVxcXCJmbGV4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwPVxcXCJ3cmFwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGdhcD1cXFwiU1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVxcXCI2MDBweFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVxcXCI2MDBweFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJzcGVjdWxhckV4cG9uZW50XFxcIiB2YWx1ZT17c3BlY3VsYXJFeHBvbmVudH0gb25DaGFuZ2U9e3NldFNwZWN1bGFyRXhwb25lbnR9IC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcInNwZWN1bGFySW50ZW5zaXR5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcGVjdWxhckludGVuc2l0eX1cXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U3BlY3VsYXJJbnRlbnNpdHl9XFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbFxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cXFwiZmxleFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcD1cXFwid3JhcFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICBnYXA9XFxcIlNcXFwiXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cXFwiNjAwcHhcXFwiXFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD1cXFwiNjAwcHhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cXFwib3BhY2l0eU1pblxcXCIgdmFsdWU9e29wYWNpdHlNaW59IG9uQ2hhbmdlPXtzZXRPcGFjaXR5TWlufSAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cXFwib3BhY2l0eU1heFxcXCIgdmFsdWU9e29wYWNpdHlNYXh9IG9uQ2hhbmdlPXtzZXRPcGFjaXR5TWF4fSAvPlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgICAgICA8L1ZpZXc+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGbG9hdChcbiAgICBpbml0aWFsVmFsdWU6IG51bWJlcixcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkLFxuKTogW3ZhbHVlOiBudW1iZXIsIHNldFZhbHVlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZF0ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBvbkNoYW5nZT8uKHZhbHVlKSwgW3ZhbHVlXSlcbiAgICByZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV1cbn1cbiIsIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXVCO0FBQzZCO0FBQzNCO0FBQ3FCO0FBQ3dCO0FBRWxCO0FBQ007QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRTFELFNBQVMsSUFBSSxDQUFDLE9BQW1CLEVBQUUsTUFBYztJQUM3QyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7SUFFeEMsTUFBTSxLQUFLLEdBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sTUFBTSxHQUFHLElBQUksOENBQWMsQ0FBQyxPQUFPLEVBQUU7UUFDdkMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtRQUM1QixTQUFTLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQzVCLFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDNUIsU0FB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