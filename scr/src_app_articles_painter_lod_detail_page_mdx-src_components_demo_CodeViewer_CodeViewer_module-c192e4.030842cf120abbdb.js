"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_lod_detail_page_mdx-src_components_demo_CodeViewer_CodeViewer_module-c192e4"], {
35825(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(52003);
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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.distance = 14\n    context.camera.near = 1e-2\n    context.camera.far = 20\n    const color: ArrayNumber4 = [0.9, 0.5, 0.1, 1]\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n        steps: 8,\n    }).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n    const materials = [0, 1, 2, 3, 4, 5].map(\n        (level) =>\n            new TgdMaterialGlobal({\n                color: COLORS[level],\n                ambientColor: skybox,\n            }),\n    )\n    const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n    const bbox: {\n        min: Readonly<ArrayNumber3>\n        max: Readonly<ArrayNumber3>\n    } = {\n        min: [-1.31195, -1.39747, -1.06093],\n        max: [1.312, 1.2265, 1.563],\n    }\n    const lod = new TgdPainterLOD(context, {\n        bbox,\n        async factory(x: number, y: number, z: number, level: number) {\n            const asset: TgdDataGlb | null = await loadGLB(x, y, z, level)\n            if (!asset) return null\n\n            return new TgdPainterMeshGltf(context, {\n                asset,\n                material: materials[level],\n            })\n        },\n        subdivisions: 1,\n        // subdivisions: 3,\n        // surfaceThreshold: 0.8,\n    })\n    const points = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {\n        const point = new TgdPainterDebugPoint(context)\n        const [R, G, B, A] = COLORS[i]\n        point.color.x = R\n        point.color.y = G\n        point.color.z = B\n        point.color.w = A\n        return point\n    })\n    const group = new TgdPainterGroup(points)\n    const wireCube = new WireCube(context)\n    group.add(wireCube)\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: [lod, group],\n            depth: webglPresetDepth.less,\n            cull: webglPresetCull.back,\n        }),\n        new TgdPainterLogic((time) => {\n            // const { transfo } = context.camera\n            // transfo.setEulerRotation(\n            // \tMath.sin(time) * 30,\n            // \tMath.sin(time * 1.182) * 40,\n            // \t0,\n            // )\n            const bbox = {\n                min: [0.000025000000000052758, -1.39747, 0.251035],\n                max: [1.312, -0.08548500000000003, 1.563],\n            }\n            const [x0, y0, z0] = bbox.min\n            const [x1, y1, z1] = bbox.max\n            const corners: ArrayNumber3[] = [\n                [x0, y0, z0],\n                [x0, y1, z0],\n                [x1, y0, z0],\n                [x1, y1, z0],\n                [x0, y0, z1],\n                [x0, y1, z1],\n                [x1, y0, z1],\n                [x1, y1, z1],\n            ]\n            let ptr = 0\n            for (let i = 0; i < 8; i++) {\n                const [x, y, z, w] = context.camera.apply(corners[i])\n                const painter = points[i]\n                painter.x = x\n                painter.y = y\n                painter.z = z\n                painter.w = w\n                const { data } = wireCube\n                data[ptr++] = x\n                data[ptr++] = y\n                data[ptr++] = z\n                data[ptr++] = w\n            }\n        }),\n    )\n    context.inputs.keyboard.eventKeyPress.addListener((evt) => {\n        if (evt.key === \"d\") {\n            lod.debug()\n        }\n    })\n    context.paint()\n}"
};
var FULL = "import {\n    type ArrayNumber3,\n    type ArrayNumber4,\n    type TgdContext,\n    type TgdDataGlb,\n    TgdMaterialGlobal,\n    TgdPainterClear,\n    TgdPainterDebugPoint,\n    TgdPainterGroup,\n    TgdPainterLOD,\n    TgdPainterLogic,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdTextureCube,\n    tgdColorMakeHueWheel,\n    tgdLoadGlb,\n    webglPresetCull,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\n\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\"\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\"\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\"\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\"\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\"\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport { WireCube } from \"./wire-cube\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.distance = 14\n    context.camera.near = 1e-2\n    context.camera.far = 20\n    const color: ArrayNumber4 = [0.9, 0.5, 0.1, 1]\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n        steps: 8,\n    }).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n    const materials = [0, 1, 2, 3, 4, 5].map(\n        (level) =>\n            new TgdMaterialGlobal({\n                color: COLORS[level],\n                ambientColor: skybox,\n            }),\n    )\n    const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n    const bbox: {\n        min: Readonly<ArrayNumber3>\n        max: Readonly<ArrayNumber3>\n    } = {\n        min: [-1.31195, -1.39747, -1.06093],\n        max: [1.312, 1.2265, 1.563],\n    }\n    const lod = new TgdPainterLOD(context, {\n        bbox,\n        async factory(x: number, y: number, z: number, level: number) {\n            const asset: TgdDataGlb | null = await loadGLB(x, y, z, level)\n            if (!asset) return null\n\n            return new TgdPainterMeshGltf(context, {\n                asset,\n                material: materials[level],\n            })\n        },\n        subdivisions: 1,\n        // subdivisions: 3,\n        // surfaceThreshold: 0.8,\n    })\n    const points = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {\n        const point = new TgdPainterDebugPoint(context)\n        const [R, G, B, A] = COLORS[i]\n        point.color.x = R\n        point.color.y = G\n        point.color.z = B\n        point.color.w = A\n        return point\n    })\n    const group = new TgdPainterGroup(points)\n    const wireCube = new WireCube(context)\n    group.add(wireCube)\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: [lod, group],\n            depth: webglPresetDepth.less,\n            cull: webglPresetCull.back,\n        }),\n        new TgdPainterLogic((time) => {\n            // const { transfo } = context.camera\n            // transfo.setEulerRotation(\n            // \tMath.sin(time) * 30,\n            // \tMath.sin(time * 1.182) * 40,\n            // \t0,\n            // )\n            const bbox = {\n                min: [0.000025000000000052758, -1.39747, 0.251035],\n                max: [1.312, -0.08548500000000003, 1.563],\n            }\n            const [x0, y0, z0] = bbox.min\n            const [x1, y1, z1] = bbox.max\n            const corners: ArrayNumber3[] = [\n                [x0, y0, z0],\n                [x0, y1, z0],\n                [x1, y0, z0],\n                [x1, y1, z0],\n                [x0, y0, z1],\n                [x0, y1, z1],\n                [x1, y0, z1],\n                [x1, y1, z1],\n            ]\n            let ptr = 0\n            for (let i = 0; i < 8; i++) {\n                const [x, y, z, w] = context.camera.apply(corners[i])\n                const painter = points[i]\n                painter.x = x\n                painter.y = y\n                painter.z = z\n                painter.w = w\n                const { data } = wireCube\n                data[ptr++] = x\n                data[ptr++] = y\n                data[ptr++] = z\n                data[ptr++] = w\n            }\n        }),\n    )\n    context.inputs.keyboard.eventKeyPress.addListener((evt) => {\n        if (evt.key === \"d\") {\n            lod.debug()\n        }\n    })\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: {\n                    posX: PosX,\n                    posY: PosY,\n                    posZ: PosZ,\n                    negX: NegX,\n                    negY: NegY,\n                    negZ: NegZ,\n                },\n            }}\n            gizmo\n            controller={{\n                inertiaOrbit: 1000,\n                inertiaZoom: 1000,\n                speedZoom: 0.8,\n            }}\n        />\n    )\n}\n\nfunction toBin(value: number, level: number): string {\n    return value.toString(2).padStart(level, \"0\")\n}\n\nasync function loadGLB(x: number, y: number, z: number, level: number): Promise<TgdDataGlb | null> {\n    const url =\n        level === 0\n            ? \"./assets/lod/Octree.glb\"\n            : `./assets/lod/Octree${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}.glb`\n    console.log(\"Loading LOD block:\", url)\n    const asset = await tgdLoadGlb(url)\n    return asset\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
52003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _assets_cubemap_sky_contrast_negX_webp__rspack_import_2 = __webpack_require__(28814);
/* import */ var _assets_cubemap_sky_contrast_negY_webp__rspack_import_3 = __webpack_require__(51561);
/* import */ var _assets_cubemap_sky_contrast_negZ_webp__rspack_import_4 = __webpack_require__(30892);
/* import */ var _assets_cubemap_sky_contrast_posX_webp__rspack_import_5 = __webpack_require__(10618);
/* import */ var _assets_cubemap_sky_contrast_posY_webp__rspack_import_6 = __webpack_require__(24645);
/* import */ var _assets_cubemap_sky_contrast_posZ_webp__rspack_import_7 = __webpack_require__(85720);
/* import */ var _components_demo_Tgd__rspack_import_8 = __webpack_require__(43475);
/* import */ var _wire_cube__rspack_import_9 = __webpack_require__(56510);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}










