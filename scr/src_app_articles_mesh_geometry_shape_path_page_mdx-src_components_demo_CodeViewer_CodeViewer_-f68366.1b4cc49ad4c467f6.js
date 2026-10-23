"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_geometry_shape_path_page_mdx-src_components_demo_CodeViewer_CodeViewer_-f68366"], {
57503(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid.0665e1a40d7dcc63.webp";

},
63608(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(90254);
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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.1, 0.1, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        load: assets.image.uvGrid,\n    })\n    // The skybox is not painted: it is only used for the reflections.\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const material = new TgdMaterialGlobal({\n        color: texture,\n        ambientColor: skybox,\n    })\n    // Brushed metal.\n    material.specularExponent = 1\n    material.specularIntensity = 1.5\n    const group = new TgdPainterState(context, {\n        depth: \"less\",\n        cull: \"back\",\n    })\n    fillGroup(context, group, material, SHAPES.ghost, \"evenodd\")\n    context.add(clear, group)\n    context.camera.fitSpaceAtTarget(6.5, 6.5)\n    context.paint()\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        inertiaZoom: 1000,\n    })\n    return { context, group, material }\n}",
    "fillGroup()": "/**\n * Replace the content of `group` with the same path in four versions:\n * flat, with a thickness, with a round bevel and with a concave bevel.\n */\nfunction fillGroup(\n    context: TgdContext,\n    group: TgdPainterState,\n    material: TgdMaterial,\n    path: string,\n    fillRule: TgdGeometryPathFillRule,\n) {\n    // The previous meshes are deleted, but not the material they share.\n    group.removeAll()\n    group.add(\n        // Flat.\n        createShape(context, material, path, -1.5, +1.5, { flipY: true, fillRule }),\n        // With a thickness.\n        createShape(context, material, path, +1.5, +1.5, {\n            flipY: true,\n            fillRule,\n            thickness: 4,\n        }),\n        // With a round bevel.\n        createShape(context, material, path, -1.5, -1.5, {\n            flipY: true,\n            fillRule,\n            thickness: 4,\n            bevel: { width: 0.8, segments: 8 },\n        }),\n        // With a concave bevel.\n        createShape(context, material, path, +1.5, -1.5, {\n            flipY: true,\n            fillRule,\n            thickness: 4,\n            bevel: { width: 0.8, segments: 32, profileShape: 0.125 },\n        }),\n    )\n}",
    "createShape()": "/**\n * The icons are 24x24. Once flipped, it goes from (0, -24) to (24, 0),\n * so we center it on (x, y).\n */\nfunction createShape(\n    context: TgdContext,\n    material: TgdMaterial,\n    path: string,\n    x: number,\n    y: number,\n    options: TgdGeometryPathOptions,\n) {\n    const scale = 0.1\n    const mesh = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryPath(path, options),\n        material,\n    })\n    mesh.transfo.setScale(scale)\n    mesh.transfo.setPosition(x - 12 * scale, y + 12 * scale, 0)\n    return mesh\n}"
};
var FULL = "import {\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdGeometryPath,\n    type TgdGeometryPathFillRule,\n    type TgdGeometryPathOptions,\n    type TgdMaterial,\n    TgdMaterialGlobal,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdTextureCube,\n} from \"@tolokoban/tgd\"\nimport { ViewOptions, ViewPanel } from \"@tolokoban/ui\"\nimport React from \"react\"\n\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport UVGridURL from \"@/assets/image/uv-grid.webp\"\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\"\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\"\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\"\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\"\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\"\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\"\n\nconst GHOST =\n    \"M12,2A9,9 0 0,0 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11A9,9 0 0,0 12,2M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12A2,2 0 0,1 7,10A2,2 0 0,1 9,8M15,8A2,2 0 0,1 17,10A2,2 0 0,1 15,12A2,2 0 0,1 13,10A2,2 0 0,1 15,8Z\"\n/**\n * Three concentric circles, all turning in the same direction.\n * With \"evenodd\", the middle one is a hole. With \"nonzero\", it is a full disc.\n */\nconst TARGET =\n    \"M2,12A10,10 0 1,1 22,12A10,10 0 1,1 2,12ZM6,12A6,6 0 1,1 18,12A6,6 0 1,1 6,12ZM10,12A2,2 0 1,1 14,12A2,2 0 1,1 10,12Z\"\nconst SHAPES = { ghost: GHOST, target: TARGET }\n\ntype Shape = keyof typeof SHAPES\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.1, 0.1, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        load: assets.image.uvGrid,\n    })\n    // The skybox is not painted: it is only used for the reflections.\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const material = new TgdMaterialGlobal({\n        color: texture,\n        ambientColor: skybox,\n    })\n    // Brushed metal.\n    material.specularExponent = 1\n    material.specularIntensity = 1.5\n    const group = new TgdPainterState(context, {\n        depth: \"less\",\n        cull: \"back\",\n    })\n    fillGroup(context, group, material, SHAPES.ghost, \"evenodd\")\n    context.add(clear, group)\n    context.camera.fitSpaceAtTarget(6.5, 6.5)\n    context.paint()\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        inertiaZoom: 1000,\n    })\n    return { context, group, material }\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null)\n    const [shape, setShape] = React.useState<Shape>(\"ghost\")\n    const [fillRule, setFillRule] = React.useState<TgdGeometryPathFillRule>(\"evenodd\")\n    const update = (shape: Shape, fillRule: TgdGeometryPathFillRule) => {\n        setShape(shape)\n        setFillRule(fillRule)\n        const scene = ref.current\n        if (!scene) return\n\n        fillGroup(scene.context, scene.group, scene.material, SHAPES[shape], fillRule)\n        scene.context.paint()\n    }\n    return (\n        <View\n            onReady={(context: TgdContext, assets: Assets) => {\n                ref.current = init(context, assets)\n            }}\n            assets={{\n                image: {\n                    uvGrid: UVGridURL,\n                    posX: PosX,\n                    posY: PosY,\n                    posZ: PosZ,\n                    negX: NegX,\n                    negY: NegY,\n                    negZ: NegZ,\n                },\n            }}\n            gizmo>\n            <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" gap=\"S\">\n                <ViewOptions label=\"Shape\" value={shape} onChange={(value: Shape) => update(value, fillRule)}>\n                    <div key=\"ghost\">ghost</div>\n                    <div key=\"target\">target</div>\n                </ViewOptions>\n                <ViewOptions\n                    label=\"fillRule\"\n                    value={fillRule}\n                    onChange={(value: TgdGeometryPathFillRule) => update(shape, value)}>\n                    <div key=\"evenodd\">evenodd</div>\n                    <div key=\"nonzero\">nonzero</div>\n                </ViewOptions>\n            </ViewPanel>\n        </View>\n    )\n}\n\n/**\n * Replace the content of `group` with the same path in four versions:\n * flat, with a thickness, with a round bevel and with a concave bevel.\n */\nfunction fillGroup(\n    context: TgdContext,\n    group: TgdPainterState,\n    material: TgdMaterial,\n    path: string,\n    fillRule: TgdGeometryPathFillRule,\n) {\n    // The previous meshes are deleted, but not the material they share.\n    group.removeAll()\n    group.add(\n        // Flat.\n        createShape(context, material, path, -1.5, +1.5, { flipY: true, fillRule }),\n        // With a thickness.\n        createShape(context, material, path, +1.5, +1.5, {\n            flipY: true,\n            fillRule,\n            thickness: 4,\n        }),\n        // With a round bevel.\n        createShape(context, material, path, -1.5, -1.5, {\n            flipY: true,\n            fillRule,\n            thickness: 4,\n            bevel: { width: 0.8, segments: 8 },\n        }),\n        // With a concave bevel.\n        createShape(context, material, path, +1.5, -1.5, {\n            flipY: true,\n            fillRule,\n            thickness: 4,\n            bevel: { width: 0.8, segments: 32, profileShape: 0.125 },\n        }),\n    )\n}\n\n/**\n * The icons are 24x24. Once flipped, it goes from (0, -24) to (24, 0),\n * so we center it on (x, y).\n */\nfunction createShape(\n    context: TgdContext,\n    material: TgdMaterial,\n    path: string,\n    x: number,\n    y: number,\n    options: TgdGeometryPathOptions,\n) {\n    const scale = 0.1\n    const mesh = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryPath(path, options),\n        material,\n    })\n    mesh.transfo.setScale(scale)\n    mesh.transfo.setPosition(x - 12 * scale, y + 12 * scale, 0)\n    return mesh\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
90254(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var _assets_image_uv_grid_webp__rspack_import_5 = __webpack_require__(57503);
/* import */ var _assets_cubemap_sky_contrast_posX_webp__rspack_import_6 = __webpack_require__(10618);
/* import */ var _assets_cubemap_sky_contrast_posY_webp__rspack_import_7 = __webpack_require__(24645);
/* import */ var _assets_cubemap_sky_contrast_posZ_webp__rspack_import_8 = __webpack_require__(85720);
/* import */ var _assets_cubemap_sky_contrast_negX_webp__rspack_import_9 = __webpack_require__(28814);
/* import */ var _assets_cubemap_sky_contrast_negY_webp__rspack_import_10 = __webpack_require__(51561);
/* import */ var _assets_cubemap_sky_contrast_negZ_webp__rspack_import_11 = __webpack_require__(30892);
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












var GHOST = "M12,2A9,9 0 0,0 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11A9,9 0 0,0 12,2M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12A2,2 0 0,1 7,10A2,2 0 0,1 9,8M15,8A2,2 0 0,1 17,10A2,2 0 0,1 15,12A2,2 0 0,1 13,10A2,2 0 0,1 15,8Z";
/**
 * Three concentric circles, all turning in the same direction.
 * With "evenodd", the middle one is a hole. With "nonzero", it is a full disc.
 */ var TARGET = "M2,12A10,10 0 1,1 22,12A10,10 0 1,1 2,12ZM6,12A6,6 0 1,1 18,12A6,6 0 1,1 6,12ZM10,12A2,2 0 1,1 14,12A2,2 0 1,1 10,12Z";
var SHAPES = {
    ghost: GHOST,
    target: TARGET
};
// #begin
function init(context, assets) {
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.1,
            0.1,
            0.1,
            1
        ],
        depth: 1
    });
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        load: assets.image.uvGrid
    });
    // The skybox is not painted: it is only used for the reflections.
    var skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ
    });
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialGlobal({
        color: texture,
        ambientColor: skybox
    });
    // Brushed metal.
    material.specularExponent = 1;
    material.specularIntensity = 1.5;
    var group = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back"
    });
    fillGroup(context, group, material, SHAPES.ghost, "evenodd");
    context.add(clear, group);
    context.camera.fitSpaceAtTarget(6.5, 6.5);
    context.paint();
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        inertiaZoom: 1000
    });
    return {
        context: context,
        group: group,
        material: material
    };
}
// #end
function Demo() {
    var ref = react__rspack_import_3_default().useRef(null);
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState("ghost"), 2), shape = _React_useState[0], setShape = _React_useState[1];
    var _React_useState1 = _sliced_to_array(react__rspack_import_3_default().useState("evenodd"), 2), fillRule = _React_useState1[0], setFillRule = _React_useState1[1];
    var update = function update(shape, fillRule) {
        setShape(shape);
        setFillRule(fillRule);
        var scene = ref.current;
        if (!scene) return;
        fillGroup(scene.context, scene.group, scene.material, SHAPES[shape], fillRule);
        scene.context.paint();
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_4["default"], {
        onReady: function onReady(context, assets) {
            ref.current = init(context, assets);
        },
        assets: {
            image: {
                uvGrid: _assets_image_uv_grid_webp__rspack_import_5,
                posX: _assets_cubemap_sky_contrast_posX_webp__rspack_import_6,
                posY: _assets_cubemap_sky_contrast_posY_webp__rspack_import_7,
                posZ: _assets_cubemap_sky_contrast_posZ_webp__rspack_import_8,
                negX: _assets_cubemap_sky_contrast_negX_webp__rspack_import_9,
                negY: _assets_cubemap_sky_contrast_negY_webp__rspack_import_10,
                negZ: _assets_cubemap_sky_contrast_negZ_webp__rspack_import_11
            }
        },
        gizmo: true,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "S",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewOptions, {
                    label: "Shape",
                    value: shape,
                    onChange: function onChange(value) {
                        return update(value, fillRule);
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "ghost"
                        }, "ghost", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/main.demo.tsx",
                            lineNumber: 112,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "target"
                        }, "target", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/main.demo.tsx",
                            lineNumber: 113,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/main.demo.tsx",
                    lineNumber: 111,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewOptions, {
                    label: "fillRule",
                    value: fillRule,
                    onChange: function onChange(value) {
                        return update(shape, value);
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "evenodd"
                        }, "evenodd", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/main.demo.tsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "nonzero"
                        }, "nonzero", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/main.demo.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/main.demo.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/main.demo.tsx",
            lineNumber: 110,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/_/main.demo/main.demo.tsx",
        lineNumber: 94,
        columnNumber: 9
    }, this);
}
// #begin fillGroup()
/**
 * Replace the content of `group` with the same path in four versions:
 * flat, with a thickness, with a round bevel and with a concave bevel.
 */ function fillGroup(context, group, material, path, fillRule) {
    // The previous meshes are deleted, but not the material they share.
    group.removeAll();
    group.add(// Flat.
    createShape(context, material, path, -1.5, +1.5, {
        flipY: true,
        fillRule: fillRule
    }), // With a thickness.
    createShape(context, material, path, +1.5, +1.5, {
        flipY: true,
        fillRule: fillRule,
        thickness: 4
    }), // With a round bevel.
    createShape(context, material, path, -1.5, -1.5, {
        flipY: true,
        fillRule: fillRule,
        thickness: 4,
        bevel: {
            width: 0.8,
            segments: 8
        }
    }), // With a concave bevel.
    createShape(context, material, path, +1.5, -1.5, {
        flipY: true,
        fillRule: fillRule,
        thickness: 4,
        bevel: {
            width: 0.8,
            segments: 32,
            profileShape: 0.125
        }
    }));
}
// #end
// #begin createShape()
/**
 * The icons are 24x24. Once flipped, it goes from (0, -24) to (24, 0),
 * so we center it on (x, y).
 */ function createShape(context, material, path, x, y, options) {
    var scale = 0.1;
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPath(path, options),
        material: material
    });
    mesh.transfo.setScale(scale);
    mesh.transfo.setPosition(x - 12 * scale, y + 12 * scale, 0);
    return mesh;
} // #end


},
51305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(63608);
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
        ol: "ol",
        p: "p",
        pre: "pre",
        span: "span",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdGeometryPath.html",
                    children: "TgdGeometryPath"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "A shape filled from an ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/d",
                        children: "SVG path"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 7,
                        columnNumber: 24
                    }, this),
                    ".\nIt is flat (Z = 0), unless you give it a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "thickness"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 8,
                        columnNumber: 42
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                lineNumber: 7,
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx"
                        }, this),
                        " geometry = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdGeometryPath"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"M0,0 L4,0 L4,4 L0,4 Z M1,1 L3,1 L2,3 Z\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx"
                        }, this),
                        ")\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                    lineNumber: 10,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "The demo shows the same SVG path four times:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: "Flat."
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "With a ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "thickness"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            " of 4."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "With a thickness and a round ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "bevel"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                lineNumber: 18,
                                columnNumber: 33
                            }, this),
                            " of 8 segments."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 18,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "With a thickness and a concave ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "bevel"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                lineNumber: 19,
                                columnNumber: 35
                            }, this),
                            " of 32 segments and a ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "profileShape"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                lineNumber: 19,
                                columnNumber: 64
                            }, this),
                            " of 0.125."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 19,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                lineNumber: 16,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Use the controls to switch between two paths and between the two ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "fillRule"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 21,
                        columnNumber: 66
                    }, this),
                    ":\nthe ghost looks the same with both rules, because its eyes turn in the other direction,\nbut the middle circle of the target disappears with ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "\"nonzero\""
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 23,
                        columnNumber: 53
                    }, this),
                    ", because all its circles turn in the same direction."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                lineNumber: 21,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "All the SVG path commands are supported, with their lowercase (relative) versions:\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "M"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 26,
                        columnNumber: 1
                    }, this),
                    " (move), ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "L"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this),
                    " (line), ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "H"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 26,
                        columnNumber: 25
                    }, this),
                    " (horizontal line), ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "V"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 26,
                        columnNumber: 48
                    }, this),
                    " (vertical line),\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "Q"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 27,
                        columnNumber: 1
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "T"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    " (quadratic Bézier curve), ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "C"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 27,
                        columnNumber: 39
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "S"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 27,
                        columnNumber: 47
                    }, this),
                    " (cubic Bézier curve),\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "A"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 28,
                        columnNumber: 1
                    }, this),
                    " (elliptical arc) and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "Z"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 28,
                        columnNumber: 26
                    }, this),
                    " (close).\nEach subpath is a closed contour, even without ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "Z"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 29,
                        columnNumber: 48
                    }, this),
                    ".\nHoles depend on the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "fillRule"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this),
                    " option, like the SVG ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/fill-rule",
                        children: "fill-rule"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 30,
                        columnNumber: 53
                    }, this),
                    " attribute."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                lineNumber: 25,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Options:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                lineNumber: 32,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                                children: [
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                        children: "curveSegments"
                                    }, undefined, false, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 34,
                                        columnNumber: 3
                                    }, this),
                                    ": number of segments used to approximate each Bézier curve,\nor each quarter turn of an arc (default to ",
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                        children: "16"
                                    }, undefined, false, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 35,
                                        columnNumber: 46
                                    }, this),
                                    ")."
                                ]
                            }, undefined, true, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                lineNumber: 34,
                                columnNumber: 3
                            }, this),
                            "\n"
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 34,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                                children: [
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                        children: "flipY"
                                    }, undefined, false, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 36,
                                        columnNumber: 3
                                    }, this),
                                    ": the Y axis points down in SVG, but up in WebGL. Set it to ",
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                        children: "true"
                                    }, undefined, false, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 36,
                                        columnNumber: 70
                                    }, this),
                                    " to see\nthe shape as in an SVG image (default to ",
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                        children: "false"
                                    }, undefined, false, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 37,
                                        columnNumber: 44
                                    }, this),
                                    ")."
                                ]
                            }, undefined, true, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                lineNumber: 36,
                                columnNumber: 3
                            }, this),
                            "\n"
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 36,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                                children: [
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                        children: "fillRule"
                                    }, undefined, false, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 38,
                                        columnNumber: 3
                                    }, this),
                                    ": which parts of the path are inside the shape (default to ",
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                        children: "\"evenodd\""
                                    }, undefined, false, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 38,
                                        columnNumber: 72
                                    }, this),
                                    "):"
                                ]
                            }, undefined, true, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                lineNumber: 38,
                                columnNumber: 3
                            }, this),
                            "\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                                children: [
                                    "\n",
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                                        children: [
                                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                                children: "\"evenodd\""
                                            }, undefined, false, {
                                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                                lineNumber: 39,
                                                columnNumber: 5
                                            }, this),
                                            ": a contour inside an odd number of other contours is a hole."
                                        ]
                                    }, undefined, true, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 39,
                                        columnNumber: 3
                                    }, this),
                                    "\n",
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                                        children: [
                                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                                children: "\"nonzero\""
                                            }, undefined, false, {
                                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                                lineNumber: 40,
                                                columnNumber: 5
                                            }, this),
                                            ": contours turning in the same direction are merged, and a contour\nturning the other way inside them is a hole. Use it for font glyphs, whose contours\noften overlap (the bar and the stem of a \"T\" are often two overlapping rectangles)."
                                        ]
                                    }, undefined, true, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 40,
                                        columnNumber: 3
                                    }, this),
                                    "\n"
                                ]
                            }, undefined, true, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                lineNumber: 39,
                                columnNumber: 3
                            }, this),
                            "\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                                children: "With both rules, the contours can cross themselves and each other:\nthe geometry only keeps the outline of the filled area, so there are no hidden faces inside the volume."
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                lineNumber: 44,
                                columnNumber: 3
                            }, this),
                            "\n"
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 38,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                                children: [
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                        children: "thickness"
                                    }, undefined, false, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 46,
                                        columnNumber: 3
                                    }, this),
                                    ": if greater than 0, the shape is extruded along Z, from ",
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                        children: "-thickness / 2"
                                    }, undefined, false, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 46,
                                        columnNumber: 71
                                    }, this),
                                    "\nto ",
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                        children: "+thickness / 2"
                                    }, undefined, false, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 47,
                                        columnNumber: 6
                                    }, this),
                                    " (default to ",
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                        children: "0"
                                    }, undefined, false, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 47,
                                        columnNumber: 35
                                    }, this),
                                    ", a flat shape at Z = 0)."
                                ]
                            }, undefined, true, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                lineNumber: 46,
                                columnNumber: 3
                            }, this),
                            "\n"
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 46,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                                children: [
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                        children: "bevel"
                                    }, undefined, false, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 48,
                                        columnNumber: 3
                                    }, this),
                                    ": rounds the edges of the front and back faces, like the Bevel modifier of Blender\n(only with a ",
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                        children: "thickness"
                                    }, undefined, false, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 49,
                                        columnNumber: 16
                                    }, this),
                                    "):"
                                ]
                            }, undefined, true, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                lineNumber: 48,
                                columnNumber: 3
                            }, this),
                            "\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                                children: [
                                    "\n",
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                                        children: [
                                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                                children: "width"
                                            }, undefined, false, {
                                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                                lineNumber: 50,
                                                columnNumber: 5
                                            }, this),
                                            ": bevel amount, no more than half the thickness. Keep it smaller than the\ndetails of the shape (thin parts, small holes...), or the faces will overlap themselves."
                                        ]
                                    }, undefined, true, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 50,
                                        columnNumber: 3
                                    }, this),
                                    "\n",
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                                        children: [
                                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                                children: "segments"
                                            }, undefined, false, {
                                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                                lineNumber: 52,
                                                columnNumber: 5
                                            }, this),
                                            ": number of segments of the curved edges."
                                        ]
                                    }, undefined, true, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 52,
                                        columnNumber: 3
                                    }, this),
                                    "\n",
                                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                                        children: [
                                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                                children: "profileShape"
                                            }, undefined, false, {
                                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                                lineNumber: 53,
                                                columnNumber: 5
                                            }, this),
                                            ": superellipse factor, ",
                                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                                children: "0.25"
                                            }, undefined, false, {
                                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                                lineNumber: 53,
                                                columnNumber: 42
                                            }, this),
                                            " for a straight chamfer, ",
                                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                                children: "0.5"
                                            }, undefined, false, {
                                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                                lineNumber: 53,
                                                columnNumber: 73
                                            }, this),
                                            " for a\ncircular arc (default), towards ",
                                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                                children: "1"
                                            }, undefined, false, {
                                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                                lineNumber: 54,
                                                columnNumber: 37
                                            }, this),
                                            " for a square corner, and towards ",
                                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                                children: "0"
                                            }, undefined, false, {
                                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                                lineNumber: 54,
                                                columnNumber: 74
                                            }, this),
                                            " for a concave one."
                                        ]
                                    }, undefined, true, {
                                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                        lineNumber: 53,
                                        columnNumber: 3
                                    }, this),
                                    "\n"
                                ]
                            }, undefined, true, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                                lineNumber: 50,
                                columnNumber: 3
                            }, this),
                            "\n"
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 48,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                lineNumber: 34,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The geometry provides ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "POSITION"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 56,
                        columnNumber: 23
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "NORMAL"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 56,
                        columnNumber: 35
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TEXCOORD_0"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 56,
                        columnNumber: 48
                    }, this),
                    " attributes.\nOn the front and back faces, the UVs go from ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "[0, 1]"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 57,
                        columnNumber: 46
                    }, this),
                    " (bottom left) to ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "[1, 0]"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                        lineNumber: 57,
                        columnNumber: 72
                    }, this),
                    " (top right)\nover the bounding box of the shape.\nOn the sides, U goes from 0 to 1 along the contour, and V from 1 (front) to 0 (back).\nThe normals of the sides are smooth along the curves, but sharp on corners of more than 30°."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                lineNumber: 56,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                lineNumber: 62,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/geometry",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                    lineNumber: 64,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
                lineNumber: 64,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/geometry/shape/path/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9nZW9tZXRyeV9zaGFwZV9wYXRoX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyXy1mNjgzNjYuMWI0Y2M0OWFkNGM0NjdmNi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL2dlb21ldHJ5L3NoYXBlL3BhdGgvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL2dlb21ldHJ5L3NoYXBlL3BhdGgvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9nZW9tZXRyeS9zaGFwZS9wYXRoL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2UudXZHcmlkLFxcbiAgICB9KVxcbiAgICAvLyBUaGUgc2t5Ym94IGlzIG5vdCBwYWludGVkOiBpdCBpcyBvbmx5IHVzZWQgZm9yIHRoZSByZWZsZWN0aW9ucy5cXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xcbiAgICAgICAgY29sb3I6IHRleHR1cmUsXFxuICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcXG4gICAgfSlcXG4gICAgLy8gQnJ1c2hlZCBtZXRhbC5cXG4gICAgbWF0ZXJpYWwuc3BlY3VsYXJFeHBvbmVudCA9IDFcXG4gICAgbWF0ZXJpYWwuc3BlY3VsYXJJbnRlbnNpdHkgPSAxLjVcXG4gICAgY29uc3QgZ3JvdXAgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICBjdWxsOiBcXFwiYmFja1xcXCIsXFxuICAgIH0pXFxuICAgIGZpbGxHcm91cChjb250ZXh0LCBncm91cCwgbWF0ZXJpYWwsIFNIQVBFUy5naG9zdCwgXFxcImV2ZW5vZGRcXFwiKVxcbiAgICBjb250ZXh0LmFkZChjbGVhciwgZ3JvdXApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNi41LCA2LjUpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxcbiAgICB9KVxcbiAgICByZXR1cm4geyBjb250ZXh0LCBncm91cCwgbWF0ZXJpYWwgfVxcbn1cIixcImZpbGxHcm91cCgpXCI6XCIvKipcXG4gKiBSZXBsYWNlIHRoZSBjb250ZW50IG9mIGBncm91cGAgd2l0aCB0aGUgc2FtZSBwYXRoIGluIGZvdXIgdmVyc2lvbnM6XFxuICogZmxhdCwgd2l0aCBhIHRoaWNrbmVzcywgd2l0aCBhIHJvdW5kIGJldmVsIGFuZCB3aXRoIGEgY29uY2F2ZSBiZXZlbC5cXG4gKi9cXG5mdW5jdGlvbiBmaWxsR3JvdXAoXFxuICAgIGNvbnRleHQ6IFRnZENvbnRleHQsXFxuICAgIGdyb3VwOiBUZ2RQYWludGVyU3RhdGUsXFxuICAgIG1hdGVyaWFsOiBUZ2RNYXRlcmlhbCxcXG4gICAgcGF0aDogc3RyaW5nLFxcbiAgICBmaWxsUnVsZTogVGdkR2VvbWV0cnlQYXRoRmlsbFJ1bGUsXFxuKSB7XFxuICAgIC8vIFRoZSBwcmV2aW91cyBtZXNoZXMgYXJlIGRlbGV0ZWQsIGJ1dCBub3QgdGhlIG1hdGVyaWFsIHRoZXkgc2hhcmUuXFxuICAgIGdyb3VwLnJlbW92ZUFsbCgpXFxuICAgIGdyb3VwLmFkZChcXG4gICAgICAgIC8vIEZsYXQuXFxuICAgICAgICBjcmVhdGVTaGFwZShjb250ZXh0LCBtYXRlcmlhbCwgcGF0aCwgLTEuNSwgKzEuNSwgeyBmbGlwWTogdHJ1ZSwgZmlsbFJ1bGUgfSksXFxuICAgICAgICAvLyBXaXRoIGEgdGhpY2tuZXNzLlxcbiAgICAgICAgY3JlYXRlU2hhcGUoY29udGV4dCwgbWF0ZXJpYWwsIHBhdGgsICsxLjUsICsxLjUsIHtcXG4gICAgICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgICAgICBmaWxsUnVsZSxcXG4gICAgICAgICAgICB0aGlja25lc3M6IDQsXFxuICAgICAgICB9KSxcXG4gICAgICAgIC8vIFdpdGggYSByb3VuZCBiZXZlbC5cXG4gICAgICAgIGNyZWF0ZVNoYXBlKGNvbnRleHQsIG1hdGVyaWFsLCBwYXRoLCAtMS41LCAtMS41LCB7XFxuICAgICAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgICAgICAgICAgZmlsbFJ1bGUsXFxuICAgICAgICAgICAgdGhpY2tuZXNzOiA0LFxcbiAgICAgICAgICAgIGJldmVsOiB7IHdpZHRoOiAwLjgsIHNlZ21lbnRzOiA4IH0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIC8vIFdpdGggYSBjb25jYXZlIGJldmVsLlxcbiAgICAgICAgY3JlYXRlU2hhcGUoY29udGV4dCwgbWF0ZXJpYWwsIHBhdGgsICsxLjUsIC0xLjUsIHtcXG4gICAgICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgICAgICBmaWxsUnVsZSxcXG4gICAgICAgICAgICB0aGlja25lc3M6IDQsXFxuICAgICAgICAgICAgYmV2ZWw6IHsgd2lkdGg6IDAuOCwgc2VnbWVudHM6IDMyLCBwcm9maWxlU2hhcGU6IDAuMTI1IH0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbn1cIixcImNyZWF0ZVNoYXBlKClcIjpcIi8qKlxcbiAqIFRoZSBpY29ucyBhcmUgMjR4MjQuIE9uY2UgZmxpcHBlZCwgaXQgZ29lcyBmcm9tICgwLCAtMjQpIHRvICgyNCwgMCksXFxuICogc28gd2UgY2VudGVyIGl0IG9uICh4LCB5KS5cXG4gKi9cXG5mdW5jdGlvbiBjcmVhdGVTaGFwZShcXG4gICAgY29udGV4dDogVGdkQ29udGV4dCxcXG4gICAgbWF0ZXJpYWw6IFRnZE1hdGVyaWFsLFxcbiAgICBwYXRoOiBzdHJpbmcsXFxuICAgIHg6IG51bWJlcixcXG4gICAgeTogbnVtYmVyLFxcbiAgICBvcHRpb25zOiBUZ2RHZW9tZXRyeVBhdGhPcHRpb25zLFxcbikge1xcbiAgICBjb25zdCBzY2FsZSA9IDAuMVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlQYXRoKHBhdGgsIG9wdGlvbnMpLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH0pXFxuICAgIG1lc2gudHJhbnNmby5zZXRTY2FsZShzY2FsZSlcXG4gICAgbWVzaC50cmFuc2ZvLnNldFBvc2l0aW9uKHggLSAxMiAqIHNjYWxlLCB5ICsgMTIgKiBzY2FsZSwgMClcXG4gICAgcmV0dXJuIG1lc2hcXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gICAgVGdkR2VvbWV0cnlQYXRoLFxcbiAgICB0eXBlIFRnZEdlb21ldHJ5UGF0aEZpbGxSdWxlLFxcbiAgICB0eXBlIFRnZEdlb21ldHJ5UGF0aE9wdGlvbnMsXFxuICAgIHR5cGUgVGdkTWF0ZXJpYWwsXFxuICAgIFRnZE1hdGVyaWFsR2xvYmFsLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgVGdkVGV4dHVyZUN1YmUsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgeyBWaWV3T3B0aW9ucywgVmlld1BhbmVsIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi91aVxcXCJcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuaW1wb3J0IFVWR3JpZFVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLndlYnBcXFwiXFxuaW1wb3J0IFBvc1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXFxcIlxcbmltcG9ydCBQb3NZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFxcXCJcXG5pbXBvcnQgUG9zWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NaLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXFxcIlxcbmltcG9ydCBOZWdZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFxcXCJcXG5pbXBvcnQgTmVnWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdaLndlYnBcXFwiXFxuXFxuY29uc3QgR0hPU1QgPVxcbiAgICBcXFwiTTEyLDJBOSw5IDAgMCwwIDMsMTFWMjJMNiwxOUw5LDIyTDEyLDE5TDE1LDIyTDE4LDE5TDIxLDIyVjExQTksOSAwIDAsMCAxMiwyTTksOEEyLDIgMCAwLDEgMTEsMTBBMiwyIDAgMCwxIDksMTJBMiwyIDAgMCwxIDcsMTBBMiwyIDAgMCwxIDksOE0xNSw4QTIsMiAwIDAsMSAxNywxMEEyLDIgMCAwLDEgMTUsMTJBMiwyIDAgMCwxIDEzLDEwQTIsMiAwIDAsMSAxNSw4WlxcXCJcXG4vKipcXG4gKiBUaHJlZSBjb25jZW50cmljIGNpcmNsZXMsIGFsbCB0dXJuaW5nIGluIHRoZSBzYW1lIGRpcmVjdGlvbi5cXG4gKiBXaXRoIFxcXCJldmVub2RkXFxcIiwgdGhlIG1pZGRsZSBvbmUgaXMgYSBob2xlLiBXaXRoIFxcXCJub256ZXJvXFxcIiwgaXQgaXMgYSBmdWxsIGRpc2MuXFxuICovXFxuY29uc3QgVEFSR0VUID1cXG4gICAgXFxcIk0yLDEyQTEwLDEwIDAgMSwxIDIyLDEyQTEwLDEwIDAgMSwxIDIsMTJaTTYsMTJBNiw2IDAgMSwxIDE4LDEyQTYsNiAwIDEsMSA2LDEyWk0xMCwxMkEyLDIgMCAxLDEgMTQsMTJBMiwyIDAgMSwxIDEwLDEyWlxcXCJcXG5jb25zdCBTSEFQRVMgPSB7IGdob3N0OiBHSE9TVCwgdGFyZ2V0OiBUQVJHRVQgfVxcblxcbnR5cGUgU2hhcGUgPSBrZXlvZiB0eXBlb2YgU0hBUEVTXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBsb2FkOiBhc3NldHMuaW1hZ2UudXZHcmlkLFxcbiAgICB9KVxcbiAgICAvLyBUaGUgc2t5Ym94IGlzIG5vdCBwYWludGVkOiBpdCBpcyBvbmx5IHVzZWQgZm9yIHRoZSByZWZsZWN0aW9ucy5cXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xcbiAgICAgICAgY29sb3I6IHRleHR1cmUsXFxuICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcXG4gICAgfSlcXG4gICAgLy8gQnJ1c2hlZCBtZXRhbC5cXG4gICAgbWF0ZXJpYWwuc3BlY3VsYXJFeHBvbmVudCA9IDFcXG4gICAgbWF0ZXJpYWwuc3BlY3VsYXJJbnRlbnNpdHkgPSAxLjVcXG4gICAgY29uc3QgZ3JvdXAgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICBjdWxsOiBcXFwiYmFja1xcXCIsXFxuICAgIH0pXFxuICAgIGZpbGxHcm91cChjb250ZXh0LCBncm91cCwgbWF0ZXJpYWwsIFNIQVBFUy5naG9zdCwgXFxcImV2ZW5vZGRcXFwiKVxcbiAgICBjb250ZXh0LmFkZChjbGVhciwgZ3JvdXApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNi41LCA2LjUpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxcbiAgICB9KVxcbiAgICByZXR1cm4geyBjb250ZXh0LCBncm91cCwgbWF0ZXJpYWwgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBbc2hhcGUsIHNldFNoYXBlXSA9IFJlYWN0LnVzZVN0YXRlPFNoYXBlPihcXFwiZ2hvc3RcXFwiKVxcbiAgICBjb25zdCBbZmlsbFJ1bGUsIHNldEZpbGxSdWxlXSA9IFJlYWN0LnVzZVN0YXRlPFRnZEdlb21ldHJ5UGF0aEZpbGxSdWxlPihcXFwiZXZlbm9kZFxcXCIpXFxuICAgIGNvbnN0IHVwZGF0ZSA9IChzaGFwZTogU2hhcGUsIGZpbGxSdWxlOiBUZ2RHZW9tZXRyeVBhdGhGaWxsUnVsZSkgPT4ge1xcbiAgICAgICAgc2V0U2hhcGUoc2hhcGUpXFxuICAgICAgICBzZXRGaWxsUnVsZShmaWxsUnVsZSlcXG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmLmN1cnJlbnRcXG4gICAgICAgIGlmICghc2NlbmUpIHJldHVyblxcblxcbiAgICAgICAgZmlsbEdyb3VwKHNjZW5lLmNvbnRleHQsIHNjZW5lLmdyb3VwLCBzY2VuZS5tYXRlcmlhbCwgU0hBUEVTW3NoYXBlXSwgZmlsbFJ1bGUpXFxuICAgICAgICBzY2VuZS5jb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBpbml0KGNvbnRleHQsIGFzc2V0cylcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgdXZHcmlkOiBVVkdyaWRVUkwsXFxuICAgICAgICAgICAgICAgICAgICBwb3NYOiBQb3NYLFxcbiAgICAgICAgICAgICAgICAgICAgcG9zWTogUG9zWSxcXG4gICAgICAgICAgICAgICAgICAgIHBvc1o6IFBvc1osXFxuICAgICAgICAgICAgICAgICAgICBuZWdYOiBOZWdYLFxcbiAgICAgICAgICAgICAgICAgICAgbmVnWTogTmVnWSxcXG4gICAgICAgICAgICAgICAgICAgIG5lZ1o6IE5lZ1osXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBnaXptbz5cXG4gICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XFxcImZsZXhcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgZ2FwPVxcXCJTXFxcIj5cXG4gICAgICAgICAgICAgICAgPFZpZXdPcHRpb25zIGxhYmVsPVxcXCJTaGFwZVxcXCIgdmFsdWU9e3NoYXBlfSBvbkNoYW5nZT17KHZhbHVlOiBTaGFwZSkgPT4gdXBkYXRlKHZhbHVlLCBmaWxsUnVsZSl9PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcImdob3N0XFxcIj5naG9zdDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcInRhcmdldFxcXCI+dGFyZ2V0PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XFxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9uc1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcImZpbGxSdWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbGxSdWxlfVxcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogVGdkR2VvbWV0cnlQYXRoRmlsbFJ1bGUpID0+IHVwZGF0ZShzaGFwZSwgdmFsdWUpfT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJldmVub2RkXFxcIj5ldmVub2RkPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwibm9uemVyb1xcXCI+bm9uemVybzwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdPcHRpb25zPlxcbiAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgPC9WaWV3PlxcbiAgICApXFxufVxcblxcbi8qKlxcbiAqIFJlcGxhY2UgdGhlIGNvbnRlbnQgb2YgYGdyb3VwYCB3aXRoIHRoZSBzYW1lIHBhdGggaW4gZm91ciB2ZXJzaW9uczpcXG4gKiBmbGF0LCB3aXRoIGEgdGhpY2tuZXNzLCB3aXRoIGEgcm91bmQgYmV2ZWwgYW5kIHdpdGggYSBjb25jYXZlIGJldmVsLlxcbiAqL1xcbmZ1bmN0aW9uIGZpbGxHcm91cChcXG4gICAgY29udGV4dDogVGdkQ29udGV4dCxcXG4gICAgZ3JvdXA6IFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgbWF0ZXJpYWw6IFRnZE1hdGVyaWFsLFxcbiAgICBwYXRoOiBzdHJpbmcsXFxuICAgIGZpbGxSdWxlOiBUZ2RHZW9tZXRyeVBhdGhGaWxsUnVsZSxcXG4pIHtcXG4gICAgLy8gVGhlIHByZXZpb3VzIG1lc2hlcyBhcmUgZGVsZXRlZCwgYnV0IG5vdCB0aGUgbWF0ZXJpYWwgdGhleSBzaGFyZS5cXG4gICAgZ3JvdXAucmVtb3ZlQWxsKClcXG4gICAgZ3JvdXAuYWRkKFxcbiAgICAgICAgLy8gRmxhdC5cXG4gICAgICAgIGNyZWF0ZVNoYXBlKGNvbnRleHQsIG1hdGVyaWFsLCBwYXRoLCAtMS41LCArMS41LCB7IGZsaXBZOiB0cnVlLCBmaWxsUnVsZSB9KSxcXG4gICAgICAgIC8vIFdpdGggYSB0aGlja25lc3MuXFxuICAgICAgICBjcmVhdGVTaGFwZShjb250ZXh0LCBtYXRlcmlhbCwgcGF0aCwgKzEuNSwgKzEuNSwge1xcbiAgICAgICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICAgICAgICAgIGZpbGxSdWxlLFxcbiAgICAgICAgICAgIHRoaWNrbmVzczogNCxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgLy8gV2l0aCBhIHJvdW5kIGJldmVsLlxcbiAgICAgICAgY3JlYXRlU2hhcGUoY29udGV4dCwgbWF0ZXJpYWwsIHBhdGgsIC0xLjUsIC0xLjUsIHtcXG4gICAgICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgICAgICBmaWxsUnVsZSxcXG4gICAgICAgICAgICB0aGlja25lc3M6IDQsXFxuICAgICAgICAgICAgYmV2ZWw6IHsgd2lkdGg6IDAuOCwgc2VnbWVudHM6IDggfSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgLy8gV2l0aCBhIGNvbmNhdmUgYmV2ZWwuXFxuICAgICAgICBjcmVhdGVTaGFwZShjb250ZXh0LCBtYXRlcmlhbCwgcGF0aCwgKzEuNSwgLTEuNSwge1xcbiAgICAgICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICAgICAgICAgIGZpbGxSdWxlLFxcbiAgICAgICAgICAgIHRoaWNrbmVzczogNCxcXG4gICAgICAgICAgICBiZXZlbDogeyB3aWR0aDogMC44LCBzZWdtZW50czogMzIsIHByb2ZpbGVTaGFwZTogMC4xMjUgfSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxufVxcblxcbi8qKlxcbiAqIFRoZSBpY29ucyBhcmUgMjR4MjQuIE9uY2UgZmxpcHBlZCwgaXQgZ29lcyBmcm9tICgwLCAtMjQpIHRvICgyNCwgMCksXFxuICogc28gd2UgY2VudGVyIGl0IG9uICh4LCB5KS5cXG4gKi9cXG5mdW5jdGlvbiBjcmVhdGVTaGFwZShcXG4gICAgY29udGV4dDogVGdkQ29udGV4dCxcXG4gICAgbWF0ZXJpYWw6IFRnZE1hdGVyaWFsLFxcbiAgICBwYXRoOiBzdHJpbmcsXFxuICAgIHg6IG51bWJlcixcXG4gICAgeTogbnVtYmVyLFxcbiAgICBvcHRpb25zOiBUZ2RHZW9tZXRyeVBhdGhPcHRpb25zLFxcbikge1xcbiAgICBjb25zdCBzY2FsZSA9IDAuMVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlQYXRoKHBhdGgsIG9wdGlvbnMpLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH0pXFxuICAgIG1lc2gudHJhbnNmby5zZXRTY2FsZShzY2FsZSlcXG4gICAgbWVzaC50cmFuc2ZvLnNldFBvc2l0aW9uKHggLSAxMiAqIHNjYWxlLCB5ICsgMTIgKiBzY2FsZSwgMClcXG4gICAgcmV0dXJuIG1lc2hcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RHZW9tZXRyeVBhdGgsXG4gICAgdHlwZSBUZ2RHZW9tZXRyeVBhdGhGaWxsUnVsZSxcbiAgICB0eXBlIFRnZEdlb21ldHJ5UGF0aE9wdGlvbnMsXG4gICAgdHlwZSBUZ2RNYXRlcmlhbCxcbiAgICBUZ2RNYXRlcmlhbEdsb2JhbCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IFZpZXdPcHRpb25zLCBWaWV3UGFuZWwgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCBVVkdyaWRVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL3V2LWdyaWQud2VicFwiXG5pbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXCJcbmltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcIlxuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1oud2VicFwiXG5pbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXCJcbmltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcIlxuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1oud2VicFwiXG5cbmNvbnN0IEdIT1NUID1cbiAgICBcIk0xMiwyQTksOSAwIDAsMCAzLDExVjIyTDYsMTlMOSwyMkwxMiwxOUwxNSwyMkwxOCwxOUwyMSwyMlYxMUE5LDkgMCAwLDAgMTIsMk05LDhBMiwyIDAgMCwxIDExLDEwQTIsMiAwIDAsMSA5LDEyQTIsMiAwIDAsMSA3LDEwQTIsMiAwIDAsMSA5LDhNMTUsOEEyLDIgMCAwLDEgMTcsMTBBMiwyIDAgMCwxIDE1LDEyQTIsMiAwIDAsMSAxMywxMEEyLDIgMCAwLDEgMTUsOFpcIlxuLyoqXG4gKiBUaHJlZSBjb25jZW50cmljIGNpcmNsZXMsIGFsbCB0dXJuaW5nIGluIHRoZSBzYW1lIGRpcmVjdGlvbi5cbiAqIFdpdGggXCJldmVub2RkXCIsIHRoZSBtaWRkbGUgb25lIGlzIGEgaG9sZS4gV2l0aCBcIm5vbnplcm9cIiwgaXQgaXMgYSBmdWxsIGRpc2MuXG4gKi9cbmNvbnN0IFRBUkdFVCA9XG4gICAgXCJNMiwxMkExMCwxMCAwIDEsMSAyMiwxMkExMCwxMCAwIDEsMSAyLDEyWk02LDEyQTYsNiAwIDEsMSAxOCwxMkE2LDYgMCAxLDEgNiwxMlpNMTAsMTJBMiwyIDAgMSwxIDE0LDEyQTIsMiAwIDEsMSAxMCwxMlpcIlxuY29uc3QgU0hBUEVTID0geyBnaG9zdDogR0hPU1QsIHRhcmdldDogVEFSR0VUIH1cblxudHlwZSBTaGFwZSA9IGtleW9mIHR5cGVvZiBTSEFQRVNcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgIGxvYWQ6IGFzc2V0cy5pbWFnZS51dkdyaWQsXG4gICAgfSlcbiAgICAvLyBUaGUgc2t5Ym94IGlzIG5vdCBwYWludGVkOiBpdCBpcyBvbmx5IHVzZWQgZm9yIHRoZSByZWZsZWN0aW9ucy5cbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxuICAgIH0pXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xuICAgICAgICBjb2xvcjogdGV4dHVyZSxcbiAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXG4gICAgfSlcbiAgICAvLyBCcnVzaGVkIG1ldGFsLlxuICAgIG1hdGVyaWFsLnNwZWN1bGFyRXhwb25lbnQgPSAxXG4gICAgbWF0ZXJpYWwuc3BlY3VsYXJJbnRlbnNpdHkgPSAxLjVcbiAgICBjb25zdCBncm91cCA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgIGN1bGw6IFwiYmFja1wiLFxuICAgIH0pXG4gICAgZmlsbEdyb3VwKGNvbnRleHQsIGdyb3VwLCBtYXRlcmlhbCwgU0hBUEVTLmdob3N0LCBcImV2ZW5vZGRcIilcbiAgICBjb250ZXh0LmFkZChjbGVhciwgZ3JvdXApXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg2LjUsIDYuNSlcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICBpbmVydGlhWm9vbTogMTAwMCxcbiAgICB9KVxuICAgIHJldHVybiB7IGNvbnRleHQsIGdyb3VwLCBtYXRlcmlhbCB9XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCBbc2hhcGUsIHNldFNoYXBlXSA9IFJlYWN0LnVzZVN0YXRlPFNoYXBlPihcImdob3N0XCIpXG4gICAgY29uc3QgW2ZpbGxSdWxlLCBzZXRGaWxsUnVsZV0gPSBSZWFjdC51c2VTdGF0ZTxUZ2RHZW9tZXRyeVBhdGhGaWxsUnVsZT4oXCJldmVub2RkXCIpXG4gICAgY29uc3QgdXBkYXRlID0gKHNoYXBlOiBTaGFwZSwgZmlsbFJ1bGU6IFRnZEdlb21ldHJ5UGF0aEZpbGxSdWxlKSA9PiB7XG4gICAgICAgIHNldFNoYXBlKHNoYXBlKVxuICAgICAgICBzZXRGaWxsUnVsZShmaWxsUnVsZSlcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWYuY3VycmVudFxuICAgICAgICBpZiAoIXNjZW5lKSByZXR1cm5cblxuICAgICAgICBmaWxsR3JvdXAoc2NlbmUuY29udGV4dCwgc2NlbmUuZ3JvdXAsIHNjZW5lLm1hdGVyaWFsLCBTSEFQRVNbc2hhcGVdLCBmaWxsUnVsZSlcbiAgICAgICAgc2NlbmUuY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoY29udGV4dCwgYXNzZXRzKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIHV2R3JpZDogVVZHcmlkVVJMLFxuICAgICAgICAgICAgICAgICAgICBwb3NYOiBQb3NYLFxuICAgICAgICAgICAgICAgICAgICBwb3NZOiBQb3NZLFxuICAgICAgICAgICAgICAgICAgICBwb3NaOiBQb3NaLFxuICAgICAgICAgICAgICAgICAgICBuZWdYOiBOZWdYLFxuICAgICAgICAgICAgICAgICAgICBuZWdZOiBOZWdZLFxuICAgICAgICAgICAgICAgICAgICBuZWdaOiBOZWdaLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZ2l6bW8+XG4gICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwiU1wiPlxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyBsYWJlbD1cIlNoYXBlXCIgdmFsdWU9e3NoYXBlfSBvbkNoYW5nZT17KHZhbHVlOiBTaGFwZSkgPT4gdXBkYXRlKHZhbHVlLCBmaWxsUnVsZSl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImdob3N0XCI+Z2hvc3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJ0YXJnZXRcIj50YXJnZXQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1ZpZXdPcHRpb25zPlxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImZpbGxSdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbGxSdWxlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBUZ2RHZW9tZXRyeVBhdGhGaWxsUnVsZSkgPT4gdXBkYXRlKHNoYXBlLCB2YWx1ZSl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImV2ZW5vZGRcIj5ldmVub2RkPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwibm9uemVyb1wiPm5vbnplcm88L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1ZpZXdPcHRpb25zPlxuICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgIDwvVmlldz5cbiAgICApXG59XG5cbi8vICNiZWdpbiBmaWxsR3JvdXAoKVxuLyoqXG4gKiBSZXBsYWNlIHRoZSBjb250ZW50IG9mIGBncm91cGAgd2l0aCB0aGUgc2FtZSBwYXRoIGluIGZvdXIgdmVyc2lvbnM6XG4gKiBmbGF0LCB3aXRoIGEgdGhpY2tuZXNzLCB3aXRoIGEgcm91bmQgYmV2ZWwgYW5kIHdpdGggYSBjb25jYXZlIGJldmVsLlxuICovXG5mdW5jdGlvbiBmaWxsR3JvdXAoXG4gICAgY29udGV4dDogVGdkQ29udGV4dCxcbiAgICBncm91cDogVGdkUGFpbnRlclN0YXRlLFxuICAgIG1hdGVyaWFsOiBUZ2RNYXRlcmlhbCxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZmlsbFJ1bGU6IFRnZEdlb21ldHJ5UGF0aEZpbGxSdWxlLFxuKSB7XG4gICAgLy8gVGhlIHByZXZpb3VzIG1lc2hlcyBhcmUgZGVsZXRlZCwgYnV0IG5vdCB0aGUgbWF0ZXJpYWwgdGhleSBzaGFyZS5cbiAgICBncm91cC5yZW1vdmVBbGwoKVxuICAgIGdyb3VwLmFkZChcbiAgICAgICAgLy8gRmxhdC5cbiAgICAgICAgY3JlYXRlU2hhcGUoY29udGV4dCwgbWF0ZXJpYWwsIHBhdGgsIC0xLjUsICsxLjUsIHsgZmxpcFk6IHRydWUsIGZpbGxSdWxlIH0pLFxuICAgICAgICAvLyBXaXRoIGEgdGhpY2tuZXNzLlxuICAgICAgICBjcmVhdGVTaGFwZShjb250ZXh0LCBtYXRlcmlhbCwgcGF0aCwgKzEuNSwgKzEuNSwge1xuICAgICAgICAgICAgZmxpcFk6IHRydWUsXG4gICAgICAgICAgICBmaWxsUnVsZSxcbiAgICAgICAgICAgIHRoaWNrbmVzczogNCxcbiAgICAgICAgfSksXG4gICAgICAgIC8vIFdpdGggYSByb3VuZCBiZXZlbC5cbiAgICAgICAgY3JlYXRlU2hhcGUoY29udGV4dCwgbWF0ZXJpYWwsIHBhdGgsIC0xLjUsIC0xLjUsIHtcbiAgICAgICAgICAgIGZsaXBZOiB0cnVlLFxuICAgICAgICAgICAgZmlsbFJ1bGUsXG4gICAgICAgICAgICB0aGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbDogeyB3aWR0aDogMC44LCBzZWdtZW50czogOCB9LFxuICAgICAgICB9KSxcbiAgICAgICAgLy8gV2l0aCBhIGNvbmNhdmUgYmV2ZWwuXG4gICAgICAgIGNyZWF0ZVNoYXBlKGNvbnRleHQsIG1hdGVyaWFsLCBwYXRoLCArMS41LCAtMS41LCB7XG4gICAgICAgICAgICBmbGlwWTogdHJ1ZSxcbiAgICAgICAgICAgIGZpbGxSdWxlLFxuICAgICAgICAgICAgdGhpY2tuZXNzOiA0LFxuICAgICAgICAgICAgYmV2ZWw6IHsgd2lkdGg6IDAuOCwgc2VnbWVudHM6IDMyLCBwcm9maWxlU2hhcGU6IDAuMTI1IH0sXG4gICAgICAgIH0pLFxuICAgIClcbn1cbi8vICNlbmRcblxuLy8gI2JlZ2luIGNyZWF0ZVNoYXBlKClcbi8qKlxuICogVGhlIGljb25zIGFyZSAyNHgyNC4gT25jZSBmbGlwcGVkLCBpdCBnb2VzIGZyb20gKDAsIC0yNCkgdG8gKDI0LCAwKSxcbiAqIHNvIHdlIGNlbnRlciBpdCBvbiAoeCwgeSkuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNoYXBlKFxuICAgIGNvbnRleHQ6IFRnZENvbnRleHQsXG4gICAgbWF0ZXJpYWw6IFRnZE1hdGVyaWFsLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIG9wdGlvbnM6IFRnZEdlb21ldHJ5UGF0aE9wdGlvbnMsXG4pIHtcbiAgICBjb25zdCBzY2FsZSA9IDAuMVxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGF0aChwYXRoLCBvcHRpb25zKSxcbiAgICAgICAgbWF0ZXJpYWwsXG4gICAgfSlcbiAgICBtZXNoLnRyYW5zZm8uc2V0U2NhbGUoc2NhbGUpXG4gICAgbWVzaC50cmFuc2ZvLnNldFBvc2l0aW9uKHggLSAxMiAqIHNjYWxlLCB5ICsgMTIgKiBzY2FsZSwgMClcbiAgICByZXR1cm4gbWVzaFxufVxuLy8gI2VuZFxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2RHZW9tZXRyeVBhdGgiLCJUZ2RNYXRlcmlhbEdsb2JhbCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVGdkVGV4dHVyZUN1YmUiLCJWaWV3T3B0aW9ucyIsIlZpZXdQYW5lbCIsIlZpZXciLCJVVkdyaWRVUkwiLCJQb3NYIiwiUG9zWSIsIlBvc1oiLCJOZWdYIiwiTmVnWSIsIk5lZ1oiLCJHSE9TVCIsIlRBUkdFVCIsIlNIQVBFUyIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2xlYXIiLCJ0ZXh0dXJlIiwic2t5Ym94IiwibWF0ZXJpYWwiLCJncm91cCIsImZpbGxHcm91cCIsInJlZiIsInNoYXBlIiwic2V0U2hhcGUiLCJfUmVhY3RfdXNlU3RhdGUxIiwiZmlsbFJ1bGUiLCJzZXRGaWxsUnVsZSIsInVwZGF0ZSIsInNjZW5lIiwib25SZWFkeSIsIm9uQ2hhbmdlIiwidmFsdWUiLCJwYXRoIiwiY3JlYXRlU2hhcGUiLCJ4IiwieSIsIm9wdGlvbnMiLCJzY2FsZSIsIm1lc2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1JLFFBQVE7SUFBQyxhQUFZO0lBQTZ1QyxlQUFjO0lBQThyQyxpQkFBZ0I7QUFBNmlCO0FBQ2poRyxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSixzQ0FBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ2xEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR3RDLGtEQUFDTix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPTSxPQUFPSCxPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFHNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h1QjtBQUMrQjtBQUM3QjtBQUVnQztBQUNOO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRTFELElBQU15QixRQUNGO0FBQ0o7OztDQUdDLEdBQ0QsSUFBTUMsU0FDRjtBQUNKLElBQU1DLFNBQVM7SUFBRSxPQUFPRjtJQUFPLFFBQVFDO0FBQU87QUFJOUMsU0FBUztBQUNULFNBQVNFLEtB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