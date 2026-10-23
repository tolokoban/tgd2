"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_deferred-shading_picking_page_mdx-src_components_demo_CodeViewer_Cod-2afc95"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
29730(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _picking_demo__rspack_import_4 = __webpack_require__(14496);
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
    "Initializing WebGL": "    const textureBackground = makeBackgroundTexture(context)\n    // A ring of objects, with an id from 1 to COUNT.\n    const colors: TgdVec4[] = []\n    const highlights: TgdVec4[] = []\n    const materials: TgdMaterial[] = []\n    const children: TgdMesh[] = []\n    const box = new TgdGeometryBox({ sizeX: 0.6, sizeY: 0.6, sizeZ: 0.6 })\n    const sphere = new TgdGeometrySphereIco({ radius: 0.4, subdivisions: 2 })\n    const suzanne = new TgdGeometryGltf({ data: assets.glb.suzanne })\n    // We alternate: box > sphere > suzanne > box > ...\n    const geometries = [box, sphere, suzanne]\n    // Suzanne is about 2 units wide: we scale it down to the size of the others.\n    const scales = [1, 1, 0.35]\n    for (let index = 0; index < COUNT; index++) {\n        const angle = (2 * Math.PI * index) / COUNT\n        const color = TgdColor.fromHSL(index / COUNT, 0.8, 0.5).toVec4()\n        const material = new TgdMaterialToon({ color, shades: 4 })\n        const scale = scales[index % scales.length]\n        colors.push(color)\n        highlights.push(highlightColor(color))\n        materials.push(material)\n        children.push({\n            id: index + 1,\n            geometry: geometries[index % geometries.length],\n            material,\n            transfo: new TgdTransfo({\n                position: [2 * Math.cos(angle), 0, 2 * Math.sin(angle)],\n                scale: [scale, scale, scale],\n            }),\n            visible: true,\n        })\n    }\n    const root: TgdMesh = { transfo: new TgdTransfo(), visible: true, children }\n    // This mesh has no id: it cannot be picked, but it hides the objects behind it.\n    // It does not belong to the rotating root, so it keeps facing the initial camera.\n    const plane: TgdMesh = {\n        geometry: new TgdGeometryPlane({ sizeX: 2.4, sizeY: 2.4 }),\n        material: new TgdMaterialFlatTexture({ texture: textureBackground }),\n        transfo: new TgdTransfo(),\n        visible: true,\n    }\n    const deferred = new TgdPainterDeferredShading(context, {\n        meshes: [root, plane],\n        enableIDs: true,\n    })\n    // Last position of the pointer, in screen space (between -1 and +1).\n    const pointer = { x: 0, y: 0 }\n    context.inputs.pointer.eventHover.addListener((event) => {\n        pointer.x = event.current.x\n        pointer.y = event.current.y\n    })\n    context.inputs.pointer.eventTap.addListener((event) => {\n        const id = deferred.readID(event.x, event.y)\n        if (id > 0) {\n            const index = id - 1\n            colors[index] = TgdColor.fromHSL(Math.random(), 1, 0.5).toVec4()\n            highlights[index] = highlightColor(colors[index])\n        }\n    })\n    context.add(\n        (_time: number, delta: number) => {\n            root.transfo.orbitAroundY(delta * 0.2)\n        },\n        deferred,\n        // The objects move, so we pick at every frame, even if the pointer does not move.\n        () => {\n            const id = deferred.readID(pointer.x, pointer.y)\n            highlight(materials, colors, highlights, id)\n            onHover(id)\n        },\n        new TgdPainterClear(context, { depth: 1 }),\n        new TgdPainterBackground(context, {\n            texture: textureBackground,\n        }),\n        new TgdPainterState(context, {\n            depth: \"off\",\n            cull: \"off\",\n            blend: \"alpha\",\n            children: [\n                new TgdPainterFilter(context, {\n                    texture: deferred.textureAlbedo,\n                    filters: [\n                        new TgdFilterDeferredShading(context, {\n                            ...deferred,\n                            cavity: {},\n                        }),\n                    ],\n                }),\n            ],\n            // children: [new TgdPainterBackground(context, { texture: deferred.textureAlbedo, scaleY: -1 })],\n        }),\n    )\n    context.camera.transfo.orbitAroundX(-0.4)\n    plane.transfo.orientation = context.camera.transfo.orientation\n    context.camera.fitSpaceAtTarget(5.5, 5.5)\n    context.play()",
    "highlight()": "/**\n * The hovered object is painted in white, the others with their own color.\n */\nfunction highlight(materials: { color: TgdVec4 }[], colors: TgdVec4[], highlights: TgdVec4[], id: number) {\n    for (let index = 0; index < materials.length; index++) {\n        materials[index].color = index + 1 === id ? highlights[index] : colors[index]\n    }\n}\n\nfunction highlightColor(input: TgdVec4): TgdVec4 {\n    const color = new TgdColor(input)\n    // color.R += 0.5 * (1 - color.R)\n    // color.G += 0.5 * (1 - color.G)\n    // color.B += 0.5 * (1 - color.B)\n    color.R *= 0.5\n    color.G *= 0.5\n    color.B *= 0.5\n    return color.toVec4()\n}"
};
var FULL = "import {\n    tgdCanvasCreateWithContext2D,\n    TgdColor,\n    type TgdContext,\n    TgdFilter,\n    TgdFilterDeferredShading,\n    TgdFilterVerbatim,\n    TgdGeometryBox,\n    TgdGeometryGltf,\n    TgdGeometryPlane,\n    TgdGeometrySphereIco,\n    TgdMaterial,\n    TgdMaterialDiffuse,\n    TgdMaterialFlatTexture,\n    TgdMaterialToon,\n    type TgdMesh,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterDeferredShading,\n    TgdPainterFilter,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdTransfo,\n    TgdVec4,\n} from \"@tolokoban/tgd\"\nimport { ViewOptions, ViewPanel, ViewSwitch } from \"@tolokoban/ui\"\nimport React from \"react\"\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\ntype Resolution = \"1\" | \"1/2\" | \"1/4\" | \"1/8\"\n\nconst RESOLUTIONS: Record<Resolution, number> = {\n    \"1\": 1,\n    \"1/2\": 1 / 2,\n    \"1/4\": 1 / 4,\n    \"1/8\": 1 / 8,\n}\n\nconst COUNT = 12\n\nfunction init(context: TgdContext, assets: Assets, onHover: (id: number) => void): TgdPainterDeferredShading {\n    const textureBackground = makeBackgroundTexture(context)\n    // A ring of objects, with an id from 1 to COUNT.\n    const colors: TgdVec4[] = []\n    const highlights: TgdVec4[] = []\n    const materials: TgdMaterial[] = []\n    const children: TgdMesh[] = []\n    const box = new TgdGeometryBox({ sizeX: 0.6, sizeY: 0.6, sizeZ: 0.6 })\n    const sphere = new TgdGeometrySphereIco({ radius: 0.4, subdivisions: 2 })\n    const suzanne = new TgdGeometryGltf({ data: assets.glb.suzanne })\n    // We alternate: box > sphere > suzanne > box > ...\n    const geometries = [box, sphere, suzanne]\n    // Suzanne is about 2 units wide: we scale it down to the size of the others.\n    const scales = [1, 1, 0.35]\n    for (let index = 0; index < COUNT; index++) {\n        const angle = (2 * Math.PI * index) / COUNT\n        const color = TgdColor.fromHSL(index / COUNT, 0.8, 0.5).toVec4()\n        const material = new TgdMaterialToon({ color, shades: 4 })\n        const scale = scales[index % scales.length]\n        colors.push(color)\n        highlights.push(highlightColor(color))\n        materials.push(material)\n        children.push({\n            id: index + 1,\n            geometry: geometries[index % geometries.length],\n            material,\n            transfo: new TgdTransfo({\n                position: [2 * Math.cos(angle), 0, 2 * Math.sin(angle)],\n                scale: [scale, scale, scale],\n            }),\n            visible: true,\n        })\n    }\n    const root: TgdMesh = { transfo: new TgdTransfo(), visible: true, children }\n    // This mesh has no id: it cannot be picked, but it hides the objects behind it.\n    // It does not belong to the rotating root, so it keeps facing the initial camera.\n    const plane: TgdMesh = {\n        geometry: new TgdGeometryPlane({ sizeX: 2.4, sizeY: 2.4 }),\n        material: new TgdMaterialFlatTexture({ texture: textureBackground }),\n        transfo: new TgdTransfo(),\n        visible: true,\n    }\n    const deferred = new TgdPainterDeferredShading(context, {\n        meshes: [root, plane],\n        enableIDs: true,\n    })\n    // Last position of the pointer, in screen space (between -1 and +1).\n    const pointer = { x: 0, y: 0 }\n    context.inputs.pointer.eventHover.addListener((event) => {\n        pointer.x = event.current.x\n        pointer.y = event.current.y\n    })\n    context.inputs.pointer.eventTap.addListener((event) => {\n        const id = deferred.readID(event.x, event.y)\n        if (id > 0) {\n            const index = id - 1\n            colors[index] = TgdColor.fromHSL(Math.random(), 1, 0.5).toVec4()\n            highlights[index] = highlightColor(colors[index])\n        }\n    })\n    context.add(\n        (_time: number, delta: number) => {\n            root.transfo.orbitAroundY(delta * 0.2)\n        },\n        deferred,\n        // The objects move, so we pick at every frame, even if the pointer does not move.\n        () => {\n            const id = deferred.readID(pointer.x, pointer.y)\n            highlight(materials, colors, highlights, id)\n            onHover(id)\n        },\n        new TgdPainterClear(context, { depth: 1 }),\n        new TgdPainterBackground(context, {\n            texture: textureBackground,\n        }),\n        new TgdPainterState(context, {\n            depth: \"off\",\n            cull: \"off\",\n            blend: \"alpha\",\n            children: [\n                new TgdPainterFilter(context, {\n                    texture: deferred.textureAlbedo,\n                    filters: [\n                        new TgdFilterDeferredShading(context, {\n                            ...deferred,\n                            cavity: {},\n                        }),\n                    ],\n                }),\n            ],\n            // children: [new TgdPainterBackground(context, { texture: deferred.textureAlbedo, scaleY: -1 })],\n        }),\n    )\n    context.camera.transfo.orbitAroundX(-0.4)\n    plane.transfo.orientation = context.camera.transfo.orientation\n    context.camera.fitSpaceAtTarget(5.5, 5.5)\n    context.play()\n    return deferred\n}\n\nexport default function Demo() {\n    const refDeferred = React.useRef<TgdPainterDeferredShading | null>(null)\n    const [hovered, setHovered] = React.useState(0)\n    const [enableIDs, setEnableIDs] = React.useState(true)\n    const [resolution, setResolution] = React.useState<Resolution>(\"1\")\n    const handleEnableIDsChange = (value: boolean) => {\n        setEnableIDs(value)\n        const deferred = refDeferred.current\n        if (deferred) deferred.enableIDs = value\n    }\n    const handleResolutionChange = (value: Resolution) => {\n        setResolution(value)\n        const deferred = refDeferred.current\n        if (deferred) deferred.resolutionIDs = RESOLUTIONS[value]\n    }\n    return (\n        <View\n            onReady={(context: TgdContext, assets: Assets) => {\n                refDeferred.current = init(context, assets, setHovered)\n            }}\n            assets={{ glb: { suzanne: SuzanneURL } }}\n            controller={{ inertiaOrbit: 1000 }}\n            gizmo>\n            <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" flexWrap=\"wrap\" gap=\"S\">\n                <ViewSwitch value={enableIDs} onChange={handleEnableIDsChange}>\n                    enableIDs\n                </ViewSwitch>\n                <ViewOptions value={resolution} onChange={handleResolutionChange}>\n                    <div key=\"1\">1</div>\n                    <div key=\"1/2\">1/2</div>\n                    <div key=\"1/4\">1/4</div>\n                    <div key=\"1/8\">1/8</div>\n                </ViewOptions>\n                <div>{hovered > 0 ? `Hovered id: ${hovered}` : \"Nothing hovered\"}</div>\n            </ViewPanel>\n        </View>\n    )\n}\n\n/**\n * The hovered object is painted in white, the others with their own color.\n */\nfunction highlight(materials: { color: TgdVec4 }[], colors: TgdVec4[], highlights: TgdVec4[], id: number) {\n    for (let index = 0; index < materials.length; index++) {\n        materials[index].color = index + 1 === id ? highlights[index] : colors[index]\n    }\n}\n\nfunction highlightColor(input: TgdVec4): TgdVec4 {\n    const color = new TgdColor(input)\n    // color.R += 0.5 * (1 - color.R)\n    // color.G += 0.5 * (1 - color.G)\n    // color.B += 0.5 * (1 - color.B)\n    color.R *= 0.5\n    color.G *= 0.5\n    color.B *= 0.5\n    return color.toVec4()\n}\n\nfunction makeBackgroundTexture(context: TgdContext): TgdTexture2D {\n    const W = 2048\n    const H = 2048\n    const { canvas, ctx } = tgdCanvasCreateWithContext2D(W, H)\n\n    ctx.fillStyle = new TgdColor(0.2, 0.3, 0.4, 1).toString()\n    ctx.fillRect(0, 0, W, H)\n    ctx.font = `${Math.min(W, H) / 10}px serif`\n    ctx.fillStyle = new TgdColor(0.8, 0.6, 0.4, 1).toString()\n    ctx.fillText(\"Pick an object\", W / 6, H / 4)\n    const texture = new TgdTexture2D(context).loadBitmap(canvas)\n    return texture\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_picking_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
14496(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_4 = __webpack_require__(21278);
/* import */ var _components_demo_Tgd__rspack_import_5 = __webpack_require__(43475);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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






var RESOLUTIONS = {
    "1": 1,
    "1/2": 1 / 2,
    "1/4": 1 / 4,
    "1/8": 1 / 8
};
var COUNT = 12;
function init(context, assets, onHover) {
    // #begin Initializing WebGL
    var textureBackground = makeBackgroundTexture(context);
    // A ring of objects, with an id from 1 to COUNT.
    var colors = [];
    var highlights = [];
    var materials = [];
    var children = [];
    var box = new _tolokoban_tgd__rspack_import_1.TgdGeometryBox({
        sizeX: 0.6,
        sizeY: 0.6,
        sizeZ: 0.6
    });
    var sphere = new _tolokoban_tgd__rspack_import_1.TgdGeometrySphereIco({
        radius: 0.4,
        subdivisions: 2
    });
    var suzanne = new _tolokoban_tgd__rspack_import_1.TgdGeometryGltf({
        data: assets.glb.suzanne
    });
    // We alternate: box > sphere > suzanne > box > ...
    var geometries = [
        box,
        sphere,
        suzanne
    ];
    // Suzanne is about 2 units wide: we scale it down to the size of the others.
    var scales = [
        1,
        1,
        0.35
    ];
    for(var index = 0; index < COUNT; index++){
        var angle = 2 * Math.PI * index / COUNT;
        var color = _tolokoban_tgd__rspack_import_1.TgdColor.fromHSL(index / COUNT, 0.8, 0.5).toVec4();
        var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialToon({
            color: color,
            shades: 4
        });
        var scale = scales[index % scales.length];
        colors.push(color);
        highlights.push(highlightColor(color));
        materials.push(material);
        children.push({
            id: index + 1,
            geometry: geometries[index % geometries.length],
            material: material,
            transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
                position: [
                    2 * Math.cos(angle),
                    0,
                    2 * Math.sin(angle)
                ],
                scale: [
                    scale,
                    scale,
                    scale
                ]
            }),
            visible: true
        });
    }
    var root = {
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo(),
        visible: true,
        children: children
    };
    // This mesh has no id: it cannot be picked, but it hides the objects behind it.
    // It does not belong to the rotating root, so it keeps facing the initial camera.
    var plane = {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPlane({
            sizeX: 2.4,
            sizeY: 2.4
        }),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlatTexture({
            texture: textureBackground
        }),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo(),
        visible: true
    };
    var deferred = new _tolokoban_tgd__rspack_import_1.TgdPainterDeferredShading(context, {
        meshes: [
            root,
            plane
        ],
        enableIDs: true
    });
    // Last position of the pointer, in screen space (between -1 and +1).
    var pointer = {
        x: 0,
        y: 0
    };
    context.inputs.pointer.eventHover.addListener(function(event) {
        pointer.x = event.current.x;
        pointer.y = event.current.y;
    });
    context.inputs.pointer.eventTap.addListener(function(event) {
        var id = deferred.readID(event.x, event.y);
        if (id > 0) {
            var index = id - 1;
            colors[index] = _tolokoban_tgd__rspack_import_1.TgdColor.fromHSL(Math.random(), 1, 0.5).toVec4();
            highlights[index] = highlightColor(colors[index]);
        }
    });
    context.add(function(_time, delta) {
        root.transfo.orbitAroundY(delta * 0.2);
    }, deferred, // The objects move, so we pick at every frame, even if the pointer does not move.
    function() {
        var id = deferred.readID(pointer.x, pointer.y);
        highlight(materials, colors, highlights, id);
        onHover(id);
    }, new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(context, {
        texture: textureBackground
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "off",
        cull: "off",
        blend: "alpha",
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
                texture: deferred.textureAlbedo,
                filters: [
                    new _tolokoban_tgd__rspack_import_1.TgdFilterDeferredShading(context, _object_spread_props(_object_spread({}, deferred), {
                        cavity: {}
                    }))
                ]
            })
        ]
    }));
    context.camera.transfo.orbitAroundX(-0.4);
    plane.transfo.orientation = context.camera.transfo.orientation;
    context.camera.fitSpaceAtTarget(5.5, 5.5);
    context.play();
    // #end
    return deferred;
}
function Demo() {
    var refDeferred = react__rspack_import_3_default().useRef(null);
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState(0), 2), hovered = _React_useState[0], setHovered = _React_useState[1];
    var _React_useState1 = _sliced_to_array(react__rspack_import_3_default().useState(true), 2), enableIDs = _React_useState1[0], setEnableIDs = _React_useState1[1];
    var _React_useState2 = _sliced_to_array(react__rspack_import_3_default().useState("1"), 2), resolution = _React_useState2[0], setResolution = _React_useState2[1];
    var handleEnableIDsChange = function handleEnableIDsChange(value) {
        setEnableIDs(value);
        var deferred = refDeferred.current;
        if (deferred) deferred.enableIDs = value;
    };
    var handleResolutionChange = function handleResolutionChange(value) {
        setResolution(value);
        var deferred = refDeferred.current;
        if (deferred) deferred.resolutionIDs = RESOLUTIONS[value];
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_5["default"], {
        onReady: function onReady(context, assets) {
            refDeferred.current = init(context, assets, setHovered);
        },
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_4
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
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSwitch, {
                    value: enableIDs,
                    onChange: handleEnableIDsChange,
                    children: "enableIDs"
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/picking.demo.tsx",
                    lineNumber: 168,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewOptions, {
                    value: resolution,
                    onChange: handleResolutionChange,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "1"
                        }, "1", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/picking.demo.tsx",
                            lineNumber: 172,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "1/2"
                        }, "1/2", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/picking.demo.tsx",
                            lineNumber: 173,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "1/4"
                        }, "1/4", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/picking.demo.tsx",
                            lineNumber: 174,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "1/8"
                        }, "1/8", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/picking.demo.tsx",
                            lineNumber: 175,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/picking.demo.tsx",
                    lineNumber: 171,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                    children: hovered > 0 ? "Hovered id: ".concat(hovered) : "Nothing hovered"
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/picking.demo.tsx",
                    lineNumber: 177,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/picking.demo.tsx",
            lineNumber: 167,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/_picking/picking.demo.tsx",
        lineNumber: 160,
        columnNumber: 9
    }, this);
}
// #begin highlight()
/**
 * The hovered object is painted in white, the others with their own color.
 */ function highlight(materials, colors, highlights, id) {
    for(var index = 0; index < materials.length; index++){
        materials[index].color = index + 1 === id ? highlights[index] : colors[index];
    }
}
function highlightColor(input) {
    var color = new _tolokoban_tgd__rspack_import_1.TgdColor(input);
    // color.R += 0.5 * (1 - color.R)
    // color.G += 0.5 * (1 - color.G)
    // color.B += 0.5 * (1 - color.B)
    color.R *= 0.5;
    color.G *= 0.5;
    color.B *= 0.5;
    return color.toVec4();
}
// #end
function makeBackgroundTexture(context) {
    var W = 2048;
    var H = 2048;
    var _tgdCanvasCreateWithContext2D = (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateWithContext2D)(W, H), canvas = _tgdCanvasCreateWithContext2D.canvas, ctx = _tgdCanvasCreateWithContext2D.ctx;
    ctx.fillStyle = new _tolokoban_tgd__rspack_import_1.TgdColor(0.2, 0.3, 0.4, 1).toString();
    ctx.fillRect(0, 0, W, H);
    ctx.font = "".concat(Math.min(W, H) / 10, "px serif");
    ctx.fillStyle = new _tolokoban_tgd__rspack_import_1.TgdColor(0.8, 0.6, 0.4, 1).toString();
    ctx.fillText("Pick an object", W / 6, H / 4);
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(canvas);
    return texture;
}


},
8335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _picking__rspack_import_1 = __webpack_require__(29730);
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
        p: "p",
        pre: "pre",
        span: "span"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: [
                    "Object picking with ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterDeferredShading.html",
                        children: "TgdPainterDeferredShading"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 3,
                        columnNumber: 23
                    }, this)
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move the pointer over the objects to highlight them.\nClick to change their color."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_picking__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Give an ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "id"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    " greater than 0 to the meshes you want to pick, and set the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "enableIDs"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 10,
                        columnNumber: 73
                    }, this),
                    " option.\nA second pass then writes the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "id"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 11,
                        columnNumber: 31
                    }, this),
                    " of these meshes in ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "textureIDs"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 11,
                        columnNumber: 55
                    }, this),
                    " (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "R32UI"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 11,
                        columnNumber: 69
                    }, this),
                    "), and 0 everywhere else.\nThe meshes without ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "id"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 12,
                        columnNumber: 20
                    }, this),
                    " (like the big grey sphere) are not painted in this pass,\nbut they still hide the objects behind them, because the pass is tested against ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "textureDepth"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 13,
                        columnNumber: 81
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                lineNumber: 10,
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
                        }, this),
                        " deferred = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterDeferredShading"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
                        }, this),
                        "(context, {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "meshes"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
                        }, this),
                        ": [{ ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "id"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
                        }, this),
                        ", geometry, material, transfo, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "visible"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-literal",
                            children: "true"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
                        }, this),
                        " }],\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "enableIDs"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-literal",
                            children: "true"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
                        }, this),
                        ",\n})\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Same coordinates as the pointer events: between -1 and +1."
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
                        }, this),
                        " id = deferred.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "readID"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
                        }, this),
                        "(x, y)\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                    lineNumber: 15,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "readID()"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 24,
                        columnNumber: 1
                    }, this),
                    " reads the result of the last ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "paint()"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 24,
                        columnNumber: 41
                    }, this),
                    ". It stalls the GPU pipeline, so call it at most once per frame.\nIn this demo, it is called at every frame because the objects move even if the pointer does not."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                lineNumber: 24,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "If ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "enableIDs"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 27,
                        columnNumber: 4
                    }, this),
                    " is a number, it sets the resolution of ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "textureIDs"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 27,
                        columnNumber: 55
                    }, this),
                    " relative to the other textures:\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "1/4"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 28,
                        columnNumber: 1
                    }, this),
                    " divides its width and height by 4. The pass is cheaper, but the borders of the objects are less precise.\nBoth can be changed at runtime with the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "enableIDs"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 29,
                        columnNumber: 41
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "resolutionIDs"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                        lineNumber: 29,
                        columnNumber: 57
                    }, this),
                    " fields."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                lineNumber: 27,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "The materials are ignored in this pass. A material that moves the vertices in its vertex shader will give wrong IDs."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                lineNumber: 31,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                lineNumber: 33,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter/deferred-shading",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                    lineNumber: 35,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
                lineNumber: 35,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/picking/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9kZWZlcnJlZC1zaGFkaW5nX3BpY2tpbmdfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZC0yYWZjOTUuZTQwMGE5OWRlNDc1ZDE3MC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2RlZmVycmVkLXNoYWRpbmcvcGlja2luZy9fcGlja2luZy9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZGVmZXJyZWQtc2hhZGluZy9waWNraW5nL19waWNraW5nL3BpY2tpbmcuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZGVmZXJyZWQtc2hhZGluZy9waWNraW5nL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9waWNraW5nLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiICAgIGNvbnN0IHRleHR1cmVCYWNrZ3JvdW5kID0gbWFrZUJhY2tncm91bmRUZXh0dXJlKGNvbnRleHQpXFxuICAgIC8vIEEgcmluZyBvZiBvYmplY3RzLCB3aXRoIGFuIGlkIGZyb20gMSB0byBDT1VOVC5cXG4gICAgY29uc3QgY29sb3JzOiBUZ2RWZWM0W10gPSBbXVxcbiAgICBjb25zdCBoaWdobGlnaHRzOiBUZ2RWZWM0W10gPSBbXVxcbiAgICBjb25zdCBtYXRlcmlhbHM6IFRnZE1hdGVyaWFsW10gPSBbXVxcbiAgICBjb25zdCBjaGlsZHJlbjogVGdkTWVzaFtdID0gW11cXG4gICAgY29uc3QgYm94ID0gbmV3IFRnZEdlb21ldHJ5Qm94KHsgc2l6ZVg6IDAuNiwgc2l6ZVk6IDAuNiwgc2l6ZVo6IDAuNiB9KVxcbiAgICBjb25zdCBzcGhlcmUgPSBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oeyByYWRpdXM6IDAuNCwgc3ViZGl2aXNpb25zOiAyIH0pXFxuICAgIGNvbnN0IHN1emFubmUgPSBuZXcgVGdkR2VvbWV0cnlHbHRmKHsgZGF0YTogYXNzZXRzLmdsYi5zdXphbm5lIH0pXFxuICAgIC8vIFdlIGFsdGVybmF0ZTogYm94ID4gc3BoZXJlID4gc3V6YW5uZSA+IGJveCA+IC4uLlxcbiAgICBjb25zdCBnZW9tZXRyaWVzID0gW2JveCwgc3BoZXJlLCBzdXphbm5lXVxcbiAgICAvLyBTdXphbm5lIGlzIGFib3V0IDIgdW5pdHMgd2lkZTogd2Ugc2NhbGUgaXQgZG93biB0byB0aGUgc2l6ZSBvZiB0aGUgb3RoZXJzLlxcbiAgICBjb25zdCBzY2FsZXMgPSBbMSwgMSwgMC4zNV1cXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IENPVU5UOyBpbmRleCsrKSB7XFxuICAgICAgICBjb25zdCBhbmdsZSA9ICgyICogTWF0aC5QSSAqIGluZGV4KSAvIENPVU5UXFxuICAgICAgICBjb25zdCBjb2xvciA9IFRnZENvbG9yLmZyb21IU0woaW5kZXggLyBDT1VOVCwgMC44LCAwLjUpLnRvVmVjNCgpXFxuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbFRvb24oeyBjb2xvciwgc2hhZGVzOiA0IH0pXFxuICAgICAgICBjb25zdCBzY2FsZSA9IHNjYWxlc1tpbmRleCAlIHNjYWxlcy5sZW5ndGhdXFxuICAgICAgICBjb2xvcnMucHVzaChjb2xvcilcXG4gICAgICAgIGhpZ2hsaWdodHMucHVzaChoaWdobGlnaHRDb2xvcihjb2xvcikpXFxuICAgICAgICBtYXRlcmlhbHMucHVzaChtYXRlcmlhbClcXG4gICAgICAgIGNoaWxkcmVuLnB1c2goe1xcbiAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXFxuICAgICAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJpZXNbaW5kZXggJSBnZW9tZXRyaWVzLmxlbmd0aF0sXFxuICAgICAgICAgICAgbWF0ZXJpYWwsXFxuICAgICAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oe1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogWzIgKiBNYXRoLmNvcyhhbmdsZSksIDAsIDIgKiBNYXRoLnNpbihhbmdsZSldLFxcbiAgICAgICAgICAgICAgICBzY2FsZTogW3NjYWxlLCBzY2FsZSwgc2NhbGVdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICB9KVxcbiAgICB9XFxuICAgIGNvbnN0IHJvb3Q6IFRnZE1lc2ggPSB7IHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKCksIHZpc2libGU6IHRydWUsIGNoaWxkcmVuIH1cXG4gICAgLy8gVGhpcyBtZXNoIGhhcyBubyBpZDogaXQgY2Fubm90IGJlIHBpY2tlZCwgYnV0IGl0IGhpZGVzIHRoZSBvYmplY3RzIGJlaGluZCBpdC5cXG4gICAgLy8gSXQgZG9lcyBub3QgYmVsb25nIHRvIHRoZSByb3RhdGluZyByb290LCBzbyBpdCBrZWVwcyBmYWNpbmcgdGhlIGluaXRpYWwgY2FtZXJhLlxcbiAgICBjb25zdCBwbGFuZTogVGdkTWVzaCA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlQbGFuZSh7IHNpemVYOiAyLjQsIHNpemVZOiAyLjQgfSksXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoeyB0ZXh0dXJlOiB0ZXh0dXJlQmFja2dyb3VuZCB9KSxcXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKCksXFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxcbiAgICB9XFxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwge1xcbiAgICAgICAgbWVzaGVzOiBbcm9vdCwgcGxhbmVdLFxcbiAgICAgICAgZW5hYmxlSURzOiB0cnVlLFxcbiAgICB9KVxcbiAgICAvLyBMYXN0IHBvc2l0aW9uIG9mIHRoZSBwb2ludGVyLCBpbiBzY3JlZW4gc3BhY2UgKGJldHdlZW4gLTEgYW5kICsxKS5cXG4gICAgY29uc3QgcG9pbnRlciA9IHsgeDogMCwgeTogMCB9XFxuICAgIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRIb3Zlci5hZGRMaXN0ZW5lcigoZXZlbnQpID0+IHtcXG4gICAgICAgIHBvaW50ZXIueCA9IGV2ZW50LmN1cnJlbnQueFxcbiAgICAgICAgcG9pbnRlci55ID0gZXZlbnQuY3VycmVudC55XFxuICAgIH0pXFxuICAgIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2ZW50KSA9PiB7XFxuICAgICAgICBjb25zdCBpZCA9IGRlZmVycmVkLnJlYWRJRChldmVudC54LCBldmVudC55KVxcbiAgICAgICAgaWYgKGlkID4gMCkge1xcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWQgLSAxXFxuICAgICAgICAgICAgY29sb3JzW2luZGV4XSA9IFRnZENvbG9yLmZyb21IU0woTWF0aC5yYW5kb20oKSwgMSwgMC41KS50b1ZlYzQoKVxcbiAgICAgICAgICAgIGhpZ2hsaWdodHNbaW5kZXhdID0gaGlnaGxpZ2h0Q29sb3IoY29sb3JzW2luZGV4XSlcXG4gICAgICAgIH1cXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICAoX3RpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4ge1xcbiAgICAgICAgICAgIHJvb3QudHJhbnNmby5vcmJpdEFyb3VuZFkoZGVsdGEgKiAwLjIpXFxuICAgICAgICB9LFxcbiAgICAgICAgZGVmZXJyZWQsXFxuICAgICAgICAvLyBUaGUgb2JqZWN0cyBtb3ZlLCBzbyB3ZSBwaWNrIGF0IGV2ZXJ5IGZyYW1lLCBldmVuIGlmIHRoZSBwb2ludGVyIGRvZXMgbm90IG1vdmUuXFxuICAgICAgICAoKSA9PiB7XFxuICAgICAgICAgICAgY29uc3QgaWQgPSBkZWZlcnJlZC5yZWFkSUQocG9pbnRlci54LCBwb2ludGVyLnkpXFxuICAgICAgICAgICAgaGlnaGxpZ2h0KG1hdGVyaWFscywgY29sb3JzLCBoaWdobGlnaHRzLCBpZClcXG4gICAgICAgICAgICBvbkhvdmVyKGlkKVxcbiAgICAgICAgfSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBkZXB0aDogMSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XFxuICAgICAgICAgICAgdGV4dHVyZTogdGV4dHVyZUJhY2tncm91bmQsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBibGVuZDogXFxcImFscGhhXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiBkZWZlcnJlZC50ZXh0dXJlQWxiZWRvLFxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyczogW1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5kZWZlcnJlZCxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F2aXR5OiB7fSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgLy8gY2hpbGRyZW46IFtuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwgeyB0ZXh0dXJlOiBkZWZlcnJlZC50ZXh0dXJlQWxiZWRvLCBzY2FsZVk6IC0xIH0pXSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRYKC0wLjQpXFxuICAgIHBsYW5lLnRyYW5zZm8ub3JpZW50YXRpb24gPSBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLm9yaWVudGF0aW9uXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNS41LCA1LjUpXFxuICAgIGNvbnRleHQucGxheSgpXCIsXCJoaWdobGlnaHQoKVwiOlwiLyoqXFxuICogVGhlIGhvdmVyZWQgb2JqZWN0IGlzIHBhaW50ZWQgaW4gd2hpdGUsIHRoZSBvdGhlcnMgd2l0aCB0aGVpciBvd24gY29sb3IuXFxuICovXFxuZnVuY3Rpb24gaGlnaGxpZ2h0KG1hdGVyaWFsczogeyBjb2xvcjogVGdkVmVjNCB9W10sIGNvbG9yczogVGdkVmVjNFtdLCBoaWdobGlnaHRzOiBUZ2RWZWM0W10sIGlkOiBudW1iZXIpIHtcXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1hdGVyaWFscy5sZW5ndGg7IGluZGV4KyspIHtcXG4gICAgICAgIG1hdGVyaWFsc1tpbmRleF0uY29sb3IgPSBpbmRleCArIDEgPT09IGlkID8gaGlnaGxpZ2h0c1tpbmRleF0gOiBjb2xvcnNbaW5kZXhdXFxuICAgIH1cXG59XFxuXFxuZnVuY3Rpb24gaGlnaGxpZ2h0Q29sb3IoaW5wdXQ6IFRnZFZlYzQpOiBUZ2RWZWM0IHtcXG4gICAgY29uc3QgY29sb3IgPSBuZXcgVGdkQ29sb3IoaW5wdXQpXFxuICAgIC8vIGNvbG9yLlIgKz0gMC41ICogKDEgLSBjb2xvci5SKVxcbiAgICAvLyBjb2xvci5HICs9IDAuNSAqICgxIC0gY29sb3IuRylcXG4gICAgLy8gY29sb3IuQiArPSAwLjUgKiAoMSAtIGNvbG9yLkIpXFxuICAgIGNvbG9yLlIgKj0gMC41XFxuICAgIGNvbG9yLkcgKj0gMC41XFxuICAgIGNvbG9yLkIgKj0gMC41XFxuICAgIHJldHVybiBjb2xvci50b1ZlYzQoKVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQsXFxuICAgIFRnZENvbG9yLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZEZpbHRlcixcXG4gICAgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nLFxcbiAgICBUZ2RGaWx0ZXJWZXJiYXRpbSxcXG4gICAgVGdkR2VvbWV0cnlCb3gsXFxuICAgIFRnZEdlb21ldHJ5R2x0ZixcXG4gICAgVGdkR2VvbWV0cnlQbGFuZSxcXG4gICAgVGdkR2VvbWV0cnlTcGhlcmVJY28sXFxuICAgIFRnZE1hdGVyaWFsLFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZE1hdGVyaWFsRmxhdFRleHR1cmUsXFxuICAgIFRnZE1hdGVyaWFsVG9vbixcXG4gICAgdHlwZSBUZ2RNZXNoLFxcbiAgICBUZ2RQYWludGVyQmFja2dyb3VuZCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nLFxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgVGdkVHJhbnNmbyxcXG4gICAgVGdkVmVjNCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCB7IFZpZXdPcHRpb25zLCBWaWV3UGFuZWwsIFZpZXdTd2l0Y2ggfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3VpXFxcIlxcbmltcG9ydCBSZWFjdCBmcm9tIFxcXCJyZWFjdFxcXCJcXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbnR5cGUgUmVzb2x1dGlvbiA9IFxcXCIxXFxcIiB8IFxcXCIxLzJcXFwiIHwgXFxcIjEvNFxcXCIgfCBcXFwiMS84XFxcIlxcblxcbmNvbnN0IFJFU09MVVRJT05TOiBSZWNvcmQ8UmVzb2x1dGlvbiwgbnVtYmVyPiA9IHtcXG4gICAgXFxcIjFcXFwiOiAxLFxcbiAgICBcXFwiMS8yXFxcIjogMSAvIDIsXFxuICAgIFxcXCIxLzRcXFwiOiAxIC8gNCxcXG4gICAgXFxcIjEvOFxcXCI6IDEgLyA4LFxcbn1cXG5cXG5jb25zdCBDT1VOVCA9IDEyXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cywgb25Ib3ZlcjogKGlkOiBudW1iZXIpID0+IHZvaWQpOiBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nIHtcXG4gICAgY29uc3QgdGV4dHVyZUJhY2tncm91bmQgPSBtYWtlQmFja2dyb3VuZFRleHR1cmUoY29udGV4dClcXG4gICAgLy8gQSByaW5nIG9mIG9iamVjdHMsIHdpdGggYW4gaWQgZnJvbSAxIHRvIENPVU5ULlxcbiAgICBjb25zdCBjb2xvcnM6IFRnZFZlYzRbXSA9IFtdXFxuICAgIGNvbnN0IGhpZ2hsaWdodHM6IFRnZFZlYzRbXSA9IFtdXFxuICAgIGNvbnN0IG1hdGVyaWFsczogVGdkTWF0ZXJpYWxbXSA9IFtdXFxuICAgIGNvbnN0IGNoaWxkcmVuOiBUZ2RNZXNoW10gPSBbXVxcbiAgICBjb25zdCBib3ggPSBuZXcgVGdkR2VvbWV0cnlCb3goeyBzaXplWDogMC42LCBzaXplWTogMC42LCBzaXplWjogMC42IH0pXFxuICAgIGNvbnN0IHNwaGVyZSA9IG5ldyBUZ2RHZW9tZXRyeVNwaGVyZUljbyh7IHJhZGl1czogMC40LCBzdWJkaXZpc2lvbnM6IDIgfSlcXG4gICAgY29uc3Qgc3V6YW5uZSA9IG5ldyBUZ2RHZW9tZXRyeUdsdGYoeyBkYXRhOiBhc3NldHMuZ2xiLnN1emFubmUgfSlcXG4gICAgLy8gV2UgYWx0ZXJuYXRlOiBib3ggPiBzcGhlcmUgPiBzdXphbm5lID4gYm94ID4gLi4uXFxuICAgIGNvbnN0IGdlb21ldHJpZXMgPSBbYm94LCBzcGhlcmUsIHN1emFubmVdXFxuICAgIC8vIFN1emFubmUgaXMgYWJvdXQgMiB1bml0cyB3aWRlOiB3ZSBzY2FsZSBpdCBkb3duIHRvIHRoZSBzaXplIG9mIHRoZSBvdGhlcnMuXFxuICAgIGNvbnN0IHNjYWxlcyA9IFsxLCAxLCAwLjM1XVxcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgQ09VTlQ7IGluZGV4KyspIHtcXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBNYXRoLlBJICogaW5kZXgpIC8gQ09VTlRcXG4gICAgICAgIGNvbnN0IGNvbG9yID0gVGdkQ29sb3IuZnJvbUhTTChpbmRleCAvIENPVU5ULCAwLjgsIDAuNSkudG9WZWM0KClcXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsVG9vbih7IGNvbG9yLCBzaGFkZXM6IDQgfSlcXG4gICAgICAgIGNvbnN0IHNjYWxlID0gc2NhbGVzW2luZGV4ICUgc2NhbGVzLmxlbmd0aF1cXG4gICAgICAgIGNvbG9ycy5wdXNoKGNvbG9yKVxcbiAgICAgICAgaGlnaGxpZ2h0cy5wdXNoKGhpZ2hsaWdodENvbG9yKGNvbG9yKSlcXG4gICAgICAgIG1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKVxcbiAgICAgICAgY2hpbGRyZW4ucHVzaCh7XFxuICAgICAgICAgICAgaWQ6IGluZGV4ICsgMSxcXG4gICAgICAgICAgICBnZW9tZXRyeTogZ2VvbWV0cmllc1tpbmRleCAlIGdlb21ldHJpZXMubGVuZ3RoXSxcXG4gICAgICAgICAgICBtYXRlcmlhbCxcXG4gICAgICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMiAqIE1hdGguY29zKGFuZ2xlKSwgMCwgMiAqIE1hdGguc2luKGFuZ2xlKV0sXFxuICAgICAgICAgICAgICAgIHNjYWxlOiBbc2NhbGUsIHNjYWxlLCBzY2FsZV0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgICAgIH0pXFxuICAgIH1cXG4gICAgY29uc3Qgcm9vdDogVGdkTWVzaCA9IHsgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oKSwgdmlzaWJsZTogdHJ1ZSwgY2hpbGRyZW4gfVxcbiAgICAvLyBUaGlzIG1lc2ggaGFzIG5vIGlkOiBpdCBjYW5ub3QgYmUgcGlja2VkLCBidXQgaXQgaGlkZXMgdGhlIG9iamVjdHMgYmVoaW5kIGl0LlxcbiAgICAvLyBJdCBkb2VzIG5vdCBiZWxvbmcgdG8gdGhlIHJvdGF0aW5nIHJvb3QsIHNvIGl0IGtlZXBzIGZhY2luZyB0aGUgaW5pdGlhbCBjYW1lcmEuXFxuICAgIGNvbnN0IHBsYW5lOiBUZ2RNZXNoID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVBsYW5lKHsgc2l6ZVg6IDIuNCwgc2l6ZVk6IDIuNCB9KSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7IHRleHR1cmU6IHRleHR1cmVCYWNrZ3JvdW5kIH0pLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oKSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XFxuICAgICAgICBtZXNoZXM6IFtyb290LCBwbGFuZV0sXFxuICAgICAgICBlbmFibGVJRHM6IHRydWUsXFxuICAgIH0pXFxuICAgIC8vIExhc3QgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIsIGluIHNjcmVlbiBzcGFjZSAoYmV0d2VlbiAtMSBhbmQgKzEpLlxcbiAgICBjb25zdCBwb2ludGVyID0geyB4OiAwLCB5OiAwIH1cXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudEhvdmVyLmFkZExpc3RlbmVyKChldmVudCkgPT4ge1xcbiAgICAgICAgcG9pbnRlci54ID0gZXZlbnQuY3VycmVudC54XFxuICAgICAgICBwb2ludGVyLnkgPSBldmVudC5jdXJyZW50LnlcXG4gICAgfSlcXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZlbnQpID0+IHtcXG4gICAgICAgIGNvbnN0IGlkID0gZGVmZXJyZWQucmVhZElEKGV2ZW50LngsIGV2ZW50LnkpXFxuICAgICAgICBpZiAoaWQgPiAwKSB7XFxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZCAtIDFcXG4gICAgICAgICAgICBjb2xvcnNbaW5kZXhdID0gVGdkQ29sb3IuZnJvbUhTTChNYXRoLnJhbmRvbSgpLCAxLCAwLjUpLnRvVmVjNCgpXFxuICAgICAgICAgICAgaGlnaGxpZ2h0c1tpbmRleF0gPSBoaWdobGlnaHRDb2xvcihjb2xvcnNbaW5kZXhdKVxcbiAgICAgICAgfVxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIChfdGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA9PiB7XFxuICAgICAgICAgICAgcm9vdC50cmFuc2ZvLm9yYml0QXJvdW5kWShkZWx0YSAqIDAuMilcXG4gICAgICAgIH0sXFxuICAgICAgICBkZWZlcnJlZCxcXG4gICAgICAgIC8vIFRoZSBvYmplY3RzIG1vdmUsIHNvIHdlIHBpY2sgYXQgZXZlcnkgZnJhbWUsIGV2ZW4gaWYgdGhlIHBvaW50ZXIgZG9lcyBub3QgbW92ZS5cXG4gICAgICAgICgpID0+IHtcXG4gICAgICAgICAgICBjb25zdCBpZCA9IGRlZmVycmVkLnJlYWRJRChwb2ludGVyLngsIHBvaW50ZXIueSlcXG4gICAgICAgICAgICBoaWdobGlnaHQobWF0ZXJpYWxzLCBjb2xvcnMsIGhpZ2hsaWdodHMsIGlkKVxcbiAgICAgICAgICAgIG9uSG92ZXIoaWQpXFxuICAgICAgICB9LFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGRlcHRoOiAxIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiB0ZXh0dXJlQmFja2dyb3VuZCxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgICAgIGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmU6IGRlZmVycmVkLnRleHR1cmVBbGJlZG8sXFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRlZmVycmVkLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXZpdHk6IHt9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAvLyBjaGlsZHJlbjogW25ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7IHRleHR1cmU6IGRlZmVycmVkLnRleHR1cmVBbGJlZG8sIHNjYWxlWTogLTEgfSldLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFgoLTAuNClcXG4gICAgcGxhbmUudHJhbnNmby5vcmllbnRhdGlvbiA9IGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb25cXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg1LjUsIDUuNSlcXG4gICAgY29udGV4dC5wbGF5KClcXG4gICAgcmV0dXJuIGRlZmVycmVkXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIGNvbnN0IHJlZkRlZmVycmVkID0gUmVhY3QudXNlUmVmPFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmcgfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBbaG92ZXJlZCwgc2V0SG92ZXJlZF0gPSBSZWFjdC51c2VTdGF0ZSgwKVxcbiAgICBjb25zdCBbZW5hYmxlSURzLCBzZXRFbmFibGVJRHNdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcXG4gICAgY29uc3QgW3Jlc29sdXRpb24sIHNldFJlc29sdXRpb25dID0gUmVhY3QudXNlU3RhdGU8UmVzb2x1dGlvbj4oXFxcIjFcXFwiKVxcbiAgICBjb25zdCBoYW5kbGVFbmFibGVJRHNDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcXG4gICAgICAgIHNldEVuYWJsZUlEcyh2YWx1ZSlcXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gcmVmRGVmZXJyZWQuY3VycmVudFxcbiAgICAgICAgaWYgKGRlZmVycmVkKSBkZWZlcnJlZC5lbmFibGVJRHMgPSB2YWx1ZVxcbiAgICB9XFxuICAgIGNvbnN0IGhhbmRsZVJlc29sdXRpb25DaGFuZ2UgPSAodmFsdWU6IFJlc29sdXRpb24pID0+IHtcXG4gICAgICAgIHNldFJlc29sdXRpb24odmFsdWUpXFxuICAgICAgICBjb25zdCBkZWZlcnJlZCA9IHJlZkRlZmVycmVkLmN1cnJlbnRcXG4gICAgICAgIGlmIChkZWZlcnJlZCkgZGVmZXJyZWQucmVzb2x1dGlvbklEcyA9IFJFU09MVVRJT05TW3ZhbHVlXVxcbiAgICB9XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9eyhjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICAgICAgICAgICAgICByZWZEZWZlcnJlZC5jdXJyZW50ID0gaW5pdChjb250ZXh0LCBhc3NldHMsIHNldEhvdmVyZWQpXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBhc3NldHM9e3sgZ2xiOiB7IHN1emFubmU6IFN1emFubmVVUkwgfSB9fVxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3sgaW5lcnRpYU9yYml0OiAxMDAwIH19XFxuICAgICAgICAgICAgZ2l6bW8+XFxuICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVxcXCJmbGV4XFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiIGZsZXhXcmFwPVxcXCJ3cmFwXFxcIiBnYXA9XFxcIlNcXFwiPlxcbiAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaCB2YWx1ZT17ZW5hYmxlSURzfSBvbkNoYW5nZT17aGFuZGxlRW5hYmxlSURzQ2hhbmdlfT5cXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZUlEc1xcbiAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XFxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyB2YWx1ZT17cmVzb2x1dGlvbn0gb25DaGFuZ2U9e2hhbmRsZVJlc29sdXRpb25DaGFuZ2V9PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcIjFcXFwiPjE8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCIxLzJcXFwiPjEvMjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcIjEvNFxcXCI+MS80PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwiMS84XFxcIj4xLzg8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cXG4gICAgICAgICAgICAgICAgPGRpdj57aG92ZXJlZCA+IDAgPyBgSG92ZXJlZCBpZDogJHtob3ZlcmVkfWAgOiBcXFwiTm90aGluZyBob3ZlcmVkXFxcIn08L2Rpdj5cXG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgIDwvVmlldz5cXG4gICAgKVxcbn1cXG5cXG4vKipcXG4gKiBUaGUgaG92ZXJlZCBvYmplY3QgaXMgcGFpbnRlZCBpbiB3aGl0ZSwgdGhlIG90aGVycyB3aXRoIHRoZWlyIG93biBjb2xvci5cXG4gKi9cXG5mdW5jdGlvbiBoaWdobGlnaHQobWF0ZXJpYWxzOiB7IGNvbG9yOiBUZ2RWZWM0IH1bXSwgY29sb3JzOiBUZ2RWZWM0W10sIGhpZ2hsaWdodHM6IFRnZFZlYzRbXSwgaWQ6IG51bWJlcikge1xcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWF0ZXJpYWxzLmxlbmd0aDsgaW5kZXgrKykge1xcbiAgICAgICAgbWF0ZXJpYWxzW2luZGV4XS5jb2xvciA9IGluZGV4ICsgMSA9PT0gaWQgPyBoaWdobGlnaHRzW2luZGV4XSA6IGNvbG9yc1tpbmRleF1cXG4gICAgfVxcbn1cXG5cXG5mdW5jdGlvbiBoaWdobGlnaHRDb2xvcihpbnB1dDogVGdkVmVjNCk6IFRnZFZlYzQge1xcbiAgICBjb25zdCBjb2xvciA9IG5ldyBUZ2RDb2xvcihpbnB1dClcXG4gICAgLy8gY29sb3IuUiArPSAwLjUgKiAoMSAtIGNvbG9yLlIpXFxuICAgIC8vIGNvbG9yLkcgKz0gMC41ICogKDEgLSBjb2xvci5HKVxcbiAgICAvLyBjb2xvci5CICs9IDAuNSAqICgxIC0gY29sb3IuQilcXG4gICAgY29sb3IuUiAqPSAwLjVcXG4gICAgY29sb3IuRyAqPSAwLjVcXG4gICAgY29sb3IuQiAqPSAwLjVcXG4gICAgcmV0dXJuIGNvbG9yLnRvVmVjNCgpXFxufVxcblxcbmZ1bmN0aW9uIG1ha2VCYWNrZ3JvdW5kVGV4dHVyZShjb250ZXh0OiBUZ2RDb250ZXh0KTogVGdkVGV4dHVyZTJEIHtcXG4gICAgY29uc3QgVyA9IDIwNDhcXG4gICAgY29uc3QgSCA9IDIwNDhcXG4gICAgY29uc3QgeyBjYW52YXMsIGN0eCB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRChXLCBIKVxcblxcbiAgICBjdHguZmlsbFN0eWxlID0gbmV3IFRnZENvbG9yKDAuMiwgMC4zLCAwLjQsIDEpLnRvU3RyaW5nKClcXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIFcsIEgpXFxuICAgIGN0eC5mb250ID0gYCR7TWF0aC5taW4oVywgSCkgLyAxMH1weCBzZXJpZmBcXG4gICAgY3R4LmZpbGxTdHlsZSA9IG5ldyBUZ2RDb2xvcigwLjgsIDAuNiwgMC40LCAxKS50b1N0cmluZygpXFxuICAgIGN0eC5maWxsVGV4dChcXFwiUGljayBhbiBvYmplY3RcXFwiLCBXIC8gNiwgSCAvIDQpXFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoY2FudmFzKVxcbiAgICByZXR1cm4gdGV4dHVyZVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJELFxuICAgIFRnZENvbG9yLFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RGaWx0ZXIsXG4gICAgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nLFxuICAgIFRnZEZpbHRlclZlcmJhdGltLFxuICAgIFRnZEdlb21ldHJ5Qm94LFxuICAgIFRnZEdlb21ldHJ5R2x0ZixcbiAgICBUZ2RHZW9tZXRyeVBsYW5lLFxuICAgIFRnZEdlb21ldHJ5U3BoZXJlSWNvLFxuICAgIFRnZE1hdGVyaWFsLFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlLFxuICAgIFRnZE1hdGVyaWFsVG9vbixcbiAgICB0eXBlIFRnZE1lc2gsXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmcsXG4gICAgVGdkUGFpbnRlckZpbHRlcixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFRyYW5zZm8sXG4gICAgVGdkVmVjNCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IFZpZXdPcHRpb25zLCBWaWV3UGFuZWwsIFZpZXdTd2l0Y2ggfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbnR5cGUgUmVzb2x1dGlvbiA9IFwiMVwiIHwgXCIxLzJcIiB8IFwiMS80XCIgfCBcIjEvOFwiXG5cbmNvbnN0IFJFU09MVVRJT05TOiBSZWNvcmQ8UmVzb2x1dGlvbiwgbnVtYmVyPiA9IHtcbiAgICBcIjFcIjogMSxcbiAgICBcIjEvMlwiOiAxIC8gMixcbiAgICBcIjEvNFwiOiAxIC8gNCxcbiAgICBcIjEvOFwiOiAxIC8gOCxcbn1cblxuY29uc3QgQ09VTlQgPSAxMlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzLCBvbkhvdmVyOiAoaWQ6IG51bWJlcikgPT4gdm9pZCk6IFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmcge1xuICAgIC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcbiAgICBjb25zdCB0ZXh0dXJlQmFja2dyb3VuZCA9IG1ha2VCYWNrZ3JvdW5kVGV4dHVyZShjb250ZXh0KVxuICAgIC8vIEEgcmluZyBvZiBvYmplY3RzLCB3aXRoIGFuIGlkIGZyb20gMSB0byBDT1VOVC5cbiAgICBjb25zdCBjb2xvcnM6IFRnZFZlYzRbXSA9IFtdXG4gICAgY29uc3QgaGlnaGxpZ2h0czogVGdkVmVjNFtdID0gW11cbiAgICBjb25zdCBtYXRlcmlhbHM6IFRnZE1hdGVyaWFsW10gPSBbXVxuICAgIGNvbnN0IGNoaWxkcmVuOiBUZ2RNZXNoW10gPSBbXVxuICAgIGNvbnN0IGJveCA9IG5ldyBUZ2RHZW9tZXRyeUJveCh7IHNpemVYOiAwLjYsIHNpemVZOiAwLjYsIHNpemVaOiAwLjYgfSlcbiAgICBjb25zdCBzcGhlcmUgPSBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oeyByYWRpdXM6IDAuNCwgc3ViZGl2aXNpb25zOiAyIH0pXG4gICAgY29uc3Qgc3V6YW5uZSA9IG5ldyBUZ2RHZW9tZXRyeUdsdGYoeyBkYXRhOiBhc3NldHMuZ2xiLnN1emFubmUgfSlcbiAgICAvLyBXZSBhbHRlcm5hdGU6IGJveCA+IHNwaGVyZSA+IHN1emFubmUgPiBib3ggPiAuLi5cbiAgICBjb25zdCBnZW9tZXRyaWVzID0gW2JveCwgc3BoZXJlLCBzdXphbm5lXVxuICAgIC8vIFN1emFubmUgaXMgYWJvdXQgMiB1bml0cyB3aWRlOiB3ZSBzY2FsZSBpdCBkb3duIHRvIHRoZSBzaXplIG9mIHRoZSBvdGhlcnMuXG4gICAgY29uc3Qgc2NhbGVzID0gWzEsIDEsIDAuMzVdXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IENPVU5UOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBNYXRoLlBJICogaW5kZXgpIC8gQ09VTlRcbiAgICAgICAgY29uc3QgY29sb3IgPSBUZ2RDb2xvci5mcm9tSFNMKGluZGV4IC8gQ09VTlQsIDAuOCwgMC41KS50b1ZlYzQoKVxuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbFRvb24oeyBjb2xvciwgc2hhZGVzOiA0IH0pXG4gICAgICAgIGNvbnN0IHNjYWxlID0gc2NhbGVzW2luZGV4ICUgc2NhbGVzLmxlbmd0aF1cbiAgICAgICAgY29sb3JzLnB1c2goY29sb3IpXG4gICAgICAgIGhpZ2hsaWdodHMucHVzaChoaWdobGlnaHRDb2xvcihjb2xvcikpXG4gICAgICAgIG1hdGVyaWFscy5wdXNoKG1hdGVyaWFsKVxuICAgICAgICBjaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXG4gICAgICAgICAgICBnZW9tZXRyeTogZ2VvbWV0cmllc1tpbmRleCAlIGdlb21ldHJpZXMubGVuZ3RoXSxcbiAgICAgICAgICAgIG1hdGVyaWFsLFxuICAgICAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMiAqIE1hdGguY29zKGFuZ2xlKSwgMCwgMiAqIE1hdGguc2luKGFuZ2xlKV0sXG4gICAgICAgICAgICAgICAgc2NhbGU6IFtzY2FsZSwgc2NhbGUsIHNjYWxlXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3Qgcm9vdDogVGdkTWVzaCA9IHsgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oKSwgdmlzaWJsZTogdHJ1ZSwgY2hpbGRyZW4gfVxuICAgIC8vIFRoaXMgbWVzaCBoYXMgbm8gaWQ6IGl0IGNhbm5vdCBiZSBwaWNrZWQsIGJ1dCBpdCBoaWRlcyB0aGUgb2JqZWN0cyBiZWhpbmQgaXQuXG4gICAgLy8gSXQgZG9lcyBub3QgYmVsb25nIHRvIHRoZSByb3RhdGluZyByb290LCBzbyBpdCBrZWVwcyBmYWNpbmcgdGhlIGluaXRpYWwgY2FtZXJhLlxuICAgIGNvbnN0IHBsYW5lOiBUZ2RNZXNoID0ge1xuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoeyBzaXplWDogMi40LCBzaXplWTogMi40IH0pLFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoeyB0ZXh0dXJlOiB0ZXh0dXJlQmFja2dyb3VuZCB9KSxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oKSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICB9XG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XG4gICAgICAgIG1lc2hlczogW3Jvb3QsIHBsYW5lXSxcbiAgICAgICAgZW5hYmxlSURzOiB0cnVlLFxuICAgIH0pXG4gICAgLy8gTGFzdCBwb3NpdGlvbiBvZiB0aGUgcG9pbnRlciwgaW4gc2NyZWVuIHNwYWNlIChiZXR3ZWVuIC0xIGFuZCArMSkuXG4gICAgY29uc3QgcG9pbnRlciA9IHsgeDogMCwgeTogMCB9XG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudEhvdmVyLmFkZExpc3RlbmVyKChldmVudCkgPT4ge1xuICAgICAgICBwb2ludGVyLnggPSBldmVudC5jdXJyZW50LnhcbiAgICAgICAgcG9pbnRlci55ID0gZXZlbnQuY3VycmVudC55XG4gICAgfSlcbiAgICBjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGRlZmVycmVkLnJlYWRJRChldmVudC54LCBldmVudC55KVxuICAgICAgICBpZiAoaWQgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkIC0gMVxuICAgICAgICAgICAgY29sb3JzW2luZGV4XSA9IFRnZENvbG9yLmZyb21IU0woTWF0aC5yYW5kb20oKSwgMSwgMC41KS50b1ZlYzQoKVxuICAgICAgICAgICAgaGlnaGxpZ2h0c1tpbmRleF0gPSBoaWdobGlnaHRDb2xvcihjb2xvcnNbaW5kZXhdKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgKF90aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJvb3QudHJhbnNmby5vcmJpdEFyb3VuZFkoZGVsdGEgKiAwLjIpXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmVycmVkLFxuICAgICAgICAvLyBUaGUgb2JqZWN0cyBtb3ZlLCBzbyB3ZSBwaWNrIGF0IGV2ZXJ5IGZyYW1lLCBldmVuIGlmIHRoZSBwb2ludGVyIGRvZXMgbm90IG1vdmUuXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZGVmZXJyZWQucmVhZElEKHBvaW50ZXIueCwgcG9pbnRlci55KVxuICAgICAgICAgICAgaGlnaGxpZ2h0KG1hdGVyaWFscywgY29sb3JzLCBoaWdobGlnaHRzLCBpZClcbiAgICAgICAgICAgIG9uSG92ZXIoaWQpXG4gICAgICAgIH0sXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBkZXB0aDogMSB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcbiAgICAgICAgICAgIHRleHR1cmU6IHRleHR1cmVCYWNrZ3JvdW5kLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogXCJvZmZcIixcbiAgICAgICAgICAgIGN1bGw6IFwib2ZmXCIsXG4gICAgICAgICAgICBibGVuZDogXCJhbHBoYVwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmU6IGRlZmVycmVkLnRleHR1cmVBbGJlZG8sXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRlZmVycmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdml0eToge30sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBjaGlsZHJlbjogW25ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7IHRleHR1cmU6IGRlZmVycmVkLnRleHR1cmVBbGJlZG8sIHNjYWxlWTogLTEgfSldLFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFgoLTAuNClcbiAgICBwbGFuZS50cmFuc2ZvLm9yaWVudGF0aW9uID0gY29udGV4dC5jYW1lcmEudHJhbnNmby5vcmllbnRhdGlvblxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNS41LCA1LjUpXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG4gICAgcmV0dXJuIGRlZmVycmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgY29uc3QgcmVmRGVmZXJyZWQgPSBSZWFjdC51c2VSZWY8VGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gUmVhY3QudXNlU3RhdGUoMClcbiAgICBjb25zdCBbZW5hYmxlSURzLCBzZXRFbmFibGVJRHNdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbcmVzb2x1dGlvbiwgc2V0UmVzb2x1dGlvbl0gPSBSZWFjdC51c2VTdGF0ZTxSZXNvbHV0aW9uPihcIjFcIilcbiAgICBjb25zdCBoYW5kbGVFbmFibGVJRHNDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgc2V0RW5hYmxlSURzKHZhbHVlKVxuICAgICAgICBjb25zdCBkZWZlcnJlZCA9IHJlZkRlZmVycmVkLmN1cnJlbnRcbiAgICAgICAgaWYgKGRlZmVycmVkKSBkZWZlcnJlZC5lbmFibGVJRHMgPSB2YWx1ZVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVSZXNvbHV0aW9uQ2hhbmdlID0gKHZhbHVlOiBSZXNvbHV0aW9uKSA9PiB7XG4gICAgICAgIHNldFJlc29sdXRpb24odmFsdWUpXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gcmVmRGVmZXJyZWQuY3VycmVudFxuICAgICAgICBpZiAoZGVmZXJyZWQpIGRlZmVycmVkLnJlc29sdXRpb25JRHMgPSBSRVNPTFVUSU9OU1t2YWx1ZV1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9eyhjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgIHJlZkRlZmVycmVkLmN1cnJlbnQgPSBpbml0KGNvbnRleHQsIGFzc2V0cywgc2V0SG92ZXJlZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhc3NldHM9e3sgZ2xiOiB7IHN1emFubmU6IFN1emFubmVVUkwgfSB9fVxuICAgICAgICAgICAgY29udHJvbGxlcj17eyBpbmVydGlhT3JiaXQ6IDEwMDAgfX1cbiAgICAgICAgICAgIGdpem1vPlxuICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhXcmFwPVwid3JhcFwiIGdhcD1cIlNcIj5cbiAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaCB2YWx1ZT17ZW5hYmxlSURzfSBvbkNoYW5nZT17aGFuZGxlRW5hYmxlSURzQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlSURzXG4gICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyB2YWx1ZT17cmVzb2x1dGlvbn0gb25DaGFuZ2U9e2hhbmRsZVJlc29sdXRpb25DaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIjFcIj4xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiMS8yXCI+MS8yPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiMS80XCI+MS80PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiMS84XCI+MS84PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cbiAgICAgICAgICAgICAgICA8ZGl2Pntob3ZlcmVkID4gMCA/IGBIb3ZlcmVkIGlkOiAke2hvdmVyZWR9YCA6IFwiTm90aGluZyBob3ZlcmVkXCJ9PC9kaXY+XG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgPC9WaWV3PlxuICAgIClcbn1cblxuLy8gI2JlZ2luIGhpZ2hsaWdodCgpXG4vKipcbiAqIFRoZSBob3ZlcmVkIG9iamVjdCBpcyBwYWludGVkIGluIHdoaXRlLCB0aGUgb3RoZXJzIHdpdGggdGhlaXIgb3duIGNvbG9yLlxuICovXG5mdW5jdGlvbiBoaWdobGlnaHQobWF0ZXJpYWxzOiB7IGNvbG9yOiBUZ2RWZWM0IH1bXSwgY29sb3JzOiBUZ2RWZWM0W10sIGhpZ2hsaWdodHM6IFRnZFZlYzRbXSwgaWQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYXRlcmlhbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIG1hdGVyaWFsc1tpbmRleF0uY29sb3IgPSBpbmRleCArIDEgPT09IGlkID8gaGlnaGxpZ2h0c1tpbmRleF0gOiBjb2xvcnNbaW5kZXhdXG4gICAgfVxufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRDb2xvcihpbnB1dDogVGdkVmVjNCk6IFRnZFZlYzQge1xuICAgIGNvbnN0IGNvbG9yID0gbmV3IFRnZENvbG9yKGlucHV0KVxuICAgIC8vIGNvbG9yLlIgKz0gMC41ICogKDEgLSBjb2xvci5SKVxuICAgIC8vIGNvbG9yLkcgKz0gMC41ICogKDEgLSBjb2xvci5HKVxuICAgIC8vIGNvbG9yLkIgKz0gMC41ICogKDEgLSBjb2xvci5CKVxuICAgIGNvbG9yLlIgKj0gMC41XG4gICAgY29sb3IuRyAqPSAwLjVcbiAgICBjb2xvci5CICo9IDAuNVxuICAgIHJldHVybiBjb2xvci50b1ZlYzQoKVxufVxuLy8gI2VuZFxuXG5mdW5jdGlvbiBtYWtlQmFja2dyb3VuZFRleHR1cmUoY29udGV4dDogVGdkQ29udGV4dCk6IFRnZFRleHR1cmUyRCB7XG4gICAgY29uc3QgVyA9IDIwNDhcbiAgICBjb25zdCBIID0gMjA0OFxuICAgIGNvbnN0IHsgY2FudmFzLCBjdHggfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQoVywgSClcblxuICAgIGN0eC5maWxsU3R5bGUgPSBuZXcgVGdkQ29sb3IoMC4yLCAwLjMsIDAuNCwgMSkudG9TdHJpbmcoKVxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBXLCBIKVxuICAgIGN0eC5mb250ID0gYCR7TWF0aC5taW4oVywgSCkgLyAxMH1weCBzZXJpZmBcbiAgICBjdHguZmlsbFN0eWxlID0gbmV3IFRnZENvbG9yKDAuOCwgMC42LCAwLjQsIDEpLnRvU3RyaW5nKClcbiAgICBjdHguZmlsbFRleHQoXCJQaWNrIGFuIG9iamVjdFwiLCBXIC8gNiwgSCAvIDQpXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChjYW52YXMpXG4gICAgcmV0dXJuIHRleHR1cmVcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCIsIlRnZENvbG9yIiwiVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nIiwiVGdkR2VvbWV0cnlCb3giLCJUZ2RHZW9tZXRyeUdsdGYiLCJUZ2RHZW9tZXRyeVBsYW5lIiwiVGdkR2VvbWV0cnlTcGhlcmVJY28iLCJUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlIiwiVGdkTWF0ZXJpYWxUb29uIiwiVGdkUGFpbnRlckJhY2tncm91bmQiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nIiwiVGdkUGFpbnRlckZpbHRlciIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlRnZFRyYW5zZm8iLCJWaWV3T3B0aW9ucyIsIlZpZXdQYW5lbCIsIlZpZXdTd2l0Y2giLCJTdXphbm5lVVJMIiwiVmlldyIsIlJFU09MVVRJT05TIiwiQ09VTlQiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsIm9uSG92ZXIiLCJ0ZXh0dXJlQmFja2dyb3VuZCIsIm1ha2VCYWNrZ3JvdW5kVGV4dHVyZSIsImNvbG9ycyIsImhpZ2hsaWdodHMiLCJtYXRlcmlhbHMiLCJjaGlsZHJlbiIsImJveCIsInNwaGVyZSIsInN1emFubmUiLCJnZW9tZXRyaWVzIiwic2NhbGVzIiwiaW5kZXgiLCJhbmdsZSIsIk1hdGgiLCJjb2xvciIsIm1hdGVyaWFsIiwic2NhbGUiLCJoaWdobGlnaHRDb2xvciIsInJvb3QiLCJwbGFuZSIsImRlZmVycmVkIiwicG9pbnRlciIsImV2ZW50IiwiaWQiLCJfdGltZSIsImRlbHRhIiwiaGlnaGxpZ2h0IiwicmVmRGVmZXJyZWQiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsIl9SZWFjdF91c2VTdGF0ZTEiLCJlbmFibGVJRHMiLCJzZXRFbmFibGVJRHMiLCJfUmVhY3RfdXNlU3RhdGUyIiwicmVzb2x1dGlvbiIsInNldFJlc29sdXRpb24iLCJoYW5kbGVFbmFibGVJRHNDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZVJlc29sdXRpb25DaGFuZ2UiLCJvblJlYWR5IiwiaW5wdXQiLCJXIiwiSCIsIl90Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEIiwiY2FudmFzIiwiY3R4IiwidGV4dHVyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDcEI7QUFFakMsSUFBTUksUUFBUTtJQUFDLHNCQUFxQjtJQUE0Z0ksZUFBYztBQUErb0I7QUFDN3NKLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHlDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFV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