// #begin
function init(context, assets) {
    context.camera.transfo.distance = 14;
    context.camera.near = 1e-2;
    context.camera.far = 20;
    var color = [
        0.9,
        0.5,
        0.1,
        1
    ];
    var skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ
    });
    var COLORS = (0,_tolokoban_tgd__rspack_import_1.tgdColorMakeHueWheel)({
        steps: 8
    }).map(function(color) {
        return [
            color.R,
            color.G,
            color.B,
            1
        ];
    });
    var materials = [
        0,
        1,
        2,
        3,
        4,
        5
    ].map(function(level) {
        return new _tolokoban_tgd__rspack_import_1.TgdMaterialGlobal({
            color: COLORS[level],
            ambientColor: skybox
        });
    });
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.3,
            0.3,
            0.3,
            1
        ]
    });
    var bbox = {
        min: [
            -1.31195,
            -1.39747,
            -1.06093
        ],
        max: [
            1.312,
            1.2265,
            1.563
        ]
    };
    var lod = new _tolokoban_tgd__rspack_import_1.TgdPainterLOD(context, {
        bbox: bbox,
        factory: function factory(x, y, z, level) {
            return _async_to_generator(function() {
                var asset;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                loadGLB(x, y, z, level)
                            ];
                        case 1:
                            asset = _state.sent();
                            if (!asset) return [
                                2,
                                null
                            ];
                            return [
                                2,
                                new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
                                    asset: asset,
                                    material: materials[level]
                                })
                            ];
                    }
                });
            })();
        },
        subdivisions: 1
    });
    var points = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ].map(function(i) {
        var point = new _tolokoban_tgd__rspack_import_1.TgdPainterDebugPoint(context);
        var _COLORS_i = _sliced_to_array(COLORS[i], 4), R = _COLORS_i[0], G = _COLORS_i[1], B = _COLORS_i[2], A = _COLORS_i[3];
        point.color.x = R;
        point.color.y = G;
        point.color.z = B;
        point.color.w = A;
        return point;
    });
    var group = new _tolokoban_tgd__rspack_import_1.TgdPainterGroup(points);
    var wireCube = new _wire_cube__rspack_import_9.WireCube(context);
    group.add(wireCube);
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        children: [
            lod,
            group
        ],
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time) {
        // const { transfo } = context.camera
        // transfo.setEulerRotation(
        // 	Math.sin(time) * 30,
        // 	Math.sin(time * 1.182) * 40,
        // 	0,
        // )
        var bbox = {
            min: [
                0.000025000000000052758,
                -1.39747,
                0.251035
            ],
            max: [
                1.312,
                -0.08548500000000003,
                1.563
            ]
        };
        var _bbox_min = _sliced_to_array(bbox.min, 3), x0 = _bbox_min[0], y0 = _bbox_min[1], z0 = _bbox_min[2];
        var _bbox_max = _sliced_to_array(bbox.max, 3), x1 = _bbox_max[0], y1 = _bbox_max[1], z1 = _bbox_max[2];
        var corners = [
            [
                x0,
                y0,
                z0
            ],
            [
                x0,
                y1,
                z0
            ],
            [
                x1,
                y0,
                z0
            ],
            [
                x1,
                y1,
                z0
            ],
            [
                x0,
                y0,
                z1
            ],
            [
                x0,
                y1,
                z1
            ],
            [
                x1,
                y0,
                z1
            ],
            [
                x1,
                y1,
                z1
            ]
        ];
        var ptr = 0;
        for(var i = 0; i < 8; i++){
            var _context_camera_apply = _sliced_to_array(context.camera.apply(corners[i]), 4), x = _context_camera_apply[0], y = _context_camera_apply[1], z = _context_camera_apply[2], w = _context_camera_apply[3];
            var painter = points[i];
            painter.x = x;
            painter.y = y;
            painter.z = z;
            painter.w = w;
            var data = wireCube.data;
            data[ptr++] = x;
            data[ptr++] = y;
            data[ptr++] = z;
            data[ptr++] = w;
        }
    }));
    context.inputs.keyboard.eventKeyPress.addListener(function(evt) {
        if (evt.key === "d") {
            lod.debug();
        }
    });
    context.paint();
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_8["default"], {
        onReady: init,
        assets: {
            image: {
                posX: _assets_cubemap_sky_contrast_posX_webp__rspack_import_5,
                posY: _assets_cubemap_sky_contrast_posY_webp__rspack_import_6,
                posZ: _assets_cubemap_sky_contrast_posZ_webp__rspack_import_7,
                negX: _assets_cubemap_sky_contrast_negX_webp__rspack_import_2,
                negY: _assets_cubemap_sky_contrast_negY_webp__rspack_import_3,
                negZ: _assets_cubemap_sky_contrast_negZ_webp__rspack_import_4
            }
        },
        gizmo: true,
        controller: {
            inertiaOrbit: 1000,
            inertiaZoom: 1000,
            speedZoom: 0.8
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/main.demo.tsx",
        lineNumber: 146,
        columnNumber: 9
    }, this);
}
function toBin(value, level) {
    return value.toString(2).padStart(level, "0");
}
function loadGLB(x, y, z, level) {
    return _async_to_generator(function() {
        var url, asset;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    url = level === 0 ? "./assets/lod/Octree.glb" : "./assets/lod/Octree".concat(toBin(x, level)).concat(toBin(y, level)).concat(toBin(z, level), ".glb");
                    console.log("Loading LOD block:", url);
                    return [
                        4,
                        (0,_tolokoban_tgd__rspack_import_1.tgdLoadGlb)(url)
                    ];
                case 1:
                    asset = _state.sent();
                    return [
                        2,
                        asset
                    ];
            }
        });
    })();
}


},
56510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WireCube: () => (WireCube)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}

