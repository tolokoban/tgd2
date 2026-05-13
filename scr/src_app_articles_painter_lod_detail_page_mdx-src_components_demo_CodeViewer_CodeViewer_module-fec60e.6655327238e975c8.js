"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_lod_detail_page_mdx-src_components_demo_CodeViewer_CodeViewer_module-fec60e"], {
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/main.demo.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " (second demo)"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Dynamic level of details."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move the camera around to see how the mesh reacts."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfZGV0YWlsX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZS1mZWM2MGUuNjY1NTMyNzIzOGU5NzVjOC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9kZXRhaWwvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9kZXRhaWwvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvZGV0YWlsL18vbWFpbi5kZW1vL3dpcmUtY3ViZS50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvZGV0YWlsL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTRcXG4gICAgY29udGV4dC5jYW1lcmEubmVhciA9IDFlLTJcXG4gICAgY29udGV4dC5jYW1lcmEuZmFyID0gMjBcXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFswLjksIDAuNSwgMC4xLCAxXVxcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcbiAgICB9KVxcbiAgICBjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcbiAgICAgICAgc3RlcHM6IDgsXFxuICAgIH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXFxuICAgIGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXFxuICAgICAgICAobGV2ZWwpID0+XFxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SU1tsZXZlbF0sXFxuICAgICAgICAgICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxcbiAgICAgICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSlcXG4gICAgY29uc3QgYmJveDoge1xcbiAgICAgICAgbWluOiBSZWFkb25seTxBcnJheU51bWJlcjM+XFxuICAgICAgICBtYXg6IFJlYWRvbmx5PEFycmF5TnVtYmVyMz5cXG4gICAgfSA9IHtcXG4gICAgICAgIG1pbjogWy0xLjMxMTk1LCAtMS4zOTc0NywgLTEuMDYwOTNdLFxcbiAgICAgICAgbWF4OiBbMS4zMTIsIDEuMjI2NSwgMS41NjNdLFxcbiAgICB9XFxuICAgIGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcXG4gICAgICAgIGJib3gsXFxuICAgICAgICBhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBjb25zdCBhc3NldDogVGdkRGF0YUdsYiB8IG51bGwgPSBhd2FpdCBsb2FkR0xCKHgsIHksIHosIGxldmVsKVxcbiAgICAgICAgICAgIGlmICghYXNzZXQpIHJldHVybiBudWxsXFxuXFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBhc3NldCxcXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsc1tsZXZlbF0sXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICBzdWJkaXZpc2lvbnM6IDEsXFxuICAgICAgICAvLyBzdWJkaXZpc2lvbnM6IDMsXFxuICAgICAgICAvLyBzdXJmYWNlVGhyZXNob2xkOiAwLjgsXFxuICAgIH0pXFxuICAgIGNvbnN0IHBvaW50cyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3XS5tYXAoKGkpID0+IHtcXG4gICAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFRnZFBhaW50ZXJEZWJ1Z1BvaW50KGNvbnRleHQpXFxuICAgICAgICBjb25zdCBbUiwgRywgQiwgQV0gPSBDT0xPUlNbaV1cXG4gICAgICAgIHBvaW50LmNvbG9yLnggPSBSXFxuICAgICAgICBwb2ludC5jb2xvci55ID0gR1xcbiAgICAgICAgcG9pbnQuY29sb3IueiA9IEJcXG4gICAgICAgIHBvaW50LmNvbG9yLncgPSBBXFxuICAgICAgICByZXR1cm4gcG9pbnRcXG4gICAgfSlcXG4gICAgY29uc3QgZ3JvdXAgPSBuZXcgVGdkUGFpbnRlckdyb3VwKHBvaW50cylcXG4gICAgY29uc3Qgd2lyZUN1YmUgPSBuZXcgV2lyZUN1YmUoY29udGV4dClcXG4gICAgZ3JvdXAuYWRkKHdpcmVDdWJlKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgY2hpbGRyZW46IFtsb2QsIGdyb3VwXSxcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgLy8gY29uc3QgeyB0cmFuc2ZvIH0gPSBjb250ZXh0LmNhbWVyYVxcbiAgICAgICAgICAgIC8vIHRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihcXG4gICAgICAgICAgICAvLyBcXHRNYXRoLnNpbih0aW1lKSAqIDMwLFxcbiAgICAgICAgICAgIC8vIFxcdE1hdGguc2luKHRpbWUgKiAxLjE4MikgKiA0MCxcXG4gICAgICAgICAgICAvLyBcXHQwLFxcbiAgICAgICAgICAgIC8vIClcXG4gICAgICAgICAgICBjb25zdCBiYm94ID0ge1xcbiAgICAgICAgICAgICAgICBtaW46IFswLjAwMDAyNTAwMDAwMDAwMDA1Mjc1OCwgLTEuMzk3NDcsIDAuMjUxMDM1XSxcXG4gICAgICAgICAgICAgICAgbWF4OiBbMS4zMTIsIC0wLjA4NTQ4NTAwMDAwMDAwMDAzLCAxLjU2M10sXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGNvbnN0IFt4MCwgeTAsIHowXSA9IGJib3gubWluXFxuICAgICAgICAgICAgY29uc3QgW3gxLCB5MSwgejFdID0gYmJveC5tYXhcXG4gICAgICAgICAgICBjb25zdCBjb3JuZXJzOiBBcnJheU51bWJlcjNbXSA9IFtcXG4gICAgICAgICAgICAgICAgW3gwLCB5MCwgejBdLFxcbiAgICAgICAgICAgICAgICBbeDAsIHkxLCB6MF0sXFxuICAgICAgICAgICAgICAgIFt4MSwgeTAsIHowXSxcXG4gICAgICAgICAgICAgICAgW3gxLCB5MSwgejBdLFxcbiAgICAgICAgICAgICAgICBbeDAsIHkwLCB6MV0sXFxuICAgICAgICAgICAgICAgIFt4MCwgeTEsIHoxXSxcXG4gICAgICAgICAgICAgICAgW3gxLCB5MCwgejFdLFxcbiAgICAgICAgICAgICAgICBbeDEsIHkxLCB6MV0sXFxuICAgICAgICAgICAgXVxcbiAgICAgICAgICAgIGxldCBwdHIgPSAwXFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcXG4gICAgICAgICAgICAgICAgY29uc3QgW3gsIHksIHosIHddID0gY29udGV4dC5jYW1lcmEuYXBwbHkoY29ybmVyc1tpXSlcXG4gICAgICAgICAgICAgICAgY29uc3QgcGFpbnRlciA9IHBvaW50c1tpXVxcbiAgICAgICAgICAgICAgICBwYWludGVyLnggPSB4XFxuICAgICAgICAgICAgICAgIHBhaW50ZXIueSA9IHlcXG4gICAgICAgICAgICAgICAgcGFpbnRlci56ID0gelxcbiAgICAgICAgICAgICAgICBwYWludGVyLncgPSB3XFxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gd2lyZUN1YmVcXG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB4XFxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0geVxcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHpcXG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB3XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5pbnB1dHMua2V5Ym9hcmQuZXZlbnRLZXlQcmVzcy5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XFxuICAgICAgICBpZiAoZXZ0LmtleSA9PT0gXFxcImRcXFwiKSB7XFxuICAgICAgICAgICAgbG9kLmRlYnVnKClcXG4gICAgICAgIH1cXG4gICAgfSlcXG4gICAgY29udGV4dC5wYWludCgpXFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdHlwZSBBcnJheU51bWJlcjMsXFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIHR5cGUgVGdkRGF0YUdsYixcXG4gICAgVGdkTWF0ZXJpYWxHbG9iYWwsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckRlYnVnUG9pbnQsXFxuICAgIFRnZFBhaW50ZXJHcm91cCxcXG4gICAgVGdkUGFpbnRlckxPRCxcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZUN1YmUsXFxuICAgIHRnZENvbG9yTWFrZUh1ZVdoZWVsLFxcbiAgICB0Z2RMb2FkR2xiLFxcbiAgICB3ZWJnbFByZXNldEN1bGwsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5cXG5pbXBvcnQgTmVnWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdYLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWS53ZWJwXFxcIlxcbmltcG9ydCBOZWdaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1oud2VicFxcXCJcXG5pbXBvcnQgUG9zWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NYLndlYnBcXFwiXFxuaW1wb3J0IFBvc1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWS53ZWJwXFxcIlxcbmltcG9ydCBQb3NaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1oud2VicFxcXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgeyBXaXJlQ3ViZSB9IGZyb20gXFxcIi4vd2lyZS1jdWJlXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDE0XFxuICAgIGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxZS0yXFxuICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IDIwXFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMC45LCAwLjUsIDAuMSwgMV1cXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG4gICAgfSlcXG4gICAgY29uc3QgQ09MT1JTOiBBcnJheU51bWJlcjRbXSA9IHRnZENvbG9yTWFrZUh1ZVdoZWVsKHtcXG4gICAgICAgIHN0ZXBzOiA4LFxcbiAgICB9KS5tYXAoKGNvbG9yKSA9PiBbY29sb3IuUiwgY29sb3IuRywgY29sb3IuQiwgMV0gYXMgQXJyYXlOdW1iZXI0KVxcbiAgICBjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxcbiAgICAgICAgKGxldmVsKSA9PlxcbiAgICAgICAgICAgIG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxcbiAgICAgICAgICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcXG4gICAgICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXFxuICAgIGNvbnN0IGJib3g6IHtcXG4gICAgICAgIG1pbjogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPlxcbiAgICAgICAgbWF4OiBSZWFkb25seTxBcnJheU51bWJlcjM+XFxuICAgIH0gPSB7XFxuICAgICAgICBtaW46IFstMS4zMTE5NSwgLTEuMzk3NDcsIC0xLjA2MDkzXSxcXG4gICAgICAgIG1heDogWzEuMzEyLCAxLjIyNjUsIDEuNTYzXSxcXG4gICAgfVxcbiAgICBjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XFxuICAgICAgICBiYm94LFxcbiAgICAgICAgYXN5bmMgZmFjdG9yeSh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBsZXZlbDogbnVtYmVyKSB7XFxuICAgICAgICAgICAgY29uc3QgYXNzZXQ6IFRnZERhdGFHbGIgfCBudWxsID0gYXdhaXQgbG9hZEdMQih4LCB5LCB6LCBsZXZlbClcXG4gICAgICAgICAgICBpZiAoIWFzc2V0KSByZXR1cm4gbnVsbFxcblxcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgYXNzZXQsXFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbHNbbGV2ZWxdLFxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgc3ViZGl2aXNpb25zOiAxLFxcbiAgICAgICAgLy8gc3ViZGl2aXNpb25zOiAzLFxcbiAgICAgICAgLy8gc3VyZmFjZVRocmVzaG9sZDogMC44LFxcbiAgICB9KVxcbiAgICBjb25zdCBwb2ludHMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgN10ubWFwKChpKSA9PiB7XFxuICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBUZ2RQYWludGVyRGVidWdQb2ludChjb250ZXh0KVxcbiAgICAgICAgY29uc3QgW1IsIEcsIEIsIEFdID0gQ09MT1JTW2ldXFxuICAgICAgICBwb2ludC5jb2xvci54ID0gUlxcbiAgICAgICAgcG9pbnQuY29sb3IueSA9IEdcXG4gICAgICAgIHBvaW50LmNvbG9yLnogPSBCXFxuICAgICAgICBwb2ludC5jb2xvci53ID0gQVxcbiAgICAgICAgcmV0dXJuIHBvaW50XFxuICAgIH0pXFxuICAgIGNvbnN0IGdyb3VwID0gbmV3IFRnZFBhaW50ZXJHcm91cChwb2ludHMpXFxuICAgIGNvbnN0IHdpcmVDdWJlID0gbmV3IFdpcmVDdWJlKGNvbnRleHQpXFxuICAgIGdyb3VwLmFkZCh3aXJlQ3ViZSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbG9kLCBncm91cF0sXFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgICAgICAgIC8vIGNvbnN0IHsgdHJhbnNmbyB9ID0gY29udGV4dC5jYW1lcmFcXG4gICAgICAgICAgICAvLyB0cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oXFxuICAgICAgICAgICAgLy8gXFx0TWF0aC5zaW4odGltZSkgKiAzMCxcXG4gICAgICAgICAgICAvLyBcXHRNYXRoLnNpbih0aW1lICogMS4xODIpICogNDAsXFxuICAgICAgICAgICAgLy8gXFx0MCxcXG4gICAgICAgICAgICAvLyApXFxuICAgICAgICAgICAgY29uc3QgYmJveCA9IHtcXG4gICAgICAgICAgICAgICAgbWluOiBbMC4wMDAwMjUwMDAwMDAwMDAwNTI3NTgsIC0xLjM5NzQ3LCAwLjI1MTAzNV0sXFxuICAgICAgICAgICAgICAgIG1heDogWzEuMzEyLCAtMC4wODU0ODUwMDAwMDAwMDAwMywgMS41NjNdLFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBjb25zdCBbeDAsIHkwLCB6MF0gPSBiYm94Lm1pblxcbiAgICAgICAgICAgIGNvbnN0IFt4MSwgeTEsIHoxXSA9IGJib3gubWF4XFxuICAgICAgICAgICAgY29uc3QgY29ybmVyczogQXJyYXlOdW1iZXIzW10gPSBbXFxuICAgICAgICAgICAgICAgIFt4MCwgeTAsIHowXSxcXG4gICAgICAgICAgICAgICAgW3gwLCB5MSwgejBdLFxcbiAgICAgICAgICAgICAgICBbeDEsIHkwLCB6MF0sXFxuICAgICAgICAgICAgICAgIFt4MSwgeTEsIHowXSxcXG4gICAgICAgICAgICAgICAgW3gwLCB5MCwgejFdLFxcbiAgICAgICAgICAgICAgICBbeDAsIHkxLCB6MV0sXFxuICAgICAgICAgICAgICAgIFt4MSwgeTAsIHoxXSxcXG4gICAgICAgICAgICAgICAgW3gxLCB5MSwgejFdLFxcbiAgICAgICAgICAgIF1cXG4gICAgICAgICAgICBsZXQgcHRyID0gMFxcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IFt4LCB5LCB6LCB3XSA9IGNvbnRleHQuY2FtZXJhLmFwcGx5KGNvcm5lcnNbaV0pXFxuICAgICAgICAgICAgICAgIGNvbnN0IHBhaW50ZXIgPSBwb2ludHNbaV1cXG4gICAgICAgICAgICAgICAgcGFpbnRlci54ID0geFxcbiAgICAgICAgICAgICAgICBwYWludGVyLnkgPSB5XFxuICAgICAgICAgICAgICAgIHBhaW50ZXIueiA9IHpcXG4gICAgICAgICAgICAgICAgcGFpbnRlci53ID0gd1xcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHdpcmVDdWJlXFxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0geFxcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHlcXG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB6XFxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0gd1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQuaW5wdXRzLmtleWJvYXJkLmV2ZW50S2V5UHJlc3MuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09IFxcXCJkXFxcIikge1xcbiAgICAgICAgICAgIGxvZC5kZWJ1ZygpXFxuICAgICAgICB9XFxuICAgIH0pXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zWDogUG9zWCxcXG4gICAgICAgICAgICAgICAgICAgIHBvc1k6IFBvc1ksXFxuICAgICAgICAgICAgICAgICAgICBwb3NaOiBQb3NaLFxcbiAgICAgICAgICAgICAgICAgICAgbmVnWDogTmVnWCxcXG4gICAgICAgICAgICAgICAgICAgIG5lZ1k6IE5lZ1ksXFxuICAgICAgICAgICAgICAgICAgICBuZWdaOiBOZWdaLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICAgICAgaW5lcnRpYVpvb206IDEwMDAsXFxuICAgICAgICAgICAgICAgIHNwZWVkWm9vbTogMC44LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmZ1bmN0aW9uIHRvQmluKHZhbHVlOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoMikucGFkU3RhcnQobGV2ZWwsIFxcXCIwXFxcIilcXG59XFxuXFxuYXN5bmMgZnVuY3Rpb24gbG9hZEdMQih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBsZXZlbDogbnVtYmVyKTogUHJvbWlzZTxUZ2REYXRhR2xiIHwgbnVsbD4ge1xcbiAgICBjb25zdCB1cmwgPVxcbiAgICAgICAgbGV2ZWwgPT09IDBcXG4gICAgICAgICAgICA/IFxcXCIuL2Fzc2V0cy9sb2QvT2N0cmVlLmdsYlxcXCJcXG4gICAgICAgICAgICA6IGAuL2Fzc2V0cy9sb2QvT2N0cmVlJHt0b0Jpbih4LCBsZXZlbCl9JHt0b0Jpbih5LCBsZXZlbCl9JHt0b0Jpbih6LCBsZXZlbCl9LmdsYmBcXG4gICAgY29uc29sZS5sb2coXFxcIkxvYWRpbmcgTE9EIGJsb2NrOlxcXCIsIHVybClcXG4gICAgY29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkR2xiKHVybClcXG4gICAgcmV0dXJuIGFzc2V0XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHR5cGUgQXJyYXlOdW1iZXIzLFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICB0eXBlIFRnZERhdGFHbGIsXG4gICAgVGdkTWF0ZXJpYWxHbG9iYWwsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJEZWJ1Z1BvaW50LFxuICAgIFRnZFBhaW50ZXJHcm91cCxcbiAgICBUZ2RQYWludGVyTE9ELFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmVDdWJlLFxuICAgIHRnZENvbG9yTWFrZUh1ZVdoZWVsLFxuICAgIHRnZExvYWRHbGIsXG4gICAgd2ViZ2xQcmVzZXRDdWxsLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdYLndlYnBcIlxuaW1wb3J0IE5lZ1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFwiXG5pbXBvcnQgTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXCJcbmltcG9ydCBQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NYLndlYnBcIlxuaW1wb3J0IFBvc1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFwiXG5pbXBvcnQgUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXCJcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQgeyBXaXJlQ3ViZSB9IGZyb20gXCIuL3dpcmUtY3ViZVwiXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxNFxuICAgIGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxZS0yXG4gICAgY29udGV4dC5jYW1lcmEuZmFyID0gMjBcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWzAuOSwgMC41LCAwLjEsIDFdXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcbiAgICB9KVxuICAgIGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XG4gICAgICAgIHN0ZXBzOiA4LFxuICAgIH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXG4gICAgY29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcbiAgICAgICAgKGxldmVsKSA9PlxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTW2xldmVsXSxcbiAgICAgICAgICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcbiAgICAgICAgICAgIH0pLFxuICAgIClcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXG4gICAgY29uc3QgYmJveDoge1xuICAgICAgICBtaW46IFJlYWRvbmx5PEFycmF5TnVtYmVyMz5cbiAgICAgICAgbWF4OiBSZWFkb25seTxBcnJheU51bWJlcjM+XG4gICAgfSA9IHtcbiAgICAgICAgbWluOiBbLTEuMzExOTUsIC0xLjM5NzQ3LCAtMS4wNjA5M10sXG4gICAgICAgIG1heDogWzEuMzEyLCAxLjIyNjUsIDEuNTYzXSxcbiAgICB9XG4gICAgY29uc3QgbG9kID0gbmV3IFRnZFBhaW50ZXJMT0QoY29udGV4dCwge1xuICAgICAgICBiYm94LFxuICAgICAgICBhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0OiBUZ2REYXRhR2xiIHwgbnVsbCA9IGF3YWl0IGxvYWRHTEIoeCwgeSwgeiwgbGV2ZWwpXG4gICAgICAgICAgICBpZiAoIWFzc2V0KSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsc1tsZXZlbF0sXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzdWJkaXZpc2lvbnM6IDEsXG4gICAgICAgIC8vIHN1YmRpdmlzaW9uczogMyxcbiAgICAgICAgLy8gc3VyZmFjZVRocmVzaG9sZDogMC44LFxuICAgIH0pXG4gICAgY29uc3QgcG9pbnRzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDddLm1hcCgoaSkgPT4ge1xuICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBUZ2RQYWludGVyRGVidWdQb2ludChjb250ZXh0KVxuICAgICAgICBjb25zdCBbUiwgRywgQiwgQV0gPSBDT0xPUlNbaV1cbiAgICAgICAgcG9pbnQuY29sb3IueCA9IFJcbiAgICAgICAgcG9pbnQuY29sb3IueSA9IEdcbiAgICAgICAgcG9pbnQuY29sb3IueiA9IEJcbiAgICAgICAgcG9pbnQuY29sb3IudyA9IEFcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgfSlcbiAgICBjb25zdCBncm91cCA9IG5ldyBUZ2RQYWludGVyR3JvdXAocG9pbnRzKVxuICAgIGNvbnN0IHdpcmVDdWJlID0gbmV3IFdpcmVDdWJlKGNvbnRleHQpXG4gICAgZ3JvdXAuYWRkKHdpcmVDdWJlKVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBjbGVhcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW2xvZCwgZ3JvdXBdLFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc3QgeyB0cmFuc2ZvIH0gPSBjb250ZXh0LmNhbWVyYVxuICAgICAgICAgICAgLy8gdHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKFxuICAgICAgICAgICAgLy8gXHRNYXRoLnNpbih0aW1lKSAqIDMwLFxuICAgICAgICAgICAgLy8gXHRNYXRoLnNpbih0aW1lICogMS4xODIpICogNDAsXG4gICAgICAgICAgICAvLyBcdDAsXG4gICAgICAgICAgICAvLyApXG4gICAgICAgICAgICBjb25zdCBiYm94ID0ge1xuICAgICAgICAgICAgICAgIG1pbjogWzAuMDAwMDI1MDAwMDAwMDAwMDUyNzU4LCAtMS4zOTc0NywgMC4yNTEwMzVdLFxuICAgICAgICAgICAgICAgIG1heDogWzEuMzEyLCAtMC4wODU0ODUwMDAwMDAwMDAwMywgMS41NjNdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgW3gwLCB5MCwgejBdID0gYmJveC5taW5cbiAgICAgICAgICAgIGNvbnN0IFt4MSwgeTEsIHoxXSA9IGJib3gubWF4XG4gICAgICAgICAgICBjb25zdCBjb3JuZXJzOiBBcnJheU51bWJlcjNbXSA9IFtcbiAgICAgICAgICAgICAgICBbeDAsIHkwLCB6MF0sXG4gICAgICAgICAgICAgICAgW3gwLCB5MSwgejBdLFxuICAgICAgICAgICAgICAgIFt4MSwgeTAsIHowXSxcbiAgICAgICAgICAgICAgICBbeDEsIHkxLCB6MF0sXG4gICAgICAgICAgICAgICAgW3gwLCB5MCwgejFdLFxuICAgICAgICAgICAgICAgIFt4MCwgeTEsIHoxXSxcbiAgICAgICAgICAgICAgICBbeDEsIHkwLCB6MV0sXG4gICAgICAgICAgICAgICAgW3gxLCB5MSwgejFdLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgbGV0IHB0ciA9IDBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3gsIHksIHosIHddID0gY29udGV4dC5jYW1lcmEuYXBwbHkoY29ybmVyc1tpXSlcbiAgICAgICAgICAgICAgICBjb25zdCBwYWludGVyID0gcG9pbnRzW2ldXG4gICAgICAgICAgICAgICAgcGFpbnRlci54ID0geFxuICAgICAgICAgICAgICAgIHBhaW50ZXIueSA9IHlcbiAgICAgICAgICAgICAgICBwYWludGVyLnogPSB6XG4gICAgICAgICAgICAgICAgcGFpbnRlci53ID0gd1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gd2lyZUN1YmVcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHhcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHlcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHpcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQuaW5wdXRzLmtleWJvYXJkLmV2ZW50S2V5UHJlc3MuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xuICAgICAgICBpZiAoZXZ0LmtleSA9PT0gXCJkXCIpIHtcbiAgICAgICAgICAgIGxvZC5kZWJ1ZygpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNvbnRleHQucGFpbnQoKVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zWDogUG9zWCxcbiAgICAgICAgICAgICAgICAgICAgcG9zWTogUG9zWSxcbiAgICAgICAgICAgICAgICAgICAgcG9zWjogUG9zWixcbiAgICAgICAgICAgICAgICAgICAgbmVnWDogTmVnWCxcbiAgICAgICAgICAgICAgICAgICAgbmVnWTogTmVnWSxcbiAgICAgICAgICAgICAgICAgICAgbmVnWjogTmVnWixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxuICAgICAgICAgICAgICAgIHNwZWVkWm9vbTogMC44LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIHRvQmluKHZhbHVlOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygyKS5wYWRTdGFydChsZXZlbCwgXCIwXCIpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRHTEIoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcik6IFByb21pc2U8VGdkRGF0YUdsYiB8IG51bGw+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgICBsZXZlbCA9PT0gMFxuICAgICAgICAgICAgPyBcIi4vYXNzZXRzL2xvZC9PY3RyZWUuZ2xiXCJcbiAgICAgICAgICAgIDogYC4vYXNzZXRzL2xvZC9PY3RyZWUke3RvQmluKHgsIGxldmVsKX0ke3RvQmluKHksIGxldmVsKX0ke3RvQmluKHosIGxldmVsKX0uZ2xiYFxuICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBMT0QgYmxvY2s6XCIsIHVybClcbiAgICBjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRHbGIodXJsKVxuICAgIHJldHVybiBhc3NldFxufVxuIiwiaW1wb3J0IHtcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkRGF0YXNldCxcbiAgICBUZ2RQYWludGVyLFxuICAgIFRnZFByb2dyYW0sXG4gICAgVGdkU2hhZGVyRnJhZ21lbnQsXG4gICAgVGdkU2hhZGVyVmVydGV4LFxuICAgIFRnZFZlcnRleEFycmF5LFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5jb25zdCBFUFNJTE9OID0gMWUtMSAvLyAxZS0zXG5jb25zdCBYMCA9IC0xICsgRVBTSUxPTlxuY29uc3QgWDEgPSArMSAtIEVQU0lMT05cbmNvbnN0IFkwID0gLTEgKyBFUFNJTE9OXG5jb25zdCBZMSA9ICsxIC0gRVBTSUxPTlxuY29uc3QgWjAgPSAwICsgRVBTSUxPTlxuY29uc3QgWjEgPSArMSAtIEVQU0lMT05cblxuZXhwb3J0IGNsYXNzIFdpcmVDdWJlIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgcHVibGljIGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KFtcblx0XHRYMCwgWTAsIFowLCAxLCAgLy8gMFxuXHRcdFgwLCBZMSwgWjAsIDEsICAvLyAxXG5cdFx0WDEsIFkwLCBaMCwgMSwgIC8vIDJcblx0XHRYMSwgWTEsIFowLCAxLCAgLy8gM1xuXHRcdFgwLCBZMCwgWjEsIDEsICAvLyA0XG5cdFx0WDAsIFkxLCBaMSwgMSwgIC8vIDVcblx0XHRYMSwgWTAsIFoxLCAxLCAgLy8gNlxuXHRcdFgxLCBZMSwgWjEsIDEsICAvLyA3XG4gICAgXSlcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJnOiBUZ2RQcm9ncmFtXG4gICAgcHJpdmF0ZSByZWFkb25seSBkYXRhc2V0OiBUZ2REYXRhc2V0XG4gICAgcHJpdmF0ZSByZWFkb25seSB2YW86IFRnZFZlcnRleEFycmF5XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBjb25zdCBwcmcgPSBuZXcgVGdkUHJvZ3JhbShjb250ZXh0LmdsLCB7XG4gICAgICAgICAgICB2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGF0dFBvc2l0aW9uOiBcInZlYzRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXCJnbF9Qb3NpdGlvbiA9IGF0dFBvc2l0aW9uO1wiXSxcbiAgICAgICAgICAgIH0pLmNvZGUsXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgICAgICAgICAgRnJhZ0NvbG9yOiBcInZlYzRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBcIkZyYWdDb2xvciA9IHZlYzQoMSwgMSwgMSwgMC41KTtcIixcbiAgICAgICAgICAgIH0pLmNvZGUsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJnID0gcHJnXG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRQb3NpdGlvbjogXCJ2ZWM0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVzYWdlOiBcIkRZTkFNSUNfRFJBV1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKVxuICAgICAgICBkYXRhc2V0LmNvdW50ID0gOFxuICAgICAgICB0aGlzLmRhdGFzZXQgPSBkYXRhc2V0XG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgICAgIDAsIDEsIDAsIDIsIDAsIDQsXG4gICAgICAgICAgICAxLCAzLCAxLCA1LFxuICAgICAgICAgICAgMiwgMywgMiwgNixcbiAgICAgICAgICAgIDMsIDcsXG4gICAgICAgICAgICA0LCA1LCA0LCA2LFxuICAgICAgICAgICAgNSwgNyxcbiAgICAgICAgICAgIDYsIDdcbiAgICAgICAgXSlcbiAgICAgICAgY29uc3QgdmFvID0gbmV3IFRnZFZlcnRleEFycmF5KGNvbnRleHQuZ2wsIHByZywgW2RhdGFzZXRdLCBlbGVtZW50cylcbiAgICAgICAgdGhpcy52YW8gPSB2YW9cbiAgICAgICAgcHJnLmRlYnVnKClcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMucHJnLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMudmFvLmRlbGV0ZSgpXG4gICAgfVxuXG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHsgY29udGV4dCwgZGF0YSwgcHJnLCB2YW8sIGRhdGFzZXQgfSA9IHRoaXNcbiAgICAgICAgcHJnLnVzZSgpXG4gICAgICAgIGNvbnN0IHsgZ2wgfSA9IGNvbnRleHRcbiAgICAgICAgZGF0YXNldC5kYXRhID0gZGF0YS5idWZmZXJcbiAgICAgICAgdmFvLnVwZGF0ZURhdGFzZXQoZGF0YXNldClcbiAgICAgICAgdmFvLmJpbmQoKVxuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuTElORVMsIDI0LCBnbC5VTlNJR05FRF9CWVRFLCAwKVxuICAgICAgICB2YW8udW5iaW5kKClcbiAgICB9XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZE1hdGVyaWFsR2xvYmFsIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckRlYnVnUG9pbnQiLCJUZ2RQYWludGVyR3JvdXAiLCJUZ2RQYWludGVyTE9EIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZUN1YmUiLCJ0Z2RDb2xvck1ha2VIdWVXaGVlbCIsInRnZExvYWRHbGIiLCJ3ZWJnbFByZXNldEN1bGwiLCJ3ZWJnbFByZXNldERlcHRoIiwiTmVnWCIsIk5lZ1kiLCJOZWdaIiwiUG9zWCIsIlBvc1kiLCJQb3NaIiwiVmlldyIsIldpcmVDdWJlIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjb2xvciIsInNreWJveCIsIkNPTE9SUyIsIm1hdGVyaWFscyIsImxldmVsIiwiY2xlYXIiLCJiYm94IiwibG9kIiwiZmFjdG9yeSIsIngiLCJ5IiwieiIsImFzc2V0IiwibG9hZEdMQiIsInBvaW50cyIsImkiLCJwb2ludCIsIl9DT0xPUlNfaSIsIlIiLCJHIiwiQiIsIkEiLCJncm91cCIsIndpcmVDdWJlIiwidGltZSIsIl9iYm94X21pbiIsIngwIiwieTAiLCJ6MCIsIl9iYm94X21heCIsIngxIiwieTEiLCJ6MSIsImNvcm5lcnMiLCJwdHIiLCJfY29udGV4dF9jYW1lcmFfYXBwbHkiLCJ3IiwicGFpbnRlciIsImRhdGEiLCJldnQiLCJ0b0JpbiIsInZhbHVlIiwidXJsIiwiY29uc29sZSIsIlRnZERhdGFzZXQiLCJUZ2RQYWludGVyIiwiVGdkUHJvZ3JhbSIsIlRnZFNoYWRlckZyYWdtZW50IiwiVGdkU2hhZGVyVmVydGV4IiwiVGdkVmVydGV4QXJyYXkiLCJFUFNJTE9OIiwiWDAiLCJYMSIsIlkwIiwiWTEiLCJaMCIsIloxIiwiRmxvYXQzMkFycmF5IiwicHJnIiwiZGF0YXNldCIsImVsZW1lbnRzIiwiVWludDhBcnJheSIsInZhbyIsIl9kZWxldGUiLCJwYWludCIsIl90aGlzIiwiZ2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDdkI7QUFFOUIsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBNHFIO0FBQ3ZzSCxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSixzQ0FBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ2xEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR3RDLGtEQUFDTix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPTSxPQUFPSCxPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFHNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnVCO0FBRW1DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ25CO0FBRXRDLFNBQVM7QUFDVCxTQUFTNEIsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUM3Q0QsUUFBUSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRztJQUNsQ0EsUUFBUSxNQUFNLENBQUMsSUFBSSxHQUFHO0lBQ3RCQSxRQUFRLE1BQU0sQ0FBQyxHQUFHLEdBQUc7SUFDckIsSUFBTUUsUUFBc0I7UUFBQztRQUFLO1FBQUs7UUFBSztLQUFFO0lBQzlDLElBQU1DLFNBQVMsSUFBSWpCLDhDQUFjQSxDQUFDYyxTQUFTO1FBQ3ZDLFdBQVdDLE9BQU8sS0FBSyxDQUFDLElBQUk7UUFDNUIsV0FBV0EsT0FBTyxLQUFLLENBQUMsSUFBSTtRQUM1QixXQUFXQSxPQUFPLEtBQUssQ0FBQyxJQUFJO1FBQzVCLFdBQVdBLE9BQU8sS0FBSyxDQUFDLElBQUk7UUFDNUIsV0FBV0EsT0FBTyxLQUFLLENBQUMsSUFBSTtRQUM1QixXQUFXQSxPQUFPLEtBQUssQ0FBQyxJQUFJO0lBQ2hDO0lBQ0EsSUFBTUcsU0FBeUJqQix3REFBb0JBLENBQUM7UUFDaEQsT0FBTztJQUNYLEdBQUcsR0FBRyxDQUFDLFNBQUNlO2VBQVU7WUFBQ0EsTUFBTSxDQUFDO1lBQUVBLE1BQU0sQ0FBQztZQUFFQSxNQUFNLENBQUM7WUFBRTtTQUFFOztJQUNoRCxJQUFNRyxZQUFZO1FBQUM7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO0tBQUUsQ0FBQyxHQUFHLENBQ3BDLFNBQUNDO2VBQ0csSUFBSTVCLGlEQUFpQkEsQ0FBQztZQUNsQixPQUFPMEIsTUFBTSxDQUFDRSxNQUFNO1lBQ3BCLGNBQWNIO1FBQ2xCOztJQUVSLElBQU1JLFFBQVEsSUFBSTVCLCtDQUFlQSxDQUFDcUIsU0FBUztRQUFFLE9BQU87WUFBQztZQUFLO1lBQUs7WUFBSztTQUFFO0lBQUM7SUFDdkUsSUFBTVEsT0FHRjtRQUNBLEtBQUs7WUFBQyxDQUFDO1lBQVMsQ0FBQztZQUFTLENBQUM7U0FBUTtRQUNuQyxLQUFLO1lBQUM7WUFBTztZQUFRO1NBQU07SUFDL0I7SUFDQSxJQUFNQyxNQUFNLElBQUkzQiw2Q0FBYUEsQ0FBQ2tCLFNBQVM7UUFDbkNRLE1BQUFBO1FBQ01FLFNBQU4sU0FBTUEsUUFBUUMsQ0FBUyxFQUFFQyxDQUFTLEVBQUVDLENBQVMsRUFBRVAsS0FBYTs7b0JBQ2xEUTs7Ozs0QkFBMkI7O2dDQUFNQyxRQUFRSixHQUFHQyxHQUFHQyxHQUFHUDs7OzRCQUFsRFEsUUFBMkI7NEJBQ2pDLElBQUksQ0FBQ0EsT0FBTzs7Z0NBQU87OzRCQUVuQjs7Z0NBQU8sSUFBSTlCLGtEQUFrQkEsQ0FBQ2dCLFNBQVM7b0NBQ25DYyxPQUFBQTtvQ0FDQSxVQUFVVCxTQUFTLENBQUNDLE1BQU07Z0NBQzlCOzs7O1lBQ0o7O1FBQ0EsY0FBYztJQUdsQjtJQUNBLElBQU1VLFNBQVM7UUFBQztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO0tBQUUsQ0FBQyxHQUFHLENBQUMsU0FBQ0M7UUFDekMsSUFBTUMsUUFBUSxJQUFJdEMsb0RBQW9CQSxDQUFDb0I7UUFDdkMsSUFBcUJtQiw2QkFBQUEsTUFBTSxDQUFDRixFQUFFLE1BQXZCRyxJQUFjRCxjQUFYRSxJQUFXRixjQUFSRyxJQUFRSCxjQUFMSSxJQUFLSjtRQUNyQkQsTUFBTSxLQUFLLENBQUMsQ0FBQyxHQUFHRTtRQUNoQkYsTUFBTSxLQUFLLENBQUMsQ0FBQyxHQUFHRztRQUNoQkgsTUFBTSxLQUFLLENBQUMsQ0FBQyxHQUFHSTtRQUNoQkosTUFBTSxLQUFLLENBQUMsQ0FBQyxHQUFHSztRQUNoQixPQUFPTDtJQUNYO0lBQ0EsSUFBTU0sUUFBUSxJQUFJM0MsK0NBQWVBLENBQUNtQztJQUNsQyxJQUFNUyxXQUFXLElBQUkzQixvQ0FBUUEsQ0FBQ0U7SUFDOUJ3QixNQUFNLEdBQUcsQ0FBQ0M7SUFDVnpCLFFBQVEsR0FBRyxDQUNQTyxPQUNBLElBQUl0QiwrQ0FBZUEsQ0FBQ2UsU0FBUztRQUN6QixVQUFVO1lBQUNTO1lBQUtlO1NBQU07UUFDdEIsT0FBT2xDLHFEQUFxQjtRQUM1QixNQUFNRCxvREFBb0I7SUFDOUIsSUFDQSxJQUFJTiwrQ0FBZUEsQ0FBQyxTQUFDMkM7UUFDakIscUNBQXFDO1FBQ3JDLDRCQUE0QjtRQUM1Qix3QkFBd0I7UUFDeEIsZ0NBQWdDO1FBQ2hDLE1BQU07UUFDTixJQUFJO1FBQ0osSUFBTWxCLE9BQU87WUFDVCxLQUFLO2dCQUFDO2dCQUF5QixDQUFDO2dCQUFTO2FBQVM7WUFDbEQsS0FBSztnQkFBQztnQkFBTyxDQUFDO2dCQUFxQjthQUFNO1FBQzdDO1FBQ0EsSUFBcUJtQiw2QkFBQUEsS0FBSyxHQUFHLE1BQXRCQyxLQUFjRCxjQUFWRSxLQUFVRixjQUFORyxLQUFNSDtRQUNyQixJQUFxQkksNkJBQUFBLEtBQUssR0FBRyxNQUF0QkMsS0FBY0QsY0FBVkUsS0FBVUYsY0FBTkcsS0FBTUg7UUFDckIsSUFBTUksVUFBMEI7WUFDNUI7Z0JBQUNQO2dCQUFJQztnQkFBSUM7YUFBRztZQUNaO2dCQUFDRjtnQkFBSUs7Z0JBQUlIO2FBQUc7WUFDWjtnQkFBQ0U7Z0JBQUlIO2dCQUFJQzthQUFHO1lBQ1o7Z0JBQUNFO2dCQUFJQztnQkFBSUg7YUFBRztZQUNaO2dCQUFDRjtnQkFBSUM7Z0JBQUlLO2FBQUc7WUFDWjtnQkFBQ047Z0JBQUlLO2dCQUFJQzthQUFHO1lBQ1o7Z0JBQUNGO2dCQUFJSDtnQkFBSUs7YUFBRztZQUNaO2dCQUFDRjtnQkFBSUM7Z0JBQUlDO2FBQUc7U0FDZjtRQUNELElBQUlFLE1BQU07UUFDVixJQUFLLElBQUluQixJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSztZQUN4QixJQUFxQm9CLHlDQUFBQSxRQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUNGLE9BQU8sQ0FBQ2xCLEVBQUUsT0FBN0NOLElBQWMwQiwwQkFBWHpCLElBQVd5QiwwQkFBUnhCLElBQVF3QiwwQkFBTEMsSUFBS0Q7WUFDckIsSUFBTUUsVUFBVXZCLE1BQU0sQ0FBQ0MsRUFBRTtZQUN6QnNCLFFBQVEsQ0FBQyxHQUFHNUI7WUFDWjRCLFFBQVEsQ0FBQyxHQUFHM0I7WUFDWjJCLFFBQVEsQ0FBQyxHQUFHMUI7WUFDWjBCLFFBQVEsQ0FBQyxHQUFHRDtZQUNaLElBQVFFLE9BQVNmLFNBQVRlO1lBQ1JBLElBQUksQ0FBQ0osTUFBTSxHQUFHekI7WUFDZDZCLElBQUksQ0FBQ0osTUFBTSxHQUFHeEI7WUFDZDRCLElBQUksQ0FBQ0osTUFBTSxHQUFHdkI7WUFDZDJCLElBQUksQ0FBQ0osTUFBTSxHQUFHRTtRQUNsQjtJQUNKO0lBRUp0QyxRQUFRLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxTQUFDeUM7UUFDL0MsSUFBSUEsSUFBSSxHQUFHLEtBQUssS0FBSztZQUNqQmhDLElBQUksS0FBSztRQUNiO0lBQ0o7SUFDQVQsUUFBUSxLQUFLO0FBQ2pCO0FBQ0EsT0FBTztBQUVRLFNBQVM5QjtJQUNwQixxQkFDSSxrREFBQzJCLGdEQUFJQTtRQUNELFNBQVNFO1FBQ1QsUUFBUTtZQUNKLE9BQU87Z0JBQ0gsTUFBTUwsdURBQUlBO2dCQUNWLE1BQU1DLHVEQUFJQTtnQkFDVixNQUFNQyx1REFBSUE7Z0JBQ1YsTUFBTUwsdURBQUlBO2dCQUNWLE1BQU1DLHVEQUFJQTtnQkFDVixNQUFNQyx1REFBSUE7WUFDZDtRQUNKO1FBQ0EsS0FBSztRQUNMLFlBQVk7WUFDUixjQUFjO1lBQ2QsYUFBYTtZQUNiLFdBQVc7UUFDZjs7Ozs7O0FBR1o7QUFFQSxTQUFTaUQsTUFBTUMsS0FBYSxFQUFFckMsS0FBYTtJQUN2QyxPQUFPcUMsTUFBTSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUNyQyxPQUFPO0FBQzdDO0FBRUEsU0FBZVMsUUFBUUosQ0FBUyxFQUFFQyxDQUFTLEVBQUVDLENBQVMsRUFBRVAsS0FBYTs7WUFDM0RzQyxLQUtBOUI7Ozs7b0JBTEE4QixNQUNGdEMsVUFBVSxJQUNKLDRCQUNDLHNCQUF1Q29DLE9BQWxCQSxNQUFNL0IsR0FBR0wsUUFBMkJvQyxPQUFsQkEsTUFBTTlCLEdBQUdOLFFBQXlCLE9BQWhCb0MsTUFBTTdCLEdBQUdQLFFBQU87b0JBQ3BGdUMsUUFBUSxHQUFHLENBQUMsc0JBQXNCRDtvQkFDcEI7O3dCQUFNeEQsOENBQVVBLENBQUN3RDs7O29CQUF6QjlCLFFBQVE7b0JBQ2Q7O3dCQUFPQTs7OztJQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0t1QjtBQUV2QixJQUFNc0MsVUFBVSxLQUFLLE9BQU87O0FBQzVCLElBQU1DLEtBQUssQ0FBQyxJQUFJRDtBQUNoQixJQUFNRSxLQUFLLENBQUMsSUFBSUY7QUFDaEIsSUFBTUcsS0FBSyxDQUFDLElBQUlIO0FBQ2hCLElBQU1JLEtBQUssQ0FBQyxJQUFJSjtBQUNoQixJQUFNSyxLQUFLLElBQUlMO0FBQ2YsSUFBTU0sS0FBSyxDQUFDLElBQUlOO0FBRVQsSUFBTXRELHlCQUFOOztjQUFNQTthQUFBQSxTQWlCb0JFLE9BQW1CO2dDQWpCdkNGOztnQkFrQkwsa0JBbEJLQSx1REFDVCxrQkFBa0I7UUFDbEIsd0JBQU8sUUFBUCxTQVdBLHdCQUFpQixPQUFqQixTQUNBLHdCQUFpQixXQUFqQixTQUNBLHdCQUFpQixPQUFqQixlQUU2QkUsVUFBQUEsZUFmdEIsT0FBTyxJQUFJMkQsYUFBYTtZQUNqQ047WUFBSUU7WUFBSUU7WUFBSTtZQUNaSjtZQUFJRztZQUFJQztZQUFJO1lBQ1pIO1lBQUlDO1lBQUlFO1lBQUk7WUFDWkg7WUFBSUU7WUFBSUM7WUFBSTtZQUNaSjtZQUFJRTtZQUFJRztZQUFJO1lBQ1pMO1lBQUlHO1lBQUlFO1lBQUk7WUFDWko7WUFBSUM7WUFBSUc7WUFBSTtZQUNaSjtZQUFJRTtZQUFJRTtZQUFJO1NBQ1Q7UUFRRyxJQUFNRSxNQUFNLElBQUlaLDBDQUFVQSxDQUFDaEQsUUFBUSxFQUFFLEVBQUU7WUFDbkMsTUFBTSxJQUFJa0QsK0NBQWVBLENBQUM7Z0JBQ3RCLFlBQVk7b0JBQ1IsYUFBYTtnQkFDakI7Z0JBQ0EsVUFBVTtvQkFBQztpQkFBNkI7WUFDNUMsR0FBRyxJQUFJO1lBQ1AsTUFBTSxJQUFJRCxpREFBaUJBLENBQUM7Z0JBQ3hCLFNBQVM7b0JBQ0wsV0FBVztnQkFDZjtnQkFDQSxVQUFVO1lBQ2QsR0FBRyxJQUFJO1FBQ1g7UUFDQSxNQUFLLEdBQUcsR0FBR1c7UUFDWCxJQUFNQyxVQUFVLElBQUlmLDBDQUFVQSxDQUMxQjtZQUNJLGFBQWE7UUFDakIsR0FDQTtZQUNJLE9BQU87UUFDWDtRQUVKZSxRQUFRLEtBQUssR0FBRztRQUNoQixNQUFLLE9BQU8sR0FBR0E7UUFDZixrQkFBa0I7UUFDbEIsSUFBTUMsV0FBVyxJQUFJQyxXQUFXO1lBQzVCO1lBQUc7WUFBRztZQUFHO1lBQUc7WUFBRztZQUNmO1lBQUc7WUFBRztZQUFHO1lBQ1Q7WUFBRztZQUFHO1lBQUc7WUFDVDtZQUFHO1lBQ0g7WUFBRztZQUFHO1lBQUc7WUFDVDtZQUFHO1lBQ0g7WUFBRztTQUNOO1FBQ0QsSUFBTUMsTUFBTSxJQUFJYiw4Q0FBY0EsQ0FBQ25ELFFBQVEsRUFBRSxFQUFFNEQsS0FBSztZQUFDQztTQUFRLEVBQUVDO1FBQzNELE1BQUssR0FBRyxHQUFHRTtRQUNYSixJQUFJLEtBQUs7OztrQkF4REo5RDs7WUEyRFRtRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO2dCQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTtZQUNuQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDSSxJQUE2Q0MsUUFBQUEsSUFBSSxFQUF6Q25FLFVBQXFDbUUsTUFBckNuRSxTQUFTd0MsT0FBNEIyQixNQUE1QjNCLE1BQU1vQixNQUFzQk8sTUFBdEJQLEtBQUtJLE1BQWlCRyxNQUFqQkgsS0FBS0gsVUFBWU0sTUFBWk47Z0JBQ2pDRCxJQUFJLEdBQUc7Z0JBQ1AsSUFBUVEsS0FBT3BFLFFBQVBvRTtnQkFDUlAsUUFBUSxJQUFJLEdBQUdyQixLQUFLLE1BQU07Z0JBQzFCd0IsSUFBSSxhQUFhLENBQUNIO2dCQUNsQkcsSUFBSSxJQUFJO2dCQUNSSSxHQUFHLFlBQVksQ0FBQ0EsR0FBRyxLQUFLLEVBQUUsSUFBSUEsR0FBRyxhQUFhLEVBQUU7Z0JBQ2hESixJQUFJLE1BQU07WUFDZDs7O1dBekVTbEU7RUFBaUJpRCwwQ0FBVUEsRUEwRXZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RmdCOzs7Ozs7Ozs7Ozs7OztrQ0FFZDs7Ozs7O29CQUErQztpQkFBQTs7Ozs7Ozs7MEJBRWxEOzs7Ozs7OzswQkFFRzs7Ozs7Ozs7MEJBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBLFlBQVksZUFBZTtBQUMzQixZQUFZLG9DQUFvQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlCQUF5QjtBQUNwQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOEJBQThCO0FBQzVDO0FBQ0EsY0FBYyw4REFBOEQ7QUFDNUU7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBOztBQUV5Qjs7QUFFekIsV0FBVyx5QkFBeUI7QUFDcEM7O0FBRUEsbUJBQW1CLG9DQUFtQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBOEQ7QUFDekU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1AsNEJBQTRCLGlDQUFnQjs7QUFFNUM7QUFDQSxTQUFTLDhCQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxlQUFlO0FBQ2Y7QUFDTztBQUNQLGFBQWEseUJBQXlCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxTQUFTLG9DQUFtQjtBQUM1QjtBQUNBLEtBQUsscUJBQXFCO0FBQzFCO0FBQ0E7QUFDQSJ9