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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                        lineNumber: 5,
                        columnNumber: 1
                    }, this),
                    " will turn off the depth test and use an alpha blending."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                    lineNumber: 13,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx",
                lineNumber: 13,
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
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/glass/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9nbGFzc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC0yZjEyZGIuMmI5ZDYwMTg0OThiOGViYS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2dsYXNzL19tYXRlcmlhbC9fbWF0ZXJpYWwuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvZ2xhc3MvX21hdGVyaWFsL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy91dGlscy9ob29rcy9mbG9hdC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9nbGFzcy9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFycmF5TnVtYmVyNCxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIHRnZENhbGNSYW5kb20zLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG4gICAgVGdkVGV4dHVyZUN1YmUsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJTa3lib3gsXG4gICAgVGdkTWF0ZXJpYWxHbGFzcyxcbiAgICBUZ2RDb2xvcixcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24sIFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5pbXBvcnQgU3BlY2ltZW5VUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3BlY2ltZW4uZ2xiXCJcbmltcG9ydCBQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NYLndlYnBcIlxuaW1wb3J0IFBvc1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFwiXG5pbXBvcnQgUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXCJcbmltcG9ydCBOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdYLndlYnBcIlxuaW1wb3J0IE5lZ1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFwiXG5pbXBvcnQgTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMTQsIDEuMSlcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsxLCAxLCAxLCAxXVxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXG4gICAgfSlcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsYXNzKHtcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxuICAgIH0pXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zcGVjaW1lbixcbiAgICAgICAgbWF0ZXJpYWwsXG4gICAgfSlcbiAgICAvLyAjZW5kXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG4gICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCBNYXRoLnNpbih0aW1lKSAqIDIwLCAwKVxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBuZXcgVGdkQ29sb3IoMC4xLCAwLjIsIDAuMywgMSlcbiAgICAgICAgICAgIGNvbG9yLnJnYjJoc2woKS5IID0gdGltZSAqIDAuMVxuICAgICAgICAgICAgY29sb3IuaHNsMnJnYigpXG4gICAgICAgICAgICBjbGVhci5yZWQgPSBjb2xvci5SXG4gICAgICAgICAgICBjbGVhci5ncmVlbiA9IGNvbG9yLkdcbiAgICAgICAgICAgIGNsZWFyLmJsdWUgPSBjb2xvci5CXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICAgICAgc3BlY3VsYXJJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgICAgIG9wYWNpdHlNaW4odmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgbWF0ZXJpYWwub3BhY2l0eU1pbiA9IHZhbHVlXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICAgICAgb3BhY2l0eU1heCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBtYXRlcmlhbC5vcGFjaXR5TWF4ID0gdmFsdWVcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICB9LFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XG4gICAgY29uc3QgW3NwZWN1bGFyRXhwb25lbnQsIHNldFNwZWN1bGFyRXhwb25lbnRdID0gdXNlRmxvYXQoMi4yLCBzcnY/LnNwZWN1bGFyRXhwb25lbnQpXG4gICAgY29uc3QgW3NwZWN1bGFySW50ZW5zaXR5LCBzZXRTcGVjdWxhckludGVuc2l0eV0gPSB1c2VGbG9hdCgyLCBzcnY/LnNwZWN1bGFySW50ZW5zaXR5KVxuICAgIGNvbnN0IFtvcGFjaXR5TWluLCBzZXRPcGFjaXR5TWluXSA9IHVzZUZsb2F0KDAsIHNydj8ub3BhY2l0eU1pbilcbiAgICBjb25zdCBbb3BhY2l0eU1heCwgc2V0T3BhY2l0eU1heF0gPSB1c2VGbG9hdCgwLjA1LCBzcnY/Lm9wYWNpdHlNYXgpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgb25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpbWVuOiBTcGVjaW1lblVSTCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1g6IFBvc1gsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NZOiBQb3NZLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWjogUG9zWixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ1g6IE5lZ1gsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdZOiBOZWdZLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnWjogTmVnWixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgZ2FwPVwiU1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjAwcHhcIlxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjYwMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgbGFiZWw9XCJzcGVjdWxhckV4cG9uZW50XCIgdmFsdWU9e3NwZWN1bGFyRXhwb25lbnR9IG9uQ2hhbmdlPXtzZXRTcGVjdWxhckV4cG9uZW50fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNwZWN1bGFySW50ZW5zaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcGVjdWxhckludGVuc2l0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTcGVjdWxhckludGVuc2l0eX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGdhcD1cIlNcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI2MDBweFwiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwib3BhY2l0eU1pblwiIHZhbHVlPXtvcGFjaXR5TWlufSBvbkNoYW5nZT17c2V0T3BhY2l0eU1pbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cIm9wYWNpdHlNYXhcIiB2YWx1ZT17b3BhY2l0eU1heH0gb25DaGFuZ2U9e3NldE9wYWNpdHlNYXh9IC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9fbWF0ZXJpYWwuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XCIgICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsxLCAxLCAxLCAxXVxcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsYXNzKHtcXG4gICAgICAgIGNvbG9yLFxcbiAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnNwZWNpbWVuLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH0pXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBBcnJheU51bWJlcjQsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIHRnZENhbGNSYW5kb20zLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxcbiAgICBUZ2RNYXRlcmlhbEdsYXNzLFxcbiAgICBUZ2RDb2xvcixcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiXFxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFxcXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XFxcIlxcbmltcG9ydCB7IFZpZXdCdXR0b24sIFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi91aVxcXCJcXG5cXG5pbXBvcnQgU3BlY2ltZW5VUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zcGVjaW1lbi5nbGJcXFwiXFxuaW1wb3J0IFBvc1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXFxcIlxcbmltcG9ydCBQb3NZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFxcXCJcXG5pbXBvcnQgUG9zWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NaLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXFxcIlxcbmltcG9ydCBOZWdZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFxcXCJcXG5pbXBvcnQgTmVnWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdaLndlYnBcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDE0LCAxLjEpXFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMSwgMSwgMSwgMV1cXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbGFzcyh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zcGVjaW1lbixcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgTWF0aC5zaW4odGltZSkgKiAyMCwgMClcXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG5ldyBUZ2RDb2xvcigwLjEsIDAuMiwgMC4zLCAxKVxcbiAgICAgICAgICAgIGNvbG9yLnJnYjJoc2woKS5IID0gdGltZSAqIDAuMVxcbiAgICAgICAgICAgIGNvbG9yLmhzbDJyZ2IoKVxcbiAgICAgICAgICAgIGNsZWFyLnJlZCA9IGNvbG9yLlJcXG4gICAgICAgICAgICBjbGVhci5ncmVlbiA9IGNvbG9yLkdcXG4gICAgICAgICAgICBjbGVhci5ibHVlID0gY29sb3IuQlxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG4gICAgcmV0dXJuIHtcXG4gICAgICAgIHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIG1hdGVyaWFsLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgICAgIHNwZWN1bGFySW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBtYXRlcmlhbC5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICAgICAgb3BhY2l0eU1pbih2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgbWF0ZXJpYWwub3BhY2l0eU1pbiA9IHZhbHVlXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICAgICAgb3BhY2l0eU1heCh2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgbWF0ZXJpYWwub3BhY2l0eU1heCA9IHZhbHVlXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XFxuICAgIGNvbnN0IFtzcGVjdWxhckV4cG9uZW50LCBzZXRTcGVjdWxhckV4cG9uZW50XSA9IHVzZUZsb2F0KDIuMiwgc3J2Py5zcGVjdWxhckV4cG9uZW50KVxcbiAgICBjb25zdCBbc3BlY3VsYXJJbnRlbnNpdHksIHNldFNwZWN1bGFySW50ZW5zaXR5XSA9IHVzZUZsb2F0KDIsIHNydj8uc3BlY3VsYXJJbnRlbnNpdHkpXFxuICAgIGNvbnN0IFtvcGFjaXR5TWluLCBzZXRPcGFjaXR5TWluXSA9IHVzZUZsb2F0KDAsIHNydj8ub3BhY2l0eU1pbilcXG4gICAgY29uc3QgW29wYWNpdHlNYXgsIHNldE9wYWNpdHlNYXhdID0gdXNlRmxvYXQoMC4wNSwgc3J2Py5vcGFjaXR5TWF4KVxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgICAgICBvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaW1lbjogU3BlY2ltZW5VUkwsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NYOiBQb3NYLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1k6IFBvc1ksXFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWjogUG9zWixcXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdYOiBOZWdYLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ1k6IE5lZ1ksXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnWjogTmVnWixcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWxcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XFxcImZsZXhcXFwiXFxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA9XFxcIndyYXBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZ2FwPVxcXCJTXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XFxcIjYwMHB4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XFxcIjYwMHB4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgbGFiZWw9XFxcInNwZWN1bGFyRXhwb25lbnRcXFwiIHZhbHVlPXtzcGVjdWxhckV4cG9uZW50fSBvbkNoYW5nZT17c2V0U3BlY3VsYXJFeHBvbmVudH0gLz5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwic3BlY3VsYXJJbnRlbnNpdHlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NwZWN1bGFySW50ZW5zaXR5fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTcGVjdWxhckludGVuc2l0eX1cXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVxcXCJmbGV4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwPVxcXCJ3cmFwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGdhcD1cXFwiU1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVxcXCI2MDBweFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVxcXCI2MDBweFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJvcGFjaXR5TWluXFxcIiB2YWx1ZT17b3BhY2l0eU1pbn0gb25DaGFuZ2U9e3NldE9wYWNpdHlNaW59IC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJvcGFjaXR5TWF4XFxcIiB2YWx1ZT17b3BhY2l0eU1heH0gb25DaGFuZ2U9e3NldE9wYWNpdHlNYXh9IC8+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgIDwvVmlldz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZsb2F0KFxuICAgIGluaXRpYWxWYWx1ZTogbnVtYmVyLFxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQsXG4pOiBbdmFsdWU6IG51bWJlciwgc2V0VmFsdWU6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkXSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IG9uQ2hhbmdlPy4odmFsdWUpLCBbdmFsdWVdKVxuICAgIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXVxufVxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhdUI7QUFDNkI7QUFDM0I7QUFDcUI7QUFDd0I7QUFFbEI7QUFDTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFMUQsU0FBUyxJQUFJLENBQUMsT0FBbUIsRUFBRSxNQUFjO0lBQzdDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQztJQUV4QyxNQUFNLEtBQUssR0FBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsTUFBTSxNQUFNLEdBQUcsSUFBSSw4Q0FBYyxDQUFDLE9BQU8sRUFBRTtRQUN2QyxTQUFTLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQzVCLFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDNUIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtRQUM1QixTQUFTLEVB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