var EPSILON = 1e-1 // 1e-3
;
var X0 = -1 + EPSILON;
var X1 = +1 - EPSILON;
var Y0 = -1 + EPSILON;
var Y1 = +1 - EPSILON;
var Z0 = 0 + EPSILON;
var Z1 = +1 - EPSILON;
var WireCube = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(WireCube, TgdPainter);
    function WireCube(context) {
        _class_call_check(this, WireCube);
        var _this;
        _this = _call_super(this, WireCube), _define_property(_this, "context", void 0), // prettier-ignore
        _define_property(_this, "data", void 0), _define_property(_this, "prg", void 0), _define_property(_this, "dataset", void 0), _define_property(_this, "vao", void 0), _this.context = context, _this.data = new Float32Array([
            X0,
            Y0,
            Z0,
            1,
            X0,
            Y1,
            Z0,
            1,
            X1,
            Y0,
            Z0,
            1,
            X1,
            Y1,
            Z0,
            1,
            X0,
            Y0,
            Z1,
            1,
            X0,
            Y1,
            Z1,
            1,
            X1,
            Y0,
            Z1,
            1,
            X1,
            Y1,
            Z1,
            1
        ]);
        var prg = new _tolokoban_tgd__rspack_import_0.TgdProgram(context.gl, {
            vert: new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
                attributes: {
                    attPosition: "vec4"
                },
                mainCode: [
                    "gl_Position = attPosition;"
                ]
            }).code,
            frag: new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                outputs: {
                    FragColor: "vec4"
                },
                mainCode: "FragColor = vec4(1, 1, 1, 0.5);"
            }).code
        });
        _this.prg = prg;
        var dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
            attPosition: "vec4"
        }, {
            usage: "DYNAMIC_DRAW"
        });
        dataset.count = 8;
        _this.dataset = dataset;
        // prettier-ignore
        var elements = new Uint8Array([
            0,
            1,
            0,
            2,
            0,
            4,
            1,
            3,
            1,
            5,
            2,
            3,
            2,
            6,
            3,
            7,
            4,
            5,
            4,
            6,
            5,
            7,
            6,
            7
        ]);
        var vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, prg, [
            dataset
        ], elements);
        _this.vao = vao;
        prg.debug();
        return _this;
    }
    _create_class(WireCube, [
        {
            key: "delete",
            value: function _delete() {
                this.prg.delete();
                this.vao.delete();
            }
        },
        {
            key: "paint",
            value: function paint() {
                var _this = this, context = _this.context, data = _this.data, prg = _this.prg, vao = _this.vao, dataset = _this.dataset;
                prg.use();
                var gl = context.gl;
                dataset.data = data.buffer;
                vao.updateDataset(dataset);
                vao.bind();
                gl.drawElements(gl.LINES, 24, gl.UNSIGNED_BYTE, 0);
                vao.unbind();
            }
        }
    ]);
    return WireCube;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
