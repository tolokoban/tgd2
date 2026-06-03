"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_points-cloud_variant_morphing_page_mdx-src_components_demo_CodeViewe-f4df9c"], {
41678(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/high-res-monkey-deformed.e0454dd51cbafdb0.glb";

},
8755(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/high-res-monkey.5d18cfe478366fe5.glb";

},
56927(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _points_cloud_demo__rspack_import_4 = __webpack_require__(48943);
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
    "Detail #1": "\tcontext.camera.fitSpaceAtTarget(3, 2.5)\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(createPalette())\n\tconst { monkey1, monkey2 } = assets.glb\n\tconst point1 = makePoint(monkey1)\n\tconst uv1 = makeUV(monkey1)\n\tconst point2 = makePoint(monkey2)\n\tconst uv2 = makeUV(monkey2)\n\tconst cloudMix = new TgdPainterPointsCloudMorphing(context, {\n\t\tmix: 0,\n\t\tdata: [\n\t\t\t[\n\t\t\t\t{\n\t\t\t\t\tpoint: point1,\n\t\t\t\t\tuv: uv1,\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tpoint: point2,\n\t\t\t\t\tuv: uv2,\n\t\t\t\t},\n\t\t\t],\n\t\t],\n\t\ttexture,\n\t\tfragCode: TgdPainterPointsCloudMorphing.fragCodeSphere({\n\t\t\tdepthPrecision: \"low\",\n\t\t}),\n\t})\n\tcloudMix.debug()\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cloudMix],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()"
};
var FULL = "import {\n\tTgdColor,\n\ttype TgdContext,\n\ttype TgdDataGlb,\n\tTgdDataset,\n\tTgdPainterClear,\n\tTgdPainterPointsCloud,\n\tTgdPainterPointsCloudMorphing,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdCalcRandom,\n\ttgdCanvasCreatePalette,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport Monkey1URL from \"@/assets/mesh/high-res-monkey.glb\"\nimport Monkey2URL from \"@/assets/mesh/high-res-monkey-deformed.glb\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera.fitSpaceAtTarget(3, 2.5)\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(createPalette())\n\tconst { monkey1, monkey2 } = assets.glb\n\tconst point1 = makePoint(monkey1)\n\tconst uv1 = makeUV(monkey1)\n\tconst point2 = makePoint(monkey2)\n\tconst uv2 = makeUV(monkey2)\n\tconst cloudMix = new TgdPainterPointsCloudMorphing(context, {\n\t\tmix: 0,\n\t\tdata: [\n\t\t\t[\n\t\t\t\t{\n\t\t\t\t\tpoint: point1,\n\t\t\t\t\tuv: uv1,\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tpoint: point2,\n\t\t\t\t\tuv: uv2,\n\t\t\t\t},\n\t\t\t],\n\t\t],\n\t\ttexture,\n\t\tfragCode: TgdPainterPointsCloudMorphing.fragCodeSphere({\n\t\t\tdepthPrecision: \"low\",\n\t\t}),\n\t})\n\tcloudMix.debug()\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cloudMix],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()\n\treturn (settings: Record<string, number>) => {\n\t\tcloudMix.mix = settings.mix\n\t\tcontext.paint()\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\t// gizmo\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 2000,\n\t\t\t\tmaxZoom: 10,\n\t\t\t\tminZoom: 0.25,\n\t\t\t\tspeedZoom: 1,\n\t\t\t}}\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tassets={{\n\t\t\t\tglb: { monkey1: Monkey1URL, monkey2: Monkey2URL },\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tmix: {\n\t\t\t\t\tlabel: \"mix\",\n\t\t\t\t\tvalue: 0,\n\t\t\t\t\tmin: -2,\n\t\t\t\t\tmax: 3,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t)\n}\n\nfunction makePoint(glb: TgdDataGlb) {\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t})\n\tglb.setAttrib(dataset, \"POSITION\")\n\tconst { set } = dataset.getAttribAccessor(\"POSITION\")\n\tconst count = dataset.count\n\tfor (let i = 0; i < count; i++) {\n\t\tset(0.01, i, 3)\n\t}\n\treturn new Float32Array(dataset.data)\n}\n\nfunction makeUV(glb: TgdDataGlb) {\n\tconst uvs: number[] = []\n\tconst dataset = new TgdDataset({\n\t\tNORMAL: \"vec4\",\n\t})\n\tglb.setAttrib(dataset, \"NORMAL\")\n\tconst { get } = dataset.getAttribAccessor(\"NORMAL\")\n\tconst count = dataset.count\n\tfor (let i = 0; i < count; i++) {\n\t\t// const nx = get(i, 0)\n\t\tconst ny = get(i, 1)\n\t\tconst nz = get(i, 2)\n\t\tconst u = 0.5 * (1 + nz)\n\t\tconst v = 0.5 * (1 + ny)\n\t\tuvs.push(u, v)\n\t}\n\treturn new Float32Array(uvs)\n}\n\nfunction createPalette() {\n\tconst colors: TgdColor[] = []\n\tconst S = 1\n\tfor (const L of [0.1, 0.5, 0.9]) {\n\t\tfor (const H of [0, 0.2, 0.4, 0.6, 0.8, 1]) {\n\t\t\tcolors.push(TgdColor.fromHSL(H, S, L))\n\t\t}\n\t}\n\treturn tgdCanvasCreatePalette(colors, 6)\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/morphing.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/morphing.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/morphing.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/morphing.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/morphing.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/morphing.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
48943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _assets_mesh_high_res_monkey_glb__rspack_import_2 = __webpack_require__(8755);
/* import */ var _assets_mesh_high_res_monkey_deformed_glb__rspack_import_3 = __webpack_require__(41678);
/* import */ var _components_demo_Tgd__rspack_import_4 = __webpack_require__(43475);





function init(context, assets) {
    // #begin
    context.camera.fitSpaceAtTarget(3, 2.5);
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.1,
            0.2,
            0.3,
            1
        ],
        depth: 1
    });
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        params: {
            minFilter: "LINEAR",
            magFilter: "LINEAR",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE"
        }
    }).loadBitmap(createPalette());
    var _assets_glb = assets.glb, monkey1 = _assets_glb.monkey1, monkey2 = _assets_glb.monkey2;
    var point1 = makePoint(monkey1);
    var uv1 = makeUV(monkey1);
    var point2 = makePoint(monkey2);
    var uv2 = makeUV(monkey2);
    var cloudMix = new _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloudMorphing(context, {
        mix: 0,
        data: [
            [
                {
                    point: point1,
                    uv: uv1
                },
                {
                    point: point2,
                    uv: uv2
                }
            ]
        ],
        texture: texture,
        fragCode: _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloudMorphing.fragCodeSphere({
            depthPrecision: "low"
        })
    });
    cloudMix.debug();
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            cloudMix
        ]
    });
    context.add(clear, state);
    context.paint();
    // #end
    return function(settings) {
        cloudMix.mix = settings.mix;
        context.paint();
    };
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_4["default"], {
        onReady: init,
        // gizmo
        controller: {
            inertiaOrbit: 2000,
            maxZoom: 10,
            minZoom: 0.25,
            speedZoom: 1
        },
        options: {
            preserveDrawingBuffer: true
        },
        assets: {
            glb: {
                monkey1: _assets_mesh_high_res_monkey_glb__rspack_import_2,
                monkey2: _assets_mesh_high_res_monkey_deformed_glb__rspack_import_3
            }
        },
        settings: {
            mix: {
                label: "mix",
                value: 0,
                min: -2,
                max: 3
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/_/morphing.demo/points-cloud.demo.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this);
}
function makePoint(glb) {
    var dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        POSITION: "vec4"
    });
    glb.setAttrib(dataset, "POSITION");
    var set = dataset.getAttribAccessor("POSITION").set;
    var count = dataset.count;
    for(var i = 0; i < count; i++){
        set(0.01, i, 3);
    }
    return new Float32Array(dataset.data);
}
function makeUV(glb) {
    var uvs = [];
    var dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        NORMAL: "vec4"
    });
    glb.setAttrib(dataset, "NORMAL");
    var get = dataset.getAttribAccessor("NORMAL").get;
    var count = dataset.count;
    for(var i = 0; i < count; i++){
        // const nx = get(i, 0)
        var ny = get(i, 1);
        var nz = get(i, 2);
        var u = 0.5 * (1 + nz);
        var v = 0.5 * (1 + ny);
        uvs.push(u, v);
    }
    return new Float32Array(uvs);
}
function createPalette() {
    var colors = [];
    var S = 1;
    for(var _i = 0, _iter = [
        0.1,
        0.5,
        0.9
    ]; _i < _iter.length; _i++){
        var L = _iter[_i];
        for(var _i1 = 0, _iter1 = [
            0,
            0.2,
            0.4,
            0.6,
            0.8,
            1
        ]; _i1 < _iter1.length; _i1++){
            var H = _iter1[_i1];
            colors.push(_tolokoban_tgd__rspack_import_1.TgdColor.fromHSL(H, S, L));
        }
    }
    return (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)(colors, 6);
}


},
7091(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _morphing_demo__rspack_import_1 = __webpack_require__(56927);
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
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Points Clouds"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterPointsCloudMorphing.html",
                    children: "TgdPainterPointsCloudMorphing"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                    lineNumber: 5,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "For this demo, we load more than 1 million points.\nIt's about 10 Mb."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_morphing_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "mix"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                        lineNumber: 12,
                        columnNumber: 5
                    }, this),
                    " property allows you to morph between two sets with the same number of points."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/variant/morphing/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wb2ludHMtY2xvdWRfdmFyaWFudF9tb3JwaGluZ19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZS1mNGRmOWMuNjBlNjc4MTcxYzFhNTMwZS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC92YXJpYW50L21vcnBoaW5nL18vbW9ycGhpbmcuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL3ZhcmlhbnQvbW9ycGhpbmcvXy9tb3JwaGluZy5kZW1vL3BvaW50cy1jbG91ZC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvdmFyaWFudC9tb3JwaGluZy9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vcG9pbnRzLWNsb3VkLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiXFx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgzLCAyLjUpXFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcblxcdFxcdGRlcHRoOiAxLFxcblxcdH0pXFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0bWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHR3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0fSxcXG5cXHR9KS5sb2FkQml0bWFwKGNyZWF0ZVBhbGV0dGUoKSlcXG5cXHRjb25zdCB7IG1vbmtleTEsIG1vbmtleTIgfSA9IGFzc2V0cy5nbGJcXG5cXHRjb25zdCBwb2ludDEgPSBtYWtlUG9pbnQobW9ua2V5MSlcXG5cXHRjb25zdCB1djEgPSBtYWtlVVYobW9ua2V5MSlcXG5cXHRjb25zdCBwb2ludDIgPSBtYWtlUG9pbnQobW9ua2V5MilcXG5cXHRjb25zdCB1djIgPSBtYWtlVVYobW9ua2V5MilcXG5cXHRjb25zdCBjbG91ZE1peCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWRNb3JwaGluZyhjb250ZXh0LCB7XFxuXFx0XFx0bWl4OiAwLFxcblxcdFxcdGRhdGE6IFtcXG5cXHRcXHRcXHRbXFxuXFx0XFx0XFx0XFx0e1xcblxcdFxcdFxcdFxcdFxcdHBvaW50OiBwb2ludDEsXFxuXFx0XFx0XFx0XFx0XFx0dXY6IHV2MSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdHtcXG5cXHRcXHRcXHRcXHRcXHRwb2ludDogcG9pbnQyLFxcblxcdFxcdFxcdFxcdFxcdHV2OiB1djIsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRdLFxcblxcdFxcdF0sXFxuXFx0XFx0dGV4dHVyZSxcXG5cXHRcXHRmcmFnQ29kZTogVGdkUGFpbnRlclBvaW50c0Nsb3VkTW9ycGhpbmcuZnJhZ0NvZGVTcGhlcmUoe1xcblxcdFxcdFxcdGRlcHRoUHJlY2lzaW9uOiBcXFwibG93XFxcIixcXG5cXHRcXHR9KSxcXG5cXHR9KVxcblxcdGNsb3VkTWl4LmRlYnVnKClcXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0Y2hpbGRyZW46IFtjbG91ZE1peF0sXFxuXFx0fSlcXG5cXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXFxuXFx0Y29udGV4dC5wYWludCgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdFRnZENvbG9yLFxcblxcdHR5cGUgVGdkQ29udGV4dCxcXG5cXHR0eXBlIFRnZERhdGFHbGIsXFxuXFx0VGdkRGF0YXNldCxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlclBvaW50c0Nsb3VkLFxcblxcdFRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxuXFx0dGdkQ2FsY1JhbmRvbSxcXG5cXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcblxcdHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgTW9ua2V5MVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL2hpZ2gtcmVzLW1vbmtleS5nbGJcXFwiXFxuaW1wb3J0IE1vbmtleTJVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXktZGVmb3JtZWQuZ2xiXFxcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDIuNSlcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuXFx0XFx0ZGVwdGg6IDEsXFxuXFx0fSlcXG5cXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuXFx0XFx0cGFyYW1zOiB7XFxuXFx0XFx0XFx0bWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcblxcdFxcdFxcdHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0XFx0d3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHR9LFxcblxcdH0pLmxvYWRCaXRtYXAoY3JlYXRlUGFsZXR0ZSgpKVxcblxcdGNvbnN0IHsgbW9ua2V5MSwgbW9ua2V5MiB9ID0gYXNzZXRzLmdsYlxcblxcdGNvbnN0IHBvaW50MSA9IG1ha2VQb2ludChtb25rZXkxKVxcblxcdGNvbnN0IHV2MSA9IG1ha2VVVihtb25rZXkxKVxcblxcdGNvbnN0IHBvaW50MiA9IG1ha2VQb2ludChtb25rZXkyKVxcblxcdGNvbnN0IHV2MiA9IG1ha2VVVihtb25rZXkyKVxcblxcdGNvbnN0IGNsb3VkTWl4ID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nKGNvbnRleHQsIHtcXG5cXHRcXHRtaXg6IDAsXFxuXFx0XFx0ZGF0YTogW1xcblxcdFxcdFxcdFtcXG5cXHRcXHRcXHRcXHR7XFxuXFx0XFx0XFx0XFx0XFx0cG9pbnQ6IHBvaW50MSxcXG5cXHRcXHRcXHRcXHRcXHR1djogdXYxLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0e1xcblxcdFxcdFxcdFxcdFxcdHBvaW50OiBwb2ludDIsXFxuXFx0XFx0XFx0XFx0XFx0dXY6IHV2MixcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdF0sXFxuXFx0XFx0XSxcXG5cXHRcXHR0ZXh0dXJlLFxcblxcdFxcdGZyYWdDb2RlOiBUZ2RQYWludGVyUG9pbnRzQ2xvdWRNb3JwaGluZy5mcmFnQ29kZVNwaGVyZSh7XFxuXFx0XFx0XFx0ZGVwdGhQcmVjaXNpb246IFxcXCJsb3dcXFwiLFxcblxcdFxcdH0pLFxcblxcdH0pXFxuXFx0Y2xvdWRNaXguZGVidWcoKVxcblxcdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRjaGlsZHJlbjogW2Nsb3VkTWl4XSxcXG5cXHR9KVxcblxcdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcXG5cXHRjb250ZXh0LnBhaW50KClcXG5cXHRyZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XFxuXFx0XFx0Y2xvdWRNaXgubWl4ID0gc2V0dGluZ3MubWl4XFxuXFx0XFx0Y29udGV4dC5wYWludCgpXFxuXFx0fVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdHJldHVybiAoXFxuXFx0XFx0PFZpZXdcXG5cXHRcXHRcXHRvblJlYWR5PXtpbml0fVxcblxcdFxcdFxcdC8vIGdpem1vXFxuXFx0XFx0XFx0Y29udHJvbGxlcj17e1xcblxcdFxcdFxcdFxcdGluZXJ0aWFPcmJpdDogMjAwMCxcXG5cXHRcXHRcXHRcXHRtYXhab29tOiAxMCxcXG5cXHRcXHRcXHRcXHRtaW5ab29tOiAwLjI1LFxcblxcdFxcdFxcdFxcdHNwZWVkWm9vbTogMSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdG9wdGlvbnM9e3tcXG5cXHRcXHRcXHRcXHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRnbGI6IHsgbW9ua2V5MTogTW9ua2V5MVVSTCwgbW9ua2V5MjogTW9ua2V5MlVSTCB9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0XFx0c2V0dGluZ3M9e3tcXG5cXHRcXHRcXHRcXHRtaXg6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcIm1peFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDAsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAtMixcXG5cXHRcXHRcXHRcXHRcXHRtYXg6IDMsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KVxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlUG9pbnQoZ2xiOiBUZ2REYXRhR2xiKSB7XFxuXFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG5cXHRcXHRQT1NJVElPTjogXFxcInZlYzRcXFwiLFxcblxcdH0pXFxuXFx0Z2xiLnNldEF0dHJpYihkYXRhc2V0LCBcXFwiUE9TSVRJT05cXFwiKVxcblxcdGNvbnN0IHsgc2V0IH0gPSBkYXRhc2V0LmdldEF0dHJpYkFjY2Vzc29yKFxcXCJQT1NJVElPTlxcXCIpXFxuXFx0Y29uc3QgY291bnQgPSBkYXRhc2V0LmNvdW50XFxuXFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XFxuXFx0XFx0c2V0KDAuMDEsIGksIDMpXFxuXFx0fVxcblxcdHJldHVybiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSlcXG59XFxuXFxuZnVuY3Rpb24gbWFrZVVWKGdsYjogVGdkRGF0YUdsYikge1xcblxcdGNvbnN0IHV2czogbnVtYmVyW10gPSBbXVxcblxcdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuXFx0XFx0Tk9STUFMOiBcXFwidmVjNFxcXCIsXFxuXFx0fSlcXG5cXHRnbGIuc2V0QXR0cmliKGRhdGFzZXQsIFxcXCJOT1JNQUxcXFwiKVxcblxcdGNvbnN0IHsgZ2V0IH0gPSBkYXRhc2V0LmdldEF0dHJpYkFjY2Vzc29yKFxcXCJOT1JNQUxcXFwiKVxcblxcdGNvbnN0IGNvdW50ID0gZGF0YXNldC5jb3VudFxcblxcdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcblxcdFxcdC8vIGNvbnN0IG54ID0gZ2V0KGksIDApXFxuXFx0XFx0Y29uc3QgbnkgPSBnZXQoaSwgMSlcXG5cXHRcXHRjb25zdCBueiA9IGdldChpLCAyKVxcblxcdFxcdGNvbnN0IHUgPSAwLjUgKiAoMSArIG56KVxcblxcdFxcdGNvbnN0IHYgPSAwLjUgKiAoMSArIG55KVxcblxcdFxcdHV2cy5wdXNoKHUsIHYpXFxuXFx0fVxcblxcdHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHV2cylcXG59XFxuXFxuZnVuY3Rpb24gY3JlYXRlUGFsZXR0ZSgpIHtcXG5cXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXVxcblxcdGNvbnN0IFMgPSAxXFxuXFx0Zm9yIChjb25zdCBMIG9mIFswLjEsIDAuNSwgMC45XSkge1xcblxcdFxcdGZvciAoY29uc3QgSCBvZiBbMCwgMC4yLCAwLjQsIDAuNiwgMC44LCAxXSkge1xcblxcdFxcdFxcdGNvbG9ycy5wdXNoKFRnZENvbG9yLmZyb21IU0woSCwgUywgTCkpXFxuXFx0XFx0fVxcblxcdH1cXG5cXHRyZXR1cm4gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMsIDYpXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHRUZ2RDb2xvcixcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHR0eXBlIFRnZERhdGFHbGIsXG5cdFRnZERhdGFzZXQsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlclBvaW50c0Nsb3VkLFxuXHRUZ2RQYWludGVyUG9pbnRzQ2xvdWRNb3JwaGluZyxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHRnZENhbGNSYW5kb20sXG5cdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgTW9ua2V5MVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXCJcbmltcG9ydCBNb25rZXkyVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL2hpZ2gtcmVzLW1vbmtleS1kZWZvcm1lZC5nbGJcIlxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW5cblx0Y29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgzLCAyLjUpXG5cdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSlcblx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuXHRcdHBhcmFtczoge1xuXHRcdFx0bWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0bWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0d3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdFx0d3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdH0sXG5cdH0pLmxvYWRCaXRtYXAoY3JlYXRlUGFsZXR0ZSgpKVxuXHRjb25zdCB7IG1vbmtleTEsIG1vbmtleTIgfSA9IGFzc2V0cy5nbGJcblx0Y29uc3QgcG9pbnQxID0gbWFrZVBvaW50KG1vbmtleTEpXG5cdGNvbnN0IHV2MSA9IG1ha2VVVihtb25rZXkxKVxuXHRjb25zdCBwb2ludDIgPSBtYWtlUG9pbnQobW9ua2V5Milcblx0Y29uc3QgdXYyID0gbWFrZVVWKG1vbmtleTIpXG5cdGNvbnN0IGNsb3VkTWl4ID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nKGNvbnRleHQsIHtcblx0XHRtaXg6IDAsXG5cdFx0ZGF0YTogW1xuXHRcdFx0W1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cG9pbnQ6IHBvaW50MSxcblx0XHRcdFx0XHR1djogdXYxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cG9pbnQ6IHBvaW50Mixcblx0XHRcdFx0XHR1djogdXYyLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHRdLFxuXHRcdHRleHR1cmUsXG5cdFx0ZnJhZ0NvZGU6IFRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nLmZyYWdDb2RlU3BoZXJlKHtcblx0XHRcdGRlcHRoUHJlY2lzaW9uOiBcImxvd1wiLFxuXHRcdH0pLFxuXHR9KVxuXHRjbG91ZE1peC5kZWJ1ZygpXG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRjaGlsZHJlbjogW2Nsb3VkTWl4XSxcblx0fSlcblx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxuXHRjb250ZXh0LnBhaW50KClcblx0Ly8gI2VuZFxuXHRyZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG5cdFx0Y2xvdWRNaXgubWl4ID0gc2V0dGluZ3MubWl4XG5cdFx0Y29udGV4dC5wYWludCgpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdC8vIGdpem1vXG5cdFx0XHRjb250cm9sbGVyPXt7XG5cdFx0XHRcdGluZXJ0aWFPcmJpdDogMjAwMCxcblx0XHRcdFx0bWF4Wm9vbTogMTAsXG5cdFx0XHRcdG1pblpvb206IDAuMjUsXG5cdFx0XHRcdHNwZWVkWm9vbTogMSxcblx0XHRcdH19XG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdH19XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0Z2xiOiB7IG1vbmtleTE6IE1vbmtleTFVUkwsIG1vbmtleTI6IE1vbmtleTJVUkwgfSxcblx0XHRcdH19XG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHRtaXg6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJtaXhcIixcblx0XHRcdFx0XHR2YWx1ZTogMCxcblx0XHRcdFx0XHRtaW46IC0yLFxuXHRcdFx0XHRcdG1heDogMyxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KVxufVxuXG5mdW5jdGlvbiBtYWtlUG9pbnQoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0UE9TSVRJT046IFwidmVjNFwiLFxuXHR9KVxuXHRnbGIuc2V0QXR0cmliKGRhdGFzZXQsIFwiUE9TSVRJT05cIilcblx0Y29uc3QgeyBzZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXCJQT1NJVElPTlwiKVxuXHRjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnRcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0c2V0KDAuMDEsIGksIDMpXG5cdH1cblx0cmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKVxufVxuXG5mdW5jdGlvbiBtYWtlVVYoZ2xiOiBUZ2REYXRhR2xiKSB7XG5cdGNvbnN0IHV2czogbnVtYmVyW10gPSBbXVxuXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuXHRcdE5PUk1BTDogXCJ2ZWM0XCIsXG5cdH0pXG5cdGdsYi5zZXRBdHRyaWIoZGF0YXNldCwgXCJOT1JNQUxcIilcblx0Y29uc3QgeyBnZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXCJOT1JNQUxcIilcblx0Y29uc3QgY291bnQgPSBkYXRhc2V0LmNvdW50XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdC8vIGNvbnN0IG54ID0gZ2V0KGksIDApXG5cdFx0Y29uc3QgbnkgPSBnZXQoaSwgMSlcblx0XHRjb25zdCBueiA9IGdldChpLCAyKVxuXHRcdGNvbnN0IHUgPSAwLjUgKiAoMSArIG56KVxuXHRcdGNvbnN0IHYgPSAwLjUgKiAoMSArIG55KVxuXHRcdHV2cy5wdXNoKHUsIHYpXG5cdH1cblx0cmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodXZzKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWxldHRlKCkge1xuXHRjb25zdCBjb2xvcnM6IFRnZENvbG9yW10gPSBbXVxuXHRjb25zdCBTID0gMVxuXHRmb3IgKGNvbnN0IEwgb2YgWzAuMSwgMC41LCAwLjldKSB7XG5cdFx0Zm9yIChjb25zdCBIIG9mIFswLCAwLjIsIDAuNCwgMC42LCAwLjgsIDFdKSB7XG5cdFx0XHRjb2xvcnMucHVzaChUZ2RDb2xvci5mcm9tSFNMKEgsIFMsIEwpKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShjb2xvcnMsIDYpXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZENvbG9yIiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwidGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJNb25rZXkxVVJMIiwiTW9ua2V5MlVSTCIsIlZpZXciLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNsZWFyIiwidGV4dHVyZSIsImNyZWF0ZVBhbGV0dGUiLCJfYXNzZXRzX2dsYiIsIm1vbmtleTEiLCJtb25rZXkyIiwicG9pbnQxIiwibWFrZVBvaW50IiwidXYxIiwibWFrZVVWIiwicG9pbnQyIiwidXYyIiwiY2xvdWRNaXgiLCJzdGF0ZSIsInNldHRpbmdzIiwiZ2xiIiwiZGF0YXNldCIsInNldCIsImNvdW50IiwiaSIsIkZsb2F0MzJBcnJheSIsInV2cyIsImdldCIsIm55IiwibnoiLCJ1IiwidiIsImNvbG9ycyIsIlMiLCJfaXRlciIsIkwiLCJfaXRlcjEiLCJIIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDZjtBQUV0QyxJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUE0bEM7QUFDdm5DLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLDhDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMs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