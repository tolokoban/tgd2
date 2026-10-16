"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_background-with-depth_page_mdx-src_components_demo_CodeViewer_CodeVi-cd3a45"], {
35875(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/background.49be5e8ef07a359b.glb";

},
14756(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/background.94860ce4a0297491.webp";

},
7195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(43475);
/* import */ var _background_webp__rspack_import_4 = __webpack_require__(14756);
/* import */ var _background_glb__rspack_import_5 = __webpack_require__(35875);






function init(context, assets) {
    // #begin Initializing WebGL
    context.camera = assets.glb.background.createCameraByName("Camera");
    context.camera.far = 100;
    var depthMaker = new _tolokoban_tgd__rspack_import_2.TgdPainterState(context, {
        cull: _tolokoban_tgd__rspack_import_2.webglPresetCull.back,
        children: [
            (0,_tolokoban_tgd__rspack_import_2.tgdMakeMeshGlbPainter)({
                context: context,
                data: assets.glb.background,
                node: "Building",
                overrideMaterial: function overrideMaterial() {
                    return function() {
                        return new _tolokoban_tgd__rspack_import_2.TgdMaterialDepth();
                    };
                }
            }).painter
        ]
    });
    var background = new _tolokoban_tgd__rspack_import_2.TgdPainterBackgroundWithDepth(context, {
        background: new _tolokoban_tgd__rspack_import_2.TgdTexture2D(context).loadBitmap(assets.image.background),
        children: [
            depthMaker
        ]
    });
    var cube1 = new _tolokoban_tgd__rspack_import_2.TgdPainterMesh(context);
    cube1.transfo.setPosition(11.02, 0, -8.75).setScale(4);
    var cube2 = new _tolokoban_tgd__rspack_import_2.TgdPainterMesh(context);
    cube2.transfo.setPosition(0.02, 0, -4).setScale(4);
    context.add(background, new _tolokoban_tgd__rspack_import_2.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_2.webglPresetDepth.less,
        children: [
            cube1,
            cube2
        ]
    }), new _tolokoban_tgd__rspack_import_2.TgdPainterLogic(function(time) {
        var mod = (0,_tolokoban_tgd__rspack_import_2.tgdCalcModulo)(time * 0.1, 0, 2);
        var y1 = 0;
        if (mod < 1) y1 = mod * 25;
        else y1 = 25 * (2 - mod);
        var _cube1_transfo_position = cube1.transfo.position, x1 = _cube1_transfo_position.x, z1 = _cube1_transfo_position.z;
        cube1.transfo.setPosition(x1, y1, z1);
        cube1.transfo.setEulerRotation(time, time * 47, -time * 120);
        var y2 = 0;
        if (mod < 1) y2 = mod * 30;
        else y2 = 30 * (2 - mod);
        var _cube2_transfo_position = cube2.transfo.position, x2 = _cube2_transfo_position.x, z2 = _cube2_transfo_position.z;
        cube2.transfo.setPosition(x2, y2, z2);
        cube2.transfo.setEulerRotation(time, time * 57, -time * 103);
    }));
    context.play();
    // #end
    return background;
}
function Demo() {
    //   const [material, setMaterial] = useMaterial();
    //   const [min, setMin] = React.useState(material.min);
    //   const [max, setMax] = React.useState(material.max);
    //   useDebouncedEffect(
    //     () => {
    //       material.min = min;
    //       material.max = max;
    //     },
    //     [min, max],
    //     400
    //   );
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_3["default"], {
        onReady: function onReady(context, assets) {
            init(context, assets);
        // setMaterial(init(context, assets));
        },
        options: {
            antialias: false
        },
        assets: {
            glb: {
                background: _background_glb__rspack_import_5
            },
            image: {
                background: _background_webp__rspack_import_4
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/_background-with-depth/background-with-depth.demo.tsx",
        lineNumber: 85,
        columnNumber: 3
    }, this);
}
function useMaterial() {
    var refMaterial = react__rspack_import_1_default().useRef(null);
    if (!refMaterial.current) refMaterial.current = {
        min: 0.992,
        max: 1
    };
    return [
        refMaterial.current,
        function(mat) {
            return refMaterial.current = mat;
        }
    ];
}


},
66979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _background_with_depth_demo__rspack_import_4 = __webpack_require__(7195);
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
    "Initializing WebGL": '    context.camera = assets.glb.background.createCameraByName("Camera")\n    context.camera.far = 100\n    const depthMaker = new TgdPainterState(context, {\n        cull: webglPresetCull.back,\n        children: [\n            tgdMakeMeshGlbPainter({\n                context,\n                data: assets.glb.background,\n                node: "Building",\n                overrideMaterial: () => () => new TgdMaterialDepth(),\n            }).painter,\n        ],\n    })\n    const background = new TgdPainterBackgroundWithDepth(context, {\n        background: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        children: [depthMaker],\n    })\n    const cube1 = new TgdPainterMesh(context)\n    cube1.transfo.setPosition(11.02, 0, -8.75).setScale(4)\n    const cube2 = new TgdPainterMesh(context)\n    cube2.transfo.setPosition(0.02, 0, -4).setScale(4)\n    context.add(\n        background,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [cube1, cube2],\n        }),\n        new TgdPainterLogic((time) => {\n            const mod = tgdCalcModulo(time * 0.1, 0, 2)\n            let y1 = 0\n            if (mod < 1) y1 = mod * 25\n            else y1 = 25 * (2 - mod)\n            const { x: x1, z: z1 } = cube1.transfo.position\n            cube1.transfo.setPosition(x1, y1, z1)\n            cube1.transfo.setEulerRotation(time, time * 47, -time * 120)\n            let y2 = 0\n            if (mod < 1) y2 = mod * 30\n            else y2 = 30 * (2 - mod)\n            const { x: x2, z: z2 } = cube2.transfo.position\n            cube2.transfo.setPosition(x2, y2, z2)\n            cube2.transfo.setEulerRotation(time, time * 57, -time * 103)\n        }),\n    )\n    context.play()'
};
var FULL = 'import React from "react"\nimport { useDebouncedEffect, ViewInputNumber } from "@tolokoban/ui"\nimport {\n    tgdCalcModulo,\n    type TgdContext,\n    tgdMakeMeshGlbPainter,\n    TgdMaterialDepth,\n    TgdPainterBackgroundWithDepth,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetCull,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\n\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport BackgroundIMG from "./background.webp"\nimport BackgroundGLB from "./background.glb"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera = assets.glb.background.createCameraByName("Camera")\n    context.camera.far = 100\n    const depthMaker = new TgdPainterState(context, {\n        cull: webglPresetCull.back,\n        children: [\n            tgdMakeMeshGlbPainter({\n                context,\n                data: assets.glb.background,\n                node: "Building",\n                overrideMaterial: () => () => new TgdMaterialDepth(),\n            }).painter,\n        ],\n    })\n    const background = new TgdPainterBackgroundWithDepth(context, {\n        background: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        children: [depthMaker],\n    })\n    const cube1 = new TgdPainterMesh(context)\n    cube1.transfo.setPosition(11.02, 0, -8.75).setScale(4)\n    const cube2 = new TgdPainterMesh(context)\n    cube2.transfo.setPosition(0.02, 0, -4).setScale(4)\n    context.add(\n        background,\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [cube1, cube2],\n        }),\n        new TgdPainterLogic((time) => {\n            const mod = tgdCalcModulo(time * 0.1, 0, 2)\n            let y1 = 0\n            if (mod < 1) y1 = mod * 25\n            else y1 = 25 * (2 - mod)\n            const { x: x1, z: z1 } = cube1.transfo.position\n            cube1.transfo.setPosition(x1, y1, z1)\n            cube1.transfo.setEulerRotation(time, time * 47, -time * 120)\n            let y2 = 0\n            if (mod < 1) y2 = mod * 30\n            else y2 = 30 * (2 - mod)\n            const { x: x2, z: z2 } = cube2.transfo.position\n            cube2.transfo.setPosition(x2, y2, z2)\n            cube2.transfo.setEulerRotation(time, time * 57, -time * 103)\n        }),\n    )\n    context.play()\n    return background\n}\n\nexport default function Demo() {\n    //   const [material, setMaterial] = useMaterial();\n    //   const [min, setMin] = React.useState(material.min);\n    //   const [max, setMax] = React.useState(material.max);\n    //   useDebouncedEffect(\n    //     () => {\n    //       material.min = min;\n    //       material.max = max;\n    //     },\n    //     [min, max],\n    //     400\n    //   );\n    return (\n        <View\n            onReady={(context, assets) => {\n                init(context, assets)\n                // setMaterial(init(context, assets));\n            }}\n            options={{\n                antialias: false,\n            }}\n            assets={{\n                glb: { background: BackgroundGLB },\n                image: { background: BackgroundIMG },\n            }}></View>\n    )\n}\n\nfunction useMaterial(): [{ min: number; max: number }, (mat: { min: number; max: number }) => void] {\n    const refMaterial = React.useRef<{ min: number; max: number } | null>(null)\n    if (!refMaterial.current) refMaterial.current = { min: 0.992, max: 1 }\n\n    return [refMaterial.current, (mat: { min: number; max: number }) => (refMaterial.current = mat)]\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_background_with_depth_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/_background-with-depth/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/_background-with-depth/index.tsx",
                lineNumber: 20,
                columnNumber: 4
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/_background-with-depth/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/_background-with-depth/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/_background-with-depth/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/_background-with-depth/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
86180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _background_with_depth__rspack_import_1 = __webpack_require__(66979);
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
        h2: "h2",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterBackgroundWithDepth.html",
                    children: "TgdPainterBackgroundWithDepth"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In case you have a fixed camera and a complex environment you can optimize the\npainting by pre-rendering it in Blender and generating the depth buffer with simple/fast material."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "TgdPainterBackgroundWithDepth will paint the high definition image and fill the\ndepth buffer with the meshes you give it as children. If the canvas size doesn't change, then the\nmeshes won't even been rendered. That's why you can use high poly meshes if you need accuracy."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In the following example, we used a very low-poly mesh. You can see this when the left cube is on the top.\nThe hemi-sphere at the top of the tower is bulky, and the cube acts strange in this area."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "But if you know where your moving objects will be, then you can have high definition in these places\nand low poly everywhere else."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 18,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_background_with_depth__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9iYWNrZ3JvdW5kLXdpdGgtZGVwdGhfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaS1jZDNhNDUuNWFjMzg2NjZmYjc2ODcxNy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2JhY2tncm91bmQtd2l0aC1kZXB0aC9fYmFja2dyb3VuZC13aXRoLWRlcHRoL2JhY2tncm91bmQtd2l0aC1kZXB0aC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9iYWNrZ3JvdW5kLXdpdGgtZGVwdGgvX2JhY2tncm91bmQtd2l0aC1kZXB0aC9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvYmFja2dyb3VuZC13aXRoLWRlcHRoL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURlYm91bmNlZEVmZmVjdCwgVmlld0lucHV0TnVtYmVyIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCB7XG5cdHRnZENhbGNNb2R1bG8sXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0dGdkTWFrZU1lc2hHbGJQYWludGVyLFxuXHRUZ2RNYXRlcmlhbERlcHRoLFxuXHRUZ2RQYWludGVyQmFja2dyb3VuZFdpdGhEZXB0aCxcblx0VGdkUGFpbnRlckxvZ2ljLFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHdlYmdsUHJlc2V0Q3VsbCxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG5pbXBvcnQgQmFja2dyb3VuZElNRyBmcm9tIFwiLi9iYWNrZ3JvdW5kLndlYnBcIjtcbmltcG9ydCBCYWNrZ3JvdW5kR0xCIGZyb20gXCIuL2JhY2tncm91bmQuZ2xiXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuXHRjb250ZXh0LmNhbWVyYSA9IGFzc2V0cy5nbGIuYmFja2dyb3VuZC5jcmVhdGVDYW1lcmFCeU5hbWUoXCJDYW1lcmFcIik7XG5cdGNvbnRleHQuY2FtZXJhLmZhciA9IDEwMDtcblx0Y29uc3QgZGVwdGhNYWtlciA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHR0Z2RNYWtlTWVzaEdsYlBhaW50ZXIoe1xuXHRcdFx0XHRjb250ZXh0LFxuXHRcdFx0XHRkYXRhOiBhc3NldHMuZ2xiLmJhY2tncm91bmQsXG5cdFx0XHRcdG5vZGU6IFwiQnVpbGRpbmdcIixcblx0XHRcdFx0b3ZlcnJpZGVNYXRlcmlhbDogKCkgPT4gKCkgPT4gbmV3IFRnZE1hdGVyaWFsRGVwdGgoKSxcblx0XHRcdH0pLnBhaW50ZXIsXG5cdFx0XSxcblx0fSk7XG5cdGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmRXaXRoRGVwdGgoY29udGV4dCwge1xuXHRcdGJhY2tncm91bmQ6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCksXG5cdFx0Y2hpbGRyZW46IFtkZXB0aE1ha2VyXSxcblx0fSk7XG5cdGNvbnN0IGN1YmUxID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpO1xuXHRjdWJlMS50cmFuc2ZvLnNldFBvc2l0aW9uKDExLjAyLCAwLCAtOC43NSkuc2V0U2NhbGUoNCk7XG5cdGNvbnN0IGN1YmUyID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpO1xuXHRjdWJlMi50cmFuc2ZvLnNldFBvc2l0aW9uKDAuMDIsIDAsIC00KS5zZXRTY2FsZSg0KTtcblx0Y29udGV4dC5hZGQoXG5cdFx0YmFja2dyb3VuZCxcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0XHRjaGlsZHJlbjogW2N1YmUxLCBjdWJlMl0sXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xuXHRcdFx0Y29uc3QgbW9kID0gdGdkQ2FsY01vZHVsbyh0aW1lICogMC4xLCAwLCAyKTtcblx0XHRcdGxldCB5MSA9IDA7XG5cdFx0XHRpZiAobW9kIDwgMSkgeTEgPSBtb2QgKiAyNTtcblx0XHRcdGVsc2UgeTEgPSAyNSAqICgyIC0gbW9kKTtcblx0XHRcdGNvbnN0IHsgeDogeDEsIHo6IHoxIH0gPSBjdWJlMS50cmFuc2ZvLnBvc2l0aW9uO1xuXHRcdFx0Y3ViZTEudHJhbnNmby5zZXRQb3NpdGlvbih4MSwgeTEsIHoxKTtcblx0XHRcdGN1YmUxLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lLCB0aW1lICogNDcsIC10aW1lICogMTIwKTtcblx0XHRcdGxldCB5MiA9IDA7XG5cdFx0XHRpZiAobW9kIDwgMSkgeTIgPSBtb2QgKiAzMDtcblx0XHRcdGVsc2UgeTIgPSAzMCAqICgyIC0gbW9kKTtcblx0XHRcdGNvbnN0IHsgeDogeDIsIHo6IHoyIH0gPSBjdWJlMi50cmFuc2ZvLnBvc2l0aW9uO1xuXHRcdFx0Y3ViZTIudHJhbnNmby5zZXRQb3NpdGlvbih4MiwgeTIsIHoyKTtcblx0XHRcdGN1YmUyLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lLCB0aW1lICogNTcsIC10aW1lICogMTAzKTtcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wbGF5KCk7XG5cdC8vICNlbmRcblx0cmV0dXJuIGJhY2tncm91bmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdC8vICAgY29uc3QgW21hdGVyaWFsLCBzZXRNYXRlcmlhbF0gPSB1c2VNYXRlcmlhbCgpO1xuXHQvLyAgIGNvbnN0IFttaW4sIHNldE1pbl0gPSBSZWFjdC51c2VTdGF0ZShtYXRlcmlhbC5taW4pO1xuXHQvLyAgIGNvbnN0IFttYXgsIHNldE1heF0gPSBSZWFjdC51c2VTdGF0ZShtYXRlcmlhbC5tYXgpO1xuXHQvLyAgIHVzZURlYm91bmNlZEVmZmVjdChcblx0Ly8gICAgICgpID0+IHtcblx0Ly8gICAgICAgbWF0ZXJpYWwubWluID0gbWluO1xuXHQvLyAgICAgICBtYXRlcmlhbC5tYXggPSBtYXg7XG5cdC8vICAgICB9LFxuXHQvLyAgICAgW21pbiwgbWF4XSxcblx0Ly8gICAgIDQwMFxuXHQvLyAgICk7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9eyhjb250ZXh0LCBhc3NldHMpID0+IHtcblx0XHRcdFx0aW5pdChjb250ZXh0LCBhc3NldHMpO1xuXHRcdFx0XHQvLyBzZXRNYXRlcmlhbChpbml0KGNvbnRleHQsIGFzc2V0cykpO1xuXHRcdFx0fX1cblx0XHRcdG9wdGlvbnM9e3tcblx0XHRcdFx0YW50aWFsaWFzOiBmYWxzZSxcblx0XHRcdH19XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0Z2xiOiB7IGJhY2tncm91bmQ6IEJhY2tncm91bmRHTEIgfSxcblx0XHRcdFx0aW1hZ2U6IHsgYmFja2dyb3VuZDogQmFja2dyb3VuZElNRyB9LFxuXHRcdFx0fX1cblx0XHQ+PC9WaWV3PlxuXHQpO1xufVxuXG5mdW5jdGlvbiB1c2VNYXRlcmlhbCgpOiBbXG5cdHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH0sXG5cdChtYXQ6IHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH0pID0+IHZvaWQsXG5dIHtcblx0Y29uc3QgcmVmTWF0ZXJpYWwgPSBSZWFjdC51c2VSZWY8eyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSB8IG51bGw+KG51bGwpO1xuXHRpZiAoIXJlZk1hdGVyaWFsLmN1cnJlbnQpIHJlZk1hdGVyaWFsLmN1cnJlbnQgPSB7IG1pbjogMC45OTIsIG1heDogMSB9O1xuXG5cdHJldHVybiBbXG5cdFx0cmVmTWF0ZXJpYWwuY3VycmVudCxcblx0XHQobWF0OiB7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9KSA9PiAocmVmTWF0ZXJpYWwuY3VycmVudCA9IG1hdCksXG5cdF07XG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vYmFja2dyb3VuZC13aXRoLWRlcHRoLmRlbW9cIjtcblxuY29uc3QgRk9DVVMgPSB7XG5cdFwiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XG5cdFx0JyAgICBjb250ZXh0LmNhbWVyYSA9IGFzc2V0cy5nbGIuYmFja2dyb3VuZC5jcmVhdGVDYW1lcmFCeU5hbWUoXCJDYW1lcmFcIilcXG4gICAgY29udGV4dC5jYW1lcmEuZmFyID0gMTAwXFxuICAgIGNvbnN0IGRlcHRoTWFrZXIgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICB0Z2RNYWtlTWVzaEdsYlBhaW50ZXIoe1xcbiAgICAgICAgICAgICAgICBjb250ZXh0LFxcbiAgICAgICAgICAgICAgICBkYXRhOiBhc3NldHMuZ2xiLmJhY2tncm91bmQsXFxuICAgICAgICAgICAgICAgIG5vZGU6IFwiQnVpbGRpbmdcIixcXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVNYXRlcmlhbDogKCkgPT4gKCkgPT4gbmV3IFRnZE1hdGVyaWFsRGVwdGgoKSxcXG4gICAgICAgICAgICB9KS5wYWludGVyLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZFdpdGhEZXB0aChjb250ZXh0LCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJhY2tncm91bmQpLFxcbiAgICAgICAgY2hpbGRyZW46IFtkZXB0aE1ha2VyXSxcXG4gICAgfSlcXG4gICAgY29uc3QgY3ViZTEgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcXG4gICAgY3ViZTEudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMCwgLTguNzUpLnNldFNjYWxlKDQpXFxuICAgIGNvbnN0IGN1YmUyID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXFxuICAgIGN1YmUyLnRyYW5zZm8uc2V0UG9zaXRpb24oMC4wMiwgMCwgLTQpLnNldFNjYWxlKDQpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgYmFja2dyb3VuZCxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjdWJlMSwgY3ViZTJdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgbW9kID0gdGdkQ2FsY01vZHVsbyh0aW1lICogMC4xLCAwLCAyKVxcbiAgICAgICAgICAgIGxldCB5MSA9IDBcXG4gICAgICAgICAgICBpZiAobW9kIDwgMSkgeTEgPSBtb2QgKiAyNVxcbiAgICAgICAgICAgIGVsc2UgeTEgPSAyNSAqICgyIC0gbW9kKVxcbiAgICAgICAgICAgIGNvbnN0IHsgeDogeDEsIHo6IHoxIH0gPSBjdWJlMS50cmFuc2ZvLnBvc2l0aW9uXFxuICAgICAgICAgICAgY3ViZTEudHJhbnNmby5zZXRQb3NpdGlvbih4MSwgeTEsIHoxKVxcbiAgICAgICAgICAgIGN1YmUxLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lLCB0aW1lICogNDcsIC10aW1lICogMTIwKVxcbiAgICAgICAgICAgIGxldCB5MiA9IDBcXG4gICAgICAgICAgICBpZiAobW9kIDwgMSkgeTIgPSBtb2QgKiAzMFxcbiAgICAgICAgICAgIGVsc2UgeTIgPSAzMCAqICgyIC0gbW9kKVxcbiAgICAgICAgICAgIGNvbnN0IHsgeDogeDIsIHo6IHoyIH0gPSBjdWJlMi50cmFuc2ZvLnBvc2l0aW9uXFxuICAgICAgICAgICAgY3ViZTIudHJhbnNmby5zZXRQb3NpdGlvbih4MiwgeTIsIHoyKVxcbiAgICAgICAgICAgIGN1YmUyLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lLCB0aW1lICogNTcsIC10aW1lICogMTAzKVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KCknLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXFxuaW1wb3J0IHsgdXNlRGVib3VuY2VkRWZmZWN0LCBWaWV3SW5wdXROdW1iZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXFxuaW1wb3J0IHtcXG4gICAgdGdkQ2FsY01vZHVsbyxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICB0Z2RNYWtlTWVzaEdsYlBhaW50ZXIsXFxuICAgIFRnZE1hdGVyaWFsRGVwdGgsXFxuICAgIFRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgd2ViZ2xQcmVzZXRDdWxsLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5cXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcblxcbmltcG9ydCBCYWNrZ3JvdW5kSU1HIGZyb20gXCIuL2JhY2tncm91bmQud2VicFwiXFxuaW1wb3J0IEJhY2tncm91bmRHTEIgZnJvbSBcIi4vYmFja2dyb3VuZC5nbGJcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29udGV4dC5jYW1lcmEgPSBhc3NldHMuZ2xiLmJhY2tncm91bmQuY3JlYXRlQ2FtZXJhQnlOYW1lKFwiQ2FtZXJhXCIpXFxuICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IDEwMFxcbiAgICBjb25zdCBkZXB0aE1ha2VyID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgdGdkTWFrZU1lc2hHbGJQYWludGVyKHtcXG4gICAgICAgICAgICAgICAgY29udGV4dCxcXG4gICAgICAgICAgICAgICAgZGF0YTogYXNzZXRzLmdsYi5iYWNrZ3JvdW5kLFxcbiAgICAgICAgICAgICAgICBub2RlOiBcIkJ1aWxkaW5nXCIsXFxuICAgICAgICAgICAgICAgIG92ZXJyaWRlTWF0ZXJpYWw6ICgpID0+ICgpID0+IG5ldyBUZ2RNYXRlcmlhbERlcHRoKCksXFxuICAgICAgICAgICAgfSkucGFpbnRlcixcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmRXaXRoRGVwdGgoY29udGV4dCwge1xcbiAgICAgICAgYmFja2dyb3VuZDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kKSxcXG4gICAgICAgIGNoaWxkcmVuOiBbZGVwdGhNYWtlcl0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGN1YmUxID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXFxuICAgIGN1YmUxLnRyYW5zZm8uc2V0UG9zaXRpb24oMTEuMDIsIDAsIC04Ljc1KS5zZXRTY2FsZSg0KVxcbiAgICBjb25zdCBjdWJlMiA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxcbiAgICBjdWJlMi50cmFuc2ZvLnNldFBvc2l0aW9uKDAuMDIsIDAsIC00KS5zZXRTY2FsZSg0KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGJhY2tncm91bmQsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY3ViZTEsIGN1YmUyXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IHRnZENhbGNNb2R1bG8odGltZSAqIDAuMSwgMCwgMilcXG4gICAgICAgICAgICBsZXQgeTEgPSAwXFxuICAgICAgICAgICAgaWYgKG1vZCA8IDEpIHkxID0gbW9kICogMjVcXG4gICAgICAgICAgICBlbHNlIHkxID0gMjUgKiAoMiAtIG1vZClcXG4gICAgICAgICAgICBjb25zdCB7IHg6IHgxLCB6OiB6MSB9ID0gY3ViZTEudHJhbnNmby5wb3NpdGlvblxcbiAgICAgICAgICAgIGN1YmUxLnRyYW5zZm8uc2V0UG9zaXRpb24oeDEsIHkxLCB6MSlcXG4gICAgICAgICAgICBjdWJlMS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSwgdGltZSAqIDQ3LCAtdGltZSAqIDEyMClcXG4gICAgICAgICAgICBsZXQgeTIgPSAwXFxuICAgICAgICAgICAgaWYgKG1vZCA8IDEpIHkyID0gbW9kICogMzBcXG4gICAgICAgICAgICBlbHNlIHkyID0gMzAgKiAoMiAtIG1vZClcXG4gICAgICAgICAgICBjb25zdCB7IHg6IHgyLCB6OiB6MiB9ID0gY3ViZTIudHJhbnNmby5wb3NpdGlvblxcbiAgICAgICAgICAgIGN1YmUyLnRyYW5zZm8uc2V0UG9zaXRpb24oeDIsIHkyLCB6MilcXG4gICAgICAgICAgICBjdWJlMi50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSwgdGltZSAqIDU3LCAtdGltZSAqIDEwMylcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIHJldHVybiBiYWNrZ3JvdW5kXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIC8vICAgY29uc3QgW21hdGVyaWFsLCBzZXRNYXRlcmlhbF0gPSB1c2VNYXRlcmlhbCgpO1xcbiAgICAvLyAgIGNvbnN0IFttaW4sIHNldE1pbl0gPSBSZWFjdC51c2VTdGF0ZShtYXRlcmlhbC5taW4pO1xcbiAgICAvLyAgIGNvbnN0IFttYXgsIHNldE1heF0gPSBSZWFjdC51c2VTdGF0ZShtYXRlcmlhbC5tYXgpO1xcbiAgICAvLyAgIHVzZURlYm91bmNlZEVmZmVjdChcXG4gICAgLy8gICAgICgpID0+IHtcXG4gICAgLy8gICAgICAgbWF0ZXJpYWwubWluID0gbWluO1xcbiAgICAvLyAgICAgICBtYXRlcmlhbC5tYXggPSBtYXg7XFxuICAgIC8vICAgICB9LFxcbiAgICAvLyAgICAgW21pbiwgbWF4XSxcXG4gICAgLy8gICAgIDQwMFxcbiAgICAvLyAgICk7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9eyhjb250ZXh0LCBhc3NldHMpID0+IHtcXG4gICAgICAgICAgICAgICAgaW5pdChjb250ZXh0LCBhc3NldHMpXFxuICAgICAgICAgICAgICAgIC8vIHNldE1hdGVyaWFsKGluaXQoY29udGV4dCwgYXNzZXRzKSk7XFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogZmFsc2UsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7IGJhY2tncm91bmQ6IEJhY2tncm91bmRHTEIgfSxcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgYmFja2dyb3VuZDogQmFja2dyb3VuZElNRyB9LFxcbiAgICAgICAgICAgIH19PjwvVmlldz5cXG4gICAgKVxcbn1cXG5cXG5mdW5jdGlvbiB1c2VNYXRlcmlhbCgpOiBbeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSwgKG1hdDogeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSkgPT4gdm9pZF0ge1xcbiAgICBjb25zdCByZWZNYXRlcmlhbCA9IFJlYWN0LnVzZVJlZjx7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9IHwgbnVsbD4obnVsbClcXG4gICAgaWYgKCFyZWZNYXRlcmlhbC5jdXJyZW50KSByZWZNYXRlcmlhbC5jdXJyZW50ID0geyBtaW46IDAuOTkyLCBtYXg6IDEgfVxcblxcbiAgICByZXR1cm4gW3JlZk1hdGVyaWFsLmN1cnJlbnQsIChtYXQ6IHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH0pID0+IChyZWZNYXRlcmlhbC5jdXJyZW50ID0gbWF0KV1cXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidGdkQ2FsY01vZHVsbyIsInRnZE1ha2VNZXNoR2xiUGFpbnRlciIsIlRnZE1hdGVyaWFsRGVwdGgiLCJUZ2RQYWludGVyQmFja2dyb3VuZFdpdGhEZXB0aCIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwid2ViZ2xQcmVzZXRDdWxsIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJCYWNrZ3JvdW5kSU1HIiwiQmFja2dyb3VuZEdMQiIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiZGVwdGhNYWtlciIsIm92ZXJyaWRlTWF0ZXJpYWwiLCJiYWNrZ3JvdW5kIiwiY3ViZTEiLCJjdWJlMiIsInRpbWUiLCJtb2QiLCJ5MSIsIl9jdWJlMV90cmFuc2ZvX3Bvc2l0aW9uIiwieDEiLCJ6MSIsInkyIiwiX2N1YmUyX3RyYW5zZm9fcG9zaXRpb24iLCJ4MiIsInoyIiwiRGVtbyIsIm9uUmVhZHkiLCJ1c2VNYXRlcmlhbCIsInJlZk1hdGVyaWFsIiwibWF0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQWNGO0FBRWtDO0FBRVo7QUFDRDtBQUU3QyxTQUFTYyxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQ2hELDRCQUE0QjtJ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