20578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(35825);
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
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterLOD.html",
                        children: "TgdPainterLOD"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " (second demo)"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Dynamic level of details."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move the camera around to see how the mesh reacts."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfZGV0YWlsX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZS1jMTkyZTQuMDMwODQyY2YxMjBhYmJkYi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvZGV0YWlsL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL2RldGFpbC9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvZGV0YWlsL18vbWFpbi5kZW1vL3dpcmUtY3ViZS50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL2RldGFpbC9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxNFxcbiAgICBjb250ZXh0LmNhbWVyYS5uZWFyID0gMWUtMlxcbiAgICBjb250ZXh0LmNhbWVyYS5mYXIgPSAyMFxcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWzAuOSwgMC41LCAwLjEsIDFdXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XFxuICAgICAgICBzdGVwczogOCxcXG4gICAgfSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNClcXG4gICAgY29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcXG4gICAgICAgIChsZXZlbCkgPT5cXG4gICAgICAgICAgICBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTW2xldmVsXSxcXG4gICAgICAgICAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXFxuICAgICAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSB9KVxcbiAgICBjb25zdCBiYm94OiB7XFxuICAgICAgICBtaW46IFJlYWRvbmx5PEFycmF5TnVtYmVyMz5cXG4gICAgICAgIG1heDogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPlxcbiAgICB9ID0ge1xcbiAgICAgICAgbWluOiBbLTEuMzExOTUsIC0xLjM5NzQ3LCAtMS4wNjA5M10sXFxuICAgICAgICBtYXg6IFsxLjMxMiwgMS4yMjY1LCAxLjU2M10sXFxuICAgIH1cXG4gICAgY29uc3QgbG9kID0gbmV3IFRnZFBhaW50ZXJMT0QoY29udGV4dCwge1xcbiAgICAgICAgYmJveCxcXG4gICAgICAgIGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0OiBUZ2REYXRhR2xiIHwgbnVsbCA9IGF3YWl0IGxvYWRHTEIoeCwgeSwgeiwgbGV2ZWwpXFxuICAgICAgICAgICAgaWYgKCFhc3NldCkgcmV0dXJuIG51bGxcXG5cXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGFzc2V0LFxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWxzW2xldmVsXSxcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgfSxcXG4gICAgICAgIHN1YmRpdmlzaW9uczogMSxcXG4gICAgICAgIC8vIHN1YmRpdmlzaW9uczogMyxcXG4gICAgICAgIC8vIHN1cmZhY2VUaHJlc2hvbGQ6IDAuOCxcXG4gICAgfSlcXG4gICAgY29uc3QgcG9pbnRzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDddLm1hcCgoaSkgPT4ge1xcbiAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgVGdkUGFpbnRlckRlYnVnUG9pbnQoY29udGV4dClcXG4gICAgICAgIGNvbnN0IFtSLCBHLCBCLCBBXSA9IENPTE9SU1tpXVxcbiAgICAgICAgcG9pbnQuY29sb3IueCA9IFJcXG4gICAgICAgIHBvaW50LmNvbG9yLnkgPSBHXFxuICAgICAgICBwb2ludC5jb2xvci56ID0gQlxcbiAgICAgICAgcG9pbnQuY29sb3IudyA9IEFcXG4gICAgICAgIHJldHVybiBwb2ludFxcbiAgICB9KVxcbiAgICBjb25zdCBncm91cCA9IG5ldyBUZ2RQYWludGVyR3JvdXAocG9pbnRzKVxcbiAgICBjb25zdCB3aXJlQ3ViZSA9IG5ldyBXaXJlQ3ViZShjb250ZXh0KVxcbiAgICBncm91cC5hZGQod2lyZUN1YmUpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2xvZCwgZ3JvdXBdLFxcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcXG4gICAgICAgICAgICAvLyBjb25zdCB7IHRyYW5zZm8gfSA9IGNvbnRleHQuY2FtZXJhXFxuICAgICAgICAgICAgLy8gdHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKFxcbiAgICAgICAgICAgIC8vIFxcdE1hdGguc2luKHRpbWUpICogMzAsXFxuICAgICAgICAgICAgLy8gXFx0TWF0aC5zaW4odGltZSAqIDEuMTgyKSAqIDQwLFxcbiAgICAgICAgICAgIC8vIFxcdDAsXFxuICAgICAgICAgICAgLy8gKVxcbiAgICAgICAgICAgIGNvbnN0IGJib3ggPSB7XFxuICAgICAgICAgICAgICAgIG1pbjogWzAuMDAwMDI1MDAwMDAwMDAwMDUyNzU4LCAtMS4zOTc0NywgMC4yNTEwMzVdLFxcbiAgICAgICAgICAgICAgICBtYXg6IFsxLjMxMiwgLTAuMDg1NDg1MDAwMDAwMDAwMDMsIDEuNTYzXSxcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgY29uc3QgW3gwLCB5MCwgejBdID0gYmJveC5taW5cXG4gICAgICAgICAgICBjb25zdCBbeDEsIHkxLCB6MV0gPSBiYm94Lm1heFxcbiAgICAgICAgICAgIGNvbnN0IGNvcm5lcnM6IEFycmF5TnVtYmVyM1tdID0gW1xcbiAgICAgICAgICAgICAgICBbeDAsIHkwLCB6MF0sXFxuICAgICAgICAgICAgICAgIFt4MCwgeTEsIHowXSxcXG4gICAgICAgICAgICAgICAgW3gxLCB5MCwgejBdLFxcbiAgICAgICAgICAgICAgICBbeDEsIHkxLCB6MF0sXFxuICAgICAgICAgICAgICAgIFt4MCwgeTAsIHoxXSxcXG4gICAgICAgICAgICAgICAgW3gwLCB5MSwgejFdLFxcbiAgICAgICAgICAgICAgICBbeDEsIHkwLCB6MV0sXFxuICAgICAgICAgICAgICAgIFt4MSwgeTEsIHoxXSxcXG4gICAgICAgICAgICBdXFxuICAgICAgICAgICAgbGV0IHB0ciA9IDBcXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xcbiAgICAgICAgICAgICAgICBjb25zdCBbeCwgeSwgeiwgd10gPSBjb250ZXh0LmNhbWVyYS5hcHBseShjb3JuZXJzW2ldKVxcbiAgICAgICAgICAgICAgICBjb25zdCBwYWludGVyID0gcG9pbnRzW2ldXFxuICAgICAgICAgICAgICAgIHBhaW50ZXIueCA9IHhcXG4gICAgICAgICAgICAgICAgcGFpbnRlci55ID0geVxcbiAgICAgICAgICAgICAgICBwYWludGVyLnogPSB6XFxuICAgICAgICAgICAgICAgIHBhaW50ZXIudyA9IHdcXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB3aXJlQ3ViZVxcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHhcXG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB5XFxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0gelxcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHdcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LmlucHV0cy5rZXlib2FyZC5ldmVudEtleVByZXNzLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG4gICAgICAgIGlmIChldnQua2V5ID09PSBcXFwiZFxcXCIpIHtcXG4gICAgICAgICAgICBsb2QuZGVidWcoKVxcbiAgICAgICAgfVxcbiAgICB9KVxcbiAgICBjb250ZXh0LnBhaW50KClcXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0eXBlIEFycmF5TnVtYmVyMyxcXG4gICAgdHlwZSBBcnJheU51bWJlcjQsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgdHlwZSBUZ2REYXRhR2xiLFxcbiAgICBUZ2RNYXRlcmlhbEdsb2JhbCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyRGVidWdQb2ludCxcXG4gICAgVGdkUGFpbnRlckdyb3VwLFxcbiAgICBUZ2RQYWludGVyTE9ELFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcXG4gICAgdGdkQ29sb3JNYWtlSHVlV2hlZWwsXFxuICAgIHRnZExvYWRHbGIsXFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBOZWdYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1gud2VicFxcXCJcXG5pbXBvcnQgTmVnWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXFxcIlxcbmltcG9ydCBQb3NYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1gud2VicFxcXCJcXG5pbXBvcnQgUG9zWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcXFwiXFxuaW1wb3J0IFBvc1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXFxcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCB7IFdpcmVDdWJlIH0gZnJvbSBcXFwiLi93aXJlLWN1YmVcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTRcXG4gICAgY29udGV4dC5jYW1lcmEubmVhciA9IDFlLTJcXG4gICAgY29udGV4dC5jYW1lcmEuZmFyID0gMjBcXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFswLjksIDAuNSwgMC4xLCAxXVxcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcbiAgICB9KVxcbiAgICBjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcbiAgICAgICAgc3RlcHM6IDgsXFxuICAgIH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXFxuICAgIGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXFxuICAgICAgICAobGV2ZWwpID0+XFxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SU1tsZXZlbF0sXFxuICAgICAgICAgICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxcbiAgICAgICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSlcXG4gICAgY29uc3QgYmJveDoge1xcbiAgICAgICAgbWluOiBSZWFkb25seTxBcnJheU51bWJlcjM+XFxuICAgICAgICBtYXg6IFJlYWRvbmx5PEFycmF5TnVtYmVyMz5cXG4gICAgfSA9IHtcXG4gICAgICAgIG1pbjogWy0xLjMxMTk1LCAtMS4zOTc0NywgLTEuMDYwOTNdLFxcbiAgICAgICAgbWF4OiBbMS4zMTIsIDEuMjI2NSwgMS41NjNdLFxcbiAgICB9XFxuICAgIGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcXG4gICAgICAgIGJib3gsXFxuICAgICAgICBhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBjb25zdCBhc3NldDogVGdkRGF0YUdsYiB8IG51bGwgPSBhd2FpdCBsb2FkR0xCKHgsIHksIHosIGxldmVsKVxcbiAgICAgICAgICAgIGlmICghYXNzZXQpIHJldHVybiBudWxsXFxuXFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBhc3NldCxcXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsc1tsZXZlbF0sXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICBzdWJkaXZpc2lvbnM6IDEsXFxuICAgICAgICAvLyBzdWJkaXZpc2lvbnM6IDMsXFxuICAgICAgICAvLyBzdXJmYWNlVGhyZXNob2xkOiAwLjgsXFxuICAgIH0pXFxuICAgIGNvbnN0IHBvaW50cyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3XS5tYXAoKGkpID0+IHtcXG4gICAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFRnZFBhaW50ZXJEZWJ1Z1BvaW50KGNvbnRleHQpXFxuICAgICAgICBjb25zdCBbUiwgRywgQiwgQV0gPSBDT0xPUlNbaV1cXG4gICAgICAgIHBvaW50LmNvbG9yLnggPSBSXFxuICAgICAgICBwb2ludC5jb2xvci55ID0gR1xcbiAgICAgICAgcG9pbnQuY29sb3IueiA9IEJcXG4gICAgICAgIHBvaW50LmNvbG9yLncgPSBBXFxuICAgICAgICByZXR1cm4gcG9pbnRcXG4gICAgfSlcXG4gICAgY29uc3QgZ3JvdXAgPSBuZXcgVGdkUGFpbnRlckdyb3VwKHBvaW50cylcXG4gICAgY29uc3Qgd2lyZUN1YmUgPSBuZXcgV2lyZUN1YmUoY29udGV4dClcXG4gICAgZ3JvdXAuYWRkKHdpcmVDdWJlKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgY2hpbGRyZW46IFtsb2QsIGdyb3VwXSxcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgLy8gY29uc3QgeyB0cmFuc2ZvIH0gPSBjb250ZXh0LmNhbWVyYVxcbiAgICAgICAgICAgIC8vIHRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihcXG4gICAgICAgICAgICAvLyBcXHRNYXRoLnNpbih0aW1lKSAqIDMwLFxcbiAgICAgICAgICAgIC8vIFxcdE1hdGguc2luKHRpbWUgKiAxLjE4MikgKiA0MCxcXG4gICAgICAgICAgICAvLyBcXHQwLFxcbiAgICAgICAgICAgIC8vIClcXG4gICAgICAgICAgICBjb25zdCBiYm94ID0ge1xcbiAgICAgICAgICAgICAgICBtaW46IFswLjAwMDAyNTAwMDAwMDAwMDA1Mjc1OCwgLTEuMzk3NDcsIDAuMjUxMDM1XSxcXG4gICAgICAgICAgICAgICAgbWF4OiBbMS4zMTIsIC0wLjA4NTQ4NTAwMDAwMDAwMDAzLCAxLjU2M10sXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGNvbnN0IFt4MCwgeTAsIHowXSA9IGJib3gubWluXFxuICAgICAgICAgICAgY29uc3QgW3gxLCB5MSwgejFdID0gYmJveC5tYXhcXG4gICAgICAgICAgICBjb25zdCBjb3JuZXJzOiBBcnJheU51bWJlcjNbXSA9IFtcXG4gICAgICAgICAgICAgICAgW3gwLCB5MCwgejBdLFxcbiAgICAgICAgICAgICAgICBbeDAsIHkxLCB6MF0sXFxuICAgICAgICAgICAgICAgIFt4MSwgeTAsIHowXSxcXG4gICAgICAgICAgICAgICAgW3gxLCB5MSwgejBdLFxcbiAgICAgICAgICAgICAgICBbeDAsIHkwLCB6MV0sXFxuICAgICAgICAgICAgICAgIFt4MCwgeTEsIHoxXSxcXG4gICAgICAgICAgICAgICAgW3gxLCB5MCwgejFdLFxcbiAgICAgICAgICAgICAgICBbeDEsIHkxLCB6MV0sXFxuICAgICAgICAgICAgXVxcbiAgICAgICAgICAgIGxldCBwdHIgPSAwXFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcXG4gICAgICAgICAgICAgICAgY29uc3QgW3gsIHksIHosIHddID0gY29udGV4dC5jYW1lcmEuYXBwbHkoY29ybmVyc1tpXSlcXG4gICAgICAgICAgICAgICAgY29uc3QgcGFpbnRlciA9IHBvaW50c1tpXVxcbiAgICAgICAgICAgICAgICBwYWludGVyLnggPSB4XFxuICAgICAgICAgICAgICAgIHBhaW50ZXIueSA9IHlcXG4gICAgICAgICAgICAgICAgcGFpbnRlci56ID0gelxcbiAgICAgICAgICAgICAgICBwYWludGVyLncgPSB3XFxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gd2lyZUN1YmVcXG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB4XFxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0geVxcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHpcXG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB3XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5pbnB1dHMua2V5Ym9hcmQuZXZlbnRLZXlQcmVzcy5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XFxuICAgICAgICBpZiAoZXZ0LmtleSA9PT0gXFxcImRcXFwiKSB7XFxuICAgICAgICAgICAgbG9kLmRlYnVnKClcXG4gICAgICAgIH1cXG4gICAgfSlcXG4gICAgY29udGV4dC5wYWludCgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NYOiBQb3NYLFxcbiAgICAgICAgICAgICAgICAgICAgcG9zWTogUG9zWSxcXG4gICAgICAgICAgICAgICAgICAgIHBvc1o6IFBvc1osXFxuICAgICAgICAgICAgICAgICAgICBuZWdYOiBOZWdYLFxcbiAgICAgICAgICAgICAgICAgICAgbmVnWTogTmVnWSxcXG4gICAgICAgICAgICAgICAgICAgIG5lZ1o6IE5lZ1osXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBnaXptb1xcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgICAgICBpbmVydGlhWm9vbTogMTAwMCxcXG4gICAgICAgICAgICAgICAgc3BlZWRab29tOiAwLjgsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXFxuZnVuY3Rpb24gdG9CaW4odmFsdWU6IG51bWJlciwgbGV2ZWw6IG51bWJlcik6IHN0cmluZyB7XFxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygyKS5wYWRTdGFydChsZXZlbCwgXFxcIjBcXFwiKVxcbn1cXG5cXG5hc3luYyBmdW5jdGlvbiBsb2FkR0xCKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBQcm9taXNlPFRnZERhdGFHbGIgfCBudWxsPiB7XFxuICAgIGNvbnN0IHVybCA9XFxuICAgICAgICBsZXZlbCA9PT0gMFxcbiAgICAgICAgICAgID8gXFxcIi4vYXNzZXRzL2xvZC9PY3RyZWUuZ2xiXFxcIlxcbiAgICAgICAgICAgIDogYC4vYXNzZXRzL2xvZC9PY3RyZWUke3RvQmluKHgsIGxldmVsKX0ke3RvQmluKHksIGxldmVsKX0ke3RvQmluKHosIGxldmVsKX0uZ2xiYFxcbiAgICBjb25zb2xlLmxvZyhcXFwiTG9hZGluZyBMT0QgYmxvY2s6XFxcIiwgdXJsKVxcbiAgICBjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRHbGIodXJsKVxcbiAgICByZXR1cm4gYXNzZXRcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdHlwZSBBcnJheU51bWJlcjMsXG4gICAgdHlwZSBBcnJheU51bWJlcjQsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIHR5cGUgVGdkRGF0YUdsYixcbiAgICBUZ2RNYXRlcmlhbEdsb2JhbCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckRlYnVnUG9pbnQsXG4gICAgVGdkUGFpbnRlckdyb3VwLFxuICAgIFRnZFBhaW50ZXJMT0QsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZUN1YmUsXG4gICAgdGdkQ29sb3JNYWtlSHVlV2hlZWwsXG4gICAgdGdkTG9hZEdsYixcbiAgICB3ZWJnbFByZXNldEN1bGwsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IE5lZ1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1gud2VicFwiXG5pbXBvcnQgTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWS53ZWJwXCJcbmltcG9ydCBOZWdaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdaLndlYnBcIlxuaW1wb3J0IFBvc1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1gud2VicFwiXG5pbXBvcnQgUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWS53ZWJwXCJcbmltcG9ydCBQb3NaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NaLndlYnBcIlxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IFdpcmVDdWJlIH0gZnJvbSBcIi4vd2lyZS1jdWJlXCJcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDE0XG4gICAgY29udGV4dC5jYW1lcmEubmVhciA9IDFlLTJcbiAgICBjb250ZXh0LmNhbWVyYS5mYXIgPSAyMFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMC45LCAwLjUsIDAuMSwgMV1cbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxuICAgIH0pXG4gICAgY29uc3QgQ09MT1JTOiBBcnJheU51bWJlcjRbXSA9IHRnZENvbG9yTWFrZUh1ZVdoZWVsKHtcbiAgICAgICAgc3RlcHM6IDgsXG4gICAgfSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNClcbiAgICBjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxuICAgICAgICAobGV2ZWwpID0+XG4gICAgICAgICAgICBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxuICAgICAgICAgICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxuICAgICAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSlcbiAgICBjb25zdCBiYm94OiB7XG4gICAgICAgIG1pbjogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPlxuICAgICAgICBtYXg6IFJlYWRvbmx5PEFycmF5TnVtYmVyMz5cbiAgICB9ID0ge1xuICAgICAgICBtaW46IFstMS4zMTE5NSwgLTEuMzk3NDcsIC0xLjA2MDkzXSxcbiAgICAgICAgbWF4OiBbMS4zMTIsIDEuMjI2NSwgMS41NjNdLFxuICAgIH1cbiAgICBjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XG4gICAgICAgIGJib3gsXG4gICAgICAgIGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgYXNzZXQ6IFRnZERhdGFHbGIgfCBudWxsID0gYXdhaXQgbG9hZEdMQih4LCB5LCB6LCBsZXZlbClcbiAgICAgICAgICAgIGlmICghYXNzZXQpIHJldHVybiBudWxsXG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWxzW2xldmVsXSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHN1YmRpdmlzaW9uczogMSxcbiAgICAgICAgLy8gc3ViZGl2aXNpb25zOiAzLFxuICAgICAgICAvLyBzdXJmYWNlVGhyZXNob2xkOiAwLjgsXG4gICAgfSlcbiAgICBjb25zdCBwb2ludHMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgN10ubWFwKChpKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFRnZFBhaW50ZXJEZWJ1Z1BvaW50KGNvbnRleHQpXG4gICAgICAgIGNvbnN0IFtSLCBHLCBCLCBBXSA9IENPTE9SU1tpXVxuICAgICAgICBwb2ludC5jb2xvci54ID0gUlxuICAgICAgICBwb2ludC5jb2xvci55ID0gR1xuICAgICAgICBwb2ludC5jb2xvci56ID0gQlxuICAgICAgICBwb2ludC5jb2xvci53ID0gQVxuICAgICAgICByZXR1cm4gcG9pbnRcbiAgICB9KVxuICAgIGNvbnN0IGdyb3VwID0gbmV3IFRnZFBhaW50ZXJHcm91cChwb2ludHMpXG4gICAgY29uc3Qgd2lyZUN1YmUgPSBuZXcgV2lyZUN1YmUoY29udGV4dClcbiAgICBncm91cC5hZGQod2lyZUN1YmUpXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbG9kLCBncm91cF0sXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zdCB7IHRyYW5zZm8gfSA9IGNvbnRleHQuY2FtZXJhXG4gICAgICAgICAgICAvLyB0cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oXG4gICAgICAgICAgICAvLyBcdE1hdGguc2luKHRpbWUpICogMzAsXG4gICAgICAgICAgICAvLyBcdE1hdGguc2luKHRpbWUgKiAxLjE4MikgKiA0MCxcbiAgICAgICAgICAgIC8vIFx0MCxcbiAgICAgICAgICAgIC8vIClcbiAgICAgICAgICAgIGNvbnN0IGJib3ggPSB7XG4gICAgICAgICAgICAgICAgbWluOiBbMC4wMDAwMjUwMDAwMDAwMDAwNTI3NTgsIC0xLjM5NzQ3LCAwLjI1MTAzNV0sXG4gICAgICAgICAgICAgICAgbWF4OiBbMS4zMTIsIC0wLjA4NTQ4NTAwMDAwMDAwMDAzLCAxLjU2M10sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBbeDAsIHkwLCB6MF0gPSBiYm94Lm1pblxuICAgICAgICAgICAgY29uc3QgW3gxLCB5MSwgejFdID0gYmJveC5tYXhcbiAgICAgICAgICAgIGNvbnN0IGNvcm5lcnM6IEFycmF5TnVtYmVyM1tdID0gW1xuICAgICAgICAgICAgICAgIFt4MCwgeTAsIHowXSxcbiAgICAgICAgICAgICAgICBbeDAsIHkxLCB6MF0sXG4gICAgICAgICAgICAgICAgW3gxLCB5MCwgejBdLFxuICAgICAgICAgICAgICAgIFt4MSwgeTEsIHowXSxcbiAgICAgICAgICAgICAgICBbeDAsIHkwLCB6MV0sXG4gICAgICAgICAgICAgICAgW3gwLCB5MSwgejFdLFxuICAgICAgICAgICAgICAgIFt4MSwgeTAsIHoxXSxcbiAgICAgICAgICAgICAgICBbeDEsIHkxLCB6MV0sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBsZXQgcHRyID0gMFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbeCwgeSwgeiwgd10gPSBjb250ZXh0LmNhbWVyYS5hcHBseShjb3JuZXJzW2ldKVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhaW50ZXIgPSBwb2ludHNbaV1cbiAgICAgICAgICAgICAgICBwYWludGVyLnggPSB4XG4gICAgICAgICAgICAgICAgcGFpbnRlci55ID0geVxuICAgICAgICAgICAgICAgIHBhaW50ZXIueiA9IHpcbiAgICAgICAgICAgICAgICBwYWludGVyLncgPSB3XG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB3aXJlQ3ViZVxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0geFxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0geVxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0gelxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0gd1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5pbnB1dHMua2V5Ym9hcmQuZXZlbnRLZXlQcmVzcy5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XG4gICAgICAgIGlmIChldnQua2V5ID09PSBcImRcIikge1xuICAgICAgICAgICAgbG9kLmRlYnVnKClcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29udGV4dC5wYWludCgpXG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgICAgICBwb3NYOiBQb3NYLFxuICAgICAgICAgICAgICAgICAgICBwb3NZOiBQb3NZLFxuICAgICAgICAgICAgICAgICAgICBwb3NaOiBQb3NaLFxuICAgICAgICAgICAgICAgICAgICBuZWdYOiBOZWdYLFxuICAgICAgICAgICAgICAgICAgICBuZWdZOiBOZWdZLFxuICAgICAgICAgICAgICAgICAgICBuZWdaOiBOZWdaLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZ2l6bW9cbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgaW5lcnRpYVpvb206IDEwMDAsXG4gICAgICAgICAgICAgICAgc3BlZWRab29tOiAwLjgsXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gdG9CaW4odmFsdWU6IG51bWJlciwgbGV2ZWw6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKDIpLnBhZFN0YXJ0KGxldmVsLCBcIjBcIilcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEdMQih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBsZXZlbDogbnVtYmVyKTogUHJvbWlzZTxUZ2REYXRhR2xiIHwgbnVsbD4ge1xuICAgIGNvbnN0IHVybCA9XG4gICAgICAgIGxldmVsID09PSAwXG4gICAgICAgICAgICA/IFwiLi9hc3NldHMvbG9kL09jdHJlZS5nbGJcIlxuICAgICAgICAgICAgOiBgLi9hc3NldHMvbG9kL09jdHJlZSR7dG9CaW4oeCwgbGV2ZWwpfSR7dG9CaW4oeSwgbGV2ZWwpfSR7dG9CaW4oeiwgbGV2ZWwpfS5nbGJgXG4gICAgY29uc29sZS5sb2coXCJMb2FkaW5nIExPRCBibG9jazpcIiwgdXJsKVxuICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEdsYih1cmwpXG4gICAgcmV0dXJuIGFzc2V0XG59XG4iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZFBhaW50ZXIsXG4gICAgVGdkUHJvZ3JhbSxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXG4gICAgVGdkVmVydGV4QXJyYXksXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmNvbnN0IEVQU0lMT04gPSAxZS0xIC8vIDFlLTNcbmNvbnN0IFgwID0gLTEgKyBFUFNJTE9OXG5jb25zdCBYMSA9ICsxIC0gRVBTSUxPTlxuY29uc3QgWTAgPSAtMSArIEVQU0lMT05cbmNvbnN0IFkxID0gKzEgLSBFUFNJTE9OXG5jb25zdCBaMCA9IDAgKyBFUFNJTE9OXG5jb25zdCBaMSA9ICsxIC0gRVBTSUxPTlxuXG5leHBvcnQgY2xhc3MgV2lyZUN1YmUgZXh0ZW5kcyBUZ2RQYWludGVyIHtcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICBwdWJsaWMgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuXHRcdFgwLCBZMCwgWjAsIDEsICAvLyAwXG5cdFx0WDAsIFkxLCBaMCwgMSwgIC8vIDFcblx0XHRYMSwgWTAsIFowLCAxLCAgLy8gMlxuXHRcdFgxLCBZMSwgWjAsIDEsICAvLyAzXG5cdFx0WDAsIFkwLCBaMSwgMSwgIC8vIDRcblx0XHRYMCwgWTEsIFoxLCAxLCAgLy8gNVxuXHRcdFgxLCBZMCwgWjEsIDEsICAvLyA2XG5cdFx0WDEsIFkxLCBaMSwgMSwgIC8vIDdcbiAgICBdKVxuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcmc6IFRnZFByb2dyYW1cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGFzZXQ6IFRnZERhdGFzZXRcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXlcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIGNvbnN0IHByZyA9IG5ldyBUZ2RQcm9ncmFtKGNvbnRleHQuZ2wsIHtcbiAgICAgICAgICAgIHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgYXR0UG9zaXRpb246IFwidmVjNFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcImdsX1Bvc2l0aW9uID0gYXR0UG9zaXRpb247XCJdLFxuICAgICAgICAgICAgfSkuY29kZSxcbiAgICAgICAgICAgIGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG4gICAgICAgICAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgICAgICAgICBGcmFnQ29sb3I6IFwidmVjNFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFwiRnJhZ0NvbG9yID0gdmVjNCgxLCAxLCAxLCAwLjUpO1wiLFxuICAgICAgICAgICAgfSkuY29kZSxcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wcmcgPSBwcmdcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dFBvc2l0aW9uOiBcInZlYzRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXNhZ2U6IFwiRFlOQU1JQ19EUkFXXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICAgIGRhdGFzZXQuY291bnQgPSA4XG4gICAgICAgIHRoaXMuZGF0YXNldCA9IGRhdGFzZXRcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAgICAgMCwgMSwgMCwgMiwgMCwgNCxcbiAgICAgICAgICAgIDEsIDMsIDEsIDUsXG4gICAgICAgICAgICAyLCAzLCAyLCA2LFxuICAgICAgICAgICAgMywgNyxcbiAgICAgICAgICAgIDQsIDUsIDQsIDYsXG4gICAgICAgICAgICA1LCA3LFxuICAgICAgICAgICAgNiwgN1xuICAgICAgICBdKVxuICAgICAgICBjb25zdCB2YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgcHJnLCBbZGF0YXNldF0sIGVsZW1lbnRzKVxuICAgICAgICB0aGlzLnZhbyA9IHZhb1xuICAgICAgICBwcmcuZGVidWcoKVxuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5wcmcuZGVsZXRlKClcbiAgICAgICAgdGhpcy52YW8uZGVsZXRlKClcbiAgICB9XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3QgeyBjb250ZXh0LCBkYXRhLCBwcmcsIHZhbywgZGF0YXNldCB9ID0gdGhpc1xuICAgICAgICBwcmcudXNlKClcbiAgICAgICAgY29uc3QgeyBnbCB9ID0gY29udGV4dFxuICAgICAgICBkYXRhc2V0LmRhdGEgPSBkYXRhLmJ1ZmZlclxuICAgICAgICB2YW8udXBkYXRlRGF0YXNldChkYXRhc2V0KVxuICAgICAgICB2YW8uYmluZCgpXG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5MSU5FUywgMjQsIGdsLlVOU0lHTkVEX0JZVEUsIDApXG4gICAgICAgIHZhby51bmJpbmQoKVxuICAgIH1cbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkTWF0ZXJpYWxHbG9iYWwiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyRGVidWdQb2ludCIsIlRnZFBhaW50ZXJHcm91cCIsIlRnZFBhaW50ZXJMT0QiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlQ3ViZSIsInRnZENvbG9yTWFrZUh1ZVdoZWVsIiwidGdkTG9hZEdsYiIsIndlYmdsUHJlc2V0Q3VsbCIsIndlYmdsUHJlc2V0RGVwdGgiLCJOZWdYIiwiTmVnWSIsIk5lZ1oiLCJQb3NYIiwiUG9zWSIsIlBvc1oiLCJWaWV3IiwiV2lyZUN1YmUiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNvbG9yIiwic2t5Ym94IiwiQ09MT1JTIiwibWF0ZXJpYWxzIiwibGV2ZWwiLCJjbGVhciIsImJib3giLCJsb2QiLCJmYWN0b3J5IiwieCIsInkiLCJ6IiwiYXNzZXQiLCJsb2FkR0xCIiwicG9pbnRzIiwiaSIsInBvaW50IiwiX0NPTE9SU19pIiwiUiIsIkciLCJCIiwiQSIsImdyb3VwIiwid2lyZUN1YmUiLCJ0aW1lIiwiX2Jib3hfbWluIiwieDAiLCJ5MCIsInowIiwiX2Jib3hfbWF4IiwieDEiLCJ5MSIsInoxIiwiY29ybmVycyIsInB0ciIsIl9jb250ZXh0X2NhbWVyYV9hcHBseSIsInciLCJwYWludGVyIiwiZGF0YSIsImV2dCIsInRvQmluIiwidmFsdWUiLCJ1cmwiLCJjb25zb2xlIiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXIiLCJUZ2RQcm9ncmFtIiwiVGdkU2hhZGVyRnJhZ21lbnQiLCJUZ2RTaGFkZXJWZXJ0ZXgiLCJUZ2RWZXJ0ZXhBcnJheSIsIkVQU0lMT04iLCJYMCIsIlgxIiwiWTAiLCJZMSIsIlowIiwiWjEiLCJGbG9hdDMyQXJyYXkiLCJwcmciLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJVaW50OEFycmF5IiwidmFvIiwiX2RlbGV0ZSIsInBhaW50IiwiX3RoaXMiLCJnbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUE0cUg7QUFDdnNILElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9E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